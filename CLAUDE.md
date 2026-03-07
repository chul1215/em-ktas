# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EM-KTAS는 대전선병원·유성선병원 응급실의 KTAS 등급별 검사처방 현황, KPI 달성도, 수익 시나리오를 분석하는 정적 대시보드 프로젝트이다. 별도 백엔드 없이 브라우저에서 HTML 파일을 직접 열어 사용한다.

## Architecture

### Dashboard (`dashboard/index.html`)
- **단일 파일 구조**: HTML + CSS + JS가 모두 인라인으로 포함된 SPA
- **데이터 객체 `D`**: 양 병원의 모든 데이터(KPI, KTAS별 통계, 의사별 데이터, 수익, ROOMi 견해 등)가 `<script>` 내 `D` 객체에 하드코딩
- **병원 전환**: `switchHospital(key)` → 전역 변수 `H`를 `'daejeon'`/`'yuseong'`으로 변경 → `renderAll()` 호출
- **차트**: Chart.js (CDN) 사용. `charts` 객체로 인스턴스 관리, 전환 시 `.destroy()` 후 재생성
- **탭 전환**: 각 카드 내 탭은 DOM 직접 조작 (`classList.add/remove('active')`)

### 참조 데이터 (`dashboard/js/data.js`)
- `index.html`에서 직접 사용하지 않는 별도 참조용 파일 (더 상세한 필드명 사용)
- `index.html`의 `D` 객체와 **동일한 수치**를 유지해야 함 — 한쪽 수정 시 반드시 양쪽 동기화

### Brief 문서 (`brief/*.md`)
- 분석결과, 수익률분석, ROOMi 견해, PRD, KPI 재설계 기준 등
- 대시보드 데이터 변경 시 관련 MD 파일의 수치도 함께 업데이트 필요

### 원본 데이터 (`data/*.xlsx`)
- 분석의 원본 엑셀 파일. 직접 수정하지 않음

## Key Data Relationships

- **KPI 목표**: `D.kpi` (index.html) = `kpiTargets` (data.js) — 현재 `{1:100, 2:100, 3:93, 4:75, 5:20}`
- **수익 계산**: `D.[hospital].rev` (KTAS별 시나리오 수익) → `D.[hospital].rt` (시나리오별 총계)
  - 기본검사 KPI 수익 = KPI목표건수 × 158,570원
  - 입원시 KPI 수익 = 입원건수 × 347,550원
  - 수술시 KPI 수익 = 입원건수 × 421,440원
- **입원율**: `admissionRate = admissionCount / visits × 100` (실제 진료구분 I/O 기반)

## Data Sync Checklist

KPI나 수익 데이터 변경 시 반드시 동기화해야 하는 파일:
1. `dashboard/index.html` — `D` 객체 내 해당 값
2. `dashboard/js/data.js` — 동일 구조의 참조 데이터
3. `brief/대전_수익률분석결과.md` — 테이블 및 발견사항
4. `brief/유성_수익률분석결과.md` — 테이블 및 발견사항
5. `brief/대전_ROOMi_분석견해.md` — KPI 언급 텍스트
6. `brief/유성_ROOMi_분석견해.md` — KPI 언급 텍스트
7. `brief/PRD_응급실_KTAS_대시보드.md` — KPI 기준표

## Pending: KPI Redesign

`brief/KPI_재설계_기준.md`에 새로운 KPI 체계가 정의되어 있으나 **아직 미적용** 상태. 사용자가 반영을 요청할 때 적용할 것. 주요 변경: 외래/입원 이원화, 수술 시나리오 폐기, 고령+수술(421,440원) 단일 기준.

## Language

사용자와의 소통 및 문서 작성은 한국어로 진행.
