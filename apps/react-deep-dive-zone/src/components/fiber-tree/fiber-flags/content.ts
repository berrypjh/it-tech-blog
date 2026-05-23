import type { Locale } from '@it-tech-blog/preferences';

export type EffectKind = 'placement' | 'update' | 'childDeletion';
export type TreeNodeKind = 'normal' | 'placement' | 'update' | 'childDeletion';

export type TreeNode = {
  id: string;
  label: string;
  tag: string;
  effect?: TreeNodeKind;
};

export type FlagMiniCard = {
  id: 'placement' | 'update' | 'ref' | 'visibility';
  label: string;
  meaning: string;
  tone: 'emerald' | 'sky' | 'violet' | 'amber';
};

export type RepresentativeFlagCard = {
  id: EffectKind;
  title: string;
  description: string;
  before: string;
  after: string;
};

export type SimulationRow = {
  id: string;
  situation: string;
  before: string;
  after: string;
  change: string;
  resultFlag: EffectKind;
  resultDescription: string;
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
};

export type CodeBlock = {
  fileName: string;
  language: string;
  content: string;
  annotations: { label: string; tone: 'emerald' | 'sky' | 'rose' | 'violet' | 'amber' }[];
};

export type FiberFlagsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    emphasis: string;
    description: string;
    tree: TreeNode[];
    legend: { kind: EffectKind; label: string }[];
  };
  flagsRole: {
    number: string;
    eyebrow: string;
    title: string;
    mainTitle: string;
    mainDescription: string;
    examples: FlagMiniCard[];
    emphasis: string;
  };
  subtree: {
    number: string;
    eyebrow: string;
    title: string;
    subtreeCard: { title: string; description: string; body: string };
    deletionsCard: { title: string; description: string; body: string };
    parentLabel: string;
    parentFieldLabel: string;
    parentBadge: string;
    childTreeLabel: string;
    childLabels: { kind: EffectKind; text: string }[];
  };
  repFlags: {
    number: string;
    eyebrow: string;
    title: string;
    cards: RepresentativeFlagCard[];
    beforeLabel: string;
    afterLabel: string;
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      files: string[];
      lookForLabel: string;
      lookFor: string;
      questionLabel: string;
      question: string;
      buttonLabel: string;
      buttonHref: string;
    };
    blocks: CodeBlock[];
  };
  simulation: {
    number: string;
    eyebrow: string;
    title: string;
    columns: { situation: string; before: string; after: string; change: string; result: string };
    rows: SimulationRow[];
  };
  commitPreview: {
    number: string;
    eyebrow: string;
    title: string;
    renderCard: { title: string; subtitle: string; body: string };
    arrowLabel: string;
    commitCard: { title: string; subtitle: string; body: string };
    emphasis: string;
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
  next: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const internalTypesCode = `export type Fiber = {
  // ... 생략 ...
  flags: Flags;
  subtreeFlags: Flags;
  deletions: Array<Fiber> | null;
  // ... 생략 ...
};`;

const reactFiberFlagsCode = `export const NoFlags = 0b0000000000000000000000000000000;
export const Placement = 0b0000000000000000000000000000010;
export const Update = 0b0000000000000000000000000000100;
export const ChildDeletion = 0b0000000000000000000000000010000;
export const Ref = 0b0000000000000000000000000100000;
export const Visibility = 0b0000000000000000000000010000000;

export const MutationMask =
  Placement | Update | ChildDeletion | Ref | Visibility;`;

const internalTypesCodeEn = `export type Fiber = {
  // ... omitted ...
  flags: Flags;
  subtreeFlags: Flags;
  deletions: Array<Fiber> | null;
  // ... omitted ...
};`;

const ko: FiberFlagsContent = {
  hero: {
    badge: 'CHAPTER 20',
    title: {
      line1: 'React는 변경을',
      line2: '바로 반영하지 않고,',
      line3: '먼저 Fiber에 표시합니다.',
    },
    emphasis: '먼저 Fiber에 표시합니다',
    description:
      '새로 배치해야 하는가, 업데이트가 필요한가, 삭제가 필요한가를 flags와 deletions에 남깁니다.',
    tree: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot' },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', effect: 'update' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', effect: 'update' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', effect: 'placement' },
      { id: 'OldItem', label: 'OldItem', tag: 'tag: HostComponent', effect: 'childDeletion' },
    ],
    legend: [
      { kind: 'placement', label: 'Placement' },
      { kind: 'update', label: 'Update' },
      { kind: 'childDeletion', label: 'ChildDeletion' },
    ],
  },
  flagsRole: {
    number: '01',
    eyebrow: 'flags 역할',
    title: 'flags의 역할',
    mainTitle: 'flags',
    mainDescription: '→ 이 Fiber 자신에게 필요한 effect 표시',
    examples: [
      { id: 'placement', label: 'Placement', meaning: '배치', tone: 'emerald' },
      { id: 'update', label: 'Update', meaning: '업데이트', tone: 'sky' },
      { id: 'ref', label: 'Ref', meaning: '참조 변경', tone: 'violet' },
      { id: 'visibility', label: 'Visibility', meaning: '가시성 변경', tone: 'amber' },
    ],
    emphasis: '이 Fiber 자신에 직접 일어나야 하는 작업을 나타냅니다.',
  },
  subtree: {
    number: '02',
    eyebrow: '자식 영역과 삭제',
    title: 'subtreeFlags와 deletions',
    subtreeCard: {
      title: 'subtreeFlags',
      description: '→ 자식 어딘가에 effect가 있음을 요약',
      body: '자식 중 하나라도 변경이 있으면 부모 Fiber가 이 값을 통해 빠르게 감지할 수 있습니다.',
    },
    deletionsCard: {
      title: 'deletions',
      description: '→ 삭제해야 할 Fiber 목록',
      body: '삭제 대상이 되는 자식 Fiber들을 배열로 보관합니다.',
    },
    parentLabel: 'Parent Fiber',
    parentFieldLabel: 'subtreeFlags',
    parentBadge: '변경 존재',
    childTreeLabel: '자식 영역 어딘가에 변경 존재',
    childLabels: [
      { kind: 'update', text: 'Update' },
      { kind: 'childDeletion', text: 'ChildDeletion' },
    ],
  },
  repFlags: {
    number: '03',
    eyebrow: '대표 flag',
    title: '대표 flag 예시',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      {
        id: 'placement',
        title: 'Placement',
        description: '→ 새로운 노드를 배치해야 함',
        before: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
      },
      {
        id: 'update',
        title: 'Update',
        description: '→ 기존 노드를 갱신해야 함',
        before: `<button>저장</button>`,
        after: `<button>전송</button>`,
      },
      {
        id: 'childDeletion',
        title: 'ChildDeletion',
        description: '→ 자식을 삭제해야 함',
        before: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
      },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      files: [
        'packages/react-reconciler/src/ReactInternalTypes.js',
        'packages/react-reconciler/src/ReactFiberFlags.js',
      ],
      lookForLabel: '볼 것',
      lookFor: 'flags, subtreeFlags, deletions, MutationMask',
      questionLabel: '학습 질문',
      question: 'React는 변경 효과를 어떤 필드에 기록할까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: internalTypesCode,
        annotations: [
          { label: '이 Fiber 자신의 effect', tone: 'emerald' },
          { label: '자식 영역의 effect 요약', tone: 'violet' },
          { label: '삭제 대상 목록', tone: 'rose' },
        ],
      },
      {
        fileName: 'ReactFiberFlags.js',
        language: 'TypeScript',
        content: reactFiberFlagsCode,
        annotations: [{ label: 'Mutation 관련 Flag 비트들의 모음', tone: 'sky' }],
      },
    ],
  },
  simulation: {
    number: '05',
    eyebrow: '시뮬레이션',
    title: '변경 예시 시뮬레이션',
    columns: {
      situation: '상황',
      before: 'Before',
      after: 'After',
      change: '발생하는 변경',
      result: 'Fiber flag 결과',
    },
    rows: [
      {
        id: 'add-li',
        situation: '새 <li> 추가',
        before: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        change: '새로운 노드가 추가됨',
        resultFlag: 'placement',
        resultDescription: '새 노드를 DOM에 배치해야 함',
      },
      {
        id: 'change-text',
        situation: '버튼 텍스트 변경',
        before: `<button>저장</button>`,
        after: `<button>전송</button>`,
        change: '기존 노드의 내용 변경',
        resultFlag: 'update',
        resultDescription: '기존 노드를 갱신해야 함',
      },
      {
        id: 'remove-li',
        situation: '목록 항목 제거',
        before: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        change: '기존 노드가 제거됨',
        resultFlag: 'childDeletion',
        resultDescription: '삭제 대상 Fiber를 deletions에 저장',
      },
    ],
  },
  commitPreview: {
    number: '06',
    eyebrow: '연결 예고',
    title: 'Commit Phase 연결 예고',
    renderCard: {
      title: 'Render Phase',
      subtitle: '표시 단계',
      body: '변경이 필요한 Fiber에 flags / subtreeFlags / deletions를 기록하여 "무엇을 바꿀지" 표시합니다.',
    },
    arrowLabel: 'effect 정보 전달',
    commitCard: {
      title: 'Commit Phase',
      subtitle: '반영 단계',
      body: '기록된 정보를 따라 실제 DOM/Host 환경에 변경을 적용합니다.',
    },
    emphasis:
      'Render Phase는 무엇을 바꿀지 표시합니다. Commit Phase는 이 표시를 실제 환경에 반영합니다.',
  },
  quiz: {
    number: '07',
    eyebrow: '미니 개념 퀴즈',
    title: '미니 개념 퀴즈',
    questionLabel: '질문',
    answerLabel: '정답',
    explanationLabel: '해설',
    cards: [
      {
        id: 'q1',
        question: '새로운 DOM 노드를 추가해야 한다면 어떤 flag가 설정될까?',
        answer: 'Placement',
        explanation: '새로운 노드를 배치해야 하므로 Placement flag가 필요합니다.',
      },
      {
        id: 'q2',
        question: '자식 중 어딘가에 변경이 있을 때 부모가 확인하는 필드는?',
        answer: 'subtreeFlags',
        explanation:
          '부모 Fiber는 subtreeFlags를 통해 자식 영역의 변경 존재 여부를 요약해 확인합니다.',
      },
      {
        id: 'q3',
        question: '삭제 대상 Fiber들은 어디에 저장될까?',
        answer: 'deletions',
        explanation: '삭제할 자식 Fiber 목록이 해당 Fiber의 deletions에 저장됩니다.',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: '다음으로 넘어가기',
    title: '다음으로 넘어가기',
    description:
      '변경 효과가 Fiber에 어떻게 남는지 봤다면, 이제 React가 어떤 작업을 먼저 처리할지 Fiber가 어떻게 우선순위를 품는지 살펴봅니다.',
    buttonLabel: '다음: lanes / childLanes',
    buttonHref: '/fiber-lanes',
  },
};

const en: FiberFlagsContent = {
  hero: {
    badge: 'CHAPTER 20',
    title: {
      line1: 'React does not apply changes',
      line2: 'right away — it marks them',
      line3: 'on the Fiber first.',
    },
    emphasis: 'on the Fiber first',
    description:
      'Whether to place, update, or delete a node is recorded on flags and deletions ahead of time.',
    tree: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot' },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', effect: 'update' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent' },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent' },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', effect: 'update' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', effect: 'placement' },
      { id: 'OldItem', label: 'OldItem', tag: 'tag: HostComponent', effect: 'childDeletion' },
    ],
    legend: [
      { kind: 'placement', label: 'Placement' },
      { kind: 'update', label: 'Update' },
      { kind: 'childDeletion', label: 'ChildDeletion' },
    ],
  },
  flagsRole: {
    number: '01',
    eyebrow: 'flags role',
    title: 'What flags do',
    mainTitle: 'flags',
    mainDescription: '→ marks the effects this Fiber itself needs',
    examples: [
      { id: 'placement', label: 'Placement', meaning: 'place', tone: 'emerald' },
      { id: 'update', label: 'Update', meaning: 'update', tone: 'sky' },
      { id: 'ref', label: 'Ref', meaning: 'ref change', tone: 'violet' },
      { id: 'visibility', label: 'Visibility', meaning: 'visibility', tone: 'amber' },
    ],
    emphasis: 'Represents the work that must happen on this Fiber itself.',
  },
  subtree: {
    number: '02',
    eyebrow: 'Subtree & deletions',
    title: 'subtreeFlags and deletions',
    subtreeCard: {
      title: 'subtreeFlags',
      description: '→ summarises that some descendant has an effect',
      body: 'If any descendant has a change, the parent Fiber can detect it quickly through this value.',
    },
    deletionsCard: {
      title: 'deletions',
      description: '→ list of Fibers that need to be deleted',
      body: 'Holds the child Fibers slated for deletion in an array.',
    },
    parentLabel: 'Parent Fiber',
    parentFieldLabel: 'subtreeFlags',
    parentBadge: 'change present',
    childTreeLabel: 'A change exists somewhere in the subtree',
    childLabels: [
      { kind: 'update', text: 'Update' },
      { kind: 'childDeletion', text: 'ChildDeletion' },
    ],
  },
  repFlags: {
    number: '03',
    eyebrow: 'Representative flags',
    title: 'Representative flag examples',
    beforeLabel: 'Before',
    afterLabel: 'After',
    cards: [
      {
        id: 'placement',
        title: 'Placement',
        description: '→ a new node must be placed',
        before: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
      },
      {
        id: 'update',
        title: 'Update',
        description: '→ an existing node must be updated',
        before: `<button>Save</button>`,
        after: `<button>Send</button>`,
      },
      {
        id: 'childDeletion',
        title: 'ChildDeletion',
        description: '→ a child must be deleted',
        before: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
      },
    ],
  },
  checkpoint: {
    number: '04',
    eyebrow: 'Connect to real source',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'Files',
      files: [
        'packages/react-reconciler/src/ReactInternalTypes.js',
        'packages/react-reconciler/src/ReactFiberFlags.js',
      ],
      lookForLabel: 'Look for',
      lookFor: 'flags, subtreeFlags, deletions, MutationMask',
      questionLabel: 'Learning question',
      question: 'Which fields does React use to record effect changes?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: internalTypesCodeEn,
        annotations: [
          { label: 'effect of this Fiber itself', tone: 'emerald' },
          { label: 'summary of effects in the subtree', tone: 'violet' },
          { label: 'deletion target list', tone: 'rose' },
        ],
      },
      {
        fileName: 'ReactFiberFlags.js',
        language: 'TypeScript',
        content: reactFiberFlagsCode,
        annotations: [{ label: 'flag bits related to mutation', tone: 'sky' }],
      },
    ],
  },
  simulation: {
    number: '05',
    eyebrow: 'Simulation',
    title: 'Change scenario simulation',
    columns: {
      situation: 'Situation',
      before: 'Before',
      after: 'After',
      change: 'What changes',
      result: 'Resulting Fiber flag',
    },
    rows: [
      {
        id: 'add-li',
        situation: 'Add a new <li>',
        before: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        change: 'A new node is added',
        resultFlag: 'placement',
        resultDescription: 'The new node must be placed in the DOM',
      },
      {
        id: 'change-text',
        situation: 'Change button text',
        before: `<button>Save</button>`,
        after: `<button>Send</button>`,
        change: 'An existing node’s content changes',
        resultFlag: 'update',
        resultDescription: 'The existing node must be updated',
      },
      {
        id: 'remove-li',
        situation: 'Remove a list item',
        before: `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`,
        after: `<ul>
  <li>A</li>
  <li>B</li>
</ul>`,
        change: 'An existing node is removed',
        resultFlag: 'childDeletion',
        resultDescription: 'The Fiber for deletion goes into deletions',
      },
    ],
  },
  commitPreview: {
    number: '06',
    eyebrow: 'Next phase preview',
    title: 'Commit phase preview',
    renderCard: {
      title: 'Render Phase',
      subtitle: 'marking stage',
      body: 'Records flags / subtreeFlags / deletions on Fibers that need changes — "what will change."',
    },
    arrowLabel: 'pass effect info',
    commitCard: {
      title: 'Commit Phase',
      subtitle: 'apply stage',
      body: 'Reads the recorded info and applies the changes to the actual DOM/host environment.',
    },
    emphasis:
      'Render Phase marks what will change. Commit Phase reflects those marks into the real environment.',
  },
  quiz: {
    number: '07',
    eyebrow: 'Mini concept quiz',
    title: 'Mini concept quiz',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    cards: [
      {
        id: 'q1',
        question: 'Which flag is set when a new DOM node must be added?',
        answer: 'Placement',
        explanation: 'A new node must be placed — that needs the Placement flag.',
      },
      {
        id: 'q2',
        question: 'Which field tells a parent that a change exists somewhere among its children?',
        answer: 'subtreeFlags',
        explanation:
          'A parent Fiber checks subtreeFlags to see whether any descendant carries a change.',
      },
      {
        id: 'q3',
        question: 'Where are Fibers slated for deletion stored?',
        answer: 'deletions',
        explanation: 'A Fiber keeps its list of children to delete in deletions.',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: 'Up next',
    title: 'Up next',
    description:
      'Now that you have seen how effects are marked on a Fiber, look at how a Fiber carries priority so React knows which work to handle first.',
    buttonLabel: 'Next: lanes / childLanes',
    buttonHref: '/fiber-lanes',
  },
};

export const fiberFlagsContent: Record<Locale, FiberFlagsContent> = { ko, en };
