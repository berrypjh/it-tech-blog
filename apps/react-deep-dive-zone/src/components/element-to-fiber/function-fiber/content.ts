import type { Locale } from '@it-tech-blog/preferences';

export type FlowNode = {
  id: string;
  label: string;
  yes: string;
  no: string;
};

export type CompareCard = {
  id: 'function' | 'class';
  badge: string;
  title: string;
  code: string;
  resultTitle: string;
  resultSubtitle: string;
};

export type FlowStep = {
  id: string;
  prompt: string;
  yes?: { label: string; result: string; tone: 'green' | 'purple' };
  no?: { label: string; result: string; tone: 'green' | 'purple' };
};

export type WorkTagCard = {
  id: string;
  title: string;
  label?: string;
  value?: string;
  description?: string;
  variant: 'function' | 'class' | 'info';
};

export type ReasonCard = {
  id: string;
  title: string;
  description: string;
  iconName: 'phone' | 'database' | 'zap';
  accent: 'green' | 'blue' | 'purple';
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type FunctionClassComponentFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    startTitle: string;
    startSubtitle: string;
    questionTitle: string;
    noLabel: string;
    yesLabel: string;
    functionTitle: string;
    functionLine1: string;
    functionLine2: string;
    classTitle: string;
    classLine1: string;
    classLine2: string;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: CompareCard[];
  };
  shouldConstruct: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    emphasis: string;
    flow: FlowStep[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    spotLabel: string;
    spot: string;
    questionLabel: string;
    question: string;
    hintCta: string;
    hint: string;
    codeTitle: string;
    codeLines: {
      line: string;
      emphasis?: 'class' | 'function' | 'string';
    }[];
    annotations: {
      id: string;
      label: string;
      tone: 'purple' | 'green' | 'blue';
    }[];
  };
  workTags: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WorkTagCard[];
  };
  reasons: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ReasonCard[];
  };
  checklist: {
    badge: string;
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: FunctionClassComponentFiberContent = {
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Fragment와 Mode Fiber',
    description: 'Fragment와 StrictMode처럼 React가 특별하게 다루는 타입을 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fragment-mode-fiber',
  },
  hero: {
    badge: 'Fiber 생성 · 5/10단계',
    title: {
      line1: 'type이 함수라고 해서',
      line2: '항상 Function Component는 아닙니다.',
    },
    description:
      'React는 해당 함수가 클래스 컴포넌트인지 아닌지를 먼저 판단하고, Fiber tag를 다르게 선택합니다.',
    startTitle: 'type',
    startSubtitle: '(function)',
    questionTitle: '클래스 컴포넌트일까?',
    noLabel: '아니오',
    yesLabel: '예',
    functionTitle: 'Function Component',
    functionLine1: 'Fiber tag: FunctionComponent',
    functionLine2: '(Work Tag 0)',
    classTitle: 'Class Component',
    classLine1: 'Fiber tag: ClassComponent',
    classLine2: '(Work Tag 1)',
  },
  compare: {
    badge: '01',
    eyebrow: '코드로 비교',
    title: 'Function / Class 예제 비교',
    description:
      '겉으로는 똑같이 <button>저장</button>을 그리지만, React 내부에서는 서로 다른 Fiber tag로 처리됩니다.',
    cards: [
      {
        id: 'function',
        badge: 'function',
        title: '함수 컴포넌트 (Function Component)',
        code: 'function SaveButton() {\n  return <button>저장</button>;\n}',
        resultTitle: 'FunctionComponent Fiber',
        resultSubtitle: '(Work Tag 0)',
      },
      {
        id: 'class',
        badge: 'class',
        title: '클래스 컴포넌트 (Class Component)',
        code: 'class SaveButton extends React.Component {\n  render() {\n    return <button>저장</button>;\n  }\n}',
        resultTitle: 'ClassComponent Fiber',
        resultSubtitle: '(Work Tag 1)',
      },
    ],
  },
  shouldConstruct: {
    badge: '02',
    eyebrow: '판단 기준',
    title: 'shouldConstruct는 무엇을 볼까?',
    description:
      'React는 Component.prototype.isReactComponent 존재 여부를 바탕으로 클래스 컴포넌트인지 판단합니다.',
    emphasis:
      '핵심: 클래스 컴포넌트는 React.Component를 상속하며, prototype에 isReactComponent가 설정되어 있습니다.',
    flow: [
      {
        id: 'has-prototype',
        prompt: 'prototype이 있는가?',
        no: {
          label: '없음',
          result: 'FunctionComponent',
          tone: 'green',
        },
      },
      {
        id: 'is-react-component',
        prompt: 'isReactComponent가 있는가?',
        yes: {
          label: '있음',
          result: 'ClassComponent',
          tone: 'purple',
        },
        no: {
          label: '없음',
          result: 'FunctionComponent',
          tone: 'green',
        },
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description: 'shouldConstruct와 createFiberFromTypeAndProps 두 함수가 함께 이 분기를 이룹니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: '볼 함수',
    spot: 'shouldConstruct, createFiberFromTypeAndProps',
    questionLabel: '학습 질문',
    question: '함수 type이 어떤 Fiber tag로 갈지 React는 어떻게 판단할까?',
    hintCta: '힌트 보기',
    hint: 'shouldConstruct(type)이 true면 ClassComponent, false면 FunctionComponent로 fiberTag가 정해집니다. 판단 기준은 prototype.isReactComponent입니다.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: 'function shouldConstruct(Component) {', emphasis: 'class' },
      { line: '  const prototype = Component.prototype;', emphasis: 'class' },
      {
        line: '  return !!(prototype && prototype.isReactComponent);',
        emphasis: 'class',
      },
      { line: '}' },
      { line: '' },
      {
        line: 'export function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {',
      },
      { line: '  let fiberTag;' },
      { line: '' },
      { line: "  if (typeof type === 'function') {" },
      { line: '    if (shouldConstruct(type)) {', emphasis: 'class' },
      {
        line: '      fiberTag = ClassComponent; // 클래스 컴포넌트',
        emphasis: 'class',
      },
      { line: '    } else {', emphasis: 'function' },
      {
        line: '      fiberTag = FunctionComponent; // 함수 컴포넌트',
        emphasis: 'function',
      },
      { line: '    }' },
      { line: "  } else if (typeof type === 'string') {", emphasis: 'string' },
      { line: '    fiberTag = HostComponent; // DOM 요소', emphasis: 'string' },
      { line: '  } else {' },
      { line: '    // Fragment, StrictMode 등' },
      { line: '  }' },
      { line: '}' },
    ],
    annotations: [
      { id: 'class', label: '클래스 판단 로직', tone: 'purple' },
      { id: 'function', label: '함수 컴포넌트', tone: 'green' },
      { id: 'string', label: '문자열 → Host', tone: 'blue' },
    ],
  },
  workTags: {
    badge: '04',
    eyebrow: '내부 분류 값',
    title: 'Work Tag 연결 카드',
    description:
      'Fiber 종류는 내부적으로 Work Tag 숫자로 표현됩니다. 코드를 읽을 때 이 숫자만 기억해 두면 흐름을 따라가기 쉽습니다.',
    cards: [
      {
        id: 'function',
        title: 'FunctionComponent',
        label: 'Work Tag',
        value: '0',
        variant: 'function',
      },
      {
        id: 'class',
        title: 'ClassComponent',
        label: 'Work Tag',
        value: '1',
        variant: 'class',
      },
      {
        id: 'info',
        title: 'Work Tag란?',
        description:
          'Fiber가 어떤 종류의 노드인지 나타내는 내부 분류 값입니다. 이 값을 기준으로 React는 각 노드에 다른 처리 로직을 적용합니다.',
        variant: 'info',
      },
    ],
  },
  reasons: {
    badge: '05',
    eyebrow: '왜 갈라놓을까',
    title: '왜 Fiber tag를 다르게 쓰는가?',
    description:
      '단순한 이름 분류가 아닙니다. 호출, 상태, 업데이트 처리 자체가 달라서 별도의 tag로 관리해야 합니다.',
    cards: [
      {
        id: 'call',
        title: '호출 방식이 다르다',
        description:
          '함수 컴포넌트는 함수 호출, 클래스 컴포넌트는 인스턴스 생성 + render 호출 방식이 필요합니다.',
        iconName: 'phone',
        accent: 'green',
      },
      {
        id: 'state',
        title: '상태 처리 방식이 다르다',
        description:
          '함수 컴포넌트는 Hooks 기반 상태, 클래스 컴포넌트는 this.state 기반 상태를 사용합니다.',
        iconName: 'database',
        accent: 'blue',
      },
      {
        id: 'update',
        title: '업데이트 로직이 다르다',
        description:
          '스케줄링, 재조정, 라이프사이클 처리 방식이 달라서 업데이트 로직이 다르게 적용됩니다.',
        iconName: 'zap',
        accent: 'purple',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: '한 줄 요약',
    title: '빠른 체크리스트',
    items: [
      { id: 'c1', text: '함수 type이어도 클래스일 수 있다' },
      { id: 'c2', text: 'shouldConstruct는 isReactComponent를 본다' },
      { id: 'c3', text: 'Class → Work Tag 1 / Function → Work Tag 0' },
      { id: 'c4', text: '서로 다른 상태/업데이트 로직이 필요하다' },
    ],
  },
};

const en: FunctionClassComponentFiberContent = {
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Fragment & Mode Fiber',
    description: 'Explore types React treats specially, like Fragment and StrictMode.',
    cta: 'Go to the next page',
    href: '/fragment-mode-fiber',
  },
  hero: {
    badge: 'Element → Fiber · 5/10',
    title: {
      line1: 'A function type does not mean',
      line2: 'a Function Component every time.',
    },
    description:
      'React first checks whether the function is a class component, and then picks a different Fiber tag for each case.',
    startTitle: 'type',
    startSubtitle: '(function)',
    questionTitle: 'Is it a class component?',
    noLabel: 'No',
    yesLabel: 'Yes',
    functionTitle: 'Function Component',
    functionLine1: 'Fiber tag: FunctionComponent',
    functionLine2: '(Work Tag 0)',
    classTitle: 'Class Component',
    classLine1: 'Fiber tag: ClassComponent',
    classLine2: '(Work Tag 1)',
  },
  compare: {
    badge: '01',
    eyebrow: 'Compare by code',
    title: 'Function / Class — example comparison',
    description:
      'Both render <button>Save</button>, but React processes them with different Fiber tags inside.',
    cards: [
      {
        id: 'function',
        badge: 'function',
        title: 'Function Component',
        code: 'function SaveButton() {\n  return <button>Save</button>;\n}',
        resultTitle: 'FunctionComponent Fiber',
        resultSubtitle: '(Work Tag 0)',
      },
      {
        id: 'class',
        badge: 'class',
        title: 'Class Component',
        code: 'class SaveButton extends React.Component {\n  render() {\n    return <button>Save</button>;\n  }\n}',
        resultTitle: 'ClassComponent Fiber',
        resultSubtitle: '(Work Tag 1)',
      },
    ],
  },
  shouldConstruct: {
    badge: '02',
    eyebrow: 'Decision basis',
    title: 'What does shouldConstruct check?',
    description:
      'React decides whether something is a class component by looking at Component.prototype.isReactComponent.',
    emphasis:
      'Key idea: class components extend React.Component, so their prototype has isReactComponent set.',
    flow: [
      {
        id: 'has-prototype',
        prompt: 'Does it have a prototype?',
        no: {
          label: 'No',
          result: 'FunctionComponent',
          tone: 'green',
        },
      },
      {
        id: 'is-react-component',
        prompt: 'Does prototype.isReactComponent exist?',
        yes: {
          label: 'Yes',
          result: 'ClassComponent',
          tone: 'purple',
        },
        no: {
          label: 'No',
          result: 'FunctionComponent',
          tone: 'green',
        },
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description: 'shouldConstruct and createFiberFromTypeAndProps together form this branch.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    spotLabel: 'Functions',
    spot: 'shouldConstruct, createFiberFromTypeAndProps',
    questionLabel: 'Learning question',
    question: 'How does React decide which Fiber tag a function type ends up with?',
    hintCta: 'Show hint',
    hint: 'If shouldConstruct(type) is true, fiberTag becomes ClassComponent; otherwise FunctionComponent. The decision rests on prototype.isReactComponent.',
    codeTitle: 'ReactFiber.js',
    codeLines: [
      { line: 'function shouldConstruct(Component) {', emphasis: 'class' },
      { line: '  const prototype = Component.prototype;', emphasis: 'class' },
      {
        line: '  return !!(prototype && prototype.isReactComponent);',
        emphasis: 'class',
      },
      { line: '}' },
      { line: '' },
      {
        line: 'export function createFiberFromTypeAndProps(type, key, pendingProps, owner, mode, lanes) {',
      },
      { line: '  let fiberTag;' },
      { line: '' },
      { line: "  if (typeof type === 'function') {" },
      { line: '    if (shouldConstruct(type)) {', emphasis: 'class' },
      {
        line: '      fiberTag = ClassComponent; // class component',
        emphasis: 'class',
      },
      { line: '    } else {', emphasis: 'function' },
      {
        line: '      fiberTag = FunctionComponent; // function component',
        emphasis: 'function',
      },
      { line: '    }' },
      { line: "  } else if (typeof type === 'string') {", emphasis: 'string' },
      {
        line: '    fiberTag = HostComponent; // DOM element',
        emphasis: 'string',
      },
      { line: '  } else {' },
      { line: '    // Fragment, StrictMode, …' },
      { line: '  }' },
      { line: '}' },
    ],
    annotations: [
      { id: 'class', label: 'class decision', tone: 'purple' },
      { id: 'function', label: 'function component', tone: 'green' },
      { id: 'string', label: 'string → Host', tone: 'blue' },
    ],
  },
  workTags: {
    badge: '04',
    eyebrow: 'Internal tag numbers',
    title: 'Work Tag — connection cards',
    description:
      'Fiber kinds are internally represented as Work Tag numbers. Remember these numbers to read source code more easily.',
    cards: [
      {
        id: 'function',
        title: 'FunctionComponent',
        label: 'Work Tag',
        value: '0',
        variant: 'function',
      },
      {
        id: 'class',
        title: 'ClassComponent',
        label: 'Work Tag',
        value: '1',
        variant: 'class',
      },
      {
        id: 'info',
        title: 'What is a Work Tag?',
        description:
          'An internal classification value showing what kind of node a Fiber is. React picks different processing logic based on this value.',
        variant: 'info',
      },
    ],
  },
  reasons: {
    badge: '05',
    eyebrow: 'Why split them',
    title: 'Why use different Fiber tags?',
    description:
      'Not just for naming. Call, state, and update logic differ — so each needs its own tag.',
    cards: [
      {
        id: 'call',
        title: 'Different invocation',
        description:
          'Function components are called as functions; class components need to be instantiated and then have render() called.',
        iconName: 'phone',
        accent: 'green',
      },
      {
        id: 'state',
        title: 'Different state handling',
        description: 'Function components use Hooks-based state; class components use this.state.',
        iconName: 'database',
        accent: 'blue',
      },
      {
        id: 'update',
        title: 'Different update logic',
        description:
          'Scheduling, reconciliation, and lifecycle handling all differ — update logic must apply differently.',
        iconName: 'zap',
        accent: 'purple',
      },
    ],
  },
  checklist: {
    badge: '07',
    eyebrow: 'One-line recap',
    title: 'Quick checklist',
    items: [
      { id: 'c1', text: 'A function type can still be a class' },
      { id: 'c2', text: 'shouldConstruct checks isReactComponent' },
      { id: 'c3', text: 'Class → Work Tag 1 / Function → Work Tag 0' },
      { id: 'c4', text: 'They need different state / update logic' },
    ],
  },
};

export const functionClassComponentFiberContent: Record<
  Locale,
  FunctionClassComponentFiberContent
> = { ko, en };
