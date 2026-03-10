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
            Sviluppo immobiliare attraverso un metodo solido e strutturato
          </p>
        </div>
      </section>

      {/* Introduzione con Logo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-12">
              <Image
                src="/images/logo.png"
                alt="Neal Developments"
                width={300}
                height={100}
                className="h-24 w-auto"
              />
            </div>
            <p className="text-lg text-[#64748b] leading-relaxed">
              NEAL Developments opera nello sviluppo immobiliare attraverso un modello diretto e strutturato, basato sull'investimento, sulla trasformazione degli immobili e sulla loro valorizzazione nel tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Il Nostro Approccio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644] text-center mb-12">
            Il Nostro <span className="brand-gradient-text">Approccio</span>
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              L'attività si fonda su un approccio integrato che governa l'intero ciclo di sviluppo: dall'individuazione degli immobili alla loro ristrutturazione, fino al posizionamento e alla commercializzazione sul mercato.
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Ogni intervento nasce da una scelta consapevole e da un'analisi puntuale del potenziale dell'immobile, con l'obiettivo di generare asset coerenti, leggibili e solidi.
            </p>
          </div>
        </div>
      </section>

      {/* La Nostra Visione */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644] text-center mb-12">
            La Nostra <span className="brand-gradient-text">Visione</span>
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              La visione di NEAL Developments è costruita sull'equilibrio tra strategia e operatività. Le diverse fasi del processo non vengono trattate come passaggi indipendenti, ma come parti di un unico sistema, gestito con controllo, metodo e continuità decisionale.
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Gli immobili sviluppati vengono portati sul mercato direttamente, come naturale esito di un processo interamente governato. Un approccio che garantisce coerenza tra ciò che viene progettato, realizzato e proposto, offrendo un interlocutore unico e una visione chiara del valore dell'intervento.
            </p>
          </div>
        </div>
      </section>

      {/* Il Significato del Nome */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644] text-center mb-12">
            Il Significato del <span className="brand-gradient-text">Nome</span>
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg text-[#64748b] leading-relaxed mb-6">
              Questa impostazione è sintetizzata anche nell'identità del marchio. NEAL prende forma dall'unione dei cognomi dei due soci fondatori e si esprime come un sistema architettonico: due volumi distinti ma complementari, affiancati e connessi da un percorso di sviluppo comune.
            </p>
            <p className="text-lg text-[#64748b] leading-relaxed">
              Un segno essenziale che richiama solidità, progressione e visione, dove la crescita è il risultato di scelte costruite nel tempo e di un metodo coerente.
            </p>
          </div>
        </div>
      </section>

      {/* Il Nostro Metodo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d2644] text-center mb-12">
            Il Nostro <span className="brand-gradient-text">Metodo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mb-4">Qualità</h3>
              <p className="text-[#64748b]">
                Ogni progetto è concepito come un'operazione strutturata e di qualità
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mb-4">Controllo</h3>
              <p className="text-[#64748b]">
                Gestione diretta e completa di ogni fase del processo di sviluppo
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#1e6bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d2644] mb-4">Posizionamento</h3>
              <p className="text-[#64748b]">
                Capacità di interpretare il contesto e rispondere alle dinamiche del mercato
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg text-[#64748b] leading-relaxed">
              NEAL Developments opera secondo una logica di qualità, controllo e posizionamento. Ogni progetto è concepito come un'operazione strutturata, capace di interpretare il contesto e di rispondere in modo consapevole alle dinamiche del mercato.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Scopri i Nostri Progetti
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Esplora gli immobili sviluppati e valorizzati secondo il nostro metodo
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/immobili/chiasso"
              className="inline-flex items-center justify-center bg-white text-[#0d2644] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Vedi i Nostri Immobili
            </Link>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
