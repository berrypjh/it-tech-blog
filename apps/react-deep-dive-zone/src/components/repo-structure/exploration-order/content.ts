import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type { ToneKey };

export type IconName =
  | 'folder'
  | 'package'
  | 'code'
  | 'check'
  | 'tag'
  | 'folderOpen'
  | 'search'
  | 'fileCode'
  | 'clipboard'
  | 'workflow'
  | 'fileText';

export type HeroFlowNode = {
  id: 'root' | 'packages' | 'code' | 'tests' | 'releases';
  title: string;
  subtitle: string;
  icon: IconName;
  tone: ToneKey;
};

export type RoutineStep = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

export type RouteCard = {
  id: 'a' | 'b' | 'c';
  badge: string;
  question: string;
  path: string[];
  relatedTest: string;
  tone: ToneKey;
};

export type FlowCard = {
  id: 'public' | 'impl' | 'tests' | 'release';
  title: string;
  englishLabel: string;
  description: string;
  icon: IconName;
  tone: ToneKey;
};

export type PracticeStep = {
  badge: string;
  title: string;
  description: string;
  status: string;
};

export type ExplorationContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    flowNodes: HeroFlowNode[];
    summaryLine: string[];
  };
  routine: {
    eyebrow: string;
    title: string;
    description: string;
    steps: RoutineStep[];
  };
  paths: {
    eyebrow: string;
    title: string;
    description: string;
    cards: RouteCard[];
    relatedLabel: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FlowCard[];
    exampleLabel: string;
    examplePath: string[];
  };
  practice1: {
    eyebrow: string;
    title: string;
    steps: PracticeStep[];
    bottomNote: string;
  };
  practice2: {
    eyebrow: string;
    title: string;
    steps: PracticeStep[];
    noteLabel: string;
    notePlaceholder: string;
    noteMax: number;
  };
  checklist: {
    eyebrow: string;
    title: string;
    description: string;
    groupOne: string[];
    groupTwo: string[];
    celebration: { title: string; description: string };
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

export const explorationContent: Record<Locale, ExplorationContent> = {
  ko: {
    hero: {
      badge: '01 · 최종 정리',
      title: {
        line1: '이제 React 저장소를',
        line2: '처음부터 헤매지 않고',
        line3: '탐색할 수 있습니다.',
      },
      description:
        '폴더를 외우는 것이 아니라, 질문을 들고 올바른 경로로 이동하는 감각이 중요합니다.',
      primaryCta: '전체 로드맵 보기',
      secondaryCta: 'React GitHub 열기',
      primaryHref: '#section-routine',
      repoUrl: 'https://github.com/facebook/react',
      flowNodes: [
        {
          id: 'root',
          title: 'Root',
          subtitle: '저장소 루트',
          icon: 'folder',
          tone: 'blue',
        },
        {
          id: 'packages',
          title: 'Packages',
          subtitle: '핵심 패키지',
          icon: 'package',
          tone: 'indigo',
        },
        {
          id: 'code',
          title: 'Code',
          subtitle: '구현 코드',
          icon: 'code',
          tone: 'violet',
        },
        {
          id: 'tests',
          title: 'Tests',
          subtitle: '테스트 코드',
          icon: 'check',
          tone: 'teal',
        },
        {
          id: 'releases',
          title: 'Releases',
          subtitle: '변경 기록',
          icon: 'tag',
          tone: 'emerald',
        },
      ],
      summaryLine: ['질문', '탐색', '이해', '검증', '맥락'],
    },
    routine: {
      eyebrow: '01 · 최종 탐색 루틴 7단계',
      title: '최종 탐색 루틴 7단계',
      description: '앞선 9개 페이지를 실제 저장소 탐색 행동 7단계로 압축했습니다.',
      steps: [
        {
          number: '1',
          title: '루트 구조 확인',
          description: 'README, 폴더 구조, 주요 디렉터리 역할 파악',
          icon: 'folderOpen',
        },
        {
          number: '2',
          title: 'packages 안 핵심 패키지 찾기',
          description: 'react, react-dom, react-reconciler, scheduler, shared',
          icon: 'search',
        },
        {
          number: '3',
          title: '궁금한 API의 public entry 보기',
          description: '각 패키지의 공개 API 진입점을 먼저 확인',
          icon: 'code',
        },
        {
          number: '4',
          title: '내부 구현 파일로 내려가기',
          description: '실제 동작이 구현된 핵심 파일로 이동',
          icon: 'fileCode',
        },
        {
          number: '5',
          title: '관련 테스트 파일 찾기',
          description: '동작 보장 조건과 edge case 확인',
          icon: 'clipboard',
        },
        {
          number: '6',
          title: 'Releases / CHANGELOG로 버전 맥락 확인',
          description: '최신 변경 내용과 변화 흐름 이해',
          icon: 'tag',
        },
        {
          number: '7',
          title: '흐름도를 직접 그리기',
          description: '이해한 내용을 구조화하여 정리',
          icon: 'workflow',
        },
      ],
    },
    paths: {
      eyebrow: '02 · 질문별 탐색 경로 예시',
      title: '질문별 탐색 경로 예시',
      description: '파일을 외우는 것이 아니라, 질문을 들고 경로를 따라가세요.',
      relatedLabel: '관련 테스트',
      cards: [
        {
          id: 'a',
          badge: 'A',
          question: 'createRoot는 어디서 시작될까?',
          path: ['packages/react-dom', 'src/client', 'ReactDOMRoot.js', 'createRoot'],
          relatedTest: 'ReactDOMRoot-test.js',
          tone: 'blue',
        },
        {
          id: 'b',
          badge: 'B',
          question: 'Element가 Fiber로 바뀌는 순간은?',
          path: ['packages/react-reconciler', 'src', 'ReactFiber.js', 'createFiberFromElement'],
          relatedTest: 'ReactFiber-test.js',
          tone: 'teal',
        },
        {
          id: 'c',
          badge: 'C',
          question: 'React 공개 API는 어디서 모일까?',
          path: ['packages/react', 'src', 'ReactClient.js'],
          relatedTest: 'ReactClient-test.js',
          tone: 'violet',
        },
      ],
    },
    flow: {
      eyebrow: '02 · public API → 내부 구현 → 테스트 → 릴리즈 흐름도',
      title: '공통 독해 흐름도',
      description: '어떤 API를 읽더라도 반복 적용할 수 있는 공통 루틴입니다.',
      cards: [
        {
          id: 'public',
          title: '공개 API',
          englishLabel: 'Public Entry',
          description: '사용자가 호출하는 진입점',
          icon: 'fileText',
          tone: 'blue',
        },
        {
          id: 'impl',
          title: '구현 파일',
          englishLabel: 'Implementation',
          description: '실제 로직이 구현된 핵심 코드',
          icon: 'package',
          tone: 'teal',
        },
        {
          id: 'tests',
          title: '테스트 코드',
          englishLabel: 'Tests',
          description: '무엇을 보장하는지 검증하는 코드',
          icon: 'check',
          tone: 'emerald',
        },
        {
          id: 'release',
          title: '변경 기록',
          englishLabel: 'Releases / PR',
          description: '언제, 왜, 어떻게 바뀌었는지 맥락 확인',
          icon: 'tag',
          tone: 'violet',
        },
      ],
      exampleLabel: '예시',
      examplePath: [
        'createRoot (react-dom/client)',
        'ReactDOMRoot.js',
        'ReactDOMRoot-test.js',
        '관련 Release / PR',
      ],
    },
    practice1: {
      eyebrow: '04 · 미니 실습 1 — createRoot 따라가기',
      title: '미니 실습 1 — createRoot 따라가기',
      steps: [
        {
          badge: 'Step 1',
          title: 'react-dom/client에서 시작',
          description: 'index.js의 진입점에서 createRoot 내보내기 확인',
          status: '완료',
        },
        {
          badge: 'Step 2',
          title: 'ReactDOMRoot.js 열기',
          description: '루트 생성과 createRoot 함수 위치 파악',
          status: '완료',
        },
        {
          badge: 'Step 3',
          title: 'createRoot 함수의 입력과 오류 처리 보기',
          description: 'container 검증, 옵션 처리, 에러 메시지 확인',
          status: '완료',
        },
        {
          badge: 'Step 4',
          title: '테스트 파일에서 보장 조건 확인',
          description: 'ReactDOMRoot-test.js에서 기대 동작 읽기',
          status: '완료',
        },
      ],
      bottomNote: 'createRoot 흐름 요약 노트 작성하기',
    },
    practice2: {
      eyebrow: '05 · 미니 실습 2 — Element → Fiber 따라가기',
      title: '미니 실습 2 — Element → Fiber 따라가기',
      steps: [
        {
          badge: 'Step 1',
          title: 'ReactJSXElement.js에서 Element 생성 확인',
          description: 'createElement가 만드는 객체 구조 파악',
          status: '완료',
        },
        {
          badge: 'Step 2',
          title: 'ReactFiber.js의 createFiberFromElement 확인',
          description: 'Element → Fiber 변환 로직 읽기',
          status: '완료',
        },
        {
          badge: 'Step 3',
          title: '두 파일의 개념 연결을 자기 말로 적기',
          description: 'Element와 Fiber의 역할 연결 정리하기',
          status: '완료',
        },
      ],
      noteLabel: '나의 연결 정리 노트',
      notePlaceholder: 'Element가 무엇을 담고 있고, Fiber는 왜 필요한지 연결해 적어보세요.',
      noteMax: 300,
    },
    checklist: {
      eyebrow: '06 · 최종 체크리스트 — 나는 이제 할 수 있는가?',
      title: '최종 체크리스트',
      description: '챕터 마무리 전에 학습 성취를 직접 확인해보세요.',
      groupOne: [
        'React 저장소 루트 구조 설명',
        '핵심 패키지 5개 구분',
        'react와 react-dom 역할 차이 설명',
        'react-reconciler 중요성 이해',
      ],
      groupTwo: [
        'scheduler와 reconciler 구분',
        'shared가 필요한 이유 설명',
        '테스트 코드와 구현 코드 함께 찾기',
        'Releases와 CHANGELOG 구분',
      ],
      celebration: {
        title: '축하합니다!',
        description: '이제 React 저장소를 스스로 탐색할 준비가 되었습니다.',
      },
    },
    nextStep: {
      eyebrow: '07 · 다음 단계로 이동하기',
      title: '저장소 구조를 읽는 준비가 끝났습니다.',
      accentLine: {
        before: '이제 React가 여러 패키지로 나뉜 이유와 각 ',
        accent: '패키지의 역할',
        after: '을 더 깊게 살펴봅니다.',
      },
      primaryCta: '다음: React 패키지 구조와 역할',
      secondaryCta: '저장소 구조 다시 복습하기',
      href: '/react-package',
      restartHref: '/repo-overview',
    },
  },
  en: {
    hero: {
      badge: '01 · final summary',
      title: {
        line1: 'You can now explore the React repository',
        line2: 'without getting lost',
        line3: 'from the very first click.',
      },
      description:
        'It is not about memorising folders — it is about carrying a question and following the right path.',
      primaryCta: 'See the full roadmap',
      secondaryCta: 'Open React on GitHub',
      primaryHref: '#section-routine',
      repoUrl: 'https://github.com/facebook/react',
      flowNodes: [
        {
          id: 'root',
          title: 'Root',
          subtitle: 'Repo root',
          icon: 'folder',
          tone: 'blue',
        },
        {
          id: 'packages',
          title: 'Packages',
          subtitle: 'Core packages',
          icon: 'package',
          tone: 'indigo',
        },
        {
          id: 'code',
          title: 'Code',
          subtitle: 'Implementation',
          icon: 'code',
          tone: 'violet',
        },
        {
          id: 'tests',
          title: 'Tests',
          subtitle: 'Test code',
          icon: 'check',
          tone: 'teal',
        },
        {
          id: 'releases',
          title: 'Releases',
          subtitle: 'Change log',
          icon: 'tag',
          tone: 'emerald',
        },
      ],
      summaryLine: ['Question', 'Explore', 'Understand', 'Verify', 'Context'],
    },
    routine: {
      eyebrow: '01 · 7-step final exploration routine',
      title: '7-step final exploration routine',
      description:
        'The whole chapter is compressed into seven actions you can apply directly to the repo.',
      steps: [
        {
          number: '1',
          title: 'Check the root structure',
          description: 'Read README, scan the folders, learn the main directory roles.',
          icon: 'folderOpen',
        },
        {
          number: '2',
          title: 'Find core packages inside packages/',
          description: 'react, react-dom, react-reconciler, scheduler, shared.',
          icon: 'search',
        },
        {
          number: '3',
          title: 'Open the public entry of the API you care about',
          description: 'Each package has a public entry — start there first.',
          icon: 'code',
        },
        {
          number: '4',
          title: 'Descend into the implementation file',
          description: 'Move down into the core file where the real logic lives.',
          icon: 'fileCode',
        },
        {
          number: '5',
          title: 'Find the related test file',
          description: 'Confirm guaranteed behaviour and edge cases.',
          icon: 'clipboard',
        },
        {
          number: '6',
          title: 'Check version context in Releases / CHANGELOG',
          description: 'Understand recent changes and the long-term flow.',
          icon: 'tag',
        },
        {
          number: '7',
          title: 'Draw a flow diagram yourself',
          description: 'Structure what you understood into a personal map.',
          icon: 'workflow',
        },
      ],
    },
    paths: {
      eyebrow: '02 · question-based exploration paths',
      title: 'Question-based exploration paths',
      description: 'Stop memorising files. Carry a question and walk the path.',
      relatedLabel: 'Related test',
      cards: [
        {
          id: 'a',
          badge: 'A',
          question: 'Where does createRoot start?',
          path: ['packages/react-dom', 'src/client', 'ReactDOMRoot.js', 'createRoot'],
          relatedTest: 'ReactDOMRoot-test.js',
          tone: 'blue',
        },
        {
          id: 'b',
          badge: 'B',
          question: 'When does an Element become a Fiber?',
          path: ['packages/react-reconciler', 'src', 'ReactFiber.js', 'createFiberFromElement'],
          relatedTest: 'ReactFiber-test.js',
          tone: 'teal',
        },
        {
          id: 'c',
          badge: 'C',
          question: 'Where do React’s public APIs converge?',
          path: ['packages/react', 'src', 'ReactClient.js'],
          relatedTest: 'ReactClient-test.js',
          tone: 'violet',
        },
      ],
    },
    flow: {
      eyebrow: '02 · public API → implementation → tests → releases',
      title: 'Common reading flow',
      description: 'A repeatable routine you can apply when reading any API.',
      cards: [
        {
          id: 'public',
          title: 'Public API',
          englishLabel: 'Public Entry',
          description: 'The entry point users call',
          icon: 'fileText',
          tone: 'blue',
        },
        {
          id: 'impl',
          title: 'Implementation',
          englishLabel: 'Implementation',
          description: 'Core code where the logic lives',
          icon: 'package',
          tone: 'teal',
        },
        {
          id: 'tests',
          title: 'Tests',
          englishLabel: 'Tests',
          description: 'Code that verifies what is guaranteed',
          icon: 'check',
          tone: 'emerald',
        },
        {
          id: 'release',
          title: 'Change log',
          englishLabel: 'Releases / PR',
          description: 'When, why and how things changed',
          icon: 'tag',
          tone: 'violet',
        },
      ],
      exampleLabel: 'Example',
      examplePath: [
        'createRoot (react-dom/client)',
        'ReactDOMRoot.js',
        'ReactDOMRoot-test.js',
        'Related Release / PR',
      ],
    },
    practice1: {
      eyebrow: '04 · mini practice 1 — follow createRoot',
      title: 'Mini practice 1 — follow createRoot',
      steps: [
        {
          badge: 'Step 1',
          title: 'Start from react-dom/client',
          description: 'Check the createRoot export in the entry index.js.',
          status: 'Done',
        },
        {
          badge: 'Step 2',
          title: 'Open ReactDOMRoot.js',
          description: 'Locate root creation and the createRoot function.',
          status: 'Done',
        },
        {
          badge: 'Step 3',
          title: 'Read createRoot’s input and error handling',
          description: 'Container validation, options handling and error messages.',
          status: 'Done',
        },
        {
          badge: 'Step 4',
          title: 'Confirm guarantees in the test file',
          description: 'Read the expected behaviour in ReactDOMRoot-test.js.',
          status: 'Done',
        },
      ],
      bottomNote: 'Write a summary note of the createRoot flow',
    },
    practice2: {
      eyebrow: '05 · mini practice 2 — follow Element → Fiber',
      title: 'Mini practice 2 — follow Element → Fiber',
      steps: [
        {
          badge: 'Step 1',
          title: 'See Element creation in ReactJSXElement.js',
          description: 'Learn the object shape that createElement produces.',
          status: 'Done',
        },
        {
          badge: 'Step 2',
          title: 'Read createFiberFromElement in ReactFiber.js',
          description: 'Walk the Element → Fiber conversion logic.',
          status: 'Done',
        },
        {
          badge: 'Step 3',
          title: 'Write the connection in your own words',
          description: 'Summarise how Element and Fiber relate to each other.',
          status: 'Done',
        },
      ],
      noteLabel: 'My connection note',
      notePlaceholder:
        'Write what Element holds and why Fiber is needed — connect them in your own words.',
      noteMax: 300,
    },
    checklist: {
      eyebrow: '06 · final checklist — can you do this now?',
      title: 'Final checklist',
      description: 'Verify your learning before wrapping up the chapter.',
      groupOne: [
        'Explain the React repository root structure',
        'Distinguish the five core packages',
        'Explain the role difference between react and react-dom',
        'Understand why react-reconciler matters',
      ],
      groupTwo: [
        'Distinguish scheduler from reconciler',
        'Explain why shared exists',
        'Find test code paired with implementation',
        'Distinguish Releases from CHANGELOG',
      ],
      celebration: {
        title: 'Congratulations!',
        description: 'You are now ready to explore the React repository on your own.',
      },
    },
    nextStep: {
      eyebrow: '07 · next step',
      title: 'You are ready to read the repository structure.',
      accentLine: {
        before: 'Next, look closer at why React splits into multiple packages and each ',
        accent: 'package’s role',
        after: '.',
      },
      primaryCta: 'Next: React package structure & roles',
      secondaryCta: 'Revisit the repository structure',
      href: '/react-package',
      restartHref: '/repo-overview',
    },
  },
};
