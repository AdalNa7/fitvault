'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Mail, Instagram, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: 'Message sent successfully!',
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Have questions about our drops or need help with your order? We're here for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <Mail className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-zinc-300 mb-3">
                  Get in touch for orders, collaborations, or general inquiries.
                </p>
                <a
                  href="mailto:hello@fitvault.com"
                  className="text-red-500 hover:text-red-400 transition-colors font-semibold"
                >
                  hello@fitvault.com
                </a>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <Instagram className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Follow Us</h3>
                <p className="text-zinc-300 mb-3">
                  Stay updated with our latest drops and behind-the-scenes content.
                </p>
                <a
                  href="https://instagram.com/fitvault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors font-semibold"
                >
                  @fitvault
                </a>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
                <MessageSquare className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-zinc-300 mb-3">
                  Quick questions? Hit us up on WhatsApp for instant support.
                </p>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors font-semibold"
                >
                  Chat with us
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="sizing">Sizing Help</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}