import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type SchedulerIconName =
  | 'activity'
  | 'arrowRight'
  | 'check'
  | 'clock'
  | 'code'
  | 'cube'
  | 'fileCode'
  | 'fileText'
  | 'gauge'
  | 'gitBranch'
  | 'help'
  | 'keyboard'
  | 'layers'
  | 'lightning'
  | 'list'
  | 'monitor'
  | 'puzzle'
  | 'refresh'
  | 'star'
  | 'timer'
  | 'user';

export type PriorityLevel = {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  iconName: SchedulerIconName;
  /** 막대 배경/텍스트 색 변형 */
  variant: 'navy' | 'teal' | 'mint' | 'violet';
};

export type NeedCard = {
  id: string;
  title: string;
  description: string;
  iconName: SchedulerIconName;
  tone: ToneKey;
};

export type CompareCard = {
  id: 'reconciler' | 'scheduler';
  name: string;
  question: string;
  description: string;
  tags: string[];
  iconName: SchedulerIconName;
  tone: ToneKey;
};

export type CheckpointItem = {
  id: 'file' | 'function' | 'question';
  label: string;
  value: string;
  iconName: SchedulerIconName;
  tone: ToneKey;
};

export type DoesItem = { text: string; assignee?: string };

export type SchedulerContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryCtaHref: string;
    secondaryCtaHref: string;
    a11yFlow: string;
    mixedTitle: string;
    mixed: string[];
    schedulerTitle: string;
    schedulerSubtitle: string;
    schedulerNotes: string[];
    orderedTitle: string;
    ordered: string[];
    emphasis: string;
  };
  needs: {
    eyebrow: string;
    title: string;
    description: string;
    cards: NeedCard[];
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    cards: CompareCard[];
    centerBadge: { line1: string; line2: string };
  };
  priority: {
    eyebrow: string;
    title: string;
    description: string;
    levels: PriorityLevel[];
    criteriaTitle: string;
    criteria: string[];
    banner: string;
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    items: CheckpointItem[];
    codeCaption: string;
    code: string;
    codeButtons: { primary: string; secondary: string };
  };
  doesNot: {
    eyebrow: string;
    title: string;
    description: string;
    doesTitle: string;
    doesItems: DoesItem[];
    doesNotTitle: string;
    doesNotItems: DoesItem[];
    banner: string;
  };
  queue: {
    eyebrow: string;
    title: string;
    description: string;
    waiting: { title: string; items: string[] };
    order: { title: string; steps: number[]; reasons: string[] };
    result: { title: string; items: string[] };
  };
  nextStep: {
    eyebrow: string;
    title: string;
    line1Before: string;
    line1Accent: string;
    line1After: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

const SCHEDULER_CODE = `// Scheduler.js
export function unstable_scheduleCallback(
  priorityLevel,
  callback,
  options,
) {
  // priorityLevel: 작업의 긴급도
  // callback: 실행할 일
  // options: delay, timeout 등 예약 관련 설정

  var currentTime = getCurrentTime();
  var startTime;

  if (typeof options === 'object' && options !== null) {
    var delay = options.delay;
    if (typeof delay === 'number' && delay > 0) {
      startTime = currentTime + delay;
    } else {
      startTime = currentTime;
    }
  } else {
    startTime = currentTime;
  }

  // ... 우선순위에 따른 작업 생성 및 큐 삽입
}`;

export const schedulerContent: Record<Locale, SchedulerContent> = {
  ko: {
    hero: {
      badge: '01 · scheduler 이해하기',
      title: {
        line1: '모든 업데이트가',
        line2: '같은 긴급도를 가지지는',
        line3: '않습니다.',
      },
      description:
        '입력 반응은 빠르게, 덜 급한 화면 갱신은 뒤로. scheduler는 작업을 언제 실행할지 조율하는 기반층입니다.',
      primaryCta: '우선순위 모델 보기',
      secondaryCta: '코드로 확인하기',
      primaryCtaHref: '#section-priority',
      secondaryCtaHref: '#section-checkpoint',
      a11yFlow:
        '왼쪽 카드에는 도착 순서로 섞여 있는 5개 작업이 있고, 가운데 scheduler 카드가 우선순위를 판단하여, 오른쪽 카드에서 실행 순서가 1부터 5까지 재정렬된다.',
      mixedTitle: '섞여 있는 작업',
      mixed: [
        '검색 결과 렌더링',
        '사용자 입력 이벤트',
        '배경 Transition 업데이트',
        '알림 배지 갱신',
        '통계 패널 갱신',
      ],
      schedulerTitle: 'scheduler',
      schedulerSubtitle: '예약 조율 계층',
      schedulerNotes: ['우선순위 판단', '실행 시점 조율'],
      orderedTitle: '재정렬된 실행 순서',
      ordered: [
        '사용자 입력 이벤트',
        '검색 결과 렌더링',
        '알림 배지 갱신',
        '통계 패널 갱신',
        '배경 Transition 업데이트',
      ],
      emphasis: '중요한 것은 먼저, 덜 중요한 것은 나중에.',
    },
    needs: {
      eyebrow: '02 · need',
      title: 'scheduler가 필요한 상황',
      description: '세 가지 대표 상황으로 scheduler가 왜 필요한지 살펴봅니다.',
      cards: [
        {
          id: 'input',
          title: '사용자 입력 지연 방지',
          description:
            '타이핑, 클릭, 스크롤 등 입력 반응을 빠르게 처리하여 UI가 끊기지 않게 합니다.',
          iconName: 'keyboard',
          tone: 'teal',
        },
        {
          id: 'split',
          title: '긴 렌더링 작업 분할',
          description:
            '큰 렌더링 작업을 잘게 나누어 중간에 우선순위 높은 작업이 끼어들 수 있게 합니다.',
          iconName: 'puzzle',
          tone: 'violet',
        },
        {
          id: 'defer',
          title: '덜 급한 업데이트 뒤로 미루기',
          description:
            '화면에 당장 보이지 않아도 되는 작업은 뒤로 보내어 전체 경험을 부드럽게 만듭니다.',
          iconName: 'clock',
          tone: 'amber',
        },
      ],
    },
    compare: {
      eyebrow: '03 · reconciler vs scheduler',
      title: 'reconciler와 scheduler의 차이',
      description: 'reconciler는 "무엇을", scheduler는 "언제"를 책임집니다.',
      centerBadge: { line1: '계산과 시간 관리도', line2: '분리되어 있다.' },
      cards: [
        {
          id: 'reconciler',
          name: 'reconciler',
          question: '무슨 일을 해야 하는가?',
          description: '현재와 다음 상태를 비교하고, 변경 목록을 계산한다.',
          tags: ['계산', 'Fiber', 'Render Work', '변경 목록'],
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          question: '그 일을 언제 실행할 것인가?',
          description: '작업의 중요도를 판단하고, 언제 실행할지 조율한다.',
          tags: ['시간 조율', '우선순위', '콜백 예약', '지연 실행'],
          iconName: 'clock',
          tone: 'violet',
        },
      ],
    },
    priority: {
      eyebrow: '04 · priority model',
      title: '우선순위 모델 요약',
      description: '높은 우선순위는 먼저, 낮은 우선순위는 뒤로. 4단계로 정리합니다.',
      levels: [
        {
          id: 'sync',
          number: '1',
          title: 'Immediate / Sync 계열',
          description: '동기/즉시 작업, blocking update, flushSync 등',
          badge: '가장 높음',
          iconName: 'lightning',
          variant: 'navy',
        },
        {
          id: 'user-blocking',
          number: '2',
          title: 'User-blocking / 입력 반응',
          description: '사용자 입력과 직접 연결된 업데이트',
          badge: '높음',
          iconName: 'user',
          variant: 'teal',
        },
        {
          id: 'normal',
          number: '3',
          title: 'Normal',
          description: '일반적인 렌더링 업데이트',
          badge: '보통',
          iconName: 'monitor',
          variant: 'mint',
        },
        {
          id: 'low',
          number: '4',
          title: 'Low / Transition 계열',
          description: '전환/비긴급 업데이트, 뒤로 미룰 수 있는 작업',
          badge: '낮음',
          iconName: 'refresh',
          variant: 'violet',
        },
      ],
      criteriaTitle: '우선순위 판단 기준',
      criteria: [
        '사용자 입력과의 거리',
        '화면에 미치는 영향의 즉시성',
        '작업의 크기와 비용',
        '현재 브라우저 여유 시간',
      ],
      banner: '높은 우선순위일수록 먼저 실행됩니다.',
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: '코드 체크포인트',
      items: [
        {
          id: 'file',
          label: '파일',
          value: 'packages/scheduler/src/forks/Scheduler.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'function',
          label: '볼 함수',
          value: 'unstable_scheduleCallback',
          iconName: 'fileCode',
          tone: 'violet',
        },
        {
          id: 'question',
          label: '학습 질문',
          value: '왜 작업 예약 함수에는 priorityLevel이 필요할까?',
          iconName: 'help',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/scheduler/src/forks/Scheduler.js',
      code: SCHEDULER_CODE,
      codeButtons: { primary: 'Scheduler.js 열기', secondary: 'scheduler 흐름 보기' },
    },
    doesNot: {
      eyebrow: '06 · does / does not',
      title: 'scheduler가 하는 일 / 하지 않는 일',
      description: 'scheduler의 책임과 다른 패키지의 책임을 분명히 나눕니다.',
      doesTitle: 'scheduler가 하는 일',
      doesItems: [
        { text: '작업(callback) 예약 및 관리' },
        { text: '우선순위 기반으로 실행 시점 조율' },
        { text: '작업을 지연하거나 중단/재개' },
        { text: '브라우저의 여유 시간을 고려한 스케줄링' },
      ],
      doesNotTitle: 'scheduler가 하지 않는 일',
      doesNotItems: [
        { text: 'Fiber 노드 생성', assignee: 'reconciler의 역할' },
        { text: '렌더링 계산(diff) 수행', assignee: 'reconciler의 역할' },
        { text: 'DOM/Native 환경에 반영', assignee: 'renderer의 역할' },
        { text: 'UI 변경의 실제 수행(mutation)', assignee: 'renderer의 역할' },
      ],
      banner: 'scheduler는 렌더링 엔진이 아니라 예약 조율 계층이다.',
    },
    queue: {
      eyebrow: '07 · task queue',
      title: '작업 대기열 체험하기',
      description: '도착 순서와 실제 처리 순서가 어떻게 달라지는지 카드 세 장으로 살펴봅니다.',
      waiting: {
        title: '대기열 (도착 순서)',
        items: [
          '사용자 입력한 키보드 이벤트',
          '검색 결과 목록 200개 렌더링',
          '배경 영역 transition 업데이트',
        ],
      },
      order: {
        title: '처리 순서 (scheduler 판단)',
        steps: [1, 2, 3],
        reasons: [
          '1번: 입력 반응이 가장 중요',
          '2번: 화면에 직접 보이는 결과',
          '3번: 당장 보이지 않아도 되는 전환 작업',
        ],
      },
      result: {
        title: '결과',
        items: [
          '입력 지연 최소화',
          '부드러운 스크롤/타이핑 경험',
          '큰 작업도 UI를 멈추지 않고 처리',
        ],
      },
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '다음 단계로 이동하기',
      line1Before: '작업 실행 시점을 조율하는 ',
      line1Accent: 'scheduler',
      line1After: '를 봤다면,',
      line2Before: '이제 여러 패키지가 공유하는 공통 기반층, ',
      line2Accent: 'shared',
      line2After: '를 살펴봅니다.',
      primaryCta: '다음: shared →',
      secondaryCta: '이전 페이지 다시 보기',
      primaryHref: '/shared-constants',
      secondaryHref: '/renderer-vs-reconciler',
    },
  },
  en: {
    hero: {
      badge: '01 · understanding scheduler',
      title: {
        line1: 'Not every update',
        line2: 'is equally urgent.',
        line3: '',
      },
      description:
        'Input reactions go fast; less urgent screen updates go later. scheduler is the layer that decides *when* work runs.',
      primaryCta: 'See the priority model',
      secondaryCta: 'Inspect the code',
      primaryCtaHref: '#section-priority',
      secondaryCtaHref: '#section-checkpoint',
      a11yFlow:
        'On the left, five mixed tasks arrive in arrival order. The center scheduler card decides their priority. On the right, the same five tasks appear reordered from 1 to 5 in execution order.',
      mixedTitle: 'Mixed tasks',
      mixed: [
        'Render search results',
        'User input event',
        'Background transition update',
        'Notification badge refresh',
        'Stats panel refresh',
      ],
      schedulerTitle: 'scheduler',
      schedulerSubtitle: 'Coordination layer',
      schedulerNotes: ['Judge priority', 'Coordinate timing'],
      orderedTitle: 'Reordered execution',
      ordered: [
        'User input event',
        'Render search results',
        'Notification badge refresh',
        'Stats panel refresh',
        'Background transition update',
      ],
      emphasis: 'Important things first; less important things later.',
    },
    needs: {
      eyebrow: '02 · need',
      title: 'When scheduler is needed',
      description: 'Three scenarios that explain why scheduler exists.',
      cards: [
        {
          id: 'input',
          title: 'Prevent input lag',
          description: 'Typing, clicking, scrolling — input reactions must stay smooth.',
          iconName: 'keyboard',
          tone: 'teal',
        },
        {
          id: 'split',
          title: 'Split long render work',
          description:
            'Break big render passes into chunks so higher-priority work can slip in between.',
          iconName: 'puzzle',
          tone: 'violet',
        },
        {
          id: 'defer',
          title: 'Defer less urgent updates',
          description: 'Push offscreen updates to the back to keep the overall experience fluid.',
          iconName: 'clock',
          tone: 'amber',
        },
      ],
    },
    compare: {
      eyebrow: '03 · reconciler vs scheduler',
      title: 'reconciler vs scheduler',
      description: 'reconciler owns "what"; scheduler owns "when".',
      centerBadge: { line1: 'Compute and timing', line2: 'are separated too.' },
      cards: [
        {
          id: 'reconciler',
          name: 'reconciler',
          question: 'What needs to be done?',
          description: 'Compares current vs next state and builds a change list.',
          tags: ['Compute', 'Fiber', 'Render Work', 'Change list'],
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'scheduler',
          name: 'scheduler',
          question: 'When should it run?',
          description: 'Judges importance and decides when to execute it.',
          tags: ['Timing', 'Priority', 'Callback queue', 'Deferred execution'],
          iconName: 'clock',
          tone: 'violet',
        },
      ],
    },
    priority: {
      eyebrow: '04 · priority model',
      title: 'Priority model summary',
      description: 'High priority first, low priority later — four tiers.',
      levels: [
        {
          id: 'sync',
          number: '1',
          title: 'Immediate / Sync',
          description: 'Sync, blocking updates, flushSync etc.',
          badge: 'Highest',
          iconName: 'lightning',
          variant: 'navy',
        },
        {
          id: 'user-blocking',
          number: '2',
          title: 'User-blocking / Input',
          description: 'Updates directly tied to user input',
          badge: 'High',
          iconName: 'user',
          variant: 'teal',
        },
        {
          id: 'normal',
          number: '3',
          title: 'Normal',
          description: 'Ordinary rendering updates',
          badge: 'Normal',
          iconName: 'monitor',
          variant: 'mint',
        },
        {
          id: 'low',
          number: '4',
          title: 'Low / Transition',
          description: 'Non-urgent and deferrable updates',
          badge: 'Low',
          iconName: 'refresh',
          variant: 'violet',
        },
      ],
      criteriaTitle: 'How priority is judged',
      criteria: [
        'Distance from user input',
        'Visual immediacy',
        'Work size and cost',
        'Current browser budget',
      ],
      banner: 'Higher priority runs first.',
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: 'Code checkpoint',
      items: [
        {
          id: 'file',
          label: 'File',
          value: 'packages/scheduler/src/forks/Scheduler.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'function',
          label: 'Function',
          value: 'unstable_scheduleCallback',
          iconName: 'fileCode',
          tone: 'violet',
        },
        {
          id: 'question',
          label: 'Question',
          value: 'Why does the scheduling function need a priorityLevel?',
          iconName: 'help',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/scheduler/src/forks/Scheduler.js',
      code: SCHEDULER_CODE,
      codeButtons: { primary: 'Open Scheduler.js', secondary: 'See the scheduler flow' },
    },
    doesNot: {
      eyebrow: '06 · does / does not',
      title: 'What scheduler does — and does not — do',
      description: 'Map scheduler’s responsibilities versus the other packages’.',
      doesTitle: 'scheduler does',
      doesItems: [
        { text: 'Queue and manage callbacks' },
        { text: 'Coordinate timing by priority' },
        { text: 'Pause, resume, or delay work' },
        { text: 'Respect the browser’s available time' },
      ],
      doesNotTitle: 'scheduler does NOT',
      doesNotItems: [
        { text: 'Create Fiber nodes', assignee: 'reconciler' },
        { text: 'Compute rendering diffs', assignee: 'reconciler' },
        { text: 'Apply changes to DOM/Native', assignee: 'renderer' },
        { text: 'Perform UI mutations', assignee: 'renderer' },
      ],
      banner: 'scheduler is a coordination layer, not a rendering engine.',
    },
    queue: {
      eyebrow: '07 · task queue',
      title: 'Walk through a task queue',
      description: 'See how arrival order is reshaped into execution order across three cards.',
      waiting: {
        title: 'Queue (arrival order)',
        items: [
          'Typed keyboard event',
          'Render 200 search results',
          'Background transition update',
        ],
      },
      order: {
        title: 'Execution order (scheduler)',
        steps: [1, 2, 3],
        reasons: [
          '1: Input reaction matters most',
          '2: User-visible result',
          '3: Off-screen transition',
        ],
      },
      result: {
        title: 'Outcome',
        items: ['Minimal input lag', 'Smooth scroll & typing', 'Large work without UI freezes'],
      },
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'Move to the next step',
      line1Before: 'You have seen the layer that schedules work — ',
      line1Accent: 'scheduler',
      line1After: '.',
      line2Before: 'Next, the foundation every package shares — ',
      line2Accent: 'shared',
      line2After: '.',
      primaryCta: 'Next: shared →',
      secondaryCta: 'Revisit the previous page',
      primaryHref: '/shared-constants',
      secondaryHref: '/renderer-vs-reconciler',
    },
  },
};
