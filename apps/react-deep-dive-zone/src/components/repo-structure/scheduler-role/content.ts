import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type PriorityKey = 'immediate' | 'normal' | 'low';

export type IconName =
  | 'cursor'
  | 'search'
  | 'sparkles'
  | 'zap'
  | 'puzzle'
  | 'clock'
  | 'layers'
  | 'timer'
  | 'monitor'
  | 'refresh';

export type HeroPriorityCard = {
  id: PriorityKey;
  title: string;
  description: string;
  badge: string;
  icon: IconName;
};

export type NeedCard = {
  id: 'input' | 'split' | 'defer';
  title: string;
  description: string;
  example: string;
  tone: ToneKey;
  icon: IconName;
};

export type RelationCard = {
  id: 'reconciler' | 'scheduler';
  title: string;
  subtitle: string;
  bullets: string[];
  tone: ToneKey;
  icon: IconName;
};

export type PriorityRow = {
  id: PriorityKey;
  title: string;
  priorityLabel: string;
  description: string;
  example: string;
  icon: IconName;
};

export type ResponsibilityItem = { text: string };

export type QueueTask = {
  id: 'input' | 'filter' | 'transition';
  title: string;
  badge: string;
  priority: PriorityKey;
};

export type ExecutionRow = {
  id: string;
  rank: number;
  title: string;
  action: string;
  status: 'done' | 'waiting';
  priority: PriorityKey;
};

export type SchedulerContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    priorityHighLabel: string;
    priorityLowLabel: string;
    priorityCards: HeroPriorityCard[];
    railHighLabel: string;
    railLowLabel: string;
  };
  need: {
    eyebrow: string;
    title: string;
    description: string;
    cards: NeedCard[];
  };
  relation: {
    eyebrow: string;
    title: string;
    description: string;
    left: RelationCard;
    right: RelationCard;
    banner: { lead: string; accent1: string; mid: string; accent2: string; tail: string };
  };
  priority: {
    eyebrow: string;
    title: string;
    description: string;
    scaleHigh: string;
    scaleLow: string;
    rows: PriorityRow[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    descriptionLabel: string;
    descriptionValue: string;
    learningQuestion: string;
    primaryCta: string;
    primaryHref: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
  };
  responsibility: {
    eyebrow: string;
    title: string;
    leftTitle: string;
    leftItems: ResponsibilityItem[];
    rightTitle: string;
    rightItems: ResponsibilityItem[];
    banner: string;
  };
  simulation: {
    eyebrow: string;
    title: string;
    incomingTitle: string;
    tasks: QueueTask[];
    centerMessage: string;
    executionTitle: string;
    rows: ExecutionRow[];
    doneLabel: string;
    waitingLabel: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const scheduleCallbackCode = `export function unstable_scheduleCallback(priorityLevel, callback, options) {
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function.');
  }

  const currentTime = getCurrentTime();

  let startTime;
  if (typeof options === 'object' && options !== null) {
    const delay = options.delay;
    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  const timeout = calculateTimeoutForPriorityLevel(priorityLevel);

  const expirationTime = startTime + timeout;

  // ...
}
`;

export const schedulerContent: Record<Locale, SchedulerContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 6/10단계',
      title: {
        line1: '모든 업데이트가',
        line2: '지금 당장 처리되어야 하는',
        line3: '것은 아닙니다.',
      },
      description:
        '입력 반응은 빠르게, 덜 급한 화면 갱신은 상황에 맞게. scheduler는 작업 실행 타이밍을 조율합니다.',
      primaryCta: 'scheduler 지도 보기',
      secondaryCta: 'GitHub에서 보기',
      primaryHref: '#section-need',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/scheduler',
      priorityHighLabel: '우선순위 높음',
      priorityLowLabel: '우선순위 낮음',
      priorityCards: [
        {
          id: 'immediate',
          title: '사용자 입력',
          description: '즉시 처리',
          badge: 'Immediate',
          icon: 'cursor',
        },
        {
          id: 'normal',
          title: '검색 결과 필터링',
          description: '일반 처리',
          badge: 'Normal',
          icon: 'search',
        },
        {
          id: 'low',
          title: '화면 전환 애니메이션',
          description: '뒤로 미룸',
          badge: 'Low',
          icon: 'sparkles',
        },
      ],
      railHighLabel: '빠른 실행',
      railLowLabel: '늦은 실행',
    },
    need: {
      eyebrow: '01 · why scheduler',
      title: '왜 scheduler가 필요한가?',
      description: 'scheduler가 해결하는 세 가지 문제는 다음과 같습니다.',
      cards: [
        {
          id: 'input',
          title: '사용자 입력은\n지연되면 안 된다.',
          description: '클릭, 키 입력 같은 상호작용은 즉시 반응해야 합니다.',
          example: '예: 버튼 클릭, 텍스트 입력',
          tone: 'emerald',
          icon: 'zap',
        },
        {
          id: 'split',
          title: '긴 작업은 나누어\n처리할 필요가 있다.',
          description: '큰 렌더링 작업을 작은 단위로 쪼개어 브라우저가 멈추지 않게 합니다.',
          example: '예: 긴 리스트 렌더링, 복잡한 트리 계산',
          tone: 'blue',
          icon: 'puzzle',
        },
        {
          id: 'defer',
          title: '덜 급한 갱신은\n뒤로 미뤄도 된다.',
          description:
            '화면 전환 애니메이션, 데이터 프리패치 등은 사용자 경험에 맞게 조절할 수 있습니다.',
          example: '예: 백그라운드 데이터 갱신, 프리패치',
          tone: 'violet',
          icon: 'clock',
        },
      ],
    },
    relation: {
      eyebrow: '02 · reconciler vs scheduler',
      title: 'React와 scheduler의 관계',
      description: 'Reconciler는 “무엇을”을 계산하고, Scheduler는 “언제”를 조율합니다.',
      left: {
        id: 'reconciler',
        title: 'React Reconciler',
        subtitle: '무슨 작업이 필요한가?',
        bullets: [
          'Element를 Fiber로 변환',
          '변경 계산 (Reconciliation)',
          '어떤 컴포넌트를 업데이트할지 결정',
          '변경 내용을 commit에 넘길 준비',
        ],
        tone: 'indigo',
        icon: 'layers',
      },
      right: {
        id: 'scheduler',
        title: 'Scheduler',
        subtitle: '언제 실행할까?',
        bullets: [
          '작업을 언제 시작할지 조율',
          '우선순위에 따라 순서 결정',
          '브라우저가 쉬우면 실행',
          '긴 작업을 나누고, 중단/재개 지원',
        ],
        tone: 'teal',
        icon: 'timer',
      },
      banner: {
        lead: 'Scheduler는 렌더링 알고리즘이 아니라, ',
        accent1: '실행 시점을 조율하는 계층',
        mid: '입니다. 계산과 ',
        accent2: '조율',
        tail: '은 서로 다른 책임입니다.',
      },
    },
    priority: {
      eyebrow: '03 · priority visualization',
      title: '우선순위 개념 시각화',
      description: '같은 업데이트라도 긴급도에 따라 처리 순서가 달라집니다.',
      scaleHigh: '긴급도 높음',
      scaleLow: '긴급도 낮음',
      rows: [
        {
          id: 'immediate',
          title: '입력 반응',
          priorityLabel: '매우 급함',
          description: '사용자 입력에 대한 즉각적인 반응이 필요 (키 입력, 클릭, 드래그 등)',
          example: '예시: onClick, onChange, keydown',
          icon: 'zap',
        },
        {
          id: 'normal',
          title: '일반 화면 갱신',
          priorityLabel: '보통',
          description: '일반적인 렌더링 업데이트 (상태 변경, 데이터 표시 등)',
          example: '예시: setState, data fetch 결과 반영',
          icon: 'monitor',
        },
        {
          id: 'low',
          title: 'transition',
          priorityLabel: '덜 급함',
          description: '사용자 경험을 해치지 않는 범위에서 뒤로 미룰 수 있는 업데이트',
          example: '예시: useTransition, startTransition, 화면 전환 애니메이션',
          icon: 'sparkles',
        },
      ],
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: '코드로 보기: 작업 예약은 어떻게 시작될까?',
      fileLabel: '파일',
      filePath: 'packages/scheduler/src/forks/Scheduler.js',
      functionLabel: '볼 함수',
      functionName: 'unstable_scheduleCallback',
      descriptionLabel: '설명',
      descriptionValue:
        '주어진 우선순위에 따라 특정 작업을 예약하고, 언제 실행할지 결정하는 핵심 함수입니다.',
      learningQuestion: '왜 작업 예약 함수는\npriorityLevel을 함께 받을까?',
      primaryCta: 'Scheduler.js 읽기',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js',
      codeHeader: 'packages/scheduler/src/forks/Scheduler.js',
      codeBadge: 'main',
      code: scheduleCallbackCode,
    },
    responsibility: {
      eyebrow: '05 · responsibility boundary',
      title: 'scheduler가 하는 것 / 직접 하지 않는 것',
      leftTitle: 'scheduler가 하는 것',
      leftItems: [
        { text: '작업(콜백)을 예약한다' },
        { text: '우선순위에 따라 실행 순서를 결정한다' },
        { text: '브라우저의 여유 시간에 맞춰 작업을 실행한다' },
        { text: '긴 작업을 나누고, 중단/재개를 지원한다' },
      ],
      rightTitle: 'scheduler가 직접 하지 않는 것',
      rightItems: [
        { text: 'Fiber 트리 생성' },
        { text: 'Reconciliation 알고리즘 수행' },
        { text: 'DOM 노드 생성/수정/삭제' },
        { text: 'Commit 단계에서 실제 반영' },
      ],
      banner: '조율과 계산은 다른 역할이다.',
    },
    simulation: {
      eyebrow: '06 · task queue simulation',
      title: '생활형 체험 시뮬레이션: 작업 대기열',
      incomingTitle: '새로 들어온 작업',
      tasks: [
        {
          id: 'input',
          title: '사용자 입력 (키 입력)',
          badge: 'Immediate',
          priority: 'immediate',
        },
        { id: 'filter', title: '검색 결과 필터링', badge: 'Normal', priority: 'normal' },
        { id: 'transition', title: '화면 전환 애니메이션', badge: 'Low', priority: 'low' },
      ],
      centerMessage: 'scheduler가\n우선순위에 맞게\n정렬하고 실행',
      executionTitle: '실행 순서 (예시)',
      rows: [
        {
          id: 'r1',
          rank: 1,
          title: '사용자 입력 (키 입력)',
          action: '→ 즉시 처리',
          status: 'done',
          priority: 'immediate',
        },
        {
          id: 'r2',
          rank: 2,
          title: '검색 결과 필터링',
          action: '→ 일반 처리',
          status: 'done',
          priority: 'normal',
        },
        {
          id: 'r3',
          rank: 3,
          title: '화면 전환 애니메이션',
          action: '→ 낮은 우선순위',
          status: 'waiting',
          priority: 'low',
        },
      ],
      doneLabel: '완료',
      waitingLabel: '대기 중',
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '실행 타이밍을 조율하는 scheduler를 봤다면,',
      description:
        '이번에는 여러 패키지가 공통으로 쓰는 기반층인 ' + 'shared 패키지' + '를 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/shared-role',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 6/10',
      title: {
        line1: 'Not every update',
        line2: 'has to happen',
        line3: 'right now.',
      },
      description:
        'Input must feel instant, less urgent updates can wait. The scheduler arranges when work runs.',
      primaryCta: 'See the scheduler map',
      secondaryCta: 'Open on GitHub',
      primaryHref: '#section-need',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/scheduler',
      priorityHighLabel: 'High priority',
      priorityLowLabel: 'Low priority',
      priorityCards: [
        {
          id: 'immediate',
          title: 'User input',
          description: 'Handle immediately',
          badge: 'Immediate',
          icon: 'cursor',
        },
        {
          id: 'normal',
          title: 'Search filtering',
          description: 'Normal',
          badge: 'Normal',
          icon: 'search',
        },
        {
          id: 'low',
          title: 'Page transition',
          description: 'Defer',
          badge: 'Low',
          icon: 'sparkles',
        },
      ],
      railHighLabel: 'Earlier',
      railLowLabel: 'Later',
    },
    need: {
      eyebrow: '01 · why scheduler',
      title: 'Why is a scheduler needed?',
      description: 'The scheduler solves three core problems.',
      cards: [
        {
          id: 'input',
          title: 'User input\nmust not be delayed.',
          description: 'Clicks and key presses must respond immediately.',
          example: 'e.g., button clicks, text input',
          tone: 'emerald',
          icon: 'zap',
        },
        {
          id: 'split',
          title: 'Long work must\nbe split into chunks.',
          description: 'Heavy rendering work is broken down so the browser does not freeze.',
          example: 'e.g., long lists, complex tree calculations',
          tone: 'blue',
          icon: 'puzzle',
        },
        {
          id: 'defer',
          title: 'Less urgent updates\ncan be deferred.',
          description:
            'Transitions, prefetching and similar work can be paced to match the experience.',
          example: 'e.g., background data refresh, prefetch',
          tone: 'violet',
          icon: 'clock',
        },
      ],
    },
    relation: {
      eyebrow: '02 · reconciler vs scheduler',
      title: 'React and scheduler relationship',
      description: 'Reconciler decides *what* the work is, scheduler arranges *when* it runs.',
      left: {
        id: 'reconciler',
        title: 'React Reconciler',
        subtitle: 'What work is needed?',
        bullets: [
          'Converts Element into Fiber',
          'Reconciliation and change calculation',
          'Decides which components to update',
          'Prepares changes for commit',
        ],
        tone: 'indigo',
        icon: 'layers',
      },
      right: {
        id: 'scheduler',
        title: 'Scheduler',
        subtitle: 'When should we run?',
        bullets: [
          'Coordinates when work begins',
          'Orders work by priority',
          'Runs when the browser has idle time',
          'Splits long work, supports pause/resume',
        ],
        tone: 'teal',
        icon: 'timer',
      },
      banner: {
        lead: 'The scheduler is not a rendering algorithm — it is a ',
        accent1: 'timing-coordination layer',
        mid: '. Calculation and ',
        accent2: 'coordination',
        tail: ' are separate responsibilities.',
      },
    },
    priority: {
      eyebrow: '03 · priority visualization',
      title: 'Priority visualisation',
      description:
        'Even the same update can have a different execution order depending on its urgency.',
      scaleHigh: 'High urgency',
      scaleLow: 'Low urgency',
      rows: [
        {
          id: 'immediate',
          title: 'Input response',
          priorityLabel: 'Very urgent',
          description: 'Needs an immediate reaction to user input (keys, clicks, drags).',
          example: 'e.g., onClick, onChange, keydown',
          icon: 'zap',
        },
        {
          id: 'normal',
          title: 'Regular UI update',
          priorityLabel: 'Normal',
          description: 'Standard rendering updates (state changes, data display).',
          example: 'e.g., setState, applying fetch results',
          icon: 'monitor',
        },
        {
          id: 'low',
          title: 'transition',
          priorityLabel: 'Lower',
          description: 'Updates that can wait without hurting the experience.',
          example: 'e.g., useTransition, startTransition, page transitions',
          icon: 'sparkles',
        },
      ],
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: 'Code checkpoint: where does scheduling start?',
      fileLabel: 'File',
      filePath: 'packages/scheduler/src/forks/Scheduler.js',
      functionLabel: 'Function',
      functionName: 'unstable_scheduleCallback',
      descriptionLabel: 'Description',
      descriptionValue:
        'The core function that schedules a callback at a given priority and decides when it should run.',
      learningQuestion: 'Why does the schedule\nfunction take a priorityLevel?',
      primaryCta: 'Read Scheduler.js',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js',
      codeHeader: 'packages/scheduler/src/forks/Scheduler.js',
      codeBadge: 'main',
      code: scheduleCallbackCode,
    },
    responsibility: {
      eyebrow: '05 · responsibility boundary',
      title: 'What the scheduler does / does not do',
      leftTitle: 'What the scheduler does',
      leftItems: [
        { text: 'Schedules callbacks' },
        { text: 'Orders execution by priority' },
        { text: 'Runs work when the browser has idle time' },
        { text: 'Splits long work, supports pause/resume' },
      ],
      rightTitle: 'What the scheduler does NOT do',
      rightItems: [
        { text: 'Build the Fiber tree' },
        { text: 'Run the reconciliation algorithm' },
        { text: 'Create / update / delete DOM nodes' },
        { text: 'Apply changes in the commit phase' },
      ],
      banner: 'Coordination and calculation are different jobs.',
    },
    simulation: {
      eyebrow: '06 · task queue simulation',
      title: 'Task queue simulation',
      incomingTitle: 'Incoming tasks',
      tasks: [
        {
          id: 'input',
          title: 'User input (keystroke)',
          badge: 'Immediate',
          priority: 'immediate',
        },
        { id: 'filter', title: 'Search filtering', badge: 'Normal', priority: 'normal' },
        { id: 'transition', title: 'Page transition', badge: 'Low', priority: 'low' },
      ],
      centerMessage: 'Scheduler sorts and\nruns tasks by\npriority',
      executionTitle: 'Execution order (example)',
      rows: [
        {
          id: 'r1',
          rank: 1,
          title: 'User input (keystroke)',
          action: '→ Run immediately',
          status: 'done',
          priority: 'immediate',
        },
        {
          id: 'r2',
          rank: 2,
          title: 'Search filtering',
          action: '→ Normal',
          status: 'done',
          priority: 'normal',
        },
        {
          id: 'r3',
          rank: 3,
          title: 'Page transition',
          action: '→ Low priority',
          status: 'waiting',
          priority: 'low',
        },
      ],
      doneLabel: 'Done',
      waitingLabel: 'Pending',
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'With the scheduler in view,',
      description:
        'next look at the foundation layer many packages depend on — ' + 'shared package' + '.',
      cta: 'Go to the next page',
      href: '/shared-role',
    },
  },
};
