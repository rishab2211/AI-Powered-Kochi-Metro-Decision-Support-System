// components/Header.tsx
'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/50 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          Kochi Metro DS
        </Link>
        <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          View Dashboard
        </Link>
      </nav>
    </header>
  );
}