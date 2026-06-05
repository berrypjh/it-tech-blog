import type { Locale } from '@it-tech-blog/preferences';

import type { PathKey } from './tone';

export type IconKey =
  | 'package'
  | 'route'
  | 'layers'
  | 'sparkles'
  | 'workflow'
  | 'code'
  | 'split'
  | 'shield-alert'
  | 'triangle-alert'
  | 'compass'
  | 'mouse-click'
  | 'play-circle'
  | 'search'
  | 'target'
  | 'pen';

export type SupportQuestion = {
  body: string;
  iconKey: IconKey;
};

export type WhatChangedCard = {
  path: PathKey;
  title: string;
  items: string[];
  iconKey: IconKey;
};

export type FlowStep = {
  path: PathKey;
  title: string;
  caption?: string;
  code?: string;
  iconKey: IconKey;
};

export type RefPath = {
  path: PathKey;
  label: string;
  buttonLabel: string;
  steps: { title: string; caption: string; iconKey: IconKey }[];
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  path: PathKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type RefAsPropElementShapeContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    subtitleLines: [string, string];
    before: { label: string; langBadge: 'JSX'; code: string };
    after: { label: string; langBadge: 'JSX'; code: string };
    centerLabels: { before: string; after: string };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string, string];
    supportQuestions: SupportQuestion[];
  };
  forwardRefPattern: {
    number: string;
    eyebrow: string;
    title: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    explanationTitle: string;
    explanationPoints: string[];
  };
  refAsPropPattern: {
    number: string;
    eyebrow: string;
    title: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    explanationTitle: string;
    explanationPoints: string[];
  };
  whatChanged: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WhatChangedCard[];
  };
  elementRefDeprecation: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    left: { title: string; codeLine: string; body: string };
    middle: { title: string; codeLine: string; body: string };
    warning: { title: string; body: string; badge: string };
  };
  propsRefFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  useImperative: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    exampleTitle: string;
    exampleCode: string;
    explanationPoints: string[];
  };
  internalCode: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'JS'; code: string };
    fileCard: {
      title: string;
      filePath: string;
      buttonLabel: string;
      href: string;
    };
  };
  pathInteractor: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonsLabel: string;
    defaultPath: 'react18' | 'react19';
    paths: RefPath[];
    benefitsTitle: string;
    benefits: string[];
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: Mission[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: RefAsPropElementShapeContent = {
  hero: {
    badge: 'React 19 변화 · 5/10단계',
    titleLines: ['ref as prop은 React Element와', '컴포넌트 호출 경로를 어떻게 바꿨나?'],
    subtitleLines: ['React 19에서는 함수 컴포넌트도', 'ref를 일반 prop처럼 받을 수 있습니다.'],
    before: {
      label: 'React 18 (forwardRef)',
      langBadge: 'JSX',
      code: `import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
});

// 사용
<MyInput ref={inputRef} placeholder="이름" />;`,
    },
    after: {
      label: 'React 19 (ref as prop)',
      langBadge: 'JSX',
      code: `function MyInput({ placeholder, ref, ...props }) {
  return <input placeholder={placeholder} ref={ref} {...props} />;
}

// 사용
<MyInput ref={inputRef} placeholder="이름" />;`,
    },
    centerLabels: { before: 'Before', after: 'After' },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      'forwardRef 없이 ref를 받는다는 것은',
      'React 내부 표현 관점에서 무엇이',
      '달라졌다는 뜻일까?',
    ],
    supportQuestions: [
      { body: '왜 forwardRef가 필요했을까?', iconKey: 'package' },
      { body: 'ref 표현이 어디에서 중심이 되었을까?', iconKey: 'target' },
      { body: 'Element와 컴포넌트 호출 경로는?', iconKey: 'route' },
      { body: 'React 19 코드에서 어떻게 구현됐을까?', iconKey: 'code' },
    ],
  },
  forwardRefPattern: {
    number: '03',
    eyebrow: 'React 18',
    title: 'React 18의 forwardRef 패턴',
    code: {
      fileName: 'MyInput.tsx · React 18',
      langBadge: 'TSX',
      code: `import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>,
) {
  return <input {...props} ref={ref} />;
});`,
    },
    explanationTitle: '설명',
    explanationPoints: [
      '함수 컴포넌트는 ref를 직접 받지 못했습니다.',
      '특수 컴포넌트로 감싸야 React가 ref를 두 번째 인자로 전달했습니다.',
      'wrapper 컴포넌트가 하나 더 생겼습니다.',
      '타입 정의, 컴포넌트 이름, 디버깅 흐름이 복잡해졌습니다.',
    ],
  },
  refAsPropPattern: {
    number: '04',
    eyebrow: 'React 19',
    title: 'React 19의 ref as prop 패턴',
    code: {
      fileName: 'MyInput.tsx · React 19',
      langBadge: 'TSX',
      code: `function MyInput({
  placeholder,
  ref,
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return <input placeholder={placeholder} ref={ref} {...props} />;
}`,
    },
    explanationTitle: '설명',
    explanationPoints: [
      'ref가 props 구조 안에서 일반 prop처럼 전달됩니다.',
      '별도의 forwardRef wrapper가 필요 없습니다.',
      '컴포넌트 선언이 간결해지고, 타입 추론/디버깅도 쉬워집니다.',
      'ref가 props가 되는 흐름에서 이해됩니다.',
    ],
  },
  whatChanged: {
    number: '05',
    eyebrow: 'What Changed',
    title: '무엇이 달라졌는가?',
    description: '코드 외형뿐 아니라 ref 전달 경로와 Element 표현의 기준점이 함께 이동했습니다.',
    cards: [
      {
        path: 'react19',
        title: '컴포넌트 선언 간결화',
        items: ['forwardRef 제거', '함수 컴포넌트 그대로 사용', '코드 가독성 향상'],
        iconKey: 'code',
      },
      {
        path: 'propsRef',
        title: 'ref 전달 경로 단순화',
        items: ['별도 wrapper 없음', 'props.ref로 직접 전달', '디버깅/추적 단순화'],
        iconKey: 'route',
      },
      {
        path: 'internals',
        title: 'Element 표현 기준 이동',
        items: ['element.ref → props.ref', 'props.ref가 source of truth', 'React 내부 표현 변화'],
        iconKey: 'layers',
      },
    ],
  },
  elementRefDeprecation: {
    number: '06',
    eyebrow: 'element.ref shift',
    title: 'element.ref 접근의 변화',
    description: 'Element 위에서 ref를 어디서 읽을지의 기준이 React 19에서 이동합니다.',
    left: {
      title: '이전 감각 (React 18)',
      codeLine: 'element.ref',
      body: '직접 접근관계인 듯한 감각에서 출발',
    },
    middle: {
      title: 'React 19 방향',
      codeLine: 'element.props.ref',
      body: 'props.ref가 ref 표현의 중심',
    },
    warning: {
      title: 'element.ref deprecation',
      body: 'React 19에서는 element.ref 접근이 점점 더 이상 권장되지 않습니다.',
      badge: 'Deprecated',
    },
  },
  propsRefFlow: {
    number: '07',
    eyebrow: 'Source of Truth',
    title: 'props.ref가 source of truth가 되는 구조',
    description:
      'JSX에서 시작한 ref가 React.createElement 내부와 컴포넌트 호출까지 모두 props.ref 한 경로로 흐릅니다.',
    steps: [
      {
        path: 'propsRef',
        title: 'JSX',
        code: `<MyInput ref={r} />`,
        iconKey: 'pen',
      },
      {
        path: 'propsRef',
        title: 'props.ref 저장',
        caption: 'React.createElement 내부에서 props.ref 보관',
        iconKey: 'package',
      },
      {
        path: 'internals',
        title: 'Element ref 계산',
        caption: 'ref = props.ref ?? null',
        iconKey: 'layers',
      },
      {
        path: 'react19',
        title: '컴포넌트 호출 시 전달',
        caption: 'props.ref로 컴포넌트에 전달',
        iconKey: 'workflow',
      },
    ],
  },
  useImperative: {
    number: '08',
    eyebrow: 'useImperativeHandle',
    title: 'useImperativeHandle과 연결',
    description:
      'ref를 prop으로 받더라도 useImperativeHandle은 그대로 동작합니다. wrapper가 사라졌을 뿐 흐름은 같습니다.',
    code: {
      fileName: 'CustomInput.tsx',
      langBadge: 'TSX',
      code: `import { useRef, useImperativeHandle } from "react";

function CustomInput({
  ref,
  ...props
}: {
  ref: React.Ref<{ focus: () => void }>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      innerRef.current?.focus();
    },
  }));

  return <input ref={innerRef} {...props} />;
}`,
    },
    exampleTitle: 'Imperative Handle 예시',
    exampleCode: `{
  focus() {
    // 내부 input에 포커스 지향
  }
}`,
    explanationPoints: [
      '부모 컴포넌트는 ref.current.focus() 호출 가능',
      'ref는 props를 통해 직접 전달되어 구현부에서 사용할 수 있음',
      'forwardRef 없이도 동일한 imperative handle 구성이 가능',
    ],
  },
  internalCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: '실제 코드 미리보기 (ReactJSXElement.js)',
    description:
      'React.createElement 내부에서 props.ref가 그대로 ref 표현의 기준이 되는 흐름을 확인할 수 있습니다.',
    code: {
      fileName: 'ReactJSXElement.js · 발췌',
      langBadge: 'JS',
      code: `function ReactJSXElement(type, key, self, source, getOwner, props) {
  // props.ref가 ref 표현의 기준이 됩니다.
  const refProp = props.ref;
  const ref = refProp !== undefined ? refProp : null;

  // ...

  return element;
}`,
    },
    fileCard: {
      title: '파일 위치',
      filePath: 'packages/react/src/jsx/ReactJSXElement.js',
      buttonLabel: 'GitHub에서 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
    },
  },
  pathInteractor: {
    number: '10',
    eyebrow: 'Path Comparison',
    title: 'ref 경로 비교 인터랙션',
    description: 'parent ref가 input DOM까지 닿는 경로를 React 18 / React 19로 나눠 비교합니다.',
    buttonsLabel: '버전 선택',
    defaultPath: 'react19',
    paths: [
      {
        path: 'react18',
        label: 'React 18 경로',
        buttonLabel: 'React 18',
        steps: [
          { title: 'parent ref', caption: '부모에서 만든 ref', iconKey: 'mouse-click' },
          { title: 'forwardRef wrapper', caption: '특수 컴포넌트로 감쌈', iconKey: 'package' },
          {
            title: '두 번째 인자 ref 전달',
            caption: 'wrapper가 ref를 두 번째 인자로 전달',
            iconKey: 'split',
          },
          { title: 'input DOM', caption: '실제 DOM에 연결', iconKey: 'target' },
        ],
      },
      {
        path: 'react19',
        label: 'React 19 경로',
        buttonLabel: 'React 19',
        steps: [
          { title: 'parent ref', caption: '부모에서 만든 ref', iconKey: 'mouse-click' },
          { title: 'props.ref', caption: 'JSX의 ref가 props.ref로 흐름', iconKey: 'route' },
          {
            title: '컴포넌트 내부에서 직접 사용',
            caption: 'wrapper 없이 함수 컴포넌트가 받음',
            iconKey: 'workflow',
          },
          { title: 'input DOM', caption: '실제 DOM에 연결', iconKey: 'target' },
        ],
      },
    ],
    benefitsTitle: 'React 19의 이점',
    benefits: [
      '경로가 더 직관적입니다.',
      '컴포넌트 트리 깊이가 줄어듭니다.',
      '디버깅과 타입 추론이 쉬워집니다.',
      'Element 표현이 일관됩니다.',
    ],
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '문서·코드·실습을 직접 잡아 가며 ref as prop 변화를 손에 익혀 봅니다.',
    missions: [
      {
        number: '01',
        title: 'forwardRef가 왜 필요했는지 먼저 정리한다',
        helper: 'React 18의 제약 이해',
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'React 19 코드에서 props.ref 기준 흐름을 확인한다',
        helper: 'ReactJSXElement.js 읽기',
        iconKey: 'search',
      },
      {
        number: '03',
        title: 'useImperativeHandle 예제를 ref as prop 스타일로 바꿔본다',
        helper: '실습으로 익히기',
        iconKey: 'pen',
      },
      {
        number: '04',
        title: 'ref 전달 경로가 어떻게 단순화됐는지 구조적으로 설명한다',
        helper: '나만의 언어로 정리',
        iconKey: 'route',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        path: 'react19',
        title: 'React 19는 ref 전달 경로를 더 직접적으로 만들었다.',
        body: 'forwardRef wrapper 없이 props.ref로 직접 전달됩니다.',
        iconKey: 'route',
      },
      {
        number: '02',
        path: 'propsRef',
        title: 'props.ref가 ref 표현의 중심이 된다.',
        body: 'Element 표현 기준이 element.ref에서 props.ref로 이동했습니다.',
        iconKey: 'target',
      },
      {
        number: '03',
        path: 'internals',
        title: '이는 Element 표현과 함수 컴포넌트 API 모두에 영향을 준다.',
        body: '디버깅, 타입 추론, 유지보수성이 전반적으로 향상됩니다.',
        iconKey: 'layers',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 단계로',
    title: '다음: Metadata와 Resource Components',
    description:
      '다음 페이지에서는 React 19가 문서 자원과 head 관리 모델을 어떻게 확장했는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/metadata-resource-react-dom',
  },
};

const en: RefAsPropElementShapeContent = {
  hero: {
    badge: 'React 19 Changes · 5/10',
    titleLines: ['How did ref as prop reshape React Element', 'and the component call path?'],
    subtitleLines: [
      'In React 19, function components can also',
      'receive ref like any other prop.',
    ],
    before: {
      label: 'React 18 (forwardRef)',
      langBadge: 'JSX',
      code: `import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input {...props} ref={ref} />;
});

// usage
<MyInput ref={inputRef} placeholder="Name" />;`,
    },
    after: {
      label: 'React 19 (ref as prop)',
      langBadge: 'JSX',
      code: `function MyInput({ placeholder, ref, ...props }) {
  return <input placeholder={placeholder} ref={ref} {...props} />;
}

// usage
<MyInput ref={inputRef} placeholder="Name" />;`,
    },
    centerLabels: { before: 'Before', after: 'After' },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'When ref arrives without forwardRef,',
      "what really changed inside React's",
      'internal representation?',
    ],
    supportQuestions: [
      { body: 'Why was forwardRef needed?', iconKey: 'package' },
      { body: 'Where did the center of ref representation move?', iconKey: 'target' },
      { body: 'What about the Element / component call path?', iconKey: 'route' },
      { body: 'How is this written in React 19 code?', iconKey: 'code' },
    ],
  },
  forwardRefPattern: {
    number: '03',
    eyebrow: 'React 18',
    title: 'The React 18 forwardRef pattern',
    code: {
      fileName: 'MyInput.tsx · React 18',
      langBadge: 'TSX',
      code: `import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>,
) {
  return <input {...props} ref={ref} />;
});`,
    },
    explanationTitle: 'What this means',
    explanationPoints: [
      "Function components couldn't receive ref directly.",
      'A special wrapper was needed so React would pass ref as the second argument.',
      'One extra wrapper component appeared in the tree.',
      'Typing, naming, and debugging all got more involved.',
    ],
  },
  refAsPropPattern: {
    number: '04',
    eyebrow: 'React 19',
    title: 'The React 19 ref-as-prop pattern',
    code: {
      fileName: 'MyInput.tsx · React 19',
      langBadge: 'TSX',
      code: `function MyInput({
  placeholder,
  ref,
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return <input placeholder={placeholder} ref={ref} {...props} />;
}`,
    },
    explanationTitle: 'What this means',
    explanationPoints: [
      'ref is passed inside the props shape like any other prop.',
      'No separate forwardRef wrapper is required.',
      'The component declaration is shorter; typing and debugging are simpler.',
      "It's understood as 'ref flows through props.'",
    ],
  },
  whatChanged: {
    number: '05',
    eyebrow: 'What Changed',
    title: 'What actually changed?',
    description:
      "Not just the syntax — the ref-flow path and the Element's source-of-truth move together.",
    cards: [
      {
        path: 'react19',
        title: 'Simpler component declaration',
        items: ['forwardRef removed', 'Function component used as-is', 'Better readability'],
        iconKey: 'code',
      },
      {
        path: 'propsRef',
        title: 'Simpler ref-flow path',
        items: ['No separate wrapper', 'Direct via props.ref', 'Easier debugging / tracing'],
        iconKey: 'route',
      },
      {
        path: 'internals',
        title: 'Element representation shift',
        items: ['element.ref → props.ref', 'props.ref is source of truth', 'Internal shape change'],
        iconKey: 'layers',
      },
    ],
  },
  elementRefDeprecation: {
    number: '06',
    eyebrow: 'element.ref shift',
    title: 'How element.ref access changed',
    description: "The 'where to read ref from on an Element' baseline moves in React 19.",
    left: {
      title: 'Old intuition (React 18)',
      codeLine: 'element.ref',
      body: 'Felt like a direct-access slot',
    },
    middle: {
      title: 'React 19 direction',
      codeLine: 'element.props.ref',
      body: 'props.ref is the center of ref representation',
    },
    warning: {
      title: 'element.ref deprecation',
      body: 'In React 19, accessing element.ref is increasingly discouraged.',
      badge: 'Deprecated',
    },
  },
  propsRefFlow: {
    number: '07',
    eyebrow: 'Source of Truth',
    title: 'props.ref as the source of truth',
    description:
      'ref starts in JSX and flows through React.createElement and component invocation all via a single props.ref path.',
    steps: [
      {
        path: 'propsRef',
        title: 'JSX',
        code: `<MyInput ref={r} />`,
        iconKey: 'pen',
      },
      {
        path: 'propsRef',
        title: 'Store props.ref',
        caption: 'React.createElement keeps props.ref',
        iconKey: 'package',
      },
      {
        path: 'internals',
        title: 'Compute Element ref',
        caption: 'ref = props.ref ?? null',
        iconKey: 'layers',
      },
      {
        path: 'react19',
        title: 'Pass on component call',
        caption: 'Forwarded as props.ref to the component',
        iconKey: 'workflow',
      },
    ],
  },
  useImperative: {
    number: '08',
    eyebrow: 'useImperativeHandle',
    title: 'Hooking into useImperativeHandle',
    description:
      'Even with ref as prop, useImperativeHandle still works the same way — only the wrapper disappears.',
    code: {
      fileName: 'CustomInput.tsx',
      langBadge: 'TSX',
      code: `import { useRef, useImperativeHandle } from "react";

function CustomInput({
  ref,
  ...props
}: {
  ref: React.Ref<{ focus: () => void }>;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const innerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      innerRef.current?.focus();
    },
  }));

  return <input ref={innerRef} {...props} />;
}`,
    },
    exampleTitle: 'Imperative handle shape',
    exampleCode: `{
  focus() {
    // focus the inner input
  }
}`,
    explanationPoints: [
      'Parent can call ref.current.focus()',
      'ref arrives directly via props so the implementation can use it',
      'Same imperative-handle setup works without forwardRef',
    ],
  },
  internalCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: 'Source preview (ReactJSXElement.js)',
    description:
      'Inside React.createElement, props.ref becomes the baseline for the ref expression on the Element.',
    code: {
      fileName: 'ReactJSXElement.js · excerpt',
      langBadge: 'JS',
      code: `function ReactJSXElement(type, key, self, source, getOwner, props) {
  // props.ref is the basis for ref representation.
  const refProp = props.ref;
  const ref = refProp !== undefined ? refProp : null;

  // ...

  return element;
}`,
    },
    fileCard: {
      title: 'File location',
      filePath: 'packages/react/src/jsx/ReactJSXElement.js',
      buttonLabel: 'Open on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
    },
  },
  pathInteractor: {
    number: '10',
    eyebrow: 'Path Comparison',
    title: 'ref path interactor',
    description: 'Compare the path from parent ref to input DOM in React 18 vs React 19.',
    buttonsLabel: 'Pick a version',
    defaultPath: 'react19',
    paths: [
      {
        path: 'react18',
        label: 'React 18 path',
        buttonLabel: 'React 18',
        steps: [
          { title: 'parent ref', caption: 'ref created by the parent', iconKey: 'mouse-click' },
          {
            title: 'forwardRef wrapper',
            caption: 'Wrapped by special component',
            iconKey: 'package',
          },
          {
            title: 'Pass ref as second arg',
            caption: 'Wrapper forwards ref to the inner fn',
            iconKey: 'split',
          },
          { title: 'input DOM', caption: 'Attached to real DOM', iconKey: 'target' },
        ],
      },
      {
        path: 'react19',
        label: 'React 19 path',
        buttonLabel: 'React 19',
        steps: [
          { title: 'parent ref', caption: 'ref created by the parent', iconKey: 'mouse-click' },
          { title: 'props.ref', caption: 'JSX ref flows into props.ref', iconKey: 'route' },
          {
            title: 'Used directly in component',
            caption: 'Function component receives it directly',
            iconKey: 'workflow',
          },
          { title: 'input DOM', caption: 'Attached to real DOM', iconKey: 'target' },
        ],
      },
    ],
    benefitsTitle: 'React 19 benefits',
    benefits: [
      'The path is more intuitive.',
      'Tree depth is reduced.',
      'Debugging and type inference are easier.',
      'Element representation is consistent.',
    ],
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description:
      'Docs → real source → hands-on rewrite — get the ref-as-prop change into your hands.',
    missions: [
      {
        number: '01',
        title: 'Write down why forwardRef was needed in the first place',
        helper: "Understand React 18's constraint",
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'Trace the props.ref-based flow in React 19 code',
        helper: 'Read ReactJSXElement.js',
        iconKey: 'search',
      },
      {
        number: '03',
        title: 'Rewrite a useImperativeHandle example in ref-as-prop style',
        helper: 'Hands-on practice',
        iconKey: 'pen',
      },
      {
        number: '04',
        title: 'Explain structurally how the ref path got simpler',
        helper: 'Put it in your own words',
        iconKey: 'route',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        path: 'react19',
        title: 'React 19 made the ref-forwarding path more direct.',
        body: 'No forwardRef wrapper — ref is forwarded via props.ref.',
        iconKey: 'route',
      },
      {
        number: '02',
        path: 'propsRef',
        title: 'props.ref becomes the center of ref representation.',
        body: "The Element's baseline moved from element.ref to props.ref.",
        iconKey: 'target',
      },
      {
        number: '03',
        path: 'internals',
        title: 'It affects both Element representation and function component API.',
        body: 'Debugging, type inference, and maintainability all improve overall.',
        iconKey: 'layers',
      },
    ],
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'Next: Metadata & Resource Components',
    description:
      'Next we look at how React 19 extended document-resource and head-management model.',
    cta: 'Go to the next page',
    href: '/metadata-resource-react-dom',
  },
};

export const refAsPropElementShapeContent: Record<Locale, RefAsPropElementShapeContent> = {
  ko,
  en,
};
