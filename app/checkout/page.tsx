'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, CreditCard, Truck, Shield, Lock, Trash2, Plus, Minus, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/components/CartProvider';

export default function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [orderNumber, setOrderNumber] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { items: cartItems, removeItem, updateQuantity, total: subtotal, clearCart } = useCart();

  // Generate order number on component mount
  useEffect(() => {
    const generateOrderNumber = () => {
      const timestamp = Date.now().toString().slice(-6);
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      return `FV-${timestamp}-${random}`;
    };
    setOrderNumber(generateOrderNumber());
  }, []);

  const shipping = 4.99; // UK shipping
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    // Simulate order processing
    setOrderPlaced(true);
    clearCart(); // Clear the cart after successful order
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/shop" className="flex items-center text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </div>

          {/* Order Number Display */}
          {orderNumber && (
            <div className="mb-8 bg-zinc-900 rounded-lg p-4 border border-zinc-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Order Number</h3>
                  <p className="text-red-500 font-mono text-lg">{orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-400 text-sm">Generated automatically</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Information */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-black text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-black text-white mb-6">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="md:col-span-2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="md:col-span-2 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  >
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-black text-white mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-zinc-700 rounded-lg">
                    <CreditCard className="w-5 h-5 text-red-500" />
                    <span className="text-white font-medium">Credit Card</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-black text-white mb-6">Order Summary</h2>
                
                                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-zinc-400">Your cart is empty</p>
                      <Link href="/shop" className="text-red-500 hover:text-red-400 mt-2 inline-block">
                        Continue Shopping
                      </Link>
                    </div>
                  ) : (
                    cartItems.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex items-center space-x-4 p-4 bg-zinc-800 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium">{item.name}</h3>
                          <p className="text-zinc-400 text-sm">Size: {item.size}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3 text-white" />
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-zinc-700 hover:bg-zinc-600 flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3 text-white" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-white font-semibold">£{(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="block mt-2 text-red-500 hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Totals */}
                <div className="border-t border-zinc-800 pt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Subtotal</span>
                    <span className="text-white">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Shipping</span>
                    <span className="text-white">£{shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-white">£{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Security & Shipping Info */}
              <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-zinc-300 text-sm">Secure checkout with SSL encryption</span>
                  </div>
                                     <div className="flex items-center space-x-3">
                     <Truck className="w-5 h-5 text-blue-500" />
                     <span className="text-zinc-300 text-sm">Free shipping on orders over £50</span>
                   </div>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-red-500" />
                    <span className="text-zinc-300 text-sm">30-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button 
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  cartItems.length === 0
                    ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white hover:shadow-2xl hover:shadow-red-500/25'
                }`}
              >
                <Lock className="w-5 h-5" />
                <span>{cartItems.length === 0 ? 'Cart Empty' : `Place Order - £${total.toFixed(2)}`}</span>
              </button>

              {/* Order Confirmation */}
              {orderPlaced && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                  <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-md w-full mx-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-black text-white mb-4">Order Confirmed!</h2>
                      <p className="text-zinc-400 mb-6">
                        Thank you for your order. Your order number is:
                      </p>
                      <div className="bg-zinc-800 rounded-lg p-4 mb-6">
                        <p className="text-red-500 font-mono text-lg font-bold">{orderNumber}</p>
                      </div>
                      <p className="text-zinc-400 text-sm mb-6">
                        You'll receive an email confirmation shortly with tracking information.
                      </p>
                      <Link
                        href="/shop"
                        className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 