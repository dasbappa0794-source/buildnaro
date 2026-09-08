"use client";
import { useState } from "react";

export default function Page() {
  const [project, setProject] = useState("My Construction Project");
  const [materials, setMaterials] = useState([
    { name: "Cement", qty: 0, rate: 500, unit: "Bag" },
    { name: "Sand", qty: 0, rate: 65, unit: "CFT" },
    { name: "Bricks", qty: 0, rate: 9, unit: "Nos" },
    { name: "TMT Steel", qty: 0, rate: 68, unit: "Kg" },
  ]);
  const update = (i,v)=>{ const c=[...materials]; c[i].qty=Number(v); setMaterials(c); }
  const total = materials.reduce((s,m)=>s+m.qty*m.rate,0);

  return (
    <div style={{background:"#f6f7f9", minHeight:"100vh", padding:"20px", fontFamily:"system-ui"}}>
      <div style={{maxWidth:"720px", margin:"0 auto", background:"white", borderRadius:"16px", padding:"20px", boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
        <h1 style={{fontSize:"28px", fontWeight:"800", margin:0}}>Build<span style={{color:"#2563eb"}}>Naro</span></h1>
        <p style={{color:"#666", marginTop:"4px"}}>House Construction Cost Calculator</p>

        <div style={{marginTop:"20px"}}>
          <label style={{fontWeight:"600"}}>Project Name</label>
          <input value={project} onChange={e=>setProject(e.target.value)} style={{width:"100%", marginTop:"6px", padding:"10px", border:"1px solid #ddd", borderRadius:"8px"}} />
        </div>

        <h3 style={{marginTop:"24px", fontSize:"18px", fontWeight:"700"}}>Materials (BOQ)</h3>
        <div style={{marginTop:"10px", border:"1px solid #e5e7eb", borderRadius:"10px", overflow:"hidden"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.5fr 0.6fr 0.8fr 0.8fr 0.8fr", background:"#f3f4f6", padding:"10px", fontWeight:"700", fontSize:"13px"}}>
            <span>Material</span><span>Unit</span><span>Qty</span><span>Rate</span><span style={{textAlign:"right"}}>Amount</span>
          </div>
          {materials.map((m,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1.5fr 0.6fr 0.8fr 0.8fr 0.8fr", padding:"10px", borderTop:"1px solid #f0f0f0", alignItems:"center"}}>
              <span style={{fontWeight:"600"}}>{m.name}</span>
              <span style={{fontSize:"13px", color:"#666"}}>{m.unit}</span>
              <input type="number" value={m.qty} onChange={e=>update(i,e.target.value)} style={{width:"60px", padding:"6px", border:"1px solid #ddd", borderRadius:"6px"}} />
              <span>₹{m.rate}</span>
              <span style={{textAlign:"right", fontWeight:"700"}}>₹{(m.qty*m.rate).toLocaleString('en-IN')}</span>
            </div>
          ))}
          <div style={{display:"grid", gridTemplateColumns:"1.5fr 0.6fr 0.8fr 0.8fr 0.8fr", padding:"14px 10px", background:"#eff6ff", fontWeight:"800", borderTop:"2px solid #2563eb"}}>
            <span style={{gridColumn:"1 / span 4", textAlign:"right"}}>Grand Total:</span>
            <span style={{textAlign:"right", color:"#2563eb", fontSize:"18px"}}>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div style={{marginTop:"16px", background:"#f9fafb", padding:"12px", borderRadius:"8px", fontSize:"13px", color:"#555"}}>
          Prepared for: <b style={{color:"#000"}}>{project}</b> | Date: {new Date().toLocaleDateString('en-GB')}
        </div>
      </div>
    </div>
  );
}
