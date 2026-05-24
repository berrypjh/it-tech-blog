import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../start/_shared/tones';

export type { ToneKey };

export type SharedIconName =
  | 'alertCircle'
  | 'arrowRight'
  | 'atom'
  | 'box'
  | 'check'
  | 'code'
  | 'cube'
  | 'fileCode'
  | 'fileText'
  | 'flag'
  | 'gitBranch'
  | 'help'
  | 'info'
  | 'layers'
  | 'network'
  | 'package'
  | 'share'
  | 'star';

export type FileCard = {
  id: 'symbols' | 'types' | 'version' | 'feature-flags';
  fileName: string;
  badge: string;
  title: string;
  description: string;
  tone: ToneKey;
  iconName: SharedIconName;
};

export type ExampleTag = { id: string; label: string; tone: ToneKey };

export type CheckpointItem = {
  id: string;
  label: string;
  value: string;
  iconName: SharedIconName;
  tone: ToneKey;
};

export type ConceptTag = { id: string; label: string };

export type QuizCard = {
  id: string;
  question: string;
  answer: string;
  explanation: string;
};

export type PackageNode = {
  id: 'react' | 'react-dom' | 'react-reconciler';
  name: string;
  subtitle: string;
  iconName: SharedIconName;
  tone: ToneKey;
};

export type SharedContent = {
  hero: {
    chapterBadge: string;
    title: { line1: string; line2: string };
    description: string;
    a11yDiagram: string;
    centerLabel: string;
    centerSubtitle: string;
    packages: PackageNode[];
    checklist: string[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    problem: { title: string; body: string };
    solution: { title: string; body: string };
    example: { title: string; tags: ExampleTag[] };
  };
  files: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FileCard[];
  };
  symbolsCheckpoint: {
    eyebrow: string;
    title: string;
    checkpoint: {
      file: { label: string; value: string };
      look: { label: string; values: string[] };
      question: { label: string; value: string };
      button: string;
    };
    codeCaption: string;
    code: string;
    callouts: { id: string; title: string; code: string }[];
  };
  clientImport: {
    eyebrow: string;
    title: string;
    description: string;
    explanation: { title: string; lines: string[] };
    buttons: { primary: string; secondary: string };
    codeCaption: string;
    code: string;
    callout: string;
  };
  connection: {
    eyebrow: string;
    title: string;
    description: string;
    centerLabel: string;
    centerSubtitle: string;
    packages: PackageNode[];
    conceptTags: ConceptTag[];
    banner: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    description: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    line1: string;
    line2: string;
    line3Before: string;
    line3Accent: string;
    line3After: string;
    primaryCta: string;
    primaryHref: string;
  };
};

const REACT_SYMBOLS_CODE = `// Fragment
export const REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');

// Suspense
export const REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');

// ... 기타 심벌들
export const REACT_PROVIDER_TYPE = Symbol.for('react.provider');
export const REACT_CONTEXT_TYPE = Symbol.for('react.context');
export const REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
export const REACT_MEMO_TYPE = Symbol.for('react.memo');
export const REACT_PORTAL_TYPE = Symbol.for('react.portal');

// ...`;

const REACT_CLIENT_IMPORT_CODE = `import {
  REACT_FRAGMENT_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_PROVIDER_TYPE,
  REACT_CONTEXT_TYPE,
  REACT_PORTAL_TYPE,
} from 'shared/ReactSymbols';

// 이후 React 로직에서 이 심벌들을 사용해
// 요소 타입을 판별하고 처리합니다.`;

const PACKAGES_KO: PackageNode[] = [
  {
    id: 'react',
    name: 'react',
    subtitle: '코어 라이브러리',
    iconName: 'atom',
    tone: 'sky',
  },
  {
    id: 'react-dom',
    name: 'react-dom',
    subtitle: 'DOM 렌더링',
    iconName: 'cube',
    tone: 'violet',
  },
  {
    id: 'react-reconciler',
    name: 'react-reconciler',
    subtitle: '렌더링 코어',
    iconName: 'code',
    tone: 'teal',
  },
];

const PACKAGES_EN: PackageNode[] = [
  {
    id: 'react',
    name: 'react',
    subtitle: 'Core library',
    iconName: 'atom',
    tone: 'sky',
  },
  {
    id: 'react-dom',
    name: 'react-dom',
    subtitle: 'DOM renderer',
    iconName: 'cube',
    tone: 'violet',
  },
  {
    id: 'react-reconciler',
    name: 'react-reconciler',
    subtitle: 'Rendering core',
    iconName: 'code',
    tone: 'teal',
  },
];

export const sharedContent: Record<Locale, SharedContent> = {
  ko: {
    hero: {
      chapterBadge: 'CHAPTER 24',
      title: {
        line1: 'React 코드를 읽다 보면',
        line2: 'shared가 계속 등장합니다.',
      },
      description:
        '여러 패키지가 공통으로 쓰는 심벌, 타입, 버전 정보, 기능 플래그를 한곳에서 관리하기 때문입니다.',
      a11yDiagram:
        '중앙의 shared 노드가 react, react-dom, react-reconciler 세 패키지와 점선으로 연결되어 있다. 우측에는 공통 심벌, 공통 타입 정의, 공통 버전 정보, 공통 기능 플래그 네 가지 체크 리스트가 있다.',
      centerLabel: 'shared',
      centerSubtitle: '공통 기반층',
      packages: PACKAGES_KO,
      checklist: ['공통 심벌', '공통 타입 정의', '공통 버전 정보', '공통 기능 플래그'],
    },
    why: {
      eyebrow: '1',
      title: 'shared가 필요한 이유',
      description: '같은 개념을 제각각 정의하면 일관성이 깨집니다. shared가 그 문제를 해결합니다.',
      problem: {
        title: '문제',
        body: 'react, react-dom, reconciler가 같은 개념을 제각각 정의하면 내부 일관성이 깨진다.',
      },
      solution: {
        title: '해결',
        body: '공통 개념은 shared에서 관리한다.',
      },
      example: {
        title: '예시: shared가 관리하는 대표 개념들',
        tags: [
          { id: 'fragment', label: 'Fragment', tone: 'violet' },
          { id: 'suspense', label: 'Suspense', tone: 'sky' },
          { id: 'version', label: 'Version', tone: 'emerald' },
          { id: 'feature-flag', label: 'Feature Flag', tone: 'amber' },
          { id: 'more', label: '...', tone: 'indigo' },
        ],
      },
    },
    files: {
      eyebrow: '2',
      title: 'shared의 대표 파일들',
      description: '네 개의 대표 파일이 shared의 책임을 보여줍니다.',
      cards: [
        {
          id: 'symbols',
          fileName: 'ReactSymbols.js',
          badge: 'S',
          title: '특수 타입 식별자',
          description: 'Fragment, Suspense 등 특수한 React 요소의 식별 심벌을 정의합니다.',
          tone: 'violet',
          iconName: 'star',
        },
        {
          id: 'types',
          fileName: 'ReactTypes.js',
          badge: 'T',
          title: '공통 타입 정의',
          description: '여러 패키지가 공통으로 사용하는 Flow 타입 또는 TS 타입들을 정의합니다.',
          tone: 'sky',
          iconName: 'fileText',
        },
        {
          id: 'version',
          fileName: 'ReactVersion.js',
          badge: 'V',
          title: '버전 문자열',
          description:
            'React의 버전 정보를 한 곳에서 관리하고 모든 패키지가 동일한 값을 사용합니다.',
          tone: 'emerald',
          iconName: 'gitBranch',
        },
        {
          id: 'feature-flags',
          fileName: 'ReactFeatureFlags.js',
          badge: 'F',
          title: '기능 플래그',
          description: '실험적 기능, 성능 옵션 등을 켜고 끌 수 있는 플래그를 중앙에서 관리합니다.',
          tone: 'amber',
          iconName: 'flag',
        },
      ],
    },
    symbolsCheckpoint: {
      eyebrow: '3',
      title: 'ReactSymbols.js 코드 체크포인트',
      checkpoint: {
        file: { label: '파일', value: 'packages/shared/ReactSymbols.js' },
        look: {
          label: '볼 것',
          values: ['REACT_FRAGMENT_TYPE', 'REACT_SUSPENSE_TYPE'],
        },
        question: {
          label: '학습 질문',
          value: 'React는 특별한 요소 종류를 어떤 심벌로 식별할까?',
        },
        button: '코드 보기',
      },
      codeCaption: 'packages/shared/ReactSymbols.js',
      code: REACT_SYMBOLS_CODE,
      callouts: [
        { id: 'fragment', title: '프래그먼트 식별 심벌', code: "Symbol.for('react.fragment')" },
        { id: 'suspense', title: '서스펜스 식별 심벌', code: "Symbol.for('react.suspense')" },
      ],
    },
    clientImport: {
      eyebrow: '4',
      title: 'ReactClient.js에서 shared import 확인',
      description:
        'shared가 public API 구성에도 직접 연결되는 흐름을 import 한 블록으로 확인합니다.',
      explanation: {
        title: '설명',
        lines: [
          'ReactClient.js가 shared/ReactSymbols에서 Fragment, Suspense 관련 내부 심벌을 가져옵니다.',
          '이 심벌들은 React 요소 타입을 식별하는 기준이 됩니다.',
        ],
      },
      buttons: { primary: 'ReactClient.js 열기', secondary: 'ReactSymbols.js 보기' },
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_IMPORT_CODE,
      callout: 'shared에서 가져온 심벌들을 React public API 구성 및 내부 처리에 사용',
    },
    connection: {
      eyebrow: '5',
      title: 'shared가 연결하는 패키지',
      description: '하나의 shared가 세 패키지의 공통 언어를 만들어 줍니다.',
      centerLabel: 'shared',
      centerSubtitle: '공통 기반층',
      packages: PACKAGES_KO,
      conceptTags: [
        { id: 'symbols', label: '공통 심벌' },
        { id: 'types', label: '공통 타입' },
        { id: 'version', label: '공통 버전 정보' },
        { id: 'flags', label: '공통 기능 플래그' },
      ],
      banner: 'shared는 기능 실행 패키지라기보다, 여러 패키지의 공통 언어를 만드는 기반층이다.',
    },
    quiz: {
      eyebrow: '6',
      title: '빠른 분류 퀴즈',
      description: '각 항목이 shared의 어느 파일과 가장 가까운지 떠올려 보세요.',
      cards: [
        {
          id: 'suspense',
          question: 'Suspense 내부 식별자는 어디서 관리될까?',
          answer: 'ReactSymbols.js',
          explanation:
            'Suspense와 같은 요소 타입을 식별하는 심벌은 ReactSymbols.js에서 정의됩니다.',
        },
        {
          id: 'version',
          question: 'React 버전 문자열은 어디에 가까울까?',
          answer: 'ReactVersion.js',
          explanation:
            '모든 패키지가 동일한 버전 문자열을 사용하도록 ReactVersion.js에서 관리합니다.',
        },
        {
          id: 'feature-flag',
          question: '기능을 켜고 끄는 내부 관리는?',
          answer: 'ReactFeatureFlags.js',
          explanation: '실험적 기능, 내부 옵션 등의 on/off는 ReactFeatureFlags.js에서 관리됩니다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '7',
      title: '다음으로 넘어가기',
      line1: '공통 기반층까지 봤다면,',
      line2: '이제 React가 웹뿐 아니라 Native 환경과도',
      line3Before: '어떻게 내부 구조를 공유하는지 ',
      line3Accent: 'Native',
      line3After: ' 쪽 흐름을 살펴봅니다.',
      primaryCta: '다음: React Native와 공유되는 구조 →',
      primaryHref: '/react-native-shared',
    },
  },
  en: {
    hero: {
      chapterBadge: 'CHAPTER 24',
      title: {
        line1: 'When reading React source,',
        line2: 'shared keeps showing up.',
      },
      description:
        'Because the symbols, types, version info and feature flags that several packages share all live in one place.',
      a11yDiagram:
        'The shared node at the center connects with dashed lines to three packages: react, react-dom, and react-reconciler. On the right is a checklist of four shared concerns.',
      centerLabel: 'shared',
      centerSubtitle: 'Common foundation',
      packages: PACKAGES_EN,
      checklist: [
        'Shared symbols',
        'Shared type definitions',
        'Shared version info',
        'Shared feature flags',
      ],
    },
    why: {
      eyebrow: '1',
      title: 'Why shared is needed',
      description:
        'When packages define the same concept independently, consistency breaks. shared fixes that.',
      problem: {
        title: 'Problem',
        body: 'If react, react-dom and reconciler each redefine the same concept, internal consistency breaks.',
      },
      solution: {
        title: 'Solution',
        body: 'Common concepts live in shared.',
      },
      example: {
        title: 'Example: concepts that shared owns',
        tags: [
          { id: 'fragment', label: 'Fragment', tone: 'violet' },
          { id: 'suspense', label: 'Suspense', tone: 'sky' },
          { id: 'version', label: 'Version', tone: 'emerald' },
          { id: 'feature-flag', label: 'Feature Flag', tone: 'amber' },
          { id: 'more', label: '...', tone: 'indigo' },
        ],
      },
    },
    files: {
      eyebrow: '2',
      title: 'Representative shared files',
      description: 'Four files show what shared is responsible for.',
      cards: [
        {
          id: 'symbols',
          fileName: 'ReactSymbols.js',
          badge: 'S',
          title: 'Special-type identifiers',
          description:
            'Defines identifier symbols for special React elements (Fragment, Suspense, …).',
          tone: 'violet',
          iconName: 'star',
        },
        {
          id: 'types',
          fileName: 'ReactTypes.js',
          badge: 'T',
          title: 'Common type definitions',
          description: 'Flow/TS types that several packages share live here.',
          tone: 'sky',
          iconName: 'fileText',
        },
        {
          id: 'version',
          fileName: 'ReactVersion.js',
          badge: 'V',
          title: 'Version string',
          description: 'The React version string is managed here so every package matches.',
          tone: 'emerald',
          iconName: 'gitBranch',
        },
        {
          id: 'feature-flags',
          fileName: 'ReactFeatureFlags.js',
          badge: 'F',
          title: 'Feature flags',
          description: 'Centrally controls experimental features and performance toggles.',
          tone: 'amber',
          iconName: 'flag',
        },
      ],
    },
    symbolsCheckpoint: {
      eyebrow: '3',
      title: 'ReactSymbols.js code checkpoint',
      checkpoint: {
        file: { label: 'File', value: 'packages/shared/ReactSymbols.js' },
        look: { label: 'Look at', values: ['REACT_FRAGMENT_TYPE', 'REACT_SUSPENSE_TYPE'] },
        question: {
          label: 'Question',
          value: 'How does React identify special element types?',
        },
        button: 'View the code',
      },
      codeCaption: 'packages/shared/ReactSymbols.js',
      code: REACT_SYMBOLS_CODE,
      callouts: [
        { id: 'fragment', title: 'Fragment identifier', code: "Symbol.for('react.fragment')" },
        { id: 'suspense', title: 'Suspense identifier', code: "Symbol.for('react.suspense')" },
      ],
    },
    clientImport: {
      eyebrow: '4',
      title: 'shared import inside ReactClient.js',
      description: 'Confirm that shared also wires into the public API construction.',
      explanation: {
        title: 'Explanation',
        lines: [
          'ReactClient.js imports Fragment/Suspense symbols from shared/ReactSymbols.',
          'These symbols are how React identifies element types.',
        ],
      },
      buttons: { primary: 'Open ReactClient.js', secondary: 'View ReactSymbols.js' },
      codeCaption: 'packages/react/src/ReactClient.js',
      code: REACT_CLIENT_IMPORT_CODE,
      callout: 'The symbols imported from shared drive React’s public API and internal processing.',
    },
    connection: {
      eyebrow: '5',
      title: 'Packages that shared connects',
      description: 'A single shared layer becomes the common vocabulary of three packages.',
      centerLabel: 'shared',
      centerSubtitle: 'Common foundation',
      packages: PACKAGES_EN,
      conceptTags: [
        { id: 'symbols', label: 'Shared symbols' },
        { id: 'types', label: 'Shared types' },
        { id: 'version', label: 'Shared version info' },
        { id: 'flags', label: 'Shared feature flags' },
      ],
      banner:
        'shared is not an execution package — it is the foundation that creates the common vocabulary.',
    },
    quiz: {
      eyebrow: '6',
      title: 'Quick classification quiz',
      description: 'Match each item with the most likely shared file.',
      cards: [
        {
          id: 'suspense',
          question: 'Where does the Suspense identifier live?',
          answer: 'ReactSymbols.js',
          explanation:
            'Identifier symbols for special element types are defined in ReactSymbols.js.',
        },
        {
          id: 'version',
          question: 'And the React version string?',
          answer: 'ReactVersion.js',
          explanation: 'ReactVersion.js owns the version so every package uses the same string.',
        },
        {
          id: 'feature-flag',
          question: 'Turning internal features on and off?',
          answer: 'ReactFeatureFlags.js',
          explanation: 'ReactFeatureFlags.js manages experimental flags and internal options.',
        },
      ],
    },
    nextStep: {
      eyebrow: '7',
      title: 'Move to the next step',
      line1: 'Now that you have seen the common foundation,',
      line2: 'next we look at how React shares its internals',
      line3Before: 'with the ',
      line3Accent: 'Native',
      line3After: ' environment, beyond the web.',
      primaryCta: 'Next: structure shared with React Native →',
      primaryHref: '/react-native-shared',
    },
  },
};
