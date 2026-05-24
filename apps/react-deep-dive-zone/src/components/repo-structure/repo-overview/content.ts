import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type { ToneKey };

export type RepoTreeRowKind = 'dir' | 'doc';

export type RepoTreeRow = {
  id: string;
  name: string;
  kind: RepoTreeRowKind;
  tone?: ToneKey;
};

export type DirectoryCard = {
  id: 'packages' | 'fixtures' | 'scripts' | 'compiler';
  name: string;
  priority: string;
  title: string;
  description: string;
  tone: ToneKey;
  icon: 'folder' | 'flask' | 'terminal' | 'sparkles';
};

export type RootFileCard = {
  id: 'readme' | 'changelog' | 'contributing';
  name: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  tone: ToneKey;
};

export type TimelineStep = {
  id: 'overview' | 'core' | 'remember';
  number: string;
  title: string;
  description: string;
  goal: string;
  tone: ToneKey;
  icon: 'check-list' | 'folder' | 'brain';
};

export type QuizCard = {
  id: 'packages-quiz' | 'compiler-quiz';
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

export type RepoOverviewContent = {
  hero: {
    badge: string;
    title: { lead: string; tail: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    repoUrlLabel: string;
    repoUrl: string;
    treeHeader: string;
    treeRows: RepoTreeRow[];
    codePreview: string;
    codeCaption: string;
    logoCaption: string;
  };
  overwhelm: {
    eyebrow: string;
    title: string;
    floatingDirs: RepoTreeRow[];
    floatingDocs: RepoTreeRow[];
    centerMessage: string;
    highlightPill: string;
  };
  miniMap: {
    eyebrow: string;
    title: string;
    description: string;
    treeHeader: string;
    treeRows: RepoTreeRow[];
    details: Record<
      string,
      {
        title: string;
        badge?: string;
        description: string;
        bullets: string[];
        recommendation?: string;
        tone: ToneKey;
      }
    >;
    defaultSelected: string;
  };
  directory: {
    eyebrow: string;
    title: string;
    cards: DirectoryCard[];
  };
  rootFiles: {
    eyebrow: string;
    title: string;
    cards: RootFileCard[];
    banner: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    steps: TimelineStep[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    cards: QuizCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    /** [before, accent, after] — accent는 mint/teal로 강조된다. */
    accentLine: { before: string; accent: string; after: string };
    primaryCta: string;
    secondaryCta: string;
    href: string;
    restartHref: string;
  };
};

export const repoOverviewContent: Record<Locale, RepoOverviewContent> = {
  ko: {
    hero: {
      badge: '01 · 시작하기',
      title: {
        lead: 'React 저장소를 열었을 때,',
        tail: '처음부터 코드를 읽지 않아도 됩니다.',
      },
      description:
        '먼저 구조를 읽으세요. 어디에 무엇이 있는지 알면 이후 소스코드 독해 속도가 훨씬 빨라집니다.',
      primaryCta: '저장소 지도부터 보기',
      secondaryCta: 'React GitHub 열기',
      repoUrlLabel: '저장소',
      repoUrl: 'https://github.com/facebook/react',
      treeHeader: 'facebook / react',
      treeRows: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'rest', name: '...', kind: 'doc' },
      ],
      codePreview: `function App() {
  return <h1>Hello</h1>;
}`,
      codeCaption: 'App.jsx',
      logoCaption: 'React',
    },
    overwhelm: {
      eyebrow: '02 · first impression',
      title: '처음 열면 왜 막막할까?',
      floatingDirs: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
      ],
      floatingDocs: [
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'config', name: 'config files', kind: 'doc' },
      ],
      centerMessage: '어디부터 봐야 할지 감이 오지 않는다...',
      highlightPill: '하지만 볼 순서가 있다!',
    },
    miniMap: {
      eyebrow: '03 · root mini map',
      title: '저장소 루트 구조 미니맵',
      description:
        '폴더와 문서 파일을 클릭하면, 각 항목이 어떤 역할을 하는지 한 줄씩 살펴볼 수 있습니다.',
      treeHeader: 'facebook / react',
      treeRows: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'rest', name: '...', kind: 'doc' },
      ],
      details: {
        packages: {
          title: 'packages',
          badge: '핵심',
          description: 'React의 실제 구현 패키지가 모여 있는 중심 디렉터리입니다.',
          bullets: [
            'react, react-dom, react-reconciler 등 핵심 패키지 존재',
            '각 패키지는 독립적으로 빌드되고 테스트됩니다.',
            'React가 어떻게 동작하는지 이해하려면 여기가 시작점입니다.',
          ],
          recommendation: '추천: 이 폴더부터 보고, 내부 패키지를 하나씩 살펴보세요.',
          tone: 'sky',
        },
        fixtures: {
          title: 'fixtures',
          description: '실험적 기능, 데모, 버그 재현용 프로젝트가 담겨 있는 폴더입니다.',
          bullets: [
            '내부 RFC를 빠르게 검증할 수 있는 데모 코드 모음',
            'CI가 회귀 테스트를 돌리는 실제 사용 시나리오 보관소',
            '내부 동작을 이해하려면 우선순위는 다소 낮습니다.',
          ],
          tone: 'emerald',
        },
        scripts: {
          title: 'scripts',
          description: '빌드, 테스트, 릴리즈, 코드 생성 등 자동화 도구 모음입니다.',
          bullets: [
            '루트에서 실행되는 build / test / release 스크립트',
            'CI와 로컬에서 공유되는 코드 생성기와 codemod',
            '구현 자체보다 작업 파이프라인을 이해할 때 봅니다.',
          ],
          tone: 'violet',
        },
        compiler: {
          title: 'compiler',
          description: 'React Compiler 프로젝트와 관련 도구 체인이 위치합니다.',
          bullets: [
            '컴포넌트를 자동 최적화하는 컴파일러 본체',
            'Babel/플레이그라운드 등 컴파일러 도구 체인',
            'React 내부 구현과 분리되어 있어 별도 학습이 가능합니다.',
          ],
          tone: 'amber',
        },
        readme: {
          title: 'README.md',
          badge: '문서',
          description: '프로젝트 소개, 빠른 시작, 구조 개요를 가장 먼저 알려주는 문서입니다.',
          bullets: [
            '저장소의 큰 그림을 가장 빠르게 보여줍니다.',
            '주요 패키지와 핵심 링크를 한 페이지에서 안내합니다.',
            '처음 진입 시 반드시 한 번 읽어보세요.',
          ],
          tone: 'blue',
        },
        changelog: {
          title: 'CHANGELOG.md',
          badge: '기록',
          description: '버전별 변화와 주요 릴리즈 노트가 누적된 기록 문서입니다.',
          bullets: [
            'API와 동작이 어떻게 변해왔는지 시간순으로 확인합니다.',
            '오래된 코드 예제가 왜 지금과 다른지 단서를 줍니다.',
            'React 19 기준 학습 시 가장 가까운 변경 이력을 봅니다.',
          ],
          tone: 'teal',
        },
        contributing: {
          title: 'CONTRIBUTING.md',
          badge: '가이드',
          description: '기여 방법, 코드 규칙, 작업 프로세스를 안내합니다.',
          bullets: [
            '코드를 읽을 때 도움이 되는 컨벤션과 폴더 규칙을 정리해 둡니다.',
            'PR / Issue 흐름을 통해 저자들의 사고 방식을 엿볼 수 있습니다.',
            '직접 기여하지 않더라도 한 번 훑어볼 가치가 있습니다.',
          ],
          tone: 'indigo',
        },
        rest: {
          title: '...',
          description:
            'package.json, tsconfig 등 설정 파일과 기타 메타 파일들이 위치합니다. 내부 구현 이해에는 후순위입니다.',
          bullets: [
            '루트 설정 파일은 빌드 환경과 lint 규칙을 정의합니다.',
            '실제 동작 이해보다 도구 체인을 살펴볼 때 참고합니다.',
            '필요할 때만 열어보세요.',
          ],
          tone: 'cyan',
        },
      },
      defaultSelected: 'packages',
    },
    directory: {
      eyebrow: '04 · key directories',
      title: '루트 디렉터리 4개 핵심 요약',
      cards: [
        {
          id: 'packages',
          name: 'packages',
          priority: '우선순위 1',
          title: '실제 React 패키지 코드',
          description: 'React 핵심 구현과 관련 패키지들이 모여 있습니다.',
          tone: 'sky',
          icon: 'folder',
        },
        {
          id: 'fixtures',
          name: 'fixtures',
          priority: '우선순위 2',
          title: '실험 / 데모 / 재현 공간',
          description: '실험적 기능, 데모, 버그 재현용 프로젝트가 담겨 있습니다.',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          priority: '우선순위 3',
          title: '빌드 / 릴리즈 / 자동화 도구',
          description: '빌드, 테스트, 릴리즈, 코드 생성 등 자동화 스크립트 모음입니다.',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          priority: '우선순위 4',
          title: 'React Compiler 프로젝트',
          description: 'React Compiler 관련 소스와 도구 체인이 위치합니다.',
          tone: 'amber',
          icon: 'sparkles',
        },
      ],
    },
    rootFiles: {
      eyebrow: '05 · root files',
      title: '루트 파일들은 왜 존재할까?',
      cards: [
        {
          id: 'readme',
          name: 'README.md',
          badge: '문서',
          shortDescription: '프로젝트 소개, 빠른 시작, 구조 개요 제공',
          longDescription: 'React 프로젝트의 전체 그림을 가장 빠르게 파악할 수 있는 파일입니다.',
          tone: 'sky',
        },
        {
          id: 'changelog',
          name: 'CHANGELOG.md',
          badge: '기록',
          shortDescription: '모든 변경 사항과 버전 업데이트 기록',
          longDescription: '버전별 변화 흐름을 이해하면 코드 변화 맥락을 읽는 데 도움이 됩니다.',
          tone: 'teal',
        },
        {
          id: 'contributing',
          name: 'CONTRIBUTING.md',
          badge: '가이드',
          shortDescription: '기여 방법, 코드 규칙, 프로세스 안내',
          longDescription: '이 프로젝트에 기여하거나 코드를 이해할 때 저자의 맥락을 제공합니다.',
          tone: 'violet',
        },
      ],
      banner:
        '내부 구현을 깊게 보기 전, README와 CHANGELOG의 위치만 알아도 저장소가 덜 낯설어집니다.',
    },
    timeline: {
      eyebrow: '06 · first 3 minutes',
      title: '처음 3분 동안 무엇을 볼까?',
      steps: [
        {
          id: 'overview',
          number: '1',
          title: 'Step 1. 루트 디렉터리 확인',
          description: 'packages, fixtures, scripts, compiler와 문서 파일들의 위치를 확인합니다.',
          goal: '목표: 전체 지도 파악',
          tone: 'sky',
          icon: 'check-list',
        },
        {
          id: 'core',
          number: '2',
          title: 'Step 2. packages 안의 핵심 패키지 찾기',
          description:
            'packages/react, react-dom, react-reconciler, scheduler, shared를 확인합니다.',
          goal: '목표: 핵심 움직임 파악',
          tone: 'teal',
          icon: 'folder',
        },
        {
          id: 'remember',
          number: '3',
          title: 'Step 3. 핵심 패키지의 역할을 기억하기',
          description: '각 패키지가 어떤 역할을 하는지 한 줄로 정리해둡니다.',
          goal: '목표: 구조 기억하기',
          tone: 'emerald',
          icon: 'brain',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · exploration quiz',
      title: '직접 탐색 체험',
      cards: [
        {
          id: 'packages-quiz',
          question: 'Q. React의 핵심 구현 패키지가 모여 있는 폴더는?',
          hint: '힌트: React, ReactDOM, Reconciler 등이 있는 곳',
          accordionLabel: '정답 보기',
          answer: '정답: packages',
          answerDescription: 'packages 디렉터리 안에 React의 실제 구현 패키지들이 위치합니다.',
          tone: 'sky',
        },
        {
          id: 'compiler-quiz',
          question: 'Q. React Compiler는 루트의 어느 디렉터리에 있을까?',
          hint: '힌트: 컴파일러 관련 프로젝트와 도구 체인이 있는 곳',
          accordionLabel: '정답 보기',
          answer: '정답: compiler',
          answerDescription: 'React Compiler 프로젝트와 관련 코드가 compiler 디렉터리에 있습니다.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '저장소 루트 구조를 읽었다면,',
      accentLine: {
        before: '이제 React 구현의 중심인 ',
        accent: 'packages 디렉터리',
        after: '로 들어갑니다.',
      },
      primaryCta: '다음: packages 디렉터리 읽기',
      secondaryCta: '처음부터 다시 보기',
      href: '/packages-dir',
      restartHref: '#hero-heading',
    },
  },
  en: {
    hero: {
      badge: '01 · Getting Started',
      title: {
        lead: 'When you open the React repository,',
        tail: 'you do not need to read the code first.',
      },
      description:
        'Read the structure first. Knowing where things live makes everything you read afterwards much faster.',
      primaryCta: 'Start with the repo map',
      secondaryCta: 'Open React on GitHub',
      repoUrlLabel: 'Repository',
      repoUrl: 'https://github.com/facebook/react',
      treeHeader: 'facebook / react',
      treeRows: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'rest', name: '...', kind: 'doc' },
      ],
      codePreview: `function App() {
  return <h1>Hello</h1>;
}`,
      codeCaption: 'App.jsx',
      logoCaption: 'React',
    },
    overwhelm: {
      eyebrow: '02 · first impression',
      title: 'Why does it feel overwhelming at first?',
      floatingDirs: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
      ],
      floatingDocs: [
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'config', name: 'config files', kind: 'doc' },
      ],
      centerMessage: 'I have no idea where to start...',
      highlightPill: 'But there is an order!',
    },
    miniMap: {
      eyebrow: '03 · root mini map',
      title: 'Repository Root Mini Map',
      description:
        'Click a folder or file to see what each item is responsible for in one short line.',
      treeHeader: 'facebook / react',
      treeRows: [
        { id: 'packages', name: 'packages', kind: 'dir', tone: 'sky' },
        { id: 'fixtures', name: 'fixtures', kind: 'dir', tone: 'emerald' },
        { id: 'scripts', name: 'scripts', kind: 'dir', tone: 'violet' },
        { id: 'compiler', name: 'compiler', kind: 'dir', tone: 'amber' },
        { id: 'changelog', name: 'CHANGELOG.md', kind: 'doc' },
        { id: 'readme', name: 'README.md', kind: 'doc' },
        { id: 'contributing', name: 'CONTRIBUTING.md', kind: 'doc' },
        { id: 'rest', name: '...', kind: 'doc' },
      ],
      details: {
        packages: {
          title: 'packages',
          badge: 'Core',
          description: 'The central directory where the actual React implementation packages live.',
          bullets: [
            'Holds react, react-dom, react-reconciler and the rest of the core packages',
            'Each package is built and tested independently',
            'This is the starting point if you want to understand how React works',
          ],
          recommendation: 'Tip: start here and explore the internal packages one by one.',
          tone: 'sky',
        },
        fixtures: {
          title: 'fixtures',
          description: 'Experimental projects, demos and bug reproduction setups live here.',
          bullets: [
            'A playground for quickly validating internal RFCs',
            'Real-world usage scenarios that CI uses for regression checks',
            'Lower priority when you only want to understand the internals',
          ],
          tone: 'emerald',
        },
        scripts: {
          title: 'scripts',
          description: 'Build, test, release, and code-generation automation lives here.',
          bullets: [
            'Build / test / release scripts that run from the repo root',
            'Code generators and codemods shared between CI and local',
            'Useful when you want to understand the pipeline, not the runtime',
          ],
          tone: 'violet',
        },
        compiler: {
          title: 'compiler',
          description: 'The React Compiler project and its toolchain live in this folder.',
          bullets: [
            'The compiler itself, which optimizes components automatically',
            'Babel plugins, playground and the surrounding toolchain',
            'Separate from React internals and can be learned on its own',
          ],
          tone: 'amber',
        },
        readme: {
          title: 'README.md',
          badge: 'Docs',
          description: 'The doc that introduces the project, quick start and high-level structure.',
          bullets: [
            'Shows you the big picture of the repo the fastest',
            'Links to the major packages and important resources',
            'Worth reading once when you arrive for the first time',
          ],
          tone: 'blue',
        },
        changelog: {
          title: 'CHANGELOG.md',
          badge: 'History',
          description: 'A running log of versions and release notes.',
          bullets: [
            'See how APIs and behavior have changed over time',
            'Explains why older code examples differ from what you see today',
            'Great context when you are learning against React 19',
          ],
          tone: 'teal',
        },
        contributing: {
          title: 'CONTRIBUTING.md',
          badge: 'Guide',
          description: 'How to contribute, the coding rules and the workflow expectations.',
          bullets: [
            'Conventions and folder rules that help when reading the code',
            'PR / issue flow reveals how the authors think',
            'Worth skimming even if you never contribute',
          ],
          tone: 'indigo',
        },
        rest: {
          title: '...',
          description:
            'Config files such as package.json and tsconfig, plus other metadata. Lower priority while learning internals.',
          bullets: [
            'Root configs describe build environment and lint rules',
            'Useful when you study the toolchain, not the runtime',
            'Open them only when you actually need them',
          ],
          tone: 'cyan',
        },
      },
      defaultSelected: 'packages',
    },
    directory: {
      eyebrow: '04 · key directories',
      title: 'Four Key Root Directories',
      cards: [
        {
          id: 'packages',
          name: 'packages',
          priority: 'Priority 1',
          title: 'The real React package code',
          description: 'React core implementation and related packages live here.',
          tone: 'sky',
          icon: 'folder',
        },
        {
          id: 'fixtures',
          name: 'fixtures',
          priority: 'Priority 2',
          title: 'Experiments, demos and reproductions',
          description: 'Experimental features, demos and bug-repro projects are stored here.',
          tone: 'emerald',
          icon: 'flask',
        },
        {
          id: 'scripts',
          name: 'scripts',
          priority: 'Priority 3',
          title: 'Build / release / automation tools',
          description: 'Automation scripts for build, test, release, and code generation.',
          tone: 'violet',
          icon: 'terminal',
        },
        {
          id: 'compiler',
          name: 'compiler',
          priority: 'Priority 4',
          title: 'React Compiler project',
          description: 'Source code and toolchain for the React Compiler project.',
          tone: 'amber',
          icon: 'sparkles',
        },
      ],
    },
    rootFiles: {
      eyebrow: '05 · root files',
      title: 'Why the root files exist',
      cards: [
        {
          id: 'readme',
          name: 'README.md',
          badge: 'Docs',
          shortDescription: 'Project intro, quick start, structure overview',
          longDescription:
            'The fastest file to read if you want a single overview of the React project.',
          tone: 'sky',
        },
        {
          id: 'changelog',
          name: 'CHANGELOG.md',
          badge: 'History',
          shortDescription: 'All changes and version updates',
          longDescription:
            'Following the version-to-version changes helps you read the code in context.',
          tone: 'teal',
        },
        {
          id: 'contributing',
          name: 'CONTRIBUTING.md',
          badge: 'Guide',
          shortDescription: 'How to contribute, coding rules, process',
          longDescription: 'Gives you the authors’ context whether you contribute or just read.',
          tone: 'violet',
        },
      ],
      banner:
        'Before diving into the internals, just knowing where README and CHANGELOG live already makes the repo feel less foreign.',
    },
    timeline: {
      eyebrow: '06 · first 3 minutes',
      title: 'What to look at in the first 3 minutes',
      steps: [
        {
          id: 'overview',
          number: '1',
          title: 'Step 1. Skim the root directory',
          description: 'Locate packages, fixtures, scripts, compiler and the documentation files.',
          goal: 'Goal: Get the overall map',
          tone: 'sky',
          icon: 'check-list',
        },
        {
          id: 'core',
          number: '2',
          title: 'Step 2. Find the core packages inside packages/',
          description: 'Check packages/react, react-dom, react-reconciler, scheduler and shared.',
          goal: 'Goal: See the core moving parts',
          tone: 'teal',
          icon: 'folder',
        },
        {
          id: 'remember',
          number: '3',
          title: 'Step 3. Remember what each core package does',
          description: 'Write a one-line role for each package so you can recall it later.',
          goal: 'Goal: Remember the structure',
          tone: 'emerald',
          icon: 'brain',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · exploration quiz',
      title: 'Try exploring it yourself',
      cards: [
        {
          id: 'packages-quiz',
          question: 'Q. Which folder holds the core React implementation packages?',
          hint: 'Hint: It contains React, ReactDOM, Reconciler and friends',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: packages',
          answerDescription:
            'The packages directory is where the actual React implementation packages live.',
          tone: 'sky',
        },
        {
          id: 'compiler-quiz',
          question: 'Q. Which root directory contains the React Compiler?',
          hint: 'Hint: The folder for the compiler project and its toolchain',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: compiler',
          answerDescription:
            'The compiler directory holds the React Compiler project and its related code.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'You have read the repo root structure,',
      accentLine: {
        before: 'now step into ',
        accent: 'packages',
        after: ', the heart of the React implementation.',
      },
      primaryCta: 'Next: Read the packages directory',
      secondaryCta: 'Restart from the top',
      href: '/packages-dir',
      restartHref: '#hero-heading',
    },
  },
};
