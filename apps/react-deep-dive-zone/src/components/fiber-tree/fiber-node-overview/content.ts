import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

type GroupIconName = 'fingerprint' | 'network' | 'database' | 'flag' | 'zap' | 'layers';

export type HeroFieldGroup = {
  id: string;
  title: string;
  fields: string[];
  tone: ToneKey;
  iconName: GroupIconName;
};

export type ReviewStep = {
  id: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'cube' | 'wand' | 'hex';
};

export type RolePill = {
  id: string;
  fields: string;
  description: string;
  tone: ToneKey;
  iconName: GroupIconName;
};

export type FieldGroupCard = {
  id: string;
  number: string;
  title: string;
  fields: string[];
  body: string;
  tone: ToneKey;
  iconName: 'fingerprint' | 'network' | 'database' | 'flag' | 'layers';
};

export type ReasonCard = {
  id: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'tree' | 'refresh' | 'flag' | 'zap';
};

export type QuizNode = {
  label: string;
  iconName: 'refresh' | 'flag' | 'zap' | 'link';
};

export type FiberNodeOverviewContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    cardTitle: string;
    cardLabel: string;
    groups: HeroFieldGroup[];
  };
  review: {
    badge: string;
    eyebrow: string;
    title: string;
    steps: ReviewStep[];
    note: string;
  };
  preview: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    roles: RolePill[];
  };
  fieldGroups: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FieldGroupCard[];
  };
  notJustNode: {
    badge: string;
    eyebrow: string;
    title: string;
    takeaway: string[];
    reasons: ReasonCard[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookForValue: string;
    question: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryHref: string;
    primaryCta: string;
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    question: string;
    answer: string;
    explanation: string;
    beforeLabel: string;
    afterLabel: string;
    beforeNodes: string[];
    afterNodes: QuizNode[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const fiberCode = `type Fiber = {
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

const checkpointCode = `export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;

  return: Fiber | null;
  child: Fiber | null;
  sibling: Fiber | null;

  pendingProps: any;
  memoizedProps: any;
  memoizedState: any | null;
  updateQueue: UpdateQueue<any> | null;

  flags: Flags;
  subtreeFlags: Flags;
  deletions: Array<Fiber> | null;

  lanes: Lanes;
  childLanes: Lanes;

  alternate: Fiber | null;
};`;

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js';

const ko: FiberNodeOverviewContent = {
  hero: {
    badge: 'Fiber 트리 · 1/10단계',
    title: {
      line1: 'Fiber는',
      line2: 'React 렌더링의',
      line3: '기본 작업 단위입니다.',
    },
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
    badge: '01',
    eyebrow: '앞 챕터 복습',
    title: '앞 챕터 복습: Element에서 Fiber로',
    steps: [
      {
        id: 'element',
        title: 'React Element',
        body: 'JSX가 만들어내는 불변의 설명 객체',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'create',
        title: 'createFiberFromElement',
        body: 'Element의 `type`·`key`·`props`를 읽어 Fiber 생성 흐름을 시작',
        tone: 'sky',
        iconName: 'wand',
      },
      {
        id: 'fiber',
        title: 'Fiber 생성',
        body: '정체성과 Fiber tag로 분기되어 실제 Fiber 객체가 만들어짐',
        tone: 'violet',
        iconName: 'hex',
      },
    ],
    note: '이번 챕터에서는 그렇게 만들어진 Fiber 내부를 필드 단위로 해부합니다.',
  },
  preview: {
    badge: '02',
    eyebrow: '전체 구조',
    title: 'Fiber 전체 구조 미리보기',
    description: 'Fiber의 전체 필드를 한눈에 보고, 각 그룹이 어떤 역할을 맡는지 확인합니다.',
    code: fiberCode,
    roles: [
      {
        id: 'identity',
        fields: 'tag / key / elementType / type / stateNode',
        description: '이 Fiber가 어떤 대상인지 식별합니다.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        fields: 'return / child / sibling',
        description: '트리 구조에서 어디에 연결되는지 표현합니다.',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        fields: 'pendingProps / memoizedProps / memoizedState / updateQueue',
        description: '컴포넌트의 입력과 현재 상태, 업데이트 큐를 보관합니다.',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        fields: 'flags / subtreeFlags / deletions',
        description: '어떤 변경이 발생했는지, 하위 트리에 어떤 영향이 있는지 표시합니다.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        fields: 'lanes / childLanes',
        description: '작업의 우선순위 정보를 저장합니다.',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        fields: 'alternate',
        description: '현재 화면을 가진 Fiber와 다음 화면을 계산 중인 Fiber를 연결합니다.',
        tone: 'indigo',
        iconName: 'layers',
      },
    ],
  },
  fieldGroups: {
    badge: '03',
    eyebrow: '5개 영역',
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
        body: '부모·첫 자식·형제 연결로 트리 구조를 표현',
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
        body: '우선순위 정보와 현재·다음 Fiber 연결',
        tone: 'teal',
        iconName: 'layers',
      },
    ],
  },
  notJustNode: {
    badge: '04',
    eyebrow: '단순 노드가 아닌 이유',
    title: 'Fiber가 단순 노드가 아닌 이유',
    takeaway: [
      'Fiber는 무엇을 렌더링할지가 아니라,',
      '어떻게 렌더링을 진행할지를 품은 객체입니다.',
    ],
    reasons: [
      {
        id: 'tree',
        title: '트리를 연결한다',
        body: '`return`·`child`·`sibling` 포인터로 React 요소 트리를 메모리에서 효율적으로 연결합니다.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: '이전 렌더와 다음 렌더를 비교한다',
        body: '`memoizedProps`·`memoizedState`와 `alternate`로 이전 상태와 비교하며 변경 여부를 판단합니다.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: '변경 효과를 기록한다',
        body: '`flags`·`subtreeFlags`·`deletions`로 무엇이 바뀌었는지 기록해 최소한의 작업만 수행합니다.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: '작업 우선순위를 관리한다',
        body: '`lanes`·`childLanes`로 작업의 우선순위를 표현하고 중요한 작업을 먼저 처리합니다.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드에서 직접 확인',
    description: 'React 소스코드에서 Fiber 타입 정의를 열어 필드 그룹을 눈으로 확인합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactInternalTypes.js',
    lookForLabel: '볼 것',
    lookForValue: 'export type Fiber',
    question: '이 정의만 보고도 Fiber가 단순 트리 노드가 아니라는 근거를 몇 개나 찾을 수 있을까요?',
    codeHeader: 'packages/react-reconciler/src/ReactInternalTypes.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'ReactInternalTypes.js 읽기',
  },
  quiz: {
    badge: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 개념 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    explanationLabel: '해설',
    question: 'Fiber가 단순히 부모-자식 관계만 저장한다면 무엇이 부족할까요?',
    answer: '상태, 변경 표시, 우선순위, alternate 연결이 부족합니다.',
    explanation:
      'React는 이전 상태와 비교하고, 변경을 최소화하며, 우선순위를 조정하고, 현재 화면과 다음 작업을 연결하기 위해 더 많은 정보를 Fiber에 담아야 합니다.',
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
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'tag / key / elementType / type',
    description:
      'Fiber 전체 구조를 훑어봤다면, 이제 이 Fiber가 무엇인지 식별하는 필드부터 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-identity-fields',
  },
};

const en: FiberNodeOverviewContent = {
  hero: {
    badge: 'Fiber Tree · 1/10',
    title: {
      line1: 'Fiber is the',
      line2: 'fundamental unit of work',
      line3: 'in React rendering.',
    },
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
    badge: '01',
    eyebrow: 'CHAPTER RECAP',
    title: 'Recap: from Element to Fiber',
    steps: [
      {
        id: 'element',
        title: 'React Element',
        body: 'The immutable description object produced by JSX',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'create',
        title: 'createFiberFromElement',
        body: 'Reads the Element’s `type`·`key`·`props` and starts the Fiber creation flow',
        tone: 'sky',
        iconName: 'wand',
      },
      {
        id: 'fiber',
        title: 'Fiber creation',
        body: 'Identity and the Fiber tag branch out, and the real Fiber object is built',
        tone: 'violet',
        iconName: 'hex',
      },
    ],
    note: 'In this chapter we dissect that Fiber field by field.',
  },
  preview: {
    badge: '02',
    eyebrow: 'WHOLE STRUCTURE',
    title: 'The full Fiber structure at a glance',
    description: 'See every field at once, and what each group is responsible for.',
    code: fiberCode,
    roles: [
      {
        id: 'identity',
        fields: 'tag / key / elementType / type / stateNode',
        description: 'Identifies what this Fiber represents.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        fields: 'return / child / sibling',
        description: 'Expresses where the Fiber sits in the tree.',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        fields: 'pendingProps / memoizedProps / memoizedState / updateQueue',
        description: 'Holds this component’s inputs, current state, and update queue.',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        fields: 'flags / subtreeFlags / deletions',
        description: 'Records what changed and the effect on the subtree.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        fields: 'lanes / childLanes',
        description: 'Stores priority information for the work.',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'alternate',
        fields: 'alternate',
        description: 'Links the current-screen Fiber with the work-in-progress Fiber.',
        tone: 'indigo',
        iconName: 'layers',
      },
    ],
  },
  fieldGroups: {
    badge: '03',
    eyebrow: 'FIVE AREAS',
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
        body: 'Tree shape via parent, first-child, and sibling pointers',
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
    badge: '04',
    eyebrow: 'MORE THAN A NODE',
    title: 'Why a Fiber is not just a tree node',
    takeaway: ['A Fiber holds not what to render,', 'but how the rendering should be carried out.'],
    reasons: [
      {
        id: 'tree',
        title: 'Links the tree together',
        body: '`return`·`child`·`sibling` pointers connect the React element tree efficiently in memory.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: 'Compares previous vs next render',
        body: '`memoizedProps`·`memoizedState` and `alternate` let React diff the previous state against the next.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: 'Records change effects',
        body: '`flags`·`subtreeFlags`·`deletions` track what changed so React does the minimum work.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: 'Manages work priority',
        body: '`lanes`·`childLanes` encode work priority so important work runs first.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Verify it in the real source',
    description:
      'Open the Fiber type definition in the React source and see the field groups for yourself.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactInternalTypes.js',
    lookForLabel: 'Look for',
    lookForValue: 'export type Fiber',
    question:
      'From this definition alone, how many reasons can you find that a Fiber is more than a tree node?',
    codeHeader: 'packages/react-reconciler/src/ReactInternalTypes.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'Read ReactInternalTypes.js',
  },
  quiz: {
    badge: '06',
    eyebrow: 'MINI QUIZ',
    title: 'Mini concept quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    explanationLabel: 'Explanation',
    question: 'If a Fiber only stored parent-child relations, what would be missing?',
    answer: 'State, change flags, priority, and the alternate link would be missing.',
    explanation:
      'React needs to compare prior state, minimize change work, tune priority, and connect the current screen with the next — so a Fiber has to carry much more.',
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
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'tag / key / elementType / type',
    description:
      'Now that you have skimmed the whole Fiber structure, look at the fields that identify what a Fiber is.',
    cta: 'Go to the next page',
    href: '/fiber-identity-fields',
  },
};

export const fiberNodeOverviewContent: Record<Locale, FiberNodeOverviewContent> = { ko, en };
