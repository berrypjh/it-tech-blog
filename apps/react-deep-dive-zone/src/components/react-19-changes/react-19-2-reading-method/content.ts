import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from './tone';

export type IconKey =
  | 'database'
  | 'layers'
  | 'workflow'
  | 'gauge'
  | 'route'
  | 'compass'
  | 'sparkles'
  | 'server'
  | 'chart'
  | 'waves'
  | 'hash'
  | 'globe'
  | 'tag'
  | 'newspaper'
  | 'milestone'
  | 'git-commit'
  | 'search'
  | 'shield-check'
  | 'target'
  | 'check'
  | 'timer'
  | 'play-circle'
  | 'hourglass'
  | 'refresh'
  | 'activity'
  | 'book';

export type TimelineCard = {
  number: string;
  title: string;
  descriptionLines: [string, string];
  tone: ToneKey;
  iconKey: IconKey;
};

export type SupportQuestion = {
  body: string;
  iconKey: IconKey;
};

export type OverviewCard = {
  tone: ToneKey;
  title: string;
  descriptionLines: [string, string];
  iconKey: IconKey;
};

export type FlowStep = {
  tone: ToneKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type AbortState = {
  state: 'active' | 'aborted' | 'cleanup';
  label: string;
  body: string;
  tone: ToneKey;
};

export type PprStep = {
  number: string;
  tone: ToneKey;
  title: string;
  description: string;
  iconKey: IconKey;
  code?: string;
  codeLang?: 'HTML' | 'TSX' | 'JSON';
  pieces?: { label: string; body: string }[];
};

export type ResumeStep = {
  title: string;
  body: string;
  tone: ToneKey;
  iconKey: IconKey;
};

export type BatchStreamLine = { kind: 'server' | 'client'; body: string };

export type ExpansionCard = {
  tone: ToneKey;
  title: string;
  body: string;
  iconKey: IconKey;
  buttonLabel: string;
  buttonHref: string;
};

export type VersionRow = {
  version: string;
  versionTone: ToneKey;
  releasedAt: string;
  keyword: string;
  body: string;
  watch: string;
};

export type ReleaseStep = {
  number: string;
  title: string;
  body: string;
  iconKey: IconKey;
  tone: ToneKey;
};

export type Quiz = {
  number: string;
  question: string;
  options: { label: 'A' | 'B' | 'C' | 'D'; body: string }[];
  correct: 'A' | 'B' | 'C' | 'D';
};

export type LinkButton = { label: string; href: string };

export type After192Content = {
  hero: {
    badges: { label: string; tone: 'solid' | 'soft' }[];
    titleLines: [string, string];
    subtitleLines: [string, string, string];
    cards: TimelineCard[];
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportQuestions: SupportQuestion[];
  };
  overview: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: OverviewCard[];
  };
  cacheSignal: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    flowTitle: string;
    flow: FlowStep[];
    stateTitle: string;
    states: AbortState[];
    summary: string;
  };
  ppr: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PprStep[];
  };
  resume: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ResumeStep[];
  };
  batching: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    before: {
      title: string;
      serverLabel: string;
      serverLines: string[];
      clientLabel: string;
      clientBody: string;
    };
    after: {
      title: string;
      serverLabel: string;
      serverLines: string[];
      clientLabel: string;
      clientBody: string;
    };
    expectedTitle: string;
    expectedItems: string[];
  };
  additional: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ExpansionCard[];
  };
  versionTable: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: {
      version: string;
      releasedAt: string;
      keyword: string;
      body: string;
      watch: string;
    };
    rows: VersionRow[];
  };
  releaseDiff: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ReleaseStep[];
    checklistTitle: string;
    checklist: string[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    questions: Quiz[];
  };
  completeCTA: {
    badge: string;
    heading: string;
    description: string;
    primary: LinkButton;
    secondary: LinkButton;
    tertiary: LinkButton;
  };
};

const CACHE_CODE = `import { cache, cacheSignal } from "react";

const getPost = cache(async (id) => {
  const res = await fetch(\`/api/posts/\${id}\`);
  return res.json();
});

function usePost(id) {
  const signal = cacheSignal();

  signal.addEventListener("abort", () => {
    console.log("cache expired: abort request");
  });

  return getPost(id, { signal });
}`;

const PRERENDER_HTML = `<html>
  <head>
    ...
  </head>
  <body>
    <div id="app">
      <header />
      <main>
        <PostList />
      </main>
    </div>
  </body>
</html>`;

const ko: After192Content = {
  hero: {
    badges: [
      { label: 'React 19 학습 완성', tone: 'soft' },
      { label: '19.2 이후 변화 읽기', tone: 'solid' },
    ],
    titleLines: ['React 19.2 이후 변화는', '어떻게 읽어야 할까?'],
    subtitleLines: [
      '새 API를 하나씩 외우기보다,',
      '서버 렌더링·캐시 수명·성능 관측 모델이',
      '어디까지 넓어졌는지 봅니다.',
    ],
    cards: [
      {
        number: '01',
        title: 'cacheSignal',
        descriptionLines: ['캐시 수명 감지', '자동 취소 / 정리'],
        tone: 'cache',
        iconKey: 'database',
      },
      {
        number: '02',
        title: 'Partial Pre-rendering',
        descriptionLines: ['정적 shell +', '나중 resume'],
        tone: 'ppr',
        iconKey: 'layers',
      },
      {
        number: '03',
        title: 'SSR Suspense Batching',
        descriptionLines: ['reveal 타이밍을', '짧게 모아 조율'],
        tone: 'batching',
        iconKey: 'workflow',
      },
      {
        number: '04',
        title: 'Performance Tracks',
        descriptionLines: ['성능 관측성', '추적과 시각화'],
        tone: 'perf',
        iconKey: 'gauge',
      },
    ],
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      'React 19.2 변화는 왜 단순 기능 추가가 아니라',
      '운영 모델 확장으로 읽어야 할까?',
    ],
    supportQuestions: [
      { body: '서버 렌더링 모델 확장', iconKey: 'server' },
      { body: '캐시 수명 자원 관리', iconKey: 'database' },
      { body: '성능 관측성 향상', iconKey: 'gauge' },
      { body: 'resume 가능한 렌더링 모델', iconKey: 'refresh' },
    ],
  },
  overview: {
    number: '03',
    eyebrow: 'Overview',
    title: 'React 19.2 이후 확장 변화 한눈에 보기',
    description: '네 축이 동시에 움직였습니다. 캐시 수명·서버 렌더 모델·reveal 타이밍·성능 관측성.',
    cards: [
      {
        tone: 'cache',
        title: 'cacheSignal',
        descriptionLines: ['캐시 수명 감지', '자동 취소 / 정리'],
        iconKey: 'database',
      },
      {
        tone: 'ppr',
        title: 'Partial Pre-rendering',
        descriptionLines: ['정적 shell +', '나중에 resume'],
        iconKey: 'layers',
      },
      {
        tone: 'batching',
        title: 'SSR Suspense Batching',
        descriptionLines: ['여러 경계의 reveal', '타이밍을 조율'],
        iconKey: 'workflow',
      },
      {
        tone: 'perf',
        title: 'Performance Tracks',
        descriptionLines: ['성능 이벤트를 추적하고', '시각적으로 분석'],
        iconKey: 'gauge',
      },
    ],
  },
  cacheSignal: {
    number: '04',
    eyebrow: 'cacheSignal',
    title: 'cacheSignal 흐름',
    description:
      'cacheSignal은 캐시된 작업의 수명이 끝나는 순간과 취소 / 정리 로직을 직접 연결합니다.',
    code: { fileName: 'cache-example.tsx', langBadge: 'TSX', code: CACHE_CODE },
    flowTitle: 'cache → signal → 만료 감지 → 정리',
    flow: [
      { tone: 'cache', title: 'cache(fetch)', body: '캐시된 작업 정의', iconKey: 'database' },
      { tone: 'concept', title: 'cacheSignal()', body: '수명 신호 획득', iconKey: 'sparkles' },
      { tone: 'ppr', title: '캐시 lifetime 종료 감지', body: 'abort 이벤트', iconKey: 'hourglass' },
      {
        tone: 'stable',
        title: 'abort / cleanup 자동 실행',
        body: '자원 정리',
        iconKey: 'shield-check',
      },
    ],
    stateTitle: 'AbortSignal 상태',
    states: [
      { state: 'active', label: 'active', body: '캐시 유지', tone: 'cache' },
      { state: 'aborted', label: 'aborted', body: '만료 감지', tone: 'ppr' },
      { state: 'cleanup', label: 'cleanup', body: '정리 실행', tone: 'stable' },
    ],
    summary: 'cacheSignal은 캐시된 작업의 수명이 끝나는 시점과 취소/정리 로직을 연결합니다.',
  },
  ppr: {
    number: '05',
    eyebrow: 'Partial Pre-rendering',
    title: 'Partial Pre-rendering 서버 렌더 흐름',
    description:
      '정적 shell을 먼저 보내고, 나머지는 postponed state로 보관했다가 요청 시점에 resume합니다.',
    steps: [
      {
        number: '01',
        tone: 'cache',
        title: 'prerender',
        description: '서버에서 일부만 먼저 렌더링',
        iconKey: 'play-circle',
        code: PRERENDER_HTML,
        codeLang: 'HTML',
      },
      {
        number: '02',
        tone: 'concept',
        title: 'prelude + postponed state 저장',
        description: '정적 shell 반환 + 남은 상태/데이터/트리 저장',
        iconKey: 'database',
        pieces: [
          { label: '정적 shell HTML', body: '<html>...</html> shell만 전송' },
          { label: 'postponed state', body: 'JSON / binary로 직렬화' },
        ],
      },
      {
        number: '03',
        tone: 'ppr',
        title: '나중에 resume',
        description: '남은 부분을 이어서 렌더링 & 스트리밍 재개',
        iconKey: 'refresh',
        pieces: [
          { label: 'PostList', body: '실제 콘텐츠 시작' },
          { label: 'Post 1', body: '항목 렌더' },
          { label: 'Post 2', body: '항목 렌더' },
          { label: 'Post 3', body: '항목 렌더' },
        ],
      },
    ],
  },
  resume: {
    number: '06',
    eyebrow: 'Resume Timeline',
    title: 'resume / resumeAndPrerender 흐름',
    description:
      'prerender → postponed state → resume → 스트리밍 재개. 같은 렌더를 두 번 하지 않고 이어붙이는 흐름입니다.',
    steps: [
      {
        title: 'prerender',
        body: '초기 정적 렌더',
        tone: 'cache',
        iconKey: 'play-circle',
      },
      {
        title: 'postponed state',
        body: '서버에 저장',
        tone: 'concept',
        iconKey: 'database',
      },
      {
        title: 'resume',
        body: '요청 시점에 재개',
        tone: 'ppr',
        iconKey: 'refresh',
      },
      {
        title: '스트리밍 재개',
        body: '남은 콘텐츠 전송',
        tone: 'stable',
        iconKey: 'waves',
      },
    ],
  },
  batching: {
    number: '07',
    eyebrow: 'SSR Suspense Batching',
    title: 'SSR Suspense Boundary batching',
    description:
      '여러 Suspense Boundary가 풀리는 시점을 짧게 모아, 화면 reveal 타이밍을 더 자연스럽게 만듭니다.',
    before: {
      title: 'Before (개별)',
      serverLabel: '서버 스트림',
      serverLines: ['prerender A reveal', 'Boundary B reveal', 'Boundary C reveal'],
      clientLabel: 'Client',
      clientBody: '각 boundary가 따로따로 나타남',
    },
    after: {
      title: 'React 19.2 (짧게 모아 reveal)',
      serverLabel: '서버 스트림',
      serverLines: ['Boundary A + B + C', 'batch reveal'],
      clientLabel: 'Client',
      clientBody: '짧은 시간 안에 묶여 더 자연스럽게 표시',
    },
    expectedTitle: '기대 효과',
    expectedItems: ['화면 전환이 더 자연스러움', '깜빡임 감소', '사용자 경험 개선'],
  },
  additional: {
    number: '08',
    eyebrow: 'More Expansion Points',
    title: '추가 확장 포인트',
    description: '이 페이지에서 다 다루지 못한, 별도 추적할 만한 변화들입니다.',
    cards: [
      {
        tone: 'perf',
        title: 'Performance Tracks',
        body: '컴포넌트 렌더, Suspense reveal, 네트워크 이벤트 등을 추적하고 시각화할 수 있습니다.',
        iconKey: 'chart',
        buttonLabel: '자세히 보기',
        buttonHref: 'https://react.dev/blog',
      },
      {
        tone: 'concept',
        title: 'Node Web Streams',
        body: '서버 스트리밍 파이프라인이 더 안정적으로 구성되고, 런타임 제어가 가능해졌습니다.',
        iconKey: 'waves',
        buttonLabel: '자세히 보기',
        buttonHref: 'https://react.dev/blog',
      },
      {
        tone: 'batching',
        title: 'useId prefix 변화',
        body: '서버/클라이언트 간 일관성을 높이기 위한 ID prefix 조정 흐름이 개선됩니다.',
        iconKey: 'hash',
        buttonLabel: '자세히 보기',
        buttonHref: 'https://react.dev/blog',
      },
    ],
  },
  versionTable: {
    number: '09',
    eyebrow: 'Version Comparison',
    title: '19.0 / 19.2 / 19.2.6 버전 비교',
    description: '같은 React 19이라도 버전마다 다루는 층위가 다릅니다.',
    columns: {
      version: '버전',
      releasedAt: '출시 시점',
      keyword: '핵심 키워드',
      body: '주요 내용',
      watch: '무엇을 봐야 하나',
    },
    rows: [
      {
        version: '19.0',
        versionTone: 'cache',
        releasedAt: '2024.12',
        keyword: '기본 모델 안정화',
        body: 'Actions, use(), ref as prop, Metadata, Server Components 안정화',
        watch: 'API / 구조 / 컴포넌트 모델',
      },
      {
        version: '19.2',
        versionTone: 'ppr',
        releasedAt: '2025.04',
        keyword: '서버 렌더링 & 운영 모델 확장',
        body: 'cacheSignal, Partial Pre-rendering, SSR Suspense Batching, Performance Tracks',
        watch: '서버 렌더링 / 캐시 / 성능 관측',
      },
      {
        version: '19.2.6',
        versionTone: 'batching',
        releasedAt: '2025.05',
        keyword: '안정화 & 버그 수정',
        body: '호환성 개선, 성능/안정성 개선, 실서비스 관련 fix',
        watch: '안정 코드 / 실서비스 적용',
      },
    ],
  },
  releaseDiff: {
    number: '10',
    eyebrow: 'Reading Diffs',
    title: '릴리즈 노트와 소스 diff 읽기법',
    description: '다음 19.x, 20.x 변화를 누가 알려주기 전에 스스로 따라가는 5단계 루틴입니다.',
    steps: [
      {
        number: '01',
        title: '공식 블로그에서 변화의 의도 읽기',
        body: '왜 이 변화가 필요했는가? 문맥과 목표를 이해한다.',
        iconKey: 'newspaper',
        tone: 'cache',
      },
      {
        number: '02',
        title: '릴리즈 노트로 범위 좁히기',
        body: 'Breaking / New / Changes 범주를 확인한다.',
        iconKey: 'milestone',
        tone: 'concept',
      },
      {
        number: '03',
        title: 'GitHub tag 고정',
        body: '해당 버전 tag를 checkout해서 기준점을 만든다.',
        iconKey: 'tag',
        tone: 'ppr',
      },
      {
        number: '04',
        title: '변경된 파일 추적',
        body: 'git log / blame / diff로 핵심 파일을 찾는다.',
        iconKey: 'git-commit',
        tone: 'batching',
      },
      {
        number: '05',
        title: '이전 강의와 최신 코드 차이 구분',
        body: '개정된 감각도 구버전 설명을 그대로 믿지 않도록 분리한다.',
        iconKey: 'search',
        tone: 'perf',
      },
    ],
    checklistTitle: '종합 체크리스트',
    checklist: [
      '이 변화는 어떤 레이어를 바꾸는가?',
      'public API인가 내부 구조 변화인가?',
      '19.0 변화인가, 19.2 변화인가?',
      '실제 소스코드에서 어떤 파일을 보면 되는가?',
      '기존 학습 내용과 어디서 연결되는가?',
    ],
  },
  quiz: {
    number: '11',
    eyebrow: 'Final Quiz',
    title: '최종 퀴즈',
    description: '앞선 페이지의 핵심을 다시 한 번 떠올려 보세요.',
    questions: [
      {
        number: 'Q1',
        question: 'Activity는 어떤 문제를 해결하기 위해 등장했는가?',
        options: [
          { label: 'A', body: '상태 초기화 문제' },
          { label: 'B', body: '숨긴 UI를 버리지 않고 관리' },
          { label: 'C', body: '라우팅 속도 문제' },
          { label: 'D', body: 'CSS 애니메이션 문제' },
        ],
        correct: 'B',
      },
      {
        number: 'Q2',
        question: 'useEffectEvent는 dependency 회피 API인가?',
        options: [
          { label: 'A', body: '그렇다' },
          { label: 'B', body: '아니다. 이벤트성 로직 분리를 위한 API' },
          { label: 'C', body: '서버 설정에만 쓰인다' },
          { label: 'D', body: '정답이 알 수 없다' },
        ],
        correct: 'B',
      },
      {
        number: 'Q3',
        question: 'Partial Pre-rendering은 어떤 서버 렌더링 흐름을 가능하게 하나?',
        options: [
          { label: 'A', body: '전체 렌더를 미리 끝내는 방식' },
          { label: 'B', body: '정적 shell을 먼저 보내고 나중에 resume' },
          { label: 'C', body: '클라이언트 렌더만 빠르게 하는 방식' },
          { label: 'D', body: '데이터를 캐싱만 하는 방식' },
        ],
        correct: 'B',
      },
    ],
  },
  completeCTA: {
    badge: 'COMPLETE',
    heading: 'React 19 코드 변화 학습 완료',
    description:
      'React 19.2 이후 변화까지 모두 학습했습니다. 이제 최신 소스코드를 직접 탐험해 보세요!',
    primary: {
      label: '다음: 실전 소스코드 읽기 체크리스트',
      href: '/which-package',
    },
    secondary: {
      label: 'React 19 전체 변화 다시 보기',
      href: '/react-19-change-map',
    },
    tertiary: {
      label: '릴리즈 노트 읽기',
      href: 'https://github.com/facebook/react/releases',
    },
  },
};

const en: After192Content = {
  hero: {
    badges: [
      { label: 'React 19 course wrap-up', tone: 'soft' },
      { label: 'Reading after 19.2', tone: 'solid' },
    ],
    titleLines: ['How should we read', "React's changes after 19.2?"],
    subtitleLines: [
      'Rather than memorizing each new API,',
      'see how far the server-rendering, cache-lifetime,',
      'and performance-observation models have widened.',
    ],
    cards: [
      {
        number: '01',
        title: 'cacheSignal',
        descriptionLines: ['Cache lifetime detection', 'Auto-abort / cleanup'],
        tone: 'cache',
        iconKey: 'database',
      },
      {
        number: '02',
        title: 'Partial Pre-rendering',
        descriptionLines: ['Static shell +', 'resume later'],
        tone: 'ppr',
        iconKey: 'layers',
      },
      {
        number: '03',
        title: 'SSR Suspense Batching',
        descriptionLines: ['Coordinate reveal timing', 'in short windows'],
        tone: 'batching',
        iconKey: 'workflow',
      },
      {
        number: '04',
        title: 'Performance Tracks',
        descriptionLines: ['Performance observability', 'Tracing & visualization'],
        tone: 'perf',
        iconKey: 'gauge',
      },
    ],
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'Why should React 19.2 changes be read as an operation-model expansion,',
      'not just a list of new APIs?',
    ],
    supportQuestions: [
      { body: 'Server-rendering model expansion', iconKey: 'server' },
      { body: 'Cache lifetime resource management', iconKey: 'database' },
      { body: 'Performance observability', iconKey: 'gauge' },
      { body: 'Resumable rendering model', iconKey: 'refresh' },
    ],
  },
  overview: {
    number: '03',
    eyebrow: 'Overview',
    title: 'At a glance: post-19.2 expansion',
    description:
      'Four axes moved together: cache lifetime, server-render model, reveal timing, and observability.',
    cards: [
      {
        tone: 'cache',
        title: 'cacheSignal',
        descriptionLines: ['Cache lifetime detection', 'Auto-abort / cleanup'],
        iconKey: 'database',
      },
      {
        tone: 'ppr',
        title: 'Partial Pre-rendering',
        descriptionLines: ['Static shell +', 'resume later'],
        iconKey: 'layers',
      },
      {
        tone: 'batching',
        title: 'SSR Suspense Batching',
        descriptionLines: ['Coordinate reveal timing', 'across boundaries'],
        iconKey: 'workflow',
      },
      {
        tone: 'perf',
        title: 'Performance Tracks',
        descriptionLines: ['Trace performance events', 'and visualize them'],
        iconKey: 'gauge',
      },
    ],
  },
  cacheSignal: {
    number: '04',
    eyebrow: 'cacheSignal',
    title: 'cacheSignal flow',
    description:
      "cacheSignal ties the moment a cached job's lifetime ends to your cancel / cleanup logic directly.",
    code: { fileName: 'cache-example.tsx', langBadge: 'TSX', code: CACHE_CODE },
    flowTitle: 'cache → signal → expiry → cleanup',
    flow: [
      { tone: 'cache', title: 'cache(fetch)', body: 'Define cached job', iconKey: 'database' },
      { tone: 'concept', title: 'cacheSignal()', body: 'Get lifetime signal', iconKey: 'sparkles' },
      {
        tone: 'ppr',
        title: 'Detect cache expiry',
        body: 'abort event fires',
        iconKey: 'hourglass',
      },
      {
        tone: 'stable',
        title: 'Auto abort / cleanup',
        body: 'Free resources',
        iconKey: 'shield-check',
      },
    ],
    stateTitle: 'AbortSignal states',
    states: [
      { state: 'active', label: 'active', body: 'Cache alive', tone: 'cache' },
      { state: 'aborted', label: 'aborted', body: 'Expiry detected', tone: 'ppr' },
      { state: 'cleanup', label: 'cleanup', body: 'Cleanup runs', tone: 'stable' },
    ],
    summary: "cacheSignal connects when a cached job's lifetime ends to your cancel/cleanup logic.",
  },
  ppr: {
    number: '05',
    eyebrow: 'Partial Pre-rendering',
    title: 'Partial Pre-rendering server flow',
    description:
      'Send the static shell first, then hold the rest as postponed state, and resume on request.',
    steps: [
      {
        number: '01',
        tone: 'cache',
        title: 'prerender',
        description: 'Server renders the static part first',
        iconKey: 'play-circle',
        code: PRERENDER_HTML,
        codeLang: 'HTML',
      },
      {
        number: '02',
        tone: 'concept',
        title: 'Save prelude + postponed state',
        description: 'Return static shell + keep remaining state / data / tree',
        iconKey: 'database',
        pieces: [
          { label: 'Static shell HTML', body: 'Just the shell goes out' },
          { label: 'Postponed state', body: 'Serialized JSON / binary' },
        ],
      },
      {
        number: '03',
        tone: 'ppr',
        title: 'Resume later',
        description: 'Continue the remaining parts and resume streaming',
        iconKey: 'refresh',
        pieces: [
          { label: 'PostList', body: 'Actual content begins' },
          { label: 'Post 1', body: 'Item render' },
          { label: 'Post 2', body: 'Item render' },
          { label: 'Post 3', body: 'Item render' },
        ],
      },
    ],
  },
  resume: {
    number: '06',
    eyebrow: 'Resume Timeline',
    title: 'resume / resumeAndPrerender timeline',
    description:
      'prerender → postponed state → resume → streaming continues. Without re-rendering, just continue.',
    steps: [
      {
        title: 'prerender',
        body: 'Initial static render',
        tone: 'cache',
        iconKey: 'play-circle',
      },
      {
        title: 'postponed state',
        body: 'Saved on the server',
        tone: 'concept',
        iconKey: 'database',
      },
      {
        title: 'resume',
        body: 'Continued at request time',
        tone: 'ppr',
        iconKey: 'refresh',
      },
      {
        title: 'Streaming continues',
        body: 'The rest is streamed',
        tone: 'stable',
        iconKey: 'waves',
      },
    ],
  },
  batching: {
    number: '07',
    eyebrow: 'SSR Suspense Batching',
    title: 'SSR Suspense Boundary batching',
    description:
      'Multiple Suspense boundaries are revealed in a short window, making the screen reveal feel more natural.',
    before: {
      title: 'Before (individual)',
      serverLabel: 'Server stream',
      serverLines: ['prerender A reveal', 'Boundary B reveal', 'Boundary C reveal'],
      clientLabel: 'Client',
      clientBody: 'Each boundary pops up separately',
    },
    after: {
      title: 'React 19.2 (batched reveal)',
      serverLabel: 'Server stream',
      serverLines: ['Boundary A + B + C', 'batch reveal'],
      clientLabel: 'Client',
      clientBody: 'Grouped reveal feels much more natural',
    },
    expectedTitle: 'Expected effects',
    expectedItems: ['Smoother screen transitions', 'Less flicker', 'Better user experience'],
  },
  additional: {
    number: '08',
    eyebrow: 'More Expansion Points',
    title: 'More expansion points',
    description: 'Other 19.2-era expansions worth following on your own.',
    cards: [
      {
        tone: 'perf',
        title: 'Performance Tracks',
        body: 'Trace and visualize component renders, Suspense reveals, network events, and more.',
        iconKey: 'chart',
        buttonLabel: 'See more',
        buttonHref: 'https://react.dev/blog',
      },
      {
        tone: 'concept',
        title: 'Node Web Streams',
        body: 'Server-streaming pipelines become more stable, and runtime control is improved.',
        iconKey: 'waves',
        buttonLabel: 'See more',
        buttonHref: 'https://react.dev/blog',
      },
      {
        tone: 'batching',
        title: 'useId prefix changes',
        body: 'ID prefix adjustment for better server/client consistency is improved.',
        iconKey: 'hash',
        buttonLabel: 'See more',
        buttonHref: 'https://react.dev/blog',
      },
    ],
  },
  versionTable: {
    number: '09',
    eyebrow: 'Version Comparison',
    title: '19.0 / 19.2 / 19.2.6 version comparison',
    description: 'Same React 19, but each version touches a different layer.',
    columns: {
      version: 'Version',
      releasedAt: 'Released',
      keyword: 'Keyword',
      body: 'Main contents',
      watch: 'What to watch',
    },
    rows: [
      {
        version: '19.0',
        versionTone: 'cache',
        releasedAt: '2024.12',
        keyword: 'Base model stabilization',
        body: 'Actions, use(), ref as prop, Metadata, Server Components stable',
        watch: 'API / structure / component model',
      },
      {
        version: '19.2',
        versionTone: 'ppr',
        releasedAt: '2025.04',
        keyword: 'Server-rendering & operations expansion',
        body: 'cacheSignal, Partial Pre-rendering, SSR Suspense Batching, Performance Tracks',
        watch: 'Server rendering / cache / observability',
      },
      {
        version: '19.2.6',
        versionTone: 'batching',
        releasedAt: '2025.05',
        keyword: 'Stabilization & bug fixes',
        body: 'Compatibility, performance, stability, and production-related fixes',
        watch: 'Stable code / production adoption',
      },
    ],
  },
  releaseDiff: {
    number: '10',
    eyebrow: 'Reading Diffs',
    title: 'How to read release notes and source diffs',
    description:
      'A 5-step routine to track the next 19.x / 20.x changes yourself, before anyone tells you.',
    steps: [
      {
        number: '01',
        title: 'Read the intent on the official blog',
        body: 'Why was this needed? Understand the context and goal.',
        iconKey: 'newspaper',
        tone: 'cache',
      },
      {
        number: '02',
        title: 'Narrow with release notes',
        body: 'Check Breaking / New / Changes categories.',
        iconKey: 'milestone',
        tone: 'concept',
      },
      {
        number: '03',
        title: 'Pin a GitHub tag',
        body: "Check out that version's tag as a baseline.",
        iconKey: 'tag',
        tone: 'ppr',
      },
      {
        number: '04',
        title: 'Track changed files',
        body: 'Find core files via git log / blame / diff.',
        iconKey: 'git-commit',
        tone: 'batching',
      },
      {
        number: '05',
        title: 'Separate old course vs latest code',
        body: "Don't blindly trust an older explanation as still current.",
        iconKey: 'search',
        tone: 'perf',
      },
    ],
    checklistTitle: 'Summary checklist',
    checklist: [
      'Which layer does this change affect?',
      'Public API or internal structure?',
      'A 19.0 change or a 19.2 change?',
      'Which files in the source should I open?',
      "Where does it connect to what I've already learned?",
    ],
  },
  quiz: {
    number: '11',
    eyebrow: 'Final Quiz',
    title: 'Final quiz',
    description: 'Recall the core idea of each page one more time.',
    questions: [
      {
        number: 'Q1',
        question: 'What problem did Activity emerge to solve?',
        options: [
          { label: 'A', body: 'State reset problems' },
          { label: 'B', body: 'Manage hidden UI without throwing it away' },
          { label: 'C', body: 'Routing speed' },
          { label: 'D', body: 'CSS animations' },
        ],
        correct: 'B',
      },
      {
        number: 'Q2',
        question: 'Is useEffectEvent a dependency-dodging API?',
        options: [
          { label: 'A', body: 'Yes' },
          { label: 'B', body: 'No — an API to separate event-like logic' },
          { label: 'C', body: 'Only for server config' },
          { label: 'D', body: 'Unknown' },
        ],
        correct: 'B',
      },
      {
        number: 'Q3',
        question: 'What server-rendering flow does Partial Pre-rendering enable?',
        options: [
          { label: 'A', body: 'Finish the entire render up-front' },
          { label: 'B', body: 'Send the static shell first, then resume later' },
          { label: 'C', body: 'Only make client rendering faster' },
          { label: 'D', body: 'Only cache data' },
        ],
        correct: 'B',
      },
    ],
  },
  completeCTA: {
    badge: 'COMPLETE',
    heading: 'React 19 source-reading course complete',
    description:
      "You've covered the React 19 changes through 19.2 and beyond. Now go explore the latest source on your own.",
    primary: {
      label: 'Next: Source-reading checklist',
      href: '/which-package',
    },
    secondary: {
      label: 'Replay the React 19 change map',
      href: '/react-19-change-map',
    },
    tertiary: {
      label: 'Open the release notes',
      href: 'https://github.com/facebook/react/releases',
    },
  },
};

export const after192Content: Record<Locale, After192Content> = { ko, en };
