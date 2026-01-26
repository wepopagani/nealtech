import Image from 'next/image';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: "Villa con Giardino",
    address: "Via dei Fiori 10, Pambio-Noranco",
    price: "CHF 1'200'000",
    type: "Vendita",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    beds: 5,
    baths: 3,
    sqm: 250,
    description: "Elegante villa con ampio giardino e vista lago, perfetta per famiglie."
  },
  {
    id: 2,
    title: "Casa Indipendente",
    address: "Via Cantonale 35, Pambio-Noranco",
    price: "CHF 890'000",
    type: "Vendita",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    beds: 4,
    baths: 2,
    sqm: 180,
    description: "Casa indipendente con carattere, recentemente ristrutturata."
  },
  {
    id: 3,
    title: "Appartamento Vista Lago",
    address: "Via Panoramica 8, Pambio-Noranco",
    price: "CHF 750'000",
    type: "Vendita",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2,
    sqm: 120,
    description: "Splendido appartamento con vista panoramica sul Lago di Lugano."
  },
  {
    id: 4,
    title: "Rustico Ristrutturato",
    address: "Via del Nucleo 5, Pambio-Noranco",
    price: "CHF 580'000",
    type: "Vendita",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2,
    sqm: 140,
    description: "Affascinante rustico nel nucleo storico, completamente ristrutturato."
  },
  {
    id: 5,
    title: "Villa di Lusso",
    address: "Via Collina 22, Pambio-Noranco",
    price: "CHF 2'500'000",
    type: "Vendita",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    beds: 6,
    baths: 4,
    sqm: 400,
    description: "Residenza esclusiva con piscina, spa e vista mozzafiato."
  },
  {
    id: 6,
    title: "Trilocale con Terrazzo",
    address: "Via Sorengo 15, Pambio-Noranco",
    price: "CHF 2'800/mese",
    type: "Affitto",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    beds: 3,
    baths: 1,
    sqm: 95,
    description: "Trilocale luminoso con ampio terrazzo e posto auto."
  },
];

export default function ImmobiliPambio() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="brand-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Immobili a Pambio
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Esplora le proprietà esclusive a Pambio-Noranco, tra natura e tranquillità
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
            <span className="text-[#0d2644] font-medium">Immobili Pambio</span>
          </nav>
        </div>
      </div>

      {/* Filters */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent">
              <option>Tipo: Tutti</option>
              <option>Vendita</option>
              <option>Affitto</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent">
              <option>Camere: Tutte</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent">
              <option>Prezzo: Qualsiasi</option>
              <option>Fino a CHF 500'000</option>
              <option>CHF 500'000 - 1'000'000</option>
              <option>CHF 1'000'000 - 2'000'000</option>
              <option>Oltre CHF 2'000'000</option>
            </select>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#64748b] mb-8">{properties.length} immobili trovati a Pambio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="property-card bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.type === 'Vendita' 
                        ? 'bg-[#0d2644] text-white' 
                        : 'bg-[#38bdf8] text-white'
                    }`}>
                      {property.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0d2644]">{property.title}</h3>
                  <p className="text-[#64748b] text-sm mt-1 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.address}
                  </p>
                  <p className="text-2xl font-bold text-[#1e6bb8] mt-3">{property.price}</p>
                  <p className="text-[#64748b] text-sm mt-2 line-clamp-2">{property.description}</p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {property.beds}
                    </div>
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {property.baths}
                    </div>
                    <div className="flex items-center text-[#64748b] text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {property.sqm} m²
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                    Richiedi Informazioni
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d2644]">
                Vivere a <span className="brand-gradient-text">Pambio-Noranco</span>
              </h2>
              <p className="mt-4 text-[#64748b] leading-relaxed">
                Pambio-Noranco è un comune situato sulle colline che dominano Lugano, 
                offrendo un ambiente residenziale di alta qualità immerso nel verde. 
                La località è apprezzata per la sua tranquillità, le splendide viste 
                sul Lago di Lugano e la vicinanza al centro città.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-[#64748b]">
                  <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vista panoramica sul Lago di Lugano
                </li>
                <li className="flex items-center text-[#64748b]">
                  <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10 minuti dal centro di Lugano
                </li>
                <li className="flex items-center text-[#64748b]">
                  <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ambiente residenziale esclusivo
                </li>
                <li className="flex items-center text-[#64748b]">
                  <svg className="w-5 h-5 text-[#38bdf8] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Scuole e servizi nelle vicinanze
                </li>
              </ul>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Pambio-Noranco vista"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Non trovi quello che cerchi?
          </h2>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            Contattaci e ti aiuteremo a trovare l'immobile perfetto per le tue esigenze
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center mt-8 bg-white text-[#0d2644] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </div>
  );
}
