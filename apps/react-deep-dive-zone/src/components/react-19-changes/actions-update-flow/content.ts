import type { Locale } from '@it-tech-blog/preferences';

import type { StateKey } from './tone';

export type IconKey =
  | 'clock'
  | 'triangle-alert'
  | 'send'
  | 'zap'
  | 'rotate'
  | 'shield-alert'
  | 'shield-check'
  | 'sparkles'
  | 'workflow'
  | 'play-circle'
  | 'mouse-click'
  | 'server'
  | 'check-circle'
  | 'x-circle'
  | 'layers'
  | 'compass'
  | 'target';

export type StateCard = {
  state: StateKey;
  title: string;
  caption: string;
  keyword: string;
  iconKey: IconKey;
};

export type QuadrantState = {
  state: StateKey;
  title: string;
  description: string;
  arrowApi: string;
  iconKey: IconKey;
};

export type SupportCard = {
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ApiCard = {
  number: string;
  hookName: string;
  langBadge: 'TS' | 'JS';
  code: string;
  state: StateKey;
  points: string[];
};

export type ComparisonRow = {
  hookName: string;
  state: StateKey;
  role: string;
  problem: string;
  where: string;
  returnValue: string;
};

export type SimulatorScenario = 'success' | 'failure';

export type FlowStep = {
  title: string;
  caption: string;
  successState: StateKey | 'neutral';
  failureState?: StateKey | 'neutral';
};

export type DocCard = {
  hookName: string;
  state: StateKey;
  when: string;
  iconKey: IconKey;
  cta: { label: string; href: string };
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
};

export type TakeawayCard = {
  number: string;
  state: StateKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ActionsUpdateFlowContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    subtitleLines: [string, string, string];
    diagram: {
      centerTitle: string;
      centerSubtitle: string;
      cards: StateCard[];
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportCards: SupportCard[];
  };
  legacySubmit: {
    number: string;
    eyebrow: string;
    title: string;
    codeFile: string;
    code: string;
    problemTitle: string;
    problems: string[];
  };
  quadrant: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    centerTitle: string;
    centerSubtitle: string;
    states: QuadrantState[];
  };
  apiCards: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ApiCard[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: {
      api: string;
      role: string;
      problem: string;
      where: string;
      returnValue: string;
    };
    rows: ComparisonRow[];
  };
  simulator: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    scenarioLabel: string;
    scenarios: { key: SimulatorScenario; label: string; description: string }[];
    defaultScenario: SimulatorScenario;
    flowLabel: string;
    steps: FlowStep[];
    failureNote: string;
    successNote: string;
  };
  officialDocs: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: DocCard[];
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: Mission[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ActionsUpdateFlowContent = {
  hero: {
    badge: 'React 19 변화 · 2/10단계',
    titleLines: ['Actions는 왜', '단순한 폼 API가 아니라', '업데이트 모델의 확장일까?'],
    subtitleLines: [
      'React 19는 비동기 UI 업데이트를',
      'pending, error, optimistic state까지 포함해',
      '더 선언적으로 다룰 수 있게 만들었습니다.',
    ],
    diagram: {
      centerTitle: 'Action',
      centerSubtitle: '(Core)',
      cards: [
        {
          state: 'pending',
          title: 'Pending State',
          caption: '진행 상태 추적',
          keyword: 'isPending',
          iconKey: 'clock',
        },
        {
          state: 'error',
          title: 'Error Handling',
          caption: '액션 결과 관리',
          keyword: 'error',
          iconKey: 'triangle-alert',
        },
        {
          state: 'form',
          title: 'Form Submission',
          caption: '폼 제출 흐름 연결',
          keyword: 'formAction',
          iconKey: 'send',
        },
        {
          state: 'optimistic',
          title: 'Optimistic Update',
          caption: '낙관적 UI 즉시 반영',
          keyword: 'optimistic',
          iconKey: 'zap',
        },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      'Actions는 왜 form 제출 편의 기능을 넘어',
      'React의 업데이트 흐름 변화로 봐야 할까?',
    ],
    supportCards: [
      {
        title: '업데이트 모델 확장',
        body: '상태/서버/폼/낙관적 UI 포함',
        iconKey: 'layers',
      },
      {
        title: '선언적 흐름',
        body: '코드를 줄이고 일관성 향상',
        iconKey: 'sparkles',
      },
      {
        title: '폼과 UI의 통합',
        body: '서버/클라이언트 경계 연결',
        iconKey: 'workflow',
      },
    ],
  },
  legacySubmit: {
    number: '03',
    eyebrow: 'Before',
    title: '이전 async submit의 번거로움',
    codeFile: 'before/handle-submit.js',
    code: `async function handleSubmit() {
  setPending(true);

  try {
    await updateName(name);
    setError(null);
  } catch (error) {
    setError(error);
  } finally {
    setPending(false);
  }
}`,
    problemTitle: '기존 방식의 문제',
    problems: [
      '수동으로 pending 상태 관리',
      '수동으로 error 상태 관리',
      '로딩/에러 상태가 여러 컴포넌트에 분산',
      '낙관적 UI는 별도 로직으로 구현해야 함',
      '폼 제출과 UI 업데이트가 분리되어 복잡',
    ],
  },
  quadrant: {
    number: '04',
    eyebrow: 'Action as Hub',
    title: 'Actions가 묶는 4가지 상태',
    description: '한 번의 선언으로 pending · error · form submission · optimistic이 함께 흐릅니다.',
    centerTitle: 'Action',
    centerSubtitle: '(Declarative Flow)',
    states: [
      {
        state: 'pending',
        title: 'Pending',
        description: 'Action 실행 중 상태 추적',
        arrowApi: 'isPending',
        iconKey: 'clock',
      },
      {
        state: 'error',
        title: 'Error',
        description: '액션 실행 결과 에러 관리',
        arrowApi: 'error',
        iconKey: 'triangle-alert',
      },
      {
        state: 'form',
        title: 'Form Submission',
        description: '폼 제출과 액션 실행 연결',
        arrowApi: 'formAction',
        iconKey: 'send',
      },
      {
        state: 'optimistic',
        title: 'Optimistic Update',
        description: '서버 응답 전 UI 미리 갱신',
        arrowApi: 'useOptimistic',
        iconKey: 'zap',
      },
    ],
  },
  apiCards: {
    number: '05',
    eyebrow: 'Three Hooks',
    title: '세 개의 hook으로 분리되어 들어온다',
    description:
      'useActionState · useOptimistic · useFormStatus는 같은 모델의 서로 다른 조각을 담당합니다.',
    cards: [
      {
        number: '05-A',
        hookName: 'useActionState',
        langBadge: 'TS',
        state: 'form',
        code: `const [state, formAction, isPending] = useActionState(
  updateNameAction,
  initialState,
);`,
        points: [
          'Action 실행 결과 상태(state)를 관리',
          'form action으로 바로 연결 가능(formAction)',
          '실행 중 상태를 isPending으로 제공',
        ],
      },
      {
        number: '05-B',
        hookName: 'useOptimistic',
        langBadge: 'TS',
        state: 'optimistic',
        code: `const [optimisticCount, addOptimistic] = useOptimistic(
  initialCount,
  (count, delta) => {
    return count + delta;
  },
);`,
        points: [
          '서버 응답 전에도 UI를 즉시 갱신',
          '낙관적 UI를 실패 시 자동으로 롤백',
          '사용자 경험을 부드럽게 개선',
        ],
      },
      {
        number: '05-C',
        hookName: 'useFormStatus',
        langBadge: 'TS',
        state: 'pending',
        code: `const { pending } = useFormStatus();`,
        points: [
          '현재 form action의 진행 상태를 읽음',
          '하위 컴포넌트에서 pending 상태 확인 가능',
          '제출 버튼 비활성화 등에 활용',
        ],
      },
    ],
  },
  comparison: {
    number: '06',
    eyebrow: 'Role Table',
    title: '세 API의 역할 비교',
    description: '같은 단어를 다른 API가 다루는 부분을 표 한 장으로 정리합니다.',
    columns: {
      api: 'API',
      role: '핵심 역할',
      problem: '해결하는 문제',
      where: '어디서 사용?',
      returnValue: '대표 값',
    },
    rows: [
      {
        hookName: 'useActionState',
        state: 'form',
        role: 'Action 결과 상태 관리 + form action 제공',
        problem: '결과/에러/로딩 상태를 일관되게 관리',
        where: '폼 컴포넌트 또는 상태 관리가 필요한 컴포넌트',
        returnValue: 'state, formAction, isPending',
      },
      {
        hookName: 'useOptimistic',
        state: 'optimistic',
        role: '낙관적 UI 관리',
        problem: '서버 응답 전 즉각 피드백 제공, 실패 시 롤백',
        where: '좋아요, 카운트, 리스트 추가 등 즉시 반응이 필요한 UI',
        returnValue: 'optimisticValue, addOptimistic',
      },
      {
        hookName: 'useFormStatus',
        state: 'pending',
        role: '폼 제출 진행 상태 제공',
        problem: '하위 컴포넌트에서 pending을 쉽게 읽을 수 있게 함',
        where: '버튼, 로딩 인디케이터 등 하위 폼 UI',
        returnValue: 'pending, data, method, action',
      },
    ],
  },
  simulator: {
    number: '07',
    eyebrow: 'Action Flow Simulator',
    title: '액션 흐름 시뮬레이터',
    description: '성공과 실패가 같은 흐름의 어느 지점에서 갈리는지 직접 따라가 봅니다.',
    scenarioLabel: '시나리오 선택',
    scenarios: [
      {
        key: 'success',
        label: '성공 시나리오',
        description: '서버 응답이 정상이면 낙관적 UI가 그대로 확정됩니다.',
      },
      {
        key: 'failure',
        label: '실패 시나리오',
        description: '서버 실패 시 error가 설정되고 낙관적 UI가 롤백됩니다.',
      },
    ],
    defaultScenario: 'success',
    flowLabel: '6단계 흐름',
    steps: [
      {
        title: '사용자 submit',
        caption: '폼 제출 이벤트 발생',
        successState: 'form',
        failureState: 'form',
      },
      {
        title: 'Action 시작',
        caption: 'Server Action 호출',
        successState: 'form',
        failureState: 'form',
      },
      {
        title: 'pending = true',
        caption: 'isPending 활성화',
        successState: 'pending',
        failureState: 'pending',
      },
      {
        title: 'optimistic UI',
        caption: '낙관적 업데이트 반영',
        successState: 'optimistic',
        failureState: 'optimistic',
      },
      {
        title: '서버 성공',
        caption: '데이터 저장 완료',
        successState: 'optimistic',
        failureState: 'neutral',
      },
      {
        title: '최종 UI 반영',
        caption: '정상 상태로 확정',
        successState: 'optimistic',
        failureState: 'neutral',
      },
    ],
    failureNote:
      '실패 시나리오에서는 5단계에서 서버 실패 → error 설정 → 낙관적 UI 롤백으로 전환됩니다.',
    successNote: '성공 시나리오에서는 5~6단계에서 서버 응답이 그대로 최종 UI로 확정됩니다.',
  },
  officialDocs: {
    number: '08',
    eyebrow: 'Docs',
    title: '실제 코드 / 문서 확인',
    description: '관련 hook의 공식 문서로 바로 이동해 더 깊게 읽어볼 수 있습니다.',
    cards: [
      {
        hookName: 'useActionState',
        state: 'form',
        when: 'Action 결과와 로딩/에러 상태를 함께 관리하고 폼 제출을 자동으로 연결하고 싶을 때',
        iconKey: 'send',
        cta: { label: '문서 보기', href: 'https://react.dev/reference/react/useActionState' },
      },
      {
        hookName: 'useOptimistic',
        state: 'optimistic',
        when: '서버 응답 전에도 즉각적인 UI 피드백이 필요할 때',
        iconKey: 'zap',
        cta: { label: '문서 보기', href: 'https://react.dev/reference/react/useOptimistic' },
      },
      {
        hookName: 'useFormStatus',
        state: 'pending',
        when: '폼 내부의 하위 UI에서 제출 진행 상태를 읽고 싶을 때',
        iconKey: 'clock',
        cta: {
          label: '문서 보기',
          href: 'https://react.dev/reference/react-dom/hooks/useFormStatus',
        },
      },
    ],
  },
  mission: {
    number: '09',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '읽기만 하는 단계에서 멈추지 말고 손으로 한 번 더 정리해 봅니다.',
    missions: [
      {
        number: '01',
        title: '기존 submit 코드를 Actions 방식으로 바꿔본다',
        helper: '비교하며 장단점을 정리해보세요.',
      },
      {
        number: '02',
        title: 'pending / optimistic / result state를 각각 어떤 API가 담당하는지 분류한다',
        helper: '역할별 표로 정리해보세요.',
      },
      {
        number: '03',
        title: 'Actions를 “업데이트 모델 확장”으로 한 줄 정의해본다',
        helper: '팀원에게 설명해보세요.',
      },
      {
        number: '04',
        title: '실제 서비스 시나리오에 적용 가능한 포인트를 하나 정리한다',
        helper: '작은 화면부터 시도해보세요.',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        state: 'form',
        title: 'Actions는 비동기 UI 업데이트를 선언적으로 묶는 모델이다.',
        body: 'pending, error, optimistic, form submission을 하나의 흐름으로 다룹니다.',
        iconKey: 'workflow',
      },
      {
        number: '02',
        state: 'pending',
        title: 'useActionState, useOptimistic, useFormStatus는 각기 다른 조각을 담당한다.',
        body: '결과/에러, 낙관 UI, 진행 상태를 역할별로 분리해 관리합니다.',
        iconKey: 'layers',
      },
      {
        number: '03',
        state: 'error',
        title: 'Form Actions의 내부 구조는 다음 페이지에서 이벤트 시스템과 연결된다.',
        body: 'React의 업데이트 모델 확장이 이벤트 시스템으로 어떻게 들어오는지 살펴봅니다.',
        iconKey: 'compass',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Form Actions는 이벤트 시스템과 어떻게 연결되는가?',
    description:
      '`<form action={fn}>`이 submit event, FormActionEventPlugin, FormData, pendingState, startHostTransition으로 어떻게 이어지는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/form-actions-event-system',
  },
};

const en: ActionsUpdateFlowContent = {
  hero: {
    badge: 'React 19 Changes · 2/10',
    titleLines: ['Why Actions are not', 'just a form API but an', 'extension of the update model?'],
    subtitleLines: [
      'React 19 lets you handle async UI updates',
      'declaratively — including pending, error,',
      'and optimistic state.',
    ],
    diagram: {
      centerTitle: 'Action',
      centerSubtitle: '(Core)',
      cards: [
        {
          state: 'pending',
          title: 'Pending State',
          caption: 'Track in-flight progress',
          keyword: 'isPending',
          iconKey: 'clock',
        },
        {
          state: 'error',
          title: 'Error Handling',
          caption: 'Manage action results',
          keyword: 'error',
          iconKey: 'triangle-alert',
        },
        {
          state: 'form',
          title: 'Form Submission',
          caption: 'Wire form submit flow',
          keyword: 'formAction',
          iconKey: 'send',
        },
        {
          state: 'optimistic',
          title: 'Optimistic Update',
          caption: 'Apply UI immediately',
          keyword: 'optimistic',
          iconKey: 'zap',
        },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'Why should Actions be read as a change in',
      "React's update flow, not just a form-submit nicety?",
    ],
    supportCards: [
      {
        title: 'Update model extended',
        body: 'State / server / form / optimistic UI',
        iconKey: 'layers',
      },
      {
        title: 'Declarative flow',
        body: 'Less code, better consistency',
        iconKey: 'sparkles',
      },
      {
        title: 'Forms × UI united',
        body: 'Connect server / client boundary',
        iconKey: 'workflow',
      },
    ],
  },
  legacySubmit: {
    number: '03',
    eyebrow: 'Before',
    title: 'The friction of pre-Actions async submit',
    codeFile: 'before/handle-submit.js',
    code: `async function handleSubmit() {
  setPending(true);

  try {
    await updateName(name);
    setError(null);
  } catch (error) {
    setError(error);
  } finally {
    setPending(false);
  }
}`,
    problemTitle: 'Problems with the old way',
    problems: [
      'Manually manage pending state',
      'Manually manage error state',
      'Loading/error state spread across components',
      'Optimistic UI has to be built separately',
      'Form submit and UI update stay disjoint',
    ],
  },
  quadrant: {
    number: '04',
    eyebrow: 'Action as Hub',
    title: 'The four states Actions tie together',
    description: 'One declaration carries pending · error · form submission · optimistic together.',
    centerTitle: 'Action',
    centerSubtitle: '(Declarative Flow)',
    states: [
      {
        state: 'pending',
        title: 'Pending',
        description: 'Track in-flight action progress',
        arrowApi: 'isPending',
        iconKey: 'clock',
      },
      {
        state: 'error',
        title: 'Error',
        description: 'Manage action result errors',
        arrowApi: 'error',
        iconKey: 'triangle-alert',
      },
      {
        state: 'form',
        title: 'Form Submission',
        description: 'Wire form submit to action',
        arrowApi: 'formAction',
        iconKey: 'send',
      },
      {
        state: 'optimistic',
        title: 'Optimistic Update',
        description: 'Apply UI before server reply',
        arrowApi: 'useOptimistic',
        iconKey: 'zap',
      },
    ],
  },
  apiCards: {
    number: '05',
    eyebrow: 'Three Hooks',
    title: 'Delivered as three different hooks',
    description:
      'useActionState · useOptimistic · useFormStatus each own a different piece of the same model.',
    cards: [
      {
        number: '05-A',
        hookName: 'useActionState',
        langBadge: 'TS',
        state: 'form',
        code: `const [state, formAction, isPending] = useActionState(
  updateNameAction,
  initialState,
);`,
        points: [
          'Manages action result state',
          'Wires directly into form action (formAction)',
          'Exposes execution state as isPending',
        ],
      },
      {
        number: '05-B',
        hookName: 'useOptimistic',
        langBadge: 'TS',
        state: 'optimistic',
        code: `const [optimisticCount, addOptimistic] = useOptimistic(
  initialCount,
  (count, delta) => {
    return count + delta;
  },
);`,
        points: [
          'Applies UI immediately, before the server replies',
          'Automatically rolls back on failure',
          'Smooths out user experience',
        ],
      },
      {
        number: '05-C',
        hookName: 'useFormStatus',
        langBadge: 'TS',
        state: 'pending',
        code: `const { pending } = useFormStatus();`,
        points: [
          "Reads the current form action's progress",
          'Lets child components observe pending easily',
          'Use it to disable submit buttons, etc.',
        ],
      },
    ],
  },
  comparison: {
    number: '06',
    eyebrow: 'Role Table',
    title: 'Side-by-side roles of the three APIs',
    description: 'A single table to separate what each hook owns.',
    columns: {
      api: 'API',
      role: 'Core role',
      problem: 'What it solves',
      where: 'Where to use',
      returnValue: 'Return value',
    },
    rows: [
      {
        hookName: 'useActionState',
        state: 'form',
        role: 'Action result state + provides a form action',
        problem: 'Consistent handling of result / error / loading',
        where: 'Forms and components needing state management',
        returnValue: 'state, formAction, isPending',
      },
      {
        hookName: 'useOptimistic',
        state: 'optimistic',
        role: 'Manages optimistic UI',
        problem: 'Immediate feedback before the server replies, with rollback',
        where: 'Likes, counters, list additions — UI that needs instant reaction',
        returnValue: 'optimisticValue, addOptimistic',
      },
      {
        hookName: 'useFormStatus',
        state: 'pending',
        role: 'Exposes form submission progress',
        problem: 'Lets child components read pending easily',
        where: 'Buttons, loading indicators inside a form',
        returnValue: 'pending, data, method, action',
      },
    ],
  },
  simulator: {
    number: '07',
    eyebrow: 'Action Flow Simulator',
    title: 'Action flow simulator',
    description: 'See exactly where success and failure diverge inside the same flow.',
    scenarioLabel: 'Pick a scenario',
    scenarios: [
      {
        key: 'success',
        label: 'Success scenario',
        description: 'On a normal server reply, the optimistic UI is confirmed as-is.',
      },
      {
        key: 'failure',
        label: 'Failure scenario',
        description: 'On a server failure, error is set and the optimistic UI rolls back.',
      },
    ],
    defaultScenario: 'success',
    flowLabel: 'Six-step flow',
    steps: [
      {
        title: 'User submits',
        caption: 'Form submit event fires',
        successState: 'form',
        failureState: 'form',
      },
      {
        title: 'Action starts',
        caption: 'Server Action is invoked',
        successState: 'form',
        failureState: 'form',
      },
      {
        title: 'pending = true',
        caption: 'isPending becomes active',
        successState: 'pending',
        failureState: 'pending',
      },
      {
        title: 'Optimistic UI',
        caption: 'Optimistic update applied',
        successState: 'optimistic',
        failureState: 'optimistic',
      },
      {
        title: 'Server success',
        caption: 'Data save completes',
        successState: 'optimistic',
        failureState: 'neutral',
      },
      {
        title: 'Final UI committed',
        caption: 'Confirmed as normal state',
        successState: 'optimistic',
        failureState: 'neutral',
      },
    ],
    failureNote:
      'In the failure scenario, step 5 flips to server failure → error set → optimistic UI rolls back.',
    successNote:
      'In the success scenario, steps 5~6 confirm the server reply directly as the final UI.',
  },
  officialDocs: {
    number: '08',
    eyebrow: 'Docs',
    title: 'Source / official docs',
    description: 'Jump to the React docs to read each hook in more depth.',
    cards: [
      {
        hookName: 'useActionState',
        state: 'form',
        when: 'When you want action results together with loading/error, wired to form submit.',
        iconKey: 'send',
        cta: { label: 'Open docs', href: 'https://react.dev/reference/react/useActionState' },
      },
      {
        hookName: 'useOptimistic',
        state: 'optimistic',
        when: 'When you need instant UI feedback before the server replies.',
        iconKey: 'zap',
        cta: { label: 'Open docs', href: 'https://react.dev/reference/react/useOptimistic' },
      },
      {
        hookName: 'useFormStatus',
        state: 'pending',
        when: 'When a child inside a form needs to read submit progress.',
        iconKey: 'clock',
        cta: {
          label: 'Open docs',
          href: 'https://react.dev/reference/react-dom/hooks/useFormStatus',
        },
      },
    ],
  },
  mission: {
    number: '09',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description: 'Move past reading — restate it with your own hands.',
    missions: [
      {
        number: '01',
        title: 'Rewrite an existing submit as Actions',
        helper: 'Compare the two and list trade-offs.',
      },
      {
        number: '02',
        title: 'Classify pending / optimistic / result by which API owns them',
        helper: 'Make a small table.',
      },
      {
        number: '03',
        title: 'Define Actions in one line as "an extension of the update model"',
        helper: 'Explain it out loud to a teammate.',
      },
      {
        number: '04',
        title: 'Pick one realistic service scenario you could apply this to',
        helper: 'Start from a tiny screen.',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        state: 'form',
        title: 'Actions are a declarative model for async UI updates.',
        body: 'They handle pending, error, optimistic, and form submission as one flow.',
        iconKey: 'workflow',
      },
      {
        number: '02',
        state: 'pending',
        title: 'useActionState, useOptimistic, useFormStatus each own a piece.',
        body: 'Result/error, optimistic UI, and progress are split by role.',
        iconKey: 'layers',
      },
      {
        number: '03',
        state: 'error',
        title: "Form Actions' internals connect to the event system next.",
        body: "We'll see how the update model extension reaches into the event system.",
        iconKey: 'compass',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How do Form Actions connect to the event system?',
    description:
      'See how `<form action={fn}>` reaches submit event, FormActionEventPlugin, FormData, pendingState, and startHostTransition.',
    cta: 'Go to the next page',
    href: '/form-actions-event-system',
  },
};

export const actionsUpdateFlowContent: Record<Locale, ActionsUpdateFlowContent> = { ko, en };
