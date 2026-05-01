# Phase 1.5 - UX 보완 (로딩/에러 처리)

## 마일스톤 정보

| 항목 | 내용 |
|------|------|
| 목표 | API 기반 전환 이후 부족한 로딩/에러 UX를 보완한다 |
| 영향 | 사용자 피드백 개선, 에러 상황 대응 |

## 이슈 목록

| 이슈 번호 | Title | Description | 상태 |
|-----------|-------|-------------|------|
| #43 | 커스텀 404 페이지 구현 | 존재하지 않는 경로 접근 시 보여줄 커스텀 not-found 페이지 디자인 및 구현. 홈으로 돌아가기 버튼 포함 | ✅ 완료 |
| #47 | Vercel Function Region 서울(icn1)로 변경 | Vercel Function Region(iad1)과 Supabase DB Region(ap-northeast-2) 불일치로 인한 네트워크 레이턴시 해소. vercel.json 설정 추가 | ✅ 완료 (Hobby 플랜 제약으로 효과 없음 → #49, #50으로 후속 조치) |
| #49 | preferredRegion='icn1' 설정 롤백 | Hobby 플랜에서 사용 불가능한 preferredRegion 설정 제거 | ✅ 완료 |
| #50 | Supabase 리전 이전 (ap-northeast-2 → us-east-1) | Vercel iad1과 같은 리전으로 Supabase 이전하여 네트워크 레이턴시 해소 | ✅ 완료 |
| #44 | API 로딩 스피너 구현 | API pending 상태 시 보여줄 SpinnerAtom 컴포넌트 개발. 주요 인터랙션에 적용 | ✅ 완료 |

## 작업 순서

`#43` → `#47` → `#49` → `#50` → `#44`
