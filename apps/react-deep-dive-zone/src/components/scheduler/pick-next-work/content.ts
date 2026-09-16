import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PendingLane = {
  id: string;
  label: string;
  selected?: boolean;
  tone: ToneKey;
};

export type MicrotaskStepId =
  | 'event-start'
  | 'many-updates'
  | 'event-end'
  | 'microtask'
  | 'schedule';

export type MicrotaskStep = {
  id: MicrotaskStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type FilterId = 'suspended' | 'expired' | 'entangled';

export type Filter = {
  id: FilterId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type PathSideId = 'sync' | 'async';

export type PathSide = {
  id: PathSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type PickNextWorkContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    pendingLabel: string;
    pending: PendingLane[];
    pickedLabel: string;
    picked: string;
  };
  microtask: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: MicrotaskStep[];
    note: string;
  };
  filters: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Filter[];
    note: string;
  };
  paths: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [PathSide, PathSide];
    bridge: { headline: string; sub: string };
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

const SCHEDULE_TASK_CODE = `function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  // 굶주린 lane에 만료 표시를 찍는다
  markStarvedLanesAsExpired(root, currentTime);

  // 지금 처리할 lane 묶음을 고른다
  const nextLanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,
  );

  if (nextLanes === NoLanes) {
    root.callbackNode = null;
    root.callbackPriority = NoLane;
    return NoLane;
  }

  // Sync는 Scheduler task 없이 마이크로태스크에서 바로 flush
  if (includesSyncLane(nextLanes) && !checkIfRootIsPrerendering(root, nextLanes)) {
    root.callbackNode = null;
    root.callbackPriority = SyncLane;
    return SyncLane;
  }

  // 그 외에는 Scheduler에 host task로 등록
  const schedulerPriorityLevel = lanesToEventPriority(nextLanes);
  const newCallbackNode = scheduleCallback(
    schedulerPriorityLevel,
    performWorkOnRootViaSchedulerTask.bind(null, root),
  );

  root.callbackPriority = newCallbackPriority;
  root.callbackNode = newCallbackNode;
  return newCallbackPriority;
}`;

const REACT_FIBER_ROOT_SCHEDULER_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRootScheduler.js';

const ko: PickNextWorkContent = {
  hero: {
    badge: 'Scheduler · 7/10단계',
    title: { line1: '쌓인 것을 전부 하지 않는다', line2: '한 묶음만 골라 시작한다' },
    description:
      'pendingLanes에 비트가 여럿 켜져 있어도 렌더는 한 번에 한 묶음만 다룹니다. 무엇을 고를지가 이 페이지의 주제입니다.',
    diagramBadge: 'pick next',
    diagramCaption: 'pendingLanes → nextLanes',
    pendingLabel: 'root.pendingLanes',
    pending: [
      { id: 'sync', label: 'SyncLane', selected: true, tone: 'emerald' },
      { id: 'transition', label: 'TransitionLane1', tone: 'teal' },
      { id: 'retry', label: 'RetryLane', tone: 'violet' },
      { id: 'idle', label: 'IdleLane', tone: 'sky' },
    ],
    pickedLabel: 'nextLanes',
    picked: 'SyncLane',
  },
  microtask: {
    badge: '01',
    eyebrow: 'why a microtask',
    title: '고르는 일을 한 박자 미룬다',
    description:
      'setState마다 바로 고르면 같은 이벤트 안의 뒤 업데이트를 보지 못합니다. 그래서 선택은 마이크로태스크로 미룹니다.',
    steps: [
      {
        id: 'event-start',
        num: '01',
        title: '이벤트 핸들러 시작',
        description: '클릭 하나가 들어와 핸들러 본문이 실행되기 시작합니다.',
        tone: 'sky',
      },
      {
        id: 'many-updates',
        num: '02',
        title: 'setState가 여러 번',
        description: '각각 lane을 받아 pendingLanes에 비트를 켭니다. 아직 선택은 없습니다.',
        tone: 'cyan',
      },
      {
        id: 'event-end',
        num: '03',
        title: '핸들러 종료',
        description: '이 시점에야 이번 이벤트가 만든 할 일이 전부 모였습니다.',
        tone: 'indigo',
      },
      {
        id: 'microtask',
        num: '04',
        title: '마이크로태스크 실행',
        description: 'scheduleTaskForRootDuringMicrotask가 돌며 이제 무엇을 할지 고릅니다.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '05',
        title: '실행 예약 또는 즉시 flush',
        description: '고른 묶음의 성격에 따라 두 갈래로 나뉩니다.',
        tone: 'emerald',
      },
    ],
    note: '02에서 setState를 열 번 불러도 04는 한 번만 돕니다. 이것이 배칭의 실제 구현입니다.',
  },
  filters: {
    badge: '02',
    eyebrow: 'getNextLanes',
    title: '고를 때 걸러 내는 것들',
    description:
      '가장 급한 비트를 그냥 집는 것이 아닙니다. 지금 시도해도 소용없는 lane과, 더는 미룰 수 없는 lane을 먼저 가려냅니다.',
    items: [
      {
        id: 'suspended',
        title: 'suspended는 건너뛴다',
        role: '재시도 무의미',
        description:
          '데이터를 기다리다 멈춘 lane은 다시 해도 같은 곳에서 멈춥니다. pinged로 옮겨지기 전까지 후보에서 뺍니다.',
        tone: 'amber',
      },
      {
        id: 'expired',
        title: 'expired는 앞세운다',
        role: '굶주림 방지',
        description:
          '계속 밀린 lane에는 만료 표시가 찍힙니다. 표시된 lane이 있으면 우선순위와 무관하게 먼저 처리합니다.',
        tone: 'sky',
      },
      {
        id: 'entangled',
        title: 'entangled는 함께 간다',
        role: '묶인 lane',
        description:
          '같은 transition에 엮인 lane들은 따로 처리하면 화면이 어긋납니다. 한 묶음으로 같이 렌더합니다.',
        tone: 'teal',
      },
    ],
    note: '두 번째가 없으면 낮은 우선순위 업데이트가 영원히 실행되지 않을 수 있습니다. 만료 표시가 그 안전장치입니다.',
  },
  paths: {
    badge: '03',
    eyebrow: 'two paths',
    title: '고른 뒤 갈리는 두 갈래',
    description:
      'nextLanes에 SyncLane이 들어 있는지에 따라 실행 경로가 완전히 달라집니다. 한쪽은 스케줄러를 아예 거치지 않습니다.',
    sides: [
      {
        id: 'sync',
        title: 'Sync 경로',
        badge: '스케줄러 없이',
        description: 'SyncLane이 포함되어 있으면 host task를 잡지 않습니다.',
        bullets: [
          'callbackNode를 null로 두고 바로 flush한다',
          '같은 마이크로태스크 안에서 렌더가 끝난다',
          '중간에 멈추지 않고 끝까지 간다',
          '브라우저에 제어를 돌려주지 않는다',
        ],
        tone: 'emerald',
      },
      {
        id: 'async',
        title: 'Async 경로',
        badge: 'Scheduler 등록',
        description: 'lane을 Scheduler Priority로 바꿔 콜백을 등록합니다.',
        bullets: [
          'scheduleCallback으로 host task를 예약한다',
          '반환된 task 객체를 callbackNode에 보관한다',
          '더 급한 일이 생기면 이 task를 취소할 수 있다',
          '렌더 도중 시간이 다 되면 멈췄다 재개한다',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'SyncLane이\n들어 있는가',
      sub: 'callbackNode가 null인지 아닌지로 두 경로를 구분할 수 있습니다. 디버깅할 때 가장 먼저 볼 값입니다.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    lookForLabel: '볼 것',
    lookFor: 'scheduleTaskForRootDuringMicrotask, getNextLanes, markStarvedLanesAsExpired',
    whyLabel: '설명',
    why: 'Sync 분기에서 callbackNode를 null로 두고 early return한다는 점이, 그 경로가 스케줄러를 쓰지 않는다는 증거입니다.',
    code: SCHEDULE_TASK_CODE,
    primaryCta: 'ReactFiberRootScheduler.js 읽기',
    primaryHref: REACT_FIBER_ROOT_SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '등록한 task는 누가 실행하나',
    description:
      'Async 경로가 부른 scheduleCallback 안으로 들어갑니다. scheduler 패키지가 브라우저를 어떻게 쓰는지 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/host-task-runner',
  },
};

const SCHEDULE_TASK_CODE_EN = `function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  // mark lanes that have been starved for too long
  markStarvedLanesAsExpired(root, currentTime);

  // pick the batch of lanes to work on now
  const nextLanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : NoLanes,
  );

  if (nextLanes === NoLanes) {
    root.callbackNode = null;
    root.callbackPriority = NoLane;
    return NoLane;
  }

  // Sync flushes in the microtask without any Scheduler task
  if (includesSyncLane(nextLanes) && !checkIfRootIsPrerendering(root, nextLanes)) {
    root.callbackNode = null;
    root.callbackPriority = SyncLane;
    return SyncLane;
  }

  // otherwise register a host task with the Scheduler
  const schedulerPriorityLevel = lanesToEventPriority(nextLanes);
  const newCallbackNode = scheduleCallback(
    schedulerPriorityLevel,
    performWorkOnRootViaSchedulerTask.bind(null, root),
  );

  root.callbackPriority = newCallbackPriority;
  root.callbackNode = newCallbackNode;
  return newCallbackPriority;
}`;

const en: PickNextWorkContent = {
  hero: {
    badge: 'Scheduler · 7/10',
    title: { line1: 'It never runs everything pending', line2: 'it picks one batch to start' },
    description:
      'Several bits may be set in pendingLanes, but a render handles one batch at a time. What gets picked is the subject of this page.',
    diagramBadge: 'pick next',
    diagramCaption: 'pendingLanes → nextLanes',
    pendingLabel: 'root.pendingLanes',
    pending: [
      { id: 'sync', label: 'SyncLane', selected: true, tone: 'emerald' },
      { id: 'transition', label: 'TransitionLane1', tone: 'teal' },
      { id: 'retry', label: 'RetryLane', tone: 'violet' },
      { id: 'idle', label: 'IdleLane', tone: 'sky' },
    ],
    pickedLabel: 'nextLanes',
    picked: 'SyncLane',
  },
  microtask: {
    badge: '01',
    eyebrow: 'why a microtask',
    title: 'The choosing is delayed by one beat',
    description:
      'Choosing on every setState would miss later updates in the same event. So the selection is deferred to a microtask.',
    steps: [
      {
        id: 'event-start',
        num: '01',
        title: 'The handler starts',
        description: 'A click comes in and the handler body begins running.',
        tone: 'sky',
      },
      {
        id: 'many-updates',
        num: '02',
        title: 'Several setState calls',
        description: 'Each takes a lane and sets its bit in pendingLanes. Nothing is chosen yet.',
        tone: 'cyan',
      },
      {
        id: 'event-end',
        num: '03',
        title: 'The handler returns',
        description: 'Only now is all the work created by this event fully collected.',
        tone: 'indigo',
      },
      {
        id: 'microtask',
        num: '04',
        title: 'The microtask runs',
        description: 'scheduleTaskForRootDuringMicrotask runs and decides what to work on.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '05',
        title: 'Schedule or flush at once',
        description: 'The chosen batch splits into one of two paths.',
        tone: 'emerald',
      },
    ],
    note: 'Ten setState calls at step 02 still mean one run of step 04. That is what batching actually is.',
  },
  filters: {
    badge: '02',
    eyebrow: 'getNextLanes',
    title: 'What gets filtered out while choosing',
    description:
      'It does not simply grab the most urgent bit. Lanes that cannot progress, and lanes that can wait no longer, are sorted out first.',
    items: [
      {
        id: 'suspended',
        title: 'Skip the suspended',
        role: 'Retrying is pointless',
        description:
          'A lane stalled waiting for data would stall in the same place again, so it is excluded until it is pinged.',
        tone: 'amber',
      },
      {
        id: 'expired',
        title: 'Put the expired first',
        role: 'Starvation guard',
        description:
          'Repeatedly deferred lanes get an expiry mark, and a marked lane is handled first regardless of priority.',
        tone: 'sky',
      },
      {
        id: 'entangled',
        title: 'Keep the entangled together',
        role: 'Tied lanes',
        description:
          'Lanes bound to the same transition would tear the screen if split apart, so they render as one batch.',
        tone: 'teal',
      },
    ],
    note: 'Without the second rule a low-priority update could be starved forever. The expiry mark is that safeguard.',
  },
  paths: {
    badge: '03',
    eyebrow: 'two paths',
    title: 'Two paths after the pick',
    description:
      'Whether nextLanes contains SyncLane changes the execution path completely. One side never touches the scheduler.',
    sides: [
      {
        id: 'sync',
        title: 'The sync path',
        badge: 'no scheduler',
        description: 'When SyncLane is included, no host task is booked at all.',
        bullets: [
          'callbackNode is left null and the work flushes right away',
          'The render finishes inside the same microtask',
          'It runs to completion without stopping',
          'Control is never handed back to the browser',
        ],
        tone: 'emerald',
      },
      {
        id: 'async',
        title: 'The async path',
        badge: 'Scheduler task',
        description: 'The lane becomes a Scheduler Priority and a callback is registered.',
        bullets: [
          'scheduleCallback books a host task',
          'The returned task object is kept in callbackNode',
          'It can be cancelled if something more urgent arrives',
          'It yields and resumes when time runs out mid-render',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'Does it contain\nSyncLane',
      sub: 'Whether callbackNode is null tells the two paths apart — the first value to inspect while debugging.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    lookForLabel: 'Look for',
    lookFor: 'scheduleTaskForRootDuringMicrotask, getNextLanes, markStarvedLanesAsExpired',
    whyLabel: 'Why',
    why: 'The sync branch returning early with callbackNode set to null proves that path never uses the scheduler.',
    code: SCHEDULE_TASK_CODE_EN,
    primaryCta: 'Read ReactFiberRootScheduler.js',
    primaryHref: REACT_FIBER_ROOT_SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Who runs the task that was booked',
    description:
      'Next we step inside the scheduleCallback the async path called, and see how the scheduler package uses the browser.',
    cta: 'Go to the next page',
    href: '/host-task-runner',
  },
};

export const pickNextWorkContent: Record<Locale, PickNextWorkContent> = { ko, en };
