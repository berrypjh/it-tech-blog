import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type FourElementIcon = 'squareDashed' | 'database' | 'fileText' | 'flag';

export type FourElement = {
  id: 'fiber' | 'queue' | 'update' | 'lane';
  title: string;
  question: string;
  body: string;
  tone: ToneKey;
  icon: FourElementIcon;
};

export type FunctionFlowIcon = 'function' | 'workflow' | 'database' | 'network';

export type FunctionFlowStep = {
  id: 'dispatch' | 'enqueue' | 'enqueueUpdate' | 'getRoot';
  title: string;
  body: string;
  tone: ToneKey;
  icon: FunctionFlowIcon;
};

export type EnqueueMeaningIcon = 'squareDashed' | 'database' | 'fileText' | 'flag' | 'settings';

export type EnqueueMeaningStep = {
  label: string;
  tone: ToneKey;
  icon: EnqueueMeaningIcon;
};

export type CheckpointCallout = {
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
  linkedLine: number;
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
    eyebrow: string;
    title: string;
    description: string;
    steps: FunctionFlowStep[];
  };
  elements: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FourElement[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryHref: string;
    primaryCta: string;
    callouts: CheckpointCallout[];
  };
  meaning: {
    eyebrow: string;
    title: string;
    descriptionTitle: string;
    descriptionBody: string;
    tags: { label: string; tone: ToneKey }[];
    flow: EnqueueMeaningStep[];
    finalLabel: string;
    finalBody: string;
  };
  rootReason: {
    eyebrow: string;
    title: string;
    description: string;
    leftNode: { title: string; body: string; badge: string };
    middleLabel: { line1: string; line2: string };
    rightNode: { title: string; body: string; badge: string };
    bottomMessage: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCode = `export function enqueueConcurrentHookUpdate(
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

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberConcurrentUpdates.js';

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
        icon: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: '어느 Hook queue에 들어가야 하는가?',
        body: 'Hook의 UpdateQueue',
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: '실제 변경 요청 데이터',
        body: 'action, eagerState 등',
        tone: 'violet',
        icon: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: '어떤 우선순위의 작업인가?',
        body: '업데이트의 우선순위 Lane',
        tone: 'amber',
        icon: 'flag',
      },
    ],
    functionCard: {
      code: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane);',
      caption: '4요소가 함께 묶여 호출되는 진입점',
    },
  },
  flow: {
    eyebrow: '01 · 전체 흐름',
    title: '전체 함수 흐름',
    description:
      'dispatchSetStateInternal에서 시작해 FiberRoot를 찾는 단계까지, 네 개의 호출이 차례로 일어납니다.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'update 객체 생성 및 eager bailout 처리 후',
        tone: 'sky',
        icon: 'function',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate(...)',
        body: '업데이트를 queue 경로에 등록하고 Root 탐색 시작',
        tone: 'violet',
        icon: 'workflow',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate(...)',
        body: '업데이트를 실제 큐 연결 단계로 밀어 넣기',
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'getRoot',
        title: 'getRootForUpdatedFiber(...)',
        body: '업데이트가 속한 FiberRoot 찾기',
        tone: 'cyan',
        icon: 'network',
      },
    ],
  },
  elements: {
    eyebrow: '02 · 4요소 해설',
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
        icon: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: '어느 Hook queue에 들어가야 하는가?',
        body: 'Hook의 UpdateQueue (circular linked list)',
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: '실제 변경 요청 데이터',
        body: 'action, eagerState 등 변경에 필요한 정보',
        tone: 'violet',
        icon: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: '어떤 우선순위의 작업인가?',
        body: '업데이트의 우선순위를 나타내는 Lane',
        tone: 'amber',
        icon: 'flag',
      },
    ],
  },
  checkpoint: {
    eyebrow: '03 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberConcurrentUpdates.js',
    functionLabel: '함수',
    functionName: 'enqueueConcurrentHookUpdate',
    learningQuestion: '업데이트 등록 이후 React는 무엇을 반환할까?',
    codeHeader: 'ReactFiberConcurrentUpdates.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'GitHub에서 enqueueConcurrentHookUpdate 보기',
    callouts: [
      {
        number: '1',
        title: 'enqueueUpdate 호출',
        body: '업데이트를 큐 연결 경로로 등록',
        tone: 'emerald',
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
    eyebrow: '04 · enqueueUpdate 의미',
    title: 'enqueueUpdate의 의미',
    descriptionTitle: '업데이트를 실제 큐 연결 단계로 밀어 넣는 공통 처리 지점이다.',
    descriptionBody: '여러 종류의 업데이트(Hook, Class)가 동일한 경로를 통해 처리됩니다.',
    tags: [
      { label: 'Hook', tone: 'sky' },
      { label: 'Class', tone: 'violet' },
      { label: 'shared path', tone: 'emerald' },
    ],
    flow: [
      { label: 'fiber', tone: 'sky', icon: 'squareDashed' },
      { label: 'queue', tone: 'emerald', icon: 'database' },
      { label: 'update', tone: 'violet', icon: 'fileText' },
      { label: 'lane', tone: 'amber', icon: 'flag' },
    ],
    finalLabel: 'concurrent update handling',
    finalBody: '공통 큐 처리 경로로 등록',
  },
  rootReason: {
    eyebrow: '05 · Root 탐색 이유',
    title: 'Root를 왜 함께 찾는가?',
    description:
      'queue에 update를 넣는 것만으로는 부족하다. 이 업데이트가 속한 전체 Root가 나중에 스케줄링되어야 한다.',
    leftNode: {
      title: 'Hook queue',
      body: 'update가 연결된 개별 Hook queue',
      badge: 'hook scope',
    },
    middleLabel: {
      line1: '등록 완료',
      line2: 'enqueueConcurrentHookUpdate',
    },
    rightNode: {
      title: 'FiberRoot',
      body: '전체 트리를 스케줄링하고 렌더링할 단위',
      badge: 'tree scope',
    },
    bottomMessage:
      '개별 Hook queue에 update를 넣은 뒤, React는 그 업데이트가 속한 전체 FiberRoot를 찾아야 한다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Fiber에서 Root까지 올라가기',
    description:
      'update가 queue 처리 경로로 넘어갔다면, 이제 React는 Fiber에서 Root까지 올라가며 작업 흔적을 표시합니다.',
    cta: '다음 페이지로 이동',
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
        icon: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: 'Which Hook queue does it belong to?',
        body: "The Hook's UpdateQueue",
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: 'What is the change payload?',
        body: 'action, eagerState, and more',
        tone: 'violet',
        icon: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: 'What priority is the work?',
        body: "The update's priority Lane",
        tone: 'amber',
        icon: 'flag',
      },
    ],
    functionCard: {
      code: 'enqueueConcurrentHookUpdate(fiber, queue, update, lane);',
      caption: 'The single call that bundles all four',
    },
  },
  flow: {
    eyebrow: '01 · FULL FLOW',
    title: 'Full function flow',
    description:
      'From dispatchSetStateInternal down to finding the FiberRoot — four calls happen in order.',
    steps: [
      {
        id: 'dispatch',
        title: 'dispatchSetStateInternal',
        body: 'After building the update and the eager-bailout check',
        tone: 'sky',
        icon: 'function',
      },
      {
        id: 'enqueue',
        title: 'enqueueConcurrentHookUpdate(...)',
        body: 'Registers the update on the queue path and starts Root lookup',
        tone: 'violet',
        icon: 'workflow',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate(...)',
        body: 'Pushes the update into the actual queue-linking step',
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'getRoot',
        title: 'getRootForUpdatedFiber(...)',
        body: 'Finds the FiberRoot the update belongs to',
        tone: 'cyan',
        icon: 'network',
      },
    ],
  },
  elements: {
    eyebrow: '02 · FOUR ARGUMENTS',
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
        icon: 'squareDashed',
      },
      {
        id: 'queue',
        title: 'queue',
        question: 'Which Hook queue?',
        body: "The Hook's UpdateQueue (a circular linked list)",
        tone: 'emerald',
        icon: 'database',
      },
      {
        id: 'update',
        title: 'update',
        question: 'What is the change payload?',
        body: 'action, eagerState, and other change data',
        tone: 'violet',
        icon: 'fileText',
      },
      {
        id: 'lane',
        title: 'lane',
        question: 'What priority?',
        body: 'The Lane that represents the priority',
        tone: 'amber',
        icon: 'flag',
      },
    ],
  },
  checkpoint: {
    eyebrow: '03 · CODE CHECKPOINT',
    title: 'Source checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberConcurrentUpdates.js',
    functionLabel: 'Function',
    functionName: 'enqueueConcurrentHookUpdate',
    learningQuestion: 'What does React return after registering the update?',
    codeHeader: 'ReactFiberConcurrentUpdates.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'View enqueueConcurrentHookUpdate on GitHub',
    callouts: [
      {
        number: '1',
        title: 'enqueueUpdate call',
        body: 'Registers the update onto the queue-linking path',
        tone: 'emerald',
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
    eyebrow: '04 · ENQUEUEUPDATE',
    title: 'What enqueueUpdate means',
    descriptionTitle:
      'A shared chokepoint that pushes the update into the actual queue-linking step.',
    descriptionBody: 'Different update kinds (Hook, Class) all flow through this same path.',
    tags: [
      { label: 'Hook', tone: 'sky' },
      { label: 'Class', tone: 'violet' },
      { label: 'shared path', tone: 'emerald' },
    ],
    flow: [
      { label: 'fiber', tone: 'sky', icon: 'squareDashed' },
      { label: 'queue', tone: 'emerald', icon: 'database' },
      { label: 'update', tone: 'violet', icon: 'fileText' },
      { label: 'lane', tone: 'amber', icon: 'flag' },
    ],
    finalLabel: 'concurrent update handling',
    finalBody: 'Registered onto the shared queue path',
  },
  rootReason: {
    eyebrow: '05 · WHY ROOT',
    title: 'Why look up the Root too?',
    description:
      'Putting the update on the queue is not enough — the entire Root that owns the update has to be scheduled later.',
    leftNode: {
      title: 'Hook queue',
      body: 'The individual Hook queue holding the update',
      badge: 'hook scope',
    },
    middleLabel: {
      line1: 'registered',
      line2: 'enqueueConcurrentHookUpdate',
    },
    rightNode: {
      title: 'FiberRoot',
      body: 'The unit that schedules and renders the whole tree',
      badge: 'tree scope',
    },
    bottomMessage:
      'After placing the update on the Hook queue, React still has to find the FiberRoot that owns it.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'walking from Fiber up to Root',
    description:
      'Now that the update is on the queue-processing path, React walks from the Fiber up to the Root, leaving trail markers along the way.',
    cta: 'Go to the next page',
    href: '/fiber-to-root',
  },
};

export const enqueueConcurrentHookUpdateContent: Record<
  Locale,
  EnqueueConcurrentHookUpdateContent
> = { ko, en };
