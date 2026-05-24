import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type { ToneKey };

export type RnIconName =
  | 'arrowRight'
  | 'box'
  | 'check'
  | 'clock'
  | 'code'
  | 'cube'
  | 'fileText'
  | 'gitBranch'
  | 'help'
  | 'layers'
  | 'monitor'
  | 'network'
  | 'pencil'
  | 'puzzle'
  | 'search'
  | 'smartphone'
  | 'sparkles'
  | 'stack'
  | 'star'
  | 'terminal';

export type AxisCard = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: RnIconName;
  tone: ToneKey;
};

export type CompareCard = {
  id: 'dom' | 'native';
  name: string;
  iconName: RnIconName;
  items: string[];
  tone: ToneKey;
};

export type ModeCard = {
  id: 'mutation' | 'persistence';
  name: string;
  subtitle: string;
  items: string[];
  iconName: RnIconName;
  tone: ToneKey;
};

export type BenefitCard = {
  id: 'web' | 'native' | 'custom';
  name: string;
  iconName: RnIconName;
  items: string[];
  tone: ToneKey;
};

export type RnContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    a11y: string;
    elementLabel: string;
    elementCode: string;
    reconcilerLabel: string;
    reconcilerSubtitle: string;
    webBranch: {
      title: string;
      steps: string[];
    };
    nativeBranch: {
      title: string;
      steps: string[];
    };
  };
  axis: {
    eyebrow: string;
    title: string;
    description: string;
    cards: AxisCard[];
  };
  compare: {
    eyebrow: string;
    title: string;
    description: string;
    cards: CompareCard[];
    vsLabel: string;
  };
  common: {
    eyebrow: string;
    title: string;
    leftNote: string;
    rightEmphasis: { line1: string; line2: string; line3: string };
    diagram: {
      elementTitle: string;
      elementCode: string;
      reconcilerTitle: string;
      reconcilerSubtitle: string;
      domTitle: string;
      domHost: string;
      domOutputTitle: string;
      domOutputSubtitle: string;
      nativeTitle: string;
      nativeHost: string;
      nativeOutputTitle: string;
      nativeOutputSubtitle: string;
    };
  };
  modes: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ModeCard[];
    pills: { id: string; left: string; right: string; tone: ToneKey }[];
  };
  benefit: {
    eyebrow: string;
    title: string;
    quote: string;
    quoteBody: string;
    centerLabel: string;
    centerSubtitle: string;
    cards: BenefitCard[];
  };
  concept: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    explanation: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    line1: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    line3Before: string;
    line3Accent: string;
    line3After: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

export const rnContent: Record<Locale, RnContent> = {
  ko: {
    hero: {
      badge: '01 · React 아키텍처 이해하기',
      title: {
        line1: 'React는 웹만을 위한',
        line2: '내부 구조로 설계되지',
        line3: '않았습니다.',
      },
      description:
        'React DOM과 React Native는 실제 출력 대상은 다르지만, Element와 reconciler라는 공통 계산 축을 공유합니다.',
      primaryCta: '전체 구조도 보기',
      secondaryCta: 'React Native 연결 보기',
      primaryHref: '#section-common',
      secondaryHref: '#section-benefit',
      a11y: 'React Element 노드가 react-reconciler 공통 계산 엔진으로 이어진 뒤, 왼쪽 Web (React DOM)과 오른쪽 Native (React Native) 두 분기로 갈라져 각각 DOM node 브라우저 화면 / Native view 네이티브 화면으로 출력된다.',
      elementLabel: 'React Element',
      elementCode: '<View title="Hello" />',
      reconcilerLabel: 'react-reconciler',
      reconcilerSubtitle: '공통 계산 엔진',
      webBranch: {
        title: 'Web (React DOM)',
        steps: ['DOM renderer', 'host config: DOM', 'DOM node', '브라우저 화면'],
      },
      nativeBranch: {
        title: 'Native (React Native)',
        steps: ['Native renderer', 'host config: Native', 'Native view', '네이티브 화면'],
      },
    },
    axis: {
      eyebrow: '02 · shared axis',
      title: '공통으로 공유되는 내부 축',
      description: 'React DOM과 React Native 양쪽에서 똑같이 사용되는 네 가지 내부 개념입니다.',
      cards: [
        {
          id: 'element',
          title: 'Element',
          subtitle: 'UI 설명 객체',
          description: '컴포넌트와 UI 상태를 설명하는 불변 객체 트리',
          iconName: 'code',
          tone: 'teal',
        },
        {
          id: 'fiber',
          title: 'Fiber',
          subtitle: '렌더링 작업 단위',
          description: '작업을 분할하고 추적하는 연결 리스트 형태의 노드',
          iconName: 'cube',
          tone: 'cyan',
        },
        {
          id: 'reconciler',
          title: 'reconciler',
          subtitle: '변경 계산',
          description: '이전 상태와 다음 상태를 비교해 무엇이 바뀌어야 하는지 계산',
          iconName: 'network',
          tone: 'indigo',
        },
        {
          id: 'scheduler',
          title: 'scheduler 개념',
          subtitle: '작업 우선순위와 시점 조율',
          description: '작업의 긴급도에 따라 언제 실행할지 결정',
          iconName: 'clock',
          tone: 'violet',
        },
      ],
    },
    compare: {
      eyebrow: '03 · dom vs native',
      title: 'DOM과 Native가 달라지는 지점',
      description: '공통 계산 축은 같지만, 실제 환경에 반영하는 방식은 이렇게 달라집니다.',
      vsLabel: 'VS',
      cards: [
        {
          id: 'dom',
          name: 'React DOM',
          iconName: 'monitor',
          items: [
            'DOM node 생성 및 조작',
            'Browser event 시스템과 통합',
            'Hydration, selection, focus 관리',
            'DOM 특화 속성, 스타일, 네임스페이스 처리',
            'host config: react-dom 패키지 내부 구현',
          ],
          tone: 'sky',
        },
        {
          id: 'native',
          name: 'React Native',
          iconName: 'smartphone',
          items: [
            'Native view 생성 및 조작',
            'Platform bridge / Fabric 구현에 의존',
            '환경별 레이아웃, 이벤트 처리',
            'Text, Image 등 네이티브 컴포넌트 매핑',
            'host config: react-native / renderer 구현',
          ],
          tone: 'violet',
        },
      ],
    },
    common: {
      eyebrow: '04 · common reconciler',
      title: '공통 reconciler → 환경별 renderer',
      leftNote:
        'React Element부터 변경 계산까지는 공통으로 처리하고, 실제 화면에 반영하는 방식은 환경별로 구현합니다.',
      rightEmphasis: {
        line1: '계산은 공유하고,',
        line2: '반영은 환경별로',
        line3: '다르게 한다.',
      },
      diagram: {
        elementTitle: 'React Element',
        elementCode: '<App />',
        reconcilerTitle: 'react-reconciler',
        reconcilerSubtitle: '공통 계산 엔진',
        domTitle: 'DOM renderer',
        domHost: 'host config: DOM',
        domOutputTitle: 'DOM nodes',
        domOutputSubtitle: '브라우저 화면',
        nativeTitle: 'Native renderer',
        nativeHost: 'host config: Native',
        nativeOutputTitle: 'Native views',
        nativeOutputSubtitle: '네이티브 화면',
      },
    },
    modes: {
      eyebrow: '05 · mutation / persistence',
      title: 'Mutation / Persistence 관점 맛보기',
      description:
        '같은 reconciler가 환경에 따라 어떻게 다른 적용 방식을 가지는지 모드 단위로 살펴봅니다.',
      cards: [
        {
          id: 'mutation',
          name: 'Mutation Mode',
          subtitle: '기존 host node를 수정하는 방식',
          items: [
            '현재 tree를 직접 변경',
            '대표: React DOM',
            'DOM 조작 비용이 들어가지만 익숙한 방식',
          ],
          iconName: 'pencil',
          tone: 'teal',
        },
        {
          id: 'persistence',
          name: 'Persistence Mode',
          subtitle: '변경된 새 host tree를 만드는 방식',
          items: [
            '새로운 tree를 만들어 교체',
            '대표: Fabric (React Native 신규 아키텍처)',
            '멀티 스레드/병렬 처리에 유리한 구조',
          ],
          iconName: 'stack',
          tone: 'violet',
        },
      ],
      pills: [
        { id: 'dom-mutation', left: 'React DOM', right: 'Mutation Mode', tone: 'teal' },
        {
          id: 'fabric-persistence',
          left: 'Fabric (React Native)',
          right: 'Persistence Mode',
          tone: 'violet',
        },
      ],
    },
    benefit: {
      eyebrow: '06 · design benefit',
      title: 'React Native 사례를 통해 보는 설계 장점',
      quote: '같은 React 모델을 유지하면서도 출력 환경은 바꿀 수 있다.',
      quoteBody:
        '핵심 계산 구조를 재사용하면, 새로운 플랫폼이나 renderer를 추가해도 React 모델을 그대로 활용할 수 있습니다.',
      centerLabel: 'react-reconciler',
      centerSubtitle: '공통 계산 축',
      cards: [
        {
          id: 'web',
          name: '웹 (React DOM)',
          iconName: 'monitor',
          items: ['브라우저 DOM에 반영', '기존 웹 생태계와 통합', 'Mutation Mode 사용'],
          tone: 'sky',
        },
        {
          id: 'native',
          name: 'Native (React Native)',
          iconName: 'smartphone',
          items: ['네이티브 뷰에 반영', '플랫폼 브리지 / Fabric', 'Persistence Mode 사용'],
          tone: 'violet',
        },
        {
          id: 'custom',
          name: 'Custom Renderer',
          iconName: 'terminal',
          items: ['게임, 터미널, CLI, PDF 등', '도메인 특화 출력 대상', '나만의 Host Config 구현'],
          tone: 'emerald',
        },
      ],
    },
    concept: {
      eyebrow: '07 · concept check',
      title: '개념 점검',
      question: 'React DOM과 React Native가 공통으로 공유하는 가장 중요한 축은?',
      answer: 'reconciler 중심의 렌더링 계산 모델',
      explanation:
        'Element와 Fiber, 변경 계산 알고리즘, 작업 우선순위 개념은 공통으로 사용됩니다. 실제 화면에 반영하는 방식만 환경에 맞게 다르게 구현됩니다.',
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '다음 단계로 이동하기',
      line1: '공통 계산과 환경별 반영의 차이를 봤다면,',
      line2Before: '이번에는 ',
      line2Accent: 'DOM',
      line2After: '에만 필요한 코드와',
      line3Before: '',
      line3Accent: 'renderer 공통 코드',
      line3After: '의 경계를 더 정확히 살펴봅니다.',
      primaryCta: '다음: DOM 전용 코드와 공통 코드 →',
      secondaryCta: '이전 페이지 다시 보기',
      primaryHref: '/dom-vs-common',
      secondaryHref: '/shared-constants',
    },
  },
  en: {
    hero: {
      badge: '01 · understanding React architecture',
      title: {
        line1: 'React was not designed',
        line2: 'only for the web.',
        line3: '',
      },
      description:
        'React DOM and React Native target different outputs, but share the same Element and reconciler computation axis.',
      primaryCta: 'See the full structure',
      secondaryCta: 'See the React Native link',
      primaryHref: '#section-common',
      secondaryHref: '#section-benefit',
      a11y: 'A React Element node flows into the react-reconciler shared compute engine, then branches to two outputs: Web (React DOM) on the left and Native (React Native) on the right.',
      elementLabel: 'React Element',
      elementCode: '<View title="Hello" />',
      reconcilerLabel: 'react-reconciler',
      reconcilerSubtitle: 'Shared compute engine',
      webBranch: {
        title: 'Web (React DOM)',
        steps: ['DOM renderer', 'host config: DOM', 'DOM node', 'Browser screen'],
      },
      nativeBranch: {
        title: 'Native (React Native)',
        steps: ['Native renderer', 'host config: Native', 'Native view', 'Native screen'],
      },
    },
    axis: {
      eyebrow: '02 · shared axis',
      title: 'The internal axis both sides share',
      description: 'Four internal concepts that React DOM and React Native use identically.',
      cards: [
        {
          id: 'element',
          title: 'Element',
          subtitle: 'UI description',
          description: 'Immutable object tree describing components and UI state.',
          iconName: 'code',
          tone: 'teal',
        },
        {
          id: 'fiber',
          title: 'Fiber',
          subtitle: 'Unit of work',
          description: 'Linked-list nodes that split and track render work.',
          iconName: 'cube',
          tone: 'cyan',
        },
        {
          id: 'reconciler',
          title: 'reconciler',
          subtitle: 'Diff computation',
          description: 'Compares current and next state to decide what must change.',
          iconName: 'network',
          tone: 'indigo',
        },
        {
          id: 'scheduler',
          title: 'scheduler concept',
          subtitle: 'Priority & timing',
          description: 'Decides when work runs by urgency.',
          iconName: 'clock',
          tone: 'violet',
        },
      ],
    },
    compare: {
      eyebrow: '03 · dom vs native',
      title: 'Where DOM and Native diverge',
      description: 'Shared axis stays the same, but environment application differs like this.',
      vsLabel: 'VS',
      cards: [
        {
          id: 'dom',
          name: 'React DOM',
          iconName: 'monitor',
          items: [
            'Creates and updates DOM nodes',
            'Integrates with the browser event system',
            'Handles hydration, selection, focus',
            'DOM-specific attrs, styles, namespaces',
            'host config: implemented inside react-dom',
          ],
          tone: 'sky',
        },
        {
          id: 'native',
          name: 'React Native',
          iconName: 'smartphone',
          items: [
            'Creates and updates Native views',
            'Relies on Platform bridge / Fabric',
            'Per-platform layout and events',
            'Maps native components (Text, Image, …)',
            'host config: react-native / renderer impl',
          ],
          tone: 'violet',
        },
      ],
    },
    common: {
      eyebrow: '04 · common reconciler',
      title: 'Shared reconciler → per-environment renderer',
      leftNote:
        'From React Element to diff computation is shared; how that is applied to the screen is per-environment.',
      rightEmphasis: {
        line1: 'Compute is shared,',
        line2: 'application is per',
        line3: 'environment.',
      },
      diagram: {
        elementTitle: 'React Element',
        elementCode: '<App />',
        reconcilerTitle: 'react-reconciler',
        reconcilerSubtitle: 'Shared compute engine',
        domTitle: 'DOM renderer',
        domHost: 'host config: DOM',
        domOutputTitle: 'DOM nodes',
        domOutputSubtitle: 'Browser screen',
        nativeTitle: 'Native renderer',
        nativeHost: 'host config: Native',
        nativeOutputTitle: 'Native views',
        nativeOutputSubtitle: 'Native screen',
      },
    },
    modes: {
      eyebrow: '05 · mutation / persistence',
      title: 'A taste of Mutation / Persistence',
      description:
        'The same reconciler can apply work in two different modes depending on the environment.',
      cards: [
        {
          id: 'mutation',
          name: 'Mutation Mode',
          subtitle: 'Edit existing host nodes',
          items: [
            'Mutates the current tree directly',
            'Used by: React DOM',
            'DOM ops have cost but feel familiar',
          ],
          iconName: 'pencil',
          tone: 'teal',
        },
        {
          id: 'persistence',
          name: 'Persistence Mode',
          subtitle: 'Build a fresh host tree to swap',
          items: [
            'Builds a new tree and swaps it',
            'Used by: Fabric (new React Native arch)',
            'Friendlier to multi-thread / parallel work',
          ],
          iconName: 'stack',
          tone: 'violet',
        },
      ],
      pills: [
        { id: 'dom-mutation', left: 'React DOM', right: 'Mutation Mode', tone: 'teal' },
        {
          id: 'fabric-persistence',
          left: 'Fabric (React Native)',
          right: 'Persistence Mode',
          tone: 'violet',
        },
      ],
    },
    benefit: {
      eyebrow: '06 · design benefit',
      title: 'Design benefits seen through React Native',
      quote: 'Keep the React model, swap the output environment.',
      quoteBody:
        'Reusing the core compute structure means you can add new platforms or renderers without changing the React model.',
      centerLabel: 'react-reconciler',
      centerSubtitle: 'Shared compute axis',
      cards: [
        {
          id: 'web',
          name: 'Web (React DOM)',
          iconName: 'monitor',
          items: [
            'Applies to browser DOM',
            'Integrates with the web ecosystem',
            'Uses Mutation Mode',
          ],
          tone: 'sky',
        },
        {
          id: 'native',
          name: 'Native (React Native)',
          iconName: 'smartphone',
          items: ['Applies to native views', 'Platform bridge / Fabric', 'Uses Persistence Mode'],
          tone: 'violet',
        },
        {
          id: 'custom',
          name: 'Custom Renderer',
          iconName: 'terminal',
          items: [
            'Games, terminal, CLI, PDF…',
            'Domain-specific output',
            'Bring your own Host Config',
          ],
          tone: 'emerald',
        },
      ],
    },
    concept: {
      eyebrow: '07 · concept check',
      title: 'Concept check',
      question: 'What is the most important axis React DOM and React Native share?',
      answer: 'The reconciler-centered rendering model.',
      explanation:
        'Element, Fiber, the diff algorithm, and the priority concept are all shared. Only how the result is applied to the screen differs per environment.',
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'Move to the next step',
      line1: 'Now that compute vs apply is clear,',
      line2Before: 'we look closer at what is ',
      line2Accent: 'DOM',
      line2After: '-only code versus',
      line3Before: ' ',
      line3Accent: 'renderer-common code',
      line3After: ' — and where the line is.',
      primaryCta: 'Next: DOM-only vs common renderer code →',
      secondaryCta: 'Revisit the previous page',
      primaryHref: '/dom-vs-common',
      secondaryHref: '/shared-constants',
    },
  },
};
