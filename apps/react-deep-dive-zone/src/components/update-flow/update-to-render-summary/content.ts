import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type FlowStepIconName =
  | 'mousePointer'
  | 'code'
  | 'workflow'
  | 'search'
  | 'panels'
  | 'server'
  | 'circleHelp'
  | 'database'
  | 'gitBranch'
  | 'flag'
  | 'zap'
  | 'checkCircle'
  | 'clock'
  | 'hourglass';

export type FlowStep = {
  number: string;
  title: string;
  description: string;
  iconName: FlowStepIconName;
  tone: ToneKey;
  final?: boolean;
};

export type RoleTableRow = {
  order: string;
  fn: string;
  role: string;
  point: string;
  tone: ToneKey;
  final?: boolean;
};

export type SourcePathFunction = {
  name: string;
  body: string;
};

export type SourcePathCard = {
  number: string;
  file: string;
  functions: SourcePathFunction[];
  followBoxTitle?: string;
  followBoxBody?: string;
  tone: ToneKey;
};

export type MisconceptionIconName = 'panels' | 'database' | 'zap';

export type MisconceptionCard = {
  badge: string;
  title: string;
  correction: string;
  iconName: MisconceptionIconName;
};

export type NextChapterItem = {
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'workflow' | 'penTool' | 'layers' | 'checkCircle';
};

export type UpdateToRenderSummaryContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      steps: FlowStep[];
    };
  };
  bigFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  roleTable: {
    number: string;
    eyebrow: string;
    title: string;
    columns: { order: string; fn: string; role: string; point: string };
    rows: RoleTableRow[];
  };
  sourcePath: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SourcePathCard[];
  };
  misconceptions: {
    number: string;
    eyebrow: string;
    title: string;
    cards: MisconceptionCard[];
    summary: string;
  };
  nextChapter: {
    number: string;
    eyebrow: string;
    title: string;
    previewQuestion: string;
    rightTitle: string;
    rightItems: NextChapterItem[];
  };
  finale: FinaleBannerContent;
};

const flowStepsKo: FlowStep[] = [
  {
    number: '1',
    title: '사용자 클릭',
    description: '이벤트 발생',
    iconName: 'mousePointer',
    tone: 'sky',
  },
  { number: '2', title: 'setState', description: '상태 변경 요청', iconName: 'code', tone: 'sky' },
  {
    number: '3',
    title: 'dispatchSetState',
    description: '업데이트 호출 진입점',
    iconName: 'workflow',
    tone: 'cyan',
  },
  {
    number: '4',
    title: 'requestUpdateLane',
    description: '우선순위(lane) 선택',
    iconName: 'search',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'dispatchSetStateInternal',
    description: '내부 처리 위임',
    iconName: 'panels',
    tone: 'emerald',
  },
  {
    number: '6',
    title: 'update 객체 생성',
    description: '업데이트 객체 구성',
    iconName: 'server',
    tone: 'emerald',
  },
  {
    number: '7',
    title: 'eager bailout 검사',
    description: '같은 상태면 렌더 예약 생략',
    iconName: 'circleHelp',
    tone: 'amber',
  },
  {
    number: '8',
    title: 'enqueueConcurrentHookUpdate',
    description: 'queue 처리 경로 진입',
    iconName: 'database',
    tone: 'teal',
  },
  {
    number: '9',
    title: 'Fiber / parent childLanes 표시',
    description: '상위 경로에 lane 전파',
    iconName: 'gitBranch',
    tone: 'teal',
  },
  {
    number: '10',
    title: 'Root 찾기',
    description: 'return 경로로 Root 탐색',
    iconName: 'flag',
    tone: 'sky',
  },
  {
    number: '11',
    title: 'scheduleUpdateOnFiber',
    description: 'Root에 pending work 등록',
    iconName: 'zap',
    tone: 'sky',
  },
  {
    number: '12',
    title: 'markRootUpdated',
    description: 'Root.pendingLanes 갱신',
    iconName: 'checkCircle',
    tone: 'emerald',
  },
  {
    number: '13',
    title: 'ensureRootIsScheduled',
    description: 'Root schedule 등록 및 microtask 예약',
    iconName: 'clock',
    tone: 'emerald',
  },
  {
    number: '14',
    title: 'Render Phase 대기',
    description: '다음 단계: Render Phase 시작',
    iconName: 'hourglass',
    tone: 'violet',
    final: true,
  },
];

const flowStepsEn: FlowStep[] = [
  {
    number: '1',
    title: 'User click',
    description: 'event fires',
    iconName: 'mousePointer',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'setState',
    description: 'state change requested',
    iconName: 'code',
    tone: 'sky',
  },
  {
    number: '3',
    title: 'dispatchSetState',
    description: 'entry point of the update',
    iconName: 'workflow',
    tone: 'cyan',
  },
  {
    number: '4',
    title: 'requestUpdateLane',
    description: 'pick the priority lane',
    iconName: 'search',
    tone: 'cyan',
  },
  {
    number: '5',
    title: 'dispatchSetStateInternal',
    description: 'delegate to the internal flow',
    iconName: 'panels',
    tone: 'emerald',
  },
  {
    number: '6',
    title: 'build update object',
    description: 'construct the update record',
    iconName: 'server',
    tone: 'emerald',
  },
  {
    number: '7',
    title: 'eager bailout check',
    description: 'skip render if state is unchanged',
    iconName: 'circleHelp',
    tone: 'amber',
  },
  {
    number: '8',
    title: 'enqueueConcurrentHookUpdate',
    description: 'enter the queue-processing path',
    iconName: 'database',
    tone: 'teal',
  },
  {
    number: '9',
    title: 'mark Fiber / parent childLanes',
    description: 'propagate the lane up the path',
    iconName: 'gitBranch',
    tone: 'teal',
  },
  {
    number: '10',
    title: 'find the Root',
    description: 'walk return pointers to the Root',
    iconName: 'flag',
    tone: 'sky',
  },
  {
    number: '11',
    title: 'scheduleUpdateOnFiber',
    description: 'register pending work on the Root',
    iconName: 'zap',
    tone: 'sky',
  },
  {
    number: '12',
    title: 'markRootUpdated',
    description: 'update Root.pendingLanes',
    iconName: 'checkCircle',
    tone: 'emerald',
  },
  {
    number: '13',
    title: 'ensureRootIsScheduled',
    description: 'put the Root on the schedule + microtask',
    iconName: 'clock',
    tone: 'emerald',
  },
  {
    number: '14',
    title: 'wait for Render Phase',
    description: 'next: the Render Phase begins',
    iconName: 'hourglass',
    tone: 'violet',
    final: true,
  },
];

const ko: UpdateToRenderSummaryContent = {
  hero: {
    badge: '업데이트 시작 · 10/10단계',
    title: {
      line1: 'setState 한 줄 뒤에는',
      line2: '긴 내부 준비 과정이',
      line3: '있습니다.',
    },
    description:
      'React는 업데이트를 객체로 만들고, 우선순위를 고르고, queue에 넣고, Fiber와 Root에 흔적을 남기고, Root를 스케줄에 올린 뒤 Render Phase로 넘어갑니다.',
    diagram: { title: '전체 흐름 요약', steps: flowStepsKo },
  },
  bigFlow: {
    number: '02',
    eyebrow: '대형 다이어그램',
    title: '전체 업데이트 흐름 대형 다이어그램',
    description:
      'Hero에서 본 흐름을 본문에서 한 번 더 큰 카드로 정리합니다. 각 단계의 의미를 오른쪽 설명에서 같이 확인하세요.',
    steps: flowStepsKo,
  },
  roleTable: {
    number: '03',
    eyebrow: '단계별 역할',
    title: '단계별 역할 표',
    columns: { order: '순서', fn: '함수 / 단계', role: '역할', point: '핵심 포인트' },
    rows: [
      {
        order: '1',
        fn: 'dispatchSetState',
        role: '업데이트 흐름 시작',
        point: '사용자 setState가 들어오는 실제 진입점',
        tone: 'sky',
      },
      {
        order: '2',
        fn: 'requestUpdateLane',
        role: '우선순위 선택',
        point: '업데이트가 어떤 lane에 속하는지 결정',
        tone: 'cyan',
      },
      {
        order: '3',
        fn: 'dispatchSetStateInternal',
        role: '내부 처리 위임',
        point: 'update 생성, eagerState 계산, bailout 확인 등',
        tone: 'emerald',
      },
      {
        order: '4',
        fn: 'update 객체 생성',
        role: '업데이트 데이터 구성',
        point: 'action, lane 등을 담은 update 객체 구성',
        tone: 'emerald',
      },
      {
        order: '5',
        fn: 'eager bailout',
        role: '렌더 예약 생략 가능성 판단',
        point: '같은 상태면 빠르게 bailout하고 렌더 예약 생략',
        tone: 'amber',
      },
      {
        order: '6',
        fn: 'enqueueConcurrentHookUpdate',
        role: 'queue 처리 경로 진입',
        point: 'fiber/queue/update/lane를 묶어 공통 경로로 등록',
        tone: 'teal',
      },
      {
        order: '7',
        fn: 'markUpdateLaneFromFiberToRoot',
        role: 'Fiber에서 Root까지 lane 전파',
        point: 'sourceFiber.lanes, parent.childLanes 갱신',
        tone: 'teal',
      },
      {
        order: '8',
        fn: 'getRootForUpdatedFiber',
        role: 'Root 찾기',
        point: 'return 포인터를 따라 Root까지 도달',
        tone: 'sky',
      },
      {
        order: '9',
        fn: 'scheduleUpdateOnFiber',
        role: 'Root pending work 등록',
        point: 'markRootUpdated를 호출해 Root에 일이 생겼음을 표시',
        tone: 'sky',
      },
      {
        order: '10',
        fn: 'markRootUpdated',
        role: 'Root.pendingLanes 갱신',
        point: 'Root.pendingLanes += lane',
        tone: 'emerald',
      },
      {
        order: '11',
        fn: 'ensureRootIsScheduled',
        role: 'Root schedule과 microtask 예약',
        point: 'Root schedule에 등록하고 microtask 예약 보장',
        tone: 'emerald',
      },
      {
        order: '12',
        fn: 'Render Phase 대기',
        role: '다음 단계로 연결',
        point: 'microtask에서 root schedule 처리 후 Render Phase 시작',
        tone: 'violet',
        final: true,
      },
    ],
  },
  sourcePath: {
    number: '04',
    eyebrow: '소스코드 경로',
    title: '한 줄씩 되짚는 소스코드 경로',
    description:
      '지금까지의 흐름이 실제로는 어떤 React 내부 파일들을 거쳐 갔는지 한 번 더 짚어봅니다.',
    cards: [
      {
        number: '1',
        file: 'ReactFiberHooks.js',
        tone: 'emerald',
        functions: [
          { name: 'mountState', body: 'useState의 초기화 과정에서 hook과 queue 생성' },
          { name: 'dispatchSetState', body: '사용자 setState가 들어오는 실제 진입점' },
          {
            name: 'dispatchSetStateInternal',
            body: 'lane 선택 이후 내부 처리 위임 (update 생성, eager bailout 등)',
          },
        ],
      },
      {
        number: '2',
        file: 'ReactFiberConcurrentUpdates.js',
        tone: 'sky',
        functions: [
          {
            name: 'enqueueConcurrentHookUpdate',
            body: 'fiber/queue/update/lane를 묶어 공통 queue 처리 경로로 등록',
          },
          {
            name: 'markUpdateLaneFromFiberToRoot',
            body: 'Fiber에서 Root까지 lane을 전파하며 작업 흔적을 남김',
          },
        ],
      },
      {
        number: '3',
        file: 'ReactFiberWorkLoop.js',
        tone: 'violet',
        functions: [
          { name: 'requestUpdateLane', body: '업데이트의 우선순위(lane) 결정' },
          {
            name: 'scheduleUpdateOnFiber',
            body: 'Root에 pending work를 등록하고 이후 root scheduling으로 연결',
          },
        ],
      },
      {
        number: '4',
        file: 'ReactFiberRootScheduler.js',
        tone: 'teal',
        functions: [
          {
            name: 'ensureRootIsScheduled',
            body: 'Root를 schedule 목록에 등록하고 microtask 예약을 보장',
          },
        ],
        followBoxTitle: '이후 흐름',
        followBoxBody: 'processRootScheduleInMicrotask → performWorkOnRoot → Render Phase 시작',
      },
    ],
  },
  misconceptions: {
    number: '06',
    eyebrow: '오해 정리',
    title: '흔한 오해 정리',
    cards: [
      {
        badge: '오해',
        title: 'setState = 즉시 화면 변경',
        correction: 'setState는 업데이트 요청을 등록할 뿐, DOM은 Render Phase 이후에 변경됩니다.',
        iconName: 'panels',
      },
      {
        badge: '오해',
        title: 'queue에 update가 들어가면 무조건 재렌더',
        correction: 'eager bailout 등으로 인해 같은 상태라면 렌더 예약이 생략될 수 있습니다.',
        iconName: 'database',
      },
      {
        badge: '오해',
        title: 'scheduleUpdateOnFiber가 곧 Render Phase 실행',
        correction:
          '이 함수는 Root에 일이 생겼음을 표시하고, 실제 렌더는 이후 스케줄링 단계에서 실행됩니다.',
        iconName: 'zap',
      },
    ],
    summary: '정확히는 업데이트 요청 등록 → 렌더 필요성 판단 → Root 스케줄링이 먼저다.',
  },
  nextChapter: {
    number: '07',
    eyebrow: '다음 챕터',
    title: '다음 챕터 예고',
    previewQuestion:
      '업데이트 요청이 Root까지 올라가고 스케줄에 등록되었다. 그렇다면 React는 이제 그 Root에서 어떤 방식으로 실제 렌더링 계산을 시작할까?',
    rightTitle: '다음: Reconciler와 Render Phase',
    rightItems: [
      {
        title: 'work loop',
        body: '작업을 작은 단위로 나눠 진행하는 루프',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        title: 'performUnitOfWork',
        body: '각 Fiber 노드를 처리하는 핵심 함수',
        tone: 'cyan',
        iconName: 'layers',
      },
      {
        title: 'beginWork',
        body: '무엇을 새로 만들지 계산',
        tone: 'violet',
        iconName: 'penTool',
      },
      {
        title: 'completeWork',
        body: '작업을 완료 단계로 마무리',
        tone: 'emerald',
        iconName: 'checkCircle',
      },
    ],
  },
  finale: {
    progressLabel: '7/15 챕터 완료',
    copyLine1: '업데이트가 어떻게',
    copyLine2: '시작되는지 따라갔습니다.',
    copyLine3: '이제 Render Phase로.',
    primaryCta: 'Reconciler와 Render Phase 읽기',
    primaryHref: '/render-phase',
    secondaryCta: '업데이트 흐름 처음부터 다시 보기',
    secondaryHref: '/state-update-start',
  },
};

const en: UpdateToRenderSummaryContent = {
  hero: {
    badge: 'Update Flow · 10/10',
    title: {
      line1: 'Behind a single setState call',
      line2: 'sits a long internal',
      line3: 'preparation flow.',
    },
    description:
      'React builds an update object, picks a priority, enqueues it, marks Fiber and Root, puts the Root on the schedule, and only then enters the Render Phase.',
    diagram: { title: 'Full flow summary', steps: flowStepsEn },
  },
  bigFlow: {
    number: '02',
    eyebrow: 'Big diagram',
    title: 'The full update flow at large',
    description:
      'The same flow as the hero — at body-section scale. Match each step with its short meaning on the right.',
    steps: flowStepsEn,
  },
  roleTable: {
    number: '03',
    eyebrow: 'Role table',
    title: 'Function / step role table',
    columns: { order: '#', fn: 'function / step', role: 'role', point: 'key point' },
    rows: [
      {
        order: '1',
        fn: 'dispatchSetState',
        role: 'starts the update flow',
        point: 'the real entry point of user setState',
        tone: 'sky',
      },
      {
        order: '2',
        fn: 'requestUpdateLane',
        role: 'picks the priority',
        point: 'decides which lane the update belongs to',
        tone: 'cyan',
      },
      {
        order: '3',
        fn: 'dispatchSetStateInternal',
        role: 'delegates internal work',
        point: 'creates the update, computes eagerState, checks bailout',
        tone: 'emerald',
      },
      {
        order: '4',
        fn: 'update object',
        role: 'builds update data',
        point: 'wraps action, lane and friends into the update record',
        tone: 'emerald',
      },
      {
        order: '5',
        fn: 'eager bailout',
        role: 'decides if render can be skipped',
        point: 'if state is unchanged, skip the render scheduling',
        tone: 'amber',
      },
      {
        order: '6',
        fn: 'enqueueConcurrentHookUpdate',
        role: 'enters the queue path',
        point: 'bundles fiber/queue/update/lane onto the shared path',
        tone: 'teal',
      },
      {
        order: '7',
        fn: 'markUpdateLaneFromFiberToRoot',
        role: 'propagates lane to Root',
        point: 'updates sourceFiber.lanes and parent.childLanes',
        tone: 'teal',
      },
      {
        order: '8',
        fn: 'getRootForUpdatedFiber',
        role: 'finds the Root',
        point: 'walks return pointers all the way up',
        tone: 'sky',
      },
      {
        order: '9',
        fn: 'scheduleUpdateOnFiber',
        role: 'registers pending Root work',
        point: 'calls markRootUpdated to record work on the Root',
        tone: 'sky',
      },
      {
        order: '10',
        fn: 'markRootUpdated',
        role: 'updates Root.pendingLanes',
        point: 'Root.pendingLanes += lane',
        tone: 'emerald',
      },
      {
        order: '11',
        fn: 'ensureRootIsScheduled',
        role: 'Root schedule + microtask',
        point: 'puts the Root on the schedule and reserves a microtask',
        tone: 'emerald',
      },
      {
        order: '12',
        fn: 'wait for Render Phase',
        role: 'hands off to the next step',
        point: 'the microtask processes the root schedule, then Render Phase begins',
        tone: 'violet',
        final: true,
      },
    ],
  },
  sourcePath: {
    number: '04',
    eyebrow: 'Source path',
    title: 'Retracing the path through source files',
    description: 'A second pass over which React internal files this whole flow actually visits.',
    cards: [
      {
        number: '1',
        file: 'ReactFiberHooks.js',
        tone: 'emerald',
        functions: [
          { name: 'mountState', body: 'creates the hook and queue during useState init' },
          { name: 'dispatchSetState', body: 'the real entry point of user setState' },
          {
            name: 'dispatchSetStateInternal',
            body: 'after lane pick, delegates internal work (update build, eager bailout, ...)',
          },
        ],
      },
      {
        number: '2',
        file: 'ReactFiberConcurrentUpdates.js',
        tone: 'sky',
        functions: [
          {
            name: 'enqueueConcurrentHookUpdate',
            body: 'bundles fiber/queue/update/lane onto the shared queue path',
          },
          {
            name: 'markUpdateLaneFromFiberToRoot',
            body: 'propagates the lane from the Fiber all the way to the Root',
          },
        ],
      },
      {
        number: '3',
        file: 'ReactFiberWorkLoop.js',
        tone: 'violet',
        functions: [
          { name: 'requestUpdateLane', body: 'decides the update lane' },
          {
            name: 'scheduleUpdateOnFiber',
            body: 'registers pending Root work, then hands off to root scheduling',
          },
        ],
      },
      {
        number: '4',
        file: 'ReactFiberRootScheduler.js',
        tone: 'teal',
        functions: [
          {
            name: 'ensureRootIsScheduled',
            body: 'puts the Root on the schedule and reserves a microtask',
          },
        ],
        followBoxTitle: 'what follows',
        followBoxBody: 'processRootScheduleInMicrotask → performWorkOnRoot → Render Phase begins',
      },
    ],
  },
  misconceptions: {
    number: '06',
    eyebrow: 'Myths debunked',
    title: 'Common misconceptions',
    cards: [
      {
        badge: 'MYTH',
        title: 'setState = immediate screen change',
        correction:
          'setState only registers the update request — the DOM changes after the Render Phase.',
        iconName: 'panels',
      },
      {
        badge: 'MYTH',
        title: 'a queued update always triggers a re-render',
        correction: 'eager bailout can skip the render schedule when state is unchanged.',
        iconName: 'database',
      },
      {
        badge: 'MYTH',
        title: 'scheduleUpdateOnFiber == running the Render Phase',
        correction:
          'it only marks that the Root has work. The real render runs in a later scheduling step.',
        iconName: 'zap',
      },
    ],
    summary:
      'Strictly speaking: register the request → judge whether to render → schedule the Root — in that order.',
  },
  nextChapter: {
    number: '07',
    eyebrow: 'Next chapter',
    title: 'Next chapter preview',
    previewQuestion:
      'The update request climbed up to the Root and landed on the schedule. So how does React actually start computing the new render from that Root?',
    rightTitle: 'Next: Reconciler and the Render Phase',
    rightItems: [
      {
        title: 'work loop',
        body: 'splits work into small units and iterates over them',
        tone: 'sky',
        iconName: 'workflow',
      },
      {
        title: 'performUnitOfWork',
        body: 'the core that processes each Fiber node',
        tone: 'cyan',
        iconName: 'layers',
      },
      {
        title: 'beginWork',
        body: 'computes what to build next',
        tone: 'violet',
        iconName: 'penTool',
      },
      {
        title: 'completeWork',
        body: 'finalizes the work for that unit',
        tone: 'emerald',
        iconName: 'checkCircle',
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 7 of 15 complete',
    copyLine1: 'You followed how an',
    copyLine2: 'update begins.',
    copyLine3: 'Now into the Render Phase.',
    primaryCta: 'Read the Reconciler & Render Phase',
    primaryHref: '/render-phase',
    secondaryCta: 'Review the update flow from the start',
    secondaryHref: '/state-update-start',
  },
};

export const updateToRenderSummaryContent: Record<Locale, UpdateToRenderSummaryContent> = {
  ko,
  en,
};
