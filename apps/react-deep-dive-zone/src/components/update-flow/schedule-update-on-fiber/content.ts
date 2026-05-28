import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FunctionFlowVariant = 'outline' | 'soft' | 'mint' | 'dark';

export type FunctionFlowStep = {
  id: 'dispatch' | 'enqueue' | 'rootReturn' | 'schedule';
  title: string;
  body: string;
  variant: FunctionFlowVariant;
};

export type ResponsibilityIconName = 'flag' | 'user' | 'repeat';

export type ResponsibilityCard = {
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: ResponsibilityIconName;
};

export type RootStateField = {
  key: string;
  value: string;
  emphasized?: boolean;
};

export type ScheduleUpdateOnFiberContent = {
  hero: {
    pills: { label: string; tone: 'sky' | 'slate' }[];
    title: { line1: string; line2: string; line3: string; line4: string };
    description: string;
    callout: string;
    diagram: {
      title: string;
      beforeLabel: string;
      beforeTitle: string;
      beforeState: string;
      beforeBody: string;
      afterLabel: string;
      afterTitle: string;
      afterBadge: string;
      afterState: string;
      afterBody: string;
      functionLabel: string;
    };
  };
  flow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FunctionFlowStep[];
    keyPointTitle: string;
    keyPointBody: string;
  };
  responsibilities: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ResponsibilityCard[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      functionLabel: string;
      functionName: string;
      questionLabel: string;
      question: string;
    };
    code: {
      fileName: string;
      rightLabel: string;
      content: string;
    };
    callout: { title: string; body: string; linkedLine: number };
  };
  contextCompare: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: {
      title: string;
      badge: string;
      bullets: string[];
      tone: 'teal' | 'sky';
      iconName: 'refresh' | 'mousePointer';
    };
    vsLabel: string;
    rightCard: {
      title: string;
      badge: string;
      bullets: string[];
      tone: 'teal' | 'sky';
      iconName: 'refresh' | 'mousePointer';
    };
  };
  markRoot: {
    number: string;
    eyebrow: string;
    title: string;
    description: { title: string; body: string; bullets: string[] };
    diagramTitle: string;
    beforeTitle: string;
    beforeFields: RootStateField[];
    afterTitle: string;
    afterBadge: string;
    afterFields: RootStateField[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    question: string;
    answerTitle: string;
    answerBody: string;
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

const checkpointCodeKo = `export function scheduleUpdateOnFiber(root, fiber, lane) {
  // ... 생략된 로직 ...

  markRootUpdated(root, lane);

  // ... 이후 root scheduling으로 연결 ...
}`;

const ko: ScheduleUpdateOnFiberContent = {
  hero: {
    pills: [
      { label: 'React 내부 구조 읽기 시리즈', tone: 'sky' },
      { label: 'Step 7', tone: 'slate' },
    ],
    title: {
      line1: '업데이트가 Root까지',
      line2: '올라갔다면,',
      line3: '이제 Root를 스케줄에',
      line4: '올릴 차례입니다.',
    },
    description:
      'scheduleUpdateOnFiber는 Fiber 단위의 업데이트를 Root 단위의 pending work로 바꾸는 관문입니다.',
    callout:
      '이 단계부터 React는 "이 Root에 처리할 일이 있다"는 사실을 시스템 전체에 알리기 시작합니다.',
    diagram: {
      title: 'Root 상태 변화',
      beforeLabel: '이전',
      beforeTitle: 'Root',
      beforeState: 'pendingLanes = NoLanes',
      beforeBody: '(작업 없음)',
      afterLabel: '이후',
      afterTitle: 'Root',
      afterBadge: 'PENDING WORK',
      afterState: 'pendingLanes |= lane',
      afterBody: '(작업 대기 중)',
      functionLabel: 'scheduleUpdateOnFiber(root, fiber, lane)',
    },
  },
  flow: {
    number: '01',
    eyebrow: '함수 위치',
    title: '함수 위치 전체 흐름',
    description:
      'dispatchSetStateInternal에서 시작해 Root에 pending work를 등록하는 단계까지, 이 페이지가 그림 어느 지점인지 따라갑니다.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'update 객체 생성 및 eager bailout 처리 후',
        variant: 'outline',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate',
        body: 'update를 queue 처리 경로로 등록',
        variant: 'soft',
      },
      {
        id: 'rootReturn',
        title: 'Root 반환',
        body: 'getRootForUpdatedFiber를 통해 FiberRoot 획득',
        variant: 'mint',
      },
      {
        id: 'schedule',
        title: 'scheduleUpdateOnFiber(root, fiber, lane)',
        body: 'Root를 스케줄링 흐름에 등록',
        variant: 'dark',
      },
    ],
    keyPointTitle: '핵심 포인트',
    keyPointBody: 'Fiber 단위 업데이트 → Root 단위 pending work 등록으로 전환되는 지점입니다.',
  },
  responsibilities: {
    number: '02',
    eyebrow: '함수의 책임',
    title: 'scheduleUpdateOnFiber가 하는 핵심 일',
    description:
      '이름과 달리 이 함수는 렌더링을 실행하지 않습니다. 다음 세 가지가 핵심 역할입니다.',
    cards: [
      {
        number: '1',
        title: 'Root에 pending work 표시',
        body: '해당 Root에 이 lane의 작업이 생겼음을 기록합니다.',
        tone: 'emerald',
        iconName: 'flag',
      },
      {
        number: '2',
        title: '업데이트가 발생한 실행 맥락 구분',
        body: '어떤 상황(Context)에서 업데이트가 발생했는지에 따라 처리 분기가 달라집니다.',
        tone: 'violet',
        iconName: 'user',
      },
      {
        number: '3',
        title: '이후 root scheduling으로 연결',
        body: 'Root가 실제 스케줄 목록에 오를 수 있도록 다음 단계로 이어집니다.',
        tone: 'sky',
        iconName: 'repeat',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'ReactFiberWorkLoop.js',
      functionLabel: '함수',
      functionName: 'scheduleUpdateOnFiber',
      questionLabel: '학습 질문',
      question: '이 함수는 DOM을 바꾸는가, Root에 일이 생겼다고 표시하는가?',
    },
    code: {
      fileName: 'ReactFiberWorkLoop.js',
      rightLabel: '코드 미리보기',
      content: checkpointCodeKo,
    },
    callout: {
      title: 'markRootUpdated 호출',
      body: '이 Root에 lane의 pending work가 생겼음을 기록',
      linkedLine: 4,
    },
  },
  contextCompare: {
    number: '04',
    eyebrow: '실행 맥락 구분',
    title: 'render phase update와 normal update 비교',
    description:
      '같은 함수 안에서도 업데이트가 발생한 실행 맥락에 따라 처리가 갈립니다. 두 경로를 나란히 두고 차이를 봅니다.',
    leftCard: {
      title: 'Render Phase 안에서 발생한 update',
      badge: '특별 취급',
      bullets: [
        'render 중 setState 호출 등',
        '즉시 재시도(re-render) 로직과 연결',
        'infinite loop 방지 로직 등이 적용',
      ],
      tone: 'teal',
      iconName: 'refresh',
    },
    vsLabel: 'VS',
    rightCard: {
      title: '이벤트 핸들러 등 바깥에서 발생한 update',
      badge: '일반적인 scheduling 경로',
      bullets: ['클릭/입력/네트워크 응답 등', 'Root pending work 등록', '이후 스케줄링 큐에 등록'],
      tone: 'sky',
      iconName: 'mousePointer',
    },
  },
  markRoot: {
    number: '05',
    eyebrow: 'markRootUpdated',
    title: 'markRootUpdated의 의미',
    description: {
      title: 'markRootUpdated(root, lane)',
      body: '이 Root에 해당 lane의 pending work가 생겼음을 기록',
      bullets: [
        'Root가 유지하는 lane 비트마스크에 lane을 병합',
        '이후 스케줄러가 이 정보를 보고 작업 우선순위를 결정',
      ],
    },
    diagramTitle: 'Root 객체 변화',
    beforeTitle: '이전 Root',
    beforeFields: [
      { key: 'pendingLanes', value: 'NoLanes' },
      { key: '(상태)', value: '작업 없음' },
      { key: 'suspendedLanes', value: 'NoLanes' },
      { key: 'pingedLanes', value: 'NoLanes' },
    ],
    afterTitle: '이후 Root',
    afterBadge: 'PENDING WORK ⚡',
    afterFields: [
      { key: 'pendingLanes', value: '|= lane', emphasized: true },
      { key: '(상태)', value: '작업 대기 중', emphasized: true },
      { key: 'suspendedLanes', value: '...' },
      { key: 'pingedLanes', value: '...' },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    question: 'scheduleUpdateOnFiber는 DOM을 바로 바꿀까?',
    answerTitle: '아니다.',
    answerBody: 'Root에 작업이 있다는 사실을 표시하고 다음 스케줄링 단계로 넘긴다.',
  },
  next: {
    number: '07',
    eyebrow: '다음 단계로',
    title: '다음 단계로',
    description:
      'Root가 업데이트 대기 상태로 표시되었다면, 이제 React는 그 Root를 실제 스케줄 목록에 등록해야 합니다.',
    buttonLabel: '다음: ensureRootIsScheduled',
    buttonHref: '/ensure-root-scheduled',
  },
};

const en: ScheduleUpdateOnFiberContent = {
  hero: {
    pills: [
      { label: 'Reading React internals', tone: 'sky' },
      { label: 'Step 7', tone: 'slate' },
    ],
    title: {
      line1: 'Once the update reaches',
      line2: 'the Root,',
      line3: 'the Root itself needs to be',
      line4: 'put on the schedule.',
    },
    description:
      'scheduleUpdateOnFiber is the gate that turns Fiber-level updates into Root-level pending work.',
    callout: 'From here on, React announces to the whole system that "this Root has work to do".',
    diagram: {
      title: 'Root state transition',
      beforeLabel: 'before',
      beforeTitle: 'Root',
      beforeState: 'pendingLanes = NoLanes',
      beforeBody: '(no work)',
      afterLabel: 'after',
      afterTitle: 'Root',
      afterBadge: 'PENDING WORK',
      afterState: 'pendingLanes |= lane',
      afterBody: '(work queued)',
      functionLabel: 'scheduleUpdateOnFiber(root, fiber, lane)',
    },
  },
  flow: {
    number: '01',
    eyebrow: 'Where we are',
    title: 'Where this function sits in the flow',
    description:
      'Trace from dispatchSetStateInternal through to the moment pending work is registered on the Root.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'after building the update and the eager-bailout check',
        variant: 'outline',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate',
        body: 'registers the update onto the queue-processing path',
        variant: 'soft',
      },
      {
        id: 'rootReturn',
        title: 'Return the Root',
        body: 'gets the FiberRoot via getRootForUpdatedFiber',
        variant: 'mint',
      },
      {
        id: 'schedule',
        title: 'scheduleUpdateOnFiber(root, fiber, lane)',
        body: 'registers the Root into the scheduling pipeline',
        variant: 'dark',
      },
    ],
    keyPointTitle: 'Key point',
    keyPointBody: 'This is the exact pivot from Fiber-level updates to Root-level pending work.',
  },
  responsibilities: {
    number: '02',
    eyebrow: 'Responsibilities',
    title: 'What scheduleUpdateOnFiber actually does',
    description: 'Despite the name, this function never renders. Its real job has three parts.',
    cards: [
      {
        number: '1',
        title: 'Mark pending work on the Root',
        body: 'Records that work exists on this Root for the given lane.',
        tone: 'emerald',
        iconName: 'flag',
      },
      {
        number: '2',
        title: 'Distinguish the calling context',
        body: 'The handling branches by which context (e.g. render phase vs not) the update came from.',
        tone: 'violet',
        iconName: 'user',
      },
      {
        number: '3',
        title: 'Hand off to root scheduling',
        body: 'Continues into the next step so the Root actually lands on the scheduler.',
        tone: 'sky',
        iconName: 'repeat',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: 'Source checkpoint',
    title: 'Source checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'ReactFiberWorkLoop.js',
      functionLabel: 'Function',
      functionName: 'scheduleUpdateOnFiber',
      questionLabel: 'Learning question',
      question: 'Does this function change the DOM, or just mark the Root as having work?',
    },
    code: {
      fileName: 'ReactFiberWorkLoop.js',
      rightLabel: 'preview',
      content: checkpointCodeKo,
    },
    callout: {
      title: 'markRootUpdated call',
      body: 'Marks that the Root has pending work for this lane',
      linkedLine: 4,
    },
  },
  contextCompare: {
    number: '04',
    eyebrow: 'Two contexts',
    title: 'Render-phase update vs normal update',
    description:
      'Inside the same function, the handling splits based on the execution context that produced the update.',
    leftCard: {
      title: 'Update issued during a render phase',
      badge: 'special-cased',
      bullets: [
        'e.g. setState inside render',
        'wires into the immediate re-render logic',
        'infinite-loop guards apply',
      ],
      tone: 'teal',
      iconName: 'refresh',
    },
    vsLabel: 'VS',
    rightCard: {
      title: 'Update from outside (event handlers, etc.)',
      badge: 'normal scheduling path',
      bullets: [
        'click / input / network response, etc.',
        'register pending work on the Root',
        'land on the scheduling queue',
      ],
      tone: 'sky',
      iconName: 'mousePointer',
    },
  },
  markRoot: {
    number: '05',
    eyebrow: 'markRootUpdated',
    title: 'What markRootUpdated means',
    description: {
      title: 'markRootUpdated(root, lane)',
      body: 'Marks that this Root has pending work for the given lane.',
      bullets: [
        "Merges the lane into the Root's lane bitmask",
        'The scheduler later reads this to decide work priority',
      ],
    },
    diagramTitle: 'Root object change',
    beforeTitle: 'Before',
    beforeFields: [
      { key: 'pendingLanes', value: 'NoLanes' },
      { key: '(state)', value: 'no work' },
      { key: 'suspendedLanes', value: 'NoLanes' },
      { key: 'pingedLanes', value: 'NoLanes' },
    ],
    afterTitle: 'After',
    afterBadge: 'PENDING WORK ⚡',
    afterFields: [
      { key: 'pendingLanes', value: '|= lane', emphasized: true },
      { key: '(state)', value: 'work queued', emphasized: true },
      { key: 'suspendedLanes', value: '...' },
      { key: 'pingedLanes', value: '...' },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'Mini quiz',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    question: 'Does scheduleUpdateOnFiber change the DOM right away?',
    answerTitle: 'No, it does not.',
    answerBody:
      'It only records that the Root has work, then passes control to the next scheduling step.',
  },
  next: {
    number: '07',
    eyebrow: 'Next up',
    title: 'Up next',
    description:
      'Once the Root is marked as having pending work, React needs to actually put that Root on the scheduling list.',
    buttonLabel: 'Next: ensureRootIsScheduled',
    buttonHref: '/ensure-root-scheduled',
  },
};

export const scheduleUpdateOnFiberContent: Record<Locale, ScheduleUpdateOnFiberContent> = {
  ko,
  en,
};
