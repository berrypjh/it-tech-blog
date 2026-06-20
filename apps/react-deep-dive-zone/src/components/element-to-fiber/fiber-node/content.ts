import type { Locale } from '@it-tech-blog/preferences';

export type MappingRow = {
  id: string;
  element: string;
  description: string;
  fiber: string;
};

export type InfoGroupCard = {
  id: string;
  title: string;
  fields: string[];
  iconName: 'network' | 'refresh' | 'flag' | 'link';
  accent: 'emerald' | 'violet' | 'sky' | 'amber';
};

export type CodeLineGroup = {
  id: string;
  label: string;
  tone: 'sky' | 'emerald' | 'violet' | 'amber';
  lines: string[];
};

export type ReasonCard = {
  id: string;
  title: string;
  description: string;
  iconName: 'network' | 'compare' | 'flag' | 'clock';
  accent: 'emerald' | 'violet' | 'amber' | 'sky';
};

export type FiberStoredInformationContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    elementTitle: string;
    elementFields: string[];
    fiberTitle: string;
    fiberFields: string[];
  };
  mapping: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { element: string; description: string; fiber: string };
    rows: MappingRow[];
    note: string;
  };
  groups: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: InfoGroupCard[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    focusLabel: string;
    focus: string;
    questionLabel: string;
    question: string;
    hintCta: string;
    hint: string;
    codeTitle: string;
    groups: CodeLineGroup[];
  };
  expansion: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    elementTitle: string;
    elementFields: string[];
    fiberTitle: string;
    fiberFields: string[];
  };
  reasons: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ReasonCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: FiberStoredInformationContent = {
  hero: {
    badge: 'Fiber 생성 · 9/10단계',
    title: {
      line1: 'Fiber는 Element를',
      line2: '복사한 객체가 아닙니다.',
    },
    description:
      'Element의 type, key, props를 받아오지만, 실제 렌더링을 수행하기 위해 훨씬 많은 작업 정보를 추가로 가집니다.',
    elementTitle: 'Element',
    elementFields: ['type', 'key', 'props'],
    fiberTitle: 'Fiber',
    fiberFields: [
      'tag',
      'type',
      'key',
      'pendingProps',
      'child',
      'sibling',
      'return',
      'memoizedState',
      'updateQueue',
      'flags',
      'lanes',
      'alternate',
    ],
  },
  mapping: {
    badge: '01',
    eyebrow: '출발점 매핑',
    title: 'Element → Fiber 매핑 표',
    description: 'Element의 세 가지 핵심 필드가 Fiber의 어느 자리로 옮겨가는지부터 정리합니다.',
    headers: { element: 'Element', description: '설명', fiber: 'Fiber' },
    rows: [
      {
        id: 'type',
        element: 'Element.type',
        description: '요소의 타입 정보',
        fiber: 'Fiber.elementType / type',
      },
      {
        id: 'key',
        element: 'Element.key',
        description: '요소의 고유 키',
        fiber: 'Fiber.key',
      },
      {
        id: 'props',
        element: 'Element.props',
        description: '요소의 속성(Props)',
        fiber: 'Fiber.pendingProps',
      },
    ],
    note: 'Element 정보는 Fiber의 출발점일 뿐이다.',
  },
  groups: {
    badge: '02',
    eyebrow: '추가 정보 묶음',
    title: 'Fiber가 추가로 가지는 정보 묶음',
    description: 'Fiber가 Element 위에 얹어서 들고 다니는 정보는 크게 네 갈래로 묶입니다.',
    cards: [
      {
        id: 'tree',
        title: '트리 구조',
        fields: ['return', 'child', 'sibling'],
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'update-state',
        title: '업데이트 상태',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        iconName: 'refresh',
        accent: 'violet',
      },
      {
        id: 'work-state',
        title: '작업 상태',
        fields: ['flags', 'subtreeFlags', 'lanes', 'childLanes'],
        iconName: 'flag',
        accent: 'sky',
      },
      {
        id: 'alternate',
        title: '이중 트리 연결',
        fields: ['alternate'],
        iconName: 'link',
        accent: 'amber',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description: 'FiberNode 생성자에서 필드가 어떻게 초기화되는지 그대로 봅니다.',
    fileLabel: '파일',
    filePath: 'ReactFiber.js',
    focusLabel: '볼 곳',
    focus: 'FiberNode 필드 초기화',
    questionLabel: '핵심 질문',
    question: 'Fiber에는 Element에 없던 어떤 종류의 정보가 추가될까?',
    hintCta: '힌트 보기',
    hint: 'FiberNode 생성자는 네 묶음으로 필드를 초기화합니다. 기본 식별 정보, 트리 연결, props/state/update, 그리고 작업 상태와 alternate입니다.',
    codeTitle: 'ReactFiber.js',
    groups: [
      {
        id: 'identity',
        label: '기본 식별 정보',
        tone: 'sky',
        lines: [
          'this.tag = tag;',
          'this.key = key;',
          'this.elementType = null;',
          'this.type = null;',
          'this.stateNode = null;',
        ],
      },
      {
        id: 'tree',
        label: '트리 연결',
        tone: 'emerald',
        lines: ['this.return = null;', 'this.child = null;', 'this.sibling = null;'],
      },
      {
        id: 'update',
        label: 'props / state / update',
        tone: 'violet',
        lines: [
          'this.pendingProps = pendingProps;',
          'this.memoizedProps = null;',
          'this.updateQueue = null;',
          'this.memoizedState = null;',
        ],
      },
      {
        id: 'work',
        label: '작업 상태 / alternate',
        tone: 'amber',
        lines: ['this.flags = NoFlags;', 'this.lanes = NoLanes;', 'this.alternate = null;'],
      },
    ],
  },
  expansion: {
    badge: '04',
    eyebrow: '확장 다이어그램',
    title: '구조 확장 시각화',
    description: 'Element의 작은 세 칸이 Fiber의 12칸으로 부풀어 오릅니다.',
    elementTitle: 'Element',
    elementFields: ['type', 'key', 'props'],
    fiberTitle: 'Fiber',
    fiberFields: [
      'tag',
      'type',
      'key',
      'pendingProps',
      'child',
      'sibling',
      'return',
      'memoizedState',
      'updateQueue',
      'flags',
      'lanes',
      'alternate',
    ],
  },
  reasons: {
    badge: '05',
    eyebrow: '필드별 이유',
    title: '왜 이런 필드가 필요한가?',
    description: '각 필드 묶음은 React가 “작업”을 처리하기 위해 필요한 구체적인 역할을 가집니다.',
    cards: [
      {
        id: 'traverse',
        title: '트리를 순회하기 위해',
        description: '부모-자식-형제 관계를 따라 이동할 수 있다.',
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'compare',
        title: '이전 결과 대비 값을 비교하기 위해',
        description: '변경 여부를 판단하고 재사용할 수 있다.',
        iconName: 'compare',
        accent: 'violet',
      },
      {
        id: 'mark',
        title: '어떤 변경이 필요한지 표시하기 위해',
        description: '업데이트가 커밋될 부분만 선택적으로 처리한다.',
        iconName: 'flag',
        accent: 'amber',
      },
      {
        id: 'priority',
        title: '작업 우선순위를 관리하기 위해',
        description: '중요한 작업을 먼저 처리할 수 있다.',
        iconName: 'clock',
        accent: 'sky',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Fiber는 왜 필요한가?',
    description:
      'Fiber가 얼마나 많은 작업 정보를 갖고 있는지 알았다. 마지막으로 왜 React가 이 구조를 선택했는지 알아보자.',
    cta: '다음 페이지로 이동',
    href: '/why-fiber',
  },
};

const en: FiberStoredInformationContent = {
  hero: {
    badge: 'Element → Fiber · 9/10',
    title: {
      line1: 'A Fiber is not',
      line2: 'a copy of the Element.',
    },
    description:
      'It receives type, key, and props from the Element, but carries much more work-related information to actually drive rendering.',
    elementTitle: 'Element',
    elementFields: ['type', 'key', 'props'],
    fiberTitle: 'Fiber',
    fiberFields: [
      'tag',
      'type',
      'key',
      'pendingProps',
      'child',
      'sibling',
      'return',
      'memoizedState',
      'updateQueue',
      'flags',
      'lanes',
      'alternate',
    ],
  },
  mapping: {
    badge: '01',
    eyebrow: 'Starting points',
    title: 'Element → Fiber mapping',
    description: 'See where the three Element fields land on the Fiber.',
    headers: { element: 'Element', description: 'Meaning', fiber: 'Fiber' },
    rows: [
      {
        id: 'type',
        element: 'Element.type',
        description: 'Type of the element',
        fiber: 'Fiber.elementType / type',
      },
      {
        id: 'key',
        element: 'Element.key',
        description: 'Unique key of the element',
        fiber: 'Fiber.key',
      },
      {
        id: 'props',
        element: 'Element.props',
        description: 'Element props',
        fiber: 'Fiber.pendingProps',
      },
    ],
    note: 'The Element is only the starting point for the Fiber.',
  },
  groups: {
    badge: '02',
    eyebrow: 'Added information',
    title: 'Information the Fiber adds on top',
    description: 'On top of the Element, a Fiber carries four bundles of additional information.',
    cards: [
      {
        id: 'tree',
        title: 'Tree structure',
        fields: ['return', 'child', 'sibling'],
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'update-state',
        title: 'Update state',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        iconName: 'refresh',
        accent: 'violet',
      },
      {
        id: 'work-state',
        title: 'Work state',
        fields: ['flags', 'subtreeFlags', 'lanes', 'childLanes'],
        iconName: 'flag',
        accent: 'sky',
      },
      {
        id: 'alternate',
        title: 'Double-tree link',
        fields: ['alternate'],
        iconName: 'link',
        accent: 'amber',
      },
    ],
  },
  checkpoint: {
    badge: '03',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description: 'Look at the FiberNode constructor and how its fields are initialized.',
    fileLabel: 'File',
    filePath: 'ReactFiber.js',
    focusLabel: 'Spot',
    focus: 'FiberNode field initialization',
    questionLabel: 'Key question',
    question: "What kind of information does a Fiber add that an Element doesn't have?",
    hintCta: 'Show hint',
    hint: 'The FiberNode constructor initializes fields in four groups: basic identity, tree links, props/state/update, and work state / alternate.',
    codeTitle: 'ReactFiber.js',
    groups: [
      {
        id: 'identity',
        label: 'Basic identity',
        tone: 'sky',
        lines: [
          'this.tag = tag;',
          'this.key = key;',
          'this.elementType = null;',
          'this.type = null;',
          'this.stateNode = null;',
        ],
      },
      {
        id: 'tree',
        label: 'Tree links',
        tone: 'emerald',
        lines: ['this.return = null;', 'this.child = null;', 'this.sibling = null;'],
      },
      {
        id: 'update',
        label: 'props / state / update',
        tone: 'violet',
        lines: [
          'this.pendingProps = pendingProps;',
          'this.memoizedProps = null;',
          'this.updateQueue = null;',
          'this.memoizedState = null;',
        ],
      },
      {
        id: 'work',
        label: 'Work state / alternate',
        tone: 'amber',
        lines: ['this.flags = NoFlags;', 'this.lanes = NoLanes;', 'this.alternate = null;'],
      },
    ],
  },
  expansion: {
    badge: '04',
    eyebrow: 'Expansion diagram',
    title: 'Structure expansion',
    description: 'The three small slots in the Element balloon into twelve slots in the Fiber.',
    elementTitle: 'Element',
    elementFields: ['type', 'key', 'props'],
    fiberTitle: 'Fiber',
    fiberFields: [
      'tag',
      'type',
      'key',
      'pendingProps',
      'child',
      'sibling',
      'return',
      'memoizedState',
      'updateQueue',
      'flags',
      'lanes',
      'alternate',
    ],
  },
  reasons: {
    badge: '05',
    eyebrow: 'Why each field',
    title: 'Why these fields are needed',
    description: 'Each bundle of fields exists because React has specific work to do.',
    cards: [
      {
        id: 'traverse',
        title: 'To walk the tree',
        description: 'Move along parent / child / sibling relationships.',
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'compare',
        title: 'To compare against the previous result',
        description: 'Detect changes and reuse what is still valid.',
        iconName: 'compare',
        accent: 'violet',
      },
      {
        id: 'mark',
        title: 'To mark what needs to change',
        description: 'Process only the parts that will be committed.',
        iconName: 'flag',
        accent: 'amber',
      },
      {
        id: 'priority',
        title: 'To manage work priority',
        description: 'Handle important work first.',
        iconName: 'clock',
        accent: 'sky',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'why is Fiber needed?',
    description:
      'Now you know how much work-related info a Fiber holds. Finally, find out why React chose this structure in the first place.',
    cta: 'Go to the next page',
    href: '/why-fiber',
  },
};

export const fiberStoredInformationContent: Record<Locale, FiberStoredInformationContent> = {
  ko,
  en,
};
