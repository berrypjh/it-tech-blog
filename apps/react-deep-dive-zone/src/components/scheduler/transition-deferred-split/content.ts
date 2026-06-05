import type { Locale } from '@it-tech-blog/preferences';

export type ResponseAccent =
  | 'emerald' // immediate input / transition
  | 'blue' // deferred / later / scheduler
  | 'rose' // general update problem
  | 'violet' // transition context / abstraction
  | 'teal'; // mixed accent (gauge etc)

export type FlowStep = {
  title: string;
  description: string;
  accent: ResponseAccent;
};

export type TimelineStep = {
  title: string;
  accent: 'emerald' | 'blue';
  emphasis?: boolean;
};

export type DeferredFlowCard = {
  title: string;
  bottom: string;
  description: string;
  accent: ResponseAccent;
};

export type MissionCard =
  | {
      kind: 'link';
      title: string;
      button: string;
      href: string;
      accent: ResponseAccent;
    }
  | {
      kind: 'keywords';
      title: string;
      keywords: string[];
      accent: ResponseAccent;
    };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: ResponseAccent;
};

export type TransitionDeferredContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    highlight: string;
    subtitle: string;
    searchInput: {
      title: string;
      value: string;
      immediateLabel: string;
      immediateBody: string;
    };
    resultList: {
      title: string;
      subtitle: string;
      deferredLabel: string;
      deferredBody: string;
    };
    arrowLabelTop: string;
    arrowLabelBottom: string;
  };
  question: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
  };
  problem: {
    number: string;
    title: string;
    inputCard: {
      title: string;
      badge: string;
      points: string[];
    };
    gauge: {
      title: string;
      high: string;
      low: string;
    };
    resultCard: {
      title: string;
      badge: string;
      points: string[];
    };
  };
  startTransition: {
    number: string;
    title: string;
    code: string;
    stateSeparationTitle: string;
    inputState: {
      title: string;
      subtitle: string;
      value: string;
      action: string;
      badge: string;
    };
    listState: {
      title: string;
      subtitle: string;
      value: string;
      badge: string;
    };
    separatorLabel: string;
  };
  transitionFlow: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  deferredValue: {
    number: string;
    title: string;
    code: string;
    mainMessage: string;
    cards: DeferredFlowCard[];
  };
  deferredTimeline: {
    number: string;
    title: string;
    legend: { label: string; accent: 'emerald' | 'blue' }[];
    steps: TimelineStep[];
  };
  codePreview: {
    number: string;
    title: string;
    cardA: {
      title: string;
      fileLabel: string;
      code: string;
      note: string;
    };
    cardB: {
      title: string;
      fileLabel: string;
      code: string;
      note: string;
    };
    githubCard: {
      title: string;
      body: string;
      button: string;
      href: string;
    };
  };
  simulation: {
    number: string;
    title: string;
    bad: {
      title: string;
      description: string;
      inputValue: string;
      loadingText: string;
    };
    good: {
      title: string;
      description: string;
      inputValue: string;
      pendingText: string;
      immediateBadge: string;
    };
    howTo: {
      title: string;
      steps: string[];
      legendImmediate: string;
      legendDeferred: string;
    };
    vsLabel: string;
  };
  mission: {
    number: string;
    title: string;
    cards: MissionCard[];
  };
  takeaways: {
    number: string;
    title: string;
    cards: TakeawayCard[];
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      button: string;
      href: string;
    };
  };
};

const USE_TRANSITION_CODE =
  'const [isPending, startTransition] = useTransition();\n\n' +
  'function handleChange(next) {\n' +
  '  setInput(next);\n' +
  '  startTransition(() => {\n' +
  '    setFilteredQuery(next);\n' +
  '  });\n' +
  '}';

const DEFERRED_CODE = 'const deferredQuery = useDeferredValue(query);';

const CODE_A_KO = 'if (transition !== null) {\n  return requestTransitionLane(transition);\n}';
const CODE_B_KO = 'workInProgressDeferredLane = claimNextTransitionDeferredLane();';

const REACT_FIBER_WORK_LOOP_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const USE_TRANSITION_DOC = 'https://react.dev/reference/react/useTransition';
const USE_DEFERRED_DOC = 'https://react.dev/reference/react/useDeferredValue';
const REACT_REPO_SEARCH =
  'https://github.com/search?q=repo%3Afacebook%2Freact+requestTransitionLane&type=code';

const ko: TransitionDeferredContent = {
  hero: {
    badge: 'Scheduler · 5/10단계',
    titleLines: ['입력은 먼저 반응하고,', '무거운 UI는 뒤로 미룬다'],
    highlight: '무거운 UI는 뒤로 미룬다',
    subtitle:
      'Transition과 Deferred Update는 긴급하지 않은 렌더링을 뒤로 미루어 사용자 입력 반응성을 유지합니다.',
    searchInput: {
      title: '검색 입력',
      value: 'react internals',
      immediateLabel: '즉시 반영',
      immediateBody: '입력 반응은 바로!',
    },
    resultList: {
      title: '검색 결과',
      subtitle: '무거운 리스트',
      deferredLabel: '나중에 업데이트',
      deferredBody: '조금 늦어도 괜찮아요',
    },
    arrowLabelTop: '입력은 먼저!',
    arrowLabelBottom: '결과는 뒤로!',
  },
  question: {
    number: '2',
    eyebrow: '오늘의 질문',
    title: '오늘의 질문',
    question:
      'React는 어떻게 입력창 타이핑은 빠르게 유지하면서, 검색 결과 리스트는 뒤로 미룰 수 있을까?',
  },
  problem: {
    number: '3',
    title: 'Transition이 해결하는 문제',
    inputCard: {
      title: '입력 UI',
      badge: '즉시 업데이트 필요',
      points: ['사용자 입력은 즉시 반응해야 함', '타이핑 지연은 UX를 해침'],
    },
    gauge: {
      title: '우선순위 차이',
      high: '높음 (긴급)',
      low: '낮음 (비긴급)',
    },
    resultCard: {
      title: '결과 리스트',
      badge: '조금 늦어도 괜찮음',
      points: ['계산/렌더 비용이 큼', '조금 늦어도 사용에 문제 없음'],
    },
  },
  startTransition: {
    number: '4',
    title: 'useTransition / startTransition 사용자 코드',
    code: USE_TRANSITION_CODE,
    stateSeparationTitle: '상태는 분리되어 관리됩니다',
    inputState: {
      title: '입력 상태',
      subtitle: '높은 우선순위',
      value: 'input',
      action: 'setInput',
      badge: '즉시 반영',
    },
    listState: {
      title: '리스트 상태',
      subtitle: '낮은 우선순위',
      value: 'filteredQuery',
      badge: '뒤로 미룬 렌더',
    },
    separatorLabel: '분리',
  },
  transitionFlow: {
    number: '5',
    title: '내부 lane 연결 (startTransition 경로)',
    steps: [
      {
        title: 'startTransition',
        description: '개발자가 transition 문맥 시작',
        accent: 'emerald',
      },
      {
        title: 'transition 문맥 생성',
        description: '전역 transition 컨텍스트 설정 (ReactCurrentBatchConfig)',
        accent: 'violet',
      },
      {
        title: 'requestUpdateLane',
        description: '업데이트 시도, Fiber에 대한 lane 요청',
        accent: 'blue',
      },
      {
        title: 'requestTransitionLane',
        description: 'Deferred Lane 반환, Transition의 낮은 lane',
        accent: 'blue',
      },
      {
        title: '낮은 우선순위 후속 렌더',
        description: '나중에 렌더링 수행',
        accent: 'violet',
      },
    ],
  },
  deferredValue: {
    number: '6',
    title: 'useDeferredValue 사용자 코드',
    code: DEFERRED_CODE,
    mainMessage: '값의 소비를 뒤로 미룹니다',
    cards: [
      {
        title: '현재 query',
        bottom: '즉시 변경',
        description: '높은 우선순위로 즉시 업데이트되는 원본 값',
        accent: 'emerald',
      },
      {
        title: 'deferredQuery',
        bottom: '뒤로 미룬 복사본',
        description: '낮은 우선순위 lane을 따라 따라가는 값',
        accent: 'blue',
      },
      {
        title: '느리게 따라오는 UI',
        bottom: '무거운 UI가 이 값을 사용',
        description: '실제로 deferredQuery를 소비하는 컴포넌트',
        accent: 'violet',
      },
    ],
  },
  deferredTimeline: {
    number: '7',
    title: 'deferred lane 연결 (useDeferredValue 경로)',
    legend: [
      { label: '즉시 (높음)', accent: 'emerald' },
      { label: '뒤로 미룸 (낮음)', accent: 'blue' },
    ],
    steps: [
      { title: '입력 변경', accent: 'emerald' },
      { title: '입력 UI 반영', accent: 'emerald' },
      { title: 'deferred lane 스케줄', accent: 'blue', emphasis: true },
      { title: '리스트 렌더 시작', accent: 'blue' },
      { title: '완료', accent: 'blue' },
    ],
  },
  codePreview: {
    number: '9',
    title: '실제 코드 미리보기',
    cardA: {
      title: 'A. Transition lane 요청',
      fileLabel: 'ReactFiberWorkLoop.js',
      code: CODE_A_KO,
      note: '현재 transition 문맥이 있다면 Transition lane을 반환합니다.',
    },
    cardB: {
      title: 'B. Deferred lane 할당',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_B_KO,
      note: 'useDeferredValue는 다음 Deferred lane을 할당받습니다.',
    },
    githubCard: {
      title: '전체 소스 확인하기',
      body: 'React의 실제 구현을 GitHub에서 확인해 보세요.',
      button: 'GitHub에서 전체 코드 보기',
      href: REACT_FIBER_WORK_LOOP_URL,
    },
  },
  simulation: {
    number: '10',
    title: '입력 반응성 체험 보드',
    bad: {
      title: '일반 update',
      description: '입력 + 리스트 모두 즉시 렌더 → 타이핑 지연 느낌',
      inputValue: 'react in...',
      loadingText: '계산 중...',
    },
    good: {
      title: 'transition / deferred',
      description: '입력 먼저 반영, 리스트는 낮은 우선순위 렌더',
      inputValue: 'react internals',
      pendingText: '업데이트 대기 중...',
      immediateBadge: '즉시 반영',
    },
    howTo: {
      title: '체험 방법',
      steps: [
        '입력을 빠르게 타이핑해 보세요.',
        '리스트 업데이트 시점을 비교해 보세요.',
        '어떤 방식이 더 부드러운지 느껴보세요.',
      ],
      legendImmediate: '즉시 (높은 우선순위)',
      legendDeferred: '뒤로 미룸 (낮은 우선순위)',
    },
    vsLabel: 'VS',
  },
  mission: {
    number: '11',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        kind: 'link',
        title: 'useTransition 공식 문서에서 non-blocking update 설명을 읽는다',
        button: '공식 문서 보기',
        href: USE_TRANSITION_DOC,
        accent: 'emerald',
      },
      {
        kind: 'link',
        title: 'useDeferredValue 공식 문서에서 defer 동작을 확인한다',
        button: '공식 문서 보기',
        href: USE_DEFERRED_DOC,
        accent: 'blue',
      },
      {
        kind: 'link',
        title: 'requestTransitionLane과 requestDeferredLane 경로를 코드에서 찾아본다',
        button: '코드 검색 링크 보기',
        href: REACT_REPO_SEARCH,
        accent: 'violet',
      },
      {
        kind: 'keywords',
        title: '관련 키워드 예시',
        keywords: [
          'requestTransitionLane',
          'requestDeferredLane',
          'ReactCurrentBatchConfig',
          'claimNextTransitionDeferredLane',
        ],
        accent: 'teal',
      },
    ],
  },
  takeaways: {
    number: '12',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: 'Transition은 업데이트를 non-blocking으로 표시한다.',
        description: '개발자가 검색처럼 낮은 우선순위로 보낸다.',
        accent: 'emerald',
      },
      {
        number: '02',
        title: 'Deferred는 특정 UI 소비를 뒤로 미룬다.',
        description: '값의 소비를 지연시켜 무거운 UI를 늦춘다.',
        accent: 'blue',
      },
      {
        number: '03',
        title: '둘 다 내부적으로 낮은 우선순위 scheduling과 연결된다.',
        description: '사용자 입력의 반응성을 최우선으로 보장한다.',
        accent: 'violet',
      },
    ],
    cta: {
      eyebrow: '다음 단계로 이동하기',
      title: '다음: root pending work 보기',
      description: '루트의 pending work가 어떻게 스케줄되는지 알아보세요.',
      button: '다음 페이지로 이동',
      href: '/root-pending-work',
    },
  },
};

const en: TransitionDeferredContent = {
  hero: {
    badge: 'Scheduler · 5/10',
    titleLines: ['Input responds first,', 'heavy UI gets deferred'],
    highlight: 'heavy UI gets deferred',
    subtitle:
      'Transition and Deferred Update push non-urgent rendering to the back so input responsiveness stays intact.',
    searchInput: {
      title: 'Search input',
      value: 'react internals',
      immediateLabel: 'Reflected instantly',
      immediateBody: 'Input reacts right away!',
    },
    resultList: {
      title: 'Search result',
      subtitle: 'Heavy list',
      deferredLabel: 'Updated later',
      deferredBody: 'A little delay is fine',
    },
    arrowLabelTop: 'Input first!',
    arrowLabelBottom: 'Result later!',
  },
  question: {
    number: '2',
    eyebrow: "Today's question",
    title: "Today's question",
    question: 'How does React keep input typing fast while deferring the heavy result list?',
  },
  problem: {
    number: '3',
    title: 'The problem Transition solves',
    inputCard: {
      title: 'Input UI',
      badge: 'Needs immediate update',
      points: ['User input must feel instant', 'Typing lag hurts UX'],
    },
    gauge: {
      title: 'Priority difference',
      high: 'High (urgent)',
      low: 'Low (non-urgent)',
    },
    resultCard: {
      title: 'Result list',
      badge: 'A little late is fine',
      points: ['Heavy to compute / render', 'A bit of delay is fine to use'],
    },
  },
  startTransition: {
    number: '4',
    title: 'useTransition / startTransition user code',
    code: USE_TRANSITION_CODE,
    stateSeparationTitle: 'State is managed separately',
    inputState: {
      title: 'Input state',
      subtitle: 'High priority',
      value: 'input',
      action: 'setInput',
      badge: 'Instant',
    },
    listState: {
      title: 'List state',
      subtitle: 'Low priority',
      value: 'filteredQuery',
      badge: 'Deferred render',
    },
    separatorLabel: 'split',
  },
  transitionFlow: {
    number: '5',
    title: 'Internal lane wiring (startTransition path)',
    steps: [
      {
        title: 'startTransition',
        description: 'Developer enters transition context',
        accent: 'emerald',
      },
      {
        title: 'transition context created',
        description: 'Set global transition (ReactCurrentBatchConfig)',
        accent: 'violet',
      },
      {
        title: 'requestUpdateLane',
        description: 'Update attempt, request a lane for the Fiber',
        accent: 'blue',
      },
      {
        title: 'requestTransitionLane',
        description: 'Returns a Deferred Lane (low priority lane for transition)',
        accent: 'blue',
      },
      {
        title: 'Low-priority follow-up render',
        description: 'Render later',
        accent: 'violet',
      },
    ],
  },
  deferredValue: {
    number: '6',
    title: 'useDeferredValue user code',
    code: DEFERRED_CODE,
    mainMessage: 'It defers the consumption of the value',
    cards: [
      {
        title: 'Current query',
        bottom: 'Changes instantly',
        description: 'Original value updated at high priority',
        accent: 'emerald',
      },
      {
        title: 'deferredQuery',
        bottom: 'Deferred copy',
        description: 'Follows along at low priority via a lane',
        accent: 'blue',
      },
      {
        title: 'Slow follower UI',
        bottom: 'Heavy UI uses this value',
        description: 'The component actually consuming deferredQuery',
        accent: 'violet',
      },
    ],
  },
  deferredTimeline: {
    number: '7',
    title: 'Deferred lane wiring (useDeferredValue path)',
    legend: [
      { label: 'Immediate (high)', accent: 'emerald' },
      { label: 'Deferred (low)', accent: 'blue' },
    ],
    steps: [
      { title: 'Input change', accent: 'emerald' },
      { title: 'Input UI updated', accent: 'emerald' },
      { title: 'Schedule deferred lane', accent: 'blue', emphasis: true },
      { title: 'List render begins', accent: 'blue' },
      { title: 'Complete', accent: 'blue' },
    ],
  },
  codePreview: {
    number: '9',
    title: 'Source code preview',
    cardA: {
      title: 'A. Transition lane request',
      fileLabel: 'ReactFiberWorkLoop.js',
      code: CODE_A_KO,
      note: 'When a transition context is active, return a Transition lane.',
    },
    cardB: {
      title: 'B. Deferred lane assignment',
      fileLabel: 'ReactFiberRootScheduler.js',
      code: CODE_B_KO,
      note: 'useDeferredValue claims the next Deferred lane.',
    },
    githubCard: {
      title: 'View the full source',
      body: "Check React's actual implementation on GitHub.",
      button: 'See the full code on GitHub',
      href: REACT_FIBER_WORK_LOOP_URL,
    },
  },
  simulation: {
    number: '10',
    title: 'Input responsiveness playground',
    bad: {
      title: 'Plain update',
      description: 'Input and list render together immediately → typing feels laggy',
      inputValue: 'react in...',
      loadingText: 'Computing...',
    },
    good: {
      title: 'transition / deferred',
      description: 'Input lands first; list renders at low priority',
      inputValue: 'react internals',
      pendingText: 'Update pending...',
      immediateBadge: 'Instant',
    },
    howTo: {
      title: 'Try it',
      steps: [
        'Type quickly in the input.',
        'Compare when each list updates.',
        'Feel which one is smoother.',
      ],
      legendImmediate: 'Immediate (high priority)',
      legendDeferred: 'Deferred (low priority)',
    },
    vsLabel: 'VS',
  },
  mission: {
    number: '11',
    title: 'Walk it in the source',
    cards: [
      {
        kind: 'link',
        title: 'Read the official useTransition docs for non-blocking updates',
        button: 'Open the docs',
        href: USE_TRANSITION_DOC,
        accent: 'emerald',
      },
      {
        kind: 'link',
        title: 'Read the official useDeferredValue docs',
        button: 'Open the docs',
        href: USE_DEFERRED_DOC,
        accent: 'blue',
      },
      {
        kind: 'link',
        title: 'Find requestTransitionLane and requestDeferredLane in the source',
        button: 'Open code search',
        href: REACT_REPO_SEARCH,
        accent: 'violet',
      },
      {
        kind: 'keywords',
        title: 'Related keywords',
        keywords: [
          'requestTransitionLane',
          'requestDeferredLane',
          'ReactCurrentBatchConfig',
          'claimNextTransitionDeferredLane',
        ],
        accent: 'teal',
      },
    ],
  },
  takeaways: {
    number: '12',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'Transition marks an update as non-blocking.',
        description: 'The developer opts certain updates (like search) into low priority.',
        accent: 'emerald',
      },
      {
        number: '02',
        title: 'Deferred defers a particular UI consumption.',
        description: 'It delays consuming a value to postpone the heavy UI.',
        accent: 'blue',
      },
      {
        number: '03',
        title: 'Both wire into low-priority scheduling internally.',
        description: 'Input responsiveness stays the top priority.',
        accent: 'violet',
      },
    ],
    cta: {
      eyebrow: 'Move on to the next step',
      title: 'Next: root pending work',
      description: 'Learn how the root pending work gets scheduled.',
      button: 'Go to next page',
      href: '/root-pending-work',
    },
  },
};

export const transitionDeferredContent: Record<Locale, TransitionDeferredContent> = { ko, en };
