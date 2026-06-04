import type { Locale } from '@it-tech-blog/preferences';

export type StairTone = 'sky' | 'mint' | 'cyan' | 'blue' | 'indigo' | 'violet';

export type StairStep = {
  num: string;
  label: string;
  tone: StairTone;
  flag?: boolean;
};

export type SupportPoint = {
  id: 'stack' | 'role' | 'order';
  icon: 'layers' | 'target' | 'route';
  title: string[];
  description: string;
};

export type SequenceStep = {
  num: string;
  title: string;
  description: string;
  tone: 'blue' | 'teal' | 'mint' | 'violet' | 'indigo';
};

export type CoreFileRow = {
  num: string;
  title: string;
  files: string[];
  reads: string[];
  goal: string;
  tone: 'blue' | 'teal' | 'mint' | 'violet' | 'indigo';
};

export type DeferredCard = {
  id: 'compiler' | 'rsc' | 'devtools' | 'renderer' | 'build';
  icon: 'sparkles' | 'server' | 'wrench' | 'puzzle' | 'gear';
  title: string[];
  description: string[];
  tone: 'rose' | 'amber' | 'sky' | 'violet' | 'slate';
};

export type DifficultyLevel = {
  id: 'beginner' | 'intermediate' | 'mid' | 'advanced' | 'expert';
  index: string;
  title: string;
  topics: string[];
  tone: 'mint' | 'teal' | 'cyan' | 'blue' | 'indigo';
};

export type FirstFileCard = {
  num: string;
  file: string;
  description: string[];
  tags: string[];
  href: string;
};

export type PathCard = {
  id: 'render' | 'hooks' | 'scheduler';
  icon: 'flow' | 'hook' | 'gauge';
  title: string;
  description: string[];
  sequence: string[];
  tone: 'teal' | 'violet' | 'coral';
};

export type ReadOrderContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    points: SupportPoint[];
    stair: {
      steps: StairStep[];
      easyLabel: string;
      hardLabel: string;
      stairTitle: string;
    };
  };
  sequence: {
    eyebrow: string;
    title: string;
    steps: SequenceStep[];
  };
  coreFiles: {
    eyebrow: string;
    title: string;
    columnLabels: { file: string; read: string; goal: string };
    rows: CoreFileRow[];
  };
  deferred: {
    eyebrow: string;
    title: string;
    cards: DeferredCard[];
    infoStrip: string;
  };
  difficulty: {
    eyebrow: string;
    title: string;
    levels: DifficultyLevel[];
  };
  firstThree: {
    eyebrow: string;
    title: string;
    cards: FirstFileCard[];
    cta: string;
  };
  paths: {
    eyebrow: string;
    title: string;
    supporting: string[];
    cards: PathCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const githubBase = 'https://github.com/facebook/react/blob/main/packages';

export const readOrderContent: Record<Locale, ReadOrderContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 6/8단계',
      title: ['React 소스코드에도', '읽는 순서가 있습니다.'],
      description: [
        'Element를 모른 채 Scheduler부터 읽으면 막히고,',
        'Fiber를 모른 채 Hooks를 읽으면 구조가 보이지 않습니다.',
      ],
      points: [
        {
          id: 'stack',
          icon: 'layers',
          title: ['개념이 쌓여야', '다음 단계가 보입니다.'],
          description: '하위 추상화 → 상위 추상화 순서',
        },
        {
          id: 'role',
          icon: 'target',
          title: ['역할 단위로 읽으면', '이해 방향이 선명해집니다.'],
          description: '책임과 경계 중심의 독해',
        },
        {
          id: 'order',
          icon: 'route',
          title: ['순서를 지키면', '코드가 덜 어렵게 시작됩니다.'],
          description: '초반 진입 마찰 최소화',
        },
      ],
      stair: {
        stairTitle: 'learning roadmap',
        easyLabel: '쉬움',
        hardLabel: '어려움',
        steps: [
          { num: '1', label: 'Element', tone: 'sky' },
          { num: '2', label: 'Fiber', tone: 'sky' },
          { num: '3', label: 'Reconciliation', tone: 'mint' },
          { num: '4', label: 'Render', tone: 'cyan' },
          { num: '5', label: 'Work Loop', tone: 'blue' },
          { num: '6', label: 'Commit', tone: 'blue' },
          { num: '7', label: 'Hooks', tone: 'indigo' },
          { num: '8', label: 'Scheduler / Lanes', tone: 'violet', flag: true },
        ],
      },
    },
    sequence: {
      eyebrow: '01 · order',
      title: '추천 학습 순서 8단계',
      steps: [
        {
          num: '1',
          title: 'React Element',
          description: 'JSX가 만든 객체 구조 이해',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber',
          description: 'React의 작업 단위와 연결 리스트 구조 이해',
          tone: 'blue',
        },
        {
          num: '3',
          title: 'Child Reconciliation',
          description: '자식 비교 알고리즘과 Diff 이해',
          tone: 'teal',
        },
        {
          num: '4',
          title: 'Render Phase',
          description: '변경 사항을 계산하는 단계 이해',
          tone: 'teal',
        },
        {
          num: '5',
          title: 'Work Loop',
          description: '작업을 순회하며 처리하는 루프 이해',
          tone: 'mint',
        },
        {
          num: '6',
          title: 'Commit Phase',
          description: '계산된 변경을 실제로 반영하는 단계 이해',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Hooks',
          description: 'Hook 업데이트와 상태 관리 구조 이해',
          tone: 'violet',
        },
        {
          num: '8',
          title: 'Scheduler / Lanes',
          description: '작업 우선순위와 스케줄링 시스템 이해',
          tone: 'indigo',
        },
      ],
    },
    coreFiles: {
      eyebrow: '02 · core files',
      title: '단계별 핵심 파일',
      columnLabels: { file: '파일', read: '볼 것', goal: '학습 목표' },
      rows: [
        {
          num: '1',
          title: 'React Element',
          files: ['ReactJSXElement.js'],
          reads: ['ReactElement', 'createElement'],
          goal: 'JSX가 어떤 객체를 만드는지 이해',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber',
          files: ['ReactFiber.js'],
          reads: ['FiberNode', 'createFiberFromElement'],
          goal: 'Element와 Fiber의 차이 이해',
          tone: 'blue',
        },
        {
          num: '3',
          title: 'Child Reconciliation',
          files: ['ReactChildFiber.js'],
          reads: ['reconcileChildFibers', 'placeChild'],
          goal: '변경을 감지하고 최소 작업을 찾는지 이해',
          tone: 'teal',
        },
        {
          num: '4',
          title: 'Render Phase',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          reads: ['beginWork', 'completeWork'],
          goal: '무엇을 바꿀지 계산하는 단계 이해',
          tone: 'teal',
        },
        {
          num: '5',
          title: 'Work Loop',
          files: ['ReactFiberWorkLoop.js'],
          reads: ['performUnitOfWork', 'workLoopSync'],
          goal: '작업을 반복하며 처리하는 루프 구조 이해',
          tone: 'mint',
        },
        {
          num: '6',
          title: 'Commit Phase',
          files: ['ReactFiberCommitWork.js'],
          reads: ['commitRoot', 'commitMutationEffects'],
          goal: '계산된 결과를 실제 DOM에 반영하는 과정 이해',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Hooks',
          files: ['ReactFiberHooks.js'],
          reads: ['dispatchSetState', 'mountState'],
          goal: 'Hook 상태 업데이트와 큐 구조 이해',
          tone: 'violet',
        },
        {
          num: '8',
          title: 'Scheduler / Lanes',
          files: ['scheduler/', 'ReactFiberLane.js'],
          reads: ['scheduleUpdateOnFiber', 'lanes', 'priority'],
          goal: '우선순위 기반 스케줄링 시스템 이해',
          tone: 'indigo',
        },
      ],
    },
    deferred: {
      eyebrow: '03 · defer',
      title: '처음부터 깊게 보지 않아도 되는 것',
      cards: [
        {
          id: 'compiler',
          icon: 'sparkles',
          tone: 'amber',
          title: ['React Compiler'],
          description: ['새로운 최적화 모델은', '고급 주제입니다.'],
        },
        {
          id: 'rsc',
          icon: 'server',
          tone: 'sky',
          title: ['Server Components', '세부 구현'],
          description: ['네트워크 경계, Flight 프로토콜 등', '세부 구현은 나중에 봐도 됩니다.'],
        },
        {
          id: 'devtools',
          icon: 'wrench',
          tone: 'violet',
          title: ['DevTools 내부'],
          description: ['디버깅 도구는', '기본 흐름 이후에 읽어도 됩니다.'],
        },
        {
          id: 'renderer',
          icon: 'puzzle',
          tone: 'rose',
          title: ['렌더러별', '특수 구현'],
          description: ['React DOM 외 렌더러별 차이는', '심화 영역입니다.'],
        },
        {
          id: 'build',
          icon: 'gear',
          tone: 'slate',
          title: ['빌드 스크립트'],
          description: ['빌드/번들 설정은', '핵심 독해 순서가 아닙니다.'],
        },
      ],
      infoStrip: '중요하지 않다는 뜻이 아니라, 지금 단계에서 우선순위가 낮다는 뜻입니다.',
    },
    difficulty: {
      eyebrow: '04 · difficulty',
      title: '난이도 지도',
      levels: [
        {
          id: 'beginner',
          index: '01',
          title: '입문',
          topics: ['React Element', 'JSX 구조'],
          tone: 'mint',
        },
        {
          id: 'intermediate',
          index: '02',
          title: '초중급',
          topics: ['Fiber', 'Reconciliation', 'Render / Commit 개요'],
          tone: 'teal',
        },
        {
          id: 'mid',
          index: '03',
          title: '중급',
          topics: ['Work Loop', 'Update Queue', 'Commit 세부 흐름'],
          tone: 'cyan',
        },
        {
          id: 'advanced',
          index: '04',
          title: '고급',
          topics: ['Hooks 내부 구조', 'Effect 처리', 'Scheduler 기본'],
          tone: 'blue',
        },
        {
          id: 'expert',
          index: '05',
          title: '심화',
          topics: ['Scheduler / Lanes', 'Suspense', 'Server Components'],
          tone: 'indigo',
        },
      ],
    },
    firstThree: {
      eyebrow: '05 · first three',
      title: '처음에는 이 3개만 보세요.',
      cta: 'GitHub에서 보기',
      cards: [
        {
          num: '1',
          file: 'ReactJSXElement.js',
          description: ['JSX가 실제로 어떤 객체를 만드는지', '가장 먼저 확인합니다.'],
          tags: ['ReactElement', 'createElement'],
          href: `${githubBase}/react/src/jsx/ReactJSXElement.js`,
        },
        {
          num: '2',
          file: 'ReactFiber.js',
          description: ['React의 작업 단위(Fiber)가', '어떻게 생성되고 연결되는지 이해합니다.'],
          tags: ['FiberNode', 'createFiberFromElement'],
          href: `${githubBase}/react-reconciler/src/ReactFiber.js`,
        },
        {
          num: '3',
          file: 'ReactFiberWorkLoop.js',
          description: [
            '업데이트가 들어왔을 때 화면이 반영되기까지',
            '어떤 루프를 도는지 읽습니다.',
          ],
          tags: ['performUnitOfWork', 'workLoopSync'],
          href: `${githubBase}/react-reconciler/src/ReactFiberWorkLoop.js`,
        },
      ],
    },
    paths: {
      eyebrow: '06 · path',
      title: '나에게 맞는 학습 경로 선택',
      supporting: ['관심사에 따라 시작점은 다르게 잡아도,', '결국 흐름은 연결됩니다.'],
      cards: [
        {
          id: 'render',
          icon: 'flow',
          tone: 'teal',
          title: '렌더링 흐름부터 알고 싶다',
          description: ['컴포넌트가 어떻게 화면까지 이어지는지', '순서대로 이해하고 싶다면'],
          sequence: ['Element', 'Fiber', 'Reconciliation', 'Render', 'Work Loop', 'Commit'],
        },
        {
          id: 'hooks',
          icon: 'hook',
          tone: 'violet',
          title: 'Hooks 내부가 궁금하다',
          description: ['Hook이 어떻게 상태를 저장하고', '업데이트를 연결하는지 보고 싶다면'],
          sequence: ['Element', 'Fiber', 'Hooks', 'Update Queue', 'Work Loop', 'Commit'],
        },
        {
          id: 'scheduler',
          icon: 'gauge',
          tone: 'coral',
          title: '성능 / Scheduler가 궁금하다',
          description: ['우선순위, 지연, 동시성의 원리를', '이해하고 싶다면'],
          sequence: ['Element', 'Fiber', 'Work Loop', 'Scheduler / Lanes', 'Suspense'],
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '다음: React 내부 흐름을 읽는 기본 관점',
      description: '코드를 읽기 전에, 전체 구조와 용어를 먼저 정리합니다.',
      cta: '다음 페이지로 이동',
      href: '/reading-perspective',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 6/8',
      title: ['Even React source has', 'a reading order.'],
      description: [
        'Start with Scheduler without knowing Element and you stall;',
        'read Hooks without Fiber and the structure stays invisible.',
      ],
      points: [
        {
          id: 'stack',
          icon: 'layers',
          title: ['Concepts must stack', 'before the next step makes sense.'],
          description: 'Low-level abstraction first',
        },
        {
          id: 'role',
          icon: 'target',
          title: ['Read by role', 'and the direction becomes clear.'],
          description: 'Responsibility and boundary first',
        },
        {
          id: 'order',
          icon: 'route',
          title: ['Follow the order', 'and the code gets easier to start.'],
          description: 'Minimize entry-point friction',
        },
      ],
      stair: {
        stairTitle: 'learning roadmap',
        easyLabel: 'easy',
        hardLabel: 'hard',
        steps: [
          { num: '1', label: 'Element', tone: 'sky' },
          { num: '2', label: 'Fiber', tone: 'sky' },
          { num: '3', label: 'Reconciliation', tone: 'mint' },
          { num: '4', label: 'Render', tone: 'cyan' },
          { num: '5', label: 'Work Loop', tone: 'blue' },
          { num: '6', label: 'Commit', tone: 'blue' },
          { num: '7', label: 'Hooks', tone: 'indigo' },
          { num: '8', label: 'Scheduler / Lanes', tone: 'violet', flag: true },
        ],
      },
    },
    sequence: {
      eyebrow: '01 · order',
      title: 'Recommended 8-step reading order',
      steps: [
        {
          num: '1',
          title: 'React Element',
          description: 'Understand the object JSX produces',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber',
          description: "React's work unit and linked-list structure",
          tone: 'blue',
        },
        {
          num: '3',
          title: 'Child Reconciliation',
          description: 'Diff and child reconciliation algorithm',
          tone: 'teal',
        },
        {
          num: '4',
          title: 'Render Phase',
          description: 'The phase that computes what changed',
          tone: 'teal',
        },
        {
          num: '5',
          title: 'Work Loop',
          description: 'The loop that walks through work',
          tone: 'mint',
        },
        {
          num: '6',
          title: 'Commit Phase',
          description: 'Apply the computed changes to the DOM',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Hooks',
          description: 'Hook updates and state-management internals',
          tone: 'violet',
        },
        {
          num: '8',
          title: 'Scheduler / Lanes',
          description: 'Priority and scheduling system',
          tone: 'indigo',
        },
      ],
    },
    coreFiles: {
      eyebrow: '02 · core files',
      title: 'Core files per stage',
      columnLabels: { file: 'File', read: 'Read', goal: 'Goal' },
      rows: [
        {
          num: '1',
          title: 'React Element',
          files: ['ReactJSXElement.js'],
          reads: ['ReactElement', 'createElement'],
          goal: 'Understand the object JSX builds',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber',
          files: ['ReactFiber.js'],
          reads: ['FiberNode', 'createFiberFromElement'],
          goal: 'Element vs Fiber',
          tone: 'blue',
        },
        {
          num: '3',
          title: 'Child Reconciliation',
          files: ['ReactChildFiber.js'],
          reads: ['reconcileChildFibers', 'placeChild'],
          goal: 'How React detects diffs and minimizes work',
          tone: 'teal',
        },
        {
          num: '4',
          title: 'Render Phase',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          reads: ['beginWork', 'completeWork'],
          goal: 'The phase that decides what changes',
          tone: 'teal',
        },
        {
          num: '5',
          title: 'Work Loop',
          files: ['ReactFiberWorkLoop.js'],
          reads: ['performUnitOfWork', 'workLoopSync'],
          goal: 'The repeating work-processing loop',
          tone: 'mint',
        },
        {
          num: '6',
          title: 'Commit Phase',
          files: ['ReactFiberCommitWork.js'],
          reads: ['commitRoot', 'commitMutationEffects'],
          goal: 'Apply computed results to the real DOM',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Hooks',
          files: ['ReactFiberHooks.js'],
          reads: ['dispatchSetState', 'mountState'],
          goal: 'Hook state updates and the queue structure',
          tone: 'violet',
        },
        {
          num: '8',
          title: 'Scheduler / Lanes',
          files: ['scheduler/', 'ReactFiberLane.js'],
          reads: ['scheduleUpdateOnFiber', 'lanes', 'priority'],
          goal: 'Priority-based scheduling system',
          tone: 'indigo',
        },
      ],
    },
    deferred: {
      eyebrow: '03 · defer',
      title: "Topics you don't have to read deeply at first",
      cards: [
        {
          id: 'compiler',
          icon: 'sparkles',
          tone: 'amber',
          title: ['React Compiler'],
          description: ['A new optimization model —', 'an advanced topic.'],
        },
        {
          id: 'rsc',
          icon: 'server',
          tone: 'sky',
          title: ['Server Components', 'internals'],
          description: ['Network boundaries, Flight protocol, etc.', 'can wait.'],
        },
        {
          id: 'devtools',
          icon: 'wrench',
          tone: 'violet',
          title: ['DevTools internals'],
          description: ['Debugging tools', 'can come after the core flow.'],
        },
        {
          id: 'renderer',
          icon: 'puzzle',
          tone: 'rose',
          title: ['Renderer-specific', 'implementations'],
          description: ['Differences beyond React DOM', 'are an advanced area.'],
        },
        {
          id: 'build',
          icon: 'gear',
          tone: 'slate',
          title: ['Build scripts'],
          description: ['Build / bundle config', 'is not part of the core path.'],
        },
      ],
      infoStrip: 'Not unimportant — just lower priority for now.',
    },
    difficulty: {
      eyebrow: '04 · difficulty',
      title: 'Difficulty map',
      levels: [
        {
          id: 'beginner',
          index: '01',
          title: 'Beginner',
          topics: ['React Element', 'JSX structure'],
          tone: 'mint',
        },
        {
          id: 'intermediate',
          index: '02',
          title: 'Intermediate-',
          topics: ['Fiber', 'Reconciliation', 'Render / Commit overview'],
          tone: 'teal',
        },
        {
          id: 'mid',
          index: '03',
          title: 'Intermediate',
          topics: ['Work Loop', 'Update Queue', 'Commit details'],
          tone: 'cyan',
        },
        {
          id: 'advanced',
          index: '04',
          title: 'Advanced',
          topics: ['Hooks internals', 'Effects', 'Scheduler basics'],
          tone: 'blue',
        },
        {
          id: 'expert',
          index: '05',
          title: 'Expert',
          topics: ['Scheduler / Lanes', 'Suspense', 'Server Components'],
          tone: 'indigo',
        },
      ],
    },
    firstThree: {
      eyebrow: '05 · first three',
      title: 'Just read these 3 first.',
      cta: 'View on GitHub',
      cards: [
        {
          num: '1',
          file: 'ReactJSXElement.js',
          description: ['First, see exactly what object', 'JSX produces.'],
          tags: ['ReactElement', 'createElement'],
          href: `${githubBase}/react/src/jsx/ReactJSXElement.js`,
        },
        {
          num: '2',
          file: 'ReactFiber.js',
          description: [
            "Understand React's work unit (Fiber)",
            'and how it gets created and linked.',
          ],
          tags: ['FiberNode', 'createFiberFromElement'],
          href: `${githubBase}/react-reconciler/src/ReactFiber.js`,
        },
        {
          num: '3',
          file: 'ReactFiberWorkLoop.js',
          description: [
            'Read the loop that runs when',
            'an update arrives until the screen reflects it.',
          ],
          tags: ['performUnitOfWork', 'workLoopSync'],
          href: `${githubBase}/react-reconciler/src/ReactFiberWorkLoop.js`,
        },
      ],
    },
    paths: {
      eyebrow: '06 · path',
      title: 'Pick a path that fits you',
      supporting: ['Your starting point varies by interest,', 'but the flow eventually connects.'],
      cards: [
        {
          id: 'render',
          icon: 'flow',
          tone: 'teal',
          title: 'I want the rendering flow',
          description: ['Follow how a component reaches the screen', 'step by step.'],
          sequence: ['Element', 'Fiber', 'Reconciliation', 'Render', 'Work Loop', 'Commit'],
        },
        {
          id: 'hooks',
          icon: 'hook',
          tone: 'violet',
          title: 'I am curious about Hooks',
          description: ['Read how Hooks store state', 'and connect updates.'],
          sequence: ['Element', 'Fiber', 'Hooks', 'Update Queue', 'Work Loop', 'Commit'],
        },
        {
          id: 'scheduler',
          icon: 'gauge',
          tone: 'coral',
          title: 'I care about perf / Scheduler',
          description: ['Understand priority, deferral,', 'and concurrency from inside.'],
          sequence: ['Element', 'Fiber', 'Work Loop', 'Scheduler / Lanes', 'Suspense'],
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Next: A mental model for reading React internals',
      description: 'Before the code, line up the overall structure and vocabulary.',
      cta: 'Go to the next page',
      href: '/reading-perspective',
    },
  },
};
