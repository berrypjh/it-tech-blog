---
paths:
  - 'packages/preferences/**'
---

# preferences (`packages/preferences`)

`@it-tech-blog/preferences`. 사용자 설정을 앱 사이에 공유한다. 쿠키로 SSR과 클라이언트 상태를 맞춘다. 진입점은 `.`(클라이언트)와 `./server`(`next/headers` 의존 — 서버 컴포넌트 전용)다.

## 구조

```
src/
├── theme/ · locale/ · font-size/ · font-family/ · motion/   설정별 Provider + hook + type
├── server/                  쿠키 읽기 — getServer*()
├── PreferencesProviders.tsx 다섯 Provider를 한 번에 감쌈
├── ThemeDetectionScript.tsx 쿠키 없는 첫 방문에 OS 테마를 DOM class에 적용
└── index.ts
```

## DOM 적용

| 설정       | DOM 속성               |
| ---------- | ---------------------- |
| theme      | `html.className`       |
| locale     | `html.lang`            |
| fontSize   | `html[data-font-size]` |
| fontFamily | `html[data-font]`      |
| motion     | `html[data-motion]`    |

값 · 서버 기본값은 각 폴더의 type과 `server/index.ts`가 정답이다.

## 규칙

- **모든 설정은 같은 패턴이다.** 클라이언트는 Provider + hook이 상태 · 쿠키 · DOM 속성을 함께 바꾸고, 서버는 `getServer<Name>()`이 쿠키를 읽는다
- **`Theme` 타입은 `@berrypjh/react-ui`의 `ThemeName`에서 `Extract`로 뽑는다.** react-ui에 없는 테마 이름은 더할 수 없다
- **`ThemeProvider`의 초기 상태는 `defaultTheme`이 아니라 DOM class에서 읽는다.** `ThemeDetectionScript`가 첫 paint 전에 class를 OS 설정으로 바꾸기 때문이다

### 새 설정 추가

1. `src/<name>/index.tsx` — Provider + hook + type
2. `src/index.ts` export, `PreferencesProviders`에 Provider 추가
3. `src/server/index.ts` — `getServer<Name>()`
4. 쓰는 앱의 `global.css` — `html[data-<name>="..."]` 스타일
5. 쓰는 앱의 `layout.tsx` — `<html>` 속성 주입
6. `@it-tech-blog/ui`의 `SettingsPopover` — UI 항목

## 검증

```bash
pnpm nx typecheck @it-tech-blog/preferences
pnpm nx lint @it-tech-blog/preferences
```

테스트 target은 없다. 동작은 `accessibility-zone-e2e`의 `settings.spec.ts`가 덮는다.
