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
    price: "CHF 350'000",
    priceNumeric: 350000,
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
    beds: 2,
    baths: 1,
    sqm: 75,
    floor: "Piano Terra",
    availability: "Disponibile",
    description: "Moderno appartamento con finiture di pregio e ottima luminosità.",
    longDescription: `Splendido appartamento di nuova costruzione situato in una posizione strategica a Chiasso. 
    
L'immobile si distingue per le finiture di alta qualità e il design moderno che caratterizza ogni ambiente. L'ampio soggiorno con cucina a vista offre uno spazio conviviale e luminoso, ideale per momenti di relax e per ricevere ospiti.

Le camere da letto sono state progettate per garantire il massimo comfort, con ampie finestre che assicurano un'ottima illuminazione naturale. Il bagno è dotato di sanitari moderni e finiture eleganti.

La posizione dell'appartamento permette di raggiungere facilmente tutti i servizi principali: negozi, supermercati, scuole e mezzi pubblici sono a pochi passi.`,
    features: [
      "Cucina moderna completamente attrezzata",
      "Pavimenti in parquet",
      "Infissi con doppi vetri",
      "Riscaldamento a pavimento",
      "Videocitofono",
      "Cantina privata",
      "Posto auto incluso",
    ],
    included: [
      "Posto auto",
      "Cantina",
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'B',
    title: "Appartamento B",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 380'000",
    priceNumeric: 380000,
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
    beds: 2,
    baths: 1,
    sqm: 80,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Appartamento spazioso con ampio soggiorno e cucina moderna.",
    longDescription: `Elegante appartamento al primo piano con layout ottimizzato per sfruttare al meglio ogni metro quadro.

Il soggiorno ampio e luminoso si apre su una cucina moderna completamente attrezzata, creando un ambiente open space perfetto per la vita quotidiana. Le grandi finestre garantiscono un'abbondante luce naturale durante tutto il giorno.

Le due camere da letto offrono spazi confortevoli e ben proporzionati, con armadi a muro integrati. Il bagno è rifinito con materiali di qualità e dotato di doccia spaziosa.

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
      "Posto auto",
      "Cantina",
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'C',
    title: "Appartamento C",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 450'000",
    priceNumeric: 450000,
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
    beds: 3,
    baths: 2,
    sqm: 95,
    floor: "Secondo Piano",
    availability: "Disponibile",
    description: "Elegante trilocale con doppi servizi e balcone panoramico.",
    longDescription: `Prestigioso appartamento trilocale che offre spazi generosi e finiture di alto livello.

L'ampio soggiorno con zona pranzo si affaccia su un balcone panoramico, perfetto per godersi momenti di relax all'aria aperta. La cucina separata è completamente attrezzata con elettrodomestici di ultima generazione.

Le tre camere da letto sono tutte di buone dimensioni: la camera padronale dispone di bagno en-suite con doppio lavabo e doccia a filo pavimento. Il secondo bagno serve le altre due camere e gli ospiti.

Ideale per famiglie o professionisti che cercano spazio e comfort in una posizione comoda.`,
    features: [
      "Balcone panoramico",
      "Bagno en-suite camera padronale",
      "Doppi servizi",
      "Cucina separata con dispensa",
      "Parquet in rovere",
      "Climatizzazione",
      "Cantina e posto auto",
    ],
    included: [
      "Posto auto",
      "Cantina",
      "Cucina attrezzata",
      "Climatizzazione",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'D',
    title: "Appartamento D",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 320'000",
    priceNumeric: 320000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO D/1.png",
      "/images/RENDER REV_1/APPARTAMENTO D/2.png",
      "/images/RENDER REV_1/APPARTAMENTO D/3.png",
      "/images/RENDER REV_1/APPARTAMENTO D/4.png",
      "/images/RENDER REV_1/APPARTAMENTO D/5.png",
      "/images/RENDER REV_1/APPARTAMENTO D/6.png",
    ],
    beds: 2,
    baths: 1,
    sqm: 70,
    floor: "Piano Terra",
    availability: "Disponibile",
    description: "Appartamento accogliente con layout funzionale e ben organizzato.",
    longDescription: `Appartamento compatto ma ben organizzato, ideale per coppie o giovani professionisti.

Gli spazi sono stati progettati con intelligenza per ottimizzare ogni ambiente. Il soggiorno con angolo cottura è luminoso e accogliente, con accesso diretto al giardino condominiale.

Le due camere da letto sono confortevoli e silenziose, affacciate sul lato interno dell'edificio. Il bagno è moderno e funzionale.

La posizione al piano terra con accesso al giardino rende questo appartamento particolarmente adatto a chi ama gli spazi esterni.`,
    features: [
      "Accesso diretto al giardino",
      "Angolo cottura moderno",
      "Ripostiglio",
      "Riscaldamento a pavimento",
      "Infissi nuovi",
      "Posto bici coperto",
    ],
    included: [
      "Uso giardino comune",
      "Cantina",
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
      "Posto auto (disponibile separatamente)",
    ],
  },
  {
    id: 'E',
    title: "Appartamento E",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 340'000",
    priceNumeric: 340000,
    type: "Vendita",
    images: [
      "/images/RENDER REV_1/APPARTAMENTO E/1.png",
      "/images/RENDER REV_1/APPARTAMENTO E/2.png",
      "/images/RENDER REV_1/APPARTAMENTO E/3.png",
      "/images/RENDER REV_1/APPARTAMENTO E/4.png",
      "/images/RENDER REV_1/APPARTAMENTO E/5.png",
      "/images/RENDER REV_1/APPARTAMENTO E/6.png",
    ],
    beds: 2,
    baths: 1,
    sqm: 72,
    floor: "Primo Piano",
    availability: "Disponibile",
    description: "Bilocale luminoso con finiture moderne e ottima esposizione.",
    longDescription: `Luminoso bilocale con esposizione est-ovest che garantisce luce naturale durante tutta la giornata.

Il design degli interni è contemporaneo e funzionale. Il soggiorno spazioso include una zona pranzo e si collega alla cucina semi-aperta attraverso un elegante bancone. Il balcone permette di godere della luce del sole nelle ore pomeridiane.

Le camere da letto sono ben dimensionate e silenziose. Il bagno è dotato di finestra, una caratteristica apprezzata per la ventilazione naturale.

Perfetto per giovani professionisti o coppie che cercano un appartamento moderno e ben collegato.`,
    features: [
      "Doppia esposizione est-ovest",
      "Balcone esposto a ovest",
      "Cucina semi-aperta con bancone",
      "Bagno con finestra",
      "Parquet in tutto l'appartamento",
      "Predisposizione climatizzazione",
      "Cantina",
    ],
    included: [
      "Posto auto",
      "Cantina",
      "Cucina attrezzata",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'F',
    title: "Appartamento F",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 520'000",
    priceNumeric: 520000,
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
    beds: 3,
    baths: 2,
    sqm: 100,
    floor: "Secondo Piano",
    availability: "Disponibile",
    description: "Ampio trilocale con terrazzo e vista aperta, perfetto per famiglie.",
    longDescription: `Spazioso appartamento trilocale che rappresenta la soluzione ideale per famiglie che cercano comfort e qualità.

Il grande soggiorno si apre su un ampio terrazzo vivibile, perfetto per pranzi e cene all'aperto durante la bella stagione. La cucina è completamente separata e offre abbondante spazio per cucinare e conservare.

La zona notte comprende tre camere da letto ben dimensionate. La camera padronale ha accesso al terrazzo e dispone di bagno privato. Il secondo bagno è dedicato alle altre camere e agli ospiti.

Le finiture sono di altissimo livello: parquet in rovere, infissi in legno-alluminio, impianto domotico per luci e tapparelle.`,
    features: [
      "Terrazzo di 25 mq",
      "Bagno padronale en-suite",
      "Cucina separata con balcone di servizio",
      "Impianto domotico",
      "Infissi legno-alluminio",
      "Climatizzazione",
      "Doppio posto auto",
      "Cantina grande",
    ],
    included: [
      "Doppio posto auto",
      "Cantina",
      "Cucina attrezzata",
      "Climatizzazione",
      "Impianto domotico",
    ],
    notIncluded: [
      "Spese notarili",
      "Spese di registro",
    ],
  },
  {
    id: 'G',
    title: "Appartamento G",
    address: "Via Example 1",
    city: "Chiasso",
    price: "CHF 390'000",
    priceNumeric: 390000,
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
    sqm: 78,
    floor: "Attico",
    availability: "Disponibile",
    description: "Appartamento di design con cucina open space e ambienti luminosi.",
    longDescription: `Esclusivo appartamento all'ultimo piano con caratteristiche uniche e design contemporaneo.

Gli ambienti sono stati progettati da un architetto per massimizzare la luce e la sensazione di spazio. Il soggiorno open space con cucina a vista presenta soffitti alti e ampie vetrate che inondano gli ambienti di luce naturale.

Le due camere da letto sono oasi di tranquillità, isolate acusticamente e con vista aperta sul quartiere. Il bagno è un piccolo gioiello di design con doccia a pioggia e finiture in pietra naturale.

La posizione all'ultimo piano garantisce privacy, silenzio e una vista privilegiata.`,
    features: [
      "Ultimo piano con vista",
      "Soffitti alti",
      "Design d'autore",
      "Doccia a pioggia",
      "Finiture in pietra naturale",
      "Illuminazione LED integrata",
      "Climatizzazione",
      "Posto auto coperto",
    ],
    included: [
      "Posto auto coperto",
      "Cantina",
      "Cucina attrezzata",
      "Climatizzazione",
    ],
    notIncluded: [
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
