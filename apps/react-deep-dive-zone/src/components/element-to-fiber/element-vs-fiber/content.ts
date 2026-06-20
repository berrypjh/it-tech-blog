import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type RecapStep = {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'code' | 'wand' | 'box';
};

export type ComparisonColumnKey = 'element' | 'fiber';

export type ComparisonRow = {
  id: string;
  label: string;
  element: string;
  fiber: string;
};

export type WhyFiberCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'tree' | 'refresh' | 'loader' | 'flag';
  tone: ToneKey;
};

export type ProblemCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'help' | 'pause' | 'target' | 'layers';
  tone: ToneKey;
};

export type FlowCardKind = 'jsx' | 'element' | 'fiber';

export type FlowCardItem = {
  label: string;
  value: string;
};

export type FlowCard = {
  id: string;
  kind: FlowCardKind;
  label: string;
  description: string;
  code?: string;
  items?: FlowCardItem[];
};

export type ElementVsFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    elementLabel: string;
    elementCode: string;
    fiberLabel: string;
    fiberCode: string;
    arrowLabel: string;
  };
  recap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RecapStep[];
    notice: string;
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    aspectLabel: string;
    columns: { id: ComparisonColumnKey; label: string }[];
    rows: ComparisonRow[];
  };
  whyFiber: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WhyFiberCard[];
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FlowCard[];
    footnote: string;
  };
  problems: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ProblemCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: ElementVsFiberContent = {
  hero: {
    badge: 'Fiber 생성 · 1/10단계',
    title: {
      line1: 'React Element는 설명이고,',
      line2: 'Fiber는 작업 단위입니다.',
    },
    description:
      'JSX가 만든 Element는 무엇을 렌더링할지만 설명합니다. 하지만 실제 렌더링을 진행하려면 React는 더 많은 정보가 필요합니다.',
    elementLabel: 'React Element 객체',
    elementCode: '{\n  type,\n  key,\n  props,\n}',
    fiberLabel: 'Fiber 객체',
    fiberCode:
      '{\n  tag,\n  key,\n  type,\n  pendingProps,\n  child,\n  sibling,\n  return,\n  lanes,\n  alternate,\n}',
    arrowLabel: '확장',
  },
  recap: {
    badge: '01',
    eyebrow: '앞 챕터 복습',
    title: '앞 챕터 복습: JSX → Element',
    description:
      'JSX는 runtime 함수 호출로 바뀌고, 그 호출이 React Element라는 설명 객체를 만들었습니다.',
    steps: [
      {
        id: 'jsx',
        title: 'JSX',
        subtitle: '개발자가 작성한 UI 표현 문법',
        iconName: 'code',
      },
      {
        id: 'runtime',
        title: 'jsx / jsxs / jsxDEV 또는 createElement',
        subtitle: '컴파일러가 호출하는 runtime 함수',
        iconName: 'wand',
      },
      {
        id: 'element',
        title: 'React Element',
        subtitle: 'type / key / props를 담은 설명 객체',
        iconName: 'box',
      },
    ],
    notice: '이번 챕터에서는 그 Element가 Fiber가 되는 과정을 본다.',
  },
  comparison: {
    badge: '02',
    eyebrow: '한눈에 정리',
    title: 'Element vs Fiber 비교표',
    description: '같은 UI 정보를 두 단계가 어떻게 다르게 다루는지, 표 하나로 모았습니다.',
    aspectLabel: '구분',
    columns: [
      { id: 'element', label: 'React Element' },
      { id: 'fiber', label: 'Fiber' },
    ],
    rows: [
      {
        id: 'role',
        label: '역할',
        element: '무엇을 렌더링할지 설명',
        fiber: '실제 렌더링 작업을 수행하고 추적',
      },
      {
        id: 'fields',
        label: '주요 정보',
        element: 'type, key, props 중심',
        fiber: 'tag, props, 트리 연결, 우선순위, alternate 등',
      },
      {
        id: 'when',
        label: '사용 시점',
        element: 'JSX가 평가된 직후',
        fiber: 'Reconciler가 작업 단위를 만들 때',
      },
      {
        id: 'tracking',
        label: '작업 추적 가능 여부',
        element: '어려움',
        fiber: '가능',
      },
      {
        id: 'next',
        label: '다음 단계',
        element: 'Fiber로 변환',
        fiber: 'beginWork / completeWork 등 렌더링 단계로 진행',
      },
    ],
  },
  whyFiber: {
    badge: '03',
    eyebrow: '추가 정보가 필요한 이유',
    title: '왜 Fiber가 필요한가?',
    description:
      'Element만으로는 렌더링 작업을 진행할 수 없습니다. Fiber는 다음 네 가지 책임을 짊어집니다.',
    cards: [
      {
        id: 'tree',
        title: '트리 연결',
        body: '부모 / 자식 / 형제 관계를 return, child, sibling 포인터로 관리합니다.',
        iconName: 'tree',
        tone: 'blue',
      },
      {
        id: 'update-state',
        title: '업데이트 상태',
        body: '무엇이 바뀌었는지, 어떤 props/state로 다시 그릴지 저장합니다.',
        iconName: 'refresh',
        tone: 'teal',
      },
      {
        id: 'progress',
        title: '작업 진행',
        body: '렌더링을 어디까지 했는지 추적해 중단과 재개를 가능하게 합니다.',
        iconName: 'loader',
        tone: 'violet',
      },
      {
        id: 'priority',
        title: '우선순위',
        body: 'lanes로 어떤 작업을 먼저 처리할지 판단해 사용자 입력을 우선합니다.',
        iconName: 'flag',
        tone: 'amber',
      },
    ],
  },
  flow: {
    badge: '04',
    eyebrow: '하나의 요소가 거치는 길',
    title: '한 요소가 Element에서 Fiber로 확장되는 흐름',
    description:
      'JSX 한 줄이 Element 객체가 되고, 그 Element가 더 많은 정보를 가진 Fiber로 확장됩니다.',
    cards: [
      {
        id: 'jsx',
        kind: 'jsx',
        label: 'JSX',
        description: '개발자가 작성한 한 줄',
        code: '<MyButton label="저장" />',
      },
      {
        id: 'element',
        kind: 'element',
        label: 'React Element',
        description: '설명 객체로 평가됨',
        items: [
          { label: 'type', value: 'MyButton' },
          { label: 'key', value: 'null' },
          { label: 'props', value: "{ label: '저장' }" },
        ],
      },
      {
        id: 'fiber',
        kind: 'fiber',
        label: 'Fiber',
        description: '작업 단위로 확장됨',
        items: [
          { label: 'tag', value: 'FunctionComponent' },
          { label: 'type', value: 'MyButton' },
          { label: 'pendingProps', value: "{ label: '저장' }" },
          { label: 'return / child / sibling', value: '이후 연결' },
        ],
      },
    ],
    footnote:
      '같은 UI 정보를 그대로 가져오면서도, Fiber는 트리 연결과 작업 진행 정보를 위해 더 많은 필드를 가집니다.',
  },
  problems: {
    badge: '05',
    eyebrow: 'Element만으로는 막히는 지점',
    title: 'Fiber가 없으면 곤란한 것들',
    description:
      '왜 React는 Element에서 멈추지 않고 한 단계를 더 만들까요. Fiber 없이 진행하려면 다음 네 가지 문제에 부딪힙니다.',
    cards: [
      {
        id: 'progress-lost',
        title: '어디까지 계산했는지 모른다',
        body: '렌더링 진행 상태를 중간에 기록하기 어렵다.',
        iconName: 'help',
        tone: 'amber',
      },
      {
        id: 'pause-resume',
        title: '작업을 멈추고 다시 이어가기 어렵다',
        body: '협력적 스케줄링과 분할 처리가 힘들어진다.',
        iconName: 'pause',
        tone: 'sky',
      },
      {
        id: 'target',
        title: '업데이트 대상을 추적하기 어렵다',
        body: '어떤 부분이 바뀌었는지 세밀하게 관리하기 어렵다.',
        iconName: 'target',
        tone: 'violet',
      },
      {
        id: 'alternate',
        title: '현재 화면과 다음 화면을 분리하기 어렵다',
        body: 'alternate 같은 구조 없이 이전/다음 상태 비교가 불편해진다.',
        iconName: 'layers',
        tone: 'blue',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'createFiberFromElement',
    description:
      'Element와 Fiber의 차이를 이해했다면, 이제 실제 코드에서 Element가 Fiber로 바뀌는 입구를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/create-fiber-from-element',
  },
};

const en: ElementVsFiberContent = {
  hero: {
    badge: 'Element → Fiber · 1/10',
    title: {
      line1: 'A React Element is a description,',
      line2: 'a Fiber is a unit of work.',
    },
    description:
      'The Element produced by JSX only describes what to render. To actually carry out rendering, React needs much more information.',
    elementLabel: 'React Element object',
    elementCode: '{\n  type,\n  key,\n  props,\n}',
    fiberLabel: 'Fiber object',
    fiberCode:
      '{\n  tag,\n  key,\n  type,\n  pendingProps,\n  child,\n  sibling,\n  return,\n  lanes,\n  alternate,\n}',
    arrowLabel: 'expand',
  },
  recap: {
    badge: '01',
    eyebrow: 'Previous chapter recap',
    title: 'Recap: JSX → Element',
    description:
      'JSX becomes runtime function calls, and those calls produce the React Element — the description object.',
    steps: [
      {
        id: 'jsx',
        title: 'JSX',
        subtitle: 'UI syntax the developer writes',
        iconName: 'code',
      },
      {
        id: 'runtime',
        title: 'jsx / jsxs / jsxDEV or createElement',
        subtitle: 'Runtime functions the compiler emits',
        iconName: 'wand',
      },
      {
        id: 'element',
        title: 'React Element',
        subtitle: 'Description object with type / key / props',
        iconName: 'box',
      },
    ],
    notice: 'This chapter follows that Element as it becomes a Fiber.',
  },
  comparison: {
    badge: '02',
    eyebrow: 'Side by side',
    title: 'Element vs Fiber — at a glance',
    description:
      'The same UI information is handled differently at each stage. One table sums up the differences.',
    aspectLabel: 'Aspect',
    columns: [
      { id: 'element', label: 'React Element' },
      { id: 'fiber', label: 'Fiber' },
    ],
    rows: [
      {
        id: 'role',
        label: 'Role',
        element: 'Describes what to render',
        fiber: 'Performs and tracks the actual rendering work',
      },
      {
        id: 'fields',
        label: 'Key fields',
        element: 'type, key, props (mostly)',
        fiber: 'tag, props, tree links, priority, alternate, …',
      },
      {
        id: 'when',
        label: 'When used',
        element: 'Right after JSX is evaluated',
        fiber: 'When the reconciler builds units of work',
      },
      {
        id: 'tracking',
        label: 'Work tracking',
        element: 'Hard',
        fiber: 'Built in',
      },
      {
        id: 'next',
        label: 'Next step',
        element: 'Converted into a Fiber',
        fiber: 'Goes through beginWork / completeWork phases',
      },
    ],
  },
  whyFiber: {
    badge: '03',
    eyebrow: 'Why more information is needed',
    title: 'Why does Fiber exist?',
    description:
      'Elements alone can not carry rendering forward. Fiber shoulders four extra responsibilities.',
    cards: [
      {
        id: 'tree',
        title: 'Tree links',
        body: 'Manages parent / child / sibling relations through return, child, and sibling pointers.',
        iconName: 'tree',
        tone: 'blue',
      },
      {
        id: 'update-state',
        title: 'Update state',
        body: 'Records what changed and which props/state to re-render with.',
        iconName: 'refresh',
        tone: 'teal',
      },
      {
        id: 'progress',
        title: 'Work progress',
        body: 'Tracks how far rendering has gone — enabling pause and resume.',
        iconName: 'loader',
        tone: 'violet',
      },
      {
        id: 'priority',
        title: 'Priority',
        body: 'Uses lanes to decide which work runs first, so user input wins.',
        iconName: 'flag',
        tone: 'amber',
      },
    ],
  },
  flow: {
    badge: '04',
    eyebrow: 'One element’s journey',
    title: 'How one element expands from Element to Fiber',
    description:
      'A single JSX line becomes an Element object, and that Element expands into a Fiber with much more information.',
    cards: [
      {
        id: 'jsx',
        kind: 'jsx',
        label: 'JSX',
        description: 'One developer-written line',
        code: '<MyButton label="Save" />',
      },
      {
        id: 'element',
        kind: 'element',
        label: 'React Element',
        description: 'Evaluated into a description object',
        items: [
          { label: 'type', value: 'MyButton' },
          { label: 'key', value: 'null' },
          { label: 'props', value: "{ label: 'Save' }" },
        ],
      },
      {
        id: 'fiber',
        kind: 'fiber',
        label: 'Fiber',
        description: 'Expanded into a unit of work',
        items: [
          { label: 'tag', value: 'FunctionComponent' },
          { label: 'type', value: 'MyButton' },
          { label: 'pendingProps', value: "{ label: 'Save' }" },
          { label: 'return / child / sibling', value: 'connected later' },
        ],
      },
    ],
    footnote:
      'Fiber keeps the same UI information but adds more fields for tree links and work tracking.',
  },
  problems: {
    badge: '05',
    eyebrow: 'Where Elements alone fail',
    title: 'What goes wrong without Fiber',
    description:
      'Why does React take an extra step instead of stopping at the Element? Trying to skip Fiber hits four walls.',
    cards: [
      {
        id: 'progress-lost',
        title: 'Cannot tell how far we got',
        body: 'There is no good place to record mid-render progress.',
        iconName: 'help',
        tone: 'amber',
      },
      {
        id: 'pause-resume',
        title: 'Cannot pause and resume work',
        body: 'Cooperative scheduling and splitting work become very hard.',
        iconName: 'pause',
        tone: 'sky',
      },
      {
        id: 'target',
        title: 'Cannot track update targets',
        body: 'No fine-grained way to manage which parts changed.',
        iconName: 'target',
        tone: 'violet',
      },
      {
        id: 'alternate',
        title: 'Cannot separate current vs next screen',
        body: 'Without something like alternate, comparing old and new state is awkward.',
        iconName: 'layers',
        tone: 'blue',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'createFiberFromElement',
    description:
      'Now that the difference between Element and Fiber is clear, look at the actual code where an Element becomes a Fiber.',
    cta: 'Go to the next page',
    href: '/create-fiber-from-element',
  },
};

export const elementVsFiberContent: Record<Locale, ElementVsFiberContent> = {
  ko,
  en,
};
