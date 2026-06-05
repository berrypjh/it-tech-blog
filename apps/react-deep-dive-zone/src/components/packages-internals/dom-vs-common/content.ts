import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type DvcIconName =
  | 'arrowRight'
  | 'atom'
  | 'box'
  | 'check'
  | 'clipboardCheck'
  | 'clock'
  | 'code'
  | 'cube'
  | 'cursor'
  | 'database'
  | 'droplet'
  | 'externalLink'
  | 'fileCode'
  | 'fileText'
  | 'gitBranch'
  | 'help'
  | 'layers'
  | 'monitor'
  | 'network'
  | 'scale'
  | 'search'
  | 'star';

export type HeroSideArea = {
  title: string;
  subtitle: string;
  items: { id: string; label: string; iconName: DvcIconName }[];
  bottomLabel: string;
};

export type TableRow = {
  id: string;
  label: string;
  common: string;
  domSpecific: string;
};

export type ReadingCard = {
  id: 'common' | 'dom';
  title: string;
  pill: string;
  items: string[];
  flow: string[];
  tone: ToneKey;
  iconName: DvcIconName;
};

export type FileCard = {
  id: 'fiber' | 'dom-root';
  fileName: string;
  path: string;
  fn: string;
  role: string;
  code: string;
  tone: ToneKey;
  iconName: DvcIconName;
};

export type ConcernCard = {
  id: string;
  title: string;
  description: string;
  iconName: DvcIconName;
  tone: ToneKey;
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
  relatedFile: string;
  positive: boolean;
  tone: ToneKey;
};

export type PathCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: DvcIconName;
  tone: ToneKey;
};

export type DvcContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    a11y: string;
    common: HeroSideArea;
    domSpecific: HeroSideArea;
  };
  table: {
    eyebrow: string;
    title: string;
    description: string;
    headers: { item: string; common: string; domSpecific: string };
    rows: TableRow[];
  };
  reading: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ReadingCard[];
  };
  fileCompare: {
    eyebrow: string;
    title: string;
    centerMessage: { line1: string; line2: string; line3: string };
    leftFile: FileCard;
    rightFile: FileCard;
  };
  concerns: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ConcernCard[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    cards: QuizCard[];
  };
  path: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PathCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const REACT_FIBER_CODE = `export function createFiberFromElement(
  element,
  mode,
  lanes,
) {
  const type = element.type;
  const key = element.key;
  const pendingProps = element.props;

  const fiber = createFiberFromTypeAndProps(
    type,
    key,
    pendingProps,
    owner,
    mode,
    lanes,
  );

  return fiber;
}`;

const REACT_DOM_ROOT_CODE = `export function createRoot(container, options) {
  if (!isValidContainer(container)) {
    throw new Error(
      'Target container is not a DOM element.',
    );
  }

  const root = createContainer(
    container,
    ConcurrentRoot,
    options,
  );

  return new ReactDOMRoot(root);
}`;

export const dvcContent: Record<Locale, DvcContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 9/10단계',
      title: {
        line1: '모든 React 내부 코드가',
        line2: '웹 전용은 아닙니다.',
      },
      description:
        'Fiber 생성과 렌더 계산은 공통 로직이고, DOM node 생성과 브라우저 환경 대응은 react-dom 쪽 구현입니다.',
      primaryCta: '공개 한눈에 보기',
      secondaryCta: '관련 파일 바로가기',
      primaryHref: '#section-table',
      secondaryHref: '#section-file-compare',
      a11y: '왼쪽 영역은 공통 렌더링 구조(환경 독립)로 Element/Fiber/Reconciler/Scheduler 칩이 모여있고, 오른쪽 영역은 DOM 전용 구현(브라우저 특화)으로 DOM Renderer/DOM Node/Browser Env 칩이 모여 있다. 중앙 세로 분리선이 두 영역을 구분한다.',
      common: {
        title: '공통 렌더링 구조',
        subtitle: '환경 독립',
        items: [
          { id: 'element', label: 'Element', iconName: 'code' },
          { id: 'fiber', label: 'Fiber', iconName: 'cube' },
          { id: 'reconciler', label: 'Reconciler', iconName: 'network' },
          { id: 'scheduler', label: 'Scheduler', iconName: 'clock' },
        ],
        bottomLabel: '계산 / 결정 (공통)',
      },
      domSpecific: {
        title: 'DOM 전용 구현',
        subtitle: '브라우저 특화',
        items: [
          { id: 'dom-renderer', label: 'DOM Renderer', iconName: 'monitor' },
          { id: 'dom-node', label: 'DOM Node', iconName: 'box' },
          { id: 'browser-env', label: 'Browser Env', iconName: 'database' },
        ],
        bottomLabel: '반영 / 환경 대응 (전용)',
      },
    },
    table: {
      eyebrow: '02 · comparison',
      title: '공통 코드 vs DOM 전용 코드',
      description: '같은 React 내부 코드라도 책임이 어디에 속하는지 표로 한 번에 정리합니다.',
      headers: {
        item: '항목',
        common: '공통 코드 (환경 독립)',
        domSpecific: 'DOM 전용 코드 (브라우저 특화)',
      },
      rows: [
        {
          id: 'packages',
          label: '주요 패키지',
          common: 'react-reconciler, scheduler, shared 등',
          domSpecific: 'react-dom',
        },
        {
          id: 'role',
          label: '핵심 역할',
          common: '렌더링 계산, 변경 결정, 작업 우선순위 조율',
          domSpecific: 'DOM과 브라우저 환경에 반영 및 연동',
        },
        {
          id: 'concepts',
          label: '대표 개념',
          common: 'Fiber, Work Loop, Flags, Lanes',
          domSpecific: 'DOM Node, Container, Hydration, Selection',
        },
        {
          id: 'paths',
          label: '대표 파일 / 위치',
          common: 'packages/react-reconciler/...',
          domSpecific: 'packages/react-dom/...',
        },
        {
          id: 'functions',
          label: '예시 함수',
          common: 'createFiberFromElement, beginWork, completeWork',
          domSpecific: 'createRoot, hydrateRoot, commitUpdate, setInitialProperties',
        },
      ],
    },
    reading: {
      eyebrow: '03 · reading method',
      title: '두 축을 나누어 보는 저장소 읽기법',
      description: '관심사에 따라 들어가야 할 패키지가 달라집니다.',
      cards: [
        {
          id: 'common',
          title: '공통 로직을 보고 싶다면',
          pill: 'react-reconciler',
          items: [
            'Element가 Fiber로 바뀌는 과정',
            '렌더링 계산과 work loop',
            '변경(diff) 계산과 우선순위 처리',
          ],
          flow: ['Element', 'Fiber', 'react-reconciler'],
          tone: 'teal',
          iconName: 'cube',
        },
        {
          id: 'dom',
          title: '브라우저에만 해당하는 동작을 보고 싶다면',
          pill: 'react-dom',
          items: [
            'DOM root 생성과 컨테이너 관리',
            'Hydration, 브라우저 이벤트 연동',
            '선택 영역, focus, 스크롤 등 환경 처리',
          ],
          flow: ['DOM root 생성', 'react-dom', 'DOM 반영'],
          tone: 'violet',
          iconName: 'monitor',
        },
      ],
    },
    fileCompare: {
      eyebrow: '04 · real files',
      title: '실제 파일 두 개로 비교',
      centerMessage: {
        line1: '같은 React 내부라도',
        line2: '읽는 파일에 따라',
        line3: '관심사가 다르다.',
      },
      leftFile: {
        id: 'fiber',
        fileName: 'ReactFiber.js',
        path: 'packages/react-reconciler/src/ReactFiber.js',
        fn: 'createFiberFromElement',
        role: 'Element를 Fiber로 변환하는 환경 독립적 계산 로직',
        code: REACT_FIBER_CODE,
        tone: 'teal',
        iconName: 'fileCode',
      },
      rightFile: {
        id: 'dom-root',
        fileName: 'ReactDOMRoot.js',
        path: 'packages/react-dom/src/client/ReactDOMRoot.js',
        fn: 'createRoot',
        role: 'DOM container를 받아 브라우저 환경에서 사용할 root를 생성',
        code: REACT_DOM_ROOT_CODE,
        tone: 'violet',
        iconName: 'fileCode',
      },
    },
    concerns: {
      eyebrow: '05 · dom concerns',
      title: 'DOM 전용 관심사 예시',
      description: 'react-dom이 다루는 환경 특화 관심사를 4가지로 살펴봅니다.',
      cards: [
        {
          id: 'node',
          title: 'DOM node 생성',
          description:
            'createElement, setInitialProperties 등으로 실제 DOM node를 생성하고 속성을 설정합니다.',
          iconName: 'code',
          tone: 'violet',
        },
        {
          id: 'container',
          title: '브라우저 container 관리',
          description: 'createRoot, hydrateRoot, unmount 등 컨테이너 생명주기와 연결을 관리합니다.',
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'hydration',
          title: 'Hydration',
          description:
            '서버에서 내려온 HTML에 이벤트와 상태를 연결하고 불일치를 보정하는 로직을 담당합니다.',
          iconName: 'droplet',
          tone: 'cyan',
        },
        {
          id: 'env',
          title: '선택 영역 / focus / event 환경 처리',
          description:
            'selection 복원, focus 유지, 이벤트 위임과 브라우저의 특수 요구사항을 처리합니다.',
          iconName: 'cursor',
          tone: 'indigo',
        },
      ],
    },
    quiz: {
      eyebrow: '06 · boundary quiz',
      title: '경계 읽기 퀴즈',
      description: '특정 코드가 공통 로직인지, DOM 전용 로직인지 판단해 보세요.',
      cards: [
        {
          id: 'fiber',
          question: 'createFiberFromElement는 브라우저 DOM을 직접 다룰까?',
          answer: '아니다.',
          explanation:
            '이 함수는 Element와 props를 읽어 Fiber 객체를 만드는 계산 로직입니다. DOM을 생성하거나 조작하지 않습니다.',
          relatedFile: 'ReactFiber.js (react-reconciler)',
          positive: false,
          tone: 'teal',
        },
        {
          id: 'create-root',
          question: 'createRoot는 실제 DOM container를 받는가?',
          answer: '그렇다.',
          explanation:
            'createRoot(container)는 브라우저 DOM 컨테이너를 입력으로 받아 새로운 root를 생성합니다.',
          relatedFile: 'ReactDOMRoot.js (react-dom)',
          positive: true,
          tone: 'violet',
        },
        {
          id: 'selection',
          question: 'selection 복원과 같은 브라우저 특화 처리는 어디에 더 가까운가?',
          answer: 'DOM renderer 쪽이다.',
          explanation:
            '선택 영역, focus, 스크롤 유지 등은 브라우저 환경의 특수 요구사항으로 react-dom에서 처리됩니다.',
          relatedFile: 'react-dom (DOM renderer)',
          positive: true,
          tone: 'sky',
        },
      ],
    },
    path: {
      eyebrow: '07 · future learning',
      title: '이후 학습으로 이어지는 여정',
      description: '이 페이지에서 잡은 경계가 다음 챕터들과 어떻게 연결되는지 살펴보세요.',
      cards: [
        {
          id: 'element',
          title: 'React Element와 JSX의 정체',
          subtitle: '공통 설명 객체',
          description: 'Element는 UI를 설명하는 객체이며, 모든 플랫폼에서 공통으로 사용됩니다.',
          iconName: 'code',
          tone: 'sky',
        },
        {
          id: 'fiber-trans',
          title: '컴포넌트는 어떻게 Fiber가 되는가?',
          subtitle: '공통 계산 로직',
          description:
            'reconciler가 Element를 Fiber로 바꾸고 렌더링 계산을 수행하는 과정을 배웁니다.',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'commit',
          title: 'Commit Phase와 실제 DOM 반영',
          subtitle: 'renderer와 환경별 반영 연결',
          description: '계산된 변경이 renderer를 통해 실제 DOM 또는 Native에 반영됩니다.',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '다음 단계로 이동하기',
      description:
        '공통 로직과 DOM 전용 로직의 경계까지 보았다면, 마지막으로 패키지 분리가 React 설계에 어떤 의미를 가지는지 정리합니다.',
      cta: '다음: 패키지 분리가 주는 의미 →',
      href: '/package-design',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 9/10',
      title: {
        line1: 'Not every React internal',
        line2: 'is web-only.',
      },
      description:
        'Fiber creation and render computation are shared logic; DOM node creation and browser-environment handling are react-dom code.',
      primaryCta: 'See the gist',
      secondaryCta: 'Jump to the files',
      primaryHref: '#section-table',
      secondaryHref: '#section-file-compare',
      a11y: 'On the left, the shared rendering structure (environment-independent) holds Element/Fiber/Reconciler/Scheduler chips. On the right, the DOM-only area (browser-specific) holds DOM Renderer/DOM Node/Browser Env chips. A vertical divider separates them.',
      common: {
        title: 'Shared rendering structure',
        subtitle: 'Environment-independent',
        items: [
          { id: 'element', label: 'Element', iconName: 'code' },
          { id: 'fiber', label: 'Fiber', iconName: 'cube' },
          { id: 'reconciler', label: 'Reconciler', iconName: 'network' },
          { id: 'scheduler', label: 'Scheduler', iconName: 'clock' },
        ],
        bottomLabel: 'Compute / decide (shared)',
      },
      domSpecific: {
        title: 'DOM-only implementation',
        subtitle: 'Browser-specific',
        items: [
          { id: 'dom-renderer', label: 'DOM Renderer', iconName: 'monitor' },
          { id: 'dom-node', label: 'DOM Node', iconName: 'box' },
          { id: 'browser-env', label: 'Browser Env', iconName: 'database' },
        ],
        bottomLabel: 'Apply / per-env (specific)',
      },
    },
    table: {
      eyebrow: '02 · comparison',
      title: 'Shared code vs DOM-only code',
      description: 'Same React internals, different responsibility — at a glance.',
      headers: {
        item: 'Item',
        common: 'Shared code (environment-independent)',
        domSpecific: 'DOM-only code (browser-specific)',
      },
      rows: [
        {
          id: 'packages',
          label: 'Main packages',
          common: 'react-reconciler, scheduler, shared, …',
          domSpecific: 'react-dom',
        },
        {
          id: 'role',
          label: 'Core role',
          common: 'Render computation, diff decisions, priority',
          domSpecific: 'Apply & integrate with DOM / browser',
        },
        {
          id: 'concepts',
          label: 'Key concepts',
          common: 'Fiber, Work Loop, Flags, Lanes',
          domSpecific: 'DOM Node, Container, Hydration, Selection',
        },
        {
          id: 'paths',
          label: 'Files / location',
          common: 'packages/react-reconciler/...',
          domSpecific: 'packages/react-dom/...',
        },
        {
          id: 'functions',
          label: 'Sample functions',
          common: 'createFiberFromElement, beginWork, completeWork',
          domSpecific: 'createRoot, hydrateRoot, commitUpdate, setInitialProperties',
        },
      ],
    },
    reading: {
      eyebrow: '03 · reading method',
      title: 'Reading the repo along two axes',
      description: 'Choose which package to dive into based on what you want to learn.',
      cards: [
        {
          id: 'common',
          title: 'If you want the shared logic',
          pill: 'react-reconciler',
          items: [
            'How Elements become Fibers',
            'Render computation & work loop',
            'Diff computation & priority',
          ],
          flow: ['Element', 'Fiber', 'react-reconciler'],
          tone: 'teal',
          iconName: 'cube',
        },
        {
          id: 'dom',
          title: 'If you want browser-only behavior',
          pill: 'react-dom',
          items: [
            'DOM root creation & container lifecycle',
            'Hydration, browser event wiring',
            'Selection, focus, scroll handling',
          ],
          flow: ['DOM root creation', 'react-dom', 'DOM commit'],
          tone: 'violet',
          iconName: 'monitor',
        },
      ],
    },
    fileCompare: {
      eyebrow: '04 · real files',
      title: 'A side-by-side of two real files',
      centerMessage: {
        line1: 'Same React internals,',
        line2: 'different concerns,',
        line3: 'depending on the file.',
      },
      leftFile: {
        id: 'fiber',
        fileName: 'ReactFiber.js',
        path: 'packages/react-reconciler/src/ReactFiber.js',
        fn: 'createFiberFromElement',
        role: 'Environment-independent compute that turns Elements into Fibers.',
        code: REACT_FIBER_CODE,
        tone: 'teal',
        iconName: 'fileCode',
      },
      rightFile: {
        id: 'dom-root',
        fileName: 'ReactDOMRoot.js',
        path: 'packages/react-dom/src/client/ReactDOMRoot.js',
        fn: 'createRoot',
        role: 'Takes a DOM container and creates a root for the browser environment.',
        code: REACT_DOM_ROOT_CODE,
        tone: 'violet',
        iconName: 'fileCode',
      },
    },
    concerns: {
      eyebrow: '05 · dom concerns',
      title: 'DOM-only concerns by example',
      description: 'Four environment-specific responsibilities that react-dom owns.',
      cards: [
        {
          id: 'node',
          title: 'DOM node creation',
          description:
            'createElement, setInitialProperties and friends create DOM nodes and set their attributes.',
          iconName: 'code',
          tone: 'violet',
        },
        {
          id: 'container',
          title: 'Browser container lifecycle',
          description: 'createRoot, hydrateRoot, unmount manage container lifecycle and wiring.',
          iconName: 'monitor',
          tone: 'sky',
        },
        {
          id: 'hydration',
          title: 'Hydration',
          description:
            'Wires events and state onto server-rendered HTML and reconciles mismatches.',
          iconName: 'droplet',
          tone: 'cyan',
        },
        {
          id: 'env',
          title: 'Selection / focus / event handling',
          description:
            'Restores selection, keeps focus, delegates events, and handles browser quirks.',
          iconName: 'cursor',
          tone: 'indigo',
        },
      ],
    },
    quiz: {
      eyebrow: '06 · boundary quiz',
      title: 'Boundary reading quiz',
      description: 'Decide whether a piece of code is shared logic or DOM-specific.',
      cards: [
        {
          id: 'fiber',
          question: 'Does createFiberFromElement touch the browser DOM directly?',
          answer: 'No.',
          explanation:
            'It reads Element/props and builds a Fiber object. No DOM creation or mutation.',
          relatedFile: 'ReactFiber.js (react-reconciler)',
          positive: false,
          tone: 'teal',
        },
        {
          id: 'create-root',
          question: 'Does createRoot accept a real DOM container?',
          answer: 'Yes.',
          explanation: 'createRoot(container) accepts a DOM container and creates a new root.',
          relatedFile: 'ReactDOMRoot.js (react-dom)',
          positive: true,
          tone: 'violet',
        },
        {
          id: 'selection',
          question: 'Where do browser-specific concerns like selection restoration live?',
          answer: 'On the DOM renderer side.',
          explanation:
            'Selection, focus and scroll restoration are browser concerns owned by react-dom.',
          relatedFile: 'react-dom (DOM renderer)',
          positive: true,
          tone: 'sky',
        },
      ],
    },
    path: {
      eyebrow: '07 · future learning',
      title: 'Where this leads next',
      description: 'How the boundary you just learned connects to upcoming chapters.',
      cards: [
        {
          id: 'element',
          title: 'React Elements and JSX',
          subtitle: 'Shared description object',
          description: 'Elements describe UI and are used the same way across every platform.',
          iconName: 'code',
          tone: 'sky',
        },
        {
          id: 'fiber-trans',
          title: 'How components become Fibers',
          subtitle: 'Shared compute logic',
          description: 'Learn how the reconciler turns Elements into Fibers and runs the render.',
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'commit',
          title: 'Commit phase & real DOM updates',
          subtitle: 'Renderer & per-env application',
          description: 'Computed changes flow through the renderer to the real DOM or Native.',
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Move to the next step',
      description:
        'Now that you have seen the line between shared logic and DOM-only logic, we wrap up with the design meaning of package separation.',
      cta: 'Next: design meaning of package split →',
      href: '/package-design',
    },
  },
};
