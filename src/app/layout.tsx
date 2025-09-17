import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header'; // Import the header

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kochi Metro Decision Support',
  description: 'An intelligent decision support platform for fleet induction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* The Header is now part of the layout */}
        <Header /> 
        {children}
      </body>
    </html>
  );
}