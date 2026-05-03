# packages/utils

`@it-tech-blog/utils` 패키지. 앱 간에 공유하는 범용 유틸리티 모음.

## 파일 구조

- `src/cn.ts` — className 병합 (`cn`), 포커스 링 클래스 상수 (`focusRing`)
- `src/a11y.ts` — WCAG 대비율 상수 (`WCAG`), 색상 대비 계산 (`getContrastRatio`)
- `src/i18n.ts` — locale 기반 문자열 선택 hook (`useLang`)
- `src/index.ts` — 전체 re-export

## 각 유틸 설명

### cn / focusRing (`cn.ts`)

```ts
import { cn, focusRing } from '@it-tech-blog/utils';

cn('base-class', isActive && 'active', undefined) // → 'base-class active'
<button className={cn('btn', focusRing)} />
```

- `cn`: falsy 값을 제거하고 className을 공백으로 합침. `clsx`의 경량 대체
- `focusRing`: 프로젝트 공통 포커스 스타일 (`focus-visible:ring-2 ...`)

### getContrastRatio / WCAG (`a11y.ts`)

```ts
import { getContrastRatio, WCAG } from '@it-tech-blog/utils';

const ratio = getContrastRatio('#ffffff', '#000000'); // → 21
ratio >= WCAG.AA_NORMAL // → true (4.5 이상)
```

- `getContrastRatio(fg, bg)`: hex 색상 두 개를 받아 WCAG 대비율 반환
- `WCAG`: AA/AAA 기준 상수 (`AA_NORMAL: 4.5`, `AA_LARGE: 3`, `AAA_NORMAL: 7`, `AAA_LARGE: 4.5`)

### useLang (`i18n.ts`)

```ts
import { useLang } from '@it-tech-blog/utils';

const c = useLang({ ko: { title: '제목' }, en: { title: 'Title' } });
// locale이 'ko'면 { title: '제목' }, 'en'이면 { title: 'Title' }
```

- `useLocale()`를 내부에서 호출하므로 `'use client'` 컴포넌트에서만 사용 가능
- 서버 컴포넌트에서는 `getServerLocale()`로 직접 분기할 것

## 사용처

- `apps/accessibility-zone/src/components/Sidebar.tsx` — `cn`
- `apps/accessibility-zone/src/components/SettingsPopover.tsx` — `cn`

## 유틸 추가 시

1. 성격에 맞는 파일(`cn`, `a11y`, `i18n`)에 추가하거나 새 파일 생성
2. 새 파일을 만들었다면 `src/index.ts`에 `export * from './새파일'` 추가
3. `@it-tech-blog/preferences` 외 새 외부 의존성이 생기면 `package.json`에 추가
