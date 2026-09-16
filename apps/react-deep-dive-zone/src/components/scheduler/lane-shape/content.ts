import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type LaneBits = {
  id: string;
  name: string;
  bits: string;
  tone: ToneKey;
};

export type SideId = 'number' | 'bitmask';

export type Side = {
  id: SideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type LaneRow = {
  name: string;
  bits: string;
  meaning: string;
};

export type OpId = 'merge' | 'test' | 'pick';

export type BitOp = {
  id: OpId;
  title: string;
  expression: string;
  description: string;
  tone: ToneKey;
};

export type LaneShapeContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    operandLabel: string;
    operands: LaneBits[];
    resultLabel: string;
    result: LaneBits;
  };
  whyBits: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [Side, Side];
    note: string;
  };
  lanes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: LaneRow[];
    note: string;
  };
  operations: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: BitOp[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const LANE_DEFINITION_CODE = `export const TotalLanes = 31;

export const NoLanes: Lanes = 0b0000000000000000000000000000000;
export const NoLane: Lane = 0b0000000000000000000000000000000;

export const SyncLane: Lane = 0b0000000000000000000000000000010;
export const InputContinuousLane: Lane = 0b0000000000000000000000000001000;
export const DefaultLane: Lane = 0b0000000000000000000000000100000;

const TransitionLanes: Lanes = 0b0000000011111111111111110000000;
const TransitionLane1: Lane = 0b0000000000000000000000010000000;

export const IdleLane: Lane = 0b0010000000000000000000000000000;

// 가장 오른쪽에 켜진 비트 하나만 남긴다 = 가장 급한 lane
export function getHighestPriorityLane(lanes: Lanes): Lane {
  return lanes & -lanes;
}

export function includesSyncLane(lanes: Lanes): boolean {
  return (lanes & SyncLane) !== NoLanes;
}`;

const REACT_FIBER_LANE_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberLane.js';

const ko: LaneShapeContent = {
  hero: {
    badge: 'Scheduler · 3/10단계',
    title: { line1: 'Lane은 우선순위 숫자가 아니라', line2: '켜진 비트 하나다' },
    description:
      '숫자 하나로는 "지금 급한 일과 안 급한 일이 동시에 있다"를 표현할 수 없습니다. 비트마스크는 그것을 한 값에 담습니다.',
    diagramBadge: 'bitmask',
    diagramCaption: 'lanes = lane | lane',
    operandLabel: '개별 Lane',
    operands: [
      { id: 'sync', name: 'SyncLane', bits: '0000000000000000000000000000010', tone: 'emerald' },
      {
        id: 'default',
        name: 'DefaultLane',
        bits: '0000000000000000000000000100000',
        tone: 'amber',
      },
    ],
    resultLabel: 'root.pendingLanes',
    result: {
      id: 'result',
      name: 'SyncLane | DefaultLane',
      bits: '0000000000000000000000000100010',
      tone: 'violet',
    },
  },
  whyBits: {
    badge: '01',
    eyebrow: 'why bits',
    title: '숫자였다면 못 했을 일',
    description:
      '우선순위를 1, 2, 3 같은 숫자로 뒀다면 한 번에 하나만 담을 수 있습니다. 동시에 여러 종류의 할 일을 들고 있으려면 다른 표현이 필요합니다.',
    sides: [
      {
        id: 'number',
        title: '숫자 우선순위',
        badge: '하나만',
        description: '값 하나에 등급 하나. 덮어쓰면 이전 값이 사라집니다.',
        bullets: [
          '가장 급한 것 하나만 기억할 수 있다',
          '동시에 존재하는 여러 작업을 표현하지 못한다',
          '합치려면 배열 같은 별도 구조가 또 필요하다',
        ],
        tone: 'sky',
      },
      {
        id: 'bitmask',
        title: '비트마스크',
        badge: '31개까지',
        description: '비트 자리마다 작업 종류 하나. 켜짐과 꺼짐만 있습니다.',
        bullets: [
          '여러 lane을 한 정수에 동시에 담는다',
          'OR 하나로 합치고 AND 하나로 포함 여부를 본다',
          '가장 급한 것 고르기도 연산 한 번이면 끝난다',
        ],
        tone: 'amber',
      },
    ],
    note: '31개인 이유는 JavaScript 비트 연산이 32비트 정수로 동작하고, 부호 비트 한 자리를 빼야 하기 때문입니다.',
  },
  lanes: {
    badge: '02',
    eyebrow: 'lane table',
    title: '자주 만나는 Lane들',
    description:
      '오른쪽 비트일수록 급합니다. 값이 작을수록 우선순위가 높다는 뜻이라 비교가 그대로 성립합니다.',
    headers: ['Lane', '비트 위치', '언제 쓰이나'],
    rows: [
      {
        name: 'SyncLane',
        bits: '...0000010',
        meaning: '동기 처리가 필요한 가장 급한 작업. legacy 모드나 discrete 입력이 여기 옵니다.',
      },
      {
        name: 'InputContinuousLane',
        bits: '...0001000',
        meaning: '드래그나 스크롤처럼 연속으로 들어오는 입력이 만드는 업데이트입니다.',
      },
      {
        name: 'DefaultLane',
        bits: '...0100000',
        meaning: '특별한 문맥 없이 일어난 보통의 업데이트. 데이터 도착 같은 경우입니다.',
      },
      {
        name: 'TransitionLanes',
        bits: '범위 14비트',
        meaning: 'startTransition이 만드는 업데이트. 여러 전환을 구분하려고 자리를 여러 개 씁니다.',
      },
      {
        name: 'IdleLane',
        bits: '왼쪽 끝',
        meaning: '정말 여유가 있을 때만 처리할 작업. 가장 뒤로 밀립니다.',
      },
    ],
    note: 'TransitionLanes만 자리를 여러 개 차지합니다. 전환이 여러 개 겹칠 때 서로를 구분해야 하기 때문입니다.',
  },
  operations: {
    badge: '03',
    eyebrow: 'bit ops',
    title: '비트로 두니 쉬워지는 세 가지',
    description:
      'Lane을 다루는 코드는 대부분 이 세 연산 중 하나입니다. 세 줄만 읽으면 ReactFiberLane.js의 절반이 읽힙니다.',
    items: [
      {
        id: 'merge',
        title: '합치기',
        expression: 'root.pendingLanes |= lane',
        description:
          '새 업데이트가 들어오면 OR로 비트를 켭니다. 이미 켜져 있으면 아무 일도 일어나지 않습니다.',
        tone: 'indigo',
      },
      {
        id: 'test',
        title: '포함 확인',
        expression: '(lanes & SyncLane) !== NoLanes',
        description: '특정 lane이 들어 있는지 AND 한 번으로 봅니다. 배열 순회가 필요 없습니다.',
        tone: 'sky',
      },
      {
        id: 'pick',
        title: '가장 급한 것 고르기',
        expression: 'lanes & -lanes',
        description:
          '2의 보수 성질로 가장 오른쪽 켜진 비트만 남깁니다. 정렬 없이 최고 우선순위를 얻습니다.',
        tone: 'emerald',
      },
    ],
    note: '세 번째가 이 설계의 핵심입니다. 우선순위를 고르는 일이 비교 한 번으로 끝나기 때문에 렌더 시작이 항상 저렴합니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberLane.js',
    lookForLabel: '볼 것',
    lookFor: 'TotalLanes, SyncLane, TransitionLanes, getHighestPriorityLane',
    whyLabel: '설명',
    why: '상수들이 전부 0b 리터럴로 적혀 있고 비트가 한 칸씩 왼쪽으로 밀린다는 점이 우선순위 순서 그 자체입니다.',
    code: LANE_DEFINITION_CODE,
    primaryCta: 'ReactFiberLane.js 읽기',
    primaryHref: REACT_FIBER_LANE_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '내 setState는 어느 lane을 받나',
    description:
      'lane의 모양을 알았으니, 실제 업데이트에 어떤 lane이 배정되는지 그 판정 로직을 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/update-to-lane',
  },
};

const en: LaneShapeContent = {
  hero: {
    badge: 'Scheduler · 3/10',
    title: { line1: 'A Lane is not a priority number', line2: 'it is a single lit bit' },
    description:
      'One number cannot express "there is urgent work and non-urgent work at the same time". A bitmask holds both in one value.',
    diagramBadge: 'bitmask',
    diagramCaption: 'lanes = lane | lane',
    operandLabel: 'Individual lanes',
    operands: [
      { id: 'sync', name: 'SyncLane', bits: '0000000000000000000000000000010', tone: 'emerald' },
      {
        id: 'default',
        name: 'DefaultLane',
        bits: '0000000000000000000000000100000',
        tone: 'amber',
      },
    ],
    resultLabel: 'root.pendingLanes',
    result: {
      id: 'result',
      name: 'SyncLane | DefaultLane',
      bits: '0000000000000000000000000100010',
      tone: 'violet',
    },
  },
  whyBits: {
    badge: '01',
    eyebrow: 'why bits',
    title: 'What a number could not have done',
    description:
      'With priority stored as 1, 2, 3 only one grade fits at a time. Holding several kinds of pending work at once needs a different representation.',
    sides: [
      {
        id: 'number',
        title: 'A priority number',
        badge: 'one at a time',
        description: 'One value, one grade. Overwrite it and the previous value is gone.',
        bullets: [
          'Only the single most urgent item can be remembered',
          'Several simultaneous pieces of work cannot be expressed',
          'Combining them needs a separate structure such as an array',
        ],
        tone: 'sky',
      },
      {
        id: 'bitmask',
        title: 'A bitmask',
        badge: 'up to 31',
        description: 'One bit position per kind of work. Only on and off exist.',
        bullets: [
          'Many lanes fit inside one integer at once',
          'One OR merges them, one AND tests membership',
          'Picking the most urgent also takes a single operation',
        ],
        tone: 'amber',
      },
    ],
    note: 'It is 31 rather than 32 because JavaScript bitwise operations work on 32-bit integers and the sign bit has to be left out.',
  },
  lanes: {
    badge: '02',
    eyebrow: 'lane table',
    title: 'The lanes you meet most often',
    description:
      'The further right the bit, the more urgent it is. A smaller value means higher priority, so comparison works directly.',
    headers: ['Lane', 'Bit position', 'When it is used'],
    rows: [
      {
        name: 'SyncLane',
        bits: '...0000010',
        meaning: 'The most urgent, synchronous work. Legacy mode and discrete input land here.',
      },
      {
        name: 'InputContinuousLane',
        bits: '...0001000',
        meaning: 'Updates from continuous input such as dragging or scrolling.',
      },
      {
        name: 'DefaultLane',
        bits: '...0100000',
        meaning: 'Ordinary updates with no special context, such as data arriving.',
      },
      {
        name: 'TransitionLanes',
        bits: '14-bit range',
        meaning:
          'Updates from startTransition. Several slots let separate transitions be told apart.',
      },
      {
        name: 'IdleLane',
        bits: 'far left',
        meaning: 'Work to handle only when there is genuine slack. Pushed furthest back.',
      },
    ],
    note: 'Only TransitionLanes occupies multiple slots, because overlapping transitions have to be distinguished from one another.',
  },
  operations: {
    badge: '03',
    eyebrow: 'bit ops',
    title: 'Three things bits make easy',
    description:
      'Most lane-handling code is one of these three operations. Read these three lines and half of ReactFiberLane.js reads itself.',
    items: [
      {
        id: 'merge',
        title: 'Merge',
        expression: 'root.pendingLanes |= lane',
        description: 'A new update ORs its bit on. If the bit was already set, nothing changes.',
        tone: 'indigo',
      },
      {
        id: 'test',
        title: 'Test membership',
        expression: '(lanes & SyncLane) !== NoLanes',
        description: 'A single AND checks whether a lane is present. No iteration needed.',
        tone: 'sky',
      },
      {
        id: 'pick',
        title: 'Pick the most urgent',
        expression: 'lanes & -lanes',
        description:
          "Two's complement leaves only the rightmost set bit, giving the top priority without sorting.",
        tone: 'emerald',
      },
    ],
    note: 'The third one is the heart of the design. Choosing a priority costs a single comparison, so starting a render is always cheap.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberLane.js',
    lookForLabel: 'Look for',
    lookFor: 'TotalLanes, SyncLane, TransitionLanes, getHighestPriorityLane',
    whyLabel: 'Why',
    why: 'Every constant is written as a 0b literal, and the bit shifting one place left each time is the priority order itself.',
    code: LANE_DEFINITION_CODE,
    primaryCta: 'Read ReactFiberLane.js',
    primaryHref: REACT_FIBER_LANE_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Which lane does my setState get',
    description:
      'With the shape settled, next comes the logic that decides which lane an actual update is assigned.',
    cta: 'Go to the next page',
    href: '/update-to-lane',
  },
};

export const laneShapeContent: Record<Locale, LaneShapeContent> = { ko, en };
