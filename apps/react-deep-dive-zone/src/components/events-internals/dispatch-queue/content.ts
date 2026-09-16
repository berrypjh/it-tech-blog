import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type QueueEntry = {
  id: string;
  order: string;
  handler: string;
  phase: string;
  tone: ToneKey;
};

export type PartId = 'event' | 'listeners' | 'phase';

export type QueuePart = {
  id: PartId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type LoopStepId = 'take' | 'direction' | 'check' | 'set-target' | 'invoke';

export type LoopStep = {
  id: LoopStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type StopRow = {
  situation: string;
  runs: string;
  why: string;
};

export type DispatchQueueContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    queueLabel: string;
    entries: QueueEntry[];
    tailLabel: string;
  };
  shape: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    parts: QueuePart[];
    note: string;
  };
  loop: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: LoopStep[];
    note: string;
  };
  stopping: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: StopRow[];
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

const QUEUE_SHAPE_CODE = `// dispatchQueue 한 칸의 모양
type DispatchEntry = {
  event: SyntheticEvent;
  listeners: DispatchListener[];
};

type DispatchListener = {
  instance: Fiber | null;
  listener: Function;
  currentTarget: EventTarget;
};`;

const PROCESS_CODE = `function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  const inCapturePhase = (eventSystemFlags & IS_CAPTURE_PHASE) !== 0;

  for (let i = 0; i < dispatchQueue.length; i++) {
    const { event, listeners } = dispatchQueue[i];
    processDispatchQueueItemsInOrder(event, listeners, inCapturePhase);
  }
}

function processDispatchQueueItemsInOrder(event, dispatchListeners, inCapturePhase) {
  let previousInstance;

  if (inCapturePhase) {
    for (let i = dispatchListeners.length - 1; i >= 0; i--) {
      const { instance, currentTarget, listener } = dispatchListeners[i];
      if (instance !== previousInstance && event.isPropagationStopped()) {
        return;
      }
      executeDispatch(event, listener, currentTarget);
      previousInstance = instance;
    }
  } else {
    for (let i = 0; i < dispatchListeners.length; i++) {
      const { instance, currentTarget, listener } = dispatchListeners[i];
      if (instance !== previousInstance && event.isPropagationStopped()) {
        return;
      }
      executeDispatch(event, listener, currentTarget);
      previousInstance = instance;
    }
  }
}`;

const DOM_PLUGIN_EVENT_SYSTEM_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/DOMPluginEventSystem.js';

const ko: DispatchQueueContent = {
  hero: {
    badge: '이벤트 시스템 · 9/10단계',
    title: { line1: '리스너를 찾자마자', line2: '바로 부르지는 않는다' },
    description:
      '수집과 실행은 완전히 분리되어 있습니다. 먼저 dispatchQueue를 다 채운 뒤, 정해진 방향으로 한 번에 훑으며 실행합니다.',
    diagramBadge: 'dispatch queue',
    diagramCaption: 'collect all, then run',
    queueLabel: 'dispatchQueue[0].listeners',
    entries: [
      {
        id: 'section',
        order: '0',
        handler: 'handleSectionCapture',
        phase: 'onClickCapture',
        tone: 'violet',
      },
      { id: 'button', order: '0', handler: 'handleButtonClick', phase: 'onClick', tone: 'teal' },
      { id: 'div', order: '1', handler: 'handleDivClick', phase: 'onClick', tone: 'teal' },
    ],
    tailLabel: 'capture는 역순, bubble은 정순으로 실행',
  },
  shape: {
    badge: '01',
    eyebrow: 'queue shape',
    title: '큐 한 칸에 무엇이 들어 있나',
    description:
      'dispatchQueue는 리스너 배열이 아닙니다. 이벤트 하나와 그 이벤트가 부를 리스너 목록이 한 쌍으로 들어갑니다.',
    codeHeader: 'DispatchEntry',
    code: QUEUE_SHAPE_CODE,
    parts: [
      {
        id: 'event',
        name: 'event',
        role: '공유되는 한 개',
        description:
          '이 칸의 모든 리스너가 같은 SyntheticEvent 객체를 받습니다. stopPropagation이 통하는 이유입니다.',
        tone: 'teal',
      },
      {
        id: 'listeners',
        name: 'listeners',
        role: '자식에서 부모 순',
        description:
          '앞 페이지에서 올라가며 모은 순서 그대로입니다. 뒤집는 일은 실행 루프가 합니다.',
        tone: 'indigo',
      },
      {
        id: 'phase',
        name: 'currentTarget',
        role: '리스너마다 다름',
        description:
          '리스너가 붙어 있던 DOM 노드를 함께 들고 있습니다. 실행 직전에 event에 꽂아 넣습니다.',
        tone: 'sky',
      },
    ],
    note: '한 native 이벤트가 큐에 두 칸 이상을 만들 수 있습니다. 칸마다 event 객체가 따로 있으므로 stopPropagation은 그 칸 안에서만 통합니다.',
  },
  loop: {
    badge: '02',
    eyebrow: 'processDispatchQueue',
    title: '실행 루프가 하는 다섯 가지',
    description:
      '루프는 단순하지만 매 반복마다 확인하는 것이 있습니다. 그 확인이 stopPropagation을 실제로 동작하게 만듭니다.',
    steps: [
      {
        id: 'take',
        num: '01',
        title: '큐에서 한 칸 꺼낸다',
        description: 'event와 listeners 한 쌍을 꺼내 처리 함수에 넘깁니다.',
        tone: 'sky',
      },
      {
        id: 'direction',
        num: '02',
        title: '방향을 정한다',
        description: 'capture 플래그가 켜져 있으면 배열을 뒤에서부터, 아니면 앞에서부터 돕니다.',
        tone: 'violet',
      },
      {
        id: 'check',
        num: '03',
        title: '매번 전파 여부 확인',
        description: 'isPropagationStopped()가 true면 남은 리스너를 버리고 즉시 빠져나옵니다.',
        tone: 'amber',
      },
      {
        id: 'set-target',
        num: '04',
        title: 'currentTarget 꽂기',
        description: '리스너가 붙어 있던 노드를 event.currentTarget에 넣었다가 끝나면 지웁니다.',
        tone: 'indigo',
      },
      {
        id: 'invoke',
        num: '05',
        title: '핸들러 호출',
        description: 'listener(event)를 부릅니다. 여기서 우리가 쓴 함수가 처음 실행됩니다.',
        tone: 'emerald',
      },
    ],
    note: '04에서 넣었다 지우기 때문에 setTimeout 안에서 e.currentTarget을 읽으면 null입니다. 05가 끝나면 이미 비워집니다.',
  },
  stopping: {
    badge: '03',
    eyebrow: 'stopPropagation',
    title: '어디까지 멈추고 어디부터 안 멈추나',
    description:
      '확인 조건에 instance 비교가 붙어 있습니다. 같은 Fiber에 달린 리스너끼리는 중간에 끊기지 않습니다.',
    headers: ['상황', '실행되나', '이유'],
    rows: [
      {
        situation: '같은 칸의 다음 리스너',
        runs: '실행 안 됨',
        why: '같은 event 객체를 공유하므로 isPropagationStopped가 true로 보입니다.',
      },
      {
        situation: '이미 실행된 앞쪽 리스너',
        runs: '되돌아가지 않음',
        why: '루프는 앞으로만 갑니다. capture에서 이미 실행된 것은 그대로 남습니다.',
      },
      {
        situation: '같은 Fiber의 다른 리스너',
        runs: '실행됨',
        why: 'instance가 직전과 같으면 조건이 성립하지 않아 검사를 통과합니다.',
      },
      {
        situation: '다른 칸의 리스너',
        runs: '실행됨',
        why: 'event 객체가 다릅니다. onChange를 멈춰도 onClick은 그대로 돕니다.',
      },
    ],
    note: 'React의 stopPropagation은 DOM 전파가 아니라 이 배열의 나머지를 건너뛰는 일입니다. 두 개념을 섞으면 예측이 어긋납니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: '볼 것',
    lookFor: 'processDispatchQueue, processDispatchQueueItemsInOrder, isPropagationStopped',
    whyLabel: '설명',
    why: 'capture와 bubble이 같은 본문을 방향만 바꿔 두 번 적어 둔 모습이, 수집을 한 번만 하는 설계의 대가입니다.',
    code: PROCESS_CODE,
    primaryCta: 'DOMPluginEventSystem.js 읽기',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '아직 남은 세 가지 갈래',
    description:
      '우선순위와 Hydration Replay, 그리고 Form Action이 이 파이프라인 어디에 붙는지 마지막 페이지에서 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/priority-replay-action',
  },
};

const en: DispatchQueueContent = {
  hero: {
    badge: 'Event System · 9/10',
    title: { line1: 'Finding a listener', line2: 'does not mean calling it' },
    description:
      'Collection and execution are fully separated. React fills the dispatchQueue first, then sweeps it once in a fixed direction.',
    diagramBadge: 'dispatch queue',
    diagramCaption: 'collect all, then run',
    queueLabel: 'dispatchQueue[0].listeners',
    entries: [
      {
        id: 'section',
        order: '0',
        handler: 'handleSectionCapture',
        phase: 'onClickCapture',
        tone: 'violet',
      },
      { id: 'button', order: '0', handler: 'handleButtonClick', phase: 'onClick', tone: 'teal' },
      { id: 'div', order: '1', handler: 'handleDivClick', phase: 'onClick', tone: 'teal' },
    ],
    tailLabel: 'capture runs in reverse, bubble in order',
  },
  shape: {
    badge: '01',
    eyebrow: 'queue shape',
    title: 'What one queue entry holds',
    description:
      'dispatchQueue is not an array of listeners. Each entry pairs one event with the list of listeners it will call.',
    codeHeader: 'DispatchEntry',
    code: QUEUE_SHAPE_CODE,
    parts: [
      {
        id: 'event',
        name: 'event',
        role: 'One, shared',
        description:
          'Every listener in this entry receives the same SyntheticEvent object — which is why stopPropagation works.',
        tone: 'teal',
      },
      {
        id: 'listeners',
        name: 'listeners',
        role: 'Child to parent',
        description:
          'Exactly the order gathered while climbing on the previous page. Reversing is the execution loop job.',
        tone: 'indigo',
      },
      {
        id: 'phase',
        name: 'currentTarget',
        role: 'Differs per listener',
        description:
          'Each carries the DOM node its listener was attached to, slotted into the event right before it runs.',
        tone: 'sky',
      },
    ],
    note: 'One native event can create several entries. Each has its own event object, so stopPropagation only holds within that entry.',
  },
  loop: {
    badge: '02',
    eyebrow: 'processDispatchQueue',
    title: 'Five things the execution loop does',
    description:
      'The loop is simple, but there is a check on every iteration — and that check is what actually makes stopPropagation work.',
    steps: [
      {
        id: 'take',
        num: '01',
        title: 'Take one entry',
        description: 'Pull an event and listeners pair and hand it to the processing function.',
        tone: 'sky',
      },
      {
        id: 'direction',
        num: '02',
        title: 'Choose the direction',
        description: 'With the capture flag set, iterate from the back; otherwise from the front.',
        tone: 'violet',
      },
      {
        id: 'check',
        num: '03',
        title: 'Check propagation every time',
        description: 'If isPropagationStopped() is true, drop the rest and return immediately.',
        tone: 'amber',
      },
      {
        id: 'set-target',
        num: '04',
        title: 'Slot in currentTarget',
        description: 'Set the node the listener sits on, then clear it once the call returns.',
        tone: 'indigo',
      },
      {
        id: 'invoke',
        num: '05',
        title: 'Invoke the handler',
        description: 'Call listener(event). This is where the function you wrote finally runs.',
        tone: 'emerald',
      },
    ],
    note: 'Because step 04 sets and clears, reading e.currentTarget inside a setTimeout gives null — step 05 has already emptied it.',
  },
  stopping: {
    badge: '03',
    eyebrow: 'stopPropagation',
    title: 'What it stops and what it does not',
    description:
      'The check also compares instance, so listeners attached to the same Fiber are never cut apart mid-way.',
    headers: ['Situation', 'Does it run', 'Why'],
    rows: [
      {
        situation: 'The next listener in the same entry',
        runs: 'Does not run',
        why: 'They share one event object, so isPropagationStopped already reads true.',
      },
      {
        situation: 'An earlier listener already executed',
        runs: 'Never revisited',
        why: 'The loop only moves forward. Whatever capture already ran stays run.',
      },
      {
        situation: 'Another listener on the same Fiber',
        runs: 'Runs',
        why: 'With instance equal to the previous one the condition fails and the check is skipped.',
      },
      {
        situation: 'A listener in a different entry',
        runs: 'Runs',
        why: 'Different event object. Stopping onChange leaves onClick untouched.',
      },
    ],
    note: 'React stopPropagation skips the rest of this array rather than stopping DOM propagation. Conflating the two breaks predictions.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/DOMPluginEventSystem.js',
    lookForLabel: 'Look for',
    lookFor: 'processDispatchQueue, processDispatchQueueItemsInOrder, isPropagationStopped',
    whyLabel: 'Why',
    why: 'The same body written twice, differing only in direction, is the price paid for collecting the listeners just once.',
    code: PROCESS_CODE,
    primaryCta: 'Read DOMPluginEventSystem.js',
    primaryHref: DOM_PLUGIN_EVENT_SYSTEM_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Three branches still open',
    description:
      'The last page places priority, hydration replay and form actions onto this pipeline.',
    cta: 'Go to the next page',
    href: '/priority-replay-action',
  },
};

export const dispatchQueueContent: Record<Locale, DispatchQueueContent> = { ko, en };
