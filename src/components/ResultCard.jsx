import React from "react";

function ResultCard({ name, mbti }) {
  return (
    <div className="result-card">
      <h2>{name} (MBTI: {mbti})</h2>
      <p>중세 유럽의 지성인으로서 철학과 사유의 깊이를 탐구하는 당신은...</p>
    </div>
  );
}

export default ResultCard;
