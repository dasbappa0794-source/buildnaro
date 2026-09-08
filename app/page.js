"use client";
import { useState, useMemo, useRef } from "react";

const materialsDB = {
  Cement: { brands: [{name:"UltraTech", rate:500}, {name:"ACC", rate:480}, {name:"Ambuja", rate:490}], units:["Bag"] },
  Sand: { brands: [{name:"River Sand", rate:65}, {name:"M-Sand", rate:70}, {name:"Local", rate:55}], units:["CFT","Ton"] },
  Bricks: { brands: [{name:"Red Clay", rate:9}, {name:"Fly Ash", rate:8}, {name:"AAC Block", rate:45}], units:["Nos"] },
  "TMT Steel": { brands: [{name:"Tata Tiscon", rate:68}, {name:"JSW Neosteel", rate:66}, {name:"SAIL", rate:64}], units:["Kg","Ton"] },
  Tiles: { brands: [{name:"Kajaria", rate:45}, {name:"Somany", rate:42}], units:["Sqft","Box"] },
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
  const [leadCount, setLeadCount] = useState(3);
  const [leadRate, setLeadRate] = useState(850);
  const [helperCount, setHelperCount] = useState(5);
  const [helperRate, setHelperRate] = useState(450);
  const [labourDays, setLabourDays] = useState(90);
  const [transport, setTransport] = useState(15000);
  const [electrical, setElectrical] = useState(35000);
  const [plumbingCost, setPlumbingCost] = useState(28000);
  const [waterproofing, setWaterproofing] = useState(18000);
  const [status, setStatus] = useState("");
  const summaryRef = useRef(null);

  const areaEstimate = useMemo(()=> (area && areaRate) ? area*areaRate : 0, [area, areaRate]);
  const materialsTotal = useMemo(()=> materials.reduce((s,m)=>s+m.qty*m.rate,0), [materials]);
  const labourTotal = useMemo(()=> labourType==="By Contract" ? contractAmount : (leadCount*leadRate + helperCount*helperRate)*labourDays, [labourType, contractAmount, leadCount, leadRate, helperCount, helperRate, labourDays]);
  const additionalTotal = useMemo(()=> transport+electrical+plumbingCost+waterproofing, [transport, electrical, plumbingCost, waterproofing]);
  const grandTotal = materialsTotal + labourTotal + additionalTotal;
  const formatINR = (n)=> new Intl.NumberFormat("en-IN",{style:"currency", currency:"INR", maximumFractionDigits:0}).format(n);

  const handleMatChange = (id, newMat)=>{
    const def=materialsDB[newMat];
    setMaterials(prev=>prev.map(m=>m.id===id?{...m, material:newMat, brand:def.brands[0].name, unit:def.units[0], rate:def.brands[0].rate}:m));
  };
  const handleBrandChange = (id, newBrand)=>{
    const row=materials.find(m=>m.id===id);
    if(!row) return;
    const def=materialsDB[row.material];
    const b=def.brands.find(x=>x.name===newBrand);
    setMaterials(prev=>prev.map(m=>m.id===id?{...m, brand:newBrand, rate:b?b.rate:m.rate}:m));
  };

  const downloadCSV = ()=>{
    let csv=`Project:,${projectName}\nLocation:,${location}\nClient:,${clientName}\nArea:,${area} sqft x ${areaRate} = ${areaEstimate}\n\nMaterial,Brand,Unit,Qty,Rate,Amount\n`;
    materials.forEach(m=>{ csv+=`${m.material},${m.brand},${m.unit},${m.qty},${m.rate},${m.qty*m.rate}\n`; });
    csv+=`\nMaterials Total,,${materialsTotal}\nLabour (${labourType}),,${labourTotal}\nAdditional,,${additionalTotal}\nGRAND TOTAL,,${grandTotal}\n`;
    const blob=new Blob([csv],{type:"text/csv"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download=`${projectName.replace(/\s+/g,'_')}.csv`; a.click();
    setStatus("Excel downloaded ✓");
    setTimeout(()=>setStatus(""),3000);
  };

  const downloadPDF = ()=>{
    let text=`BuildNaro Estimate\nProject: ${projectName}\nLocation: ${location}\nDate: ${new Date().toLocaleDateString('en-IN')}\n\n--- MATERIALS ---\n`;
    materials.forEach(m=>{ text+=`${m.material} (${m.brand}) - ${m.qty} ${m.unit} x ${m.rate} = ${m.qty*m.rate}\n`; });
    text+=`\nMaterials Total: ${materialsTotal}\nLabour (${labourType}): ${labourTotal}\nAdditional: ${additionalTotal}\n\nGRAND TOTAL: ${grandTotal}\n`;
    const blob=new Blob([text],{type:"application/pdf"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download=`${projectName}.pdf`; a.click();
    setStatus("PDF downloaded ✓");
    setTimeout(()=>setStatus(""),3000);
  };

  const downloadJPG = ()=>{
    const canvas=document.createElement("canvas");
    canvas.width=800; canvas.height=600;
    const ctx=canvas.getContext("2d");
    ctx.fillStyle="#ffffff"; ctx.fillRect(0,0,800,600);
    ctx.fillStyle="#0f172a"; ctx.font="bold 28px sans-serif"; ctx.fillText("BuildNaro Estimate",20,40);
    ctx.font="16px sans-serif"; ctx.fillText(`Project: ${projectName}`,20,80);
    ctx.fillText(`Location: ${location}`,20,105);
    ctx.fillText(`Materials: ${formatINR(materialsTotal)}`,20,140);
    ctx.fillText(`Labour: ${formatINR(labourTotal)} (${labourType})`,20,165);
    ctx.fillText(`Additional: ${formatINR(additionalTotal)}`,20,190);
    ctx.font="bold 22px sans-serif"; ctx.fillStyle="#2563eb"; ctx.fillText(`GRAND TOTAL: ${formatINR(grandTotal)}`,20,240);
    const a=document.createElement("a");
    a.href=canvas.toDataURL("image/jpeg",0.9); a.download=`${projectName}.jpg`; a.click();
    setStatus("JPG downloaded ✓");
    setTimeout(()=>setStatus(""),3000);
  };

  return (
    <div style={{background:"#f3f5f8", minHeight:"100vh", padding:"12px", fontFamily:"system-ui"}}>
      <div style={{maxWidth:"1100px", margin:"0 auto"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", background:"white", padding:"14px 18px", borderRadius:"16px", marginBottom:"12px", border:"1px solid #e5e7eb"}}>
          <div style={{fontWeight:"800", fontSize:"20px"}}>Build<span style={{color:"#2563eb"}}>Naro</span></div>
          <div style={{fontSize:"11px", background:"#f3f4f6", padding:"5px 10px", borderRadius:"20px"}}>● LIVE</div>
        </div>

        <div style={{background:"white", borderRadius:"16px", padding:"16px", marginBottom:"12px", border:"1px solid #e5e7eb"}}>
          <h3 style={{fontSize:"14px", fontWeight:"700", marginBottom:"10px"}}>📍 Project Details</h3>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px"}}>
            <input value={projectName} onChange={e=>setProjectName(e.target.value)} placeholder="Project Name" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
            <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="Location" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
            <input value={clientName} onChange={e=>setClientName(e.target.value)} placeholder="Client Name" style={{padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
            <div style={{display:"flex", gap:"6px"}}>
              <input type="number" value={area} onChange={e=>setArea(Number(e.target.value))} placeholder="Area" style={{flex:1, padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <input type="number" value={areaRate} onChange={e=>setAreaRate(Number(e.target.value))} placeholder="Rate" style={{flex:1, padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
            </div>
          </div>
          {areaEstimate>0 && <div style={{marginTop:"8px", background:"#eff6ff", padding:"8px", borderRadius:"8px", fontSize:"12px", fontWeight:"600"}}>Area: {area} × ₹{areaRate} = {formatINR(areaEstimate)}</div>}
        </div>

        <div style={{background:"white", borderRadius:"16px", padding:"16px", marginBottom:"12px", border:"1px solid #e5e7eb"}}>
          <h3 style={{fontSize:"14px", fontWeight:"700", marginBottom:"10px"}}>🧱 Materials (Brand + Unit Dropdown)</h3>
          {materials.map(m=>{
            const def=materialsDB[m.material];
            return (
              <div key={m.id} style={{display:"grid", gridTemplateColumns:"1fr 1fr 0.7fr 0.5fr 0.6fr 0.7fr 28+"px".replace("+",""), gap:"4px", marginBottom:"6px", alignItems:"center"}}>
                <select value={m.material} onChange={e=>handleMatChange(m.id, e.target.value)} style={{padding:"7px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"12px"}}>{Object.keys(materialsDB).map(k=><option key={k}>{k}</option>)}</select>
                <select value={m.brand} onChange={e=>handleBrandChange(m.id, e.target.value)} style={{padding:"7px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"12px"}}>{def.brands.map(b=><option key={b.name}>{b.name}</option>)}</select>
                <select value={m.unit} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, unit:e.target.value}:x))} style={{padding:"7px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"12px"}}>{def.units.map(u=><option key={u}>{u}</option>)}</select>
                <input type="number" value={m.qty} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, qty:Number(e.target.value)}:x))} style={{padding:"7px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"12px"}} />
                <input type="number" value={m.rate} onChange={e=>setMaterials(prev=>prev.map(x=>x.id===m.id?{...x, rate:Number(e.target.value)}:x))} style={{padding:"7px", border:"1px solid #ddd", borderRadius:"6px", fontSize:"12px"}} />
                <div style={{fontWeight:"700", fontSize:"12px", textAlign:"right"}}>₹{(m.qty*m.rate).toLocaleString('en-IN')}</div>
                <button onClick={()=>setMaterials(prev=>prev.filter(x=>x.id!==m.id))} style={{background:"#fee2e2", border:"none", borderRadius:"6px", padding:"5px", fontSize:"12px"}}>✕</button>
              </div>
            );
          })}
          <button onClick={()=>{ const first=Object.keys(materialsDB)[0]; const def=materialsDB[first]; setMaterials([...materials,{id:Date.now().toString(), material:first, brand:def.brands[0].name, unit:def.units[0], qty:1, rate:def.brands[0].rate}])}} style={{marginTop:"8px", background:"#2563eb", color:"white", border:"none", padding:"9px 14px", borderRadius:"8px", fontWeight:"700", fontSize:"13px"}}>+ Add Material</button>
          <div style={{textAlign:"right", marginTop:"8px", fontWeight:"800", fontSize:"13px"}}>Materials: {formatINR(materialsTotal)}</div>
        </div>

        <div style={{background:"white", borderRadius:"16px", padding:"16px", marginBottom:"12px", border:"1px solid #e5e7eb"}}>
          <h3 style={{fontSize:"14px", fontWeight:"700", marginBottom:"10px"}}>👷 Labour Cost - 2 Types</h3>
          <select value={labourType} onChange={e=>setLabourType(e.target.value)} style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px", marginBottom:"8px", width:"100%"}}>
            <option>By Contract</option><option>Daily Base</option>
          </select>
          {labourType==="By Contract" ? (
            <input type="number" value={contractAmount} onChange={e=>setContractAmount(Number(e.target.value))} style={{width:"100%", padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
          ) : (
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px"}}>
              <input type="number" value={leadCount} onChange={e=>setLeadCount(Number(e.target.value))} placeholder="Lead Count" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <input type="number" value={leadRate} onChange={e=>setLeadRate(Number(e.target.value))} placeholder="Lead Rate" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <input type="number" value={helperCount} onChange={e=>setHelperCount(Number(e.target.value))} placeholder="Helper Count" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <input type="number" value={helperRate} onChange={e=>setHelperRate(Number(e.target.value))} placeholder="Helper Rate" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <input type="number" value={labourDays} onChange={e=>setLabourDays(Number(e.target.value))} placeholder="Days" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px"}} />
              <div style={{padding:"9px", background:"#f3f4f6", borderRadius:"8px", fontSize:"12px", fontWeight:"700"}}>{formatINR(labourTotal)}<div style={{fontSize:"10px", fontWeight:"400"}}>({leadCount}×{leadRate}+{helperCount}×{helperRate})×{labourDays}</div></div>
            </div>
          )}
        </div>

        <div ref={summaryRef} style={{background:"white", borderRadius:"16px", padding:"16px", marginBottom:"12px", border:"1px solid #e5e7eb"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"6px", marginBottom:"12px"}}>
            <input type="number" value={transport} onChange={e=>setTransport(Number(e.target.value))} placeholder="Transport" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"12px"}} />
            <input type="number" value={electrical} onChange={e=>setElectrical(Number(e.target.value))} placeholder="Electrical" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"12px"}} />
            <input type="number" value={plumbingCost} onChange={e=>setPlumbingCost(Number(e.target.value))} placeholder="Plumbing" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"12px"}} />
            <input type="number" value={waterproofing} onChange={e=>setWaterproofing(Number(e.target.value))} placeholder="Waterproofing" style={{padding:"9px", border:"1px solid #ddd", borderRadius:"8px", fontSize:"12px"}} />
          </div>
          <div style={{background:"#0f172a", color:"white", borderRadius:"14px", padding:"16px"}}>
            <div style={{fontSize:"10px", opacity:"0.7"}}>GRAND TOTAL</div>
            <div style={{fontSize:"26px", fontWeight:"800", marginTop:"4px"}}>{formatINR(grandTotal)}</div>
            <div style={{fontSize:"11px", opacity:"0.7", marginTop:"4px"}}>Materials {formatINR(materialsTotal)} + Labour {formatINR(labourTotal)} + Additional {formatINR(additionalTotal)}</div>
          </div>
        </div>

        <div style={{background:"white", borderRadius:"16px", padding:"14px", display:"flex", gap:"8px", flexWrap:"wrap", border:"1px solid #e5e7eb"}}>
          <button onClick={downloadCSV} style={{flex:1, background:"#16a34a", color:"white", border:"none", padding:"11px", borderRadius:"8px", fontWeight:"700"}}>📊 Excel</button>
          <button onClick={downloadPDF} style={{flex:1, background:"#2563eb", color:"white", border:"none", padding:"11px", borderRadius:"8px", fontWeight:"700"}}>📄 PDF</button>
          <button onClick={downloadJPG} style={{flex:1, background:"#111", color:"white", border:"none", padding:"11px", borderRadius:"8px", fontWeight:"700"}}>🖼️ JPG</button>
        </div>
        {status && <div style={{marginTop:"8px", background:"#111", color:"white", padding:"8px", borderRadius:"8px", textAlign:"center", fontSize:"13px"}}>{status}</div>}
      </div>
    </div>
  );
}
