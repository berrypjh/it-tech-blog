import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { PackageKey } from './packageTone';

export type { PackageKey, ToneKey };

export type PackageIconKey = 'atom' | 'monitor' | 'gitBranch' | 'timer' | 'puzzle';

export type CorePackage = {
  key: PackageKey;
  name: string;
  role: string;
  description: string;
  files: string[];
  readingPoint: string;
  iconKey: PackageIconKey;
  /** 시각적 강조가 필요한 패키지(reconciler) */
  spotlight?: boolean;
};

export type ProblemCard = {
  number: string;
  title: string;
  body: string;
  packageHint: PackageKey;
};

export type PickRow = {
  question: string;
  pickedPackage: PackageKey;
  file: string;
  reason: string;
};

export type CrossPackageStep = {
  packageKey: PackageKey | 'jsx';
  label: string;
  hint?: string;
};

export type CrossPackageExample = {
  id: 'form-actions' | 'use';
  title: string;
  startCode: string;
  steps: CrossPackageStep[];
  body: string;
  readingPoint: string;
  accent: ToneKey;
};

export type PracticeCard = {
  id: 'use-state' | 'form-action' | 'jsx-element';
  topic: string;
  pairs: { file: string; packageKey: PackageKey }[];
  readingPoint: string;
};

export type NavigatorOption = {
  id: 'dom-event' | 'fiber-update' | 'jsx-element';
  question: string;
  pickedPackage: PackageKey;
  files: string[];
  nextPackage: PackageKey;
  readingPoint: string;
  keywords: string[];
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type FollowPackageBoundaryContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftFiles: string[];
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    rightPanelTitle: string;
    rightMap: { name: PackageKey; role: string }[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** 강조 키 → react, reconciler 인라인 chip 토큰 */
    emphasize: { reactWord: string; reconcilerWord: string };
    badges: { label: string; packageKey?: PackageKey }[];
  };
  whyPackageFirst: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProblemCard[];
    bannerLines: [string, string];
  };
  coreMap: {
    eyebrow: string;
    title: string;
    intro: string;
    packages: CorePackage[];
    filesLabel: string;
    readingPointLabel: string;
  };
  pickFirst: {
    eyebrow: string;
    title: string;
    intro: string;
    rows: PickRow[];
    questionLabel: string;
    pickedLabel: string;
    fileLabel: string;
    reasonLabel: string;
  };
  crossPackage: {
    eyebrow: string;
    title: string;
    intro: string;
    examples: CrossPackageExample[];
    startLabel: string;
    flowLabel: string;
    bodyLabel: string;
    readingPointLabel: string;
  };
  practice: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: PracticeCard[];
    readingPointLabel: string;
  };
  navigator: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    options: NavigatorOption[];
    labels: {
      question: string;
      firstPackage: string;
      files: string;
      nextPackage: string;
      readingPoint: string;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const followPackageBoundaryContent: Record<Locale, FollowPackageBoundaryContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 3/10단계',
      titleLines: ['패키지 경계를 먼저 읽어야', '길을 잃지 않는다'],
      accentTail: '길을 잃지 않는다',
      description: '파일명보다 먼저, 이 코드가 React의 어느 레이어에 속하는지 봅니다.',
      supporting:
        'React 저장소는 하나의 거대한 파일 묶음이 아닙니다. react, react-dom, react-reconciler, scheduler, shared 같은 패키지들이 서로 다른 책임을 나누어 갖고 있습니다.',
      primaryCta: '패키지 지도 보기',
      secondaryCta: '질문별 입구 찾기',
      visualTitle: '파일은 점이고, 패키지는 지도입니다',
      leftPanelTitle: '파일명만 보고 들어가기',
      leftFiles: [
        'ReactHooks.js',
        'ReactFiberHooks.js',
        'ReactFiberWorkLoop.js',
        'ReactDOMEventListener.js',
        'Scheduler.js',
      ],
      leftCaption: '파일명만 보면 지금 보는 코드가 어느 레이어인지 놓치기 쉽습니다.',
      connectorLabel: 'Layer Map',
      connectorSub: '패키지로 재분류',
      rightPanelTitle: '패키지 경계로 읽기',
      rightMap: [
        { name: 'react', role: 'public API' },
        { name: 'react-dom', role: 'DOM renderer' },
        { name: 'react-reconciler', role: 'Fiber / update / render' },
        { name: 'scheduler', role: 'task scheduling' },
        { name: 'shared', role: '공통 상수와 유틸' },
      ],
      rightCaption: '패키지를 먼저 보면 파일이 전체 구조 안에서 어디에 있는지 보입니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: [
        '같은 React 코드인데',
        '어떤 파일은 {reactWord}에 있고,',
        '어떤 파일은 {reconcilerWord}에 있는 이유는 무엇일까?',
      ],
      emphasize: { reactWord: 'react', reconcilerWord: 'reconciler' },
      badges: [
        { label: 'Package Boundary' },
        { label: 'Layer' },
        { label: 'react', packageKey: 'react' },
        { label: 'react-reconciler', packageKey: 'react-reconciler' },
      ],
    },
    whyPackageFirst: {
      eyebrow: 'why package first',
      title: '왜 파일명보다 패키지가 먼저인가?',
      intro:
        'React 내부 코드는 기능별로 한 파일에 모여 있지 않습니다. public API, 렌더링 핵심, DOM renderer, scheduling은 서로 다른 패키지로 나뉘어 있습니다.',
      cards: [
        {
          number: '01',
          title: 'ReactHooks.js만 보면 구현이 안 보인다',
          body: '이 파일은 Hook의 public API 입구에 가깝습니다. 실제 Hook 자료구조와 update queue는 reconciler 쪽에서 이어집니다.',
          packageHint: 'react',
        },
        {
          number: '02',
          title: 'ReactFiberHooks.js는 reconciler 내부다',
          body: 'Hook이 실제로 Fiber와 연결되는 지점은 react-reconciler 패키지 안에서 확인해야 합니다.',
          packageHint: 'react-reconciler',
        },
        {
          number: '03',
          title: 'DOM 반영은 react-dom 쪽과 연결된다',
          body: 'Fiber에서 계산된 변경 사항은 브라우저 환경에 반영될 때 renderer 패키지와 연결됩니다.',
          packageHint: 'react-dom',
        },
      ],
      bannerLines: ['파일은 점이고,', '패키지는 지도다.'],
    },
    coreMap: {
      eyebrow: 'core package map',
      title: 'React 저장소의 핵심 패키지 지도',
      intro:
        '패키지를 먼저 구분하면 지금 읽는 코드가 React의 어느 레이어에 있는지 빠르게 판단할 수 있습니다.',
      filesLabel: '대표 파일',
      readingPointLabel: '읽기 포인트',
      packages: [
        {
          key: 'react',
          name: 'react',
          role: '사용자-facing API',
          description:
            'useState, use, createElement처럼 사용자가 직접 import하고 호출하는 API 입구가 모여 있습니다.',
          files: ['packages/react/src/ReactHooks.js', 'packages/react/src/jsx/ReactJSXElement.js'],
          readingPoint: '이 파일들은 실제 구현 전체라기보다 내부 구현으로 들어가는 입구입니다.',
          iconKey: 'atom',
        },
        {
          key: 'react-dom',
          name: 'react-dom',
          role: '브라우저 DOM renderer',
          description:
            'React의 결과를 브라우저 DOM 환경에 연결하는 renderer입니다. DOM client, event system, hydration, form action 처리와 이어집니다.',
          files: [
            'packages/react-dom/src/client/ReactDOMRoot.js',
            'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
            'packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
          ],
          readingPoint:
            '브라우저 환경에서 실제 이벤트와 DOM 반영이 어떻게 연결되는지 볼 수 있습니다.',
          iconKey: 'monitor',
        },
        {
          key: 'react-reconciler',
          name: 'react-reconciler',
          role: 'Fiber / update / render 핵심',
          description:
            'React 내부 렌더링의 중심입니다. Fiber 생성, update queue, render phase, commit phase, lanes 흐름이 이곳에 집중됩니다.',
          files: [
            'packages/react-reconciler/src/ReactFiberHooks.js',
            'packages/react-reconciler/src/ReactFiberWorkLoop.js',
            'packages/react-reconciler/src/ReactFiberBeginWork.js',
            'packages/react-reconciler/src/ReactFiberCommitWork.js',
          ],
          readingPoint: 'React 내부 구조를 깊게 읽을 때 가장 자주 들어가게 되는 핵심 패키지입니다.',
          iconKey: 'gitBranch',
          spotlight: true,
        },
        {
          key: 'scheduler',
          name: 'scheduler',
          role: 'host task 조율',
          description:
            '브라우저 또는 실행 환경에서 작업을 언제 실행할지 조율하는 별도 패키지입니다.',
          files: ['packages/scheduler/src/forks/Scheduler.js'],
          readingPoint:
            'React의 lane과 완전히 같은 개념은 아니며, host task 실행 시점 조율에 가깝습니다.',
          iconKey: 'timer',
        },
        {
          key: 'shared',
          name: 'shared',
          role: '공통 상수 / 심벌 / 유틸',
          description: '여러 패키지가 함께 사용하는 공통 타입, 심벌, 상수, 유틸이 모여 있습니다.',
          files: ['packages/shared/ReactSymbols.js', 'packages/shared/ReactFeatureFlags.js'],
          readingPoint: '특정 기능의 주 구현은 아니지만 여러 패키지에서 참조되는 공통 기반입니다.',
          iconKey: 'puzzle',
        },
      ],
    },
    pickFirst: {
      eyebrow: 'pick first package',
      title: '질문별 첫 패키지 고르기',
      intro:
        '질문을 만들었다면, 다음은 첫 파일보다 첫 패키지를 고르는 것입니다. 패키지를 먼저 정하면 탐색 범위가 크게 줄어듭니다.',
      questionLabel: '질문',
      pickedLabel: '먼저 볼 패키지',
      fileLabel: '추천 파일',
      reasonLabel: '이유',
      rows: [
        {
          question: 'useState의 public 입구는 어디인가?',
          pickedPackage: 'react',
          file: 'ReactHooks.js',
          reason: '사용자가 호출하는 Hook API 입구는 react 패키지에 있습니다.',
        },
        {
          question: '업데이트 scheduling 흐름은 어디서 이어지는가?',
          pickedPackage: 'react-reconciler',
          file: 'ReactFiberWorkLoop.js',
          reason: 'Fiber root update, lane, work loop 흐름은 reconciler에서 읽어야 합니다.',
        },
        {
          question: 'DOM event 연결은 어디서 시작되는가?',
          pickedPackage: 'react-dom-bindings',
          file: 'ReactDOMEventListener.js',
          reason: '브라우저 이벤트를 React 이벤트 시스템으로 연결하는 지점입니다.',
        },
        {
          question: 'task queue는 어디서 조율되는가?',
          pickedPackage: 'scheduler',
          file: 'Scheduler.js',
          reason: 'host 환경에서 task를 언제 실행할지 조율하는 패키지입니다.',
        },
      ],
    },
    crossPackage: {
      eyebrow: 'cross-package features',
      title: '하나의 기능이 여러 패키지를 넘나드는 사례',
      intro:
        'React 기능 하나는 보통 한 패키지 안에서 끝나지 않습니다. public API, renderer, reconciler가 서로 연결되면서 전체 동작이 완성됩니다.',
      startLabel: '시작',
      flowLabel: '패키지 흐름',
      bodyLabel: '설명',
      readingPointLabel: '읽기 포인트',
      examples: [
        {
          id: 'form-actions',
          title: 'Form Actions',
          startCode: '<form action={fn}>',
          steps: [
            { packageKey: 'jsx', label: '<form action={fn}>', hint: '사용자 JSX' },
            {
              packageKey: 'react-dom-bindings',
              label: 'FormActionEventPlugin',
              hint: 'DOM 이벤트 plugin',
            },
            {
              packageKey: 'react-reconciler',
              label: 'startHostTransition',
              hint: '업데이트 흐름',
            },
          ],
          body: '폼 제출 이벤트는 DOM bindings 쪽에서 시작되지만, pending UI와 상태 업데이트 흐름은 reconciler와 연결됩니다.',
          readingPoint: 'DOM 이벤트 처리와 React update 흐름이 만나는 경계를 찾습니다.',
          accent: 'cyan',
        },
        {
          id: 'use',
          title: 'use()',
          startCode: 'use(thenable)',
          steps: [
            { packageKey: 'react', label: 'public API', hint: 'use(thenable)' },
            {
              packageKey: 'react-reconciler',
              label: 'thenable / Suspense 처리',
              hint: '내부 구현',
            },
          ],
          body: 'use()는 public API로 시작하지만, Promise pending 상태와 Suspense 처리 흐름은 내부 구현으로 내려가야 보입니다.',
          readingPoint: 'public API에서 Suspense 처리 흐름으로 내려가는 지점을 찾습니다.',
          accent: 'blue',
        },
      ],
    },
    practice: {
      eyebrow: 'boundary practice',
      title: '패키지 경계 표시 연습',
      intro:
        '파일을 볼 때마다 "이 파일은 어느 패키지에 있는가?"를 표시하면 코드 흐름이 훨씬 선명해집니다.',
      readingPointLabel: '읽기 포인트',
      cards: [
        {
          id: 'use-state',
          topic: 'useState',
          pairs: [
            { file: 'ReactHooks.js', packageKey: 'react' },
            { file: 'ReactFiberHooks.js', packageKey: 'react-reconciler' },
          ],
          readingPoint:
            'public API layer에서 reconciler implementation layer로 넘어가는 순간을 표시합니다.',
        },
        {
          id: 'form-action',
          topic: 'FormActionEventPlugin.js',
          pairs: [{ file: 'FormActionEventPlugin.js', packageKey: 'react-dom-bindings' }],
          readingPoint: '브라우저 form submit 이벤트가 React update 흐름과 만나는 지점입니다.',
        },
        {
          id: 'jsx-element',
          topic: 'ReactJSXElement.js',
          pairs: [{ file: 'ReactJSXElement.js', packageKey: 'react' }],
          readingPoint: 'JSX 결과인 React Element 객체가 만들어지는 사용자-facing layer입니다.',
        },
      ],
    },
    navigator: {
      eyebrow: 'package navigator',
      title: 'Package Navigator',
      intro: '질문을 고르면 먼저 볼 패키지와 추천 파일을 확인할 수 있습니다.',
      listLabel: '질문 선택',
      labels: {
        question: '선택한 질문',
        firstPackage: '먼저 볼 패키지',
        files: '추천 파일',
        nextPackage: '다음으로 이어질 패키지',
        readingPoint: '읽기 포인트',
        keywords: '키워드',
      },
      options: [
        {
          id: 'dom-event',
          question: 'DOM 이벤트가 어디서 plugin으로 처리되지?',
          pickedPackage: 'react-dom-bindings',
          files: ['ReactDOMEventListener.js', 'FormActionEventPlugin.js'],
          nextPackage: 'react-reconciler',
          readingPoint: 'DOM 이벤트가 React update 흐름으로 넘어가는 경계를 찾습니다.',
          keywords: ['event system', 'plugin', 'form action', 'dispatch'],
        },
        {
          id: 'fiber-update',
          question: 'Fiber update는 어디서 scheduling으로 간다?',
          pickedPackage: 'react-reconciler',
          files: ['ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          nextPackage: 'scheduler',
          readingPoint:
            'Fiber root에 update가 표시되고 work loop 또는 root scheduler로 이어지는 지점을 봅니다.',
          keywords: ['scheduleUpdateOnFiber', 'markRootUpdated', 'lanes', 'root scheduling'],
        },
        {
          id: 'jsx-element',
          question: 'JSX Element 객체는 어디서 만들어지지?',
          pickedPackage: 'react',
          files: ['ReactJSXElement.js'],
          nextPackage: 'react-reconciler',
          readingPoint: 'Element 객체가 만들어진 뒤 Fiber 생성 흐름으로 넘어가는 경계를 찾습니다.',
          keywords: ['JSX', 'ReactElement', 'createElement', 'createFiberFromElement'],
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro:
        '이 페이지를 읽고 끝내지 말고, 내가 궁금한 React 기능 하나를 패키지 경계 관점으로 표시해봅니다.',
      items: [
        '현재 궁금한 React 기능 하나를 고른다.',
        '첫 패키지를 예측한다.',
        '실제 파일 경로와 비교한다.',
        '기능이 어느 순간 다른 패키지로 넘어가는지 찾는다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '파일보다 패키지 경계가 먼저다.',
          sub: '같은 파일명도 어느 패키지에 있는지에 따라 책임이 달라진다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'React 소스 독해는 레이어 이동을 추적하는 일이다.',
          sub: 'react → react-dom → react-reconciler → scheduler 사이의 이동을 본다.',
          tone: 'violet',
        },
        {
          number: '03',
          text: '기능이 여러 패키지를 넘나들 때 흐름이 더 선명해진다.',
          sub: '한 패키지 안에서 끝나는 기능은 거의 없다.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 단계',
      title: '지금 보고 있는 값이 무엇인지 먼저 분류한다',
      description: '패키지 위치를 파악했다면, 이제 지금 보고 있는 값이 무엇인지 분류해야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/classify-values',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 3/10',
      titleLines: ['Read package boundaries first', "so you don't get lost"],
      accentTail: "so you don't get lost",
      description: 'Before the filename, ask which layer of React this code belongs to.',
      supporting:
        'The React repo is not one giant pile of files. Packages like react, react-dom, react-reconciler, scheduler, and shared each own a different responsibility.',
      primaryCta: 'See the package map',
      secondaryCta: 'Find entries by question',
      visualTitle: 'A file is a dot. A package is a map.',
      leftPanelTitle: 'Walking in by filename',
      leftFiles: [
        'ReactHooks.js',
        'ReactFiberHooks.js',
        'ReactFiberWorkLoop.js',
        'ReactDOMEventListener.js',
        'Scheduler.js',
      ],
      leftCaption: "Filenames alone make it easy to lose track of which layer you're looking at.",
      connectorLabel: 'Layer Map',
      connectorSub: 'Reclassify by package',
      rightPanelTitle: 'Reading by package boundary',
      rightMap: [
        { name: 'react', role: 'public API' },
        { name: 'react-dom', role: 'DOM renderer' },
        { name: 'react-reconciler', role: 'Fiber / update / render' },
        { name: 'scheduler', role: 'task scheduling' },
        { name: 'shared', role: 'shared constants & utils' },
      ],
      rightCaption: 'Look at the package first and the file finds its place in the whole.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        "It's the same React code,",
        'but why does some live in {reactWord}',
        'while other code lives in {reconcilerWord}?',
      ],
      emphasize: { reactWord: 'react', reconcilerWord: 'reconciler' },
      badges: [
        { label: 'Package Boundary' },
        { label: 'Layer' },
        { label: 'react', packageKey: 'react' },
        { label: 'react-reconciler', packageKey: 'react-reconciler' },
      ],
    },
    whyPackageFirst: {
      eyebrow: 'why package first',
      title: 'Why does the package come before the filename?',
      intro:
        "React's internals are not grouped one feature per file. Public APIs, the rendering core, the DOM renderer, and scheduling each live in their own package.",
      cards: [
        {
          number: '01',
          title: "Reading ReactHooks.js alone won't show the implementation",
          body: 'This file is closer to the public Hook API entry. The real Hook data structures and update queue continue inside the reconciler.',
          packageHint: 'react',
        },
        {
          number: '02',
          title: 'ReactFiberHooks.js sits inside the reconciler',
          body: 'The point where a Hook actually connects to a Fiber must be read inside the react-reconciler package.',
          packageHint: 'react-reconciler',
        },
        {
          number: '03',
          title: 'DOM commits land through the react-dom side',
          body: 'Changes computed inside Fiber are reflected to the browser through the renderer package.',
          packageHint: 'react-dom',
        },
      ],
      bannerLines: ['A file is a dot.', 'A package is a map.'],
    },
    coreMap: {
      eyebrow: 'core package map',
      title: 'The core package map of the React repo',
      intro:
        'Identify the package first and you can quickly judge which layer of React the code in front of you belongs to.',
      filesLabel: 'Key files',
      readingPointLabel: 'Reading point',
      packages: [
        {
          key: 'react',
          name: 'react',
          role: 'user-facing API',
          description:
            'Holds the API entries you import and call directly — useState, use, createElement, and friends.',
          files: ['packages/react/src/ReactHooks.js', 'packages/react/src/jsx/ReactJSXElement.js'],
          readingPoint:
            'These files are entries into the implementation rather than the implementation itself.',
          iconKey: 'atom',
        },
        {
          key: 'react-dom',
          name: 'react-dom',
          role: 'browser DOM renderer',
          description:
            "The renderer that connects React's output to the browser DOM — DOM client, event system, hydration, form actions all live here.",
          files: [
            'packages/react-dom/src/client/ReactDOMRoot.js',
            'packages/react-dom-bindings/src/events/ReactDOMEventListener.js',
            'packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
          ],
          readingPoint: 'See how real events and DOM commits hook into the browser environment.',
          iconKey: 'monitor',
        },
        {
          key: 'react-reconciler',
          name: 'react-reconciler',
          role: 'Fiber / update / render core',
          description:
            "React's render center. Fiber construction, update queue, render phase, commit phase, lanes — it all concentrates here.",
          files: [
            'packages/react-reconciler/src/ReactFiberHooks.js',
            'packages/react-reconciler/src/ReactFiberWorkLoop.js',
            'packages/react-reconciler/src/ReactFiberBeginWork.js',
            'packages/react-reconciler/src/ReactFiberCommitWork.js',
          ],
          readingPoint:
            "The core package you'll enter the most when reading React internals deeply.",
          iconKey: 'gitBranch',
          spotlight: true,
        },
        {
          key: 'scheduler',
          name: 'scheduler',
          role: 'host task coordination',
          description:
            'A separate package that coordinates when work runs in the browser or host environment.',
          files: ['packages/scheduler/src/forks/Scheduler.js'],
          readingPoint:
            "Not the same as React lanes — it's about coordinating when host tasks run.",
          iconKey: 'timer',
        },
        {
          key: 'shared',
          name: 'shared',
          role: 'shared constants / symbols / utils',
          description: 'Common types, symbols, constants, and utilities used by many packages.',
          files: ['packages/shared/ReactSymbols.js', 'packages/shared/ReactFeatureFlags.js'],
          readingPoint:
            "Not where any single feature lives — it's the common ground that many packages reference.",
          iconKey: 'puzzle',
        },
      ],
    },
    pickFirst: {
      eyebrow: 'pick first package',
      title: 'Pick the first package by question',
      intro:
        'Once you have a question, the next step is the first package — not the first file. Pinning the package shrinks the search space dramatically.',
      questionLabel: 'Question',
      pickedLabel: 'First package',
      fileLabel: 'Suggested file',
      reasonLabel: 'Reason',
      rows: [
        {
          question: "Where is useState's public entry?",
          pickedPackage: 'react',
          file: 'ReactHooks.js',
          reason: 'The Hook API the user calls lives in the react package.',
        },
        {
          question: 'Where does the update scheduling flow continue?',
          pickedPackage: 'react-reconciler',
          file: 'ReactFiberWorkLoop.js',
          reason: 'Fiber root update, lanes, and the work loop must be read in the reconciler.',
        },
        {
          question: 'Where does the DOM event connection start?',
          pickedPackage: 'react-dom-bindings',
          file: 'ReactDOMEventListener.js',
          reason: "The bridge that hooks browser events into React's event system.",
        },
        {
          question: 'Where is the task queue coordinated?',
          pickedPackage: 'scheduler',
          file: 'Scheduler.js',
          reason: 'The package that decides when host tasks run.',
        },
      ],
    },
    crossPackage: {
      eyebrow: 'cross-package features',
      title: 'Features that cross multiple packages',
      intro:
        'A single React feature rarely ends inside one package. Public API, renderer, and reconciler connect to complete the whole behavior.',
      startLabel: 'Starts at',
      flowLabel: 'Package flow',
      bodyLabel: 'Body',
      readingPointLabel: 'Reading point',
      examples: [
        {
          id: 'form-actions',
          title: 'Form Actions',
          startCode: '<form action={fn}>',
          steps: [
            { packageKey: 'jsx', label: '<form action={fn}>', hint: 'user JSX' },
            {
              packageKey: 'react-dom-bindings',
              label: 'FormActionEventPlugin',
              hint: 'DOM event plugin',
            },
            {
              packageKey: 'react-reconciler',
              label: 'startHostTransition',
              hint: 'update flow',
            },
          ],
          body: 'The form submit event starts inside DOM bindings, but pending UI and state updates connect to the reconciler.',
          readingPoint: 'Find the boundary where DOM event handling meets the React update flow.',
          accent: 'cyan',
        },
        {
          id: 'use',
          title: 'use()',
          startCode: 'use(thenable)',
          steps: [
            { packageKey: 'react', label: 'public API', hint: 'use(thenable)' },
            {
              packageKey: 'react-reconciler',
              label: 'thenable / Suspense handling',
              hint: 'internal implementation',
            },
          ],
          body: 'use() begins in the public API, but pending Promise tracking and Suspense wiring only become visible inside the implementation.',
          readingPoint: 'Find the point where the public API descends into the Suspense flow.',
          accent: 'blue',
        },
      ],
    },
    practice: {
      eyebrow: 'boundary practice',
      title: 'Practice marking package boundaries',
      intro:
        'Every time you open a file, write "which package?" next to it. The code flow becomes far sharper.',
      readingPointLabel: 'Reading point',
      cards: [
        {
          id: 'use-state',
          topic: 'useState',
          pairs: [
            { file: 'ReactHooks.js', packageKey: 'react' },
            { file: 'ReactFiberHooks.js', packageKey: 'react-reconciler' },
          ],
          readingPoint:
            'Mark the moment you cross from the public API layer to the reconciler implementation layer.',
        },
        {
          id: 'form-action',
          topic: 'FormActionEventPlugin.js',
          pairs: [{ file: 'FormActionEventPlugin.js', packageKey: 'react-dom-bindings' }],
          readingPoint: 'Where the browser form submit event meets the React update flow.',
        },
        {
          id: 'jsx-element',
          topic: 'ReactJSXElement.js',
          pairs: [{ file: 'ReactJSXElement.js', packageKey: 'react' }],
          readingPoint:
            'The user-facing layer where the React Element object — the result of JSX — is constructed.',
        },
      ],
    },
    navigator: {
      eyebrow: 'package navigator',
      title: 'Package Navigator',
      intro: 'Pick a question to see which package to open first and which files to read.',
      listLabel: 'Choose a question',
      labels: {
        question: 'Selected question',
        firstPackage: 'First package',
        files: 'Files to read',
        nextPackage: 'Next package',
        readingPoint: 'Reading point',
        keywords: 'Keywords',
      },
      options: [
        {
          id: 'dom-event',
          question: 'Where does a DOM event get handled by a plugin?',
          pickedPackage: 'react-dom-bindings',
          files: ['ReactDOMEventListener.js', 'FormActionEventPlugin.js'],
          nextPackage: 'react-reconciler',
          readingPoint: 'Find the boundary where the DOM event hands off to the React update flow.',
          keywords: ['event system', 'plugin', 'form action', 'dispatch'],
        },
        {
          id: 'fiber-update',
          question: 'Where does a Fiber update reach scheduling?',
          pickedPackage: 'react-reconciler',
          files: ['ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          nextPackage: 'scheduler',
          readingPoint:
            'See where an update gets marked on the Fiber root and continues to the work loop or root scheduler.',
          keywords: ['scheduleUpdateOnFiber', 'markRootUpdated', 'lanes', 'root scheduling'],
        },
        {
          id: 'jsx-element',
          question: 'Where is the JSX Element object created?',
          pickedPackage: 'react',
          files: ['ReactJSXElement.js'],
          nextPackage: 'react-reconciler',
          readingPoint:
            'Find the boundary where the Element object hands off to the Fiber-creation flow.',
          keywords: ['JSX', 'ReactElement', 'createElement', 'createFiberFromElement'],
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro:
        'Do not stop at reading. Take a React feature you are curious about and trace it as package boundaries.',
      items: [
        'Pick a React feature you are curious about.',
        'Predict the first package.',
        'Compare against the actual file path.',
        'Find the moment the feature crosses into another package.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'The package boundary comes before the filename.',
          sub: 'A filename means different things depending on the package it lives in.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Reading React source is tracking layer movement.',
          sub: 'Watch the moves between react → react-dom → react-reconciler → scheduler.',
          tone: 'violet',
        },
        {
          number: '03',
          text: 'The flow gets sharper when a feature crosses packages.',
          sub: 'Almost no feature ends inside a single package.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Next step',
      title: 'Classify the value you are looking at first',
      description:
        'Once you know the package, the next thing to do is classify the value in front of you.',
      cta: 'Go to the next page',
      href: '/classify-values',
    },
  },
};
