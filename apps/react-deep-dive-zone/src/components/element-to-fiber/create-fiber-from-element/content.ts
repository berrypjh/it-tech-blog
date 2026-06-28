import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ExtractionChip = {
  badge: string;
  label: string;
};

export type MappingRow = {
  id: string;
  field: string;
  title: string;
  description: string;
  iconName: 'inspect' | 'key' | 'package';
};

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'box' | 'wand' | 'split' | 'puzzle' | 'sparkles';
  tone: ToneKey;
};

export type DevTableRow = {
  id: string;
  element: string;
  fiber: string;
};

export type CreateFiberFromElementContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description1: string;
    description2: string;
    elementLabel: string;
    elementCode: string;
    functionLabel: string;
    functionSubtitle: string;
    extractionChips: ExtractionChip[];
    fiberLabel: string;
    fiberCode: string;
  };
  io: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    inputTitle: string;
    inputCode: string;
    functionTitle: string;
    functionSubtitle: string;
    outputTitle: string;
    outputCode: string;
  };
  mapping: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    rows: MappingRow[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    question: string;
    primaryCta: string;
    primaryHref: string;
    code: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  devInfo: {
    badge: string;
    eyebrow: string;
    title: string;
    devPill: string;
    description: string;
    tableHeader: { element: string; fiber: string };
    rows: DevTableRow[];
    mappingTitle: string;
    mappingLeftLabel: string;
    mappingLeftCode: string;
    mappingRightLabel: string;
    mappingRightCode: string;
    footnote: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: CreateFiberFromElementContent = {
  hero: {
    badge: 'Fiber 생성 · 2/10단계',
    title: {
      line1: 'Element는',
      line2: '어디서 Fiber로 바뀔까?',
    },
    description1: '그 시작점이 바로 createFiberFromElement입니다.',
    description2:
      '이 함수는 Element에서 type, key, props를 꺼내 실제 Fiber 생성 흐름으로 넘깁니다.',
    elementLabel: 'React Element',
    elementCode: "{\n  type: MyButton,\n  key: null,\n  props: {\n    label: '저장'\n  }\n}",
    functionLabel: 'createFiberFromElement(element)',
    functionSubtitle: 'Element를 받아 핵심 데이터를 추출',
    extractionChips: [
      { badge: 'T', label: 'type 추출' },
      { badge: 'K', label: 'key 추출' },
      { badge: 'P', label: 'props 추출' },
    ],
    fiberLabel: 'Fiber',
    fiberCode:
      "{\n  tag: FunctionComponent,\n  key: null,\n  type: MyButton,\n  pendingProps: {\n    label: '저장'\n  },\n  return: null,\n  child: null,\n  sibling: null,\n  lanes: NoLanes,\n  alternate: null\n}",
  },
  io: {
    badge: '01',
    eyebrow: 'IO 구조 한눈에',
    title: '입력과 출력 구조',
    description: 'createFiberFromElement는 한 가지 일을 합니다. Element를 받아 Fiber를 돌려줍니다.',
    inputTitle: '입력 — React Element',
    inputCode: "{\n  type: MyButton,\n  key: null,\n  props: { label: '저장' }\n}",
    functionTitle: 'createFiberFromElement()',
    functionSubtitle: 'type / key / props 추출 → 다음 함수 호출',
    outputTitle: '출력 — Fiber',
    outputCode:
      "{\n  tag: FunctionComponent,\n  key: null,\n  type: MyButton,\n  pendingProps: { label: '저장' },\n  return: null,\n  child: null,\n  sibling: null,\n  lanes: NoLanes,\n  alternate: null\n}",
  },
  mapping: {
    badge: '02',
    eyebrow: '필드 매핑',
    title: 'Element의 어떤 값이 넘어갈까?',
    description: 'Element 본체에서 추출되는 세 가지 핵심 값이 다음 단계의 입력이 됩니다.',
    rows: [
      {
        id: 'type',
        field: 'element.type',
        title: '어떤 Fiber 종류를 만들지 판단하는 기준',
        description: "ex) 'div' → HostComponent, 함수 → FunctionComponent",
        iconName: 'inspect',
      },
      {
        id: 'key',
        field: 'element.key',
        title: 'Fiber key로 전달',
        description: '형제 재조정 시 동일성을 판단하는 핵심 값',
        iconName: 'key',
      },
      {
        id: 'props',
        field: 'element.props',
        title: 'pendingProps로 전달될 초기 입력',
        description: '컴포넌트가 받을 초기 props',
        iconName: 'package',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    description:
      'React 저장소의 실제 함수를 그대로 봅니다. 줄 수가 적지만, 위임 구조가 명확합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: '함수',
    functionName: 'createFiberFromElement',
    question: '이 함수가 직접 Fiber 종류를 고르는가, 아니면 다음 함수에 위임하는가?',
    primaryCta: 'ReactFiber.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    code: `export function createFiberFromElement(element, mode, lanes) {
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
}`,
  },
  flow: {
    badge: '04',
    eyebrow: '단계별 흐름',
    title: '함수 호출 흐름 시각화',
    description: '한 Element가 Fiber가 되기까지 거치는 5단계를 카드로 정리했습니다.',
    steps: [
      {
        id: 'element',
        number: '1',
        title: 'React Element',
        description: 'JSX로부터 만들어진 Element 객체',
        iconName: 'box',
        tone: 'blue',
      },
      {
        id: 'create-fiber',
        number: '2',
        title: 'createFiberFromElement',
        description: 'Element를 받아 핵심 데이터를 추출',
        iconName: 'wand',
        tone: 'sky',
      },
      {
        id: 'split',
        number: '3',
        title: 'type / key / props 분리',
        description: 'element.type, element.key, element.props 추출',
        iconName: 'split',
        tone: 'cyan',
      },
      {
        id: 'delegate',
        number: '4',
        title: 'createFiberFromTypeAndProps',
        description: 'type을 보고 어떤 Fiber를 만들지 결정',
        iconName: 'puzzle',
        tone: 'violet',
      },
      {
        id: 'fiber',
        number: '5',
        title: 'Fiber 생성',
        description: '적절한 tag와 초기 필드로 Fiber 객체 생성',
        iconName: 'sparkles',
        tone: 'teal',
      },
    ],
  },
  devInfo: {
    badge: '05',
    eyebrow: 'DEV 보조 지식',
    title: '개발 모드에서는 무엇이 더 전달될까?',
    devPill: 'DEV 전용',
    description:
      '개발(DEV) 모드에서는 디버깅을 돕기 위한 추가 정보가 Element에 담겨 있으며, 일부가 Fiber로 전달됩니다.',
    tableHeader: { element: 'Element (DEV)', fiber: 'Fiber (DEV)' },
    rows: [
      { id: 'owner', element: 'element._owner', fiber: 'fiber._debugOwner' },
      {
        id: 'validated',
        element: 'element._store.validated',
        fiber: 'fiber._debugIsCurrentlyValidating',
      },
      {
        id: 'stack',
        element: 'element._debugStack',
        fiber: 'fiber._debugStack',
      },
      {
        id: 'task',
        element: 'element._debugTask',
        fiber: 'fiber._debugTask',
      },
    ],
    mappingTitle: '_debugStack은 그대로 전달됩니다.',
    mappingLeftLabel: 'Element._debugStack',
    mappingLeftCode: '"\\n in MyButton (at App.js:10)\\n"',
    mappingRightLabel: 'fiber._debugStack',
    mappingRightCode: '"\\n in MyButton (at App.js:10)\\n"',
    footnote: '내부 필드명은 버전에 따라 변경될 수 있습니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'createFiberFromTypeAndProps',
    description:
      'Fiber 변환의 입구를 확인했다면, 이제 React가 type을 보고 어떤 Fiber를 만들지 고르는 핵심 분기를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/create-fiber-from-type-and-props',
  },
};

const en: CreateFiberFromElementContent = {
  hero: {
    badge: 'Element → Fiber · 2/10',
    title: {
      line1: 'Where does an Element',
      line2: 'become a Fiber?',
    },
    description1: 'The entry point is createFiberFromElement.',
    description2:
      'This function pulls type, key, and props out of the Element and hands them to the real Fiber-creation flow.',
    elementLabel: 'React Element',
    elementCode: "{\n  type: MyButton,\n  key: null,\n  props: {\n    label: 'Save'\n  }\n}",
    functionLabel: 'createFiberFromElement(element)',
    functionSubtitle: 'Takes the Element and extracts the essentials',
    extractionChips: [
      { badge: 'T', label: 'extract type' },
      { badge: 'K', label: 'extract key' },
      { badge: 'P', label: 'extract props' },
    ],
    fiberLabel: 'Fiber',
    fiberCode:
      "{\n  tag: FunctionComponent,\n  key: null,\n  type: MyButton,\n  pendingProps: {\n    label: 'Save'\n  },\n  return: null,\n  child: null,\n  sibling: null,\n  lanes: NoLanes,\n  alternate: null\n}",
  },
  io: {
    badge: '01',
    eyebrow: 'IO AT A GLANCE',
    title: 'Input and output shape',
    description: 'createFiberFromElement does one thing: take an Element, return a Fiber.',
    inputTitle: 'Input — React Element',
    inputCode: "{\n  type: MyButton,\n  key: null,\n  props: { label: 'Save' }\n}",
    functionTitle: 'createFiberFromElement()',
    functionSubtitle: 'Extracts type / key / props → calls the next function',
    outputTitle: 'Output — Fiber',
    outputCode:
      "{\n  tag: FunctionComponent,\n  key: null,\n  type: MyButton,\n  pendingProps: { label: 'Save' },\n  return: null,\n  child: null,\n  sibling: null,\n  lanes: NoLanes,\n  alternate: null\n}",
  },
  mapping: {
    badge: '02',
    eyebrow: 'FIELD MAPPING',
    title: 'Which Element values get passed on?',
    description: 'Three values are pulled from the Element body — each one feeds the next step.',
    rows: [
      {
        id: 'type',
        field: 'element.type',
        title: 'Determines which kind of Fiber to build',
        description: "ex) 'div' → HostComponent, function → FunctionComponent",
        iconName: 'inspect',
      },
      {
        id: 'key',
        field: 'element.key',
        title: 'Passed through as the Fiber key',
        description: 'Used to judge identity during sibling reconciliation',
        iconName: 'key',
      },
      {
        id: 'props',
        field: 'element.props',
        title: 'Becomes pendingProps — the initial input',
        description: 'The initial props the component will receive',
        iconName: 'package',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    description:
      'Read the actual function from the React repo. It is short — and the delegation is obvious.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiber.js',
    functionLabel: 'Function',
    functionName: 'createFiberFromElement',
    question:
      'Does this function decide the Fiber kind itself, or does it delegate to the next function?',
    primaryCta: 'Read ReactFiber.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
    code: `export function createFiberFromElement(element, mode, lanes) {
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
}`,
  },
  flow: {
    badge: '04',
    eyebrow: 'STEP BY STEP',
    title: 'Function call flow',
    description: 'Five cards covering the steps from one Element to a real Fiber.',
    steps: [
      {
        id: 'element',
        number: '1',
        title: 'React Element',
        description: 'The Element object produced from JSX',
        iconName: 'box',
        tone: 'blue',
      },
      {
        id: 'create-fiber',
        number: '2',
        title: 'createFiberFromElement',
        description: 'Receives the Element and extracts the essentials',
        iconName: 'wand',
        tone: 'sky',
      },
      {
        id: 'split',
        number: '3',
        title: 'Split type / key / props',
        description: 'Pulls element.type, element.key, and element.props',
        iconName: 'split',
        tone: 'cyan',
      },
      {
        id: 'delegate',
        number: '4',
        title: 'createFiberFromTypeAndProps',
        description: 'Looks at type and picks which Fiber to build',
        iconName: 'puzzle',
        tone: 'violet',
      },
      {
        id: 'fiber',
        number: '5',
        title: 'Fiber created',
        description: 'A Fiber with the right tag and initial fields',
        iconName: 'sparkles',
        tone: 'teal',
      },
    ],
  },
  devInfo: {
    badge: '05',
    eyebrow: 'DEV-ONLY BONUS',
    title: 'What extra info travels in development mode?',
    devPill: 'DEV only',
    description:
      'In development mode, Elements carry extra debugging information and some of it is forwarded onto the Fiber.',
    tableHeader: { element: 'Element (DEV)', fiber: 'Fiber (DEV)' },
    rows: [
      { id: 'owner', element: 'element._owner', fiber: 'fiber._debugOwner' },
      {
        id: 'validated',
        element: 'element._store.validated',
        fiber: 'fiber._debugIsCurrentlyValidating',
      },
      {
        id: 'stack',
        element: 'element._debugStack',
        fiber: 'fiber._debugStack',
      },
      {
        id: 'task',
        element: 'element._debugTask',
        fiber: 'fiber._debugTask',
      },
    ],
    mappingTitle: '_debugStack is forwarded as-is.',
    mappingLeftLabel: 'Element._debugStack',
    mappingLeftCode: '"\\n in MyButton (at App.js:10)\\n"',
    mappingRightLabel: 'fiber._debugStack',
    mappingRightCode: '"\\n in MyButton (at App.js:10)\\n"',
    footnote: 'These internal field names can change between React versions.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'createFiberFromTypeAndProps',
    description:
      'Now that the entry point of Fiber conversion is clear, look at the branch where React turns type into a specific Fiber kind.',
    cta: 'Go to the next page',
    href: '/create-fiber-from-type-and-props',
  },
};

export const createFiberFromElementContent: Record<Locale, CreateFiberFromElementContent> = {
  ko,
  en,
};
