import type { Locale } from '@it-tech-blog/preferences';

import type { LayerKey } from './tone';

export type IconKey =
  | 'refresh'
  | 'loader'
  | 'code'
  | 'file'
  | 'server'
  | 'activity'
  | 'layers'
  | 'milestone'
  | 'map'
  | 'compass'
  | 'sparkles'
  | 'route'
  | 'target'
  | 'workflow'
  | 'telescope'
  | 'flag';

export type HeroLayer = {
  layer: LayerKey;
  number: string;
  name: string;
  feature: string;
  caption: string;
};

export type HeroSideBadge = { label: string; iconKey: IconKey };

export type ChangeAxisCard = {
  number: string;
  layer: LayerKey;
  iconKey: IconKey;
  title: string;
  features: string;
  body: string;
  tags: string[];
};

export type TimelineCard = {
  version: string;
  date: string;
  meaning: string;
  description?: string;
  tags: string[];
  cta?: { label: string; href: string };
};

export type ConnectionRow = {
  question: string;
  feature: string;
  layer: LayerKey;
  structureLines: string[];
};

export type RoadmapItem = {
  number: string;
  title: string;
  body: string;
  active?: boolean;
};

export type ClassifierTabKey = 'actions' | 'use' | 'ref' | 'activity';

export type ClassifierResult = {
  label: string;
  layer: LayerKey;
  resultTitle: string;
  resultSubtitle: string;
  flow: string[];
  description: string;
  cta: { label: string; href: string };
};

export type FollowMission = {
  mission: string;
  helper: string;
};

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type LinkButton = { label: string; href: string };

export type React19ChangeMapContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    subtitleLines: [string, string, string];
    diagram: {
      title: string;
      layers: HeroLayer[];
    };
    questionCard: {
      number: string;
      eyebrow: string;
      questionLines: [string, string, string];
      badges: HeroSideBadge[];
    };
    guideCard: {
      eyebrow: string;
      bodyLines: [string, string, string];
      source: string;
    };
  };
  featureListTrap: {
    number: string;
    eyebrow: string;
    title: string;
    leftCard: {
      title: string;
      items: string[];
    };
    arrowLabel: string;
    rightCard: {
      title: string;
      items: { feature: string; body: string; layer: LayerKey }[];
    };
  };
  changeAxes: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ChangeAxisCard[];
  };
  versionTimeline: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: TimelineCard[];
  };
  previousTopicMap: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    headings: { question: string; feature: string; structure: string };
    rows: ConnectionRow[];
  };
  tenPageRoadmap: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    items: RoadmapItem[];
    sidePanel: {
      title: string;
      bodyLines: string[];
      tagLabel: string;
      tags: string[];
    };
  };
  changeLayerClassifier: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    tabLabel: string;
    resultLabel: string;
    defaultTab: ClassifierTabKey;
    results: Record<ClassifierTabKey, ClassifierResult>;
  };
  followAlongMission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: FollowMission[];
  };
  keyTakeaways: {
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
  versionNote: {
    left: string;
    right: string;
  };
};

const ko: React19ChangeMapContent = {
  hero: {
    badge: 'React 19 변화 · 1/10단계',
    titleLines: ['React 19는 무엇이 달라졌고,', '어떤 기준으로 읽어야 할까?'],
    subtitleLines: [
      '신기능 목록을 외우는 대신,',
      '기존 React 내부 구조 위에',
      '무엇이 새로 얹혔는지 읽습니다.',
    ],
    diagram: {
      title: 'React 19 변화의 6개 층',
      layers: [
        {
          layer: 'update',
          number: '01',
          name: '업데이트 모델',
          feature: 'Actions',
          caption: '비동기 update · form action · pending 상태',
        },
        {
          layer: 'render',
          number: '02',
          name: '렌더링 모델',
          feature: 'use()',
          caption: '렌더 중 리소스 읽기 · Suspense 연결',
        },
        {
          layer: 'element',
          number: '03',
          name: 'Element 표현',
          feature: 'ref as prop',
          caption: 'props.ref · element.ref deprecation',
        },
        {
          layer: 'dom',
          number: '04',
          name: 'DOM 자원 관리',
          feature: 'metadata',
          caption: 'title · meta · link · script · style',
        },
        {
          layer: 'server',
          number: '05',
          name: '서버 경계',
          feature: 'RSC',
          caption: 'Server Components · use client · use server',
        },
        {
          layer: 'priority',
          number: '06',
          name: '우선순위 확장',
          feature: 'Activity',
          caption: 'hidden subtree · 낮은 우선순위 렌더',
        },
      ],
    },
    questionCard: {
      number: '02',
      eyebrow: '오늘 해결할 질문',
      questionLines: [
        'Actions, use(), ref as prop,',
        'Activity는 각각 React 내부',
        '어디에 연결되는 변화일까?',
      ],
      badges: [
        { label: '변화 지도', iconKey: 'map' },
        { label: '버전 구분', iconKey: 'milestone' },
        { label: '내부 구조 연결', iconKey: 'route' },
      ],
    },
    guideCard: {
      eyebrow: '읽기 가이드',
      bodyLines: [
        '이 페이지는 React 19.0 ~ 19.2.6에 이르는',
        '변화를 기존 내부 구조의 확장으로',
        '이해하기 위한 지도입니다.',
      ],
      source: '소스 기준: react@19.2.6',
    },
  },
  featureListTrap: {
    number: '03',
    eyebrow: 'List vs Structure',
    title: 'React 19를 신기능 목록으로만 보면 놓치는 것',
    leftCard: {
      title: "기능을 '목록'으로만 보면…",
      items: ['Actions', 'use()', 'ref as prop', 'metadata', 'Activity'],
    },
    arrowLabel: '구조 위에 올려 본다',
    rightCard: {
      title: "하지만 '구조' 위에 올려 보면…",
      items: [
        { feature: 'Actions', body: '업데이트 흐름 확장', layer: 'update' },
        { feature: 'use()', body: '렌더 중 리소스 읽기', layer: 'render' },
        { feature: 'ref as prop', body: 'Element / props 표현 변화', layer: 'element' },
        { feature: 'Activity', body: '숨겨진 UI와 낮은 우선순위 렌더', layer: 'priority' },
      ],
    },
  },
  changeAxes: {
    number: '04',
    eyebrow: 'Six Axes',
    title: 'React 19 변화의 6개 축',
    description:
      '각 신기능은 “새로운 무엇”이 아니라, 이미 존재하던 내부 축이 어디로 확장됐는지를 보여 줍니다.',
    cards: [
      {
        number: '01',
        layer: 'update',
        iconKey: 'refresh',
        title: '업데이트 흐름',
        features: 'Actions, Form Actions, useActionState',
        body: '업데이트는 어디서 시작되고, 어떻게 상태와 서버 action까지 연결되는가?',
        tags: ['Actions', 'Form Actions', 'useActionState'],
      },
      {
        number: '02',
        layer: 'render',
        iconKey: 'loader',
        title: '렌더링 모델',
        features: 'use(), Suspense, Error Boundary',
        body: '렌더 도중 비동기 리소스를 읽고, 대기와 에러를 어디로 이어붙일 것인가?',
        tags: ['use()', 'Suspense', 'Error Boundary'],
      },
      {
        number: '03',
        layer: 'element',
        iconKey: 'code',
        title: 'Element 표현',
        features: 'ref as prop, element.ref deprecation',
        body: 'Element와 props가 무엇을 담고, 어떻게 컴포넌트 호출 방식에 영향을 주는가?',
        tags: ['ref as prop', 'element.ref dep'],
      },
      {
        number: '04',
        layer: 'dom',
        iconKey: 'file',
        title: 'DOM 자원 관리',
        features: 'title, meta, link, script, style',
        body: '문서/헤드 리소스를 컴포넌트 단위로 선언하고 효율적으로 관리하는 모델.',
        tags: ['title', 'meta', 'link', 'script', 'style'],
      },
      {
        number: '05',
        layer: 'server',
        iconKey: 'server',
        title: '서버 경계',
        features: 'Server Components, use client, use server',
        body: '컴포넌트 경계를 기준으로 클라이언트와 서버의 역할을 명확히 나누는 구조.',
        tags: ['RSC', 'use client', 'use server'],
      },
      {
        number: '06',
        layer: 'priority',
        iconKey: 'activity',
        title: '우선순위와 수명 확장',
        features: 'Activity, useEffectEvent, cacheSignal, PPR',
        body: '숨겨진 UI와 낮은 우선순위, 이벤트 수명, 캐시 신호, 부분 사전 렌더링까지 확장.',
        tags: ['Activity', 'useEffectEvent', 'PPR'],
      },
    ],
  },
  versionTimeline: {
    number: '05',
    eyebrow: 'Version Timeline',
    title: '19.0 → 19.2 → 19.2.6, 같은 버전에서도 변화의 무게가 다르다',
    description: '버전을 분리해 두면 같은 단어라도 “언제 들어왔는지”가 같이 읽힙니다.',
    cards: [
      {
        version: 'React 19.0',
        date: '2024.12',
        meaning: '기본 기능과 표현 모델의 대규모 정리',
        tags: ['Actions', 'use()', 'ref as prop', 'metadata', 'RSC 안정화'],
      },
      {
        version: 'React 19.2',
        date: '2025.04',
        meaning: '우선순위·수명·캐시 개념의 확장',
        tags: ['Activity', 'useEffectEvent', 'cacheSignal', 'Partial Pre-rendering'],
      },
      {
        version: 'React 19.2.6',
        date: '2025.05',
        meaning: '최신 안정 코드 탐색 기준',
        description: '이 강의의 모든 예제와 구조 해석은 react@19.2.6을 기준으로 설명합니다.',
        tags: ['소스 기준', '예제 기준', '구조 해석 기준'],
        cta: {
          label: 'react@19.2.6 소스 보기',
          href: 'https://github.com/facebook/react/releases/tag/v19.2.6',
        },
      },
    ],
  },
  previousTopicMap: {
    number: '06',
    eyebrow: 'Connect to Previous Topics',
    title: '앞선 대주제와 연결되는 변화 지도',
    description: '앞서 읽은 내부 구조 위에 React 19 기능이 어떻게 얹히는지 한 줄로 정리합니다.',
    headings: {
      question: '기존 학습 질문',
      feature: 'React 19 기능',
      structure: '내부 구조 변화 해석',
    },
    rows: [
      {
        question: '업데이트는 어떻게 시작되는가?',
        feature: 'Actions',
        layer: 'update',
        structureLines: ['업데이트 모델 확장', 'Action → 상태 / 서버 / 폼 흐름을 더 잘 연결'],
      },
      {
        question: 'Suspense / Error / Hydration',
        feature: 'use()',
        layer: 'render',
        structureLines: ['렌더링 모델 확장', '렌더 도중 리소스 읽기와 Thenable 추적'],
      },
      {
        question: 'React Element와 JSX의 정체',
        feature: 'ref as prop',
        layer: 'element',
        structureLines: ['Element 표현 변화', 'ref 전달 방식이 Element / props 표현에 영향을 줌'],
      },
      {
        question: 'Commit / DOM 반영',
        feature: 'metadata / resource',
        layer: 'dom',
        structureLines: ['DOM 자원 관리 확장', 'Head / 문서 리소스에 대한 수명 통합 관리'],
      },
      {
        question: 'Scheduler와 우선순위',
        feature: 'Activity',
        layer: 'priority',
        structureLines: ['우선순위와 수명 확장', '숨겨진 subtree와 낮은 우선순위 렌더'],
      },
    ],
  },
  tenPageRoadmap: {
    number: '07',
    eyebrow: 'Roadmap',
    title: '이번 10개 페이지의 전체 로드맵',
    description: '이 페이지 다음 9개의 챕터가 각 변화 축을 차례대로 깊게 파고듭니다.',
    items: [
      { number: '01', title: '변화 지도', body: '전체 구조와 읽기 기준 정리', active: true },
      { number: '02', title: 'Actions', body: '업데이트 흐름 확장 이해' },
      { number: '03', title: 'Form Actions', body: '폼과 이벤트 시스템 연결' },
      { number: '04', title: 'use()', body: '렌더 중 리소스 읽기와 Suspense 연결' },
      { number: '05', title: 'ref as prop', body: 'Element 표현 변화 읽기' },
      { number: '06', title: 'Metadata', body: '문서 자원 관리의 새로운 모델' },
      { number: '07', title: 'Server Components', body: '서버 경계와 계약 모델' },
      { number: '08', title: 'Activity', body: '숨겨진 UI와 우선순위 제어' },
      { number: '09', title: 'useEffectEvent', body: '이벤트성 Effect 로직 분리' },
      { number: '10', title: '19.2 이후 읽기법', body: '앞으로의 변경을 스스로 읽는 기준' },
    ],
    sidePanel: {
      title: '지금 보고 있는 페이지',
      bodyLines: [
        '01 변화 지도는 다음 9개 페이지의 출발점입니다.',
        '각 페이지는 6개 축 중 하나의 변화를 깊이 읽습니다.',
        '여기서 잡은 “레이어로 읽기” 관점을 끝까지 유지하세요.',
      ],
      tagLabel: '이번 파트의 목표',
      tags: ['레이어로 읽기', '버전으로 분리', '내부 구조와 연결'],
    },
  },
  changeLayerClassifier: {
    number: '08',
    eyebrow: 'Classifier',
    title: '변화 레이어 분류기',
    description:
      '신기능 이름을 누르면 어느 내부 구조와 연결되는 변화인지 한 줄 흐름으로 보여 줍니다.',
    tabLabel: '신기능 선택',
    resultLabel: '연결되는 기존 내부 구조',
    defaultTab: 'use',
    results: {
      actions: {
        label: 'Actions',
        layer: 'update',
        resultTitle: '선택한 변화: Actions',
        resultSubtitle: '연결되는 기존 내부 구조',
        flow: ['업데이트 진입점', 'updateQueue', 'transition / pending 상태'],
        description:
          'Actions는 setState 너머의 비동기 업데이트 흐름을 정의합니다. 기존 updateQueue / lane 위에 form action과 pending이 추가로 얹힙니다.',
        cta: { label: '관련 코드 살펴보기', href: '/actions-update-flow' },
      },
      use: {
        label: 'use()',
        layer: 'render',
        resultTitle: '선택한 변화: use()',
        resultSubtitle: '연결되는 기존 내부 구조',
        flow: ['Suspense', 'Error Boundary', 'Thenable tracking'],
        description:
          'use()는 렌더 과정에서 Thenable을 읽고, Suspense와 Error Boundary가 이에 맞춰 UI를 이어받을 수 있도록 내부 추적 흐름에 연결됩니다.',
        cta: { label: '관련 코드 살펴보기', href: '/use-suspense-error-model' },
      },
      ref: {
        label: 'ref as prop',
        layer: 'element',
        resultTitle: '선택한 변화: ref as prop',
        resultSubtitle: '연결되는 기존 내부 구조',
        flow: ['createElement', 'props 표현', 'forwardRef deprecation'],
        description:
          'ref가 더 이상 createElement에서 별도 슬롯이 아니라 props의 한 키로 다뤄집니다. Element와 forwardRef의 의미가 함께 재정렬됩니다.',
        cta: { label: '관련 코드 살펴보기', href: '/ref-as-prop-element-shape' },
      },
      activity: {
        label: 'Activity',
        layer: 'priority',
        resultTitle: '선택한 변화: Activity',
        resultSubtitle: '연결되는 기존 내부 구조',
        flow: ['hidden subtree', 'Scheduler / lane', 'effect 수명'],
        description:
          'Activity는 보이지 않는 subtree를 낮은 우선순위로 살려 두는 모델입니다. Scheduler · lane · effect 수명의 정의가 함께 확장됩니다.',
        cta: { label: '관련 코드 살펴보기', href: '/activity-hidden-ui' },
      },
    },
  },
  followAlongMission: {
    number: '09',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '읽은 내용을 손으로 다시 정리해 보면 “지도 위 위치”가 더 또렷해집니다.',
    missions: [
      {
        mission: 'React 19 변화는 단순 목록이 아니라 구조 지도라는 점을 정리한다',
        helper: '변화가 어디에 얹히는지 먼저 본다.',
      },
      {
        mission: '19.0과 19.2 변화를 분리해 본다',
        helper: '버전별 맥락을 구분하면 이해가 쉬워진다.',
      },
      {
        mission: '앞으로 각 기능을 “어느 레이어 변화인가?”로 읽겠다는 기준을 세운다',
        helper: '모든 내용을 지도 위에서 해석한다.',
      },
    ],
  },
  keyTakeaways: {
    number: '10',
    eyebrow: 'Key Takeaways',
    title: '이번 페이지에서 반드시 기억할 것',
    cards: [
      {
        number: '01',
        iconKey: 'layers',
        title: 'React 19는 여러 내부 레이어에 걸친 변화다.',
        body: '업데이트, 렌더링, 표현, 자원 관리, 서버 경계, 우선순위까지 확장된다.',
      },
      {
        number: '02',
        iconKey: 'milestone',
        title: '19.0과 19.2를 나눠 읽어야 혼동이 줄어든다.',
        body: '버전별 변화의 폭과 목적이 다르다.',
      },
      {
        number: '03',
        iconKey: 'map',
        title: '이번 파트는 변화의 위치를 읽는 지도 역할을 한다.',
        body: '다음 페이지부터 각 변화의 내부 구조를 하나씩 파고든다.',
      },
    ],
  },
  nextCTA: {
    eyebrow: '다음 단계로',
    titleLines: ['다음:', 'Actions는 왜 업데이트 모델의 확장일까?'],
    description: '업데이트 흐름의 진입점과 상태 / 서버 연결을 깊이 파헤쳐 봅니다.',
    primary: {
      label: '다음: Actions는 왜 업데이트 모델의 확장일까?',
      href: '/actions-update-flow',
    },
    secondary: [
      { label: '전체 변화 지도 다시 보기', href: '#hero-heading' },
      { label: 'React 소스코드 열기', href: 'https://github.com/facebook/react' },
    ],
  },
  versionNote: {
    left: '기준 버전: react@19.2.6',
    right: '이 페이지의 구조 해석은 모두 해당 버전을 기준으로 합니다.',
  },
};

const en: React19ChangeMapContent = {
  hero: {
    badge: 'React 19 Changes · 1/10',
    titleLines: ['What changed in React 19,', 'and how should we read it?'],
    subtitleLines: [
      'Instead of memorizing a list of new features,',
      'we read what got layered on top of',
      "React's existing internal structure.",
    ],
    diagram: {
      title: 'Six layers of change in React 19',
      layers: [
        {
          layer: 'update',
          number: '01',
          name: 'Update model',
          feature: 'Actions',
          caption: 'Async updates · form actions · pending state',
        },
        {
          layer: 'render',
          number: '02',
          name: 'Render model',
          feature: 'use()',
          caption: 'Read resources during render · Suspense link',
        },
        {
          layer: 'element',
          number: '03',
          name: 'Element shape',
          feature: 'ref as prop',
          caption: 'props.ref · element.ref deprecation',
        },
        {
          layer: 'dom',
          number: '04',
          name: 'DOM resource mgmt',
          feature: 'metadata',
          caption: 'title · meta · link · script · style',
        },
        {
          layer: 'server',
          number: '05',
          name: 'Server boundary',
          feature: 'RSC',
          caption: 'Server Components · use client · use server',
        },
        {
          layer: 'priority',
          number: '06',
          name: 'Priority / lifetime',
          feature: 'Activity',
          caption: 'Hidden subtree · low-priority render',
        },
      ],
    },
    questionCard: {
      number: '02',
      eyebrow: "Today's question",
      questionLines: [
        'Where exactly inside React do',
        'Actions, use(), ref as prop, and Activity',
        'each plug in?',
      ],
      badges: [
        { label: 'Change map', iconKey: 'map' },
        { label: 'Version split', iconKey: 'milestone' },
        { label: 'Internal link', iconKey: 'route' },
      ],
    },
    guideCard: {
      eyebrow: 'Reading guide',
      bodyLines: [
        'This page is a map for reading the',
        'React 19.0 ~ 19.2.6 changes as extensions',
        "of React's existing internal structure.",
      ],
      source: 'Source basis: react@19.2.6',
    },
  },
  featureListTrap: {
    number: '03',
    eyebrow: 'List vs Structure',
    title: 'What you miss when you read React 19 only as a feature list',
    leftCard: {
      title: "If you only see the 'list'…",
      items: ['Actions', 'use()', 'ref as prop', 'metadata', 'Activity'],
    },
    arrowLabel: 'Place them on the structure',
    rightCard: {
      title: "But once placed on the 'structure'…",
      items: [
        { feature: 'Actions', body: 'Extends the update flow', layer: 'update' },
        { feature: 'use()', body: 'Reads resources during render', layer: 'render' },
        { feature: 'ref as prop', body: 'Reshapes Element / props', layer: 'element' },
        { feature: 'Activity', body: 'Hidden UI & low-priority render', layer: 'priority' },
      ],
    },
  },
  changeAxes: {
    number: '04',
    eyebrow: 'Six Axes',
    title: 'The six axes of change in React 19',
    description:
      'Each new feature is not "something brand new" — it shows where an existing internal axis got extended.',
    cards: [
      {
        number: '01',
        layer: 'update',
        iconKey: 'refresh',
        title: 'Update flow',
        features: 'Actions, Form Actions, useActionState',
        body: 'Where does an update start, and how does it reach state and server actions?',
        tags: ['Actions', 'Form Actions', 'useActionState'],
      },
      {
        number: '02',
        layer: 'render',
        iconKey: 'loader',
        title: 'Render model',
        features: 'use(), Suspense, Error Boundary',
        body: 'How do we read async resources mid-render and connect waiting & errors?',
        tags: ['use()', 'Suspense', 'Error Boundary'],
      },
      {
        number: '03',
        layer: 'element',
        iconKey: 'code',
        title: 'Element shape',
        features: 'ref as prop, element.ref deprecation',
        body: 'What do Element and props carry, and how does it affect component calls?',
        tags: ['ref as prop', 'element.ref dep'],
      },
      {
        number: '04',
        layer: 'dom',
        iconKey: 'file',
        title: 'DOM resource mgmt',
        features: 'title, meta, link, script, style',
        body: 'Declare and manage document/head resources at the component level.',
        tags: ['title', 'meta', 'link', 'script', 'style'],
      },
      {
        number: '05',
        layer: 'server',
        iconKey: 'server',
        title: 'Server boundary',
        features: 'Server Components, use client, use server',
        body: 'Split client and server roles cleanly along component boundaries.',
        tags: ['RSC', 'use client', 'use server'],
      },
      {
        number: '06',
        layer: 'priority',
        iconKey: 'activity',
        title: 'Priority & lifetime',
        features: 'Activity, useEffectEvent, cacheSignal, PPR',
        body: 'Extends hidden UI, low priority, event lifetime, cache signals, and PPR.',
        tags: ['Activity', 'useEffectEvent', 'PPR'],
      },
    ],
  },
  versionTimeline: {
    number: '05',
    eyebrow: 'Version Timeline',
    title: '19.0 → 19.2 → 19.2.6, the weight of change differs',
    description: 'Splitting versions lets the same word carry "when it landed" alongside.',
    cards: [
      {
        version: 'React 19.0',
        date: '2024.12',
        meaning: 'Large-scale reorganization of core features & shape',
        tags: ['Actions', 'use()', 'ref as prop', 'metadata', 'RSC stable'],
      },
      {
        version: 'React 19.2',
        date: '2025.04',
        meaning: 'Extends priority · lifetime · cache concepts',
        tags: ['Activity', 'useEffectEvent', 'cacheSignal', 'Partial Pre-rendering'],
      },
      {
        version: 'React 19.2.6',
        date: '2025.05',
        meaning: 'Baseline for the latest stable source exploration',
        description:
          'Every example and structural reading in this course is based on react@19.2.6.',
        tags: ['Source basis', 'Example basis', 'Reading basis'],
        cta: {
          label: 'Open react@19.2.6 source',
          href: 'https://github.com/facebook/react/releases/tag/v19.2.6',
        },
      },
    ],
  },
  previousTopicMap: {
    number: '06',
    eyebrow: 'Connect to Previous Topics',
    title: 'A change map that links to previous topics',
    description:
      'On top of the internal structure you already read, see where each React 19 feature lands.',
    headings: {
      question: 'Previous question',
      feature: 'React 19 feature',
      structure: 'Structural reading',
    },
    rows: [
      {
        question: 'How does an update start?',
        feature: 'Actions',
        layer: 'update',
        structureLines: ['Update model extended', 'Action → state / server / form, better linked'],
      },
      {
        question: 'Suspense / Error / Hydration',
        feature: 'use()',
        layer: 'render',
        structureLines: ['Render model extended', 'Read resources mid-render & track Thenables'],
      },
      {
        question: 'What React Element & JSX really are',
        feature: 'ref as prop',
        layer: 'element',
        structureLines: ['Element shape changed', 'How ref is passed reshapes Element / props'],
      },
      {
        question: 'Commit / DOM application',
        feature: 'metadata / resource',
        layer: 'dom',
        structureLines: ['DOM resource mgmt extended', 'Unified lifetime for head / doc resources'],
      },
      {
        question: 'Scheduler & priority',
        feature: 'Activity',
        layer: 'priority',
        structureLines: ['Priority & lifetime extended', 'Hidden subtree & low-priority render'],
      },
    ],
  },
  tenPageRoadmap: {
    number: '07',
    eyebrow: 'Roadmap',
    title: 'The full roadmap of these 10 pages',
    description: 'The next nine chapters after this one dive into each axis of change in turn.',
    items: [
      {
        number: '01',
        title: 'Change map',
        body: 'Overall structure & reading basis',
        active: true,
      },
      { number: '02', title: 'Actions', body: 'Understand the update flow extension' },
      { number: '03', title: 'Form Actions', body: 'Forms × event system' },
      { number: '04', title: 'use()', body: 'Read resources mid-render, connect Suspense' },
      { number: '05', title: 'ref as prop', body: 'Reading the Element shape change' },
      { number: '06', title: 'Metadata', body: 'A new model for document resources' },
      { number: '07', title: 'Server Components', body: 'Server boundary & contract' },
      { number: '08', title: 'Activity', body: 'Hidden UI & priority control' },
      { number: '09', title: 'useEffectEvent', body: 'Separating event-like Effect logic' },
      { number: '10', title: 'Reading 19.2+', body: 'Your own method for future changes' },
    ],
    sidePanel: {
      title: 'You are here',
      bodyLines: [
        '01 Change map is the entry point for the next 9 chapters.',
        'Each chapter reads one of the six axes of change deeply.',
        'Carry the "read it as a layer" perspective through to the end.',
      ],
      tagLabel: 'Goals of this part',
      tags: ['Read as layers', 'Split by version', 'Connect to internals'],
    },
  },
  changeLayerClassifier: {
    number: '08',
    eyebrow: 'Classifier',
    title: 'Change-layer classifier',
    description:
      'Click a feature name to see which internal structure that change connects to, as a one-line flow.',
    tabLabel: 'Pick a feature',
    resultLabel: 'Connected internal structure',
    defaultTab: 'use',
    results: {
      actions: {
        label: 'Actions',
        layer: 'update',
        resultTitle: 'Selected: Actions',
        resultSubtitle: 'Connected internal structure',
        flow: ['Update entry', 'updateQueue', 'transition / pending state'],
        description:
          'Actions define the async update flow beyond setState. Form actions and pending get layered on top of the existing updateQueue / lane model.',
        cta: { label: 'Look at related code', href: '/actions-update-flow' },
      },
      use: {
        label: 'use()',
        layer: 'render',
        resultTitle: 'Selected: use()',
        resultSubtitle: 'Connected internal structure',
        flow: ['Suspense', 'Error Boundary', 'Thenable tracking'],
        description:
          'use() reads a Thenable during render, hooking into the internal tracking flow so Suspense and Error Boundary can pick the UI back up.',
        cta: { label: 'Look at related code', href: '/use-suspense-error-model' },
      },
      ref: {
        label: 'ref as prop',
        layer: 'element',
        resultTitle: 'Selected: ref as prop',
        resultSubtitle: 'Connected internal structure',
        flow: ['createElement', 'props shape', 'forwardRef deprecation'],
        description:
          'ref is no longer a separate slot inside createElement — it becomes a key in props. Element and forwardRef are re-aligned together.',
        cta: { label: 'Look at related code', href: '/ref-as-prop-element-shape' },
      },
      activity: {
        label: 'Activity',
        layer: 'priority',
        resultTitle: 'Selected: Activity',
        resultSubtitle: 'Connected internal structure',
        flow: ['hidden subtree', 'Scheduler / lane', 'effect lifetime'],
        description:
          'Activity keeps an invisible subtree alive at a lower priority. Scheduler · lane · effect lifetime get extended together.',
        cta: { label: 'Look at related code', href: '/activity-hidden-ui' },
      },
    },
  },
  followAlongMission: {
    number: '09',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description:
      'Restating what you read with your own hands makes the "place on the map" sharper.',
    missions: [
      {
        mission: 'Capture that React 19 changes are a structural map, not just a list',
        helper: 'First, see where the change is placed.',
      },
      {
        mission: 'Split 19.0 and 19.2 changes and read them apart',
        helper: 'Separating versions makes the picture easier.',
      },
      {
        mission: 'Commit to reading every feature as "which layer changed?"',
        helper: 'Interpret everything on the map.',
      },
    ],
  },
  keyTakeaways: {
    number: '10',
    eyebrow: 'Key Takeaways',
    title: 'What you must remember from this page',
    cards: [
      {
        number: '01',
        iconKey: 'layers',
        title: 'React 19 is a change across several internal layers.',
        body: 'It extends update, render, shape, resource mgmt, server boundary, and priority.',
      },
      {
        number: '02',
        iconKey: 'milestone',
        title: 'Read 19.0 and 19.2 separately to reduce confusion.',
        body: 'The scope and goal of change differ by version.',
      },
      {
        number: '03',
        iconKey: 'map',
        title: 'This part is the map for reading where the changes live.',
        body: 'From the next page on, each axis is unpacked one by one.',
      },
    ],
  },
  nextCTA: {
    eyebrow: 'Next step',
    titleLines: ['Next:', 'Why are Actions an extension of the update model?'],
    description: 'Dig into the entry points of the update flow and the state / server connections.',
    primary: {
      label: 'Next: Why are Actions an extension of the update model?',
      href: '/actions-update-flow',
    },
    secondary: [
      { label: 'Replay the whole change map', href: '#hero-heading' },
      { label: 'Open the React source', href: 'https://github.com/facebook/react' },
    ],
  },
  versionNote: {
    left: 'Baseline version: react@19.2.6',
    right: 'All structural readings on this page assume this version.',
  },
};

export const react19ChangeMapContent: Record<Locale, React19ChangeMapContent> = { ko, en };
