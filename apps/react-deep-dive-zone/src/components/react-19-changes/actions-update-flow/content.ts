import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SlotId = 'pending' | 'error' | 'form' | 'optimistic';

export type HeroSlot = {
  id: SlotId;
  label: string;
  api: string;
  tone: ToneKey;
};

export type HubCard = {
  id: SlotId;
  title: string;
  description: string;
  api: string;
  tone: ToneKey;
};

export type FlowStepId = 'submit' | 'invoke' | 'pending' | 'optimistic' | 'settle' | 'commit';

export type FlowStep = {
  id: FlowStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type HookRow = {
  hook: string;
  role: string;
  returns: string;
};

export type ActionsUpdateFlowContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    centerLabel: string;
    slots: HeroSlot[];
  };
  before: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    manual: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    action: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  hub: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: HubCard[];
    note: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
    note: string;
  };
  hooks: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
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

const KO_CODE = `// packages/react-reconciler/src/ReactFiberHooks.js
function mountActionState(action, initialStateProp) {
  // 1. Action의 결과를 담는 hook
  const stateHook = mountWorkInProgressHook();
  stateHook.memoizedState = stateHook.baseState = initialState;

  // 2. pending을 담는 hook - useTransition이 쓰는 것과 같은 자리
  const pendingStateHook = mountStateImpl(false);
  const setPendingState = dispatchOptimisticSetState.bind(
    null, currentlyRenderingFiber, false, pendingStateHook.queue,
  );

  // 3. Action을 줄 세우는 큐를 담는 hook
  const actionQueueHook = mountWorkInProgressHook();
  const actionQueue = { state: initialState, dispatch: null, action, pending: null };
  actionQueueHook.queue = actionQueue;

  return [initialState, dispatch, false];
}`;

const EN_CODE = `// packages/react-reconciler/src/ReactFiberHooks.js
function mountActionState(action, initialStateProp) {
  // 1. the hook that holds the Action result
  const stateHook = mountWorkInProgressHook();
  stateHook.memoizedState = stateHook.baseState = initialState;

  // 2. the hook that holds pending - the same slot useTransition uses
  const pendingStateHook = mountStateImpl(false);
  const setPendingState = dispatchOptimisticSetState.bind(
    null, currentlyRenderingFiber, false, pendingStateHook.queue,
  );

  // 3. the hook that holds the queue Actions line up in
  const actionQueueHook = mountWorkInProgressHook();
  const actionQueue = { state: initialState, dispatch: null, action, pending: null };
  actionQueueHook.queue = actionQueue;

  return [initialState, dispatch, false];
}`;

const HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: ActionsUpdateFlowContent = {
  hero: {
    badge: 'React 19 변화 · 2/10단계',
    title: { line1: 'Actions는 폼 편의 기능이 아니라', line2: '업데이트가 비동기를 품은 것이다' },
    description:
      '손으로 관리하던 pending·error·낙관적 값이 업데이트 흐름 안으로 들어왔습니다. 새 기능이 아니라 진입점이 넓어진 것입니다.',
    diagramBadge: 'one action',
    diagramCaption: 'submit → four things at once',
    centerLabel: 'Action',
    slots: [
      { id: 'form', label: '폼 제출', api: 'formAction', tone: 'cyan' },
      { id: 'pending', label: '진행 상태', api: 'isPending', tone: 'blue' },
      { id: 'optimistic', label: '낙관적 값', api: 'useOptimistic', tone: 'violet' },
      { id: 'error', label: '실패 처리', api: 'error', tone: 'amber' },
    ],
  },
  before: {
    badge: '01',
    eyebrow: 'before and after',
    title: '같은 제출을 두 번 써 보면 차이가 보인다',
    description:
      '왼쪽은 React 18까지의 전형적인 비동기 제출입니다. 오른쪽은 같은 일을 Actions로 옮긴 것입니다.',
    manual: {
      title: '손으로 관리하던 것',
      badge: 'React 18',
      description: '업데이트는 동기 setState 하나였고, 나머지는 전부 개발자 몫이었습니다.',
      bullets: [
        'setPending(true)와 finally의 setPending(false)를 직접 짝지어야 한다',
        'try / catch로 잡은 에러를 별도 state에 옮겨 담아야 한다',
        '로딩과 에러 상태가 컴포넌트마다 흩어져 같은 코드가 반복된다',
        '낙관적 UI는 별도 state와 롤백 로직을 따로 만들어야 한다',
      ],
    },
    bridge: {
      headline: '비동기 함수 자체를\n업데이트로 받아들인다',
      sub: 'React가 함수의 시작과 끝을 알기 때문에 pending과 롤백을 대신 관리할 수 있습니다.',
    },
    action: {
      title: 'Actions가 맡는 것',
      badge: 'React 19',
      description: '비동기 함수를 그대로 넘기면 나머지 네 가지를 React가 이어 붙입니다.',
      bullets: [
        'pending은 useTransition과 같은 자리에서 자동으로 켜지고 꺼진다',
        '던져진 에러는 Action 결과 상태로 돌아오거나 경계로 올라간다',
        'form의 action 속성에 그대로 꽂으면 제출이 Action이 된다',
        'useOptimistic으로 올린 값은 Action이 끝나면 자동으로 정리된다',
      ],
    },
    note: '줄어든 코드가 핵심이 아닙니다. pending과 롤백의 소유자가 개발자에서 React로 옮겨 간 것이 핵심입니다.',
  },
  hub: {
    badge: '02',
    eyebrow: 'four slots',
    title: 'Action 하나가 동시에 채우는 네 칸',
    description:
      '제출 한 번이 네 곳을 같이 움직입니다. 네 칸을 따로 배우면 어렵고, 한 흐름으로 보면 단순합니다.',
    cards: [
      {
        id: 'form',
        title: '폼 제출',
        description: 'form의 action에 함수를 주면 submit 이벤트가 Action 실행으로 바뀝니다.',
        api: 'formAction',
        tone: 'cyan',
      },
      {
        id: 'pending',
        title: '진행 상태',
        description:
          'Action이 도는 동안 켜지는 플래그입니다. 하위 컴포넌트는 useFormStatus로 읽습니다.',
        api: 'isPending',
        tone: 'blue',
      },
      {
        id: 'optimistic',
        title: '낙관적 값',
        description: '응답 전에 보여 줄 값입니다. Action이 끝나면 실제 값으로 되돌아갑니다.',
        api: 'useOptimistic',
        tone: 'violet',
      },
      {
        id: 'error',
        title: '실패 처리',
        description: 'Action이 던진 에러는 결과 상태로 돌아오거나 Error Boundary로 올라갑니다.',
        api: 'error',
        tone: 'amber',
      },
    ],
    note: '네 칸 모두 새 저장소가 아닙니다. 기존 hook 슬롯과 updateQueue 위에 이름만 새로 붙은 것입니다.',
  },
  flow: {
    badge: '03',
    eyebrow: 'one submit',
    title: '제출 한 번이 지나가는 여섯 단계',
    description: '성공과 실패는 다른 흐름이 아니라, 같은 흐름의 다섯 번째 칸에서 갈립니다.',
    steps: [
      {
        id: 'submit',
        num: '01',
        title: '사용자가 제출한다',
        description: 'form의 submit 이벤트가 발생하고, react-dom이 기본 동작을 막습니다.',
        tone: 'cyan',
      },
      {
        id: 'invoke',
        num: '02',
        title: 'Action이 호출된다',
        description: 'action에 준 비동기 함수가 transition 안에서 실행을 시작합니다.',
        tone: 'cyan',
      },
      {
        id: 'pending',
        num: '03',
        title: 'pending이 켜진다',
        description: 'Action이 반환한 Promise가 살아 있는 동안 pending 상태가 true로 유지됩니다.',
        tone: 'blue',
      },
      {
        id: 'optimistic',
        num: '04',
        title: '낙관적 값이 먼저 보인다',
        description: 'useOptimistic으로 올린 값이 응답을 기다리지 않고 화면에 반영됩니다.',
        tone: 'violet',
      },
      {
        id: 'settle',
        num: '05',
        title: '여기서 갈린다',
        description: 'Promise가 resolve면 결과가 상태로, reject면 에러가 결과나 경계로 향합니다.',
        tone: 'amber',
      },
      {
        id: 'commit',
        num: '06',
        title: '확정하거나 되돌린다',
        description: 'pending이 꺼지고 낙관적 값이 정리되면서 실제 상태가 화면에 남습니다.',
        tone: 'emerald',
      },
    ],
    note: '실패해도 흐름이 끊기지 않습니다. 05에서 방향만 바뀌고 06은 성공과 실패 모두 같은 자리에서 끝납니다.',
  },
  hooks: {
    badge: '04',
    eyebrow: 'three hooks',
    title: '세 개의 hook이 나눠 가진 역할',
    description:
      '같은 모델을 세 조각으로 나눈 것뿐입니다. 어느 조각이 어느 칸을 읽는지만 구분하면 됩니다.',
    headers: ['hook', '맡는 역할', '돌려주는 값'],
    rows: [
      {
        hook: 'useActionState',
        role: 'Action 결과를 상태로 보관하고 form에 꽂을 action을 만든다',
        returns: 'state, formAction, isPending',
      },
      {
        hook: 'useOptimistic',
        role: '응답 전에 보여 줄 값을 만들고, Action이 끝나면 정리한다',
        returns: 'optimisticValue, addOptimistic',
      },
      {
        hook: 'useFormStatus',
        role: '상위 form이 제출 중인지를 하위 컴포넌트에서 읽는다',
        returns: 'pending, data, method, action',
      },
    ],
    note: 'useFormStatus만 react-dom에서 옵니다. 폼이라는 DOM 개념에 묶여 있기 때문입니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'Actions가 hook 세 개로 앉는 자리',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'mountActionState',
    whyLabel: '설명',
    why: 'useActionState 한 번이 hook 슬롯을 세 개 씁니다. 결과·pending·큐가 각각 별도 슬롯이라는 사실이 이 함수에 그대로 드러납니다.',
    code: KO_CODE,
    primaryCta: 'ReactFiberHooks.js 소스 보기',
    primaryHref: HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'form의 submit은 어디서 Action으로 바뀔까',
    description: '같은 축을 한 칸 더 들어갑니다. 이번에는 이벤트 시스템 쪽에서 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/form-actions-event-system',
  },
};

const en: ActionsUpdateFlowContent = {
  hero: {
    badge: 'React 19 Changes · 2/10',
    title: {
      line1: 'Actions are not a form helper.',
      line2: 'The update model absorbed async.',
    },
    description:
      'Pending, error and optimistic values that you used to manage by hand moved inside the update flow. Not a new feature, a wider entry point.',
    diagramBadge: 'one action',
    diagramCaption: 'submit → four things at once',
    centerLabel: 'Action',
    slots: [
      { id: 'form', label: 'Form submit', api: 'formAction', tone: 'cyan' },
      { id: 'pending', label: 'In flight', api: 'isPending', tone: 'blue' },
      { id: 'optimistic', label: 'Optimistic value', api: 'useOptimistic', tone: 'violet' },
      { id: 'error', label: 'Failure', api: 'error', tone: 'amber' },
    ],
  },
  before: {
    badge: '01',
    eyebrow: 'before and after',
    title: 'Write the same submit twice and the difference shows',
    description:
      'On the left is the typical async submit up to React 18. On the right is the same work moved onto Actions.',
    manual: {
      title: 'What you managed by hand',
      badge: 'React 18',
      description: 'An update was one synchronous setState, and everything around it was your job.',
      bullets: [
        'You pair setPending(true) with setPending(false) in a finally block yourself',
        'An error caught by try / catch has to be copied into a separate state',
        'Loading and error state scatter across components and the code repeats',
        'Optimistic UI needs its own state plus its own rollback logic',
      ],
    },
    bridge: {
      headline: 'Accept the async function\nitself as the update',
      sub: 'Because React knows where the function starts and ends, it can own pending and rollback.',
    },
    action: {
      title: 'What Actions take over',
      badge: 'React 19',
      description: 'Hand over the async function and React wires up the remaining four things.',
      bullets: [
        'Pending turns on and off in the same slot useTransition uses',
        'A thrown error comes back as the Action result or climbs to a boundary',
        'Drop it straight into a form action attribute and the submit becomes an Action',
        'A value raised through useOptimistic is cleaned up when the Action settles',
      ],
    },
    note: 'The point is not the shorter code. The point is that ownership of pending and rollback moved from you to React.',
  },
  hub: {
    badge: '02',
    eyebrow: 'four slots',
    title: 'The four slots one Action fills at once',
    description:
      'A single submit moves four places together. Learned separately they are hard; seen as one flow they are simple.',
    cards: [
      {
        id: 'form',
        title: 'Form submit',
        description: 'Give a form action a function and its submit event becomes an Action call.',
        api: 'formAction',
        tone: 'cyan',
      },
      {
        id: 'pending',
        title: 'In flight',
        description:
          'A flag that stays on while the Action runs. Children read it through useFormStatus.',
        api: 'isPending',
        tone: 'blue',
      },
      {
        id: 'optimistic',
        title: 'Optimistic value',
        description: 'A value shown before the response. It falls back to the real one on settle.',
        api: 'useOptimistic',
        tone: 'violet',
      },
      {
        id: 'error',
        title: 'Failure',
        description:
          'An error thrown by the Action returns as result state or climbs to an Error Boundary.',
        api: 'error',
        tone: 'amber',
      },
    ],
    note: 'None of the four is a new store. They are new names on existing hook slots and the update queue.',
  },
  flow: {
    badge: '03',
    eyebrow: 'one submit',
    title: 'The six stages one submit passes through',
    description:
      'Success and failure are not different flows. They split at the fifth slot of the same one.',
    steps: [
      {
        id: 'submit',
        num: '01',
        title: 'The user submits',
        description: 'The form fires a submit event and react-dom prevents the default behavior.',
        tone: 'cyan',
      },
      {
        id: 'invoke',
        num: '02',
        title: 'The Action is called',
        description: 'The async function given to action starts running inside a transition.',
        tone: 'cyan',
      },
      {
        id: 'pending',
        num: '03',
        title: 'Pending turns on',
        description: 'While the returned Promise is alive, the pending state stays true.',
        tone: 'blue',
      },
      {
        id: 'optimistic',
        num: '04',
        title: 'The optimistic value shows first',
        description: 'A value raised via useOptimistic paints without waiting for the response.',
        tone: 'violet',
      },
      {
        id: 'settle',
        num: '05',
        title: 'This is where it splits',
        description:
          'On resolve the result becomes state; on reject the error goes to the result or a boundary.',
        tone: 'amber',
      },
      {
        id: 'commit',
        num: '06',
        title: 'Commit or roll back',
        description:
          'Pending turns off, the optimistic value is cleaned up and the real state stays on screen.',
        tone: 'emerald',
      },
    ],
    note: 'A failure does not break the flow. Only the direction changes at 05; 06 ends in the same place either way.',
  },
  hooks: {
    badge: '04',
    eyebrow: 'three hooks',
    title: 'How three hooks split the work',
    description:
      'They are three pieces of one model. All you need is which piece reads which slot.',
    headers: ['hook', 'What it owns', 'What it returns'],
    rows: [
      {
        hook: 'useActionState',
        role: 'Keeps the Action result as state and builds the action a form can take',
        returns: 'state, formAction, isPending',
      },
      {
        hook: 'useOptimistic',
        role: 'Builds the value shown before the response and clears it when the Action settles',
        returns: 'optimisticValue, addOptimistic',
      },
      {
        hook: 'useFormStatus',
        role: 'Lets a child read whether the enclosing form is submitting',
        returns: 'pending, data, method, action',
      },
    ],
    note: 'Only useFormStatus comes from react-dom, because it is tied to the DOM concept of a form.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'Where Actions sit as three hooks',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'mountActionState',
    whyLabel: 'Why',
    why: 'One useActionState call takes three hook slots. This function shows plainly that result, pending and queue each live in their own slot.',
    code: EN_CODE,
    primaryCta: 'View ReactFiberHooks.js',
    primaryHref: HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'Where does a form submit turn into an Action',
    description: 'One notch deeper on the same axis, this time from the event system side.',
    cta: 'Go to the next page',
    href: '/form-actions-event-system',
  },
};

export const actionsUpdateFlowContent: Record<Locale, ActionsUpdateFlowContent> = { ko, en };
