import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SideId = 'root' | 'package';

export type Side = {
  id: SideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type PriorityId = 'immediate' | 'user-blocking' | 'normal' | 'low' | 'idle';

export type PriorityLevel = {
  id: PriorityId;
  name: string;
  timeout: string;
  description: string;
  tone: ToneKey;
};

export type QueueStepId = 'build' | 'push' | 'host-callback' | 'work-loop' | 'run';

export type QueueStep = {
  id: QueueStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type HostTaskRunnerContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    bridgeLabel: string;
    sides: [Side, Side];
  };
  roles: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [Side, Side];
    bridge: { headline: string; sub: string };
  };
  priorities: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: PriorityLevel[];
    note: string;
  };
  queue: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: QueueStep[];
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

const SCHEDULE_CALLBACK_CODE = `function unstable_scheduleCallback(priorityLevel, callback, options) {
  const currentTime = getCurrentTime();
  const startTime = currentTime;

  // 우선순위마다 다른 만료 시간을 준다
  let timeout;
  switch (priorityLevel) {
    case ImmediatePriority:    timeout = -1; break;
    case UserBlockingPriority: timeout = 250; break;
    case IdlePriority:         timeout = 1073741823; break;
    case LowPriority:          timeout = 10000; break;
    default:                   timeout = 5000; break;
  }

  const expirationTime = startTime + timeout;

  const newTask = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };

  newTask.sortIndex = expirationTime;
  push(taskQueue, newTask);

  // 아직 host callback이 예약되어 있지 않다면 예약한다
  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback();
  }

  return newTask;
}`;

const SCHEDULER_HREF =
  'https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js';

const KO_SIDES: [Side, Side] = [
  {
    id: 'root',
    title: 'Root Scheduler',
    badge: 'react-reconciler 안',
    description: '무엇을 할지 고르는 쪽입니다. React의 사정만 압니다.',
    bullets: [
      'pendingLanes에서 nextLanes를 고른다',
      'lane을 Scheduler Priority로 변환한다',
      '렌더와 커밋을 실제로 수행한다',
      '브라우저 사정은 전혀 모른다',
    ],
    tone: 'indigo',
  },
  {
    id: 'package',
    title: 'scheduler 패키지',
    badge: '독립 패키지',
    description: '언제 할지 정하는 쪽입니다. React를 전혀 모릅니다.',
    bullets: [
      '우선순위별 task queue를 관리한다',
      'MessageChannel로 host callback을 잡는다',
      '프레임 시간이 남았는지 판단한다',
      'Fiber도 lane도 알지 못한다',
    ],
    tone: 'violet',
  },
];

const EN_SIDES: [Side, Side] = [
  {
    id: 'root',
    title: 'Root Scheduler',
    badge: 'inside react-reconciler',
    description: 'The side that chooses what to do. It only knows about React.',
    bullets: [
      'Picks nextLanes out of pendingLanes',
      'Converts a lane into a Scheduler Priority',
      'Actually performs render and commit',
      'Knows nothing about the browser',
    ],
    tone: 'indigo',
  },
  {
    id: 'package',
    title: 'The scheduler package',
    badge: 'a standalone package',
    description: 'The side that decides when. It knows nothing about React.',
    bullets: [
      'Maintains a task queue ordered by priority',
      'Books a host callback through MessageChannel',
      'Judges whether frame time remains',
      'Has no idea what a Fiber or a lane is',
    ],
    tone: 'violet',
  },
];

const ko: HostTaskRunnerContent = {
  hero: {
    badge: 'Scheduler · 8/10단계',
    title: { line1: '고르는 쪽과 실행하는 쪽은', line2: '서로를 모른다' },
    description:
      'Root Scheduler와 scheduler 패키지는 다른 물건입니다. 둘을 잇는 것은 scheduleCallback 함수 하나뿐입니다.',
    diagramBadge: 'two schedulers',
    diagramCaption: 'what vs when',
    bridgeLabel: 'scheduleCallback(priority, callback)',
    sides: KO_SIDES,
  },
  roles: {
    badge: '01',
    eyebrow: 'role split',
    title: '이름이 같아 헷갈리는 두 스케줄러',
    description:
      '둘 다 scheduler라고 불리지만 패키지도 책임도 다릅니다. 한쪽은 React 전용이고, 다른 쪽은 React 없이도 쓸 수 있습니다.',
    sides: KO_SIDES,
    bridge: {
      headline: '무엇을 할지와\n언제 할지',
      sub: '두 관심사를 갈라 두었기 때문에 scheduler 패키지를 React 바깥에서도 쓸 수 있고, React는 host 환경을 몰라도 됩니다.',
    },
  },
  priorities: {
    badge: '02',
    eyebrow: 'priority levels',
    title: '우선순위는 결국 만료 시간이다',
    description:
      'scheduler는 우선순위를 등급 이름으로 비교하지 않습니다. 등급마다 다른 타임아웃을 줘서 만료 시각으로 정렬합니다.',
    items: [
      {
        id: 'immediate',
        name: 'ImmediatePriority',
        timeout: '-1ms',
        description: '이미 만료된 상태로 큐에 들어갑니다. 다음 기회에 무조건 먼저 실행됩니다.',
        tone: 'emerald',
      },
      {
        id: 'user-blocking',
        name: 'UserBlockingPriority',
        timeout: '250ms',
        description: '입력 반응을 지켜야 하는 작업. 사람이 지연을 느끼기 시작하는 경계값입니다.',
        tone: 'sky',
      },
      {
        id: 'normal',
        name: 'NormalPriority',
        timeout: '5000ms',
        description: '기본값입니다. 특별한 문맥 없이 예약된 작업이 여기로 옵니다.',
        tone: 'cyan',
      },
      {
        id: 'low',
        name: 'LowPriority',
        timeout: '10000ms',
        description: '뒤로 밀려도 괜찮은 작업. 10초 안에는 처리하겠다는 약속입니다.',
        tone: 'teal',
      },
      {
        id: 'idle',
        name: 'IdlePriority',
        timeout: '사실상 무한',
        description: '만료 시각이 없는 것이나 마찬가지입니다. 정말 할 일이 없을 때만 돌아옵니다.',
        tone: 'violet',
      },
    ],
    note: '만료 시각으로 정렬하기 때문에 낮은 우선순위도 시간이 지나면 앞으로 나옵니다. 굶주림을 막는 장치가 여기에도 있습니다.',
  },
  queue: {
    badge: '03',
    eyebrow: 'task queue',
    title: '등록에서 실행까지 다섯 칸',
    description:
      'scheduleCallback은 콜백을 부르지 않습니다. task를 만들어 힙에 넣고, 실행은 host callback이 따로 가져갑니다.',
    steps: [
      {
        id: 'build',
        num: '01',
        title: 'task 객체 생성',
        description: '우선순위에 맞는 타임아웃을 더해 만료 시각을 계산합니다.',
        tone: 'sky',
      },
      {
        id: 'push',
        num: '02',
        title: 'taskQueue에 삽입',
        description: '만료 시각을 정렬 키로 쓰는 최소 힙에 넣습니다.',
        tone: 'cyan',
      },
      {
        id: 'host-callback',
        num: '03',
        title: 'host callback 예약',
        description: '아직 예약이 없으면 MessageChannel로 다음 매크로태스크를 잡습니다.',
        tone: 'indigo',
      },
      {
        id: 'work-loop',
        num: '04',
        title: 'workLoop 진입',
        description: '예약한 콜백이 돌면 힙에서 가장 급한 task를 꺼냅니다.',
        tone: 'violet',
      },
      {
        id: 'run',
        num: '05',
        title: 'callback 실행',
        description: 'React가 넘긴 performWorkOnRoot가 여기서 처음 불립니다.',
        tone: 'emerald',
      },
    ],
    note: 'setTimeout이 아니라 MessageChannel을 쓰는 이유는 4ms 최소 지연을 피하기 위해서입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/scheduler/src/forks/Scheduler.js',
    lookForLabel: '볼 것',
    lookFor: 'unstable_scheduleCallback, taskQueue, requestHostCallback, workLoop',
    whyLabel: '설명',
    why: 'sortIndex에 expirationTime을 넣는 줄이 "우선순위가 곧 만료 시각"이라는 설계를 한 줄로 보여 줍니다.',
    code: SCHEDULE_CALLBACK_CODE,
    primaryCta: 'Scheduler.js 읽기',
    primaryHref: SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '렌더 도중에 멈출 수 있는 이유',
    description:
      'workLoop이 매번 확인하는 것이 하나 더 있습니다. 시간이 남았는지 보고 멈추는 장치를 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/pause-resume-render',
  },
};

const SCHEDULE_CALLBACK_CODE_EN = `function unstable_scheduleCallback(priorityLevel, callback, options) {
  const currentTime = getCurrentTime();
  const startTime = currentTime;

  // each priority gets a different timeout
  let timeout;
  switch (priorityLevel) {
    case ImmediatePriority:    timeout = -1; break;
    case UserBlockingPriority: timeout = 250; break;
    case IdlePriority:         timeout = 1073741823; break;
    case LowPriority:          timeout = 10000; break;
    default:                   timeout = 5000; break;
  }

  const expirationTime = startTime + timeout;

  const newTask = {
    id: taskIdCounter++,
    callback,
    priorityLevel,
    startTime,
    expirationTime,
    sortIndex: -1,
  };

  newTask.sortIndex = expirationTime;
  push(taskQueue, newTask);

  // book a host callback if one is not already scheduled
  if (!isHostCallbackScheduled && !isPerformingWork) {
    isHostCallbackScheduled = true;
    requestHostCallback();
  }

  return newTask;
}`;

const en: HostTaskRunnerContent = {
  hero: {
    badge: 'Scheduler · 8/10',
    title: {
      line1: 'The side that chooses and the side that runs',
      line2: 'know nothing of each other',
    },
    description:
      'The Root Scheduler and the scheduler package are different things. A single function, scheduleCallback, is all that joins them.',
    diagramBadge: 'two schedulers',
    diagramCaption: 'what vs when',
    bridgeLabel: 'scheduleCallback(priority, callback)',
    sides: EN_SIDES,
  },
  roles: {
    badge: '01',
    eyebrow: 'role split',
    title: 'Two schedulers that share a name',
    description:
      'Both are called a scheduler, yet they live in different packages with different duties. One is React-only; the other works without React at all.',
    sides: EN_SIDES,
    bridge: {
      headline: 'What to do\nand when to do it',
      sub: 'Splitting those concerns is why the scheduler package is usable outside React, and why React needs to know nothing about the host.',
    },
  },
  priorities: {
    badge: '02',
    eyebrow: 'priority levels',
    title: 'Priority is really an expiry time',
    description:
      'The scheduler does not compare grade names. Each grade gets a different timeout, and tasks are ordered by the resulting expiry.',
    items: [
      {
        id: 'immediate',
        name: 'ImmediatePriority',
        timeout: '-1ms',
        description: 'It enters the queue already expired and runs first at the next opportunity.',
        tone: 'emerald',
      },
      {
        id: 'user-blocking',
        name: 'UserBlockingPriority',
        timeout: '250ms',
        description:
          'Work that must keep input responsive — roughly where people start to feel lag.',
        tone: 'sky',
      },
      {
        id: 'normal',
        name: 'NormalPriority',
        timeout: '5000ms',
        description: 'The default. Work scheduled with no special context arrives here.',
        tone: 'cyan',
      },
      {
        id: 'low',
        name: 'LowPriority',
        timeout: '10000ms',
        description: 'Work that may be deferred, with a promise to handle it within ten seconds.',
        tone: 'teal',
      },
      {
        id: 'idle',
        name: 'IdlePriority',
        timeout: 'effectively infinite',
        description:
          'Practically without an expiry. It comes back only when there is truly nothing else.',
        tone: 'violet',
      },
    ],
    note: 'Ordering by expiry means low-priority work eventually moves to the front. Another starvation guard lives here.',
  },
  queue: {
    badge: '03',
    eyebrow: 'task queue',
    title: 'Five stops from booking to running',
    description:
      'scheduleCallback never invokes the callback. It builds a task, heaps it, and a host callback picks it up later.',
    steps: [
      {
        id: 'build',
        num: '01',
        title: 'Build the task object',
        description: 'Add the timeout for the priority to compute an expiration time.',
        tone: 'sky',
      },
      {
        id: 'push',
        num: '02',
        title: 'Push onto taskQueue',
        description: 'Insert into a min-heap that sorts by expiration time.',
        tone: 'cyan',
      },
      {
        id: 'host-callback',
        num: '03',
        title: 'Book a host callback',
        description: 'If none is booked, grab the next macrotask via MessageChannel.',
        tone: 'indigo',
      },
      {
        id: 'work-loop',
        num: '04',
        title: 'Enter the workLoop',
        description: 'When the booked callback fires, pop the most urgent task off the heap.',
        tone: 'violet',
      },
      {
        id: 'run',
        num: '05',
        title: 'Run the callback',
        description: 'The performWorkOnRoot React handed over is finally invoked here.',
        tone: 'emerald',
      },
    ],
    note: 'MessageChannel rather than setTimeout is used to avoid the 4ms minimum clamp.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/scheduler/src/forks/Scheduler.js',
    lookForLabel: 'Look for',
    lookFor: 'unstable_scheduleCallback, taskQueue, requestHostCallback, workLoop',
    whyLabel: 'Why',
    why: 'Assigning expirationTime to sortIndex states the whole design in one line: priority is an expiry time.',
    code: SCHEDULE_CALLBACK_CODE_EN,
    primaryCta: 'Read Scheduler.js',
    primaryHref: SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Why a render can stop midway',
    description:
      'The workLoop checks one more thing every round. Next: the device that looks at remaining time and stops.',
    cta: 'Go to the next page',
    href: '/pause-resume-render',
  },
};

export const hostTaskRunnerContent: Record<Locale, HostTaskRunnerContent> = { ko, en };
