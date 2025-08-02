'use client';

import { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

export function DropTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex justify-center items-center mb-6">
            <Flame className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">New Arrivals</span>
            </h2>
            <Flame className="w-8 h-8 text-red-500 ml-3 animate-pulse" />
          </div>
          
          <p className="text-xl text-zinc-400 mb-12">
            Fresh Nike & Adidas replicas dropping soon. Limited stock, premium quality.
          </p>

          <div className="grid grid-cols-4 gap-4 sm:gap-8 mb-12">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-zinc-800 rounded-lg p-4 sm:p-6 border border-zinc-700">
                <div className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-zinc-400 text-sm sm:text-base uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-2xl p-8 border border-zinc-600">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-yellow-500 mr-3" />
              <span className="text-yellow-500 font-semibold uppercase tracking-wide">
                Early Access
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Get Early Access
            </h3>
            <p className="text-zinc-300 mb-6">
              Be first to know when new replicas arrive. Limited quantities, premium quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Join VIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}