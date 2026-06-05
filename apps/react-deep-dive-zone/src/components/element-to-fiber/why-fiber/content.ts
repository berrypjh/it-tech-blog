import type { Locale } from '@it-tech-blog/preferences';

export type HeroFlowStep = {
  id: string;
  title: string;
  description: string;
  iconName: 'braces' | 'box' | 'hexagon' | 'play';
  accent: 'emerald' | 'sky' | 'violet';
};

export type FinalFlowRow = {
  id: string;
  title: string;
  description: string;
  accent: 'emerald' | 'sky' | 'violet' | 'amber';
};

export type CoreFiveItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: 'sky' | 'emerald' | 'violet' | 'amber';
};

export type ProblemCard = {
  id: string;
  title: string;
  description: string;
  iconName: 'network' | 'clipboard' | 'gauge' | 'pause';
  accent: 'emerald' | 'sky' | 'violet' | 'amber';
};

export type PreviewItem = {
  id: string;
  label: string;
};

export type FiberWhyNeededContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    flowSteps: HeroFlowStep[];
  };
  finalFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    rows: FinalFlowRow[];
  };
  coreFive: {
    badge: string;
    eyebrow: string;
    title: string;
    items: CoreFiveItem[];
  };
  problems: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ProblemCard[];
  };
  checklist: {
    badge: string;
    eyebrow: string;
    title: string;
    cardTitle: string;
    items: string[];
  };
  preview: {
    badge: string;
    eyebrow: string;
    title: string;
    question: string;
    previewLabel: string;
    previewTitle: string;
    previewItems: PreviewItem[];
  };
  quote: {
    quote: string;
    supporting: string;
  };
  next: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
};

const ko: FiberWhyNeededContent = {
  hero: {
    badge: 'Fiber 생성 · 10/10단계',
    title: {
      line1: '왜 React는 Element에서',
      line2: '멈추지 않고 Fiber를 만들까?',
    },
    description:
      '렌더링을 실제 작업으로 처리하려면 트리 구조, 업데이트 상태, 우선순위, 현재 화면과 다음 화면의 연결을 함께 관리할 내부 단위가 필요합니다.',
    flowSteps: [
      {
        id: 'jsx',
        title: 'JSX',
        description: '개발자가 작성한 코드',
        iconName: 'braces',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'Element',
        description: 'UI의 고정된 설명 객체',
        iconName: 'box',
        accent: 'emerald',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        description: '작업과 상태를 가진 실행 단위',
        iconName: 'hexagon',
        accent: 'violet',
      },
      {
        id: 'render',
        title: 'Render Phase',
        description: '실제 렌더링을 위한 작업 처리 단계',
        iconName: 'play',
        accent: 'sky',
      },
    ],
  },
  finalFlow: {
    badge: '02',
    eyebrow: '전체 흐름',
    title: '전체 흐름 최종 정리',
    rows: [
      {
        id: 'jsx',
        title: 'JSX',
        description: '개발자가 작성한 코드',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'React Element',
        description: 'UI의 순수한 설명 객체',
        accent: 'emerald',
      },
      {
        id: 'create-from-element',
        title: 'createFiberFromElement',
        description: '변환의 입구 함수',
        accent: 'violet',
      },
      {
        id: 'create-from-type-and-props',
        title: 'createFiberFromTypeAndProps',
        description: 'type에 따라 분기 처리',
        accent: 'violet',
      },
      {
        id: 'fiber-created',
        title: '적절한 Fiber 생성',
        description: 'Host / Function / Class 등',
        accent: 'sky',
      },
      {
        id: 'render-phase',
        title: 'Render Phase',
        description: '실제 작업 수행 단계로 진입',
        accent: 'sky',
      },
    ],
  },
  coreFive: {
    badge: '03',
    eyebrow: '한 챕터 요약',
    title: '이 챕터 핵심 5가지',
    items: [
      {
        id: 'c1',
        number: '1',
        title: 'Element와 Fiber는 다르다.',
        description: 'Element는 설명(정적), Fiber는 실행(동적) 단위다.',
        accent: 'sky',
      },
      {
        id: 'c2',
        number: '2',
        title: 'createFiberFromElement가 변환의 입구다.',
        description: 'Element를 Fiber로 만드는 첫 번째 관문이다.',
        accent: 'emerald',
      },
      {
        id: 'c3',
        number: '3',
        title: 'type이 Fiber 종류를 결정한다.',
        description: 'type에 따라 Host / Function / Class / Fragment / Mode 등으로 분기된다.',
        accent: 'violet',
      },
      {
        id: 'c4',
        number: '4',
        title: 'key는 재사용 판단과 연결된다.',
        description: 'key와 type이 같아야 Fiber를 재사용할 수 있다.',
        accent: 'amber',
      },
      {
        id: 'c5',
        number: '5',
        title: 'alternate는 current / workInProgress 구조의 시작이다.',
        description: '같은 Fiber들이 서로 연결되어 더블 버퍼처럼 동작한다.',
        accent: 'sky',
      },
    ],
  },
  problems: {
    badge: '04',
    eyebrow: '존재 이유',
    title: 'Fiber가 해결하는 문제 4가지',
    description:
      'Fiber가 추가로 가진 정보들은 막연한 장식이 아니다. 다음 네 가지 실제 문제를 풀기 위한 것이다.',
    cards: [
      {
        id: 'traverse',
        title: '트리 순회',
        description: 'parent-child-sibling 구조를 따라 작업을 이동한다.',
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'track',
        title: '업데이트 추적',
        description: '무엇이 바뀌었는지 저장하고 비교한다.',
        iconName: 'clipboard',
        accent: 'sky',
      },
      {
        id: 'priority',
        title: '우선순위 관리',
        description: '먼저 처리할 작업을 구분한다.',
        iconName: 'gauge',
        accent: 'violet',
      },
      {
        id: 'resume',
        title: '중단과 재개를 위한\n작업 단위화',
        description: '작업을 멈추고 다시 이어가기 쉬워진다.',
        iconName: 'pause',
        accent: 'amber',
      },
    ],
  },
  checklist: {
    badge: '05',
    eyebrow: '스스로 점검',
    title: '최종 체크리스트',
    cardTitle: '나는 설명할 수 있는가?',
    items: [
      'Element와 Fiber의 차이',
      'createFiberFromElement가 하는 일',
      'createFiberFromTypeAndProps의 분기 기준',
      'Host / Function / Class Fiber의 차이',
      'Fragment와 Mode Fiber',
      'key가 재사용 판단과 연결되는 이유',
      'alternate가 등장하는 이유',
      'Fiber가 더 많은 필드를 갖는 이유',
    ],
  },
  preview: {
    badge: '06',
    eyebrow: '다음 챕터',
    title: '다음 챕터 예고',
    question:
      'Fiber 하나는 이해했다. 그렇다면 Fiber들이 트리를 이루면 React는 그 트리를 어떻게 순회할까?',
    previewLabel: '다음 챕터 미리보기',
    previewTitle: 'Fiber 트리와 렌더링 자료구조',
    previewItems: [
      { id: 'pointers', label: 'return / child / sibling' },
      { id: 'trees', label: 'current / workInProgress' },
      { id: 'alternate', label: 'alternate' },
      { id: 'lanes', label: 'lanes' },
      { id: 'flags', label: 'flags' },
    ],
  },
  quote: {
    quote: 'Element는 설명이다. Fiber는 실행 단위다.',
    supporting: '이 차이를 이해하는 순간, React 내부 렌더링이 실제 구조로 보이기 시작한다.',
  },
  next: {
    badge: '07',
    eyebrow: '마무리',
    title: '마무리 & 다음 단계',
    description:
      '멋진 학습 여정의 마무리입니다! 🎉 이제 다음 챕터에서 Fiber들이 모여 트리를 이루고, React가 그 트리를 어떻게 순회하는지 알아봅시다.',
    primaryCta: '다음: Fiber 트리와 렌더링 자료구조',
    primaryHref: '/fiber-tag',
    secondaryCta: '이번 챕터 다시 복습하기',
    secondaryHref: '/element-vs-fiber',
  },
};

const en: FiberWhyNeededContent = {
  hero: {
    badge: 'Element → Fiber · 10/10',
    title: {
      line1: "Why doesn't React stop at the Element",
      line2: 'and instead build a Fiber?',
    },
    description:
      'To carry rendering out as real work, React needs an internal unit that manages tree structure, update state, priority, and the link between current and next screens together.',
    flowSteps: [
      {
        id: 'jsx',
        title: 'JSX',
        description: 'Code the developer writes',
        iconName: 'braces',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'Element',
        description: 'A static UI description object',
        iconName: 'box',
        accent: 'emerald',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        description: 'A unit of work and state',
        iconName: 'hexagon',
        accent: 'violet',
      },
      {
        id: 'render',
        title: 'Render Phase',
        description: 'The actual rendering work phase',
        iconName: 'play',
        accent: 'sky',
      },
    ],
  },
  finalFlow: {
    badge: '02',
    eyebrow: 'Overall flow',
    title: 'The full flow, summarized',
    rows: [
      {
        id: 'jsx',
        title: 'JSX',
        description: 'Code the developer writes',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'React Element',
        description: 'A pure UI description object',
        accent: 'emerald',
      },
      {
        id: 'create-from-element',
        title: 'createFiberFromElement',
        description: 'The entry function of the conversion',
        accent: 'violet',
      },
      {
        id: 'create-from-type-and-props',
        title: 'createFiberFromTypeAndProps',
        description: 'Branches on type',
        accent: 'violet',
      },
      {
        id: 'fiber-created',
        title: 'A Fiber is created',
        description: 'Host / Function / Class / …',
        accent: 'sky',
      },
      {
        id: 'render-phase',
        title: 'Render Phase',
        description: 'Enters the real work phase',
        accent: 'sky',
      },
    ],
  },
  coreFive: {
    badge: '03',
    eyebrow: 'Chapter recap',
    title: 'Five takeaways from this chapter',
    items: [
      {
        id: 'c1',
        number: '1',
        title: 'Element and Fiber are different.',
        description: 'Element is a static description; Fiber is a dynamic unit of execution.',
        accent: 'sky',
      },
      {
        id: 'c2',
        number: '2',
        title: 'createFiberFromElement is the entry to conversion.',
        description: 'It is the first gate that turns an Element into a Fiber.',
        accent: 'emerald',
      },
      {
        id: 'c3',
        number: '3',
        title: 'type decides which kind of Fiber.',
        description: 'type branches into Host / Function / Class / Fragment / Mode and more.',
        accent: 'violet',
      },
      {
        id: 'c4',
        number: '4',
        title: 'key feeds into reuse decisions.',
        description: 'key and type must match for a Fiber to be reused.',
        accent: 'amber',
      },
      {
        id: 'c5',
        number: '5',
        title: 'alternate is the start of current / workInProgress.',
        description: 'Two Fibers are linked to act like a double buffer.',
        accent: 'sky',
      },
    ],
  },
  problems: {
    badge: '04',
    eyebrow: 'Reason to exist',
    title: 'Four problems Fiber solves',
    description:
      'The extra information a Fiber carries is not decoration — each piece solves one of these four real problems.',
    cards: [
      {
        id: 'traverse',
        title: 'Tree traversal',
        description: 'Move along parent-child-sibling structures to advance work.',
        iconName: 'network',
        accent: 'emerald',
      },
      {
        id: 'track',
        title: 'Update tracking',
        description: 'Store and compare what has changed.',
        iconName: 'clipboard',
        accent: 'sky',
      },
      {
        id: 'priority',
        title: 'Priority management',
        description: 'Distinguish work that must be handled first.',
        iconName: 'gauge',
        accent: 'violet',
      },
      {
        id: 'resume',
        title: 'Pausable, resumable\nunits of work',
        description: 'Stopping and resuming work becomes easy.',
        iconName: 'pause',
        accent: 'amber',
      },
    ],
  },
  checklist: {
    badge: '05',
    eyebrow: 'Self-check',
    title: 'Final checklist',
    cardTitle: 'Can I explain these?',
    items: [
      'The difference between Element and Fiber',
      'What createFiberFromElement does',
      'How createFiberFromTypeAndProps branches',
      'The difference between Host / Function / Class Fiber',
      'Fragment and Mode Fiber',
      'Why key feeds into reuse decisions',
      'Why alternate appears',
      'Why a Fiber has more fields',
    ],
  },
  preview: {
    badge: '06',
    eyebrow: 'Next chapter',
    title: 'Next-chapter preview',
    question: 'You understand one Fiber. So when Fibers form a tree, how does React traverse it?',
    previewLabel: 'Next chapter preview',
    previewTitle: 'Fiber tree & render data structures',
    previewItems: [
      { id: 'pointers', label: 'return / child / sibling' },
      { id: 'trees', label: 'current / workInProgress' },
      { id: 'alternate', label: 'alternate' },
      { id: 'lanes', label: 'lanes' },
      { id: 'flags', label: 'flags' },
    ],
  },
  quote: {
    quote: 'Element is description. Fiber is execution.',
    supporting:
      "The moment you grasp that difference, React's internal rendering starts to look like a real structure.",
  },
  next: {
    badge: '07',
    eyebrow: 'Wrap-up',
    title: 'Wrap-up & next step',
    description:
      'A wonderful end to a wonderful learning journey! 🎉 In the next chapter, see how Fibers form a tree — and how React walks it.',
    primaryCta: 'Next: Fiber tree & render data structures',
    primaryHref: '/fiber-tag',
    secondaryCta: 'Re-read this chapter',
    secondaryHref: '/element-vs-fiber',
  },
};

export const fiberWhyNeededContent: Record<Locale, FiberWhyNeededContent> = {
  ko,
  en,
};
