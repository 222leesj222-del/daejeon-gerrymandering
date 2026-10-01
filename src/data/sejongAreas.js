// 데이터 출처
// - 득표: 2022년 제8회 전국동시지방선거 동별 정당별 득표수. 여러 투표구로 나뉜 동은 동 단위로 합산했다.
// - 인구: 동별 인구 자료가 없어 '두 정당 득표수의 합'(투표수)을 인구 대신 사용한다.
// - 경계: HangJeongDong ver20220401 행정동 경계. 노은1·2·3동처럼 번호로 나뉜 동은
//   표와 맞추기 위해 하나로 합쳤다(공유 경계선 제거). 대전 5개 구 65개 동.

export const PARTIES = [
  { id: "DEM", name: "민주당", shortName: "민주", color: "#1B6BFF", soft: "#E6EEFF" },
  { id: "PPP", name: "국민의힘", shortName: "국힘", color: "#E34848", soft: "#FEECEC" },
];

export const PARTY_IDS = PARTIES.map((party) => party.id);

export const ELECTION_INFO = {
  name: "2022년 제8회 전국동시지방선거",
  date: "2022-06-01",
  sourceLabel: "중앙선거관리위원회 선거통계자료(동별 합산)",
};

export const POPULATION_BASIS = {
  label: "2022년 지방선거 동별 투표수(인구 대용)",
  sourceLabel: "중앙선거관리위원회 선거통계자료",
};

// id: 내부 키, name: 실제 행정구역명
// population: 투표수 합계(인구 대용), votes: 정당별 득표수
export const SEJONG_AREAS_RAW = [
  { id: "a01", name: "은행선화동", population: 4831, votes: { DEM: 2291, PPP: 2540 } },
  { id: "a02", name: "목동", population: 5314, votes: { DEM: 2966, PPP: 2348 } },
  { id: "a03", name: "중촌동", population: 5504, votes: { DEM: 2539, PPP: 2965 } },
  { id: "a04", name: "대흥동", population: 4692, votes: { DEM: 2297, PPP: 2395 } },
  { id: "a05", name: "문창동", population: 1976, votes: { DEM: 842, PPP: 1134 } },
  { id: "a06", name: "석교동", population: 5997, votes: { DEM: 2404, PPP: 3593 } },
  { id: "a07", name: "대사동", population: 2165, votes: { DEM: 874, PPP: 1291 } },
  { id: "a08", name: "부사동", population: 2603, votes: { DEM: 1156, PPP: 1447 } },
  { id: "a09", name: "용두동", population: 3832, votes: { DEM: 1855, PPP: 1977 } },
  { id: "a10", name: "오류동", population: 4486, votes: { DEM: 1971, PPP: 2515 } },
  { id: "a11", name: "태평동", population: 15488, votes: { DEM: 6994, PPP: 8494 } },
  { id: "a12", name: "유천동", population: 7713, votes: { DEM: 3180, PPP: 4533 } },
  { id: "a13", name: "문화동", population: 13773, votes: { DEM: 5998, PPP: 7775 } },
  { id: "a14", name: "산성동", population: 9581, votes: { DEM: 3997, PPP: 5584 } },
  { id: "a15", name: "진잠동", population: 8780, votes: { DEM: 4504, PPP: 4276 } },
  { id: "a16", name: "학하동", population: 6157, votes: { DEM: 2989, PPP: 3168 } },
  { id: "a17", name: "원신흥동", population: 10160, votes: { DEM: 5162, PPP: 4998 } },
  { id: "a18", name: "상대동", population: 8509, votes: { DEM: 4134, PPP: 4375 } },
  { id: "a19", name: "온천동", population: 24061, votes: { DEM: 11879, PPP: 12182 } },
  { id: "a20", name: "노은동", population: 31562, votes: { DEM: 17430, PPP: 14132 } },
  { id: "a21", name: "신성동", population: 9440, votes: { DEM: 4809, PPP: 4631 } },
  { id: "a22", name: "전민동", population: 10932, votes: { DEM: 5945, PPP: 4987 } },
  { id: "a23", name: "구즉동", population: 9414, votes: { DEM: 5250, PPP: 4164 } },
  { id: "a24", name: "관평동", population: 11052, votes: { DEM: 5937, PPP: 5115 } },
  { id: "a25", name: "복수동", population: 7838, votes: { DEM: 3942, PPP: 3896 } },
  { id: "a26", name: "도마동", population: 11815, votes: { DEM: 4789, PPP: 7026 } },
  { id: "a27", name: "정림동", population: 6581, votes: { DEM: 3004, PPP: 3577 } },
  { id: "a28", name: "변동", population: 5247, votes: { DEM: 2251, PPP: 2996 } },
  { id: "a29", name: "용문동", population: 4196, votes: { DEM: 1831, PPP: 2365 } },
  { id: "a30", name: "탄방동", population: 8260, votes: { DEM: 3935, PPP: 4325 } },
  { id: "a31", name: "둔산동", population: 28646, votes: { DEM: 13743, PPP: 14903 } },
  { id: "a32", name: "괴정동", population: 4818, votes: { DEM: 2387, PPP: 2431 } },
  { id: "a33", name: "가장동", population: 4692, votes: { DEM: 2038, PPP: 2654 } },
  { id: "a34", name: "내동", population: 8712, votes: { DEM: 3957, PPP: 4755 } },
  { id: "a35", name: "갈마동", population: 13956, votes: { DEM: 6624, PPP: 7332 } },
  { id: "a36", name: "월평동", population: 19265, votes: { DEM: 9161, PPP: 10104 } },
  { id: "a37", name: "만년동", population: 5342, votes: { DEM: 2725, PPP: 2617 } },
  { id: "a38", name: "가수원동", population: 14486, votes: { DEM: 7358, PPP: 7128 } },
  { id: "a39", name: "관저동", population: 21824, votes: { DEM: 11983, PPP: 9841 } },
  { id: "a40", name: "기성동", population: 1627, votes: { DEM: 620, PPP: 1007 } },
  { id: "a41", name: "중앙동", population: 1833, votes: { DEM: 678, PPP: 1155 } },
  { id: "a42", name: "신인동", population: 5865, votes: { DEM: 2644, PPP: 3221 } },
  { id: "a43", name: "효동", population: 8119, votes: { DEM: 4024, PPP: 4095 } },
  { id: "a44", name: "판암동", population: 8912, votes: { DEM: 3856, PPP: 5056 } },
  { id: "a45", name: "용운동", population: 8259, votes: { DEM: 3874, PPP: 4385 } },
  { id: "a46", name: "대동", population: 5633, votes: { DEM: 2604, PPP: 3029 } },
  { id: "a47", name: "자양동", population: 3806, votes: { DEM: 1669, PPP: 2137 } },
  { id: "a48", name: "가양동", population: 11582, votes: { DEM: 4981, PPP: 6601 } },
  { id: "a49", name: "용전동", population: 6523, votes: { DEM: 3003, PPP: 3520 } },
  { id: "a50", name: "성남동", population: 4552, votes: { DEM: 2085, PPP: 2467 } },
  { id: "a51", name: "홍도동", population: 3918, votes: { DEM: 1800, PPP: 2118 } },
  { id: "a52", name: "삼성동", population: 5548, votes: { DEM: 2496, PPP: 3052 } },
  { id: "a53", name: "대청동", population: 1116, votes: { DEM: 345, PPP: 771 } },
  { id: "a54", name: "산내동", population: 6817, votes: { DEM: 3109, PPP: 3708 } },
  { id: "a55", name: "오정동", population: 5244, votes: { DEM: 2236, PPP: 3008 } },
  { id: "a56", name: "대화동", population: 2691, votes: { DEM: 1198, PPP: 1493 } },
  { id: "a57", name: "회덕동", population: 5209, votes: { DEM: 2299, PPP: 2910 } },
  { id: "a58", name: "비래동", population: 6393, votes: { DEM: 2925, PPP: 3468 } },
  { id: "a59", name: "송촌동", population: 10379, votes: { DEM: 5404, PPP: 4975 } },
  { id: "a60", name: "중리동", population: 6584, votes: { DEM: 2974, PPP: 3610 } },
  { id: "a61", name: "법동", population: 12174, votes: { DEM: 5707, PPP: 6467 } },
  { id: "a62", name: "신탄진동", population: 5830, votes: { DEM: 2702, PPP: 3128 } },
  { id: "a63", name: "석봉동", population: 5798, votes: { DEM: 2950, PPP: 2848 } },
  { id: "a64", name: "덕암동", population: 4920, votes: { DEM: 2300, PPP: 2620 } },
  { id: "a65", name: "목상동", population: 2278, votes: { DEM: 1134, PPP: 1144 } },
];

// 경계선을 2개 이상의 꼭짓점으로 공유하는 동끼리를 인접으로 계산했다.
export const AREA_NEIGHBORS = {
  a01: ["a02", "a03", "a04", "a09", "a13", "a41", "a52"],
  a02: ["a01", "a03", "a09"],
  a03: ["a01", "a02", "a09", "a29", "a30", "a31", "a52", "a55"],
  a04: ["a01", "a05", "a07", "a08", "a13", "a41", "a42"],
  a05: ["a04", "a06", "a08", "a42", "a43"],
  a06: ["a05", "a07", "a08", "a14", "a43", "a54"],
  a07: ["a04", "a06", "a08", "a13", "a14"],
  a08: ["a04", "a05", "a06", "a07"],
  a09: ["a01", "a02", "a03", "a10", "a11", "a13", "a29"],
  a10: ["a09", "a11", "a12", "a13"],
  a11: ["a09", "a10", "a12", "a26", "a28", "a29", "a33"],
  a12: ["a10", "a11", "a13", "a14", "a26"],
  a13: ["a01", "a04", "a07", "a09", "a10", "a12", "a14"],
  a14: ["a06", "a07", "a12", "a13", "a25", "a26", "a27", "a54"],
  a15: ["a16", "a17", "a18", "a38", "a39", "a40"],
  a16: ["a15", "a18", "a19", "a20"],
  a17: ["a15", "a18", "a19", "a36", "a38"],
  a18: ["a15", "a16", "a17", "a19"],
  a19: ["a16", "a17", "a18", "a20", "a21", "a36", "a37"],
  a20: ["a16", "a19", "a21"],
  a21: ["a19", "a20", "a22", "a23", "a24", "a37", "a56"],
  a22: ["a21", "a24", "a56", "a57"],
  a23: ["a21", "a24", "a65"],
  a24: ["a21", "a22", "a23", "a57", "a64", "a65"],
  a25: ["a14", "a26", "a27"],
  a26: ["a11", "a12", "a14", "a25", "a27", "a28", "a36", "a38"],
  a27: ["a14", "a25", "a26", "a38", "a40"],
  a28: ["a11", "a26", "a33", "a34", "a36"],
  a29: ["a03", "a09", "a11", "a30", "a32", "a33"],
  a30: ["a03", "a29", "a31", "a32", "a35"],
  a31: ["a03", "a30", "a35", "a36", "a37", "a55", "a56"],
  a32: ["a29", "a30", "a33", "a34", "a35"],
  a33: ["a11", "a28", "a29", "a32", "a34"],
  a34: ["a28", "a32", "a33", "a35", "a36"],
  a35: ["a30", "a31", "a32", "a34", "a36"],
  a36: ["a17", "a19", "a26", "a28", "a31", "a34", "a35", "a37", "a38"],
  a37: ["a19", "a21", "a31", "a36", "a56"],
  a38: ["a15", "a17", "a26", "a27", "a36", "a39", "a40"],
  a39: ["a15", "a38", "a40"],
  a40: ["a15", "a27", "a38", "a39"],
  a41: ["a01", "a04", "a42", "a46", "a47", "a48", "a52"],
  a42: ["a04", "a05", "a41", "a43", "a44", "a46"],
  a43: ["a05", "a06", "a42", "a44", "a54"],
  a44: ["a42", "a43", "a45", "a46", "a53", "a54"],
  a45: ["a44", "a46", "a47", "a48", "a53"],
  a46: ["a41", "a42", "a44", "a45", "a47"],
  a47: ["a41", "a45", "a46", "a48"],
  a48: ["a41", "a45", "a47", "a49", "a50", "a52", "a53", "a58", "a59"],
  a49: ["a48", "a50", "a51", "a55", "a59", "a60"],
  a50: ["a48", "a49", "a51", "a52"],
  a51: ["a49", "a50", "a52", "a55"],
  a52: ["a01", "a03", "a41", "a48", "a50", "a51", "a55"],
  a53: ["a44", "a45", "a48", "a54", "a57", "a58", "a62"],
  a54: ["a06", "a14", "a43", "a44", "a53"],
  a55: ["a03", "a31", "a49", "a51", "a52", "a56", "a60"],
  a56: ["a21", "a22", "a31", "a37", "a55", "a57", "a60", "a61"],
  a57: ["a22", "a24", "a53", "a56", "a61", "a62", "a64"],
  a58: ["a48", "a53", "a59", "a61"],
  a59: ["a48", "a49", "a58", "a60", "a61"],
  a60: ["a49", "a55", "a56", "a59", "a61"],
  a61: ["a56", "a57", "a58", "a59", "a60"],
  a62: ["a53", "a57", "a63", "a64"],
  a63: ["a62", "a64", "a65"],
  a64: ["a24", "a57", "a62", "a63", "a65"],
  a65: ["a23", "a24", "a63", "a64"],
};

export const SEJONG_AREAS = SEJONG_AREAS_RAW.map((area) => ({
  ...area,
  neighbors: AREA_NEIGHBORS[area.id] || [],
}));

export const AREA_BY_ID = Object.fromEntries(SEJONG_AREAS.map((area) => [area.id, area]));

export const AREA_IDS = SEJONG_AREAS.map((area) => area.id);

export function getTotalPopulation() {
  return SEJONG_AREAS.reduce((sum, area) => sum + area.population, 0);
}

export function getTotalVotes() {
  return SEJONG_AREAS.reduce(
    (sum, area) => {
      sum.DEM += area.votes.DEM;
      sum.PPP += area.votes.PPP;
      return sum;
    },
    { DEM: 0, PPP: 0 },
  );
}
