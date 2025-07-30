'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, ShoppingBag, Zap } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Elite Obsidian Set',
    price: 189,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    brand: 'FitVault',
    rating: 4.9,
    isNew: true,
    stock: { Medium: 25, Large: 25 }
  },
  {
    id: 2,
    name: 'Urban Legend Tracksuit',
    price: 229,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
    brand: 'Nike-Inspired',
    rating: 4.8,
    isNew: false,
    stock: { Medium: 25, Large: 25 }
  },
  {
    id: 3,
    name: 'Midnight Velocity Set',
    price: 199,
    image: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg',
    brand: 'FitVault',
    rating: 4.9,
    isNew: true,
    stock: { Medium: 25, Large: 25 }
  },
  {
    id: 4,
    name: 'Shadow Elite Collection',
    price: 249,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    brand: 'Adidas-Inspired',
    rating: 5.0,
    isNew: false,
    stock: { Medium: 25, Large: 25 }
  },
  {
    id: 5,
    name: 'Platinum Dynasty Set',
    price: 299,
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg',
    brand: 'Prada-Inspired',
    rating: 4.7,
    isNew: true,
    stock: { Medium: 25, Large: 25 }
  },
  {
    id: 6,
    name: 'Carbon Fiber Elite',
    price: 279,
    image: 'https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg',
    brand: 'FitVault',
    rating: 4.8,
    isNew: false,
    stock: { Medium: 25, Large: 25 }
  }
];

interface ProductGridProps {
  filters: {
    size: string;
    brand: string;
    priceRange: number[];
    sortBy: string;
  };
}

export function ProductGrid({ filters }: ProductGridProps) {
  const { addItem } = useCart();
  const { toast } = useToast();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  // Filter products based on filters
  let filteredProducts = products.filter(product => {
    if (filters.size && !product.stock[filters.size as keyof typeof product.stock]) {
      return false;
    }
    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    return true;
  });

  // Sort products
  filteredProducts.sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'popular':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.isNew ? 1 : -1;
    }
  });

  const handleQuickAdd = (product: typeof products[0]) => {
    const selectedSize = selectedSizes[product.id] || 'Medium';
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });

    toast({
      title: 'Added to cart!',
      description: `${product.name} (${selectedSize}) has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-zinc-400">
          Showing {filteredProducts.length} products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover-lift"
          >
            <div className="relative aspect-square overflow-hidden">
              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 cursor-pointer"
                />
              </Link>
              
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  NEW
                </div>
              )}
              
              <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                  {product.rating}
                </div>
              </div>

              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: 'Medium' })}
                      className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                        (selectedSizes[product.id] || 'Medium') === 'Medium'
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      M
                    </button>
                    <button
                      onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: 'Large' })}
                      className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                        selectedSizes[product.id] === 'Large'
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      L
                    </button>
                  </div>
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Quick Add</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-red-500 text-sm font-semibold uppercase tracking-wide">
                {product.brand}
              </p>
              <Link href={`/product/${product.id}`}>
                <h3 className="text-white font-semibold text-lg mt-1 hover:text-red-500 transition-colors cursor-pointer">
                  {product.name}
                </h3>
              </Link>
              
              <div className="flex items-center justify-between mt-3">
                <span className="text-2xl font-bold text-white">
                  ${product.price}
                </span>
                <div className="flex items-center text-zinc-400 text-sm">
                  <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                  <span>25 left</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-zinc-400 text-lg">
            No products found matching your filters.
          </p>
          <p className="text-zinc-500 mt-2">
            Try adjusting your filters to see more results.
          </p>
        </div>
      )}
    </div>
  );
}