"use client";
import { useState, useMemo, useRef } from "react";

const materialsDB = {
  Cement: { brands: [{name:"UltraTech", rate:500}, {name:"ACC", rate:480}, {name:"Ambuja", rate:490}, {name:"Birla", rate:470}], units:["Bag"] },
  Sand: { brands: [{name:"River Sand", rate:65}, {name:"M-Sand", rate:70}, {name:"Local", rate:55}], units:["CFT","Ton","Truck"] },
  Bricks: { brands: [{name:"Red Clay", rate:9}, {name:"Fly Ash", rate:8}, {name:"AAC Block", rate:45}], units:["Nos"] },
  "TMT Steel": { brands: [{name:"Tata Tiscon", rate:68}, {name:"JSW Neosteel", rate:66}, {name:"SAIL", rate:64}], units:["Kg","Ton"] },
  Tiles: { brands: [{name:"Kajaria", rate:45}, {name:"Somany", rate:42}, {name:"Johnson", rate:50}], units:["Sqft","Box"] },
  Paint: { brands: [{name:"Asian Paints", rate:320}, {name:"Berger", rate:300}], units:["Ltr","Bucket"] },
};

export default function Page(){
  const [projectName, setProjectName] = useState("Green Valley Villa - G+1");
  const [location, setLocation] = useState("Kolkata, New Town");
  const [area, setArea] = useState(1200);
  const [areaRate, setAreaRate] = useState(1850);
  const [clientName, setClientName] = useState("");
  const [materials, setMaterials] = useState([
    {id:"1", material:"Cement", brand:"UltraTech", unit:"Bag", qty:180, rate:500},
    {id:"2", material:"TMT Steel", brand:"Tata Tiscon", unit:"Kg", qty:2500, rate:68},
    {id:"3", material:"Bricks", brand:"Red Clay", unit:"Nos", qty:15000, rate:9},
  ]);
  const [labourType, setLabourType] = useState("Daily Base");
  const [contractAmount, setContractAmount] = useState(275000);
  const [leadCount, setLeadCount] = useState(3); const [leadRate, setLeadRate] = useState(850);
  const [helperCount, setHelperCount] = useState(5); const [helperRate, setHelperRate] = useState(450);
  const [labourDays, setLabourDays] = useState(90);
  const [transport, setTransport] = useState(15000); const [electrical, setElectrical] = useState(35000);
  const [plumbingCost, setPlumbingCost] = useState(28000); const [waterproofing, setWaterproofing] = useState(18000);
  const [status, setStatus] = useState(""); const summaryRef = useRef(null);

  const areaEstimate = useMemo(()=> area && areaRate ? area*areaRate : 0, [area, areaRate]);
  const materialsTotal = useMemo(()=> materials.reduce((s,m)=>s+m.qty*m.rate,0), [materials]);
  const labourTotal = useMemo(()=> labourType==="By Contract" ? contractAmount : (leadCount*leadRate + helperCount*helperRate)*labourDays, [labourType, contractAmount, leadCount, leadRate, helperCount, helperRate, labourDays]);
  const additionalTotal = useMemo(()=> transport+electrical+plumbingCost+waterproofing, [transport, electrical, plumbingCost, waterproofing]);
  const grandTotal = materialsTotal + labourTotal + additionalTotal;
  const formatINR = (n)=> new Intl.NumberFormat("en-IN",{style:"currency", currency:"INR", maximumFractionDigits:0}).format(n);

  const handleMatChange = (id, newMat)=>{ const def=materialsDB[newMat]; setMaterials(prev=>prev.map(m=>m.id===id?{...m, material:newMat, brand:def.brands[0].name, unit:def.units[0], rate:def.brands[0].rate}:m)); };
  const handleBrandChange = (id, newBrand)=>{ const row=materials.find(m=>m.id===id); const def=materialsDB[row.material]; const b=def.brands.find(x=>x.name===newBrand); setMaterials(prev=>prev.map(m=>m.id===id?{...m, brand:newBrand, rate:b?b.rate:m.rate}:m)); };

  const downloadCSV = ()=>{
    let csv=`Project:,${projectName}\nLocation:,${location}\nArea:,${area} sqft x ${areaRate} = ${areaEstimate}\n\nMaterial,Brand,Unit,Qty,Rate,Amount\n`;
    materials.forEach(m=>{ csv+=`${m.material},${m.brand},${m.unit},${m.qty},${m.rate},${m.qty*m.rate}\n`; });
    csv+=`\nMaterials Total,,${materialsTotal}\nLabour (${labourType}),,${labourTotal}\nAdditional,,${additionalTotal}\nGRAND TOTAL,,${grandTotal}\n`;
    const blob=new Blob([csv],{type:"text/csv"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`${projectName.replace(/\s+/g,'_')}.csv`; a.click(); setStatus(`✓ Excel downloaded`);
    setTimeout(()=>setStatus(""),3000);
  };
  const downloadPDF = async ()=>{
    const jsPDF = (await import('jspdf')).jsPDF; const doc=new jsPDF();
    doc.text(`BuildNaro Estimate - ${projectName}`,10,15); doc.text(`Location: ${location} | Area: ${area} sqft x ${areaRate}`,10,22);
    let y=35; materials.forEach(m=>{ doc.text(`${m.material} (${m.brand}) - ${m.qty} ${m.unit} x ${m.rate} = ${m.qty*m.rate}`,10,y); y+=7; });
    y+=5; doc.text(`Materials: ${materialsTotal}`,10,y); y+=7; doc.text(`Labour (${labourType}): ${labourTotal}`,10,y); y+=7; doc.text(`Additional: ${additionalTotal}`,10,y); y+=10; doc.setFontSize(16); doc.text(`GRAND TOTAL: ${grandTotal}`,10,y);
    doc.save(`${projectName}.pdf`); setStatus("✓ PDF downloaded");
  };
  const downloadJPG = async ()=>{
    try{
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(summaryRef.current, {scale:2});
      const a=document.createElement("a"); a.href=canvas.toDataURL("image/jpeg",0.9); a.download=`${projectName}.jpg`; a.click(); setStatus("✓ JPG downloaded");
    }catch(e){ setStatus("JPG failed, use Excel/PDF"); }
  };

  return (
    <div style={{background:"#f3f5f8", minHeight:"100vh", padding:"16px", fontFamily:"Inter, system-ui"}}>
      <div style={{maxWidth:"1100px", margin:"0 auto"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", background:"white", padding:"14px 20px", borderRadius:"16px", marginBottom:"16px", border:"1px solid #e5e7eb"}}>
          <div style={{fontWeight:"800", fontSize:"22px"}}>Build<span style={{color:"#2563eb"}}>Naro</span> <span style={{fontSize:"11px", color:"#666", fontWeight:"600", marginLeft:"10px", borderLeft:"1px solid #ddd", paddingLeft:"10px"}}>HOUSE COST ESTIMATOR</span></div>
          <div style={{fontSize:"11px", background:"#f3f4f6", padding:"6px 12px", borderRadius:"20px"}}>● LIVE CALCULATOR</div>
        </div>

        {/* Project Details */}
        <div style={{background:"white", borderRadius:"20px", padding:"20px", marginBottom:"16px", border:"1px solid #e5e7eb"}}>
          <h3 style={{margin:"0 0 12px", fontSize:"14px", fontWeight:"700"}}>📍 Project Details</h3>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
            <input value={projectName} onChange={e=>setProjectName(e.target.value)} placeholder="Project Name" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <input value={clientName} onChange={e=>setClientName(e.target.value)} placeholder="Client Name (optional)" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <div style={{display:"flex", gap:"8px"}}>
              <input type="number" value={area} onChange={e=>setArea(Number(e.target.value))} placeholder="Area sqft" style={{flex:1, padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <input type="number" value={areaRate} onChange={e=>setAreaRate(Number(e.target.value))} placeholder="Rate/sqft" style={{flex:1, padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            </div>
          </div>
          {areaEstimate>0 && <div style={{marginTop:"10px", background:"#eff6ff", padding:"10px", borderRadius:"10px", fontSize:"13px", fontWeight:"600"}}>Area Estimate: {area} × ₹{areaRate} = {formatINR(areaEstimate)}</div>}
        </div>

        {/* Materials */}
        <div style={{background:"white", borderRadius:"20px", padding:"20px", marginBottom:"16px", border:"1px solid #e5e7eb"}}>
          <h3 style={{margin:"0 0 12px", fontWeight:"700"}}>🧱 Materials - Brand & Unit Dropdown</h3>
          {materials.map(m=>{
            const def=materialsDB[m.material];
            return (
              <div key={m.id} style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 0.8fr 0.6fr 0.7fr 0.8fr 30+"?".replace("+",""), gap:"6px", marginBottom:"8px", alignItems:"center"}} className="mat-row">
                <select value={m.material} onChange={e=>handleMatChange(m.id, e.target.value)} style={{padding:"8px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"13px"}}>{Object.keys(materialsDB).map(k=><option key={k}>{k}</option>)}</select>
                <select value={m.brand} onChange={e=>handleBrandChange(m.id, e.target.value)} style={{padding:"8px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"13px"}}>{def.brands.map(b=><option key={b.name}>{b.name}</option>)}</select>
                <select value={m.unit} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, unit:e.target.value}:x))} style={{padding:"8px", border:"1px solid #ddd", borderRadius:"8px"}}>{def.units.map(u=><option key={u}>{u}</option>)}</select>
                <input type="number" value={m.qty} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, qty:Number(e.target.value)}:x))} style={{padding:"8px", border:"1px solid #ddd", borderRadius:"8px"}} />
                <input type="number" value={m.rate} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, rate:Number(e.target.value)}:x))} style={{padding:"8px", border:"1px solid #ddd", borderRadius:"8px"}} />
                <div style={{fontWeight:"700", fontSize:"13px", textAlign:"right"}}>₹{(m.qty*m.rate).toLocaleString('en-IN')}</div>
                <button onClick={()=>setMaterials(prev=>prev.filter(x=>x.id!==m.id))} style={{background:"#fee2e2", border:"none", borderRadius:"6px", padding:"6px"}}>✕</button>
              </div>
            );
          })}
          <div style={{display:"flex", gap:"10px", marginTop:"12px", alignItems:"center"}}>
            <button onClick={()=>{ const first=Object.keys(materialsDB)[0]; const def=materialsDB[first]; setMaterials([...materials,{id:Date.now().toString(), material:first, brand:def.brands[0].name, unit:def.units[0], qty:1, rate:def.brands[0].rate}])}} style={{background:"#2563eb", color:"white", border:"none", padding:"10px 16px", borderRadius:"10px", fontWeight:"700", cursor:"pointer"}}>+ Add Material</button>
            <span style={{marginLeft:"auto", fontWeight:"800"}}>Materials Total: {formatINR(materialsTotal)}</span>
          </div>
        </div>

        {/* Labour */}
        <div style={{background:"white", borderRadius:"20px", padding:"20px", marginBottom:"16px", border:"1px solid #e5e7eb"}}>
          <h3 style={{margin:"0 0 12px", fontWeight:"700"}}>👷 Labour Cost</h3>
          <select value={labourType} onChange={e=>setLabourType(e.target.value)} style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px", marginBottom:"12px"}}>
            <option>By Contract</option><option>Daily Base</option>
          </select>
          {labourType==="By Contract" ? (
            <div style={{display:"flex", gap:"8px"}}><input type="number" value={contractAmount} onChange={e=>setContractAmount(Number(e.target.value))} placeholder="Contract Amount" style={{flex:1, padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} /></div>
          ) : (
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px"}}>
              <input type="number" value={leadCount} onChange={e=>setLeadCount(Number(e.target.value))} placeholder="No. of Lead" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <input type="number" value={leadRate} onChange={e=>setLeadRate(Number(e.target.value))} placeholder="Lead Rate/day" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <input type="number" value={helperCount} onChange={e=>setHelperCount(Number(e.target.value))} placeholder="No. of Helper" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <input type="number" value={helperRate} onChange={e=>setHelperRate(Number(e.target.value))} placeholder="Helper Rate/day" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <input type="number" value={labourDays} onChange={e=>setLabourDays(Number(e.target.value))} placeholder="No. of Days" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
              <div style={{padding:"10px", background:"#f3f4f6", borderRadius:"10px", fontWeight:"700"}}>Total: {formatINR(labourTotal)}<br/><span style={{fontSize:"11px", fontWeight:"400"}}>({leadCount}×{leadRate} + {helperCount}×{helperRate})×{labourDays}</span></div>
            </div>
          )}
        </div>

        {/* Additional + Summary */}
        <div ref={summaryRef} style={{background:"white", borderRadius:"20px", padding:"20px", border:"1px solid #e5e7eb", marginBottom:"16px"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"8px", marginBottom:"16px"}}>
            <input type="number" value={transport} onChange={e=>setTransport(Number(e.target.value))} placeholder="Transport" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <input type="number" value={electrical} onChange={e=>setElectrical(Number(e.target.value))} placeholder="Electrical" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <input type="number" value={plumbingCost} onChange={e=>setPlumbingCost(Number(e.target.value))} placeholder="Plumbing" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
            <input type="number" value={waterproofing} onChange={e=>setWaterproofing(Number(e.target.value))} placeholder="Waterproofing" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"10px"}} />
          </div>
          <div style={{background:"#0f172a", color:"white", borderRadius:"16px", padding:"20px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div><div style={{fontSize:"11px", opacity:"0.7"}}>GRAND PROJECT COST</div><div style={{fontSize:"28px", fontWeight:"800", marginTop:"4px"}}>{formatINR(grandTotal)}</div><div style={{fontSize:"12px", opacity:"0.7", marginTop:"4px"}}>Materials {formatINR(materialsTotal)} + Labour {formatINR(labourTotal)} + Additional {formatINR(additionalTotal)}</div></div>
            <div style={{textAlign:"right", fontSize:"12px"}}>For: {projectName}<br/>{new Date().toLocaleDateString('en-IN')}</div>
          </div>
        </div>

        {/* Downloads */}
        <div style={{background:"white", borderRadius:"20px", padding:"16px", display:"flex", gap:"10px", flexWrap:"wrap", border:"1px solid #e5e7eb"}}>
          <button onClick={downloadCSV} style={{flex:1, background:"#16a34a", color:"white", border:"none", padding:"12px", borderRadius:"10px", fontWeight:"700", cursor:"pointer"}}>📊 Download Excel</button>
          <button onClick={downloadPDF} style={{flex:1, background:"#2563eb", color:"white", border:"none", padding:"12px", borderRadius:"10px", fontWeight:"700", cursor:"pointer"}}>📄 Download PDF</button>
          <button onClick={downloadJPG} style={{flex:1, background:"#111", color:"white", border:"none", padding:"12px", borderRadius:"10px", fontWeight:"700", cursor:"pointer"}}>🖼️ Download JPG</button>
        </div>
        {status && <div style={{marginTop:"10px", background:"#111", color:"white", padding:"10px", borderRadius:"10px", textAlign:"center"}}>{status}</div>}
      </div>
    </div>
  );
}
