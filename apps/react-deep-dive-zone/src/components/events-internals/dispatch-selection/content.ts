import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'cyan' | 'teal' | 'emerald' | 'violet' | 'blue' | 'amber' | 'rose';

export type PriorityKey = 'discrete' | 'continuous' | 'default';

export type FlowStep = {
  title: string;
  description: string;
  tone: Tone;
  isCore?: boolean;
};

export type DispatchWrapperCard = {
  fnName: string;
  description: string;
  events: string[];
  tone: Tone;
  priority: PriorityKey;
};

export type TakeawayCard = {
  title: string;
  body: string;
  tone: Tone;
};

export type LabFlowStep = {
  label: string;
  hint?: string;
};

export type LabState = {
  selected: string;
  priority: PriorityKey;
  priorityLabel: string;
  wrapper: string;
  description: string;
  flow: LabFlowStep[];
};

export type DispatchSelectionContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    examples: { name: string; tag: string; tone: PriorityKey }[];
    diagram: {
      title: string;
      rows: { priority: string; description: string; example: string; tone: PriorityKey }[];
    };
  };
  question: {
    eyebrow: string;
    title: string;
    badges: { title: string; description: string; tone: Tone }[];
  };
  urgency: {
    step: number;
    eyebrow: string;
    title: string;
    cards: {
      title: string;
      body: string;
      events: string[];
      priority: PriorityKey;
    }[];
  };
  table: {
    step: number;
    eyebrow: string;
    title: string;
    columns: { native: string; priority: string; description: string; wrapper: string };
    rows: {
      native: string;
      priority: string;
      description: string;
      wrapper: string;
      tone: PriorityKey;
    }[];
  };
  flow: {
    step: number;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  wrappers: {
    step: number;
    eyebrow: string;
    title: string;
    cards: DispatchWrapperCard[];
  };
  updatePriority: {
    step: number;
    eyebrow: string;
    title: string;
    mainMessage: string;
    flow: string[];
    description: string;
  };
  lab: {
    step: number;
    eyebrow: string;
    title: string;
    hint: string;
    tabs: string[];
    defaultTab: string;
    labels: { event: string; priority: string; wrapper: string; description: string; flow: string };
    states: Record<string, LabState>;
  };
  realCode: {
    step: number;
    eyebrow: string;
    title: string;
    fileLabel: string;
    code: string;
    explanation: { label: string; body: string };
    relatedLabel: string;
    related: string[];
    button: { label: string; href: string };
  };
  mission: {
    step: number;
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  takeaways: {
    step: number;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REAL_CODE = `// ReactDOMEventListener.js
function createEventListenerWrapperWithPriority(
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

  return listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer,
  );
}`;

const ko: DispatchSelectionContent = {
  hero: {
    badge: '이벤트 시스템 · 4/10단계',
    titleLines: ['React는 모든 이벤트를', '같은 급도로 처리하지 않는다'],
    description:
      'click은 즉각적이고, mousemove는 연속적이며, 일부 이벤트는 기본 우선순위로 처리됩니다.',
    examples: [
      { name: 'click', tag: '즉각적 반응', tone: 'discrete' },
      { name: 'mousemove', tag: '연속적 입력', tone: 'continuous' },
      { name: 'load', tag: '기본 처리', tone: 'default' },
    ],
    diagram: {
      title: 'React 이벤트 우선순위 분류',
      rows: [
        {
          priority: 'Discrete',
          description: '즉각적인 사용자 입력',
          example: 'click, keydown, submit',
          tone: 'discrete',
        },
        {
          priority: 'Continuous',
          description: '연속적인 입력 흐름',
          example: 'mousemove, pointermove, scroll',
          tone: 'continuous',
        },
        {
          priority: 'Default',
          description: '기본 또는 비긴급 이벤트',
          example: 'load, error, 기타 기본 이벤트',
          tone: 'default',
        },
      ],
    },
  },
  question: {
    eyebrow: '오늘의 질문',
    title:
      'click, mousemove, load가 발생했을 때 React 내부에서는 모두 같은 dispatch 함수가 실행될까?',
    badges: [
      { title: '이벤트마다 긴급도가 다름', description: '우선순위 분류', tone: 'teal' },
      { title: '긴급도에 따라 dispatch가 바뀜', description: 'wrapper 선택', tone: 'violet' },
      { title: '이후 상태 업데이트 우선순위에 영향', description: '스케줄링 연결', tone: 'amber' },
    ],
  },
  urgency: {
    step: 1,
    eyebrow: 'event-urgency',
    title: '이벤트에도 긴급도가 있다',
    cards: [
      {
        title: 'Discrete (즉각)',
        body: '즉각적인 사용자 입력에 사용됩니다.',
        events: ['click', 'keydown', 'submit'],
        priority: 'discrete',
      },
      {
        title: 'Continuous (연속)',
        body: '연속적으로 발생하는 입력 흐름입니다.',
        events: ['mousemove', 'pointermove', 'scroll'],
        priority: 'continuous',
      },
      {
        title: 'Default (기본)',
        body: '긴급하지 않은 대부분의 이벤트입니다.',
        events: ['load', 'error', 'animationend'],
        priority: 'default',
      },
    ],
  },
  table: {
    step: 2,
    eyebrow: 'event-comparison',
    title: '이벤트별 처리 비교',
    columns: {
      native: '이벤트 (Native)',
      priority: '우선순위 (Event Priority)',
      description: '설명',
      wrapper: 'dispatch 경로 (Wrapper)',
    },
    rows: [
      {
        native: 'click',
        priority: 'Discrete',
        description: '사용자 입력에 즉시 반응해야 하는 이벤트',
        wrapper: 'dispatchDiscreteEvent',
        tone: 'discrete',
      },
      {
        native: 'keydown',
        priority: 'Discrete',
        description: '키보드 입력',
        wrapper: 'dispatchDiscreteEvent',
        tone: 'discrete',
      },
      {
        native: 'mousemove',
        priority: 'Continuous',
        description: '연속적으로 발생하는 포인터 이동',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'pointermove',
        priority: 'Continuous',
        description: '연속적인 포인터 이동',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'scroll',
        priority: 'Continuous',
        description: '연속 스크롤',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'load',
        priority: 'Default',
        description: '비긴급, 기본 이벤트',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
      {
        native: 'error',
        priority: 'Default',
        description: '에러 이벤트',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
      {
        native: '...',
        priority: '...',
        description: '기타 이벤트',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
    ],
  },
  flow: {
    step: 3,
    eyebrow: 'wrapper-flow',
    title: 'createEventListenerWrapperWithPriority 흐름',
    steps: [
      {
        title: 'Native Event 이름',
        description: '예: click',
        tone: 'sky',
      },
      {
        title: 'getEventPriority(domEventName)',
        description: '이벤트 이름으로 우선순위 조회',
        tone: 'cyan',
        isCore: true,
      },
      {
        title: '우선순위 결정',
        description: 'Discrete / Continuous / Default',
        tone: 'violet',
      },
      {
        title: '적절한 dispatch wrapper 선택',
        description: 'dispatchDiscreteEvent / dispatchContinuousEvent / dispatchEvent',
        tone: 'emerald',
      },
    ],
  },
  wrappers: {
    step: 4,
    eyebrow: 'dispatch-compare',
    title: 'dispatch 함수 비교',
    cards: [
      {
        fnName: 'dispatchDiscreteEvent',
        description: '긴급한 사용자 입력을 우선 처리합니다.',
        events: ['click', 'keydown', 'submit'],
        tone: 'teal',
        priority: 'discrete',
      },
      {
        fnName: 'dispatchContinuousEvent',
        description: '연속적인 이벤트 흐름을 적절히 처리합니다.',
        events: ['mousemove', 'pointermove', 'scroll'],
        tone: 'violet',
        priority: 'continuous',
      },
      {
        fnName: 'dispatchEvent',
        description: '기본 우선순위로 이벤트를 처리합니다.',
        events: ['load', 'error', 'animationend'],
        tone: 'amber',
        priority: 'default',
      },
    ],
  },
  updatePriority: {
    step: 5,
    eyebrow: 'update-priority',
    title: 'update priority가 설정되는 지점',
    mainMessage: '이벤트 dispatch 전에 현재 update priority가 먼저 설정됩니다.',
    flow: ['event priority', 'current update priority 설정', 'handler 안의 setState 문맥'],
    description:
      '이후 handler 안에서 발생하는 상태 업데이트는 이 이벤트 우선순위 문맥의 영향을 받습니다.',
  },
  lab: {
    step: 6,
    eyebrow: 'priority-lab',
    title: '이벤트 우선순위 실험기',
    hint: '탭을 클릭해보세요',
    tabs: ['click', 'mousemove', 'load'],
    defaultTab: 'click',
    labels: {
      event: 'Selected event',
      priority: 'Priority',
      wrapper: 'Wrapper',
      description: '설명',
      flow: '처리 흐름',
    },
    states: {
      click: {
        selected: 'click',
        priority: 'discrete',
        priorityLabel: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        description: '즉각적인 사용자 입력 이벤트',
        flow: [
          { label: 'Browser Native click', hint: 'browser event' },
          { label: 'getEventPriority(click)', hint: 'priority lookup' },
          { label: 'Priority = Discrete', hint: 'classification' },
          { label: 'dispatchDiscreteEvent 호출', hint: 'wrapper' },
          { label: 'SyntheticEvent 생성 및 handler 실행', hint: 'invoke' },
        ],
      },
      mousemove: {
        selected: 'mousemove',
        priority: 'continuous',
        priorityLabel: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        description: '연속적으로 발생하는 포인터 이동 이벤트',
        flow: [
          { label: 'Browser Native mousemove', hint: 'browser event' },
          { label: 'getEventPriority(mousemove)', hint: 'priority lookup' },
          { label: 'Priority = Continuous', hint: 'classification' },
          { label: 'dispatchContinuousEvent 호출', hint: 'wrapper' },
          { label: 'SyntheticEvent 생성 및 handler 실행', hint: 'invoke' },
        ],
      },
      load: {
        selected: 'load',
        priority: 'default',
        priorityLabel: 'Default',
        wrapper: 'dispatchEvent',
        description: '기본 우선순위 이벤트',
        flow: [
          { label: 'Browser Native load', hint: 'browser event' },
          { label: 'getEventPriority(load)', hint: 'priority lookup' },
          { label: 'Priority = Default', hint: 'classification' },
          { label: 'dispatchEvent 호출', hint: 'wrapper' },
          { label: 'SyntheticEvent 생성 및 handler 실행', hint: 'invoke' },
        ],
      },
    },
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: '실제 코드 미리보기',
    fileLabel: 'ReactDOMEventListener.js',
    code: REAL_CODE,
    explanation: {
      label: '설명',
      body: 'getEventPriority가 이벤트 이름을 보고 우선순위를 반환합니다. 우선순위에 따라 서로 다른 dispatch wrapper가 선택됩니다. 이 wrapper가 SyntheticEvent 생성과 handler 실행을 담당합니다.',
    },
    relatedLabel: '관련 함수',
    related: [
      'getEventPriority',
      'dispatchDiscreteEvent',
      'dispatchContinuousEvent',
      'dispatchEvent',
    ],
    button: {
      label: 'GitHub에서 전체 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    },
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: '직접 코드에서 따라가 보기',
    description: 'React 저장소를 직접 열어 dispatch wrapper 선택 흐름을 손으로 확인해 보세요.',
    items: [
      {
        title: 'ReactDOMEventListener.js를 연다',
        description: '이벤트 시스템의 native 리스너 파일을 펼친다.',
      },
      {
        title: 'createEventListenerWrapperWithPriority 함수를 찾는다',
        description: 'wrapper 선택의 진입점이 되는 함수다.',
      },
      {
        title: 'getEventPriority 분기를 확인한다',
        description: '이벤트 이름이 어떻게 priority로 변환되는지 본다.',
      },
      {
        title: 'dispatchDiscreteEvent와 dispatchContinuousEvent를 비교한다',
        description: '서로 다른 wrapper의 차이를 직접 비교해 둔다.',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    cards: [
      {
        title: '이벤트마다 dispatch wrapper가 다를 수 있다.',
        body: '이벤트 종류에 따라 호출되는 dispatch 함수가 달라집니다.',
        tone: 'blue',
      },
      {
        title: '이는 이벤트 우선순위와 연결된다.',
        body: 'Discrete / Continuous / Default가 wrapper 선택 기준이 됩니다.',
        tone: 'teal',
      },
      {
        title: '이벤트 처리와 상태 업데이트 스케줄링은 여기서 처음 만난다.',
        body: '이 우선순위가 setState의 우선순위에도 영향을 줍니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'DOM target에서 Fiber target 찾기',
    description:
      '이벤트 우선순위를 정한 뒤, DOM target에서 어떻게 대응하는 Fiber target을 찾는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/target-to-fiber',
  },
};

const en: DispatchSelectionContent = {
  hero: {
    badge: 'Event System · 4/10',
    titleLines: ['React does not treat every event', 'with the same urgency'],
    description:
      'click is immediate, mousemove is continuous, and some events are simply handled at default priority.',
    examples: [
      { name: 'click', tag: 'immediate reaction', tone: 'discrete' },
      { name: 'mousemove', tag: 'continuous input', tone: 'continuous' },
      { name: 'load', tag: 'default handling', tone: 'default' },
    ],
    diagram: {
      title: 'React event priority classification',
      rows: [
        {
          priority: 'Discrete',
          description: 'Immediate user input',
          example: 'click, keydown, submit',
          tone: 'discrete',
        },
        {
          priority: 'Continuous',
          description: 'Continuous input streams',
          example: 'mousemove, pointermove, scroll',
          tone: 'continuous',
        },
        {
          priority: 'Default',
          description: 'Non-urgent or default events',
          example: 'load, error, other default events',
          tone: 'default',
        },
      ],
    },
  },
  question: {
    eyebrow: "Today's question",
    title:
      'When click, mousemove, or load fires — does React run the same dispatch function for all of them?',
    badges: [
      {
        title: 'Events have different urgency',
        description: 'priority classification',
        tone: 'teal',
      },
      { title: 'Urgency changes the dispatch', description: 'wrapper selection', tone: 'violet' },
      { title: 'Affects later update priority', description: 'scheduling hook-up', tone: 'amber' },
    ],
  },
  urgency: {
    step: 1,
    eyebrow: 'event-urgency',
    title: 'Events have urgency too',
    cards: [
      {
        title: 'Discrete (immediate)',
        body: 'Used for immediate user input.',
        events: ['click', 'keydown', 'submit'],
        priority: 'discrete',
      },
      {
        title: 'Continuous',
        body: 'A continuous stream of input.',
        events: ['mousemove', 'pointermove', 'scroll'],
        priority: 'continuous',
      },
      {
        title: 'Default',
        body: 'Most non-urgent events.',
        events: ['load', 'error', 'animationend'],
        priority: 'default',
      },
    ],
  },
  table: {
    step: 2,
    eyebrow: 'event-comparison',
    title: 'Per-event handling compared',
    columns: {
      native: 'Event (Native)',
      priority: 'Event Priority',
      description: 'Description',
      wrapper: 'Dispatch wrapper',
    },
    rows: [
      {
        native: 'click',
        priority: 'Discrete',
        description: 'Needs an immediate reaction to user input',
        wrapper: 'dispatchDiscreteEvent',
        tone: 'discrete',
      },
      {
        native: 'keydown',
        priority: 'Discrete',
        description: 'Keyboard input',
        wrapper: 'dispatchDiscreteEvent',
        tone: 'discrete',
      },
      {
        native: 'mousemove',
        priority: 'Continuous',
        description: 'A continuous stream of pointer movement',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'pointermove',
        priority: 'Continuous',
        description: 'Continuous pointer movement',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'scroll',
        priority: 'Continuous',
        description: 'Continuous scrolling',
        wrapper: 'dispatchContinuousEvent',
        tone: 'continuous',
      },
      {
        native: 'load',
        priority: 'Default',
        description: 'Non-urgent, default event',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
      {
        native: 'error',
        priority: 'Default',
        description: 'Error event',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
      {
        native: '...',
        priority: '...',
        description: 'other events',
        wrapper: 'dispatchEvent',
        tone: 'default',
      },
    ],
  },
  flow: {
    step: 3,
    eyebrow: 'wrapper-flow',
    title: 'createEventListenerWrapperWithPriority flow',
    steps: [
      {
        title: 'Native event name',
        description: 'e.g. click',
        tone: 'sky',
      },
      {
        title: 'getEventPriority(domEventName)',
        description: 'Look up the priority for the event name',
        tone: 'cyan',
        isCore: true,
      },
      {
        title: 'Decide the priority',
        description: 'Discrete / Continuous / Default',
        tone: 'violet',
      },
      {
        title: 'Pick the right dispatch wrapper',
        description: 'dispatchDiscreteEvent / dispatchContinuousEvent / dispatchEvent',
        tone: 'emerald',
      },
    ],
  },
  wrappers: {
    step: 4,
    eyebrow: 'dispatch-compare',
    title: 'dispatch functions compared',
    cards: [
      {
        fnName: 'dispatchDiscreteEvent',
        description: 'Prioritizes urgent user input.',
        events: ['click', 'keydown', 'submit'],
        tone: 'teal',
        priority: 'discrete',
      },
      {
        fnName: 'dispatchContinuousEvent',
        description: 'Handles continuous event streams appropriately.',
        events: ['mousemove', 'pointermove', 'scroll'],
        tone: 'violet',
        priority: 'continuous',
      },
      {
        fnName: 'dispatchEvent',
        description: 'Handles events at the default priority.',
        events: ['load', 'error', 'animationend'],
        tone: 'amber',
        priority: 'default',
      },
    ],
  },
  updatePriority: {
    step: 5,
    eyebrow: 'update-priority',
    title: 'Where the update priority is set',
    mainMessage: 'Before the event dispatch runs, the current update priority is set first.',
    flow: ['event priority', 'set current update priority', 'setState context inside the handler'],
    description:
      'State updates that happen inside the handler are influenced by this event-priority context.',
  },
  lab: {
    step: 6,
    eyebrow: 'priority-lab',
    title: 'Event priority lab',
    hint: 'Try clicking a tab',
    tabs: ['click', 'mousemove', 'load'],
    defaultTab: 'click',
    labels: {
      event: 'Selected event',
      priority: 'Priority',
      wrapper: 'Wrapper',
      description: 'Description',
      flow: 'Processing flow',
    },
    states: {
      click: {
        selected: 'click',
        priority: 'discrete',
        priorityLabel: 'Discrete',
        wrapper: 'dispatchDiscreteEvent',
        description: 'Immediate user input event',
        flow: [
          { label: 'Browser native click', hint: 'browser event' },
          { label: 'getEventPriority(click)', hint: 'priority lookup' },
          { label: 'Priority = Discrete', hint: 'classification' },
          { label: 'dispatchDiscreteEvent invoked', hint: 'wrapper' },
          { label: 'SyntheticEvent built & handler run', hint: 'invoke' },
        ],
      },
      mousemove: {
        selected: 'mousemove',
        priority: 'continuous',
        priorityLabel: 'Continuous',
        wrapper: 'dispatchContinuousEvent',
        description: 'Continuous pointer movement event',
        flow: [
          { label: 'Browser native mousemove', hint: 'browser event' },
          { label: 'getEventPriority(mousemove)', hint: 'priority lookup' },
          { label: 'Priority = Continuous', hint: 'classification' },
          { label: 'dispatchContinuousEvent invoked', hint: 'wrapper' },
          { label: 'SyntheticEvent built & handler run', hint: 'invoke' },
        ],
      },
      load: {
        selected: 'load',
        priority: 'default',
        priorityLabel: 'Default',
        wrapper: 'dispatchEvent',
        description: 'Default priority event',
        flow: [
          { label: 'Browser native load', hint: 'browser event' },
          { label: 'getEventPriority(load)', hint: 'priority lookup' },
          { label: 'Priority = Default', hint: 'classification' },
          { label: 'dispatchEvent invoked', hint: 'wrapper' },
          { label: 'SyntheticEvent built & handler run', hint: 'invoke' },
        ],
      },
    },
  },
  realCode: {
    step: 7,
    eyebrow: 'real-code',
    title: 'Real source preview',
    fileLabel: 'ReactDOMEventListener.js',
    code: REAL_CODE,
    explanation: {
      label: 'Explanation',
      body: 'getEventPriority returns a priority based on the event name. Different dispatch wrappers are chosen based on that priority. The chosen wrapper builds the SyntheticEvent and runs the handler.',
    },
    relatedLabel: 'Related functions',
    related: [
      'getEventPriority',
      'dispatchDiscreteEvent',
      'dispatchContinuousEvent',
      'dispatchEvent',
    ],
    button: {
      label: 'View full code on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
    },
  },
  mission: {
    step: 8,
    eyebrow: 'follow-along',
    title: 'Walk it in the source',
    description: 'Open the React repository and verify the wrapper-selection flow by hand.',
    items: [
      {
        title: 'Open ReactDOMEventListener.js',
        description: 'The native listener file for the event system.',
      },
      {
        title: 'Find createEventListenerWrapperWithPriority',
        description: 'The entry point of wrapper selection.',
      },
      {
        title: 'Check the getEventPriority branches',
        description: 'See how an event name maps to a priority.',
      },
      {
        title: 'Compare dispatchDiscreteEvent and dispatchContinuousEvent',
        description: 'Take notes on what differs between them.',
      },
    ],
  },
  takeaways: {
    step: 9,
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    cards: [
      {
        title: 'The dispatch wrapper can differ per event.',
        body: 'Different events route to different dispatch functions.',
        tone: 'blue',
      },
      {
        title: 'This is wired to event priority.',
        body: 'Discrete / Continuous / Default drive the wrapper choice.',
        tone: 'teal',
      },
      {
        title: 'Event handling meets state-update scheduling here.',
        body: 'This priority also feeds the priority of subsequent setState calls.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'from DOM target to Fiber target',
    description:
      'After deciding event priority, see how React finds the matching Fiber target from a DOM target.',
    cta: 'Go to the next page',
    href: '/target-to-fiber',
  },
};

export const dispatchSelectionContent: Record<Locale, DispatchSelectionContent> = { ko, en };
