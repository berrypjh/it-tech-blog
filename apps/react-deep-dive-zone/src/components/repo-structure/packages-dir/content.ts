import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type CorePackageId = 'react' | 'react-dom' | 'react-reconciler' | 'scheduler' | 'shared';

export type CorePackageIconName =
  | 'atom'
  | 'monitor'
  | 'layers'
  | 'timer'
  | 'network'
  | 'folder'
  | 'tool'
  | 'flask'
  | 'paint';

export type CorePackage = {
  id: CorePackageId;
  name: string;
  shortDescription: string;
  tone: ToneKey;
  icon: CorePackageIconName;
};

export type CorePackageDetail = {
  badge: string;
  description: string;
  bullets: string[];
  representativeTitle: string;
  representativePath: string;
  representativeFiles: string[];
};

export type DiagramNode = {
  id: 'react' | 'reconciler' | 'react-dom' | 'scheduler' | 'shared';
  title: string;
  subtitle: string;
  items?: string[];
  description?: string;
  tone: ToneKey;
  icon: CorePackageIconName;
};

export type LaterPackage = {
  id: string;
  name: string;
  description1: string;
  description2: string;
  tone: ToneKey;
  icon: CorePackageIconName;
};

export type PackageQuiz = {
  id: 'dom-quiz' | 'fiber-quiz';
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

export type PackagesDirectoryContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    repoUrl: string;
    hubLabel: string;
    hubCaption: string;
    coreNodes: CorePackage[];
    secondaryNodes: string[];
  };
  landscape: {
    eyebrow: string;
    title: string;
    description: string;
    coreNames: string[];
    additionalRow1: string[];
    additionalRow2: string[];
    banner: string;
  };
  selector: {
    eyebrow: string;
    title: string;
    description: string;
    tabs: CorePackage[];
    defaultSelected: CorePackageId;
    details: Record<CorePackageId, CorePackageDetail>;
  };
  diagram: {
    eyebrow: string;
    title: string;
    description: string;
    flowLabel: string;
    nodes: {
      react: DiagramNode;
      reconciler: DiagramNode;
      reactDom: DiagramNode;
      scheduler: DiagramNode;
      shared: DiagramNode;
    };
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    seeLabel: string;
    seeItems: string[];
    learningQuestion: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    codeHeader: string;
    codeBadge: string;
    codeCaption: string;
    code: string;
  };
  later: {
    eyebrow: string;
    title: string;
    cards: LaterPackage[];
    banner: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    cards: PackageQuiz[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const codeBody = `import * as React from 'react';

import { useState, useEffect, useTransition } from './ReactHooks';

import { createElement } from './jsx/ReactJSXElement';

import { useActionState } from './ReactActionState';

export { createElement, useState, useEffect, useTransition, use, useActionState };
`;

const coreKo: CorePackage[] = [
  { id: 'react', name: 'react', shortDescription: '사용자-facing API', tone: 'blue', icon: 'atom' },
  {
    id: 'react-dom',
    name: 'react-dom',
    shortDescription: '브라우저 DOM 연결',
    tone: 'emerald',
    icon: 'monitor',
  },
  {
    id: 'react-reconciler',
    name: 'react-reconciler',
    shortDescription: 'Fiber / Render / Commit',
    tone: 'violet',
    icon: 'layers',
  },
  {
    id: 'scheduler',
    name: 'scheduler',
    shortDescription: '작업 타이밍 조율',
    tone: 'amber',
    icon: 'timer',
  },
  {
    id: 'shared',
    name: 'shared',
    shortDescription: '공통 타입 / 상수',
    tone: 'teal',
    icon: 'network',
  },
];

const coreEn: CorePackage[] = [
  { id: 'react', name: 'react', shortDescription: 'User-facing API', tone: 'blue', icon: 'atom' },
  {
    id: 'react-dom',
    name: 'react-dom',
    shortDescription: 'Browser DOM bridge',
    tone: 'emerald',
    icon: 'monitor',
  },
  {
    id: 'react-reconciler',
    name: 'react-reconciler',
    shortDescription: 'Fiber / Render / Commit',
    tone: 'violet',
    icon: 'layers',
  },
  {
    id: 'scheduler',
    name: 'scheduler',
    shortDescription: 'Work timing & priority',
    tone: 'amber',
    icon: 'timer',
  },
  {
    id: 'shared',
    name: 'shared',
    shortDescription: 'Common types / constants',
    tone: 'teal',
    icon: 'network',
  },
];

export const packagesDirectoryContent: Record<Locale, PackagesDirectoryContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 2/10단계',
      title: {
        line1: 'React의 실제 구현은',
        line2: 'packages 디렉터리 안에서',
        line3: '갈라집니다.',
      },
      description:
        'API, DOM 렌더러, Fiber, 스케줄링, 공통 상수는 각각 다른 패키지에 배치되어 있습니다.',
      primaryCta: '패키지 지도 보기',
      secondaryCta: 'React GitHub 열기',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages',
      hubLabel: 'packages',
      hubCaption: 'React 구현의 중심 허브',
      coreNodes: coreKo,
      secondaryNodes: ['react-server', 'react-devtools', 'react-native-renderer', '...'],
    },
    landscape: {
      eyebrow: '02 · packages landscape',
      title: 'packages 전체 풍경',
      description: '한눈에 보면 압도적이지만, 처음 잡아야 할 핵심은 5개로 좁혀집니다.',
      coreNames: ['react', 'react-dom', 'react-reconciler', 'scheduler', 'shared'],
      additionalRow1: [
        'react-server',
        'react-devtools',
        'react-native-renderer',
        'react-test-renderer',
        'react-server-dom-webpack',
      ],
      additionalRow2: [
        'react-server-dom-fb',
        'react-art',
        'react-flight',
        'react-refresh',
        'eslint-plugin-react-hooks',
        '...',
      ],
      banner: '입문자는 모든 패키지를 한 번에 볼 필요가 없습니다.',
    },
    selector: {
      eyebrow: '03 · core packages',
      title: '처음 볼 핵심 패키지 5개',
      description: '탭을 눌러 각 패키지의 역할과 대표 디렉터리를 확인해보세요.',
      tabs: coreKo,
      defaultSelected: 'react-reconciler',
      details: {
        react: {
          badge: 'API 진입점',
          description:
            'createElement / Hooks 등 사용자가 직접 호출하는 모든 public API의 진입점입니다.',
          bullets: [
            'createElement / jsx 런타임 정의',
            'useState / useEffect / useTransition 등 hook export',
            'use / useActionState 등 React 19 신규 API',
            'ReactClient.js / ReactServer.js로 환경별 export 분리',
          ],
          representativeTitle: '대표 디렉터리',
          representativePath: 'packages/react/src/',
          representativeFiles: [
            'ReactClient.js',
            'ReactServer.js',
            'ReactHooks.js',
            'jsx/ReactJSXElement.js',
            'ReactActionState.js',
            '...',
          ],
        },
        'react-dom': {
          badge: 'DOM 렌더러',
          description: '브라우저 DOM 환경에 실제로 트리를 부착하고 갱신하는 렌더러 구현입니다.',
          bullets: [
            'createRoot / hydrateRoot 등 마운트 API',
            'DOM 요소 생성 / 속성 적용 / 이벤트 위임',
            'ReactDOMHostConfig를 통해 reconciler와 연결',
            'flushSync / preconnect 등 DOM 전용 API 제공',
          ],
          representativeTitle: '대표 디렉터리',
          representativePath: 'packages/react-dom/src/',
          representativeFiles: [
            'client/ReactDOMRoot.js',
            'client/ReactDOM.js',
            'events/ReactDOMEventListener.js',
            'shared/ReactDOMHostConfig.js',
            'ReactDOMHostConfig.js',
            '...',
          ],
        },
        'react-reconciler': {
          badge: '핵심 패키지',
          description:
            'React 내부의 핵심 엔진입니다. Fiber 트리를 구성하고, Render Phase와 Commit Phase를 수행합니다.',
          bullets: [
            'FiberNode 구조 정의',
            'beginWork / completeWork 구현',
            '재조정(Reconciliation)과 변경 계산',
            '호스트 환경(react-dom 등)과 분리된 순수 로직',
          ],
          representativeTitle: '대표 디렉터리',
          representativePath: 'packages/react-reconciler/src/',
          representativeFiles: [
            'ReactFiber.js',
            'ReactChildFiber.js',
            'ReactFiberWorkLoop.js',
            'ReactFiberCommitWork.js',
            'ReactFiberHooks.js',
            '...',
          ],
        },
        scheduler: {
          badge: '타이밍 엔진',
          description:
            '브라우저 idle 시간을 활용해 작업을 우선순위 순으로 실행하는 스케줄러입니다.',
          bullets: [
            'MessageChannel 기반 task queue',
            '우선순위(priorityLevel) 정의',
            'shouldYield로 양보 시점 판단',
            'react-reconciler가 호출하는 외부 엔진',
          ],
          representativeTitle: '대표 디렉터리',
          representativePath: 'packages/scheduler/src/',
          representativeFiles: [
            'Scheduler.js',
            'SchedulerPriorities.js',
            'SchedulerMinHeap.js',
            'forks/SchedulerMock.js',
            '...',
          ],
        },
        shared: {
          badge: '공통 기반',
          description: '여러 패키지가 공통으로 사용하는 타입, 상수, 심벌의 모음입니다.',
          bullets: [
            'REACT_ELEMENT_TYPE 등 핵심 심벌',
            'ReactFeatureFlags 토글',
            '공용 invariant / warning 유틸',
            '여러 패키지가 import하는 단일 진실 공급원',
          ],
          representativeTitle: '대표 디렉터리',
          representativePath: 'packages/shared/',
          representativeFiles: [
            'ReactSymbols.js',
            'ReactFeatureFlags.js',
            'ReactSharedInternals.js',
            'invokeGuardedCallback.js',
            '...',
          ],
        },
      },
    },
    diagram: {
      eyebrow: '04 · package relationships',
      title: '패키지 간 관계 다이어그램',
      description: '핵심 5개가 어떻게 역할을 나누고 서로 연결되는지 한 장으로 정리합니다.',
      flowLabel: 'react → react-reconciler → react-dom',
      nodes: {
        react: {
          id: 'react',
          title: 'react',
          subtitle: '사용자 API 제공',
          items: ['createElement', 'useState', 'useEffect', 'useTransition', '...'],
          tone: 'blue',
          icon: 'atom',
        },
        reconciler: {
          id: 'reconciler',
          title: 'react-reconciler',
          subtitle: '핵심 엔진 (Fiber)',
          items: ['Fiber 트리 구성', 'Render / Commit 수행', '변경 계산'],
          tone: 'violet',
          icon: 'layers',
        },
        reactDom: {
          id: 'react-dom',
          title: 'react-dom',
          subtitle: 'DOM 렌더러',
          items: ['실제 DOM 조작', '브라우저 환경 연결'],
          tone: 'emerald',
          icon: 'monitor',
        },
        scheduler: {
          id: 'scheduler',
          title: 'scheduler',
          subtitle: '작업 스케줄링',
          items: ['우선순위 계산', '작업 실행 시점 조율'],
          tone: 'amber',
          icon: 'timer',
        },
        shared: {
          id: 'shared',
          title: 'shared',
          subtitle: '공통 타입 / 상수 / 심벌',
          description: '여러 패키지가 함께 사용하는 공통 정보를 제공합니다.',
          tone: 'teal',
          icon: 'network',
        },
      },
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: '코드로 확인하기: React 공개 API는 어디서 모일까?',
      fileLabel: '파일',
      filePath: 'packages/react/src/ReactClient.js',
      seeLabel: '볼 것',
      seeItems: [
        'createElement',
        'useState',
        'useEffect',
        'useTransition',
        'use',
        'useActionState',
      ],
      learningQuestion: 'React 패키지의 public API는\n어디서 최종적으로 모이는가?',
      primaryCta: 'ReactClient.js 읽기',
      secondaryCta: 'react 패키지 보기',
      primaryHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react',
      codeHeader: 'packages/react/src/ReactClient.js',
      codeBadge: 'main',
      codeCaption: '최신 코드 기준 · 교육용 발췌',
      code: codeBody,
    },
    later: {
      eyebrow: '06 · later packages',
      title: '처음엔 나중에 봐도 되는 패키지',
      cards: [
        {
          id: 'devtools',
          name: 'react-devtools',
          description1: '개발자 도구 확장',
          description2: 'React DevTools의 구현 코드',
          tone: 'violet',
          icon: 'tool',
        },
        {
          id: 'native',
          name: 'react-native-renderer',
          description1: 'React Native 전용 렌더러',
          description2: '네이티브 환경과 연결하는 구현',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'rsc',
          name: 'react-server-dom-* 계열',
          description1: 'RSC 관련 패키지',
          description2: 'RSC 렌더 프로토콜을 다루는 패키지',
          tone: 'cyan',
          icon: 'network',
        },
        {
          id: 'test',
          name: 'react-test-renderer',
          description1: '테스트 전용 렌더러',
          description2: '테스트 환경에서 사용하는 가상 렌더러',
          tone: 'amber',
          icon: 'flask',
        },
        {
          id: 'art',
          name: 'react-art',
          description1: '실험적 렌더러',
          description2: 'Canvas 기반 실험적 렌더러',
          tone: 'indigo',
          icon: 'paint',
        },
      ],
      banner:
        '중요하지 않아서가 아니라, 지금은 렌더링 핵심 축을 먼저 잡는 것이 더 빠르기 때문입니다.',
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: '빠른 패키지 선택 퀴즈',
      cards: [
        {
          id: 'dom-quiz',
          question: 'Q. 실제 브라우저 DOM 연결을 담당하는 패키지는?',
          hint: '힌트: createRoot로 트리를 마운트할 때 사용하는 패키지',
          accordionLabel: '정답 보기',
          answer: '정답: react-dom',
          answerDescription: '브라우저 DOM에 실제로 요소를 부착하고 업데이트합니다.',
          tone: 'emerald',
        },
        {
          id: 'fiber-quiz',
          question: 'Q. Fiber 구조와 render/commit 핵심은?',
          hint: '힌트: 호스트 환경과 분리된 순수 로직이 모여 있는 곳',
          accordionLabel: '정답 보기',
          answer: '정답: react-reconciler',
          answerDescription: 'Fiber 트리 구성, 재조정, render/commit의 코어가 구현되어 있습니다.',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'packages의 중심 축을 잡았다면,',
      description:
        '이제 저장소 루트의 다른 디렉터리인 ' +
        'fixtures / scripts / compiler' +
        '가 어떤 역할을 하는지 살펴봅니다.',
      cta: '다음: fixtures / scripts / compiler',
      href: '/other-dirs',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 2/10',
      title: {
        line1: 'The real React implementation',
        line2: 'splits inside the packages',
        line3: 'directory.',
      },
      description:
        'APIs, the DOM renderer, Fiber, scheduling and shared constants each live in their own package.',
      primaryCta: 'See the package map',
      secondaryCta: 'Open React on GitHub',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages',
      hubLabel: 'packages',
      hubCaption: 'The hub of React’s implementation',
      coreNodes: coreEn,
      secondaryNodes: ['react-server', 'react-devtools', 'react-native-renderer', '...'],
    },
    landscape: {
      eyebrow: '02 · packages landscape',
      title: 'The whole packages landscape',
      description:
        'It looks overwhelming at a glance, but the must-read set narrows down to five packages.',
      coreNames: ['react', 'react-dom', 'react-reconciler', 'scheduler', 'shared'],
      additionalRow1: [
        'react-server',
        'react-devtools',
        'react-native-renderer',
        'react-test-renderer',
        'react-server-dom-webpack',
      ],
      additionalRow2: [
        'react-server-dom-fb',
        'react-art',
        'react-flight',
        'react-refresh',
        'eslint-plugin-react-hooks',
        '...',
      ],
      banner: 'Beginners do not need to read every package at once.',
    },
    selector: {
      eyebrow: '03 · core packages',
      title: 'The five core packages to read first',
      description:
        'Click a tab to see what each package is responsible for and its representative directory.',
      tabs: coreEn,
      defaultSelected: 'react-reconciler',
      details: {
        react: {
          badge: 'API entry',
          description:
            'The entry point for every public API users call — createElement, Hooks and friends.',
          bullets: [
            'Defines createElement / the jsx runtime',
            'Exports useState / useEffect / useTransition',
            'Adds React 19 APIs: use, useActionState',
            'ReactClient.js / ReactServer.js split per environment',
          ],
          representativeTitle: 'Representative directory',
          representativePath: 'packages/react/src/',
          representativeFiles: [
            'ReactClient.js',
            'ReactServer.js',
            'ReactHooks.js',
            'jsx/ReactJSXElement.js',
            'ReactActionState.js',
            '...',
          ],
        },
        'react-dom': {
          badge: 'DOM renderer',
          description: 'The renderer that actually mounts and updates the tree in the browser DOM.',
          bullets: [
            'Mount APIs such as createRoot / hydrateRoot',
            'DOM element creation, prop application, event delegation',
            'Wires reconciler through ReactDOMHostConfig',
            'DOM-only APIs like flushSync / preconnect',
          ],
          representativeTitle: 'Representative directory',
          representativePath: 'packages/react-dom/src/',
          representativeFiles: [
            'client/ReactDOMRoot.js',
            'client/ReactDOM.js',
            'events/ReactDOMEventListener.js',
            'shared/ReactDOMHostConfig.js',
            'ReactDOMHostConfig.js',
            '...',
          ],
        },
        'react-reconciler': {
          badge: 'Core engine',
          description:
            'The core React engine. It builds the Fiber tree and drives the Render and Commit phases.',
          bullets: [
            'Defines the FiberNode structure',
            'Implements beginWork / completeWork',
            'Reconciliation and change calculation',
            'Pure logic isolated from host environments like react-dom',
          ],
          representativeTitle: 'Representative directory',
          representativePath: 'packages/react-reconciler/src/',
          representativeFiles: [
            'ReactFiber.js',
            'ReactChildFiber.js',
            'ReactFiberWorkLoop.js',
            'ReactFiberCommitWork.js',
            'ReactFiberHooks.js',
            '...',
          ],
        },
        scheduler: {
          badge: 'Timing engine',
          description:
            'Runs work in priority order using browser idle time — React’s pluggable scheduler.',
          bullets: [
            'Task queue based on MessageChannel',
            'Defines priorityLevel',
            'Uses shouldYield to decide when to yield',
            'External engine that react-reconciler calls',
          ],
          representativeTitle: 'Representative directory',
          representativePath: 'packages/scheduler/src/',
          representativeFiles: [
            'Scheduler.js',
            'SchedulerPriorities.js',
            'SchedulerMinHeap.js',
            'forks/SchedulerMock.js',
            '...',
          ],
        },
        shared: {
          badge: 'Common foundation',
          description: 'Shared types, constants and symbols that multiple packages depend on.',
          bullets: [
            'Core symbols such as REACT_ELEMENT_TYPE',
            'ReactFeatureFlags toggles',
            'Shared invariant / warning utilities',
            'A single source of truth imported by many packages',
          ],
          representativeTitle: 'Representative directory',
          representativePath: 'packages/shared/',
          representativeFiles: [
            'ReactSymbols.js',
            'ReactFeatureFlags.js',
            'ReactSharedInternals.js',
            'invokeGuardedCallback.js',
            '...',
          ],
        },
      },
    },
    diagram: {
      eyebrow: '04 · package relationships',
      title: 'How the core packages connect',
      description:
        'A one-glance summary of how the five core packages split responsibilities and connect.',
      flowLabel: 'react → react-reconciler → react-dom',
      nodes: {
        react: {
          id: 'react',
          title: 'react',
          subtitle: 'User API surface',
          items: ['createElement', 'useState', 'useEffect', 'useTransition', '...'],
          tone: 'blue',
          icon: 'atom',
        },
        reconciler: {
          id: 'reconciler',
          title: 'react-reconciler',
          subtitle: 'Core engine (Fiber)',
          items: ['Builds the Fiber tree', 'Runs Render / Commit', 'Calculates changes'],
          tone: 'violet',
          icon: 'layers',
        },
        reactDom: {
          id: 'react-dom',
          title: 'react-dom',
          subtitle: 'DOM renderer',
          items: ['Mutates the real DOM', 'Bridges the browser environment'],
          tone: 'emerald',
          icon: 'monitor',
        },
        scheduler: {
          id: 'scheduler',
          title: 'scheduler',
          subtitle: 'Work scheduling',
          items: ['Priority calculation', 'Decides when to run work'],
          tone: 'amber',
          icon: 'timer',
        },
        shared: {
          id: 'shared',
          title: 'shared',
          subtitle: 'Shared types / constants / symbols',
          description: 'Provides common information used across multiple packages.',
          tone: 'teal',
          icon: 'network',
        },
      },
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: 'Code checkpoint: where do React’s public APIs converge?',
      fileLabel: 'File',
      filePath: 'packages/react/src/ReactClient.js',
      seeLabel: 'Look for',
      seeItems: [
        'createElement',
        'useState',
        'useEffect',
        'useTransition',
        'use',
        'useActionState',
      ],
      learningQuestion: 'Where do React’s public APIs\nfinally come together?',
      primaryCta: 'Read ReactClient.js',
      secondaryCta: 'Open the react package',
      primaryHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react',
      codeHeader: 'packages/react/src/ReactClient.js',
      codeBadge: 'main',
      codeCaption: 'Educational excerpt — latest main',
      code: codeBody,
    },
    later: {
      eyebrow: '06 · later packages',
      title: 'Packages you can read later',
      cards: [
        {
          id: 'devtools',
          name: 'react-devtools',
          description1: 'Developer tools extension',
          description2: 'Implementation of React DevTools',
          tone: 'violet',
          icon: 'tool',
        },
        {
          id: 'native',
          name: 'react-native-renderer',
          description1: 'React Native renderer',
          description2: 'Bridges React with the native environment',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'rsc',
          name: 'react-server-dom-* family',
          description1: 'RSC-related packages',
          description2: 'Implements the React Server Components render protocol',
          tone: 'cyan',
          icon: 'network',
        },
        {
          id: 'test',
          name: 'react-test-renderer',
          description1: 'Test-only renderer',
          description2: 'Virtual renderer used in test environments',
          tone: 'amber',
          icon: 'flask',
        },
        {
          id: 'art',
          name: 'react-art',
          description1: 'Experimental renderer',
          description2: 'Canvas-based experimental renderer',
          tone: 'indigo',
          icon: 'paint',
        },
      ],
      banner:
        'Not because they don’t matter — but locking down the rendering core first is the faster path.',
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: 'Quick package picker',
      cards: [
        {
          id: 'dom-quiz',
          question: 'Q. Which package handles the actual browser DOM connection?',
          hint: 'Hint: The package you use with createRoot to mount a tree',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: react-dom',
          answerDescription: 'It attaches and updates real DOM elements in the browser.',
          tone: 'emerald',
        },
        {
          id: 'fiber-quiz',
          question: 'Q. Where do Fiber structure and the render/commit core live?',
          hint: 'Hint: The package isolated from host environments',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: react-reconciler',
          answerDescription:
            'It contains Fiber tree construction, reconciliation and the render/commit core.',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'You have the core axis of packages,',
      description:
        'now look at the other root directories — ' +
        'fixtures / scripts / compiler' +
        ' — and what each is responsible for.',
      cta: 'Next: fixtures / scripts / compiler',
      href: '/other-dirs',
    },
  },
};
