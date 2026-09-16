import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PriorityId = 'discrete' | 'continuous' | 'default';

export type PriorityGrade = {
  id: PriorityId;
  label: string;
  wrapper: string;
  description: string;
  events: string[];
  tone: ToneKey;
};

export type EventRow = {
  event: string;
  priority: string;
  wrapper: string;
  why: string;
};

export type SelectStepId = 'name' | 'lookup' | 'switch' | 'set-priority' | 'dispatch';

export type SelectStep = {
  id: SelectStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type DispatchSelectionContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    eventLabel: string;
    wrapperLabel: string;
    grades: PriorityGrade[];
  };
  grades: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: PriorityGrade[];
    note: string;
  };
  table: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: EventRow[];
    note: string;
  };
  selection: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: SelectStep[];
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

const WRAPPER_CODE = `function createEventListenerWrapperWithPriority(
  targetContainer,
  domEventName,
  eventSystemFlags,
) {
  const eventPriority = getEventPriority(domEventName);

  let listenerWrapper;
  switch (eventPriority) {
    case DiscreteEventPriority:
      listenerWrapper = dispatchDiscreteEvent;
      break;
    case ContinuousEventPriority:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
      break;
  }

  return listenerWrapper.bind(null, domEventName, eventSystemFlags, targetContainer);
}

function dispatchDiscreteEvent(domEventName, eventSystemFlags, container, nativeEvent) {
  const previousPriority = getCurrentUpdatePriority();
  try {
    setCurrentUpdatePriority(DiscreteEventPriority);
    dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    setCurrentUpdatePriority(previousPriority);
  }
}`;

const REACT_DOM_EVENT_LISTENER_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js';

const KO_GRADES: PriorityGrade[] = [
  {
    id: 'discrete',
    label: 'Discrete',
    wrapper: 'dispatchDiscreteEvent',
    description: '사용자가 한 번 딱 하는 동작입니다. 결과가 바로 보여야 합니다.',
    events: ['click', 'keydown', 'submit', 'input'],
    tone: 'emerald',
  },
  {
    id: 'continuous',
    label: 'Continuous',
    wrapper: 'dispatchContinuousEvent',
    description: '끊임없이 쏟아지는 흐름입니다. 하나쯤 늦어도 사용자는 모릅니다.',
    events: ['mousemove', 'pointermove', 'scroll', 'drag'],
    tone: 'violet',
  },
  {
    id: 'default',
    label: 'Default',
    wrapper: 'dispatchEvent',
    description: '사용자 입력이 아닌 것들입니다. 급할 이유가 없습니다.',
    events: ['load', 'error', 'animationend', 'transitionend'],
    tone: 'amber',
  },
];

const EN_GRADES: PriorityGrade[] = [
  {
    id: 'discrete',
    label: 'Discrete',
    wrapper: 'dispatchDiscreteEvent',
    description: 'A single deliberate action by the user. The result must show immediately.',
    events: ['click', 'keydown', 'submit', 'input'],
    tone: 'emerald',
  },
  {
    id: 'continuous',
    label: 'Continuous',
    wrapper: 'dispatchContinuousEvent',
    description: 'A stream that never stops. Nobody notices if one of them lands late.',
    events: ['mousemove', 'pointermove', 'scroll', 'drag'],
    tone: 'violet',
  },
  {
    id: 'default',
    label: 'Default',
    wrapper: 'dispatchEvent',
    description: 'Not user input at all, so there is no reason to hurry.',
    events: ['load', 'error', 'animationend', 'transitionend'],
    tone: 'amber',
  },
];

const ko: DispatchSelectionContent = {
  hero: {
    badge: '이벤트 시스템 · 4/10단계',
    title: { line1: '이벤트마다 급한 정도가 다르다', line2: 'React는 그것부터 정한다' },
    description:
      'root에 리스너를 걸 때 React는 이벤트 이름만 보고 급한 정도를 판정하고, 그에 맞는 dispatch 함수를 미리 골라 둡니다.',
    diagramBadge: 'priority',
    diagramCaption: 'event name → wrapper',
    eventLabel: '이벤트',
    wrapperLabel: 'dispatch wrapper',
    grades: KO_GRADES,
  },
  grades: {
    badge: '01',
    eyebrow: 'three grades',
    title: '급한 정도는 세 등급뿐이다',
    description:
      '수백 개의 이벤트 이름이 결국 이 셋 중 하나로 접힙니다. 판정 기준은 "사용자가 결과를 언제 기대하는가"입니다.',
    items: KO_GRADES,
    note: '등급은 이벤트 이름만으로 정해집니다. 어떤 컴포넌트에서 났는지, 핸들러가 무엇을 하는지는 보지 않습니다.',
  },
  table: {
    badge: '02',
    eyebrow: 'per event',
    title: '이벤트별로 어떤 함수가 걸리는가',
    description:
      'getEventPriority는 switch 하나로 이름을 등급에 매핑합니다. 목록에 없는 이름은 전부 Default로 떨어집니다.',
    headers: ['native event', '등급', 'dispatch wrapper', '왜 이 등급인가'],
    rows: [
      {
        event: 'click',
        priority: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        why: '한 번 누르면 결과가 바로 보여야 합니다. 늦으면 앱이 멈춘 것처럼 느껴집니다.',
      },
      {
        event: 'input',
        priority: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        why: '타이핑한 글자가 즉시 나타나야 합니다. 제어 컴포넌트의 체감 성능이 여기 걸립니다.',
      },
      {
        event: 'mousemove',
        priority: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        why: '초당 수십 번 발생합니다. 하나를 건너뛰어도 다음 이벤트가 곧 덮어씁니다.',
      },
      {
        event: 'scroll',
        priority: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        why: '연속 흐름이고, 마지막 위치만 맞으면 됩니다.',
      },
      {
        event: 'load',
        priority: 'Default',
        wrapper: 'dispatchEvent',
        why: '사용자 동작이 아닙니다. 기다리게 해도 체감되지 않습니다.',
      },
    ],
    note: '등급이 다르면 같은 setState라도 배정되는 lane이 달라집니다. 이벤트 시스템이 스케줄러에 닿는 지점입니다.',
  },
  selection: {
    badge: '03',
    eyebrow: 'wrapper selection',
    title: '리스너를 걸 때 이미 끝나는 판정',
    description:
      '이 판정은 이벤트가 발생할 때가 아니라 리스너를 등록할 때 일어납니다. 실행 시점에는 이미 고정된 함수가 불립니다.',
    steps: [
      {
        id: 'name',
        num: '01',
        title: 'native 이벤트 이름',
        description: 'listenToNativeEvent가 등록하려는 이름 하나를 넘깁니다.',
        tone: 'sky',
      },
      {
        id: 'lookup',
        num: '02',
        title: 'getEventPriority 조회',
        description: '이름을 switch에 넣어 세 등급 중 하나를 돌려받습니다.',
        tone: 'cyan',
      },
      {
        id: 'switch',
        num: '03',
        title: 'wrapper 선택',
        description: '등급에 대응하는 dispatch 함수를 고르고 인자를 bind해 둡니다.',
        tone: 'amber',
      },
      {
        id: 'set-priority',
        num: '04',
        title: '실행 시 update priority 설정',
        description: '이벤트가 오면 wrapper가 현재 update priority를 자기 등급으로 바꿉니다.',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        num: '05',
        title: '본체 dispatchEvent 호출',
        description: '세 wrapper 모두 결국 같은 dispatchEvent로 들어갑니다.',
        tone: 'emerald',
      },
    ],
    note: '04가 핵심입니다. 핸들러 안에서 부르는 setState는 이 때 세팅된 우선순위 문맥을 그대로 물려받습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    lookForLabel: '볼 것',
    lookFor: 'createEventListenerWrapperWithPriority, getEventPriority, setCurrentUpdatePriority',
    whyLabel: '설명',
    why: 'dispatchDiscreteEvent가 try/finally로 우선순위를 세웠다 되돌리는 모습이 문맥 전달의 실체입니다.',
    code: WRAPPER_CODE,
    primaryCta: 'ReactDOMEventListener.js 읽기',
    primaryHref: REACT_DOM_EVENT_LISTENER_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '클릭된 DOM에서 Fiber를 어떻게 찾는가',
    description:
      'wrapper가 정해졌으니 이제 누가 클릭됐는지 알아야 합니다. DOM 노드에서 Fiber로 건너가는 길을 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/target-to-fiber',
  },
};

const en: DispatchSelectionContent = {
  hero: {
    badge: 'Event System · 4/10',
    title: { line1: 'Events differ in urgency', line2: 'and React decides that first' },
    description:
      'While attaching listeners to the root, React judges urgency from the event name alone and picks the matching dispatch function up front.',
    diagramBadge: 'priority',
    diagramCaption: 'event name → wrapper',
    eventLabel: 'event',
    wrapperLabel: 'dispatch wrapper',
    grades: EN_GRADES,
  },
  grades: {
    badge: '01',
    eyebrow: 'three grades',
    title: 'Urgency comes in exactly three grades',
    description:
      'Hundreds of event names collapse into one of these three. The test is simply when the user expects to see a result.',
    items: EN_GRADES,
    note: 'The grade comes from the event name only. Neither the component nor what the handler does is consulted.',
  },
  table: {
    badge: '02',
    eyebrow: 'per event',
    title: 'Which function each event gets',
    description:
      'getEventPriority maps names to grades through a single switch. Any name not listed falls through to Default.',
    headers: ['native event', 'Grade', 'dispatch wrapper', 'Why this grade'],
    rows: [
      {
        event: 'click',
        priority: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        why: 'One press must show a result at once; a delay reads as the app freezing.',
      },
      {
        event: 'input',
        priority: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        why: 'Typed characters must appear immediately. Controlled-input feel depends on this.',
      },
      {
        event: 'mousemove',
        priority: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        why: 'It fires dozens of times a second, and the next event overwrites a skipped one.',
      },
      {
        event: 'scroll',
        priority: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        why: 'A continuous stream where only the final position has to be right.',
      },
      {
        event: 'load',
        priority: 'Default',
        wrapper: 'dispatchEvent',
        why: 'Not a user action at all, so waiting is not perceived.',
      },
    ],
    note: 'A different grade means the same setState lands in a different lane. This is where the event system touches the scheduler.',
  },
  selection: {
    badge: '03',
    eyebrow: 'wrapper selection',
    title: 'The decision is already made at registration',
    description:
      'This judgement happens when the listener is attached, not when the event fires. At fire time a fixed function is simply invoked.',
    steps: [
      {
        id: 'name',
        num: '01',
        title: 'The native event name',
        description: 'listenToNativeEvent passes in the one name it is about to register.',
        tone: 'sky',
      },
      {
        id: 'lookup',
        num: '02',
        title: 'Ask getEventPriority',
        description: 'Feed the name to a switch and get one of the three grades back.',
        tone: 'cyan',
      },
      {
        id: 'switch',
        num: '03',
        title: 'Pick the wrapper',
        description: 'Choose the dispatch function for that grade and bind its arguments.',
        tone: 'amber',
      },
      {
        id: 'set-priority',
        num: '04',
        title: 'Set update priority at fire time',
        description:
          'When the event arrives the wrapper swaps the current update priority to its grade.',
        tone: 'violet',
      },
      {
        id: 'dispatch',
        num: '05',
        title: 'Call the real dispatchEvent',
        description: 'All three wrappers funnel into the same dispatchEvent in the end.',
        tone: 'emerald',
      },
    ],
    note: 'Step 04 is the crux: a setState called inside your handler inherits exactly the priority context set here.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    lookForLabel: 'Look for',
    lookFor: 'createEventListenerWrapperWithPriority, getEventPriority, setCurrentUpdatePriority',
    whyLabel: 'Why',
    why: 'dispatchDiscreteEvent raising and restoring the priority in try/finally is what passing a context actually looks like.',
    code: WRAPPER_CODE,
    primaryCta: 'Read ReactDOMEventListener.js',
    primaryHref: REACT_DOM_EVENT_LISTENER_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How the clicked DOM node finds its Fiber',
    description:
      'With the wrapper settled, React still has to learn who was clicked. Next: the crossing from DOM node to Fiber.',
    cta: 'Go to the next page',
    href: '/target-to-fiber',
  },
};

export const dispatchSelectionContent: Record<Locale, DispatchSelectionContent> = { ko, en };
