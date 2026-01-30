import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="brand-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Chi Siamo
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Scopri la storia e i valori di Neal Developments
          </p>
        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
                La Nostra <span className="brand-gradient-text">Storia</span>
              </h2>
              <p className="mt-6 text-lg text-[#64748b] leading-relaxed">
                [Qui puoi inserire la storia della tua azienda, come è nata, quali sono stati i momenti chiave del suo sviluppo, e come sei arrivato dove sei oggi.]
              </p>
              <p className="mt-4 text-lg text-[#64748b] leading-relaxed">
                [Racconta l'evoluzione della tua attività, i progetti più significativi, e come hai costruito la tua reputazione nel mercato immobiliare ticinese.]
              </p>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/RENDER REV_1/APPARTAMENTO C/1.png"
                alt="Neal Developments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              I Nostri <span className="brand-gradient-text">Valori</span>
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              [Descrivi brevemente i valori fondamentali che guidano il tuo lavoro]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-6">Trasparenza</h3>
              <p className="text-[#64748b] mt-4">
                [Descrivi come applichi la trasparenza nel tuo lavoro quotidiano]
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-6">Competenza</h3>
              <p className="text-[#64748b] mt-4">
                [Spiega come mantieni elevati standard professionali e aggiorni le tue competenze]
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#38bdf8]/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-6">Passione</h3>
              <p className="text-[#64748b] mt-4">
                [Racconta la tua passione per il settore immobiliare e come questo si riflette nel tuo lavoro]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* La Nostra Missione */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              La Nostra <span className="brand-gradient-text">Missione</span>
            </h2>
            <p className="mt-6 text-lg text-[#64748b] leading-relaxed">
              [Descrivi la missione della tua azienda: qual è il tuo obiettivo principale? Come vuoi fare la differenza nel mercato immobiliare? Quali sono le esigenze dei clienti che vuoi soddisfare?]
            </p>
            <p className="mt-4 text-lg text-[#64748b] leading-relaxed">
              [Spiega cosa ti distingue dagli altri professionisti del settore e perché i clienti dovrebbero scegliere di lavorare con te.]
            </p>
          </div>
        </div>
      </section>

      {/* Il Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              Il Nostro <span className="brand-gradient-text">Team</span>
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              [Introduci il tuo team e le persone che lavorano con te]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 - Esempio */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gradient-to-br from-[#0d2644] to-[#1e6bb8]">
                {/* Inserisci qui l'immagine del team member se disponibile */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0d2644]">[Nome]</h3>
                <p className="text-[#1e6bb8] font-medium mt-1">[Ruolo]</p>
                <p className="text-[#64748b] mt-4">
                  [Breve descrizione del team member, esperienza e specializzazioni]
                </p>
              </div>
            </div>

            {/* Aggiungi altri membri del team qui */}
          </div>
        </div>
      </section>

      {/* Le Nostre Zone di Servizio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              Dove <span className="brand-gradient-text">Operiamo</span>
            </h2>
            <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
              [Descrivi le zone geografiche in cui operi e la tua conoscenza del territorio]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0d2644]">Chiasso</h3>
              <p className="text-[#64748b] mt-4">
                [Descrivi la tua esperienza e conoscenza della zona di Chiasso, i progetti realizzati, e perché è un'area interessante]
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#0d2644]">Pambio</h3>
              <p className="text-[#64748b] mt-4">
                [Descrivi la tua esperienza e conoscenza della zona di Pambio, i progetti realizzati, e perché è un'area interessante]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Vuoi conoscerci meglio?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-white text-[#0d2644] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contattaci
            </Link>
            <Link
              href="/immobili/chiasso"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Vedi i Nostri Immobili
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
