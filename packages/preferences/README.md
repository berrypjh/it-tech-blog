# @it-tech-blog/preferences

테마(dark/light)와 로케일(ko/en) 상태를 관리하는 패키지.

## 구조

```
src/
  locale/   — LocaleProvider, useLocale
  theme/    — ThemeProvider, useTheme
  server/   — getServerLocale, getServerTheme (서버 전용)
  index.ts  — 클라이언트 진입점
```

## 사용법

### 클라이언트

```tsx
import { ThemeProvider, useTheme, LocaleProvider, useLocale } from '@it-tech-blog/preferences';
```

### 서버 (Next.js Server Component / layout)

```ts
import { getServerTheme, getServerLocale } from '@it-tech-blog/preferences/server';

const theme = await getServerTheme();   // 'dark' | 'light'
const locale = await getServerLocale(); // 'ko' | 'en'
```

> `@it-tech-blog/preferences/server`는 `next/headers`에 의존하므로 서버 컴포넌트에서만 사용해야 합니다.
