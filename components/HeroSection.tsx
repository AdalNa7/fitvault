'use client';

import Link from 'next/link';
import { ArrowRight, Unlock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
        <img
          src="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg"
          alt="Urban Fashion Model"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">EXCLUSIVE</span>
            <span className="gradient-text text-shadow-glow">STREETWEAR</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Designer-style tracksuits crafted for the urban elite. Limited drops, maximum impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/shop">
              <button className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center space-x-2">
                <Unlock className="w-5 h-5" />
                <span>Unlock the Vault</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/about">
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-lg font-semibold text-lg">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}