import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type TrackId = 'urgent' | 'deferred';

export type Track = {
  id: TrackId;
  label: string;
  caption: string;
  lane: string;
  tone: ToneKey;
};

export type ApiSideId = 'transition' | 'deferred';

export type ApiSide = {
  id: ApiSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type CompareRow = {
  aspect: string;
  transition: string;
  deferred: string;
};

export type TimelineStepId =
  | 'keystroke'
  | 'urgent-render'
  | 'paint'
  | 'deferred-lane'
  | 'deferred-render';

export type TimelineStep = {
  id: TimelineStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type TransitionDeferredContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    inputLabel: string;
    inputValue: string;
    tracks: Track[];
  };
  apis: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [ApiSide, ApiSide];
    bridge: { headline: string; sub: string };
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: CompareRow[];
    note: string;
  };
  timeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TimelineStep[];
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

const TRANSITION_LANE_CODE = `// A. startTransition 경로: 문맥을 보고 transition lane을 받는다
export function requestUpdateLane(fiber) {
  const transition = requestCurrentTransition();
  if (transition !== null) {
    return requestTransitionLane(transition);
  }
  return eventPriorityToLane(resolveUpdatePriority());
}

function requestTransitionLane(transition) {
  if (currentEntangledLane !== NoLane) {
    return currentEntangledLane;
  }
  // 같은 transition 안의 업데이트는 같은 lane을 공유한다
  return claimNextTransitionLane();
}

// B. useDeferredValue 경로: 렌더 중에 deferred lane을 직접 잡는다
export function requestDeferredLane(): Lane {
  if (workInProgressDeferredLane === NoLane) {
    workInProgressDeferredLane = includesSomeLane(
      workInProgressRootRenderLanes,
      OffscreenLane,
    )
      ? OffscreenLane
      : claimNextTransitionLane();
  }
  return workInProgressDeferredLane;
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: TransitionDeferredContent = {
  hero: {
    badge: 'Scheduler · 5/10단계',
    title: { line1: '입력은 먼저 반영하고', line2: '무거운 화면은 뒤로 미룬다' },
    description:
      '같은 키 입력 하나가 두 개의 렌더를 만듭니다. 급한 쪽은 바로 그리고, 무거운 쪽은 낮은 lane으로 내려 보냅니다.',
    diagramBadge: 'two tracks',
    diagramCaption: 'one keystroke, two renders',
    inputLabel: '한 번의 입력',
    inputValue: "setQuery('react internals')",
    tracks: [
      {
        id: 'urgent',
        label: '입력창 갱신',
        caption: '타이핑한 글자가 바로 보여야 한다',
        lane: 'SyncLane',
        tone: 'emerald',
      },
      {
        id: 'deferred',
        label: '결과 목록 갱신',
        caption: '조금 늦어도 사용자는 모른다',
        lane: 'TransitionLane',
        tone: 'teal',
      },
    ],
  },
  apis: {
    badge: '01',
    eyebrow: 'two doors',
    title: '미루는 문이 두 개다',
    description:
      '둘 다 결과적으로 낮은 lane을 쓰지만, 무엇을 미루는지가 다릅니다. 하나는 업데이트를, 하나는 값을 미룹니다.',
    sides: [
      {
        id: 'transition',
        title: 'startTransition',
        badge: '업데이트를 미룬다',
        description: '어떤 setState를 낮은 우선순위로 보낼지 호출부에서 직접 지정합니다.',
        bullets: [
          '콜백 안에서 일어난 setState가 transition lane을 받는다',
          'isPending으로 진행 중 여부를 알 수 있다',
          '미룰 대상을 내가 고른다',
          '상태를 바꾸는 쪽 코드를 고쳐야 한다',
        ],
        tone: 'teal',
      },
      {
        id: 'deferred',
        title: 'useDeferredValue',
        badge: '값을 미룬다',
        description: '값을 받는 쪽에서 한 박자 늦게 따라오는 복사본을 만듭니다.',
        bullets: [
          '원래 값은 즉시 바뀌고 복사본만 늦게 따라온다',
          '늦은 복사본을 쓰는 컴포넌트만 나중에 그려진다',
          '상태를 바꾸는 쪽은 손대지 않는다',
          '값을 소비하는 쪽에서 선언한다',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: '미루는 것이\n업데이트냐 값이냐',
      sub: 'setState를 내가 통제할 수 있으면 startTransition, props로 받은 값이라 손댈 수 없으면 useDeferredValue가 맞습니다.',
    },
  },
  compare: {
    badge: '02',
    eyebrow: 'side by side',
    title: '같은 목적, 다른 자리',
    description:
      '어느 쪽을 쓸지는 취향이 아니라 코드 위치의 문제입니다. 상태를 만드는 쪽에 있는지 쓰는 쪽에 있는지로 갈립니다.',
    headers: ['비교 항목', 'startTransition', 'useDeferredValue'],
    rows: [
      {
        aspect: '미루는 대상',
        transition: '콜백 안에서 일어난 상태 업데이트',
        deferred: '값 하나의 복사본',
      },
      {
        aspect: '코드를 두는 곳',
        transition: '상태를 바꾸는 쪽',
        deferred: '값을 읽어 쓰는 쪽',
      },
      {
        aspect: 'lane을 받는 시점',
        transition: 'requestUpdateLane 안에서',
        deferred: '렌더 도중 requestDeferredLane에서',
      },
      {
        aspect: '진행 상태',
        transition: 'isPending을 함께 돌려준다',
        deferred: '현재 값과 복사본을 비교해 직접 판단',
      },
      {
        aspect: '쓰기 좋은 경우',
        transition: '내가 만든 상태를 내가 미루고 싶을 때',
        deferred: 'props로 받은 값이라 호출부를 못 고칠 때',
      },
    ],
    note: '내부에서는 둘 다 transition lane 계열을 씁니다. 그래서 체감 동작은 비슷하고, 선택 기준은 코드 구조입니다.',
  },
  timeline: {
    badge: '03',
    eyebrow: 'timeline',
    title: '키 하나가 만드는 두 번의 렌더',
    description:
      '미룬다는 것은 건너뛴다는 뜻이 아닙니다. 렌더가 두 번 일어나고, 그 사이에 화면이 한 번 그려집니다.',
    steps: [
      {
        id: 'keystroke',
        num: '01',
        title: '키 입력 발생',
        description: 'discrete 이벤트 문맥에서 setQuery와 낮은 우선순위 업데이트가 함께 걸립니다.',
        tone: 'sky',
      },
      {
        id: 'urgent-render',
        num: '02',
        title: '급한 lane만 먼저 렌더',
        description: '입력창은 새 값으로, 목록은 아직 이전 값으로 그려집니다.',
        tone: 'emerald',
      },
      {
        id: 'paint',
        num: '03',
        title: '화면에 커밋',
        description: '여기서 사용자는 타이핑이 즉시 반영됐다고 느낍니다.',
        tone: 'emerald',
      },
      {
        id: 'deferred-lane',
        num: '04',
        title: '낮은 lane 차례',
        description: '남아 있는 transition lane이 pendingLanes에 그대로 있습니다.',
        tone: 'amber',
      },
      {
        id: 'deferred-render',
        num: '05',
        title: '무거운 쪽 렌더',
        description:
          '목록이 새 값으로 다시 그려집니다. 중간에 또 입력이 오면 버려질 수도 있습니다.',
        tone: 'teal',
      },
    ],
    note: '05가 완료되기 전에 새 입력이 들어오면 그 렌더는 버려지고 다시 시작합니다. 그래서 빠른 타이핑에도 입력이 밀리지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'requestTransitionLane, requestDeferredLane, claimNextTransitionLane',
    whyLabel: '설명',
    why: '두 경로가 결국 같은 claimNextTransitionLane을 부른다는 점이, 체감 동작이 비슷한 이유를 설명합니다.',
    code: TRANSITION_LANE_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '받은 lane은 어디에 적히는가',
    description:
      '업데이트마다 lane이 정해졌습니다. 그 lane들이 root에 어떻게 모이고 지워지는지 다음 페이지에서 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/root-pending-work',
  },
};

const en: TransitionDeferredContent = {
  hero: {
    badge: 'Scheduler · 5/10',
    title: { line1: 'Show the typing at once', line2: 'and let the heavy screen wait' },
    description:
      'A single keystroke produces two renders. The urgent one paints immediately while the heavy one is sent down a lower lane.',
    diagramBadge: 'two tracks',
    diagramCaption: 'one keystroke, two renders',
    inputLabel: 'one keystroke',
    inputValue: "setQuery('react internals')",
    tracks: [
      {
        id: 'urgent',
        label: 'Update the input',
        caption: 'the typed character must appear now',
        lane: 'SyncLane',
        tone: 'emerald',
      },
      {
        id: 'deferred',
        label: 'Update the result list',
        caption: 'nobody notices if it arrives late',
        lane: 'TransitionLane',
        tone: 'teal',
      },
    ],
  },
  apis: {
    badge: '01',
    eyebrow: 'two doors',
    title: 'There are two doors to deferring',
    description:
      'Both end up on a lower lane, but they defer different things: one defers an update, the other defers a value.',
    sides: [
      {
        id: 'transition',
        title: 'startTransition',
        badge: 'defers an update',
        description: 'You mark, at the call site, which setState should drop to a lower priority.',
        bullets: [
          'setState calls inside the callback receive a transition lane',
          'isPending tells you whether it is still in flight',
          'You choose what gets deferred',
          'It requires editing the code that changes the state',
        ],
        tone: 'teal',
      },
      {
        id: 'deferred',
        title: 'useDeferredValue',
        badge: 'defers a value',
        description: 'The consuming side creates a copy that trails one beat behind.',
        bullets: [
          'The original changes at once; only the copy lags',
          'Only components reading the lagging copy render later',
          'The code that changes the state is untouched',
          'It is declared where the value is consumed',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'Deferring an update\nor deferring a value',
      sub: 'If you control the setState, startTransition fits. If the value arrives as a prop you cannot edit, useDeferredValue does.',
    },
  },
  compare: {
    badge: '02',
    eyebrow: 'side by side',
    title: 'Same goal, different seat',
    description:
      'Choosing between them is not taste but code position: whether you sit where state is produced or where it is consumed.',
    headers: ['Aspect', 'startTransition', 'useDeferredValue'],
    rows: [
      {
        aspect: 'What is deferred',
        transition: 'State updates made inside the callback',
        deferred: 'A copy of a single value',
      },
      {
        aspect: 'Where the code lives',
        transition: 'Where the state is changed',
        deferred: 'Where the value is read',
      },
      {
        aspect: 'When the lane is taken',
        transition: 'Inside requestUpdateLane',
        deferred: 'Mid-render, in requestDeferredLane',
      },
      {
        aspect: 'Progress signal',
        transition: 'Returns isPending alongside',
        deferred: 'Compare current value against the copy yourself',
      },
      {
        aspect: 'Best suited to',
        transition: 'Deferring state you created yourself',
        deferred: 'A prop whose call site you cannot edit',
      },
    ],
    note: 'Internally both ride the transition lane family. That is why they feel alike, and why the choice is structural.',
  },
  timeline: {
    badge: '03',
    eyebrow: 'timeline',
    title: 'Two renders from one key',
    description:
      'Deferring does not mean skipping. Two renders happen, with a paint in between them.',
    steps: [
      {
        id: 'keystroke',
        num: '01',
        title: 'The key is pressed',
        description:
          'In a discrete context, setQuery and a low-priority update are queued together.',
        tone: 'sky',
      },
      {
        id: 'urgent-render',
        num: '02',
        title: 'Only the urgent lane renders',
        description: 'The input shows the new value while the list still shows the old one.',
        tone: 'emerald',
      },
      {
        id: 'paint',
        num: '03',
        title: 'Commit to the screen',
        description: 'This is the moment the user feels the typing landed instantly.',
        tone: 'emerald',
      },
      {
        id: 'deferred-lane',
        num: '04',
        title: 'The low lane comes up',
        description: 'The remaining transition lane is still sitting in pendingLanes.',
        tone: 'amber',
      },
      {
        id: 'deferred-render',
        num: '05',
        title: 'The heavy side renders',
        description:
          'The list redraws with the new value — and may be thrown away if another key arrives.',
        tone: 'teal',
      },
    ],
    note: 'A new keystroke before 05 completes discards that render and restarts it, which is why fast typing never backs up.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'requestTransitionLane, requestDeferredLane, claimNextTransitionLane',
    whyLabel: 'Why',
    why: 'Both paths ending in the same claimNextTransitionLane explains why the two feel so similar in practice.',
    code: TRANSITION_LANE_CODE,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where the assigned lane gets written down',
    description:
      'Every update now has a lane. Next we watch those lanes gather on the root and get cleared again.',
    cta: 'Go to the next page',
    href: '/root-pending-work',
  },
};

export const transitionDeferredSplitContent: Record<Locale, TransitionDeferredContent> = {
  ko,
  en,
};
