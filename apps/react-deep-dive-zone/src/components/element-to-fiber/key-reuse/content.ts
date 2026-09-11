import type { Locale } from '@it-tech-blog/preferences';

export type ListItem = {
  id: string;
  label: string;
  keyValue: string;
  /** 색상 토큰. A=emerald, B=sky, C=violet */
  tone: 'emerald' | 'sky' | 'violet';
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
    changedTitle: string;
    changedMain: string;
    changedItems: string[];
  };
  stateExample: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    toLabel: string;
    contacts: { id: string; name: string }[];
    placeholder: string;
    guide: string;
    withoutKey: { title: string; result: string };
    withKey: { title: string; result: string };
    explanation: string;
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
    primaryCta: string;
    primaryHref: string;
    code: string;
  };
  simulation: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: { id: string; label: string }[];
    keyTitle: string;
    indexTitle: string;
    keyResult: string;
    indexResult: string;
    shuffleCta: string;
    guide: string;
    selectedLabel: string;
    emphasis: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
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
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'alternate는 왜 등장하는가?',
    description: '더블 버퍼링과 alternate 포인터가 왜 필요한지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/alternate-intro',
  },
  hero: {
    badge: 'Fiber 생성 · 7/10단계',
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
    eyebrow: 'key 유지 vs 변경',
    title: 'key가 유지될 때 / 바뀔 때 비교',
    description: '같은 자리에서도 key 값에 따라 React가 보는 “정체성”이 달라집니다.',
    stableTitle: 'key 유지',
    stableMain: '기존 Fiber를 이어갈 가능성 증가',
    stableItems: ['항목이 같은 것으로 판단', '상태, DOM, 연결 정보 재사용 가능'],
    changedTitle: 'key 변경',
    changedMain: '새로운 대상으로 간주될 수 있음',
    changedItems: ['다른 항목으로 판단', '새로운 Fiber가 생성될 수 있음'],
  },
  stateExample: {
    badge: '03',
    eyebrow: '상태 보존과 초기화',
    title: '받는 사람이 바뀌면 입력 중인 메시지는?',
    description:
      '같은 자리에 같은 <Chat>이 그려져도, key가 있느냐에 따라 입력 중이던 메시지가 남기도 하고 사라지기도 합니다.',
    code: `// key 없음 — 같은 컴포넌트로 보고 상태를 이어감
<Chat contact={contact} />

// key 있음 — 받는 사람이 바뀌면 새 컴포넌트로 시작
<Chat key={contact.id} contact={contact} />`,
    toLabel: '받는 사람',
    contacts: [
      { id: 'minsu', name: '민수' },
      { id: 'jiyoung', name: '지영' },
    ],
    placeholder: '메시지를 입력하세요',
    guide: '두 입력창에 메시지를 적은 뒤, 받는 사람을 바꿔 보세요.',
    withoutKey: {
      title: 'key 없음',
      result: '입력이 그대로 남음 — 민수에게 쓰던 메시지가 지영에게 갈 수 있어요.',
    },
    withKey: {
      title: 'key 있음',
      result: '입력이 비워짐 — 받는 사람마다 새 대화로 시작해요.',
    },
    explanation:
      'key가 바뀌면 React는 같은 자리여도 다른 컴포넌트로 보고 새 Fiber를 만들어 상태를 초기화합니다. key가 같으면 기존 Fiber와 상태를 그대로 이어갑니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    description:
      'ReactChildFiber.js의 updateSlot에서 새 child와 기존 Fiber의 key를 직접 비교합니다.',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    functionLabel: '볼 함수',
    functionName: 'updateSlot',
    primaryCta: 'ReactChildFiber.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactChildFiber.js',
    code: `function updateSlot(returnFiber, oldFiber, newChild, lanes) {
  // Update the fiber if the keys match,
  // otherwise return null.
  const key = oldFiber !== null ? oldFiber.key : null;

  if (typeof newChild === 'object' && newChild !== null) {
    if (newChild.key === key) {
      return updateElement(returnFiber, oldFiber, newChild, lanes);
    }
  }

  return null;
}`,
  },
  simulation: {
    badge: '05',
    eyebrow: '시뮬레이션',
    title: '직접 재정렬해 보기',
    description:
      '같은 리스트를 재정렬할 때 key를 쓰는 경우와 index를 쓰는 경우가 어떻게 달라지는지 직접 확인해 보세요.',
    items: [
      { id: 'p-100', label: '면 티셔츠' },
      { id: 'p-205', label: '청바지' },
      { id: 'p-311', label: '운동화' },
    ],
    keyTitle: 'key 사용',
    indexTitle: 'index 사용',
    keyResult: '체크가 항목을 따라갑니다 — 안정적으로 추적',
    indexResult: '체크가 자리에 남습니다 — 다른 항목이 선택된 것처럼 엉킴',
    shuffleCta: '순서 섞기',
    guide:
      '면 티셔츠가 선택된 상태입니다. “순서 섞기”를 눌러보세요. key는 선택을 항목에 붙여 옮기고, index는 선택을 자리에 남깁니다.',
    selectedLabel: '선택됨',
    emphasis: 'key는 항목의 ‘정체성’을 React에게 알려주는 역할을 합니다.',
  },
};

const en: KeyFiberReuseContent = {
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'why does alternate appear?',
    description: 'See why double buffering and the alternate pointer are needed.',
    cta: 'Go to the next page',
    href: '/alternate-intro',
  },
  hero: {
    badge: 'Element → Fiber · 7/10',
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
    eyebrow: 'CORE PRINCIPLE',
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
    eyebrow: 'STABLE VS CHANGED',
    title: 'When key stays the same vs changes',
    description:
      'Even at the same position, React’s perceived "identity" depends on the key value.',
    stableTitle: 'key stays',
    stableMain: 'Higher chance of continuing with the existing Fiber',
    stableItems: ['Treated as the same item', 'State, DOM, and links can be reused'],
    changedTitle: 'key changes',
    changedMain: 'Can be treated as a new target',
    changedItems: ['Treated as a different item', 'A new Fiber may be created'],
  },
  stateExample: {
    badge: '03',
    eyebrow: 'PRESERVE VS RESET',
    title: 'What happens to a draft when the recipient changes?',
    description:
      'The same <Chat> renders in the same spot, yet whether it has a key decides if the draft survives or resets.',
    code: `// No key — treated as the same component, state carries over
<Chat contact={contact} />

// With key — a new recipient starts a new component
<Chat key={contact.id} contact={contact} />`,
    toLabel: 'To',
    contacts: [
      { id: 'alex', name: 'Alex' },
      { id: 'sam', name: 'Sam' },
    ],
    placeholder: 'Type a message',
    guide: 'Type a message in both boxes, then switch the recipient.',
    withoutKey: {
      title: 'without key',
      result: 'The draft stays — a message meant for Alex could go to Sam.',
    },
    withKey: {
      title: 'with key',
      result: 'The draft clears — each recipient starts a fresh conversation.',
    },
    explanation:
      'When the key changes, React treats it as a different component even in the same spot, creating a new Fiber and resetting its state. With the same key, it keeps the existing Fiber and its state.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    description:
      "updateSlot in ReactChildFiber.js compares the new child's key against the existing Fiber's key.",
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    functionLabel: 'Function',
    functionName: 'updateSlot',
    primaryCta: 'Read ReactChildFiber.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactChildFiber.js',
    code: `function updateSlot(returnFiber, oldFiber, newChild, lanes) {
  // Update the fiber if the keys match,
  // otherwise return null.
  const key = oldFiber !== null ? oldFiber.key : null;

  if (typeof newChild === 'object' && newChild !== null) {
    if (newChild.key === key) {
      return updateElement(returnFiber, oldFiber, newChild, lanes);
    }
  }

  return null;
}`,
  },
  simulation: {
    badge: '05',
    eyebrow: 'SIMULATION',
    title: 'Reorder it yourself',
    description: 'Reorder the same list and see how using key vs index changes what React tracks.',
    items: [
      { id: 'p-100', label: 'Cotton Tee' },
      { id: 'p-205', label: 'Jeans' },
      { id: 'p-311', label: 'Sneakers' },
    ],
    keyTitle: 'using key',
    indexTitle: 'using index',
    keyResult: 'The check follows the item — stable tracking',
    indexResult: 'The check stays at the slot — a different item looks selected',
    shuffleCta: 'Shuffle order',
    guide:
      'Cotton Tee is selected. Press “Shuffle order”: key carries the selection with the item, while index leaves it at the slot.',
    selectedLabel: 'selected',
    emphasis: "key tells React the 'identity' of each item.",
  },
};

export const keyFiberReuseContent: Record<Locale, KeyFiberReuseContent> = {
  ko,
  en,
};
