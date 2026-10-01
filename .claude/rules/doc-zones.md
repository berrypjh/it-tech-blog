---
paths:
  - 'apps/accessibility-zone/**'
  - 'apps/llm-system-zone/**'
---

# 문서형 존 (`apps/accessibility-zone` · `apps/llm-system-zone`)

사이드바 + 본문 + 목차로 된 학습 존. 두 존은 구조가 같고 브랜드 · 테마 · 콘텐츠만 다르다. 포트 · basePath는 루트 `AGENTS.md`의 Multi-Zones에 있다.

| 존                   | 이름     | react-ui 테마 짝 |
| -------------------- | -------- | ---------------- |
| `accessibility-zone` | A11y Lab | frost · midnight |
| `llm-system-zone`    | LLM Lab  | ivory · charcoal |

## 구조

```
src/
├── app/
│   ├── layout.tsx           설정 Provider · uiThemes · AppShell 래핑
│   ├── global.css           @it-tech-blog/ui/doc.css import, 셸 변수 매핑, 캔버스
│   └── (<그룹>)/<페이지>/   route (예: (start)/intro)
├── components/
│   ├── shell/               AppShell · Sidebar — @it-tech-blog/ui DocSidebar에 존 브랜드 · 아이콘을 넘김
│   └── <그룹>/<페이지>/     페이지 본문 (예: start/intro)
└── data/                    nav-content.ts — navData · sidebarStrings
```

## 규칙

- **문서 컴포넌트(`DocLayout` · `DocH2` · `Callout` · `CodeBlock` · `DocTable` · `ReferenceList` 등)와 `DocSidebar`는 `@it-tech-blog/ui`가 소유한다.** 존에 다시 만들지 않는다. 본문 타이포그래피(`.doc-prose`)는 `@it-tech-blog/ui/doc.css`
- **페이지 컴포넌트는 `components/` 아래 navData 그룹 폴더로 나눈다.** `<그룹>/<페이지>/`에 페이지 본문 · `sections/` · `toc.ts`를 두고, 필요하면 `diagrams/` · `demos/`를 더한다
- **route 파일은 얇게 둔다.** `app/(<그룹>)/<페이지>/page.tsx`는 `getServerLocale()`로 locale을 읽어 페이지 컴포넌트에 넘기고 metadata만 갖는다
- **콘텐츠 페이지는 서버 컴포넌트다.** 한/영 분기는 서버에서 `locale` prop으로 한다. 상호작용이 필요한 데모만 클라이언트 컴포넌트로 두고 `useLang`(`@it-tech-blog/utils`)으로 분기한다
- **사이드바 메뉴는 `data/nav-content.ts`의 `navData` 한 곳에서 정한다.** 새 페이지는 navData 항목과 route를 함께 더한다
- **설정 다섯 가지를 모두 쓴다**(`PreferencesProviders`). DOM 속성은 `.claude/rules/preferences.md`
- **react-ui 테마는 `layout.tsx`의 `uiThemes` 한 곳이 정한다.** 색은 그 테마의 `--ds-*` 토큰만 쓴다. ThemeProvider 밖 캔버스(`--color-canvas`)만 테마의 `background.default` 값을 적는다
- **포커스 링은 `global.css`의 전역 `:focus-visible` 하나다**

## 검증

```bash
pnpm nx lint @it-tech-blog/<존>
pnpm nx e2e @it-tech-blog/<존>-e2e
```

존에는 typecheck target이 없다. `packages/ui`를 고쳤으면 `pnpm nx typecheck @it-tech-blog/ui`도 돌린다. `e2e` · `build`는 AI 세션에서 실행할 수 없다(`.claude/harness.profile.md`).
