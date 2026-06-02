import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { RoutineIconName, SourceIconName } from './icons';

export type { ToneKey };

export type FlowStep = {
  id: SourceIconName;
  label: string;
  category: string;
  description: string;
  tone: ToneKey;
};

export type SourceCard = {
  id: SourceIconName;
  title: string;
  subtitle: string;
  shows: string;
  question: string;
  examples: string[];
  tone: ToneKey;
};

export type TraceStep = {
  id: RoutineIconName;
  number: string;
  title: string;
  what: string;
  why: string;
  question: string;
  tone: ToneKey;
};

export type SearchResult = {
  id: string;
  keyword: string;
  path: string;
  role: string;
  firstPoint: string;
  test: string;
  nextFiles: string[];
  tone: ToneKey;
};

export type CompareCard = {
  title: string;
  items: string[];
  caution: string;
  pill: string;
};

export type Mission = {
  id: string;
  title: string;
  mission: string;
  check: string;
};

export type GithubReadingContent = {
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
  sources: {
    eyebrow: string;
    title: string;
    description: string;
    labels: { shows: string; question: string; examples: string };
    cards: SourceCard[];
  };
  routine: {
    eyebrow: string;
    title: string;
    description: string;
    topic: { label: string; topic: string; coreQuestion: string; keywords: string[] };
    labels: { what: string; why: string; question: string; stepLabel: string };
    steps: TraceStep[];
  };
  search: {
    eyebrow: string;
    title: string;
    description: string;
    placeholder: string;
    labels: { path: string; role: string; firstPoint: string; test: string; nextFiles: string };
    results: SearchResult[];
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    cautionLabel: string;
    banner: string;
    stable: CompareCard;
    canary: CompareCard;
  };
  mission: {
    eyebrow: string;
    title: string;
    description: string;
    checkLabel: string;
    items: Mission[];
  };
  nextStep: { eyebrow: string; title: string; description: string; cta: string; href: string };
};

export const githubReadingContent: Record<Locale, GithubReadingContent> = {
  ko: {
    hero: {
      badge: 'Next.js GitHub 소스코드 독해법',
      title: {
        lines: [
          { accent: '코드', rest: '만 읽으면' },
          { accent: '절반', rest: '만 읽는 것입니다' },
        ],
      },
      highlight: [
        '코드는 현재 구현을 보여주고,',
        '테스트는 보장되는 동작을 보여주고,',
        'PR과 issue는 왜 그렇게 설계됐는지 보여줍니다.',
      ],
      description: [
        'Next.js 저장소를 파일 목록으로만 보면',
        '"어떤 코드가 있는지"는 알 수 있지만,',
        '"왜 이렇게 구현됐는지"와 "무엇이 보장되는지"는 놓치기 쉽습니다.',
        '그래서 코드, 테스트, PR, issue, release note를 하나의 흐름으로 연결해서 읽어야 합니다.',
      ],
      primaryCta: '5가지 읽기 대상 보기',
      secondaryCta: '기능 추적 루틴 보기',
      flow: {
        title: '5가지를 하나의 흐름으로',
        subtitle: '단계를 선택해 각 정보원이 무엇을 보여주는지 확인하세요',
        categoryLabel: '분류',
        initialStepId: 'code',
        steps: [
          {
            id: 'code',
            label: 'Code',
            category: '현재 구현',
            description: '현재 기능이 어떤 파일과 함수로 구현되어 있는지 보여줍니다.',
            tone: 'blue',
          },
          {
            id: 'test',
            label: 'Test',
            category: '보장 동작',
            description: '프레임워크가 어떤 동작을 깨지 않도록 보장하는지 보여줍니다.',
            tone: 'emerald',
          },
          {
            id: 'pr',
            label: 'PR',
            category: '설계 이유',
            description: '기능이 왜 변경됐고 리뷰에서 어떤 설계 논의가 있었는지 보여줍니다.',
            tone: 'violet',
          },
          {
            id: 'issue',
            label: 'Issue',
            category: '문제 상황',
            description:
              '실제 사용자가 어떤 문제를 겪었는지, 어떤 조건에서 버그가 났는지 보여줍니다.',
            tone: 'amber',
          },
          {
            id: 'release',
            label: 'Release Note',
            category: '버전 변화',
            description: '어떤 버전에서 무엇이 바뀌고 stable로 공개됐는지 보여줍니다.',
            tone: 'cyan',
          },
        ],
      },
    },
    sources: {
      eyebrow: '01 · five sources',
      title: 'GitHub에서는 5가지를 함께 읽습니다',
      description:
        '소스코드 독해는 파일을 여는 것에서 끝나지 않습니다. 구현, 보장, 설계 이유, 문제 상황, 버전 변화를 함께 읽어야 합니다.',
      labels: {
        shows: '이것이 보여주는 것',
        question: '읽을 때의 질문',
        examples: 'Next.js에서 찾을 예시',
      },
      cards: [
        {
          id: 'code',
          title: 'Code',
          subtitle: '현재 구현',
          shows: '현재 기능이 어떤 파일과 함수로 구현되어 있는지 보여줍니다.',
          question: '이 기능은 어디에서 시작되고, 어떤 파일로 이어지는가?',
          examples: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          tone: 'blue',
        },
        {
          id: 'test',
          title: 'Test',
          subtitle: '보장되는 동작',
          shows: '프레임워크가 어떤 동작을 깨지 않도록 보장하는지 보여줍니다.',
          question: '이 기능은 어떤 edge case와 regression을 막으려 하는가?',
          examples: ['action-handler.test.ts', 'e2e tests', 'integration tests'],
          tone: 'emerald',
        },
        {
          id: 'pr',
          title: 'PR',
          subtitle: '변경 이유와 리뷰 맥락',
          shows:
            '기능이 왜 추가되거나 변경됐고, 리뷰 과정에서 어떤 설계 논의가 있었는지 보여줍니다.',
          question: '왜 이 구현 방식이 선택되었는가?',
          examples: ['linked PR', 'review thread', 'implementation discussion'],
          tone: 'violet',
        },
        {
          id: 'issue',
          title: 'Issue',
          subtitle: '문제 상황과 예외 케이스',
          shows: '실제 사용자가 어떤 문제를 겪었고, 어떤 조건에서 버그가 발생했는지 보여줍니다.',
          question: '이 기능은 어떤 실제 문제를 해결하려고 했는가?',
          examples: ['bug report', 'reproduction', 'linked issue'],
          tone: 'amber',
        },
        {
          id: 'release',
          title: 'Release Note',
          subtitle: '버전별 변화',
          shows:
            '어떤 버전에서 무엇이 바뀌었고, stable 기준으로 어떤 변화가 공개됐는지 보여줍니다.',
          question: '이 설명은 어떤 버전 기준인가?',
          examples: ['release note', 'version tag', 'canary changelog'],
          tone: 'cyan',
        },
      ],
    },
    routine: {
      eyebrow: '02 · trace routine',
      title: '기능 하나는 이렇게 추적합니다',
      description:
        '예를 들어 Server Actions를 읽는다면, 공식 문서의 설명에서 시작해 코드, 테스트, 보안 처리, PR과 버전 차이까지 연결합니다.',
      topic: {
        label: '추적 주제',
        topic: 'Server Actions',
        coreQuestion:
          'form action submit은 Next.js 내부에서 어떤 요청 처리와 실행 흐름으로 연결되는가?',
        keywords: ['action-handler', 'POST', 'redirect', 'revalidation', 'csrf', 'encryption'],
      },
      labels: {
        what: '무엇을 하는가',
        why: '왜 필요한가',
        question: '확인할 질문',
        stepLabel: '단계를 선택해 상세 흐름을 확인하세요',
      },
      steps: [
        {
          id: 'docs',
          number: '01',
          title: '공식 문서에서 표면 동작 확인',
          what: 'Server Actions가 form submit과 mutation에서 어떻게 사용되는지 확인합니다.',
          why: '먼저 사용자가 보는 표면 API를 알아야 내부 흐름을 정확히 추적할 수 있습니다.',
          question: '이 기능은 사용자 코드에서 어떤 형태로 호출되는가?',
          tone: 'blue',
        },
        {
          id: 'search',
          number: '02',
          title: 'GitHub에서 action-handler 검색',
          what: 'Next.js 저장소에서 action request를 처리하는 진입점을 찾습니다.',
          why: 'Server Action POST 요청이 어디에서 구분되고 실행되는지 확인하기 위해서입니다.',
          question: 'action request는 어떤 조건에서 감지되는가?',
          tone: 'sky',
        },
        {
          id: 'test',
          number: '03',
          title: 'action-handler.test.ts 확인',
          what: 'action-handler와 연결된 테스트를 확인합니다.',
          why: 'Next.js가 어떤 동작을 보장하려는지 보기 위해서입니다.',
          question: 'redirect, form state, error, revalidation은 어떤 테스트로 보장되는가?',
          tone: 'emerald',
        },
        {
          id: 'csrf',
          number: '04',
          title: 'csrf-protection.ts 확인',
          what: 'Server Actions 요청의 보안 검사를 확인합니다.',
          why: 'mutation 요청은 보안 흐름과 연결되기 때문입니다.',
          question: '어떤 origin / host 조건에서 요청을 허용하거나 차단하는가?',
          tone: 'violet',
        },
        {
          id: 'encryption',
          number: '05',
          title: 'encryption.ts 확인',
          what: 'action payload와 관련된 암호화/복호화 흐름을 확인합니다.',
          why: 'Server Actions는 단순 함수 호출이 아니라 서버로 전달되는 action payload 흐름을 포함하기 때문입니다.',
          question: 'action과 bound args는 어떤 방식으로 전달되고 보호되는가?',
          tone: 'indigo',
        },
        {
          id: 'pr-issue',
          number: '06',
          title: '관련 PR / issue 검색',
          what: '기능이 추가되거나 수정된 배경을 확인합니다.',
          why: '코드만 보면 보이지 않는 설계 이유와 edge case 논의를 알 수 있습니다.',
          question: '이 구현은 어떤 문제를 해결하기 위해 바뀌었는가?',
          tone: 'amber',
        },
        {
          id: 'stable-canary',
          number: '07',
          title: 'stable tag와 canary 차이 확인',
          what: '공식 문서와 현재 브랜치의 코드가 같은 기준인지 확인합니다.',
          why: 'canary branch에는 다음 릴리스의 변경사항이 먼저 반영될 수 있기 때문입니다.',
          question: '내가 읽고 있는 설명과 코드는 같은 버전 기준인가?',
          tone: 'cyan',
        },
      ],
    },
    search: {
      eyebrow: '03 · search practice',
      title: '검색어를 잘 고르면 코드 입구가 보입니다',
      description:
        'Next.js 저장소가 커 보일수록 검색어가 중요합니다. 기능 이름보다 내부 파일명과 개념어를 함께 검색하면 진입점을 더 빨리 찾을 수 있습니다.',
      placeholder: '검색어를 입력해보세요',
      labels: {
        path: '파일 경로',
        role: '역할',
        firstPoint: '처음 읽을 포인트',
        test: '연결되는 테스트',
        nextFiles: '다음에 볼 파일',
      },
      results: [
        {
          id: 'action-handler',
          keyword: 'action-handler',
          path: 'packages/next/src/server/app-render/action-handler.ts',
          role: 'Server Action 요청 처리',
          firstPoint: 'action request 판별, action 실행, redirect / revalidate 연결',
          test: 'action-handler.test.ts',
          nextFiles: [
            'packages/next/src/server/app-render/csrf-protection.ts',
            'packages/next/src/server/app-render/encryption.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          tone: 'violet',
        },
        {
          id: 'cacheComponents',
          keyword: 'cacheComponents',
          path: 'Cache Components 관련 문서와 app-render 캐시 흐름',
          role: 'Next.js 16 캐싱 모델 진입점',
          firstPoint: "'use cache', cacheLife, cacheTag, dynamic rendering boundary",
          test: 'cache / revalidation 관련 테스트 검색',
          nextFiles: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          tone: 'emerald',
        },
        {
          id: 'create-component-tree',
          keyword: 'create-component-tree',
          path: 'packages/next/src/server/app-render/create-component-tree.tsx',
          role: 'App Router 서버 렌더링에서 component tree 구성',
          firstPoint:
            'layout, page, loading, error, parallel route가 component tree에 연결되는 방식',
          test: 'app router / layout / loading 관련 e2e 테스트',
          nextFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          ],
          tone: 'blue',
        },
        {
          id: 'router-reducer',
          keyword: 'router-reducer',
          path: 'packages/next/src/client/components/router-reducer',
          role: '클라이언트 라우터 상태 변경 처리',
          firstPoint: 'navigate, refresh, server patch action이 router state를 바꾸는 흐름',
          test: 'client navigation / router reducer 관련 테스트 검색',
          nextFiles: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/client/components/app-router-headers.ts',
          ],
          tone: 'cyan',
        },
        {
          id: 'next-app-loader',
          keyword: 'next-app-loader',
          path: 'packages/next/src/build/webpack/loaders/next-app-loader',
          role: 'app 디렉터리 라우팅 파일을 내부 entry / loader tree로 연결',
          firstPoint: 'page, layout, loading, error 파일 convention이 build entry로 변환되는 흐름',
          test: 'app dir build / route tree 관련 테스트 검색',
          nextFiles: [
            'packages/next/src/build/entries.ts',
            'packages/next/src/build/webpack-config.ts',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          tone: 'amber',
        },
        {
          id: 'flight-router-state',
          keyword: 'flight-router-state',
          path: 'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          role: 'loader tree를 클라이언트 router state가 이해할 수 있는 형태로 변환',
          firstPoint: 'segment tree와 flight router state가 어떻게 연결되는지 확인',
          test: 'app router navigation / RSC payload 관련 테스트 검색',
          nextFiles: [
            'packages/next/src/server/app-render/walk-tree-with-flight-router-state.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          tone: 'indigo',
        },
      ],
    },
    compare: {
      eyebrow: '04 · stable vs canary',
      title: 'stable과 canary는 용도가 다릅니다',
      description:
        'Next.js GitHub 저장소를 읽을 때는 어떤 기준의 코드를 보고 있는지 명시해야 합니다. 운영 기준과 최신 구현 탐색 기준은 다를 수 있습니다.',
      cautionLabel: '주의',
      banner:
        '학습 글이나 강의는 stable 기준을 명시하고, 최신 구현 탐색은 canary를 참고하되 문서와 차이를 확인합니다.',
      stable: {
        title: 'stable tag',
        items: [
          '현재 릴리스 기준',
          '실제 운영 기준 설명에 적합',
          '공식 문서와 맞춰 보기 좋음',
          '학습 글 작성 시 기준점으로 좋음',
        ],
        caution: '문서와 맞춰 설명하기 좋지만, 다음 변경사항은 아직 반영되지 않았을 수 있습니다.',
        pill: '운영 기준',
      },
      canary: {
        title: 'canary branch',
        items: [
          '다음 변경이 먼저 반영될 수 있음',
          '최신 구현 흐름 확인에 좋음',
          '문서와 다를 수 있으므로 주의',
          '최신 PR / commit 흐름을 따라가기 좋음',
        ],
        caution:
          '최신 흐름을 보기에 좋지만, stable 문서와 다를 수 있으므로 기준을 반드시 명시해야 합니다.',
        pill: '최신 흐름',
      },
    },
    mission: {
      eyebrow: '05 · your turn',
      title: '이제 직접 GitHub에서 찾아봅니다',
      description:
        '아래 미션은 Next.js 저장소를 처음 열었을 때 바로 수행할 수 있는 탐색 과제입니다.',
      checkLabel: '확인할 것',
      items: [
        {
          id: 'mission-1',
          title: 'App Router 서버 렌더링 입구 찾기',
          mission: 'create-component-tree.tsx를 찾아 App Router 서버 렌더링 입구를 확인하기',
          check: 'layout, page, loading, error가 component tree로 연결되는지 본다.',
        },
        {
          id: 'mission-2',
          title: 'Server Actions 코드와 테스트 함께 열기',
          mission: 'action-handler.ts와 action-handler.test.ts를 함께 열기',
          check: 'action request 판별, redirect, revalidation이 테스트로 보장되는지 본다.',
        },
        {
          id: 'mission-3',
          title: 'next-app-loader 흐름 확인하기',
          mission: 'next-app-loader가 app 디렉터리를 어떻게 entry로 바꾸는지 보기',
          check: '파일 convention이 build entry와 loader tree로 이어지는지 본다.',
        },
        {
          id: 'mission-4',
          title: '클라이언트 App Router 런타임 찾기',
          mission: 'client/components에서 app-router.tsx와 layout-router.tsx 찾기',
          check: 'navigation, layout persistence, router cache가 어디서 처리되는지 본다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이동',
      title: '다음: Next.js 소스코드 탐구 로드맵',
      description:
        'GitHub에서 코드, 테스트, PR, issue를 함께 읽는 방법을 익혔다면, 이제 전체 Next.js 소스코드 탐구 여정을 하나의 로드맵으로 정리합니다.',
      cta: '다음 페이지로 이동',
      href: '/roadmap',
    },
  },
  en: {
    hero: {
      badge: 'How to read the Next.js GitHub source',
      title: {
        lines: [
          { accent: 'Reading only the code', rest: '' },
          { accent: 'is reading only half', rest: '' },
        ],
      },
      highlight: [
        'Code shows the current implementation,',
        'tests show the guaranteed behavior,',
        'and PRs and issues show why it was designed that way.',
      ],
      description: [
        'Viewing the Next.js repo as a file list tells you "what code exists,"',
        'but easily misses "why it was built this way" and "what is guaranteed."',
        'So read code, tests, PRs, issues, and release notes as one connected flow.',
      ],
      primaryCta: 'See the five reading sources',
      secondaryCta: 'See the trace routine',
      flow: {
        title: 'Five sources as one flow',
        subtitle: 'Pick a step to see what each source shows',
        categoryLabel: 'Category',
        initialStepId: 'code',
        steps: [
          {
            id: 'code',
            label: 'Code',
            category: 'Current impl',
            description: 'Shows which files and functions implement the current feature.',
            tone: 'blue',
          },
          {
            id: 'test',
            label: 'Test',
            category: 'Guaranteed',
            description: 'Shows which behavior the framework guarantees not to break.',
            tone: 'emerald',
          },
          {
            id: 'pr',
            label: 'PR',
            category: 'Design reason',
            description:
              'Shows why a feature changed and what design discussion happened in review.',
            tone: 'violet',
          },
          {
            id: 'issue',
            label: 'Issue',
            category: 'Problem case',
            description:
              'Shows what problem real users hit and under what conditions a bug occurred.',
            tone: 'amber',
          },
          {
            id: 'release',
            label: 'Release Note',
            category: 'Version change',
            description: 'Shows what changed in which version and was released as stable.',
            tone: 'cyan',
          },
        ],
      },
    },
    sources: {
      eyebrow: '01 · five sources',
      title: 'On GitHub, read five sources together',
      description:
        'Source reading does not end at opening a file. Read implementation, guarantees, design reason, problem cases, and version changes together.',
      labels: {
        shows: 'What it shows',
        question: 'Question while reading',
        examples: 'Examples to find in Next.js',
      },
      cards: [
        {
          id: 'code',
          title: 'Code',
          subtitle: 'Current implementation',
          shows: 'Shows which files and functions implement the current feature.',
          question: 'Where does this feature start, and which files does it lead to?',
          examples: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          tone: 'blue',
        },
        {
          id: 'test',
          title: 'Test',
          subtitle: 'Guaranteed behavior',
          shows: 'Shows which behavior the framework guarantees not to break.',
          question: 'Which edge cases and regressions does this feature prevent?',
          examples: ['action-handler.test.ts', 'e2e tests', 'integration tests'],
          tone: 'emerald',
        },
        {
          id: 'pr',
          title: 'PR',
          subtitle: 'Change reason and review context',
          shows:
            'Shows why a feature was added or changed and what design discussion happened in review.',
          question: 'Why was this implementation chosen?',
          examples: ['linked PR', 'review thread', 'implementation discussion'],
          tone: 'violet',
        },
        {
          id: 'issue',
          title: 'Issue',
          subtitle: 'Problem cases and edge cases',
          shows: 'Shows what problem real users hit and under what conditions a bug occurred.',
          question: 'Which real problem did this feature try to solve?',
          examples: ['bug report', 'reproduction', 'linked issue'],
          tone: 'amber',
        },
        {
          id: 'release',
          title: 'Release Note',
          subtitle: 'Version changes',
          shows: 'Shows what changed in which version and was released as stable.',
          question: 'Which version is this description based on?',
          examples: ['release note', 'version tag', 'canary changelog'],
          tone: 'cyan',
        },
      ],
    },
    routine: {
      eyebrow: '02 · trace routine',
      title: 'Trace one feature like this',
      description:
        'To read Server Actions, start from the docs and connect code, tests, security handling, PRs, and version differences.',
      topic: {
        label: 'Trace topic',
        topic: 'Server Actions',
        coreQuestion:
          'What request handling and execution flow does a form action submit connect to inside Next.js?',
        keywords: ['action-handler', 'POST', 'redirect', 'revalidation', 'csrf', 'encryption'],
      },
      labels: {
        what: 'What you do',
        why: 'Why it matters',
        question: 'Question to ask',
        stepLabel: 'Pick a step to see the detail flow',
      },
      steps: [
        {
          id: 'docs',
          number: '01',
          title: 'Check surface behavior in the docs',
          what: 'Check how Server Actions are used in form submit and mutation.',
          why: 'You need the surface API users see first to trace the internal flow accurately.',
          question: 'In what shape is this feature called from user code?',
          tone: 'blue',
        },
        {
          id: 'search',
          number: '02',
          title: 'Search action-handler on GitHub',
          what: 'Find the entry point that handles the action request in the repo.',
          why: 'To check where the Server Action POST request is distinguished and executed.',
          question: 'Under what conditions is an action request detected?',
          tone: 'sky',
        },
        {
          id: 'test',
          number: '03',
          title: 'Check action-handler.test.ts',
          what: 'Check the tests connected to action-handler.',
          why: 'To see which behavior Next.js intends to guarantee.',
          question: 'Which tests guarantee redirect, form state, error, revalidation?',
          tone: 'emerald',
        },
        {
          id: 'csrf',
          number: '04',
          title: 'Check csrf-protection.ts',
          what: 'Check the security checks on Server Action requests.',
          why: 'Because mutation requests connect to a security flow.',
          question: 'Under which origin / host conditions is a request allowed or blocked?',
          tone: 'violet',
        },
        {
          id: 'encryption',
          number: '05',
          title: 'Check encryption.ts',
          what: 'Check the encryption/decryption flow around the action payload.',
          why: 'Because Server Actions include an action payload flow sent to the server, not just a function call.',
          question: 'How are the action and bound args transmitted and protected?',
          tone: 'indigo',
        },
        {
          id: 'pr-issue',
          number: '06',
          title: 'Search related PRs / issues',
          what: 'Check the background of why the feature was added or changed.',
          why: 'You learn design reasons and edge case discussion that code alone does not show.',
          question: 'Which problem did this implementation change to solve?',
          tone: 'amber',
        },
        {
          id: 'stable-canary',
          number: '07',
          title: 'Check stable tag vs canary',
          what: 'Check whether the docs and the current branch code are on the same baseline.',
          why: 'Because the canary branch may carry the next release changes first.',
          question: 'Are the description and the code I read on the same version baseline?',
          tone: 'cyan',
        },
      ],
    },
    search: {
      eyebrow: '03 · search practice',
      title: 'A good search keyword reveals the code entry',
      description:
        'The larger the repo seems, the more the keyword matters. Searching internal file names and concept terms together finds the entry faster than the feature name.',
      placeholder: 'Type a search keyword',
      labels: {
        path: 'File path',
        role: 'Role',
        firstPoint: 'First point to read',
        test: 'Connected test',
        nextFiles: 'Files to read next',
      },
      results: [
        {
          id: 'action-handler',
          keyword: 'action-handler',
          path: 'packages/next/src/server/app-render/action-handler.ts',
          role: 'Server Action request handling',
          firstPoint: 'action request detection, action execution, redirect / revalidate wiring',
          test: 'action-handler.test.ts',
          nextFiles: [
            'packages/next/src/server/app-render/csrf-protection.ts',
            'packages/next/src/server/app-render/encryption.ts',
            'packages/next/src/server/app-render/app-render.tsx',
          ],
          tone: 'violet',
        },
        {
          id: 'cacheComponents',
          keyword: 'cacheComponents',
          path: 'Cache Components docs and the app-render cache flow',
          role: 'Next.js 16 caching model entry point',
          firstPoint: "'use cache', cacheLife, cacheTag, dynamic rendering boundary",
          test: 'Search cache / revalidation tests',
          nextFiles: [
            'packages/next/src/server/app-render/dynamic-rendering.ts',
            'packages/next/src/server/app-render/cache-signal.ts',
            'packages/next/src/server/app-render/stale-time.ts',
          ],
          tone: 'emerald',
        },
        {
          id: 'create-component-tree',
          keyword: 'create-component-tree',
          path: 'packages/next/src/server/app-render/create-component-tree.tsx',
          role: 'Builds the component tree in App Router server rendering',
          firstPoint:
            'How layout, page, loading, error, parallel route connect into the component tree',
          test: 'app router / layout / loading e2e tests',
          nextFiles: [
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/server/app-render/has-loading-component-in-tree.tsx',
            'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          ],
          tone: 'blue',
        },
        {
          id: 'router-reducer',
          keyword: 'router-reducer',
          path: 'packages/next/src/client/components/router-reducer',
          role: 'Handles client router state changes',
          firstPoint: 'How navigate, refresh, server patch actions change router state',
          test: 'Search client navigation / router reducer tests',
          nextFiles: [
            'packages/next/src/client/components/app-router.tsx',
            'packages/next/src/client/components/layout-router.tsx',
            'packages/next/src/client/components/app-router-headers.ts',
          ],
          tone: 'cyan',
        },
        {
          id: 'next-app-loader',
          keyword: 'next-app-loader',
          path: 'packages/next/src/build/webpack/loaders/next-app-loader',
          role: 'Connects app directory routing files to internal entry / loader tree',
          firstPoint: 'How page, layout, loading, error conventions become a build entry',
          test: 'Search app dir build / route tree tests',
          nextFiles: [
            'packages/next/src/build/entries.ts',
            'packages/next/src/build/webpack-config.ts',
            'packages/next/src/server/app-render/create-component-tree.tsx',
          ],
          tone: 'amber',
        },
        {
          id: 'flight-router-state',
          keyword: 'flight-router-state',
          path: 'packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts',
          role: 'Converts the loader tree into a form the client router state understands',
          firstPoint: 'How the segment tree connects to the flight router state',
          test: 'Search app router navigation / RSC payload tests',
          nextFiles: [
            'packages/next/src/server/app-render/walk-tree-with-flight-router-state.tsx',
            'packages/next/src/server/app-render/app-render.tsx',
            'packages/next/src/client/components/app-router.tsx',
          ],
          tone: 'indigo',
        },
      ],
    },
    compare: {
      eyebrow: '04 · stable vs canary',
      title: 'stable and canary serve different purposes',
      description:
        'When reading the Next.js repo, state which baseline you are looking at. The production baseline and the latest-implementation baseline can differ.',
      cautionLabel: 'Caution',
      banner:
        'For articles and courses, state the stable baseline; for exploring the latest implementation, use canary but verify the difference from the docs.',
      stable: {
        title: 'stable tag',
        items: [
          'Current release baseline',
          'Good for explaining the production baseline',
          'Good for matching the official docs',
          'A good reference point for writing',
        ],
        caution: 'Good for matching the docs, but the next changes may not be reflected yet.',
        pill: 'Production baseline',
      },
      canary: {
        title: 'canary branch',
        items: [
          'The next changes may land first',
          'Good for checking the latest implementation',
          'May differ from the docs, so be careful',
          'Good for following the latest PR / commit flow',
        ],
        caution:
          'Great for the latest flow, but it may differ from the stable docs, so always state your baseline.',
        pill: 'Latest flow',
      },
    },
    mission: {
      eyebrow: '05 · your turn',
      title: 'Now find it yourself on GitHub',
      description:
        'These missions are exploration tasks you can do right after opening the Next.js repo for the first time.',
      checkLabel: 'What to check',
      items: [
        {
          id: 'mission-1',
          title: 'Find the App Router server render entry',
          mission: 'Find create-component-tree.tsx and check the App Router server render entry',
          check: 'See how layout, page, loading, error connect into the component tree.',
        },
        {
          id: 'mission-2',
          title: 'Open Server Actions code and test together',
          mission: 'Open action-handler.ts and action-handler.test.ts together',
          check:
            'See whether action request detection, redirect, revalidation are guaranteed by tests.',
        },
        {
          id: 'mission-3',
          title: 'Check the next-app-loader flow',
          mission: 'See how next-app-loader turns the app directory into an entry',
          check: 'See how file conventions lead to a build entry and loader tree.',
        },
        {
          id: 'mission-4',
          title: 'Find the client App Router runtime',
          mission: 'Find app-router.tsx and layout-router.tsx in client/components',
          check: 'See where navigation, layout persistence, and router cache are handled.',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Continue the journey',
      title: 'Next: Next.js Source Exploration Roadmap',
      description:
        'Now that you can read code, tests, PRs, and issues together on GitHub, organize the whole Next.js source exploration journey into one roadmap.',
      cta: 'Go to the next page',
      href: '/roadmap',
    },
  },
};
