import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type UsageStep = { num: string; title: string; body: string };
export type InternalStep = { num: string; title: string; body: string };

export type FlowStep = {
  id: 'click' | 'dispatch' | 'queue' | 'schedule' | 'render' | 'commit';
  number: string;
  title: string;
  body: string;
  iconName: 'cursor' | 'fx' | 'database' | 'clockRefresh' | 'cube' | 'checkCircle';
  tone: ToneKey;
};

export type StackLayer = {
  id: 'event' | 'updateQueue' | 'scheduler' | 'render' | 'commit' | 'dom';
  label: string;
  sub?: string;
  tone: 'sky' | 'blue' | 'cyan' | 'indigo' | 'teal' | 'emerald';
};

export type TableRow = {
  phenomenon: string;
  usage: string;
  internal: string;
};

export type CodeCard = {
  num: string;
  title: string;
  description: string;
  code: string;
  href: string;
  linkLabel: string;
};

export type UsageVsInternalsContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string;
    stackLayers: StackLayer[];
  };
  perspectives: {
    eyebrow: string;
    title: string;
    left: { title: string; subtitle: string; steps: UsageStep[] };
    right: { title: string; subtitle: string; steps: InternalStep[] };
  };
  flow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  demo: {
    eyebrow: string;
    title: string;
    counter: { title: string; button: string; hint: string };
    progress: {
      title: string;
      autoPill: string;
      steps: { num: string; title: string; body: string }[];
    };
  };
  table: {
    eyebrow: string;
    title: string;
    headers: { phenomenon: string; usage: string; internal: string };
    rows: TableRow[];
  };
  sourceCode: {
    eyebrow: string;
    title: string;
    cards: CodeCard[];
  };
  takeaway: {
    eyebrow: string;
    title: string;
    lines: string[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const dispatchCode = `function dispatchSetState(fiber, queue, action) {
  const lane = requestUpdateLane(fiber);
  const update = { lane, action, next: null };

  enqueueUpdate(queue, update);
  scheduleUpdateOnFiber(fiber, lane);
}`;

const scheduleCode = `function scheduleUpdateOnFiber(root, fiber, lane) {
  markRootUpdated(root, lane);

  if (enableSyncDefaultUpdates) {
    ensureRootIsScheduled(root);
  } else {
    performSyncWorkOnRoot(root);
  }
}`;

const githubBase = 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src';

export const usageVsInternalsContent: Record<Locale, UsageVsInternalsContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 2/6단계',
      title: ['같은 React 코드도,', '사용법으로 읽을 때와', '내부 구조로 읽을 때는 다릅니다.'],
      description:
        '겉으로는 단순한 Counter 컴포넌트지만, 내부에서는 이벤트 처리부터 커밋까지 여러 단계가 이어집니다.',
      stackLayers: [
        { id: 'event', label: 'Event', sub: 'onClick', tone: 'sky' },
        { id: 'updateQueue', label: 'Update Queue', sub: 'enqueueUpdate', tone: 'blue' },
        { id: 'scheduler', label: 'Scheduler', sub: 'ensureRootIsScheduled', tone: 'indigo' },
        { id: 'render', label: 'Render / Reconcile', sub: 'beginWork', tone: 'cyan' },
        { id: 'commit', label: 'Commit', sub: 'commitMutationEffects', tone: 'teal' },
        { id: 'dom', label: 'DOM', sub: 'browser paint', tone: 'emerald' },
      ],
    },
    perspectives: {
      eyebrow: '01 · 관점 비교',
      title: '두 관점으로 읽어보기',
      left: {
        title: '사용법 관점 (4단계)',
        subtitle: '개발자가 코드로 사용하는 흐름',
        steps: [
          { num: '1', title: '상태 선언', body: '`useState`로 상태를 선언합니다.' },
          { num: '2', title: '버튼 클릭', body: '사용자가 `+1` 버튼을 클릭합니다.' },
          { num: '3', title: 'count 증가', body: '`setCount(count + 1)`로 값을 갱신합니다.' },
          { num: '4', title: '화면 재표시', body: '변경된 `count`가 화면에 반영됩니다.' },
        ],
      },
      right: {
        title: '내부 구조 관점 (7단계)',
        subtitle: 'React 내부에서 실제로 일어나는 흐름',
        steps: [
          { num: '1', title: '이벤트 발생', body: '클릭 이벤트가 발생합니다.' },
          { num: '2', title: 'handler 호출', body: '`onClick` 핸들러가 실행됩니다.' },
          {
            num: '3',
            title: 'update 생성',
            body: '`dispatchSetState`로 update 객체가 생성됩니다.',
          },
          {
            num: '4',
            title: 'update queue',
            body: '업데이트가 Fiber의 update queue에 저장됩니다.',
          },
          {
            num: '5',
            title: 'root scheduling',
            body: '`scheduleUpdateOnFiber`가 루트 스케줄링을 시작합니다.',
          },
          { num: '6', title: 'render', body: 'Reconciler가 변경 사항을 계산합니다.' },
          {
            num: '7',
            title: 'commit',
            body: '변경 사항이 DOM에 커밋되어 화면이 갱신됩니다.',
          },
        ],
      },
    },
    flow: {
      eyebrow: '02 · 내부 흐름',
      title: '버튼을 누르면 내부에서는 무슨 일이 일어날까?',
      steps: [
        {
          id: 'click',
          number: '1',
          title: 'Click',
          body: '사용자 클릭',
          iconName: 'cursor',
          tone: 'sky',
        },
        {
          id: 'dispatch',
          number: '2',
          title: 'dispatchSetState',
          body: '`setCount` 호출',
          iconName: 'fx',
          tone: 'blue',
        },
        {
          id: 'queue',
          number: '3',
          title: 'update queue',
          body: '업데이트 저장',
          iconName: 'database',
          tone: 'indigo',
        },
        {
          id: 'schedule',
          number: '4',
          title: 'scheduleUpdateOnFiber',
          body: '스케줄링 시작',
          iconName: 'clockRefresh',
          tone: 'cyan',
        },
        {
          id: 'render',
          number: '5',
          title: 'Render Phase',
          body: '변경 계산',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'commit',
          number: '6',
          title: 'Commit Phase',
          body: 'DOM 반영',
          iconName: 'checkCircle',
          tone: 'emerald',
        },
      ],
    },
    demo: {
      eyebrow: '03 · 라이브 데모',
      title: '직접 경험해보기 (상상 데모)',
      counter: {
        title: 'Counter 데모',
        button: '+1 클릭',
        hint: '버튼을 클릭하면 오른쪽에서 내부 흐름이 단계별로 진행됩니다.',
      },
      progress: {
        title: '내부 흐름 진행 상황',
        autoPill: '단계 자동 진행',
        steps: [
          { num: '1', title: 'Click', body: '사용자 클릭이 발생했습니다.' },
          { num: '2', title: 'dispatchSetState', body: '`setCount` 함수가 호출됩니다.' },
          { num: '3', title: 'update queue', body: '업데이트가 큐에 저장됩니다.' },
          {
            num: '4',
            title: 'scheduleUpdateOnFiber',
            body: '루트 스케줄링이 시작됩니다.',
          },
          { num: '5', title: 'Render Phase', body: '컴포넌트 트리를 다시 계산합니다.' },
          { num: '6', title: 'Commit Phase', body: '변경 사항이 DOM에 반영됩니다.' },
        ],
      },
    },
    table: {
      eyebrow: '04 · 해석 비교',
      title: '같은 현상, 다른 해석',
      headers: {
        phenomenon: '현상',
        usage: '사용법 설명 (개발자 관점)',
        internal: '내부 구조 설명 (React 내부 관점)',
      },
      rows: [
        {
          phenomenon: '버튼 클릭',
          usage: '사용자가 `+1` 버튼을 클릭한다.',
          internal: 'Click 이벤트가 발생하고 React가 이를 감지한다.',
        },
        {
          phenomenon: 'setState 호출',
          usage: '`setCount(count + 1)`을 호출한다.',
          internal: '`dispatchSetState`가 실행되어 update를 생성한다.',
        },
        {
          phenomenon: '화면 갱신',
          usage: '`count` 값이 바뀌며 화면이 다시 그려진다.',
          internal: '스케줄링 → 렌더링 → 커밋 과정을 거쳐 DOM이 갱신된다.',
        },
      ],
    },
    sourceCode: {
      eyebrow: '05 · 소스 코드',
      title: '실제 React 코드에서 확인하기',
      cards: [
        {
          num: '1',
          title: 'dispatchSetState',
          description: '상태 업데이트의 시작점',
          code: dispatchCode,
          href: `${githubBase}/ReactFiberHooks.js`,
          linkLabel: 'ReactFiberHooks.js 읽기',
        },
        {
          num: '2',
          title: 'scheduleUpdateOnFiber',
          description: '스케줄링을 시작하고 루트 작업을 예약',
          code: scheduleCode,
          href: `${githubBase}/ReactFiberWorkLoop.js`,
          linkLabel: 'ReactFiberWorkLoop.js 읽기',
        },
      ],
    },
    takeaway: {
      eyebrow: '06 · 핵심 정리',
      title: '핵심 takeaway',
      lines: [
        '상태가 바뀌었다고 DOM이 바로 바뀌는 것이 아닙니다.',
        '먼저 업데이트를 기록하고, 렌더링을 계산하고, 마지막에 반영합니다.',
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '왜 React 19 코드를 기준으로 읽는가?',
      description: '최신 React의 구조와 실제 방향을 이해하는 것이 중요합니다.',
      cta: '다음 페이지로 이동',
      href: '/why-react-19',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 2/6',
      title: ['The same React code,', 'read as usage and', 'read as internals, are different.'],
      description:
        'On the surface it is a simple Counter component, but inside, several steps run from event handling all the way to commit.',
      stackLayers: [
        { id: 'event', label: 'Event', sub: 'onClick', tone: 'sky' },
        { id: 'updateQueue', label: 'Update Queue', sub: 'enqueueUpdate', tone: 'blue' },
        { id: 'scheduler', label: 'Scheduler', sub: 'ensureRootIsScheduled', tone: 'indigo' },
        { id: 'render', label: 'Render / Reconcile', sub: 'beginWork', tone: 'cyan' },
        { id: 'commit', label: 'Commit', sub: 'commitMutationEffects', tone: 'teal' },
        { id: 'dom', label: 'DOM', sub: 'browser paint', tone: 'emerald' },
      ],
    },
    perspectives: {
      eyebrow: '01 · PERSPECTIVES',
      title: 'Two Perspectives, Same Code',
      left: {
        title: 'Usage perspective (4 steps)',
        subtitle: 'The flow a developer writes in code',
        steps: [
          { num: '1', title: 'Declare state', body: 'Declare state with `useState`.' },
          { num: '2', title: 'Button click', body: 'The user clicks the `+1` button.' },
          {
            num: '3',
            title: 'Increment count',
            body: 'Call `setCount(count + 1)` to update the value.',
          },
          { num: '4', title: 'Screen refresh', body: 'The new `count` is reflected on screen.' },
        ],
      },
      right: {
        title: 'Internals perspective (7 steps)',
        subtitle: 'The flow that actually happens inside React',
        steps: [
          { num: '1', title: 'Event fires', body: 'A click event is dispatched.' },
          { num: '2', title: 'Handler runs', body: 'The `onClick` handler is invoked.' },
          {
            num: '3',
            title: 'Create update',
            body: '`dispatchSetState` builds an update object.',
          },
          {
            num: '4',
            title: 'Enqueue update',
            body: "The update is appended to the fiber's update queue.",
          },
          {
            num: '5',
            title: 'Root scheduling',
            body: '`scheduleUpdateOnFiber` kicks off root scheduling.',
          },
          { num: '6', title: 'Render', body: 'The reconciler computes the changes.' },
          {
            num: '7',
            title: 'Commit',
            body: 'Changes are committed to the DOM and the screen updates.',
          },
        ],
      },
    },
    flow: {
      eyebrow: '02 · INTERNAL FLOW',
      title: 'When you press the button, what happens inside?',
      steps: [
        {
          id: 'click',
          number: '1',
          title: 'Click',
          body: 'User click',
          iconName: 'cursor',
          tone: 'sky',
        },
        {
          id: 'dispatch',
          number: '2',
          title: 'dispatchSetState',
          body: '`setCount` call',
          iconName: 'fx',
          tone: 'blue',
        },
        {
          id: 'queue',
          number: '3',
          title: 'update queue',
          body: 'store the update',
          iconName: 'database',
          tone: 'indigo',
        },
        {
          id: 'schedule',
          number: '4',
          title: 'scheduleUpdateOnFiber',
          body: 'start scheduling',
          iconName: 'clockRefresh',
          tone: 'cyan',
        },
        {
          id: 'render',
          number: '5',
          title: 'Render Phase',
          body: 'compute changes',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'commit',
          number: '6',
          title: 'Commit Phase',
          body: 'apply to DOM',
          iconName: 'checkCircle',
          tone: 'emerald',
        },
      ],
    },
    demo: {
      eyebrow: '03 · LIVE DEMO',
      title: 'Try it yourself (imagined demo)',
      counter: {
        title: 'Counter Demo',
        button: '+1 click',
        hint: 'Click the button and the internal flow advances step by step on the right.',
      },
      progress: {
        title: 'Internal flow progress',
        autoPill: 'auto-advance',
        steps: [
          { num: '1', title: 'Click', body: 'A user click was detected.' },
          { num: '2', title: 'dispatchSetState', body: 'The `setCount` function is called.' },
          { num: '3', title: 'update queue', body: 'The update is stored in the queue.' },
          {
            num: '4',
            title: 'scheduleUpdateOnFiber',
            body: 'Root scheduling begins.',
          },
          { num: '5', title: 'Render Phase', body: 'The component tree is recomputed.' },
          { num: '6', title: 'Commit Phase', body: 'Changes are applied to the DOM.' },
        ],
      },
    },
    table: {
      eyebrow: '04 · INTERPRETATION',
      title: 'Same phenomenon, different interpretation',
      headers: {
        phenomenon: 'Phenomenon',
        usage: 'Usage interpretation (developer view)',
        internal: 'Internal interpretation (React internal view)',
      },
      rows: [
        {
          phenomenon: 'Button click',
          usage: 'The user clicks the `+1` button.',
          internal: 'A click event is dispatched and React picks it up.',
        },
        {
          phenomenon: 'setState call',
          usage: 'Call `setCount(count + 1)`.',
          internal: '`dispatchSetState` runs and creates an update.',
        },
        {
          phenomenon: 'Screen refresh',
          usage: '`count` changes and the screen is repainted.',
          internal: 'Scheduling → render → commit, then the DOM is updated.',
        },
      ],
    },
    sourceCode: {
      eyebrow: '05 · SOURCE CODE',
      title: 'See it in the real React source',
      cards: [
        {
          num: '1',
          title: 'dispatchSetState',
          description: 'Where state updates begin',
          code: dispatchCode,
          href: `${githubBase}/ReactFiberHooks.js`,
          linkLabel: 'Read ReactFiberHooks.js',
        },
        {
          num: '2',
          title: 'scheduleUpdateOnFiber',
          description: 'Starts scheduling and queues root work',
          code: scheduleCode,
          href: `${githubBase}/ReactFiberWorkLoop.js`,
          linkLabel: 'Read ReactFiberWorkLoop.js',
        },
      ],
    },
    takeaway: {
      eyebrow: '06 · KEY TAKEAWAY',
      title: 'Core takeaway',
      lines: [
        "Changing state doesn't change the DOM instantly.",
        'React records an update, computes the render, then applies it last.',
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Why read against React 19?',
      description: "Understanding modern React's structure and direction is what matters.",
      cta: 'Go to the next page',
      href: '/why-react-19',
    },
  },
};
