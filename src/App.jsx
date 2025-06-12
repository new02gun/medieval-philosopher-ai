import React, { useState } from "react";
import ResultCard from "./components/ResultCard";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");
  const [result, setResult] = useState(null);

  const generateCharacter = () => {
    setResult({ name, mbti });
  };

  return (
    <div className="app">
      <h1>중세 유럽 캐릭터 생성기</h1>
      <input placeholder="당신의 이름" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="MBTI 성격 유형" value={mbti} onChange={(e) => setMbti(e.target.value)} />
      <button onClick={generateCharacter}>캐릭터 생성</button>
      {result && <ResultCard name={result.name} mbti={result.mbti} />}
    </div>
  );
}

export default App;
