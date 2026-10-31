import React, { useState, useMemo } from 'react';
import { WOMEN_COLLECTION, DressItem } from '../data/fashionData';
import { ProductCard } from './ProductCard';
import { CurrencyCode } from '../utils/currency';
import { SlidersHorizontal, Sparkles, Filter, Check } from 'lucide-react';

interface CollectionsGridProps {
  currency: CurrencyCode;
  onQuickView: (dress: DressItem) => void;
  onAddToCart: (dress: DressItem, selectedColor: string, selectedSize: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CollectionsGrid: React.FC<CollectionsGridProps> = ({
  currency,
  onQuickView,
  onAddToCart,
  selectedCategory,
  onCategoryChange
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [under2kOnly, setUnder2kOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Outfits' },
    { id: 'indo-western', label: 'Indo Western (Store Drop)' },
    { id: 'kurta-sets', label: 'Kurta & Pant Sets' },
    { id: 'coord-sets', label: 'Co-ord Sets' },
    { id: 'anarkali-suits', label: 'Anarkali Suits' },
    { id: 'daily-kurtis', label: 'Daily Kurtis' },
  ];

  const filteredDresses = useMemo(() => {
    let list = [...WOMEN_COLLECTION];
    if (selectedCategory !== 'all') {
      list = list.filter((g) => g.category === selectedCategory);
    }
    if (under2kOnly) {
      list = list.filter((g) => g.priceINR <= 1999);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.priceINR - b.priceINR);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.priceINR - a.priceINR);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [selectedCategory, sortBy, under2kOnly]);

  return (
    <section id="collections" className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.18em] text-[#775a19] uppercase">
              Women's Ethnic & Indo-Western
            </span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#201B1A] font-normal">
            Affordable Everyday & Festive Collections
          </h2>
          <p className="text-sm sm:text-base text-[#524346] font-light leading-relaxed">
            Thoughtfully curated women's silhouettes made from georgette, pure cotton, and soft viscose rayon. Beautifully tailored for Indian body shapes from sizes S to 3XL.
          </p>
        </div>

        {/* Filter Chips & Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#C5A059]/25">
          
          {/* Category Chips: Zero Radius, Champagne to Royal Maroon */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-[0.08em] transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#4A1525] text-[#FAF8F5] border border-[#4A1525] shadow-xs font-semibold'
                      : 'bg-[#F8F4EE] text-[#524346] border border-[#C5A059]/30 hover:border-[#4A1525] hover:text-[#4A1525]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Budget Filter & Sorting */}
          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto text-xs text-[#524346]">
            
            {/* Under ₹1,999 Quick Toggle */}
            <button
              onClick={() => setUnder2kOnly(!under2kOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 border transition-all cursor-pointer font-medium ${
                under2kOnly
                  ? 'bg-[#775a19] text-white border-[#775a19]'
                  : 'bg-[#FAF8F5] text-[#775a19] border-[#C5A059]/50 hover:bg-[#F8F4EE]'
              }`}
            >
              <div className="w-3 h-3 border border-current flex items-center justify-center">
                {under2kOnly && <Check className="w-2.5 h-2.5 stroke-[3]" />}
              </div>
              <span>Under ₹1,999 Only</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#775a19]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F4EE] border border-[#C5A059]/35 px-2.5 py-1.5 text-xs font-medium text-[#201B1A] focus:outline-none focus:border-[#4A1525] cursor-pointer"
              >
                <option value="featured">Popular / Best Selling</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated by Customers</option>
              </select>
            </div>

          </div>

        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {filteredDresses.map((dress) => (
            <ProductCard
              key={dress.id}
              dress={dress}
              currency={currency}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Confidence Assurance Strip */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F8F4EE] border border-[#C5A059]/25 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <h4 className="font-editorial text-lg text-[#201B1A]">Affordable For Every Family</h4>
            <p className="text-xs text-[#524346] font-light">Direct boutique rates without showroom markups. High quality stitching that lasts.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l md:border-r border-[#C5A059]/25 pt-4 md:pt-0">
            <h4 className="font-editorial text-lg text-[#201B1A]">No Saree & No Men's Wear</h4>
            <p className="text-xs text-[#524346] font-light">100% specialized in women's Indo-western sets, kurti pants, and comfortable co-ords.</p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 border-[#C5A059]/25 pt-4 md:pt-0">
            <h4 className="font-editorial text-lg text-[#201B1A]">Doorstep COD & Exchange</h4>
            <p className="text-xs text-[#524346] font-light">Inspect upon arrival. Easy 7-day doorstep size replacement.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
