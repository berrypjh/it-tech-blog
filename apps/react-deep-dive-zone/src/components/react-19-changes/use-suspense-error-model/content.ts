import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StatusId = 'pending' | 'fulfilled' | 'rejected';

export type HeroBranch = {
  id: StatusId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type BranchCard = {
  id: StatusId;
  title: string;
  description: string;
  outcome: string;
  tone: ToneKey;
};

export type TrackStepId = 'call' | 'register' | 'inspect' | 'suspend' | 'replay';

export type TrackStep = {
  id: TrackStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type RuleRow = {
  topic: string;
  hook: string;
  use: string;
};

export type UseSuspenseErrorModelContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    branches: HeroBranch[];
  };
  branches: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: BranchCard[];
    note: string;
  };
  readable: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    promise: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    context: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  rules: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: RuleRow[];
    note: string;
  };
  tracking: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TrackStep[];
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

const KO_CODE = `// packages/react-reconciler/src/ReactFiberThenable.js
export function trackUsedThenable(thenableState, thenable, index) {
  const previous = thenableState[index];
  if (previous === undefined) {
    thenableState.push(thenable);      // 처음 본 thenable을 자리에 기록한다
  } else if (previous !== thenable) {
    thenable.then(noop, noop);         // 재렌더에서 바뀌었으면 이전 것을 그대로 쓴다
    thenable = previous;
  }

  switch (thenable.status) {
    case 'fulfilled':
      return thenable.value;           // 값이 있으면 그냥 돌려준다
    case 'rejected':
      throw thenable.reason;           // 실패면 reason을 던진다 - Error Boundary로 간다
    default: {
      // pending - 완료되면 status/value를 채우도록 붙여 두고 중단한다
      suspendedThenable = thenable;
      throw SuspenseException;
    }
  }
}`;

const EN_CODE = `// packages/react-reconciler/src/ReactFiberThenable.js
export function trackUsedThenable(thenableState, thenable, index) {
  const previous = thenableState[index];
  if (previous === undefined) {
    thenableState.push(thenable);      // record a thenable seen for the first time
  } else if (previous !== thenable) {
    thenable.then(noop, noop);         // on a re-render, keep the previous one
    thenable = previous;
  }

  switch (thenable.status) {
    case 'fulfilled':
      return thenable.value;           // a settled value is returned directly
    case 'rejected':
      throw thenable.reason;           // a failure throws reason - it goes to a boundary
    default: {
      // pending - attach so status/value get filled in, then stop this render
      suspendedThenable = thenable;
      throw SuspenseException;
    }
  }
}`;

const THENABLE_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThenable.js';

const ko: UseSuspenseErrorModelContent = {
  hero: {
    badge: 'React 19 변화 · 4/10단계',
    title: { line1: 'use()는 새 기능이 아니라', line2: '있던 내부 규약의 공개판이다' },
    description:
      'Suspense는 원래 던져진 Promise로 동작했습니다. React 19는 그 비공식 규약에 이름을 붙이고 문을 열어 준 것입니다.',
    diagramBadge: 'one call',
    diagramCaption: 'use(promise) → three outcomes',
    callLabel: 'use(promise)',
    branches: [
      { id: 'pending', label: 'pending', caption: '가장 가까운 Suspense로', tone: 'violet' },
      { id: 'fulfilled', label: 'fulfilled', caption: '값을 그대로 돌려준다', tone: 'emerald' },
      { id: 'rejected', label: 'rejected', caption: '가장 가까운 경계로', tone: 'amber' },
    ],
  },
  branches: {
    badge: '01',
    eyebrow: 'three outcomes',
    title: '같은 호출이 세 갈래로 끝난다',
    description:
      'use()의 반환은 Promise의 status 하나로 결정됩니다. 분기는 컴포넌트가 아니라 React가 합니다.',
    cards: [
      {
        id: 'pending',
        title: '아직 기다리는 중',
        description:
          '렌더를 그 자리에서 멈추고 SuspenseException을 던집니다. 컴포넌트는 반환하지 않습니다.',
        outcome: '→ Suspense fallback',
        tone: 'violet',
      },
      {
        id: 'fulfilled',
        title: '이미 값이 있다',
        description: '던지지 않고 value를 그대로 반환합니다. 일반 함수 호출과 구분되지 않습니다.',
        outcome: '→ 값 반환',
        tone: 'emerald',
      },
      {
        id: 'rejected',
        title: '실패했다',
        description:
          'reason을 던집니다. 던져진 것이 thenable이 아니므로 Suspense가 아니라 Error Boundary가 받습니다.',
        outcome: '→ Error Boundary',
        tone: 'amber',
      },
    ],
    note: 'rejected가 Error Boundary로 간다는 점이 자주 헷갈립니다. Promise였다는 사실은 이 시점에 이미 사라져 있습니다.',
  },
  readable: {
    badge: '02',
    eyebrow: 'two readables',
    title: 'use()가 읽을 수 있는 두 가지',
    description:
      '이름은 하나지만 대상은 둘입니다. 공통점은 둘 다 "렌더 중에 값을 요청한다"는 것입니다.',
    promise: {
      title: 'Promise 읽기',
      badge: 'thenable',
      description: 'then을 가진 값이면 무엇이든 됩니다. 실제로 확인하는 것은 status 하나입니다.',
      bullets: [
        '렌더 중에 thenable을 넘기면 React가 그 자리를 기억한다',
        'pending이면 렌더를 중단하고 완료되면 다시 렌더한다',
        '같은 자리에서 같은 thenable을 계속 넘겨야 캐시가 맞는다',
        '매 렌더 새 Promise를 만들면 영원히 pending으로 보인다',
      ],
    },
    bridge: {
      headline: '읽는 대상은 다르지만\n호출 표면은 하나다',
      sub: 'use는 hook 슬롯을 쓰지 않기 때문에 조건문과 반복문 안에서도 호출할 수 있습니다.',
    },
    context: {
      title: 'Context 읽기',
      badge: 'context',
      description: 'useContext와 같은 값을 읽지만, 규칙이 훨씬 느슨합니다.',
      bullets: [
        'if 안에서 조건부로 context를 읽을 수 있다',
        '반복문 안에서 여러 context를 순회하며 읽을 수 있다',
        '조기 return 뒤에 호출해도 hook 순서가 깨지지 않는다',
        '읽기 전용이므로 Provider 쪽 동작은 그대로다',
      ],
    },
    note: '조건문 안에서 호출해도 되는 이유는 단순합니다. use는 hook 배열의 한 칸을 차지하지 않기 때문입니다.',
  },
  rules: {
    badge: '03',
    eyebrow: 'rule diff',
    title: '일반 hook과 규칙이 어디서 갈리는가',
    description: 'Hook 규칙 전체가 사라진 것이 아니라, 슬롯을 쓰지 않는 만큼만 풀렸습니다.',
    headers: ['비교 항목', '일반 hook', 'use()'],
    rows: [
      {
        topic: '조건문 안 호출',
        hook: '불가능 - 슬롯 순서가 어긋난다',
        use: '가능 - 슬롯을 쓰지 않는다',
      },
      {
        topic: '반복문 안 호출',
        hook: '불가능 - 호출 횟수가 달라진다',
        use: '가능 - 호출마다 독립적이다',
      },
      {
        topic: '렌더 중 Promise 읽기',
        hook: '직접은 불가 - Effect로 우회',
        use: '가능 - 그것이 존재 이유다',
      },
      {
        topic: 'Suspense 연결',
        hook: '간접 - 라이브러리가 대신 던진다',
        use: '직접 - React가 직접 던진다',
      },
      {
        topic: '호출 위치',
        hook: '컴포넌트와 커스텀 hook 안',
        use: '컴포넌트와 커스텀 hook 안 (동일)',
      },
    ],
    note: '마지막 줄이 경계입니다. 컴포넌트 밖이나 이벤트 핸들러에서는 use도 쓸 수 없습니다.',
  },
  tracking: {
    badge: '04',
    eyebrow: 'inside',
    title: 'use() 한 줄이 내부에서 지나가는 다섯 칸',
    description:
      '이 다섯 칸은 앞 챕터의 Suspense 모델과 정확히 같은 흐름입니다. use는 그 입구를 공개한 것입니다.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'use가 호출된다',
        description: 'Dispatcher를 거쳐 thenable인지 context인지부터 구분합니다.',
        tone: 'sky',
      },
      {
        id: 'register',
        num: '02',
        title: 'thenable을 자리에 기록한다',
        description:
          'Fiber의 thenableState 배열에 index로 저장합니다. 재렌더에서 같은 자리를 다시 봅니다.',
        tone: 'teal',
      },
      {
        id: 'inspect',
        num: '03',
        title: 'status를 확인한다',
        description: 'fulfilled면 value를, rejected면 reason을 꺼냅니다. 여기서 대부분 끝납니다.',
        tone: 'blue',
      },
      {
        id: 'suspend',
        num: '04',
        title: 'pending이면 중단한다',
        description:
          'suspendedThenable에 담아 두고 SuspenseException을 던집니다. 렌더는 여기서 멈춥니다.',
        tone: 'violet',
      },
      {
        id: 'replay',
        num: '05',
        title: '완료되면 같은 자리를 다시 읽는다',
        description:
          'Promise가 끝나면 React가 다시 렌더하고, 이번에는 03에서 값이 나와 그대로 통과합니다.',
        tone: 'emerald',
      },
    ],
    note: '05가 성립하려면 같은 Promise가 다시 넘어와야 합니다. 그래서 Promise는 렌더 밖에서 만들어 캐시해야 합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'use()의 실제 몸통이 있는 파일',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThenable.js',
    lookForLabel: '볼 것',
    lookFor: 'trackUsedThenable',
    whyLabel: '설명',
    why: 'use가 하는 일은 사실상 이 함수 하나입니다. 세 갈래 분기가 switch 한 덩어리로 그대로 드러납니다.',
    code: KO_CODE,
    primaryCta: 'ReactFiberThenable.js 소스 보기',
    primaryHref: THENABLE_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'ref는 왜 props의 한 키가 되었을까',
    description: '렌더링 축을 마치고 Element 표현 축으로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/ref-as-prop-element-shape',
  },
};

const en: UseSuspenseErrorModelContent = {
  hero: {
    badge: 'React 19 Changes · 4/10',
    title: { line1: 'use() is not a new feature.', line2: 'It publishes an old contract.' },
    description:
      'Suspense always worked on a thrown Promise. React 19 gave that unofficial contract a name and opened the door to it.',
    diagramBadge: 'one call',
    diagramCaption: 'use(promise) → three outcomes',
    callLabel: 'use(promise)',
    branches: [
      { id: 'pending', label: 'pending', caption: 'to the nearest Suspense', tone: 'violet' },
      { id: 'fulfilled', label: 'fulfilled', caption: 'returns the value as is', tone: 'emerald' },
      { id: 'rejected', label: 'rejected', caption: 'to the nearest boundary', tone: 'amber' },
    ],
  },
  branches: {
    badge: '01',
    eyebrow: 'three outcomes',
    title: 'One call, three endings',
    description:
      'What use() returns is decided by a single Promise status. React does the branching, not your component.',
    cards: [
      {
        id: 'pending',
        title: 'Still waiting',
        description:
          'The render stops right there and throws SuspenseException. The component never returns.',
        outcome: '→ Suspense fallback',
        tone: 'violet',
      },
      {
        id: 'fulfilled',
        title: 'The value is ready',
        description:
          'Nothing is thrown and value is returned. It is indistinguishable from a plain call.',
        outcome: '→ returns a value',
        tone: 'emerald',
      },
      {
        id: 'rejected',
        title: 'It failed',
        description:
          'reason is thrown. What is thrown is no longer a thenable, so an Error Boundary catches it, not Suspense.',
        outcome: '→ Error Boundary',
        tone: 'amber',
      },
    ],
    note: 'That rejected goes to an Error Boundary trips people up. By then the fact it was a Promise is already gone.',
  },
  readable: {
    badge: '02',
    eyebrow: 'two readables',
    title: 'The two things use() can read',
    description:
      'One name, two targets. What they share is asking for a value in the middle of a render.',
    promise: {
      title: 'Reading a Promise',
      badge: 'thenable',
      description: 'Anything with a then works. What is actually inspected is a single status.',
      bullets: [
        'Pass a thenable during render and React remembers its slot',
        'Pending stops the render; settling triggers a re-render',
        'The same slot must keep receiving the same thenable for the cache to hold',
        'Creating a new Promise each render makes it look pending forever',
      ],
    },
    bridge: {
      headline: 'Different targets,\none call surface',
      sub: 'Because use takes no hook slot, it can be called inside conditionals and loops.',
    },
    context: {
      title: 'Reading a Context',
      badge: 'context',
      description: 'It reads the same value useContext does, under far looser rules.',
      bullets: [
        'A context can be read conditionally inside an if',
        'Several contexts can be read while iterating in a loop',
        'Calling it after an early return does not break hook order',
        'It is read-only, so the Provider side behaves exactly as before',
      ],
    },
    note: 'The reason a conditional call is allowed is simple: use does not occupy a slot in the hook array.',
  },
  rules: {
    badge: '03',
    eyebrow: 'rule diff',
    title: 'Where the rules part ways from a normal hook',
    description:
      'The Rules of Hooks did not disappear. They loosened exactly as far as the missing slot allows.',
    headers: ['Topic', 'A normal hook', 'use()'],
    rows: [
      {
        topic: 'Inside a conditional',
        hook: 'Not allowed - slot order breaks',
        use: 'Allowed - it takes no slot',
      },
      {
        topic: 'Inside a loop',
        hook: 'Not allowed - the call count varies',
        use: 'Allowed - each call is independent',
      },
      {
        topic: 'Reading a Promise mid-render',
        hook: 'Not directly - you detour through an Effect',
        use: 'Allowed - that is its reason to exist',
      },
      {
        topic: 'Wiring to Suspense',
        hook: 'Indirect - a library throws on your behalf',
        use: 'Direct - React throws itself',
      },
      {
        topic: 'Where it may be called',
        hook: 'Inside a component or custom hook',
        use: 'Inside a component or custom hook (same)',
      },
    ],
    note: 'The last row is the border. Outside a component or in an event handler, use is off limits too.',
  },
  tracking: {
    badge: '04',
    eyebrow: 'inside',
    title: 'The five slots one use() call passes through',
    description:
      'These five are exactly the Suspense model from the previous chapter. use simply published its entrance.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'use is called',
        description: 'Through the Dispatcher, it first sorts a thenable from a context.',
        tone: 'sky',
      },
      {
        id: 'register',
        num: '02',
        title: 'The thenable is recorded in a slot',
        description:
          'It is stored by index in the Fiber thenableState array and re-read from the same slot.',
        tone: 'teal',
      },
      {
        id: 'inspect',
        num: '03',
        title: 'The status is inspected',
        description: 'fulfilled yields value, rejected yields reason. Most calls end right here.',
        tone: 'blue',
      },
      {
        id: 'suspend',
        num: '04',
        title: 'Pending stops the render',
        description:
          'It is held in suspendedThenable and SuspenseException is thrown. The render halts.',
        tone: 'violet',
      },
      {
        id: 'replay',
        num: '05',
        title: 'On settle, the same slot is read again',
        description:
          'React re-renders once the Promise settles, and this time step 03 produces a value.',
        tone: 'emerald',
      },
    ],
    note: 'Step 05 only works if the same Promise comes back, which is why Promises must be created and cached outside the render.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'The file that holds the body of use()',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThenable.js',
    lookForLabel: 'Look for',
    lookFor: 'trackUsedThenable',
    whyLabel: 'Why',
    why: 'What use does is essentially this one function. The three-way branch sits right there as a single switch.',
    code: EN_CODE,
    primaryCta: 'View ReactFiberThenable.js',
    primaryHref: THENABLE_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'Why did ref become just another prop',
    description: 'The render axis is done; the Element shape axis is next.',
    cta: 'Go to the next page',
    href: '/ref-as-prop-element-shape',
  },
};

export const useSuspenseErrorModelContent: Record<Locale, UseSuspenseErrorModelContent> = {
  ko,
  en,
};
