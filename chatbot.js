/* =========================================================
   중앙부동산 안내 챗봇 (질문 선택형, AI 아님)
   - 손님이 버튼으로 질문을 고르면 미리 써 둔 답을 보여줍니다.
   - 언어는 <html lang> 기준 (ko / zh / en).
   - 매물 찾기는 index.html이 공개한 window.JASite 목록을 씁니다.
   - 위챗 창(JAWeChat)도 여기서 만듭니다.
   ========================================================= */
(function(){
  const LANG = (document.documentElement.lang || "ko").slice(0,2);
  const QR = window.JA_QR || "/img/wechat-qr.png";
  const WECHAT_ID = "woori03";
  const MAP_NAVER = "https://map.naver.com/p/entry/place/33949385";
  const MAP_KAKAO = "https://place.map.kakao.com/20949519";
  const MAP_GOOGLE = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("서울 중구 퇴계로 264");
  const KAKAO = "https://pf.kakao.com/_CxbAxiX/chat";

  const S = {
    ko: {
      fab: "궁금한 점 물어보기", title: "중앙부동산 안내", sub: "버튼을 눌러 궁금한 내용을 골라 주세요",
      hello: "안녕하세요, 중앙부동산입니다.<br>아래에서 궁금한 내용을 골라 주세요.",
      note: "자동 안내입니다. 자세한 상담은 전화·문자·카카오톡으로 해 주세요.",
      menu: "처음으로", back: "다른 질문 보기",
      q: { find:"매물 찾기", hours:"영업시간", loc:"오시는 길", visit:"방 보러 가려면", docs:"계약 준비물", fee:"중개보수", contact:"상담 연결" },
      pickCat: "어떤 매물을 찾으세요?", pickDeal: "거래 형태를 골라 주세요.", any: "전체",
      found: n => `조건에 맞는 매물 ${n}건입니다. 누르면 자세히 볼 수 있습니다.`,
      more: n => `목록에서 ${n}건 모두 보기`,
      none: "지금 홈페이지에 올라온 매물 중에는 조건에 맞는 것이 없습니다. 원하시는 조건을 알려 주시면 따로 찾아 드립니다.",
      hours: "<b>3월 ~ 11월</b><br>월 ~ 토 10:00 – 18:00 (일요일·공휴일 휴무)<br><br><b>12월 ~ 2월 (원룸 시즌)</b><br>매일 10:00 – 18:00 (설 연휴만 휴무)",
      today: "오늘",
      loc: "<b>서울 중구 퇴계로 264, 1층 107호</b><br>충무초등학교 정문 앞, 노란 간판입니다.<br><br>충무로역(3·4호선) 1번 출구<br>동대문역사문화공원역(2·4·5호선) 5번·6번 출구",
      visit: "방문 전에 전화나 문자로 원하시는 조건(지역, 예산, 입주 날짜)을 알려 주시면 맞는 매물을 미리 준비해 두겠습니다.<br><br>지금 사람이 살고 있는 집은 미리 약속을 잡은 뒤에 보실 수 있습니다.",
      docs: "<b>계약하실 때 준비물</b><br>· 신분증<br>· 계약금 (계좌이체 가능)<br><br>본인 대신 다른 사람이 계약하는 경우에는 위임장 등 서류가 더 필요합니다. 미리 문의해 주세요.",
      fee: "중개보수는 법정 요율에 따라 받습니다.<br>매물을 고르시면 바로 계산해 드립니다.",
      pickFeeCat: "어떤 종류의 매물인가요?", pickFee: "중개보수가 궁금한 매물을 골라 주세요.", feeOther: "다른 매물 계산",
      F: {
        base: "거래금액", rule: "적용 기준", max: "중개보수 상한", upTo: "", vat: v => `부가세 포함 ${v}`,
        won: n => `${n.toLocaleString("ko-KR")}원`, man: n => manKo(n),
        sale: v => `매매가 ${v}`, jeonse: v => `전세 보증금 ${v}`,
        rent: (d, r, m, total) => `보증금 ${d} + 월세 ${r} × ${m} = ${total}`,
        x70: "×100으로 합하면 5천만원 미만이라 ×70을 적용합니다.",
        house: (sale, rate) => `주택 ${sale ? "매매" : "임대차"} ${rate}`,
        officetel: (sale, rate) => `주거용 오피스텔 ${sale ? "매매" : "임대차"} ${rate}`,
        other: "주택 외(상가·사무실·창고 등) 0.9%",
        notes: "· 임대인과 임차인(매도인과 매수인)이 각각 내는 금액입니다.<br>· 부가가치세 10%는 별도입니다.",
        ask: "가격 문의 매물이라 계산할 수 없습니다. 전화나 문자로 문의해 주세요."
      },
      contact: "편하신 방법으로 연락 주세요.",
      call02: "사무실 전화 02-2265-0303", call010: "휴대폰 010-2612-0303", sms: "문자 보내기", kakao: "카카오톡 상담", wechat: "위챗(WeChat)",
      naver: "네이버 지도", kakaomap: "카카오맵", google: "구글 지도"
    },
    zh: {
      fab: "常见问题", title: "中央房产 咨询助手", sub: "请点击按钮选择问题",
      hello: "您好，这里是中央房产（중앙부동산）。<br>请在下方选择您想了解的内容。",
      note: "本助手为自动回复。详细咨询请通过微信、电话或短信联系。",
      menu: "返回首页", back: "查看其他问题",
      q: { find:"找房源", hours:"营业时间", loc:"位置与交通", guide:"月租·全租·管理费说明", docs:"签约需要准备什么", fee:"中介费", contact:"联系我们" },
      pickCat: "您想找哪种房源？", pickDeal: "请选择交易方式。", any: "全部",
      found: n => `找到 ${n} 套符合条件的房源，点击可查看详情。`,
      more: n => `在列表中查看全部 ${n} 套`,
      none: "目前网站上没有符合条件的房源。请告诉我们您的需求，我们会另外为您寻找。",
      hours: "<b>3月 ~ 11月</b><br>周一 ~ 周六 10:00 – 18:00（周日及法定节假日休息）<br><br><b>12月 ~ 2月（租房旺季）</b><br>每天 10:00 – 18:00（仅春节假期休息）",
      today: "今天",
      loc: "<b>首尔市中区退溪路264，1层107号</b><br>（서울 중구 퇴계로 264, 1층 107호）<br>位于忠武小学正门对面，黄色招牌。<br><br>忠武路站（3·4号线）1号出口<br>东大门历史文化公园站（2·4·5号线）5号·6号出口",
      guide: "<b>月租（월세）</b>：先交一笔押金（보증금），之后每月交房租。退租时押金退还。<br><br><b>全租（전세）</b>：交一大笔押金，不用交月租，合同到期后押金全额退还。<br><br><b>管理费（관리비）</b>：每月另交的楼宇管理费用，与房租分开。电费、燃气费等一般另外按用量缴纳。<br><br>具体包含的项目每套房源不同，请查看房源详情或咨询我们。",
      docs: "<b>签约时请准备</b><br>· 护照，以及外国人登录证（如已办理）<br>· 定金（可以银行转账）<br><br>如由他人代为签约，需要委托书等额外材料，请提前咨询。",
      fee: "中介费按照法定费率收取。<br>选择房源后，可以马上为您计算。",
      pickFeeCat: "是哪种房源？", pickFee: "请选择想了解中介费的房源。", feeOther: "计算其他房源",
      F: {
        base: "交易金额", rule: "适用标准", max: "中介费上限", upTo: "", vat: v => `含增值税 ${v}`,
        won: n => `${n.toLocaleString("en-US")}韩元`, man: n => manZh(n),
        sale: v => `售价 ${v}`, jeonse: v => `全租押金 ${v}`,
        rent: (d, r, m, total) => `押金 ${d} + 月租 ${r} × ${m} = ${total}`,
        x70: "按×100计算不足5,000万韩元，因此按×70计算。",
        house: (sale, rate) => `住宅${sale ? "买卖" : "租赁"} ${rate}`,
        officetel: (sale, rate) => `住宅用商住公寓${sale ? "买卖" : "租赁"} ${rate}`,
        other: "非住宅（商铺·办公室·仓库等）0.9%",
        notes: "· 房东和租客（卖方和买方）各自支付。<br>· 不含10%增值税。",
        ask: "此房源价格面议，无法计算。请通过微信或电话咨询。"
      },
      contact: "请选择方便的联系方式。微信消息可以长按使用翻译功能，中文咨询也没问题。",
      call02: "办公室电话 02-2265-0303", call010: "手机 010-2612-0303", sms: "发短信", kakao: "KakaoTalk 咨询", wechat: "微信咨询",
      naver: "Naver 地图", kakaomap: "Kakao 地图", google: "Google 地图"
    },
    en: {
      fab: "Questions?", title: "Jungang Real Estate Guide", sub: "Tap a button to choose a question",
      hello: "Hello, this is Jungang Real Estate (중앙부동산).<br>Please choose a topic below.",
      note: "This is an automated guide. For details, please call, text, or message us.",
      menu: "Main menu", back: "Other questions",
      q: { find:"Find a property", hours:"Opening hours", loc:"Location", guide:"Wolse, jeonse & fees explained", docs:"What to bring to sign", fee:"Brokerage fee", contact:"Contact us" },
      pickCat: "What kind of property are you looking for?", pickDeal: "Choose a deal type.", any: "All",
      found: n => `${n} matching listing(s). Tap one to see details.`,
      more: n => `See all ${n} in the list`,
      none: "No listing on the website matches right now. Tell us what you need and we will look for you.",
      hours: "<b>March – November</b><br>Mon – Sat 10:00 – 18:00 (closed Sundays and public holidays)<br><br><b>December – February (peak season)</b><br>Every day 10:00 – 18:00 (closed only over Lunar New Year)",
      today: "Today",
      loc: "<b>1F #107, 264 Toegye-ro, Jung-gu, Seoul</b><br>(서울 중구 퇴계로 264, 1층 107호)<br>Opposite the main gate of Chungmu Elementary School, yellow sign.<br><br>Chungmuro Station (Lines 3, 4) Exit 1<br>Dongdaemun History &amp; Culture Park Station (Lines 2, 4, 5) Exits 5, 6",
      guide: "<b>Wolse (monthly rent)</b>: you pay a deposit (bojeunggeum) up front, then rent every month. The deposit is returned when you move out.<br><br><b>Jeonse</b>: you pay one large deposit and no monthly rent. The full deposit is returned at the end of the lease.<br><br><b>Maintenance fee (gwallibi)</b>: a monthly building fee paid separately from rent. Electricity and gas are usually billed separately by usage.<br><br>What is included differs by property. Please check each listing or ask us.",
      docs: "<b>Please bring</b><br>· Passport, and your Alien Registration Card if you have one<br>· Contract deposit (bank transfer is fine)<br><br>If someone else signs on your behalf, extra documents such as a power of attorney are needed. Please ask us in advance.",
      fee: "Our brokerage fee follows the legal rates.<br>Choose a listing and we will calculate it right away.",
      pickFeeCat: "What type of property?", pickFee: "Choose a listing to see its brokerage fee.", feeOther: "Another listing",
      F: {
        base: "Transaction value", rule: "Rate", max: "Maximum brokerage fee", upTo: "", vat: v => `${v} incl. VAT`,
        won: n => `₩${n.toLocaleString("en-US")}`, man: n => `₩${(n*10000).toLocaleString("en-US")}`,
        sale: v => `Sale price ${v}`, jeonse: v => `Jeonse deposit ${v}`,
        rent: (d, r, m, total) => `Deposit ${d} + rent ${r} × ${m} = ${total}`,
        x70: "×70 applies because the ×100 total is under ₩50,000,000.",
        house: (sale, rate) => `Housing ${sale ? "sale" : "lease"}: ${rate}`,
        officetel: (sale, rate) => `Residential officetel ${sale ? "sale" : "lease"}: ${rate}`,
        other: "Non-housing (shops, offices, warehouses): 0.9%",
        notes: "· Each side (landlord and tenant, or seller and buyer) pays separately.<br>· 10% VAT is not included.",
        ask: "This listing's price is on request, so we cannot calculate it. Please contact us."
      },
      contact: "Choose whichever way is easiest for you.",
      call02: "Office 02-2265-0303", call010: "Mobile 010-2612-0303", sms: "Send a text", kakao: "KakaoTalk", wechat: "WeChat",
      naver: "Naver Map", kakaomap: "Kakao Map", google: "Google Maps"
    }
  }[LANG] || null;
  if (!S) return;

  /* ---------- 중개보수 계산 ----------
     근거: 서울특별시 주택 중개보수 등에 관한 조례 별표1(2021.12.30 시행), 공인중개사법 시행규칙 제20조·별표2
     - 월세 거래금액 = 보증금 + 월세×100, 그 합이 5천만원 미만이면 보증금 + 월세×70
     - 매물 구분: feeType(house/officetel/other)이 있으면 그것, 없으면 분류로 판단
       (주거용: 원룸·투룸, 빌라 = 주택 요율 / 오피스텔 = 주거용 오피스텔 요율 / 업무·상업용 = 주택 외 0.9%)`n       건축물대장이 근생이어도 주거용이면 주택 요율. 주거용인데 근생 요율을 받을 매물은 대표님이 알려주면 feeType: "other"를 넣는다.`n     - 사무소는 일반과세자라 부가세 10% 별도
     금액 단위: 만원 */
  const manKo = n => n >= 10000 ? `${Math.floor(n/10000)}억${n%10000 ? ` ${(n%10000).toLocaleString("ko-KR")}만원` : "원"}` : `${n.toLocaleString("ko-KR")}만원`;
  const manZh = n => n >= 10000 ? `${Math.floor(n/10000)}亿${n%10000 ? `${(n%10000).toLocaleString("en-US")}万` : ""}韩元` : `${n.toLocaleString("en-US")}万韩元`;
  const HOUSE_SALE = [[5000, .006, 25], [20000, .005, 80], [90000, .004], [120000, .005], [150000, .006], [Infinity, .007]];
  const HOUSE_LEASE = [[5000, .005, 20], [10000, .004, 30], [60000, .003], [120000, .004], [150000, .005], [Infinity, .006]];
  const feeType = l => l.feeType || ({ "원룸·투룸": "house", "빌라": "house", "오피스텔": "officetel" })[l.cat] || "other";
  function calcFee(l){
    const dep = Number(l.deposit), rent = Number(l.rent || 0);
    if (!isFinite(dep) || (l.deal === "월세" && !isFinite(Number(l.rent)))) return null;
    const sale = l.deal === "매매";
    let base = dep, mult = 0;
    if (l.deal === "월세") { mult = 100; base = dep + rent*100; if (base < 5000) { mult = 70; base = dep + rent*70; } }
    const type = feeType(l);
    let rate, cap = null;
    if (type === "house") { const row = (sale ? HOUSE_SALE : HOUSE_LEASE).find(r => base < r[0]); rate = row[1]; cap = row[2] || null; }
    else if (type === "officetel") rate = sale ? .005 : .004;
    else rate = .009;
    let won = Math.floor(Math.round(base * 10000) * Math.round(rate * 1000) / 1000);  /* 소수점 오차 방지 (0.9% -> 9/1000) */
    if (cap && won > cap * 10000) won = cap * 10000;
    return { sale, base, mult, dep, rent, type, rate, cap, won, jeonse: l.deal === "전세" };
  }
  function feeHtml(l, noHead){
    const F = S.F, c = calcFee(l);
    const head = noHead ? "" : `<b>${esc(l.title)}</b><br>${esc(window.JASite ? window.JASite.priceText(l) : "")}<br><br>`;
    if (!c) return head + F.ask;
    const pct = r => `${+(r*100).toFixed(1)}%`;
    let baseTxt = c.sale ? F.sale(F.man(c.base)) : c.jeonse ? F.jeonse(F.man(c.base)) : F.rent(F.man(c.dep), F.man(c.rent), c.mult, F.man(c.base));
    if (c.mult === 70) baseTxt += `<br><small>${F.x70}</small>`;
    const rule = c.type === "house" ? F.house(c.sale, pct(c.rate)) : c.type === "officetel" ? F.officetel(c.sale, pct(c.rate)) : F.other;
    return head + `${F.base}: ${baseTxt}<br>${F.rule}: ${rule}<br><br><b>${F.max}: ${c.type === "other" ? F.upTo : ""}${F.won(c.won)}</b><br><small>(${F.vat(F.won(Math.round(c.won * 1.1)))})</small><br><br><small>${F.notes}</small>`;
  }

  const W = {
    ko: { title:"위챗으로 상담하기", id:"위챗 아이디", copy:"아이디 복사", copied:"위챗 아이디를 복사했습니다", how:"PC로 보고 계시면 휴대폰 위챗으로 QR코드를 스캔해 친구로 추가해 주세요.<br>휴대폰으로 보고 계시면 아이디를 복사해 위챗에서 검색해 주세요.", close:"닫기" },
    zh: { title:"微信咨询", id:"微信号", copy:"复制微信号", copied:"已复制微信号", how:"如果您在电脑上浏览，请用手机微信扫描二维码添加好友。<br>如果您在手机上浏览，请复制微信号后在微信中搜索添加。", close:"关闭" },
    en: { title:"Chat on WeChat", id:"WeChat ID", copy:"Copy ID", copied:"WeChat ID copied", how:"On a computer: scan the QR code with WeChat on your phone to add us.<br>On a phone: copy the ID and search for it in WeChat.", close:"Close" }
  }[LANG];

  /* ---------- 스타일 ---------- */
  const css = `
  .jb-fab{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:calc(20px + env(safe-area-inset-bottom));z-index:28;display:flex;align-items:center;gap:8px;border:0;cursor:pointer;background:var(--navy,#16223d);color:#fff;font:700 15px/1.2 var(--font,system-ui);padding:12px 18px 12px 14px;border-radius:999px;box-shadow:0 6px 20px rgba(22,34,61,.28);border:2px solid var(--gold,#b8955a)}
  .jb-fab svg{width:22px;height:22px;color:var(--gold,#b8955a);flex:none}
  @media (max-width:860px){.jb-fab{bottom:calc(76px + env(safe-area-inset-bottom));padding:11px 14px}.jb-fab span{font-size:14px}}
  .jb-panel{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:calc(20px + env(safe-area-inset-bottom));z-index:29;width:min(380px,calc(100vw - 24px));height:min(600px,calc(100vh - 110px));background:#fff;border-radius:14px;box-shadow:0 14px 44px rgba(22,34,61,.3);display:flex;flex-direction:column;overflow:hidden;font-family:var(--font,system-ui)}
  @media (max-width:860px){.jb-panel{right:12px;left:12px;width:auto;bottom:calc(72px + env(safe-area-inset-bottom));height:min(560px,calc(100vh - 150px))}}
  .jb-head{background:var(--navy,#16223d);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px;border-bottom:3px solid var(--gold,#b8955a)}
  .jb-head b{display:block;font-size:16px}
  .jb-head small{display:block;font-size:12px;opacity:.72}
  .jb-x{margin-left:auto;background:transparent;border:0;color:#fff;font-size:24px;width:38px;height:38px;cursor:pointer;border-radius:50%}
  .jb-x:hover{background:rgba(255,255,255,.12)}
  .jb-log{flex:1;overflow-y:auto;padding:14px;background:#f3f4f7;display:flex;flex-direction:column;gap:10px}
  .jb-msg{max-width:88%;padding:10px 13px;border-radius:12px;font-size:14.5px;line-height:1.6;word-break:keep-all;overflow-wrap:anywhere}
  .jb-bot{background:#fff;color:#16223d;border:1px solid #e2e5ec;border-top-left-radius:4px;align-self:flex-start}
  .jb-me{background:var(--navy,#16223d);color:#fff;border-top-right-radius:4px;align-self:flex-end}
  .jb-note{font-size:12px;color:#5b6478;align-self:center;text-align:center;padding:0 8px}
  .jb-chips{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:100%}
  .jb-chip{border:1.5px solid var(--gold,#b8955a);background:#fff;color:#16223d;border-radius:999px;padding:7px 12px;font:600 13.5px/1.3 var(--font,system-ui);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center}
  .jb-chip:hover{background:#faf6ee}
  .jb-chip.solid{background:var(--navy,#16223d);color:#fff;border-color:var(--navy,#16223d)}
  .jb-chip.wx{background:#07c160;border-color:#07c160;color:#fff}
  .jb-chip.kk{background:#fee500;border-color:#fee500;color:#191600}
  .jb-cards{display:flex;flex-direction:column;gap:6px;align-self:stretch}
  .jb-card{display:flex;gap:10px;align-items:center;text-align:left;background:#fff;border:1px solid #e2e5ec;border-radius:10px;padding:8px;cursor:pointer;font-family:inherit;color:#16223d}
  .jb-card:hover{border-color:var(--gold,#b8955a)}
  .jb-card img,.jb-card .noimg{width:58px;height:58px;border-radius:7px;object-fit:cover;flex:none;background:#22314f}
  .jb-card b{display:block;font-size:13.5px;line-height:1.35}
  .jb-card span{display:block;font-size:13px;color:#8a6a35;font-weight:700;margin-top:2px}
  .jb-card small{display:block;font-size:12px;color:#5b6478}
  dialog.jb-wx{border:0;border-radius:14px;padding:0;width:min(360px,calc(100vw - 32px));box-shadow:0 14px 44px rgba(22,34,61,.35);font-family:var(--font,system-ui);color:#16223d}
  dialog.jb-wx::backdrop{background:rgba(10,16,30,.55)}
  .jb-wx .in{padding:22px 22px 18px;text-align:center}
  .jb-wx h3{margin:0 0 4px;font-size:19px}
  .jb-wx img{width:210px;height:210px;display:block;margin:12px auto;border:1px solid #e2e5ec;border-radius:10px;padding:8px;background:#fff}
  .jb-wx .idrow{display:flex;align-items:center;justify-content:center;gap:10px;margin:6px 0 10px;font-size:15px}
  .jb-wx .idrow strong{font-size:20px;letter-spacing:.02em}
  .jb-wx p{font-size:13px;color:#5b6478;margin:0 0 14px;line-height:1.6}
  .jb-wx .bt{display:flex;gap:8px}
  .jb-wx .bt button{flex:1;min-height:44px;border-radius:8px;font:700 15px var(--font,system-ui);cursor:pointer;border:1.5px solid #e2e5ec;background:#f3f4f7;color:#16223d}
  .jb-wx .bt .go{background:#07c160;border-color:#07c160;color:#fff}
  `;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const toast = m => (window.JASite && window.JASite.toast) ? window.JASite.toast(m) : alert(m);
  const copy = (v, msg) => (navigator.clipboard ? navigator.clipboard.writeText(v) : Promise.reject()).then(() => toast(msg)).catch(() => toast(v));

  /* ---------- 위챗 창 ---------- */
  let wx = null;
  function openWeChat(){
    if (!wx){
      wx = document.createElement("dialog"); wx.className = "jb-wx";
      wx.innerHTML = `<div class="in"><h3>${W.title}</h3>
        <img src="${esc(QR)}" alt="WeChat QR code">
        <div class="idrow"><span>${W.id}</span><strong>${WECHAT_ID}</strong></div>
        <p>${W.how}</p>
        <div class="bt"><button type="button" class="go">${W.copy}</button><button type="button" class="cl">${W.close}</button></div></div>`;
      document.body.appendChild(wx);
      wx.querySelector(".go").addEventListener("click", () => copy(WECHAT_ID, W.copied));
      wx.querySelector(".cl").addEventListener("click", () => wx.close());
      wx.addEventListener("click", e => { if (e.target === wx) wx.close(); });
    }
    wx.showModal();
  }
  window.JAWeChat = { open: openWeChat };
  document.addEventListener("click", e => { const b = e.target.closest("[data-wechat]"); if (b){ e.preventDefault(); openWeChat(); } });

  /* ---------- 챗봇 ---------- */
  const fab = document.createElement("button");
  fab.type = "button"; fab.className = "jb-fab"; fab.setAttribute("aria-haspopup", "dialog");
  fab.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.4 1.3 4.6 3.4 6.1L4.6 21l4.3-2.4c1 .3 2 .4 3.1.4 5.5 0 10-3.6 10-8S17.5 3 12 3zm-4 9.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm4 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm4 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z"/></svg><span>${S.fab}</span>`;
  const panel = document.createElement("section");
  panel.className = "jb-panel"; panel.hidden = true; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", S.title);
  panel.innerHTML = `<div class="jb-head"><div><b>${S.title}</b><small>${S.sub}</small></div><button type="button" class="jb-x" aria-label="${W.close}">×</button></div><div class="jb-log" aria-live="polite"></div>`;
  document.body.append(fab, panel);
  const log = panel.querySelector(".jb-log");
  let started = false;

  const scroll = () => { log.scrollTop = log.scrollHeight; };
  const bot = html => { const d = document.createElement("div"); d.className = "jb-msg jb-bot"; d.innerHTML = html; log.appendChild(d); return d; };
  const me = text => { const d = document.createElement("div"); d.className = "jb-msg jb-me"; d.textContent = text; log.appendChild(d); };
  function chips(list){
    const box = document.createElement("div"); box.className = "jb-chips";
    list.forEach(c => {
      const el = document.createElement(c.href ? "a" : "button");
      el.className = "jb-chip" + (c.cls ? " " + c.cls : "");
      el.textContent = c.label;
      if (c.href){ el.href = c.href; if (/^https?:/.test(c.href)){ el.target = "_blank"; el.rel = "noopener"; } }
      else { el.type = "button"; el.addEventListener("click", () => { if (c.echo !== false) me(c.label); c.go(); scroll(); }); }
      box.appendChild(el);
    });
    log.appendChild(box); scroll();
  }
  const tail = () => chips([{ label: S.back, cls: "solid", echo: false, go: menu }]);

  function menu(){
    const order = LANG === "ko" ? ["find","hours","loc","visit","docs","fee","contact"] : ["find","hours","loc","guide","docs","fee","contact"];
    chips(order.map(k => ({ label: S.q[k], go: () => A[k]() })));
  }
  function contactChips(){
    const list = [];
    if (LANG !== "ko") list.push({ label: S.wechat, cls: "wx", echo: false, go: openWeChat });
    list.push({ label: S.call02, href: "tel:0222650303" }, { label: S.call010, href: "tel:01026120303" }, { label: S.sms, href: "sms:01026120303" }, { label: S.kakao, cls: "kk", href: KAKAO });
    chips(list);
  }
  const A = {
    find(){
      const site = window.JASite; const list = (site && site.list || []).filter(l => l.status !== "거래완료");
      const cats = [...new Set(list.map(l => l.cat))];
      bot(S.pickCat);
      chips(cats.map(c => ({ label: site.catName(c), go: () => pickDeal(c) })));
      function pickDeal(cat){
        const inCat = list.filter(l => l.cat === cat);
        const deals = [...new Set(inCat.map(l => l.deal))];
        if (deals.length < 2) return show(inCat, cat);
        bot(S.pickDeal);
        const dealName = d => (window.I18N && window.I18N[LANG] && window.I18N[LANG].t["deal:" + d]) || d;
        chips([...deals.map(d => ({ label: dealName(d), go: () => show(inCat.filter(l => l.deal === d), cat) })), { label: S.any, go: () => show(inCat, cat) }]);
      }
      function show(items, cat){
        if (!items.length){ bot(S.none); contactChips(); return tail(); }
        bot(S.found(items.length));
        const box = listCards(items.slice(0, 6), l => { if (matchMedia("(max-width:860px)").matches) close(); site.open(l.id); });
        log.appendChild(box);
        const extra = [];
        if (items.length > 6) extra.push({ label: S.more(items.length), go: () => { close(); const f = document.querySelector(`#filters [data-f="${CSS.escape(cat)}"]`); if (f) f.click(); document.getElementById("listings").scrollIntoView({ behavior: "smooth" }); } });
        extra.push({ label: S.q.fee, go: A.fee }, { label: S.q.contact, go: A.contact });
        chips(extra); tail();
      }
    },
    hours(){
      const st = document.getElementById("todayState"), sb = document.getElementById("todaySub");
      const now = st ? `<br><br><b>${S.today}</b>: ${esc(st.textContent.trim())}${sb && sb.textContent ? ` · ${esc(sb.textContent.trim())}` : ""}` : "";
      bot(S.hours + now); tail();
    },
    loc(){
      bot(S.loc);
      const maps = [{ label: S.naver, href: MAP_NAVER }, { label: S.kakaomap, href: MAP_KAKAO }];
      if (LANG !== "ko") maps.unshift({ label: S.google, href: MAP_GOOGLE });
      chips(maps); tail();
    },
    visit(){ bot(S.visit); contactChips(); tail(); },
    guide(){ bot(S.guide); tail(); },
    docs(){ bot(S.docs); tail(); },
    fee(){
      const site = window.JASite; const list = (site && site.list || []).filter(l => l.status !== "거래완료");
      bot(S.fee); bot(S.pickFeeCat);
      const cats = [...new Set(list.map(l => l.cat))];
      chips(cats.map(c => ({ label: site.catName(c), go: () => {
        bot(S.pickFee);
        log.appendChild(listCards(list.filter(l => l.cat === c), l => { me(l.title); showFee(l); }));
        scroll(); tail();
      } })));
    },
    contact(){ bot(S.contact); contactChips(); tail(); }
  };

  function listCards(items, onPick){
    const site = window.JASite;
    const box = document.createElement("div"); box.className = "jb-cards";
    items.forEach(l => {
      const b = document.createElement("button"); b.type = "button"; b.className = "jb-card";
      b.innerHTML = `${l.photos && l.photos[0] ? `<img src="${esc(l.photos[0])}" alt="" loading="lazy">` : `<i class="noimg"></i>`}<div><b>${esc(l.title)}</b><span>${esc(site.priceText(l))}</span><small>${esc(l.loc)}</small></div>`;
      b.addEventListener("click", () => onPick(l));
      box.appendChild(b);
    });
    return box;
  }
  function showFee(l){
    bot(feeHtml(l));
    chips([{ label: S.feeOther, go: A.fee }, { label: S.q.contact, go: A.contact }]);
    tail();
  }
  /* 매물 상세 창의 '중개보수 계산' 버튼에서 호출 */
  window.JAChat = {
    fee(id){ const l = (window.JASite && window.JASite.list || []).find(x => x.id === id); if (!l) return; open(); me(`${S.q.fee}: ${l.title}`); showFee(l); },
    /* 매물 창 안에 바로 펼쳐 보여줄 계산 결과 (제목·가격 줄 없이) */
    feeHtml(id){ const l = (window.JASite && window.JASite.list || []).find(x => x.id === id); return l ? feeHtml(l, true) : ""; }
  };

  function open(){
    panel.hidden = false; fab.hidden = true;
    if (!started){ started = true; bot(S.hello); const n = document.createElement("div"); n.className = "jb-note"; n.textContent = S.note; log.appendChild(n); menu(); }
    panel.querySelector(".jb-x").focus();
  }
  function close(){ panel.hidden = true; fab.hidden = false; }
  fab.addEventListener("click", open);
  panel.querySelector(".jb-x").addEventListener("click", close);
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden && !document.querySelector("dialog[open]")) close(); });
})();
