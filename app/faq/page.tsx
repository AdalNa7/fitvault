import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQAccordion } from '@/components/faq/FAQAccordion';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h1>
            <p className="text-xl text-zinc-400">
              Everything you need to know about FitVault, our products, and your orders.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </div>

      <Footer />
    </main>
  );
}