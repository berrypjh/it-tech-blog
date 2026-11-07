---
paths:
  - 'packages/*/package.json'
  - 'packages/preferences/src/server/**'
  - 'tools/pack-shared-packages.mjs'
  - '.github/workflows/release-shared-packages.yml'
---

# 공유 패키지 외부 배포

`packages/ui` · `preferences` · `utils`는 워크스페이스 안에서는 `@it-tech-blog/*`(`private: true`, `workspace:*`)이고, 다른 저장소에는 `@berrypjh/it-tech-blog-*`로 배포한다. 구현 원본은 `packages/*/src` 하나다.

## 패키지

| import 이름 (양쪽 동일)     | 배포 이름                            | subpath                                                        |
| --------------------------- | ------------------------------------ | -------------------------------------------------------------- |
| `@it-tech-blog/ui`          | `@berrypjh/it-tech-blog-ui`          | `.` · `./doc.css` · `./zone-transition.css`                    |
| `@it-tech-blog/preferences` | `@berrypjh/it-tech-blog-preferences` | `.`(client · `ThemeDetectionScript`) · `./server`(server-only) |
| `@it-tech-blog/utils`       | `@berrypjh/it-tech-blog-utils`       | `.`                                                            |

- **TS 소스 그대로 배포한다.** 파일별 `'use client'`가 남는다. 번들링 빌드를 넣지 않는다
- **세 패키지로 나눈다.** ui가 preferences · utils를 bare 이름으로 import하므로 한 패키지로 묶으면 import 재작성 빌드가 필요하다
- `next` · `react` · `@berrypjh/react-ui`는 `peerDependencies`(+ 워크스페이스용 같은 범위의 `devDependencies`). context(테마 · locale · 라우터)가 한 벌이어야 한다
- `preferences/server` 첫 줄은 `import 'server-only'`. Next가 내장 처리하므로 `server-only` 패키지는 설치하지 않는다

## 패킹

```bash
pnpm pack:shared   # → dist/shared-packages/*.tgz
```

`tools/pack-shared-packages.mjs`가 staging 폴더에 배포용 manifest를 만든다. 원본 `package.json`의 `private: true`는 지우지 않는다 — 실수로 `@it-tech-blog/*`가 배포되지 않게 한다.

- 내부 의존 `workspace:*` → `npm:@berrypjh/it-tech-blog-<x>@<정확한 버전>`
- `files: ["src"]` + 루트 `LICENSE`, spec · stories 제외, `sideEffects: ["**/*.css"]`, `publishConfig.registry`는 GitHub Packages
- 배포 manifest에 `workspace:` · alias 아닌 `@it-tech-blog/*` 의존이 남으면 실패한다. npmjs의 `@it-tech-blog` 스코프는 비어 있어, 남으면 소비자가 npmjs에서 받으려 한다
- 버전은 `packages/*/package.json`의 `version`. 세 패키지를 같은 버전으로 함께 올린다

## 소비 계약 (다른 저장소)

```jsonc
// package.json — exact pin
"@it-tech-blog/ui": "npm:@berrypjh/it-tech-blog-ui@0.1.0",
"@it-tech-blog/preferences": "npm:@berrypjh/it-tech-blog-preferences@0.1.0",
"@it-tech-blog/utils": "npm:@berrypjh/it-tech-blog-utils@0.1.0",
"@berrypjh/react-ui": "1.2.0", "next": "16.1.7", "react": "19.2.5", "react-dom": "19.2.5", "lucide-react": "^1.16.0"
```

- **`transpilePackages`에는 배포 이름을 쓴다** — `['@berrypjh/it-tech-blog-ui', '@berrypjh/it-tech-blog-preferences', '@berrypjh/it-tech-blog-utils']`. Next는 symlink를 실제 경로로 풀어 매칭하므로 alias 이름(`@it-tech-blog/*`)으로는 잡히지 않는다(Turbopack "Unknown module type", webpack JSX parse 오류)
- Tailwind `content`에 `./node_modules/@it-tech-blog/ui/src/**/*.{ts,tsx}`
- CSS — `@berrypjh/react-ui/styles.css` · `@it-tech-blog/ui/zone-transition.css`는 layout에서, `@it-tech-blog/ui/doc.css`는 `global.css`에서 import
- 폰트 · `html[data-*]` 스타일 · focus 스타일은 아직 각 앱 `global.css`에 있다. 패키지가 주지 않는다
- 쿠키 이름 · 값(`theme` · `locale` · `fontSize` · `fontFamily` · `motion`)은 Public 앱과 같아야 한다. 바꾸면 모든 존이 함께 바뀐다

## 배포

`.github/workflows/release-shared-packages.yml` — 태그 `shared-packages@<version>` push 때만 패킹 · publish한다. `main` push로는 배포하지 않는다.

1. 세 `packages/*/package.json`의 `version`을 함께 올린다 (이미 나간 버전은 다시 쓸 수 없다)
2. 로컬 검증 — 영향 프로젝트 lint · typecheck · test, `pnpm pack:shared`, 외부 소비자 설치 · typecheck · build
3. 커밋 뒤 `git tag shared-packages@<version>` → 태그 push (사용자 승인)
4. workflow가 태그 버전과 `version`이 같은지 확인(`--expect-version`)하고 `utils → preferences → ui` 순서로 publish한 뒤, 공유 패키지 경로의 커밋으로 GitHub Release를 만든다

- 토큰은 workflow의 `GITHUB_TOKEN`(`contents: write` — Release 생성 · `packages: write`)뿐이다. PAT secret을 두지 않는다. 패키지는 `repository` 필드로 이 저장소에 연결된다
- 수동 배포는 `write:packages` classic PAT를 사용자 수준 `~/.npmrc`에만 두고 `npm publish <tgz>`. 프로젝트 `.npmrc` · 로그 · 명령 인자에 토큰 값을 쓰지 않는다
- 소비자 읽기는 `read:packages`. GitHub Packages는 public 패키지도 설치에 토큰이 필요하다. 다른 저장소의 Actions가 읽으려면 패키지 설정에서 그 저장소에 읽기 권한을 준다
