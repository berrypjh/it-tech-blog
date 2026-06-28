import type { Locale } from '@it-tech-blog/preferences';

export type FiberRole = 'current' | 'workInProgress';

export type WhyCard = {
  id: string;
  title: string;
  description: string;
  iconName: 'monitor' | 'pause' | 'shield';
  accent: 'emerald' | 'sky' | 'violet';
};

export type AlternateFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    currentTitle: string;
    currentItems: string[];
    workTitle: string;
    workItems: string[];
    forwardLabel: string;
    backwardLabel: string;
  };
  pair: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    currentBadge: string;
    currentTitle: string;
    currentItems: string[];
    currentTreeLabel: string;
    workBadge: string;
    workTitle: string;
    workItems: string[];
    workTreeLabel: string;
  };
  connection: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    currentLabel: string;
    centerLabel: string;
    workLabel: string;
    infoTitle: string;
    infoDescription: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    question: string;
    primaryCta: string;
    primaryHref: string;
    code: string;
  };
  doubleBuffering: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftBody: string;
    centerLabel: string;
    rightTitle: string;
    rightBody: string;
    bottomMessage: string;
  };
  why: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WhyCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: AlternateFiberContent = {
  hero: {
    badge: 'Fiber 생성 · 8/10단계',
    title: {
      line1: '왜 Fiber에는',
      line2: 'alternate가 있을까?',
    },
    description:
      'React는 기존 화면을 대표하는 Fiber와 다음 화면을 계산 중인 Fiber를 짝처럼 연결해 관리합니다.',
    currentTitle: 'current Fiber',
    currentItems: ['현재 화면을 대표', '화면에 반영된 상태', '안정적인 트리'],
    workTitle: 'workInProgress Fiber',
    workItems: ['다음 화면을 계산 중', '계산 중인 작업 트리', '아직 화면에 반영되지 않음'],
    forwardLabel: 'alternate',
    backwardLabel: '양방향 연결',
  },
  pair: {
    badge: '01',
    eyebrow: 'current vs WIP',
    title: 'current와 workInProgress',
    description: '같은 노드에 대해 두 Fiber가 동시에 존재하며 서로 다른 역할을 맡습니다.',
    currentBadge: '현재 화면',
    currentTitle: 'current Fiber',
    currentItems: [
      '현재 화면을 대표하는 Fiber',
      'DOM에 반영된 상태를 가진 트리',
      '안정적으로 유지되는 트리',
    ],
    currentTreeLabel: '트리 · DOM에 반영됨',
    workBadge: '다음 화면 계산 중',
    workTitle: 'workInProgress Fiber',
    workItems: [
      '다음 화면을 계산하는 Fiber',
      '아직 DOM에 반영되지 않은 트리',
      '작업 과정에서 자유롭게 변경 가능',
    ],
    workTreeLabel: '트리 · 계산 중',
  },
  connection: {
    badge: '02',
    eyebrow: '연결 포인터',
    title: 'alternate 연결 다이어그램',
    description: 'alternate 한 단어로 두 Fiber가 항상 짝으로 연결됩니다.',
    currentLabel: 'current Fiber',
    centerLabel: 'alternate',
    workLabel: 'workInProgress Fiber',
    infoTitle: 'alternate는 두 Fiber를 서로 연결하는 포인터입니다.',
    infoDescription: '현재 트리와 작업 중 트리가 항상 짝으로 연결됩니다.',
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    description:
      'createWorkInProgress는 current.alternate를 보고 새 Fiber를 만들거나 기존 Fiber를 재사용합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: '함수',
    functionName: 'createWorkInProgress',
    question: 'alternate는 언제 연결될까?',
    primaryCta: 'ReactFiber.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    code: `export function createWorkInProgress(current, pendingProps) {
  let workInProgress = current.alternate;

  if (workInProgress === null) {
    // 기존에 연결된 workInProgress가 없으면 새로 생성
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);

    // 서로를 alternate로 연결
    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    // 이미 연결된 workInProgress가 있으면 재사용
    workInProgress.pendingProps = pendingProps;
    workInProgress.flags = NoFlags;
    workInProgress.subtreeFlags = NoFlags;
  }

  return workInProgress;
}`,
  },
  doubleBuffering: {
    badge: '04',
    eyebrow: '핵심 감각',
    title: 'double buffering 감각',
    description: '현재 화면을 유지한 채 새 화면을 별도로 계산하고, 완성된 뒤에야 바꿔치웁니다.',
    leftTitle: '현재 화면을 유지',
    leftBody:
      'current Fiber 트리가 실제 DOM과 연결되어 사용자에게 보이는 화면을 안정적으로 유지합니다.',
    centerLabel: '준비 중',
    rightTitle: '새 화면을 별도로 계산',
    rightBody:
      'workInProgress Fiber 트리에서 모든 변경 사항을 자유롭게 계산하고 완성될 때까지 실제 화면은 바꾸지 않습니다.',
    bottomMessage:
      '기존 화면을 깨지 않고 다음 화면을 준비하기 위해 React는 두 Fiber를 짝으로 다룹니다.',
  },
  why: {
    badge: '05',
    eyebrow: '필요 이유',
    title: '왜 필요한가?',
    description:
      '두 Fiber를 짝으로 다루는 구조는 React가 사용자 경험을 깨뜨리지 않고 작업을 진행하기 위한 토대입니다.',
    cards: [
      {
        id: 'keep-screen',
        title: '현재 화면을 유지한 채 다음 화면 계산',
        description: '사용자는 끊김 없이 현재 화면을 보고, 새 화면은 백그라운드에서 계산됩니다.',
        iconName: 'monitor',
        accent: 'emerald',
      },
      {
        id: 'mid-work',
        title: '작업 중간 상태 관리',
        description:
          '계산 도중 중단되거나 재시작해도 기존 화면은 안정적이고, 작업 트리는 계속 이어갈 수 있습니다.',
        iconName: 'pause',
        accent: 'sky',
      },
      {
        id: 'commit-hold',
        title: 'Commit 직전까지 실제 화면 변경 보류',
        description:
          '모든 작업이 끝나고 Commit 단계에서야 workInProgress 트리를 화면에 반영합니다.',
        iconName: 'shield',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Fiber에 저장되는 정보',
    description:
      'alternate의 첫 의미를 잡았다면, 이번에는 Element 정보가 Fiber에서 얼마나 크게 확장되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-node',
  },
};

const en: AlternateFiberContent = {
  hero: {
    badge: 'Element → Fiber · 8/10',
    title: {
      line1: 'Why does a Fiber',
      line2: 'have an alternate?',
    },
    description:
      'React keeps the Fiber that represents the current screen paired with the Fiber that is computing the next one.',
    currentTitle: 'current Fiber',
    currentItems: ['Represents the current screen', 'State reflected on the DOM', 'A stable tree'],
    workTitle: 'workInProgress Fiber',
    workItems: [
      'Computing the next screen',
      'Work-tree in progress',
      'Not yet reflected on the screen',
    ],
    forwardLabel: 'alternate',
    backwardLabel: 'Two-way link',
  },
  pair: {
    badge: '01',
    eyebrow: 'CURRENT VS WIP',
    title: 'current vs workInProgress',
    description: 'For the same node, two Fibers coexist and play different roles.',
    currentBadge: 'Current screen',
    currentTitle: 'current Fiber',
    currentItems: [
      'Fiber that represents the current screen',
      'A tree whose state is reflected on the DOM',
      'A tree kept stable',
    ],
    currentTreeLabel: 'tree · reflected on DOM',
    workBadge: 'Computing next screen',
    workTitle: 'workInProgress Fiber',
    workItems: [
      'Fiber that computes the next screen',
      'A tree not yet committed to the DOM',
      'A tree free to change while work is in progress',
    ],
    workTreeLabel: 'tree · being computed',
  },
  connection: {
    badge: '02',
    eyebrow: 'CONNECTING POINTER',
    title: 'alternate connection diagram',
    description: 'A single word — alternate — keeps two Fibers paired at all times.',
    currentLabel: 'current Fiber',
    centerLabel: 'alternate',
    workLabel: 'workInProgress Fiber',
    infoTitle: 'alternate is the pointer that links two Fibers to each other.',
    infoDescription: 'The current tree and the work-in-progress tree are always paired.',
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    description:
      'createWorkInProgress checks current.alternate, creates a new Fiber if needed, or reuses the existing one.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: 'Function',
    functionName: 'createWorkInProgress',
    question: 'When does alternate get wired up?',
    primaryCta: 'Read ReactFiber.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    code: `export function createWorkInProgress(current, pendingProps) {
  let workInProgress = current.alternate;

  if (workInProgress === null) {
    // No existing workInProgress — create a new one
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);

    // Wire both as alternates of each other
    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    // An existing workInProgress — reuse it
    workInProgress.pendingProps = pendingProps;
    workInProgress.flags = NoFlags;
    workInProgress.subtreeFlags = NoFlags;
  }

  return workInProgress;
}`,
  },
  doubleBuffering: {
    badge: '04',
    eyebrow: 'CORE FEEL',
    title: 'Double buffering — the feel',
    description:
      'Keep the current screen as-is, compute the next screen separately, then swap when ready.',
    leftTitle: 'Keep the current screen',
    leftBody:
      'The current Fiber tree is connected to the real DOM and keeps the visible screen stable.',
    centerLabel: 'In progress',
    rightTitle: 'Compute the next screen separately',
    rightBody:
      'All changes are computed freely on the workInProgress Fiber tree; the real screen stays unchanged until the work completes.',
    bottomMessage:
      'To prepare the next screen without breaking the current one, React handles the two Fibers as a pair.',
  },
  why: {
    badge: '05',
    eyebrow: 'WHY IT MATTERS',
    title: 'Why is it needed?',
    description:
      'Pairing two Fibers is what lets React do work without ever ruining the user experience.',
    cards: [
      {
        id: 'keep-screen',
        title: 'Compute the next screen while keeping the current one',
        description:
          'Users see the current screen without interruption while the new one is computed in the background.',
        iconName: 'monitor',
        accent: 'emerald',
      },
      {
        id: 'mid-work',
        title: 'Manage mid-work state',
        description:
          'Even if work pauses or restarts, the current screen stays stable and the work tree picks up where it left off.',
        iconName: 'pause',
        accent: 'sky',
      },
      {
        id: 'commit-hold',
        title: 'Hold the screen change until commit',
        description:
          'Only after all work finishes — at commit — the workInProgress tree is reflected on screen.',
        iconName: 'shield',
        accent: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'what a Fiber stores',
    description:
      'With the first meaning of alternate in hand, see how much Element info gets expanded inside a Fiber.',
    cta: 'Go to the next page',
    href: '/fiber-node',
  },
};

export const alternateFiberContent: Record<Locale, AlternateFiberContent> = {
  ko,
  en,
};
