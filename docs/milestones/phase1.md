# Phase 1 - 백엔드 도입 및 데이터 영속화

## 마일스톤 정보

| 항목 | 내용 |
|------|------|
| 목표 | localStorage 의존성을 탈피하고 Supabase를 도입하여 데이터를 영속 저장한다 |
| 영향 | 기기 간 데이터 동기화, 데이터 유실 방지 |
| 기술 | Supabase (DB + API), 익명 세션 ID 기반 데이터 식별 |

## 이슈 목록

| 이슈 번호 | Title | Description | 상태 |
|-----------|-------|-------------|------|
| #33 | Supabase 프로젝트 세팅 및 Next.js 연동 | Supabase 프로젝트 생성, 환경변수 설정, Supabase Client 유틸 구성, Next.js와 연동 확인 | ✅ 완료 |
| #34 | DB 테이블 스키마 설계 및 생성 | 현재 localStorage 데이터 모델(CartItemType 등)을 분석하여 Supabase 테이블 스키마 설계 및 생성. 익명 세션 ID 기반 데이터 식별 포함 | ✅ 완료 |
| #35 | 장바구니 CRUD API 구현 | 장바구니 생성/조회/수정/삭제 Server Actions 구현 | ✅ 완료 |
| #36 | 품목(CartItem) CRUD API 구현 | 품목 추가/조회/수정/삭제 Server Actions 구현 | ⬜ 미착수 |
| #37 | 프론트엔드 localStorage → Supabase 마이그레이션 | 기존 localStorage 기반 로직을 Supabase API 호출로 전환, 동작 검증 | ⬜ 미착수 |

## 작업 순서

`#33` → `#34` → `#35` → `#36` → `#37`
