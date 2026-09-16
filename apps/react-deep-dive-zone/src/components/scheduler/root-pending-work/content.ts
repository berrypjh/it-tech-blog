import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'fiber' | 'root' | 'scheduler';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type LaneFieldId = 'pending' | 'suspended' | 'pinged' | 'expired' | 'finished';

export type LaneField = {
  id: LaneFieldId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type MarkStepId = 'climb' | 'or' | 'unsuspend' | 'ensure';

export type MarkStep = {
  id: MarkStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type ClearRow = {
  moment: string;
  field: string;
  effect: string;
};

export type RootPendingWorkContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
    rootLabel: string;
    rootCode: string;
  };
  fields: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: LaneField[];
    note: string;
  };
  marking: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: MarkStep[];
    note: string;
  };
  clearing: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: ClearRow[];
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

const ROOT_SHAPE_CODE = `FiberRoot {
  tag: ConcurrentRoot,
  containerInfo: DOMNode,
  current: Fiber,

  pendingLanes:   0b0000000000000000000000000100010,
  suspendedLanes: 0b0000000000000000000000000000000,
  pingedLanes:    0b0000000000000000000000000000000,
  expiredLanes:   0b0000000000000000000000000000000,
  finishedLanes:  0b0000000000000000000000000000000,
  ...
}`;

const MARK_ROOT_UPDATED_CODE = `export function markRootUpdated(root: FiberRoot, updateLane: Lane) {
  // 새 lane 비트를 pendingLanes에 켠다
  root.pendingLanes |= updateLane;

  // Idle 작업이면 여기서 끝
  if (updateLane !== IdleLane) {
    root.suspendedLanes = NoLanes;
    root.pingedLanes = NoLanes;
    root.warmLanes = NoLanes;
  }
}

// scheduleUpdateOnFiber에서 fiber → root로 올라가는 부분
function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
  sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);

  let node = sourceFiber.return;
  while (node !== null) {
    node.childLanes = mergeLanes(node.childLanes, lane);
    node = node.return;
  }
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: RootPendingWorkContent = {
  hero: {
    badge: 'Scheduler · 6/10단계',
    title: { line1: 'lane을 받았다고', line2: '렌더가 시작되지는 않는다' },
    description:
      '업데이트는 자기 Fiber에서 root까지 올라가며 흔적을 남깁니다. root.pendingLanes에 비트가 켜지는 것이 그 흔적입니다.',
    diagramBadge: 'pending work',
    diagramCaption: 'fiber → root → scheduler',
    stages: [
      {
        id: 'fiber',
        label: 'setState가 일어난 Fiber',
        caption: 'fiber.lanes에 비트를 켠다',
        tone: 'cyan',
      },
      {
        id: 'root',
        label: 'root.pendingLanes',
        caption: '올라가며 childLanes를 켜고 root에 도착',
        tone: 'indigo',
      },
      {
        id: 'scheduler',
        label: 'ensureRootIsScheduled',
        caption: '이제 실행 시점을 정할 차례',
        tone: 'violet',
      },
    ],
    rootLabel: 'FiberRoot',
    rootCode: ROOT_SHAPE_CODE,
  },
  fields: {
    badge: '01',
    eyebrow: 'root lane fields',
    title: 'root가 들고 있는 lane 칸들',
    description:
      'root에는 lane 비트마스크가 여러 개 있습니다. 각각이 "이 lane들은 지금 어떤 상태인가"를 다르게 기록합니다.',
    items: [
      {
        id: 'pending',
        name: 'pendingLanes',
        role: '할 일이 남은 lane',
        description:
          '업데이트가 들어올 때마다 OR로 켜집니다. 비어 있으면 root는 할 일이 없는 상태입니다.',
        tone: 'indigo',
      },
      {
        id: 'suspended',
        name: 'suspendedLanes',
        role: '기다리는 중인 lane',
        description:
          '렌더하다 데이터를 기다리며 멈춘 lane입니다. 다시 시도해도 같은 곳에서 멈추므로 건너뜁니다.',
        tone: 'amber',
      },
      {
        id: 'pinged',
        name: 'pingedLanes',
        role: '다시 해 볼 만한 lane',
        description:
          '기다리던 데이터가 도착하면 suspended에서 여기로 옮겨집니다. 이제 재시도할 수 있습니다.',
        tone: 'teal',
      },
      {
        id: 'expired',
        name: 'expiredLanes',
        role: '너무 오래 밀린 lane',
        description:
          '계속 뒤로 밀린 lane에 표시합니다. 표시되면 중단 없이 동기로 끝까지 렌더합니다.',
        tone: 'sky',
      },
      {
        id: 'finished',
        name: 'finishedLanes',
        role: '렌더가 끝난 lane',
        description:
          '렌더는 끝났고 커밋을 기다리는 lane입니다. 커밋이 끝나면 pendingLanes에서 지워집니다.',
        tone: 'emerald',
      },
    ],
    note: '다섯 칸 모두 같은 비트 자리를 씁니다. 그래서 한 lane이 pending이면서 동시에 suspended일 수 있습니다.',
  },
  marking: {
    badge: '02',
    eyebrow: 'markRootUpdated',
    title: '흔적을 남기는 네 단계',
    description:
      'setState 한 번은 Fiber 하나만 건드리지 않습니다. 루트까지 이어지는 경로 전체에 표시를 남깁니다.',
    steps: [
      {
        id: 'climb',
        badge: 'step 1',
        title: 'Fiber에서 root까지 올라간다',
        body: 'return 포인터를 타고 올라가며 각 조상의 childLanes에 비트를 켭니다.',
        tone: 'cyan',
      },
      {
        id: 'or',
        badge: 'step 2',
        title: 'pendingLanes에 OR',
        body: 'root에 도착하면 이 lane 비트를 pendingLanes에 켭니다. 이미 있으면 그대로입니다.',
        tone: 'indigo',
      },
      {
        id: 'unsuspend',
        badge: 'step 3',
        title: 'suspended 상태 해제',
        body: 'Idle이 아닌 업데이트가 들어오면 기다리던 lane 표시를 전부 지웁니다.',
        tone: 'amber',
      },
      {
        id: 'ensure',
        badge: 'step 4',
        title: 'ensureRootIsScheduled',
        body: '기록이 끝났으니 실행 예약이 되어 있는지 확인하러 넘어갑니다.',
        tone: 'violet',
      },
    ],
    note: '01의 childLanes 덕분에 렌더할 때 변경이 없는 가지를 통째로 건너뛸 수 있습니다. bailout의 근거가 여기서 만들어집니다.',
  },
  clearing: {
    badge: '03',
    eyebrow: 'lifecycle',
    title: '켜진 비트는 언제 꺼지는가',
    description:
      '비트를 켜는 곳은 한 군데지만 끄는 곳은 여러 군데입니다. 언제 무엇이 지워지는지가 스케줄러 동작을 좌우합니다.',
    headers: ['시점', '바뀌는 필드', '무슨 일이 일어나나'],
    rows: [
      {
        moment: '렌더를 시작할 때',
        field: 'pendingLanes는 그대로',
        effect: '고른 lane을 renderLanes로 잡을 뿐, pending에서 지우지는 않습니다.',
      },
      {
        moment: '렌더 중 데이터 대기',
        field: 'suspendedLanes',
        effect: '그 lane을 suspended로 옮겨 다음 선택에서 건너뛰게 합니다.',
      },
      {
        moment: '기다리던 데이터 도착',
        field: 'pingedLanes',
        effect: 'suspended에서 pinged로 옮겨 다시 시도할 수 있게 만듭니다.',
      },
      {
        moment: '커밋이 끝났을 때',
        field: 'pendingLanes에서 제거',
        effect: 'markRootFinished가 끝난 lane 비트를 지우고 관련 상태도 함께 정리합니다.',
      },
    ],
    note: '렌더를 시작할 때 지우지 않는 것이 중요합니다. 렌더가 중간에 버려져도 할 일이 사라지지 않기 때문입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'markRootUpdated, markUpdateLaneFromFiberToRoot, markRootFinished',
    whyLabel: '설명',
    why: 'pendingLanes를 켜는 줄이 |= 하나뿐이라는 점, 그리고 지우는 코드는 markRootFinished에만 있다는 점을 확인하세요.',
    code: MARK_ROOT_UPDATED_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '쌓인 것 중 무엇을 먼저 할까',
    description:
      'pendingLanes에 여러 비트가 켜져 있습니다. 그중 무엇을 골라 렌더할지 정하는 로직을 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/pick-next-work',
  },
};

const ROOT_SHAPE_CODE_EN = ROOT_SHAPE_CODE;

const MARK_ROOT_UPDATED_CODE_EN = `export function markRootUpdated(root: FiberRoot, updateLane: Lane) {
  // turn the new lane bit on in pendingLanes
  root.pendingLanes |= updateLane;

  // nothing more to do for idle work
  if (updateLane !== IdleLane) {
    root.suspendedLanes = NoLanes;
    root.pingedLanes = NoLanes;
    root.warmLanes = NoLanes;
  }
}

// the part of scheduleUpdateOnFiber that climbs fiber → root
function markUpdateLaneFromFiberToRoot(sourceFiber, lane) {
  sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);

  let node = sourceFiber.return;
  while (node !== null) {
    node.childLanes = mergeLanes(node.childLanes, lane);
    node = node.return;
  }
}`;

const en: RootPendingWorkContent = {
  hero: {
    badge: 'Scheduler · 6/10',
    title: { line1: 'Being assigned a lane', line2: 'does not start a render' },
    description:
      'An update climbs from its own Fiber up to the root, leaving marks along the way. A bit set in root.pendingLanes is that mark.',
    diagramBadge: 'pending work',
    diagramCaption: 'fiber → root → scheduler',
    stages: [
      {
        id: 'fiber',
        label: 'The Fiber where setState ran',
        caption: 'sets a bit in fiber.lanes',
        tone: 'cyan',
      },
      {
        id: 'root',
        label: 'root.pendingLanes',
        caption: 'sets childLanes on the way up and arrives at the root',
        tone: 'indigo',
      },
      {
        id: 'scheduler',
        label: 'ensureRootIsScheduled',
        caption: 'now it is time to decide when to run',
        tone: 'violet',
      },
    ],
    rootLabel: 'FiberRoot',
    rootCode: ROOT_SHAPE_CODE_EN,
  },
  fields: {
    badge: '01',
    eyebrow: 'root lane fields',
    title: 'The lane slots the root carries',
    description:
      'The root holds several lane bitmasks. Each records something different about the state those lanes are in.',
    items: [
      {
        id: 'pending',
        name: 'pendingLanes',
        role: 'Lanes with work left',
        description:
          'OR-ed on with every incoming update. An empty value means the root has nothing to do.',
        tone: 'indigo',
      },
      {
        id: 'suspended',
        name: 'suspendedLanes',
        role: 'Lanes that are waiting',
        description:
          'Lanes that stalled mid-render waiting for data. Retrying would stall again, so they are skipped.',
        tone: 'amber',
      },
      {
        id: 'pinged',
        name: 'pingedLanes',
        role: 'Lanes worth retrying',
        description:
          'When the awaited data arrives, lanes move here from suspended and become retryable.',
        tone: 'teal',
      },
      {
        id: 'expired',
        name: 'expiredLanes',
        role: 'Lanes starved too long',
        description:
          'Marks lanes pushed back repeatedly. Once marked, they render synchronously without yielding.',
        tone: 'sky',
      },
      {
        id: 'finished',
        name: 'finishedLanes',
        role: 'Lanes that finished rendering',
        description:
          'Rendered and waiting to commit. They are removed from pendingLanes once the commit completes.',
        tone: 'emerald',
      },
    ],
    note: 'All five use the same bit positions, so one lane can be pending and suspended at the same time.',
  },
  marking: {
    badge: '02',
    eyebrow: 'markRootUpdated',
    title: 'Four steps to leave the mark',
    description:
      'One setState does not touch a single Fiber. It leaves marks along the entire path up to the root.',
    steps: [
      {
        id: 'climb',
        badge: 'step 1',
        title: 'Climb from Fiber to root',
        body: 'Follow return pointers, setting the bit in each ancestor childLanes.',
        tone: 'cyan',
      },
      {
        id: 'or',
        badge: 'step 2',
        title: 'OR into pendingLanes',
        body: 'On arrival the lane bit is set on the root. If already set, nothing changes.',
        tone: 'indigo',
      },
      {
        id: 'unsuspend',
        badge: 'step 3',
        title: 'Clear the suspended state',
        body: 'Any non-idle update wipes the marks for lanes that were waiting.',
        tone: 'amber',
      },
      {
        id: 'ensure',
        badge: 'step 4',
        title: 'ensureRootIsScheduled',
        body: 'With the record written, move on to check whether work is already booked.',
        tone: 'violet',
      },
    ],
    note: 'The childLanes from step 01 are what let rendering skip whole untouched branches. Bailout is grounded right here.',
  },
  clearing: {
    badge: '03',
    eyebrow: 'lifecycle',
    title: 'When does a set bit turn off',
    description:
      'Bits are set in one place but cleared in several. Knowing when each clears explains most scheduler behaviour.',
    headers: ['Moment', 'Field that changes', 'What happens'],
    rows: [
      {
        moment: 'When a render starts',
        field: 'pendingLanes is untouched',
        effect: 'The chosen lane becomes renderLanes; it is not removed from pending.',
      },
      {
        moment: 'Waiting for data mid-render',
        field: 'suspendedLanes',
        effect: 'That lane moves to suspended so the next selection skips it.',
      },
      {
        moment: 'The awaited data arrives',
        field: 'pingedLanes',
        effect: 'The lane moves from suspended to pinged and becomes retryable.',
      },
      {
        moment: 'When the commit finishes',
        field: 'Removed from pendingLanes',
        effect: 'markRootFinished clears the finished lane bits and tidies related state.',
      },
    ],
    note: 'Not clearing at render start matters: work is not lost even when a render is thrown away mid-flight.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'markRootUpdated, markUpdateLaneFromFiberToRoot, markRootFinished',
    whyLabel: 'Why',
    why: 'Note that setting pendingLanes is a single |= line, and that the clearing code lives only in markRootFinished.',
    code: MARK_ROOT_UPDATED_CODE_EN,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Which of the pending items goes first',
    description:
      'Several bits are set in pendingLanes. Next comes the logic that picks which one to render.',
    cta: 'Go to the next page',
    href: '/pick-next-work',
  },
};

export const rootPendingWorkContent: Record<Locale, RootPendingWorkContent> = { ko, en };
