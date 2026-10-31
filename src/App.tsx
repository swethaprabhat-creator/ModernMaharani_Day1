/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroCampaign } from './components/HeroCampaign';
import { CollectionsGrid } from './components/CollectionsGrid';
import { InstagramFeedSection } from './components/InstagramFeedSection';
import { StoreLocationAndReviews } from './components/StoreLocationAndReviews';
import { DressDetailModal } from './components/DressDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { WOMEN_COLLECTION, DressItem, CartItem, STORE_INFO } from './data/fashionData';
import { CurrencyCode } from './utils/currency';
import { MessageCircle, Check } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState<CurrencyCode>('INR');
  const [activeNav, setActiveNav] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modal States
  const [activeDress, setActiveDress] = useState<DressItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart State with initial item for quick interactive delight
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('mmf_cart_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        dress: WOMEN_COLLECTION[0],
        selectedColor: 'Gulab Pink',
        selectedSize: 'M (38)',
        quantity: 1
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('mmf_cart_v2', JSON.stringify(cart));
  }, [cart]);

  // Navigation handlers
  const handleNavSelect = (navId: string) => {
    setActiveNav(navId);
    if (navId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (navId === 'all') {
      setSelectedCategory('all');
      const el = document.getElementById('collections');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'indo-western' || navId === 'kurta-sets' || navId === 'coord-sets' || navId === 'anarkali-suits') {
      setSelectedCategory(navId);
      const el = document.getElementById('collections');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'instagram') {
      const el = document.getElementById('instagram');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (navId === 'store-details') {
      const el = document.getElementById('store-details');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (dress: DressItem, selectedColor: string, selectedSize: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.dress.id === dress.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          dress,
          selectedColor,
          selectedSize,
          quantity: 1
        }
      ];
    });
    showToast(`Added "${dress.name}" to Bag!`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
    } else {
      setCart((prev) => {
        const next = [...prev];
        next[index].quantity = newQty;
        return next;
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removed from Bag');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#201B1A] flex flex-col font-sans selection:bg-[#4A1525] selection:text-[#FAF8F5]">
      
      {/* Top Bar Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        activeNav={activeNav}
        onNavSelect={handleNavSelect}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroCampaign
          onExploreClick={() => {
            setSelectedCategory('all');
            const el = document.getElementById('collections');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onIndoWesternClick={() => {
            setSelectedCategory('indo-western');
            const el = document.getElementById('collections');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onInstagramClick={() => {
            const el = document.getElementById('instagram');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Collections Catalog Grid (Kurta sets, Co-ords, Anarkalis, Gowns) */}
        <CollectionsGrid
          currency={currency}
          onQuickView={(dress) => setActiveDress(dress)}
          onAddToCart={handleAddToCart}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* As Seen on Instagram Section */}
        <InstagramFeedSection
          currency={currency}
          onSelectDress={(dress) => setActiveDress(dress)}
          onAddToCart={handleAddToCart}
        />

        {/* Physical Store Details & Customer Reviews */}
        <StoreLocationAndReviews />

      </main>

      {/* Footer */}
      <Footer
        onNavSelect={handleNavSelect}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Floating WhatsApp Quick Order Button */}
      <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Modern Maharani Fashions! I want to check available dresses & sizes.')}`}
          target="_blank"
          rel="noreferrer"
          title="Chat with Store on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] text-white py-2.5 px-3.5 shadow-lg hover:bg-[#1EBE5D] transition-transform hover:scale-105 cursor-pointer font-medium text-xs rounded-full"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-sans">Chat & Order</span>
        </a>
      </aside>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#4A1525] text-[#FAF8F5] border border-[#C5A059] px-5 py-3 text-xs tracking-wider flex items-center gap-2.5 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-[#C5A059]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Dress Detail Modal */}
      <DressDetailModal
        dress={activeDress}
        currency={currency}
        onClose={() => setActiveDress(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Fast Checkout Modal with COD */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        currency={currency}
        onOrderCompleted={() => setCart([])}
      />

      {/* Indian Ethnic Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currency={currency}
        onSelectDress={(dress) => setActiveDress(dress)}
      />

    </div>
  );
}
