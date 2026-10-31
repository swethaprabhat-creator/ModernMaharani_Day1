import React from 'react';
import { ShoppingBag, Search, MessageCircle, Instagram } from 'lucide-react';
import { CartItem, STORE_INFO } from '../data/fashionData';
import { CurrencyCode } from '../utils/currency';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  activeNav: string;
  onNavSelect: (navId: string) => void;
  onOpenSearch: () => void;
  onOpenSizeGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cart,
  onOpenCart,
  currency,
  onCurrencyChange,
  activeNav,
  onNavSelect,
  onOpenSearch,
  onOpenSizeGuide
}) => {
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Hi Modern Maharani! I want to check available Indo-Western & Kurta sets.');
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#C5A059]/25 transition-all duration-200">
      
      {/* Top Announcement Banner */}
      <div className="bg-[#4A1525] text-[#F8F4EE] py-2 px-4 text-center text-[11px] sm:text-xs font-sans tracking-wider flex items-center justify-center gap-2 sm:gap-4 flex-wrap border-b border-[#C5A059]/30">
        <span className="font-semibold text-[#FED488]">🌸 NEW IN STORE:</span>
        <span>Signature Indo-Western Collection is Live · Flat 40% OFF</span>
        <span className="hidden md:inline text-[#C5A059]">·</span>
        <span className="hidden md:inline">Cash on Delivery (COD) Available</span>
        <span className="hidden md:inline text-[#C5A059]">·</span>
        <span className="font-medium text-[#FAF8F5]">Free Delivery Above ₹1,499</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Tagline */}
        <button
          onClick={() => onNavSelect('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          {/* Monogram Seal */}
          <div className="w-10 h-10 border border-[#C5A059] flex items-center justify-center bg-[#F8F4EE] group-hover:bg-[#4A1525] transition-colors duration-200 shadow-xs">
            <span className="font-editorial text-sm font-semibold tracking-wider text-[#4A1525] group-hover:text-[#F8F4EE] transition-colors">
              MM
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl tracking-[0.04em] font-normal text-[#201B1A] leading-tight">
              Modern Maharani
            </span>
            <span className="text-[10px] tracking-[0.16em] text-[#775a19] uppercase font-semibold">
              Fashions · Women's Wear
            </span>
          </div>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-[#524346] tracking-wider uppercase">
          <button
            onClick={() => onNavSelect('all')}
            className={`transition-colors py-1 relative ${
              activeNav === 'all' ? 'text-[#4A1525] font-semibold' : 'hover:text-[#4A1525]'
            }`}
          >
            All Dresses
            {activeNav === 'all' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>

          <button
            onClick={() => onNavSelect('indo-western')}
            className={`transition-colors py-1 relative flex items-center gap-1 text-[#4A1525] font-semibold ${
              activeNav === 'indo-western' ? 'text-[#4A1525]' : 'hover:text-[#775a19]'
            }`}
          >
            <span>Indo-Western</span>
            <span className="bg-[#ba1a1a] text-white text-[9px] px-1 py-0.2 font-bold uppercase rounded-xs">
              NEW
            </span>
            {activeNav === 'indo-western' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>

          <button
            onClick={() => onNavSelect('kurta-sets')}
            className={`transition-colors py-1 relative ${
              activeNav === 'kurta-sets' ? 'text-[#4A1525] font-semibold' : 'hover:text-[#4A1525]'
            }`}
          >
            Kurta Sets
            {activeNav === 'kurta-sets' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>

          <button
            onClick={() => onNavSelect('coord-sets')}
            className={`transition-colors py-1 relative ${
              activeNav === 'coord-sets' ? 'text-[#4A1525] font-semibold' : 'hover:text-[#4A1525]'
            }`}
          >
            Co-ord Sets
            {activeNav === 'coord-sets' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>

          <button
            onClick={() => onNavSelect('instagram')}
            className={`transition-colors py-1 relative flex items-center gap-1.5 ${
              activeNav === 'instagram' ? 'text-[#4A1525] font-semibold' : 'hover:text-[#4A1525]'
            }`}
          >
            <Instagram className="w-3.5 h-3.5 text-[#B76E79]" />
            <span>Instagram Feed</span>
            {activeNav === 'instagram' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>

          <button
            onClick={() => onNavSelect('store-details')}
            className={`transition-colors py-1 relative ${
              activeNav === 'store-details' ? 'text-[#4A1525] font-semibold' : 'hover:text-[#4A1525]'
            }`}
          >
            Store Location
            {activeNav === 'store-details' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4A1525]" />
            )}
          </button>
        </nav>

        {/* Right Actions: Currency, Search, Size Guide, WhatsApp & Cart */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Currency Switcher */}
          <div className="hidden sm:flex items-center text-xs border-r border-[#C5A059]/30 pr-3">
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value as any)}
              className="bg-transparent focus:outline-none cursor-pointer font-medium text-[#4A1525]"
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="AED">AED (د.إ)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search dresses"
            className="text-[#524346] hover:text-[#4A1525] transition-colors p-1.5 focus:outline-none cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[1.75]" />
          </button>

          {/* Size Guide Trigger */}
          <button
            onClick={onOpenSizeGuide}
            className="hidden md:inline-block text-[11px] font-sans font-semibold tracking-wider text-[#775a19] hover:text-[#4A1525] underline underline-offset-4 decoration-[#C5A059]/60 uppercase cursor-pointer"
          >
            Size Guide
          </button>

          {/* WhatsApp Direct Order Button */}
          <button
            onClick={handleWhatsAppChat}
            title="Chat & Order on WhatsApp"
            className="hidden sm:flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-2 text-xs font-medium hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="font-sans">Order on WhatsApp</span>
          </button>

          {/* Shopping Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Bag"
            className="text-[#4A1525] relative p-2 hover:bg-[#F8F4EE] transition-colors focus:outline-none cursor-pointer border border-[#C5A059]/40"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#4A1525] text-[#FAF8F5] text-[10px] font-bold w-4 h-4 flex items-center justify-center border border-[#C5A059] tabular-nums">
                {totalCartItems}
              </span>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
