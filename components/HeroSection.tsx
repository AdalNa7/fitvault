'use client';

import Link from 'next/link';
import { ArrowRight, Unlock, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
// High-quality clothing retail images (copyright free)
const backgroundImages = [
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&h=800&fit=crop",
    alt: "Folded Hoodies"
  },
  {
    src: "https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?w=1200&h=800&fit=crop",
    alt: "Clothing on Hangers"
  },
  {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&h=800&fit=crop",
    alt: "Stacked Sweatshirts"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&h=800&fit=crop",
    alt: "Close-up of Tracksuit Fabric"
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1200&h=800&fit=crop",
    alt: "Sportswear Flatlay"
  }
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Change image on each page visit
    setCurrentImageIndex(Math.floor(Math.random() * backgroundImages.length));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
        <img
          src={backgroundImages[currentImageIndex].src}
          alt={backgroundImages[currentImageIndex].alt}
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white font-black">UNLOCK THE </span>
            <span className="text-red-500 text-shadow-glow font-black">VAULT</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto font-medium">
            Designer quality Nike & Adidas replicas at 70% off retail. Premium materials, authentic styling.
          </p>

          <div className="flex justify-center items-center">
            <Link href="/shop">
              <button 
                className="group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/25 flex items-center space-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                <span>The Vault</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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