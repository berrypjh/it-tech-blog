import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

/** 카테고리색은 ToneKey. 'rose'는 삭제(Deletion)를 뜻하는 의미색이라 toneTokens 밖에서 직접 쓴다. */
export type Tone = ToneKey | 'rose';

export type ExampleCard = {
  title: string;
  before: string;
  after: string;
  description: string;
  tone: Tone;
  badgeLabel: string;
  icon: 'flag' | 'trash' | 'move';
};

export type ReorderResultItem = {
  text: string;
  tone: Tone;
  icon: 'flag' | 'trash' | 'move';
};

export type ReasonCard = {
  title: string;
  description: string;
  tone: ToneKey;
  icon: 'shield' | 'target' | 'clock' | 'gauge';
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
    badge: string;
    eyebrow: string;
    title: string;
    steps: {
      title: string;
      description: string;
      tone: ToneKey;
    }[];
  };
  reorder: {
    badge: string;
    eyebrow: string;
    title: string;
    beforeLabel: string;
    beforeValue: string;
    afterLabel: string;
    afterValue: string;
    resultTitle: string;
    resultItems: ReorderResultItem[];
    note: string;
  };
};

export type MarkChangesContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
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
        icon: 'flag' | 'trash' | 'pencil';
      }[];
      deletionsCard: { title: string; description: string };
    };
  };
  examples: {
    badge: string;
    eyebrow: string;
    title: string;
    beforeLabel: string;
    afterLabel: string;
    cards: ExampleCard[];
  };
  flagsAndReorder: FlagsAndReorderContent;
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
  renderCommit: {
    badge: string;
    eyebrow: string;
    title: string;
    render: RenderCommitCard;
    commit: RenderCommitCard;
  };
  whyTwoPhases: {
    badge: string;
    eyebrow: string;
    title: string;
    reasons: ReasonCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const flagsCode = `export const NoFlags = 0b0000000000000000000000000000000;
export const Placement = 0b0000000000000000000000000000010;
export const Update = 0b0000000000000000000000000000100;
export const ChildDeletion = 0b0000000000000000000000000010000;
// ...`;

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
          icon: 'flag',
        },
        {
          title: 'ChildDeletion',
          description: '삭제할 자식이 존재함',
          tone: 'rose',
          icon: 'trash',
        },
        {
          title: 'Update',
          description: 'props 또는 텍스트 변경',
          tone: 'sky',
          icon: 'pencil',
        },
      ],
      deletionsCard: {
        title: 'deletions',
        description: '삭제 대상 Fiber 리스트',
      },
    },
  },
  examples: {
    badge: '01',
    eyebrow: '변경 예시',
    title: '삽입 / 삭제 / 이동 예시',
    beforeLabel: '이전',
    afterLabel: '이후',
    cards: [
      {
        title: '새 child 추가 → Placement',
        before: 'A B C',
        after: 'A B C D',
        description: '새로 생긴 D는 Placement 표시가 남습니다.',
        tone: 'teal',
        badgeLabel: 'insert',
        icon: 'flag',
      },
      {
        title: '기존 child 제거 → ChildDeletion',
        before: 'A B C',
        after: 'A C',
        description: '제거된 B는 deletions 리스트에 기록됩니다.',
        tone: 'rose',
        badgeLabel: 'delete',
        icon: 'trash',
      },
      {
        title: '기존 child 순서 변경 → 이동 표시',
        before: 'A B C',
        after: 'B A C',
        description: 'A와 B는 새로운 위치로 이동해야 하므로 필요한 Placement 표시가 남습니다.',
        tone: 'amber',
        badgeLabel: 'move',
        icon: 'move',
      },
    ],
  },
  flagsAndReorder: {
    flags: {
      badge: '02',
      eyebrow: 'flags 연결',
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
      badge: '03',
      eyebrow: '리스트 재정렬',
      title: '리스트 재정렬 시각화',
      beforeLabel: '이전 (before)',
      beforeValue: 'A B C',
      afterLabel: '다음 (after)',
      afterValue: 'B A D',
      resultTitle: '결과 (변경 흔적)',
      resultItems: [
        { text: 'A → 이동 (Placement)', tone: 'amber', icon: 'move' },
        { text: 'C → 삭제 (ChildDeletion)', tone: 'rose', icon: 'trash' },
        { text: 'D → 삽입 (Placement)', tone: 'teal', icon: 'flag' },
      ],
      note: 'React는 최소한의 변경으로 목표 상태에 도달하도록 표시만 남깁니다.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberFlags.js',
    lookForLabel: '볼 것',
    lookFor: 'Placement, Update, ChildDeletion',
    whyLabel: '설명',
    why: '플래그는 비트 값이라 Placement | Update처럼 한 Fiber에 여러 개가 함께 기록될 수 있습니다.',
    code: flagsCode,
    primaryCta: 'ReactFiberFlags.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
  },
  renderCommit: {
    badge: '05',
    eyebrow: '단계 비교',
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
    badge: '06',
    eyebrow: '두 단계 이유',
    title: '왜 이렇게 두 단계로 나눌까?',
    reasons: [
      {
        title: '안전한 중단 가능 (Concurrent)',
        description: 'Render Phase는 언제든 중단/재시작 OK',
        tone: 'sky',
        icon: 'shield',
      },
      {
        title: '최소 변경 보장',
        description: '필요한 변경만 표시하고 Commit에서 적용',
        tone: 'teal',
        icon: 'target',
      },
      {
        title: '원자적 반영',
        description: 'Commit 단계에서 한 번에 일관되게 반영',
        tone: 'indigo',
        icon: 'clock',
      },
      {
        title: '성능 최적화',
        description: '불필요한 DOM 연산과 깜빡임 방지',
        tone: 'violet',
        icon: 'gauge',
      },
    ],
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
          icon: 'flag',
        },
        {
          title: 'ChildDeletion',
          description: 'There are children to delete',
          tone: 'rose',
          icon: 'trash',
        },
        {
          title: 'Update',
          description: 'props or text changed',
          tone: 'sky',
          icon: 'pencil',
        },
      ],
      deletionsCard: {
        title: 'deletions',
        description: 'list of Fibers to delete',
      },
    },
  },
  examples: {
    badge: '01',
    eyebrow: 'CHANGE EXAMPLES',
    title: 'Insert / Delete / Move examples',
    beforeLabel: 'before',
    afterLabel: 'after',
    cards: [
      {
        title: 'New child added → Placement',
        before: 'A B C',
        after: 'A B C D',
        description: 'The new D gets a Placement mark.',
        tone: 'teal',
        badgeLabel: 'insert',
        icon: 'flag',
      },
      {
        title: 'Existing child removed → ChildDeletion',
        before: 'A B C',
        after: 'A C',
        description: 'Removed B is recorded in the deletions list.',
        tone: 'rose',
        badgeLabel: 'delete',
        icon: 'trash',
      },
      {
        title: 'Existing children reordered → move marks',
        before: 'A B C',
        after: 'B A C',
        description: 'A and B need new positions, so Placement marks are left.',
        tone: 'amber',
        badgeLabel: 'move',
        icon: 'move',
      },
    ],
  },
  flagsAndReorder: {
    flags: {
      badge: '02',
      eyebrow: 'FLAGS LINK',
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
      badge: '03',
      eyebrow: 'LIST REORDER',
      title: 'List reorder visualization',
      beforeLabel: 'before',
      beforeValue: 'A B C',
      afterLabel: 'after',
      afterValue: 'B A D',
      resultTitle: 'result (change marks)',
      resultItems: [
        { text: 'A → move (Placement)', tone: 'amber', icon: 'move' },
        { text: 'C → delete (ChildDeletion)', tone: 'rose', icon: 'trash' },
        { text: 'D → insert (Placement)', tone: 'teal', icon: 'flag' },
      ],
      note: 'React leaves marks only — aiming for the minimum changes to reach the target state.',
    },
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberFlags.js',
    lookForLabel: 'Look for',
    lookFor: 'Placement, Update, ChildDeletion',
    whyLabel: 'Why',
    why: 'Flags are bits, so one Fiber can carry several at once, like Placement | Update.',
    code: flagsCode,
    primaryCta: 'Read ReactFiberFlags.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
  },
  renderCommit: {
    badge: '05',
    eyebrow: 'RENDER VS COMMIT',
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
    badge: '06',
    eyebrow: 'WHY TWO PHASES',
    title: 'Why split into two phases?',
    reasons: [
      {
        title: 'Safe to interrupt (Concurrent)',
        description: 'Render Phase can be paused/resumed at any time',
        tone: 'sky',
        icon: 'shield',
      },
      {
        title: 'Minimum-change guarantee',
        description: 'Only required changes are marked, then applied in Commit',
        tone: 'teal',
        icon: 'target',
      },
      {
        title: 'Atomic apply',
        description: 'The Commit step applies everything consistently in one go',
        tone: 'indigo',
        icon: 'clock',
      },
      {
        title: 'Performance',
        description: 'Avoids unnecessary DOM work and flicker',
        tone: 'violet',
        icon: 'gauge',
      },
    ],
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
