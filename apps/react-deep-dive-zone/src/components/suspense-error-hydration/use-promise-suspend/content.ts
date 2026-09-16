import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StateId = 'pending' | 'fulfilled' | 'rejected';

export type PromiseState = {
  id: StateId;
  label: string;
  decision: string;
  description: string;
  tone: ToneKey;
};

export type UseStepId = 'call' | 'track' | 'inspect' | 'throw' | 'resume';

export type UseStep = {
  id: UseStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type TrackFactId = 'index' | 'status' | 'ping';

export type TrackFact = {
  id: TrackFactId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type UsePromiseSuspendContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    call: string;
    states: PromiseState[];
  };
  states: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: PromiseState[];
    note: string;
  };
  steps: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: UseStep[];
    note: string;
  };
  tracking: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    facts: TrackFact[];
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

const TRACK_THENABLE_CODE = `export function trackUsedThenable<T>(
  thenableState: ThenableState,
  thenable: Thenable<T>,
  index: number,
): T {
  const trackedThenables = thenableState;
  const previous = trackedThenables[index];

  if (previous === undefined) {
    trackedThenables.push(thenable);
  } else if (previous !== thenable) {
    // 같은 자리에 다른 thenable이 왔다: 이전 것은 버린다
    thenable.then(noop, noop);
    thenable = previous;
  }

  switch (thenable.status) {
    case 'fulfilled':
      return thenable.value;
    case 'rejected':
      throw thenable.reason;
    default: {
      if (typeof thenable.status === 'string') {
        // 이미 누군가 추적을 붙여 둔 thenable
        thenable.then(noop, noop);
      } else {
        // 처음 보는 Promise면 status를 심고 구독한다
        const pending: PendingThenable<T> = (thenable: any);
        pending.status = 'pending';
        pending.then(
          (fulfilledValue) => { /* status를 fulfilled로 */ },
          (error) => { /* status를 rejected로 */ },
        );
      }
      // 아직 값이 없으므로 렌더를 여기서 끊는다
      suspendedThenable = thenable;
      throw SuspenseException;
    }
  }
}`;

const REACT_FIBER_THENABLE_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThenable.js';

const KO_STATES: PromiseState[] = [
  {
    id: 'pending',
    label: 'pending',
    decision: '렌더를 끊는다',
    description:
      '값이 없으므로 반환할 것이 없습니다. SuspenseException을 던져 가장 가까운 Suspense로 넘깁니다.',
    tone: 'violet',
  },
  {
    id: 'fulfilled',
    label: 'fulfilled',
    decision: '값을 반환한다',
    description: '이미 담겨 있는 value를 그대로 돌려줍니다. 렌더는 아무 일 없이 계속됩니다.',
    tone: 'emerald',
  },
  {
    id: 'rejected',
    label: 'rejected',
    decision: 'reason을 던진다',
    description:
      '보관해 둔 reason을 throw합니다. thenable이 아니므로 Error Boundary 경로로 갑니다.',
    tone: 'amber',
  },
];

const EN_STATES: PromiseState[] = [
  {
    id: 'pending',
    label: 'pending',
    decision: 'Cut the render short',
    description:
      'There is no value to return, so it throws SuspenseException and hands off to the nearest Suspense.',
    tone: 'violet',
  },
  {
    id: 'fulfilled',
    label: 'fulfilled',
    decision: 'Return the value',
    description: 'The stored value is handed back and the render continues as if nothing happened.',
    tone: 'emerald',
  },
  {
    id: 'rejected',
    label: 'rejected',
    decision: 'Throw the reason',
    description:
      'The stored reason is thrown. It is not a thenable, so it takes the Error Boundary path.',
    tone: 'amber',
  },
];

const ko: UsePromiseSuspendContent = {
  hero: {
    badge: 'Suspense/Error · 2/10단계',
    title: { line1: 'use는 Promise를 기다리지 않는다', line2: '렌더를 끊고 나중에 다시 한다' },
    description:
      'await처럼 보이지만 완전히 다릅니다. 값이 없으면 함수 실행을 예외로 중단하고, 준비된 뒤 컴포넌트를 처음부터 다시 실행합니다.',
    diagramBadge: 'use(promise)',
    diagramCaption: 'three states, three exits',
    callLabel: '컴포넌트 본문',
    call: 'const message = use(messagePromise);',
    states: KO_STATES,
  },
  states: {
    badge: '01',
    eyebrow: 'three states',
    title: 'Promise 상태가 곧 분기다',
    description:
      'use는 thenable의 status 하나만 봅니다. 값이 있으면 주고, 없으면 끊고, 실패했으면 던집니다.',
    items: KO_STATES,
    note: 'React는 이 status를 Promise에 직접 심어 둡니다. 표준 Promise에는 없는 필드라 처음 볼 때 낯설 수 있습니다.',
  },
  steps: {
    badge: '02',
    eyebrow: 'what use does',
    title: 'use 호출이 지나는 다섯 칸',
    description:
      '이름이 Hook처럼 생겼지만 Hook 리스트를 쓰지 않습니다. 대신 렌더 순서에 따른 별도 배열을 씁니다.',
    items: [
      {
        id: 'call',
        num: '01',
        title: 'use(promise) 호출',
        description: '컴포넌트 본문에서 아직 값인지 아닌지 모르는 것을 읽으려 합니다.',
        tone: 'sky',
      },
      {
        id: 'track',
        num: '02',
        title: 'thenable 추적 배열에 등록',
        description: '이번 렌더에서 몇 번째 use인지를 인덱스로 삼아 배열에 담습니다.',
        tone: 'teal',
      },
      {
        id: 'inspect',
        num: '03',
        title: 'status 확인',
        description: 'fulfilled면 value를, rejected면 reason을 꺼냅니다.',
        tone: 'cyan',
      },
      {
        id: 'throw',
        num: '04',
        title: 'pending이면 SuspenseException',
        description: 'Promise 자체가 아니라 특별한 sentinel 값을 던져 렌더를 끊습니다.',
        tone: 'violet',
      },
      {
        id: 'resume',
        num: '05',
        title: 'settle되면 재시도',
        description: 'Promise가 풀리면 React가 렌더를 다시 걸고, 이번에는 03에서 값을 얻습니다.',
        tone: 'emerald',
      },
    ],
    note: '05에서 "이어서"가 아니라 "처음부터"라는 점이 중요합니다. 컴포넌트 함수가 통째로 다시 실행됩니다.',
  },
  tracking: {
    badge: '03',
    eyebrow: 'ReactFiberThenable',
    title: '같은 Promise인지 어떻게 아는가',
    description:
      '재시도하면 컴포넌트가 다시 실행됩니다. 그때 같은 use 호출이 같은 Promise를 보게 하는 장치가 이 추적 배열입니다.',
    codeHeader: 'packages/react-reconciler/src/ReactFiberThenable.js',
    code: TRACK_THENABLE_CODE,
    facts: [
      {
        id: 'index',
        title: '순서로 식별한다',
        role: '인덱스 기반',
        description:
          'Hook과 마찬가지로 이름이 아니라 호출 순서로 짝을 맞춥니다. 조건부 use가 위험한 이유입니다.',
        tone: 'indigo',
      },
      {
        id: 'status',
        title: 'Promise에 status를 심는다',
        role: '상태 캐시',
        description:
          '표준에 없는 status·value·reason 필드를 직접 붙여, 다음 렌더에서 동기적으로 읽습니다.',
        tone: 'teal',
      },
      {
        id: 'ping',
        title: 'settle되면 깨운다',
        role: '재시도 트리거',
        description: 'then으로 구독해 두었다가 풀리는 순간 해당 root에 다시 렌더를 걸어 줍니다.',
        tone: 'emerald',
      },
    ],
    note: '렌더 중에 만든 Promise를 use에 넘기면 매번 새 객체라 인덱스는 같아도 다른 thenable이 됩니다. 무한 대기의 흔한 원인입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThenable.js',
    lookForLabel: '볼 것',
    lookFor: 'trackUsedThenable, SuspenseException, thenable.status',
    whyLabel: '설명',
    why: 'Promise가 아니라 SuspenseException이라는 sentinel을 던진다는 점이, 사용자 Promise와 섞이지 않게 하는 장치입니다.',
    code: TRACK_THENABLE_CODE,
    primaryCta: 'ReactFiberThenable.js 읽기',
    primaryHref: REACT_FIBER_THENABLE_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '던져진 것이 Promise인지 Error인지',
    description:
      '던지는 쪽을 봤으니 이제 받는 쪽입니다. React가 둘을 어떻게 가려내는지 확인합니다.',
    cta: '다음 페이지로 이동',
    href: '/promise-vs-error-split',
  },
};

const TRACK_THENABLE_CODE_EN = `export function trackUsedThenable<T>(
  thenableState: ThenableState,
  thenable: Thenable<T>,
  index: number,
): T {
  const trackedThenables = thenableState;
  const previous = trackedThenables[index];

  if (previous === undefined) {
    trackedThenables.push(thenable);
  } else if (previous !== thenable) {
    // a different thenable arrived at the same slot, so drop the new one
    thenable.then(noop, noop);
    thenable = previous;
  }

  switch (thenable.status) {
    case 'fulfilled':
      return thenable.value;
    case 'rejected':
      throw thenable.reason;
    default: {
      if (typeof thenable.status === 'string') {
        // someone already attached tracking to this thenable
        thenable.then(noop, noop);
      } else {
        // first time seeing it: stamp a status and subscribe
        const pending: PendingThenable<T> = (thenable: any);
        pending.status = 'pending';
        pending.then(
          (fulfilledValue) => { /* set status to fulfilled */ },
          (error) => { /* set status to rejected */ },
        );
      }
      // no value yet, so cut the render off here
      suspendedThenable = thenable;
      throw SuspenseException;
    }
  }
}`;

const en: UsePromiseSuspendContent = {
  hero: {
    badge: 'Suspense/Error · 2/10',
    title: { line1: 'use does not wait for a Promise', line2: 'it cuts the render and retries' },
    description:
      'It looks like await but behaves nothing like it. Without a value it aborts the function by throwing, then runs the component again from the top once ready.',
    diagramBadge: 'use(promise)',
    diagramCaption: 'three states, three exits',
    callLabel: 'component body',
    call: 'const message = use(messagePromise);',
    states: EN_STATES,
  },
  states: {
    badge: '01',
    eyebrow: 'three states',
    title: 'The Promise state is the branch',
    description:
      'use looks at a single field: the thenable status. Value present, hand it over; absent, cut; failed, throw.',
    items: EN_STATES,
    note: 'React stamps that status onto the Promise itself. It is not a standard field, which makes it surprising on first sight.',
  },
  steps: {
    badge: '02',
    eyebrow: 'what use does',
    title: 'Five stops inside one use call',
    description:
      'It is shaped like a Hook but does not use the Hook list. It keeps a separate array indexed by call order.',
    items: [
      {
        id: 'call',
        num: '01',
        title: 'use(promise) is called',
        description:
          'The component body tries to read something that may or may not be a value yet.',
        tone: 'sky',
      },
      {
        id: 'track',
        num: '02',
        title: 'Register in the thenable array',
        description: 'Which use call this is during this render becomes its index in the array.',
        tone: 'teal',
      },
      {
        id: 'inspect',
        num: '03',
        title: 'Inspect the status',
        description: 'Take value when fulfilled, take reason when rejected.',
        tone: 'cyan',
      },
      {
        id: 'throw',
        num: '04',
        title: 'Pending throws SuspenseException',
        description: 'A dedicated sentinel — not the Promise itself — is thrown to cut the render.',
        tone: 'violet',
      },
      {
        id: 'resume',
        num: '05',
        title: 'Retry once it settles',
        description: 'React re-schedules the render, and this time step 03 finds a value.',
        tone: 'emerald',
      },
    ],
    note: 'Step 05 restarts rather than resumes: the whole component function runs again from the top.',
  },
  tracking: {
    badge: '03',
    eyebrow: 'ReactFiberThenable',
    title: 'How it knows it is the same Promise',
    description:
      'A retry re-runs the component. This tracking array is what makes the same use call see the same Promise again.',
    codeHeader: 'packages/react-reconciler/src/ReactFiberThenable.js',
    code: TRACK_THENABLE_CODE_EN,
    facts: [
      {
        id: 'index',
        title: 'Identified by order',
        role: 'Index based',
        description:
          'Like Hooks, pairing is by call order rather than name — which is why a conditional use is dangerous.',
        tone: 'indigo',
      },
      {
        id: 'status',
        title: 'Status is stamped on the Promise',
        role: 'State cache',
        description:
          'Non-standard status, value and reason fields are attached so the next render can read synchronously.',
        tone: 'teal',
      },
      {
        id: 'ping',
        title: 'Wakes up on settle',
        role: 'Retry trigger',
        description:
          'A then subscription schedules another render on that root the moment the Promise settles.',
        tone: 'emerald',
      },
    ],
    note: 'Passing a Promise created during render means a new object every time — same index, different thenable. A common cause of endless loading.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThenable.js',
    lookForLabel: 'Look for',
    lookFor: 'trackUsedThenable, SuspenseException, thenable.status',
    whyLabel: 'Why',
    why: 'Throwing a SuspenseException sentinel rather than the Promise keeps React from confusing it with your own values.',
    code: TRACK_THENABLE_CODE_EN,
    primaryCta: 'Read ReactFiberThenable.js',
    primaryHref: REACT_FIBER_THENABLE_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Promise or Error — telling them apart',
    description:
      'Having seen the throwing side, next comes the catching side and how React sorts the two.',
    cta: 'Go to the next page',
    href: '/promise-vs-error-split',
  },
};

export const usePromiseSuspendContent: Record<Locale, UsePromiseSuspendContent> = { ko, en };
