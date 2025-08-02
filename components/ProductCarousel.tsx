'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nike Tech Fleece Replica',
    price: 35.99,
    originalPrice: 120,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop',
    brand: 'Nike',
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: 'Adidas Tiro Tracksuit',
    price: 28.99,
    originalPrice: 90,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop',
    brand: 'Adidas',
    rating: 4.8,
    isNew: false
  },
  {
    id: 3,
    name: 'Nike Sportswear Set',
    price: 42.99,
    originalPrice: 150,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&crop=center',
    brand: 'Nike',
    rating: 4.9,
    isNew: true
  },
  {
    id: 4,
    name: 'Adidas Y-3 Style',
    price: 55.99,
    originalPrice: 300,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop&crop=center',
    brand: 'Adidas',
    rating: 5.0,
    isNew: false
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (first real slide)
  const [isVisible, setIsVisible] = useState(false);
  const [transition, setTransition] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Create clones for infinite scroll
  const extendedProducts = [
    products[products.length - 1],
    ...products,
    products[0],
  ];

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

  // Auto-advance carousel every 3.5 seconds, but pause on hover
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setTransition(true);
    }, 3500);
    return () => clearInterval(interval);
  }, [hovered]);

  // Handle infinite scroll snap
  useEffect(() => {
    if (currentIndex === extendedProducts.length - 1) {
      // At the clone of the first slide, snap to real first
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(1);
      }, 500);
    } else if (currentIndex === 0) {
      // At the clone of the last slide, snap to real last
      setTimeout(() => {
        setTransition(false);
        setCurrentIndex(extendedProducts.length - 2);
      }, 500);
    } else {
      setTransition(true);
    }
  }, [currentIndex, extendedProducts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setTransition(true);
  };

  return (
    <section
      id="product-carousel"
      className="py-20 bg-gradient-to-b from-black to-zinc-900"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Premium Replicas</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Authentic Nike & Adidas replicas with premium materials. Save up to 80% off retail prices.
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
              className={`flex ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {extendedProducts.map((product, idx) => (
                <div key={idx + '-' + product.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative group">
                      <div className="aspect-square overflow-hidden rounded-2xl bg-zinc-800">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700"
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
                        Premium replica with authentic styling and materials. 
                        Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off retail price.
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-3xl font-bold text-white">
                            £{product.price}
                          </span>
                          <span className="text-zinc-500 line-through ml-2">
                            £{product.originalPrice}
                          </span>
                        </div>
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
                onClick={() => {
                  setCurrentIndex(index + 1);
                  setTransition(true);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === currentIndex ? 'bg-red-500' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}