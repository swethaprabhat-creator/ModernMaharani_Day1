import React from 'react';
import { CartItem, STORE_INFO } from '../data/fashionData';
import { CurrencyCode, formatCurrency } from '../utils/currency';
import { X, Trash2, Plus, Minus, Truck, ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  currency: CurrencyCode;
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  if (!isOpen) return null;

  const subtotalINR = cart.reduce((sum, item) => sum + (item.dress.priceINR * item.quantity), 0);
  const freeShippingThreshold = 1499;
  const isFreeShipping = subtotalINR >= freeShippingThreshold;
  const shippingFee = cart.length === 0 || isFreeShipping ? 0 : 99;
  const totalAmountINR = subtotalINR + shippingFee;

  const handleWhatsAppCheckout = () => {
    let orderSummary = 'Hello Modern Maharani Fashions! I want to place this order:\n\n';
    cart.forEach((item, idx) => {
      orderSummary += `${idx + 1}. ${item.dress.name} - Size: ${item.selectedSize}, Color: ${item.selectedColor}, Qty: ${item.quantity} (₹${item.dress.priceINR * item.quantity})\n`;
    });
    orderSummary += `\nTotal: ₹${totalAmountINR}\nPayment Mode: Cash on Delivery / UPI\n\nPlease share delivery confirmation!`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(orderSummary)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      
      {/* Slide-over Drawer: Strict Zero radius */}
      <div className="w-full max-w-md bg-[#FAF8F5] border-l border-[#C5A059]/40 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#C5A059]/25 flex items-center justify-between bg-[#F8F4EE]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[#C5A059] flex items-center justify-center bg-[#FAF8F5]">
              <span className="font-editorial text-xs font-semibold text-[#4A1525]">MM</span>
            </div>
            <div>
              <h2 className="font-editorial text-xl text-[#201B1A]">Shopping Bag</h2>
              <span className="text-[10px] font-sans font-semibold tracking-wider text-[#775a19] uppercase">
                {cart.length} {cart.length === 1 ? 'Item' : 'Items'} in Bag
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Shopping Bag"
            className="p-1.5 text-[#524346] hover:text-[#4A1525] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#FAF8F5] border-b border-[#C5A059]/20 px-5 py-2.5 text-xs">
          {isFreeShipping ? (
            <p className="text-[#25D366] font-semibold flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              <span>Congrats! You have unlocked Free Delivery across India!</span>
            </p>
          ) : (
            <p className="text-[#775a19]">
              Add ₹{freeShippingThreshold - subtotalINR} more to get <strong>FREE Delivery</strong> (Flat ₹99 shipping below ₹1,499)
            </p>
          )}
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <div className="w-12 h-12 border border-[#C5A059]/40 mx-auto flex items-center justify-center bg-[#F8F4EE]">
                <ShoppingBag className="w-5 h-5 text-[#775a19]" />
              </div>
              <h3 className="font-editorial text-lg text-[#201B1A]">Your Bag is Empty</h3>
              <p className="text-xs text-[#524346] max-w-xs mx-auto font-light">
                Explore our festive kurta sets, co-ords, and dresses starting from ₹1,199.
              </p>
            </div>
          ) : (
            <div className="space-y-4 divide-y divide-[#C5A059]/15">
              {cart.map((item, idx) => (
                <div key={idx} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                  
                  {/* Dress Image */}
                  <div className="w-20 aspect-[3/4] border border-[#C5A059]/25 bg-[#F8F4EE] shrink-0 overflow-hidden">
                    <img
                      src={item.dress.image}
                      alt={item.dress.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Dress Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-editorial text-sm font-medium text-[#201B1A] truncate">
                        {item.dress.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(idx)}
                        aria-label="Remove item"
                        className="text-[#847375] hover:text-[#ba1a1a] p-1 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#524346] space-y-0.5 mt-1">
                      <p><span className="text-[#775a19]">Size:</span> {item.selectedSize}</p>
                      <p><span className="text-[#775a19]">Color:</span> {item.selectedColor}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#C5A059]/15">
                      
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-[#C5A059]/35 bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity - 1)}
                          className="p-1 hover:bg-[#F8F4EE] text-[#524346] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums text-[#201B1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(idx, item.quantity + 1)}
                          className="p-1 hover:bg-[#F8F4EE] text-[#524346] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-sans font-bold text-sm text-[#4A1525] tabular-nums">
                        {formatCurrency(item.dress.priceINR * item.quantity, currency)}
                      </span>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 bg-[#F8F4EE] border-t border-[#C5A059]/30 space-y-3">
            
            <div className="space-y-1.5 text-xs text-[#524346]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium tabular-nums">{formatCurrency(subtotalINR, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="font-medium text-[#25D366]">
                  {shippingFee === 0 ? 'FREE' : formatCurrency(shippingFee, currency)}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#C5A059]/20 font-bold text-sm text-[#201B1A]">
                <span>Total Amount</span>
                <span className="text-[#4A1525] text-base tabular-nums">{formatCurrency(totalAmountINR, currency)}</span>
              </div>
            </div>

            {/* Online Checkout Button */}
            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="w-full btn-regal-primary py-3.5 text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>

            {/* Fast WhatsApp Checkout */}
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-[#25D366] text-white py-2.5 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quick Order on WhatsApp (COD)</span>
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
