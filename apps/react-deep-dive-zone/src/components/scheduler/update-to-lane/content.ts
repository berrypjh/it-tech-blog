import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ContextId = 'click' | 'transition' | 'render';

export type ContextCard = {
  id: ContextId;
  label: string;
  caption: string;
  lane: string;
  tone: ToneKey;
};

export type ResultRow = {
  context: string;
  code: string;
  lane: string;
  why: string;
};

export type BranchId = 'legacy' | 'render' | 'transition' | 'event';

export type Branch = {
  id: BranchId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type CarrierId = 'priority' | 'transition' | 'render-lanes';

export type Carrier = {
  id: CarrierId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type UpdateToLaneContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    call: string;
    contexts: ContextCard[];
  };
  results: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: ResultRow[];
    note: string;
  };
  branches: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Branch[];
    note: string;
  };
  carriers: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Carrier[];
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

const REQUEST_UPDATE_LANE_CODE = `export function requestUpdateLane(fiber: Fiber): Lane {
  // 1. legacy root이면 무조건 동기
  const mode = fiber.mode;
  if ((mode & ConcurrentMode) === NoMode) {
    return SyncLane;
  }

  // 2. 렌더 중에 들어온 업데이트면 지금 렌더 중인 lane을 재사용
  if (
    (executionContext & RenderContext) !== NoContext &&
    workInProgressRootRenderLanes !== NoLanes
  ) {
    return pickArbitraryLane(workInProgressRootRenderLanes);
  }

  // 3. transition 문맥이면 transition lane
  const transition = requestCurrentTransition();
  if (transition !== null) {
    return requestTransitionLane(transition);
  }

  // 4. 그 외에는 현재 이벤트 문맥을 lane으로 변환
  return eventPriorityToLane(resolveUpdatePriority());
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: UpdateToLaneContent = {
  hero: {
    badge: 'Scheduler · 4/10단계',
    title: { line1: '같은 setState 한 줄이', line2: '부르는 자리마다 다른 lane을 받는다' },
    description:
      'requestUpdateLane은 무엇을 바꾸는지 보지 않습니다. 지금 어떤 문맥에서 호출됐는지만 보고 lane을 정합니다.',
    diagramBadge: 'context → lane',
    diagramCaption: 'same call, different lane',
    callLabel: '똑같은 호출',
    call: "setTab('detail')",
    contexts: [
      {
        id: 'click',
        label: 'onClick 안에서',
        caption: 'discrete 이벤트 문맥',
        lane: 'SyncLane',
        tone: 'emerald',
      },
      {
        id: 'transition',
        label: 'startTransition 안에서',
        caption: 'transition 문맥',
        lane: 'TransitionLane',
        tone: 'teal',
      },
      {
        id: 'render',
        label: '렌더 도중',
        caption: '이미 렌더가 돌고 있는 상태',
        lane: '현재 render lane 재사용',
        tone: 'violet',
      },
    ],
  },
  results: {
    badge: '01',
    eyebrow: 'same call',
    title: '한 줄이 세 가지 결과로 갈린다',
    description:
      '아래 세 코드는 바꾸는 상태도 값도 같습니다. 다른 것은 호출된 위치뿐인데 배정되는 lane이 달라집니다.',
    headers: ['문맥', '코드', '받는 lane', '왜 그런가'],
    rows: [
      {
        context: '이벤트 핸들러',
        code: "onClick={() => setTab('detail')}",
        lane: 'SyncLane',
        why: '이벤트 wrapper가 discrete 문맥을 세워 둔 상태라 그 값이 그대로 lane이 됩니다.',
      },
      {
        context: 'startTransition',
        code: "startTransition(() => setTab('detail'))",
        lane: 'TransitionLane1~14 중 하나',
        why: '전환 문맥이 잡혀 있으면 이벤트 문맥보다 먼저 검사되어 transition lane으로 갑니다.',
      },
      {
        context: '렌더 도중',
        code: '컴포넌트 본문에서 setTab 호출',
        lane: '지금 렌더 중인 lane',
        why: '새 lane을 만들면 이번 렌더가 끝나지 않으므로, 돌고 있는 lane을 그대로 씁니다.',
      },
    ],
    note: '같은 상태를 바꾸는데 반응 속도가 다르게 느껴진다면, 대개 호출 위치가 달라진 것입니다.',
  },
  branches: {
    badge: '02',
    eyebrow: 'requestUpdateLane',
    title: '네 개의 검사가 차례로 지나간다',
    description:
      '함수 본문은 early return 네 개가 전부입니다. 위에 있을수록 먼저 걸리므로 순서 자체가 규칙입니다.',
    items: [
      {
        id: 'legacy',
        num: '01',
        title: 'legacy root인가',
        description:
          'ConcurrentMode가 아니면 더 볼 것 없이 SyncLane입니다. 옛 render API로 만든 앱이 여기 걸립니다.',
        tone: 'sky',
      },
      {
        id: 'render',
        num: '02',
        title: '렌더 중 업데이트인가',
        description:
          'executionContext가 RenderContext면 지금 렌더 중인 lane 하나를 골라 재사용합니다.',
        tone: 'violet',
      },
      {
        id: 'transition',
        num: '03',
        title: 'transition 문맥인가',
        description:
          'requestCurrentTransition이 null이 아니면 transition lane을 받아 옵니다. 이벤트 문맥보다 우선합니다.',
        tone: 'teal',
      },
      {
        id: 'event',
        num: '04',
        title: '그 외 일반 업데이트',
        description:
          '앞의 셋에 걸리지 않으면 현재 이벤트 문맥을 읽어 lane으로 바꿉니다. 대부분이 여기로 옵니다.',
        tone: 'amber',
      },
    ],
    note: '03이 04보다 위에 있다는 점이 중요합니다. 그래서 onClick 안에서 startTransition을 쓰면 transition 쪽이 이깁니다.',
  },
  carriers: {
    badge: '03',
    eyebrow: 'how context travels',
    title: '문맥은 인자가 아니라 모듈 변수로 온다',
    description:
      'requestUpdateLane이 받는 인자는 fiber 하나뿐입니다. 나머지 판단 재료는 전부 모듈 스코프에 놓여 있습니다.',
    items: [
      {
        id: 'priority',
        name: 'currentUpdatePriority',
        role: '이벤트 문맥',
        description:
          '이벤트 dispatch wrapper가 실행 직전에 세우고 끝나면 되돌리는 값입니다. 04 분기가 이것을 읽습니다.',
        tone: 'amber',
      },
      {
        id: 'transition',
        name: 'ReactSharedInternals.T',
        role: '전환 문맥',
        description:
          'startTransition이 콜백을 부르기 전에 채우고 끝나면 비웁니다. 03 분기가 이것을 봅니다.',
        tone: 'teal',
      },
      {
        id: 'render-lanes',
        name: 'workInProgressRootRenderLanes',
        role: '렌더 문맥',
        description:
          '렌더가 시작될 때 세팅되는 현재 렌더의 lane 집합입니다. 02 분기가 여기서 하나를 골라 씁니다.',
        tone: 'violet',
      },
    ],
    note: '문맥을 인자로 넘기지 않기 때문에 비동기 경계를 넘으면 문맥이 사라집니다. await 뒤의 setState가 다른 lane을 받는 이유입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'requestUpdateLane, requestCurrentTransition, pickArbitraryLane',
    whyLabel: '설명',
    why: '인자가 fiber 하나뿐인데 결과가 네 갈래로 갈린다는 점이, 판단 재료가 전부 바깥에 있다는 증거입니다.',
    code: REQUEST_UPDATE_LANE_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'transition은 왜 따로 취급되는가',
    description:
      '03 분기에서 갈라진 transition 쪽을 따라갑니다. useDeferredValue와는 또 어떻게 다른지도 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/transition-deferred-split',
  },
};

const en: UpdateToLaneContent = {
  hero: {
    badge: 'Scheduler · 4/10',
    title: { line1: 'The same setState line', line2: 'gets a different lane per call site' },
    description:
      'requestUpdateLane never looks at what you are changing. It looks only at the context the call happens in.',
    diagramBadge: 'context → lane',
    diagramCaption: 'same call, different lane',
    callLabel: 'the very same call',
    call: "setTab('detail')",
    contexts: [
      {
        id: 'click',
        label: 'Inside onClick',
        caption: 'a discrete event context',
        lane: 'SyncLane',
        tone: 'emerald',
      },
      {
        id: 'transition',
        label: 'Inside startTransition',
        caption: 'a transition context',
        lane: 'TransitionLane',
        tone: 'teal',
      },
      {
        id: 'render',
        label: 'During a render',
        caption: 'a render is already in flight',
        lane: 'reuses the current render lane',
        tone: 'violet',
      },
    ],
  },
  results: {
    badge: '01',
    eyebrow: 'same call',
    title: 'One line, three outcomes',
    description:
      'These three change the same state to the same value. Only the call site differs, and yet the assigned lane changes.',
    headers: ['Context', 'Code', 'Lane it gets', 'Why'],
    rows: [
      {
        context: 'Event handler',
        code: "onClick={() => setTab('detail')}",
        lane: 'SyncLane',
        why: 'The event wrapper has installed a discrete context, and that value becomes the lane directly.',
      },
      {
        context: 'startTransition',
        code: "startTransition(() => setTab('detail'))",
        lane: 'One of TransitionLane1–14',
        why: 'A transition context is checked before the event context, so it wins and yields a transition lane.',
      },
      {
        context: 'During a render',
        code: 'setTab called in the component body',
        lane: 'The lane currently rendering',
        why: 'A new lane would keep this render from finishing, so the in-flight lane is reused.',
      },
    ],
    note: 'When the same state change feels differently responsive, the call site has usually moved.',
  },
  branches: {
    badge: '02',
    eyebrow: 'requestUpdateLane',
    title: 'Four checks, taken in order',
    description:
      'The body is four early returns. Whatever sits higher is caught first, so the order is itself the rule.',
    items: [
      {
        id: 'legacy',
        num: '01',
        title: 'Is this a legacy root',
        description:
          'Without ConcurrentMode it is SyncLane and nothing else is examined. Apps on the old render API land here.',
        tone: 'sky',
      },
      {
        id: 'render',
        num: '02',
        title: 'Is this a render-phase update',
        description:
          'When executionContext is RenderContext, one of the currently rendering lanes is reused.',
        tone: 'violet',
      },
      {
        id: 'transition',
        num: '03',
        title: 'Is there a transition context',
        description:
          'If requestCurrentTransition is not null, a transition lane is taken. This outranks the event context.',
        tone: 'teal',
      },
      {
        id: 'event',
        num: '04',
        title: 'Everything else',
        description:
          'If none of the above match, the current event context is read and converted to a lane. Most updates arrive here.',
        tone: 'amber',
      },
    ],
    note: 'That 03 sits above 04 matters: using startTransition inside an onClick lets the transition side win.',
  },
  carriers: {
    badge: '03',
    eyebrow: 'how context travels',
    title: 'Context arrives as module state, not as an argument',
    description:
      'requestUpdateLane takes exactly one argument, the fiber. Everything else it decides on lives in module scope.',
    items: [
      {
        id: 'priority',
        name: 'currentUpdatePriority',
        role: 'Event context',
        description:
          'Set by the event dispatch wrapper just before running and restored afterwards. Branch 04 reads it.',
        tone: 'amber',
      },
      {
        id: 'transition',
        name: 'ReactSharedInternals.T',
        role: 'Transition context',
        description:
          'Filled by startTransition before invoking the callback and cleared after. Branch 03 checks it.',
        tone: 'teal',
      },
      {
        id: 'render-lanes',
        name: 'workInProgressRootRenderLanes',
        role: 'Render context',
        description:
          'The lane set of the render in flight, assigned when rendering starts. Branch 02 picks one from it.',
        tone: 'violet',
      },
    ],
    note: 'Because context is never passed as an argument, it disappears across an async boundary — which is why a setState after await gets a different lane.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'requestUpdateLane, requestCurrentTransition, pickArbitraryLane',
    whyLabel: 'Why',
    why: 'One argument in, four possible outcomes out — proof that everything it decides on lives outside the function.',
    code: REQUEST_UPDATE_LANE_CODE,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Why transitions get their own treatment',
    description:
      'Next we follow the transition branch from check 03, and see how useDeferredValue differs again.',
    cta: 'Go to the next page',
    href: '/transition-deferred-split',
  },
};

export const updateToLaneContent: Record<Locale, UpdateToLaneContent> = { ko, en };
