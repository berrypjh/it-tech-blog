import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type BranchId = 'suspense' | 'error' | 'hydration';

export type Branch = {
  id: BranchId;
  label: string;
  outcome: string;
  description: string;
  steps: string[];
  tone: ToneKey;
};

export type PathSideId = 'normal' | 'extended';

export type PathSide = {
  id: PathSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type CompareRow = {
  aspect: string;
  suspense: string;
  error: string;
  hydration: string;
};

export type WhyFailableRenderContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    rootLabel: string;
    rootCaption: string;
    branches: Branch[];
  };
  paths: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [PathSide, PathSide];
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
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: CompareRow[];
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

const THROW_EXCEPTION_CODE = `function throwException(
  root, returnFiber, sourceFiber, value, rootRenderLanes,
) {
  // 이 Fiber는 일단 실패로 표시한다
  sourceFiber.flags |= Incomplete;

  if (
    value !== null &&
    typeof value === 'object' &&
    typeof value.then === 'function'
  ) {
    // A. 던져진 것이 thenable이면 Suspense 경로
    const wakeable: Wakeable = value;
    markSuspenseBoundaryShouldCapture(
      suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes,
    );
    return false;
  }

  // B. 그 외에는 Error 경로: 위로 올라가며 Error Boundary를 찾는다
  let workInProgress = returnFiber;
  do {
    if (workInProgress.tag === ClassComponent) {
      const ctor = workInProgress.type;
      const instance = workInProgress.stateNode;
      if (
        typeof ctor.getDerivedStateFromError === 'function' ||
        typeof instance.componentDidCatch === 'function'
      ) {
        const update = createClassErrorUpdate(rootRenderLanes);
        enqueueCapturedUpdate(workInProgress, update);
        return false;
      }
    }
    workInProgress = workInProgress.return;
  } while (workInProgress !== null);

  return false;
}`;

const REACT_FIBER_THROW_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const KO_BRANCHES: Branch[] = [
  {
    id: 'suspense',
    label: 'Promise가 던져졌다',
    outcome: 'Suspense fallback',
    description: '아직 없는 데이터를 읽으려 했습니다. 준비될 때까지 이 구역만 대기시킵니다.',
    steps: ['use(promise) 호출', 'thenable 감지', '가장 가까운 Suspense 탐색', 'fallback 표시'],
    tone: 'violet',
  },
  {
    id: 'error',
    label: 'Error가 던져졌다',
    outcome: 'Error Boundary fallback',
    description: '렌더 도중 예외가 났습니다. 앱 전체가 아니라 그 구역만 잘라 냅니다.',
    steps: ['throw Error', 'Error Boundary 탐색', 'captured update 생성', 'fallback 렌더'],
    tone: 'amber',
  },
  {
    id: 'hydration',
    label: 'DOM이 예상과 다르다',
    outcome: 'Client Recovery',
    description: '서버 HTML과 클라이언트 결과가 어긋났습니다. 그 부분만 다시 그립니다.',
    steps: ['hydrateRoot 시작', 'DOM과 Fiber 대조', 'mismatch 감지', '해당 구역 재생성'],
    tone: 'cyan',
  },
];

const EN_BRANCHES: Branch[] = [
  {
    id: 'suspense',
    label: 'A Promise was thrown',
    outcome: 'Suspense fallback',
    description: 'Something read data that does not exist yet, so only this region waits.',
    steps: [
      'use(promise) is called',
      'thenable detected',
      'Find nearest Suspense',
      'Show fallback',
    ],
    tone: 'violet',
  },
  {
    id: 'error',
    label: 'An Error was thrown',
    outcome: 'Error Boundary fallback',
    description: 'An exception happened mid-render, so only that region is cut off — not the app.',
    steps: ['throw Error', 'Find Error Boundary', 'Create captured update', 'Render fallback'],
    tone: 'amber',
  },
  {
    id: 'hydration',
    label: 'The DOM differs from expectation',
    outcome: 'Client Recovery',
    description: 'Server HTML and the client result disagree, so just that part is redrawn.',
    steps: ['hydrateRoot begins', 'Match DOM against Fiber', 'Mismatch detected', 'Rebuild region'],
    tone: 'cyan',
  },
];

const ko: WhyFailableRenderContent = {
  hero: {
    badge: 'Suspense/Error · 1/10단계',
    title: { line1: '렌더가 항상 성공한다는 가정은', line2: '현실과 맞지 않는다' },
    description:
      '데이터는 늦게 오고 코드는 던지고 서버 HTML은 어긋납니다. React는 이 셋을 예외가 아니라 렌더 모델의 일부로 다룹니다.',
    diagramBadge: 'three branches',
    diagramCaption: 'render can fail',
    rootLabel: 'Render Phase',
    rootCaption: '컴포넌트를 실행하는 중',
    branches: KO_BRANCHES,
  },
  paths: {
    badge: '01',
    eyebrow: 'two paths',
    title: '지금까지 본 것은 성공 경로뿐이다',
    description:
      '앞 챕터들이 다룬 흐름은 전부 "모든 것이 준비되어 있을 때"의 경로였습니다. 이 챕터는 그렇지 않을 때를 봅니다.',
    sides: [
      {
        id: 'normal',
        title: '정상 경로',
        badge: '지금까지',
        description: '한 번의 렌더로 트리를 다 만들고 커밋합니다.',
        bullets: [
          'JSX에서 Element로, Element에서 Fiber로',
          'Render Phase가 끝까지 돌아 트리를 완성한다',
          'Commit Phase가 DOM에 반영한다',
          '중간에 멈출 일이 없다고 가정한다',
        ],
        tone: 'sky',
      },
      {
        id: 'extended',
        title: '확장 경로',
        badge: '이 챕터',
        description: '렌더 도중 무언가 던져지면 그 자리에서 갈라집니다.',
        bullets: [
          '데이터가 없으면 그 구역만 대기시킨다',
          '예외가 나면 그 구역만 잘라 낸다',
          '서버 HTML이 어긋나면 그 부분만 다시 만든다',
          '준비되면 다시 시도해 이어서 완성한다',
        ],
        tone: 'violet',
      },
    ],
    note: '확장 경로는 별도 시스템이 아닙니다. 같은 Render Phase 안에서 던져진 값의 종류로 갈릴 뿐입니다.',
  },
  branches: {
    badge: '02',
    eyebrow: 'three branches',
    title: '렌더가 멈추는 세 가지 이유',
    description:
      '원인은 다르지만 대응 모양은 같습니다. 문제가 난 구역만 격리하고, 나머지 화면은 그대로 둡니다.',
    items: KO_BRANCHES,
    note: '세 경우 모두 화면 전체를 버리지 않습니다. 격리 범위를 개발자가 경계 컴포넌트로 정할 수 있다는 점이 핵심입니다.',
  },
  compare: {
    badge: '03',
    eyebrow: 'side by side',
    title: '세 경로가 다루는 것과 다루지 않는 것',
    description:
      '이름이 비슷해 섞이기 쉽지만 트리거도 대응도 다릅니다. 어떤 문제를 만났을 때 어느 쪽을 봐야 하는지가 여기서 갈립니다.',
    headers: ['구분', 'Suspense', 'Error Boundary', 'Hydration'],
    rows: [
      {
        aspect: '무엇이 트리거인가',
        suspense: 'thenable(Promise)을 던짐',
        error: '일반 값을 throw',
        hydration: 'DOM과 Fiber 대조 중 불일치',
      },
      {
        aspect: '어디서 잡히나',
        suspense: '가장 가까운 Suspense 경계',
        error: '가장 가까운 Error Boundary',
        hydration: 'hydration 중인 그 서브트리',
      },
      {
        aspect: '무엇을 보여 주나',
        suspense: 'fallback을 보여 주고 기다린다',
        error: 'fallback으로 갈아 끼운다',
        hydration: '클라이언트가 다시 그린 결과',
      },
      {
        aspect: '다시 시도하나',
        suspense: '예. Promise가 풀리면 자동 재시도',
        error: '아니오. 개발자가 리셋해야 한다',
        hydration: '예. 그 구역만 클라이언트 렌더로',
      },
      {
        aspect: '지키려는 것',
        suspense: '기다리는 동안의 화면 안정성',
        error: '실패의 전파 범위 제한',
        hydration: '서버와 클라이언트의 일치',
      },
    ],
    note: '네 번째 줄이 가장 큰 차이입니다. Suspense는 자동으로 다시 하고, Error Boundary는 스스로 풀리지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: '볼 것',
    lookFor: 'throwException, typeof value.then, markSuspenseBoundaryShouldCapture',
    whyLabel: '설명',
    why: '한 함수 안에서 thenable인지만 보고 Suspense와 Error가 갈린다는 점이 이 챕터 전체의 뼈대입니다.',
    code: THROW_EXCEPTION_CODE,
    primaryCta: 'ReactFiberThrow.js 읽기',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Promise를 던진다는 것의 실제',
    description:
      'use(promise)가 무엇을 던지고 React가 그것을 어떻게 알아보는지, 첫 갈래부터 따라갑니다.',
    cta: '다음 페이지로 이동',
    href: '/use-promise-suspend',
  },
};

const THROW_EXCEPTION_CODE_EN = `function throwException(
  root, returnFiber, sourceFiber, value, rootRenderLanes,
) {
  // mark this Fiber as incomplete for now
  sourceFiber.flags |= Incomplete;

  if (
    value !== null &&
    typeof value === 'object' &&
    typeof value.then === 'function'
  ) {
    // A. a thenable was thrown, so take the Suspense path
    const wakeable: Wakeable = value;
    markSuspenseBoundaryShouldCapture(
      suspenseBoundary, returnFiber, sourceFiber, root, rootRenderLanes,
    );
    return false;
  }

  // B. otherwise take the Error path: climb up looking for an Error Boundary
  let workInProgress = returnFiber;
  do {
    if (workInProgress.tag === ClassComponent) {
      const ctor = workInProgress.type;
      const instance = workInProgress.stateNode;
      if (
        typeof ctor.getDerivedStateFromError === 'function' ||
        typeof instance.componentDidCatch === 'function'
      ) {
        const update = createClassErrorUpdate(rootRenderLanes);
        enqueueCapturedUpdate(workInProgress, update);
        return false;
      }
    }
    workInProgress = workInProgress.return;
  } while (workInProgress !== null);

  return false;
}`;

const en: WhyFailableRenderContent = {
  hero: {
    badge: 'Suspense/Error · 1/10',
    title: { line1: 'Assuming a render always succeeds', line2: 'does not match reality' },
    description:
      'Data arrives late, code throws, server HTML disagrees. React treats all three as part of the render model rather than as exceptions.',
    diagramBadge: 'three branches',
    diagramCaption: 'render can fail',
    rootLabel: 'Render Phase',
    rootCaption: 'running your components',
    branches: EN_BRANCHES,
  },
  paths: {
    badge: '01',
    eyebrow: 'two paths',
    title: 'Everything so far was the happy path',
    description:
      'Earlier chapters followed the flow for when everything is ready. This chapter looks at when it is not.',
    sides: [
      {
        id: 'normal',
        title: 'The normal path',
        badge: 'so far',
        description: 'One render builds the whole tree and commits it.',
        bullets: [
          'JSX to Element, Element to Fiber',
          'The render phase runs to the end and completes the tree',
          'The commit phase writes it to the DOM',
          'It assumes nothing will stop halfway',
        ],
        tone: 'sky',
      },
      {
        id: 'extended',
        title: 'The extended path',
        badge: 'this chapter',
        description: 'When something is thrown mid-render, the flow forks right there.',
        bullets: [
          'Missing data suspends only that region',
          'An exception cuts off only that region',
          'Mismatched server HTML rebuilds only that part',
          'Once ready, it retries and finishes the job',
        ],
        tone: 'violet',
      },
    ],
    note: 'The extended path is not a separate system. It is the same render phase, forking on what kind of value was thrown.',
  },
  branches: {
    badge: '02',
    eyebrow: 'three branches',
    title: 'Three reasons a render stops',
    description:
      'The causes differ but the response has the same shape: isolate the affected region and leave the rest of the screen alone.',
    items: EN_BRANCHES,
    note: 'None of the three discards the whole screen. That the developer chooses the isolation scope with boundary components is the point.',
  },
  compare: {
    badge: '03',
    eyebrow: 'side by side',
    title: 'What each path covers, and what it does not',
    description:
      'They blur together by name, yet triggers and responses differ. Which one to look at for a given symptom follows from this.',
    headers: ['Aspect', 'Suspense', 'Error Boundary', 'Hydration'],
    rows: [
      {
        aspect: 'What triggers it',
        suspense: 'A thenable (Promise) is thrown',
        error: 'An ordinary value is thrown',
        hydration: 'A mismatch while matching DOM to Fiber',
      },
      {
        aspect: 'Where it is caught',
        suspense: 'The nearest Suspense boundary',
        error: 'The nearest Error Boundary',
        hydration: 'The subtree being hydrated',
      },
      {
        aspect: 'What it shows',
        suspense: 'Shows a fallback and waits',
        error: 'Swaps in a fallback',
        hydration: 'Whatever the client re-renders',
      },
      {
        aspect: 'Does it retry',
        suspense: 'Yes — automatically once the Promise settles',
        error: 'No — you have to reset it yourself',
        hydration: 'Yes — that region falls back to client rendering',
      },
      {
        aspect: 'What it protects',
        suspense: 'Screen stability while waiting',
        error: 'How far a failure can spread',
        hydration: 'Agreement between server and client',
      },
    ],
    note: 'The fourth row is the biggest difference: Suspense retries on its own, while an Error Boundary never clears itself.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: 'Look for',
    lookFor: 'throwException, typeof value.then, markSuspenseBoundaryShouldCapture',
    whyLabel: 'Why',
    why: 'Suspense and Error forking on a single thenable check inside one function is the spine of this whole chapter.',
    code: THROW_EXCEPTION_CODE_EN,
    primaryCta: 'Read ReactFiberThrow.js',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What throwing a Promise really means',
    description:
      'Next we follow the first branch: what use(promise) throws, and how React recognises it.',
    cta: 'Go to the next page',
    href: '/use-promise-suspend',
  },
};

export const whyFailableRenderContent: Record<Locale, WhyFailableRenderContent> = { ko, en };
