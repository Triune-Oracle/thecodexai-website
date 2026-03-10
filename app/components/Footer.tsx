'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cosmic border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-cormorant font-bold text-gold mb-4">Codex AI</h3>
            <p className="text-gray-400 text-sm">
              A living lattice of AI, fintech, and mythic resonance.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-gold transition text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#lab" className="text-gray-400 hover:text-gold transition text-sm">
                  Fractal Lab
                </Link>
              </li>
              <li>
                <Link href="#waitlist" className="text-gray-400 hover:text-gold transition text-sm">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://docs.thecodexai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/codexai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/codexai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold transition text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold transition text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold transition text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Codex AI Hub. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-4 md:mt-0">
              ⚜ Crown of the Triarchy ⚜
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
