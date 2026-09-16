import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroFlagId = 'plus' | 'pencil' | 'trash';

export type HeroFlagCard = {
  title: string;
  subtitle: string;
  id: HeroFlagId;
  tone: ToneKey;
};

export type HeroOpCard = {
  title: string;
  subtitle: string;
  id: HeroFlagId;
  tone: ToneKey;
};

export type ConnectionCardSide = 'render' | 'mutation';

export type ConnectionCard = {
  side: ConnectionCardSide;
  title: string;
  subtitle: string;
  lines: string[];
  tone: ToneKey;
};

export type EffectCard = {
  title: string;
  subtitle: string;
  id: HeroFlagId;
  tone: ToneKey;
  examples: string[];
};

export type SummaryRow = {
  flag: string;
  meaning: string;
  description: string;
  id: HeroFlagId;
  tone: ToneKey;
};

export type ExtraPoint = {
  title: string;
  description: string;
  id: 'sync' | 'crosshair' | 'split' | 'eraser';
  tone: ToneKey;
};

export type CheckpointBlock = {
  filePath: string;
  code: string;
  primaryCta: string;
  primaryHref: string;
};

export type MutationPhaseContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      leftTitle: string;
      leftCards: HeroFlagCard[];
      arrowLabel: string;
      rightTitle: string;
      rightCards: HeroOpCard[];
    };
  };
  connection: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ConnectionCard[];
  };
  effects: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    examplesLabel: string;
    cards: EffectCard[];
  };
  summary: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { flag: string; meaning: string; description: string };
    rows: SummaryRow[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePaths: string[];
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    blocks: CheckpointBlock[];
  };
  beforeAfter: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    previewLabel: string;
    newLabel: string;
    beforeCard: {
      title: string;
      code: string;
      preview: string[];
    };
    centerLabel: {
      title: string;
      subtitle: string;
    };
    afterCard: {
      title: string;
      code: string;
      preview: string[];
    };
  };
  rootCurrent: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftSubtitle: string;
    rightTitle: string;
    rightSubtitle: string;
    note: string;
  };
  extra: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    points: ExtraPoint[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroLeftKo: HeroFlagCard[] = [
  { title: 'Placement', subtitle: '새 노드 삽입이 필요함', id: 'plus', tone: 'teal' },
  { title: 'Update', subtitle: '기존 노드 갱신이 필요함', id: 'pencil', tone: 'sky' },
  { title: 'ChildDeletion', subtitle: '노드 삭제가 필요함', id: 'trash', tone: 'indigo' },
];

const heroLeftEn: HeroFlagCard[] = [
  { title: 'Placement', subtitle: 'a new node must be inserted', id: 'plus', tone: 'teal' },
  {
    title: 'Update',
    subtitle: 'an existing node must be updated',
    id: 'pencil',
    tone: 'sky',
  },
  { title: 'ChildDeletion', subtitle: 'a node must be removed', id: 'trash', tone: 'indigo' },
];

const heroRightKo: HeroOpCard[] = [
  { title: '삽입 Insert', subtitle: 'DOM에 새로운 node 삽입', id: 'plus', tone: 'teal' },
  {
    title: '수정 Update',
    subtitle: '속성 / 스타일 / 텍스트 갱신',
    id: 'pencil',
    tone: 'sky',
  },
  {
    title: '삭제 Delete',
    subtitle: 'DOM node 제거 및 관련 정리(cleanup) 시작',
    id: 'trash',
    tone: 'indigo',
  },
];

const heroRightEn: HeroOpCard[] = [
  { title: 'Insert', subtitle: 'insert a new node into the DOM', id: 'plus', tone: 'teal' },
  {
    title: 'Update',
    subtitle: 'update props / style / text',
    id: 'pencil',
    tone: 'sky',
  },
  {
    title: 'Delete',
    subtitle: 'remove DOM nodes and start related cleanup',
    id: 'trash',
    tone: 'indigo',
  },
];

const connectionCardsKo: ConnectionCard[] = [
  {
    side: 'render',
    title: 'Render Phase',
    subtitle: 'flags 기록',
    lines: ['Placement', 'Update', 'ChildDeletion'],
    tone: 'sky',
  },
  {
    side: 'mutation',
    title: 'Mutation Phase',
    subtitle: '실제 host operation 실행',
    lines: ['DOM 조작', 'cleanup 시작'],
    tone: 'teal',
  },
];

const connectionCardsEn: ConnectionCard[] = [
  {
    side: 'render',
    title: 'Render Phase',
    subtitle: 'records flags',
    lines: ['Placement', 'Update', 'ChildDeletion'],
    tone: 'sky',
  },
  {
    side: 'mutation',
    title: 'Mutation Phase',
    subtitle: 'runs real host operations',
    lines: ['DOM mutations', 'starts cleanup'],
    tone: 'teal',
  },
];

const effectsKo: EffectCard[] = [
  {
    title: 'Placement',
    subtitle: '새 node 삽입',
    id: 'plus',
    tone: 'teal',
    examples: ['insertBefore', 'appendChild', 'insertInContainer'],
  },
  {
    title: 'Update',
    subtitle: '기존 node 갱신',
    id: 'pencil',
    tone: 'sky',
    examples: ['setTextContent', 'updateProperties', 'setAttribute'],
  },
  {
    title: 'Deletion',
    subtitle: 'node 제거와 cleanup 시작',
    id: 'trash',
    tone: 'indigo',
    examples: ['removeChild', 'detach refs', 'unmount effects'],
  },
];

const effectsEn: EffectCard[] = [
  {
    title: 'Placement',
    subtitle: 'insert a new node',
    id: 'plus',
    tone: 'teal',
    examples: ['insertBefore', 'appendChild', 'insertInContainer'],
  },
  {
    title: 'Update',
    subtitle: 'update an existing node',
    id: 'pencil',
    tone: 'sky',
    examples: ['setTextContent', 'updateProperties', 'setAttribute'],
  },
  {
    title: 'Deletion',
    subtitle: 'remove nodes, start cleanup',
    id: 'trash',
    tone: 'indigo',
    examples: ['removeChild', 'detach refs', 'unmount effects'],
  },
];

const summaryKo: SummaryRow[] = [
  {
    flag: 'Placement',
    meaning: '삽입',
    description: '새로운 host node를 DOM에 삽입합니다.',
    id: 'plus',
    tone: 'teal',
  },
  {
    flag: 'Update',
    meaning: '갱신',
    description: '기존 host node의 속성 / 스타일 / 텍스트 등을 갱신합니다.',
    id: 'pencil',
    tone: 'sky',
  },
  {
    flag: 'ChildDeletion',
    meaning: '삭제 및 subtree 정리',
    description: 'host node를 제거하고, 자식 subtree의 cleanup을 시작합니다.',
    id: 'trash',
    tone: 'indigo',
  },
];

const summaryEn: SummaryRow[] = [
  {
    flag: 'Placement',
    meaning: 'insert',
    description: 'Insert a new host node into the DOM.',
    id: 'plus',
    tone: 'teal',
  },
  {
    flag: 'Update',
    meaning: 'update',
    description: 'Update props / style / text of an existing host node.',
    id: 'pencil',
    tone: 'sky',
  },
  {
    flag: 'ChildDeletion',
    meaning: 'delete and cleanup subtree',
    description: 'Remove the host node and start cleanup of the child subtree.',
    id: 'trash',
    tone: 'indigo',
  },
];

const workLoopCode = `function commitRoot(root, finishedWork, lanes /* ... */) {
  // ...
  // The next phase is the mutation phase, where we mutate the host tree.
  commitMutationEffects(root, finishedWork, lanes);
  // ...
}`;

const mutationEffectsCode = `export function commitMutationEffects(root, finishedWork, committedLanes) {
  inProgressLanes = committedLanes;
  inProgressRoot = root;
  commitMutationEffectsOnFiber(finishedWork, root, committedLanes);
  inProgressLanes = null;
  inProgressRoot = null;
}

function recursivelyTraverseMutationEffects(root, parentFiber, lanes) {
  const deletions = parentFiber.deletions;
  if (deletions !== null) {
    for (let i = 0; i < deletions.length; i++) {
      commitDeletionEffects(root, parentFiber, deletions[i]);
    }
  }
  if (parentFiber.subtreeFlags & MutationMask) {
    let child = parentFiber.child;
    while (child !== null) {
      commitMutationEffectsOnFiber(child, root, lanes);
      child = child.sibling;
    }
  }
}

function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
  const current = finishedWork.alternate;
  const flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case HostComponent: {
      recursivelyTraverseMutationEffects(root, finishedWork, lanes);
      commitReconciliationEffects(finishedWork, lanes);
      if (flags & Update) {
        const newProps = finishedWork.memoizedProps;
        const oldProps = current !== null ? current.memoizedProps : newProps;
        commitHostUpdate(finishedWork, newProps, oldProps);
      }
      return;
    }
    // ...
  }
}`;

const beforeCode = `<ul>
  <li>A</li>
  <li>B</li>
</ul>`;

const afterCode = `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`;

const extraKo: ExtraPoint[] = [
  {
    title: 'Mutation은 동기적으로 실행',
    description: '중간에 다른 업데이트가 끼어들지 않고 한 번에 반영됩니다.',
    id: 'sync',
    tone: 'teal',
  },
  {
    title: 'DOM 연산은 최소 단위로 수행',
    description: '필요한 부분만 정확하게 삽입 / 수정 / 삭제합니다.',
    id: 'crosshair',
    tone: 'sky',
  },
  {
    title: '조회(read)와 변경(write) 구분',
    description: 'Before Mutation에서 읽기, Mutation에서 쓰기.',
    id: 'split',
    tone: 'violet',
  },
  {
    title: 'Deletion은 즉시 제거 + cleanup',
    description: 'ref 해제, effect cleanup 예약 등 초기 정리를 시작합니다.',
    id: 'eraser',
    tone: 'indigo',
  },
];

const extraEn: ExtraPoint[] = [
  {
    title: 'Mutation runs synchronously',
    description: 'Other updates do not interrupt — it is applied in one shot.',
    id: 'sync',
    tone: 'teal',
  },
  {
    title: 'DOM ops are minimal-grained',
    description: 'Only the necessary parts are inserted / updated / deleted.',
    id: 'crosshair',
    tone: 'sky',
  },
  {
    title: 'Separate read and write',
    description: 'Before Mutation reads, Mutation writes.',
    id: 'split',
    tone: 'violet',
  },
  {
    title: 'Deletion is immediate + cleanup',
    description: 'Starts initial cleanup such as ref release and effect cleanup scheduling.',
    id: 'eraser',
    tone: 'indigo',
  },
];

const ko: MutationPhaseContent = {
  hero: {
    badge: 'Commit Phase · 4/10단계',
    title: {
      line1: '실제 DOM 변경은',
      line2: 'Mutation Phase에서',
      line3: '일어납니다.',
    },
    description:
      'Render Phase는 변경이 필요하다는 표시만 남겼고, Mutation Phase는 그 표시를 읽어 실제 host tree 조작으로 바꿉니다.',
    diagram: {
      leftTitle: 'Render Phase가 남긴 flags',
      leftCards: heroLeftKo,
      arrowLabel: 'flags → host operation',
      rightTitle: 'Mutation Phase가 실행하는 host 조작',
      rightCards: heroRightKo,
    },
  },
  connection: {
    badge: '01',
    eyebrow: 'mutation 진입',
    title: 'Render flags와 Mutation Phase 연결',
    description:
      'Render Phase는 변경 표시(flags)만 남기고, 그 표시가 Mutation Phase에서 실제 host operation으로 실행됩니다.',
    cards: connectionCardsKo,
  },
  effects: {
    badge: '02',
    eyebrow: 'mutation 이펙트',
    title: 'Mutation Phase에서 처리되는 대표 effect',
    description:
      '대표적인 host operation은 Placement(삽입), Update(갱신), Deletion(삭제) 3가지입니다.',
    examplesLabel: '예시 작업',
    cards: effectsKo,
  },
  summary: {
    badge: '03',
    eyebrow: '요약 표',
    title: 'Placement / Update / Deletion 빠른 요약',
    description: '각 flag가 Mutation Phase에서 어떤 의미로 실행되는지 한눈에 정리합니다.',
    columns: { flag: 'flag', meaning: 'Mutation Phase에서의 의미', description: '설명' },
    rows: summaryKo,
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
    ],
    lookForLabel: '볼 것',
    lookFor:
      'commitMutationEffects, recursivelyTraverseMutationEffects, commitMutationEffectsOnFiber, MutationMask',
    whyLabel: '설명',
    why: 'subtreeFlags & MutationMask로 변경이 있는 subtree만 내려가며, flag별 host 작업(삽입·갱신·삭제)을 실행합니다.',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: workLoopCode,
        primaryCta: 'ReactFiberWorkLoop.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: mutationEffectsCode,
        primaryCta: 'ReactFiberCommitWork.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
    ],
  },
  beforeAfter: {
    badge: '05',
    eyebrow: 'before와 after',
    title: 'Mutation 이전과 이후 차이',
    description: 'Placement flag가 실제 DOM 결과로 바뀌는 순간을 비교합니다.',
    previewLabel: '미리보기',
    newLabel: '새로 추가',
    beforeCard: {
      title: 'Before (mutation 이전 DOM)',
      code: beforeCode,
      preview: ['A', 'B'],
    },
    centerLabel: { title: 'Placement 실행', subtitle: 'C 노드 삽입' },
    afterCard: {
      title: 'After (mutation 이후 DOM)',
      code: afterCode,
      preview: ['A', 'B', 'C'],
    },
  },
  rootCurrent: {
    badge: '06',
    eyebrow: '현재 트리 전환 예고',
    title: 'root.current 전환 예고',
    description:
      'Mutation Phase가 끝나면, 새로 계산된 finishedWork가 이제 현재 화면을 대표하는 tree가 됩니다.',
    leftTitle: 'finishedWork',
    leftSubtitle: '새로 계산된 결과',
    rightTitle: 'root.current',
    rightSubtitle: '현재 화면의 대표',
    note: '이 전환은 다음 단계인 After Mutation 단계의 핵심 소재입니다.',
  },
  extra: {
    badge: '07',
    eyebrow: '추가 포인트',
    title: '추가 이해 포인트',
    description: '실무에서 Mutation Phase를 생각할 때 짚어두면 좋은 4가지입니다.',
    points: extraKo,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Placement',
    description:
      'Mutation Phase가 실제 반영 단계라면, 가장 먼저 이해하기 좋은 사례는 새 DOM node 삽입인 Placement입니다.',
    cta: '다음 페이지로 이동',
    href: '/placement',
  },
};

const en: MutationPhaseContent = {
  hero: {
    badge: 'Commit Phase · 4/10',
    title: {
      line1: 'Real DOM changes',
      line2: 'happen in the',
      line3: 'Mutation Phase.',
    },
    description:
      'The Render Phase only leaves marks for what should change. The Mutation Phase reads those marks and turns them into real host tree operations.',
    diagram: {
      leftTitle: 'Flags left by the Render Phase',
      leftCards: heroLeftEn,
      arrowLabel: 'flags → host operation',
      rightTitle: 'Host operations run by the Mutation Phase',
      rightCards: heroRightEn,
    },
  },
  connection: {
    badge: '01',
    eyebrow: 'INTO MUTATION',
    title: 'Render flags ↔ Mutation Phase',
    description:
      'The Render Phase only records change marks (flags). Those marks become real host operations in the Mutation Phase.',
    cards: connectionCardsEn,
  },
  effects: {
    badge: '02',
    eyebrow: 'MUTATION EFFECTS',
    title: 'Effects handled by the Mutation Phase',
    description: 'The three main host operations are Placement (insert), Update, and Deletion.',
    examplesLabel: 'example ops',
    cards: effectsEn,
  },
  summary: {
    badge: '03',
    eyebrow: 'SUMMARY TABLE',
    title: 'Placement / Update / Deletion quick summary',
    description: 'What each flag means once the Mutation Phase runs.',
    columns: { flag: 'flag', meaning: 'meaning in the Mutation Phase', description: 'description' },
    rows: summaryEn,
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
    ],
    lookForLabel: 'Look for',
    lookFor:
      'commitMutationEffects, recursivelyTraverseMutationEffects, commitMutationEffectsOnFiber, MutationMask',
    whyLabel: 'Why',
    why: 'It only descends into subtrees where subtreeFlags & MutationMask is set, and runs the host operation for each flag (insert, update, delete).',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: workLoopCode,
        primaryCta: 'Read ReactFiberWorkLoop.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: mutationEffectsCode,
        primaryCta: 'Read ReactFiberCommitWork.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
    ],
  },
  beforeAfter: {
    badge: '05',
    eyebrow: 'BEFORE & AFTER',
    title: 'Before vs After mutation',
    description: 'Compare the moment a Placement flag becomes a real DOM result.',
    previewLabel: 'preview',
    newLabel: 'new',
    beforeCard: {
      title: 'Before (DOM before mutation)',
      code: beforeCode,
      preview: ['A', 'B'],
    },
    centerLabel: { title: 'Run Placement', subtitle: 'insert C' },
    afterCard: {
      title: 'After (DOM after mutation)',
      code: afterCode,
      preview: ['A', 'B', 'C'],
    },
  },
  rootCurrent: {
    badge: '06',
    eyebrow: 'CURRENT SWAP PREVIEW',
    title: 'Preview: swapping root.current',
    description:
      'Once the Mutation Phase ends, the newly computed finishedWork becomes the tree that represents the current screen.',
    leftTitle: 'finishedWork',
    leftSubtitle: 'newly computed result',
    rightTitle: 'root.current',
    rightSubtitle: 'represents the current screen',
    note: 'This swap is the main material of the next step — After Mutation.',
  },
  extra: {
    badge: '07',
    eyebrow: 'EXTRA POINTS',
    title: 'Extra understanding points',
    description: 'Four points worth keeping in mind when thinking about the Mutation Phase.',
    points: extraEn,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Placement',
    description:
      'If the Mutation Phase is where the apply actually happens, the easiest case to start with is Placement — inserting a new DOM node.',
    cta: 'Go to the next page',
    href: '/placement',
  },
};

export const mutationPhaseContent: Record<Locale, MutationPhaseContent> = { ko, en };
