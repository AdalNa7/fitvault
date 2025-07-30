import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Toaster } from '@/components/ui/toaster';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'FitVault - Premium Urban Fashion',
  description: 'Exclusive designer-style tracksuits for the urban Gen Z aesthetic. Unlock the Vault.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins bg-black text-white antialiased">
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}