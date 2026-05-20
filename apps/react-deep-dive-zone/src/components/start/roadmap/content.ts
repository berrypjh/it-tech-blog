import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'blue' | 'teal' | 'lavender' | 'cyan' | 'mint' | 'coral' | 'indigo';

export type HeroSupport = {
  id: 'flow' | 'core' | 'question' | 'note';
  icon: 'route' | 'file' | 'question' | 'pencil';
  title: string;
  description: string;
  tone: Tone;
};

export type JourneyItem = {
  id: string;
  label: string;
  status: 'done' | 'upcoming';
};

export type RoadmapRow = {
  num: string;
  title: string;
  description: string;
  files: string[];
  icon: 'cube' | 'network' | 'code' | 'check' | 'hook' | 'event' | 'gauge' | 'spark';
  tone: Tone;
};

export type DeliverableCard = {
  num: string;
  title: string;
  description: string[];
  icon: 'cube' | 'network' | 'code' | 'check' | 'hook' | 'gauge' | 'flag';
  tone: Tone;
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type CourseCard = {
  id: 'a' | 'b' | 'c';
  label: string;
  title: string;
  description: string;
  route: string[];
  durationLabel: string;
  duration: string;
  difficultyLabel: string;
  difficultyStars: number; // out of 5
  difficultyText: string;
  tone: Tone;
};

export type UsageStep = {
  num: string;
  title: string;
  description: string[];
  icon: 'book' | 'eye' | 'github' | 'route' | 'check';
  tone: Tone;
};

export type RoadmapContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    supportTitle: string;
    supports: HeroSupport[];
    visual: {
      codeFile: string;
      codeLines: string[];
      checkpointLabel: string;
      checkpointSub: string;
      notesTitle: string;
      notesSub: string;
      repoTitle: string;
      repoPackages: { name: string; active?: boolean }[];
      flagLabel: string;
    };
  };
  journey: {
    eyebrow: string;
    title: string;
    currentLabel: string;
    statusLabel: string;
    items: JourneyItem[];
    footerNote: string;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    coreFilesLabel: string;
    rows: RoadmapRow[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    supporting: string;
    cards: DeliverableCard[];
  };
  selfCheck: {
    eyebrow: string;
    title: string;
    supporting: string;
    progressLabel: string;
    left: ChecklistItem[];
    right: ChecklistItem[];
  };
  courses: {
    eyebrow: string;
    title: string;
    cards: CourseCard[];
  };
  usage: {
    eyebrow: string;
    title: string;
    steps: UsageStep[];
  };
  finale: {
    eyebrow: string;
    title: string;
    copyLine1: string;
    copyLine2: string;
    copyLine3: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
};

export const roadmapContent: Record<Locale, RoadmapContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 8/8단계',
      title: ['React 소스코드는', '길을 알고 들어가면', '훨씬 빠르게 이해됩니다.'],
      description: [
        'JSX에서 시작해 Fiber, Render, Commit, Hooks,',
        'Scheduler까지 단계적으로 탐구합니다.',
      ],
      supportTitle: 'how we read',
      supports: [
        {
          id: 'flow',
          icon: 'route',
          tone: 'blue',
          title: '흐름 중심 학습',
          description: '막힘을 이해하면 코드가 연결됩니다.',
        },
        {
          id: 'core',
          icon: 'file',
          tone: 'teal',
          title: '핵심 파일 중심',
          description: '모든 파일이 아닌 필요한 파일을 읽습니다.',
        },
        {
          id: 'question',
          icon: 'question',
          tone: 'lavender',
          title: '질문으로 탐구',
          description: '질문을 던지고 흐름을 따라가며 이해합니다.',
        },
        {
          id: 'note',
          icon: 'pencil',
          tone: 'coral',
          title: '직접 정리하는 학습',
          description: '흐름도와 노트로 내 것으로 만듭니다.',
        },
      ],
      visual: {
        codeFile: 'ReactFiberWorkLoop.js',
        codeLines: [
          'function workLoopSync() {',
          '  while (workInProgress !== null) {',
          '    performUnitOfWork(workInProgress);',
          '  }',
          '}',
        ],
        checkpointLabel: 'Checkpoint',
        checkpointSub: 'Render Phase',
        notesTitle: 'Your Notes',
        notesSub: '오늘의 흐름 정리',
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
        flagLabel: 'Start',
      },
    },
    journey: {
      eyebrow: '01 · journey',
      title: '전체 여정 한눈에 보기',
      currentLabel: '시작하기',
      statusLabel: '완료',
      items: [
        { id: 'repo', label: '저장소 구조', status: 'upcoming' },
        { id: 'package', label: '패키지 구조', status: 'upcoming' },
        { id: 'element', label: 'Element', status: 'upcoming' },
        { id: 'fiber', label: 'Fiber', status: 'upcoming' },
        { id: 'render', label: 'Render', status: 'upcoming' },
        { id: 'commit', label: 'Commit', status: 'upcoming' },
        { id: 'hooks', label: 'Hooks', status: 'upcoming' },
        { id: 'event', label: 'Event', status: 'upcoming' },
        { id: 'scheduler', label: 'Scheduler', status: 'upcoming' },
        { id: 'suspense', label: 'Suspense / Hydration', status: 'upcoming' },
        { id: 'react19', label: 'React 19 변화', status: 'upcoming' },
      ],
      footerNote: '계속 업데이트 예정',
    },
    roadmap: {
      eyebrow: '02 · roadmap',
      title: '8단계 학습 로드맵',
      coreFilesLabel: '핵심 파일',
      rows: [
        {
          num: '1',
          title: 'React Element 이해',
          description: 'JSX가 어떤 객체로 변환되는지 이해합니다.',
          files: ['ReactJSXElement.js'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber 구조 이해',
          description: 'FiberNode와 트리 구조를 이해합니다.',
          files: ['ReactFiber.js'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render Phase 읽기',
          description: 'beginWork / completeWork 흐름을 읽습니다.',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit Phase 읽기',
          description: '변경 사항이 실제로 반영되는 과정을 이해합니다.',
          files: ['ReactFiberCommitWork.js'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks 내부 읽기',
          description: 'Hook linked list와 업데이트 흐름을 읽습니다.',
          files: ['ReactFiberHooks.js'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: '이벤트와 업데이트 연결',
          description: '이벤트 → setState → 업데이트 예약 흐름을 이해합니다.',
          files: ['ReactDOM', 'ReactFiberWorkLoop.js'],
          icon: 'event',
          tone: 'blue',
        },
        {
          num: '7',
          title: 'Scheduler와 우선순위',
          description: 'lanes, priority, 스케줄링 로직을 이해합니다.',
          files: ['scheduler', 'ReactFiberLane.js'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '8',
          title: 'Suspense / React 19 변화',
          description: 'Suspense, Actions, use(), ref as prop 등 최신 변화를 이해합니다.',
          files: ['React 19 관련 변경 코드'],
          icon: 'spark',
          tone: 'coral',
        },
      ],
    },
    deliverables: {
      eyebrow: '03 · deliverables',
      title: '단계별 산출물',
      supporting: '학습 후, 내가 만들어야 할 결과물',
      cards: [
        {
          num: '1',
          title: 'Element 단계',
          description: ['JSX가 어떤 객체가', '되는지 설명하기'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber 단계',
          description: ['FiberNode 주요 필드', '요약하기'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render 단계',
          description: ['beginWork / completeWork', '흐름도 그리기'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit 단계',
          description: ['Placement / Update /', 'Deletion 설명하기'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks 단계',
          description: ['Hook linked list', '그림 그리기'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Scheduler 단계',
          description: ['우선순위 흐름', '정리하기'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '7',
          title: '최종 정리',
          description: ['전체 흐름을', '하나의 그림으로!'],
          icon: 'flag',
          tone: 'indigo',
        },
      ],
    },
    selfCheck: {
      eyebrow: '04 · self-check',
      title: '나는 설명할 수 있는가?',
      supporting: '자기 점검 체크리스트',
      progressLabel: '확인 완료',
      left: [
        { id: 'jsx-element', text: 'JSX와 Element의 차이를 설명할 수 있다.' },
        { id: 'element-fiber', text: 'Element와 Fiber의 차이를 설명할 수 있다.' },
        { id: 'render-phase', text: 'Render Phase에서 무엇을 계산하는지 설명할 수 있다.' },
      ],
      right: [
        {
          id: 'commit-phase',
          text: 'Commit Phase에서 실제로 무슨 일이 일어나는지 설명할 수 있다.',
        },
        {
          id: 'state-not-immediate',
          text: 'state update가 즉시 DOM 변경이 아닌 이유를 설명할 수 있다.',
        },
        { id: 'hooks-order', text: 'Hooks 호출 순서가 중요한 이유를 설명할 수 있다.' },
        {
          id: 'transition',
          text: 'transition이 우선순위를 낮춰 UI 반응성을 유지하는 이유를 설명할 수 있다.',
        },
      ],
    },
    courses: {
      eyebrow: '05 · courses',
      title: '학습 목적별 추천 코스',
      cards: [
        {
          id: 'a',
          label: '코스 A.',
          title: 'React 내부 전체를 체계적으로',
          description: '처음부터 끝까지 순서대로 이해하고 싶은 분',
          route: ['Element', 'Fiber', 'Render', 'Commit', 'Hooks', 'Scheduler', 'Suspense'],
          durationLabel: '추천 기간',
          duration: '8주 이상',
          difficultyLabel: '난이도',
          difficultyStars: 4,
          difficultyText: '높음',
          tone: 'blue',
        },
        {
          id: 'b',
          label: '코스 B.',
          title: 'Hooks와 상태 업데이트 중심',
          description: 'Hooks 원리와 업데이트 흐름이 궁금한 분',
          route: ['Element', 'Fiber', 'Hooks', 'Update Flow', 'WorkLoop', 'Commit'],
          durationLabel: '추천 기간',
          duration: '4~6주',
          difficultyLabel: '난이도',
          difficultyStars: 3,
          difficultyText: '중간',
          tone: 'lavender',
        },
        {
          id: 'c',
          label: '코스 C.',
          title: '렌더링 성능과 Scheduler 중심',
          description: '성능 최적화와 우선순위가 궁금한 분',
          route: ['Fiber', 'Render', 'Scheduler', 'Lanes', 'Commit', 'Profiling'],
          durationLabel: '추천 기간',
          duration: '4~6주',
          difficultyLabel: '난이도',
          difficultyStars: 4,
          difficultyText: '높음',
          tone: 'mint',
        },
      ],
    },
    usage: {
      eyebrow: '06 · usage',
      title: '이 사이트는 이렇게 활용하세요',
      steps: [
        {
          num: '1',
          title: '개념 읽기',
          description: ['지금 단계의 핵심 개념을', '먼저 이해합니다.'],
          icon: 'book',
          tone: 'blue',
        },
        {
          num: '2',
          title: '코드 미리보기',
          description: ['관련 파일과 함수의 개요를', '미리 파악합니다.'],
          icon: 'eye',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'GitHub 코드 열기',
          description: ['실제 소스코드를 열고', '직접 읽어봅니다.'],
          icon: 'github',
          tone: 'lavender',
        },
        {
          num: '4',
          title: '흐름도 다시 보기',
          description: ['읽은 내용을 흐름도로', '정리합니다.'],
          icon: 'route',
          tone: 'cyan',
        },
        {
          num: '5',
          title: '체크리스트 점검',
          description: ['내가 설명할 수 있는지', '스스로 확인합니다.'],
          icon: 'check',
          tone: 'mint',
        },
      ],
    },
    finale: {
      eyebrow: '07 · launch',
      title: '이제 실제 탐구를 시작해요!',
      copyLine1: '준비가 끝났습니다.',
      copyLine2: '이제 실제 React 저장소를 열고,',
      copyLine3: '전체 구조부터 읽어봅니다.',
      primaryCta: '다음: React GitHub 저장소 구조 읽기',
      primaryHref: '/repo-overview',
      secondaryCta: '처음부터 다시 보기',
      secondaryHref: '/why-source',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 8/8',
      title: ['React source becomes', 'much easier to read', 'once you know the route.'],
      description: [
        'From JSX through Fiber, Render, Commit, Hooks',
        'and Scheduler — explored step by step.',
      ],
      supportTitle: 'how we read',
      supports: [
        {
          id: 'flow',
          icon: 'route',
          tone: 'blue',
          title: 'Flow-first learning',
          description: 'Understanding flow links the code together.',
        },
        {
          id: 'core',
          icon: 'file',
          tone: 'teal',
          title: 'Core files first',
          description: 'Read the files that matter, not all of them.',
        },
        {
          id: 'question',
          icon: 'question',
          tone: 'lavender',
          title: 'Explore by question',
          description: 'Ask a question and follow the flow.',
        },
        {
          id: 'note',
          icon: 'pencil',
          tone: 'coral',
          title: 'Note it yourself',
          description: 'Diagrams and notes make it stick.',
        },
      ],
      visual: {
        codeFile: 'ReactFiberWorkLoop.js',
        codeLines: [
          'function workLoopSync() {',
          '  while (workInProgress !== null) {',
          '    performUnitOfWork(workInProgress);',
          '  }',
          '}',
        ],
        checkpointLabel: 'Checkpoint',
        checkpointSub: 'Render Phase',
        notesTitle: 'Your Notes',
        notesSub: "Today's flow recap",
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
        flagLabel: 'Start',
      },
    },
    journey: {
      eyebrow: '01 · journey',
      title: 'The full journey at a glance',
      currentLabel: 'Getting Started',
      statusLabel: 'Done',
      items: [
        { id: 'repo', label: 'Repository structure', status: 'upcoming' },
        { id: 'package', label: 'Package structure', status: 'upcoming' },
        { id: 'element', label: 'Element', status: 'upcoming' },
        { id: 'fiber', label: 'Fiber', status: 'upcoming' },
        { id: 'render', label: 'Render', status: 'upcoming' },
        { id: 'commit', label: 'Commit', status: 'upcoming' },
        { id: 'hooks', label: 'Hooks', status: 'upcoming' },
        { id: 'event', label: 'Event', status: 'upcoming' },
        { id: 'scheduler', label: 'Scheduler', status: 'upcoming' },
        { id: 'suspense', label: 'Suspense / Hydration', status: 'upcoming' },
        { id: 'react19', label: 'React 19 changes', status: 'upcoming' },
      ],
      footerNote: 'More chapters coming soon',
    },
    roadmap: {
      eyebrow: '02 · roadmap',
      title: '8-step learning roadmap',
      coreFilesLabel: 'Core files',
      rows: [
        {
          num: '1',
          title: 'Understand React Element',
          description: 'What object JSX becomes.',
          files: ['ReactJSXElement.js'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Understand Fiber',
          description: 'FiberNode and the tree structure.',
          files: ['ReactFiber.js'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Read the Render Phase',
          description: 'beginWork / completeWork flow.',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Read the Commit Phase',
          description: 'How changes actually apply.',
          files: ['ReactFiberCommitWork.js'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Read Hooks internals',
          description: 'Hook linked list and update flow.',
          files: ['ReactFiberHooks.js'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Events meet updates',
          description: 'event → setState → schedule flow.',
          files: ['ReactDOM', 'ReactFiberWorkLoop.js'],
          icon: 'event',
          tone: 'blue',
        },
        {
          num: '7',
          title: 'Scheduler & priority',
          description: 'lanes, priority, scheduling logic.',
          files: ['scheduler', 'ReactFiberLane.js'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '8',
          title: 'Suspense / React 19',
          description: 'Suspense, Actions, use(), ref as prop, etc.',
          files: ['React 19 change set'],
          icon: 'spark',
          tone: 'coral',
        },
      ],
    },
    deliverables: {
      eyebrow: '03 · deliverables',
      title: 'Per-stage deliverables',
      supporting: 'What you should be able to produce after learning',
      cards: [
        {
          num: '1',
          title: 'Element stage',
          description: ['Explain what object', 'JSX becomes'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber stage',
          description: ['Summarize the key', 'FiberNode fields'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render stage',
          description: ['Diagram the begin/', 'completeWork flow'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit stage',
          description: ['Explain Placement /', 'Update / Deletion'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks stage',
          description: ['Sketch the hook', 'linked list'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Scheduler stage',
          description: ['Summarize the', 'priority flow'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Final wrap-up',
          description: ['The whole flow', 'in one diagram!'],
          icon: 'flag',
          tone: 'indigo',
        },
      ],
    },
    selfCheck: {
      eyebrow: '04 · self-check',
      title: 'Can you explain it?',
      supporting: 'Self-check list',
      progressLabel: 'Checked',
      left: [
        { id: 'jsx-element', text: 'I can explain the difference between JSX and Element.' },
        { id: 'element-fiber', text: 'I can explain the difference between Element and Fiber.' },
        { id: 'render-phase', text: 'I can explain what is computed in the Render Phase.' },
      ],
      right: [
        { id: 'commit-phase', text: 'I can explain what actually happens in the Commit Phase.' },
        {
          id: 'state-not-immediate',
          text: 'I can explain why a state update is not an immediate DOM change.',
        },
        { id: 'hooks-order', text: 'I can explain why the order of Hook calls matters.' },
        {
          id: 'transition',
          text: 'I can explain why transitions keep UI responsive via lower priority.',
        },
      ],
    },
    courses: {
      eyebrow: '05 · courses',
      title: 'Recommended courses by goal',
      cards: [
        {
          id: 'a',
          label: 'Course A.',
          title: 'React internals end-to-end',
          description: 'For those who want to read straight through.',
          route: ['Element', 'Fiber', 'Render', 'Commit', 'Hooks', 'Scheduler', 'Suspense'],
          durationLabel: 'Duration',
          duration: '8+ weeks',
          difficultyLabel: 'Difficulty',
          difficultyStars: 4,
          difficultyText: 'High',
          tone: 'blue',
        },
        {
          id: 'b',
          label: 'Course B.',
          title: 'Hooks and state updates',
          description: 'For those curious about hook internals and updates.',
          route: ['Element', 'Fiber', 'Hooks', 'Update Flow', 'WorkLoop', 'Commit'],
          durationLabel: 'Duration',
          duration: '4–6 weeks',
          difficultyLabel: 'Difficulty',
          difficultyStars: 3,
          difficultyText: 'Medium',
          tone: 'lavender',
        },
        {
          id: 'c',
          label: 'Course C.',
          title: 'Rendering perf & Scheduler',
          description: 'For those who care about priorities and performance.',
          route: ['Fiber', 'Render', 'Scheduler', 'Lanes', 'Commit', 'Profiling'],
          durationLabel: 'Duration',
          duration: '4–6 weeks',
          difficultyLabel: 'Difficulty',
          difficultyStars: 4,
          difficultyText: 'High',
          tone: 'mint',
        },
      ],
    },
    usage: {
      eyebrow: '06 · usage',
      title: 'How to use this site',
      steps: [
        {
          num: '1',
          title: 'Read the concept',
          description: ['Start with the core concept', 'for the current stage.'],
          icon: 'book',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Preview the code',
          description: ['Skim the related files', 'and functions.'],
          icon: 'eye',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Open GitHub',
          description: ['Open the real source', 'and read it directly.'],
          icon: 'github',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Revisit the flow',
          description: ['Recap what you read', 'as a diagram.'],
          icon: 'route',
          tone: 'cyan',
        },
        {
          num: '5',
          title: 'Run the checklist',
          description: ['Confirm you can explain', 'what you read.'],
          icon: 'check',
          tone: 'mint',
        },
      ],
    },
    finale: {
      eyebrow: '07 · launch',
      title: 'Time to start exploring!',
      copyLine1: 'You are ready.',
      copyLine2: 'Open the real React repository',
      copyLine3: 'and start with the overall structure.',
      primaryCta: 'Next: Read the React GitHub repo',
      primaryHref: '/repo-overview',
      secondaryCta: 'Restart from the beginning',
      secondaryHref: '/why-source',
    },
  },
};
