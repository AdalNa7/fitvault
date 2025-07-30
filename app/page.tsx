import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProductCarousel } from '@/components/ProductCarousel';
import { DropTimer } from '@/components/DropTimer';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProductCarousel />
      <DropTimer />
      <Footer />
    </main>
  );
}