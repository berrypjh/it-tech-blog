import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../start/_shared/tones';

export type { ToneKey };

export type ReactPackageIconName =
  | 'atom'
  | 'box'
  | 'code'
  | 'database'
  | 'door'
  | 'externalLink'
  | 'fileCode'
  | 'fileText'
  | 'flow'
  | 'hook'
  | 'layers'
  | 'lightning'
  | 'link'
  | 'monitor'
  | 'network'
  | 'play'
  | 'refresh'
  | 'star'
  | 'user'
  | 'zap';

export type ApiToken = {
  id: string;
  label: string;
  caption: string;
  tone: ToneKey;
  iconName: ReactPackageIconName;
  /** Hero 네트워크의 좌/우 배치를 위한 힌트 */
  side: 'left' | 'right';
};

export type ApiGroupCard = {
  id: string;
  number: string;
  title: string;
  description: string;
  apis: string[];
  tone: ToneKey;
  iconName: ReactPackageIconName;
};

export type InternalFileCard = {
  id: string;
  name: string;
  description: string;
  tone: ToneKey;
};

export type EntryRouteCard = {
  id: string;
  api: string;
  route: { from: string; to: string };
  description: string;
  buttonLabel: string;
  tone: ToneKey;
  iconName: ReactPackageIconName;
};

export type CapabilityItem = {
  title: string;
  description: string;
};

export type CheckpointItem = {
  id: 'file' | 'view' | 'question';
  label: string;
  value: string;
  iconName: ReactPackageIconName;
  tone: ToneKey;
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
};

export type ReactPackageContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryCtaHref: string;
    secondaryCtaHref: string;
    centerCard: { title: string; caption: string };
    tokens: ApiToken[];
    apiNetworkAriaLabel: string;
  };
  groups: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ApiGroupCard[];
  };
  hub: {
    eyebrow: string;
    title: string;
    description: string;
    files: InternalFileCard[];
    emphasis: string;
    codeCaption: string;
    code: string;
    codeButtons: { primary: string; secondary: string };
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    items: CheckpointItem[];
  };
  routes: {
    eyebrow: string;
    title: string;
    description: string;
    cards: EntryRouteCard[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    doesTitle: string;
    doesItems: CapabilityItem[];
    doesNotTitle: string;
    doesNotItems: CapabilityItem[];
    banner: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    line1: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

const HERO_TOKENS_KO: ApiToken[] = [
  {
    id: 'useState',
    label: 'useState',
    caption: '상태 API',
    tone: 'sky',
    iconName: 'database',
    side: 'left',
  },
  {
    id: 'useEffect',
    label: 'useEffect',
    caption: 'Effect API',
    tone: 'sky',
    iconName: 'zap',
    side: 'left',
  },
  {
    id: 'createElement',
    label: 'createElement',
    caption: 'Element 생성',
    tone: 'violet',
    iconName: 'code',
    side: 'left',
  },
  {
    id: 'memo',
    label: 'memo',
    caption: '컴포넌트 메모화',
    tone: 'amber',
    iconName: 'layers',
    side: 'left',
  },
  {
    id: 'lazy',
    label: 'lazy',
    caption: '지연 로딩',
    tone: 'amber',
    iconName: 'box',
    side: 'right',
  },
  {
    id: 'useTransition',
    label: 'useTransition',
    caption: '전환 업데이트',
    tone: 'cyan',
    iconName: 'refresh',
    side: 'right',
  },
  {
    id: 'useActionState',
    label: 'useActionState',
    caption: 'Action 상태',
    tone: 'teal',
    iconName: 'user',
    side: 'right',
  },
  {
    id: 'use',
    label: 'use',
    caption: '리소스 읽기',
    tone: 'indigo',
    iconName: 'link',
    side: 'right',
  },
];

const HERO_TOKENS_EN: ApiToken[] = [
  {
    id: 'useState',
    label: 'useState',
    caption: 'State API',
    tone: 'sky',
    iconName: 'database',
    side: 'left',
  },
  {
    id: 'useEffect',
    label: 'useEffect',
    caption: 'Effect API',
    tone: 'sky',
    iconName: 'zap',
    side: 'left',
  },
  {
    id: 'createElement',
    label: 'createElement',
    caption: 'Element creation',
    tone: 'violet',
    iconName: 'code',
    side: 'left',
  },
  {
    id: 'memo',
    label: 'memo',
    caption: 'Memoize components',
    tone: 'amber',
    iconName: 'layers',
    side: 'left',
  },
  {
    id: 'lazy',
    label: 'lazy',
    caption: 'Lazy loading',
    tone: 'amber',
    iconName: 'box',
    side: 'right',
  },
  {
    id: 'useTransition',
    label: 'useTransition',
    caption: 'Transition updates',
    tone: 'cyan',
    iconName: 'refresh',
    side: 'right',
  },
  {
    id: 'useActionState',
    label: 'useActionState',
    caption: 'Action state',
    tone: 'teal',
    iconName: 'user',
    side: 'right',
  },
  {
    id: 'use',
    label: 'use',
    caption: 'Read resources',
    tone: 'indigo',
    iconName: 'link',
    side: 'right',
  },
];

const REACT_CLIENT_CODE = `// 내부 구현 파일들에서 필요한 기능을 가져온다
import {
  useState,
  useReducer,
  useEffect,
  useContext,
  use,
} from './ReactHooks';

import {
  createElement,
  cloneElement,
  isValidElement,
} from './ReactJSXElement';

import { memo } from './ReactMemo';
import { lazy } from './ReactLazy';
import { startTransition } from './ReactStartTransition';
import { useActionState } from './ReactActionState';

// public API를 외부로 내보낸다
export {
  // Element API
  createElement,
  cloneElement,
  isValidElement,

  // Component API
  Component,
  PureComponent,

  // Context API
  createContext,
  useContext,

  // Hooks
  useState,
  useReducer,
  useEffect,
  useTransition,
  useActionState,
  use,

  // Composition API
  memo,
  lazy,
  forwardRef,
};`;

export const reactPackageContent: Record<Locale, ReactPackageContent> = {
  ko: {
    hero: {
      badge: '01 · 히어로',
      title: {
        line1: 'react 패키지는 우리가',
        line2: '직접 호출하는 API의 입구입니다.',
      },
      description:
        'useState, useEffect, createElement, memo, lazy, use, useActionState 같은 기능이 여기서 노출됩니다.',
      primaryCta: 'ReactClient.js 먼저 보기',
      secondaryCta: 'API 흐름 따라가기',
      primaryCtaHref: '#section-hub',
      secondaryCtaHref: '#section-routes',
      centerCard: { title: 'react', caption: 'public API의 입구' },
      tokens: HERO_TOKENS_KO,
      apiNetworkAriaLabel:
        'useState, useEffect, createElement, memo, lazy, useTransition, useActionState, use API가 중앙 react 카드와 점선으로 연결되는 네트워크',
    },
    groups: {
      eyebrow: '02 · api groups',
      title: '우리가 실제로 쓰는 API 묶음',
      description: 'react 패키지가 외부로 공개하는 API는 크게 다섯 가지 묶음으로 나눠집니다.',
      cards: [
        {
          id: 'element',
          number: '01',
          title: 'Element API',
          description: 'React Element를 생성하고 조작하는 기능입니다.',
          apis: ['createElement', 'cloneElement', 'isValidElement'],
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'component',
          number: '02',
          title: 'Component API',
          description: '클래스 컴포넌트의 기본 기능을 제공합니다.',
          apis: ['Component', 'PureComponent'],
          tone: 'emerald',
          iconName: 'user',
        },
        {
          id: 'context',
          number: '03',
          title: 'Context API',
          description: '전역 상태처럼 제공하고 구독하는 기능입니다.',
          apis: ['createContext', 'useContext'],
          tone: 'teal',
          iconName: 'network',
        },
        {
          id: 'hooks',
          number: '04',
          title: 'Hooks API',
          description: '함수 컴포넌트에서 상태, 생명주기, 전환 기능 등을 제공합니다.',
          apis: ['useState', 'useEffect', 'useReducer', 'useTransition', 'use', '...'],
          tone: 'sky',
          iconName: 'hook',
        },
        {
          id: 'composition',
          number: '05',
          title: 'Composition API',
          description: '컴포넌트 합성/지연 로딩 유틸리티를 제공합니다.',
          apis: ['memo', 'lazy', 'forwardRef'],
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    hub: {
      eyebrow: '03 · public api hub',
      title: 'public API와 내부 구현 파일의 분리',
      description:
        'ReactClient.js는 직접 구현하지 않고, 여러 내부 파일에서 import해 public API로 export합니다.',
      files: [
        { id: 'hooks', name: 'ReactHooks.js', description: 'Hooks 구현 모음', tone: 'sky' },
        {
          id: 'jsx',
          name: 'ReactJSXElement.js',
          description: 'Element 생성/검증 로직',
          tone: 'violet',
        },
        { id: 'memo', name: 'ReactMemo.js', description: 'memo 구현', tone: 'amber' },
        { id: 'lazy', name: 'ReactLazy.js', description: 'lazy 구현', tone: 'cyan' },
        {
          id: 'transition',
          name: 'ReactStartTransition.js',
          description: 'startTransition 구현',
          tone: 'teal',
        },
      ],
      emphasis: 'ReactClient.js는 구현의 끝이 아니라 public API가 모이는 입구다.',
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_CODE,
      codeButtons: { primary: 'ReactClient.js 열기', secondary: 'API 흐름 보기' },
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: '코드 체크포인트',
      items: [
        {
          id: 'file',
          label: '파일',
          value: 'packages/react/src/ReactClient.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'view',
          label: '볼 것',
          value: 'import 구문, 최종 export 블록',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: '학습 질문',
          value: 'React public API는 어떤 내부 파일들에서 가져와지는가?',
          iconName: 'flow',
          tone: 'amber',
        },
      ],
    },
    routes: {
      eyebrow: '05 · api entry routes',
      title: 'API별 내부 진입 경로',
      description: '대표 API 3개가 ReactClient.js를 거쳐 어떤 내부 파일로 이어지는지 따라갑니다.',
      cards: [
        {
          id: 'useState',
          api: 'useState',
          route: { from: 'ReactClient.js', to: 'ReactHooks.js' },
          description: 'dispatcher 기반 호출',
          buttonLabel: '코드로 보기',
          tone: 'sky',
          iconName: 'database',
        },
        {
          id: 'createElement',
          api: 'createElement',
          route: { from: 'ReactClient.js', to: 'ReactJSXElement.js' },
          description: 'React Element 생성 로직',
          buttonLabel: '코드로 보기',
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'startTransition',
          api: 'startTransition',
          route: { from: 'ReactClient.js', to: 'ReactStartTransition.js' },
          description: '전환(transition) 시작 처리',
          buttonLabel: '코드로 보기',
          tone: 'teal',
          iconName: 'refresh',
        },
      ],
    },
    capabilities: {
      eyebrow: '06 · does / does not',
      title: 'react 패키지가 하는 일 / 하지 않는 일',
      doesTitle: '하는 일',
      doesItems: [
        {
          title: '사용자 API 제공',
          description: 'Hooks, Component, Element 등 공개 API를 제공합니다.',
        },
        {
          title: 'Element 생성',
          description: 'createElement 등을 통해 React Element를 만듭니다.',
        },
        {
          title: 'Hooks 호출 진입점 제공',
          description: 'Hooks가 내부 시스템으로 진입할 수 있는 입구를 제공합니다.',
        },
      ],
      doesNotTitle: '하지 않는 일',
      doesNotItems: [
        {
          title: 'DOM 컨테이너에 마운트',
          description: '렌더 결과를 DOM에 붙이지 않습니다.',
        },
        {
          title: 'Fiber render work 계산',
          description: 'Fiber 구조 생성, 재조정, 렌더 스케줄링을 하지 않습니다.',
        },
        {
          title: 'DOM mutation 수행',
          description: 'DOM 변경(insert/update/remove)을 직접 수행하지 않습니다.',
        },
      ],
      banner: 'react는 UI를 설명하는 데 집중하고, 실제 환경 반영은 다른 패키지에 맡긴다.',
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: '퀵 학습 퀴즈',
      description: 'ReactClient.js 다음에 들여다볼 파일을 짚을 수 있는지 확인해 보세요.',
      cards: [
        {
          id: 'useState-quiz',
          question: 'useState 구현을 깊게 보려면 ReactClient.js 다음으로 어디를 볼까?',
          answer: 'ReactHooks.js',
          explanation:
            'useState를 포함한 모든 Hooks는 ReactHooks.js에서 구현되며, 내부 dispatcher를 통해 renderer와 연결됩니다.',
        },
        {
          id: 'element-quiz',
          question: 'JSX로 만든 Element의 내부 구조는 어느 파일과 연결될까?',
          answer: 'ReactJSXElement.js',
          explanation:
            'createElement 등은 ReactJSXElement.js에서 구현되며, React Element 객체 구조 생성과 검증을 담당합니다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '다음 단계로 이동하기',
      line1: '사용자-facing API의 입구를 봤다면,',
      line2Before: '이제 그 UI를 실제 브라우저와 서버 환경에 연결하는 ',
      line2Accent: 'react-dom',
      line2After: '으로 이동합니다.',
      primaryCta: '다음: react-dom 패키지 →',
      secondaryCta: '이전 페이지 다시 보기',
      primaryHref: '/react-dom-package',
      secondaryHref: '/why-split',
    },
  },
  en: {
    hero: {
      badge: '01 · hero',
      title: {
        line1: 'The react package is the doorway',
        line2: 'to every API developers call directly.',
      },
      description:
        'useState, useEffect, createElement, memo, lazy, use, useActionState — all start here.',
      primaryCta: 'Open ReactClient.js first',
      secondaryCta: 'Follow the API flow',
      primaryCtaHref: '#section-hub',
      secondaryCtaHref: '#section-routes',
      centerCard: { title: 'react', caption: 'doorway to the public API' },
      tokens: HERO_TOKENS_EN,
      apiNetworkAriaLabel:
        'useState, useEffect, createElement, memo, lazy, useTransition, useActionState, use connect to the central react card with dashed lines.',
    },
    groups: {
      eyebrow: '02 · api groups',
      title: 'The API bundles you actually use',
      description: 'The public API of react divides into five clear bundles.',
      cards: [
        {
          id: 'element',
          number: '01',
          title: 'Element API',
          description: 'Creates and manipulates React Elements.',
          apis: ['createElement', 'cloneElement', 'isValidElement'],
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'component',
          number: '02',
          title: 'Component API',
          description: 'Base classes for class components.',
          apis: ['Component', 'PureComponent'],
          tone: 'emerald',
          iconName: 'user',
        },
        {
          id: 'context',
          number: '03',
          title: 'Context API',
          description: 'Provides and consumes global-like state.',
          apis: ['createContext', 'useContext'],
          tone: 'teal',
          iconName: 'network',
        },
        {
          id: 'hooks',
          number: '04',
          title: 'Hooks API',
          description: 'State, lifecycle and transitions for function components.',
          apis: ['useState', 'useEffect', 'useReducer', 'useTransition', 'use', '...'],
          tone: 'sky',
          iconName: 'hook',
        },
        {
          id: 'composition',
          number: '05',
          title: 'Composition API',
          description: 'Composition and lazy-loading utilities.',
          apis: ['memo', 'lazy', 'forwardRef'],
          tone: 'amber',
          iconName: 'layers',
        },
      ],
    },
    hub: {
      eyebrow: '03 · public api hub',
      title: 'Separating public API from internal files',
      description:
        'ReactClient.js does not implement anything itself — it imports from several internal files and re-exports them as the public API.',
      files: [
        { id: 'hooks', name: 'ReactHooks.js', description: 'Hook implementations', tone: 'sky' },
        {
          id: 'jsx',
          name: 'ReactJSXElement.js',
          description: 'Element creation & validation',
          tone: 'violet',
        },
        { id: 'memo', name: 'ReactMemo.js', description: 'memo implementation', tone: 'amber' },
        { id: 'lazy', name: 'ReactLazy.js', description: 'lazy implementation', tone: 'cyan' },
        {
          id: 'transition',
          name: 'ReactStartTransition.js',
          description: 'startTransition implementation',
          tone: 'teal',
        },
      ],
      emphasis:
        'ReactClient.js is not the end of the implementation — it is the doorway where the public API meets.',
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_CODE,
      codeButtons: { primary: 'Open ReactClient.js', secondary: 'See the API flow' },
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: 'Code checkpoint',
      items: [
        {
          id: 'file',
          label: 'File',
          value: 'packages/react/src/ReactClient.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'view',
          label: 'Look at',
          value: 'import statements & the final export block',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: 'Question',
          value: 'Which internal files does React’s public API actually come from?',
          iconName: 'flow',
          tone: 'amber',
        },
      ],
    },
    routes: {
      eyebrow: '05 · api entry routes',
      title: 'Internal entry paths per API',
      description:
        'Three flagship APIs and the internal file each one routes to from ReactClient.js.',
      cards: [
        {
          id: 'useState',
          api: 'useState',
          route: { from: 'ReactClient.js', to: 'ReactHooks.js' },
          description: 'Dispatcher-based call',
          buttonLabel: 'View the code',
          tone: 'sky',
          iconName: 'database',
        },
        {
          id: 'createElement',
          api: 'createElement',
          route: { from: 'ReactClient.js', to: 'ReactJSXElement.js' },
          description: 'React Element creation',
          buttonLabel: 'View the code',
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'startTransition',
          api: 'startTransition',
          route: { from: 'ReactClient.js', to: 'ReactStartTransition.js' },
          description: 'Transition kickoff',
          buttonLabel: 'View the code',
          tone: 'teal',
          iconName: 'refresh',
        },
      ],
    },
    capabilities: {
      eyebrow: '06 · does / does not',
      title: 'What the react package does and does not do',
      doesTitle: 'Does',
      doesItems: [
        {
          title: 'Exposes the public API',
          description: 'Provides Hooks, Component, Element and the rest as public surface.',
        },
        {
          title: 'Creates Elements',
          description: 'Builds React Elements via createElement and friends.',
        },
        {
          title: 'Provides Hook entry points',
          description: 'Hooks enter the internal system through these doorways.',
        },
      ],
      doesNotTitle: 'Does not',
      doesNotItems: [
        {
          title: 'Mount into a DOM container',
          description: 'It never attaches render output to the DOM.',
        },
        {
          title: 'Compute Fiber render work',
          description: 'It does not build, diff or schedule Fibers.',
        },
        {
          title: 'Perform DOM mutations',
          description: 'It does not insert, update or remove DOM nodes directly.',
        },
      ],
      banner:
        'react focuses on describing the UI — applying it to real environments belongs to other packages.',
    },
    quiz: {
      eyebrow: '07 · quick quiz',
      title: 'Quick learning quiz',
      description: 'Can you name the file to read after ReactClient.js?',
      cards: [
        {
          id: 'useState-quiz',
          question: 'Where do you look right after ReactClient.js to study useState?',
          answer: 'ReactHooks.js',
          explanation:
            'Every Hook — including useState — is implemented in ReactHooks.js and reaches the renderer through the internal dispatcher.',
        },
        {
          id: 'element-quiz',
          question: 'Which file owns the internal structure of JSX-created Elements?',
          answer: 'ReactJSXElement.js',
          explanation:
            'createElement and friends live in ReactJSXElement.js, which builds and validates the React Element object.',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'Move to the next step',
      line1: 'You have seen the doorway for the user-facing API.',
      line2Before: 'Next, the package that wires that UI into the browser and the server: ',
      line2Accent: 'react-dom',
      line2After: '.',
      primaryCta: 'Next: the react-dom package →',
      secondaryCta: 'Revisit the previous page',
      primaryHref: '/react-dom-package',
      secondaryHref: '/why-split',
    },
  },
};
