import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PhaseId = 'visible' | 'hide' | 'keep' | 'restore';

export type HeroPhase = {
  id: PhaseId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type BehaviorId = 'display' | 'cleanup' | 'state' | 'priority';

export type BehaviorCard = {
  id: BehaviorId;
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type LifeStepId = 'using' | 'switch' | 'cleanup' | 'preserve' | 'back';

export type LifeStep = {
  id: LifeStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ModeRow = {
  topic: string;
  visible: string;
  hidden: string;
};

export type ActivityHiddenUiContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    phases: HeroPhase[];
  };
  versus: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    conditional: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    activity: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  behaviors: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: BehaviorCard[];
    note: string;
  };
  lifecycle: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: LifeStep[];
    note: string;
  };
  modes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: ModeRow[];
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

const KO_CODE = `// packages/react-reconciler/src/ReactFiberBeginWork.js
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  const nextProps = workInProgress.pendingProps;
  const nextChildren = nextProps.children;

  if (nextProps.mode === 'hidden') {
    if (!includesSomeLane(renderLanes, OffscreenLane)) {
      // 지금은 숨겨진 트리를 그리지 않는다.
      // 대신 "여기 할 일이 남아 있다"를 OffscreenLane으로만 적어 둔다.
      workInProgress.lanes = workInProgress.childLanes = laneToLanes(OffscreenLane);
      pushOffscreenSuspenseHandler(workInProgress);
      return null;                 // 자식으로 내려가지 않고 bailout
    }
  }

  // visible이거나 Offscreen 차례가 오면 평소처럼 자식을 조정한다
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}`;

const EN_CODE = `// packages/react-reconciler/src/ReactFiberBeginWork.js
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  const nextProps = workInProgress.pendingProps;
  const nextChildren = nextProps.children;

  if (nextProps.mode === 'hidden') {
    if (!includesSomeLane(renderLanes, OffscreenLane)) {
      // Do not paint the hidden tree right now.
      // Just note "there is work left here" as an OffscreenLane.
      workInProgress.lanes = workInProgress.childLanes = laneToLanes(OffscreenLane);
      pushOffscreenSuspenseHandler(workInProgress);
      return null;                 // bail out without descending into children
    }
  }

  // Visible, or the Offscreen turn has come: reconcile children as usual
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}`;

const BEGIN_WORK_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js';

const ko: ActivityHiddenUiContent = {
  hero: {
    badge: 'React 19 변화 · 8/10단계',
    title: { line1: '숨기는 것과 지우는 것은', line2: '지금까지 같은 문법이었다' },
    description:
      '조건부 렌더링은 숨김과 삭제를 구분하지 못했습니다. Activity는 그 둘을 다른 일로 나눈 첫 문법입니다.',
    diagramBadge: 'keep alive',
    diagramCaption: 'hidden but not unmounted',
    phases: [
      { id: 'visible', label: 'visible', caption: '평범하게 보이고 동작한다', tone: 'cyan' },
      { id: 'hide', label: 'hidden', caption: '화면에서 빠지고 effect가 정리된다', tone: 'violet' },
      { id: 'keep', label: 'state 보존', caption: 'Fiber와 state는 살아 있다', tone: 'teal' },
      {
        id: 'restore',
        label: 'visible',
        caption: '처음부터가 아니라 그 자리에서',
        tone: 'emerald',
      },
    ],
  },
  versus: {
    badge: '01',
    eyebrow: 'hide vs remove',
    title: '지금까지는 숨기려면 지워야 했다',
    description:
      '같은 토글이지만 결과가 완전히 다릅니다. 무엇이 남고 무엇이 사라지는지를 비교합니다.',
    conditional: {
      title: '조건부 렌더링',
      badge: '{isOpen && ...}',
      description: '숨김을 표현할 방법이 없어서, 안 보이게 하려면 트리에서 빼는 수밖에 없었습니다.',
      bullets: [
        'false가 되는 순간 언마운트되고 Fiber가 사라진다',
        '입력 중이던 값과 스크롤 위치 같은 state가 초기화된다',
        'effect의 cleanup이 돌고 다음에는 처음부터 다시 마운트된다',
        '다시 열 때 데이터 요청부터 렌더까지 전부 새로 한다',
      ],
    },
    bridge: {
      headline: '안 보이는 것과\n없는 것을 구분한다',
      sub: '트리에 남기되 화면에서 빼고 우선순위를 낮추는 세 번째 상태가 생겼습니다.',
    },
    activity: {
      title: 'Activity',
      badge: 'mode="hidden"',
      description: '보이지 않는 동안에도 Fiber와 state를 유지하면서 비용만 줄입니다.',
      bullets: [
        '언마운트되지 않으므로 state가 그대로 남는다',
        'effect는 정리되어 백그라운드 비용을 만들지 않는다',
        '숨겨진 subtree의 업데이트는 낮은 우선순위로 밀린다',
        '다시 보일 때 마운트가 아니라 재개에 가깝다',
      ],
    },
    note: '탭·모달·라우트 전환처럼 "잠시 가려 두는" UI가 이 문법의 대상입니다. 영영 사라지는 것은 여전히 조건부 렌더링입니다.',
  },
  behaviors: {
    badge: '02',
    eyebrow: 'four effects',
    title: 'hidden으로 바뀔 때 동시에 일어나는 네 가지',
    description: 'hidden은 CSS 한 줄이 아닙니다. 네 층이 한꺼번에 움직입니다.',
    cards: [
      {
        id: 'display',
        title: '화면에서 빠진다',
        description: 'DOM은 남지만 display: none이 걸려 레이아웃과 페인트에서 제외됩니다.',
        badge: 'display: none',
        tone: 'violet',
      },
      {
        id: 'cleanup',
        title: 'effect가 정리된다',
        description:
          'passive와 layout effect의 cleanup이 돕니다. 타이머나 구독이 뒤에서 돌지 않습니다.',
        badge: 'cleanup 실행',
        tone: 'amber',
      },
      {
        id: 'state',
        title: 'state는 남는다',
        description: 'Fiber가 살아 있으므로 useState 값도, ref도 그대로 보존됩니다.',
        badge: 'state 유지',
        tone: 'teal',
      },
      {
        id: 'priority',
        title: '우선순위가 내려간다',
        description: '숨겨진 subtree의 업데이트는 OffscreenLane으로 기록되어 나중에 처리됩니다.',
        badge: 'OffscreenLane',
        tone: 'indigo',
      },
    ],
    note: '두 번째와 세 번째가 짝입니다. effect는 끄고 state는 남기는 것이 Activity가 고른 절충입니다.',
  },
  lifecycle: {
    badge: '03',
    eyebrow: 'round trip',
    title: '숨겼다 다시 보이기까지 다섯 칸',
    description: '언마운트와 다른 점은 03과 04 사이입니다. 여기서 무엇이 남는지가 갈립니다.',
    steps: [
      {
        id: 'using',
        num: '01',
        title: '사용하는 동안 state가 쌓인다',
        description: '입력값·스크롤 위치·열어 둔 아코디언 같은 것이 Fiber에 쌓입니다.',
        tone: 'cyan',
      },
      {
        id: 'switch',
        num: '02',
        title: 'mode가 hidden으로 바뀐다',
        description: '커밋에서 display: none이 걸리고, 이 subtree는 화면에서 빠집니다.',
        tone: 'violet',
      },
      {
        id: 'cleanup',
        num: '03',
        title: 'effect만 정리된다',
        description:
          '언마운트가 아니라 effect cleanup입니다. 컴포넌트 함수가 버려지는 것이 아닙니다.',
        tone: 'amber',
      },
      {
        id: 'preserve',
        num: '04',
        title: 'Fiber와 state가 남는다',
        description:
          '숨겨진 채로 트리에 남아 있고, 그 사이 들어온 업데이트는 OffscreenLane에 쌓입니다.',
        tone: 'teal',
      },
      {
        id: 'back',
        num: '05',
        title: 'visible로 돌아오면 이어서 한다',
        description:
          'display가 풀리고 effect가 다시 붙습니다. 값은 처음부터가 아니라 그때 그대로입니다.',
        tone: 'emerald',
      },
    ],
    note: '03에서 cleanup이 돈다는 점을 기억해야 합니다. 구독을 다시 붙이는 비용은 여전히 들고, 아낀 것은 렌더와 state입니다.',
  },
  modes: {
    badge: '04',
    eyebrow: 'two modes',
    title: '두 모드에서 각 층이 어떻게 달라지는가',
    description: '모드를 바꾼다는 것이 실제로 무엇을 바꾸는지 한 표로 봅니다.',
    headers: ['구분', 'visible', 'hidden'],
    rows: [
      { topic: '화면 표시', visible: '보인다', hidden: 'display: none으로 빠진다' },
      { topic: 'DOM 노드', visible: '존재한다', hidden: '존재한다 - 지우지 않는다' },
      { topic: 'state와 ref', visible: '유지된다', hidden: '유지된다' },
      { topic: 'effect', visible: '붙어 있다', hidden: 'cleanup되어 비활성이다' },
      { topic: '업데이트 우선순위', visible: '평소와 같다', hidden: 'OffscreenLane으로 밀린다' },
      { topic: '언마운트', visible: '아니다', hidden: '아니다' },
    ],
    note: '마지막 두 줄이 조건부 렌더링과의 결정적 차이입니다. 언마운트가 아니기 때문에 우선순위라는 개념이 성립합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '숨긴 트리를 건너뛰는 그 분기',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: '볼 것',
    lookFor: 'updateOffscreenComponent',
    whyLabel: '설명',
    why: 'hidden이면 자식으로 내려가지 않고 OffscreenLane만 남기고 돌아섭니다. "나중에 하겠다"는 의사가 코드에 그대로 적혀 있습니다.',
    code: KO_CODE,
    primaryCta: 'ReactFiberBeginWork.js 소스 보기',
    primaryHref: BEGIN_WORK_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'Effect 안의 이벤트성 로직은 어디로 가야 할까',
    description: '같은 19.2 축에서 수명 이야기를 한 칸 더 들어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/use-effect-event-design',
  },
};

const en: ActivityHiddenUiContent = {
  hero: {
    badge: 'React 19 Changes · 8/10',
    title: { line1: 'Hiding and deleting have shared', line2: 'the same syntax until now' },
    description:
      'Conditional rendering could not tell hiding from removing. Activity is the first syntax that splits them apart.',
    diagramBadge: 'keep alive',
    diagramCaption: 'hidden but not unmounted',
    phases: [
      { id: 'visible', label: 'visible', caption: 'shown and working normally', tone: 'cyan' },
      {
        id: 'hide',
        label: 'hidden',
        caption: 'off screen, effects cleaned up',
        tone: 'violet',
      },
      { id: 'keep', label: 'state kept', caption: 'the Fiber and state survive', tone: 'teal' },
      {
        id: 'restore',
        label: 'visible',
        caption: 'resumed in place, not restarted',
        tone: 'emerald',
      },
    ],
  },
  versus: {
    badge: '01',
    eyebrow: 'hide vs remove',
    title: 'Until now, hiding meant deleting',
    description:
      'The same toggle, completely different outcomes. Compare what survives and what disappears.',
    conditional: {
      title: 'Conditional rendering',
      badge: '{isOpen && ...}',
      description:
        'With no way to express hiding, the only way to make something invisible was to take it out of the tree.',
      bullets: [
        'The moment it turns false the subtree unmounts and the Fiber is gone',
        'State such as a half-typed value or scroll position resets',
        'Effect cleanups run and next time it mounts from scratch',
        'Reopening redoes everything from the data request to the render',
      ],
    },
    bridge: {
      headline: 'Separate being invisible\nfrom being gone',
      sub: 'A third state appeared: stay in the tree, leave the screen and drop in priority.',
    },
    activity: {
      title: 'Activity',
      badge: 'mode="hidden"',
      description: 'It keeps the Fiber and state alive while invisible and only cuts the cost.',
      bullets: [
        'Nothing unmounts, so state stays exactly as it was',
        'Effects are cleaned up so nothing runs in the background',
        'Updates in the hidden subtree are pushed to a lower priority',
        'Coming back is closer to resuming than to mounting',
      ],
    },
    note: 'Tabs, modals and route transitions are what this syntax is for. Something gone for good is still conditional rendering.',
  },
  behaviors: {
    badge: '02',
    eyebrow: 'four effects',
    title: 'Four things that happen together on hidden',
    description: 'hidden is not one line of CSS. Four layers move at once.',
    cards: [
      {
        id: 'display',
        title: 'It leaves the screen',
        description: 'The DOM stays, but display: none takes it out of layout and paint.',
        badge: 'display: none',
        tone: 'violet',
      },
      {
        id: 'cleanup',
        title: 'Effects are cleaned up',
        description:
          'Passive and layout effect cleanups run, so timers and subscriptions stop in the background.',
        badge: 'cleanup runs',
        tone: 'amber',
      },
      {
        id: 'state',
        title: 'State survives',
        description: 'The Fiber is alive, so useState values and refs are preserved.',
        badge: 'state kept',
        tone: 'teal',
      },
      {
        id: 'priority',
        title: 'Priority drops',
        description:
          'Updates in the hidden subtree are recorded as an OffscreenLane and handled later.',
        badge: 'OffscreenLane',
        tone: 'indigo',
      },
    ],
    note: 'The second and third are a pair: turn effects off, keep state on. That is the trade Activity chose.',
  },
  lifecycle: {
    badge: '03',
    eyebrow: 'round trip',
    title: 'Five slots from hidden and back again',
    description:
      'What differs from unmounting sits between 03 and 04, where it is decided what survives.',
    steps: [
      {
        id: 'using',
        num: '01',
        title: 'State builds up while in use',
        description: 'Typed values, scroll positions and open accordions accumulate on the Fiber.',
        tone: 'cyan',
      },
      {
        id: 'switch',
        num: '02',
        title: 'mode flips to hidden',
        description: 'Commit applies display: none and the subtree leaves the screen.',
        tone: 'violet',
      },
      {
        id: 'cleanup',
        num: '03',
        title: 'Only effects are cleaned up',
        description:
          'This is effect cleanup, not unmount. The component function is not thrown away.',
        tone: 'amber',
      },
      {
        id: 'preserve',
        num: '04',
        title: 'The Fiber and state remain',
        description:
          'It stays in the tree hidden, and updates arriving meanwhile pile up on the OffscreenLane.',
        tone: 'teal',
      },
      {
        id: 'back',
        num: '05',
        title: 'Back to visible, it continues',
        description:
          'display is lifted and effects reattach. Values pick up where they were, not from scratch.',
        tone: 'emerald',
      },
    ],
    note: 'Remember that cleanup runs at 03. Re-subscribing still costs something; what you saved is the render and the state.',
  },
  modes: {
    badge: '04',
    eyebrow: 'two modes',
    title: 'How each layer differs between the two modes',
    description: 'One table for what flipping the mode actually changes.',
    headers: ['Topic', 'visible', 'hidden'],
    rows: [
      { topic: 'On screen', visible: 'Shown', hidden: 'Removed via display: none' },
      { topic: 'DOM node', visible: 'Exists', hidden: 'Exists - it is not deleted' },
      { topic: 'State and refs', visible: 'Kept', hidden: 'Kept' },
      { topic: 'Effects', visible: 'Attached', hidden: 'Cleaned up and inactive' },
      { topic: 'Update priority', visible: 'As usual', hidden: 'Pushed onto OffscreenLane' },
      { topic: 'Unmount', visible: 'No', hidden: 'No' },
    ],
    note: 'The last two rows are the decisive difference. Because nothing unmounts, priority becomes meaningful at all.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'The branch that skips a hidden tree',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: 'Look for',
    lookFor: 'updateOffscreenComponent',
    whyLabel: 'Why',
    why: 'When hidden, it turns back without descending and leaves only an OffscreenLane. The intent to do it later is written right into the code.',
    code: EN_CODE,
    primaryCta: 'View ReactFiberBeginWork.js',
    primaryHref: BEGIN_WORK_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'Where should event-like logic inside an Effect go',
    description: 'One more slot into lifetime, on the same 19.2 axis.',
    cta: 'Go to the next page',
    href: '/use-effect-event-design',
  },
};

export const activityHiddenUiContent: Record<Locale, ActivityHiddenUiContent> = { ko, en };
