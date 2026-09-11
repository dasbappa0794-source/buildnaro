'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import Script from "next/script";
import { useLanguage } from "./i18n/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Common construction & interior materials — suggestions only; any name can be typed.
const MATERIAL_SUGGESTIONS = [
  "Cement","TMT Steel Bars","Sand","Stone Aggregate / Chips","Bricks","AAC Blocks","Ready Mix Concrete",
  "Vitrified Tiles","Ceramic Tiles","Marble","Granite","Plywood","MDF Board","Laminate Sheet","Veneer",
  "Interior Paint","Exterior Paint","Primer","Wall Putty","PVC Pipe","CPVC Pipe","Electrical Wire",
  "MCB / Switchgear","Modular Switches","Wood / Timber","Flush Door","Door Frame","UPVC Window","Aluminium Window",
  "Glass","Door & Window Hardware","Waterproofing Chemical","Bitumen / Tar","Gypsum Board","POP (Plaster of Paris)",
  "Tile Adhesive","Tile Grout","False Ceiling Grid","Modular Kitchen","Wardrobe","Sanitaryware (WC/Basin)",
  "CP Fittings (Taps/Mixers)","Water Storage Tank","Roofing Sheet","MS Fencing","Interlocking Pavers",
  "Curtains","Wallpaper","Light Fixtures","Split AC","Furniture",
  "Binding Wire (GI Wire)","Nails (Perek)","Shuttering Pins",
];

// Material name -> default unit suggestion (auto-fills, still user-editable)
const MATERIAL_UNIT_MAP = {
  "Cement":"Bag","TMT Steel Bars":"Kg","Sand":"CFT","Stone Aggregate / Chips":"CFT","Bricks":"Nos","AAC Blocks":"Nos",
  "Ready Mix Concrete":"Cubic Meter (m³)","Vitrified Tiles":"Sq ft","Ceramic Tiles":"Sq ft","Marble":"Sq ft","Granite":"Sq ft",
  "Plywood":"Sheet","MDF Board":"Sheet","Laminate Sheet":"Sheet","Veneer":"Sheet","Interior Paint":"Litre","Exterior Paint":"Litre",
  "Primer":"Litre","Wall Putty":"Kg","PVC Pipe":"Running ft","CPVC Pipe":"Running ft","Electrical Wire":"Roll",
  "MCB / Switchgear":"Nos","Modular Switches":"Nos","Wood / Timber":"CFT","Flush Door":"Nos","Door Frame":"Nos",
  "UPVC Window":"Sq ft","Aluminium Window":"Sq ft","Glass":"Sq ft","Door & Window Hardware":"Set",
  "Waterproofing Chemical":"Litre","Bitumen / Tar":"Kg","Gypsum Board":"Sheet","POP (Plaster of Paris)":"Bag",
  "Tile Adhesive":"Bag","Tile Grout":"Kg","False Ceiling Grid":"Sq ft","Modular Kitchen":"Running ft","Wardrobe":"Sq ft",
  "Sanitaryware (WC/Basin)":"Set","CP Fittings (Taps/Mixers)":"Set","Water Storage Tank":"Nos","Roofing Sheet":"Sq ft",
  "MS Fencing":"Running ft","Interlocking Pavers":"Sq ft","Curtains":"Nos","Wallpaper":"Roll","Light Fixtures":"Nos",
  "Split AC":"Nos","Furniture":"Nos","Binding Wire (GI Wire)":"Kg","Nails (Perek)":"Kg","Shuttering Pins":"Nos",
};

// Material name -> common brand suggestions (datalist only; typing a custom brand is always allowed)
const MATERIAL_BRAND_MAP = {
  "Cement":["UltraTech","ACC","Ambuja","Shree Cement","Ramco","Dalmia","JK Cement"],
  "TMT Steel Bars":["TATA Tiscon","JSW Neosteel","SAIL","Vizag Steel","Jindal Panther"],
  "Vitrified Tiles":["Kajaria","Somany","Nitco","Orientbell","Johnson"],
  "Ceramic Tiles":["Kajaria","Somany","Nitco","Orientbell","Johnson"],
  "Plywood":["Century Ply","Greenply","Kitply","Archidply"],
  "Interior Paint":["Asian Paints","Berger","Nerolac","Dulux","Indigo"],
  "Exterior Paint":["Asian Paints","Berger","Nerolac","Dulux"],
  "PVC Pipe":["Supreme","Finolex","Astral","Prince"],
  "CPVC Pipe":["Supreme","Finolex","Astral","Ashirvad"],
  "Electrical Wire":["Havells","Polycab","Finolex","KEI"],
  "MCB / Switchgear":["Havells","Legrand","Schneider","ABB"],
  "Modular Switches":["Anchor","Legrand","Havells","GM"],
  "Sanitaryware (WC/Basin)":["Cera","Hindware","Jaquar","Parryware"],
  "CP Fittings (Taps/Mixers)":["Jaquar","Cera","Kohler","Hindware"],
  "Split AC":["LG","Voltas","Daikin","Samsung","Blue Star"],
  "Water Storage Tank":["Sintex","Supreme","Ashirvad"],
};
const GENERIC_BRANDS = ["Local / Unbranded"];

const isRodLike = (name) => /rod|steel|tmt|bar/i.test(name || "");
const isStoneChipLike = (name) => /stone|aggregate|chips|grit|gitti/i.test(name || "");
const ROD_SIZES = ["6 mm","8 mm","10 mm","12 mm","16 mm","20 mm","25 mm","32 mm"];
const STONE_CHIP_SIZES = ["3/8\" (10 mm)","1/2\" (12 mm)","5/8\" (16 mm)","3/4\" (20 mm)","1\" (25 mm)","1.5\" (40 mm)"];

const UNITS = [
  "Bag","Kg","Ton","Quintal","Litre","Gallon","CFT","Cubic Meter (m³)","Sq ft","Sq m","Sq yd",
  "Running ft","Running meter","Nos","Piece","Set","Roll","Sheet","Box","Bundle","Meter","Point",
  "Dozen","Pair","Trip","Load","Hour","Day","Inch","mm","Unit"
];

// Material name -> the exact units relevant to it (a manual "Other" option is always available too)
const MATERIAL_UNIT_OPTIONS = {
  "Cement":["Bag","Kg","Ton"],
  "TMT Steel Bars":["Kg","Ton","Piece"],
  "Sand":["CFT","Cubic Meter (m³)","Ton","Trip","Load"],
  "Stone Aggregate / Chips":["CFT","Cubic Meter (m³)","Ton","Trip","Load"],
  "Bricks":["Nos","Piece","Box"],
  "AAC Blocks":["Nos","Piece","CFT"],
  "Ready Mix Concrete":["Cubic Meter (m³)","CFT"],
  "Vitrified Tiles":["Sq ft","Sq m","Box"],
  "Ceramic Tiles":["Sq ft","Sq m","Box"],
  "Marble":["Sq ft","Sq m"],
  "Granite":["Sq ft","Sq m"],
  "Plywood":["Sheet","Sq ft"],
  "MDF Board":["Sheet","Sq ft"],
  "Laminate Sheet":["Sheet","Sq ft"],
  "Veneer":["Sheet","Sq ft"],
  "Interior Paint":["Litre","Gallon"],
  "Exterior Paint":["Litre","Gallon"],
  "Primer":["Litre","Gallon"],
  "Wall Putty":["Kg","Bag"],
  "PVC Pipe":["Running ft","Running meter","Piece"],
  "CPVC Pipe":["Running ft","Running meter","Piece"],
  "Electrical Wire":["Roll","Running ft","Meter"],
  "MCB / Switchgear":["Nos","Piece","Set"],
  "Modular Switches":["Nos","Piece","Set"],
  "Wood / Timber":["CFT","Running ft"],
  "Flush Door":["Nos","Piece","Set"],
  "Door Frame":["Nos","Piece","Set"],
  "UPVC Window":["Sq ft","Nos","Piece"],
  "Aluminium Window":["Sq ft","Nos","Piece"],
  "Glass":["Sq ft","Sq m"],
  "Door & Window Hardware":["Set","Nos","Piece"],
  "Waterproofing Chemical":["Litre","Kg"],
  "Bitumen / Tar":["Kg","Litre"],
  "Gypsum Board":["Sheet","Sq ft"],
  "POP (Plaster of Paris)":["Bag","Kg"],
  "Tile Adhesive":["Bag","Kg"],
  "Tile Grout":["Kg","Bag"],
  "False Ceiling Grid":["Sq ft","Running ft"],
  "Modular Kitchen":["Running ft","Sq ft"],
  "Wardrobe":["Sq ft","Running ft"],
  "Sanitaryware (WC/Basin)":["Set","Nos","Piece"],
  "CP Fittings (Taps/Mixers)":["Set","Nos","Piece"],
  "Water Storage Tank":["Nos","Piece","Litre"],
  "Roofing Sheet":["Sq ft","Nos","Piece"],
  "MS Fencing":["Running ft","Kg"],
  "Interlocking Pavers":["Sq ft","Nos","Piece"],
  "Curtains":["Nos","Piece","Set"],
  "Wallpaper":["Roll","Sq ft"],
  "Light Fixtures":["Nos","Piece","Set"],
  "Split AC":["Nos","Piece","Set"],
  "Furniture":["Nos","Piece","Set"],
  "Binding Wire (GI Wire)":["Kg","Roll"],
  "Nails (Perek)":["Kg","Box"],
  "Shuttering Pins":["Nos","Piece","Kg"],
};
const getUnitOptions = (materialName) => MATERIAL_UNIT_OPTIONS[materialName] || UNITS;

// Material name -> the exact size/spec options relevant to it (a manual "Other" option is always available too)
const MATERIAL_SIZE_OPTIONS = {
  "TMT Steel Bars": ROD_SIZES,
  "Stone Aggregate / Chips": STONE_CHIP_SIZES,
  "Sand": ["River Sand","M-Sand (Manufactured Sand)","P-Sand (Plastering Sand)","Coarse Sand","Fine Sand","Concrete Sand"],
  "Bricks": ["9x4x3 in (Standard)","9x4x4 in","8x4x4 in (Modular)","Wire Cut Brick","Fly Ash Brick"],
  "AAC Blocks": ["600x200x100 mm","600x200x150 mm","600x200x200 mm","600x200x225 mm"],
  "Vitrified Tiles": ["300x300 mm","600x600 mm (2x2 ft)","600x1200 mm","800x800 mm","1000x1000 mm"],
  "Ceramic Tiles": ["200x300 mm","300x300 mm","300x600 mm","600x600 mm"],
  "Marble": ["16-18 mm (Standard)","20 mm"],
  "Granite": ["16-18 mm (Standard)","20 mm"],
  "Plywood": ["6 mm","9 mm","12 mm","16 mm","18 mm","19 mm"],
  "MDF Board": ["6 mm","9 mm","12 mm","18 mm"],
  "Laminate Sheet": ["0.8 mm","1 mm","1.5 mm"],
  "Glass": ["4 mm","5 mm","6 mm","8 mm","10 mm","12 mm"],
  "PVC Pipe": ["1/2\" (15 mm)","3/4\" (20 mm)","1\" (25 mm)","1.25\" (32 mm)","1.5\" (40 mm)","2\" (50 mm)","4\" (110 mm)"],
  "CPVC Pipe": ["1/2\" (15 mm)","3/4\" (20 mm)","1\" (25 mm)","1.25\" (32 mm)","1.5\" (40 mm)"],
  "Electrical Wire": ["1.0 sq mm","1.5 sq mm","2.5 sq mm","4 sq mm","6 sq mm","10 sq mm"],
  "Gypsum Board": ["9.5 mm","12.5 mm","15 mm"],
  "Wood / Timber": ["1x1 in","2x2 in","2x3 in","2x4 in","4x4 in"],
  "Modular Switches": ["6A","16A","20A"],
  "MCB / Switchgear": ["6A","16A","20A","32A","40A","63A"],
  "Roofing Sheet": ["0.4 mm","0.5 mm","0.6 mm"],
};
const getSizeOptions = (materialName) => {
  if (MATERIAL_SIZE_OPTIONS[materialName]) return MATERIAL_SIZE_OPTIONS[materialName];
  if (isRodLike(materialName)) return ROD_SIZES;
  if (isStoneChipLike(materialName)) return STONE_CHIP_SIZES;
  return [];
};

const AREA_UNITS = ["sq ft","sq m","sq yd"];

const money = (value, currency) => new Intl.NumberFormat("en-IN", { style:"currency", currency, maximumFractionDigits:2 }).format(Number(value)||0);

// ---- Construction type tiers: default rate/sqft + a material-quantity multiplier ----
const CONSTRUCTION_TYPES = [
  { key:"basic",    label:"Basic",    ratePerSqft:1500, factor:0.85 },
  { key:"standard", label:"Standard", ratePerSqft:1800, factor:1.0  },
  { key:"premium",  label:"Premium",  ratePerSqft:2400, factor:1.25 },
];

// ---- Rough thumb-rule quantities per sq ft (standard tier, single floor) — editable estimates, not engineering figures ----
const THUMB_RULES = { "Cement":0.4, "TMT Steel Bars":4, "Sand":1.2, "Bricks":8 };
const AUTO_FILL_UNITS = { "Cement":"Bag", "TMT Steel Bars":"Kg", "Sand":"CFT", "Bricks":"Nos" };

// ---- Illustrative state-wise rate adjustment (approximate; user's own local rates always take priority) ----
const STATE_MULTIPLIERS = {
  "Not selected":1.0,
  "Andhra Pradesh":1.0, "Arunachal Pradesh":0.95, "Assam":0.95, "Bihar":0.9, "Chandigarh":1.1,
  "Chhattisgarh":0.95, "Delhi NCR":1.2, "Goa":1.1, "Gujarat":1.0, "Haryana":1.1,
  "Himachal Pradesh":1.0, "Jammu & Kashmir":1.0, "Jharkhand":0.9, "Karnataka":1.1, "Kerala":1.05,
  "Madhya Pradesh":0.95, "Maharashtra":1.15, "Manipur":0.95, "Meghalaya":0.95, "Mizoram":0.95,
  "Nagaland":0.95, "Odisha":0.92, "Punjab":1.05, "Rajasthan":0.95, "Sikkim":1.0,
  "Tamil Nadu":1.08, "Telangana":1.05, "Tripura":0.92, "Uttar Pradesh":0.9, "Uttarakhand":1.0,
  "West Bengal":0.95, "Other / Union Territory":1.0,
};
// ---- A handful of representative cities per state (not exhaustive — "Other" always lets typing a custom city) ----
const STATE_CITIES = {
  "Delhi NCR":["New Delhi","Gurgaon","Noida","Faridabad","Ghaziabad"],
  "Maharashtra":["Mumbai","Pune","Nagpur","Nashik","Aurangabad"],
  "Karnataka":["Bangalore","Mysore","Mangalore","Hubli","Belgaum"],
  "Tamil Nadu":["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem"],
  "West Bengal":["Kolkata","Howrah","Durgapur","Siliguri","Asansol"],
  "Telangana":["Hyderabad","Warangal","Nizamabad","Karimnagar"],
  "Gujarat":["Ahmedabad","Surat","Vadodara","Rajkot"],
  "Uttar Pradesh":["Lucknow","Kanpur","Noida","Agra","Varanasi"],
  "Punjab":["Ludhiana","Amritsar","Jalandhar","Patiala"],
  "Rajasthan":["Jaipur","Jodhpur","Udaipur","Kota"],
  "Kerala":["Thiruvananthapuram","Kochi","Kozhikode","Thrissur"],
  "Haryana":["Gurgaon","Faridabad","Panipat","Ambala","Rohtak"],
  "Madhya Pradesh":["Bhopal","Indore","Gwalior","Jabalpur"],
  "Bihar":["Patna","Gaya","Bhagalpur","Muzaffarpur"],
  "Odisha":["Bhubaneswar","Cuttack","Rourkela"],
};
const CITY_OTHER = "Other (type manually)";

// ---- Ready-made BOQ starter templates (approximate quantities — meant to be edited after loading) ----
const BOQ_TEMPLATES = {
  "Residential House (~1000 sq ft)": [
    { name:"Cement", unit:"Bag", qty:400, rate:500 },
    { name:"TMT Steel Bars", unit:"Kg", qty:4000, rate:68 },
    { name:"Sand", unit:"CFT", qty:1200, rate:65 },
    { name:"Bricks", unit:"Nos", qty:8000, rate:9 },
    { name:"Vitrified Tiles", unit:"Sq ft", qty:1000, rate:65 },
  ],
  "Apartment Unit (~900 sq ft)": [
    { name:"Cement", unit:"Bag", qty:340, rate:500 },
    { name:"TMT Steel Bars", unit:"Kg", qty:3400, rate:68 },
    { name:"Vitrified Tiles", unit:"Sq ft", qty:900, rate:65 },
    { name:"Interior Paint", unit:"Litre", qty:60, rate:280 },
  ],
  "Commercial Building (~2000 sq ft)": [
    { name:"Cement", unit:"Bag", qty:900, rate:500 },
    { name:"TMT Steel Bars", unit:"Kg", qty:10000, rate:68 },
    { name:"Ready Mix Concrete", unit:"Cubic Meter (m³)", qty:120, rate:6500 },
    { name:"Glass", unit:"Sq ft", qty:400, rate:180 },
  ],
  "Road Construction (~500 m)": [
    { name:"Stone Aggregate / Chips", unit:"CFT", qty:5000, rate:55 },
    { name:"Bitumen / Tar", unit:"Kg", qty:8000, rate:45 },
    { name:"Sand", unit:"CFT", qty:2000, rate:65 },
  ],
  "Boundary Wall (~200 running ft)": [
    { name:"Bricks", unit:"Nos", qty:12000, rate:9 },
    { name:"Cement", unit:"Bag", qty:150, rate:500 },
    { name:"Sand", unit:"CFT", qty:400, rate:65 },
  ],
};

// ---- Minimal inline icon set (no external icon library needed) ----
const Icon = ({ path, size=18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:"middle"}}>
    <path d={path}/>
  </svg>
);
const ICONS = {
  project:"M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1",
  materials:"M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M3 8l9 5m0 0l9-5",
  labour:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5z",
  transport:"M3 13l1-5a2 2 0 012-2h5l3 3h4a1 1 0 011 1v3M3 13v4a1 1 0 001 1h1m14-5v4a1 1 0 01-1 1h-1M7 18a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z",
  summary:"M4 19V5a1 1 0 011-1h9l5 5v10a1 1 0 01-1 1H5a1 1 0 01-1-1zM13 4v5h5M8 13h8M8 17h5",
  report:"M9 17v-6M13 17V7m4 10v-3M4 19h16",
  save:"M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2zM17 21v-8H7v8M7 3v5h8",
  share:"M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14",
  clock:"M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2",
  bag:"M6 8V6a6 6 0 1112 0v2M4 8h16l-1.5 13a1 1 0 01-1 1H6.5a1 1 0 01-1-1L4 8z",
};

// ---- UltraTech-style "Quick Estimate": fixed resource list, quantity auto from area, 3-tier quality ----
const RESOURCE_CATALOG = [
  { key:"cement", label:"Cement", unit:"Bag", factor:0.45, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:300, medium:343, premium:400} },
  { key:"steel", label:"Steel", unit:"Kg", factor:3.5, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:40, medium:46, premium:54} },
  { key:"bricks", label:"Bricks", unit:"Per Piece", factor:19, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:6, medium:7, premium:9} },
  { key:"aggregate", label:"Aggregate", unit:"Per Cubic feet", factor:1.9, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:28, medium:33, premium:40} },
  { key:"sand", label:"Sand", unit:"Per Cubic feet", factor:2.0, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:30, medium:36, premium:44} },
  { key:"flooring", label:"Flooring", unit:"Per Sq feet", factor:1.0, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:65, medium:98, premium:160} },
  { key:"windows", label:"Windows", unit:"Per Sq feet", factor:0.17, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:150, medium:206, premium:300} },
  { key:"doors", label:"Doors", unit:"Per Sq feet", factor:0.18, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:180, medium:267, premium:400} },
  { key:"electrical", label:"Electrical fittings", unit:"Per Sq feet", factor:0.15, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:55, medium:78, premium:110} },
  { key:"painting", label:"Painting", unit:"Per Sq feet", factor:6.0, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:15, medium:22, premium:32} },
  { key:"sanitary", label:"Sanitary Fittings", unit:"Per Sq feet", factor:1.0, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:40, medium:60, premium:90} },
  { key:"kitchen", label:"Kitchen Work", unit:"Per Sq feet", factor:0.055, qualityLabels:["Platform and Sink","Semi Modular","Fully Modular"], rates:{basic:400, medium:818, premium:1500} },
  { key:"contractor", label:"Contractor (RCC, Brickwork, Plaster work)", unit:"Per Sq feet", factor:1.0, qualityLabels:["Basic Grade","Medium Grade","Premium Grade"], rates:{basic:140, medium:190, premium:260} },
];
const QUALITY_TIERS = ["basic","medium","premium"];
const RESOURCE_COLOR_PALETTE = ["#F97316","#1E3A5F","#dc2626","#16a34a","#eab308","#7c3aed","#3b82f6","#f472b6","#06b6d4","#84cc16","#a855f7","#0ea5e9","#f43f5e"];

// ---- Phase-wise cost split (approximate industry-standard %, for the donut chart) + rough duration in days (for the timeline chart) ----
const PHASE_WEIGHTS = [
  { label:"Home Design & Approval", pct:7.9, days:46, color:"#facc15" },
  { label:"Excavation", pct:3.9, days:14, color:"#16a34a" },
  { label:"Footing & Foundation", pct:28.8, days:41, color:"#111827" },
  { label:"RCC Work – Columns & Slabs", pct:19.3, days:17, color:"#2563eb" },
  { label:"Roof Slab", pct:16.1, days:37, color:"#dc2626" },
  { label:"Brickwork & Plastering", pct:3.1, days:8, color:"#f472b6" },
  { label:"Flooring & Tiling", pct:13.9, days:25, color:"#7c3aed" },
  { label:"Electric Wiring", pct:3.9, days:14, color:"#f97316" },
  { label:"Water Supply & Plumbing", pct:2.4, days:30, color:"#6b7280" },
  { label:"Door", pct:0.7, days:15, color:"#eab308" },
];
const toSqft = (area, unit) => unit==="sq m" ? (Number(area)||0)*10.7639 : unit==="sq yd" ? (Number(area)||0)*9 : (Number(area)||0);

export default function Calculator() {
  const { t } = useLanguage();
  const printRef = useRef(null);
  const [scriptsReady, setScriptsReady] = useState({ html2canvas:false, jspdf:false, xlsx:false });

  const [project, setProject] = useState({
    name:"My Construction Project", currency:"INR",
    mode:"boq", area:1000, areaUnit:"sq ft", rate:1800,
    floors:1, constructionType:"standard",
    state:"Not selected",
    useAdditionalCosts:false, wastage:0, other:0, tax:0, contingency:0,
    includeLabour:false, labourType:"contract", contractAmount:0, contractDays:"",
    leadCount:0, helperCount:0, leadRate:0, helperRate:0, workDays:0,
    masonCost:0, helperLabourCost:0, carpenterCost:0, electricalCost:0, plumbingCost:0,
    includeTransport:false, transport:0,
    commercialMode:false,
    quickCity:"", resourceQuality:{}, phaseDays:{},
  });
  const [materials, setMaterials] = useState([
    { name:"Cement", brand:"", size:"", unit:"Bag", qty:0, rate:500 },
    { name:"Sand", brand:"", size:"", unit:"CFT", qty:0, rate:65 },
    { name:"Bricks", brand:"", size:"", unit:"Nos", qty:0, rate:9 },
    { name:"TMT Steel Bars", brand:"", size:"", unit:"Kg", qty:0, rate:68 },
  ]);
  const [saved,setSaved]=useState(false);
  const [savedProjects,setSavedProjects]=useState([]);
  const [selectedTemplate,setSelectedTemplate]=useState("");

  useEffect(()=>{
    try{ const raw = localStorage.getItem("buildnaro-projects"); if(raw) setSavedProjects(JSON.parse(raw)); }catch(e){}
  },[]);

  // Tracks which BOQ rows are in "type your own unit/size" mode
  const [customUnitRows, setCustomUnitRows] = useState({});
  const [customSizeRows, setCustomSizeRows] = useState({});
  const [customAreaUnit, setCustomAreaUnit] = useState(false);
  const [customCity, setCustomCity] = useState(false);

  // ---- Ad gate: show exactly one ad before any download starts ----
  const [pendingDownload, setPendingDownload] = useState(null); // "jpg" | "excel" | "pdf" | null
  const [adSeconds, setAdSeconds] = useState(3);

  useEffect(() => {
    if (!pendingDownload) return;
    setAdSeconds(3);
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    const timer = setInterval(() => {
      setAdSeconds((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [pendingDownload]);

  const requestDownload = (type) => setPendingDownload(type);
  const cancelDownload = () => setPendingDownload(null);
  const confirmDownload = () => {
    const type = pendingDownload;
    setPendingDownload(null);
    if (type === "jpg") downloadJPG();
    if (type === "excel") downloadExcel();
    if (type === "pdf") downloadPDF();
  };

  const rowAmount = (m) => {
    const base = (Number(m.qty)||0)*(Number(m.rate)||0);
    if (!project.commercialMode) return base;
    const afterDiscount = base * (1 - (Number(m.discount)||0)/100);
    return afterDiscount * (1 + (Number(m.gst)||0)/100);
  };
  const materialSubtotal = useMemo(()=>materials.reduce((s,m)=>s+rowAmount(m),0),[materials,project.commercialMode]);
  const areaComponent = (project.mode==="area"||project.mode==="both") ? (Number(project.area)||0)*(Number(project.rate)||0) : 0;
  const materialComponent = (project.mode==="boq"||project.mode==="both") ? materialSubtotal : 0;
  const combinedBase = areaComponent + materialComponent;

  const useExtra = project.useAdditionalCosts;
  const wastageCost = useExtra && (project.mode==="boq"||project.mode==="both") ? materialComponent*(Number(project.wastage||0)/100) : 0;
  const subtotalAfterWastage = combinedBase + wastageCost;

  const labourCost = useExtra && project.includeLabour ? (
    project.labourType==="contract"
      ? (Number(project.contractAmount)||0)
      : project.labourType==="tradewise"
      ? ((Number(project.masonCost)||0)+(Number(project.helperLabourCost)||0)+(Number(project.carpenterCost)||0)+(Number(project.electricalCost)||0)+(Number(project.plumbingCost)||0))
      : ((Number(project.leadCount)||0)*(Number(project.leadRate)||0) + (Number(project.helperCount)||0)*(Number(project.helperRate)||0)) * (Number(project.workDays)||0)
  ) : 0;
  const transportCost = useExtra && project.includeTransport ? (Number(project.transport)||0) : 0;
  const otherCost = useExtra ? subtotalAfterWastage*(Number(project.other||0)/100) : 0;
  const contingency = useExtra ? subtotalAfterWastage*(Number(project.contingency||0)/100) : 0;
  const taxable = subtotalAfterWastage+labourCost+transportCost+otherCost+contingency;
  const tax = useExtra ? taxable*(Number(project.tax||0)/100) : 0;
  const preLocationTotal = taxable+tax;
  const locationMultiplier = STATE_MULTIPLIERS[project.state] ?? 1;
  const locationAdjustment = preLocationTotal * (locationMultiplier-1);
  const grandTotal = preLocationTotal + locationAdjustment;

  // ---- Pie-chart breakdown (of grand total) ----
  const pieSlices = useMemo(()=>{
    const base = grandTotal || 1;
    const parts = [
      { label:"Materials", value: materialComponent+areaComponent, color:"#F97316" },
      { label:"Labour", value: labourCost, color:"#1E3A5F" },
      { label:"Transport", value: transportCost, color:"#3B82F6" },
      { label:"Other charges", value: otherCost+contingency+tax+wastageCost+locationAdjustment, color:"#94A3B8" },
    ].filter(p=>p.value>0);
    let acc = 0;
    return parts.map(p=>{
      const pct = (p.value/base)*100;
      const slice = { ...p, pct, start:acc };
      acc += pct;
      return slice;
    });
  },[grandTotal, materialComponent, areaComponent, labourCost, transportCost, otherCost, contingency, tax, wastageCost, locationAdjustment]);
  const pieGradient = pieSlices.length
    ? `conic-gradient(${pieSlices.map(s=>`${s.color} ${s.start}% ${s.start+s.pct}%`).join(",")})`
    : "#e3e8f0";

  const updateProject=(key,value)=>setProject(p=>({...p,[key]:value}));
  const setMaterialName=(i,value)=>{
    setCustomUnitRows(f=>({...f,[i]:false}));
    setCustomSizeRows(f=>({...f,[i]:false}));
    setMaterials(list=>list.map((m,idx)=>{
      if(idx!==i) return m;
      const unit = MATERIAL_UNIT_MAP[value] || m.unit;
      return {...m,name:value,unit,size:""};
    }));
  };
  const updateMaterial=(i,key,value)=>setMaterials(list=>list.map((m,idx)=>idx===i?{...m,[key]:value}:m));
  const addMaterial=()=>setMaterials(l=>[...l,{name:"",brand:"",size:"",unit:"Unit",qty:0,rate:0}]);
  const removeMaterial=i=>setMaterials(l=>l.filter((_,idx)=>idx!==i));
  const setUnitFromSelect = (i, value) => {
    if (value === "__custom__") {
      setCustomUnitRows(f=>({...f,[i]:true}));
      updateMaterial(i,"unit","");
    } else {
      setCustomUnitRows(f=>({...f,[i]:false}));
      updateMaterial(i,"unit",value);
    }
  };
  const setSizeFromSelect = (i, value) => {
    if (value === "__custom__") {
      setCustomSizeRows(f=>({...f,[i]:true}));
      updateMaterial(i,"size","");
    } else {
      setCustomSizeRows(f=>({...f,[i]:false}));
      updateMaterial(i,"size",value);
    }
  };
  const setAreaUnitFromSelect = (value) => {
    if (value === "__custom__") { setCustomAreaUnit(true); updateProject("areaUnit",""); }
    else { setCustomAreaUnit(false); updateProject("areaUnit",value); }
  };
  const setCityFromSelect = (value) => {
    if (value === CITY_OTHER) { setCustomCity(true); updateProject("quickCity",""); }
    else { setCustomCity(false); updateProject("quickCity",value); }
  };
  // ---- Quick Estimate: reacts to Project Details (Area, Floors, Construction Type) + Estimate Settings (State) ----
  const quickSqft = toSqft(project.area, project.areaUnit) * Math.max(1, Number(project.floors)||1);
  const defaultQuickTier = project.constructionType==="basic" ? "basic" : project.constructionType==="premium" ? "premium" : "medium";
  const setResourceQuality = (key, tier) => setProject(p=>({...p, resourceQuality:{...p.resourceQuality,[key]:tier}}));
  const quickRows = useMemo(()=>RESOURCE_CATALOG.map(r=>{
    const tier = project.resourceQuality[r.key] || defaultQuickTier;
    const qty = Math.round(quickSqft*r.factor);
    const rate = r.rates[tier];
    return { ...r, tier, qty, rate, amount: qty*rate };
  }),[quickSqft, project.resourceQuality, defaultQuickTier]);
  const quickSubtotal = quickRows.reduce((s,r)=>s+r.amount,0);
  const quickLocationMultiplier = STATE_MULTIPLIERS[project.state] ?? 1;
  const quickTotal = quickSubtotal * quickLocationMultiplier;

  // ---- Pie chart: real cost share per resource — moves with every input above, not a fixed split ----
  const quickPieSlices = useMemo(()=>{
    const base = quickSubtotal || 1;
    let acc = 0;
    return quickRows.filter(r=>r.amount>0).map((r,i)=>{
      const pct = (r.amount/base)*100;
      const slice = { label:r.label, value:r.amount*quickLocationMultiplier, color:RESOURCE_COLOR_PALETTE[i%RESOURCE_COLOR_PALETTE.length], pct, start:acc };
      acc += pct;
      return slice;
    });
  },[quickRows, quickSubtotal, quickLocationMultiplier]);
  const quickPieGradient = quickPieSlices.length
    ? `conic-gradient(${quickPieSlices.map(s=>`${s.color} ${s.start}% ${s.start+s.pct}%`).join(",")})`
    : "#e3e8f0";

  // ---- Timeline: standard days by default, editable per phase; cost per phase still scales with the live total ----
  const setPhaseDays = (label, value) => setProject(p=>({...p, phaseDays:{...(p.phaseDays||{}), [label]:value}}));
  const quickTimeline = useMemo(()=>{
    let dayAcc = 0;
    return PHASE_WEIGHTS.map(p=>{
      const override = (project.phaseDays||{})[p.label];
      const days = (override!==undefined && override!=="") ? Math.max(0, Number(override)||0) : p.days;
      const row = { ...p, days, cost: quickTotal*p.pct/100, dayStart:dayAcc };
      dayAcc += days;
      return row;
    });
  },[quickTotal, project.phaseDays]);
  const quickTotalDays = quickTimeline.reduce((s,p)=>s+p.days,0);


  const [shared,setShared]=useState(false);
  const shareEstimate = async () => {
    const text = `${project.name} — Estimated construction cost: ${money(quickTotal||grandTotal,project.currency)} (via BuildNaro)`;
    try {
      if (navigator.share) { await navigator.share({ title:"BuildNaro Estimate", text }); }
      else { await navigator.clipboard.writeText(text); setShared(true); setTimeout(()=>setShared(false),2000); }
    } catch(e){}
  };

  const saveEstimate=()=>{
    const entry = { id: Date.now(), name: project.name||"Untitled Project", savedAt: new Date().toISOString(), grandTotal, project, materials };
    const next = [entry, ...savedProjects].slice(0,20);
    setSavedProjects(next);
    try{ localStorage.setItem("buildnaro-projects", JSON.stringify(next)); }catch(e){}
    setSaved(true); setTimeout(()=>setSaved(false),2000);
  };
  const loadProject=(entry)=>{ setProject(entry.project); setMaterials(entry.materials); };
  const deleteProject=(id)=>{
    const next = savedProjects.filter(p=>p.id!==id);
    setSavedProjects(next);
    try{ localStorage.setItem("buildnaro-projects", JSON.stringify(next)); }catch(e){}
  };

  // ---- Auto-suggest key material quantities from Area + Floors + Construction Type (rough thumb-rules) ----
  const autoFillMaterials = () => {
    const tier = CONSTRUCTION_TYPES.find(c=>c.key===project.constructionType) || CONSTRUCTION_TYPES[1];
    const areaSqft = project.areaUnit==="sq m" ? (Number(project.area)||0)*10.7639
      : project.areaUnit==="sq yd" ? (Number(project.area)||0)*9
      : (Number(project.area)||0);
    const floors = Math.max(1, Number(project.floors)||1);
    const totalArea = areaSqft*floors;
    setMaterials(list=>{
      const next = [...list];
      Object.keys(THUMB_RULES).forEach(name=>{
        const qty = Math.round(totalArea*THUMB_RULES[name]*tier.factor);
        const idx = next.findIndex(m=>m.name===name);
        if (idx>=0) next[idx] = { ...next[idx], qty };
        else next.push({ name, brand:"", size:"", unit:AUTO_FILL_UNITS[name], qty, rate:0 });
      });
      return next;
    });
  };
  const applyTemplate = (templateName) => {
    setSelectedTemplate(templateName);
    if (!templateName || !BOQ_TEMPLATES[templateName]) return;
    setMaterials(BOQ_TEMPLATES[templateName].map(m=>({ name:m.name, brand:"", size:"", unit:m.unit, qty:m.qty, rate:m.rate })));
  };

  // ---- Downloads ----
  const buildRows = () => {
    const rows = [[t("th_material"), t("th_brand"), t("th_spec"), t("th_unit"), t("th_qty"), t("th_rate"), t("th_amount")]];
    materials.forEach(m => rows.push([m.name||"-", m.brand||"-", m.size||"-", m.unit, Number(m.qty)||0, Number(m.rate)||0, rowAmount(m)]));
    return rows;
  };

  const downloadJPG = async () => {
    if (!window.html2canvas || !printRef.current) return;
    const canvas = await window.html2canvas(printRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpeg", 0.95);
    a.download = `${(project.name||"estimate").replace(/\s+/g,"-")}.jpg`;
    a.click();
  };

  const downloadPDF = async () => {
    if (!window.html2canvas || !window.jspdf || !printRef.current) return;
    const canvas = await window.html2canvas(printRef.current, { scale: 2, backgroundColor: "#ffffff" });
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = 210, pageH = 297;
    const imgW = pageW;
    const imgH = (canvas.height * imgW) / canvas.width;
    let heightLeft = imgH, position = 0;
    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
    heightLeft -= pageH;
    while (heightLeft > 0) {
      position = heightLeft - imgH;
      pdf.addPage();
      pdf.addImage(imgData, "JPEG", 0, position, imgW, imgH);
      heightLeft -= pageH;
    }
    pdf.save(`${(project.name||"estimate").replace(/\s+/g,"-")}.pdf`);
  };

  const downloadExcel = () => {
    if (!window.XLSX) return;
    const XLSX = window.XLSX;
    const wb = XLSX.utils.book_new();
    const rows = buildRows();
    rows.push([]);
    if (project.mode==="area"||project.mode==="both") rows.push([t("pd_mode_area"), "", "", "", "", "", areaComponent]);
    if (project.mode==="boq"||project.mode==="both") rows.push([t("boq_subtotal"), "", "", "", "", "", materialComponent]);
    if (wastageCost) rows.push([t("bd_wastage"), "", "", "", "", "", wastageCost]);
    if (labourCost) rows.push([t("bd_labour"), "", "", "", "", "", labourCost]);
    if (transportCost) rows.push([t("bd_transport"), "", "", "", "", "", transportCost]);
    if (useExtra) rows.push([t("bd_other"), "", "", "", "", "", otherCost]);
    if (useExtra) rows.push([t("bd_contingency"), "", "", "", "", "", contingency]);
    if (useExtra) rows.push([t("bd_tax"), "", "", "", "", "", tax]);
    rows.push([t("bd_grand"), "", "", "", "", "", grandTotal]);
    const ws = XLSX.utils.aoa_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, "Estimate");
    XLSX.writeFile(wb, `${(project.name||"estimate").replace(/\s+/g,"-")}.xlsx`);
  };

  return <main>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s,html2canvas:true}))}/>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s,jspdf:true}))}/>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s,xlsx:true}))}/>

    <datalist id="material-suggestions">{MATERIAL_SUGGESTIONS.map(x=><option key={x} value={x}/>)}</datalist>

    <header className="topbar"><a className="brand" href="/">Build<span>Naro</span></a><a href="/">{t("nav_home")}</a><LanguageSwitcher/></header>
    <section className="hero"><div className="eyebrow">{t("calc_eyebrow")}</div><h1>{t("calc_title")}</h1><p>{t("calc_desc")}</p></section>
    <section className="wrap">
      <div className="grid">
        <div className="card"><h2><Icon path={ICONS.project}/> {t("pd_heading")}</h2><div className="form-grid">
          <label className="full">{t("pd_name")}<input value={project.name} onChange={e=>updateProject("name",e.target.value)}/></label>
          <label>Floors<input type="number" min="1" value={project.floors} onChange={e=>updateProject("floors",e.target.value)}/></label>
          <label>Construction Type
            <select value={project.constructionType} onChange={e=>updateProject("constructionType",e.target.value)}>
              {CONSTRUCTION_TYPES.map(c=><option key={c.key} value={c.key}>{c.label} (~₹{c.ratePerSqft}/sq ft)</option>)}
            </select>
          </label>
          <label>State / Region (location pricing)
            <select value={project.state} onChange={e=>updateProject("state",e.target.value)}>
              {Object.keys(STATE_MULTIPLIERS).map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label>City
            {STATE_CITIES[project.state] ? (
              <>
                <select value={customCity ? CITY_OTHER : project.quickCity} onChange={e=>setCityFromSelect(e.target.value)}>
                  <option value="">— Select City —</option>
                  {STATE_CITIES[project.state].map(c=><option key={c} value={c}>{c}</option>)}
                  <option value={CITY_OTHER}>{CITY_OTHER}</option>
                </select>
                {customCity && <input type="text" value={project.quickCity} placeholder="Type your city" onChange={e=>updateProject("quickCity",e.target.value)} style={{marginTop:6,width:"100%"}}/>}
              </>
            ) : (
              <input type="text" value={project.quickCity} placeholder="Type your city" onChange={e=>updateProject("quickCity",e.target.value)}/>
            )}
          </label>
          <label>BOQ Template
            <select value={selectedTemplate} onChange={e=>applyTemplate(e.target.value)}>
              <option value="">— Start from a template —</option>
              {Object.keys(BOQ_TEMPLATES).map(name=><option key={name} value={name}>{name}</option>)}
            </select>
          </label>
          <div className="full secondary-action"><button type="button" onClick={autoFillMaterials}>Auto-fill materials from Area + Floors</button>
            <span className="field-note">Rough thumb-rule quantities for Cement, Steel, Sand & Bricks — edit after loading.</span>
          </div>
        </div></div>

        <div className="card"><h2>{t("settings_heading")}</h2><div className="form-grid">
          <label>{t("pd_calc_mode")}<select value={project.mode} onChange={e=>updateProject("mode",e.target.value)}><option value="area">{t("pd_mode_area")}</option><option value="boq">{t("pd_mode_boq")}</option><option value="both">{t("pd_mode_both")}</option></select></label>
          {(project.mode==="area"||project.mode==="both")&&<>
            <label>{t("pd_area")}<input type="number" min="0" value={project.area} onChange={e=>updateProject("area",e.target.value)}/></label>
            <label>{t("pd_area_unit")}
              <select value={customAreaUnit ? "__custom__" : project.areaUnit} onChange={e=>setAreaUnitFromSelect(e.target.value)}>
                <option value="">{t("opt_none_custom")}</option>
                {AREA_UNITS.map(u=><option key={u} value={u}>{u}</option>)}
                <option value="__custom__">Other (type manually)</option>
              </select>
              {customAreaUnit && <input type="text" value={project.areaUnit} placeholder="Type unit" onChange={e=>updateProject("areaUnit",e.target.value)} style={{marginTop:6,width:"100%"}}/>}
            </label>
            <label>{t("pd_rate")}<input type="number" min="0" value={project.rate} onChange={e=>updateProject("rate",e.target.value)}/></label>
          </>}
        </div></div>
      </div>

      <div className="card">
        <div className="section-head"><div><h2><Icon path={ICONS.report}/> Quick Estimate — Cost by Resource Allocation</h2><p>Auto-calculated from Area ({project.area} {project.areaUnit}) × {project.floors} floor(s) + State. Defaults to your Construction Type ({CONSTRUCTION_TYPES.find(c=>c.key===project.constructionType)?.label}) — override any resource below.</p></div></div>
        <div className="table-wrap"><table><thead><tr><th>Resource</th><th>Quantity</th><th colSpan={3}>Quality</th><th>Amount</th></tr></thead><tbody>
          {quickRows.map(r=>(
            <tr key={r.key}>
              <td style={{display:"flex",alignItems:"center",gap:8}}><Icon path={ICONS.bag} size={16}/> {r.label}</td>
              <td>{r.qty.toLocaleString("en-IN")} <span className="field-note">{r.unit}</span></td>
              {QUALITY_TIERS.map((tier,idx)=>(
                <td key={tier} style={{textAlign:"center"}}>
                  <label style={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,fontSize:11,fontWeight:600}}>
                    <input type="radio" name={`quality-${r.key}`} checked={(project.resourceQuality[r.key]||"medium")===tier} onChange={()=>setResourceQuality(r.key,tier)} style={{width:"auto"}}/>
                    {r.qualityLabels[idx]}
                  </label>
                </td>
              ))}
              <td className="amount">{money(r.amount,project.currency)}</td>
            </tr>
          ))}
        </tbody><tfoot><tr><td colSpan={5} className="boq-total-label">Total Estimated Cost</td><td className="amount">{money(quickTotal,project.currency)}</td></tr></tfoot></table></div>

        <div className="pie-wrap" style={{marginTop:20}}>
          <div className="pie-chart" style={{background:quickPieGradient}}/>
          <div className="pie-legend">
            {quickPieSlices.map(s=><div key={s.label} className="pie-legend-item"><span className="pie-dot" style={{background:s.color}}/>{s.label} — {money(s.value,project.currency)} ({s.pct.toFixed(1)}%)</div>)}
          </div>
        </div>

        <h3 style={{display:"flex",alignItems:"center",gap:8,margin:"24px 0 12px",fontSize:15}}><Icon path={ICONS.clock} size={16}/> Timeline Tracking: Cost Per Phase — approx. {quickTotalDays} days total</h3>
        <p className="field-note" style={{marginTop:-6,marginBottom:10}}>Standard durations shown by default — click a day number to type your own.</p>
        <div className="gantt">
          {quickTimeline.map(p=>(
            <div key={p.label} className="gantt-row">
              <div className="gantt-label">{p.label}</div>
              <div className="gantt-track">
                <div className="gantt-bar" style={{marginLeft:`${quickTotalDays?(p.dayStart/quickTotalDays)*100:0}%`, width:`${quickTotalDays?(p.days/quickTotalDays)*100:0}%`, background:p.color}}/>
              </div>
              <div className="gantt-meta">
                <input type="number" min="0" value={p.days} onChange={e=>setPhaseDays(p.label,e.target.value)} style={{width:52,display:"inline-block",padding:"2px 6px",marginRight:4,fontSize:12}}/>
                Days | {money(p.cost,project.currency)}
              </div>
            </div>
          ))}
        </div>

        <p className="field-note" style={{marginTop:10}}>Disclaimer: these are approximate rates, phase-wise splits and durations. Actual cost/time varies by city and contractor — confirm local rates before finalizing.</p>
        <div className="actions" style={{marginTop:14}}>
          <button onClick={()=>window.print()}>{t("action_print")}</button>
          <button onClick={shareEstimate}>{shared?"Copied!":"Share Final Estimate"}</button>
        </div>
      </div>

      <div className="card summary"><h2><Icon path={ICONS.summary}/> {t("summary_heading")}</h2><div className="summary-main">{money(grandTotal,project.currency)}</div><p>{t("summary_total")}</p>
        {(project.mode==="area"||project.mode==="both")&&<div className="mini">{t("pd_mode_area")}: {money(areaComponent,project.currency)}</div>}
        {(project.mode==="boq"||project.mode==="both")&&<div className="mini">{t("summary_materials")}: {money(materialComponent,project.currency)}</div>}
        {locationMultiplier!==1 && <div className="mini">Location adjustment: {money(locationAdjustment,project.currency)}</div>}
      </div>

      <div className="card"><div className="section-head"><div><h2><Icon path={ICONS.materials}/> {t("boq_heading")}</h2><p>{t("material_name_ph")}</p></div><button onClick={addMaterial}>{t("boq_add")}</button></div>
        <div className="toggle-row" style={{marginBottom:12}}><input type="checkbox" checked={project.commercialMode} onChange={e=>updateProject("commercialMode",e.target.checked)}/> <b>Commercial mode</b> <span className="field-note" style={{marginLeft:6}}>adds Supplier, GST%, Discount% &amp; Remarks columns</span></div>
        <div className="table-wrap"><table><thead><tr><th>{t("th_material")}</th><th>{t("th_brand")}</th><th>{t("th_spec")}</th><th>{t("th_unit")}</th><th>{t("th_qty")}</th><th>{t("th_rate")}</th>{project.commercialMode&&<><th>Supplier</th><th>GST%</th><th>Disc%</th></>}<th>{t("th_amount")}</th>{project.commercialMode&&<th>Remarks</th>}<th></th></tr></thead><tbody>
        {materials.map((m,i)=>{
          const amount=rowAmount(m);
          const brandKey = Object.keys(MATERIAL_BRAND_MAP).find(k=>(m.name||"").toLowerCase().includes(k.toLowerCase()));
          const brandOptions = brandKey ? MATERIAL_BRAND_MAP[brandKey] : GENERIC_BRANDS;
          const sizeOptions = getSizeOptions(m.name);
          const unitOptions = getUnitOptions(m.name);
          const isCustomUnit = !!customUnitRows[i] || (m.unit && !unitOptions.includes(m.unit));
          const unitSelectValue = isCustomUnit ? "__custom__" : m.unit;
          const hasSizeOptions = sizeOptions.length > 0;
          const isCustomSize = !!customSizeRows[i] || (hasSizeOptions && m.size && !sizeOptions.includes(m.size));
          const sizeSelectValue = isCustomSize ? "__custom__" : m.size;
          return <tr key={i}>
          <td className="mat-row-name"><input list="material-suggestions" value={m.name} placeholder={t("material_name_ph")} onChange={e=>setMaterialName(i,e.target.value)}/></td>
          <td><input list={`brand-list-${i}`} value={m.brand} placeholder={t("brand_ph")} onChange={e=>updateMaterial(i,"brand",e.target.value)}/>
            <datalist id={`brand-list-${i}`}>{brandOptions.map(b=><option key={b} value={b}/>)}</datalist>
          </td>
          <td>
            {hasSizeOptions ? (
              <>
                <select value={sizeSelectValue} onChange={e=>setSizeFromSelect(i,e.target.value)}>
                  <option value="">{t("opt_none_custom")}</option>
                  {sizeOptions.map(s=><option key={s} value={s}>{s}</option>)}
                  <option value="__custom__">Other (type manually)</option>
                </select>
                {isCustomSize && (
                  <input type="text" value={m.size} placeholder={t("size_ph")} onChange={e=>updateMaterial(i,"size",e.target.value)} style={{marginTop:6,width:"100%"}}/>
                )}
              </>
            ) : (
              <input value={m.size} placeholder={t("size_ph")} onChange={e=>updateMaterial(i,"size",e.target.value)}/>
            )}
          </td>
          <td>
            <select value={unitSelectValue} onChange={e=>setUnitFromSelect(i,e.target.value)}>
              <option value="">{t("opt_none_custom")}</option>
              {unitOptions.map(u=><option key={u} value={u}>{u}</option>)}
              <option value="__custom__">Other (type manually)</option>
            </select>
            {isCustomUnit && (
              <input
                type="text"
                value={m.unit}
                placeholder="Type unit"
                onChange={e=>updateMaterial(i,"unit",e.target.value)}
                style={{marginTop:6,width:"100%"}}
              />
            )}
          </td>
          <td><input type="number" min="0" step="any" value={m.qty} onChange={e=>updateMaterial(i,"qty",e.target.value)}/></td>
          <td><input type="number" min="0" step="any" value={m.rate} onChange={e=>updateMaterial(i,"rate",e.target.value)}/></td>
          {project.commercialMode&&<>
            <td><input value={m.supplier||""} placeholder="Supplier" onChange={e=>updateMaterial(i,"supplier",e.target.value)}/></td>
            <td><input type="number" min="0" step="any" value={m.gst||0} onChange={e=>updateMaterial(i,"gst",e.target.value)} style={{width:70}}/></td>
            <td><input type="number" min="0" step="any" value={m.discount||0} onChange={e=>updateMaterial(i,"discount",e.target.value)} style={{width:70}}/></td>
          </>}
          <td className="amount">{money(amount,project.currency)}</td>
          {project.commercialMode&&<td><input value={m.remarks||""} placeholder="Remarks" onChange={e=>updateMaterial(i,"remarks",e.target.value)}/></td>}
          <td><button className="delete" aria-label="Remove" onClick={()=>removeMaterial(i)}>×</button></td>
        </tr>})}</tbody><tfoot><tr><td colSpan={project.commercialMode?9:6} className="boq-total-label">{t("boq_subtotal")}</td><td className="amount">{money(materialSubtotal,project.currency)}</td>{project.commercialMode&&<td></td>}<td></td></tr></tfoot></table></div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="toggle-row top-toggle"><input type="checkbox" checked={project.useAdditionalCosts} onChange={e=>updateProject("useAdditionalCosts",e.target.checked)}/> <b>{t("toggle_additional_costs")}</b></div>
          {project.useAdditionalCosts && <div className="form-grid" style={{marginTop:14}}>
            {(project.mode==="boq"||project.mode==="both")&&<label>{t("extra_wastage")}<input type="number" min="0" step="any" value={project.wastage} onChange={e=>updateProject("wastage",e.target.value)}/></label>}
            <label>{t("extra_other")}<input type="number" min="0" step="any" value={project.other} onChange={e=>updateProject("other",e.target.value)}/></label>
            <label>{t("extra_tax")}<input type="number" min="0" step="any" value={project.tax} onChange={e=>updateProject("tax",e.target.value)}/></label>
            <label>{t("extra_contingency")}<input type="number" min="0" step="any" value={project.contingency} onChange={e=>updateProject("contingency",e.target.value)}/></label>

            <div className="full toggle-row"><input type="checkbox" checked={project.includeTransport} onChange={e=>updateProject("includeTransport",e.target.checked)}/> <Icon path={ICONS.transport} size={16}/> {t("toggle_transport")}</div>
            {project.includeTransport&&<label className="full">{t("extra_transport")}<input type="number" min="0" step="any" value={project.transport} onChange={e=>updateProject("transport",e.target.value)}/></label>}

            <div className="full toggle-row"><input type="checkbox" checked={project.includeLabour} onChange={e=>updateProject("includeLabour",e.target.checked)}/> <Icon path={ICONS.labour} size={16}/> {t("toggle_labour")}</div>
            {project.includeLabour && <div className="full labour-block">
              <label>{t("labour_type")}<select value={project.labourType} onChange={e=>updateProject("labourType",e.target.value)}><option value="contract">{t("labour_contract")}</option><option value="day">{t("labour_dayside")}</option><option value="tradewise">Trade-wise (Mason, Helper, Carpenter, Electrical, Plumbing)</option></select></label>
              {project.labourType==="contract" ? <div className="sub-grid">
                <label>{t("contract_amount")}<input type="number" min="0" value={project.contractAmount} onChange={e=>updateProject("contractAmount",e.target.value)}/></label>
                <label>{t("contract_days")}<input type="number" min="0" value={project.contractDays} onChange={e=>updateProject("contractDays",e.target.value)}/></label>
              </div> : project.labourType==="tradewise" ? <div className="sub-grid">
                <label>Mason Labour<input type="number" min="0" value={project.masonCost} onChange={e=>updateProject("masonCost",e.target.value)}/></label>
                <label>Helper Labour<input type="number" min="0" value={project.helperLabourCost} onChange={e=>updateProject("helperLabourCost",e.target.value)}/></label>
                <label>Carpenter Charges<input type="number" min="0" value={project.carpenterCost} onChange={e=>updateProject("carpenterCost",e.target.value)}/></label>
                <label>Electrical Charges<input type="number" min="0" value={project.electricalCost} onChange={e=>updateProject("electricalCost",e.target.value)}/></label>
                <label>Plumbing Charges<input type="number" min="0" value={project.plumbingCost} onChange={e=>updateProject("plumbingCost",e.target.value)}/></label>
              </div> : <div className="sub-grid">
                <label>{t("lead_count")}<input type="number" min="0" value={project.leadCount} onChange={e=>updateProject("leadCount",e.target.value)}/></label>
                <label>{t("helper_count")}<input type="number" min="0" value={project.helperCount} onChange={e=>updateProject("helperCount",e.target.value)}/></label>
                <label>{t("lead_rate")}<input type="number" min="0" value={project.leadRate} onChange={e=>updateProject("leadRate",e.target.value)}/></label>
                <label>{t("helper_rate")}<input type="number" min="0" value={project.helperRate} onChange={e=>updateProject("helperRate",e.target.value)}/></label>
                <label>{t("work_days")}<input type="number" min="0" value={project.workDays} onChange={e=>updateProject("workDays",e.target.value)}/></label>
              </div>}
            </div>}
          </div>}
        </div>

        <div className="card breakdown"><h2><Icon path={ICONS.report}/> {t("bd_heading")}</h2>
          {pieSlices.length>0 && <div className="pie-wrap">
            <div className="pie-chart" style={{background:pieGradient}}/>
            <div className="pie-legend">
              {pieSlices.map(s=><div key={s.label} className="pie-legend-item"><span className="pie-dot" style={{background:s.color}}/>{s.label} — {s.pct.toFixed(0)}%</div>)}
            </div>
          </div>}
          {(project.mode==="area"||project.mode==="both")&&<div className="row"><span>{t("pd_mode_area")}</span><b>{money(areaComponent,project.currency)}</b></div>}
          {(project.mode==="boq"||project.mode==="both")&&<div className="row"><span>{t("boq_subtotal")}</span><b>{money(materialComponent,project.currency)}</b></div>}
          {wastageCost>0&&<div className="row"><span>{t("bd_wastage")}</span><b>{money(wastageCost,project.currency)}</b></div>}
          {labourCost>0&&<div className="row"><span>{t("bd_labour")}</span><b>{money(labourCost,project.currency)}</b></div>}
          {transportCost>0&&<div className="row"><span>{t("bd_transport")}</span><b>{money(transportCost,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_other")}</span><b>{money(otherCost,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_contingency")}</span><b>{money(contingency,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_tax")}</span><b>{money(tax,project.currency)}</b></div>}
          {locationMultiplier!==1&&<div className="row"><span>Location adjustment ({project.state})</span><b>{money(locationAdjustment,project.currency)}</b></div>}
          <div className="row grand"><span>{t("bd_grand")}</span><b>{money(grandTotal,project.currency)}</b></div>
        </div>
      </div>

      <div className="card">
        <div className="section-head"><div><h2><Icon path={ICONS.save}/> My Projects</h2><p>Saved estimates on this device — tap Load to bring one back</p></div></div>
        {savedProjects.length===0 ? <p className="field-note">No saved projects yet. Use "Save" below to keep this estimate.</p> : (
          <div className="table-wrap"><table><thead><tr><th>Name</th><th>Saved</th><th>Total</th><th></th></tr></thead>
          <tbody>{savedProjects.map(p=>(
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{new Date(p.savedAt).toLocaleDateString()}</td>
              <td className="amount">{money(p.grandTotal,p.project.currency)}</td>
              <td style={{display:"flex",gap:8}}>
                <button type="button" onClick={()=>loadProject(p)}>Load</button>
                <button type="button" className="delete" onClick={()=>deleteProject(p.id)}>×</button>
              </td>
            </tr>
          ))}</tbody></table></div>
        )}
      </div>

      <div className="card download-card">
        <div><h2 style={{margin:"0 0 4px"}}><Icon path={ICONS.report} size={16}/> {t("download_heading")}</h2><p style={{margin:0,fontSize:13,color:"#718096"}}>A4 · JPG / Excel / PDF</p></div>
        <div className="download-buttons">
          <button className="jpg" disabled={!scriptsReady.html2canvas} onClick={()=>requestDownload("jpg")}>{t("download_jpg")}</button>
          <button className="excel" disabled={!scriptsReady.xlsx} onClick={()=>requestDownload("excel")}>{t("download_excel")}</button>
          <button className="pdf" disabled={!scriptsReady.html2canvas||!scriptsReady.jspdf} onClick={()=>requestDownload("pdf")}>{t("download_pdf")}</button>
        </div>
      </div>

      <div className="actions"><button onClick={()=>window.print()}>{t("action_print")}</button><button onClick={saveEstimate}>{saved?t("action_saved"):t("action_save")}</button></div>
    </section>

    {/* Off-screen A4 sheet captured for JPG/PDF export */}
    <div ref={printRef} className="print-sheet">
      <h1>Build<span style={{color:"#2864df"}}>Naro</span> — {t("calc_title")}</h1>
      <div className="ps-meta">
        {t("print_prepared_for")}: <b>{project.name}</b><br/>
        {t("print_generated_on")}: {new Date().toLocaleDateString()}
      </div>
      <table><thead><tr><th>{t("th_material")}</th><th>{t("th_brand")}</th><th>{t("th_spec")}</th><th>{t("th_unit")}</th><th>{t("th_qty")}</th><th>{t("th_rate")}</th><th>{t("th_amount")}</th></tr></thead>
      <tbody>{materials.filter(m=>m.name).map((m,i)=><tr key={i}><td>{m.name}</td><td>{m.brand||"-"}</td><td>{m.size||"-"}</td><td>{m.unit}</td><td>{m.qty}</td><td>{money(m.rate,project.currency)}</td><td>{money((Number(m.qty)||0)*(Number(m.rate)||0),project.currency)}</td></tr>)}</tbody></table>
      <table><tbody>
        {(project.mode==="area"||project.mode==="both")&&<tr><td>{t("pd_mode_area")}</td><td style={{textAlign:"right"}}>{money(areaComponent,project.currency)}</td></tr>}
        {(project.mode==="boq"||project.mode==="both")&&<tr><td>{t("boq_subtotal")}</td><td style={{textAlign:"right"}}>{money(materialComponent,project.currency)}</td></tr>}
        {wastageCost>0&&<tr><td>{t("bd_wastage")}</td><td style={{textAlign:"right"}}>{money(wastageCost,project.currency)}</td></tr>}
        {labourCost>0&&<tr><td>{t("bd_labour")}</td><td style={{textAlign:"right"}}>{money(labourCost,project.currency)}</td></tr>}
        {transportCost>0&&<tr><td>{t("bd_transport")}</td><td style={{textAlign:"right"}}>{money(transportCost,project.currency)}</td></tr>}
        {useExtra&&<tr><td>{t("bd_other")}</td><td style={{textAlign:"right"}}>{money(otherCost,project.currency)}</td></tr>}
        {useExtra&&<tr><td>{t("bd_contingency")}</td><td style={{textAlign:"right"}}>{money(contingency,project.currency)}</td></tr>}
        {useExtra&&<tr><td>{t("bd_tax")}</td><td style={{textAlign:"right"}}>{money(tax,project.currency)}</td></tr>}
      </tbody></table>
      <div className="ps-total"><span>{t("bd_grand")}</span><span>{money(grandTotal,project.currency)}</span></div>
      <div className="ps-note">{t("print_note")}</div>
    </div>

    {/* Single-ad gate shown once, right before a download starts */}
    {pendingDownload && (
      <div className="ad-modal-backdrop" role="dialog" aria-modal="true">
        <div className="ad-modal">
          <div className="ad-modal-head">
            <span>Advertisement</span>
            <button className="ad-modal-close" aria-label="Cancel" onClick={cancelDownload}>×</button>
          </div>
          <ins className="adsbygoogle"
               style={{ display: "block", minHeight: 250, background: "#f4f6f9" }}
               data-ad-client="ca-pub-8305568320429251"
               data-ad-slot="REPLACE_WITH_YOUR_AD_SLOT_ID"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <button className="ad-modal-continue" disabled={adSeconds > 0} onClick={confirmDownload}>
            {adSeconds > 0 ? `Please wait… (${adSeconds})` : "Continue to Download"}
          </button>
        </div>
      </div>
    )}
  </main>;
}
