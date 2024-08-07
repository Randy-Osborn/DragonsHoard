"use client";
import React, { useState } from "react";

export default function Treasure() {
  const [selectedOption, setSelectedOption] = useState("0");
  function RollLoot() {
    console.log("Selected Challenge Rating:", selectedOption);
  }

  return (
    <main className="flex flex-col items-center justify-between border border-gray-400">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold">Challenge Rating</h1>
        <select
          className="p-2 border border-gray-300 bg-gray-500 rounded-md"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="0">0-4</option>
          <option value="1">5-10</option>
          <option value="2">11-16</option>
          <option value="3">17+</option>
        </select>
      </div>

      <button
        onClick={RollLoot}
        className="mt-auto mr-auto p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Roll Loot
      </button>
    </main>
  );
}
