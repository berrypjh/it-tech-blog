import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { BoundaryIconName, CodeEntryIconName } from './icons';

export type { ToneKey };

export type ReactFlowNodeId = 'component' | 'element' | 'render' | 'commit';
export type NextFlowNodeId =
  | 'route'
  | 'server-render'
  | 'rsc-payload'
  | 'html-flight'
  | 'client-nav';

export type ReactFlowNode = { id: ReactFlowNodeId; label: string };
export type NextFlowNode = { id: NextFlowNodeId; label: string };
export type BridgeNode = { id: BoundaryIconName; label: string };

export type ResponsibilityCard = {
  title: string;
  summary: string;
  items: string[];
  pill: string;
};

export type QuizAnswer = 'react' | 'next' | 'both';
export type QuizItem = {
  id: string;
  label: string;
  answer: QuizAnswer;
  explanation: string;
};

export type BoundaryPoint = {
  id: BoundaryIconName;
  number: string;
  title: string;
  summary: string;
  reactRole: string;
  nextRole: string;
  files: string[];
  misconception: string;
  tone: ToneKey;
};

export type CodeEntry = {
  id: CodeEntryIconName;
  area: string;
  path: string;
  reactMeet: string;
  nextLayer: string;
  cta: string;
  github: string;
  tone: ToneKey;
};

export type ReactNextBoundaryContent = {
  hero: {
    badge: string;
    title: { lines: { accent: string; rest: string }[] };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    react: { title: string; nodes: ReactFlowNode[]; note: string; pill: string };
    bridge: { title: string; nodes: BridgeNode[]; note: string; pill: string };
    next: { title: string; nodes: NextFlowNode[]; note: string; pill: string };
  };
  split: {
    eyebrow: string;
    title: string;
    description: string;
    react: ResponsibilityCard;
    next: ResponsibilityCard;
    banner: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    categories: { react: string; next: string; both: string };
    labels: { prompt: string; correct: string; wrong: string; answer: string; explain: string };
    items: QuizItem[];
  };
  boundary: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { react: string; next: string; files: string; misconception: string };
    points: BoundaryPoint[];
  };
  codeEntry: {
    eyebrow: string;
    title: string;
    description: string;
    reactLabel: string;
    nextLabel: string;
    entries: CodeEntry[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

const GH = 'https://github.com/vercel/next.js/blob/canary/';

export const reactNextBoundaryContent: Record<Locale, ReactNextBoundaryContent> = {
  ko: {
    hero: {
      badge: 'React × Next.js 역할 경계',
      title: {
        lines: [
          { accent: 'React', rest: '가 하는 일,' },
          { accent: 'Next.js', rest: '가 하는 일' },
        ],
      },
      highlight: [
        'React는 UI 렌더링 모델을 제공하고,',
        'Next.js는 그 모델을 애플리케이션 프레임워크로 실행합니다.',
      ],
      description: [
        'React와 Next.js를 섞어서 이해하면 어떤 문제를 React 코드에서 봐야 하는지,',
        '어떤 문제를 Next.js 프레임워크 코드에서 봐야 하는지 헷갈리기 쉽습니다.',
        '이 페이지에서는 두 도구의 책임을 나누고, 둘이 만나는 경계 지점을 코드 경로로 연결합니다.',
      ],
      primaryCta: '책임 분리 보기',
      secondaryCta: '경계 지점 확인하기',
      react: {
        title: 'React',
        nodes: [
          { id: 'component', label: 'Component' },
          { id: 'element', label: 'Element' },
          { id: 'render', label: 'Render' },
          { id: 'commit', label: 'Commit' },
        ],
        note: 'React는 UI를 컴포넌트로 표현하고, 변경 사항을 계산해 실제 환경에 반영하는 렌더링 모델을 제공합니다.',
        pill: '렌더링 모델',
      },
      bridge: {
        title: '둘이 만나는 지점',
        nodes: [
          { id: 'server-components', label: 'React Server Components' },
          { id: 'suspense', label: 'Suspense' },
          { id: 'server-actions', label: 'Server Functions / Actions' },
          { id: 'hydration', label: 'Hydration' },
          { id: 'client-boundary', label: 'Client Component Boundary' },
        ],
        note: 'React가 제공한 모델을 Next.js가 라우팅, 서버 응답, 빌드, 캐시 구조와 연결하는 지점입니다.',
        pill: '경계 지점',
      },
      next: {
        title: 'Next.js',
        nodes: [
          { id: 'route', label: 'Route' },
          { id: 'server-render', label: 'Server Render' },
          { id: 'rsc-payload', label: 'RSC Payload' },
          { id: 'html-flight', label: 'HTML / Flight Response' },
          { id: 'client-nav', label: 'Client Navigation' },
        ],
        note: 'Next.js는 route, request, server render, RSC payload, client navigation을 조직해 React 앱을 프레임워크로 실행합니다.',
        pill: '프레임워크 실행 계층',
      },
    },
    split: {
      eyebrow: '01 · split layers',
      title: 'React와 Next.js는 서로 다른 층을 담당합니다',
      description:
        'React는 UI 렌더링 모델을 제공합니다. Next.js는 그 모델을 실제 애플리케이션 실행 환경으로 조직합니다.',
      react: {
        title: 'React 책임',
        summary: 'UI를 어떻게 표현하고 갱신할지 정의합니다.',
        items: [
          'Component model',
          'JSX / Element',
          'Hooks',
          'Suspense',
          'Server Components',
          'Reconciliation',
        ],
        pill: '렌더링 모델',
      },
      next: {
        title: 'Next.js 책임',
        summary: 'React 렌더링 모델을 route, request, server, cache, build로 실행합니다.',
        items: [
          'File-system routing',
          'Request handling',
          'Server rendering orchestration',
          'RSC transport',
          'Caching',
          'Server Actions integration',
          'Build output',
          'Image / Font / Metadata optimization',
        ],
        pill: '프레임워크 실행 계층',
      },
      banner:
        'React는 UI를 어떻게 표현하고 갱신할지 정의합니다. Next.js는 그 모델을 어떤 요청, 어떤 경로, 어떤 서버 응답, 어떤 빌드 결과로 실행할지 결정합니다.',
    },
    quiz: {
      eyebrow: '02 · classify',
      title: '이 기능은 누구 책임일까?',
      description:
        '기능 이름만 보고 React 책임인지, Next.js 책임인지, 혹은 둘이 만나는 지점인지 분류해보세요.',
      categories: { react: 'React', next: 'Next.js', both: '둘 다 만나는 지점' },
      labels: {
        prompt: '기능을 고른 뒤 책임을 분류해보세요',
        correct: '정답입니다',
        wrong: '다시 생각해 볼까요',
        answer: '정답',
        explain: '해설',
      },
      items: [
        {
          id: 'usestate',
          label: 'useState',
          answer: 'react',
          explanation:
            'useState는 React가 제공하는 Hook입니다. 컴포넌트의 상태와 업데이트 모델에 속합니다.',
        },
        {
          id: 'layout',
          label: 'layout.tsx',
          answer: 'next',
          explanation:
            'layout.tsx는 Next.js App Router의 파일 시스템 라우팅 규칙입니다. React 컴포넌트로 작성되지만 역할은 Next.js가 부여합니다.',
        },
        {
          id: 'page',
          label: 'page.tsx',
          answer: 'next',
          explanation:
            'page.tsx는 URL segment에 대응되는 Next.js App Router의 page convention입니다.',
        },
        {
          id: 'rsc-fetch',
          label: 'RSC Payload fetch',
          answer: 'both',
          explanation:
            'React Server Components 모델과 Next.js의 RSC transport, app-router, router reducer가 만나는 지점입니다.',
        },
        {
          id: 'cachetag',
          label: 'cacheTag',
          answer: 'next',
          explanation: 'cacheTag는 Next.js의 캐싱과 revalidation 모델에 속합니다.',
        },
        {
          id: 'suspense',
          label: 'Suspense',
          answer: 'both',
          explanation:
            'Suspense는 React의 기능이지만, Next.js App Router에서는 loading.tsx와 streaming 렌더링 경계로 활용됩니다.',
        },
        {
          id: 'link',
          label: 'next/link',
          answer: 'next',
          explanation:
            'next/link는 Next.js 클라이언트 내비게이션과 prefetch, router state 변경 흐름에 연결됩니다.',
        },
        {
          id: 'metadata',
          label: 'metadata',
          answer: 'next',
          explanation:
            'metadata는 Next.js가 route segment와 서버 렌더링 과정에서 처리하는 메타데이터 최적화 기능입니다.',
        },
        {
          id: 'route',
          label: 'route.ts',
          answer: 'next',
          explanation:
            'route.ts는 Next.js Route Handler convention이며, 페이지 렌더링과 별도의 request handling 흐름에 연결됩니다.',
        },
        {
          id: 'action-post',
          label: 'Server Action POST',
          answer: 'both',
          explanation:
            'React Server Functions 모델 위에 Next.js가 POST 요청, action-handler, redirect, revalidation을 연결합니다.',
        },
      ],
    },
    boundary: {
      eyebrow: '03 · where they meet',
      title: 'React와 Next.js는 이 지점에서 만납니다',
      description:
        '역할은 분리되어 있지만 실행 흐름에서는 여러 지점에서 만납니다. 이 지점을 이해해야 Next.js 소스코드에서 React와 프레임워크 계층을 구분할 수 있습니다.',
      labels: {
        react: 'React 쪽 역할',
        next: 'Next.js 쪽 역할',
        files: '읽을 코드 입구',
        misconception: '대표 오해',
      },
      points: [
        {
          id: 'server-components',
          number: '01',
          title: 'Server Components',
          summary: '서버에서 실행되는 컴포넌트 모델이 라우트와 서버 응답으로 조직됩니다.',
          reactRole: '서버에서 실행될 수 있는 컴포넌트 모델을 제공합니다.',
          nextRole:
            'route segment, loader tree, app-render 흐름 안에서 Server Components를 실행하고 응답으로 구성합니다.',
          files: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception:
            'Server Components는 React 기능이므로 Next.js 코드를 볼 필요가 없다고 생각하기 쉽습니다.',
          tone: 'violet',
        },
        {
          id: 'suspense',
          number: '02',
          title: 'Suspense / Streaming',
          summary: 'React의 대기 모델이 Next.js의 loading boundary와 streaming에 연결됩니다.',
          reactRole: '렌더링 중 대기 상태를 표현하고 fallback으로 분리하는 모델을 제공합니다.',
          nextRole: 'loading.tsx, segment boundary, HTML/RSC streaming과 연결합니다.',
          files: [
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          misconception: 'loading.tsx는 단순한 로딩 컴포넌트일 뿐이라고 생각하기 쉽습니다.',
          tone: 'amber',
        },
        {
          id: 'server-actions',
          number: '03',
          title: 'Server Actions',
          summary: 'React Server Functions 모델 위에 Next.js가 요청과 흐름을 연결합니다.',
          reactRole: 'Server Functions / Actions 모델을 제공합니다.',
          nextRole:
            'form submit, POST 요청, action-handler, redirect, revalidation을 프레임워크 흐름으로 연결합니다.',
          files: [
            'packages/next/src/server/app-render/action-handler.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          misconception: 'Server Action은 단순 API route 호출과 같다고 생각하기 쉽습니다.',
          tone: 'blue',
        },
        {
          id: 'hydration',
          number: '04',
          title: 'Hydration',
          summary: 'React가 hydration을 수행하고 Next.js가 HTML과 payload를 구성합니다.',
          reactRole: '서버에서 만들어진 HTML을 클라이언트에서 React tree와 연결합니다.',
          nextRole: 'HTML, RSC payload, client component bundle, router state를 함께 구성합니다.',
          files: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: 'hydration은 React만 보면 충분하다고 생각하기 쉽습니다.',
          tone: 'cyan',
        },
        {
          id: 'client-boundary',
          number: '05',
          title: 'Client Component Boundary',
          summary: "React의 'use client' 경계를 Next.js 빌드와 번들 분리가 처리합니다.",
          reactRole: '클라이언트에서 실행되어야 하는 컴포넌트 경계를 제공합니다.',
          nextRole: "'use client' boundary를 빌드, 번들 분리, 라우팅 구조와 연결합니다.",
          files: [
            'packages/next/src/build/webpack/loaders/next-flight-loader',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception:
            "'use client'는 단순히 브라우저에서 실행한다는 표시라고 생각하기 쉽습니다.",
          tone: 'emerald',
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · read the code',
      title: '경계 지점을 실제 코드로 연결합니다',
      description:
        'React와 Next.js의 역할 경계는 개념만으로 끝나지 않습니다. Next.js 저장소에서 어떤 파일을 봐야 하는지 함께 연결해야 합니다.',
      reactLabel: 'React와 만나는 지점',
      nextLabel: 'Next.js가 더하는 실행 계층',
      entries: [
        {
          id: 'app-render',
          area: 'React와 연결되는 서버 렌더링',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          reactMeet: 'React Server Components, Suspense, server render',
          nextLayer: 'route context, request handling, RSC payload generation',
          cta: 'app-render.tsx 열기',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
          tone: 'blue',
        },
        {
          id: 'use-flight-response',
          area: 'Flight response',
          path: 'packages/next/src/server/app-render/use-flight-response.tsx',
          reactMeet: 'RSC payload, Flight stream',
          nextLayer: 'server response, client router merge를 위한 transport',
          cta: 'use-flight-response.tsx 열기',
          github: `${GH}packages/next/src/server/app-render/use-flight-response.tsx`,
          tone: 'cyan',
        },
        {
          id: 'app-router',
          area: 'Client router',
          path: 'packages/next/src/client/components/app-router.tsx',
          reactMeet: 'Client Component tree, navigation update',
          nextLayer: 'router state, cache node, client navigation runtime',
          cta: 'app-router.tsx 열기',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
          tone: 'teal',
        },
        {
          id: 'layout-router',
          area: 'Layout router',
          path: 'packages/next/src/client/components/layout-router.tsx',
          reactMeet: 'layout persistence, Suspense boundary',
          nextLayer: 'segment path, nested layout, partial route rendering',
          cta: 'layout-router.tsx 열기',
          github: `${GH}packages/next/src/client/components/layout-router.tsx`,
          tone: 'emerald',
        },
        {
          id: 'action-handler',
          area: 'Server action',
          path: 'packages/next/src/server/app-render/action-handler.ts',
          reactMeet: 'Server Functions / Actions',
          nextLayer: 'POST request handling, redirect, revalidation, form state',
          cta: 'action-handler.ts 열기',
          github: `${GH}packages/next/src/server/app-render/action-handler.ts`,
          tone: 'violet',
        },
        {
          id: 'next-flight-loader',
          area: 'Build boundary',
          path: 'packages/next/src/build/webpack/loaders/next-flight-loader',
          reactMeet: 'Client Component Boundary, Server Component graph',
          nextLayer: 'module transform, client/server bundle split',
          cta: 'next-flight-loader 열기',
          github: `${GH}packages/next/src/build/webpack/loaders/next-flight-loader`,
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: 공식 문서만으로 부족한 지점',
      description:
        'React와 Next.js의 역할 경계를 구분했다면, 이제 공식 문서가 알려주는 표면 동작과 소스코드가 보여주는 실행 경로의 차이를 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/docs-limitations',
    },
  },
  en: {
    hero: {
      badge: 'React × Next.js role boundary',
      title: {
        lines: [
          { accent: 'React', rest: "'s job," },
          { accent: 'Next.js', rest: "'s job" },
        ],
      },
      highlight: [
        'React provides the UI rendering model,',
        'and Next.js runs that model as an application framework.',
      ],
      description: [
        'Mixing React and Next.js makes it easy to confuse which problems belong in React code',
        'and which belong in Next.js framework code.',
        'This page splits the two responsibilities and connects where they meet to code paths.',
      ],
      primaryCta: 'See the responsibility split',
      secondaryCta: 'See the boundary points',
      react: {
        title: 'React',
        nodes: [
          { id: 'component', label: 'Component' },
          { id: 'element', label: 'Element' },
          { id: 'render', label: 'Render' },
          { id: 'commit', label: 'Commit' },
        ],
        note: 'React expresses UI as components and provides a render model that computes changes and applies them.',
        pill: 'Rendering model',
      },
      bridge: {
        title: 'Where they meet',
        nodes: [
          { id: 'server-components', label: 'React Server Components' },
          { id: 'suspense', label: 'Suspense' },
          { id: 'server-actions', label: 'Server Functions / Actions' },
          { id: 'hydration', label: 'Hydration' },
          { id: 'client-boundary', label: 'Client Component Boundary' },
        ],
        note: "Where Next.js connects React's model to routing, server responses, build, and cache structures.",
        pill: 'Boundary points',
      },
      next: {
        title: 'Next.js',
        nodes: [
          { id: 'route', label: 'Route' },
          { id: 'server-render', label: 'Server Render' },
          { id: 'rsc-payload', label: 'RSC Payload' },
          { id: 'html-flight', label: 'HTML / Flight Response' },
          { id: 'client-nav', label: 'Client Navigation' },
        ],
        note: 'Next.js orchestrates route, request, server render, RSC payload, and client navigation to run a React app as a framework.',
        pill: 'Framework execution layer',
      },
    },
    split: {
      eyebrow: '01 · split layers',
      title: 'React and Next.js own different layers',
      description:
        'React provides the UI rendering model. Next.js organizes that model into a real application runtime.',
      react: {
        title: 'React owns',
        summary: 'Defines how UI is expressed and updated.',
        items: [
          'Component model',
          'JSX / Element',
          'Hooks',
          'Suspense',
          'Server Components',
          'Reconciliation',
        ],
        pill: 'Rendering model',
      },
      next: {
        title: 'Next.js owns',
        summary: "Runs React's render model via route, request, server, cache, build.",
        items: [
          'File-system routing',
          'Request handling',
          'Server rendering orchestration',
          'RSC transport',
          'Caching',
          'Server Actions integration',
          'Build output',
          'Image / Font / Metadata optimization',
        ],
        pill: 'Framework execution layer',
      },
      banner:
        'React defines how UI is expressed and updated. Next.js decides which request, route, server response, and build output run that model.',
    },
    quiz: {
      eyebrow: '02 · classify',
      title: 'Whose responsibility is this?',
      description:
        'From the feature name alone, classify it as React, Next.js, or where the two meet.',
      categories: { react: 'React', next: 'Next.js', both: 'Where they meet' },
      labels: {
        prompt: 'Pick a feature, then classify its responsibility',
        correct: 'Correct',
        wrong: 'Think again',
        answer: 'Answer',
        explain: 'Explanation',
      },
      items: [
        {
          id: 'usestate',
          label: 'useState',
          answer: 'react',
          explanation:
            'useState is a React Hook. It belongs to the component state and update model.',
        },
        {
          id: 'layout',
          label: 'layout.tsx',
          answer: 'next',
          explanation:
            'layout.tsx is a Next.js App Router file-system routing convention. Written as a React component, but Next.js gives it its role.',
        },
        {
          id: 'page',
          label: 'page.tsx',
          answer: 'next',
          explanation:
            'page.tsx is the Next.js App Router page convention mapped to a URL segment.',
        },
        {
          id: 'rsc-fetch',
          label: 'RSC Payload fetch',
          answer: 'both',
          explanation:
            "Where the React Server Components model meets Next.js's RSC transport, app-router, and router reducer.",
        },
        {
          id: 'cachetag',
          label: 'cacheTag',
          answer: 'next',
          explanation: "cacheTag belongs to Next.js's caching and revalidation model.",
        },
        {
          id: 'suspense',
          label: 'Suspense',
          answer: 'both',
          explanation:
            'Suspense is a React feature, but in the App Router it is used as loading.tsx and a streaming render boundary.',
        },
        {
          id: 'link',
          label: 'next/link',
          answer: 'next',
          explanation:
            'next/link connects to Next.js client navigation, prefetch, and router state changes.',
        },
        {
          id: 'metadata',
          label: 'metadata',
          answer: 'next',
          explanation:
            'metadata is a Next.js metadata optimization handled across route segments and server rendering.',
        },
        {
          id: 'route',
          label: 'route.ts',
          answer: 'next',
          explanation:
            'route.ts is the Next.js Route Handler convention, a request-handling flow separate from page rendering.',
        },
        {
          id: 'action-post',
          label: 'Server Action POST',
          answer: 'both',
          explanation:
            'On top of the React Server Functions model, Next.js connects POST requests, action-handler, redirect, and revalidation.',
        },
      ],
    },
    boundary: {
      eyebrow: '03 · where they meet',
      title: 'React and Next.js meet at these points',
      description:
        'Their roles are separate, but the execution flow meets at several points. Understanding them lets you tell React from the framework layer in the Next.js source.',
      labels: {
        react: 'React side',
        next: 'Next.js side',
        files: 'Code entry to read',
        misconception: 'Common misconception',
      },
      points: [
        {
          id: 'server-components',
          number: '01',
          title: 'Server Components',
          summary: 'A server-run component model organized into routes and server responses.',
          reactRole: 'Provides a component model that can run on the server.',
          nextRole:
            'Runs Server Components within route segment, loader tree, app-render flow and composes the response.',
          files: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception:
            'It is easy to assume Server Components are React-only and need no Next.js code.',
          tone: 'violet',
        },
        {
          id: 'suspense',
          number: '02',
          title: 'Suspense / Streaming',
          summary: "React's waiting model connects to Next.js loading boundaries and streaming.",
          reactRole:
            'Provides a model to express waiting states during render and split them with a fallback.',
          nextRole: 'Connects to loading.tsx, segment boundary, and HTML/RSC streaming.',
          files: [
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          misconception: 'It is easy to assume loading.tsx is just a simple loading component.',
          tone: 'amber',
        },
        {
          id: 'server-actions',
          number: '03',
          title: 'Server Actions',
          summary: 'On the React Server Functions model, Next.js wires requests and flow.',
          reactRole: 'Provides the Server Functions / Actions model.',
          nextRole:
            'Connects form submit, POST request, action-handler, redirect, revalidation as framework flow.',
          files: [
            'packages/next/src/server/app-render/action-handler.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          misconception:
            'It is easy to assume a Server Action is the same as a plain API route call.',
          tone: 'blue',
        },
        {
          id: 'hydration',
          number: '04',
          title: 'Hydration',
          summary: 'React performs hydration while Next.js composes the HTML and payload.',
          reactRole: 'Connects server-generated HTML to the React tree on the client.',
          nextRole:
            'Composes HTML, RSC payload, client component bundle, and router state together.',
          files: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: 'It is easy to assume hydration can be understood from React alone.',
          tone: 'cyan',
        },
        {
          id: 'client-boundary',
          number: '05',
          title: 'Client Component Boundary',
          summary:
            "React's 'use client' boundary is handled by the Next.js build and bundle split.",
          reactRole: 'Provides the boundary for components that must run on the client.',
          nextRole:
            "Connects the 'use client' boundary to build, bundle split, and routing structure.",
          files: [
            'packages/next/src/build/webpack/loaders/next-flight-loader',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception:
            "It is easy to assume 'use client' is merely a mark to run in the browser.",
          tone: 'emerald',
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · read the code',
      title: 'Connect the boundary points to real code',
      description:
        'The role boundary is not only conceptual. Connect it to the files you should read in the Next.js repository.',
      reactLabel: 'Where it meets React',
      nextLabel: 'Execution layer Next.js adds',
      entries: [
        {
          id: 'app-render',
          area: 'Server rendering meeting React',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          reactMeet: 'React Server Components, Suspense, server render',
          nextLayer: 'route context, request handling, RSC payload generation',
          cta: 'Open app-render.tsx',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
          tone: 'blue',
        },
        {
          id: 'use-flight-response',
          area: 'Flight response',
          path: 'packages/next/src/server/app-render/use-flight-response.tsx',
          reactMeet: 'RSC payload, Flight stream',
          nextLayer: 'transport for server response and client router merge',
          cta: 'Open use-flight-response.tsx',
          github: `${GH}packages/next/src/server/app-render/use-flight-response.tsx`,
          tone: 'cyan',
        },
        {
          id: 'app-router',
          area: 'Client router',
          path: 'packages/next/src/client/components/app-router.tsx',
          reactMeet: 'Client Component tree, navigation update',
          nextLayer: 'router state, cache node, client navigation runtime',
          cta: 'Open app-router.tsx',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
          tone: 'teal',
        },
        {
          id: 'layout-router',
          area: 'Layout router',
          path: 'packages/next/src/client/components/layout-router.tsx',
          reactMeet: 'layout persistence, Suspense boundary',
          nextLayer: 'segment path, nested layout, partial route rendering',
          cta: 'Open layout-router.tsx',
          github: `${GH}packages/next/src/client/components/layout-router.tsx`,
          tone: 'emerald',
        },
        {
          id: 'action-handler',
          area: 'Server action',
          path: 'packages/next/src/server/app-render/action-handler.ts',
          reactMeet: 'Server Functions / Actions',
          nextLayer: 'POST request handling, redirect, revalidation, form state',
          cta: 'Open action-handler.ts',
          github: `${GH}packages/next/src/server/app-render/action-handler.ts`,
          tone: 'violet',
        },
        {
          id: 'next-flight-loader',
          area: 'Build boundary',
          path: 'packages/next/src/build/webpack/loaders/next-flight-loader',
          reactMeet: 'Client Component Boundary, Server Component graph',
          nextLayer: 'module transform, client/server bundle split',
          cta: 'Open next-flight-loader',
          github: `${GH}packages/next/src/build/webpack/loaders/next-flight-loader`,
          tone: 'amber',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Where the Official Docs Fall Short',
      description:
        'Now that you can separate React from Next.js, look at the gap between the surface behavior the docs describe and the execution path the source reveals.',
      cta: 'Go to the next page',
      href: '/docs-limitations',
    },
  },
};
