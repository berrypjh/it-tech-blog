import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { ValueKey } from './valueTone';

export type { ToneKey, ValueKey };

export type ClassificationRow = {
  valueKey: ValueKey;
  meaning: string;
  question: string;
  location: string;
};

export type ConfusionCard = {
  number: string;
  title: string;
  body: string;
  fields: string[];
};

export type ConfusedValueCard = {
  valueKey: 'stateNode' | 'updateQueue' | 'memoizedState';
  role: string;
  misunderstanding: string;
  question: string;
};

export type GameCategoryKey =
  | 'props-snapshot'
  | 'state-snapshot'
  | 'update-storage'
  | 'host-link'
  | 'priority-info';

export type GameOption = {
  id: 'pendingProps' | 'memoizedProps' | 'updateQueue' | 'stateNode' | 'lanes';
  field: string;
  correctCategory: GameCategoryKey;
  description: string;
};

export type GameCategory = {
  key: GameCategoryKey;
  label: string;
  tone: ToneKey | 'slate';
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type ValueClassificationContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftFields: string[];
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    rightPanelTitle: string;
    rightMap: { valueKey: ValueKey; role: string }[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** "어떤 종류의 값" 부분 강조 */
    emphasize: string;
    badges: { label: string; valueKey?: ValueKey }[];
  };
  whyClassify: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ConfusionCard[];
    bannerLines: [string, string];
  };
  coreTable: {
    eyebrow: string;
    title: string;
    intro: string;
    valueLabel: string;
    meaningLabel: string;
    questionLabel: string;
    locationLabel: string;
    rows: ClassificationRow[];
  };
  elementStructure: {
    eyebrow: string;
    title: string;
    intro: string;
    code: string;
    cardTitle: string;
    points: string[];
    keySentence: string;
  };
  fiberStructure: {
    eyebrow: string;
    title: string;
    intro: string;
    code: string;
    cardTitle: string;
    points: string[];
    keySentence: string;
    fieldGroups: { label: string; fields: string[]; tone: ToneKey }[];
  };
  confusedValues: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ConfusedValueCard[];
    roleLabel: string;
    misunderstandingLabel: string;
    questionLabel: string;
  };
  game: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    options: GameOption[];
    categories: GameCategory[];
    labels: {
      selected: string;
      answer: string;
      description: string;
      categories: string;
    };
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const elementCode = `const element = {
  $$typeof: REACT_ELEMENT_TYPE,
  type,
  key,
  props,
  _owner,
};`;

const fiberCode = `this.tag = tag;
this.key = key;
this.stateNode = null;

this.child = null;
this.sibling = null;
this.return = null;

this.pendingProps = pendingProps;
this.memoizedProps = null;
this.memoizedState = null;
this.updateQueue = null;

this.flags = NoFlags;
this.lanes = NoLanes;
this.alternate = null;`;

export const valueClassificationContent: Record<Locale, ValueClassificationContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 4/10단계',
      titleLines: ['지금 보고 있는 값이 무엇인지', '먼저 분류한다'],
      accentTail: '먼저 분류한다',
      description:
        'Element인지, Fiber인지, 실제 DOM인지, 업데이트 큐인지 구분하면 코드가 훨씬 짧아집니다.',
      supporting:
        'React 내부 코드는 비슷해 보이는 필드가 많습니다. 하지만 각 값이 맡은 역할은 다릅니다. 필드 이름을 바로 해석하기 전에, 먼저 그 값이 어떤 종류의 값인지 분류해야 합니다.',
      visualTitle: '필드 이름보다 먼저 값의 역할을 분류합니다',
      leftPanelTitle: '필드 이름만 보고 해석하기',
      leftFields: [
        'pendingProps',
        'memoizedProps',
        'stateNode',
        'updateQueue',
        'memoizedState',
        'flags',
        'lanes',
        'alternate',
      ],
      leftCaption:
        '필드 이름만 보면 지금 보는 값이 props인지, state인지, update 저장소인지 헷갈리기 쉽습니다.',
      connectorLabel: 'Classify',
      connectorSub: '역할로 분류',
      rightPanelTitle: '값의 역할로 다시 보기',
      rightMap: [
        { valueKey: 'element', role: 'UI 설명 객체' },
        { valueKey: 'fiber', role: '렌더링 작업 단위' },
        { valueKey: 'stateNode', role: 'host / class 연결점' },
        { valueKey: 'updateQueue', role: '대기 중인 업데이트 저장소' },
        { valueKey: 'memoizedState', role: '계산된 상태 스냅샷' },
        { valueKey: 'flags', role: 'commit 대상 효과 표시' },
        { valueKey: 'lanes', role: '우선순위 정보' },
      ],
      rightCaption: '역할을 먼저 분류하면 각 필드가 왜 필요한지 더 빨리 보입니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: [
        'React 내부 코드의 어떤 필드를 볼 때',
        '나는 지금 {emphasize}을 보고 있는가?',
      ],
      emphasize: '어떤 종류의 값',
      badges: [
        { label: 'Element', valueKey: 'element' },
        { label: 'Fiber', valueKey: 'fiber' },
        { label: 'stateNode', valueKey: 'stateNode' },
        { label: 'updateQueue', valueKey: 'updateQueue' },
        { label: 'lanes', valueKey: 'lanes' },
      ],
    },
    whyClassify: {
      eyebrow: 'why classify first',
      title: '왜 값 분류가 중요한가?',
      intro:
        'React 내부 코드는 필드 이름만 보고 바로 의미를 확정하면 위험합니다. 같은 객체 안에서도 props, state, update storage, host link, priority info가 함께 등장하기 때문입니다.',
      cards: [
        {
          number: '01',
          title: 'props를 보고 있는데 Fiber state로 착각',
          body: 'pendingProps와 memoizedProps는 props snapshot에 가깝습니다. 이를 Hook state나 update queue처럼 읽으면 흐름이 어긋납니다.',
          fields: ['pendingProps', 'memoizedProps'],
        },
        {
          number: '02',
          title: 'stateNode를 보고 실제 DOM과 Fiber를 혼동',
          body: 'stateNode는 Fiber와 외부 인스턴스를 연결하는 지점입니다. 항상 DOM만 뜻한다고 단정하면 안 됩니다.',
          fields: ['stateNode'],
        },
        {
          number: '03',
          title: 'updateQueue를 현재 state처럼 해석',
          body: 'updateQueue는 이미 계산된 상태가 아니라 앞으로 처리해야 할 업데이트가 쌓이는 저장소입니다.',
          fields: ['updateQueue', 'memoizedState'],
        },
      ],
      bannerLines: ['필드 이름보다 먼저,', '값의 역할을 분류해야 한다.'],
    },
    coreTable: {
      eyebrow: 'core classification table',
      title: '핵심 분류표',
      intro: 'React 내부 값을 읽을 때는 먼저 이 값이 어떤 역할을 하는지 분류합니다.',
      valueLabel: '값',
      meaningLabel: '의미',
      questionLabel: '볼 때의 질문',
      locationLabel: '대표 위치',
      rows: [
        {
          valueKey: 'element',
          meaning: '무엇을 렌더링할지 설명하는 객체',
          question: '이 값은 UI를 설명하는가?',
          location: 'ReactJSXElement.js',
        },
        {
          valueKey: 'fiber',
          meaning: '렌더링을 처리하기 위한 작업 단위',
          question: '이 값은 작업 트리의 노드인가?',
          location: 'ReactFiber.js',
        },
        {
          valueKey: 'stateNode',
          meaning: 'host 또는 class 인스턴스 연결점',
          question: '이 Fiber가 외부 세계와 연결되는 지점인가?',
          location: 'FiberNode.stateNode',
        },
        {
          valueKey: 'updateQueue',
          meaning: '대기 중인 업데이트 저장소',
          question: '아직 처리할 변경 요청이 쌓여 있는가?',
          location: 'ReactFiberHooks.js / Fiber update queue',
        },
        {
          valueKey: 'memoizedState',
          meaning: '마지막으로 계산된 상태',
          question: '이전 렌더에서 계산된 상태 스냅샷인가?',
          location: 'Fiber.memoizedState / Hook.memoizedState',
        },
        {
          valueKey: 'flags',
          meaning: 'commit 해야 할 효과 표시',
          question: '나중에 commit 단계에서 처리할 표시인가?',
          location: 'Fiber.flags',
        },
        {
          valueKey: 'lanes',
          meaning: '우선순위 정보',
          question: '이 update나 Fiber가 어느 우선순위로 처리되는가?',
          location: 'Fiber.lanes / root pending lanes',
        },
      ],
    },
    elementStructure: {
      eyebrow: 'react element',
      title: 'React Element 구조',
      intro:
        'React Element는 실제 DOM도 아니고 Fiber도 아닙니다. "무엇을 렌더링할지"를 설명하는 값입니다.',
      code: elementCode,
      cardTitle: 'Element는 "무엇을 렌더링할지 설명하는 값"이다.',
      points: [
        'JSX의 결과로 만들어지는 설명 객체에 가깝습니다.',
        '실제 DOM 노드가 아닙니다.',
        '렌더링 작업 단위인 Fiber도 아닙니다.',
        'type, key, props를 통해 다음 트리를 만들 단서를 제공합니다.',
      ],
      keySentence: 'Element를 DOM으로 착각하면 React의 렌더링 과정을 바로 이해하기 어렵습니다.',
    },
    fiberStructure: {
      eyebrow: 'fiber node',
      title: 'FiberNode 구조',
      intro:
        'Fiber는 React가 렌더링 작업을 처리하기 위해 사용하는 내부 작업 단위입니다. Element보다 더 많은 실행 정보와 연결 정보를 가집니다.',
      code: fiberCode,
      cardTitle: 'Fiber는 렌더링을 처리하기 위한 작업 단위이자 자료구조다.',
      points: [
        'Element를 기반으로 만들어지는 내부 노드입니다.',
        'child / sibling / return으로 트리 구조를 이룹니다.',
        'memoizedState와 updateQueue로 상태와 업데이트 흐름을 관리합니다.',
        'flags와 lanes로 commit 대상과 우선순위를 표시합니다.',
        'alternate로 현재 트리와 작업 중인 트리를 연결합니다.',
      ],
      keySentence:
        'Fiber를 이해하려면 필드 하나하나보다 먼저 "작업 단위"라는 역할을 잡아야 합니다.',
      fieldGroups: [
        { label: 'identity', fields: ['tag', 'key', 'stateNode'], tone: 'cyan' },
        { label: 'tree', fields: ['child', 'sibling', 'return'], tone: 'violet' },
        {
          label: 'state / update',
          fields: ['memoizedState', 'updateQueue', 'pendingProps'],
          tone: 'emerald',
        },
        { label: 'effects / priority', fields: ['flags', 'lanes'], tone: 'amber' },
        { label: 'double buffering', fields: ['alternate'], tone: 'indigo' },
      ],
    },
    confusedValues: {
      eyebrow: 'often confused',
      title: '자주 헷갈리는 3가지 값',
      intro:
        'React 내부 독해에서 가장 자주 혼동되는 값은 stateNode, updateQueue, memoizedState입니다.',
      roleLabel: '역할',
      misunderstandingLabel: '오해',
      questionLabel: '읽을 때의 질문',
      cards: [
        {
          valueKey: 'stateNode',
          role: '실제 DOM 또는 클래스 인스턴스 연결점',
          misunderstanding: '항상 DOM만 의미한다고 단정하기 쉽다.',
          question: '이 Fiber가 외부 인스턴스와 어떻게 연결되는가?',
        },
        {
          valueKey: 'updateQueue',
          role: '아직 처리할 업데이트가 쌓이는 곳',
          misunderstanding: '현재 state 값 자체라고 착각하기 쉽다.',
          question: '이 큐에는 앞으로 처리할 변경 요청이 들어 있는가?',
        },
        {
          valueKey: 'memoizedState',
          role: '마지막으로 계산된 상태',
          misunderstanding: 'updateQueue와 같은 것으로 착각하기 쉽다.',
          question: '이 값은 이미 계산된 결과인가, 앞으로 처리할 요청인가?',
        },
      ],
    },
    game: {
      eyebrow: 'classification game',
      title: '분류 게임',
      intro: '아래 값을 보고 어떤 역할에 가까운지 분류해봅니다.',
      listLabel: '값 선택',
      options: [
        {
          id: 'pendingProps',
          field: 'pendingProps',
          correctCategory: 'props-snapshot',
          description: '아직 처리 중인 새 props입니다.',
        },
        {
          id: 'memoizedProps',
          field: 'memoizedProps',
          correctCategory: 'props-snapshot',
          description: '이전 렌더에서 확정된 props입니다.',
        },
        {
          id: 'updateQueue',
          field: 'updateQueue',
          correctCategory: 'update-storage',
          description: '대기 중인 업데이트가 쌓이는 저장소입니다.',
        },
        {
          id: 'stateNode',
          field: 'stateNode',
          correctCategory: 'host-link',
          description: 'Fiber와 외부 인스턴스를 연결하는 지점입니다.',
        },
        {
          id: 'lanes',
          field: 'lanes',
          correctCategory: 'priority-info',
          description: '업데이트 우선순위를 표현하는 정보입니다.',
        },
      ],
      categories: [
        { key: 'props-snapshot', label: 'Props Snapshot', tone: 'blue' },
        { key: 'state-snapshot', label: 'State Snapshot', tone: 'emerald' },
        { key: 'update-storage', label: 'Update Storage', tone: 'amber' },
        { key: 'host-link', label: 'Host Link', tone: 'cyan' },
        { key: 'priority-info', label: 'Priority Info', tone: 'indigo' },
      ],
      labels: {
        selected: '선택한 값',
        answer: '정답 카테고리',
        description: '설명',
        categories: '전체 카테고리',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, React 내부 값 하나를 실제로 분류해봅니다.',
      items: [
        'ReactElement와 FiberNode를 나란히 비교한다.',
        'stateNode가 항상 DOM만 뜻하지 않는 이유를 적는다.',
        'updateQueue와 memoizedState를 구분한다.',
        "lanes와 flags를 '상태값'이 아니라 '흐름 제어 정보'로 분류한다.",
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '값의 종류를 먼저 분류하면 흐름 해석이 쉬워진다.',
          sub: '필드 이름을 외우기 전에 역할로 묶으면 코드 흐름이 짧아진다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Element와 Fiber는 절대 같은 것이 아니다.',
          sub: 'Element는 설명 객체, Fiber는 작업 단위 — 책임이 다르다.',
          tone: 'violet',
        },
        {
          number: '03',
          text: 'React 내부 독해는 필드 이름보다 그 값의 역할을 읽는 일이다.',
          sub: 'props / state / update storage / host link / priority info로 나눠 본다.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'Render / Commit / Scheduling 중 어디에 있는지 판별한다',
      description: '값을 분류했다면, 이제 그 값이 어떤 실행 단계에서 쓰이는지 판별해야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/identify-phase',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 4/10',
      titleLines: ['Classify the value', 'in front of you first'],
      accentTail: 'in front of you first',
      description:
        'Element, Fiber, real DOM, or update queue — naming the category shrinks the code in front of you.',
      supporting:
        "React's internals are full of similarly named fields, but each value owns a different role. Before reading a field name, classify what kind of value it is.",
      visualTitle: 'Classify the role before the field name.',
      leftPanelTitle: 'Reading by field name only',
      leftFields: [
        'pendingProps',
        'memoizedProps',
        'stateNode',
        'updateQueue',
        'memoizedState',
        'flags',
        'lanes',
        'alternate',
      ],
      leftCaption:
        'Reading by field name alone makes it easy to confuse props with state or update storage.',
      connectorLabel: 'Classify',
      connectorSub: 'By role',
      rightPanelTitle: 'Re-reading by role',
      rightMap: [
        { valueKey: 'element', role: 'UI description object' },
        { valueKey: 'fiber', role: 'render work unit' },
        { valueKey: 'stateNode', role: 'host / class link' },
        { valueKey: 'updateQueue', role: 'pending updates store' },
        { valueKey: 'memoizedState', role: 'last computed state' },
        { valueKey: 'flags', role: 'commit-time effect marker' },
        { valueKey: 'lanes', role: 'priority info' },
      ],
      rightCaption: 'Once you classify the role, each field tells you why it has to exist.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'When reading a field in React internals,',
        'what {emphasize} am I looking at?',
      ],
      emphasize: 'kind of value',
      badges: [
        { label: 'Element', valueKey: 'element' },
        { label: 'Fiber', valueKey: 'fiber' },
        { label: 'stateNode', valueKey: 'stateNode' },
        { label: 'updateQueue', valueKey: 'updateQueue' },
        { label: 'lanes', valueKey: 'lanes' },
      ],
    },
    whyClassify: {
      eyebrow: 'why classify first',
      title: 'Why does classification come first?',
      intro:
        "Locking in a field's meaning by name alone is risky. In the same object you meet props, state, update storage, host links, and priority info side by side.",
      cards: [
        {
          number: '01',
          title: 'Mistaking props for Fiber state',
          body: 'pendingProps and memoizedProps are closer to props snapshots. Reading them as Hook state or an update queue throws the flow off.',
          fields: ['pendingProps', 'memoizedProps'],
        },
        {
          number: '02',
          title: 'Mistaking stateNode for the real DOM',
          body: 'stateNode is the point where a Fiber links to an external instance — not always a DOM node.',
          fields: ['stateNode'],
        },
        {
          number: '03',
          title: 'Reading updateQueue as the current state',
          body: 'updateQueue is not the computed state — it is the store of pending updates to process.',
          fields: ['updateQueue', 'memoizedState'],
        },
      ],
      bannerLines: ['Before the field name,', 'classify the role of the value.'],
    },
    coreTable: {
      eyebrow: 'core classification table',
      title: 'Core classification table',
      intro: 'Before reading any React internal value, classify what role it actually plays.',
      valueLabel: 'Value',
      meaningLabel: 'Meaning',
      questionLabel: 'Question to ask',
      locationLabel: 'Typical location',
      rows: [
        {
          valueKey: 'element',
          meaning: 'An object describing what to render',
          question: 'Is this value describing UI?',
          location: 'ReactJSXElement.js',
        },
        {
          valueKey: 'fiber',
          meaning: 'A unit of work for handling rendering',
          question: 'Is this a node in the work tree?',
          location: 'ReactFiber.js',
        },
        {
          valueKey: 'stateNode',
          meaning: 'The link to a host or class instance',
          question: 'Is this the Fiber connecting to the outside world?',
          location: 'FiberNode.stateNode',
        },
        {
          valueKey: 'updateQueue',
          meaning: 'A store of pending updates',
          question: 'Are there change requests waiting to be processed?',
          location: 'ReactFiberHooks.js / Fiber update queue',
        },
        {
          valueKey: 'memoizedState',
          meaning: 'The last computed state',
          question: 'Is this a snapshot from the previous render?',
          location: 'Fiber.memoizedState / Hook.memoizedState',
        },
        {
          valueKey: 'flags',
          meaning: 'Effects to apply at commit',
          question: 'Is this a marker for work done in the commit phase?',
          location: 'Fiber.flags',
        },
        {
          valueKey: 'lanes',
          meaning: 'Priority information',
          question: 'At what priority should this update or Fiber be handled?',
          location: 'Fiber.lanes / root pending lanes',
        },
      ],
    },
    elementStructure: {
      eyebrow: 'react element',
      title: 'React Element structure',
      intro:
        'A React Element is neither the real DOM nor a Fiber — it is a value that describes what to render.',
      code: elementCode,
      cardTitle: 'Element is a value that describes what to render.',
      points: [
        'A description object produced by JSX.',
        'Not a real DOM node.',
        'Not a Fiber — the render work unit.',
        'Provides type / key / props as clues for building the next tree.',
      ],
      keySentence: "Mistaking Element for DOM makes React's rendering pipeline harder to read.",
    },
    fiberStructure: {
      eyebrow: 'fiber node',
      title: 'FiberNode structure',
      intro:
        'A Fiber is the internal work unit React uses to handle rendering. It carries more execution and link information than an Element.',
      code: fiberCode,
      cardTitle: 'Fiber is the work unit — and the data structure — that handles rendering.',
      points: [
        'An internal node built from an Element.',
        'Forms a tree via child / sibling / return.',
        'Manages state and updates via memoizedState and updateQueue.',
        'Marks commit work and priority via flags and lanes.',
        'Connects current vs work-in-progress trees via alternate.',
      ],
      keySentence:
        'To understand a Fiber, lock in the "work unit" role before any individual field.',
      fieldGroups: [
        { label: 'identity', fields: ['tag', 'key', 'stateNode'], tone: 'cyan' },
        { label: 'tree', fields: ['child', 'sibling', 'return'], tone: 'violet' },
        {
          label: 'state / update',
          fields: ['memoizedState', 'updateQueue', 'pendingProps'],
          tone: 'emerald',
        },
        { label: 'effects / priority', fields: ['flags', 'lanes'], tone: 'amber' },
        { label: 'double buffering', fields: ['alternate'], tone: 'indigo' },
      ],
    },
    confusedValues: {
      eyebrow: 'often confused',
      title: 'Three commonly confused values',
      intro:
        'In React internals, the three most commonly confused values are stateNode, updateQueue, and memoizedState.',
      roleLabel: 'Role',
      misunderstandingLabel: 'Misunderstanding',
      questionLabel: 'Question to ask',
      cards: [
        {
          valueKey: 'stateNode',
          role: 'The link to the real DOM or a class instance.',
          misunderstanding: 'Easy to assume it always means DOM.',
          question: 'How does this Fiber connect to an external instance?',
        },
        {
          valueKey: 'updateQueue',
          role: 'Where pending updates collect.',
          misunderstanding: 'Easy to confuse with the current state value itself.',
          question: 'Does this queue hold change requests still to process?',
        },
        {
          valueKey: 'memoizedState',
          role: 'The last computed state.',
          misunderstanding: 'Easy to confuse with updateQueue.',
          question: 'Is this an already-computed result or a request to process?',
        },
      ],
    },
    game: {
      eyebrow: 'classification game',
      title: 'Classification game',
      intro: 'Look at each value and decide which role it falls under.',
      listLabel: 'Pick a value',
      options: [
        {
          id: 'pendingProps',
          field: 'pendingProps',
          correctCategory: 'props-snapshot',
          description: 'New props still being processed.',
        },
        {
          id: 'memoizedProps',
          field: 'memoizedProps',
          correctCategory: 'props-snapshot',
          description: 'Props confirmed by the previous render.',
        },
        {
          id: 'updateQueue',
          field: 'updateQueue',
          correctCategory: 'update-storage',
          description: 'Store where pending updates collect.',
        },
        {
          id: 'stateNode',
          field: 'stateNode',
          correctCategory: 'host-link',
          description: 'Link between a Fiber and an external instance.',
        },
        {
          id: 'lanes',
          field: 'lanes',
          correctCategory: 'priority-info',
          description: 'Information expressing update priority.',
        },
      ],
      categories: [
        { key: 'props-snapshot', label: 'Props Snapshot', tone: 'blue' },
        { key: 'state-snapshot', label: 'State Snapshot', tone: 'emerald' },
        { key: 'update-storage', label: 'Update Storage', tone: 'amber' },
        { key: 'host-link', label: 'Host Link', tone: 'cyan' },
        { key: 'priority-info', label: 'Priority Info', tone: 'indigo' },
      ],
      labels: {
        selected: 'Selected value',
        answer: 'Correct category',
        description: 'Description',
        categories: 'All categories',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro: 'Do not stop at reading. Classify one React internal value yourself.',
      items: [
        'Compare ReactElement and FiberNode side by side.',
        'Write why stateNode does not always mean DOM.',
        'Distinguish updateQueue from memoizedState.',
        'Classify lanes and flags as flow-control info, not state values.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Classifying the value first makes flow reading much easier.',
          sub: 'Grouping by role beats memorizing every field name.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Element and Fiber are not the same thing.',
          sub: 'Element is a description object; Fiber is a work unit — different responsibilities.',
          tone: 'violet',
        },
        {
          number: '03',
          text: "Reading React internals is reading the value's role, not its field name.",
          sub: 'Slice by props / state / update storage / host link / priority info.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Identify whether it is render, commit, or scheduling',
      description: 'Once classified, identify which execution phase the value is actually used in.',
      cta: 'Go to the next page',
      href: '/identify-phase',
    },
  },
};
