import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PathStepId = 'jsx' | 'create' | 'element' | 'call';

export type HeroStep = {
  id: PathStepId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type PathStep = {
  id: PathStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ChangeId = 'declaration' | 'route' | 'shape' | 'imperative';

export type ChangeCard = {
  id: ChangeId;
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type DiffRow = {
  topic: string;
  before: string;
  after: string;
};

export type RefAsPropElementShapeContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    steps: HeroStep[];
  };
  wrapper: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    before: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    after: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  path: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PathStep[];
    note: string;
  };
  changes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ChangeCard[];
    note: string;
  };
  diff: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: DiffRow[];
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

const KO_CODE = `// packages/react/src/jsx/ReactJSXElement.js
function ReactElement(type, key, self, source, owner, props) {
  // React 19: ref는 더 이상 별도 인자가 아니라 props에서 꺼낸다
  const refProp = props.ref;
  const ref = refProp !== undefined ? refProp : null;

  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    props,          // ref가 이 안에 그대로 들어 있다
    _owner: owner,
  };

  // ref는 element의 고정 슬롯이 아니라, 개발 모드에서 경고를 붙인 접근자로 남는다
  return element;
}`;

const EN_CODE = `// packages/react/src/jsx/ReactJSXElement.js
function ReactElement(type, key, self, source, owner, props) {
  // React 19: ref is no longer a separate argument, it comes out of props
  const refProp = props.ref;
  const ref = refProp !== undefined ? refProp : null;

  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    props,          // ref sits right inside here
    _owner: owner,
  };

  // ref survives not as a fixed slot but as a dev-mode accessor that warns
  return element;
}`;

const JSX_ELEMENT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js';

const ko: RefAsPropElementShapeContent = {
  hero: {
    badge: 'React 19 변화 · 5/10단계',
    title: { line1: 'forwardRef가 사라진 것이 아니라', line2: 'ref가 props로 내려온 것이다' },
    description:
      '편의 문법이 하나 늘어난 게 아닙니다. Element가 ref를 어디에 담는지, 그 기준 자체가 옮겨 갔습니다.',
    diagramBadge: 'one path',
    diagramCaption: 'ref lives in props all the way down',
    steps: [
      { id: 'jsx', label: '<MyInput ref={r} />', caption: 'JSX에 ref를 쓴다', tone: 'cyan' },
      { id: 'create', label: 'props.ref = r', caption: 'props 객체에 담긴다', tone: 'teal' },
      {
        id: 'element',
        label: 'element.props',
        caption: '별도 ref 슬롯이 없다',
        tone: 'indigo',
      },
      {
        id: 'call',
        label: 'MyInput({ ref })',
        caption: '컴포넌트가 props로 받는다',
        tone: 'emerald',
      },
    ],
  },
  wrapper: {
    badge: '01',
    eyebrow: 'why a wrapper',
    title: 'forwardRef는 무엇을 대신하고 있었나',
    description:
      'forwardRef는 편의 함수가 아니라 표현의 빈틈을 메우는 우회로였습니다. 빈틈이 메워지자 필요가 없어졌습니다.',
    before: {
      title: '우회로가 필요했던 시절',
      badge: 'React 18',
      description:
        'ref는 props가 아니라 Element의 별도 슬롯이어서, 컴포넌트까지 내려가지 않았습니다.',
      bullets: [
        'createElement가 props에서 ref를 꺼내 별도 슬롯에 넣었다',
        '함수 컴포넌트는 props만 받으므로 ref를 볼 수 없었다',
        'forwardRef로 감싸야 React가 ref를 두 번째 인자로 넘겨 줬다',
        '컴포넌트 이름과 타입이 한 겹씩 더 감싸여 디버깅이 번거로웠다',
      ],
    },
    bridge: {
      headline: 'ref를 props에서\n꺼내지 않기로 한다',
      sub: '한 줄의 결정이 wrapper·별도 인자·별도 슬롯을 한 번에 없앴습니다.',
    },
    after: {
      title: '우회로가 필요 없어진 뒤',
      badge: 'React 19',
      description: 'ref가 props에 남아 있으므로 함수 컴포넌트가 그냥 구조 분해로 받습니다.',
      bullets: [
        'createElement가 props.ref를 그대로 둔다',
        '함수 컴포넌트가 { ref }로 구조 분해해 받는다',
        'wrapper가 없으니 컴포넌트 이름이 그대로 스택에 남는다',
        'ComponentPropsWithRef 같은 타입이 자연스럽게 맞아떨어진다',
      ],
    },
    note: 'forwardRef는 React 19에서도 동작합니다. 다만 새 코드에서 쓸 이유가 사라졌고, 문서에서도 권장하지 않습니다.',
  },
  path: {
    badge: '02',
    eyebrow: 'one route',
    title: 'ref가 지나가는 네 칸',
    description: '네 칸 모두 props 안에 있습니다. 중간에 꺼냈다 다시 넣는 구간이 없습니다.',
    steps: [
      {
        id: 'jsx',
        num: '01',
        title: 'JSX에 ref를 쓴다',
        description: '작성하는 쪽 문법은 React 18과 완전히 같습니다. 바뀐 것은 받는 쪽입니다.',
        tone: 'cyan',
      },
      {
        id: 'create',
        num: '02',
        title: 'props 객체에 담긴다',
        description: 'jsx 변환이 만든 props에 ref가 그대로 들어갑니다. key만 여전히 따로 빠집니다.',
        tone: 'teal',
      },
      {
        id: 'element',
        num: '03',
        title: 'Element가 props를 통째로 들고 있다',
        description:
          'Element에 ref 전용 슬롯을 따로 두지 않습니다. 읽을 곳이 한 군데로 정리됐습니다.',
        tone: 'indigo',
      },
      {
        id: 'call',
        num: '04',
        title: '컴포넌트가 props로 받는다',
        description:
          '함수 컴포넌트는 첫 번째 인자에서 ref를 꺼냅니다. 두 번째 인자는 더 이상 쓰이지 않습니다.',
        tone: 'emerald',
      },
    ],
    note: 'key는 아직 props에서 빠집니다. ref만 props로 내려왔고 key는 여전히 Element의 고유 슬롯입니다.',
  },
  changes: {
    badge: '03',
    eyebrow: 'what moved',
    title: '이 변화가 실제로 건드린 네 곳',
    description: '문법이 짧아진 것은 결과일 뿐입니다. 진짜 변화는 아래 네 곳에서 일어났습니다.',
    cards: [
      {
        id: 'declaration',
        title: '컴포넌트 선언',
        description: 'wrapper 호출이 사라지고 평범한 함수 선언 하나로 돌아왔습니다.',
        badge: 'forwardRef 제거',
        tone: 'teal',
      },
      {
        id: 'route',
        title: '전달 경로',
        description: 'ref가 props에서 나갔다 들어오는 구간이 없어 추적이 단순해졌습니다.',
        badge: 'props.ref 한 경로',
        tone: 'cyan',
      },
      {
        id: 'shape',
        title: 'Element 표현',
        description: 'Element의 고정 필드가 하나 줄었습니다. 읽는 기준이 props로 통일됐습니다.',
        badge: 'element.ref 비권장',
        tone: 'indigo',
      },
      {
        id: 'imperative',
        title: '명령형 핸들',
        description: 'useImperativeHandle은 그대로입니다. 받는 경로만 바뀌고 쓰는 법은 같습니다.',
        badge: 'useImperativeHandle 유지',
        tone: 'violet',
      },
    ],
    note: '네 번째가 중요합니다. ref를 prop으로 받아도 useImperativeHandle에 그대로 넘기면 예전과 똑같이 동작합니다.',
  },
  diff: {
    badge: '04',
    eyebrow: 'side by side',
    title: '같은 질문에 대한 두 버전의 답',
    description: '마이그레이션할 때 실제로 확인하게 되는 네 가지입니다.',
    headers: ['확인할 것', 'React 18', 'React 19'],
    rows: [
      {
        topic: '함수 컴포넌트가 ref를 받으려면',
        before: 'forwardRef로 감싸야 한다',
        after: 'props에서 ref를 꺼내면 된다',
      },
      {
        topic: '컴포넌트가 ref를 읽는 위치',
        before: '두 번째 인자',
        after: '첫 번째 인자의 ref 키',
      },
      {
        topic: 'Element에서 ref를 읽는 곳',
        before: 'element.ref',
        after: 'element.props.ref',
      },
      {
        topic: '타입 선언',
        before: 'ForwardedRef를 따로 붙인다',
        after: 'ComponentPropsWithRef 하나로 끝난다',
      },
    ],
    note: '세 번째 줄이 깨지기 쉬운 지점입니다. 라이브러리가 element.ref를 읽고 있으면 개발 모드에서 경고가 납니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'ref가 props에 남는 바로 그 줄',
    fileLabel: '파일',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    lookForLabel: '볼 것',
    lookFor: 'const refProp = props.ref',
    whyLabel: '설명',
    why: 'React 18이 props에서 ref를 빼내던 자리입니다. 그 한 줄이 사라지면서 forwardRef의 존재 이유도 함께 사라졌습니다.',
    code: KO_CODE,
    primaryCta: 'ReactJSXElement.js 소스 보기',
    primaryHref: JSX_ELEMENT_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'title과 meta를 컴포넌트로 쓰면 무슨 일이 생길까',
    description: 'Element 표현 축을 마치고 DOM 자원 관리 축으로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/metadata-resource-react-dom',
  },
};

const en: RefAsPropElementShapeContent = {
  hero: {
    badge: 'React 19 Changes · 5/10',
    title: { line1: 'forwardRef did not disappear.', line2: 'ref moved down into props.' },
    description:
      'This is not one more piece of sugar. Where an Element keeps its ref, the reference point itself moved.',
    diagramBadge: 'one path',
    diagramCaption: 'ref lives in props all the way down',
    steps: [
      { id: 'jsx', label: '<MyInput ref={r} />', caption: 'you write ref in JSX', tone: 'cyan' },
      {
        id: 'create',
        label: 'props.ref = r',
        caption: 'it lands in the props object',
        tone: 'teal',
      },
      {
        id: 'element',
        label: 'element.props',
        caption: 'there is no separate slot',
        tone: 'indigo',
      },
      {
        id: 'call',
        label: 'MyInput({ ref })',
        caption: 'the component receives it as a prop',
        tone: 'emerald',
      },
    ],
  },
  wrapper: {
    badge: '01',
    eyebrow: 'why a wrapper',
    title: 'What forwardRef was standing in for',
    description:
      'forwardRef was not a convenience but a detour around a gap in the representation. Close the gap and the detour is pointless.',
    before: {
      title: 'When the detour was needed',
      badge: 'React 18',
      description:
        'ref was a separate Element slot rather than a prop, so it never reached the component.',
      bullets: [
        'createElement pulled ref out of props into its own slot',
        'A function component only receives props, so it could not see ref',
        'Wrapping in forwardRef made React pass ref as a second argument',
        'The extra layer blurred component names and types while debugging',
      ],
    },
    bridge: {
      headline: 'Decide to stop pulling\nref out of props',
      sub: 'One decision removed the wrapper, the second argument and the separate slot at once.',
    },
    after: {
      title: 'Once the detour is gone',
      badge: 'React 19',
      description: 'ref stays in props, so a function component just destructures it.',
      bullets: [
        'createElement leaves props.ref where it is',
        'The function component takes it with { ref }',
        'With no wrapper, the component name stays in the stack as written',
        'Types like ComponentPropsWithRef line up naturally',
      ],
    },
    note: 'forwardRef still works in React 19. There is simply no reason to reach for it in new code, and the docs no longer suggest it.',
  },
  path: {
    badge: '02',
    eyebrow: 'one route',
    title: 'The four slots ref passes through',
    description: 'All four are inside props. Nothing pulls it out and puts it back.',
    steps: [
      {
        id: 'jsx',
        num: '01',
        title: 'You write ref in JSX',
        description: 'The authoring syntax is identical to React 18. The receiving side changed.',
        tone: 'cyan',
      },
      {
        id: 'create',
        num: '02',
        title: 'It lands in the props object',
        description:
          'ref goes into the props the jsx transform builds. Only key is still split out.',
        tone: 'teal',
      },
      {
        id: 'element',
        num: '03',
        title: 'The Element carries props whole',
        description:
          'No dedicated ref slot on the Element. There is now exactly one place to read it.',
        tone: 'indigo',
      },
      {
        id: 'call',
        num: '04',
        title: 'The component receives it as a prop',
        description:
          'A function component takes ref from its first argument. The second argument is unused.',
        tone: 'emerald',
      },
    ],
    note: 'key is still split out of props. Only ref moved down; key remains an Element slot of its own.',
  },
  changes: {
    badge: '03',
    eyebrow: 'what moved',
    title: 'The four places this change actually touched',
    description:
      'Shorter syntax is only the outcome. The real change happened in these four places.',
    cards: [
      {
        id: 'declaration',
        title: 'Component declaration',
        description: 'The wrapper call is gone and it is an ordinary function declaration again.',
        badge: 'no forwardRef',
        tone: 'teal',
      },
      {
        id: 'route',
        title: 'The delivery route',
        description: 'ref never leaves props and comes back, which makes tracing much simpler.',
        badge: 'one props.ref route',
        tone: 'cyan',
      },
      {
        id: 'shape',
        title: 'Element shape',
        description: 'One fixed field fewer on the Element, and one place to read ref from.',
        badge: 'element.ref discouraged',
        tone: 'indigo',
      },
      {
        id: 'imperative',
        title: 'Imperative handles',
        description: 'useImperativeHandle is untouched. Only the route in changed, not the usage.',
        badge: 'useImperativeHandle stays',
        tone: 'violet',
      },
    ],
    note: 'The fourth matters: take ref as a prop, pass it to useImperativeHandle, and it behaves exactly as before.',
  },
  diff: {
    badge: '04',
    eyebrow: 'side by side',
    title: 'Two versions answering the same question',
    description: 'These four are what you actually check while migrating.',
    headers: ['What to check', 'React 18', 'React 19'],
    rows: [
      {
        topic: 'For a function component to take a ref',
        before: 'It must be wrapped in forwardRef',
        after: 'Read ref out of props',
      },
      {
        topic: 'Where the component reads ref',
        before: 'The second argument',
        after: 'The ref key of the first argument',
      },
      {
        topic: 'Where to read ref on an Element',
        before: 'element.ref',
        after: 'element.props.ref',
      },
      {
        topic: 'Type declaration',
        before: 'ForwardedRef bolted on separately',
        after: 'ComponentPropsWithRef alone',
      },
    ],
    note: 'The third row breaks most easily. A library reading element.ref will warn in development mode.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'The exact line where ref stays in props',
    fileLabel: 'File',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    lookForLabel: 'Look for',
    lookFor: 'const refProp = props.ref',
    whyLabel: 'Why',
    why: 'This is where React 18 lifted ref out of props. With that line gone, the reason for forwardRef went with it.',
    code: EN_CODE,
    primaryCta: 'View ReactJSXElement.js',
    primaryHref: JSX_ELEMENT_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'What happens when title and meta become components',
    description: 'The Element shape axis is done; DOM resources are next.',
    cta: 'Go to the next page',
    href: '/metadata-resource-react-dom',
  },
};

export const refAsPropElementShapeContent: Record<Locale, RefAsPropElementShapeContent> = {
  ko,
  en,
};
