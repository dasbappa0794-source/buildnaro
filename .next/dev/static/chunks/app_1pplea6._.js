(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/LanguageSwitcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/i18n/LanguageContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LanguageSwitcher({ className }) {
    _s();
    const { lang, setLang, languages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        className: className || "lang-switcher",
        value: lang,
        onChange: (e)=>setLang(e.target.value),
        "aria-label": "Choose language",
        children: languages.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: l.code,
                children: l.native
            }, l.code, false, {
                fileName: "[project]/app/components/LanguageSwitcher.js",
                lineNumber: 15,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/LanguageSwitcher.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "0SA7JutVdt8niK4P64XaVpmZshQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/construction-estimate-calculator/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Calculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/i18n/LanguageContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LanguageSwitcher.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Common construction & interior materials — suggestions only; any name can be typed.
const MATERIAL_SUGGESTIONS = [
    "Cement",
    "TMT Steel Bars",
    "Sand",
    "Stone Aggregate / Chips",
    "Bricks",
    "AAC Blocks",
    "Ready Mix Concrete",
    "Vitrified Tiles",
    "Ceramic Tiles",
    "Marble",
    "Granite",
    "Plywood",
    "MDF Board",
    "Laminate Sheet",
    "Veneer",
    "Interior Paint",
    "Exterior Paint",
    "Primer",
    "Wall Putty",
    "PVC Pipe",
    "CPVC Pipe",
    "Electrical Wire",
    "MCB / Switchgear",
    "Modular Switches",
    "Wood / Timber",
    "Flush Door",
    "Door Frame",
    "UPVC Window",
    "Aluminium Window",
    "Glass",
    "Door & Window Hardware",
    "Waterproofing Chemical",
    "Bitumen / Tar",
    "Gypsum Board",
    "POP (Plaster of Paris)",
    "Tile Adhesive",
    "Tile Grout",
    "False Ceiling Grid",
    "Modular Kitchen",
    "Wardrobe",
    "Sanitaryware (WC/Basin)",
    "CP Fittings (Taps/Mixers)",
    "Water Storage Tank",
    "Roofing Sheet",
    "MS Fencing",
    "Interlocking Pavers",
    "Curtains",
    "Wallpaper",
    "Light Fixtures",
    "Split AC",
    "Furniture",
    "Binding Wire (GI Wire)",
    "Nails (Perek)",
    "Shuttering Pins"
];
// Material name -> default unit suggestion (auto-fills, still user-editable)
const MATERIAL_UNIT_MAP = {
    "Cement": "Bag",
    "TMT Steel Bars": "Kg",
    "Sand": "CFT",
    "Stone Aggregate / Chips": "CFT",
    "Bricks": "Nos",
    "AAC Blocks": "Nos",
    "Ready Mix Concrete": "Cubic Meter (m³)",
    "Vitrified Tiles": "Sq ft",
    "Ceramic Tiles": "Sq ft",
    "Marble": "Sq ft",
    "Granite": "Sq ft",
    "Plywood": "Sheet",
    "MDF Board": "Sheet",
    "Laminate Sheet": "Sheet",
    "Veneer": "Sheet",
    "Interior Paint": "Litre",
    "Exterior Paint": "Litre",
    "Primer": "Litre",
    "Wall Putty": "Kg",
    "PVC Pipe": "Running ft",
    "CPVC Pipe": "Running ft",
    "Electrical Wire": "Roll",
    "MCB / Switchgear": "Nos",
    "Modular Switches": "Nos",
    "Wood / Timber": "CFT",
    "Flush Door": "Nos",
    "Door Frame": "Nos",
    "UPVC Window": "Sq ft",
    "Aluminium Window": "Sq ft",
    "Glass": "Sq ft",
    "Door & Window Hardware": "Set",
    "Waterproofing Chemical": "Litre",
    "Bitumen / Tar": "Kg",
    "Gypsum Board": "Sheet",
    "POP (Plaster of Paris)": "Bag",
    "Tile Adhesive": "Bag",
    "Tile Grout": "Kg",
    "False Ceiling Grid": "Sq ft",
    "Modular Kitchen": "Running ft",
    "Wardrobe": "Sq ft",
    "Sanitaryware (WC/Basin)": "Set",
    "CP Fittings (Taps/Mixers)": "Set",
    "Water Storage Tank": "Nos",
    "Roofing Sheet": "Sq ft",
    "MS Fencing": "Running ft",
    "Interlocking Pavers": "Sq ft",
    "Curtains": "Nos",
    "Wallpaper": "Roll",
    "Light Fixtures": "Nos",
    "Split AC": "Nos",
    "Furniture": "Nos",
    "Binding Wire (GI Wire)": "Kg",
    "Nails (Perek)": "Kg",
    "Shuttering Pins": "Nos"
};
// Material name -> common brand suggestions (datalist only; typing a custom brand is always allowed)
const MATERIAL_BRAND_MAP = {
    "Cement": [
        "UltraTech",
        "ACC",
        "Ambuja",
        "Shree Cement",
        "Ramco",
        "Dalmia",
        "JK Cement"
    ],
    "TMT Steel Bars": [
        "TATA Tiscon",
        "JSW Neosteel",
        "SAIL",
        "Vizag Steel",
        "Jindal Panther"
    ],
    "Vitrified Tiles": [
        "Kajaria",
        "Somany",
        "Nitco",
        "Orientbell",
        "Johnson"
    ],
    "Ceramic Tiles": [
        "Kajaria",
        "Somany",
        "Nitco",
        "Orientbell",
        "Johnson"
    ],
    "Plywood": [
        "Century Ply",
        "Greenply",
        "Kitply",
        "Archidply"
    ],
    "Interior Paint": [
        "Asian Paints",
        "Berger",
        "Nerolac",
        "Dulux",
        "Indigo"
    ],
    "Exterior Paint": [
        "Asian Paints",
        "Berger",
        "Nerolac",
        "Dulux"
    ],
    "PVC Pipe": [
        "Supreme",
        "Finolex",
        "Astral",
        "Prince"
    ],
    "CPVC Pipe": [
        "Supreme",
        "Finolex",
        "Astral",
        "Ashirvad"
    ],
    "Electrical Wire": [
        "Havells",
        "Polycab",
        "Finolex",
        "KEI"
    ],
    "MCB / Switchgear": [
        "Havells",
        "Legrand",
        "Schneider",
        "ABB"
    ],
    "Modular Switches": [
        "Anchor",
        "Legrand",
        "Havells",
        "GM"
    ],
    "Sanitaryware (WC/Basin)": [
        "Cera",
        "Hindware",
        "Jaquar",
        "Parryware"
    ],
    "CP Fittings (Taps/Mixers)": [
        "Jaquar",
        "Cera",
        "Kohler",
        "Hindware"
    ],
    "Split AC": [
        "LG",
        "Voltas",
        "Daikin",
        "Samsung",
        "Blue Star"
    ],
    "Water Storage Tank": [
        "Sintex",
        "Supreme",
        "Ashirvad"
    ]
};
const GENERIC_BRANDS = [
    "Local / Unbranded"
];
const ROD_SIZES = [
    "6 mm",
    "8 mm",
    "10 mm",
    "12 mm",
    "16 mm",
    "20 mm",
    "25 mm",
    "32 mm"
];
const isRodLike = (name)=>/rod|steel|tmt|bar/i.test(name || "");
const UNITS = [
    "Bag",
    "Kg",
    "Ton",
    "Quintal",
    "Litre",
    "Gallon",
    "CFT",
    "Cubic Meter (m³)",
    "Sq ft",
    "Sq m",
    "Sq yd",
    "Running ft",
    "Running meter",
    "Nos",
    "Set",
    "Roll",
    "Sheet",
    "Box",
    "Bundle",
    "Meter",
    "Point",
    "Dozen",
    "Pair",
    "Trip",
    "Load",
    "Hour",
    "Day",
    "Inch",
    "mm",
    "Unit"
];
const money = (value, currency)=>new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 2
    }).format(Number(value) || 0);
function Calculator() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const printRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scriptsReady, setScriptsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        html2canvas: false,
        jspdf: false,
        xlsx: false
    });
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "My Construction Project",
        currency: "INR",
        mode: "boq",
        area: 1000,
        areaUnit: "sq ft",
        rate: 1800,
        useAdditionalCosts: false,
        wastage: 0,
        other: 0,
        tax: 0,
        contingency: 0,
        includeLabour: false,
        labourType: "contract",
        contractAmount: 0,
        contractDays: "",
        leadCount: 0,
        helperCount: 0,
        leadRate: 0,
        helperRate: 0,
        workDays: 0,
        includeTransport: false,
        transport: 0
    });
    const [materials, setMaterials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: "Cement",
            brand: "",
            size: "",
            unit: "Bag",
            qty: 0,
            rate: 500
        },
        {
            name: "Sand",
            brand: "",
            size: "",
            unit: "CFT",
            qty: 0,
            rate: 65
        },
        {
            name: "Bricks",
            brand: "",
            size: "",
            unit: "Nos",
            qty: 0,
            rate: 9
        },
        {
            name: "TMT Steel Bars",
            brand: "",
            size: "",
            unit: "Kg",
            qty: 0,
            rate: 68
        }
    ]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const materialSubtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Calculator.useMemo[materialSubtotal]": ()=>materials.reduce({
                "Calculator.useMemo[materialSubtotal]": (s, m)=>s + (Number(m.qty) || 0) * (Number(m.rate) || 0)
            }["Calculator.useMemo[materialSubtotal]"], 0)
    }["Calculator.useMemo[materialSubtotal]"], [
        materials
    ]);
    const areaComponent = project.mode === "area" || project.mode === "both" ? (Number(project.area) || 0) * (Number(project.rate) || 0) : 0;
    const materialComponent = project.mode === "boq" || project.mode === "both" ? materialSubtotal : 0;
    const combinedBase = areaComponent + materialComponent;
    const useExtra = project.useAdditionalCosts;
    const wastageCost = useExtra && (project.mode === "boq" || project.mode === "both") ? materialComponent * (Number(project.wastage || 0) / 100) : 0;
    const subtotalAfterWastage = combinedBase + wastageCost;
    const labourCost = useExtra && project.includeLabour ? project.labourType === "contract" ? Number(project.contractAmount) || 0 : ((Number(project.leadCount) || 0) * (Number(project.leadRate) || 0) + (Number(project.helperCount) || 0) * (Number(project.helperRate) || 0)) * (Number(project.workDays) || 0) : 0;
    const transportCost = useExtra && project.includeTransport ? Number(project.transport) || 0 : 0;
    const otherCost = useExtra ? subtotalAfterWastage * (Number(project.other || 0) / 100) : 0;
    const contingency = useExtra ? subtotalAfterWastage * (Number(project.contingency || 0) / 100) : 0;
    const taxable = subtotalAfterWastage + labourCost + transportCost + otherCost + contingency;
    const tax = useExtra ? taxable * (Number(project.tax || 0) / 100) : 0;
    const grandTotal = taxable + tax;
    const updateProject = (key, value)=>setProject((p)=>({
                ...p,
                [key]: value
            }));
    const setMaterialName = (i, value)=>setMaterials((list)=>list.map((m, idx)=>{
                if (idx !== i) return m;
                const unit = MATERIAL_UNIT_MAP[value] || m.unit;
                return {
                    ...m,
                    name: value,
                    unit
                };
            }));
    const updateMaterial = (i, key, value)=>setMaterials((list)=>list.map((m, idx)=>idx === i ? {
                    ...m,
                    [key]: value
                } : m));
    const addMaterial = ()=>setMaterials((l)=>[
                ...l,
                {
                    name: "",
                    brand: "",
                    size: "",
                    unit: "Unit",
                    qty: 0,
                    rate: 0
                }
            ]);
    const removeMaterial = (i)=>setMaterials((l)=>l.filter((_, idx)=>idx !== i));
    const saveEstimate = ()=>{
        localStorage.setItem("buildnaro-estimate", JSON.stringify({
            project,
            materials,
            materialSubtotal,
            grandTotal,
            savedAt: new Date().toISOString()
        }));
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    // ---- Downloads ----
    const buildRows = ()=>{
        const rows = [
            [
                t("th_material"),
                t("th_brand"),
                t("th_spec"),
                t("th_unit"),
                t("th_qty"),
                t("th_rate"),
                t("th_amount")
            ]
        ];
        materials.forEach((m)=>rows.push([
                m.name || "-",
                m.brand || "-",
                m.size || "-",
                m.unit,
                Number(m.qty) || 0,
                Number(m.rate) || 0,
                (Number(m.qty) || 0) * (Number(m.rate) || 0)
            ]));
        return rows;
    };
    const downloadJPG = async ()=>{
        if (!window.html2canvas || !printRef.current) return;
        const canvas = await window.html2canvas(printRef.current, {
            scale: 2,
            backgroundColor: "#ffffff"
        });
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg", 0.95);
        a.download = `${(project.name || "estimate").replace(/\s+/g, "-")}.jpg`;
        a.click();
    };
    const downloadPDF = async ()=>{
        if (!window.html2canvas || !window.jspdf || !printRef.current) return;
        const canvas = await window.html2canvas(printRef.current, {
            scale: 2,
            backgroundColor: "#ffffff"
        });
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });
        const pageW = 210, pageH = 297;
        const imgW = pageW;
        const imgH = canvas.height * imgW / canvas.width;
        let heightLeft = imgH, position = 0;
        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
        heightLeft -= pageH;
        while(heightLeft > 0){
            position = heightLeft - imgH;
            pdf.addPage();
            pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
            heightLeft -= pageH;
        }
        pdf.save(`${(project.name || "estimate").replace(/\s+/g, "-")}.pdf`);
    };
    const downloadExcel = ()=>{
        if (!window.XLSX) return;
        const XLSX = window.XLSX;
        const wb = XLSX.utils.book_new();
        const rows = buildRows();
        rows.push([]);
        if (project.mode === "area" || project.mode === "both") rows.push([
            t("pd_mode_area"),
            "",
            "",
            "",
            "",
            "",
            areaComponent
        ]);
        if (project.mode === "boq" || project.mode === "both") rows.push([
            t("boq_subtotal"),
            "",
            "",
            "",
            "",
            "",
            materialComponent
        ]);
        if (wastageCost) rows.push([
            t("bd_wastage"),
            "",
            "",
            "",
            "",
            "",
            wastageCost
        ]);
        if (labourCost) rows.push([
            t("bd_labour"),
            "",
            "",
            "",
            "",
            "",
            labourCost
        ]);
        if (transportCost) rows.push([
            t("bd_transport"),
            "",
            "",
            "",
            "",
            "",
            transportCost
        ]);
        if (useExtra) rows.push([
            t("bd_other"),
            "",
            "",
            "",
            "",
            "",
            otherCost
        ]);
        if (useExtra) rows.push([
            t("bd_contingency"),
            "",
            "",
            "",
            "",
            "",
            contingency
        ]);
        if (useExtra) rows.push([
            t("bd_tax"),
            "",
            "",
            "",
            "",
            "",
            tax
        ]);
        rows.push([
            t("bd_grand"),
            "",
            "",
            "",
            "",
            "",
            grandTotal
        ]);
        const ws = XLSX.utils.aoa_to_sheet(rows);
        XLSX.utils.book_append_sheet(wb, ws, "Estimate");
        XLSX.writeFile(wb, `${(project.name || "estimate").replace(/\s+/g, "-")}.xlsx`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js",
                strategy: "afterInteractive",
                onLoad: ()=>setScriptsReady((s)=>({
                            ...s,
                            html2canvas: true
                        }))
            }, void 0, false, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 178,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
                strategy: "afterInteractive",
                onLoad: ()=>setScriptsReady((s)=>({
                            ...s,
                            jspdf: true
                        }))
            }, void 0, false, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 179,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
                strategy: "afterInteractive",
                onLoad: ()=>setScriptsReady((s)=>({
                            ...s,
                            xlsx: true
                        }))
            }, void 0, false, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 180,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                id: "material-suggestions",
                children: MATERIAL_SUGGESTIONS.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: x
                    }, x, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 182,
                        columnNumber: 70
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 182,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "brand",
                        href: "/",
                        children: [
                            "Build",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Naro"
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 184,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 184,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        children: t("nav_home")
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 184,
                        columnNumber: 88
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 184,
                        columnNumber: 119
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 184,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: t("calc_eyebrow")
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 185,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: t("calc_title")
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 185,
                        columnNumber: 81
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: t("calc_desc")
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 185,
                        columnNumber: 107
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 185,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t("pd_heading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 188,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "full",
                                            children: [
                                                t("pd_name"),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: project.name,
                                                    onChange: (e)=>updateProject("name", e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                    lineNumber: 189,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 189,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 188,
                                        columnNumber: 57
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 188,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t("settings_heading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 192,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    t("pd_calc_mode"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.mode,
                                                        onChange: (e)=>updateProject("mode", e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "area",
                                                                children: t("pd_mode_area")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 193,
                                                                columnNumber: 117
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "boq",
                                                                children: t("pd_mode_boq")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 193,
                                                                columnNumber: 166
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "both",
                                                                children: t("pd_mode_both")
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 193,
                                                                columnNumber: 213
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 193,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 193,
                                                columnNumber: 11
                                            }, this),
                                            (project.mode === "area" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            t("pd_area"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                value: project.area,
                                                                onChange: (e)=>updateProject("area", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 195,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 195,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            t("pd_area_unit"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: project.areaUnit,
                                                                onChange: (e)=>updateProject("areaUnit", e.target.value),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq ft"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 196,
                                                                        columnNumber: 127
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq m"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 196,
                                                                        columnNumber: 149
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq yd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 196,
                                                                        columnNumber: 170
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 196,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 196,
                                                        columnNumber: 13
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            t("pd_rate"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                value: project.rate,
                                                                onChange: (e)=>updateProject("rate", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 197,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 197,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 194,
                                                columnNumber: 60
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 192,
                                        columnNumber: 63
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 192,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 187,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card summary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: t("summary_heading")
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 202,
                                columnNumber: 37
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "summary-main",
                                children: money(grandTotal, project.currency)
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 202,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: t("summary_total")
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 202,
                                columnNumber: 140
                            }, this),
                            (project.mode === "area" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mini",
                                children: [
                                    t("pd_mode_area"),
                                    ": ",
                                    money(areaComponent, project.currency)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 203,
                                columnNumber: 58
                            }, this),
                            (project.mode === "boq" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mini",
                                children: [
                                    t("summary_materials"),
                                    ": ",
                                    money(materialComponent, project.currency)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 204,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 202,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: t("boq_heading")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 207,
                                                columnNumber: 64
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: t("material_name_ph")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 207,
                                                columnNumber: 91
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 207,
                                        columnNumber: 59
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addMaterial,
                                        children: t("boq_add")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 207,
                                        columnNumber: 127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 207,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_material")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_brand")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 82
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_spec")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 106
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_unit")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 129
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_qty")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 152
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_rate")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 174
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: t("th_amount")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 197
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 208,
                                                        columnNumber: 222
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 208,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 208,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: materials.map((m, i)=>{
                                                const amount = (Number(m.qty) || 0) * (Number(m.rate) || 0);
                                                const brandKey = Object.keys(MATERIAL_BRAND_MAP).find((k)=>(m.name || "").toLowerCase().includes(k.toLowerCase()));
                                                const brandOptions = brandKey ? MATERIAL_BRAND_MAP[brandKey] : GENERIC_BRANDS;
                                                const sizeOptions = isRodLike(m.name) ? ROD_SIZES : [];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "mat-row-name",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                list: "material-suggestions",
                                                                value: m.name,
                                                                placeholder: t("material_name_ph"),
                                                                onChange: (e)=>setMaterialName(i, e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 215,
                                                                columnNumber: 40
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 215,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    list: `brand-list-${i}`,
                                                                    value: m.brand,
                                                                    placeholder: t("brand_ph"),
                                                                    onChange: (e)=>updateMaterial(i, "brand", e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 216,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                                    id: `brand-list-${i}`,
                                                                    children: brandOptions.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: b
                                                                        }, b, false, {
                                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                            lineNumber: 217,
                                                                            columnNumber: 67
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 217,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 216,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    list: `size-list-${i}`,
                                                                    value: m.size,
                                                                    placeholder: t("size_ph"),
                                                                    onChange: (e)=>updateMaterial(i, "size", e.target.value)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 219,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                                    id: `size-list-${i}`,
                                                                    children: sizeOptions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: s
                                                                        }, s, false, {
                                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                            lineNumber: 220,
                                                                            columnNumber: 65
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 220,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 219,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: m.unit,
                                                                onChange: (e)=>updateMaterial(i, "unit", e.target.value),
                                                                children: UNITS.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: x
                                                                    }, x, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 222,
                                                                        columnNumber: 106
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 222,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 222,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                step: "any",
                                                                value: m.qty,
                                                                onChange: (e)=>updateMaterial(i, "qty", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 223,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 223,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                step: "any",
                                                                value: m.rate,
                                                                onChange: (e)=>updateMaterial(i, "rate", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 224,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 224,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "amount",
                                                            children: money(amount, project.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 225,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "delete",
                                                                "aria-label": "Remove",
                                                                onClick: ()=>removeMaterial(i),
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 225,
                                                                columnNumber: 75
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 225,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                    lineNumber: 214,
                                                    columnNumber: 18
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 208,
                                            columnNumber: 244
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "6",
                                                        className: "boq-total-label",
                                                        children: t("boq_subtotal")
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "amount",
                                                        children: money(materialSubtotal, project.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 104
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 174
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 226,
                                                columnNumber: 32
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 226,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 208,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 208,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 207,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "toggle-row top-toggle",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: project.useAdditionalCosts,
                                                onChange: (e)=>updateProject("useAdditionalCosts", e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 231,
                                                columnNumber: 50
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: t("toggle_additional_costs")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 231,
                                                columnNumber: 179
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 231,
                                        columnNumber: 11
                                    }, this),
                                    project.useAdditionalCosts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        style: {
                                            marginTop: 14
                                        },
                                        children: [
                                            (project.mode === "boq" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    t("extra_wastage"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.wastage,
                                                        onChange: (e)=>updateProject("wastage", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 233,
                                                        columnNumber: 88
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 233,
                                                columnNumber: 61
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    t("extra_other"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.other,
                                                        onChange: (e)=>updateProject("other", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 234,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 234,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    t("extra_tax"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.tax,
                                                        onChange: (e)=>updateProject("tax", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 235,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    t("extra_contingency"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.contingency,
                                                        onChange: (e)=>updateProject("contingency", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 236,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 236,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "full toggle-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: project.includeTransport,
                                                        onChange: (e)=>updateProject("includeTransport", e.target.checked)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 238,
                                                        columnNumber: 46
                                                    }, this),
                                                    " ",
                                                    t("toggle_transport")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 238,
                                                columnNumber: 13
                                            }, this),
                                            project.includeTransport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "full",
                                                children: [
                                                    t("extra_transport"),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.transport,
                                                        onChange: (e)=>updateProject("transport", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 239,
                                                        columnNumber: 86
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 239,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "full toggle-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: project.includeLabour,
                                                        onChange: (e)=>updateProject("includeLabour", e.target.checked)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 241,
                                                        columnNumber: 46
                                                    }, this),
                                                    " ",
                                                    t("toggle_labour")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 241,
                                                columnNumber: 13
                                            }, this),
                                            project.includeLabour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "full labour-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            t("labour_type"),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: project.labourType,
                                                                onChange: (e)=>updateProject("labourType", e.target.value),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "contract",
                                                                        children: t("labour_contract")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 243,
                                                                        columnNumber: 132
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "day",
                                                                        children: t("labour_dayside")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 243,
                                                                        columnNumber: 188
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 243,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 243,
                                                        columnNumber: 15
                                                    }, this),
                                                    project.labourType === "contract" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sub-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("contract_amount"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.contractAmount,
                                                                        onChange: (e)=>updateProject("contractAmount", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 245,
                                                                        columnNumber: 46
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 245,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("contract_days"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.contractDays,
                                                                        onChange: (e)=>updateProject("contractDays", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 246,
                                                                        columnNumber: 44
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 246,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 50
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sub-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("lead_count"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.leadCount,
                                                                        onChange: (e)=>updateProject("leadCount", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 248,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 248,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("helper_count"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.helperCount,
                                                                        onChange: (e)=>updateProject("helperCount", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 249,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 249,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("lead_rate"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.leadRate,
                                                                        onChange: (e)=>updateProject("leadRate", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 250,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 250,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("helper_rate"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.helperRate,
                                                                        onChange: (e)=>updateProject("helperRate", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 251,
                                                                        columnNumber: 42
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 251,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    t("work_days"),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        min: "0",
                                                                        value: project.workDays,
                                                                        onChange: (e)=>updateProject("workDays", e.target.value)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 252,
                                                                        columnNumber: 40
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 252,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 247,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 242,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 232,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 230,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card breakdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: t("bd_heading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 258,
                                        columnNumber: 41
                                    }, this),
                                    (project.mode === "area" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("pd_mode_area")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 259,
                                                columnNumber: 81
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(areaComponent, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 259,
                                                columnNumber: 113
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 259,
                                        columnNumber: 60
                                    }, this),
                                    (project.mode === "boq" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("boq_subtotal")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 260,
                                                columnNumber: 80
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(materialComponent, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 260,
                                                columnNumber: 112
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 260,
                                        columnNumber: 59
                                    }, this),
                                    wastageCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_wastage")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 261,
                                                columnNumber: 48
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(wastageCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 261,
                                                columnNumber: 78
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 261,
                                        columnNumber: 27
                                    }, this),
                                    labourCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_labour")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 262,
                                                columnNumber: 47
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(labourCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 262,
                                                columnNumber: 76
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 262,
                                        columnNumber: 26
                                    }, this),
                                    transportCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_transport")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 263,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(transportCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 263,
                                                columnNumber: 82
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 263,
                                        columnNumber: 29
                                    }, this),
                                    useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_other")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 264,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(otherCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 264,
                                                columnNumber: 71
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 264,
                                        columnNumber: 22
                                    }, this),
                                    useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_contingency")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 265,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(contingency, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 265,
                                                columnNumber: 77
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 265,
                                        columnNumber: 22
                                    }, this),
                                    useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_tax")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 266,
                                                columnNumber: 43
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(tax, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 266,
                                                columnNumber: 69
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 266,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row grand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t("bd_grand")
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 267,
                                                columnNumber: 38
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(grandTotal, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 267,
                                                columnNumber: 66
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 267,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 258,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 229,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card download-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            margin: "0 0 4px"
                                        },
                                        children: t("download_heading")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 272,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            margin: 0,
                                            fontSize: 13,
                                            color: "#718096"
                                        },
                                        children: "A4 · JPG / Excel / PDF"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 272,
                                        columnNumber: 73
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 272,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "download-buttons",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "jpg",
                                        disabled: !scriptsReady.html2canvas,
                                        onClick: downloadJPG,
                                        children: t("download_jpg")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 274,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "excel",
                                        disabled: !scriptsReady.xlsx,
                                        onClick: downloadExcel,
                                        children: t("download_excel")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 275,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pdf",
                                        disabled: !scriptsReady.html2canvas || !scriptsReady.jspdf,
                                        onClick: downloadPDF,
                                        children: t("download_pdf")
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 276,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 273,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 271,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.print(),
                                children: t("action_print")
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 280,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: saveEstimate,
                                children: saved ? t("action_saved") : t("action_save")
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 280,
                                columnNumber: 97
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 280,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 186,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: printRef,
                className: "print-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: [
                            "Build",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "#2864df"
                                },
                                children: "Naro"
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 285,
                                columnNumber: 16
                            }, this),
                            " — ",
                            t("calc_title")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 285,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ps-meta",
                        children: [
                            t("print_prepared_for"),
                            ": ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 287,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 287,
                                columnNumber: 57
                            }, this),
                            t("print_generated_on"),
                            ": ",
                            new Date().toLocaleDateString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 286,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_material")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_brand")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_spec")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 76
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_unit")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 99
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_qty")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 122
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_rate")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 144
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            children: t("th_amount")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 290,
                                            columnNumber: 167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 290,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 290,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: materials.filter((m)=>m.name).map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: m.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 66
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: m.brand || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 83
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: m.size || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 106
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: m.unit
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 128
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: m.qty
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 145
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: money(m.rate, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 161
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: money((Number(m.qty) || 0) * (Number(m.rate) || 0), project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 291,
                                                columnNumber: 202
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 291,
                                        columnNumber: 54
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 291,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 290,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: [
                                (project.mode === "area" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("pd_mode_area")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 293,
                                            columnNumber: 62
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(areaComponent, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 293,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 293,
                                    columnNumber: 58
                                }, this),
                                (project.mode === "boq" || project.mode === "both") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("boq_subtotal")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 294,
                                            columnNumber: 61
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(materialComponent, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 294,
                                            columnNumber: 89
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 294,
                                    columnNumber: 57
                                }, this),
                                wastageCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_wastage")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 295,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(wastageCost, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 295,
                                            columnNumber: 55
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, this),
                                labourCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_labour")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 296,
                                            columnNumber: 28
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(labourCost, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 296,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 296,
                                    columnNumber: 24
                                }, this),
                                transportCost > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_transport")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 297,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(transportCost, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 297,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 297,
                                    columnNumber: 27
                                }, this),
                                useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_other")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 298,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(otherCost, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 298,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 298,
                                    columnNumber: 20
                                }, this),
                                useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_contingency")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 299,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(contingency, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 299,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 299,
                                    columnNumber: 20
                                }, this),
                                useExtra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: t("bd_tax")
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 300,
                                            columnNumber: 24
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            children: money(tax, project.currency)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 300,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 300,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                            lineNumber: 292,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 292,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ps-total",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t("bd_grand")
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 302,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: money(grandTotal, project.currency)
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 302,
                                columnNumber: 61
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 302,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ps-note",
                        children: t("print_note")
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 303,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 284,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/construction-estimate-calculator/page.js",
        lineNumber: 177,
        columnNumber: 10
    }, this);
}
_s(Calculator, "/Nq6XJe1s+BBQ8PARUURlonFawk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$i18n$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"]
    ];
});
_c = Calculator;
var _c;
__turbopack_context__.k.register(_c, "Calculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1pplea6._.js.map