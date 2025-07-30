'use client';

import { useState } from 'react';
import { ChevronDown, Package, Truck, RefreshCw, CreditCard, Users, Star } from 'lucide-react';

const faqData = [
  {
    category: 'Orders & Shipping',
    icon: <Truck className="w-5 h-5" />,
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'We offer free standard shipping (5-7 business days) and express shipping (2-3 business days). All orders are processed within 24 hours on business days.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we ship within the US and Canada. International shipping is coming soon! Follow us on Instagram @fitvault for updates.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can also check your order status by contacting us directly.'
      }
    ]
  },
  {
    category: 'Sizing & Fit',
    icon: <Package className="w-5 h-5" />,
    questions: [
      {
        question: 'What sizes do you currently offer?',
        answer: 'We currently stock Medium and Large sizes with 25 units each. We\'re working on expanding our size range based on demand and feedback from our community.'
      },
      {
        question: 'How do FitVault sizes compare to other brands?',
        answer: 'Our sizing runs true to standard US sizing. Medium fits chest 38-40", Large fits chest 42-44". We recommend checking our detailed size guide for the perfect fit.'
      },
      {
        question: 'What if the size doesn\'t fit?',
        answer: 'No worries! We offer free exchanges within 30 days of purchase. Just contact us and we\'ll arrange for an exchange (subject to availability).'
      }
    ]
  },
  {
    category: 'Returns & Exchanges',
    icon: <RefreshCw className="w-5 h-5" />,
    questions: [
      {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of purchase for unworn items with original tags. Items must be in original condition for a full refund.'
      },
      {
        question: 'How do I return an item?',
        answer: 'Contact us at hello@fitvault.com with your order number. We\'ll provide a prepaid return label and instructions. Returns typically process within 5-7 business days.'
      },
      {
        question: 'Can I exchange for a different item?',
        answer: 'Currently, we only offer size exchanges for the same item. For different items, you\'ll need to return and place a new order.'
      }
    ]
  },
  {
    category: 'Payment & Pricing',
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for secure checkout.'
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes! We partner with Klarna and Afterpay to offer buy-now-pay-later options. Split your purchase into 4 interest-free payments.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'Never! The price you see is the price you pay. Free shipping on orders over $150, and no surprise fees at checkout.'
      }
    ]
  },
  {
    category: 'Product & Quality',
    icon: <Star className="w-5 h-5" />,
    questions: [
      {
        question: 'What materials are your tracksuits made from?',
        answer: 'We use premium cotton-polyester blends for comfort and durability, with moisture-wicking technology. All materials are carefully sourced for quality and comfort.'
      },
      {
        question: 'How should I care for my FitVault pieces?',
        answer: 'Machine wash cold with like colors, tumble dry low. Avoid bleach and fabric softeners to maintain the fabric\'s quality and color vibrancy.'
      },
      {
        question: 'Are your products ethically made?',
        answer: 'Yes! We work with certified manufacturers who meet our standards for fair labor practices and environmental responsibility.'
      }
    ]
  },
  {
    category: 'Drops & Availability',
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: 'How often do you release new drops?',
        answer: 'We typically release new collections every 6-8 weeks. Follow us on Instagram and join our VIP list to be the first to know about upcoming drops.'
      },
      {
        question: 'Will sold-out items restock?',
        answer: 'Our drops are limited edition, so most items won\'t restock. However, popular pieces might return in new colorways or updated designs in future collections.'
      },
      {
        question: 'How can I get early access to drops?',
        answer: 'Join our VIP list for 24-hour early access to new drops. VIP members also get exclusive access to limited colorways and special pricing.'
      }
    ]
  }
];

export function FAQAccordion() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-8">
      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
          <div className="bg-zinc-800 px-6 py-4 border-b border-zinc-700">
            <div className="flex items-center space-x-3">
              <div className="text-red-500">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-white">
                {category.category}
              </h2>
            </div>
          </div>
          
          <div className="divide-y divide-zinc-800">
            {category.questions.map((item, index) => {
              const itemId = `${categoryIndex}-${index}`;
              const isOpen = openItems.includes(itemId);
              
              return (
                <div key={index}>
                  <button
                    onClick={() => toggleItem(itemId)}
                    className="w-full px-6 py-4 text-left hover:bg-zinc-800 transition-colors focus:outline-none focus:bg-zinc-800"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-zinc-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-xl p-8 text-center border border-zinc-700">
        <h3 className="text-2xl font-bold text-white mb-4">
          Still have questions?
        </h3>
        <p className="text-zinc-300 mb-6">
          Our team is here to help! Reach out and we'll get back to you within 24 hours.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}