import React, { useState } from 'react';
import { DressItem, STORE_INFO } from '../data/fashionData';
import { formatCurrency, CurrencyCode } from '../utils/currency';
import { Eye, ShoppingBag, Check, Star, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  dress: DressItem;
  currency: CurrencyCode;
  onQuickView: (dress: DressItem) => void;
  onAddToCart: (dress: DressItem, selectedColor: string, selectedSize: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  dress,
  currency,
  onQuickView,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState(dress.colors[0]?.name || 'Standard');
  const [selectedSize, setSelectedSize] = useState(dress.sizes[0] || 'M (38)');
  const [isAddedBriefly, setIsAddedBriefly] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(dress, selectedColor, selectedSize);
    setIsAddedBriefly(true);
    setTimeout(() => setIsAddedBriefly(false), 1600);
  };

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Modern Maharani Fashions! I want to order "${dress.name}" in size ${selectedSize} (Price: ₹${dress.priceINR}). Is it available?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <article
      onClick={() => onQuickView(dress)}
      className="group relative bg-[#F8F4EE] border border-[#C5A059]/25 p-2 sm:p-3 transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(74,21,37,0.12)] hover:border-[#4A1525]/40 cursor-pointer flex flex-col justify-between"
    >
      {/* Top-Right Badge Ribbon */}
      {dress.badge && (
        <div className="absolute top-4 right-4 z-20 bg-[#FAF8F5] border border-[#C5A059] px-2.5 py-0.5 shadow-xs">
          <span className="text-[9px] font-sans font-bold tracking-[0.14em] text-[#4A1525] uppercase">
            {dress.badge}
          </span>
        </div>
      )}

      {/* Top-Left Discount Pill */}
      <div className="absolute top-4 left-4 z-20 bg-[#ba1a1a] text-white px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
        {dress.discountPercent}% OFF
      </div>

      {/* Dress Image: Strict aspect-ratio: 3/4 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#FAF8F5] border border-[#C5A059]/10">
        <img
          src={dress.image}
          alt={dress.name}
          className="w-full h-full object-cover object-top filter saturate-[1.03] transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Ambient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A1525]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Action Overlay Strip */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(dress);
            }}
            className="flex-1 bg-[#FAF8F5] text-[#4A1525] border border-[#C5A059] py-2 text-[11px] font-semibold uppercase tracking-[0.1em] hover:bg-[#4A1525] hover:text-[#FAF8F5] transition-colors flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          
          <button
            onClick={handleAdd}
            className="bg-[#4A1525] text-[#FAF8F5] border border-[#C5A059] p-2 hover:bg-[#2B1810] transition-colors flex items-center justify-center"
            title="Add to Bag"
          >
            {isAddedBriefly ? (
              <Check className="w-4 h-4 text-[#C5A059]" />
            ) : (
              <ShoppingBag className="w-4 h-4 text-[#FAF8F5]" />
            )}
          </button>
        </div>
      </div>

      {/* Dress Meta */}
      <div className="pt-3.5 pb-2 px-1 text-center flex flex-col items-center">
        
        {/* Category & Rating */}
        <div className="flex items-center gap-2 text-[10px] text-[#775a19] uppercase tracking-wider font-medium">
          <span>{dress.categoryLabel}</span>
          <span className="text-[#C5A059]">·</span>
          <div className="flex items-center text-[#E09F3E] font-semibold">
            <Star className="w-3 h-3 fill-current inline mr-0.5" />
            <span>{dress.rating} ({dress.reviewCount})</span>
          </div>
        </div>

        {/* Dress Name: Playfair Display */}
        <h3 className="font-editorial text-base sm:text-lg text-[#201B1A] font-medium mt-1 group-hover:text-[#4A1525] transition-colors line-clamp-1">
          {dress.name}
        </h3>

        {/* Fabric & Includes info */}
        <p className="text-[11px] text-[#524346] font-normal mt-0.5 line-clamp-1">
          {dress.fabric}
        </p>

        {/* Available Sizes Quick Preview */}
        <div className="flex flex-wrap items-center justify-center gap-1 mt-2">
          {dress.sizes.map((s) => (
            <span
              key={s}
              className="text-[9px] px-1.5 py-0.5 border border-[#C5A059]/30 bg-[#FAF8F5] text-[#524346]"
            >
              {s.split(' ')[0]}
            </span>
          ))}
        </div>

        {/* Price Tag with Strikethrough Discount */}
        <div className="mt-3 pt-2.5 border-t border-[#C5A059]/20 w-full flex items-center justify-between px-1">
          <div className="text-left">
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans font-bold text-base sm:text-lg text-[#4A1525] tabular-nums">
                {formatCurrency(dress.priceINR, currency)}
              </span>
              <span className="text-xs text-[#847375] line-through tabular-nums">
                {formatCurrency(dress.originalPriceINR, currency)}
              </span>
            </div>
            <span className="text-[9px] text-[#25D366] font-semibold block uppercase">
              Free Delivery Eligible
            </span>
          </div>

          {/* Quick WhatsApp Order Icon */}
          <button
            onClick={handleWhatsAppOrder}
            title="Order this dress on WhatsApp"
            className="p-1.5 text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </button>
        </div>

      </div>
    </article>
  );
};
