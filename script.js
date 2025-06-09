let currentHouse = null;

const houseDescriptions = [
  "House 1：一宮 自我與起點。你的人生總是從零開始，擁有無限潛力。",
  "House 2：二宮 財富與價值。你擅長創造與守護資源，金錢觀強烈。",
  "House 3：三宮 交流與思考。你口才與文字能力出眾，善於學習與傳遞知識。",
  "House 4：四宮 家庭與根基。家庭對你而言極其重要，你需要穩固的歸屬感。",
  "House 5：五宮 創造與浪漫。你熱愛表達、創作與戀愛，是生命的藝術家。",
  "House 6：六宮 服務與健康。你重視規律、工作效率，關心身心平衡。",
  "House 7：七宮 關係與合作。你的人生課題在於人際關係與相互承諾。",
  "House 8：八宮 轉化與神秘。你常經歷深刻轉變，擁有強烈的直覺力。",
  "House 9：九宮 探索與哲思。你熱愛冒險、旅行與追求人生意義。",
  "House 10：十宮 成就與責任。你志向遠大，努力實現人生使命。",
  "House 11：十一宮 社群與未來。你關心大眾，擁有創新與改革的精神。",
  "House 12：十二宮 潛意識與療癒。你深邃敏感，擁有療癒他人或自己的能力。"
];

function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}

function calculate() {
  // 取生日
  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) return;

  // 算年齡
  const today = new Date();
  const bdate = new Date(birthdate);
  let age = today.getFullYear() - bdate.getFullYear();
  const m = today.getMonth() - bdate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < bdate.getDate())) {
    age--;
  }

  // 算 house
  const house = (age % 12) + 1;
  window.calculatedHouse = house;

  // 顯示結果
  const ageResult = document.getElementById("ageResult");
  ageResult.textContent = `你目前的年齡是 ${age} 歲，對應 House：${house}`;
  ageResult.classList.add("visible");  // <== 關鍵步驟
}

function showEvent() {
  if (!window.calculatedHouse) return;

  const house = window.calculatedHouse;
  const eventResult = document.getElementById("eventResult");

  ];

  eventResult.textContent = `你的小限：「${events[house - 1]}」`;
  eventResult.classList.add("visible");
}
