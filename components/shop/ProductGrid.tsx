'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Zap } from 'lucide-react';
import { useCart } from '@/components/CartProvider';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Nike Tech Fleece Replica',
    price: 35.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    brand: 'Nike',
    rating: 4.9,
    isNew: true,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
  },
  {
    id: 2,
    name: 'Adidas Tiro Tracksuit',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    brand: 'Adidas',
    rating: 4.8,
    isNew: false,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
  },
  {
    id: 3,
    name: 'Nike Sportswear Set',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center',
    brand: 'Nike',
    rating: 4.9,
    isNew: true,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
  },
  {
    id: 4,
    name: 'Adidas Originals Tracksuit',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center',
    brand: 'Adidas',
    rating: 5.0,
    isNew: false,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
  },
  {
    id: 5,
    name: 'Nike ACG Collection',
    price: 48.99,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=top',
    brand: 'Nike',
    rating: 4.7,
    isNew: true,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
  },
  {
    id: 6,
    name: 'Adidas Y-3 Style',
    price: 55.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=top',
    brand: 'Adidas',
    rating: 4.8,
    isNew: false,
    stock: { XS: 0, S: 25, M: 25, L: 25, XL: 0, XXL: 0 }
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
    if (filters.size && product.stock[filters.size as keyof typeof product.stock] <= 0) {
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
    const selectedSize = selectedSizes[product.id] || 'M';
    
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
              


              {/* Quick Add Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="flex gap-2 justify-center flex-wrap">
                    {/* XS - Unavailable */}
                    <button
                      disabled
                      className="px-3 py-1 rounded text-sm font-semibold border-zinc-600 bg-zinc-800 text-zinc-500 cursor-not-allowed line-through"
                    >
                      XS
                    </button>
                    {/* S - Available */}
                    <button
                      onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: 'Small' })}
                      className={`px-3 py-1 rounded text-sm font-semibold transition-colors ${
                        selectedSizes[product.id] === 'Small'
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      S
                    </button>
                    {/* M - Available */}
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
                    {/* L - Available */}
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
                    {/* XL - Unavailable */}
                    <button
                      disabled
                      className="px-3 py-1 rounded text-sm font-semibold border-zinc-600 bg-zinc-800 text-zinc-500 cursor-not-allowed line-through"
                    >
                      XL
                    </button>
                    {/* XXL - Unavailable */}
                    <button
                      disabled
                      className="px-3 py-1 rounded text-sm font-semibold border-zinc-600 bg-zinc-800 text-zinc-500 cursor-not-allowed line-through"
                    >
                      XXL
                    </button>
                  </div>
                  <p className="text-white text-xs">Available sizes: S, M, L</p>
                  <div className="flex justify-center">
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
                  £{product.price}
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