import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PropKind = 'capture' | 'bubble' | 'none';

export type FiberNode = {
  id: string;
  name: string;
  depth: number;
  prop: string;
  propKind: PropKind;
};

export type WalkStepId = 'start' | 'read-prop' | 'push' | 'reverse';

export type WalkStep = {
  id: WalkStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type PhasePanel = {
  label: string;
  caption: string;
  propName: string;
  order: string[];
};

export type OrderRow = {
  step: string;
  phase: string;
  handler: string;
  fiber: string;
};

export type AccumulateListenersContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    treeLabel: string;
    nodes: FiberNode[];
    tailLabel: string;
  };
  walk: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: WalkStep[];
    note: string;
  };
  phases: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    capture: PhasePanel;
    bubble: PhasePanel;
    note: string;
  };
  order: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: OrderRow[];
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

const ACCUMULATE_CODE = `export function accumulateSinglePhaseListeners(
  targetFiber, reactName, nativeEventType, inCapturePhase, accumulateTargetOnly,
) {
  const captureName = reactName !== null ? reactName + 'Capture' : null;
  const reactEventName = inCapturePhase ? captureName : reactName;
  const listeners = [];

  let instance = targetFiber;

  while (instance !== null) {
    const { stateNode, tag } = instance;

    if (tag === HostComponent && stateNode !== null) {
      const listener = getListener(instance, reactEventName);

      if (listener != null) {
        listeners.push(createDispatchListener(instance, listener, stateNode));
      }
    }

    if (accumulateTargetOnly) {
      break;
    }

    instance = instance.return;
  }

  return listeners;
}`;

const DOM_PLUGIN_EVENT_SYSTEM_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js';

const KO_NODES: FiberNode[] = [
  { id: 'section', name: 'Section Fiber', depth: 0, prop: 'onClickCapture', propKind: 'capture' },
  { id: 'div', name: 'Div Fiber', depth: 1, prop: 'onClick', propKind: 'bubble' },
  { id: 'button', name: 'Button Fiber', depth: 2, prop: 'onClick', propKind: 'bubble' },
];

const ko: AccumulateListenersContent = {
  hero: {
    badge: '이벤트 시스템 · 8/10단계',
    title: { line1: '리스너는 DOM이 아니라', line2: 'Fiber 경로에서 모은다' },
    description:
      '클릭된 Fiber에서 시작해 return 포인터를 타고 루트까지 한 번 올라갑니다. 그 길에서 만난 핸들러가 실행 대상입니다.',
    diagramBadge: 'accumulate',
    diagramCaption: 'target → return → root',
    treeLabel: 'Fiber 트리',
    nodes: KO_NODES,
    tailLabel: 'target Fiber에서 위로 올라가며 수집',
  },
  walk: {
    badge: '01',
    eyebrow: 'accumulateSinglePhaseListeners',
    title: '한 번만 올라가며 모은다',
    description:
      '트리를 두 번 훑지 않습니다. target에서 루트까지 한 번 올라가며 담고, capture일 때만 마지막에 뒤집습니다.',
    steps: [
      {
        id: 'start',
        badge: 'step 1',
        title: 'target Fiber에서 시작',
        body: '앞 페이지에서 찾아 둔 Fiber가 출발점입니다.',
        tone: 'sky',
      },
      {
        id: 'read-prop',
        badge: 'step 2',
        title: 'prop 이름을 골라 읽는다',
        body: 'capture 단계면 onClickCapture를, bubble 단계면 onClick을 찾습니다.',
        tone: 'violet',
      },
      {
        id: 'push',
        badge: 'step 3',
        title: '있으면 배열에 담는다',
        body: 'HostComponent이면서 그 prop이 함수일 때만 목록에 넣습니다.',
        tone: 'indigo',
      },
      {
        id: 'reverse',
        badge: 'step 4',
        title: 'return으로 한 칸 위로',
        body: '루트에 닿을 때까지 반복합니다. 결과는 자식에서 부모 순서로 쌓입니다.',
        tone: 'emerald',
      },
    ],
    note: 'HostComponent만 본다는 점이 중요합니다. 함수 컴포넌트 Fiber에는 DOM prop이 없으므로 건너뜁니다.',
  },
  phases: {
    badge: '02',
    eyebrow: 'capture vs bubble',
    title: '같은 방향으로 모으고, 실행에서 갈린다',
    description:
      '수집은 둘 다 자식에서 부모로 올라가며 합니다. 방향이 갈리는 것은 실행할 때입니다.',
    capture: {
      label: 'capture 단계',
      caption: '모은 뒤 역순으로 실행합니다. 부모가 먼저 반응합니다.',
      propName: 'onClickCapture',
      order: ['Section (부모)', 'Div', 'Button (target)'],
    },
    bubble: {
      label: 'bubble 단계',
      caption: '모은 순서 그대로 실행합니다. target이 먼저 반응합니다.',
      propName: 'onClick',
      order: ['Button (target)', 'Div', 'Section (부모)'],
    },
    note: '수집 자체는 한 방향뿐이라 순회 비용이 절반입니다. 방향 차이는 실행 루프의 반복 방향으로만 처리합니다.',
  },
  order: {
    badge: '03',
    eyebrow: 'example',
    title: '예제에서 실제로 불리는 순서',
    description:
      'section에 onClickCapture, div와 button에 onClick이 있을 때 button을 클릭하면 이 순서로 실행됩니다.',
    headers: ['순서', '단계', '실행되는 핸들러', '어느 Fiber'],
    rows: [
      {
        step: '1',
        phase: 'capture',
        handler: 'handleSectionCapture',
        fiber: 'Section Fiber',
      },
      {
        step: '2',
        phase: 'bubble',
        handler: 'handleButtonClick',
        fiber: 'Button Fiber (target)',
      },
      {
        step: '3',
        phase: 'bubble',
        handler: 'handleDivClick',
        fiber: 'Div Fiber',
      },
    ],
    note: 'button의 onClick에서 e.stopPropagation()을 부르면 3번이 실행되지 않습니다. 1번은 이미 끝났으므로 되돌아가지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: '볼 것',
    lookFor: 'accumulateSinglePhaseListeners, getListener, instance.return',
    whyLabel: '설명',
    why: 'while 루프가 instance.return을 따라간다는 점이, 수집 기준이 DOM 부모가 아니라 Fiber 부모라는 증거입니다.',
    code: ACCUMULATE_CODE,
    primaryCta: 'DOMPluginEventSystem.js 읽기',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '모아 둔 목록은 어떻게 실행되는가',
    description:
      'capture를 뒤집고 stopPropagation을 확인하는 실행 루프를 다음 페이지에서 직접 읽습니다.',
    cta: '다음 페이지로 이동',
    href: '/dispatch-queue',
  },
};

const EN_NODES: FiberNode[] = [
  { id: 'section', name: 'Section Fiber', depth: 0, prop: 'onClickCapture', propKind: 'capture' },
  { id: 'div', name: 'Div Fiber', depth: 1, prop: 'onClick', propKind: 'bubble' },
  { id: 'button', name: 'Button Fiber', depth: 2, prop: 'onClick', propKind: 'bubble' },
];

const en: AccumulateListenersContent = {
  hero: {
    badge: 'Event System · 8/10',
    title: { line1: 'Listeners are gathered from Fibers', line2: 'never from the DOM' },
    description:
      'Starting at the clicked Fiber, React climbs return pointers to the root exactly once. Handlers met along that path are what will run.',
    diagramBadge: 'accumulate',
    diagramCaption: 'target → return → root',
    treeLabel: 'Fiber tree',
    nodes: EN_NODES,
    tailLabel: 'collected upward from the target Fiber',
  },
  walk: {
    badge: '01',
    eyebrow: 'accumulateSinglePhaseListeners',
    title: 'One climb, gathering as it goes',
    description:
      'The tree is not walked twice. React climbs once from target to root collecting handlers, and only reverses at the end for capture.',
    steps: [
      {
        id: 'start',
        badge: 'step 1',
        title: 'Start at the target Fiber',
        body: 'The Fiber located on the previous page is the starting point.',
        tone: 'sky',
      },
      {
        id: 'read-prop',
        badge: 'step 2',
        title: 'Pick which prop to read',
        body: 'onClickCapture in the capture phase, onClick in the bubble phase.',
        tone: 'violet',
      },
      {
        id: 'push',
        badge: 'step 3',
        title: 'Push it when present',
        body: 'Only added when the Fiber is a HostComponent and that prop is a function.',
        tone: 'indigo',
      },
      {
        id: 'reverse',
        badge: 'step 4',
        title: 'Move up through return',
        body: 'Repeat until the root. The result stacks child-first, parent-last.',
        tone: 'emerald',
      },
    ],
    note: 'Only HostComponents are inspected. Function component Fibers hold no DOM props, so they are skipped.',
  },
  phases: {
    badge: '02',
    eyebrow: 'capture vs bubble',
    title: 'Same collection order, different execution',
    description:
      'Both phases collect by climbing from child to parent. The direction only diverges at execution time.',
    capture: {
      label: 'Capture phase',
      caption: 'Collected, then run in reverse — the parent reacts first.',
      propName: 'onClickCapture',
      order: ['Section (parent)', 'Div', 'Button (target)'],
    },
    bubble: {
      label: 'Bubble phase',
      caption: 'Run in the order collected — the target reacts first.',
      propName: 'onClick',
      order: ['Button (target)', 'Div', 'Section (parent)'],
    },
    note: 'Because collection runs in one direction only, traversal cost is halved. Direction is handled purely by the execution loop.',
  },
  order: {
    badge: '03',
    eyebrow: 'example',
    title: 'The order that actually fires',
    description:
      'With onClickCapture on section and onClick on div and button, clicking the button runs them in this order.',
    headers: ['Order', 'Phase', 'Handler that runs', 'Which Fiber'],
    rows: [
      {
        step: '1',
        phase: 'capture',
        handler: 'handleSectionCapture',
        fiber: 'Section Fiber',
      },
      {
        step: '2',
        phase: 'bubble',
        handler: 'handleButtonClick',
        fiber: 'Button Fiber (target)',
      },
      {
        step: '3',
        phase: 'bubble',
        handler: 'handleDivClick',
        fiber: 'Div Fiber',
      },
    ],
    note: 'Calling e.stopPropagation() in the button onClick removes step 3. Step 1 already ran and is never undone.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: 'Look for',
    lookFor: 'accumulateSinglePhaseListeners, getListener, instance.return',
    whyLabel: 'Why',
    why: 'The while loop following instance.return proves the climb tracks Fiber parents rather than DOM parents.',
    code: ACCUMULATE_CODE,
    primaryCta: 'Read DOMPluginEventSystem.js',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How the gathered list gets executed',
    description:
      'Next we read the loop that reverses capture and checks stopPropagation before each listener.',
    cta: 'Go to the next page',
    href: '/dispatch-queue',
  },
};

export const accumulateListenersContent: Record<Locale, AccumulateListenersContent> = { ko, en };
