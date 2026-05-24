import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type PipelineIcon = 'flag' | 'search' | 'unlink' | 'droplet' | 'logOut' | 'trash';

export type PipelineStep = {
  number: string;
  title: string;
  description: string;
  iconName: PipelineIcon;
  tone: CommitToneKey;
};

export type HeroStepItem = {
  title: string;
  body: string;
  iconName: 'unlink' | 'droplet' | 'logOut' | 'trash';
  tone: CommitToneKey;
  examples: string[];
};

export type CleanupCardIcon = 'brokenLink' | 'monitor' | 'clock' | 'trash';

export type CleanupCard = {
  title: string;
  description: string;
  codePill: string;
  iconName: CleanupCardIcon;
  tone: CommitToneKey;
};

export type ModalFlowStep = {
  title: string;
  description?: string;
  treeItems?: string[];
  iconName: 'tree' | 'flag' | 'broom' | 'trash';
  tone: CommitToneKey;
};

export type CleanupVsRemoveRow = {
  task: string;
  meaning: string[];
  iconName: 'broom' | 'trash';
  tone: CommitToneKey;
};

export type DeletionContent = {
  hero: {
    pills: { label: string; tone: 'sky' | 'slate' }[];
    title: { line1: string; line2: string; line3: string };
    description: string;
    insightLabel: string;
    insight: string;
    diagram: {
      title: string;
      subtreeTitle: string;
      subtreeNodes: string[];
      steps: HeroStepItem[];
      bottomLabel: string;
    };
  };
  pipeline: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PipelineStep[];
  };
  cleanup: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: CleanupCard[];
  };
  modal: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    codeTitle: string;
    codeContent: string;
    stateTitle: string;
    stateContent: string;
    flow: ModalFlowStep[];
    beforeTitle: string;
    beforeContent: string;
    afterTitle: string;
    afterContent: string;
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePaths: string[];
      watchLabel: string;
      watchItems: string[];
      questionLabel: string;
      question: string;
    };
    code: {
      title: string;
      code: string;
    };
    fileLabelsTitle: string;
    fileLabels: { name: string; tone: CommitToneKey }[];
  };
  cleanupVsRemove: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { task: string; meaning: string };
    rows: CleanupVsRemoveRow[];
    pointTitle: string;
    pointText: string;
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  cta: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

const heroStepsKo: HeroStepItem[] = [
  {
    title: 'ref detach',
    body: 'ref 연결 해제',
    iconName: 'unlink',
    tone: 'violet',
    examples: ['ref A ×', 'ref B ×', 'ref C ×'],
  },
  {
    title: 'effect cleanup',
    body: 'layout / passive cleanup 실행',
    iconName: 'droplet',
    tone: 'sky',
    examples: ['useLayoutEffect cleanup', 'useEffect cleanup'],
  },
  {
    title: 'unmount 처리',
    body: '컴포넌트 unmount 및 내부 리소스 정리',
    iconName: 'logOut',
    tone: 'blue',
    examples: ['componentWillUnmount', 'cleanup logic'],
  },
  {
    title: 'host remove',
    body: 'host node 제거',
    iconName: 'trash',
    tone: 'teal',
    examples: ['<div class="modal">…</div>'],
  },
];

const heroStepsEn: HeroStepItem[] = [
  {
    title: 'ref detach',
    body: 'release ref bindings',
    iconName: 'unlink',
    tone: 'violet',
    examples: ['ref A ×', 'ref B ×', 'ref C ×'],
  },
  {
    title: 'effect cleanup',
    body: 'run layout / passive cleanup',
    iconName: 'droplet',
    tone: 'sky',
    examples: ['useLayoutEffect cleanup', 'useEffect cleanup'],
  },
  {
    title: 'unmount',
    body: 'component unmount and internal cleanup',
    iconName: 'logOut',
    tone: 'blue',
    examples: ['componentWillUnmount', 'cleanup logic'],
  },
  {
    title: 'host remove',
    body: 'remove the host node',
    iconName: 'trash',
    tone: 'teal',
    examples: ['<div class="modal">…</div>'],
  },
];

const pipelineStepsKo: PipelineStep[] = [
  {
    number: '1',
    title: 'ChildDeletion',
    description: '삭제 플래그 확인 및 ChildDeletion 처리 시작',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    number: '2',
    title: '삭제 대상 subtree 탐색',
    description: '삭제될 subtree를 깊이 우선 순회하며 탐색',
    iconName: 'search',
    tone: 'violet',
  },
  {
    number: '3',
    title: 'ref detach',
    description: '모든 ref 연결을 안전하게 해제',
    iconName: 'unlink',
    tone: 'sky',
  },
  {
    number: '4',
    title: 'layout / passive cleanup',
    description: 'useLayoutEffect, useEffect cleanup 실행',
    iconName: 'droplet',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'unmount 처리',
    description: '컴포넌트 unmount 및 내부 리소스 정리',
    iconName: 'logOut',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'host remove',
    description: '실제 DOM node를 부모에서 제거',
    iconName: 'trash',
    tone: 'teal',
  },
];

const pipelineStepsEn: PipelineStep[] = [
  {
    number: '1',
    title: 'ChildDeletion',
    description: 'Check delete flag and start ChildDeletion handling',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    number: '2',
    title: 'Walk the doomed subtree',
    description: 'Depth-first walk the subtree marked for deletion',
    iconName: 'search',
    tone: 'violet',
  },
  {
    number: '3',
    title: 'ref detach',
    description: 'Safely release all ref bindings',
    iconName: 'unlink',
    tone: 'sky',
  },
  {
    number: '4',
    title: 'layout / passive cleanup',
    description: 'Run useLayoutEffect and useEffect cleanups',
    iconName: 'droplet',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'unmount',
    description: 'Component unmount and internal cleanup',
    iconName: 'logOut',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'host remove',
    description: 'Remove the real DOM node from its parent',
    iconName: 'trash',
    tone: 'teal',
  },
];

const cleanupCardsKo: CleanupCard[] = [
  {
    title: 'refs 분리',
    description: '모든 ref의 current를 null로 만들고, ref 객체와의 연결을 해제합니다.',
    codePill: 'ref.current = null;',
    iconName: 'brokenLink',
    tone: 'violet',
  },
  {
    title: 'layout cleanup',
    description:
      'useLayoutEffect의 cleanup 함수를 동기적으로 실행하여 레이아웃 관련 구독과 리소스를 정리합니다.',
    codePill: 'useLayoutEffect cleanup()',
    iconName: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'passive cleanup',
    description:
      'useEffect의 cleanup 함수를 비동기적으로 실행하여 이벤트 리스너, 타이머, 구독 등을 정리합니다.',
    codePill: 'useEffect cleanup()',
    iconName: 'clock',
    tone: 'sky',
  },
  {
    title: 'host node 제거',
    description: '정리 작업이 끝난 뒤, 실제 DOM node를 부모 노드에서 제거합니다.',
    codePill: 'removeChild(node);',
    iconName: 'trash',
    tone: 'teal',
  },
];

const cleanupCardsEn: CleanupCard[] = [
  {
    title: 'refs detach',
    description: 'Set every ref.current to null and release the ref bindings.',
    codePill: 'ref.current = null;',
    iconName: 'brokenLink',
    tone: 'violet',
  },
  {
    title: 'layout cleanup',
    description:
      'Run useLayoutEffect cleanups synchronously to release layout-related subscriptions and resources.',
    codePill: 'useLayoutEffect cleanup()',
    iconName: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'passive cleanup',
    description:
      'Run useEffect cleanups asynchronously to tear down listeners, timers, and subscriptions.',
    codePill: 'useEffect cleanup()',
    iconName: 'clock',
    tone: 'sky',
  },
  {
    title: 'host node remove',
    description: 'After cleanup, remove the real DOM node from its parent.',
    codePill: 'removeChild(node);',
    iconName: 'trash',
    tone: 'teal',
  },
];

const modalFlowKo: ModalFlowStep[] = [
  {
    title: 'Modal Fiber subtree',
    treeItems: ['Modal', 'Backdrop', 'Dialog', 'CloseBtn'],
    iconName: 'tree',
    tone: 'violet',
  },
  {
    title: 'deletion 처리',
    description: 'ChildDeletion 플래그로 삭제 처리 시작',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    title: 'cleanup',
    description: 'ref detach + effect cleanup + unmount 처리',
    iconName: 'broom',
    tone: 'cyan',
  },
  {
    title: 'DOM 제거',
    description: 'host node를 부모에서 제거 (removeChild)',
    iconName: 'trash',
    tone: 'teal',
  },
];

const modalFlowEn: ModalFlowStep[] = [
  {
    title: 'Modal Fiber subtree',
    treeItems: ['Modal', 'Backdrop', 'Dialog', 'CloseBtn'],
    iconName: 'tree',
    tone: 'violet',
  },
  {
    title: 'deletion handling',
    description: 'Start delete handling on the ChildDeletion flag',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    title: 'cleanup',
    description: 'ref detach + effect cleanup + unmount',
    iconName: 'broom',
    tone: 'cyan',
  },
  {
    title: 'DOM remove',
    description: 'Remove the host node from its parent (removeChild)',
    iconName: 'trash',
    tone: 'teal',
  },
];

const codeKo = `// deletion 관련 commit 흐름
function commitDeletion(finishedWork) {
  commitBeforeMutationEffects_deletion(finishedWork);
  commitMutationEffects_deletion(finishedWork);
  commitLayoutEffects_deletion(finishedWork);
}

// ref detach
function commitDetachRef(finishedWork) {
  const ref = finishedWork.ref;
  if (ref !== null) {
    detachRef(ref);
  }
}

// host remove
function commitHostRemoveChild(parentInstance, child) {
  removeChild(parentInstance, child);
}`;

const codeEn = `// deletion-related commit flow
function commitDeletion(finishedWork) {
  commitBeforeMutationEffects_deletion(finishedWork);
  commitMutationEffects_deletion(finishedWork);
  commitLayoutEffects_deletion(finishedWork);
}

// ref detach
function commitDetachRef(finishedWork) {
  const ref = finishedWork.ref;
  if (ref !== null) {
    detachRef(ref);
  }
}

// host remove
function commitHostRemoveChild(parentInstance, child) {
  removeChild(parentInstance, child);
}`;

const cleanupVsRemoveRowsKo: CleanupVsRemoveRow[] = [
  {
    task: 'Cleanup',
    meaning: [
      'Fiber subtree와 effect 정리',
      'ref detach, layout/passive cleanup, unmount 등',
      '연결된 리소스 해제와 내부 상태 정리가 목적입니다.',
    ],
    iconName: 'broom',
    tone: 'cyan',
  },
  {
    task: 'Host Remove',
    meaning: ['실제 DOM node 제거', '부모 노드에서 removeChild를 호출해 화면에서 사라지게 합니다.'],
    iconName: 'trash',
    tone: 'teal',
  },
];

const cleanupVsRemoveRowsEn: CleanupVsRemoveRow[] = [
  {
    task: 'Cleanup',
    meaning: [
      'Tear down Fiber subtree and effects',
      'ref detach, layout/passive cleanup, unmount, etc.',
      'The goal is to release related resources and tidy internal state.',
    ],
    iconName: 'broom',
    tone: 'cyan',
  },
  {
    task: 'Host Remove',
    meaning: [
      'Remove the real DOM node',
      'Call removeChild on the parent so it disappears from the screen.',
    ],
    iconName: 'trash',
    tone: 'teal',
  },
];

const ko: DeletionContent = {
  hero: {
    pills: [
      { label: 'React 내부 구조 읽기 시리즈', tone: 'sky' },
      { label: 'Chapter 26', tone: 'slate' },
    ],
    title: {
      line1: '삭제는 DOM 제거',
      line2: '한 번으로 끝나지',
      line3: '않습니다.',
    },
    description:
      'React는 삭제될 subtree를 순회하며 refs를 분리하고, effect cleanup을 실행하고, 필요한 unmount 처리를 마친 뒤 host node를 제거합니다.',
    insightLabel: '핵심 한 줄 요약',
    insight: '삭제는 cleanup 파이프라인, 단일 DOM 명령이 아닙니다.',
    diagram: {
      title: '삭제 파이프라인 한눈에 보기',
      subtreeTitle: '삭제 대상 subtree',
      subtreeNodes: ['Parent', 'Modal', 'Header', 'Body', 'Button'],
      steps: heroStepsKo,
      bottomLabel: '상위로 전파되어 재귀적으로 반복',
    },
  },
  pipeline: {
    number: '1',
    eyebrow: 'deletion-pipeline',
    title: '삭제 흐름 전체 지도 (Cleanup Pipeline)',
    description:
      'Render Phase의 ChildDeletion 표시에서 host remove까지 — 삭제는 6단계 cleanup 파이프라인으로 진행됩니다.',
    steps: pipelineStepsKo,
  },
  cleanup: {
    number: '2',
    eyebrow: 'cleanup-items',
    title: '삭제 subtree에서 정리되는 것들',
    description: '삭제 대상 subtree를 순회하면서 React가 처리하는 4가지 정리 작업입니다.',
    cards: cleanupCardsKo,
  },
  modal: {
    number: '3',
    eyebrow: 'modal-deletion-example',
    title: '실제 UI 예시: Modal 제거',
    description:
      'Modal이 사라지는 그 순간에도 내부에서는 ref detach부터 host remove까지 진행됩니다.',
    codeTitle: '코드',
    codeContent: '{show && <Modal />}',
    stateTitle: '상태 변화',
    stateContent: 'show: true → false',
    flow: modalFlowKo,
    beforeTitle: 'Before (show: true)',
    beforeContent: '브라우저 화면 위에 Modal이 표시됨',
    afterTitle: 'After (show: false)',
    afterContent: 'Modal이 사라진 빈 화면',
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePaths: [
        'ReactFiberCommitWork.js',
        'ReactFiberCommitEffects.js',
        'ReactFiberCommitHostEffects.js',
      ],
      watchLabel: '볼 것',
      watchItems: ['deletion 관련 commit 흐름', 'ref detach', 'host remove'],
      questionLabel: '학습 질문',
      question: '삭제 작업은 왜 여러 파일과 책임으로 분리되어 있을까?',
    },
    code: {
      title: '관련 코드 미리보기 (핵심 함수들)',
      code: codeKo,
    },
    fileLabelsTitle: '관련 파일',
    fileLabels: [
      { name: 'ReactFiberCommitWork.js', tone: 'violet' },
      { name: 'ReactFiberCommitEffects.js', tone: 'sky' },
      { name: 'ReactFiberCommitHostEffects.js', tone: 'teal' },
    ],
  },
  cleanupVsRemove: {
    number: '5',
    eyebrow: 'cleanup-vs-remove',
    title: 'DOM remove와 cleanup 구분',
    description: '같은 "삭제"라도 책임은 둘로 명확히 나뉩니다.',
    columns: { task: '작업', meaning: '의미' },
    rows: cleanupVsRemoveRowsKo,
    pointTitle: '포인트',
    pointText: '삭제는 화면에서 지우는 것만 아니라, 연결된 리소스를 정리하는 과정입니다.',
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question: '삭제 시 React는 DOM node만 제거할까?',
    answer: '아니다. 삭제 subtree의 ref와 effects까지 정리한다.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: '다음 단계로 이동',
    description:
      '삭제 흐름까지 봤다면, 이제 Commit Phase에서 현재 트리가 어떻게 새 트리로 바뀌고 refs가 언제 갱신되는지 살펴봅니다.',
    primaryLabel: '다음: root.current 전환과 ref detach / attach',
    primaryHref: '/current-swap-ref',
    secondaryLabel: '이번 챕터 다시 복습하기',
    secondaryHref: '/commit-phase',
  },
};

const en: DeletionContent = {
  hero: {
    pills: [
      { label: 'React Internals Reading Series', tone: 'sky' },
      { label: 'Chapter 26', tone: 'slate' },
    ],
    title: {
      line1: 'Deletion is not just',
      line2: 'one DOM',
      line3: 'remove call.',
    },
    description:
      'React walks the doomed subtree, detaches refs, runs effect cleanups, finishes any unmount work, then removes the host node.',
    insightLabel: 'one-line summary',
    insight: 'Deletion is a cleanup pipeline, not a single DOM command.',
    diagram: {
      title: 'Deletion pipeline at a glance',
      subtreeTitle: 'Doomed subtree',
      subtreeNodes: ['Parent', 'Modal', 'Header', 'Body', 'Button'],
      steps: heroStepsEn,
      bottomLabel: 'Propagates upward and repeats recursively',
    },
  },
  pipeline: {
    number: '1',
    eyebrow: 'deletion-pipeline',
    title: 'Deletion flow map (Cleanup Pipeline)',
    description:
      'From the ChildDeletion mark in the Render Phase to host remove — deletion runs through this 6-step cleanup pipeline.',
    steps: pipelineStepsEn,
  },
  cleanup: {
    number: '2',
    eyebrow: 'cleanup-items',
    title: 'What gets cleaned up in the deleted subtree',
    description: 'Four cleanup jobs React performs while walking the doomed subtree.',
    cards: cleanupCardsEn,
  },
  modal: {
    number: '3',
    eyebrow: 'modal-deletion-example',
    title: 'Real UI example: removing a Modal',
    description:
      'Even at the moment the Modal disappears, the internals go through ref detach, cleanup and host remove.',
    codeTitle: 'Code',
    codeContent: '{show && <Modal />}',
    stateTitle: 'State change',
    stateContent: 'show: true → false',
    flow: modalFlowEn,
    beforeTitle: 'Before (show: true)',
    beforeContent: 'Modal is displayed over the browser screen',
    afterTitle: 'After (show: false)',
    afterContent: 'Empty screen — the Modal is gone',
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: 'Source code checkpoint',
    info: {
      fileLabel: 'Files',
      filePaths: [
        'ReactFiberCommitWork.js',
        'ReactFiberCommitEffects.js',
        'ReactFiberCommitHostEffects.js',
      ],
      watchLabel: 'Watch',
      watchItems: ['deletion commit flow', 'ref detach', 'host remove'],
      questionLabel: 'Learning question',
      question: 'Why is deletion split across multiple files and responsibilities?',
    },
    code: {
      title: 'related code preview (core functions)',
      code: codeEn,
    },
    fileLabelsTitle: 'related files',
    fileLabels: [
      { name: 'ReactFiberCommitWork.js', tone: 'violet' },
      { name: 'ReactFiberCommitEffects.js', tone: 'sky' },
      { name: 'ReactFiberCommitHostEffects.js', tone: 'teal' },
    ],
  },
  cleanupVsRemove: {
    number: '5',
    eyebrow: 'cleanup-vs-remove',
    title: 'Cleanup vs Host Remove',
    description: 'Even for the same "deletion", the responsibility splits clearly into two.',
    columns: { task: 'Task', meaning: 'Meaning' },
    rows: cleanupVsRemoveRowsEn,
    pointTitle: 'point',
    pointText:
      'Deletion is not only erasing from the screen — it is also tearing down related resources.',
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: 'mini quiz',
    question: 'When deleting, does React only remove the DOM node?',
    answer: 'No. It also cleans up refs and effects in the deleted subtree.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: 'Next step',
    description:
      'Now that the deletion flow is clear, see how the current tree is swapped for the new tree and when refs are updated in the Commit Phase.',
    primaryLabel: 'Next: root.current swap and ref detach / attach',
    primaryHref: '/current-swap-ref',
    secondaryLabel: 'Review this chapter again',
    secondaryHref: '/commit-phase',
  },
};

export const deletionContent: Record<Locale, DeletionContent> = { ko, en };
