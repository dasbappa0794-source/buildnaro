(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/construction-estimate-calculator/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Calculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const INDIA_REGIONS = [
    "",
    "North",
    "South",
    "East",
    "West",
    "Central",
    "Northeast"
];
const REGION_BY_STATE = {
    "Andhra Pradesh": "South",
    "Arunachal Pradesh": "Northeast",
    "Assam": "Northeast",
    "Bihar": "East",
    "Chhattisgarh": "Central",
    "Goa": "West",
    "Gujarat": "West",
    "Haryana": "North",
    "Himachal Pradesh": "North",
    "Jharkhand": "East",
    "Karnataka": "South",
    "Kerala": "South",
    "Madhya Pradesh": "Central",
    "Maharashtra": "West",
    "Manipur": "Northeast",
    "Meghalaya": "Northeast",
    "Mizoram": "Northeast",
    "Nagaland": "Northeast",
    "Odisha": "East",
    "Punjab": "North",
    "Rajasthan": "North",
    "Sikkim": "Northeast",
    "Tamil Nadu": "South",
    "Telangana": "South",
    "Tripura": "Northeast",
    "Uttar Pradesh": "North",
    "Uttarakhand": "North",
    "West Bengal": "East",
    "Andaman and Nicobar Islands": "South",
    "Chandigarh": "North",
    "Dadra and Nagar Haveli and Daman and Diu": "West",
    "Delhi": "North",
    "Jammu and Kashmir": "North",
    "Ladakh": "North",
    "Lakshadweep": "South",
    "Puducherry": "South"
};
const RATE_MULTIPLIER = {
    North: 1.02,
    South: 1.01,
    East: 1,
    West: 1.04,
    Central: 0.98,
    Northeast: 1.08,
    "": 1
};
const BRAND_REGIONS = {
    "UltraTech": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "ACC": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Ambuja": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Shree Cement": [
        "North",
        "West",
        "Central"
    ],
    "Dalmia": [
        "East",
        "South",
        "North"
    ],
    "JK Cement": [
        "North",
        "West",
        "Central"
    ],
    "Birla White": [
        "North",
        "West",
        "South",
        "East"
    ],
    "Tata Tiscon": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "JSW Neosteel": [
        "North",
        "South",
        "East",
        "West",
        "Central"
    ],
    "SAIL": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Jindal Panther": [
        "North",
        "West",
        "Central",
        "East"
    ],
    "Kamdhenu": [
        "North",
        "West",
        "Central",
        "East"
    ],
    "Shyam Steel": [
        "East",
        "North"
    ],
    "SRMB": [
        "East",
        "North"
    ],
    "Local / Generic": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Manufactured Sand": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "ACC Block": [
        "North",
        "South",
        "East",
        "West"
    ],
    "Magicrete": [
        "North",
        "West",
        "South"
    ],
    "JK Lakshmi": [
        "North",
        "West",
        "East"
    ],
    "RMC / Generic": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Kajaria": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Somany": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Johnson": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Orient Bell": [
        "North",
        "West",
        "East"
    ],
    "Asian Paints": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Berger": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Nerolac": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Indigo Paints": [
        "North",
        "South",
        "West",
        "East"
    ],
    "Astral": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Finolex": [
        "North",
        "South",
        "West",
        "East",
        "Central"
    ],
    "Supreme": [
        "North",
        "South",
        "West",
        "East",
        "Central"
    ],
    "Prince": [
        "North",
        "South",
        "West",
        "East"
    ],
    "Polycab": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "Havells": [
        "North",
        "South",
        "East",
        "West",
        "Central",
        "Northeast"
    ],
    "KEI": [
        "North",
        "South",
        "West",
        "East",
        "Central"
    ],
    "RR Kabel": [
        "North",
        "South",
        "West",
        "East",
        "Central"
    ],
    "Finolex": [
        "North",
        "South",
        "West",
        "East",
        "Central",
        "Northeast"
    ]
};
const STATES = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];
// Starter catalogue: the data model is designed for many brands/variants/rates.
// Rates are editable estimates, not live quotations.
const materialDatabase = [
    {
        name: "Cement",
        category: "Structural",
        unitOptions: [
            "Bag",
            "Kg",
            "Ton"
        ],
        brands: {
            "UltraTech": {
                "OPC 43": 500,
                "OPC 53": 510,
                "PPC": 495,
                "PSC": 500
            },
            "ACC": {
                "OPC 43": 495,
                "OPC 53": 505,
                "PPC": 490,
                "PSC": 495
            },
            "Ambuja": {
                "OPC 43": 490,
                "OPC 53": 500,
                "PPC": 485,
                "PSC": 490
            },
            "Shree Cement": {
                "OPC 43": 485,
                "OPC 53": 495,
                "PPC": 480
            }
        }
    },
    {
        name: "Steel / Rod",
        category: "Structural",
        unitOptions: [
            "Kg",
            "Ton"
        ],
        brands: {
            "Tata Tiscon": {
                "Fe 500D": {
                    "6 mm": 72,
                    "8 mm": 70,
                    "10 mm": 69,
                    "12 mm": 68,
                    "16 mm": 68,
                    "20 mm": 68,
                    "25 mm": 68
                },
                "Fe 550D": {
                    "8 mm": 73,
                    "10 mm": 72,
                    "12 mm": 71,
                    "16 mm": 71,
                    "20 mm": 71,
                    "25 mm": 71
                }
            },
            "JSW Neosteel": {
                "Fe 500D": {
                    "8 mm": 69,
                    "10 mm": 68,
                    "12 mm": 67,
                    "16 mm": 67,
                    "20 mm": 67,
                    "25 mm": 67
                },
                "Fe 550D": {
                    "8 mm": 71,
                    "10 mm": 70,
                    "12 mm": 69,
                    "16 mm": 69,
                    "20 mm": 69,
                    "25 mm": 69
                }
            },
            "SAIL": {
                "Fe 500D": {
                    "8 mm": 68,
                    "10 mm": 67,
                    "12 mm": 66,
                    "16 mm": 66,
                    "20 mm": 66,
                    "25 mm": 66
                }
            }
        }
    },
    {
        name: "Sand",
        category: "Masonry",
        unitOptions: [
            "CFT",
            "m³",
            "Ton"
        ],
        brands: {
            "Local / Generic": {
                "River Sand": {
                    "Fine": 65,
                    "Medium": 70,
                    "Coarse": 72
                },
                "M-Sand": {
                    "Fine": 55,
                    "Medium": 60,
                    "Coarse": 63
                }
            },
            "Manufactured Sand": {
                "M-Sand": {
                    "Fine": 55,
                    "Medium": 60,
                    "Coarse": 63
                }
            }
        }
    },
    {
        name: "Stone Chips / Aggregate",
        category: "Structural",
        unitOptions: [
            "CFT",
            "m³",
            "Ton"
        ],
        brands: {
            "Local / Generic": {
                "Stone Chips": {
                    "1/2 inch": 68,
                    "5/8 inch": 70,
                    "3/4 inch": 72,
                    "20 mm": 72,
                    "40 mm": 68
                }
            }
        }
    },
    {
        name: "Bricks",
        category: "Masonry",
        unitOptions: [
            "Pcs",
            "1000 Pcs"
        ],
        brands: {
            "Local / Generic": {
                "Clay Brick": {
                    "Standard": 9,
                    "First Class": 10
                },
                "Fly Ash Brick": {
                    "Standard": 8,
                    "Heavy Duty": 10
                }
            },
            "ACC Block": {
                "AAC Block": {
                    "4 inch": 55,
                    "6 inch": 75,
                    "8 inch": 95
                }
            }
        }
    },
    {
        name: "Concrete",
        category: "Structural",
        unitOptions: [
            "m³",
            "CFT"
        ],
        brands: {
            "RMC / Generic": {
                "M20": {
                    "Standard": 6500
                },
                "M25": {
                    "Standard": 7000
                },
                "M30": {
                    "Standard": 7600
                }
            }
        }
    },
    {
        name: "Tiles",
        category: "Finishing",
        unitOptions: [
            "Sq ft",
            "Sq m",
            "Pcs"
        ],
        brands: {
            "Kajaria": {
                "Vitrified": {
                    "600x600 mm": 85,
                    "800x800 mm": 110
                }
            },
            "Somany": {
                "Vitrified": {
                    "600x600 mm": 82,
                    "800x800 mm": 105
                }
            },
            "Johnson": {
                "Vitrified": {
                    "600x600 mm": 80,
                    "800x800 mm": 100
                }
            }
        }
    },
    {
        name: "Paint",
        category: "Finishing",
        unitOptions: [
            "Litre",
            "Kg"
        ],
        brands: {
            "Asian Paints": {
                "Interior Emulsion": {
                    "Standard": 220
                },
                "Exterior Emulsion": {
                    "Standard": 260
                }
            },
            "Berger": {
                "Interior Emulsion": {
                    "Standard": 210
                },
                "Exterior Emulsion": {
                    "Standard": 250
                }
            },
            "Nerolac": {
                "Interior Emulsion": {
                    "Standard": 205
                },
                "Exterior Emulsion": {
                    "Standard": 245
                }
            }
        }
    },
    {
        name: "PVC Pipe",
        category: "Plumbing",
        unitOptions: [
            "Metre",
            "Feet",
            "Piece"
        ],
        brands: {
            "Astral": {
                "PVC Plumbing": {
                    "1/2 inch": 180,
                    "3/4 inch": 220,
                    "1 inch": 280
                }
            },
            "Finolex": {
                "PVC Plumbing": {
                    "1/2 inch": 170,
                    "3/4 inch": 210,
                    "1 inch": 270
                }
            }
        }
    },
    {
        name: "Electrical Wire",
        category: "Electrical",
        unitOptions: [
            "Metre",
            "Roll"
        ],
        brands: {
            "Polycab": {
                "FR Wire": {
                    "1.5 sq mm": 12,
                    "2.5 sq mm": 19,
                    "4 sq mm": 29,
                    "6 sq mm": 42
                }
            },
            "Havells": {
                "FR Wire": {
                    "1.5 sq mm": 13,
                    "2.5 sq mm": 20,
                    "4 sq mm": 30,
                    "6 sq mm": 43
                }
            },
            "Finolex": {
                "FR Wire": {
                    "1.5 sq mm": 12,
                    "2.5 sq mm": 19,
                    "4 sq mm": 28,
                    "6 sq mm": 41
                }
            }
        }
    }
];
// Additional commonly encountered brands. This is a curated starter catalogue, not a claim of every Indian brand.
const extraBrandData = {
    "Cement": {
        "Dalmia": {
            "OPC 43": 490,
            "OPC 53": 500,
            "PPC": 485,
            "PSC": 490
        },
        "JK Cement": {
            "OPC 43": 492,
            "OPC 53": 502,
            "PPC": 487,
            "PSC": 492
        },
        "Birla White": {
            "OPC 43": 500,
            "OPC 53": 510,
            "PPC": 495,
            "PSC": 500
        }
    },
    "Steel / Rod": {
        "Jindal Panther": {
            "Fe 500D": {
                "8 mm": 70,
                "10 mm": 69,
                "12 mm": 68,
                "16 mm": 68,
                "20 mm": 68,
                "25 mm": 68
            },
            "Fe 550D": {
                "8 mm": 72,
                "10 mm": 71,
                "12 mm": 70,
                "16 mm": 70,
                "20 mm": 70,
                "25 mm": 70
            }
        },
        "Kamdhenu": {
            "Fe 500D": {
                "8 mm": 68,
                "10 mm": 67,
                "12 mm": 66,
                "16 mm": 66,
                "20 mm": 66,
                "25 mm": 66
            }
        },
        "Shyam Steel": {
            "Fe 500D": {
                "8 mm": 67,
                "10 mm": 66,
                "12 mm": 65,
                "16 mm": 65,
                "20 mm": 65,
                "25 mm": 65
            }
        },
        "SRMB": {
            "Fe 500D": {
                "8 mm": 68,
                "10 mm": 67,
                "12 mm": 66,
                "16 mm": 66,
                "20 mm": 66,
                "25 mm": 66
            }
        }
    },
    "Bricks": {
        "Magicrete": {
            "AAC Block": {
                "4 inch": 55,
                "6 inch": 75,
                "8 inch": 95
            }
        },
        "JK Lakshmi": {
            "AAC Block": {
                "4 inch": 54,
                "6 inch": 74,
                "8 inch": 94
            }
        }
    },
    "Tiles": {
        "Orient Bell": {
            "Vitrified": {
                "600x600 mm": 80,
                "800x800 mm": 104
            }
        }
    },
    "Paint": {
        "Indigo Paints": {
            "Interior Emulsion": {
                "Standard": 200
            },
            "Exterior Emulsion": {
                "Standard": 240
            }
        }
    },
    "PVC Pipe": {
        "Supreme": {
            "PVC Plumbing": {
                "1/2 inch": 175,
                "3/4 inch": 215,
                "1 inch": 275
            }
        },
        "Prince": {
            "PVC Plumbing": {
                "1/2 inch": 172,
                "3/4 inch": 212,
                "1 inch": 272
            }
        }
    },
    "Electrical Wire": {
        "KEI": {
            "FR Wire": {
                "1.5 sq mm": 12.5,
                "2.5 sq mm": 19.5,
                "4 sq mm": 29.5,
                "6 sq mm": 42.5
            }
        },
        "RR Kabel": {
            "FR Wire": {
                "1.5 sq mm": 13,
                "2.5 sq mm": 20,
                "4 sq mm": 30,
                "6 sq mm": 43
            }
        }
    }
};
for (const item of materialDatabase){
    const additions = extraBrandData[item.name] || {};
    item.brands = {
        ...item.brands,
        ...additions
    };
}
const money = (value, currency)=>new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 2
    }).format(Number(value) || 0);
const firstKey = (obj)=>Object.keys(obj || {})[0] || "";
function variantOptions(item, brand, type) {
    const b = item?.brands?.[brand];
    if (!b) return [];
    const keys = Object.keys(b);
    if (!keys.length) return [];
    const first = b[keys[0]];
    if (typeof first === "number") return keys;
    return Object.keys(b[type] || {});
}
function brandAvailableInRegion(brand, region) {
    if (!brand || brand === "None" || !region) return true;
    return (BRAND_REGIONS[brand] || INDIA_REGIONS.filter(Boolean)).includes(region);
}
function getRate(item, brand, type, variant, region = "") {
    const b = item?.brands?.[brand];
    if (!b || brand === "None") return 0;
    const first = b[firstKey(b)];
    const base = typeof first === "number" ? Number(b[variant] || 0) : Number(b[type]?.[variant] || 0);
    return base * (RATE_MULTIPLIER[region] || 1);
}
function brandsFor(item, region) {
    if (!item) return [
        "None"
    ];
    return Object.keys(item.brands).filter((b)=>brandAvailableInRegion(b, region));
}
function variantLabel(item) {
    if (!item) return "Size / Spec";
    return item.name === "Steel / Rod" || item.name === "Stone Chips / Aggregate" || item.name === "Bricks" ? "Size / Spec" : "Size / Spec";
}
function Calculator() {
    _s();
    const [project, setProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "My Construction Project",
        country: "India",
        region: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
        address: "",
        currency: "INR",
        area: 1000,
        areaUnit: "sq ft",
        rate: 1800,
        mode: "area",
        labour: 10,
        transport: 0,
        other: 3,
        tax: 0,
        contingency: 2,
        wastage: 0,
        language: "English"
    });
    const [materials, setMaterials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: "Cement",
            brand: "UltraTech",
            type: "OPC 43",
            variant: "None",
            qty: 0,
            unit: "Bag",
            rate: 500,
            rateSource: "Suggested"
        },
        {
            name: "Sand",
            brand: "Local / Generic",
            type: "River Sand",
            variant: "None",
            qty: 0,
            unit: "CFT",
            rate: 65,
            rateSource: "Suggested"
        },
        {
            name: "Bricks",
            brand: "Local / Generic",
            type: "Clay Brick",
            variant: "None",
            qty: 0,
            unit: "Pcs",
            rate: 9,
            rateSource: "Suggested"
        },
        {
            name: "Steel / Rod",
            brand: "Tata Tiscon",
            type: "Fe 500D",
            variant: "12 mm",
            qty: 0,
            unit: "Kg",
            rate: 68,
            rateSource: "Suggested"
        }
    ]);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [materialSearch, setMaterialSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookup, setLookup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookupStatus, setLookupStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const materialSubtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Calculator.useMemo[materialSubtotal]": ()=>materials.reduce({
                "Calculator.useMemo[materialSubtotal]": (s, m)=>s + (Number(m.qty) || 0) * (Number(m.rate) || 0)
            }["Calculator.useMemo[materialSubtotal]"], 0)
    }["Calculator.useMemo[materialSubtotal]"], [
        materials
    ]);
    const areaBase = (Number(project.area) || 0) * (Number(project.rate) || 0);
    const baseCost = project.mode === "area" ? areaBase : materialSubtotal;
    const wastage = project.mode === "boq" ? materialSubtotal * (Number(project.wastage || 0) / 100) : 0;
    const costBeforeAddons = baseCost + wastage;
    const labourCost = costBeforeAddons * (Number(project.labour || 0) / 100);
    const transportCost = Number(project.transport) || 0;
    const otherCost = costBeforeAddons * (Number(project.other || 0) / 100);
    const contingency = costBeforeAddons * (Number(project.contingency || 0) / 100);
    const taxable = costBeforeAddons + labourCost + transportCost + otherCost + contingency;
    const tax = taxable * (Number(project.tax || 0) / 100);
    const grandTotal = taxable + tax;
    const updateProject = (key, value)=>setProject((p)=>({
                ...p,
                [key]: value
            }));
    const setLocationFields = (fields)=>{
        setProject((p)=>{
            const next = {
                ...p,
                ...fields
            };
            const region = fields.region || REGION_BY_STATE[next.state] || next.region || "";
            next.region = region;
            return next;
        });
        if (fields.region || fields.state) applyLocationRates({
            ...project,
            ...fields,
            region: fields.region || REGION_BY_STATE[fields.state] || project.region
        });
    };
    const applyLocationRates = (nextLocation = project)=>setMaterials((list)=>list.map((m)=>{
                const item = materialDatabase.find((x)=>x.name === m.name);
                const available = brandsFor(item, nextLocation.region);
                const brand = available.includes(m.brand) ? m.brand : available[0] || "None";
                const typeKeys = item && brand !== "None" ? Object.keys(item.brands[brand] || {}) : [];
                const type = typeKeys.includes(m.type) ? m.type : typeKeys[0] || "None";
                const variants = item && brand !== "None" ? variantOptions(item, brand, type) : [];
                const variant = variants.includes(m.variant) ? m.variant : variants[0] || "None";
                return m.rateSource !== "Suggested" ? {
                    ...m,
                    brand,
                    type,
                    variant
                } : {
                    ...m,
                    brand,
                    type,
                    variant,
                    rate: getRate(item, brand, type, variant, nextLocation.region) || m.rate
                };
            }));
    const updateMaterial = (i, key, value)=>setMaterials((list)=>list.map((m, idx)=>idx === i ? {
                    ...m,
                    [key]: value
                } : m));
    const selectMaterial = (i, name)=>{
        const item = materialDatabase.find((x)=>x.name === name);
        if (!item) return;
        const available = brandsFor(item, project.region);
        const brand = available[0] || "None";
        const type = brand !== "None" ? firstKey(item.brands[brand]) : "None";
        const variants = variantOptions(item, brand, type);
        const variant = variants[0] || "None";
        const rate = getRate(item, brand, type, variant, project.region);
        setMaterials((list)=>list.map((m, idx)=>idx === i ? {
                    ...m,
                    name,
                    brand,
                    type,
                    variant,
                    unit: item.unitOptions[0],
                    rate,
                    rateSource: "Suggested"
                } : m));
    };
    const changeBrand = (i, brand)=>setMaterials((list)=>list.map((m, idx)=>{
                if (idx !== i) return m;
                const item = materialDatabase.find((x)=>x.name === m.name);
                const type = brand !== "None" ? firstKey(item?.brands?.[brand]) : "None";
                const variants = brand !== "None" ? variantOptions(item, brand, type) : [];
                const variant = variants[0] || "None";
                return {
                    ...m,
                    brand,
                    type,
                    variant,
                    unit: item?.unitOptions?.[0] || "Unit",
                    rate: getRate(item, brand, type, variant, project.region),
                    rateSource: "Suggested"
                };
            }));
    const changeType = (i, type)=>setMaterials((list)=>list.map((m, idx)=>{
                if (idx !== i) return m;
                const item = materialDatabase.find((x)=>x.name === m.name);
                const variants = variantOptions(item, m.brand, type);
                const variant = variants[0] || "None";
                return {
                    ...m,
                    type,
                    variant,
                    rate: getRate(item, m.brand, type, variant, project.region),
                    rateSource: "Suggested"
                };
            }));
    const changeVariant = (i, variant)=>setMaterials((list)=>list.map((m, idx)=>{
                if (idx !== i) return m;
                const item = materialDatabase.find((x)=>x.name === m.name);
                return {
                    ...m,
                    variant,
                    rate: getRate(item, m.brand, m.type, variant, project.region),
                    rateSource: "Suggested"
                };
            }));
    const lookupPincode = async ()=>{
        const pin = String(lookup || project.pincode).trim();
        if (!/^\d{6}$/.test(pin)) {
            setLookupStatus("Enter a valid 6-digit Indian PIN code.");
            return;
        }
        setLookupStatus("Looking up PIN code…");
        try {
            const r = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
            const data = await r.json();
            const po = data?.[0]?.PostOffice?.[0];
            if (!po) throw new Error("not found");
            const next = {
                ...project,
                pincode: pin,
                country: "India",
                state: po.State || "",
                district: po.District || "",
                city: po.Block || po.Division || po.Name || "",
                region: REGION_BY_STATE[po.State] || project.region
            };
            setProject(next);
            setLookupStatus(`Found: ${next.city}, ${next.district}, ${next.state}`);
            applyLocationRates(next);
        } catch  {
            setLookupStatus("PIN code not found. You can enter the address manually.");
        }
    };
    const lookupAddress = async ()=>{
        const q = project.address.trim();
        if (!q) {
            setLookupStatus("Enter an address first.");
            return;
        }
        setLookupStatus("Finding location from address…");
        try {
            const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&countrycodes=in&limit=1&q=${encodeURIComponent(q)}`);
            const data = await r.json();
            const a = data?.[0]?.address;
            if (!a) throw new Error("not found");
            const next = {
                ...project,
                country: "India",
                state: a.state || project.state,
                district: a.state_district || a.county || project.district,
                city: a.city || a.town || a.municipality || a.village || project.city,
                pincode: a.postcode || project.pincode,
                region: REGION_BY_STATE[a.state || ""] || project.region
            };
            setProject(next);
            setLookupStatus(`Location detected: ${next.city || ""}, ${next.district || ""}, ${next.state || ""}`);
            applyLocationRates(next);
        } catch  {
            setLookupStatus("Address could not be located automatically. Please select location manually.");
        }
    };
    const addMaterial = ()=>setMaterials((l)=>[
                ...l,
                {
                    name: "",
                    brand: "None",
                    type: "None",
                    variant: "None",
                    qty: 0,
                    unit: "Unit",
                    rate: 0,
                    rateSource: "Manual"
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
    const filtered = materialDatabase.filter((db)=>!materialSearch || `${db.name} ${db.category}`.toLowerCase().includes(materialSearch.toLowerCase()));
    const languages = [
        "English",
        "हिन्दी",
        "বাংলা",
        "मराठी",
        "தமிழ்",
        "తెలుగు",
        "ગુજરાતી",
        "ಕನ್ನಡ",
        "മലയാളം",
        "ਪੰਜਾਬੀ",
        "ଓଡ଼ିଆ",
        "অসমীয়া",
        "اردو"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
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
                                lineNumber: 211,
                                columnNumber: 67
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 211,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 211,
                        columnNumber: 88
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 211,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "eyebrow",
                        children: "BUILDNARO CONSTRUCTION TOOLS"
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 212,
                        columnNumber: 31
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Construction Estimate Calculator"
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 212,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Create a clear construction cost estimate with location-aware materials, brands, variants, labour, transport, tax and contingency."
                    }, void 0, false, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 212,
                        columnNumber: 131
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 212,
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
                                        children: "Project Details"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 215,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Project Name",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: project.name,
                                                        onChange: (e)=>updateProject("name", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 216,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 216,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Language",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.language,
                                                        onChange: (e)=>updateProject("language", e.target.value),
                                                        children: languages.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: x
                                                            }, x, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 217,
                                                                columnNumber: 132
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 217,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "field-note",
                                                        children: "Language catalogue is ready for full translation mapping."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 217,
                                                        columnNumber: 171
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 217,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Country",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.country,
                                                        onChange: (e)=>updateProject("country", e.target.value),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "India"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 218,
                                                            columnNumber: 111
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 218,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 218,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Region",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.region,
                                                        onChange: (e)=>{
                                                            setLocationFields({
                                                                region: e.target.value
                                                            });
                                                        },
                                                        children: INDIA_REGIONS.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: x,
                                                                children: x || "Select Region"
                                                            }, x, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 219,
                                                                columnNumber: 136
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 219,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 219,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "State",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.state,
                                                        onChange: (e)=>setLocationFields({
                                                                state: e.target.value,
                                                                region: REGION_BY_STATE[e.target.value] || ""
                                                            }),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select State"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 220,
                                                                columnNumber: 152
                                                            }, this),
                                                            STATES.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    children: x
                                                                }, x, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 220,
                                                                    columnNumber: 205
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 220,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "District",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: project.district,
                                                        onChange: (e)=>updateProject("district", e.target.value),
                                                        placeholder: "District"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 221,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 221,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "City / Taluka",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: project.city,
                                                        onChange: (e)=>updateProject("city", e.target.value),
                                                        placeholder: "City or Taluka"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 222,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 222,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "PIN Code",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: project.pincode,
                                                        maxLength: 6,
                                                        inputMode: "numeric",
                                                        onChange: (e)=>{
                                                            updateProject("pincode", e.target.value.replace(/\D/g, "").slice(0, 6));
                                                            setLookup(e.target.value.replace(/\D/g, "").slice(0, 6));
                                                        },
                                                        placeholder: "6-digit PIN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "secondary-action",
                                                        onClick: lookupPincode,
                                                        children: "Find by PIN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 223,
                                                        columnNumber: 258
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 223,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "full",
                                                children: [
                                                    "Manual Address",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        rows: "2",
                                                        value: project.address,
                                                        onChange: (e)=>updateProject("address", e.target.value),
                                                        placeholder: "Type full address; State, District, City and PIN can be detected automatically."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 224,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "secondary-action",
                                                        onClick: lookupAddress,
                                                        children: "Detect Location from Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 224,
                                                        columnNumber: 241
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 224,
                                                columnNumber: 11
                                            }, this),
                                            lookupStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "full field-note",
                                                children: lookupStatus
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 225,
                                                columnNumber: 26
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Currency",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.currency,
                                                        onChange: (e)=>updateProject("currency", e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "INR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 114
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "USD"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 134
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "BDT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 154
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "AED"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 174
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "GBP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 226,
                                                                columnNumber: 194
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 226,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 226,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Calculation Mode",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: project.mode,
                                                        onChange: (e)=>updateProject("mode", e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "area",
                                                                children: "Area × Rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 227,
                                                                columnNumber: 114
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "boq",
                                                                children: "Detailed BOQ"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 227,
                                                                columnNumber: 155
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 227,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 227,
                                                columnNumber: 11
                                            }, this),
                                            project.mode === "area" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Built-up Area",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                value: project.area,
                                                                onChange: (e)=>updateProject("area", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 228,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Area Unit",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: project.areaUnit,
                                                                onChange: (e)=>updateProject("areaUnit", e.target.value),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq ft"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 228,
                                                                        columnNumber: 271
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq m"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 228,
                                                                        columnNumber: 293
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: "sq yd"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 228,
                                                                        columnNumber: 314
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 228,
                                                                columnNumber: 183
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 167
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        children: [
                                                            "Construction Rate / Area",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                min: "0",
                                                                value: project.rate,
                                                                onChange: (e)=>updateProject("rate", e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 228,
                                                                columnNumber: 384
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 228,
                                                        columnNumber: 353
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 228,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 215,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 215,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card summary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Estimate Summary"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "summary-main",
                                        children: money(grandTotal, project.currency)
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Estimated Grand Total"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 136
                                    }, this),
                                    project.mode === "area" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mini",
                                                children: [
                                                    "Rate: ",
                                                    money(project.rate, project.currency),
                                                    " / ",
                                                    project.areaUnit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 230,
                                                columnNumber: 190
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mini",
                                                children: [
                                                    "Area: ",
                                                    Number(project.area || 0).toLocaleString(),
                                                    " ",
                                                    project.areaUnit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 230,
                                                columnNumber: 283
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 188
                                    }, this),
                                    project.mode === "boq" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mini",
                                        children: [
                                            "Materials: ",
                                            money(materialSubtotal, project.currency)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 230,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 230,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 214,
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
                                                children: "Materials / BOQ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 233,
                                                columnNumber: 64
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Choose material → brand → type → size/specification. Rates are editable suggestions filtered by region; choose None when a variant does not apply."
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 233,
                                                columnNumber: 88
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 233,
                                        columnNumber: 59
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addMaterial,
                                        children: "+ Add Material"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 233,
                                        columnNumber: 247
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 233,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "material-tools",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "material-search",
                                        value: materialSearch,
                                        onChange: (e)=>setMaterialSearch(e.target.value),
                                        placeholder: "Search materials by name or category..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 234,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            materialDatabase.length,
                                            " catalogue materials"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 234,
                                        columnNumber: 202
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 234,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Material"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 55
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Brand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 86
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Size / Spec"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 99
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Qty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 119
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Unit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 131
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 144
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 157
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 235,
                                                        columnNumber: 172
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 235,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 235,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: materials.map((m, i)=>{
                                                const item = materialDatabase.find((x)=>x.name === m.name);
                                                const brands = item ? brandsFor(item, project.region) : [
                                                    "None"
                                                ];
                                                const types = item && m.brand !== "None" ? Object.keys(item.brands[m.brand] || {}) : [
                                                    "None"
                                                ];
                                                const variants = item && m.brand !== "None" ? variantOptions(item, m.brand, m.type) : [
                                                    "None"
                                                ];
                                                const amount = (Number(m.qty) || 0) * (Number(m.rate) || 0);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: item ? m.name : "",
                                                                onChange: (e)=>e.target.value ? selectMaterial(i, e.target.value) : updateMaterial(i, "name", ""),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: "None / Custom"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 237,
                                                                        columnNumber: 136
                                                                    }, this),
                                                                    filtered.map((db)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            children: db.name
                                                                        }, db.name, false, {
                                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                            lineNumber: 237,
                                                                            columnNumber: 193
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 237,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 237,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: m.brand || "None",
                                                                onChange: (e)=>changeBrand(i, e.target.value),
                                                                disabled: !item,
                                                                children: [
                                                                    "None",
                                                                    ...brands.filter((x)=>x !== "None")
                                                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: x
                                                                    }, x, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 238,
                                                                        columnNumber: 157
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 238,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 238,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: m.type || "None",
                                                                onChange: (e)=>changeType(i, e.target.value),
                                                                disabled: !item,
                                                                children: [
                                                                    "None",
                                                                    ...types.filter((x)=>x !== "None")
                                                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: x
                                                                    }, x, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 239,
                                                                        columnNumber: 154
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 239,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 239,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: m.variant || "None",
                                                                onChange: (e)=>changeVariant(i, e.target.value),
                                                                disabled: !item,
                                                                children: [
                                                                    "None",
                                                                    ...variants.filter((x)=>x !== "None")
                                                                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: x
                                                                    }, x, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 240,
                                                                        columnNumber: 163
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 240,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 240,
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
                                                                lineNumber: 241,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 241,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                value: m.unit,
                                                                onChange: (e)=>updateMaterial(i, "unit", e.target.value),
                                                                children: (item ? item.unitOptions : [
                                                                    "Unit",
                                                                    "Kg",
                                                                    "CFT",
                                                                    "Pcs",
                                                                    "Bag",
                                                                    "Ton"
                                                                ]).map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        children: x
                                                                    }, x, false, {
                                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                        lineNumber: 242,
                                                                        columnNumber: 162
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 242,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 242,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    step: "any",
                                                                    value: m.rate,
                                                                    onChange: (e)=>{
                                                                        updateMaterial(i, "rate", e.target.value);
                                                                        updateMaterial(i, "rateSource", "Manual");
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 243,
                                                                    columnNumber: 15
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    className: "rate-source",
                                                                    children: m.rateSource || "Manual"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                    lineNumber: 243,
                                                                    columnNumber: 167
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 243,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "amount",
                                                            children: money(amount, project.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 244,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "delete",
                                                                "aria-label": `Remove ${m.name || "material"}`,
                                                                onClick: ()=>removeMaterial(i),
                                                                children: "×"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                                lineNumber: 244,
                                                                columnNumber: 75
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                            lineNumber: 244,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                    lineNumber: 236,
                                                    columnNumber: 367
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 235,
                                            columnNumber: 194
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: "7",
                                                        className: "boq-total-label",
                                                        children: "Material Subtotal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 36
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "amount",
                                                        children: money(materialSubtotal, project.currency)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 102
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {}, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 172
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 245,
                                                columnNumber: 32
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/construction-estimate-calculator/page.js",
                                            lineNumber: 245,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/construction-estimate-calculator/page.js",
                                    lineNumber: 235,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 235,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 233,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Additional Costs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 248,
                                        columnNumber: 51
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-grid",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Material Wastage %",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.wastage,
                                                        onChange: (e)=>updateProject("wastage", e.target.value),
                                                        disabled: project.mode !== "boq"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 128
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Labour %",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.labour,
                                                        onChange: (e)=>updateProject("labour", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 302
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 287
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Transport Cost",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.transport,
                                                        onChange: (e)=>updateProject("transport", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 448
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 427
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Other Costs %",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.other,
                                                        onChange: (e)=>updateProject("other", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 599
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 579
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Tax / GST %",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.tax,
                                                        onChange: (e)=>updateProject("tax", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 740
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 722
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Contingency %",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        step: "any",
                                                        value: project.contingency,
                                                        onChange: (e)=>updateProject("contingency", e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                        lineNumber: 248,
                                                        columnNumber: 879
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 248,
                                                columnNumber: 859
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 248,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 248,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card breakdown",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Cost Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 39
                                    }, this),
                                    project.mode === "boq" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Material Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 106
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(materialSubtotal, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 136
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 85
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Base Construction"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 213
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(baseCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 243
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 192
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Material Wastage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 311
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(wastage, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 340
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 290
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Labour"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 407
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(labourCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 426
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Transport"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 496
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(transportCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 518
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 475
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Other Costs"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 591
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(otherCost, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 615
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 570
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Contingency"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 684
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(contingency, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 708
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 663
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Tax / GST"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 779
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(tax, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 801
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 758
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "row grand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Grand Total"
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 870
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: money(grandTotal, project.currency)
                                            }, void 0, false, {
                                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                                lineNumber: 249,
                                                columnNumber: 894
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                                        lineNumber: 249,
                                        columnNumber: 843
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 249,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 248,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.print(),
                                children: "🖨 Print Estimate"
                            }, void 0, false, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 250,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: saveEstimate,
                                children: [
                                    "💾 ",
                                    saved ? "Saved" : "Save Estimate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/construction-estimate-calculator/page.js",
                                lineNumber: 250,
                                columnNumber: 95
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/construction-estimate-calculator/page.js",
                        lineNumber: 250,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/construction-estimate-calculator/page.js",
                lineNumber: 213,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/construction-estimate-calculator/page.js",
        lineNumber: 210,
        columnNumber: 10
    }, this);
}
_s(Calculator, "aGGMEGGabsx0cE7uQF+0pCRkqJI=");
_c = Calculator;
var _c;
__turbopack_context__.k.register(_c, "Calculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_construction-estimate-calculator_page_1ohp24x.js.map