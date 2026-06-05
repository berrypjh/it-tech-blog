import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PreviousChapterStepIcon = 'mousePointer' | 'fileText' | 'network' | 'clock' | 'play';

export type PreviousChapterStep = {
  title: string;
  description: string;
  iconName: PreviousChapterStepIcon;
  tone: ToneKey;
};

export type ComparisonRow = {
  label: string;
  render: string | string[];
  commit: string | string[];
  emphasis?: boolean;
  iconKind?: 'cross-check';
};

export type WorkCardIcon = 'refresh' | 'layers' | 'gitBranch' | 'flag';

export type WorkCard = {
  title: string;
  description: string;
  iconName: WorkCardIcon;
  tone: ToneKey;
};

export type FlowPreviewStep = {
  number: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type WarningStepIcon = 'cpu' | 'monitor' | 'checkCircle';

export type WarningStep = {
  title: string;
  subtitle: string;
  tone: ToneKey;
  iconName: WarningStepIcon;
};

export type RenderPhaseIntroContent = {
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    description: string;
    callout: string;
    diagram: {
      eyebrow: string;
      renderCard: {
        title: string;
        description: string;
        subDescription: string;
      };
      commitCard: {
        title: string;
        description: string;
        subDescription: string;
      };
    };
  };
  previous: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PreviousChapterStep[];
    emphasis: string;
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { label: string; render: string; commit: string };
    rows: ComparisonRow[];
  };
  work: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WorkCard[];
  };
  flowPreview: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowPreviewStep[];
    resultTitle: string;
    resultItems: string[];
    importantNote: string;
  };
  warning: {
    eyebrow: string;
    title: { line1: string; line2: string };
    description: string;
    steps: WarningStep[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  cta: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const previousStepsKo: PreviousChapterStep[] = [
  { title: 'setState', description: '사용자 요청', iconName: 'mousePointer', tone: 'sky' },
  { title: 'update 객체 생성', description: 'update, lane 등', iconName: 'fileText', tone: 'cyan' },
  {
    title: 'Fiber / Root에 작업 표시',
    description: 'Fiber와 Root에 pending work 기록',
    iconName: 'network',
    tone: 'teal',
  },
  {
    title: 'Root 스케줄링 예약',
    description: 'ensureRootIsScheduled',
    iconName: 'clock',
    tone: 'emerald',
  },
  {
    title: '이제 Render Phase 시작',
    description: '계산 단계로 진입',
    iconName: 'play',
    tone: 'violet',
  },
];

const previousStepsEn: PreviousChapterStep[] = [
  { title: 'setState', description: 'User request', iconName: 'mousePointer', tone: 'sky' },
  {
    title: 'Build update object',
    description: 'update, lane, ...',
    iconName: 'fileText',
    tone: 'cyan',
  },
  {
    title: 'Mark work on Fiber / Root',
    description: 'pending work recorded on Fiber & Root',
    iconName: 'network',
    tone: 'teal',
  },
  {
    title: 'Schedule the Root',
    description: 'ensureRootIsScheduled',
    iconName: 'clock',
    tone: 'emerald',
  },
  {
    title: 'Now the Render Phase begins',
    description: 'Entering the compute step',
    iconName: 'play',
    tone: 'violet',
  },
];

const workCardsKo: WorkCard[] = [
  {
    title: '컴포넌트를 다시 실행한다',
    description: '함수 컴포넌트를 다시 호출해 최신 props / state 기준의 UI를 계산합니다.',
    iconName: 'refresh',
    tone: 'sky',
  },
  {
    title: '새로운 children을 얻는다',
    description: 'JSX가 React Element를 만들고, 이들이 다음 자식 목록으로 연결됩니다.',
    iconName: 'layers',
    tone: 'teal',
  },
  {
    title: '기존 Fiber와 비교한다',
    description: '이전 Fiber 트리와 비교하며 재사용할지, 새로 만들지 결정합니다.',
    iconName: 'gitBranch',
    tone: 'violet',
  },
  {
    title: '변경 흔적을 flags로 남긴다',
    description: '나중에 Commit Phase에서 무엇을 적용할지 Fiber에 flags로 기록합니다.',
    iconName: 'flag',
    tone: 'amber',
  },
];

const workCardsEn: WorkCard[] = [
  {
    title: 'Re-run the component',
    description:
      'Function components are called again to compute the UI based on the latest props / state.',
    iconName: 'refresh',
    tone: 'sky',
  },
  {
    title: 'Get the next children',
    description: 'JSX builds React Elements that become the next list of children.',
    iconName: 'layers',
    tone: 'teal',
  },
  {
    title: 'Diff against the previous Fiber',
    description: 'Compare with the prior Fiber tree to decide what to reuse or rebuild.',
    iconName: 'gitBranch',
    tone: 'violet',
  },
  {
    title: 'Record changes as flags',
    description: 'Mark Fibers with flags so the Commit Phase knows what to apply later.',
    iconName: 'flag',
    tone: 'amber',
  },
];

const flowPreviewStepsKo: FlowPreviewStep[] = [
  {
    number: '1',
    title: 'Root에 pending work 존재',
    description: 'Root.pendingLanes에 작업이 표시됨',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'work loop 시작',
    description: 'workLoopSync 또는 workLoopConcurrent 진입',
    tone: 'cyan',
  },
  {
    number: '3',
    title: 'performUnitOfWork',
    description: '하나의 Fiber 단위를 처리',
    tone: 'teal',
  },
  {
    number: '4',
    title: 'beginWork',
    description: '컴포넌트 실행 및 자식 계산 시작',
    tone: 'emerald',
  },
  {
    number: '5',
    title: 'child 계산',
    description: '새 자식 Fiber 생성 / 재사용 / 삭제 결정',
    tone: 'violet',
  },
  {
    number: '6',
    title: 'completeWork',
    description: '변경 내용 정리와 flags 상황 전달',
    tone: 'indigo',
  },
  {
    number: '7',
    title: 'Commit Phase 대기',
    description: '모든 계산이 끝나면 Commit Phase로 이동',
    tone: 'amber',
  },
];

const flowPreviewStepsEn: FlowPreviewStep[] = [
  {
    number: '1',
    title: 'Pending work on the Root',
    description: 'Root.pendingLanes has work marked',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'Start the work loop',
    description: 'Enter workLoopSync or workLoopConcurrent',
    tone: 'cyan',
  },
  { number: '3', title: 'performUnitOfWork', description: 'Process one Fiber unit', tone: 'teal' },
  {
    number: '4',
    title: 'beginWork',
    description: 'Run the component and start child work',
    tone: 'emerald',
  },
  {
    number: '5',
    title: 'Compute children',
    description: 'Decide to create / reuse / delete child Fibers',
    tone: 'violet',
  },
  {
    number: '6',
    title: 'completeWork',
    description: 'Wrap up changes and propagate flag state',
    tone: 'indigo',
  },
  {
    number: '7',
    title: 'Wait for the Commit Phase',
    description: 'Once compute finishes, hand off to Commit Phase',
    tone: 'amber',
  },
];

const warningStepsKo: WarningStep[] = [
  { title: '계산 중', subtitle: 'Render Phase', tone: 'sky', iconName: 'cpu' },
  { title: '변경 없음', subtitle: '화면 유지', tone: 'indigo', iconName: 'monitor' },
  { title: '실제 반영은', subtitle: 'Commit Phase에서', tone: 'teal', iconName: 'checkCircle' },
];

const warningStepsEn: WarningStep[] = [
  { title: 'Computing', subtitle: 'Render Phase', tone: 'sky', iconName: 'cpu' },
  { title: 'No change', subtitle: 'Screen unchanged', tone: 'indigo', iconName: 'monitor' },
  { title: 'Applied in', subtitle: 'the Commit Phase', tone: 'teal', iconName: 'checkCircle' },
];

const ko: RenderPhaseIntroContent = {
  hero: {
    badge: 'Render Phase · 1/10단계',
    title: { line1: 'React는', line2: '먼저 계산하고,', line3: '그 다음에 반영합니다.' },
    description:
      'Render Phase는 다음 화면을 계산하는 단계이고, Commit Phase는 계산된 변경을 실제 환경에 반영하는 단계입니다.',
    callout:
      '이 페이지는 Render Phase의 역할과 전체 흐름을 한눈에 이해하기 위한 개념 도입 페이지입니다.',
    diagram: {
      eyebrow: 'render → commit',
      renderCard: {
        title: 'Render Phase',
        description: '다음 화면 계산',
        subDescription: 'Fiber 트리 계산, 변경 흔적 기록',
      },
      commitCard: {
        title: 'Commit Phase',
        description: '실제 DOM 반영',
        subDescription: 'DOM 변경, refs, effects 실행',
      },
    },
  },
  previous: {
    number: '1',
    eyebrow: 'chapter-bridge',
    title: '앞 챕터와 연결',
    description:
      '이전 챕터에서 setState 호출이 Root 스케줄링까지 이어졌습니다. 이제 React가 실제로 다음 Fiber 트리를 계산하기 시작합니다.',
    steps: previousStepsKo,
    emphasis: '이제 React는 실제로 다음 Fiber 트리를 계산하기 시작합니다.',
  },
  comparison: {
    number: '2',
    eyebrow: 'render-vs-commit',
    title: 'Render Phase vs Commit Phase 비교',
    description: '두 단계의 책임을 항목별로 비교합니다. DOM 변경 여부가 가장 큰 분기점입니다.',
    columns: {
      label: '구분',
      render: 'Render Phase (계산 단계)',
      commit: 'Commit Phase (반영 단계)',
    },
    rows: [
      { label: '핵심 질문', render: '무엇을 바꿀까?', commit: '실제로 어떻게 반영할까?' },
      {
        label: '주요 대상',
        render: ['Fiber 트리', '메모리 구조'],
        commit: ['실제 환경', 'DOM 등'],
      },
      {
        label: 'DOM 변경 여부',
        render: '발생하지 않음',
        commit: '발생함',
        emphasis: true,
        iconKind: 'cross-check',
      },
      {
        label: '대표 작업',
        render: [
          '컴포넌트 다시 실행',
          '자식 재조정',
          '변경 흔적을 flags로 기록',
          '새 Fiber 트리 구성',
        ],
        commit: [
          'DOM 삽입 / 수정 / 삭제',
          'refs 적용 / 해제',
          'layout effects / passive effects 실행',
        ],
      },
      {
        label: '실행 위치',
        render: ['JavaScript', '브라우저 화면은 그대로'],
        commit: ['실제 DOM', '호스트 환경 반영'],
      },
    ],
  },
  work: {
    number: '3',
    eyebrow: 'inside-render-phase',
    title: 'Render Phase에서 실제로 일어나는 일',
    description: 'Render Phase가 하는 핵심 작업 4가지를 카드로 정리합니다.',
    cards: workCardsKo,
  },
  flowPreview: {
    number: '4',
    eyebrow: 'flow-map',
    title: 'Render Phase 전체 흐름 미리보기',
    description: '이 챕터에서 반복해서 마주칠 Render Phase 흐름 지도입니다.',
    steps: flowPreviewStepsKo,
    resultTitle: '이 흐름의 결과',
    resultItems: [
      '다음 Fiber 트리가 완성된다.',
      '변경해야 할 내용이 flags로 정리된다.',
      '아직 화면은 그대로 유지된다.',
    ],
    importantNote: '중요: Commit Phase가 실행되기 전까지 브라우저 화면은 절대 바뀌지 않습니다.',
  },
  warning: {
    eyebrow: 'dom-not-changed',
    title: {
      line1: '중요: Render Phase에서는',
      line2: '브라우저 화면이 아직 바뀌지 않습니다.',
    },
    description: 'React는 먼저 어떤 변화가 필요한지 계산만 합니다.',
    steps: warningStepsKo,
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question:
      'Render Phase에서 새로운 div가 필요하다고 판단되면 즉시 DOM에 appendChild가 실행될까?',
    answer: '아니다. 실제 DOM 반영은 Commit Phase에서 일어난다.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: '다음 단계로',
    description:
      'Render Phase가 계산 단계라는 점을 이해했다면, 이제 React가 그 계산을 어떤 반복 구조로 진행하는지 살펴봅니다.',
    buttonLabel: '다음: workLoopSync와 workLoopConcurrent',
    buttonHref: '/work-loop',
  },
};

const en: RenderPhaseIntroContent = {
  hero: {
    badge: 'Render Phase · 1/10',
    title: { line1: 'React computes first,', line2: 'then commits', line3: 'the changes.' },
    description:
      'The Render Phase computes the next screen. The Commit Phase applies the computed changes to the real environment.',
    callout:
      'This page is a conceptual intro that walks through the role and overall flow of the Render Phase.',
    diagram: {
      eyebrow: 'render → commit',
      renderCard: {
        title: 'Render Phase',
        description: 'Compute next screen',
        subDescription: 'Build Fiber tree, record change marks',
      },
      commitCard: {
        title: 'Commit Phase',
        description: 'Apply to the real DOM',
        subDescription: 'DOM mutations, refs, effects',
      },
    },
  },
  previous: {
    number: '1',
    eyebrow: 'chapter-bridge',
    title: 'Bridge from the previous chapter',
    description:
      'The previous chapter took setState all the way to scheduling the Root. Now React actually starts computing the next Fiber tree.',
    steps: previousStepsEn,
    emphasis: 'Now React actually starts computing the next Fiber tree.',
  },
  comparison: {
    number: '2',
    eyebrow: 'render-vs-commit',
    title: 'Render Phase vs Commit Phase',
    description:
      'Compare the responsibilities of the two phases row by row. The biggest fork is whether the DOM changes.',
    columns: {
      label: 'Aspect',
      render: 'Render Phase (compute)',
      commit: 'Commit Phase (apply)',
    },
    rows: [
      {
        label: 'Core question',
        render: 'What should change?',
        commit: 'How do we actually apply it?',
      },
      {
        label: 'Main target',
        render: ['Fiber tree', 'In-memory structure'],
        commit: ['Real environment', 'DOM, etc.'],
      },
      {
        label: 'DOM changes?',
        render: 'Does not happen',
        commit: 'Happens',
        emphasis: true,
        iconKind: 'cross-check',
      },
      {
        label: 'Representative work',
        render: [
          'Re-run components',
          'Reconcile children',
          'Record changes as flags',
          'Build the next Fiber tree',
        ],
        commit: [
          'DOM insert / update / delete',
          'Attach / detach refs',
          'Run layout effects / passive effects',
        ],
      },
      {
        label: 'Where it runs',
        render: ['JavaScript', 'Browser screen unchanged'],
        commit: ['Real DOM', 'Reflected in the host'],
      },
    ],
  },
  work: {
    number: '3',
    eyebrow: 'inside-render-phase',
    title: 'What actually happens during the Render Phase',
    description: 'Four core jobs done by the Render Phase, summarized as cards.',
    cards: workCardsEn,
  },
  flowPreview: {
    number: '4',
    eyebrow: 'flow-map',
    title: 'Render Phase flow preview',
    description: 'The Render Phase flow map you will revisit throughout this chapter.',
    steps: flowPreviewStepsEn,
    resultTitle: 'Outcome of this flow',
    resultItems: [
      'The next Fiber tree is complete.',
      'Pending changes are summarized as flags.',
      'The screen still stays the same.',
    ],
    importantNote: 'Important: until the Commit Phase runs, the browser screen never changes.',
  },
  warning: {
    eyebrow: 'dom-not-changed',
    title: {
      line1: 'Important: during the Render Phase,',
      line2: 'the browser screen has not changed yet.',
    },
    description: 'React first only computes what needs to change.',
    steps: warningStepsEn,
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: 'Mini Quiz',
    question:
      'If the Render Phase decides a new div is needed, will appendChild fire on the DOM immediately?',
    answer: 'No. Real DOM updates only happen in the Commit Phase.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: 'Next step',
    description:
      'Now that you understand the Render Phase as a compute step, see what loop structure React uses to drive that compute.',
    buttonLabel: 'Next: workLoopSync and workLoopConcurrent',
    buttonHref: '/work-loop',
  },
};

export const renderPhaseIntroContent: Record<Locale, RenderPhaseIntroContent> = {
  ko,
  en,
};
