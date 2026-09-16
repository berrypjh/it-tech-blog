import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'html' | 'hydrate' | 'match' | 'attach';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type SideId = 'create' | 'hydrate';

export type Side = {
  id: SideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type StartStepId = 'call' | 'flag' | 'begin' | 'claim' | 'commit';

export type StartStep = {
  id: StartStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type StateRow = {
  name: string;
  meaning: string;
  effect: string;
};

export type HydrationStartContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [Side, Side];
    bridge: { headline: string; sub: string };
  };
  steps: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: StartStep[];
    note: string;
  };
  states: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: StateRow[];
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

const HYDRATION_CONTEXT_CODE = `// hydration은 모듈 변수 세 개로 상태를 들고 간다
let hydrationParentFiber: null | Fiber = null;
let nextHydratableInstance: null | HydratableInstance = null;
let isHydrating: boolean = false;

function enterHydrationState(fiber: Fiber): boolean {
  const parentInstance = fiber.stateNode.containerInfo;

  // 컨테이너의 첫 자식부터 대조를 시작한다
  nextHydratableInstance = getFirstHydratableChildWithinContainer(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function tryToClaimNextHydratableInstance(fiber: Fiber): void {
  if (!isHydrating) {
    return;
  }

  const nextInstance = nextHydratableInstance;
  if (!nextInstance) {
    // 붙일 DOM이 없다: 이 자리부터는 클라이언트가 새로 만든다
    throwOnHydrationMismatch(fiber);
    return;
  }

  // 이 Fiber가 이 DOM 노드를 자기 것으로 가져간다
  fiber.stateNode = nextInstance;
  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}`;

const HYDRATION_CONTEXT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHydrationContext.js';

const ko: HydrationStartContent = {
  hero: {
    badge: 'Suspense/Error · 7/10단계',
    title: { line1: 'hydration은 화면을 다시 그리지 않는다', line2: '있는 DOM에 Fiber를 붙인다' },
    description:
      '서버가 만든 HTML은 이미 화면에 있습니다. 클라이언트가 할 일은 그 DOM 노드 하나하나를 Fiber와 짝지어 주는 것입니다.',
    diagramBadge: 'hydration',
    diagramCaption: 'match, do not create',
    stages: [
      {
        id: 'html',
        label: '서버 HTML',
        caption: '이미 브라우저에 그려진 상태',
        tone: 'sky',
      },
      {
        id: 'hydrate',
        label: 'hydrateRoot',
        caption: 'isHydrating을 켜고 시작',
        tone: 'cyan',
      },
      {
        id: 'match',
        label: 'DOM ↔ Fiber 대조',
        caption: '트리를 내려가며 하나씩 짝짓기',
        tone: 'indigo',
      },
      {
        id: 'attach',
        label: 'stateNode 연결',
        caption: '이벤트와 상태가 붙어 살아난다',
        tone: 'emerald',
      },
    ],
  },
  compare: {
    badge: '01',
    eyebrow: 'two roots',
    title: 'createRoot와 무엇이 다른가',
    description:
      '두 함수 모두 Fiber 트리를 만듭니다. 다른 것은 DOM을 만들 것인가, 이미 있는 것을 가져갈 것인가입니다.',
    sides: [
      {
        id: 'create',
        title: 'createRoot',
        badge: 'DOM을 만든다',
        description: '빈 컨테이너에 처음부터 DOM을 생성해 넣습니다.',
        bullets: [
          'completeWork에서 document.createElement를 부른다',
          '컨테이너 안의 기존 내용은 무시된다',
          '첫 페인트까지 자바스크립트를 기다려야 한다',
          '불일치라는 개념 자체가 없다',
        ],
        tone: 'sky',
      },
      {
        id: 'hydrate',
        title: 'hydrateRoot',
        badge: 'DOM을 가져간다',
        description: '이미 있는 노드를 찾아 Fiber의 stateNode로 연결합니다.',
        bullets: [
          'createElement 대신 기존 노드를 claim한다',
          '서버 HTML과 다르면 mismatch가 발생한다',
          '내용은 이미 보이므로 첫 페인트가 빠르다',
          '연결 전까지는 클릭해도 반응하지 않는다',
        ],
        tone: 'cyan',
      },
    ],
    bridge: {
      headline: '만들 것인가\n가져갈 것인가',
      sub: '이 한 가지 차이가 mismatch라는 개념과 그 복구 경로를 통째로 만들어 냅니다.',
    },
  },
  steps: {
    badge: '02',
    eyebrow: 'how it starts',
    title: 'hydration이 켜지는 다섯 칸',
    description:
      'hydration은 별도 알고리즘이 아니라 평소 렌더에 스위치 하나가 더 붙은 것입니다. 그 스위치가 isHydrating입니다.',
    items: [
      {
        id: 'call',
        num: '01',
        title: 'hydrateRoot 호출',
        description: '컨테이너와 엘리먼트를 받아 root를 만들되 hydrate 플래그를 세웁니다.',
        tone: 'sky',
      },
      {
        id: 'flag',
        num: '02',
        title: 'root.hydrate = true',
        description: 'FiberRoot에 표시가 남아 이후 렌더가 hydration 모드로 돕니다.',
        tone: 'cyan',
      },
      {
        id: 'begin',
        num: '03',
        title: 'enterHydrationState',
        description: 'HostRoot의 beginWork에서 isHydrating을 켜고 첫 자식 노드를 잡습니다.',
        tone: 'indigo',
      },
      {
        id: 'claim',
        num: '04',
        title: 'Fiber마다 노드 claim',
        description:
          'HostComponent를 만날 때마다 nextHydratableInstance를 자기 stateNode로 가져갑니다.',
        tone: 'violet',
      },
      {
        id: 'commit',
        num: '05',
        title: '커밋에서 이벤트 연결',
        description: 'DOM은 그대로 두고 props와 이벤트만 붙여 인터랙티브해집니다.',
        tone: 'emerald',
      },
    ],
    note: '04에서 가져갈 노드가 없거나 타입이 다르면 그 자리에서 mismatch가 됩니다. 다음 페이지의 주제입니다.',
  },
  states: {
    badge: '03',
    eyebrow: 'module state',
    title: 'hydration이 들고 다니는 세 변수',
    description:
      '어디까지 짝을 맞췄는지는 인자가 아니라 모듈 변수에 남습니다. 디버깅할 때 이 셋을 보면 진행 상황이 보입니다.',
    headers: ['변수', '무엇을 담나', '언제 바뀌나'],
    rows: [
      {
        name: 'isHydrating',
        meaning: '지금 hydration 모드인지',
        effect: 'enterHydrationState에서 켜지고, mismatch나 완료 시 꺼집니다.',
      },
      {
        name: 'hydrationParentFiber',
        meaning: '지금 대조 중인 부모 Fiber',
        effect: '자식으로 내려갈 때마다 갱신되며, 형제 탐색의 기준이 됩니다.',
      },
      {
        name: 'nextHydratableInstance',
        meaning: '다음에 가져갈 DOM 노드',
        effect: 'claim에 성공할 때마다 그 노드의 첫 자식이나 형제로 옮겨 갑니다.',
      },
    ],
    note: 'isHydrating이 한 번 꺼지면 그 서브트리는 끝까지 클라이언트 렌더로 갑니다. 되돌아오지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHydrationContext.js',
    lookForLabel: '볼 것',
    lookFor: 'isHydrating, enterHydrationState, tryToClaimNextHydratableInstance',
    whyLabel: '설명',
    why: 'claim에 실패하면 곧바로 throwOnHydrationMismatch로 빠진다는 점이, 불일치가 예외 경로임을 보여 줍니다.',
    code: HYDRATION_CONTEXT_CODE,
    primaryCta: 'ReactFiberHydrationContext.js 읽기',
    primaryHref: HYDRATION_CONTEXT_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '짝이 맞지 않으면 어떻게 되나',
    description:
      'claim에 실패하는 순간부터가 mismatch입니다. 감지와 복구가 어떻게 이어지는지 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/mismatch-detect-recover',
  },
};

const HYDRATION_CONTEXT_CODE_EN = `// hydration carries its state in three module variables
let hydrationParentFiber: null | Fiber = null;
let nextHydratableInstance: null | HydratableInstance = null;
let isHydrating: boolean = false;

function enterHydrationState(fiber: Fiber): boolean {
  const parentInstance = fiber.stateNode.containerInfo;

  // start matching from the container first child
  nextHydratableInstance = getFirstHydratableChildWithinContainer(parentInstance);
  hydrationParentFiber = fiber;
  isHydrating = true;
  return true;
}

function tryToClaimNextHydratableInstance(fiber: Fiber): void {
  if (!isHydrating) {
    return;
  }

  const nextInstance = nextHydratableInstance;
  if (!nextInstance) {
    // nothing to attach to: the client builds from here on
    throwOnHydrationMismatch(fiber);
    return;
  }

  // this Fiber takes ownership of this DOM node
  fiber.stateNode = nextInstance;
  hydrationParentFiber = fiber;
  nextHydratableInstance = getFirstHydratableChild(nextInstance);
}`;

const en: HydrationStartContent = {
  hero: {
    badge: 'Suspense/Error · 7/10',
    title: {
      line1: 'Hydration does not redraw the screen',
      line2: 'it attaches Fibers to existing DOM',
    },
    description:
      'The HTML the server produced is already on screen. The client job is to pair each of those DOM nodes with a Fiber.',
    diagramBadge: 'hydration',
    diagramCaption: 'match, do not create',
    stages: [
      {
        id: 'html',
        label: 'Server HTML',
        caption: 'already painted in the browser',
        tone: 'sky',
      },
      {
        id: 'hydrate',
        label: 'hydrateRoot',
        caption: 'turns isHydrating on and begins',
        tone: 'cyan',
      },
      {
        id: 'match',
        label: 'Match DOM to Fiber',
        caption: 'walk down the tree pairing one by one',
        tone: 'indigo',
      },
      {
        id: 'attach',
        label: 'Assign stateNode',
        caption: 'events and state attach and it comes alive',
        tone: 'emerald',
      },
    ],
  },
  compare: {
    badge: '01',
    eyebrow: 'two roots',
    title: 'How it differs from createRoot',
    description:
      'Both build a Fiber tree. The difference is whether DOM gets created or claimed from what already exists.',
    sides: [
      {
        id: 'create',
        title: 'createRoot',
        badge: 'creates DOM',
        description: 'Builds DOM from scratch into an empty container.',
        bullets: [
          'completeWork calls document.createElement',
          'Existing content inside the container is ignored',
          'The first paint waits for JavaScript',
          'The concept of a mismatch does not exist',
        ],
        tone: 'sky',
      },
      {
        id: 'hydrate',
        title: 'hydrateRoot',
        badge: 'claims DOM',
        description: 'Finds existing nodes and links them as the Fiber stateNode.',
        bullets: [
          'Claims an existing node instead of calling createElement',
          'Differing from the server HTML produces a mismatch',
          'The content is already visible, so first paint is fast',
          'Clicks do nothing until the wiring completes',
        ],
        tone: 'cyan',
      },
    ],
    bridge: {
      headline: 'Create it\nor claim it',
      sub: 'That single difference is what creates the whole notion of a mismatch and its recovery path.',
    },
  },
  steps: {
    badge: '02',
    eyebrow: 'how it starts',
    title: 'Five stops to switch hydration on',
    description:
      'Hydration is not a separate algorithm but the ordinary render with one extra switch: isHydrating.',
    items: [
      {
        id: 'call',
        num: '01',
        title: 'hydrateRoot is called',
        description:
          'It takes a container and an element and builds a root with the hydrate flag set.',
        tone: 'sky',
      },
      {
        id: 'flag',
        num: '02',
        title: 'root.hydrate = true',
        description: 'The FiberRoot carries the mark so later renders run in hydration mode.',
        tone: 'cyan',
      },
      {
        id: 'begin',
        num: '03',
        title: 'enterHydrationState',
        description:
          'In the HostRoot beginWork, isHydrating turns on and the first child node is taken.',
        tone: 'indigo',
      },
      {
        id: 'claim',
        num: '04',
        title: 'Each Fiber claims a node',
        description: 'Every HostComponent takes nextHydratableInstance as its own stateNode.',
        tone: 'violet',
      },
      {
        id: 'commit',
        num: '05',
        title: 'Attach events at commit',
        description:
          'The DOM is left alone while props and events attach and it becomes interactive.',
        tone: 'emerald',
      },
    ],
    note: 'When step 04 finds no node, or a node of the wrong type, that spot becomes a mismatch — the next page subject.',
  },
  states: {
    badge: '03',
    eyebrow: 'module state',
    title: 'The three variables hydration carries',
    description:
      'How far matching has progressed lives in module variables rather than arguments. Inspect these three to see the progress.',
    headers: ['Variable', 'What it holds', 'When it changes'],
    rows: [
      {
        name: 'isHydrating',
        meaning: 'Whether hydration mode is active',
        effect: 'Turned on in enterHydrationState, turned off on a mismatch or on completion.',
      },
      {
        name: 'hydrationParentFiber',
        meaning: 'The parent Fiber currently matching',
        effect: 'Updated on every descent into children and used as the base for sibling search.',
      },
      {
        name: 'nextHydratableInstance',
        meaning: 'The next DOM node to claim',
        effect: 'Moves to that node first child or sibling after every successful claim.',
      },
    ],
    note: 'Once isHydrating turns off, that subtree stays on client rendering to the end. It never switches back.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHydrationContext.js',
    lookForLabel: 'Look for',
    lookFor: 'isHydrating, enterHydrationState, tryToClaimNextHydratableInstance',
    whyLabel: 'Why',
    why: 'A failed claim dropping straight into throwOnHydrationMismatch shows that mismatch is an exception path.',
    code: HYDRATION_CONTEXT_CODE_EN,
    primaryCta: 'Read ReactFiberHydrationContext.js',
    primaryHref: HYDRATION_CONTEXT_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What happens when the pairing fails',
    description:
      'A failed claim is exactly where a mismatch begins. Next: how detection leads into recovery.',
    cta: 'Go to the next page',
    href: '/mismatch-detect-recover',
  },
};

export const hydrationStartContent: Record<Locale, HydrationStartContent> = { ko, en };
