'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [immobiliOpen, setImmobiliOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Neal Developments"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#0d2644] hover:text-[#1e6bb8] font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Immobili Dropdown */}
            <div className="relative">
              <button
                onClick={() => setImmobiliOpen(!immobiliOpen)}
                onMouseEnter={() => setImmobiliOpen(true)}
                className="flex items-center text-[#0d2644] hover:text-[#1e6bb8] font-medium transition-colors duration-200"
              >
                Immobili
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${immobiliOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {immobiliOpen && (
                <div
                  onMouseLeave={() => setImmobiliOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                >
                  <Link
                    href="/immobili/chiasso"
                    className="block px-4 py-2 text-[#0d2644] hover:bg-[#38bdf8]/10 hover:text-[#1e6bb8] transition-colors duration-200"
                  >
                    Chiasso
                  </Link>
                  <Link
                    href="/immobili/pambio"
                    className="block px-4 py-2 text-[#0d2644] hover:bg-[#38bdf8]/10 hover:text-[#1e6bb8] transition-colors duration-200"
                  >
                    Pambio
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/servizi"
              className="text-[#0d2644] hover:text-[#1e6bb8] font-medium transition-colors duration-200"
            >
              Servizi
            </Link>
            <Link
              href="/contatti"
              className="text-[#0d2644] hover:text-[#1e6bb8] font-medium transition-colors duration-200"
            >
              Contatti
            </Link>
            
            {/* CTA Button */}
            <Link
              href="/contatti"
              className="bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Richiedi Info
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0d2644]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-[#0d2644] hover:text-[#1e6bb8] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2">
              <button
                onClick={() => setImmobiliOpen(!immobiliOpen)}
                className="flex items-center w-full text-[#0d2644] hover:text-[#1e6bb8] font-medium"
              >
                Immobili
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${immobiliOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {immobiliOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/immobili/chiasso"
                    className="block py-1 text-[#64748b] hover:text-[#1e6bb8]"
                    onClick={() => setIsOpen(false)}
                  >
                    Chiasso
                  </Link>
                  <Link
                    href="/immobili/pambio"
                    className="block py-1 text-[#64748b] hover:text-[#1e6bb8]"
                    onClick={() => setIsOpen(false)}
                  >
                    Pambio
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/servizi"
              className="block py-2 text-[#0d2644] hover:text-[#1e6bb8] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Servizi
            </Link>
            <Link
              href="/contatti"
              className="block py-2 text-[#0d2644] hover:text-[#1e6bb8] font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contatti
            </Link>
            
            <Link
              href="/contatti"
              className="inline-block mt-4 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white px-6 py-2.5 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Richiedi Info
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
