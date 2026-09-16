import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ChainNodeId = 'user' | 'public' | 'dispatcher' | 'impl';

export type ChainNode = {
  id: ChainNodeId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type FlowStepId = 'user' | 'public-api' | 'resolve' | 'dispatch' | 'impl';

export type FlowStep = {
  id: FlowStepId;
  num: string;
  title: string;
  description: string;
  file?: string;
  tone: ToneKey;
};

export type DispatcherCardId = 'mount' | 'update' | 'rerender';

export type DispatcherCard = {
  id: DispatcherCardId;
  title: string;
  family: string;
  description: string;
  tone: ToneKey;
};

export type HookRow = {
  hook: string;
  publicApi: string;
  dispatcherCall: string;
  impl: string;
};

export type HooksEntryPointContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    chain: ChainNode[];
  };
  overview: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    steps: FlowStep[];
    note: string;
  };
  dispatcher: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: DispatcherCard[];
    note: string;
  };
  hookTable: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: HookRow[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_HOOKS_SOURCE = `export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

export function useEffect(create, deps) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}`;

const REACT_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js';

const ko: HooksEntryPointContent = {
  hero: {
    badge: 'Hooks 내부 · 1/10단계',
    title: { line1: '우리가 호출하는 useState는', line2: '구현이 아니라 입구다' },
    description:
      'useState와 useEffect는 상태 로직을 직접 실행하지 않습니다. 현재 Dispatcher를 찾아 그쪽으로 넘기는 얇은 진입점일 뿐입니다.',
    diagramBadge: 'hook entry',
    diagramCaption: 'public API → dispatcher',
    chain: [
      { id: 'user', label: 'useState(0)', caption: '우리가 작성한 컴포넌트', tone: 'violet' },
      { id: 'public', label: 'ReactHooks.js', caption: '공개 Hook 함수 정의', tone: 'sky' },
      {
        id: 'dispatcher',
        label: 'resolveDispatcher()',
        caption: '현재 Dispatcher 조회',
        tone: 'cyan',
      },
      {
        id: 'impl',
        label: 'ReactFiberHooks.js',
        caption: 'mountState / updateState',
        tone: 'emerald',
      },
    ],
  },
  overview: {
    badge: '01',
    eyebrow: '진입 흐름',
    title: 'Hook 호출은 다섯 단계를 지난다',
    description:
      '컴포넌트에서 useState를 부른 순간부터 실제 상태 로직이 실행되기까지, React가 거치는 경로입니다.',
    fileLabel: '파일',
    steps: [
      {
        id: 'user',
        num: '01',
        title: '사용자 코드',
        description: '우리가 작성한 컴포넌트에서 useState(0)을 호출합니다.',
        tone: 'violet',
      },
      {
        id: 'public-api',
        num: '02',
        title: '공개 useState',
        description: 'react 패키지가 외부로 내보내는 Hook 함수가 호출을 받습니다.',
        file: 'packages/react/src/ReactHooks.js',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '03',
        title: 'resolveDispatcher()',
        description: '지금 렌더링 상황에 맞는 Dispatcher 객체를 찾아옵니다.',
        file: 'packages/react/src/ReactHooks.js',
        tone: 'cyan',
      },
      {
        id: 'dispatch',
        num: '04',
        title: 'dispatcher.useState()',
        description: '찾아온 Dispatcher에 붙어 있는 useState 구현으로 넘깁니다.',
        tone: 'teal',
      },
      {
        id: 'impl',
        num: '05',
        title: 'mountState / updateState',
        description: 'Hook 객체를 만들고 상태를 읽는 실제 로직이 여기서 실행됩니다.',
        file: 'packages/react-reconciler/src/ReactFiberHooks.js',
        tone: 'emerald',
      },
    ],
    note: '공개 Hook은 스스로 아무 일도 하지 않습니다. 분기는 전부 Dispatcher가 담당합니다.',
  },
  dispatcher: {
    badge: '02',
    eyebrow: 'dispatcher',
    title: 'Dispatcher가 필요한 이유',
    description:
      '같은 useState 호출이라도 렌더링 상황에 따라 연결되는 내부 구현이 달라져야 합니다. 그 분기를 호출부가 아니라 Dispatcher가 흡수합니다.',
    cards: [
      {
        id: 'mount',
        title: '최초 렌더',
        family: 'mount 계열',
        description: 'Hook 객체를 새로 만들고 초기 상태를 넣습니다.',
        tone: 'sky',
      },
      {
        id: 'update',
        title: '업데이트 렌더',
        family: 'update 계열',
        description: '이전 Hook 객체를 이어받아 쌓인 update를 처리합니다.',
        tone: 'cyan',
      },
      {
        id: 'rerender',
        title: '렌더 중 재실행',
        family: 'rerender 계열',
        description: '렌더 도중 setState가 불려 같은 컴포넌트를 다시 실행할 때 쓰입니다.',
        tone: 'violet',
      },
    ],
    note: 'Dispatcher를 갈아 끼우는 주체는 renderWithHooks입니다. 다음 페이지에서 그 지점을 봅니다.',
  },
  hookTable: {
    badge: '03',
    eyebrow: 'hook by hook',
    title: '어떤 Hook이든 경로는 같다',
    description:
      'useState만 특별한 것이 아닙니다. 공개 API → Dispatcher → 실제 구현이라는 세 칸 구조는 모든 Hook이 공유합니다.',
    headers: ['Hook', '공개 API', 'Dispatcher 호출', '실제 구현'],
    rows: [
      {
        hook: 'useState',
        publicApi: '`ReactHooks.js`의 `useState`',
        dispatcherCall: '`dispatcher.useState(initialState)`',
        impl: '`mountState` / `updateState`',
      },
      {
        hook: 'useEffect',
        publicApi: '`ReactHooks.js`의 `useEffect`',
        dispatcherCall: '`dispatcher.useEffect(create, deps)`',
        impl: '`mountEffect` / `updateEffect`',
      },
      {
        hook: 'useReducer',
        publicApi: '`ReactHooks.js`의 `useReducer`',
        dispatcherCall: '`dispatcher.useReducer(reducer, initialArg)`',
        impl: '`mountReducer` / `updateReducer`',
      },
    ],
    note: '공개 파일에서 Hook 하나의 본문이 두 줄을 넘는다면, 그건 진입점이 아니라 다른 역할입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react/src/ReactHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'resolveDispatcher, useState, useEffect',
    whyLabel: '설명',
    why: '두 함수의 본문이 똑같이 두 줄인지 확인하면, 공개 API가 진입점일 뿐이라는 사실이 눈으로 잡힙니다.',
    code: REACT_HOOKS_SOURCE,
    primaryCta: 'ReactHooks.js 읽기',
    primaryHref: REACT_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'renderWithHooks가 Dispatcher를 고르는 지점',
    description:
      'Dispatcher를 실제로 갈아 끼우는 함수가 renderWithHooks입니다. 다음 페이지에서 그 실행 순서를 따라갑니다.',
    cta: '다음 페이지로 이동',
    href: '/render-with-hooks',
  },
};

const en: HooksEntryPointContent = {
  hero: {
    badge: 'Hooks Internals · 1/10',
    title: { line1: 'The useState you call', line2: 'is a door, not the room' },
    description:
      'useState and useEffect never run state logic themselves. They are thin entry points that look up the current Dispatcher and hand the call over.',
    diagramBadge: 'hook entry',
    diagramCaption: 'public API → dispatcher',
    chain: [
      { id: 'user', label: 'useState(0)', caption: 'the component you wrote', tone: 'violet' },
      { id: 'public', label: 'ReactHooks.js', caption: 'public Hook definitions', tone: 'sky' },
      {
        id: 'dispatcher',
        label: 'resolveDispatcher()',
        caption: 'look up current Dispatcher',
        tone: 'cyan',
      },
      {
        id: 'impl',
        label: 'ReactFiberHooks.js',
        caption: 'mountState / updateState',
        tone: 'emerald',
      },
    ],
  },
  overview: {
    badge: '01',
    eyebrow: 'entry flow',
    title: 'A Hook call passes through five stops',
    description:
      'The path React takes from the moment a component calls useState to the moment real state logic runs.',
    fileLabel: 'File',
    steps: [
      {
        id: 'user',
        num: '01',
        title: 'User code',
        description: 'A component you wrote calls useState(0).',
        tone: 'violet',
      },
      {
        id: 'public-api',
        num: '02',
        title: 'Public useState',
        description: 'The Hook function the react package exports receives the call.',
        file: 'packages/react/src/ReactHooks.js',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '03',
        title: 'resolveDispatcher()',
        description: 'Fetches the Dispatcher object that matches the current render situation.',
        file: 'packages/react/src/ReactHooks.js',
        tone: 'cyan',
      },
      {
        id: 'dispatch',
        num: '04',
        title: 'dispatcher.useState()',
        description: 'Hands the call to the useState implementation attached to that Dispatcher.',
        tone: 'teal',
      },
      {
        id: 'impl',
        num: '05',
        title: 'mountState / updateState',
        description: 'The real logic that builds the Hook object and reads state runs here.',
        file: 'packages/react-reconciler/src/ReactFiberHooks.js',
        tone: 'emerald',
      },
    ],
    note: 'Public Hooks do nothing on their own. Every branch is absorbed by the Dispatcher.',
  },
  dispatcher: {
    badge: '02',
    eyebrow: 'dispatcher',
    title: 'Why the Dispatcher exists',
    description:
      'The same useState call must reach a different internal implementation depending on the render situation. The Dispatcher absorbs that branch so the call site never has to.',
    cards: [
      {
        id: 'mount',
        title: 'Initial render',
        family: 'mount family',
        description: 'Creates a fresh Hook object and stores the initial state.',
        tone: 'sky',
      },
      {
        id: 'update',
        title: 'Update render',
        family: 'update family',
        description: 'Reuses the previous Hook object and processes the queued updates.',
        tone: 'cyan',
      },
      {
        id: 'rerender',
        title: 'Re-run during render',
        family: 'rerender family',
        description: 'Used when setState fires mid-render and the same component runs again.',
        tone: 'violet',
      },
    ],
    note: 'renderWithHooks is what swaps the Dispatcher in and out. The next page opens that spot.',
  },
  hookTable: {
    badge: '03',
    eyebrow: 'hook by hook',
    title: 'Every Hook takes the same road',
    description:
      'useState is not special. Public API → Dispatcher → real implementation is a three-column shape every Hook shares.',
    headers: ['Hook', 'Public API', 'Dispatcher call', 'Real implementation'],
    rows: [
      {
        hook: 'useState',
        publicApi: '`useState` in `ReactHooks.js`',
        dispatcherCall: '`dispatcher.useState(initialState)`',
        impl: '`mountState` / `updateState`',
      },
      {
        hook: 'useEffect',
        publicApi: '`useEffect` in `ReactHooks.js`',
        dispatcherCall: '`dispatcher.useEffect(create, deps)`',
        impl: '`mountEffect` / `updateEffect`',
      },
      {
        hook: 'useReducer',
        publicApi: '`useReducer` in `ReactHooks.js`',
        dispatcherCall: '`dispatcher.useReducer(reducer, initialArg)`',
        impl: '`mountReducer` / `updateReducer`',
      },
    ],
    note: 'If a Hook body in the public file runs past two lines, it is doing something other than entry.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react/src/ReactHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'resolveDispatcher, useState, useEffect',
    whyLabel: 'Why',
    why: 'Seeing both bodies land on the same two lines makes it concrete that the public API is only an entry point.',
    code: REACT_HOOKS_SOURCE,
    primaryCta: 'Read ReactHooks.js',
    primaryHref: REACT_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where renderWithHooks picks the Dispatcher',
    description:
      'renderWithHooks is the function that actually swaps the Dispatcher. The next page follows its execution order.',
    cta: 'Go to the next page',
    href: '/render-with-hooks',
  },
};

export const hooksEntryPointContent: Record<Locale, HooksEntryPointContent> = { ko, en };
