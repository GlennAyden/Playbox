import React from 'react';
import Link from 'next/link';
import { Diamond } from 'lucide-react';

const navLinks = [
  { name: "What u get", href: "#" },
  { name: "Benefit", href: "#" },
  { name: "Plan", href: "#" },
  { name: "QnA", href: "#" },
];

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 lg:px-16 bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Diamond className="text-pink-500" size={28} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Playbox
          </h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
            Login
          </button>
          <button className="text-sm font-semibold text-white px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 