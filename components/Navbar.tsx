'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingBag, Menu, X, Vault } from 'lucide-react';
import { useCart } from '@/components/CartProvider';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
            <Vault className="w-8 h-8 text-red-500" />
            <span className="text-2xl font-bold gradient-text">FitVault</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-white hover:text-red-500 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-white hover:text-red-500 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-red-500 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/faq" className="text-white hover:text-red-500 transition-colors font-medium">
              FAQ
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-zinc-800 rounded-lg transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-white hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}