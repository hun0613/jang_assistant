# 장비서 (Jang-Assistant) 작업 규칙

## 세션 시작
- 대화가 시작되면 **사용자에게 어떤 작업을 진행할지 먼저 물어본다**
- 진행 중인 이슈가 있으면 해당 이슈의 현재 상태를 안내한다

## 작업 방식

### 1. 요구사항 확인 프로세스
- 요구사항을 받으면 **바로 진행하지 않는다**
- 이해한 내용을 먼저 정리해서 공유한다
- 사용자의 확인을 받은 후에 작업을 진행한다

### 2. UI/UX 개발 방식
- **Atomic Design 기반**으로 컴포넌트를 개발한다
- 개발 순서: Atoms → Molecules → Components → 페이지 배치
- 피그마 디자인을 한꺼번에 구현하지 않고, 작은 단위부터 확인하며 올라간다
- **Figma MCP 연동**: 사용자가 Figma URL을 공유하면 `get_design_context`로 디자인 정보를 가져와 프로젝트 컨벤션에 맞게 구현한다

### 3. 파일/컴포넌트 생성 규칙
- 새로운 컴포넌트나 파일을 만들 때 **현재 디렉토리 구조를 분석**하여 적절한 위치를 먼저 제안한다
- 사용자의 승인을 받은 후에 해당 위치에 생성한다

### 4. Git 워크플로우
모든 작업은 이슈 기반으로 진행한다. **매 작업 시작 시 아래 절차를 사용자에게 확인한다.**

**절차:**
1. 작업 요청을 받으면 **이슈 단위로 분류**하여 제안
2. 사용자 승인 후 **마일스톤 title/description + 각 이슈 title/description 작성**하여 제공
3. 사용자가 GitHub에 마일스톤 생성 + 이슈 등록
4. 사용자가 이슈 번호를 **순서대로 띄어쓰기 구분**으로 입력 (예: `33 34 35 36 37`)
5. 각 이슈에 번호를 맵핑하여 `docs/milestones/` 문서에 기록
6. 사용자가 "XX번 시작하자" 하면 해당 이슈 문서를 참조하여 **브랜치 생성** 후 작업 진행
7. 브랜치에서 **이슈별 로드맵 문서 생성** → 작업 단계를 정리하고 단계별로 진행
8. **작업 단계가 하나 완료될 때마다 커밋**한다
9. 모든 단계 완료 시 **아래 문서들을 반드시 업데이트**한다:
   - `docs/milestones/issues/XX.md`: 각 Step 상태를 ✅ 완료로 변경, 진행 기록 작성
   - `docs/milestones/phaseN.md`: 해당 이슈의 상태를 ✅ 완료로 변경
   - 로드맵 문서를 완료 처리하여 **`docs/history/`에 저장**
10. 사용자에게 **push 여부를 확인** → 승인 시 push 진행
11. push 완료 후 **PR title/description을 작성**하여 제안 (PR 생성 및 머지는 사용자가 직접 수행)

**체크리스트 (매 작업 시작 시 사용자에게 확인):**
- [ ] 이슈 단위 분류 완료했는가?
- [ ] 마일스톤/이슈 title·description 제공했는가?
- [ ] GitHub 마일스톤/이슈 등록 완료했는가?
- [ ] 이슈 번호를 공유 받아 문서에 맵핑했는가?
- [ ] 작업할 이슈 번호를 지정받았는가?

**이슈 관리 문서:** `docs/milestones/` 디렉토리에 마일스톤별 문서로 관리 (예: `phase1.md`)

**브랜치 네이밍**: `prefix/#이슈번호` (예: `feat/#31`, `bugFix/#20`)

**커밋 메시지**: `prefix/#이슈번호 설명` (예: `feat/#31 ga4 태그 삽입`)

| prefix | 용도 |
|--------|------|
| `feat` | 새 기능 |
| `bugFix` | 버그 수정 |
| `refactor` | 리팩토링 |
| `docs` | 문서 |
| `deploy` | 배포/인프라 |
| `improve` | 기존 기능 개선 |

## 디자인 시스템 구조

### Atomic Design 계층
```
src/
├── atoms/          # 원자 (기본 UI 요소)
│   ├── buttons/    # ButtonAtom, BackButtonAtom, EraseButtonAtom
│   ├── forms/      # InputTextAtom, InputPriceAtom, TextAreaAtom, LabelAtom, CounterAtom
│   ├── bars/       # ProgressBarAtom
│   ├── carts/      # CartListHeaderAtom, CartListItemAtom
│   ├── layouts/    # PageAtom, SectionAtom
│   ├── popups/     # PopupAtom
│   ├── texts/      # TitleTextAtom, DescriptionTextAtom
│   └── images/
├── molecules/      # 분자 (Atom 조합)
│   └── forms/      # FormMolecule, FormSectionMolecule
├── templates/      # 템플릿 (레이아웃)
│   └── layouts/    # PageTemplate
└── components/     # 페이지 단위 컴포넌트
    ├── landings/
    ├── shoppings/
    ├── createCarts/
    ├── layouts/
    └── utils/
```

### Storybook
- Storybook 8.6.14 + Next.js Vite 통합
- Chromatic 연동 (시각적 회귀 테스트)
- 재사용성이 있는 컴포넌트를 만들 때 디자인 시스템 추가를 **먼저 제안**하고, 승인 시 Story 파일도 함께 작성

## 코드 컨벤션

### 컴포넌트 작성
- **화살표 함수** + `React.FC<Props>` 타입 명시
- **default export** 기본 사용
- Props 분해: `const { prop1, prop2, className, ...rest } = props`
```tsx
const ComponentAtom: React.FC<ComponentAtomProps> = (props) => {
  const { prop1, prop2, className, ...rest } = props;
  return ( ... );
};
export default ComponentAtom;
```

### 네이밍 규칙
- **컴포넌트 파일**: PascalCase + 계층 suffix (`ButtonAtom`, `FormMolecule`, `ShoppingComp`)
- **디렉토리**: 소문자 + 기능별 분류 (`atoms/buttons/`, `components/shoppings/`)
- **유틸 파일**: camelCase + `Util` suffix (`domUtil.ts`, `storageUtil.ts`)
- **Enum**: `SCREAMING_SNAKE_CASE` (`BUTTON_COLOR`, `CART_ITEM_STATUS`)
- **이벤트 핸들러**: `handleXxx` 네이밍

### 타입 정의
- `type` 키워드 사용 (interface 아닌)
- HTML 확장: `type Props = { ... } & JSX.IntrinsicElements['element']`
- Molecule에서 Atom 상속: `React.ComponentProps<typeof Atom>`
- 타입 위치: `src/types/`, Enum 위치: `src/enums/`

### className
- `mergeClassNames` 유틸을 사용하여 클래스를 병합한다
- 작성 순서: 공통 속성 → 조건부 속성 → className props
```tsx
className={mergeClassNames(
  '공통 Tailwind 클래스',
  { '조건부 클래스': 조건 },
  className,  // 외부에서 전달받은 props
)}
```

### 스타일링
- Tailwind CSS 주력 사용
- 인라인 style은 동적 값에만 사용 (`style={{ width: `${value}%` }}`)

### 클라이언트/서버 컴포넌트
- `'use client'` 지시어는 Components 레벨에서 사용
- Atoms, Molecules는 기본적으로 서버 컴포넌트 호환

### Prettier
- printWidth: 140, 싱글 쿼트, 스페이스 인덴트

### 프로젝트 디렉토리 구조
```
src/
├── app/          # Next.js App Router
├── atoms/        # 기본 UI 요소
├── molecules/    # Atom 조합
├── templates/    # 페이지 템플릿
├── components/   # 페이지 단위 컴포넌트
├── types/        # TypeScript 타입 정의
├── enums/        # Enum 정의
├── hooks/        # 커스텀 훅 (usePopup, useSticky 등)
├── utils/        # 유틸 함수 (domUtil, storageUtil)
├── constants/    # 상수
└── actions/      # Server actions
```

### 디자인 토큰 (tailwind.config.ts)
- **색상**: bgColor(#F7F7F7), pointColor(#F34D52), fontColor(#3A3A3A), positiveColor(#6CA0D0), negativeColor(#FF6969), grayBtnColor(#9D9D9D), disabledBtnColor(#E4E4E4)
- **그림자**: layout, item, icon
- **폰트**: BMJUA (한글 전용)
