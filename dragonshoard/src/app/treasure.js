"use client";
import React, { useState } from "react";

function rollD6(x) {
  let sum = 0;
  for (let i = 0; i < x; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
  }
  return sum;
}
function rollD100() {
  return Math.floor(Math.random() * 100) + 1;
}
export default function Treasure() {
  const [selectedOption, setSelectedOption] = useState("0");
  function RollLoot() {
    let y = 0;
    let z = 0;
    let x = rollD100();
    console.log("Rolled: ", x);
    switch (selectedOption) {
      case "0":
        switch (true) {
          case x >= 1 && x <= 30:
            y = rollD6(5);
            console.log("You have found ", y, "Copper coins");
            break;
          case x >= 31 && x <= 60:
            y = rollD6(4);
            console.log("You have found ", y, "Silver coins");
            break;
          case x >= 61 && x <= 70:
            y = rollD6(3);
            console.log("You have found ", y, "Electrum coins");
            break;
          case x >= 71 && x <= 95:
            y = rollD6(3);
            console.log("You have found ", y, "Gold coins");
            break;
          case x >= 96 && x <= 100:
            y = rollD6(1);
            console.log("You have found ", y, "Platinum coins");
            break;
          default:
            console.log("Number is out of range");
        }
        break;
      case "1":
        switch (true) {
          case x >= 1 && x <= 30:
            y = rollD6(4) * 100;
            z = rollD6(1) * 10;
            console.log("You have found ", y, "Copper coins and ", z, "EP");
            break;
          case x >= 31 && x <= 60:
            y = rollD6(6) * 10;
            z = rollD6(2) * 10;
            console.log("You have found ", y, "Silver coins and ", z, "GP");
            break;
          case x >= 61 && x <= 70:
            y = rollD6(3) * 10;
            z = rollD6(2) * 10;
            console.log("You have found ", y, "Electrum coins and ", z, "GP");
            break;
          case x >= 71 && x <= 95:
            y = rollD6(4) * 10;
            console.log("You have found ", y, "Gold coins");
            break;
          case x >= 96 && x <= 100:
            y = rollD6(2) * 10;
            z = rollD6(3) * 10;
            console.log("You have found ", y, "Platinum coins and ", z, "GP");
            break;
          default:
            console.log("Number is out of range");
        }
        break;
      case "2":
        switch (true) {
          case x >= 1 && x <= 20:
            y = rollD6(4) * 100;
            z = rollD6(1) * 100;
            console.log("You have found ", y, "SP and ", z, "GP");
            break;
          case x >= 21 && x <= 35:
            y = rollD6(1) * 100;
            z = rollD6(1) * 100;
            console.log("You have found ", y, "EP and ", z, "GP");
            break;
          case x >= 36 && x <= 75:
            y = rollD6(2) * 100;
            z = rollD6(1) * 10;
            console.log("You have found ", y, "GP and ", z, "PP");
            break;
          case x >= 76 && x <= 100:
            y = rollD6(2) * 100;
            z = rollD6(2) * 10;
            console.log("You have found ", y, "Gold coins");
            break;

          default:
            console.log("Number is out of range");
        }
        break;
      case "3":
        switch (true) {
          case x >= 1 && x <= 15:
            y = rollD6(2) * 1000;
            z = rollD6(8) * 100;
            console.log("You have found ", y, "EP and ", z, "GP");
            break;
          case x >= 16 && x <= 55:
            y = rollD6(1) * 1000;
            z = rollD6(1) * 100;
            console.log("You have found ", y, "GP and ", z, "PP");
            break;
          case x >= 56 && x <= 100:
            y = rollD6(1) * 1000;
            z = rollD6(2) * 100;
            console.log("You have found ", y, "GP and ", z, "PP");
            break;
          default:
            console.log("out of bounds");
            break;
        }
        break;
    }
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
