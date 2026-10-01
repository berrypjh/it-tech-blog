# Harness profile

berry-dev의 generic rule · skill(`repo-verify` · `frontend-quality`)이 읽는 it-tech-blog 사실이다. target은 여기 적지 않고 `nx show project <이름> --json`으로 확인한다.

## 검증

### 영향 범위

- Nx workspace다([nx.json](../nx.json)). 영향은 `nx show projects --affected --files=<파일>`로 묻는다
- target 구성은 프로젝트마다 다르다. 없는 target을 가정하지 않는다
- `packages/*`는 build 없이 `src`를 바로 내보낸다(`exports` → `./src/index.ts`). 패키지를 고치면 그 패키지를 쓰는 앱이 affected로 잡힌다

### 프로젝트 밖 경로

| 바꾼 곳                                                  | 검사                                                                                             |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `.claude/hooks/guard-bash.mjs`                           | 자동 테스트 없음. 막아야 할 명령 · 통과해야 할 명령을 직접 넣어 확인                             |
| `.claude/**` · 루트 설정                                 | `pnpm format:check`. `README.md` · `AGENTS.md` · `CLAUDE.md`는 `.prettierignore` 대상            |
| `.claude/standards.json` · `.claude/rules/_generated/**` | `pnpm harness:check` — 생성 rule이 고정한 shared-stack 원본과 같은지. 다르면 `pnpm harness:sync` |
| `eslint.config.mjs`(루트)                                | `pnpm lint` — 모든 프로젝트가 루트 설정을 상속                                                   |

### 의존 순서

- `pnpm storybook:a11y`는 `pnpm build-storybook`이 만든 `apps/storybook/storybook-static`을 띄운다. 먼저 build-storybook

### build 종류

- 앱 `build`는 로컬 `next build`다. 배포 명령은 이 저장소에 없다

### AI 세션에서 실행할 수 없는 것

포트 바인딩이 막혀 멈추거나 실패한다. 사용자에게 실행을 요청하고, 결과를 받기 전에는 unsupported로 보고한다.

- dev 서버 · preview — `dev` · `start` target, `pnpm dev*` · `pnpm start` · `pnpm preview`
- 앱 `build` — Turbopack의 PostCSS 워커가 포트를 연다
- Playwright e2e — `*-e2e`의 `e2e`, `pnpm e2e`
- Storybook — `pnpm storybook` · `pnpm storybook:a11y`
- 판정 목록은 [hooks/guard-bash.mjs](./hooks/guard-bash.mjs)의 `PORT_BOUND`다. 앱 `build`는 목록에 없어 실행하면 실패로 끝난다

## UI

`frontend-quality`가 이 절을 읽는다. 컴포넌트 · prop · 토큰 목록은 패키지 카탈로그가 정답이다.

### 역할

| 경로                            | 역할       | 따를 문서                                         |
| ------------------------------- | ---------- | ------------------------------------------------- |
| `packages/ui`                   | maintainer | 루트 [AGENTS.md](../AGENTS.md)의 Package boundary |
| `apps/main-web` · `apps/*-zone` | consumer   | `.claude/rules/` 의 그 앱 rule                    |

- `@berrypjh/react-ui`는 이 저장소에서 consumer로만 쓴다. 고칠 일이 있으면 shared-stack에 요청한다

### consumer 조회

- `@berrypjh/react-ui`를 선언한 앱 · 패키지에 bin이 연결돼 있다 — `pnpm --dir <앱> exec berry-react-ui find <query>` · `api <Symbol>` · `token <path>`
- 사용 규칙 · 함정은 설치된 패키지의 `agents` export(`node_modules/@berrypjh/react-ui/dist/AGENTS.md`)다

### locale 과 제품 정책

- locale — `ko` · `en`. 화면 문구는 locale별 객체(`{ ko, en }`)로 둔다
- 셸 · 화면 폭 — 셸 전체 최대 1440px. 최소 터치 크기 · 완료 문구 정책은 없음

### 확인 수단

| 방식      | 있는 것                                         | 이 세션에서                    |
| --------- | ----------------------------------------------- | ------------------------------ |
| 자동      | `main-web` · `ui` · `utils` test(Vitest, jsdom) | 실행 가능                      |
| 자동(axe) | `pnpm storybook:a11y` — Storybook axe 검사      | 포트 — unsupported, 사용자에게 |
| 실제 web  | `*-e2e` Playwright, Storybook                   | 포트 — unsupported, 사용자에게 |

## 한국어 화면 (ko-ui)

- 어미 — 정하지 않음. 고치는 화면의 기존 어미를 따른다
- 날짜 · 금액 · 전화번호 형식 — 쓰는 화면 없음
- 최소 터치 타깃 · line-height · 좁은 화면 기준 — 정하지 않음
- 어절 보호 방식 — 정하지 않음
