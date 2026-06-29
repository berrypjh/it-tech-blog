import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type LegendItem = {
  label: string;
  detail: string;
  icon: 'arrowDown' | 'arrowUp' | 'dashed';
  tone: ToneKey;
};

export type StepCardItem = {
  title: string;
  description: string;
};

export type CompareRow = {
  direction: { label: string; detail: string; icon: 'arrowDown' | 'arrowUp' };
  fn: string[];
  role: string[];
  target: string;
  tone: ToneKey;
};

export type TreePanelState = 'idle' | 'current' | 'done';
export type TreeNodeState = {
  name: string;
  state: TreePanelState;
  depth: number;
};

export type TreePanel = {
  title: string;
  description?: string;
  nodes: TreeNodeState[];
};

export type FlowItem = {
  number: number;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ChecklistItem = {
  text: string;
};

export type CodeCallout = {
  number: number;
  body: string;
  tone: ToneKey;
};

export type CompleteWorkContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      legendTitle: string;
      legend: LegendItem[];
      stepsTitle: string;
      steps: StepCardItem[];
    };
  };
  compare: {
    eyebrow: string;
    title: string;
    columns: { direction: string; fn: string; role: string; target: string };
    rows: CompareRow[];
  };
  direction: {
    eyebrow: string;
    title: string;
    topTitle: string;
    topSubtitle: string;
    decision: string;
    yes: { label: string; title: string; code: string };
    no: { label: string; title: string; code: string };
    description: string;
  };
  treeWalk: {
    eyebrow: string;
    title: string;
    subtitle: string;
    panels: TreePanel[];
  };
  bubble: {
    eyebrow: string;
    title: string;
    description: string;
    flow: { title: string; subtitle: string; tone: ToneKey }[];
    bottomNote: string;
  };
  code: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    files: string[];
    pointsLabel: string;
    points: string[];
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    callouts: CodeCallout[];
  };
  summary: {
    eyebrow: string;
    title: string;
    items: FlowItem[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ChecklistItem[];
    completionNote: string;
  };
  finale: FinaleBannerContent;
};

const CODE = `function completeUnitOfWork(unitOfWork) {
  let completedWork = unitOfWork;

  do {
    const current = completedWork.alternate;

    completeWork(current, completedWork, renderLanes);
    bubbleProperties(completedWork);

    const sibling = completedWork.sibling;
    if (sibling !== null) {
      workInProgress = sibling;
      return;
    }

    completedWork = completedWork.return;
    workInProgress = completedWork;
  } while (completedWork !== null);
}`;

// 5 panel tree states (Main/Button/List)
const panelTreesKo: TreePanel[] = [
  {
    title: '예시 트리',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'idle', depth: 1 },
      { name: 'List', state: 'idle', depth: 1 },
    ],
  },
  {
    title: '1 Button 처리 완료',
    description: '더 이상 자식이 없어 완료 단계로 전환',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'idle', depth: 1 },
    ],
  },
  {
    title: '2 List로 이동',
    description: '형제가 있으므로 형제인 List로 이동',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'current', depth: 1 },
    ],
  },
  {
    title: '3 List 처리 완료',
    description: 'List 서브트리 완료',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'done', depth: 1 },
    ],
  },
  {
    title: '4 Main으로 올라감',
    description: '형제도 없으므로 부모인 Main으로 이동',
    nodes: [
      { name: 'Main', state: 'current', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'done', depth: 1 },
    ],
  },
];

const panelTreesEn: TreePanel[] = [
  {
    title: 'Example tree',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'idle', depth: 1 },
      { name: 'List', state: 'idle', depth: 1 },
    ],
  },
  {
    title: '1 Button completed',
    description: 'No more children — transition to complete',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'idle', depth: 1 },
    ],
  },
  {
    title: '2 Move to List',
    description: 'Sibling exists — move to List',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'current', depth: 1 },
    ],
  },
  {
    title: '3 List completed',
    description: 'List subtree finished',
    nodes: [
      { name: 'Main', state: 'idle', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'done', depth: 1 },
    ],
  },
  {
    title: '4 Up to Main',
    description: 'No sibling left — go up to parent Main',
    nodes: [
      { name: 'Main', state: 'current', depth: 0 },
      { name: 'Button', state: 'done', depth: 1 },
      { name: 'List', state: 'done', depth: 1 },
    ],
  },
];

const ko: CompleteWorkContent = {
  hero: {
    badge: 'Render Phase · 10/10단계',
    title: {
      line1: 'Render Phase는',
      line2: '내려가며 계산하고,',
      line3: '올라오며 마무리합니다.',
    },
    description:
      '더 이상 내려갈 자식이 없으면 React는 완료 단계로 전환하고, 형제가 있으면 형제로 이동하고, 형제도 없으면 부모로 올라갑니다.',
    diagram: {
      legendTitle: '범례',
      legend: [
        { label: '하강 (beginWork)', detail: '자식으로 이동', icon: 'arrowDown', tone: 'teal' },
        {
          label: '상승 (completeWork)',
          detail: '형제 또는 부모로 이동',
          icon: 'arrowUp',
          tone: 'violet',
        },
        { label: '처리 완료', detail: 'subtree 마무리됨', icon: 'dashed', tone: 'sky' },
      ],
      stepsTitle: '단계 흐름',
      steps: [
        { title: '내려가며 계산', description: 'beginWork' },
        { title: '더 이상 자식이 없으면', description: '완료 단계로 전환' },
        { title: '형제가 있으면', description: '형제로 이동' },
        { title: '없으면', description: '부모로 올라감' },
        { title: '모든 Fiber를 마치면', description: 'Commit Phase로' },
      ],
    },
  },
  compare: {
    eyebrow: '01 · 함수 비교',
    title: 'beginWork vs completeWork 비교',
    columns: { direction: '방향', fn: '함수', role: '역할', target: '이동 대상' },
    rows: [
      {
        direction: { label: '아래로', detail: '(하강)', icon: 'arrowDown' },
        fn: ['beginWork'],
        role: ['다음 child 계산 시작', '컴포넌트 실행, children 추출, reconcileChildren 호출'],
        target: 'child',
        tone: 'teal',
      },
      {
        direction: { label: '위로', detail: '(상승)', icon: 'arrowUp' },
        fn: ['completeUnitOfWork', 'completeWork'],
        role: ['현재 서브트리 완료 처리', '정보 정리, flags 집계, bubbleProperties 호출'],
        target: 'sibling 또는 parent',
        tone: 'violet',
      },
    ],
  },
  direction: {
    eyebrow: '02 · 이동 방향',
    title: 'completeUnitOfWork의 이동 방향',
    topTitle: '현재 Fiber 완료',
    topSubtitle: 'completeWork 실행',
    decision: 'sibling 존재?',
    yes: {
      label: '예',
      title: 'sibling으로 이동',
      code: 'workInProgress = sibling',
    },
    no: {
      label: '아니오',
      title: 'parent로 올라감',
      code: 'workInProgress = parent',
    },
    description:
      'completeUnitOfWork는 현재 Fiber를 마친 뒤, 옆으로 갈 수 있으면 형제로 이동하고, 더 이상 형제가 없으면 부모로 되돌아갑니다.',
  },
  treeWalk: {
    eyebrow: '03 · 트리 순회',
    title: 'sibling → parent 이동 시각화',
    subtitle: '예시 트리',
    panels: panelTreesKo,
  },
  bubble: {
    eyebrow: '04 · 속성 버블링',
    title: 'bubbleProperties 예고',
    description:
      'completeWork 단계에서는 자식 서브트리의 정보가 부모 방향으로 올라오도록 정리됩니다.',
    flow: [
      { title: 'child subtreeFlags', subtitle: '자식 서브트리의 flags', tone: 'teal' },
      { title: 'parent subtreeFlags', subtitle: '부모 Fiber에 flags 누적', tone: 'sky' },
      {
        title: 'Commit Phase에서 활용',
        subtitle: '실제 변경 실행을 위한 정보로 사용',
        tone: 'violet',
      },
    ],
    bottomNote: 'Deletion 리스트도 부모 Fiber 쪽으로 연결되어 Commit 단계에서 처리됩니다.',
  },
  code: {
    eyebrow: '05 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    files: ['ReactFiberWorkLoop.js', 'ReactFiberCompleteWork.js'],
    pointsLabel: '볼 것',
    points: ['completeUnitOfWork', 'completeWork', 'bubbleProperties'],
    learningQuestion: 'completeWork는 어디서 어떤 정보가 부모로 올라오게 만들까?',
    codeHeader: 'react-reconciler/src/ReactFiberWorkLoop.js',
    codeBadge: 'main',
    code: CODE,
    callouts: [
      { number: 1, body: 'completeWork 실행 — 현재 Fiber 마무리', tone: 'teal' },
      {
        number: 2,
        body: 'bubbleProperties 호출 — subtreeFlags 등을 부모로 버블링',
        tone: 'sky',
      },
      { number: 3, body: 'sibling 있으면 — 옆으로 이동', tone: 'indigo' },
      { number: 4, body: '없으면 parent로 — 되돌아가며 반복', tone: 'violet' },
    ],
  },
  summary: {
    eyebrow: '06 · 단계 요약',
    title: '전체 Render Phase 최종 정리',
    items: [
      { number: 1, title: 'Root에서 시작', description: '루트에 work가 있음', tone: 'sky' },
      {
        number: 2,
        title: 'workLoop',
        description: 'workLoopSync / workLoopConcurrent에 따라 반복 처리',
        tone: 'sky',
      },
      {
        number: 3,
        title: 'performUnitOfWork',
        description: '현재 Fiber 하나를 처리',
        tone: 'teal',
      },
      {
        number: 4,
        title: 'beginWork',
        description: '아래로 내려가며 nextChildren 계산 시작',
        tone: 'teal',
      },
      {
        number: 5,
        title: 'child 계산',
        description: 'renderWithHooks / updateHostComponent 등으로 props 확인',
        tone: 'teal',
      },
      {
        number: 6,
        title: 'reconcileChildren',
        description: '새 Element와 기존 Fiber 비교 → 다음 자식 Fiber 계산',
        tone: 'indigo',
      },
      {
        number: 7,
        title: '변경 표시',
        description: 'flags, deletions 기록 · Placement / ChildDeletion / Update 등',
        tone: 'amber',
      },
      {
        number: 8,
        title: 'completeUnitOfWork',
        description: '더 이상 자식이 없으면 완료 단계로 전환',
        tone: 'violet',
      },
      {
        number: 9,
        title: 'completeWork',
        description: '서브트리 정보 정리 및 부모로 버블링',
        tone: 'violet',
      },
      {
        number: 10,
        title: 'Commit Phase 대기',
        description: '모든 Fiber 계산과 표시가 끝나면 Commit으로',
        tone: 'cyan',
      },
    ],
  },
  checklist: {
    eyebrow: '07 · 핵심 체크리스트',
    title: '최종 체크리스트',
    subtitle: '나는 설명할 수 있는가?',
    items: [
      { text: 'Render Phase와 Commit Phase의 차이' },
      { text: 'workLoopSync와 workLoopConcurrent의 차이' },
      { text: 'performUnitOfWork의 역할' },
      { text: 'beginWork가 아래로 내려가는 이유' },
      { text: '함수 컴포넌트 처리 흐름(renderWithHooks)' },
      { text: 'Host Component 처리 흐름(updateHostComponent)' },
      { text: 'reconcileChildren의 역할' },
      { text: 'type/key와 Fiber 재사용의 관계' },
      { text: 'Render Phase에서 flags를 남기는 이유' },
      { text: 'completeWork가 위로 올라오며 마무리하는 이유' },
    ],
    completionNote: '모든 항목을 설명할 수 있다면, 이제 Commit Phase로 넘어갈 준비 완료!',
  },
  finale: {
    progressLabel: '8/15 챕터 완료',
    copyLine1: 'Render Phase의 흐름을',
    copyLine2: '끝까지 따라갔습니다.',
    copyLine3: '이제 Commit Phase로.',
    primaryCta: 'Commit Phase와 DOM 반영 읽기',
    primaryHref: '/commit-phase',
    secondaryCta: 'Render Phase 처음부터 다시 보기',
    secondaryHref: '/render-phase',
  },
};

const en: CompleteWorkContent = {
  hero: {
    badge: 'Render Phase · 10/10',
    title: {
      line1: 'The Render Phase',
      line2: 'descends to compute,',
      line3: 'and ascends to finish.',
    },
    description:
      'When there are no more children to descend into, React transitions to the complete step, moves to a sibling if one exists, otherwise climbs up to the parent.',
    diagram: {
      legendTitle: 'Legend',
      legend: [
        {
          label: 'Descend (beginWork)',
          detail: 'move to child',
          icon: 'arrowDown',
          tone: 'teal',
        },
        {
          label: 'Ascend (completeWork)',
          detail: 'move to sibling or parent',
          icon: 'arrowUp',
          tone: 'violet',
        },
        {
          label: 'Completed',
          detail: 'subtree wrapped up',
          icon: 'dashed',
          tone: 'sky',
        },
      ],
      stepsTitle: 'Steps',
      steps: [
        { title: 'Descend to compute', description: 'beginWork' },
        { title: 'No more children →', description: 'transition to complete' },
        { title: 'Sibling exists →', description: 'move to sibling' },
        { title: 'No sibling →', description: 'climb up to parent' },
        { title: 'All Fibers done →', description: 'Commit Phase' },
      ],
    },
  },
  compare: {
    eyebrow: '01 · BEGIN VS COMPLETE',
    title: 'beginWork vs completeWork',
    columns: { direction: 'direction', fn: 'function', role: 'role', target: 'move target' },
    rows: [
      {
        direction: { label: 'down', detail: '(descend)', icon: 'arrowDown' },
        fn: ['beginWork'],
        role: [
          'Start computing the next child',
          'Run component, extract children, call reconcileChildren',
        ],
        target: 'child',
        tone: 'teal',
      },
      {
        direction: { label: 'up', detail: '(ascend)', icon: 'arrowUp' },
        fn: ['completeUnitOfWork', 'completeWork'],
        role: ['Finish the current subtree', 'Tidy info, aggregate flags, call bubbleProperties'],
        target: 'sibling or parent',
        tone: 'violet',
      },
    ],
  },
  direction: {
    eyebrow: '02 · MOVE DIRECTION',
    title: 'completeUnitOfWork move direction',
    topTitle: 'Current Fiber completed',
    topSubtitle: 'completeWork executed',
    decision: 'sibling exists?',
    yes: {
      label: 'yes',
      title: 'move to sibling',
      code: 'workInProgress = sibling',
    },
    no: {
      label: 'no',
      title: 'climb up to parent',
      code: 'workInProgress = parent',
    },
    description:
      'After finishing the current Fiber, completeUnitOfWork moves sideways if possible; otherwise it walks back up.',
  },
  treeWalk: {
    eyebrow: '03 · SIBLING & PARENT',
    title: 'sibling → parent walk visualization',
    subtitle: 'example tree',
    panels: panelTreesEn,
  },
  bubble: {
    eyebrow: '04 · BUBBLE PROPERTIES',
    title: 'bubbleProperties preview',
    description: 'In completeWork, child subtree information is bubbled up toward the parent.',
    flow: [
      { title: 'child subtreeFlags', subtitle: 'flags of the child subtree', tone: 'teal' },
      {
        title: 'parent subtreeFlags',
        subtitle: 'accumulated on the parent Fiber',
        tone: 'sky',
      },
      {
        title: 'used in Commit Phase',
        subtitle: 'feeds the actual DOM apply',
        tone: 'violet',
      },
    ],
    bottomNote: 'The deletions list is also linked to the parent Fiber and applied during Commit.',
  },
  code: {
    eyebrow: '05 · CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    fileLabel: 'files',
    files: ['ReactFiberWorkLoop.js', 'ReactFiberCompleteWork.js'],
    pointsLabel: 'look at',
    points: ['completeUnitOfWork', 'completeWork', 'bubbleProperties'],
    learningQuestion: 'Where does completeWork bubble information up to the parent?',
    codeHeader: 'react-reconciler/src/ReactFiberWorkLoop.js',
    codeBadge: 'main',
    code: CODE,
    callouts: [
      { number: 1, body: 'completeWork executes — wrap up the current Fiber', tone: 'teal' },
      {
        number: 2,
        body: 'bubbleProperties — push subtreeFlags up to the parent',
        tone: 'sky',
      },
      { number: 3, body: 'If sibling exists — move sideways', tone: 'indigo' },
      { number: 4, body: 'Otherwise — climb up to parent and repeat', tone: 'violet' },
    ],
  },
  summary: {
    eyebrow: '06 · RENDER SUMMARY',
    title: 'Full Render Phase summary',
    items: [
      {
        number: 1,
        title: 'Start at the Root',
        description: 'work exists on the Root',
        tone: 'sky',
      },
      {
        number: 2,
        title: 'workLoop',
        description: 'iterate via workLoopSync / workLoopConcurrent',
        tone: 'sky',
      },
      { number: 3, title: 'performUnitOfWork', description: 'process one Fiber', tone: 'teal' },
      {
        number: 4,
        title: 'beginWork',
        description: 'descend and start computing nextChildren',
        tone: 'teal',
      },
      {
        number: 5,
        title: 'compute children',
        description: 'renderWithHooks / updateHostComponent, ...',
        tone: 'teal',
      },
      {
        number: 6,
        title: 'reconcileChildren',
        description: 'diff new Elements against existing Fibers',
        tone: 'indigo',
      },
      {
        number: 7,
        title: 'record change marks',
        description: 'flags & deletions · Placement / ChildDeletion / Update',
        tone: 'amber',
      },
      {
        number: 8,
        title: 'completeUnitOfWork',
        description: 'transition to complete when no children remain',
        tone: 'violet',
      },
      {
        number: 9,
        title: 'completeWork',
        description: 'wrap subtree info and bubble up to parent',
        tone: 'violet',
      },
      {
        number: 10,
        title: 'Wait for Commit Phase',
        description: 'when all Fibers are computed and marked',
        tone: 'cyan',
      },
    ],
  },
  checklist: {
    eyebrow: '07 · CORE CHECKLIST',
    title: 'Final checklist',
    subtitle: 'Can I explain these?',
    items: [
      { text: 'Difference between Render Phase and Commit Phase' },
      { text: 'Difference between workLoopSync and workLoopConcurrent' },
      { text: 'Role of performUnitOfWork' },
      { text: 'Why beginWork descends' },
      { text: 'Function component flow (renderWithHooks)' },
      { text: 'Host Component flow (updateHostComponent)' },
      { text: 'Role of reconcileChildren' },
      { text: 'Relation between type/key and Fiber reuse' },
      { text: 'Why the Render Phase leaves flags' },
      { text: 'Why completeWork ascends to finish' },
    ],
    completionNote: 'If you can explain all of these, you are ready for the Commit Phase!',
  },
  finale: {
    progressLabel: 'Chapter 8 of 15 complete',
    copyLine1: 'You followed the Render',
    copyLine2: 'Phase to the end.',
    copyLine3: 'Now into the Commit Phase.',
    primaryCta: 'Read the Commit Phase & DOM updates',
    primaryHref: '/commit-phase',
    secondaryCta: 'Review the Render Phase from the start',
    secondaryHref: '/render-phase',
  },
};

export const completeWorkContent: Record<Locale, CompleteWorkContent> = { ko, en };
