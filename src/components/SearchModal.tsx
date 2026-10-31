import React, { useState, useMemo } from 'react';
import { WOMEN_COLLECTION, DressItem } from '../data/fashionData';
import { CurrencyCode, formatCurrency } from '../utils/currency';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: CurrencyCode;
  onSelectDress: (dress: DressItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currency,
  onSelectDress
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return WOMEN_COLLECTION.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.fabric.toLowerCase().includes(q) ||
        d.categoryLabel.toLowerCase().includes(q) ||
        d.work.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl">
        
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-4 right-4 z-20 p-2 text-[#4A1525] bg-[#FAF8F5] border border-[#C5A059]/30 hover:bg-[#4A1525] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-5">
          
          <div className="relative">
            <Search className="w-5 h-5 text-[#775a19] absolute left-0 top-3.5" />
            <input
              type="text"
              autoFocus
              placeholder="Search by kurta, Alia cut, co-ord, anarkali, cotton, georgette..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent pl-8 pr-4 py-3 text-lg font-editorial text-[#201B1A] placeholder:text-[#847375] border-b border-[#201B1A]/25 focus:border-[#C5A059] focus:outline-none transition-colors"
            />
          </div>

          {!query && (
            <div className="space-y-2 pt-2">
              <span className="text-[10px] uppercase font-sans tracking-wider text-[#775a19] font-bold block">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Alia Cut', 'Co-ord Set', 'Pure Cotton', 'Haldi Anarkali', 'Party Gown', 'Under ₹1,999'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs bg-[#F8F4EE] hover:bg-[#4A1525] hover:text-[#FAF8F5] text-[#524346] px-3 py-1.5 border border-[#C5A059]/25 transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && (
            <div className="space-y-3 max-h-80 overflow-y-auto">
              <span className="text-[10px] uppercase tracking-wider text-[#775a19] font-semibold block">
                {searchResults.length} {searchResults.length === 1 ? 'Dress Found' : 'Dresses Found'}
              </span>

              {searchResults.length === 0 ? (
                <p className="text-xs text-[#524346] py-4 italic">
                  No dresses found matching "{query}". WhatsApp us for custom size or stock inquiries.
                </p>
              ) : (
                <div className="divide-y divide-[#C5A059]/15">
                  {searchResults.map((dress) => (
                    <div
                      key={dress.id}
                      onClick={() => {
                        onSelectDress(dress);
                        onClose();
                      }}
                      className="py-3 flex items-center justify-between gap-4 hover:bg-[#F8F4EE] px-2 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={dress.image}
                          alt={dress.name}
                          className="w-12 h-16 object-cover border border-[#C5A059]/30"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-editorial text-sm font-medium text-[#201B1A] group-hover:text-[#4A1525]">
                            {dress.name}
                          </h4>
                          <p className="text-[11px] text-[#524346]">{dress.fabric}</p>
                          <span className="text-[10px] text-[#775a19] uppercase tracking-wider font-semibold">
                            Sizes: {dress.sizes.map(s => s.split(' ')[0]).join(', ')}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-sans font-bold text-sm text-[#4A1525] tabular-nums block">
                          {formatCurrency(dress.priceINR, currency)}
                        </span>
                        <span className="text-[10px] text-[#775a19] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          <span>View Outfit</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
