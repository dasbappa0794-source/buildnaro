"use client";
import { useState } from "react";
export default function AiToolGenerator(){
  const [prompt,setPrompt]=useState("");
  const [tool,setTool]=useState(null);
  const [values,setValues]=useState({});
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState(null);

  const generate=async()=>{
    setLoading(true); setTool(null); setResult(null);
    const res=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
    const data=await res.json();
    if(data.tool){
      setTool(data.tool);
      const init={}; data.tool.fields.forEach(f=>init[f.id]=f.defaultValue||0); setValues(init);
    } else { alert(data.error); }
    setLoading(false);
  };
  const calc=()=>{
    try{
      let formula=tool.formula;
      Object.keys(values).forEach(k=>{
        const re=new RegExp(`\\b${k}\\b`,"g");
        formula=formula.replace(re, `(${Number(values[k])||0})`);
      });
      const ans=Function(`"use strict"; return (${formula})`)();
      setResult(ans);
    }catch{ setResult("Error"); }
  };

  return(
    <div className="mt-4 p-4 border rounded-lg bg-white">
      <input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="e.g. tiles needed for room" className="w-full p-3 border rounded text-black" />
      <button onClick={generate} className="mt-2 bg-black text-white px-5 py-2 rounded w-full">{loading?"Generating...":"Generate Tool"}</button>
      {tool && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">{tool.title}</h3><p className="text-sm text-gray-600">{tool.description}</p>
          {tool.fields.map(f=>(
            <div key={f.id} className="mt-2"><label className="text-sm">{f.label} {f.unit}</label><input type="number" value={values[f.id]} onChange={e=>setValues({...values,[f.id]:e.target.value})} className="w-full p-2 border rounded text-black" /></div>
          ))}
          <button onClick={calc} className="mt-3 bg-green-600 text-white px-5 py-2 rounded w-full">Calculate</button>
          {result!==null && <div className="mt-3 p-3 bg-gray-100 rounded font-bold">{tool.resultLabel}: {result} {tool.resultUnit}</div>}
        </div>
      )}
    </div>
  );
}
