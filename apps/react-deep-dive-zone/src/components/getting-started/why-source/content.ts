import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type FlowStage = {
  id: 'jsx' | 'element' | 'fiber' | 'render' | 'commit' | 'dom';
  label: string;
  hint: string;
  tone: ToneKey;
};

export type FlowCategory = {
  id: 'input' | 'abstraction' | 'process' | 'result';
  label: string;
  tone: ToneKey;
  stages: FlowStage['id'][];
};

export type QuestionCard = {
  id: 'set-state' | 'use-effect' | 'key' | 'transition';
  number: string;
  question: string[];
  badge: string;
  tone: ToneKey;
  icon: 'clock' | 'zap' | 'key' | 'gauge';
};

export type BenefitCard = {
  id: 'render' | 'debug' | 'performance' | 'design';
  title: string;
  body: string;
  badge: string;
  tone: ToneKey;
  icon: 'eye' | 'search' | 'bar-chart' | 'puzzle';
};

export type WhySourceContent = {
  hero: {
    badge: string;
    title: { lead: string; accent: string; tail: string };
    description: string;
    flowCategories: FlowCategory[];
    flowStages: FlowStage[];
    flowLoop: string;
  };
  questions: {
    eyebrow: string;
    title: string;
    cards: QuestionCard[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    cards: BenefitCard[];
  };
  firstCode: {
    eyebrow: string;
    title: string;
    file: {
      fileName: string;
      owner: string;
      blocks: { title: string; body: string }[];
    };
    code: { code: string; language: string };
    repo: {
      owner: string;
      name: string;
      visibility: string;
      path: string;
      parameters: string;
      link: string;
      stats: { stars: string; forks: string; watchers: string };
    };
    primaryCta: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const sharedCode = `/**
 * React Element는 불변 객체로 UI를 표현합니다.
 */
export function ReactElement(type, key, ref, self, source, props) {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    _owner: ReactCurrentOwner.current,
  };

  if (__DEV__) {
    element._store = { validated: false };
    Object.defineProperty(element, '_self', { value: self });
    Object.defineProperty(element, '_source', { value: source });
  }

  return element;
}`;

export const whySourceContent: Record<Locale, WhySourceContent> = {
  ko: {
    hero: {
      badge: '시작하기 · 1/6단계',
      title: {
        lead: 'React를 오래 썼다면,',
        accent: '이제는 내부 흐름을',
        tail: '읽을 차례입니다.',
      },
      description:
        '소스코드를 읽으면 렌더링, 상태 업데이트, Hooks, Suspense가 하나의 구조로 연결되어 보입니다.',
      flowCategories: [
        { id: 'input', label: '입력', tone: 'sky', stages: ['jsx'] },
        { id: 'abstraction', label: '내부 추상화', tone: 'amber', stages: ['element', 'fiber'] },
        { id: 'process', label: '처리 단계', tone: 'violet', stages: ['render', 'commit'] },
        { id: 'result', label: '결과', tone: 'emerald', stages: ['dom'] },
      ],
      flowStages: [
        { id: 'jsx', label: 'JSX', hint: '코드로 UI를 표현', tone: 'sky' },
        { id: 'element', label: 'Element', hint: '불변 객체 트리 생성', tone: 'amber' },
        { id: 'fiber', label: 'Fiber', hint: '작업 단위로 분해, 연결', tone: 'violet' },
        { id: 'render', label: 'Render', hint: 'Diff 계산 및 작업 수행', tone: 'blue' },
        { id: 'commit', label: 'Commit', hint: '변경 사항을 적용', tone: 'emerald' },
        { id: 'dom', label: 'DOM', hint: '브라우저에 반영', tone: 'teal' },
      ],
      flowLoop: '상태 변화에 따라 다시 시작되는 사이클',
    },
    questions: {
      eyebrow: '01 · 문제 제기',
      title: 'React를 쓰며 자주 생기는 의문',
      cards: [
        {
          id: 'set-state',
          number: '01',
          question: ['왜 setState 직후', '화면이 바로', '바뀌지 않을까?'],
          badge: 'Update Queue',
          tone: 'sky',
          icon: 'clock',
        },
        {
          id: 'use-effect',
          number: '02',
          question: ['왜 useEffect는', '렌더 뒤에', '실행될까?'],
          badge: 'Scheduling',
          tone: 'sky',
          icon: 'zap',
        },
        {
          id: 'key',
          number: '03',
          question: ['왜 key를', '잘못 쓰면', '상태가 꼬일까?'],
          badge: 'Fiber',
          tone: 'sky',
          icon: 'key',
        },
        {
          id: 'transition',
          number: '04',
          question: ['왜 transition은', '입력 반응을', '덜 막을까?'],
          badge: 'Priority',
          tone: 'sky',
          icon: 'gauge',
        },
      ],
    },
    benefits: {
      eyebrow: '02 · 학습 효과',
      title: '소스코드를 읽으면 얻는 것',
      cards: [
        {
          id: 'render',
          title: '렌더링 해석력',
          body: '렌더링 과정 전체를 그림처럼 그릴 수 있어, 동작 원리를 정확히 이해합니다.',
          badge: '흐름을 읽는 힘',
          tone: 'sky',
          icon: 'eye',
        },
        {
          id: 'debug',
          title: '디버깅 감각',
          body: '문제의 근본 원인을 빠르게 찾고, 올바른 위치에서 해결할 수 있습니다.',
          badge: '원인을 찾는 힘',
          tone: 'sky',
          icon: 'search',
        },
        {
          id: 'performance',
          title: '성능 판단력',
          body: '어떤 업데이트가 비용이 큰지 판단하고, 최적화 포인트를 스스로 찾습니다.',
          badge: '성능을 보는 힘',
          tone: 'sky',
          icon: 'bar-chart',
        },
        {
          id: 'design',
          title: '라이브러리 설계력',
          body: '좋은 추상화와 구조를 스스로 설계하고, 재사용 가능한 코드를 만들 수 있습니다.',
          badge: '구조를 만드는 힘',
          tone: 'sky',
          icon: 'puzzle',
        },
      ],
    },
    firstCode: {
      eyebrow: '03 · 첫 코드',
      title: '첫 코드 맛보기',
      file: {
        fileName: 'ReactJSXElement.js',
        owner: 'facebook / react',
        blocks: [
          {
            title: 'ReactElement 함수',
            body: 'React Element를 생성하는 핵심 함수',
          },
          {
            title: 'React Element는 어떤 필드를 가진 객체일까?',
            body: '불변 객체로 표현된 UI의 최소 단위',
          },
        ],
      },
      code: { code: sharedCode, language: 'js' },
      repo: {
        owner: 'facebook',
        name: 'react',
        visibility: 'Public',
        path: 'react/packages/react/src/jsx/ReactJSXElement.js',
        parameters: 'Parameters: type, key, ref, self, source, props',
        link: 'View on GitHub',
        stats: { stars: '25.7k', forks: '5.2k', watchers: '1.1k' },
      },
      primaryCta: 'GitHub에서 코드 열기',
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: 'React 사용법과 내부 구조 학습의 차이',
      description: '두 학습의 관점을 비교하며, 앞으로 우리가 어떻게 학습할지 안내합니다.',
      cta: '다음 페이지로 이동',
      href: '/usage-vs-internals',
    },
  },
  en: {
    hero: {
      badge: 'Getting Started · 1/6',
      title: {
        lead: "If you've used React for a while,",
        accent: "it's time to read",
        tail: 'the internal flow.',
      },
      description:
        'Reading the source connects rendering, state updates, Hooks, and Suspense as one structure.',
      flowCategories: [
        { id: 'input', label: 'Input', tone: 'sky', stages: ['jsx'] },
        { id: 'abstraction', label: 'Abstraction', tone: 'amber', stages: ['element', 'fiber'] },
        { id: 'process', label: 'Processing', tone: 'violet', stages: ['render', 'commit'] },
        { id: 'result', label: 'Result', tone: 'emerald', stages: ['dom'] },
      ],
      flowStages: [
        { id: 'jsx', label: 'JSX', hint: 'Expressing UI in code', tone: 'sky' },
        { id: 'element', label: 'Element', hint: 'Immutable object tree', tone: 'amber' },
        { id: 'fiber', label: 'Fiber', hint: 'Splitting into work units', tone: 'violet' },
        { id: 'render', label: 'Render', hint: 'Diff and work execution', tone: 'blue' },
        { id: 'commit', label: 'Commit', hint: 'Applying the changes', tone: 'emerald' },
        { id: 'dom', label: 'DOM', hint: 'Reflected by the browser', tone: 'teal' },
      ],
      flowLoop: 'The cycle restarts on every state change',
    },
    questions: {
      eyebrow: '01 · PROBLEM',
      title: 'Questions React Developers Keep Hitting',
      cards: [
        {
          id: 'set-state',
          number: '01',
          question: ['Why does the screen', 'not update right', 'after setState?'],
          badge: 'Update Queue',
          tone: 'sky',
          icon: 'clock',
        },
        {
          id: 'use-effect',
          number: '02',
          question: ['Why does useEffect', 'run after the', 'render is done?'],
          badge: 'Scheduling',
          tone: 'sky',
          icon: 'zap',
        },
        {
          id: 'key',
          number: '03',
          question: ['Why does a wrong', 'key tangle the', 'component state?'],
          badge: 'Fiber',
          tone: 'sky',
          icon: 'key',
        },
        {
          id: 'transition',
          number: '04',
          question: ['Why does transition', 'block input', 'less than setState?'],
          badge: 'Priority',
          tone: 'sky',
          icon: 'gauge',
        },
      ],
    },
    benefits: {
      eyebrow: '02 · BENEFITS',
      title: 'What You Gain by Reading the Source',
      cards: [
        {
          id: 'render',
          title: 'Render Literacy',
          body: 'You can sketch the entire render pipeline, so you know exactly what runs and when.',
          badge: 'See the flow',
          tone: 'sky',
          icon: 'eye',
        },
        {
          id: 'debug',
          title: 'Debugging Instinct',
          body: 'You find the root cause fast and fix it where it actually lives.',
          badge: 'Find the cause',
          tone: 'sky',
          icon: 'search',
        },
        {
          id: 'performance',
          title: 'Performance Judgment',
          body: 'You can tell which updates are expensive and locate optimization points yourself.',
          badge: 'See performance',
          tone: 'sky',
          icon: 'bar-chart',
        },
        {
          id: 'design',
          title: 'Library Design',
          body: 'You design good abstractions on your own and ship reusable, durable code.',
          badge: 'Shape structure',
          tone: 'sky',
          icon: 'puzzle',
        },
      ],
    },
    firstCode: {
      eyebrow: '03 · FIRST CODE',
      title: 'First Taste of the Source',
      file: {
        fileName: 'ReactJSXElement.js',
        owner: 'facebook / react',
        blocks: [
          {
            title: 'The ReactElement function',
            body: 'The core function that creates React Elements',
          },
          {
            title: 'What fields does a React Element hold?',
            body: 'The minimum unit of UI, expressed as an immutable object',
          },
        ],
      },
      code: { code: sharedCode, language: 'js' },
      repo: {
        owner: 'facebook',
        name: 'react',
        visibility: 'Public',
        path: 'react/packages/react/src/jsx/ReactJSXElement.js',
        parameters: 'Parameters: type, key, ref, self, source, props',
        link: 'View on GitHub',
        stats: { stars: '25.7k', forks: '5.2k', watchers: '1.1k' },
      },
      primaryCta: 'Open on GitHub',
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Using React vs Learning React Internals',
      description: 'Compare the two perspectives and see how the rest of this series unfolds.',
      cta: 'Go to the next page',
      href: '/usage-vs-internals',
    },
  },
};
