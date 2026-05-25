import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

import type { StepKind } from './stepTone';

export type { StepKind, ToneKey };

export type CallStep = {
  fn: string;
  kind: StepKind;
  /** 한 줄 step note */
  note?: string;
};

export type FlowCard = {
  steps: CallStep[];
  oneLineSummary: string;
};

export type SetStateStep = {
  fn: string;
  kind: StepKind;
  note: string;
};

export type RuleCard = {
  number: string;
  title: string;
  body: string;
  examples: string[];
  kind: StepKind;
};

export type ProblemCard = {
  number: string;
  title: string;
  body: string;
  fnHints: string[];
};

export type NoteField = {
  label: string;
  value: string | string[];
  /** array면 'code-list' / 'flow' 같은 표현 */
  format: 'text' | 'code' | 'code-list' | 'flow';
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type CallPathCompressionContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftFunctions: string[];
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    rightPanelTitle: string;
    rightFlow: CallStep[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** "핵심 흐름만" 강조 */
    emphasize: string;
    badges: { label: string; kind?: StepKind }[];
  };
  whyCompress: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProblemCard[];
    bannerLines: [string, string];
  };
  rules: {
    eyebrow: string;
    title: string;
    intro: string;
    examplesLabel: string;
    cards: RuleCard[];
  };
  setStateFlow: {
    eyebrow: string;
    title: string;
    intro: string;
    flow: SetStateStep[];
    summaryLabel: string;
    summaryLines: [string, string, string];
  };
  useStateFlow: {
    eyebrow: string;
    title: string;
    intro: string;
    flow: CallStep[];
    oneLineSummary: string;
    relatedNote: string;
  };
  suspenseFlow: {
    eyebrow: string;
    title: string;
    intro: string;
    flow: CallStep[];
    oneLineSummary: string;
    readingPoint: string;
  };
  orderMatching: {
    eyebrow: string;
    title: string;
    intro: string;
    shuffledLabel: string;
    correctLabel: string;
    explanationLabel: string;
    /** UI에 표시할 순서가 섞인 함수 카드 — id로 정답 비교 */
    shuffled: { id: 'sched' | 'set-state' | 'request-lane' | 'mark-root'; fn: string }[];
    /** 정답 순서 (id 순서대로) */
    correctOrder: ('set-state' | 'request-lane' | 'sched' | 'mark-root')[];
    explanation: string;
    resetLabel: string;
    revealLabel: string;
    progressLabel: string;
  };
  readingNote: {
    eyebrow: string;
    title: string;
    intro: string;
    noteHeader: string;
    fields: NoteField[];
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
  nextCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const callPathCompressionContent: Record<Locale, CallPathCompressionContent> = {
  ko: {
    hero: {
      badge: 'React 소스코드 독해 루틴',
      titleLines: ['업데이트 흐름은', '한 줄 호출 경로로 복원한다'],
      accentTail: '한 줄 호출 경로로 복원한다',
      description: '수십 개의 함수를 읽어도, 마지막에는 핵심 흐름을 한 줄로 말할 수 있어야 합니다.',
      supporting:
        'React 내부 흐름은 여러 파일과 함수로 흩어져 있습니다. 하지만 독해가 끝난 뒤에는 핵심 API 입구, 상태 생성 지점, phase 전환 함수, 실제 반영 지점만 남겨 다시 설명 가능한 호출 경로로 압축해야 합니다.',
      primaryCta: 'setState 흐름 보기',
      secondaryCta: '순서 맞추기 해보기',
      visualTitle: '흩어진 함수들을 호출 경로로 복원합니다',
      leftPanelTitle: '흩어진 함수 카드',
      leftFunctions: [
        'scheduleUpdateOnFiber',
        'markRootUpdated',
        'setState',
        'requestUpdateLane',
        'performUnitOfWork',
        'ensureRootIsScheduled',
      ],
      leftCaption: '함수 이름만 기억하면 전체 흐름이 조각처럼 남습니다.',
      connectorLabel: 'Compress',
      connectorSub: '핵심 경로로 압축',
      rightPanelTitle: '한 줄 호출 경로',
      rightFlow: [
        { fn: 'setState', kind: 'api' },
        { fn: 'requestUpdateLane', kind: 'lane' },
        { fn: 'scheduleUpdateOnFiber', kind: 'scheduling' },
        { fn: 'markRootUpdated', kind: 'scheduling' },
        { fn: 'root scheduling', kind: 'render' },
      ],
      rightCaption: '핵심 경로로 압축하면 다음에 다시 설명할 수 있습니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['React 내부 함수를 여러 개 읽은 뒤,', '어떻게 {emphasize}만 남길 수 있을까?'],
      emphasize: '핵심 흐름',
      badges: [
        { label: 'Call Path' },
        { label: 'Flow Compression' },
        { label: 'setState', kind: 'api' },
        { label: 'Scheduling', kind: 'scheduling' },
      ],
    },
    whyCompress: {
      eyebrow: 'why compress',
      title: '왜 긴 코드를 압축해야 하는가?',
      intro:
        '소스코드를 많이 읽어도 마지막에 흐름을 설명하지 못하면 독해가 지식으로 남기 어렵습니다.',
      cards: [
        {
          number: '01',
          title: '함수 이름은 기억나는데 전체 흐름이 안 남는다',
          body: 'requestUpdateLane, scheduleUpdateOnFiber, markRootUpdated를 각각 봤어도 순서와 역할을 연결하지 못하면 다시 읽을 때 같은 지점에서 막힙니다.',
          fnHints: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'markRootUpdated'],
        },
        {
          number: '02',
          title: '세부 분기에 매몰되어 핵심 경로를 잃는다',
          body: 'React 내부 구현에는 DEV 분기, feature flag, 예외 경로가 많습니다. 처음부터 모든 분기를 같은 비중으로 읽으면 핵심 호출 경로가 흐려집니다.',
          fnHints: ['DEV branch', 'feature flag', 'exception path'],
        },
      ],
      bannerLines: ['읽는 것의 끝은', '기억이 아니라 재구성이다.'],
    },
    rules: {
      eyebrow: 'compression rules',
      title: '호출 경로 압축의 기본 규칙',
      intro: '긴 구현 흐름을 압축할 때는 무작정 줄이는 것이 아니라 핵심 전환 지점을 남겨야 합니다.',
      examplesLabel: '예시',
      cards: [
        {
          number: '1',
          title: 'API 입구',
          body: '사용자 코드 또는 public API에서 시작되는 첫 진입점을 찾습니다.',
          examples: ['setState', 'useState', 'use(Promise)'],
          kind: 'api',
        },
        {
          number: '2',
          title: '핵심 상태 생성 지점',
          body: 'update 객체, lane, thenable state처럼 이후 흐름을 움직이는 핵심 정보가 만들어지는 지점을 찾습니다.',
          examples: ['requestUpdateLane', 'createUpdate', 'thenable tracking'],
          kind: 'lane',
        },
        {
          number: '3',
          title: '다음 phase로 넘어가는 함수',
          body: 'Scheduling에서 Render로, Render에서 Commit으로 넘어가는 연결 지점을 남깁니다.',
          examples: ['scheduleUpdateOnFiber', 'ensureRootIsScheduled', 'performUnitOfWork'],
          kind: 'scheduling',
        },
        {
          number: '4',
          title: '실제 반영 지점',
          body: '최종적으로 DOM, effect, retry 같은 실제 결과로 이어지는 지점을 확인합니다.',
          examples: ['commitMutationEffects', 'commitLayoutEffects', 'retry'],
          kind: 'result',
        },
      ],
    },
    setStateFlow: {
      eyebrow: 'setState compression',
      title: 'setState 흐름 압축',
      intro:
        'setState 흐름은 많은 함수를 거치지만, 처음에는 렌더링 예약으로 이어지는 핵심 경로만 남깁니다.',
      summaryLabel: '한 줄 요약',
      summaryLines: [
        '상태 변경 요청이 lane을 받고',
        'root에 pending work로 표시된 뒤',
        '렌더링 예약 흐름으로 넘어간다.',
      ],
      flow: [
        {
          fn: 'setState',
          kind: 'api',
          note: '사용자 코드에서 상태 변경 요청이 시작됩니다.',
        },
        {
          fn: 'requestUpdateLane',
          kind: 'lane',
          note: '이 update가 어떤 우선순위로 처리될지 lane을 선택합니다.',
        },
        {
          fn: 'scheduleUpdateOnFiber',
          kind: 'scheduling',
          note: 'update가 발생한 Fiber에서 root 방향으로 scheduling 흐름을 연결합니다.',
        },
        {
          fn: 'markRootUpdated',
          kind: 'scheduling',
          note: 'root에 pending work가 있음을 표시합니다.',
        },
        {
          fn: 'root scheduling',
          kind: 'render',
          note: 'root가 언제 작업을 수행할지 예약합니다.',
        },
        {
          fn: 'render work',
          kind: 'render',
          note: '예약된 작업이 render phase로 이어집니다.',
        },
      ],
    },
    useStateFlow: {
      eyebrow: 'useState compression',
      title: 'useState public API 흐름 압축',
      intro:
        'useState 독해는 public API에서 실제 Hook 구현으로 내려가는 흐름으로 압축할 수 있습니다.',
      flow: [
        { fn: 'useState', kind: 'api', note: 'public API' },
        { fn: 'resolveDispatcher', kind: 'scheduling', note: 'bridge: 현재 dispatcher 선택' },
        { fn: 'dispatcher.useState', kind: 'scheduling', note: 'dispatcher method 호출' },
        { fn: 'ReactFiberHooks', kind: 'result', note: '실제 Hook 구현' },
      ],
      oneLineSummary:
        'useState는 직접 상태 큐를 처리하지 않고, 현재 dispatcher를 통해 실제 Hook 구현으로 내려간다.',
      relatedNote: '이 흐름은 앞선 페이지 "Public API에서 내부 구현까지"의 독해 루틴과 연결됩니다.',
    },
    suspenseFlow: {
      eyebrow: 'suspense retry compression',
      title: 'Suspense retry 흐름 압축',
      intro:
        'Suspense 관련 코드는 복잡해 보이지만, 처음에는 Promise pending에서 retry까지의 큰 경로를 잡는 것이 중요합니다.',
      flow: [
        { fn: 'use(Promise)', kind: 'api', note: 'API 입구' },
        { fn: 'thenable tracking', kind: 'lane', note: 'pending 상태 추적' },
        { fn: 'suspend', kind: 'scheduling', note: '렌더링 중단' },
        { fn: 'boundary capture', kind: 'render', note: 'Suspense boundary가 포착' },
        { fn: 'retry', kind: 'result', note: 'Promise 해결 시 재시도' },
      ],
      oneLineSummary:
        'Promise가 pending 상태이면 thenable을 추적하고, Suspense boundary가 이를 포착한 뒤 해결 시 다시 시도하는 흐름으로 이어진다.',
      readingPoint:
        '처음부터 모든 예외 분기를 읽기보다 pending → suspend → capture → retry 흐름을 먼저 남깁니다.',
    },
    orderMatching: {
      eyebrow: 'order matching',
      title: '순서 맞추기',
      intro: '아래 함수 카드를 올바른 호출 경로로 복원해봅니다.',
      shuffledLabel: '섞인 함수 카드',
      correctLabel: '복원 경로',
      explanationLabel: '설명',
      shuffled: [
        { id: 'sched', fn: 'scheduleUpdateOnFiber' },
        { id: 'set-state', fn: 'setState' },
        { id: 'request-lane', fn: 'requestUpdateLane' },
        { id: 'mark-root', fn: 'markRootUpdated' },
      ],
      correctOrder: ['set-state', 'request-lane', 'sched', 'mark-root'],
      explanation:
        '상태 변경 요청은 먼저 update 우선순위를 받고, Fiber scheduling 흐름으로 연결된 뒤, root에 pending work로 표시됩니다.',
      resetLabel: '초기화',
      revealLabel: '정답 보기',
      progressLabel: '현재 복원 순서',
    },
    readingNote: {
      eyebrow: 'practical reading note',
      title: '실전 독해 노트 작성 패널',
      intro:
        '호출 경로 압축은 노트로 남길 때 가장 강력합니다. 다음 형식으로 읽은 내용을 정리해보세요.',
      noteHeader: 'reading-note.md',
      fields: [
        {
          label: '주제',
          value: 'setState scheduling',
          format: 'code',
        },
        {
          label: '한 줄 요약',
          value:
            '업데이트는 lane을 받고 root에 pending work로 표시된 뒤 렌더링 예약 흐름으로 넘어간다.',
          format: 'text',
        },
        {
          label: '핵심 함수',
          value: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
          format: 'code-list',
        },
        {
          label: 'phase 흐름',
          value: ['API call', 'lane selection', 'root marking', 'scheduling', 'render entry'],
          format: 'flow',
        },
        {
          label: '다음에 확인할 파일',
          value: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          format: 'code-list',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, 대표 흐름 3개를 직접 압축해봅니다.',
      items: [
        'setState scheduling 흐름을 5단계 이하로 줄인다.',
        'useState public API 흐름을 4단계로 요약한다.',
        'Suspense retry 흐름을 한 줄로 적는다.',
        '세 흐름의 공통점과 차이를 비교한다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '소스코드는 읽은 뒤 반드시 압축해야 한다.',
          sub: '읽기만 하면 함수 이름은 남지만 흐름은 남지 않는다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: '좋은 압축은 핵심 단계를 잃지 않으면서 길이를 줄인다.',
          sub: 'API 입구 / 핵심 상태 생성 / phase 전환 / 실제 반영을 남긴다.',
          tone: 'violet',
        },
        {
          number: '03',
          text: '한 줄 호출 경로는 이후 복습과 설명의 기준이 된다.',
          sub: '재구성이 가능한 정리만 지식으로 남는다.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: '다음 단계',
      title: '테스트 코드는 실행 가능한 문서다',
      description: '흐름은 압축했다. 이제 구현 의도가 맞는지 테스트로 확인해야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/verify-intent-with-tests',
    },
  },
  en: {
    hero: {
      badge: 'React source reading routine',
      titleLines: ['Restore the update flow', 'as a single call path'],
      accentTail: 'as a single call path',
      description:
        'Even after reading dozens of functions, you should be able to state the core flow in one line.',
      supporting:
        "React's internals are scattered across many files and functions. After reading, keep only the public API entry, the core state-creation point, the phase-switch functions, and the actual application point — and compress them into a re-explainable call path.",
      primaryCta: 'See the setState flow',
      secondaryCta: 'Try order matching',
      visualTitle: 'Restore scattered functions into a call path',
      leftPanelTitle: 'Scattered function cards',
      leftFunctions: [
        'scheduleUpdateOnFiber',
        'markRootUpdated',
        'setState',
        'requestUpdateLane',
        'performUnitOfWork',
        'ensureRootIsScheduled',
      ],
      leftCaption: 'Remembering function names alone leaves the flow in pieces.',
      connectorLabel: 'Compress',
      connectorSub: 'Reduce to the core path',
      rightPanelTitle: 'Single-line call path',
      rightFlow: [
        { fn: 'setState', kind: 'api' },
        { fn: 'requestUpdateLane', kind: 'lane' },
        { fn: 'scheduleUpdateOnFiber', kind: 'scheduling' },
        { fn: 'markRootUpdated', kind: 'scheduling' },
        { fn: 'root scheduling', kind: 'render' },
      ],
      rightCaption: 'Compressed to its core, you can explain it again later.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'After reading many React internal functions,',
        'how do you keep only the {emphasize}?',
      ],
      emphasize: 'core flow',
      badges: [
        { label: 'Call Path' },
        { label: 'Flow Compression' },
        { label: 'setState', kind: 'api' },
        { label: 'Scheduling', kind: 'scheduling' },
      ],
    },
    whyCompress: {
      eyebrow: 'why compress',
      title: 'Why long code must be compressed',
      intro:
        'Reading a lot of source does not become knowledge if you cannot describe the flow at the end.',
      cards: [
        {
          number: '01',
          title: 'You remember the names but not the whole flow',
          body: 'Seeing requestUpdateLane, scheduleUpdateOnFiber, and markRootUpdated separately is not enough — without their order and roles, you get stuck at the same point again.',
          fnHints: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'markRootUpdated'],
        },
        {
          number: '02',
          title: 'Drowning in branches loses the core path',
          body: 'React internals are full of DEV branches, feature flags, and exception paths. Reading them all with equal weight from the start blurs the core call path.',
          fnHints: ['DEV branch', 'feature flag', 'exception path'],
        },
      ],
      bannerLines: ['The end of reading is', 'reconstruction, not memorization.'],
    },
    rules: {
      eyebrow: 'compression rules',
      title: 'Basic rules of call-path compression',
      intro:
        'When compressing a long implementation flow, do not just shrink — keep the core transition points.',
      examplesLabel: 'Examples',
      cards: [
        {
          number: '1',
          title: 'API entry',
          body: 'Find the first entry called by user code or a public API.',
          examples: ['setState', 'useState', 'use(Promise)'],
          kind: 'api',
        },
        {
          number: '2',
          title: 'Core state-creation point',
          body: 'Find where the data that drives the rest is created — the update object, lane, or thenable state.',
          examples: ['requestUpdateLane', 'createUpdate', 'thenable tracking'],
          kind: 'lane',
        },
        {
          number: '3',
          title: 'Phase-switch function',
          body: 'Keep the connections that hand off from Scheduling to Render or Render to Commit.',
          examples: ['scheduleUpdateOnFiber', 'ensureRootIsScheduled', 'performUnitOfWork'],
          kind: 'scheduling',
        },
        {
          number: '4',
          title: 'Real application point',
          body: 'Confirm the final point that leads into the real result — DOM, effects, or retry.',
          examples: ['commitMutationEffects', 'commitLayoutEffects', 'retry'],
          kind: 'result',
        },
      ],
    },
    setStateFlow: {
      eyebrow: 'setState compression',
      title: 'setState flow compression',
      intro:
        'setState passes through many functions, but at first keep only the core path that leads into render scheduling.',
      summaryLabel: 'One-line summary',
      summaryLines: [
        'A state-change request gets a lane,',
        'gets marked on the root as pending work,',
        'and flows into render scheduling.',
      ],
      flow: [
        { fn: 'setState', kind: 'api', note: 'A state-change request starts in user code.' },
        {
          fn: 'requestUpdateLane',
          kind: 'lane',
          note: 'Pick the lane that decides at what priority this update is handled.',
        },
        {
          fn: 'scheduleUpdateOnFiber',
          kind: 'scheduling',
          note: 'Wire the scheduling flow from the affected Fiber up to the root.',
        },
        {
          fn: 'markRootUpdated',
          kind: 'scheduling',
          note: 'Mark on the root that there is pending work.',
        },
        {
          fn: 'root scheduling',
          kind: 'render',
          note: 'Schedule when the root will run the work.',
        },
        { fn: 'render work', kind: 'render', note: 'The scheduled work continues into render.' },
      ],
    },
    useStateFlow: {
      eyebrow: 'useState compression',
      title: 'useState public API flow compression',
      intro:
        'Reading useState compresses into the flow that goes from the public API down to the Hook implementation.',
      flow: [
        { fn: 'useState', kind: 'api', note: 'public API' },
        {
          fn: 'resolveDispatcher',
          kind: 'scheduling',
          note: 'bridge: pick the current dispatcher',
        },
        { fn: 'dispatcher.useState', kind: 'scheduling', note: 'call the dispatcher method' },
        { fn: 'ReactFiberHooks', kind: 'result', note: 'real Hook implementation' },
      ],
      oneLineSummary:
        'useState does not handle the state queue directly — it delegates through the current dispatcher down to the real Hook implementation.',
      relatedNote:
        'This flow connects to the "From public API to implementation" routine from the earlier page.',
    },
    suspenseFlow: {
      eyebrow: 'suspense retry compression',
      title: 'Suspense retry flow compression',
      intro:
        'Suspense-related code looks complex, but at first you just need the big path from a pending Promise to retry.',
      flow: [
        { fn: 'use(Promise)', kind: 'api', note: 'API entry' },
        { fn: 'thenable tracking', kind: 'lane', note: 'track pending state' },
        { fn: 'suspend', kind: 'scheduling', note: 'pause rendering' },
        { fn: 'boundary capture', kind: 'render', note: 'Suspense boundary catches it' },
        { fn: 'retry', kind: 'result', note: 'retry once the Promise resolves' },
      ],
      oneLineSummary:
        'A pending Promise is tracked as a thenable; a Suspense boundary catches it; when it resolves, the flow retries.',
      readingPoint:
        'Rather than reading every exception branch from the start, keep pending → suspend → capture → retry first.',
    },
    orderMatching: {
      eyebrow: 'order matching',
      title: 'Order matching',
      intro: 'Restore the function cards below into the correct call path.',
      shuffledLabel: 'Shuffled function cards',
      correctLabel: 'Restored path',
      explanationLabel: 'Explanation',
      shuffled: [
        { id: 'sched', fn: 'scheduleUpdateOnFiber' },
        { id: 'set-state', fn: 'setState' },
        { id: 'request-lane', fn: 'requestUpdateLane' },
        { id: 'mark-root', fn: 'markRootUpdated' },
      ],
      correctOrder: ['set-state', 'request-lane', 'sched', 'mark-root'],
      explanation:
        'A state-change request first gets an update priority, then flows through Fiber scheduling, and is finally marked on the root as pending work.',
      resetLabel: 'Reset',
      revealLabel: 'Reveal answer',
      progressLabel: 'Current order',
    },
    readingNote: {
      eyebrow: 'practical reading note',
      title: 'Practical reading-note panel',
      intro:
        'Call-path compression is strongest when written down. Capture what you read in the format below.',
      noteHeader: 'reading-note.md',
      fields: [
        {
          label: 'Topic',
          value: 'setState scheduling',
          format: 'code',
        },
        {
          label: 'One-line summary',
          value:
            'An update gets a lane, gets marked on the root as pending work, and flows into render scheduling.',
          format: 'text',
        },
        {
          label: 'Key functions',
          value: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
          format: 'code-list',
        },
        {
          label: 'Phase flow',
          value: ['API call', 'lane selection', 'root marking', 'scheduling', 'render entry'],
          format: 'flow',
        },
        {
          label: 'Files to check next',
          value: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          format: 'code-list',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro: 'Do not stop at reading — compress three representative flows yourself.',
      items: [
        'Reduce the setState scheduling flow to five steps or fewer.',
        'Summarize the useState public API flow into four steps.',
        'Write the Suspense retry flow as one line.',
        'Compare the three flows — what is common, what differs?',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Source code must be compressed after you read it.',
          sub: 'Just reading leaves function names — not the flow.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Good compression shrinks length without losing the core steps.',
          sub: 'Keep API entry / core state creation / phase switch / actual application.',
          tone: 'violet',
        },
        {
          number: '03',
          text: 'A single-line call path becomes the baseline for review and explanation.',
          sub: 'Only what you can reconstruct becomes knowledge.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: 'Next step',
      title: 'Test code is executable documentation',
      description: "You compressed the flow. Now verify the implementation's intent through tests.",
      cta: 'Go to the next page',
      href: '/verify-intent-with-tests',
    },
  },
};
