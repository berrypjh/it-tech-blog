import type { Locale } from '@it-tech-blog/preferences';

export type TreeNode = { id: string; label: string };

export type ComparisonRow = {
  id: string;
  label: string;
  current: string;
  workInProgress: string;
};

export type ScenarioStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tone: 'sky' | 'emerald' | 'violet' | 'amber' | 'teal';
  iconName: 'pulse' | 'workflow' | 'pencil' | 'pause' | 'check';
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  tone: 'emerald' | 'violet';
};

export type CurrentWipAlternateContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    emphasis: string;
    description: string;
    currentTitle: string;
    currentSubtitle: string;
    wipTitle: string;
    wipSubtitle: string;
    centerLabel: string;
    centerSubLabel: string;
    nodes: TreeNode[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    columnLabel: string;
    currentLabel: string;
    wipLabel: string;
    rows: ComparisonRow[];
    emphasis: string;
  };
  rootCurrent: {
    number: string;
    eyebrow: string;
    title: string;
    steps: { id: string; label: string; subtitle?: string; tone: 'slate' | 'sky' | 'emerald' }[];
    emphasis: string;
  };
  alternate: {
    number: string;
    eyebrow: string;
    title: string;
    pairTitle: string;
    currentCard: {
      title: string;
      subtitle: string;
      fields: string[];
    };
    wipCard: {
      title: string;
      subtitle: string;
      fields: string[];
    };
    arrowLabel: string;
    arrowSubLabel: string;
    rightTitle: string;
    rightBody: string;
    rightNodes: { current: string; wip: string }[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      fileLabel: string;
      file: string;
      functionLabel: string;
      functionName: string;
      lookForLabel: string;
      lookForLines: string[];
      questionLabel: string;
      question: string;
      buttonLabel: string;
      buttonHref: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
    };
    annotations: { tone: 'sky' | 'violet' | 'amber'; label: string }[];
  };
  scenario: {
    number: string;
    eyebrow: string;
    title: string;
    steps: ScenarioStep[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCode = `function createWorkInProgress(current, pendingProps) {
  // 이미 존재하는 workInProgress Fiber가 있는지 확인
  let workInProgress = current.alternate;

  if (workInProgress === null) {
    // 없으면 새로 생성
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);

    // 서로를 alternate로 연결
    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    // 이미 있으면 기존 정보 재사용 후 초기화
    workInProgress.pendingProps = pendingProps;
    workInProgress.flags = NoFlags;
    workInProgress.subtreeFlags = NoFlags;
  }

  return workInProgress;
}`;

const checkpointCodeEn = `function createWorkInProgress(current, pendingProps) {
  // Check whether a workInProgress Fiber already exists
  let workInProgress = current.alternate;

  if (workInProgress === null) {
    // None — create a new one
    workInProgress = createFiber(current.tag, pendingProps, current.key, current.mode);

    // Link the two as each other's alternate
    workInProgress.alternate = current;
    current.alternate = workInProgress;
  } else {
    // Reuse and reset the existing one for this work
    workInProgress.pendingProps = pendingProps;
    workInProgress.flags = NoFlags;
    workInProgress.subtreeFlags = NoFlags;
  }

  return workInProgress;
}`;

const ko: CurrentWipAlternateContent = {
  hero: {
    badge: 'Fiber 트리 · 9/10단계',
    title: {
      line1: 'React는 Fiber 트리를',
      line2: '한 벌만 들고 있지 않습니다.',
    },
    emphasis: '한 벌만',
    description:
      '현재 화면을 대표하는 트리와 다음 화면을 계산하는 트리를 나누어 관리하며, 같은 논리 노드의 두 버전을 alternate로 연결합니다.',
    currentTitle: 'current tree',
    currentSubtitle: '현재 화면',
    wipTitle: 'workInProgress tree',
    wipSubtitle: '다음 화면 계산 중',
    centerLabel: 'alternate',
    centerSubLabel: '같은 논리 노드 연결',
    nodes: [
      { id: 'HostRoot', label: 'HostRoot' },
      { id: 'App', label: 'App' },
      { id: 'Header', label: 'Header' },
      { id: 'Main', label: 'Main' },
      { id: 'Button', label: 'Button' },
      { id: 'List', label: 'List' },
    ],
  },
  comparison: {
    number: '01',
    eyebrow: '두 트리 비교',
    title: 'current tree / workInProgress tree 비교',
    columnLabel: '구분',
    currentLabel: 'current tree',
    wipLabel: 'workInProgress tree',
    rows: [
      {
        id: 'role',
        label: '역할',
        current: '현재 화면을 대표하는 트리',
        workInProgress: '다음 화면을 계산하는 트리',
      },
      {
        id: 'feature',
        label: '특징',
        current: '마지막 commit 결과를 담고 있음 / 화면에 실제로 반영된 상태',
        workInProgress: '렌더링(재조정) 중에 만들어지는 트리 / 아직 화면에 반영되지 않은 상태',
      },
      {
        id: 'mutability',
        label: '변경 가능성',
        current: 'Commit 전까지 변경되지 않음 / 읽기 위주',
        workInProgress: '렌더링 동안 자유롭게 변경 가능 / 계산 전용',
      },
      {
        id: 'switch',
        label: '트리 전환',
        current: 'Commit 성공 시 workInProgress가 current로 전환된다.',
        workInProgress: 'Commit 성공 시 workInProgress가 current로 전환된다.',
      },
    ],
    emphasis: 'Commit 성공 시 workInProgress가 current로 전환된다.',
  },
  rootCurrent: {
    number: '02',
    eyebrow: '활성 트리 시작점',
    title: 'root.current 구조',
    steps: [
      { id: 'fiberRoot', label: 'FiberRoot', subtitle: '(root)', tone: 'slate' },
      { id: 'current', label: 'current', tone: 'sky' },
      { id: 'hostRoot', label: 'HostRoot Fiber', subtitle: '(tag: HostRoot)', tone: 'emerald' },
      { id: 'app', label: 'App Fiber', tone: 'emerald' },
      { id: 'dots', label: '...', tone: 'slate' },
    ],
    emphasis: '현재 활성 트리는 root.current에서 시작한다.',
  },
  alternate: {
    number: '03',
    eyebrow: '두 버전 연결',
    title: 'alternate 연결 다이어그램',
    pairTitle: '같은 위치 Fiber 쌍',
    currentCard: {
      title: 'current Button Fiber',
      subtitle: '이전 commit 결과',
      fields: ['memoizedProps', 'memoizedState', 'alternate'],
    },
    wipCard: {
      title: 'workInProgress Button Fiber',
      subtitle: '다음 작업 계산 중',
      fields: ['pendingProps', 'memoizedState', 'alternate'],
    },
    arrowLabel: 'alternate',
    arrowSubLabel: '서로의 이전/다음 버전',
    rightTitle: '전체 트리 버전 연결',
    rightBody: '같은 논리 위치에 있는 Fiber들은 alternate로 서로 연결되어 있다.',
    rightNodes: [
      { current: 'HostRoot', wip: 'HostRoot' },
      { current: 'App', wip: 'App' },
      { current: 'Main', wip: 'Main' },
      { current: 'Button', wip: 'Button' },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      fileLabel: '파일',
      file: 'packages/react-reconciler/src/ReactFiber.js',
      functionLabel: '함수',
      functionName: 'createWorkInProgress',
      lookForLabel: '볼 것',
      lookForLines: [
        'current.alternate',
        'workInProgress.alternate = current',
        'current.alternate = workInProgress',
      ],
      questionLabel: '학습 질문',
      question: 'React는 두 Fiber를 어떻게 서로 연결할까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    },
    code: {
      fileName: 'ReactFiber.js',
      language: 'JavaScript',
      content: checkpointCode,
    },
    annotations: [
      { tone: 'sky', label: '현재 Fiber의 이전/다음 버전 확인' },
      { tone: 'violet', label: '서로를 alternate로 연결' },
      { tone: 'amber', label: '이미 있는 경우 작업을 위해 초기화' },
    ],
  },
  scenario: {
    number: '05',
    eyebrow: '시나리오',
    title: '렌더링 시나리오 흐름',
    steps: [
      {
        id: 'update',
        number: '1',
        title: '업데이트 발생',
        body: 'setState, props 변경, 이벤트 등으로 update가 발생합니다.',
        tone: 'sky',
        iconName: 'pulse',
      },
      {
        id: 'prepare',
        number: '2',
        title: 'current 기준으로 workInProgress 준비',
        body: 'current 트리를 기준으로 workInProgress 트리를 생성하거나 재사용합니다.',
        tone: 'emerald',
        iconName: 'workflow',
      },
      {
        id: 'render',
        number: '3',
        title: '새 결과 계산 Render Phase',
        body: 'workInProgress 트리에서 변경 계산, 우선순위, effect 표시 등을 진행합니다.',
        tone: 'violet',
        iconName: 'pencil',
      },
      {
        id: 'keepCurrent',
        number: '4',
        title: 'Commit 전까지 화면은 current 유지',
        body: '계산 중에는 화면에 영향을 주지 않고, current 트리를 그대로 유지합니다.',
        tone: 'amber',
        iconName: 'pause',
      },
      {
        id: 'switch',
        number: '5',
        title: 'Commit 후 current 전환',
        body: '커밋이 성공하면 workInProgress가 새 current가 됩니다.',
        tone: 'teal',
        iconName: 'check',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 개념 퀴즈',
    questionLabel: '질문',
    answerLabel: '정답',
    explanationLabel: '해설',
    cards: [
      {
        id: 'q1',
        question: '현재 화면을 대표하는 트리의 시작점은?',
        answer: 'root.current',
        explanation: 'FiberRoot의 current 필드가 가리키는 트리가 현재 화면을 대표하는 트리입니다.',
        tone: 'emerald',
      },
      {
        id: 'q2',
        question: '같은 논리 노드의 이전 버전과 다음 버전을 연결하는 포인터는?',
        answer: 'alternate',
        explanation:
          'alternate는 서로 반대 버전을 가리키며, 두 트리를 동기화하고 재사용할 수 있게 합니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Fiber는 왜 중심 자료구조인가?',
    description:
      'Fiber 트리가 현재와 다음 버전으로 나뉜다는 것까지 이해했다면, 이제 이 모든 필드가 왜 React 렌더링의 중심 자료구조를 이루는지 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/why-fiber-tree',
  },
};

const en: CurrentWipAlternateContent = {
  hero: {
    badge: 'Fiber Tree · 9/10',
    title: {
      line1: 'React does not keep just one',
      line2: 'copy of the Fiber tree.',
    },
    emphasis: 'just one',
    description:
      'It manages the tree currently on screen and a tree being computed for the next screen separately, linking the two versions of each logical node via alternate.',
    currentTitle: 'current tree',
    currentSubtitle: 'on screen',
    wipTitle: 'workInProgress tree',
    wipSubtitle: 'being computed',
    centerLabel: 'alternate',
    centerSubLabel: 'same logical node link',
    nodes: [
      { id: 'HostRoot', label: 'HostRoot' },
      { id: 'App', label: 'App' },
      { id: 'Header', label: 'Header' },
      { id: 'Main', label: 'Main' },
      { id: 'Button', label: 'Button' },
      { id: 'List', label: 'List' },
    ],
  },
  comparison: {
    number: '01',
    eyebrow: 'TREES COMPARED',
    title: 'current vs workInProgress',
    columnLabel: 'Aspect',
    currentLabel: 'current tree',
    wipLabel: 'workInProgress tree',
    rows: [
      {
        id: 'role',
        label: 'Role',
        current: 'The tree currently shown on screen',
        workInProgress: 'The tree being computed for the next screen',
      },
      {
        id: 'feature',
        label: 'Properties',
        current: 'Holds the last commit result / reflects what is on screen',
        workInProgress: 'Built during render (reconciliation) / not yet on screen',
      },
      {
        id: 'mutability',
        label: 'Mutability',
        current: 'Not mutated until commit / read-mostly',
        workInProgress: 'Freely mutated during render / write-during-compute',
      },
      {
        id: 'switch',
        label: 'Tree switch',
        current: 'On successful commit, workInProgress becomes current.',
        workInProgress: 'On successful commit, workInProgress becomes current.',
      },
    ],
    emphasis: 'On a successful commit, workInProgress becomes the new current.',
  },
  rootCurrent: {
    number: '02',
    eyebrow: 'ACTIVE TREE',
    title: 'root.current structure',
    steps: [
      { id: 'fiberRoot', label: 'FiberRoot', subtitle: '(root)', tone: 'slate' },
      { id: 'current', label: 'current', tone: 'sky' },
      { id: 'hostRoot', label: 'HostRoot Fiber', subtitle: '(tag: HostRoot)', tone: 'emerald' },
      { id: 'app', label: 'App Fiber', tone: 'emerald' },
      { id: 'dots', label: '...', tone: 'slate' },
    ],
    emphasis: 'The currently active tree starts at root.current.',
  },
  alternate: {
    number: '03',
    eyebrow: 'VERSIONS LINKED',
    title: 'alternate connection diagram',
    pairTitle: 'Same-position Fiber pair',
    currentCard: {
      title: 'current Button Fiber',
      subtitle: 'last commit result',
      fields: ['memoizedProps', 'memoizedState', 'alternate'],
    },
    wipCard: {
      title: 'workInProgress Button Fiber',
      subtitle: 'next work in progress',
      fields: ['pendingProps', 'memoizedState', 'alternate'],
    },
    arrowLabel: 'alternate',
    arrowSubLabel: 'each other’s previous/next version',
    rightTitle: 'Whole-tree version links',
    rightBody: 'Fibers in the same logical position are linked to one another via alternate.',
    rightNodes: [
      { current: 'HostRoot', wip: 'HostRoot' },
      { current: 'App', wip: 'App' },
      { current: 'Main', wip: 'Main' },
      { current: 'Button', wip: 'Button' },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      fileLabel: 'File',
      file: 'packages/react-reconciler/src/ReactFiber.js',
      functionLabel: 'Function',
      functionName: 'createWorkInProgress',
      lookForLabel: 'Look for',
      lookForLines: [
        'current.alternate',
        'workInProgress.alternate = current',
        'current.alternate = workInProgress',
      ],
      questionLabel: 'Learning question',
      question: 'How does React link the two Fibers to each other?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    },
    code: {
      fileName: 'ReactFiber.js',
      language: 'JavaScript',
      content: checkpointCodeEn,
    },
    annotations: [
      { tone: 'sky', label: 'Check the previous/next version' },
      { tone: 'violet', label: 'Link the two as each other’s alternate' },
      { tone: 'amber', label: 'Reset the existing one for the next work' },
    ],
  },
  scenario: {
    number: '05',
    eyebrow: 'SCENARIO',
    title: 'Rendering scenario flow',
    steps: [
      {
        id: 'update',
        number: '1',
        title: 'Update arrives',
        body: 'setState, prop changes, events, etc. produce an update.',
        tone: 'sky',
        iconName: 'pulse',
      },
      {
        id: 'prepare',
        number: '2',
        title: 'Prepare workInProgress from current',
        body: 'A workInProgress tree is created or reused based on the current tree.',
        tone: 'emerald',
        iconName: 'workflow',
      },
      {
        id: 'render',
        number: '3',
        title: 'Render Phase — compute the new result',
        body: 'Change calculation, priority, effect marking happen on the workInProgress tree.',
        tone: 'violet',
        iconName: 'pencil',
      },
      {
        id: 'keepCurrent',
        number: '4',
        title: 'Screen keeps current until commit',
        body: 'During the computation the screen is untouched — the current tree stays.',
        tone: 'amber',
        iconName: 'pause',
      },
      {
        id: 'switch',
        number: '5',
        title: 'After commit, current is swapped',
        body: 'Once commit succeeds, workInProgress becomes the new current tree.',
        tone: 'teal',
        iconName: 'check',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'MINI QUIZ',
    title: 'Mini concept quiz',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    cards: [
      {
        id: 'q1',
        question: 'What is the starting point of the tree currently shown on screen?',
        answer: 'root.current',
        explanation:
          'The tree that the FiberRoot.current field points to is the current tree on screen.',
        tone: 'emerald',
      },
      {
        id: 'q2',
        question: 'Which pointer links the previous and next versions of the same logical node?',
        answer: 'alternate',
        explanation:
          'alternate points to the opposite version, so the two trees can stay in sync and be reused.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'why is Fiber the central data structure?',
    description:
      'Now that you understand how a Fiber tree splits into current and next versions, see why all these fields make Fiber the central data structure of React rendering.',
    cta: 'Go to the next page',
    href: '/why-fiber-tree',
  },
};

export const currentWipAlternateContent: Record<Locale, CurrentWipAlternateContent> = { ko, en };
