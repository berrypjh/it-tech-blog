import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PropRow = {
  name: string;
  meaning: string;
  note: string;
};

export type HeroField = { name: string; value: string };

export type ControlSideId = 'prevent' | 'stop';

export type ControlSide = {
  id: ControlSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type ReasonId = 'consistency' | 'scope' | 'pooling';

export type Reason = {
  id: ReasonId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type SyntheticEventContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    objectLabel: string;
    fields: HeroField[];
  };
  structure: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: PropRow[];
    note: string;
  };
  control: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [ControlSide, ControlSide];
    bridge: { headline: string; sub: string };
  };
  reasons: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Reason[];
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

const SYNTHETIC_CODE = `function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName, reactEventType, targetInst, nativeEvent, nativeEventTarget,
  ) {
    this._reactName = reactName;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;

    // Interface에 적힌 속성만 골라 복사한다
    for (const propName in Interface) {
      const normalize = Interface[propName];
      this[propName] = normalize
        ? normalize(nativeEvent)
        : nativeEvent[propName];
    }

    this.isDefaultPrevented = functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }

  assign(SyntheticBaseEvent.prototype, {
    stopPropagation() {
      const event = this.nativeEvent;
      if (event.stopPropagation) event.stopPropagation();
      this.isPropagationStopped = functionThatReturnsTrue;
    },
  });

  return SyntheticBaseEvent;
}`;

const SYNTHETIC_EVENT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/SyntheticEvent.js';

const ko: SyntheticEventContent = {
  hero: {
    badge: '이벤트 시스템 · 7/10단계',
    title: { line1: '핸들러가 받는 e는', line2: '브라우저 이벤트가 아니다' },
    description:
      'React는 native event를 감싼 별도 객체를 만들어 넘깁니다. 원본은 nativeEvent 필드에 그대로 들어 있습니다.',
    diagramBadge: 'synthetic',
    diagramCaption: 'wraps the native event',
    objectLabel: 'SyntheticEvent',
    fields: [
      { name: 'type', value: "'click'" },
      { name: 'target', value: '<button id="save">' },
      { name: 'currentTarget', value: '리스너가 붙은 노드' },
      { name: 'nativeEvent', value: 'MouseEvent (원본)' },
      { name: 'isPropagationStopped', value: '() => false' },
    ],
  },
  structure: {
    badge: '01',
    eyebrow: 'structure',
    title: '무엇이 들어 있고 무엇이 다른가',
    description:
      'native event의 모든 속성을 복사하지는 않습니다. 이벤트 종류마다 정의된 Interface 목록에 있는 것만 골라 담습니다.',
    headers: ['속성', '의미', '주의할 점'],
    rows: [
      {
        name: 'nativeEvent',
        meaning: '브라우저가 만든 원본 Event 객체',
        note: '필요하면 언제든 원본에 바로 접근할 수 있습니다.',
      },
      {
        name: 'target',
        meaning: '이벤트가 실제로 발생한 DOM 요소',
        note: '리스너가 어디 붙었든 변하지 않습니다.',
      },
      {
        name: 'currentTarget',
        meaning: '지금 실행 중인 리스너가 붙은 요소',
        note: '리스너마다 바뀝니다. 비동기로 읽으면 null입니다.',
      },
      {
        name: 'type',
        meaning: 'React가 해석한 이벤트 타입',
        note: 'native 이름과 다를 수 있습니다. onChange가 대표적입니다.',
      },
      {
        name: 'isPropagationStopped()',
        meaning: '전파가 멈췄는지 알려 주는 함수',
        note: 'boolean 속성이 아니라 함수입니다. 호출해야 값이 나옵니다.',
      },
    ],
    note: 'currentTarget은 리스너 실행 직전에 채우고 끝나면 지웁니다. setTimeout 안에서 읽으면 이미 null입니다.',
  },
  control: {
    badge: '02',
    eyebrow: 'two controls',
    title: '막는 대상이 서로 다른 두 함수',
    description:
      '이름이 비슷해 헷갈리지만 상대가 다릅니다. 하나는 브라우저를, 하나는 React의 리스너 목록을 막습니다.',
    sides: [
      {
        id: 'prevent',
        title: 'preventDefault()',
        badge: '브라우저를 막는다',
        description: '브라우저가 하려던 기본 동작을 취소합니다.',
        bullets: [
          'a 태그의 페이지 이동을 막는다',
          'form의 기본 제출을 막는다',
          'nativeEvent.preventDefault를 그대로 호출한다',
          '리스너 실행 순서에는 영향이 없다',
        ],
        tone: 'amber',
      },
      {
        id: 'stop',
        title: 'stopPropagation()',
        badge: '리스너를 막는다',
        description: 'dispatchQueue에 남아 있는 다음 리스너들을 건너뜁니다.',
        bullets: [
          'isPropagationStopped를 true 반환 함수로 바꾼다',
          'processDispatchQueue가 매 리스너 전에 이 값을 확인한다',
          'native event의 전파도 함께 멈춘다',
          '이미 실행된 리스너는 되돌리지 않는다',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: '브라우저냐\nReact냐',
      sub: 'preventDefault는 브라우저 기본 동작을, stopPropagation은 React가 모아 둔 리스너 목록을 상대합니다.',
    },
  },
  reasons: {
    badge: '03',
    eyebrow: 'why wrap',
    title: '굳이 감싸는 세 가지 이유',
    description:
      '원본을 그대로 넘기면 될 것 같지만, 그러면 아래 세 가지를 React가 통제할 수 없게 됩니다.',
    items: [
      {
        id: 'consistency',
        title: '브라우저 차이 흡수',
        role: '일관된 인터페이스',
        description:
          'Interface 목록으로 속성을 정규화해, 어느 브라우저에서든 같은 이름으로 같은 값을 읽게 합니다.',
        tone: 'sky',
      },
      {
        id: 'scope',
        title: '전파 범위 분리',
        role: 'React 트리 기준',
        description:
          'stopPropagation이 DOM이 아니라 React가 모은 리스너 목록을 기준으로 동작해야 하기 때문입니다.',
        tone: 'violet',
      },
      {
        id: 'pooling',
        title: '풀링은 이제 없다',
        role: 'persist() 불필요',
        description:
          '과거에는 객체를 재사용해 e.persist()가 필요했지만, React 17부터 풀링을 없애 이제 그대로 들고 있어도 됩니다.',
        tone: 'emerald',
      },
    ],
    note: '오래된 글에서 본 e.persist()는 지금 코드에 넣을 이유가 없습니다. 남아 있어도 아무 일도 하지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/SyntheticEvent.js',
    lookForLabel: '볼 것',
    lookFor: 'createSyntheticEvent, SyntheticBaseEvent, isPropagationStopped',
    whyLabel: '설명',
    why: 'isPropagationStopped가 boolean이 아니라 함수를 갈아 끼우는 방식이라는 점이, 뒤에서 큐를 끊는 장치입니다.',
    code: SYNTHETIC_CODE,
    primaryCta: 'SyntheticEvent.js 읽기',
    primaryHref: SYNTHETIC_EVENT_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '실행할 리스너는 어떻게 모으는가',
    description:
      'stopPropagation이 끊는 그 목록이 어떻게 만들어지는지, Fiber 트리를 타고 올라가는 수집 과정을 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/accumulate-listeners',
  },
};

const en: SyntheticEventContent = {
  hero: {
    badge: 'Event System · 7/10',
    title: { line1: 'The e your handler receives', line2: 'is not the browser event' },
    description:
      'React builds a separate object wrapping the native event and passes that along. The original stays available on the nativeEvent field.',
    diagramBadge: 'synthetic',
    diagramCaption: 'wraps the native event',
    objectLabel: 'SyntheticEvent',
    fields: [
      { name: 'type', value: "'click'" },
      { name: 'target', value: '<button id="save">' },
      { name: 'currentTarget', value: 'node the listener sits on' },
      { name: 'nativeEvent', value: 'MouseEvent (original)' },
      { name: 'isPropagationStopped', value: '() => false' },
    ],
  },
  structure: {
    badge: '01',
    eyebrow: 'structure',
    title: 'What is inside, and what differs',
    description:
      'Not every native property is copied. Only the ones listed in the Interface defined per event type are carried across.',
    headers: ['Property', 'Meaning', 'Watch out for'],
    rows: [
      {
        name: 'nativeEvent',
        meaning: 'The original Event object built by the browser',
        note: 'The original is reachable directly whenever you need it.',
      },
      {
        name: 'target',
        meaning: 'The DOM element where the event actually fired',
        note: 'It does not change no matter where the listener sits.',
      },
      {
        name: 'currentTarget',
        meaning: 'The element the currently running listener is attached to',
        note: 'Changes per listener, and reads as null if you read it asynchronously.',
      },
      {
        name: 'type',
        meaning: 'The event type as React interprets it',
        note: 'May differ from the native name; onChange is the classic case.',
      },
      {
        name: 'isPropagationStopped()',
        meaning: 'Tells you whether propagation has stopped',
        note: 'A function, not a boolean property — you have to call it.',
      },
    ],
    note: 'currentTarget is filled right before a listener runs and cleared afterwards. Read it inside a setTimeout and it is already null.',
  },
  control: {
    badge: '02',
    eyebrow: 'two controls',
    title: 'Two functions that block different things',
    description:
      'The names look alike but their targets differ. One blocks the browser, the other blocks React list of listeners.',
    sides: [
      {
        id: 'prevent',
        title: 'preventDefault()',
        badge: 'blocks the browser',
        description: 'Cancels the default action the browser was about to take.',
        bullets: [
          'Stops an a tag from navigating',
          'Stops a form from submitting by default',
          'Calls nativeEvent.preventDefault directly',
          'Has no effect on listener ordering',
        ],
        tone: 'amber',
      },
      {
        id: 'stop',
        title: 'stopPropagation()',
        badge: 'blocks the listeners',
        description: 'Skips the remaining listeners left in the dispatchQueue.',
        bullets: [
          'Swaps isPropagationStopped for a function returning true',
          'processDispatchQueue checks it before every listener',
          'Also stops propagation of the native event',
          'Already-executed listeners are not undone',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'The browser\nor React',
      sub: 'preventDefault addresses the browser default action; stopPropagation addresses the listener list React gathered.',
    },
  },
  reasons: {
    badge: '03',
    eyebrow: 'why wrap',
    title: 'Three reasons to wrap at all',
    description:
      'Passing the original through would seem simpler, but React would lose control of these three things.',
    items: [
      {
        id: 'consistency',
        title: 'Absorb browser differences',
        role: 'Consistent interface',
        description:
          'The Interface list normalises properties so the same name yields the same value in every browser.',
        tone: 'sky',
      },
      {
        id: 'scope',
        title: 'Separate the propagation scope',
        role: 'Scoped to the React tree',
        description:
          'stopPropagation has to act on the listener list React gathered, not on the DOM tree.',
        tone: 'violet',
      },
      {
        id: 'pooling',
        title: 'Pooling is gone',
        role: 'persist() unnecessary',
        description:
          'Objects used to be reused, which is why e.persist() existed. React 17 removed pooling, so you can simply keep the object.',
        tone: 'emerald',
      },
    ],
    note: 'The e.persist() you saw in older articles has no reason to appear in new code. Left in place, it does nothing.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/SyntheticEvent.js',
    lookForLabel: 'Look for',
    lookFor: 'createSyntheticEvent, SyntheticBaseEvent, isPropagationStopped',
    whyLabel: 'Why',
    why: 'isPropagationStopped swapping a function rather than flipping a boolean is the device that cuts the queue short later.',
    code: SYNTHETIC_CODE,
    primaryCta: 'Read SyntheticEvent.js',
    primaryHref: SYNTHETIC_EVENT_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How the listeners to run get gathered',
    description:
      'Next we watch that very list being built by walking up the Fiber tree — the list stopPropagation cuts.',
    cta: 'Go to the next page',
    href: '/accumulate-listeners',
  },
};

export const syntheticEventContent: Record<Locale, SyntheticEventContent> = { ko, en };
