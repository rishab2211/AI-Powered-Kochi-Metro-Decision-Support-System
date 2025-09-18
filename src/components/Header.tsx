'use client';
import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-300/10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Kochi Metro DS
        </Link>
        <Link
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2 text-sm shadow-lg shadow-blue-600/20"
        >
          <LayoutDashboard size={16} />
          <span>View Dashboard</span>
        </Link>
      </div>
    </header>
  );
}