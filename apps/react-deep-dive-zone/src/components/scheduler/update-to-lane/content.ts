import type { Locale } from '@it-tech-blog/preferences';

export type ContextAccent = 'blue' | 'teal' | 'violet';

export type ConceptCard = { title: string; description: string; accent: ContextAccent };

export type ContextCard = {
  key: 'click' | 'transition' | 'render';
  label: string;
  subtitle: string;
  descriptionLines: string[];
  accent: ContextAccent;
};

export type SameSetStateCard = {
  key: 'click' | 'transition' | 'render';
  title: string;
  subtitle: string;
  fileLabel: string;
  code: string;
  assignedLane: string;
  accent: ContextAccent;
};

export type BranchNode = {
  number: string;
  question: string;
  yesLabel: string;
  yesResult: string;
  isFinal?: boolean;
};

export type BranchExplanationCard =
  | {
      kind: 'badge';
      key: 'legacy';
      title: string;
      body: string;
      resultBadge: string;
      accent: ContextAccent;
    }
  | {
      kind: 'render';
      key: 'render';
      title: string;
      body: string;
      middleLabel: string;
      result: string;
      accent: ContextAccent;
    }
  | {
      kind: 'flow';
      key: 'transition' | 'event';
      title: string;
      body: string;
      flowSteps: string[];
      accent: ContextAccent;
    };

export type MissionCard = { title: string; description: string; accent: ContextAccent };

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: ContextAccent;
};

export type SimulatorScenario = {
  key: 'click' | 'transition' | 'render';
  tabLabel: string;
  selectedContext: string;
  contextDescription: string;
  assignedLane: string;
  bitmaskExample: string;
  bitmaskHighlight: number[];
  codeFlow: string[];
  accent: ContextAccent;
};

export type LaneSummaryItem = {
  name: string;
  description: string;
  accent: ContextAccent | 'amber' | 'cyan';
};

export type RequestUpdateLaneContent = {
  hero: {
    badges: { label: string; tone: 'blue' | 'cyan' }[];
    titleLines: [string, string, string];
    highlight: string;
    subtitle: string;
    codePill: string;
    contextCards: ContextCard[];
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  sameSetState: {
    number: string;
    title: string;
    cards: SameSetStateCard[];
  };
  branchFlow: {
    number: string;
    title: string;
    flowStart: string;
    nodes: BranchNode[];
    explanationTitle: string;
    cards: BranchExplanationCard[];
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    code: string;
    explanationTitle: string;
    explanation: string[];
    apiBadges: string[];
    button: { label: string; href: string };
  };
  simulator: {
    number: string;
    title: string;
    tabsLabel: string;
    scenarios: SimulatorScenario[];
    stageLabels: {
      context: string;
      lane: string;
      flow: string;
      bitmask: string;
    };
    laneSummaryTitle: string;
    laneSummary: LaneSummaryItem[];
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
  };
  cta: {
    eyebrow: string;
    text: string;
    button: string;
    nextTitle: string;
    href: string;
  };
};

const REACT_FIBER_WORK_LOOP_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const CODE_KO =
  'const transition = requestCurrentTransition();\n\n' +
  'if (transition !== null) {\n' +
  '  // transition 문맥의 update라면\n' +
  '  return requestTransitionLane(transition);\n' +
  '}\n\n' +
  '// 일반 이벤트 또는 기본 문맥의 경우\n' +
  'return eventPriorityToLane(resolveUpdatePriority());';

const CODE_EN =
  'const transition = requestCurrentTransition();\n\n' +
  'if (transition !== null) {\n' +
  '  // when called inside a transition\n' +
  '  return requestTransitionLane(transition);\n' +
  '}\n\n' +
  '// for a regular event or default context\n' +
  'return eventPriorityToLane(resolveUpdatePriority());';

const CLICK_CODE = '<button onClick={() => setTab("detail")}>상세 탭 보기</button>';
const CLICK_CODE_EN = '<button onClick={() => setTab("detail")}>Open detail tab</button>';

const TRANSITION_CODE =
  'import { startTransition } from "react";\n\n' +
  'startTransition(() => {\n' +
  '  setTab("detail");\n' +
  '});';

const RENDER_CODE =
  'function Component() {\n' +
  '  if (needsFix) {\n' +
  '    setState(...); // render phase update\n' +
  '  }\n\n' +
  '  return <div />;\n' +
  '}';

const ko: RequestUpdateLaneContent = {
  hero: {
    badges: [
      { label: 'React 내부 탐구', tone: 'blue' },
      { label: '업데이트의 Lane 배정', tone: 'cyan' },
    ],
    titleLines: ['같은 setState라도', '어떤 문맥에서 호출되었는지에 따라', '다른 Lane을 받는다'],
    highlight: '다른 Lane을 받는다',
    subtitle: 'React는 update가 발생한 상황을 보고 적절한 lane을 결정합니다.',
    codePill: "setTab('detail')",
    contextCards: [
      {
        key: 'click',
        label: 'Click Handler',
        subtitle: '이벤트 핸들러',
        descriptionLines: ['Discrete Event', '→ 높은 우선순위 Lane'],
        accent: 'blue',
      },
      {
        key: 'transition',
        label: 'startTransition',
        subtitle: 'Transition 문맥',
        descriptionLines: ['Transition Lane', '→ 낮은 우선순위'],
        accent: 'teal',
      },
      {
        key: 'render',
        label: 'Render Phase Update',
        subtitle: '렌더 중 업데이트',
        descriptionLines: ['현재 render lanes 중', '적절한 lane 재사용'],
        accent: 'violet',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    question:
      'setState가 버튼 클릭 안에서 호출됐는가, startTransition 안에서 호출됐는가에 따라 React 내부 결과가 달라질까?',
    cards: [
      {
        title: '문맥에 따라 Different Lane',
        description: '동일한 setState라도 다른 lane을 받을 수 있다',
        accent: 'blue',
      },
      {
        title: '내부 분기 이해',
        description: 'requestUpdateLane의 분기 흐름을 이해한다',
        accent: 'teal',
      },
      {
        title: '개념 연결',
        description: 'Event Priority, Lane과 연결되어 동작한다',
        accent: 'violet',
      },
    ],
  },
  sameSetState: {
    number: '1',
    title: '같은 setState, 다른 lane',
    cards: [
      {
        key: 'click',
        title: '버튼 클릭',
        subtitle: '이벤트 핸들러',
        fileLabel: 'JSX',
        code: CLICK_CODE,
        assignedLane: 'SyncLane (Discrete)',
        accent: 'blue',
      },
      {
        key: 'transition',
        title: 'Transition 문맥',
        subtitle: 'startTransition',
        fileLabel: 'JSX',
        code: TRANSITION_CODE,
        assignedLane: 'TransitionLane',
        accent: 'teal',
      },
      {
        key: 'render',
        title: '렌더 중 업데이트',
        subtitle: 'Render Phase Update',
        fileLabel: 'JSX',
        code: RENDER_CODE,
        assignedLane: 'RenderLanes 중 하나',
        accent: 'violet',
      },
    ],
  },
  branchFlow: {
    number: '2',
    title: 'requestUpdateLane 전체 분기 흐름',
    flowStart: 'requestUpdateLane(fiber)',
    nodes: [
      {
        number: '1',
        question: 'Legacy root인가?',
        yesLabel: 'Yes',
        yesResult: 'SyncLane',
      },
      {
        number: '2',
        question: 'Render Phase update인가?',
        yesLabel: 'Yes',
        yesResult: '현재 render lanes에서 선택',
      },
      {
        number: '3',
        question: 'Transition 문맥인가?',
        yesLabel: 'Yes',
        yesResult: 'requestTransitionLane(...)',
      },
      {
        number: '4',
        question: '일반 Event Priority → Lane 변환',
        yesLabel: 'Result',
        yesResult: 'eventPriorityToLane(resolveUpdatePriority())',
        isFinal: true,
      },
    ],
    explanationTitle: '분기별 설명',
    cards: [
      {
        kind: 'badge',
        key: 'legacy',
        title: 'A. Legacy root 분기',
        body: 'Concurrent Mode가 아닌 오래된 root인 경우, 모든 update는 SyncLane으로 처리됩니다. 최신 React 학습의 핵심은 이후 분기입니다.',
        resultBadge: 'SyncLane',
        accent: 'blue',
      },
      {
        kind: 'render',
        key: 'render',
        title: 'B. Render phase update 분기',
        body: '렌더 도중 같은 컴포넌트에서 발생한 업데이트는 현재 렌더 중인 lanes 중 하나를 재사용합니다.',
        middleLabel: '현재 render lanes 예시',
        result: '재사용될 lane 선택',
        accent: 'violet',
      },
      {
        kind: 'flow',
        key: 'transition',
        title: 'C. Transition 분기',
        body: '현재 transition 문맥이 존재하면, transition lane을 할당합니다.',
        flowSteps: ['startTransition 실행 중', 'requestTransitionLane(transition)'],
        accent: 'teal',
      },
      {
        kind: 'flow',
        key: 'event',
        title: 'D. 일반 Event update 분기',
        body: '어떠한 특수 문맥이 아니라면, 현재 update priority를 확인하고 해당 우선순위를 Lane으로 변환합니다.',
        flowSteps: ['resolveUpdatePriority()', 'eventPriorityToLane(...)'],
        accent: 'blue',
      },
    ],
  },
  code: {
    number: '3',
    title: '실제 코드 미리보기',
    fileLabel: 'ReactFiberWorkLoop.js',
    code: CODE_KO,
    explanationTitle: '설명',
    explanation: [
      'requestCurrentTransition()은 현재 transition이 진행 중인지 확인합니다.',
      'transition이 존재하면 requestTransitionLane으로 이동합니다.',
      '그렇지 않다면 resolveUpdatePriority()로 현재 이벤트 우선순위를 읽고, eventPriorityToLane으로 lane을 변환합니다.',
    ],
    apiBadges: [
      'requestCurrentTransition',
      'requestTransitionLane',
      'eventPriorityToLane',
      'resolveUpdatePriority',
    ],
    button: { label: 'GitHub에서 코드 보기', href: REACT_FIBER_WORK_LOOP_URL },
  },
  simulator: {
    number: '4',
    title: '문맥별 Lane 시뮬레이터',
    tabsLabel: 'context selector',
    scenarios: [
      {
        key: 'click',
        tabLabel: 'Click handler',
        selectedContext: 'Click handler',
        contextDescription: '버튼 클릭 등 Discrete Event 핸들러 안에서 setState가 호출됨',
        assignedLane: 'SyncLane (Discrete)',
        bitmaskExample: '0000000000010',
        bitmaskHighlight: [10],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'resolveUpdatePriority() === Discrete',
          'eventPriorityToLane(Discrete)',
          'SyncLane 반환',
        ],
        accent: 'blue',
      },
      {
        key: 'transition',
        tabLabel: 'startTransition',
        selectedContext: 'startTransition',
        contextDescription: 'startTransition 안에서 setState가 호출됨',
        assignedLane: 'TransitionLane',
        bitmaskExample: '0000000010000',
        bitmaskHighlight: [7],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'requestCurrentTransition() !== null',
          'requestTransitionLane(transition)',
          'TransitionLane 반환',
        ],
        accent: 'teal',
      },
      {
        key: 'render',
        tabLabel: 'Render phase',
        selectedContext: 'Render phase update',
        contextDescription: '렌더 도중 같은 컴포넌트에서 setState가 호출됨',
        assignedLane: 'RenderLanes 중 하나',
        bitmaskExample: '0000000100000',
        bitmaskHighlight: [6],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'isRenderPhaseUpdate(...) === true',
          '현재 render lanes에서 lane 선택',
          '재사용 lane 반환',
        ],
        accent: 'violet',
      },
    ],
    stageLabels: {
      context: 'Selected context',
      lane: 'Assigned Lane',
      flow: 'Code flow',
      bitmask: 'Bitmask 예시',
    },
    laneSummaryTitle: 'Lane 그룹 요약',
    laneSummary: [
      { name: 'SyncLane', description: '즉시 처리해야 할 업데이트', accent: 'blue' },
      { name: 'InputContinuousLane', description: '입력 연속 이벤트', accent: 'cyan' },
      { name: 'DefaultLane', description: '일반 업데이트', accent: 'teal' },
      { name: 'TransitionLanes', description: '전환/상태 UI 변경', accent: 'violet' },
      { name: 'Retry / Offscreen / Idle 등', description: '특수 목적', accent: 'amber' },
    ],
  },
  mission: {
    number: '5',
    title: '직접 코드에서 따라가 보기',
    cards: [
      {
        title: 'requestUpdateLane 찾기',
        description: 'ReactFiberWorkLoop.js에서 이 함수 정의를 찾습니다.',
        accent: 'blue',
      },
      {
        title: 'transition 분기 확인',
        description: 'requestCurrentTransition → requestTransitionLane 흐름을 확인합니다.',
        accent: 'teal',
      },
      {
        title: '일반 update 분기 확인',
        description: 'eventPriorityToLane(resolveUpdatePriority())로 이어지는 경로를 확인합니다.',
        accent: 'violet',
      },
      {
        title: '문맥에 따른 lane 차이 정리',
        description: '같은 setState라도 문맥이 다르면 lane이 달라진다는 점을 정리합니다.',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '6',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: 'Lane은 update가 발생한 문맥에 따라 결정된다.',
        description: '이벤트, transition, 렌더 중 상황 등 다양한 문맥을 구분해 처리된다.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'transition 문맥은 별도 transition lane으로 간다.',
        description: 'startTransition 안에서는 낮은 우선순위 lane 그룹이 사용된다.',
        accent: 'teal',
      },
      {
        number: '03',
        title: '일반 update는 현재 Event Priority를 Lane으로 바꾼다.',
        description: 'eventPriorityToLane이 핵심 연결 고리이며, Event Priority와 Lane을 연결한다.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: '다음 페이지',
    text: '문맥별 Lane 분기를 익혔다면, transition과 deferred update가 어떻게 낮은 우선순위를 얻는지 살펴봅니다.',
    button: '다음: Transition과 Deferred Update 보기',
    nextTitle: 'Transition과 Deferred Update는 어떻게 낮은 우선순위를 얻을까?',
    href: '/transition-deferred-split',
  },
};

const en: RequestUpdateLaneContent = {
  hero: {
    badges: [
      { label: 'React Internals', tone: 'blue' },
      { label: 'Lane assignment of updates', tone: 'cyan' },
    ],
    titleLines: ['The same setState', 'gets a different Lane', 'depending on where it is called'],
    highlight: 'depending on where it is called',
    subtitle: 'React looks at the context in which an update occurs to pick the right lane.',
    codePill: "setTab('detail')",
    contextCards: [
      {
        key: 'click',
        label: 'Click Handler',
        subtitle: 'Event handler',
        descriptionLines: ['Discrete Event', '→ high-priority Lane'],
        accent: 'blue',
      },
      {
        key: 'transition',
        label: 'startTransition',
        subtitle: 'Transition context',
        descriptionLines: ['Transition Lane', '→ low priority'],
        accent: 'teal',
      },
      {
        key: 'render',
        label: 'Render Phase Update',
        subtitle: 'Update during render',
        descriptionLines: ['Reuses one of the', 'current render lanes'],
        accent: 'violet',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    question:
      'Does it matter to React whether setState was called inside a click handler versus inside startTransition?',
    cards: [
      {
        title: 'Different lane by context',
        description: 'The same setState can receive a different lane.',
        accent: 'blue',
      },
      {
        title: 'Understand internal branching',
        description: 'Learn the branch flow of requestUpdateLane.',
        accent: 'teal',
      },
      {
        title: 'Connect the concepts',
        description: 'It connects to Event Priority and Lane.',
        accent: 'violet',
      },
    ],
  },
  sameSetState: {
    number: '1',
    title: 'Same setState, different lane',
    cards: [
      {
        key: 'click',
        title: 'Button click',
        subtitle: 'Event handler',
        fileLabel: 'JSX',
        code: CLICK_CODE_EN,
        assignedLane: 'SyncLane (Discrete)',
        accent: 'blue',
      },
      {
        key: 'transition',
        title: 'Transition context',
        subtitle: 'startTransition',
        fileLabel: 'JSX',
        code: TRANSITION_CODE,
        assignedLane: 'TransitionLane',
        accent: 'teal',
      },
      {
        key: 'render',
        title: 'Update during render',
        subtitle: 'Render Phase Update',
        fileLabel: 'JSX',
        code: RENDER_CODE,
        assignedLane: 'One of the RenderLanes',
        accent: 'violet',
      },
    ],
  },
  branchFlow: {
    number: '2',
    title: 'Full branch flow of requestUpdateLane',
    flowStart: 'requestUpdateLane(fiber)',
    nodes: [
      { number: '1', question: 'Is it a Legacy root?', yesLabel: 'Yes', yesResult: 'SyncLane' },
      {
        number: '2',
        question: 'Is it a Render phase update?',
        yesLabel: 'Yes',
        yesResult: 'pick from current render lanes',
      },
      {
        number: '3',
        question: 'Is there a Transition context?',
        yesLabel: 'Yes',
        yesResult: 'requestTransitionLane(...)',
      },
      {
        number: '4',
        question: 'General Event Priority → Lane conversion',
        yesLabel: 'Result',
        yesResult: 'eventPriorityToLane(resolveUpdatePriority())',
        isFinal: true,
      },
    ],
    explanationTitle: 'Branch explanations',
    cards: [
      {
        kind: 'badge',
        key: 'legacy',
        title: 'A. Legacy root branch',
        body: 'On an older (non-Concurrent Mode) root, every update is treated as SyncLane. Modern React learning lives in the next branches.',
        resultBadge: 'SyncLane',
        accent: 'blue',
      },
      {
        kind: 'render',
        key: 'render',
        title: 'B. Render phase update branch',
        body: 'An update fired during render in the same component reuses one of the lanes currently being rendered.',
        middleLabel: 'current render lanes example',
        result: 'a lane to reuse',
        accent: 'violet',
      },
      {
        kind: 'flow',
        key: 'transition',
        title: 'C. Transition branch',
        body: 'If a transition context is active, a transition lane is assigned.',
        flowSteps: ['inside startTransition', 'requestTransitionLane(transition)'],
        accent: 'teal',
      },
      {
        kind: 'flow',
        key: 'event',
        title: 'D. General event update branch',
        body: 'Without any special context, React reads the current update priority and converts it to a Lane.',
        flowSteps: ['resolveUpdatePriority()', 'eventPriorityToLane(...)'],
        accent: 'blue',
      },
    ],
  },
  code: {
    number: '3',
    title: 'Source code preview',
    fileLabel: 'ReactFiberWorkLoop.js',
    code: CODE_EN,
    explanationTitle: 'Explanation',
    explanation: [
      'requestCurrentTransition() checks if a transition is currently active.',
      'When a transition exists, control jumps to requestTransitionLane.',
      'Otherwise resolveUpdatePriority() reads the current event priority and eventPriorityToLane converts it into a Lane.',
    ],
    apiBadges: [
      'requestCurrentTransition',
      'requestTransitionLane',
      'eventPriorityToLane',
      'resolveUpdatePriority',
    ],
    button: { label: 'See the code on GitHub', href: REACT_FIBER_WORK_LOOP_URL },
  },
  simulator: {
    number: '4',
    title: 'Context Lane simulator',
    tabsLabel: 'context selector',
    scenarios: [
      {
        key: 'click',
        tabLabel: 'Click handler',
        selectedContext: 'Click handler',
        contextDescription: 'setState is called inside a Discrete Event handler such as a click',
        assignedLane: 'SyncLane (Discrete)',
        bitmaskExample: '0000000000010',
        bitmaskHighlight: [10],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'resolveUpdatePriority() === Discrete',
          'eventPriorityToLane(Discrete)',
          'returns SyncLane',
        ],
        accent: 'blue',
      },
      {
        key: 'transition',
        tabLabel: 'startTransition',
        selectedContext: 'startTransition',
        contextDescription: 'setState is called inside startTransition',
        assignedLane: 'TransitionLane',
        bitmaskExample: '0000000010000',
        bitmaskHighlight: [7],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'requestCurrentTransition() !== null',
          'requestTransitionLane(transition)',
          'returns TransitionLane',
        ],
        accent: 'teal',
      },
      {
        key: 'render',
        tabLabel: 'Render phase',
        selectedContext: 'Render phase update',
        contextDescription: 'setState is called during the render of the same component',
        assignedLane: 'One of the RenderLanes',
        bitmaskExample: '0000000100000',
        bitmaskHighlight: [6],
        codeFlow: [
          'requestUpdateLane(fiber)',
          'isRenderPhaseUpdate(...) === true',
          'pick a lane from current render lanes',
          'returns the reused lane',
        ],
        accent: 'violet',
      },
    ],
    stageLabels: {
      context: 'Selected context',
      lane: 'Assigned Lane',
      flow: 'Code flow',
      bitmask: 'Bitmask example',
    },
    laneSummaryTitle: 'Lane group summary',
    laneSummary: [
      { name: 'SyncLane', description: 'Updates that must run immediately', accent: 'blue' },
      { name: 'InputContinuousLane', description: 'Continuous input events', accent: 'cyan' },
      { name: 'DefaultLane', description: 'General updates', accent: 'teal' },
      { name: 'TransitionLanes', description: 'Transition / state UI changes', accent: 'violet' },
      { name: 'Retry / Offscreen / Idle, etc.', description: 'Special purposes', accent: 'amber' },
    ],
  },
  mission: {
    number: '5',
    title: 'Walk it in the source',
    cards: [
      {
        title: 'Find requestUpdateLane',
        description: 'Look up the definition in ReactFiberWorkLoop.js.',
        accent: 'blue',
      },
      {
        title: 'Check the transition branch',
        description: 'Trace requestCurrentTransition → requestTransitionLane.',
        accent: 'teal',
      },
      {
        title: 'Check the general update branch',
        description: 'Follow the path to eventPriorityToLane(resolveUpdatePriority()).',
        accent: 'violet',
      },
      {
        title: 'Summarize lane differences by context',
        description:
          'Write down that the same setState gets a different lane depending on context.',
        accent: 'blue',
      },
    ],
  },
  takeaways: {
    number: '6',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'A Lane is decided by the context the update happens in.',
        description: 'Events, transitions, render-phase updates — each is handled distinctly.',
        accent: 'blue',
      },
      {
        number: '02',
        title: 'A transition context goes to a dedicated transition lane.',
        description: 'Inside startTransition, the low-priority lane group is used.',
        accent: 'teal',
      },
      {
        number: '03',
        title: 'General updates convert the current Event Priority into a Lane.',
        description: 'eventPriorityToLane is the bridge between Event Priority and Lane.',
        accent: 'violet',
      },
    ],
  },
  cta: {
    eyebrow: 'Next page',
    text: "Now that you know context-based branching, let's see how transitions and deferred updates earn low priority.",
    button: 'Next: Transition & Deferred Update',
    nextTitle: 'How do Transitions and Deferred Updates get their low priority?',
    href: '/transition-deferred-split',
  },
};

export const requestUpdateLaneContent: Record<Locale, RequestUpdateLaneContent> = { ko, en };
