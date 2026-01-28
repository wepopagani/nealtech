export interface Apartment {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  priceNumeric: number;
  type: string;
  images: string[];
  beds: number;
  baths: number;
  sqm: number;
  floor: string;
  availability: string;
  description: string;
  longDescription: string;
  features: string[];
  included: string[];
  notIncluded: string[];
}

export const apartments: Apartment[] = [
  {
    id: 'A',
    title: "Appartamento A",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 230'000",
    priceNumeric: 230000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO A/1.png",
      "/images/RENDER REV_1/APPARTAMENTO A/2.png",
      "/images/RENDER REV_1/APPARTAMENTO A/3.png",
      "/images/RENDER REV_1/APPARTAMENTO A/4.png",
      "/images/RENDER REV_1/APPARTAMENTO A/5.png",
      "/images/RENDER REV_1/APPARTAMENTO A/6.png",
      "/images/RENDER REV_1/APPARTAMENTO A/7.png",
    ],
    beds: 1,
    baths: 1,
    sqm: 32,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Appartamento completamente ristrutturato con cucina nuova e finiture moderne.",
    longDescription: `Appartamento completamente ristrutturato al primo piano in posizione comoda a Chiasso.

Gli ambienti sono stati rinnovati con sanitari nuovi e cucina nuova completamente attrezzata, pensata per un uso quotidiano pratico e moderno.

Il pavimento è in SPC, resistente e di facile manutenzione, gli infissi sono in ottimo stato e garantiscono un buon isolamento. Il riscaldamento non è a pavimento, ideale per chi preferisce impianti tradizionali.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'B',
    title: "Appartamento B",
    address: "Via Example 1",
    city: "Chiasso",
    price: "VENDUTO",
    priceNumeric: 0,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO B/1.png",
      "/images/RENDER REV_1/APPARTAMENTO B/2.png",
      "/images/RENDER REV_1/APPARTAMENTO B/3.png",
      "/images/RENDER REV_1/APPARTAMENTO B/4.png",
      "/images/RENDER REV_1/APPARTAMENTO B/5.png",
      "/images/RENDER REV_1/APPARTAMENTO B/6.png",
      "/images/RENDER REV_1/APPARTAMENTO B/7.png",
      "/images/RENDER REV_1/APPARTAMENTO B/8.png",
    ],
    beds: 1,
    baths: 1,
    sqm: 37,
    floor: "Primo Piano",
    availability: "Venduto",
    description: "Appartamento completamente ristrutturato con cucina nuova e finiture moderne.",
    longDescription: `Appartamento completamente ristrutturato al primo piano, ideale come investimento o pied-à-terre a Chiasso.

Sono stati rifatti sanitari e bagno, la cucina è nuova e completamente attrezzata, con spazi ottimizzati per l'uso quotidiano.

Il pavimento è in SPC, pratico e resistente, gli infissi sono in ottime condizioni e garantiscono comfort termico e acustico. Il riscaldamento non è a pavimento, ma con impianto tradizionale.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'C',
    title: "Appartamento C",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 350'000",
    priceNumeric: 350000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO C/1.png",
      "/images/RENDER REV_1/APPARTAMENTO C/2.png",
      "/images/RENDER REV_1/APPARTAMENTO C/3.png",
      "/images/RENDER REV_1/APPARTAMENTO C/4.png",
      "/images/RENDER REV_1/APPARTAMENTO C/5.png",
      "/images/RENDER REV_1/APPARTAMENTO C/6.png",
      "/images/RENDER REV_1/APPARTAMENTO C/7.png",
      "/images/RENDER REV_1/APPARTAMENTO C/8.png",
    ],
    beds: 2,
    baths: 1,
    sqm: 64,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Bilocale completamente ristrutturato con cucina nuova e pavimento in SPC.",
    longDescription: `Bilocale al primo piano completamente ristrutturato, con spazi ben organizzati e ambienti luminosi.

La zona giorno è stata rinnovata con cucina nuova completamente attrezzata, mentre il bagno dispone di sanitari nuovi e finiture moderne.

In tutto l'appartamento è stato posato pavimento in SPC, gli infissi sono in ottimo stato e il riscaldamento non è a pavimento, per chi preferisce soluzioni tradizionali.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'D',
    title: "Appartamento D",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 205'000",
    priceNumeric: 205000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO D/1.png",
      "/images/RENDER REV_1/APPARTAMENTO D/2.png",
      "/images/RENDER REV_1/APPARTAMENTO D/3.png",
      "/images/RENDER REV_1/APPARTAMENTO D/4.png",
      "/images/RENDER REV_1/APPARTAMENTO D/5.png",
      "/images/RENDER REV_1/APPARTAMENTO D/6.png",
    ],
    beds: 1,
    baths: 1,
    sqm: 30,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Monolocale completamente ristrutturato con sanitari e cucina nuovi.",
    longDescription: `Monolocale al primo piano completamente ristrutturato, ideale per single o come investimento.

Sono stati rifatti completamente bagno e sanitari, la cucina è nuova e completamente attrezzata, con soluzione compatta ma funzionale.

Il pavimento è in SPC, molto resistente e facile da pulire, gli infissi sono in ottimo stato e il riscaldamento non è a pavimento.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'E',
    title: "Appartamento E",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 205'000",
    priceNumeric: 205000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO E/1.png",
      "/images/RENDER REV_1/APPARTAMENTO E/2.png",
      "/images/RENDER REV_1/APPARTAMENTO E/3.png",
      "/images/RENDER REV_1/APPARTAMENTO E/4.png",
      "/images/RENDER REV_1/APPARTAMENTO E/5.png",
      "/images/RENDER REV_1/APPARTAMENTO E/6.png",
    ],
    beds: 1,
    baths: 1,
    sqm: 30,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Monolocale completamente ristrutturato con cucina nuova e pavimento in SPC.",
    longDescription: `Monolocale al primo piano completamente ristrutturato, pensato per offrire comfort in uno spazio contenuto.

La cucina è nuova e completamente attrezzata, il bagno è stato rifatto con sanitari nuovi e finiture attuali.

Il pavimento è in SPC in tutto l'appartamento, gli infissi sono in ottimo stato e il riscaldamento non è a pavimento.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'F',
    title: "Appartamento F",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 350'000",
    priceNumeric: 350000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO F/1.png",
      "/images/RENDER REV_1/APPARTAMENTO F/2.png",
      "/images/RENDER REV_1/APPARTAMENTO F/3.png",
      "/images/RENDER REV_1/APPARTAMENTO F/4.png",
      "/images/RENDER REV_1/APPARTAMENTO F/5.png",
      "/images/RENDER REV_1/APPARTAMENTO F/6.png",
      "/images/RENDER REV_1/APPARTAMENTO F/7.png",
      "/images/RENDER REV_1/APPARTAMENTO F/8.png",
    ],
    beds: 2,
    baths: 1,
    sqm: 64.5,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Bilocale completamente ristrutturato con cucina nuova e pavimento in SPC.",
    longDescription: `Bilocale al primo piano completamente ristrutturato, con metratura generosa e ambienti ben distribuiti.

La cucina è nuova e completamente attrezzata, il bagno è stato rinnovato con sanitari nuovi e rivestimenti moderni.

In tutto l'appartamento è presente pavimento in SPC, gli infissi sono in ottimo stato e il riscaldamento non è a pavimento.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'G',
    title: "Appartamento G",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 330'000",
    priceNumeric: 330000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO G/1.png",
      "/images/RENDER REV_1/APPARTAMENTO G/2.png",
      "/images/RENDER REV_1/APPARTAMENTO G/3.png",
      "/images/RENDER REV_1/APPARTAMENTO G/4.png",
      "/images/RENDER REV_1/APPARTAMENTO G/5.png",
      "/images/RENDER REV_1/APPARTAMENTO G/6.png",
      "/images/RENDER REV_1/APPARTAMENTO G/7.png",
    ],
    beds: 2,
    baths: 1,
    sqm: 58,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Bilocale completamente ristrutturato con cucina open space e pavimento in SPC.",
    longDescription: `Bilocale al primo piano completamente ristrutturato, con zona giorno open space e finiture moderne.

Gli interventi hanno riguardato sanitari e bagno completamente nuovi, oltre a una cucina nuova e completamente attrezzata inserita in un soggiorno luminoso.

Il pavimento è in SPC, molto resistente e di facile gestione, gli infissi sono in ottimo stato e il riscaldamento non è a pavimento.`,
    features: [
      "Appartamento completamente ristrutturato",
      "Sanitari nuovi",
      "Cucina nuova completamente attrezzata",
      "Pavimento in SPC",
      "Infissi in ottimo stato",
      "Riscaldamento non a pavimento",
      "WC con funzione bidet",
      "Termosifoni in ogni stanza",
    ],
    included: [
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Cantina",
      "Posto auto",
      "Spese notarili",
      "Spese di registro",
    ],
  },
];

export function getApartmentById(id: string): Apartment | undefined {
  return apartments.find(apt => apt.id.toLowerCase() === id.toLowerCase());
}

export function getAllApartmentIds(): string[] {
  return apartments.map(apt => apt.id);
}
