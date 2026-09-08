"use client";
import { useState, useMemo } from "react";

export default function Page(){
  const [project, setProject] = useState("My Construction Project Bappa");
  const [mats, setMats] = useState([
    {mat:"Cement", brand:"ACC", spec:"-", unit:"Bag", qty:250, rate:500},
    {mat:"TMT Steel Bars", brand:"Local / Unbranded", spec:"-", unit:"Kg", qty:0, rate:65},
    {mat:"Bricks", brand:"Local / Unbranded", spec:"-", unit:"Nos", qty:0, rate:9},
    {mat:"TMT Steel Bars", brand:"TATA Tiscon", spec:"6 mm", unit:"Nos", qty:0, rate:68},
  ]);
  const [labour, setLabour] = useState(200000);
  const [transport, setTransport] = useState(10000);
  
  const subtotal = mats.reduce((s,m)=>s+m.qty*m.rate,0);
  const grand = subtotal + labour + transport;
  const fmt = (n)=> "₹"+n.toLocaleString("en-IN",{minimumFractionDigits:2});

  return (
    <div style={{background:"#f8f9fa", minHeight:"100vh", padding:20}}>
      <div style={{maxWidth:850, margin:"0 auto", background:"#fff", padding:24, borderRadius:12}}>
        <div style={{fontSize:22, fontWeight:800}}>Build<span style={{color:"#2563eb"}}>Naro</span> — Construction Estimate Calculator</div>
        <div style={{fontSize:13, color:"#666", marginTop:6}}>Prepared for: <b>{project}</b><br/>Generated on: {new Date().toLocaleDateString("en-IN")}</div>

        <div style={{marginTop:20, borderTop:"1px solid #e5e7eb"}}>
          <div style={{display:"flex", gap:10, fontSize:11, fontWeight:700, color:"#6b7280", padding:"10px 0", borderBottom:"1px solid #e5e7eb"}}>
            <div style={{flex:1.2}}>MATERIAL</div><div style={{flex:1.2}}>BRAND</div><div style={{flex:0.8}}>SIZE / SPEC</div><div style={{flex:0.5}}>UNIT</div><div style={{flex:0.4}}>QTY</div><div style={{flex:0.6}}>RATE</div><div style={{flex:0.8, textAlign:"right"}}>AMOUNT</div>
          </div>
          {mats.map((m,i)=>(
            <div key={i} style={{display:"flex", gap:10, padding:"10px 0", borderBottom:"1px solid #f3f4f6", fontSize:13}}>
              <div style={{flex:1.2}}>{m.mat}</div><div style={{flex:1.2}}>{m.brand}</div><div style={{flex:0.8}}>{m.spec}</div><div style={{flex:0.5}}>{m.unit}</div><div style={{flex:0.4}}>{m.qty}</div><div style={{flex:0.6}}>{fmt(m.rate)}</div><div style={{flex:0.8, textAlign:"right", fontWeight:600}}>{fmt(m.qty*m.rate)}</div>
            </div>
          ))}
        </div>

        <div style={{marginTop:20}}>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #eee"}}><span>Material Subtotal</span><b>{fmt(subtotal)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #eee"}}><span>Labour</span><b>{fmt(labour)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #eee"}}><span>Transport</span><b>{fmt(transport)}</b></div>
          <div style={{display:"flex", justifyContent:"space-between", padding:"14px 0", borderTop:"2px solid #111", fontWeight:800, fontSize:18}}><span>Grand Total</span><span>{fmt(grand)}</span></div>
          <div style={{fontSize:11, color:"#aaa", marginTop:12}}>Rates are user-entered estimates and may vary from actual market prices.</div>
        </div>
      </div>
    </div>
  );
}
