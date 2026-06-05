import type { Locale } from '@it-tech-blog/preferences';

import type { DomainKey } from './tone';

export type IconKey =
  | 'type'
  | 'tag'
  | 'link'
  | 'code'
  | 'palette'
  | 'globe'
  | 'database'
  | 'workflow'
  | 'route'
  | 'compass'
  | 'search'
  | 'sparkles'
  | 'cloud'
  | 'server'
  | 'shield-alert'
  | 'shield-check'
  | 'triangle-alert'
  | 'pin'
  | 'heading'
  | 'hourglass'
  | 'layers'
  | 'flask'
  | 'play-circle'
  | 'target';

export type SupportQuestion = { body: string; iconKey: IconKey };

export type ProblemCard = { title: string; body: string; iconKey: IconKey };

export type ResourceCard = {
  domain: DomainKey;
  tagName: string;
  resourceType: string;
  body: string;
  iconKey: IconKey;
};

export type HoistingStep = {
  domain: DomainKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type SsrSuspenseCard = {
  domain: DomainKey;
  title: string;
  items: string[];
  iconKey: IconKey;
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  domain: DomainKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type TreeLine = { indent: number; tag: string; iconKey?: IconKey; domain?: DomainKey };

export type DomLine = { indent: number; tag: string; zone: 'html' | 'head' | 'body' };

export type MetadataResourceContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    subtitleLines: [string, string];
    heroCode: { fileName: string; langBadge: 'TSX'; code: string };
    diagram: {
      title: string;
      leftTitle: string;
      tree: TreeLine[];
      centerLabel: string;
      centerSubLabel: string;
      rightTitle: string;
      dom: DomLine[];
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string];
    supportQuestions: SupportQuestion[];
  };
  priorProblems: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ProblemCard[];
  };
  example: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    domTitle: string;
    dom: DomLine[];
  };
  treeDomSplit: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    tree: TreeLine[];
    centerLabel: string;
    centerSubLabel: string;
    centerHint: string;
    rightTitle: string;
    dom: DomLine[];
  };
  resources: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ResourceCard[];
    info: string;
  };
  hoistingFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: HoistingStep[];
  };
  ssrSuspense: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SsrSuspenseCard[];
  };
  internalCode: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'JS'; code: string };
    explanationTitle: string;
    explanationPoints: string[];
    fileCard: { title: string; fileName: string; buttonLabel: string; href: string };
  };
  simulator: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftCode: { langBadge: 'TSX'; code: string };
    centerButton: string;
    centerDescription: string;
    rightTitle: string;
    rightDom: DomLine[];
    note: string;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ko: MetadataResourceContent = {
  hero: {
    badge: 'React 19 변화 · 6/10단계',
    titleLines: ['Metadata와 Resource Components는', 'react-dom의 역할을 어떻게 넓혔나?'],
    subtitleLines: [
      'React 19는 컴포넌트 트리 안의 문서 자원을',
      'document head와 리소스 로딩 흐름으로 연결합니다.',
    ],
    heroCode: {
      fileName: 'BlogPost.tsx',
      langBadge: 'TSX',
      code: `function BlogPost() {
  return (
    <>
      <title>React 19 내부 탐구</title>
      <meta name="description" content="React 19 코드 구조 설명" />
      <link rel="canonical" href="https://example.com/blog/react19" />
      <Article />
    </>
  );
}`,
    },
    diagram: {
      title: 'React Tree → DOM (Browser)',
      leftTitle: 'React Tree',
      tree: [
        { indent: 0, tag: '<BlogPost>', domain: 'body', iconKey: 'workflow' },
        { indent: 1, tag: '<title />', domain: 'title', iconKey: 'type' },
        { indent: 1, tag: '<meta />', domain: 'meta', iconKey: 'tag' },
        { indent: 1, tag: '<link />', domain: 'link', iconKey: 'link' },
        { indent: 1, tag: '<Article />', domain: 'body', iconKey: 'workflow' },
      ],
      centerLabel: 'Hoisting',
      centerSubLabel: 'react-dom이 특수 처리하여 이동',
      rightTitle: 'DOM (Browser)',
      dom: [
        { indent: 0, tag: '<html>', zone: 'html' },
        { indent: 1, tag: '<head>', zone: 'head' },
        { indent: 2, tag: '<title />', zone: 'head' },
        { indent: 2, tag: '<meta />', zone: 'head' },
        { indent: 2, tag: '<link />', zone: 'head' },
        { indent: 1, tag: '</head>', zone: 'head' },
        { indent: 1, tag: '<body>', zone: 'body' },
        { indent: 2, tag: '<article />', zone: 'body' },
        { indent: 1, tag: '</body>', zone: 'body' },
        { indent: 0, tag: '</html>', zone: 'html' },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      '컴포넌트 내부에 <title>과 <meta>를 정의하는데',
      '왜 실제 DOM에서는 <head>로 이동할까?',
    ],
    supportQuestions: [
      { body: '컴포넌트 트리의 선언 vs 실제 DOM 배치', iconKey: 'workflow' },
      { body: 'react-dom의 특수 자원 처리', iconKey: 'sparkles' },
      { body: 'hoisting 구조와 리소스 관리', iconKey: 'route' },
      { body: 'SSR, Suspense와의 연결 포인트', iconKey: 'cloud' },
    ],
  },
  priorProblems: {
    number: '03',
    eyebrow: 'Before React 19',
    title: '이전에는 왜 head 관리가 까다로웠나?',
    description:
      '이전에는 문서 head를 컴포넌트 모델 바깥에서 따로 관리해야 했고, 그 결과 여러 가지 마찰이 생겼습니다.',
    cards: [
      {
        title: '라우트별 title 관리',
        body: '페이지 이동 시마다 title 수동 변경, 코드 중복과 누락 발생.',
        iconKey: 'heading',
      },
      {
        title: 'SEO meta 분리',
        body: 'meta 태그를 별도 라이브러리로 관리, 컴포넌트 모델과 분리됨.',
        iconKey: 'tag',
      },
      {
        title: 'head 삽입 타이밍',
        body: '언제 head에 추가할지 수동 제어 필요, 깜빡임/중복 위험.',
        iconKey: 'hourglass',
      },
      {
        title: 'SSR과 동기화',
        body: '서버와 클라이언트에서 head를 따로 구성, 일관성 유지 어려움.',
        iconKey: 'server',
      },
    ],
  },
  example: {
    number: '04',
    eyebrow: 'Example',
    title: 'React 19의 metadata 예제',
    description:
      '컴포넌트 안에서 선언한 문서 자원이 실제 DOM에서는 head로 옮겨져 들어가는 모습을 한눈에 비교합니다.',
    code: {
      fileName: 'BlogPost.tsx',
      langBadge: 'TSX',
      code: `function BlogPost() {
  return (
    <>
      <title>React 19 내부 탐구</title>
      <meta name="description" content="React 19 코드 구조 설명" />
      <link rel="canonical" href="https://example.com/blog/react19" />
      <Article />
    </>
  );
}`,
    },
    domTitle: '실제 DOM 결과 (브라우저)',
    dom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title>React 19 내부 탐구</title>', zone: 'head' },
      {
        indent: 2,
        tag: '<meta name="description" content="React 19 코드 구조 설명" />',
        zone: 'head',
      },
      {
        indent: 2,
        tag: '<link rel="canonical" href="https://example.com/blog/react19" />',
        zone: 'head',
      },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... 실제 글 내용 ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
  },
  treeDomSplit: {
    number: '05',
    eyebrow: 'Tree vs DOM',
    title: 'React Tree와 DOM Head의 분리',
    description:
      '컴포넌트 안에서 선언한 위치(선언 위치)와 실제 DOM 위치(배치 위치)가 react-dom의 hoisting을 거쳐 분리됩니다.',
    leftTitle: 'React Tree (선언 위치)',
    tree: [
      { indent: 0, tag: '<BlogPost>', domain: 'body', iconKey: 'workflow' },
      { indent: 1, tag: '<title />', domain: 'title', iconKey: 'type' },
      { indent: 1, tag: '<meta />', domain: 'meta', iconKey: 'tag' },
      { indent: 1, tag: '<link />', domain: 'link', iconKey: 'link' },
      { indent: 1, tag: '<Article>', domain: 'body', iconKey: 'workflow' },
      { indent: 2, tag: 'content ...', domain: 'body' },
    ],
    centerLabel: 'react-dom',
    centerSubLabel: 'Hoisting',
    centerHint: '메타데이터/리소스를 적절한 위치로 이동',
    rightTitle: 'DOM (최종 배치 위치)',
    dom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title />', zone: 'head' },
      { indent: 2, tag: '<meta />', zone: 'head' },
      { indent: 2, tag: '<link />', zone: 'head' },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... content ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
  },
  resources: {
    number: '06',
    eyebrow: 'Resource Components',
    title: 'Resource Components의 의미',
    description:
      '같은 "DOM 요소"처럼 보이지만 react-dom 입장에선 각자 다른 책임을 가진 자원입니다.',
    cards: [
      {
        domain: 'title',
        tagName: '<title>',
        resourceType: '문서 제목',
        body: '브라우저 탭에 표시되는 문서 제목 정보',
        iconKey: 'type',
      },
      {
        domain: 'meta',
        tagName: '<meta>',
        resourceType: '메타데이터',
        body: 'SEO, 인코딩, viewport 등 문서 metadata 정보',
        iconKey: 'tag',
      },
      {
        domain: 'link',
        tagName: '<link>',
        resourceType: '외부 리소스 연결',
        body: 'stylesheet, icon, preload 등 리소스 연결 선언',
        iconKey: 'link',
      },
      {
        domain: 'script',
        tagName: '<script>',
        resourceType: '스크립트 리소스',
        body: '외부/인라인 스크립트 로딩 및 실행 관련',
        iconKey: 'code',
      },
      {
        domain: 'style',
        tagName: '<style>',
        resourceType: '스타일 리소스',
        body: '스타일 선언 및 우선순위, 중복 제거 관리',
        iconKey: 'palette',
      },
    ],
    info: '일부는 문서 메타데이터이며, 일부는 리소스 로딩과 우선순위 및 deduplication에 영향을 줍니다.',
  },
  hoistingFlow: {
    number: '07',
    eyebrow: 'Head Hoisting',
    title: 'Head Hoisting 구조',
    description:
      'React Tree → react-dom → Hoistable Resource → 문서 위치 반영의 4단계 흐름이 hoisting의 본체입니다.',
    steps: [
      {
        domain: 'body',
        title: 'React Tree에서 발견',
        body: '특수 자원 요소 발견: <title>, <meta> 등',
        iconKey: 'search',
      },
      {
        domain: 'hoisting',
        title: 'react-dom이 특수 처리',
        body: 'HostHoistable 방식으로 식별하고 관리',
        iconKey: 'sparkles',
      },
      {
        domain: 'internals',
        title: 'Hoistable Resource로 관리',
        body: '중복 제거, 우선순위, 리소스 lifetime 관리',
        iconKey: 'flask',
      },
      {
        domain: 'head',
        title: '적절한 문서 위치에 반영',
        body: '<head> 또는 리소스 모델에 맞게 반영',
        iconKey: 'pin',
      },
    ],
  },
  ssrSuspense: {
    number: '08',
    eyebrow: 'SSR / Suspense',
    title: 'SSR / Suspense와의 연결 포인트',
    description:
      'metadata/resource는 단순 head 처리에 그치지 않고 SSR · Suspense 흐름과도 맞물립니다.',
    cards: [
      {
        domain: 'style',
        title: '스타일 리소스',
        items: ['Suspense로 지연된 UI와 스타일 로딩과 조율', 'fallback UI와 스타일 제공 시점 제어'],
        iconKey: 'palette',
      },
      {
        domain: 'ssr',
        title: '서버 렌더',
        items: [
          '서버 렌더 결과에 <head> 구성도 함께 포함',
          '클라이언트와 서버 간 head 일관성 향상',
        ],
        iconKey: 'cloud',
      },
    ],
  },
  internalCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: '실제 코드 미리보기 (ReactFiberConfigDOM.js)',
    description:
      '일반 HostComponent와는 다른 Hoistable 자원 처리 경로가 react-dom 내부에서 별도로 관리됩니다.',
    code: {
      fileName: 'ReactFiberConfigDOM.js · 발췌',
      langBadge: 'JS',
      code: `// Hoistable resources와 관련된 키워드
export const HostHoistable = 6;

canHoistInstance(...)
createHoistableInstance(...)
getResource(...)
getCanonicalResourceKey(...)
getPublicInstance(...)`,
    },
    explanationTitle: '일반 HostComponent와 다른 특수 자원 처리',
    explanationPoints: [
      '일부 요소(<title>, <meta>, <link>, <script>, <style>)는 HostHoistable로 분류됩니다.',
      '중복 제거(deduplication)',
      '렌더링 우선순위 반영',
      '우선순위 기반 리소스 로딩 조율',
      'head 위치로 자동 hoisting',
    ],
    fileCard: {
      title: '관련 파일',
      fileName: 'ReactFiberConfigDOM.js',
      buttonLabel: 'GitHub에서 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js',
    },
  },
  simulator: {
    number: '10',
    eyebrow: 'Hoisting Simulator',
    title: 'Head Hoisting 시뮬레이터',
    description:
      '왼쪽 React Tree를 react-dom이 처리하면 오른쪽 DOM처럼 head/body가 분리됩니다. 버튼을 눌러 실행 전/후를 비교해 보세요.',
    leftTitle: '작성한 React Tree',
    leftCode: {
      langBadge: 'TSX',
      code: `<Page>
  <title>React 19 내부 탐구</title>
  <meta name="description" content="React 19 코드 구조 설명" />
  <link rel="stylesheet" href="/styles/app.css" />
  <Article />
</Page>`,
    },
    centerButton: 'Hoisting 실행',
    centerDescription: '자원들은 head로 이동, react-dom 처리 시뮬레이션',
    rightTitle: '최종 DOM 구조',
    rightDom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title>React 19 내부 탐구</title>', zone: 'head' },
      {
        indent: 2,
        tag: '<meta name="description" content="React 19 코드 구조 설명" />',
        zone: 'head',
      },
      { indent: 2, tag: '<link rel="stylesheet" href="/styles/app.css" />', zone: 'head' },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... 실제 글 내용 ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
    note: 'Article 등 일반 UI는 body에 그대로 유지됩니다.',
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '문서·실제 코드·정리 순으로 metadata 처리 흐름을 체화합니다.',
    missions: [
      {
        number: '01',
        title: 'title / meta / link 공식 문서에서 React 19 동작 확인',
        helper: '문서 자원 컴포넌트의 지원 범위와 동작 확인',
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'ReactFiberConfigDOM.js에서 Hoistable 관련 키워드 찾기',
        helper: 'HostHoistable, getResource, createHoistableInstance 확인',
        iconKey: 'search',
      },
      {
        number: '03',
        title: 'React Tree와 DOM 배치 위치가 달라질 수 있음을 정리',
        helper: '선언 위치와 최종 DOM 위치가 달라지는 구조 이해',
        iconKey: 'route',
      },
      {
        number: '04',
        title: 'SSR / Suspense와의 연결 포인트 정리',
        helper: '스타일 리소스, 로딩, 중복 제거, 우선순위 관리 포인트 확인',
        iconKey: 'cloud',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        domain: 'hoisting',
        title: 'React 19는 문서 자원도 컴포넌트 모델 안에서 다룬다.',
        body: '<title>, <meta>, <link>, <script>, <style> 등을 컴포넌트 트리 안에서 선언할 수 있다.',
        iconKey: 'workflow',
      },
      {
        number: '02',
        domain: 'head',
        title: 'react-dom은 일부 요소를 특수 자원으로 hoist한다.',
        body: 'HostHoistable로 분류하여 head로 이동, 중복 제거와 우선순위 관리를 수행한다.',
        iconKey: 'pin',
      },
      {
        number: '03',
        domain: 'ssr',
        title: '이는 SSR과 리소스 로딩 모델까지 넓어지는 변화다.',
        body: '서버 렌더링 head 일관성, Suspense 연동, 리소스 우선순위까지 연결된다.',
        iconKey: 'cloud',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Server Components의 경계와 계약',
    description:
      '다음 페이지에서는 React 19가 서버와 클라이언트의 경계를 어떤 계약으로 안정화했는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/server-components-contract',
  },
};

const en: MetadataResourceContent = {
  hero: {
    badge: 'React 19 Changes · 6/10',
    titleLines: ['How did Metadata & Resource Components', "broaden react-dom's role?"],
    subtitleLines: [
      'React 19 wires document resources declared inside',
      'the component tree into document head and resource loading.',
    ],
    heroCode: {
      fileName: 'BlogPost.tsx',
      langBadge: 'TSX',
      code: `function BlogPost() {
  return (
    <>
      <title>Inside React 19</title>
      <meta name="description" content="React 19 internals tour" />
      <link rel="canonical" href="https://example.com/blog/react19" />
      <Article />
    </>
  );
}`,
    },
    diagram: {
      title: 'React Tree → DOM (Browser)',
      leftTitle: 'React Tree',
      tree: [
        { indent: 0, tag: '<BlogPost>', domain: 'body', iconKey: 'workflow' },
        { indent: 1, tag: '<title />', domain: 'title', iconKey: 'type' },
        { indent: 1, tag: '<meta />', domain: 'meta', iconKey: 'tag' },
        { indent: 1, tag: '<link />', domain: 'link', iconKey: 'link' },
        { indent: 1, tag: '<Article />', domain: 'body', iconKey: 'workflow' },
      ],
      centerLabel: 'Hoisting',
      centerSubLabel: 'react-dom moves them with special handling',
      rightTitle: 'DOM (Browser)',
      dom: [
        { indent: 0, tag: '<html>', zone: 'html' },
        { indent: 1, tag: '<head>', zone: 'head' },
        { indent: 2, tag: '<title />', zone: 'head' },
        { indent: 2, tag: '<meta />', zone: 'head' },
        { indent: 2, tag: '<link />', zone: 'head' },
        { indent: 1, tag: '</head>', zone: 'head' },
        { indent: 1, tag: '<body>', zone: 'body' },
        { indent: 2, tag: '<article />', zone: 'body' },
        { indent: 1, tag: '</body>', zone: 'body' },
        { indent: 0, tag: '</html>', zone: 'html' },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'You declare <title> and <meta> inside a component —',
      'why do they end up moving to <head> in the real DOM?',
    ],
    supportQuestions: [
      { body: 'Declaration in the tree vs placement in the DOM', iconKey: 'workflow' },
      { body: "react-dom's special handling of resources", iconKey: 'sparkles' },
      { body: 'Hoisting structure and resource management', iconKey: 'route' },
      { body: 'Connection points to SSR and Suspense', iconKey: 'cloud' },
    ],
  },
  priorProblems: {
    number: '03',
    eyebrow: 'Before React 19',
    title: 'Why managing the head used to be painful',
    description: 'Document head used to live outside the component model, which created friction.',
    cards: [
      {
        title: 'Per-route title management',
        body: 'Title changed manually on every navigation; duplication and omissions appear.',
        iconKey: 'heading',
      },
      {
        title: 'SEO meta separation',
        body: 'meta tags managed by a separate library, detached from the component model.',
        iconKey: 'tag',
      },
      {
        title: 'When to inject head',
        body: 'Manual control over when to add to head; flicker / duplicate risk.',
        iconKey: 'hourglass',
      },
      {
        title: 'Sync with SSR',
        body: 'Head built separately on server and client; consistency is hard.',
        iconKey: 'server',
      },
    ],
  },
  example: {
    number: '04',
    eyebrow: 'Example',
    title: 'React 19 metadata example',
    description:
      'Compare resources declared inside the component vs how the real DOM places them in <head>.',
    code: {
      fileName: 'BlogPost.tsx',
      langBadge: 'TSX',
      code: `function BlogPost() {
  return (
    <>
      <title>Inside React 19</title>
      <meta name="description" content="React 19 internals tour" />
      <link rel="canonical" href="https://example.com/blog/react19" />
      <Article />
    </>
  );
}`,
    },
    domTitle: 'Real DOM result (browser)',
    dom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title>Inside React 19</title>', zone: 'head' },
      {
        indent: 2,
        tag: '<meta name="description" content="React 19 internals tour" />',
        zone: 'head',
      },
      {
        indent: 2,
        tag: '<link rel="canonical" href="https://example.com/blog/react19" />',
        zone: 'head',
      },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... article content ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
  },
  treeDomSplit: {
    number: '05',
    eyebrow: 'Tree vs DOM',
    title: 'React Tree vs DOM Head, split apart',
    description:
      "Declaration site in the tree and final DOM location split apart through react-dom's hoisting.",
    leftTitle: 'React Tree (declaration site)',
    tree: [
      { indent: 0, tag: '<BlogPost>', domain: 'body', iconKey: 'workflow' },
      { indent: 1, tag: '<title />', domain: 'title', iconKey: 'type' },
      { indent: 1, tag: '<meta />', domain: 'meta', iconKey: 'tag' },
      { indent: 1, tag: '<link />', domain: 'link', iconKey: 'link' },
      { indent: 1, tag: '<Article>', domain: 'body', iconKey: 'workflow' },
      { indent: 2, tag: 'content ...', domain: 'body' },
    ],
    centerLabel: 'react-dom',
    centerSubLabel: 'Hoisting',
    centerHint: 'Move metadata / resources to the right place',
    rightTitle: 'DOM (final placement)',
    dom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title />', zone: 'head' },
      { indent: 2, tag: '<meta />', zone: 'head' },
      { indent: 2, tag: '<link />', zone: 'head' },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... content ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
  },
  resources: {
    number: '06',
    eyebrow: 'Resource Components',
    title: 'What Resource Components mean',
    description:
      "They look like the same kind of DOM tag, but each carries a different responsibility from react-dom's perspective.",
    cards: [
      {
        domain: 'title',
        tagName: '<title>',
        resourceType: 'Document title',
        body: 'Document title shown in the browser tab.',
        iconKey: 'type',
      },
      {
        domain: 'meta',
        tagName: '<meta>',
        resourceType: 'Metadata',
        body: 'SEO, encoding, viewport — all document metadata.',
        iconKey: 'tag',
      },
      {
        domain: 'link',
        tagName: '<link>',
        resourceType: 'External resource link',
        body: 'stylesheet, icon, preload and other resource links.',
        iconKey: 'link',
      },
      {
        domain: 'script',
        tagName: '<script>',
        resourceType: 'Script resource',
        body: 'External / inline scripts loading and execution.',
        iconKey: 'code',
      },
      {
        domain: 'style',
        tagName: '<style>',
        resourceType: 'Style resource',
        body: 'Style declarations with priority and dedup handling.',
        iconKey: 'palette',
      },
    ],
    info: 'Some are pure document metadata; others affect resource loading priority and deduplication.',
  },
  hoistingFlow: {
    number: '07',
    eyebrow: 'Head Hoisting',
    title: 'Head Hoisting structure',
    description:
      "React Tree → react-dom → Hoistable Resource → document placement: that's the four-step flow.",
    steps: [
      {
        domain: 'body',
        title: 'Discovered in React Tree',
        body: 'Special resource elements found: <title>, <meta>, ...',
        iconKey: 'search',
      },
      {
        domain: 'hoisting',
        title: 'react-dom special handling',
        body: 'Identified and managed as HostHoistable',
        iconKey: 'sparkles',
      },
      {
        domain: 'internals',
        title: 'Managed as Hoistable Resource',
        body: 'Dedup, priority, resource lifetime management',
        iconKey: 'flask',
      },
      {
        domain: 'head',
        title: 'Reflected at the right document spot',
        body: '<head> or another resource model location',
        iconKey: 'pin',
      },
    ],
  },
  ssrSuspense: {
    number: '08',
    eyebrow: 'SSR / Suspense',
    title: 'Connection points with SSR / Suspense',
    description:
      'metadata / resource also intersects SSR and Suspense flows, not just <head> mechanics.',
    cards: [
      {
        domain: 'style',
        title: 'Style resource',
        items: [
          'Coordinate with Suspense-delayed UI and stylesheet loading',
          'Control the timing of fallback UI and style availability',
        ],
        iconKey: 'palette',
      },
      {
        domain: 'ssr',
        title: 'Server render',
        items: [
          'Server-rendered output now includes <head> composition',
          'Better head consistency between client and server',
        ],
        iconKey: 'cloud',
      },
    ],
  },
  internalCode: {
    number: '09',
    eyebrow: 'React Internals',
    title: 'Source preview (ReactFiberConfigDOM.js)',
    description:
      'A separate Hoistable resource path exists inside react-dom — distinct from the regular HostComponent path.',
    code: {
      fileName: 'ReactFiberConfigDOM.js · excerpt',
      langBadge: 'JS',
      code: `// Hoistable-resource related keywords
export const HostHoistable = 6;

canHoistInstance(...)
createHoistableInstance(...)
getResource(...)
getCanonicalResourceKey(...)
getPublicInstance(...)`,
    },
    explanationTitle: 'Special-resource path, different from regular HostComponent',
    explanationPoints: [
      'Elements like <title>, <meta>, <link>, <script>, <style> are classified as HostHoistable.',
      'Deduplication',
      'Render-priority awareness',
      'Resource loading coordination by priority',
      'Auto hoisting into the head',
    ],
    fileCard: {
      title: 'Related file',
      fileName: 'ReactFiberConfigDOM.js',
      buttonLabel: 'Open on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js',
    },
  },
  simulator: {
    number: '10',
    eyebrow: 'Hoisting Simulator',
    title: 'Head Hoisting simulator',
    description:
      'Once react-dom processes the React Tree on the left, head / body are split as on the right. Toggle to compare before / after.',
    leftTitle: 'Authored React Tree',
    leftCode: {
      langBadge: 'TSX',
      code: `<Page>
  <title>Inside React 19</title>
  <meta name="description" content="React 19 internals tour" />
  <link rel="stylesheet" href="/styles/app.css" />
  <Article />
</Page>`,
    },
    centerButton: 'Run Hoisting',
    centerDescription: 'Resources move into head — simulating react-dom processing',
    rightTitle: 'Final DOM structure',
    rightDom: [
      { indent: 0, tag: '<html>', zone: 'html' },
      { indent: 1, tag: '<head>', zone: 'head' },
      { indent: 2, tag: '<title>Inside React 19</title>', zone: 'head' },
      {
        indent: 2,
        tag: '<meta name="description" content="React 19 internals tour" />',
        zone: 'head',
      },
      { indent: 2, tag: '<link rel="stylesheet" href="/styles/app.css" />', zone: 'head' },
      { indent: 1, tag: '</head>', zone: 'head' },
      { indent: 1, tag: '<body>', zone: 'body' },
      { indent: 2, tag: '<article>... article content ...</article>', zone: 'body' },
      { indent: 1, tag: '</body>', zone: 'body' },
      { indent: 0, tag: '</html>', zone: 'html' },
    ],
    note: 'Regular UI like Article stays in body.',
  },
  mission: {
    number: '11',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description: 'Docs → real source → personal summary, in that order.',
    missions: [
      {
        number: '01',
        title: 'Read the official title / meta / link docs for React 19 behavior',
        helper: 'Check supported scope and behavior',
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'Find Hoistable keywords in ReactFiberConfigDOM.js',
        helper: 'HostHoistable, getResource, createHoistableInstance',
        iconKey: 'search',
      },
      {
        number: '03',
        title: 'Note that React Tree position and DOM placement can differ',
        helper: 'Understand the split between declaration site and final spot',
        iconKey: 'route',
      },
      {
        number: '04',
        title: 'Summarize the SSR / Suspense connection points',
        helper: 'Style resource, loading, dedup, priority management',
        iconKey: 'cloud',
      },
    ],
  },
  takeaways: {
    number: '12',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        domain: 'hoisting',
        title: 'React 19 handles document resources inside the component model.',
        body: '<title>, <meta>, <link>, <script>, <style> can all be declared in the tree.',
        iconKey: 'workflow',
      },
      {
        number: '02',
        domain: 'head',
        title: 'react-dom hoists some elements as special resources.',
        body: 'Classified as HostHoistable, moved to head, with dedup and priority management.',
        iconKey: 'pin',
      },
      {
        number: '03',
        domain: 'ssr',
        title: 'This extends to SSR and the resource loading model.',
        body: 'Server head consistency, Suspense, and resource priority all connect.',
        iconKey: 'cloud',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Server Components — boundary & contract',
    description:
      'Next we look at how React 19 stabilized the server / client boundary with a clear contract.',
    cta: 'Go to the next page',
    href: '/server-components-contract',
  },
};

export const metadataResourceContent: Record<Locale, MetadataResourceContent> = { ko, en };
