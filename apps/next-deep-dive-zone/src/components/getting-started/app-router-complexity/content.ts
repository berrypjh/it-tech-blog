import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { CodeEntryIconName, FactorIconName } from './icons';

export type { ToneKey };

export type FlowStep = {
  id: 'url' | 'segment-tree' | 'loader-tree' | 'rsc-payload' | 'router-state' | 'cache-node';
  label: string;
  category: string;
  tone: ToneKey;
  description: string;
  hint: string;
};

export type CompareCard = {
  title: string;
  summary: string;
  items: string[];
  pill: string;
};

export type ComplexityFactor = {
  id: FactorIconName;
  number: string;
  title: string;
  surfaceApi: string;
  internalConcept: string;
  files: string[];
  misconception: string;
  tone: ToneKey;
};

export type SegmentNode = {
  label: string;
  kind: 'layout' | 'page';
};

export type RouteOption = {
  id: string;
  path: string;
  nodes: SegmentNode[];
  kept: string[];
  replaced: string[];
  description: string;
  concepts: string[];
};

export type CodeEntry = {
  id: CodeEntryIconName;
  area: string;
  path: string;
  reads: string;
  concept: string;
  cta: string;
  github: string;
  tone: ToneKey;
};

export type AppRouterComplexityContent = {
  hero: {
    badge: string;
    title: { lead: string; accent: string };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    diagram: {
      title: string;
      subtitle: string;
      categoryLabel: string;
      hintLabel: string;
      initialStepId: FlowStep['id'];
      steps: FlowStep[];
    };
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    transition: string;
    pages: CompareCard;
    app: CompareCard;
  };
  factors: {
    eyebrow: string;
    title: string;
    description: string;
    panel: { surface: string; internal: string; files: string; misconception: string };
    cards: ComplexityFactor[];
  };
  segmentTree: {
    eyebrow: string;
    title: string;
    description: string;
    banner: string;
    optionLabel: string;
    statusKept: string;
    statusReplaced: string;
    panel: { kept: string; replaced: string; desc: string; concepts: string };
    options: RouteOption[];
  };
  codeEntry: {
    eyebrow: string;
    title: string;
    description: string;
    readsLabel: string;
    conceptLabel: string;
    entries: CodeEntry[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

const GH = 'https://github.com/vercel/next.js/blob/canary/';

export const appRouterComplexityContent: Record<Locale, AppRouterComplexityContent> = {
  ko: {
    hero: {
      badge: 'Next.js App Router 내부 구조',
      title: { lead: 'App Router 이후', accent: 'Next.js가 복잡해진 이유' },
      highlight: [
        'App Router는 URL 매칭기가 아니라,',
        '서버와 클라이언트가 segment tree를 공유하는 런타임입니다.',
      ],
      description: [
        'App Router는 URL을 컴포넌트에 연결하는 장치가 아니라,',
        '서버와 클라이언트가 segment tree를 공유하며',
        '부분적으로 렌더링하고 병합하는 런타임입니다.',
      ],
      primaryCta: '복잡도 요소 보기',
      secondaryCta: 'Segment Tree 체험하기',
      diagram: {
        title: 'URL에서 Cache Node까지',
        subtitle: 'App Router는 서버와 클라이언트 사이에서 tree와 payload를 연결합니다.',
        categoryLabel: '분류',
        hintLabel: '핵심',
        initialStepId: 'segment-tree',
        steps: [
          {
            id: 'url',
            label: 'URL',
            category: 'Request',
            tone: 'sky',
            description: '사용자의 요청 경로입니다.',
            hint: '예를 들어 /dashboard/settings/profile 같은 URL이 들어옵니다.',
          },
          {
            id: 'segment-tree',
            label: 'Segment Tree',
            category: 'Routing',
            tone: 'blue',
            description: 'URL은 app 디렉터리 구조를 기준으로 segment tree로 해석됩니다.',
            hint: 'layout, page, loading, error가 segment 단위로 연결됩니다.',
          },
          {
            id: 'loader-tree',
            label: 'Loader Tree',
            category: 'Server Structure',
            tone: 'violet',
            description:
              '파일 시스템 라우팅 결과가 서버 렌더링에서 사용할 loader tree로 준비됩니다.',
            hint: '각 segment에 연결된 layout, page, loading 모듈을 찾는 구조입니다.',
          },
          {
            id: 'rsc-payload',
            label: 'RSC Payload',
            category: 'Transport',
            tone: 'cyan',
            description: '서버에서 React Server Components를 실행한 결과가 payload로 만들어집니다.',
            hint: '클라이언트는 이 payload를 받아 현재 router state와 병합합니다.',
          },
          {
            id: 'router-state',
            label: 'Router State Tree',
            category: 'Client Runtime',
            tone: 'indigo',
            description: '클라이언트 라우터가 현재 화면의 segment 상태를 들고 있는 트리입니다.',
            hint: '어떤 layout을 유지하고 어떤 page를 교체할지 판단하는 기준입니다.',
          },
          {
            id: 'cache-node',
            label: 'Cache Node',
            category: 'Client Cache',
            tone: 'emerald',
            description:
              '클라이언트 라우터가 segment별 렌더링 결과와 데이터를 보관하는 구조입니다.',
            hint: '빠른 내비게이션과 부분 갱신을 위한 캐시 계층입니다.',
          },
        ],
      },
    },
    compare: {
      eyebrow: '01 · mindset shift',
      title: 'Pages Router와 App Router는 사고방식이 다릅니다',
      description:
        'App Router가 복잡해진 이유는 단순히 기능이 많아져서가 아닙니다. 페이지 단위 라우팅에서 segment 단위 런타임으로 관점이 바뀌었기 때문입니다.',
      transition: 'page 단위 사고 → segment 단위 런타임',
      pages: {
        title: 'Pages Router',
        summary: '요청과 page 파일의 대응을 중심으로 이해하기 쉽습니다.',
        items: [
          'page 단위',
          'getServerSideProps / getStaticProps',
          '비교적 단순한 요청-페이지 대응',
          '문서 단위 전환에 가까운 사고',
        ],
        pill: '페이지를 고른다',
      },
      app: {
        title: 'App Router',
        summary:
          'segment tree, nested layout, RSC Payload, client router state를 함께 봐야 합니다.',
        items: [
          'segment 단위',
          'layout / page / loading / error',
          'React Server Components',
          'RSC Payload',
          'nested layout',
          'partial rendering',
          'client router state',
        ],
        pill: '트리를 병합한다',
      },
    },
    factors: {
      eyebrow: '02 · nine factors',
      title: '복잡도는 9개 요소로 나눠 볼 수 있습니다',
      description:
        'App Router를 한 번에 이해하려고 하면 어렵습니다. 먼저 어떤 요소가 복잡도를 만드는지 작게 나눠보는 것이 좋습니다.',
      panel: {
        surface: '표면 API',
        internal: '내부 개념',
        files: '읽을 파일',
        misconception: '대표 오해',
      },
      cards: [
        {
          id: 'nested-layout',
          number: '01',
          title: 'Nested Layout',
          surfaceApi: 'layout.tsx',
          internalConcept: '부모 segment의 UI가 하위 route 이동 중에도 유지됩니다.',
          files: [
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception: '페이지가 바뀌면 모든 UI가 새로 그려진다고 생각하기 쉽습니다.',
          tone: 'blue',
        },
        {
          id: 'route-segment',
          number: '02',
          title: 'Route Segment',
          surfaceApi: 'app 디렉터리의 폴더 구조',
          internalConcept:
            'URL path가 segment 단위로 나뉘고, 각 segment가 layout/page/loading/error와 연결됩니다.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          ],
          misconception: 'URL path와 page 파일만 1:1로 대응한다고 생각하기 쉽습니다.',
          tone: 'sky',
        },
        {
          id: 'loading-boundary',
          number: '03',
          title: 'Loading Boundary',
          surfaceApi: 'loading.tsx',
          internalConcept:
            '특정 segment에 Suspense fallback이 연결되고, 부분 로딩 UI가 표시됩니다.',
          files: [
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception: 'loading.tsx가 전체 페이지 로딩 화면이라고 생각하기 쉽습니다.',
          tone: 'violet',
        },
        {
          id: 'error-boundary',
          number: '04',
          title: 'Error Boundary',
          surfaceApi: 'error.tsx',
          internalConcept:
            'segment 단위 error boundary가 만들어지고, 하위 렌더링 실패를 특정 구간에서 처리합니다.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/error-boundary.tsx',
          ],
          misconception: '에러가 발생하면 항상 전체 앱이 깨진다고 생각하기 쉽습니다.',
          tone: 'amber',
        },
        {
          id: 'parallel-route',
          number: '05',
          title: 'Parallel Route',
          surfaceApi: '@slot',
          internalConcept: '하나의 layout 안에서 여러 route branch를 동시에 렌더링할 수 있습니다.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          misconception: 'URL은 항상 하나의 단일 page만 가리킨다고 생각하기 쉽습니다.',
          tone: 'cyan',
        },
        {
          id: 'intercepting-route',
          number: '06',
          title: 'Intercepting Route',
          surfaceApi: '(.) / (..) route convention',
          internalConcept:
            '현재 route context를 유지하면서 다른 route를 가로채 modal 같은 UI 흐름을 만들 수 있습니다.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: '라우팅은 항상 목적지 페이지로 완전히 이동한다고 생각하기 쉽습니다.',
          tone: 'teal',
        },
        {
          id: 'rsc-payload',
          number: '07',
          title: 'RSC Payload',
          surfaceApi: 'Server Components, streaming, next/link navigation',
          internalConcept:
            '서버에서 렌더링된 컴포넌트 결과가 클라이언트 라우터가 병합할 데이터로 전달됩니다.',
          files: [
            'packages/next/src/server/app-render/use-flight-response.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: '서버 렌더링 결과는 항상 HTML만 내려온다고 생각하기 쉽습니다.',
          tone: 'indigo',
        },
        {
          id: 'router-reducer',
          number: '08',
          title: 'Router Reducer',
          surfaceApi: 'next/link, router.push, router.refresh',
          internalConcept: '클라이언트 내비게이션 action을 받아 router state를 변경합니다.',
          files: [
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: 'Link 이동은 단순히 URL만 바꾸는 것이라고 생각하기 쉽습니다.',
          tone: 'emerald',
        },
        {
          id: 'router-cache',
          number: '09',
          title: 'Router Cache',
          surfaceApi: 'prefetch, soft navigation, layout 유지',
          internalConcept:
            'segment별 렌더링 결과와 payload를 캐시해 빠른 내비게이션과 부분 병합을 가능하게 합니다.',
          files: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          misconception: '캐시는 서버 데이터 캐시만 의미한다고 생각하기 쉽습니다.',
          tone: 'blue',
        },
      ],
    },
    segmentTree: {
      eyebrow: '03 · segment tree',
      title: 'Segment Tree를 보면 App Router가 이해됩니다',
      description:
        'App Router의 핵심은 전체 페이지를 매번 교체하는 것이 아니라, segment tree에서 유지할 layout과 교체할 page를 나누는 것입니다.',
      banner:
        'App Router의 핵심은 전체 페이지를 매번 교체하는 것이 아니라, segment tree에서 유지할 부분과 교체할 부분을 나누는 것입니다.',
      optionLabel: '경로를 선택해 segment tree를 확인하세요',
      statusKept: '유지',
      statusReplaced: '교체',
      panel: {
        kept: '유지되는 부분',
        replaced: '교체되는 부분',
        desc: '설명',
        concepts: '관련 내부 개념',
      },
      options: [
        {
          id: 'profile',
          path: '/dashboard/settings/profile',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'settings layout', kind: 'layout' },
            { label: 'profile page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout', 'settings layout'],
          replaced: ['profile page'],
          description: 'settings 구간의 layout은 유지되고, profile page가 leaf로 렌더링됩니다.',
          concepts: ['segment tree', 'layout persistence', 'router state patch', 'cache node'],
        },
        {
          id: 'billing',
          path: '/dashboard/settings/billing',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'settings layout', kind: 'layout' },
            { label: 'billing page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout', 'settings layout'],
          replaced: ['billing page'],
          description:
            'profile에서 billing으로 이동해도 settings layout까지는 유지되고 leaf page만 교체됩니다.',
          concepts: ['layout persistence', 'leaf page 교체', 'router state patch', 'cache node'],
        },
        {
          id: 'reports',
          path: '/dashboard/reports',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'reports page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout'],
          replaced: ['reports page'],
          description:
            'settings segment를 벗어나므로 settings layout은 빠지고 reports page branch로 이동합니다.',
          concepts: ['segment 이탈', 'layout 제거', 'router state patch', 'partial rendering'],
        },
        {
          id: 'blog',
          path: '/blog/[slug]',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'blog layout', kind: 'layout' },
            { label: '[slug] page', kind: 'page' },
          ],
          kept: ['root layout', 'blog layout'],
          replaced: ['[slug] page'],
          description:
            '동적 segment도 segment tree의 일부로 해석되며, slug 값에 따라 leaf page가 렌더링됩니다.',
          concepts: ['dynamic segment', 'segment tree', 'leaf page', 'cache node'],
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · read the code',
      title: '이제 실제 코드 입구로 연결합니다',
      description:
        'App Router를 이해하려면 서버에서 tree를 만드는 코드와 클라이언트에서 router state를 병합하는 코드를 함께 읽어야 합니다.',
      readsLabel: '무엇을 읽는가',
      conceptLabel: '연결되는 개념',
      entries: [
        {
          id: 'create-component-tree',
          area: '서버에서 tree 만들기',
          path: 'packages/next/src/server/app-render/create-component-tree.tsx',
          reads: 'layout, page, loading, error가 component tree로 연결되는 흐름',
          concept: 'component tree, loading boundary, error boundary',
          cta: 'create-component-tree.tsx 열기',
          github: `${GH}packages/next/src/server/app-render/create-component-tree.tsx`,
          tone: 'blue',
        },
        {
          id: 'flight-router-state',
          area: 'Flight router state 만들기',
          path: 'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          reads: 'loader tree를 클라이언트가 이해할 router state 형태로 바꾸는 흐름',
          concept: 'loader tree, router state tree, flight router state',
          cta: 'create-flight-router-state-from-loader-tree.ts 열기',
          github: `${GH}packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts`,
          tone: 'violet',
        },
        {
          id: 'app-render',
          area: '서버 렌더링 전체 흐름',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          reads: 'App Router 요청이 서버 렌더링과 RSC Payload 생성으로 이어지는 흐름',
          concept: 'app render, RSC Payload, Flight response',
          cta: 'app-render.tsx 열기',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
          tone: 'indigo',
        },
        {
          id: 'layout-router',
          area: '클라이언트에서 layout 유지하기',
          path: 'packages/next/src/client/components/layout-router.tsx',
          reads: 'segment별 layout을 유지하고 하위 route를 교체하는 클라이언트 런타임 흐름',
          concept: 'layout persistence, segment path, router cache',
          cta: 'layout-router.tsx 열기',
          github: `${GH}packages/next/src/client/components/layout-router.tsx`,
          tone: 'cyan',
        },
        {
          id: 'app-router',
          area: '전체 App Router 런타임',
          path: 'packages/next/src/client/components/app-router.tsx',
          reads: '클라이언트 App Router의 최상위 런타임과 navigation 흐름',
          concept: 'app router, router state, navigation',
          cta: 'app-router.tsx 열기',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
          tone: 'teal',
        },
        {
          id: 'router-reducer',
          area: 'Router state 변경 처리',
          path: 'packages/next/src/client/components/router-reducer',
          reads: 'navigate, refresh, server patch 같은 action이 router state를 바꾸는 흐름',
          concept: 'router reducer, server patch, client navigation',
          cta: 'router-reducer 열기',
          github: `${GH}packages/next/src/client/components/router-reducer`,
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: React와 Next.js의 역할 경계',
      description:
        'App Router가 왜 복잡해졌는지 이해했다면, 이제 React가 담당하는 렌더링 모델과 Next.js가 담당하는 프레임워크 실행 계층을 분리해서 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/react-next-boundary',
    },
  },
  en: {
    hero: {
      badge: 'Next.js App Router internals',
      title: { lead: 'Why Next.js Got Complex', accent: 'After App Router' },
      highlight: [
        'App Router is not a URL matcher,',
        'but a runtime where server and client share a segment tree.',
      ],
      description: [
        'App Router is not a device that wires a URL to a component,',
        'but a runtime where server and client share a segment tree',
        'and render and merge partially.',
      ],
      primaryCta: 'See the complexity factors',
      secondaryCta: 'Explore the Segment Tree',
      diagram: {
        title: 'From URL to Cache Node',
        subtitle: 'App Router connects trees and payloads between server and client.',
        categoryLabel: 'Category',
        hintLabel: 'Key',
        initialStepId: 'segment-tree',
        steps: [
          {
            id: 'url',
            label: 'URL',
            category: 'Request',
            tone: 'sky',
            description: "The user's request path.",
            hint: 'For example, a URL like /dashboard/settings/profile comes in.',
          },
          {
            id: 'segment-tree',
            label: 'Segment Tree',
            category: 'Routing',
            tone: 'blue',
            description: 'The URL is parsed into a segment tree based on the app directory.',
            hint: 'layout, page, loading, error connect per segment.',
          },
          {
            id: 'loader-tree',
            label: 'Loader Tree',
            category: 'Server Structure',
            tone: 'violet',
            description: 'The routing result becomes a loader tree used during server rendering.',
            hint: 'A structure that finds the layout, page, loading modules per segment.',
          },
          {
            id: 'rsc-payload',
            label: 'RSC Payload',
            category: 'Transport',
            tone: 'cyan',
            description: 'The server-run React Server Components result becomes a payload.',
            hint: 'The client receives it and merges with the current router state.',
          },
          {
            id: 'router-state',
            label: 'Router State Tree',
            category: 'Client Runtime',
            tone: 'indigo',
            description: 'The tree the client router holds for the current screen segment state.',
            hint: 'The basis for deciding which layout to keep and which page to replace.',
          },
          {
            id: 'cache-node',
            label: 'Cache Node',
            category: 'Client Cache',
            tone: 'emerald',
            description: 'Where the client router stores per-segment render results and data.',
            hint: 'A cache layer for fast navigation and partial updates.',
          },
        ],
      },
    },
    compare: {
      eyebrow: '01 · mindset shift',
      title: 'Pages Router and App Router think differently',
      description:
        'App Router got complex not simply because it has more features, but because the lens shifted from page-unit routing to segment-unit runtime.',
      transition: 'page-unit thinking → segment-unit runtime',
      pages: {
        title: 'Pages Router',
        summary: 'Easy to understand via the mapping of requests to page files.',
        items: [
          'page unit',
          'getServerSideProps / getStaticProps',
          'relatively simple request-to-page mapping',
          'thinking close to document-level transitions',
        ],
        pill: 'Pick a page',
      },
      app: {
        title: 'App Router',
        summary:
          'You must read segment tree, nested layout, RSC Payload, and client router state together.',
        items: [
          'segment unit',
          'layout / page / loading / error',
          'React Server Components',
          'RSC Payload',
          'nested layout',
          'partial rendering',
          'client router state',
        ],
        pill: 'Merge a tree',
      },
    },
    factors: {
      eyebrow: '02 · nine factors',
      title: 'Break the complexity into nine factors',
      description:
        'Understanding App Router all at once is hard. First break down which factors create the complexity.',
      panel: {
        surface: 'Surface API',
        internal: 'Internal concept',
        files: 'Files to read',
        misconception: 'Common misconception',
      },
      cards: [
        {
          id: 'nested-layout',
          number: '01',
          title: 'Nested Layout',
          surfaceApi: 'layout.tsx',
          internalConcept: "A parent segment's UI persists even while sub-routes change.",
          files: [
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception: 'It is easy to assume all UI re-renders when the page changes.',
          tone: 'blue',
        },
        {
          id: 'route-segment',
          number: '02',
          title: 'Route Segment',
          surfaceApi: 'app directory folder structure',
          internalConcept:
            'The URL path splits into segments, each connected to layout/page/loading/error.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          ],
          misconception: 'It is easy to assume the URL path maps 1:1 to a page file only.',
          tone: 'sky',
        },
        {
          id: 'loading-boundary',
          number: '03',
          title: 'Loading Boundary',
          surfaceApi: 'loading.tsx',
          internalConcept:
            'A Suspense fallback connects to a segment and shows partial loading UI.',
          files: [
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          misconception: 'It is easy to assume loading.tsx is a full-page loading screen.',
          tone: 'violet',
        },
        {
          id: 'error-boundary',
          number: '04',
          title: 'Error Boundary',
          surfaceApi: 'error.tsx',
          internalConcept:
            'A per-segment error boundary is created and handles sub-render failures within a region.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/error-boundary.tsx',
          ],
          misconception: 'It is easy to assume an error always breaks the whole app.',
          tone: 'amber',
        },
        {
          id: 'parallel-route',
          number: '05',
          title: 'Parallel Route',
          surfaceApi: '@slot',
          internalConcept: 'Multiple route branches can render at once inside one layout.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          misconception: 'It is easy to assume a URL always points to a single page.',
          tone: 'cyan',
        },
        {
          id: 'intercepting-route',
          number: '06',
          title: 'Intercepting Route',
          surfaceApi: '(.) / (..) route convention',
          internalConcept:
            'You can intercept another route while keeping the current context, for modal-like flows.',
          files: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception:
            'It is easy to assume routing always fully navigates to the destination page.',
          tone: 'teal',
        },
        {
          id: 'rsc-payload',
          number: '07',
          title: 'RSC Payload',
          surfaceApi: 'Server Components, streaming, next/link navigation',
          internalConcept:
            'Server-rendered component results are delivered as data for the client router to merge.',
          files: [
            'packages/next/src/server/app-render/use-flight-response.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception:
            'It is easy to assume server render results always come down as HTML only.',
          tone: 'indigo',
        },
        {
          id: 'router-reducer',
          number: '08',
          title: 'Router Reducer',
          surfaceApi: 'next/link, router.push, router.refresh',
          internalConcept: 'It takes client navigation actions and changes the router state.',
          files: [
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/app-router.tsx',
          ],
          misconception: 'It is easy to assume Link navigation only changes the URL.',
          tone: 'emerald',
        },
        {
          id: 'router-cache',
          number: '09',
          title: 'Router Cache',
          surfaceApi: 'prefetch, soft navigation, layout persistence',
          internalConcept:
            'It caches per-segment render results and payloads for fast navigation and partial merges.',
          files: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          misconception: 'It is easy to assume cache means only the server data cache.',
          tone: 'blue',
        },
      ],
    },
    segmentTree: {
      eyebrow: '03 · segment tree',
      title: 'Seeing the Segment Tree makes App Router click',
      description:
        'The core of App Router is not replacing the whole page every time, but splitting which layout to keep and which page to replace in the segment tree.',
      banner:
        'The core of App Router is not replacing the whole page every time, but splitting the kept part from the replaced part in the segment tree.',
      optionLabel: 'Pick a path to inspect the segment tree',
      statusKept: 'Kept',
      statusReplaced: 'Replaced',
      panel: {
        kept: 'Kept',
        replaced: 'Replaced',
        desc: 'Explanation',
        concepts: 'Related internals',
      },
      options: [
        {
          id: 'profile',
          path: '/dashboard/settings/profile',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'settings layout', kind: 'layout' },
            { label: 'profile page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout', 'settings layout'],
          replaced: ['profile page'],
          description: 'The settings layouts persist, and the profile page renders as the leaf.',
          concepts: ['segment tree', 'layout persistence', 'router state patch', 'cache node'],
        },
        {
          id: 'billing',
          path: '/dashboard/settings/billing',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'settings layout', kind: 'layout' },
            { label: 'billing page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout', 'settings layout'],
          replaced: ['billing page'],
          description:
            'Moving profile to billing keeps everything up to the settings layout and swaps only the leaf page.',
          concepts: ['layout persistence', 'leaf page swap', 'router state patch', 'cache node'],
        },
        {
          id: 'reports',
          path: '/dashboard/reports',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'dashboard layout', kind: 'layout' },
            { label: 'reports page', kind: 'page' },
          ],
          kept: ['root layout', 'dashboard layout'],
          replaced: ['reports page'],
          description:
            'Leaving the settings segment drops the settings layout and moves to the reports page branch.',
          concepts: [
            'leaving a segment',
            'layout removal',
            'router state patch',
            'partial rendering',
          ],
        },
        {
          id: 'blog',
          path: '/blog/[slug]',
          nodes: [
            { label: 'root layout', kind: 'layout' },
            { label: 'blog layout', kind: 'layout' },
            { label: '[slug] page', kind: 'page' },
          ],
          kept: ['root layout', 'blog layout'],
          replaced: ['[slug] page'],
          description:
            'A dynamic segment is also part of the segment tree; the leaf page renders by the slug value.',
          concepts: ['dynamic segment', 'segment tree', 'leaf page', 'cache node'],
        },
      ],
    },
    codeEntry: {
      eyebrow: '04 · read the code',
      title: 'Now connect to the actual code entries',
      description:
        'To understand App Router, read the server code that builds the tree together with the client code that merges router state.',
      readsLabel: 'What you read',
      conceptLabel: 'Connected concepts',
      entries: [
        {
          id: 'create-component-tree',
          area: 'Build the tree on the server',
          path: 'packages/next/src/server/app-render/create-component-tree.tsx',
          reads: 'How layout, page, loading, error connect into a component tree',
          concept: 'component tree, loading boundary, error boundary',
          cta: 'Open create-component-tree.tsx',
          github: `${GH}packages/next/src/server/app-render/create-component-tree.tsx`,
          tone: 'blue',
        },
        {
          id: 'flight-router-state',
          area: 'Build the Flight router state',
          path: 'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          reads: 'How the loader tree becomes a router state the client understands',
          concept: 'loader tree, router state tree, flight router state',
          cta: 'Open create-flight-router-state-from-loader-tree.ts',
          github: `${GH}packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts`,
          tone: 'violet',
        },
        {
          id: 'app-render',
          area: 'Full server render flow',
          path: 'packages/next/src/server/app-render/app-render.tsx',
          reads: 'How an App Router request leads to server rendering and RSC Payload creation',
          concept: 'app render, RSC Payload, Flight response',
          cta: 'Open app-render.tsx',
          github: `${GH}packages/next/src/server/app-render/app-render.tsx`,
          tone: 'indigo',
        },
        {
          id: 'layout-router',
          area: 'Persist layouts on the client',
          path: 'packages/next/src/client/components/layout-router.tsx',
          reads: 'The client runtime flow that keeps per-segment layouts and swaps sub-routes',
          concept: 'layout persistence, segment path, router cache',
          cta: 'Open layout-router.tsx',
          github: `${GH}packages/next/src/client/components/layout-router.tsx`,
          tone: 'cyan',
        },
        {
          id: 'app-router',
          area: 'The whole App Router runtime',
          path: 'packages/next/src/client/components/app-router.tsx',
          reads: 'The top-level client App Router runtime and navigation flow',
          concept: 'app router, router state, navigation',
          cta: 'Open app-router.tsx',
          github: `${GH}packages/next/src/client/components/app-router.tsx`,
          tone: 'teal',
        },
        {
          id: 'router-reducer',
          area: 'Handle router state changes',
          path: 'packages/next/src/client/components/router-reducer',
          reads: 'How actions like navigate, refresh, server patch change the router state',
          concept: 'router reducer, server patch, client navigation',
          cta: 'Open router-reducer',
          github: `${GH}packages/next/src/client/components/router-reducer`,
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: The Role Boundary Between React and Next.js',
      description:
        'Now that you see why App Router got complex, separate the rendering model React owns from the framework execution layer Next.js owns.',
      cta: 'Go to the next page',
      href: '/react-next-boundary',
    },
  },
};
