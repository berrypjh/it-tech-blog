import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../start/_shared/tones';

export type { ToneKey };

export type IconName =
  | 'atom'
  | 'cube'
  | 'monitor'
  | 'check'
  | 'fileCode'
  | 'network'
  | 'flag'
  | 'package'
  | 'workflow';

export type PositionCard = {
  id: 'element' | 'reconciler' | 'renderer' | 'host';
  title: string;
  description: string;
  tone: ToneKey;
  icon: IconName;
  emphasized?: boolean;
};

export type CompareCard = {
  id: 'reconciler' | 'renderer';
  title: string;
  bullets: string[];
  tag: string;
  tone: ToneKey;
  icon: IconName;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type FiberTreeNode = {
  id: string;
  label: string;
  /** 상태별 색 — 매핑은 FiberTreeCard 컴포넌트가 담당 */
  state: 'none' | 'update' | 'placement' | 'deletion';
  /** 들여쓰기 깊이 (0~) */
  depth: number;
  /** ascii 트리 prefix (├─ / └─ 등) */
  prefix: string;
};

export type PreviewCard = {
  id: 'fiberize' | 'tree' | 'render' | 'commit';
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type ReconcilerEntryContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string; line4: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    elementCard: {
      title: string;
      code: string;
      tone: ToneKey;
    };
    reconcilerCard: {
      title: string;
      bullets: string[];
      tone: ToneKey;
    };
    rendererCard: {
      title: string;
      description: string;
      envIcons: { label: string; icon: IconName }[];
      tone: ToneKey;
    };
  };
  position: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PositionCard[];
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    left: CompareCard;
    right: CompareCard;
    centerCopy: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ProcessStep[];
    treeTitle: string;
    treeNodes: FiberTreeNode[];
    legendTitle: string;
    legendItems: { state: FiberTreeNode['state']; label: string }[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    descriptionLabel: string;
    descriptionValue: string;
    learningQuestion: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    pointLabel: string;
    pointMessage: string;
  };
  preview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: PreviewCard[];
  };
  question: {
    eyebrow: string;
    title: string;
    question: string;
    hintLabel: string;
    hint: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    accentLine: { before: string; accent: string; after: string };
    primaryCta: string;
    secondaryCta: string;
    href: string;
    restartHref: string;
  };
};

const createFiberFromElementCode = `export function createFiberFromElement(element, mode, lanes) {
  const type = element.type;
  const key = element.key;
  const pendingProps = element.props;

  const fiber = createFiberFromTypeAndProps(
    type,
    key,
    pendingProps,
    null, // owner
    mode,
    lanes,
  );

  return fiber;
}
`;

const elementSnippet = `{
  type: 'div',
  key: null,
  props: { ... }
}`;

export const reconcilerEntryContent: Record<Locale, ReconcilerEntryContent> = {
  ko: {
    hero: {
      badge: '01 · react-reconciler 이해하기',
      title: {
        line1: 'React 내부 렌더링을',
        line2: '읽고 싶다면, 결국',
        line3: 'react-reconciler로',
        line4: '들어오게 됩니다.',
      },
      description:
        'Element를 Fiber로 바꾸고, 업데이트를 계산하고, commit을 준비하는 핵심 흐름이 이곳에 모입니다.',
      primaryCta: 'reconciler 지도 보기',
      secondaryCta: 'React GitHub 열기',
      primaryHref: '#section-position',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/react-reconciler',
      elementCard: {
        title: 'React Element',
        code: elementSnippet,
        tone: 'blue',
      },
      reconcilerCard: {
        title: 'react-reconciler',
        bullets: [
          'Element → Fiber',
          '트리 비교 (Reconciliation)',
          '변경 계산 (Flags)',
          'Commit 준비',
        ],
        tone: 'violet',
      },
      rendererCard: {
        title: 'Renderer',
        description: 'DOM / Native / 기타 환경',
        envIcons: [
          { label: 'Browser', icon: 'monitor' },
          { label: 'Native', icon: 'cube' },
          { label: 'Custom', icon: 'package' },
        ],
        tone: 'emerald',
      },
    },
    position: {
      eyebrow: '02 · reconciler position',
      title: 'reconciler의 위치 한눈에 보기',
      description: '전체 렌더링 파이프라인에서 reconciler가 어디에 위치하는지 짚어둡니다.',
      cards: [
        {
          id: 'element',
          title: 'React Element',
          description: '컴포넌트가 반환하는 UI 설명 객체',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'reconciler',
          title: 'react-reconciler',
          description: 'Fiber 생성, 트리 비교, 변경 계산, commit 준비',
          tone: 'violet',
          icon: 'cube',
          emphasized: true,
        },
        {
          id: 'renderer',
          title: 'Renderer',
          description: 'DOM / Native / 기타 환경',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'host',
          title: '실제 환경 반영',
          description: '브라우저 DOM / 네이티브 UI / 커스텀 환경에 반영',
          tone: 'teal',
          icon: 'check',
        },
      ],
    },
    compare: {
      eyebrow: '03 · reconciler vs renderer',
      title: 'renderer와 reconciler의 차이',
      description: '계산과 반영은 분리되어 있고, 각자 다른 책임을 가집니다.',
      left: {
        id: 'reconciler',
        title: 'reconciler',
        bullets: [
          '트리 비교 (Reconciliation)',
          'Fiber 노드 생성 및 연결',
          '업데이트 계산 및 flags 설정',
          'Commit 단계가 사용할 결과 준비',
        ],
        tag: '계산 담당',
        tone: 'violet',
        icon: 'cube',
      },
      right: {
        id: 'renderer',
        title: 'renderer',
        bullets: [
          '실제 host 환경에 자식 생성',
          'DOM 노드 삽입/삭제/업데이트',
          '텍스트 노드 조작',
          '이벤트 시스템 및 환경 연동',
        ],
        tag: '반영 담당',
        tone: 'emerald',
        icon: 'monitor',
      },
      centerCopy: '계산과 반영은\n분리되어 있다.',
    },
    process: {
      eyebrow: '04 · what happens inside',
      title: 'reconciler 안에서 벌어지는 일',
      description: 'Element가 들어오면 reconciler는 다음 4단계를 순서대로 수행합니다.',
      steps: [
        {
          number: '1',
          title: 'Element를 Fiber로 만든다.',
          description: '컴포넌트가 반환한 Element를 Fiber 노드로 변환합니다.',
          icon: 'fileCode',
        },
        {
          number: '2',
          title: '현재 트리와 새 트리를 비교한다.',
          description: '기존 Fiber 트리와 새 Element 트리를 비교하여 변경을 찾습니다.',
          icon: 'network',
        },
        {
          number: '3',
          title: '필요한 변경을 flags로 표시한다.',
          description: 'Placement, Update, Deletion 등의 변경 타입을 Fiber에 기록합니다.',
          icon: 'flag',
        },
        {
          number: '4',
          title: 'commit 단계가 사용할 결과를 준비한다.',
          description: '변경 목록을 완성하고, 실제 반영 단계가 사용할 정보를 정리합니다.',
          icon: 'package',
        },
      ],
      treeTitle: 'Fiber 트리 예시',
      treeNodes: [
        { id: 'app', label: 'App (root)', state: 'none', depth: 0, prefix: '' },
        { id: 'header', label: 'Header', state: 'update', depth: 1, prefix: '├─' },
        { id: 'main', label: 'Main', state: 'none', depth: 1, prefix: '└─' },
        { id: 'article', label: 'Article', state: 'placement', depth: 2, prefix: '├─' },
        { id: 'sidebar', label: 'Sidebar', state: 'deletion', depth: 2, prefix: '└─' },
      ],
      legendTitle: '상태 범례',
      legendItems: [
        { state: 'none', label: '변경 없음' },
        { state: 'update', label: 'Update' },
        { state: 'placement', label: 'Placement' },
        { state: 'deletion', label: 'Deletion' },
      ],
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: '코드 체크포인트: Element가 Fiber로 바뀌는 순간',
      fileLabel: '파일',
      filePath: 'packages/react-reconciler/src/ReactFiber.js',
      functionLabel: '볼 함수',
      functionName: 'createFiberFromElement',
      descriptionLabel: '설명',
      descriptionValue: 'Element의 type, key, props 등을 읽어 Fiber 노드를 생성합니다.',
      learningQuestion: 'Element의 어떤 값들이\nFiber 생성에 사용되는가?',
      primaryCta: 'ReactFiber.js 읽기',
      secondaryCta: 'Element → Fiber 설명 보기',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
      secondaryHref: '/element-vs-fiber',
      codeHeader: 'packages/react-reconciler/src/ReactFiber.js',
      codeBadge: 'main',
      code: createFiberFromElementCode,
      pointLabel: '포인트',
      pointMessage: 'Element의 type, key, props(pendingProps)가 Fiber 생성으로 전달됩니다.',
    },
    preview: {
      eyebrow: '06 · what comes next',
      title: '이후 심화 페이지 예고',
      description: '이번 페이지는 React 내부 구조 학습의 관문일 뿐입니다.',
      cards: [
        {
          id: 'fiberize',
          title: '컴포넌트는 어떻게\nFiber가 되는가?',
          description: '함수/클래스 컴포넌트가 Fiber로 변환되는 과정을 이해합니다.',
          badge: '다음 페이지',
          tone: 'violet',
        },
        {
          id: 'tree',
          title: 'Fiber 트리와\n렌더링 자료구조',
          description: 'FiberNode 구조, 연결 방식, 트리 탐색 원리를 살펴봅니다.',
          badge: '2단계',
          tone: 'indigo',
        },
        {
          id: 'render',
          title: 'Reconciler와\nRender Phase',
          description: 'beginWork / completeWork 흐름과 변경 계산 과정을 이해합니다.',
          badge: '3단계',
          tone: 'blue',
        },
        {
          id: 'commit',
          title: 'Commit Phase와\n실제 DOM 반영',
          description: 'commit 단계의 세부 과정과 DOM 반영 메커니즘을 살펴봅니다.',
          badge: '4단계',
          tone: 'emerald',
        },
      ],
    },
    question: {
      eyebrow: '07 · concept check',
      title: '개념 점검 질문',
      question: 'React가 Element를 바로 DOM으로 바꾸지 않고 중간에 Fiber를 두는 이유는 무엇일까?',
      hintLabel: '힌트',
      hint: '작업 단위를 관리하고, 변경 계산을 나누어 처리하기 위해서.',
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '렌더링 계산의 중심을 이해했다면,',
      accentLine: {
        before: '이제 그 작업을 언제 실행할지 조율하는 ',
        accent: 'scheduler 패키지',
        after: '를 살펴봅니다.',
      },
      primaryCta: '다음: scheduler 패키지',
      secondaryCta: '이전 페이지 다시 보기',
      href: '/scheduler-role',
      restartHref: '/react-vs-react-dom',
    },
  },
  en: {
    hero: {
      badge: '01 · understand react-reconciler',
      title: {
        line1: 'If you want to read',
        line2: 'React’s internal renderer,',
        line3: 'you eventually arrive',
        line4: 'at react-reconciler.',
      },
      description:
        'Converting Element to Fiber, computing updates and preparing commit — these core flows all meet here.',
      primaryCta: 'See the reconciler map',
      secondaryCta: 'Open React on GitHub',
      primaryHref: '#section-position',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/react-reconciler',
      elementCard: {
        title: 'React Element',
        code: elementSnippet,
        tone: 'blue',
      },
      reconcilerCard: {
        title: 'react-reconciler',
        bullets: [
          'Element → Fiber',
          'Tree compare (Reconciliation)',
          'Change calculation (Flags)',
          'Commit preparation',
        ],
        tone: 'violet',
      },
      rendererCard: {
        title: 'Renderer',
        description: 'DOM / Native / Other host',
        envIcons: [
          { label: 'Browser', icon: 'monitor' },
          { label: 'Native', icon: 'cube' },
          { label: 'Custom', icon: 'package' },
        ],
        tone: 'emerald',
      },
    },
    position: {
      eyebrow: '02 · reconciler position',
      title: 'Where reconciler sits in the flow',
      description: 'A quick look at where reconciler lives inside the broader rendering pipeline.',
      cards: [
        {
          id: 'element',
          title: 'React Element',
          description: 'UI description object returned by components',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'reconciler',
          title: 'react-reconciler',
          description: 'Create fibers, diff trees, compute changes, prepare commit',
          tone: 'violet',
          icon: 'cube',
          emphasized: true,
        },
        {
          id: 'renderer',
          title: 'Renderer',
          description: 'DOM / Native / other hosts',
          tone: 'emerald',
          icon: 'monitor',
        },
        {
          id: 'host',
          title: 'Real environment',
          description: 'Apply to browser DOM / native UI / custom host',
          tone: 'teal',
          icon: 'check',
        },
      ],
    },
    compare: {
      eyebrow: '03 · reconciler vs renderer',
      title: 'How reconciler and renderer differ',
      description: 'Calculation and reflection are split — each side owns its responsibility.',
      left: {
        id: 'reconciler',
        title: 'reconciler',
        bullets: [
          'Tree compare (Reconciliation)',
          'Fiber node creation and linking',
          'Computes updates and sets flags',
          'Prepares results for the commit phase',
        ],
        tag: 'Calculation',
        tone: 'violet',
        icon: 'cube',
      },
      right: {
        id: 'renderer',
        title: 'renderer',
        bullets: [
          'Creates host-environment children',
          'Inserts / removes / updates DOM nodes',
          'Manipulates text nodes',
          'Hooks into the event system and host',
        ],
        tag: 'Reflection',
        tone: 'emerald',
        icon: 'monitor',
      },
      centerCopy: 'Calculation and reflection\nare separated.',
    },
    process: {
      eyebrow: '04 · what happens inside',
      title: 'What happens inside the reconciler',
      description: 'When Elements come in, the reconciler runs these four steps in order.',
      steps: [
        {
          number: '1',
          title: 'Turn Element into a Fiber.',
          description: 'Convert the Element a component returned into a Fiber node.',
          icon: 'fileCode',
        },
        {
          number: '2',
          title: 'Diff the current and new trees.',
          description: 'Compare the existing Fiber tree with the new Element tree.',
          icon: 'network',
        },
        {
          number: '3',
          title: 'Mark required changes with flags.',
          description: 'Record Placement, Update, Deletion and other types on each Fiber.',
          icon: 'flag',
        },
        {
          number: '4',
          title: 'Prepare results for the commit phase.',
          description: 'Finalise the change list and the data the commit phase will use.',
          icon: 'package',
        },
      ],
      treeTitle: 'Fiber tree example',
      treeNodes: [
        { id: 'app', label: 'App (root)', state: 'none', depth: 0, prefix: '' },
        { id: 'header', label: 'Header', state: 'update', depth: 1, prefix: '├─' },
        { id: 'main', label: 'Main', state: 'none', depth: 1, prefix: '└─' },
        { id: 'article', label: 'Article', state: 'placement', depth: 2, prefix: '├─' },
        { id: 'sidebar', label: 'Sidebar', state: 'deletion', depth: 2, prefix: '└─' },
      ],
      legendTitle: 'Status legend',
      legendItems: [
        { state: 'none', label: 'Unchanged' },
        { state: 'update', label: 'Update' },
        { state: 'placement', label: 'Placement' },
        { state: 'deletion', label: 'Deletion' },
      ],
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: 'Code checkpoint: the moment Element becomes Fiber',
      fileLabel: 'File',
      filePath: 'packages/react-reconciler/src/ReactFiber.js',
      functionLabel: 'Function',
      functionName: 'createFiberFromElement',
      descriptionLabel: 'Description',
      descriptionValue: 'Reads type, key, props from an Element and creates a Fiber node.',
      learningQuestion: 'Which Element values\nflow into Fiber creation?',
      primaryCta: 'Read ReactFiber.js',
      secondaryCta: 'See Element → Fiber',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiber.js',
      secondaryHref: '/element-vs-fiber',
      codeHeader: 'packages/react-reconciler/src/ReactFiber.js',
      codeBadge: 'main',
      code: createFiberFromElementCode,
      pointLabel: 'Takeaway',
      pointMessage: 'Element.type, key and props (pendingProps) flow into Fiber creation.',
    },
    preview: {
      eyebrow: '06 · what comes next',
      title: 'What comes next in this series',
      description: 'This page is only the doorway to a deeper internals tour.',
      cards: [
        {
          id: 'fiberize',
          title: 'How components\nbecome Fiber',
          description: 'Understand how function/class components are converted into Fibers.',
          badge: 'Next page',
          tone: 'violet',
        },
        {
          id: 'tree',
          title: 'Fiber tree and\nrender data structures',
          description: 'Explore FiberNode shape, linking and tree traversal rules.',
          badge: 'Stage 2',
          tone: 'indigo',
        },
        {
          id: 'render',
          title: 'Reconciler and\nrender phase',
          description: 'Walk through beginWork / completeWork and change calculation.',
          badge: 'Stage 3',
          tone: 'blue',
        },
        {
          id: 'commit',
          title: 'Commit phase and\nDOM updates',
          description: 'Inspect the commit phase in detail and how it lands in the DOM.',
          badge: 'Stage 4',
          tone: 'emerald',
        },
      ],
    },
    question: {
      eyebrow: '07 · concept check',
      title: 'Concept-check question',
      question:
        'Why does React put a Fiber in between, instead of turning Element directly into DOM?',
      hintLabel: 'Hint',
      hint: 'To manage units of work and split change calculation into chunks.',
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'With the rendering core understood,',
      accentLine: {
        before: 'next we look at the ',
        accent: 'scheduler package',
        after: ' — the one that decides when that work runs.',
      },
      primaryCta: 'Next: scheduler package',
      secondaryCta: 'Revisit the previous page',
      href: '/scheduler-role',
      restartHref: '/react-vs-react-dom',
    },
  },
};
