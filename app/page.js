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

  const updateQty = (i, v) => {
    const copy = [...materials];
    copy[i].qty = Number(v);
    setMaterials(copy);
  };

  const total = materials.reduce((s, m) => s + m.qty * m.rate, 0);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Build<span className="text-blue-600">Naro</span></h1>
          <p className="text-gray-500 mt-1">House Construction Cost Calculator</p>
        </div>

        <div className="mb-6">
          <label className="font-semibold">Project Name</label>
          <input value={project} onChange={(e)=>setProject(e.target.value)}
            className="w-full mt-1 border rounded-lg p-2.5" placeholder="My Construction Project" />
        </div>

        <h2 className="font-bold text-lg mb-3">Materials (BOQ)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr><th className="p-2 text-left">Material</th><th className="p-2">Unit</th><th className="p-2">Qty</th><th className="p-2">Rate (₹)</th><th className="p-2">Amount</th></tr>
            </thead>
            <tbody>
              {materials.map((m,i)=>(
                <tr key={i} className="border-t">
                  <td className="p-2 font-medium">{m.name}</td>
                  <td className="p-2 text-center">{m.unit}</td>
                  <td className="p-2"><input type="number" value={m.qty} onChange={(e)=>updateQty(i,e.target.value)} className="w-20 border rounded p-1 text-center" /></td>
                  <td className="p-2 text-center">₹{m.rate}</td>
                  <td className="p-2 text-right font-semibold">₹{(m.qty*m.rate).toLocaleString('en-IN')}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold border-t-2">
                <td colSpan="4" className="p-3 text-right">Grand Total:</td>
                <td className="p-3 text-right text-blue-700 text-lg">₹{total.toLocaleString('en-IN')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-xl border">
          <p className="text-sm text-gray-600">Prepared for: <b>{project}</b></p>
          <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString('en-GB')}</p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">BuildNaro — Simple & Fast Construction Calculator</p>
      </div>
    </main>
  );
}
