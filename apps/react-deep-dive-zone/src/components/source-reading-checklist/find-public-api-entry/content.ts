import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type LayerKey = 'user' | 'public' | 'dispatcher' | 'internal';

export type HeroLayer = {
  key: LayerKey;
  label: string;
  layerTitle: string;
  file?: string;
  code?: string;
  func?: string;
  caption: string;
  tone: ToneKey;
};

export type StepCard = {
  number: string;
  title: string;
  code: string;
  body: string;
  tone: ToneKey;
};

export type DispatcherCard = {
  id: 'mount' | 'update' | 'invalid';
  title: string;
  body: string;
  tone: ToneKey;
  iconKey: 'circlePlay' | 'refresh' | 'alert';
};

export type ApiPatternCard = {
  id: 'use' | 'use-action-state' | 'use-effect-event' | 'use-transition';
  api: string;
  publicApi: string;
  dispatcher: string;
  hint: string;
  body: string;
  tone: ToneKey;
};

export type CallGraphNode = {
  label: string;
  /** dim row 또는 강조 row 표현 */
  emphasize?: boolean;
  /** 노드 타입에 따른 톤 매핑 */
  layer: LayerKey;
};

export type CallGraphTab = {
  id: 'use-state' | 'use' | 'use-action-state' | 'use-effect-event';
  api: string;
  signature: string;
  graph: CallGraphNode[];
  readingPoint: string;
  keywords: string[];
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type FindPublicApiEntryContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    layers: HeroLayer[];
    flowSummary: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** ReactHooks.js / 상태 큐 강조 키 */
    emphasize: { src: string; queue: string };
    badges: string[];
  };
  whyApiFile: {
    eyebrow: string;
    title: string;
    intro: string;
    statementHeadline: string;
    statementSub: string;
    steps: StepCard[];
    emphasis: string;
  };
  useStateEntry: {
    eyebrow: string;
    title: string;
    intro: string;
    userCodeLabel: string;
    userCode: string;
    userCodeBody: string;
    sourceLabel: string;
    sourceFile: string;
    sourceBody: string;
    code: string;
    keyPoint: { headline: string; body: string };
  };
  resolveDispatcher: {
    eyebrow: string;
    title: string;
    intro: string;
    conceptHeadline: string;
    flow: { label: string; emphasize?: boolean; tone: ToneKey }[];
    cards: DispatcherCard[];
    bridgeBanner: string;
  };
  bridge: {
    eyebrow: string;
    title: string;
    intro: string;
    leftTitle: string;
    leftBadge: string;
    leftBody: string;
    leftFile: string;
    rightTitle: string;
    rightBadge: string;
    rightBody: string;
    rightFile: string;
    bridgeLabel: string;
    bridgeSub: string;
    keySentence: string;
  };
  apiPatterns: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ApiPatternCard[];
    publicApiLabel: string;
    dispatcherLabel: string;
    hintLabel: string;
  };
  callGraph: {
    eyebrow: string;
    title: string;
    intro: string;
    tabsLabel: string;
    tabs: CallGraphTab[];
    resultLabels: {
      api: string;
      signature: string;
      graph: string;
      readingPoint: string;
      keywords: string;
    };
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const useStateCodeKo = `export function useState<S>(
  initialState: (() => S) | S,
): [S, Dispatch<BasicStateAction<S>>] {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}`;

export const findPublicApiEntryContent: Record<Locale, FindPublicApiEntryContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 2/10단계',
      titleLines: ['Public API에서 내부 구현까지,', '입구를 먼저 찾는다'],
      accentTail: '입구를 먼저 찾는다',
      description: '사용자가 호출하는 API와 실제 동작을 수행하는 구현은 대개 다른 층에 있습니다.',
      supporting:
        'ReactHooks.js에서 useState를 찾았다고 해서 상태 큐와 업데이트 처리 로직이 바로 보이는 것은 아닙니다. public API는 실제 구현으로 내려가기 위한 입구입니다.',
      primaryCta: 'useState 입구 보기',
      secondaryCta: 'Dispatcher 흐름 보기',
      visualTitle: 'public API는 구현의 전부가 아니라 입구입니다',
      layers: [
        {
          key: 'user',
          label: 'Layer 0',
          layerTitle: '사용자 코드',
          code: 'const [count, setCount] = useState(0);',
          caption: '개발자가 직접 호출하는 API',
          tone: 'sky',
        },
        {
          key: 'public',
          label: 'Layer 1',
          layerTitle: 'public API',
          file: 'packages/react/src/ReactHooks.js',
          code: 'const dispatcher = resolveDispatcher();\nreturn dispatcher.useState(initialState);',
          caption: '사용자 호출을 현재 dispatcher로 위임',
          tone: 'blue',
        },
        {
          key: 'dispatcher',
          label: 'Layer 2',
          layerTitle: 'dispatcher bridge',
          func: 'resolveDispatcher()',
          caption: '현재 렌더링 상황에 맞는 Hook 구현 세트를 선택',
          tone: 'cyan',
        },
        {
          key: 'internal',
          label: 'Layer 3',
          layerTitle: 'internal implementation',
          file: 'packages/react-reconciler/src/ReactFiberHooks.js',
          caption: 'Hook 자료구조, update queue, dispatch 로직 처리',
          tone: 'violet',
        },
      ],
      flowSummary: 'user call → public API → dispatcher → reconciler implementation',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['useState를 읽고 싶은데', '왜 {src}만 보면', '{queue}가 안 보일까?'],
      emphasize: { src: 'ReactHooks.js', queue: '상태 큐' },
      badges: ['Public API', 'Dispatcher', 'ReactFiberHooks', 'Layer 이동'],
    },
    whyApiFile: {
      eyebrow: 'why api file is not the answer',
      title: '왜 API 파일에서 답이 바로 안 보이는가?',
      intro:
        'React의 public API 파일은 사용자가 호출하는 함수명을 제공하지만, 실제 구현 세부사항을 모두 담고 있지는 않습니다.',
      statementHeadline: 'public API는 사용자 호출을 내부 구현으로 전달하는 관문이다.',
      statementSub: '입구 파일은 위임 로직을 모아두고, 실제 동작은 다음 layer에서 일어납니다.',
      steps: [
        {
          number: '01',
          title: '사용자 코드',
          code: 'useState(0);',
          body: '개발자가 직접 호출하는 API입니다.',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'public API 파일',
          code: 'ReactHooks.js',
          body: '호출을 현재 dispatcher로 전달합니다.',
          tone: 'blue',
        },
        {
          number: '03',
          title: '실제 내부 구현',
          code: 'ReactFiberHooks.js',
          body: 'Hook 상태, update queue, dispatch 처리를 수행합니다.',
          tone: 'violet',
        },
      ],
      emphasis: '입구 파일과 구현 파일은 다를 수 있습니다.',
    },
    useStateEntry: {
      eyebrow: 'useState public api entry',
      title: 'useState의 public API 입구',
      intro:
        'useState를 읽고 싶다면 먼저 사용자가 호출하는 API 입구를 확인합니다. 하지만 여기서 곧바로 상태 큐가 등장하지 않는다는 점이 중요합니다.',
      userCodeLabel: '사용자 코드',
      userCode: 'const [count, setCount] = useState(0);',
      userCodeBody: '컴포넌트에서 직접 호출하는 API입니다.',
      sourceLabel: '첫 번째 입구',
      sourceFile: 'packages/react/src/ReactHooks.js',
      sourceBody: 'React 패키지의 public Hook API가 모여 있는 파일입니다.',
      code: useStateCodeKo,
      keyPoint: {
        headline: '여기에는 Hook의 update queue를 직접 처리하는 코드가 없습니다.',
        body: '대신 현재 dispatcher의 useState 구현으로 위임합니다.',
      },
    },
    resolveDispatcher: {
      eyebrow: 'resolveDispatcher role',
      title: 'resolveDispatcher의 역할',
      intro:
        'resolveDispatcher()는 현재 렌더링 상황에서 어떤 Hook 구현을 사용해야 하는지 결정하는 중간 지점입니다.',
      conceptHeadline: '현재 렌더링 상황에 맞는 Hook 구현 세트를 고른다.',
      flow: [
        { label: 'useState()', tone: 'blue' },
        { label: 'resolveDispatcher()', emphasize: true, tone: 'cyan' },
        { label: '현재 dispatcher 결정', tone: 'cyan' },
        { label: 'dispatcher.useState(...)', tone: 'violet' },
      ],
      cards: [
        {
          id: 'mount',
          title: 'mount 상황',
          body: '처음 렌더링되는 컴포넌트라면 mount용 Hook dispatcher가 사용됩니다.',
          tone: 'sky',
          iconKey: 'circlePlay',
        },
        {
          id: 'update',
          title: 'update 상황',
          body: '이미 렌더링된 컴포넌트가 다시 렌더링된다면 update용 Hook dispatcher가 사용됩니다.',
          tone: 'cyan',
          iconKey: 'refresh',
        },
        {
          id: 'invalid',
          title: '잘못된 호출',
          body: '컴포넌트 렌더링 밖에서 Hook을 호출하면 올바른 dispatcher를 찾을 수 없습니다.',
          tone: 'amber',
          iconKey: 'alert',
        },
      ],
      bridgeBanner: 'dispatcher는 public API와 실제 Hook 구현 사이의 다리입니다.',
    },
    bridge: {
      eyebrow: 'layer switch',
      title: 'ReactFiberHooks 구현 쪽으로 넘어가기',
      intro: '여기서부터는 사용자-facing API를 벗어나 실제 Hook 자료구조 처리로 들어갑니다.',
      leftTitle: 'ReactHooks.js',
      leftBadge: 'public API layer',
      leftBody: '사용자 호출을 dispatcher로 위임합니다.',
      leftFile: 'packages/react/src/ReactHooks.js',
      rightTitle: 'ReactFiberHooks.js',
      rightBadge: 'reconciler implementation layer',
      rightBody: 'Hook list, memoizedState, updateQueue, dispatch 로직을 처리합니다.',
      rightFile: 'packages/react-reconciler/src/ReactFiberHooks.js',
      bridgeLabel: 'dispatcher.useState',
      bridgeSub: 'layer switch',
      keySentence: '독해에서 중요한 것은 "어느 지점에서 레이어가 바뀌는가"다.',
    },
    apiPatterns: {
      eyebrow: 'same pattern across apis',
      title: '다른 API도 같은 패턴인가?',
      intro:
        'React의 많은 Hook API는 비슷한 모양을 가집니다. public API에서 dispatcher method를 호출하고, 실제 처리는 내부 구현으로 이어집니다.',
      publicApiLabel: 'public API',
      dispatcherLabel: 'dispatcher method',
      hintLabel: 'internal hint',
      cards: [
        {
          id: 'use',
          api: 'use()',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.use',
          hint: 'thenable / Suspense 처리',
          body: 'Promise나 context 값을 읽는 public API지만, pending thenable 처리와 Suspense 연결은 내부 구현으로 이어집니다.',
          tone: 'cyan',
        },
        {
          id: 'use-action-state',
          api: 'useActionState',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useActionState',
          hint: 'action state / pending update',
          body: 'form action과 비동기 상태 흐름을 연결하기 위해 내부 Hook 구현으로 위임됩니다.',
          tone: 'emerald',
        },
        {
          id: 'use-effect-event',
          api: 'useEffectEvent',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useEffectEvent',
          hint: 'event callback / effect boundary',
          body: 'Effect 내부에서 최신 값을 읽는 이벤트 함수를 dispatcher 계층으로 연결합니다.',
          tone: 'violet',
        },
        {
          id: 'use-transition',
          api: 'useTransition',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useTransition',
          hint: 'transition lane / pending state',
          body: 'non-blocking update를 만들기 위해 transition 관련 내부 update 흐름으로 이어집니다.',
          tone: 'indigo',
        },
      ],
    },
    callGraph: {
      eyebrow: 'public api call graph',
      title: 'Public API Call Graph',
      intro:
        'API를 선택하면 public API에서 내부 구현까지 이어지는 호출 그래프를 확인할 수 있습니다.',
      tabsLabel: 'API 선택',
      tabs: [
        {
          id: 'use-state',
          api: 'useState',
          signature: 'useState(initialState)',
          graph: [
            { label: '사용자 호출', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useState', layer: 'dispatcher' },
            { label: 'ReactFiberHooks.js', layer: 'internal' },
          ],
          readingPoint: '상태 큐는 ReactHooks.js가 아니라 ReactFiberHooks.js 쪽에서 본다.',
          keywords: ['useState', 'dispatcher', 'memoizedState', 'updateQueue'],
        },
        {
          id: 'use',
          api: 'use',
          signature: 'use(thenable)',
          graph: [
            { label: '사용자 호출', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.use', layer: 'dispatcher' },
            { label: 'thenable / Suspense 처리', layer: 'internal' },
          ],
          readingPoint: 'pending thenable이 Suspense boundary와 어떻게 연결되는지 본다.',
          keywords: ['use', 'thenable', 'Suspense', 'retry'],
        },
        {
          id: 'use-action-state',
          api: 'useActionState',
          signature: 'useActionState(action, initialState)',
          graph: [
            { label: '사용자 호출', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useActionState', layer: 'dispatcher' },
            { label: 'action state implementation', layer: 'internal' },
          ],
          readingPoint: 'action 결과, pending 상태, form 흐름이 어디서 연결되는지 본다.',
          keywords: ['useActionState', 'action', 'pending', 'form'],
        },
        {
          id: 'use-effect-event',
          api: 'useEffectEvent',
          signature: 'useEffectEvent(callback)',
          graph: [
            { label: '사용자 호출', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useEffectEvent', layer: 'dispatcher' },
            { label: 'effect event implementation', layer: 'internal' },
          ],
          readingPoint: 'Effect와 이벤트성 callback의 경계가 어떻게 표현되는지 본다.',
          keywords: ['useEffectEvent', 'callback', 'effect', 'latest value'],
        },
      ],
      resultLabels: {
        api: 'API 이름',
        signature: '사용자 호출',
        graph: 'Call Graph',
        readingPoint: '읽기 포인트',
        keywords: '키워드',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, 실제 ReactHooks.js에서 API 입구를 따라가봅니다.',
      items: [
        'ReactHooks.js에서 useState를 찾는다.',
        '직접 상태를 만드는 코드가 아니라 dispatcher 위임임을 확인한다.',
        'use(), useActionState도 같은 패턴인지 비교한다.',
        "public API는 '입구'라는 문장을 자기 말로 적는다.",
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: 'public API와 실제 구현 파일은 분리되어 있다.',
          sub: '입구 파일과 구현 파일은 책임이 다르고 위치도 다르다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'ReactHooks.js는 Hook 구현 그 자체보다 진입점 역할이 크다.',
          sub: '실제 자료구조와 update queue는 reconciler 쪽 파일에 있다.',
          tone: 'cyan',
        },
        {
          number: '03',
          text: '독해는 API 입구 → 위임 지점 → 실제 구현 순으로 이어간다.',
          sub: '이 순서를 한 번 익히면 다른 Hook도 같은 방식으로 읽을 수 있다.',
          tone: 'violet',
        },
      ],
    },
    nextCta: {
      eyebrow: '다음 단계',
      title: '패키지 경계를 먼저 읽어야 길을 잃지 않는다',
      description: '입구를 찾았다면, 이제 그 코드가 어느 패키지에 속해 있는지 읽어야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/follow-package-boundary',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 2/10',
      titleLines: ['From public API to implementation,', 'find the entry first'],
      accentTail: 'find the entry first',
      description:
        'The API the user calls and the implementation that actually runs usually live on different layers.',
      supporting:
        'Finding useState in ReactHooks.js does not mean the state queue and update logic are right there. The public API is the entry that takes you down to the real implementation.',
      primaryCta: 'See the useState entry',
      secondaryCta: 'See the dispatcher flow',
      visualTitle: 'A public API is not the whole implementation — it is the entry.',
      layers: [
        {
          key: 'user',
          label: 'Layer 0',
          layerTitle: 'user code',
          code: 'const [count, setCount] = useState(0);',
          caption: 'The API the developer calls directly.',
          tone: 'sky',
        },
        {
          key: 'public',
          label: 'Layer 1',
          layerTitle: 'public API',
          file: 'packages/react/src/ReactHooks.js',
          code: 'const dispatcher = resolveDispatcher();\nreturn dispatcher.useState(initialState);',
          caption: 'Delegates the user call to the current dispatcher.',
          tone: 'blue',
        },
        {
          key: 'dispatcher',
          label: 'Layer 2',
          layerTitle: 'dispatcher bridge',
          func: 'resolveDispatcher()',
          caption: 'Picks the Hook implementation set that fits the current render.',
          tone: 'cyan',
        },
        {
          key: 'internal',
          label: 'Layer 3',
          layerTitle: 'internal implementation',
          file: 'packages/react-reconciler/src/ReactFiberHooks.js',
          caption: 'Owns Hook data structures, update queue, and dispatch logic.',
          tone: 'violet',
        },
      ],
      flowSummary: 'user call → public API → dispatcher → reconciler implementation',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'I want to read useState,',
        'but why does {src} alone',
        'not show me the {queue}?',
      ],
      emphasize: { src: 'ReactHooks.js', queue: 'state queue' },
      badges: ['Public API', 'Dispatcher', 'ReactFiberHooks', 'Layer switch'],
    },
    whyApiFile: {
      eyebrow: 'why api file is not the answer',
      title: 'Why the API file does not show the answer',
      intro:
        "React's public API files expose the function names the user calls, but they do not contain all the implementation details.",
      statementHeadline:
        'The public API is the gate that forwards user calls to the implementation.',
      statementSub:
        'Entry files collect delegation logic; the real behavior happens in the next layer.',
      steps: [
        {
          number: '01',
          title: 'User code',
          code: 'useState(0);',
          body: 'The API the developer calls directly.',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'public API file',
          code: 'ReactHooks.js',
          body: 'Forwards the call to the current dispatcher.',
          tone: 'blue',
        },
        {
          number: '03',
          title: 'Actual implementation',
          code: 'ReactFiberHooks.js',
          body: 'Owns Hook state, the update queue, and dispatch logic.',
          tone: 'violet',
        },
      ],
      emphasis: 'The entry file and the implementation file may not be the same.',
    },
    useStateEntry: {
      eyebrow: 'useState public api entry',
      title: 'The public API entry of useState',
      intro:
        'To read useState, start by checking the API entry the user calls. The important point: the state queue does not appear here.',
      userCodeLabel: 'User code',
      userCode: 'const [count, setCount] = useState(0);',
      userCodeBody: 'The API called directly inside a component.',
      sourceLabel: 'First entry',
      sourceFile: 'packages/react/src/ReactHooks.js',
      sourceBody: "The file that gathers the React package's public Hook APIs.",
      code: useStateCodeKo,
      keyPoint: {
        headline: 'No code here handles the Hook update queue directly.',
        body: "It delegates to the current dispatcher's useState implementation instead.",
      },
    },
    resolveDispatcher: {
      eyebrow: 'resolveDispatcher role',
      title: 'The role of resolveDispatcher',
      intro:
        'resolveDispatcher() is the midpoint that decides which Hook implementation to use for the current render.',
      conceptHeadline: 'Picks the Hook implementation set that fits the current render.',
      flow: [
        { label: 'useState()', tone: 'blue' },
        { label: 'resolveDispatcher()', emphasize: true, tone: 'cyan' },
        { label: 'choose the current dispatcher', tone: 'cyan' },
        { label: 'dispatcher.useState(...)', tone: 'violet' },
      ],
      cards: [
        {
          id: 'mount',
          title: 'mount',
          body: 'For a first-time render, the mount Hook dispatcher is used.',
          tone: 'sky',
          iconKey: 'circlePlay',
        },
        {
          id: 'update',
          title: 'update',
          body: 'For an already-rendered component, the update Hook dispatcher is used.',
          tone: 'cyan',
          iconKey: 'refresh',
        },
        {
          id: 'invalid',
          title: 'invalid call',
          body: 'Calling a Hook outside component rendering fails to resolve a dispatcher.',
          tone: 'amber',
          iconKey: 'alert',
        },
      ],
      bridgeBanner:
        'The dispatcher is the bridge between the public API and the Hook implementation.',
    },
    bridge: {
      eyebrow: 'layer switch',
      title: 'Crossing over to the ReactFiberHooks implementation',
      intro:
        'From here, you leave the user-facing API and enter the actual Hook data-structure work.',
      leftTitle: 'ReactHooks.js',
      leftBadge: 'public API layer',
      leftBody: 'Delegates user calls to the dispatcher.',
      leftFile: 'packages/react/src/ReactHooks.js',
      rightTitle: 'ReactFiberHooks.js',
      rightBadge: 'reconciler implementation layer',
      rightBody: 'Owns Hook list, memoizedState, updateQueue, and dispatch logic.',
      rightFile: 'packages/react-reconciler/src/ReactFiberHooks.js',
      bridgeLabel: 'dispatcher.useState',
      bridgeSub: 'layer switch',
      keySentence: 'The thing that matters in reading: "where does the layer change?"',
    },
    apiPatterns: {
      eyebrow: 'same pattern across apis',
      title: 'Do the other APIs follow the same pattern?',
      intro:
        'Many React Hook APIs share the same shape. They call a dispatcher method from the public API and let the internal implementation do the actual work.',
      publicApiLabel: 'public API',
      dispatcherLabel: 'dispatcher method',
      hintLabel: 'internal hint',
      cards: [
        {
          id: 'use',
          api: 'use()',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.use',
          hint: 'thenable / Suspense handling',
          body: 'A public API for reading Promises or context, but pending thenable handling and Suspense wiring live in the implementation.',
          tone: 'cyan',
        },
        {
          id: 'use-action-state',
          api: 'useActionState',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useActionState',
          hint: 'action state / pending update',
          body: 'Delegates to the internal Hook implementation to connect form actions to the async state flow.',
          tone: 'emerald',
        },
        {
          id: 'use-effect-event',
          api: 'useEffectEvent',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useEffectEvent',
          hint: 'event callback / effect boundary',
          body: 'Wires an event-like function that reads the latest value inside an Effect through the dispatcher layer.',
          tone: 'violet',
        },
        {
          id: 'use-transition',
          api: 'useTransition',
          publicApi: 'ReactHooks.js',
          dispatcher: 'dispatcher.useTransition',
          hint: 'transition lane / pending state',
          body: 'Connects to the transition-related internal update flow to produce non-blocking updates.',
          tone: 'indigo',
        },
      ],
    },
    callGraph: {
      eyebrow: 'public api call graph',
      title: 'Public API call graph',
      intro:
        'Pick an API to see the call graph that runs from the public API down to the internal implementation.',
      tabsLabel: 'Pick an API',
      tabs: [
        {
          id: 'use-state',
          api: 'useState',
          signature: 'useState(initialState)',
          graph: [
            { label: 'user call', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useState', layer: 'dispatcher' },
            { label: 'ReactFiberHooks.js', layer: 'internal' },
          ],
          readingPoint: 'Read the state queue in ReactFiberHooks.js, not in ReactHooks.js.',
          keywords: ['useState', 'dispatcher', 'memoizedState', 'updateQueue'],
        },
        {
          id: 'use',
          api: 'use',
          signature: 'use(thenable)',
          graph: [
            { label: 'user call', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.use', layer: 'dispatcher' },
            { label: 'thenable / Suspense handling', layer: 'internal' },
          ],
          readingPoint: 'See how a pending thenable connects to a Suspense boundary.',
          keywords: ['use', 'thenable', 'Suspense', 'retry'],
        },
        {
          id: 'use-action-state',
          api: 'useActionState',
          signature: 'useActionState(action, initialState)',
          graph: [
            { label: 'user call', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useActionState', layer: 'dispatcher' },
            { label: 'action state implementation', layer: 'internal' },
          ],
          readingPoint: 'See where action results, pending state, and the form flow connect.',
          keywords: ['useActionState', 'action', 'pending', 'form'],
        },
        {
          id: 'use-effect-event',
          api: 'useEffectEvent',
          signature: 'useEffectEvent(callback)',
          graph: [
            { label: 'user call', layer: 'user' },
            { label: 'ReactHooks.js', layer: 'public' },
            { label: 'resolveDispatcher()', layer: 'dispatcher', emphasize: true },
            { label: 'dispatcher.useEffectEvent', layer: 'dispatcher' },
            { label: 'effect event implementation', layer: 'internal' },
          ],
          readingPoint:
            'See how the boundary between an Effect and an event-like callback is expressed.',
          keywords: ['useEffectEvent', 'callback', 'effect', 'latest value'],
        },
      ],
      resultLabels: {
        api: 'API',
        signature: 'User call',
        graph: 'Call graph',
        readingPoint: 'Reading point',
        keywords: 'Keywords',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro: 'Do not stop at reading. Open ReactHooks.js and follow the API entry yourself.',
      items: [
        'Find useState inside ReactHooks.js.',
        'Confirm it is dispatcher delegation, not state creation in place.',
        'Compare use() and useActionState — same pattern?',
        'Write the sentence "the public API is the entry" in your own words.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'The public API and the implementation files are separate.',
          sub: 'Entry files and implementation files own different responsibilities — and live in different places.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'ReactHooks.js is more of an entry point than a Hook implementation.',
          sub: 'The real data structures and the update queue live in reconciler files.',
          tone: 'cyan',
        },
        {
          number: '03',
          text: 'Reading goes: API entry → delegation point → real implementation.',
          sub: 'Learn the order once and you can read every other Hook the same way.',
          tone: 'violet',
        },
      ],
    },
    nextCta: {
      eyebrow: 'Next step',
      title: 'Read package boundaries first so you do not get lost',
      description:
        'Once you have the entry, the next thing to read is which package the code belongs to.',
      cta: 'Go to the next page',
      href: '/follow-package-boundary',
    },
  },
};
