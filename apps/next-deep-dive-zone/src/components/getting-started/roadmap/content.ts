import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { AxisIconName, PersonaIconName } from './icons';

export type { ToneKey };

export type FlowStep = {
  id: AxisIconName;
  label: string;
  category: string;
  description: string;
  tone: ToneKey;
};

export type RoadmapStep = {
  number: string;
  title: string;
  difficulty: string;
  question: string;
  dirs: string[];
  mission: string;
  tone: ToneKey;
};

export type AxisCard = {
  id: AxisIconName;
  title: string;
  path?: string;
  keywords?: string[];
  files: string[];
  role: string;
  question: string;
  tone: ToneKey;
};

export type PersonaCard = {
  id: PersonaIconName;
  title: string;
  path: string[];
  reason: string;
  tone: ToneKey;
};

export type Mission = {
  id: string;
  title: string;
  action: string;
  files: string[];
  outcome: string;
  tone: ToneKey;
};

export type ChecklistItem = { id: string; text: string };

export type RoadmapContent = {
  hero: {
    badge: string;
    title: { lines: { accent: string; rest: string }[] };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    flow: {
      title: string;
      subtitle: string;
      categoryLabel: string;
      initialStepId: FlowStep['id'];
      steps: FlowStep[];
    };
  };
  roadmap: {
    eyebrow: string;
    title: string;
    description: string;
    currentLabel: string;
    currentPosition: string;
    labels: {
      difficulty: string;
      question: string;
      dirs: string;
      mission: string;
      stepLabel: string;
    };
    steps: RoadmapStep[];
  };
  axes: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { path: string; keywords: string; files: string; role: string; question: string };
    cards: AxisCard[];
  };
  personas: {
    eyebrow: string;
    title: string;
    description: string;
    reasonLabel: string;
    pathLabel: string;
    cards: PersonaCard[];
  };
  missions: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { action: string; files: string; outcome: string };
    items: Mission[];
  };
  checklist: {
    eyebrow: string;
    title: string;
    description: string;
    items: ChecklistItem[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

export const roadmapContent: Record<Locale, RoadmapContent> = {
  ko: {
    hero: {
      badge: 'Next.js 소스코드 학습 지도',
      title: {
        lines: [
          { accent: 'Next.js 소스코드', rest: '' },
          { accent: '탐구 로드맵', rest: '' },
        ],
      },
      highlight: [
        '모든 파일을 읽지 않습니다.',
        'server, app-render, client router, build, cache, actions라는 축으로 나눠 읽습니다.',
      ],
      description: [
        'Next.js 저장소는 거대하지만, 요청 처리, 서버 렌더링, 클라이언트 라우터,',
        '빌드, 캐시, 액션이라는 축으로 나누면 읽을 수 있습니다.',
        '이 로드맵은 시작하기 이후 전체 학습 여정을 단계별 질문과 코드 입구로 정리합니다.',
      ],
      primaryCta: '전체 로드맵 보기',
      secondaryCta: '코드 축 지도 보기',
      flow: {
        title: '6개 축으로 저장소를 읽습니다',
        subtitle: '단계를 선택해 각 축이 무엇을 담당하는지 확인하세요',
        categoryLabel: '경로',
        initialStepId: 'request',
        steps: [
          {
            id: 'request',
            label: 'Request Pipeline',
            category: 'server',
            description:
              '요청이 들어온 뒤 route matching과 render entry로 이어지는 상위 서버 흐름입니다.',
            tone: 'indigo',
          },
          {
            id: 'app-render',
            label: 'App Render',
            category: 'server/app-render',
            description:
              'App Router 서버 렌더링, loader tree, component tree, RSC payload 생성 흐름입니다.',
            tone: 'blue',
          },
          {
            id: 'client-router',
            label: 'Client Router',
            category: 'client/components',
            description:
              '클라이언트 내비게이션, layout 유지, router state patch, router cache 흐름입니다.',
            tone: 'cyan',
          },
          {
            id: 'build',
            label: 'Build',
            category: 'build',
            description:
              '라우트 분석, entry 생성, client/server bundle, manifest, loader pipeline 흐름입니다.',
            tone: 'violet',
          },
          {
            id: 'cache',
            label: 'Cache',
            category: 'cache components',
            description:
              '명시적 캐시 범위, revalidation, dynamic rendering boundary 판별 흐름입니다.',
            tone: 'emerald',
          },
          {
            id: 'actions',
            label: 'Actions',
            category: 'server actions',
            description:
              'Server Action POST 요청 처리, action 실행, redirect, revalidation, 보안 흐름입니다.',
            tone: 'amber',
          },
        ],
      },
    },
    roadmap: {
      eyebrow: '01 · full roadmap',
      title: '전체 학습 여정을 한눈에 봅니다',
      description:
        '이후 학습은 18단계로 진행됩니다. 각 단계는 핵심 질문, 읽을 디렉터리, 실습 미션으로 연결됩니다.',
      currentLabel: '현재 위치',
      currentPosition: '시작하기 8/8',
      labels: {
        difficulty: '난이도',
        question: '핵심 질문',
        dirs: '읽을 디렉터리 / 파일',
        mission: '실습 미션',
        stepLabel: '단계를 선택해 상세를 확인하세요',
      },
      steps: [
        {
          number: '01',
          title: '시작하기',
          difficulty: '입문',
          question: '왜 Next.js 소스코드를 읽어야 하는가?',
          dirs: ['시작하기 영역 전체'],
          mission: '사용법 질문과 내부 구조 질문을 구분해본다.',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'GitHub 저장소 구조',
          difficulty: '입문',
          question: 'Next.js 저장소에서 어떤 디렉터리가 핵심인가?',
          dirs: ['packages/next', 'packages/next/src', 'test', 'examples'],
          mission: 'packages/next/src 아래의 server, client, build 디렉터리를 찾는다.',
          tone: 'sky',
        },
        {
          number: '03',
          title: 'React 위에 Next.js가 더하는 것',
          difficulty: '입문',
          question: 'React가 제공하는 렌더링 모델 위에 Next.js는 무엇을 더하는가?',
          dirs: ['server/app-render', 'client/components'],
          mission: 'React 책임과 Next.js 책임을 5개씩 구분한다.',
          tone: 'sky',
        },
        {
          number: '04',
          title: 'CLI와 서버 초기화',
          difficulty: '초중급',
          question: 'next dev, next build, next start는 어떤 흐름으로 실행되는가?',
          dirs: ['packages/next/src/cli', 'packages/next/src/server'],
          mission: 'next dev가 서버 초기화 흐름으로 연결되는 파일을 찾는다.',
          tone: 'blue',
        },
        {
          number: '05',
          title: '파일 시스템 라우팅과 Route Tree',
          difficulty: '초중급',
          question: 'app 디렉터리의 파일 규칙은 어떻게 route tree로 변환되는가?',
          dirs: ['next-app-loader', 'server/app-render'],
          mission: 'page.tsx, layout.tsx, loading.tsx가 내부 tree에 연결되는 흐름을 찾는다.',
          tone: 'blue',
        },
        {
          number: '06',
          title: 'App Router 클라이언트 런타임',
          difficulty: '중급',
          question: '클라이언트 내비게이션은 어떤 router state 변경으로 이어지는가?',
          dirs: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
          mission: 'router.push 또는 Link 클릭이 navigate action으로 이어지는 흐름을 찾는다.',
          tone: 'violet',
        },
        {
          number: '07',
          title: 'Layout / Page / Segment Tree',
          difficulty: '중급',
          question: 'layout은 왜 유지되고 page만 교체되는가?',
          dirs: ['layout-router.tsx', 'create-flight-router-state-from-loader-tree.ts'],
          mission: '/dashboard/settings/profile 이동 시 유지/교체되는 segment를 구분한다.',
          tone: 'violet',
        },
        {
          number: '08',
          title: 'Server Components와 RSC Payload',
          difficulty: '중급',
          question: '서버에서 실행된 컴포넌트 결과는 어떻게 클라이언트로 전달되는가?',
          dirs: ['app-render.tsx', 'use-flight-response.tsx'],
          mission: 'HTML 응답과 RSC Payload의 역할을 구분한다.',
          tone: 'violet',
        },
        {
          number: '09',
          title: '서버 렌더링과 app-render',
          difficulty: '중급',
          question: '요청이 app-render로 들어오면 어떤 렌더링 응답이 만들어지는가?',
          dirs: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          mission: 'app-render가 loader tree와 component tree를 어떻게 사용하는지 확인한다.',
          tone: 'violet',
        },
        {
          number: '10',
          title: '클라이언트 내비게이션과 Router Cache',
          difficulty: '중상급',
          question: 'Link 이동은 왜 전체 새로고침처럼 동작하지 않는가?',
          dirs: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          mission: 'RSC payload가 client router state에 병합되는 흐름을 찾는다.',
          tone: 'indigo',
        },
        {
          number: '11',
          title: 'Cache Components / Revalidation',
          difficulty: '중상급',
          question: 'Next.js 16의 캐싱 모델은 어떻게 명시적 cached scope를 만드는가?',
          dirs: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts', 'server/use-cache'],
          mission: 'cacheTag와 revalidation 흐름을 연결해본다.',
          tone: 'indigo',
        },
        {
          number: '12',
          title: 'Server Actions',
          difficulty: '중상급',
          question: 'form action submit은 어떤 POST 요청 처리와 action 실행으로 이어지는가?',
          dirs: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          mission: 'action-handler.ts와 action-handler.test.ts를 함께 열어본다.',
          tone: 'indigo',
        },
        {
          number: '13',
          title: 'Build Pipeline',
          difficulty: '고급',
          question: 'Next.js는 app/pages 라우트를 어떻게 빌드 entry와 manifest로 바꾸는가?',
          dirs: [
            'packages/next/src/build/index.ts',
            'packages/next/src/build/webpack-config.ts',
            'next-app-loader',
          ],
          mission: 'next-app-loader가 app 디렉터리를 build entry로 바꾸는 흐름을 확인한다.',
          tone: 'amber',
        },
        {
          number: '14',
          title: 'Turbopack',
          difficulty: '고급',
          question: 'Turbopack은 개발 서버와 빌드 흐름에서 어떤 역할을 하는가?',
          dirs: ['turbopack 관련 packages', 'crates'],
          mission: 'Webpack 경로와 Turbopack 경로가 나뉘는 지점을 찾는다.',
          tone: 'amber',
        },
        {
          number: '15',
          title: 'Error / Redirect / Metadata',
          difficulty: '중상급',
          question: 'error.tsx, redirect(), metadata는 렌더링 흐름에서 어떻게 처리되는가?',
          dirs: ['server/app-render', 'metadata 관련 파일', 'redirect 관련 로직'],
          mission: 'redirect()가 일반 return과 다르게 처리되는 이유를 설명한다.',
          tone: 'indigo',
        },
        {
          number: '16',
          title: 'Middleware / Route Handler',
          difficulty: '중상급',
          question: '페이지 렌더링이 아닌 request handling 흐름은 어디서 처리되는가?',
          dirs: ['server', 'route handler 관련 코드', 'middleware 관련 코드'],
          mission: 'route.ts와 page.tsx의 실행 흐름 차이를 구분한다.',
          tone: 'indigo',
        },
        {
          number: '17',
          title: 'Next.js 16 변화',
          difficulty: '중급',
          question:
            'Next.js 16에서는 어떤 기준으로 App Router, Cache Components, Turbopack을 읽어야 하는가?',
          dirs: ['Cache Components 문서', 'app-render', 'build', 'turbopack'],
          mission: 'Next 15 기준 설명과 Next 16 기준 설명의 차이를 정리한다.',
          tone: 'violet',
        },
        {
          number: '18',
          title: '실전 체크리스트',
          difficulty: '정리',
          question: '이제 새로운 Next.js 기능을 보면 어떤 순서로 소스코드를 추적할 수 있는가?',
          dirs: ['기능별 관련 파일 전체'],
          mission: '기능 하나를 골라 문서 → 코드 → 테스트 → PR 순서로 추적한다.',
          tone: 'emerald',
        },
      ],
    },
    axes: {
      eyebrow: '02 · code axis map',
      title: '거대한 저장소를 6개 축으로 나눕니다',
      description: '모든 파일을 읽지 않고, 기능의 성격에 맞는 축을 먼저 고릅니다.',
      labels: {
        path: '경로',
        keywords: '키워드',
        files: '대표 파일',
        role: '역할',
        question: '읽기 질문',
      },
      cards: [
        {
          id: 'request',
          title: 'Request Pipeline',
          path: 'packages/next/src/server',
          files: ['base-server.ts', 'next-server.ts'],
          role: '요청이 들어온 뒤 route matching, render entry, response 생성으로 이어지는 상위 서버 흐름입니다.',
          question: '이 요청은 어디서 들어오고 어떤 render entry로 연결되는가?',
          tone: 'indigo',
        },
        {
          id: 'app-render',
          title: 'App Render',
          path: 'packages/next/src/server/app-render',
          files: ['app-render.tsx', 'create-component-tree.tsx'],
          role: 'App Router 서버 렌더링, loader tree, component tree, RSC payload 생성 흐름입니다.',
          question: 'loader tree는 어떻게 component tree와 RSC payload로 이어지는가?',
          tone: 'blue',
        },
        {
          id: 'client-router',
          title: 'Client Router',
          path: 'packages/next/src/client/components',
          files: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          role: '클라이언트 내비게이션, layout 유지, router state patch, router cache 흐름입니다.',
          question: '클릭 한 번이 어떤 router state 변경으로 이어지는가?',
          tone: 'cyan',
        },
        {
          id: 'build',
          title: 'Build',
          path: 'packages/next/src/build',
          files: ['index.ts', 'webpack-config.ts', 'next-app-loader'],
          role: '라우트 분석, entry 생성, client/server bundle, manifest, loader pipeline 흐름입니다.',
          question: 'app 디렉터리 파일은 어떻게 build entry와 manifest로 변환되는가?',
          tone: 'violet',
        },
        {
          id: 'cache',
          title: 'Cache',
          keywords: ['Cache Components', 'use cache', 'cacheLife', 'cacheTag'],
          files: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts'],
          role: '명시적 캐시 범위, revalidation, dynamic rendering boundary, cached scope 판별 흐름입니다.',
          question: '어떤 작업은 cached scope에 들어가고 어떤 작업은 runtime dynamic으로 빠지는가?',
          tone: 'emerald',
        },
        {
          id: 'actions',
          title: 'Actions',
          files: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          role: 'Server Action POST 요청 처리, action 실행, redirect, revalidation, 보안 흐름입니다.',
          question: 'form action submit은 어떤 POST 요청과 action 실행으로 이어지는가?',
          tone: 'amber',
        },
      ],
    },
    personas: {
      eyebrow: '03 · recommended paths',
      title: '목적에 따라 읽는 순서가 달라집니다',
      description:
        '모든 사용자가 같은 순서로 읽을 필요는 없습니다. 지금 궁금한 문제에 따라 먼저 볼 축을 선택하세요.',
      reasonLabel: '추천 이유',
      pathLabel: '추천 경로',
      cards: [
        {
          id: 'beginner',
          title: '입문자',
          path: ['시작하기', '저장소 구조', 'React와 Next.js 경계', 'route tree'],
          reason:
            'Next.js 내부 구조를 처음 보는 사용자는 전체 저장소보다 route tree와 app-render 입구를 먼저 잡는 것이 좋습니다.',
          tone: 'sky',
        },
        {
          id: 'react',
          title: 'React 내부 구조 학습자',
          path: ['React와 Next.js 경계', 'RSC Payload', 'app-render', 'client router'],
          reason:
            'React Server Components, Suspense, hydration, client boundary가 Next.js에서 어떻게 프레임워크 흐름으로 조직되는지 볼 수 있습니다.',
          tone: 'violet',
        },
        {
          id: 'practical',
          title: 'Next.js 실무 개발자',
          path: ['App Router', 'Cache Components', 'Server Actions', '테스트'],
          reason:
            '실무에서 자주 마주치는 loading, cache, action, revalidation 문제를 구조적으로 디버깅할 수 있습니다.',
          tone: 'cyan',
        },
        {
          id: 'framework',
          title: '프레임워크 / 번들러 관심자',
          path: ['CLI', '서버 초기화', 'build pipeline', 'Turbopack', 'manifest'],
          reason:
            'Next.js가 개발 서버, 빌드 시스템, 번들러, 라우트 manifest를 어떻게 연결하는지 볼 수 있습니다.',
          tone: 'amber',
        },
      ],
    },
    missions: {
      eyebrow: '04 · explore yourself',
      title: '이제 직접 하나씩 찾아봅니다',
      description: '아래 미션은 다음 챕터에 들어가기 전에 수행하면 좋은 실전 탐색 과제입니다.',
      labels: {
        action: '수행할 행동',
        files: '읽을 파일',
        outcome: '완료하면 설명할 수 있어야 하는 것',
      },
      items: [
        {
          id: 'mission-1',
          title: 'loading.tsx boundary 찾기',
          action: 'loading.tsx가 어느 boundary로 연결되는지 찾기',
          files: ['create-component-tree.tsx', 'has-loading-component-in-tree.tsx'],
          outcome: '왜 특정 segment에서만 loading UI가 보이는지 설명할 수 있어야 합니다.',
          tone: 'sky',
        },
        {
          id: 'mission-2',
          title: 'Link 클릭 흐름 찾기',
          action: '<Link> 클릭이 어떤 router reducer 흐름으로 이어지는지 찾기',
          files: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          outcome:
            '왜 전체 새로고침이 아니라 router state patch가 적용되는지 설명할 수 있어야 합니다.',
          tone: 'blue',
        },
        {
          id: 'mission-3',
          title: 'Server Action POST 찾기',
          action: 'Server Action POST 요청이 어디서 처리되는지 찾기',
          files: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          outcome:
            'form action submit이 어떻게 action 실행, redirect, revalidation으로 연결되는지 설명할 수 있어야 합니다.',
          tone: 'violet',
        },
        {
          id: 'mission-4',
          title: 'cacheTag 흐름 찾기',
          action: 'cacheTag가 어떤 revalidation 모델과 연결되는지 찾기',
          files: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts', 'server/use-cache'],
          outcome:
            'cached scope와 revalidation이 어떤 기준으로 연결되는지 설명할 수 있어야 합니다.',
          tone: 'emerald',
        },
        {
          id: 'mission-5',
          title: 'next-app-loader 흐름 찾기',
          action: 'next-app-loader가 app 디렉터리를 어떻게 loader tree로 바꾸는지 찾기',
          files: ['next-app-loader', 'build/entries.ts', 'webpack-config.ts'],
          outcome:
            'app 디렉터리의 파일 convention이 build entry와 loader tree로 이어지는지 설명할 수 있어야 합니다.',
          tone: 'amber',
        },
      ],
    },
    checklist: {
      eyebrow: '05 · final check',
      title: '다음 코드를 읽기 전에 이 질문을 확인하세요',
      description:
        '이 체크리스트는 이후 어떤 Next.js 기능을 읽더라도 현재 위치를 판별하는 기준이 됩니다.',
      items: [
        { id: 'layer', text: '이 기능은 server / client / build 중 어디인가?' },
        { id: 'router', text: 'App Router 흐름인가 Pages Router 흐름인가?' },
        { id: 'response', text: 'HTML 응답인가 RSC Payload인가?' },
        { id: 'request-type', text: '일반 page request인가 Server Action POST인가?' },
        { id: 'cache', text: 'cacheComponents와 관련 있는가?' },
        { id: 'version', text: 'stable과 canary에서 같은가?' },
        { id: 'test', text: '테스트 코드가 있는가?' },
        { id: 'pr', text: 'PR / issue로 설계 배경을 확인했는가?' },
      ],
    },
    nextStep: {
      eyebrow: '다음 챕터로 이동',
      title: '다음: Next.js GitHub 저장소 구조 읽기',
      description:
        '시작하기 영역은 끝났습니다. 이제 실제 Next.js 저장소를 열고, 가장 먼저 전체 구조부터 읽어봅니다.',
      cta: '다음 페이지로 이동',
      href: '/repo-overview',
    },
  },
  en: {
    hero: {
      badge: 'Next.js source learning map',
      title: {
        lines: [
          { accent: 'Next.js Source', rest: '' },
          { accent: 'Exploration Roadmap', rest: '' },
        ],
      },
      highlight: [
        'You do not read every file.',
        'You read by axes: server, app-render, client router, build, cache, actions.',
      ],
      description: [
        'The Next.js repo is huge, but you can read it by splitting into axes:',
        'request handling, server rendering, client router, build, cache, and actions.',
        'This roadmap organizes the whole journey after Getting Started into per-step questions and code entries.',
      ],
      primaryCta: 'See the full roadmap',
      secondaryCta: 'See the code axis map',
      flow: {
        title: 'Read the repo along six axes',
        subtitle: 'Pick a step to see what each axis owns',
        categoryLabel: 'Path',
        initialStepId: 'request',
        steps: [
          {
            id: 'request',
            label: 'Request Pipeline',
            category: 'server',
            description:
              'The upper server flow from an incoming request to route matching and render entry.',
            tone: 'indigo',
          },
          {
            id: 'app-render',
            label: 'App Render',
            category: 'server/app-render',
            description:
              'App Router server rendering, loader tree, component tree, and RSC payload generation.',
            tone: 'blue',
          },
          {
            id: 'client-router',
            label: 'Client Router',
            category: 'client/components',
            description:
              'Client navigation, layout persistence, router state patch, and router cache flow.',
            tone: 'cyan',
          },
          {
            id: 'build',
            label: 'Build',
            category: 'build',
            description:
              'Route analysis, entry creation, client/server bundle, manifest, and loader pipeline.',
            tone: 'violet',
          },
          {
            id: 'cache',
            label: 'Cache',
            category: 'cache components',
            description:
              'Explicit cache scope, revalidation, and dynamic rendering boundary decisions.',
            tone: 'emerald',
          },
          {
            id: 'actions',
            label: 'Actions',
            category: 'server actions',
            description:
              'Server Action POST handling, action execution, redirect, revalidation, and security.',
            tone: 'amber',
          },
        ],
      },
    },
    roadmap: {
      eyebrow: '01 · full roadmap',
      title: 'See the whole learning journey at a glance',
      description:
        'The rest proceeds in 18 steps. Each connects a core question, directories to read, and a practice mission.',
      currentLabel: 'You are here',
      currentPosition: 'Getting Started 8/8',
      labels: {
        difficulty: 'Difficulty',
        question: 'Core question',
        dirs: 'Directories / files to read',
        mission: 'Practice mission',
        stepLabel: 'Pick a step to see its detail',
      },
      steps: [
        {
          number: '01',
          title: 'Getting Started',
          difficulty: 'Intro',
          question: 'Why read the Next.js source?',
          dirs: ['the whole Getting Started area'],
          mission: 'Distinguish usage questions from internals questions.',
          tone: 'sky',
        },
        {
          number: '02',
          title: 'GitHub repo structure',
          difficulty: 'Intro',
          question: 'Which directories are core in the Next.js repo?',
          dirs: ['packages/next', 'packages/next/src', 'test', 'examples'],
          mission: 'Find the server, client, build directories under packages/next/src.',
          tone: 'sky',
        },
        {
          number: '03',
          title: 'What Next.js adds on React',
          difficulty: 'Intro',
          question: "What does Next.js add on top of React's render model?",
          dirs: ['server/app-render', 'client/components'],
          mission: 'List five React responsibilities and five Next.js responsibilities.',
          tone: 'sky',
        },
        {
          number: '04',
          title: 'CLI and server init',
          difficulty: 'Early-mid',
          question: 'How do next dev, next build, next start execute?',
          dirs: ['packages/next/src/cli', 'packages/next/src/server'],
          mission: 'Find the file where next dev connects to server init.',
          tone: 'blue',
        },
        {
          number: '05',
          title: 'File-system routing & Route Tree',
          difficulty: 'Early-mid',
          question: 'How do app directory conventions become a route tree?',
          dirs: ['next-app-loader', 'server/app-render'],
          mission: 'Trace how page.tsx, layout.tsx, loading.tsx connect into the internal tree.',
          tone: 'blue',
        },
        {
          number: '06',
          title: 'App Router client runtime',
          difficulty: 'Mid',
          question: 'What router state change does a client navigation lead to?',
          dirs: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/router-reducer',
          ],
          mission: 'Trace how router.push or a Link click becomes a navigate action.',
          tone: 'violet',
        },
        {
          number: '07',
          title: 'Layout / Page / Segment Tree',
          difficulty: 'Mid',
          question: 'Why is the layout kept while only the page is replaced?',
          dirs: ['layout-router.tsx', 'create-flight-router-state-from-loader-tree.ts'],
          mission: 'On /dashboard/settings/profile, tell kept vs replaced segments.',
          tone: 'violet',
        },
        {
          number: '08',
          title: 'Server Components & RSC Payload',
          difficulty: 'Mid',
          question: 'How is the server-run component result delivered to the client?',
          dirs: ['app-render.tsx', 'use-flight-response.tsx'],
          mission: 'Distinguish the roles of HTML response and RSC Payload.',
          tone: 'violet',
        },
        {
          number: '09',
          title: 'Server rendering & app-render',
          difficulty: 'Mid',
          question: 'What render response is built when a request enters app-render?',
          dirs: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          mission: 'Check how app-render uses the loader tree and component tree.',
          tone: 'violet',
        },
        {
          number: '10',
          title: 'Client navigation & Router Cache',
          difficulty: 'Upper-mid',
          question: 'Why does Link navigation not behave like a full reload?',
          dirs: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          mission: 'Trace how the RSC payload merges into client router state.',
          tone: 'indigo',
        },
        {
          number: '11',
          title: 'Cache Components / Revalidation',
          difficulty: 'Upper-mid',
          question: 'How does the Next.js 16 cache model create an explicit cached scope?',
          dirs: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts', 'server/use-cache'],
          mission: 'Connect cacheTag with the revalidation flow.',
          tone: 'indigo',
        },
        {
          number: '12',
          title: 'Server Actions',
          difficulty: 'Upper-mid',
          question: 'What POST handling and action execution does a form action submit lead to?',
          dirs: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          mission: 'Open action-handler.ts and action-handler.test.ts together.',
          tone: 'indigo',
        },
        {
          number: '13',
          title: 'Build Pipeline',
          difficulty: 'Advanced',
          question: 'How does Next.js turn app/pages routes into build entries and manifests?',
          dirs: [
            'packages/next/src/build/index.ts',
            'packages/next/src/build/webpack-config.ts',
            'next-app-loader',
          ],
          mission: 'Check how next-app-loader turns the app directory into a build entry.',
          tone: 'amber',
        },
        {
          number: '14',
          title: 'Turbopack',
          difficulty: 'Advanced',
          question: 'What role does Turbopack play in the dev server and build flow?',
          dirs: ['turbopack packages', 'crates'],
          mission: 'Find where the Webpack path and Turbopack path split.',
          tone: 'amber',
        },
        {
          number: '15',
          title: 'Error / Redirect / Metadata',
          difficulty: 'Upper-mid',
          question: 'How are error.tsx, redirect(), metadata handled in the render flow?',
          dirs: ['server/app-render', 'metadata files', 'redirect logic'],
          mission: 'Explain why redirect() is handled differently from a plain return.',
          tone: 'indigo',
        },
        {
          number: '16',
          title: 'Middleware / Route Handler',
          difficulty: 'Upper-mid',
          question: 'Where is request handling (not page rendering) processed?',
          dirs: ['server', 'route handler code', 'middleware code'],
          mission: 'Distinguish the execution flow of route.ts vs page.tsx.',
          tone: 'indigo',
        },
        {
          number: '17',
          title: "What's new in Next.js 16",
          difficulty: 'Mid',
          question:
            'On what baseline should you read App Router, Cache Components, Turbopack in Next.js 16?',
          dirs: ['Cache Components docs', 'app-render', 'build', 'turbopack'],
          mission: 'Summarize the difference between Next 15 and Next 16 explanations.',
          tone: 'violet',
        },
        {
          number: '18',
          title: 'Source reading checklist',
          difficulty: 'Wrap-up',
          question: 'For a new Next.js feature, in what order can you trace the source?',
          dirs: ['all feature-related files'],
          mission: 'Pick one feature and trace docs → code → test → PR.',
          tone: 'emerald',
        },
      ],
    },
    axes: {
      eyebrow: '02 · code axis map',
      title: 'Split the huge repo into six axes',
      description:
        'Instead of reading every file, first pick the axis that matches the nature of the feature.',
      labels: {
        path: 'Path',
        keywords: 'Keywords',
        files: 'Key files',
        role: 'Role',
        question: 'Reading question',
      },
      cards: [
        {
          id: 'request',
          title: 'Request Pipeline',
          path: 'packages/next/src/server',
          files: ['base-server.ts', 'next-server.ts'],
          role: 'The upper server flow from an incoming request to route matching, render entry, and response creation.',
          question: 'Where does this request enter, and which render entry does it connect to?',
          tone: 'indigo',
        },
        {
          id: 'app-render',
          title: 'App Render',
          path: 'packages/next/src/server/app-render',
          files: ['app-render.tsx', 'create-component-tree.tsx'],
          role: 'App Router server rendering, loader tree, component tree, and RSC payload generation.',
          question: 'How does the loader tree lead to the component tree and RSC payload?',
          tone: 'blue',
        },
        {
          id: 'client-router',
          title: 'Client Router',
          path: 'packages/next/src/client/components',
          files: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          role: 'Client navigation, layout persistence, router state patch, and router cache flow.',
          question: 'What router state change does a single click lead to?',
          tone: 'cyan',
        },
        {
          id: 'build',
          title: 'Build',
          path: 'packages/next/src/build',
          files: ['index.ts', 'webpack-config.ts', 'next-app-loader'],
          role: 'Route analysis, entry creation, client/server bundle, manifest, and loader pipeline flow.',
          question: 'How are app directory files turned into build entries and manifests?',
          tone: 'violet',
        },
        {
          id: 'cache',
          title: 'Cache',
          keywords: ['Cache Components', 'use cache', 'cacheLife', 'cacheTag'],
          files: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts'],
          role: 'Explicit cache scope, revalidation, dynamic rendering boundary, and cached scope decisions.',
          question: 'Which work enters a cached scope and which falls back to runtime dynamic?',
          tone: 'emerald',
        },
        {
          id: 'actions',
          title: 'Actions',
          files: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          role: 'Server Action POST handling, action execution, redirect, revalidation, and security flow.',
          question: 'What POST request and action execution does a form action submit lead to?',
          tone: 'amber',
        },
      ],
    },
    personas: {
      eyebrow: '03 · recommended paths',
      title: 'The reading order changes with your goal',
      description:
        'Not everyone needs the same order. Pick the axis to read first based on the problem you care about now.',
      reasonLabel: 'Why this path',
      pathLabel: 'Recommended path',
      cards: [
        {
          id: 'beginner',
          title: 'Beginner',
          path: ['Getting Started', 'Repo structure', 'React–Next boundary', 'route tree'],
          reason:
            'First-timers should grab the route tree and app-render entry before the whole repo.',
          tone: 'sky',
        },
        {
          id: 'react',
          title: 'React internals learner',
          path: ['React–Next boundary', 'RSC Payload', 'app-render', 'client router'],
          reason:
            'See how React Server Components, Suspense, hydration, and client boundary are organized into framework flow in Next.js.',
          tone: 'violet',
        },
        {
          id: 'practical',
          title: 'Next.js practitioner',
          path: ['App Router', 'Cache Components', 'Server Actions', 'tests'],
          reason:
            'Structurally debug the loading, cache, action, revalidation problems you hit at work.',
          tone: 'cyan',
        },
        {
          id: 'framework',
          title: 'Framework / bundler enthusiast',
          path: ['CLI', 'Server init', 'build pipeline', 'Turbopack', 'manifest'],
          reason:
            'See how Next.js connects the dev server, build system, bundler, and route manifest.',
          tone: 'amber',
        },
      ],
    },
    missions: {
      eyebrow: '04 · explore yourself',
      title: 'Now find each one yourself',
      description:
        'These missions are great practice tasks to do before entering the next chapter.',
      labels: {
        action: 'What to do',
        files: 'Files to read',
        outcome: 'What you should be able to explain',
      },
      items: [
        {
          id: 'mission-1',
          title: 'Find the loading.tsx boundary',
          action: 'Find which boundary loading.tsx connects to',
          files: ['create-component-tree.tsx', 'has-loading-component-in-tree.tsx'],
          outcome:
            'You should be able to explain why loading UI shows only for a specific segment.',
          tone: 'sky',
        },
        {
          id: 'mission-2',
          title: 'Find the Link click flow',
          action: 'Find which router reducer flow a <Link> click leads to',
          files: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          outcome:
            'You should be able to explain why a router state patch applies instead of a full reload.',
          tone: 'blue',
        },
        {
          id: 'mission-3',
          title: 'Find the Server Action POST',
          action: 'Find where the Server Action POST request is handled',
          files: ['action-handler.ts', 'csrf-protection.ts', 'encryption.ts'],
          outcome:
            'You should be able to explain how a form action submit connects to action execution, redirect, revalidation.',
          tone: 'violet',
        },
        {
          id: 'mission-4',
          title: 'Find the cacheTag flow',
          action: 'Find which revalidation model cacheTag connects to',
          files: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts', 'server/use-cache'],
          outcome: 'You should be able to explain how cached scope and revalidation connect.',
          tone: 'emerald',
        },
        {
          id: 'mission-5',
          title: 'Find the next-app-loader flow',
          action: 'Find how next-app-loader turns the app directory into a loader tree',
          files: ['next-app-loader', 'build/entries.ts', 'webpack-config.ts'],
          outcome:
            'You should be able to explain how app directory conventions lead to a build entry and loader tree.',
          tone: 'amber',
        },
      ],
    },
    checklist: {
      eyebrow: '05 · final check',
      title: 'Check these questions before reading the next code',
      description:
        'This checklist becomes your baseline for locating yourself in any Next.js feature you read later.',
      items: [
        { id: 'layer', text: 'Is this feature in server / client / build?' },
        { id: 'router', text: 'Is it App Router flow or Pages Router flow?' },
        { id: 'response', text: 'Is it an HTML response or an RSC Payload?' },
        { id: 'request-type', text: 'Is it a normal page request or a Server Action POST?' },
        { id: 'cache', text: 'Is it related to cacheComponents?' },
        { id: 'version', text: 'Is it the same in stable and canary?' },
        { id: 'test', text: 'Is there test code?' },
        { id: 'pr', text: 'Did I check the design background via PR / issue?' },
      ],
    },
    nextStep: {
      eyebrow: 'On to the next chapter',
      title: 'Next: Reading the Next.js GitHub Repository Structure',
      description:
        'Getting Started is done. Now open the actual Next.js repo and read the overall structure first.',
      cta: 'Go to the next page',
      href: '/repo-overview',
    },
  },
};
