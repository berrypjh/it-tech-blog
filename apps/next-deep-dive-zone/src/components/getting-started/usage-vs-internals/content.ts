import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { FileIconName, TransformerIconName, UsageIconName } from './icons';

export type { ToneKey };

export type InternalFlowStepId =
  | 'file-convention'
  | 'route-segment'
  | 'loader-tree'
  | 'component-tree'
  | 'app-render'
  | 'rsc-payload'
  | 'router-state-patch';

export type InternalFlowStep = {
  id: InternalFlowStepId;
  label: string;
  tone: ToneKey;
};

export type UsageStep = {
  number: string;
  title: string;
  learn: string;
  result: string;
  icon: UsageIconName;
  tone: ToneKey;
};

export type FileConventionCard = {
  id: 'page' | 'layout' | 'loading' | 'error' | 'route';
  name: string;
  role: string;
  internal: string;
  /** 메인 흐름도에서 강조할 단계 id */
  highlight: InternalFlowStepId[];
  /** 선택 패널에 화살표로 보여줄 개념 체인 */
  chain: string[];
  entries: string[];
  icon: FileIconName;
  tone: ToneKey;
};

export type TransformerExample = {
  id: string;
  button: string;
  usageQuestion: string;
  internalQuestion: string;
  entries: string[];
  icon: TransformerIconName;
  tone: ToneKey;
};

export type ChecklistItem = { id: string; text: string };

export type UsageVsInternalsContent = {
  hero: {
    badge: string;
    title: { lead: string; accent: string };
    subheading: string[];
    description: string[];
    code: { caption: string; code: string; language: string; note: string };
    usage: { title: string; description: string; questions: string[]; pill: string };
    internals: { title: string; description: string; questions: string[]; pill: string };
  };
  usageFlow: {
    eyebrow: string;
    title: string;
    description: string;
    learnLabel: string;
    resultLabel: string;
    steps: UsageStep[];
  };
  internalFlow: {
    eyebrow: string;
    title: string;
    description: string;
    flowLabel: string;
    fileLabel: string;
    flow: InternalFlowStep[];
    panel: { role: string; internal: string; chain: string; entries: string };
    files: FileConventionCard[];
  };
  transformer: {
    eyebrow: string;
    title: string;
    description: string;
    inputLabel: string;
    placeholder: string;
    panel: { usage: string; internal: string; entries: string };
    examples: TransformerExample[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    hint: string;
    items: ChecklistItem[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

const heroCode = `// app/blog/[slug]/page.tsx
export default async function Page({ params }) {
  const post = await getPost(params.slug);

  return <Article post={post} />;
}`;

export const usageVsInternalsContent: Record<Locale, UsageVsInternalsContent> = {
  ko: {
    hero: {
      badge: 'Next.js 소스코드 학습 가이드',
      title: { lead: '같은 코드,', accent: '다른 질문' },
      subheading: ['Next.js를 쓰는 법과', 'Next.js 내부를 읽는 법은 다릅니다.'],
      description: [
        '겉으로는 단순한 페이지 컴포넌트지만,',
        '내부에서는 파일 규칙 해석, route segment 생성, loader tree 구성,',
        '서버 렌더링, RSC Payload 생성, 클라이언트 라우터 병합이 이어집니다.',
      ],
      code: {
        caption: 'app/blog/[slug]/page.tsx',
        code: heroCode,
        language: 'TSX',
        note: '하나의 page.tsx 파일도 사용법 관점과 내부 구조 관점에서는 완전히 다르게 읽힙니다.',
      },
      usage: {
        title: '사용법 관점',
        description: '무엇을 만들고 어떻게 작성할지에 집중합니다.',
        questions: [
          'params를 어떻게 받는가?',
          '데이터를 어떻게 가져오는가?',
          '페이지 컴포넌트를 어떻게 작성하는가?',
          'loading.tsx를 어디에 추가하는가?',
        ],
        pill: '결과를 만드는 법',
      },
      internals: {
        title: '내부 구조 관점',
        description: '그 결과가 프레임워크 안에서 어떻게 실행되는지 읽습니다.',
        questions: [
          '[slug]는 어떻게 dynamic segment가 되는가?',
          'page.tsx는 어떻게 loader tree에 들어가는가?',
          '서버에서 어떻게 RSC Payload가 되는가?',
          '클라이언트 라우터는 payload를 어떻게 병합하는가?',
        ],
        pill: '실행 경로를 읽는 법',
      },
    },
    usageFlow: {
      eyebrow: '01 · build the result',
      title: '사용법 학습은 결과를 만드는 법을 배웁니다',
      description:
        '공식 문서와 튜토리얼은 기능을 어떻게 사용하는지 알려줍니다. 이 관점은 실제 앱을 빠르게 만드는 데 꼭 필요합니다.',
      learnLabel: '문서에서 배우는 것',
      resultLabel: '사용자가 얻는 결과',
      steps: [
        {
          number: '01',
          title: 'app/page.tsx 만들기',
          learn: 'App Router에서 페이지 파일을 만드는 방법',
          result: 'URL에 대응되는 화면이 생긴다.',
          icon: 'file-plus',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'layout.tsx 추가하기',
          learn: '여러 페이지가 공유하는 UI를 작성하는 방법',
          result: '공통 레이아웃이 유지된다.',
          icon: 'layout',
          tone: 'blue',
        },
        {
          number: '03',
          title: 'loading.tsx 추가하기',
          learn: '로딩 UI를 segment 단위로 추가하는 방법',
          result: '데이터가 준비되기 전 fallback UI가 보인다.',
          icon: 'loading',
          tone: 'violet',
        },
        {
          number: '04',
          title: 'fetch / cache 옵션 사용하기',
          learn: '데이터 요청과 캐시 정책을 설정하는 방법',
          result: '데이터 갱신과 캐시 동작을 제어한다.',
          icon: 'cache',
          tone: 'cyan',
        },
        {
          number: '05',
          title: 'Server Action 작성하기',
          learn: '서버에서 실행되는 action을 form 또는 mutation에 연결하는 방법',
          result: '클라이언트에서 서버 작업을 호출할 수 있다.',
          icon: 'action',
          tone: 'teal',
        },
        {
          number: '06',
          title: '배포 결과 확인하기',
          learn: '빌드와 배포 결과를 확인하는 방법',
          result: '사용자가 접근 가능한 애플리케이션이 된다.',
          icon: 'deploy',
          tone: 'emerald',
        },
      ],
    },
    internalFlow: {
      eyebrow: '02 · read the path',
      title: '내부 구조 학습은 실행 경로를 읽습니다',
      description:
        '같은 기능도 내부 구조 관점에서는 파일 규칙이 어떻게 해석되고, 서버와 클라이언트가 어떤 데이터를 주고받는지 추적합니다.',
      flowLabel: '내부 실행 흐름',
      fileLabel: '파일을 선택해 흐름을 따라가세요',
      flow: [
        { id: 'file-convention', label: 'file convention', tone: 'sky' },
        { id: 'route-segment', label: 'route segment', tone: 'blue' },
        { id: 'loader-tree', label: 'loader tree', tone: 'violet' },
        { id: 'component-tree', label: 'component tree', tone: 'cyan' },
        { id: 'app-render', label: 'app-render', tone: 'indigo' },
        { id: 'rsc-payload', label: 'RSC Payload', tone: 'teal' },
        { id: 'router-state-patch', label: 'router state patch', tone: 'emerald' },
      ],
      panel: {
        role: '표면 역할',
        internal: '내부 연결',
        chain: '내부 흐름',
        entries: '읽을 코드 입구',
      },
      files: [
        {
          id: 'page',
          name: 'page.tsx',
          role: 'URL에 대응되는 페이지 컴포넌트',
          internal: 'route segment의 leaf page로 연결됩니다.',
          highlight: ['file-convention', 'route-segment', 'loader-tree', 'component-tree'],
          chain: ['page.tsx', 'leaf page', 'create-component-tree'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/build/webpack/loaders/next-app-loader',
          ],
          icon: 'page',
          tone: 'blue',
        },
        {
          id: 'layout',
          name: 'layout.tsx',
          role: '여러 페이지가 공유하는 레이아웃',
          internal: 'segment tree에서 유지되는 layout boundary로 연결됩니다.',
          highlight: [
            'file-convention',
            'route-segment',
            'loader-tree',
            'component-tree',
            'router-state-patch',
          ],
          chain: ['layout.tsx', 'layout boundary', 'layout-router'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          icon: 'layout',
          tone: 'violet',
        },
        {
          id: 'loading',
          name: 'loading.tsx',
          role: 'segment 단위 로딩 UI',
          internal: 'loading boundary와 Suspense fallback 흐름에 반영됩니다.',
          highlight: ['file-convention', 'loader-tree', 'component-tree', 'app-render'],
          chain: [
            'loading.tsx',
            'loading boundary',
            'Suspense fallback',
            'has-loading-component-in-tree.tsx',
          ],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
          icon: 'loading',
          tone: 'sky',
        },
        {
          id: 'error',
          name: 'error.tsx',
          role: 'segment 단위 에러 UI',
          internal: 'error boundary와 client component boundary 흐름에 연결됩니다.',
          highlight: ['file-convention', 'route-segment', 'component-tree', 'router-state-patch'],
          chain: ['error.tsx', 'error boundary', 'error-boundary.tsx'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/error-boundary.tsx',
          ],
          icon: 'error',
          tone: 'amber',
        },
        {
          id: 'route',
          name: 'route.ts',
          role: 'Route Handler',
          internal: '페이지 렌더링이 아니라 request handling 흐름으로 연결됩니다.',
          highlight: ['file-convention'],
          chain: ['route.ts', 'route matching', 'request handling'],
          entries: [
            'packages/next/src/server/base-server.ts',
            'packages/next/src/server/route-modules/app-route/module.ts',
          ],
          icon: 'route',
          tone: 'emerald',
        },
      ],
    },
    transformer: {
      eyebrow: '03 · transform the question',
      title: '사용법 질문을 내부 구조 질문으로 바꾸기',
      description:
        '소스코드 독해는 질문을 바꾸는 순간 시작됩니다. "어떻게 쓰나요?"에서 "내부에서 어떤 경로로 실행되나요?"로 이동해야 합니다.',
      inputLabel: '내가 궁금한 사용법 질문을 선택하세요.',
      placeholder: '예시 질문을 선택하면 내부 구조 질문으로 변환됩니다',
      panel: { usage: '사용법 질문', internal: '내부 구조 질문', entries: '읽을 코드 입구' },
      examples: [
        {
          id: 'loading',
          button: 'loading.tsx는 어떻게 쓰나요?',
          usageQuestion: 'loading.tsx는 어떻게 쓰나요?',
          internalQuestion:
            'loading.tsx 파일은 어떤 segment의 loading boundary로 해석되고, loader tree와 component tree에 어떻게 반영되나요?',
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
          icon: 'loading',
          tone: 'sky',
        },
        {
          id: 'router',
          button: 'router.push는 어떻게 동작하나요?',
          usageQuestion: 'router.push는 어떻게 동작하나요?',
          internalQuestion:
            'client navigation은 어떤 router action으로 변환되고, router reducer는 서버 응답을 어떻게 state patch로 병합하나요?',
          entries: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          icon: 'router',
          tone: 'cyan',
        },
        {
          id: 'action',
          button: 'Server Action은 어떻게 호출되나요?',
          usageQuestion: 'Server Action은 어떻게 호출되나요?',
          internalQuestion:
            'form action submit은 어떤 POST 요청으로 바뀌고, action-handler.ts에서 어떻게 해석되나요?',
          entries: [
            'packages/next/src/server/app-render/action-handler.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          icon: 'action',
          tone: 'violet',
        },
        {
          id: 'cache',
          button: 'cacheTag는 언제 쓰나요?',
          usageQuestion: 'cacheTag는 언제 쓰나요?',
          internalQuestion:
            '캐시 태그는 어떤 cached scope에 연결되고, revalidation 과정에서 어떤 데이터가 무효화되나요?',
          entries: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          icon: 'cache',
          tone: 'emerald',
        },
      ],
    },
    checklist: {
      eyebrow: '04 · self check',
      title: '지금 내가 찾는 것은 사용법인가, 내부 구조인가?',
      hint: '체크하며 지금 던지는 질문이 어느 쪽인지 분류해 보세요.',
      items: [
        { id: 'usage', text: '나는 지금 사용법을 찾고 있는가?' },
        { id: 'internal', text: '나는 내부 실행 흐름을 찾고 있는가?' },
        { id: 'layer', text: '이 기능은 server / client / build 중 어디에 가까운가?' },
        { id: 'axis', text: '이 기능은 App Router / Cache / Action / Build 중 어느 축인가?' },
        { id: 'response', text: '이 기능은 HTML 응답과 관련 있는가, RSC Payload와 관련 있는가?' },
        { id: 'source', text: '이 설명은 stable 문서 기준인가, canary 구현 기준인가?' },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: Next.js 16 코드를 기준으로 읽는 이유',
      description:
        '같은 코드를 두 관점으로 읽는 차이를 알았다면, 이제 왜 Next.js 16 코드를 기준으로 읽어야 하는지 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/why-next-16',
    },
  },
  en: {
    hero: {
      badge: 'Next.js Source Reading Guide',
      title: { lead: 'Same code,', accent: 'different questions' },
      subheading: ['Using Next.js and reading its', 'internals are two different things.'],
      description: [
        'On the surface it is a simple page component,',
        'but inside: file convention parsing, route segment creation, loader tree,',
        'server rendering, RSC Payload, and client router merge all follow.',
      ],
      code: {
        caption: 'app/blog/[slug]/page.tsx',
        code: heroCode,
        language: 'TSX',
        note: 'Even one page.tsx reads completely differently through the usage lens vs the internals lens.',
      },
      usage: {
        title: 'Usage lens',
        description: 'Focus on what to build and how to write it.',
        questions: [
          'How do I receive params?',
          'How do I fetch data?',
          'How do I write the page component?',
          'Where do I add loading.tsx?',
        ],
        pill: 'How to build the result',
      },
      internals: {
        title: 'Internals lens',
        description: 'Read how that result actually runs inside the framework.',
        questions: [
          'How does [slug] become a dynamic segment?',
          'How does page.tsx enter the loader tree?',
          'How does it become an RSC Payload on the server?',
          'How does the client router merge the payload?',
        ],
        pill: 'How to read the execution path',
      },
    },
    usageFlow: {
      eyebrow: '01 · build the result',
      title: 'Usage learning teaches how to build the result',
      description:
        'Docs and tutorials show how to use features. This lens is essential for shipping real apps fast.',
      learnLabel: 'What the docs teach',
      resultLabel: 'What you get',
      steps: [
        {
          number: '01',
          title: 'Create app/page.tsx',
          learn: 'How to create a page file in the App Router',
          result: 'A screen mapped to a URL appears.',
          icon: 'file-plus',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'Add layout.tsx',
          learn: 'How to write UI shared across pages',
          result: 'A shared layout is preserved.',
          icon: 'layout',
          tone: 'blue',
        },
        {
          number: '03',
          title: 'Add loading.tsx',
          learn: 'How to add loading UI per segment',
          result: 'A fallback UI shows before data is ready.',
          icon: 'loading',
          tone: 'violet',
        },
        {
          number: '04',
          title: 'Use fetch / cache options',
          learn: 'How to set data requests and cache policy',
          result: 'You control data refresh and caching.',
          icon: 'cache',
          tone: 'cyan',
        },
        {
          number: '05',
          title: 'Write a Server Action',
          learn: 'How to wire a server action to a form or mutation',
          result: 'You can call server work from the client.',
          icon: 'action',
          tone: 'teal',
        },
        {
          number: '06',
          title: 'Verify the deployment',
          learn: 'How to check build and deploy results',
          result: 'It becomes an app users can reach.',
          icon: 'deploy',
          tone: 'emerald',
        },
      ],
    },
    internalFlow: {
      eyebrow: '02 · read the path',
      title: 'Internals learning reads the execution path',
      description:
        'For the same feature, the internals lens traces how file conventions are parsed and what data the server and client exchange.',
      flowLabel: 'Internal execution flow',
      fileLabel: 'Pick a file to follow the flow',
      flow: [
        { id: 'file-convention', label: 'file convention', tone: 'sky' },
        { id: 'route-segment', label: 'route segment', tone: 'blue' },
        { id: 'loader-tree', label: 'loader tree', tone: 'violet' },
        { id: 'component-tree', label: 'component tree', tone: 'cyan' },
        { id: 'app-render', label: 'app-render', tone: 'indigo' },
        { id: 'rsc-payload', label: 'RSC Payload', tone: 'teal' },
        { id: 'router-state-patch', label: 'router state patch', tone: 'emerald' },
      ],
      panel: {
        role: 'Surface role',
        internal: 'Internal connection',
        chain: 'Internal chain',
        entries: 'Code entry to read',
      },
      files: [
        {
          id: 'page',
          name: 'page.tsx',
          role: 'The page component mapped to a URL',
          internal: 'Connects as the leaf page of a route segment.',
          highlight: ['file-convention', 'route-segment', 'loader-tree', 'component-tree'],
          chain: ['page.tsx', 'leaf page', 'create-component-tree'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/build/webpack/loaders/next-app-loader',
          ],
          icon: 'page',
          tone: 'blue',
        },
        {
          id: 'layout',
          name: 'layout.tsx',
          role: 'A layout shared across pages',
          internal: 'Connects as a layout boundary preserved in the segment tree.',
          highlight: [
            'file-convention',
            'route-segment',
            'loader-tree',
            'component-tree',
            'router-state-patch',
          ],
          chain: ['layout.tsx', 'layout boundary', 'layout-router'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          icon: 'layout',
          tone: 'violet',
        },
        {
          id: 'loading',
          name: 'loading.tsx',
          role: 'Per-segment loading UI',
          internal: 'Reflected into the loading boundary and Suspense fallback flow.',
          highlight: ['file-convention', 'loader-tree', 'component-tree', 'app-render'],
          chain: [
            'loading.tsx',
            'loading boundary',
            'Suspense fallback',
            'has-loading-component-in-tree.tsx',
          ],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
          icon: 'loading',
          tone: 'sky',
        },
        {
          id: 'error',
          name: 'error.tsx',
          role: 'Per-segment error UI',
          internal: 'Connects to the error boundary and client component boundary flow.',
          highlight: ['file-convention', 'route-segment', 'component-tree', 'router-state-patch'],
          chain: ['error.tsx', 'error boundary', 'error-boundary.tsx'],
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/client/components/error-boundary.tsx',
          ],
          icon: 'error',
          tone: 'amber',
        },
        {
          id: 'route',
          name: 'route.ts',
          role: 'Route Handler',
          internal: 'Connects to request handling, not page rendering.',
          highlight: ['file-convention'],
          chain: ['route.ts', 'route matching', 'request handling'],
          entries: [
            'packages/next/src/server/base-server.ts',
            'packages/next/src/server/route-modules/app-route/module.ts',
          ],
          icon: 'route',
          tone: 'emerald',
        },
      ],
    },
    transformer: {
      eyebrow: '03 · transform the question',
      title: 'Turn a usage question into an internals question',
      description:
        'Source reading begins the moment you change the question — from "how do I use it?" to "what path does it run inside?"',
      inputLabel: 'Pick the usage question you are curious about.',
      placeholder: 'Pick an example question to transform it into an internals question',
      panel: {
        usage: 'Usage question',
        internal: 'Internals question',
        entries: 'Code entry to read',
      },
      examples: [
        {
          id: 'loading',
          button: 'How do I use loading.tsx?',
          usageQuestion: 'How do I use loading.tsx?',
          internalQuestion:
            "Which segment's loading boundary does loading.tsx parse into, and how is it reflected in the loader and component tree?",
          entries: [
            'packages/next/src/server/app-render/create-component-tree.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
          ],
          icon: 'loading',
          tone: 'sky',
        },
        {
          id: 'router',
          button: 'How does router.push work?',
          usageQuestion: 'How does router.push work?',
          internalQuestion:
            'Which router action does a client navigation become, and how does the router reducer merge the server response as a state patch?',
          entries: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
            'packages/next/src/client/components/layout-router.tsx',
          ],
          icon: 'router',
          tone: 'cyan',
        },
        {
          id: 'action',
          button: 'How is a Server Action called?',
          usageQuestion: 'How is a Server Action called?',
          internalQuestion:
            'Which POST request does a form action submit become, and how is it resolved in action-handler.ts?',
          entries: [
            'packages/next/src/server/app-render/action-handler.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          icon: 'action',
          tone: 'violet',
        },
        {
          id: 'cache',
          button: 'When do I use cacheTag?',
          usageQuestion: 'When do I use cacheTag?',
          internalQuestion:
            'Which cached scope does a cache tag connect to, and which data is invalidated during revalidation?',
          entries: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          icon: 'cache',
          tone: 'emerald',
        },
      ],
    },
    checklist: {
      eyebrow: '04 · self check',
      title: 'Am I looking for usage, or for internals?',
      hint: 'Check each one to classify which side your current question falls on.',
      items: [
        { id: 'usage', text: 'Am I looking for how to use it?' },
        { id: 'internal', text: 'Am I looking for the internal execution flow?' },
        { id: 'layer', text: 'Is this closer to server / client / build?' },
        { id: 'axis', text: 'Which axis is it — App Router / Cache / Action / Build?' },
        { id: 'response', text: 'Is it about the HTML response or the RSC Payload?' },
        { id: 'source', text: 'Is this based on stable docs or canary implementation?' },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Why Read with Next.js 16 as the Baseline',
      description:
        'Now that you can read one piece of code from two lenses, see why Next.js 16 is the right baseline to read from.',
      cta: 'Go to the next page',
      href: '/why-next-16',
    },
  },
};
