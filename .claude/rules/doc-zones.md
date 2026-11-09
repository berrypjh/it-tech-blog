---
paths:
  - 'apps/accessibility-zone/**'
  - 'apps/llm-system-zone/**'
---

# 문서형 존 (`apps/accessibility-zone` · `apps/llm-system-zone`)

사이드바 + 본문 + 목차로 된 학습 존. 두 존은 구조가 같고 브랜드 · 테마 · 콘텐츠만 다르다. 포트 · basePath는 루트 `AGENTS.md`의 Multi-Zones에 있다.

| 존                   | 이름       | react-ui 테마 짝 |
| -------------------- | ---------- | ---------------- |
| `accessibility-zone` | A11y Lab   | frost · midnight |
| `llm-system-zone`    | LLM System | ivory · charcoal |

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

- **문서 컴포넌트(`DocLayout` · `DocPageHeader` · `DocH2` · `Callout` · `CodeBlock` · `DocTable` · `ReferenceList` · `SummarySection` · `ReferencesSection` · `PracticeFrame` · `tocOf` · `createPageLinks` 등)와 `DocSidebar`는 `@it-tech-blog/ui`가 소유한다.** 존에 다시 만들지 않는다. 본문 타이포그래피(`.doc-prose`)는 `@it-tech-blog/ui/doc.css`
- **페이지 컴포넌트는 `components/` 아래 navData 그룹 폴더로 나눈다.** `<그룹>/<페이지>/`에 페이지 본문 · `sections/` · `toc.ts`를 두고, 필요하면 `diagrams/` · `demos/`를 더한다
- **route 파일은 얇게 둔다.** `app/(<그룹>)/<페이지>/page.tsx`는 `getServerLocale()`로 locale을 읽어 페이지 컴포넌트에 넘기고 metadata만 갖는다
- **콘텐츠 페이지는 서버 컴포넌트다.** 한/영 분기는 서버에서 `locale` prop으로 한다. 상호작용이 필요한 데모만 클라이언트 컴포넌트로 두고 `useLang`(`@it-tech-blog/utils`)으로 분기한다
- **사이드바 메뉴는 `data/nav-content.ts`의 `navData` 한 곳에서 정한다.** 새 페이지는 navData 항목과 route를 함께 더한다
- **페이지는 같은 뼈대를 따른다.** `DocPageHeader` → 본문 섹션 → `SummarySection` → `ReferencesSection` → `NextPage`(장의 마지막 페이지는 없음). 이전 페이지 링크와 별도의 "흔한 오해" · 장 마무리 섹션은 두지 않고, 장을 닫는 과제는 "최종 과업: …" 섹션으로 둔다
- **번호는 `01.1` 형식 하나다.** 메뉴 라벨 앞에 붙이고(그룹 제목에는 붙이지 않음), 머리말 eyebrow는 `01장 · 1 / 7` · `Chapter 01 · 1 of 7`, 본문 참조는 `01.4에서 …`나 `PageLink`로 쓴다. "장"은 장, "페이지"는 페이지를 뜻한다
- **실습 데모는 `PracticeFrame`(`실습` · `Exercise`)으로 감싸고 머리말에 `practices`로 수를 적는다.** 풀이는 `풀이 보기`로 펼친다. 예시 데이터는 "교육 예시" · "가상의"로 밝힌다
- **설정 다섯 가지를 모두 쓴다**(`PreferencesProviders`). DOM 속성은 `.claude/rules/preferences.md`
- **react-ui 테마는 `layout.tsx`의 `uiThemes` 한 곳이 정한다.** 색은 그 테마의 `--ds-*` 토큰만 쓴다. ThemeProvider 밖 캔버스(`--color-canvas`)만 테마의 `background.default` 값을 적는다
- **포커스 링은 `global.css`의 전역 `:focus-visible` 하나다**

## 검증

```bash
pnpm nx lint @it-tech-blog/<존>
pnpm nx e2e @it-tech-blog/<존>-e2e
```

존에는 typecheck target이 없다. `llm-system-zone`의 `test`는 Node 내장 러너(`node --test`)로 `src/**/*.spec.mjs`를 돌린다. 포트 없이 순수 로직만 검사하므로, 계산 · 판정 모듈은 Node가 타입을 지울 수 있는 TypeScript로 두고 화면 컴포넌트와 분리한다. 다른 모듈은 `import type`(경로에 `.ts` 확장자)으로만 가져온다. `packages/ui`를 고쳤으면 `pnpm nx typecheck @it-tech-blog/ui`도 돌린다. `e2e` · `build`는 AI 세션에서 실행할 수 없다(`.claude/harness.profile.md`).
