---
paths:
  - 'packages/utils/**'
---

# utils (`packages/utils`)

`@it-tech-blog/utils`. 앱 사이에 공유하는 범용 유틸리티다.

## 구조

```
src/
├── a11y.ts                  WCAG 대비 기준(WCAG) · 대비 계산(getContrastRatio)
├── i18n.ts                  locale로 문자열을 고르는 hook(useLang)
└── index.ts                 re-export
```

## 규칙

- **`@berrypjh/react-ui`에 있는 유틸은 여기 다시 만들지 않는다.** className 병합은 react-ui의 `cx`를 직접 import한다. 새 유틸 전에 `pnpm exec berry-react-ui find <이름>`으로 먼저 찾는다
- **`useLang`은 `useLocale()`을 부르므로 `'use client'` 컴포넌트 전용이다.** 서버 컴포넌트는 `getServerLocale()`로 분기한다
- 성격에 맞는 파일에 더하고, 새 파일이면 `src/index.ts`에 export를 더한다

## 검증

```bash
pnpm nx test @it-tech-blog/utils
pnpm nx typecheck @it-tech-blog/utils
```
