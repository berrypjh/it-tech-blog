import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type ReconcilerIconName =
  | 'arrowRight'
  | 'atom'
  | 'box'
  | 'cube'
  | 'check'
  | 'clock'
  | 'code'
  | 'commit'
  | 'fileCode'
  | 'fileText'
  | 'gitBranch'
  | 'helpCircle'
  | 'layers'
  | 'lightbulb'
  | 'monitor'
  | 'network'
  | 'question'
  | 'search'
  | 'sliders'
  | 'workflow';

export type CodeField = { name: string; value: string; comment?: string };

export type PositionCard = {
  id: 'react' | 'reconciler' | 'renderer';
  name: string;
  subtitle: string;
  description: string;
  iconName: ReconcilerIconName;
  tone: ToneKey;
};

export type ResponsibilityCard = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: ReconcilerIconName;
  tone: ToneKey;
};

export type AdvancedLink = {
  id: string;
  title: string;
  description: string;
  iconName: ReconcilerIconName;
  tone: ToneKey;
  href: string;
};

export type CheckpointItem = {
  id: 'file' | 'function' | 'question';
  label: string;
  value: string;
  iconName: ReconcilerIconName;
  tone: ToneKey;
};

export type ReconcilerContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string; line4: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryCtaHref: string;
    secondaryCtaHref: string;
    a11yFlow: string;
    jsxCode: string;
    elementFields: CodeField[];
    fiberFields: CodeField[];
    elementCaption: string;
    fiberCaption: string;
    treeCaption: string;
    treeDescription: string;
  };
  position: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PositionCard[];
    banner: string;
  };
  responsibilities: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ResponsibilityCard[];
  };
  elementFiber: {
    eyebrow: string;
    title: string;
    description: string;
    jsxCode: string;
    elementTitle: string;
    elementSubtitle: string;
    elementFields: CodeField[];
    fiberTitle: string;
    fiberSubtitle: string;
    fiberFields: CodeField[];
    treeTitle: string;
    treeDescription: string;
    banner: string;
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    items: CheckpointItem[];
    codeCaption: string;
    code: string;
    codeButtons: { primary: string; secondary: string };
  };
  advanced: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AdvancedLink[];
    moreLabel: string;
  };
  concept: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    answerDetail: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_FIBER_CODE = `// ReactFiber.js 일부 범위
export function createFiberFromElement(
  element,
  mode,
  lanes,
) {
  let owner = null;

  const type = element.type;
  const key = element.key;
  const pendingProps = element.props;

  const fiber = createFiberFromTypeAndProps(
    type,
    key,
    pendingProps,
    owner,
    mode,
    lanes,
  );

  return fiber;
}`;

const ELEMENT_FIELDS_KO: CodeField[] = [
  { name: 'type', value: 'MyButton' },
  { name: 'key', value: 'null' },
  { name: 'ref', value: 'null' },
  { name: 'props', value: '' },
  { name: '  label', value: '"저장"' },
  { name: '  children', value: 'null' },
];

const FIBER_FIELDS_KO: CodeField[] = [
  { name: 'tag', value: 'FunctionComponent' },
  { name: 'key', value: 'null' },
  { name: 'elementType', value: 'MyButton' },
  { name: 'type', value: 'MyButton' },
  { name: 'pendingProps', value: '' },
  { name: '  label', value: '"저장"' },
  { name: 'return', value: 'Fiber | null' },
  { name: 'child', value: 'Fiber | null' },
  { name: 'sibling', value: 'Fiber | null' },
  { name: 'alternate', value: 'Fiber | null' },
  { name: 'flags', value: 'NoFlags' },
];

const HERO_ELEMENT_FIELDS_KO: CodeField[] = [
  { name: 'type', value: 'MyButton' },
  { name: 'key', value: 'null' },
  { name: 'props', value: '' },
  { name: '  label', value: '"저장"' },
];

const HERO_FIBER_FIELDS_KO: CodeField[] = [
  { name: 'tag', value: 'FunctionComponent' },
  { name: 'key', value: 'null' },
  { name: 'pendingProps', value: '' },
  { name: '  label', value: '"저장"' },
  { name: 'return', value: '...' },
  { name: 'child', value: '...' },
  { name: 'sibling', value: '...' },
  { name: 'alternate', value: '...' },
];

const ELEMENT_FIELDS_EN: CodeField[] = [
  { name: 'type', value: 'MyButton' },
  { name: 'key', value: 'null' },
  { name: 'ref', value: 'null' },
  { name: 'props', value: '' },
  { name: '  label', value: '"Save"' },
  { name: '  children', value: 'null' },
];

const FIBER_FIELDS_EN: CodeField[] = [
  { name: 'tag', value: 'FunctionComponent' },
  { name: 'key', value: 'null' },
  { name: 'elementType', value: 'MyButton' },
  { name: 'type', value: 'MyButton' },
  { name: 'pendingProps', value: '' },
  { name: '  label', value: '"Save"' },
  { name: 'return', value: 'Fiber | null' },
  { name: 'child', value: 'Fiber | null' },
  { name: 'sibling', value: 'Fiber | null' },
  { name: 'alternate', value: 'Fiber | null' },
  { name: 'flags', value: 'NoFlags' },
];

const HERO_ELEMENT_FIELDS_EN: CodeField[] = [
  { name: 'type', value: 'MyButton' },
  { name: 'key', value: 'null' },
  { name: 'props', value: '' },
  { name: '  label', value: '"Save"' },
];

const HERO_FIBER_FIELDS_EN: CodeField[] = [
  { name: 'tag', value: 'FunctionComponent' },
  { name: 'key', value: 'null' },
  { name: 'pendingProps', value: '' },
  { name: '  label', value: '"Save"' },
  { name: 'return', value: '...' },
  { name: 'child', value: '...' },
  { name: 'sibling', value: '...' },
  { name: 'alternate', value: '...' },
];

export const reconcilerContent: Record<Locale, ReconcilerContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 4/10단계',
      title: {
        line1: 'React 내부 렌더링을',
        line2: '읽고 싶다면,',
        line3: 'react-reconciler를',
        line4: '피할 수 없습니다.',
      },
      description:
        'Element를 Fiber로 바꾸고, 현재 화면과 다음 화면을 비교하고, 어떤 변경이 필요한지 정리하는 핵심이 이 패키지에 모여 있습니다.',
      primaryCta: '구조도 먼저 보기',
      secondaryCta: '코드 진입점 살펴보기',
      primaryCtaHref: '#section-element-fiber',
      secondaryCtaHref: '#section-checkpoint',
      a11yFlow:
        'JSX 코드가 React Element 설명 객체로 변환되고, 그 Element가 Fiber 작업 단위로 바뀐 뒤, Fiber 노드들이 return/child/sibling 관계로 연결된 트리를 이룬다.',
      jsxCode: '<MyButton label="저장" />',
      elementFields: HERO_ELEMENT_FIELDS_KO,
      fiberFields: HERO_FIBER_FIELDS_KO,
      elementCaption: '설명 객체',
      fiberCaption: '작업 단위',
      treeCaption: 'Fiber tree',
      treeDescription: 'return / child / sibling 으로 연결',
    },
    position: {
      eyebrow: '01 · position',
      title: 'react-reconciler는 어디에 위치할까?',
      description: 'react가 설명하고 renderer가 출력하는 사이, reconciler가 계산을 책임집니다.',
      cards: [
        {
          id: 'react',
          name: 'react',
          subtitle: '사용자 API',
          description: 'useState, useEffect, createElement 등 사용자가 직접 쓰는 API',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          name: 'react-reconciler',
          subtitle: '렌더링 알고리즘',
          description: 'Element → Fiber 변환, 트리 순회, 변경 계산, 작업 계획 수립',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'renderer',
          name: 'renderer',
          subtitle: '환경별 출력',
          description: 'DOM, Native 등 실제 환경에 반영',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
      banner: 'reconciler는 react와 renderer 사이에서 계산을 책임지는 핵심 패키지입니다.',
    },
    responsibilities: {
      eyebrow: '02 · responsibilities',
      title: 'react-reconciler가 맡는 4가지 일',
      description: '내부 렌더링은 순서대로 네 단계로 진행됩니다.',
      cards: [
        {
          id: 'convert',
          number: '1',
          title: 'Element를 Fiber로 바꾼다.',
          description: 'JSX/Element를 렌더링 작업 단위인 Fiber로 변환한다.',
          iconName: 'cube',
          tone: 'cyan',
        },
        {
          id: 'traverse',
          number: '2',
          title: 'Fiber 트리를 순회한다.',
          description: '현재 트리와 다음 트리를 비교하고 필요한 위치를 탐색한다.',
          iconName: 'network',
          tone: 'teal',
        },
        {
          id: 'compute',
          number: '3',
          title: '필요한 변경을 계산한다.',
          description: '추가, 삭제, 업데이트 등 변경 목록을 계산한다.',
          iconName: 'sliders',
          tone: 'violet',
        },
        {
          id: 'commit',
          number: '4',
          title: 'commit 단계가 사용할 정보를 준비한다.',
          description: '변경 목록과 effect 정보를 commit 단계로 전달한다.',
          iconName: 'commit',
          tone: 'amber',
        },
      ],
    },
    elementFiber: {
      eyebrow: '03 · element → fiber',
      title: 'Element → Fiber 변환 시각화',
      description: 'JSX 한 줄이 Element 설명 객체를 거쳐 Fiber 작업 단위로 바뀌어 트리를 이룹니다.',
      jsxCode: '<MyButton label="저장" />',
      elementTitle: 'React Element',
      elementSubtitle: '설명 객체',
      elementFields: ELEMENT_FIELDS_KO,
      fiberTitle: 'Fiber',
      fiberSubtitle: '작업 단위',
      fiberFields: FIBER_FIELDS_KO,
      treeTitle: 'Fiber tree',
      treeDescription: 'return / child / sibling 으로 연결',
      banner: 'Element는 설명이고, Fiber는 작업 단위다.',
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: '코드로 보기: Element → Fiber 변환의 진입점',
      items: [
        {
          id: 'file',
          label: '파일',
          value: 'packages/react-reconciler/src/ReactFiber.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'function',
          label: '볼 함수',
          value: 'createFiberFromElement',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: '학습 질문',
          value: 'React는 Element에서 어떤 정보를 꺼내 Fiber를 만들까?',
          iconName: 'workflow',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/react-reconciler/src/ReactFiber.js',
      code: REACT_FIBER_CODE,
      codeButtons: { primary: 'ReactFiber.js 열기', secondary: 'Element → Fiber 흐름 보기' },
    },
    advanced: {
      eyebrow: '05 · advanced learning',
      title: '이후 심화 학습과 연결',
      description: 'reconciler 개념이 잡혔다면 다음 챕터로 자연스럽게 이어집니다.',
      cards: [
        {
          id: 'component-fiber',
          title: '컴포넌트는 어떻게 Fiber가 되는가?',
          description: 'Function / Class / Host 컴포넌트를 Fiber 생성 로직으로 이해',
          iconName: 'atom',
          tone: 'sky',
          href: '/element-vs-fiber',
        },
        {
          id: 'fiber-tree',
          title: 'Fiber 트리와 렌더링 자료구조',
          description: 'return / child / sibling / alternate 등 핵심 구조 파악',
          iconName: 'gitBranch',
          tone: 'cyan',
          href: '/fiber-node',
        },
        {
          id: 'render-phase',
          title: 'Reconciler와 Render Phase',
          description: 'beginWork, completeWork 흐름과 업데이트 처리 이해',
          iconName: 'sliders',
          tone: 'violet',
          href: '/render-phase',
        },
        {
          id: 'commit-phase',
          title: 'Commit Phase와 실제 DOM 반영',
          description: 'Effect 목록, Mutation, Layout, Passive 효과 흐름 이해',
          iconName: 'clock',
          tone: 'amber',
          href: '/commit-phase',
        },
      ],
      moreLabel: '자세히 보기',
    },
    concept: {
      eyebrow: '06 · concept check',
      title: '개념 점검',
      question: 'Element와 Fiber의 가장 큰 차이는?',
      answer: 'Element는 UI 설명 객체, Fiber는 렌더링을 처리하는 작업 단위입니다.',
      answerDetail:
        'Element는 불변의 요청서에 가깝고, Fiber는 그 요청을 처리하기 위해 상태를 가지고 진행되는 작업 단위입니다.',
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'renderer와 reconciler',
      description:
        'reconciler가 무엇을 계산하는지 알았다면, 이제 그 계산 결과를 실제 환경에 반영하는 쪽과의 경계, renderer와 reconciler를 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/renderer-vs-reconciler',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 4/10',
      title: {
        line1: 'If you want to read',
        line2: 'React internals,',
        line3: 'you cannot avoid',
        line4: 'react-reconciler.',
      },
      description:
        'Converting Elements into Fibers, comparing the current and next screen, and figuring out what needs to change — all of it lives in this package.',
      primaryCta: 'See the diagram first',
      secondaryCta: 'Inspect the code entry',
      primaryCtaHref: '#section-element-fiber',
      secondaryCtaHref: '#section-checkpoint',
      a11yFlow:
        'JSX becomes a React Element description object, which is then converted into a Fiber work unit; Fibers connect through return/child/sibling pointers to form a tree.',
      jsxCode: '<MyButton label="Save" />',
      elementFields: HERO_ELEMENT_FIELDS_EN,
      fiberFields: HERO_FIBER_FIELDS_EN,
      elementCaption: 'Description object',
      fiberCaption: 'Work unit',
      treeCaption: 'Fiber tree',
      treeDescription: 'connected by return / child / sibling',
    },
    position: {
      eyebrow: '01 · position',
      title: 'Where does react-reconciler sit?',
      description:
        'Between the description (react) and the output (renderer), reconciler does the computation.',
      cards: [
        {
          id: 'react',
          name: 'react',
          subtitle: 'User API',
          description: 'useState, useEffect, createElement — the surface developers use directly',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'reconciler',
          name: 'react-reconciler',
          subtitle: 'Rendering algorithm',
          description: 'Element → Fiber conversion, tree traversal, diffing, work planning',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'renderer',
          name: 'renderer',
          subtitle: 'Per-environment output',
          description: 'Applies results to DOM, Native, and other targets',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
      banner:
        'reconciler is the core package that owns the computation between react and renderer.',
    },
    responsibilities: {
      eyebrow: '02 · responsibilities',
      title: 'Four jobs react-reconciler owns',
      description: 'React rendering moves through four ordered steps inside this package.',
      cards: [
        {
          id: 'convert',
          number: '1',
          title: 'Convert Elements into Fibers.',
          description: 'JSX/Elements become Fibers — the unit of rendering work.',
          iconName: 'cube',
          tone: 'cyan',
        },
        {
          id: 'traverse',
          number: '2',
          title: 'Traverse the Fiber tree.',
          description: 'Walk the current and next tree, locate the spots that need work.',
          iconName: 'network',
          tone: 'teal',
        },
        {
          id: 'compute',
          number: '3',
          title: 'Compute the required changes.',
          description: 'Compile additions, removals and updates into a change list.',
          iconName: 'sliders',
          tone: 'violet',
        },
        {
          id: 'commit',
          number: '4',
          title: 'Prepare information for commit.',
          description: 'Hand the change list and effect info to the commit phase.',
          iconName: 'commit',
          tone: 'amber',
        },
      ],
    },
    elementFiber: {
      eyebrow: '03 · element → fiber',
      title: 'Visualizing the Element → Fiber conversion',
      description:
        'A single line of JSX turns into a description object, then a work unit, then a tree.',
      jsxCode: '<MyButton label="Save" />',
      elementTitle: 'React Element',
      elementSubtitle: 'Description object',
      elementFields: ELEMENT_FIELDS_EN,
      fiberTitle: 'Fiber',
      fiberSubtitle: 'Work unit',
      fiberFields: FIBER_FIELDS_EN,
      treeTitle: 'Fiber tree',
      treeDescription: 'connected by return / child / sibling',
      banner: 'Element is a description; Fiber is a work unit.',
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: 'See the code: where Element becomes Fiber',
      items: [
        {
          id: 'file',
          label: 'File',
          value: 'packages/react-reconciler/src/ReactFiber.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'function',
          label: 'Function',
          value: 'createFiberFromElement',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: 'Question',
          value: 'Which fields does React pull off the Element to build a Fiber?',
          iconName: 'workflow',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/react-reconciler/src/ReactFiber.js',
      code: REACT_FIBER_CODE,
      codeButtons: { primary: 'Open ReactFiber.js', secondary: 'See the Element → Fiber flow' },
    },
    advanced: {
      eyebrow: '05 · advanced learning',
      title: 'Connect to deeper topics',
      description: 'Once the reconciler picture is clear, these are the natural next reads.',
      cards: [
        {
          id: 'component-fiber',
          title: 'How components become Fibers',
          description: 'Function / Class / Host components through the Fiber creation lens',
          iconName: 'atom',
          tone: 'sky',
          href: '/element-vs-fiber',
        },
        {
          id: 'fiber-tree',
          title: 'Fiber tree & rendering data structures',
          description: 'return / child / sibling / alternate and friends',
          iconName: 'gitBranch',
          tone: 'cyan',
          href: '/fiber-node',
        },
        {
          id: 'render-phase',
          title: 'Reconciler & render phase',
          description: 'beginWork, completeWork and update flow',
          iconName: 'sliders',
          tone: 'violet',
          href: '/render-phase',
        },
        {
          id: 'commit-phase',
          title: 'Commit phase & real DOM updates',
          description: 'Effect list, mutation, layout and passive effects',
          iconName: 'clock',
          tone: 'amber',
          href: '/commit-phase',
        },
      ],
      moreLabel: 'Read more',
    },
    concept: {
      eyebrow: '06 · concept check',
      title: 'Concept check',
      question: 'What is the biggest difference between Element and Fiber?',
      answer: 'Element is a UI description object; Fiber is the work unit that runs the rendering.',
      answerDetail:
        'Element is an immutable request slip; Fiber carries state to actually run the work for that request.',
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'renderer vs reconciler',
      description:
        'You now know what the reconciler computes. Next, the boundary between the renderer and the reconciler — renderer vs reconciler.',
      cta: 'Go to the next page',
      href: '/renderer-vs-reconciler',
    },
  },
};
