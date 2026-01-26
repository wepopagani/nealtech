import Link from 'next/link';

const services = [
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Vendita Immobili",
    description: "Ti assistiamo nella vendita del tuo immobile con strategie di marketing personalizzate e una rete di acquirenti qualificati.",
    features: [
      "Valutazione professionale gratuita",
      "Fotografie professionali e tour virtuali",
      "Marketing su portali nazionali e internazionali",
      "Gestione completa delle visite",
      "Supporto nella negoziazione"
    ]
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Ricerca Immobili",
    description: "Troviamo la proprietà perfetta per te, analizzando le tue esigenze e il mercato per offrirti le migliori opportunità.",
    features: [
      "Consulenza personalizzata",
      "Accesso a immobili esclusivi",
      "Selezione su misura delle proposte",
      "Accompagnamento alle visite",
      "Analisi comparativa del mercato"
    ]
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Consulenza Legale",
    description: "Supporto completo per tutti gli aspetti legali e contrattuali, con professionisti esperti nel settore immobiliare.",
    features: [
      "Revisione contratti di compravendita",
      "Verifica documentazione catastale",
      "Assistenza notarile",
      "Consulenza fiscale",
      "Gestione pratiche burocratiche"
    ]
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Valutazioni Immobiliari",
    description: "Valutiamo il tuo immobile con precisione, utilizzando metodi professionali e conoscenza approfondita del mercato locale.",
    features: [
      "Valutazione di mercato accurata",
      "Analisi comparativa",
      "Report dettagliato",
      "Consulenza sul posizionamento prezzo",
      "Aggiornamenti periodici sul mercato"
    ]
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Gestione Immobiliare",
    description: "Ci occupiamo della gestione completa del tuo immobile, dalla ricerca inquilini alla manutenzione ordinaria.",
    features: [
      "Ricerca e selezione inquilini",
      "Gestione contratti di locazione",
      "Riscossione canoni",
      "Coordinamento manutenzioni",
      "Report periodici al proprietario"
    ]
  },
  {
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Consulenza Investimenti",
    description: "Ti guidiamo nelle scelte di investimento immobiliare, identificando le opportunità più redditizie del mercato.",
    features: [
      "Analisi del potenziale di investimento",
      "Identificazione opportunità di mercato",
      "Calcolo rendimenti",
      "Strategia di diversificazione",
      "Supporto nelle acquisizioni"
    ]
  },
];

export default function Servizi() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="brand-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            I Nostri Servizi
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi immobiliari per soddisfare ogni tua esigenza
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#1e6bb8]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0d2644] mt-6">
                  {service.title}
                </h3>
                <p className="text-[#64748b] mt-4">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#38bdf8] mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#64748b]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644]">
              Perché Scegliere <span className="brand-gradient-text">Neal Developments</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-4">Affidabilità</h3>
              <p className="text-[#64748b] mt-2">15+ anni di esperienza nel mercato immobiliare ticinese</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-4">Team Esperto</h3>
              <p className="text-[#64748b] mt-2">Professionisti qualificati e sempre aggiornati</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-4">Velocità</h3>
              <p className="text-[#64748b] mt-2">Processi ottimizzati per risultati rapidi</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mt-4">Dedizione</h3>
              <p className="text-[#64748b] mt-2">Attenzione personalizzata per ogni cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Hai bisogno di assistenza?
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Contattaci per una consulenza gratuita e scopri come possiamo aiutarti
          </p>
          <div className="mt-10">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-white text-[#0d2644] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Richiedi una Consulenza
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
