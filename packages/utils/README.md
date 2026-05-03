# @it-tech-blog/utils

앱 간에 공유하는 범용 유틸리티 패키지.

## 구조

```
src/
  cn.ts     — cn, focusRing
  a11y.ts   — WCAG, getContrastRatio
  i18n.ts   — useLang
  index.ts  — 전체 re-export
```

## 사용법

```ts
import { cn, focusRing, WCAG, getContrastRatio, useLang } from '@it-tech-blog/utils';
```

### cn

```ts
cn('base', isActive && 'active', undefined) // → 'base active'
```

### focusRing

```tsx
<button className={cn('btn', focusRing)} />
```

### getContrastRatio / WCAG

```ts
const ratio = getContrastRatio('#ffffff', '#000000'); // → 21
ratio >= WCAG.AA_NORMAL // → true
```

### useLang

클라이언트 컴포넌트 전용. 서버 컴포넌트에서는 `getServerLocale()`을 사용할 것.

```tsx
const c = useLang({ ko: { title: '제목' }, en: { title: 'Title' } });
```
