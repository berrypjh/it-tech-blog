import type { Locale } from '@it-tech-blog/preferences';

export type VersionId = '16' | '18' | '19' | '19_2';

export type VersionCard = {
  id: VersionId;
  version: string;
  year: string;
  highlight: string;
};

export type LegacyTerm = { name: string; description: string };
export type ModernTerm = { name: string; description: string };

export type TimelineRow = {
  id: VersionId;
  version: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  highlight?: boolean;
};

export type FocusTopic = {
  id: 'use-suspense' | 'actions' | 'ref-as-prop' | 'rsc';
  icon: 'spark' | 'bolt' | 'link' | 'cube';
  tone: 'blue' | 'violet' | 'teal' | 'sky';
  title: string;
  description: string;
  tags: string[];
};

export type ReinterpretRow = {
  legacy: string;
  modernTitle: string;
  modernBody: string;
};

export type ResourceCard = {
  id: 'blog' | 'releases';
  eyebrow: string;
  date: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  href: string;
  tone: 'blue' | 'teal';
};

export type Principle = {
  id: 'public-api' | 'version-stamp' | 'correction' | 'compare';
  icon: 'check' | 'book' | 'shield' | 'scale';
  title: string[];
  description: string;
};

export type WhyReact19Content = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    points: string[];
    infoCard: { title: string; description: string };
    visual: {
      versions: VersionCard[];
      axisBottom: string;
      axisTop: string;
    };
  };
  terminology: {
    eyebrow: string;
    title: string;
    left: { header: string; items: LegacyTerm[] };
    center: { headline: string[]; sub: string[] };
    right: { header: string; items: ModernTerm[] };
  };
  timeline: {
    eyebrow: string;
    title: string;
    rows: TimelineRow[];
  };
  focusTopics: {
    eyebrow: string;
    title: string;
    cards: FocusTopic[];
  };
  reinterpret: {
    eyebrow: string;
    title: string;
    headers: { legacy: string; modern: string };
    rows: ReinterpretRow[];
  };
  resources: {
    eyebrow: string;
    title: string;
    cards: ResourceCard[];
  };
  principles: {
    eyebrow: string;
    title: string;
    items: Principle[];
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

export const whyReact19Content: Record<Locale, WhyReact19Content> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 3/8단계',
      title: ['React 내부를 읽는다면,', '지금의 React를 기준으로 읽어야 합니다.'],
      description: ['과거 강의가 틀린 것이 아니라,', '설명하던 React의 시대가 다를 수 있습니다.'],
      points: [
        '내부 구조는 계속 진화합니다.',
        '용어와 흐름이 바뀌었습니다.',
        '최신 기능은 최신 코드에 반영됩니다.',
      ],
      infoCard: {
        title: '이 사이트는 React 19.2를 기준으로',
        description: '현재의 코드와 흐름을 가장 정확하게 설명합니다.',
      },
      visual: {
        versions: [
          { id: '16', version: 'React 16', year: '2017', highlight: 'Fiber 도입' },
          { id: '18', version: 'React 18', year: '2022', highlight: 'Concurrent 기능 확장' },
          {
            id: '19',
            version: 'React 19',
            year: '2024',
            highlight: '새로운 개발 경험과 데이터 처리 모델',
          },
          { id: '19_2', version: 'React 19.2', year: '2025', highlight: '안정화 및 추가 개선' },
        ],
        axisBottom: '시간의 흐름',
        axisTop: '현재',
      },
    },
    terminology: {
      eyebrow: '02 · terms',
      title: '용어와 개념도 시대에 따라 달라집니다',
      left: {
        header: '과거 자료에서 자주 보는 용어',
        items: [
          { name: 'scheduleWork', description: '업데이트 작업을 스케줄링' },
          { name: 'expirationTime', description: '업데이트 만료 시간을 기반으로 우선순위 판단' },
          { name: 'legacy render', description: '동기적으로 렌더링을 수행하던 방식' },
        ],
      },
      center: {
        headline: ['버전이 달라지면', '내부 표현도', '달라집니다'],
        sub: ['같은 목적이라도', '구현 방식과 용어가', '바뀌었습니다.'],
      },
      right: {
        header: 'React 19 코드에서 더 자주 만나는 용어',
        items: [
          { name: 'scheduleUpdateOnFiber', description: 'Fiber 트리에 업데이트를 스케줄링' },
          { name: 'lanes', description: '여러 업데이트의 우선순위를 비트 단위로 표현' },
          { name: 'concurrent rendering', description: '동시 렌더링으로 상호작용성과 반응성 개선' },
          { name: 'transitions', description: '낮은 우선순위 업데이트를 표현하는 도구' },
        ],
      },
    },
    timeline: {
      eyebrow: '03 · timeline',
      title: 'React 버전별 핵심 변화',
      rows: [
        {
          id: '16',
          version: 'React 16',
          year: '2017',
          title: 'Fiber 도입',
          description:
            '재조정(Reconciliation)을 점진적으로 수행할 수 있는 Fiber 아키텍처가 도입되었습니다.',
          tags: ['Fiber', '재조정 성능 개선'],
        },
        {
          id: '18',
          version: 'React 18',
          year: '2022',
          title: 'Concurrent 기능 확장',
          description:
            '동시 렌더링 기반 기능이 안정화되고, 자동 배칭 등 렌더링 경험이 개선되었습니다.',
          tags: ['Concurrent Rendering', 'Automatic Batching', 'Transitions'],
        },
        {
          id: '19',
          version: 'React 19',
          year: '2024',
          title: '새로운 개발 경험과 데이터 처리 모델',
          description:
            '`use()`, Actions, `ref as prop` 등 새로운 렌더링·데이터 처리 흐름을 읽어야 합니다.',
          tags: ['use()', 'Actions', 'ref as prop', 'Form Actions'],
        },
        {
          id: '19_2',
          version: 'React 19.2',
          year: '2025',
          title: '안정화 및 추가 개선',
          description: '`<Activity />`, `useEffectEvent`, SSR 및 성능 관련 보완이 추가되었습니다.',
          tags: ['Activity', 'useEffectEvent', 'SSR 개선'],
          highlight: true,
        },
      ],
    },
    focusTopics: {
      eyebrow: '04 · focus topics',
      title: 'React 19에서 특히 읽을 가치가 큰 주제',
      cards: [
        {
          id: 'use-suspense',
          icon: 'spark',
          tone: 'blue',
          title: 'use()와 Suspense',
          description:
            '비동기 데이터 처리 모델의 중심. 내부 구현을 보면 왜 Suspense와 연결되는지 이해할 수 있습니다.',
          tags: ['use()', 'Suspense', 'Thenable'],
        },
        {
          id: 'actions',
          icon: 'bolt',
          tone: 'violet',
          title: 'Actions와 Form Actions',
          description:
            '서버 액션과 폼 처리의 새로운 흐름. 내부 흐름을 이해하면 폼 기반 업데이트가 다르게 보입니다.',
          tags: ['Actions', 'Form Actions', 'Server'],
        },
        {
          id: 'ref-as-prop',
          icon: 'link',
          tone: 'teal',
          title: 'ref as prop',
          description:
            '`ref`의 전달 방식이 더 단순해지고, 어떤 추상화가 사라졌는지 읽을 수 있습니다.',
          tags: ['ref as prop', 'forwardRef 변화'],
        },
        {
          id: 'rsc',
          icon: 'cube',
          tone: 'sky',
          title: 'Server Components 경계',
          description:
            '클라이언트/서버 경계의 규칙과 제약을 정확히 읽어야 제대로 사용할 수 있습니다.',
          tags: ['RSC', '경계', '책임 분리'],
        },
      ],
    },
    reinterpret: {
      eyebrow: '05 · reinterpret',
      title: '오래된 용어를 최신 관점으로 다시 읽기',
      headers: {
        legacy: '과거 자료에서 자주 보던 용어',
        modern: 'React 19 코드 읽기 관점',
      },
      rows: [
        {
          legacy: 'scheduleWork',
          modernTitle: '`scheduleUpdateOnFiber` 흐름으로 읽기',
          modernBody: '어떤 Fiber에, 어떤 lane으로 스케줄링되는지 추적합니다.',
        },
        {
          legacy: 'expirationTime',
          modernTitle: '`lanes`와 priority로 읽기',
          modernBody: 'lane 비트, priority, entanglement 관계를 함께 이해합니다.',
        },
        {
          legacy: 'legacy render',
          modernTitle: 'concurrent rendering 흐름으로 이해',
          modernBody: 'interruptible, 재개 가능, 우선순위 기반 렌더링으로 읽습니다.',
        },
        {
          legacy: 'batchedUpdates',
          modernTitle: '자동 배치와 이벤트/전이 경계로 이해',
          modernBody: '기본적으로 자동 배치되며, 필요 시 `flushSync` 등을 함께 봅니다.',
        },
      ],
    },
    resources: {
      eyebrow: '06 · resources',
      title: '공식 변경 기록 확인하기',
      cards: [
        {
          id: 'blog',
          eyebrow: '최신 소식',
          date: '2025.10',
          title: 'React 19.2 공식 발표',
          description: 'React 19.2의 주요 개선 사항과 새로운 기능을 공식 발표에서 확인합니다.',
          bullets: [
            '`<Activity />`, `useEffectEvent` 추가',
            'Partial Pre-rendering, SSR 보완',
            '렌더링 성능과 개발 경험 개선',
          ],
          cta: '공식 발표 보기',
          href: 'https://react.dev/blog',
          tone: 'blue',
        },
        {
          id: 'releases',
          eyebrow: '릴리즈 노트',
          date: '2025.10',
          title: 'React GitHub Releases',
          description: 'React 저장소의 릴리즈 기록과 변경 내역을 직접 확인합니다.',
          bullets: ['버전별 변경 로그', '커밋 히스토리', '이슈 및 토론'],
          cta: '릴리즈 기록 보기',
          href: 'https://github.com/facebook/react/releases',
          tone: 'teal',
        },
      ],
    },
    principles: {
      eyebrow: '07 · principles',
      title: '이 사이트의 학습 원칙',
      items: [
        {
          id: 'public-api',
          icon: 'check',
          title: ['공개 API는', '최신 React 기준'],
          description: '공식 문서에 반영된 현재 버전을 기준으로 설명합니다.',
        },
        {
          id: 'version-stamp',
          icon: 'book',
          title: ['내부 코드는', '설명 시점의 버전을 표시'],
          description: '코드 예시는 버전과 기준 정보를 함께 제공합니다.',
        },
        {
          id: 'correction',
          icon: 'shield',
          title: ['과거 강의와 다른 지점은', '보정 박스 제공'],
          description: '혼동하기 쉬운 부분은 비교와 함께 명확히 보완합니다.',
        },
        {
          id: 'compare',
          icon: 'scale',
          title: ['중요한 버전 차이는', '비교로 설명'],
          description: '왜 바뀌었고, 무엇이 달라졌는지 표로 정리합니다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '다음 단계로 이동하기',
      bannerEyebrow: '다음 학습으로 이어집니다',
      nextTitle: '다음: 오픈소스 GitHub 기반 학습이 좋은 이유',
      description: '소스코드를 더 정확히, 더 깊이 이해하는 방법을 알아봅니다.',
      cta: '다음 페이지로 이동',
      href: '/github-learning',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 3/8',
      title: ['When you read React internals,', 'read against React as it is today.'],
      description: [
        "It's not that older lectures were wrong —",
        'they may simply describe a different era of React.',
      ],
      points: [
        'The internals keep evolving.',
        'Terminology and flow have shifted.',
        'New features land in modern code.',
      ],
      infoCard: {
        title: 'This site is based on React 19.2',
        description: 'so it most accurately describes the current code and flow.',
      },
      visual: {
        versions: [
          { id: '16', version: 'React 16', year: '2017', highlight: 'Fiber introduced' },
          {
            id: '18',
            version: 'React 18',
            year: '2022',
            highlight: 'Concurrent features expanded',
          },
          { id: '19', version: 'React 19', year: '2024', highlight: 'New DX and data model' },
          {
            id: '19_2',
            version: 'React 19.2',
            year: '2025',
            highlight: 'Stabilization and refinements',
          },
        ],
        axisBottom: 'time',
        axisTop: 'today',
      },
    },
    terminology: {
      eyebrow: '02 · terms',
      title: 'Terms and concepts shift across eras',
      left: {
        header: 'Terms you often see in older material',
        items: [
          { name: 'scheduleWork', description: 'Scheduling update work' },
          { name: 'expirationTime', description: 'Priority via expiration deadlines' },
          { name: 'legacy render', description: 'The synchronous rendering path' },
        ],
      },
      center: {
        headline: ['When versions change,', 'the internal vocabulary', 'changes too.'],
        sub: ['Same intent,', 'different implementation', 'and terminology.'],
      },
      right: {
        header: 'Terms you meet more often in React 19 code',
        items: [
          { name: 'scheduleUpdateOnFiber', description: 'Scheduling updates on the fiber tree' },
          { name: 'lanes', description: 'Priorities expressed as bitmask lanes' },
          { name: 'concurrent rendering', description: 'Interruptible, responsive rendering' },
          { name: 'transitions', description: 'A tool for lower-priority updates' },
        ],
      },
    },
    timeline: {
      eyebrow: '03 · timeline',
      title: 'Key shifts across React versions',
      rows: [
        {
          id: '16',
          version: 'React 16',
          year: '2017',
          title: 'Fiber introduced',
          description: 'A Fiber architecture made reconciliation incremental.',
          tags: ['Fiber', 'Reconciliation speed'],
        },
        {
          id: '18',
          version: 'React 18',
          year: '2022',
          title: 'Concurrent features expanded',
          description: 'Concurrent rendering and automatic batching landed as stable APIs.',
          tags: ['Concurrent Rendering', 'Automatic Batching', 'Transitions'],
        },
        {
          id: '19',
          version: 'React 19',
          year: '2024',
          title: 'New DX and data model',
          description: 'Read `use()`, Actions, and `ref as prop` as a new rendering & data flow.',
          tags: ['use()', 'Actions', 'ref as prop', 'Form Actions'],
        },
        {
          id: '19_2',
          version: 'React 19.2',
          year: '2025',
          title: 'Stabilization and refinements',
          description: 'Adds `<Activity />`, `useEffectEvent`, SSR and perf improvements.',
          tags: ['Activity', 'useEffectEvent', 'SSR improvements'],
          highlight: true,
        },
      ],
    },
    focusTopics: {
      eyebrow: '04 · focus topics',
      title: 'Topics most worth reading in React 19',
      cards: [
        {
          id: 'use-suspense',
          icon: 'spark',
          tone: 'blue',
          title: 'use() & Suspense',
          description:
            'The center of the async data model. The internals show why it ties to Suspense.',
          tags: ['use()', 'Suspense', 'Thenable'],
        },
        {
          id: 'actions',
          icon: 'bolt',
          tone: 'violet',
          title: 'Actions & Form Actions',
          description:
            'The new server-action and form pipeline. Reading the internals reframes form updates.',
          tags: ['Actions', 'Form Actions', 'Server'],
        },
        {
          id: 'ref-as-prop',
          icon: 'link',
          tone: 'teal',
          title: 'ref as prop',
          description: '`ref` passing is simpler now — see which abstraction is gone.',
          tags: ['ref as prop', 'forwardRef shift'],
        },
        {
          id: 'rsc',
          icon: 'cube',
          tone: 'sky',
          title: 'Server Components boundaries',
          description:
            'Reading the client/server boundary rules correctly is what makes RSC usable.',
          tags: ['RSC', 'Boundary', 'Separation'],
        },
      ],
    },
    reinterpret: {
      eyebrow: '05 · reinterpret',
      title: 'Re-reading older terms through a modern lens',
      headers: {
        legacy: 'Terms common in older material',
        modern: 'How to read it in React 19 code',
      },
      rows: [
        {
          legacy: 'scheduleWork',
          modernTitle: 'Read it as the `scheduleUpdateOnFiber` flow',
          modernBody: 'Trace which fiber and which lane the update is scheduled on.',
        },
        {
          legacy: 'expirationTime',
          modernTitle: 'Read it via `lanes` and priority',
          modernBody: 'Understand lane bits, priority, and entanglement together.',
        },
        {
          legacy: 'legacy render',
          modernTitle: 'Understand it via concurrent rendering',
          modernBody: 'Interruptible, resumable, priority-driven rendering.',
        },
        {
          legacy: 'batchedUpdates',
          modernTitle: 'Understand it via automatic batching and event boundaries',
          modernBody: 'Batched by default; use `flushSync` etc. when needed.',
        },
      ],
    },
    resources: {
      eyebrow: '06 · resources',
      title: 'Check the official change records',
      cards: [
        {
          id: 'blog',
          eyebrow: 'Latest news',
          date: '2025.10',
          title: 'React 19.2 announcement',
          description: 'Read the official announcement for React 19.2 highlights.',
          bullets: [
            'Adds `<Activity />` and `useEffectEvent`',
            'Partial Pre-rendering and SSR improvements',
            'Rendering perf and DX improvements',
          ],
          cta: 'Read the announcement',
          href: 'https://react.dev/blog',
          tone: 'blue',
        },
        {
          id: 'releases',
          eyebrow: 'Release notes',
          date: '2025.10',
          title: 'React GitHub Releases',
          description: 'Check the release log and change history directly in the React repository.',
          bullets: ['Per-version changelogs', 'Commit history', 'Issues and discussion'],
          cta: 'Browse the releases',
          href: 'https://github.com/facebook/react/releases',
          tone: 'teal',
        },
      ],
    },
    principles: {
      eyebrow: '07 · principles',
      title: 'Learning principles of this site',
      items: [
        {
          id: 'public-api',
          icon: 'check',
          title: ['Public API:', 'modern React baseline'],
          description: 'Explain the version reflected in the current official docs.',
        },
        {
          id: 'version-stamp',
          icon: 'book',
          title: ['Internal code:', 'show the version it describes'],
          description: 'Code samples come with version and baseline context.',
        },
        {
          id: 'correction',
          icon: 'shield',
          title: ['Differs from older lectures?', 'Show a correction box'],
          description: 'Confusing parts are clarified with explicit comparisons.',
        },
        {
          id: 'compare',
          icon: 'scale',
          title: ['Important version diffs', 'explained side by side'],
          description: 'Why it changed and what changed — laid out in a table.',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'Move on to the next page',
      bannerEyebrow: 'The journey continues',
      nextTitle: 'Next: Why GitHub-based open-source learning works',
      description: 'Learn how to read the source more accurately and more deeply.',
      cta: 'Go to the next page',
      href: '/github-learning',
    },
  },
};
