import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IdentityFieldKey = 'tag' | 'key' | 'elementType' | 'type';

export type IdentityField = {
  id: IdentityFieldKey;
  label: string;
  meaning: string;
  tone: ToneKey;
};

export type QuickSummaryCard = {
  id: IdentityFieldKey;
  field: string;
  question: string;
  description: string;
  tone: ToneKey;
  iconName: 'cube' | 'key' | 'code' | 'target';
};

export type WorkTagCard = {
  name: string;
  value: number;
  tone: ToneKey;
};

export type SiblingItem = {
  keyValue: string;
  label: string;
  tone: ToneKey;
};

export type ExampleMapping = {
  id: string;
  code: string;
  elementType: string;
  type: string;
};

export type MappingCard = {
  id: string;
  code: string;
  tone: ToneKey;
  iconName: 'cube' | 'rocket' | 'puzzle';
  rows: { field: IdentityFieldKey; value: string }[];
};

export type CodeBlock = {
  fileName: string;
  language: string;
  content: string;
  href: string;
  cta: string;
};

export type FiberIdentityFieldsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    emphasis: string;
    description: string;
    cardLabel: string;
    fiberFields: IdentityField[];
    extraNote: string;
  };
  summary: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: QuickSummaryCard[];
  };
  workTags: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: WorkTagCard[];
    banner: string;
  };
  keyField: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeLabel: string;
    code: string;
    beforeLabel: string;
    afterLabel: string;
    moveLabel: string;
    before: SiblingItem[];
    after: SiblingItem[];
    matchNote: string;
    note: string;
    highlights: string[];
  };
  typeVs: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    elementType: {
      title: string;
      subtitle: string;
      body: string;
    };
    type: {
      title: string;
      subtitle: string;
      body: string;
    };
    examplesLabel: string;
    sameLabel: string;
    diffLabel: string;
    examples: ExampleMapping[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      files: string[];
      lookForLabel: string;
      lookFor: string;
    };
    blocks: CodeBlock[];
  };
  mapping: {
    badge: string;
    eyebrow: string;
    title: string;
    cards: MappingCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const reactInternalTypesCode = `export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;
  // ...
};`;

const reactWorkTagsCode = `export const FunctionComponent = 0;
export const ClassComponent = 1;
export const HostRoot = 3;
export const HostComponent = 5;
export const HostText = 6;
export const Fragment = 7;
export const Mode = 8;
export const SuspenseComponent = 13;
export const OffscreenComponent = 16;`;

const ko: FiberIdentityFieldsContent = {
  hero: {
    badge: 'Fiber 트리 · 2/10단계',
    title: {
      line1: 'Fiber는 자기 정체성을',
      line2: '여러 필드로 나누어 저장합니다.',
    },
    emphasis: '여러 필드로 나누어',
    description:
      'tag는 Fiber의 종류를 말하고, key는 형제 사이의 식별자를 말하며, elementType과 type은 Element와 실제 렌더링 대상을 연결합니다.',
    cardLabel: 'Fiber',
    fiberFields: [
      { id: 'tag', label: 'tag', meaning: 'Fiber 종류', tone: 'sky' },
      { id: 'key', label: 'key', meaning: '형제 식별자', tone: 'emerald' },
      { id: 'elementType', label: 'elementType', meaning: '원래 Element의 type', tone: 'violet' },
      { id: 'type', label: 'type', meaning: '실제 렌더링 대상', tone: 'amber' },
    ],
    extraNote: '...',
  },
  summary: {
    badge: '01',
    eyebrow: '빠른 요약',
    title: '4개 필드 빠른 요약',
    cards: [
      {
        id: 'tag',
        field: 'tag',
        question: '이 Fiber는 어떤 종류인가?',
        description: 'Fiber의 WorkTag 값을 가지며, 렌더링 처리 경로를 결정합니다.',
        tone: 'sky',
        iconName: 'cube',
      },
      {
        id: 'key',
        field: 'key',
        question: '형제 목록에서 누구인가?',
        description: '같은 부모를 가진 형제들 사이의 고유 식별자로 사용됩니다.',
        tone: 'emerald',
        iconName: 'key',
      },
      {
        id: 'elementType',
        field: 'elementType',
        question: '원래 Element의 type은 무엇이었나?',
        description: 'Element가 처음 전달한 type을 그대로 보관합니다.',
        tone: 'violet',
        iconName: 'code',
      },
      {
        id: 'type',
        field: 'type',
        question: '실제 렌더링 대상은 무엇인가?',
        description: 'React가 실제로 렌더링할 대상 — 문자열, 함수, 클래스 등이 됩니다.',
        tone: 'amber',
        iconName: 'target',
      },
    ],
  },
  workTags: {
    badge: '02',
    eyebrow: 'WorkTag 예시',
    title: 'tag는 Fiber 종류를 나타낸다 (일부 WorkTag)',
    cards: [
      { name: 'FunctionComponent', value: 0, tone: 'sky' },
      { name: 'ClassComponent', value: 1, tone: 'violet' },
      { name: 'HostRoot', value: 3, tone: 'indigo' },
      { name: 'HostComponent', value: 5, tone: 'teal' },
      { name: 'HostText', value: 6, tone: 'cyan' },
      { name: 'Fragment', value: 7, tone: 'emerald' },
      { name: 'Mode', value: 8, tone: 'amber' },
      { name: 'SuspenseComponent', value: 13, tone: 'blue' },
      { name: 'OffscreenComponent', value: 16, tone: 'violet' },
    ],
    banner: 'tag는 React가 이 Fiber를 어떤 처리 경로로 다뤄야 하는지 알려준다.',
  },
  keyField: {
    badge: '03',
    eyebrow: '형제 식별자',
    title: 'key는 형제 사이의 식별자다',
    description: 'key는 Fiber가 형제 목록 안에서 자신의 정체성을 유지하는 데 도움을 준다.',
    codeLabel: 'JSX',
    code: 'items.map((item) => <TodoItem key={item.id} item={item} />);',
    beforeLabel: '이전 렌더',
    afterLabel: '다음 렌더',
    moveLabel: '순서 변경',
    before: [
      { keyValue: 'a', label: '장보기', tone: 'sky' },
      { keyValue: 'b', label: '운동', tone: 'violet' },
      { keyValue: 'c', label: '독서', tone: 'amber' },
    ],
    after: [
      { keyValue: 'c', label: '독서', tone: 'amber' },
      { keyValue: 'a', label: '장보기', tone: 'sky' },
      { keyValue: 'b', label: '운동', tone: 'violet' },
    ],
    matchNote: 'key가 같은 항목끼리 같은 Fiber로 매칭되어 상태가 그대로 유지됩니다.',
    note: '이 key는 이후 child reconciliation과 상태 보존 판단에 연결됩니다.',
    highlights: ['child reconciliation', '상태 보존'],
  },
  typeVs: {
    badge: '04',
    eyebrow: '두 type의 차이',
    title: 'elementType과 type의 차이',
    description:
      'Element가 처음 들고 온 type과 실제로 렌더링할 대상은 다를 수 있어서, Fiber는 둘을 따로 저장합니다.',
    elementType: {
      title: 'elementType',
      subtitle: 'Element가 처음 들고 온 type',
      body: 'React Element 생성 시 전달된 type을 그대로 기록합니다.',
    },
    type: {
      title: 'type',
      subtitle: '실제 렌더링 대상으로 연결된 값',
      body: 'React가 실제로 렌더링할 대상입니다. 문자열, 함수, 클래스가 올 수 있고, 래퍼라면 그 안의 실제 컴포넌트가 됩니다.',
    },
    examplesLabel: '예시',
    sameLabel: '같음',
    diffLabel: '다름',
    examples: [
      { id: 'div', code: '<div />', elementType: "'div'", type: "'div'" },
      { id: 'my-button', code: '<MyButton />', elementType: 'MyButton', type: 'MyButton' },
      { id: 'memo', code: '<MemoApp />', elementType: 'memo(App)', type: 'App' },
      {
        id: 'lazy',
        code: '<LazyPage />',
        elementType: "lazy(() => import('./Page'))",
        type: 'Page',
      },
    ],
    note: '단순 함수 컴포넌트를 감싼 memo와 lazy는 elementType에 래퍼 객체를 그대로 두고, type에는 실제로 렌더링할 컴포넌트를 연결합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      files: [
        'packages/react-reconciler/src/ReactInternalTypes.js',
        'packages/react-reconciler/src/ReactWorkTags.js',
      ],
      lookForLabel: '볼 것',
      lookFor: 'tag, key, elementType, type 정의',
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: reactInternalTypesCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
        cta: 'ReactInternalTypes.js 읽기',
      },
      {
        fileName: 'ReactWorkTags.js',
        language: 'TypeScript',
        content: reactWorkTagsCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactWorkTags.js',
        cta: 'ReactWorkTags.js 읽기',
      },
    ],
  },
  mapping: {
    badge: '06',
    eyebrow: '실제 매핑 예시',
    title: 'JSX → Fiber 정체성 매핑 (예시)',
    cards: [
      {
        id: 'div',
        code: '<div />',
        tone: 'emerald',
        iconName: 'cube',
        rows: [
          { field: 'tag', value: 'HostComponent (5)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: "'div'" },
          { field: 'type', value: "'div'" },
        ],
      },
      {
        id: 'my-button',
        code: '<MyButton />',
        tone: 'violet',
        iconName: 'rocket',
        rows: [
          { field: 'tag', value: 'FunctionComponent (0)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: 'MyButton' },
          { field: 'type', value: 'MyButton' },
        ],
      },
      {
        id: 'fragment',
        code: '<>...</>',
        tone: 'amber',
        iconName: 'puzzle',
        rows: [
          { field: 'tag', value: 'Fragment (7)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: 'REACT_FRAGMENT_TYPE' },
          { field: 'type', value: 'REACT_FRAGMENT_TYPE' },
        ],
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'stateNode',
    description:
      'Fiber가 무엇인지를 식별하는 필드를 봤다면, 이제 그 Fiber가 무엇과 연결되는지를 저장하는 stateNode를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-state-node',
  },
};

const en: FiberIdentityFieldsContent = {
  hero: {
    badge: 'Fiber Tree · 2/10',
    title: {
      line1: 'A Fiber stores its identity',
      line2: 'across several fields.',
    },
    emphasis: 'across several fields',
    description:
      'tag holds the Fiber kind, key is the sibling identifier, and elementType + type connect the original Element to the actual render target.',
    cardLabel: 'Fiber',
    fiberFields: [
      { id: 'tag', label: 'tag', meaning: 'Fiber kind', tone: 'sky' },
      { id: 'key', label: 'key', meaning: 'sibling identifier', tone: 'emerald' },
      {
        id: 'elementType',
        label: 'elementType',
        meaning: 'original Element’s type',
        tone: 'violet',
      },
      { id: 'type', label: 'type', meaning: 'actual render target', tone: 'amber' },
    ],
    extraNote: '...',
  },
  summary: {
    badge: '01',
    eyebrow: 'QUICK SUMMARY',
    title: 'Four identity fields at a glance',
    cards: [
      {
        id: 'tag',
        field: 'tag',
        question: 'What kind of Fiber is this?',
        description: 'Holds a WorkTag value that decides which render path React uses.',
        tone: 'sky',
        iconName: 'cube',
      },
      {
        id: 'key',
        field: 'key',
        question: 'Which sibling is this?',
        description: 'Unique identifier among siblings that share the same parent.',
        tone: 'emerald',
        iconName: 'key',
      },
      {
        id: 'elementType',
        field: 'elementType',
        question: 'What was the Element’s original type?',
        description: 'Preserves the type the Element was created with.',
        tone: 'violet',
        iconName: 'code',
      },
      {
        id: 'type',
        field: 'type',
        question: 'What does React actually render?',
        description: 'The real render target — a string, function, class, or other value.',
        tone: 'amber',
        iconName: 'target',
      },
    ],
  },
  workTags: {
    badge: '02',
    eyebrow: 'WORKTAG EXAMPLES',
    title: 'tag tells React the Fiber kind (selected WorkTags)',
    cards: [
      { name: 'FunctionComponent', value: 0, tone: 'sky' },
      { name: 'ClassComponent', value: 1, tone: 'violet' },
      { name: 'HostRoot', value: 3, tone: 'indigo' },
      { name: 'HostComponent', value: 5, tone: 'teal' },
      { name: 'HostText', value: 6, tone: 'cyan' },
      { name: 'Fragment', value: 7, tone: 'emerald' },
      { name: 'Mode', value: 8, tone: 'amber' },
      { name: 'SuspenseComponent', value: 13, tone: 'blue' },
      { name: 'OffscreenComponent', value: 16, tone: 'violet' },
    ],
    banner: 'tag tells React which processing path to use for this Fiber.',
  },
  keyField: {
    badge: '03',
    eyebrow: 'SIBLING IDENTIFIER',
    title: 'key identifies a Fiber among its siblings',
    description: 'key helps a Fiber keep its identity within a sibling list.',
    codeLabel: 'JSX',
    code: 'items.map((item) => <TodoItem key={item.id} item={item} />);',
    beforeLabel: 'Previous render',
    afterLabel: 'Next render',
    moveLabel: 'Reordered',
    before: [
      { keyValue: 'a', label: 'Groceries', tone: 'sky' },
      { keyValue: 'b', label: 'Workout', tone: 'violet' },
      { keyValue: 'c', label: 'Reading', tone: 'amber' },
    ],
    after: [
      { keyValue: 'c', label: 'Reading', tone: 'amber' },
      { keyValue: 'a', label: 'Groceries', tone: 'sky' },
      { keyValue: 'b', label: 'Workout', tone: 'violet' },
    ],
    matchNote:
      'Items with the same key are matched to the same Fiber, so their state is preserved.',
    note: 'That key drives later decisions during child reconciliation and state preservation.',
    highlights: ['child reconciliation', 'state preservation'],
  },
  typeVs: {
    badge: '04',
    eyebrow: 'ELEMENTTYPE VS TYPE',
    title: 'elementType vs type — what is the difference?',
    description:
      'The type an Element carries and the value React actually renders can differ, so a Fiber stores both.',
    elementType: {
      title: 'elementType',
      subtitle: 'the type the Element originally carried',
      body: 'Stores the exact type passed in when the React Element was created.',
    },
    type: {
      title: 'type',
      subtitle: 'the actual render target',
      body: 'The value React really renders — a string, function, or class; for a wrapper, the real component inside it.',
    },
    examplesLabel: 'examples',
    sameLabel: 'same',
    diffLabel: 'differs',
    examples: [
      { id: 'div', code: '<div />', elementType: "'div'", type: "'div'" },
      { id: 'my-button', code: '<MyButton />', elementType: 'MyButton', type: 'MyButton' },
      { id: 'memo', code: '<MemoApp />', elementType: 'memo(App)', type: 'App' },
      {
        id: 'lazy',
        code: '<LazyPage />',
        elementType: "lazy(() => import('./Page'))",
        type: 'Page',
      },
    ],
    note: 'For memo around a plain function component, and for lazy, elementType keeps the wrapper object while type points to the component React actually renders.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'Files',
      files: [
        'packages/react-reconciler/src/ReactInternalTypes.js',
        'packages/react-reconciler/src/ReactWorkTags.js',
      ],
      lookForLabel: 'Look for',
      lookFor: 'tag, key, elementType, type definitions',
    },
    blocks: [
      {
        fileName: 'ReactInternalTypes.js',
        language: 'TypeScript',
        content: reactInternalTypesCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
        cta: 'Read ReactInternalTypes.js',
      },
      {
        fileName: 'ReactWorkTags.js',
        language: 'TypeScript',
        content: reactWorkTagsCode,
        href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactWorkTags.js',
        cta: 'Read ReactWorkTags.js',
      },
    ],
  },
  mapping: {
    badge: '06',
    eyebrow: 'REAL MAPPING',
    title: 'JSX → Fiber identity mapping (examples)',
    cards: [
      {
        id: 'div',
        code: '<div />',
        tone: 'emerald',
        iconName: 'cube',
        rows: [
          { field: 'tag', value: 'HostComponent (5)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: "'div'" },
          { field: 'type', value: "'div'" },
        ],
      },
      {
        id: 'my-button',
        code: '<MyButton />',
        tone: 'violet',
        iconName: 'rocket',
        rows: [
          { field: 'tag', value: 'FunctionComponent (0)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: 'MyButton' },
          { field: 'type', value: 'MyButton' },
        ],
      },
      {
        id: 'fragment',
        code: '<>...</>',
        tone: 'amber',
        iconName: 'puzzle',
        rows: [
          { field: 'tag', value: 'Fragment (7)' },
          { field: 'key', value: 'null' },
          { field: 'elementType', value: 'REACT_FRAGMENT_TYPE' },
          { field: 'type', value: 'REACT_FRAGMENT_TYPE' },
        ],
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'stateNode',
    description:
      'Now that you have seen the fields that identify a Fiber, look at stateNode — the field that stores what the Fiber is connected to.',
    cta: 'Go to the next page',
    href: '/fiber-state-node',
  },
};

export const fiberIdentityFieldsContent: Record<Locale, FiberIdentityFieldsContent> = { ko, en };
