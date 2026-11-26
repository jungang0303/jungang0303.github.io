/* =========================================================
   중앙부동산 매물 데이터
   - 가격 단위: 만원 / 면적 단위: ㎡ (전용면적)
   - status: "공개" = 사이트에 표시, "거래완료" = 거래완료 표시
   - 비공개(숨김) 매물은 이 파일과 사진 폴더에서 빼서 바탕화면 홈페이지_중앙부동산\비공개_보관에 둡니다
     (이 파일은 누구나 내려받을 수 있으므로). 다시 올릴 때 보관 파일에서 되살립니다.
   - 표시·광고 명시사항(국토부 고시) 기준 항목:
     소재지(주택은 지번·동·층수), 면적, 가격, 종류(건축물대장 용도), 거래형태,
     총 층수, 입주가능일, 방·욕실 수, 사용승인일, 주차대수, 관리비, 방향(기준 표시)
   - 공동주택 임대 매물은 호수를 쓰지 않습니다 (지번·층까지만).
   - areaLabel: 전용면적이 아닌 경우 표시 이름 (예: "연면적", "면적"). 없으면 "전용".
   - lease: 매매 매물의 현재 임대 현황. violation: true/false, 확인 안 된 경우 항목 생략.
   - zh / en: 중국어·영어 화면용 제목(title)·태그(tags)·설명(desc)·면적 비고(areaNote). 매물을 올릴 때 함께 넣습니다.
   - 이 파일은 매물 관리 스킬로 수정합니다.
   ========================================================= */
window.LISTINGS = [
  {
    "id": "jangchung-oneroom-6",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대쪽문 분리형 원룸",
    "loc": "중구 장충동2가",
    "jibun": "193-337",
    "deal": "월세",
    "deposit": 1000,
    "rent": 70,
    "fee": "5만원 (수도, 인터넷 포함)",
    "area": 26.44,
    "floor": "3층",
    "totalFloor": "3층",
    "rooms": "방 1개 (분리형)",
    "baths": "욕실 1개",
    "dir": "동향 (거실 기준)",
    "approval": "1970년 9월 10일",
    "use": "단독주택",
    "parking": "불가",
    "violation": false,
    "movein": "2027년 2월 23일부터",
    "options": "벽걸이 에어컨, 침대, 옷장, 냉장고, 세탁기, 인덕션, 현관보안 / 개별난방",
    "tags": [
      "동대 쪽문 도보 1분",
      "분리형 1.5룸"
    ],
    "desc": "동대쪽문 도보1분, 동대입구역 도보5분 거리\n방과 거실이 분리된 1.5룸\n냉장고, 세탁기, 에어컨, 싱크대, 전기쿡탑 기본 옵션\n침실과 생활 공간이 분리된 원룸 찾으시는 학생분들에게 추천 합니다.",
    "photos": [
      "listings/jangchung-oneroom-6-1.jpg",
      "listings/jangchung-oneroom-6-2.jpg",
      "listings/jangchung-oneroom-6-3.jpg",
      "listings/jangchung-oneroom-6-4.jpg",
      "listings/jangchung-oneroom-6-5.jpg",
      "listings/jangchung-oneroom-6-6.jpg"
    ],
    "updated": "2026-11-26",
    "zh": {
      "title": "东国大侧门 分离式一室",
      "tags": [
        "东国大侧门步行1分钟",
        "分离式1.5室"
      ],
      "desc": "距东国大侧门步行1分钟，东大入口站步行5分钟\n卧室与客厅分离的1.5室\n冰箱、洗衣机、空调、水槽、电磁炉为基本配置\n推荐给想找卧室与生活空间分离的一室的学生。"
    },
    "en": {
      "title": "Separate-room studio near Dongguk side gate",
      "tags": [
        "1 min walk to Dongguk side gate",
        "1.5-room layout"
      ],
      "desc": "1-minute walk to the Dongguk side gate, 5 minutes to Dongguk Univ. Station.\nA 1.5-room unit with the bedroom separated from the living area.\nRefrigerator, washing machine, air conditioner, sink and electric cooktop included.\nRecommended for students who want a studio with separate sleeping and living spaces."
    }
  },
  {
    "id": "mukjeong-oneroom-2",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대후문 주방분리형 원룸",
    "loc": "중구 묵정동",
    "jibun": "24-7",
    "deal": "월세",
    "deposit": 1000,
    "rent": 69,
    "fee": "9만원 (공용관리비, 수도, 인터넷 포함)",
    "area": 19.83,
    "floor": "2층",
    "totalFloor": "지상 2층, 지하 1층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "서향 (안방 기준)",
    "approval": "1992년 6월 13일",
    "use": "단독주택",
    "parking": "불가",
    "movein": "2027년 2월 19일부터",
    "options": "벽걸이 에어컨, 옷장, 신발장, 냉장고, 세탁기, 인덕션, CCTV / 개별난방",
    "tags": [
      "동대 후문 도보 3분",
      "주방 분리형"
    ],
    "desc": "동대 후문 도보3분 거리에 위치한 주방 분리형 풀옵션 원룸\n초등학교 인근에 위치해 있어 치안 걱정 없는 안심 원룸.\n동국대 또는 인근 CJ직장인분들께 추천 드립니다.",
    "photos": [
      "listings/mukjeong-oneroom-2-1.jpg",
      "listings/mukjeong-oneroom-2-2.jpg",
      "listings/mukjeong-oneroom-2-3.jpg",
      "listings/mukjeong-oneroom-2-4.jpg",
      "listings/mukjeong-oneroom-2-5.jpg"
    ],
    "updated": "2026-11-24",
    "zh": {
      "title": "东国大后门 厨房分离式一室",
      "tags": [
        "东国大后门步行3分钟",
        "厨房分离式"
      ],
      "desc": "位于东国大后门步行3分钟处的厨房分离式全配置一室。\n靠近小学，治安放心的安心一室。\n推荐给东国大学生或附近CJ上班族。"
    },
    "en": {
      "title": "Studio with separate kitchen near Dongguk Univ. back gate",
      "tags": [
        "3 min walk to Dongguk back gate",
        "Separate kitchen"
      ],
      "desc": "Fully furnished studio with a separate kitchen, a 3-minute walk from the Dongguk University back gate.\nNear an elementary school, so the area feels safe.\nRecommended for Dongguk students and nearby CJ office workers."
    }
  },
  {
    "id": "mukjeong-oneroom-3",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동국대 후문 풀옵션 원룸",
    "loc": "중구 묵정동",
    "jibun": "24-7",
    "deal": "월세",
    "deposit": 1000,
    "rent": 69,
    "fee": "9만원 (공용관리비, 수도, 인터넷 포함)",
    "area": 19.8,
    "floor": "2층",
    "totalFloor": "지상 2층, 지하 1층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "1992년 6월 13일",
    "use": "단독주택",
    "parking": "불가",
    "movein": "2027년 2월 15일부터",
    "options": "벽걸이 에어컨, 옷장, 신발장, 냉장고, 세탁기, 인덕션, CCTV / 개별난방",
    "tags": [
      "동대 후문 도보 5분",
      "풀옵션"
    ],
    "desc": "동대후문 도보5분, 동대 중문 도보5분 거리 풀옵션 깨끗한 원룸 입니다.\n초등학교 인근에 위치해 있어 치안 걱정 없는 안심 원룸.\n동국대 또는 인근 CJ직장인분들께 추천 드립니다.",
    "photos": [
      "listings/mukjeong-oneroom-3-1.jpg",
      "listings/mukjeong-oneroom-3-2.jpg",
      "listings/mukjeong-oneroom-3-3.jpg",
      "listings/mukjeong-oneroom-3-4.jpg",
      "listings/mukjeong-oneroom-3-5.jpg",
      "listings/mukjeong-oneroom-3-6.jpg"
    ],
    "updated": "2026-11-24",
    "zh": {
      "title": "东国大后门 全配置一室",
      "tags": [
        "东国大后门步行5分钟",
        "全配置"
      ],
      "desc": "距东国大后门步行5分钟、中门步行5分钟的干净全配置一室。\n靠近小学，治安放心的安心一室。\n推荐给东国大学生或附近CJ上班族。"
    },
    "en": {
      "title": "Fully furnished studio near Dongguk Univ. back gate",
      "tags": [
        "5 min walk to Dongguk back gate",
        "Fully furnished"
      ],
      "desc": "Clean, fully furnished studio, a 5-minute walk from both the back gate and the middle gate of Dongguk University.\nNear an elementary school, so the area feels safe.\nRecommended for Dongguk students and nearby CJ office workers."
    }
  },
  {
    "id": "jangchung-oneroom-5",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대 쪽문 도보 2분 반지하 원룸",
    "loc": "중구 장충동2가",
    "jibun": "193-161",
    "deal": "월세",
    "deposit": 500,
    "rent": 45,
    "fee": "없음",
    "area": 17,
    "areaNote": "임대 부분 (호실 중 일부)",
    "floor": "반지층",
    "totalFloor": "지상 5층, 지하 1층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "북향 (안방 기준)",
    "approval": "2000년 4월 4일",
    "use": "공동주택",
    "parking": "불가",
    "violation": false,
    "movein": "2027년 1월 17일부터",
    "options": "벽걸이 에어컨, 신발장, 냉장고, 세탁기, 싱크대, 인덕션, 방범창 / 개별난방",
    "tags": [
      "동대 쪽문 도보 2분",
      "풀옵션"
    ],
    "desc": "동대쪽문 도보2분 거리 1층 같은 반지하 풀옵션 원룸\n공부상 반지층 이지만 창문을 보면 실제 1층과 같은 구조 입니다.\n학교가 가까워 동대생분들에게 추천 드립니다.",
    "photos": [
      "listings/jangchung-oneroom-5-1.jpg",
      "listings/jangchung-oneroom-5-2.jpg",
      "listings/jangchung-oneroom-5-3.jpg",
      "listings/jangchung-oneroom-5-4.jpg",
      "listings/jangchung-oneroom-5-5.jpg"
    ],
    "updated": "2026-11-24",
    "zh": {
      "title": "东国大侧门步行2分钟 半地下一室",
      "tags": [
        "东国大侧门步行2分钟",
        "全配置"
      ],
      "desc": "距东国大侧门步行2分钟、像1楼一样的半地下全配置一室。\n登记上为半地下层，但从窗户看实际与1楼结构相同。\n离学校近，推荐给东国大学生。"
    },
    "en": {
      "title": "Semi-basement studio, 2 min to Dongguk side gate",
      "tags": [
        "2 min walk to Dongguk side gate",
        "Fully furnished"
      ],
      "desc": "Fully furnished semi-basement studio, a 2-minute walk from the Dongguk side gate, that feels like a ground floor.\nIt is listed as semi-basement on paper, but the windows make it feel like a real 1st floor.\nClose to campus, recommended for Dongguk students."
    }
  },
  {
    "id": "jangchung1-oneroom-2",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대문, 동국대 도보 가능한 풀옵션 원룸",
    "loc": "중구 장충동1가",
    "jibun": "38-60",
    "deal": "월세",
    "deposit": 500,
    "rent": 60,
    "fee": "7만원 (공용관리비, 수도, 인터넷 포함)",
    "area": 19.82,
    "floor": "1층",
    "totalFloor": "3층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "북향 (안방 기준)",
    "approval": "2015년 5월 13일",
    "use": "단독주택",
    "parking": "불가",
    "violation": false,
    "movein": "2027년 1월 9일부터",
    "options": "벽걸이 에어컨, 옷장, 냉장고, 세탁기, 인덕션, 인터폰, CCTV, 현관보안 / 개별난방",
    "tags": [
      "동대문역사문화공원역 도보 5분",
      "풀옵션"
    ],
    "desc": "동대문역사문화공원역 도보 5분, 동대입구역 도보 12분 거리\n2, 3, 4, 5, 6호선 모두 이용이 가능한 위치라 서울 어디든 이동이 편리합니다.\n동대문시장 및 동국대학교 도보 가능합니다.",
    "photos": [
      "listings/jangchung1-oneroom-2-1.jpg",
      "listings/jangchung1-oneroom-2-2.jpg",
      "listings/jangchung1-oneroom-2-3.jpg",
      "listings/jangchung1-oneroom-2-4.jpg",
      "listings/jangchung1-oneroom-2-5.jpg",
      "listings/jangchung1-oneroom-2-6.jpg",
      "listings/jangchung1-oneroom-2-7.jpg",
      "listings/jangchung1-oneroom-2-8.jpg",
      "listings/jangchung1-oneroom-2-9.jpg"
    ],
    "updated": "2026-11-18",
    "zh": {
      "title": "东大门、东国大学步行可达的全配置一室",
      "tags": [
        "东大门历史文化公园站步行5分钟",
        "全配置"
      ],
      "desc": "东大门历史文化公园站步行5分钟，东大入口站步行12分钟\n2、3、4、5、6号线均可乘坐，去首尔任何地方都很方便。\n东大门市场和东国大学均可步行前往。"
    },
    "en": {
      "title": "Fully furnished studio, walk to Dongdaemun and Dongguk Univ.",
      "tags": [
        "5 min to Dongdaemun History & Culture Park Stn",
        "Fully furnished"
      ],
      "desc": "5 min walk to Dongdaemun History & Culture Park Station, 12 min to Dongguk Univ. Station.\nLines 2, 3, 4, 5 and 6 are all available, so getting anywhere in Seoul is easy.\nDongdaemun Market and Dongguk University are both within walking distance."
    }
  },
  {
    "id": "jangchung-oneroom-4",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "대로변에 위치한 넓은 원룸",
    "loc": "중구 장충동2가",
    "jibun": "174-1",
    "deal": "월세",
    "deposit": 500,
    "rent": 70,
    "fee": "7만원 (공용관리비, 수도, 인터넷 포함)",
    "area": 27,
    "floor": "5층",
    "totalFloor": "5층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "동향 (안방 기준)",
    "approval": "2003년 6월 23일",
    "use": "제2종근린생활시설",
    "parking": "불가",
    "violation": false,
    "movein": "즉시 입주",
    "options": "벽걸이 에어컨, 침대, 신발장, 냉장고, 세탁기, 싱크대, 인덕션, 전자레인지 / 개별난방",
    "tags": [
      "대로변 위치",
      "즉시 입주"
    ],
    "desc": "동국대, CJ제일제당 모두 도보 가능한 넓은 사이즈의 원룸매물입니다.\n버스정류장과 동대문역사문화공원역 그리고 동대입구역까지도 모두 도보 가능해서 대중교통 이용하기도 편리하구요, 창이 양옆으로 크게 있어 창을 한쪽만 열어도 답답함 없이 시원하네요!\n집 앞에 바로 대로변이 있어 밤길도 무섭지 않구요, 인근에 초등학교가 있어서 경찰차도 수시로 다니기때문에 치안걱정 없는 위치 입니다.",
    "photos": [
      "listings/jangchung-oneroom-4-1.jpg",
      "listings/jangchung-oneroom-4-2.jpg",
      "listings/jangchung-oneroom-4-3.jpg",
      "listings/jangchung-oneroom-4-4.jpg",
      "listings/jangchung-oneroom-4-5.jpg",
      "listings/jangchung-oneroom-4-6.jpg",
      "listings/jangchung-oneroom-4-7.jpg",
      "listings/jangchung-oneroom-4-8.jpg",
      "listings/jangchung-oneroom-4-9.jpg"
    ],
    "updated": "2026-11-14",
    "zh": {
      "title": "大路边宽敞一室",
      "tags": [
        "临大路",
        "可立即入住"
      ],
      "desc": "宽敞的一室户，步行可到东国大学和CJ第一制糖。\n公交车站、东大门历史文化公园站和东大入口站都可步行到达，出行方便。房间两侧都有大窗户，只开一边也很通透凉爽！\n门前就是大路，走夜路也不害怕；附近有小学，警车经常巡逻，治安让人放心。"
    },
    "en": {
      "title": "Spacious studio on a main road",
      "tags": [
        "On a main road",
        "Available now"
      ],
      "desc": "A spacious studio within walking distance of Dongguk University and CJ CheilJedang.\nThe bus stop, Dongdaemun History & Culture Park Station and Dongguk Univ. Station are all walkable, so getting around is easy. Large windows on both sides keep it airy even with just one open.\nIt faces a main road, so walking home at night feels safe, and with an elementary school nearby, police cars patrol often."
    }
  },
  {
    "id": "jangchung1-oneroom",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "장충동 풀옵션 원룸",
    "loc": "중구 장충동1가",
    "jibun": "38-60",
    "deal": "월세",
    "deposit": 500,
    "rent": 44,
    "fee": "7만원 (수도, 인터넷 포함)",
    "area": 13,
    "floor": "2층",
    "totalFloor": "3층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "2015년 5월 13일",
    "use": "단독주택",
    "parking": "불가",
    "violation": false,
    "movein": "2026년 11월 21일부터",
    "options": "벽걸이 에어컨, 냉장고, 세탁기, 싱크대, 인덕션 / 개별난방",
    "tags": [
      "동대문역사문화공원역 도보 5분",
      "풀옵션"
    ],
    "desc": "동대문역사문화공원역 도보 5분, 동대입구역 도보12분\n아담한 사이즈의 미니 풀옵션 원룸으로 짐이 많지 않은 분들께 추천 드립니다.\n동국대, 동대문쇼핑타운 모두 도보로 이동 가능한 위치 입니다.",
    "photos": [
      "listings/jangchung1-oneroom-1.jpg",
      "listings/jangchung1-oneroom-2.jpg",
      "listings/jangchung1-oneroom-3.jpg",
      "listings/jangchung1-oneroom-4.jpg",
      "listings/jangchung1-oneroom-5.jpg"
    ],
    "updated": "2026-11-14",
    "zh": {
      "title": "奖忠洞全配置一室",
      "tags": [
        "东大门历史文化公园站步行5分钟",
        "全配置"
      ],
      "desc": "东大门历史文化公园站步行5分钟，东大入口站步行12分钟\n小巧的全配置迷你一室，推荐给行李不多的租客。\n东国大学、东大门购物区都可步行前往。"
    },
    "en": {
      "title": "Fully furnished studio in Jangchung-dong",
      "tags": [
        "5 min to Dongdaemun History & Culture Park Stn",
        "Fully furnished"
      ],
      "desc": "5 min walk to Dongdaemun History & Culture Park Station, 12 min to Dongguk Univ. Station.\nA compact, fully furnished mini studio, ideal if you don't have much luggage.\nDongguk University and the Dongdaemun shopping area are both within walking distance."
    }
  },
  {
    "id": "mukjeong-office-b1",
    "status": "공개",
    "cat": "사무실",
    "title": "묵정동 지층 32평 사무실·창고 (전용 107㎡)",
    "loc": "중구 묵정동",
    "deal": "월세",
    "deposit": 1200,
    "rent": 110,
    "fee": "5만원 (주차 1대 이용 시 15만원)",
    "area": 107.1,
    "areaNote": "지하층 전체",
    "floor": "지하 1층",
    "totalFloor": "지상 3층, 지하 1층",
    "dir": "서향 (주된 출입구 기준)",
    "approval": "1985년 8월 21일",
    "use": "제1종 근린생활시설 (소매점)",
    "parking": "1대 가능 (이용 시 관리비 월 15만원)",
    "violation": false,
    "movein": "즉시 입주 가능",
    "options": "실내 전용 화장실, 환기 설비",
    "tags": [
      "사무실·창고",
      "전용 화장실",
      "환기 설비"
    ],
    "desc": "묵정동 퇴계로48길 건물 지하층 전체를 임대합니다. 전용면적 107.1㎡(약 32평)입니다.\n기둥 외에는 넓게 트여 있어 사무실이나 창고 용도로 쓰기 좋습니다.\n환기 설비가 되어 있고, 실내에 전용 화장실이 있습니다.\n관리비는 월 5만원이며, 주차(1대) 이용 시 관리비는 월 15만원입니다.\n현재 즉시 입주 가능합니다.",
    "photos": [
      "listings/mukjeong-office-b1-1.jpg",
      "listings/mukjeong-office-b1-2.jpg",
      "listings/mukjeong-office-b1-3.jpg",
      "listings/mukjeong-office-b1-4.jpg",
      "listings/mukjeong-office-b1-5.jpg",
      "listings/mukjeong-office-b1-6.jpg"
    ],
    "updated": "2026-11-04",
    "zh": {
      "title": "墨井洞地下层32坪办公室·仓库（专用107㎡）",
      "tags": [
        "办公室·仓库",
        "专用卫生间",
        "通风设备"
      ],
      "desc": "出租墨井洞退溪路48街大楼的整个地下层，专用面积107.1㎡（约32坪）。\n除柱子外空间开阔，适合用作办公室或仓库。\n配有通风设备，室内有专用卫生间。\n管理费每月5万韩元，使用1个停车位时管理费为每月15万韩元。\n目前可立即入住。"
    },
    "en": {
      "title": "Mukjeong-dong basement office / storage, 32 py (107㎡)",
      "tags": [
        "Office / storage",
        "Private restroom",
        "Ventilation"
      ],
      "desc": "The entire basement floor of a building on Toegye-ro 48-gil, Mukjeong-dong. Exclusive area 107.1㎡ (about 32 pyeong).\nApart from the columns it is wide open, good for an office or storage.\nVentilation is installed and there is a private restroom inside.\nMaintenance fee is ₩50,000/month, or ₩150,000/month if you use 1 parking space.\nAvailable now."
    }
  },
  {
    "id": "jangchung-oneroom-3",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동대입구역 도보5분 풀옵션 원룸",
    "loc": "중구 장충동2가",
    "jibun": "193-86",
    "deal": "월세",
    "deposit": 500,
    "rent": 50,
    "fee": "3만원 (공용관리비, 수도 포함)",
    "area": 16.52,
    "areaNote": "임대 부분 (호실 중 일부)",
    "floor": "4층",
    "totalFloor": "5층",
    "rooms": "방 1개 (오픈형)",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "1998년 6월 2일",
    "use": "공동주택",
    "parking": "불가",
    "violation": false,
    "movein": "즉시 입주",
    "options": "벽걸이 에어컨, 침대, 책상, 옷장, 신발장, 냉장고, 세탁기, 싱크대, 인덕션",
    "tags": [
      "동대입구역 도보 5분",
      "풀옵션"
    ],
    "desc": "동대입구역 도보5분, 동대중문 도보2분 거리\n인근에 편의점, 빨래방 등 편의 시설이 많고, 동국대, 지하철 등도 가까워서\n동대생 또는 지하철 3호선 이용하는 직장인분들께 추천 드립니다.",
    "photos": [
      "listings/jangchung-oneroom-3-1.jpg",
      "listings/jangchung-oneroom-3-2.jpg",
      "listings/jangchung-oneroom-3-3.jpg",
      "listings/jangchung-oneroom-3-4.jpg",
      "listings/jangchung-oneroom-3-5.jpg"
    ],
    "updated": "2026-11-04",
    "zh": {
      "title": "东大入口站步行5分钟 全配置一室",
      "tags": [
        "东大入口站步行5分钟",
        "全配置"
      ],
      "desc": "东大入口站步行5分钟，东国大学中门步行2分钟\n附近便利店、自助洗衣店等生活设施多，离东国大学和地铁都很近，\n推荐给东国大学学生或乘坐地铁3号线的上班族。"
    },
    "en": {
      "title": "Fully furnished studio, 5 min to Dongguk Univ. Stn",
      "tags": [
        "5 min to Dongguk Univ. Stn",
        "Fully furnished"
      ],
      "desc": "5 min walk to Dongguk Univ. Station, 2 min to Dongguk University's middle gate.\nConvenience stores, laundromats and other amenities are nearby, and the university and subway are close.\nRecommended for Dongguk students or commuters on Line 3."
    }
  },
  {
    "id": "jangchung-office-10f",
    "status": "공개",
    "cat": "사무실",
    "title": "퇴계로 아도라타워 10층 통층, 조망 좋은 다용도 공간 (전용 151평)",
    "loc": "중구 장충동2가",
    "deal": "월세",
    "deposit": 18000,
    "rent": 1800,
    "fee": "약 198.2만원 (예상, 전기·수도 등 사용료 별도)",
    "area": 499.64,
    "areaNote": "계약면적 728.01㎡ (220평)",
    "floor": "10층",
    "totalFloor": "지상 11층, 지하 5층",
    "dir": "북향 (주된 출입구 기준)",
    "approval": "2009년 7월 31일",
    "use": "체력단련장 (업무시설로 용도변경 진행 중)",
    "parking": "50평당 1대 무료 (건물 전체 47대)",
    "violation": false,
    "movein": "즉시 입주 가능",
    "options": "천장형 에어컨, 탕비실, 내부 남녀 화장실 2개, 엘리베이터 2대",
    "tags": [
      "10층 통층",
      "탁 트인 조망",
      "다용도 가능"
    ],
    "desc": "퇴계로 대로변 아도라타워 10층 한 층 전체를 임대합니다. 전용면적 499.64㎡(151평), 계약면적 728.01㎡(220평)입니다.\n기둥 외에는 막힌 곳 없이 넓게 트여 있고, 창이 길게 이어져 있어 채광과 외부 조망이 좋습니다.\n사무실, 병원, 헬스장은 물론 조망 좋은 레스토랑 등 다양한 용도로 활용할 수 있습니다. (업종에 따라 용도변경이 필요할 수 있습니다.)\n건축물대장상 용도는 체력단련장이며, 현재 업무시설로 용도변경을 진행하고 있습니다.\n호실 안에 탕비실과 남녀 분리 화장실이 있고, 천장형 에어컨이 설치되어 있습니다.\n현재 공실로 즉시 입주 가능합니다.\n월세 1,800만원은 부가세 별도이고, 관리비는 월 약 198.2만원(예상)이며 전기·수도 등 사용료는 별도입니다.\n주차는 50평당 1대 무료이며, 건물 내 자주식 주차장(건물 전체 47대)과 엘리베이터 2대가 있습니다.",
    "photos": [
      "listings/jangchung-office-10f-1.jpg",
      "listings/jangchung-office-10f-2.jpg",
      "listings/jangchung-office-10f-3.jpg",
      "listings/jangchung-office-10f-4.jpg",
      "listings/jangchung-office-10f-5.jpg",
      "listings/jangchung-office-10f-6.jpg",
      "listings/jangchung-office-10f-7.jpg",
      "listings/jangchung-office-10f-8.jpg",
      "listings/jangchung-office-10f-9.jpg",
      "listings/jangchung-office-10f-10.jpg",
      "listings/jangchung-office-10f-11.jpg",
      "listings/jangchung-office-10f-12.jpg"
    ],
    "updated": "2026-11-04",
    "zh": {
      "title": "退溪路Adora Tower 10层整层，视野好的多用途空间（专用151坪）",
      "tags": [
        "10层整层",
        "视野开阔",
        "多种用途"
      ],
      "areaNote": "合同面积728.01㎡（220坪）",
      "desc": "出租退溪路大路边Adora Tower（아도라타워）10层整层。专用面积499.64㎡（151坪），合同面积728.01㎡（220坪）。\n除柱子外没有遮挡，空间开阔，窗户连成一排，采光和外部视野都很好。\n可用作办公室、医院、健身房，也可以开视野好的餐厅等多种用途。（根据业种可能需要办理用途变更。）\n建筑物台账上的用途为健身设施，目前正在办理变更为业务设施。\n室内有茶水间和男女分开的卫生间，并安装了吸顶式空调。\n目前空置，可立即入住。\n月租1,800万韩元不含增值税，管理费预计每月约198.2万韩元，电费、水费等使用费另计。\n每50坪免费提供1个停车位，大楼内有自走式停车场（整栋共47个车位）和2部电梯。"
    },
    "en": {
      "title": "Adora Tower, whole 10th floor with great views (151 py exclusive)",
      "tags": [
        "Whole 10th floor",
        "Open views",
        "Flexible use"
      ],
      "areaNote": "Contract area 728.01㎡ (220 py)",
      "desc": "The entire 10th floor of Adora Tower (아도라타워) on Toegye-ro. Exclusive area 499.64㎡ (151 pyeong), contract area 728.01㎡ (220 pyeong).\nApart from the columns it is fully open, with a long run of windows for good light and outside views.\nSuitable for an office, clinic, gym, or a restaurant with a view, among other uses. (Some businesses may require a change of building use.)\nThe registered building use is a fitness facility, and a change to business facility is in progress.\nThere is a pantry, separate men's and women's restrooms, and ceiling air conditioning.\nCurrently vacant and available now.\nRent of ₩18,000,000/month excludes VAT. The maintenance fee is estimated at about ₩1,982,000/month; electricity, water and other utilities are extra.\nOne free parking space per 50 pyeong. The building has a self-park garage (47 spaces) and 2 elevators."
    }
  },
  {
    "id": "jangchung-shop-1f",
    "status": "공개",
    "cat": "상가·건물",
    "title": "퇴계로 대로변 1층 통유리 대형 상가 (전용 76평)",
    "loc": "중구 장충동2가",
    "deal": "월세",
    "deposit": 10000,
    "rent": 1100,
    "fee": "약 99.8만원 (예상, 전기·수도 등 사용료 별도)",
    "area": 251.64,
    "areaNote": "계약면적 366.67㎡ (111평) · 2개 호실 통임대",
    "floor": "1층",
    "totalFloor": "지상 11층, 지하 5층",
    "dir": "북향 (주된 출입구 기준)",
    "approval": "2009년 7월 31일",
    "use": "제2종 근린생활시설",
    "parking": "건물 전체 47대",
    "violation": false,
    "movein": "즉시 입주 가능",
    "options": "천장형 에어컨, 엘리베이터 2대",
    "tags": [
      "무권리",
      "퇴계로 대로변",
      "1층 2개 호실 통임대"
    ],
    "desc": "퇴계로 대로변 아도라타워 1층 상가입니다. 2개 호실을 통으로 임대하며 전용면적 251.64㎡(76평), 계약면적 366.67㎡(111평)입니다.\n퇴계로 쪽 전면이 통유리로 되어 있어 가시성이 좋습니다.\n권리금 없으며, 현재 공실로 즉시 입주 가능합니다.\n월세 1,100만원은 부가세 별도이고, 관리비는 월 약 99.8만원(예상)이며 전기·수도 등 사용료는 별도입니다.\n건물 내 자주식 주차장(건물 전체 47대)과 엘리베이터 2대가 있습니다.",
    "photos": [
      "listings/jangchung-shop-1f-1.jpg",
      "listings/jangchung-shop-1f-2.jpg",
      "listings/jangchung-shop-1f-3.jpg"
    ],
    "updated": "2026-11-04",
    "zh": {
      "title": "退溪路大路边1层玻璃门面大型商铺（专用76坪）",
      "tags": [
        "无权利金",
        "退溪路大路边",
        "1层2个铺位整体出租"
      ],
      "areaNote": "合同面积366.67㎡（111坪）· 2个铺位整体出租",
      "desc": "退溪路大路边Adora Tower（아도라타워）1层商铺。2个铺位整体出租，专用面积251.64㎡（76坪），合同面积366.67㎡（111坪）。\n面向退溪路的一面全是玻璃，展示效果好。\n无权利金（转让费），目前空置，可立即入住。\n月租1,100万韩元不含增值税，管理费预计每月约99.8万韩元，电费、水费等使用费另计。\n大楼内有自走式停车场（整栋共47个车位）和2部电梯。"
    },
    "en": {
      "title": "Large glass-front ground-floor shop on Toegye-ro (76 py exclusive)",
      "tags": [
        "No key money",
        "Main road frontage",
        "2 units leased together"
      ],
      "areaNote": "Contract area 366.67㎡ (111 py) · 2 units leased together",
      "desc": "Ground-floor retail in Adora Tower (아도라타워) on Toegye-ro. Two units are leased together: exclusive area 251.64㎡ (76 pyeong), contract area 366.67㎡ (111 pyeong).\nThe full glass front facing Toegye-ro gives great visibility.\nNo key money (premium). Currently vacant and available now.\nRent of ₩11,000,000/month excludes VAT. The maintenance fee is estimated at about ₩998,000/month; electricity, water and other utilities are extra.\nThe building has a self-park garage (47 spaces) and 2 elevators."
    }
  },
  {
    "id": "euljiro4-officetel-sale",
    "status": "공개",
    "cat": "오피스텔",
    "title": "을지로4가 도보1분 거리 투룸 오피스텔",
    "loc": "중구 을지로4가",
    "jibun": "187-9",
    "deal": "매매",
    "deposit": 31000,
    "fee": "9만원",
    "lease": "전세 2억 6,500만원",
    "area": 29.93,
    "areaNote": "공급 50.58㎡",
    "floor": "6층",
    "totalFloor": "10층",
    "rooms": "방 2개",
    "baths": "욕실 1개",
    "dir": "남동향 (거실 기준)",
    "approval": "2019년 4월 19일",
    "use": "업무시설 (오피스텔)",
    "parking": "건물 전체 29대",
    "movein": "2027년 8월 1일부터",
    "options": "천장형 에어컨, 신발장, 냉장고, 세탁기, 싱크대, 인덕션, 엘리베이터 / 개별난방",
    "tags": [
      "을지로4가역 도보 1분"
    ],
    "desc": "을지로4가역 7번 출구 도보 1분 거리 초역세권 투룸 오피스텔입니다. 현 임대차는 전세 2억 6,500만원에 계약되어 있습니다. 실입주는 2027년 8월 1일부터 가능합니다. 현장 방문은 사전에 미리 방문 일정을 잡고 보실 수 있습니다.",
    "photos": [
      "listings/euljiro4-officetel-sale-1.jpg",
      "listings/euljiro4-officetel-sale-2.jpg",
      "listings/euljiro4-officetel-sale-3.jpg",
      "listings/euljiro4-officetel-sale-4.jpg",
      "listings/euljiro4-officetel-sale-5.jpg",
      "listings/euljiro4-officetel-sale-6.jpg",
      "listings/euljiro4-officetel-sale-7.jpg"
    ],
    "updated": "2026-10-31",
    "zh": {
      "title": "乙支路4街站步行1分钟 两室商住公寓",
      "tags": [
        "乙支路4街站步行1分钟"
      ],
      "desc": "距乙支路4街站7号出口步行1分钟，紧邻地铁站的两室商住公寓。目前租约为全租2亿6,500万韩元。实际入住可从2027年8月1日起。看房请提前预约时间。"
    },
    "en": {
      "title": "Two-room officetel, 1 min to Euljiro 4-ga Stn",
      "tags": [
        "1 min to Euljiro 4-ga Stn"
      ],
      "desc": "A two-room officetel just a 1-minute walk from Exit 7 of Euljiro 4-ga Station. It is currently leased on jeonse for ₩265,000,000. Move-in is possible from August 1, 2027. Viewings by appointment only."
    }
  },
  {
    "id": "pildong-tworoom-sale-3f",
    "status": "공개",
    "cat": "빌라",
    "title": "충무로역 도보6분 풀옵션 투룸 빌라",
    "loc": "중구 필동3가",
    "jibun": "39-31",
    "deal": "매매",
    "deposit": 30000,
    "fee": "7.5만원",
    "lease": "보증금 2,000만원 / 월 110만원",
    "area": 27.16,
    "areaNote": "공급 32.78㎡",
    "floor": "3층",
    "totalFloor": "6층",
    "rooms": "방 2개",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "2017년 9월 8일",
    "use": "공동주택",
    "parking": "건물 전체 10대",
    "violation": false,
    "movein": "2028년 2월 25일부터",
    "options": "천장형 에어컨, 신발장, 냉장고, 세탁기, 싱크대, 인덕션, 엘리베이터 / 개별난방",
    "tags": [
      "충무로역 도보 6분",
      "동국대 도보 1분"
    ],
    "desc": "충무로역 도보 6분, 동국대학교 도보 1분 거리 풀옵션 투룸 빌라입니다. 동국대 기숙사 바로 앞에 위치해 있어 임대 수요가 풍부하고, 연중 공실 걱정 없는 다세대 빌라입니다. 집을 보시려면 며칠 전에 미리 약속을 잡고 보실 수 있습니다.",
    "photos": [
      "listings/pildong-tworoom-sale-3f-1.jpg",
      "listings/pildong-tworoom-sale-3f-2.jpg",
      "listings/pildong-tworoom-sale-3f-3.jpg",
      "listings/pildong-tworoom-sale-3f-4.jpg",
      "listings/pildong-tworoom-sale-3f-5.jpg",
      "listings/pildong-tworoom-sale-3f-6.jpg",
      "listings/pildong-tworoom-sale-3f-7.jpg",
      "listings/pildong-tworoom-sale-3f-8.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "忠武路站步行6分钟 全配置两室公寓",
      "tags": [
        "忠武路站步行6分钟",
        "东国大学步行1分钟"
      ],
      "desc": "距忠武路站步行6分钟、东国大学步行1分钟的全配置两室公寓（多户住宅）。位于东国大学宿舍正前方，租房需求旺盛，全年不用担心空置。看房请提前几天预约。"
    },
    "en": {
      "title": "Fully furnished 2-room villa, 6 min to Chungmuro Stn",
      "tags": [
        "6 min to Chungmuro Stn",
        "1 min to Dongguk Univ."
      ],
      "desc": "A fully furnished two-room villa (multi-unit house) 6 minutes from Chungmuro Station and 1 minute from Dongguk University. Right in front of the Dongguk dormitory, rental demand is strong and vacancy is not a worry year-round. Please book a viewing a few days in advance."
    }
  },
  {
    "id": "mukjeong-oneroom-sale",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "동국대 원룸 매매",
    "loc": "중구 묵정동",
    "jibun": "26-3",
    "deal": "매매",
    "deposit": 13000,
    "fee": "5만원",
    "lease": "보증금 1,000만원 / 월 60만원",
    "area": 14.66,
    "areaNote": "공급 17.54㎡",
    "floor": "5층",
    "totalFloor": "5층",
    "rooms": "방 1개",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "2014년 10월 2일",
    "use": "공동주택",
    "parking": "건물 전체 8대",
    "violation": false,
    "movein": "2028년 8월 2일부터",
    "options": "벽걸이 에어컨, 옷장, 신발장, 냉장고, 세탁기, 가스레인지",
    "tags": [
      "동국대 후문 도보 3분",
      "남향"
    ],
    "desc": "동국대학교 후문 도보 3분, 동대입구역 도보 5분 거리 다세대 원룸입니다. 동국대 학생들에게 인기 많은 건물입니다. 연중 공실 없는 매물로 임대수익률 6%, 대지지분 9.5㎡입니다. 임대수익형 매물로 추천드립니다. 엘리베이터는 없지만 정남향 큰 창과 동쪽 창문 등 창문이 2개라 오전부터 오후까지 채광과 환기가 모두 좋습니다.",
    "photos": [
      "listings/mukjeong-oneroom-sale-1.jpg",
      "listings/mukjeong-oneroom-sale-2.jpg",
      "listings/mukjeong-oneroom-sale-3.jpg",
      "listings/mukjeong-oneroom-sale-4.jpg",
      "listings/mukjeong-oneroom-sale-5.jpg",
      "listings/mukjeong-oneroom-sale-6.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "东国大学一室 出售",
      "tags": [
        "东国大学后门步行3分钟",
        "朝南"
      ],
      "desc": "距东国大学后门步行3分钟、东大入口站步行5分钟的多户住宅一室。深受东国大学学生欢迎的楼。全年无空置，租金收益率6%，土地份额9.5㎡。推荐作为收租型投资。虽然没有电梯，但有正南向大窗和东侧窗户两扇窗，从上午到下午采光和通风都很好。"
    },
    "en": {
      "title": "Dongguk University studio for sale",
      "tags": [
        "3 min to Dongguk back gate",
        "South-facing"
      ],
      "desc": "A studio in a multi-unit building, 3 minutes from Dongguk University's back gate and 5 minutes from Dongguk Univ. Station. The building is popular with Dongguk students. No vacancy year-round, 6% rental yield, land share 9.5㎡. Recommended as a rental investment. There is no elevator, but with a large south-facing window and an east window, it gets good light and ventilation from morning to afternoon."
    }
  },
  {
    "id": "pildong-tworoom-sale-b",
    "status": "공개",
    "cat": "빌라",
    "title": "충무로역 도보6분 풀옵션 투룸 빌라",
    "loc": "중구 필동3가",
    "jibun": "39-7",
    "deal": "매매",
    "deposit": 30000,
    "fee": "7.5만원",
    "lease": "보증금 2,000만원 / 월 110만원",
    "area": 27.57,
    "areaNote": "공급 39.24㎡",
    "floor": "중층",
    "totalFloor": "6층",
    "rooms": "방 2개",
    "baths": "욕실 1개",
    "dir": "북향 (거실 기준)",
    "approval": "2017년 11월 15일",
    "use": "공동주택",
    "parking": "건물 전체 10대",
    "violation": false,
    "movein": "2027년 2월 18일부터",
    "options": "천장형 에어컨, 신발장, 냉장고, 세탁기, 싱크대, 엘리베이터 / 개별난방",
    "tags": [
      "충무로역 도보 6분",
      "동국대 도보 1분"
    ],
    "desc": "충무로역 도보 6분, 동국대학교 도보 1분 거리 풀옵션 투룸 빌라입니다. 동국대 기숙사 바로 앞에 위치해 있어 임대 수요가 풍부하고, 연중 공실 걱정 없는 다세대 빌라입니다. 집을 보시려면 며칠 전에 방문 약속을 잡고 보실 수 있습니다.",
    "photos": [
      "listings/pildong-tworoom-sale-b-1.jpg",
      "listings/pildong-tworoom-sale-b-2.jpg",
      "listings/pildong-tworoom-sale-b-3.jpg",
      "listings/pildong-tworoom-sale-b-4.jpg",
      "listings/pildong-tworoom-sale-b-5.jpg",
      "listings/pildong-tworoom-sale-b-6.jpg",
      "listings/pildong-tworoom-sale-b-7.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "忠武路站步行6分钟 全配置两室公寓",
      "tags": [
        "忠武路站步行6分钟",
        "东国大学步行1分钟"
      ],
      "desc": "距忠武路站步行6分钟、东国大学步行1分钟的全配置两室公寓（多户住宅）。位于东国大学宿舍正前方，租房需求旺盛，全年不用担心空置。看房请提前几天预约。"
    },
    "en": {
      "title": "Fully furnished 2-room villa, 6 min to Chungmuro Stn",
      "tags": [
        "6 min to Chungmuro Stn",
        "1 min to Dongguk Univ."
      ],
      "desc": "A fully furnished two-room villa (multi-unit house) 6 minutes from Chungmuro Station and 1 minute from Dongguk University. Right in front of the Dongguk dormitory, rental demand is strong and vacancy is not a worry year-round. Please book a viewing a few days in advance."
    }
  },
  {
    "id": "ojang-oneroom-sale",
    "status": "공개",
    "cat": "원룸·투룸",
    "title": "오장동 사거리 풀옵션 원룸",
    "loc": "중구 오장동",
    "jibun": "206-34",
    "deal": "매매",
    "deposit": 17500,
    "fee": "11만원 (월 고정 관리비)",
    "lease": "보증금 1,000만원 / 월 75만원",
    "area": 14.49,
    "areaNote": "공급 19.8㎡",
    "floor": "9층",
    "totalFloor": "15층",
    "rooms": "방 1개",
    "baths": "욕실 1개",
    "dir": "서향 (안방 기준)",
    "approval": "2018년 12월 4일",
    "use": "공동주택",
    "parking": "건물 전체 18대",
    "movein": "2027년 12월 30일부터",
    "options": "신발장, 냉장고, 세탁기, 싱크대, 인덕션, 엘리베이터 / 개별난방",
    "tags": [
      "동대문역사문화공원역 도보 3분"
    ],
    "desc": "동대문역사문화공원역 도보 3분 거리, 오장동 사거리 상업지에 위치한 풀옵션 원룸입니다. 임대수익형 상품으로 추천드립니다. 관리비는 위탁관리업체에서 고지한 월 고정 관리비이며, 엘리베이터 점검료, 건물 청소비용, 정화조, 관리용역비, 인터넷 요금, 유선방송 요금, 기타 건물관리비(전기, 소방) 등이 포함되어 있습니다.",
    "photos": [
      "listings/ojang-oneroom-sale-1.jpg",
      "listings/ojang-oneroom-sale-2.jpg",
      "listings/ojang-oneroom-sale-3.jpg",
      "listings/ojang-oneroom-sale-4.jpg",
      "listings/ojang-oneroom-sale-5.jpg",
      "listings/ojang-oneroom-sale-6.jpg",
      "listings/ojang-oneroom-sale-7.jpg",
      "listings/ojang-oneroom-sale-8.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "五壮洞十字路口 全配置一室",
      "tags": [
        "东大门历史文化公园站步行3分钟"
      ],
      "desc": "距东大门历史文化公园站步行3分钟，位于五壮洞十字路口商业区的全配置一室。推荐作为收租型投资。管理费为委托管理公司通知的每月固定金额，包含电梯检修费、楼宇清洁费、化粪池、管理服务费、网费、有线电视费及其他楼宇管理费（电气、消防）等。"
    },
    "en": {
      "title": "Fully furnished studio at the Ojang-dong intersection",
      "tags": [
        "3 min to Dongdaemun History & Culture Park Stn"
      ],
      "desc": "A fully furnished studio in the commercial area at the Ojang-dong intersection, 3 minutes from Dongdaemun History & Culture Park Station. Recommended as a rental investment. The maintenance fee is a fixed monthly amount set by the management company and covers elevator inspection, building cleaning, septic tank, management services, internet, cable TV and other building costs (electrical, fire safety)."
    }
  },
  {
    "id": "mukjeong-shop-1f",
    "status": "공개",
    "cat": "상가·건물",
    "title": "1층 코너 상가 창고 다용도 점포",
    "loc": "중구 묵정동",
    "deal": "월세",
    "deposit": 5000,
    "rent": 350,
    "area": 72.13,
    "areaNote": "실사용 면적 약 85㎡",
    "floor": "1층 (일부)",
    "totalFloor": "3층",
    "dir": "서향 (주된 출입구 기준)",
    "approval": "1974년 9월 28일",
    "use": "제1종 근린생활시설",
    "parking": "불가",
    "movein": "즉시 입주 가능",
    "tags": [
      "동국대 후문 도보 1분",
      "1층"
    ],
    "desc": "동국대 후문 도보 1분 거리 1층 상가 점포입니다. 최근 신축한 동국대 후문 현대 힐스테이트 주차장 쪽에 위치해 있으며, 실사용 면적은 약 85㎡입니다.",
    "photos": [
      "listings/mukjeong-shop-1f-1.jpg",
      "listings/mukjeong-shop-1f-2.jpg",
      "listings/mukjeong-shop-1f-3.jpg",
      "listings/mukjeong-shop-1f-4.jpg",
      "listings/mukjeong-shop-1f-5.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "1层转角商铺 仓库·多用途店面",
      "tags": [
        "东国大学后门步行1分钟",
        "1层"
      ],
      "areaNote": "实际使用面积约85㎡",
      "desc": "距东国大学后门步行1分钟的1层商铺。位于新建的东国大学后门现代Hillstate停车场一侧，实际使用面积约85㎡。"
    },
    "en": {
      "title": "Ground-floor corner shop, storage / multi-use",
      "tags": [
        "1 min to Dongguk back gate",
        "Ground floor"
      ],
      "areaNote": "Usable area approx. 85㎡",
      "desc": "A ground-floor shop 1 minute from Dongguk University's back gate, beside the parking lot of the newly built Hyundai Hillstate. Usable area is about 85㎡."
    }
  },
  {
    "id": "pildong-office-sale",
    "status": "공개",
    "cat": "사무실",
    "title": "충무로역 도보5분 사무실 매매",
    "loc": "중구 필동3가",
    "deal": "매매",
    "deposit": 30000,
    "fee": "20만원 (건물 공용부분 청소비, 화장실 청소비, 주차관리비, 수도요금 포함)",
    "lease": "보증금 2,000만원 / 월 120만원 (부가세 별도)",
    "area": 54.28,
    "areaNote": "계약면적 77.28㎡",
    "floor": "2층",
    "totalFloor": "6층",
    "dir": "남서향 (주된 출입구 기준)",
    "approval": "2016년 8월 10일",
    "use": "제2종 근린생활시설",
    "parking": "1대 가능 (건물 전체 15대)",
    "violation": false,
    "movein": "2027년 2월 22일부터",
    "options": "천장형 에어컨, 엘리베이터 / 개별난방",
    "tags": [
      "충무로역 도보 5분",
      "구분등기"
    ],
    "desc": "충무로역 도보 5분 거리, 구분등기된 사무실 매매입니다. 2층 총 4개 호실의 사무실 중 한 호실입니다. 현재 임대차 보증금 2천만원에 월세 120만원(부가세 별도)으로, 수익률 5.14%의 임대수익형 상품으로 추천드립니다. 대지지분은 19.22㎡이며, 현재 주위 토지 시세는 평당 6천만원대입니다.",
    "photos": [
      "listings/pildong-office-sale-1.jpg",
      "listings/pildong-office-sale-2.jpg",
      "listings/pildong-office-sale-3.jpg",
      "listings/pildong-office-sale-4.jpg",
      "listings/pildong-office-sale-5.jpg",
      "listings/pildong-office-sale-6.jpg",
      "listings/pildong-office-sale-7.jpg"
    ],
    "updated": "2026-11-22",
    "zh": {
      "title": "忠武路站步行5分钟 办公室出售",
      "tags": [
        "忠武路站步行5分钟",
        "单独产权"
      ],
      "desc": "距忠武路站步行5分钟，已单独产权登记的办公室出售。是2层共4间办公室中的一间。目前租约押金2,000万韩元、月租120万韩元（不含增值税），收益率5.14%，推荐作为收租型投资。土地份额19.22㎡，目前周边土地市价为每坪6,000万韩元左右。"
    },
    "en": {
      "title": "Office for sale, 5 min to Chungmuro Stn",
      "tags": [
        "5 min to Chungmuro Stn",
        "Separately titled unit"
      ],
      "desc": "A separately titled office unit for sale, 5 minutes from Chungmuro Station. It is one of four office units on the 2nd floor. Currently leased at a ₩20,000,000 deposit and ₩1,200,000/month rent (excl. VAT), a 5.14% yield, recommended as a rental investment. Land share is 19.22㎡, and nearby land currently trades at around ₩60,000,000 per pyeong."
    }
  },
  {
    "id": "mukjeong-storage-b1",
    "status": "공개",
    "cat": "인쇄 공장·창고",
    "title": "지하 창고",
    "loc": "중구 묵정동",
    "deal": "월세",
    "deposit": 1500,
    "rent": 120,
    "area": 120,
    "areaLabel": "면적",
    "areaNote": "약 120㎡ (지하층 전부)",
    "floor": "지하 1층 (전부)",
    "totalFloor": "지상 3층, 지하 1층",
    "dir": "남향 (주된 출입구 기준)",
    "use": "제1종 근린생활시설",
    "parking": "불가 (바로 옆 건물 월주차 알선 가능)",
    "violation": false,
    "movein": "즉시 입주 가능",
    "tags": [
      "창고 전용"
    ],
    "desc": "앰배서더호텔 뒷길에 위치한 지하 창고(약 120㎡)입니다. 순수 창고 용도로만 사용 가능하며 영업장소로는 사용할 수 없습니다. 인근 시세 대비 저렴한 가격입니다. 주차는 불가하나 바로 옆 건물에 월주차 알선이 가능합니다.",
    "photos": [
      "listings/mukjeong-storage-b1-1.jpg",
      "listings/mukjeong-storage-b1-2.jpg"
    ],
    "updated": "2026-10-30",
    "approval": "1984년 1월 12일",
    "approvalLabel": "허가일자",
    "zh": {
      "title": "地下仓库",
      "tags": [
        "仅限仓库用途"
      ],
      "areaNote": "约120㎡（整个地下层）",
      "desc": "位于大使酒店（Ambassador Hotel）后街的地下仓库（约120㎡）。仅可作纯仓库用途，不能作为营业场所。价格比周边行情便宜。不可停车，但可以介绍隔壁楼的月租车位。"
    },
    "en": {
      "title": "Basement storage",
      "tags": [
        "Storage only"
      ],
      "areaNote": "Approx. 120㎡ (entire basement)",
      "desc": "A basement storage space (about 120㎡) on the street behind the Ambassador Hotel. Storage use only; it cannot be used as business premises. Priced below nearby market rates. No parking, but monthly parking in the building next door can be arranged."
    }
  },
  {
    "id": "pildong-tworoom-sale-2f",
    "status": "공개",
    "cat": "빌라",
    "title": "충무로역 도보6분 다세대 투룸 빌라",
    "loc": "중구 필동3가",
    "jibun": "39-31",
    "deal": "매매",
    "deposit": 28000,
    "fee": "7.5만원",
    "lease": "보증금 2억 2,000만원 / 월 15만원",
    "area": 27.16,
    "areaNote": "공급 32.78㎡",
    "floor": "2층",
    "totalFloor": "6층",
    "rooms": "방 2개",
    "baths": "욕실 1개",
    "dir": "남향 (안방 기준)",
    "approval": "2017년 9월 8일",
    "use": "공동주택",
    "parking": "건물 전체 10대",
    "violation": false,
    "movein": "2028년 7월 18일부터",
    "options": "천장형 에어컨, 신발장, 세탁기, 싱크대, 인덕션, 엘리베이터 / 개별난방",
    "tags": [
      "충무로역 도보 6분",
      "동국대 도보 1분"
    ],
    "desc": "충무로역 도보 6분, 동국대학교 도보 1분 거리 다세대 투룸 빌라입니다. 동국대 바로 앞에 위치해 있어 동대생에게 선호도 높은 임대 매물이며, 지하철 3호선, 4호선 충무로역 도보 6분 거리로 직장인 수요 또한 많은 지역으로, 준공 후 공실 한번 없던 매물입니다. 실입주는 2028년 7월에 가능합니다.",
    "photos": [
      "listings/pildong-tworoom-sale-2f-1.jpg",
      "listings/pildong-tworoom-sale-2f-2.jpg",
      "listings/pildong-tworoom-sale-2f-3.jpg",
      "listings/pildong-tworoom-sale-2f-4.jpg",
      "listings/pildong-tworoom-sale-2f-5.jpg",
      "listings/pildong-tworoom-sale-2f-6.jpg",
      "listings/pildong-tworoom-sale-2f-7.jpg",
      "listings/pildong-tworoom-sale-2f-8.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "忠武路站步行6分钟 两室公寓",
      "tags": [
        "忠武路站步行6分钟",
        "东国大学步行1分钟"
      ],
      "desc": "距忠武路站步行6分钟、东国大学步行1分钟的两室公寓（多户住宅）。位于东国大学正前方，深受东国大学学生欢迎；距地铁3号线、4号线忠武路站步行6分钟，上班族需求也很多，竣工后从未空置过。实际入住可从2028年7月起。"
    },
    "en": {
      "title": "2-room villa, 6 min to Chungmuro Stn",
      "tags": [
        "6 min to Chungmuro Stn",
        "1 min to Dongguk Univ."
      ],
      "desc": "A two-room villa (multi-unit house) 6 minutes from Chungmuro Station and 1 minute from Dongguk University. Right in front of the university, it is popular with Dongguk students, and being 6 minutes from Chungmuro Station (Lines 3 and 4) there is strong demand from office workers too. It has never been vacant since completion. Move-in is possible from July 2028."
    }
  },
  {
    "id": "mukjeong-storage-b1-2",
    "status": "공개",
    "cat": "인쇄 공장·창고",
    "title": "지하 창고겸 사무실",
    "loc": "중구 묵정동",
    "deal": "월세",
    "deposit": 2000,
    "rent": 150,
    "area": 127.7,
    "areaLabel": "면적",
    "areaNote": "지하층 면적",
    "floor": "지하 1층 (전부)",
    "totalFloor": "지상 4층, 지하 1층",
    "dir": "북향 (주된 출입구 기준)",
    "approval": "1992년 9월 17일",
    "use": "제1종 근린생활시설",
    "violation": false,
    "movein": "즉시 입주 가능 (현재 공실)",
    "options": "개별난방",
    "tags": [
      "충무초 뒤편",
      "현재 공실"
    ],
    "desc": "묵정동 충무초등학교 뒤편 상가주택 지하 창고입니다. 지층 면적은 127.7㎡입니다. 1층 바닥이 관통되어 있어 별도 공사 없이 지하와 연결해 활용할 수 있는 구조입니다. 상가주택이라 공장 등 소음이 발생하는 업종은 임대가 불가하며, 지하 창고 또는 사무실 용도로만 사용 가능합니다. 현재 공실입니다.",
    "photos": [],
    "updated": "2026-10-30",
    "zh": {
      "title": "地下仓库兼办公室",
      "tags": [
        "忠武小学后方",
        "目前空置"
      ],
      "desc": "墨井洞忠武小学后方商住楼的地下仓库。地下层面积127.7㎡。1层地面已打通，无需另外施工即可与地下连通使用。因是商住楼，工厂等会产生噪音的业种不能出租，只能用作地下仓库或办公室。目前空置。"
    },
    "en": {
      "title": "Basement storage / office",
      "tags": [
        "Behind Chungmu Elementary",
        "Vacant now"
      ],
      "desc": "A basement storage space in a mixed-use building behind Chungmu Elementary School, Mukjeong-dong. The basement area is 127.7㎡. The ground-floor slab is already open, so the space connects to the basement without extra construction. Because it is a mixed-use residential building, noisy businesses such as factories are not allowed; storage or office use only. Currently vacant."
    }
  },
  {
    "id": "mukjeong-building-sale",
    "status": "공개",
    "cat": "상가·건물",
    "title": "퇴계로5가 대로변 상가건물",
    "loc": "중구 묵정동",
    "deal": "매매",
    "deposit": 530000,
    "lease": "보증금 6,200만원 / 월 590만원",
    "area": 275.19,
    "areaLabel": "연면적",
    "areaNote": "대지 175.9㎡",
    "floor": "건물 전체",
    "totalFloor": "지상 3층",
    "dir": "북향 (주된 출입구 기준)",
    "approval": "1957년 10월 1일",
    "use": "제2종 근린생활시설",
    "violation": false,
    "movein": "즉시 입주 가능",
    "tags": [
      "퇴계로 대로변",
      "건물 전체"
    ],
    "desc": "퇴계로5가 오토바이 거리 대로변 상가건물입니다. 지상 3개 층 건물로 1층은 인쇄소, 2층은 현재 공실, 3층은 태권도 도장입니다. 오토바이 매장 또는 인쇄 공장 하실 분에게 추천드립니다. (1층 실사용 길이 약 20m)",
    "photos": [
      "listings/mukjeong-building-sale-1.jpg",
      "listings/mukjeong-building-sale-2.jpg",
      "listings/mukjeong-building-sale-3.jpg",
      "listings/mukjeong-building-sale-4.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "退溪路5街大路边商业楼",
      "tags": [
        "退溪路大路边",
        "整栋"
      ],
      "desc": "退溪路5街摩托车街大路边的商业楼。地上3层，1层是印刷厂，2层目前空置，3层是跆拳道馆。推荐给想开摩托车店或印刷厂的客户。（1层实际使用纵深约20米）"
    },
    "en": {
      "title": "Commercial building on Toegye-ro 5-ga",
      "tags": [
        "Main road frontage",
        "Entire building"
      ],
      "desc": "A commercial building on the main road of the Toegye-ro 5-ga motorcycle street. Three floors above ground: a print shop on 1F, 2F currently vacant, and a taekwondo studio on 3F. Recommended for a motorcycle shop or printing business. (1F usable depth about 20 m)"
    }
  },
  {
    "id": "mukjeong-shop-whole",
    "status": "공개",
    "cat": "상가·건물",
    "title": "동국대 후문 1,2,3층 통임대",
    "loc": "중구 묵정동",
    "deal": "월세",
    "deposit": 3000,
    "rent": 250,
    "area": 61.19,
    "areaNote": "건축물대장 전용 1층 34.41㎡, 2층 21.8㎡, 3층 4.98㎡",
    "floor": "1·2·3층 일부",
    "totalFloor": "3층",
    "dir": "서향 (주된 출입구 기준)",
    "approval": "1974년 9월 28일",
    "use": "제1종 근린생활시설",
    "parking": "불가",
    "violation": false,
    "movein": "즉시 입주 가능",
    "options": "개별난방",
    "tags": [
      "동국대 후문 도보 1분",
      "권리금 없음"
    ],
    "desc": "동국대 후문 도보 1분 거리 상가 1층, 2층, 3층 통임대입니다. 종전에 커피숍으로 사용하던 자리이며 권리금 등 기타 부대비용은 없습니다. 건축물대장상 전용면적은 1층 34.41㎡, 2층 21.8㎡, 3층 4.98㎡이나 실사용 면적은 이보다 조금 더 큽니다. 다른 용도로 사용 시 내부 시설은 모두 철거 예정입니다.",
    "photos": [
      "listings/mukjeong-shop-whole-1.jpg",
      "listings/mukjeong-shop-whole-2.jpg",
      "listings/mukjeong-shop-whole-3.jpg",
      "listings/mukjeong-shop-whole-4.jpg",
      "listings/mukjeong-shop-whole-5.jpg",
      "listings/mukjeong-shop-whole-6.jpg",
      "listings/mukjeong-shop-whole-7.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "东国大学后门 1·2·3层整体出租",
      "tags": [
        "东国大学后门步行1分钟",
        "无权利金"
      ],
      "areaNote": "建筑物台账专用面积：1层34.41㎡，2层21.8㎡，3层4.98㎡",
      "desc": "距东国大学后门步行1分钟，商铺1层、2层、3层整体出租。之前是咖啡店，没有权利金等其他附加费用。建筑物台账上的专用面积为1层34.41㎡、2层21.8㎡、3层4.98㎡，实际使用面积比这稍大。如用作其他用途，内部设施将全部拆除。"
    },
    "en": {
      "title": "Dongguk back gate, 1F to 3F leased together",
      "tags": [
        "1 min to Dongguk back gate",
        "No key money"
      ],
      "areaNote": "Registered exclusive area: 1F 34.41㎡, 2F 21.8㎡, 3F 4.98㎡",
      "desc": "Floors 1, 2 and 3 of a shop building leased together, 1 minute from Dongguk University's back gate. Previously a coffee shop, with no key money or other extra costs. The registered exclusive areas are 34.41㎡ (1F), 21.8㎡ (2F) and 4.98㎡ (3F); the actual usable space is a bit larger. If used for another purpose, all interior fixtures will be removed."
    }
  },
  {
    "id": "jangchung-office-1f",
    "status": "공개",
    "cat": "사무실",
    "title": "1층 창고겸 사무실",
    "loc": "중구 장충동2가",
    "jibun": "173-25",
    "deal": "월세",
    "deposit": 2000,
    "rent": 90,
    "area": 32.73,
    "floor": "1층",
    "totalFloor": "2층",
    "dir": "남향 (주된 출입구 기준)",
    "approval": "1971년 8월 25일",
    "use": "단독주택",
    "parking": "불가",
    "violation": false,
    "movein": "즉시 입주 가능",
    "options": "벽걸이 에어컨 / 개별난방",
    "tags": [
      "1층",
      "즉시 입주"
    ],
    "desc": "퇴계로5가 충무초 인근 좁은 이면도로에 위치한 1층 창고 겸 사무실입니다. 소규모 공방, 작업실, 사무실 용도로 추천드립니다. 내부 공간을 분리해 두었고 각 공간마다 에어컨이 있습니다. 현재 공실로 즉시 입주 가능합니다.",
    "photos": [
      "listings/jangchung-office-1f-1.jpg",
      "listings/jangchung-office-1f-2.jpg",
      "listings/jangchung-office-1f-3.jpg",
      "listings/jangchung-office-1f-4.jpg",
      "listings/jangchung-office-1f-5.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "1层仓库兼办公室",
      "tags": [
        "1层",
        "可立即入住"
      ],
      "desc": "位于退溪路5街忠武小学附近窄巷内的1层仓库兼办公室。推荐用作小型工作坊、工作室或办公室。内部空间已分隔，每个空间都有空调。目前空置，可立即入住。"
    },
    "en": {
      "title": "Ground-floor storage / office",
      "tags": [
        "Ground floor",
        "Available now"
      ],
      "desc": "A ground-floor storage/office space on a narrow side street near Chungmu Elementary School, Toegye-ro 5-ga. Recommended for a small workshop, studio or office. The interior is divided into separate rooms, each with its own air conditioner. Currently vacant and available now."
    }
  },
  {
    "id": "mukjeong-factory-sale",
    "status": "공개",
    "cat": "인쇄 공장·창고",
    "title": "퇴계로5가 인쇄골목내 공장, 창고",
    "loc": "중구 묵정동",
    "deal": "매매",
    "deposit": 150000,
    "lease": "보증금 3,000만원 / 월 200만원",
    "area": 83.5,
    "areaLabel": "연면적",
    "areaNote": "대지 101.8㎡",
    "floor": "건물 전체",
    "totalFloor": "지상 2층",
    "baths": "욕실 1개",
    "dir": "북향 (주된 출입구 기준)",
    "approval": "1955년 11월 1일",
    "use": "제2종 근린생활시설",
    "violation": false,
    "movein": "2029년 8월 30일부터 (협의 가능)",
    "tags": [
      "인쇄골목",
      "건물 전체"
    ],
    "desc": "퇴계로5가 묵정동 인쇄골목 내 창고, 공장 자리입니다. 네모반듯한 대지 위에 2층 건물(목조)이며, 현 임차인 명도는 협의 사항입니다.",
    "photos": [],
    "updated": "2026-10-30",
    "zh": {
      "title": "退溪路5街印刷胡同内 工厂、仓库",
      "tags": [
        "印刷胡同",
        "整栋"
      ],
      "desc": "退溪路5街墨井洞印刷胡同内的仓库、工厂用地。方正的土地上建有2层建筑（木结构），现租户的腾退事宜可协商。"
    },
    "en": {
      "title": "Factory / warehouse in the Toegye-ro 5-ga printing alley",
      "tags": [
        "Printing alley",
        "Entire building"
      ],
      "desc": "A warehouse/factory site in the printing alley of Mukjeong-dong, Toegye-ro 5-ga. A two-storey wooden building on a regular, square plot. Vacating by the current tenant is negotiable."
    }
  },
  {
    "id": "pildong-tworoom-sale-5f",
    "status": "공개",
    "cat": "빌라",
    "title": "충무로역 도보6분 풀옵션 투룸 매매",
    "loc": "중구 필동3가",
    "jibun": "39-31",
    "deal": "매매",
    "deposit": 30000,
    "fee": "7.5만원",
    "lease": "보증금 2,000만원 / 월 105만원",
    "area": 27.16,
    "areaNote": "공급 32.78㎡",
    "floor": "5층",
    "totalFloor": "6층",
    "rooms": "방 2개",
    "baths": "욕실 1개",
    "dir": "북향 (안방 기준)",
    "approval": "2017년 9월 8일",
    "use": "공동주택",
    "parking": "건물 전체 10대",
    "violation": false,
    "movein": "2027년 12월 31일부터",
    "options": "천장형 에어컨, 신발장, 냉장고, 세탁기, 싱크대, 인덕션, 엘리베이터 / 개별난방",
    "tags": [
      "충무로역 도보 6분",
      "동국대 도보 1분"
    ],
    "desc": "충무로역 도보 6분, 동국대학교 도보 1분 거리 풀옵션 투룸 빌라입니다. 동국대학교 기숙사 바로 앞에 위치한 단지형 다세대 빌라로, 실사용 면적은 약 40㎡입니다. 동국대 학생, 3·4호선 직장인분들에게 인기 많은 매물이며 현재 동국대 학생이 거주 중입니다. 임대수익형 매물로 추천드립니다.",
    "photos": [
      "listings/pildong-tworoom-sale-5f-1.jpg",
      "listings/pildong-tworoom-sale-5f-2.jpg",
      "listings/pildong-tworoom-sale-5f-3.jpg",
      "listings/pildong-tworoom-sale-5f-4.jpg",
      "listings/pildong-tworoom-sale-5f-5.jpg",
      "listings/pildong-tworoom-sale-5f-6.jpg",
      "listings/pildong-tworoom-sale-5f-7.jpg",
      "listings/pildong-tworoom-sale-5f-8.jpg",
      "listings/pildong-tworoom-sale-5f-9.jpg"
    ],
    "updated": "2026-10-30",
    "zh": {
      "title": "忠武路站步行6分钟 全配置两室出售",
      "tags": [
        "忠武路站步行6分钟",
        "东国大学步行1分钟"
      ],
      "desc": "距忠武路站步行6分钟、东国大学步行1分钟的全配置两室公寓。位于东国大学宿舍正前方的小区型多户住宅，实际使用面积约40㎡。深受东国大学学生和3·4号线上班族欢迎，目前由东国大学学生居住。推荐作为收租型投资。"
    },
    "en": {
      "title": "Fully furnished 2-room villa for sale, 6 min to Chungmuro Stn",
      "tags": [
        "6 min to Chungmuro Stn",
        "1 min to Dongguk Univ."
      ],
      "desc": "A fully furnished two-room villa 6 minutes from Chungmuro Station and 1 minute from Dongguk University. It is in a complex-style multi-unit building right in front of the Dongguk dormitory, with about 40㎡ of usable space. Popular with Dongguk students and commuters on Lines 3 and 4; currently occupied by a Dongguk student. Recommended as a rental investment."
    }
  }
];
