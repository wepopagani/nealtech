module.exports = [
"[project]/src/data/apartments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apartments",
    ()=>apartments,
    "getAllApartmentIds",
    ()=>getAllApartmentIds,
    "getApartmentById",
    ()=>getApartmentById
]);
const apartments = [
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
            "/images/RENDER REV_1/APPARTAMENTO A/7.png"
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
            "Videocitofono"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO B/8.png"
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
            "Tapparelle elettriche"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO C/8.png"
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
            "Infissi con doppi vetri"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO D/6.png"
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
            "Infissi nuovi"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO E/6.png"
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
            "Predisposizione climatizzazione"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO F/8.png"
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
            "Riscaldamento a pavimento"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
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
            "/images/RENDER REV_1/APPARTAMENTO G/7.png"
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
            "Predisposizione climatizzazione"
        ],
        included: [
            "Cucina attrezzata"
        ],
        notIncluded: [
            "Cantina",
            "Posto auto",
            "Spese notarili",
            "Spese di registro"
        ]
    }
];
function getApartmentById(id) {
    return apartments.find((apt)=>apt.id.toLowerCase() === id.toLowerCase());
}
function getAllApartmentIds() {
    return apartments.map((apt)=>apt.id);
}
}),
"[project]/src/app/immobili/chiasso/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImmobiliChiasso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/apartments.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ImmobiliChiasso() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-gradient py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-white",
                            children: "Appartamenti a Chiasso"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-lg text-gray-200 max-w-2xl mx-auto",
                            children: "Scopri i nostri 7 appartamenti in vendita a Chiasso, moderni e con finiture di alta qualità"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-[#64748b] hover:text-[#1e6bb8] transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-[#64748b]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0d2644] font-medium",
                                children: "Appartamenti Chiasso"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#38bdf8]/10 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-[#0d2644]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-[#1e6bb8]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Tutti gli appartamenti sono in vendita - Clicca su un appartamento per vedere i dettagli"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-8 border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0d2644] font-medium",
                                children: "Piante disponibili:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/images/RENDER REV_1/PIANTA LETTI APERTI.png",
                                target: "_blank",
                                className: "flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    "Pianta Letti Aperti"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/images/RENDER REV_1/PIANTA LETTI CHIUSI.png",
                                target: "_blank",
                                className: "flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    "Pianta Letti Chiusi"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#64748b] mb-8",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apartments"].length,
                                " appartamenti a Chiasso (",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apartments"].filter((a)=>a.availability !== 'Venduto').length,
                                " disponibili)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apartments"].map((apartment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/immobili/chiasso/${apartment.id}`,
                                    className: "property-card bg-white rounded-2xl overflow-hidden shadow-lg block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-64 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: apartment.images[0],
                                                    alt: apartment.title,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium",
                                                            children: apartment.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        apartment.availability === 'Venduto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium",
                                                            children: "VENDUTO"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this),
                                                        apartment.images.length,
                                                        " foto"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/90 text-[#0d2644] px-4 py-2 rounded-full font-medium",
                                                        children: "Vedi dettagli →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-[#0d2644]",
                                                            children: apartment.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-[#64748b] bg-gray-100 px-2 py-1 rounded",
                                                            children: apartment.floor
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-2xl font-bold mt-3 ${apartment.price === 'VENDUTO' ? 'text-red-600' : 'text-[#1e6bb8]'}`,
                                                    children: apartment.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#64748b] text-sm mt-2 line-clamp-2",
                                                    children: apartment.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-4 pt-4 border-t border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 23
                                                                }, this),
                                                                apartment.beds,
                                                                " camere"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 23
                                                                }, this),
                                                                apartment.baths,
                                                                " bagni"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 23
                                                                }, this),
                                                                apartment.sqm,
                                                                " m²"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white py-3 rounded-lg font-semibold text-center group-hover:shadow-lg transition-shadow",
                                                    children: "Vedi Scheda Completa"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, apartment.id, true, {
                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold text-[#0d2644]",
                            children: "Interessato a uno dei nostri appartamenti?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[#64748b] max-w-xl mx-auto",
                            children: "Contattaci per organizzare una visita o per ricevere maggiori informazioni"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contatti",
                            className: "inline-flex items-center mt-8 bg-gradient-to-r from-[#0d2644] via-[#1e6bb8] to-[#38bdf8] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300",
                            children: "Contattaci Ora"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/immobili/chiasso/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_c5d7ebd5._.js.map