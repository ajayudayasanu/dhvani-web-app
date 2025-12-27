import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Dhvani – Jewellery & Ornaments',
  description: 'Handcrafted jewellery from Dhvani. View our collection and message us on Instagram to order.',
  openGraph: {
    title: 'Dhvani – Jewellery & Ornaments',
    description: 'Handcrafted jewellery from Dhvani.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} min-h-screen flex flex-col text-stone-900 bg-white`}>
        <Header />
        <main className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
