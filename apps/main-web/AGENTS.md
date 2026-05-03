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

## 주요 컴포넌트

| 컴포넌트 | 역할 |
|---|---|
| `ThemeClientProvider` | ThemeProvider + LocaleProvider + UIThemeBridge 래핑 |
| `UIThemeBridge` | `@it-tech-blog/preferences` 테마를 `@berrypjh/react-ui` ThemeProvider에 동기화 |
| `ThemeToggle` | 우상단 고정 — 테마/언어 토글 (IconButton 사용) |
| `TopicBubbles` | BubbleButton 클라이언트 경계 — `topics`와 `locale`을 서버에서 props로 수신 |

## 랜딩 페이지 반응형 동작

뷰포트 높이 기준으로 레이아웃이 전환된다.

| 조건 | 레이아웃 |
|---|---|
| 너비 ≥ lg + 높이 ≥ 900px | 버블 버튼 표시 |
| 너비 ≥ lg + 높이 < 900px | 3열 그리드 표시 |
| 너비 < lg | 3열 그리드 표시 |

컨테이너 최소 높이는 `min-h-[max(100vh,700px)]` — 700px 미만 뷰포트에서 스크롤 발생.

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

- `@berrypjh/react-ui` — BubbleButton, IconButton 등 UI 컴포넌트
- `@it-tech-blog/preferences` — 설정 상태 관리
- `@it-tech-blog/icons` — 아이콘
