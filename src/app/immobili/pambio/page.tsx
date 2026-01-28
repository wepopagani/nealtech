import Link from 'next/link';

export default function ImmobiliPambio() {
  return (
    <div className="pt-20">
      <section className="brand-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Immobili a Pambio
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Al momento non ci sono immobili reali disponibili a Pambio.
          </p>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-[#64748b] mb-6">
            Stiamo lavorando a nuove proposte in questa zona. Nel frattempo puoi vedere gli appartamenti disponibili a Chiasso.
          </p>
          <Link
            href="/immobili/chiasso/"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Vedi appartamenti a Chiasso
          </Link>
        </div>
      </div>
    </div>
  );
}
