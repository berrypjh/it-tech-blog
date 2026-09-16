import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type AxisId = 'event' | 'lane' | 'scheduler';

export type Axis = {
  id: AxisId;
  label: string;
  question: string;
  description: string;
  examples: string[];
  tone: ToneKey;
};

export type AxisRow = {
  axis: string;
  decidedBy: string;
  storedAs: string;
  answers: string;
};

export type ChainStepId = 'event' | 'resolve' | 'to-lane' | 'merge' | 'pick' | 'host-task';

export type ChainStep = {
  id: ChainStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type PriorityAxesContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    axes: Axis[];
  };
  axes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Axis[];
    note: string;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: AxisRow[];
    note: string;
  };
  chain: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ChainStep[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const LANE_CONVERSION_CODE = `// 1축: 이벤트 문맥이 만든 Event Priority
export function requestUpdateLane(fiber) {
  const mode = fiber.mode;

  if ((mode & ConcurrentMode) === NoMode) {
    return SyncLane;
  }

  const transition = requestCurrentTransition();
  if (transition !== null) {
    return requestTransitionLane(transition);
  }

  // 2축: Event Priority를 Lane으로 변환
  return eventPriorityToLane(resolveUpdatePriority());
}

export function eventPriorityToLane(updatePriority) {
  return updatePriority;
}

// 3축: Lane을 Scheduler Priority로 변환
function lanesToEventPriority(lanes) {
  const lane = getHighestPriorityLane(lanes);

  if (!isHigherEventPriority(DiscreteEventPriority, lane)) {
    return DiscreteEventPriority;
  }
  if (!isHigherEventPriority(ContinuousEventPriority, lane)) {
    return ContinuousEventPriority;
  }
  if (includesNonIdleWork(lane)) {
    return DefaultEventPriority;
  }
  return IdleEventPriority;
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const KO_AXES: Axis[] = [
  {
    id: 'event',
    label: 'Event Priority',
    question: '이 업데이트는 어떤 상황에서 시작됐나',
    description:
      '이벤트 시스템이 세워 둔 실행 문맥입니다. click인지 mousemove인지에 따라 등급이 정해집니다.',
    examples: ['DiscreteEventPriority', 'ContinuousEventPriority', 'DefaultEventPriority'],
    tone: 'sky',
  },
  {
    id: 'lane',
    label: 'Lane',
    question: '이 업데이트를 어디에 담아 둘 것인가',
    description:
      'React 내부에서 업데이트를 묶고 비교하는 단위입니다. 비트 하나가 lane 하나에 해당합니다.',
    examples: ['SyncLane', 'DefaultLane', 'TransitionLane1'],
    tone: 'amber',
  },
  {
    id: 'scheduler',
    label: 'Scheduler Priority',
    question: '브라우저에 언제 일을 넘길 것인가',
    description:
      'scheduler 패키지가 host task를 잡을 때 쓰는 등급입니다. React 바깥의 개념에 가깝습니다.',
    examples: ['ImmediatePriority', 'UserBlockingPriority', 'NormalPriority'],
    tone: 'violet',
  },
];

const EN_AXES: Axis[] = [
  {
    id: 'event',
    label: 'Event Priority',
    question: 'What situation did this update start in',
    description:
      'The execution context the event system set up. Whether it was a click or a mousemove decides the grade.',
    examples: ['DiscreteEventPriority', 'ContinuousEventPriority', 'DefaultEventPriority'],
    tone: 'sky',
  },
  {
    id: 'lane',
    label: 'Lane',
    question: 'Where should this update be stored',
    description:
      'The unit React uses internally to group and compare updates. One bit corresponds to one lane.',
    examples: ['SyncLane', 'DefaultLane', 'TransitionLane1'],
    tone: 'amber',
  },
  {
    id: 'scheduler',
    label: 'Scheduler Priority',
    question: 'When should the work be handed to the browser',
    description:
      'The grade the scheduler package uses when booking a host task. Closer to a concept outside React.',
    examples: ['ImmediatePriority', 'UserBlockingPriority', 'NormalPriority'],
    tone: 'violet',
  },
];

const ko: PriorityAxesContent = {
  hero: {
    badge: 'Scheduler · 2/10단계',
    title: { line1: '"급하다"는 말이 가리키는 것이', line2: '세 군데나 있다' },
    description:
      'Event Priority, Lane, Scheduler Priority는 서로 다른 층에 있습니다. 이름이 비슷해 섞이기 쉽지만 답하는 질문이 각자 다릅니다.',
    diagramBadge: 'three axes',
    diagramCaption: 'context → storage → host task',
    axes: KO_AXES,
  },
  axes: {
    badge: '01',
    eyebrow: 'three axes',
    title: '세 축이 답하는 질문',
    description:
      '층이 다르다는 것은 질문이 다르다는 뜻입니다. 각 축이 무엇에 답하는지만 잡아 두면 섞이지 않습니다.',
    items: KO_AXES,
    note: '"click은 SyncLane이다"는 말은 세 축을 한 문장에 눌러 담은 것입니다. 정확히는 click이 Discrete 문맥을 만들고, 그 문맥이 SyncLane으로 변환됩니다.',
  },
  compare: {
    badge: '02',
    eyebrow: 'side by side',
    title: '누가 정하고 어디에 남는가',
    description:
      '세 축은 정하는 주체도, 남는 자리도 다릅니다. 디버깅할 때 어느 값을 봐야 하는지가 여기서 갈립니다.',
    headers: ['축', '누가 정하나', '어디에 남나', '무엇에 답하나'],
    rows: [
      {
        axis: 'Event Priority',
        decidedBy: '이벤트 시스템의 dispatch wrapper',
        storedAs: '모듈 변수 currentUpdatePriority',
        answers: '지금 실행 중인 코드가 얼마나 급한 맥락인가',
      },
      {
        axis: 'Lane',
        decidedBy: 'requestUpdateLane',
        storedAs: 'update.lane과 root.pendingLanes 비트',
        answers: '이 업데이트를 어느 묶음으로 처리할 것인가',
      },
      {
        axis: 'Scheduler Priority',
        decidedBy: 'lanesToEventPriority 변환 결과',
        storedAs: 'scheduler task 객체의 priorityLevel',
        answers: '브라우저 main thread를 언제 쓸 것인가',
      },
    ],
    note: '세 값 중 렌더 결과를 직접 가르는 것은 Lane뿐입니다. 나머지 둘은 Lane을 정하거나 Lane을 실행할 시점을 정하는 데 쓰입니다.',
  },
  chain: {
    badge: '03',
    eyebrow: 'how they connect',
    title: '클릭 한 번이 세 축을 지나는 길',
    description:
      '세 축은 병렬로 존재하지 않습니다. 앞 축의 결과가 다음 축의 입력이 되는 사슬입니다.',
    steps: [
      {
        id: 'event',
        num: '01',
        title: '이벤트 발생',
        description: '브라우저가 click을 던지고 React의 dispatch wrapper가 받습니다.',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '02',
        title: 'Event Priority 확정',
        description: 'wrapper가 DiscreteEventPriority를 현재 문맥으로 세웁니다.',
        tone: 'sky',
      },
      {
        id: 'to-lane',
        num: '03',
        title: 'eventPriorityToLane',
        description: 'setState가 불리면 그 문맥을 읽어 lane 비트로 바꿉니다.',
        tone: 'amber',
      },
      {
        id: 'merge',
        num: '04',
        title: 'root에 lane 병합',
        description: 'root.pendingLanes에 OR 연산으로 비트를 더합니다.',
        tone: 'indigo',
      },
      {
        id: 'pick',
        num: '05',
        title: 'nextLanes 선택',
        description: 'root scheduler가 pending 중 가장 급한 묶음을 골라냅니다.',
        tone: 'violet',
      },
      {
        id: 'host-task',
        num: '06',
        title: 'Scheduler Priority로 변환',
        description: '고른 lane을 host task 등급으로 바꿔 scheduleCallback에 넘깁니다.',
        tone: 'emerald',
      },
    ],
    note: '03과 06이 변환 지점입니다. 두 함수 이름만 기억해 두면 세 축 사이를 언제든 오갈 수 있습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'requestUpdateLane, eventPriorityToLane, lanesToEventPriority',
    whyLabel: '설명',
    why: 'eventPriorityToLane이 인자를 그대로 돌려준다는 점이, 두 축이 같은 숫자를 다른 이름으로 부르고 있음을 드러냅니다.',
    code: LANE_CONVERSION_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Lane은 실제로 어떻게 생겼나',
    description:
      '가운데 축인 Lane을 열어 봅니다. 왜 숫자가 아니라 비트인지, 그래서 무엇이 쉬워지는지 확인합니다.',
    cta: '다음 페이지로 이동',
    href: '/lane-shape',
  },
};

const en: PriorityAxesContent = {
  hero: {
    badge: 'Scheduler · 2/10',
    title: { line1: 'The word "urgent" points', line2: 'at three different things' },
    description:
      'Event Priority, Lane and Scheduler Priority live on different layers. The names blur together, but each answers a different question.',
    diagramBadge: 'three axes',
    diagramCaption: 'context → storage → host task',
    axes: EN_AXES,
  },
  axes: {
    badge: '01',
    eyebrow: 'three axes',
    title: 'The question each axis answers',
    description:
      'Different layers means different questions. Hold on to what each one answers and they stop blurring.',
    items: EN_AXES,
    note: 'Saying "a click is SyncLane" compresses all three axes into one sentence. Precisely: a click creates a Discrete context, and that context converts to SyncLane.',
  },
  compare: {
    badge: '02',
    eyebrow: 'side by side',
    title: 'Who decides it and where it lands',
    description:
      'Each axis has a different decider and a different resting place. Which value to inspect while debugging follows from this.',
    headers: ['Axis', 'Who decides', 'Where it lives', 'What it answers'],
    rows: [
      {
        axis: 'Event Priority',
        decidedBy: 'The dispatch wrapper in the event system',
        storedAs: 'The module variable currentUpdatePriority',
        answers: 'How urgent is the context the running code sits in',
      },
      {
        axis: 'Lane',
        decidedBy: 'requestUpdateLane',
        storedAs: 'update.lane and bits in root.pendingLanes',
        answers: 'Which batch should this update be processed with',
      },
      {
        axis: 'Scheduler Priority',
        decidedBy: 'The result of lanesToEventPriority',
        storedAs: 'priorityLevel on the scheduler task object',
        answers: 'When should the browser main thread be used',
      },
    ],
    note: 'Of the three, only the Lane directly determines render output. The other two decide the Lane or when that Lane runs.',
  },
  chain: {
    badge: '03',
    eyebrow: 'how they connect',
    title: 'One click travelling all three axes',
    description:
      'The axes are not parallel. Each one feeds its result into the next, forming a chain.',
    steps: [
      {
        id: 'event',
        num: '01',
        title: 'The event fires',
        description: 'The browser dispatches a click and the React wrapper receives it.',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '02',
        title: 'Event Priority is fixed',
        description: 'The wrapper installs DiscreteEventPriority as the current context.',
        tone: 'sky',
      },
      {
        id: 'to-lane',
        num: '03',
        title: 'eventPriorityToLane',
        description: 'When setState runs it reads that context and turns it into a lane bit.',
        tone: 'amber',
      },
      {
        id: 'merge',
        num: '04',
        title: 'Merge the lane into the root',
        description: 'The bit is OR-ed into root.pendingLanes.',
        tone: 'indigo',
      },
      {
        id: 'pick',
        num: '05',
        title: 'Select nextLanes',
        description: 'The root scheduler picks the most urgent batch among the pending ones.',
        tone: 'violet',
      },
      {
        id: 'host-task',
        num: '06',
        title: 'Convert to Scheduler Priority',
        description: 'The chosen lane becomes a host task grade passed to scheduleCallback.',
        tone: 'emerald',
      },
    ],
    note: 'Steps 03 and 06 are the conversion points. Remember those two function names and you can move between axes at will.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'requestUpdateLane, eventPriorityToLane, lanesToEventPriority',
    whyLabel: 'Why',
    why: 'eventPriorityToLane returning its argument unchanged reveals that two axes call the same number by different names.',
    code: LANE_CONVERSION_CODE,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What a Lane actually looks like',
    description:
      'Next we open the middle axis: why it is a bit rather than a number, and what that makes easy.',
    cta: 'Go to the next page',
    href: '/lane-shape',
  },
};

export const priorityAxesContent: Record<Locale, PriorityAxesContent> = { ko, en };
