import type { Locale } from '@it-tech-blog/preferences';

export type KeywordPill = {
  id: 'source' | 'tests' | 'commits' | 'issues';
  label: string;
  tone: 'blue' | 'green' | 'lavender' | 'teal';
};

export type PerspectiveCard = {
  id: 'docs' | 'code' | 'tests' | 'pr';
  icon: 'doc' | 'code' | 'flask' | 'chat';
  tone: 'blue' | 'teal' | 'lavender' | 'coral';
  title: string;
  subtitle: string;
  description: string;
};

export type ReadingPriorityRow = {
  id: 'packages' | 'tests' | 'issues' | 'releases';
  index: string;
  icon: 'folder' | 'flask' | 'chat' | 'tag';
  tone: 'blue' | 'teal' | 'lavender' | 'coral';
  title: string;
  description: string;
};

export type RepoTreeNode = {
  name: string;
  kind: 'folder' | 'file';
  children?: RepoTreeNode[];
  active?: boolean;
  open?: boolean;
};

export type DetailPanel = {
  folder: string;
  lead: string;
  supporting: string;
  tags: string[];
  bullets: string[];
  callout: string;
};

export type ChainCard = {
  id: 'docs' | 'code' | 'tests';
  stepNum: string;
  stepLabel: string;
  title: string;
  code: string;
  description: string;
  cta: string;
  href: string;
  tone: 'blue' | 'teal' | 'lavender';
};

export type RoutineStep = {
  num: string;
  icon: 'doc' | 'search' | 'cursor' | 'flask' | 'tag';
  tone: 'blue' | 'teal' | 'emerald' | 'mint' | 'lavender';
  title: string;
  description: string;
};

export type ResourceCard = {
  id: 'packages' | 'reconciler' | 'releases' | 'hooks';
  icon: 'folder' | 'book' | 'tag' | 'code';
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type WhyOpenSourceContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string;
    pills: KeywordPill[];
    diagram: {
      centerLabel: string;
      centerSub: string;
      codeMock: string;
      commitBranch: string;
      commits: { sha: string; message: string }[];
      packagesMock: string;
      statusLabel: string;
    };
  };
  perspectives: {
    eyebrow: string;
    title: string;
    cards: PerspectiveCard[];
  };
  readingPriorities: {
    eyebrow: string;
    title: string;
    rows: ReadingPriorityRow[];
  };
  repoExplorer: {
    eyebrow: string;
    title: string;
    repoLabel: string;
    tree: RepoTreeNode[];
    detail: DetailPanel;
  };
  chain: {
    eyebrow: string;
    title: string;
    cards: ChainCard[];
  };
  routine: {
    eyebrow: string;
    title: string;
    steps: RoutineStep[];
  };
  quickStart: {
    eyebrow: string;
    title: string;
    cards: ResourceCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    bannerEyebrow: string;
    nextTitle: string;
    description: string;
    cta: string;
    href: string;
  };
};

const docsCode = `const [state, setState] = useState(initialState);`;

const fiberHooksCode = `function useState(initialState) {
  const hook = mountState(initialState);
  return [hook.memoizedState, hook.queue.dispatch];
}`;

const hooksTestCode = `it('updates state and re-renders', () => {
  const result = renderHook(() => useState(0));
  act(() => result.current[1](1));
  expect(result.current[0]).toBe(1);
});`;

const repoTreeKo: RepoTreeNode[] = [
  { name: '.github', kind: 'folder' },
  {
    name: 'packages',
    kind: 'folder',
    open: true,
    children: [
      { name: 'react', kind: 'folder' },
      { name: 'react-dom', kind: 'folder' },
      { name: 'react-reconciler', kind: 'folder', active: true },
      { name: 'scheduler', kind: 'folder' },
      { name: 'shared', kind: 'folder' },
    ],
  },
  { name: 'scripts', kind: 'folder' },
  { name: 'tests', kind: 'folder' },
  { name: 'docs', kind: 'folder' },
  { name: 'LICENSE', kind: 'file' },
];

export const whyOpenSourceContent: Record<Locale, WhyOpenSourceContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 4/8단계',
      title: ['공식 문서는 사용법을 알려주고,', 'GitHub는 설계 의도를 보여줍니다.'],
      description: 'React를 깊게 이해하려면 문서, 소스코드, 테스트, 변경 이력을 함께 봐야 합니다.',
      pills: [
        { id: 'source', label: 'Source', tone: 'blue' },
        { id: 'tests', label: 'Tests', tone: 'green' },
        { id: 'commits', label: 'Commits', tone: 'lavender' },
        { id: 'issues', label: 'Issues / PRs', tone: 'teal' },
      ],
      diagram: {
        centerLabel: 'GitHub',
        centerSub: 'facebook/react',
        codeMock: `function render() {
  prepareWork();
  reconcileChildren();
  commitChanges();
}`,
        commitBranch: 'main',
        commits: [
          { sha: 'a1b2c3d', message: 'feat: improve hydration' },
          { sha: 'd4e5f6g', message: 'fix: useful edge case' },
        ],
        packagesMock: `packages/
├─ react/
├─ react-dom/
├─ react-reconciler/
└─ scheduler/`,
        statusLabel: 'checks passed',
      },
    },
    perspectives: {
      eyebrow: '01 · perspectives',
      title: 'GitHub가 제공하는 4가지 관점',
      cards: [
        {
          id: 'docs',
          icon: 'doc',
          tone: 'blue',
          title: '공식 문서',
          subtitle: '무엇을 어떻게 쓰는가',
          description: 'API 레퍼런스와 가이드를 통해 사용 방법과 규칙을 이해합니다.',
        },
        {
          id: 'code',
          icon: 'code',
          tone: 'teal',
          title: '소스코드',
          subtitle: '실제로 어떻게 동작하는가',
          description: '구현 코드를 통해 내부 구조와 설계 의도를 파악합니다.',
        },
        {
          id: 'tests',
          icon: 'flask',
          tone: 'lavender',
          title: '테스트',
          subtitle: '어떤 동작을 보장하는가',
          description: '테스트 코드를 통해 보장해야 할 동작과 엣지 케이스를 확인합니다.',
        },
        {
          id: 'pr',
          icon: 'chat',
          tone: 'coral',
          title: 'PR / Issue',
          subtitle: '왜 바뀌었는가',
          description: '변경의 배경, 논의 과정, 트레이드오프를 이해합니다.',
        },
      ],
    },
    readingPriorities: {
      eyebrow: '02 · reading list',
      title: 'React GitHub에서 읽어야 할 4가지',
      rows: [
        {
          id: 'packages',
          index: '1',
          icon: 'folder',
          tone: 'blue',
          title: 'packages',
          description:
            'React의 모듈 구조를 이해하는 시작점입니다. 핵심 패키지와 각 패키지의 역할을 파악합니다.',
        },
        {
          id: 'tests',
          index: '2',
          icon: 'flask',
          tone: 'teal',
          title: 'tests',
          description:
            '구현 의도를 가장 정확히 보여주는 자료입니다. 어떤 동작이 보장되어야 하는지 확인합니다.',
        },
        {
          id: 'issues',
          index: '3',
          icon: 'chat',
          tone: 'lavender',
          title: 'issues',
          description:
            '버그, 제안, 질문을 통해 설계 결정의 배경을 이해합니다. 실제 사용자와 문제의 맥락을 함께 볼 수 있습니다.',
        },
        {
          id: 'releases',
          index: '4',
          icon: 'tag',
          tone: 'coral',
          title: 'releases',
          description:
            '버전별 변경 사항과 하이라이트를 통해 큰 흐름을 파악합니다. 새로운 기능이 왜 추가되었는지 이해합니다.',
        },
      ],
    },
    repoExplorer: {
      eyebrow: '03 · repo',
      title: '저장소 구조 훑어보기 (예: facebook/react)',
      repoLabel: 'facebook / react',
      tree: repoTreeKo,
      detail: {
        folder: 'react-reconciler',
        lead: 'React 렌더링의 핵심 엔진(Fiber)을 포함합니다.',
        supporting: 'ReactDOM, React Native 등 다양한 renderer가 이 패키지를 사용합니다.',
        tags: ['Fiber', 'Reconciler', 'Renderer', 'Scheduling', 'Priority'],
        bullets: [
          'Fiber 트리 생성 및 관리',
          '업데이트 스케줄링 및 우선순위 처리',
          'Reconciliation 알고리즘 구현',
          '렌더링 단계(Render / Commit) 조율',
        ],
        callout: '대부분의 렌더링 로직과 우선순위, 작업 루프가 이곳에 있습니다.',
      },
    },
    chain: {
      eyebrow: '04 · chain',
      title: 'API → 구현 → 테스트로 이어서 읽기 (예: useState)',
      cards: [
        {
          id: 'docs',
          stepNum: '1',
          stepLabel: '공식 문서',
          title: 'useState',
          code: docsCode,
          description:
            '상태 값을 선언하고 업데이트 함수를 받습니다. 컴포넌트가 다시 렌더링되도록 합니다.',
          cta: '문서에서 보기',
          href: 'https://react.dev/reference/react/useState',
          tone: 'blue',
        },
        {
          id: 'code',
          stepNum: '2',
          stepLabel: '구현 (소스코드)',
          title: 'ReactFiberHooks.js',
          code: fiberHooksCode,
          description: 'Hook 객체를 생성하고, 업데이트 큐와 dispatch 함수를 연결합니다.',
          cta: '코드에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
          tone: 'teal',
        },
        {
          id: 'tests',
          stepNum: '3',
          stepLabel: '테스트',
          title: 'ReactHooks-test.js',
          code: hooksTestCode,
          description: '상태 업데이트 시 재렌더링과 값 변경이 보장됨을 테스트로 확인합니다.',
          cta: '테스트에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/__tests__/ReactHooks-test.internal.js',
          tone: 'lavender',
        },
      ],
    },
    routine: {
      eyebrow: '05 · routine',
      title: 'GitHub 기반 학습 루틴',
      steps: [
        {
          num: '1',
          icon: 'doc',
          tone: 'blue',
          title: '공식 문서 읽기',
          description: 'API와 사용법을 먼저 이해합니다.',
        },
        {
          num: '2',
          icon: 'search',
          tone: 'teal',
          title: '구현 파일 찾기',
          description: '문서의 API가 구현된 위치를 찾습니다.',
        },
        {
          num: '3',
          icon: 'cursor',
          tone: 'emerald',
          title: '진입 함수 보기',
          description: '진입점 함수부터 내부 흐름을 따라갑니다.',
        },
        {
          num: '4',
          icon: 'flask',
          tone: 'mint',
          title: '테스트 확인',
          description: '테스트를 통해 보장 조건을 확인합니다.',
        },
        {
          num: '5',
          icon: 'tag',
          tone: 'lavender',
          title: '릴리즈 / PR로 변경 이유 보기',
          description: '왜 바뀌었는지 맥락을 이해합니다.',
        },
      ],
    },
    quickStart: {
      eyebrow: '06 · quick start',
      title: '바로 체험해보기',
      cards: [
        {
          id: 'packages',
          icon: 'folder',
          title: 'React packages 열기',
          description: '핵심 패키지 구조를 살펴보고 역할을 빠르게 파악해보세요.',
          cta: 'GitHub에서 열기',
          href: 'https://github.com/facebook/react/tree/main/packages',
        },
        {
          id: 'reconciler',
          icon: 'book',
          title: 'react-reconciler README 보기',
          description: 'Fiber와 렌더링 엔진에 대해 공식 설명을 확인하세요.',
          cta: 'README 보기',
          href: 'https://github.com/facebook/react/tree/main/packages/react-reconciler',
        },
        {
          id: 'releases',
          icon: 'tag',
          title: 'React Releases 보기',
          description: '버전별 주요 변경 사항과 하이라이트를 확인하세요.',
          cta: 'Releases 보기',
          href: 'https://github.com/facebook/react/releases',
        },
        {
          id: 'hooks',
          icon: 'code',
          title: 'Hooks 관련 코드 보기',
          description: 'ReactFiberHooks.js에서 Hook 구현을 직접 읽어보세요.',
          cta: '코드로 이동',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
        },
      ],
    },
    nextStep: {
      eyebrow: '07 · next step',
      title: '다음 단계로 이동하기',
      bannerEyebrow: '다음 학습으로 이어집니다',
      nextTitle: '다음: 모든 파일을 읽지 않아도 되는 이유',
      description: '효율적으로 핵심을 파악하는 방법과 우선순위를 배웁니다.',
      cta: '다음 페이지로 이동',
      href: '/not-all-files',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 4/8',
      title: ['The docs teach how to use,', 'GitHub shows why it was designed that way.'],
      description:
        'To really understand React, read docs, source code, tests, and change history together.',
      pills: [
        { id: 'source', label: 'Source', tone: 'blue' },
        { id: 'tests', label: 'Tests', tone: 'green' },
        { id: 'commits', label: 'Commits', tone: 'lavender' },
        { id: 'issues', label: 'Issues / PRs', tone: 'teal' },
      ],
      diagram: {
        centerLabel: 'GitHub',
        centerSub: 'facebook/react',
        codeMock: `function render() {
  prepareWork();
  reconcileChildren();
  commitChanges();
}`,
        commitBranch: 'main',
        commits: [
          { sha: 'a1b2c3d', message: 'feat: improve hydration' },
          { sha: 'd4e5f6g', message: 'fix: useful edge case' },
        ],
        packagesMock: `packages/
├─ react/
├─ react-dom/
├─ react-reconciler/
└─ scheduler/`,
        statusLabel: 'checks passed',
      },
    },
    perspectives: {
      eyebrow: '01 · perspectives',
      title: 'Four perspectives GitHub offers',
      cards: [
        {
          id: 'docs',
          icon: 'doc',
          tone: 'blue',
          title: 'Official docs',
          subtitle: 'What and how to use it',
          description: 'API references and guides explain usage and rules.',
        },
        {
          id: 'code',
          icon: 'code',
          tone: 'teal',
          title: 'Source code',
          subtitle: 'How it really works',
          description: 'Implementation code reveals internal structure and design intent.',
        },
        {
          id: 'tests',
          icon: 'flask',
          tone: 'lavender',
          title: 'Tests',
          subtitle: 'What behavior is guaranteed',
          description: 'Test code documents required behavior and edge cases.',
        },
        {
          id: 'pr',
          icon: 'chat',
          tone: 'coral',
          title: 'PRs / Issues',
          subtitle: 'Why it changed',
          description: 'Understand the background, discussion, and tradeoffs behind a change.',
        },
      ],
    },
    readingPriorities: {
      eyebrow: '02 · reading list',
      title: 'Four things to read in React GitHub',
      rows: [
        {
          id: 'packages',
          index: '1',
          icon: 'folder',
          tone: 'blue',
          title: 'packages',
          description:
            "The starting point for React's module structure. Read what each core package is responsible for.",
        },
        {
          id: 'tests',
          index: '2',
          icon: 'flask',
          tone: 'teal',
          title: 'tests',
          description: 'The most precise expression of intent. Read what behavior must hold.',
        },
        {
          id: 'issues',
          index: '3',
          icon: 'chat',
          tone: 'lavender',
          title: 'issues',
          description:
            'Bugs, proposals, and questions show the reasoning behind design decisions, with real user context.',
        },
        {
          id: 'releases',
          index: '4',
          icon: 'tag',
          tone: 'coral',
          title: 'releases',
          description:
            'Per-version changes and highlights show the overall trajectory and why features were added.',
        },
      ],
    },
    repoExplorer: {
      eyebrow: '03 · repo',
      title: 'Skim the repository structure (e.g. facebook/react)',
      repoLabel: 'facebook / react',
      tree: repoTreeKo,
      detail: {
        folder: 'react-reconciler',
        lead: "Holds React's core rendering engine (Fiber).",
        supporting: 'Many renderers — ReactDOM, React Native, etc. — depend on this package.',
        tags: ['Fiber', 'Reconciler', 'Renderer', 'Scheduling', 'Priority'],
        bullets: [
          'Create and manage the fiber tree',
          'Schedule updates and handle priority',
          'Implement the reconciliation algorithm',
          'Coordinate the render and commit phases',
        ],
        callout: 'Most rendering logic, priorities, and the work loop live here.',
      },
    },
    chain: {
      eyebrow: '04 · chain',
      title: 'Read API → implementation → test in sequence (e.g. useState)',
      cards: [
        {
          id: 'docs',
          stepNum: '1',
          stepLabel: 'Official docs',
          title: 'useState',
          code: docsCode,
          description:
            'Declare state and receive an updater function. Triggers a re-render of the component.',
          cta: 'Read on react.dev',
          href: 'https://react.dev/reference/react/useState',
          tone: 'blue',
        },
        {
          id: 'code',
          stepNum: '2',
          stepLabel: 'Implementation (source)',
          title: 'ReactFiberHooks.js',
          code: fiberHooksCode,
          description:
            'Creates the hook object and wires up the update queue and dispatch function.',
          cta: 'View source',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
          tone: 'teal',
        },
        {
          id: 'tests',
          stepNum: '3',
          stepLabel: 'Tests',
          title: 'ReactHooks-test.js',
          code: hooksTestCode,
          description:
            'Verify in tests that updates trigger re-renders and the state value changes.',
          cta: 'View the test',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/__tests__/ReactHooks-test.internal.js',
          tone: 'lavender',
        },
      ],
    },
    routine: {
      eyebrow: '05 · routine',
      title: 'A GitHub-based learning routine',
      steps: [
        {
          num: '1',
          icon: 'doc',
          tone: 'blue',
          title: 'Read the docs',
          description: 'Understand the API and usage first.',
        },
        {
          num: '2',
          icon: 'search',
          tone: 'teal',
          title: 'Find the implementation',
          description: 'Locate where the documented API is implemented.',
        },
        {
          num: '3',
          icon: 'cursor',
          tone: 'emerald',
          title: 'Follow the entry function',
          description: 'Start from the entry point and trace internal flow.',
        },
        {
          num: '4',
          icon: 'flask',
          tone: 'mint',
          title: 'Check the tests',
          description: 'Confirm the guarantees via the test suite.',
        },
        {
          num: '5',
          icon: 'tag',
          tone: 'lavender',
          title: 'Read releases / PRs',
          description: 'Understand the context behind why things changed.',
        },
      ],
    },
    quickStart: {
      eyebrow: '06 · quick start',
      title: 'Try it right now',
      cards: [
        {
          id: 'packages',
          icon: 'folder',
          title: 'Open React packages',
          description: 'Skim the core package structure and learn what each one is for.',
          cta: 'Open on GitHub',
          href: 'https://github.com/facebook/react/tree/main/packages',
        },
        {
          id: 'reconciler',
          icon: 'book',
          title: 'Read the react-reconciler README',
          description: "See the official write-up on Fiber and React's rendering engine.",
          cta: 'View README',
          href: 'https://github.com/facebook/react/tree/main/packages/react-reconciler',
        },
        {
          id: 'releases',
          icon: 'tag',
          title: 'Browse React Releases',
          description: 'See per-version highlights and notable changes.',
          cta: 'View releases',
          href: 'https://github.com/facebook/react/releases',
        },
        {
          id: 'hooks',
          icon: 'code',
          title: 'Read the Hooks source',
          description: 'Open ReactFiberHooks.js and read the hooks implementation directly.',
          cta: 'Go to code',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
        },
      ],
    },
    nextStep: {
      eyebrow: '07 · next step',
      title: 'Move on to the next page',
      bannerEyebrow: 'The journey continues',
      nextTitle: "Next: Why you don't have to read every file",
      description: 'Learn how to identify the core efficiently and how to prioritize.',
      cta: 'Go to the next page',
      href: '/not-all-files',
    },
  },
};
