'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { ProductFilters } from '@/components/shop/ProductFilters';
import { Filter } from 'lucide-react';

export default function ShopPage() {
  const [filters, setFilters] = useState({
    size: '',
    brand: '',
    priceRange: [0, 500],
    sortBy: 'newest'
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">The Vault</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Exclusive streetwear collection for the urban elite
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-lg text-white"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:col-span-1 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              <ProductFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid filters={filters} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}