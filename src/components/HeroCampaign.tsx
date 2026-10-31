import React from 'react';
import { ArrowRight, ShoppingBag, ShieldCheck, RefreshCw, Truck, Heart, Instagram, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';

interface HeroCampaignProps {
  onExploreClick: () => void;
  onIndoWesternClick: () => void;
  onInstagramClick: () => void;
}

export const HeroCampaign: React.FC<HeroCampaignProps> = ({
  onExploreClick,
  onIndoWesternClick,
  onInstagramClick
}) => {
  return (
    <section className="relative bg-[#FAF8F5] border-b border-[#C5A059]/25 overflow-hidden">
      
      {/* Subtle warm champagne backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C5A059]/10 via-[#FAF8F5]/0 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-12 sm:pb-16">
        
        {/* Main 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Pitch & Highlights */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Tagline Badge */}
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1.5px] bg-[#C5A059]" />
              <span className="text-[11px] font-sans font-bold tracking-[0.18em] text-[#775a19] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Modern Maharani Fashions · In-Store & Online</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[54px] text-[#201B1A] font-normal leading-[1.12] tracking-[-0.01em] text-balance">
              The All-New <span className="italic font-serif text-[#4A1525]">Indo-Western</span> & Festive Women's Drop
            </h1>

            {/* Subtext */}
            <p className="text-[#524346] text-base sm:text-lg font-light leading-relaxed">
              Step into style with our signature ready-to-wear pre-pleated drape skirts, dhoti cape sets, floral kurta sets, and comfortable co-ords. Designed for real Indian women with premium fabrics and honest, affordable prices.
            </p>

            {/* Price Highlight Banner */}
            <div className="p-3 bg-[#F8F4EE] border border-[#C5A059]/35 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#C5A059] font-bold">✦</span>
                <span className="text-[#201B1A]">
                  Showroom Indo-Western Sets: <strong>₹2,499 – ₹2,899</strong> (Sizes S to XXL)
                </span>
              </div>
              <span className="bg-[#ba1a1a] text-white px-2 py-0.5 text-[10px] font-bold uppercase shrink-0">
                40% OFF
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onIndoWesternClick}
                className="btn-regal-primary px-7 py-3.5 text-xs sm:text-sm tracking-[0.12em] flex items-center gap-2.5 cursor-pointer shadow-sm group"
              >
                <span>Shop Indo-Western Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="btn-regal-secondary px-6 py-3.5 text-xs sm:text-sm tracking-[0.1em] flex items-center gap-2 cursor-pointer"
              >
                <span>View All Outfits</span>
              </button>
            </div>

            {/* Key Customer Guarantees */}
            <div className="pt-5 border-t border-[#C5A059]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#775a19] font-semibold">100% Women's</p>
                <p className="text-xs text-[#201B1A] font-medium mt-0.5">Drapes, Co-ords & Suits</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#775a19] font-semibold">Pocket Friendly</p>
                <p className="text-xs text-[#201B1A] font-medium mt-0.5">Under ₹2,999</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#775a19] font-semibold">Doorstep COD</p>
                <p className="text-xs text-[#201B1A] font-medium mt-0.5">Pay on Delivery</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#775a19] font-semibold">Easy Exchanges</p>
                <p className="text-xs text-[#201B1A] font-medium mt-0.5">7-Day Fit Guarantee</p>
              </div>
            </div>

          </div>

          {/* Right Column: User's Real Store Showroom Photo (/assets/aistudio/MM1_45d61fbe.PNG) */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#C5A059]/40 p-2 sm:p-3 bg-[#F8F4EE] shadow-[0_16px_40px_-10px_rgba(74,21,37,0.18)]">
              
              {/* Badge Overlay */}
              <div className="absolute top-5 right-5 z-20 bg-[#4A1525] text-[#FAF8F5] border border-[#C5A059] px-3 py-1 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-[10px] font-sans font-bold tracking-[0.14em] uppercase">
                  OFFICIAL STORE DISPLAY
                </span>
              </div>

              {/* Verified Store Watermark Tag */}
              <div className="absolute bottom-5 left-5 z-20 bg-[#FAF8F5]/95 backdrop-blur-xs border border-[#C5A059]/60 px-3 py-1.5 shadow-sm flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#B76E79]" />
                <span className="text-[11px] font-semibold text-[#4A1525]">
                  @modernmaharanifashions
                </span>
              </div>

              {/* Real Store Photo Container */}
              <div
                onClick={onIndoWesternClick}
                className="relative overflow-hidden bg-[#EAE8E5] cursor-pointer group"
              >
                <img
                  src="/assets/aistudio/MM1_45d61fbe.PNG"
                  alt="Modern Maharani Indo Western Collection Store Display"
                  className="w-full h-auto object-cover object-center filter saturate-[1.04] transition-transform duration-700 group-hover:scale-102"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#4A1525]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-[#FAF8F5] text-[#4A1525] px-4 py-2 text-xs font-bold uppercase tracking-wider border border-[#C5A059] shadow-md">
                    Tap to Shop These 4 Mannequin Outfits
                  </span>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="pt-3 pb-1 px-1 flex flex-col sm:flex-row justify-between items-center text-xs border-t border-[#C5A059]/20 mt-2 gap-1">
                <span className="font-editorial text-sm font-medium text-[#201B1A]">
                  Signature Indo-Western Drape & Cape Sets
                </span>
                <span className="font-sans font-bold text-[#4A1525] tabular-nums">
                  From ₹2,499 (Crimson, Purple, Olive, Rani)
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
