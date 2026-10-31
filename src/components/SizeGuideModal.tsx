import React from 'react';
import { X, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sizeChart = [
    { size: 'S', numeric: '36', bust: '36"', waist: '32"', hip: '38"', kurtiLength: '44"' },
    { size: 'M', numeric: '38', bust: '38"', waist: '34"', hip: '40"', kurtiLength: '45"' },
    { size: 'L', numeric: '40', bust: '40"', waist: '36"', hip: '42"', kurtiLength: '45"' },
    { size: 'XL', numeric: '42', bust: '42"', waist: '38"', hip: '44"', kurtiLength: '46"' },
    { size: 'XXL', numeric: '44', bust: '44"', waist: '40"', hip: '46"', kurtiLength: '46"' },
    { size: '3XL', numeric: '46', bust: '46"', waist: '42"', hip: '48"', kurtiLength: '46"' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-xl p-6 sm:p-8 space-y-6">
        
        <button
          onClick={onClose}
          aria-label="Close size guide"
          className="absolute top-4 right-4 p-1.5 bg-[#F8F4EE] border border-[#C5A059]/30 text-[#4A1525] hover:bg-[#4A1525] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="border-b border-[#C5A059]/20 pb-3">
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#775a19] font-semibold block">
            Fitting Accuracy
          </span>
          <h3 className="font-editorial text-2xl text-[#201B1A]">
            Women’s Indian Ethnic Size Chart
          </h3>
          <p className="text-xs text-[#524346] font-light mt-0.5">
            Measurements below are in inches. If you are between sizes, we recommend ordering one size up for a relaxed comfortable fit.
          </p>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto border border-[#C5A059]/25 bg-[#F8F4EE]">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#4A1525] text-[#F8F4EE] uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-2.5 px-3">Size</th>
                <th className="py-2.5 px-3">Tag Size</th>
                <th className="py-2.5 px-3">Bust</th>
                <th className="py-2.5 px-3">Waist</th>
                <th className="py-2.5 px-3">Hip</th>
                <th className="py-2.5 px-3">Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C5A059]/15">
              {sizeChart.map((row) => (
                <tr key={row.size} className="hover:bg-[#FAF8F5]">
                  <td className="py-2.5 px-3 font-bold text-[#4A1525]">{row.size}</td>
                  <td className="py-2.5 px-3 font-semibold">{row.numeric}</td>
                  <td className="py-2.5 px-3">{row.bust}</td>
                  <td className="py-2.5 px-3">{row.waist}</td>
                  <td className="py-2.5 px-3">{row.hip}</td>
                  <td className="py-2.5 px-3">{row.kurtiLength}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-[#F8F4EE] border border-[#C5A059]/25 text-xs text-[#524346] space-y-1">
          <p><strong className="text-[#775a19]">Need Help Choosing?</strong> Chat with our store stylist on WhatsApp (+91 98480 23456) with your height and bust measurement, and we'll recommend the ideal size.</p>
          <p><strong className="text-[#775a19]">Easy Exchange:</strong> If the size doesn’t fit, simply WhatsApp us within 7 days for a doorstep exchange.</p>
        </div>

        <button
          onClick={onClose}
          className="w-full btn-regal-primary py-3 text-xs tracking-wider cursor-pointer"
        >
          Got It, Back to Shopping
        </button>

      </div>
    </div>
  );
};
