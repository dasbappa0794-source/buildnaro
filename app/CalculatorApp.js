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

// Material name -> national-average base rate (₹ per its default unit). Multiplied by the state
// factor below to suggest a location-adjusted rate — a heuristic, not a live market feed.
const BASE_MATERIAL_RATES = {
  "Cement":500, "TMT Steel Bars":68, "Sand":65, "Stone Aggregate / Chips":55, "Bricks":9, "AAC Blocks":55,
  "Ready Mix Concrete":6500, "Vitrified Tiles":65, "Ceramic Tiles":45, "Marble":150, "Granite":180,
  "Plywood":90, "MDF Board":70, "Laminate Sheet":40, "Veneer":120, "Interior Paint":280, "Exterior Paint":320,
  "Primer":180, "Wall Putty":25, "PVC Pipe":45, "CPVC Pipe":60, "Electrical Wire":1200,
  "MCB / Switchgear":120, "Modular Switches":60, "Wood / Timber":1800, "Flush Door":3500, "Door Frame":2500,
  "UPVC Window":420, "Aluminium Window":380, "Glass":90, "Door & Window Hardware":800,
  "Waterproofing Chemical":220, "Bitumen / Tar":45, "Gypsum Board":45, "POP (Plaster of Paris)":400,
  "Tile Adhesive":350, "Tile Grout":60, "False Ceiling Grid":85, "Modular Kitchen":1800, "Wardrobe":1200,
  "Sanitaryware (WC/Basin)":3500, "CP Fittings (Taps/Mixers)":1500, "Water Storage Tank":6000, "Roofing Sheet":320,
  "MS Fencing":180, "Interlocking Pavers":55, "Curtains":900, "Wallpaper":2500, "Light Fixtures":600,
  "Split AC":32000, "Furniture":8000, "Binding Wire (GI Wire)":75, "Nails (Perek)":80, "Shuttering Pins":8,
};
const suggestedRate = (materialName, state) => {
  const base = BASE_MATERIAL_RATES[materialName];
  if (!base) return null;
  const mult = STATE_MULTIPLIERS[state]?? 1;
  return Math.round(base * mult);
};

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
  { key:"basic", label:"Basic", ratePerSqft:1500, factor:0.85 },
  { key:"standard", label:"Standard", ratePerSqft:1800, factor:1.0 },
  { key:"premium", label:"Premium", ratePerSqft:2400, factor:1.25 },
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
  "Nagaland":0.95, "Odisha":0.95, "Puducherry":1.0, "Punjab":1.05, "Rajasthan":0.95,
  "Sikkim":0.95, "Tamil Nadu":1.05, "Telangana":1.05, "Tripura":0.95, "Uttar Pradesh":0.95,
  "Uttarakhand":1.0, "West Bengal":1.0,
};

const CURRENCIES = ["INR","USD","EUR","GBP"];
const LS_KEY = "buildnaro_v2";
const LS_PROJECTS_KEY = "buildnaro_projects_v2";

// ---- Icons ----
const ICONS = {
  proj:'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
  settings:'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0.12-.61l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.007 7.007 0 0 0-1.62-.94L14.4 2.81a.5.5 0 0 0-.5-.31h-3.8a.5.5 0 0 0-.5.31l-.38 2.54a7.007 7.007 0 0 0-1.62.94l-2.39-.96a.5.5 0 0 0-.6.22L2.69 8.87a.5.5 0 0 0.12.61l2.03 1.58c-.05.3-.07.61-.07.94s.02.64.07.94L2.81 14.52a.5.5 0 0 0-.12.61l1.92 3.32c.12.21.37.31.6.22l2.39-.96c.5.38 1.04.7 1.62.94l.38 2.54c.04.24.41.5.41h3.8c.26 0.46-.17.5-.41l.38-2.54a7.007 7.007 0 0 0 1.62-.94l2.39.96c.22.09.48-.01.6-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z',
  area:'M3 3h18v18H3z M7 7h10v10H7z',
  mat:'M4 6h16v2H4z M4 11h16v2H4z M4 16h16v2H4z',
  report:'M14 2H6c-1.1 0-2.9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z M14 2v6h6 M10 12H8v4h2v-4z M14 12h-2v6h2v-6z M18 12h-2v3h2v-3z',
  save:'M17 3H5c-1.1 0-2.9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4z M12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z M15 3v4H8',
};
const Icon = ({ path, size=18[STRIPPED 47 bytes]"0 0 24 24" fill="currentColor"><path d={path}/></svg>;

function safeParse(json, fallback) { try { return JSON.parse(json); } catch { return fallback; } }

export default function Calculator() {
  const { t } = useLanguage();

  const [project, setProject] = useState(() => ({
    name: "My House",
    constructionType: "standard",
    floors: 1,
    state: "Not selected",
    currency: "INR",
    area: 1000,
    areaUnit: "sq ft",
    ratePerSqft: 1800,
    mode: "both",
    wastagePct: 5,
    labourPct: 12,
    transportPct: 2,
    useExtra: true,
    otherCost: 0,
    contingencyPct: 5,
    taxPct: 5,
    labour: { mason: { qty:0, rate:800 }, helper:{ qty:0, rate:500 }, electrician:{ qty:0, rate:700 }, plumber:{ qty:0, rate:700 }, carpenter:{ qty:0, rate:750 }, painter:{ qty:0, rate:600 }, welder:{ qty:0, rate:700 }, tileMason:{ qty:0, rate:750 } },
  }));

  const [materials, setMaterials] = useState(() => [
    { name:"Cement", brand:"", size:"", unit:"Bag", qty:400, rate:500 },
    { name:"TMT Steel Bars", brand:"", size:"10 mm", unit:"Kg", qty:4000, rate:68 },
    { name:"Sand", brand:"", size:"", unit:"CFT", qty:1200, rate:65 },
    { name:"Bricks", brand:"", size:"", unit:"Nos", qty:8000, rate:9 },
  ]);

  const [matQuery, setMatQuery] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const [saved, setSaved] = useState(false);
  const [scriptsReady, setScriptsReady] = useState({ html2canvas:false, jspdf:false, xlsx:false });
  const [pendingDownload, setPendingDownload] = useState(null);
  const [adSeconds, setAdSeconds] = useState(5);
  const printRef = useRef(null);

  useEffect(() => {
    const ls = localStorage.getItem(LS_KEY);
    if (ls) {
      const p = safeParse(ls, null);
      if (p?.project) setProject(p.project);
      if (p?.materials) setMaterials(p.materials);
    }
    const lp = localStorage.getItem(LS_PROJECTS_KEY);
    if (lp) setSavedProjects(safeParse(lp, []));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify({ project, materials }));
  }, [project, materials]);

  useEffect(() => {
    if (!pendingDownload) return;
    if (adSeconds <= 0) return;
    const id = setTimeout(() => setAdSeconds(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [pendingDownload, adSeconds]);

  useEffect(() => {
    if (!pendingDownload) return;
    // load ad after modal is in DOM
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, [pendingDownload]);

  const filteredMaterials = useMemo(() => {
    const q = matQuery.trim().toLowerCase();
    if (!q) return MATERIAL_SUGGESTIONS;
    return MATERIAL_SUGGESTIONS.filter(m => m.toLowerCase().includes(q));
  }, [matQuery]);

  const addMaterial = (name) => {
    const n = (name || matQuery || "").trim();
    if (!n) return;
    const unit = MATERIAL_UNIT_MAP[n] || "Nos";
    const rate = suggestedRate(n, project.state)?? 0;
    setMaterials(m => [...m, { name:n, brand:"", size:"", unit, qty:1, rate }]);
    setMatQuery("");
  };

  const updateMaterial = (idx, patch) => setMaterials(m => m.map((row,i) => i===idx? {...row,...patch } : row));
  const removeMaterial = (idx) => setMaterials(m => m.filter((_,i) => i!==idx));

  const updateProject = (patch) => setProject(p => ({...p,...patch }));
  const updateLabour = (key, field, value) => setProject(p => ({...p, labour: {...p.labour, [key]: {...p.labour[key], [field]: Number(value)||0 } } }));

  const areaSqFt = useMemo(() => {
    const a = Number(project.area)||0;
    if (project.areaUnit==="sq ft") return a;
    if (project.areaUnit==="sq m") return a * 10.7639;
    if (project.areaUnit==="sq yd") return a * 9;
    return a;
  }, [project.area, project.areaUnit]);

  const currentTier = useMemo(() => CONSTRUCTION_TYPES.find(ct => ct.key===project.constructionType) || CONSTRUCTION_TYPES[1], [project.constructionType]);
  const locationMultiplier = STATE_MULTIPLIERS[project.state]?? 1;

  const autoMaterialTotals = useMemo(() => {
    let totalQty = {};
    const floors = Number(project.floors)||1;
    const tierFactor = currentTier.factor;
    Object.entries(THUMB_RULES).forEach(([mat, perSqFt]) => {
      totalQty[mat] = areaSqFt * perSqFt * floors * tierFactor;
    });
    return totalQty;
  }, [areaSqFt, project.floors, currentTier]);

  useEffect(() => {
    // auto-fill qty if area changes and material is one of the thumb-rule ones
    setMaterials(prev => prev.map(row => {
      if (THUMB_RULES[row.name]!= null) {
        const newQty = autoMaterialTotals[row.name];
        if (newQty) return {...row, qty: Math.round(newQty) };
      }
      return row;
    }));
  }, [autoMaterialTotals]);

  const materialComponent = useMemo(() => materials.reduce((s,m) => s + (Number(m.qty)||0)*(Number(m.rate)||0), 0), [materials]);
  const areaComponent = useMemo(() => areaSqFt * (Number(project.ratePerSqft)||0) * (Number(project.floors)||1), [areaSqFt, project.ratePerSqft, project.floors]);

  const baseForExtras = useMemo(() => {
    if (project.mode==="area") return areaComponent;
    if (project.mode==="boq") return materialComponent;
    return areaComponent + materialComponent;
  }, [project.mode, areaComponent, materialComponent]);

  const wastageCost = baseForExtras * (Number(project.wastagePct)||0) / 100;
  const labourCostFromPct = baseForExtras * (Number(project.labourPct)||0) / 100;
  const labourCostFromBreakup = useMemo(() => Object.values(project.labour).reduce((s,l) => s + (Number(l.qty)||0)*(Number(l.rate)||0), 0), [project.labour]);
  const labourCost = labourCostFromBreakup > 0? labourCostFromBreakup : labourCostFromPct;
  const transportCost = baseForExtras * (Number(project.transportPct)||0) / 100;
  const otherCost = Number(project.otherCost)||0;
  const subtotalBeforeCont = baseForExtras + wastageCost + labourCost + transportCost + otherCost;
  const contingency = subtotalBeforeCont * (Number(project.contingencyPct)||0) / 100;
  const tax = (subtotalBeforeCont + contingency) * (Number(project.taxPct)||0) / 100;
  const locationAdjustment = (subtotalBeforeCont + contingency + tax) * (locationMultiplier - 1);
  const grandTotal = subtotalBeforeCont + contingency + tax + locationAdjustment;
  const useExtra = project.useExtra;

  const pieSlices = useMemo(() => {
    const items = [];
    if (project.mode!=="boq") items.push({ label:t("pd_mode_area"), value: areaComponent });
    if (project.mode!=="area") items.push({ label:t("boq_subtotal"), value: materialComponent });
    if (wastageCost>0) items.push({ label:t("bd_wastage"), value: wastageCost });
    if (labourCost>0) items.push({ label:t("bd_labour"), value: labourCost });
    if (transportCost>0) items.push({ label:t("bd_transport"), value: transportCost });
    if (useExtra && otherCost>0) items.push({ label:t("bd_other"), value: otherCost });
    if (useExtra && contingency>0) items.push({ label:t("bd_contingency"), value: contingency });
    if (useExtra && tax>0) items.push({ label:t("bd_tax"), value: tax });
    if (locationMultiplier!==1) items.push({ label:`Location (${project.state})`, value: locationAdjustment });
    const total = items.reduce((s,i)=>s+i.value,0) || 1;
    const colors = ["#1E3A5F","#F97316","#22c55e","#a855f7","#06b6d4","#f59e0b","#ef4444","#8b5cf6","#10b981","#eab308"];
    let acc = 0;
    return items.map((it, idx) => {
      const pct = (it.value/total)*100;
      const slice = {...it, pct, color: colors[idx % colors.length], start: acc };
      acc += pct;
      return slice;
    });
  }, [project.mode, areaComponent, materialComponent, wastageCost, labourCost, transportCost, otherCost, contingency, tax, locationAdjustment, locationMultiplier, project.state, t, useExtra]);

  const pieGradient = useMemo(() => {
    if (!pieSlices.length) return "";
    let g = "conic-gradient(";
    pieSlices.forEach(s => {
      g += `${s.color} ${s.start}% ${s.start + s.pct}%,`;
    });
    return g.slice(0,-1) + ")";
  }, [pieSlices]);

  const ganttData = useMemo(() => {
    const totalDays = 180;
    const tasks = [
      { label:"Foundation", start:0, dur:20 },
      { label:"Structure / Columns", start:15, dur:45 },
      { label:"Brickwork", start:40, dur:35 },
      { label:"Plastering", start:70, dur:25 },
      { label:"Flooring", start:95, dur:25 },
      { label:"Electrical & Plumbing", start:90, dur:40 },
      { label:"Painting", start:125, dur:20 },
      { label:"Finishing", start:140, dur:35 },
    ];
    return { totalDays, tasks };
  }, []);

  const saveEstimate = () => {
    const id = Date.now().toString(36);
    const entry = { id, name: project.name, savedAt: new Date().toISOString(), project, materials, grandTotal };
    const next = [entry,...savedProjects].slice(0,20);
    setSavedProjects(next);
    localStorage.setItem(LS_PROJECTS_KEY, JSON.stringify(next));
    setSaved(true);
    setTimeout(()=>setSaved(false),2000);
  };
  const loadProject = (p) => {
    setProject(p.project);
    setMaterials(p.materials);
    window.scrollTo({ top:0, behavior:"smooth" });
  };
  const deleteProject = (id) => {
    const next = savedProjects.filter(p=>p.id!==id);
    setSavedProjects(next);
    localStorage.setItem(LS_PROJECTS_KEY, JSON.stringify(next));
  };

  const requestDownload = (type) => {
    setAdSeconds(5);
    setPendingDownload(type);
  };
  const cancelDownload = () => setPendingDownload(null);
  const confirmDownload = async () => {
    const type = pendingDownload;
    setPendingDownload(null);
    if (type==="jpg" || type==="pdf") await doImagePdf(type);
    else if (type==="excel") doExcel();
  };

  const doImagePdf = async (type) => {
    const el = printRef.current;
    if (!el ||!window.html2canvas) return;
    const canvas = await window.html2canvas(el, { scale:2, backgroundColor:"#ffffff" });
    if (type==="jpg") {
      const link = document.createElement("a");
      link.download = `${project.name.replace(/\s+/g,"_")}_estimate.jpg`;
      link.href = canvas.toDataURL("image/jpeg", 0.92);
      link.click();
    } else {
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation:"portrait", unit:"mm", format:"a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW;
      const imgH = (canvas.height * imgW) / canvas.width;
      let y = 0;
      let remaining = imgH;
      while (remaining > 0) {
        pdf.addImage(imgData, "JPEG", 0, y, imgW, imgH);
        remaining -= pageH;
        if (remaining > 0) { pdf.addPage(); y = - (imgH - remaining); }
        else break;
      }
      pdf.save(`${project.name.replace(/\s+/g,"_")}_estimate.pdf`);
    }
  };

  const doExcel = () => {
    if (!window.XLSX) return;
    const rows = [
      ["BuildNaro —", t("calc_title")],
      [t("print_prepared_for"), project.name],
      [t("print_generated_on"), new Date().toLocaleDateString()],
      [],
      [t("th_material"), t("th_brand"), t("th_spec"), t("th_unit"), t("th_qty"), t("th_rate"), t("th_amount")],
     ...materials.filter(m=>m.name).map(m=>[m.name, m.brand||"-", m.size||"-", m.unit, m.qty, m.rate, (Number(m.qty)||0)*(Number(m.rate)||0)]),
      [],
     ...(project.mode==="area"||project.mode==="both"? [[t("pd_mode_area"), "", "", "", "", "", areaComponent]] : []),
     ...(project.mode==="boq"||project.mode==="both"? [[t("boq_subtotal"), "", "", "", "", "", materialComponent]] : []),
     ...(wastageCost>0? [[t("bd_wastage"), "", "", "", "", "", wastageCost]] : []),
     ...(labourCost>0? [[t("bd_labour"), "", "", "", "", "", labourCost]] : []),
     ...(transportCost>0? [[t("bd_transport"), "", "", "", "", "", transportCost]] : []),
     ...(useExtra? [[t("bd_other"), "", "", "", "", "", otherCost]] : []),
     ...(useExtra? [[t("bd_contingency"), "", "", "", "", "", contingency]] : []),
     ...(useExtra? [[t("bd_tax"), "", "", "", "", "", tax]] : []),
      [t("bd_grand"), "", "", "", "", "", grandTotal],
    ];
    const ws = window.XLSX.utils.aoa_to_sheet(rows);
    const wb = window.XLSX.utils.book_new();
    window.XLSX.utils.book_append_sheet(wb, ws, "Estimate");
    window.XLSX.writeFile(wb, `${project.name.replace(/\s+/g,"_")}_estimate.xlsx`);
  };

  return <main>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s, html2canvas:true}))} />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s, jspdf:true}))} />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js" strategy="afterInteractive" onLoad={()=>setScriptsReady(s=>({...s, xlsx:true}))} />
    <Script id="adsbygoogle-init" strategy="afterInteractive">{`(adsbygoogle = window.adsbygoogle || []).push({});`}</Script>

    <div className="topbar">
      <a href="/" className="brand">Build<span>Naro</span></a>
      <a href="/">{t("nav_home")}</a>
      <a href="/construction-estimate-calculator" style={{fontWeight:800, color:"#172033"}}>{t("calc_title")}</a>
      <LanguageSwitcher />
    </div>

    <div className="hero">
      <div className="eyebrow">{t("calc_eyebrow")}</div>
      <h1>{t("calc_title")}</h1>
      <p>{t("calc_desc")}</p>
    </div>

    <section className="wrap">
      <div className="grid">
        <div>
          <div className="card">
            <h2><Icon path={ICONS.proj}/> {t("pd_title")}</h2>
            <div className="form-grid">
              <label>{t("pd_name")}<input value={project.name} onChange={e=>updateProject({ name:e.target.value })} /></label>
              <label>{t("pd_type")}<select value={project.constructionType} onChange={e=>{
                const ct = CONSTRUCTION_TYPES.find(c=>c.key===e.target.value);
                updateProject({ constructionType:e.target.value, ratePerSqft: ct?.ratePerSqft || project.ratePerSqft });
              }}>{CONSTRUCTION_TYPES.map(c=><option key={c.key} value={c.key}>{t(`type_${c.key}`)} — ₹{c.ratePerSqft}/sq ft</option>)}</select></label>
              <label>{t("pd_floors")}<input type="number" min={1} value={project.floors} onChange={e=>updateProject({ floors:e.target.value })} /></label>
              <label>{t("pd_state")}<select value={project.state} onChange={e=>updateProject({ state:e.target.value })}>{Object.keys(STATE_MULTIPLIERS).map(s=><option key={s} value={s}>{s}</option>)}</select><span className="field-note">{locationMultiplier!==1? `Rate factor ${locationMultiplier}x for ${project.state}` : t("state_note")}</span></label>
              <label>{t("pd_currency")}<select value={project.currency} onChange={e=>updateProject({ currency:e.target.value })}>{CURRENCIES.map(c=><option key={c} value={c}>{c}</option>)}</select></label>
              <label>{t("pd_mode")}<select value={project.mode} onChange={e=>updateProject({ mode:e.target.value })}><option value="area">{t("pd_mode_area")}</option><option value="boq">{t("pd_mode_boq")}</option><option value="both">{t("pd_mode_both")}</option></select></label>
            </div>
          </div>

          <div className="card">
            <h2><Icon path={ICONS.area}/> {t("area_title")}</h2>
            <div className="form-grid">
              <label>{t("area_label")}<input type="number" value={project.area} onChange={e=>updateProject({ area:e.target.value })} /></label>
              <label>{t("area_unit")}<select value={project.areaUnit} onChange={e=>updateProject({ areaUnit:e.target.value })}>{AREA_UNITS.map(u=><option key={u} value={u}>{u}</option>)}</select></label>
              <label className="full">{t("rate_per_sqft")}<input type="number" value={project.ratePerSqft} onChange={e=>updateProject({ ratePerSqft:e.target.value })} /><span className="field-note">{t("rate_note")}</span></label>
            </div>
            <div className="perarea">{money(areaComponent, project.currency)} total for area mode</div>
          </div>

          <div className="card">
            <div className="section-head"><div><h2><Icon path={ICONS.mat}/> {t("mat_title")}</h2><p>{t("mat_desc")}</p></div>
              <div className="material-tools">
                <input className="material-search" value={matQuery} onChange={e=>setMatQuery(e.target.value)} placeholder={t("mat_search_placeholder")} list="mat-suggestions" onKeyDown={e=>{ if(e.key==="Enter"){ e.preventDefault(); addMaterial(); }}} />
                <datalist id="mat-suggestions">{filteredMaterials.map(m=><option key={m} value={m} />)}</datalist>
                <button type="button" onClick={()=>addMaterial()}>{t("mat_add")}</button>
                <span>{filteredMaterials.length} suggestions</span>
              </div>
            </div>

            <div className="table-wrap"><table><thead><tr><th>{t("th_material")}</th><th>{t("th_brand")}</th><th>{t("th_spec")}</th><th>{t("th_unit")}</th><th>{t("th_qty")}</th><th>{t("th_rate")}</th><th>{t("th_amount")}</th><th></th></tr></thead>
            <tbody>{materials.map((m,i)=><tr key={i}>
              <td className="mat-row-name"><input value={m.name} onChange={e=>{
                const newName = e.target.value;
                const newUnit = MATERIAL_UNIT_MAP[newName] || m.unit;
                const newRate = suggestedRate(newName, project.state)?? m.rate;
                updateMaterial(i, { name:newName, unit:newUnit, rate:newRate });
              }} list="mat-suggestions" /><span className="rate-source">{suggestedRate(m.name, project.state)? `Suggested ₹${suggestedRate(m.name, project.state)}` : ""}</span></td>
              <td><input value={m.brand} onChange={e=>updateMaterial(i,{ brand:e.target.value })} placeholder="Brand" list={`brand-${i}`} /><datalist id={`brand-${i}`}>{(MATERIAL_BRAND_MAP[m.name]||GENERIC_BRANDS).map(b=><option key={b} value={b} />)}</datalist></td>
              <td><input value={m.size} onChange={e=>updateMaterial(i,{ size:e.target.value })} placeholder="Size/spec" list={`size-${i}`} /><datalist id={`size-${i}`}>{getSizeOptions(m.name).map(s=><option key={s} value={s} />)}</datalist></td>
              <td><select value={m.unit} onChange={e=>updateMaterial(i,{ unit:e.target.value })}>{getUnitOptions(m.name).map(u=><option key={u} value={u}>{u}</option>)}<option value="__other">{t("unit_other")}</option></select>{m.unit==="__other" && <input placeholder="Custom unit" onChange={e=>updateMaterial(i,{ unit:e.target.value })} />}</td>
              <td><input type="number" value={m.qty} onChange={e=>updateMaterial(i,{ qty:e.target.value })} /></td>
              <td><input type="number" value={m.rate} onChange={e=>updateMaterial(i,{ rate:e.target.value })} /></td>
              <td className="amount">{money((Number(m.qty)||0)*(Number(m.rate)||0), project.currency)}</td>
              <td><button type="button" className="delete" onClick={()=>removeMaterial(i)}>×</button></td>
            </tr>)}</tbody>
            <tfoot><tr><td colSpan={6} className="boq-total-label">{t("boq_total")}</td><td className="amount">{money(materialComponent, project.currency)}</td><td></td></tr></tfoot>
            </table></div>
            <p className="helper">{t("mat_helper")}</p>
          </div>

          <div className="card">
            <h2><Icon path={ICONS.settings}/> {t("extra_title")}</h2>
            <label className="toggle-row top-toggle"><input type="checkbox" checked={project.useExtra} onChange={e=>updateProject({ useExtra:e.target.checked })} /> {t("extra_toggle")}</label>
            <div className="form-grid" style={{marginTop:12}}>
              <label>{t("wastage_pct")}<input type="number" value={project.wastagePct} onChange={e=>updateProject({ wastagePct:e.target.value })} disabled={!useExtra} /></label>
              <label>{t("labour_pct")}<input type="number" value={project.labourPct} onChange={e=>updateProject({ labourPct:e.target.value })} disabled={!useExtra} /></label>
              <label>{t("transport_pct")}<input type="number" value={project.transportPct} onChange={e=>updateProject({ transportPct:e.target.value })} disabled={!useExtra} /></label>
              <label>{t("other_cost")}<input type="number" value={project.otherCost} onChange={e=>updateProject({ otherCost:e.target.value })} disabled={!useExtra} /></label>
              <label>{t("contingency_pct")}<input type="number" value={project.contingencyPct} onChange={e=>updateProject({ contingencyPct:e.target.value })} disabled={!useExtra} /></label>
              <label>{t("tax_pct")}<input type="number" value={project.taxPct} onChange={e=>updateProject({ taxPct:e.target.value })} disabled={!useExtra} /></label>
            </div>

            <div className="labour-block">
              <h3 style={{fontSize:14, margin:"12px 0 6px"}}>{t("labour_breakup_title")}</h3>
              <p className="field-note" style={{marginTop:0}}>{t("labour_breakup_desc")}</p>
              <div className="sub-grid">
                {Object.entries(project.labour).map(([key, val])=><label key={key}>{t(`labour_${key}`) || key}<input type="number" placeholder="Qty (days)" value={val.qty} onChange={e=>updateLabour(key,"qty",e.target.value)} /><input type="number" placeholder="Rate/day" value={val.rate} onChange={e=>updateLabour(key,"rate",e.target.value)} /></label>)}
              </div>
            </div>
          </div>

          <div className="card">
            <h2>📅 {t("gantt_title")}</h2>
            <p className="field-note" style={{marginTop:-10}}>{t("gantt_desc")}</p>
            <div className="gantt">
              {ganttData.tasks.map((task, idx)=>{
                const left = (task.start / ganttData.totalDays) * 100;
                const width = (task.dur / ganttData.totalDays) * 100;
                const colors = ["#1E3A5F","#F97316","#22c55e","#a855f7","#06b6d4","#f59e0b","#ef4444","#8b5cf6"];
                return <div key={idx} className="gantt-row">
                  <div className="gantt-label">{task.label}</div>
                  <div className="gantt-track"><div className="gantt-bar" style={{ left:`${left}%`, width:`${width}%`, background: colors[idx % colors.length] }} /></div>
                  <div className="gantt-meta">{task.start}d → {task.start + task.dur}d</div>
                </div>;
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="card summary">
            <h2><Icon path={ICONS.report}/> {t("bd_title")}</h2>
            <div className="summary-main">{money(grandTotal, project.currency)}</div>
            <p>{t("bd_for")} {project.name} · {areaSqFt.toFixed(0)} sq ft · {project.floors} {t("bd_floors")}</p>
            <div style={{marginTop:12}}><span className="mini">{t(`type_${project.constructionType}`)}</span><span className="mini">{project.state}</span><span className="mini">{project.area} {project.areaUnit}</span></div>

            <div className="breakdown" style={{marginTop:22}}>
              {pieSlices.length>0 && <div className="pie-wrap">
                <div className="pie-chart" style={{ background: pieGradient }} />
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
            {savedProjects.length===0? <p className="field-note">No saved projects yet. Use "Save" below to keep this estimate.</p> : (
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
        </div>
      </div>
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
               data-ad-slot="4119610307"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <button className="ad-modal-continue" disabled={adSeconds > 0} onClick={confirmDownload}>
            {adSeconds > 0? `Please wait… (${adSeconds})` : "Continue to Download"}
          </button>
        </div>
      </div>
    )}
  </main>;
}
