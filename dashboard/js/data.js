const DASHBOARD_DATA = {
  // KPI 3차 변경: 병원별 개별 KPI 적용 (kpiTargets는 레거시, 각 병원의 kpi 필드 참조)
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
    kpi: { 1: 100, 2: 95, 3: 80, 4: 50, 5: 15 },
    price: { out: 144040, adm: 333020 },
    summary: {
      totalVisits: 8794,
      totalPatients: 5023,
      totalRevenue: 965817380,
      avgRevenuePerVisit: 109826,
      admissionRate: 46.3,
      basicLabRate: 57.1,
      emDoctorCount: 7,
      totalOrders: 239432,
      avgStayHours: 2.5
    },
    ktas: {
      1: { visits: 16, ratio: 0.2, labPrescribed: 16, currentLabRate: 100.0, admissionRate: 37.5, avgRevenue: 258150, medianRevenue: 259940, totalRevenue: 4130392, avgOrders: 46.9, admissionCount: 6 },
      2: { visits: 321, ratio: 3.98, labPrescribed: 280, currentLabRate: 87.2, admissionRate: 76.6, avgRevenue: 251759, medianRevenue: 258756, totalRevenue: 80814617, avgOrders: 52.5, admissionCount: 246 },
      3: { visits: 5547, ratio: 68.74, labPrescribed: 4059, currentLabRate: 73.2, admissionRate: 36.3, avgRevenue: 141724, medianRevenue: 171597, totalRevenue: 786142825, avgOrders: 47.8, admissionCount: 2015 },
      4: { visits: 1993, ratio: 24.7, labPrescribed: 645, currentLabRate: 32.4, admissionRate: 4.6, avgRevenue: 46415, medianRevenue: 130636, totalRevenue: 92504641, avgOrders: 37.4, admissionCount: 92 },
      5: { visits: 192, ratio: 2.38, labPrescribed: 22, currentLabRate: 11.5, admissionRate: 1.6, avgRevenue: 11588, medianRevenue: 83705, totalRevenue: 2224905, avgOrders: 25.2, admissionCount: 3 }
    },
    // EM-only revenue data for scenarios
    emKtas: {
      1: { visits: 16, labPrescribed: 16, currentLabRate: 100.0 },
      2: { visits: 321, labPrescribed: 280, currentLabRate: 87.2 },
      3: { visits: 5547, labPrescribed: 4059, currentLabRate: 73.2 },
      4: { visits: 1993, labPrescribed: 645, currentLabRate: 32.4 },
      5: { visits: 192, labPrescribed: 22, currentLabRate: 11.5 }
    },
    revenue: {
      1: { outpatient: { current: 2029057, kpi: 1440400 }, admission: { current: 2101335, kpi: 1998120 } },
      2: { outpatient: { current: 16284376, kpi: 10262850 }, admission: { current: 64530241, kpi: 81922920 } },
      3: { outpatient: { current: 357601086, kpi: 406999424 }, admission: { current: 428541739, kpi: 671035300 } },
      4: { outpatient: { current: 77420185, kpi: 136910020 }, admission: { current: 15084456, kpi: 30637840 } },
      5: { outpatient: { current: 1661070, kpi: 4083534 }, admission: { current: 563835, kpi: 0 } }
    },
    revenueTotals: {
      outpatient: { current: 454995774, kpi: 559696228, diff: -104700454, rate: -18.7 },
      admission: { current: 510821606, kpi: 785594180, diff: -274772574, rate: -35.0 }
    },
    doctors: [
      { name: '홍승우', patients: 984, avgOrders: 44, avgRevenue: 170640, medianRevenue: 151734, basicLabAvg: 39.5, ktasRates: { 1: 100.0, 2: 83.7, 3: 71.0, 4: 29.7, 5: 11.2 }, totalRate: 60.0 },
      { name: '전가람', patients: 902, avgOrders: 46, avgRevenue: 193319, medianRevenue: 199512, basicLabAvg: 40.6, ktasRates: { 1: 75.4, 2: 93.9, 3: 71.2, 4: 28.7, 5: 12.6 }, totalRate: 60.2 },
      { name: '정원익', patients: 802, avgOrders: 42, avgRevenue: 165436, medianRevenue: 154594, basicLabAvg: 36.9, ktasRates: { 1: null, 2: 78.4, 3: 72.6, 4: 28.4, 5: 7.3 }, totalRate: 60.4 },
      { name: '정용택', patients: 736, avgOrders: 45, avgRevenue: 181462, medianRevenue: 176969, basicLabAvg: 39.1, ktasRates: { 1: 100.0, 2: 82.8, 3: 70.8, 4: 31.9, 5: 3.8 }, totalRate: 60.2 },
      { name: '양중일', patients: 698, avgOrders: 42, avgRevenue: 167923, medianRevenue: 155147, basicLabAvg: 37.6, ktasRates: { 1: 50.6, 2: 88.3, 3: 69.7, 4: 34.5, 5: 8.4 }, totalRate: 60.2 },
      { name: '도현수', patients: 607, avgOrders: 41, avgRevenue: 167875, medianRevenue: 167739, basicLabAvg: 36.3, ktasRates: { 1: null, 2: 90.8, 3: 67.8, 4: 38.7, 5: 19.6 }, totalRate: 60.4 },
      { name: '주기혁', patients: 546, avgOrders: 40, avgRevenue: 165960, medianRevenue: 168718, basicLabAvg: 35.8, ktasRates: { 1: 100.0, 2: 100.0, 3: 72.8, 4: 21.4, 5: 10.8 }, totalRate: 59.8 }
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
      summary: `<p>대전선병원 응급실은 전체 내원환자수 기준 <strong>기본검사 처방율 57.1%</strong>로, 6개월간 총 8,794건의 내원 중 혈액검사를 받은 환자는 5,023명이다.</p>
<p>KTAS 등급별로 KTAS 1(100%)만 목표를 달성하고 있으며, KTAS 2(87.2%, 목표 95%), <strong>KTAS 3(73.2%, 목표 80%)</strong>, <strong>KTAS 4(32.4%, 목표 50%)</strong> 모두 KPI에 미달하고 있다. KTAS 5(11.5%)는 목표(15%) 이하로 적정 수준이다.</p>
<p>KTAS 3등급이 전체 수익의 <strong>81.4%</strong>를 차지하는 핵심 구간이나, 처방율 73.2%로 개선 여지가 크다. 외래 기준 1.0억원, 입원 기준 2.7억원의 개선 여력이 있다.</p>
<p><strong>핵심 판단:</strong> KTAS 3·4 처방율 향상이 최우선 과제이며, <em>입원환자 추가검사 패키지(333,020원) 표준화</em>를 병행해야 한다.</p>`,
      recommendations: [
        { priority: 1, title: 'KTAS 3 외래 처방율 향상', effect: '+0.5억원', difficulty: '중', risk: '낮음', desc: '73.2%→80%. 외래환자 기본lab(144,040원) 처방 누락 방지.' },
        { priority: 2, title: 'KTAS 3 입원환자 추가검사 표준화', effect: '+2.4억원', difficulty: '중', risk: '낮음', desc: '입원환자 2,015건 × 333,020원. 수익 향상 핵심.' },
        { priority: 3, title: 'KTAS 4 처방율 향상', effect: '+0.6억원', difficulty: '중', risk: '낮음', desc: '32.4%→50%. 1,993건 대규모 환자군 처방율 개선.' },
        { priority: 4, title: 'KTAS 2 처방율 향상', effect: '+α', difficulty: '중', risk: '낮음', desc: '87.2%→95%. 중증환자 321건 검사 누락 방지.' },
        { priority: 5, title: '입원환자 추가검사 프로토콜 확립', effect: '+α', difficulty: '상', risk: '낮음', desc: 'KTAS 2 입원율 76.6% 활용, 입원 연계 수익 극대화.' }
      ],
      roadmap: {
        phase1: { title: '즉시 실행 (1개월 내)', items: ['KTAS 3 외래 기본lab 처방율 모니터링 시작(73.2%→76%)', 'KTAS 3 입원환자 추가검사 세트(333,020원) 구축', 'KTAS 4 처방율 개선 캠페인 시작(32.4%→40%)'] },
        phase2: { title: '단기 실행 (1~3개월)', items: ['KTAS 3 처방율 78% 달성 및 KTAS 4 45% 달성', '의사별 KTAS별 처방율 분리 모니터링', 'KTAS 2 처방율 95% 달성 방안 수립'] },
        phase3: { title: '중기 실행 (3~6개월)', items: ['KTAS 3 처방율 80% KPI 달성, KTAS 4 50% 달성', '외래/입원 이원화 KPI 전면 적용', 'KPI 기반 의사별 피드백 시스템 구축'] }
      },
      risks: [
        { item: 'KTAS 4 처방율 미달', level: '매우 높음', current: '32.4% (KPI 50%)', amount: '~0.6억원 기회손실' },
        { item: 'KTAS 3 처방율 미달', level: '높음', current: '73.2% (KPI 80%)', amount: '~0.5억원 기회손실' },
        { item: 'KTAS 2 처방율 미달', level: '중간', current: '87.2% (KPI 95%)', amount: '-' },
        { item: '의사 간 편차', level: '낮음', current: 'KTAS 3 기준 최대 5.0%p', amount: '-' }
      ],
      benchmark: '주기혁 (KTAS 3: 72.8%, KTAS 2: 100.0%)'
    }
  },

  yuseong: {
    name: '유성선병원',
    kpi: { 1: 95, 2: 95, 3: 80, 4: 50, 5: 15 },
    price: { out: 158570, adm: 514830 },
    period: '2025.07 ~ 2025.12',
    summary: {
      totalVisits: 13668,
      totalPatients: 7014,
      totalRevenue: 1530942897,
      avgRevenuePerVisit: 112014,
      admissionRate: 30.7,
      basicLabRate: 51.3,
      emDoctorCount: 10,
      totalOrders: 356155,
      avgStayHours: 1.9
    },
    ktas: {
      1: { visits: 90, ratio: 0.69, labPrescribed: 68, currentLabRate: 75.6, admissionRate: 50.0, avgRevenue: 339345, medianRevenue: 340701, totalRevenue: 30541091, avgOrders: 51.7, admissionCount: 45 },
      2: { visits: 610, ratio: 4.66, labPrescribed: 483, currentLabRate: 79.2, admissionRate: 64.4, avgRevenue: 303720, medianRevenue: 307728, totalRevenue: 185269009, avgOrders: 52.0, admissionCount: 393 },
      3: { visits: 7819, ratio: 59.72, labPrescribed: 5384, currentLabRate: 68.9, admissionRate: 31.1, avgRevenue: 145795, medianRevenue: 147694, totalRevenue: 1139973580, avgOrders: 39.1, admissionCount: 2431 },
      4: { visits: 4125, ratio: 31.51, labPrescribed: 1028, currentLabRate: 24.9, admissionRate: 1.3, avgRevenue: 40238, medianRevenue: 78600, totalRevenue: 165983299, avgOrders: 23.5, admissionCount: 54 },
      5: { visits: 448, ratio: 3.42, labPrescribed: 51, currentLabRate: 11.4, admissionRate: 0.2, avgRevenue: 20482, medianRevenue: 19660, totalRevenue: 9175918, avgOrders: 18.5, admissionCount: 1 }
    },
    emKtas: {
      1: { visits: 90, labPrescribed: 68, currentLabRate: 75.6 },
      2: { visits: 610, labPrescribed: 483, currentLabRate: 79.2 },
      3: { visits: 7819, labPrescribed: 5384, currentLabRate: 68.9 },
      4: { visits: 4125, labPrescribed: 1028, currentLabRate: 24.9 },
      5: { visits: 448, labPrescribed: 51, currentLabRate: 11.4 }
    },
    revenue: {
      1: { outpatient: { current: 8427988, kpi: 6778868 }, admission: { current: 22113103, kpi: 23167350 } },
      2: { outpatient: { current: 38103230, kpi: 32689206 }, admission: { current: 147165779, kpi: 202328190 } },
      3: { outpatient: { current: 568982566, kpi: 683501128 }, admission: { current: 570991014, kpi: 1251551730 } },
      4: { outpatient: { current: 155349860, kpi: 322769235 }, admission: { current: 10633439, kpi: 27800820 } },
      5: { outpatient: { current: 8860132, kpi: 10632119 }, admission: { current: 315786, kpi: 0 } }
    },
    revenueTotals: {
      outpatient: { current: 779723776, kpi: 1056370556, diff: -276646780, rate: -26.2 },
      admission: { current: 751219121, kpi: 1504848090, diff: -753628969, rate: -50.1 }
    },
    doctors: [
      { name: '김건동', patients: 965, avgOrders: 43, avgRevenue: 173030, medianRevenue: 152164, basicLabAvg: 37.6, ktasRates: { 1: 37.5, 2: 87.2, 3: 68.5, 4: 25.6, 5: 7.5 }, totalRate: 53.5 },
      { name: '류승우', patients: 919, avgOrders: 43, avgRevenue: 197001, medianRevenue: 172544, basicLabAvg: 38.5, ktasRates: { 1: 82.2, 2: 74.3, 3: 68.6, 4: 26.9, 5: 2.1 }, totalRate: 53.5 },
      { name: '송경혁', patients: 914, avgOrders: 40, avgRevenue: 163687, medianRevenue: 136640, basicLabAvg: 35.8, ktasRates: { 1: 100.0, 2: 81.9, 3: 65.5, 4: 28.2, 5: 28.9 }, totalRate: 53.5 },
      { name: '이승한', patients: 903, avgOrders: 40, avgRevenue: 155154, medianRevenue: 127894, basicLabAvg: 35.9, ktasRates: { 1: 82.3, 2: 54.6, 3: 71.2, 4: 24.7, 5: 4.1 }, totalRate: 53.5 },
      { name: '안경찬', patients: 892, avgOrders: 39, avgRevenue: 156979, medianRevenue: 140036, basicLabAvg: 36.1, ktasRates: { 1: 100.0, 2: 100.0, 3: 67.9, 4: 18.9, 5: 19.3 }, totalRate: 52.5 },
      { name: '민동규', patients: 868, avgOrders: 40, avgRevenue: 148564, medianRevenue: 130754, basicLabAvg: 36.9, ktasRates: { 1: 32.7, 2: 64.4, 3: 67.8, 4: 30.2, 5: 8.8 }, totalRate: 53.5 },
      { name: '최윤혁', patients: 863, avgOrders: 40, avgRevenue: 159735, medianRevenue: 132214, basicLabAvg: 36.1, ktasRates: { 1: 100.0, 2: 90.5, 3: 66.6, 4: 26.3, 5: 8.8 }, totalRate: 53.2 },
      { name: '양의석', patients: 791, avgOrders: 43, avgRevenue: 174024, medianRevenue: 158064, basicLabAvg: 39.6, ktasRates: { 1: 47.1, 2: 69.5, 3: 68.9, 4: 26.2, 5: 16.6 }, totalRate: 53.5 },
      { name: '박현욱', patients: 736, avgOrders: 41, avgRevenue: 170502, medianRevenue: 155128, basicLabAvg: 38.0, ktasRates: { 1: 76.0, 2: 84.1, 3: 72.9, 4: 16.9, 5: 7.6 }, totalRate: 53.5 },
      { name: '한규홍', patients: 576, avgOrders: 40, avgRevenue: 150444, medianRevenue: 165934, basicLabAvg: 35.4, ktasRates: { 1: null, 2: 58.1, 3: 72.1, 4: 23.6, 5: 9.9 }, totalRate: 53.9 }
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
      summary: `<p>유성선병원 응급실은 전체 내원환자수 기준 6개월간 <strong>13,668건의 내원에 총 15.3억원의 검사 수익</strong>을 기록했다. 기본검사 처방율은 <strong>51.3%</strong>로, 대전선병원(57.1%)보다 낮은 수준이다.</p>
<p>KTAS 등급별로 KTAS 1(75.6%, 목표 95%), KTAS 2(79.2%, 목표 95%), <strong>KTAS 3(68.9%, 목표 80%)</strong>, <strong>KTAS 4(24.9%, 목표 50%)</strong> 모두 KPI 목표에 미달하고 있다. KTAS 5(11.4%)는 목표(15%) 이하로 적정 수준이다.</p>
<p>특히 KTAS 4 환자수 4,125건(대전 1,993건의 2배)에서 처방율 24.9%로 <strong>개선 여지가 매우 크다</strong>. 내원건당 평균금액(116,937원)도 대전(119,695원)보다 2.4% 낮다.</p>
<p><strong>핵심 판단:</strong> KTAS 3·4 처방율 향상이 가장 시급하며, <em>입원환자 추가검사 패키지(514,830원) 표준화</em>를 병행해야 한다.</p>`,
      recommendations: [
        { priority: 1, title: 'KTAS 3 외래 처방율 향상', effect: '+1.1억원', difficulty: '중', risk: '낮음', desc: '68.9%→80%. 외래환자 기본lab 처방 누락 방지. 외래 KPI gap 1.1억원.' },
        { priority: 2, title: 'KTAS 3 입원환자 추가검사 표준화', effect: '+6.8억원', difficulty: '중', risk: '낮음', desc: '입원환자 2,431건 × 514,830원. 최대 수익 기여 항목.' },
        { priority: 3, title: 'KTAS 4 처방율 향상', effect: '+1.7억원', difficulty: '중', risk: '낮음', desc: '24.9%→50%. 4,125건 대규모 환자군 처방율 개선.' },
        { priority: 4, title: 'KTAS 1·2 처방율 향상', effect: '+α', difficulty: '중', risk: '낮음', desc: 'KTAS 1(75.6%→95%), KTAS 2(79.2%→95%). 중증환자 검사 누락 방지.' },
        { priority: 5, title: '입원환자 추가검사 프로토콜 확립', effect: '+α', difficulty: '상', risk: '낮음', desc: 'KTAS 2 입원율 64.4% 활용, 입원 연계 수익 극대화.' }
      ],
      roadmap: {
        phase1: { title: '즉시 실행 (1개월 내)', items: ['KTAS 3 외래 기본lab 처방율 모니터링 시작(68.9%→74%)', 'KTAS 3 입원환자 추가검사 세트(514,830원) 구축', 'KTAS 4 처방율 개선 캠페인 시작(24.9%→35%)'] },
        phase2: { title: '단기 실행 (1~3개월)', items: ['KTAS 3 처방율 77% 달성 및 KTAS 4 43% 달성', 'KTAS 1·2 처방율 95% 달성 방안 수립', '의사별 KTAS별 처방율 분리 모니터링'] },
        phase3: { title: '중기 실행 (3~6개월)', items: ['KTAS 3 처방율 80% KPI 달성, KTAS 4 50% 달성', '외래/입원 이원화 KPI 전면 적용', '대전-유성 교차 벤치마킹 정례화'] }
      },
      risks: [
        { item: 'KTAS 4 처방율 미달', level: '매우 높음', current: '24.9% (KPI 50%)', amount: '~1.7억원 기회손실' },
        { item: 'KTAS 3 처방율 미달', level: '매우 높음', current: '68.9% (KPI 80%)', amount: '~1.1억원 기회손실' },
        { item: 'KTAS 1·2 처방율 미달', level: '높음', current: '75.6%/79.2% (KPI 95%)', amount: '-' },
        { item: '의사 간 편차', level: '중간', current: 'KTAS 3 기준 최대 7.4%p', amount: '-' }
      ],
      benchmark: '박현욱 (KTAS 3: 72.9%, 가장 높은 처방율)'
    }
  }
};
