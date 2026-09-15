import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type VersionId = '16' | '18' | '19' | '19_2';

export type VersionCard = {
  id: VersionId;
  version: string;
  year: string;
  highlight: string;
};

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
  tone: ToneKey;
  title: string;
  description: string;
  tags: string[];
};

export type ReinterpretRow = {
  legacy: string;
  legacyBody: string;
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
  tone: ToneKey;
};

export type WhyReact19Content = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    visual: {
      versions: VersionCard[];
      axisBottom: string;
      axisTop: string;
    };
  };
  timeline: {
    badge: string;
    eyebrow: string;
    title: string;
    rows: TimelineRow[];
  };
  focusTopics: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: FocusTopic[];
  };
  reinterpret: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { legacy: string; modern: string };
    rows: ReinterpretRow[];
  };
  resources: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: ResourceCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const whyReact19Content: Record<Locale, WhyReact19Content> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 3/6단계',
      title: ['React 내부를 읽는다면,', '지금의 React를 기준으로 읽어야 합니다.'],
      description: ['과거 강의가 틀린 것이 아니라,', '설명하던 React의 시대가 다를 수 있습니다.'],
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
    timeline: {
      badge: '01',
      eyebrow: '버전 흐름',
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
      badge: '02',
      eyebrow: '집중 주제',
      title: 'React 19에서 특히 읽을 가치가 큰 주제',
      cards: [
        {
          id: 'use-suspense',
          tone: 'blue',
          title: 'use()와 Suspense',
          description:
            '비동기 데이터 처리 모델의 중심. 내부 구현을 보면 왜 Suspense와 연결되는지 이해할 수 있습니다.',
          tags: ['use()', 'Suspense', 'Thenable'],
        },
        {
          id: 'actions',
          tone: 'violet',
          title: 'Actions와 Form Actions',
          description:
            '서버 액션과 폼 처리의 새로운 흐름. 내부 흐름을 이해하면 폼 기반 업데이트가 다르게 보입니다.',
          tags: ['Actions', 'Form Actions', 'Server'],
        },
        {
          id: 'ref-as-prop',
          tone: 'teal',
          title: 'ref as prop',
          description:
            '`ref`의 전달 방식이 더 단순해지고, 어떤 추상화가 사라졌는지 읽을 수 있습니다.',
          tags: ['ref as prop', 'forwardRef 변화'],
        },
        {
          id: 'rsc',
          tone: 'sky',
          title: 'Server Components 경계',
          description:
            '클라이언트/서버 경계의 규칙과 제약을 정확히 읽어야 제대로 사용할 수 있습니다.',
          tags: ['RSC', '경계', '책임 분리'],
        },
      ],
    },
    reinterpret: {
      badge: '03',
      eyebrow: '재해석',
      title: '오래된 용어를 최신 관점으로 다시 읽기',
      description:
        '버전이 달라지면 내부 표현도 달라집니다. 같은 목적이라도 구현 방식과 용어가 바뀌었습니다.',
      headers: {
        legacy: '과거 자료에서 자주 보던 용어',
        modern: 'React 19 코드 읽기 관점',
      },
      rows: [
        {
          legacy: 'scheduleWork',
          legacyBody: '업데이트 작업을 스케줄링하던 진입점.',
          modernTitle: '`scheduleUpdateOnFiber` 흐름으로 읽기',
          modernBody: '어떤 Fiber에, 어떤 lane으로 스케줄링되는지 추적합니다.',
        },
        {
          legacy: 'expirationTime',
          legacyBody: '업데이트 만료 시간을 기반으로 우선순위를 판단하던 방식.',
          modernTitle: '`lanes`와 priority로 읽기',
          modernBody: 'lane 비트, priority, entanglement 관계를 함께 이해합니다.',
        },
        {
          legacy: 'legacy render',
          legacyBody: '동기적으로 렌더링을 수행하던 방식.',
          modernTitle: 'concurrent rendering 흐름으로 이해',
          modernBody:
            'interruptible, 재개 가능, 우선순위 기반 렌더링으로 읽고 낮은 우선순위 업데이트는 transitions로 표현합니다.',
        },
        {
          legacy: 'batchedUpdates',
          legacyBody: '이벤트 핸들러 안에서만 업데이트를 모아 처리하던 방식.',
          modernTitle: '자동 배치와 이벤트/전이 경계로 이해',
          modernBody: '기본적으로 자동 배치되며, 필요 시 `flushSync` 등을 함께 봅니다.',
        },
      ],
    },
    resources: {
      badge: '04',
      eyebrow: '공식 자료',
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
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '오픈소스 GitHub 기반 학습이 좋은 이유',
      description: '소스코드를 더 정확히, 더 깊이 이해하는 방법을 알아봅니다.',
      cta: '다음 페이지로 이동',
      href: '/why-open-source',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 3/6',
      title: ['When you read React internals,', 'read against React as it is today.'],
      description: [
        "It's not that older lectures were wrong —",
        'they may simply describe a different era of React.',
      ],
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
    timeline: {
      badge: '01',
      eyebrow: 'TIMELINE',
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
      badge: '02',
      eyebrow: 'FOCUS TOPICS',
      title: 'Topics most worth reading in React 19',
      cards: [
        {
          id: 'use-suspense',
          tone: 'blue',
          title: 'use() & Suspense',
          description:
            'The center of the async data model. The internals show why it ties to Suspense.',
          tags: ['use()', 'Suspense', 'Thenable'],
        },
        {
          id: 'actions',
          tone: 'violet',
          title: 'Actions & Form Actions',
          description:
            'The new server-action and form pipeline. Reading the internals reframes form updates.',
          tags: ['Actions', 'Form Actions', 'Server'],
        },
        {
          id: 'ref-as-prop',
          tone: 'teal',
          title: 'ref as prop',
          description: '`ref` passing is simpler now — see which abstraction is gone.',
          tags: ['ref as prop', 'forwardRef shift'],
        },
        {
          id: 'rsc',
          tone: 'sky',
          title: 'Server Components boundaries',
          description:
            'Reading the client/server boundary rules correctly is what makes RSC usable.',
          tags: ['RSC', 'Boundary', 'Separation'],
        },
      ],
    },
    reinterpret: {
      badge: '03',
      eyebrow: 'REINTERPRETATION',
      title: 'Re-reading older terms through a modern lens',
      description:
        'When versions change, the internal vocabulary changes too — same intent, different implementation and terminology.',
      headers: {
        legacy: 'Terms common in older material',
        modern: 'How to read it in React 19 code',
      },
      rows: [
        {
          legacy: 'scheduleWork',
          legacyBody: 'The entry point that scheduled update work.',
          modernTitle: 'Read it as the `scheduleUpdateOnFiber` flow',
          modernBody: 'Trace which fiber and which lane the update is scheduled on.',
        },
        {
          legacy: 'expirationTime',
          legacyBody: 'Priority derived from expiration deadlines.',
          modernTitle: 'Read it via `lanes` and priority',
          modernBody: 'Understand lane bits, priority, and entanglement together.',
        },
        {
          legacy: 'legacy render',
          legacyBody: 'The synchronous rendering path.',
          modernTitle: 'Understand it via concurrent rendering',
          modernBody:
            'Interruptible, resumable, priority-driven rendering, with lower-priority updates expressed as transitions.',
        },
        {
          legacy: 'batchedUpdates',
          legacyBody: 'Batching that only applied inside event handlers.',
          modernTitle: 'Understand it via automatic batching and event boundaries',
          modernBody: 'Batched by default; use `flushSync` etc. when needed.',
        },
      ],
    },
    resources: {
      badge: '04',
      eyebrow: 'RESOURCES',
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
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Why GitHub-based open-source learning works',
      description: 'Learn how to read the source more accurately and more deeply.',
      cta: 'Go to the next page',
      href: '/why-open-source',
    },
  },
};
