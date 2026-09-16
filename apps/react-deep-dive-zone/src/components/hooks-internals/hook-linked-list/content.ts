import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HookNode = {
  id: string;
  order: string;
  hookName: string;
  memoized: string;
  tone: ToneKey;
};

export type HookFieldId = 'memoized' | 'base-state' | 'base-queue' | 'queue' | 'next';

export type HookField = {
  id: HookFieldId;
  name: string;
  role: string;
  detail: string;
  tone: ToneKey;
};

export type LinkStepId = 'create' | 'first' | 'rest';

export type LinkStep = {
  id: LinkStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type OrderRow = {
  order: string;
  hook: string;
  slot: string;
};

export type HookLinkedListContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    fiberLabel: string;
    fiberField: string;
    nodes: HookNode[];
    tailLabel: string;
  };
  slot: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    note: string;
  };
  fields: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fields: HookField[];
    note: string;
  };
  linking: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: LinkStep[];
    note: string;
  };
  order: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    stable: {
      label: string;
      caption: string;
      rows: OrderRow[];
    };
    broken: {
      label: string;
      caption: string;
      rows: OrderRow[];
    };
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

const FIBER_CODE = `{
  tag: FunctionComponent,
  type: Profile,
  memoizedProps: { ... },

  // 이 한 칸이 Hook linked list의 머리다
  memoizedState: Hook | null,

  updateQueue: UpdateQueue | null,
  child: Fiber | null,
  sibling: Fiber | null,
}`;

const FIBER_CODE_EN = `{
  tag: FunctionComponent,
  type: Profile,
  memoizedProps: { ... },

  // this single slot is the head of the Hook linked list
  memoizedState: Hook | null,

  updateQueue: UpdateQueue | null,
  child: Fiber | null,
  sibling: Fiber | null,
}`;

const MOUNT_HOOK_CODE = `const hook = {
  memoizedState: null,
  baseState: null,
  baseQueue: null,
  queue: null,
  next: null,
};

if (workInProgressHook === null) {
  currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
} else {
  workInProgressHook = workInProgressHook.next = hook;
}

return hook;`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: HookLinkedListContent = {
  hero: {
    badge: 'Hooks 내부 · 3/10단계',
    title: { line1: 'Hook은 배열이 아니라', line2: '한 줄로 이어진 연결 리스트다' },
    description:
      'Fiber에는 Hook을 담는 배열이 없습니다. memoizedState 한 칸이 첫 Hook을 가리키고, 그다음부터는 next가 이어 붙습니다.',
    diagramBadge: 'hook list',
    diagramCaption: 'memoizedState → next → next',
    fiberLabel: 'Profile Fiber',
    fiberField: 'memoizedState',
    nodes: [
      { id: 'state', order: '1', hookName: 'useState', memoized: '"" (name)', tone: 'sky' },
      { id: 'ref', order: '2', hookName: 'useRef', memoized: '{ current: null }', tone: 'cyan' },
      { id: 'effect', order: '3', hookName: 'useEffect', memoized: 'Effect 객체', tone: 'emerald' },
    ],
    tailLabel: 'next: null',
  },
  slot: {
    badge: '01',
    eyebrow: 'memoizedState',
    title: 'Fiber에서 Hook이 사는 한 칸',
    description:
      'Fiber 구조체를 열어 보면 Hook 전용 필드는 하나뿐입니다. 함수 컴포넌트에서 memoizedState는 상태값이 아니라 Hook 객체를 가리킵니다.',
    codeHeader: 'packages/react-reconciler/src/ReactFiber.js',
    code: FIBER_CODE,
    note: '같은 memoizedState라도 ClassComponent Fiber에서는 state 객체를, FunctionComponent Fiber에서는 Hook을 가리킵니다.',
  },
  fields: {
    badge: '02',
    eyebrow: 'hook object',
    title: 'Hook 객체의 다섯 칸',
    description:
      '어떤 Hook이든 저장되는 모양은 같습니다. 다섯 필드 중 넷은 값과 업데이트를 위한 것이고, 마지막 하나가 연결을 담당합니다.',
    fields: [
      {
        id: 'memoized',
        name: 'memoizedState',
        role: '이번 렌더에서 확정된 값',
        detail: 'useState면 상태값, useEffect면 effect 객체가 들어갑니다.',
        tone: 'sky',
      },
      {
        id: 'base-state',
        name: 'baseState',
        role: '업데이트 계산의 출발점',
        detail: '건너뛴 update가 있을 때 다시 계산할 기준으로 남습니다.',
        tone: 'cyan',
      },
      {
        id: 'base-queue',
        name: 'baseQueue',
        role: '아직 처리 못 한 update',
        detail: '우선순위가 낮아 이번 렌더에서 밀린 update가 여기 남습니다.',
        tone: 'amber',
      },
      {
        id: 'queue',
        name: 'queue',
        role: 'dispatch가 쌓이는 큐',
        detail: 'setState 호출이 만든 update가 이 원형 리스트에 붙습니다.',
        tone: 'violet',
      },
      {
        id: 'next',
        name: 'next',
        role: '다음 Hook 포인터',
        detail: '호출 순서상 바로 다음 Hook을 가리킵니다. 마지막은 null입니다.',
        tone: 'emerald',
      },
    ],
    note: 'Hook에는 이름도 타입도 없습니다. 무슨 Hook이었는지 기억하는 필드가 아예 존재하지 않습니다.',
  },
  linking: {
    badge: '03',
    eyebrow: 'mountWorkInProgressHook',
    title: 'Hook이 줄에 매달리는 순간',
    description:
      '렌더 중 Hook을 부를 때마다 이 함수가 빈 Hook 객체를 하나 만들고, 리스트의 맨 끝에 붙입니다.',
    steps: [
      {
        id: 'create',
        badge: 'step 1',
        title: '빈 Hook 객체 생성',
        body: '다섯 필드가 모두 null인 객체를 새로 만듭니다.',
        tone: 'sky',
      },
      {
        id: 'first',
        badge: 'step 2',
        title: '첫 Hook이면 Fiber에 직접',
        body: 'workInProgressHook이 비어 있으면 Fiber의 memoizedState가 이 Hook을 가리킵니다.',
        tone: 'cyan',
      },
      {
        id: 'rest',
        badge: 'step 3',
        title: '아니면 이전 Hook의 next에',
        body: '이미 Hook이 있으면 직전 Hook의 next에 매달고, 커서를 새 Hook으로 옮깁니다.',
        tone: 'emerald',
      },
    ],
    note: '리스트에 붙이는 기준은 Hook의 종류가 아니라 순서뿐입니다. 부른 순서가 곧 위치입니다.',
  },
  order: {
    badge: '04',
    eyebrow: 'call order',
    title: '순서가 곧 Hook의 이름표',
    description:
      '재렌더 때 React는 리스트를 처음부터 순서대로 따라갑니다. 호출 순서가 흔들리면 n번째 자리에 다른 Hook의 값이 들어옵니다.',
    stable: {
      label: '순서가 고정될 때',
      caption: '매 렌더 같은 순서로 부르면 자리와 값이 그대로 맞습니다.',
      rows: [
        { order: '1', hook: 'useState(name)', slot: 'Hook #1의 값' },
        { order: '2', hook: 'useRef(input)', slot: 'Hook #2의 값' },
        { order: '3', hook: 'useEffect(...)', slot: 'Hook #3의 값' },
      ],
    },
    broken: {
      label: '조건문 안에서 부를 때',
      caption: 'if로 첫 Hook을 건너뛰면 그 뒤가 전부 한 칸씩 당겨집니다.',
      rows: [
        { order: '1', hook: '(건너뜀)', slot: '—' },
        { order: '2', hook: 'useRef(input)', slot: 'Hook #1의 값을 읽음' },
        { order: '3', hook: 'useEffect(...)', slot: 'Hook #2의 값을 읽음' },
      ],
    },
    note: 'Rules of Hooks가 관례가 아니라 자료구조의 요구인 이유가 여기 있습니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'mountWorkInProgressHook, workInProgressHook, hook.next',
    whyLabel: '설명',
    why: 'if / else 두 갈래가 각각 첫 Hook과 나머지 Hook을 담당한다는 점만 확인하면 구조가 끝납니다.',
    code: MOUNT_HOOK_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'useState는 이 칸을 어떻게 쓰는가',
    description:
      '빈 Hook 객체가 실제 상태값과 dispatch 함수를 갖추는 과정을 다음 페이지에서 따라갑니다.',
    cta: '다음 페이지로 이동',
    href: '/use-state-internal',
  },
};

const en: HookLinkedListContent = {
  hero: {
    badge: 'Hooks Internals · 3/10',
    title: { line1: 'Hooks are not an array', line2: 'they are one linked chain' },
    description:
      'A Fiber has no array for Hooks. A single memoizedState slot points at the first Hook, and every Hook after that hangs off next.',
    diagramBadge: 'hook list',
    diagramCaption: 'memoizedState → next → next',
    fiberLabel: 'Profile Fiber',
    fiberField: 'memoizedState',
    nodes: [
      { id: 'state', order: '1', hookName: 'useState', memoized: '"" (name)', tone: 'sky' },
      { id: 'ref', order: '2', hookName: 'useRef', memoized: '{ current: null }', tone: 'cyan' },
      {
        id: 'effect',
        order: '3',
        hookName: 'useEffect',
        memoized: 'Effect object',
        tone: 'emerald',
      },
    ],
    tailLabel: 'next: null',
  },
  slot: {
    badge: '01',
    eyebrow: 'memoizedState',
    title: 'The one slot where Hooks live',
    description:
      'Open the Fiber struct and there is exactly one Hook-related field. On a function component, memoizedState holds a Hook object rather than a state value.',
    codeHeader: 'packages/react-reconciler/src/ReactFiber.js',
    code: FIBER_CODE_EN,
    note: 'The same memoizedState field points at a state object on a ClassComponent Fiber and at a Hook on a FunctionComponent Fiber.',
  },
  fields: {
    badge: '02',
    eyebrow: 'hook object',
    title: 'The five slots of a Hook',
    description:
      'Every Hook is stored in the same shape. Four of the five fields carry values and updates; the last one carries the link.',
    fields: [
      {
        id: 'memoized',
        name: 'memoizedState',
        role: 'The value settled this render',
        detail: 'A state value for useState, an effect object for useEffect.',
        tone: 'sky',
      },
      {
        id: 'base-state',
        name: 'baseState',
        role: 'Starting point for recomputation',
        detail: 'Kept as the base to recompute from when some updates were skipped.',
        tone: 'cyan',
      },
      {
        id: 'base-queue',
        name: 'baseQueue',
        role: 'Updates not processed yet',
        detail: 'Updates deferred out of this render because of lower priority land here.',
        tone: 'amber',
      },
      {
        id: 'queue',
        name: 'queue',
        role: 'Queue that dispatches pile into',
        detail: 'Updates created by setState attach to this circular list.',
        tone: 'violet',
      },
      {
        id: 'next',
        name: 'next',
        role: 'Pointer to the next Hook',
        detail: 'Points at the next Hook in call order. The last one is null.',
        tone: 'emerald',
      },
    ],
    note: 'A Hook carries no name and no type. There is simply no field that remembers which Hook it was.',
  },
  linking: {
    badge: '03',
    eyebrow: 'mountWorkInProgressHook',
    title: 'The moment a Hook joins the chain',
    description:
      'Every time a Hook is called during render, this function creates one empty Hook object and appends it to the end of the list.',
    steps: [
      {
        id: 'create',
        badge: 'step 1',
        title: 'Create an empty Hook',
        body: 'Build a fresh object whose five fields are all null.',
        tone: 'sky',
      },
      {
        id: 'first',
        badge: 'step 2',
        title: 'First Hook attaches to the Fiber',
        body: 'If workInProgressHook is empty, the Fiber memoizedState points at this Hook.',
        tone: 'cyan',
      },
      {
        id: 'rest',
        badge: 'step 3',
        title: 'Otherwise it hangs off next',
        body: 'If Hooks already exist, append to the previous next and move the cursor forward.',
        tone: 'emerald',
      },
    ],
    note: 'Nothing about the Hook kind matters here. Position in the chain is decided purely by call order.',
  },
  order: {
    badge: '04',
    eyebrow: 'call order',
    title: 'Order is the only name a Hook has',
    description:
      'On a re-render React walks the list from the head in order. Shift the call order and slot n hands back another Hook value.',
    stable: {
      label: 'When order holds',
      caption: 'Call in the same order every render and slots line up with values.',
      rows: [
        { order: '1', hook: 'useState(name)', slot: 'value of Hook #1' },
        { order: '2', hook: 'useRef(input)', slot: 'value of Hook #2' },
        { order: '3', hook: 'useEffect(...)', slot: 'value of Hook #3' },
      ],
    },
    broken: {
      label: 'When a call is conditional',
      caption: 'Skip the first Hook behind an if and everything after shifts up one slot.',
      rows: [
        { order: '1', hook: '(skipped)', slot: '—' },
        { order: '2', hook: 'useRef(input)', slot: 'reads value of Hook #1' },
        { order: '3', hook: 'useEffect(...)', slot: 'reads value of Hook #2' },
      ],
    },
    note: 'This is why the Rules of Hooks are a requirement of the data structure, not a style convention.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'mountWorkInProgressHook, workInProgressHook, hook.next',
    whyLabel: 'Why',
    why: 'Once you see that the if and else branches cover the first Hook and every later Hook, the structure is fully explained.',
    code: MOUNT_HOOK_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How useState fills that slot',
    description:
      'The next page follows an empty Hook object as it gains a real state value and a dispatch function.',
    cta: 'Go to the next page',
    href: '/use-state-internal',
  },
};

export const hookLinkedListContent: Record<Locale, HookLinkedListContent> = { ko, en };
