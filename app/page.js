"use client";

import { useState } from "react";
import { Plus, Trash2, Download, Printer, FileSpreadsheet } from "lucide-react";

export default function ConstructionEstimate() {
  // ক্যাটাগরি এবং পপুলার উপাদানের ড্রপডাউন লিস্ট
  const materialCategories = [
    { name: "Custom / Enter Manually", unit: "Pcs" },
    { name: "Cement (Bag)", unit: "Bags" },
    { name: "Steel / TMT Bar (Kg)", unit: "Kg" },
    { name: "Sand (Cu.Ft)", unit: "Cu.Ft" },
    { name: "Aggregate / Stone (Cu.Ft)", unit: "Cu.Ft" },
    { name: "Red Bricks / AAC Blocks (Pcs)", unit: "Pcs" },
    { name: "Floor / Wall Tiles (Sq.Ft)", unit: "Sq.Ft" },
    { name: "Plywood / MDF (Sq.Ft)", unit: "Sq.Ft" },
    { name: "Laminate / Veneer (Sheet)", unit: "Sheet" },
    { name: "Wall Paint / Primer (Litre)", unit: "Litre" },
    { name: "Electrical Wire / Pipes (Meter)", unit: "Meter" },
    { name: "Plumbing Pipes & Fittings (Pcs)", unit: "Pcs" },
    { name: "Hardware / Hinges / Handles (Pcs)", unit: "Pcs" },
    { name: "Glass / Mirror (Sq.Ft)", unit: "Sq.Ft" },
  ];

  const [items, setItems] = useState([
    { id: 1, name: "Cement (Bag)", unit: "Bags", rate: 380, quantity: 50 },
    { id: 2, name: "Steel / TMT Bar (Kg)", unit: "Kg", rate: 65, quantity: 500 },
  ]);

  const [laborCost, setLaborCost] = useState(5000);
  const [transportCost, setTransportCost] = useState(2000);

  // নতুন আইটেম যোগ
  const handleAddItem = () => {
    setItems([
      ...items,
      { id: Date.now(), name: "Custom Material", unit: "Pcs", rate: 0, quantity: 1 },
    ]);
  };

  // আইটেম রিমুভ
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // আইটেম ফিল্ড আপডেট
  const handleItemChange = (id, field, value) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          if (field === "dropdown") {
            const selected = materialCategories.find((cat) => cat.name === value);
            return {
              ...item,
              name: value === "Custom / Enter Manually" ? "" : value,
              unit: selected ? selected.unit : "Pcs",
            };
          }
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // টোটাল হিসাব
  const subtotal = items.reduce(
    (acc, item) => acc + (Number(item.rate) || 0) * (Number(item.quantity) || 0),
    0
  );
  const grandTotal = subtotal + (Number(laborCost) || 0) + (Number(transportCost) || 0);

  // PDF & JPG ডাউনলোড (Browser Print Tooling)
  const handlePrint = () => {
    window.print();
  };

  // Excel (CSV) এমেডিকেট ডাউনলোড
  const handleDownloadExcel = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Item Name,Quantity,Unit,Rate,Total Amount\n";

    items.forEach((item) => {
      const itemTotal = (Number(item.rate) || 0) * (Number(item.quantity) || 0);
      csvContent += `"${item.name}",${item.quantity},${item.unit},${item.rate},${itemTotal}\n`;
    });

    csvContent += `\nSubtotal,,,,\u20B9${subtotal}\n`;
    csvContent += `Labor Charge,,,,\u20B9${laborCost}\n`;
    csvContent += `Transport Charge,,,,\u20B9${transportCost}\n`;
    csvContent += `Grand Total,,,,\u20B9${grandTotal}\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Construction_Estimate.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-4 md:p-8 font-sans">
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #printable-area, #printable-area * { visibility: visible; }
          #printable-area { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-slate-200 no-print">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">BuildNaro Estimator</h1>
            <p className="text-slate-500 text-sm">Construction & Interior Cost Calculator</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              <Printer className="w-4 h-4" /> Download PDF / Print
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              <Download className="w-4 h-4" /> Save as JPG
            </button>
            <button
              onClick={handleDownloadExcel}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              <FileSpreadsheet className="w-4 h-4" /> Export Excel
            </button>
          </div>
        </header>

        {/* Input Form Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6 no-print">
          <h2 className="text-lg font-semibold border-b pb-2">1. Add Materials & Costs</h2>
          
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-slate-50 p-3 rounded-lg border border-slate-200">
              <div className="md:col-span-4">
                <label className="text-xs text-slate-500 font-medium">Material Name</label>
                <select
                  className="w-full mt-1 p-2 border rounded-md text-sm bg-white"
                  onChange={(e) => handleItemChange(item.id, "dropdown", e.target.value)}
                  defaultValue={item.name}
                >
                  {materialCategories.map((cat, idx) => (
                    <option key={idx} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-3">
                <label className="text-xs text-slate-500 font-medium">Custom Name (Optional)</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                  placeholder="Material Name"
                  className="w-full mt-1 p-2 border rounded-md text-sm bg-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-slate-500 font-medium">Rate (₹)</label>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) => handleItemChange(item.id, "rate", e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md text-sm bg-white"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs text-slate-500 font-medium">Quantity ({item.unit})</label>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(item.id, "quantity", e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md text-sm bg-white"
                />
              </div>

              <div className="md:col-span-1 text-right mt-4 md:mt-0">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={handleAddItem}
            className="flex items-center gap-2 text-blue-600 font-medium text-sm hover:underline pt-2"
          >
            <Plus className="w-4 h-4" /> Add More Material
          </button>

          {/* Additional Charges */}
          <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Labour Charge (₹)</label>
              <input
                type="number"
                value={laborCost}
                onChange={(e) => setLaborCost(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Transport Charge (₹)</label>
              <input
                type="number"
                value={transportCost}
                onChange={(e) => setTransportCost(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
          </div>
        </div>

        {/* Printable A4 Sheet Estimate Preview */}
        <div
          id="printable-area"
          className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-slate-200 max-w-4xl mx-auto min-h-[1120px] flex flex-col justify-between"
        >
          <div>
            {/* Header / Invoice Top */}
            <div className="flex justify-between items-start border-b pb-6 mb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">BUILDNARO</h1>
                <p className="text-slate-500 text-sm">Construction & Interior Project Estimate</p>
              </div>
              <div className="text-right text-sm text-slate-500">
                <p>Date: {new Date().toLocaleDateString()}</p>
                <p>Estimate ID: #EST-{Math.floor(1000 + Math.random() * 9000)}</p>
              </div>
            </div>

            {/* Table */}
            <table className="w-full text-left border-collapse mb-6">
              <thead>
                <tr className="border-b border-slate-300 text-xs text-slate-500 uppercase font-semibold">
                  <th className="py-3 px-2">#</th>
                  <th className="py-3 px-2">Material Description</th>
                  <th className="py-3 px-2 text-right">Rate</th>
                  <th className="py-3 px-2 text-center">Qty / Unit</th>
                  <th className="py-3 px-2 text-right">Total (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {items.map((item, index) => {
                  const total = (Number(item.rate) || 0) * (Number(item.quantity) || 0);
                  return (
                    <tr key={item.id}>
                      <td className="py-3 px-2 text-slate-400">{index + 1}</td>
                      <td className="py-3 px-2 font-medium text-slate-800">{item.name || "Custom Material"}</td>
                      <td className="py-3 px-2 text-right">₹{item.rate}</td>
                      <td className="py-3 px-2 text-center">{item.quantity} {item.unit}</td>
                      <td className="py-3 px-2 text-right font-medium">₹{total.toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Calculations Breakdown */}
            <div className="flex justify-end pt-4 border-t border-slate-200">
              <div className="w-full md:w-1/2 space-y-2 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Materials Subtotal:</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Labour Cost:</span>
                  <span>₹{(Number(laborCost) || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Transportation Cost:</span>
                  <span>₹{(Number(transportCost) || 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-slate-900 border-t border-slate-300 pt-2">
                  <span>Grand Total:</span>
                  <span>₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 pt-6 mt-12 text-center text-xs text-slate-400">
            <p>This is a computer-generated estimate created via BuildNaro.</p>
            <p>Thank you for choosing our service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
