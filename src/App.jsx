// 📁 src/App.jsx
import React, { useState } from 'react';
import { generateMedievalCharacter } from './data/characterTemplate';

export default function App() {
  const [userName, setUserName] = useState('');
  const [mbti, setMbti] = useState('');
  const [character, setCharacter] = useState(null);

  const handleGenerate = () => {
    if (!userName || !mbti) return;
    const result = generateMedievalCharacter(userName, mbti);
    setCharacter(result);
  };

  return (
    <div style={{ fontFamily: 'serif', padding: '2rem', backgroundColor: '#f4f1ea', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🏰 중세 철학자 캐릭터 생성기</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <input
          type="text"
          placeholder="MBTI를 입력하세요 (예: INFJ)"
          value={mbti}
          onChange={(e) => setMbti(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
        <button onClick={handleGenerate} style={{ padding: '0.5rem 1rem', marginLeft: '1rem' }}>생성</button>
      </div>

      {character && (
        <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h2>📜 라틴 이름: {character.latinName}</h2>
          <p><strong>의미:</strong> {character.latinMeaning}</p>
          <p><strong>🏰 거주 지역:</strong> {character.place}</p>
          <p><strong>💼 역할:</strong> {character.role}</p>
          <p><strong>🎓 유사 인물:</strong> {character.philosopher}</p>
          <p><strong>✨ 운명 선언문:</strong><br />"{character.declaration}"</p>
        </div>
      )}
    </div>
  );
}
