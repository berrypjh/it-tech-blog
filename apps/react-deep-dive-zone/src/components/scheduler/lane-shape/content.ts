import type { Locale } from '@it-tech-blog/preferences';

export type LaneAccent =
  | 'sync'
  | 'inputContinuous'
  | 'default'
  | 'transition'
  | 'retry'
  | 'offscreen';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

/**
 * Bit ranges activated by a single Lane (left-most index = bit 0 in our visual model).
 * Used by BitCellRow to render which cells are "on" with the given accent.
 */
export type LaneBitRange = { start: number; length: number; accent: LaneAccent };

export type HeroLaneCard = {
  name: string;
  bits: string;
  accent: LaneAccent;
};

export type ConceptCard = { title: string; description: string; accent: LaneAccent };

export type LaneVsLanesCard = {
  title: string;
  description: string;
  example: string;
  bits: string;
  activeIndexes: number[];
  bottom: string;
  accent: LaneAccent;
};

export type ComparePoint = string;

export type RepresentativeLaneRow = {
  name: string;
  bits: string;
  activeIndexes: number[];
  meaning: string[];
  accent: LaneAccent;
};

export type CombinationCard = {
  title: string;
  bits: string;
  activeIndexes: number[];
  description: string;
  accent: LaneAccent;
};

export type MultiLaneCard = {
  title: string;
  description: string;
  badge: string;
  accent: LaneAccent;
};

export type MissionItem = string;

export type TakeawayCard = {
  number: string;
  title: string;
  description: string;
  accent: LaneAccent;
};

export type InteractiveLane = {
  key: 'sync' | 'inputContinuous' | 'default' | 'transition' | 'retry';
  label: string;
  bitIndex: number;
  accent: LaneAccent;
};

export type LaneBitmaskContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    highlight: string;
    subtitle: string;
    laneCards: HeroLaneCard[];
    result: { title: string; bits: string; activeIndexes: number[] };
  };
  question: {
    eyebrow: string;
    question: string;
    cards: ConceptCard[];
  };
  laneVsLanes: {
    number: string;
    title: string;
    lane: LaneVsLanesCard;
    lanes: LaneVsLanesCard;
  };
  compare: {
    number: string;
    title: string;
    vsLabel: string;
    leftTitle: string;
    leftPoints: ComparePoint[];
    rightTitle: string;
    rightPoints: ComparePoint[];
  };
  representative: {
    number: string;
    title: string;
    headers: { name: string; bitmask: string; bitZero: string; meaning: string };
    rows: RepresentativeLaneRow[];
    directionLeft: string;
    directionRight: string;
  };
  combination: {
    number: string;
    title: string;
    sync: CombinationCard;
    def: CombinationCard;
    result: CombinationCard;
    corePoint: { title: string; body: string };
  };
  multi: {
    number: string;
    title: string;
    cards: MultiLaneCard[];
    root: {
      top: string;
      title: string;
      bits: string;
      activeIndexes: number[];
      ranges: LaneBitRange[];
      bottom: string;
    };
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    code: string;
    explanationTitle: string;
    explanation: string[];
    button: { label: string; href: string };
  };
  interactive: {
    number: string;
    title: string;
    helper: string;
    tip: string;
    lanes: InteractiveLane[];
    resultTitle: string;
    bitLength: number;
    legendLabel: string;
  };
  mission: {
    number: string;
    title: string;
    checklistTitle: string;
    items: MissionItem[];
    thinkTitle: string;
    thinkBody: string;
  };
  takeaways: {
    number: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_FIBER_LANE_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js';

const CODE_KO =
  'export const TotalLanes = 31;\n\n' +
  'export const NoLanes = 0b0000000000000000000000000000000;\n\n' +
  'export const SyncLane = 0b0000000000000000000000000000010;\n\n' +
  'export const InputContinuousLane = 0b0000000000000000000000000001000;';

const CODE_EN = CODE_KO;

// 31-bit canonical lane positions (rightmost bit = highest priority bit-0).
const LEN_31 = 31;

// Helper to compute active bit visual indexes from a right-aligned bit string.
const activeFromBits = (bits: string): number[] => {
  const padded = bits.padStart(LEN_31, '0');
  const out: number[] = [];
  for (let i = 0; i < padded.length; i++) {
    if (padded[i] === '1') out.push(i);
  }
  return out;
};

const ko: LaneBitmaskContent = {
  hero: {
    badge: 'Scheduler · 3/10단계',
    titleLines: ['Lane은 단순한', '우선순위 숫자가 아니라', '작업 집합이다'],
    highlight: '작업 집합이다',
    subtitle: 'React는 여러 종류의 pending work를 비트마스크로 동시에 표현합니다.',
    laneCards: [
      { name: 'SyncLane', bits: '00000010', accent: 'sync' },
      { name: 'DefaultLane', bits: '00100000', accent: 'default' },
      { name: 'TransitionLane', bits: '111000000000', accent: 'transition' },
    ],
    result: {
      title: 'Lane Bitmask (Lanes)',
      bits: '1110000000100010',
      activeIndexes: activeFromBits('1110000000100010'),
    },
  },
  question: {
    eyebrow: '질문',
    question: 'React는 왜 priority = 1, 2, 3 같은 단순 숫자 대신 Lane 비트마스크를 쓸까?',
    cards: [
      { title: '동시성 지원', description: '여러 작업을 함께 표현 가능', accent: 'sync' },
      { title: '확장성', description: '31개까지 세분화 가능', accent: 'default' },
      { title: '비교 & 병합', description: '비트 연산으로 빠른 처리', accent: 'transition' },
    ],
  },
  laneVsLanes: {
    number: '2',
    title: 'Lane과 Lanes 구분',
    lane: {
      title: 'Lane',
      description: '하나의 작업 우선순위 비트',
      example: '예: DefaultLane',
      bits: '0000000000000001000000000000000',
      activeIndexes: activeFromBits('0000000000000001000000000000000'),
      bottom: '단일 비트가 켜진 값',
      accent: 'default',
    },
    lanes: {
      title: 'Lanes',
      description: '여러 Lane을 함께 담은 비트 집합',
      example: '예: SyncLane + DefaultLane',
      bits: '0000000000000001000000000000010',
      activeIndexes: activeFromBits('0000000000000001000000000000010'),
      bottom: '여러 비트가 켜진 값 집합',
      accent: 'sync',
    },
  },
  compare: {
    number: '3',
    title: '숫자 우선순위 vs 비트마스크',
    vsLabel: 'VS',
    leftTitle: '단순 priority number',
    leftPoints: [
      '한 번에 가장 높은 우선순위 하나만 표현하기 쉬움',
      '여러 pending work가 동시에 존재할 때 표현이 어려움',
    ],
    rightTitle: 'Lane Bitmask',
    rightPoints: [
      '여러 종류의 업데이트를 하나의 값으로 동시에 표현',
      '비트 연산으로 병합, 비교, 검사 성능이 매우 좋음',
    ],
  },
  representative: {
    number: '4',
    title: '대표 Lane 시각화',
    headers: { name: 'Lane 이름', bitmask: 'Bitmask (32-bit)', bitZero: 'bit 0', meaning: '의미' },
    rows: [
      {
        name: 'SyncLane',
        bits: '0000000000000000000000000000010',
        activeIndexes: activeFromBits('0000000000000000000000000000010'),
        meaning: ['동기 작업', '가장 높은 우선순위'],
        accent: 'sync',
      },
      {
        name: 'InputContinuousLane',
        bits: '0000000000000000000000000001000',
        activeIndexes: activeFromBits('0000000000000000000000000001000'),
        meaning: ['연속 입력', '스크롤, 드래그 등'],
        accent: 'inputContinuous',
      },
      {
        name: 'DefaultLane',
        bits: '0000000000000000000000000100000',
        activeIndexes: activeFromBits('0000000000000000000000000100000'),
        meaning: ['일반 업데이트', '데이터 변경 등'],
        accent: 'default',
      },
      {
        name: 'TransitionLane (범위)',
        bits: '0000000001111111111111100000000',
        activeIndexes: activeFromBits('0000000001111111111111100000000'),
        meaning: ['전환 작업', '여러 비트 범위'],
        accent: 'transition',
      },
    ],
    directionLeft: '낮은 우선순위',
    directionRight: '높은 우선순위',
  },
  combination: {
    number: '5',
    title: 'pendingLanes 조합',
    sync: {
      title: 'SyncLane',
      bits: '00000010',
      activeIndexes: [6],
      description: '동기 작업',
      accent: 'sync',
    },
    def: {
      title: 'DefaultLane',
      bits: '00100000',
      activeIndexes: [2],
      description: '일반 업데이트',
      accent: 'default',
    },
    result: {
      title: 'pendingLanes',
      bits: '00100010',
      activeIndexes: [2, 6],
      description: '두 작업이 동시에 존재',
      accent: 'transition',
    },
    corePoint: {
      title: '핵심 포인트',
      body: '비트는 겹치지 않고 그대로 합쳐집니다. 각 비트의 존재 여부가 곧 작업의 존재 여부를 의미합니다.',
    },
  },
  multi: {
    number: '6',
    title: '왜 여러 Lane이 동시에 필요한가?',
    cards: [
      {
        title: '클릭으로 생긴 업데이트',
        description: '버튼 클릭으로 state 변경, 즉시 반영되어야 함',
        badge: 'SyncLane',
        accent: 'sync',
      },
      {
        title: 'transition 렌더',
        description: '화면 전환, 필터링 등 비동기적으로 처리',
        badge: 'TransitionLane',
        accent: 'transition',
      },
      {
        title: 'retry 렌더',
        description: 'Suspense 실패 후 재시도 렌더',
        badge: 'RetryLane',
        accent: 'retry',
      },
      {
        title: 'offscreen work',
        description: '보이지 않는 화면이나 프리렌더 작업',
        badge: 'OffscreenLane',
        accent: 'offscreen',
      },
    ],
    root: {
      top: '모든 작업이 동시에 존재할 수 있음',
      title: 'root.pendingLanes',
      bits: '1110001001000000000000000000000',
      activeIndexes: activeFromBits('1110001001000000000000000000000'),
      // For root box, color cells by lane group ranges (left-aligned indexes).
      ranges: [
        { start: 0, length: 3, accent: 'transition' }, // 111
        { start: 6, length: 1, accent: 'retry' }, // bit at index 6
        { start: 9, length: 1, accent: 'offscreen' }, // bit at index 9
      ],
      bottom: '하나의 값으로 여러 종류의 pending work를 표현',
    },
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기',
    fileLabel: 'ReactFiberLane.js',
    code: CODE_KO,
    explanationTitle: '코드 설명',
    explanation: [
      'TotalLanes: 사용 가능한 전체 Lane 개수',
      'NoLanes: 아무 작업도 없는 상태',
      'SyncLane: 가장 높은 우선순위 비트',
      'InputContinuousLane: 연속 입력 전용 비트',
    ],
    button: { label: 'GitHub에서 전체 코드 보기', href: REACT_FIBER_LANE_URL },
  },
  interactive: {
    number: '8',
    title: 'Lane 조합 인터랙션',
    helper: '여러 Lane을 선택해 pendingLanes 결과를 확인해보세요.',
    tip: '팁: 카드를 클릭하면 선택/해제됩니다.',
    // bitIndex is from the right (bit 0 = rightmost).
    lanes: [
      { key: 'sync', label: 'Sync', bitIndex: 1, accent: 'sync' },
      { key: 'inputContinuous', label: 'Input Continuous', bitIndex: 3, accent: 'inputContinuous' },
      { key: 'default', label: 'Default', bitIndex: 5, accent: 'default' },
      { key: 'transition', label: 'Transition', bitIndex: 8, accent: 'transition' },
      { key: 'retry', label: 'Retry', bitIndex: 17, accent: 'retry' },
    ],
    resultTitle: 'pendingLanes',
    bitLength: LEN_31,
    legendLabel: 'Legend',
  },
  mission: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    checklistTitle: '체크리스트',
    items: [
      'ReactFiberLane.js를 연다',
      'SyncLane과 DefaultLane 정의를 찾는다',
      'TotalLanes 값을 확인한다',
      'pendingLanes가 bitmask일 때 장점을 적는다',
    ],
    thinkTitle: '생각해 보기',
    thinkBody:
      '여러 작업이 동시에 존재할 때, 단순 숫자 방식과 비트마스크 방식의 차이점을 비교해보세요. 어떤 상황에서 더 유리할까요?',
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        title: 'Lane은 React 내부 작업 분류 단위다.',
        description: '각 Lane은 특정 성격의 작업을 나타내는 단일 비트입니다.',
        accent: 'sync',
      },
      {
        number: '02',
        title: 'Lanes는 여러 Lane을 함께 담는다.',
        description: '여러 비트가 켜진 값으로, 여러 작업이 동시에 존재함을 표현합니다.',
        accent: 'default',
      },
      {
        number: '03',
        title: '비트마스크는 동시에 존재하는 pending work를 표현하기 좋다.',
        description: '비트 연산을 통해 병합, 비교, 검사까지 효율적으로 처리할 수 있습니다.',
        accent: 'transition',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '다음: 업데이트는 어떤 Lane을 받을까?',
    description: 'Lane 개념을 이해했다면, 이제 업데이트가 어떤 Lane을 받는지 알아볼까요?',
    cta: '다음 페이지로 이동',
    href: '/update-to-lane',
  },
};

const en: LaneBitmaskContent = {
  hero: {
    badge: 'Scheduler · 3/10',
    titleLines: ['A Lane is not just', 'a priority number —', 'it is a work set'],
    highlight: 'it is a work set',
    subtitle: 'React represents many kinds of pending work simultaneously as one bitmask.',
    laneCards: [
      { name: 'SyncLane', bits: '00000010', accent: 'sync' },
      { name: 'DefaultLane', bits: '00100000', accent: 'default' },
      { name: 'TransitionLane', bits: '111000000000', accent: 'transition' },
    ],
    result: {
      title: 'Lane Bitmask (Lanes)',
      bits: '1110000000100010',
      activeIndexes: activeFromBits('1110000000100010'),
    },
  },
  question: {
    eyebrow: 'Question',
    question:
      "Why doesn't React use plain priority = 1, 2, 3 and instead reach for a Lane bitmask?",
    cards: [
      { title: 'Concurrency', description: 'Represent multiple works at once', accent: 'sync' },
      { title: 'Scalability', description: 'Up to 31 distinct lanes', accent: 'default' },
      { title: 'Compare & merge', description: 'Fast bitwise operations', accent: 'transition' },
    ],
  },
  laneVsLanes: {
    number: '2',
    title: 'Lane vs Lanes',
    lane: {
      title: 'Lane',
      description: 'A single priority bit',
      example: 'e.g. DefaultLane',
      bits: '0000000000000001000000000000000',
      activeIndexes: activeFromBits('0000000000000001000000000000000'),
      bottom: 'A value where one bit is on',
      accent: 'default',
    },
    lanes: {
      title: 'Lanes',
      description: 'A set of bits — many Lanes carried together',
      example: 'e.g. SyncLane + DefaultLane',
      bits: '0000000000000001000000000000010',
      activeIndexes: activeFromBits('0000000000000001000000000000010'),
      bottom: 'A value where several bits are on',
      accent: 'sync',
    },
  },
  compare: {
    number: '3',
    title: 'Priority number vs Bitmask',
    vsLabel: 'VS',
    leftTitle: 'Plain priority number',
    leftPoints: [
      'Easy to express only one highest priority at a time',
      'Hard to represent several pending works at once',
    ],
    rightTitle: 'Lane Bitmask',
    rightPoints: [
      'Express many kinds of updates as one value',
      'Bitwise merge / compare / inspect is extremely fast',
    ],
  },
  representative: {
    number: '4',
    title: 'Representative Lane visualization',
    headers: {
      name: 'Lane name',
      bitmask: 'Bitmask (32-bit)',
      bitZero: 'bit 0',
      meaning: 'Meaning',
    },
    rows: [
      {
        name: 'SyncLane',
        bits: '0000000000000000000000000000010',
        activeIndexes: activeFromBits('0000000000000000000000000000010'),
        meaning: ['Synchronous work', 'Highest priority'],
        accent: 'sync',
      },
      {
        name: 'InputContinuousLane',
        bits: '0000000000000000000000000001000',
        activeIndexes: activeFromBits('0000000000000000000000000001000'),
        meaning: ['Continuous input', 'Scroll, drag, etc.'],
        accent: 'inputContinuous',
      },
      {
        name: 'DefaultLane',
        bits: '0000000000000000000000000100000',
        activeIndexes: activeFromBits('0000000000000000000000000100000'),
        meaning: ['General updates', 'Data changes, etc.'],
        accent: 'default',
      },
      {
        name: 'TransitionLane (range)',
        bits: '0000000001111111111111100000000',
        activeIndexes: activeFromBits('0000000001111111111111100000000'),
        meaning: ['Transition work', 'Spans a range of bits'],
        accent: 'transition',
      },
    ],
    directionLeft: 'Lower priority',
    directionRight: 'Higher priority',
  },
  combination: {
    number: '5',
    title: 'pendingLanes combination',
    sync: {
      title: 'SyncLane',
      bits: '00000010',
      activeIndexes: [6],
      description: 'Synchronous work',
      accent: 'sync',
    },
    def: {
      title: 'DefaultLane',
      bits: '00100000',
      activeIndexes: [2],
      description: 'General update',
      accent: 'default',
    },
    result: {
      title: 'pendingLanes',
      bits: '00100010',
      activeIndexes: [2, 6],
      description: 'Both works coexist',
      accent: 'transition',
    },
    corePoint: {
      title: 'Key insight',
      body: 'Bits do not overlap — they merge as-is. Each bit being on directly means that work exists.',
    },
  },
  multi: {
    number: '6',
    title: 'Why do we need several Lanes at once?',
    cards: [
      {
        title: 'Click-triggered update',
        description: 'A click changes state — must be reflected instantly',
        badge: 'SyncLane',
        accent: 'sync',
      },
      {
        title: 'transition render',
        description: 'Screen transitions, filtering — processed asynchronously',
        badge: 'TransitionLane',
        accent: 'transition',
      },
      {
        title: 'retry render',
        description: 'A retry after a Suspense failure',
        badge: 'RetryLane',
        accent: 'retry',
      },
      {
        title: 'offscreen work',
        description: 'Hidden screens or pre-render work',
        badge: 'OffscreenLane',
        accent: 'offscreen',
      },
    ],
    root: {
      top: 'All of these works can coexist',
      title: 'root.pendingLanes',
      bits: '1110001001000000000000000000000',
      activeIndexes: activeFromBits('1110001001000000000000000000000'),
      ranges: [
        { start: 0, length: 3, accent: 'transition' },
        { start: 6, length: 1, accent: 'retry' },
        { start: 9, length: 1, accent: 'offscreen' },
      ],
      bottom: 'One value can express many kinds of pending work',
    },
  },
  code: {
    number: '7',
    title: 'Source code preview',
    fileLabel: 'ReactFiberLane.js',
    code: CODE_EN,
    explanationTitle: 'Code explanation',
    explanation: [
      'TotalLanes: total number of available Lanes',
      'NoLanes: a state with no work at all',
      'SyncLane: the highest-priority bit',
      'InputContinuousLane: dedicated bit for continuous input',
    ],
    button: { label: 'See the full code on GitHub', href: REACT_FIBER_LANE_URL },
  },
  interactive: {
    number: '8',
    title: 'Lane combination playground',
    helper: 'Toggle several Lanes to see the pendingLanes result update.',
    tip: 'Tip: click a card to select / deselect it.',
    lanes: [
      { key: 'sync', label: 'Sync', bitIndex: 1, accent: 'sync' },
      { key: 'inputContinuous', label: 'Input Continuous', bitIndex: 3, accent: 'inputContinuous' },
      { key: 'default', label: 'Default', bitIndex: 5, accent: 'default' },
      { key: 'transition', label: 'Transition', bitIndex: 8, accent: 'transition' },
      { key: 'retry', label: 'Retry', bitIndex: 17, accent: 'retry' },
    ],
    resultTitle: 'pendingLanes',
    bitLength: LEN_31,
    legendLabel: 'Legend',
  },
  mission: {
    number: '9',
    title: 'Walk it in the source',
    checklistTitle: 'Checklist',
    items: [
      'Open ReactFiberLane.js',
      'Find the SyncLane and DefaultLane definitions',
      'Check the TotalLanes value',
      'Write down why pendingLanes as a bitmask is an advantage',
    ],
    thinkTitle: 'Think it through',
    thinkBody:
      'When many works coexist, compare the plain-number vs bitmask approaches. In which situations does each one shine?',
  },
  takeaways: {
    number: '10',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        title: 'A Lane is the internal classification unit for React work.',
        description: 'Each Lane is a single bit representing a particular kind of work.',
        accent: 'sync',
      },
      {
        number: '02',
        title: 'Lanes carry several Lane bits together.',
        description: 'A value with several bits on expresses that many works coexist.',
        accent: 'default',
      },
      {
        number: '03',
        title: 'Bitmasks are great for representing coexisting pending work.',
        description: 'Bitwise ops give us efficient merge, compare, and inspect.',
        accent: 'transition',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Next: Which Lane does an update get?',
    description:
      "Now that you understand the Lane concept, let's see what Lane an update actually gets.",
    cta: 'Go to the next page',
    href: '/update-to-lane',
  },
};

export const laneBitmaskContent: Record<Locale, LaneBitmaskContent> = { ko, en };
