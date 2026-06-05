import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IconName =
  | 'package'
  | 'atom'
  | 'monitor'
  | 'cuboid'
  | 'triangleAlert'
  | 'folderCheck'
  | 'brackets'
  | 'braces'
  | 'shield'
  | 'flag'
  | 'fragment'
  | 'suspense'
  | 'activity';

export type PackageBranch = {
  id: 'react' | 'react-dom' | 'react-reconciler';
  title: string;
  description: string;
  tone: ToneKey;
  icon: IconName;
};

export type RepFile = {
  id: 'symbols' | 'types' | 'version' | 'flags';
  title: string;
  subtitle: string;
  description: string;
  codeLabel: string;
  tone: ToneKey;
  icon: IconName;
};

export type SymbolCard = {
  id: 'fragment' | 'suspense' | 'activity';
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
};

export type ConnectionRow = {
  id: 'react' | 'react-dom' | 'react-reconciler';
  packageName: string;
  description: string;
  usage: string;
  tone: ToneKey;
  icon: IconName;
};

export type SharedQuiz = {
  id: 'version-quiz' | 'symbol-quiz' | 'flag-quiz';
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

export type SharedContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    hubTitle: string;
    hubSubtitle: string;
    hubTags: string[];
    branches: PackageBranch[];
  };
  why: {
    eyebrow: string;
    title: string;
    description: string;
    problemBadge: string;
    problemCopy: string;
    problemList: string[];
    solutionBadge: string;
    solutionCopy: string;
    solutionList: string[];
    exampleTitle: string;
    exampleTags: string[];
  };
  files: {
    eyebrow: string;
    title: string;
    cards: RepFile[];
  };
  symbols: {
    eyebrow: string;
    title: string;
    cards: SymbolCard[];
    banner: string;
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    whyLabel: string;
    whyValue: string;
    learningQuestion: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
  };
  connection: {
    eyebrow: string;
    title: string;
    description: string;
    hubTitle: string;
    hubSubtitle: string;
    hubTags: string[];
    rows: ConnectionRow[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    cards: SharedQuiz[];
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

const reactClientImportCode = `import {
  REACT_ELEMENT_TYPE,
  REACT_FRAGMENT_TYPE,
  REACT_PORTAL_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_OFFSCREEN_TYPE,
} from 'shared/ReactSymbols';

import { enableProfilerTimer } from 'shared/ReactFeatureFlags';
`;

export const sharedContent: Record<Locale, SharedContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 7/10단계',
      title: {
        line1: 'React 코드를 읽다 보면',
        line2: 'shared가 계속 등장합니다.',
      },
      description:
        '여러 패키지가 공통으로 쓰는 타입, 심벌, 버전, 유틸이 shared 패키지에 모여 있기 때문입니다.',
      primaryCta: 'shared 지도 보기',
      secondaryCta: 'GitHub에서 열기',
      primaryHref: '#section-why',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/shared',
      hubTitle: 'shared',
      hubSubtitle: '공통 기반층',
      hubTags: ['타입', '심벌', '버전', '플래그', '유틸'],
      branches: [
        {
          id: 'react',
          title: 'react',
          description: '사용자 API',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'react-dom',
          title: 'react-dom',
          description: 'DOM Renderer',
          tone: 'indigo',
          icon: 'monitor',
        },
        {
          id: 'react-reconciler',
          title: 'react-reconciler',
          description: 'Fiber / Render / Commit',
          tone: 'violet',
          icon: 'cuboid',
        },
      ],
    },
    why: {
      eyebrow: '02 · why shared',
      title: 'shared가 필요한 이유',
      description:
        '공통 개념을 패키지마다 따로 정의하면 무엇이 깨지고, shared는 무엇을 해결할까요?',
      problemBadge: '문제',
      problemCopy: '각 패키지가 같은 개념을 제각각 정의하면 내부 일관성이 깨진다.',
      problemList: [
        '같은 개념이 다른 값으로 정의될 수 있다.',
        '패키지 간 비교/식별이 불안정해진다.',
        '유지보수 비용이 급격히 증가한다.',
      ],
      solutionBadge: '해결',
      solutionCopy: '공통 개념은 shared에서 관리한다.',
      solutionList: [
        '모든 패키지가 동일한 값과 타입을 사용한다.',
        '일관성 있는 비교/식별이 가능하다.',
        '변경이 필요할 때 한 곳만 수정하면 된다.',
      ],
      exampleTitle: '예시',
      exampleTags: ['Fragment 심벌', 'Suspense 심벌', 'version string', 'feature flags'],
    },
    files: {
      eyebrow: '03 · representative files',
      title: 'shared의 대표 파일',
      cards: [
        {
          id: 'symbols',
          title: 'ReactSymbols.js',
          subtitle: '내부 식별자(심벌) 정의',
          description: 'React 내부에서 사용하는 특별한 타입의 심벌을 모아둡니다.',
          codeLabel: 'export const REACT_*_TYPE',
          tone: 'blue',
          icon: 'brackets',
        },
        {
          id: 'types',
          title: 'ReactTypes.js',
          subtitle: '공통 타입 정의',
          description: '여러 패키지가 공유하는 타입 (Tags, FiberType 등)을 정의합니다.',
          codeLabel: 'export type ReactType = ...',
          tone: 'indigo',
          icon: 'braces',
        },
        {
          id: 'version',
          title: 'ReactVersion.js',
          subtitle: '버전 정보 관리',
          description: 'React 버전 문자열과 관련된 정보를 한 곳에서 관리합니다.',
          codeLabel: 'export const ReactVersion = ...',
          tone: 'emerald',
          icon: 'shield',
        },
        {
          id: 'flags',
          title: 'ReactFeatureFlags.js',
          subtitle: '기능 플래그 관리',
          description: '실험적 기능, 조건부 동작을 제어하는 플래그들을 모아둡니다.',
          codeLabel: 'export const enableNewAPI = ...',
          tone: 'violet',
          icon: 'flag',
        },
      ],
    },
    symbols: {
      eyebrow: '04 · why ReactSymbols matters',
      title: 'ReactSymbols가 중요한 이유',
      cards: [
        {
          id: 'fragment',
          title: 'REACT_FRAGMENT_TYPE',
          subtitle: '<></> / Fragment 심벌',
          description: 'Fragment 요소를 내부적으로 식별하기 위한 고유 심벌',
          icon: 'fragment',
        },
        {
          id: 'suspense',
          title: 'REACT_SUSPENSE_TYPE',
          subtitle: '<Suspense> 심벌',
          description: 'Suspense 요소를 내부적으로 식별하기 위한 고유 심벌',
          icon: 'suspense',
        },
        {
          id: 'activity',
          title: 'REACT_ACTIVITY_TYPE',
          subtitle: '<Activity> 심벌',
          description: 'Activity(실험적) 요소를 식별하는 고유 심벌',
          icon: 'activity',
        },
      ],
      banner: '이 심벌들은 React 내부에서 "어떤 종류의 요소인가?"를 구분하는 기준이 됩니다.',
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: '코드로 보기: shared를 어디서 사용할까?',
      fileLabel: '파일',
      filePath: 'packages/react/src/ReactClient.js',
      whyLabel: '왜 여기서 shared를 보나?',
      whyValue: 'ReactClient.js는 여러 타입 심벌을 shared/ReactSymbols에서 가져오기 때문입니다.',
      learningQuestion: '왜 여러 패키지가\n동일한 심벌을 사용해야 할까?',
      primaryCta: 'ReactClient.js 읽기',
      secondaryCta: 'ReactSymbols.js 보기',
      primaryHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
      secondaryHref: 'https://github.com/facebook/react/blob/main/packages/shared/ReactSymbols.js',
      codeHeader: 'packages/react/src/ReactClient.js',
      codeBadge: 'main',
      code: reactClientImportCode,
    },
    connection: {
      eyebrow: '06 · package connections',
      title: 'shared와 각 패키지의 연결',
      description: 'shared 하나가 여러 패키지의 공통 기반을 동시에 제공합니다.',
      hubTitle: 'shared',
      hubSubtitle: '공통 기반층',
      hubTags: ['타입', '심벌', '버전', '플래그', '유틸'],
      rows: [
        {
          id: 'react',
          packageName: 'react',
          description: '사용자 API 및 코어 로직',
          usage: '공통 타입, 심벌, 플래그, 유틸 사용',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'react-dom',
          packageName: 'react-dom',
          description: 'DOM Renderer',
          usage: '공통 심벌, 타입, 버전 사용',
          tone: 'indigo',
          icon: 'monitor',
        },
        {
          id: 'react-reconciler',
          packageName: 'react-reconciler',
          description: 'Fiber / Render / Commit',
          usage: '공통 타입, 플래그, 내부 개념 사용',
          tone: 'violet',
          icon: 'cuboid',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · quick classification',
      title: '빠른 분류 퀴즈',
      cards: [
        {
          id: 'version-quiz',
          question: 'Q. React 버전 문자열은\n어느 파일에 가까울까?',
          hint: '힌트: 버전 문자열과 관련 정보를 한 곳에 모음',
          accordionLabel: '정답 보기',
          answer: '정답: ReactVersion.js',
          answerDescription: 'React 버전 정보와 문자열을 관리합니다.',
          tone: 'emerald',
        },
        {
          id: 'symbol-quiz',
          question: 'Q. Suspense 내부 심벌은\n어느 파일에 가까울까?',
          hint: '힌트: REACT_*_TYPE 심벌이 모이는 곳',
          accordionLabel: '정답 보기',
          answer: '정답: ReactSymbols.js',
          answerDescription: 'Suspense를 식별하는 심벌이 정의되어 있습니다.',
          tone: 'blue',
        },
        {
          id: 'flag-quiz',
          question: 'Q. 기능을 켜고 끄는 조건 플래그는\n어느 파일에 가까울까?',
          hint: '힌트: enable* 형태의 토글',
          accordionLabel: '정답 보기',
          answer: '정답: ReactFeatureFlags.js',
          answerDescription: '실험적 기능과 조건 플래그가 정의되어 있습니다.',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '이제 디렉터리와 패키지 구조를 읽을 수 있게 되었습니다.',
      accentLine: {
        before: '다음은 구현만큼 중요한 ',
        accent: '테스트 코드',
        after: '를 어떻게 볼지 살펴봅니다.',
      },
      primaryCta: '다음: 테스트 코드 읽기',
      secondaryCta: '이전 페이지 다시 보기',
      href: '/why-tests',
      restartHref: '/scheduler-role',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 7/10',
      title: {
        line1: 'Read enough React code',
        line2: 'and you keep meeting shared.',
      },
      description:
        'shared collects the types, symbols, versions and utilities that every package needs to agree on.',
      primaryCta: 'See the shared map',
      secondaryCta: 'Open on GitHub',
      primaryHref: '#section-why',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/shared',
      hubTitle: 'shared',
      hubSubtitle: 'Common foundation',
      hubTags: ['Types', 'Symbols', 'Version', 'Flags', 'Utils'],
      branches: [
        {
          id: 'react',
          title: 'react',
          description: 'User API',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'react-dom',
          title: 'react-dom',
          description: 'DOM Renderer',
          tone: 'indigo',
          icon: 'monitor',
        },
        {
          id: 'react-reconciler',
          title: 'react-reconciler',
          description: 'Fiber / Render / Commit',
          tone: 'violet',
          icon: 'cuboid',
        },
      ],
    },
    why: {
      eyebrow: '02 · why shared',
      title: 'Why shared exists',
      description:
        'What breaks when each package defines the same concept on its own — and what shared fixes.',
      problemBadge: 'Problem',
      problemCopy: 'When packages each define the same concept, internal consistency breaks.',
      problemList: [
        'The same concept might end up with different values.',
        'Cross-package comparison and identification becomes fragile.',
        'Maintenance cost grows quickly.',
      ],
      solutionBadge: 'Solution',
      solutionCopy: 'Common concepts are managed in shared.',
      solutionList: [
        'Every package uses the same values and types.',
        'Comparison and identification stay consistent.',
        'A change only needs to be made in one place.',
      ],
      exampleTitle: 'Examples',
      exampleTags: ['Fragment symbol', 'Suspense symbol', 'version string', 'feature flags'],
    },
    files: {
      eyebrow: '03 · representative files',
      title: 'Representative files in shared',
      cards: [
        {
          id: 'symbols',
          title: 'ReactSymbols.js',
          subtitle: 'Internal identifiers',
          description: 'Holds the special-type symbols used across React internals.',
          codeLabel: 'export const REACT_*_TYPE',
          tone: 'blue',
          icon: 'brackets',
        },
        {
          id: 'types',
          title: 'ReactTypes.js',
          subtitle: 'Shared type definitions',
          description: 'Defines types many packages share (Tags, FiberType, …).',
          codeLabel: 'export type ReactType = ...',
          tone: 'indigo',
          icon: 'braces',
        },
        {
          id: 'version',
          title: 'ReactVersion.js',
          subtitle: 'Version management',
          description: 'A single place that owns the React version string and metadata.',
          codeLabel: 'export const ReactVersion = ...',
          tone: 'emerald',
          icon: 'shield',
        },
        {
          id: 'flags',
          title: 'ReactFeatureFlags.js',
          subtitle: 'Feature flag management',
          description: 'Flags that control experimental features and conditional behaviour.',
          codeLabel: 'export const enableNewAPI = ...',
          tone: 'violet',
          icon: 'flag',
        },
      ],
    },
    symbols: {
      eyebrow: '04 · why ReactSymbols matters',
      title: 'Why ReactSymbols matters',
      cards: [
        {
          id: 'fragment',
          title: 'REACT_FRAGMENT_TYPE',
          subtitle: '<></> / Fragment symbol',
          description: 'Unique symbol used internally to identify Fragment elements',
          icon: 'fragment',
        },
        {
          id: 'suspense',
          title: 'REACT_SUSPENSE_TYPE',
          subtitle: '<Suspense> symbol',
          description: 'Unique symbol used internally to identify Suspense elements',
          icon: 'suspense',
        },
        {
          id: 'activity',
          title: 'REACT_ACTIVITY_TYPE',
          subtitle: '<Activity> symbol',
          description: 'Unique symbol used to identify Activity (experimental) elements',
          icon: 'activity',
        },
      ],
      banner:
        'These symbols are how React internals answer the question "what kind of element is this?".',
    },
    checkpoint: {
      eyebrow: '05 · code checkpoint',
      title: 'Code checkpoint: where is shared used?',
      fileLabel: 'File',
      filePath: 'packages/react/src/ReactClient.js',
      whyLabel: 'Why look here?',
      whyValue: 'ReactClient.js imports a number of type symbols from shared/ReactSymbols.',
      learningQuestion: 'Why must many packages\nuse the same symbol?',
      primaryCta: 'Read ReactClient.js',
      secondaryCta: 'Open ReactSymbols.js',
      primaryHref: 'https://github.com/facebook/react/blob/main/packages/react/src/ReactClient.js',
      secondaryHref: 'https://github.com/facebook/react/blob/main/packages/shared/ReactSymbols.js',
      codeHeader: 'packages/react/src/ReactClient.js',
      codeBadge: 'main',
      code: reactClientImportCode,
    },
    connection: {
      eyebrow: '06 · package connections',
      title: 'How shared connects to each package',
      description:
        'A single shared layer supplies the foundation that many packages depend on at once.',
      hubTitle: 'shared',
      hubSubtitle: 'Common foundation',
      hubTags: ['Types', 'Symbols', 'Version', 'Flags', 'Utils'],
      rows: [
        {
          id: 'react',
          packageName: 'react',
          description: 'User API and core logic',
          usage: 'Uses shared types, symbols, flags, utils',
          tone: 'blue',
          icon: 'atom',
        },
        {
          id: 'react-dom',
          packageName: 'react-dom',
          description: 'DOM Renderer',
          usage: 'Uses shared symbols, types, version',
          tone: 'indigo',
          icon: 'monitor',
        },
        {
          id: 'react-reconciler',
          packageName: 'react-reconciler',
          description: 'Fiber / Render / Commit',
          usage: 'Uses shared types, flags, internal concepts',
          tone: 'violet',
          icon: 'cuboid',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · quick classification',
      title: 'Quick classification quiz',
      cards: [
        {
          id: 'version-quiz',
          question: 'Q. The React version string\nlives closest to which file?',
          hint: 'Hint: a single place for version string and metadata',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: ReactVersion.js',
          answerDescription: 'It manages React version information and the version string.',
          tone: 'emerald',
        },
        {
          id: 'symbol-quiz',
          question: 'Q. The internal Suspense symbol\nlives closest to which file?',
          hint: 'Hint: where the REACT_*_TYPE symbols are collected',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: ReactSymbols.js',
          answerDescription: 'The symbol that identifies Suspense is defined here.',
          tone: 'blue',
        },
        {
          id: 'flag-quiz',
          question: 'Q. Conditional feature toggles\nlive closest to which file?',
          hint: 'Hint: enable* style toggles',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: ReactFeatureFlags.js',
          answerDescription: 'Experimental and conditional flags live here.',
          tone: 'violet',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'You can now read the directory and package structure.',
      accentLine: {
        before: 'Next, look at how to read ',
        accent: 'test code',
        after: ' — which is as important as the implementation itself.',
      },
      primaryCta: 'Next: reading test code',
      secondaryCta: 'Revisit the previous page',
      href: '/why-tests',
      restartHref: '/scheduler-role',
    },
  },
};
