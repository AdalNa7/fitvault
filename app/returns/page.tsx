import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RotateCcw, Calendar, Package, CreditCard } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-white mb-4">Returns & Exchanges</h1>
            <p className="text-zinc-400 text-lg">
              Easy returns and exchanges within 30 days
            </p>
          </div>

          {/* Return Policy */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <RotateCcw className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Return Policy</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Return Window:</span>
                <span className="text-white font-semibold">30 days from delivery</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Condition Required:</span>
                <span className="text-white">Unworn, unwashed, with tags</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Return Shipping:</span>
                <span className="text-white">Free for UK customers</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Refund Time:</span>
                <span className="text-white">5-10 business days</span>
              </div>
            </div>
          </div>

          {/* Return Process */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">How to Return</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Initiate Return</h3>
                  <p className="text-zinc-400 text-sm">
                    Log into your account and go to "Order History" to start your return process.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Print Label</h3>
                  <p className="text-zinc-400 text-sm">
                    Download and print your prepaid return shipping label.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Package Item</h3>
                  <p className="text-zinc-400 text-sm">
                    Securely package your item with all original tags and packaging.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ship Back</h3>
                  <p className="text-zinc-400 text-sm">
                    Drop off your package at any Royal Mail location or arrange collection.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exchanges */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Exchanges</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Size Exchanges</h3>
                <p className="text-zinc-400 text-sm">
                  Need a different size? We'll exchange your item for the same product in a different size, subject to availability.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Product Exchanges</h3>
                <p className="text-zinc-400 text-sm">
                  Want a different product? We can exchange for items of equal value, with any price difference refunded or charged.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Information */}
          <div className="bg-zinc-900 rounded-lg p-6 mb-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <CreditCard className="w-6 h-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Refund Information</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Refund Methods</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li>• Original payment method (credit/debit card)</li>
                  <li>• PayPal (if used for original purchase)</li>
                  <li>• Store credit for future purchases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Processing Time</h3>
                <p className="text-zinc-400 text-sm">
                  Refunds are processed within 5-10 business days after we receive your return. 
                  Your bank may take additional time to post the refund to your account.
                </p>
              </div>
            </div>
          </div>

          {/* Non-Returnable Items */}
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
            <h2 className="text-2xl font-bold text-white mb-6">Non-Returnable Items</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Sale Items</h3>
                <p className="text-zinc-400 text-sm">
                  Final sale items marked as "No Returns" cannot be returned or exchanged.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Damaged Items</h3>
                <p className="text-zinc-400 text-sm">
                  Items that have been worn, washed, or damaged cannot be returned.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Personalized Items</h3>
                <p className="text-zinc-400 text-sm">
                  Custom or personalized items cannot be returned unless defective.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Gift Cards</h3>
                <p className="text-zinc-400 text-sm">
                  Gift cards and promotional codes are non-refundable.
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