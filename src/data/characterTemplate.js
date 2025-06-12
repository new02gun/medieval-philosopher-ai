// src/data/characterTemplate.js
export function generateMedievalCharacter(name, mbti) {
  const latinName = "Veritas Fidelis";
  const latinMeaning = "진실한 충직함";
  const place = "서기 1374년, 플랑드르 지역 수도원";
  const role = "진리의 기록자, 내면의 불꽃을 쫓는 자";
  const philosopher = "아빌라의 테레사";
  const declaration = "그대는 말보다 조용했고, 조용함으로 세상을 흔들었다.";

  return {
    latinName,
    latinMeaning,
    place,
    role,
    philosopher,
    declaration
  };
}
