import React from 'react';
import { STORE_INFO, STORE_REVIEWS } from '../data/fashionData';
import { MapPin, Phone, Clock, MessageCircle, Star, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';

export const StoreLocationAndReviews: React.FC = () => {
  return (
    <section id="store-details" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.18em] text-[#775a19] uppercase">
              Visit Us or Order Online
            </span>
            <span className="w-5 h-[1.5px] bg-[#C5A059]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#201B1A]">
            Store Location & Real Customer Reviews
          </h2>
          <p className="text-sm text-[#524346] font-light">
            We are a dedicated women's fashion store bringing you the best designs at honest, transparent rates. Visit our retail store or enjoy fast doorstep delivery.
          </p>
        </div>

        {/* 2-Column Store & Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Physical Store Card */}
          <div className="lg:col-span-5 bg-[#F8F4EE] border border-[#C5A059]/35 p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="border-b border-[#C5A059]/20 pb-4">
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#775a19] font-semibold block">
                Boutique Outlet
              </span>
              <h3 className="font-editorial text-2xl text-[#201B1A] font-medium mt-1">
                {STORE_INFO.name}
              </h3>
              <p className="text-xs text-[#524346] font-light mt-0.5">
                {STORE_INFO.tagline}
              </p>
            </div>

            {/* Address */}
            <div className="space-y-4 text-xs text-[#524346]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4A1525] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#201B1A] block text-sm font-medium">Store Address:</strong>
                  <p className="leading-relaxed mt-0.5">{STORE_INFO.storeAddress}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#4A1525] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#201B1A] block text-sm font-medium">Store Timings:</strong>
                  <p className="mt-0.5">{STORE_INFO.hours}</p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#4A1525] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#201B1A] block text-sm font-medium">Customer Support & Orders:</strong>
                  <p className="mt-0.5 font-medium text-[#4A1525]">{STORE_INFO.phone}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366] text-white py-3 px-4 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="btn-regal-secondary py-3 px-4 text-xs flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#775a19]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Perks */}
            <div className="pt-4 border-t border-[#C5A059]/20 grid grid-cols-2 gap-3 text-[11px] text-[#775a19]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Fitting Trial Rooms</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Card, UPI & Cash</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Instant Alteration</span>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Ample Parking</span>
              </span>
            </div>

          </div>

          {/* Right Column: Customer Reviews */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Rating Summary Box */}
            <div className="bg-[#FAF8F5] border border-[#C5A059]/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold font-sans text-[#4A1525]">4.8</div>
                <div>
                  <div className="flex text-[#E09F3E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#524346] font-light">
                    Based on 850+ Customer Reviews Across India
                  </span>
                </div>
              </div>

              <div className="text-xs font-semibold text-[#775a19] uppercase tracking-wider">
                98% Recommendation Rate
              </div>
            </div>

            {/* Review Cards */}
            <div className="space-y-4">
              {STORE_REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#F8F4EE] border border-[#C5A059]/20 p-5 space-y-2 hover:border-[#C5A059]/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <strong className="text-[#201B1A] font-medium">{rev.name}</strong>
                      <span className="text-[#847375]">({rev.city})</span>
                      {rev.verifiedPurchase && (
                        <span className="text-[10px] bg-[#25D366]/15 text-[#1b7e3e] px-1.5 py-0.2 font-semibold">
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#847375]">{rev.date}</span>
                  </div>

                  <div className="flex text-[#E09F3E]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-[#524346] font-light leading-relaxed">
                    "{rev.comment}"
                  </p>

                  <div className="pt-1 text-[11px] text-[#775a19]">
                    Purchased: <span className="font-medium text-[#4A1525]">{rev.dressBought}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
