'use client';

import { useMemo, useRef, useState } from "react";
import Script from "next/script";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

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
const ROD_SIZES = ["6 mm","8 mm","10 mm","12 mm","16 mm","20 mm","25 mm","32 mm"];
const isRodLike = (name) => /rod|steel|tmt|bar/i.test(name || "");

const UNITS = [
  "Bag","Kg","Ton","Quintal","Litre","Gallon","CFT","Cubic Meter (m³)","Sq ft","Sq m","Sq yd",
  "Running ft","Running meter","Nos","Set","Roll","Sheet","Box","Bundle","Meter","Point",
  "Dozen","Pair","Trip","Load","Hour","Day","Inch","mm","Unit"
];

const money = (value, currency) => new Intl.NumberFormat("en-IN", { style:"currency", currency, maximumFractionDigits:2 }).format(Number(value)||0);

export default function Calculator() {
  const { t } = useLanguage();
  const printRef = useRef(null);
  const [scriptsReady, setScriptsReady] = useState({ html2canvas:false, jspdf:false, xlsx:false });

  const [project, setProject] = useState({
    name:"My Construction Project", currency:"INR",
    mode:"boq", area:1000, areaUnit:"sq ft", rate:1800,
    useAdditionalCosts:false, wastage:0, other:0, tax:0, contingency:0,
    includeLabour:false, labourType:"contract", contractAmount:0, contractDays:"",
    leadCount:0, helperCount:0, leadRate:0, helperRate:0, workDays:0,
    includeTransport:false, transport:0,
  });
  const [materials, setMaterials] = useState([
    { name:"Cement", brand:"", size:"", unit:"Bag", qty:0, rate:500 },
    { name:"Sand", brand:"", size:"", unit:"CFT", qty:0, rate:65 },
    { name:"Bricks", brand:"", size:"", unit:"Nos", qty:0, rate:9 },
    { name:"TMT Steel Bars", brand:"", size:"", unit:"Kg", qty:0, rate:68 },
  ]);
  const [saved,setSaved]=useState(false);

  const materialSubtotal = useMemo(()=>materials.reduce((s,m)=>s+(Number(m.qty)||0)*(Number(m.rate)||0),0),[materials]);
  const areaComponent = (project.mode==="area"||project.mode==="both") ? (Number(project.area)||0)*(Number(project.rate)||0) : 0;
  const materialComponent = (project.mode==="boq"||project.mode==="both") ? materialSubtotal : 0;
  const combinedBase = areaComponent + materialComponent;

  const useExtra = project.useAdditionalCosts;
  const wastageCost = useExtra && (project.mode==="boq"||project.mode==="both") ? materialComponent*(Number(project.wastage||0)/100) : 0;
  const subtotalAfterWastage = combinedBase + wastageCost;

  const labourCost = useExtra && project.includeLabour ? (
    project.labourType==="contract"
      ? (Number(project.contractAmount)||0)
      : ((Number(project.leadCount)||0)*(Number(project.leadRate)||0) + (Number(project.helperCount)||0)*(Number(project.helperRate)||0)) * (Number(project.workDays)||0)
  ) : 0;
  const transportCost = useExtra && project.includeTransport ? (Number(project.transport)||0) : 0;
  const otherCost = useExtra ? subtotalAfterWastage*(Number(project.other||0)/100) : 0;
  const contingency = useExtra ? subtotalAfterWastage*(Number(project.contingency||0)/100) : 0;
  const taxable = subtotalAfterWastage+labourCost+transportCost+otherCost+contingency;
  const tax = useExtra ? taxable*(Number(project.tax||0)/100) : 0;
  const grandTotal = taxable+tax;

  const updateProject=(key,value)=>setProject(p=>({...p,[key]:value}));
  const setMaterialName=(i,value)=>setMaterials(list=>list.map((m,idx)=>{
    if(idx!==i) return m;
    const unit = MATERIAL_UNIT_MAP[value] || m.unit;
    return {...m,name:value,unit};
  }));
  const updateMaterial=(i,key,value)=>setMaterials(list=>list.map((m,idx)=>idx===i?{...m,[key]:value}:m));
  const addMaterial=()=>setMaterials(l=>[...l,{name:"",brand:"",size:"",unit:"Unit",qty:0,rate:0}]);
  const removeMaterial=i=>setMaterials(l=>l.filter((_,idx)=>idx!==i));
  const saveEstimate=()=>{localStorage.setItem("buildnaro-estimate",JSON.stringify({project,materials,materialSubtotal,grandTotal,savedAt:new Date().toISOString()}));setSaved(true);setTimeout(()=>setSaved(false),2000)};

  // ---- Downloads ----
  const buildRows = () => {
    const rows = [[t("th_material"), t("th_brand"), t("th_spec"), t("th_unit"), t("th_qty"), t("th_rate"), t("th_amount")]];
    materials.forEach(m => rows.push([m.name||"-", m.brand||"-", m.size||"-", m.unit, Number(m.qty)||0, Number(m.rate)||0, (Number(m.qty)||0)*(Number(m.rate)||0)]));
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
        <div className="card"><h2>{t("pd_heading")}</h2><div className="form-grid">
          <label className="full">{t("pd_name")}<input value={project.name} onChange={e=>updateProject("name",e.target.value)}/></label>
        </div></div>

        <div className="card"><h2>{t("settings_heading")}</h2><div className="form-grid">
          <label>{t("pd_calc_mode")}<select value={project.mode} onChange={e=>updateProject("mode",e.target.value)}><option value="area">{t("pd_mode_area")}</option><option value="boq">{t("pd_mode_boq")}</option><option value="both">{t("pd_mode_both")}</option></select></label>
          {(project.mode==="area"||project.mode==="both")&&<>
            <label>{t("pd_area")}<input type="number" min="0" value={project.area} onChange={e=>updateProject("area",e.target.value)}/></label>
            <label>{t("pd_area_unit")}<select value={project.areaUnit} onChange={e=>updateProject("areaUnit",e.target.value)}><option>sq ft</option><option>sq m</option><option>sq yd</option></select></label>
            <label>{t("pd_rate")}<input type="number" min="0" value={project.rate} onChange={e=>updateProject("rate",e.target.value)}/></label>
          </>}
        </div></div>
      </div>

      <div className="card summary"><h2>{t("summary_heading")}</h2><div className="summary-main">{money(grandTotal,project.currency)}</div><p>{t("summary_total")}</p>
        {(project.mode==="area"||project.mode==="both")&&<div className="mini">{t("pd_mode_area")}: {money(areaComponent,project.currency)}</div>}
        {(project.mode==="boq"||project.mode==="both")&&<div className="mini">{t("summary_materials")}: {money(materialComponent,project.currency)}</div>}
      </div>

      <div className="card"><div className="section-head"><div><h2>{t("boq_heading")}</h2><p>{t("material_name_ph")}</p></div><button onClick={addMaterial}>{t("boq_add")}</button></div>
        <div className="table-wrap"><table><thead><tr><th>{t("th_material")}</th><th>{t("th_brand")}</th><th>{t("th_spec")}</th><th>{t("th_unit")}</th><th>{t("th_qty")}</th><th>{t("th_rate")}</th><th>{t("th_amount")}</th><th></th></tr></thead><tbody>
        {materials.map((m,i)=>{
          const amount=(Number(m.qty)||0)*(Number(m.rate)||0);
          const brandKey = Object.keys(MATERIAL_BRAND_MAP).find(k=>(m.name||"").toLowerCase().includes(k.toLowerCase()));
          const brandOptions = brandKey ? MATERIAL_BRAND_MAP[brandKey] : GENERIC_BRANDS;
          const sizeOptions = isRodLike(m.name) ? ROD_SIZES : [];
          return <tr key={i}>
          <td className="mat-row-name"><input list="material-suggestions" value={m.name} placeholder={t("material_name_ph")} onChange={e=>setMaterialName(i,e.target.value)}/></td>
          <td><input list={`brand-list-${i}`} value={m.brand} placeholder={t("brand_ph")} onChange={e=>updateMaterial(i,"brand",e.target.value)}/>
            <datalist id={`brand-list-${i}`}>{brandOptions.map(b=><option key={b} value={b}/>)}</datalist>
          </td>
          <td><input list={`size-list-${i}`} value={m.size} placeholder={t("size_ph")} onChange={e=>updateMaterial(i,"size",e.target.value)}/>
            <datalist id={`size-list-${i}`}>{sizeOptions.map(s=><option key={s} value={s}/>)}</datalist>
          </td>
          <td><select value={m.unit} onChange={e=>updateMaterial(i,"unit",e.target.value)}>{UNITS.map(x=><option key={x}>{x}</option>)}</select></td>
          <td><input type="number" min="0" step="any" value={m.qty} onChange={e=>updateMaterial(i,"qty",e.target.value)}/></td>
          <td><input type="number" min="0" step="any" value={m.rate} onChange={e=>updateMaterial(i,"rate",e.target.value)}/></td>
          <td className="amount">{money(amount,project.currency)}</td><td><button className="delete" aria-label="Remove" onClick={()=>removeMaterial(i)}>×</button></td>
        </tr>})}</tbody><tfoot><tr><td colSpan="6" className="boq-total-label">{t("boq_subtotal")}</td><td className="amount">{money(materialSubtotal,project.currency)}</td><td></td></tr></tfoot></table></div>
      </div>

      <div className="grid">
        <div className="card">
          <div className="toggle-row top-toggle"><input type="checkbox" checked={project.useAdditionalCosts} onChange={e=>updateProject("useAdditionalCosts",e.target.checked)}/> <b>{t("toggle_additional_costs")}</b></div>
          {project.useAdditionalCosts && <div className="form-grid" style={{marginTop:14}}>
            {(project.mode==="boq"||project.mode==="both")&&<label>{t("extra_wastage")}<input type="number" min="0" step="any" value={project.wastage} onChange={e=>updateProject("wastage",e.target.value)}/></label>}
            <label>{t("extra_other")}<input type="number" min="0" step="any" value={project.other} onChange={e=>updateProject("other",e.target.value)}/></label>
            <label>{t("extra_tax")}<input type="number" min="0" step="any" value={project.tax} onChange={e=>updateProject("tax",e.target.value)}/></label>
            <label>{t("extra_contingency")}<input type="number" min="0" step="any" value={project.contingency} onChange={e=>updateProject("contingency",e.target.value)}/></label>

            <div className="full toggle-row"><input type="checkbox" checked={project.includeTransport} onChange={e=>updateProject("includeTransport",e.target.checked)}/> {t("toggle_transport")}</div>
            {project.includeTransport&&<label className="full">{t("extra_transport")}<input type="number" min="0" step="any" value={project.transport} onChange={e=>updateProject("transport",e.target.value)}/></label>}

            <div className="full toggle-row"><input type="checkbox" checked={project.includeLabour} onChange={e=>updateProject("includeLabour",e.target.checked)}/> {t("toggle_labour")}</div>
            {project.includeLabour && <div className="full labour-block">
              <label>{t("labour_type")}<select value={project.labourType} onChange={e=>updateProject("labourType",e.target.value)}><option value="contract">{t("labour_contract")}</option><option value="day">{t("labour_dayside")}</option></select></label>
              {project.labourType==="contract" ? <div className="sub-grid">
                <label>{t("contract_amount")}<input type="number" min="0" value={project.contractAmount} onChange={e=>updateProject("contractAmount",e.target.value)}/></label>
                <label>{t("contract_days")}<input type="number" min="0" value={project.contractDays} onChange={e=>updateProject("contractDays",e.target.value)}/></label>
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

        <div className="card breakdown"><h2>{t("bd_heading")}</h2>
          {(project.mode==="area"||project.mode==="both")&&<div className="row"><span>{t("pd_mode_area")}</span><b>{money(areaComponent,project.currency)}</b></div>}
          {(project.mode==="boq"||project.mode==="both")&&<div className="row"><span>{t("boq_subtotal")}</span><b>{money(materialComponent,project.currency)}</b></div>}
          {wastageCost>0&&<div className="row"><span>{t("bd_wastage")}</span><b>{money(wastageCost,project.currency)}</b></div>}
          {labourCost>0&&<div className="row"><span>{t("bd_labour")}</span><b>{money(labourCost,project.currency)}</b></div>}
          {transportCost>0&&<div className="row"><span>{t("bd_transport")}</span><b>{money(transportCost,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_other")}</span><b>{money(otherCost,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_contingency")}</span><b>{money(contingency,project.currency)}</b></div>}
          {useExtra&&<div className="row"><span>{t("bd_tax")}</span><b>{money(tax,project.currency)}</b></div>}
          <div className="row grand"><span>{t("bd_grand")}</span><b>{money(grandTotal,project.currency)}</b></div>
        </div>
      </div>

      <div className="card download-card">
        <div><h2 style={{margin:"0 0 4px"}}>{t("download_heading")}</h2><p style={{margin:0,fontSize:13,color:"#718096"}}>A4 · JPG / Excel / PDF</p></div>
        <div className="download-buttons">
          <button className="jpg" disabled={!scriptsReady.html2canvas} onClick={downloadJPG}>{t("download_jpg")}</button>
          <button className="excel" disabled={!scriptsReady.xlsx} onClick={downloadExcel}>{t("download_excel")}</button>
          <button className="pdf" disabled={!scriptsReady.html2canvas||!scriptsReady.jspdf} onClick={downloadPDF}>{t("download_pdf")}</button>
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
  </main>;
}
