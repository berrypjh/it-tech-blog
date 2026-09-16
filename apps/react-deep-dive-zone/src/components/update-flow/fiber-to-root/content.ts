import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FiberStackIcon = 'flag' | 'panels' | 'workflow' | 'pin';

export type FiberStackNode = {
  id: 'root' | 'page' | 'main' | 'button';
  title: string;
  state: string;
  badge: string;
  tone: ToneKey;
  icon: FiberStackIcon;
};

export type FiberPathNode = {
  id: 'button' | 'main' | 'page' | 'root';
  title: string;
  state: string;
  body: string;
  tone: ToneKey;
  icon: FiberStackIcon;
  isSource?: boolean;
};

export type LaneCardIcon = 'database' | 'network';

export type LaneCard = {
  title: string;
  badge: string;
  body: string;
  bullet: string;
  icon: LaneCardIcon;
  tone: ToneKey;
};

export type ReturnNodeIcon = 'mousePointer' | 'workflow' | 'panels' | 'flag';

export type ReturnNode = {
  title: string;
  sub: string;
  tone: ToneKey;
  icon: ReturnNodeIcon;
};

export type FiberToRootContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    stack: FiberStackNode[];
    sideLabel: string;
    sideBody: string;
  };
  laneRoles: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: LaneCard;
    middleLabel: string;
    rightCard: LaneCard;
  };
  fiberPath: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: FiberPathNode[];
    sourceBadge: string;
    bottomLabel: string;
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
  alternate: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    currentTitle: string;
    currentBody: string;
    middleLabel: string;
    wipTitle: string;
    wipBody: string;
  };
  returnPointer: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    flowLabel: string;
    nodes: ReturnNode[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCodeKo = `export function markUpdateLaneFromFiberToRoot(
  sourceFiber,
  lane,
): FiberRoot | null {
  // 1. sourceFiber 자신의 lanes 갱신
  sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);

  // 2. return 경로를 따라 부모의 childLanes 갱신
  let node = sourceFiber;
  let parent = node.return;
  while (parent !== null) {
    parent.childLanes = mergeLanes(parent.childLanes, lane);
    node = parent;
    parent = node.return;
  }

  // 3. 맨 위 node가 HostRoot면 FiberRoot 반환
  return node.tag === HostRoot
    ? node.stateNode
    : null;
}`;

const checkpointCodeEn = `export function markUpdateLaneFromFiberToRoot(
  sourceFiber,
  lane,
): FiberRoot | null {
  // 1. update sourceFiber's own lanes
  sourceFiber.lanes = mergeLanes(sourceFiber.lanes, lane);

  // 2. walk return pointers, update parent childLanes
  let node = sourceFiber;
  let parent = node.return;
  while (parent !== null) {
    parent.childLanes = mergeLanes(parent.childLanes, lane);
    node = parent;
    parent = node.return;
  }

  // 3. if the top node is HostRoot, return its FiberRoot
  return node.tag === HostRoot
    ? node.stateNode
    : null;
}`;

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberConcurrentUpdates.js';

const ko: FiberToRootContent = {
  hero: {
    badge: '업데이트 시작 · 7/10단계',
    title: {
      line1: '업데이트 흔적은',
      line2: 'Fiber 하나에만',
      line3: '남지 않습니다.',
    },
    description:
      'React는 이 트리 어딘가에 처리할 작업이 있다는 사실을 부모 경로 전체에 표시합니다.',
    stack: [
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        badge: 'HostRoot',
        tone: 'emerald',
        icon: 'flag',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        badge: '중간 부모',
        tone: 'teal',
        icon: 'panels',
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        badge: '중간 부모',
        tone: 'sky',
        icon: 'workflow',
      },
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        badge: 'source',
        tone: 'violet',
        icon: 'pin',
      },
    ],
    sideLabel: 'lane 전파 방향',
    sideBody: 'Root까지 도달할 때까지 업데이트 흔적이 위로 전파됩니다.',
  },
  laneRoles: {
    badge: '01',
    eyebrow: '두 lane 필드',
    title: 'sourceFiber.lanes / parent.childLanes 역할 구분',
    description:
      '두 필드 모두 lane을 담지만 의미가 다릅니다. 한쪽은 "내 작업", 다른 쪽은 "하위 트리에 작업"을 표현합니다.',
    leftCard: {
      title: 'sourceFiber.lanes',
      badge: '자기 자신',
      body: '업데이트가 직접 발생한 Fiber의 lane',
      bullet: '이 Fiber 자신에 "내 작업"이 있음을 표시',
      icon: 'database',
      tone: 'violet',
    },
    middleLabel: '위로 전파',
    rightCard: {
      title: 'parent.childLanes',
      badge: '하위 트리',
      body: '자식 트리 어딘가에 같은 lane의 작업이 있음을 표시',
      bullet: '"내 아래 트리에 작업이 있다"를 알림',
      icon: 'network',
      tone: 'teal',
    },
  },
  fiberPath: {
    badge: '02',
    eyebrow: '경로 시각화',
    title: 'Button → Main → Page → Root 시각화',
    description: '실제 부모 경로를 따라 lane 흔적이 어떻게 위로 올라가는지 카드별로 따라갑니다.',
    nodes: [
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        body: '업데이트 발생 지점',
        tone: 'violet',
        icon: 'pin',
        isSource: true,
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        body: '자식 어딘가에 작업이 있음',
        tone: 'sky',
        icon: 'workflow',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        body: '자식 어딘가에 작업이 있음',
        tone: 'teal',
        icon: 'panels',
      },
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        body: '트리 전체에 작업이 있음',
        tone: 'emerald',
        icon: 'flag',
      },
    ],
    sourceBadge: '업데이트 발생',
    bottomLabel: 'lane이 위로 전파되는 흐름',
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberConcurrentUpdates.js',
    lookForLabel: '볼 것',
    lookFor: 'markUpdateLaneFromFiberToRoot, getRootForUpdatedFiber, childLanes',
    whyLabel: '설명',
    why: '학습용 축약 코드로, 실제 소스는 lane 표시와 Root 탐색을 markUpdateLaneFromFiberToRoot와 getRootForUpdatedFiber로 나눠 둡니다.',
    code: checkpointCodeKo,
    primaryCta: 'ReactFiberConcurrentUpdates.js 읽기',
    primaryHref: githubHref,
  },
  alternate: {
    badge: '04',
    eyebrow: '양쪽 트리 갱신',
    title: 'alternate도 함께 갱신되는 이유',
    description:
      '현재 트리와 work-in-progress 트리는 alternate로 연결되어 있습니다. 업데이트 흔적이 한쪽 구조에만 남으면 이후 계산 기준이 어긋날 수 있으므로, alternate 쪽 lane 정보도 함께 반영합니다.',
    currentTitle: 'current tree',
    currentBody: 'lanes / childLanes 갱신',
    middleLabel: 'alternate',
    wipTitle: 'work-in-progress tree',
    wipBody: 'lanes / childLanes 갱신',
  },
  returnPointer: {
    badge: '05',
    eyebrow: '부모 경로 탐색 이유',
    title: 'Root를 return 포인터로 찾는 이유',
    description:
      'update queue는 Root를 직접 가리키는 backpointer를 갖고 있지 않습니다. 그래서 React는 return 경로를 따라 위로 올라가 Root까지 도달합니다.',
    flowLabel: 'return 포인터를 따라 위로 올라감',
    nodes: [
      { title: 'Child Fiber', sub: '(return)', tone: 'violet', icon: 'mousePointer' },
      { title: 'Parent Fiber', sub: '(return)', tone: 'sky', icon: 'workflow' },
      { title: '... (중간 부모들)', sub: '(return)', tone: 'teal', icon: 'panels' },
      { title: 'Root Fiber', sub: '(HostRoot)', tone: 'emerald', icon: 'flag' },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'scheduleUpdateOnFiber',
    description:
      'Fiber에서 Root까지 업데이트 흔적을 표시했다면, 이제 Root 자체를 스케줄링 흐름에 등록할 차례입니다.',
    cta: '다음 페이지로 이동',
    href: '/schedule-update-on-fiber',
  },
};

const en: FiberToRootContent = {
  hero: {
    badge: 'Update Flow · 7/10',
    title: {
      line1: 'An update mark does not',
      line2: 'live on a single Fiber',
      line3: 'in React.',
    },
    description:
      'React advertises the fact that "there is work somewhere in this tree" along the entire parent path.',
    stack: [
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        badge: 'HostRoot',
        tone: 'emerald',
        icon: 'flag',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        badge: 'mid parent',
        tone: 'teal',
        icon: 'panels',
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        badge: 'mid parent',
        tone: 'sky',
        icon: 'workflow',
      },
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        badge: 'source',
        tone: 'violet',
        icon: 'pin',
      },
    ],
    sideLabel: 'lane propagation',
    sideBody: 'The trace travels upward until it reaches the Root.',
  },
  laneRoles: {
    badge: '01',
    eyebrow: 'TWO LANE FIELDS',
    title: 'sourceFiber.lanes vs parent.childLanes',
    description:
      'Both fields hold lanes, but they mean different things. One says "I have work", the other says "my subtree has work".',
    leftCard: {
      title: 'sourceFiber.lanes',
      badge: 'self',
      body: 'The lane on the Fiber where the update was issued',
      bullet: 'Marks "I have work" on this Fiber',
      icon: 'database',
      tone: 'violet',
    },
    middleLabel: 'propagated up',
    rightCard: {
      title: 'parent.childLanes',
      badge: 'subtree',
      body: 'Marks that the same lane has work somewhere in the child subtree',
      bullet: 'Tells the parent "there is work below me"',
      icon: 'network',
      tone: 'teal',
    },
  },
  fiberPath: {
    badge: '02',
    eyebrow: 'PATH VISUALIZATION',
    title: 'Button → Main → Page → Root',
    description: 'Follow how the lane mark moves up the actual parent path, one card at a time.',
    nodes: [
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        body: 'where the update originates',
        tone: 'violet',
        icon: 'pin',
        isSource: true,
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        body: 'a child below me has work',
        tone: 'sky',
        icon: 'workflow',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        body: 'a child below me has work',
        tone: 'teal',
        icon: 'panels',
      },
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        body: 'work exists somewhere in the tree',
        tone: 'emerald',
        icon: 'flag',
      },
    ],
    sourceBadge: 'source',
    bottomLabel: 'the lane mark flows upward',
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberConcurrentUpdates.js',
    lookForLabel: 'Look for',
    lookFor: 'markUpdateLaneFromFiberToRoot, getRootForUpdatedFiber, childLanes',
    whyLabel: 'Why',
    why: 'This is simplified for learning; the real source splits lane marking and Root lookup into markUpdateLaneFromFiberToRoot and getRootForUpdatedFiber.',
    code: checkpointCodeEn,
    primaryCta: 'Read ReactFiberConcurrentUpdates.js',
    primaryHref: githubHref,
  },
  alternate: {
    badge: '04',
    eyebrow: 'BOTH TREES',
    title: 'Why alternate is updated too',
    description:
      'The current tree and the work-in-progress tree are linked via alternate. If the mark only lives on one side, later calculations will be off — so the lane mark is mirrored to the alternate side.',
    currentTitle: 'current tree',
    currentBody: 'lanes / childLanes updated',
    middleLabel: 'alternate',
    wipTitle: 'work-in-progress tree',
    wipBody: 'lanes / childLanes updated',
  },
  returnPointer: {
    badge: '05',
    eyebrow: 'WHY WALK UP',
    title: 'Why React walks up via return',
    description:
      'The update queue does not have a direct backpointer to the Root. React walks up the return chain instead until it reaches the Root.',
    flowLabel: 'walking up the return chain',
    nodes: [
      { title: 'Child Fiber', sub: '(return)', tone: 'violet', icon: 'mousePointer' },
      { title: 'Parent Fiber', sub: '(return)', tone: 'sky', icon: 'workflow' },
      { title: '... (mid parents)', sub: '(return)', tone: 'teal', icon: 'panels' },
      { title: 'Root Fiber', sub: '(HostRoot)', tone: 'emerald', icon: 'flag' },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'scheduleUpdateOnFiber',
    description:
      'Now that the lane trail is laid from Fiber to Root, it is time to register the Root itself into the scheduling pipeline.',
    cta: 'Go to the next page',
    href: '/schedule-update-on-fiber',
  },
};

export const fiberToRootContent: Record<Locale, FiberToRootContent> = { ko, en };
