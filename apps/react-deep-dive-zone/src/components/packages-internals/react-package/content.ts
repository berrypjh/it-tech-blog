import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

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
  href: string;
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

export type ReactPackageContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    centerCard: { title: string; caption: string };
    tokens: ApiToken[];
    apiNetworkAriaLabel: string;
  };
  groups: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ApiGroupCard[];
  };
  sourceCheckpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: CheckpointItem[];
    files: InternalFileCard[];
    filesLabel: string;
    emphasis: string;
    codeCaption: string;
    code: string;
    codeCta: string;
    codeHref: string;
  };
  routes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: EntryRouteCard[];
  };
  capabilities: {
    badge: string;
    eyebrow: string;
    title: string;
    doesTitle: string;
    doesItems: CapabilityItem[];
    doesNotTitle: string;
    doesNotItems: CapabilityItem[];
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

const REACT_CLIENT_CODE = `// 내부 구현 파일에서 기능을 가져온다
import { useState, useEffect, use } from './ReactHooks';
import { createElement, cloneElement } from './ReactJSXElement';
import { memo } from './ReactMemo';
import { lazy } from './ReactLazy';
// ...

// public API를 외부로 내보낸다
export {
  // Element API
  createElement,
  cloneElement,
  isValidElement,

  // Hooks
  useState,
  useEffect,
  useTransition,
  use,

  // Composition API
  memo,
  lazy,
  forwardRef,
  // ...
};`;

export const reactPackageContent: Record<Locale, ReactPackageContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 2/10단계',
      title: {
        line1: 'react 패키지는 우리가',
        line2: '직접 호출하는 API의 입구입니다.',
      },
      description:
        'useState, useEffect, createElement, memo, lazy, use, useActionState 같은 기능이 여기서 노출됩니다.',
      centerCard: { title: 'react', caption: 'public API의 입구' },
      tokens: HERO_TOKENS_KO,
      apiNetworkAriaLabel:
        'useState, useEffect, createElement, memo, lazy, useTransition, useActionState, use API가 중앙 react 카드와 점선으로 연결되는 네트워크',
    },
    groups: {
      badge: '01',
      eyebrow: 'API 묶음',
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
    sourceCheckpoint: {
      badge: '02',
      eyebrow: '공개 API',
      title: 'public API와 내부 구현 파일의 분리',
      description:
        'public API가 실제로 어떤 내부 파일에서 모이는지, ReactClient.js의 import/export 구문에서 직접 확인합니다.',
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
      filesLabel: '내부 구현 파일',
      emphasis:
        'ReactClient.js는 직접 구현하는 곳이 아니라, 내부 파일들의 기능을 모아 public API로 내보내는 입구입니다.',
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_CODE,
      codeCta: 'GitHub에서 ReactClient.js 보기',
      codeHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
    },
    routes: {
      badge: '03',
      eyebrow: '진입 경로',
      title: 'API별 내부 진입 경로',
      description: '대표 API 3개가 ReactClient.js를 거쳐 어떤 내부 파일로 이어지는지 따라갑니다.',
      cards: [
        {
          id: 'useState',
          api: 'useState',
          route: { from: 'ReactClient.js', to: 'ReactHooks.js' },
          description: 'dispatcher 기반 호출',
          buttonLabel: '코드에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js',
          tone: 'sky',
          iconName: 'database',
        },
        {
          id: 'createElement',
          api: 'createElement',
          route: { from: 'ReactClient.js', to: 'ReactJSXElement.js' },
          description: 'React Element 생성 로직',
          buttonLabel: '코드에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'startTransition',
          api: 'startTransition',
          route: { from: 'ReactClient.js', to: 'ReactStartTransition.js' },
          description: '전환(transition) 시작 처리',
          buttonLabel: '코드에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactStartTransition.js',
          tone: 'teal',
          iconName: 'refresh',
        },
      ],
    },
    capabilities: {
      badge: '04',
      eyebrow: '역할 경계',
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
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'react-dom 패키지',
      description:
        '사용자-facing API의 입구를 봤다면, 이제 그 UI를 실제 브라우저와 서버 환경에 연결하는 react-dom으로 이동합니다.',
      cta: '다음 페이지로 이동',
      href: '/react-dom-package',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 2/10',
      title: {
        line1: 'The react package is the doorway',
        line2: 'to every API developers call directly.',
      },
      description:
        'useState, useEffect, createElement, memo, lazy, use, useActionState — all start here.',
      centerCard: { title: 'react', caption: 'doorway to the public API' },
      tokens: HERO_TOKENS_EN,
      apiNetworkAriaLabel:
        'useState, useEffect, createElement, memo, lazy, useTransition, useActionState, use connect to the central react card with dashed lines.',
    },
    groups: {
      badge: '01',
      eyebrow: 'API GROUPS',
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
    sourceCheckpoint: {
      badge: '02',
      eyebrow: 'PUBLIC API',
      title: 'Separating public API from internal files',
      description:
        'See exactly which internal files React’s public API comes together from by reading ReactClient.js’s import/export statements.',
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
      filesLabel: 'Internal implementation files',
      emphasis:
        'ReactClient.js doesn’t implement anything itself — it’s the doorway that gathers the internal files into the public API.',
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_CODE,
      codeCta: 'View ReactClient.js on GitHub',
      codeHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
    },
    routes: {
      badge: '03',
      eyebrow: 'ENTRY ROUTES',
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
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js',
          tone: 'sky',
          iconName: 'database',
        },
        {
          id: 'createElement',
          api: 'createElement',
          route: { from: 'ReactClient.js', to: 'ReactJSXElement.js' },
          description: 'React Element creation',
          buttonLabel: 'View the code',
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
          tone: 'violet',
          iconName: 'code',
        },
        {
          id: 'startTransition',
          api: 'startTransition',
          route: { from: 'ReactClient.js', to: 'ReactStartTransition.js' },
          description: 'Transition kickoff',
          buttonLabel: 'View the code',
          href: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactStartTransition.js',
          tone: 'teal',
          iconName: 'refresh',
        },
      ],
    },
    capabilities: {
      badge: '04',
      eyebrow: 'DOES / DOES NOT',
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
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'the react-dom package',
      description:
        'You have seen the doorway for the user-facing API. Next, the package that wires that UI into the browser and the server: react-dom.',
      cta: 'Go to the next page',
      href: '/react-dom-package',
    },
  },
};
