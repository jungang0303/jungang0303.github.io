/* =========================================================
   중앙부동산 매물 데이터
   - 가격 단위: 만원 / 면적 단위: ㎡ (전용면적)
   - status: "공개" = 사이트에 표시, "거래완료" = 거래완료 표시, "비공개" = 숨김
   - 표시·광고 명시사항(국토부 고시) 기준 항목:
     소재지(주택은 지번·동·층수), 면적, 가격, 종류(건축물대장 용도), 거래형태,
     총 층수, 입주가능일, 방·욕실 수, 사용승인일, 주차대수, 관리비, 방향(기준 표시)
   - 공동주택 임대 매물은 호수를 쓰지 않습니다 (지번·층까지만).
   - 이 파일은 매물 관리 스킬로 수정합니다.
   ========================================================= */
window.LISTINGS = [
  {
    "id": "mukjeong-oneroom",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대후문 풀옵션 원룸",
    "loc": "중구 묵정동",
    "jibun": "22-12",
    "deal": "월세",
    "deposit": 500,
    "rent": 55,
    "fee": "2만원 (공용관리비, 수도 포함)",
    "area": 19.83,
    "floor": "2층",
    "totalFloor": "3층 (지하 1층)",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "1965년 4월 22일",
    "use": "단독주택",
    "parking": "불가",
    "violation": false,
    "movein": "2026년 12월 15일부터",
    "options": "벽걸이 에어컨, 냉장고, 세탁기, 인덕션, 싱크대, 신발장 / 개별난방",
    "tags": ["동대후문 도보 3분", "풀옵션"],
    "desc": "동대후문 도보 3분, 동대입구역 도보 5분, 동대문역사문화공원역 도보 7분 거리입니다. 동대 전산원 인근 평지에 위치해 있어 동대 후문, 중문, 지하철역 모두 도보로 이동하기 수월합니다.",
    "photos": [
      "listings/mukjeong-oneroom-1.jpg",
      "listings/mukjeong-oneroom-2.jpg",
      "listings/mukjeong-oneroom-3.jpg",
      "listings/mukjeong-oneroom-4.jpg",
      "listings/mukjeong-oneroom-5.jpg"
    ],
    "updated": "2026-10-30"
  },
  {
    "id": "jangchung-oneroom",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동국대 쪽문 도보 1분 원룸",
    "loc": "중구 장충동2가",
    "jibun": "193-50",
    "deal": "월세",
    "deposit": 500,
    "rent": 50,
    "fee": "3만원",
    "area": 16.53,
    "areaNote": "임대 부분 (호실 전용 59.79㎡ 중 일부)",
    "floor": "1층",
    "totalFloor": "4층 (지하 1층)",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "북향 (안방 기준)",
    "approval": "1997년 2월 14일",
    "use": "공동주택 (다세대주택)",
    "parking": "건물 전체 2대 (옥내 자주식, 건축물대장 기준)",
    "violation": false,
    "movein": "2026년 12월 12일 이후",
    "options": "냉장고, 세탁기, 에어컨, 싱크대, 신발장",
    "tags": ["전속", "동국대 도보 1분"],
    "desc": "냉장고, 세탁기, 에어컨, 싱크대, 신발장을 갖춘 오픈형 원룸입니다. 동국대학교 쪽문 도보 1분, 후문·중문 도보 5분, 동대입구역 도보 7분, 충무로역 도보 10분 거리입니다.",
    "photos": [
      "listings/jangchung-oneroom-1.jpg",
      "listings/jangchung-oneroom-2.jpg",
      "listings/jangchung-oneroom-3.jpg",
      "listings/jangchung-oneroom-4.jpg"
    ],
    "updated": "2026-10-29"
  }
];
