import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type FiberKind = 'hostRoot' | 'hostComponent' | 'classComponent';

export type TargetCard = {
  id: FiberKind;
  title: string;
  subtitle: string;
  iconName: 'home' | 'cube' | 'user';
  tone: ToneKey;
};

export type ByTagCard = {
  id: FiberKind;
  title: string;
  mainArrow: string;
  body: string;
  badge: string;
  tone: ToneKey;
  iconName: 'home' | 'cube' | 'user';
};

export type FlowStep = {
  id: string;
  code: string;
  tone: ToneKey;
  isEmphasis?: boolean;
};

export type ReasonCard = {
  id: string;
  title: string;
  body: string;
  tone: ToneKey;
  iconName: 'alert' | 'workflow' | 'link';
};

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
};

export type CodeAnnotation = {
  /** 1-based line range (inclusive) */
  from: number;
  to: number;
  label: string;
  tone: ToneKey;
};

export type FiberStateNodeContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    emphasis: string;
    description: string;
    cardLabel: string;
    fiberFields: { label: string; isStateNode?: boolean }[];
    pillLabel: string;
    targets: TargetCard[];
  };
  misconception: {
    number: string;
    eyebrow: string;
    title: string;
    misLabel: string;
    misText: { lines: string[] };
    misDescription: string;
    centerText: string;
    correctLabel: string;
    correctText: { lines: string[] };
    correctDescription: string;
  };
  byTag: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ByTagCard[];
  };
  hostRoot: {
    number: string;
    eyebrow: string;
    title: string;
    flowLabel: string;
    flowSteps: FlowStep[];
    diagram: {
      leftTitle: string;
      leftSubtitle: string;
      leftFields: string[];
      rightTitle: string;
      rightSubtitle: string;
      rightFields: { label: string; isStateNode?: boolean }[];
      arrow1Label: string;
      arrow2Label: string;
    };
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      file: string;
      lookForLabel: string;
      lookForLines: string[];
      questionLabel: string;
      question: string;
      buttonLabel: string;
      buttonHref: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
      annotations: CodeAnnotation[];
    };
    banner: string;
  };
  reasons: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ReasonCard[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCode = `function createFiberRoot(containerInfo, tag, isStrictMode) {
  const root = new FiberRootNode(containerInfo, tag, ...);

  const uninitializedFiber = createHostRootFiber(tag, isStrictMode);

  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  return root;
}`;

const ko: FiberStateNodeContent = {
  hero: {
    badge: 'Fiber 트리 · 3/10단계',
    title: {
      line1: 'stateNode는 Fiber가',
      line2: '외부 대상과 연결되는',
      line3: '자리입니다.',
    },
    emphasis: '외부 대상과 연결되는',
    description:
      '어떤 Fiber는 루트 객체와, 어떤 Fiber는 렌더러의 host instance와, 어떤 Fiber는 내부 인스턴스와 연결됩니다.',
    cardLabel: 'Fiber',
    fiberFields: [
      { label: 'tag' },
      { label: 'key' },
      { label: 'elementType' },
      { label: 'type' },
      { label: '...' },
      { label: 'stateNode', isStateNode: true },
    ],
    pillLabel: 'stateNode',
    targets: [
      {
        id: 'hostRoot',
        title: 'Root 객체',
        subtitle: 'HostRoot Fiber',
        iconName: 'home',
        tone: 'sky',
      },
      {
        id: 'hostComponent',
        title: 'Host Instance',
        subtitle: 'HostComponent Fiber',
        iconName: 'cube',
        tone: 'emerald',
      },
      {
        id: 'classComponent',
        title: 'Class Instance',
        subtitle: 'ClassComponent Fiber',
        iconName: 'user',
        tone: 'violet',
      },
    ],
  },
  misconception: {
    number: '01',
    eyebrow: '오해 바로잡기',
    title: '가장 중요한 오해 바로잡기',
    misLabel: '오해',
    misText: { lines: ['stateNode는', '항상 DOM node다.'] },
    misDescription: '일부 경우에만 맞는 이해입니다.',
    centerText: '정확히 이해하기',
    correctLabel: '정확히',
    correctText: { lines: ['Fiber 종류에 따라', '연결 대상이 달라진다.'] },
    correctDescription: 'stateNode는 ‘연결 슬롯’입니다.',
  },
  byTag: {
    number: '02',
    eyebrow: 'tag별 의미',
    title: 'tag에 따라 stateNode 의미가 달라진다',
    cards: [
      {
        id: 'hostRoot',
        title: 'HostRoot Fiber',
        mainArrow: '→ FiberRoot 객체와 연결',
        body: '루트 Fiber는 전체 트리를 관리하는 FiberRoot 객체와 연결됩니다.',
        badge: 'tag: HostRoot',
        tone: 'sky',
        iconName: 'home',
      },
      {
        id: 'hostComponent',
        title: 'HostComponent Fiber',
        mainArrow: '→ 렌더러가 만든 host instance와 연결',
        body: 'DOM 노드 또는 네이티브 노드 등 실제 렌더링 대상과 연결됩니다.',
        badge: 'tag: HostComponent',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'classComponent',
        title: 'ClassComponent Fiber',
        mainArrow: '→ 클래스 인스턴스와 연결',
        body: '클래스 컴포넌트의 실제 인스턴스와 연결됩니다.',
        badge: 'tag: ClassComponent',
        tone: 'violet',
        iconName: 'user',
      },
    ],
  },
  hostRoot: {
    number: '03',
    eyebrow: 'HostRoot 사례',
    title: 'HostRoot Fiber 사례',
    flowLabel: '코드 흐름',
    flowSteps: [
      { id: 'create', code: 'createHostRootFiber()', tone: 'sky' },
      { id: 'current', code: 'root.current = uninitializedFiber', tone: 'sky' },
      {
        id: 'stateNode',
        code: 'uninitializedFiber.stateNode = root',
        tone: 'emerald',
        isEmphasis: true,
      },
    ],
    diagram: {
      leftTitle: 'FiberRoot 객체',
      leftSubtitle: '(root)',
      leftFields: ['containerInfo', 'current', 'pendingChildren', 'callbackNode', '...'],
      rightTitle: 'HostRoot Fiber',
      rightSubtitle: '(tag: HostRoot)',
      rightFields: [
        { label: 'tag' },
        { label: 'key' },
        { label: 'type' },
        { label: 'stateNode', isStateNode: true },
        { label: 'child' },
        { label: '...' },
      ],
      arrow1Label: 'current',
      arrow2Label: 'stateNode 연결',
    },
  },
  checkpoint: {
    number: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactFiberRoot.js',
      lookForLabel: '볼 것',
      lookForLines: ['root.current = uninitializedFiber', 'uninitializedFiber.stateNode = root'],
      questionLabel: '학습 질문',
      question: '루트 Fiber의 stateNode는 무엇과 연결될까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRoot.js',
    },
    code: {
      fileName: 'ReactFiberRoot.js',
      language: 'JavaScript',
      content: checkpointCode,
      annotations: [
        { from: 6, to: 6, label: 'current 연결', tone: 'sky' },
        { from: 7, to: 7, label: 'stateNode 연결', tone: 'emerald' },
      ],
    },
    banner: 'HostRoot Fiber의 stateNode는 FiberRoot 객체(root)를 가리킵니다.',
  },
  reasons: {
    number: '05',
    eyebrow: '넓은 이해',
    title: 'stateNode를 넓게 이해해야 하는 이유',
    cards: [
      {
        id: 'host-root',
        title: 'DOM으로 단정하면 HostRoot를 설명할 수 없다',
        body: '루트 Fiber의 stateNode는 DOM이 아니라 FiberRoot 객체다.',
        tone: 'sky',
        iconName: 'alert',
      },
      {
        id: 'by-tag',
        title: 'Fiber tag마다 연결 대상이 달라진다는 점을 놓치게 된다',
        body: 'HostComponent, ClassComponent 등 모두 다른 대상을 가리킨다.',
        tone: 'emerald',
        iconName: 'workflow',
      },
      {
        id: 'commit-phase',
        title: 'Commit Phase에서 host instance 연결을 이해하기 어려워진다',
        body: 'stateNode가 실제 렌더링 대상과 언제 연결되는지 흐름을 놓치게 된다.',
        tone: 'violet',
        iconName: 'link',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    questionLabel: '질문',
    answerLabel: '정답',
    explanationLabel: '해설',
    cards: [
      {
        id: 'q1',
        question: 'HostRoot Fiber의 stateNode는 무엇을 가리킬까?',
        answer: 'FiberRoot 객체.',
        explanation: '루트 Fiber는 전체 Fiber 트리를 관리하는 FiberRoot 객체(root)와 연결된다.',
      },
      {
        id: 'q2',
        question: 'stateNode는 항상 DOM node일까?',
        answer: '아니다.',
        explanation: 'tag에 따라 DOM, 클래스 인스턴스, 루트 객체 등 다양한 대상을 가리킨다.',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'return / child / sibling',
    description:
      'Fiber가 외부 대상과 연결되는 방식까지 봤다면, 이제 Fiber들이 실제로 트리를 이루는 포인터 구조를 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-pointers',
  },
};

const en: FiberStateNodeContent = {
  hero: {
    badge: 'Fiber Tree · 3/10',
    title: {
      line1: 'stateNode is the slot',
      line2: 'where a Fiber connects',
      line3: 'to something external.',
    },
    emphasis: 'where a Fiber connects',
    description:
      'Some Fibers connect to a root object, some to a renderer host instance, and some to an internal instance.',
    cardLabel: 'Fiber',
    fiberFields: [
      { label: 'tag' },
      { label: 'key' },
      { label: 'elementType' },
      { label: 'type' },
      { label: '...' },
      { label: 'stateNode', isStateNode: true },
    ],
    pillLabel: 'stateNode',
    targets: [
      {
        id: 'hostRoot',
        title: 'Root object',
        subtitle: 'HostRoot Fiber',
        iconName: 'home',
        tone: 'sky',
      },
      {
        id: 'hostComponent',
        title: 'Host instance',
        subtitle: 'HostComponent Fiber',
        iconName: 'cube',
        tone: 'emerald',
      },
      {
        id: 'classComponent',
        title: 'Class instance',
        subtitle: 'ClassComponent Fiber',
        iconName: 'user',
        tone: 'violet',
      },
    ],
  },
  misconception: {
    number: '01',
    eyebrow: 'BUST THE MYTH',
    title: 'The most important misconception',
    misLabel: 'Myth',
    misText: { lines: ['stateNode is always', 'a DOM node.'] },
    misDescription: 'That is only true in some cases.',
    centerText: 'understand precisely',
    correctLabel: 'Actually',
    correctText: { lines: ['Its target changes', 'with the Fiber kind.'] },
    correctDescription: 'stateNode is a connection slot.',
  },
  byTag: {
    number: '02',
    eyebrow: 'MEANING BY TAG',
    title: 'stateNode meaning depends on the Fiber tag',
    cards: [
      {
        id: 'hostRoot',
        title: 'HostRoot Fiber',
        mainArrow: '→ links to the FiberRoot object',
        body: 'The root Fiber connects to the FiberRoot object that manages the whole tree.',
        badge: 'tag: HostRoot',
        tone: 'sky',
        iconName: 'home',
      },
      {
        id: 'hostComponent',
        title: 'HostComponent Fiber',
        mainArrow: '→ links to the renderer’s host instance',
        body: 'Connects to the actual render target — DOM nodes, native nodes, etc.',
        badge: 'tag: HostComponent',
        tone: 'emerald',
        iconName: 'cube',
      },
      {
        id: 'classComponent',
        title: 'ClassComponent Fiber',
        mainArrow: '→ links to the class instance',
        body: 'Connects to the real instance of the class component.',
        badge: 'tag: ClassComponent',
        tone: 'violet',
        iconName: 'user',
      },
    ],
  },
  hostRoot: {
    number: '03',
    eyebrow: 'HOSTROOT EXAMPLE',
    title: 'HostRoot Fiber — a concrete example',
    flowLabel: 'Code flow',
    flowSteps: [
      { id: 'create', code: 'createHostRootFiber()', tone: 'sky' },
      { id: 'current', code: 'root.current = uninitializedFiber', tone: 'sky' },
      {
        id: 'stateNode',
        code: 'uninitializedFiber.stateNode = root',
        tone: 'emerald',
        isEmphasis: true,
      },
    ],
    diagram: {
      leftTitle: 'FiberRoot object',
      leftSubtitle: '(root)',
      leftFields: ['containerInfo', 'current', 'pendingChildren', 'callbackNode', '...'],
      rightTitle: 'HostRoot Fiber',
      rightSubtitle: '(tag: HostRoot)',
      rightFields: [
        { label: 'tag' },
        { label: 'key' },
        { label: 'type' },
        { label: 'stateNode', isStateNode: true },
        { label: 'child' },
        { label: '...' },
      ],
      arrow1Label: 'current',
      arrow2Label: 'stateNode link',
    },
  },
  checkpoint: {
    number: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactFiberRoot.js',
      lookForLabel: 'Look for',
      lookForLines: ['root.current = uninitializedFiber', 'uninitializedFiber.stateNode = root'],
      questionLabel: 'Learning question',
      question: 'What does the root Fiber’s stateNode connect to?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberRoot.js',
    },
    code: {
      fileName: 'ReactFiberRoot.js',
      language: 'JavaScript',
      content: checkpointCode,
      annotations: [
        { from: 6, to: 6, label: 'current link', tone: 'sky' },
        { from: 7, to: 7, label: 'stateNode link', tone: 'emerald' },
      ],
    },
    banner: 'The HostRoot Fiber’s stateNode points to the FiberRoot object (root).',
  },
  reasons: {
    number: '05',
    eyebrow: 'BROADER VIEW',
    title: 'Why stateNode needs the broader view',
    cards: [
      {
        id: 'host-root',
        title: 'Calling it a DOM node breaks HostRoot',
        body: 'The root Fiber’s stateNode is the FiberRoot object, not a DOM node.',
        tone: 'sky',
        iconName: 'alert',
      },
      {
        id: 'by-tag',
        title: 'You miss that targets change per Fiber tag',
        body: 'HostComponent and ClassComponent each point to different things.',
        tone: 'emerald',
        iconName: 'workflow',
      },
      {
        id: 'commit-phase',
        title: 'You lose the host-instance link in commit phase',
        body: 'You can no longer track when stateNode connects to the real render target.',
        tone: 'violet',
        iconName: 'link',
      },
    ],
  },
  quiz: {
    number: '06',
    eyebrow: 'MINI QUIZ',
    title: 'Mini quiz',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    explanationLabel: 'Explanation',
    cards: [
      {
        id: 'q1',
        question: 'What does the HostRoot Fiber’s stateNode point to?',
        answer: 'The FiberRoot object.',
        explanation:
          'The root Fiber connects to the FiberRoot object (root) that manages the whole Fiber tree.',
      },
      {
        id: 'q2',
        question: 'Is stateNode always a DOM node?',
        answer: 'No.',
        explanation:
          'Depending on the tag, it can point to a DOM node, a class instance, or a root object.',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'return / child / sibling',
    description:
      'Now that you know how a Fiber connects to something external, look at the pointer structure that actually forms the Fiber tree.',
    cta: 'Go to the next page',
    href: '/fiber-pointers',
  },
};

export const fiberStateNodeContent: Record<Locale, FiberStateNodeContent> = { ko, en };
