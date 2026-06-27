import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type RvrIconName =
  | 'arrowRight'
  | 'box'
  | 'calendar'
  | 'check'
  | 'clock'
  | 'code'
  | 'cube'
  | 'fileCode'
  | 'fileText'
  | 'gitBranch'
  | 'help'
  | 'info'
  | 'layers'
  | 'monitor'
  | 'network'
  | 'queue'
  | 'server'
  | 'settings'
  | 'sliders'
  | 'smartphone'
  | 'star'
  | 'table'
  | 'workflow';

export type DiagramStep = { id: string; label: string };

export type RoleCard = {
  id: 'reconciler' | 'renderer';
  name: string;
  headline: string;
  description: string;
  tags: string[];
  iconName: RvrIconName;
  tone: ToneKey;
};

export type ComparisonRow = {
  id: string;
  label: string;
  reconciler: string;
  renderer: string;
};

export type RvrContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    a11yFlow: string;
    calculation: {
      title: string;
      subtitle: string;
      steps: DiagramStep[];
      footerLabel: string;
    };
    reflection: {
      title: string;
      subtitle: string;
      steps: DiagramStep[];
      footerLabel: string;
    };
  };
  summary: {
    eyebrow: string;
    title: string;
    description: string;
    cards: RoleCard[];
    centerBadge: { lead: string; symbol: string; tail: string };
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    columns: { reconciler: string; renderer: string };
    rows: ComparisonRow[];
  };
  hostConfig: {
    eyebrow: string;
    title: string;
    cardTitle: string;
    cardBody: string;
    emphasis: string;
    code: string;
    infoBanner: string;
  };
  domExample: {
    eyebrow: string;
    title: string;
    description: string;
    reconciler: {
      title: string;
      headline: string;
      items: string[];
    };
    renderer: {
      title: string;
      subtitle: string;
      code: string;
      items: string[];
    };
    banner: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    description: string;
    elementLabel: string;
    reconcilerLabel: string;
    reconcilerSubtitle: string;
    domRendererLabel: string;
    domRendererSubtitle: string;
    nativeRendererLabel: string;
    nativeRendererSubtitle: string;
    domNodeLabel: string;
    domNodeSubtitle: string;
    nativeViewLabel: string;
    nativeViewSubtitle: string;
    leftHelper: { title: string; body: string };
    rightHelper: { title: string; body: string };
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const HOST_CONFIG_CODE = `export type HostConfig = {
  // Host 노드 생성
  createInstance(
    type: string,
    props: Props,
    rootContainerInstance: Container,
  ): Instance;

  // 자식 추가
  appendChild(
    parent: Instance,
    child: Instance,
  ): void;

  // 커밋 전 준비
  prepareForCommit(
    containerInfo: Container,
  ): void;

  // 커밋 후 정리
  resetAfterCommit(
    containerInfo: Container,
  ): void;
};`;

const DOM_RENDERER_SAMPLE = `const div = document.createElement('div');
parent.appendChild(div);`;

export const rvrContent: Record<Locale, RvrContent> = {
  ko: {
    hero: {
      badge: '패키지 구조 · 5/10단계',
      title: {
        line1: 'React의 렌더링 계산과',
        line2: '실제 환경 반영은',
        line3: '분리되어 있습니다.',
      },
      description:
        'reconciler는 무엇이 바뀌어야 하는지 계산하고, renderer는 그 결과를 DOM이나 Native 환경에 반영합니다.',
      a11yFlow:
        '왼쪽 카드는 reconciler가 React Element를 Fiber 트리로 만들고 변경을 계산하는 흐름이고, 오른쪽 카드는 renderer가 Host Config를 호출해 DOM/Native에 반영하는 흐름이다. 두 카드는 점선 화살표로 연결된다.',
      calculation: {
        title: '계산',
        subtitle: 'reconciler',
        steps: [
          { id: 'element', label: 'React Element' },
          { id: 'fiber', label: 'Fiber 트리 생성' },
          { id: 'diff', label: '변경(diff) 계산' },
        ],
        footerLabel: '무엇이 바뀌어야 하는지 계산',
      },
      reflection: {
        title: '반영',
        subtitle: 'renderer',
        steps: [
          { id: 'host', label: 'Host Config 호출' },
          { id: 'mutate', label: 'DOM / Native 조작' },
          { id: 'paint', label: '실제 화면 반영' },
        ],
        footerLabel: '어떻게 반영할지 실행',
      },
    },
    summary: {
      eyebrow: '01 · 한 문장 정리',
      title: '두 역할을 한 문장으로 정리',
      description: '두 패키지의 책임을 한 문장으로 구분합니다.',
      centerBadge: { lead: '계산', symbol: '≠', tail: '반영' },
      cards: [
        {
          id: 'reconciler',
          name: 'reconciler',
          headline: '무엇을 바꿀지 계산한다.',
          description: '현재와 다음 상태를 비교하고, 변경 목록을 만든다.',
          tags: ['계산', '트리 순회', '비교', '작업 목록'],
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'renderer',
          name: 'renderer',
          headline: '어떻게 반영할지 실행한다.',
          description: '변경 목록을 받아 실제 환경(DOM, Native)에 적용한다.',
          tags: ['실행', '환경 연결', 'Host Config', '커밋'],
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
    },
    comparison: {
      eyebrow: '02 · 비교',
      title: 'reconciler vs renderer 비교',
      description: '네 가지 관점에서 두 패키지의 책임을 한 번에 정리합니다.',
      columns: { reconciler: 'reconciler', renderer: 'renderer' },
      rows: [
        {
          id: 'question',
          label: '핵심 질문',
          reconciler: '무엇이 달라졌고, 무엇을 바꿔야 하는가?',
          renderer: '어떻게 실제 환경에 반영할 것인가?',
        },
        {
          id: 'concept',
          label: '대표 개념',
          reconciler: 'Fiber, Flags, Render Work, Lane',
          renderer: 'Host Config, DOM Node, Native View',
        },
        {
          id: 'location',
          label: '대표 위치',
          reconciler: 'react-reconciler',
          renderer: 'react-dom / react-native 등 renderer 패키지',
        },
        {
          id: 'functions',
          label: '예시 함수',
          reconciler: 'createFiberFromElement, beginWork, completeWork',
          renderer: 'createInstance, appendChild, prepareForCommit',
        },
      ],
    },
    hostConfig: {
      eyebrow: '03 · Host Config',
      title: 'Host Config란 무엇인가?',
      cardTitle: 'renderer는 환경별 구현을 Host Config 형태로 제공합니다.',
      cardBody:
        'reconciler는 추상적인 작업만 알고, 실제 환경의 세부 구현은 Host Config가 담당합니다.',
      emphasis:
        'DOM renderer라면 DOM node 생성, 속성 설정, 이벤트 연결, 브라우저 특화 동작이 여기에 들어갑니다.',
      code: HOST_CONFIG_CODE,
      infoBanner:
        'DOM renderer라면 DOM node 생성, 속성 설정, 이벤트 연결, 브라우저 특화 동작이 여기에 들어갑니다.',
    },
    domExample: {
      eyebrow: '04 · DOM 렌더러 흐름',
      title: 'DOM renderer 예시 흐름',
      description: '계산이 끝난 변경 목록이 어떻게 실제 DOM 조작으로 이어지는지 따라갑니다.',
      reconciler: {
        title: 'reconciler',
        headline: '"div를 추가해야 한다"',
        items: [
          'Fiber 트리를 순회하여',
          '변경 목록(Placement) 생성',
          '무엇을 추가/삭제/수정할지 결정',
        ],
      },
      renderer: {
        title: 'DOM renderer',
        subtitle: 'Host Config',
        code: DOM_RENDERER_SAMPLE,
        items: ['Host Config의 appendChild 호출', '실제 DOM에 추가'],
      },
      banner: '계산 결과를 실제 환경에 반영하는 역할은 renderer가 맡는다.',
    },
    flow: {
      eyebrow: '05 · 공통/환경별 흐름',
      title: '공통 reconciler / 환경별 renderer 흐름도',
      description:
        '하나의 reconciler가 DOM과 Native 두 환경으로 갈라지는 구조를 한 번에 보여줍니다.',
      elementLabel: 'React Element',
      reconcilerLabel: 'reconciler',
      reconcilerSubtitle: '계산: Fiber 트리, 변경 목록',
      domRendererLabel: 'DOM renderer',
      domRendererSubtitle: 'Host Config: DOM 환경',
      nativeRendererLabel: 'Native renderer',
      nativeRendererSubtitle: 'Host Config: Native 환경',
      domNodeLabel: 'DOM node',
      domNodeSubtitle: '브라우저 화면',
      nativeViewLabel: 'Native view',
      nativeViewSubtitle: '모바일 네이티브 화면',
      leftHelper: {
        title: '공통 계산 엔진',
        body: 'reconciler는 환경을 알지 못하고 추상 작업만 수행합니다.',
      },
      rightHelper: {
        title: '환경별 반영 계층',
        body: 'renderer는 Host Config를 통해 각 환경의 세부 동작을 구현합니다.',
      },
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'scheduler',
      description:
        '계산과 반영의 분리를 이해했다면, 이번에는 그 작업이 언제 실행될지 조율하는 scheduler를 살펴봅니다.',
      cta: '다음 페이지로 이동',
      href: '/scheduler-usage',
    },
  },
  en: {
    hero: {
      badge: 'Packages · 5/10',
      title: {
        line1: "React's rendering computation",
        line2: 'and real-environment output',
        line3: 'are separated.',
      },
      description:
        'reconciler figures out what must change; renderer applies that result to the DOM or Native environment.',
      a11yFlow:
        'Left card shows the reconciler building a Fiber tree from React Elements and computing diffs; right card shows the renderer calling Host Config to update DOM/Native. The cards are connected by a dashed arrow.',
      calculation: {
        title: 'Compute',
        subtitle: 'reconciler',
        steps: [
          { id: 'element', label: 'React Element' },
          { id: 'fiber', label: 'Build Fiber tree' },
          { id: 'diff', label: 'Compute diff' },
        ],
        footerLabel: 'Decide what needs to change',
      },
      reflection: {
        title: 'Apply',
        subtitle: 'renderer',
        steps: [
          { id: 'host', label: 'Invoke Host Config' },
          { id: 'mutate', label: 'Mutate DOM / Native' },
          { id: 'paint', label: 'Update the screen' },
        ],
        footerLabel: 'Decide how to apply it',
      },
    },
    summary: {
      eyebrow: '01 · IN ONE SENTENCE',
      title: 'Both roles, in one sentence',
      description: 'A single line per package, side by side.',
      centerBadge: { lead: 'compute', symbol: '≠', tail: 'apply' },
      cards: [
        {
          id: 'reconciler',
          name: 'reconciler',
          headline: 'Computes what should change.',
          description: 'Compares current and next state, then builds a change list.',
          tags: ['Compute', 'Tree walk', 'Diff', 'Work list'],
          iconName: 'cube',
          tone: 'teal',
        },
        {
          id: 'renderer',
          name: 'renderer',
          headline: 'Executes how to apply the change.',
          description: 'Takes the change list and applies it to DOM / Native.',
          tags: ['Execute', 'Environment', 'Host Config', 'Commit'],
          iconName: 'monitor',
          tone: 'violet',
        },
      ],
    },
    comparison: {
      eyebrow: '02 · COMPARISON',
      title: 'reconciler vs renderer',
      description: 'Four angles, two answers — at a glance.',
      columns: { reconciler: 'reconciler', renderer: 'renderer' },
      rows: [
        {
          id: 'question',
          label: 'Key question',
          reconciler: 'What changed and what must we change?',
          renderer: 'How do we apply it to the real environment?',
        },
        {
          id: 'concept',
          label: 'Key concepts',
          reconciler: 'Fiber, Flags, Render Work, Lane',
          renderer: 'Host Config, DOM Node, Native View',
        },
        {
          id: 'location',
          label: 'Lives in',
          reconciler: 'react-reconciler',
          renderer: 'react-dom / react-native and other renderer packages',
        },
        {
          id: 'functions',
          label: 'Sample functions',
          reconciler: 'createFiberFromElement, beginWork, completeWork',
          renderer: 'createInstance, appendChild, prepareForCommit',
        },
      ],
    },
    hostConfig: {
      eyebrow: '03 · HOST CONFIG',
      title: 'What is Host Config?',
      cardTitle: 'Renderers expose their per-environment implementation through a Host Config.',
      cardBody:
        'reconciler only knows abstract operations; the concrete environment is implemented inside Host Config.',
      emphasis:
        'For the DOM renderer, this is where DOM-node creation, attribute setting, event wiring, and browser-specific behavior live.',
      code: HOST_CONFIG_CODE,
      infoBanner:
        'For the DOM renderer, this is where DOM-node creation, attribute setting, event wiring, and browser-specific behavior live.',
    },
    domExample: {
      eyebrow: '04 · DOM RENDERER FLOW',
      title: 'A DOM renderer example flow',
      description: 'Follow a single change list from computation to actual DOM mutation.',
      reconciler: {
        title: 'reconciler',
        headline: '"A div needs to be added"',
        items: [
          'Walks the Fiber tree',
          'Creates the change list (Placement)',
          'Decides what to add / remove / update',
        ],
      },
      renderer: {
        title: 'DOM renderer',
        subtitle: 'Host Config',
        code: DOM_RENDERER_SAMPLE,
        items: ['Calls Host Config’s appendChild', 'Appends to the actual DOM'],
      },
      banner: 'Applying the computed result to the real environment is the renderer’s job.',
    },
    flow: {
      eyebrow: '05 · SHARED / PER-ENV FLOW',
      title: 'Shared reconciler / per-environment renderer',
      description: 'One reconciler, two environments — DOM and Native — in a single picture.',
      elementLabel: 'React Element',
      reconcilerLabel: 'reconciler',
      reconcilerSubtitle: 'Computes: Fiber tree & change list',
      domRendererLabel: 'DOM renderer',
      domRendererSubtitle: 'Host Config: DOM',
      nativeRendererLabel: 'Native renderer',
      nativeRendererSubtitle: 'Host Config: Native',
      domNodeLabel: 'DOM node',
      domNodeSubtitle: 'Browser screen',
      nativeViewLabel: 'Native view',
      nativeViewSubtitle: 'Mobile native screen',
      leftHelper: {
        title: 'Shared compute engine',
        body: 'reconciler stays unaware of the environment and only performs abstract work.',
      },
      rightHelper: {
        title: 'Per-environment apply layer',
        body: 'Renderers implement per-environment details through Host Config.',
      },
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'scheduler',
      description:
        'Now that compute vs apply is clear, next we look at the layer that decides when the work runs — scheduler.',
      cta: 'Go to the next page',
      href: '/scheduler-usage',
    },
  },
};
