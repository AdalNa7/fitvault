'use client';

import Link from 'next/link';
import { Instagram, Twitter, Mail, Vault } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Vault className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold gradient-text">FitVault</span>
            </Link>
            <p className="text-zinc-400 text-sm">
              Exclusive streetwear for the urban elite. Crafted by brothers, worn by legends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-zinc-400 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-zinc-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Get the latest drops and exclusive access to limited collections.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="w-full bg-red-600 hover:bg-red-500 text-white py-2 rounded font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © 2024 FitVault. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}