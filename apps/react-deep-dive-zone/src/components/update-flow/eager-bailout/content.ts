import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SameStateExample = {
  fileName: string;
  code: string;
  comment: string;
  tone: ToneKey;
};

export type BailoutStepIconName = 'circleDotDashed' | 'settings' | 'scale' | 'checkCircle' | 'ban';

export type BailoutStep = {
  number: string;
  title: string;
  detail: string;
  tone: ToneKey;
  iconName: BailoutStepIconName;
  emphasized?: boolean;
};

export type QueueCompareIconName = 'checkCircle' | 'alertTriangle';

export type QueueCompareCard = {
  title: string;
  state: string;
  body: string;
  pillLabel: string;
  tone: 'emerald' | 'rose';
  iconName: QueueCompareIconName;
};

export type ScheduleRow = {
  label: string;
  updateValue: string;
  scheduleValue: string;
  mono?: boolean;
};

export type EagerBailoutContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      currentTitle: string;
      currentValue: string;
      compareSymbol: string;
      eagerTitle: string;
      eagerSubtitle: string;
      eagerValue: string;
      question: string;
      leftBranch: string;
      leftResultTitle: string;
      leftResultBody: string;
      rightBranch: string;
      rightResultTitle: string;
      rightResultBody: string;
    };
  };
  sameStateExamples: {
    number: string;
    eyebrow: string;
    title: string;
    examples: SameStateExample[];
    explanation: { title: string; body: string };
  };
  flow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: BailoutStep[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      focusLabel: string;
      focusText: string;
      questionLabel: string;
      question: string;
    };
    code: {
      fileName: string;
      rightLabel: string;
      content: string;
      highlightFromLine: number;
      highlightToLine: number;
    };
    callout: { line1: string; line2: string };
  };
  queueReason: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: QueueCompareCard;
    rightCard: QueueCompareCard;
  };
  scheduleTable: {
    number: string;
    eyebrow: string;
    title: string;
    headers: { label: string; update: string; schedule: string };
    rows: ScheduleRow[];
    bottomNote: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCodeKo = `const eagerState =
  lastRenderedReducer(currentState, action);

update.hasEagerState = true;
update.eagerState = eagerState;

if (is(eagerState, currentState)) {
  // 같은 상태라면 렌더 예약을 생략할 수 있다.
  enqueueConcurrentHookUpdateAndEagerlyBailout(...);

  return false;
}`;

const ko: EagerBailoutContent = {
  hero: {
    badge: '업데이트 시작 · 5/10단계',
    title: {
      line1: '업데이트 요청이 있어도',
      line2: '항상 렌더링이 시작되는',
      line3: '것은 아닙니다.',
    },
    description:
      'React는 일부 경우 다음 상태를 미리 계산해보고, 이전 상태와 같다면 불필요한 렌더링 예약을 건너뜁니다.',
    diagram: {
      currentTitle: '현재 state',
      currentValue: 'count = 10',
      compareSymbol: '==',
      eagerTitle: 'eagerState',
      eagerSubtitle: '다음 상태',
      eagerValue: 'count = 10',
      question: '같을까?',
      leftBranch: '같다',
      leftResultTitle: 'eager bailout!',
      leftResultBody: '렌더 예약 생략',
      rightBranch: '다르다',
      rightResultTitle: '렌더 예약 진행',
      rightResultBody: 'Render Phase로 이동',
    },
  },
  sameStateExamples: {
    number: '01',
    eyebrow: '같은 상태 예시',
    title: '같은 상태 업데이트 예시',
    examples: [
      {
        fileName: 'value.js',
        code: 'setCount(count);',
        comment: '// 현재 count 값 그대로 전달',
        tone: 'emerald',
      },
      {
        fileName: 'updater.js',
        code: 'setCount((prev) => prev);',
        comment: '// 이전 값 그대로 반환하는 updater',
        tone: 'sky',
      },
    ],
    explanation: {
      title: '같은 상태라면 빠른 탈출',
      body: '결과 상태가 현재 상태와 같다면 React는 빠른 탈출을 시도할 수 있습니다.',
    },
  },
  flow: {
    number: '02',
    eyebrow: '전체 흐름',
    title: 'eager bailout 전체 흐름',
    description:
      'eager bailout이 동작하려면 다음 5단계가 차례로 만족되어야 합니다. 어느 단계든 조건을 벗어나면 일반적인 렌더 예약 경로로 돌아갑니다.',
    steps: [
      {
        number: '1',
        title: 'queue가 비어 있음',
        detail: 'pending = null',
        tone: 'sky',
        iconName: 'circleDotDashed',
      },
      {
        number: '2',
        title: 'eagerState 계산 가능',
        detail: '다음 상태를 미리 계산',
        tone: 'cyan',
        iconName: 'settings',
      },
      {
        number: '3',
        title: 'currentState와 비교',
        detail: 'eagerState === currentState ?',
        tone: 'violet',
        iconName: 'scale',
      },
      {
        number: '4',
        title: '같다면 bailout',
        detail: '빠른 탈출',
        tone: 'emerald',
        iconName: 'checkCircle',
        emphasized: true,
      },
      {
        number: '5',
        title: '렌더 예약 생략',
        detail: '스케줄링 생략',
        tone: 'indigo',
        iconName: 'ban',
        emphasized: true,
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'ReactFiberHooks.js',
      focusLabel: '볼 것',
      focusText: 'dispatchSetStateInternal 내부의 eagerState 계산',
      questionLabel: '학습 질문',
      question: 'React는 어떤 조건에서 렌더 예약을 생략할 수 있을까?',
    },
    code: {
      fileName: 'ReactFiberHooks.js',
      rightLabel: '코드 미리보기',
      content: checkpointCodeKo,
      highlightFromLine: 7,
      highlightToLine: 7,
    },
    callout: { line1: '비교 조건이 핵심!', line2: 'is: Object.is' },
  },
  queueReason: {
    number: '04',
    eyebrow: '전제 조건',
    title: 'queue가 비어 있어야 하는 이유',
    description:
      'eager bailout이 안전하게 동작하려면 큐가 비어 있어야 합니다. 대기 중인 update가 있으면 그 결과까지 합쳐야 정확한 다음 상태가 나오기 때문입니다.',
    leftCard: {
      title: 'queue가 비어 있는 경우',
      state: 'pending = null',
      body: '현재 state만으로 다음 state를 정확하게 계산할 수 있어요.',
      pillLabel: 'empty',
      tone: 'emerald',
      iconName: 'checkCircle',
    },
    rightCard: {
      title: 'queue에 대기 중인 update가 있는 경우',
      state: 'pending = U1 → U2 → U3',
      body: '이미 존재하는 update들의 순서와 결과를 고려해야 하므로 현재 state만으로 다음 state를 확정하기 어렵습니다.',
      pillLabel: 'pending',
      tone: 'rose',
      iconName: 'alertTriangle',
    },
  },
  scheduleTable: {
    number: '05',
    eyebrow: '두 개념 분리',
    title: 'update 객체 생성과 렌더 예약은 다르다',
    headers: { label: '구분', update: 'update 객체 생성', schedule: '렌더 예약' },
    rows: [
      {
        label: '의미',
        updateValue: '상태 변경 요청을 표현하는 자료구조가 만들어짐',
        scheduleValue: '이후 Render Phase를 실행할 필요가 있다고 판단됨',
      },
      {
        label: '언제 일어남',
        updateValue: 'dispatchSetStateInternal 내부에서 생성',
        scheduleValue: 'eager bailout 실패 시 또는 queue 조건 등으로 필요할 때',
      },
      {
        label: '결과',
        updateValue: 'update가 queue에 연결될 수 있음',
        scheduleValue: 'Root에 작업이 등록되고 스케줄링이 시작됨',
      },
      {
        label: '예시',
        updateValue: 'const update = { lane, action, ... }',
        scheduleValue: 'scheduleUpdateOnFiber(...)',
        mono: true,
      },
    ],
    bottomNote: 'update가 만들어졌다고 해서 항상 렌더가 예약되는 것은 아니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'enqueueConcurrentHookUpdate',
    description: '렌더가 필요하다고 판단되면, 이제 update 객체는 queue 처리 경로로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/enqueue-concurrent-hook-update',
  },
};

const en: EagerBailoutContent = {
  hero: {
    badge: 'Update Flow · 5/10',
    title: {
      line1: 'An update request does not',
      line2: 'always trigger a render',
      line3: 'in React.',
    },
    description:
      'React sometimes pre-computes the next state. If it equals the current state, React skips scheduling a render entirely.',
    diagram: {
      currentTitle: 'current state',
      currentValue: 'count = 10',
      compareSymbol: '==',
      eagerTitle: 'eagerState',
      eagerSubtitle: 'next state',
      eagerValue: 'count = 10',
      question: 'equal?',
      leftBranch: 'equal',
      leftResultTitle: 'eager bailout!',
      leftResultBody: 'skip scheduling',
      rightBranch: 'different',
      rightResultTitle: 'schedule a render',
      rightResultBody: 'move to Render Phase',
    },
  },
  sameStateExamples: {
    number: '01',
    eyebrow: 'Same-state examples',
    title: 'Same-state update examples',
    examples: [
      {
        fileName: 'value.js',
        code: 'setCount(count);',
        comment: '// pass the current count unchanged',
        tone: 'emerald',
      },
      {
        fileName: 'updater.js',
        code: 'setCount((prev) => prev);',
        comment: '// updater that returns the previous value',
        tone: 'sky',
      },
    ],
    explanation: {
      title: 'Same state? React may bail out',
      body: 'If the next state equals the current one, React may take the fast exit.',
    },
  },
  flow: {
    number: '02',
    eyebrow: 'Full flow',
    title: 'eager bailout — the full flow',
    description:
      'All five conditions below must hold in order for an eager bailout. Failing any of them means React falls back to the regular render-scheduling path.',
    steps: [
      {
        number: '1',
        title: 'queue is empty',
        detail: 'pending = null',
        tone: 'sky',
        iconName: 'circleDotDashed',
      },
      {
        number: '2',
        title: 'eagerState is computable',
        detail: 'pre-compute the next state',
        tone: 'cyan',
        iconName: 'settings',
      },
      {
        number: '3',
        title: 'Compare with currentState',
        detail: 'eagerState === currentState ?',
        tone: 'violet',
        iconName: 'scale',
      },
      {
        number: '4',
        title: 'Equal → bail out',
        detail: 'fast exit',
        tone: 'emerald',
        iconName: 'checkCircle',
        emphasized: true,
      },
      {
        number: '5',
        title: 'Skip scheduling',
        detail: 'no render scheduled',
        tone: 'indigo',
        iconName: 'ban',
        emphasized: true,
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: 'Source checkpoint',
    title: 'Source checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'ReactFiberHooks.js',
      focusLabel: 'Focus',
      focusText: 'eagerState computation inside dispatchSetStateInternal',
      questionLabel: 'Learning question',
      question: 'When can React skip scheduling a render?',
    },
    code: {
      fileName: 'ReactFiberHooks.js',
      rightLabel: 'preview',
      content: checkpointCodeKo,
      highlightFromLine: 7,
      highlightToLine: 7,
    },
    callout: { line1: 'The comparison is the key.', line2: 'is: Object.is' },
  },
  queueReason: {
    number: '04',
    eyebrow: 'Pre-condition',
    title: 'Why the queue must be empty',
    description:
      'For the bailout to be safe, the queue must be empty. With pending updates, the next state depends on their results too.',
    leftCard: {
      title: 'queue is empty',
      state: 'pending = null',
      body: 'The next state can be computed accurately from the current state alone.',
      pillLabel: 'empty',
      tone: 'emerald',
      iconName: 'checkCircle',
    },
    rightCard: {
      title: 'queue has pending updates',
      state: 'pending = U1 → U2 → U3',
      body: 'The next state depends on the existing updates and their order — you cannot decide from the current state alone.',
      pillLabel: 'pending',
      tone: 'rose',
      iconName: 'alertTriangle',
    },
  },
  scheduleTable: {
    number: '05',
    eyebrow: 'Two distinct steps',
    title: 'Creating an update ≠ scheduling a render',
    headers: { label: 'Topic', update: 'update object created', schedule: 'render scheduled' },
    rows: [
      {
        label: 'Meaning',
        updateValue: 'A data structure representing the state-change request is built',
        scheduleValue: 'React decides the Render Phase needs to run later',
      },
      {
        label: 'When',
        updateValue: 'Inside dispatchSetStateInternal',
        scheduleValue: 'When eager bailout fails, or when queue conditions require it',
      },
      {
        label: 'Result',
        updateValue: 'The update can be linked into the queue',
        scheduleValue: 'Work is registered on Root and scheduling kicks in',
      },
      {
        label: 'Example',
        updateValue: 'const update = { lane, action, ... }',
        scheduleValue: 'scheduleUpdateOnFiber(...)',
        mono: true,
      },
    ],
    bottomNote: 'Building an update does not always schedule a render.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'enqueueConcurrentHookUpdate',
    description:
      'When a render really is needed, the update object travels into the queue-processing path next.',
    cta: 'Go to the next page',
    href: '/enqueue-concurrent-hook-update',
  },
};

export const eagerBailoutContent: Record<Locale, EagerBailoutContent> = { ko, en };
