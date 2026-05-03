# AGENTS.md

> 참고: `CLAUDE.md`는 이 파일을 참조한다. 두 파일은 동일한 가이드를 공유한다.

## 목적

이 저장소는 Next.js 기반 IT 테크 블로그 플랫폼을 위한 Nx 모노레포다.

에이전트는 다음을 최우선으로 한다:

- 유지보수성
- 패키지 간 일관성
- 작고 검증 가능한 변경

## 워크스페이스 개요

### 멀티존 아키텍처

이 프로젝트는 **Next.js Multi-Zones**를 사용한다. `main-web`이 호스트로서 각 존의 라우트를 프록시한다.

| 앱 | 포트 | 경로 접두사 |
|---|---|---|
| `main-web` | 3000 | `/` (호스트) |
| `accessibility-zone` | 4001 | `/accessibility` |

`main-web`은 `ACCESSIBILITY_DOMAIN` 환경변수(기본값: `http://localhost:4001`)를 통해 `/accessibility/*`와 `/accessibility-static/*`를 `accessibility-zone`으로 rewrite한다.

### 디렉터리 구조

- `apps/main-web` — 호스트 Next.js 앱 (각 존으로 rewrite)
- `apps/main-web-e2e` — main-web Playwright E2E 테스트
- `apps/accessibility-zone` — 접근성 특화 존 (basePath: `/accessibility`)
- `apps/accessibility-zone-e2e` — accessibility-zone Playwright E2E 테스트

### Nx 프로젝트

Nx 플러그인(`@nx/next`, `@nx/eslint`, `@nx/playwright`, `@nx/js/typescript`)이 감지하는 프로젝트:

- `@it-tech-blog/main-web`
- `@it-tech-blog/accessibility-zone`
- `@it-tech-blog/main-web-e2e`
- `@it-tech-blog/accessibility-zone-e2e`

## 작업 방식

### 기본 작업 스타일

- 점진적으로 작업한다.
- 가장 작은 유효한 변경을 먼저 만든다.
- 범위를 넓히기 전에 각 단계를 검증한다.
- 새로운 추상화를 도입하기보다 기존 패턴을 수정하는 방식을 선호한다.
- 작업이 명시적으로 요구하지 않는 한 광범위한 리팩토링은 피한다.

### 요구사항이 불명확할 때

- 추측하기 전에 인근 코드와 문서를 확인한다.
- 그래도 불명확하면 정확한 불확실 사항을 명시한다.
- 큰 아키텍처 가정을 암묵적으로 적용하지 않는다.

## 패키지 관리 및 태스크 실행

### 툴링

- 패키지 관리는 `pnpm`을 사용한다.
- 가능하면 `nx` 타겟을 사용한다.

### 루트 스크립트

```bash
pnpm dev               # main-web + accessibility-zone 동시 실행
pnpm dev:main          # main-web만 실행 (포트 3000)
pnpm dev:a11y          # accessibility-zone만 실행 (포트 4001)
pnpm build             # main-web + accessibility-zone 빌드
pnpm build:main        # main-web만 빌드
pnpm build:a11y        # accessibility-zone만 빌드
pnpm lint              # 전체 프로젝트 린트
pnpm typecheck         # 전체 프로젝트 타입체크
pnpm format            # prettier --write
pnpm format:check      # prettier --check
pnpm e2e               # 전체 Playwright E2E 테스트 실행
```

### 의존성 원칙

- 워크스페이스에서 이미 사용 중인 의존성을 우선 활용한다.
- 새 의존성은 명확한 이유가 있을 때만 추가한다.

## 코딩 규칙

### 일반

- 짧고 집중된 모듈과 함수를 선호한다.
- 명확한 이름을 사용한다.
- 영리함보다 명확성을 우선한다.
- 주석은 최소화하고 유용할 때만 사용한다.
- 인라인 주석보다 docstring이나 API 문서화를 선호한다.
- 특별한 이유가 없으면 일반 함수보다 화살표 함수를 선호한다.

## 검증 규칙

### 기본 규칙

의미 있는 동작 변경은 반드시 검증한다.

### 검증 순서

1. 가장 작은 관련 검사를 먼저 실행한다.
2. 패키지 수준 검사를 실행한다.
3. 필요할 때만 전체 워크스페이스 검사를 실행한다.

### 검증 예시

- 로직 변경 시: 테스트 실행
- 공개 타입 변경 시: 타입체크 실행
- export/빌드 동작 변경 시: 빌드 실행
- UI 동작 변경 시: 실용적인 경우 스토리/데모 커버리지 확인

## 하지 말아야 할 것

- 빌드 결과물을 수동으로 수정하지 않는다.
- 이미 존재하는 Nx 타겟을 우회하지 않는다.
- 자동화나 배포와 관련된 작업이 아니면 CI, 릴리스, 워크플로우 파일을 변경하지 않는다.
- 요청된 작업에 집중된 변경에 대규모 리팩토링을 끼워 넣지 않는다.
