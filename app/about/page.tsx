import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Users, Target, Award, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="gradient-text">The FitVault Story</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Born from passion, built by brothers, and designed for the streets. 
              This is how we're redefining urban fashion.
            </p>
          </div>

          {/* Brothers Story */}
          <div className="bg-zinc-900 rounded-2xl p-8 mb-12 border border-zinc-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Built by Brothers
                </h2>
                <p className="text-zinc-300 mb-4">
                  What started as two brothers flipping designer pieces on eBay turned into 
                  something bigger. We saw the gap between high-end fashion and street accessibility, 
                  and we knew we had to fill it.
                </p>
                <p className="text-zinc-300 mb-4">
                  After years of studying the market, understanding what Gen Z really wants, 
                  and perfecting our craft, FitVault was born. We're not just another clothing brand – 
                  we're curators of culture.
                </p>
                <p className="text-zinc-300">
                  Every piece in our vault is designed with the urban elite in mind. 
                  Quality that rivals the biggest names, designs that set trends, 
                  and prices that don't break the bank.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                  alt="Brothers behind FitVault"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <Users className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-zinc-300">
                We're not just selling clothes – we're building a community of urban trendsetters 
                who aren't afraid to stand out.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <Target className="w-8 h-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Quality Focus</h3>
              <p className="text-zinc-300">
                Every stitch, every fabric choice, every design detail is carefully considered 
                to ensure you get premium quality at every level.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <Award className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Limited Drops</h3>
              <p className="text-zinc-300">
                Exclusivity matters. Our limited drops ensure you're wearing something special, 
                not something everyone else has.
              </p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <Zap className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Street Innovation</h3>
              <p className="text-zinc-300">
                We're constantly pushing boundaries, experimenting with new designs, 
                and staying ahead of the curve in urban fashion.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 text-center border border-zinc-700">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              To democratize high-end streetwear and give every urban fashion enthusiast 
              access to premium designs that reflect their personality and ambition. 
              We're not just changing what you wear – we're changing how you feel when you wear it.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}