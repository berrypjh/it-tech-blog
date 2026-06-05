import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';

export type Tone = 'blue' | 'teal' | 'lavender' | 'cyan' | 'mint' | 'coral' | 'indigo';

export type RoadmapRow = {
  num: string;
  title: string;
  description: string;
  files: string[];
  icon: 'cube' | 'network' | 'code' | 'check' | 'hook' | 'event' | 'gauge' | 'spark';
  tone: Tone;
};

export type DeliverableCard = {
  num: string;
  title: string;
  description: string[];
  icon: 'cube' | 'network' | 'code' | 'check' | 'hook' | 'gauge' | 'flag';
  tone: Tone;
};

export type RoadmapContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    visual: {
      codeFile: string;
      codeLines: string[];
      checkpointLabel: string;
      checkpointSub: string;
      notesTitle: string;
      notesSub: string;
      repoTitle: string;
      repoPackages: { name: string; active?: boolean }[];
      flagLabel: string;
    };
  };
  roadmap: {
    eyebrow: string;
    title: string;
    coreFilesLabel: string;
    rows: RoadmapRow[];
  };
  deliverables: {
    eyebrow: string;
    title: string;
    supporting: string;
    cards: DeliverableCard[];
  };
  finale: FinaleBannerContent;
};

export const roadmapContent: Record<Locale, RoadmapContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 6/6단계',
      title: ['React 소스코드는', '길을 알고 들어가면', '훨씬 빠르게 이해됩니다.'],
      description: [
        'JSX에서 시작해 Fiber, Render, Commit, Hooks,',
        'Scheduler까지 단계적으로 탐구합니다.',
      ],
      visual: {
        codeFile: 'ReactFiberWorkLoop.js',
        codeLines: [
          'function workLoopSync() {',
          '  while (workInProgress !== null) {',
          '    performUnitOfWork(workInProgress);',
          '  }',
          '}',
        ],
        checkpointLabel: 'Checkpoint',
        checkpointSub: 'Render Phase',
        notesTitle: 'Your Notes',
        notesSub: '오늘의 흐름 정리',
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
        flagLabel: 'Start',
      },
    },
    roadmap: {
      eyebrow: '01 · roadmap',
      title: '8단계 학습 로드맵',
      coreFilesLabel: '핵심 파일',
      rows: [
        {
          num: '1',
          title: 'React Element 이해',
          description: 'JSX가 어떤 객체로 변환되는지 이해합니다.',
          files: ['ReactJSXElement.js'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber 구조 이해',
          description: 'FiberNode와 트리 구조를 이해합니다.',
          files: ['ReactFiber.js'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render Phase 읽기',
          description: 'beginWork / completeWork 흐름을 읽습니다.',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit Phase 읽기',
          description: '변경 사항이 실제로 반영되는 과정을 이해합니다.',
          files: ['ReactFiberCommitWork.js'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks 내부 읽기',
          description: 'Hook linked list와 업데이트 흐름을 읽습니다.',
          files: ['ReactFiberHooks.js'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: '이벤트와 업데이트 연결',
          description: '이벤트 → setState → 업데이트 예약 흐름을 이해합니다.',
          files: ['ReactDOM', 'ReactFiberWorkLoop.js'],
          icon: 'event',
          tone: 'blue',
        },
        {
          num: '7',
          title: 'Scheduler와 우선순위',
          description: 'lanes, priority, 스케줄링 로직을 이해합니다.',
          files: ['scheduler', 'ReactFiberLane.js'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '8',
          title: 'Suspense / React 19 변화',
          description: 'Suspense, Actions, use(), ref as prop 등 최신 변화를 이해합니다.',
          files: ['React 19 관련 변경 코드'],
          icon: 'spark',
          tone: 'coral',
        },
      ],
    },
    deliverables: {
      eyebrow: '02 · deliverables',
      title: '단계별 산출물',
      supporting: '학습 후, 내가 만들어야 할 결과물',
      cards: [
        {
          num: '1',
          title: 'Element 단계',
          description: ['JSX가 어떤 객체가', '되는지 설명하기'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber 단계',
          description: ['FiberNode 주요 필드', '요약하기'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render 단계',
          description: ['beginWork / completeWork', '흐름도 그리기'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit 단계',
          description: ['Placement / Update /', 'Deletion 설명하기'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks 단계',
          description: ['Hook linked list', '그림 그리기'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Scheduler 단계',
          description: ['우선순위 흐름', '정리하기'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '7',
          title: '최종 정리',
          description: ['전체 흐름을', '하나의 그림으로!'],
          icon: 'flag',
          tone: 'indigo',
        },
      ],
    },
    finale: {
      progressLabel: '1/15 챕터 완료',
      copyLine1: '준비가 끝났습니다.',
      copyLine2: '이제 실제 React 저장소를 열고,',
      copyLine3: '전체 구조부터 읽어봅니다.',
      primaryCta: '다음: React GitHub 저장소 구조 읽기',
      primaryHref: '/repo-overview',
      secondaryCta: '처음부터 다시 보기',
      secondaryHref: '/why-source',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 6/6',
      title: ['React source becomes', 'much easier to read', 'once you know the route.'],
      description: [
        'From JSX through Fiber, Render, Commit, Hooks',
        'and Scheduler — explored step by step.',
      ],
      visual: {
        codeFile: 'ReactFiberWorkLoop.js',
        codeLines: [
          'function workLoopSync() {',
          '  while (workInProgress !== null) {',
          '    performUnitOfWork(workInProgress);',
          '  }',
          '}',
        ],
        checkpointLabel: 'Checkpoint',
        checkpointSub: 'Render Phase',
        notesTitle: 'Your Notes',
        notesSub: "Today's flow recap",
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
        flagLabel: 'Start',
      },
    },
    roadmap: {
      eyebrow: '01 · roadmap',
      title: '8-step learning roadmap',
      coreFilesLabel: 'Core files',
      rows: [
        {
          num: '1',
          title: 'Understand React Element',
          description: 'What object JSX becomes.',
          files: ['ReactJSXElement.js'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Understand Fiber',
          description: 'FiberNode and the tree structure.',
          files: ['ReactFiber.js'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Read the Render Phase',
          description: 'beginWork / completeWork flow.',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Read the Commit Phase',
          description: 'How changes actually apply.',
          files: ['ReactFiberCommitWork.js'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Read Hooks internals',
          description: 'Hook linked list and update flow.',
          files: ['ReactFiberHooks.js'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Events meet updates',
          description: 'event → setState → schedule flow.',
          files: ['ReactDOM', 'ReactFiberWorkLoop.js'],
          icon: 'event',
          tone: 'blue',
        },
        {
          num: '7',
          title: 'Scheduler & priority',
          description: 'lanes, priority, scheduling logic.',
          files: ['scheduler', 'ReactFiberLane.js'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '8',
          title: 'Suspense / React 19',
          description: 'Suspense, Actions, use(), ref as prop, etc.',
          files: ['React 19 change set'],
          icon: 'spark',
          tone: 'coral',
        },
      ],
    },
    deliverables: {
      eyebrow: '02 · deliverables',
      title: 'Per-stage deliverables',
      supporting: 'What you should be able to produce after learning',
      cards: [
        {
          num: '1',
          title: 'Element stage',
          description: ['Explain what object', 'JSX becomes'],
          icon: 'cube',
          tone: 'blue',
        },
        {
          num: '2',
          title: 'Fiber stage',
          description: ['Summarize the key', 'FiberNode fields'],
          icon: 'network',
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Render stage',
          description: ['Diagram the begin/', 'completeWork flow'],
          icon: 'code',
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Commit stage',
          description: ['Explain Placement /', 'Update / Deletion'],
          icon: 'check',
          tone: 'coral',
        },
        {
          num: '5',
          title: 'Hooks stage',
          description: ['Sketch the hook', 'linked list'],
          icon: 'hook',
          tone: 'cyan',
        },
        {
          num: '6',
          title: 'Scheduler stage',
          description: ['Summarize the', 'priority flow'],
          icon: 'gauge',
          tone: 'mint',
        },
        {
          num: '7',
          title: 'Final wrap-up',
          description: ['The whole flow', 'in one diagram!'],
          icon: 'flag',
          tone: 'indigo',
        },
      ],
    },
    finale: {
      progressLabel: 'Chapter 1 of 15 complete',
      copyLine1: 'You are ready.',
      copyLine2: 'Open the real React repository',
      copyLine3: 'and start with the overall structure.',
      primaryCta: 'Next: Read the React GitHub repo',
      primaryHref: '/repo-overview',
      secondaryCta: 'Restart from the beginning',
      secondaryHref: '/why-source',
    },
  },
};
