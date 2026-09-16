import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type MappingPair = {
  native: string;
  prop: string;
  special?: boolean;
};

export type MappingRow = {
  native: string;
  prop: string;
  rule: string;
};

export type NamingSideId = 'simple' | 'special';

export type NamingSide = {
  id: NamingSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type RegisterStepId = 'list' | 'loop' | 'name' | 'two-phase';

export type RegisterStep = {
  id: RegisterStepId;
  badge: string;
  title: string;
  body: string;
  tone: ToneKey;
};

export type OnClickToClickContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    nativeLabel: string;
    propLabel: string;
    pairs: MappingPair[];
  };
  mappingTable: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: MappingRow[];
    note: string;
  };
  naming: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [NamingSide, NamingSide];
    note: string;
  };
  registration: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RegisterStep[];
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

const REGISTER_SIMPLE_CODE = `const simpleEventPluginEvents = [
  'abort', 'auxClick', 'cancel', 'canPlay', 'click',
  'close', 'contextMenu', 'copy', 'cut', 'drag', ...
];

function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}

export function registerSimpleEvents() {
  for (let i = 0; i < simpleEventPluginEvents.length; i++) {
    const eventName = simpleEventPluginEvents[i];
    const domEventName = eventName.toLowerCase();
    const capitalizedEvent = eventName[0].toUpperCase() + eventName.slice(1);
    registerSimpleEvent(domEventName, 'on' + capitalizedEvent);
  }

  registerSimpleEvent('dblclick', 'onDoubleClick');
  registerSimpleEvent('focusin', 'onFocus');
  registerSimpleEvent('focusout', 'onBlur');
}`;

const SIMPLE_EVENT_PLUGIN_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js';

const ko: OnClickToClickContent = {
  hero: {
    badge: '이벤트 시스템 · 3/10단계',
    title: { line1: 'onClick과 click은', line2: '이름이 겹칠 뿐이다' },
    description:
      'React prop 이름과 브라우저 이벤트 이름은 별개입니다. 둘을 잇는 것은 규칙이 아니라 앱 시작 시 채워지는 Map 하나입니다.',
    diagramBadge: 'name mapping',
    diagramCaption: 'native → react prop',
    nativeLabel: 'native event',
    propLabel: 'react prop',
    pairs: [
      { native: 'click', prop: 'onClick' },
      { native: 'keydown', prop: 'onKeyDown' },
      { native: 'dblclick', prop: 'onDoubleClick', special: true },
      { native: 'focusin', prop: 'onFocus', special: true },
      { native: 'focusout', prop: 'onBlur', special: true },
    ],
  },
  mappingTable: {
    badge: '01',
    eyebrow: 'mapping table',
    title: '이름이 어긋나는 지점들',
    description:
      '대부분은 앞에 on을 붙이고 첫 글자를 대문자로 바꾸면 끝입니다. 문제는 그 규칙이 통하지 않는 몇 개입니다.',
    headers: ['native event', 'React prop', '어떻게 정해지나'],
    rows: [
      {
        native: 'click',
        prop: 'onClick',
        rule: '규칙대로: on + 첫 글자 대문자',
      },
      {
        native: 'keydown',
        prop: 'onKeyDown',
        rule: '규칙대로. 목록에 keyDown으로 적혀 있어 D가 살아남습니다.',
      },
      {
        native: 'dblclick',
        prop: 'onDoubleClick',
        rule: '예외: 손으로 따로 등록합니다. 규칙대로면 onDblclick이 됩니다.',
      },
      {
        native: 'focusin',
        prop: 'onFocus',
        rule: '예외: focus는 버블링하지 않아 focusin을 쓰되 이름은 onFocus로 둡니다.',
      },
      {
        native: 'focusout',
        prop: 'onBlur',
        rule: '예외: 같은 이유로 focusout을 onBlur에 잇습니다.',
      },
    ],
    note: 'onFocus가 focus가 아니라 focusin에 연결된다는 점이 중요합니다. 위임하려면 버블링하는 이벤트가 필요하기 때문입니다.',
  },
  naming: {
    badge: '02',
    eyebrow: 'two kinds',
    title: '규칙으로 되는 것과 손으로 적는 것',
    description:
      'registerSimpleEvents는 목록을 돌며 이름을 자동으로 만들고, 그 뒤에 예외 세 줄을 따로 적습니다.',
    sides: [
      {
        id: 'simple',
        title: '규칙 변환',
        badge: '대부분',
        description: 'simpleEventPluginEvents 목록의 이름을 그대로 변환합니다.',
        bullets: [
          '목록의 이름을 소문자로 낮춰 native event 이름을 만든다',
          '첫 글자를 올리고 앞에 on을 붙여 prop 이름을 만든다',
          'click → onClick, keyDown → keydown / onKeyDown',
        ],
        tone: 'sky',
      },
      {
        id: 'special',
        title: '수동 등록',
        badge: '세 개',
        description: '규칙으로 만들 수 없는 것만 함수 끝에서 직접 이어 붙입니다.',
        bullets: [
          'dblclick을 onDoubleClick으로 — 읽기 좋은 이름을 쓰려고',
          'focusin을 onFocus로 — 버블링하는 쪽을 써야 해서',
          'focusout을 onBlur로 — 같은 이유',
        ],
        tone: 'violet',
      },
    ],
    note: '예외가 세 개뿐이라는 점이 오히려 단서입니다. 나머지 이름은 목록만 보면 예측할 수 있습니다.',
  },
  registration: {
    badge: '03',
    eyebrow: 'registerSimpleEvents',
    title: '이름 한 쌍이 등록되는 네 단계',
    description:
      '이 함수는 앱이 시작될 때 한 번만 돕니다. 결과로 남는 것은 Map 하나와 두 배로 불어난 prop 이름 목록입니다.',
    steps: [
      {
        id: 'list',
        badge: 'step 1',
        title: '이벤트 이름 목록',
        body: 'simpleEventPluginEvents 배열에 지원할 이벤트 이름이 적혀 있습니다.',
        tone: 'sky',
      },
      {
        id: 'loop',
        badge: 'step 2',
        title: '목록 순회',
        body: '하나씩 꺼내 native 이름과 prop 이름을 계산합니다.',
        tone: 'cyan',
      },
      {
        id: 'name',
        badge: 'step 3',
        title: 'Map에 기록',
        body: 'topLevelEventsToReactNames에 native → prop 쌍을 넣습니다.',
        tone: 'violet',
      },
      {
        id: 'two-phase',
        badge: 'step 4',
        title: 'registerTwoPhaseEvent',
        body: 'onClick과 onClickCapture 두 prop 이름을 동시에 등록합니다.',
        tone: 'emerald',
      },
    ],
    note: '04 때문에 prop 이름은 항상 짝으로 생깁니다. onClickCapture를 따로 정의한 적이 없는데 동작하는 이유입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js',
    lookForLabel: '볼 것',
    lookFor: 'registerSimpleEvents, topLevelEventsToReactNames, registerTwoPhaseEvent',
    whyLabel: '설명',
    why: '함수 끝에 예외 세 줄이 for 루프 바깥에 따로 적혀 있습니다. 규칙과 예외가 코드 모양으로 갈려 있습니다.',
    code: REGISTER_SIMPLE_CODE,
    primaryCta: 'SimpleEventPlugin.js 읽기',
    primaryHref: SIMPLE_EVENT_PLUGIN_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '이벤트가 들어오면 무엇부터 정하는가',
    description:
      '이름을 다 이어 두었어도, 실제 이벤트가 들어오면 우선순위부터 정해야 합니다. 그 분기를 다음 페이지에서 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/dispatch-selection',
  },
};

const en: OnClickToClickContent = {
  hero: {
    badge: 'Event System · 3/10',
    title: { line1: 'onClick and click', line2: 'merely share a name' },
    description:
      'The React prop name and the browser event name are separate things. What connects them is not a rule but one Map filled in at startup.',
    diagramBadge: 'name mapping',
    diagramCaption: 'native → react prop',
    nativeLabel: 'native event',
    propLabel: 'react prop',
    pairs: [
      { native: 'click', prop: 'onClick' },
      { native: 'keydown', prop: 'onKeyDown' },
      { native: 'dblclick', prop: 'onDoubleClick', special: true },
      { native: 'focusin', prop: 'onFocus', special: true },
      { native: 'focusout', prop: 'onBlur', special: true },
    ],
  },
  mappingTable: {
    badge: '01',
    eyebrow: 'mapping table',
    title: 'Where the names stop lining up',
    description:
      'For most events, prefixing on and capitalising the first letter is the whole story. The interest is in the few where it is not.',
    headers: ['native event', 'React prop', 'How it is decided'],
    rows: [
      {
        native: 'click',
        prop: 'onClick',
        rule: 'By the rule: on + capitalised first letter.',
      },
      {
        native: 'keydown',
        prop: 'onKeyDown',
        rule: 'By the rule. The list spells it keyDown, so the D survives.',
      },
      {
        native: 'dblclick',
        prop: 'onDoubleClick',
        rule: 'Exception, registered by hand. The rule would have produced onDblclick.',
      },
      {
        native: 'focusin',
        prop: 'onFocus',
        rule: 'Exception: focus does not bubble, so focusin is used but the name stays onFocus.',
      },
      {
        native: 'focusout',
        prop: 'onBlur',
        rule: 'Exception: focusout is wired to onBlur for the same reason.',
      },
    ],
    note: 'That onFocus maps to focusin rather than focus is the important one — delegation needs an event that bubbles.',
  },
  naming: {
    badge: '02',
    eyebrow: 'two kinds',
    title: 'What the rule covers and what is written by hand',
    description:
      'registerSimpleEvents loops the list generating names automatically, then writes three exceptions afterwards.',
    sides: [
      {
        id: 'simple',
        title: 'Generated by rule',
        badge: 'most of them',
        description: 'Names in the simpleEventPluginEvents list are converted as-is.',
        bullets: [
          'Lowercase the list entry to get the native event name',
          'Capitalise the first letter and prefix on to get the prop name',
          'click → onClick, keyDown → keydown / onKeyDown',
        ],
        tone: 'sky',
      },
      {
        id: 'special',
        title: 'Registered by hand',
        badge: 'three of them',
        description: 'Only the pairs the rule cannot produce are appended at the end.',
        bullets: [
          'dblclick to onDoubleClick — for a name that reads well',
          'focusin to onFocus — because the bubbling variant is needed',
          'focusout to onBlur — for the same reason',
        ],
        tone: 'violet',
      },
    ],
    note: 'Having only three exceptions is itself the clue: every other name is predictable from the list alone.',
  },
  registration: {
    badge: '03',
    eyebrow: 'registerSimpleEvents',
    title: 'Four steps to register one name pair',
    description:
      'The function runs once at startup. What it leaves behind is one Map and a prop-name list twice as long as the event list.',
    steps: [
      {
        id: 'list',
        badge: 'step 1',
        title: 'The event name list',
        body: 'simpleEventPluginEvents holds every event name React will support.',
        tone: 'sky',
      },
      {
        id: 'loop',
        badge: 'step 2',
        title: 'Walk the list',
        body: 'Take one entry at a time and compute the native and prop names.',
        tone: 'cyan',
      },
      {
        id: 'name',
        badge: 'step 3',
        title: 'Record in the Map',
        body: 'Store the native → prop pair in topLevelEventsToReactNames.',
        tone: 'violet',
      },
      {
        id: 'two-phase',
        badge: 'step 4',
        title: 'registerTwoPhaseEvent',
        body: 'Register both onClick and onClickCapture as prop names at once.',
        tone: 'emerald',
      },
    ],
    note: 'Step 04 is why prop names always arrive in pairs — and why onClickCapture works without you ever declaring it.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js',
    lookForLabel: 'Look for',
    lookFor: 'registerSimpleEvents, topLevelEventsToReactNames, registerTwoPhaseEvent',
    whyLabel: 'Why',
    why: 'The three exceptions sit outside the for loop at the end of the function — rule and exception separated by shape.',
    code: REGISTER_SIMPLE_CODE,
    primaryCta: 'Read SimpleEventPlugin.js',
    primaryHref: SIMPLE_EVENT_PLUGIN_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What gets decided first when an event arrives',
    description:
      'With the names wired up, an incoming event still needs a priority before anything else. The next page opens that fork.',
    cta: 'Go to the next page',
    href: '/dispatch-selection',
  },
};

export const onClickToClickContent: Record<Locale, OnClickToClickContent> = { ko, en };
