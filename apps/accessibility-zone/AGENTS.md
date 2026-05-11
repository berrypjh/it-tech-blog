# accessibility-zone

웹 접근성 학습 플랫폼. 사이드바 기반 문서형 앱.

- **포트**: 4001
- **basePath**: `/accessibility`
- **assetPrefix**: `/accessibility-static`
- **첫 방문 시**: `/` → `/accessibility` → `/accessibility/intro` (redirect 체인)

## 라우팅 구조

```
app/
├── layout.tsx          # root — providers, AppShell 래핑, html 속성
├── page.tsx            # redirect('/intro')
├── not-found.tsx       # URL 미매칭 404
├── global-error.tsx    # root layout 에러 — inline style만 사용
├── intro/
├── contrast/
└── keyboard/
```

모든 페이지가 동일한 AppShell(사이드바 + 메인 영역) 레이아웃을 공유하므로 root `layout.tsx`에서 일괄 래핑한다. `global-error.tsx`는 root layout 자체가 깨졌을 때 fallback이라 AppShell을 거치지 않는다.

## 주요 컴포넌트

| 컴포넌트 | 위치 | 역할 |
|---|---|---|
| `AppShell` | `components/shell` | 전체 레이아웃 — skip link, 사이드바, 모바일 헤더, `<main>` |
| `Sidebar` | `components/shell` | 좌측 네비게이션 — 진행률, 설정 포함 |
| `SettingsPopover` | `components/shell` | 설정 패널 — 테마/언어/글자크기/폰트/모션 |
| `PageContainer` | `components/page` | 본문 래퍼 — `max-w-2xl` (기본) / `max-w-3xl` (wide) |
| `PageSection` | `components/page` | 섹션 단위 — `<section aria-labelledby>` |

## 페이지 작성 패턴

인터랙션이 없는 콘텐츠 페이지는 서버 컴포넌트로 작성한다. `getServerLocale()`로 쿠키를 읽어 한/영 콘텐츠를 분기한다.

```tsx
import { getServerLocale } from '@it-tech-blog/preferences/server';
import { PageContainer } from '@/components/page';
import { PageSection } from '@/components/page';

const content = {
  ko: { title: '...', sectionTitle: '...' },
  en: { title: '...', sectionTitle: '...' },
};

export const generateMetadata = async () => {
  const locale = await getServerLocale();
  const c = content[locale as 'ko' | 'en'] ?? content.ko;
  return { title: c.title };
};

const SomePage = async () => {
  const locale = await getServerLocale();
  const c = content[locale as 'ko' | 'en'] ?? content.ko;
  return (
    <PageContainer>
      <h1>{c.title}</h1>
      <PageSection id="section-id" title={c.sectionTitle}>
        ...
      </PageSection>
    </PageContainer>
  );
};

export default SomePage;
```

인터랙션이 필요한 경우에만 클라이언트 컴포넌트를 사용하고, `useLang`(`@it-tech-blog/utils`)으로 한/영을 분기한다.

```tsx
'use client';
import { useLang } from '@it-tech-blog/utils';

const c = useLang({ ko: { label: '확인' }, en: { label: 'Confirm' } });
```

## 설정 시스템

`@it-tech-blog/preferences`의 5개 설정을 모두 사용한다.

`html` 요소 속성:
- `class` — `dark` | `light`
- `lang` — `ko` | `en`
- `data-font-size` — `sm` | `lg` (md는 기본값이라 생략)
- `data-font` — `serif` | `mono` (sans는 기본값이라 생략)
- `data-motion` — `reduce` (default는 생략)

## CSS 구조 (global.css)

```
:focus-visible          # 전역 포커스 링 (emerald-500)
html[data-font-size]    # 글자 크기 스케일 (rem 기반)
html[data-font]         # 폰트 패밀리 (--font-family 변수)
html[data-motion]       # 모션 비활성화
:root / .dark           # 색상 토큰 (--color-*)
body                    # 캔버스 배경 (1440px 초과 영역)
```

색상 토큰은 Tailwind `extend.colors`에 연결되어 있다: `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`.

## 접근성 구현 현황

| 항목 | 위치 |
|---|---|
| Skip link | `AppShell.tsx` 최상단 |
| `:focus-visible` 전역 스타일 | `global.css` |
| ARIA landmarks | `AppShell.tsx` (`<main>`, `<header>`), `Sidebar.tsx` (`<aside>`, `<nav>`) |
| 섹션 레이블 | `PageSection.tsx` (`aria-labelledby`) |
| 모션 제어 | `MotionProvider` + `data-motion` CSS |
| 다크모드 | `ThemeProvider` + `html.className` |

## 최대 너비

- AppShell 전체: `max-w-[1440px] mx-auto`
- 본문 콘텐츠: `max-w-2xl` (기본) / `max-w-3xl` (wide prop)
- 1440px 초과 영역 배경: `--color-canvas` (라이트: `#f1f5f9`, 다크: `#0d1117`)

## 참고 문서

- `docs/preferences.md` — 설정 시스템 상세
- `docs/a11y/` — 접근성 구현 상세
- `docs/multi-zone.md` — 멀티존 아키텍처
- `docs/error-pages.md` — 에러/404 페이지 전략
