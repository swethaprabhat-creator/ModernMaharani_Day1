import React, { useState } from 'react';
import { ArrowRight, Check, MapPin, Phone, Mail, Instagram, MessageCircle, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/fashionData';

interface FooterProps {
  onNavSelect: (navId: string) => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavSelect, onOpenSizeGuide }) => {
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneOrEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setPhoneOrEmail('');
    }
  };

  return (
    <footer className="bg-[#FAF8F5] text-[#201B1A] border-t border-[#C5A059]/30 relative overflow-hidden">
      
      {/* Offers & WhatsApp Alerts Subscription Strip */}
      <div className="bg-[#F8F4EE] border-b border-[#C5A059]/25 py-10 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-6 space-y-1">
            <span className="text-[10px] font-sans font-semibold tracking-[0.18em] text-[#775a19] uppercase block">
              VIP WhatsApp Club
            </span>
            <h3 className="font-editorial text-2xl text-[#201B1A] font-medium">
              Get Notified for New Arrivals & Flash Deals
            </h3>
            <p className="text-xs text-[#524346] font-light">
              Receive instant updates when your favorite sizes restock and get exclusive coupon codes.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
              <input
                required
                type="text"
                placeholder="Enter Mobile / WhatsApp Number"
                value={phoneOrEmail}
                onChange={(e) => setPhoneOrEmail(e.target.value)}
                className="w-full bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#201B1A] border border-[#C5A059]/35 focus:border-[#4A1525] focus:outline-none"
              />
              <button
                type="submit"
                className="btn-regal-primary px-5 py-2.5 text-xs whitespace-nowrap tracking-wider flex items-center gap-2 cursor-pointer shrink-0"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-[#C5A059]" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <span>Join Club</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#C5A059]/20">
          
          {/* Brand & Store Summary */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#C5A059] flex items-center justify-center bg-[#F8F4EE]">
                <span className="font-editorial text-xs font-bold text-[#4A1525]">MM</span>
              </div>
              <div>
                <span className="font-editorial text-xl uppercase tracking-wider block font-semibold leading-tight">
                  {STORE_INFO.name}
                </span>
                <span className="text-[10px] tracking-wider text-[#775a19] uppercase font-medium">
                  Women's Ethnic & Fusion Wear
                </span>
              </div>
            </div>

            <p className="text-xs text-[#524346] font-light leading-relaxed max-w-sm">
              Dedicated to bringing you stylish, well-stitched festive kurta sets, chic everyday co-ords, anarkali suits, and party gowns at affordable prices.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs">
              <a
                href={STORE_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#B76E79] hover:text-[#4A1525] font-semibold"
              >
                <Instagram className="w-4 h-4" />
                <span>{STORE_INFO.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:underline font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Store</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-2 space-y-2.5">
            <span className="text-[11px] font-sans font-bold tracking-wider text-[#775a19] uppercase block">
              Dresses
            </span>
            <ul className="space-y-1.5 text-xs text-[#524346]">
              <li>
                <button onClick={() => onNavSelect('kurta-sets')} className="hover:text-[#4A1525] cursor-pointer">
                  Kurta & Pant Sets
                </button>
              </li>
              <li>
                <button onClick={() => onNavSelect('coord-sets')} className="hover:text-[#4A1525] cursor-pointer">
                  Chic Co-ord Sets
                </button>
              </li>
              <li>
                <button onClick={() => onNavSelect('anarkali-suits')} className="hover:text-[#4A1525] cursor-pointer">
                  Festive Anarkalis
                </button>
              </li>
              <li>
                <button onClick={() => onNavSelect('all')} className="hover:text-[#4A1525] cursor-pointer">
                  Partywear Gowns
                </button>
              </li>
              <li>
                <button onClick={() => onNavSelect('all')} className="hover:text-[#4A1525] cursor-pointer">
                  Everyday Kurtis
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Help */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[11px] font-sans font-bold tracking-wider text-[#775a19] uppercase block">
              Customer Support
            </span>
            <ul className="space-y-1.5 text-xs text-[#524346]">
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-[#4A1525] cursor-pointer text-left">
                  Size Chart (S to 3XL)
                </button>
              </li>
              <li>
                <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-[#4A1525]">
                  Track Order on WhatsApp
                </a>
              </li>
              <li>
                <span className="text-[#524346]">Cash on Delivery (COD)</span>
              </li>
              <li>
                <span className="text-[#524346]">7-Day Size Exchange</span>
              </li>
              <li>
                <span className="text-[#524346]">Delivery in 3-5 Working Days</span>
              </li>
            </ul>
          </div>

          {/* Store Address & Contact */}
          <div className="lg:col-span-3 space-y-2.5">
            <span className="text-[11px] font-sans font-bold tracking-wider text-[#775a19] uppercase block">
              Store Contact
            </span>
            <div className="space-y-2 text-xs text-[#524346]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#4A1525] shrink-0 mt-0.5" />
                <span>{STORE_INFO.storeAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#4A1525] shrink-0" />
                <span className="font-semibold text-[#201B1A]">{STORE_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#4A1525] shrink-0" />
                <span>{STORE_INFO.email}</span>
              </p>
              <p className="text-[11px] text-[#775a19] font-medium pt-1">
                Open Daily: 10:30 AM to 9:30 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#847375]">
          <p>© {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Women's Fashion</span>
            <span>·</span>
            <span>No Sarees</span>
            <span>·</span>
            <span>Pan-India Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
