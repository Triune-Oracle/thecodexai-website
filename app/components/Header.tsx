'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-cosmic via-cosmic to-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
            <span className="text-gold text-xl font-bold glyph-glow">⚜</span>
          </div>
          <span className="text-xl font-cormorant font-bold text-white hidden sm:inline">
            Codex AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#features" className="text-gray-300 hover:text-gold transition">
            Features
          </Link>
          <Link href="#lab" className="text-gray-300 hover:text-gold transition">
            Fractal Lab
          </Link>
          <Link href="#waitlist" className="text-gray-300 hover:text-gold transition">
            Join Waitlist
          </Link>
          <a
            href="https://github.com/codexai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gold transition"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gold"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cosmic border-t border-gold/20">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-300 hover:text-gold transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#lab"
              className="block text-gray-300 hover:text-gold transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Fractal Lab
            </Link>
            <Link
              href="#waitlist"
              className="block text-gray-300 hover:text-gold transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
            <a
              href="https://github.com/codexai"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-300 hover:text-gold transition"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
