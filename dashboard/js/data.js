const DASHBOARD_DATA = {
  kpiTargets: { 1: 100, 2: 100, 3: 96, 4: 80, 5: 30 },
  ktasLabels: { 1: '소생', 2: '긴급', 3: '응급', 4: '준응급', 5: '비응급' },
  ktasColors: {
    1: '#E74C3C', 2: '#F39C12', 3: '#2E6EB5', 4: '#5BA0D9', 5: '#95A5A6'
  },
  admissionSets: {
    basicLab: { label: '응급실 기본 lab', cost: 158570, items: 48 },
    surgery: { label: '기본lab + 입원추가(수술)', cost: 347550, items: 56 },
    elderlySurgery: { label: '기본lab + 입원추가(고령+수술)', cost: 514830, items: 69 },
    mokdongBasic: { label: '목동 기본 lab', cost: 205020, items: 52 }
  },

  daejeon: {
    name: '대전선병원',
    period: '2025.07 ~ 2025.12',
    summary: {
      totalVisits: 5512,
      totalPatients: 5023,
      totalRevenue: 965837380,
      avgRevenuePerVisit: 175228,
      admissionRate: 45.7,
      basicLabRate: 94.0,
      emDoctorCount: 7,
      totalOrders: 239432,
      avgStayHours: 2.5
    },
    ktas: {
      1: { visits: 16, ratio: 0.3, labPrescribed: 14, currentLabRate: 87.5, admissionRate: 37.5, avgRevenue: 258150, medianRevenue: 259940, totalRevenue: 4130392, avgOrders: 46.9, admissionCount: 6 },
      2: { visits: 313, ratio: 5.7, labPrescribed: 298, currentLabRate: 96.4, admissionRate: 79.6, avgRevenue: 258194, medianRevenue: 258692, totalRevenue: 80814617, avgOrders: 52.0, admissionCount: 249 },
      3: { visits: 4460, ratio: 80.9, labPrescribed: 4012, currentLabRate: 95.3, admissionRate: 48.5, avgRevenue: 176265, medianRevenue: 168718, totalRevenue: 786142825, avgOrders: 44.0, admissionCount: 2164 },
      4: { visits: 698, ratio: 12.7, labPrescribed: 545, currentLabRate: 85.6, admissionRate: 13.6, avgRevenue: 132528, medianRevenue: 129160, totalRevenue: 92504641, avgOrders: 36.5, admissionCount: 95 },
      5: { visits: 24, ratio: 0.4, labPrescribed: 12, currentLabRate: 57.1, admissionRate: 12.5, avgRevenue: 92704, medianRevenue: 83705, totalRevenue: 2224905, avgOrders: 25.2, admissionCount: 3 }
    },
    // EM-only revenue data for scenarios
    emKtas: {
      1: { visits: 16, labPrescribed: 14, currentLabRate: 87.5 },
      2: { visits: 309, labPrescribed: 298, currentLabRate: 96.4 },
      3: { visits: 4211, labPrescribed: 4012, currentLabRate: 95.3 },
      4: { visits: 637, labPrescribed: 545, currentLabRate: 85.6 },
      5: { visits: 21, labPrescribed: 12, currentLabRate: 57.1 }
    },
    revenue: {
      1: { outpatient: { current: 1583979, kpi: 1585700 }, admission: { current: 1843004, kpi: 3088980 } },
      2: { outpatient: { current: 14250000, kpi: 10148480 }, admission: { current: 56811613, kpi: 128192670 } },
      3: { outpatient: { current: 311422380, kpi: 349513651 }, admission: { current: 379215853, kpi: 1114092120 } },
      4: { outpatient: { current: 66919280, kpi: 76494168 }, admission: { current: 13869035, kpi: 48908850 } },
      5: { outpatient: { current: 1842110, kpi: 1141704 }, admission: { current: 0, kpi: 0 } }
    },
    revenueTotals: {
      outpatient: { current: 396017749, kpi: 438883703, diff: -42865954, rate: -9.8 },
      admission: { current: 451739505, kpi: 1294282620, diff: -842543115, rate: -65.1 }
    },
    doctors: [
      { name: '전가람', patients: 902, avgOrders: 46, avgRevenue: 193319, medianRevenue: 199512, basicLabAvg: 40.6, ktasRates: { 1: 87.5, 2: 97.3, 3: 96.3, 4: 92.1, 5: 85.6 }, totalRate: 95.8 },
      { name: '정용택', patients: 736, avgOrders: 45, avgRevenue: 181462, medianRevenue: 176969, basicLabAvg: 39.1, ktasRates: { 1: 87.5, 2: 97.3, 3: 96.0, 4: 89.0, 5: 85.6 }, totalRate: 95.1 },
      { name: '홍승우', patients: 985, avgOrders: 44, avgRevenue: 170487, medianRevenue: 151734, basicLabAvg: 39.5, ktasRates: { 1: 87.5, 2: 97.3, 3: 95.4, 4: 80.6, 5: 51.4 }, totalRate: 93.5 },
      { name: '양중일', patients: 698, avgOrders: 42, avgRevenue: 167923, medianRevenue: 155147, basicLabAvg: 37.6, ktasRates: { 1: 87.5, 2: 95.1, 3: 95.4, 4: 86.8, 5: 85.6 }, totalRate: 94.2 },
      { name: '정원익', patients: 802, avgOrders: 42, avgRevenue: 165436, medianRevenue: 154594, basicLabAvg: 36.9, ktasRates: { 1: null, 2: 95.0, 3: 95.3, 4: 90.6, 5: 85.6 }, totalRate: 94.7 },
      { name: '도현수', patients: 607, avgOrders: 41, avgRevenue: 167875, medianRevenue: 167739, basicLabAvg: 36.3, ktasRates: { 1: null, 2: 97.3, 3: 94.4, 4: 72.7, 5: 17.1 }, totalRate: 90.8 },
      { name: '주기혁', patients: 546, avgOrders: 40, avgRevenue: 165960, medianRevenue: 168718, basicLabAvg: 35.8, ktasRates: { 1: 87.5, 2: 95.2, 3: 93.7, 4: 88.3, 5: 42.8 }, totalRate: 93.2 }
    ],
    additionalTests: [
      { code: 'KL1102', name: '심전도병실왕진', count: 3361, patients: 3026, category: '심장' },
      { code: 'KA1514', name: '경피적혈액산소포화도측정(1일당)', count: 1733, patients: 1657, category: '모니터링' },
      { code: 'L71176', name: 'Pro-Brain Natriuretic Peptide', count: 1082, patients: 1019, category: '심장' },
      { code: 'L7500', name: '프리셉신(Presepsin)', count: 1056, patients: 1011, category: '감염' },
      { code: 'L4601', name: 'Influenza A&B Ag/H1N1', count: 954, patients: 917, category: '감염' },
      { code: 'L80436', name: 'COVID-19 Ag Test', count: 928, patients: 894, category: '감염' },
      { code: 'L0121102', name: '일반신경학적검사', count: 887, patients: 863, category: '신경' },
      { code: 'L221811', name: 'FDP Test(정량)', count: 840, patients: 807, category: '응고' },
      { code: 'L2265', name: 'D-DIMER ASSAY(정량)', count: 840, patients: 807, category: '응고' },
      { code: 'L9314', name: '심전도침상감시(1일당)', count: 838, patients: 802, category: '심장' }
    ],
    lowFreqTests: [
      { code: 'L4231', name: 'COVID-19 & RSV & Influenza A/B', count: 46, unitPrice: 66960, total: 3450000 },
      { code: 'L7606', name: 'TSH(나-336)', count: 30, unitPrice: 15670, total: 463420 },
      { code: 'L7624', name: 'Free T4(나-334)', count: 30, unitPrice: 11270, total: 333500 },
      { code: 'L7605', name: '트리요도타이로닌(T3)', count: 30, unitPrice: 11270, total: 333500 },
      { code: 'L5159', name: 'PCT(procalcitonin)', count: 27, unitPrice: 30500, total: 839970 },
      { code: 'L5155', name: 'A형간염항체(Total)', count: 25, unitPrice: 15720, total: 426720 },
      { code: 'L5154', name: 'A형간염항체(IgM)', count: 25, unitPrice: 15720, total: 426720 },
      { code: 'L3535', name: 'PSA', count: 24, unitPrice: 13800, total: 337920 },
      { code: 'L7238', name: 'Hantaan virus Ab', count: 11, unitPrice: 15060, total: 185900 },
      { code: 'L71476', name: 'O. tsutsugamushi Ab', count: 11, unitPrice: 14450, total: 195910 },
      { code: 'L71474', name: 'Leptospira Ab.(MAT)', count: 11, unitPrice: 13520, total: 183150 },
      { code: 'L3069', name: 'MAGNESIUM', count: 9, unitPrice: 1660, total: 15300 }
    ],
    roomi: {
      summary: `<p>대전선병원 응급실은 <strong>기본검사 처방율 94.0%</strong>로, 전국 응급실 평균 대비 매우 높은 수준을 유지하고 있다. 이는 표준화된 오더세트 운영과 EM 의사 7명의 균일한 처방 패턴(환자당 40~46건)에 기인한다.</p>
<p>그러나 이 높은 처방율은 <strong>양날의 검</strong>이다. 수익 확보에는 긍정적이나, KTAS 등급별 차별화 부재로 인한 HIRA 적정성 심사 리스크가 상존한다.</p>
<p>KTAS 3등급이 전체 수익의 <strong>81.5%</strong>를 차지하는 절대적 핵심 구간이며, KTAS 5등급(57.1%)은 KPI 목표(30%) 대비 과도하게 높아 과잉처방 경고 대상이다.</p>
<p><strong>핵심 판단:</strong> 기본검사 처방율은 이미 천정에 가깝다. 수익 향상의 본질은 <em>입원환자 추가검사 패키지 표준화</em>에 있다.</p>`,
      recommendations: [
        { priority: 1, title: 'KTAS 3 입원환자 추가검사 표준화', effect: '+7.35억원/6개월', difficulty: '중', risk: '낮음', desc: '입원환자 2,164건 × 514,830원 대상 체계적 검사 패키지 적용. 전체 수익 향상의 핵심 과제.' },
        { priority: 2, title: 'KTAS 2 입원환자 추가검사 표준화', effect: '+0.71억원/6개월', difficulty: '중', risk: '낮음', desc: '입원율 79.6%의 중증환자 대상. 입원 전환 시 추가검사 패키지 적용.' },
        { priority: 3, title: 'KTAS 4 경량 오더세트 도입', effect: '삭감방지', difficulty: '중', risk: '리스크 감소', desc: 'CBC, 전해질, 기본 생화학(15~20개)으로 구성된 축소 세트 도입.' },
        { priority: 4, title: 'KTAS 5 기본lab 자동오더 해제', effect: '삭감방지', difficulty: '하', risk: '리스크 감소', desc: '비응급 환자 57.1% → 30% 목표. EMR 경고 팝업 도입.' },
        { priority: 5, title: '입원 예측 환자 사전 추가검사', effect: '+α', difficulty: '상', risk: '낮음', desc: 'KTAS 2 입원율 79.6% 활용, 사전적 입원추가 검사로 중복 채혈 감소.' }
      ],
      roadmap: {
        phase1: { title: '즉시 실행 (1개월 내)', items: ['KTAS 5 기본lab 자동오더 해제 및 처방 경고 팝업 도입', 'KTAS 3 입원환자 대상 입원시 추가검사 세트 오더세트 구축', '의사별 KTAS 등급별 처방율 월간 모니터링 대시보드 구축'] },
        phase2: { title: '단기 실행 (1~3개월)', items: ['KTAS 4 경량 오더세트 설계 및 파일럿 운영', 'KTAS 2 입원 예측 환자 사전 추가검사 프로토콜 수립', '의사 간 처방 편차 축소를 위한 내부 가이드라인 배포'] },
        phase3: { title: '중기 실행 (3~6개월)', items: ['파일럿 결과 기반 KTAS 4 경량 오더세트 전면 적용', 'KPI 달성률 기반 의사별 피드백 시스템 운영', 'HIRA 적정성 평가 대비 자체 사전심사 체계 구축'] }
      },
      risks: [
        { item: 'KTAS 5 과잉검사', level: '높음', current: '57.1% (KPI 30%)', amount: '~920만원' },
        { item: 'KTAS 4 과잉검사', level: '낮음', current: '85.6% (KPI 80%)', amount: '~8,079만원' },
        { item: 'KTAS 3 일괄처방', level: '낮음', current: '95.3% (KPI 96%)', amount: '-' },
        { item: '의사 간 편차', level: '낮음', current: '최대 16.8%', amount: '-' }
      ],
      benchmark: '도현수 (KTAS 4: 72.7%, KTAS 5: 17.1%)'
    }
  },

  yuseong: {
    name: '유성선병원',
    period: '2025.07 ~ 2025.12',
    summary: {
      totalVisits: 10253,
      totalPatients: 9394,
      totalRevenue: 1530942897,
      avgRevenuePerVisit: 149317,
      admissionRate: 29.5,
      basicLabRate: 91.6,
      emDoctorCount: 10,
      totalOrders: 356155,
      avgStayHours: 1.9
    },
    ktas: {
      1: { visits: 90, ratio: 0.88, labPrescribed: 80, currentLabRate: 89.9, admissionRate: 51.1, avgRevenue: 339345, medianRevenue: 330470, totalRevenue: 30541091, avgOrders: 50.5, admissionCount: 46 },
      2: { visits: 601, ratio: 5.86, labPrescribed: 540, currentLabRate: 89.9, admissionRate: 66.6, avgRevenue: 308268, medianRevenue: 302580, totalRevenue: 185269009, avgOrders: 51.0, admissionCount: 400 },
      3: { visits: 7477, ratio: 72.92, labPrescribed: 5758, currentLabRate: 77.0, admissionRate: 33.7, avgRevenue: 152464, medianRevenue: 146541, totalRevenue: 1139973580, avgOrders: 36.7, admissionCount: 2519 },
      4: { visits: 1956, ratio: 19.08, labPrescribed: 1098, currentLabRate: 56.1, admissionRate: 2.8, avgRevenue: 84859, medianRevenue: 78600, totalRevenue: 165983299, avgOrders: 22.7, admissionCount: 55 },
      5: { visits: 129, ratio: 1.26, labPrescribed: 55, currentLabRate: 42.6, admissionRate: 0.8, avgRevenue: 71131, medianRevenue: 19300, totalRevenue: 9175918, avgOrders: 17.8, admissionCount: 1 }
    },
    emKtas: {
      1: { visits: 89, labPrescribed: 80, currentLabRate: 89.9 },
      2: { visits: 555, labPrescribed: 539, currentLabRate: 97.1 },
      3: { visits: 6132, labPrescribed: 5754, currentLabRate: 93.8 },
      4: { visits: 1362, labPrescribed: 1098, currentLabRate: 80.6 },
      5: { visits: 76, labPrescribed: 55, currentLabRate: 72.4 }
    },
    revenue: {
      1: { outpatient: { current: 5714500, kpi: 6977080 }, admission: { current: 19844740, kpi: 23682180 } },
      2: { outpatient: { current: 29590015, kpi: 31872570 }, admission: { current: 131338292, kpi: 205932000 } },
      3: { outpatient: { current: 457073165, kpi: 754742458 }, admission: { current: 502058373, kpi: 1296856770 } },
      4: { outpatient: { current: 133360550, kpi: 241153256 }, admission: { current: 9908860, kpi: 28315650 } },
      5: { outpatient: { current: 7509740, kpi: 6136659 }, admission: { current: 0, kpi: 0 } }
    },
    revenueTotals: {
      outpatient: { current: 633247970, kpi: 1040882023, diff: -407634053, rate: -39.2 },
      admission: { current: 663150265, kpi: 1554786600, diff: -891636335, rate: -57.4 }
    },
    doctors: [
      { name: '김건동', patients: 965, avgOrders: 43, avgRevenue: 173030, medianRevenue: 152164, basicLabAvg: 37.6, ktasRates: { 1: 89.9, 2: 99.1, 3: 94.2, 4: 83.3, 5: 63.5 }, totalRate: 92.5 },
      { name: '류승우', patients: 919, avgOrders: 43, avgRevenue: 197001, medianRevenue: 172544, basicLabAvg: 38.5, ktasRates: { 1: 89.9, 2: 99.1, 3: 93.5, 4: 82.3, 5: 84.7 }, totalRate: 91.8 },
      { name: '송경혁', patients: 914, avgOrders: 40, avgRevenue: 163687, medianRevenue: 136640, basicLabAvg: 35.8, ktasRates: { 1: 89.9, 2: 97.5, 3: 94.5, 4: 83.5, 5: 84.7 }, totalRate: 92.5 },
      { name: '이승한', patients: 903, avgOrders: 40, avgRevenue: 155154, medianRevenue: 127894, basicLabAvg: 35.9, ktasRates: { 1: 89.9, 2: 94.4, 3: 94.4, 4: 81.4, 5: 84.7 }, totalRate: 92.2 },
      { name: '안경찬', patients: 892, avgOrders: 39, avgRevenue: 156979, medianRevenue: 140036, basicLabAvg: 36.1, ktasRates: { 1: 89.9, 2: 95.7, 3: 93.7, 4: 76.7, 5: 77.7 }, totalRate: 91.2 },
      { name: '민동규', patients: 868, avgOrders: 40, avgRevenue: 148564, medianRevenue: 130754, basicLabAvg: 36.9, ktasRates: { 1: 89.9, 2: 99.1, 3: 94.1, 4: 80.4, 5: 65.9 }, totalRate: 91.4 },
      { name: '최윤혁', patients: 863, avgOrders: 40, avgRevenue: 159735, medianRevenue: 132214, basicLabAvg: 36.1, ktasRates: { 1: 89.9, 2: 96.1, 3: 92.7, 4: 83.8, 5: 84.7 }, totalRate: 91.3 },
      { name: '양의석', patients: 791, avgOrders: 43, avgRevenue: 174024, medianRevenue: 158064, basicLabAvg: 39.6, ktasRates: { 1: 89.9, 2: 94.9, 3: 93.8, 4: 82.9, 5: 76.2 }, totalRate: 91.7 },
      { name: '박현욱', patients: 736, avgOrders: 41, avgRevenue: 170502, medianRevenue: 155128, basicLabAvg: 38.0, ktasRates: { 1: 89.9, 2: 97.1, 3: 93.8, 4: 72.8, 5: 36.3 }, totalRate: 90.7 },
      { name: '한규홍', patients: 576, avgOrders: 40, avgRevenue: 150444, medianRevenue: 165934, basicLabAvg: 35.4, ktasRates: { 1: null, 2: 99.1, 3: 93.6, 4: 73.2, 5: 63.5 }, totalRate: 90.1 }
    ],
    additionalTests: [
      { code: 'KL1102', name: '심전도병실왕진', count: 5333, patients: 5227, category: '심장' },
      { code: 'L5117', name: 'Anti-HIV(정밀)', count: 3206, patients: 3206, category: '감염' },
      { code: 'L5112', name: 'HBs Ab(Titer)', count: 3205, patients: 3205, category: '감염' },
      { code: 'L34131', name: '매독반응검사 RPR정량', count: 3202, patients: 3202, category: '감염' },
      { code: 'L5118', name: 'C형간염항체', count: 3200, patients: 3200, category: '감염' },
      { code: 'L5111', name: 'HBs Ag(coi Titer)', count: 3199, patients: 3199, category: '감염' },
      { code: 'L41061', name: '미생물배양및동정', count: 2200, patients: 893, category: '감염' }
    ],
    lowFreqTests: [
      { code: 'L7668', name: 'Anti-HBc IgM', count: 47, unitPrice: 14420, total: 691370 },
      { code: 'L5155', name: 'Anti HAV Total(IgG)', count: 39, unitPrice: 15720, total: 625170 },
      { code: 'L71474', name: 'Leptospira ab[MAT]', count: 32, unitPrice: 13520, total: 532800 },
      { code: 'L7238', name: 'Hantaan Ab', count: 32, unitPrice: 15060, total: 540800 },
      { code: 'L71476', name: 'O. tsutsugamushi Ab(IFA)', count: 31, unitPrice: 14450, total: 552110 },
      { code: 'L3052', name: 'TIBC', count: 30, unitPrice: 2580, total: 78900 },
      { code: 'L76201', name: 'Ferritin', count: 19, unitPrice: 9570, total: 185440 },
      { code: 'L3051', name: 'IRON', count: 19, unitPrice: 2580, total: 49970 },
      { code: 'L2112', name: '혈구형태(BLOOD CELL MORPHOLOGY)', count: 15, unitPrice: 9450, total: 158700 },
      { code: 'L20111', name: '망상적혈구수(도말법)', count: 14, unitPrice: 1200, total: 17080 },
      { code: 'L80460', name: 'CO-Oximeter', count: 7, unitPrice: 12490, total: 89180 },
      { code: 'L7500', name: 'Presepsin', count: 1, unitPrice: 46080, total: 47000 }
    ],
    roomi: {
      summary: `<p>유성선병원 응급실은 6개월간 <strong>10,253건의 내원, 총 15.3억원의 검사 수익</strong>을 기록하며, 대전선병원(5,512건, 9.7억원) 대비 약 1.86배의 규모를 보이고 있다.</p>
<p>그러나 규모가 큰 만큼 <strong>리스크도 비례하여 크다.</strong> 특히 KTAS 5등급 처방율 72.4%(KPI 30%), KTAS 4등급 처방율 80.6%(KPI 80%)는 대전선병원보다 과잉처방 수준이 심각하다.</p>
<p>내원건당 평균금액(149,317원)이 대전(175,228원)보다 <strong>14.8% 낮아</strong>, 환자수 1.86배인데 수익은 1.59배에 그치고 있다. 건당 수익 효율성 개선이 핵심 과제이다.</p>
<p><strong>핵심 판단:</strong> 유성은 '양(量)의 성장'에서 '질(質)의 성장'으로 전환해야 한다. 내원건수는 충분하다. <em>건당 수익을 대전 수준으로 끌어올리는 것</em>이 핵심이다.</p>`,
      recommendations: [
        { priority: 1, title: 'KTAS 3 입원환자 추가검사 표준화', effect: '+7.95억원/6개월', difficulty: '중', risk: '낮음', desc: 'KTAS 3 입원환자 2,519건 × 514,830원 대상. 전체 수익 향상의 최대 기여 항목.' },
        { priority: 2, title: 'KTAS 5 과잉처방 즉각 시정', effect: '삭감방지 (~750만원)', difficulty: '하', risk: '리스크 대폭 감소', desc: '72.4% → 30% 목표. 4명의 의사가 100% 처방 중으로 즉각 교정 필요.' },
        { priority: 3, title: 'KTAS 3 외래 처방율 보완', effect: '삭감방지 (~2,865만원)', difficulty: '중', risk: '리스크 감소', desc: '93.8%→96%. 외래환자 기본lab 처방 누락 방지.' },
        { priority: 4, title: '의사 간 처방 편차 축소', effect: '건당 수익 +5~10%', difficulty: '상', risk: '리스크 감소', desc: '편차 32.6% → 20% 이내 축소 목표. 류승우(197,001원) vs 민동규(148,564원).' },
        { priority: 5, title: '내원건당 수익 제고 (대전 벤치마크)', effect: '+2.6억원/6개월', difficulty: '상', risk: '중간', desc: '149,317원 → 175,228원(대전 수준) 달성 시 10,253건 × 25,911원 추가.' }
      ],
      roadmap: {
        phase1: { title: '즉시 실행 (1개월 내)', items: ['KTAS 5 기본lab 자동오더 해제 및 처방 사유 입력 의무화', 'KTAS 5 처방율 100% 의사 4명 대상 개별 면담', 'KTAS 3 입원환자 대상 입원시 추가검사 세트 오더세트 구축'] },
        phase2: { title: '단기 실행 (1~3개월)', items: ['KTAS 4 경량 오더세트 설계 (대전 도현수 의사 패턴 벤치마크)', '의사별 KTAS 등급별 처방율 월간 대시보드 구축', 'KTAS 분류 정확도 내부 감사 실시'] },
        phase3: { title: '중기 실행 (3~6개월)', items: ['KTAS 4 경량 오더세트 전면 적용', '대전-유성 간 처방 패턴 교차 벤치마킹 정례화', '의사 간 편차 32.6% → 20% 이내로 축소'] }
      },
      risks: [
        { item: 'KTAS 5 과잉검사', level: '매우 높음', current: '72.4% (KPI 30%)', amount: '~750만원' },
        { item: 'KTAS 4 과잉검사', level: '낮음', current: '80.6% (KPI 80%)', amount: '-' },
        { item: 'KTAS 3 일괄처방', level: '낮음', current: '93.8% (KPI 96%)', amount: '-' },
        { item: '의사 간 편차', level: '중간', current: '최대 32.6%', amount: '불확실' }
      ],
      benchmark: '박현욱 (KTAS 4: 72.8%, KTAS 5: 36.3%)'
    }
  }
};
