import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FourElementIconName = 'squareDashed' | 'database' | 'fileText' | 'flag';

export type FourElement = {
  id: 'fiber' | 'queue' | 'update' | 'lane';
  title: string;
  question: string;
  body: string;
  tone: ToneKey;
  iconName: FourElementIconName;
};

export type FunctionFlowStep = {
  id: 'dispatch' | 'enqueue' | 'enqueueUpdate' | 'getRoot';
  title: string;
  body: string;
  variant: 'outline' | 'dark' | 'mint' | 'mintBlue';
};

export type EnqueueMeaningStepIconName =
  | 'squareDashed'
  | 'database'
  | 'fileText'
  | 'flag'
  | 'settings';

export type EnqueueMeaningStep = {
  label: string;
  tone: ToneKey;
  iconName: EnqueueMeaningStepIconName;
};

export type EnqueueConcurrentHookUpdateContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    elements: FourElement[];
    functionCard: { code: string; caption: string };
  };
  flow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FunctionFlowStep[];
  };
  elements: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: FourElement[];
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
    callouts: {
      number: string;
      title: string;
      body: string;
      tone: 'mint' | 'sky';
      linkedLine: number;
    }[];
  };
  meaning: {
    number: string;
    eyebrow: string;
    title: string;
    descriptionTitle: string;
    descriptionBody: string;
    flow: EnqueueMeaningStep[];
    finalLabel: string;
    finalBody: string;
  };
  rootReason: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftNode: { title: string; body: string };
    middleLabel: { line1: string; line2: string };
    rightNode: { title: string; body: string };
    bottomMessage: string;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCodeKo = `export function enqueueConcurrentHookUpdate(
  fiber,
  queue,
  update,
  lane,
): FiberRoot | null {
  enqueueUpdate(
    fiber,
    queue,
    update,
    lane,
  );

  return getRootForUpdatedFiber(fiber);
}`;

const ko: EnqueueConcurrentHookUpdateContent = {
  hero: {
    badge: '업데이트 시작 · 6/10단계',
    title: {
      line1: '렌더가 필요하다고',
      line2: '판단되면, React는 update를',
      line3: 'queue 처리 경로로 넘깁니다.',
    },
    description:
      '이 단계에서 fiber, queue, update, lane이 함께 묶이고, React는 이 업데이트가 속한 Root까지 찾아냅니다.',
    elements: [
      {
        id: 'fiber',
        title: 'fiber',
        question: '어느 컴포넌트의 업데이트인가?',
        body: '업데이트가 발생한 Fiber',
        tone: 'sky',
        iconName: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: '어느 Hook queue에 들어가야 하는가?',
        body: 'Hook의 UpdateQueue',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: '실제 변경 요청 데이터',
        body: 'action, eagerState 등',
        tone: 'violet',
        iconName: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: '어떤 우선순위의 작업인가?',
        body: '업데이트의 우선순위 Lane',
        tone: 'amber',
        iconName: 'flag',
      },
    ],
    functionCard: {
      code: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane);',
      caption: '4요소가 함께 묶여 호출되는 진입점',
    },
  },
  flow: {
    number: '01',
    eyebrow: '전체 흐름',
    title: '전체 함수 흐름',
    description:
      'dispatchSetStateInternal에서 시작해 FiberRoot를 찾는 단계까지, 네 개의 호출이 차례로 일어납니다.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'update 객체 생성 및 eager bailout 처리 후',
        variant: 'outline',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane)',
        body: '업데이트를 queue 경로에 등록하고 Root 탐색 시작',
        variant: 'dark',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate(...)',
        body: '업데이트를 실제 큐 연결 단계로 밀어 넣기',
        variant: 'mint',
      },
      {
        id: 'getRoot',
        title: 'getRootForUpdatedFiber(...)',
        body: '업데이트가 속한 FiberRoot 찾기',
        variant: 'mintBlue',
      },
    ],
  },
  elements: {
    number: '02',
    eyebrow: '4요소 해설',
    title: 'fiber / queue / update / lane 4요소',
    description:
      '하나의 함수에 네 인자가 함께 전달되는 이유 — 각각이 무엇을 책임지는지 카드 단위로 정리합니다.',
    cards: [
      {
        id: 'fiber',
        title: 'fiber',
        question: '어느 컴포넌트의 업데이트인가?',
        body: '업데이트가 발생한 Fiber (Hook이 있는 Fiber)',
        tone: 'sky',
        iconName: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: '어느 Hook queue에 들어가야 하는가?',
        body: 'Hook의 UpdateQueue (circular linked list)',
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: '실제 변경 요청 데이터',
        body: 'action, eagerState 등 변경에 필요한 정보',
        tone: 'violet',
        iconName: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: '어떤 우선순위의 작업인가?',
        body: '업데이트의 우선순위를 나타내는 Lane',
        tone: 'amber',
        iconName: 'flag',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'ReactFiberConcurrentUpdates.js',
      functionLabel: '함수',
      functionName: 'enqueueConcurrentHookUpdate',
      questionLabel: '학습 질문',
      question: '업데이트 등록 이후 React는 무엇을 반환할까?',
    },
    code: {
      fileName: 'ReactFiberConcurrentUpdates.js',
      rightLabel: '코드 미리보기',
      content: checkpointCodeKo,
    },
    callouts: [
      {
        number: '1',
        title: 'enqueueUpdate 호출',
        body: '업데이트를 큐 연결 경로로 등록',
        tone: 'mint',
        linkedLine: 7,
      },
      {
        number: '2',
        title: 'Root 탐색 후 반환',
        body: '이 업데이트가 속한 FiberRoot 반환',
        tone: 'sky',
        linkedLine: 14,
      },
    ],
  },
  meaning: {
    number: '04',
    eyebrow: 'enqueueUpdate 의미',
    title: 'enqueueUpdate의 의미',
    descriptionTitle: '업데이트를 실제 큐 연결 단계로 밀어 넣는 공통 처리 지점이다.',
    descriptionBody: '여러 종류의 업데이트(Hook, Class)가 동일한 경로를 통해 처리됩니다.',
    flow: [
      { label: 'fiber', tone: 'sky', iconName: 'squareDashed' },
      { label: 'queue', tone: 'emerald', iconName: 'database' },
      { label: 'update', tone: 'violet', iconName: 'fileText' },
      { label: 'lane', tone: 'amber', iconName: 'flag' },
    ],
    finalLabel: 'concurrent update handling',
    finalBody: '공통 큐 처리 경로로 등록',
  },
  rootReason: {
    number: '05',
    eyebrow: '왜 Root까지?',
    title: 'Root를 왜 함께 찾는가?',
    description:
      'queue에 update를 넣는 것만으로는 부족하다. 이 업데이트가 속한 전체 Root가 나중에 스케줄링되어야 한다.',
    leftNode: {
      title: 'Hook queue',
      body: 'update가 연결된 개별 Hook queue',
    },
    middleLabel: {
      line1: '등록 완료',
      line2: 'enqueueConcurrentHookUpdate',
    },
    rightNode: {
      title: 'FiberRoot',
      body: '전체 트리를 스케줄링하고 렌더링할 단위',
    },
    bottomMessage:
      '개별 Hook queue에 update를 넣은 뒤, React는 그 업데이트가 속한 전체 FiberRoot를 찾아야 한다.',
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    question: 'enqueueConcurrentHookUpdate는 업데이트 등록 이후 무엇을 반환할까?',
    answerTitle: '이 업데이트가 속한 FiberRoot를 반환합니다.',
    answerBody: '반환 타입: FiberRoot | null',
  },
  nextStep: {
    eyebrow: '다음 단계로',
    title: '다음: Fiber에서 Root까지 올라가기',
    description:
      'update가 queue 처리 경로로 넘어갔다면, 이제 React는 Fiber에서 Root까지 올라가며 작업 흔적을 표시합니다.',
    cta: '다음: Fiber에서 Root까지 올라가기',
    href: '/fiber-to-root',
  },
};

const en: EnqueueConcurrentHookUpdateContent = {
  hero: {
    badge: 'Update Flow · 6/10',
    title: {
      line1: 'When a render is needed,',
      line2: 'React hands the update off',
      line3: 'to the queue-processing path.',
    },
    description:
      'fiber, queue, update, and lane are bundled together — then React even walks up to find the FiberRoot the update belongs to.',
    elements: [
      {
        id: 'fiber',
        title: 'fiber',
        question: 'Which component is updating?',
        body: 'The Fiber where the update was issued',
        tone: 'sky',
        iconName: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: 'Which Hook queue does it belong to?',
        body: "The Hook's UpdateQueue",
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: 'What is the change payload?',
        body: 'action, eagerState, and more',
        tone: 'violet',
        iconName: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: 'What priority is the work?',
        body: "The update's priority Lane",
        tone: 'amber',
        iconName: 'flag',
      },
    ],
    functionCard: {
      code: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane);',
      caption: 'The single call that bundles all four',
    },
  },
  flow: {
    number: '01',
    eyebrow: 'Full flow',
    title: 'Full function flow',
    description:
      'From dispatchSetStateInternal down to finding the FiberRoot — four calls happen in order.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'After building the update and the eager-bailout check',
        variant: 'outline',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane)',
        body: 'Registers the update on the queue path and starts Root lookup',
        variant: 'dark',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate(...)',
        body: 'Pushes the update into the actual queue-linking step',
        variant: 'mint',
      },
      {
        id: 'getRoot',
        title: 'getRootForUpdatedFiber(...)',
        body: 'Finds the FiberRoot the update belongs to',
        variant: 'mintBlue',
      },
    ],
  },
  elements: {
    number: '02',
    eyebrow: 'Four arguments',
    title: 'fiber / queue / update / lane — four arguments',
    description:
      'Why all four are passed to one function — each one carries a distinct responsibility.',
    cards: [
      {
        id: 'fiber',
        title: 'fiber',
        question: 'Which component is updating?',
        body: 'The Fiber that issued the update (the Hook owner)',
        tone: 'sky',
        iconName: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: 'Which Hook queue?',
        body: "The Hook's UpdateQueue (a circular linked list)",
        tone: 'emerald',
        iconName: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: 'What is the change payload?',
        body: 'action, eagerState, and other change data',
        tone: 'violet',
        iconName: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: 'What priority?',
        body: 'The Lane that represents the priority',
        tone: 'amber',
        iconName: 'flag',
      },
    ],
  },
  checkpoint: {
    number: '03',
    eyebrow: 'Source checkpoint',
    title: 'Source checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'ReactFiberConcurrentUpdates.js',
      functionLabel: 'Function',
      functionName: 'enqueueConcurrentHookUpdate',
      questionLabel: 'Learning question',
      question: 'What does React return after registering the update?',
    },
    code: {
      fileName: 'ReactFiberConcurrentUpdates.js',
      rightLabel: 'preview',
      content: checkpointCodeKo,
    },
    callouts: [
      {
        number: '1',
        title: 'enqueueUpdate call',
        body: 'Registers the update onto the queue-linking path',
        tone: 'mint',
        linkedLine: 7,
      },
      {
        number: '2',
        title: 'Return after Root lookup',
        body: 'Returns the FiberRoot this update belongs to',
        tone: 'sky',
        linkedLine: 14,
      },
    ],
  },
  meaning: {
    number: '04',
    eyebrow: 'enqueueUpdate',
    title: 'What enqueueUpdate means',
    descriptionTitle:
      'A shared chokepoint that pushes the update into the actual queue-linking step.',
    descriptionBody: 'Different update kinds (Hook, Class) all flow through this same path.',
    flow: [
      { label: 'fiber', tone: 'sky', iconName: 'squareDashed' },
      { label: 'queue', tone: 'emerald', iconName: 'database' },
      { label: 'update', tone: 'violet', iconName: 'fileText' },
      { label: 'lane', tone: 'amber', iconName: 'flag' },
    ],
    finalLabel: 'concurrent update handling',
    finalBody: 'Registered onto the shared queue path',
  },
  rootReason: {
    number: '05',
    eyebrow: 'Why find Root?',
    title: 'Why look up the Root too?',
    description:
      'Putting the update on the queue is not enough — the entire Root that owns the update has to be scheduled later.',
    leftNode: {
      title: 'Hook queue',
      body: 'The individual Hook queue holding the update',
    },
    middleLabel: {
      line1: 'registered',
      line2: 'enqueueConcurrentHookUpdate',
    },
    rightNode: {
      title: 'FiberRoot',
      body: 'The unit that schedules and renders the whole tree',
    },
    bottomMessage:
      'After placing the update on the Hook queue, React still has to find the FiberRoot that owns it.',
  },
  quiz: {
    number: '06',
    eyebrow: 'Mini quiz',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    question: 'After registering the update, what does enqueueConcurrentHookUpdate return?',
    answerTitle: 'It returns the FiberRoot the update belongs to.',
    answerBody: 'Return type: FiberRoot | null',
  },
  nextStep: {
    eyebrow: 'Next up',
    title: 'Next: walking from Fiber up to Root',
    description:
      'Now that the update is on the queue-processing path, React walks from the Fiber up to the Root, leaving trail markers along the way.',
    cta: 'Next: walking from Fiber up to Root',
    href: '/fiber-to-root',
  },
};

export const enqueueConcurrentHookUpdateContent: Record<
  Locale,
  EnqueueConcurrentHookUpdateContent
> = { ko, en };
