# packages/utils

`@it-tech-blog/utils` 패키지. 앱 간에 공유하는 범용 유틸리티 모음.

## 파일 구조

- `src/a11y.ts` — WCAG 대비율 상수 (`WCAG`), 색상 대비 계산 (`getContrastRatio`)
- `src/i18n.ts` — locale 기반 문자열 선택 hook (`useLang`)
- `src/index.ts` — 전체 re-export

## 각 유틸 설명

### className 병합

`@berrypjh/react-ui`의 `cx`를 직접 import한다. 이 패키지에 두지 않는다.

```ts
import { cx } from '@berrypjh/react-ui';

cx('base-class', isActive && 'active', { disabled: isDisabled });
```

react-ui가 공통 기준이다. react-ui에 있는 유틸은 여기에 다시 만들지 않는다.

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

## 유틸 추가 시

0. `@berrypjh/react-ui`에 이미 있는지 먼저 확인 (`npx @berrypjh/react-ui find <이름>`)
1. 성격에 맞는 파일(`a11y`, `i18n`)에 추가하거나 새 파일 생성
2. 새 파일을 만들었다면 `src/index.ts`에 `export * from './새파일'` 추가
3. `@it-tech-blog/preferences` 외 새 외부 의존성이 생기면 `package.json`에 추가
