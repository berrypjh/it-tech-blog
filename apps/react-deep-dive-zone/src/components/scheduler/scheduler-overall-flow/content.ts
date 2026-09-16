import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type StageId = 'update' | 'lane' | 'root' | 'pick' | 'task' | 'render';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type FlowStepId =
  | 'set-state'
  | 'request-lane'
  | 'mark-root'
  | 'microtask'
  | 'schedule'
  | 'work-loop'
  | 'yield'
  | 'commit';

export type FlowStep = {
  id: FlowStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ScenarioRow = {
  scenario: string;
  lane: string;
  path: string;
  yielding: string;
};

export type FileRow = {
  file: string;
  owns: string;
  functions: string;
};

export type SchedulerOverallFlowContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  fullFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
    note: string;
  };
  scenarios: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: ScenarioRow[];
    note: string;
  };
  files: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: FileRow[];
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
  finale: FinaleBannerContent;
};

const RECAP_CODE = `// 1. 기록: 문맥을 보고 lane을 고른다
const lane = requestUpdateLane(fiber);

// 2. 표시: root까지 올라가며 pendingLanes에 켠다
markRootUpdated(root, lane);
ensureRootIsScheduled(root);

// 3. 선택: 마이크로태스크에서 무엇을 할지 고른다
const nextLanes = getNextLanes(root, workInProgressRootRenderLanes);

// 4. 예약: sync가 아니면 host task로 넘긴다
const newCallbackNode = scheduleCallback(
  lanesToEventPriority(nextLanes),
  performWorkOnRootViaSchedulerTask.bind(null, root),
);

// 5. 실행: Fiber 하나마다 시간을 확인한다
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}`;

const REACT_FIBER_ROOT_SCHEDULER_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRootScheduler.js';

const ko: SchedulerOverallFlowContent = {
  hero: {
    badge: 'Scheduler · 10/10단계',
    title: { line1: '아홉 페이지의 조각을', line2: '한 줄기로 다시 잇는다' },
    description:
      'setState 한 번이 lane을 받고, root에 기록되고, 골라지고, 예약되고, 멈췄다 재개되며 화면에 닿기까지의 전체 경로입니다.',
    diagramBadge: 'recap',
    diagramCaption: 'update → lane → render',
    stages: [
      { id: 'update', label: 'setState', caption: 'Update 생성 · 1페이지', tone: 'cyan' },
      { id: 'lane', label: 'requestUpdateLane', caption: '문맥 → lane · 2~5페이지', tone: 'amber' },
      { id: 'root', label: 'root.pendingLanes', caption: '할 일 기록 · 6페이지', tone: 'indigo' },
      { id: 'pick', label: 'getNextLanes', caption: '무엇을 먼저 · 7페이지', tone: 'violet' },
      { id: 'task', label: 'scheduleCallback', caption: '언제 실행 · 8페이지', tone: 'teal' },
      {
        id: 'render',
        label: 'workLoopConcurrent',
        caption: '멈췄다 재개 · 9페이지',
        tone: 'emerald',
      },
    ],
  },
  fullFlow: {
    badge: '01',
    eyebrow: 'one flow',
    title: '호출 한 줄에서 화면까지 여덟 칸',
    description:
      '챕터에서 따로 본 함수들을 시간 순으로 세우면 전체가 이 여덟 칸에 들어갑니다. 각 칸이 앞선 페이지 하나씩에 대응합니다.',
    steps: [
      {
        id: 'set-state',
        num: '01',
        title: 'setState 호출',
        description: 'Update 객체가 만들어져 Hook의 queue에 걸립니다.',
        tone: 'cyan',
      },
      {
        id: 'request-lane',
        num: '02',
        title: 'requestUpdateLane',
        description: '이벤트·transition·렌더 문맥을 차례로 검사해 lane 비트를 고릅니다.',
        tone: 'amber',
      },
      {
        id: 'mark-root',
        num: '03',
        title: 'root까지 표시',
        description: 'childLanes를 켜며 올라가 root.pendingLanes에 비트를 더합니다.',
        tone: 'indigo',
      },
      {
        id: 'microtask',
        num: '04',
        title: '마이크로태스크 대기',
        description: '같은 이벤트의 나머지 업데이트를 다 모을 때까지 선택을 미룹니다.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '05',
        title: 'nextLanes 선택과 예약',
        description: 'sync면 바로 flush, 아니면 scheduleCallback으로 host task를 잡습니다.',
        tone: 'violet',
      },
      {
        id: 'work-loop',
        num: '06',
        title: 'workLoop 진입',
        description: '가장 급한 task를 꺼내 React의 렌더 함수를 실행합니다.',
        tone: 'teal',
      },
      {
        id: 'yield',
        num: '07',
        title: '멈춤과 재개',
        description: 'Fiber 하나마다 시간을 확인하고, 다 됐으면 함수를 돌려주며 양보합니다.',
        tone: 'sky',
      },
      {
        id: 'commit',
        num: '08',
        title: '커밋과 lane 정리',
        description: '렌더가 끝나면 커밋하고, markRootFinished가 끝난 lane 비트를 지웁니다.',
        tone: 'emerald',
      },
    ],
    note: '07에서 멈추면 03의 기록은 그대로 남습니다. 렌더가 버려져도 할 일이 사라지지 않는 이유입니다.',
  },
  scenarios: {
    badge: '02',
    eyebrow: 'three scenarios',
    title: '세 가지 업데이트가 지나는 길',
    description:
      '같은 여덟 칸을 지나지만 칸마다 값이 다릅니다. 세 시나리오를 나란히 두면 각 칸이 무엇을 바꾸는지 보입니다.',
    headers: ['시나리오', '받는 lane', '실행 경로', '중단 가능한가'],
    rows: [
      {
        scenario: '버튼 클릭의 setState',
        lane: 'SyncLane',
        path: '마이크로태스크에서 즉시 flush',
        yielding: '아니오. workLoopSync로 끝까지',
      },
      {
        scenario: 'startTransition 안의 setState',
        lane: 'TransitionLane',
        path: 'scheduleCallback으로 host task',
        yielding: '예. Fiber마다 shouldYield 확인',
      },
      {
        scenario: '오래 밀린 transition',
        lane: 'TransitionLane (만료됨)',
        path: 'expiredLanes로 표시되어 우선 처리',
        yielding: '아니오. 만료된 작업은 끝까지',
      },
    ],
    note: '세 번째 줄이 중요합니다. 같은 lane이라도 오래 밀리면 중단 불가능한 동기 렌더로 성격이 바뀝니다.',
  },
  files: {
    badge: '03',
    eyebrow: 'file map',
    title: '다시 열 때 찾을 파일 넷',
    description:
      '스케줄러 코드는 두 패키지에 걸쳐 있습니다. 어느 파일이 어느 칸을 담당하는지 알면 길을 잃지 않습니다.',
    headers: ['파일', '담당하는 칸', '핵심 함수'],
    rows: [
      {
        file: 'ReactFiberLane.js',
        owns: '02 lane 정의와 비트 연산',
        functions: 'SyncLane, getHighestPriorityLane, getNextLanes',
      },
      {
        file: 'ReactFiberWorkLoop.js',
        owns: '01~03, 06~08',
        functions: 'requestUpdateLane, scheduleUpdateOnFiber, workLoopConcurrent',
      },
      {
        file: 'ReactFiberRootScheduler.js',
        owns: '04~05 선택과 예약',
        functions: 'ensureRootIsScheduled, scheduleTaskForRootDuringMicrotask',
      },
      {
        file: 'scheduler/src/forks/Scheduler.js',
        owns: '06~07 host task 실행',
        functions: 'unstable_scheduleCallback, workLoop, shouldYieldToHost',
      },
    ],
    note: '앞의 셋은 react-reconciler, 마지막 하나는 별도 scheduler 패키지입니다. 경계가 8페이지에서 본 그 경계입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    lookForLabel: '볼 것',
    lookFor: 'requestUpdateLane, markRootUpdated, getNextLanes, scheduleCallback, shouldYield',
    whyLabel: '설명',
    why: '다섯 조각을 이어 붙이면 기록부터 실행까지가 한 화면에 들어옵니다. 챕터 전체의 축약본입니다.',
    code: RECAP_CODE,
    primaryCta: 'ReactFiberRootScheduler.js 읽기',
    primaryHref: REACT_FIBER_ROOT_SCHEDULER_HREF,
  },
  finale: {
    progressLabel: '12/15 챕터 완료',
    copyLine1: '업데이트가 언제 어떤 순서로',
    copyLine2: '실행되는지 끝까지 읽었습니다.',
    copyLine3: '다음은 Suspense와 복구 모델입니다.',
    primaryCta: 'Suspense / Error / Hydration 읽기',
    primaryHref: '/why-failable-render',
    secondaryCta: 'Scheduler 챕터 처음부터 다시 보기',
    secondaryHref: '/why-not-immediate',
  },
};

const RECAP_CODE_EN = `// 1. Record: pick a lane from the current context
const lane = requestUpdateLane(fiber);

// 2. Mark: climb to the root and set the bit in pendingLanes
markRootUpdated(root, lane);
ensureRootIsScheduled(root);

// 3. Select: decide what to work on inside a microtask
const nextLanes = getNextLanes(root, workInProgressRootRenderLanes);

// 4. Book: anything non-sync becomes a host task
const newCallbackNode = scheduleCallback(
  lanesToEventPriority(nextLanes),
  performWorkOnRootViaSchedulerTask.bind(null, root),
);

// 5. Run: check the clock after every Fiber
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}`;

const en: SchedulerOverallFlowContent = {
  hero: {
    badge: 'Scheduler · 10/10',
    title: { line1: 'Nine pages of pieces', line2: 'rejoined into one path' },
    description:
      'The full route of a single setState: taking a lane, being recorded on the root, getting picked, booked, paused, resumed and finally reaching the screen.',
    diagramBadge: 'recap',
    diagramCaption: 'update → lane → render',
    stages: [
      { id: 'update', label: 'setState', caption: 'Update created · page 1', tone: 'cyan' },
      {
        id: 'lane',
        label: 'requestUpdateLane',
        caption: 'context → lane · pages 2–5',
        tone: 'amber',
      },
      {
        id: 'root',
        label: 'root.pendingLanes',
        caption: 'work recorded · page 6',
        tone: 'indigo',
      },
      { id: 'pick', label: 'getNextLanes', caption: 'what comes first · page 7', tone: 'violet' },
      { id: 'task', label: 'scheduleCallback', caption: 'when to run · page 8', tone: 'teal' },
      {
        id: 'render',
        label: 'workLoopConcurrent',
        caption: 'pause and resume · page 9',
        tone: 'emerald',
      },
    ],
  },
  fullFlow: {
    badge: '01',
    eyebrow: 'one flow',
    title: 'Eight stops from one call to the screen',
    description:
      'Lined up in time order, every function from this chapter fits into these eight stops, one per earlier page.',
    steps: [
      {
        id: 'set-state',
        num: '01',
        title: 'setState is called',
        description: 'An Update object is created and queued on the Hook.',
        tone: 'cyan',
      },
      {
        id: 'request-lane',
        num: '02',
        title: 'requestUpdateLane',
        description:
          'Event, transition and render contexts are checked in turn to pick a lane bit.',
        tone: 'amber',
      },
      {
        id: 'mark-root',
        num: '03',
        title: 'Mark up to the root',
        description: 'childLanes are set on the way up and the bit is added to root.pendingLanes.',
        tone: 'indigo',
      },
      {
        id: 'microtask',
        num: '04',
        title: 'Wait for the microtask',
        description: 'Selection is deferred until every update from this event has been collected.',
        tone: 'violet',
      },
      {
        id: 'schedule',
        num: '05',
        title: 'Select nextLanes and book',
        description: 'Sync flushes immediately; otherwise scheduleCallback books a host task.',
        tone: 'violet',
      },
      {
        id: 'work-loop',
        num: '06',
        title: 'Enter the workLoop',
        description: 'The most urgent task is popped and React render function runs.',
        tone: 'teal',
      },
      {
        id: 'yield',
        num: '07',
        title: 'Pause and resume',
        description: 'Time is checked after each Fiber, yielding by returning a continuation.',
        tone: 'sky',
      },
      {
        id: 'commit',
        num: '08',
        title: 'Commit and clear the lane',
        description: 'After the render commits, markRootFinished clears the finished lane bits.',
        tone: 'emerald',
      },
    ],
    note: 'Pausing at 07 leaves the record from 03 intact — which is why discarding a render never loses the work.',
  },
  scenarios: {
    badge: '02',
    eyebrow: 'three scenarios',
    title: 'Three updates walking the same path',
    description:
      'They pass the same eight stops with different values. Side by side, it becomes clear what each stop changes.',
    headers: ['Scenario', 'Lane it gets', 'Execution path', 'Interruptible'],
    rows: [
      {
        scenario: 'setState inside a click',
        lane: 'SyncLane',
        path: 'Flushed immediately in the microtask',
        yielding: 'No — workLoopSync runs to the end',
      },
      {
        scenario: 'setState inside startTransition',
        lane: 'TransitionLane',
        path: 'A host task via scheduleCallback',
        yielding: 'Yes — shouldYield is checked per Fiber',
      },
      {
        scenario: 'A long-starved transition',
        lane: 'TransitionLane (expired)',
        path: 'Marked in expiredLanes and handled first',
        yielding: 'No — expired work runs to completion',
      },
    ],
    note: 'The third row matters: the same lane, once starved long enough, turns into an uninterruptible synchronous render.',
  },
  files: {
    badge: '03',
    eyebrow: 'file map',
    title: 'Four files to find on reopening',
    description:
      'Scheduler code spans two packages. Knowing which file owns which stop keeps you from getting lost.',
    headers: ['File', 'Stops it owns', 'Key functions'],
    rows: [
      {
        file: 'ReactFiberLane.js',
        owns: '02, lane definitions and bit ops',
        functions: 'SyncLane, getHighestPriorityLane, getNextLanes',
      },
      {
        file: 'ReactFiberWorkLoop.js',
        owns: '01–03 and 06–08',
        functions: 'requestUpdateLane, scheduleUpdateOnFiber, workLoopConcurrent',
      },
      {
        file: 'ReactFiberRootScheduler.js',
        owns: '04–05, selection and booking',
        functions: 'ensureRootIsScheduled, scheduleTaskForRootDuringMicrotask',
      },
      {
        file: 'scheduler/src/forks/Scheduler.js',
        owns: '06–07, running the host task',
        functions: 'unstable_scheduleCallback, workLoop, shouldYieldToHost',
      },
    ],
    note: 'The first three live in react-reconciler and the last in the separate scheduler package — the same boundary page 8 described.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    lookForLabel: 'Look for',
    lookFor: 'requestUpdateLane, markRootUpdated, getNextLanes, scheduleCallback, shouldYield',
    whyLabel: 'Why',
    why: 'Stitched together, these five fragments put recording through execution on one screen — the whole chapter, abridged.',
    code: RECAP_CODE_EN,
    primaryCta: 'Read ReactFiberRootScheduler.js',
    primaryHref: REACT_FIBER_ROOT_SCHEDULER_HREF,
  },
  finale: {
    progressLabel: 'Chapter 12 of 15 complete',
    copyLine1: 'You have read when updates run',
    copyLine2: 'and in what order.',
    copyLine3: 'Next comes Suspense and the recovery model.',
    primaryCta: 'Read Suspense / Error / Hydration',
    primaryHref: '/why-failable-render',
    secondaryCta: 'Restart the Scheduler chapter',
    secondaryHref: '/why-not-immediate',
  },
};

export const schedulerOverallFlowContent: Record<Locale, SchedulerOverallFlowContent> = { ko, en };
