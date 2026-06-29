import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroFlowIcon = 'hand' | 'route' | 'crosshair' | 'braces';

export type HeroFlowStep = {
  id: string;
  kind: 'card' | 'object';
  label: string;
  description?: string;
  code?: string;
  fields?: string[];
  tone: ToneKey;
  icon: HeroFlowIcon;
  connectorLabel?: string;
};

export type HeroSummaryPill = {
  icon: 'crosshair' | 'database' | 'link';
  label: string;
};

export type LaneDecisionIcon = 'hand' | 'workflow' | 'split' | 'crosshair';

export type LaneDecisionStep = {
  number: string;
  title: string;
  tone: ToneKey;
  icon: LaneDecisionIcon;
  emphasized?: boolean;
};

export type UpdateFieldIcon = 'crosshair' | 'zap' | 'undo' | 'gauge' | 'sparkles' | 'link';

export type UpdateField = {
  name: string;
  body: string;
  badge: string;
  tone: ToneKey;
  icon: UpdateFieldIcon;
};

export type ActionCompareCard = {
  title: string;
  code: string;
  result: string;
  resultDetail: string;
  tone: ToneKey;
  icon: 'crosshair' | 'functionSquare';
  badge: string;
};

export type LaneUpdateObjectContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    flow: {
      caption: string;
      heading: string;
      steps: HeroFlowStep[];
    };
    summary: HeroSummaryPill[];
  };
  requestLane: {
    eyebrow: string;
    title: string;
    flow: { label: string; tone: ToneKey }[];
    mainBody: string;
    mainBodyEmphasis: string;
    subBody: string;
    decisionTitle: string;
    decisionSubtitle: string;
    decisionSteps: LaneDecisionStep[];
  };
  structure: {
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    summaryTitle: string;
    summaryBody: string;
    summaryItems: { key: string; body: string; tone: ToneKey }[];
  };
  fields: {
    eyebrow: string;
    title: string;
    description: string;
    cards: UpdateField[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryHref: string;
    primaryCta: string;
  };
  action: {
    eyebrow: string;
    title: string;
    description: string;
    leftCard: ActionCompareCard;
    rightCard: ActionCompareCard;
    connectorLabel: string;
    bottomNote: string;
  };
  summary: {
    eyebrow: string;
    title: string;
    lines: string[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCodeKo = `function dispatchSetStateInternal(fiber, queue, action, lane) {
  const update = {
    lane,
    revertLane: NoLane,
    gesture: null,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null,
  };

  // 이후 eager state 계산과 queue 연결로 이어진다.
}`;

const checkpointCodeEn = `function dispatchSetStateInternal(fiber, queue, action, lane) {
  const update = {
    lane,
    revertLane: NoLane,
    gesture: null,
    action,
    hasEagerState: false,
    eagerState: null,
    next: null,
  };

  // eager state computation and queue linking follow.
}`;

const structureCode = `const update = {
  lane,
  revertLane: NoLane,
  gesture: null,
  action,
  hasEagerState: false,
  eagerState: null,
  next: null,
};`;

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: LaneUpdateObjectContent = {
  hero: {
    badge: '업데이트 시작 · 4/10단계',
    title: {
      line1: 'React는 업데이트를',
      line2: '객체로 만들어 관리합니다.',
    },
    description:
      'setState(count + 1)은 내부적으로 하나의 update 객체가 됩니다. 이 객체는 어떤 우선순위로 처리할지, 어떤 값을 적용할지, 미리 계산된 상태가 있는지까지 함께 들고 있습니다.',
    flow: {
      caption: '한 호출 안의 4단계',
      heading: 'setCount → update 객체',
      steps: [
        {
          id: 'user',
          kind: 'card',
          label: '사용자 코드',
          code: 'setCount(count + 1);',
          tone: 'emerald',
          icon: 'hand',
          connectorLabel: 'requestUpdateLane(fiber)',
        },
        {
          id: 'lane',
          kind: 'card',
          label: 'lane 선택',
          description: '우선순위 lane 결정',
          tone: 'sky',
          icon: 'crosshair',
          connectorLabel: 'dispatchSetStateInternal',
        },
        {
          id: 'dispatch',
          kind: 'card',
          label: 'dispatchSetStateInternal',
          description: 'update 객체 생성',
          tone: 'violet',
          icon: 'route',
          connectorLabel: 'const update = {…}',
        },
        {
          id: 'object',
          kind: 'object',
          label: 'update',
          tone: 'amber',
          icon: 'braces',
          fields: ['lane', 'action', 'hasEagerState', 'eagerState', 'next'],
        },
      ],
    },
    summary: [
      { icon: 'crosshair', label: 'lane 선택' },
      { icon: 'database', label: 'action 저장' },
      { icon: 'link', label: 'queue 연결 준비' },
    ],
  },
  requestLane: {
    eyebrow: '01 · lane 결정',
    title: 'requestUpdateLane의 역할',
    flow: [
      { label: 'dispatchSetState', tone: 'sky' },
      { label: 'requestUpdateLane(fiber)', tone: 'violet' },
      { label: 'lane 선택', tone: 'emerald' },
    ],
    mainBody: 'lane은 이 update가 어떤 긴급도로 처리되어야 하는지 표현하는',
    mainBodyEmphasis: '우선순위 정보다.',
    subBody:
      'React는 실행 맥락과 현재 모드, transition 여부 등에 따라 lane을 선택합니다. 예를 들어 특정 경우에는 SyncLane, transition 중에는 transition lane 계열을 선택할 수 있습니다.',
    decisionTitle: 'lane 결정 조건',
    decisionSubtitle: 'requestUpdateLane 내부에서 보는 4가지 신호',
    decisionSteps: [
      { number: '1', title: '이벤트 발생', tone: 'sky', icon: 'hand' },
      { number: '2', title: '현재 실행 맥락 확인', tone: 'cyan', icon: 'workflow' },
      { number: '3', title: 'transition 여부 확인', tone: 'violet', icon: 'split' },
      { number: '4', title: 'lane 결정', tone: 'amber', icon: 'crosshair', emphasized: true },
    ],
  },
  structure: {
    eyebrow: '02 · update 객체',
    title: 'update 객체 전체 구조',
    description:
      'dispatchSetStateInternal이 처음 만드는 update 객체의 골격입니다. 이 형태는 이후 queue 연결과 eager bailout 판단의 출발점이 됩니다.',
    codeHeader: 'update-object.js',
    code: structureCode,
    summaryTitle: 'update 객체는 무엇을 담을까?',
    summaryBody:
      '이 객체는 "상태를 어떻게 바꿀지"뿐 아니라 "언제, 어떤 우선순위로 처리할지"까지 담고 있다.',
    summaryItems: [
      { key: 'lane', body: '처리 우선순위', tone: 'sky' },
      { key: 'action', body: 'setter에 전달된 값', tone: 'emerald' },
      { key: 'eagerState', body: '미리 계산한 다음 상태', tone: 'cyan' },
      { key: 'next', body: '다음 update와 연결하는 포인터', tone: 'violet' },
    ],
  },
  fields: {
    eyebrow: '03 · 필드 해설',
    title: '필드별 의미 해설',
    description:
      '각 필드가 무엇을 표현하는지 한 번에 정리합니다. 코드를 읽다가 막힐 때 이 카드들로 빠르게 돌아올 수 있습니다.',
    cards: [
      {
        name: 'lane',
        body: '이 업데이트의 우선순위입니다. React가 어떤 작업부터 처리할지 판단하는 기준입니다.',
        badge: 'priority',
        tone: 'sky',
        icon: 'crosshair',
      },
      {
        name: 'action',
        body: 'setState에 전달한 값 또는 updater 함수입니다. 실제 다음 state 계산에 사용됩니다.',
        badge: 'payload',
        tone: 'emerald',
        icon: 'zap',
      },
      {
        name: 'revertLane',
        body: '특정 optimistic update나 되돌림 흐름과 연결될 수 있는 lane 정보입니다. 기본값은 NoLane입니다.',
        badge: 'optimistic',
        tone: 'amber',
        icon: 'undo',
      },
      {
        name: 'hasEagerState',
        body: 'render 전에 다음 상태를 미리 계산했는지 나타냅니다.',
        badge: 'boolean',
        tone: 'violet',
        icon: 'gauge',
      },
      {
        name: 'eagerState',
        body: '미리 계산된 다음 상태입니다. 현재 state와 같다면 bailout 판단에 쓰일 수 있습니다.',
        badge: 'bailout',
        tone: 'cyan',
        icon: 'sparkles',
      },
      {
        name: 'next',
        body: '다음 update와 연결하는 포인터입니다. 여러 update가 queue 안에서 연결될 때 사용됩니다.',
        badge: 'pointer',
        tone: 'indigo',
        icon: 'link',
      },
    ],
  },
  checkpoint: {
    eyebrow: '04 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    functionLabel: '함수',
    functionName: 'dispatchSetStateInternal',
    learningQuestion: 'React는 setter에 전달한 값을 어디에 저장할까?',
    codeHeader: 'ReactFiberHooks.js',
    codeBadge: 'main',
    code: checkpointCodeKo,
    primaryHref: githubHref,
    primaryCta: 'GitHub에서 dispatchSetStateInternal 보기',
  },
  action: {
    eyebrow: '05 · action의 두 모습',
    title: 'action 값이 왜 중요할까?',
    description:
      'setter에는 값과 updater 함수 모두 전달할 수 있습니다. 두 경우 모두 update.action에 그대로 보관됩니다.',
    leftCard: {
      title: '값을 직접 전달하는 경우',
      code: 'setCount(count + 1);',
      result: 'action',
      resultDetail: 'count + 1 결과값',
      tone: 'sky',
      icon: 'crosshair',
      badge: 'value',
    },
    rightCard: {
      title: 'updater 함수를 전달하는 경우',
      code: 'setCount((prev) => prev + 1);',
      result: 'action',
      resultDetail: 'updater function',
      tone: 'violet',
      icon: 'functionSquare',
      badge: 'function',
    },
    connectorLabel: 'action으로 저장',
    bottomNote: 'React는 이후 reducer를 통해 action을 실제 다음 state 계산에 사용한다.',
  },
  summary: {
    eyebrow: '06 · 핵심 요약',
    title: '핵심 요약',
    lines: [
      'setState의 결과는 단순 값이 아니라, lane과 action을 가진 update 객체입니다.',
      'lane은 우선순위를 기록하고, action은 변경 요청을 담습니다.',
      'next는 여러 update를 queue로 연결합니다.',
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'eager bailout',
    description:
      'update 객체가 만들어졌다면, 이제 React가 경우에 따라 렌더링을 아예 건너뛸 수 있는 eager bailout을 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/root-pending',
  },
};

const en: LaneUpdateObjectContent = {
  hero: {
    badge: 'Update Flow · 4/10',
    title: {
      line1: 'React turns updates',
      line2: 'into structured objects.',
    },
    description:
      'setState(count + 1) becomes a single update object inside React. That object carries the priority, the value to apply, and even a pre-computed next state when available.',
    flow: {
      caption: 'Four stages inside one call',
      heading: 'setCount → update object',
      steps: [
        {
          id: 'user',
          kind: 'card',
          label: 'User code',
          code: 'setCount(count + 1);',
          tone: 'emerald',
          icon: 'hand',
          connectorLabel: 'requestUpdateLane(fiber)',
        },
        {
          id: 'lane',
          kind: 'card',
          label: 'Lane selection',
          description: 'pick the priority lane',
          tone: 'sky',
          icon: 'crosshair',
          connectorLabel: 'dispatchSetStateInternal',
        },
        {
          id: 'dispatch',
          kind: 'card',
          label: 'dispatchSetStateInternal',
          description: 'build the update object',
          tone: 'violet',
          icon: 'route',
          connectorLabel: 'const update = {…}',
        },
        {
          id: 'object',
          kind: 'object',
          label: 'update',
          tone: 'amber',
          icon: 'braces',
          fields: ['lane', 'action', 'hasEagerState', 'eagerState', 'next'],
        },
      ],
    },
    summary: [
      { icon: 'crosshair', label: 'Pick lane' },
      { icon: 'database', label: 'Save action' },
      { icon: 'link', label: 'Prep queue link' },
    ],
  },
  requestLane: {
    eyebrow: '01 · PICKING THE LANE',
    title: 'The role of requestUpdateLane',
    flow: [
      { label: 'dispatchSetState', tone: 'sky' },
      { label: 'requestUpdateLane(fiber)', tone: 'violet' },
      { label: 'lane chosen', tone: 'emerald' },
    ],
    mainBody: 'A lane encodes how urgently this update should be processed —',
    mainBodyEmphasis: 'a priority signal.',
    subBody:
      'React reads execution context, current mode, and whether a transition is active to pick the lane. Some paths pick SyncLane; transitions pick a transition lane.',
    decisionTitle: 'How the lane is chosen',
    decisionSubtitle: 'Four signals requestUpdateLane checks',
    decisionSteps: [
      { number: '1', title: 'Event fires', tone: 'sky', icon: 'hand' },
      { number: '2', title: 'Check execution context', tone: 'cyan', icon: 'workflow' },
      { number: '3', title: 'Check transition flag', tone: 'violet', icon: 'split' },
      { number: '4', title: 'Decide the lane', tone: 'amber', icon: 'crosshair', emphasized: true },
    ],
  },
  structure: {
    eyebrow: '02 · UPDATE OBJECT',
    title: 'The shape of the update object',
    description:
      'This is the skeleton that dispatchSetStateInternal builds first. From here, queue linking and eager bailout decisions follow.',
    codeHeader: 'update-object.js',
    code: structureCode,
    summaryTitle: 'What does the update object carry?',
    summaryBody: 'It captures "how to change state" *and* "when, at what priority, to process it".',
    summaryItems: [
      { key: 'lane', body: 'processing priority', tone: 'sky' },
      { key: 'action', body: 'value passed to the setter', tone: 'emerald' },
      { key: 'eagerState', body: 'pre-computed next state', tone: 'cyan' },
      { key: 'next', body: 'pointer to the next update', tone: 'violet' },
    ],
  },
  fields: {
    eyebrow: '03 · FIELD REFERENCE',
    title: 'Field-by-field meaning',
    description:
      'A quick reference for what each field stores. Come back here whenever the source gets dense.',
    cards: [
      {
        name: 'lane',
        body: 'The priority of this update. React uses it to decide what work to do first.',
        badge: 'priority',
        tone: 'sky',
        icon: 'crosshair',
      },
      {
        name: 'action',
        body: 'The value or updater function passed to setState. Used when computing the next state.',
        badge: 'payload',
        tone: 'emerald',
        icon: 'zap',
      },
      {
        name: 'revertLane',
        body: 'Lane info used by optimistic-update or revert flows. Defaults to NoLane.',
        badge: 'optimistic',
        tone: 'amber',
        icon: 'undo',
      },
      {
        name: 'hasEagerState',
        body: 'Whether the next state was pre-computed before render.',
        badge: 'boolean',
        tone: 'violet',
        icon: 'gauge',
      },
      {
        name: 'eagerState',
        body: 'The pre-computed next state. If it equals the current state, React may bail out of rendering.',
        badge: 'bailout',
        tone: 'cyan',
        icon: 'sparkles',
      },
      {
        name: 'next',
        body: 'Pointer to the next update. Used to chain multiple updates inside the queue.',
        badge: 'pointer',
        tone: 'indigo',
        icon: 'link',
      },
    ],
  },
  checkpoint: {
    eyebrow: '04 · CODE CHECKPOINT',
    title: 'Source checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    functionLabel: 'Function',
    functionName: 'dispatchSetStateInternal',
    learningQuestion: 'Where does React store the value passed to the setter?',
    codeHeader: 'ReactFiberHooks.js',
    codeBadge: 'main',
    code: checkpointCodeEn,
    primaryHref: githubHref,
    primaryCta: 'View dispatchSetStateInternal on GitHub',
  },
  action: {
    eyebrow: '05 · TWO FACES',
    title: 'Why action matters',
    description:
      'The setter accepts both a value and an updater function. Either way, the input is stored verbatim in update.action.',
    leftCard: {
      title: 'Passing a value',
      code: 'setCount(count + 1);',
      result: 'action',
      resultDetail: 'the value of count + 1',
      tone: 'sky',
      icon: 'crosshair',
      badge: 'value',
    },
    rightCard: {
      title: 'Passing an updater',
      code: 'setCount((prev) => prev + 1);',
      result: 'action',
      resultDetail: 'the updater function',
      tone: 'violet',
      icon: 'functionSquare',
      badge: 'function',
    },
    connectorLabel: 'stored as action',
    bottomNote: 'React later runs the reducer over action to compute the next state.',
  },
  summary: {
    eyebrow: '06 · KEY SUMMARY',
    title: 'Key summary',
    lines: [
      "setState doesn't produce a plain value — it produces an update object with a lane and an action.",
      'lane records the priority; action carries the change request.',
      'next links the updates together inside the queue.',
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'eager bailout',
    description:
      'Now that the update object is built, see how React can sometimes skip the render entirely — the eager bailout.',
    cta: 'Go to the next page',
    href: '/root-pending',
  },
};

export const laneUpdateObjectContent: Record<Locale, LaneUpdateObjectContent> = { ko, en };
