'use client';

import Image from 'next/image';
import Link from 'next/link';
import { apartments } from '@/data/apartments';

export default function ImmobiliChiasso() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="brand-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Appartamenti a Chiasso
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Scopri i nostri 7 appartamenti in vendita a Chiasso, moderni e con finiture di alta qualità
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#64748b] hover:text-[#1e6bb8] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0d2644] font-medium">Appartamenti Chiasso</span>
          </nav>
        </div>
      </div>

      {/* Info Banner */}
      <section className="bg-[#38bdf8]/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-[#0d2644]">
            <svg className="w-5 h-5 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Tutti gli appartamenti sono in vendita - Clicca su un appartamento per vedere i dettagli</span>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <span className="text-[#0d2644] font-medium">Piante disponibili:</span>
            <a 
              href="/images/RENDER REV_1/PIANTA LETTI APERTI.png" 
              target="_blank"
              className="flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Pianta Letti Aperti
            </a>
            <a 
              href="/images/RENDER REV_1/PIANTA LETTI CHIUSI.png" 
              target="_blank"
              className="flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Pianta Letti Chiusi
            </a>
          </div>
        </div>
      </section>

      {/* Apartments Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#64748b] mb-8">{apartments.length} appartamenti disponibili a Chiasso</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apartments.map((apartment) => (
              <Link 
                key={apartment.id} 
                href={`/immobili/chiasso/${apartment.id}`}
                className="property-card bg-white rounded-2xl overflow-hidden shadow-lg block"
              >
                {/* Image */}
                <div className="relative h-64 group">
                  <Image
                    src={apartment.images[0]}
                    alt={apartment.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  
                  {/* Badge Affitto */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {apartment.type}
                    </span>
                  </div>

                  {/* Photo count */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {apartment.images.length} foto
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 text-[#0d2644] px-4 py-2 rounded-full font-medium">
                      Vedi dettagli →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#0d2644]">{apartment.title}</h3>
                    <span className="text-sm text-[#64748b] bg-gray-100 px-2 py-1 rounded">
                      {apartment.floor}
                    </span>
                  </div>
                  
                  <p className="text-2xl font-bold text-[#1e6bb8] mt-3">{apartment.price}</p>
                  <p className="text-[#64748b] text-sm mt-2 line-clamp-2">{apartment.description}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {apartment.beds} camere
                    </div>
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {apartment.baths} bagni
                    </div>
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {apartment.sqm} m²
                    </div>
                  </div>

                  <div className="mt-4 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white py-3 rounded-lg font-semibold text-center group-hover:shadow-lg transition-shadow">
                    Vedi Scheda Completa
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2644]">
            Interessato a uno dei nostri appartamenti?
          </h2>
          <p className="mt-4 text-[#64748b] max-w-xl mx-auto">
            Contattaci per organizzare una visita o per ricevere maggiori informazioni
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center mt-8 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contattaci Ora
          </Link>
        </div>
      </section>
    </div>
  );
}
