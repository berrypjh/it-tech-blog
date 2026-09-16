import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type BranchId = 'priority' | 'replay' | 'action';

export type Branch = {
  id: BranchId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type RecapStepId =
  | 'prop'
  | 'root'
  | 'priority'
  | 'fiber'
  | 'plugin'
  | 'synthetic'
  | 'accumulate'
  | 'queue'
  | 'run';

export type RecapStep = {
  id: RecapStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type Extension = {
  id: BranchId;
  title: string;
  role: string;
  description: string;
  snippet: string;
  tone: ToneKey;
};

export type AttachRow = {
  branch: string;
  stage: string;
  effect: string;
};

export type PriorityReplayActionContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    pipelineLabel: string;
    branches: Branch[];
  };
  recap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RecapStep[];
    note: string;
  };
  extensions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Extension[];
    note: string;
  };
  attach: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: AttachRow[];
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
  finale: FinaleBannerContent;
};

const REPLAY_CODE = `// hydration이 끝나지 않아 막혔을 때
export function queueIfContinuousEvent(
  blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent,
) {
  switch (domEventName) {
    case 'focusin':
      queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedFocus, blockedOn, domEventName, eventSystemFlags,
        targetContainer, nativeEvent,
      );
      return true;
    case 'dragenter':
    case 'mouseover':
    case 'pointerover':
      // ... 타입별로 한 개씩만 보관한다
      return true;
  }
  return false;
}

// hydration이 끝난 뒤 다시 꺼내 실행한다
export function replayUnblockedEvents() {
  hasScheduledReplayAttempt = false;

  while (queuedExplicitHydrationTargets.length > 0) {
    const nextDiscreteEvent = queuedDiscreteEvents[0];
    attemptReplayContinuousQueuedEvent(nextDiscreteEvent);
  }
}`;

const REACT_DOM_EVENT_REPLAYING_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js';

const ko: PriorityReplayActionContent = {
  hero: {
    badge: '이벤트 시스템 · 10/10단계',
    title: { line1: '이벤트 시스템은', line2: '핸들러 실행기로 끝나지 않는다' },
    description:
      '같은 파이프라인에서 업데이트 우선순위가 정해지고, hydration 중에는 이벤트가 보류되며, form의 action이 실행됩니다.',
    diagramBadge: 'three branches',
    diagramCaption: 'one pipeline, three exits',
    pipelineLabel: '이벤트 파이프라인',
    branches: [
      {
        id: 'priority',
        label: 'Event Priority',
        caption: '핸들러 안 setState의 lane을 정한다',
        tone: 'amber',
      },
      {
        id: 'replay',
        label: 'Hydration Replay',
        caption: '아직 연결 전이면 보관했다 다시 실행',
        tone: 'indigo',
      },
      {
        id: 'action',
        label: 'Form Action',
        caption: 'submit을 React 19 action으로 연결',
        tone: 'teal',
      },
    ],
  },
  recap: {
    badge: '01',
    eyebrow: 'recap',
    title: '아홉 페이지를 아홉 칸으로',
    description:
      '클릭 한 번이 지나는 길을 다시 한 줄로 세웠습니다. 각 칸이 앞선 페이지 하나씩에 대응합니다.',
    steps: [
      {
        id: 'prop',
        num: '01',
        title: 'onClick prop 선언',
        description: 'DOM에는 아무것도 붙지 않고 Fiber props에만 함수가 담깁니다.',
        tone: 'sky',
      },
      {
        id: 'root',
        num: '02',
        title: 'root의 native listener',
        description: 'createRoot가 지원 이벤트를 capture·bubble 두 벌로 미리 등록합니다.',
        tone: 'cyan',
      },
      {
        id: 'priority',
        num: '03',
        title: 'wrapper와 우선순위',
        description: '이벤트 이름으로 등급을 정하고 dispatch 함수를 고릅니다.',
        tone: 'amber',
      },
      {
        id: 'fiber',
        num: '04',
        title: 'DOM target → Fiber',
        description: '내부 키를 읽어 가장 가까운 Fiber를 찾습니다.',
        tone: 'indigo',
      },
      {
        id: 'plugin',
        num: '05',
        title: 'Plugin Event System',
        description: '플러그인들이 차례로 훑으며 무엇을 만들지 정합니다.',
        tone: 'violet',
      },
      {
        id: 'synthetic',
        num: '06',
        title: 'SyntheticEvent 생성',
        description: 'native event를 감싼 React 전용 객체를 만듭니다.',
        tone: 'teal',
      },
      {
        id: 'accumulate',
        num: '07',
        title: 'Fiber를 타고 리스너 수집',
        description: 'target에서 루트까지 한 번 올라가며 핸들러를 모읍니다.',
        tone: 'blue',
      },
      {
        id: 'queue',
        num: '08',
        title: 'dispatchQueue 구성',
        description: '이벤트와 리스너 목록을 한 쌍으로 큐에 담습니다.',
        tone: 'indigo',
      },
      {
        id: 'run',
        num: '09',
        title: '순서대로 실행',
        description: 'capture는 역순, bubble은 정순으로 훑으며 핸들러를 부릅니다.',
        tone: 'emerald',
      },
    ],
    note: '01부터 08까지는 준비입니다. 우리가 쓴 함수가 실제로 실행되는 것은 09 한 칸뿐입니다.',
  },
  extensions: {
    badge: '02',
    eyebrow: 'three extensions',
    title: '같은 파이프라인이 떠받치는 세 가지',
    description:
      '이벤트 시스템이 핸들러만 부르고 끝났다면 아래 셋은 다른 곳에 따로 있어야 했을 것입니다.',
    items: [
      {
        id: 'priority',
        title: 'Event Priority',
        role: '스케줄러와의 접점',
        description:
          'wrapper가 세운 우선순위 문맥 안에서 setState가 불립니다. 그래서 클릭발 업데이트가 스크롤발 업데이트보다 급해집니다.',
        snippet: 'setCurrentUpdatePriority(DiscreteEventPriority)',
        tone: 'amber',
      },
      {
        id: 'replay',
        title: 'Hydration Replay',
        role: '연결 전 입력 보존',
        description:
          '서버 HTML이 아직 React와 연결되지 않았으면 이벤트를 버리지 않고 보관했다가, 연결된 뒤 다시 실행합니다.',
        snippet: 'queueIfContinuousEvent → replayUnblockedEvents',
        tone: 'indigo',
      },
      {
        id: 'action',
        title: 'Form Action',
        role: 'React 19 연결',
        description:
          'form의 action prop이 함수면 플러그인이 기본 제출을 막고 transition 안에서 그 함수를 실행합니다.',
        snippet: 'FormActionEventPlugin → startHostTransition',
        tone: 'teal',
      },
    ],
    note: '셋 다 새 시스템이 아니라 기존 파이프라인의 특정 칸에 얹힌 분기입니다. 읽을 코드가 그만큼 줄어듭니다.',
  },
  attach: {
    badge: '03',
    eyebrow: 'where they attach',
    title: '아홉 칸 중 어디에 붙는가',
    description:
      '각 확장이 앞의 복습 표 몇 번 칸에서 갈라지는지 짚어 두면, 디버깅할 때 어느 파일을 열지가 분명해집니다.',
    headers: ['확장', '붙는 칸', '무엇을 바꾸나'],
    rows: [
      {
        branch: 'Event Priority',
        stage: '03 wrapper 선택',
        effect:
          '실행 직전 update priority를 갈아 끼웁니다. 핸들러 안 모든 setState가 이 문맥을 물려받습니다.',
      },
      {
        branch: 'Hydration Replay',
        stage: '04 Fiber 찾기',
        effect:
          'blockedOn이 null이 아니면 05로 넘어가지 않고 이벤트를 큐에 보관합니다. 파이프라인이 잠시 멈춥니다.',
      },
      {
        branch: 'Form Action',
        stage: '05 플러그인',
        effect:
          'submit일 때만 FormActionEventPlugin이 끼어들어 기본 동작 대신 action 실행을 예약합니다.',
      },
    ],
    note: '세 갈래가 서로 다른 칸에 붙어 있다는 점이 중요합니다. 증상이 어디서 나는지로 어느 확장 문제인지 좁힐 수 있습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js',
    lookForLabel: '볼 것',
    lookFor: 'queueIfContinuousEvent, replayUnblockedEvents, attemptReplayContinuousQueuedEvent',
    whyLabel: '설명',
    why: 'continuous 이벤트를 타입마다 한 개씩만 보관한다는 점이, replay가 큐 재생이 아니라 마지막 상태 복원임을 보여 줍니다.',
    code: REPLAY_CODE,
    primaryCta: 'ReactDOMEventReplaying.js 읽기',
    primaryHref: REACT_DOM_EVENT_REPLAYING_HREF,
  },
  finale: {
    progressLabel: '11/14 챕터 완료',
    copyLine1: '클릭 한 번이 어디를 지나',
    copyLine2: '핸들러에 닿는지 끝까지 읽었습니다.',
    copyLine3: '다음은 Scheduler와 우선순위입니다.',
    primaryCta: 'Scheduler와 우선순위 읽기',
    primaryHref: '/why-not-immediate',
    secondaryCta: '이벤트 챕터 처음부터 다시 보기',
    secondaryHref: '/why-event-system',
  },
};

const REPLAY_CODE_EN = `// when hydration has not finished and the event is blocked
export function queueIfContinuousEvent(
  blockedOn, domEventName, eventSystemFlags, targetContainer, nativeEvent,
) {
  switch (domEventName) {
    case 'focusin':
      queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
        queuedFocus, blockedOn, domEventName, eventSystemFlags,
        targetContainer, nativeEvent,
      );
      return true;
    case 'dragenter':
    case 'mouseover':
    case 'pointerover':
      // ... only one is kept per type
      return true;
  }
  return false;
}

// once hydration completes, take them back out and run them
export function replayUnblockedEvents() {
  hasScheduledReplayAttempt = false;

  while (queuedExplicitHydrationTargets.length > 0) {
    const nextDiscreteEvent = queuedDiscreteEvents[0];
    attemptReplayContinuousQueuedEvent(nextDiscreteEvent);
  }
}`;

const en: PriorityReplayActionContent = {
  hero: {
    badge: 'Event System · 10/10',
    title: { line1: 'The event system is', line2: 'more than a handler runner' },
    description:
      'The same pipeline decides update priority, holds events back during hydration, and runs a form action.',
    diagramBadge: 'three branches',
    diagramCaption: 'one pipeline, three exits',
    pipelineLabel: 'event pipeline',
    branches: [
      {
        id: 'priority',
        label: 'Event Priority',
        caption: 'sets the lane for setState in your handler',
        tone: 'amber',
      },
      {
        id: 'replay',
        label: 'Hydration Replay',
        caption: 'holds and re-runs events before wiring completes',
        tone: 'indigo',
      },
      {
        id: 'action',
        label: 'Form Action',
        caption: 'routes submit into a React 19 action',
        tone: 'teal',
      },
    ],
  },
  recap: {
    badge: '01',
    eyebrow: 'recap',
    title: 'Nine pages as nine stops',
    description:
      'The path of a single click, lined up once more. Each stop maps to one of the earlier pages.',
    steps: [
      {
        id: 'prop',
        num: '01',
        title: 'The onClick prop',
        description: 'Nothing attaches to the DOM; the function only lands in Fiber props.',
        tone: 'sky',
      },
      {
        id: 'root',
        num: '02',
        title: 'Native listeners on the root',
        description: 'createRoot pre-registers supported events in capture and bubble pairs.',
        tone: 'cyan',
      },
      {
        id: 'priority',
        num: '03',
        title: 'Wrapper and priority',
        description: 'Grade the event by name and pick the dispatch function.',
        tone: 'amber',
      },
      {
        id: 'fiber',
        num: '04',
        title: 'DOM target → Fiber',
        description: 'Read the internal key to find the closest Fiber.',
        tone: 'indigo',
      },
      {
        id: 'plugin',
        num: '05',
        title: 'Plugin Event System',
        description: 'Plugins inspect in turn and decide what to produce.',
        tone: 'violet',
      },
      {
        id: 'synthetic',
        num: '06',
        title: 'Create the SyntheticEvent',
        description: 'Build the React-specific object wrapping the native event.',
        tone: 'teal',
      },
      {
        id: 'accumulate',
        num: '07',
        title: 'Collect listeners along Fibers',
        description: 'Climb once from target to root gathering handlers.',
        tone: 'blue',
      },
      {
        id: 'queue',
        num: '08',
        title: 'Build the dispatchQueue',
        description: 'Store the event and its listener list as one pair.',
        tone: 'indigo',
      },
      {
        id: 'run',
        num: '09',
        title: 'Run them in order',
        description: 'Sweep capture in reverse and bubble in order, invoking each handler.',
        tone: 'emerald',
      },
    ],
    note: 'Stops 01 through 08 are all preparation. The function you wrote actually runs at exactly one stop: 09.',
  },
  extensions: {
    badge: '02',
    eyebrow: 'three extensions',
    title: 'Three things the same pipeline carries',
    description:
      'Had the event system stopped at calling handlers, each of these would have needed a separate home.',
    items: [
      {
        id: 'priority',
        title: 'Event Priority',
        role: 'The scheduler seam',
        description:
          'setState runs inside the priority context the wrapper raised, which is why a click-driven update outranks a scroll-driven one.',
        snippet: 'setCurrentUpdatePriority(DiscreteEventPriority)',
        tone: 'amber',
      },
      {
        id: 'replay',
        title: 'Hydration Replay',
        role: 'Preserving early input',
        description:
          'If server HTML is not wired to React yet, the event is stored rather than dropped and replayed once wiring completes.',
        snippet: 'queueIfContinuousEvent → replayUnblockedEvents',
        tone: 'indigo',
      },
      {
        id: 'action',
        title: 'Form Action',
        role: 'The React 19 hookup',
        description:
          'When a form action prop is a function, the plugin blocks the default submit and runs that function inside a transition.',
        snippet: 'FormActionEventPlugin → startHostTransition',
        tone: 'teal',
      },
    ],
    note: 'None of the three is a new system; each is a branch grafted onto one stop of the existing pipeline.',
  },
  attach: {
    badge: '03',
    eyebrow: 'where they attach',
    title: 'Which of the nine stops each hooks into',
    description:
      'Knowing which stop an extension branches from makes it obvious which file to open when something misbehaves.',
    headers: ['Extension', 'Stop it attaches to', 'What it changes'],
    rows: [
      {
        branch: 'Event Priority',
        stage: '03 wrapper selection',
        effect:
          'Swaps the update priority just before execution, so every setState in the handler inherits that context.',
      },
      {
        branch: 'Hydration Replay',
        stage: '04 finding the Fiber',
        effect:
          'When blockedOn is not null the pipeline pauses instead of reaching 05, and the event is queued.',
      },
      {
        branch: 'Form Action',
        stage: '05 plugins',
        effect:
          'Only for submit, FormActionEventPlugin steps in and schedules the action instead of the default.',
      },
    ],
    note: 'That the three attach at different stops matters: where a symptom appears narrows down which extension is involved.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js',
    lookForLabel: 'Look for',
    lookFor: 'queueIfContinuousEvent, replayUnblockedEvents, attemptReplayContinuousQueuedEvent',
    whyLabel: 'Why',
    why: 'Keeping only one continuous event per type shows replay is about restoring the final state, not replaying a queue.',
    code: REPLAY_CODE_EN,
    primaryCta: 'Read ReactDOMEventReplaying.js',
    primaryHref: REACT_DOM_EVENT_REPLAYING_HREF,
  },
  finale: {
    progressLabel: 'Chapter 11 of 14 complete',
    copyLine1: 'You followed one click',
    copyLine2: 'all the way to the handler.',
    copyLine3: 'Next comes the Scheduler and priority.',
    primaryCta: 'Read the Scheduler and priority',
    primaryHref: '/why-not-immediate',
    secondaryCta: 'Restart the event chapter',
    secondaryHref: '/why-event-system',
  },
};

export const priorityReplayActionContent: Record<Locale, PriorityReplayActionContent> = { ko, en };
