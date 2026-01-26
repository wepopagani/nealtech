'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Apartment, apartments } from '@/data/apartments';

// Galleria immagini a schermo intero
function FullScreenGallery({ 
  images, 
  isOpen, 
  onClose, 
  currentIndex, 
  setCurrentIndex,
  title
}: { 
  images: string[]; 
  isOpen: boolean; 
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  title: string;
}) {
  if (!isOpen) return null;

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black" onClick={onClose}>
      <div className="relative w-full h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 text-white">
          <h3 className="font-semibold">{title} - Foto {currentIndex + 1}/{images.length}</h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 relative">
          <Image src={images[currentIndex]} alt={`${title} - Foto ${currentIndex + 1}`} fill className="object-contain" />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="flex gap-2 justify-center">
            {images.map((img, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)} className={`relative w-20 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? 'border-[#38bdf8]' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm({ apartmentTitle }: { apartmentTitle: string }) {
  const [formData, setFormData] = useState({ nome: '', email: '', telefono: '', messaggio: `Sono interessato all'${apartmentTitle}. Vorrei ricevere maggiori informazioni.` });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-lg font-bold text-[#0d2644]">Richiesta Inviata!</h3>
        <p className="text-[#64748b] mt-2">Ti contatteremo al più presto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" required placeholder="Nome e Cognome *" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent" />
      <input type="email" required placeholder="Email *" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent" />
      <input type="tel" placeholder="Telefono" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent" />
      <textarea required rows={4} placeholder="Messaggio *" value={formData.messaggio} onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent resize-none" />
      <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-70">
        {isSubmitting ? 'Invio in corso...' : 'Richiedi Informazioni'}
      </button>
    </form>
  );
}

export default function ApartmentDetailClient({ apartment }: { apartment: Apartment }) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="pt-20 bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-[#64748b] hover:text-[#1e6bb8]">Home</Link>
            <svg className="w-4 h-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/immobili/chiasso/" className="text-[#64748b] hover:text-[#1e6bb8]">Appartamenti Chiasso</Link>
            <svg className="w-4 h-4 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#0d2644] font-medium">{apartment.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium">{apartment.type}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{apartment.availability}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0d2644]">{apartment.title}</h1>
            <p className="text-[#64748b] mt-2 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {apartment.city}
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl md:text-4xl font-bold text-[#1e6bb8]">{apartment.price}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative aspect-video cursor-pointer group" onClick={() => { setCurrentImageIndex(0); setGalleryOpen(true); }}>
                <Image src={apartment.images[0]} alt={apartment.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-[#0d2644] px-4 py-2 rounded-full font-medium transition-opacity">Clicca per ingrandire</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {apartment.images.length} foto
                </div>
              </div>
              <div className="p-4 grid grid-cols-4 md:grid-cols-6 gap-2">
                {apartment.images.slice(0, 6).map((img, idx) => (
                  <button key={idx} onClick={() => { setCurrentImageIndex(idx); setGalleryOpen(true); }} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity">
                    <Image src={img} alt="" fill className="object-cover" />
                    {idx === 5 && apartment.images.length > 6 && <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold">+{apartment.images.length - 6}</div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <p className="text-2xl font-bold text-[#0d2644]">{apartment.beds}</p>
                  <p className="text-[#64748b] text-sm">Camere</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                  </div>
                  <p className="text-2xl font-bold text-[#0d2644]">{apartment.baths}</p>
                  <p className="text-[#64748b] text-sm">Bagni</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  </div>
                  <p className="text-2xl font-bold text-[#0d2644]">{apartment.sqm} m²</p>
                  <p className="text-[#64748b] text-sm">Superficie</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <p className="text-2xl font-bold text-[#0d2644]">{apartment.floor}</p>
                  <p className="text-[#64748b] text-sm">Piano</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#0d2644] mb-4">Descrizione</h2>
              {apartment.longDescription.split('\n\n').map((p, i) => <p key={i} className="text-[#64748b] mb-4 leading-relaxed">{p}</p>)}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#0d2644] mb-4">Caratteristiche</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {apartment.features.map((f, i) => (
                  <div key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-[#38bdf8] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-[#64748b]">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#0d2644] mb-4">Cosa è incluso</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#0d2644] mb-3">Incluso nel prezzo</h3>
                  <ul className="space-y-2">
                    {apartment.included.map((item, i) => <li key={i} className="text-[#64748b] flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>{item}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0d2644] mb-3">Non incluso</h3>
                  <ul className="space-y-2">
                    {apartment.notIncluded.map((item, i) => <li key={i} className="text-[#64748b] flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#0d2644] mb-4">Piante</h2>
              <div className="flex flex-wrap gap-4">
                <a href="/images/RENDER REV_1/PIANTA LETTI APERTI.png" target="_blank" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0d2644] px-4 py-3 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Pianta Letti Aperti
                </a>
                <a href="/images/RENDER REV_1/PIANTA LETTI CHIUSI.png" target="_blank" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0d2644] px-4 py-3 rounded-lg transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Pianta Letti Chiusi
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#0d2644] mb-4">Richiedi Informazioni</h2>
                <ContactForm apartmentTitle={apartment.title} />
              </div>

              <div className="bg-[#0d2644] rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">Preferisci chiamare?</h3>
                <a href="tel:+41787219613" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="font-semibold">+41 78 721 96 13</span>
                </a>
                <p className="text-sm text-gray-300 mt-3">Lun - Ven: 09:00 - 18:00<br />Sab: 10:00 - 14:00</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-[#0d2644] mb-4">Altri Appartamenti</h3>
                <div className="space-y-3">
                  {apartments.filter(apt => apt.id !== apartment.id).slice(0, 3).map(apt => (
                    <Link key={apt.id} href={`/immobili/chiasso/${apt.id}/`} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={apt.images[0]} alt={apt.title} fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-[#0d2644]">{apt.title}</p>
                        <p className="text-sm text-[#1e6bb8]">{apt.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/immobili/chiasso/" className="block text-center mt-4 text-[#1e6bb8] hover:text-[#0d2644] font-medium transition-colors">Vedi tutti →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FullScreenGallery images={apartment.images} isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} currentIndex={currentImageIndex} setCurrentIndex={setCurrentImageIndex} title={apartment.title} />
    </div>
  );
}
