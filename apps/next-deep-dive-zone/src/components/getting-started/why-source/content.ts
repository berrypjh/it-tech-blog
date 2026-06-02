import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { IconName } from './icons';

export type { ToneKey };

export type FlowStep = {
  id: 'page' | 'route-tree' | 'loader-tree' | 'app-render' | 'rsc-payload' | 'client-merge';
  label: string;
  category: string;
  tone: ToneKey;
  /** 단계 사각형 안에 들어가는 흐름 아이콘 키 */
  flowIcon: 'file' | 'route-tree' | 'loader-tree' | 'server-render' | 'transport' | 'merge';
  description: string;
  hint: string;
  concepts: string[];
};

export type QuestionCard = {
  id: 'loading' | 'server-component' | 'link' | 'cache' | 'redirect';
  number: string;
  concept: string;
  tone: ToneKey;
  icon: IconName;
  question: string[];
  surface: string;
  internal: string;
  entries: string[];
};

export type QuizAnswer = 'react' | 'next' | 'both';

export type QuizItem = {
  id: string;
  label: string;
  answer: QuizAnswer;
  explanation: string;
};

export type BenefitCard = {
  id: 'app-router' | 'cache' | 'server-action' | 'design';
  title: string;
  body: string;
  tone: ToneKey;
  icon: IconName;
  entries: string[];
};

export type CodeEntry = {
  id: 'request' | 'render' | 'client' | 'build';
  area: string;
  path: string;
  question: string;
  concepts: string;
  cta: string;
  tone: ToneKey;
  flowIcon: 'request' | 'server-render' | 'client' | 'build';
  github: string;
};

export type WhyReadNextSourceContent = {
  hero: {
    badge: string;
    title: { lead: string; tail: string };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    diagram: {
      title: string;
      subtitle: string;
      categoryLabel: string;
      conceptLabel: string;
      hintLabel: string;
      initialStepId: FlowStep['id'];
      steps: FlowStep[];
    };
  };
  questions: {
    eyebrow: string;
    title: string;
    description: string;
    cards: QuestionCard[];
    panel: { surface: string; internal: string; entries: string };
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    react: { title: string; items: string[] };
    next: { title: string; items: string[] };
    banner: string;
  };
  quiz: {
    title: string;
    description: string;
    categories: { react: string; next: string; both: string };
    items: QuizItem[];
    labels: { prompt: string; correct: string; wrong: string; reset: string; answer: string };
  };
  benefits: {
    eyebrow: string;
    title: string;
    entryLabel: string;
    cards: BenefitCard[];
  };
  codeEntry: {
    eyebrow: string;
    title: string;
    description: string;
    questionLabel: string;
    conceptLabel: string;
    entries: CodeEntry[];
  };
  quote: { lines: string[] };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

const GH = 'https://github.com/vercel/next.js/blob/canary/';

export const whySourceContent: Record<Locale, WhyReadNextSourceContent> = {
  ko: {
    hero: {
      badge: 'Next.js 소스코드 학습 가이드',
      title: { lead: '왜 Next.js', tail: '소스코드를 읽는가?' },
      highlight: ['React 앱이 프레임워크 안에서', '어떻게 실행되는지 코드로 읽는 학습'],
      description: [
        'Next.js는 React 앱을 라우팅하고,',
        '서버에서 렌더링하고, 캐시하고, 빌드하고,',
        '클라이언트에서 다시 병합하는 프레임워크입니다.',
      ],
      primaryCta: '내부 흐름 보기',
      secondaryCta: '첫 코드 입구 확인하기',
      diagram: {
        title: 'React 앱이 프레임워크가 되는 과정',
        subtitle: 'app 디렉터리 파일이 서버 렌더링과 클라이언트 라우터로 이어지는 흐름',
        categoryLabel: '분류',
        conceptLabel: '관련 개념',
        hintLabel: '핵심',
        initialStepId: 'route-tree',
        steps: [
          {
            id: 'page',
            label: 'app/page.tsx',
            category: 'File Convention',
            tone: 'sky',
            flowIcon: 'file',
            description: '사용자가 작성한 App Router 페이지 파일입니다.',
            hint: '파일 시스템 규칙의 출발점입니다.',
            concepts: ['app directory', 'page / layout', 'file convention'],
          },
          {
            id: 'route-tree',
            label: 'Route Tree',
            category: 'Routing',
            tone: 'blue',
            flowIcon: 'route-tree',
            description: 'app 디렉터리의 파일 규칙이 라우트 구조로 해석되는 단계입니다.',
            hint: 'segment, layout, page, loading, error가 라우트 구조에 반영됩니다.',
            concepts: ['segment', 'route group', 'parallel routes'],
          },
          {
            id: 'loader-tree',
            label: 'Loader Tree',
            category: 'Server Structure',
            tone: 'violet',
            flowIcon: 'loader-tree',
            description: '라우트 구조와 컴포넌트 모듈이 서버 렌더링에서 사용할 트리로 연결됩니다.',
            hint: 'page, layout, loading 같은 파일들이 렌더링 가능한 트리로 준비됩니다.',
            concepts: ['loader tree', 'next-app-loader', 'component module'],
          },
          {
            id: 'app-render',
            label: 'App Render',
            category: 'Server Render',
            tone: 'indigo',
            flowIcon: 'server-render',
            description: '서버에서 React Server Components를 실행하고 응답을 만드는 단계입니다.',
            hint: 'HTML과 RSC Payload 생성을 위한 핵심 서버 렌더링 흐름입니다.',
            concepts: ['app-render.tsx', 'RSC', 'HTML streaming'],
          },
          {
            id: 'rsc-payload',
            label: 'RSC Payload',
            category: 'Transport',
            tone: 'cyan',
            flowIcon: 'transport',
            description:
              '서버에서 렌더링된 React Server Components 결과가 클라이언트로 전달되는 데이터입니다.',
            hint: '클라이언트 라우터가 이후 화면을 병합하는 데 사용합니다.',
            concepts: ['Flight', 'serialization', 'client reference'],
          },
          {
            id: 'client-merge',
            label: 'Client Router Merge',
            category: 'Client Runtime',
            tone: 'emerald',
            flowIcon: 'merge',
            description: '클라이언트 라우터가 전달받은 payload를 현재 router state와 병합합니다.',
            hint: '전체 새로고침 없이 필요한 segment만 바뀌는 경험을 만듭니다.',
            concepts: ['router state tree', 'cache node', 'soft navigation'],
          },
        ],
      },
    },
    questions: {
      eyebrow: '01 · question pool',
      title: '왜 이런 일이 생기지?',
      description:
        'Next.js를 쓰다 보면 사용법만으로는 설명하기 어려운 순간이 생깁니다. 그 순간이 바로 소스코드 독해의 출발점입니다.',
      panel: {
        surface: '표면 사용법',
        internal: '내부에서 일어나는 일',
        entries: '읽을 코드 입구',
      },
      cards: [
        {
          id: 'loading',
          number: '01',
          concept: 'Loading Boundary',
          tone: 'sky',
          icon: 'loading',
          question: ['왜 loading.tsx는', '특정 구간에서만', '보일까?'],
          surface: 'app/blog/loading.tsx를 추가하면 blog segment의 로딩 UI가 됩니다.',
          internal: '해당 segment의 loading boundary가 loader tree와 component tree에 반영됩니다.',
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
        },
        {
          id: 'server-component',
          number: '02',
          concept: 'Server / Client Boundary',
          tone: 'violet',
          icon: 'cpu',
          question: ['왜 Server Component에서는', 'useState를', '못 쓸까?'],
          surface:
            'Server Component에서는 상태를 직접 가질 수 없고, 상호작용이 필요하면 Client Component로 분리합니다.',
          internal:
            '서버에서 실행되는 컴포넌트와 클라이언트 번들에 포함되는 컴포넌트의 경계가 나뉩니다.',
          entries: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/build/webpack/loaders/next-flight-loader',
          ],
        },
        {
          id: 'link',
          number: '03',
          concept: 'Client Router',
          tone: 'cyan',
          icon: 'link',
          question: ['왜 Link 이동은', '전체 새로고침처럼', '보이지 않을까?'],
          surface: 'next/link를 사용하면 클라이언트 내비게이션이 일어납니다.',
          internal: '클라이언트 라우터가 서버에서 받은 payload와 현재 router state를 병합합니다.',
          entries: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
        },
        {
          id: 'cache',
          number: '04',
          concept: 'Cache Components',
          tone: 'emerald',
          icon: 'database',
          question: ['왜 캐시가 예상과', '다르게', '유지될까?'],
          surface:
            "cacheComponents, 'use cache', cacheLife, cacheTag 같은 API와 설정을 사용합니다.",
          internal:
            '정적/동적 렌더링 경계와 캐시 가능한 scope가 분리되고, 태그나 수명 기반으로 재검증됩니다.',
          entries: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
        },
        {
          id: 'redirect',
          number: '05',
          concept: 'Redirect Control Flow',
          tone: 'amber',
          icon: 'redirect',
          question: ['왜 redirect()는', '일반 return처럼', '동작하지 않을까?'],
          surface: 'redirect()를 호출하면 현재 렌더링 흐름을 중단하고 다른 경로로 이동시킵니다.',
          internal:
            'redirect는 단순 반환값이 아니라 특수한 제어 흐름으로 처리되며, 서버 렌더링이나 action 처리 흐름과 연결됩니다.',
          entries: [
            'packages/next/src/client/components/redirect.ts',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/action-handler.ts',
          ],
        },
      ],
    },
    compare: {
      eyebrow: '02 · responsibility',
      title: 'Next.js가 React 위에 더하는 것',
      description:
        'React는 UI 렌더링 모델을 제공합니다. Next.js는 그 모델을 실제 애플리케이션 프레임워크로 실행합니다.',
      react: {
        title: 'React가 담당하는 것',
        items: [
          'Component',
          'JSX / Element',
          'Hooks',
          'Suspense',
          'Server Components',
          'Render / Commit',
        ],
      },
      next: {
        title: 'Next.js가 담당하는 것',
        items: [
          'File-system Routing',
          'Request Handling',
          'App Router',
          'Server Rendering',
          'RSC Payload Transport',
          'Cache Components',
          'Server Actions',
          'Build Pipeline',
        ],
      },
      banner:
        'React는 렌더링 모델을 제공하고, Next.js는 그 모델을 애플리케이션 프레임워크로 실행합니다.',
    },
    quiz: {
      title: '이 기능은 누구 책임일까?',
      description: '기능 카드를 React, Next.js, 둘 다 만나는 지점으로 분류해보세요.',
      categories: { react: 'React', next: 'Next.js', both: '둘 다 만나는 지점' },
      labels: {
        prompt: '분류를 선택하세요',
        correct: '정답입니다',
        wrong: '다시 생각해 볼까요',
        reset: '다시 풀기',
        answer: '해설',
      },
      items: [
        {
          id: 'layout',
          label: 'layout.tsx',
          answer: 'next',
          explanation:
            'layout.tsx는 App Router의 파일 규칙입니다. segment 구조와 상태 보존을 Next.js가 해석합니다.',
        },
        {
          id: 'usestate',
          label: 'useState',
          answer: 'react',
          explanation:
            'useState는 React의 Hook입니다. 컴포넌트 상태는 React 렌더링 모델이 관리합니다.',
        },
        {
          id: 'cachetag',
          label: 'cacheTag',
          answer: 'next',
          explanation:
            'cacheTag는 Next.js의 캐시 API입니다. 캐시 scope와 재검증을 프레임워크가 관리합니다.',
        },
        {
          id: 'rsc-payload',
          label: 'RSC Payload',
          answer: 'both',
          explanation:
            'RSC Payload는 React가 만든 Flight 데이터를 Next.js가 전송·병합하는, 둘이 만나는 지점입니다.',
        },
        {
          id: 'suspense',
          label: 'Suspense',
          answer: 'react',
          explanation:
            'Suspense는 React 기능이지만, Next.js App Router에서 loading boundary와 streaming에 연결됩니다.',
        },
        {
          id: 'link',
          label: 'next/link',
          answer: 'next',
          explanation:
            'next/link는 Next.js의 클라이언트 라우터 진입점입니다. prefetch와 soft navigation을 프레임워크가 처리합니다.',
        },
        {
          id: 'route',
          label: 'route.ts',
          answer: 'next',
          explanation:
            'route.ts는 App Router의 Route Handler 규칙입니다. 요청/응답 처리를 Next.js가 담당합니다.',
        },
        {
          id: 'metadata',
          label: 'metadata',
          answer: 'next',
          explanation: 'metadata는 Next.js가 서버 렌더링 중 생성·주입하는 메타데이터 API입니다.',
        },
      ],
    },
    benefits: {
      eyebrow: '03 · what you gain',
      title: '소스코드를 읽으면 얻게 되는 것',
      entryLabel: '관련 코드 입구',
      cards: [
        {
          id: 'app-router',
          title: 'App Router의 동작을 예측할 수 있다',
          body: 'layout, page, loading, error가 어떤 segment boundary로 연결되는지 이해하면 화면 전환과 유지되는 UI를 예측할 수 있습니다.',
          tone: 'blue',
          icon: 'route',
          entries: ['create-component-tree.tsx', 'app-router.tsx', 'layout-router.tsx'],
        },
        {
          id: 'cache',
          title: '캐싱 문제를 구조적으로 디버깅할 수 있다',
          body: '캐시가 유지되는 이유와 재검증되는 조건을 API 이름이 아니라 렌더링 경계와 cache scope 관점에서 추적할 수 있습니다.',
          tone: 'emerald',
          icon: 'bug',
          entries: [
            'cacheComponents',
            'use cache',
            'cacheLife',
            'cacheTag',
            'dynamic-rendering.ts',
          ],
        },
        {
          id: 'server-action',
          title: 'Server Action과 revalidation 흐름을 이해할 수 있다',
          body: 'form submit, action request, redirect, revalidate 흐름이 서버에서 어떻게 처리되는지 연결해 볼 수 있습니다.',
          tone: 'cyan',
          icon: 'workflow',
          entries: ['action-handler.ts', 'app-render.tsx', 'csrf-protection.ts', 'encryption.ts'],
        },
        {
          id: 'design',
          title: '프레임워크 설계 감각을 얻을 수 있다',
          body: '라우팅, 렌더링, 캐시, 빌드가 서로 분리되면서도 하나의 프레임워크로 연결되는 방식을 읽을 수 있습니다.',
          tone: 'violet',
          icon: 'compass',
          entries: ['base-server.ts', 'build/index.ts', 'next-app-loader', 'server/app-render'],
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · first read',
      title: '오늘의 첫 코드 입구',
      description:
        'Next.js 저장소를 처음 열었다면 모든 파일을 볼 필요가 없습니다. 먼저 아래 네 가지 입구에서 전체 실행 축을 잡는 것이 좋습니다.',
      questionLabel: '볼 질문',
      conceptLabel: '관련 개념',
      entries: [
        {
          id: 'request',
          area: '요청 처리',
          path: 'packages/next/src/server/base-server.ts',
          question: '브라우저 요청은 Next.js 서버 안에서 어디로 들어오는가?',
          concepts: 'Request pipeline, route matching, render dispatch',
          cta: 'base-server.ts 열기',
          tone: 'blue',
          flowIcon: 'request',
          github: `${GH}packages/next/src/server/base-server.ts`,
        },
        {
          id: 'render',
          area: '서버 렌더링',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          question: 'App Router 페이지는 서버에서 어떻게 React 렌더링으로 이어지는가?',
          concepts: 'App render, RSC, Flight response, HTML generation',
          cta: 'app-render.tsx 열기',
          tone: 'violet',
          flowIcon: 'server-render',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
        },
        {
          id: 'client',
          area: '클라이언트 라우터',
          path: 'packages/next/src/client/components/app-router.tsx',
          question: 'Link 이동 후 받은 payload는 클라이언트에서 어떻게 병합되는가?',
          concepts: 'Router state, client navigation, cache node',
          cta: 'app-router.tsx 열기',
          tone: 'cyan',
          flowIcon: 'client',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
        },
        {
          id: 'build',
          area: '빌드',
          path: 'packages/next/src/build/index.ts',
          question:
            '개발자가 작성한 app 디렉터리 파일들은 빌드 과정에서 어떻게 entry와 manifest로 연결되는가?',
          concepts: 'Build pipeline, manifest, loader, bundling',
          cta: 'build/index.ts 열기',
          tone: 'emerald',
          flowIcon: 'build',
          github: `${GH}packages/next/src/build/index.ts`,
        },
      ],
    },
    quote: {
      lines: [
        'Next.js 소스코드는 처음부터 끝까지 읽는 책이 아니라,',
        'React 앱이 프레임워크 안에서 실행되는 경로를 따라가는 지도입니다.',
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: Next.js 사용법과 내부 구조 학습의 차이',
      description: '이제 같은 Next.js 코드를 사용법 관점과 내부 구조 관점으로 나누어 읽어봅니다.',
      cta: '다음 페이지로 이동',
      href: '/usage-vs-internals',
    },
  },
  en: {
    hero: {
      badge: 'Next.js Source Reading Guide',
      title: { lead: 'Why Read the', tail: 'Next.js Source?' },
      highlight: ['Reading, in code, how a React app', 'actually runs inside the framework'],
      description: [
        'Next.js routes your React app,',
        'renders it on the server, caches, builds,',
        'and merges it back together on the client.',
      ],
      primaryCta: 'See the internal flow',
      secondaryCta: 'Find the first code entry',
      diagram: {
        title: 'How a React app becomes a framework',
        subtitle: 'How app directory files flow into server rendering and the client router',
        categoryLabel: 'Category',
        conceptLabel: 'Related concepts',
        hintLabel: 'Key',
        initialStepId: 'route-tree',
        steps: [
          {
            id: 'page',
            label: 'app/page.tsx',
            category: 'File Convention',
            tone: 'sky',
            flowIcon: 'file',
            description: 'The App Router page file you author.',
            hint: 'The starting point of the file-system convention.',
            concepts: ['app directory', 'page / layout', 'file convention'],
          },
          {
            id: 'route-tree',
            label: 'Route Tree',
            category: 'Routing',
            tone: 'blue',
            flowIcon: 'route-tree',
            description: 'Where app directory file conventions are read as a route structure.',
            hint: 'segment, layout, page, loading, error are reflected into the route structure.',
            concepts: ['segment', 'route group', 'parallel routes'],
          },
          {
            id: 'loader-tree',
            label: 'Loader Tree',
            category: 'Server Structure',
            tone: 'violet',
            flowIcon: 'loader-tree',
            description:
              'Route structure and component modules are linked into a tree for server rendering.',
            hint: 'page, layout, loading become a renderable tree.',
            concepts: ['loader tree', 'next-app-loader', 'component module'],
          },
          {
            id: 'app-render',
            label: 'App Render',
            category: 'Server Render',
            tone: 'indigo',
            flowIcon: 'server-render',
            description: 'The server runs React Server Components and builds the response.',
            hint: 'The core server render flow for HTML and RSC Payload.',
            concepts: ['app-render.tsx', 'RSC', 'HTML streaming'],
          },
          {
            id: 'rsc-payload',
            label: 'RSC Payload',
            category: 'Transport',
            tone: 'cyan',
            flowIcon: 'transport',
            description: 'The server-rendered RSC result delivered to the client as data.',
            hint: 'The client router uses it to merge the next view.',
            concepts: ['Flight', 'serialization', 'client reference'],
          },
          {
            id: 'client-merge',
            label: 'Client Router Merge',
            category: 'Client Runtime',
            tone: 'emerald',
            flowIcon: 'merge',
            description:
              'The client router merges the received payload into the current router state.',
            hint: 'Only the needed segments change — no full reload.',
            concepts: ['router state tree', 'cache node', 'soft navigation'],
          },
        ],
      },
    },
    questions: {
      eyebrow: '01 · question pool',
      title: 'Why does this even happen?',
      description:
        'Using Next.js, you hit moments the API surface alone cannot explain. That is exactly where source reading begins.',
      panel: {
        surface: 'Surface usage',
        internal: 'What happens inside',
        entries: 'Code entry to read',
      },
      cards: [
        {
          id: 'loading',
          number: '01',
          concept: 'Loading Boundary',
          tone: 'sky',
          icon: 'loading',
          question: ['Why does loading.tsx', 'only show for', 'certain segments?'],
          surface: 'Add app/blog/loading.tsx and it becomes the loading UI for the blog segment.',
          internal:
            "That segment's loading boundary is reflected into the loader and component tree.",
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
        },
        {
          id: 'server-component',
          number: '02',
          concept: 'Server / Client Boundary',
          tone: 'violet',
          icon: 'cpu',
          question: ["Why can't a Server", 'Component use', 'useState?'],
          surface:
            'A Server Component cannot hold state directly; split out a Client Component for interactivity.',
          internal:
            'The boundary splits components that run on the server from those bundled to the client.',
          entries: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/build/webpack/loaders/next-flight-loader',
          ],
        },
        {
          id: 'link',
          number: '03',
          concept: 'Client Router',
          tone: 'cyan',
          icon: 'link',
          question: ['Why does Link not', 'look like a full', 'page reload?'],
          surface: 'Using next/link triggers a client navigation.',
          internal: 'The client router merges the server payload with the current router state.',
          entries: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
        },
        {
          id: 'cache',
          number: '04',
          concept: 'Cache Components',
          tone: 'emerald',
          icon: 'database',
          question: ['Why does the cache', 'persist differently', 'than expected?'],
          surface: "You use APIs like cacheComponents, 'use cache', cacheLife, cacheTag.",
          internal:
            'Static/dynamic render boundaries and cacheable scopes split, revalidated by tag or lifetime.',
          entries: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
        },
        {
          id: 'redirect',
          number: '05',
          concept: 'Redirect Control Flow',
          tone: 'amber',
          icon: 'redirect',
          question: ["Why doesn't redirect()", 'behave like a', 'plain return?'],
          surface: 'Calling redirect() stops the current render flow and moves to another path.',
          internal:
            'redirect is not a return value but a special control flow tied to server render and action handling.',
          entries: [
            'packages/next/src/client/components/redirect.ts',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/action-handler.ts',
          ],
        },
      ],
    },
    compare: {
      eyebrow: '02 · responsibility',
      title: 'What Next.js Adds on Top of React',
      description:
        'React provides a UI rendering model. Next.js runs that model as a real application framework.',
      react: {
        title: 'What React handles',
        items: [
          'Component',
          'JSX / Element',
          'Hooks',
          'Suspense',
          'Server Components',
          'Render / Commit',
        ],
      },
      next: {
        title: 'What Next.js handles',
        items: [
          'File-system Routing',
          'Request Handling',
          'App Router',
          'Server Rendering',
          'RSC Payload Transport',
          'Cache Components',
          'Server Actions',
          'Build Pipeline',
        ],
      },
      banner:
        'React provides the rendering model; Next.js runs that model as an application framework.',
    },
    quiz: {
      title: 'Whose responsibility is this?',
      description: 'Sort each feature into React, Next.js, or where the two meet.',
      categories: { react: 'React', next: 'Next.js', both: 'Where they meet' },
      labels: {
        prompt: 'Pick a category',
        correct: 'Correct',
        wrong: 'Think again',
        reset: 'Try again',
        answer: 'Explanation',
      },
      items: [
        {
          id: 'layout',
          label: 'layout.tsx',
          answer: 'next',
          explanation:
            'layout.tsx is an App Router file convention. Next.js interprets segment structure and state preservation.',
        },
        {
          id: 'usestate',
          label: 'useState',
          answer: 'react',
          explanation:
            'useState is a React Hook. Component state is managed by the React render model.',
        },
        {
          id: 'cachetag',
          label: 'cacheTag',
          answer: 'next',
          explanation:
            'cacheTag is a Next.js cache API. The framework manages cache scope and revalidation.',
        },
        {
          id: 'rsc-payload',
          label: 'RSC Payload',
          answer: 'both',
          explanation:
            'React produces the Flight data; Next.js transports and merges it — this is where they meet.',
        },
        {
          id: 'suspense',
          label: 'Suspense',
          answer: 'react',
          explanation:
            'Suspense is a React feature, but in the App Router it ties into loading boundaries and streaming.',
        },
        {
          id: 'link',
          label: 'next/link',
          answer: 'next',
          explanation:
            'next/link is the Next.js client router entry. The framework handles prefetch and soft navigation.',
        },
        {
          id: 'route',
          label: 'route.ts',
          answer: 'next',
          explanation:
            'route.ts is the App Router Route Handler convention. Next.js handles request/response.',
        },
        {
          id: 'metadata',
          label: 'metadata',
          answer: 'next',
          explanation: 'metadata is a Next.js API generated and injected during server rendering.',
        },
      ],
    },
    benefits: {
      eyebrow: '03 · what you gain',
      title: 'What You Gain by Reading the Source',
      entryLabel: 'Related code entry',
      cards: [
        {
          id: 'app-router',
          title: 'Predict how the App Router behaves',
          body: 'Once you understand which segment boundary layout, page, loading, and error connect to, you can predict transitions and preserved UI.',
          tone: 'blue',
          icon: 'route',
          entries: ['create-component-tree.tsx', 'app-router.tsx', 'layout-router.tsx'],
        },
        {
          id: 'cache',
          title: 'Debug caching structurally',
          body: 'Trace why a cache persists and when it revalidates from render boundaries and cache scope — not from API names.',
          tone: 'emerald',
          icon: 'bug',
          entries: [
            'cacheComponents',
            'use cache',
            'cacheLife',
            'cacheTag',
            'dynamic-rendering.ts',
          ],
        },
        {
          id: 'server-action',
          title: 'Understand Server Action & revalidation',
          body: 'Connect how form submit, action request, redirect, and revalidate are handled on the server.',
          tone: 'cyan',
          icon: 'workflow',
          entries: ['action-handler.ts', 'app-render.tsx', 'csrf-protection.ts', 'encryption.ts'],
        },
        {
          id: 'design',
          title: 'Build framework design sense',
          body: 'See how routing, rendering, cache, and build stay separate yet connect into one framework.',
          tone: 'violet',
          icon: 'compass',
          entries: ['base-server.ts', 'build/index.ts', 'next-app-loader', 'server/app-render'],
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · first read',
      title: "Today's First Code Entry",
      description:
        'Opening the Next.js repo for the first time, you need not read every file. Start from these four entries to grasp the execution axis.',
      questionLabel: 'Question to ask',
      conceptLabel: 'Related concepts',
      entries: [
        {
          id: 'request',
          area: 'Request handling',
          path: 'packages/next/src/server/base-server.ts',
          question: 'Where does a browser request enter inside the Next.js server?',
          concepts: 'Request pipeline, route matching, render dispatch',
          cta: 'Open base-server.ts',
          tone: 'blue',
          flowIcon: 'request',
          github: `${GH}packages/next/src/server/base-server.ts`,
        },
        {
          id: 'render',
          area: 'Server rendering',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          question: 'How does an App Router page lead to React rendering on the server?',
          concepts: 'App render, RSC, Flight response, HTML generation',
          cta: 'Open app-render.tsx',
          tone: 'violet',
          flowIcon: 'server-render',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
        },
        {
          id: 'client',
          area: 'Client router',
          path: 'packages/next/src/client/components/app-router.tsx',
          question: 'How is the payload merged on the client after a Link navigation?',
          concepts: 'Router state, client navigation, cache node',
          cta: 'Open app-router.tsx',
          tone: 'cyan',
          flowIcon: 'client',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
        },
        {
          id: 'build',
          area: 'Build',
          path: 'packages/next/src/build/index.ts',
          question: 'How do app directory files become entries and manifests during build?',
          concepts: 'Build pipeline, manifest, loader, bundling',
          cta: 'Open build/index.ts',
          tone: 'emerald',
          flowIcon: 'build',
          github: `${GH}packages/next/src/build/index.ts`,
        },
      ],
    },
    quote: {
      lines: [
        'The Next.js source is not a book you read cover to cover,',
        'but a map you follow along the path a React app runs inside the framework.',
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Using Next.js vs Learning Its Internals',
      description:
        'Now read the same Next.js code split into the usage lens and the internals lens.',
      cta: 'Go to the next page',
      href: '/usage-vs-internals',
    },
  },
};
