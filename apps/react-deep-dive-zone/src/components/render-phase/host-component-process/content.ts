import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type UpdateHostFlowStep = {
  title: string;
  description: string;
  tone: ToneKey;
  icon: 'fiber' | 'props' | 'children' | 'reconcile' | 'child';
};

export type CodeCallout = {
  number: number;
  body: string;
  tone: ToneKey;
};

export type ChildExampleCard = {
  cardTitle: string;
  code: string;
  resultTitle: string;
  resultDetail: string;
  explanation: string;
  kind: 'text' | 'nested';
};

export type CompleteWorkFlowNode = {
  title: string;
  description: string;
  tone: ToneKey;
  direction: 'down' | 'sideways' | 'up';
};

export type HostComponentContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      jsxStep: { title: string; code: string };
      fiberStep: { title: string; description: string };
      childrenStep: { title: string; description: string; result: string; resultDetail: string };
      reconcileStep: { title: string; description: string };
    };
  };
  userCode: {
    eyebrow: string;
    title: string;
    code: string;
    explanation: string;
  };
  updateFlow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: UpdateHostFlowStep[];
  };
  childCompare: {
    eyebrow: string;
    title: string;
    cards: { left: ChildExampleCard; right: ChildExampleCard };
  };
  code: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    fileName: string;
    functionLabel: string;
    functions: string[];
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    callouts: CodeCallout[];
  };
  completeWork: {
    eyebrow: string;
    title: string;
    description: string;
    flow: CompleteWorkFlowNode[];
    workCardTitle: string;
    workItems: string[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const USER_CODE = `<button className="save">저장</button>`;
const USER_CODE_EN = `<button className="save">Save</button>`;

const NESTED_CODE = `<div className="wrap">
  <Icon />
  <Label />
</div>`;

const UPDATE_HOST_CODE = `function updateHostComponent(current, workInProgress, renderLanes) {
  const nextProps = workInProgress.pendingProps;
  let nextChildren = nextProps.children;

  reconcileChildren(current, workInProgress, nextChildren, renderLanes);

  return workInProgress.child;
}`;

const ko: HostComponentContent = {
  hero: {
    badge: 'Render Phase · 6/10단계',
    title: {
      line1: 'Host Component도',
      line2: 'Render Phase에서',
      line3: '자식 구조를 계산합니다.',
    },
    description:
      'button이나 div 같은 요소는 이번 렌더에서 어떤 children을 가져야 하는지 확인하고, 그 children을 바탕으로 다음 자식 Fiber를 계산합니다.',
    diagram: {
      title: 'Host Component 처리 미리보기',
      jsxStep: { title: '사용자 코드 (JSX)', code: USER_CODE },
      fiberStep: { title: 'HostComponent Fiber', description: '<button> Fiber' },
      childrenStep: {
        title: 'children 추출',
        description: 'pendingProps.children',
        result: '"저장"',
        resultDetail: '(text child)',
      },
      reconcileStep: {
        title: 'reconcileChildren(...)',
        description: 'children을 바탕으로 자식 Fiber 계산',
      },
    },
  },
  userCode: {
    eyebrow: '01 · 사용자 코드',
    title: '사용자 코드 예시',
    code: USER_CODE,
    explanation: 'React는 이 요소의 props와 children을 기준으로 다음 자식 구조를 계산합니다.',
  },
  updateFlow: {
    eyebrow: '02 · Host 갱신 흐름',
    title: 'updateHostComponent 흐름',
    description: 'Host Component Fiber 하나가 처리되는 단계입니다.',
    steps: [
      {
        title: 'HostComponent Fiber',
        description: '예: <button> Fiber',
        tone: 'teal',
        icon: 'fiber',
      },
      {
        title: 'pendingProps 확인',
        description: '이번 렌더에서 받은 props',
        tone: 'sky',
        icon: 'props',
      },
      {
        title: 'children 추출',
        description: 'nextProps.children',
        tone: 'violet',
        icon: 'children',
      },
      {
        title: 'reconcileChildren(...)',
        description: 'nextChildren을 바탕으로 자식 Fiber 계산',
        tone: 'sky',
        icon: 'reconcile',
      },
      {
        title: 'child Fiber 반환',
        description: '아래로 내려갈 첫 자식 Fiber',
        tone: 'indigo',
        icon: 'child',
      },
    ],
  },
  childCompare: {
    eyebrow: '03 · 텍스트 vs 중첩',
    title: 'text child와 nested child 감각 차이',
    cards: {
      left: {
        cardTitle: '텍스트 children 예시',
        code: USER_CODE,
        resultTitle: '텍스트 children',
        resultDetail: '단일 Text Fiber',
        explanation: '문자열 하나 → Text Fiber 하나가 생성됩니다.',
        kind: 'text',
      },
      right: {
        cardTitle: '중첩 children 예시',
        code: NESTED_CODE,
        resultTitle: '중첩 child',
        resultDetail: '여러 자식 Fiber 계산',
        explanation: '여러 React Element → 여러 Fiber로 계산됩니다.',
        kind: 'nested',
      },
    },
  },
  code: {
    eyebrow: '04 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    fileName: 'ReactFiberBeginWork.js',
    functionLabel: '함수',
    functions: ['updateHostComponent', 'reconcileChildren'],
    learningQuestion:
      'Host Component는 Render Phase에서 어떤 데이터를 다음 reconciliation으로 넘길까?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: UPDATE_HOST_CODE,
    callouts: [
      { number: 1, body: '이번 렌더의 props 읽기 (pendingProps)', tone: 'teal' },
      { number: 2, body: 'children 추출 (props.children)', tone: 'violet' },
      { number: 3, body: 'children을 바탕으로 다음 자식 Fiber 계산', tone: 'sky' },
      { number: 4, body: '아래로 이동할 첫 자식 Fiber 반환', tone: 'indigo' },
    ],
  },
  completeWork: {
    eyebrow: '05 · completeWork 예고',
    title: 'completeWork 예고',
    description:
      'Host Component의 실제 host 처리, 예를 들어 DOM 관련 준비는 completeWork에서 더 본격적으로 이어집니다.',
    flow: [
      {
        title: 'beginWork',
        description: '자식 계산 · 아래로 내려감',
        tone: 'sky',
        direction: 'down',
      },
      {
        title: '자식 Fiber를 처리',
        description: '아래로 계속 이동',
        tone: 'teal',
        direction: 'sideways',
      },
      {
        title: 'completeWork',
        description: '실제 host 작업 준비 · 위로 올라감',
        tone: 'violet',
        direction: 'up',
      },
    ],
    workCardTitle: '예시 작업 (completeWork)',
    workItems: [
      'DOM node 생성 준비',
      'props 반영 계획 수립',
      '이벤트 리스너 준비',
      'ref 연결 준비',
      'flags 설정',
    ],
  },
  quiz: {
    eyebrow: '06 · 미니 퀴즈',
    title: '미니 퀴즈',
    question: 'Host Component의 beginWork가 즉시 DOM node를 만드는가?',
    answer: '아니다. DOM을 만들지 않고 먼저 children 구조를 계산한다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'reconcileChildren',
    description:
      '함수 컴포넌트와 Host Component가 모두 reconcileChildren으로 이어진다는 점을 봤다면, 이제 그 핵심 함수 자체를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/child-reconciliation',
  },
};

const en: HostComponentContent = {
  hero: {
    badge: 'Render Phase · 6/10',
    title: {
      line1: 'Host Components also',
      line2: 'compute children',
      line3: 'in the Render Phase.',
    },
    description:
      'Elements like button or div check which children this render needs, then compute the next child Fibers based on that.',
    diagram: {
      title: 'Host Component processing preview',
      jsxStep: { title: 'User code (JSX)', code: USER_CODE_EN },
      fiberStep: { title: 'HostComponent Fiber', description: '<button> Fiber' },
      childrenStep: {
        title: 'extract children',
        description: 'pendingProps.children',
        result: '"Save"',
        resultDetail: '(text child)',
      },
      reconcileStep: {
        title: 'reconcileChildren(...)',
        description: 'Compute child Fibers from children',
      },
    },
  },
  userCode: {
    eyebrow: '01 · USER CODE',
    title: 'User code example',
    code: USER_CODE_EN,
    explanation:
      "React computes the next child structure based on this element's props and children.",
  },
  updateFlow: {
    eyebrow: '02 · HOST FLOW',
    title: 'updateHostComponent flow',
    description: 'How a single Host Component Fiber is processed.',
    steps: [
      {
        title: 'HostComponent Fiber',
        description: 'e.g. <button> Fiber',
        tone: 'teal',
        icon: 'fiber',
      },
      {
        title: 'inspect pendingProps',
        description: 'the props received in this render',
        tone: 'sky',
        icon: 'props',
      },
      {
        title: 'extract children',
        description: 'nextProps.children',
        tone: 'violet',
        icon: 'children',
      },
      {
        title: 'reconcileChildren(...)',
        description: 'Compute child Fibers based on nextChildren',
        tone: 'sky',
        icon: 'reconcile',
      },
      {
        title: 'return the child Fiber',
        description: 'The first child Fiber to descend into',
        tone: 'indigo',
        icon: 'child',
      },
    ],
  },
  childCompare: {
    eyebrow: '03 · TEXT VS NESTED',
    title: 'text child vs nested child',
    cards: {
      left: {
        cardTitle: 'Text children example',
        code: USER_CODE_EN,
        resultTitle: 'text children',
        resultDetail: 'a single Text Fiber',
        explanation: 'One string → one Text Fiber.',
        kind: 'text',
      },
      right: {
        cardTitle: 'Nested children example',
        code: NESTED_CODE,
        resultTitle: 'nested child',
        resultDetail: 'multiple child Fibers',
        explanation: 'Multiple React Elements → multiple Fibers.',
        kind: 'nested',
      },
    },
  },
  code: {
    eyebrow: '04 · CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    fileLabel: 'file',
    fileName: 'ReactFiberBeginWork.js',
    functionLabel: 'functions',
    functions: ['updateHostComponent', 'reconcileChildren'],
    learningQuestion: 'What does a Host Component hand off to the next reconciliation?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: UPDATE_HOST_CODE,
    callouts: [
      { number: 1, body: "Read this render's props (pendingProps)", tone: 'teal' },
      { number: 2, body: 'Extract children (props.children)', tone: 'violet' },
      { number: 3, body: 'Compute child Fibers from children', tone: 'sky' },
      { number: 4, body: 'Return the first child Fiber to descend into', tone: 'indigo' },
    ],
  },
  completeWork: {
    eyebrow: '05 · COMPLETEWORK PREVIEW',
    title: 'completeWork preview',
    description:
      "The Host Component's actual host work, like DOM preparation, continues more fully in completeWork.",
    flow: [
      {
        title: 'beginWork',
        description: 'compute children · descend',
        tone: 'sky',
        direction: 'down',
      },
      {
        title: 'process child Fibers',
        description: 'keep moving downward',
        tone: 'teal',
        direction: 'sideways',
      },
      {
        title: 'completeWork',
        description: 'prepare actual host work · ascend',
        tone: 'violet',
        direction: 'up',
      },
    ],
    workCardTitle: 'Example work (completeWork)',
    workItems: [
      'Prepare DOM node creation',
      'Plan prop reflection',
      'Prepare event listeners',
      'Prepare ref attachment',
      'Set flags',
    ],
  },
  quiz: {
    eyebrow: '06 · MINI QUIZ',
    title: 'Mini Quiz',
    question: "Does a Host Component's beginWork create the DOM node immediately?",
    answer: 'No — it first computes the children structure, without creating any DOM.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'reconcileChildren',
    description:
      'Now that you see how both function components and Host Components hand off to reconcileChildren, take a closer look at the function itself.',
    cta: 'Go to the next page',
    href: '/child-reconciliation',
  },
};

export const hostComponentContent: Record<Locale, HostComponentContent> = { ko, en };
