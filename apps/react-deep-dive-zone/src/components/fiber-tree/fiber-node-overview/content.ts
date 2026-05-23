import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../start/_shared/tones';

export type { ToneKey };

export type FieldGroupId =
  | 'identity'
  | 'tree'
  | 'props-state'
  | 'flags'
  | 'scheduling'
  | 'alternate';

export type HeroFieldGroup = {
  id: FieldGroupId;
  title: string;
  fields: string[];
  tone: ToneKey;
  iconName: 'fingerprint' | 'network' | 'database' | 'flag' | 'zap' | 'layers';
};

export type ReviewStep = {
  id: 'element' | 'create' | 'fiber';
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'cube' | 'wand' | 'hex';
};

export type PreviewRole = {
  id: string;
  fields: string;
  description: string;
  tone: ToneKey;
  iconName: 'fingerprint' | 'network' | 'database' | 'flag' | 'zap' | 'layers';
};

export type FiveFieldCard = {
  id: FieldGroupId | 'sched-alt';
  number: string;
  title: string;
  fields: string[];
  body: string;
  tone: ToneKey;
  iconName: 'fingerprint' | 'network' | 'database' | 'flag' | 'layers';
};

export type ReasonCard = {
  id: 'tree' | 'compare' | 'record' | 'priority';
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'tree' | 'refresh' | 'flag' | 'zap';
};

export type CodeAnnotation = {
  /** 코드 줄 범위 (1-based, inclusive) */
  from: number;
  to: number;
  label: string;
  tone: ToneKey;
};

export type InfoRow = {
  label: string;
  value: string;
  iconName: 'file' | 'eye' | 'help';
};

export type FiberNodeOverviewContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    emphasis: string;
    description: string;
    cardTitle: string;
    cardLabel: string;
    groups: HeroFieldGroup[];
  };
  review: {
    number: string;
    eyebrow: string;
    title: string;
    steps: ReviewStep[];
    banner: string;
  };
  preview: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    roleHeading: string;
    roles: PreviewRole[];
  };
  fieldGroups: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FiveFieldCard[];
  };
  notJustNode: {
    number: string;
    eyebrow: string;
    title: string;
    centerMessage: { lines: string[]; emphasis: string };
    reasons: ReasonCard[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      rows: InfoRow[];
      buttonLabel: string;
      buttonHref: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
      annotations: CodeAnnotation[];
    };
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    question: string;
    answer: string;
    explanation: string;
    diagram: {
      beforeLabel: string;
      afterLabel: string;
      beforeNodes: string[];
      afterNodes: { label: string; iconName: 'refresh' | 'flag' | 'zap' | 'link' }[];
    };
  };
  next: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const fiberCodeKo = `type Fiber = {
  tag,
  key,
  elementType,
  type,
  stateNode,

  return,
  child,
  sibling,

  pendingProps,
  memoizedProps,
  memoizedState,
  updateQueue,

  flags,
  subtreeFlags,
  deletions,

  lanes,
  childLanes,

  alternate,
};`;

const checkpointCodeKo = `export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;

  return: Fiber | null;
  child: Fiber | null;
  sibling: Fiber | null;
  index: number;
  ref: Ref | null;

  pendingProps: any;
  memoizedProps: any;
  updateQueue: UpdateQueue<any> | null;
  memoizedState: any | null;

  dependencies: Dependencies | null;
  mode: TypeOfMode;

  flags: Flags;
  subtreeFlags: Flags;
  deletions: Array<Fiber> | null;

  lanes: Lanes;
  childLanes: Lanes;

  alternate: Fiber | null;
};`;

const ko: FiberNodeOverviewContent = {
  hero: {
    badge: 'CHAPTER 13',
    title: {
      line1: 'Fiber는',
      line2: 'React 렌더링의',
      line3: '기본 작업 단위입니다.',
    },
    emphasis: '기본 작업 단위',
    description:
      '각 Fiber는 자신의 종류, 트리 관계, props와 state, 변경 표시, 우선순위, alternate 연결까지 함께 품습니다.',
    cardTitle: 'Fiber 객체 구조',
    cardLabel: 'FiberNode',
    groups: [
      {
        id: 'identity',
        title: '정체성',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        tone: 'teal',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        title: '트리 연결',
        fields: ['return', 'child', 'sibling'],
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        title: '입력과 상태',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        title: '변경 표시',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        title: '스케줄링',
        fields: ['lanes', 'childLanes'],
        tone: 'sky',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        title: '이중 트리 연결',
        fields: ['alternate'],
        tone: 'violet',
        iconName: 'layers',
      },
    ],
  },
  review: {
    number: '01',
    eyebrow: '앞 챕터 복습',
    title: '앞 챕터 복습: Element → Fiber',
    steps: [
      {
        id: 'element',
        title: 'React Element',
        body: 'JSX가 만들어내는\n불변의 설명 객체',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'create',
        title: 'createFiberFromElement',
        body: 'Element의 type, key, props를 읽어\nFiber 생성 흐름 시작',
        tone: 'sky',
        iconName: 'wand',
      },
      {
        id: 'fiber',
        title: 'Fiber 생성',
        body: '정체성, Fiber tag로 분기되어\n실제 Fiber 객체가 만들어짐',
        tone: 'violet',
        iconName: 'hex',
      },
    ],
    banner: '이번 챕터에서는 그렇게 만들어진 Fiber 내부를 필드 단위로 해부합니다.',
  },
  preview: {
    number: '02',
    eyebrow: '전체 구조 미리보기',
    title: 'Fiber 전체 구조 미리보기',
    description: 'Fiber의 전체 필드를 한눈에 보고, 각 그룹이 어떤 역할을 하는지 확인합니다.',
    code: fiberCodeKo,
    roleHeading: '각 그룹의 역할',
    roles: [
      {
        id: 'identity',
        fields: 'tag / key / elementType / type / stateNode',
        description: '이 Fiber가 어떤 대상인지 식별',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        fields: 'return / child / sibling',
        description: '트리 구조에서 어디에 연결되는지 표현',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        fields: 'pendingProps / memoizedProps / memoizedState / updateQueue',
        description: '이 컴포넌트의 입력(props)과 현재 상태, 업데이트 큐를 보관',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        fields: 'flags / subtreeFlags / deletions',
        description: '어떤 변경이 발생했는지, 하위 트리에 어떤 영향이 있는지 표시',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        fields: 'lanes / childLanes',
        description: '작업의 우선순위 정보를 저장',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        fields: 'alternate',
        description: '현재 화면을 가진 Fiber와 다음 화면을 계산 중인 Fiber를 연결',
        tone: 'indigo',
        iconName: 'layers',
      },
    ],
  },
  fieldGroups: {
    number: '03',
    eyebrow: '5개 영역으로 묶어 보기',
    title: 'Fiber 필드를 5개 영역으로 묶어 보기',
    description: '복잡한 Fiber 필드는 5개의 큰 영역으로 묶어서 이해할 수 있습니다.',
    cards: [
      {
        id: 'identity',
        number: '1',
        title: '정체성',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        body: 'Fiber의 종류와 대상을 식별하는 핵심 정보',
        tone: 'emerald',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        number: '2',
        title: '트리 연결',
        fields: ['return', 'child', 'sibling'],
        body: '부모, 첫 자식, 형제 연결로 트리 구조를 표현',
        tone: 'sky',
        iconName: 'network',
      },
      {
        id: 'props-state',
        number: '3',
        title: '입력과 상태',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        body: '컴포넌트의 입력과 상태, 업데이트 큐를 보관',
        tone: 'violet',
        iconName: 'database',
      },
      {
        id: 'flags',
        number: '4',
        title: '변경 표시',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        body: '현재 작업에서 어떤 변경이 발생했는지 기록',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'sched-alt',
        number: '5',
        title: '스케줄링과 이중 트리',
        fields: ['lanes', 'childLanes', 'alternate'],
        body: '우선순위 정보와 현재/다음 Fiber 연결',
        tone: 'teal',
        iconName: 'layers',
      },
    ],
  },
  notJustNode: {
    number: '04',
    eyebrow: '단순 노드가 아닌 이유',
    title: 'Fiber가 단순 노드가 아닌 이유',
    centerMessage: {
      lines: [
        'Fiber는',
        '무엇을 렌더링할지가 아니라,',
        '어떻게 렌더링을 진행할지를',
        '품은 객체다.',
      ],
      emphasis: '어떻게 렌더링을 진행할지',
    },
    reasons: [
      {
        id: 'tree',
        title: '트리를 연결한다',
        body: 'return / child / sibling 포인터로 React 요소 트리를 메모리에서 효율적으로 연결합니다.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: '이전 렌더와 다음 렌더를 비교한다',
        body: 'memoizedProps / memoizedState와 alternate를 통해 이전 상태와 비교하며 변경 여부를 판단합니다.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: '변경 효과를 기록한다',
        body: 'flags / subtreeFlags / deletions로 무엇이 바뀌었는지 기록하여 최소한의 작업만 수행합니다.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: '작업 우선순위를 관리한다',
        body: 'lanes / childLanes로 작업의 우선순위를 표현하고 중요한 작업을 먼저 처리합니다.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    number: '05',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      rows: [
        {
          label: '파일',
          value: 'packages/react-reconciler/src/ReactInternalTypes.js',
          iconName: 'file',
        },
        {
          label: '볼 것',
          value: 'export type Fiber',
          iconName: 'eye',
        },
        {
          label: '학습 질문',
          value: '이 정의만 보고도 Fiber가 단순 트리 노드가 아니라는 근거를 몇 개 찾을 수 있을까?',
          iconName: 'help',
        },
      ],
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.ts',
      language: 'TypeScript',
      content: checkpointCodeKo,
      annotations: [
        { from: 2, to: 6, label: '정체성', tone: 'emerald' },
        { from: 8, to: 12, label: '트리 연결', tone: 'sky' },
        { from: 14, to: 17, label: '입력과 상태', tone: 'violet' },
        { from: 22, to: 24, label: '변경 표시', tone: 'amber' },
        { from: 26, to: 27, label: '스케줄링', tone: 'teal' },
        { from: 29, to: 29, label: '이중 트리 연결', tone: 'indigo' },
      ],
    },
  },
  quiz: {
    number: '06',
    eyebrow: '미니 개념 퀴즈',
    title: '미니 개념 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    explanationLabel: '해설',
    question: 'Fiber가 단순히 부모-자식 관계만 저장한다면 무엇이 부족할까?',
    answer: '상태, 변경 표시, 우선순위, alternate 연결이 부족하다.',
    explanation:
      'React는 이전 상태와 비교하고, 변경을 최소화하며, 우선순위를 조정하고, 현재 화면과 다음 작업을 연결하기 위해 더 많은 정보를 Fiber에 담아야 합니다.',
    diagram: {
      beforeLabel: '단순 트리 노드',
      afterLabel: 'Fiber 노드',
      beforeNodes: ['parent', 'child', 'sibling'],
      afterNodes: [
        { label: 'compare', iconName: 'refresh' },
        { label: 'flag', iconName: 'flag' },
        { label: 'priority', iconName: 'zap' },
        { label: 'alternate', iconName: 'link' },
      ],
    },
  },
  next: {
    number: '07',
    eyebrow: '다음으로 넘어가기',
    title: '다음으로 넘어가기',
    description:
      'Fiber 전체 구조를 훑어봤다면, 이제 이 Fiber가 무엇인지를 식별하는 필드부터 살펴봅니다.',
    buttonLabel: '다음: tag / key / elementType / type',
    buttonHref: '/fiber-identity-fields',
  },
};

const fiberCodeEn = fiberCodeKo;
const checkpointCodeEn = checkpointCodeKo;

const en: FiberNodeOverviewContent = {
  hero: {
    badge: 'CHAPTER 13',
    title: {
      line1: 'Fiber is the',
      line2: 'fundamental unit of work',
      line3: 'in React rendering.',
    },
    emphasis: 'fundamental unit of work',
    description:
      'Each Fiber carries its own kind, tree relations, props and state, change flags, priority, and alternate link — all in one object.',
    cardTitle: 'Fiber object structure',
    cardLabel: 'FiberNode',
    groups: [
      {
        id: 'identity',
        title: 'Identity',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        tone: 'teal',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        title: 'Tree links',
        fields: ['return', 'child', 'sibling'],
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        title: 'Inputs & state',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        title: 'Change flags',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        title: 'Scheduling',
        fields: ['lanes', 'childLanes'],
        tone: 'sky',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        title: 'Double-tree link',
        fields: ['alternate'],
        tone: 'violet',
        iconName: 'layers',
      },
    ],
  },
  review: {
    number: '01',
    eyebrow: 'Previous chapter recap',
    title: 'Recap: Element → Fiber',
    steps: [
      {
        id: 'element',
        title: 'React Element',
        body: 'The immutable description\nobject produced by JSX',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'create',
        title: 'createFiberFromElement',
        body: 'Reads the Element’s type, key, props\nand starts the Fiber creation flow',
        tone: 'sky',
        iconName: 'wand',
      },
      {
        id: 'fiber',
        title: 'Fiber creation',
        body: 'Identity and Fiber tag branch out\nand the real Fiber object is built',
        tone: 'violet',
        iconName: 'hex',
      },
    ],
    banner: 'In this chapter we dissect that Fiber field by field.',
  },
  preview: {
    number: '02',
    eyebrow: 'Whole structure at a glance',
    title: 'The full Fiber structure at a glance',
    description: 'See every field at once, and what each group is responsible for.',
    code: fiberCodeEn,
    roleHeading: 'Role of each group',
    roles: [
      {
        id: 'identity',
        fields: 'tag / key / elementType / type / stateNode',
        description: 'Identifies what this Fiber represents',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        fields: 'return / child / sibling',
        description: 'Expresses where the Fiber sits in the tree',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        fields: 'pendingProps / memoizedProps / memoizedState / updateQueue',
        description: 'Holds this component’s inputs, current state, and update queue',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        fields: 'flags / subtreeFlags / deletions',
        description: 'Records what changed and the effect on the subtree',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        fields: 'lanes / childLanes',
        description: 'Stores priority information for the work',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        fields: 'alternate',
        description: 'Links the current-screen Fiber with the work-in-progress Fiber',
        tone: 'indigo',
        iconName: 'layers',
      },
    ],
  },
  fieldGroups: {
    number: '03',
    eyebrow: 'Grouped into five areas',
    title: 'Group the Fiber fields into five areas',
    description: 'The many Fiber fields fit into five large mental buckets.',
    cards: [
      {
        id: 'identity',
        number: '1',
        title: 'Identity',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        body: 'The core information that identifies the Fiber and its target',
        tone: 'emerald',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        number: '2',
        title: 'Tree links',
        fields: ['return', 'child', 'sibling'],
        body: 'Tree shape via parent, first-child, sibling pointers',
        tone: 'sky',
        iconName: 'network',
      },
      {
        id: 'props-state',
        number: '3',
        title: 'Inputs & state',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        body: 'Holds component inputs, state, and the update queue',
        tone: 'violet',
        iconName: 'database',
      },
      {
        id: 'flags',
        number: '4',
        title: 'Change flags',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        body: 'Records what changed during the current work',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'sched-alt',
        number: '5',
        title: 'Scheduling & double tree',
        fields: ['lanes', 'childLanes', 'alternate'],
        body: 'Priority info plus the link between current and next Fiber',
        tone: 'teal',
        iconName: 'layers',
      },
    ],
  },
  notJustNode: {
    number: '04',
    eyebrow: 'Why it is more than a node',
    title: 'Why a Fiber is not just a tree node',
    centerMessage: {
      lines: [
        'A Fiber holds',
        'not what to render,',
        'but how the rendering',
        'should be carried out.',
      ],
      emphasis: 'how the rendering',
    },
    reasons: [
      {
        id: 'tree',
        title: 'Links the tree together',
        body: 'return / child / sibling pointers connect the React element tree efficiently in memory.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: 'Compares previous vs next render',
        body: 'memoizedProps / memoizedState and alternate let React diff the previous state against the next.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: 'Records change effects',
        body: 'flags / subtreeFlags / deletions track what changed so React does the minimum work.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: 'Manages work priority',
        body: 'lanes / childLanes encode work priority so important work runs first.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    number: '05',
    eyebrow: 'Connect to real source',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      rows: [
        {
          label: 'File',
          value: 'packages/react-reconciler/src/ReactInternalTypes.js',
          iconName: 'file',
        },
        {
          label: 'Look for',
          value: 'export type Fiber',
          iconName: 'eye',
        },
        {
          label: 'Learning question',
          value:
            'From this definition alone, how many reasons can you find that a Fiber is more than a tree node?',
          iconName: 'help',
        },
      ],
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.ts',
      language: 'TypeScript',
      content: checkpointCodeEn,
      annotations: [
        { from: 2, to: 6, label: 'Identity', tone: 'emerald' },
        { from: 8, to: 12, label: 'Tree links', tone: 'sky' },
        { from: 14, to: 17, label: 'Inputs & state', tone: 'violet' },
        { from: 22, to: 24, label: 'Change flags', tone: 'amber' },
        { from: 26, to: 27, label: 'Scheduling', tone: 'teal' },
        { from: 29, to: 29, label: 'Double-tree link', tone: 'indigo' },
      ],
    },
  },
  quiz: {
    number: '06',
    eyebrow: 'Mini concept quiz',
    title: 'Mini concept quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    explanationLabel: 'Explanation',
    question: 'If a Fiber only stored parent-child relations, what would be missing?',
    answer: 'State, change flags, priority, and the alternate link would be missing.',
    explanation:
      'React needs to compare prior state, minimize change work, tune priority, and connect the current screen with the next — so a Fiber has to carry much more.',
    diagram: {
      beforeLabel: 'Plain tree node',
      afterLabel: 'Fiber node',
      beforeNodes: ['parent', 'child', 'sibling'],
      afterNodes: [
        { label: 'compare', iconName: 'refresh' },
        { label: 'flag', iconName: 'flag' },
        { label: 'priority', iconName: 'zap' },
        { label: 'alternate', iconName: 'link' },
      ],
    },
  },
  next: {
    number: '07',
    eyebrow: 'Next chapter',
    title: 'Up next',
    description:
      'Now that you have skimmed the whole Fiber structure, look at the fields that identify what a Fiber is.',
    buttonLabel: 'Next: tag / key / elementType / type',
    buttonHref: '/fiber-identity-fields',
  },
};

export const fiberNodeOverviewContent: Record<Locale, FiberNodeOverviewContent> = { ko, en };
