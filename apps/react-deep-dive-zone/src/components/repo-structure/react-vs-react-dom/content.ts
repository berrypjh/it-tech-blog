import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IconName =
  | 'atom'
  | 'monitor'
  | 'braces'
  | 'layers'
  | 'container'
  | 'browser'
  | 'fileCode'
  | 'server'
  | 'shieldCheck';

export type RoleCard = {
  id: 'react' | 'react-dom';
  title: string;
  subtitle: string;
  bullets: string[];
  tags: string[];
  tone: ToneKey;
  icon: IconName;
};

export type ComparisonRow = {
  id: 'role' | 'apis' | 'concern' | 'location';
  label: string;
  reactValue: string[];
  reactDomValue: string[];
};

export type FlowNode = {
  id: string;
  title: string;
  subtitle: string;
  /** 노드 유형. 'package'는 강조 카드, 'state'는 양 끝 일반 카드. */
  kind: 'state' | 'package';
  tone: ToneKey;
  icon: IconName;
};

export type EntrypointCard = {
  id: 'client' | 'server';
  title: string;
  subtitle: string;
  bullets: string[];
  tag: string;
  tone: ToneKey;
  icon: IconName;
};

export type SimpleQuiz = {
  id: 'hydrate-quiz' | 'reducer-quiz';
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

export type ReactVsReactDomContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    reactCard: RoleCard;
    reactDomCard: RoleCard;
    relationTopLine: string;
    relationBottomLine: string;
  };
  misconception: {
    eyebrow: string;
    title: string;
    leftBadge: string;
    leftQuote: string;
    leftCaption: string;
    rightBadge: string;
    rightQuote: string;
    rightCaption: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    columnLabels: { axis: string; react: string; reactDom: string };
    rows: ComparisonRow[];
  };
  usage: {
    eyebrow: string;
    title: string;
    code: string;
    codeHeader: string;
    codeBadge: string;
    pillReact: { lead: string; description: string };
    pillReactDom: { lead: string; description: string };
    flowHeading: string;
    topFlow: FlowNode[];
    bottomFlow: FlowNode[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    descriptionLabel: string;
    descriptionValue: string;
    learningQuestion: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    pointLabel: string;
    pointMessage: string;
  };
  entrypoints: {
    eyebrow: string;
    title: string;
    client: EntrypointCard;
    server: EntrypointCard;
    centerHeading: string;
    centerCaption: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    cards: SimpleQuiz[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const counterCode = `import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Counter />);
`;

const createRootCode = `export function createRoot(container, options) {
  if (!isValidContainer(container)) {
    throw new Error('Target container is not a DOM element.');
  }

  warnIfReactDOMContainerInDEV(container);

  const root = new ReactDOMRoot(container, options);
  return root;
}
`;

export const reactVsReactDomContent: Record<Locale, ReactVsReactDomContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 4/10단계',
      title: { line1: 'React와 React DOM은', line2: '역할이 다릅니다.' },
      description:
        'react는 컴포넌트와 상태를 설명하는 API를 제공하고, react-dom은 그 결과를 브라우저 DOM에 연결합니다.',
      primaryCta: '역할 비교 정리 보기',
      secondaryCta: 'React GitHub 열기',
      primaryHref: '#section-comparison',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages',
      reactCard: {
        id: 'react',
        title: 'react',
        subtitle: 'UI를 설명하는 API 레이어',
        bullets: ['컴포넌트, 상태, 훅 제공', 'UI를 "어떻게" 표현할지 정의', '플랫폼에 독립적'],
        tags: ['코어 API', '플랫폼 독립'],
        tone: 'blue',
        icon: 'atom',
      },
      reactDomCard: {
        id: 'react-dom',
        title: 'react-dom',
        subtitle: 'DOM에 연결하는 렌더러',
        bullets: ['DOM 노드 생성 및 업데이트', '브라우저 환경과 상호작용', '실제 화면에 반영'],
        tags: ['DOM Renderer', '브라우저 전용'],
        tone: 'emerald',
        icon: 'monitor',
      },
      relationTopLine: '설명을',
      relationBottomLine: '현실로 연결',
    },
    misconception: {
      eyebrow: '02 · misconception',
      title: '흔한 오해 바로잡기',
      leftBadge: '오해',
      leftQuote: '“React = 브라우저 DOM을 직접 다루는 라이브러리”',
      leftCaption: 'React가 DOM을 직접 조작한다고 생각하기 쉽습니다.',
      rightBadge: '정확히',
      rightQuote: '“React는 UI를 설명하고, DOM 연결은 react-dom이 담당한다.”',
      rightCaption: '관심사의 분리가 React 구조를 이해하는 핵심입니다.',
    },
    comparison: {
      eyebrow: '03 · role comparison',
      title: 'react / react-dom 역할 비교',
      description: '같은 React라도 어느 패키지에서 무엇을 담당하는지 한 표로 정리합니다.',
      columnLabels: { axis: '구분', react: 'react', reactDom: 'react-dom' },
      rows: [
        {
          id: 'role',
          label: '주 역할',
          reactValue: ['컴포넌트, 상태, 훅 등 Core API 제공'],
          reactDomValue: ['DOM 렌더링 및 브라우저 연결'],
        },
        {
          id: 'apis',
          label: '예시 API',
          reactValue: ['useState · useEffect · useReducer', 'createElement · useTransition · use'],
          reactDomValue: ['createRoot · hydrateRoot · render', 'flushSync · findDOMNode (legacy)'],
        },
        {
          id: 'concern',
          label: '관심사',
          reactValue: ['UI를 어떻게 표현할지 정의', '(플랫폼 독립)'],
          reactDomValue: ['UI 설명을 실제 DOM에 반영', '(브라우저 전용)'],
        },
        {
          id: 'location',
          label: '저장소 위치',
          reactValue: ['packages/react'],
          reactDomValue: ['packages/react-dom'],
        },
      ],
    },
    usage: {
      eyebrow: '04 · usage split',
      title: '실제 사용 코드에서 역할 나누기',
      code: counterCode,
      codeHeader: 'app/Counter.tsx',
      codeBadge: 'main',
      pillReact: {
        lead: 'useState → react',
        description: '상태의 로직을 정의하는 API',
      },
      pillReactDom: {
        lead: 'createRoot → react-dom',
        description: '정의된 UI를 브라우저 DOM에 연결',
      },
      flowHeading: '호흡 한눈에 보기',
      topFlow: [
        {
          id: 'component-code',
          title: 'Component code',
          subtitle: '상태, 훅, JSX',
          kind: 'state',
          tone: 'sky',
          icon: 'braces',
        },
        {
          id: 'react',
          title: 'react',
          subtitle: 'UI를 설명하는 API',
          kind: 'package',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'ui-description',
          title: 'UI description',
          subtitle: 'React Element Tree',
          kind: 'state',
          tone: 'indigo',
          icon: 'layers',
        },
      ],
      bottomFlow: [
        {
          id: 'container-mount',
          title: 'Container mount',
          subtitle: 'DOM 컨테이너 선택',
          kind: 'state',
          tone: 'teal',
          icon: 'container',
        },
        {
          id: 'react-dom',
          title: 'react-dom',
          subtitle: 'DOM에 연결하는 렌더러',
          kind: 'package',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'browser-dom',
          title: 'Browser DOM',
          subtitle: '실제 화면',
          kind: 'state',
          tone: 'cyan',
          icon: 'browser',
        },
      ],
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: '코드 체크포인트: 브라우저 DOM과 React는 어디서 연결될까?',
      fileLabel: '파일',
      filePath: 'packages/react-dom/src/client/ReactDOMRoot.js',
      functionLabel: '볼 함수',
      functionName: 'createRoot',
      descriptionLabel: '설명',
      descriptionValue:
        'React 애플리케이션의 진입점을 만들고, DOM 컨테이너와 Fiber 루트를 연결합니다.',
      learningQuestion: '왜 createRoot는\nDOM container를 먼저 검증할까?',
      primaryCta: 'ReactDOMRoot.js 읽기',
      secondaryCta: 'react-dom 패키지 보기',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react-dom',
      codeHeader: 'packages/react-dom/src/client/ReactDOMRoot.js',
      codeBadge: 'main',
      code: createRootCode,
      pointLabel: '포인트',
      pointMessage:
        '유효한 DOM 컨테이너인지 먼저 확인해야, 이후 렌더링 과정이 안전하게 진행됩니다.',
    },
    entrypoints: {
      eyebrow: '06 · entrypoints',
      title: '브라우저 / 서버 진입점 분리',
      client: {
        id: 'client',
        title: 'react-dom/client',
        subtitle: '브라우저 렌더링 진입점',
        bullets: [
          'createRoot, hydrateRoot 제공',
          '브라우저의 DOM API와 직접 상호작용',
          '클라이언트 사이드 렌더링(CSR) / 하이드레이션',
        ],
        tag: '브라우저 환경',
        tone: 'blue',
        icon: 'browser',
      },
      server: {
        id: 'server',
        title: 'react-dom/server',
        subtitle: '서버 렌더링 진입점',
        bullets: [
          'renderToString, renderToPipeableStream 제공',
          'DOM 없이 문자열/스트림으로 HTML 생성',
          '서버 사이드 렌더링(SSR)',
        ],
        tag: '서버 환경',
        tone: 'emerald',
        icon: 'server',
      },
      centerHeading: '환경이 다르면\n진입점도 달라진다',
      centerCaption: '같은 React라도 실행 환경에 따라 사용하는 엔트리가 다릅니다.',
    },
    quiz: {
      eyebrow: '07 · quick check',
      title: '빠른 판단 퀴즈',
      cards: [
        {
          id: 'hydrate-quiz',
          question: 'Q. hydrateRoot는 어디에 가까울까?',
          hint: '힌트: 서버에서 보낸 HTML과 브라우저 DOM을 이어붙이는 작업',
          accordionLabel: '정답 보기',
          answer: '정답: react-dom',
          answerDescription: 'DOM 하이드레이션은 DOM 렌더러의 책임이므로 react-dom에 있습니다.',
          tone: 'emerald',
        },
        {
          id: 'reducer-quiz',
          question: 'Q. useReducer는 어디에 가까울까?',
          hint: '힌트: 상태 변화 로직을 정의하는 코어 API',
          accordionLabel: '정답 보기',
          answer: '정답: react',
          answerDescription: '상태 관리 로직 API를 제공하는 코어 레이어로 react에 있습니다.',
          tone: 'blue',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'React와 DOM renderer의 경계를 이해했다면,',
      description:
        '이제 그 사이에서 실제 렌더링 계산을 담당하는 ' + 'react-reconciler' + '를 살펴봅니다.',
      cta: '다음: react-reconciler',
      href: '/reconciler-location',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 4/10',
      title: { line1: 'React and React DOM', line2: 'play different roles.' },
      description:
        'react provides APIs that describe components and state, while react-dom connects those descriptions to the browser DOM.',
      primaryCta: 'See the role comparison',
      secondaryCta: 'Open React on GitHub',
      primaryHref: '#section-comparison',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages',
      reactCard: {
        id: 'react',
        title: 'react',
        subtitle: 'API layer that describes UI',
        bullets: [
          'Provides components, state and hooks',
          'Defines *how* UI is expressed',
          'Platform-independent',
        ],
        tags: ['Core API', 'Platform-independent'],
        tone: 'blue',
        icon: 'atom',
      },
      reactDomCard: {
        id: 'react-dom',
        title: 'react-dom',
        subtitle: 'Renderer that wires to the DOM',
        bullets: [
          'Creates and updates DOM nodes',
          'Interacts with the browser environment',
          'Reflects changes to the real screen',
        ],
        tags: ['DOM Renderer', 'Browser-only'],
        tone: 'emerald',
        icon: 'monitor',
      },
      relationTopLine: 'Connecting the description',
      relationBottomLine: 'to reality',
    },
    misconception: {
      eyebrow: '02 · misconception',
      title: 'Correcting a common misconception',
      leftBadge: 'Misconception',
      leftQuote: '“React = a library that directly manipulates the browser DOM.”',
      leftCaption: 'It is easy to assume React touches the DOM itself.',
      rightBadge: 'Reality',
      rightQuote: '“React describes the UI; react-dom handles the DOM connection.”',
      rightCaption: 'Separation of concerns is the heart of React’s structure.',
    },
    comparison: {
      eyebrow: '03 · role comparison',
      title: 'react vs react-dom role comparison',
      description: 'A single table summarising who is responsible for what across both packages.',
      columnLabels: { axis: 'Aspect', react: 'react', reactDom: 'react-dom' },
      rows: [
        {
          id: 'role',
          label: 'Primary role',
          reactValue: ['Provides components, state, hooks, and other Core APIs'],
          reactDomValue: ['DOM rendering and the browser connection'],
        },
        {
          id: 'apis',
          label: 'Example APIs',
          reactValue: ['useState · useEffect · useReducer', 'createElement · useTransition · use'],
          reactDomValue: ['createRoot · hydrateRoot · render', 'flushSync · findDOMNode (legacy)'],
        },
        {
          id: 'concern',
          label: 'Concern',
          reactValue: ['Defines how UI is expressed', '(platform-independent)'],
          reactDomValue: ['Applies that description to the real DOM', '(browser-only)'],
        },
        {
          id: 'location',
          label: 'Repo location',
          reactValue: ['packages/react'],
          reactDomValue: ['packages/react-dom'],
        },
      ],
    },
    usage: {
      eyebrow: '04 · usage split',
      title: 'Split roles in actual usage code',
      code: counterCode,
      codeHeader: 'app/Counter.tsx',
      codeBadge: 'main',
      pillReact: {
        lead: 'useState → react',
        description: 'API that defines state logic',
      },
      pillReactDom: {
        lead: 'createRoot → react-dom',
        description: 'Connects the described UI to the browser DOM',
      },
      flowHeading: 'See the flow at a glance',
      topFlow: [
        {
          id: 'component-code',
          title: 'Component code',
          subtitle: 'State, hooks, JSX',
          kind: 'state',
          tone: 'sky',
          icon: 'braces',
        },
        {
          id: 'react',
          title: 'react',
          subtitle: 'API that describes UI',
          kind: 'package',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'ui-description',
          title: 'UI description',
          subtitle: 'React Element Tree',
          kind: 'state',
          tone: 'indigo',
          icon: 'layers',
        },
      ],
      bottomFlow: [
        {
          id: 'container-mount',
          title: 'Container mount',
          subtitle: 'Pick a DOM container',
          kind: 'state',
          tone: 'teal',
          icon: 'container',
        },
        {
          id: 'react-dom',
          title: 'react-dom',
          subtitle: 'Renderer that wires to the DOM',
          kind: 'package',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'browser-dom',
          title: 'Browser DOM',
          subtitle: 'Real screen',
          kind: 'state',
          tone: 'cyan',
          icon: 'browser',
        },
      ],
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: 'Code checkpoint: where do the browser DOM and React meet?',
      fileLabel: 'File',
      filePath: 'packages/react-dom/src/client/ReactDOMRoot.js',
      functionLabel: 'Function',
      functionName: 'createRoot',
      descriptionLabel: 'Description',
      descriptionValue:
        'Creates the entry point of a React app and links a DOM container with a Fiber root.',
      learningQuestion: 'Why does createRoot validate\nthe DOM container first?',
      primaryCta: 'Read ReactDOMRoot.js',
      secondaryCta: 'Open the react-dom package',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react-dom',
      codeHeader: 'packages/react-dom/src/client/ReactDOMRoot.js',
      codeBadge: 'main',
      code: createRootCode,
      pointLabel: 'Takeaway',
      pointMessage:
        'Validating the DOM container first keeps the rest of the render pipeline safe.',
    },
    entrypoints: {
      eyebrow: '06 · entrypoints',
      title: 'Browser vs server entrypoints',
      client: {
        id: 'client',
        title: 'react-dom/client',
        subtitle: 'Browser-side render entry',
        bullets: [
          'Provides createRoot and hydrateRoot',
          'Interacts with the browser DOM APIs',
          'Client-side rendering (CSR) and hydration',
        ],
        tag: 'Browser env',
        tone: 'blue',
        icon: 'browser',
      },
      server: {
        id: 'server',
        title: 'react-dom/server',
        subtitle: 'Server-side render entry',
        bullets: [
          'Provides renderToString and renderToPipeableStream',
          'Generates HTML as strings/streams without a DOM',
          'Server-side rendering (SSR)',
        ],
        tag: 'Server env',
        tone: 'emerald',
        icon: 'server',
      },
      centerHeading: 'Different environments\nmean different entrypoints',
      centerCaption: 'Same React — but the entry you use depends on where it runs.',
    },
    quiz: {
      eyebrow: '07 · quick check',
      title: 'Quick judgement quiz',
      cards: [
        {
          id: 'hydrate-quiz',
          question: 'Q. Which package does hydrateRoot live in?',
          hint: 'Hint: It stitches server HTML to browser DOM',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: react-dom',
          answerDescription:
            'DOM hydration is a renderer responsibility, so it ships with react-dom.',
          tone: 'emerald',
        },
        {
          id: 'reducer-quiz',
          question: 'Q. Which package does useReducer live in?',
          hint: 'Hint: It is a core API that defines state-change logic',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: react',
          answerDescription:
            'It is part of the core state-management API layer, so it ships with react.',
          tone: 'blue',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Now that the React–DOM renderer boundary is clear,',
      description:
        'turn to the engine in between — ' +
        'react-reconciler' +
        ' — that runs the actual rendering math.',
      cta: 'Next: react-reconciler',
      href: '/reconciler-location',
    },
  },
};
