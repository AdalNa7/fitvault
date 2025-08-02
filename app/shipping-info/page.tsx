import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Truck, Clock, MapPin, Shield } from 'lucide-react';

export default function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">Shipping Information</h1>
            <p className="text-zinc-400 text-lg">
              Fast, secure delivery to your doorstep
            </p>
          </div>

          {/* Shipping Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="flex items-center mb-4">
                <Truck className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-xl font-bold text-white">Standard Delivery</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Cost:</span>
                  <span className="text-white font-semibold">£4.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Delivery Time:</span>
                  <span className="text-white">3-5 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Free over:</span>
                  <span className="text-white">£50</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-xl font-bold text-white">Express Delivery</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Cost:</span>
                  <span className="text-white font-semibold">£9.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Delivery Time:</span>
                  <span className="text-white">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Free over:</span>
                  <span className="text-white">£100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Areas */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Delivery Areas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">UK Mainland</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• England</li>
                  <li>• Scotland</li>
                  <li>• Wales</li>
                  <li>• Northern Ireland</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Excluded Areas</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Channel Islands</li>
                  <li>• Isle of Man</li>
                  <li>• Scottish Highlands & Islands</li>
                  <li>• Remote areas may incur additional charges</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Order Tracking</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Order Confirmation</h3>
                  <p className="text-zinc-400 text-sm">You'll receive an email confirmation with your order details</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Processing</h3>
                  <p className="text-zinc-400 text-sm">Your order is prepared and packaged with care</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Shipping</h3>
                  <p className="text-zinc-400 text-sm">Tracking information is sent to your email</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Delivery</h3>
                  <p className="text-zinc-400 text-sm">Your package arrives at your doorstep</p>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Secure Delivery</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Signature Required</h3>
                <p className="text-zinc-400 text-sm">
                  All orders require a signature upon delivery to ensure your items arrive safely.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Insurance Included</h3>
                <p className="text-zinc-400 text-sm">
                  All shipments are fully insured for your peace of mind.
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