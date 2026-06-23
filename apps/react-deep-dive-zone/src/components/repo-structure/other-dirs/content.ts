import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IconName =
  | 'folder'
  | 'flask'
  | 'terminal'
  | 'package'
  | 'zap'
  | 'bug'
  | 'server'
  | 'sparkles'
  | 'gitBranch'
  | 'fileCode'
  | 'shieldCheck'
  | 'cuboid';

export type HeroBranchNode = {
  id: 'fixtures' | 'scripts' | 'compiler';
  name: string;
  subtitle: string;
  tone: ToneKey;
  icon: IconName;
};

export type ComparisonCard = {
  id: 'fixtures' | 'scripts' | 'compiler';
  name: string;
  subtitle: string;
  description: string;
  importanceLabel: string;
  /** 1 ~ 3 — 채워진 별 갯수 */
  rating: 1 | 2 | 3;
  tone: ToneKey;
  icon: IconName;
};

export type DeepDiveCard = {
  id: string;
  name: string;
  description: string;
  badge: string;
  icon: IconName;
};

export type ChoiceCard = {
  id: 'fixtures' | 'scripts' | 'compiler';
  question: string;
  destination: string;
  tone: ToneKey;
  icon: IconName;
};

export type SurroundingContent = {
  hero: {
    badge: string;
    title: { lead: string; tail: string };
    description: string;
    locationPill: string;
    rootLabel: string;
    rootCaption: string;
    branches: HeroBranchNode[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ComparisonCard[];
  };
  fixtures: {
    eyebrow: string;
    title: string;
    cards: DeepDiveCard[];
    banner: string;
  };
  scripts: {
    eyebrow: string;
    title: string;
    cards: DeepDiveCard[];
    banner: string;
  };
  compiler: {
    eyebrow: string;
    title: string;
    treeHeader: string;
    treeSubtitle: string;
    treeRows: string[];
    bullets: string[];
    callout: string;
  };
  errorCodes: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    descriptionLabel: string;
    descriptionValue: string;
    pointLabel: string;
    pointValue: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  choice: {
    eyebrow: string;
    title: string;
    cards: ChoiceCard[];
    banner: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const codesJson = `{
  "0": "Minified React error #0; visit https://react.dev/errors/0?args[]=...",
  "1": "Minified React error #1; visit https://react.dev/errors/1?args[]=...",
  "2": "Minified React error #2; visit https://react.dev/errors/2?args[]=...",
  "3": "Minified React error #3; visit https://react.dev/errors/3?args[]=...",
  "4": "Minified React error #4; visit https://react.dev/errors/4?args[]=...",
  "...": "... (중략)"
}`;

const codesJsonEn = `{
  "0": "Minified React error #0; visit https://react.dev/errors/0?args[]=...",
  "1": "Minified React error #1; visit https://react.dev/errors/1?args[]=...",
  "2": "Minified React error #2; visit https://react.dev/errors/2?args[]=...",
  "3": "Minified React error #3; visit https://react.dev/errors/3?args[]=...",
  "4": "Minified React error #4; visit https://react.dev/errors/4?args[]=...",
  "...": "... (truncated)"
}`;

export const surroundingContent: Record<Locale, SurroundingContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 3/10단계',
      title: {
        lead: 'React 저장소에는',
        tail: '제품 코드만 있는 것이 아닙니다.',
      },
      description:
        '실험을 위한 예제, 빌드와 릴리즈를 위한 스크립트, 컴파일러 프로젝트까지 함께 존재합니다.',
      locationPill: '위치: facebook/react (main)',
      rootLabel: 'facebook / react',
      rootCaption: '저장소 루트',
      branches: [
        {
          id: 'fixtures',
          name: 'fixtures',
          subtitle: '예제 · 실험 · 데모',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          subtitle: '빌드 · 릴리즈 · 자동화',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          subtitle: 'React Compiler 프로젝트',
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
    },
    comparison: {
      eyebrow: '01 · 핵심 비교',
      title: '3가지 디렉터리 핵심 비교',
      description:
        '역할과 학습 초반 중요도를 한 줄로 비교하면 어떤 폴더를 먼저 열지 감이 잡힙니다.',
      cards: [
        {
          id: 'fixtures',
          name: 'fixtures',
          subtitle: '기능 실험, 재현, 데모',
          description: 'React의 동작을 다양한 환경에서 실험하고 확인하는 공간입니다.',
          importanceLabel: '학습 초반 중요도',
          rating: 3,
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          subtitle: '빌드, 릴리즈, 오류 코드, 자동화',
          description: 'React 저장소를 빌드하고 배포하며 관리하는 자동화 도구 모음입니다.',
          importanceLabel: '학습 초반 중요도',
          rating: 2,
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          subtitle: 'React Compiler 개발 영역',
          description:
            '컴파일 최적화와 자동 메모이제이션 등을 연구·개발하는 별도 프로젝트 영역입니다.',
          importanceLabel: '학습 초반 중요도',
          rating: 1,
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
    },
    fixtures: {
      eyebrow: '02 · fixtures 심화',
      title: 'fixtures 심화: 실험과 예제 공간',
      cards: [
        {
          id: 'concurrent',
          name: 'concurrent / time-slicing',
          description: '동시성 렌더링과 시간 분할 렌더링을 실험하는 예제',
          badge: '동시성 렌더링',
          icon: 'zap',
        },
        {
          id: 'fiber-debugger',
          name: 'fiber-debugger',
          description: 'Fiber 트리 구조를 시각적으로 확인하는 디버깅 예제',
          badge: 'Fiber 구조',
          icon: 'bug',
        },
        {
          id: 'ssr',
          name: 'ssr',
          description: '서버 렌더링, 스트리밍, 하이드레이션 등을 실험하는 예제',
          badge: '서버 렌더링',
          icon: 'server',
        },
        {
          id: 'view-transition',
          name: 'view-transition',
          description: '브라우저 View Transitions API 활용을 실험하는 예제',
          badge: '최신 기능 실험',
          icon: 'sparkles',
        },
      ],
      banner:
        'fixtures는 문서에서 배운 개념을 눈으로 확인하고, 다양한 환경에서 재현하는 데 큰 도움이 됩니다.',
    },
    scripts: {
      eyebrow: '03 · scripts 심화',
      title: 'scripts 심화: 저장소를 움직이는 자동화 도구',
      cards: [
        {
          id: 'release',
          name: 'scripts/release',
          description:
            '버전 관리, 변경 로그 작성, 릴리즈 노트 생성, 배포 태그 등 릴리즈 전반을 자동화합니다.',
          badge: '릴리즈 관리',
          icon: 'gitBranch',
        },
        {
          id: 'rollup',
          name: 'scripts/rollup',
          description: '번들링 빌드 설정과 Rollup 기반 패키지 빌드를 수행하는 도구 모음입니다.',
          badge: '빌드/번들링',
          icon: 'package',
        },
        {
          id: 'error-codes',
          name: 'scripts/error-codes',
          description: '프로덕션 오류 코드 목록과 메시지 매핑을 생성하고 관리합니다.',
          badge: '에러 코드 관리',
          icon: 'fileCode',
        },
        {
          id: 'eslint',
          name: 'scripts/eslint',
          description: '코드 품질을 유지하기 위한 ESLint 설정과 커스텀 룰을 포함합니다.',
          badge: '코드 품질',
          icon: 'shieldCheck',
        },
      ],
      banner: '소스코드만으로는 React가 어떻게 빌드되고 관리되는지 보이지 않습니다.',
    },
    compiler: {
      eyebrow: '04 · compiler 소개',
      title: 'compiler 영역 소개',
      treeHeader: 'compiler',
      treeSubtitle: 'React Compiler 프로젝트',
      treeRows: [
        'compiler/',
        '├─ packages/',
        '├─ codemod/',
        '├─ eslint-plugin-react-compiler/',
        '├─ playground/',
        '└─ ...',
      ],
      bullets: [
        'React Compiler는 런타임 코드와는 다른 축의 프로젝트입니다. 런타임 성능 향상을 위한 컴파일 최적화, 자동 메모이제이션 등을 연구합니다.',
        '컴파일 최적화와 자동 메모이제이션 흐름이 궁금할 때 보면 좋습니다. 아직 실험성이 강해 별도로 변화하는 영역이므로 깊이 있게 다룰 시점이 다를 수 있습니다.',
      ],
      callout: '이 시리즈 초반에는 우선순위가 낮고, 별도 고급 주제로 분리하는 것이 적절합니다.',
    },
    errorCodes: {
      eyebrow: '05 · 코드 밖 파일',
      title: '코드 밖의 흥미로운 파일: React 오류 메시지는 어떻게 관리될까?',
      fileLabel: '파일',
      filePath: 'scripts/error-codes/codes.json',
      descriptionLabel: '설명',
      descriptionValue: '프로덕션 오류 코드와 원문 메시지를 매핑하는 데이터',
      pointLabel: '학습 포인트',
      pointValue:
        '오류 코드를 숫자로 노출하고, 메시지는 별도 시스템에서 주입되는 구조를 이해할 수 있습니다.',
      codeHeader: 'scripts/error-codes/codes.json',
      codeBadge: 'main',
      code: codesJson,
      primaryCta: 'codes.json 열기',
      secondaryCta: 'scripts 디렉터리 보기',
      primaryHref: 'https://github.com/facebook/react/blob/main/scripts/error-codes/codes.json',
      secondaryHref: 'https://github.com/facebook/react/tree/main/scripts',
    },
    choice: {
      eyebrow: '06 · 목적별 선택',
      title: '목적별 디렉터리 선택',
      cards: [
        {
          id: 'fixtures',
          question: '기능 동작을\n실험 앱으로 보고 싶다',
          destination: 'fixtures',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          question: '빌드 / 릴리즈\n자동화를 보고 싶다',
          destination: 'scripts',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          question: '컴파일 최적화 구조가\n궁금하다',
          destination: 'compiler',
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
      banner: '궁금한 목표에 따라 적절한 디렉터리를 선택하면 학습 효율이 크게 올라갑니다.',
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '저장소 전체 주변 구조를 파악했다면,',
      description:
        '이제 가장 자주 혼동되는 두 패키지, ' + 'react와 react-dom' + '의 차이를 정리합니다.',
      cta: '다음 페이지로 이동',
      href: '/react-vs-react-dom',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 3/10',
      title: {
        lead: 'The React repo holds more',
        tail: 'than just the product code.',
      },
      description:
        'Examples for experimentation, scripts for builds and releases, and the compiler project all live here too.',
      locationPill: 'Location: facebook/react (main)',
      rootLabel: 'facebook / react',
      rootCaption: 'Repository root',
      branches: [
        {
          id: 'fixtures',
          name: 'fixtures',
          subtitle: 'Examples · experiments · demos',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          subtitle: 'Build · release · automation',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          subtitle: 'React Compiler project',
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
    },
    comparison: {
      eyebrow: '01 · COMPARISON',
      title: 'Compare the three directories',
      description:
        'A one-line comparison of role and early-stage priority makes it easy to pick where to look first.',
      cards: [
        {
          id: 'fixtures',
          name: 'fixtures',
          subtitle: 'Experiments, repros, demos',
          description: 'A space to experiment with and verify React’s behaviour in many setups.',
          importanceLabel: 'Early-stage priority',
          rating: 3,
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          subtitle: 'Build, release, error codes, automation',
          description:
            'A collection of automation tools that build, release and maintain the React repo.',
          importanceLabel: 'Early-stage priority',
          rating: 2,
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          subtitle: 'React Compiler project',
          description:
            'A separate project that researches compile-time optimisation and auto memoisation.',
          importanceLabel: 'Early-stage priority',
          rating: 1,
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
    },
    fixtures: {
      eyebrow: '02 · FIXTURES',
      title: 'fixtures deep dive: where React experiments live',
      cards: [
        {
          id: 'concurrent',
          name: 'concurrent / time-slicing',
          description: 'Examples that explore concurrent rendering and time slicing',
          badge: 'Concurrent rendering',
          icon: 'zap',
        },
        {
          id: 'fiber-debugger',
          name: 'fiber-debugger',
          description: 'A debugging example for visualising the Fiber tree',
          badge: 'Fiber structure',
          icon: 'bug',
        },
        {
          id: 'ssr',
          name: 'ssr',
          description: 'Examples for server rendering, streaming and hydration',
          badge: 'Server rendering',
          icon: 'server',
        },
        {
          id: 'view-transition',
          name: 'view-transition',
          description: 'Examples that explore the browser View Transitions API',
          badge: 'Latest feature lab',
          icon: 'sparkles',
        },
      ],
      banner:
        'fixtures help you see concepts from the docs in action and reproduce them across environments.',
    },
    scripts: {
      eyebrow: '03 · SCRIPTS',
      title: 'scripts deep dive: the automation that keeps the repo moving',
      cards: [
        {
          id: 'release',
          name: 'scripts/release',
          description:
            'Automates the full release flow — version bumps, changelogs, release notes and deploy tags.',
          badge: 'Release management',
          icon: 'gitBranch',
        },
        {
          id: 'rollup',
          name: 'scripts/rollup',
          description: 'Bundling configuration and Rollup-based package builds.',
          badge: 'Build / bundling',
          icon: 'package',
        },
        {
          id: 'error-codes',
          name: 'scripts/error-codes',
          description: 'Generates and manages production error code lists and message mappings.',
          badge: 'Error code mgmt',
          icon: 'fileCode',
        },
        {
          id: 'eslint',
          name: 'scripts/eslint',
          description: 'ESLint configuration and custom rules to keep code quality high.',
          badge: 'Code quality',
          icon: 'shieldCheck',
        },
      ],
      banner: 'Source code alone does not show you how React is built and managed.',
    },
    compiler: {
      eyebrow: '04 · COMPILER',
      title: 'compiler intro',
      treeHeader: 'compiler',
      treeSubtitle: 'React Compiler project',
      treeRows: [
        'compiler/',
        '├─ packages/',
        '├─ codemod/',
        '├─ eslint-plugin-react-compiler/',
        '├─ playground/',
        '└─ ...',
      ],
      bullets: [
        'React Compiler is on a different axis from the runtime code. It researches compile-time optimisation and auto memoisation for runtime perf.',
        'Read it when you want to understand compile-time optimisation and auto memoisation. It is still experimental and evolves separately, so depth-first study may be better later.',
      ],
      callout:
        'Early in this series it is lower priority, and best handled as a separate advanced topic.',
    },
    errorCodes: {
      eyebrow: '05 · BEYOND CODE',
      title: 'Interesting non-code file: how React error messages are managed',
      fileLabel: 'File',
      filePath: 'scripts/error-codes/codes.json',
      descriptionLabel: 'Description',
      descriptionValue: 'Data that maps production error codes to their original messages.',
      pointLabel: 'Learning point',
      pointValue:
        'See how error codes are exposed as numbers while messages are injected by a separate system.',
      codeHeader: 'scripts/error-codes/codes.json',
      codeBadge: 'main',
      code: codesJsonEn,
      primaryCta: 'Open codes.json',
      secondaryCta: 'View scripts directory',
      primaryHref: 'https://github.com/facebook/react/blob/main/scripts/error-codes/codes.json',
      secondaryHref: 'https://github.com/facebook/react/tree/main/scripts',
    },
    choice: {
      eyebrow: '06 · BY GOAL',
      title: 'Pick the directory by goal',
      cards: [
        {
          id: 'fixtures',
          question: 'I want to see\nfeatures in a real app',
          destination: 'fixtures',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          question: 'I want to see the\nbuild / release flow',
          destination: 'scripts',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          question: 'I want to learn the\ncompiler architecture',
          destination: 'compiler',
          tone: 'amber',
          icon: 'cuboid',
        },
      ],
      banner: 'Picking the right directory for your question makes learning far more efficient.',
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'With the surrounding structure mapped out,',
      description: 'time to clear up the most-confused pair — ' + 'react vs react-dom' + '.',
      cta: 'Go to the next page',
      href: '/react-vs-react-dom',
    },
  },
};
