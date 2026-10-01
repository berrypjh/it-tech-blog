# main-web

인터랙티브 랜딩 페이지. 멀티존의 호스트 앱.

- **포트**: 3000
- **역할**: 진입점 — `/accessibility/*` 요청을 accessibility-zone으로 프록시

## 라우팅 구조

```
app/
├── layout.tsx       # root
├── page.tsx         # 랜딩 페이지
├── not-found.tsx    # 404
├── error.tsx        # 런타임 에러
└── global-error.tsx # root layout 에러
```

## 디렉터리 구조

```
src/
├── app/                     # 라우팅 (위 트리 참고)
├── components/
│   ├── theme/               # ThemeClientProvider, ThemeToggle
│   └── spatial-lab/         # 랜딩 Spatial Tech Lab (모듈 링 + 반응형 카드)
└── data/                    # 정적 데이터 (TOPICS, getVisibleTopics)
```

규칙:
- 도메인 그룹 폴더는 `kebab-case`, 컴포넌트 파일은 `PascalCase`
- 그룹 폴더마다 `index.ts` barrel export (named export)
- import는 alias(`@/components/theme`, `@/data/topics`) 사용

## 주요 컴포넌트

| 컴포넌트 | 위치 | 역할 |
|---|---|---|
| `ThemeClientProvider` | `components/theme` | ThemeProvider + LocaleProvider + UIThemeBridge 래핑 |
| `UIThemeBridge` | `components/theme/ThemeClientProvider.tsx` 내부 | `@it-tech-blog/preferences` 테마를 `@berrypjh/react-ui` ThemeProvider에 동기화 |
| `ThemeToggle` | `components/theme` | 우상단 고정 — 테마/언어 토글 (IconButton 사용) |
| `SpatialTechLab` | `components/spatial-lab` | 랜딩의 유일한 클라이언트 경계. 토픽 내비게이션 + 공간 표현이 활성 토픽 상태를 공유 |
| `SpatialModule` | `components/spatial-lab` | 토픽 하나. 활성은 `<a>`, 준비 중은 링크 없는 항목 + "준비 중" 배지 |
| `ModuleArt` / `LabScene` | `components/spatial-lab` | 장식 SVG(aria-hidden). 모듈 오브젝트 / 링·커넥터 |
| `spatial-lab.layout.ts` | `components/spatial-lab` | 스테이지 배치(타원 링 호 길이 균등 분할). 도메인 데이터와 분리 |
| `TOPICS` | `data/topics` | 토픽 도메인 데이터(`active`는 zone/href, `planned`는 링크 없음). icon JSX 포함이라 `.tsx` |

## 랜딩 페이지 반응형 동작

같은 DOM(`<nav>` > `<ul>` > 모듈)을 CSS(`spatial-lab.css`)만으로 재배치한다. JS 뷰포트 감지 없음.

| 조건 | 레이아웃 |
|---|---|
| 기본 | 모바일 카드 스택 (auto-fill, 320px~ 1열, 가로 모드 2열+) |
| 너비 ≥ 768px | 2.5D 덱 (오브젝트가 카드 밖으로 솟은 레이어드 카드) |
| 너비 ≥ 1024px + 높이 ≥ 560px | 공간 스테이지 (코어를 둘러싼 모듈 링, 포인터 기울기 ±2°) |
| 너비 ≥ 1280px + 높이 ≥ 720px | 풀 디테일 (기울기 ±3°, 깊이 확대, 외곽 링·파티클) |

스테이지 크기는 컨테이너 쿼리 단위(`cqw`/`cqh`)로 잡아 낮은 높이에서도 제목과 겹치지 않는다.
`prefers-reduced-motion: reduce`면 기울기·등장·커넥터 흐름 애니메이션을 끈다.

`ENABLED_ZONES`가 설정되면 `getVisibleTopics()`는 해당 존의 활성 토픽만 반환한다(준비 중 토픽 숨김).

## 존 전환 (View Transitions)

호스트와 존은 같은 origin이라 cross-document View Transitions로 이어진다. 정의는 `@it-tech-blog/ui/zone-transition.css` 한 곳뿐이다.

- 페이지 전체(root)를 하나로 전환한다: 이전 문서는 살짝 커지며 사라지고, 다음 문서는 네비게이션·배경·본문이 함께 페이드인
- 호스트와 모든 존의 루트 레이아웃에서 이 CSS를 import한다. 새 존도 import만 하면 된다
- 존 페이지 첫 등장도 같은 파일: 본문 컨테이너에 `zone-enter`(첫 자식이 초점 맞추듯, 나머지 뒤따름), 보조 영역에 `zone-enter-aside`. 적용 위치 — a11y `DocLayout`, react `StartPageShell`
- reduced-motion: OS 설정이면 전환 끔, 존의 `html[data-motion='reduce']`면 애니메이션 제거. 미지원 브라우저(Firefox)는 즉시 전환

## 테스트

- 단위: `pnpm nx run @it-tech-blog/main-web:test` (Vitest, jsdom — `*.spec.ts(x)`)
- E2E: `apps/main-web-e2e` — 랜딩 반응형 불변식(가로 overflow 없음, 제목/링크 가시성), 키보드 도달, 존 프록시

## 설정 시스템

`theme`과 `locale` 두 가지만 사용한다 (fontSize, fontFamily, motion 미사용).

`ThemeClientProvider`가 두 Provider를 한 번에 감싼다:

```tsx
<ThemeProvider defaultTheme={theme}>
  <LocaleProvider defaultLocale={locale}>
    <UIThemeBridge>{children}</UIThemeBridge>
  </LocaleProvider>
</ThemeProvider>
```

## 멀티존 프록시 설정 (next.config.js)

```js
async rewrites() {
  const ACCESSIBILITY = process.env.ACCESSIBILITY_DOMAIN ?? 'http://localhost:4001';
  return [
    { source: '/accessibility',               destination: `${ACCESSIBILITY}/accessibility` },
    { source: '/accessibility/:path*',         destination: `${ACCESSIBILITY}/accessibility/:path*` },
    { source: '/accessibility-static/:path*',  destination: `${ACCESSIBILITY}/accessibility-static/:path*` },
  ];
}
```

환경변수 `ACCESSIBILITY_DOMAIN` 미설정 시 `http://localhost:4001` 사용.

## 외부 패키지

- `@berrypjh/react-ui` — IconButton, 디자인 토큰 스타일
- `@it-tech-blog/preferences` — 설정 상태 관리
- `@it-tech-blog/icons` — 아이콘
