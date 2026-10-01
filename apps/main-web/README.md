# @it-tech-blog/main-web

인터랙티브 랜딩 페이지. 멀티존 호스트 앱으로 `/accessibility/*` 요청을 `accessibility-zone`으로 프록시한다.

## 시작하기

```bash
pnpm dev:main
```

## 구조

```
src/
  app/
    layout.tsx          # root
    page.tsx            # 랜딩 페이지 — 서버 컴포넌트
    error.tsx           # 런타임 에러
    not-found.tsx       # 404
    global-error.tsx    # root layout 에러
  components/
    theme/                # Provider, 테마/언어 토글
    spatial-lab/          # 랜딩 Spatial Tech Lab
  data/
    topics.tsx            # 토픽 데이터 + ENABLED_ZONES 필터
```

## 의존성

| 패키지 | 용도 |
|---|---|
| [`@berrypjh/react-ui`](https://github.com/berrypjh/ui-source) | IconButton, 디자인 토큰 |
| `@it-tech-blog/preferences` | 테마·언어 상태 관리 |
| `@it-tech-blog/icons` | 아이콘 |
