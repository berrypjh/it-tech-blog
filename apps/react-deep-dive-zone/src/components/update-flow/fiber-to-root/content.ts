import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FiberStackIconName = 'flag' | 'panels' | 'workflow' | 'pin';

export type FiberStackNode = {
  id: 'root' | 'page' | 'main' | 'button';
  title: string;
  state: string;
  badge: string;
  tone: ToneKey;
  iconName: FiberStackIconName;
};

export type FiberPathNode = {
  id: 'button' | 'main' | 'page' | 'root';
  title: string;
  state: string;
  body: string;
  tone: ToneKey;
  iconName: FiberStackIconName;
  isSource?: boolean;
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
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: {
      title: string;
      body: string;
      bullet: string;
      iconName: 'database' | 'network';
      tone: ToneKey;
    };
    middleLabel: string;
    rightCard: {
      title: string;
      body: string;
      bullet: string;
      iconName: 'database' | 'network';
      tone: ToneKey;
    };
  };
  fiberPath: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: FiberPathNode[];
    bottomLabel: string;
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      functionLabel: string;
      functionName: string;
      questionLabel: string;
      question: string;
    };
    code: {
      fileName: string;
      rightLabel: string;
      content: string;
      note: string;
    };
    callouts: {
      number: string;
      title: string;
      body: string;
      tone: 'violet' | 'sky' | 'emerald';
      linkedLine: number;
    }[];
  };
  alternate: {
    number: string;
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
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    flowLabel: string;
    nodes: {
      title: string;
      sub: string;
      tone: ToneKey;
      iconName: 'mousePointer' | 'workflow' | 'panels' | 'flag';
      isRoot?: boolean;
    }[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    question: string;
    answerTitle: string;
    answerBody: string;
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
  let parent = sourceFiber.return;
  while (parent !== null) {
    parent.childLanes = mergeLanes(parent.childLanes, lane);
    parent = parent.return;
  }

  // 3. 마지막으로 Root 반환
  return parent.tag === HostRoot
    ? parent.stateNode
    : null;
}`;

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
        iconName: 'flag',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        badge: '중간 부모',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        badge: '중간 부모',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        badge: 'source',
        tone: 'violet',
        iconName: 'pin',
      },
    ],
    sideLabel: 'lane 전파 방향',
    sideBody: 'Root까지 도달할 때까지 업데이트 흔적이 위로 전파됩니다.',
  },
  laneRoles: {
    number: '01',
    eyebrow: '두 lane 필드',
    title: 'sourceFiber.lanes / parent.childLanes 역할 구분',
    description:
      '두 필드 모두 lane을 담지만 의미가 다릅니다. 한쪽은 "내 작업", 다른 쪽은 "하위 트리에 작업"을 표현합니다.',
    leftCard: {
      title: 'sourceFiber.lanes',
      body: '업데이트가 직접 발생한 Fiber의 lane',
      bullet: '이 Fiber 자신에 "내 작업"이 있음을 표시',
      iconName: 'database',
      tone: 'violet',
    },
    middleLabel: '위로 전파',
    rightCard: {
      title: 'parent.childLanes',
      body: '자식 트리 어딘가에 같은 lane의 작업이 있음을 표시',
      bullet: '"내 아래 트리에 작업이 있다"를 알림',
      iconName: 'network',
      tone: 'teal',
    },
  },
  fiberPath: {
    number: '02',
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
        iconName: 'pin',
        isSource: true,
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        body: '자식 어딘가에 작업이 있음',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        body: '자식 어딘가에 작업이 있음',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        body: '트리 전체에 작업이 있음',
        tone: 'emerald',
        iconName: 'flag',
      },
    ],
    bottomLabel: 'lane이 위로 전파되는 흐름',
  },
  checkpoint: {
    number: '03',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'ReactFiberConcurrentUpdates.js',
      functionLabel: '함수',
      functionName: 'markUpdateLaneFromFiberToRoot',
      questionLabel: '학습 질문',
      question: '업데이트 lane을 부모 경로에 어떻게 퍼뜨릴까?',
    },
    code: {
      fileName: 'ReactFiberConcurrentUpdates.js',
      rightLabel: '코드 미리보기',
      content: checkpointCodeKo,
      note: '학습용 축약 코드',
    },
    callouts: [
      {
        number: '1',
        title: 'sourceFiber.lanes 갱신',
        body: 'sourceFiber.lanes에 현재 update의 lane 반영',
        tone: 'violet',
        linkedLine: 6,
      },
      {
        number: '2',
        title: 'childLanes 갱신',
        body: '부모 경로를 따라 childLanes에 같은 lane을 합쳐서 표시',
        tone: 'sky',
        linkedLine: 11,
      },
      {
        number: '3',
        title: 'Root 반환',
        body: 'Root를 찾아 반환',
        tone: 'emerald',
        linkedLine: 16,
      },
    ],
  },
  alternate: {
    number: '04',
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
    number: '05',
    eyebrow: '왜 return으로?',
    title: 'Root를 return 포인터로 찾는 이유',
    description:
      'update queue는 Root를 직접 가리키는 backpointer를 갖고 있지 않습니다. 그래서 React는 return 경로를 따라 위로 올라가 Root까지 도달합니다.',
    flowLabel: 'return 포인터를 따라 위로 올라감',
    nodes: [
      {
        title: 'Child Fiber',
        sub: '(return)',
        tone: 'violet',
        iconName: 'mousePointer',
      },
      {
        title: 'Parent Fiber',
        sub: '(return)',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        title: '... (중간 부모들)',
        sub: '(return)',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        title: 'Root Fiber',
        sub: '(HostRoot)',
        tone: 'emerald',
        iconName: 'flag',
        isRoot: true,
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    question: '왜 parent.childLanes까지 갱신해야 할까?',
    answerTitle: '부모 관점에서도 하위 트리에 처리할 일이 있음을 빠르게 감지해야 하기 때문이다.',
    answerBody:
      'childLanes가 없다면 React는 매 렌더마다 모든 자식을 다시 훑어야 합니다. childLanes에 lane이 한 번 표시되면 부모는 "이 서브트리에 작업이 있다"는 사실만 보고도 빠르게 분기할 수 있습니다.',
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
        iconName: 'flag',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        badge: 'mid parent',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        badge: 'mid parent',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        badge: 'source',
        tone: 'violet',
        iconName: 'pin',
      },
    ],
    sideLabel: 'lane propagation',
    sideBody: 'The trace travels upward until it reaches the Root.',
  },
  laneRoles: {
    number: '01',
    eyebrow: 'Two lane fields',
    title: 'sourceFiber.lanes vs parent.childLanes',
    description:
      'Both fields hold lanes, but they mean different things. One says "I have work", the other says "my subtree has work".',
    leftCard: {
      title: 'sourceFiber.lanes',
      body: 'The lane on the Fiber where the update was issued',
      bullet: 'Marks "I have work" on this Fiber',
      iconName: 'database',
      tone: 'violet',
    },
    middleLabel: 'propagated up',
    rightCard: {
      title: 'parent.childLanes',
      body: 'Marks that the same lane has work somewhere in the child subtree',
      bullet: 'Tells the parent "there is work below me"',
      iconName: 'network',
      tone: 'teal',
    },
  },
  fiberPath: {
    number: '02',
    eyebrow: 'Path visualization',
    title: 'Button → Main → Page → Root',
    description: 'Follow how the lane mark moves up the actual parent path, one card at a time.',
    nodes: [
      {
        id: 'button',
        title: 'Button Fiber (sourceFiber)',
        state: 'lanes |= lane',
        body: 'where the update originates',
        tone: 'violet',
        iconName: 'pin',
        isSource: true,
      },
      {
        id: 'main',
        title: 'Main Fiber',
        state: 'childLanes |= lane',
        body: 'a child below me has work',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        id: 'page',
        title: 'Page Fiber',
        state: 'childLanes |= lane',
        body: 'a child below me has work',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        id: 'root',
        title: 'Root Fiber',
        state: 'lanes |= lane',
        body: 'work exists somewhere in the tree',
        tone: 'emerald',
        iconName: 'flag',
      },
    ],
    bottomLabel: 'the lane mark flows upward',
  },
  checkpoint: {
    number: '03',
    eyebrow: 'Source checkpoint',
    title: 'Source checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'ReactFiberConcurrentUpdates.js',
      functionLabel: 'Function',
      functionName: 'markUpdateLaneFromFiberToRoot',
      questionLabel: 'Learning question',
      question: 'How is the update lane spread up the parent path?',
    },
    code: {
      fileName: 'ReactFiberConcurrentUpdates.js',
      rightLabel: 'preview',
      content: checkpointCodeKo,
      note: 'simplified for learning',
    },
    callouts: [
      {
        number: '1',
        title: 'sourceFiber.lanes update',
        body: 'Merges the current update lane into sourceFiber.lanes',
        tone: 'violet',
        linkedLine: 6,
      },
      {
        number: '2',
        title: 'childLanes update',
        body: 'Walks return pointers and merges the same lane into childLanes',
        tone: 'sky',
        linkedLine: 11,
      },
      {
        number: '3',
        title: 'Return the Root',
        body: 'Returns the FiberRoot at the top',
        tone: 'emerald',
        linkedLine: 16,
      },
    ],
  },
  alternate: {
    number: '04',
    eyebrow: 'Both trees',
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
    number: '05',
    eyebrow: 'Why return?',
    title: 'Why React walks up via return',
    description:
      'The update queue does not have a direct backpointer to the Root. React walks up the return chain instead until it reaches the Root.',
    flowLabel: 'walking up the return chain',
    nodes: [
      {
        title: 'Child Fiber',
        sub: '(return)',
        tone: 'violet',
        iconName: 'mousePointer',
      },
      {
        title: 'Parent Fiber',
        sub: '(return)',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        title: '... (mid parents)',
        sub: '(return)',
        tone: 'teal',
        iconName: 'panels',
      },
      {
        title: 'Root Fiber',
        sub: '(HostRoot)',
        tone: 'emerald',
        iconName: 'flag',
        isRoot: true,
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'Mini quiz',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    question: 'Why does React also need to update parent.childLanes?',
    answerTitle: 'So parents can quickly detect that some subtree has work.',
    answerBody:
      'Without childLanes, React would have to re-scan every child each render. With childLanes set once, a parent can skip subtrees that have no work and dive into only the ones that do.',
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
