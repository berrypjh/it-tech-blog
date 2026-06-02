import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { GapIconName, StrengthIconName } from './icons';

export type { ToneKey };

export type CompareCard = {
  title: string;
  summary: string;
  items: string[];
  pill: string;
};

export type StrengthCard = {
  id: StrengthIconName;
  title: string;
  description: string;
  gain: string;
  tone: ToneKey;
};

export type GapCard = {
  id: GapIconName;
  number: string;
  title: string;
  miss: string;
  sources: string;
  tone: ToneKey;
};

export type ConnectorTopic = {
  id: 'server-actions' | 'cache';
  tab: string;
  docItems: string[];
  codePaths: string[];
  testPaths: string[];
  testNote?: string;
  questions: string[];
  extraFiles: string[];
  tone: ToneKey;
};

export type TransformerExample = {
  id: string;
  button: string;
  sentence: string;
  question: string;
  readCode: string[];
  verify: string;
  tone: ToneKey;
};

export type DocsLimitsContent = {
  hero: {
    badge: string;
    title: { lines: { accent: string; rest: string }[] };
    highlight: string[];
    description: string[];
    primaryCta: string;
    secondaryCta: string;
    connectorNote: string;
    docs: CompareCard;
    code: CompareCard;
  };
  strengths: {
    eyebrow: string;
    title: string;
    description: string;
    gainLabel: string;
    cards: StrengthCard[];
  };
  gaps: {
    eyebrow: string;
    title: string;
    description: string;
    missLabel: string;
    sourcesLabel: string;
    cards: GapCard[];
  };
  connector: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { doc: string; code: string; test: string; question: string; extra: string };
    topics: ConnectorTopic[];
  };
  transformer: {
    eyebrow: string;
    title: string;
    description: string;
    inputLabel: string;
    labels: { sentence: string; question: string; read: string; verify: string };
    examples: TransformerExample[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

export const docsLimitsContent: Record<Locale, DocsLimitsContent> = {
  ko: {
    hero: {
      badge: 'Next.js 문서와 소스코드 연결법',
      title: {
        lines: [
          { accent: '문서', rest: '는 사용법을,' },
          { accent: '코드', rest: '는 실행 경로를 보여준다' },
        ],
      },
      highlight: ['공식 문서는 표면 동작을 알려주고,', '소스코드는 실제 실행 흐름을 보여줍니다.'],
      description: [
        '공식 문서는 어떤 API를 어떻게 쓰는지 알려줍니다.',
        '하지만 어떤 요청이 들어오고, 어떤 파일이 실행되고,',
        '어떤 예외가 처리되고, 어떤 응답이 만들어지는지는',
        '소스코드와 테스트를 함께 봐야 보입니다.',
      ],
      primaryCta: '문서와 코드 차이 보기',
      secondaryCta: '문서 문장 변환하기',
      connectorNote: '사용법에서 실행 경로로',
      docs: {
        title: '공식 문서',
        summary: '무엇을 어떻게 쓰는지 알려줍니다.',
        items: [
          '어떻게 사용하는가?',
          '어떤 API를 권장하는가?',
          '어떤 패턴이 기본인가?',
          '어떤 마이그레이션을 따라야 하는가?',
        ],
        pill: '표면 동작',
      },
      code: {
        title: '소스코드',
        summary: '실제로 어떤 실행 경로를 거치는지 보여줍니다.',
        items: [
          '어떤 요청이 들어오는가?',
          '어떤 파일이 실행되는가?',
          '어떤 예외가 처리되는가?',
          '어떤 응답이 만들어지는가?',
        ],
        pill: '실행 경로',
      },
    },
    strengths: {
      eyebrow: '01 · docs strengths',
      title: '공식 문서는 출발점으로 가장 좋습니다',
      description:
        '공식 문서는 학습의 기준점입니다. 다만 공식 문서가 설명하는 영역과 소스코드가 보여주는 영역을 구분해야 합니다.',
      gainLabel: '문서에서 얻을 수 있는 것',
      cards: [
        {
          id: 'api',
          title: 'API 사용법',
          description: '어떤 API를 어떤 형태로 호출해야 하는지 알려줍니다.',
          gain: '기본 사용법, 파라미터, 반환값, 예제 코드',
          tone: 'blue',
        },
        {
          id: 'pattern',
          title: '권장 패턴',
          description: '프레임워크가 권장하는 작성 방식을 알려줍니다.',
          gain: '권장 구조, 모범 사례, 피해야 할 사용 방식',
          tone: 'sky',
        },
        {
          id: 'example',
          title: '기본 예제',
          description: '처음 기능을 사용할 때 필요한 최소 코드를 제공합니다.',
          gain: '빠르게 따라 할 수 있는 코드와 사용 흐름',
          tone: 'indigo',
        },
        {
          id: 'migration',
          title: '마이그레이션 설명',
          description: '버전이 바뀌었을 때 어떤 API와 설정을 바꿔야 하는지 알려줍니다.',
          gain: '업그레이드 순서, 변경된 설정, deprecated 기능',
          tone: 'cyan',
        },
        {
          id: 'concept',
          title: '개념 도입',
          description: '새 기능이 어떤 문제를 해결하기 위해 등장했는지 소개합니다.',
          gain: '기능의 목적, 기본 개념, 사용 맥락',
          tone: 'violet',
        },
        {
          id: 'caution',
          title: '주의사항 안내',
          description: '기능 사용 시 조심해야 할 제약이나 조건을 알려줍니다.',
          gain: '경고, 제한 사항, compatibility note',
          tone: 'teal',
        },
      ],
    },
    gaps: {
      eyebrow: '02 · docs gaps',
      title: '하지만 문서만으로는 실행 경로가 보이지 않습니다',
      description:
        'Next.js 내부 구조를 이해하려면 문서의 문장을 코드 질문으로 바꾸어야 합니다. 문서가 말하는 표면 동작 뒤에서 실제로 어떤 코드가 실행되는지 확인해야 합니다.',
      missLabel: '문서만 보면 놓치는 것',
      sourcesLabel: '함께 봐야 하는 자료',
      cards: [
        {
          id: 'call-order',
          number: '01',
          title: '내부 호출 순서',
          miss: '어떤 함수가 먼저 실행되고, 어떤 경로로 다음 단계에 연결되는지 알기 어렵습니다.',
          sources: '소스코드, call stack, 코드 검색',
          tone: 'blue',
        },
        {
          id: 'dev-prod',
          number: '02',
          title: 'dev / prod 차이',
          miss: '개발 모드와 프로덕션 빌드에서 같은 기능이 다르게 처리되는 지점이 보이지 않을 수 있습니다.',
          sources: 'dev server 코드, build 코드, 테스트',
          tone: 'violet',
        },
        {
          id: 'edge-case',
          number: '03',
          title: 'edge case',
          miss: 'redirect, error, dynamic route, streaming, cache invalidation 같은 예외 흐름이 단순화되어 보일 수 있습니다.',
          sources: '테스트, issue, error handling 코드',
          tone: 'amber',
        },
        {
          id: 'tested',
          number: '04',
          title: '테스트로 보장되는 동작',
          miss: 'Next.js 팀이 어떤 동작을 실제로 보장하려는지 알기 어렵습니다.',
          sources: 'unit test, integration test, e2e test',
          tone: 'emerald',
        },
        {
          id: 'pr',
          number: '05',
          title: 'PR 설계 배경',
          miss: '왜 이런 API나 구현 방식이 선택됐는지 설계 논의가 보이지 않습니다.',
          sources: 'PR description, review thread, linked issue',
          tone: 'indigo',
        },
        {
          id: 'canary',
          number: '06',
          title: 'canary 변경사항',
          miss: 'canary branch의 최신 구현이 stable 문서와 다를 수 있습니다.',
          sources: 'release note, canary branch, commit history',
          tone: 'cyan',
        },
        {
          id: 'impl-exception',
          number: '07',
          title: '구현상 예외 처리',
          miss: '특정 조건에서 early return, fallback, warning, error가 어떻게 처리되는지 알기 어렵습니다.',
          sources: 'source code, tests, issue reproduction',
          tone: 'teal',
        },
      ],
    },
    connector: {
      eyebrow: '03 · docs → code → test',
      title: '문서 문장을 코드와 테스트로 연결해봅니다',
      description:
        '공식 문서에서 본 문장을 그대로 외우는 대신, 그 문장이 실제로 어떤 코드 경로와 테스트로 연결되는지 확인합니다.',
      labels: {
        doc: '문서',
        code: '코드',
        test: '테스트 / 확인 질문',
        question: '확인 질문',
        extra: '추가로 볼 파일',
      },
      topics: [
        {
          id: 'server-actions',
          tab: 'Server Actions',
          docItems: ['Server Action은 form submit / mutation에서 사용된다.'],
          codePaths: ['packages/next/src/server/app-render/action-handler.ts'],
          testPaths: ['packages/next/src/server/app-render/action-handler.test.ts'],
          questions: [
            'POST 요청은 어디서 구분되는가?',
            'redirect는 action 이후 어떻게 처리되는가?',
            'revalidatePath는 언제 연결되는가?',
          ],
          extraFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/csrf-protection.ts',
            'packages/next/src/server/app-render/encryption.ts',
          ],
          tone: 'violet',
        },
        {
          id: 'cache',
          tab: 'Cache Components',
          docItems: ['cacheComponents: true', "'use cache'", 'cacheLife', 'cacheTag'],
          codePaths: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          testPaths: [],
          testNote: '관련 캐시 / revalidation 테스트 검색',
          questions: [
            'cached scope와 dynamic rendering 경계는 어디서 판단되는가?',
            'cache signal은 어디서 추적되는가?',
            'stale time은 어디서 다뤄지는가?',
          ],
          extraFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/use-cache',
            'packages/next/src/server/response-cache',
          ],
          tone: 'emerald',
        },
      ],
    },
    transformer: {
      eyebrow: '04 · transform the sentence',
      title: '문서 문장을 코드 질문으로 바꾸기',
      description:
        '좋은 소스코드 독해는 좋은 질문에서 시작됩니다. 공식 문서의 문장을 보면 "그래서 내부에서는 어디서 처리하지?"라고 바꿔 물어보세요.',
      inputLabel: '예시 문서 문장을 선택하세요',
      labels: {
        sentence: '문서 문장',
        question: '코드 질문',
        read: '읽을 코드',
        verify: '확인할 테스트 / 동작',
      },
      examples: [
        {
          id: 'cache',
          button: 'Cache Components 문장',
          sentence: 'Cache Components lets you mix static, cached, and dynamic content.',
          question:
            '어떤 컴포넌트는 static shell에 들어가고, 어떤 컴포넌트는 runtime dynamic으로 빠지는가?',
          readCode: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts'],
          verify: 'static / cached / dynamic content가 어떤 기준으로 분리되는지 확인한다.',
          tone: 'emerald',
        },
        {
          id: 'server-actions',
          button: 'Server Actions 문장',
          sentence: 'Server Actions can be invoked from forms.',
          question:
            'form submit은 어떤 POST 요청으로 바뀌고, action-handler.ts는 어떤 방식으로 action을 찾고 실행하는가?',
          readCode: ['action-handler.ts', 'app-render.tsx', 'csrf-protection.ts'],
          verify: 'action request 판별, redirect 처리, revalidation 연결을 확인한다.',
          tone: 'violet',
        },
        {
          id: 'loading',
          button: 'loading.js 문장',
          sentence: 'loading.js creates instant loading states.',
          question:
            'loading.tsx는 어떤 segment boundary에 연결되고, Suspense fallback으로 어떻게 사용되는가?',
          readCode: ['create-component-tree.tsx', 'has-loading-component-in-tree.tsx'],
          verify: '특정 segment에서만 loading UI가 보이는지 확인한다.',
          tone: 'sky',
        },
        {
          id: 'link',
          button: 'Link navigation 문장',
          sentence: 'Link enables client-side navigation.',
          question:
            'Link 클릭은 어떤 router action으로 바뀌고, router reducer는 RSC payload를 어떻게 병합하는가?',
          readCode: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          verify: '전체 새로고침이 아니라 router state patch가 적용되는지 확인한다.',
          tone: 'cyan',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: GitHub 코드, 테스트, PR, issue를 함께 읽는 방법',
      description:
        '공식 문서와 소스코드의 역할 차이를 이해했다면, 이제 GitHub에서 코드, 테스트, PR, issue를 하나의 흐름으로 연결해 읽는 방법을 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/github-reading-method',
    },
  },
  en: {
    hero: {
      badge: 'Connecting Next.js docs and source',
      title: {
        lines: [
          { accent: 'Docs', rest: ' show how to use it,' },
          { accent: 'code', rest: ' shows the execution path' },
        ],
      },
      highlight: [
        'The docs tell you the surface behavior,',
        'the source shows the actual execution flow.',
      ],
      description: [
        'The official docs tell you which API to use and how.',
        'But which request comes in, which file runs,',
        'which exceptions are handled, and which response is built',
        'only become visible when you read the source and tests together.',
      ],
      primaryCta: 'See the docs vs code gap',
      secondaryCta: 'Transform a doc sentence',
      connectorNote: 'from usage to execution path',
      docs: {
        title: 'Official docs',
        summary: 'Tell you what to use and how.',
        items: [
          'How do I use it?',
          'Which API is recommended?',
          'What is the default pattern?',
          'Which migration to follow?',
        ],
        pill: 'Surface behavior',
      },
      code: {
        title: 'Source code',
        summary: 'Shows the actual execution path it goes through.',
        items: [
          'Which request comes in?',
          'Which file runs?',
          'Which exceptions are handled?',
          'Which response is built?',
        ],
        pill: 'Execution path',
      },
    },
    strengths: {
      eyebrow: '01 · docs strengths',
      title: 'The official docs are the best starting point',
      description:
        'The docs are your reference point for learning. Just separate what the docs explain from what the source reveals.',
      gainLabel: 'What you get from the docs',
      cards: [
        {
          id: 'api',
          title: 'API usage',
          description: 'Tells you which API to call and in what shape.',
          gain: 'Basic usage, parameters, return values, example code',
          tone: 'blue',
        },
        {
          id: 'pattern',
          title: 'Recommended patterns',
          description: 'Tells you the writing style the framework recommends.',
          gain: 'Recommended structure, best practices, usages to avoid',
          tone: 'sky',
        },
        {
          id: 'example',
          title: 'Basic examples',
          description: 'Provides the minimum code to use a feature for the first time.',
          gain: 'Code you can follow quickly and its usage flow',
          tone: 'indigo',
        },
        {
          id: 'migration',
          title: 'Migration guides',
          description: 'Tells you which APIs and settings to change across versions.',
          gain: 'Upgrade order, changed settings, deprecated features',
          tone: 'cyan',
        },
        {
          id: 'concept',
          title: 'Concept introduction',
          description: 'Introduces what problem a new feature was created to solve.',
          gain: "The feature's purpose, core concept, usage context",
          tone: 'violet',
        },
        {
          id: 'caution',
          title: 'Caveats',
          description: 'Tells you the constraints or conditions to watch out for.',
          gain: 'Warnings, limitations, compatibility notes',
          tone: 'teal',
        },
      ],
    },
    gaps: {
      eyebrow: '02 · docs gaps',
      title: 'But docs alone do not reveal the execution path',
      description:
        'To understand the Next.js internals you must turn doc sentences into code questions, and check which code actually runs behind the surface behavior.',
      missLabel: 'What you miss with docs alone',
      sourcesLabel: 'Sources to read together',
      cards: [
        {
          id: 'call-order',
          number: '01',
          title: 'Internal call order',
          miss: 'It is hard to tell which function runs first and how it connects to the next step.',
          sources: 'source code, call stack, code search',
          tone: 'blue',
        },
        {
          id: 'dev-prod',
          number: '02',
          title: 'dev / prod differences',
          miss: 'Where the same feature is handled differently in dev mode vs production build may be invisible.',
          sources: 'dev server code, build code, tests',
          tone: 'violet',
        },
        {
          id: 'edge-case',
          number: '03',
          title: 'edge cases',
          miss: 'Exception flows like redirect, error, dynamic route, streaming, cache invalidation may look simplified.',
          sources: 'tests, issues, error handling code',
          tone: 'amber',
        },
        {
          id: 'tested',
          number: '04',
          title: 'Behavior guaranteed by tests',
          miss: 'It is hard to tell which behavior the Next.js team actually intends to guarantee.',
          sources: 'unit test, integration test, e2e test',
          tone: 'emerald',
        },
        {
          id: 'pr',
          number: '05',
          title: 'PR design context',
          miss: 'The design discussion behind why an API or implementation was chosen is not visible.',
          sources: 'PR description, review thread, linked issue',
          tone: 'indigo',
        },
        {
          id: 'canary',
          number: '06',
          title: 'canary changes',
          miss: "The canary branch's latest implementation may differ from the stable docs.",
          sources: 'release note, canary branch, commit history',
          tone: 'cyan',
        },
        {
          id: 'impl-exception',
          number: '07',
          title: 'Implementation exceptions',
          miss: 'It is hard to tell how early return, fallback, warning, error are handled under specific conditions.',
          sources: 'source code, tests, issue reproduction',
          tone: 'teal',
        },
      ],
    },
    connector: {
      eyebrow: '03 · docs → code → test',
      title: 'Connect doc sentences to code and tests',
      description:
        'Instead of memorizing a sentence from the docs, check which code path and tests that sentence actually connects to.',
      labels: {
        doc: 'Docs',
        code: 'Code',
        test: 'Test / questions',
        question: 'Questions to ask',
        extra: 'More files to read',
      },
      topics: [
        {
          id: 'server-actions',
          tab: 'Server Actions',
          docItems: ['A Server Action is used in form submit / mutation.'],
          codePaths: ['packages/next/src/server/app-render/action-handler.ts'],
          testPaths: ['packages/next/src/server/app-render/action-handler.test.ts'],
          questions: [
            'Where is the POST request distinguished?',
            'How is redirect handled after an action?',
            'When is revalidatePath connected?',
          ],
          extraFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/csrf-protection.ts',
            'packages/next/src/server/app-render/encryption.ts',
          ],
          tone: 'violet',
        },
        {
          id: 'cache',
          tab: 'Cache Components',
          docItems: ['cacheComponents: true', "'use cache'", 'cacheLife', 'cacheTag'],
          codePaths: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          testPaths: [],
          testNote: 'Search related cache / revalidation tests',
          questions: [
            'Where is the cached scope vs dynamic rendering boundary decided?',
            'Where is the cache signal tracked?',
            'Where is stale time handled?',
          ],
          extraFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/use-cache',
            'packages/next/src/server/response-cache',
          ],
          tone: 'emerald',
        },
      ],
    },
    transformer: {
      eyebrow: '04 · transform the sentence',
      title: 'Turn a doc sentence into a code question',
      description:
        'Good source reading starts with a good question. When you read a doc sentence, re-ask: "so where is this handled inside?"',
      inputLabel: 'Pick an example doc sentence',
      labels: {
        sentence: 'Doc sentence',
        question: 'Code question',
        read: 'Code to read',
        verify: 'Test / behavior to verify',
      },
      examples: [
        {
          id: 'cache',
          button: 'Cache Components sentence',
          sentence: 'Cache Components lets you mix static, cached, and dynamic content.',
          question:
            'Which components go into the static shell, and which fall back to runtime dynamic?',
          readCode: ['dynamic-rendering.ts', 'cache-signal.ts', 'stale-time.ts'],
          verify: 'Verify the criteria by which static / cached / dynamic content is separated.',
          tone: 'emerald',
        },
        {
          id: 'server-actions',
          button: 'Server Actions sentence',
          sentence: 'Server Actions can be invoked from forms.',
          question:
            'Which POST request does a form submit become, and how does action-handler.ts find and run the action?',
          readCode: ['action-handler.ts', 'app-render.tsx', 'csrf-protection.ts'],
          verify: 'Verify action request detection, redirect handling, and revalidation wiring.',
          tone: 'violet',
        },
        {
          id: 'loading',
          button: 'loading.js sentence',
          sentence: 'loading.js creates instant loading states.',
          question:
            'Which segment boundary does loading.tsx connect to, and how is it used as a Suspense fallback?',
          readCode: ['create-component-tree.tsx', 'has-loading-component-in-tree.tsx'],
          verify: 'Verify that the loading UI shows only for a specific segment.',
          tone: 'sky',
        },
        {
          id: 'link',
          button: 'Link navigation sentence',
          sentence: 'Link enables client-side navigation.',
          question:
            'Which router action does a Link click become, and how does the router reducer merge the RSC payload?',
          readCode: ['app-router.tsx', 'layout-router.tsx', 'router-reducer'],
          verify: 'Verify that a router state patch is applied instead of a full reload.',
          tone: 'cyan',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Reading Code, Tests, PRs, and Issues Together on GitHub',
      description:
        'Now that you grasp the difference between docs and source, learn to read code, tests, PRs, and issues as one connected flow on GitHub.',
      cta: 'Go to the next page',
      href: '/github-reading-method',
    },
  },
};
