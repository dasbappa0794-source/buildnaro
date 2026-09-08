"use client";
import { useState, useMemo } from "react";

const DB = {
  Cement: { brands:["ACC","UltraTech","Ambuja"], units:["Bag"] },
  "TMT Steel Bars": { brands:["Local / Unbranded","TATA Tiscon","JSW Neosteel"], units:["Kg","Nos"] },
  Bricks: { brands:["Local / Unbranded","Red Clay"], units:["Nos"] },
  Sand: { brands:["Local / Unbranded","River Sand"], units:["CFT"] },
};

export default function Page(){
  const [project, setProject] = useState("My Construction Project Bappa");
  const [mats, setMats] = useState([
    {id:"1", mat:"Cement", brand:"ACC", spec:"-", unit:"Bag", qty:250, rate:500},
    {id:"2", mat:"TMT Steel Bars", brand:"Local / Unbranded", spec:"-", unit:"Kg", qty:0, rate:65},
    {id:"3", mat:"Bricks", brand:"Local / Unbranded", spec:"-", unit:"Nos", qty:0, rate:9},
    {id:"4", mat:"TMT Steel Bars", brand:"TATA Tiscon", spec:"6 mm", unit:"Nos", qty:0, rate:68},
  ]);
  const [labour, setLabour] = useState(200000);
  const [transport, setTransport] = useState(10000);
  const [other, setOther] = useState(0);
  const [contingency, setContingency] = useState(0);
  const [tax, setTax] = useState(0);

  const subtotal = useMemo(()=> mats.reduce((s,m)=>s+m.qty*m.rate,0), [mats]);
  const grand = subtotal + labour + transport + other + contingency + tax;
  const fmt = (n)=> "₹"+Number(n).toLocaleString("en-IN",{minimumFractionDigits:2});

  const dlCSV = ()=>{
    let csv=`BuildNaro - Construction Estimate Calculator\nPrepared for: ${project}\nGenerated on: ${new Date().toLocaleDateString("en-IN")}\n\nMATERIAL,BRAND,SIZE / SPEC,UNIT,QTY,RATE,AMOUNT\n`;
    mats.forEach(m=>{ csv+=`${m.mat},${m.brand},${m.spec},${m.unit},${m.qty},${m.rate},${m.qty*m.rate}\n`; });
    csv+=`\nMaterial Subtotal,${subtotal}\nLabour,${labour}\nTransport,${transport}\nOther Costs,${other}\nContingency,${contingency}\nTax / GST,${tax}\nGrand Total,${grand}\n`;
    const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"})); a.download=project+".csv"; a.click();
  };

  return (
    <div style={{background:"#f8f9fa", minHeight:"100vh", padding:12}}>
      <div style={{maxWidth:900, margin:"0 auto", background:"#fff", borderRadius:12, padding:20, border:"1px solid #e5e7eb"}}>
        <div style={{fontSize:20, fontWeight:800}}>Build<span style={{color:"#2563eb"}}>Naro</span> — Construction Estimate Calculator</div>
        <div style={{fontSize:13, color:"#666", marginTop:4}}>Prepared for: <b>{project}</b><br/>Generated on: {new Date().toLocaleDateString("en-IN")}</div>

        <div style={{marginTop:16}}>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1.2fr 0.8fr 0.6fr 0.5fr 0.7fr 0.9fr", gap:0, fontSize:11, fontWeight:700, color:"#6b7280", padding:"8px 0", borderBottom:"1px solid #e5e7eb"}}>
            <span>MATERIAL</span><span>BRAND</span><span>SIZE / SPEC</span><span>UNIT</span><span>QTY</span><span>RATE</span><span>AMOUNT</span>
          </div>
          {mats.map(m=>{
            const d=DB[m.mat];
            return (
              <div key={m.id} style={{display:"grid", gridTemplateColumns:"1.2fr 1.2fr 0.8fr 0.6fr 0.5fr 0.7fr 0.9fr", gap:0, padding:"10px 0", borderBottom:"1px solid #f3f4f6", fontSize:13}}>
                <span>{m.mat}</span><span>{m.brand}</span><span>{m.spec}</span><span>{m.unit}</span>
                <input type="number" value={m.qty} onChange={e=>setMats(p=>p.map(x=>x.id===m.id?{...x, qty:Number(e.target.value)}:x))} style={{width:50, border:"1px solid #ddd", borderRadius:6, padding:4}} />
                <span>{fmt(m.rate)}</span><span style={{fontWeight:600}}>{fmt(m.qty*m.rate)}</span>
              </div>
            );
          })}
        </div>

        <div style={{marginTop:20, borderTop:"1px solid #e5e7eb"}}>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6"}}><span>Material Subtotal</span><b>{fmt(subtotal)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6"}}><span>Labour</span><b>{fmt(labour)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6"}}><span>Transport</span><b>{fmt(transport)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6"}}><span>Other Costs</span><b>{fmt(other)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f3f4f6"}}><span>Contingency</span><b>{fmt(contingency)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0"}}><span>Tax / GST</span><b>{fmt(tax)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"14px 0", borderTop:"2px solid #111", fontWeight:800, fontSize:18, marginTop:8}}><span>Grand Total</span><span>{fmt(grand)}</span></div>
          <div style={{fontSize:11, color:"#9ca3af", marginTop:12}}>Rates are user-entered estimates and may vary from actual market prices.</div>
        </div>

        <button onClick={dlCSV} style={{marginTop:16, width:"100%", background:"#111", color:"#fff", padding:12, borderRadius:8, fontWeight:700, border:"none"}}>Download Excel</button>
      </div>
    </div>
  );
}
