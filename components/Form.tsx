import React from "react";

export default function Form({ data, item, onChange }) {
  return (
      <div className="w-1/3 flex-wrap">
        <h2 className="text-3xl p-4">{item}</h2>
        <div className="p-4">
          <label className="block">Calories</label>
          <input
            type="number"
            name={item + " Calories"}
            onChange={(e) => onChange(e)}
            className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="p-4">
          <label className="block">Carbs</label>
          <input
            type="number"
            name={item + " Carbs"} 
            onChange={(e) => onChange(e)}
            className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="p-4">
          <label className="block">Fat</label>
          <input
            type="number"
            onChange={(e) => onChange(e)}
            name={item + " Fat"} 
            className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="p-4">
          <label className="block">Protein</label>
          <input
            type="number"
            onChange={(e) => onChange(e)}
            name={item + " Protein"} 
            className="bg-gray-200 text-green-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
      </div>
   
  );
}
