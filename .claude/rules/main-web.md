---
paths:
  - 'apps/main-web/**'
---

# main-web (`apps/main-web`)

멀티존의 호스트 앱이자 인터랙티브 랜딩(Spatial Tech Lab). 존 rewrite는 `next.config.js`, 존 표는 루트 `AGENTS.md`의 Multi-Zones에 있다.

## 구조

```
src/
├── app/                     layout · page(랜딩) · not-found · error · global-error
├── components/
│   ├── theme/               ThemeClientProvider, ThemeToggle
│   └── spatial-lab/         랜딩 Spatial Tech Lab
└── data/                    토픽 데이터 (TOPICS, getVisibleTopics)
```

## 규칙

- **그룹 폴더는 `kebab-case`, 컴포넌트 파일은 `PascalCase`다.** 그룹 폴더마다 `index.ts` barrel(named export)을 두고, import는 alias(`@/components/theme`)로 한다
- **랜딩의 클라이언트 경계는 `SpatialTechLab` 하나다.** 토픽 내비게이션과 공간 표현이 활성 토픽 상태를 공유한다
- **토픽 도메인 데이터는 `data/topics.tsx`, 스테이지 배치는 `spatial-lab.layout.ts`다.** 둘을 섞지 않는다. `active` 토픽은 zone · href, `planned` 토픽은 링크 없이 "준비 중" 배지
- **장식 SVG(`ModuleArt` · `LabScene`)는 `aria-hidden`이다**
- **`ENABLED_ZONES`가 있으면 `getVisibleTopics()`는 그 존의 활성 토픽만 돌려준다.** 준비 중 토픽도 숨긴다
- **설정은 `theme` · `locale` 두 가지만 쓴다.** Provider는 `ThemeClientProvider` 한 곳에서 감싼다
- **react-ui 테마는 `ThemeClientProvider`의 `uiThemes`(frost · midnight)가 정한다.** 랜딩 글자 · 강조색은 `--ds-*` 토큰으로 쓰고, 유리 · 그림자 · 배경 빛 같은 재질 값만 `spatial-lab.css` · `lab-background.css`에 둔다
- **아이콘은 `@it-tech-blog/ui`에서 가져온다**

## 랜딩 반응형

- **같은 DOM(`<nav>` > `<ul>` > 모듈)을 CSS(`spatial-lab.css`)만으로 재배치한다.** JS 뷰포트 감지를 넣지 않는다
- 화면 크기에 따라 카드 스택 → 2.5D 덱 → 공간 스테이지 → 풀 디테일 4단계. 기준값은 `spatial-lab.css`가 정한다
- 스테이지 크기는 컨테이너 쿼리 단위(`cqw` · `cqh`)로 잡는다. 낮은 높이에서도 제목과 겹치지 않게 하기 위해서다
- `prefers-reduced-motion: reduce`면 기울기 · 등장 · 커넥터 흐름 애니메이션을 끈다

## 검증

```bash
pnpm nx test @it-tech-blog/main-web
pnpm nx typecheck @it-tech-blog/main-web
pnpm nx e2e @it-tech-blog/main-web-e2e     # 반응형 불변식 · 키보드 도달 · 존 프록시
```

`e2e` · `build`는 AI 세션에서 실행할 수 없다(`.claude/harness.profile.md`).
