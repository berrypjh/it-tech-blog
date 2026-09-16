import type { Locale } from '@it-tech-blog/preferences';

export type HeroFlow = {
  code: string;
  step1: { title: string };
  step2: { title: string };
  decision: { title: string };
  yes: { label: string; title: string; description: string };
  no: { label: string; title: string; description: string };
};

export type FullFlow = {
  steps: { title: string; mono?: boolean }[];
  decision: string;
  yes: { label: string[]; title: string; description: string[] };
  no: { label: string[]; title: string; description: string[] };
};

export type CompareCard = {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  statusLabel: string;
  kind: 'current' | 'wip';
};

export type ReturnDirectionCard = {
  title: string;
  subtitle: string;
  items: string[];
  direction: 'down' | 'up';
};

export type DescendCompleteFlow = {
  topSteps: string[];
  decision: string;
  yes: { label: string[]; title: string; description: string };
  no: { label: string[]; title: string; description: string };
};

export type DescendCompleteExplanation = {
  title: string;
  stepLabel: string;
  items: { icon: 'arrowDown' | 'arrowUp' | 'rotate'; text: string }[];
};

export type PerformUnitContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: HeroFlow;
  };
  fullFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    flow: FullFlow;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: { left: CompareCard; right: CompareCard };
    relationLabel: string;
  };
  returnDirection: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: { left: ReturnDirectionCard; right: ReturnDirectionCard };
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  descendComplete: {
    badge: string;
    eyebrow: string;
    title: string;
    flow: DescendCompleteFlow;
    explanation: DescendCompleteExplanation;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const CODE_LINES = `function performUnitOfWork(unitOfWork) {
  const current = unitOfWork.alternate;

  const next = beginWork(current, unitOfWork, entangledRenderLanes);

  unitOfWork.memoizedProps = unitOfWork.pendingProps;

  if (next === null) {
    completeUnitOfWork(unitOfWork);
  } else {
    workInProgress = next;
  }
}`;

const heroCode = 'performUnitOfWork(unitOfWork);';

const ko: PerformUnitContent = {
  hero: {
    badge: 'Render Phase · 3/10단계',
    title: {
      line1: 'Render Phase의',
      line2: '최소 실행 단위는',
      line3: 'Fiber 하나입니다.',
    },
    description:
      'React는 현재 Fiber 하나를 집어 들고 beginWork를 실행한 뒤, 더 내려갈 자식이 있으면 아래로 이동하고, 없으면 complete 단계로 전환합니다.',
    diagram: {
      code: heroCode,
      step1: { title: 'Fiber 처리' },
      step2: { title: 'beginWork' },
      decision: { title: '자식 있음?' },
      yes: {
        label: '예',
        title: 'child Fiber로 이동',
        description: '더 깊은 자식으로 내려감',
      },
      no: {
        label: '아니오',
        title: 'completeUnitOfWork',
        description: '완료 단계로 전환 · 위로 이동',
      },
    },
  },
  fullFlow: {
    badge: '01',
    eyebrow: '전체 흐름',
    title: 'performUnitOfWork 전체 흐름',
    description: '코드 한 줄씩의 의미를 큰 분기 플로우로 펼친 모습입니다.',
    flow: {
      steps: [
        { title: 'performUnitOfWork(unitOfWork)', mono: true },
        { title: 'current = unitOfWork.alternate', mono: true },
        { title: 'next = beginWork(current, unitOfWork, lanes)', mono: true },
      ],
      decision: 'next 존재?',
      yes: {
        label: ['예', 'next !== null'],
        title: 'workInProgress = next',
        description: ['자식 Fiber로 이동', '아래로'],
      },
      no: {
        label: ['아니오', 'next === null'],
        title: 'completeUnitOfWork(unitOfWork)',
        description: ['완료 단계로 전환', '위로'],
      },
    },
  },
  compare: {
    badge: '02',
    eyebrow: '두 Fiber',
    title: 'current와 workInProgress 연결',
    description: '두 Fiber는 alternate로 연결된 같은 노드의 두 버전입니다.',
    relationLabel: 'alternate',
    cards: {
      left: {
        title: 'current',
        subtitle: '이전 트리의 Fiber',
        description: '현재 화면을 만든 트리',
        items: ['alternate로 연결됨', '비교 기준 역할'],
        statusLabel: '이전',
        kind: 'current',
      },
      right: {
        title: 'unitOfWork',
        subtitle: '= workInProgress',
        description: '지금 처리 중인 workInProgress Fiber',
        items: ['beginWork를 실행할 대상', '결과에 따라 다음 방향 결정'],
        statusLabel: '진행 중',
        kind: 'wip',
      },
    },
  },
  returnDirection: {
    badge: '03',
    eyebrow: '반환 방향',
    title: 'beginWork 반환값으로 다음 방향 결정',
    description: 'beginWork의 반환값이 곧 다음 work loop의 이동 방향을 정합니다.',
    cards: {
      left: {
        title: 'beginWork가 child Fiber 반환',
        subtitle: '아래로 내려간다',
        items: [
          '자식이 존재하거나 생성됨',
          'next = child Fiber',
          'workInProgress = next',
          '더 깊은 곳으로 진행',
        ],
        direction: 'down',
      },
      right: {
        title: 'beginWork가 null 반환',
        subtitle: '완료 단계로 전환한다',
        items: [
          '자식이 없거나 더 이상 생성되지 않음',
          '더 내려갈 곳이 없음',
          'completeUnitOfWork 호출',
          '위로 올라가며 완료 처리',
        ],
        direction: 'up',
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
    lookFor: 'performUnitOfWork, beginWork, completeUnitOfWork',
    code: CODE_LINES,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  descendComplete: {
    badge: '05',
    eyebrow: '하강 vs 완료',
    title: '내려가기 vs 완료로 전환 (핵심 반복 구조)',
    flow: {
      topSteps: ['Fiber 처리 시작 (performUnitOfWork)', 'beginWork 실행'],
      decision: '자식 계산 가능?',
      yes: {
        label: ['예', 'next !== null'],
        title: 'child Fiber로 이동',
        description: '더 깊은 자식으로 내려감',
      },
      no: {
        label: ['아니오', 'next === null'],
        title: 'completeUnitOfWork',
        description: '완료 단계로 전환 · 위로 이동',
      },
    },
    explanation: {
      title: '이 과정을 work loop가 반복합니다.',
      stepLabel: '단계',
      items: [
        { icon: 'arrowDown', text: '아래로 내려가며 최대한 탐색' },
        { icon: 'arrowUp', text: '더 이상 내려갈 곳이 없으면 완료하며 위로 올라감' },
        { icon: 'rotate', text: '모든 Fiber를 처리할 때까지 반복' },
      ],
    },
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'beginWork',
    description:
      'Fiber 하나의 처리 흐름을 봤다면, 이제 그 핵심인 beginWork가 실제로 무엇을 하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/begin-work',
  },
};

const en: PerformUnitContent = {
  hero: {
    badge: 'Render Phase · 3/10',
    title: {
      line1: 'The smallest unit of',
      line2: 'the Render Phase',
      line3: 'is a single Fiber.',
    },
    description:
      'React picks up the current Fiber, runs beginWork, then either descends into a child if one exists, or transitions into the complete step.',
    diagram: {
      code: heroCode,
      step1: { title: 'process a Fiber' },
      step2: { title: 'beginWork' },
      decision: { title: 'has child?' },
      yes: {
        label: 'yes',
        title: 'move to child Fiber',
        description: 'descend into the next child',
      },
      no: {
        label: 'no',
        title: 'completeUnitOfWork',
        description: 'transition to complete · move up',
      },
    },
  },
  fullFlow: {
    badge: '01',
    eyebrow: 'FULL FLOW',
    title: 'Full performUnitOfWork flow',
    description: 'The function unfolded as a branching flow.',
    flow: {
      steps: [
        { title: 'performUnitOfWork(unitOfWork)', mono: true },
        { title: 'current = unitOfWork.alternate', mono: true },
        { title: 'next = beginWork(current, unitOfWork, lanes)', mono: true },
      ],
      decision: 'is next defined?',
      yes: {
        label: ['yes', 'next !== null'],
        title: 'workInProgress = next',
        description: ['move to the child Fiber', 'downwards'],
      },
      no: {
        label: ['no', 'next === null'],
        title: 'completeUnitOfWork(unitOfWork)',
        description: ['transition to complete', 'upwards'],
      },
    },
  },
  compare: {
    badge: '02',
    eyebrow: 'CURRENT VS WIP',
    title: 'current and workInProgress',
    description: 'These two Fibers are linked via alternate — two versions of the same node.',
    relationLabel: 'alternate',
    cards: {
      left: {
        title: 'current',
        subtitle: 'Fiber on the previous tree',
        description: 'the tree that produced the current screen',
        items: ['linked via alternate', 'serves as a comparison baseline'],
        statusLabel: 'previous',
        kind: 'current',
      },
      right: {
        title: 'unitOfWork',
        subtitle: '= workInProgress',
        description: 'the workInProgress Fiber being processed now',
        items: ['target of beginWork', 'its return value picks the next direction'],
        statusLabel: 'in progress',
        kind: 'wip',
      },
    },
  },
  returnDirection: {
    badge: '03',
    eyebrow: 'RETURN DECIDES',
    title: 'beginWork return value picks the next direction',
    description: "beginWork's return value decides which way the work loop moves.",
    cards: {
      left: {
        title: 'beginWork returns a child Fiber',
        subtitle: 'descend downwards',
        items: [
          'a child exists or was created',
          'next = child Fiber',
          'workInProgress = next',
          'go deeper',
        ],
        direction: 'down',
      },
      right: {
        title: 'beginWork returns null',
        subtitle: 'transition to complete',
        items: [
          'no child, or none was created',
          'nowhere deeper to go',
          'call completeUnitOfWork',
          'ascend and finalize',
        ],
        direction: 'up',
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
    lookFor: 'performUnitOfWork, beginWork, completeUnitOfWork',
    code: CODE_LINES,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  descendComplete: {
    badge: '05',
    eyebrow: 'DESCEND OR COMPLETE',
    title: 'Descend vs transition to complete (the core loop)',
    flow: {
      topSteps: ['Start processing (performUnitOfWork)', 'Run beginWork'],
      decision: 'Can a child be computed?',
      yes: {
        label: ['Yes', 'next !== null'],
        title: 'move to child Fiber',
        description: 'descend into the next child',
      },
      no: {
        label: ['No', 'next === null'],
        title: 'completeUnitOfWork',
        description: 'transition to complete · ascend',
      },
    },
    explanation: {
      title: 'The work loop repeats this process.',
      stepLabel: 'step',
      items: [
        { icon: 'arrowDown', text: 'descend as far as possible' },
        { icon: 'arrowUp', text: 'when nothing deeper remains, complete and ascend' },
        { icon: 'rotate', text: 'repeat until every Fiber is processed' },
      ],
    },
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'beginWork',
    description:
      'Now that you see the flow of a single Fiber, dive into what beginWork — the core of that flow — actually does.',
    cta: 'Go to the next page',
    href: '/begin-work',
  },
};

export const performUnitContent: Record<Locale, PerformUnitContent> = { ko, en };
