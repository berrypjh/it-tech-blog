# IT Tech Blog

**Nx** 기반 IT 기술 블로그 멀티존 모노레포입니다.

## 기술 스택

| 분류 | 기술 |
| --- | --- |
| **Monorepo & Build** | ![Nx](https://img.shields.io/badge/Nx-143055?style=flat-square&logo=nx&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white) |
| **Web** | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)  ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) |
| **Testing** | ![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=flat-square&logo=playwright&logoColor=white) |

## 앱 구조

```text
apps/
├── main-web/             # 메인 페이지
├── main-web-e2e/         # 메인 페이지 E2E 테스트
├── accessibility-zone/   # 접근성 페이지
└── accessibility-zone-e2e/ # 접근성 페이지 E2E 테스트
```

## 시작하기

```bash
# 의존성 설치
pnpm install

# 전체 개발 서버 실행
pnpm dev

# 메인 웹 개발 서버만 실행
pnpm dev:main

# 접근성 앱 개발 서버만 실행
pnpm dev:a11y
```
