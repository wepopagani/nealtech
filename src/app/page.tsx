import Link from 'next/link';
import Image from 'next/image';

// Appartamenti in evidenza - Chiasso
const featuredProperties = [
  {
    id: 'A',
    title: "Appartamento A",
    location: "Chiasso",
    price: "CHF 350'000",
    image: "/images/RENDER REV_1/APPARTAMENTO A/1.png",
    beds: 2,
    baths: 1,
    sqm: 75,
  },
  {
    id: 'C',
    title: "Appartamento C",
    location: "Chiasso",
    price: "CHF 450'000",
    image: "/images/RENDER REV_1/APPARTAMENTO C/1.png",
    beds: 3,
    baths: 2,
    sqm: 95,
  },
  {
    id: 'F',
    title: "Appartamento F",
    location: "Chiasso",
    price: "CHF 520'000",
    image: "/images/RENDER REV_1/APPARTAMENTO F/1.png",
    beds: 3,
    baths: 2,
    sqm: 100,
  },
];

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Vendita Immobili",
    description: "Ti assistiamo nella vendita del tuo immobile con strategie di marketing personalizzate."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Ricerca Immobili",
    description: "Troviamo la proprietà perfetta per te, in base alle tue esigenze e al tuo budget."
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Consulenza Legale",
    description: "Supporto completo per tutti gli aspetti legali e contrattuali delle transazioni."
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/RENDER REV_1/APPARTAMENTO C/1.png"
            alt="Appartamento Moderno Chiasso"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2644]/90 via-[#0d2644]/70 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Trova la Casa dei
              <span className="block text-[#38bdf8]">Tuoi Sogni</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Neal Developments ti accompagna nella ricerca dell'immobile perfetto in Ticino. 
              Scopri le nostre esclusive proprietà a Chiasso e Pambio.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/immobili/chiasso"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#1e6bb8] to-[#38bdf8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Esplora Immobili
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              Immobili in <span className="brand-gradient-text">Evidenza</span>
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              Scopri le nostre proprietà più esclusive selezionate per te
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                href={`/immobili/chiasso/${property.id}`}
                className="property-card bg-white rounded-2xl overflow-hidden shadow-lg block group"
              >
                <div className="relative h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4 bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium">
                    Vendita
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0d2644] group-hover:text-[#1e6bb8] transition-colors">{property.title}</h3>
                  <p className="text-2xl font-bold text-[#1e6bb8] mt-2">{property.price}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-[#64748b]">
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.beds} camere</span>
                    </div>
                    <div className="flex items-center text-[#64748b]">
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      <span>{property.baths} bagni</span>
                    </div>
                    <div className="flex items-center text-[#64748b]">
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{property.sqm} m²</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/immobili/chiasso"
              className="inline-flex items-center text-[#1e6bb8] font-semibold hover:text-[#0d2644] transition-colors"
            >
              Vedi tutti gli immobili
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              I Nostri <span className="brand-gradient-text">Servizi</span>
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              Offriamo un servizio completo per ogni esigenza immobiliare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-[#0d2644] hover:to-[#1e6bb8] transition-all duration-300"
              >
                <div className="text-[#1e6bb8] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0d2644] mt-6 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#64748b] mt-4 group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servizi"
              className="inline-flex items-center bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Scopri tutti i servizi
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pronto a trovare la tua nuova casa?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Contattaci oggi stesso per una consulenza gratuita. 
            Il nostro team di esperti è pronto ad aiutarti.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-white text-[#0d2644] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
            <a
              href="tel:+41911234567"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +41 78 721 96 13
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold brand-gradient-text">150+</div>
              <p className="mt-2 text-[#64748b]">Immobili Venduti</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold brand-gradient-text">98%</div>
              <p className="mt-2 text-[#64748b]">Clienti Soddisfatti</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold brand-gradient-text">15+</div>
              <p className="mt-2 text-[#64748b]">Anni di Esperienza</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold brand-gradient-text">50+</div>
              <p className="mt-2 text-[#64748b]">Immobili Disponibili</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
