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

export type FieldArea = {
  id: string;
  title: string;
  fields: string[];
  description: string;
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
    areas: FieldArea[];
  };
  notJustNode: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
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
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryHref: string;
    primaryCta: string;
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
    description:
      'Fiber의 전체 필드를 한눈에 보고, 5개 영역으로 묶어 각 영역이 어떤 역할을 맡는지 확인합니다.',
    code: fiberCode,
    areas: [
      {
        id: 'identity',
        title: '정체성',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        description: '이 Fiber가 어떤 종류이고 어떤 대상을 가리키는지 식별합니다.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        title: '트리 연결',
        fields: ['return', 'child', 'sibling'],
        description: '부모 · 첫 자식 · 형제 포인터로 트리에서 어디에 연결되는지 표현합니다.',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        title: '입력과 상태',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        description: '컴포넌트의 입력과 현재 상태, 업데이트 큐를 보관합니다.',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        title: '변경 표시',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        description: '어떤 변경이 발생했는지, 하위 트리에 어떤 영향이 있는지 기록합니다.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'sched-alt',
        title: '스케줄링과 이중 트리',
        fields: ['lanes', 'childLanes', 'alternate'],
        description:
          '작업의 우선순위를 저장하고, 현재 화면의 Fiber와 다음 화면을 계산 중인 Fiber를 연결합니다.',
        tone: 'violet',
        iconName: 'layers',
      },
    ],
  },
  notJustNode: {
    badge: '03',
    eyebrow: '단순 노드가 아닌 이유',
    title: 'Fiber가 단순 노드가 아닌 이유',
    description: 'Fiber는 무엇을 렌더링할지가 아니라, 어떻게 렌더링을 진행할지를 품은 객체입니다.',
    reasons: [
      {
        id: 'tree',
        title: '트리를 연결한다',
        body: '`return` · `child` · `sibling` 포인터로 React 요소 트리를 메모리에서 효율적으로 연결합니다.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: '이전 렌더와 다음 렌더를 비교한다',
        body: '`memoizedProps` · `memoizedState`와 `alternate`로 이전 상태와 비교하며 변경 여부를 판단합니다.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: '변경 효과를 기록한다',
        body: '`flags` · `subtreeFlags` · `deletions`로 무엇이 바뀌었는지 기록해 최소한의 작업만 수행합니다.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: '작업 우선순위를 관리한다',
        body: '`lanes` · `childLanes`로 작업의 우선순위를 표현하고 중요한 작업을 먼저 처리합니다.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드에서 직접 확인',
    description: 'React 소스코드에서 Fiber 타입 정의를 열어 필드 그룹을 눈으로 확인합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactInternalTypes.js',
    lookForLabel: '볼 것',
    lookForValue: 'export type Fiber',
    codeHeader: 'packages/react-reconciler/src/ReactInternalTypes.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'ReactInternalTypes.js 읽기',
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
    description:
      'See every field at once, grouped into five areas by what each one is responsible for.',
    code: fiberCode,
    areas: [
      {
        id: 'identity',
        title: 'Identity',
        fields: ['tag', 'key', 'elementType', 'type', 'stateNode'],
        description: 'Identifies what kind of Fiber this is and what it represents.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'tree',
        title: 'Tree links',
        fields: ['return', 'child', 'sibling'],
        description:
          'Expresses where the Fiber sits in the tree via parent, first-child, and sibling pointers.',
        tone: 'cyan',
        iconName: 'network',
      },
      {
        id: 'props-state',
        title: 'Inputs & state',
        fields: ['pendingProps', 'memoizedProps', 'memoizedState', 'updateQueue'],
        description: 'Holds this component’s inputs, current state, and update queue.',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'flags',
        title: 'Change flags',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        description: 'Records what changed and the effect on the subtree.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'sched-alt',
        title: 'Scheduling & double tree',
        fields: ['lanes', 'childLanes', 'alternate'],
        description:
          'Stores work priority, and links the current-screen Fiber with the work-in-progress Fiber.',
        tone: 'violet',
        iconName: 'layers',
      },
    ],
  },
  notJustNode: {
    badge: '03',
    eyebrow: 'MORE THAN A NODE',
    title: 'Why a Fiber is not just a tree node',
    description: 'A Fiber holds not what to render, but how the rendering should be carried out.',
    reasons: [
      {
        id: 'tree',
        title: 'Links the tree together',
        body: '`return` · `child` · `sibling` pointers connect the React element tree efficiently in memory.',
        tone: 'sky',
        iconName: 'tree',
      },
      {
        id: 'compare',
        title: 'Compares previous vs next render',
        body: '`memoizedProps` · `memoizedState` and `alternate` let React diff the previous state against the next.',
        tone: 'violet',
        iconName: 'refresh',
      },
      {
        id: 'record',
        title: 'Records change effects',
        body: '`flags` · `subtreeFlags` · `deletions` track what changed so React does the minimum work.',
        tone: 'amber',
        iconName: 'flag',
      },
      {
        id: 'priority',
        title: 'Manages work priority',
        body: '`lanes` · `childLanes` encode work priority so important work runs first.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Verify it in the real source',
    description:
      'Open the Fiber type definition in the React source and see the field groups for yourself.',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactInternalTypes.js',
    lookForLabel: 'Look for',
    lookForValue: 'export type Fiber',
    codeHeader: 'packages/react-reconciler/src/ReactInternalTypes.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'Read ReactInternalTypes.js',
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
