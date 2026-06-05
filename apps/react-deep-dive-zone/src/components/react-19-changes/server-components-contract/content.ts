import type { Locale } from '@it-tech-blog/preferences';

import type { BoundaryKey } from './tone';

export type IconKey =
  | 'server'
  | 'monitor'
  | 'braces'
  | 'database'
  | 'package'
  | 'workflow'
  | 'route'
  | 'compass'
  | 'search'
  | 'sparkles'
  | 'cloud'
  | 'shield-check'
  | 'mouse-click'
  | 'play-circle'
  | 'globe'
  | 'split'
  | 'plug'
  | 'hammer'
  | 'settings'
  | 'network'
  | 'hard-drive'
  | 'folder'
  | 'target'
  | 'layers';

export type SupportQuestion = {
  label: string;
  body: string;
  iconKey: IconKey;
};

export type BoundaryCard = {
  boundary: BoundaryKey;
  title: string;
  caption: string;
  items: string[];
  iconKey: IconKey;
};

export type DefinitionCard = {
  boundary: BoundaryKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ModuleTreeNode = {
  indent: number;
  label: string;
  kind: 'server' | 'client' | 'action' | 'boundary-note';
};

export type LegendItem = { tag: string; meaning: string; kind: 'server' | 'client' | 'boundary' };

export type FlowStep = {
  boundary: BoundaryKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type ResponsibilityItem = { boundary: BoundaryKey; body: string };

export type ExplorerFile = {
  key: string;
  fileName: string;
  kind: 'server' | 'client' | 'action';
  analysis: {
    type: string;
    boundary: string;
    bundle: string;
    runtime: string;
    feature: string;
  };
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  boundary: BoundaryKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type LinkButton = { label: string; href: string };

export type ServerComponentsContractContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    subtitleLines: [string, string];
    diagram: {
      title: string;
      cards: BoundaryCard[];
      boundaryLabels: {
        useClient: { primary: string; secondary: string };
        useServer: { primary: string; secondary: string };
      };
      footer: string;
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportQuestions: SupportQuestion[];
  };
  definition: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: DefinitionCard[];
  };
  useClient: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    treeTitle: string;
    tree: ModuleTreeNode[];
    explanationTitle: string;
    explanationPoints: string[];
    legendTitle: string;
    legendItems: LegendItem[];
  };
  useServer: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'TS'; code: string };
    flowTitle: string;
    flow: FlowStep[];
  };
  callFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
  };
  reactServerExport: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    descriptionCardTitle: string;
    descriptionCardBody: string;
    code: { fileName: string; langBadge: 'JSON'; code: string };
    explanationTitle: string;
    explanationPoints: string[];
    note: string;
  };
  frameworkBoundary: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    reactCardTitle: string;
    reactItems: ResponsibilityItem[];
    centerLabel: string;
    centerSubLabel: string;
    frameworkCardTitle: string;
    frameworkItems: ResponsibilityItem[];
  };
  explorer: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    projectStructureTitle: string;
    projectStructure: ModuleTreeNode[];
    fileSelectionTitle: string;
    analysisTitle: string;
    defaultFileKey: string;
    files: ExplorerFile[];
    ruleSummaryTitle: string;
    rules: string[];
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: Mission[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextCTA: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    primary: LinkButton;
    secondary: LinkButton[];
  };
};

const ko: ServerComponentsContractContent = {
  hero: {
    badge: 'React 19 변화 · 7/10단계',
    titleLines: ['Server Components는', 'React 19에서 어떤 경계와', '계약을 안정화했나?'],
    subtitleLines: [
      '핵심은 서버에서 실행되는 컴포넌트가 아니라,',
      '서버와 클라이언트의 경계를 어떻게 선언하고 전달하는가입니다.',
    ],
    diagram: {
      title: 'React 19의 경계 모델',
      cards: [
        {
          boundary: 'server',
          title: 'Server Component',
          caption: '서버에서 실행',
          items: ['DB / filesystem 접근', '렌더 결과만 전송'],
          iconKey: 'server',
        },
        {
          boundary: 'client',
          title: 'Client Component',
          caption: '클라이언트에서 실행',
          items: ['상태 / 이벤트 / Effects', '브라우저 API 접근'],
          iconKey: 'monitor',
        },
        {
          boundary: 'function',
          title: 'Server Function',
          caption: '서버에서 실행되는 함수',
          items: ['서버 리소스 접근', '호출은 참조로 전달'],
          iconKey: 'braces',
        },
      ],
      boundaryLabels: {
        useClient: { primary: '경계', secondary: `'use client'` },
        useServer: { primary: '호출 참조', secondary: `'use server'` },
      },
      footer: 'React 19의 경계 모델',
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      'React 19는 서버와 클라이언트 코드의 경계를',
      '어떤 문법과 패키지 계약으로 표현할까?',
    ],
    supportQuestions: [
      { label: '경계 선언', body: `'use client' / 'use server'`, iconKey: 'split' },
      { label: '참조 전달', body: 'Server Function Reference', iconKey: 'route' },
      { label: '패키지 계약', body: 'react-server export condition', iconKey: 'package' },
      { label: '책임 분리', body: 'React vs Framework', iconKey: 'workflow' },
    ],
  },
  definition: {
    number: '03',
    eyebrow: 'Definition',
    title: 'Server Component란 무엇인가?',
    description:
      'Server Component는 단지 "서버에서 실행되는 컴포넌트"가 아니라, 직렬화·전송·번들 측면에서 다른 컴포넌트입니다.',
    cards: [
      {
        boundary: 'server',
        title: '서버에서 실행',
        body: '요청 시 서버에서 렌더되고, 결과를 직렬화해 전송합니다.',
        iconKey: 'server',
      },
      {
        boundary: 'function',
        title: 'DB / filesystem 접근 가능',
        body: '데이터베이스, 파일시스템 등 서버 리소스를 직접 사용할 수 있습니다.',
        iconKey: 'database',
      },
      {
        boundary: 'react',
        title: '클라이언트 bundle에 포함되지 않음',
        body: '브라우저로 전송되지 않으며 번들 크기에 영향을 주지 않습니다.',
        iconKey: 'package',
      },
    ],
  },
  useClient: {
    number: '04',
    eyebrow: "'use client'",
    title: "'use client' 경계: 클라이언트 컴포넌트 진입점",
    description:
      "`'use client'`가 선언된 파일을 기준으로 그 아래는 모두 클라이언트 모듈 경계가 됩니다.",
    treeTitle: '모듈 트리',
    tree: [
      { indent: 0, label: 'PostPage.server.tsx (Server Component)', kind: 'server' },
      { indent: 1, label: '├─ Article.server.tsx (Server Component)', kind: 'server' },
      { indent: 1, label: '└─ CommentEditor.client.tsx (Client Component)', kind: 'client' },
      { indent: 2, label: "   ↑ 'use client' 선언으로 경계 시작", kind: 'boundary-note' },
    ],
    explanationTitle: '설명',
    explanationPoints: [
      "'use client'가 선언된 파일부터 하위는 모두 클라이언트 경계입니다.",
      '이 경계를 기준으로 클라이언트 참조와 필요한 코드만 번들에 포함됩니다.',
      '서버 컴포넌트는 경계 너머의 클라이언트 컴포넌트를 사용할 수 있습니다.',
    ],
    legendTitle: '범례',
    legendItems: [
      { tag: '.server.tsx', meaning: '서버 컴포넌트', kind: 'server' },
      { tag: '.client.tsx', meaning: '클라이언트 컴포넌트', kind: 'client' },
      { tag: 'Boundary', meaning: '서버와 클라이언트 사이 경계', kind: 'boundary' },
    ],
  },
  useServer: {
    number: '05',
    eyebrow: "'use server'",
    title: "'use server' 경계: 서버 함수 선언",
    description:
      "`'use server'`로 표시한 함수는 클라이언트에서 호출되어도 본문은 서버에서 실행됩니다. 클라이언트에는 참조만 전달됩니다.",
    code: {
      fileName: 'actions.ts',
      langBadge: 'TS',
      code: `"use server";

export async function saveComment(formData: FormData) {
  // 서버 리소스 접근 가능
  const content = formData.get("content");

  await db.comment.create({
    data: { content },
  });

  revalidatePath("/post");
  return { ok: true };
}`,
    },
    flowTitle: '서버 함수 호출 흐름',
    flow: [
      {
        boundary: 'client',
        title: 'Client UI',
        body: '버튼 클릭 등',
        iconKey: 'mouse-click',
      },
      {
        boundary: 'contract',
        title: 'Server Function Reference 전달',
        body: '함수 코드가 아닌 참조만 전송',
        iconKey: 'route',
      },
      {
        boundary: 'server',
        title: '서버에서 실행',
        body: 'DB / 파일 / API',
        iconKey: 'server',
      },
      {
        boundary: 'contract',
        title: '결과 직렬화',
        body: '클라이언트로 전달',
        iconKey: 'network',
      },
      {
        boundary: 'function',
        title: 'UI 업데이트 & 반영',
        body: '클라이언트 UI 갱신',
        iconKey: 'sparkles',
      },
    ],
  },
  callFlow: {
    number: '06',
    eyebrow: 'Server Function Call',
    title: 'Server Function 호출',
    description:
      'Server Function의 핵심은 “함수 코드를 보내는 것이 아니라 참조를 보낸다”는 점입니다.',
    steps: [
      {
        boundary: 'client',
        title: 'Client UI',
        body: '사용자 상호작용으로 Server Function을 호출',
        iconKey: 'mouse-click',
      },
      {
        boundary: 'contract',
        title: 'Reference 전달',
        body: '함수 코드를 전송하는 것이 아니라 참조(Reference)를 전송',
        iconKey: 'route',
      },
      {
        boundary: 'server',
        title: '서버 실행',
        body: '서버에서 함수가 실행되고 결과가 만들어짐',
        iconKey: 'server',
      },
      {
        boundary: 'function',
        title: '결과 반영',
        body: '결과가 직렬화되어 클라이언트로 전송, UI가 갱신됨',
        iconKey: 'sparkles',
      },
    ],
  },
  reactServerExport: {
    number: '07',
    eyebrow: 'Package Contract',
    title: 'react-server export condition',
    description:
      '라이브러리가 서버/클라이언트별로 다른 빌드를 제공할 수 있도록, package.json의 exports에 새로운 조건을 둡니다.',
    descriptionCardTitle: '왜 필요한가?',
    descriptionCardBody:
      '라이브러리가 서버 전용 번들을 따로 제공할 수 있도록 React 19가 조건부 export 계약을 정리합니다.',
    code: {
      fileName: 'package.json · 발췌',
      langBadge: 'JSON',
      code: `{
  "name": "my-lib",
  "exports": {
    ".": {
      "react-server": "./dist/server.js",
      "default": "./dist/client.js"
    }
  }
}`,
    },
    explanationTitle: `'react-server' 조건이 매칭되면 서버 전용 구현을 사용합니다.`,
    explanationPoints: [
      '서버 번들에서는 서버 런타임에 맞는 코드 사용',
      '클라이언트에서는 default 사용',
      '더 작은 번들과 더 명확한 책임 분리 가능',
    ],
    note: 'Node.js 조건부 exports와 유사한 개념',
  },
  frameworkBoundary: {
    number: '08',
    eyebrow: 'React × Framework',
    title: '프레임워크 API와 React API의 경계',
    description:
      'React 19는 RSC의 “경계와 계약”을 정의하고, 프레임워크는 그 위에서 번들·전송·라우팅·캐싱을 구현합니다.',
    reactCardTitle: 'React가 제공하는 것 (핵심 모델)',
    reactItems: [
      { boundary: 'react', body: 'Server Components 개념' },
      { boundary: 'react', body: "'use client', 'use server' directives" },
      { boundary: 'react', body: 'Server Function 참조 모델' },
      { boundary: 'react', body: '경계 기반 렌더링 & 직렬화 계약' },
      { boundary: 'react', body: 'react-server export condition' },
    ],
    centerLabel: 'RSC',
    centerSubLabel: '책임 분리',
    frameworkCardTitle: '프레임워크가 구현하는 것',
    frameworkItems: [
      { boundary: 'framework', body: '번들러 구성 / 코드 분할 전략' },
      { boundary: 'framework', body: 'transport 네트워크 프로토콜' },
      { boundary: 'framework', body: '라우팅 / 데이터 로딩 통합' },
      { boundary: 'framework', body: '캐싱 전략' },
      { boundary: 'framework', body: '배포 / 런타임 환경 / 에러 처리' },
    ],
  },
  explorer: {
    number: '09',
    eyebrow: 'Module Boundary Explorer',
    title: 'Module Boundary Explorer',
    description:
      '파일을 선택하면 그 파일이 어디서 실행되는 모듈인지, 어느 번들에 들어가는지 한눈에 확인할 수 있습니다.',
    projectStructureTitle: '프로젝트 구조',
    projectStructure: [
      { indent: 0, label: 'App.server.tsx', kind: 'server' },
      { indent: 1, label: '├─ Header.server.tsx', kind: 'server' },
      { indent: 1, label: '├─ Editor.client.tsx', kind: 'client' },
      { indent: 1, label: '└─ actions.ts', kind: 'action' },
    ],
    fileSelectionTitle: '파일 선택',
    analysisTitle: '분석 결과',
    defaultFileKey: 'editor',
    files: [
      {
        key: 'header',
        fileName: 'Header.server.tsx',
        kind: 'server',
        analysis: {
          type: '서버 컴포넌트',
          boundary: '서버 경계 (기본)',
          bundle: '클라이언트 번들 미포함',
          runtime: '서버',
          feature: 'DB / 파일 / 비동기 데이터 접근',
        },
      },
      {
        key: 'editor',
        fileName: 'Editor.client.tsx',
        kind: 'client',
        analysis: {
          type: '클라이언트 컴포넌트',
          boundary: `'use client' 선언 파일`,
          bundle: '클라이언트 번들 포함',
          runtime: '브라우저',
          feature: '상태, 이벤트, 훅 사용 가능',
        },
      },
      {
        key: 'actions',
        fileName: 'actions.ts',
        kind: 'action',
        analysis: {
          type: 'Server Function',
          boundary: `'use server' 선언 모듈`,
          bundle: '참조만 클라이언트로 전달',
          runtime: '서버',
          feature: '서버 리소스 접근, 직렬화된 결과 반환',
        },
      },
    ],
    ruleSummaryTitle: '핵심 규칙 요약',
    rules: [
      '서버 → 클라이언트는 경계를 넘어 참조로 전달',
      '클라이언트 → 서버는 Server Function 참조 호출',
      '경계는 파일 단위로 시작된다',
    ],
  },
  mission: {
    number: '10',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '경계 / 함수 / 책임 분리를 직접 짚어보며 RSC의 모델을 손에 익혀 봅니다.',
    missions: [
      {
        number: '01',
        title: `'use client'와 'use server'를 직접 비교한다`,
        helper: '둘의 목적과 적용 범위가 다릅니다.',
        iconKey: 'split',
      },
      {
        number: '02',
        title: 'Server Component와 Server Function을 구분한다',
        helper: '컴포넌트는 렌더링, 함수는 실행 계약입니다.',
        iconKey: 'braces',
      },
      {
        number: '03',
        title: 'React가 정한 경계와 프레임워크 구현을 분리한다',
        helper: '책임을 나누어 읽는 습관을 들이기',
        iconKey: 'workflow',
      },
      {
        number: '04',
        title: 'react-server export condition 예제를 코드로 확인한다',
        helper: '라이브러리 관점의 이점 파악',
        iconKey: 'package',
      },
    ],
  },
  takeaways: {
    number: '11',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        boundary: 'server',
        title: 'React 19는 서버-클라이언트 경계 표현을 안정화했다.',
        body: `'use client'로 경계를 선언하고, 참조 기반으로 필요한 코드만 전달합니다.`,
        iconKey: 'shield-check',
      },
      {
        number: '02',
        boundary: 'function',
        title: `'use client'와 'use server'는 역할이 다르다.`,
        body: `'use client'는 경계 선언, 'use server'는 서버 함수 선언입니다.`,
        iconKey: 'split',
      },
      {
        number: '03',
        boundary: 'framework',
        title: 'RSC는 React와 프레임워크 책임을 구분해서 읽어야 한다.',
        body: 'React는 계약을 정의하고, 프레임워크는 이를 구현하고 최적화합니다.',
        iconKey: 'workflow',
      },
    ],
  },
  nextCTA: {
    eyebrow: '다음 단계로',
    titleLines: ['다음:', 'Activity는 숨긴 UI를 어떻게 관리할까?'],
    description:
      '다음 페이지에서는 React 19.2의 Activity가 숨겨진 UI의 상태와 우선순위를 어떻게 관리하는지 살펴봅니다.',
    primary: {
      label: '다음: Activity는 숨긴 UI를 어떻게 관리할까?',
      href: '/activity-hidden-ui',
    },
    secondary: [
      { label: '경계 다이어그램 다시 보기', href: '#hero-heading' },
      { label: 'React 소스코드 열기', href: 'https://github.com/facebook/react' },
    ],
  },
};

const en: ServerComponentsContractContent = {
  hero: {
    badge: 'React 19 Changes · 7/10',
    titleLines: [
      'What boundaries and contracts',
      'did Server Components stabilize',
      'in React 19?',
    ],
    subtitleLines: [
      'The point is not "a component that runs on the server",',
      'but how the server / client boundary is declared and passed.',
    ],
    diagram: {
      title: "React 19's boundary model",
      cards: [
        {
          boundary: 'server',
          title: 'Server Component',
          caption: 'Runs on the server',
          items: ['DB / filesystem access', 'Only the rendered output is sent'],
          iconKey: 'server',
        },
        {
          boundary: 'client',
          title: 'Client Component',
          caption: 'Runs on the client',
          items: ['State / events / Effects', 'Browser API access'],
          iconKey: 'monitor',
        },
        {
          boundary: 'function',
          title: 'Server Function',
          caption: 'A function that runs on the server',
          items: ['Server resource access', 'Invoked via a reference'],
          iconKey: 'braces',
        },
      ],
      boundaryLabels: {
        useClient: { primary: 'boundary', secondary: `'use client'` },
        useServer: { primary: 'call reference', secondary: `'use server'` },
      },
      footer: "React 19's boundary model",
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'How does React 19 express the server / client',
      'code boundary as a syntax + package contract?',
    ],
    supportQuestions: [
      { label: 'Boundary directives', body: `'use client' / 'use server'`, iconKey: 'split' },
      { label: 'Passing references', body: 'Server Function Reference', iconKey: 'route' },
      { label: 'Package contract', body: 'react-server export condition', iconKey: 'package' },
      { label: 'Responsibility split', body: 'React vs Framework', iconKey: 'workflow' },
    ],
  },
  definition: {
    number: '03',
    eyebrow: 'Definition',
    title: 'What is a Server Component?',
    description:
      'Not just "a component that runs on the server" — it differs in serialization, transport, and bundle.',
    cards: [
      {
        boundary: 'server',
        title: 'Runs on the server',
        body: 'Rendered server-side per request; only the result is serialized and sent.',
        iconKey: 'server',
      },
      {
        boundary: 'function',
        title: 'Direct DB / filesystem access',
        body: 'Can use server resources like databases and the filesystem directly.',
        iconKey: 'database',
      },
      {
        boundary: 'react',
        title: 'Not in the client bundle',
        body: "It isn't shipped to the browser, so it doesn't grow the bundle.",
        iconKey: 'package',
      },
    ],
  },
  useClient: {
    number: '04',
    eyebrow: "'use client'",
    title: "'use client' boundary: the client-component entry point",
    description:
      "From any file marked `'use client'`, everything below becomes a client module boundary.",
    treeTitle: 'Module tree',
    tree: [
      { indent: 0, label: 'PostPage.server.tsx (Server Component)', kind: 'server' },
      { indent: 1, label: '├─ Article.server.tsx (Server Component)', kind: 'server' },
      { indent: 1, label: '└─ CommentEditor.client.tsx (Client Component)', kind: 'client' },
      { indent: 2, label: "   ↑ boundary starts at 'use client'", kind: 'boundary-note' },
    ],
    explanationTitle: 'What it means',
    explanationPoints: [
      "Once 'use client' is declared, every child below is on the client side.",
      'Only client references and the code they need ship in the client bundle.',
      'Server components can use client components across the boundary.',
    ],
    legendTitle: 'Legend',
    legendItems: [
      { tag: '.server.tsx', meaning: 'Server component', kind: 'server' },
      { tag: '.client.tsx', meaning: 'Client component', kind: 'client' },
      { tag: 'Boundary', meaning: 'Boundary between server and client', kind: 'boundary' },
    ],
  },
  useServer: {
    number: '05',
    eyebrow: "'use server'",
    title: "'use server' boundary: declaring server functions",
    description:
      "A function marked `'use server'` can be called from the client, but the body executes on the server. The client only receives a reference.",
    code: {
      fileName: 'actions.ts',
      langBadge: 'TS',
      code: `"use server";

export async function saveComment(formData: FormData) {
  // server resources are accessible
  const content = formData.get("content");

  await db.comment.create({
    data: { content },
  });

  revalidatePath("/post");
  return { ok: true };
}`,
    },
    flowTitle: 'Server-function call flow',
    flow: [
      {
        boundary: 'client',
        title: 'Client UI',
        body: 'User clicks a button, etc.',
        iconKey: 'mouse-click',
      },
      {
        boundary: 'contract',
        title: 'Server Function Reference is passed',
        body: 'Only a reference is sent, not the function code',
        iconKey: 'route',
      },
      {
        boundary: 'server',
        title: 'Runs on the server',
        body: 'DB / files / APIs',
        iconKey: 'server',
      },
      {
        boundary: 'contract',
        title: 'Result serialized',
        body: 'Sent back to the client',
        iconKey: 'network',
      },
      {
        boundary: 'function',
        title: 'UI updates',
        body: 'The client UI is updated',
        iconKey: 'sparkles',
      },
    ],
  },
  callFlow: {
    number: '06',
    eyebrow: 'Server Function Call',
    title: 'Calling a Server Function',
    description: "The key idea: it's not function code that's sent, it's a reference.",
    steps: [
      {
        boundary: 'client',
        title: 'Client UI',
        body: 'User interaction triggers a Server Function call',
        iconKey: 'mouse-click',
      },
      {
        boundary: 'contract',
        title: 'Reference passed',
        body: 'A reference is sent — not the function code',
        iconKey: 'route',
      },
      {
        boundary: 'server',
        title: 'Server runs it',
        body: 'The function executes on the server and produces a result',
        iconKey: 'server',
      },
      {
        boundary: 'function',
        title: 'Result applied',
        body: 'Result is serialized, sent to the client, and the UI updates',
        iconKey: 'sparkles',
      },
    ],
  },
  reactServerExport: {
    number: '07',
    eyebrow: 'Package Contract',
    title: 'react-server export condition',
    description:
      "A new condition in package.json's exports lets a library ship a server-only build alongside the client build.",
    descriptionCardTitle: 'Why is it needed?',
    descriptionCardBody:
      'React 19 formalizes a conditional-export contract so libraries can ship a server-only bundle.',
    code: {
      fileName: 'package.json · excerpt',
      langBadge: 'JSON',
      code: `{
  "name": "my-lib",
  "exports": {
    ".": {
      "react-server": "./dist/server.js",
      "default": "./dist/client.js"
    }
  }
}`,
    },
    explanationTitle: `When the 'react-server' condition matches, the server-only build is used.`,
    explanationPoints: [
      'Server bundle uses code tuned for the server runtime',
      'Client uses the default export',
      'Smaller bundles and clearer responsibility split',
    ],
    note: "Similar to Node.js's conditional exports.",
  },
  frameworkBoundary: {
    number: '08',
    eyebrow: 'React × Framework',
    title: 'React API vs Framework API boundary',
    description:
      'React 19 defines the RSC "boundary and contract"; frameworks implement bundling, transport, routing, caching on top.',
    reactCardTitle: 'What React provides (core model)',
    reactItems: [
      { boundary: 'react', body: 'Server Components concept' },
      { boundary: 'react', body: `'use client', 'use server' directives` },
      { boundary: 'react', body: 'Server Function reference model' },
      { boundary: 'react', body: 'Boundary-based rendering & serialization contract' },
      { boundary: 'react', body: 'react-server export condition' },
    ],
    centerLabel: 'RSC',
    centerSubLabel: 'responsibility split',
    frameworkCardTitle: 'What frameworks implement',
    frameworkItems: [
      { boundary: 'framework', body: 'Bundler configuration / code splitting' },
      { boundary: 'framework', body: 'Transport network protocol' },
      { boundary: 'framework', body: 'Routing / data-loading integration' },
      { boundary: 'framework', body: 'Caching strategy' },
      { boundary: 'framework', body: 'Deployment / runtime / error handling' },
    ],
  },
  explorer: {
    number: '09',
    eyebrow: 'Module Boundary Explorer',
    title: 'Module Boundary Explorer',
    description:
      'Pick a file to see where it runs, which boundary applies, and which bundle it ends up in.',
    projectStructureTitle: 'Project structure',
    projectStructure: [
      { indent: 0, label: 'App.server.tsx', kind: 'server' },
      { indent: 1, label: '├─ Header.server.tsx', kind: 'server' },
      { indent: 1, label: '├─ Editor.client.tsx', kind: 'client' },
      { indent: 1, label: '└─ actions.ts', kind: 'action' },
    ],
    fileSelectionTitle: 'Pick a file',
    analysisTitle: 'Analysis',
    defaultFileKey: 'editor',
    files: [
      {
        key: 'header',
        fileName: 'Header.server.tsx',
        kind: 'server',
        analysis: {
          type: 'Server component',
          boundary: 'Server side by default',
          bundle: 'Not in the client bundle',
          runtime: 'Server',
          feature: 'DB / files / async data access',
        },
      },
      {
        key: 'editor',
        fileName: 'Editor.client.tsx',
        kind: 'client',
        analysis: {
          type: 'Client component',
          boundary: `Declared with 'use client'`,
          bundle: 'Included in the client bundle',
          runtime: 'Browser',
          feature: 'State, events, and hooks are usable',
        },
      },
      {
        key: 'actions',
        fileName: 'actions.ts',
        kind: 'action',
        analysis: {
          type: 'Server Function',
          boundary: `Declared with 'use server'`,
          bundle: 'Only a reference is sent to the client',
          runtime: 'Server',
          feature: 'Server resource access; serialized result',
        },
      },
    ],
    ruleSummaryTitle: 'Rule summary',
    rules: [
      'Server → client: things cross the boundary as references',
      'Client → server: invoked via a Server Function reference',
      'The boundary starts at the file level',
    ],
  },
  mission: {
    number: '10',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description: 'Trace boundaries, functions, and responsibilities by hand to internalize RSC.',
    missions: [
      {
        number: '01',
        title: `Compare 'use client' and 'use server' side by side`,
        helper: 'Their goals and scopes differ.',
        iconKey: 'split',
      },
      {
        number: '02',
        title: 'Distinguish Server Component vs Server Function',
        helper: 'Components are about rendering; functions are an execution contract.',
        iconKey: 'braces',
      },
      {
        number: '03',
        title: "Split React's boundary from the framework's implementation",
        helper: 'Make a habit of reading them as separate concerns.',
        iconKey: 'workflow',
      },
      {
        number: '04',
        title: 'Walk through a real react-server export condition example',
        helper: 'Understand the library-side benefit.',
        iconKey: 'package',
      },
    ],
  },
  takeaways: {
    number: '11',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        boundary: 'server',
        title: 'React 19 stabilized server-client boundary expression.',
        body: `Declare boundaries with 'use client'; ship only the necessary code via references.`,
        iconKey: 'shield-check',
      },
      {
        number: '02',
        boundary: 'function',
        title: `'use client' and 'use server' play different roles.`,
        body: `'use client' declares a boundary; 'use server' declares a server function.`,
        iconKey: 'split',
      },
      {
        number: '03',
        boundary: 'framework',
        title: 'RSC must be read as React + framework responsibilities split.',
        body: 'React defines the contract; frameworks implement and optimize it.',
        iconKey: 'workflow',
      },
    ],
  },
  nextCTA: {
    eyebrow: 'Next step',
    titleLines: ['Next:', 'How does Activity manage hidden UI?'],
    description: "We'll look at how React 19.2's Activity manages hidden UI state and priority.",
    primary: {
      label: 'Next: How does Activity manage hidden UI?',
      href: '/activity-hidden-ui',
    },
    secondary: [
      { label: 'Replay the boundary diagram', href: '#hero-heading' },
      { label: 'Open the React source', href: 'https://github.com/facebook/react' },
    ],
  },
};

export const serverComponentsContractContent: Record<Locale, ServerComponentsContractContent> = {
  ko,
  en,
};
