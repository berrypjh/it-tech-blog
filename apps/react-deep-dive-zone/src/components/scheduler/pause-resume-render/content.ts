import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FrameId = 'frame1' | 'frame2';

export type Frame = {
  id: FrameId;
  label: string;
  items: string[];
  tail: string;
  tone: ToneKey;
};

export type LoopStepId = 'peek' | 'check-expired' | 'should-yield' | 'run' | 'continuation';

export type LoopStep = {
  id: LoopStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ConditionRow = {
  condition: string;
  result: string;
  why: string;
};

export type GranularityId = 'unit' | 'commit' | 'sync';

export type Granularity = {
  id: GranularityId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type PauseResumeContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    frames: [Frame, Frame];
    bridgeLabel: string;
  };
  workLoop: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: LoopStep[];
    note: string;
  };
  conditions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: ConditionRow[];
    note: string;
  };
  granularity: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Granularity[];
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

const WORK_LOOP_CODE = `// scheduler 패키지 쪽: task 단위로 양보를 판단한다
function workLoop(initialTime) {
  let currentTime = initialTime;
  currentTask = peek(taskQueue);

  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
      // 아직 만료 전인데 시간이 다 됐으면 여기서 멈춘다
      break;
    }

    const callback = currentTask.callback;
    currentTask.callback = null;
    const continuationCallback = callback(didUserCallbackTimeout);

    if (typeof continuationCallback === 'function') {
      // 함수를 돌려주면 "아직 안 끝났다"는 뜻이다
      currentTask.callback = continuationCallback;
      return true;
    }

    currentTask = peek(taskQueue);
  }

  return currentTask !== null;
}

export function shouldYieldToHost(): boolean {
  const timeElapsed = getCurrentTime() - startTime;
  if (timeElapsed < frameInterval) {
    return false;
  }
  return true;
}

// react-reconciler 쪽: Fiber 하나 끝낼 때마다 확인한다
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}`;

const SCHEDULER_HREF =
  'https://github.com/facebook/react/blob/main/packages/scheduler/src/forks/Scheduler.js';

const ko: PauseResumeContent = {
  hero: {
    badge: 'Scheduler · 9/10단계',
    title: { line1: '렌더는 끝까지 밀어붙이지 않는다', line2: '중간에 멈췄다 다시 시작한다' },
    description:
      'Fiber 하나를 끝낼 때마다 시간이 남았는지 확인합니다. 다 됐으면 하던 자리를 기억해 두고 브라우저에 제어를 돌려줍니다.',
    diagramBadge: 'yield & resume',
    diagramCaption: 'stop, hand over, continue',
    frames: [
      {
        id: 'frame1',
        label: 'Frame 1',
        items: ['Fiber A 처리', 'Fiber B 처리', 'shouldYield() → true'],
        tail: '여기서 멈춘다',
        tone: 'sky',
      },
      {
        id: 'frame2',
        label: 'Frame 2',
        items: ['Fiber C부터 재개', 'Fiber D 처리', '렌더 완료'],
        tail: 'workInProgress가 그대로였다',
        tone: 'emerald',
      },
    ],
    bridgeLabel: '브라우저에 제어 반환 (입력·페인트 처리)',
  },
  workLoop: {
    badge: '01',
    eyebrow: 'workLoop',
    title: '멈출 수 있게 만드는 다섯 칸',
    description:
      '멈춤은 예외 처리가 아니라 정상 흐름입니다. 루프가 매 반복마다 확인하고, 멈출 때는 다음 콜백을 돌려주는 것으로 표시합니다.',
    steps: [
      {
        id: 'peek',
        num: '01',
        title: '가장 급한 task 꺼내기',
        description: '만료 시각 기준 최소 힙에서 제일 앞을 봅니다.',
        tone: 'sky',
      },
      {
        id: 'check-expired',
        num: '02',
        title: '이미 만료됐는지 확인',
        description: '만료된 task라면 시간과 무관하게 무조건 실행합니다. 굶주림 방지입니다.',
        tone: 'amber',
      },
      {
        id: 'should-yield',
        num: '03',
        title: 'shouldYieldToHost 확인',
        description: '만료 전인데 프레임 예산을 다 썼으면 루프를 빠져나옵니다.',
        tone: 'violet',
      },
      {
        id: 'run',
        num: '04',
        title: 'callback 실행',
        description: 'React의 performWorkOnRoot가 돌며 Fiber를 하나씩 처리합니다.',
        tone: 'cyan',
      },
      {
        id: 'continuation',
        num: '05',
        title: '함수를 돌려받으면 재예약',
        description:
          '콜백이 함수를 반환하면 아직 안 끝났다는 뜻입니다. 같은 task에 다시 매달아 둡니다.',
        tone: 'emerald',
      },
    ],
    note: '05가 재개의 전부입니다. 상태를 따로 저장하지 않고, 함수 하나를 돌려주는 것으로 "이어서 하라"를 표현합니다.',
  },
  conditions: {
    badge: '02',
    eyebrow: 'when to yield',
    title: '멈출지 말지를 가르는 조건들',
    description:
      'shouldYield는 한 가지만 보지 않습니다. 렌더 성격과 남은 시간에 따라 같은 상황에서도 답이 달라집니다.',
    headers: ['상황', '양보하는가', '이유'],
    rows: [
      {
        condition: '프레임 예산이 남았을 때',
        result: '계속 진행',
        why: 'frameInterval(기본 5ms) 안이면 브라우저가 할 일도 없으므로 계속 돕니다.',
      },
      {
        condition: '예산을 다 썼을 때',
        result: '양보',
        why: '입력이나 페인트가 밀리기 시작하는 구간이라 제어를 돌려줍니다.',
      },
      {
        condition: 'task가 이미 만료됐을 때',
        result: '양보하지 않음',
        why: '더 미루면 굶주립니다. 시간이 초과돼도 끝까지 밀어붙입니다.',
      },
      {
        condition: 'SyncLane 렌더일 때',
        result: '양보하지 않음',
        why: '동기 경로는 workLoopSync를 써서 shouldYield를 아예 확인하지 않습니다.',
      },
    ],
    note: '마지막 줄이 중요합니다. 모든 렌더가 중단 가능한 것이 아니라, lane이 concurrent인 경우에만 그렇습니다.',
  },
  granularity: {
    badge: '03',
    eyebrow: 'granularity',
    title: '어디서는 멈출 수 있고 어디서는 못 멈춘다',
    description:
      '중단 지점은 아무 데나 있지 않습니다. 화면이 반쯤 바뀐 상태를 사용자에게 보여 주면 안 되기 때문입니다.',
    items: [
      {
        id: 'unit',
        title: 'Fiber 하나 사이',
        role: '멈출 수 있음',
        description:
          'performUnitOfWork가 끝날 때마다 확인합니다. 아직 화면에 아무것도 반영되지 않은 시점입니다.',
        tone: 'emerald',
      },
      {
        id: 'commit',
        title: 'Commit 단계 안',
        role: '멈출 수 없음',
        description: 'DOM을 실제로 바꾸는 구간입니다. 중간에 멈추면 화면이 깨진 상태로 보입니다.',
        tone: 'amber',
      },
      {
        id: 'sync',
        title: 'Sync 렌더 전체',
        role: '멈출 수 없음',
        description:
          'workLoopSync는 shouldYield를 부르지 않습니다. 시작하면 끝까지 한 번에 갑니다.',
        tone: 'violet',
      },
    ],
    note: '렌더는 중단 가능하고 커밋은 불가능하다는 비대칭이, render phase와 commit phase를 나눈 이유 중 하나입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/scheduler/src/forks/Scheduler.js',
    lookForLabel: '볼 것',
    lookFor: 'workLoop, shouldYieldToHost, frameInterval, workLoopConcurrent',
    whyLabel: '설명',
    why: '콜백이 함수를 반환하면 같은 task에 다시 붙인다는 부분이, 재개를 구현하는 전부입니다.',
    code: WORK_LOOP_CODE,
    primaryCta: 'Scheduler.js 읽기',
    primaryHref: SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '아홉 페이지를 한 흐름으로',
    description:
      '업데이트 발생부터 렌더 재개까지, 지금까지 본 조각들을 하나의 경로로 다시 잇습니다.',
    cta: '다음 페이지로 이동',
    href: '/scheduler-overall-flow',
  },
};

const WORK_LOOP_CODE_EN = `// in the scheduler package: yielding is judged per task
function workLoop(initialTime) {
  let currentTime = initialTime;
  currentTask = peek(taskQueue);

  while (currentTask !== null) {
    if (currentTask.expirationTime > currentTime && shouldYieldToHost()) {
      // not expired yet but out of time, so stop here
      break;
    }

    const callback = currentTask.callback;
    currentTask.callback = null;
    const continuationCallback = callback(didUserCallbackTimeout);

    if (typeof continuationCallback === 'function') {
      // returning a function means "not finished yet"
      currentTask.callback = continuationCallback;
      return true;
    }

    currentTask = peek(taskQueue);
  }

  return currentTask !== null;
}

export function shouldYieldToHost(): boolean {
  const timeElapsed = getCurrentTime() - startTime;
  if (timeElapsed < frameInterval) {
    return false;
  }
  return true;
}

// in react-reconciler: checked after finishing each Fiber
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    performUnitOfWork(workInProgress);
  }
}`;

const en: PauseResumeContent = {
  hero: {
    badge: 'Scheduler · 9/10',
    title: { line1: 'A render does not push to the end', line2: 'it stops and picks up again' },
    description:
      'After each Fiber, React checks whether time remains. If not, it remembers where it was and hands control back to the browser.',
    diagramBadge: 'yield & resume',
    diagramCaption: 'stop, hand over, continue',
    frames: [
      {
        id: 'frame1',
        label: 'Frame 1',
        items: ['Process Fiber A', 'Process Fiber B', 'shouldYield() → true'],
        tail: 'stops right here',
        tone: 'sky',
      },
      {
        id: 'frame2',
        label: 'Frame 2',
        items: ['Resume from Fiber C', 'Process Fiber D', 'Render complete'],
        tail: 'workInProgress was still there',
        tone: 'emerald',
      },
    ],
    bridgeLabel: 'control returns to the browser (input and paint)',
  },
  workLoop: {
    badge: '01',
    eyebrow: 'workLoop',
    title: 'Five stops that make stopping possible',
    description:
      'Yielding is the normal path, not an error path. The loop checks each round and signals a stop by returning the next callback.',
    steps: [
      {
        id: 'peek',
        num: '01',
        title: 'Peek the most urgent task',
        description: 'Look at the front of the min-heap ordered by expiration time.',
        tone: 'sky',
      },
      {
        id: 'check-expired',
        num: '02',
        title: 'Check whether it expired',
        description:
          'An expired task runs regardless of remaining time. That is the starvation guard.',
        tone: 'amber',
      },
      {
        id: 'should-yield',
        num: '03',
        title: 'Ask shouldYieldToHost',
        description: 'Not expired but out of frame budget means breaking out of the loop.',
        tone: 'violet',
      },
      {
        id: 'run',
        num: '04',
        title: 'Run the callback',
        description: "React's performWorkOnRoot runs and processes Fibers one at a time.",
        tone: 'cyan',
      },
      {
        id: 'continuation',
        num: '05',
        title: 'Re-book when a function comes back',
        description:
          'A returned function means the work is unfinished, so it is attached to the same task again.',
        tone: 'emerald',
      },
    ],
    note: 'Step 05 is the whole of resumption: no state is saved, and "carry on" is expressed by returning one function.',
  },
  conditions: {
    badge: '02',
    eyebrow: 'when to yield',
    title: 'What decides whether it stops',
    description:
      'shouldYield looks at more than one thing. The same moment can answer differently depending on the render and the time left.',
    headers: ['Situation', 'Does it yield', 'Why'],
    rows: [
      {
        condition: 'Frame budget remains',
        result: 'Keeps going',
        why: 'Within frameInterval (5ms by default) the browser has nothing waiting, so work continues.',
      },
      {
        condition: 'Budget is used up',
        result: 'Yields',
        why: 'This is where input and paint start backing up, so control is handed back.',
      },
      {
        condition: 'The task already expired',
        result: 'Does not yield',
        why: 'Deferring further would starve it, so it pushes through even past the budget.',
      },
      {
        condition: 'A SyncLane render',
        result: 'Does not yield',
        why: 'The sync path uses workLoopSync, which never calls shouldYield at all.',
      },
    ],
    note: 'The last row matters: not every render is interruptible — only those on a concurrent lane.',
  },
  granularity: {
    badge: '03',
    eyebrow: 'granularity',
    title: 'Where it can stop, and where it cannot',
    description:
      'Stopping points are not everywhere. A half-updated screen must never be shown to the user.',
    items: [
      {
        id: 'unit',
        title: 'Between Fibers',
        role: 'Can stop',
        description:
          'Checked after each performUnitOfWork, at a point where nothing has reached the screen yet.',
        tone: 'emerald',
      },
      {
        id: 'commit',
        title: 'Inside the commit phase',
        role: 'Cannot stop',
        description:
          'This is where the DOM actually changes; stopping midway would show a broken screen.',
        tone: 'amber',
      },
      {
        id: 'sync',
        title: 'A whole sync render',
        role: 'Cannot stop',
        description: 'workLoopSync never calls shouldYield. Once started it runs to the end.',
        tone: 'violet',
      },
    ],
    note: 'That renders are interruptible while commits are not is one of the reasons the two phases were split apart.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/scheduler/src/forks/Scheduler.js',
    lookForLabel: 'Look for',
    lookFor: 'workLoop, shouldYieldToHost, frameInterval, workLoopConcurrent',
    whyLabel: 'Why',
    why: 'Re-attaching the returned function to the same task is the entire implementation of resumption.',
    code: WORK_LOOP_CODE_EN,
    primaryCta: 'Read Scheduler.js',
    primaryHref: SCHEDULER_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Nine pages as one flow',
    description:
      'From an update being created to a render resuming, the last page rejoins every piece into a single path.',
    cta: 'Go to the next page',
    href: '/scheduler-overall-flow',
  },
};

export const pauseResumeRenderContent: Record<Locale, PauseResumeContent> = { ko, en };
