import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type HeroFlowItem = {
  id: string;
  title: string;
  iconHint: string;
  body: string;
  highlighted?: boolean;
  tone: ToneKey;
  iconName: 'code' | 'cube' | 'document' | 'tree';
};

export type FinalFlowStep = {
  id: string;
  number: string;
  title: string;
  code?: string;
  body: string;
  highlighted?: boolean;
  tone: ToneKey;
};

export type CompareCol = 'jsx' | 'element' | 'fiber' | 'dom';

export type CompareRow = {
  id: string;
  label: string;
  values: Record<CompareCol, string>;
};

export type SummaryCard = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'code' | 'cube' | 'document' | 'layers' | 'tree';
  tone: ToneKey;
};

export type AnswerStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type ReactElementSummaryBeforeFiberContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    flowTitle: string;
    flowItems: HeroFlowItem[];
  };
  finalFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FinalFlowStep[];
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    aspectLabel: string;
    columns: { id: CompareCol; label: string; tone: ToneKey }[];
    rows: CompareRow[];
    emphasis: string;
  };
  summary: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SummaryCard[];
  };
  conceptFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    answerSteps: AnswerStep[];
    emphasis: string;
  };
  fiberPreview: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    previewQuestion: string;
    previewDescription: string;
    flowSteps: { id: string; title: string; body: string; tone: ToneKey }[];
    fiberChips: string[];
    infoBanner: string;
  };
  finale: FinaleBannerContent;
};

const ko: ReactElementSummaryBeforeFiberContent = {
  hero: {
    badge: 'Element와 JSX · 10/10단계',
    title: {
      line1: 'React Element는',
      line2: 'DOM도 아니고,',
      line3: 'Fiber도 아닙니다.',
    },
    description:
      'Element는 무엇을 렌더링할지 설명하는 객체이며, React 내부 계산이 시작되는 첫 번째 입력입니다.',
    flowTitle: 'JSX에서 Fiber로 넘어가는 흐름',
    flowItems: [
      {
        id: 'jsx',
        title: 'JSX',
        iconHint: '코드 문법',
        body: '개발자가 작성하는 UI 표현 문법입니다.',
        tone: 'sky',
        iconName: 'code',
      },
      {
        id: 'runtime',
        title: 'runtime',
        iconHint: '변환 함수',
        body: 'jsx / jsxs / jsxDEV 또는 createElement 호출로 이어집니다.',
        tone: 'violet',
        iconName: 'cube',
      },
      {
        id: 'element',
        title: 'Element',
        iconHint: '설명 객체',
        body: 'React가 읽는 계산의 첫 입력값입니다.',
        highlighted: true,
        tone: 'blue',
        iconName: 'document',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        iconHint: '작업 단위',
        body: '렌더링을 준비하기 위한 내부 작업 단위입니다.',
        tone: 'teal',
        iconName: 'tree',
      },
    ],
  },
  finalFlow: {
    badge: '01',
    eyebrow: '전체 흐름 최종 다이어그램',
    title: 'JSX 한 줄이 화면이 되기까지',
    description:
      'JSX → runtime → Element → Fiber → Render → Commit. 6단계 흐름에서 현재 챕터의 핵심은 단연 React Element입니다.',
    steps: [
      {
        id: 'jsx',
        number: '1',
        title: 'JSX',
        code: '<MyButton label="저장" />',
        body: '개발자가 작성한 코드',
        tone: 'sky',
      },
      {
        id: 'runtime',
        number: '2',
        title: 'jsx / jsxs / jsxDEV 또는 createElement',
        code: 'jsx(MyButton, { label: "저장" })',
        body: 'runtime 함수 호출',
        tone: 'teal',
      },
      {
        id: 'element',
        number: '3',
        title: 'React Element',
        code: '{\n  $$typeof: Symbol(react.element),\n  type: MyButton,\n  key: null,\n  ref: null,\n  props: { label: "저장" },\n  _owner: ...\n}',
        body: '설명 객체 생성',
        highlighted: true,
        tone: 'sky',
      },
      {
        id: 'fiber-create',
        number: '4',
        title: 'Fiber 생성',
        code: 'createFiberFromElement(element)',
        body: '작업 단위 생성',
        tone: 'violet',
      },
      {
        id: 'render',
        number: '5',
        title: 'Render Phase',
        body: '작업 순서 계산',
        tone: 'amber',
      },
      {
        id: 'commit',
        number: '6',
        title: 'Commit Phase',
        body: 'DOM 적용',
        tone: 'teal',
      },
    ],
  },
  compare: {
    badge: '02',
    eyebrow: 'JSX / Element / Fiber / DOM 비교표',
    title: '네 가지 개념, 한 번에 정리',
    description: '각각이 무엇이고 어디에 있으며 언제 만들어지는지 표 하나로 모았습니다.',
    aspectLabel: '구분',
    columns: [
      { id: 'jsx', label: 'JSX', tone: 'sky' },
      { id: 'element', label: 'Element', tone: 'blue' },
      { id: 'fiber', label: 'Fiber', tone: 'violet' },
      { id: 'dom', label: 'DOM', tone: 'teal' },
    ],
    rows: [
      {
        id: 'identity',
        label: '정체',
        values: {
          jsx: 'JavaScript 문법 확장',
          element: 'React가 이해하는 설명 객체',
          fiber: '렌더링을 수행하기 위한 작업 단위',
          dom: '브라우저가 실제로 가지는 노드',
        },
      },
      {
        id: 'location',
        label: '위치',
        values: {
          jsx: '개발자 코드',
          element: '메모리 안의 JavaScript 객체',
          fiber: 'React 내부 Fiber 트리',
          dom: '브라우저 DOM 트리',
        },
      },
      {
        id: 'meaning',
        label: '핵심 의미',
        values: {
          jsx: 'UI를 기술하는 문법',
          element: '무엇을 렌더링할지에 대한 설명',
          fiber: '어떻게 렌더링할지 계획하고 진행하는 단위',
          dom: '실제로 그려지는 화면의 결과',
        },
      },
      {
        id: 'creation',
        label: '생성 시점',
        values: {
          jsx: '개발 시 작성',
          element: 'runtime 호출 직후',
          fiber: 'reconciliation 시작 시',
          dom: 'commit phase에서 최종 반영',
        },
      },
    ],
    emphasis: 'Element는 Fiber 이전 단계의 설명 객체다.',
  },
  summary: {
    badge: '03',
    eyebrow: '지금까지 배운 5개 핵심 요약',
    title: '챕터의 다섯 가지 결론',
    description: '한 카드 한 문장으로 챕터를 다시 끌어모읍니다.',
    cards: [
      {
        id: 's1',
        number: '1',
        title: 'JSX는 HTML이 아니다.',
        body: 'JSX는 JavaScript 안의 문법 확장이며, 브라우저가 직접 실행하지 않습니다.',
        iconName: 'code',
        tone: 'sky',
      },
      {
        id: 's2',
        number: '2',
        title: 'JSX는 runtime 호출로 변환된다.',
        body: '컴파일러는 jsx / jsxs / jsxDEV 또는 createElement 호출로 바꿉니다.',
        iconName: 'cube',
        tone: 'violet',
      },
      {
        id: 's3',
        number: '3',
        title: '그 결과 React Element가 만들어진다.',
        body: 'type, key, props 등의 정보를 담은 설명 객체가 생성됩니다.',
        iconName: 'document',
        tone: 'blue',
      },
      {
        id: 's4',
        number: '4',
        title: 'Element는 type, key, props 중심 구조다.',
        body: '렌더링에 필요한 정보를 담고 있는 불변에 가까운 데이터 구조입니다.',
        iconName: 'layers',
        tone: 'amber',
      },
      {
        id: 's5',
        number: '5',
        title: 'Element는 이후 Fiber 생성으로 이어진다.',
        body: 'React는 Element를 바탕으로 작업 단위인 Fiber 트리를 만듭니다.',
        iconName: 'tree',
        tone: 'teal',
      },
    ],
  },
  conceptFlow: {
    badge: '04',
    eyebrow: '한 줄 JSX가 거치는 전체 흐름',
    title: '한 줄 JSX의 여정',
    answerSteps: [
      { id: 'a1', number: '1', title: 'JSX', body: '<MyButton label="저장" />', tone: 'sky' },
      {
        id: 'a2',
        number: '2',
        title: 'jsx runtime',
        body: 'jsx(MyButton, { label: "저장" })',
        tone: 'violet',
      },
      { id: 'a3', number: '3', title: 'React Element', body: '설명 객체 생성', tone: 'blue' },
      { id: 'a4', number: '4', title: 'Fiber', body: '작업 단위 생성', tone: 'teal' },
    ],
    emphasis: '이 흐름은 모든 React UI의 출발점입니다.',
  },
  fiberPreview: {
    badge: '05',
    eyebrow: '다음 챕터 예고: Fiber로 넘어가기',
    title: 'Element가 만나는 다음 단계',
    description: 'React는 Element를 보고 어떤 종류의 Fiber로 다룰지 결정합니다.',
    previewQuestion: 'React는 Element를 보고 어떤 Fiber를 만들지 어떻게 판단할까?',
    previewDescription:
      'Element.type을 기준으로 적절한 Fiber를 생성하고, 트리 구조로 연결해 렌더링을 준비합니다.',
    flowSteps: [
      {
        id: 'type',
        title: 'Element.type',
        body: "'div', MyButton, Suspense, Fragment, ...",
        tone: 'sky',
      },
      {
        id: 'create-fiber',
        title: 'createFiberFromTypeAndProps',
        body: 'type, key, props, mode 등 정보를 바탕으로 생성',
        tone: 'violet',
      },
      {
        id: 'fiber-kinds',
        title: '생성되는 Fiber 종류',
        body: '각 type에 맞춰 알맞은 Fiber가 생성됩니다.',
        tone: 'teal',
      },
    ],
    fiberChips: ['Host Fiber', 'Function Fiber', 'Class Fiber', 'Fragment Fiber'],
    infoBanner:
      'type 값의 성격에 따라 Host / Function / Class / Fragment 등 서로 다른 Fiber가 만들어집니다.',
  },
  finale: {
    progressLabel: '4/15 챕터 완료',
    copyLine1: 'React Element와 JSX의',
    copyLine2: '정체를 파악했습니다.',
    copyLine3: '이제 Element가 Fiber로.',
    primaryCta: '컴포넌트가 Fiber가 되는 과정 읽기',
    primaryHref: '/element-vs-fiber',
    secondaryCta: 'Element와 JSX 처음부터 다시 보기',
    secondaryHref: '/jsx-is-not-html',
  },
};

const en: ReactElementSummaryBeforeFiberContent = {
  hero: {
    badge: 'Elements & JSX · 10/10',
    title: {
      line1: 'A React Element is',
      line2: 'not the DOM,',
      line3: 'and not a Fiber.',
    },
    description:
      'An Element is the object that describes what to render — the very first input into React’s internal computation.',
    flowTitle: 'JSX → runtime → Element → Fiber',
    flowItems: [
      {
        id: 'jsx',
        title: 'JSX',
        iconHint: 'Code syntax',
        body: 'The UI-describing syntax developers write.',
        tone: 'sky',
        iconName: 'code',
      },
      {
        id: 'runtime',
        title: 'runtime',
        iconHint: 'Transform calls',
        body: 'Becomes jsx / jsxs / jsxDEV — or createElement — calls.',
        tone: 'violet',
        iconName: 'cube',
      },
      {
        id: 'element',
        title: 'Element',
        iconHint: 'Description object',
        body: 'The first input React reads to start computing.',
        highlighted: true,
        tone: 'blue',
        iconName: 'document',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        iconHint: 'Unit of work',
        body: 'The internal unit of work that prepares rendering.',
        tone: 'teal',
        iconName: 'tree',
      },
    ],
  },
  finalFlow: {
    badge: '01',
    eyebrow: 'The full flow, one final diagram',
    title: 'From one JSX line to the screen',
    description:
      'JSX → runtime → Element → Fiber → Render → Commit. In this chapter, the React Element is the highlighted step.',
    steps: [
      {
        id: 'jsx',
        number: '1',
        title: 'JSX',
        code: '<MyButton label="Save" />',
        body: 'Developer-authored code',
        tone: 'sky',
      },
      {
        id: 'runtime',
        number: '2',
        title: 'jsx / jsxs / jsxDEV or createElement',
        code: 'jsx(MyButton, { label: "Save" })',
        body: 'Runtime function call',
        tone: 'teal',
      },
      {
        id: 'element',
        number: '3',
        title: 'React Element',
        code: '{\n  $$typeof: Symbol(react.element),\n  type: MyButton,\n  key: null,\n  ref: null,\n  props: { label: "Save" },\n  _owner: ...\n}',
        body: 'Description object built',
        highlighted: true,
        tone: 'sky',
      },
      {
        id: 'fiber-create',
        number: '4',
        title: 'Fiber creation',
        code: 'createFiberFromElement(element)',
        body: 'Unit of work created',
        tone: 'violet',
      },
      {
        id: 'render',
        number: '5',
        title: 'Render Phase',
        body: 'Work order computed',
        tone: 'amber',
      },
      {
        id: 'commit',
        number: '6',
        title: 'Commit Phase',
        body: 'Applied to the DOM',
        tone: 'teal',
      },
    ],
  },
  compare: {
    badge: '02',
    eyebrow: 'JSX / Element / Fiber / DOM compared',
    title: 'Four concepts, side by side',
    description: 'What each one is, where it lives, what it means, and when it is created.',
    aspectLabel: 'Aspect',
    columns: [
      { id: 'jsx', label: 'JSX', tone: 'sky' },
      { id: 'element', label: 'Element', tone: 'blue' },
      { id: 'fiber', label: 'Fiber', tone: 'violet' },
      { id: 'dom', label: 'DOM', tone: 'teal' },
    ],
    rows: [
      {
        id: 'identity',
        label: 'Identity',
        values: {
          jsx: 'A JavaScript syntax extension',
          element: 'A description object React understands',
          fiber: 'A unit of work used to perform rendering',
          dom: 'The actual node the browser holds',
        },
      },
      {
        id: 'location',
        label: 'Location',
        values: {
          jsx: 'In developer code',
          element: 'A JS object in memory',
          fiber: 'Inside React’s Fiber tree',
          dom: 'The browser DOM tree',
        },
      },
      {
        id: 'meaning',
        label: 'Core meaning',
        values: {
          jsx: 'Syntax that describes UI',
          element: 'Description of what to render',
          fiber: 'A unit that plans and executes rendering',
          dom: 'The actual on-screen result',
        },
      },
      {
        id: 'creation',
        label: 'When created',
        values: {
          jsx: 'Authored at dev time',
          element: 'Right after a runtime call',
          fiber: 'When reconciliation starts',
          dom: 'During the commit phase',
        },
      },
    ],
    emphasis: 'An Element is a description object that comes before Fiber.',
  },
  summary: {
    badge: '03',
    eyebrow: 'Five takeaways from this chapter',
    title: 'Five sentences, the whole chapter',
    description: 'One card per sentence, recapping the chapter.',
    cards: [
      {
        id: 's1',
        number: '1',
        title: 'JSX is not HTML.',
        body: 'JSX is a JS syntax extension — the browser does not run it directly.',
        iconName: 'code',
        tone: 'sky',
      },
      {
        id: 's2',
        number: '2',
        title: 'JSX is compiled into runtime calls.',
        body: 'A compiler turns it into jsx / jsxs / jsxDEV or createElement calls.',
        iconName: 'cube',
        tone: 'violet',
      },
      {
        id: 's3',
        number: '3',
        title: 'A React Element is produced.',
        body: 'A description object holding type, key, props, and friends.',
        iconName: 'document',
        tone: 'blue',
      },
      {
        id: 's4',
        number: '4',
        title: 'The Element is shaped around type / key / props.',
        body: 'A nearly-immutable data structure with everything render needs.',
        iconName: 'layers',
        tone: 'amber',
      },
      {
        id: 's5',
        number: '5',
        title: 'Elements lead into Fiber creation.',
        body: 'React uses Elements to build the Fiber tree of work units.',
        iconName: 'tree',
        tone: 'teal',
      },
    ],
  },
  conceptFlow: {
    badge: '04',
    eyebrow: 'The full flow one line of JSX goes through',
    title: 'One JSX line’s journey',
    answerSteps: [
      { id: 'a1', number: '1', title: 'JSX', body: '<MyButton label="Save" />', tone: 'sky' },
      {
        id: 'a2',
        number: '2',
        title: 'jsx runtime',
        body: 'jsx(MyButton, { label: "Save" })',
        tone: 'violet',
      },
      {
        id: 'a3',
        number: '3',
        title: 'React Element',
        body: 'Description object built',
        tone: 'blue',
      },
      { id: 'a4', number: '4', title: 'Fiber', body: 'Unit of work created', tone: 'teal' },
    ],
    emphasis: 'This flow is the starting point of every React UI.',
  },
  fiberPreview: {
    badge: '05',
    eyebrow: 'Next chapter preview: into Fiber',
    title: 'The step Element meets next',
    description: 'React looks at the Element to decide what kind of Fiber to build.',
    previewQuestion: 'How does React decide which Fiber to make from an Element?',
    previewDescription:
      'Element.type is the basis for creating the right kind of Fiber and linking them into a tree.',
    flowSteps: [
      {
        id: 'type',
        title: 'Element.type',
        body: "'div', MyButton, Suspense, Fragment, ...",
        tone: 'sky',
      },
      {
        id: 'create-fiber',
        title: 'createFiberFromTypeAndProps',
        body: 'Builds the Fiber from type, key, props, mode, ...',
        tone: 'violet',
      },
      {
        id: 'fiber-kinds',
        title: 'Resulting Fiber kinds',
        body: 'Each type yields a Fiber tailored to it.',
        tone: 'teal',
      },
    ],
    fiberChips: ['Host Fiber', 'Function Fiber', 'Class Fiber', 'Fragment Fiber'],
    infoBanner: 'The type drives the split into Host / Function / Class / Fragment Fibers.',
  },
  finale: {
    progressLabel: 'Chapter 4 of 15 complete',
    copyLine1: 'You understand what',
    copyLine2: 'Elements and JSX really are.',
    copyLine3: 'Now Elements become Fibers.',
    primaryCta: 'Read how components become Fibers',
    primaryHref: '/element-vs-fiber',
    secondaryCta: 'Review Elements & JSX from the start',
    secondaryHref: '/jsx-is-not-html',
  },
};

export const reactElementSummaryBeforeFiberContent: Record<
  Locale,
  ReactElementSummaryBeforeFiberContent
> = { ko, en };
