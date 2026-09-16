import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'component' | 'render-with-hooks' | 'hooks-ready';

export type StageNode = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type CallSideId = 'authored' | 'internal';

export type CallSide = {
  id: CallSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type PhaseId =
  | 'lanes'
  | 'current-fiber'
  | 'reset'
  | 'dispatcher'
  | 'invoke'
  | 'collect'
  | 'result';

export type Phase = {
  id: PhaseId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type DispatcherSideId = 'mount' | 'update';

export type DispatcherSide = {
  id: DispatcherSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type RenderWithHooksContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: StageNode[];
  };
  callPath: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [CallSide, CallSide];
    note: string;
  };
  phases: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: Phase[];
    note: string;
  };
  dispatcherSwitch: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [DispatcherSide, DispatcherSide];
    bridge: { headline: string; sub: string };
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

const RENDER_WITH_HOOKS_CODE = `renderLanes = nextRenderLanes;
currentlyRenderingFiber = workInProgress;

workInProgress.memoizedState = null;
workInProgress.updateQueue = null;
workInProgress.lanes = NoLanes;

ReactSharedInternals.H =
  current === null || current.memoizedState === null
    ? HooksDispatcherOnMount
    : HooksDispatcherOnUpdate;

const children = Component(props, secondArg);`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: RenderWithHooksContent = {
  hero: {
    badge: 'Hooks 내부 · 2/10단계',
    title: { line1: '컴포넌트는 그냥 호출되지 않는다', line2: 'renderWithHooks가 무대를 만든다' },
    description:
      'React는 함수 컴포넌트를 부르기 전에 Hook을 추적할 수 있는 환경부터 세팅합니다. 그 환경을 만드는 함수가 renderWithHooks입니다.',
    diagramBadge: 'render stage',
    diagramCaption: 'setup → invoke',
    stages: [
      {
        id: 'component',
        label: 'Counter(props)',
        caption: '우리가 작성한 함수 컴포넌트',
        tone: 'violet',
      },
      {
        id: 'render-with-hooks',
        label: 'renderWithHooks()',
        caption: 'Fiber·Dispatcher를 준비하고 호출',
        tone: 'cyan',
      },
      {
        id: 'hooks-ready',
        label: 'useState / useEffect',
        caption: '이제 Hook이 안전하게 실행된다',
        tone: 'emerald',
      },
    ],
  },
  callPath: {
    badge: '01',
    eyebrow: '호출 경로',
    title: 'JSX 한 줄과 실제 호출 경로',
    description:
      '<Counter /> 한 줄은 컴포넌트를 직접 부르지 않습니다. reconciler가 Fiber를 처리하다가 renderWithHooks를 거쳐야 비로소 함수가 실행됩니다.',
    sides: [
      {
        id: 'authored',
        title: '우리가 쓰는 것',
        badge: 'JSX',
        description: '작성한 쪽에서는 호출 한 번처럼 보입니다.',
        bullets: [
          '<Counter /> 한 줄을 쓴다',
          '컴포넌트 함수가 바로 실행된다고 느낀다',
          'Hook은 그냥 값을 돌려주는 함수처럼 보인다',
        ],
        tone: 'sky',
      },
      {
        id: 'internal',
        title: 'React가 하는 것',
        badge: 'reconciler',
        description: '실제로는 세 단계를 거쳐야 함수 본문에 도착합니다.',
        bullets: [
          'beginWork가 FunctionComponent Fiber를 만난다',
          'updateFunctionComponent가 렌더를 준비한다',
          'renderWithHooks가 환경을 세팅하고 Component(props)를 부른다',
        ],
        tone: 'cyan',
      },
    ],
    note: 'Hook을 쓸 수 있는 이유는 함수가 특별해서가 아니라, 호출되는 위치가 특별하기 때문입니다.',
  },
  phases: {
    badge: '02',
    eyebrow: 'render with hooks',
    title: '무대를 세우는 일곱 단계',
    description:
      'renderWithHooks 본문이 하는 일을 순서대로 끊어 보면, 앞의 네 단계는 준비이고 뒤의 세 단계가 실행입니다.',
    steps: [
      {
        id: 'lanes',
        num: '01',
        title: 'renderLanes 설정',
        description: '이번 렌더가 어떤 우선순위로 도는지 모듈 변수에 기록합니다.',
        tone: 'sky',
      },
      {
        id: 'current-fiber',
        num: '02',
        title: 'currentlyRenderingFiber 설정',
        description: '지금 렌더 중인 Fiber를 가리켜 둡니다. 이후 Hook은 전부 이 Fiber에 붙습니다.',
        tone: 'sky',
      },
      {
        id: 'reset',
        num: '03',
        title: 'Hook 자리 비우기',
        description: 'workInProgress의 memoizedState, updateQueue, lanes를 초기화합니다.',
        tone: 'cyan',
      },
      {
        id: 'dispatcher',
        num: '04',
        title: 'Dispatcher 선택',
        description: 'current가 없거나 memoizedState가 비었으면 mount, 아니면 update를 꽂습니다.',
        tone: 'violet',
      },
      {
        id: 'invoke',
        num: '05',
        title: 'Component(props) 실행',
        description: '준비가 끝난 뒤에야 함수 컴포넌트 본문이 실제로 호출됩니다.',
        tone: 'teal',
      },
      {
        id: 'collect',
        num: '06',
        title: 'Hook 호출 수집',
        description: '본문에서 부른 Hook들이 호출 순서대로 linked list에 쌓입니다.',
        tone: 'teal',
      },
      {
        id: 'result',
        num: '07',
        title: '결과 반환과 정리',
        description: '반환된 children을 넘기고, 전역 상태를 되돌려 다음 컴포넌트를 준비합니다.',
        tone: 'emerald',
      },
    ],
    note: '03의 초기화와 06의 수집이 한 쌍입니다. 자리를 비우고, 호출 순서대로 다시 채웁니다.',
  },
  dispatcherSwitch: {
    badge: '03',
    eyebrow: 'dispatcher',
    title: '04단계에서 갈리는 두 갈래',
    description:
      '같은 useState 호출이 mountState로 갈지 updateState로 갈지는 이 한 줄의 삼항 연산이 결정합니다.',
    sides: [
      {
        id: 'mount',
        title: 'HooksDispatcherOnMount',
        badge: '첫 렌더',
        description: 'current가 null이거나 memoizedState가 비어 있을 때 선택됩니다.',
        bullets: [
          'useState → mountState',
          'Hook 객체를 새로 만들어 linked list에 잇는다',
          'initialState를 memoizedState에 넣는다',
        ],
        tone: 'sky',
      },
      {
        id: 'update',
        title: 'HooksDispatcherOnUpdate',
        badge: '재렌더',
        description: '이미 Hook을 가진 current Fiber가 있을 때 선택됩니다.',
        bullets: [
          'useState → updateState',
          'current의 Hook을 순서대로 따라가며 복제한다',
          '쌓여 있던 update를 처리해 새 상태를 계산한다',
        ],
        tone: 'emerald',
      },
    ],
    bridge: {
      headline: 'current가\n있느냐 없느냐',
      sub: '분기 기준은 컴포넌트가 아니라 Fiber입니다. 같은 컴포넌트라도 current가 없으면 mount로 갑니다.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'renderWithHooks, currentlyRenderingFiber, ReactSharedInternals.H',
    whyLabel: '설명',
    why: 'Dispatcher를 고르는 삼항식이 Component(props) 호출보다 위에 있다는 점을 확인하면 순서가 분명해집니다.',
    code: RENDER_WITH_HOOKS_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Hook은 Fiber 어디에 쌓이는가',
    description:
      '06단계에서 수집된다고만 말한 linked list의 실체를 다음 페이지에서 직접 열어 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/hook-linked-list',
  },
};

const en: RenderWithHooksContent = {
  hero: {
    badge: 'Hooks Internals · 2/10',
    title: { line1: 'A component is never just called', line2: 'renderWithHooks builds the stage' },
    description:
      'Before React invokes a function component it sets up an environment that can track Hooks. renderWithHooks is the function that builds it.',
    diagramBadge: 'render stage',
    diagramCaption: 'setup → invoke',
    stages: [
      {
        id: 'component',
        label: 'Counter(props)',
        caption: 'the function component you wrote',
        tone: 'violet',
      },
      {
        id: 'render-with-hooks',
        label: 'renderWithHooks()',
        caption: 'prepares Fiber and Dispatcher, then calls',
        tone: 'cyan',
      },
      {
        id: 'hooks-ready',
        label: 'useState / useEffect',
        caption: 'only now can a Hook run safely',
        tone: 'emerald',
      },
    ],
  },
  callPath: {
    badge: '01',
    eyebrow: 'call path',
    title: 'One line of JSX, three stops inside',
    description:
      '<Counter /> never calls the component directly. The reconciler walks the Fiber and passes through renderWithHooks before the function body runs.',
    sides: [
      {
        id: 'authored',
        title: 'What we write',
        badge: 'JSX',
        description: 'From the call site it looks like a single invocation.',
        bullets: [
          'You write one line: <Counter />',
          'It feels like the component function runs immediately',
          'Hooks look like plain functions returning a value',
        ],
        tone: 'sky',
      },
      {
        id: 'internal',
        title: 'What React does',
        badge: 'reconciler',
        description: 'It actually takes three stops to reach the function body.',
        bullets: [
          'beginWork meets a FunctionComponent Fiber',
          'updateFunctionComponent prepares the render',
          'renderWithHooks sets up the stage and calls Component(props)',
        ],
        tone: 'cyan',
      },
    ],
    note: 'Hooks work not because the function is special, but because the place it is called from is.',
  },
  phases: {
    badge: '02',
    eyebrow: 'render with hooks',
    title: 'Seven steps that build the stage',
    description:
      'Split the body of renderWithHooks in order and the first four steps are setup while the last three are execution.',
    steps: [
      {
        id: 'lanes',
        num: '01',
        title: 'Set renderLanes',
        description: 'Record at which priority this render is running in a module variable.',
        tone: 'sky',
      },
      {
        id: 'current-fiber',
        num: '02',
        title: 'Set currentlyRenderingFiber',
        description: 'Point at the Fiber being rendered. Every Hook after this attaches to it.',
        tone: 'sky',
      },
      {
        id: 'reset',
        num: '03',
        title: 'Clear the Hook slots',
        description: 'Reset memoizedState, updateQueue and lanes on the workInProgress Fiber.',
        tone: 'cyan',
      },
      {
        id: 'dispatcher',
        num: '04',
        title: 'Pick a Dispatcher',
        description: 'No current, or an empty memoizedState, means mount — otherwise update.',
        tone: 'violet',
      },
      {
        id: 'invoke',
        num: '05',
        title: 'Run Component(props)',
        description: 'Only now does the body of the function component actually get called.',
        tone: 'teal',
      },
      {
        id: 'collect',
        num: '06',
        title: 'Collect Hook calls',
        description: 'Hooks called in the body stack into a linked list in call order.',
        tone: 'teal',
      },
      {
        id: 'result',
        num: '07',
        title: 'Return and reset',
        description: 'Hand back the children and restore globals so the next component can render.',
        tone: 'emerald',
      },
    ],
    note: 'Step 03 and step 06 are a pair: empty the slots, then refill them in call order.',
  },
  dispatcherSwitch: {
    badge: '03',
    eyebrow: 'dispatcher',
    title: 'The fork inside step 04',
    description:
      'Whether the same useState call lands on mountState or updateState is decided by a single ternary.',
    sides: [
      {
        id: 'mount',
        title: 'HooksDispatcherOnMount',
        badge: 'First render',
        description: 'Chosen when current is null or its memoizedState is empty.',
        bullets: [
          'useState → mountState',
          'Creates a fresh Hook object and links it into the list',
          'Stores initialState in memoizedState',
        ],
        tone: 'sky',
      },
      {
        id: 'update',
        title: 'HooksDispatcherOnUpdate',
        badge: 'Re-render',
        description: 'Chosen when a current Fiber already carries Hooks.',
        bullets: [
          'useState → updateState',
          'Walks the current Hook list in order and clones it',
          'Processes the queued updates to compute the new state',
        ],
        tone: 'emerald',
      },
    ],
    bridge: {
      headline: 'Does current\nexist or not',
      sub: 'The branch keys off the Fiber, not the component. The same component goes down the mount path whenever current is missing.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'renderWithHooks, currentlyRenderingFiber, ReactSharedInternals.H',
    whyLabel: 'Why',
    why: 'Seeing the Dispatcher ternary sit above the Component(props) call makes the ordering unambiguous.',
    code: RENDER_WITH_HOOKS_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where Hooks pile up on the Fiber',
    description:
      'Step 06 only said "a linked list". The next page opens that structure and reads it field by field.',
    cta: 'Go to the next page',
    href: '/hook-linked-list',
  },
};

export const renderWithHooksContent: Record<Locale, RenderWithHooksContent> = { ko, en };
