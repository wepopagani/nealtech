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
    description: "Moderno appartamento con finiture di pregio e ottima luminosità.",
    longDescription: `Splendido appartamento di nuova costruzione situato in una posizione strategica a Chiasso. 
    
L'immobile si distingue per le finiture di alta qualità e il design moderno che caratterizza ogni ambiente. L'ampio soggiorno con cucina a vista offre uno spazio conviviale e luminoso, ideale per momenti di relax e per ricevere ospiti.

La camera da letto è stata progettata per garantire il massimo comfort, con ampie finestre che assicurano un'ottima illuminazione naturale. Il bagno è dotato di sanitari moderni e finiture eleganti.

La posizione dell'appartamento permette di raggiungere facilmente tutti i servizi principali: negozi, supermercati, scuole e mezzi pubblici sono a pochi passi.`,
    features: [
      "Cucina moderna completamente attrezzata",
      "Pavimenti in parquet",
      "Infissi con doppi vetri",
      "Riscaldamento a pavimento",
      "Videocitofono",
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
    description: "Appartamento spazioso con ampio soggiorno e cucina moderna.",
    longDescription: `Elegante appartamento al primo piano con layout ottimizzato per sfruttare al meglio ogni metro quadro.

Il soggiorno ampio e luminoso si apre su una cucina moderna completamente attrezzata, creando un ambiente open space perfetto per la vita quotidiana. Le grandi finestre garantiscono un'abbondante luce naturale durante tutto il giorno.

La camera da letto offre spazio confortevole e ben proporzionato, con armadio a muro integrato. Il bagno è rifinito con materiali di qualità e dotato di doccia spaziosa.

La posizione centrale permette di raggiungere a piedi tutti i principali servizi della città.`,
    features: [
      "Open space soggiorno-cucina",
      "Cucina con isola",
      "Armadi a muro",
      "Bagno con doccia walk-in",
      "Balcone",
      "Riscaldamento a pavimento",
      "Tapparelle elettriche",
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
    description: "Elegante bilocale con ampi spazi e finiture di pregio.",
    longDescription: `Prestigioso appartamento bilocale che offre spazi generosi e finiture di alto livello.

L'ampio soggiorno con zona pranzo è perfetto per godersi momenti di relax. La cucina separata è completamente attrezzata con elettrodomestici di ultima generazione.

Le due camere da letto sono di buone dimensioni, luminose e silenziose. Il bagno è rifinito con materiali di qualità.

Ideale per coppie o piccole famiglie che cercano spazio e comfort in una posizione comoda.`,
    features: [
      "Due camere da letto",
      "Cucina separata con dispensa",
      "Parquet in rovere",
      "Riscaldamento a pavimento",
      "Infissi con doppi vetri",
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
    price: "VENDUTO",
    priceNumeric: 0,
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
    availability: "Venduto",
    description: "Appartamento accogliente con layout funzionale e ben organizzato.",
    longDescription: `Appartamento compatto ma ben organizzato, ideale per single o giovani professionisti.

Gli spazi sono stati progettati con intelligenza per ottimizzare ogni ambiente. Il soggiorno con angolo cottura è luminoso e accogliente.

La camera da letto è confortevole e silenziosa. Il bagno è moderno e funzionale.

Posizione comoda con tutti i servizi a portata di mano.`,
    features: [
      "Angolo cottura moderno",
      "Ripostiglio",
      "Riscaldamento a pavimento",
      "Infissi nuovi",
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
    price: "VENDUTO",
    priceNumeric: 0,
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
    availability: "Venduto",
    description: "Monolocale luminoso con finiture moderne e ottima esposizione.",
    longDescription: `Luminoso monolocale con esposizione che garantisce luce naturale durante tutta la giornata.

Il design degli interni è contemporaneo e funzionale. Il soggiorno spazioso include una zona pranzo e si collega alla cucina semi-aperta attraverso un elegante bancone.

La zona notte è ben dimensionata e silenziosa. Il bagno è dotato di finestra, una caratteristica apprezzata per la ventilazione naturale.

Perfetto per giovani professionisti o come investimento.`,
    features: [
      "Ottima luminosità",
      "Cucina semi-aperta con bancone",
      "Bagno con finestra",
      "Parquet in tutto l'appartamento",
      "Predisposizione climatizzazione",
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
    description: "Ampio bilocale con ottima metratura, perfetto per coppie o piccole famiglie.",
    longDescription: `Spazioso appartamento bilocale che rappresenta la soluzione ideale per chi cerca comfort e qualità.

Il grande soggiorno è luminoso e ben proporzionato. La cucina è completamente separata e offre abbondante spazio per cucinare e conservare.

La zona notte comprende due camere da letto ben dimensionate, luminose e silenziose. Il bagno è rifinito con materiali di qualità.

Le finiture sono di alto livello: parquet in rovere, infissi in legno-alluminio.`,
    features: [
      "Due camere da letto",
      "Cucina separata",
      "Parquet in rovere",
      "Infissi legno-alluminio",
      "Riscaldamento a pavimento",
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
    description: "Appartamento di design con cucina open space e ambienti luminosi.",
    longDescription: `Appartamento con caratteristiche uniche e design contemporaneo.

Gli ambienti sono stati progettati per massimizzare la luce e la sensazione di spazio. Il soggiorno open space con cucina a vista presenta ampie vetrate che inondano gli ambienti di luce naturale.

Le due camere da letto sono oasi di tranquillità, isolate acusticamente. Il bagno è un piccolo gioiello di design con doccia a pioggia e finiture di qualità.

Ottimo rapporto qualità-prezzo per chi cerca un bilocale moderno.`,
    features: [
      "Design contemporaneo",
      "Open space luminoso",
      "Doccia a pioggia",
      "Finiture di qualità",
      "Illuminazione LED integrata",
      "Predisposizione climatizzazione",
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
