import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FiberTagItem = {
  /** id 매칭용 (소문자/케밥) */
  id: string;
  title: string;
  description: string;
  /** Fiber tag별 update 함수 이름 */
  updateFn?: string;
  /** 자세한 우측 설명 */
  detail?: string;
  tone: ToneKey;
  icon: 'function' | 'cube' | 'home' | 'code' | 'fragment' | 'suspense' | 'other';
};

export type RoleCard = {
  number: number;
  title: string;
  description: string;
  tone: ToneKey;
  icon: 'checklist' | 'branch' | 'tree';
};

export type ReconcileStep = {
  id: string;
  title: string;
  description: string;
  sideExplanation: string;
  tone: ToneKey;
  icon: 'start' | 'branch' | 'compute' | 'reconcile' | 'return';
};

export type BeginWorkContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      center: { title: string; subtitle: string };
      branches: FiberTagItem[];
    };
  };
  roles: {
    eyebrow: string;
    title: string;
    cards: RoleCard[];
  };
  tagBranch: {
    eyebrow: string;
    title: string;
    description: string;
    rootTitle: string;
    rootSubtitle: string;
    branches: FiberTagItem[];
  };
  bailout: {
    eyebrow: string;
    title: string;
    intro: string;
    normal: {
      title: string;
      items: string[];
      description: string;
    };
    bailout: {
      title: string;
      items: string[];
      description: string;
    };
    emphasis: string;
  };
  reconcile: {
    eyebrow: string;
    title: string;
    steps: ReconcileStep[];
  };
  code: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    fileName: string;
    functionsLabel: string;
    functions: string[];
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
  };
  summary: {
    eyebrow: string;
    title: string;
    start: string;
    decision: string;
    bailout: { title: string; description: string; afterTitle: string };
    normalPath: { title: string; description?: string }[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const branchesKo: FiberTagItem[] = [
  {
    id: 'function-component',
    title: 'FunctionComponent',
    description: '함수 컴포넌트 처리',
    updateFn: 'updateFunctionComponent(...)',
    detail: '함수 컴포넌트 재실행 · hooks & children 계산',
    tone: 'teal',
    icon: 'function',
  },
  {
    id: 'class-component',
    title: 'ClassComponent',
    description: '클래스 컴포넌트 처리',
    updateFn: 'updateClassComponent(...)',
    detail: '클래스 컴포넌트 render · lifecycle 고려',
    tone: 'violet',
    icon: 'cube',
  },
  {
    id: 'host-root',
    title: 'HostRoot',
    description: '루트 처리',
    updateFn: 'updateHostRoot(...)',
    detail: '루트에서 update 처리 · Context, lanes 반영',
    tone: 'blue',
    icon: 'home',
  },
  {
    id: 'host-component',
    title: 'HostComponent',
    description: 'DOM 요소 처리',
    updateFn: 'updateHostComponent(...)',
    detail: 'DOM 요소의 props 비교 · 자식 reconcile 진행',
    tone: 'sky',
    icon: 'code',
  },
  {
    id: 'fragment',
    title: 'Fragment',
    description: '프래그먼트 처리',
    updateFn: 'updateFragment(...)',
    detail: 'Fragment는 별도 DOM 없이 자식만 reconcile',
    tone: 'amber',
    icon: 'fragment',
  },
  {
    id: 'suspense-component',
    title: 'SuspenseComponent',
    description: 'Suspense 처리',
    updateFn: 'updateSuspenseComponent(...)',
    detail: 'Suspense 상태 기반 분기 · fallback / primary 처리',
    tone: 'cyan',
    icon: 'suspense',
  },
  {
    id: 'other',
    title: '기타 Fiber 종류',
    description: 'Memo, Portal, Offscreen 등',
    updateFn: '...',
    detail: 'Memo, Portal, Offscreen 등 다양한 분기 존재',
    tone: 'indigo',
    icon: 'other',
  },
];

const branchesEn: FiberTagItem[] = [
  {
    id: 'function-component',
    title: 'FunctionComponent',
    description: 'function components',
    updateFn: 'updateFunctionComponent(...)',
    detail: 'Re-run the function component · hooks & children',
    tone: 'teal',
    icon: 'function',
  },
  {
    id: 'class-component',
    title: 'ClassComponent',
    description: 'class components',
    updateFn: 'updateClassComponent(...)',
    detail: 'Class component render · lifecycle handling',
    tone: 'violet',
    icon: 'cube',
  },
  {
    id: 'host-root',
    title: 'HostRoot',
    description: 'the root Fiber',
    updateFn: 'updateHostRoot(...)',
    detail: 'Root-level updates · context & lanes',
    tone: 'blue',
    icon: 'home',
  },
  {
    id: 'host-component',
    title: 'HostComponent',
    description: 'host DOM elements',
    updateFn: 'updateHostComponent(...)',
    detail: 'Diff host element props · reconcile children',
    tone: 'sky',
    icon: 'code',
  },
  {
    id: 'fragment',
    title: 'Fragment',
    description: 'fragments',
    updateFn: 'updateFragment(...)',
    detail: 'Fragments have no DOM — reconcile only children',
    tone: 'amber',
    icon: 'fragment',
  },
  {
    id: 'suspense-component',
    title: 'SuspenseComponent',
    description: 'suspense boundaries',
    updateFn: 'updateSuspenseComponent(...)',
    detail: 'Branch on suspense state · fallback / primary',
    tone: 'cyan',
    icon: 'suspense',
  },
  {
    id: 'other',
    title: 'Other Fiber kinds',
    description: 'Memo, Portal, Offscreen, ...',
    updateFn: '...',
    detail: 'Memo, Portal, Offscreen and other branches',
    tone: 'indigo',
    icon: 'other',
  },
];

const rolesKo: RoleCard[] = [
  {
    number: 1,
    title: '현재 Fiber를 다시 계산할지 판단',
    description:
      'props, state, context, lanes 등을 보고 이 Fiber를 다시 계산해야 할지, 아니면 bailout할 수 있는지 결정합니다.',
    tone: 'teal',
    icon: 'checklist',
  },
  {
    number: 2,
    title: 'Fiber tag별 update 함수로 분기',
    description:
      'Fiber.tag에 따라 각기 다른 update 함수를 호출하여 해당 Fiber 유형에 맞는 로직을 실행합니다.',
    tone: 'sky',
    icon: 'branch',
  },
  {
    number: 3,
    title: '다음 자식 Fiber 계산을 시작',
    description:
      '다음 children을 계산하고, reconcileChildren을 통해 workInProgress.child를 생성합니다.',
    tone: 'violet',
    icon: 'tree',
  },
];

const rolesEn: RoleCard[] = [
  {
    number: 1,
    title: 'Decide whether to recompute the Fiber',
    description:
      'Looks at props, state, context, lanes to decide if this Fiber must rerun or can bail out.',
    tone: 'teal',
    icon: 'checklist',
  },
  {
    number: 2,
    title: 'Branch by Fiber tag into an update function',
    description:
      'Picks the update function matching Fiber.tag to run logic specific to that Fiber kind.',
    tone: 'sky',
    icon: 'branch',
  },
  {
    number: 3,
    title: 'Start computing the next child Fiber',
    description:
      'Computes next children and calls reconcileChildren to produce workInProgress.child.',
    tone: 'violet',
    icon: 'tree',
  },
];

const reconcileStepsKo: ReconcileStep[] = [
  {
    id: 'begin-work',
    title: 'beginWork',
    description: '현재 Fiber 처리 시작',
    sideExplanation: '현재 Fiber의 기본 정보 확인 · bailout 가능 여부 판단',
    tone: 'sky',
    icon: 'start',
  },
  {
    id: 'dispatch',
    title: 'Fiber 종류별 처리',
    description: 'update 함수 실행',
    sideExplanation: 'Fiber.tag에 따라 각 업데이트 함수로 분기',
    tone: 'blue',
    icon: 'branch',
  },
  {
    id: 'next-children',
    title: 'nextChildren 계산',
    description: 'JSX → React Element 배열',
    sideExplanation: '렌더 결과로 나온 children 또는 props children을 반영',
    tone: 'teal',
    icon: 'compute',
  },
  {
    id: 'reconcile-children',
    title: 'reconcileChildren(...)',
    description: 'current, workInProgress, nextChildren',
    sideExplanation: '기존 자식 Fiber와 비교하여 새로운 자식 Fiber 계산',
    tone: 'indigo',
    icon: 'reconcile',
  },
  {
    id: 'return-child',
    title: 'workInProgress.child 반환',
    description: '다음에 처리할 자식 Fiber',
    sideExplanation: '다음 work loop에서 이 자식부터 계속 처리',
    tone: 'violet',
    icon: 'return',
  },
];

const reconcileStepsEn: ReconcileStep[] = [
  {
    id: 'begin-work',
    title: 'beginWork',
    description: 'start processing the current Fiber',
    sideExplanation: 'Check basic Fiber info · decide if bailout is possible',
    tone: 'sky',
    icon: 'start',
  },
  {
    id: 'dispatch',
    title: 'process by Fiber kind',
    description: 'run the update function',
    sideExplanation: 'Branch to the update function based on Fiber.tag',
    tone: 'blue',
    icon: 'branch',
  },
  {
    id: 'next-children',
    title: 'compute nextChildren',
    description: 'JSX → React Elements',
    sideExplanation: 'Reflect rendered children or props.children',
    tone: 'teal',
    icon: 'compute',
  },
  {
    id: 'reconcile-children',
    title: 'reconcileChildren(...)',
    description: 'current, workInProgress, nextChildren',
    sideExplanation: 'Diff against prior child Fibers, build new ones',
    tone: 'indigo',
    icon: 'reconcile',
  },
  {
    id: 'return-child',
    title: 'return workInProgress.child',
    description: 'the next child Fiber to process',
    sideExplanation: 'The next work loop step starts from this child',
    tone: 'violet',
    icon: 'return',
  },
];

const CODE_LINES = `// ... Fiber.tag에 따른 분기 후
// nextChildren 계산

nextChildren = ...;

reconcileChildren(
  current,
  workInProgress,
  nextChildren,
  renderLanes,
);

// 다음에 처리할 자식 Fiber를 반환
return workInProgress.child;`;

const CODE_LINES_EN = `// ... after branching on Fiber.tag
// compute nextChildren

nextChildren = ...;

reconcileChildren(
  current,
  workInProgress,
  nextChildren,
  renderLanes,
);

// return the next child Fiber to process
return workInProgress.child;`;

const ko: BeginWorkContent = {
  hero: {
    badge: 'Render Phase · 4/10단계',
    title: {
      line1: 'beginWork는 아래로',
      line2: '내려가며 다음 계산을',
      line3: '시작합니다.',
    },
    description:
      '이 Fiber가 함수 컴포넌트인지, Host Component인지, Fragment인지에 따라 React는 서로 다른 처리 경로를 선택합니다.',
    diagram: {
      center: { title: 'beginWork', subtitle: '현재 Fiber 처리 시작' },
      branches: branchesKo,
    },
  },
  roles: {
    eyebrow: '01 · 핵심 역할',
    title: 'beginWork의 핵심 역할 3가지',
    cards: rolesKo,
  },
  tagBranch: {
    eyebrow: '02 · tag 분기',
    title: 'Fiber tag별 분기 개요',
    description: 'Fiber.tag에 따라 호출되는 update 함수가 다릅니다.',
    rootTitle: 'beginWork',
    rootSubtitle: '현재 Fiber 처리 시작',
    branches: branchesKo,
  },
  bailout: {
    eyebrow: '03 · 하강 여부',
    title: '항상 아래로 내려가는 것은 아니다',
    intro: '조건이 맞으면 React는 이 Fiber 아래의 작업을 건너뛰고 bailout할 수도 있습니다.',
    normal: {
      title: '정상 하강',
      items: ['현재 Fiber', 'child', 'grandchild', '...'],
      description: '현재 Fiber 아래의 자식들을 계속 계산합니다.',
    },
    bailout: {
      title: 'Bailout (하강 생략)',
      items: ['현재 Fiber', '하위 트리 건너뜀', '위로 이동'],
      description: '이미 처리할 변경이 없다면 아래 트리 전체를 다시 계산하지 않을 수 있습니다.',
    },
    emphasis: 'bailout이 가능하면 성능을 크게 절약할 수 있습니다.',
  },
  reconcile: {
    eyebrow: '04 · reconcile 진입',
    title: 'reconcileChildren으로 이어지는 흐름',
    steps: reconcileStepsKo,
  },
  code: {
    eyebrow: '05 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    fileName: 'ReactFiberBeginWork.js',
    functionsLabel: '볼 함수',
    functions: ['beginWork', 'updateFunctionComponent', 'updateHostComponent'],
    learningQuestion: 'beginWork는 단일 자식 Fiber를 어떻게 계산하고 어떤 값을 반환할까?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: CODE_LINES,
  },
  summary: {
    eyebrow: '06 · 전체 흐름',
    title: 'beginWork 흐름 한눈에 보기',
    start: '현재 Fiber 처리 시작',
    decision: 'bailout 가능?',
    bailout: {
      title: 'bailoutOnAlreadyFinishedWork()',
      description: '하위 트리 건너뛰기',
      afterTitle: '완료 단계로 이동',
    },
    normalPath: [
      { title: 'Fiber.tag에 따라 update 함수 실행' },
      { title: 'nextChildren 계산' },
      { title: 'reconcileChildren(...)' },
      { title: 'workInProgress.child 반환', description: '자식으로 하강' },
    ],
  },
  quiz: {
    eyebrow: '07 · 미니 퀴즈',
    title: '미니 퀴즈',
    question: 'beginWork가 자주 반환하는 값은?',
    answer: '다음에 처리할 자식 Fiber.',
  },
  cta: {
    eyebrow: '다음 단계',
    title: '함수 컴포넌트는 Render Phase에서 어떻게 처리되는가?',
    description:
      'beginWork가 다음 자식 계산을 시작하는 함수라는 점을 이해했다면, 이제 가장 익숙한 경우인 함수 컴포넌트 처리 흐름을 실제로 봅니다.',
    cta: '다음 페이지',
    href: '/function-component-process',
  },
};

const en: BeginWorkContent = {
  hero: {
    badge: 'Render Phase · 4/10',
    title: {
      line1: 'beginWork descends',
      line2: 'and starts the next',
      line3: 'computation.',
    },
    description:
      'Depending on whether the Fiber is a function component, Host Component, or Fragment, React picks a different processing path.',
    diagram: {
      center: { title: 'beginWork', subtitle: 'start processing the Fiber' },
      branches: branchesEn,
    },
  },
  roles: {
    eyebrow: '01 · CORE ROLES',
    title: 'Three core roles of beginWork',
    cards: rolesEn,
  },
  tagBranch: {
    eyebrow: '02 · TAG BRANCHES',
    title: 'Branches by Fiber tag',
    description: 'Fiber.tag picks which update function runs.',
    rootTitle: 'beginWork',
    rootSubtitle: 'start processing the Fiber',
    branches: branchesEn,
  },
  bailout: {
    eyebrow: '03 · DESCEND OR NOT',
    title: 'Not always descending',
    intro: 'When conditions allow, React can skip the work below this Fiber and bail out.',
    normal: {
      title: 'Normal descent',
      items: ['current Fiber', 'child', 'grandchild', '...'],
      description: 'Keep computing children below the current Fiber.',
    },
    bailout: {
      title: 'Bailout (skip descent)',
      items: ['current Fiber', 'skip the subtree', 'move upwards'],
      description: 'If no changes are pending, the whole subtree may not be recomputed.',
    },
    emphasis: 'Bailing out when possible saves a lot of work.',
  },
  reconcile: {
    eyebrow: '04 · INTO RECONCILE',
    title: 'Flow into reconcileChildren',
    steps: reconcileStepsEn,
  },
  code: {
    eyebrow: '05 · CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    fileLabel: 'file',
    fileName: 'ReactFiberBeginWork.js',
    functionsLabel: 'functions',
    functions: ['beginWork', 'updateFunctionComponent', 'updateHostComponent'],
    learningQuestion: 'How does beginWork compute a single child Fiber, and what does it return?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: CODE_LINES_EN,
  },
  summary: {
    eyebrow: '06 · WHOLE FLOW',
    title: 'beginWork at a glance',
    start: 'start processing the Fiber',
    decision: 'can bail out?',
    bailout: {
      title: 'bailoutOnAlreadyFinishedWork()',
      description: 'skip the subtree',
      afterTitle: 'move to the complete step',
    },
    normalPath: [
      { title: 'run the update function for Fiber.tag' },
      { title: 'compute nextChildren' },
      { title: 'reconcileChildren(...)' },
      { title: 'return workInProgress.child', description: 'descend into the child' },
    ],
  },
  quiz: {
    eyebrow: '07 · MINI QUIZ',
    title: 'Mini Quiz',
    question: 'What does beginWork most often return?',
    answer: 'The next child Fiber to process.',
  },
  cta: {
    eyebrow: 'Next step',
    title: 'How are function components processed in the Render Phase?',
    description:
      'Now that you understand beginWork starts the next child computation, follow the most common case: how a function component is processed.',
    cta: 'Next page',
    href: '/function-component-process',
  },
};

export const beginWorkContent: Record<Locale, BeginWorkContent> = { ko, en };
