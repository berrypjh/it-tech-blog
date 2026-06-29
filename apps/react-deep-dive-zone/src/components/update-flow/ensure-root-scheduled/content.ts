import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroRootCard = {
  id: 'a' | 'b' | 'c' | 'd';
  title: string;
  state: string;
  body?: string;
  tone: ToneKey;
  inactive?: boolean;
};

export type RoleIcon = 'calendarCheck' | 'clock';

export type RoleCard = {
  number: string;
  title: string;
  body: string;
  badge: string;
  tone: ToneKey;
  icon: RoleIcon;
};

export type CheckpointCallout = {
  number: string;
  heading: string;
  title: string;
  tone: ToneKey;
  linkedLine: number;
};

export type EnsureRootScheduledContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      roots: HeroRootCard[];
      scheduleQueueTitle: string;
      scheduleQueueItems: string[];
      microtaskQueueTitle: string;
      microtaskFunction: string;
      microtaskBody: string;
    };
  };
  roles: {
    eyebrow: string;
    title: string;
    description: string;
    cards: RoleCard[];
  };
  visualization: {
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftRoots: { id: 'a' | 'b' | 'c'; title: string; tone: ToneKey }[];
    leftBody: string;
    middleLabel: string;
    rightTitle: string;
    rightQueue: string;
    rightBody: string;
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
  microtask: {
    eyebrow: string;
    title: string;
    description: string;
    highlight: string;
    diagramTitle: string;
    diagramMain: string;
    diagramSub: string;
    diagramSide: string;
  };
  duplicate: {
    eyebrow: string;
    title: string;
    description: string;
    highlight: string;
    diagramTitle: string;
    updates: string[];
    middleLabel: string;
    middleSub: string;
    resultTitle: string;
    resultValue: string;
    resultBody: string;
  };
  quiz: {
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

const checkpointCodeKo = `export function ensureRootIsScheduled(
  root: FiberRoot,
): void {
  // This function is called whenever a root receives an update.
  // It does two things:
  // 1) it ensures the root is in the root schedule,
  // 2) it ensures there's a pending microtask
  //    to process the root schedule.

  // ... 내부 구현은 이후 코드에서 확인
}`;

const checkpointCodeEn = `export function ensureRootIsScheduled(
  root: FiberRoot,
): void {
  // This function is called whenever a root receives an update.
  // It does two things:
  // 1) it ensures the root is in the root schedule,
  // 2) it ensures there's a pending microtask
  //    to process the root schedule.

  // ... see the implementation in later code
}`;

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRootScheduler.js';

const ko: EnsureRootScheduledContent = {
  hero: {
    badge: '업데이트 시작 · 9/10단계',
    title: {
      line1: 'Root에 일이 생겼다면,',
      line2: 'React는 그 Root를',
      line3: '스케줄 목록에 올립니다.',
    },
    description:
      'ensureRootIsScheduled는 업데이트가 들어온 Root를 나중에 처리할 수 있도록 Root schedule과 microtask 예약을 보장합니다.',
    diagram: {
      title: '여러 Root에 업데이트 발생',
      roots: [
        { id: 'a', title: 'Root A', state: 'pendingLanes ≠ 0', tone: 'emerald' },
        { id: 'b', title: 'Root B', state: 'pendingLanes ≠ 0', tone: 'sky' },
        { id: 'c', title: 'Root C', state: 'pendingLanes ≠ 0', tone: 'violet' },
        {
          id: 'd',
          title: 'Root D',
          state: 'pendingLanes = 0',
          body: '등록 대상 아님',
          tone: 'sky',
          inactive: true,
        },
      ],
      scheduleQueueTitle: 'Root Schedule Queue',
      scheduleQueueItems: ['A', 'B', 'C'],
      microtaskQueueTitle: 'Microtask Queue',
      microtaskFunction: 'processRootSchedule',
      microtaskBody: '마이크로태스크 예약',
    },
  },
  roles: {
    eyebrow: '01 · 두 역할',
    title: 'ensureRootIsScheduled의 두 역할',
    description:
      '이 함수는 렌더를 실행하지 않습니다. 대신 두 가지를 보장합니다 — Root schedule 등록과 microtask 예약.',
    cards: [
      {
        number: '1',
        title: 'Root schedule에 등록',
        body: '업데이트가 있는 Root를 Root schedule 목록(큐)에 등록합니다.',
        badge: '중복 등록 없이 한 번만 등록',
        tone: 'emerald',
        icon: 'calendarCheck',
      },
      {
        number: '2',
        title: 'Root schedule 처리를 위한 microtask 예약',
        body: 'Root schedule을 나중에 처리할 수 있도록 마이크로태스크를 예약합니다.',
        badge: '예약이 없으면 스케줄이 시작되지 않음',
        tone: 'violet',
        icon: 'clock',
      },
    ],
  },
  visualization: {
    eyebrow: '02 · 시각화',
    title: 'Root schedule 시각화',
    description:
      '업데이트가 있는 Root들이 Root Schedule Queue에 등록 순서대로 들어가는 모습을 한눈에 봅니다.',
    leftTitle: '업데이트가 있는 Root들',
    leftRoots: [
      { id: 'a', title: 'Root A', tone: 'emerald' },
      { id: 'b', title: 'Root B', tone: 'sky' },
      { id: 'c', title: 'Root C', tone: 'violet' },
    ],
    leftBody: '각 Root는 pending work를 가짐',
    middleLabel: '등록',
    rightTitle: 'Root Schedule Queue (대기열)',
    rightQueue: 'A → B → C → ...',
    rightBody: '등록 순서대로 대기하며, 마이크로태스크에서 처리됨',
  },
  checkpoint: {
    eyebrow: '03 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    functionLabel: '함수',
    functionName: 'ensureRootIsScheduled',
    learningQuestion: '이 함수는 실제 렌더를 즉시 실행할까, 스케줄 등록을 보장할까?',
    codeHeader: 'ReactFiberRootScheduler.js',
    codeBadge: 'main',
    code: checkpointCodeKo,
    primaryHref: githubHref,
    primaryCta: 'GitHub에서 ensureRootIsScheduled 보기',
    callouts: [
      {
        number: '1',
        heading: '역할 1',
        title: 'Root schedule에 등록 보장',
        tone: 'emerald',
        linkedLine: 6,
      },
      {
        number: '2',
        heading: '역할 2',
        title: 'microtask 예약 보장',
        tone: 'violet',
        linkedLine: 7,
      },
    ],
  },
  microtask: {
    eyebrow: '04 · microtask 예약',
    title: 'microtask 예약 개념',
    description:
      '업데이트가 들어왔다고 즉시 모든 Root를 처리하는 것은 아닙니다. React는 적절한 시점에 Root schedule을 처리할 수 있도록 microtask를 예약합니다.',
    highlight: '이로 인해 여러 업데이트를 하나로 모아 효율적으로 처리할 수 있습니다.',
    diagramTitle: 'Microtask Queue (마이크로태스크 큐)',
    diagramMain: 'processRootSchedule',
    diagramSub: 'Root schedule 처리',
    diagramSide: '현재 작업 스택이 비면 실행됨 (마이크로태스크 시점)',
  },
  duplicate: {
    eyebrow: '05 · 중복 등록 방지',
    title: '이미 스케줄된 Root를 중복 등록하지 않는 이유',
    description:
      '같은 Root가 여러 번 업데이트되어도, 스케줄 목록에 중복 등록할 필요는 없습니다. 핵심은 이 Root에 처리할 일이 있다는 사실을 유지하는 것입니다.',
    highlight: '중복 등록을 막아 불필요한 작업과 메모리 사용을 줄입니다.',
    diagramTitle: '같은 Root에 여러 번 업데이트 발생',
    updates: ['Root A 업데이트 1', 'Root A 업데이트 2', 'Root A 업데이트 3'],
    middleLabel: 'ensureRootIsScheduled',
    middleSub: '중복 등록 방지 로직',
    resultTitle: 'Root Schedule Queue',
    resultValue: 'A',
    resultBody: '한 번만 등록됨',
  },
  quiz: {
    eyebrow: '06 · 미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    question: 'ensureRootIsScheduled는 즉시 Render Phase를 수행하는가?',
    answerTitle: '아니다.',
    answerBody: 'Root를 스케줄에 넣고 이후 처리 흐름이 진행되도록 예약한다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '전체 업데이트 흐름 정리',
    description:
      '업데이트를 받은 Root가 스케줄링 흐름에 들어갔다면, 이제 지금까지의 과정을 한 번에 연결해봅니다.',
    cta: '다음 페이지로 이동',
    href: '/update-to-render',
  },
};

const en: EnsureRootScheduledContent = {
  hero: {
    badge: 'Update Flow · 9/10',
    title: {
      line1: 'When a Root has work to do,',
      line2: 'React puts that Root',
      line3: 'onto the schedule.',
    },
    description:
      'ensureRootIsScheduled guarantees that an updated Root sits on the root schedule and that a microtask is reserved to process it later.',
    diagram: {
      title: 'Updates land on multiple Roots',
      roots: [
        { id: 'a', title: 'Root A', state: 'pendingLanes ≠ 0', tone: 'emerald' },
        { id: 'b', title: 'Root B', state: 'pendingLanes ≠ 0', tone: 'sky' },
        { id: 'c', title: 'Root C', state: 'pendingLanes ≠ 0', tone: 'violet' },
        {
          id: 'd',
          title: 'Root D',
          state: 'pendingLanes = 0',
          body: 'not a registration target',
          tone: 'sky',
          inactive: true,
        },
      ],
      scheduleQueueTitle: 'Root Schedule Queue',
      scheduleQueueItems: ['A', 'B', 'C'],
      microtaskQueueTitle: 'Microtask Queue',
      microtaskFunction: 'processRootSchedule',
      microtaskBody: 'microtask reserved',
    },
  },
  roles: {
    eyebrow: '01 · TWO ROLES',
    title: 'What ensureRootIsScheduled guarantees',
    description:
      'It never runs a render. Instead it guarantees two things — registering the Root on the schedule and reserving a microtask.',
    cards: [
      {
        number: '1',
        title: 'Register on the Root schedule',
        body: 'Adds the updated Root to the root schedule list (queue).',
        badge: 'registered exactly once — no duplicates',
        tone: 'emerald',
        icon: 'calendarCheck',
      },
      {
        number: '2',
        title: 'Reserve a microtask to process the schedule',
        body: 'Reserves a microtask so the root schedule can be processed later.',
        badge: 'without a reservation, nothing kicks off',
        tone: 'violet',
        icon: 'clock',
      },
    ],
  },
  visualization: {
    eyebrow: '02 · VISUALIZATION',
    title: 'Root schedule visualization',
    description:
      'Watch the Roots with pending work enter the Root Schedule Queue in the order they were registered.',
    leftTitle: 'Roots with pending work',
    leftRoots: [
      { id: 'a', title: 'Root A', tone: 'emerald' },
      { id: 'b', title: 'Root B', tone: 'sky' },
      { id: 'c', title: 'Root C', tone: 'violet' },
    ],
    leftBody: 'each Root carries pending work',
    middleLabel: 'register',
    rightTitle: 'Root Schedule Queue (waiting list)',
    rightQueue: 'A → B → C → ...',
    rightBody: 'queued in order; processed in the microtask',
  },
  checkpoint: {
    eyebrow: '03 · CODE CHECKPOINT',
    title: 'Source checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberRootScheduler.js',
    functionLabel: 'Function',
    functionName: 'ensureRootIsScheduled',
    learningQuestion: 'Does this function actually render — or just guarantee scheduling?',
    codeHeader: 'ReactFiberRootScheduler.js',
    codeBadge: 'main',
    code: checkpointCodeEn,
    primaryHref: githubHref,
    primaryCta: 'View ensureRootIsScheduled on GitHub',
    callouts: [
      {
        number: '1',
        heading: 'role 1',
        title: 'Ensures the Root is on the root schedule',
        tone: 'emerald',
        linkedLine: 6,
      },
      {
        number: '2',
        heading: 'role 2',
        title: 'Ensures a pending microtask is reserved',
        tone: 'violet',
        linkedLine: 7,
      },
    ],
  },
  microtask: {
    eyebrow: '04 · MICROTASK',
    title: 'How the microtask reservation works',
    description:
      'An incoming update does not immediately process every Root. React reserves a microtask so the root schedule can be processed at the right time.',
    highlight: 'This is how multiple updates get coalesced and processed efficiently.',
    diagramTitle: 'Microtask Queue',
    diagramMain: 'processRootSchedule',
    diagramSub: 'process the root schedule',
    diagramSide: 'runs once the current call stack is empty (the microtask moment)',
  },
  duplicate: {
    eyebrow: '05 · NO DUPLICATES',
    title: 'Why an already-scheduled Root is not registered twice',
    description:
      'Even when the same Root receives many updates, the schedule list does not need duplicate entries. What matters is keeping the fact that the Root has work.',
    highlight: 'Avoiding duplicates skips redundant work and memory.',
    diagramTitle: 'multiple updates on the same Root',
    updates: ['Root A update 1', 'Root A update 2', 'Root A update 3'],
    middleLabel: 'ensureRootIsScheduled',
    middleSub: 'de-duplication logic',
    resultTitle: 'Root Schedule Queue',
    resultValue: 'A',
    resultBody: 'registered exactly once',
  },
  quiz: {
    eyebrow: '06 · MINI QUIZ',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    question: 'Does ensureRootIsScheduled run the Render Phase right away?',
    answerTitle: 'No, it does not.',
    answerBody: 'It puts the Root on the schedule and reserves later processing.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'the full update flow',
    description:
      'With the Root in the scheduling flow, it is time to connect every step we have walked through into one picture.',
    cta: 'Go to the next page',
    href: '/update-to-render',
  },
};

export const ensureRootScheduledContent: Record<Locale, EnsureRootScheduledContent> = {
  ko,
  en,
};
