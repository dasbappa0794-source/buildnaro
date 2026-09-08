"use client";
import { useState, useMemo, useRef } from "react";

const DB = {
  Cement: { brands: [{n:"UltraTech", r:500},{n:"ACC", r:480},{n:"Ambuja", r:490}], units:["Bag"] },
  Sand: { brands: [{n:"River Sand", r:65},{n:"M-Sand", r:70}], units:["CFT","Ton"] },
  Bricks: { brands: [{n:"Red Clay", r:9},{n:"Fly Ash", r:8}], units:["Nos"] },
  "TMT Steel": { brands: [{n:"Tata Tiscon", r:68},{n:"JSW", r:66}], units:["Kg","Ton"] },
  Tiles: { brands: [{n:"Kajaria", r:45},{n:"Somany", r:42}], units:["Sqft","Box"] },
  Paint: { brands: [{n:"Asian", r:320},{n:"Berger", r:300}], units:["Ltr","Bucket"] },
};

export default function Page(){
  const [project, setProject] = useState("My Villa - G+1");
  const [loc, setLoc] = useState("Kolkata");
  const [area, setArea] = useState(1200);
  const [rate, setRate] = useState(1850);
  const [mats, setMats] = useState([
    {id:"1", mat:"Cement", brand:"UltraTech", unit:"Bag", qty:180, rt:500},
    {id:"2", mat:"TMT Steel", brand:"Tata Tiscon", unit:"Kg", qty:2500, rt:68},
    {id:"3", mat:"Bricks", brand:"Red Clay", unit:"Nos", qty:15000, rt:9},
  ]);
  const [lType, setLType] = useState("Daily Base");
  const [contract, setContract] = useState(275000);
  const [leadC, setLeadC] = useState(3); const [leadR, setLeadR] = useState(850);
  const [helpC, setHelpC] = useState(5); const [helpR, setHelpR] = useState(450);
  const [days, setDays] = useState(90);
  const [trans, setTrans] = useState(15000); const [elec, setElec] = useState(35000);
  const [plumb, setPlumb] = useState(28000); const [water, setWater] = useState(18000);
  const [msg, setMsg] = useState("");

  const matTotal = useMemo(()=> mats.reduce((s,m)=>s+m.qty*m.rt,0), [mats]);
  const labTotal = useMemo(()=> lType==="By Contract" ? contract : (leadC*leadR + helpC*helpR)*days, [lType,contract,leadC,leadR,helpC,helpR,days]);
  const addTotal = trans+elec+plumb+water;
  const grand = matTotal + labTotal + addTotal;
  const areaEst = area*rate;
  const fmt = (n)=> "₹"+n.toLocaleString("en-IN");

  const changeMat = (id, newMat)=>{
    const d=DB[newMat];
    setMats(p=>p.map(m=> m.id===id ? {...m, mat:newMat, brand:d.brands[0].n, unit:d.units[0], rt:d.brands[0].r} : m));
  };
  const changeBrand = (id, newBrand)=>{
    const row=mats.find(m=>m.id===id);
    const d=DB[row.mat];
    const b=d.brands.find(x=>x.n===newBrand);
    setMats(p=>p.map(m=> m.id===id ? {...m, brand:newBrand, rt:b?b.r:m.rt} : m));
  };

  const dlCSV = ()=>{
    let csv=`Project,${project}\nLocation,${loc}\nArea,${area} x ${rate} = ${areaEst}\n\nMaterial,Brand,Unit,Qty,Rate,Amount\n`;
    mats.forEach(m=>{ csv+=`${m.mat},${m.brand},${m.unit},${m.qty},${m.rt},${m.qty*m.rt}\n`; });
    csv+=`\nMaterials,${matTotal}\nLabour ${lType},${labTotal}\nAdditional,${addTotal}\nGrand,${grand}\n`;
    const blob=new Blob([csv],{type:"text/csv"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=project.replace(/\s+/g,"_")+".csv"; a.click();
    setMsg("Excel Done"); setTimeout(()=>setMsg(""),2000);
  };
  const dlPDF = ()=>{
    let t=`BuildNaro\nProject: ${project}\nLocation: ${loc}\n\nMaterials:\n`;
    mats.forEach(m=>{ t+=`${m.mat} ${m.brand} ${m.qty}${m.unit} x ${m.rt} = ${m.qty*m.rt}\n`; });
    t+=`\nMat:${matTotal} Lab:${labTotal} Add:${addTotal} Grand:${grand}`;
    const blob=new Blob([t],{type:"application/pdf"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=project+".pdf"; a.click();
    setMsg("PDF Done"); setTimeout(()=>setMsg(""),2000);
  };
  const dlJPG = ()=>{
    const c=document.createElement("canvas"); c.width=800; c.height=400;
    const x=c.getContext("2d"); x.fillStyle="#fff"; x.fillRect(0,0,800,400);
    x.fillStyle="#000"; x.font="bold 24px sans-serif"; x.fillText("BuildNaro - "+project,20,40);
    x.font="16px sans-serif"; x.fillText("Materials: "+fmt(matTotal),20,80);
    x.fillText("Labour: "+fmt(labTotal)+" ("+lType+")",20,110);
    x.fillText("Grand: "+fmt(grand),20,150);
    const a=document.createElement("a"); a.href=c.toDataURL("image/jpeg"); a.download=project+".jpg"; a.click();
    setMsg("JPG Done"); setTimeout(()=>setMsg(""),2000);
  };

  return (
    <div style={{background:"#f3f5f8", minHeight:"100vh", padding:10}}>
      <div style={{maxWidth:900, margin:"0 auto"}}>
        <div style={{background:"#fff", padding:12, borderRadius:12, display:"flex", justifyContent:"space-between", border:"1px solid #e5e7eb", marginBottom:10}}>
          <b>Build<span style={{color:"#2563eb"}}>Naro</span></b><span style={{fontSize:11, background:"#f3f4f6", padding:"4px 8px", borderRadius:20}}>LIVE</span>
        </div>

        <div style={{background:"#fff", padding:14, borderRadius:12, border:"1px solid #e5e7eb", marginBottom:10}}>
          <b style={{fontSize:13}}>Project Details</b>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginTop:8}}>
            <input value={project} onChange={e=>setProject(e.target.value)} style={{padding:9, border:"1px solid #ddd", borderRadius:8}} placeholder="Project" />
            <input value={loc} onChange={e=>setLoc(e.target.value)} style={{padding:9, border:"1px solid #ddd", borderRadius:8}} placeholder="Location" />
            <input type="number" value={area} onChange={e=>setArea(Number(e.target.value))} style={{padding:9, border:"1px solid #ddd", borderRadius:8}} placeholder="Area sqft" />
            <input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} style={{padding:9, border:"1px solid #ddd", borderRadius:8}} placeholder="Rate" />
          </div>
          <div style={{marginTop:6, fontSize:12, background:"#eff6ff", padding:6, borderRadius:6}}>Area Est: {area} x {rate} = {fmt(areaEst)}</div>
        </div>

        <div style={{background:"#fff", padding:14, borderRadius:12, border:"1px solid #e5e7eb", marginBottom:10}}>
          <b style={{fontSize:13}}>Materials - Brand + Unit Dropdown</b>
          {mats.map(m=>{
            const d=DB[m.mat];
            return (
              <div key={m.id} style={{display:"flex", gap:4, marginTop:6, flexWrap:"wrap"}}>
                <select value={m.mat} onChange={e=>changeMat(m.id, e.target.value)} style={{flex:1, minWidth:90, padding:6, border:"1px solid #ddd", borderRadius:6, fontSize:12}}>{Object.keys(DB).map(k=><option key={k}>{k}</option>)}</select>
                <select value={m.brand} onChange={e=>changeBrand(m.id, e.target.value)} style={{flex:1, minWidth:90, padding:6, border:"1px solid #ddd", borderRadius:6, fontSize:12}}>{d.brands.map(b=><option key={b.n}>{b.n}</option>)}</select>
                <select value={m.unit} onChange={e=>setMats(p=>p.map(x=>x.id===m.id?{...x, unit:e.target.value}:x))} style={{width:70, padding:6, border:"1px solid #ddd", borderRadius:6, fontSize:12}}>{d.units.map(u=><option key={u}>{u}</option>)}</select>
                <input type="number" value={m.qty} onChange={e=>setMats(p=>p.map(x=>x.id===m.id?{...x, qty:Number(e.target.value)}:x))} style={{width:60, padding:6, border:"1px solid #ddd", borderRadius:6, fontSize:12}} />
                <input type="number" value={m.rt} onChange={e=>setMats(p=>p.map(x=>x.id===m.id?{...x, rt:Number(e.target.value)}:x))} style={{width:60, padding:6, border:"1px solid #ddd", borderRadius:6, fontSize:12}} />
                <span style={{fontSize:12, fontWeight:700, minWidth:70, textAlign:"right"}}>{fmt(m.qty*m.rt)}</span>
                <button onClick={()=>setMats(p=>p.filter(x=>x.id!==m.id))} style={{background:"#fee2e2", border:"none", borderRadius:6, padding:"4px 8px"}}>x</button>
              </div>
            );
          })}
          <button onClick={()=>{ const f=Object.keys(DB)[0]; const d=DB[f]; setMats([...mats,{id:Date.now().toString(), mat:f, brand:d.brands[0].n, unit:d.units[0], qty:1, rt:d.brands[0].r}])}} style={{marginTop:8, background:"#2563eb", color:"#fff", border:"none", padding:"8px 12px", borderRadius:8, fontSize:12, fontWeight:700}}>+ Add Material</button>
          <div style={{textAlign:"right", fontWeight:800, fontSize:12, marginTop:6}}>Mat Total: {fmt(matTotal)}</div>
        </div>

        <div style={{background:"#fff", padding:14, borderRadius:12, border:"1px solid #e5e7eb", marginBottom:10}}>
          <b style={{fontSize:13}}>Labour - 2 Types</b>
          <select value={lType} onChange={e=>setLType(e.target.value)} style={{width:"100%", padding:8, border:"1px solid #ddd", borderRadius:8, marginTop:6}}>
            <option>By Contract</option><option>Daily Base</option>
          </select>
          {lType==="By Contract" ? <input type="number" value={contract} onChange={e=>setContract(Number(e.target.value))} style={{width:"100%", marginTop:6, padding:8, border:"1px solid #ddd", borderRadius:8}} /> : (
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginTop:6}}>
              <input type="number" value={leadC} onChange={e=>setLeadC(Number(e.target.value))} placeholder="Lead Count" style={{padding:8, border:"1px solid #ddd", borderRadius:8}} />
              <input type="number" value={leadR} onChange={e=>setLeadR(Number(e.target.value))} placeholder="Lead Rate" style={{padding:8, border:"1px solid #ddd", borderRadius:8}} />
              <input type="number" value={helpC} onChange={e=>setHelpC(Number(e.target.value))} placeholder="Helper Count" style={{padding:8, border:"1px solid #ddd", borderRadius:8}} />
              <input type="number" value={helpR} onChange={e=>setHelpR(Number(e.target.value))} placeholder="Helper Rate" style={{padding:8, border:"1px solid #ddd", borderRadius:8}} />
              <input type="number" value={days} onChange={e=>setDays(Number(e.target.value))} placeholder="Days" style={{padding:8, border:"1px solid #ddd", borderRadius:8}} />
              <div style={{padding:8, background:"#f3f4f6", borderRadius:8, fontSize:12, fontWeight:700}}>{fmt(labTotal)}</div>
            </div>
          )}
        </div>

        <div style={{background:"#0f172a", color:"#fff", padding:14, borderRadius:12, marginBottom:10}}>
          <div style={{fontSize:10, opacity:0.7}}>GRAND TOTAL</div>
          <div style={{fontSize:24, fontWeight:800, marginTop:2}}>{fmt(grand)}</div>
          <div style={{fontSize:11, opacity:0.7, marginTop:2}}>Mat {fmt(matTotal)} + Lab {fmt(labTotal)} + Add {fmt(addTotal)}</div>
        </div>

        <div style={{background:"#fff", padding:12, borderRadius:12, display:"flex", gap:6, border:"1px solid #e5e7eb"}}>
          <button onClick={dlCSV} style={{flex:1, background:"#16a34a", color:"#fff", border:"none", padding:10, borderRadius:8, fontWeight:700}}>Excel</button>
          <button onClick={dlPDF} style={{flex:1, background:"#2563eb", color:"#fff", border:"none", padding:10, borderRadius:8, fontWeight:700}}>PDF</button>
          <button onClick={dlJPG} style={{flex:1, background:"#111", color:"#fff", border:"none", padding:10, borderRadius:8, fontWeight:700}}>JPG</button>
        </div>
        {msg && <div style={{marginTop:8, background:"#111", color:"#fff", padding:8, borderRadius:8, textAlign:"center", fontSize:12}}>{msg}</div>}
      </div>
    </div>
  );
}
