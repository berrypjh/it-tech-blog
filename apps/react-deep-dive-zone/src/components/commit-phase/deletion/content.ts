import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PipelineId = 'flag' | 'search' | 'unlink' | 'droplet' | 'logOut' | 'trash';

export type PipelineStep = {
  number: string;
  title: string;
  description: string;
  id: PipelineId;
  tone: ToneKey;
};

export type HeroStepItem = {
  title: string;
  body: string;
  id: 'unlink' | 'droplet' | 'logOut' | 'trash';
  tone: ToneKey;
  examples: string[];
};

export type CleanupCardId = 'brokenLink' | 'monitor' | 'clock' | 'trash';

export type CleanupCard = {
  title: string;
  description: string;
  codePill: string;
  id: CleanupCardId;
  tone: ToneKey;
};

export type ModalFlowStep = {
  title: string;
  description?: string;
  treeItems?: string[];
  id: 'tree' | 'flag' | 'broom' | 'trash';
  tone: ToneKey;
};

export type CleanupVsRemoveRow = {
  task: string;
  meaning: string[];
  id: 'broom' | 'trash';
  tone: ToneKey;
};

export type CheckpointBlock = {
  filePath: string;
  code: string;
  primaryCta: string;
  primaryHref: string;
};

export type DeletionContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      subtreeTitle: string;
      subtreeNodes: string[];
      steps: HeroStepItem[];
      bottomLabel: string;
    };
  };
  pipeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PipelineStep[];
  };
  cleanup: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: CleanupCard[];
  };
  modal: {
    badge: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePaths: string[];
    lookForLabel: string;
    lookFor: string;
    blocks: CheckpointBlock[];
  };
  cleanupVsRemove: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { task: string; meaning: string };
    rows: CleanupVsRemoveRow[];
    pointTitle: string;
    pointText: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroStepsKo: HeroStepItem[] = [
  {
    title: 'ref detach',
    body: 'ref 연결 해제',
    id: 'unlink',
    tone: 'violet',
    examples: ['ref A ×', 'ref B ×', 'ref C ×'],
  },
  {
    title: 'effect cleanup',
    body: 'layout / passive cleanup 실행',
    id: 'droplet',
    tone: 'sky',
    examples: ['useLayoutEffect cleanup', 'useEffect cleanup'],
  },
  {
    title: 'unmount 처리',
    body: '컴포넌트 unmount 및 내부 리소스 정리',
    id: 'logOut',
    tone: 'blue',
    examples: ['componentWillUnmount', 'cleanup logic'],
  },
  {
    title: 'host remove',
    body: 'host node 제거',
    id: 'trash',
    tone: 'teal',
    examples: ['<div class="modal">…</div>'],
  },
];

const heroStepsEn: HeroStepItem[] = [
  {
    title: 'ref detach',
    body: 'release ref bindings',
    id: 'unlink',
    tone: 'violet',
    examples: ['ref A ×', 'ref B ×', 'ref C ×'],
  },
  {
    title: 'effect cleanup',
    body: 'run layout / passive cleanup',
    id: 'droplet',
    tone: 'sky',
    examples: ['useLayoutEffect cleanup', 'useEffect cleanup'],
  },
  {
    title: 'unmount',
    body: 'component unmount and internal cleanup',
    id: 'logOut',
    tone: 'blue',
    examples: ['componentWillUnmount', 'cleanup logic'],
  },
  {
    title: 'host remove',
    body: 'remove the host node',
    id: 'trash',
    tone: 'teal',
    examples: ['<div class="modal">…</div>'],
  },
];

const pipelineStepsKo: PipelineStep[] = [
  {
    number: '1',
    title: 'ChildDeletion',
    description: '삭제 플래그 확인 및 ChildDeletion 처리 시작',
    id: 'flag',
    tone: 'violet',
  },
  {
    number: '2',
    title: '삭제 대상 subtree 탐색',
    description: '삭제될 subtree를 깊이 우선 순회하며 탐색',
    id: 'search',
    tone: 'violet',
  },
  {
    number: '3',
    title: 'ref detach',
    description: '모든 ref 연결을 안전하게 해제',
    id: 'unlink',
    tone: 'sky',
  },
  {
    number: '4',
    title: 'layout / passive cleanup',
    description: 'useLayoutEffect, useEffect cleanup 실행',
    id: 'droplet',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'unmount 처리',
    description: '컴포넌트 unmount 및 내부 리소스 정리',
    id: 'logOut',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'host remove',
    description: '실제 DOM node를 부모에서 제거',
    id: 'trash',
    tone: 'teal',
  },
];

const pipelineStepsEn: PipelineStep[] = [
  {
    number: '1',
    title: 'ChildDeletion',
    description: 'Check delete flag and start ChildDeletion handling',
    id: 'flag',
    tone: 'violet',
  },
  {
    number: '2',
    title: 'Walk the doomed subtree',
    description: 'Depth-first walk the subtree marked for deletion',
    id: 'search',
    tone: 'violet',
  },
  {
    number: '3',
    title: 'ref detach',
    description: 'Safely release all ref bindings',
    id: 'unlink',
    tone: 'sky',
  },
  {
    number: '4',
    title: 'layout / passive cleanup',
    description: 'Run useLayoutEffect and useEffect cleanups',
    id: 'droplet',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'unmount',
    description: 'Component unmount and internal cleanup',
    id: 'logOut',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'host remove',
    description: 'Remove the real DOM node from its parent',
    id: 'trash',
    tone: 'teal',
  },
];

const cleanupCardsKo: CleanupCard[] = [
  {
    title: 'refs 분리',
    description: '모든 ref의 current를 null로 만들고, ref 객체와의 연결을 해제합니다.',
    codePill: 'ref.current = null;',
    id: 'brokenLink',
    tone: 'violet',
  },
  {
    title: 'layout cleanup',
    description:
      'useLayoutEffect의 cleanup 함수를 동기적으로 실행하여 레이아웃 관련 구독과 리소스를 정리합니다.',
    codePill: 'useLayoutEffect cleanup()',
    id: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'passive cleanup',
    description:
      'useEffect의 cleanup 함수를 비동기적으로 실행하여 이벤트 리스너, 타이머, 구독 등을 정리합니다.',
    codePill: 'useEffect cleanup()',
    id: 'clock',
    tone: 'sky',
  },
  {
    title: 'host node 제거',
    description: '정리 작업이 끝난 뒤, 실제 DOM node를 부모 노드에서 제거합니다.',
    codePill: 'removeChild(node);',
    id: 'trash',
    tone: 'teal',
  },
];

const cleanupCardsEn: CleanupCard[] = [
  {
    title: 'refs detach',
    description: 'Set every ref.current to null and release the ref bindings.',
    codePill: 'ref.current = null;',
    id: 'brokenLink',
    tone: 'violet',
  },
  {
    title: 'layout cleanup',
    description:
      'Run useLayoutEffect cleanups synchronously to release layout-related subscriptions and resources.',
    codePill: 'useLayoutEffect cleanup()',
    id: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'passive cleanup',
    description:
      'Run useEffect cleanups asynchronously to tear down listeners, timers, and subscriptions.',
    codePill: 'useEffect cleanup()',
    id: 'clock',
    tone: 'sky',
  },
  {
    title: 'host node remove',
    description: 'After cleanup, remove the real DOM node from its parent.',
    codePill: 'removeChild(node);',
    id: 'trash',
    tone: 'teal',
  },
];

const modalFlowKo: ModalFlowStep[] = [
  {
    title: 'Modal Fiber subtree',
    treeItems: ['Modal', 'Backdrop', 'Dialog', 'CloseBtn'],
    id: 'tree',
    tone: 'violet',
  },
  {
    title: 'deletion 처리',
    description: 'ChildDeletion 플래그로 삭제 처리 시작',
    id: 'flag',
    tone: 'violet',
  },
  {
    title: 'cleanup',
    description: 'ref detach + effect cleanup + unmount 처리',
    id: 'broom',
    tone: 'cyan',
  },
  {
    title: 'DOM 제거',
    description: 'host node를 부모에서 제거 (removeChild)',
    id: 'trash',
    tone: 'teal',
  },
];

const modalFlowEn: ModalFlowStep[] = [
  {
    title: 'Modal Fiber subtree',
    treeItems: ['Modal', 'Backdrop', 'Dialog', 'CloseBtn'],
    id: 'tree',
    tone: 'violet',
  },
  {
    title: 'deletion handling',
    description: 'Start delete handling on the ChildDeletion flag',
    id: 'flag',
    tone: 'violet',
  },
  {
    title: 'cleanup',
    description: 'ref detach + effect cleanup + unmount',
    id: 'broom',
    tone: 'cyan',
  },
  {
    title: 'DOM remove',
    description: 'Remove the host node from its parent (removeChild)',
    id: 'trash',
    tone: 'teal',
  },
];

const commitWorkCode = `function commitDeletionEffects(root, returnFiber, deletedFiber) {
  // ... find the nearest host parent
  commitDeletionEffectsOnFiber(root, returnFiber, deletedFiber);
  hostParent = null;
  hostParentIsContainer = false;
  detachFiberMutation(deletedFiber);
}

function commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, deletedFiber) {
  switch (deletedFiber.tag) {
    case HostComponent: {
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      // fallthrough
    }
    case HostText: {
      const prevHostParent = hostParent;
      hostParent = null;
      recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
      hostParent = prevHostParent;
      if (hostParent !== null) {
        commitHostRemoveChild(deletedFiber, nearestMountedAncestor, hostParent, deletedFiber.stateNode);
      }
      return;
    }
    case FunctionComponent: {
      commitHookLayoutUnmountEffects(deletedFiber, nearestMountedAncestor, HookLayout);
      recursivelyTraverseDeletionEffects(finishedRoot, nearestMountedAncestor, deletedFiber);
      return;
    }
    // ...
  }
}`;

const commitEffectsCode = `export function safelyDetachRef(current, nearestMountedAncestor) {
  const ref = current.ref;
  const refCleanup = current.refCleanup;
  if (ref !== null) {
    if (typeof refCleanup === 'function') {
      refCleanup();
      current.refCleanup = null;
    } else if (typeof ref === 'function') {
      ref(null);
    } else {
      ref.current = null;
    }
  }
}`;

const hostEffectsCode = `export function commitHostRemoveChild(deletedFiber, nearestMountedAncestor, parent, hostInstance) {
  try {
    removeChild(parent, hostInstance);
  } catch (error) {
    captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
  }
}`;

const cleanupVsRemoveRowsKo: CleanupVsRemoveRow[] = [
  {
    task: 'Cleanup',
    meaning: [
      'Fiber subtree와 effect 정리',
      'ref detach, layout/passive cleanup, unmount 등',
      '연결된 리소스 해제와 내부 상태 정리가 목적입니다.',
    ],
    id: 'broom',
    tone: 'cyan',
  },
  {
    task: 'Host Remove',
    meaning: ['실제 DOM node 제거', '부모 노드에서 removeChild를 호출해 화면에서 사라지게 합니다.'],
    id: 'trash',
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
    id: 'broom',
    tone: 'cyan',
  },
  {
    task: 'Host Remove',
    meaning: [
      'Remove the real DOM node',
      'Call removeChild on the parent so it disappears from the screen.',
    ],
    id: 'trash',
    tone: 'teal',
  },
];

const ko: DeletionContent = {
  hero: {
    badge: 'Commit Phase · 7/10단계',
    title: {
      line1: '삭제는 DOM 제거',
      line2: '한 번으로 끝나지',
      line3: '않습니다.',
    },
    description:
      'React는 삭제될 subtree를 순회하며 refs를 분리하고, effect cleanup을 실행하고, 필요한 unmount 처리를 마친 뒤 host node를 제거합니다.',
    diagram: {
      title: '삭제 파이프라인 한눈에 보기',
      subtreeTitle: '삭제 대상 subtree',
      subtreeNodes: ['Parent', 'Modal', 'Header', 'Body', 'Button'],
      steps: heroStepsKo,
      bottomLabel: '상위로 전파되어 재귀적으로 반복',
    },
  },
  pipeline: {
    badge: '01',
    eyebrow: '삭제 파이프라인',
    title: '삭제 흐름 전체 지도 (Cleanup Pipeline)',
    description:
      'Render Phase의 ChildDeletion 표시에서 host remove까지 — 삭제는 6단계 cleanup 파이프라인으로 진행됩니다.',
    steps: pipelineStepsKo,
  },
  cleanup: {
    badge: '02',
    eyebrow: '정리 항목',
    title: '삭제 subtree에서 정리되는 것들',
    description: '삭제 대상 subtree를 순회하면서 React가 처리하는 4가지 정리 작업입니다.',
    cards: cleanupCardsKo,
  },
  modal: {
    badge: '03',
    eyebrow: '모달 삭제 예시',
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
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
      'packages/react-reconciler/src/ReactFiberCommitEffects.js',
      'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    ],
    lookForLabel: '볼 것',
    lookFor:
      'commitDeletionEffects, commitDeletionEffectsOnFiber, safelyDetachRef, commitHostRemoveChild, detachFiberMutation',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: commitWorkCode,
        primaryCta: 'ReactFiberCommitWork.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitEffects.js',
        code: commitEffectsCode,
        primaryCta: 'ReactFiberCommitEffects.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitEffects.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
        code: hostEffectsCode,
        primaryCta: 'ReactFiberCommitHostEffects.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
      },
    ],
  },
  cleanupVsRemove: {
    badge: '05',
    eyebrow: '정리 vs 제거',
    title: 'DOM remove와 cleanup 구분',
    description: '같은 "삭제"라도 책임은 둘로 명확히 나뉩니다.',
    columns: { task: '작업', meaning: '의미' },
    rows: cleanupVsRemoveRowsKo,
    pointTitle: '포인트',
    pointText: '삭제는 화면에서 지우는 것만 아니라, 연결된 리소스를 정리하는 과정입니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'root.current 전환과 ref detach / attach',
    description:
      '삭제 흐름까지 봤다면, 이제 Commit Phase에서 현재 트리가 어떻게 새 트리로 바뀌고 refs가 언제 갱신되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/current-swap-ref',
  },
};

const en: DeletionContent = {
  hero: {
    badge: 'Commit Phase · 7/10',
    title: {
      line1: 'Deletion is not just',
      line2: 'one DOM',
      line3: 'remove call.',
    },
    description:
      'React walks the doomed subtree, detaches refs, runs effect cleanups, finishes any unmount work, then removes the host node.',
    diagram: {
      title: 'Deletion pipeline at a glance',
      subtreeTitle: 'Doomed subtree',
      subtreeNodes: ['Parent', 'Modal', 'Header', 'Body', 'Button'],
      steps: heroStepsEn,
      bottomLabel: 'Propagates upward and repeats recursively',
    },
  },
  pipeline: {
    badge: '01',
    eyebrow: 'DELETION PIPELINE',
    title: 'Deletion flow map (Cleanup Pipeline)',
    description:
      'From the ChildDeletion mark in the Render Phase to host remove — deletion runs through this 6-step cleanup pipeline.',
    steps: pipelineStepsEn,
  },
  cleanup: {
    badge: '02',
    eyebrow: 'CLEANUP ITEMS',
    title: 'What gets cleaned up in the deleted subtree',
    description: 'Four cleanup jobs React performs while walking the doomed subtree.',
    cards: cleanupCardsEn,
  },
  modal: {
    badge: '03',
    eyebrow: 'MODAL EXAMPLE',
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
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
      'packages/react-reconciler/src/ReactFiberCommitEffects.js',
      'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    ],
    lookForLabel: 'Look for',
    lookFor:
      'commitDeletionEffects, commitDeletionEffectsOnFiber, safelyDetachRef, commitHostRemoveChild, detachFiberMutation',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: commitWorkCode,
        primaryCta: 'Read ReactFiberCommitWork.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitEffects.js',
        code: commitEffectsCode,
        primaryCta: 'Read ReactFiberCommitEffects.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitEffects.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
        code: hostEffectsCode,
        primaryCta: 'Read ReactFiberCommitHostEffects.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
      },
    ],
  },
  cleanupVsRemove: {
    badge: '05',
    eyebrow: 'CLEANUP VS REMOVE',
    title: 'Cleanup vs Host Remove',
    description: 'Even for the same "deletion", the responsibility splits clearly into two.',
    columns: { task: 'Task', meaning: 'Meaning' },
    rows: cleanupVsRemoveRowsEn,
    pointTitle: 'point',
    pointText:
      'Deletion is not only erasing from the screen — it is also tearing down related resources.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'root.current swap and ref detach / attach',
    description:
      'Now that the deletion flow is clear, see how the current tree is swapped for the new tree and when refs are updated in the Commit Phase.',
    cta: 'Go to the next page',
    href: '/current-swap-ref',
  },
};

export const deletionContent: Record<Locale, DeletionContent> = { ko, en };
