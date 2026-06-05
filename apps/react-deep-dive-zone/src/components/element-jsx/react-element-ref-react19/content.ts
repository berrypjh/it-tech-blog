import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type HeroFlowStep = {
  id: string;
  label: string;
};

export type CoreChangeCard = {
  id: string;
  number: string;
  title: string;
  body: string;
  checks: string[];
  iconName: 'user' | 'flow' | 'zap';
  tone: ToneKey;
};

export type BenefitCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'code' | 'link' | 'package';
  tone: ToneKey;
};

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'parent' | 'middle' | 'child' | 'dom';
  tone: ToneKey;
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  tone: ToneKey;
};

export type ReactElementRefReact19Content = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    diagramTitle: string;
    leftColumnTitle: string;
    leftFlow: HeroFlowStep[];
    rightColumnTitle: string;
    rightFlow: HeroFlowStep[];
  };
  core: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: CoreChangeCard[];
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftVersion: string;
    leftCode: string;
    leftNote: string;
    rightTitle: string;
    rightVersion: string;
    rightCode: string;
    rightNote: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
    emphasis: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    changeLabel: string;
    changePoint: string;
    ideaLabel: string;
    coreIdea: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  benefits: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: BenefitCard[];
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    answerLabel: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ReactElementRefReact19Content = {
  hero: {
    badge: 'Element와 JSX · 8/10단계',
    title: { line1: 'ref는 React 19에서', line2: '어떻게 달라졌나?' },
    description:
      'ref가 단순히 DOM을 가리키는 도구에서 벗어나, 컴포넌트와 상태, 상위-하위 경계를 넘나드는 더 강력한 API가 되었습니다.',
    primaryCta: '변화 한눈에 보기',
    secondaryCta: 'ref 흐름 미리보기',
    primaryHref: '#compare',
    secondaryHref: '#flow',
    diagramTitle: 'React 18 이전과 React 19의 ref 차이',
    leftColumnTitle: 'React 18 이전',
    leftFlow: [
      { id: 'l1', label: 'ref 전달 제한' },
      { id: 'l2', label: 'DOM ref' },
      { id: 'l3', label: 'forwardRef' },
      { id: 'l4', label: '특정 컴포넌트만' },
    ],
    rightColumnTitle: 'React 19',
    rightFlow: [
      { id: 'r1', label: 'ref as prop' },
      { id: 'r2', label: '모든 함수 컴포넌트' },
      { id: 'r3', label: '일반 prop처럼 전달' },
      { id: 'r4', label: '더 일관된 ref 사용' },
    ],
  },
  core: {
    badge: '02',
    eyebrow: 'React 19의 ref 변화 핵심 3가지',
    title: '세 가지 핵심 변화',
    description: '문법의 작은 차이가 아니라, ref가 흐르는 길 자체가 바뀐 변화입니다.',
    cards: [
      {
        id: 'as-prop',
        number: '1',
        title: 'ref as prop',
        body: 'ref가 더 이상 특별한 통로가 아니라 일반 prop처럼 전달됩니다.',
        checks: ['함수 컴포넌트에서 직접 받음', 'forwardRef 없이도 사용 가능'],
        iconName: 'user',
        tone: 'violet',
      },
      {
        id: 'consistent',
        number: '2',
        title: '일관된 전달 모델',
        body: 'ref 전달 방식이 단순해지고 예측 가능해져 컴포넌트 설계가 쉬워집니다.',
        checks: ['상위 → 하위 → 내부로 일관 전달', '조건부/래퍼 구조에서도 안정적'],
        iconName: 'flow',
        tone: 'teal',
      },
      {
        id: 'wider',
        number: '3',
        title: '더 넓은 활용 범위',
        body: 'DOM 접근을 넘어, 컴포넌트 API와 상태/메서드 노출까지 확장됩니다.',
        checks: ['Imperative Handle 더 자연스러워짐', '복잡한 라이브러리 설계에 유리'],
        iconName: 'zap',
        tone: 'amber',
      },
    ],
  },
  compare: {
    badge: '03',
    eyebrow: 'Before (React 18) vs After (React 19)',
    title: '같은 결과, 달라진 작성 방식',
    description: '같은 컴포넌트가 React 18 이전과 19에서 어떻게 다르게 적혀지는지 직접 봅니다.',
    leftTitle: 'React 18 이전',
    leftVersion: 'forwardRef 기반',
    leftCode:
      'const FancyInput = forwardRef((props, ref) => {\n  return <input ref={ref} {...props} />;\n});\n\nfunction App() {\n  const inputRef = useRef(null);\n  return <FancyInput ref={inputRef} />;\n}',
    leftNote: 'ref를 사용하려면 forwardRef가 필수였습니다.',
    rightTitle: 'React 19',
    rightVersion: 'ref as prop',
    rightCode:
      'function FancyInput({ ref, ...props }) {\n  return <input ref={ref} {...props} />;\n}\n\nfunction App() {\n  const inputRef = useRef(null);\n  return <FancyInput ref={inputRef} />;\n}',
    rightNote: 'ref가 일반 prop처럼 전달되어 더 간결해졌습니다.',
  },
  flow: {
    badge: '04',
    eyebrow: 'React 19에서의 ref 흐름',
    title: '상위 → 중간 → 하위 → DOM',
    description:
      'React 19의 ref는 일반 prop과 똑같이 위에서 아래로 흐릅니다. 특별한 API 없이 같은 경로로 내려갑니다.',
    steps: [
      {
        id: 'parent',
        number: '01',
        title: '상위 컴포넌트',
        body: 'ref 생성 및 전달',
        iconName: 'parent',
        tone: 'sky',
      },
      {
        id: 'middle',
        number: '02',
        title: '중간 컴포넌트',
        body: 'ref를 일반 prop으로 전달',
        iconName: 'middle',
        tone: 'violet',
      },
      {
        id: 'child',
        number: '03',
        title: '하위 컴포넌트',
        body: 'ref를 props로 수신',
        iconName: 'child',
        tone: 'teal',
      },
      {
        id: 'dom',
        number: '04',
        title: 'DOM / 인스턴스',
        body: 'ref가 실제 대상을 참조',
        iconName: 'dom',
        tone: 'amber',
      },
    ],
    emphasis: '별도의 API 없이, 모든 함수 컴포넌트에서 동일한 방식으로 사용 가능합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '실제 코드 체크포인트',
    title: '소스에서 보는 ref 처리 단순화',
    description:
      'React 19에서는 ref가 단순히 props로 들어옵니다. 별도의 ref 필드로 분리되지 않습니다.',
    fileLabel: '파일',
    filePath: 'packages/react/src/ReactBaseClasses.js',
    changeLabel: '변경 포인트',
    changePoint: 'ref 처리 방식 단순화',
    ideaLabel: '핵심 아이디어',
    coreIdea: 'ref를 더 이상 특별한 경로에서 처리하지 않고, 일반 prop과 동일하게 흐르게 한다.',
    code: 'class Component {\n  // ...\n\n  constructor(props, context, updater) {\n    this.props = props;\n    this.context = context;\n\n    // React 19: ref가 단순히 props로 들어옵니다.\n    // 더 이상 별도의 ref 필드로 분리하지 않습니다.\n    this.ref = props.ref ?? null;\n  }\n\n  // ...\n}',
    primaryCta: '관련 코드 더 보기',
    secondaryCta: '변경 히스토리 보기',
    primaryHref: '#flow',
    secondaryHref: '#compare',
  },
  benefits: {
    badge: '06',
    eyebrow: '이 변화가 주는 이점',
    title: '단순함이 만드는 세 가지 변화',
    description: '문법이 단순해진 만큼, 그 위에서 만들 수 있는 추상화도 더 자유로워집니다.',
    cards: [
      {
        id: 'simpler',
        title: '컴포넌트 설계가 단순해진다',
        body: 'forwardRef 래퍼 없이도 ref를 직접 받을 수 있어요.',
        iconName: 'code',
        tone: 'cyan',
      },
      {
        id: 'predictable',
        title: '예측 가능한 데이터 흐름',
        body: 'ref가 일반 prop처럼 흐르므로 디버깅과 추적이 쉬워집니다.',
        iconName: 'link',
        tone: 'teal',
      },
      {
        id: 'ecosystem',
        title: '라이브러리와 생태계의 발전',
        body: '더 일관된 패턴으로 더 강력한 컴포넌트 API를 만들 수 있습니다.',
        iconName: 'package',
        tone: 'violet',
      },
    ],
  },
  quiz: {
    badge: '07',
    eyebrow: '빠른 퀴즈',
    title: '한 줄로 답해 봅니다',
    description: '두 문제를 풀면 핵심 메시지가 더 또렷해집니다.',
    answerLabel: '정답',
    cards: [
      {
        id: 'q1',
        question: 'React 19에서 ref를 사용하려면 forwardRef가 여전히 필요할까?',
        answer: '아니다. ref가 일반 prop처럼 전달되므로 필요하지 않다.',
        explanation: '모든 함수 컴포넌트가 ref를 props로 받을 수 있습니다.',
        tone: 'violet',
      },
      {
        id: 'q2',
        question: 'React 19의 ref 변화 핵심을 한 문장으로 말하면?',
        answer: 'ref가 일반 prop처럼 흐르게 되었고, 사용 범위가 넓어졌다.',
        explanation: '더 단순하고 일관된 모델로 컴포넌트 설계가 유연해졌습니다.',
        tone: 'teal',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 단계로 이동하기',
    title: '이제 Fiber 챕터로 넘어갑니다',
    description:
      'ref가 더 강력해진 배경을 이해했다면, 이번에는 React가 상태를 어떻게 관리하고 연결하는지 공식 객체인 Fiber를 깊이 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/element-vs-fiber',
  },
};

const en: ReactElementRefReact19Content = {
  hero: {
    badge: 'Elements & JSX · 8/10',
    title: { line1: 'How did ref change', line2: 'in React 19?' },
    description:
      'ref is no longer just a tool that points to the DOM — it became a stronger API that flows through components, state, and parent-child boundaries.',
    primaryCta: 'See the change at a glance',
    secondaryCta: 'Preview the ref flow',
    primaryHref: '#compare',
    secondaryHref: '#flow',
    diagramTitle: 'ref before React 18 vs ref in React 19',
    leftColumnTitle: 'Before React 18',
    leftFlow: [
      { id: 'l1', label: 'Limited ref forwarding' },
      { id: 'l2', label: 'DOM ref' },
      { id: 'l3', label: 'forwardRef' },
      { id: 'l4', label: 'Only specific components' },
    ],
    rightColumnTitle: 'React 19',
    rightFlow: [
      { id: 'r1', label: 'ref as prop' },
      { id: 'r2', label: 'Every function component' },
      { id: 'r3', label: 'Passed like a regular prop' },
      { id: 'r4', label: 'A more consistent ref' },
    ],
  },
  core: {
    badge: '02',
    eyebrow: 'Three core React 19 ref changes',
    title: 'Three core changes',
    description:
      'Not a syntactic tweak — the path that ref takes through components has actually changed.',
    cards: [
      {
        id: 'as-prop',
        number: '1',
        title: 'ref as prop',
        body: 'ref is no longer a special channel — it flows like an ordinary prop.',
        checks: ['Received directly in function components', 'Works without forwardRef'],
        iconName: 'user',
        tone: 'violet',
      },
      {
        id: 'consistent',
        number: '2',
        title: 'A consistent forwarding model',
        body: 'Ref forwarding becomes simpler and predictable, making component design easier.',
        checks: [
          'Parent → child → inner is consistent',
          'Stable in conditional/wrapper structures',
        ],
        iconName: 'flow',
        tone: 'teal',
      },
      {
        id: 'wider',
        number: '3',
        title: 'A wider use surface',
        body: 'Beyond DOM access — component APIs and exposed methods become more natural.',
        checks: ['Imperative Handle reads more naturally', 'Helps with complex library design'],
        iconName: 'zap',
        tone: 'amber',
      },
    ],
  },
  compare: {
    badge: '03',
    eyebrow: 'Before (React 18) vs After (React 19)',
    title: 'Same outcome, different shape',
    description: 'See the same component written before and after React 19.',
    leftTitle: 'Before React 18',
    leftVersion: 'forwardRef-based',
    leftCode:
      'const FancyInput = forwardRef((props, ref) => {\n  return <input ref={ref} {...props} />;\n});\n\nfunction App() {\n  const inputRef = useRef(null);\n  return <FancyInput ref={inputRef} />;\n}',
    leftNote: 'You needed forwardRef to use refs.',
    rightTitle: 'React 19',
    rightVersion: 'ref as prop',
    rightCode:
      'function FancyInput({ ref, ...props }) {\n  return <input ref={ref} {...props} />;\n}\n\nfunction App() {\n  const inputRef = useRef(null);\n  return <FancyInput ref={inputRef} />;\n}',
    rightNote: 'ref flows like any other prop — simpler.',
  },
  flow: {
    badge: '04',
    eyebrow: 'The React 19 ref flow',
    title: 'Parent → Middle → Child → DOM',
    description:
      'In React 19 the ref flows top-down like any other prop. No special API in the middle.',
    steps: [
      {
        id: 'parent',
        number: '01',
        title: 'Parent component',
        body: 'Creates and forwards the ref',
        iconName: 'parent',
        tone: 'sky',
      },
      {
        id: 'middle',
        number: '02',
        title: 'Middle component',
        body: 'Forwards ref as a regular prop',
        iconName: 'middle',
        tone: 'violet',
      },
      {
        id: 'child',
        number: '03',
        title: 'Child component',
        body: 'Receives ref via props',
        iconName: 'child',
        tone: 'teal',
      },
      {
        id: 'dom',
        number: '04',
        title: 'DOM / instance',
        body: 'ref points to the actual target',
        iconName: 'dom',
        tone: 'amber',
      },
    ],
    emphasis: 'No special API — the same usage works in every function component.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'Source code checkpoint',
    title: 'Simpler ref handling in the source',
    description:
      'In React 19, ref simply arrives via props. There is no separate ref field anymore.',
    fileLabel: 'File',
    filePath: 'packages/react/src/ReactBaseClasses.js',
    changeLabel: 'Change point',
    changePoint: 'Ref handling simplified',
    ideaLabel: 'Core idea',
    coreIdea: 'Stop treating ref as a special path; let it flow exactly like an ordinary prop.',
    code: 'class Component {\n  // ...\n\n  constructor(props, context, updater) {\n    this.props = props;\n    this.context = context;\n\n    // React 19: ref now arrives via props.\n    // It is no longer split into a separate ref field.\n    this.ref = props.ref ?? null;\n  }\n\n  // ...\n}',
    primaryCta: 'Open related source',
    secondaryCta: 'See change history',
    primaryHref: '#flow',
    secondaryHref: '#compare',
  },
  benefits: {
    badge: '06',
    eyebrow: 'What this change enables',
    title: 'Three downstream wins',
    description: 'Simpler syntax means more room for abstractions you build on top.',
    cards: [
      {
        id: 'simpler',
        title: 'Component design gets simpler',
        body: 'You can receive ref directly without a forwardRef wrapper.',
        iconName: 'code',
        tone: 'cyan',
      },
      {
        id: 'predictable',
        title: 'Predictable data flow',
        body: 'ref flows like a prop, so debugging and tracing become easier.',
        iconName: 'link',
        tone: 'teal',
      },
      {
        id: 'ecosystem',
        title: 'Libraries and the ecosystem grow',
        body: 'A more consistent pattern enables more powerful component APIs.',
        iconName: 'package',
        tone: 'violet',
      },
    ],
  },
  quiz: {
    badge: '07',
    eyebrow: 'Quick quiz',
    title: 'Answer in one line',
    description: 'Two questions sharpen the key takeaway.',
    answerLabel: 'Answer',
    cards: [
      {
        id: 'q1',
        question: 'Do you still need forwardRef to use ref in React 19?',
        answer: 'No — ref flows like an ordinary prop, no forwardRef needed.',
        explanation: 'Every function component can now receive ref via props.',
        tone: 'violet',
      },
      {
        id: 'q2',
        question: 'Summarize the React 19 ref change in one sentence.',
        answer: 'ref now flows like a regular prop and applies in more places.',
        explanation: 'A simpler, more consistent model gives component design more freedom.',
        tone: 'teal',
      },
    ],
  },
  nextStep: {
    eyebrow: 'Continue to the next step',
    title: 'Time to enter the Fiber chapter',
    description:
      'Now that you understand why ref became stronger, next look at how React manages and connects state through its core object — Fiber.',
    cta: 'Go to the next page',
    href: '/element-vs-fiber',
  },
};

export const reactElementRefReact19Content: Record<Locale, ReactElementRefReact19Content> = {
  ko,
  en,
};
