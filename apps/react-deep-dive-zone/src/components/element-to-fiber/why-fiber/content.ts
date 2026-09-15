import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';

export type HeroFlowStep = {
  id: 'jsx' | 'element' | 'fiber' | 'render';
  title: string;
  description: string;
  accent: 'emerald' | 'sky' | 'violet';
};

export type FinalFlowRow = {
  id:
    | 'jsx'
    | 'element'
    | 'create-from-element'
    | 'create-from-type-and-props'
    | 'fiber-created'
    | 'render-phase';
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
  preview: {
    badge: string;
    eyebrow: string;
    title: string;
    question: string;
    previewLabel: string;
    previewTitle: string;
    previewItems: PreviewItem[];
  };
  finale: FinaleBannerContent;
};

const ko: FiberWhyNeededContent = {
  hero: {
    badge: 'Fiber 생성 · 10/10단계',
    title: {
      line1: '컴포넌트가 Fiber가 되기까지,',
      line2: '한 번에 정리합니다.',
    },
    description:
      'JSX가 Element가 되고, Element가 type에 맞는 Fiber로 바뀌어 Render Phase로 넘어가기까지. 이 챕터에서 본 흐름과 핵심을 모아 정리합니다.',
    flowSteps: [
      {
        id: 'jsx',
        title: 'JSX',
        description: '개발자가 작성한 코드',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'Element',
        description: 'UI의 고정된 설명 객체',
        accent: 'emerald',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        description: '작업과 상태를 가진 실행 단위',
        accent: 'violet',
      },
      {
        id: 'render',
        title: 'Render Phase',
        description: '실제 렌더링을 위한 작업 처리 단계',
        accent: 'sky',
      },
    ],
  },
  finalFlow: {
    badge: '01',
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
    badge: '02',
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
  preview: {
    badge: '03',
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
  finale: {
    progressLabel: '5/15 챕터 완료',
    copyLine1: '컴포넌트가 어떻게',
    copyLine2: 'Fiber가 되는지 익혔습니다.',
    copyLine3: '이제 Fiber 트리 구조로.',
    primaryCta: 'Fiber 트리와 렌더링 자료구조 읽기',
    primaryHref: '/fiber-node-overview',
    secondaryCta: '이 챕터 처음부터 다시 보기',
    secondaryHref: '/element-vs-fiber',
  },
};

const en: FiberWhyNeededContent = {
  hero: {
    badge: 'Element → Fiber · 10/10',
    title: {
      line1: 'From component to Fiber,',
      line2: 'all in one place.',
    },
    description:
      'JSX becomes an Element, the Element turns into the right kind of Fiber for its type, and that Fiber moves on to the Render Phase. This page gathers the flow and key ideas from the chapter.',
    flowSteps: [
      {
        id: 'jsx',
        title: 'JSX',
        description: 'Code the developer writes',
        accent: 'emerald',
      },
      {
        id: 'element',
        title: 'Element',
        description: 'A static UI description object',
        accent: 'emerald',
      },
      {
        id: 'fiber',
        title: 'Fiber',
        description: 'A unit of work and state',
        accent: 'violet',
      },
      {
        id: 'render',
        title: 'Render Phase',
        description: 'The actual rendering work phase',
        accent: 'sky',
      },
    ],
  },
  finalFlow: {
    badge: '01',
    eyebrow: 'OVERALL FLOW',
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
    badge: '02',
    eyebrow: 'CHAPTER RECAP',
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
  preview: {
    badge: '03',
    eyebrow: 'NEXT CHAPTER',
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
  finale: {
    progressLabel: 'Chapter 5 of 15 complete',
    copyLine1: 'You learned how',
    copyLine2: 'components become Fibers.',
    copyLine3: 'Now the Fiber tree structure.',
    primaryCta: 'Read the Fiber tree & render data structures',
    primaryHref: '/fiber-node-overview',
    secondaryCta: 'Review this chapter from the start',
    secondaryHref: '/element-vs-fiber',
  },
};

export const fiberWhyNeededContent: Record<Locale, FiberWhyNeededContent> = {
  ko,
  en,
};
