import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ZoneId = 'server' | 'boundary' | 'client' | 'function';

export type HeroZone = {
  id: ZoneId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type KindId = 'server' | 'client' | 'function';

export type KindCard = {
  id: KindId;
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type CallStepId = 'invoke' | 'reference' | 'execute' | 'serialize' | 'apply';

export type CallStep = {
  id: CallStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type CapabilityRow = {
  topic: string;
  server: string;
  client: string;
};

export type ServerComponentsContractContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    zones: HeroZone[];
  };
  kinds: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: KindCard[];
    note: string;
  };
  directives: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    client: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    server: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  callFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: CallStep[];
    note: string;
  };
  capabilities: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: CapabilityRow[];
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

const KO_CODE = `// packages/react/package.json - 번들러가 읽는 계약
"exports": {
  ".": {
    "react-server": "./react.react-server.js",   // 서버 그래프에서 고르는 빌드
    "default": "./index.js"                       // 그 외 모든 곳
  },
  "./jsx-runtime": {
    "react-server": "./jsx-runtime.react-server.js",
    "default": "./jsx-runtime.js"
  }
}

// react-server 빌드에는 useState 같은 클라이언트 전용 API가 아예 없다.
// 서버 그래프에서 useState를 부르면 런타임이 아니라 import 단계에서 막힌다.`;

const EN_CODE = `// packages/react/package.json - the contract a bundler reads
"exports": {
  ".": {
    "react-server": "./react.react-server.js",   // the build chosen in the server graph
    "default": "./index.js"                       // everywhere else
  },
  "./jsx-runtime": {
    "react-server": "./jsx-runtime.react-server.js",
    "default": "./jsx-runtime.js"
  }
}

// The react-server build simply has no client-only APIs such as useState.
// Calling useState in the server graph fails at import time, not at runtime.`;

const PACKAGE_HREF = 'https://github.com/facebook/react/blob/main/packages/react/package.json';

const ko: ServerComponentsContractContent = {
  hero: {
    badge: 'React 19 변화 · 7/10단계',
    title: { line1: 'RSC의 핵심은 서버 실행이 아니라', line2: '모듈 그래프가 둘로 갈린 것이다' },
    description:
      '어디서 도느냐보다 어디에 속하느냐가 먼저입니다. 두 그래프를 잇는 문법이 use client와 use server입니다.',
    diagramBadge: 'two graphs',
    diagramCaption: 'server graph ↔ client graph',
    zones: [
      { id: 'server', label: 'Server Component', caption: '서버 그래프에 속한다', tone: 'emerald' },
      { id: 'boundary', label: "'use client'", caption: '여기서 그래프가 갈린다', tone: 'indigo' },
      {
        id: 'client',
        label: 'Client Component',
        caption: '클라이언트 그래프에 속한다',
        tone: 'cyan',
      },
      { id: 'function', label: "'use server'", caption: '참조로 서버를 다시 부른다', tone: 'teal' },
    ],
  },
  kinds: {
    badge: '01',
    eyebrow: 'three kinds',
    title: '이름이 비슷한 세 가지를 먼저 갈라 둔다',
    description:
      'Server Component와 Server Function은 다른 것입니다. 하나는 렌더 결과를, 하나는 호출 참조를 만듭니다.',
    cards: [
      {
        id: 'server',
        title: 'Server Component',
        description:
          '서버에서 렌더되고 결과만 직렬화되어 내려옵니다. 코드 자체는 브라우저로 가지 않습니다.',
        badge: '기본값',
        tone: 'emerald',
      },
      {
        id: 'client',
        title: 'Client Component',
        description:
          "'use client'가 붙은 파일부터입니다. 상태·이벤트·브라우저 API는 여기서만 됩니다.",
        badge: "'use client'",
        tone: 'cyan',
      },
      {
        id: 'function',
        title: 'Server Function',
        description:
          '클라이언트가 부르지만 본문은 서버에서 돕니다. 클라이언트에는 참조만 내려갑니다.',
        badge: "'use server'",
        tone: 'teal',
      },
    ],
    note: 'Server Component가 기본값이라는 점이 중요합니다. 지시어가 없는 파일은 서버 그래프에 속합니다.',
  },
  directives: {
    badge: '02',
    eyebrow: 'two directives',
    title: '두 지시어는 반대 방향의 문이다',
    description:
      '둘 다 문자열 한 줄이지만 하는 일이 다릅니다. 하나는 경계를 긋고, 하나는 경계를 건너 돌아옵니다.',
    client: {
      title: "'use client'",
      badge: '경계를 긋는다',
      description: '이 파일부터 아래는 클라이언트 그래프라고 번들러에게 알립니다.',
      bullets: [
        '파일 맨 위에 한 번 쓰면 그 모듈과 그 아래가 클라이언트가 된다',
        '서버 컴포넌트는 이 경계 너머의 컴포넌트를 자식으로 쓸 수 있다',
        '경계를 넘겨 주는 props는 직렬화 가능한 값이어야 한다',
        '함수를 넘기려면 그 함수가 Server Function이어야 한다',
      ],
    },
    bridge: {
      headline: '한쪽은 경계를 긋고\n한쪽은 경계를 건넌다',
      sub: '그래서 둘은 대칭이 아닙니다. use client는 모듈에, use server는 함수에 붙습니다.',
    },
    server: {
      title: "'use server'",
      badge: '경계를 건넌다',
      description: '이 함수는 서버에서만 실행된다고 표시하고, 호출 가능한 참조를 만듭니다.',
      bullets: [
        '파일 맨 위 또는 함수 본문 첫 줄에 쓴다',
        '클라이언트에는 함수 코드가 아니라 id 같은 참조만 내려간다',
        '호출하면 네트워크 요청이 되므로 인자는 직렬화 가능해야 한다',
        'form의 action에 그대로 꽂으면 두 번째 페이지의 Action 흐름과 합류한다',
      ],
    },
    note: "이름 때문에 헷갈리기 쉽습니다. 'use client'는 클라이언트에서 실행하라는 뜻이 아니라, 여기가 클라이언트 진입점이라는 표시입니다.",
  },
  callFlow: {
    badge: '03',
    eyebrow: 'one call',
    title: 'Server Function 한 번이 지나가는 다섯 칸',
    description: '평범한 함수 호출처럼 보이지만 실제로는 네트워크를 한 번 건너갑니다.',
    steps: [
      {
        id: 'invoke',
        num: '01',
        title: '클라이언트에서 호출한다',
        description: '버튼 클릭이든 form 제출이든, 코드에서는 그냥 함수를 부르는 모양입니다.',
        tone: 'cyan',
      },
      {
        id: 'reference',
        num: '02',
        title: '참조와 인자만 보낸다',
        description:
          '함수 본문은 브라우저에 없습니다. 어떤 함수인지 가리키는 id와 직렬화된 인자만 갑니다.',
        tone: 'teal',
      },
      {
        id: 'execute',
        num: '03',
        title: '서버에서 본문이 돈다',
        description: 'DB나 파일시스템에 닿는 코드가 이 칸 안에서만 실행됩니다.',
        tone: 'emerald',
      },
      {
        id: 'serialize',
        num: '04',
        title: '결과를 직렬화해 돌려준다',
        description:
          '반환값도 경계를 넘으므로 직렬화 가능해야 합니다. 클래스 인스턴스는 넘길 수 없습니다.',
        tone: 'indigo',
      },
      {
        id: 'apply',
        num: '05',
        title: 'UI에 반영한다',
        description: 'Action으로 호출했다면 이 시점에 pending이 꺼지고 결과가 상태로 들어갑니다.',
        tone: 'sky',
      },
    ],
    note: '02와 04가 이 모델의 제약입니다. 경계를 넘는 모든 값은 직렬화를 통과해야 합니다.',
  },
  capabilities: {
    badge: '04',
    eyebrow: 'what you can do',
    title: '어느 쪽에서 무엇이 되는가',
    description: '경계를 잘못 그었을 때 실제로 부딪히는 다섯 가지입니다.',
    headers: ['확인할 것', 'Server Component', 'Client Component'],
    rows: [
      {
        topic: 'useState / useEffect',
        server: '쓸 수 없다 - 빌드에 존재하지 않는다',
        client: '평소처럼 쓴다',
      },
      {
        topic: 'onClick 같은 이벤트',
        server: '넘길 수 없다 - 직렬화되지 않는다',
        client: '평소처럼 쓴다',
      },
      {
        topic: 'DB와 파일시스템',
        server: '직접 접근한다',
        client: '접근할 수 없다 - Server Function으로 부른다',
      },
      {
        topic: '클라이언트 번들 크기',
        server: '영향이 없다 - 코드가 내려가지 않는다',
        client: '그대로 번들에 포함된다',
      },
      {
        topic: 'async 컴포넌트',
        server: '가능하다 - 렌더가 await를 기다린다',
        client: '불가능하다 - use()로 읽는다',
      },
    ],
    note: '마지막 줄이 앞 페이지와 이어집니다. 클라이언트에서 비동기 값을 읽는 방법이 곧 use()입니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '그래프가 갈린다는 사실이 적힌 곳',
    fileLabel: '파일',
    filePath: 'packages/react/package.json',
    lookForLabel: '볼 것',
    lookFor: '"react-server" export condition',
    whyLabel: '설명',
    why: '경계가 런타임 검사가 아니라 번들러 계약이라는 증거입니다. 서버 그래프는 React의 다른 빌드를 아예 다른 파일로 가져갑니다.',
    code: KO_CODE,
    primaryCta: 'react/package.json 보기',
    primaryHref: PACKAGE_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: '보이지 않는 UI는 어떻게 살려 둘까',
    description: '서버 경계 축을 마치고 19.2가 넓힌 우선순위 축으로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/activity-hidden-ui',
  },
};

const en: ServerComponentsContractContent = {
  hero: {
    badge: 'React 19 Changes · 7/10',
    title: {
      line1: 'RSC is not about running on a server.',
      line2: 'The module graph split in two.',
    },
    description:
      'Where code belongs matters before where it runs. use client and use server are the syntax that joins the two graphs.',
    diagramBadge: 'two graphs',
    diagramCaption: 'server graph ↔ client graph',
    zones: [
      {
        id: 'server',
        label: 'Server Component',
        caption: 'belongs to the server graph',
        tone: 'emerald',
      },
      { id: 'boundary', label: "'use client'", caption: 'the graph splits here', tone: 'indigo' },
      {
        id: 'client',
        label: 'Client Component',
        caption: 'belongs to the client graph',
        tone: 'cyan',
      },
      {
        id: 'function',
        label: "'use server'",
        caption: 'calls back across by reference',
        tone: 'teal',
      },
    ],
  },
  kinds: {
    badge: '01',
    eyebrow: 'three kinds',
    title: 'Separate the three similar names first',
    description:
      'A Server Component and a Server Function are different things: one produces render output, the other a call reference.',
    cards: [
      {
        id: 'server',
        title: 'Server Component',
        description:
          'Rendered on the server; only the result is serialized down. The code never reaches the browser.',
        badge: 'the default',
        tone: 'emerald',
      },
      {
        id: 'client',
        title: 'Client Component',
        description:
          "Starts at a file marked 'use client'. State, events and browser APIs only work here.",
        badge: "'use client'",
        tone: 'cyan',
      },
      {
        id: 'function',
        title: 'Server Function',
        description:
          'Called from the client but its body runs on the server. Only a reference goes down.',
        badge: "'use server'",
        tone: 'teal',
      },
    ],
    note: 'That Server Component is the default matters: a file with no directive belongs to the server graph.',
  },
  directives: {
    badge: '02',
    eyebrow: 'two directives',
    title: 'The two directives are doors facing opposite ways',
    description:
      'Both are a one-line string, but they do different jobs. One draws the border; the other crosses back over it.',
    client: {
      title: "'use client'",
      badge: 'draws the border',
      description: 'It tells the bundler that this file and below belong to the client graph.',
      bullets: [
        'Written once at the top of a file, it makes that module and its imports client code',
        'A server component may still use components from beyond that border as children',
        'Props crossing the border must be serializable values',
        'To pass a function across, that function has to be a Server Function',
      ],
    },
    bridge: {
      headline: 'One draws the border,\nthe other crosses it',
      sub: 'They are not symmetric: use client applies to a module, use server applies to a function.',
    },
    server: {
      title: "'use server'",
      badge: 'crosses the border',
      description:
        'It marks a function as server-only and produces a reference the client can call.',
      bullets: [
        'Written at the top of a file or as the first line of a function body',
        'The client gets a reference such as an id, never the function code',
        'Calling it is a network request, so the arguments must be serializable',
        'Drop it into a form action and it joins the Action flow from page two',
      ],
    },
    note: "The names mislead: 'use client' does not mean run this on the client, it marks where the client entry point is.",
  },
  callFlow: {
    badge: '03',
    eyebrow: 'one call',
    title: 'The five slots one Server Function call passes through',
    description: 'It looks like an ordinary function call, but it crosses the network once.',
    steps: [
      {
        id: 'invoke',
        num: '01',
        title: 'The client calls it',
        description: 'Click or form submit, in code it looks exactly like calling a function.',
        tone: 'cyan',
      },
      {
        id: 'reference',
        num: '02',
        title: 'Only a reference and arguments go out',
        description:
          'The body is not in the browser. An id identifying the function and serialized arguments travel.',
        tone: 'teal',
      },
      {
        id: 'execute',
        num: '03',
        title: 'The body runs on the server',
        description: 'Code touching a database or the filesystem only ever runs inside this slot.',
        tone: 'emerald',
      },
      {
        id: 'serialize',
        num: '04',
        title: 'The result is serialized back',
        description:
          'The return value crosses the border too, so it must serialize. Class instances cannot travel.',
        tone: 'indigo',
      },
      {
        id: 'apply',
        num: '05',
        title: 'The UI is updated',
        description:
          'Called through an Action, this is when pending turns off and the result becomes state.',
        tone: 'sky',
      },
    ],
    note: 'Slots 02 and 04 are the constraint of this model: everything crossing the border must survive serialization.',
  },
  capabilities: {
    badge: '04',
    eyebrow: 'what you can do',
    title: 'What works on which side',
    description:
      'These five are what you actually hit when the border is drawn in the wrong place.',
    headers: ['What to check', 'Server Component', 'Client Component'],
    rows: [
      {
        topic: 'useState / useEffect',
        server: 'Unavailable - not in that build at all',
        client: 'Works as usual',
      },
      {
        topic: 'Handlers such as onClick',
        server: 'Cannot be passed - it does not serialize',
        client: 'Works as usual',
      },
      {
        topic: 'Database and filesystem',
        server: 'Accessed directly',
        client: 'No access - call a Server Function',
      },
      {
        topic: 'Client bundle size',
        server: 'No effect - the code never ships',
        client: 'Included in the bundle as written',
      },
      {
        topic: 'async components',
        server: 'Allowed - the render awaits',
        client: 'Not allowed - read it with use()',
      },
    ],
    note: 'The last row loops back to the previous page: use() is how the client reads an async value.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'Where the split is written down',
    fileLabel: 'File',
    filePath: 'packages/react/package.json',
    lookForLabel: 'Look for',
    lookFor: '"react-server" export condition',
    whyLabel: 'Why',
    why: 'Proof that the border is a bundler contract, not a runtime check. The server graph pulls an entirely different build of React.',
    code: EN_CODE,
    primaryCta: 'View react/package.json',
    primaryHref: PACKAGE_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'How do you keep invisible UI alive',
    description: 'The server boundary is done; the priority axis 19.2 widened is next.',
    cta: 'Go to the next page',
    href: '/activity-hidden-ui',
  },
};

export const serverComponentsContractContent: Record<Locale, ServerComponentsContractContent> = {
  ko,
  en,
};
