# main-web

인터랙티브 랜딩 페이지. 멀티존의 호스트 앱.

- **포트**: 3000
- **역할**: 진입점 — `/accessibility/*` 요청을 accessibility-zone으로 프록시

## 라우팅 구조

```
app/
├── layout.tsx       # root — ThemeClientProvider, 인라인 스크립트
├── page.tsx         # 랜딩 페이지 (PageClient 렌더)
├── not-found.tsx    # 404 — 그라디언트 배경 + ThemeToggle
├── error.tsx        # 런타임 에러 — 그라디언트 배경 + ThemeToggle
└── global-error.tsx # root layout 에러 — inline style만 사용
```

## 주요 컴포넌트

| 컴포넌트 | 역할 |
|---|---|
| `ThemeClientProvider` | ThemeProvider + LocaleProvider + UIThemeBridge 래핑 |
| `UIThemeBridge` | `@it-tech-blog/preferences` 테마를 `@berrypjh/react-ui` ThemeProvider에 동기화 |
| `ThemeToggle` | 우상단 고정 — 테마/언어 토글 (IconButton 사용) |
| `PageClient` | 랜딩 페이지 본문 — BubbleButton 목록, 타이틀, 설명 |

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

## 스타일

- 배경: `fixed` 그라디언트 (`from-[#f8fafc]...` 라이트 / `from-[#0a0520]...` 다크)
- 최대 너비: `max-w-[1440px] mx-auto`
- `:focus-visible`: 라이트 `#94a3b8` / 다크 `.dark :focus-visible` `#e2e8f0`
- global.css: 기본값 외 별도 토큰 없음 (Tailwind 기본 팔레트 사용)

## 첫 방문 테마 처리

쿠키 없는 첫 방문에 OS `prefers-color-scheme`를 초기 테마로 사용하는 인라인 스크립트가 `<head>`에 삽입된다. `ThemeProvider`는 DOM class를 읽어 React 상태를 동기화한다.

## 외부 패키지

- `@berrypjh/react-ui` — BubbleButton, IconButton 등 UI 컴포넌트
- `@it-tech-blog/preferences` — 설정 상태 관리

## 참고 문서

- `docs/multi-zone.md` — 멀티존 아키텍처 및 선택 이유
- `docs/preferences.md` — 설정 시스템 상세
- `docs/error-pages.md` — 에러/404 페이지 전략
