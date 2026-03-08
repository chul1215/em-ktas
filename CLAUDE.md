# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EM-KTAS는 대전선병원·유성선병원 응급실의 KTAS 등급별 검사처방 현황, KPI 달성도, 수익 시나리오를 분석하는 정적 대시보드 프로젝트이다. 별도 백엔드 없이 브라우저에서 HTML 파일을 직접 열어 사용한다. GitHub Pages로 배포 중 (root `index.html`이 `dashboard/index.html`로 리다이렉트).

## Development

- **빌드/번들러 없음** — 정적 HTML을 브라우저에서 직접 열어 확인
- **배포**: GitHub Pages (root `/index.html` → `dashboard/index.html` 리다이렉트)
- **외부 의존성**: Chart.js 4.4.4 (CDN), Pretendard 폰트 (시스템 폴백)
- **로컬 확인**: `open dashboard/index.html` 또는 Live Server 사용

## Architecture

### Dashboard (`dashboard/index.html`)
- **단일 파일 구조**: HTML + CSS + JS가 모두 인라인으로 포함된 SPA (~900줄)
- **데이터 객체 `D`**: 양 병원의 모든 데이터(KPI, KTAS별 통계, 의사별 데이터, 수익, ROOMi 견해 등)가 `<script>` 내 `D` 객체에 하드코딩
- **전역 상태**: `H` (현재 병원 key: `'daejeon'`/`'yuseong'`), `revScenario`, `charts` (Chart.js 인스턴스)
- **병원 전환**: `switchHospital(key)` → `H` 변경 → `renderAll()` 호출
- **렌더링 함수**: `renderAll()`이 아래 함수들을 순차 호출
  - `renderKPI()`, `renderDoctorRate()`, `renderDoctorRevenue()`, `renderRevenue()`, `renderRevenueInfo()`, `renderAdditionalTests()`, `renderLowFreqTests()`, `renderTestSets()`, `renderROOMi()`, `renderRisks()`
- **차트**: Chart.js (CDN) 사용. `charts` 객체로 인스턴스 관리, 전환 시 `.destroy()` 후 재생성
- **탭 전환**: `switchDoctorTab()`, `switchRevenueTab()`, `switchTestTab()`, `switchRoomiTab()` — DOM 직접 조작 (`classList.add/remove('active')`)

### 테마: Glassmorphism + Liquid Glass Dark
- `:root` CSS 변수 기반 (`--glass-bg`, `--accent-blue`, `--text-primary` 등)
- `body` 배경 `#060B18` + radial-gradient blob 애니메이션 (`blobFloat`)
- `.card` / `.kpi-card`: `backdrop-filter: blur(20px) saturate(160%)`, 반투명 배경, `::before` 하이라이트
- 탭은 pill 스타일 (border-bottom 아닌 `border-radius` 기반)
- **색상 수정 시**: CSS 변수 또는 인라인 스타일 내 `rgba()` / `var()` 사용. 하드코딩된 라이트 테마 색상(`#F8F9FA`, `#E0E0E0` 등) 사용 금지

### 모바일 반응형
- 3단계 브레이크포인트: `1024px` / `768px` / `480px`
- JS로 렌더링되는 인라인 `grid-template-columns` 오버라이드는 별도 `<style>` 블록에서 `!important`로 처리 (ROOMi 인포그래픽, 검사세트 등)
- 테이블은 `overflow-x:auto`로 가로 스크롤
- 헤더: 768px 이하에서 로고 텍스트 숨김 + flex-wrap 재배치

### 참조 데이터 (`dashboard/js/data.js`)
- `index.html`에서 직접 사용하지 않는 별도 참조용 파일 (더 상세한 필드명 사용)
- `index.html`의 `D` 객체와 **동일한 수치**를 유지해야 함 — 한쪽 수정 시 반드시 양쪽 동기화

### Brief 문서 (`brief/*.md`)
- 분석결과, 수익률분석, ROOMi 견해, PRD, KPI 재설계 기준 등
- 대시보드 데이터 변경 시 관련 MD 파일의 수치도 함께 업데이트 필요

### 디자인 에셋 (`design/`)
- `ROOMi.jpg` — ROOMi AI 캐릭터 아바타 (대시보드에서 `<img src="../design/ROOMi.jpg">` 참조)
- `dashdesign.jpg` — 대시보드 디자인 참고 이미지

### 원본 데이터 (`data/*.xlsx`)
- 분석의 원본 엑셀 파일. 직접 수정하지 않음

## ROOMi 캐릭터 설정

ROOMi는 적정진료관리팀 AI 캐릭터이다. 분석 견해 텍스트 작성 시:
- **말투**: 상냥하고 친근한 존댓말 (~이에요, ~해요, ~거든요, ~드려요, ~주세요)
- **인사**: "안녕하세요, ROOMi예요."로 시작
- **권고**: 명령이 아닌 부드러운 제안 ("~해 주시면 좋겠어요", "이렇게 추진해 보시면 어떨까요?")
- **감정 표현**: 공감과 걱정 ("걱정이 돼요", "아쉬워요", "정말 중요한 구간이에요")
- **마무리**: "궁금하신 점이 있으시면 언제든 물어봐 주세요!"
- 수치와 데이터는 정확하게 유지하면서 톤만 변경

## KPI 이원화 체계 (적용 완료)

외래/입원 연계 여부에 따라 KPI를 이원화. `brief/KPI_재설계_기준.md` 참조.

- **KPI 목표**: `D.kpi` = `{1:100, 2:100, 3:96, 4:80, 5:30}`
- **KTAS 색상**: `D.kc` = `{1:'#5BA8FF', 2:'#38D9F5', 3:'#A78BFA', 4:'#FBBF24', 5:'#F472B6'}`
- **수익 시나리오**: 2종 (외래 `out` / 입원연계 `adm`)
  - 외래 KPI 수익 = (전체건 - 입원건) × KPI목표율 × 158,570원
  - 입원 KPI 수익 = 입원건 × 100% × 421,440원
- **수익 데이터 구조**: `D.[hospital].rev[ktas].out` / `.adm` 각각 `{c, k}` (현재/KPI기준)
- KTAS 5는 입원 연계 없음 (외래 30% 단일)

## Data Sync Checklist

KPI나 수익 데이터 변경 시 반드시 동기화해야 하는 파일:
1. `dashboard/index.html` — `D` 객체 내 해당 값
2. `dashboard/js/data.js` — 동일 구조의 참조 데이터
3. `brief/대전_수익률분석결과.md`
4. `brief/유성_수익률분석결과.md`
5. `brief/대전_ROOMi_분석견해.md`
6. `brief/유성_ROOMi_분석견해.md`
7. `brief/PRD_응급실_KTAS_대시보드.md`
8. `brief/KPI_재설계_기준.md`

## Language

사용자와의 소통 및 문서 작성은 한국어로 진행.