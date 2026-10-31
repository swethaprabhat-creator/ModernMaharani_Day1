import React, { useState } from 'react';
import { CartItem, STORE_INFO } from '../data/fashionData';
import { CurrencyCode, formatCurrency } from '../utils/currency';
import { X, CheckCircle, ShieldCheck, Printer, ArrowRight, Truck, MessageCircle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  currency: CurrencyCode;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  currency,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState({
    name: 'Priya Sharma',
    phone: '9848012345',
    email: 'priyasharma@gmail.com',
    address: 'Flat 302, Sai Residency, Near Lake View Park',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500072',
    paymentMethod: 'cod'
  });

  const [orderId, setOrderId] = useState('');

  const subtotalINR = cart.reduce((sum, item) => sum + (item.dress.priceINR * item.quantity), 0);
  const shippingFee = subtotalINR >= 1499 ? 0 : 99;
  const totalAmountINR = subtotalINR + shippingFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MMF-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(generatedId);
    setStep('confirmation');
  };

  const handleFinish = () => {
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#C5A059]/40 shadow-2xl my-8">
        
        <button
          onClick={onClose}
          aria-label="Close checkout"
          className="absolute top-4 right-4 z-20 p-2 text-[#4A1525] bg-[#FAF8F5] border border-[#C5A059]/30 hover:bg-[#4A1525] hover:text-[#FAF8F5] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="border-b border-[#C5A059]/25 pb-3">
              <span className="text-[10px] font-sans font-semibold tracking-wider text-[#775a19] uppercase block">
                Fast & Secure Checkout
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#201B1A] font-normal mt-0.5">
                Delivery Details & Payment
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Customer Particulars */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#775a19] block border-b border-[#C5A059]/20 pb-1">
                  01. Customer & Contact Info
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                      Mobile Number (For WhatsApp Updates) *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#775a19] block border-b border-[#C5A059]/20 pb-1">
                  02. Delivery Address (Pan-India)
                </span>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                    House / Flat No, Street, Landmark *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                      City *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                      State *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#524346] font-medium mb-1">
                      Pincode *
                    </label>
                    <input
                      required
                      type="text"
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full bg-[#F8F4EE] px-3 py-2 text-xs text-[#201B1A] border border-[#C5A059]/30 focus:border-[#4A1525] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Mode */}
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-sans font-semibold tracking-wider text-[#775a19] block border-b border-[#C5A059]/20 pb-1">
                  03. Payment Mode
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      formData.paymentMethod === 'cod'
                        ? 'bg-[#F8F4EE] border-[#4A1525] ring-1 ring-[#4A1525]'
                        : 'border-[#C5A059]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-[#4A1525] flex items-center justify-center">
                        {formData.paymentMethod === 'cod' && <div className="w-2 h-2 bg-[#4A1525]" />}
                      </div>
                      <span className="font-bold text-xs text-[#201B1A]">Cash on Delivery (COD)</span>
                    </div>
                    <p className="text-[11px] text-[#524346] mt-1">
                      Pay cash or UPI directly to courier delivery partner at doorstep.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'prepaid' })}
                    className={`p-3 text-left border transition-all cursor-pointer ${
                      formData.paymentMethod === 'prepaid'
                        ? 'bg-[#F8F4EE] border-[#4A1525] ring-1 ring-[#4A1525]'
                        : 'border-[#C5A059]/30'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 border border-[#4A1525] flex items-center justify-center">
                        {formData.paymentMethod === 'prepaid' && <div className="w-2 h-2 bg-[#4A1525]" />}
                      </div>
                      <span className="font-bold text-xs text-[#201B1A]">UPI / GPay / Cards</span>
                    </div>
                    <p className="text-[11px] text-[#524346] mt-1">
                      Instant online payment via Google Pay, PhonePe, Paytm or Debit/Credit card.
                    </p>
                  </button>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="bg-[#F8F4EE] p-4 border border-[#C5A059]/30 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span>Items Total ({cart.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="tabular-nums font-medium">{formatCurrency(subtotalINR, currency)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#25D366] font-semibold">{shippingFee === 0 ? 'FREE' : formatCurrency(shippingFee, currency)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#C5A059]/20 font-bold text-sm text-[#4A1525]">
                  <span>Total Payable</span>
                  <span className="text-base tabular-nums">{formatCurrency(totalAmountINR, currency)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-regal-primary py-3.5 text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Place Order ({formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Proceed to Pay'})</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </button>

            </form>

          </div>
        ) : (
          /* Confirmation Receipt */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#F8F4EE] border border-[#25D366] flex items-center justify-center mx-auto text-[#25D366]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] uppercase font-sans font-semibold tracking-wider text-[#775a19] block">
                Order Confirmed
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#201B1A]">
                Thank You, {formData.name}!
              </h2>
              <p className="text-xs text-[#524346] max-w-md mx-auto">
                Your order <strong className="text-[#4A1525] font-mono font-bold">{orderId}</strong> has been received by Modern Maharani Fashions.
              </p>
            </div>

            <div className="bg-[#F8F4EE] border border-[#C5A059]/25 p-5 text-left text-xs max-w-md mx-auto space-y-2">
              <div className="flex justify-between border-b border-[#C5A059]/15 pb-1.5">
                <span className="text-[#775a19]">Delivery Address:</span>
                <span className="font-medium text-[#201B1A] text-right">{formData.address}, {formData.city} - {formData.pincode}</span>
              </div>
              <div className="flex justify-between border-b border-[#C5A059]/15 pb-1.5">
                <span className="text-[#775a19]">Payment Mode:</span>
                <span className="font-semibold text-[#4A1525] uppercase">{formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Prepaid UPI'}</span>
              </div>
              <div className="flex justify-between font-bold text-sm pt-1">
                <span>Total Amount:</span>
                <span className="text-[#4A1525] tabular-nums">{formatCurrency(totalAmountINR, currency)}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#775a19] flex items-center justify-center gap-1.5">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>We've dispatched order tracking details to +91 {formData.phone} on WhatsApp.</span>
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="btn-regal-secondary px-5 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#775a19]" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={handleFinish}
                className="btn-regal-primary px-6 py-2.5 text-xs tracking-wider cursor-pointer"
              >
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
