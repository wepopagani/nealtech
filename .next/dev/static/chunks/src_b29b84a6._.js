(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/apartments.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
            "Riscaldamento non a pavimento"
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/immobili/chiasso/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImmobiliChiasso
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/apartments.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function ImmobiliChiasso() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "brand-gradient py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-bold text-white",
                            children: "Appartamenti a Chiasso"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center space-x-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-[#64748b] hover:text-[#1e6bb8] transition-colors",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 text-[#64748b]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#38bdf8]/10 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-2 text-[#0d2644]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5 text-[#1e6bb8]",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-8 border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#0d2644] font-medium",
                                children: "Piante disponibili:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/images/RENDER REV_1/PIANTA LETTI APERTI.png",
                                target: "_blank",
                                className: "flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/images/RENDER REV_1/PIANTA LETTI CHIUSI.png",
                                target: "_blank",
                                className: "flex items-center gap-2 text-[#1e6bb8] hover:text-[#0d2644] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#64748b] mb-8",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apartments"].length,
                                " appartamenti a Chiasso (",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apartments"].filter((a)=>a.availability !== 'Venduto').length,
                                " disponibili)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$apartments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apartments"].map((apartment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/immobili/chiasso/${apartment.id}`,
                                    className: "property-card bg-white rounded-2xl overflow-hidden shadow-lg block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-64 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: apartment.images[0],
                                                    alt: apartment.title,
                                                    fill: true,
                                                    className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 left-4 flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-[#38bdf8] text-white px-3 py-1 rounded-full text-sm font-medium",
                                                            children: apartment.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this),
                                                        apartment.availability === 'Venduto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-4 h-4",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-[#0d2644]",
                                                            children: apartment.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `text-2xl font-bold mt-3 ${apartment.price === 'VENDUTO' ? 'text-red-600' : 'text-[#1e6bb8]'}`,
                                                    children: apartment.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#64748b] text-sm mt-2 line-clamp-2",
                                                    children: apartment.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-4 pt-4 border-t border-gray-100",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-[#64748b] text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4 mr-1",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-bold text-[#0d2644]",
                            children: "Interessato a uno dei nostri appartamenti?"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[#64748b] max-w-xl mx-auto",
                            children: "Contattaci per organizzare una visita o per ricevere maggiori informazioni"
                        }, void 0, false, {
                            fileName: "[project]/src/app/immobili/chiasso/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = ImmobiliChiasso;
var _c;
__turbopack_context__.k.register(_c, "ImmobiliChiasso");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b29b84a6._.js.map