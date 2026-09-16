import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SignalId = 'target' | 'reaction' | 'before' | 'after';

export type HeroSignal = {
  id: SignalId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type RoleId = 'effect' | 'event' | 'fresh' | 'deps';

export type RoleCard = {
  id: RoleId;
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type ApplyStepId = 'separate' | 'extract' | 'call' | 'shrink';

export type ApplyStep = {
  id: ApplyStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type BehaviorRow = {
  topic: string;
  before: string;
  after: string;
};

export type UseEffectEventContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    signals: HeroSignal[];
  };
  deps: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    before: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    after: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  roles: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: RoleCard[];
    note: string;
  };
  apply: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ApplyStep[];
    note: string;
  };
  behavior: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: BehaviorRow[];
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
function mountEvent(callback) {
  const hook = mountWorkInProgressHook();
  const ref = { impl: callback };   // 실제 함수 본문은 이 상자 안에 들어간다
  hook.memoizedState = ref;

  // 돌려주는 함수 자체는 렌더마다 바뀌지 않는다.
  // 호출되는 순간에 상자를 열어 가장 최신 impl을 부른다.
  return function eventFn() {
    if (isInvalidExecutionContextForEventFunction()) {
      throw new Error('useEffectEvent로 감싼 함수는 렌더 중에 부를 수 없다');
    }
    return ref.impl.apply(undefined, arguments);
  };
}

// 업데이트 때는 이 상자의 impl만 갈아 끼운다.
// 바깥 함수의 정체성이 그대로이므로 의존성 배열이 흔들리지 않는다.`;

const EN_CODE = `// packages/react-reconciler/src/ReactFiberHooks.js
function mountEvent(callback) {
  const hook = mountWorkInProgressHook();
  const ref = { impl: callback };   // the real body goes inside this box
  hook.memoizedState = ref;

  // The returned function itself never changes between renders.
  // At call time it opens the box and invokes the freshest impl.
  return function eventFn() {
    if (isInvalidExecutionContextForEventFunction()) {
      throw new Error('a function wrapped in useEffectEvent cannot be called during render');
    }
    return ref.impl.apply(undefined, arguments);
  };
}

// On update only the impl inside the box is swapped.
// The outer function keeps its identity, so dependency arrays stay stable.`;

const HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: UseEffectEventContent = {
  hero: {
    badge: 'React 19 변화 · 9/10단계',
    title: { line1: '의존성 배열은 두 가지 질문에', line2: '한 번에 답하려 해 왔다' },
    description:
      '언제 다시 연결할지와 어떤 값을 읽을지는 다른 질문입니다. useEffectEvent는 그 둘을 떼어 놓습니다.',
    diagramBadge: 'two questions',
    diagramCaption: 'when to re-run vs what to read',
    signals: [
      { id: 'target', label: 'roomId', caption: '바뀌면 다시 연결해야 한다', tone: 'cyan' },
      { id: 'reaction', label: 'theme', caption: '읽기만 하면 된다', tone: 'violet' },
      {
        id: 'before',
        label: '[roomId, theme]',
        caption: '둘 다 재실행 조건이 된다',
        tone: 'amber',
      },
      { id: 'after', label: '[roomId]', caption: '읽는 값은 빠진다', tone: 'emerald' },
    ],
  },
  deps: {
    badge: '01',
    eyebrow: 'why it re-ran',
    title: '재실행 조건과 읽는 값이 한 배열에 있었다',
    description:
      'lint 규칙은 옳았습니다. Effect가 쓰는 값은 전부 넣어야 했고, 그래서 필요 없는 재실행이 생겼습니다.',
    before: {
      title: '한 배열에 섞여 있을 때',
      badge: '[roomId, theme]',
      description:
        'Effect 본문이 theme를 읽으니 배열에 넣어야 하고, 넣으면 theme가 바뀔 때마다 다시 연결됩니다.',
      bullets: [
        '연결 대상이 아닌 theme가 재연결을 일으킨다',
        '배열에서 빼면 오래된 theme를 읽는 stale closure가 된다',
        'ref에 담아 우회하면 코드가 늘고 의도가 흐려진다',
        'lint 규칙을 주석으로 끄는 습관이 생긴다',
      ],
    },
    bridge: {
      headline: '읽기만 하는 값은\n재실행 조건이 아니다',
      sub: '이벤트성 로직을 따로 감싸면, 그 안에서 읽는 값은 배열에 넣지 않아도 항상 최신입니다.',
    },
    after: {
      title: '두 질문을 갈라 놓으면',
      badge: '[roomId]',
      description:
        '알림 로직을 Effect Event로 빼면 Effect 본문은 연결만 남고 배열도 그만큼 줄어듭니다.',
      bullets: [
        'theme가 바뀌어도 연결은 유지된다',
        '알림 문구는 호출 시점의 최신 theme를 읽는다',
        '배열이 재실행 조건만 담게 되어 의도가 드러난다',
        'lint 규칙을 끄지 않아도 된다',
      ],
    },
    note: 'ref로 최신 값을 들고 다니던 관용구가 정식 API가 된 것입니다. 하던 일은 같고, 규칙이 생겼습니다.',
  },
  roles: {
    badge: '02',
    eyebrow: 'four roles',
    title: '분리하고 나면 각자 맡는 것',
    description: '같은 Effect 안에 있지만 책임이 다릅니다. 무엇이 어디에 속하는지가 기준입니다.',
    cards: [
      {
        id: 'effect',
        title: 'Effect 본문',
        description:
          '외부 시스템과의 연결과 정리를 맡습니다. 언제 다시 해야 하는지가 유일한 관심사입니다.',
        badge: 'connect / cleanup',
        tone: 'cyan',
      },
      {
        id: 'event',
        title: 'Effect Event',
        description:
          '연결 위에서 일어나는 반응을 맡습니다. 알림·로그·분석 호출 같은 일회성 동작입니다.',
        badge: 'useEffectEvent',
        tone: 'violet',
      },
      {
        id: 'fresh',
        title: '최신 값 보장',
        description: '호출되는 순간의 props와 state를 읽습니다. 캡처된 과거 값이 아닙니다.',
        badge: '항상 최신',
        tone: 'teal',
      },
      {
        id: 'deps',
        title: '안정된 정체성',
        description:
          '돌려주는 함수는 렌더마다 바뀌지 않습니다. 그래서 의존성 배열에 넣을 필요가 없습니다.',
        badge: '배열에서 제외',
        tone: 'indigo',
      },
    ],
    note: '세 번째와 네 번째가 한 몸입니다. 겉함수는 고정하고 속 구현만 갈아 끼우기 때문에 둘이 동시에 성립합니다.',
  },
  apply: {
    badge: '03',
    eyebrow: 'how to apply',
    title: '기존 Effect에 적용하는 네 칸',
    description: '적용 순서가 곧 판단 순서입니다. 무엇이 재실행 조건인지부터 답해야 합니다.',
    steps: [
      {
        id: 'separate',
        num: '01',
        title: '두 질문으로 값을 가른다',
        description:
          '이 값이 바뀌면 다시 연결해야 하는가, 아니면 읽기만 하면 되는가를 값마다 답합니다.',
        tone: 'cyan',
      },
      {
        id: 'extract',
        num: '02',
        title: '읽기만 하는 쪽을 감싼다',
        description:
          '그 값을 쓰는 이벤트성 로직을 useEffectEvent로 빼냅니다. 본문은 연결만 남깁니다.',
        tone: 'violet',
      },
      {
        id: 'call',
        num: '03',
        title: 'Effect 안에서만 부른다',
        description:
          '렌더 중이나 이벤트 핸들러에서 부르면 안 됩니다. 규칙을 어기면 개발 모드에서 던집니다.',
        tone: 'indigo',
      },
      {
        id: 'shrink',
        num: '04',
        title: '배열에서 그 값을 뺀다',
        description:
          '이제 배열에는 재실행 조건만 남습니다. lint 규칙도 이 함수는 넣으라고 하지 않습니다.',
        tone: 'emerald',
      },
    ],
    note: '01을 건너뛰고 배열을 줄이는 용도로만 쓰면 원래 문제가 그대로 돌아옵니다. 가르는 일이 먼저입니다.',
  },
  behavior: {
    badge: '04',
    eyebrow: 'side by side',
    title: '같은 변화에 두 코드가 다르게 반응한다',
    description: '적용 전후로 실제 동작이 어떻게 갈리는지 네 가지 상황으로 봅니다.',
    headers: ['상황', 'Before', 'After'],
    rows: [
      {
        topic: 'theme만 바뀔 때',
        before: '연결을 끊고 다시 연다',
        after: '연결은 그대로고 알림 문구만 최신이 된다',
      },
      {
        topic: 'roomId가 바뀔 때',
        before: '다시 연결한다',
        after: '다시 연결한다 - 여기는 그대로다',
      },
      {
        topic: '읽는 값의 신선도',
        before: '배열에서 빼면 오래된 값을 읽는다',
        after: '호출 시점의 최신 값을 읽는다',
      },
      {
        topic: '호출할 수 있는 곳',
        before: '제약 없음 - 그래서 실수도 쉽다',
        after: 'Effect와 다른 Effect Event 안에서만',
      },
    ],
    note: '두 번째 줄이 중요합니다. 진짜 재실행이 필요한 경우는 그대로 재실행됩니다. 줄어든 것은 불필요한 쪽뿐입니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '겉은 고정하고 속만 바꾸는 상자',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'mountEvent',
    whyLabel: '설명',
    why: 'ref 상자 하나로 두 성질을 동시에 얻습니다. 바깥 함수는 안정적이고, 안의 구현은 매번 최신으로 교체됩니다.',
    code: KO_CODE,
    primaryCta: 'ReactFiberHooks.js 소스 보기',
    primaryHref: HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: '다음 릴리스는 스스로 어떻게 읽을까',
    description: '열 번째 페이지에서 이 지도를 계속 쓰는 방법으로 챕터를 닫습니다.',
    cta: '다음 페이지로 이동',
    href: '/react-19-2-reading-method',
  },
};

const en: UseEffectEventContent = {
  hero: {
    badge: 'React 19 Changes · 9/10',
    title: { line1: 'A dependency array has been', line2: 'answering two questions at once' },
    description:
      'When to reconnect and which value to read are different questions. useEffectEvent pulls them apart.',
    diagramBadge: 'two questions',
    diagramCaption: 'when to re-run vs what to read',
    signals: [
      { id: 'target', label: 'roomId', caption: 'a change means reconnecting', tone: 'cyan' },
      { id: 'reaction', label: 'theme', caption: 'only needs to be read', tone: 'violet' },
      {
        id: 'before',
        label: '[roomId, theme]',
        caption: 'both become re-run conditions',
        tone: 'amber',
      },
      { id: 'after', label: '[roomId]', caption: 'the read-only value drops out', tone: 'emerald' },
    ],
  },
  deps: {
    badge: '01',
    eyebrow: 'why it re-ran',
    title: 'Re-run conditions and read values shared one array',
    description:
      'The lint rule was right: every value the Effect uses had to be listed, and that produced needless re-runs.',
    before: {
      title: 'While they are mixed together',
      badge: '[roomId, theme]',
      description:
        'The body reads theme, so theme must be listed, and once listed every theme change reconnects.',
      bullets: [
        'theme, which is not the connection target, triggers reconnection',
        'Dropping it from the array leaves a stale closure reading an old theme',
        'Working around it with a ref adds code and blurs the intent',
        'You get into the habit of silencing the lint rule with a comment',
      ],
    },
    bridge: {
      headline: 'A value you only read\nis not a re-run condition',
      sub: 'Wrap the event-like logic and the values it reads stay fresh without entering the array.',
    },
    after: {
      title: 'Once the questions are split',
      badge: '[roomId]',
      description:
        'Move the notification into an Effect Event and the body keeps only the connection, shrinking the array.',
      bullets: [
        'A theme change leaves the connection alone',
        'The notification text reads the theme current at call time',
        'The array holds only re-run conditions, so intent becomes visible',
        'There is no need to disable the lint rule',
      ],
    },
    note: 'The old ref idiom for carrying a fresh value became an official API. The job is the same; now there are rules.',
  },
  roles: {
    badge: '02',
    eyebrow: 'four roles',
    title: 'What each part owns after the split',
    description:
      'They live in the same Effect with different responsibilities. The question is what belongs where.',
    cards: [
      {
        id: 'effect',
        title: 'The Effect body',
        description:
          'Owns connecting to and cleaning up an external system. Its only concern is when to redo that.',
        badge: 'connect / cleanup',
        tone: 'cyan',
      },
      {
        id: 'event',
        title: 'The Effect Event',
        description:
          'Owns reactions on top of the connection: notifications, logs, analytics calls.',
        badge: 'useEffectEvent',
        tone: 'violet',
      },
      {
        id: 'fresh',
        title: 'Freshness guarantee',
        description:
          'It reads the props and state current at call time, not a captured past value.',
        badge: 'always current',
        tone: 'teal',
      },
      {
        id: 'deps',
        title: 'Stable identity',
        description:
          'The returned function does not change between renders, so it never needs to be in the array.',
        badge: 'out of the array',
        tone: 'indigo',
      },
    ],
    note: 'The third and fourth are one thing: the outer function is pinned while the inner implementation is swapped.',
  },
  apply: {
    badge: '03',
    eyebrow: 'how to apply',
    title: 'Four slots for applying it to an existing Effect',
    description:
      'The order of application is the order of judgement. Start by answering what a re-run condition is.',
    steps: [
      {
        id: 'separate',
        num: '01',
        title: 'Sort values by the two questions',
        description:
          'For each value, ask whether a change means reconnecting or whether it is only read.',
        tone: 'cyan',
      },
      {
        id: 'extract',
        num: '02',
        title: 'Wrap the read-only side',
        description:
          'Pull the event-like logic using that value into useEffectEvent, leaving only the connection.',
        tone: 'violet',
      },
      {
        id: 'call',
        num: '03',
        title: 'Call it only inside an Effect',
        description:
          'Never during render or in an event handler. Breaking the rule throws in development.',
        tone: 'indigo',
      },
      {
        id: 'shrink',
        num: '04',
        title: 'Drop that value from the array',
        description:
          'Now the array holds only re-run conditions, and the lint rule does not ask for the function.',
        tone: 'emerald',
      },
    ],
    note: 'Skip 01 and use it purely to shrink an array and the original problem comes right back. Sorting comes first.',
  },
  behavior: {
    badge: '04',
    eyebrow: 'side by side',
    title: 'Two versions react differently to the same change',
    description: 'Four situations showing how behavior parts before and after.',
    headers: ['Situation', 'Before', 'After'],
    rows: [
      {
        topic: 'Only theme changes',
        before: 'The connection is torn down and reopened',
        after: 'The connection stays; only the notification text updates',
      },
      {
        topic: 'roomId changes',
        before: 'It reconnects',
        after: 'It reconnects - unchanged here',
      },
      {
        topic: 'Freshness of read values',
        before: 'Dropping it from the array reads a stale value',
        after: 'It reads the value current at call time',
      },
      {
        topic: 'Where it may be called',
        before: 'No restriction - which makes mistakes easy',
        after: 'Only inside an Effect or another Effect Event',
      },
    ],
    note: 'The second row matters: genuine reconnections still happen. Only the unnecessary ones went away.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'A box with a fixed lid and a swappable inside',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'mountEvent',
    whyLabel: 'Why',
    why: 'One ref box buys both properties at once: the outer function stays stable while the implementation inside is replaced each render.',
    code: EN_CODE,
    primaryCta: 'View ReactFiberHooks.js',
    primaryHref: HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'How do you read the next release on your own',
    description: 'Page ten closes the chapter with how to keep using this map.',
    cta: 'Go to the next page',
    href: '/react-19-2-reading-method',
  },
};

export const useEffectEventContent: Record<Locale, UseEffectEventContent> = { ko, en };
