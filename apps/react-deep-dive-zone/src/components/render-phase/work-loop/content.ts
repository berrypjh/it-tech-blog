import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FlowNode = {
  /** A/B/C/D 등 큰 글자 라벨 (yield 노드는 생략하고 yield: true) */
  label?: string;
  /** 노드 아래 작은 설명 */
  caption: string;
  /** yield 노드 여부 (점선 border + 별도 색상) */
  yield?: boolean;
};

export type ComparisonCard = {
  title: string;
  items: string[];
  bottomBadge: string;
  kind: 'sync' | 'concurrent';
};

export type CommonFlowStep = {
  title: string;
  description: string;
  tone: ToneKey;
};

export type TimelineNode = {
  /** 노드 글자. yield/finish 노드는 아이콘으로 그리므로 생략 */
  label?: string;
  caption: string;
  yield?: boolean;
  finish?: boolean;
};

export type TimelineCard = {
  title: string;
  flow: TimelineNode[];
  footer: string;
  kind: 'sync' | 'concurrent';
};

export type FiberTreeNodeStatus = 'done' | 'current' | 'pending';

export type FiberTreeNode = {
  name: string;
  status: FiberTreeNodeStatus;
  depth: number;
};

export type LegendItem = {
  status: FiberTreeNodeStatus;
  label: string;
  description: string;
};

export type WorkLoopContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      code: string;
      sync: {
        label: string;
        sideText: string;
        nodes: FlowNode[];
      };
      concurrent: {
        label: string;
        sideText: string;
        nodes: FlowNode[];
        yieldSubNote: string;
        resumeNote: string;
      };
    };
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    vsLabel: string;
    cards: { left: ComparisonCard; right: ComparisonCard };
  };
  common: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: CommonFlowStep[];
  };
  timelines: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: { left: TimelineCard; right: TimelineCard };
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
  fiberTree: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    nodes: FiberTreeNode[];
    legendTitle: string;
    legend: LegendItem[];
    note: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroLoopCode = `while (workInProgress !== null) {
  performUnitOfWork(workInProgress);
}`;

const CODE_LINES = `function workLoopSync() {
  while (workInProgress !== null) {
    performUnitOfWork(workInProgress);
  }
}

function workLoopConcurrent(
  shouldTimeSlice: boolean,
  now: () => number,
  yieldAfter: number,
) {
  do {
    performUnitOfWork(workInProgress);
  } while (
    workInProgress !== null &&
    (!shouldTimeSlice || now() < yieldAfter)
  );
}`;

const ko: WorkLoopContent = {
  hero: {
    badge: 'Render Phase · 2/10단계',
    title: {
      line1: 'React는 Fiber를',
      line2: '하나씩 처리하는',
      line3: '루프를 돌립니다.',
    },
    description:
      '동기 렌더링에서는 끝까지 밀고 나가고, 동시성 렌더링에서는 필요할 때 잠시 양보할 수 있습니다.',
    diagram: {
      title: 'Fiber를 하나씩 처리하는 흐름 예시',
      code: heroLoopCode,
      sync: {
        label: 'workLoopSync (동기)',
        sideText: '끝까지 밀고 나감',
        nodes: [
          { label: 'A', caption: 'A 처리' },
          { label: 'B', caption: 'B 처리' },
          { label: 'C', caption: 'C 처리' },
          { label: 'D', caption: 'D 처리' },
        ],
      },
      concurrent: {
        label: 'workLoopConcurrent (동시성)',
        sideText: '필요할 때 잠시 양보',
        nodes: [
          { label: 'A', caption: 'A 처리' },
          { label: 'B', caption: 'B 처리' },
          { label: 'C', caption: 'C 처리' },
          { caption: '잠시 양보', yield: true },
          { label: 'D', caption: 'D 처리' },
        ],
        yieldSubNote: '다른 작업에 양보',
        resumeNote: '이후 이어서 재개',
      },
    },
  },
  comparison: {
    badge: '01',
    eyebrow: '두 루프',
    title: '두 work loop 비교',
    vsLabel: 'VS',
    cards: {
      left: {
        title: 'workLoopSync',
        items: ['workInProgress가 없어질 때까지 계속 처리', '중간에 다른 작업으로 양보하지 않음'],
        bottomBadge: '동기 렌더링에서 사용',
        kind: 'sync',
      },
      right: {
        title: 'workLoopConcurrent',
        items: ['일정 조건에서 잠시 멈출 수 있음', '이후 다시 이어서 처리 가능'],
        bottomBadge: '동시성 렌더링에서 사용',
        kind: 'concurrent',
      },
    },
  },
  common: {
    badge: '02',
    eyebrow: '공통 루프',
    title: '공통점: performUnitOfWork 반복',
    description: '두 work loop 모두 같은 반복 구조를 가집니다. 차이는 반복 조건에 있을 뿐입니다.',
    steps: [
      { title: 'while / do-while 반복', description: 'work loop 시작', tone: 'sky' },
      {
        title: 'performUnitOfWork(workInProgress)',
        description: '하나의 Fiber 단위를 처리',
        tone: 'violet',
      },
      {
        title: '다음 Fiber 결정',
        description: 'child / sibling / return 경로로 이동',
        tone: 'indigo',
      },
    ],
  },
  timelines: {
    badge: '03',
    eyebrow: '진행 방식',
    title: '끝까지 밀기 vs 양보 가능',
    description: '같은 A → B → C → D 작업도 두 루프가 처리하는 방식은 다릅니다.',
    cards: {
      left: {
        title: 'workLoopSync (끝까지 밀기)',
        kind: 'sync',
        flow: [
          { label: 'A', caption: 'A 처리' },
          { label: 'B', caption: 'B 처리' },
          { label: 'C', caption: 'C 처리' },
          { label: 'D', caption: 'D 처리' },
          { caption: '완료', finish: true },
        ],
        footer: '끝까지 진행 후 Render Phase 완료',
      },
      right: {
        title: 'workLoopConcurrent (양보 가능)',
        kind: 'concurrent',
        flow: [
          { label: 'A', caption: 'A 처리' },
          { label: 'B', caption: 'B 처리' },
          { label: 'C', caption: 'C 처리' },
          { caption: '잠시 양보 (다른 작업)', yield: true },
          { label: 'D', caption: '이후 이어서 재개' },
          { caption: '완료', finish: true },
        ],
        footer: '필요할 때 양보하고, 이후 이어서 계속 진행',
      },
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'workLoopSync, workLoopConcurrent',
    whyLabel: '설명',
    why: 'workLoopConcurrent만 남은 시간(now() < yieldAfter)을 반복 조건에 넣어 중간에 멈출 수 있습니다.',
    code: CODE_LINES,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  fiberTree: {
    badge: '05',
    eyebrow: '트리 순회',
    title: 'Fiber 처리 현황 시각화 (예시 트리)',
    description: 'work loop가 트리를 따라 이동하며 현재 Fiber 하나만 활성화한다는 감각을 잡습니다.',
    nodes: [
      { name: 'Root', status: 'done', depth: 0 },
      { name: 'App Fiber', status: 'done', depth: 1 },
      { name: 'Page Fiber', status: 'current', depth: 2 },
      { name: 'Header Fiber', status: 'pending', depth: 3 },
      { name: 'Main Fiber', status: 'pending', depth: 3 },
    ],
    legendTitle: '작업 루프가 이동하는 방식',
    legend: [
      {
        status: 'done',
        label: '처리 완료',
        description: '이미 performUnitOfWork를 마친 노드',
      },
      {
        status: 'current',
        label: '현재 처리 중',
        description: 'workInProgress가 가리키는 Fiber',
      },
      {
        status: 'pending',
        label: '대기 중',
        description: '아직 처리되지 않은 나머지 Fiber',
      },
    ],
    note: 'work loop는 현재 Fiber 하나를 처리하고, 다음 Fiber를 결정하는 과정을 반복합니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'performUnitOfWork',
    description:
      'Render Phase가 Fiber를 하나씩 처리하는 반복 루프라는 점을 봤다면, 이제 그 Fiber 하나를 실제로 처리하는 핵심 함수로 들어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/perform-unit-of-work',
  },
};

const en: WorkLoopContent = {
  hero: {
    badge: 'Render Phase · 2/10',
    title: {
      line1: 'React processes',
      line2: 'Fibers one by one',
      line3: 'in a work loop.',
    },
    description:
      'Sync rendering pushes through to the end. Concurrent rendering can yield briefly when needed.',
    diagram: {
      title: 'How a work loop processes Fibers',
      code: heroLoopCode,
      sync: {
        label: 'workLoopSync (sync)',
        sideText: 'pushes through to the end',
        nodes: [
          { label: 'A', caption: 'process A' },
          { label: 'B', caption: 'process B' },
          { label: 'C', caption: 'process C' },
          { label: 'D', caption: 'process D' },
        ],
      },
      concurrent: {
        label: 'workLoopConcurrent (concurrent)',
        sideText: 'yields when needed',
        nodes: [
          { label: 'A', caption: 'process A' },
          { label: 'B', caption: 'process B' },
          { label: 'C', caption: 'process C' },
          { caption: 'yield', yield: true },
          { label: 'D', caption: 'process D' },
        ],
        yieldSubNote: 'yield to other work',
        resumeNote: 'resume afterwards',
      },
    },
  },
  comparison: {
    badge: '01',
    eyebrow: 'TWO LOOPS',
    title: 'Compare the two work loops',
    vsLabel: 'VS',
    cards: {
      left: {
        title: 'workLoopSync',
        items: [
          'keeps processing until workInProgress is null',
          'never yields to other work mid-loop',
        ],
        bottomBadge: 'used in sync rendering',
        kind: 'sync',
      },
      right: {
        title: 'workLoopConcurrent',
        items: ['can pause when conditions are met', 'resumes processing afterwards'],
        bottomBadge: 'used in concurrent rendering',
        kind: 'concurrent',
      },
    },
  },
  common: {
    badge: '02',
    eyebrow: 'COMMON LOOP',
    title: 'In common: repeat performUnitOfWork',
    description: 'Both work loops share the same shape. Only the loop condition differs.',
    steps: [
      { title: 'while / do-while loop', description: 'work loop starts', tone: 'sky' },
      {
        title: 'performUnitOfWork(workInProgress)',
        description: 'process one Fiber unit',
        tone: 'violet',
      },
      {
        title: 'pick the next Fiber',
        description: 'walk child / sibling / return',
        tone: 'indigo',
      },
    ],
  },
  timelines: {
    badge: '03',
    eyebrow: 'PUSH VS YIELD',
    title: 'Push through vs yield',
    description: 'Same A → B → C → D work, two different loop shapes.',
    cards: {
      left: {
        title: 'workLoopSync (push through)',
        kind: 'sync',
        flow: [
          { label: 'A', caption: 'process A' },
          { label: 'B', caption: 'process B' },
          { label: 'C', caption: 'process C' },
          { label: 'D', caption: 'process D' },
          { caption: 'done', finish: true },
        ],
        footer: 'Push through to the end, then the Render Phase finishes.',
      },
      right: {
        title: 'workLoopConcurrent (yield-capable)',
        kind: 'concurrent',
        flow: [
          { label: 'A', caption: 'process A' },
          { label: 'B', caption: 'process B' },
          { label: 'C', caption: 'process C' },
          { caption: 'yield (other work)', yield: true },
          { label: 'D', caption: 'resume afterwards' },
          { caption: 'done', finish: true },
        ],
        footer: 'Yield when needed, then keep going where it left off.',
      },
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'workLoopSync, workLoopConcurrent',
    whyLabel: 'Why',
    why: 'Only workLoopConcurrent adds remaining time (now() < yieldAfter) to its loop condition, so it can pause mid-loop.',
    code: CODE_LINES,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  fiberTree: {
    badge: '05',
    eyebrow: 'TREE WALK',
    title: 'Fiber processing state (sample tree)',
    description: 'See how the work loop walks the tree, keeping only one Fiber active at a time.',
    nodes: [
      { name: 'Root', status: 'done', depth: 0 },
      { name: 'App Fiber', status: 'done', depth: 1 },
      { name: 'Page Fiber', status: 'current', depth: 2 },
      { name: 'Header Fiber', status: 'pending', depth: 3 },
      { name: 'Main Fiber', status: 'pending', depth: 3 },
    ],
    legendTitle: 'How the work loop moves',
    legend: [
      {
        status: 'done',
        label: 'done',
        description: 'a Fiber that already finished performUnitOfWork',
      },
      {
        status: 'current',
        label: 'in progress',
        description: 'the Fiber that workInProgress points at',
      },
      {
        status: 'pending',
        label: 'pending',
        description: 'a Fiber that has not been processed yet',
      },
    ],
    note: 'The work loop processes one Fiber, picks the next, and repeats the cycle.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'performUnitOfWork',
    description:
      'Now that you see the Render Phase as a loop that processes Fibers one by one, dive into the function that actually processes one of those Fibers.',
    cta: 'Go to the next page',
    href: '/perform-unit-of-work',
  },
};

export const workLoopContent: Record<Locale, WorkLoopContent> = { ko, en };
