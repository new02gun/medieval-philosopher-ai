import React from "react";
export default function ResultCard({ latinName, region, profession, declaration }) {
  return (
    <div className="card">
      <h2>{latinName}</h2>
      <p>📍 {region}</p>
      <p>💼 {profession}</p>
      <p>🕊️ {declaration}</p>
    </div>
  );
}