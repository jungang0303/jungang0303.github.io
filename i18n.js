/* =========================================================
   중앙부동산 홈페이지 중국어(zh)·영어(en) 문구와 번역 규칙
   - /zh/, /en/ 화면에서만 불러옵니다. 한국어 화면은 index.html 그대로.
   - 매물별 제목·설명·태그는 listings.js 각 매물의 zh / en 항목을 씁니다.
   - 층수·방향·날짜·금액 같은 정해진 형식은 아래 규칙으로 자동 번역합니다.
   - 규칙에 없는 문구는 한국어 원문이 그대로 보입니다 (빠뜨린 것을 찾기 쉽게).
   ========================================================= */
(function(){
  const has = v => v !== undefined && v !== null && String(v).trim() !== "";
  const numOk = v => has(v) && isFinite(Number(v));
  const comma = n => Number(n).toLocaleString("en-US");
  const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const DATE = /(\d{4})년 (\d{1,2})월(?: (\d{1,2})일)?/g;
  const LOC = {
    "중구 장충동2가": ["中区 奖忠洞2街", "Jangchung-dong 2-ga, Jung-gu"],
    "중구 장충동1가": ["中区 奖忠洞1街", "Jangchung-dong 1-ga, Jung-gu"],
    "중구 묵정동":   ["中区 墨井洞", "Mukjeong-dong, Jung-gu"],
    "중구 을지로4가": ["中区 乙支路4街", "Euljiro 4-ga, Jung-gu"],
    "중구 필동3가":  ["中区 笔洞3街", "Pil-dong 3-ga, Jung-gu"],
    "중구 오장동":   ["中区 五壮洞", "Ojang-dong, Jung-gu"]
  };
  /* 만원 단위 금액 해석: "2억 6,500만원" -> 26500 */
  const parseMan = s => { const m = String(s).match(/(?:(\d+)억)?\s*(?:([\d,.]+)만)?/); if (!m || (!m[1] && !m[2])) return null; return (m[1] ? +m[1]*10000 : 0) + (m[2] ? +m[2].replace(/,/g,"") : 0); };

  function build(L, D){
    const tr = (s, dict) => has(s) && dict[s] != null ? dict[s] : s;
    const date = s => String(s).replace(DATE, (_, y, m, d) => L === "zh" ? `${y}年${+m}月${d ? `${+d}日` : ""}` : (d ? `${MON[m-1]} ${+d}, ${y}` : `${MON[m-1]} ${y}`));
    const man = n => L === "zh" ? zhMan(n) : enWon(n);
    const zhMan = n => n >= 10000 ? `${Math.floor(n/10000)}亿${n%10000 ? `${comma(n%10000)}万` : ""}韩元` : `${comma(n)}万韩元`;
    const zhShort = n => n >= 10000 ? `${Math.floor(n/10000)}亿${n%10000 ? `${comma(n%10000)}万` : ""}` : comma(n);
    const enWon = n => `₩${comma(Math.round(n*10000))}`;
    const enShort = n => { const w = n*10000; const f = (v, u) => `₩${+v.toFixed(2)}${u}`; return w >= 1e9 ? f(w/1e9, "B") : w >= 1e6 ? f(w/1e6, "M") : f(w/1e3, "K"); };

    const fns = {
      floor(s){
        if (!has(s)) return s;
        if (D.floor[s]) return D.floor[s];
        let m;
        if ((m = s.match(/^지하 (\d+)층$/))) return L === "zh" ? `地下${m[1]}层` : `B${m[1]}`;
        if ((m = s.match(/^(\d+)층$/))) return L === "zh" ? `${m[1]}层` : `${m[1]}F`;
        return s;
      },
      total(s){
        if (!has(s)) return s;
        let m;
        if ((m = s.match(/^지상 (\d+)층, 지하 (\d+)층$/))) return L === "zh" ? `地上${m[1]}层，地下${m[2]}层` : `${m[1]} floors + ${m[2]} basement`;
        if ((m = s.match(/^(?:지상 )?(\d+)층$/))) return L === "zh" ? `${m[1]}层` : `${m[1]} floors`;
        return s;
      },
      rooms(s){
        const m = has(s) && s.match(/^방 (\d+)개(?: \((오픈형|분리형)\))?$/); if (!m) return s;
        const zt = m[2] === "분리형" ? "（分离式）" : m[2] ? "（开放式）" : ""; const et = m[2] === "분리형" ? " (separate room)" : m[2] ? " (open-plan)" : "";
        return L === "zh" ? `${m[1]}室${zt}` : `${m[1]} room${m[1] > 1 ? "s" : ""}${et}`;
      },
      baths(s){
        const m = has(s) && s.match(/^욕실 (\d+)개$/); if (!m) return s;
        return L === "zh" ? `${m[1]}个卫生间` : `${m[1]} bathroom${m[1] > 1 ? "s" : ""}`;
      },
      dir(s){
        const m = has(s) && s.match(/^(남동|남서|북동|북서|동|서|남|북)향 \((안방|거실|주된 출입구) 기준\)$/); if (!m) return s;
        return L === "zh" ? `朝${D.dir[m[1]]}（以${D.basis[m[2]]}为准）` : `${D.dir[m[1]]}-facing (${D.basis[m[2]]})`;
      },
      movein(s){
        if (!has(s)) return s;
        let out = s.replace(/^즉시 입주( 가능)?/, D.now).replace(/ \(현재 공실\)/, D.vacant).replace(/ \(협의 가능\)/, D.nego);
        out = out.replace(/^(\d{4}년 \d{1,2}월(?: \d{1,2}일)?)부터/, (_, d) => L === "zh" ? `${date(d)}起` : `From ${date(d)}`);
        return out;
      },
      fee(s){
        if (s === "없음") return L === "zh" ? "无" : "None";
        const m = has(s) && s.match(/^(약 )?([\d.]+)만원(?: \((.+)\))?$/); if (!m) return s;
        const amt = L === "zh" ? `${m[1] ? "约" : ""}${m[2]}万韩元` : `${m[1] ? "approx. " : ""}₩${comma(Math.round(+m[2]*10000))}`;
        return m[3] ? `${amt}${L === "zh" ? `（${tr(m[3], D.paren)}）` : ` (${tr(m[3], D.paren)})`}` : amt;
      },
      lease(s){
        if (!has(s)) return s;
        if (D.lease[s]) return D.lease[s];
        let m;
        if ((m = s.match(/^전세 (.+)$/))) { const n = parseMan(m[1]); return n == null ? s : (L === "zh" ? `全租 ${man(n)}` : `Jeonse ${man(n)}`); }
        if ((m = s.match(/^보증금 (.+?) \/ 월 (.+?)( \(부가세 별도\))?$/))) {
          const a = parseMan(m[1]), b = parseMan(m[2]); if (a == null || b == null) return s;
          return L === "zh" ? `押金${man(a)} / 月租${man(b)}${m[3] ? "（不含增值税）" : ""}` : `Deposit ${man(a)} / ${man(b)} per month${m[3] ? " (excl. VAT)" : ""}`;
        }
        return s;
      },
      parking(s){
        if (!has(s)) return s;
        if (D.parking[s]) return D.parking[s];
        const m = s.match(/^건물 전체 (\d+)대$/);
        return m ? (L === "zh" ? `整栋共${m[1]}个车位` : `${m[1]} spaces in the building`) : s;
      },
      options(s){
        if (!has(s)) return s;
        return s.split(" / ").map(g => g.split(", ").map(x => tr(x, D.opt)).join(L === "zh" ? "、" : ", ")).join(" / ");
      },
      areaNote(s){
        if (!has(s)) return s;
        if (D.areaNote[s]) return D.areaNote[s];
        let m;
        if ((m = s.match(/^(공급|계약면적|대지) ([\d.]+)㎡$/))) return `${D.areaWord[m[1]]} ${m[2]}㎡`;
        return s;
      }
    };

    const priceText = l => {
      if (!numOk(l.deposit)) return D.t.ask;
      if (l.deal === "월세") return L === "zh"
        ? (numOk(l.rent) ? `月租 ${zhShort(l.deposit)} / ${comma(l.rent)}` : `押金 ${zhShort(l.deposit)} / 月租面议`)
        : (numOk(l.rent) ? `${enShort(l.deposit)} / ${enShort(l.rent)} mo.` : `Deposit ${enShort(l.deposit)} / rent on request`);
      const lbl = D.t["deal:" + l.deal] || l.deal;
      return L === "zh" ? `${lbl} ${zhShort(l.deposit)}` : `${lbl} ${enShort(l.deposit)}`;
    };
    const priceFull = l => {
      if (!numOk(l.deposit)) return "";
      if (l.deal === "월세") return L === "zh"
        ? `押金 ${man(l.deposit)} / 月租 ${numOk(l.rent) ? man(l.rent) : "面议"}`
        : `Deposit ${man(l.deposit)} / Rent ${numOk(l.rent) ? `${man(l.rent)} per month` : "on request"}`;
      return man(l.deposit);
    };
    const priceHead = l => !numOk(l.deposit) ? D.t.ask : l.deal === "월세" ? priceFull(l) : `${D.t["deal:" + l.deal] || l.deal} ${man(l.deposit)}`;

    return {
      t: D.t, wd: D.wd, today: D.today,
      priceText, priceFull, priceHead,
      locText: l => {
        const j = l.jibun ? ` ${l.jibun}` : "";
        return L === "zh" ? `${l.loc}${j}（${l.locKo}${j}）` : `${l.jibun ? l.jibun + ", " : ""}${l.loc} (${l.locKo}${j})`;
      },
      floorText: l => has(l.floor) && has(l.totalFloor) ? (L === "zh" ? `${l.floor} / 共${l.totalFloor}` : `${l.floor} / ${l.totalFloor}`) : has(l.floor) ? l.floor : has(l.totalFloor) ? (L === "zh" ? `共${l.totalFloor}` : l.totalFloor) : "",
      mapListing(src){
        const x = Object.assign({}, src), o = src[L] || {};
        x.locKo = src.loc;
        x.loc = LOC[src.loc] ? LOC[src.loc][L === "zh" ? 0 : 1] : src.loc;
        x.title = o.title || src.title;
        x.desc = o.desc || src.desc;
        x.tags = o.tags || src.tags;
        x.areaNote = o.areaNote || fns.areaNote(src.areaNote);
        x.areaLabel = src.areaLabel ? tr(src.areaLabel, D.areaLabel) : src.areaLabel;
        x.approvalLabel = src.approvalLabel ? tr(src.approvalLabel, D.areaLabel) : src.approvalLabel;
        x.use = has(src.use) ? (D.use[src.use] ? `${D.use[src.use]}${L === "zh" ? `（${src.use}）` : ` (${src.use})`}` : src.use) : src.use;
        x.approval = has(src.approval) ? date(src.approval) : src.approval;
        ["floor","rooms","baths","dir","movein","fee","lease","parking","options"].forEach(k => { x[k] = o[k] || fns[k](src[k]); });
        x.totalFloor = o.totalFloor || fns.total(src.totalFloor);
        x.photos = (src.photos || []).map(p => /^(data:|https?:|\/)/.test(p) ? p : "/" + p);
        return x;
      }
    };
  }

  const ZH = {
    t: {
      py: "坪", area: "专用", viol: "违章建筑", noViol: "非违章建筑", all: "全部", ask: "价格面议",
      "cat:원룸·투룸": "一室·两室", "cat:오피스텔": "商住公寓", "cat:빌라": "低层公寓", "cat:사무실": "办公室",
      "cat:상가·건물": "商铺·整栋", "cat:오토바이 상가": "摩托车店铺", "cat:인쇄 공장·창고": "印刷厂·仓库",
      "deal:월세": "月租", "deal:매매": "出售", "deal:전세": "全租",
      empty: "目前网站上暂无房源。<br>请告诉我们您的需求，我们会马上为您寻找。",
      done: "已成交", altMain: "主图", photos: "照片", noPhoto: "照片准备中", photo: "照片", fee: "管理费",
      "r:loc": "地址", "r:deal": "交易方式", "r:price": "价格", "r:lease": "现租约", "r:area": "专用面积",
      "r:floor": "所在层 / 总层数", "r:roomsBaths": "房间 / 卫生间", "r:baths": "卫生间", "r:rooms": "房间",
      "r:dir": "朝向", "r:use": "建筑用途", "r:approval": "竣工批准日", "r:parking": "停车", "r:movein": "可入住日期", "r:options": "设施",
      brand: "中央房产", linkCopied: "已复制房源链接", numCopied: "已复制号码"
    },
    wd: ["周日","周一","周二","周三","周四","周五","周六"],
    today: (k, c) => ({
      next: `${c.m}月${c.d}日（${c.wd}）${c.open}:00 开门`,
      closedState: "今天休息", closedSub: `${c.hol ? "法定节假日" : "周日"}休息 · 下次营业 ${c.next}`,
      openState: "正在营业", openSub: `今天 ${c.range} · 来访前打电话或发微信会更快`,
      beforeState: `今天 ${c.open}:00 开门`, beforeSub: `营业时间 ${c.range}`,
      afterState: "今天已下班", afterSub: `下次营业 ${c.next} · 微信、短信随时可以留言`,
      noData: " · 节假日是否营业请电话确认"
    })[k],
    floor: { "반지층": "半地下", "중층": "中层", "건물 전체": "整栋", "1층 (일부)": "1层（部分）", "지하 1층 (전부)": "地下1层（全部）", "1·2·3층 일부": "1·2·3层部分" },
    dir: { "동":"东", "서":"西", "남":"南", "북":"北", "남동":"东南", "남서":"西南", "북동":"东北", "북서":"西北" },
    basis: { "안방":"主卧", "거실":"客厅", "주된 출입구":"主入口" },
    now: "可立即入住", vacant: "（目前空置）", nego: "（可协商）",
    paren: {
      "공용관리비, 수도, 인터넷 포함": "含公共管理费、水费、网费", "건물 공용부분 청소비, 화장실 청소비, 주차관리비, 수도요금 포함": "含大楼公共区域清洁费、卫生间清洁费、停车管理费、水费", "수도, 인터넷 포함": "含水费、网费",
      "주차 1대 이용 시 15만원": "使用1个车位时为15万韩元", "공용관리비, 수도 포함": "含公共管理费、水费",
      "예상, 전기·수도 등 사용료 별도": "预估，电费、水费等使用费另计", "월 고정 관리비": "每月固定管理费"
    },
    lease: { "소유자 거주 중": "业主自住" },
    parking: {
      "불가": "不可停车", "1대 가능 (이용 시 관리비 월 15만원)": "可停1辆（使用时管理费每月15万韩元）",
      "50평당 1대 무료 (건물 전체 47대)": "每50坪免费1个车位（整栋共47个车位）", "1대 가능 (건물 전체 15대)": "可停1辆（整栋共15个车位）",
      "불가 (바로 옆 건물 월주차 알선 가능)": "不可停车（可介绍隔壁楼的月租车位）"
    },
    opt: {
      "벽걸이 에어컨":"壁挂式空调", "천장형 에어컨":"吸顶式空调", "침대":"床", "책상":"书桌", "옷장":"衣柜", "신발장":"鞋柜",
      "냉장고":"冰箱", "세탁기":"洗衣机", "싱크대":"水槽", "방범창":"防盗窗", "인덕션":"电磁炉", "전자레인지":"微波炉", "가스레인지":"燃气灶",
      "엘리베이터":"电梯", "엘리베이터 2대":"电梯2部", "테라스":"露台", "베란다":"阳台", "개별난방":"独立供暖",
      "실내 전용 화장실":"室内专用卫生间", "환기 설비":"通风设备", "탕비실":"茶水间", "내부 남녀 화장실 2개":"内部男女卫生间2个",
      "인터폰":"对讲机", "CCTV":"监控摄像头", "현관보안":"门禁系统"
    },
    areaNote: { "임대 부분 (호실 중 일부)": "出租部分（房间的一部分）", "지하층 면적": "地下层面积", "지하층 전체": "整个地下层" },
    areaWord: { "공급":"供应面积", "계약면적":"合同面积", "대지":"土地" },
    areaLabel: { "면적":"面积", "연면적":"总建筑面积", "허가일자":"建筑许可日期" },
    use: {
      "단독주택":"独立住宅", "공동주택":"共同住宅（多户住宅）", "제1종 근린생활시설":"第一类近邻生活设施（商业）",
      "제1종 근린생활시설 (소매점)":"第一类近邻生活设施（零售）", "제2종 근린생활시설":"第二类近邻生活设施（商业）",
      "제2종근린생활시설":"第二类近邻生活设施（商业）", "업무시설 (오피스텔)":"业务设施（商住公寓）", "업무시설":"业务设施",
      "체력단련장 (업무시설로 용도변경 진행 중)":"健身设施（正在办理变更为业务设施）"
    }
  };

  const EN = {
    t: {
      py: " py", area: "Excl.", viol: "Illegal building", noViol: "Not an illegal building", all: "All", ask: "Price on request",
      "cat:원룸·투룸": "Studios & 2-rooms", "cat:오피스텔": "Officetels", "cat:빌라": "Villas", "cat:사무실": "Offices",
      "cat:상가·건물": "Shops & buildings", "cat:오토바이 상가": "Motorcycle shops", "cat:인쇄 공장·창고": "Print shops & warehouses",
      "deal:월세": "Monthly rent", "deal:매매": "For sale", "deal:전세": "Jeonse",
      empty: "There are no listings on the website right now.<br>Tell us what you need and we will find it for you.",
      done: "Closed", altMain: "main photo", photos: "Photos", noPhoto: "Photos coming soon", photo: "Photo", fee: "Maint. fee",
      "r:loc": "Address", "r:deal": "Deal type", "r:price": "Price", "r:lease": "Current lease", "r:area": "Exclusive area",
      "r:floor": "Floor / total floors", "r:roomsBaths": "Rooms / baths", "r:baths": "Bathrooms", "r:rooms": "Rooms",
      "r:dir": "Facing", "r:use": "Building use", "r:approval": "Completion approval", "r:parking": "Parking", "r:movein": "Move-in", "r:options": "Features",
      brand: "Jungang Real Estate", linkCopied: "Listing link copied", numCopied: "Number copied"
    },
    wd: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    today: (k, c) => ({
      next: `${c.wd} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.m-1]} ${c.d}, opens ${c.open}:00`,
      closedState: "Closed today", closedSub: `Closed for ${c.hol ? "a public holiday" : "Sunday"} · Next open: ${c.next}`,
      openState: "Open now", openSub: `Today ${c.range} · Call ahead and we will be ready for you`,
      beforeState: `Opens today at ${c.open}:00`, beforeSub: `Hours ${c.range}`,
      afterState: "Closed for today", afterSub: `Next open: ${c.next} · Texts and messages are welcome anytime`,
      noData: " · Please call to confirm holiday hours"
    })[k],
    floor: { "반지층": "semi-basement", "중층": "Middle floor", "건물 전체": "Entire building", "1층 (일부)": "1F (part)", "지하 1층 (전부)": "B1 (entire floor)", "1·2·3층 일부": "Parts of 1F, 2F, 3F" },
    dir: { "동":"East", "서":"West", "남":"South", "북":"North", "남동":"Southeast", "남서":"Southwest", "북동":"Northeast", "북서":"Northwest" },
    basis: { "안방":"master bedroom", "거실":"living room", "주된 출입구":"main entrance" },
    now: "Available now", vacant: " (currently vacant)", nego: " (negotiable)",
    paren: {
      "공용관리비, 수도, 인터넷 포함": "incl. common fees, water, internet", "건물 공용부분 청소비, 화장실 청소비, 주차관리비, 수도요금 포함": "incl. common area cleaning, restroom cleaning, parking management, water", "수도, 인터넷 포함": "incl. water, internet",
      "주차 1대 이용 시 15만원": "₩150,000 with 1 parking space", "공용관리비, 수도 포함": "incl. common fees, water",
      "예상, 전기·수도 등 사용료 별도": "estimated; electricity, water etc. extra", "월 고정 관리비": "fixed monthly fee"
    },
    lease: { "소유자 거주 중": "Owner-occupied" },
    parking: {
      "불가": "Not available", "1대 가능 (이용 시 관리비 월 15만원)": "1 space (maintenance fee becomes ₩150,000/month)",
      "50평당 1대 무료 (건물 전체 47대)": "1 free space per 50 pyeong (47 spaces in the building)", "1대 가능 (건물 전체 15대)": "1 space available (15 spaces in the building)",
      "불가 (바로 옆 건물 월주차 알선 가능)": "Not available (monthly parking next door can be arranged)"
    },
    opt: {
      "벽걸이 에어컨":"wall AC", "천장형 에어컨":"ceiling AC", "침대":"bed", "책상":"desk", "옷장":"wardrobe", "신발장":"shoe cabinet",
      "냉장고":"refrigerator", "세탁기":"washing machine", "싱크대":"sink", "방범창":"window security bars", "인덕션":"induction cooktop", "전자레인지":"microwave", "가스레인지":"gas stove",
      "엘리베이터":"elevator", "엘리베이터 2대":"2 elevators", "테라스":"terrace", "베란다":"balcony", "개별난방":"individual heating",
      "실내 전용 화장실":"private indoor restroom", "환기 설비":"ventilation", "탕비실":"pantry", "내부 남녀 화장실 2개":"2 restrooms inside (men's and women's)",
      "인터폰":"intercom", "CCTV":"CCTV", "현관보안":"entrance security lock"
    },
    areaNote: { "임대 부분 (호실 중 일부)": "Rented portion (part of the unit)", "지하층 면적": "Basement floor area", "지하층 전체": "Entire basement floor" },
    areaWord: { "공급":"Supply area", "계약면적":"Contract area", "대지":"Land" },
    areaLabel: { "면적":"Area", "연면적":"Total floor area", "허가일자":"Building permit date" },
    use: {
      "단독주택":"Detached house", "공동주택":"Multi-unit housing", "제1종 근린생활시설":"Class 1 neighborhood facility (commercial)",
      "제1종 근린생활시설 (소매점)":"Class 1 neighborhood facility (retail)", "제2종 근린생활시설":"Class 2 neighborhood facility (commercial)",
      "제2종근린생활시설":"Class 2 neighborhood facility (commercial)", "업무시설 (오피스텔)":"Business facility (officetel)", "업무시설":"Business facility",
      "체력단련장 (업무시설로 용도변경 진행 중)":"Fitness facility (change to business use in progress)"
    }
  };

  window.I18N = { zh: build("zh", ZH), en: build("en", EN) };
})();
