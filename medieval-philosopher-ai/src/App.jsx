import React, { useState } from "react";
import { mbtiMap, keywords } from "./data";
import ResultCard from "./components/ResultCard";
import "./style.css";

export default function App() {
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("INFJ");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  const handleGenerate = () => {
    const mb = mbtiMap[mbti];
    const keyLat = keywords[keyword.toLowerCase()] || "";
    const latinName = `${mb.nameRoot}${keyLat ? " " + keyLat : ""}`;
    const declaration = `그대는 ${mb.region}에서 탄생해, "${latinName}"로 철학의 길을 걸었도다.`;
    setResult({ latinName, region: mb.region, profession: mb.profession, declaration });
  };

  return (
    <div className="app">
      <h1>🏛️ 중세 철학자 시뮬레이터</h1>
      <input placeholder="이름" value={name} onChange={e => setName(e.target.value)} />
      <select value={mbti} onChange={e => setMbti(e.target.value)}>
        {Object.keys(mbtiMap).map(m => <option key={m}>{m}</option>)}
      </select>
      <input placeholder="키워드 (fire, wisdom 등)" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleGenerate}>Generate</button>
      {result && <ResultCard {...result} />}
    </div>
  );
}