import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'teal' | 'rose' | 'amber' | 'sky' | 'violet' | 'indigo';

export type FlagCard = {
  name: string;
  description: string;
  bit: string;
  tone: Tone;
  iconName: 'flag' | 'trash' | 'pencil' | 'zap';
};

export type ExampleCard = {
  title: string;
  before: string;
  after: string;
  description: string;
  tone: Tone;
  badgeLabel: string;
  iconName: 'flag' | 'trash' | 'move';
};

export type ReorderResultItem = {
  text: string;
  tone: Tone;
  iconName: 'flag' | 'trash' | 'move';
};

export type ReasonCard = {
  title: string;
  description: string;
  tone: Tone;
  iconName: 'shield' | 'target' | 'clock' | 'gauge';
};

export type RenderCommitCard = {
  title: string;
  subtitle: string;
  items: string[];
  bottomLabel: string;
  kind: 'render' | 'commit';
};

export type FlagsAndReorderContent = {
  flags: {
    number: string;
    eyebrow: string;
    title: string;
    steps: {
      title: string;
      description: string;
      tone: Tone;
    }[];
  };
  reorder: {
    number: string;
    eyebrow: string;
    title: string;
    beforeLabel: string;
    beforeValue: string;
    afterLabel: string;
    afterValue: string;
    resultTitle: string;
    resultItems: ReorderResultItem[];
    bottomNote: string;
  };
};

export type MarkChangesContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    callout: string;
    diagram: {
      fiberCard: {
        title: string;
        subtitle: string;
        fields: { label: string; value: string }[];
      };
      flagCards: {
        title: string;
        description: string;
        tone: Tone;
        iconName: 'flag' | 'trash' | 'pencil';
      }[];
      deletionsCard: { title: string; description: string };
    };
  };
  examples: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ExampleCard[];
  };
  flagsAndReorder: FlagsAndReorderContent;
  code: {
    number: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    files: string[];
    learningLabel: string;
    learningQuestion: string;
    panelHeader: string;
    cards: FlagCard[];
    bottomNote: string;
  };
  renderCommit: {
    number: string;
    eyebrow: string;
    title: string;
    render: RenderCommitCard;
    commit: RenderCommitCard;
  };
  whyTwoPhases: {
    number: string;
    eyebrow: string;
    title: string;
    reasons: ReasonCard[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: MarkChangesContent = {
  hero: {
    badge: 'Render Phase · 9/10단계',
    title: {
      line1: 'Render Phase는',
      line2: '변경을 직접 실행하지 않고,',
      line3: '표시만 남깁니다.',
    },
    description:
      '새로 배치할 것, 삭제할 것, 이동할 것, 업데이트할 것을 나중에 Commit Phase가 처리할 수 있도록 Fiber에 기록합니다.',
    callout: 'Render Phase의 결과는 DOM 변경이 아니라, 변경을 나타내는 흔적(Flags)입니다.',
    diagram: {
      fiberCard: {
        title: 'Fiber',
        subtitle: '(workInProgress)',
        fields: [
          { label: 'type', value: 'div' },
          { label: 'key', value: 'null' },
          { label: 'index', value: '2' },
          { label: 'alternate', value: '...' },
          { label: 'return', value: '...' },
          { label: 'flags', value: '...' },
        ],
      },
      flagCards: [
        {
          title: 'Placement',
          description: '새로운 노드를 삽입해야 함',
          tone: 'teal',
          iconName: 'flag',
        },
        {
          title: 'ChildDeletion',
          description: '삭제할 자식이 존재함',
          tone: 'rose',
          iconName: 'trash',
        },
        {
          title: 'Update',
          description: 'props 또는 텍스트 변경',
          tone: 'sky',
          iconName: 'pencil',
        },
      ],
      deletionsCard: {
        title: 'deletions',
        description: '삭제 대상 Fiber 리스트',
      },
    },
  },
  examples: {
    number: '1',
    eyebrow: 'change-examples',
    title: '삽입 / 삭제 / 이동 예시',
    cards: [
      {
        title: '새 child 추가 → Placement',
        before: 'A B C',
        after: 'A B C D',
        description: '새로 생긴 D는 Placement 표시가 남습니다.',
        tone: 'teal',
        badgeLabel: 'insert',
        iconName: 'flag',
      },
      {
        title: '기존 child 제거 → ChildDeletion',
        before: 'A B C',
        after: 'A C',
        description: '제거된 B는 deletions 리스트에 기록됩니다.',
        tone: 'rose',
        badgeLabel: 'delete',
        iconName: 'trash',
      },
      {
        title: '기존 child 순서 변경 → 이동 표시',
        before: 'A B C',
        after: 'B A C',
        description: 'A와 B는 새로운 위치로 이동해야 하므로 필요한 Placement 표시가 남습니다.',
        tone: 'amber',
        badgeLabel: 'move',
        iconName: 'move',
      },
    ],
  },
  flagsAndReorder: {
    flags: {
      number: '2',
      eyebrow: 'flags-connection',
      title: 'flags와의 연결',
      steps: [
        {
          title: 'Render Phase',
          description: 'Fiber 트리 계산 및 비교',
          tone: 'sky',
        },
        {
          title: 'Fiber.flags / deletions 기록',
          description: 'Placement, Update, ChildDeletion 등 변경 흔적을 남김',
          tone: 'teal',
        },
        {
          title: 'Commit Phase',
          description: '이 흔적을 읽어 실제 DOM 변경',
          tone: 'violet',
        },
      ],
    },
    reorder: {
      number: '3',
      eyebrow: 'list-reorder',
      title: '리스트 재정렬 시각화',
      beforeLabel: '이전 (before)',
      beforeValue: 'A B C',
      afterLabel: '다음 (after)',
      afterValue: 'B A D',
      resultTitle: '결과 (변경 흔적)',
      resultItems: [
        { text: 'A → 이동 (Placement)', tone: 'amber', iconName: 'move' },
        { text: 'C → 삭제 (ChildDeletion)', tone: 'rose', iconName: 'trash' },
        { text: 'D → 삽입 (Placement)', tone: 'teal', iconName: 'flag' },
      ],
      bottomNote: 'React는 최소한의 변경으로 목표 상태에 도달하도록 표시만 남깁니다.',
    },
  },
  code: {
    number: '4',
    eyebrow: 'source-checkpoint',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    files: ['ReactChildFiber.js', 'ReactFiberFlags.js'],
    learningLabel: '학습 질문',
    learningQuestion: 'Render Phase에서는 어떤 종류의 변경 흔적이 남을까?',
    panelHeader: '주요 변경 플래그 (ReactFiberFlags.js)',
    cards: [
      {
        name: 'Placement',
        description: '새로운 Fiber를 삽입해야 함',
        bit: '0b0000000000000010',
        tone: 'teal',
        iconName: 'flag',
      },
      {
        name: 'ChildDeletion',
        description: '삭제할 자식이 있음 · 부모의 deletions에 기록',
        bit: '0b0000000000000100',
        tone: 'rose',
        iconName: 'trash',
      },
      {
        name: 'Update',
        description: '기존 Fiber의 내용 업데이트',
        bit: '0b0000000000001000',
        tone: 'sky',
        iconName: 'pencil',
      },
      {
        name: 'Placement | Update',
        description: '이동 또는 업데이트가 필요한 경우 함께 표시될 수 있음',
        bit: '0b0000000000001010',
        tone: 'violet',
        iconName: 'zap',
      },
    ],
    bottomNote: '외에도 Ref, Snapshot, Passive 등 다양한 플래그가 존재합니다.',
  },
  renderCommit: {
    number: '5',
    eyebrow: 'render-vs-commit',
    title: 'Render와 Commit의 역할 연결',
    render: {
      title: 'Render Phase',
      subtitle: '무엇을 바꿀지 표시',
      items: [
        '현재 트리와 새 트리를 비교',
        'Placement / Update 표시',
        '삭제 대상은 deletions에 기록',
        'DOM 변경은 절대 하지 않음',
      ],
      bottomLabel: '계산 단계 (표시만 남김)',
      kind: 'render',
    },
    commit: {
      title: 'Commit Phase',
      subtitle: '그 표시를 실제 환경에 적용',
      items: [
        'Placement → DOM 삽입/이동',
        'Update → DOM 수정',
        'ChildDeletion → DOM 삭제',
        'Ref, Layout Effect 등 처리',
      ],
      bottomLabel: '실행 단계 (실제 반영)',
      kind: 'commit',
    },
  },
  whyTwoPhases: {
    number: '6',
    eyebrow: 'why-two-phases',
    title: '왜 이렇게 두 단계로 나눌까?',
    reasons: [
      {
        title: '안전한 중단 가능 (Concurrent)',
        description: 'Render Phase는 언제든 중단/재시작 OK',
        tone: 'sky',
        iconName: 'shield',
      },
      {
        title: '최소 변경 보장',
        description: '필요한 변경만 표시하고 Commit에서 적용',
        tone: 'teal',
        iconName: 'target',
      },
      {
        title: '원자적 반영',
        description: 'Commit 단계에서 한 번에 일관되게 반영',
        tone: 'indigo',
        iconName: 'clock',
      },
      {
        title: '성능 최적화',
        description: '불필요한 DOM 연산과 깜빡임 방지',
        tone: 'violet',
        iconName: 'gauge',
      },
    ],
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question: 'Placement가 표시되었다는 것은 DOM 삽입이 이미 끝났다는 뜻일까?',
    answer: '아니다. 실제 DOM 삽입은 Commit Phase에서 일어난다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'completeUnitOfWork와 completeWork',
    description:
      'Render Phase가 필요한 변경 표시까지 남겼다면, 마지막으로 React가 위로 올라오며 한 서브트리의 계산을 어떻게 마무리하는지 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/complete-work',
  },
};

const en: MarkChangesContent = {
  hero: {
    badge: 'Render Phase · 9/10',
    title: {
      line1: 'The Render Phase',
      line2: 'does not change the DOM —',
      line3: 'it just marks what to change.',
    },
    description:
      'It records what should be placed, deleted, moved, or updated on the Fiber, so the Commit Phase can apply it later.',
    callout: "The Render Phase's output is not DOM changes but marks (flags) that describe them.",
    diagram: {
      fiberCard: {
        title: 'Fiber',
        subtitle: '(workInProgress)',
        fields: [
          { label: 'type', value: 'div' },
          { label: 'key', value: 'null' },
          { label: 'index', value: '2' },
          { label: 'alternate', value: '...' },
          { label: 'return', value: '...' },
          { label: 'flags', value: '...' },
        ],
      },
      flagCards: [
        {
          title: 'Placement',
          description: 'A new node needs insertion',
          tone: 'teal',
          iconName: 'flag',
        },
        {
          title: 'ChildDeletion',
          description: 'There are children to delete',
          tone: 'rose',
          iconName: 'trash',
        },
        {
          title: 'Update',
          description: 'props or text changed',
          tone: 'sky',
          iconName: 'pencil',
        },
      ],
      deletionsCard: {
        title: 'deletions',
        description: 'list of Fibers to delete',
      },
    },
  },
  examples: {
    number: '1',
    eyebrow: 'change-examples',
    title: 'Insert / Delete / Move examples',
    cards: [
      {
        title: 'New child added → Placement',
        before: 'A B C',
        after: 'A B C D',
        description: 'The new D gets a Placement mark.',
        tone: 'teal',
        badgeLabel: 'insert',
        iconName: 'flag',
      },
      {
        title: 'Existing child removed → ChildDeletion',
        before: 'A B C',
        after: 'A C',
        description: 'Removed B is recorded in the deletions list.',
        tone: 'rose',
        badgeLabel: 'delete',
        iconName: 'trash',
      },
      {
        title: 'Existing children reordered → move marks',
        before: 'A B C',
        after: 'B A C',
        description: 'A and B need new positions, so Placement marks are left.',
        tone: 'amber',
        badgeLabel: 'move',
        iconName: 'move',
      },
    ],
  },
  flagsAndReorder: {
    flags: {
      number: '2',
      eyebrow: 'flags-connection',
      title: 'Connecting to flags',
      steps: [
        { title: 'Render Phase', description: 'Compute and diff the Fiber tree', tone: 'sky' },
        {
          title: 'Record Fiber.flags / deletions',
          description: 'Mark Placement, Update, ChildDeletion, ...',
          tone: 'teal',
        },
        {
          title: 'Commit Phase',
          description: 'Read the marks and apply to the real DOM',
          tone: 'violet',
        },
      ],
    },
    reorder: {
      number: '3',
      eyebrow: 'list-reorder',
      title: 'List reorder visualization',
      beforeLabel: 'before',
      beforeValue: 'A B C',
      afterLabel: 'after',
      afterValue: 'B A D',
      resultTitle: 'result (change marks)',
      resultItems: [
        { text: 'A → move (Placement)', tone: 'amber', iconName: 'move' },
        { text: 'C → delete (ChildDeletion)', tone: 'rose', iconName: 'trash' },
        { text: 'D → insert (Placement)', tone: 'teal', iconName: 'flag' },
      ],
      bottomNote:
        'React leaves marks only — aiming for the minimum changes to reach the target state.',
    },
  },
  code: {
    number: '4',
    eyebrow: 'source-checkpoint',
    title: 'Source-code checkpoint',
    fileLabel: 'files',
    files: ['ReactChildFiber.js', 'ReactFiberFlags.js'],
    learningLabel: 'learning question',
    learningQuestion: 'What kinds of change marks does the Render Phase leave?',
    panelHeader: 'Main change flags (ReactFiberFlags.js)',
    cards: [
      {
        name: 'Placement',
        description: 'a new Fiber needs to be inserted',
        bit: '0b0000000000000010',
        tone: 'teal',
        iconName: 'flag',
      },
      {
        name: 'ChildDeletion',
        description: 'a child to delete — recorded on the parent deletions',
        bit: '0b0000000000000100',
        tone: 'rose',
        iconName: 'trash',
      },
      {
        name: 'Update',
        description: 'existing Fiber content needs update',
        bit: '0b0000000000001000',
        tone: 'sky',
        iconName: 'pencil',
      },
      {
        name: 'Placement | Update',
        description: 'a move or update may be marked together',
        bit: '0b0000000000001010',
        tone: 'violet',
        iconName: 'zap',
      },
    ],
    bottomNote: 'Other flags also exist — Ref, Snapshot, Passive, and more.',
  },
  renderCommit: {
    number: '5',
    eyebrow: 'render-vs-commit',
    title: 'Connecting Render and Commit roles',
    render: {
      title: 'Render Phase',
      subtitle: 'mark what to change',
      items: [
        'Diff current tree against the new tree',
        'Mark Placement / Update',
        'Record deletions for removals',
        'Never touches the DOM directly',
      ],
      bottomLabel: 'Compute step (marks only)',
      kind: 'render',
    },
    commit: {
      title: 'Commit Phase',
      subtitle: 'apply those marks to the real environment',
      items: [
        'Placement → DOM insert/move',
        'Update → DOM mutation',
        'ChildDeletion → DOM remove',
        'Refs, Layout Effects, ...',
      ],
      bottomLabel: 'Execute step (real apply)',
      kind: 'commit',
    },
  },
  whyTwoPhases: {
    number: '6',
    eyebrow: 'why-two-phases',
    title: 'Why split into two phases?',
    reasons: [
      {
        title: 'Safe to interrupt (Concurrent)',
        description: 'Render Phase can be paused/resumed at any time',
        tone: 'sky',
        iconName: 'shield',
      },
      {
        title: 'Minimum-change guarantee',
        description: 'Only required changes are marked, then applied in Commit',
        tone: 'teal',
        iconName: 'target',
      },
      {
        title: 'Atomic apply',
        description: 'The Commit step applies everything consistently in one go',
        tone: 'indigo',
        iconName: 'clock',
      },
      {
        title: 'Performance',
        description: 'Avoids unnecessary DOM work and flicker',
        tone: 'violet',
        iconName: 'gauge',
      },
    ],
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: 'Mini Quiz',
    question: 'Does a Placement mark mean the DOM insertion has already happened?',
    answer: 'No — actual DOM insertion happens in the Commit Phase.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'completeUnitOfWork and completeWork',
    description:
      "Now that the Render Phase has left all the change marks, follow how React walks back up and finishes a subtree's computation.",
    cta: 'Go to the next page',
    href: '/complete-work',
  },
};

export const markChangesContent: Record<Locale, MarkChangesContent> = { ko, en };
