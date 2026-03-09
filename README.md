# EM-KTAS 응급실 검사처방 분석 대시보드

대전선병원·유성선병원 응급실의 KTAS 등급별 검사처방 현황, KPI 달성도, 수익 시나리오를 분석하는 정적 대시보드.

## 배포

GitHub Pages: `https://chul1215.github.io/em-ktas/`

> 접속 시 사번(5자리 숫자) 입력 필요

## 로컬 실행

```bash
open dashboard/index.html
```

빌드 도구 없음. 브라우저에서 직접 열면 동작함.

## 주요 기능

- **KTAS별 처방율 현황** — KTAS 1~5 등급별 혈액검사 처방율 vs KPI 목표 비교
- **의료진별 분석** — 처방율 뷰 / 평균금액 뷰 / KPI 비교 뷰(레이더 차트)
- **수익 시나리오** — 외래 / 입원연계 2종 시나리오별 현재 수익 vs KPI 기준선
- **추가 가능 검사** — 고빈도/저빈도 검사셋, ROOMi AI 분석 견해

## 데이터 구조

모든 데이터는 `dashboard/index.html` 내 `D` 객체에 하드코딩되어 있음.

```
D
├── kc          — KTAS별 색상
├── daejeon     — 대전선병원 데이터
│   ├── kpi     — KTAS별 KPI 목표율
│   ├── ktas    — KTAS별 통계 (방문수, 처방율, 수익 등)
│   ├── docs    — 의사별 데이터 (환자수, KTAS별 달성율 kr, 평균금액)
│   └── rev     — KTAS별 수익 (out: 외래, adm: 입원)
└── yuseong     — 유성선병원 데이터 (동일 구조)
```

## 분석 문서

| 파일 | 내용 |
|---|---|
| `brief/대전_분석결과.md` | 대전선병원 KTAS별 처방 분석 |
| `brief/유성_분석결과.md` | 유성선병원 KTAS별 처방 분석 |
| `brief/대전_수익률분석결과.md` | 대전 수익 시나리오 상세 |
| `brief/유성_수익률분석결과.md` | 유성 수익 시나리오 상세 |
| `brief/KPI_재설계_기준.md` | KPI 이원화 체계 설계 기준 |
| `data/now_data/` | 현재 분석 기준 원본 xlsx + CSV |

## 기술 스택

- 순수 HTML/CSS/JS (단일 파일, 프레임워크 없음)
- [Chart.js 4.4.4](https://www.chartjs.org/) (CDN)
- Glassmorphism + Liquid Glass Dark 테마
