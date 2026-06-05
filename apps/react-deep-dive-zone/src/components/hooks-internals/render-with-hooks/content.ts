import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'amber' | 'indigo';

export type HeroStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  emphasis?: boolean;
};

export type TimelineStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
};

export type SimulatorItem = {
  label: string;
  value: string;
  highlight?: boolean;
};

export type SimulatorCard = {
  badge: string;
  title: string;
  items: SimulatorItem[];
  tone: 'sky' | 'emerald';
};

export type MissionItem = {
  number: string;
  title: string;
  description: string;
};

export type SummaryItem = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
};

export type RenderWithHooksContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    steps: HeroStep[];
  };
  question: {
    eyebrow: string;
    title: string;
  };
  compare: {
    leftTitle: string;
    leftCode: string;
    leftCaption: string;
    centerBadge: string;
    rightTitle: string;
    rightFlow: { number: number; label: string }[];
    rightCaption: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    steps: TimelineStep[];
  };
  codePreview: {
    eyebrow: string;
    title: string;
    code: string;
    fileLabel: string;
    fileName: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
  dispatcher: {
    eyebrow: string;
    title: string;
    description: string;
    mountCard: {
      title: string;
      badge: string;
      dispatcher: string;
      flow: { line: string; mono?: boolean; emphasis?: boolean }[];
    };
    updateCard: {
      title: string;
      badge: string;
      dispatcher: string;
      flow: { line: string; mono?: boolean; emphasis?: boolean }[];
    };
    switch: {
      firstLabel: string;
      rerenderLabel: string;
      hint: string;
    };
  };
  simulator: {
    eyebrow: string;
    title: string;
    guide: string;
    codeFile: string;
    code: string;
    rightTitle: string;
    cards: SimulatorCard[];
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    items: MissionItem[];
  };
  summary: {
    eyebrow: string;
    title: string;
    items: SummaryItem[];
  };
  cta: {
    label: string;
    href: string;
    description: string;
  };
};

const CURRENT_FIBER_CODE = `currentlyRenderingFiber = workInProgress;

workInProgress.memoizedState = null;
workInProgress.updateQueue = null;
workInProgress.lanes = NoLanes;`;

const COUNTER_CODE = `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}`;

const ko: RenderWithHooksContent = {
  hero: {
    badge: 'Hooks 내부 · 2/10단계',
    titleLine1: 'Hooks가 동작하는 무대:',
    titleAccent: 'renderWithHooks',
    description:
      '함수 컴포넌트는 단순히 호출되지 않습니다. React는 Hook을 추적할 수 있는 렌더 환경을 만든 뒤 그 안에서 컴포넌트를 실행합니다.',
    steps: [
      {
        number: 1,
        title: 'Function Component',
        description: '개발자가 작성한 함수 컴포넌트',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'renderWithHooks',
        description: 'Hook 추적 환경을 준비하고 실행',
        tone: 'cyan',
        emphasis: true,
      },
      {
        number: 3,
        title: 'Hooks 실행 가능 상태',
        description: 'useState, useEffect 등 Hook을 안전하게 실행',
        tone: 'emerald',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title:
      'React는 어떻게 지금 어떤 컴포넌트가 렌더 중인지 알고, 그 컴포넌트의 Hook 상태를 연결할까?',
  },
  compare: {
    leftTitle: '우리가 보는 코드',
    leftCode: '<Counter />',
    leftCaption: '단순한 JSX 한 줄이지만...',
    centerBadge: 'VS',
    rightTitle: 'React 내부에서 일어나는 일',
    rightFlow: [
      { number: 1, label: 'updateFunctionComponent' },
      { number: 2, label: 'renderWithHooks' },
      { number: 3, label: 'Counter(props) 실행' },
    ],
    rightCaption: '복잡한 내부 흐름을 거쳐 실행됩니다.',
  },
  timeline: {
    eyebrow: 'full-flow',
    title: 'renderWithHooks 전체 흐름',
    description: 'Hook 환경이 어떻게 7단계에 걸쳐 구성되는지 따라가 보세요.',
    steps: [
      {
        number: 1,
        title: 'render lanes 설정',
        description: '현재 렌더의 우선순위(lanes)를 설정합니다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'currentlyRenderingFiber 설정',
        description: '현재 렌더 중인 Fiber를 설정합니다.',
        tone: 'sky',
      },
      {
        number: 3,
        title: '기존 Hook 상태 초기화',
        description: 'memoizedState, updateQueue 등을 초기화합니다.',
        tone: 'cyan',
      },
      {
        number: 4,
        title: 'Dispatcher 선택',
        description: 'mount / update / rerender에 맞는 Dispatcher를 선택합니다.',
        tone: 'violet',
      },
      {
        number: 5,
        title: 'Component(props) 실행',
        description: '함수 컴포넌트를 호출합니다.',
        tone: 'teal',
      },
      {
        number: 6,
        title: 'Hook 호출 수집',
        description: '각 Hook 호출을 linked list로 수집합니다.',
        tone: 'teal',
      },
      {
        number: 7,
        title: '렌더 결과 반환',
        description: '완성된 결과(ReactElement)를 반환합니다.',
        tone: 'emerald',
      },
    ],
  },
  codePreview: {
    eyebrow: 'code-preview',
    title: '현재 렌더링 Fiber를 설정하는 코드',
    code: CURRENT_FIBER_CODE,
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    description: '이후 useState와 useEffect는 바로 이 Fiber에 연결됩니다.',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  dispatcher: {
    eyebrow: 'dispatcher-selection',
    title: 'mount / update Dispatcher 선택',
    description:
      '같은 useState 호출이라도 렌더 상황에 따라 mount 계열 또는 update 계열 Dispatcher로 분기됩니다.',
    mountCard: {
      title: '최초 렌더',
      badge: '첫 렌더',
      dispatcher: 'HooksDispatcherOnMount',
      flow: [
        { line: 'useState', mono: true },
        { line: '↓' },
        { line: 'mountState', mono: true, emphasis: true },
        { line: '(새로운 Hook 생성)' },
      ],
    },
    updateCard: {
      title: '업데이트 렌더',
      badge: '재렌더',
      dispatcher: 'HooksDispatcherOnUpdate',
      flow: [
        { line: 'useState', mono: true },
        { line: '↓' },
        { line: 'updateState', mono: true, emphasis: true },
        { line: '(기존 Hook 재사용)' },
      ],
    },
    switch: {
      firstLabel: '첫 렌더',
      rerenderLabel: '재렌더',
      hint: '토글을 바꾸면 흐름을 비교해 보세요!',
    },
  },
  simulator: {
    eyebrow: 'render-simulator',
    title: '렌더 시뮬레이터',
    guide: '직접 흐름을 확인해 보세요',
    codeFile: 'Counter.js',
    code: COUNTER_CODE,
    rightTitle: '렌더 상황',
    cards: [
      {
        badge: '현재 단계',
        title: '1차 렌더 실행',
        tone: 'sky',
        items: [
          { label: '현재 Dispatcher', value: 'HooksDispatcherOnMount', highlight: true },
          { label: 'Hook 호출', value: 'useState → mountState 호출' },
          { label: '결과', value: '새로운 Hook 노드 생성 및 연결' },
        ],
      },
      {
        badge: '다음 단계',
        title: 'setCount 클릭 후 재렌더',
        tone: 'emerald',
        items: [
          { label: '현재 Dispatcher', value: 'HooksDispatcherOnUpdate', highlight: true },
          { label: 'Hook 호출', value: 'useState → updateState 호출' },
          { label: '결과', value: '기존 Hook 노드에서 상태 읽기/업데이트' },
        ],
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    description: '아래 체크포인트를 따라 React 소스 코드를 탐색해 보세요.',
    items: [
      {
        number: '01',
        title: '함수 컴포넌트 처리 흐름 찾기',
        description: 'updateFunctionComponent 함수를 찾아보세요.',
      },
      {
        number: '02',
        title: 'renderWithHooks 호출 지점 확인',
        description: '어디에서 renderWithHooks가 호출되는지 확인하세요.',
      },
      {
        number: '03',
        title: 'currentlyRenderingFiber 설정 확인',
        description: 'Fiber가 어떻게 설정되고 초기화되는지 코드를 확인하세요.',
      },
      {
        number: '04',
        title: 'Dispatcher 선택 로직 확인',
        description: 'mount / update / rerender 분기 로직을 살펴보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: 'React는 무대를 먼저 만든다',
        description: 'renderWithHooks가 Hook을 추적할 환경을 준비합니다.',
        tone: 'sky',
      },
      {
        number: 2,
        title: '현재 컴포넌트는 Fiber로 추적된다',
        description: 'currentlyRenderingFiber를 통해 지금 렌더 중인 컴포넌트를 기억합니다.',
        tone: 'cyan',
      },
      {
        number: 3,
        title: 'Dispatcher가 구현을 갈라준다',
        description: '렌더 상황에 따라 다른 Dispatcher가 Hook의 내부 구현을 결정합니다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: '다음: Hook linked list 구조 보기',
    href: '/hook-linked-list',
    description:
      'renderWithHooks의 다음 단계로, Hook 상태가 어떻게 연결되어 관리되는지 알아봅니다.',
  },
};

const en: RenderWithHooksContent = {
  hero: {
    badge: 'Hooks Internals · 2/10',
    titleLine1: 'Where Hooks actually run:',
    titleAccent: 'renderWithHooks',
    description:
      'Function components are not just called. React first sets up a render environment that can track Hooks, then runs the component inside it.',
    steps: [
      {
        number: 1,
        title: 'Function Component',
        description: 'The function component you wrote',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'renderWithHooks',
        description: 'Prepare and run the Hook tracking environment',
        tone: 'cyan',
        emphasis: true,
      },
      {
        number: 3,
        title: 'Hooks ready to run',
        description: 'useState, useEffect and other Hooks can safely execute',
        tone: 'emerald',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title:
      'How does React know which component is currently rendering, and connect that component’s Hook state to it?',
  },
  compare: {
    leftTitle: 'What we see',
    leftCode: '<Counter />',
    leftCaption: 'Just one line of JSX — but…',
    centerBadge: 'VS',
    rightTitle: 'What happens inside React',
    rightFlow: [
      { number: 1, label: 'updateFunctionComponent' },
      { number: 2, label: 'renderWithHooks' },
      { number: 3, label: 'Counter(props) is invoked' },
    ],
    rightCaption: 'It runs through a multi-step internal flow.',
  },
  timeline: {
    eyebrow: 'full-flow',
    title: 'renderWithHooks full flow',
    description: 'Follow how the Hook environment is built across seven steps.',
    steps: [
      {
        number: 1,
        title: 'Set render lanes',
        description: 'Set the priority (lanes) of the current render.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'Set currentlyRenderingFiber',
        description: 'Mark the Fiber that is currently rendering.',
        tone: 'sky',
      },
      {
        number: 3,
        title: 'Reset existing Hook state',
        description: 'Clear memoizedState, updateQueue and friends.',
        tone: 'cyan',
      },
      {
        number: 4,
        title: 'Pick a Dispatcher',
        description: 'Choose the Dispatcher for mount / update / rerender.',
        tone: 'violet',
      },
      {
        number: 5,
        title: 'Run Component(props)',
        description: 'Actually invoke the function component.',
        tone: 'teal',
      },
      {
        number: 6,
        title: 'Collect Hook calls',
        description: 'Gather each Hook call into a linked list.',
        tone: 'teal',
      },
      {
        number: 7,
        title: 'Return the render result',
        description: 'Return the resulting ReactElement.',
        tone: 'emerald',
      },
    ],
  },
  codePreview: {
    eyebrow: 'code-preview',
    title: 'Code that sets the current rendering Fiber',
    code: CURRENT_FIBER_CODE,
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    description: 'After this, useState and useEffect attach directly to this Fiber.',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  dispatcher: {
    eyebrow: 'dispatcher-selection',
    title: 'mount / update Dispatcher selection',
    description:
      'The same useState call branches into either a mount-family or update-family Dispatcher depending on the render situation.',
    mountCard: {
      title: 'Initial render',
      badge: 'First render',
      dispatcher: 'HooksDispatcherOnMount',
      flow: [
        { line: 'useState', mono: true },
        { line: '↓' },
        { line: 'mountState', mono: true, emphasis: true },
        { line: '(create a new Hook)' },
      ],
    },
    updateCard: {
      title: 'Update render',
      badge: 'Re-render',
      dispatcher: 'HooksDispatcherOnUpdate',
      flow: [
        { line: 'useState', mono: true },
        { line: '↓' },
        { line: 'updateState', mono: true, emphasis: true },
        { line: '(reuse the existing Hook)' },
      ],
    },
    switch: {
      firstLabel: 'First',
      rerenderLabel: 'Re-render',
      hint: 'Flip the toggle to compare both flows!',
    },
  },
  simulator: {
    eyebrow: 'render-simulator',
    title: 'Render simulator',
    guide: 'Walk through the flow yourself',
    codeFile: 'Counter.js',
    code: COUNTER_CODE,
    rightTitle: 'Render situation',
    cards: [
      {
        badge: 'Current step',
        title: 'Initial render',
        tone: 'sky',
        items: [
          { label: 'Current Dispatcher', value: 'HooksDispatcherOnMount', highlight: true },
          { label: 'Hook call', value: 'useState → mountState' },
          { label: 'Result', value: 'Create and link a new Hook node' },
        ],
      },
      {
        badge: 'Next step',
        title: 'Re-render after setCount click',
        tone: 'emerald',
        items: [
          { label: 'Current Dispatcher', value: 'HooksDispatcherOnUpdate', highlight: true },
          { label: 'Hook call', value: 'useState → updateState' },
          { label: 'Result', value: 'Read/update state from the existing Hook node' },
        ],
      },
    ],
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    description: 'Use the checkpoints below to explore the React source.',
    items: [
      {
        number: '01',
        title: 'Find the function component flow',
        description: 'Locate the updateFunctionComponent function.',
      },
      {
        number: '02',
        title: 'Confirm where renderWithHooks is called',
        description: 'Identify where renderWithHooks is invoked.',
      },
      {
        number: '03',
        title: 'Check currentlyRenderingFiber setup',
        description: 'Read how the Fiber is set and reset in code.',
      },
      {
        number: '04',
        title: 'Inspect the Dispatcher selection logic',
        description: 'Walk through the mount / update / rerender branches.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'React builds the stage first',
        description: 'renderWithHooks prepares an environment that can track Hooks.',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'The current component is tracked via Fiber',
        description: 'currentlyRenderingFiber remembers which component is rendering right now.',
        tone: 'cyan',
      },
      {
        number: 3,
        title: 'The Dispatcher branches the implementation',
        description:
          'Different Dispatchers decide the Hook’s internal implementation per situation.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    label: 'Next: explore the Hook linked list',
    href: '/hook-linked-list',
    description: 'Next, see how Hook state is linked and managed after renderWithHooks.',
  },
};

export const renderWithHooksContent: Record<Locale, RenderWithHooksContent> = { ko, en };
