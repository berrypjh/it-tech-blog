import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type InputCard = {
  title: string;
  description: string;
  detail: string;
  tone: ToneKey;
  icon: 'tree' | 'cube' | 'fileText';
};

export type ChildShapeCard = {
  title: string;
  example: string;
  description: string;
  tone: ToneKey;
  icon: 'element' | 'array' | 'portal' | 'sparkle';
};

export type VisualNode = {
  title: string;
  subtitle?: string;
  signature?: string;
  description: string;
  tone: ToneKey;
};

export type ReconcileChildrenContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      currentCard: { title: string; subtitle: string; description: string };
      centerCard: { title: string; signature: string; description: string };
      newCard: { title: string; subtitle: string; description: string };
      inputCard: { title: string; description: string };
    };
  };
  inputs: {
    eyebrow: string;
    title: string;
    cards: InputCard[];
  };
  mountVsUpdate: {
    eyebrow: string;
    title: string;
    mount: {
      condition: string;
      fn: string;
      title: string;
      description: string;
      outcomes: string[];
    };
    update: {
      condition: string;
      fn: string;
      title: string;
      description: string;
      outcomes: string[];
    };
  };
  childShape: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: ChildShapeCard[];
  };
  code: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    fileName: string;
    functionLabel: string;
    functions: string[];
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
  };
  visualization: {
    eyebrow: string;
    title: string;
    nodes: VisualNode[];
    bottomEmphasis: string;
  };
  goal: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const CODE = `function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  if (current === null) {
    workInProgress.child = mountChildFibers(workInProgress, null, nextChildren, renderLanes);
  } else {
    workInProgress.child = reconcileChildFibers(
      current.child,
      workInProgress,
      nextChildren,
      renderLanes,
    );
  }
}`;

const ko: ReconcileChildrenContent = {
  hero: {
    badge: 'Render Phase · 7/10단계',
    title: {
      line1: '새 JSX 결과는',
      line2: 'reconcileChildren으로',
      line3: '들어갑니다.',
    },
    description:
      'React는 현재 Fiber의 기존 자식과 이번 렌더에서 새로 나온 children을 비교해 다음 자식 Fiber 구조를 계산합니다.',
    diagram: {
      title: 'reconcileChildren 처리 미리보기',
      currentCard: {
        title: '이전 child Fiber',
        subtitle: 'current.child',
        description: '이전 렌더에서 만들어진 기존 자식 Fiber 구조',
      },
      centerCard: {
        title: 'reconcileChildren',
        signature: 'current, workInProgress, nextChildren, lanes',
        description: '기존 자식과 새 children 비교',
      },
      newCard: {
        title: '새 child Fiber 구조',
        subtitle: 'workInProgress.child',
        description: '이번 렌더 결과로 계산된 다음 자식 Fiber 구조',
      },
      inputCard: {
        title: 'nextChildren',
        description: '이번 렌더의 새 자식 설명',
      },
    },
  },
  inputs: {
    eyebrow: '01 · 세 입력',
    title: 'reconcileChildren의 입력 3개',
    cards: [
      {
        title: 'current',
        description: '이전 렌더의 기존 자식 구조 · 현재 Fiber의 child',
        detail: '없을 수도 있음 · 최초 렌더에서는 null',
        tone: 'sky',
        icon: 'tree',
      },
      {
        title: 'workInProgress',
        description: '지금 계산 중인 부모 Fiber · 이번 렌더의 부모 Fiber',
        detail: '여기에 새 child Fiber 구조를 연결한다.',
        tone: 'teal',
        icon: 'cube',
      },
      {
        title: 'nextChildren',
        description: '이번 렌더에서 새로 만든 자식 설명 ReactNode',
        detail: 'JSX, 배열, 텍스트, Portal 등 다양한 형태일 수 있다.',
        tone: 'violet',
        icon: 'fileText',
      },
    ],
  },
  mountVsUpdate: {
    eyebrow: '02 · mount vs update',
    title: 'mount vs update 분기',
    mount: {
      condition: 'current === null',
      fn: '→ mountChildFibers',
      title: '최초 렌더 (mount)',
      description: '기존 자식이 없으므로 모든 자식을 새로 생성한다.',
      outcomes: ['new', 'new', 'new'],
    },
    update: {
      condition: 'current !== null',
      fn: '→ reconcileChildFibers',
      title: '업데이트 렌더 (update)',
      description: '이전 자식과 비교하여 재사용 / 이동 / 삭제 / 추가를 결정한다.',
      outcomes: ['reuse', 'update', 'delete'],
    },
  },
  childShape: {
    eyebrow: '03 · child 형태',
    title: 'child 형태별 처리 예고',
    subtitle: 'nextChildren의 형태에 따라 다른 로직으로 분기된다.',
    cards: [
      {
        title: 'React Element',
        example: '<div />',
        description: '단일 Element · Fiber 생성 또는 재사용',
        tone: 'sky',
        icon: 'element',
      },
      {
        title: 'Array',
        example: '[<A />, <B />]',
        description: '각 항목을 순회하며 Fiber 리스트를 구축',
        tone: 'teal',
        icon: 'array',
      },
      {
        title: 'Portal',
        example: 'createPortal()',
        description: 'Portal Fiber 생성 및 자식 처리',
        tone: 'amber',
        icon: 'portal',
      },
      {
        title: 'Lazy / 기타 특수 child',
        example: 'React.lazy, Offscreen 등',
        description: '특수 타입에 맞는 Fiber 처리 로직 사용',
        tone: 'cyan',
        icon: 'sparkle',
      },
    ],
  },
  code: {
    eyebrow: '04 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    fileName: 'ReactFiberBeginWork.js',
    functionLabel: '함수',
    functions: ['reconcileChildren', 'mountChildFibers', 'reconcileChildFibers'],
    learningQuestion: 'reconcileChildren은 mount와 update를 무엇으로 구분할까?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: CODE,
  },
  visualization: {
    eyebrow: '05 · 재조정 시각화',
    title: 'current / workInProgress / nextChildren 시각화',
    nodes: [
      {
        title: '이전 자식 Fiber',
        subtitle: 'current.child',
        description: '기존 Fiber 구조',
        tone: 'sky',
      },
      {
        title: '새 children',
        subtitle: 'nextChildren',
        description: 'JSX / 배열 / 텍스트 등',
        tone: 'teal',
      },
      {
        title: 'reconcileChildren',
        signature: 'current, workInProgress, nextChildren, lanes',
        description: '기존 자식과 새 children 비교',
        tone: 'indigo',
      },
      {
        title: '새 child Fiber 구조',
        subtitle: 'workInProgress.child',
        description: '다음에 처리할 자식 Fiber 구조',
        tone: 'violet',
      },
    ],
    bottomEmphasis:
      '비교 결과에 따라 재사용 / 이동 / 삭제 / 추가가 결정되고, 다음 자식 Fiber 구조가 만들어집니다.',
  },
  goal: {
    eyebrow: '06 · 재조정 목표',
    title: 'reconciliation의 목표',
    items: [
      '기존 Fiber를 최대한 재사용한다.',
      '필요한 경우에만 새 Fiber를 만든다.',
      '삭제된 것은 삭제 표시(Deletion)를 남긴다.',
      '결과적으로 workInProgress.child가 다음에 처리할 첫 번째 자식 Fiber가 된다.',
    ],
  },
  quiz: {
    eyebrow: '07 · 미니 퀴즈',
    title: '미니 퀴즈',
    question: 'reconcileChildren은 새 DOM을 바로 만드는가?',
    answer:
      '아니다. 다음 child Fiber 구조를 계산할 뿐, 실제 DOM 변경은 Commit Phase에서 이루어진다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '같은 type과 key는 어떻게 Fiber 재사용으로 이어지는가?',
    description:
      'reconcileChildren이 새 child Fiber를 계산하는 입구라는 점을 봤다면, 이제 React가 무엇을 재사용하고 무엇을 새로 만드는지 판단 기준을 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/type-key-reuse',
  },
};

const en: ReconcileChildrenContent = {
  hero: {
    badge: 'Render Phase · 7/10',
    title: {
      line1: 'New JSX results',
      line2: 'flow into',
      line3: 'reconcileChildren.',
    },
    description:
      "React compares the current Fiber's prior children against new children from this render to compute the next child Fiber structure.",
    diagram: {
      title: 'reconcileChildren processing preview',
      currentCard: {
        title: 'prior child Fiber',
        subtitle: 'current.child',
        description: 'The existing child Fiber structure from the previous render',
      },
      centerCard: {
        title: 'reconcileChildren',
        signature: 'current, workInProgress, nextChildren, lanes',
        description: 'Compare prior children with new children',
      },
      newCard: {
        title: 'new child Fiber structure',
        subtitle: 'workInProgress.child',
        description: 'The next child Fiber structure computed for this render',
      },
      inputCard: {
        title: 'nextChildren',
        description: "this render's new child description",
      },
    },
  },
  inputs: {
    eyebrow: '01 · THREE INPUTS',
    title: 'The three inputs of reconcileChildren',
    cards: [
      {
        title: 'current',
        description: "the existing child structure · the current Fiber's child",
        detail: 'may be null · null on the initial render',
        tone: 'sky',
        icon: 'tree',
      },
      {
        title: 'workInProgress',
        description: "the parent Fiber being computed · this render's parent",
        detail: 'the new child Fiber structure attaches here',
        tone: 'teal',
        icon: 'cube',
      },
      {
        title: 'nextChildren',
        description: 'the new child description (ReactNode) from this render',
        detail: 'can be JSX, an array, text, a Portal, ...',
        tone: 'violet',
        icon: 'fileText',
      },
    ],
  },
  mountVsUpdate: {
    eyebrow: '02 · MOUNT VS UPDATE',
    title: 'mount vs update branch',
    mount: {
      condition: 'current === null',
      fn: '→ mountChildFibers',
      title: 'initial render (mount)',
      description: 'No prior children exist, so all children are created fresh.',
      outcomes: ['new', 'new', 'new'],
    },
    update: {
      condition: 'current !== null',
      fn: '→ reconcileChildFibers',
      title: 'update render',
      description: 'Compare against the prior children — reuse / move / delete / add.',
      outcomes: ['reuse', 'update', 'delete'],
    },
  },
  childShape: {
    eyebrow: '03 · CHILD SHAPE',
    title: 'Child shape handling — preview',
    subtitle: 'Different logic kicks in based on the shape of nextChildren.',
    cards: [
      {
        title: 'React Element',
        example: '<div />',
        description: 'Single element · create or reuse a Fiber',
        tone: 'sky',
        icon: 'element',
      },
      {
        title: 'Array',
        example: '[<A />, <B />]',
        description: 'Walk each item, build a Fiber list',
        tone: 'teal',
        icon: 'array',
      },
      {
        title: 'Portal',
        example: 'createPortal()',
        description: 'Create a Portal Fiber, handle its children',
        tone: 'amber',
        icon: 'portal',
      },
      {
        title: 'Lazy / other special children',
        example: 'React.lazy, Offscreen, ...',
        description: 'Use the per-type Fiber handling',
        tone: 'cyan',
        icon: 'sparkle',
      },
    ],
  },
  code: {
    eyebrow: '04 · CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    fileLabel: 'file',
    fileName: 'ReactFiberBeginWork.js',
    functionLabel: 'functions',
    functions: ['reconcileChildren', 'mountChildFibers', 'reconcileChildFibers'],
    learningQuestion: 'How does reconcileChildren tell mount and update apart?',
    codeHeader: 'react-reconciler/src/ReactFiberBeginWork.js',
    codeBadge: 'main',
    code: CODE,
  },
  visualization: {
    eyebrow: '05 · RECONCILE VIZ',
    title: 'Visualize current / workInProgress / nextChildren',
    nodes: [
      {
        title: 'prior child Fiber',
        subtitle: 'current.child',
        description: 'existing Fiber structure',
        tone: 'sky',
      },
      {
        title: 'new children',
        subtitle: 'nextChildren',
        description: 'JSX / array / text, ...',
        tone: 'teal',
      },
      {
        title: 'reconcileChildren',
        signature: 'current, workInProgress, nextChildren, lanes',
        description: 'Compare existing and new children',
        tone: 'indigo',
      },
      {
        title: 'new child Fiber structure',
        subtitle: 'workInProgress.child',
        description: 'The next child Fiber structure to process',
        tone: 'violet',
      },
    ],
    bottomEmphasis:
      'The comparison decides reuse / move / delete / add — and the next child Fiber structure is built.',
  },
  goal: {
    eyebrow: '06 · RECONCILE GOAL',
    title: 'Goals of reconciliation',
    items: [
      'Reuse existing Fibers as much as possible.',
      'Create new Fibers only when necessary.',
      'Mark removed items with a Deletion flag.',
      'In the end, workInProgress.child is the next child Fiber to process.',
    ],
  },
  quiz: {
    eyebrow: '07 · MINI QUIZ',
    title: 'Mini Quiz',
    question: 'Does reconcileChildren create new DOM immediately?',
    answer:
      'No — it only computes the next child Fiber structure; real DOM changes happen in the Commit Phase.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How Same type and key Lead to Fiber Reuse',
    description:
      'Now that you see reconcileChildren as the entry that computes the next child Fibers, look at the criteria React uses to decide what to reuse and what to recreate.',
    cta: 'Go to the next page',
    href: '/type-key-reuse',
  },
};

export const reconcileChildrenContent: Record<Locale, ReconcileChildrenContent> = { ko, en };
