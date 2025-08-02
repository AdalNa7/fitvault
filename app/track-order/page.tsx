'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Search, Package, Truck, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTrackingInfo({
        orderNumber: orderNumber,
        status: 'In Transit',
        estimatedDelivery: '2024-01-15',
        currentLocation: 'London Distribution Center',
        trackingNumber: 'RM123456789GB',
        updates: [
          {
            date: '2024-01-12',
            time: '14:30',
            status: 'Order Confirmed',
            description: 'Your order has been confirmed and is being processed'
          },
          {
            date: '2024-01-13',
            time: '09:15',
            status: 'Processing',
            description: 'Your order is being prepared for shipment'
          },
          {
            date: '2024-01-13',
            time: '16:45',
            status: 'Shipped',
            description: 'Your order has been shipped via Royal Mail'
          },
          {
            date: '2024-01-14',
            time: '08:30',
            status: 'In Transit',
            description: 'Package is in transit to your local delivery office'
          }
        ]
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">Track Your Order</h1>
            <p className="text-zinc-400 text-lg">
              Get real-time updates on your delivery
            </p>
          </div>

          {/* Track Order Form */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <form onSubmit={handleTrackOrder} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="orderNumber" className="block text-white font-semibold mb-2">
                    Order Number
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="Enter your order number"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 text-white py-3 rounded font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <Clock className="w-5 h-5 animate-spin" />
                    <span>Tracking...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Track Order</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Tracking Results */}
          {trackingInfo && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-4">Order Summary</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-zinc-400">Order Number:</span>
                    <p className="text-white font-semibold">{trackingInfo.orderNumber}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Status:</span>
                    <p className="text-white font-semibold">{trackingInfo.status}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Estimated Delivery:</span>
                    <p className="text-white font-semibold">{trackingInfo.estimatedDelivery}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Current Location:</span>
                    <p className="text-white font-semibold">{trackingInfo.currentLocation}</p>
                  </div>
                </div>
              </div>

              {/* Tracking Updates */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-6">Tracking Updates</h2>
                <div className="space-y-4">
                  {trackingInfo.updates.map((update, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-white font-semibold">{update.status}</h3>
                            <p className="text-zinc-400 text-sm">{update.description}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-white text-sm">{update.date}</p>
                            <p className="text-zinc-400 text-xs">{update.time}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <div className="flex items-center mb-4">
                  <Truck className="w-6 h-6 text-red-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Shipping Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-zinc-400">Carrier:</span>
                    <p className="text-white font-semibold">Royal Mail</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Tracking Number:</span>
                    <p className="text-white font-semibold">{trackingInfo.trackingNumber}</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Service:</span>
                    <p className="text-white font-semibold">Tracked 48</p>
                  </div>
                  <div>
                    <span className="text-zinc-400">Signature Required:</span>
                    <p className="text-white font-semibold">Yes</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Help Section */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Can't Find Your Order?</h3>
                <p className="text-zinc-400 text-sm">
                  Check your email for the order confirmation. If you can't find it, contact our customer service.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Delivery Issues?</h3>
                <p className="text-zinc-400 text-sm">
                  If your package is delayed or you have delivery concerns, we're here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 