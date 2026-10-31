import React, { useState } from 'react';
import { DressItem, STORE_INFO } from '../data/fashionData';
import { CurrencyCode, formatCurrency } from '../utils/currency';
import { X, Check, ShoppingBag, MessageCircle, Star, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface DressDetailModalProps {
  dress: DressItem | null;
  currency: CurrencyCode;
  onClose: () => void;
  onAddToCart: (dress: DressItem, selectedColor: string, selectedSize: string) => void;
  onOpenSizeGuide: () => void;
}

export const DressDetailModal: React.FC<DressDetailModalProps> = ({
  dress,
  currency,
  onClose,
  onAddToCart,
  onOpenSizeGuide
}) => {
  if (!dress) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(dress.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(dress.sizes[0] || 'M (38)');
  const [isAdded, setIsAdded] = useState(false);
  const [pincode, setPincode] = useState('');
  const [pincodeChecked, setPincodeChecked] = useState(false);

  const images = dress.galleryImages.length > 0 ? dress.galleryImages : [dress.image];

  const handleAdd = () => {
    onAddToCart(dress, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Modern Maharani Fashions! I want to order this dress:\n\nDress: ${dress.name}\nSize: ${selectedSize}\nColor: ${selectedColor}\nPrice: ₹${dress.priceINR}\n\nPlease confirm availability and payment mode!`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      
      {/* Modal Surface Tier: Strict Zero Radius */}
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl my-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-30 p-2 text-[#4A1525] bg-[#FAF8F5] border border-[#C5A059]/40 hover:bg-[#4A1525] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Photos */}
          <div className="md:col-span-5 p-6 bg-[#F8F4EE] border-b md:border-b-0 md:border-r border-[#C5A059]/25 flex flex-col justify-between">
            <div>
              {/* Badge & Discount */}
              <div className="flex items-center gap-2 mb-3">
                {dress.badge && (
                  <span className="bg-[#FAF8F5] border border-[#C5A059] px-2.5 py-0.5 text-[9px] font-bold text-[#4A1525] uppercase">
                    {dress.badge}
                  </span>
                )}
                <span className="bg-[#ba1a1a] text-white px-2 py-0.5 text-[9px] font-bold uppercase">
                  {dress.discountPercent}% OFF
                </span>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-[#C5A059]/20 bg-[#FAF8F5]">
                <img
                  src={images[activeImageIndex] || dress.image}
                  alt={dress.name}
                  className="w-full h-full object-cover object-top filter saturate-[1.03]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2.5 mt-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-18 border transition-all cursor-pointer overflow-hidden ${
                        activeImageIndex === idx
                          ? 'border-[#4A1525] ring-1 ring-[#4A1525]'
                          : 'border-[#C5A059]/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Guarantees */}
            <div className="mt-6 pt-4 border-t border-[#C5A059]/20 space-y-2 text-xs text-[#524346]">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#25D366]" />
                <span>Free Shipping Above ₹1,499 Across India</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#775a19]" />
                <span>7 Days Hassle-Free Size Exchange</span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Ordering */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Category & Title */}
              <div>
                <span className="text-[10px] uppercase font-sans tracking-[0.16em] text-[#775a19] font-bold block">
                  {dress.categoryLabel}
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#201B1A] font-medium mt-1">
                  {dress.name}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1.5 text-xs text-[#524346]">
                  <div className="flex text-[#E09F3E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">{dress.rating}</span>
                  <span className="text-[#847375]">({dress.reviewCount} customer reviews)</span>
                </div>

                {/* Price Bar */}
                <div className="mt-3 flex items-baseline gap-2.5">
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-[#4A1525] tabular-nums">
                    {formatCurrency(dress.priceINR, currency)}
                  </span>
                  <span className="text-sm text-[#847375] line-through tabular-nums">
                    {formatCurrency(dress.originalPriceINR, currency)}
                  </span>
                  <span className="text-xs font-bold text-[#ba1a1a]">
                    Save {dress.discountPercent}%
                  </span>
                </div>
                <p className="text-[11px] text-[#25D366] font-semibold mt-0.5">
                  Inclusive of all taxes · Cash on Delivery available
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#524346] font-light leading-relaxed border-t border-b border-[#C5A059]/20 py-3">
                {dress.description}
              </p>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase font-sans font-semibold tracking-wider text-[#775a19]">
                    Select Size: <strong className="text-[#4A1525]">{selectedSize}</strong>
                  </label>
                  <button
                    onClick={onOpenSizeGuide}
                    className="text-[11px] text-[#4A1525] hover:text-[#775a19] font-semibold underline underline-offset-2 cursor-pointer"
                  >
                    View Size Guide (Inches)
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {dress.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-2 text-xs font-sans font-semibold border transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#4A1525] text-white border-[#4A1525] shadow-xs'
                          : 'bg-[#F8F4EE] text-[#201B1A] border-[#C5A059]/30 hover:border-[#4A1525]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <label className="text-xs uppercase font-sans font-semibold tracking-wider text-[#775a19] block mb-2">
                  Color: <strong className="text-[#201B1A]">{selectedColor}</strong>
                </label>
                <div className="flex items-center gap-2.5">
                  {dress.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 border text-xs cursor-pointer ${
                        selectedColor === c.name
                          ? 'border-[#4A1525] bg-[#F8F4EE] ring-1 ring-[#4A1525]'
                          : 'border-[#C5A059]/25 bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="w-3.5 h-3.5 border border-black/10" style={{ backgroundColor: c.hex }} />
                      <span className="font-medium text-[#201B1A]">{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* What's in the Box & Fabric specs */}
              <div className="bg-[#F8F4EE] p-3.5 border border-[#C5A059]/20 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#775a19] font-semibold">Package Contains:</span>
                  <span className="text-[#201B1A] font-medium text-right">{dress.includes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#775a19] font-semibold">Fabric:</span>
                  <span className="text-[#201B1A] font-medium text-right">{dress.fabric}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#775a19] font-semibold">Embroidery / Work:</span>
                  <span className="text-[#201B1A] font-medium text-right">{dress.work}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#775a19] font-semibold">Fitting Type:</span>
                  <span className="text-[#201B1A] font-medium text-right">{dress.fit}</span>
                </div>
              </div>

              {/* Pincode Delivery Check */}
              <div className="pt-1">
                <label className="block text-[11px] uppercase tracking-wider text-[#775a19] font-semibold mb-1">
                  Check Delivery Time & COD
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Enter 6-digit Pincode"
                    value={pincode}
                    onChange={(e) => {
                      setPincode(e.target.value);
                      setPincodeChecked(false);
                    }}
                    className="flex-1 bg-transparent py-1.5 px-2 text-xs border border-[#C5A059]/35 focus:outline-none focus:border-[#4A1525]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (pincode.length === 6) setPincodeChecked(true);
                    }}
                    className="btn-regal-secondary px-3 py-1.5 text-xs cursor-pointer"
                  >
                    Check
                  </button>
                </div>
                {pincodeChecked && (
                  <p className="text-[11px] text-[#25D366] font-semibold mt-1">
                    ✓ Available for Delivery in 3-5 days · Cash on Delivery Supported!
                  </p>
                )}
              </div>

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#C5A059]/25 space-y-2.5">
              <button
                onClick={handleAdd}
                className="w-full btn-regal-primary py-3.5 text-xs sm:text-sm tracking-[0.12em] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
                    <span>Add to Bag · {formatCurrency(dress.priceINR, currency)}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] text-white py-3 text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp directly</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
