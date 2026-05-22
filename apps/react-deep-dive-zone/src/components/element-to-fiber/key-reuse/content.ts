import type { Locale } from '@it-tech-blog/preferences';

export type ListItem = {
  id: string;
  label: string;
  keyValue: string;
  /** 색상 토큰. A=emerald, B=sky, C=violet */
  tone: 'emerald' | 'sky' | 'violet';
};

export type ChatState = {
  label: string;
  value: string;
  /** dim 처리 (초기화 표시) */
  dim?: boolean;
};

export type SimCard = {
  id: 'key' | 'index';
  title: string;
  beforeLabel: string;
  before: { label: string; trail: string }[];
  changeLabel: string;
  afterLabel: string;
  after: { label: string; trail: string }[];
  resultLabel: string;
  results: string[];
  variant: 'safe' | 'warning';
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type KeyFiberReuseContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    beforeLabel: string;
    afterLabel: string;
    beforeItems: ListItem[];
    afterItems: ListItem[];
    centerLabel: string;
    resultTitle: string;
    resultItems: string[];
  };
  tracking: {
    badge: string;
    eyebrow: string;
    title: string;
    mainMessage: string;
    pills: string[];
  };
  stableVsChanged: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    stableTitle: string;
    stableMain: string;
    stableItems: string[];
    vsLabel: string;
    changedTitle: string;
    changedMain: string;
    changedItems: string[];
  };
  stateExample: {
    badge: string;
    eyebrow: string;
    title: string;
    code: string;
    explanation: string;
    beforeLabel: string;
    beforeKey: string;
    beforeCardTitle: string;
    beforeStates: ChatState[];
    transitionLines: string[];
    afterLabel: string;
    afterKey: string;
    afterCardTitle: string;
    afterStates: ChatState[];
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
    questionLabel: string;
    question: string;
    hintCta: string;
    hint: string;
    codeTitle: string;
    codeLines: { line: string; emphasis?: boolean }[];
    bottomNote: string;
  };
  simulation: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SimCard[];
    emphasis: string;
  };
  quiz: {
    badge: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    question: string;
    answerLabel: string;
    answer: string;
    description: string;
  };
  checklist: {
    badge: string;
    eyebrow: string;
    title: string;
    items: ChecklistItem[];
  };
  next: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
  };
};

const beforeItems: ListItem[] = [
  { id: 'a-before', label: 'A', keyValue: 'key=1', tone: 'emerald' },
  { id: 'b-before', label: 'B', keyValue: 'key=2', tone: 'sky' },
  { id: 'c-before', label: 'C', keyValue: 'key=3', tone: 'violet' },
];

const afterItems: ListItem[] = [
  { id: 'b-after', label: 'B', keyValue: 'key=2', tone: 'sky' },
  { id: 'c-after', label: 'C', keyValue: 'key=3', tone: 'violet' },
  { id: 'a-after', label: 'A', keyValue: 'key=1', tone: 'emerald' },
];

const ko: KeyFiberReuseContent = {
  hero: {
    badge: 'CHAPTER 11',
    title: {
      line1: 'key는 Fiber 재사용',
      line2: '판단과 연결됩니다.',
    },
    description:
      '같은 위치에 비슷한 Element가 있어도, key가 다르면 React는 다른 대상으로 판단할 수 있습니다.',
    beforeLabel: '재정렬 전',
    afterLabel: '재정렬 후',
    beforeItems,
    afterItems,
    centerLabel: 'key로 항목 추적',
    resultTitle: 'key가 같으면 항목을 찾아 이어갑니다.',
    resultItems: ['상태 보존 가능', '불필요한 재생성 감소'],
  },
  tracking: {
    badge: '01',
    eyebrow: '핵심 원칙',
    title: 'React는 key로 목록 항목을 추적한다',
    mainMessage:
      '삽입, 삭제, 재정렬이 일어나도 key가 있으면 각 항목을 안정적으로 추적하기 쉬워진다.',
    pills: ['목록 렌더링의 핵심', '상태 보존에 도움', '불필요한 재생성 감소', '재사용 판단의 기준'],
  },
  stableVsChanged: {
    badge: '02',
    eyebrow: '같음 vs 다름',
    title: 'key가 유지될 때 / 바뀔 때 비교',
    description: '같은 자리에서도 key 값에 따라 React가 보는 “정체성”이 달라집니다.',
    stableTitle: 'key 유지',
    stableMain: '기존 Fiber를 이어갈 가능성 증가',
    stableItems: ['항목이 같은 것으로 판단', '상태, DOM, 연결 정보 재사용 가능'],
    vsLabel: 'VS',
    changedTitle: 'key 변경',
    changedMain: '새로운 대상으로 간주될 수 있음',
    changedItems: ['다른 항목으로 판단', '새로운 Fiber가 생성될 수 있음'],
  },
  stateExample: {
    badge: '03',
    eyebrow: '상태 보존과 초기화',
    title: '상태 보존과 초기화 예시',
    code: '<Chat key={email} contact={contact} />',
    explanation:
      'email이 바뀌면 key가 바뀌고, React는 이를 다른 컴포넌트로 보아 상태를 초기화할 수 있습니다.',
    beforeLabel: '이전',
    beforeKey: 'key: a@example.com',
    beforeCardTitle: '<Chat /> 컴포넌트 상태',
    beforeStates: [
      { label: '입력 내용', value: '"안녕하세요!"' },
      { label: '스크롤 위치', value: '120px' },
    ],
    transitionLines: ['email 변경', 'key 변경'],
    afterLabel: '변경 후',
    afterKey: 'key: b@example.com',
    afterCardTitle: '<Chat /> 새로운 인스턴스',
    afterStates: [
      { label: '입력 내용', value: '-- 초기화 --', dim: true },
      { label: '스크롤 위치', value: '0px', dim: true },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: '소스 코드로 들어가기',
    title: '실제 코드 체크포인트',
    description:
      'ReactChildFiber.js의 updateSlot에서 새 child와 기존 Fiber의 key를 직접 비교합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    functionLabel: '볼 함수',
    functionName: 'updateSlot',
    questionLabel: '학습 질문',
    question: 'React는 새 child와 기존 Fiber의 key를 어디서 비교할까?',
    hintCta: '힌트 보기',
    hint: 'oldFiber.key와 newChild.key를 비교해 일치하면 updateElement로 기존 Fiber를 이어가고, 일치하지 않으면 null을 반환해 다른 처리로 넘깁니다.',
    codeTitle: 'ReactChildFiber.js',
    codeLines: [
      { line: 'function updateSlot(returnFiber, oldFiber, newChild, lanes) {' },
      { line: '  // Update the fiber if the keys match,' },
      { line: '  // otherwise return null.' },
      {
        line: '  const key = oldFiber !== null ? oldFiber.key : null;',
        emphasis: true,
      },
      { line: '' },
      { line: "  if (typeof newChild === 'object' && newChild !== null) {" },
      { line: '    if (newChild.key === key) {', emphasis: true },
      {
        line: '      return updateElement(returnFiber, oldFiber, newChild, lanes);',
        emphasis: true,
      },
      { line: '    }' },
      { line: '  }' },
      { line: '' },
      { line: '  return null;' },
      { line: '}' },
    ],
    bottomNote: 'key가 일치해야 같은 항목으로 판단하고 기존 Fiber를 재사용할 수 있습니다.',
  },
  simulation: {
    badge: '05',
    eyebrow: '시뮬레이션',
    title: '시각 시뮬레이션',
    description:
      '같은 재정렬 상황이라도 key를 쓰는지 index를 쓰는지에 따라 React의 추적 결과가 달라집니다.',
    cards: [
      {
        id: 'key',
        title: '경우 A: key 사용 (안정적 추적)',
        beforeLabel: '초기 목록',
        before: [
          { label: 'A', trail: 'key=1' },
          { label: 'B', trail: 'key=2' },
        ],
        changeLabel: '순서 변경',
        afterLabel: '변경 후',
        after: [
          { label: 'B', trail: 'key=2' },
          { label: 'A', trail: 'key=1' },
        ],
        resultLabel: '결과',
        results: ['각 항목 추적이 쉬움', '상태 보존 가능'],
        variant: 'safe',
      },
      {
        id: 'index',
        title: '경우 B: index 사용 (의도와 다른 재사용 가능성)',
        beforeLabel: '초기 목록',
        before: [
          { label: 'A', trail: 'index=0' },
          { label: 'B', trail: 'index=1' },
        ],
        changeLabel: '순서 변경',
        afterLabel: '변경 후',
        after: [
          { label: 'B', trail: 'index=0' },
          { label: 'A', trail: 'index=1' },
        ],
        resultLabel: '결과',
        results: ['의도와 다른 재사용 가능성', '상태가 엉킬 수 있음'],
        variant: 'warning',
      },
    ],
    emphasis: 'key는 항목의 ‘정체성’을 React에게 알려주는 역할을 합니다.',
  },
  quiz: {
    badge: '06',
    eyebrow: '복습',
    title: '미니 퀴즈',
    questionLabel: 'Q1',
    question: '컴포넌트 상태를 의도적으로 초기화하고 싶을 때 key를 바꾸는 전략이 가능할까?',
    answerLabel: '정답',
    answer: '가능하다.',
    description:
      'React는 key가 바뀌면 다른 컴포넌트 인스턴스로 볼 수 있어, 이전 상태를 버리고 새로운 상태로 시작할 수 있다.',
  },
  checklist: {
    badge: '07',
    eyebrow: '한 줄 요약',
    title: '빠른 체크리스트',
    items: [
      { id: 'c1', text: '목록 렌더링 시 key는 필수다' },
      { id: 'c2', text: 'key가 같으면 기존 Fiber 재사용 가능' },
      { id: 'c3', text: 'key가 다르면 새로운 Fiber 생성 가능' },
      { id: 'c4', text: '상태 보존과 초기화 모두 key로 제어할 수 있다' },
      {
        id: 'c5',
        text: 'index key는 재정렬 시 의도와 다른 결과를 만들 수 있다',
      },
    ],
  },
  next: {
    badge: '08',
    eyebrow: '다음 페이지',
    title: '다음으로 넘어가기',
    description:
      'key가 Fiber 재사용 판단과 연결된다는 점을 이해했다면, 이제 current와 workInProgress를 잇는 alternate 개념을 처음 만나봅니다.',
    primaryCta: '다음: alternate는 왜 등장하는가?',
    primaryHref: '/alternate-intro',
  },
};

const en: KeyFiberReuseContent = {
  hero: {
    badge: 'CHAPTER 11',
    title: {
      line1: 'key feeds into',
      line2: 'Fiber-reuse decisions.',
    },
    description:
      'Even with a similar Element in the same position, a different key can make React treat it as a different target.',
    beforeLabel: 'Before reorder',
    afterLabel: 'After reorder',
    beforeItems,
    afterItems,
    centerLabel: 'Track items by key',
    resultTitle: 'When the key matches, React continues with the same item.',
    resultItems: ['State can be preserved', 'Fewer unnecessary recreations'],
  },
  tracking: {
    badge: '01',
    eyebrow: 'Core principle',
    title: 'React tracks list items by key',
    mainMessage:
      'Even with insertions, deletions, or reorders, having keys makes tracking each item stable and easy.',
    pills: [
      'Core of list rendering',
      'Helps preserve state',
      'Fewer recreations',
      'Basis for reuse decisions',
    ],
  },
  stableVsChanged: {
    badge: '02',
    eyebrow: 'Same vs different',
    title: 'When key stays the same vs changes',
    description:
      'Even at the same position, React’s perceived "identity" depends on the key value.',
    stableTitle: 'key stays',
    stableMain: 'Higher chance of continuing with the existing Fiber',
    stableItems: ['Treated as the same item', 'State, DOM, and links can be reused'],
    vsLabel: 'VS',
    changedTitle: 'key changes',
    changedMain: 'Can be treated as a new target',
    changedItems: ['Treated as a different item', 'A new Fiber may be created'],
  },
  stateExample: {
    badge: '03',
    eyebrow: 'Preserve vs reset',
    title: 'State preserve / reset example',
    code: '<Chat key={email} contact={contact} />',
    explanation:
      'When email changes, the key changes — and React can treat this as a different component, resetting its state.',
    beforeLabel: 'Before',
    beforeKey: 'key: a@example.com',
    beforeCardTitle: '<Chat /> component state',
    beforeStates: [
      { label: 'Input', value: '"Hello!"' },
      { label: 'Scroll', value: '120px' },
    ],
    transitionLines: ['email changes', 'key changes'],
    afterLabel: 'After',
    afterKey: 'key: b@example.com',
    afterCardTitle: '<Chat /> brand-new instance',
    afterStates: [
      { label: 'Input', value: '-- reset --', dim: true },
      { label: 'Scroll', value: '0px', dim: true },
    ],
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'Into the source',
    title: 'Source-code checkpoint',
    description:
      "updateSlot in ReactChildFiber.js compares the new child's key against the existing Fiber's key.",
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    functionLabel: 'Function',
    functionName: 'updateSlot',
    questionLabel: 'Learning question',
    question: "Where does React compare the new child's key to the existing Fiber's key?",
    hintCta: 'Show hint',
    hint: 'Compare oldFiber.key with newChild.key. On match, updateElement reuses the existing Fiber. Otherwise return null and let later logic handle it.',
    codeTitle: 'ReactChildFiber.js',
    codeLines: [
      { line: 'function updateSlot(returnFiber, oldFiber, newChild, lanes) {' },
      { line: '  // Update the fiber if the keys match,' },
      { line: '  // otherwise return null.' },
      {
        line: '  const key = oldFiber !== null ? oldFiber.key : null;',
        emphasis: true,
      },
      { line: '' },
      { line: "  if (typeof newChild === 'object' && newChild !== null) {" },
      { line: '    if (newChild.key === key) {', emphasis: true },
      {
        line: '      return updateElement(returnFiber, oldFiber, newChild, lanes);',
        emphasis: true,
      },
      { line: '    }' },
      { line: '  }' },
      { line: '' },
      { line: '  return null;' },
      { line: '}' },
    ],
    bottomNote:
      'Keys must match for React to treat the items as the same and reuse the existing Fiber.',
  },
  simulation: {
    badge: '05',
    eyebrow: 'Simulation',
    title: 'Visual simulation',
    description: 'Same reorder, different outcome — depending on whether you use key or index.',
    cards: [
      {
        id: 'key',
        title: 'Case A: using key (stable tracking)',
        beforeLabel: 'Initial list',
        before: [
          { label: 'A', trail: 'key=1' },
          { label: 'B', trail: 'key=2' },
        ],
        changeLabel: 'Reorder',
        afterLabel: 'After',
        after: [
          { label: 'B', trail: 'key=2' },
          { label: 'A', trail: 'key=1' },
        ],
        resultLabel: 'Result',
        results: ['Easy to track each item', 'State can be preserved'],
        variant: 'safe',
      },
      {
        id: 'index',
        title: 'Case B: using index (unintended reuse)',
        beforeLabel: 'Initial list',
        before: [
          { label: 'A', trail: 'index=0' },
          { label: 'B', trail: 'index=1' },
        ],
        changeLabel: 'Reorder',
        afterLabel: 'After',
        after: [
          { label: 'B', trail: 'index=0' },
          { label: 'A', trail: 'index=1' },
        ],
        resultLabel: 'Result',
        results: ['Unintended reuse', 'State can get tangled'],
        variant: 'warning',
      },
    ],
    emphasis: "key tells React the 'identity' of each item.",
  },
  quiz: {
    badge: '06',
    eyebrow: 'Quick check',
    title: 'Mini quiz',
    questionLabel: 'Q1',
    question: 'Can you intentionally reset component state by changing its key?',
    answerLabel: 'Answer',
    answer: 'Yes — that is a real strategy.',
    description:
      'When the key changes, React can treat the result as a different component instance — discarding old state and starting fresh.',
  },
  checklist: {
    badge: '07',
    eyebrow: 'One-line recap',
    title: 'Quick checklist',
    items: [
      { id: 'c1', text: 'Keys are essential when rendering lists' },
      { id: 'c2', text: 'Same key → existing Fiber may be reused' },
      { id: 'c3', text: 'Different key → a new Fiber may be created' },
      {
        id: 'c4',
        text: 'Both preserve and reset can be controlled by key',
      },
      {
        id: 'c5',
        text: 'index keys can lead to unintended reuse on reorder',
      },
    ],
  },
  next: {
    badge: '08',
    eyebrow: 'Next page',
    title: 'Move on',
    description:
      'Now that key is clearly linked to Fiber reuse, take your first look at the alternate concept that bridges current and workInProgress.',
    primaryCta: 'Next: why does alternate appear?',
    primaryHref: '/alternate-intro',
  },
};

export const keyFiberReuseContent: Record<Locale, KeyFiberReuseContent> = {
  ko,
  en,
};
