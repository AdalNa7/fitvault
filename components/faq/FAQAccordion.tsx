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
        answer: 'We offer standard shipping (5-7 business days) for £4.99 and free shipping on orders over £50. All orders are processed within 24 hours on business days.'
      },
      {
        question: 'Do you ship to the UK?',
        answer: 'Yes! We ship throughout the UK with reliable delivery partners. All prices are in GBP and include UK shipping rates.'
      },
      {
        question: 'Can I track my order?',
        answer: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email. You can also use our Track Order page to check your order status.'
      }
    ]
  },
  {
    category: 'Sizing & Fit',
    icon: <Package className="w-5 h-5" />,
    questions: [
      {
        question: 'What sizes do you currently offer?',
        answer: 'We offer sizes S, M, and L with 25 units each. Sizes XS, XL, and XXL are currently out of stock. Check our Size Guide page for detailed measurements.'
      },
      {
        question: 'How do your sizes compare to Nike/Adidas?',
        answer: 'Our replica sizing matches the original Nike and Adidas sizing. S fits chest 36-38", M fits 38-40", L fits 42-44". Check our Size Guide for detailed measurements.'
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
        answer: 'We accept returns within 30 days of purchase for unworn items with original tags. Items must be in original condition for a full refund. See our Returns page for full details.'
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
        answer: 'Never! The price you see is the price you pay. Free shipping on orders over £50, and no surprise fees at checkout.'
      }
    ]
  },
  {
    category: 'Product & Quality',
    icon: <Star className="w-5 h-5" />,
    questions: [
      {
        question: 'What materials are your replicas made from?',
        answer: 'Our premium replicas use high-quality materials that closely match the original Nike and Adidas pieces. We use premium cotton-polyester blends for comfort and durability.'
      },
      {
        question: 'How should I care for my replica pieces?',
        answer: 'Machine wash cold with like colors, tumble dry low. Avoid bleach and fabric softeners to maintain the fabric\'s quality and color vibrancy.'
      },
      {
        question: 'How do your replicas compare to retail?',
        answer: 'Our replicas offer the same styling and quality as retail pieces at 70-80% off the original price. Premium materials, authentic design, unbeatable value.'
      }
    ]
  },
  {
    category: 'Drops & Availability',
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        question: 'How often do you get new replicas?',
        answer: 'We receive new Nike and Adidas replicas every 2-3 weeks. Follow us on Instagram and join our VIP list to be the first to know about new arrivals.'
      },
      {
        question: 'Will sold-out items restock?',
        answer: 'Popular replicas often restock, but quantities are limited. We recommend joining our VIP list to get notified when your favorite pieces are back in stock.'
      },
      {
        question: 'How can I get early access to new arrivals?',
        answer: 'Join our VIP list for 24-hour early access to new replica arrivals. VIP members also get exclusive access to limited pieces and special pricing.'
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