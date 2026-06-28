import type { Locale } from '@it-tech-blog/preferences';

export type PointerKind = 'child' | 'sibling' | 'return';

export type TreeNode = {
  id: string;
  label: string;
  tag: string;
  /** Hero traversal에서 이 노드에 도달한 포인터(루트는 없음). */
  enter?: PointerKind;
};

export type PointerCard = {
  id: PointerKind;
  title: string;
  body: string;
};

export type ConnectionRow = {
  from: string;
  pointer: PointerKind;
  to: string;
};

export type TraversalStep = {
  id: PointerKind;
  number: string;
  title: string;
  body: string;
};

export type FiberTreePointersContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    nodes: TreeNode[];
    legendTitle: string;
    legendItems: { kind: PointerKind; label: string; meaning: string }[];
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    leftTitle: string;
    leftTree: string;
    rightTitle: string;
    childSiblingRows: ConnectionRow[];
    returnRows: ConnectionRow[];
  };
  pointers: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: PointerCard[];
  };
  conversion: {
    badge: string;
    eyebrow: string;
    title: string;
    jsxLabel: string;
    jsx: string;
    diagramLabel: string;
    diagramNodes: TreeNode[];
    tableLabel: string;
    childSiblingRows: ConnectionRow[];
    returnRows: ConnectionRow[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      file: string;
      lookForLabel: string;
      lookFor: string;
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
  };
  traversal: {
    badge: string;
    eyebrow: string;
    title: string;
    steps: TraversalStep[];
    banner: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCode = `export type Fiber = {
  // ... 생략 ...

  return: Fiber | null;

  // Singly Linked List Tree Structure.
  child: Fiber | null;
  sibling: Fiber | null;

  // ... 생략 ...
};`;

const ko: FiberTreePointersContent = {
  hero: {
    badge: 'Fiber 트리 · 4/10단계',
    title: {
      line1: 'Fiber 트리는 배열이',
      line2: '아니라',
      line3: '포인터로 연결됩니다.',
    },
    description:
      'React는 첫 번째 자식으로 내려가고, 다음 형제로 이동하고, 작업을 마치면 부모 방향으로 돌아갑니다.',
    nodes: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot' },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', enter: 'child' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent', enter: 'child' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent', enter: 'sibling' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', enter: 'child' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', enter: 'sibling' },
    ],
    legendTitle: '범례',
    legendItems: [
      { kind: 'child', label: 'child', meaning: '첫 번째 자식' },
      { kind: 'sibling', label: 'sibling', meaning: '다음 형제' },
      { kind: 'return', label: 'return', meaning: '부모로 돌아감' },
    ],
  },
  comparison: {
    badge: '01',
    eyebrow: '구조 비교',
    title: '일반 UI 트리와 Fiber 연결 구조 비교',
    leftTitle: '일반 UI 트리 (계층 구조)',
    leftTree: `App
└─ Page
   ├─ Header
   └─ Main
      ├─ Button
      └─ List`,
    rightTitle: 'Fiber 연결 구조 (포인터로 연결)',
    childSiblingRows: [
      { from: 'Page', pointer: 'child', to: 'Header' },
      { from: 'Header', pointer: 'sibling', to: 'Main' },
      { from: 'Main', pointer: 'child', to: 'Button' },
      { from: 'Button', pointer: 'sibling', to: 'List' },
    ],
    returnRows: [
      { from: 'Header', pointer: 'return', to: 'Page' },
      { from: 'Main', pointer: 'return', to: 'Page' },
      { from: 'Button', pointer: 'return', to: 'Main' },
      { from: 'List', pointer: 'return', to: 'Main' },
    ],
  },
  pointers: {
    badge: '02',
    eyebrow: '세 포인터',
    title: '3개 포인터를 한 번에 이해하기',
    cards: [
      {
        id: 'child',
        title: 'child: 첫 번째 자식 Fiber',
        body: '부모 Fiber에서 가장 먼저 만나는 자식으로 이동합니다.',
      },
      {
        id: 'sibling',
        title: 'sibling: 다음 형제 Fiber',
        body: '같은 부모를 가진 형제들 사이에서 오른쪽으로 이동합니다.',
      },
      {
        id: 'return',
        title: 'return: 작업을 끝낸 뒤 돌아갈 Fiber',
        body: '현재 Fiber의 작업이 끝나면 부모 Fiber로 돌아갑니다.',
      },
    ],
  },
  conversion: {
    badge: '03',
    eyebrow: '실제 변환',
    title: '실제 JSX 예시를 Fiber 연결로 변환',
    jsxLabel: 'JSX',
    jsx: `<Card>
  <Header />
  <Main>
    <Button />
    <List />
  </Main>
</Card>`,
    diagramLabel: '연결 다이어그램',
    diagramNodes: [
      { id: 'Card', label: 'Card', tag: 'tag: FunctionComponent' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent' },
    ],
    tableLabel: '연결 표',
    childSiblingRows: [
      { from: 'Card', pointer: 'child', to: 'Header' },
      { from: 'Header', pointer: 'sibling', to: 'Main' },
      { from: 'Main', pointer: 'child', to: 'Button' },
      { from: 'Button', pointer: 'sibling', to: 'List' },
    ],
    returnRows: [
      { from: 'Header', pointer: 'return', to: 'Card' },
      { from: 'Main', pointer: 'return', to: 'Card' },
      { from: 'Button', pointer: 'return', to: 'Main' },
      { from: 'List', pointer: 'return', to: 'Main' },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: '볼 것',
      lookFor: 'return, child, sibling 정의',
      questionLabel: '학습 질문',
      question: 'Fiber 트리를 어떻게 포인터 3개로 표현할 수 있을까?',
      buttonLabel: 'ReactInternalTypes.js 읽기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCode,
    },
  },
  traversal: {
    badge: '05',
    eyebrow: '순회 이점',
    title: '이 구조가 순회에 왜 유리한가?',
    steps: [
      {
        id: 'child',
        number: '1',
        title: '아래로 내려간다 → child',
        body: '첫 번째 자식으로 내려가며 트리를 깊이 탐색합니다.',
      },
      {
        id: 'sibling',
        number: '2',
        title: '옆으로 이동한다 → sibling',
        body: '형제들을 차례대로 이동하여 같은 레벨을 순회합니다.',
      },
      {
        id: 'return',
        number: '3',
        title: '위로 돌아온다 → return',
        body: '작업을 끝내면 부모로 돌아가 다시 순회를 이어갑니다.',
      },
    ],
    banner: '이 3개의 연결만으로 React는 Fiber 트리 전체를 순회할 수 있다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'pendingProps와 memoizedProps',
    description:
      'Fiber가 어떻게 트리로 연결되는지 이해했다면, 이제 그 Fiber가 입력값을 어떻게 기억하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-props',
  },
};

const en: FiberTreePointersContent = {
  hero: {
    badge: 'Fiber Tree · 4/10',
    title: {
      line1: 'A Fiber tree is not an array —',
      line2: 'it is',
      line3: 'connected by pointers.',
    },
    description:
      'React goes down to the first child, moves to the next sibling, and returns to the parent when work is done.',
    nodes: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot' },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', enter: 'child' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent', enter: 'child' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent', enter: 'sibling' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', enter: 'child' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', enter: 'sibling' },
    ],
    legendTitle: 'Legend',
    legendItems: [
      { kind: 'child', label: 'child', meaning: 'first child' },
      { kind: 'sibling', label: 'sibling', meaning: 'next sibling' },
      { kind: 'return', label: 'return', meaning: 'back to parent' },
    ],
  },
  comparison: {
    badge: '01',
    eyebrow: 'STRUCTURE COMPARED',
    title: 'A normal UI tree vs the Fiber pointer structure',
    leftTitle: 'Normal UI tree (hierarchy)',
    leftTree: `App
└─ Page
   ├─ Header
   └─ Main
      ├─ Button
      └─ List`,
    rightTitle: 'Fiber connections (linked by pointers)',
    childSiblingRows: [
      { from: 'Page', pointer: 'child', to: 'Header' },
      { from: 'Header', pointer: 'sibling', to: 'Main' },
      { from: 'Main', pointer: 'child', to: 'Button' },
      { from: 'Button', pointer: 'sibling', to: 'List' },
    ],
    returnRows: [
      { from: 'Header', pointer: 'return', to: 'Page' },
      { from: 'Main', pointer: 'return', to: 'Page' },
      { from: 'Button', pointer: 'return', to: 'Main' },
      { from: 'List', pointer: 'return', to: 'Main' },
    ],
  },
  pointers: {
    badge: '02',
    eyebrow: 'THREE POINTERS',
    title: 'All three pointers in one view',
    cards: [
      {
        id: 'child',
        title: 'child: first child Fiber',
        body: 'Moves to the first child a parent Fiber encounters.',
      },
      {
        id: 'sibling',
        title: 'sibling: next sibling Fiber',
        body: 'Moves rightward among siblings that share the same parent.',
      },
      {
        id: 'return',
        title: 'return: Fiber to go back to',
        body: 'After the current Fiber finishes work, it returns to the parent Fiber.',
      },
    ],
  },
  conversion: {
    badge: '03',
    eyebrow: 'REAL CONVERSION',
    title: 'Convert a real JSX snippet into Fiber connections',
    jsxLabel: 'JSX',
    jsx: `<Card>
  <Header />
  <Main>
    <Button />
    <List />
  </Main>
</Card>`,
    diagramLabel: 'Diagram',
    diagramNodes: [
      { id: 'Card', label: 'Card', tag: 'tag: FunctionComponent' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent' },
    ],
    tableLabel: 'Connection table',
    childSiblingRows: [
      { from: 'Card', pointer: 'child', to: 'Header' },
      { from: 'Header', pointer: 'sibling', to: 'Main' },
      { from: 'Main', pointer: 'child', to: 'Button' },
      { from: 'Button', pointer: 'sibling', to: 'List' },
    ],
    returnRows: [
      { from: 'Header', pointer: 'return', to: 'Card' },
      { from: 'Main', pointer: 'return', to: 'Card' },
      { from: 'Button', pointer: 'return', to: 'Main' },
      { from: 'List', pointer: 'return', to: 'Main' },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: 'Look for',
      lookFor: 'return, child, sibling definitions',
      questionLabel: 'Learning question',
      question: 'How can a Fiber tree be represented with just three pointers?',
      buttonLabel: 'Read ReactInternalTypes.js',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCode,
    },
  },
  traversal: {
    badge: '05',
    eyebrow: 'TRAVERSAL BENEFIT',
    title: 'Why is this structure good for traversal?',
    steps: [
      {
        id: 'child',
        number: '1',
        title: 'Go down → child',
        body: 'Descend to the first child to explore the tree depth-first.',
      },
      {
        id: 'sibling',
        number: '2',
        title: 'Move sideways → sibling',
        body: 'Walk through siblings to traverse the same level.',
      },
      {
        id: 'return',
        number: '3',
        title: 'Climb back → return',
        body: 'When work is done, go back to the parent and continue traversal.',
      },
    ],
    banner: 'These three links alone are enough for React to traverse the whole Fiber tree.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'pendingProps & memoizedProps',
    description:
      'Now that you know how a Fiber tree is connected, look at how a Fiber remembers its inputs.',
    cta: 'Go to the next page',
    href: '/fiber-props',
  },
};

export const fiberTreePointersContent: Record<Locale, FiberTreePointersContent> = { ko, en };
