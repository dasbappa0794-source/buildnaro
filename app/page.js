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
  const [newMat, setNewMat] = useState({ name:"", unit:"Bag", rate:"" });

  const updateQty = (i,v)=>{ const c=[...materials]; c[i].qty=Number(v); setMaterials(c); }
  const total = materials.reduce((s,m)=>s+m.qty*m.rate,0);

  const addMaterial = ()=>{
    if(!newMat.name ||!newMat.rate) return alert("Name & Rate likho");
    setMaterials([...materials, { name:newMat.name, unit:newMat.unit, rate:Number(newMat.rate), qty:0 }]);
    setNewMat({ name:"", unit:"Bag", rate:"" });
  };
  const remove = (i)=> setMaterials(materials.filter((_,idx)=>idx!==i));

  const downloadCSV = ()=>{
    let csv = "Material,Unit,Qty,Rate,Amount\n";
    materials.forEach(m=>{ csv+=`${m.name},${m.unit},${m.qty},${m.rate},${m.qty*m.rate}\n`; });
    csv+=`Grand Total,,,,${total}\n`;
    const blob = new Blob([csv], {type:"text/csv"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=url; a.download=`${project}.csv`; a.click();
  };

  return (
    <div style={{background:"#f6f7f9", minHeight:"100vh", padding:"16px", fontFamily:"system-ui"}}>
      <div style={{maxWidth:"800px", margin:"0 auto", background:"white", borderRadius:"16px", padding:"18px", boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
        <h1 style={{fontSize:"26px", fontWeight:"800", margin:0}}>Build<span style={{color:"#2563eb"}}>Naro</span></h1>
        <p style={{color:"#666", margin:"4px 0 16px"}}>House Construction Cost Calculator</p>

        <label style={{fontWeight:"600"}}>Project Name</label>
        <input value={project} onChange={e=>setProject(e.target.value)} style={{width:"100%", marginTop:"6px", padding:"10px", border:"1px solid #ddd", borderRadius:"8px", boxSizing:"border-box"}} />

        <h3 style={{marginTop:"20px", fontWeight:"700"}}>Materials (BOQ)</h3>
        <div style={{marginTop:"10px", border:"1px solid #e5e7eb", borderRadius:"10px", overflow:"hidden"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.4fr 0.5fr 0.6fr 0.7fr 0.4fr", background:"#f3f4f6", padding:"10px", fontWeight:"700", fontSize:"12px"}}>
            <span>Material</span><span>Unit</span><span>Qty</span><span>Rate</span><span style={{textAlign:"right"}}>Amount</span><span></span>
          </div>
          {materials.map((m,i)=>(
            <div key={i} style={{display:"grid", gridTemplateColumns:"1.4fr 0.5fr 0.6fr 0.6fr 0.7fr 0.4fr", padding:"8px 10px", borderTop:"1px solid #f0f0f0", alignItems:"center", fontSize:"14px"}}>
              <span style={{fontWeight:"600"}}>{m.name}</span>
              <span style={{fontSize:"12px", color:"#666"}}>{m.unit}</span>
              <input type="number" value={m.qty} onChange={e=>updateQty(i,e.target.value)} style={{width:"55px", padding:"5px", border:"1px solid #ddd", borderRadius:"6px"}} />
              <span>₹{m.rate}</span>
              <span style={{textAlign:"right", fontWeight:"700"}}>₹{(m.qty*m.rate).toLocaleString('en-IN')}</span>
              <button onClick={()=>remove(i)} style={{background:"#fee2e2", border:"none", borderRadius:"6px", padding:"4px", cursor:"pointer"}}>✕</button>
            </div>
          ))}
          <div style={{padding:"12px 10px", background:"#eff6ff", fontWeight:"800", display:"flex", justifyContent:"space-between", borderTop:"2px solid #2563eb"}}>
            <span>Grand Total:</span><span style={{color:"#2563eb", fontSize:"18px"}}>₹{total.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div style={{marginTop:"18px", background:"#f9fafb", border:"1px dashed #ccc", borderRadius:"10px", padding:"12px"}}>
          <b style={{fontSize:"14px"}}>➕ Add New Material</b>
          <div style={{display:"flex", gap:"6px", marginTop:"8px", flexWrap:"wrap"}}>
            <input placeholder="Name e.g. Paint" value={newMat.name} onChange={e=>setNewMat({...newMat, name:e.target.value})} style={{flex:"1", minWidth:"100px", padding:"8px", border:"1px solid #ddd", borderRadius:"6px"}} />
            <input placeholder="Unit" value={newMat.unit} onChange={e=>setNewMat({...newMat, unit:e.target.value})} style={{width:"70px", padding:"8px", border:"1px solid #ddd", borderRadius:"6px"}} />
            <input placeholder="Rate ₹" type="number" value={newMat.rate} onChange={e=>setNewMat({...newMat, rate:e.target.value})} style={{width:"80px", padding:"8px", border:"1px solid #ddd", borderRadius:"6px"}} />
            <button onClick={addMaterial} style={{background:"#2563eb", color:"white", border:"none", borderRadius:"6px", padding:"8px 14px", fontWeight:"700", cursor:"pointer"}}>Add</button>
          </div>
        </div>

        <div style={{display:"flex", gap:"10px", marginTop:"18px"}}>
          <button onClick={()=>window.print()} style={{flex:1, background:"#111", color:"white", padding:"12px", border:"none", borderRadius:"8px", fontWeight:"700", cursor:"pointer"}}>🖨️ Print / PDF</button>
          <button onClick={downloadCSV} style={{flex:1, background:"#16a34a", color:"white", padding:"12px", border:"none", borderRadius:"8px", fontWeight:"700", cursor:"pointer"}}>📊 Excel Download</button>
        </div>

        <div style={{marginTop:"12px", fontSize:"12px", color:"#666", textAlign:"center"}}>Prepared for: <b style={{color:"#000"}}>{project}</b> | {new Date().toLocaleDateString('en-GB')}</div>
      </div>
    </div>
  );
}
