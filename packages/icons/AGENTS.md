# packages/icons

`@it-tech-blog/icons` 패키지. 프로젝트 전체에서 공유하는 SVG 아이콘 컴포넌트 모음.

## 파일 구조

- `src/theme.tsx` — 테마 토글용 아이콘 (SunIcon, MoonIcon)
- `src/tech.tsx` — 기술 토픽 아이콘. `apps/main-web`의 `TOPICS` 데이터에서 사용
- `src/general.tsx` — 범용 아이콘. 현재 특정 페이지에 묶이지 않은 아이콘들
- `src/index.ts` — 위 세 파일을 전부 re-export

## 사용처

- `apps/main-web/src/components/icons.tsx` — `export * from '@it-tech-blog/icons'`로 re-export (기존 상대경로 import 호환 유지)
- `apps/main-web/src/components/topics.tsx` — tech.tsx 아이콘 직접 사용
- `apps/main-web/src/components/theme-toggle.tsx` — SunIcon, MoonIcon 사용

## 아이콘 추가 시

1. 카테고리에 맞는 파일(`theme`, `tech`, `general`)에 컴포넌트 추가
2. 새 카테고리가 필요하면 파일 생성 후 `index.ts`에 `export * from './새파일'` 추가
3. `package.json` exports는 수정 불필요
