import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ProductId = 'state' | 'dispatch' | 'queue';

export type Product = {
  id: ProductId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type MountStepId = 'call' | 'hook' | 'lazy-init' | 'store' | 'queue' | 'bind' | 'return';

export type MountStep = {
  id: MountStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type QueueFieldId = 'pending' | 'lanes' | 'dispatch' | 'last-reducer' | 'last-state';

export type QueueField = {
  id: QueueFieldId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type BindStepId = 'raw' | 'bind' | 'handed';

export type BindStep = {
  id: BindStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type UseStateInternalsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    call: string;
    products: Product[];
  };
  mountFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: MountStep[];
    note: string;
  };
  queueShape: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    fields: QueueField[];
    note: string;
  };
  dispatchBind: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: BindStep[];
    codeHeader: string;
    code: string;
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

const HOOK_SHAPE_CODE = `Hook {
  memoizedState: 0,
  baseState: 0,
  baseQueue: null,
  queue: {
    pending: null,
    lanes: NoLanes,
    dispatch: setCount,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: 0,
  },
  next: null,
}`;

const MOUNT_STATE_CODE = `function mountStateImpl(initialState) {
  const hook = mountWorkInProgressHook();

  if (typeof initialState === 'function') {
    initialState = initialState();
  }

  hook.memoizedState = hook.baseState = initialState;

  const queue = {
    pending: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState,
  };

  hook.queue = queue;
  return hook;
}`;

const DISPATCH_BIND_CODE = `const dispatch = (queue.dispatch = dispatchSetState.bind(
  null,
  currentlyRenderingFiber,
  queue,
));

return [hook.memoizedState, dispatch];`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: UseStateInternalsContent = {
  hero: {
    badge: 'Hooks 내부 · 4/10단계',
    title: { line1: 'useState가 만드는 것은', line2: '값 하나가 아니라 셋이다' },
    description:
      '한 줄 호출로 상태값, 업데이트를 쌓을 queue, 그리고 그 queue를 기억하는 dispatch 함수가 한꺼번에 만들어집니다.',
    diagramBadge: 'mount state',
    diagramCaption: 'one call, three outputs',
    callLabel: '우리가 쓰는 한 줄',
    call: 'const [count, setCount] = useState(0);',
    products: [
      { id: 'state', label: 'hook.memoizedState', caption: '0 — 이번 렌더의 상태값', tone: 'sky' },
      {
        id: 'queue',
        label: 'hook.queue',
        caption: '앞으로 들어올 update를 쌓을 자리',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        label: 'queue.dispatch',
        caption: 'fiber와 queue를 묶어 둔 setCount',
        tone: 'teal',
      },
    ],
  },
  mountFlow: {
    badge: '01',
    eyebrow: 'mountState',
    title: '첫 렌더에서 벌어지는 일곱 단계',
    description:
      'mountState는 앞 페이지에서 본 빈 Hook 객체를 받아, 상태와 queue와 dispatch를 차례로 채워 넣습니다.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'useState(0) 호출',
        description: 'Dispatcher가 mount 계열이므로 mountState로 들어옵니다.',
        tone: 'sky',
      },
      {
        id: 'hook',
        num: '02',
        title: '빈 Hook 확보',
        description: 'mountWorkInProgressHook이 새 Hook을 만들어 리스트 끝에 붙입니다.',
        tone: 'violet',
      },
      {
        id: 'lazy-init',
        num: '03',
        title: '함수면 한 번 실행',
        description: 'initialState가 함수면 여기서 호출해 값으로 바꿉니다. 게으른 초기화입니다.',
        tone: 'cyan',
      },
      {
        id: 'store',
        num: '04',
        title: 'memoizedState와 baseState에 저장',
        description: '같은 값을 두 칸에 함께 넣어 둡니다. 재계산의 기준이 필요하기 때문입니다.',
        tone: 'sky',
      },
      {
        id: 'queue',
        num: '05',
        title: 'UpdateQueue 생성',
        description: 'pending, lanes, dispatch, lastRendered* 다섯 칸을 가진 객체를 만듭니다.',
        tone: 'violet',
      },
      {
        id: 'bind',
        num: '06',
        title: 'dispatch 바인딩',
        description: 'dispatchSetState에 현재 fiber와 이 queue를 미리 묶어 둡니다.',
        tone: 'teal',
      },
      {
        id: 'return',
        num: '07',
        title: '[state, dispatch] 반환',
        description: '구조 분해로 받는 그 배열이 여기서 만들어집니다.',
        tone: 'emerald',
      },
    ],
    note: '03의 게으른 초기화는 첫 렌더에서만 일어납니다. 재렌더에서는 initialState를 아예 쳐다보지 않습니다.',
  },
  queueShape: {
    badge: '02',
    eyebrow: 'update queue',
    title: 'queue가 가진 다섯 칸',
    description:
      'Hook 객체의 queue 필드를 열면 다시 다섯 칸이 나옵니다. 상태를 저장하는 쪽이 아니라, 앞으로 들어올 변경을 관리하는 쪽입니다.',
    codeHeader: 'Hook (useState 기준)',
    code: HOOK_SHAPE_CODE,
    fields: [
      {
        id: 'pending',
        name: 'pending',
        role: '대기 중인 update',
        description: 'setCount가 만든 update가 붙는 원형 연결 리스트의 끝을 가리킵니다.',
        tone: 'violet',
      },
      {
        id: 'lanes',
        name: 'lanes',
        role: '쌓인 우선순위',
        description: '이 queue에 들어온 update들의 lane을 모아 둡니다.',
        tone: 'amber',
      },
      {
        id: 'dispatch',
        name: 'dispatch',
        role: '사용자가 부르는 함수',
        description: 'bind로 fiber와 queue가 미리 묶인 setCount 자신입니다.',
        tone: 'teal',
      },
      {
        id: 'last-reducer',
        name: 'lastRenderedReducer',
        role: '마지막에 쓴 reducer',
        description: 'useState는 항상 basicStateReducer가 들어갑니다.',
        tone: 'cyan',
      },
      {
        id: 'last-state',
        name: 'lastRenderedState',
        role: '마지막 렌더의 값',
        description: '같은 값으로의 setState를 조기에 걸러 내는 비교 기준이 됩니다.',
        tone: 'sky',
      },
    ],
    note: 'lastRenderedReducer가 있다는 것은 useState가 내부적으로 reducer로 돌아간다는 뜻입니다. 6페이지에서 이어집니다.',
  },
  dispatchBind: {
    badge: '03',
    eyebrow: 'dispatchSetState',
    title: 'setCount가 컴포넌트를 기억하는 법',
    description:
      'setCount는 특별한 함수가 아닙니다. 공용 함수 하나에 현재 fiber와 이 Hook의 queue를 bind로 붙여 둔 것뿐입니다.',
    steps: [
      {
        id: 'raw',
        badge: 'step 1',
        title: 'dispatchSetState',
        body: '모든 useState가 공유하는 하나의 내부 함수입니다.',
        tone: 'violet',
      },
      {
        id: 'bind',
        badge: 'step 2',
        title: 'bind(fiber, queue)',
        body: '지금 렌더 중인 fiber와 이 Hook의 queue를 앞 인자로 고정합니다.',
        tone: 'cyan',
      },
      {
        id: 'handed',
        badge: 'step 3',
        title: 'setCount로 반환',
        body: '우리는 값 하나만 넘기면 되고, 나머지 두 인자는 이미 박혀 있습니다.',
        tone: 'teal',
      },
    ],
    codeHeader: 'packages/react-reconciler/src/ReactFiberHooks.js',
    code: DISPATCH_BIND_CODE,
    note: 'setCount의 정체성이 렌더마다 유지되는 이유가 이것입니다. 같은 queue에 묶여 있으면 같은 함수로 남습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'mountState, mountStateImpl, basicStateReducer',
    whyLabel: '설명',
    why: 'queue 리터럴이 함수 안에서 통째로 만들어지는 모습을 보면, queue가 Hook마다 따로 존재한다는 점이 분명해집니다.',
    code: MOUNT_STATE_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'setCount를 누르면 무슨 일이 생기나',
    description:
      '만들어 둔 dispatch가 실제로 호출됐을 때 update가 어떻게 queue에 쌓이는지 따라갑니다.',
    cta: '다음 페이지로 이동',
    href: '/set-state-flow',
  },
};

const en: UseStateInternalsContent = {
  hero: {
    badge: 'Hooks Internals · 4/10',
    title: { line1: 'useState does not build one thing', line2: 'it builds three' },
    description:
      'A single call produces the state value, a queue for updates still to come, and a dispatch function that remembers that queue.',
    diagramBadge: 'mount state',
    diagramCaption: 'one call, three outputs',
    callLabel: 'the line we write',
    call: 'const [count, setCount] = useState(0);',
    products: [
      {
        id: 'state',
        label: 'hook.memoizedState',
        caption: '0 — the value for this render',
        tone: 'sky',
      },
      {
        id: 'queue',
        label: 'hook.queue',
        caption: 'where future updates will pile up',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        label: 'queue.dispatch',
        caption: 'setCount, with fiber and queue bound in',
        tone: 'teal',
      },
    ],
  },
  mountFlow: {
    badge: '01',
    eyebrow: 'mountState',
    title: 'Seven steps on the first render',
    description:
      'mountState takes the empty Hook object from the previous page and fills in state, queue and dispatch in order.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'useState(0) is called',
        description: 'The Dispatcher is a mount one, so the call lands in mountState.',
        tone: 'sky',
      },
      {
        id: 'hook',
        num: '02',
        title: 'Take an empty Hook',
        description: 'mountWorkInProgressHook creates a Hook and appends it to the list.',
        tone: 'violet',
      },
      {
        id: 'lazy-init',
        num: '03',
        title: 'Call it once if it is a function',
        description: 'A function initialState is invoked here to become a value. Lazy init.',
        tone: 'cyan',
      },
      {
        id: 'store',
        num: '04',
        title: 'Store in memoizedState and baseState',
        description: 'The same value goes into both slots, because recomputation needs a base.',
        tone: 'sky',
      },
      {
        id: 'queue',
        num: '05',
        title: 'Create the UpdateQueue',
        description: 'Build an object with pending, lanes, dispatch and the lastRendered pair.',
        tone: 'violet',
      },
      {
        id: 'bind',
        num: '06',
        title: 'Bind the dispatch',
        description: 'Pre-bind the current fiber and this queue onto dispatchSetState.',
        tone: 'teal',
      },
      {
        id: 'return',
        num: '07',
        title: 'Return [state, dispatch]',
        description: 'The array you destructure is created right here.',
        tone: 'emerald',
      },
    ],
    note: 'The lazy init in step 03 only ever happens on the first render. A re-render never looks at initialState again.',
  },
  queueShape: {
    badge: '02',
    eyebrow: 'update queue',
    title: 'The five slots inside queue',
    description:
      'Open the queue field of the Hook and you find five more slots. This side does not store state — it manages the changes still to come.',
    codeHeader: 'Hook (as built by useState)',
    code: HOOK_SHAPE_CODE,
    fields: [
      {
        id: 'pending',
        name: 'pending',
        role: 'Updates waiting',
        description: 'Points at the tail of the circular list that setCount updates attach to.',
        tone: 'violet',
      },
      {
        id: 'lanes',
        name: 'lanes',
        role: 'Accumulated priority',
        description: 'Collects the lanes of every update that entered this queue.',
        tone: 'amber',
      },
      {
        id: 'dispatch',
        name: 'dispatch',
        role: 'The function you call',
        description: 'setCount itself, with fiber and queue already bound in.',
        tone: 'teal',
      },
      {
        id: 'last-reducer',
        name: 'lastRenderedReducer',
        role: 'Reducer last used',
        description: 'For useState this is always basicStateReducer.',
        tone: 'cyan',
      },
      {
        id: 'last-state',
        name: 'lastRenderedState',
        role: 'Value of the last render',
        description: 'Used as the comparison base to bail out of a setState to the same value.',
        tone: 'sky',
      },
    ],
    note: 'The presence of lastRenderedReducer is the hint that useState runs on a reducer internally. Page 6 follows that thread.',
  },
  dispatchBind: {
    badge: '03',
    eyebrow: 'dispatchSetState',
    title: 'How setCount remembers its component',
    description:
      'setCount is not a special function. It is one shared internal function with the current fiber and this Hook queue bound onto it.',
    steps: [
      {
        id: 'raw',
        badge: 'step 1',
        title: 'dispatchSetState',
        body: 'A single internal function shared by every useState.',
        tone: 'violet',
      },
      {
        id: 'bind',
        badge: 'step 2',
        title: 'bind(fiber, queue)',
        body: 'Pin the rendering fiber and this Hook queue as the leading arguments.',
        tone: 'cyan',
      },
      {
        id: 'handed',
        badge: 'step 3',
        title: 'Handed back as setCount',
        body: 'You only pass a value; the other two arguments are already baked in.',
        tone: 'teal',
      },
    ],
    codeHeader: 'packages/react-reconciler/src/ReactFiberHooks.js',
    code: DISPATCH_BIND_CODE,
    note: 'That is why the identity of setCount survives renders: bound to the same queue, it stays the same function.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'mountState, mountStateImpl, basicStateReducer',
    whyLabel: 'Why',
    why: 'Seeing the queue literal built inside the function makes it clear that every Hook carries its own queue.',
    code: MOUNT_STATE_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What happens when setCount fires',
    description:
      'Next we follow the dispatch we just built and watch an update pile into the queue.',
    cta: 'Go to the next page',
    href: '/set-state-flow',
  },
};

export const useStateInternalsContent: Record<Locale, UseStateInternalsContent> = { ko, en };
