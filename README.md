# it-tech-blog

복잡한 기술 개념을 예제와 실습형 콘텐츠로 풀어 보이는 블로그. 주제마다 독립된 Next.js 앱(존)을 두고, 호스트 앱 `main-web`이 같은 origin으로 묶는다(Next.js Multi-Zones).

## 구조

| 앱                     | 포트 | 경로             |
| ---------------------- | ---- | ---------------- |
| `main-web`             | 3000 | `/` (호스트)     |
| `accessibility-zone`   | 4001 | `/accessibility` |
| `react-deep-dive-zone` | 4002 | `/react`         |
| `llm-system-zone`      | 4003 | `/llm`           |

```
apps/
├── main-web                 호스트 앱 · 랜딩
├── accessibility-zone       웹 접근성 존
├── react-deep-dive-zone     React 내부 동작 존
├── llm-system-zone          LLM 시스템 존
├── storybook                packages/ui 스토리 · axe 검사
└── *-e2e                    각 앱의 E2E (Playwright)
packages/
├── ui                       존 공용 셸 · 문서 컴포넌트 · 페이지 · 아이콘 · 테마 브리지 · 존 전환
├── preferences              테마 · 언어 · 글자 크기 · 폰트 · 모션 설정
└── utils                    대비율 계산 · useLang
```

## 시작하기

공용 UI · lint · format · tsconfig 설정은 GitHub Packages의 `@berrypjh/*` 패키지에서 온다. **토큰이 없으면 `pnpm install`이 401로 실패한다.**

```bash
export GITHUB_TOKEN=<read:packages 권한이 있는 PAT>
pnpm install
```

```bash
pnpm dev                     # 모든 앱 — http://localhost:3000
pnpm dev:main                # main-web만
pnpm dev:a11y                # accessibility-zone만
pnpm dev:react-deep-dive     # react-deep-dive-zone만
pnpm dev:llm                 # llm-system-zone만
pnpm preview                 # 빌드 후 프로덕션 모드로 실행
pnpm storybook               # Storybook
```

## 검증

```bash
pnpm lint && pnpm typecheck && pnpm test && pnpm build
pnpm format:check
pnpm e2e              # Playwright (브라우저 필요)
pnpm storybook:a11y   # Storybook axe 검사. build-storybook이 먼저 필요
pnpm harness:check    # 공통 rule이 shared-stack 원본과 같은지 (../shared-stack checkout 필요)
```

## 라이선스

MIT
