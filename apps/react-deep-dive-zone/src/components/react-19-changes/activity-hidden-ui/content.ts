import type { Locale } from '@it-tech-blog/preferences';

import type { ActivityKey } from './tone';

export type IconKey =
  | 'eye'
  | 'eye-off'
  | 'pause'
  | 'play'
  | 'gauge'
  | 'brush'
  | 'timer'
  | 'sparkles'
  | 'rotate'
  | 'workflow'
  | 'split'
  | 'route'
  | 'compass'
  | 'search'
  | 'check'
  | 'x-circle'
  | 'shield-check'
  | 'layers'
  | 'database'
  | 'box'
  | 'boxes'
  | 'zap'
  | 'mouse-click'
  | 'target';

export type SupportQuestion = {
  label: string;
  body: string;
  iconKey: IconKey;
};

export type ProblemItem = { text: string };
export type BenefitItem = { text: string };

export type ModeTableRow = {
  topic: string;
  visible: string;
  hidden: string;
};

export type HiddenBehaviorCard = {
  number: string;
  activity: ActivityKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type TimelineStep = {
  number: string;
  title: string;
  body: string;
  code: string;
  activity: ActivityKey;
  iconKey: IconKey;
};

export type PriorityFlowStep = {
  activity: ActivityKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ManagementItem = {
  body: string;
  iconKey: IconKey;
};

export type ModePanel = {
  mode: 'visible' | 'hidden';
  title: string;
  items: string[];
  iconKey: IconKey;
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  activity: ActivityKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type LinkButton = { label: string; href: string };

export type ActivityHiddenUiContent = {
  hero: {
    badges: { label: string; tone: 'solid' | 'soft' }[];
    titleLines: [string, string, string];
    subtitleLines: [string, string];
    conditionalCode: {
      title: string;
      langBadge: 'JSX';
      code: string;
    };
    modeSwitch: {
      title: string;
      visibleLabel: string;
      visibleCaption: string;
      hiddenLabel: string;
      hiddenCaption: string;
      footer: string;
    };
    activityCode: {
      title: string;
      langBadge: 'JSX';
      code: string;
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportQuestions: SupportQuestion[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeCode: { langBadge: 'JSX'; code: string };
    beforeProblems: ProblemItem[];
    versus: string;
    afterTitle: string;
    afterCode: { langBadge: 'JSX'; code: string };
    afterBenefits: BenefitItem[];
  };
  modeTable: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    headerTopic: string;
    headerVisible: string;
    headerHidden: string;
    rows: ModeTableRow[];
  };
  hiddenBehavior: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: HiddenBehaviorCard[];
  };
  statePreservation: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TimelineStep[];
  };
  priorityFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PriorityFlowStep[];
    footer: string;
  };
  offscreen: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    diagramTitle: string;
    diagramDescription: string;
    diagramLines: { indent: number; label: string; activity: ActivityKey }[];
    managementTitle: string;
    managementItems: ManagementItem[];
  };
  sourceCode: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'JS'; code: string };
    explanationTitle: string;
    explanationPoints: string[];
    fileCard: { title: string; fileName: string; buttonLabel: string; href: string };
  };
  simulator: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    selectLabel: string;
    defaultMode: 'visible' | 'hidden';
    panels: ModePanel[];
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
  nextCTA: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    primary: LinkButton;
    secondary: LinkButton[];
  };
};

const ko: ActivityHiddenUiContent = {
  hero: {
    badges: [
      { label: 'React 19.2 심화 학습', tone: 'soft' },
      { label: 'Activity 이해', tone: 'solid' },
    ],
    titleLines: ['Activity는 숨긴 UI를', '어떻게 관리하고', '우선순위를 낮출까?'],
    subtitleLines: [
      '보이지 않는 UI를 언마운트하지 않고,',
      '상태를 보존한 채 더 낮은 우선순위로 유지합니다.',
    ],
    conditionalCode: {
      title: '조건부 렌더링 (Unmount)',
      langBadge: 'JSX',
      code: `function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((v) => !v)}>toggle</button>

      {isOpen && <Sidebar />}
    </>
  );
}`,
    },
    modeSwitch: {
      title: '모드 전환',
      visibleLabel: 'visible',
      visibleCaption: '화면 표시',
      hiddenLabel: 'hidden',
      hiddenCaption: '화면 숨김',
      footer: '상태 보존 + 우선순위 하향',
    },
    activityCode: {
      title: 'Activity (Hide)',
      langBadge: 'JSX',
      code: `function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((v) => !v)}>toggle</button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>
    </>
  );
}`,
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: ['탭을 숨길 때 왜 그냥 unmount하지 않고', 'Activity로 관리하는가?'],
    supportQuestions: [
      { label: '숨김 ≠ 삭제', body: '상태 보존의 의미', iconKey: 'eye-off' },
      { label: 'Effects 정리', body: '백그라운드 비용 감소', iconKey: 'brush' },
      { label: '낮은 우선순위', body: 'Scheduler 연결', iconKey: 'gauge' },
      { label: '빠른 복귀', body: '즉시 재사용 가능', iconKey: 'zap' },
    ],
  },
  comparison: {
    number: '03',
    eyebrow: 'Before vs After',
    title: '조건부 렌더링과 Activity 비교',
    description:
      '같은 "보이는지/안 보이는지" 문제를 다루지만, 컴포넌트 수명과 상태 측면에서 결과가 완전히 다릅니다.',
    beforeTitle: 'Before: 조건부 렌더링',
    beforeCode: {
      langBadge: 'JSX',
      code: `{isOpen && <Sidebar />}`,
    },
    beforeProblems: [
      { text: '숨기면 언마운트' },
      { text: '상태 초기화' },
      { text: 'Effects 자동 정리' },
      { text: '다시 열 때 처음부터 렌더' },
    ],
    versus: 'VS',
    afterTitle: 'After: Activity 사용',
    afterCode: {
      langBadge: 'JSX',
      code: `<Activity mode={isOpen ? "visible" : "hidden"}>
  <Sidebar />
</Activity>`,
    },
    afterBenefits: [
      { text: '숨겨도 언마운트되지 않음' },
      { text: '상태 보존' },
      { text: 'Effects 정리 가능' },
      { text: '다시 열면 즉시 재사용' },
    ],
  },
  modeTable: {
    number: '04',
    eyebrow: 'Mode Table',
    title: 'visible / hidden 모드',
    description:
      'Activity의 두 모드가 화면·DOM·상태·Effects·우선순위 측면에서 어떻게 달라지는지 한 표로 비교합니다.',
    headerTopic: '구분',
    headerVisible: 'visible',
    headerHidden: 'hidden',
    rows: [
      { topic: '화면 표시', visible: '표시됨', hidden: '숨김(display: none)' },
      { topic: 'DOM 존재', visible: '존재', hidden: '존재(다만 표시되지 않음)' },
      { topic: '상태(state)', visible: '유지', hidden: '유지(보존)' },
      { topic: 'Effects', visible: '활성(실행 중)', hidden: '정리(cleanup 실행, 비활성)' },
      {
        topic: '업데이트 우선순위',
        visible: '일반 우선순위',
        hidden: '낮은 우선순위(deprioritized)',
      },
      { topic: '언마운트 여부', visible: '아니오', hidden: '아니오' },
    ],
  },
  hiddenBehavior: {
    number: '05',
    eyebrow: 'Hidden Behavior',
    title: 'hidden 상태에서 무엇이 일어나는가?',
    description:
      'hidden은 단순한 "안 보임"이 아니라 DOM/Effects/우선순위 세 측면이 동시에 움직입니다.',
    cards: [
      {
        number: '01',
        activity: 'hidden',
        title: 'display: none',
        body: '숨겨진 UI는 화면에서 사라지지만, 데이터와 상태는 대상에서 제외되지 않습니다.',
        iconKey: 'eye-off',
      },
      {
        number: '02',
        activity: 'visible',
        title: 'Effects cleanup',
        body: 'passive / layout Effects가 정리되어 백그라운드 비용을 줄입니다.',
        iconKey: 'brush',
      },
      {
        number: '03',
        activity: 'scheduler',
        title: '업데이트 우선순위 하향',
        body: '숨겨진 subtree의 업데이트는 낮은 우선순위로 예약되어, 중요한 UI를 방해하지 않습니다.',
        iconKey: 'gauge',
      },
    ],
  },
  statePreservation: {
    number: '06',
    eyebrow: 'State Preservation',
    title: '상태 보존과 빠른 복귀',
    description:
      'hidden으로 갔다가 visible로 돌아오면, 컴포넌트가 그대로 살아있고 state도 그대로입니다.',
    steps: [
      {
        number: '01',
        title: 'Sidebar visible',
        body: '사용 중, 상태가 쌓입니다.',
        code: `state: { count: 3, input: "hello" }`,
        activity: 'visible',
        iconKey: 'eye',
      },
      {
        number: '02',
        title: 'hidden(숨김)',
        body: '화면에서 숨겨집니다.',
        code: `display: none\nEffects cleanup`,
        activity: 'hidden',
        iconKey: 'eye-off',
      },
      {
        number: '03',
        title: 'state 보존',
        body: '상태는 그대로 보존됩니다.',
        code: `state: { count: 3, input: "hello" }`,
        activity: 'preservation',
        iconKey: 'shield-check',
      },
      {
        number: '04',
        title: 'visible 복귀',
        body: '다시 화면에 즉시 표시됩니다.',
        code: `즉시 사용 가능`,
        activity: 'visible',
        iconKey: 'eye',
      },
      {
        number: '05',
        title: '즉시 재사용',
        body: '기존 상태로 계속 사용됩니다.',
        code: `state 유지됨\n재렌더 최소화`,
        activity: 'visible',
        iconKey: 'sparkles',
      },
    ],
  },
  priorityFlow: {
    number: '07',
    eyebrow: 'Scheduler × Priority',
    title: '낮은 우선순위 업데이트 흐름',
    description:
      '숨겨진 subtree의 업데이트는 React Scheduler가 일반 작업보다 뒤로 미루어 처리합니다.',
    steps: [
      {
        activity: 'hidden',
        title: '숨겨진 subtree에서 업데이트 발생',
        body: '예: hidden 상태에서 가벼운 동기화',
        iconKey: 'eye-off',
      },
      {
        activity: 'scheduler',
        title: '업데이트 예약',
        body: '일반 업데이트보다 낮은 우선순위로 예약',
        iconKey: 'timer',
      },
      {
        activity: 'scheduler',
        title: 'Scheduler 판단',
        body: 'urgent 업데이트가 있으면 숨겨진 작업을 뒤로 미룸',
        iconKey: 'gauge',
      },
      {
        activity: 'preservation',
        title: '나중에 처리',
        body: '여유가 생기면 업데이트 처리',
        iconKey: 'workflow',
      },
      {
        activity: 'visible',
        title: '화면 복귀 시 반영',
        body: 'visible로 돌아오면 최신 상태로 반영',
        iconKey: 'sparkles',
      },
    ],
    footer: 'React Scheduler와 우선순위 시스템과 연결',
  },
  offscreen: {
    number: '08',
    eyebrow: 'Offscreen',
    title: 'Offscreen 구조와 연결',
    description:
      'Activity는 단독으로 동작하지 않습니다. 내부의 Offscreen Fiber가 mode를 기준으로 숨겨진 subtree를 관리합니다.',
    diagramTitle: 'Activity Fiber 구조',
    diagramDescription: 'Offscreen 계열 내부 로직이 숨겨진 subtree를 관리합니다.',
    diagramLines: [
      { indent: 0, label: 'Activity Fiber', activity: 'activity' },
      { indent: 1, label: '↓', activity: 'scheduler' },
      { indent: 0, label: 'Offscreen Fiber (mode: hidden / visible)', activity: 'offscreen' },
      { indent: 1, label: '├─ Child Fiber', activity: 'child' },
      { indent: 1, label: '├─ Child Fiber', activity: 'child' },
      { indent: 1, label: '└─ Child Fiber', activity: 'child' },
    ],
    managementTitle: '숨겨진 subtree 관리 포인트',
    managementItems: [
      { body: 'DOM은 유지하되 display:none으로 숨김', iconKey: 'eye-off' },
      { body: 'Effects는 정리되어 백그라운드 비용 감소', iconKey: 'brush' },
      { body: '상태는 메모리에 유지', iconKey: 'shield-check' },
      { body: '우선순위 낮은 작업으로 스케줄링', iconKey: 'gauge' },
    ],
  },
  sourceCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: '실제 코드 미리보기',
    description:
      'Activity의 핵심은 새 Fiber 종류가 아니라, 이미 있던 Offscreen 처리 경로를 mode로 분기시키는 것입니다.',
    code: {
      fileName: 'ReactFiberBeginWork.js · 발췌',
      langBadge: 'JS',
      code: `function updateActivityComponent(
  current,
  workInProgress,
  renderLanes,
  nextProps,
) {
  return updateOffscreenComponent(
    current,
    workInProgress,
    renderLanes,
    nextProps,
  );
}`,
    },
    explanationTitle: 'Offscreen 계열로 위임',
    explanationPoints: [
      'Activity는 내부적으로 Offscreen 계열 업데이트를 사용합니다.',
      'mode에 따라 visible / hidden 분기로 처리됩니다.',
      '숨긴 상태의 모든 Fiber와 state는 유지됩니다.',
      'updateOffscreenComponent가 핵심 진입점입니다.',
    ],
    fileCard: {
      title: '관련 파일',
      fileName: 'ReactFiberBeginWork.js',
      buttonLabel: 'GitHub에서 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js',
    },
  },
  simulator: {
    number: '10',
    eyebrow: 'Activity Mode Simulator',
    title: 'Activity Mode Simulator',
    description:
      'visible / hidden을 선택해 각 모드에서 UI/Effects/우선순위/state가 어떻게 달라지는지 직접 비교해 보세요.',
    selectLabel: '모드 선택',
    defaultMode: 'visible',
    panels: [
      {
        mode: 'visible',
        title: 'visible 모드',
        items: [
          'UI 표시',
          'Effects active(실행 중)',
          '일반 우선순위 업데이트',
          '레이아웃 / 페인트 포함',
        ],
        iconKey: 'eye',
      },
      {
        mode: 'hidden',
        title: 'hidden 모드',
        items: [
          'UI 숨김(display:none)',
          'Effects cleanup(정리됨)',
          '낮은 우선순위 update',
          'state 유지',
        ],
        iconKey: 'eye-off',
      },
    ],
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description:
      '단순 비교가 아니라 hidden 상태의 동작과 Scheduler 관점까지 본인의 언어로 정리해 봅니다.',
    missions: [
      {
        number: '01',
        title: '조건부 렌더링 vs Activity',
        helper: '단순히 보이지 않는 것과 언마운트되지 않는 차이를 정리한다.',
        iconKey: 'split',
      },
      {
        number: '02',
        title: 'hidden 상태의 동작',
        helper: 'display, Effects, state 보존, 우선순위 관점에서 무엇이 달라지는지 구분한다.',
        iconKey: 'eye-off',
      },
      {
        number: '03',
        title: 'Scheduler 관점 정리',
        helper: '왜 숨겨진 subtree 업데이트가 낮은 우선순위로 처리되는지 정리한다.',
        iconKey: 'gauge',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        activity: 'visible',
        title: 'Activity는 숨긴 UI를 완전히 버리지 않는다.',
        body: '언마운트가 아니라 숨김으로 다루며 상태를 유지해야 빠른 복귀를 가능하게 한다.',
        iconKey: 'shield-check',
      },
      {
        number: '02',
        activity: 'scheduler',
        title: 'state는 유지하되 Effects는 정리할 수 있다.',
        body: '숨김 상태에서 Effects는 정리되어 백그라운드 UI 비용을 줄인다.',
        iconKey: 'brush',
      },
      {
        number: '03',
        activity: 'offscreen',
        title: '숨겨진 subtree는 낮은 우선순위로 관리된다.',
        body: 'Scheduler와 연동되어 urgent UI를 방해하지 않고 나중에 업데이트된다.',
        iconKey: 'gauge',
      },
    ],
  },
  nextCTA: {
    eyebrow: '다음 단계로',
    titleLines: ['다음:', 'useEffectEvent는 Effect 설계에 무엇을 추가했나?'],
    description:
      '다음 페이지에서는 useEffectEvent가 Effect 본체와 이벤트성 로직을 어떻게 분리하는지 살펴봅니다.',
    primary: {
      label: '다음: useEffectEvent는 Effect 설계에 무엇을 추가했나?',
      href: '/use-effect-event-design',
    },
    secondary: [
      { label: 'Activity 흐름 다시 보기', href: '#hero-heading' },
      { label: 'React 소스코드 열기', href: 'https://github.com/facebook/react' },
    ],
  },
};

const en: ActivityHiddenUiContent = {
  hero: {
    badges: [
      { label: 'React 19.2 deep dive', tone: 'soft' },
      { label: 'Activity', tone: 'solid' },
    ],
    titleLines: ['How does Activity manage', 'hidden UI and lower its', 'update priority?'],
    subtitleLines: [
      "Invisible UI isn't unmounted —",
      "it's preserved and kept at a lower priority.",
    ],
    conditionalCode: {
      title: 'Conditional rendering (Unmount)',
      langBadge: 'JSX',
      code: `function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((v) => !v)}>toggle</button>

      {isOpen && <Sidebar />}
    </>
  );
}`,
    },
    modeSwitch: {
      title: 'Mode switch',
      visibleLabel: 'visible',
      visibleCaption: 'shown',
      hiddenLabel: 'hidden',
      hiddenCaption: 'hidden from view',
      footer: 'state preserved + lower priority',
    },
    activityCode: {
      title: 'Activity (Hide)',
      langBadge: 'JSX',
      code: `function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((v) => !v)}>toggle</button>

      <Activity mode={isOpen ? "visible" : "hidden"}>
        <Sidebar />
      </Activity>
    </>
  );
}`,
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: ['When you hide a tab, why use Activity', 'instead of simply unmounting it?'],
    supportQuestions: [
      { label: 'Hide ≠ delete', body: 'What state preservation means', iconKey: 'eye-off' },
      { label: 'Effects cleanup', body: 'Lower background cost', iconKey: 'brush' },
      { label: 'Low priority', body: 'Scheduler integration', iconKey: 'gauge' },
      { label: 'Fast return', body: 'Reuse instantly', iconKey: 'zap' },
    ],
  },
  comparison: {
    number: '03',
    eyebrow: 'Before vs After',
    title: 'Conditional rendering vs Activity',
    description:
      'Both handle "show or hide", but they differ completely in component lifetime and state.',
    beforeTitle: 'Before: conditional rendering',
    beforeCode: {
      langBadge: 'JSX',
      code: `{isOpen && <Sidebar />}`,
    },
    beforeProblems: [
      { text: 'Unmounts when hidden' },
      { text: 'State is reset' },
      { text: 'Effects auto-cleanup' },
      { text: 'Re-renders from scratch on reopen' },
    ],
    versus: 'VS',
    afterTitle: 'After: with Activity',
    afterCode: {
      langBadge: 'JSX',
      code: `<Activity mode={isOpen ? "visible" : "hidden"}>
  <Sidebar />
</Activity>`,
    },
    afterBenefits: [
      { text: "Doesn't unmount when hidden" },
      { text: 'State is preserved' },
      { text: 'Effects can be cleaned up' },
      { text: 'Reused instantly when reopened' },
    ],
  },
  modeTable: {
    number: '04',
    eyebrow: 'Mode Table',
    title: 'visible / hidden modes',
    description: 'Compare the two Activity modes across screen, DOM, state, Effects, and priority.',
    headerTopic: 'Aspect',
    headerVisible: 'visible',
    headerHidden: 'hidden',
    rows: [
      { topic: 'Shown on screen', visible: 'shown', hidden: 'hidden (display: none)' },
      { topic: 'DOM exists', visible: 'yes', hidden: 'yes (but not displayed)' },
      { topic: 'State', visible: 'kept', hidden: 'kept (preserved)' },
      { topic: 'Effects', visible: 'active (running)', hidden: 'cleaned up (inactive)' },
      { topic: 'Update priority', visible: 'normal', hidden: 'lowered (deprioritized)' },
      { topic: 'Unmounted', visible: 'no', hidden: 'no' },
    ],
  },
  hiddenBehavior: {
    number: '05',
    eyebrow: 'Hidden Behavior',
    title: "What actually happens in 'hidden'?",
    description: 'Hidden is not just "not shown" — DOM, Effects, and priority all shift together.',
    cards: [
      {
        number: '01',
        activity: 'hidden',
        title: 'display: none',
        body: 'The UI disappears from view, but its data and state are not excluded.',
        iconKey: 'eye-off',
      },
      {
        number: '02',
        activity: 'visible',
        title: 'Effects cleanup',
        body: 'passive / layout Effects are cleaned up to reduce background cost.',
        iconKey: 'brush',
      },
      {
        number: '03',
        activity: 'scheduler',
        title: 'Lowered update priority',
        body: "Updates inside a hidden subtree are scheduled at lower priority so they don't block important UI.",
        iconKey: 'gauge',
      },
    ],
  },
  statePreservation: {
    number: '06',
    eyebrow: 'State Preservation',
    title: 'State preservation and fast return',
    description:
      'After going hidden and coming back, the component is still alive and so is its state.',
    steps: [
      {
        number: '01',
        title: 'Sidebar visible',
        body: 'In use; state builds up.',
        code: `state: { count: 3, input: "hello" }`,
        activity: 'visible',
        iconKey: 'eye',
      },
      {
        number: '02',
        title: 'hidden',
        body: 'Hidden from view.',
        code: `display: none\nEffects cleanup`,
        activity: 'hidden',
        iconKey: 'eye-off',
      },
      {
        number: '03',
        title: 'state preserved',
        body: 'State is preserved as-is.',
        code: `state: { count: 3, input: "hello" }`,
        activity: 'preservation',
        iconKey: 'shield-check',
      },
      {
        number: '04',
        title: 'visible again',
        body: 'Shown again instantly.',
        code: `ready to use`,
        activity: 'visible',
        iconKey: 'eye',
      },
      {
        number: '05',
        title: 'instant reuse',
        body: 'Continues from the previous state.',
        code: `state retained\nminimal re-render`,
        activity: 'visible',
        iconKey: 'sparkles',
      },
    ],
  },
  priorityFlow: {
    number: '07',
    eyebrow: 'Scheduler × Priority',
    title: 'Low-priority update flow',
    description:
      'Updates in a hidden subtree are scheduled after normal work by the React Scheduler.',
    steps: [
      {
        activity: 'hidden',
        title: 'Update inside hidden subtree',
        body: 'e.g. a light background sync while hidden',
        iconKey: 'eye-off',
      },
      {
        activity: 'scheduler',
        title: 'Scheduled',
        body: 'Scheduled at lower priority than normal updates',
        iconKey: 'timer',
      },
      {
        activity: 'scheduler',
        title: 'Scheduler decision',
        body: 'Defers the hidden work if there is anything urgent',
        iconKey: 'gauge',
      },
      {
        activity: 'preservation',
        title: 'Run later',
        body: 'Processed when there is slack',
        iconKey: 'workflow',
      },
      {
        activity: 'visible',
        title: 'Reflected on return',
        body: 'When it becomes visible, the latest state shows up',
        iconKey: 'sparkles',
      },
    ],
    footer: 'Wired to the React Scheduler and priority system',
  },
  offscreen: {
    number: '08',
    eyebrow: 'Offscreen',
    title: 'Connected to the Offscreen structure',
    description:
      "Activity doesn't operate on its own — under the hood, an Offscreen Fiber manages the hidden subtree by mode.",
    diagramTitle: 'Activity Fiber tree',
    diagramDescription: 'The Offscreen-family internal logic manages the hidden subtree.',
    diagramLines: [
      { indent: 0, label: 'Activity Fiber', activity: 'activity' },
      { indent: 1, label: '↓', activity: 'scheduler' },
      { indent: 0, label: 'Offscreen Fiber (mode: hidden / visible)', activity: 'offscreen' },
      { indent: 1, label: '├─ Child Fiber', activity: 'child' },
      { indent: 1, label: '├─ Child Fiber', activity: 'child' },
      { indent: 1, label: '└─ Child Fiber', activity: 'child' },
    ],
    managementTitle: 'Hidden subtree management points',
    managementItems: [
      { body: 'Keep the DOM but hide with display:none', iconKey: 'eye-off' },
      { body: 'Clean up Effects to reduce background cost', iconKey: 'brush' },
      { body: 'Keep state in memory', iconKey: 'shield-check' },
      { body: 'Schedule as low-priority work', iconKey: 'gauge' },
    ],
  },
  sourceCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: 'Source preview',
    description:
      "The trick isn't a brand-new Fiber kind — Activity just delegates to the existing Offscreen path with a mode flag.",
    code: {
      fileName: 'ReactFiberBeginWork.js · excerpt',
      langBadge: 'JS',
      code: `function updateActivityComponent(
  current,
  workInProgress,
  renderLanes,
  nextProps,
) {
  return updateOffscreenComponent(
    current,
    workInProgress,
    renderLanes,
    nextProps,
  );
}`,
    },
    explanationTitle: 'Delegates to the Offscreen family',
    explanationPoints: [
      'Activity uses Offscreen-family updates internally.',
      'mode drives the visible / hidden branch.',
      'All Fibers and state under a hidden tree are kept.',
      'updateOffscreenComponent is the entry point.',
    ],
    fileCard: {
      title: 'Related file',
      fileName: 'ReactFiberBeginWork.js',
      buttonLabel: 'Open on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js',
    },
  },
  simulator: {
    number: '10',
    eyebrow: 'Activity Mode Simulator',
    title: 'Activity Mode Simulator',
    description:
      'Pick visible / hidden and compare how UI / Effects / priority / state shift between them.',
    selectLabel: 'Pick a mode',
    defaultMode: 'visible',
    panels: [
      {
        mode: 'visible',
        title: 'visible mode',
        items: ['UI shown', 'Effects active', 'Normal-priority updates', 'Layout / paint included'],
        iconKey: 'eye',
      },
      {
        mode: 'hidden',
        title: 'hidden mode',
        items: [
          'UI hidden (display:none)',
          'Effects cleaned up',
          'Low-priority updates',
          'State kept',
        ],
        iconKey: 'eye-off',
      },
    ],
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description:
      'Go beyond comparison — restate hidden-state behavior and the Scheduler perspective in your own words.',
    missions: [
      {
        number: '01',
        title: 'Conditional rendering vs Activity',
        helper: 'Tell the difference between "not shown" and "not unmounted".',
        iconKey: 'split',
      },
      {
        number: '02',
        title: 'Hidden-state behavior',
        helper: 'Differentiate display / Effects / state / priority shifts.',
        iconKey: 'eye-off',
      },
      {
        number: '03',
        title: 'Scheduler perspective',
        helper: 'Write why hidden updates are processed at low priority.',
        iconKey: 'gauge',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        activity: 'visible',
        title: "Activity doesn't throw hidden UI away.",
        body: 'It hides instead of unmounting, preserving state so the return is fast.',
        iconKey: 'shield-check',
      },
      {
        number: '02',
        activity: 'scheduler',
        title: 'State stays, Effects can be cleaned up.',
        body: 'In the hidden state, Effects are cleaned up to reduce background UI cost.',
        iconKey: 'brush',
      },
      {
        number: '03',
        activity: 'offscreen',
        title: 'Hidden subtrees run at lower priority.',
        body: "Wired to the Scheduler — won't block urgent UI, updates later.",
        iconKey: 'gauge',
      },
    ],
  },
  nextCTA: {
    eyebrow: 'Next step',
    titleLines: ['Next:', 'What did useEffectEvent add to Effect design?'],
    description: "We'll look at how useEffectEvent separates an Effect body from event-like logic.",
    primary: {
      label: 'Next: What did useEffectEvent add to Effect design?',
      href: '/use-effect-event-design',
    },
    secondary: [
      { label: 'Replay the Activity flow', href: '#hero-heading' },
      { label: 'Open the React source', href: 'https://github.com/facebook/react' },
    ],
  },
};

export const activityHiddenUiContent: Record<Locale, ActivityHiddenUiContent> = { ko, en };
