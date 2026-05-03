# @it-tech-blog/icons

프로젝트 전체에서 공유하는 SVG 아이콘 컴포넌트 패키지.

## 구조

```
src/
  theme.tsx    — SunIcon, MoonIcon
  tech.tsx     — 기술 토픽 아이콘 (AccessibilityIcon, ShieldIcon, GitBranchIcon 등)
  general.tsx  — 범용 아이콘 (CloudIcon, BrainIcon, CodeIcon 등)
  index.ts     — 전체 re-export
```

## 사용법

```tsx
import { SunIcon, AccessibilityIcon } from '@it-tech-blog/icons';
```
