import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type ReactDomIconName =
  | 'atom'
  | 'box'
  | 'container'
  | 'cube'
  | 'fileCode'
  | 'fileText'
  | 'flow'
  | 'globe'
  | 'help'
  | 'hydration'
  | 'layers'
  | 'monitor'
  | 'network'
  | 'refresh'
  | 'server'
  | 'sparkles';

export type HeroDiagramNode = {
  id: 'container' | 'html' | 'serverStream';
  title: string;
  caption: string;
  iconName: ReactDomIconName;
  tone: ToneKey;
  code?: string;
  description: string;
};

export type CompareCardEntry = {
  id: 'react' | 'react-dom';
  name: string;
  apis: string[];
  description: string;
  iconName: ReactDomIconName;
  tone: ToneKey;
};

export type ClientServerCard = {
  id: 'client' | 'server';
  name: string;
  items: string[];
  description: string;
  info: string;
  iconName: ReactDomIconName;
  tone: ToneKey;
};

export type FlowStep = {
  id: string;
  step: string;
  title: string;
  caption?: string;
};

export type CreateHydrateCard = {
  id: 'createRoot' | 'hydrateRoot';
  name: string;
  subtitle: string;
  code: string;
  steps: FlowStep[];
  description: string;
  tone: ToneKey;
};

export type CheckpointItem = {
  id: 'file' | 'functions' | 'question';
  label: string;
  value: string;
  iconName: ReactDomIconName;
  tone: ToneKey;
};

export type ConcernCard = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconName: ReactDomIconName;
  tone: ToneKey;
};

export type ReactDomContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    centerCard: { title: string; caption: string };
    nodes: HeroDiagramNode[];
    a11yFlow: string;
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    cards: CompareCardEntry[];
    vsLabel: string;
    banner: string;
  };
  clientServer: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ClientServerCard[];
    banner: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    description: string;
    cards: CreateHydrateCard[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    items: CheckpointItem[];
    codeCaption: string;
    code: string;
    codeLinks: { label: string; href: string }[];
  };
  concerns: {
    eyebrow: string;
    title: string;
    cards: ConcernCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_DOM_ROOT_CODE = `// ReactDOMRoot.js 일부 범위
export function createRoot(container, options) {
  // 1. 컨테이너 검증이 필요
  if (!isValidContainer(container)) {
    throw new Error(
      'Target container is not a DOM element.'
    );
  }

  // 옵션 처리 및 루트 생성
  const root = createContainer(
    container,
    ConcurrentRoot,
    options,
  );
  return new ReactDOMRoot(root);
}`;

export const reactDomContent: Record<Locale, ReactDomContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 3/10단계',
      title: {
        line1: 'react-dom은 React를',
        line2: '실제 브라우저와 서버 환경에',
        line3: '연결합니다.',
      },
      description:
        '컴포넌트와 상태를 설명하는 것만으로는 화면이 나타나지 않습니다. react-dom은 그 설명을 DOM 컨테이너와 서버 출력으로 이어줍니다.',
      centerCard: { title: 'react-dom', caption: 'renderer' },
      nodes: [
        {
          id: 'container',
          title: 'DOM 컨테이너',
          caption: '브라우저',
          iconName: 'container',
          tone: 'teal',
          code: '<div id="root"></div>',
          description: 'createRoot / hydrateRoot가 붙는 진입점',
        },
        {
          id: 'html',
          title: 'HTML 문서',
          caption: '브라우저',
          iconName: 'monitor',
          tone: 'violet',
          description: '최종 HTML 구조 — 브라우저에 표시',
        },
        {
          id: 'serverStream',
          title: '서버 스트림 / HTML 출력',
          caption: '서버',
          iconName: 'server',
          tone: 'emerald',
          code: '<html>\n  ...\n</html>',
          description: 'renderTo* 계열로 생성',
        },
      ],
      a11yFlow:
        'DOM 컨테이너와 HTML 문서가 중앙 react-dom renderer 카드와 점선으로 연결되고, 서버 스트림 / HTML 출력 카드가 그 아래로 이어진다.',
    },
    compare: {
      eyebrow: '01 · react vs react-dom',
      title: 'react와 react-dom의 역할 차이',
      description: '같은 React 생태계라도 두 패키지의 역할은 분명히 다릅니다.',
      cards: [
        {
          id: 'react',
          name: 'react',
          apis: ['useState', 'useEffect', 'createElement', 'Component API'],
          description: 'UI를 설명하기 위한 사용자 직면 API를 제공합니다.',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          apis: ['createRoot', 'hydrateRoot', '서버 렌더링 entry', 'DOM 연결'],
          description: 'React 트리를 실제 브라우저와 서버 환경에 연결하는 역할을 합니다.',
          iconName: 'cube',
          tone: 'teal',
        },
      ],
      vsLabel: 'VS',
      banner: 'react는 UI를 설명하고, react-dom은 환경에 붙인다.',
    },
    clientServer: {
      eyebrow: '02 · client / server',
      title: 'client renderer와 server renderer',
      description: 'react-dom은 진입점부터 클라이언트와 서버를 분리해 제공합니다.',
      cards: [
        {
          id: 'client',
          name: 'react-dom/client',
          items: ['createRoot', 'hydrateRoot'],
          description: '브라우저에서 React 트리를 DOM에 붙이는 진입점입니다.',
          info: '동적 상호작용, 이벤트, 상태 업데이트 등을 브라우저 환경에서 실행합니다.',
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'server',
          name: 'react-dom/server',
          items: ['renderToString', 'renderToPipeableStream', 'renderToReadableStream'],
          description: '서버에서 HTML을 만들거나 스트리밍하는 진입점입니다.',
          info: 'SEO, 초기 로딩, 스트리밍 등의 목적을 위해 서버 환경에서 HTML을 생성합니다.',
          iconName: 'server',
          tone: 'emerald',
        },
      ],
      banner: '같은 React 트리라도 브라우저에서 붙이는 방식과 서버에서 만드는 방식은 다르다.',
    },
    flow: {
      eyebrow: '03 · createRoot / hydrateRoot',
      title: 'createRoot와 hydrateRoot 흐름 비교',
      description: '같은 진입점이지만 시작 상태가 다릅니다. 빈 컨테이너인지, 이미 있는 HTML인지.',
      cards: [
        {
          id: 'createRoot',
          name: 'createRoot',
          subtitle: '클라이언트 마운트',
          code: "createRoot(document.getElementById('root'));",
          steps: [
            {
              id: 'empty-container',
              step: 'Step 1',
              title: '빈 DOM 컨테이너',
              caption: '<div id="root"></div>',
            },
            { id: 'tree', step: 'Step 2', title: 'React 트리 생성', caption: '<App />' },
            { id: 'render', step: 'Step 3', title: '클라이언트에서 새로 렌더링' },
          ],
          description: '아무것도 없는 컨테이너에 React 트리를 처음으로 그립니다.',
          tone: 'sky',
        },
        {
          id: 'hydrateRoot',
          name: 'hydrateRoot',
          subtitle: '하이드레이션',
          code: "hydrateRoot(document.getElementById('root'), <App />);",
          steps: [
            { id: 'ssr-html', step: 'Step 1', title: '서버가 미리 만든 HTML 마크업' },
            { id: 'connect-tree', step: 'Step 2', title: 'React 트리 연결', caption: '<App />' },
            { id: 'bind-events', step: 'Step 3', title: '이벤트 바인딩, 상태 연결' },
          ],
          description: '이미 있는 서버 HTML에 React를 연결하여 재사용합니다.',
          tone: 'teal',
        },
      ],
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: '실제 코드 체크포인트',
      items: [
        {
          id: 'file',
          label: '파일',
          value: 'packages/react-dom/src/client/ReactDOMRoot.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'functions',
          label: '볼 함수',
          value: 'createRoot, hydrateRoot',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: '학습 질문',
          value: '왜 createRoot는 container를 가장 먼저 검증할까?',
          iconName: 'flow',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/react-dom/src/client/ReactDOMRoot.js',
      code: REACT_DOM_ROOT_CODE,
      codeLinks: [
        {
          label: 'createRoot',
          href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js#L171',
        },
        {
          label: 'hydrateRoot',
          href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js#L276',
        },
      ],
    },
    concerns: {
      eyebrow: '05 · environment concerns',
      title: 'react-dom이 다루는 환경 특화 관심사',
      cards: [
        {
          id: 'dom-container',
          title: 'DOM container',
          description: '어디에 붙일지 결정하고, 루트 컨테이너를 생성/관리합니다.',
          tags: ['컨테이너 검증', '루트 생성주기'],
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'hydration',
          title: 'Hydration',
          description: '서버에서 만들어진 HTML에 React를 연결합니다.',
          tags: ['마크업 재사용', '이벤트 바인딩'],
          iconName: 'hydration',
          tone: 'teal',
        },
        {
          id: 'browser',
          title: 'Browser-specific behavior',
          description: '브라우저 전용 동작과 DOM 상호작용을 처리합니다.',
          tags: ['이벤트 시스템', '포커스 관리'],
          iconName: 'globe',
          tone: 'violet',
        },
        {
          id: 'resource',
          title: 'Resource APIs',
          description: '서버 렌더링, 스트리밍 등 리소스 관련 API를 제공합니다.',
          tags: ['스트리밍', '리소스 관리'],
          iconName: 'layers',
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '다음 단계로 이동하기',
      description:
        'React를 실제 환경에 연결하는 renderer를 봤다면, 이제 그 렌더링 결과를 계산하는 중심 엔진 react-reconciler로 들어갑니다.',
      cta: '다음 페이지로 이동',
      href: '/reconciler-separation',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 3/10',
      title: {
        line1: 'react-dom connects React',
        line2: 'to real browser and server',
        line3: 'environments.',
      },
      description:
        'Describing components and state alone does not paint a screen. react-dom is what wires that description into a DOM container — or into a server output.',
      centerCard: { title: 'react-dom', caption: 'renderer' },
      nodes: [
        {
          id: 'container',
          title: 'DOM container',
          caption: 'Browser',
          iconName: 'container',
          tone: 'teal',
          code: '<div id="root"></div>',
          description: 'Where createRoot / hydrateRoot attach',
        },
        {
          id: 'html',
          title: 'HTML document',
          caption: 'Browser',
          iconName: 'monitor',
          tone: 'violet',
          description: 'The final HTML rendered for the browser',
        },
        {
          id: 'serverStream',
          title: 'Server stream / HTML output',
          caption: 'Server',
          iconName: 'server',
          tone: 'emerald',
          code: '<html>\n  ...\n</html>',
          description: 'Produced by renderTo* APIs',
        },
      ],
      a11yFlow:
        'The DOM container and HTML document cards connect to the central react-dom renderer card with dashed lines; below them sits the server stream / HTML output card.',
    },
    compare: {
      eyebrow: '01 · react vs react-dom',
      title: 'How react and react-dom differ',
      description: 'They belong to the same ecosystem, but their roles are clearly distinct.',
      cards: [
        {
          id: 'react',
          name: 'react',
          apis: ['useState', 'useEffect', 'createElement', 'Component API'],
          description: 'Provides the user-facing API for describing UI.',
          iconName: 'atom',
          tone: 'sky',
        },
        {
          id: 'react-dom',
          name: 'react-dom',
          apis: ['createRoot', 'hydrateRoot', 'Server renderer entry', 'DOM connection'],
          description: 'Wires the React tree into the real browser and server environments.',
          iconName: 'cube',
          tone: 'teal',
        },
      ],
      vsLabel: 'VS',
      banner: 'react describes the UI; react-dom mounts it onto an environment.',
    },
    clientServer: {
      eyebrow: '02 · client / server',
      title: 'client renderer vs server renderer',
      description: 'react-dom splits the entry points by environment from day one.',
      cards: [
        {
          id: 'client',
          name: 'react-dom/client',
          items: ['createRoot', 'hydrateRoot'],
          description: 'Browser entry point that attaches the React tree to the DOM.',
          info: 'Runs dynamic interactions, events and state updates in the browser.',
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'server',
          name: 'react-dom/server',
          items: ['renderToString', 'renderToPipeableStream', 'renderToReadableStream'],
          description: 'Server entry point that creates or streams HTML.',
          info: 'Generates HTML on the server for SEO, initial load and streaming.',
          iconName: 'server',
          tone: 'emerald',
        },
      ],
      banner:
        'Same React tree — but attaching it in the browser and producing it on the server are different jobs.',
    },
    flow: {
      eyebrow: '03 · createRoot / hydrateRoot',
      title: 'createRoot vs hydrateRoot flow',
      description:
        'Both are entry points — but one starts empty, the other starts from existing HTML.',
      cards: [
        {
          id: 'createRoot',
          name: 'createRoot',
          subtitle: 'Client mount',
          code: "createRoot(document.getElementById('root'));",
          steps: [
            {
              id: 'empty-container',
              step: 'Step 1',
              title: 'Empty DOM container',
              caption: '<div id="root"></div>',
            },
            { id: 'tree', step: 'Step 2', title: 'React tree created', caption: '<App />' },
            { id: 'render', step: 'Step 3', title: 'Fresh client render' },
          ],
          description: 'Draws the React tree into an empty container from scratch.',
          tone: 'sky',
        },
        {
          id: 'hydrateRoot',
          name: 'hydrateRoot',
          subtitle: 'Hydration',
          code: "hydrateRoot(document.getElementById('root'), <App />);",
          steps: [
            { id: 'ssr-html', step: 'Step 1', title: 'Server-rendered HTML markup' },
            {
              id: 'connect-tree',
              step: 'Step 2',
              title: 'React tree attached',
              caption: '<App />',
            },
            { id: 'bind-events', step: 'Step 3', title: 'Bind events & state' },
          ],
          description: 'Reuses existing server HTML and wires React onto it.',
          tone: 'teal',
        },
      ],
    },
    checkpoint: {
      eyebrow: '04 · code checkpoint',
      title: 'Real-code checkpoint',
      items: [
        {
          id: 'file',
          label: 'File',
          value: 'packages/react-dom/src/client/ReactDOMRoot.js',
          iconName: 'fileText',
          tone: 'sky',
        },
        {
          id: 'functions',
          label: 'Functions',
          value: 'createRoot, hydrateRoot',
          iconName: 'fileCode',
          tone: 'teal',
        },
        {
          id: 'question',
          label: 'Question',
          value: 'Why does createRoot validate the container first?',
          iconName: 'flow',
          tone: 'amber',
        },
      ],
      codeCaption: 'packages/react-dom/src/client/ReactDOMRoot.js',
      code: REACT_DOM_ROOT_CODE,
      codeLinks: [
        {
          label: 'createRoot',
          href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js#L171',
        },
        {
          label: 'hydrateRoot',
          href: 'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js#L276',
        },
      ],
    },
    concerns: {
      eyebrow: '05 · environment concerns',
      title: 'Environment-specific concerns react-dom owns',
      cards: [
        {
          id: 'dom-container',
          title: 'DOM container',
          description: 'Decides where to attach and manages the root container lifecycle.',
          tags: ['Container validation', 'Root lifecycle'],
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'hydration',
          title: 'Hydration',
          description: 'Wires React onto HTML produced by the server.',
          tags: ['Markup reuse', 'Event binding'],
          iconName: 'hydration',
          tone: 'teal',
        },
        {
          id: 'browser',
          title: 'Browser-specific behavior',
          description: 'Handles browser-only behavior and DOM interaction.',
          tags: ['Event system', 'Focus management'],
          iconName: 'globe',
          tone: 'violet',
        },
        {
          id: 'resource',
          title: 'Resource APIs',
          description: 'Exposes server rendering and streaming resource APIs.',
          tags: ['Streaming', 'Resource management'],
          iconName: 'layers',
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Move to the next step',
      description:
        'You have seen the renderer that connects React to a real environment. Next, the engine that computes the rendering result itself — react-reconciler.',
      cta: 'Go to the next page',
      href: '/reconciler-separation',
    },
  },
};
