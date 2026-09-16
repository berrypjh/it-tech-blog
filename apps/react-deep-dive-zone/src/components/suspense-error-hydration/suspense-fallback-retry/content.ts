import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PhaseId = 'suspend' | 'fallback' | 'resolve' | 'retry';

export type Phase = {
  id: PhaseId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type CaptureStepId = 'find' | 'mark' | 'unwind' | 'render-fallback' | 'attach-ping';

export type CaptureStep = {
  id: CaptureStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type StateId = 'primary' | 'fallback' | 'retrying';

export type BoundaryState = {
  id: StateId;
  label: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type BehaviorRow = {
  situation: string;
  behavior: string;
  why: string;
};

export type SuspenseFallbackRetryContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    phases: Phase[];
  };
  capture: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: CaptureStep[];
    note: string;
  };
  states: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: BoundaryState[];
    note: string;
  };
  behaviors: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: BehaviorRow[];
    note: string;
  };
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const SUSPENSE_CAPTURE_CODE = `// 1. 경계를 fallback으로 전환하도록 표시한다
function markSuspenseBoundaryShouldCapture(
  suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes,
) {
  // 이 경계는 이번 렌더에서 fallback을 보여야 한다
  suspenseBoundary.flags |= ShouldCapture;

  // 이번 렌더 lane을 지워 두었다가 재시도할 때 다시 쓴다
  suspenseBoundary.lanes = rootRenderLanes;
  return suspenseBoundary;
}

// 2. unwind 단계에서 ShouldCapture를 DidCapture로 바꾼다
function unwindWork(current, workInProgress, renderLanes) {
  switch (workInProgress.tag) {
    case SuspenseComponent: {
      const flags = workInProgress.flags;
      if (flags & ShouldCapture) {
        workInProgress.flags = (flags & ~ShouldCapture) | DidCapture;
        return workInProgress;
      }
      return null;
    }
  }
}

// 3. 재렌더 시 DidCapture가 켜져 있으면 fallback 쪽 children을 고른다
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  const didSuspend = (workInProgress.flags & DidCapture) !== NoFlags;

  if (didSuspend) {
    return mountSuspenseFallbackChildren(
      workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes,
    );
  }
  return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren, renderLanes);
}`;

const REACT_FIBER_THROW_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const ko: SuspenseFallbackRetryContent = {
  hero: {
    badge: 'Suspense/Error · 4/10단계',
    title: { line1: 'fallback은 컴포넌트를 지우지 않는다', line2: '보이지 않게 옆에 둘 뿐이다' },
    description:
      'Suspense 경계는 primary와 fallback 두 벌의 자식을 동시에 들고 있습니다. 전환은 어느 쪽을 보여 줄지 고르는 일입니다.',
    diagramBadge: 'fallback cycle',
    diagramCaption: 'suspend → fallback → retry',
    phases: [
      {
        id: 'suspend',
        label: 'suspend',
        caption: 'use가 SuspenseException을 던진다',
        tone: 'sky',
      },
      {
        id: 'fallback',
        label: 'fallback',
        caption: '경계가 DidCapture를 켜고 fallback을 렌더',
        tone: 'violet',
      },
      {
        id: 'resolve',
        label: 'resolve',
        caption: 'Promise가 풀리며 ping이 도착',
        tone: 'teal',
      },
      {
        id: 'retry',
        label: 'retry',
        caption: '같은 lane으로 다시 렌더해 primary 복귀',
        tone: 'emerald',
      },
    ],
  },
  capture: {
    badge: '01',
    eyebrow: 'capture',
    title: 'fallback으로 넘어가는 다섯 칸',
    description:
      '경계가 즉시 fallback을 그리지는 않습니다. 플래그를 켜 두고 되감은 뒤, 다음 completeWork에서 결정됩니다.',
    steps: [
      {
        id: 'find',
        num: '01',
        title: '가장 가까운 Suspense 찾기',
        description: 'return 포인터를 타고 올라가며 fallback prop을 가진 경계를 찾습니다.',
        tone: 'sky',
      },
      {
        id: 'mark',
        num: '02',
        title: 'ShouldCapture 켜기',
        description: '이 경계가 이번 렌더에서 fallback을 보여야 한다고 flags에 남깁니다.',
        tone: 'indigo',
      },
      {
        id: 'unwind',
        num: '03',
        title: 'DidCapture로 전환',
        description: 'unwindWork가 ShouldCapture를 끄고 DidCapture를 켜서 결정을 확정합니다.',
        tone: 'violet',
      },
      {
        id: 'render-fallback',
        num: '04',
        title: 'fallback children 렌더',
        description: 'updateSuspenseComponent가 DidCapture를 보고 fallback 쪽을 고릅니다.',
        tone: 'violet',
      },
      {
        id: 'attach-ping',
        num: '05',
        title: 'Promise에 ping 연결',
        description: 'thenable에 리스너를 붙여 settle되면 이 root에 재시도를 걸게 합니다.',
        tone: 'teal',
      },
    ],
    note: '02와 03이 나뉘어 있는 이유는 되감기 도중에 취소될 수 있기 때문입니다. 확정은 unwind 시점에 일어납니다.',
  },
  states: {
    badge: '02',
    eyebrow: 'boundary states',
    title: '경계가 가질 수 있는 세 모습',
    description:
      'Suspense 경계는 자식 트리를 통째로 갈아 끼우지 않습니다. 두 벌을 들고 어느 쪽을 화면에 둘지만 바꿉니다.',
    items: [
      {
        id: 'primary',
        label: 'primary 표시',
        role: '평상시',
        description:
          'DidCapture가 꺼져 있고 실제 자식이 보입니다. fallback은 아예 만들어지지 않습니다.',
        tone: 'emerald',
      },
      {
        id: 'fallback',
        label: 'fallback 표시',
        role: '대기 중',
        description: 'primary 자식은 Offscreen 안에 숨긴 채 유지되고, fallback만 화면에 나옵니다.',
        tone: 'violet',
      },
      {
        id: 'retrying',
        label: '재시도 중',
        role: '다시 렌더',
        description:
          'ping을 받아 다시 렌더 중입니다. 성공하면 primary로 돌아가고, 또 멈추면 fallback을 유지합니다.',
        tone: 'teal',
      },
    ],
    note: 'primary를 버리지 않고 숨겨 두기 때문에 상태가 보존됩니다. 재시도가 처음부터가 아니라 이어지는 것처럼 느껴지는 이유입니다.',
  },
  behaviors: {
    badge: '03',
    eyebrow: 'behaviors',
    title: '상황에 따라 달라지는 반응',
    description:
      '같은 suspend라도 어떤 업데이트에서 났는지에 따라 fallback을 보여 줄지 이전 화면을 유지할지 달라집니다.',
    headers: ['상황', 'React의 반응', '왜 그런가'],
    rows: [
      {
        situation: '첫 마운트 중 suspend',
        behavior: 'fallback을 바로 보여 준다',
        why: '보여 줄 이전 화면이 없습니다. 빈 화면보다 fallback이 낫습니다.',
      },
      {
        situation: 'transition 중 suspend',
        behavior: '이전 화면을 유지한다',
        why: 'startTransition은 화면이 깜빡이지 않기를 요청한 것이므로 fallback으로 바꾸지 않습니다.',
      },
      {
        situation: '동기 업데이트 중 suspend',
        behavior: 'fallback으로 전환',
        why: '급한 업데이트라 기다릴 수 없습니다. 즉시 fallback을 보여 줍니다.',
      },
      {
        situation: '재시도 중 또 suspend',
        behavior: 'fallback을 유지한다',
        why: '이미 fallback이 보이는 중이라 화면이 더 바뀌지 않습니다.',
      },
    ],
    note: '두 번째 줄이 startTransition의 핵심 효과입니다. 같은 데이터 로딩이라도 전환 안에서 하면 깜빡임이 사라집니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: '볼 것',
    lookFor: 'markSuspenseBoundaryShouldCapture, ShouldCapture, DidCapture, unwindWork',
    whyLabel: '설명',
    why: 'ShouldCapture와 DidCapture 두 플래그가 나뉘어 있고 unwind에서 교체된다는 점이 전환 시점을 정확히 알려 줍니다.',
    code: SUSPENSE_CAPTURE_CODE,
    primaryCta: 'ReactFiberThrow.js 읽기',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '이번에는 Error 쪽 갈래',
    description:
      'Suspense가 자동으로 복구된다면 Error Boundary는 왜 스스로 풀리지 않는지 확인합니다.',
    cta: '다음 페이지로 이동',
    href: '/error-boundary-recover',
  },
};

const SUSPENSE_CAPTURE_CODE_EN = `// 1. mark the boundary so it switches to its fallback
function markSuspenseBoundaryShouldCapture(
  suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes,
) {
  // this boundary must show its fallback for this render
  suspenseBoundary.flags |= ShouldCapture;

  // clear the render lane now and reuse it on the retry
  suspenseBoundary.lanes = rootRenderLanes;
  return suspenseBoundary;
}

// 2. during unwind, ShouldCapture becomes DidCapture
function unwindWork(current, workInProgress, renderLanes) {
  switch (workInProgress.tag) {
    case SuspenseComponent: {
      const flags = workInProgress.flags;
      if (flags & ShouldCapture) {
        workInProgress.flags = (flags & ~ShouldCapture) | DidCapture;
        return workInProgress;
      }
      return null;
    }
  }
}

// 3. on re-render, DidCapture selects the fallback children
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  const didSuspend = (workInProgress.flags & DidCapture) !== NoFlags;

  if (didSuspend) {
    return mountSuspenseFallbackChildren(
      workInProgress, nextPrimaryChildren, nextFallbackChildren, renderLanes,
    );
  }
  return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren, renderLanes);
}`;

const en: SuspenseFallbackRetryContent = {
  hero: {
    badge: 'Suspense/Error · 4/10',
    title: {
      line1: 'A fallback does not delete the children',
      line2: 'it parks them out of sight',
    },
    description:
      'A Suspense boundary holds two sets of children at once. Switching is just a choice of which set is on screen.',
    diagramBadge: 'fallback cycle',
    diagramCaption: 'suspend → fallback → retry',
    phases: [
      {
        id: 'suspend',
        label: 'suspend',
        caption: 'use throws SuspenseException',
        tone: 'sky',
      },
      {
        id: 'fallback',
        label: 'fallback',
        caption: 'the boundary sets DidCapture and renders the fallback',
        tone: 'violet',
      },
      {
        id: 'resolve',
        label: 'resolve',
        caption: 'the Promise settles and a ping arrives',
        tone: 'teal',
      },
      {
        id: 'retry',
        label: 'retry',
        caption: 're-render on the same lane and return to primary',
        tone: 'emerald',
      },
    ],
  },
  capture: {
    badge: '01',
    eyebrow: 'capture',
    title: 'Five stops to reach the fallback',
    description:
      'The boundary does not draw its fallback immediately. A flag is set, the work rewinds, and the decision lands on the next pass.',
    steps: [
      {
        id: 'find',
        num: '01',
        title: 'Find the nearest Suspense',
        description: 'Climb return pointers looking for a boundary that carries a fallback prop.',
        tone: 'sky',
      },
      {
        id: 'mark',
        num: '02',
        title: 'Set ShouldCapture',
        description: 'Record in flags that this boundary must show its fallback this render.',
        tone: 'indigo',
      },
      {
        id: 'unwind',
        num: '03',
        title: 'Turn it into DidCapture',
        description:
          'unwindWork clears ShouldCapture and sets DidCapture, finalising the decision.',
        tone: 'violet',
      },
      {
        id: 'render-fallback',
        num: '04',
        title: 'Render the fallback children',
        description: 'updateSuspenseComponent reads DidCapture and selects the fallback set.',
        tone: 'violet',
      },
      {
        id: 'attach-ping',
        num: '05',
        title: 'Attach a ping to the Promise',
        description: 'A listener on the thenable schedules a retry on this root once it settles.',
        tone: 'teal',
      },
    ],
    note: 'Steps 02 and 03 are separate because the rewind can still be cancelled. The decision is finalised at unwind.',
  },
  states: {
    badge: '02',
    eyebrow: 'boundary states',
    title: 'Three shapes a boundary can take',
    description:
      'A Suspense boundary never swaps the child tree wholesale. It keeps both sets and changes which one is on screen.',
    items: [
      {
        id: 'primary',
        label: 'Showing primary',
        role: 'normal',
        description:
          'DidCapture is off and the real children show. The fallback is never even built.',
        tone: 'emerald',
      },
      {
        id: 'fallback',
        label: 'Showing fallback',
        role: 'waiting',
        description:
          'The primary children stay alive hidden inside Offscreen while only the fallback is visible.',
        tone: 'violet',
      },
      {
        id: 'retrying',
        label: 'Retrying',
        role: 're-rendering',
        description:
          'A ping arrived and it is rendering again. Success returns to primary; another suspend keeps the fallback.',
        tone: 'teal',
      },
    ],
    note: 'Because primary is hidden rather than discarded, state survives — which is why a retry feels like continuing rather than restarting.',
  },
  behaviors: {
    badge: '03',
    eyebrow: 'behaviors',
    title: 'The response depends on the situation',
    description:
      'The same suspend shows a fallback or keeps the old screen depending on which update it happened in.',
    headers: ['Situation', 'What React does', 'Why'],
    rows: [
      {
        situation: 'Suspending during first mount',
        behavior: 'Shows the fallback right away',
        why: 'There is no previous screen to keep, and a fallback beats a blank one.',
      },
      {
        situation: 'Suspending inside a transition',
        behavior: 'Keeps the previous screen',
        why: 'startTransition asked for no flicker, so the screen is not replaced by a fallback.',
      },
      {
        situation: 'Suspending in a sync update',
        behavior: 'Switches to the fallback',
        why: 'The update is urgent and cannot wait, so the fallback goes up immediately.',
      },
      {
        situation: 'Suspending again during a retry',
        behavior: 'Keeps the fallback',
        why: 'The fallback is already on screen, so nothing visibly changes.',
      },
    ],
    note: 'The second row is the main effect of startTransition: the same data load stops flickering when wrapped in a transition.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: 'Look for',
    lookFor: 'markSuspenseBoundaryShouldCapture, ShouldCapture, DidCapture, unwindWork',
    whyLabel: 'Why',
    why: 'Two separate flags swapped during unwind pin down exactly when the switch to a fallback becomes final.',
    code: SUSPENSE_CAPTURE_CODE_EN,
    primaryCta: 'Read ReactFiberThrow.js',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Now the Error branch',
    description:
      'Suspense recovers on its own — next we see why an Error Boundary never clears itself.',
    cta: 'Go to the next page',
    href: '/error-boundary-recover',
  },
};

export const suspenseFallbackRetryContent: Record<Locale, SuspenseFallbackRetryContent> = {
  ko,
  en,
};
