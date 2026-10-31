import React, { useState } from 'react';
import { INSTAGRAM_LOOKS, InstagramLook, WOMEN_COLLECTION, DressItem, STORE_INFO } from '../data/fashionData';
import { Instagram, Heart, MessageCircle, ShoppingBag, ExternalLink, X, ArrowRight } from 'lucide-react';
import { CurrencyCode, formatCurrency } from '../utils/currency';

interface InstagramFeedSectionProps {
  currency: CurrencyCode;
  onSelectDress: (dress: DressItem) => void;
  onAddToCart: (dress: DressItem, selectedColor: string, selectedSize: string) => void;
}

export const InstagramFeedSection: React.FC<InstagramFeedSectionProps> = ({
  currency,
  onSelectDress,
  onAddToCart
}) => {
  const [activeLook, setActiveLook] = useState<InstagramLook | null>(null);

  const handleOpenDressFromPost = (itemId: string) => {
    const found = WOMEN_COLLECTION.find((d) => d.id === itemId);
    if (found) {
      onSelectDress(found);
      setActiveLook(null);
    }
  };

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-[#F8F4EE] border-t border-b border-[#C5A059]/25">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Instagram Profile Header */}
        <div className="bg-[#FAF8F5] border border-[#C5A059]/35 p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Profile Avatar & Details */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-16 rounded-full border-2 border-[#B76E79] p-0.5 bg-gradient-to-tr from-[#fed488] via-[#B76E79] to-[#4A1525] shrink-0">
                <div className="w-full h-full rounded-full bg-[#FAF8F5] flex items-center justify-center border border-white">
                  <span className="font-editorial text-lg font-bold text-[#4A1525]">MM</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-editorial text-xl sm:text-2xl text-[#201B1A]">
                    modernmaharanifashions
                  </h3>
                  <span className="bg-[#3E92CC] text-white text-[9px] px-1 py-0.2 rounded-full font-bold">✓</span>
                </div>
                <p className="text-xs text-[#524346] font-light mt-0.5">
                  Modern Maharani Fashions · Affordable Women Ethnic & Co-ords
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-[#775a19] mt-2 font-medium">
                  <span><strong>148</strong> Posts</span>
                  <span><strong>48.6K</strong> Followers</span>
                  <span><strong>4.9★</strong> Rated Boutique</span>
                </div>
              </div>
            </div>

            {/* Follow on Instagram & WhatsApp Order Button */}
            <div className="flex items-center gap-3">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-regal-secondary px-4 py-2.5 text-xs flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#B76E79]" />
                <span>Visit Instagram</span>
                <ExternalLink className="w-3 h-3 text-[#775a19]" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-4 py-2.5 text-xs font-semibold flex items-center gap-2 hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>DM on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.2em] text-[#775a19] uppercase">
              As Seen On Social Media
            </span>
            <span className="w-4 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl text-[#201B1A]">
            Trending Outfits From Our Feed
          </h2>
          <p className="text-xs sm:text-sm text-[#524346] font-light">
            Recognize these from your feed? Click on any photo to see fabric details, choose your size, and order directly online or via WhatsApp!
          </p>
        </div>

        {/* Instagram 4-Grid Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INSTAGRAM_LOOKS.map((look) => (
            <div
              key={look.id}
              onClick={() => setActiveLook(look)}
              className="bg-[#FAF8F5] border border-[#C5A059]/30 group cursor-pointer hover:shadow-[0_8px_24px_-6px_rgba(74,21,37,0.15)] transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Instagram Card Header */}
              <div className="p-3 flex items-center justify-between border-b border-[#C5A059]/15">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#4A1525] text-white flex items-center justify-center text-[9px] font-editorial">
                    MM
                  </div>
                  <span className="text-xs font-semibold text-[#201B1A]">modernmaharanifashions</span>
                </div>
                <Instagram className="w-3.5 h-3.5 text-[#B76E79]" />
              </div>

              {/* Square Image Container */}
              <div className="relative aspect-square overflow-hidden bg-[#FAF8F5]">
                <img
                  src={look.imageUrl}
                  alt={look.caption}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Tagged Price Badge Overlay */}
                <div className="absolute bottom-3 left-3 bg-[#FAF8F5]/95 backdrop-blur-xs border border-[#C5A059] px-2.5 py-1 text-[11px] font-semibold text-[#4A1525] flex items-center gap-1.5 shadow-sm">
                  <ShoppingBag className="w-3 h-3 text-[#775a19]" />
                  <span>{formatCurrency(look.taggedPriceINR, currency)}</span>
                </div>
              </div>

              {/* Post Interaction Bar & Caption */}
              <div className="p-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#524346]">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[#ba1a1a] font-semibold">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      <span className="tabular-nums">{look.likes}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#524346]">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{look.comments}</span>
                    </span>
                  </div>
                  <span className="text-[10px] text-[#775a19] uppercase tracking-wider font-semibold">
                    Tap to Shop
                  </span>
                </div>

                <p className="text-[11px] text-[#524346] line-clamp-2 leading-relaxed">
                  {look.caption}
                </p>

                <div className="pt-2 border-t border-[#C5A059]/15 flex items-center justify-between text-xs font-semibold text-[#4A1525]">
                  <span className="truncate max-w-[180px]">{look.taggedItemName}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#C5A059]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Instagram Post Quick Shop Modal */}
      {activeLook && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-xl overflow-hidden">
            <button
              onClick={() => setActiveLook(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-20 p-1.5 bg-[#FAF8F5] border border-[#C5A059]/30 text-[#4A1525] hover:bg-[#4A1525] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="aspect-[3/4] bg-[#F8F4EE] overflow-hidden">
                <img
                  src={activeLook.imageUrl}
                  alt={activeLook.caption}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-[#C5A059]/20">
                    <div className="w-6 h-6 rounded-full bg-[#4A1525] text-white flex items-center justify-center text-[10px] font-editorial">
                      MM
                    </div>
                    <span className="text-xs font-semibold text-[#201B1A]">modernmaharanifashions</span>
                  </div>

                  <p className="text-xs text-[#524346] font-light mt-3 leading-relaxed">
                    {activeLook.caption}
                  </p>

                  <div className="mt-4 p-3 bg-[#F8F4EE] border border-[#C5A059]/25">
                    <span className="text-[10px] uppercase font-semibold text-[#775a19] block">Tagged Outfit:</span>
                    <h4 className="font-editorial text-base text-[#201B1A] font-medium mt-0.5">
                      {activeLook.taggedItemName}
                    </h4>
                    <span className="font-sans font-bold text-lg text-[#4A1525] tabular-nums mt-1 block">
                      {formatCurrency(activeLook.taggedPriceINR, currency)}
                    </span>
                    <span className="text-[10px] text-[#25D366] font-medium">
                      Cash on Delivery Available · Sizes S to 3XL
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleOpenDressFromPost(activeLook.itemId)}
                    className="w-full btn-regal-primary py-3 text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>View Sizes & Full Details</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </button>

                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi, I saw this post on Instagram: ${activeLook.taggedItemName} (₹${activeLook.taggedPriceINR}). Is it available in my size?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] text-white py-2.5 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
