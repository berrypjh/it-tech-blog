import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'record' | 'prioritize' | 'schedule';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type SituationRow = {
  situation: string;
  example: string;
  handling: string;
  goal: string;
};

export type FlowStepId =
  | 'interaction'
  | 'set-state'
  | 'request-lane'
  | 'schedule'
  | 'ensure-root'
  | 'render';

export type FlowStep = {
  id: FlowStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type WhyNotImmediateContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  intuition: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    wrong: { label: string; caption: string; steps: string[] };
    real: { label: string; caption: string; steps: string[] };
    note: string;
  };
  situations: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: SituationRow[];
    note: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
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

const SCHEDULE_CODE = `export function scheduleUpdateOnFiber(root, fiber, lane) {
  // 1. root에 "이 lane에 할 일이 있다"고 표시한다
  markRootUpdated(root, lane);

  if (
    (executionContext & RenderContext) !== NoContext &&
    root === workInProgressRoot
  ) {
    // 렌더 중에 들어온 업데이트는 따로 처리한다
    warnAboutRenderPhaseUpdatesInDEV(fiber);
  } else {
    // 2. 지금 당장 렌더하지 않고, 이 root에 작업을 예약만 한다
    ensureRootIsScheduled(root);
  }
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: WhyNotImmediateContent = {
  hero: {
    badge: 'Scheduler · 1/10단계',
    title: { line1: 'setState는 렌더를 시작하지 않는다', line2: '할 일이 있다고 적어 둘 뿐이다' },
    description:
      'React는 상태가 바뀔 때마다 즉시 렌더하지 않습니다. 업데이트를 기록하고 우선순위를 매긴 뒤, 언제 실행할지는 따로 정합니다.',
    diagramBadge: 'why schedule',
    diagramCaption: 'record → rank → run later',
    stages: [
      {
        id: 'record',
        label: 'Update 기록',
        caption: '무엇을 바꿀지 객체로 남긴다',
        tone: 'cyan',
      },
      {
        id: 'prioritize',
        label: 'Lane 부여',
        caption: '얼마나 급한지 비트로 표시한다',
        tone: 'amber',
      },
      {
        id: 'schedule',
        label: '실행 예약',
        caption: '언제 렌더할지는 스케줄러가 정한다',
        tone: 'violet',
      },
    ],
  },
  intuition: {
    badge: '01',
    eyebrow: 'intuition',
    title: '직관과 실제 사이의 간격',
    description:
      'setState를 부르면 렌더가 시작된다고 생각하기 쉽습니다. 실제로는 두 단계가 더 끼어 있고, 그 사이에 순서가 바뀔 수 있습니다.',
    wrong: {
      label: '흔한 직관',
      caption: '호출과 렌더가 한 줄로 이어져 있다고 가정합니다.',
      steps: ['setState 호출', '곧바로 렌더링', 'DOM 반영'],
    },
    real: {
      label: '실제 흐름',
      caption: '기록과 실행 사이에 우선순위 판정과 예약이 들어갑니다.',
      steps: [
        'setState 호출',
        'requestUpdateLane이 lane을 고른다',
        'root에 pending 표시',
        'ensureRootIsScheduled가 작업을 예약',
        '스케줄러가 차례가 되면 렌더 시작',
      ],
    },
    note: '중간 단계가 있기 때문에 급한 업데이트가 덜 급한 업데이트를 앞지를 수 있습니다. 즉시 실행이면 불가능한 일입니다.',
  },
  situations: {
    badge: '02',
    eyebrow: 'why it matters',
    title: '모두 즉시 처리하면 생기는 일',
    description:
      '업데이트마다 사용자가 기다려도 되는 시간이 다릅니다. 같은 급으로 처리하면 급한 것이 안 급한 것에 막힙니다.',
    headers: ['상황', '예시', 'React가 원하는 처리', '지키려는 것'],
    rows: [
      {
        situation: '텍스트 입력',
        example: '검색창에 한 글자씩 타이핑',
        handling: '가장 높은 우선순위로 즉시 반영',
        goal: '누른 글자가 바로 보이는 것',
      },
      {
        situation: '무거운 목록 렌더',
        example: '검색 결과 수천 개를 그리기',
        handling: '중간 우선순위. 입력보다는 뒤로',
        goal: '목록을 그리느라 입력이 멈추지 않는 것',
      },
      {
        situation: '화면 밖 업데이트',
        example: '접힌 패널이나 프리페치된 데이터',
        handling: '가장 낮은 우선순위. 여유가 있을 때',
        goal: '보이지 않는 작업에 시간을 뺏기지 않는 것',
      },
    ],
    note: '세 줄 모두 "언제 처리하는가"만 다릅니다. 무엇을 처리하는지는 똑같습니다. 그래서 순서를 정하는 장치가 필요합니다.',
  },
  flow: {
    badge: '03',
    eyebrow: 'real flow',
    title: '기록에서 렌더까지 여섯 칸',
    description:
      '이 챕터의 나머지 아홉 페이지가 이 여섯 칸을 하나씩 확대합니다. 지금은 순서와 이름만 잡아 두면 됩니다.',
    steps: [
      {
        id: 'interaction',
        num: '01',
        title: '사용자 상호작용',
        description: '클릭이나 입력이 이벤트 시스템을 거쳐 들어옵니다.',
        tone: 'sky',
      },
      {
        id: 'set-state',
        num: '02',
        title: 'setState / dispatch',
        description: 'Update 객체를 만들어 Hook의 queue에 겁니다.',
        tone: 'cyan',
      },
      {
        id: 'request-lane',
        num: '03',
        title: 'requestUpdateLane',
        description: '지금 실행 맥락을 보고 이 업데이트가 탈 lane을 고릅니다.',
        tone: 'amber',
      },
      {
        id: 'schedule',
        num: '04',
        title: 'scheduleUpdateOnFiber',
        description: 'root까지 올라가며 이 lane에 할 일이 있다고 표시합니다.',
        tone: 'indigo',
      },
      {
        id: 'ensure-root',
        num: '05',
        title: 'ensureRootIsScheduled',
        description: '이미 예약이 있으면 그대로 두고, 없으면 새로 잡습니다.',
        tone: 'violet',
      },
      {
        id: 'render',
        num: '06',
        title: 'render work 시작',
        description: '차례가 되면 가장 급한 lane부터 골라 렌더를 시작합니다.',
        tone: 'emerald',
      },
    ],
    note: '05까지는 전부 기록과 예약입니다. 실제로 컴포넌트가 실행되는 것은 06 한 칸뿐입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'scheduleUpdateOnFiber, markRootUpdated, ensureRootIsScheduled',
    whyLabel: '설명',
    why: '함수 이름이 scheduleUpdate이지 renderUpdate가 아니라는 점, 그리고 본문에 렌더 호출이 없다는 점이 전부입니다.',
    code: SCHEDULE_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '우선순위는 몇 겹으로 되어 있는가',
    description:
      '급한 정도를 표현하는 축이 하나가 아닙니다. 서로 다른 세 축이 어떻게 겹치는지 다음 페이지에서 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/priority-axes',
  },
};

const en: WhyNotImmediateContent = {
  hero: {
    badge: 'Scheduler · 1/10',
    title: { line1: 'setState does not start a render', line2: 'it files work to be done' },
    description:
      'React does not render on every state change. It records the update, ranks how urgent it is, and decides separately when to run it.',
    diagramBadge: 'why schedule',
    diagramCaption: 'record → rank → run later',
    stages: [
      {
        id: 'record',
        label: 'Record the Update',
        caption: 'what to change, stored as an object',
        tone: 'cyan',
      },
      {
        id: 'prioritize',
        label: 'Assign a Lane',
        caption: 'how urgent it is, marked as a bit',
        tone: 'amber',
      },
      {
        id: 'schedule',
        label: 'Schedule the work',
        caption: 'when to render is the scheduler call',
        tone: 'violet',
      },
    ],
  },
  intuition: {
    badge: '01',
    eyebrow: 'intuition',
    title: 'The gap between intuition and reality',
    description:
      'It is easy to assume setState starts a render. In fact two more stages sit in between, and order can change there.',
    wrong: {
      label: 'The common assumption',
      caption: 'The call and the render are imagined as one straight line.',
      steps: ['setState is called', 'A render begins immediately', 'The DOM updates'],
    },
    real: {
      label: 'What really happens',
      caption: 'Ranking and scheduling sit between recording and running.',
      steps: [
        'setState is called',
        'requestUpdateLane picks a lane',
        'The root is marked pending',
        'ensureRootIsScheduled books the work',
        'The scheduler starts the render when its turn comes',
      ],
    },
    note: 'Those middle stages are why an urgent update can overtake a less urgent one — impossible if execution were immediate.',
  },
  situations: {
    badge: '02',
    eyebrow: 'why it matters',
    title: 'What happens if everything runs at once',
    description:
      'Different updates tolerate different waits. Treat them as equal and the urgent ones queue behind the ones that could have waited.',
    headers: ['Situation', 'Example', 'How React wants to treat it', 'What it protects'],
    rows: [
      {
        situation: 'Text input',
        example: 'Typing into a search box one key at a time',
        handling: 'Highest priority, applied immediately',
        goal: 'The character you typed appearing at once',
      },
      {
        situation: 'Heavy list render',
        example: 'Drawing thousands of search results',
        handling: 'Middle priority, behind input',
        goal: 'Typing not stalling while the list is drawn',
      },
      {
        situation: 'Offscreen update',
        example: 'A collapsed panel or prefetched data',
        handling: 'Lowest priority, whenever there is room',
        goal: 'Not spending time on work nobody can see',
      },
    ],
    note: 'All three rows differ only in when the work runs; what runs is identical. That is exactly why an ordering mechanism exists.',
  },
  flow: {
    badge: '03',
    eyebrow: 'real flow',
    title: 'Six stops from record to render',
    description:
      'The other nine pages of this chapter each zoom into one of these stops. For now the order and the names are enough.',
    steps: [
      {
        id: 'interaction',
        num: '01',
        title: 'User interaction',
        description: 'A click or keystroke arrives through the event system.',
        tone: 'sky',
      },
      {
        id: 'set-state',
        num: '02',
        title: 'setState / dispatch',
        description: 'An Update object is created and queued on the Hook.',
        tone: 'cyan',
      },
      {
        id: 'request-lane',
        num: '03',
        title: 'requestUpdateLane',
        description: 'The current execution context decides which lane this update rides.',
        tone: 'amber',
      },
      {
        id: 'schedule',
        num: '04',
        title: 'scheduleUpdateOnFiber',
        description: 'Walk up to the root and mark that this lane has work waiting.',
        tone: 'indigo',
      },
      {
        id: 'ensure-root',
        num: '05',
        title: 'ensureRootIsScheduled',
        description: 'Leave the existing booking alone, or make a new one if there is none.',
        tone: 'violet',
      },
      {
        id: 'render',
        num: '06',
        title: 'Render work begins',
        description: 'When its turn arrives, the most urgent lane is picked and rendering starts.',
        tone: 'emerald',
      },
    ],
    note: 'Everything through stop 05 is recording and booking. Components only actually run at stop 06.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'scheduleUpdateOnFiber, markRootUpdated, ensureRootIsScheduled',
    whyLabel: 'Why',
    why: 'The function is named scheduleUpdate rather than renderUpdate, and its body contains no render call. That is the whole point.',
    code: SCHEDULE_CODE,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How many layers of priority are there',
    description:
      'Urgency is not expressed on a single axis. The next page shows how three separate axes overlap.',
    cta: 'Go to the next page',
    href: '/priority-axes',
  },
};

export const whyNotImmediateContent: Record<Locale, WhyNotImmediateContent> = { ko, en };
