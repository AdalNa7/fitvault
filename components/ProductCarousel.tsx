'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Elite Obsidian Set',
    price: 189,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    brand: 'FitVault',
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: 'Urban Legend Tracksuit',
    price: 229,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
    brand: 'FitVault',
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: 'Midnight Velocity Set',
    price: 199,
    image: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg',
    brand: 'FitVault',
    rating: 4.9,
    isNew: true
  },
  {
    id: 4,
    name: 'Shadow Elite Collection',
    price: 249,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    brand: 'FitVault',
    rating: 5.0,
    isNew: false
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('product-carousel');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="product-carousel" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Drops</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Handpicked pieces that define urban luxury. Each design tells a story of rebellion and refinement.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative group">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {product.isNew && (
                          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            NEW
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <p className="text-red-500 font-semibold text-sm uppercase tracking-wide">
                          {product.brand}
                        </p>
                        <h3 className="text-3xl font-bold text-white mt-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center mt-4 space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-zinc-400">({product.rating})</span>
                        </div>
                      </div>
                      
                      <p className="text-zinc-300 text-lg">
                        Crafted with premium materials and attention to detail. 
                        This piece represents the pinnacle of urban fashion.
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-white">
                          ${product.price}
                        </span>
                        <Link href={`/product/${product.id}`}>
                          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-red-500' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}