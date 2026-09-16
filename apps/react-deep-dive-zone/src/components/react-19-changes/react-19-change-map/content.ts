import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type LayerId = 'update' | 'render' | 'element' | 'dom' | 'server' | 'priority';

export type HeroLayer = {
  id: LayerId;
  label: string;
  feature: string;
  tone: ToneKey;
};

export type AxisCard = {
  id: LayerId;
  num: string;
  title: string;
  question: string;
  features: string;
  tone: ToneKey;
};

export type VersionId = 'v190' | 'v192' | 'v1926';

export type VersionEntry = {
  id: VersionId;
  version: string;
  date: string;
  meaning: string;
  description: string;
  tags: string[];
  tone: ToneKey;
};

export type MapRow = {
  question: string;
  feature: string;
  reading: string;
};

export type RoadmapId =
  | 'map'
  | 'actions'
  | 'form'
  | 'use'
  | 'ref'
  | 'metadata'
  | 'server'
  | 'activity'
  | 'effect-event'
  | 'after';

export type RoadmapStep = {
  id: RoadmapId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type React19ChangeMapContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    layers: HeroLayer[];
  };
  trap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    list: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    structure: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  axes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: AxisCard[];
    note: string;
  };
  versions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    entries: VersionEntry[];
    note: string;
  };
  bridgeMap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: MapRow[];
    note: string;
  };
  roadmap: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RoadmapStep[];
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

const KO_CODE = `// packages/react/src/ReactClient.js - React의 공개 표면 (발췌)
export {
  use,              // 19.0 · 렌더 도중 thenable / context 읽기
  useActionState,   // 19.0 · Action 결과를 상태로 받기
  useOptimistic,    // 19.0 · 낙관적 업데이트
  useEffectEvent,   // 19.2 · 이벤트성 Effect 로직 분리
  useTransition,    // 이전부터 존재 · Actions가 내부에서 사용
  useDeferredValue,
  useState,
  useReducer,
} from './ReactHooks';

// 같은 파일에서 Fragment · Suspense · Profiler · StrictMode 같은 심볼과
// cache · createContext · forwardRef 등이 함께 밖으로 나간다.`;

const EN_CODE = `// packages/react/src/ReactClient.js - React's public surface (excerpt)
export {
  use,              // 19.0 · read a thenable / context during render
  useActionState,   // 19.0 · take an Action result as state
  useOptimistic,    // 19.0 · optimistic updates
  useEffectEvent,   // 19.2 · split event-like logic out of an Effect
  useTransition,    // pre-existing · Actions use it internally
  useDeferredValue,
  useState,
  useReducer,
} from './ReactHooks';

// The same file also ships symbols such as Fragment, Suspense, Profiler and
// StrictMode, along with cache, createContext and forwardRef.`;

const REACT_CLIENT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js';

const ko: React19ChangeMapContent = {
  hero: {
    badge: 'React 19 변화 · 1/10단계',
    title: { line1: 'React 19는 새 기능 목록이 아니라', line2: '여섯 레이어가 넓어진 사건이다' },
    description:
      '기능 이름을 외우면 금방 잊습니다. 지금까지 읽은 내부 구조 어디가 넓어졌는지로 읽으면, 이름은 위치의 별명이 됩니다.',
    diagramBadge: 'six layers',
    diagramCaption: 'layer → what React 19 added',
    layers: [
      { id: 'update', label: '업데이트 모델', feature: 'Actions', tone: 'cyan' },
      { id: 'render', label: '렌더링 모델', feature: 'use()', tone: 'sky' },
      { id: 'element', label: 'Element 표현', feature: 'ref as prop', tone: 'teal' },
      { id: 'dom', label: 'DOM 자원 관리', feature: 'metadata', tone: 'indigo' },
      { id: 'server', label: '서버 경계', feature: 'RSC', tone: 'emerald' },
      { id: 'priority', label: '우선순위와 수명', feature: 'Activity', tone: 'violet' },
    ],
  },
  trap: {
    badge: '01',
    eyebrow: 'list vs structure',
    title: '목록으로 읽으면 놓치고, 구조로 읽으면 남는다',
    description:
      '같은 다섯 기능을 두 가지 방식으로 적어 봅니다. 왼쪽은 릴리스 노트고, 오른쪽은 지도입니다.',
    list: {
      title: '목록으로 읽기',
      badge: '릴리스 노트',
      description: '나열된 이름 사이에 아무 관계가 없어서, 외우는 것 말고는 할 일이 없습니다.',
      bullets: [
        'Actions, use(), ref as prop, metadata, Activity가 평평하게 놓인다',
        '어느 기능이 어느 기능을 전제하는지 알 수 없다',
        '버전이 섞여 있어 19.0과 19.2가 구분되지 않는다',
        '새 버전이 나오면 목록을 다시 외워야 한다',
      ],
    },
    bridge: {
      headline: '같은 기능을\n내부 구조 위에 올려 둔다',
      sub: '이름 대신 위치를 기억하면, 다음 버전의 기능도 같은 자리에 놓을 수 있습니다.',
    },
    structure: {
      title: '구조로 읽기',
      badge: '변화 지도',
      description: '각 기능이 기존 내부 축 어디를 넓혔는지 적으면, 이름은 위치의 별명이 됩니다.',
      bullets: [
        'Actions는 업데이트 흐름이 비동기까지 넓어진 것',
        'use()는 렌더 도중 리소스를 읽게 된 것',
        'ref as prop은 Element와 props 표현이 바뀐 것',
        'Activity는 숨겨진 subtree가 우선순위 모델에 들어온 것',
      ],
    },
    note: '이 챕터의 나머지 아홉 페이지는 전부 오른쪽 방식으로 읽습니다. 기능마다 먼저 "어느 레이어인가"를 묻고 시작합니다.',
  },
  axes: {
    badge: '02',
    eyebrow: 'six axes',
    title: 'React 19가 넓힌 여섯 개 축',
    description:
      '각 축은 새로 생긴 것이 아니라 이미 있던 것입니다. React 19는 그 축의 끝을 한 칸씩 늘렸습니다.',
    cards: [
      {
        id: 'update',
        num: '01',
        title: '업데이트 흐름',
        question: '업데이트는 어디서 시작하고 어디까지 이어지는가',
        features: 'Actions · Form Actions · useActionState',
        tone: 'cyan',
      },
      {
        id: 'render',
        num: '02',
        title: '렌더링 모델',
        question: '렌더 도중 비동기 리소스를 어떻게 읽는가',
        features: 'use() · Suspense · Error Boundary',
        tone: 'sky',
      },
      {
        id: 'element',
        num: '03',
        title: 'Element 표현',
        question: 'Element와 props는 무엇을 담는가',
        features: 'ref as prop · element.ref deprecation',
        tone: 'teal',
      },
      {
        id: 'dom',
        num: '04',
        title: 'DOM 자원 관리',
        question: '문서와 head 리소스는 누가 관리하는가',
        features: 'title · meta · link · script · style',
        tone: 'indigo',
      },
      {
        id: 'server',
        num: '05',
        title: '서버 경계',
        question: '컴포넌트 경계로 서버와 클라이언트를 어떻게 나누는가',
        features: 'Server Components · use client · use server',
        tone: 'emerald',
      },
      {
        id: 'priority',
        num: '06',
        title: '우선순위와 수명',
        question: '보이지 않는 UI는 어떤 우선순위로 살아 있는가',
        features: 'Activity · useEffectEvent · cacheSignal',
        tone: 'violet',
      },
    ],
    note: '여섯 축 중 앞의 다섯은 19.0에서, 여섯 번째는 19.2에서 크게 움직였습니다. 다음 절에서 그 시점을 분리합니다.',
  },
  versions: {
    badge: '03',
    eyebrow: 'timeline',
    title: '19.0과 19.2는 성격이 다른 릴리스다',
    description:
      '같은 "React 19"라도 언제 들어온 기능인지에 따라 목적이 다릅니다. 버전을 붙여 두면 혼동이 줄어듭니다.',
    entries: [
      {
        id: 'v190',
        version: 'React 19.0',
        date: '2024.12',
        meaning: '기본 모델과 표현의 대규모 정리',
        description:
          '업데이트·렌더링·Element·DOM 자원·서버 경계, 다섯 축이 한 번에 움직였습니다. 이 챕터의 2~7페이지가 여기에 해당합니다.',
        tags: ['Actions', 'use()', 'ref as prop', 'metadata', 'RSC'],
        tone: 'sky',
      },
      {
        id: 'v192',
        version: 'React 19.2',
        date: '2025.04',
        meaning: '우선순위·수명·캐시 개념의 확장',
        description:
          '새 모델을 만들기보다 기존 모델의 수명과 우선순위를 다듬었습니다. 8~9페이지가 여기에 해당합니다.',
        tags: ['Activity', 'useEffectEvent', 'cacheSignal', 'Partial Pre-rendering'],
        tone: 'violet',
      },
      {
        id: 'v1926',
        version: 'React 19.2.6',
        date: '2025.05',
        meaning: '이 챕터가 코드를 읽는 기준점',
        description:
          '모든 파일 경로와 코드 발췌는 이 태그를 기준으로 합니다. 버전이 다르면 파일이 갈라지거나 이름이 바뀌어 있을 수 있습니다.',
        tags: ['소스 기준', '경로 기준', '발췌 기준'],
        tone: 'blue',
      },
    ],
    note: '릴리스 노트를 읽을 때도 같은 습관이 통합니다. "무엇이 추가됐나"보다 "어느 축이 움직였나"를 먼저 보세요.',
  },
  bridgeMap: {
    badge: '04',
    eyebrow: 'connections',
    title: '앞선 열세 챕터와 이어 붙이기',
    description:
      '이 챕터의 기능은 전부 이미 읽은 구조 위에 얹힙니다. 왼쪽 질문이 기억난다면 오른쪽은 그 질문의 후속편입니다.',
    headers: ['앞에서 던졌던 질문', 'React 19 기능', '구조 변화로 읽으면'],
    rows: [
      {
        question: '업데이트는 어떻게 시작되는가',
        feature: 'Actions',
        reading: 'setState 한 번으로 끝나던 진입점이 비동기 함수와 form까지 넓어졌다',
      },
      {
        question: '렌더 중 실패는 어떻게 처리되는가',
        feature: 'use()',
        reading: 'thenable 추적이 공개 API가 되어 Suspense와 Error Boundary에 정식 연결됐다',
      },
      {
        question: 'Element와 JSX는 무엇인가',
        feature: 'ref as prop',
        reading: 'ref가 별도 슬롯에서 props의 한 키로 내려와 Element 모양이 단순해졌다',
      },
      {
        question: 'Commit은 DOM에 무엇을 반영하는가',
        feature: 'metadata / resource',
        reading: 'head 리소스의 수명 관리가 react-dom의 책임으로 들어왔다',
      },
      {
        question: 'Scheduler는 무엇을 먼저 하는가',
        feature: 'Activity',
        reading: '숨겨진 subtree가 "버리는 것"이 아니라 "낮은 우선순위로 살아 있는 것"이 됐다',
      },
    ],
    note: '표의 왼쪽 열이 낯설다면 그 챕터를 먼저 보고 오는 편이 빠릅니다. 이 챕터는 앞을 전제로 씁니다.',
  },
  roadmap: {
    badge: '05',
    eyebrow: 'roadmap',
    title: '남은 아홉 페이지가 지나갈 순서',
    description: '여섯 축을 하나씩 깊게 팝니다. 각 페이지는 축 하나와 소스 파일 하나로 끝납니다.',
    steps: [
      {
        id: 'map',
        num: '01',
        title: '변화 지도',
        description: '지금 페이지. 여섯 축과 두 버전을 나누는 기준을 세운다.',
        tone: 'blue',
      },
      {
        id: 'actions',
        num: '02',
        title: 'Actions',
        description: '업데이트 진입점이 비동기까지 넓어진 과정을 따라간다.',
        tone: 'cyan',
      },
      {
        id: 'form',
        num: '03',
        title: 'Form Actions',
        description: 'form submit이 이벤트 시스템을 지나 Action으로 바뀌는 지점을 본다.',
        tone: 'cyan',
      },
      {
        id: 'use',
        num: '04',
        title: 'use()',
        description: '렌더 도중 리소스를 읽는 규칙과 Suspense 연결을 확인한다.',
        tone: 'sky',
      },
      {
        id: 'ref',
        num: '05',
        title: 'ref as prop',
        description: 'Element와 props 표현이 어떻게 단순해졌는지 읽는다.',
        tone: 'teal',
      },
      {
        id: 'metadata',
        num: '06',
        title: 'Metadata / Resource',
        description: 'head 리소스를 컴포넌트로 선언하면 무슨 일이 일어나는지 본다.',
        tone: 'indigo',
      },
      {
        id: 'server',
        num: '07',
        title: 'Server Components',
        description: 'use client와 use server가 만드는 모듈 경계를 정리한다.',
        tone: 'emerald',
      },
      {
        id: 'activity',
        num: '08',
        title: 'Activity',
        description: '숨겨진 subtree의 상태와 effect가 어떻게 관리되는지 본다.',
        tone: 'violet',
      },
      {
        id: 'effect-event',
        num: '09',
        title: 'useEffectEvent',
        description: 'Effect에서 이벤트성 로직을 떼어 내는 설계를 읽는다.',
        tone: 'violet',
      },
      {
        id: 'after',
        num: '10',
        title: '19.2 이후 읽기법',
        description: '다음 릴리스를 스스로 이 지도 위에 올리는 방법으로 마무리한다.',
        tone: 'blue',
      },
    ],
    note: '순서대로 읽으면 좋지만, 축 단위로 끊어 읽어도 됩니다. 각 페이지는 자기 축 안에서 닫혀 있습니다.',
  },
  checkpoint: {
    badge: '06',
    eyebrow: 'code checkpoint',
    title: '변화를 가장 빨리 확인하는 파일',
    fileLabel: '파일',
    filePath: 'packages/react/src/ReactClient.js',
    lookForLabel: '볼 것',
    lookFor: "export { ... } from './ReactHooks'",
    whyLabel: '설명',
    why: '기능이 늘었는지 줄었는지는 이 export 목록의 변화로 가장 먼저 드러납니다. 릴리스 노트보다 이 파일의 diff가 정확합니다.',
    code: KO_CODE,
    primaryCta: 'ReactClient.js 소스 보기',
    primaryHref: REACT_CLIENT_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'Actions는 업데이트 흐름을 어디까지 넓혔을까',
    description: '첫 번째 축부터 봅니다. setState 하나로 끝나던 진입점이 어디까지 이어지는지.',
    cta: '다음 페이지로 이동',
    href: '/actions-update-flow',
  },
};

const en: React19ChangeMapContent = {
  hero: {
    badge: 'React 19 Changes · 1/10',
    title: { line1: 'React 19 is not a feature list.', line2: 'Six layers each got wider.' },
    description:
      'Memorized names fade fast. Read each feature as "which internal axis grew" and the name becomes a nickname for a location.',
    diagramBadge: 'six layers',
    diagramCaption: 'layer → what React 19 added',
    layers: [
      { id: 'update', label: 'Update model', feature: 'Actions', tone: 'cyan' },
      { id: 'render', label: 'Render model', feature: 'use()', tone: 'sky' },
      { id: 'element', label: 'Element shape', feature: 'ref as prop', tone: 'teal' },
      { id: 'dom', label: 'DOM resources', feature: 'metadata', tone: 'indigo' },
      { id: 'server', label: 'Server boundary', feature: 'RSC', tone: 'emerald' },
      { id: 'priority', label: 'Priority and lifetime', feature: 'Activity', tone: 'violet' },
    ],
  },
  trap: {
    badge: '01',
    eyebrow: 'list vs structure',
    title: 'A list is forgotten, a map is kept',
    description:
      'Here are the same five features written two ways. The left one is a release note, the right one is a map.',
    list: {
      title: 'Reading it as a list',
      badge: 'release note',
      description:
        'Nothing connects the names to each other, so there is nothing to do but memorize them.',
      bullets: [
        'Actions, use(), ref as prop, metadata and Activity all sit flat',
        'Nothing tells you which feature presupposes which',
        'Versions are mixed, so 19.0 and 19.2 blur together',
        'Every new release means memorizing the list again',
      ],
    },
    bridge: {
      headline: 'Put the same features\non top of the internals',
      sub: 'Remember locations instead of names and the next release lands in the same places.',
    },
    structure: {
      title: 'Reading it as structure',
      badge: 'change map',
      description:
        'Write down which existing axis each feature widened and the name becomes a nickname for a location.',
      bullets: [
        'Actions widened the update flow to cover async work',
        'use() let a render read a resource while it is running',
        'ref as prop changed how Element and props are shaped',
        'Activity brought hidden subtrees into the priority model',
      ],
    },
    note: 'The remaining nine pages all read the right-hand way. Each one starts by asking which layer the feature belongs to.',
  },
  axes: {
    badge: '02',
    eyebrow: 'six axes',
    title: 'The six axes React 19 widened',
    description: 'None of these axes are new. React 19 pushed each of them one notch further out.',
    cards: [
      {
        id: 'update',
        num: '01',
        title: 'Update flow',
        question: 'Where does an update start and how far does it reach',
        features: 'Actions · Form Actions · useActionState',
        tone: 'cyan',
      },
      {
        id: 'render',
        num: '02',
        title: 'Render model',
        question: 'How does a render read an async resource',
        features: 'use() · Suspense · Error Boundary',
        tone: 'sky',
      },
      {
        id: 'element',
        num: '03',
        title: 'Element shape',
        question: 'What do an Element and its props actually hold',
        features: 'ref as prop · element.ref deprecation',
        tone: 'teal',
      },
      {
        id: 'dom',
        num: '04',
        title: 'DOM resources',
        question: 'Who owns the document and head resources',
        features: 'title · meta · link · script · style',
        tone: 'indigo',
      },
      {
        id: 'server',
        num: '05',
        title: 'Server boundary',
        question: 'How does a component boundary split server from client',
        features: 'Server Components · use client · use server',
        tone: 'emerald',
      },
      {
        id: 'priority',
        num: '06',
        title: 'Priority and lifetime',
        question: 'At what priority does invisible UI stay alive',
        features: 'Activity · useEffectEvent · cacheSignal',
        tone: 'violet',
      },
    ],
    note: 'The first five axes moved in 19.0 and the sixth moved in 19.2. The next section separates those moments.',
  },
  versions: {
    badge: '03',
    eyebrow: 'timeline',
    title: '19.0 and 19.2 are different kinds of release',
    description:
      'Both are "React 19", but the purpose differs by when a feature landed. Tagging the version removes most of the confusion.',
    entries: [
      {
        id: 'v190',
        version: 'React 19.0',
        date: '2024.12',
        meaning: 'A large cleanup of the base models',
        description:
          'Update, render, Element, DOM resources and the server boundary all moved at once. Pages 2 through 7 of this chapter cover it.',
        tags: ['Actions', 'use()', 'ref as prop', 'metadata', 'RSC'],
        tone: 'sky',
      },
      {
        id: 'v192',
        version: 'React 19.2',
        date: '2025.04',
        meaning: 'Priority, lifetime and cache signals',
        description:
          'Rather than new models, it sharpened the lifetime and priority of existing ones. Pages 8 and 9 cover it.',
        tags: ['Activity', 'useEffectEvent', 'cacheSignal', 'Partial Pre-rendering'],
        tone: 'violet',
      },
      {
        id: 'v1926',
        version: 'React 19.2.6',
        date: '2025.05',
        meaning: 'The baseline this chapter reads from',
        description:
          'Every file path and code excerpt follows this tag. On another version a file may have been split or renamed.',
        tags: ['source baseline', 'path baseline', 'excerpt baseline'],
        tone: 'blue',
      },
    ],
    note: 'The same habit works on release notes. Ask which axis moved before you ask what was added.',
  },
  bridgeMap: {
    badge: '04',
    eyebrow: 'connections',
    title: 'Stitching this onto the previous thirteen chapters',
    description:
      'Every feature here sits on structure you have already read. If the question on the left rings a bell, the right side is its sequel.',
    headers: ['A question asked earlier', 'React 19 feature', 'Read as a structural change'],
    rows: [
      {
        question: 'How does an update start',
        feature: 'Actions',
        reading:
          'The entry point that ended at one setState now stretches to async functions and forms',
      },
      {
        question: 'How is a failure during render handled',
        feature: 'use()',
        reading:
          'Thenable tracking became a public API, formally wired to Suspense and Error Boundary',
      },
      {
        question: 'What are Element and JSX',
        feature: 'ref as prop',
        reading: 'ref moved out of its own slot into a props key, so the Element shape got simpler',
      },
      {
        question: 'What does commit put into the DOM',
        feature: 'metadata / resource',
        reading: 'Lifetime management of head resources became react-dom responsibility',
      },
      {
        question: 'What does the scheduler do first',
        feature: 'Activity',
        reading: 'A hidden subtree stopped being discarded and became alive at a low priority',
      },
    ],
    note: 'If the left column feels unfamiliar, that chapter is the faster place to start. This one assumes them.',
  },
  roadmap: {
    badge: '05',
    eyebrow: 'roadmap',
    title: 'The order the remaining nine pages take',
    description:
      'One axis at a time, in depth. Each page closes on a single axis and a single source file.',
    steps: [
      {
        id: 'map',
        num: '01',
        title: 'Change map',
        description: 'This page. Sets the six axes and separates the two versions.',
        tone: 'blue',
      },
      {
        id: 'actions',
        num: '02',
        title: 'Actions',
        description: 'Follows how the update entry point stretched to cover async work.',
        tone: 'cyan',
      },
      {
        id: 'form',
        num: '03',
        title: 'Form Actions',
        description: 'Watches a form submit pass through the event system and become an Action.',
        tone: 'cyan',
      },
      {
        id: 'use',
        num: '04',
        title: 'use()',
        description: 'Checks the rules for reading a resource mid-render and the Suspense wiring.',
        tone: 'sky',
      },
      {
        id: 'ref',
        num: '05',
        title: 'ref as prop',
        description: 'Reads how the Element and props shape got simpler.',
        tone: 'teal',
      },
      {
        id: 'metadata',
        num: '06',
        title: 'Metadata / Resource',
        description: 'Sees what happens when head resources are declared as components.',
        tone: 'indigo',
      },
      {
        id: 'server',
        num: '07',
        title: 'Server Components',
        description: 'Sorts out the module boundary that use client and use server create.',
        tone: 'emerald',
      },
      {
        id: 'activity',
        num: '08',
        title: 'Activity',
        description: 'Looks at how state and effects of a hidden subtree are managed.',
        tone: 'violet',
      },
      {
        id: 'effect-event',
        num: '09',
        title: 'useEffectEvent',
        description: 'Reads the design that pulls event-like logic out of an Effect.',
        tone: 'violet',
      },
      {
        id: 'after',
        num: '10',
        title: 'Reading past 19.2',
        description: 'Closes with a way to place the next release on this map yourself.',
        tone: 'blue',
      },
    ],
    note: 'Reading in order helps, but axis by axis works too. Each page is closed within its own axis.',
  },
  checkpoint: {
    badge: '06',
    eyebrow: 'code checkpoint',
    title: 'The fastest file for spotting a change',
    fileLabel: 'File',
    filePath: 'packages/react/src/ReactClient.js',
    lookForLabel: 'Look for',
    lookFor: "export { ... } from './ReactHooks'",
    whyLabel: 'Why',
    why: 'Whether the API grew or shrank shows up here first. The diff of this file is more precise than a release note.',
    code: EN_CODE,
    primaryCta: 'View ReactClient.js',
    primaryHref: REACT_CLIENT_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'How far did Actions widen the update flow',
    description:
      'Start with the first axis: how far an entry point that ended at one setState now reaches.',
    cta: 'Go to the next page',
    href: '/actions-update-flow',
  },
};

export const react19ChangeMapContent: Record<Locale, React19ChangeMapContent> = { ko, en };
