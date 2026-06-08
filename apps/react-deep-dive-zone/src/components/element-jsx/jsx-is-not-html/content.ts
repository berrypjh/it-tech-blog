import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type AccentName = 'cyan' | 'violet' | 'sky' | 'amber' | 'emerald' | 'rose';

export type HeroExplanationCard = {
  id: 'appearance' | 'actual';
  label: string;
  title: string;
  body: string;
  iconName: 'eye' | 'braces';
  tone: ToneKey;
};

export type MisconceptionCard = {
  id: string;
  badgeWrong: string;
  badgeRight: string;
  wrong: string;
  right: string;
  note: string;
  iconName: 'box' | 'network' | 'browser';
  iconTone: ToneKey;
};

export type EvidenceCard = {
  id: string;
  title: string;
  code: string;
  description: string;
  tone: ToneKey;
};

export type ValueCard = {
  id: string;
  title: string;
  body: string;
  iconName: 'eye' | 'braces' | 'puzzle' | 'tree';
  tone: ToneKey;
};

export type ComparisonRow = {
  id: string;
  label: string;
  jsx: string;
  html: string;
};

export type JsxIsNotHtmlContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    codeCaption: string;
    code: string;
    explanationCards: HeroExplanationCard[];
  };
  misconception: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: MisconceptionCard[];
  };
  evidence: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: EvidenceCard[];
  };
  uiFit: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ValueCard[];
  };
  comparison: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { label: string; jsx: string; html: string };
    rows: ComparisonRow[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: JsxIsNotHtmlContent = {
  hero: {
    badge: 'Element와 JSX · 1/10단계',
    title: { line1: 'JSX는', line2: 'HTML이 아닙니다.' },
    description:
      'HTML처럼 보이지만, 브라우저가 그대로 그리는 마크업이 아니라 JavaScript 안에서 UI 구조를 표현하는 문법입니다.',
    codeCaption: 'button.jsx',
    code: 'const button = <button>저장</button>;',
    explanationCards: [
      {
        id: 'appearance',
        label: '겉보기',
        title: 'HTML처럼 보임',
        body: '태그, 속성, 중첩 구조가 HTML과 유사합니다.',
        iconName: 'eye',
        tone: 'teal',
      },
      {
        id: 'actual',
        label: '실제',
        title: 'JavaScript 표현식',
        body: 'JavaScript 안에서 평가되는 식(expression)입니다.',
        iconName: 'braces',
        tone: 'violet',
      },
    ],
  },
  misconception: {
    badge: '01',
    eyebrow: '가장 흔한 오해 3가지',
    title: '먼저 익숙한 착각부터 깨봅니다',
    description: '많은 사람이 JSX를 HTML이나 DOM과 동일시합니다. 셋은 모두 다른 층위입니다.',
    cards: [
      {
        id: 'jsx-is-html',
        badgeWrong: '오해 1',
        badgeRight: '정확히',
        wrong: 'JSX는 HTML이다.',
        right: 'HTML과 닮은 JavaScript 문법이다.',
        note: '유사해 보이지만, 실행되는 환경과 목적이 완전히 다릅니다.',
        iconName: 'box',
        iconTone: 'violet',
      },
      {
        id: 'jsx-is-dom',
        badgeWrong: '오해 2',
        badgeRight: '정확히',
        wrong: 'JSX가 곧 DOM이다.',
        right: 'JSX는 React Element를 만들기 위한 입력이다.',
        note: '바로 DOM이 아니라, 중간 객체를 거쳐 렌더링됩니다.',
        iconName: 'network',
        iconTone: 'violet',
      },
      {
        id: 'jsx-renders-directly',
        badgeWrong: '오해 3',
        badgeRight: '정확히',
        wrong: 'React는 JSX를 바로 브라우저에 그린다.',
        right: '먼저 컴파일과 객체 생성 단계를 거친다.',
        note: '그 후에 렌더러(renderer)가 실제 DOM을 만듭니다.',
        iconName: 'browser',
        iconTone: 'violet',
      },
    ],
  },
  evidence: {
    badge: '02',
    eyebrow: 'JSX가 JavaScript라는 증거',
    title: 'JSX는 어떻게 JavaScript처럼 다뤄지는가?',
    description:
      '변수에 저장하고, 조건과 결합하고, 함수의 반환값이 됩니다. JS가 다룰 수 있는 값이면 JSX도 같은 자리에 놓일 수 있습니다.',
    cards: [
      {
        id: 'variable',
        title: '1. 변수에 저장할 수 있다',
        code: 'const title = <h1>Hello</h1>;',
        description: '값으로 저장, 전달, 반환이 가능합니다.',
        tone: 'sky',
      },
      {
        id: 'conditional',
        title: '2. 조건문과 함께 사용할 수 있다',
        code: 'const message = isLoggedIn\n  ? <Profile />\n  : <Login />;',
        description: '삼항 연산자, if문 등 모든 JS 로직과 함께 사용할 수 있습니다.',
        tone: 'violet',
      },
      {
        id: 'function-return',
        title: '3. 함수의 반환값이 될 수 있다',
        code: 'function renderButton() {\n  return <button>저장</button>;\n}',
        description: '함수 안에서 만들고, 다른 곳으로 반환할 수 있습니다.',
        tone: 'teal',
      },
    ],
  },
  uiFit: {
    badge: '03',
    eyebrow: '왜 JSX가 UI 표현에 잘 맞을까?',
    title: 'HTML을 닮은 형태는 의도된 설계입니다',
    description:
      'JSX는 “UI를 데이터처럼 다루기 위한 문법”입니다. 그래서 구조, 결합, 컴포넌트, 트리 4가지 측면 모두에서 UI 표현에 강합니다.',
    cards: [
      {
        id: 'structure',
        title: '구조가 한눈에 보인다',
        body: '계층적 UI를 들여쓰기 구조로 시각적으로 파악할 수 있습니다.',
        iconName: 'eye',
        tone: 'teal',
      },
      {
        id: 'js-combine',
        title: 'JavaScript와 자연스럽게 결합된다',
        body: '변수, 연산, 조건문, 함수 호출 등 모든 JS 기능을 그대로 사용할 수 있습니다.',
        iconName: 'braces',
        tone: 'violet',
      },
      {
        id: 'component-model',
        title: '컴포넌트 모델과 잘 맞는다',
        body: '컴포넌트를 태그처럼 사용하여 재사용 가능한 UI 조합이 가능합니다.',
        iconName: 'puzzle',
        tone: 'sky',
      },
      {
        id: 'tree-shape',
        title: '트리 구조를 직관적으로 드러낸다',
        body: '부모-자식 관계가 명확하게 표현되어 복잡한 UI도 이해하기 쉽습니다.',
        iconName: 'tree',
        tone: 'amber',
      },
    ],
  },
  comparison: {
    badge: '04',
    eyebrow: 'JSX vs HTML',
    title: '같아 보이지만 분명히 다른 4가지 지점',
    description: '문법이 비슷하다고 실행 모델까지 같진 않습니다. 같은 모양 다른 의미를 비교합니다.',
    columns: { label: '항목', jsx: 'JSX', html: 'HTML' },
    rows: [
      {
        id: 'location',
        label: '위치',
        jsx: 'JavaScript / TypeScript 파일 안',
        html: 'HTML 파일 안 또는 브라우저가 직접 읽음',
      },
      {
        id: 'attribute',
        label: '속성명',
        jsx: 'camelCase · className · htmlFor',
        html: 'kebab-case · class · for',
      },
      {
        id: 'dynamic',
        label: '동적 값',
        jsx: '{ } 안에 JavaScript 표현식 사용',
        html: '정적인 문자열만 가능',
      },
      {
        id: 'result',
        label: '최종 결과',
        jsx: 'React Element 객체 → 렌더러가 DOM 생성',
        html: '브라우저가 직접 DOM 파싱 및 생성',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'JSX는 어떤 코드로 변환되는가?',
    description:
      'JSX가 HTML이 아니라는 점을 이해했다면, 이제 이 문법이 실제로 어떤 코드로 변환되는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/jsx-sugar',
  },
};

const en: JsxIsNotHtmlContent = {
  hero: {
    badge: 'Elements & JSX · 1/10',
    title: { line1: 'JSX is', line2: 'not HTML.' },
    description:
      'It looks like HTML, but it is not markup the browser paints — it is a syntax for describing UI structure inside JavaScript.',
    codeCaption: 'button.jsx',
    code: 'const button = <button>Save</button>;',
    explanationCards: [
      {
        id: 'appearance',
        label: 'Appearance',
        title: 'Looks like HTML',
        body: 'Tags, attributes, and nesting feel just like HTML.',
        iconName: 'eye',
        tone: 'teal',
      },
      {
        id: 'actual',
        label: 'Reality',
        title: 'A JavaScript expression',
        body: 'It is an expression evaluated inside JavaScript.',
        iconName: 'braces',
        tone: 'violet',
      },
    ],
  },
  misconception: {
    badge: '01',
    eyebrow: 'Three common misconceptions',
    title: 'Clear the familiar mix-ups first',
    description: 'Many people treat JSX, HTML, and DOM as one thing. They sit on different layers.',
    cards: [
      {
        id: 'jsx-is-html',
        badgeWrong: 'Myth 1',
        badgeRight: 'Truth',
        wrong: 'JSX is HTML.',
        right: 'It is JavaScript syntax that resembles HTML.',
        note: 'It looks similar, but the runtime and purpose are entirely different.',
        iconName: 'box',
        iconTone: 'violet',
      },
      {
        id: 'jsx-is-dom',
        badgeWrong: 'Myth 2',
        badgeRight: 'Truth',
        wrong: 'JSX is the DOM.',
        right: 'JSX is input for building a React Element.',
        note: 'It is not the DOM directly — it goes through an intermediate object first.',
        iconName: 'network',
        iconTone: 'violet',
      },
      {
        id: 'jsx-renders-directly',
        badgeWrong: 'Myth 3',
        badgeRight: 'Truth',
        wrong: 'React paints JSX straight to the browser.',
        right: 'It first compiles JSX and creates objects.',
        note: 'Only then does a renderer actually produce DOM nodes.',
        iconName: 'browser',
        iconTone: 'violet',
      },
    ],
  },
  evidence: {
    badge: '02',
    eyebrow: 'Evidence that JSX is JavaScript',
    title: 'How JSX behaves like any other JS value',
    description:
      'You can store it in a variable, branch on it, and return it from a function — anywhere a JS value fits, JSX fits.',
    cards: [
      {
        id: 'variable',
        title: '1. It can be stored in a variable',
        code: 'const title = <h1>Hello</h1>;',
        description: 'You can store, pass, and return it like a value.',
        tone: 'sky',
      },
      {
        id: 'conditional',
        title: '2. It composes with conditionals',
        code: 'const message = isLoggedIn\n  ? <Profile />\n  : <Login />;',
        description: 'Ternaries, if statements — any JS control flow works.',
        tone: 'violet',
      },
      {
        id: 'function-return',
        title: '3. It can be a function return value',
        code: 'function renderButton() {\n  return <button>Save</button>;\n}',
        description: 'Build it inside a function and return it to the caller.',
        tone: 'teal',
      },
    ],
  },
  uiFit: {
    badge: '03',
    eyebrow: 'Why JSX fits UI so well',
    title: 'Looking like HTML is an intentional design',
    description:
      'JSX exists so UI can be treated as data. That pays off in four dimensions: structure, composition, components, and tree shape.',
    cards: [
      {
        id: 'structure',
        title: 'Structure is visible at a glance',
        body: 'Hierarchical UI shows up directly as indentation.',
        iconName: 'eye',
        tone: 'teal',
      },
      {
        id: 'js-combine',
        title: 'It combines naturally with JavaScript',
        body: 'Variables, math, conditions, function calls — all of JS is available.',
        iconName: 'braces',
        tone: 'violet',
      },
      {
        id: 'component-model',
        title: 'It matches the component model',
        body: 'Use components as tags to compose reusable UI pieces.',
        iconName: 'puzzle',
        tone: 'sky',
      },
      {
        id: 'tree-shape',
        title: 'Tree shape is obvious',
        body: 'Parent–child relationships are explicit, even in complex UI.',
        iconName: 'tree',
        tone: 'amber',
      },
    ],
  },
  comparison: {
    badge: '04',
    eyebrow: 'JSX vs HTML',
    title: 'Four places they look alike but really differ',
    description:
      'Similar syntax does not mean the same execution model. Same shape, different meaning — side by side.',
    columns: { label: 'Aspect', jsx: 'JSX', html: 'HTML' },
    rows: [
      {
        id: 'location',
        label: 'Location',
        jsx: 'Inside a JavaScript / TypeScript file',
        html: 'Inside an HTML file, read by the browser',
      },
      {
        id: 'attribute',
        label: 'Attribute names',
        jsx: 'camelCase · className · htmlFor',
        html: 'kebab-case · class · for',
      },
      {
        id: 'dynamic',
        label: 'Dynamic values',
        jsx: '{ } interpolates any JS expression',
        html: 'Only static strings',
      },
      {
        id: 'result',
        label: 'Final result',
        jsx: 'React Element object → renderer creates DOM',
        html: 'Browser parses and creates DOM directly',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What code does JSX compile to?',
    description:
      'Now that you know JSX is not HTML, let us look at what actual code JSX compiles into.',
    cta: 'Go to the next page',
    href: '/jsx-sugar',
  },
};

export const jsxIsNotHtmlContent: Record<Locale, JsxIsNotHtmlContent> = { ko, en };
