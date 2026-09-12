import type { Locale } from '@it-tech-blog/preferences';

export type EffectKind = 'placement' | 'update' | 'childDeletion';
export type TreeNodeKind = 'normal' | 'placement' | 'update' | 'childDeletion';

export type TreeNode = {
  id: string;
  label: string;
  tag: string;
  depth: number;
  effect?: TreeNodeKind;
};

export type FlagMiniCard = {
  id: 'placement' | 'update' | 'ref' | 'visibility';
  label: string;
  meaning: string;
};

export type RepresentativeFlagCard = {
  id: EffectKind;
  title: string;
  description: string;
  situation: string;
  before: string;
  after: string;
  change: string;
  resultDescription: string;
};

export type CodeBlock = {
  fileName: string;
  language: string;
  content: string;
  href: string;
  cta: string;
};

export type FiberFlagsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    tree: TreeNode[];
    legend: { kind: EffectKind; label: string }[];
  };
  flagsRole: {
    badge: string;
    eyebrow: string;
    title: string;
    mainTitle: string;
    mainDescription: string;
    examples: FlagMiniCard[];
  };
  subtree: {
    badge: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: RepresentativeFlagCard[];
    situationLabel: string;
    beforeLabel: string;
    afterLabel: string;
    resultLabel: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      files: string[];
      lookForLabel: string;
      lookFor: string;
    };
    blocks: CodeBlock[];
  };
  commitPreview: {
    badge: string;
    eyebrow: string;
    title: string;
    renderCard: { title: string; subtitle: string; body: string };
    arrowLabel: string;
    commitCard: { title: string; subtitle: string; body: string };
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
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
    badge: 'Fiber 트리 · 7/10단계',
    title: {
      line1: 'React는 변경을',
      line2: '바로 반영하지 않고,',
      line3: '먼저 Fiber에 표시합니다.',
    },
    description:
      '새로 배치해야 하는가, 업데이트가 필요한가, 삭제가 필요한가를 flags와 deletions에 남깁니다.',
    tree: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot', depth: 0 },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', depth: 1, effect: 'update' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent', depth: 2 },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent', depth: 2 },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', depth: 3, effect: 'update' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', depth: 3, effect: 'placement' },
      {
        id: 'OldItem',
        label: 'OldItem',
        tag: 'tag: HostComponent',
        depth: 3,
        effect: 'childDeletion',
      },
    ],
    legend: [
      { kind: 'placement', label: 'Placement' },
      { kind: 'update', label: 'Update' },
      { kind: 'childDeletion', label: 'ChildDeletion' },
    ],
  },
  flagsRole: {
    badge: '01',
    eyebrow: 'flags 역할',
    title: 'flags의 역할',
    mainTitle: 'flags',
    mainDescription: '→ 이 Fiber 자신에게 필요한 effect 표시',
    examples: [
      { id: 'placement', label: 'Placement', meaning: '배치' },
      { id: 'update', label: 'Update', meaning: '업데이트' },
      { id: 'ref', label: 'Ref', meaning: '참조 변경' },
      { id: 'visibility', label: 'Visibility', meaning: '가시성 변경' },
    ],
  },
  subtree: {
    badge: '02',
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
    badge: '03',
    eyebrow: '대표 flag',
    title: '대표 flag 예시와 변경 시뮬레이션',
    description:
      '같은 변경을 상황 → before/after → 기록되는 flag 순서로 따라가며 대표 flag 세 가지를 확인합니다.',
    situationLabel: '상황',
    beforeLabel: 'Before',
    afterLabel: 'After',
    resultLabel: 'Fiber flag 결과',
    cards: [
      {
        id: 'placement',
        title: 'Placement',
        description: '→ 새로운 노드를 배치해야 함',
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
        resultDescription: '새 노드를 DOM에 배치해야 함',
      },
      {
        id: 'update',
        title: 'Update',
        description: '→ 기존 노드를 갱신해야 함',
        situation: '버튼 텍스트 변경',
        before: `<button>저장</button>`,
        after: `<button>전송</button>`,
        change: '기존 노드의 내용 변경',
        resultDescription: '기존 노드를 갱신해야 함',
      },
      {
        id: 'childDeletion',
        title: 'ChildDeletion',
        description: '→ 자식을 삭제해야 함',
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
        resultDescription: '삭제 대상 Fiber를 deletions에 저장',
      },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
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
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: internalTypesCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
        cta: 'ReactInternalTypes.js 읽기',
      },
      {
        fileName: 'ReactFiberFlags.js',
        language: 'TypeScript',
        content: reactFiberFlagsCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
        cta: 'ReactFiberFlags.js 읽기',
      },
    ],
  },
  commitPreview: {
    badge: '05',
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
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'lanes / childLanes',
    description:
      '변경 효과가 Fiber에 어떻게 남는지 봤다면, 이제 React가 어떤 작업을 먼저 처리할지 Fiber가 어떻게 우선순위를 품는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-lanes',
  },
};

const en: FiberFlagsContent = {
  hero: {
    badge: 'Fiber Tree · 7/10',
    title: {
      line1: 'React does not apply changes',
      line2: 'right away — it marks them',
      line3: 'on the Fiber first.',
    },
    description:
      'Whether to place, update, or delete a node is recorded on flags and deletions ahead of time.',
    tree: [
      { id: 'App', label: 'App', tag: 'tag: HostRoot', depth: 0 },
      { id: 'Page', label: 'Page', tag: 'tag: FunctionComponent', depth: 1, effect: 'update' },
      { id: 'Header', label: 'Header', tag: 'tag: FunctionComponent', depth: 2 },
      { id: 'Main', label: 'Main', tag: 'tag: FunctionComponent', depth: 2 },
      { id: 'Button', label: 'Button', tag: 'tag: HostComponent', depth: 3, effect: 'update' },
      { id: 'List', label: 'List', tag: 'tag: HostComponent', depth: 3, effect: 'placement' },
      {
        id: 'OldItem',
        label: 'OldItem',
        tag: 'tag: HostComponent',
        depth: 3,
        effect: 'childDeletion',
      },
    ],
    legend: [
      { kind: 'placement', label: 'Placement' },
      { kind: 'update', label: 'Update' },
      { kind: 'childDeletion', label: 'ChildDeletion' },
    ],
  },
  flagsRole: {
    badge: '01',
    eyebrow: 'FLAGS ROLE',
    title: 'What flags do',
    mainTitle: 'flags',
    mainDescription: '→ marks the effects this Fiber itself needs',
    examples: [
      { id: 'placement', label: 'Placement', meaning: 'place' },
      { id: 'update', label: 'Update', meaning: 'update' },
      { id: 'ref', label: 'Ref', meaning: 'ref change' },
      { id: 'visibility', label: 'Visibility', meaning: 'visibility' },
    ],
  },
  subtree: {
    badge: '02',
    eyebrow: 'SUBTREE & DELETIONS',
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
    badge: '03',
    eyebrow: 'REPRESENTATIVE FLAGS',
    title: 'Representative flags and change simulation',
    description:
      'Follow the same change from situation to before/after to the flag React records, across the three representative flags.',
    situationLabel: 'Situation',
    beforeLabel: 'Before',
    afterLabel: 'After',
    resultLabel: 'Resulting Fiber flag',
    cards: [
      {
        id: 'placement',
        title: 'Placement',
        description: '→ a new node must be placed',
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
        resultDescription: 'The new node must be placed in the DOM',
      },
      {
        id: 'update',
        title: 'Update',
        description: '→ an existing node must be updated',
        situation: 'Change button text',
        before: `<button>Save</button>`,
        after: `<button>Send</button>`,
        change: 'An existing node’s content changes',
        resultDescription: 'The existing node must be updated',
      },
      {
        id: 'childDeletion',
        title: 'ChildDeletion',
        description: '→ a child must be deleted',
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
        resultDescription: 'The Fiber for deletion goes into deletions',
      },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
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
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: internalTypesCodeEn,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
        cta: 'Read ReactInternalTypes.js',
      },
      {
        fileName: 'ReactFiberFlags.js',
        language: 'TypeScript',
        content: reactFiberFlagsCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js',
        cta: 'Read ReactFiberFlags.js',
      },
    ],
  },
  commitPreview: {
    badge: '05',
    eyebrow: 'NEXT PHASE',
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
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'lanes / childLanes',
    description:
      'Now that you have seen how effects are marked on a Fiber, look at how a Fiber carries priority so React knows which work to handle first.',
    cta: 'Go to the next page',
    href: '/fiber-lanes',
  },
};

export const fiberFlagsContent: Record<Locale, FiberFlagsContent> = { ko, en };
