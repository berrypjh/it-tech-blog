import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type FileListItem = {
  name: string;
  /** mute 처리: 흐릿한 row 느낌 */
  muted?: boolean;
};

export type ProblemCard = {
  number: string;
  title: string;
  body: string;
};

export type CompareItem = {
  label: string;
};

export type ReadingType = {
  id: 'api' | 'data-structure' | 'phase' | 'version';
  numeral: string;
  title: string;
  question: string[];
  description: string;
  entry: string;
  tone: ToneKey;
  iconKey: 'plug' | 'boxes' | 'gitBranch' | 'history';
};

export type FlowStep = {
  number: string;
  title: string;
  body: string;
  example: string;
  tone: ToneKey;
};

export type ReactExampleCard = {
  id: 'hook' | 'update' | 'data-structure';
  label: string;
  question: string;
  entry: string;
  path: string[];
  cta: string;
  href: string;
  tone: ToneKey;
};

export type ConverterOption = {
  id: 'use-state' | 'suspense-thenable' | 'activity-hidden';
  question: string;
  entry: string;
  path: string[];
  description: string;
  keywords: string[];
  tone: ToneKey;
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type StartWithQuestionContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    accentLast: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    leftPanel: {
      title: string;
      files: FileListItem[];
      caption: string;
    };
    connectorLabel: string;
    connectorSub: string;
    rightPanel: {
      title: string;
      mainQuestion: string;
      flow: string[];
      caption: string;
    };
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    badges: string[];
  };
  fileFirstFails: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProblemCard[];
    bannerLines: [string, string];
  };
  badGoodCompare: {
    eyebrow: string;
    title: string;
    intro: string;
    badTitle: string;
    badQuestions: CompareItem[];
    badCaption: string;
    goodTitle: string;
    goodQuestions: CompareItem[];
    goodCaption: string;
    connector: string;
  };
  readingTypes: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ReadingType[];
    entryPrefix: string;
  };
  questionToEntry: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: FlowStep[];
    exampleTitle: string;
    examplePhenomenon: string;
    exampleKeywords: string[];
    exampleEntry: string;
    exampleNext: string[];
    /** 우측 카드 블록 라벨 */
    blockLabels: {
      phenomenon: string;
      keyword: string;
      entry: string;
      next: string;
    };
    exampleStepLabel: string;
  };
  reactExamples: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ReactExampleCard[];
    entryLabel: string;
    pathLabel: string;
  };
  converter: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    options: ConverterOption[];
    resultLabels: {
      selectedQuestion: string;
      entry: string;
      path: string;
      description: string;
      keywords: string;
    };
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const startWithQuestionContent: Record<Locale, StartWithQuestionContent> = {
  ko: {
    hero: {
      badge: 'React 소스코드 독해법',
      titleLines: ['소스코드 독해는', '파일이 아니라', '질문에서 시작한다'],
      accentLast: '질문에서 시작한다',
      description: '무엇을 읽을지 정하기 전에, 무엇을 알고 싶은지부터 정해야 합니다.',
      supporting:
        'React 저장소는 파일이 많고, 개념이 여러 패키지에 흩어져 있습니다. 그래서 좋은 질문 없이 파일부터 열면 흐름이 아니라 조각만 남습니다.',
      primaryCta: '질문 설계법 보기',
      secondaryCta: '코드 입구 찾기',
      leftPanel: {
        title: '파일 목록만 훑기',
        files: [
          { name: 'ReactFiberWorkLoop.js' },
          { name: 'ReactFiberHooks.js' },
          { name: 'ReactChildFiber.js' },
          { name: 'ReactFiberBeginWork.js', muted: true },
          { name: 'ReactFiberCommitWork.js', muted: true },
          { name: '…', muted: true },
        ],
        caption: '유명한 파일부터 열면 어디를 읽어야 하는지 금방 흐려집니다.',
      },
      connectorLabel: 'Reframe',
      connectorSub: '질문으로 바꾸기',
      rightPanel: {
        title: '질문 기반 탐색',
        mainQuestion: 'setState는 렌더링으로 어떻게 이어질까?',
        flow: ['질문', '키워드', '첫 함수', '첫 파일'],
        caption: '질문이 생기면 읽기 경로와 출발점이 생깁니다.',
      },
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['React 저장소를 열었을 때', '어떻게 읽기 시작해야', '길을 잃지 않을까?'],
      badges: ['질문 설계', '독해 방향', '출발점 찾기'],
    },
    fileFirstFails: {
      eyebrow: 'why file-first fails',
      title: '왜 파일부터 읽으면 실패하는가?',
      intro:
        'React 저장소는 작은 예제 프로젝트가 아닙니다. 파일명만 보고 들어가면, 지금 보는 코드가 어떤 흐름의 일부인지 놓치기 쉽습니다.',
      cards: [
        {
          number: '01',
          title: '파일이 너무 많다',
          body: '유명한 파일을 열어도 그 파일이 전체 흐름에서 어떤 위치인지 모르면 읽는 기준이 사라집니다.',
        },
        {
          number: '02',
          title: '같은 개념이 여러 패키지에 흩어져 있다',
          body: 'Hook, update, scheduler, DOM 처리는 서로 다른 패키지를 오가며 연결됩니다.',
        },
        {
          number: '03',
          title: '흐름이 아니라 조각만 남는다',
          body: '시작점 없이 읽으면 함수 이름은 기억나지만 왜 그 함수가 호출되는지는 남지 않습니다.',
        },
      ],
      bannerLines: ['파일은 답이 아니다.', '질문에 대한 경로가 답이다.'],
    },
    badGoodCompare: {
      eyebrow: 'reframe the question',
      title: '나쁜 질문 vs 좋은 질문',
      intro: '좋은 독해 질문은 읽을 파일을 직접 고르는 것이 아니라, 따라갈 흐름을 만들어냅니다.',
      badTitle: '나쁜 질문',
      badQuestions: [
        { label: 'ReactFiberWorkLoop.js를 읽어봐야지.' },
        { label: 'Hooks 내부 파일부터 전부 보자.' },
        { label: 'scheduler가 중요하다니까 scheduler 폴더부터 열자.' },
      ],
      badCaption: '파일명은 출발점처럼 보이지만, 질문이 없으면 독해 방향이 없습니다.',
      goodTitle: '좋은 질문',
      goodQuestions: [
        { label: 'setState를 호출하면 root scheduling까지 어떻게 이어질까?' },
        { label: 'useState는 public API에서 어느 구현 파일로 넘어갈까?' },
        { label: 'Suspense는 Promise pending 상태를 어디서 감지하고 다시 시도할까?' },
      ],
      goodCaption: '좋은 질문은 검색어, 함수명, 첫 파일을 함께 만들어냅니다.',
      connector: 'Reframe',
    },
    readingTypes: {
      eyebrow: 'four reading types',
      title: '좋은 독해 질문의 4가지 유형',
      intro:
        '처음부터 완벽한 질문을 만들 필요는 없습니다. 다만 질문이 어떤 유형인지 분류하면 첫 코드 입구를 훨씬 쉽게 찾을 수 있습니다.',
      cards: [
        {
          id: 'api',
          numeral: 'ⅰ',
          title: 'API 기반 질문',
          question: ['useTransition은 내부적으로', '어디로 이어질까?'],
          description:
            '사용자가 호출하는 public API에서 시작해 dispatcher나 실제 구현 파일로 내려갑니다.',
          entry: 'ReactHooks.js',
          tone: 'blue',
          iconKey: 'plug',
        },
        {
          id: 'data-structure',
          numeral: 'ⅱ',
          title: '자료구조 기반 질문',
          question: ['Fiber는 어떤 필드를', '들고 있을까?'],
          description: 'React가 내부에서 다루는 값의 모양을 먼저 확인합니다.',
          entry: 'ReactFiber.js',
          tone: 'violet',
          iconKey: 'boxes',
        },
        {
          id: 'phase',
          numeral: 'ⅲ',
          title: '단계 기반 질문',
          question: ['Render Phase와 Commit Phase는', '어느 코드에서 갈라질까?'],
          description: '지금 보는 코드가 scheduling, render, commit 중 어느 단계인지 판별합니다.',
          entry: 'ReactFiberWorkLoop.js',
          tone: 'cyan',
          iconKey: 'gitBranch',
        },
        {
          id: 'version',
          numeral: 'ⅳ',
          title: '버전 변화 기반 질문',
          question: ['React 19에서 ref as prop은', '어떤 내부 표현 변화로 이어졌을까?'],
          description: '릴리즈 노트와 코드 태그를 함께 보며 과거 설명과 최신 코드를 비교합니다.',
          entry: 'ReactJSXElement.js',
          tone: 'emerald',
          iconKey: 'history',
        },
      ],
      entryPrefix: '추천 출발점',
    },
    questionToEntry: {
      eyebrow: 'question → code entry',
      title: '질문을 코드 입구로 바꾸는 방법',
      intro:
        '좋은 질문은 그대로 코드로 이어지지 않습니다. 중간에 검색 가능한 키워드와 첫 함수를 뽑아내야 합니다.',
      steps: [
        {
          number: '1',
          title: '궁금한 현상을 한 문장으로 쓴다',
          body: '먼저 "무엇이 궁금한가?"를 짧게 적습니다.',
          example: '폼 action이 pending UI와 연결되는 방식',
          tone: 'sky',
        },
        {
          number: '2',
          title: '공개 API가 있는지 찾는다',
          body: '사용자가 직접 호출하는 API가 있다면 그곳이 가장 안정적인 입구입니다.',
          example: 'useState · useTransition · useActionState',
          tone: 'cyan',
        },
        {
          number: '3',
          title: '없다면 핵심 내부 용어를 찾는다',
          body: '공개 API가 뚜렷하지 않다면 기능을 설명하는 내부 용어를 찾습니다.',
          example: 'thenable · lane · updateQueue · FormActionEventPlugin',
          tone: 'indigo',
        },
        {
          number: '4',
          title: '첫 함수 / 첫 파일을 정한다',
          body: '처음부터 끝까지 읽으려 하지 말고 첫 함수 하나를 고릅니다.',
          example: 'dispatchSetState · scheduleUpdateOnFiber · FiberNode',
          tone: 'emerald',
        },
      ],
      exampleTitle: '예시 변환',
      examplePhenomenon: '폼 action이 pending UI와 연결되는 방식',
      exampleKeywords: ['form action', 'submit event', 'pending state'],
      exampleEntry: 'FormActionEventPlugin.js',
      exampleNext: ['startHostTransition', 'ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
      blockLabels: {
        phenomenon: '궁금한 현상',
        keyword: '키워드',
        entry: '첫 입구',
        next: '다음으로 볼 것',
      },
      exampleStepLabel: 'example.transform',
    },
    reactExamples: {
      eyebrow: 'three react examples',
      title: '실제 React 예시 3개',
      intro: '좋은 질문은 곧바로 첫 파일과 첫 함수로 이어집니다.',
      entryLabel: '출발점',
      pathLabel: '따라갈 경로',
      cards: [
        {
          id: 'hook',
          label: 'Hook',
          question: 'useState는 어디서 내부 구현으로 넘어갈까?',
          entry: 'ReactHooks.js',
          path: ['useState', 'resolveDispatcher', 'dispatcher.useState', 'ReactFiberHooks.js'],
          cta: '입구 파일 보기',
          href: '/find-public-api-entry',
          tone: 'blue',
        },
        {
          id: 'update',
          label: 'Update',
          question: '업데이트는 어떻게 root scheduling으로 이어질까?',
          entry: 'scheduleUpdateOnFiber',
          path: [
            'dispatchSetState',
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
          ],
          cta: '업데이트 경로 보기',
          href: '/identify-phase',
          tone: 'cyan',
        },
        {
          id: 'data-structure',
          label: 'Data Structure',
          question: 'Fiber는 정확히 어떤 필드를 갖고 있을까?',
          entry: 'FiberNode',
          path: [
            'React Element',
            'createFiberFromElement',
            'FiberNode',
            'alternate / child / sibling',
          ],
          cta: 'Fiber 구조 보기',
          href: '/classify-values',
          tone: 'violet',
        },
      ],
    },
    converter: {
      eyebrow: 'interactive converter',
      title: '질문 → 코드 입구 변환기',
      intro: '질문을 고르면, 어떤 키워드와 파일에서 시작하면 좋은지 바로 확인해봅니다.',
      listLabel: '질문 선택',
      options: [
        {
          id: 'use-state',
          question: 'useState는 어디서 구현되는가?',
          entry: 'ReactHooks.js',
          path: ['ReactHooks.js', 'resolveDispatcher', 'dispatcher.useState', 'ReactFiberHooks.js'],
          description:
            'public API는 실제 Hook 구현을 직접 들고 있지 않고, 현재 dispatcher로 위임합니다.',
          keywords: ['useState', 'dispatcher', 'ReactFiberHooks'],
          tone: 'blue',
        },
        {
          id: 'suspense-thenable',
          question: 'Promise pending 시 Suspense는 어디서 시작되는가?',
          entry: 'ReactFiberThenable.js',
          path: ['use(Promise)', 'thenable tracking', 'suspend', 'Suspense boundary', 'retry'],
          description:
            'Promise를 읽는 순간 pending 상태를 추적하고, 가까운 Suspense boundary와 연결됩니다.',
          keywords: ['thenable', 'Suspense', 'retry'],
          tone: 'cyan',
        },
        {
          id: 'activity-hidden',
          question: 'Activity hidden 모드는 어디서 처리되는가?',
          entry: 'ReactFiberBeginWork.js',
          path: ['Activity component', 'hidden subtree', 'beginWork', 'effect handling'],
          description:
            'Activity는 subtree를 어떻게 숨기고 유지할지 render 단계에서 판단해야 합니다.',
          keywords: ['Activity', 'hidden', 'beginWork'],
          tone: 'violet',
        },
      ],
      resultLabels: {
        selectedQuestion: '선택한 질문',
        entry: '읽기 시작점',
        path: '따라갈 경로',
        description: '왜 이 지점에서 시작하는가',
        keywords: '키워드',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro:
        '이 페이지를 읽고 끝내지 말고, 내가 궁금한 React 동작 하나를 실제 질문으로 바꿔봅니다.',
      items: [
        '궁금한 React 동작을 한 문장 질문으로 적는다.',
        '그 질문이 API / 자료구조 / 단계 / 버전 중 어디에 속하는지 분류한다.',
        '첫 번째로 열 파일이나 함수명을 하나 정한다.',
        '왜 그 지점이 출발점인지 적는다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '소스코드 독해는 파일 선택보다 질문 설계가 먼저다.',
          sub: '파일을 고르는 일은 질문이 만들어진 다음의 결과다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: '좋은 질문은 읽기 경로를 만든다.',
          sub: '검색어, 함수명, 첫 파일이 자연스럽게 따라 나온다.',
          tone: 'cyan',
        },
        {
          number: '03',
          text: '질문을 코드 입구로 바꾸는 습관이 이후 모든 독해 속도를 높인다.',
          sub: '한 번 만들어둔 변환 패턴은 모든 챕터에서 다시 쓰인다.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: '다음 단계',
      title: 'Public API에서 내부 구현까지',
      description: '질문을 만들었다면, 이제 그 질문의 공개 API 입구부터 찾아야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/find-public-api-entry',
    },
  },
  en: {
    hero: {
      badge: 'React source reading',
      titleLines: ['Reading source code', 'does not start from files,', 'it starts from questions'],
      accentLast: 'it starts from questions',
      description: 'Before deciding what to read, decide what you want to know.',
      supporting:
        'The React repo has many files and concepts spread across packages. Open files without a good question and you collect fragments, not a flow.',
      primaryCta: 'See how to design questions',
      secondaryCta: 'Find code entry points',
      leftPanel: {
        title: 'Scrolling file lists',
        files: [
          { name: 'ReactFiberWorkLoop.js' },
          { name: 'ReactFiberHooks.js' },
          { name: 'ReactChildFiber.js' },
          { name: 'ReactFiberBeginWork.js', muted: true },
          { name: 'ReactFiberCommitWork.js', muted: true },
          { name: '…', muted: true },
        ],
        caption: 'Opening the famous files first blurs where you are supposed to be reading.',
      },
      connectorLabel: 'Reframe',
      connectorSub: 'Turn it into a question',
      rightPanel: {
        title: 'Question-driven search',
        mainQuestion: 'How does setState turn into a render?',
        flow: ['Question', 'Keyword', 'First function', 'First file'],
        caption: 'A question gives you a reading path and a starting point.',
      },
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'When you open the React repo,',
        'how should you start reading',
        'so you do not get lost?',
      ],
      badges: ['Question design', 'Reading direction', 'Finding the entry'],
    },
    fileFirstFails: {
      eyebrow: 'why file-first fails',
      title: 'Why reading files first fails',
      intro:
        'The React repo is not a small example. If you walk in by filename, you easily lose track of which flow the code in front of you belongs to.',
      cards: [
        {
          number: '01',
          title: 'There are too many files',
          body: 'Even opening a famous file gives you no sense of its position in the whole flow, and your reading loses a compass.',
        },
        {
          number: '02',
          title: 'The same concept is spread across packages',
          body: 'Hooks, updates, the scheduler, and DOM work crisscross between different packages.',
        },
        {
          number: '03',
          title: 'You collect fragments, not flow',
          body: 'Without a starting point, function names stick but the reason why each one is called does not.',
        },
      ],
      bannerLines: ['Files are not the answer.', 'A path to the question is the answer.'],
    },
    badGoodCompare: {
      eyebrow: 'reframe the question',
      title: 'Bad questions vs good questions',
      intro:
        'A good reading question is not picking a file directly — it shapes a flow you can follow.',
      badTitle: 'Bad questions',
      badQuestions: [
        { label: 'Let me just read ReactFiberWorkLoop.js.' },
        { label: 'Start by reading every file inside Hooks.' },
        { label: 'Scheduler matters, so open the scheduler folder first.' },
      ],
      badCaption:
        'Filenames look like starting points, but without a question you have no direction.',
      goodTitle: 'Good questions',
      goodQuestions: [
        { label: 'When setState is called, how does it reach root scheduling?' },
        { label: 'Where does useState in the public API hand off to the implementation file?' },
        { label: 'Where does Suspense detect a pending Promise and retry it?' },
      ],
      goodCaption: 'A good question gives you keywords, function names, and a first file at once.',
      connector: 'Reframe',
    },
    readingTypes: {
      eyebrow: 'four reading types',
      title: 'Four types of good reading questions',
      intro:
        'You do not need a perfect question on the first try. Just classifying the type of question makes it far easier to find the first code entry.',
      cards: [
        {
          id: 'api',
          numeral: 'ⅰ',
          title: 'API-based question',
          question: ['Where does useTransition', 'lead internally?'],
          description:
            'Start at the public API the user calls, then drop into dispatchers or the actual implementation files.',
          entry: 'ReactHooks.js',
          tone: 'blue',
          iconKey: 'plug',
        },
        {
          id: 'data-structure',
          numeral: 'ⅱ',
          title: 'Data-structure question',
          question: ['What fields does', 'a Fiber hold?'],
          description:
            'Check the shape of the values React handles internally before tracing behavior.',
          entry: 'ReactFiber.js',
          tone: 'violet',
          iconKey: 'boxes',
        },
        {
          id: 'phase',
          numeral: 'ⅲ',
          title: 'Phase-based question',
          question: ['Where do Render Phase and', 'Commit Phase split in the code?'],
          description:
            'Decide which phase — scheduling, render, or commit — the code in front of you belongs to.',
          entry: 'ReactFiberWorkLoop.js',
          tone: 'cyan',
          iconKey: 'gitBranch',
        },
        {
          id: 'version',
          numeral: 'ⅳ',
          title: 'Version-change question',
          question: ['In React 19, what internal shape', 'did ref as prop change into?'],
          description:
            'Read release notes and code tags together to compare older descriptions to the latest code.',
          entry: 'ReactJSXElement.js',
          tone: 'emerald',
          iconKey: 'history',
        },
      ],
      entryPrefix: 'Suggested entry',
    },
    questionToEntry: {
      eyebrow: 'question → code entry',
      title: 'Turning a question into a code entry',
      intro:
        'A good question does not turn into code on its own. You have to extract a searchable keyword and a first function in between.',
      steps: [
        {
          number: '1',
          title: 'Write the phenomenon as one sentence',
          body: 'First write down what you are curious about in a short line.',
          example: 'How a form action connects to pending UI',
          tone: 'sky',
        },
        {
          number: '2',
          title: 'Look for a public API',
          body: 'If the user calls an API directly, that is the most stable entry point.',
          example: 'useState · useTransition · useActionState',
          tone: 'cyan',
        },
        {
          number: '3',
          title: 'If none, find a core internal term',
          body: 'Without a clear public API, look for the internal term that describes the feature.',
          example: 'thenable · lane · updateQueue · FormActionEventPlugin',
          tone: 'indigo',
        },
        {
          number: '4',
          title: 'Pick the first function / first file',
          body: 'Do not try to read end to end — pick a single first function.',
          example: 'dispatchSetState · scheduleUpdateOnFiber · FiberNode',
          tone: 'emerald',
        },
      ],
      exampleTitle: 'Example transform',
      examplePhenomenon: 'How a form action connects to pending UI',
      exampleKeywords: ['form action', 'submit event', 'pending state'],
      exampleEntry: 'FormActionEventPlugin.js',
      exampleNext: ['startHostTransition', 'ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
      blockLabels: {
        phenomenon: 'Phenomenon',
        keyword: 'Keywords',
        entry: 'First entry',
        next: 'Read next',
      },
      exampleStepLabel: 'example.transform',
    },
    reactExamples: {
      eyebrow: 'three react examples',
      title: 'Three real React examples',
      intro: 'A good question leads directly to the first file and first function.',
      entryLabel: 'Entry',
      pathLabel: 'Path to follow',
      cards: [
        {
          id: 'hook',
          label: 'Hook',
          question: 'Where does useState hand off to the implementation?',
          entry: 'ReactHooks.js',
          path: ['useState', 'resolveDispatcher', 'dispatcher.useState', 'ReactFiberHooks.js'],
          cta: 'Open the entry file',
          href: '/find-public-api-entry',
          tone: 'blue',
        },
        {
          id: 'update',
          label: 'Update',
          question: 'How does an update reach root scheduling?',
          entry: 'scheduleUpdateOnFiber',
          path: [
            'dispatchSetState',
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
          ],
          cta: 'See the update path',
          href: '/identify-phase',
          tone: 'cyan',
        },
        {
          id: 'data-structure',
          label: 'Data Structure',
          question: 'What exact fields does a Fiber hold?',
          entry: 'FiberNode',
          path: [
            'React Element',
            'createFiberFromElement',
            'FiberNode',
            'alternate / child / sibling',
          ],
          cta: 'See the Fiber shape',
          href: '/classify-values',
          tone: 'violet',
        },
      ],
    },
    converter: {
      eyebrow: 'interactive converter',
      title: 'Question → code entry converter',
      intro: 'Pick a question and see which keywords and files are a good starting point.',
      listLabel: 'Choose a question',
      options: [
        {
          id: 'use-state',
          question: 'Where is useState implemented?',
          entry: 'ReactHooks.js',
          path: ['ReactHooks.js', 'resolveDispatcher', 'dispatcher.useState', 'ReactFiberHooks.js'],
          description:
            'The public API does not own the Hook implementation directly — it delegates to the current dispatcher.',
          keywords: ['useState', 'dispatcher', 'ReactFiberHooks'],
          tone: 'blue',
        },
        {
          id: 'suspense-thenable',
          question: 'Where does Suspense start when a Promise is pending?',
          entry: 'ReactFiberThenable.js',
          path: ['use(Promise)', 'thenable tracking', 'suspend', 'Suspense boundary', 'retry'],
          description:
            'The moment a Promise is read, the pending state is tracked and connected to the nearest Suspense boundary.',
          keywords: ['thenable', 'Suspense', 'retry'],
          tone: 'cyan',
        },
        {
          id: 'activity-hidden',
          question: 'Where is Activity hidden mode handled?',
          entry: 'ReactFiberBeginWork.js',
          path: ['Activity component', 'hidden subtree', 'beginWork', 'effect handling'],
          description:
            'Activity has to decide during the render phase how to hide and keep its subtree alive.',
          keywords: ['Activity', 'hidden', 'beginWork'],
          tone: 'violet',
        },
      ],
      resultLabels: {
        selectedQuestion: 'Selected question',
        entry: 'Entry point',
        path: 'Path to follow',
        description: 'Why this is the starting point',
        keywords: 'Keywords',
      },
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro:
        'Do not stop at reading. Take one React behavior you are curious about and turn it into a real question.',
      items: [
        'Write a React behavior you are curious about as a one-sentence question.',
        'Classify the question — API, data structure, phase, or version.',
        'Pick a single first file or function to open.',
        'Write down why that point is the right starting point.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Reading source code starts with designing the question, not picking the file.',
          sub: 'Choosing a file is what happens after a question has been formed.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'A good question shapes the reading path.',
          sub: 'Keywords, function names, and a first file follow naturally.',
          tone: 'cyan',
        },
        {
          number: '03',
          text: 'The habit of turning questions into code entries speeds up every later read.',
          sub: 'A conversion pattern you build once gets reused in every chapter.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: 'Next step',
      title: 'From public APIs to the implementation',
      description: 'Once you have a question, the next thing to find is its public API entry.',
      cta: 'Go to the next page',
      href: '/find-public-api-entry',
    },
  },
};
