import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { AxisIconName, KeywordIconName, TimelineIconName } from './icons';

export type { ToneKey };

export type KeywordCard = {
  id: KeywordIconName;
  title: string;
  description: string;
  keyword: string;
  tone: ToneKey;
};

export type TimelineStep = {
  id: TimelineIconName;
  title: string;
  era: string;
  doc: string;
  concepts: string[];
  codeAxis: string[];
  caution: string;
  tone: ToneKey;
};

export type AxisCard = {
  id: AxisIconName;
  title: string;
  summary: string;
  surfaceApi: string[];
  internalConcepts: string[];
  readingPaths: string[];
  outdated: string;
  tone: ToneKey;
};

export type CacheToggle = {
  id: string;
  tab: string;
  title: string;
  description: string;
  keywords: string[];
  tone: ToneKey;
};

export type ChecklistItem = { id: string; question: string; correction: string };

export type Next16Content = {
  hero: {
    badge: string;
    title: { lead: string; accent: string };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    keywords: KeywordCard[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    listLabel: string;
    panel: { era: string; doc: string; concepts: string; codeAxis: string; caution: string };
    steps: TimelineStep[];
  };
  axes: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { surface: string; internal: string; path: string; outdated: string };
    cards: AxisCard[];
  };
  cache: {
    eyebrow: string;
    title: string;
    description: string;
    keywordLabel: string;
    left: { title: string; items: string[]; note: string };
    right: { title: string; items: string[]; note: string };
    toggles: CacheToggle[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    description: string;
    correctionLabel: string;
    items: ChecklistItem[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

export const next16Content: Record<Locale, Next16Content> = {
  ko: {
    hero: {
      badge: 'Next.js 16 소스코드 독해 기준',
      title: { lead: 'Next.js 16 코드를', accent: '기준으로 읽는 이유' },
      highlight: ['최신 버전이라서가 아니라,', '읽어야 하는 내부 축이 달라졌기 때문입니다.'],
      description: [
        'Next.js 16에서는 App Router의 실행 흐름과',
        'Cache Components 기반 캐싱 모델을 함께 읽어야 합니다.',
        '라우팅, 서버 렌더링, RSC Payload, 캐시, 빌드가',
        '하나의 프레임워크 실행 흐름으로 연결됩니다.',
      ],
      primaryCta: '4개 독해 축 보기',
      secondaryCta: 'Cache Components 흐름 보기',
      keywords: [
        {
          id: 'app-router',
          title: 'App Router',
          description:
            'page 단위가 아니라 segment tree, layout, loading, error boundary를 중심으로 읽습니다.',
          keyword: 'segment tree',
          tone: 'blue',
        },
        {
          id: 'cache',
          title: 'Cache Components',
          description:
            '자동 static/dynamic 감각보다 명시적 cached scope와 revalidation 흐름을 읽습니다.',
          keyword: 'cacheComponents',
          tone: 'emerald',
        },
        {
          id: 'action',
          title: 'Server Actions',
          description:
            'form submit, action request, redirect, revalidation이 서버 흐름에서 연결됩니다.',
          keyword: 'action-handler',
          tone: 'violet',
        },
        {
          id: 'turbopack',
          title: 'Turbopack',
          description: '빌드와 개발 서버의 module graph, invalidation, bundle 흐름을 함께 봅니다.',
          keyword: 'module graph',
          tone: 'cyan',
        },
      ],
    },
    timeline: {
      eyebrow: '01 · version shift',
      title: 'Next.js를 읽는 기준은 계속 바뀌었습니다',
      description:
        '과거 자료가 틀렸다는 뜻이 아닙니다. 그 자료가 설명하던 Next.js의 시대와 현재 우리가 읽어야 하는 Next.js의 기준이 다를 수 있다는 뜻입니다.',
      listLabel: '단계를 선택해 그 시대의 독해 기준을 확인하세요',
      panel: {
        era: '시대 감각',
        doc: '읽을 문서',
        concepts: '읽을 개념',
        codeAxis: '읽을 코드 축',
        caution: '주의',
      },
      steps: [
        {
          id: 'pages',
          title: 'Pages Router 중심',
          era: 'page 파일과 getServerSideProps / getStaticProps 중심으로 요청과 페이지를 연결했습니다.',
          doc: 'Pages Router 문서',
          concepts: ['pages directory', 'getServerSideProps', 'getStaticProps', 'API Routes'],
          codeAxis: ['server', 'route matching', 'pages render'],
          caution: '현재 App Router 학습에서는 그대로 적용되지 않는 개념이 많습니다.',
          tone: 'sky',
        },
        {
          id: 'app-router',
          title: 'App Router 등장',
          era: 'app 디렉터리, layout, page, loading, error가 segment 단위로 연결되기 시작했습니다.',
          doc: 'App Router 문서',
          concepts: ['route segment', 'layout', 'page', 'loading', 'error', 'nested layout'],
          codeAxis: ['app-render', 'create-component-tree', 'loader tree'],
          caution: 'URL과 page가 1:1로 매핑된다는 감각만으로는 부족합니다.',
          tone: 'blue',
        },
        {
          id: 'rsc',
          title: 'React Server Components 통합',
          era: '서버에서 실행되는 컴포넌트와 클라이언트에서 hydrate되는 컴포넌트의 경계가 중요해졌습니다.',
          doc: 'Server Components 문서',
          concepts: ['RSC Payload', 'Flight response', 'Client Component boundary'],
          codeAxis: ['app-render', 'use-flight-response', 'client router'],
          caution: 'React 렌더링만 보거나 Next 라우팅만 보면 전체 흐름이 보이지 않습니다.',
          tone: 'violet',
        },
        {
          id: 'actions',
          title: 'Server Actions 확장',
          era: 'form submit과 mutation이 서버 함수 호출, redirect, revalidation 흐름과 연결됩니다.',
          doc: 'Server Actions / Updating Data',
          concepts: [
            'Server Functions',
            'action request',
            'form submit',
            'revalidatePath',
            'redirect',
          ],
          codeAxis: ['action-handler', 'app-render', 'csrf-protection', 'encryption'],
          caution: '단순 API route 호출처럼만 이해하면 action 이후 UI 갱신 흐름을 놓칩니다.',
          tone: 'indigo',
        },
        {
          id: 'cache',
          title: 'Cache Components 도입',
          era: '정적/동적 판단보다 dynamic runtime 안에서 명시적으로 캐시되는 scope를 읽는 감각이 중요해졌습니다.',
          doc: 'Cache Components',
          concepts: ['cacheComponents', 'use cache', 'cacheLife', 'cacheTag'],
          codeAxis: ['app-render', 'dynamic-rendering', 'cache-signal', 'stale-time'],
          caution: '기존 fetch cache와 route segment config 중심 설명만으로는 부족할 수 있습니다.',
          tone: 'emerald',
        },
        {
          id: 'turbopack',
          title: 'Turbopack 중요도 상승',
          era: '개발 서버와 빌드에서 module graph, invalidation, incremental build 흐름을 읽는 비중이 커졌습니다.',
          doc: 'Turbopack 문서',
          concepts: ['module graph', 'incremental build', 'HMR', 'invalidation', 'bundle'],
          codeAxis: ['build', 'dev server', 'turbopack', 'manifest'],
          caution: 'Webpack 중심 설명만으로는 최신 Next.js 빌드 흐름을 모두 설명하기 어렵습니다.',
          tone: 'cyan',
        },
      ],
    },
    axes: {
      eyebrow: '02 · four axes',
      title: 'Next.js 16 코드는 4개 축으로 나눠 읽습니다',
      description:
        '모든 파일을 순서대로 읽을 필요는 없습니다. 먼저 App Router, RSC Payload, Cache Components, Build/Turbopack이라는 네 개의 축을 잡으면 됩니다.',
      labels: {
        surface: '표면 API',
        internal: '내부 개념',
        path: '읽을 경로',
        outdated: '주의할 오래된 자료',
      },
      cards: [
        {
          id: 'app-router',
          title: 'App Router',
          summary:
            'segment tree, layout, page, loading, error를 중심으로 라우팅과 렌더링 경계를 읽습니다.',
          surfaceApi: ['app/page.tsx', 'layout.tsx', 'loading.tsx', 'error.tsx', 'route segment'],
          internalConcepts: [
            'segment tree',
            'loader tree',
            'component tree',
            'nested layout',
            'boundary',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          outdated:
            'Pages Router의 page 단위 사고만으로는 layout 유지와 partial rendering을 설명하기 어렵습니다.',
          tone: 'blue',
        },
        {
          id: 'rsc',
          title: 'RSC Payload',
          summary:
            '서버에서 렌더링된 React Server Components 결과가 클라이언트 라우터와 어떻게 연결되는지 읽습니다.',
          surfaceApi: [
            'Server Component',
            'Client Component',
            'Suspense',
            'streaming',
            'next/link navigation',
          ],
          internalConcepts: [
            'Flight response',
            'RSC Payload',
            'router state patch',
            'client merge',
            'hydration boundary',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/use-flight-response.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
          outdated:
            '클라이언트 렌더링 또는 SSR HTML만으로 설명하는 자료는 RSC Payload 흐름을 놓칠 수 있습니다.',
          tone: 'cyan',
        },
        {
          id: 'cache',
          title: 'Cache Components',
          summary:
            'Next.js 16에서는 명시적 캐시 scope, cacheLife, cacheTag, revalidation 흐름을 함께 읽어야 합니다.',
          surfaceApi: [
            'cacheComponents',
            "'use cache'",
            'cacheLife',
            'cacheTag',
            'revalidateTag',
            'revalidatePath',
          ],
          internalConcepts: [
            'cached scope',
            'dynamic rendering boundary',
            'cache signal',
            'stale time',
            'tag-based revalidation',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          outdated:
            'fetch cache, revalidate, static/dynamic 판단만으로는 Next.js 16의 캐싱 모델을 충분히 설명하기 어렵습니다.',
          tone: 'emerald',
        },
        {
          id: 'build',
          title: 'Build / Turbopack',
          summary:
            'app 디렉터리 파일이 entry, manifest, server/client bundle, module graph로 연결되는 과정을 읽습니다.',
          surfaceApi: ['next build', 'next dev', 'next.config', 'Turbopack', 'app directory'],
          internalConcepts: [
            'entry',
            'manifest',
            'server bundle',
            'client bundle',
            'module graph',
            'invalidation',
            'HMR',
          ],
          readingPaths: [
            'packages/next/src/build/index.ts',
            'packages/next/src/build/webpack-config.ts',
            'packages/next/src/build/webpack/loaders/next-app-loader',
            'turbopack 관련 패키지와 crates',
          ],
          outdated:
            'Webpack 중심으로만 설명된 자료는 Turbopack 기반 개발 서버와 빌드 흐름을 충분히 반영하지 못할 수 있습니다.',
          tone: 'violet',
        },
      ],
    },
    cache: {
      eyebrow: '03 · cache components',
      title: 'Cache Components는 캐싱을 읽는 감각을 바꿉니다',
      description:
        'Next.js 16에서는 "이 페이지가 static인가 dynamic인가?"만 보는 것이 아니라, 동적 렌더링 흐름 안에서 어떤 함수와 컴포넌트가 명시적으로 캐시되는지 봐야 합니다.',
      keywordLabel: '코드 키워드',
      left: {
        title: '기존 감각',
        items: ['fetch cache', 'route segment config', 'revalidate', 'static / dynamic 판단'],
        note: '기존에는 fetch 옵션, segment config, revalidate 값을 중심으로 캐시 동작을 이해하는 경우가 많았습니다.',
      },
      right: {
        title: 'Next.js 16 감각',
        items: [
          'cacheComponents: true',
          "'use cache'",
          'cacheLife',
          'cacheTag',
          'runtime dynamic + explicit cached scope',
        ],
        note: 'Next.js 16에서는 동적 렌더링을 기본으로 보면서, 명시적으로 캐시되는 함수와 컴포넌트의 scope를 추적하는 감각이 중요합니다.',
      },
      toggles: [
        {
          id: 'none',
          tab: '캐시 없음',
          title: '매 요청 fresh data',
          description: '캐시 scope가 없으면 요청마다 새 데이터를 읽는 흐름으로 이해합니다.',
          keywords: ['dynamic rendering', 'request time data'],
          tone: 'sky',
        },
        {
          id: 'use-cache',
          tab: "'use cache'",
          title: '캐시 가능한 함수 / 컴포넌트',
          description:
            "'use cache'는 함수나 컴포넌트 반환값을 캐시 가능한 단위로 만들기 위한 명시적 경계입니다.",
          keywords: ['cached scope', 'use cache'],
          tone: 'blue',
        },
        {
          id: 'cache-life',
          tab: "cacheLife('hours')",
          title: '캐시 수명 설정',
          description: 'cacheLife는 캐시된 결과를 어느 정도 수명으로 유지할지 정하는 기준입니다.',
          keywords: ['cache life', 'stale time'],
          tone: 'violet',
        },
        {
          id: 'cache-tag',
          tab: "cacheTag('posts')",
          title: '태그 기반 무효화',
          description:
            'cacheTag는 캐시된 결과를 태그로 묶고, 이후 revalidation에서 해당 태그를 기준으로 무효화할 수 있게 합니다.',
          keywords: ['cache tag', 'revalidateTag', 'tag-based revalidation'],
          tone: 'emerald',
        },
      ],
    },
    checklist: {
      eyebrow: '04 · check the basis',
      title: '오래된 자료는 버전 기준을 먼저 확인해야 합니다',
      description:
        '과거 자료는 여전히 도움이 됩니다. 다만 어떤 라우터, 어떤 캐싱 모델, 어떤 빌드 도구를 기준으로 설명하는지 먼저 확인해야 합니다.',
      correctionLabel: '보정',
      items: [
        {
          id: 'pages',
          question: 'Pages Router 중심 자료인가?',
          correction:
            'App Router의 segment, layout, loading, error boundary 흐름과 다를 수 있습니다.',
        },
        {
          id: 'gssp',
          question: 'getServerSideProps 중심 자료인가?',
          correction:
            'App Router에서는 Server Component, route handler, Server Action 흐름으로 다시 매핑해야 합니다.',
        },
        {
          id: 'old-cache',
          question: 'App Router 이전 캐싱 모델인가?',
          correction:
            'fetch cache나 revalidate 설명만으로 Cache Components 흐름을 설명하지 못할 수 있습니다.',
        },
        {
          id: 'next15',
          question: 'Next 15 기준 설명인가?',
          correction:
            'Next.js 16의 cacheComponents, Turbopack, App Router 실행 흐름과 차이를 확인해야 합니다.',
        },
        {
          id: 'canary',
          question: 'canary와 stable 차이가 있는가?',
          correction:
            'GitHub canary branch의 코드가 현재 stable 문서와 다를 수 있으므로 기준을 명시해야 합니다.',
        },
        {
          id: 'paths',
          question: '문서와 코드 경로가 달라졌는가?',
          correction:
            'Next.js 저장소는 디렉터리와 파일 구조가 바뀔 수 있으므로 최신 경로를 확인해야 합니다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: App Router 이후 Next.js가 복잡해진 이유',
      description:
        'Next.js 16 기준으로 읽어야 하는 이유를 알았다면, 이제 App Router가 왜 단순 URL 라우터가 아니라 segment tree와 RSC Payload를 공유하는 런타임인지 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/app-router-complexity',
    },
  },
  en: {
    hero: {
      badge: 'Next.js 16 source reading baseline',
      title: { lead: 'Why read from the', accent: 'Next.js 16 codebase' },
      highlight: [
        'Not because it is the latest version,',
        'but because the internal axes to read shifted.',
      ],
      description: [
        'In Next.js 16 you read the App Router execution flow',
        'together with the Cache Components caching model.',
        'Routing, server rendering, RSC Payload, cache, and build',
        'connect as one framework execution flow.',
      ],
      primaryCta: 'See the four reading axes',
      secondaryCta: 'See the Cache Components flow',
      keywords: [
        {
          id: 'app-router',
          title: 'App Router',
          description:
            'Read by segment tree, layout, loading, and error boundary — not by page units.',
          keyword: 'segment tree',
          tone: 'blue',
        },
        {
          id: 'cache',
          title: 'Cache Components',
          description:
            'Read explicit cached scope and revalidation, not auto static/dynamic instinct.',
          keyword: 'cacheComponents',
          tone: 'emerald',
        },
        {
          id: 'action',
          title: 'Server Actions',
          description:
            'form submit, action request, redirect, and revalidation connect on the server.',
          keyword: 'action-handler',
          tone: 'violet',
        },
        {
          id: 'turbopack',
          title: 'Turbopack',
          description:
            'Read module graph, invalidation, and bundle flow across build and dev server.',
          keyword: 'module graph',
          tone: 'cyan',
        },
      ],
    },
    timeline: {
      eyebrow: '01 · version shift',
      title: 'The baseline for reading Next.js kept shifting',
      description:
        'It does not mean older material was wrong. It means the era of Next.js it described may differ from the baseline we must read today.',
      listLabel: "Pick a stage to see that era's reading baseline",
      panel: {
        era: 'Era instinct',
        doc: 'Docs to read',
        concepts: 'Concepts to read',
        codeAxis: 'Code axis to read',
        caution: 'Caution',
      },
      steps: [
        {
          id: 'pages',
          title: 'Pages Router era',
          era: 'Requests and pages were connected via page files and getServerSideProps / getStaticProps.',
          doc: 'Pages Router docs',
          concepts: ['pages directory', 'getServerSideProps', 'getStaticProps', 'API Routes'],
          codeAxis: ['server', 'route matching', 'pages render'],
          caution: 'Many concepts do not carry over directly into App Router learning.',
          tone: 'sky',
        },
        {
          id: 'app-router',
          title: 'App Router arrives',
          era: 'app directory, layout, page, loading, error began connecting per segment.',
          doc: 'App Router docs',
          concepts: ['route segment', 'layout', 'page', 'loading', 'error', 'nested layout'],
          codeAxis: ['app-render', 'create-component-tree', 'loader tree'],
          caution: 'Thinking of URL-to-page as a 1:1 mapping is not enough.',
          tone: 'blue',
        },
        {
          id: 'rsc',
          title: 'React Server Components',
          era: 'The boundary between server-run and client-hydrated components became important.',
          doc: 'Server Components docs',
          concepts: ['RSC Payload', 'Flight response', 'Client Component boundary'],
          codeAxis: ['app-render', 'use-flight-response', 'client router'],
          caution: 'Looking only at React rendering or only at Next routing hides the whole flow.',
          tone: 'violet',
        },
        {
          id: 'actions',
          title: 'Server Actions expand',
          era: 'form submit and mutation connect to server function calls, redirect, and revalidation.',
          doc: 'Server Actions / Updating Data',
          concepts: [
            'Server Functions',
            'action request',
            'form submit',
            'revalidatePath',
            'redirect',
          ],
          codeAxis: ['action-handler', 'app-render', 'csrf-protection', 'encryption'],
          caution: 'Treating it as a plain API route call misses the post-action UI update flow.',
          tone: 'indigo',
        },
        {
          id: 'cache',
          title: 'Cache Components arrive',
          era: 'Reading explicitly cached scopes inside a dynamic runtime matters more than static/dynamic judgment.',
          doc: 'Cache Components',
          concepts: ['cacheComponents', 'use cache', 'cacheLife', 'cacheTag'],
          codeAxis: ['app-render', 'dynamic-rendering', 'cache-signal', 'stale-time'],
          caution: 'Explanations centered on fetch cache and route segment config may fall short.',
          tone: 'emerald',
        },
        {
          id: 'turbopack',
          title: 'Turbopack rises',
          era: 'module graph, invalidation, and incremental build flow weigh more in dev server and build.',
          doc: 'Turbopack docs',
          concepts: ['module graph', 'incremental build', 'HMR', 'invalidation', 'bundle'],
          codeAxis: ['build', 'dev server', 'turbopack', 'manifest'],
          caution: 'Webpack-only explanations cannot fully describe the latest Next.js build flow.',
          tone: 'cyan',
        },
      ],
    },
    axes: {
      eyebrow: '02 · four axes',
      title: 'Read the Next.js 16 codebase along four axes',
      description:
        'You need not read every file in order. First grab the four axes: App Router, RSC Payload, Cache Components, and Build/Turbopack.',
      labels: {
        surface: 'Surface API',
        internal: 'Internal concepts',
        path: 'Reading paths',
        outdated: 'Outdated material caveat',
      },
      cards: [
        {
          id: 'app-router',
          title: 'App Router',
          summary:
            'Read routing and render boundaries via segment tree, layout, page, loading, error.',
          surfaceApi: ['app/page.tsx', 'layout.tsx', 'loading.tsx', 'error.tsx', 'route segment'],
          internalConcepts: [
            'segment tree',
            'loader tree',
            'component tree',
            'nested layout',
            'boundary',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          outdated:
            'Page-unit thinking from Pages Router struggles to explain layout preservation and partial rendering.',
          tone: 'blue',
        },
        {
          id: 'rsc',
          title: 'RSC Payload',
          summary: 'Read how server-rendered RSC results connect to the client router.',
          surfaceApi: [
            'Server Component',
            'Client Component',
            'Suspense',
            'streaming',
            'next/link navigation',
          ],
          internalConcepts: [
            'Flight response',
            'RSC Payload',
            'router state patch',
            'client merge',
            'hydration boundary',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/use-flight-response.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
          outdated:
            'Material explained only via client rendering or SSR HTML can miss the RSC Payload flow.',
          tone: 'cyan',
        },
        {
          id: 'cache',
          title: 'Cache Components',
          summary:
            'In Next.js 16, read explicit cache scope, cacheLife, cacheTag, and revalidation together.',
          surfaceApi: [
            'cacheComponents',
            "'use cache'",
            'cacheLife',
            'cacheTag',
            'revalidateTag',
            'revalidatePath',
          ],
          internalConcepts: [
            'cached scope',
            'dynamic rendering boundary',
            'cache signal',
            'stale time',
            'tag-based revalidation',
          ],
          readingPaths: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          outdated:
            'fetch cache, revalidate, and static/dynamic judgment alone cannot fully explain the Next.js 16 cache model.',
          tone: 'emerald',
        },
        {
          id: 'build',
          title: 'Build / Turbopack',
          summary:
            'Read how app directory files become entries, manifests, server/client bundles, and a module graph.',
          surfaceApi: ['next build', 'next dev', 'next.config', 'Turbopack', 'app directory'],
          internalConcepts: [
            'entry',
            'manifest',
            'server bundle',
            'client bundle',
            'module graph',
            'invalidation',
            'HMR',
          ],
          readingPaths: [
            'packages/next/src/build/index.ts',
            'packages/next/src/build/webpack-config.ts',
            'packages/next/src/build/webpack/loaders/next-app-loader',
            'turbopack packages and crates',
          ],
          outdated:
            'Webpack-only material may not fully reflect the Turbopack-based dev server and build flow.',
          tone: 'violet',
        },
      ],
    },
    cache: {
      eyebrow: '03 · cache components',
      title: 'Cache Components change how you read caching',
      description:
        'In Next.js 16 you look beyond "is this page static or dynamic?" to which functions and components are explicitly cached inside the dynamic render flow.',
      keywordLabel: 'Code keywords',
      left: {
        title: 'Old instinct',
        items: ['fetch cache', 'route segment config', 'revalidate', 'static / dynamic judgment'],
        note: 'Previously, cache behavior was often understood via fetch options, segment config, and revalidate values.',
      },
      right: {
        title: 'Next.js 16 instinct',
        items: [
          'cacheComponents: true',
          "'use cache'",
          'cacheLife',
          'cacheTag',
          'runtime dynamic + explicit cached scope',
        ],
        note: 'In Next.js 16, treat dynamic rendering as the default and trace the scope of explicitly cached functions and components.',
      },
      toggles: [
        {
          id: 'none',
          tab: 'No cache',
          title: 'Fresh data per request',
          description: 'With no cache scope, understand it as reading new data on every request.',
          keywords: ['dynamic rendering', 'request time data'],
          tone: 'sky',
        },
        {
          id: 'use-cache',
          tab: "'use cache'",
          title: 'Cacheable function / component',
          description:
            "'use cache' is the explicit boundary that makes a function or component return value a cacheable unit.",
          keywords: ['cached scope', 'use cache'],
          tone: 'blue',
        },
        {
          id: 'cache-life',
          tab: "cacheLife('hours')",
          title: 'Set cache lifetime',
          description: 'cacheLife defines how long a cached result is kept.',
          keywords: ['cache life', 'stale time'],
          tone: 'violet',
        },
        {
          id: 'cache-tag',
          tab: "cacheTag('posts')",
          title: 'Tag-based invalidation',
          description:
            'cacheTag groups cached results by tag so revalidation can invalidate them by that tag.',
          keywords: ['cache tag', 'revalidateTag', 'tag-based revalidation'],
          tone: 'emerald',
        },
      ],
    },
    checklist: {
      eyebrow: '04 · check the basis',
      title: 'Check the version baseline of older material first',
      description:
        'Older material still helps. But first check which router, which caching model, and which build tool it is based on.',
      correctionLabel: 'Adjust',
      items: [
        {
          id: 'pages',
          question: 'Is it Pages Router-centric?',
          correction:
            'It may differ from the App Router segment, layout, loading, error boundary flow.',
        },
        {
          id: 'gssp',
          question: 'Is it getServerSideProps-centric?',
          correction:
            'In App Router, remap it to Server Component, route handler, and Server Action flows.',
        },
        {
          id: 'old-cache',
          question: 'Is it a pre-App-Router cache model?',
          correction: 'fetch cache or revalidate alone may not explain the Cache Components flow.',
        },
        {
          id: 'next15',
          question: 'Is it based on Next 15?',
          correction:
            'Check differences from Next.js 16 cacheComponents, Turbopack, and App Router execution.',
        },
        {
          id: 'canary',
          question: 'Is there a canary vs stable gap?',
          correction:
            'GitHub canary code may differ from current stable docs, so state your baseline.',
        },
        {
          id: 'paths',
          question: 'Have docs and code paths changed?',
          correction:
            'The Next.js repo can restructure directories and files, so verify the latest paths.',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Why Next.js Got Complex After App Router',
      description:
        'Now that you know why to read from Next.js 16, see why App Router is not a plain URL router but a runtime sharing the segment tree and RSC Payload.',
      cta: 'Go to the next page',
      href: '/app-router-complexity',
    },
  },
};
