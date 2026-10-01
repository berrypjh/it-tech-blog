# it-tech-blog — 인터랙티브 기술 학습 블로그

> `CLAUDE.md`가 `@AGENTS.md`로 이 파일을 불러온다. 에이전트 지침의 단일 출처는 이 파일이다. 지침은 `CLAUDE.md`가 아니라 `AGENTS.md`에 쓴다.

복잡한 기술 개념을 예제와 실습형 콘텐츠로 풀어 보이는 블로그. 주제마다 독립된 Next.js 앱(존)을 두고, 호스트 앱 하나가 같은 origin으로 묶는다. 판단 기준은 **유지보수성 · 패키지 간 일관성 · 작고 검증 가능한 변경**이다.

## Repository Overview

Nx monorepo. package manager는 **pnpm**이고, target이 있으면 Nx target으로 실행한다. 화면 locale은 `ko` · `en` 두 가지(기본 `ko`).

| project                              | 위치                        | 스택             | 역할                                                                            |
| ------------------------------------ | --------------------------- | ---------------- | ------------------------------------------------------------------------------- |
| `@it-tech-blog/main-web`             | `apps/main-web`             | Next.js          | 호스트 앱 · 랜딩. 각 존으로 rewrite                                             |
| `@it-tech-blog/accessibility-zone`   | `apps/accessibility-zone`   | Next.js          | 웹 접근성 존 (`/accessibility`)                                                 |
| `@it-tech-blog/react-deep-dive-zone` | `apps/react-deep-dive-zone` | Next.js          | React 내부 동작 존 (`/react`)                                                   |
| `@it-tech-blog/llm-system-zone`      | `apps/llm-system-zone`      | Next.js          | LLM 시스템 존 (`/llm`)                                                          |
| `@it-tech-blog/storybook`            | `apps/storybook`            | Storybook · Vite | `packages/ui` 스토리 · axe 검사                                                 |
| `@it-tech-blog/*-e2e`                | `apps/*-e2e`                | Playwright       | 각 앱의 E2E                                                                     |
| `@it-tech-blog/ui`                   | `packages/ui`               | React            | 존 공용 셸 · 문서 컴포넌트 · 페이지 · 에러 · 아이콘 · 테마 브리지 · 존 전환 CSS |
| `@it-tech-blog/preferences`          | `packages/preferences`      | React · Next.js  | 테마 · 언어 · 글자 크기 · 폰트 · 모션 설정 (쿠키 기반)                          |
| `@it-tech-blog/utils`                | `packages/utils`            | TypeScript       | 대비율 계산 · `useLang`                                                         |

Nx 프로젝트가 아닌 곳도 있다.

| 위치                       | 내용                                                                                                                       |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `.claude/rules/`           | 프로젝트별 에이전트 지침(path rule)                                                                                        |
| `.claude/rules/_generated` | `pnpm harness:sync`가 berry-dev standards에서 만든 공통 rule. **손으로 고치지 않는다** — `.claude/standards.json`을 고친다 |
| `.claude/hooks/`           | Bash 실행 전 검사 hook(`guard-bash.mjs`) — 포트 바인딩 · secret 우회                                                       |
| `@berrypjh/*`              | shared-stack이 GitHub Packages로 배포하는 공용 UI · 디자인 토큰 · lint · format · tsconfig · commitlint                    |

**프로젝트별 지침은 `.claude/rules/<프로젝트>.md`에 있다.** Read로 파일을 열 때만 로드되고 Write · Bash로는 로드되지 않으니, 프로젝트를 고치기 전에 그 rule을 먼저 Read한다.

### 문서 자리

**한 사실은 한 자리에 둔다.** 같은 내용이 두 문서에 있으면 한쪽만 고쳐져 어긋난다. 자리는 아래 [문서](#문서) 표가 정한다.

- 앱 · 패키지에는 마크다운 문서(`README.md` · `AGENTS.md` · `CLAUDE.md` · 콘텐츠 원고)를 두지 않는다. 모두 private이라 npm에 실리지 않고, 루트 문서 · rule · 페이지 컴포넌트와 겹쳐 어긋난다
- 학습 콘텐츠의 원본은 페이지 컴포넌트다
- **개발 기록(`docs/records`)은 두지 않는다.** 결정이 바뀌면 그 결과를 지침 문서에 바로 반영한다

### Multi-Zones

`main-web`이 호스트로서 각 존의 경로를 rewrite한다. 정의는 `apps/main-web/next.config.js` 한 곳이다.

| 앱                     | 포트 | basePath         | 호스트 환경변수          |
| ---------------------- | ---- | ---------------- | ------------------------ |
| `main-web`             | 3000 | `/`              | —                        |
| `accessibility-zone`   | 4001 | `/accessibility` | `ACCESSIBILITY_DOMAIN`   |
| `react-deep-dive-zone` | 4002 | `/react`         | `REACT_DEEP_DIVE_DOMAIN` |
| `llm-system-zone`      | 4003 | `/llm`           | `LLM_SYSTEM_DOMAIN`      |

- **`ENABLED_ZONES`** — 비어 있으면(개발) 모든 존, 값이 있으면(`react,accessibility`) 그 존만 rewrite하고 랜딩에도 그 존의 토픽만 보인다
- **존 사이 이동은 페이지 전체 이동이다.** 존끼리 코드로 import하지 않는다
- **존 전환 애니메이션은 `@it-tech-blog/ui/zone-transition.css` 한 곳이 정의한다.** 모든 앱의 루트 layout이 import한다. 새 존도 import만 하면 된다
- 새 존을 더하면 함께 고친다 — `next.config.js` rewrite, `data/topics.tsx` 토픽 활성화, 루트 `package.json`의 `dev` · `build` · `start` · `preview`, 루트 `tsconfig.json` references, `main-web-e2e`의 존 목록 · webServer, 이 표

## Working Principles

탐색 · 재사용 · 작은 변경 · 기존 변경 보존 · 의존성 검토 · 검증 정직성은 `.claude/rules/_generated/core.md`에 있다. 여기에는 이 저장소 고유의 것만 적는다.

- **큰 architecture 가정을 조용히 하지 않는다.** 불명확하면 정확한 불확실 사항을 밝힌다
- 문제를 고칠 때는 **근본 원인을 먼저 증명한다.** 재현 → 증거 → 수정. 추측 workaround를 넣지 않는다
- 과도한 방어적 프로그래밍을 하지 않는다. 모듈 · 함수는 짧게, 이름은 분명하게
- 주석은 드물고 쓸모 있게. 줄 주석보다 docstring · API 문서를 쓴다. 코드 · 로그에 이모지를 쓰지 않는다
- JavaScript · TypeScript 함수는 **arrow function**을 기본으로 한다. 일반 함수가 분명히 나은 경우만 예외다
- 변경 뒤 쓰이지 않게 된 코드는 남기지 않고 지운다

### Package boundary

- **`@berrypjh/react-ui`에 있는 것을 `packages/`에 다시 만들지 않는다.** 예: className 병합은 `cx`를 직접 import한다
- **색 · 간격 등 디자인 값은 shared-stack 토큰(`--ds-*` · 앱별 react-ui 테마 짝)이 우선이다.** 존 값이 토큰과 미묘하게 달라도 토큰에 맞춘다. 토큰이 없는 재질 · 빛 표현과 ThemeProvider 밖 캔버스만 값으로 두고 이유를 주석에 남긴다
- **앱 사이 공유는 `packages/`로만 한다.** 여러 존이 함께 쓰는 셸 · 문서 컴포넌트 · 페이지 · 아이콘은 `packages/ui`, 사용자 설정은 `packages/preferences`에 둔다. 한 존만 쓰는 것은 그 존에 둔다
- **외부 패키지는 import하는 프로젝트의 `package.json`에 선언한다.** 루트에만 두고 hoisting에 기대지 않는다
- Nx plugin(`@nx/*`)은 개별 `pnpm add` 금지 — `nx add` 또는 `nx migrate`만 쓴다

## Validation

- 로직을 바꿨으면 test, 공개 타입을 바꿨으면 typecheck, export · build 동작을 바꿨으면 build를 돌린다
- UI 동작을 바꿨으면 가능한 범위에서 story · e2e가 덮는지 본다
- build 산출물을 손으로 고치지 않는다. 이미 있는 Nx target을 우회하지 않는다

이 저장소에 어떤 검사가 있고, 무엇을 **AI 세션에서 실행할 수 없는지**는 `.claude/harness.profile.md`에 있다. 화면을 바꿨으면 `/berry-dev:frontend-quality`, 완료를 보고하기 전에는 `/berry-dev:repo-verify`로 확인한다.

## Git Safety

명시적 요청 없이 하지 않는다.

- commit · push · force push · merge · branch 삭제 · tag
- `git reset --hard` · `git checkout --` · `git stash` · `git clean` — 사용자 변경을 지운다
- **CI · 릴리스 · workflow 파일 수정** — 작업이 자동화 · 배포 자체일 때만 고친다

금지와 확인 대상은 `.claude/settings.json`의 permissions가 강제한다. 커밋은 공용 plugin `berry-commit`의 `/berry-commit:commit-scope`로 하고, scope별로 사용자 승인을 받은 뒤에만 커밋한다.

## Memory

| 어디에                                   | 무엇을                                                        |
| ---------------------------------------- | ------------------------------------------------------------- |
| **committed** — `AGENTS.md` · `.claude/` | architecture · 안정적인 convention · 명령 · 팀 정책           |
| **auto memory**                          | 이 머신에서 반복되는 사실 (막히는 경로, 우회 방법, 개인 선호) |

architecture를 auto memory에만 두지 않는다. **secret과 credential은 어디에도 저장하지 않는다.**

## 문서

| 문서                                                     | 내용                                                        |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| [README.md](README.md)                                   | 구조 · 설치 · 실행 명령                                     |
| [.claude/harness.profile.md](.claude/harness.profile.md) | 검증 명령 · 영향 범위 · AI 세션 제약 · UI 역할              |
| [.claude/rules](.claude/rules/)                          | 프로젝트별 구조 · 규칙 · 검증                               |
| `.claude/standards.json` · `.claude/harness-source.json` | 쓸 공통 rule과 경로, 고정한 shared-stack 커밋 · plugin 버전 |
