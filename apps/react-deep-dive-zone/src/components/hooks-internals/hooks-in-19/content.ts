import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FoundationId = 'dispatcher' | 'linked-list' | 'update-queue' | 'effect';

export type Foundation = {
  id: FoundationId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type ApiId = 'use' | 'action-state' | 'optimistic' | 'effect-event';

export type ApiCard = {
  id: ApiId;
  name: string;
  role: string;
  description: string;
  signature: string;
  tone: ToneKey;
};

export type CompareRow = {
  api: string;
  role: string;
  storage: string;
  base: string;
};

export type ReadStepId = 'foundation' | 'queue-based' | 'ref-based' | 'suspense';

export type ReadStep = {
  id: ReadStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type React19HooksContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    apiLabel: string;
    apis: string[];
    foundationLabel: string;
    foundations: Foundation[];
  };
  apis: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ApiCard[];
    note: string;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: CompareRow[];
    note: string;
  };
  readingOrder: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ReadStep[];
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

const OPTIMISTIC_CODE = `function mountOptimistic(passthrough, reducer) {
  const hook = mountWorkInProgressHook();
  hook.memoizedState = hook.baseState = passthrough;

  const queue = {
    pending: null,
    lanes: NoLanes,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null,
  };

  hook.queue = queue;

  const dispatch = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber,
    true,
    queue,
  );

  queue.dispatch = dispatch;
  return [passthrough, dispatch];
}`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: React19HooksContent = {
  hero: {
    badge: 'Hooks 내부 · 9/10단계',
    title: { line1: 'React 19의 새 Hook은', line2: '새 시스템이 아니다' },
    description:
      'use, useActionState, useOptimistic, useEffectEvent는 모두 지금까지 본 Dispatcher와 linked list와 UpdateQueue 위에 얹힌 API입니다.',
    diagramBadge: 'react 19',
    diagramCaption: 'new APIs, same base',
    apiLabel: 'React 19 API',
    apis: ['use', 'useActionState', 'useOptimistic', 'useEffectEvent'],
    foundationLabel: '이미 읽은 기반',
    foundations: [
      {
        id: 'dispatcher',
        label: 'Dispatcher',
        caption: 'mount / update 분기',
        tone: 'cyan',
      },
      {
        id: 'linked-list',
        label: 'Hook linked list',
        caption: '순서로 식별되는 슬롯',
        tone: 'sky',
      },
      {
        id: 'update-queue',
        label: 'UpdateQueue',
        caption: 'pending 원형 리스트',
        tone: 'violet',
      },
      {
        id: 'effect',
        label: 'Effect 리스트',
        caption: '커밋 이후 실행',
        tone: 'emerald',
      },
    ],
  },
  apis: {
    badge: '01',
    eyebrow: 'four additions',
    title: '네 개의 새 API가 맡은 일',
    description:
      '넷 중 둘은 상태 Hook이고, 하나는 ref 기반이며, 하나는 아예 Hook 규칙에서 빠져 있습니다.',
    cards: [
      {
        id: 'use',
        name: 'use()',
        role: 'resource 읽기',
        description:
          'Promise나 context를 렌더 중에 읽습니다. 아직 pending이면 그 자리에서 Suspense로 중단합니다.',
        signature: 'const user = use(userPromise);',
        tone: 'amber',
      },
      {
        id: 'action-state',
        name: 'useActionState()',
        role: 'action 결과 + pending',
        description:
          '폼 action의 결과 상태와 진행 중 여부를 함께 돌려줍니다. 내부는 상태 Hook입니다.',
        signature: 'const [state, action, pending] = useActionState(fn, init);',
        tone: 'teal',
      },
      {
        id: 'optimistic',
        name: 'useOptimistic()',
        role: '낙관적 UI 값',
        description:
          '서버 응답이 오기 전에 보여 줄 값을 임시로 덮어씁니다. 렌더가 끝나면 원래 값으로 돌아갑니다.',
        signature: 'const [list, addOptimistic] = useOptimistic(server, reducer);',
        tone: 'cyan',
      },
      {
        id: 'effect-event',
        name: 'useEffectEvent()',
        role: 'effect 안의 최신 값 함수',
        description: 'deps에 넣지 않아도 항상 최신 props와 state를 보는 이벤트 함수를 만듭니다.',
        signature: 'const onMessage = useEffectEvent((msg) => { ... });',
        tone: 'violet',
      },
    ],
    note: 'use만 Hook 규칙에서 벗어나 조건문 안에서도 부를 수 있습니다. 슬롯을 쓰지 않기 때문입니다.',
  },
  compare: {
    badge: '02',
    eyebrow: 'mapping',
    title: '어느 기반 위에 얹혔는가',
    description:
      '새 API를 외우는 대신, 각각이 앞 페이지들의 어떤 구조를 그대로 쓰는지로 정리하면 읽을 코드가 줄어듭니다.',
    headers: ['API', '하는 일', '저장 방식', '읽어야 할 앞 페이지'],
    rows: [
      {
        api: 'use()',
        role: 'resource를 읽고 필요하면 중단',
        storage: 'Hook 슬롯을 쓰지 않음',
        base: 'Suspense (다른 챕터)',
      },
      {
        api: 'useActionState()',
        role: 'action 결과와 pending을 상태로',
        storage: 'Hook + UpdateQueue',
        base: '4~5페이지 useState 내부',
      },
      {
        api: 'useOptimistic()',
        role: '렌더 동안만 값을 덮어씀',
        storage: 'Hook + UpdateQueue',
        base: '5~6페이지 queue와 reducer',
      },
      {
        api: 'useEffectEvent()',
        role: '최신 값을 보는 이벤트 함수',
        storage: 'Hook에 보관된 참조',
        base: '7페이지 Effect 구조',
      },
    ],
    note: '세 개는 이미 읽은 구조의 재활용입니다. 새로 읽을 것은 use와 Suspense의 연결뿐입니다.',
  },
  readingOrder: {
    badge: '03',
    eyebrow: 'reading order',
    title: '소스를 읽는 순서',
    description:
      '한 번에 네 개를 열면 길을 잃습니다. 이미 아는 구조와 가까운 것부터 차례로 여는 편이 빠릅니다.',
    steps: [
      {
        id: 'foundation',
        num: '01',
        title: '기반을 먼저 확정한다',
        description: 'mountWorkInProgressHook과 updateReducerImpl을 다시 열어 둡니다.',
        tone: 'sky',
      },
      {
        id: 'queue-based',
        num: '02',
        title: 'queue 기반 두 개를 본다',
        description:
          'mountOptimistic과 mountActionState가 queue 리터럴을 만드는 모양이 useState와 같은지 확인합니다.',
        tone: 'violet',
      },
      {
        id: 'ref-based',
        num: '03',
        title: 'useEffectEvent를 본다',
        description: 'Effect 구조 위에서 참조만 갈아 끼우는 방식이라는 점을 확인합니다.',
        tone: 'emerald',
      },
      {
        id: 'suspense',
        num: '04',
        title: 'use는 마지막에 본다',
        description:
          'Hook 시스템이 아니라 Suspense 쪽 코드입니다. thenable 추적을 따로 읽어야 합니다.',
        tone: 'amber',
      },
    ],
    note: '02까지만 읽어도 "새 Hook이 새 시스템이 아니다"라는 문장은 스스로 확인됩니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'mountOptimistic, mountActionState, dispatchOptimisticSetState',
    whyLabel: '설명',
    why: '4페이지에서 본 mountStateImpl과 queue 리터럴이 거의 같습니다. 새 Hook도 같은 틀을 쓴다는 증거입니다.',
    code: OPTIMISTIC_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '챕터 전체를 한 장으로',
    description: '진입점부터 Effect까지, 아홉 페이지에서 본 구조를 하나의 흐름으로 묶습니다.',
    cta: '다음 페이지로 이동',
    href: '/hooks-recap',
  },
};

const en: React19HooksContent = {
  hero: {
    badge: 'Hooks Internals · 9/10',
    title: { line1: 'The new Hooks in React 19', line2: 'are not a new system' },
    description:
      'use, useActionState, useOptimistic and useEffectEvent all sit on the Dispatcher, linked list and UpdateQueue you have already read.',
    diagramBadge: 'react 19',
    diagramCaption: 'new APIs, same base',
    apiLabel: 'React 19 API',
    apis: ['use', 'useActionState', 'useOptimistic', 'useEffectEvent'],
    foundationLabel: 'the base you already read',
    foundations: [
      {
        id: 'dispatcher',
        label: 'Dispatcher',
        caption: 'mount / update fork',
        tone: 'cyan',
      },
      {
        id: 'linked-list',
        label: 'Hook linked list',
        caption: 'slots identified by order',
        tone: 'sky',
      },
      {
        id: 'update-queue',
        label: 'UpdateQueue',
        caption: 'circular pending list',
        tone: 'violet',
      },
      {
        id: 'effect',
        label: 'Effect list',
        caption: 'runs after commit',
        tone: 'emerald',
      },
    ],
  },
  apis: {
    badge: '01',
    eyebrow: 'four additions',
    title: 'What each new API is for',
    description:
      'Two of the four are state Hooks, one is ref-based, and one steps outside the Hook rules entirely.',
    cards: [
      {
        id: 'use',
        name: 'use()',
        role: 'Read a resource',
        description:
          'Reads a promise or context during render. If it is still pending, it suspends right there.',
        signature: 'const user = use(userPromise);',
        tone: 'amber',
      },
      {
        id: 'action-state',
        name: 'useActionState()',
        role: 'Action result + pending',
        description:
          'Returns the result state of a form action together with whether it is in flight. Internally a state Hook.',
        signature: 'const [state, action, pending] = useActionState(fn, init);',
        tone: 'teal',
      },
      {
        id: 'optimistic',
        name: 'useOptimistic()',
        role: 'Optimistic value',
        description:
          'Temporarily overrides the value shown before the server responds, reverting once the render settles.',
        signature: 'const [list, addOptimistic] = useOptimistic(server, reducer);',
        tone: 'cyan',
      },
      {
        id: 'effect-event',
        name: 'useEffectEvent()',
        role: 'Latest-value function in an effect',
        description:
          'Builds an event function that always sees the latest props and state without joining deps.',
        signature: 'const onMessage = useEffectEvent((msg) => { ... });',
        tone: 'violet',
      },
    ],
    note: 'Only use steps outside the rules and may be called conditionally, because it does not occupy a slot.',
  },
  compare: {
    badge: '02',
    eyebrow: 'mapping',
    title: 'Which base each one sits on',
    description:
      'Rather than memorising the new APIs, mapping each onto a structure from earlier pages shrinks how much code is left to read.',
    headers: ['API', 'What it does', 'How it stores', 'Earlier page to reread'],
    rows: [
      {
        api: 'use()',
        role: 'Reads a resource and suspends if needed',
        storage: 'Occupies no Hook slot',
        base: 'Suspense (a different chapter)',
      },
      {
        api: 'useActionState()',
        role: 'Turns action result and pending into state',
        storage: 'Hook + UpdateQueue',
        base: 'Pages 4–5, useState internals',
      },
      {
        api: 'useOptimistic()',
        role: 'Overrides the value for one render',
        storage: 'Hook + UpdateQueue',
        base: 'Pages 5–6, queue and reducer',
      },
      {
        api: 'useEffectEvent()',
        role: 'Event function seeing the latest values',
        storage: 'A reference kept on the Hook',
        base: 'Page 7, Effect structure',
      },
    ],
    note: 'Three of them reuse structures you have already read. Only use, and its link to Suspense, is genuinely new.',
  },
  readingOrder: {
    badge: '03',
    eyebrow: 'reading order',
    title: 'The order to read the source in',
    description:
      'Opening all four at once loses the thread. Start with whatever sits closest to what you already know.',
    steps: [
      {
        id: 'foundation',
        num: '01',
        title: 'Pin the base first',
        description: 'Reopen mountWorkInProgressHook and updateReducerImpl and keep them in view.',
        tone: 'sky',
      },
      {
        id: 'queue-based',
        num: '02',
        title: 'Read the two queue-based ones',
        description:
          'Check whether the queue literal in mountOptimistic and mountActionState matches useState.',
        tone: 'violet',
      },
      {
        id: 'ref-based',
        num: '03',
        title: 'Then useEffectEvent',
        description: 'Confirm it only swaps a reference on top of the Effect structure.',
        tone: 'emerald',
      },
      {
        id: 'suspense',
        num: '04',
        title: 'Leave use for last',
        description:
          'It is Suspense code rather than Hook code. Thenable tracking needs its own reading pass.',
        tone: 'amber',
      },
    ],
    note: 'Reading only as far as step 02 already proves the claim that the new Hooks are not a new system.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'mountOptimistic, mountActionState, dispatchOptimisticSetState',
    whyLabel: 'Why',
    why: 'The queue literal is nearly identical to mountStateImpl from page 4 — evidence that new Hooks reuse the same mould.',
    code: OPTIMISTIC_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'The whole chapter on one page',
    description:
      'From the entry point to Effects, the last page ties nine pages of structure into a single flow.',
    cta: 'Go to the next page',
    href: '/hooks-recap',
  },
};

export const react19HooksContent: Record<Locale, React19HooksContent> = { ko, en };
