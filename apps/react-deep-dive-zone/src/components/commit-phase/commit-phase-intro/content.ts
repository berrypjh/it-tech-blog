import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type { CommitToneKey };

export type PreviousLeftoverIcon = 'cube' | 'refresh' | 'minus' | 'gitMerge';

export type PreviousLeftover = {
  label: string;
  description: string;
  iconName: PreviousLeftoverIcon;
  tone: CommitToneKey;
};

export type ComparisonRow = {
  label: string;
  render: string | string[];
  commit: string | string[];
  emphasis?: boolean;
};

export type WorkItemIcon = 'plusSquare' | 'pencil' | 'trash' | 'link' | 'monitor' | 'zap';

export type WorkItem = {
  title: string;
  subtitle: string;
  description: string;
  iconName: WorkItemIcon;
  tone: CommitToneKey;
};

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
  tone: CommitToneKey;
  isMutation?: boolean;
};

export type FlagRow = {
  name: string;
  bitMask: string;
  meaning: string;
  tone: CommitToneKey;
};

export type FlowStep = {
  title: string;
  description: string;
  tone: CommitToneKey;
};

export type CommitPhaseIntroContent = {
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    description: string;
    insight: string;
    diagram: {
      eyebrow: string;
      renderCard: {
        title: string;
        items: string[];
      };
      commitCard: {
        title: string;
        items: string[];
      };
    };
  };
  previous: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftCard: {
      title: string;
      items: PreviousLeftover[];
      footer: string;
    };
    rightCard: {
      question: string;
      answer: string;
    };
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { label: string; render: string; commit: string };
    rows: ComparisonRow[];
  };
  work: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    items: WorkItem[];
  };
  map: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    mutationBadge: string;
    steps: TimelineStep[];
  };
  flags: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    relatedFilesTitle: string;
    relatedFiles: { name: string; description: string }[];
    learningTitle: string;
    learningItems: string[];
    flagTableTitle: string;
    flagRows: FlagRow[];
    bottomNote: string;
  };
  summary: {
    number: string;
    eyebrow: string;
    title: string;
    mainSentence: { line1: string; line2: string };
    description: string;
    flowTitle: string;
    flow: FlowStep[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    explanation: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const previousLeftoversKo: PreviousLeftover[] = [
  {
    label: 'Placement',
    description: '새 노드 삽입 표시',
    iconName: 'cube',
    tone: 'teal',
  },
  {
    label: 'Update',
    description: '속성 / 텍스트 갱신 표시',
    iconName: 'refresh',
    tone: 'sky',
  },
  {
    label: 'ChildDeletion',
    description: '자식 노드 제거 표시',
    iconName: 'minus',
    tone: 'rose',
  },
  {
    label: 'finishedWork',
    description: '완성된 Fiber 트리',
    iconName: 'gitMerge',
    tone: 'violet',
  },
];

const previousLeftoversEn: PreviousLeftover[] = [
  {
    label: 'Placement',
    description: 'Mark new nodes to insert',
    iconName: 'cube',
    tone: 'teal',
  },
  {
    label: 'Update',
    description: 'Mark props / text updates',
    iconName: 'refresh',
    tone: 'sky',
  },
  {
    label: 'ChildDeletion',
    description: 'Mark child nodes to remove',
    iconName: 'minus',
    tone: 'rose',
  },
  {
    label: 'finishedWork',
    description: 'The completed Fiber tree',
    iconName: 'gitMerge',
    tone: 'violet',
  },
];

const workItemsKo: WorkItem[] = [
  {
    title: 'DOM 삽입',
    subtitle: 'Placement',
    description: '새로운 DOM 노드를 트리에 삽입합니다.',
    iconName: 'plusSquare',
    tone: 'teal',
  },
  {
    title: 'DOM 수정',
    subtitle: 'Update',
    description: '속성 / 스타일 / 텍스트 등의 변경을 반영합니다.',
    iconName: 'pencil',
    tone: 'sky',
  },
  {
    title: 'DOM 제거',
    subtitle: 'Deletion',
    description: '필요 없어진 DOM 노드를 트리에서 제거합니다.',
    iconName: 'trash',
    tone: 'rose',
  },
  {
    title: 'ref 분리 / 재연결',
    subtitle: 'detach / attach',
    description: '이전 ref 해제 후 새로운 ref 연결을 처리합니다.',
    iconName: 'link',
    tone: 'violet',
  },
  {
    title: 'layout effect 실행',
    subtitle: 'useLayoutEffect',
    description: 'DOM 갱신 직후, 화면이 그려지기 전에 동기적으로 실행됩니다.',
    iconName: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'passive effect 후속 처리',
    subtitle: 'useEffect',
    description: '화면이 그려진 뒤, 비동기로 실행됩니다.',
    iconName: 'zap',
    tone: 'orange',
  },
];

const workItemsEn: WorkItem[] = [
  {
    title: 'DOM insert',
    subtitle: 'Placement',
    description: 'Insert new DOM nodes into the tree.',
    iconName: 'plusSquare',
    tone: 'teal',
  },
  {
    title: 'DOM update',
    subtitle: 'Update',
    description: 'Apply prop / style / text changes to existing nodes.',
    iconName: 'pencil',
    tone: 'sky',
  },
  {
    title: 'DOM remove',
    subtitle: 'Deletion',
    description: 'Remove DOM nodes that are no longer needed.',
    iconName: 'trash',
    tone: 'rose',
  },
  {
    title: 'ref detach / attach',
    subtitle: 'detach / attach',
    description: 'Release the old ref and connect the new one.',
    iconName: 'link',
    tone: 'violet',
  },
  {
    title: 'Run layout effects',
    subtitle: 'useLayoutEffect',
    description: 'Runs synchronously right after DOM updates, before paint.',
    iconName: 'monitor',
    tone: 'cyan',
  },
  {
    title: 'Process passive effects',
    subtitle: 'useEffect',
    description: 'Runs asynchronously after the browser paints.',
    iconName: 'zap',
    tone: 'orange',
  },
];

const timelineStepsKo: TimelineStep[] = [
  {
    number: '1',
    title: 'finishedWork 준비',
    description: 'Render Phase가 끝나면 완성된 Fiber 트리(finishedWork)가 준비됩니다.',
    tone: 'blue',
  },
  {
    number: '2',
    title: 'commitRoot',
    description: '커밋의 시작점. 루트 Fiber를 기준으로 커밋 절차가 시작됩니다.',
    tone: 'teal',
  },
  {
    number: '3',
    title: 'Before Mutation',
    description: '변경 전 단계. snapshot, getSnapshotBeforeUpdate 등 준비 작업.',
    tone: 'violet',
  },
  {
    number: '4',
    title: 'Mutation',
    description: '실제 DOM 변경. Placement / Update / Deletion이 여기서 수행됩니다.',
    tone: 'sky',
    isMutation: true,
  },
  {
    number: '5',
    title: 'root.current 전환',
    description: 'workInProgress → current. 이제 새로운 트리가 현재 트리가 됩니다.',
    tone: 'teal',
  },
  {
    number: '6',
    title: 'Layout',
    description: 'layout effect 실행. useLayoutEffect 및 ref attach 수행.',
    tone: 'violet',
  },
  {
    number: '7',
    title: 'Passive Effects',
    description: 'passive effect 후속 처리. useEffect가 비동기로 실행됩니다.',
    tone: 'orange',
  },
];

const timelineStepsEn: TimelineStep[] = [
  {
    number: '1',
    title: 'Prepare finishedWork',
    description: 'Once Render Phase ends, the completed Fiber tree (finishedWork) is ready.',
    tone: 'blue',
  },
  {
    number: '2',
    title: 'commitRoot',
    description: 'Entry point of the commit. Procedure starts from the root Fiber.',
    tone: 'teal',
  },
  {
    number: '3',
    title: 'Before Mutation',
    description: 'Pre-change step. Snapshot, getSnapshotBeforeUpdate, etc.',
    tone: 'violet',
  },
  {
    number: '4',
    title: 'Mutation',
    description: 'Actual DOM changes. Placement / Update / Deletion happen here.',
    tone: 'sky',
    isMutation: true,
  },
  {
    number: '5',
    title: 'Swap root.current',
    description: 'workInProgress → current. The new tree becomes the current tree.',
    tone: 'teal',
  },
  {
    number: '6',
    title: 'Layout',
    description: 'Run layout effects. useLayoutEffect and ref attach happen here.',
    tone: 'violet',
  },
  {
    number: '7',
    title: 'Passive Effects',
    description: 'Process passive effects. useEffect runs asynchronously.',
    tone: 'orange',
  },
];

const flagRowsKo: FlagRow[] = [
  {
    name: 'Placement',
    bitMask: '0b0000000000000010',
    meaning: '새로운 노드를 삽입해야 함',
    tone: 'teal',
  },
  {
    name: 'Update',
    bitMask: '0b0000000000000100',
    meaning: '기존 노드를 업데이트해야 함',
    tone: 'sky',
  },
  {
    name: 'ChildDeletion',
    bitMask: '0b0000000000010000',
    meaning: '자식 노드 삭제 필요',
    tone: 'rose',
  },
  {
    name: 'Ref',
    bitMask: '0b0000001000000000',
    meaning: 'ref 작업이 필요함',
    tone: 'violet',
  },
  {
    name: 'Layout',
    bitMask: '0b0000010000000000',
    meaning: 'layout effect 실행 필요',
    tone: 'cyan',
  },
  {
    name: 'Passive',
    bitMask: '0b0000100000000000',
    meaning: 'passive effect 실행 필요',
    tone: 'orange',
  },
];

const flagRowsEn: FlagRow[] = [
  {
    name: 'Placement',
    bitMask: '0b0000000000000010',
    meaning: 'New node must be inserted',
    tone: 'teal',
  },
  {
    name: 'Update',
    bitMask: '0b0000000000000100',
    meaning: 'Existing node must be updated',
    tone: 'sky',
  },
  {
    name: 'ChildDeletion',
    bitMask: '0b0000000000010000',
    meaning: 'Child node must be deleted',
    tone: 'rose',
  },
  {
    name: 'Ref',
    bitMask: '0b0000001000000000',
    meaning: 'Ref work is required',
    tone: 'violet',
  },
  {
    name: 'Layout',
    bitMask: '0b0000010000000000',
    meaning: 'Layout effect must run',
    tone: 'cyan',
  },
  {
    name: 'Passive',
    bitMask: '0b0000100000000000',
    meaning: 'Passive effect must run',
    tone: 'orange',
  },
];

const ko: CommitPhaseIntroContent = {
  hero: {
    badge: 'Commit Phase · 1/10단계',
    title: {
      line1: 'React는 계산을',
      line2: '마친 뒤에야',
      line3: '실제 화면을 바꿉니다.',
    },
    description:
      'Render Phase에서 어떤 변화가 필요한지 계산했다면, Commit Phase에서는 그 결과를 실제 DOM, refs, effect 실행으로 반영합니다.',
    insight: 'React는 한 번에 안전하게, 일관되게 UI를 반영하기 위해 Render와 Commit을 분리합니다.',
    diagram: {
      eyebrow: 'render → commit',
      renderCard: {
        title: 'Render Phase',
        items: ['다음 화면 계산', 'flags 기록'],
      },
      commitCard: {
        title: 'Commit Phase',
        items: ['실제 DOM 반영', 'refs / effects 실행'],
      },
    },
  },
  previous: {
    number: '1',
    eyebrow: '앞 챕터',
    title: '앞 챕터에서 남긴 것',
    description:
      'Render Phase가 남긴 변경 표시(flags)와 완성된 Fiber 트리(finishedWork)가 Commit Phase로 넘어옵니다.',
    leftCard: {
      title: 'Render Phase가 남긴 것',
      items: previousLeftoversKo,
      footer: '변경 표시와 완성된 Fiber 트리',
    },
    rightCard: {
      question: '이 표시들은 언제 실제 동작이 될까?',
      answer: '바로 다음 단계인 Commit Phase에서 실제 반영됩니다.',
    },
  },
  comparison: {
    number: '2',
    eyebrow: 'render vs commit',
    title: 'Render Phase vs Commit Phase',
    description: '두 단계의 책임을 항목별로 비교합니다. DOM 변경 여부가 가장 큰 분기점입니다.',
    columns: {
      label: '구분',
      render: 'Render Phase',
      commit: 'Commit Phase',
    },
    rows: [
      {
        label: '핵심 질문',
        render: '무엇을 바꿀까?',
        commit: '실제로 어떻게 반영할까?',
      },
      {
        label: '주요 대상',
        render: 'Fiber 트리',
        commit: 'DOM, refs, effects',
      },
      {
        label: 'DOM 변경',
        render: ['없음', '계산만 수행'],
        commit: ['있음', '실제 DOM 갱신'],
        emphasis: true,
      },
      {
        label: '대표 산출물',
        render: ['finishedWork, flags', '변경 표시 포함'],
        commit: ['실제 host tree 갱신', 'refs 연결, effects 실행'],
      },
      {
        label: '언제 실행',
        render: ['언제든지 중단 / 재개 가능', 'Concurrent 가능'],
        commit: ['한 번에 동기적으로 실행', '중단되지 않음'],
      },
      {
        label: '결과의 목적',
        render: '작업 계획 수립',
        commit: '실제 환경 반영',
      },
    ],
  },
  work: {
    number: '3',
    eyebrow: 'commit 작업 항목',
    title: 'Commit Phase에서 실제로 처리되는 항목',
    description:
      'Render Phase가 남긴 flags를 따라 Commit Phase는 다음 6가지 작업을 차례로 수행합니다.',
    items: workItemsKo,
  },
  map: {
    number: '4',
    eyebrow: 'commit 단계 지도',
    title: 'Commit Phase 전체 지도',
    description:
      'finishedWork 준비부터 Passive Effects까지, Commit Phase는 7단계 흐름으로 진행됩니다.',
    mutationBadge: '실제 DOM 변경',
    steps: timelineStepsKo,
  },
  flags: {
    number: '5',
    eyebrow: 'Fiber flags',
    title: '변경 표시는 flags에 기록됩니다',
    description:
      '각 Fiber에 설정된 flags를 Commit Phase가 읽어, 어떤 작업을 어떻게 수행할지 결정합니다.',
    relatedFilesTitle: '관련 파일',
    relatedFiles: [
      { name: 'ReactFiberFlags.js', description: '변경 플래그 정의' },
      { name: 'ReactFiberWorkLoop.js', description: 'Commit Phase 실행 흐름' },
    ],
    learningTitle: '학습 포인트',
    learningItems: [
      '각 Fiber에 flags가 설정됨',
      'Commit Phase는 이 flags를 읽어 실제 작업 수행',
      '삭제할 대상은 deletions 리스트로 관리',
    ],
    flagTableTitle: '주요 flags 예시 (ReactFiberFlags.js)',
    flagRows: flagRowsKo,
    bottomNote:
      '실제 코드는 더 많은 flags와 bit 필드를 포함하며, 플랫폼별/효과별 처리를 구분합니다.',
  },
  summary: {
    number: '6',
    eyebrow: '핵심 요약',
    title: '핵심',
    mainSentence: {
      line1: '실제 DOM 변경은 Commit Phase 안의',
      line2: 'Mutation 단계에서 일어납니다.',
    },
    description: 'Render Phase는 표시하고, Commit Phase는 실행합니다.',
    flowTitle: '한 줄 흐름',
    flow: [
      {
        title: 'Render Phase',
        description: '계획 수립 / 표시(flags)만 남김',
        tone: 'sky',
      },
      {
        title: 'Commit Phase - Mutation',
        description: '실제 DOM 변경 수행',
        tone: 'teal',
      },
      {
        title: 'Layout / Passive',
        description: 'refs 연결, effects 실행',
        tone: 'orange',
      },
    ],
  },
  quiz: {
    number: '7',
    eyebrow: '미니 퀴즈',
    title: '미니 퀴즈',
    question: 'Render Phase에서 Placement flag가 생겼다면 이미 DOM 삽입이 끝난 것일까?',
    answer: '아니다. 실제 삽입은 Commit Phase에서 실행된다.',
    explanation:
      'Placement flag는 "이 노드를 삽입해야 한다"라는 계획일 뿐, DOM에 실제로 붙이는 작업은 Commit Phase의 Mutation 단계에서 이루어집니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'commitRoot',
    description:
      'Commit Phase의 역할을 잡았다면, 이제 finishedWork가 어떻게 실제 반영 파이프라인으로 들어가는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/commit-root',
  },
};

const en: CommitPhaseIntroContent = {
  hero: {
    badge: 'Commit Phase · 1/10',
    title: {
      line1: 'React only changes',
      line2: 'the screen after',
      line3: 'all computation is done.',
    },
    description:
      'The Render Phase decides what needs to change. The Commit Phase applies that result to the real DOM, refs, and effects.',
    insight:
      'React separates Render and Commit so that the UI is applied safely and consistently in one pass.',
    diagram: {
      eyebrow: 'RENDER → COMMIT',
      renderCard: {
        title: 'Render Phase',
        items: ['Compute the next screen', 'Record flags'],
      },
      commitCard: {
        title: 'Commit Phase',
        items: ['Apply to the real DOM', 'Run refs / effects'],
      },
    },
  },
  previous: {
    number: '1',
    eyebrow: 'CHAPTER RECAP',
    title: 'What the previous chapter left behind',
    description:
      'The change marks (flags) and the completed Fiber tree (finishedWork) from the Render Phase flow into the Commit Phase.',
    leftCard: {
      title: 'What the Render Phase left',
      items: previousLeftoversEn,
      footer: 'Change marks and the completed Fiber tree',
    },
    rightCard: {
      question: 'When do these marks become real actions?',
      answer: 'Right in the next step — the Commit Phase actually applies them.',
    },
  },
  comparison: {
    number: '2',
    eyebrow: 'RENDER VS COMMIT',
    title: 'Render Phase vs Commit Phase',
    description:
      'Compare the responsibilities of the two phases row by row. Whether the DOM changes is the biggest fork.',
    columns: {
      label: 'Aspect',
      render: 'Render Phase',
      commit: 'Commit Phase',
    },
    rows: [
      {
        label: 'Core question',
        render: 'What should change?',
        commit: 'How do we actually apply it?',
      },
      {
        label: 'Main target',
        render: 'Fiber tree',
        commit: 'DOM, refs, effects',
      },
      {
        label: 'DOM changes',
        render: ['None', 'Compute only'],
        commit: ['Yes', 'Real DOM updates'],
        emphasis: true,
      },
      {
        label: 'Main output',
        render: ['finishedWork, flags', 'Includes change marks'],
        commit: ['Updates to the host tree', 'Attaches refs, runs effects'],
      },
      {
        label: 'When it runs',
        render: ['Pausable / resumable at any time', 'Concurrent friendly'],
        commit: ['Runs synchronously in one shot', 'Cannot be interrupted'],
      },
      {
        label: 'Goal',
        render: 'Plan the work',
        commit: 'Apply to the real environment',
      },
    ],
  },
  work: {
    number: '3',
    eyebrow: 'WORK ITEMS',
    title: 'Work handled in the Commit Phase',
    description:
      'Driven by the flags left by the Render Phase, the Commit Phase carries out the following 6 jobs in order.',
    items: workItemsEn,
  },
  map: {
    number: '4',
    eyebrow: 'PHASE MAP',
    title: 'Commit Phase whole map',
    description:
      'From preparing finishedWork to passive effects, the Commit Phase moves through 7 steps.',
    mutationBadge: 'real DOM changes here',
    steps: timelineStepsEn,
  },
  flags: {
    number: '5',
    eyebrow: 'FIBER FLAGS',
    title: 'Change marks live on flags',
    description:
      'The Commit Phase reads the flags set on each Fiber to decide what work to perform and how.',
    relatedFilesTitle: 'Related files',
    relatedFiles: [
      { name: 'ReactFiberFlags.js', description: 'Defines the change flags' },
      { name: 'ReactFiberWorkLoop.js', description: 'Drives the Commit Phase flow' },
    ],
    learningTitle: 'Learning points',
    learningItems: [
      'Each Fiber carries its own flags',
      'The Commit Phase reads those flags and performs the work',
      'Items to delete live on the deletions list',
    ],
    flagTableTitle: 'Sample flags (ReactFiberFlags.js)',
    flagRows: flagRowsEn,
    bottomNote:
      'Real source code includes many more flags and bit fields and splits behavior per platform / effect.',
  },
  summary: {
    number: '6',
    eyebrow: 'KEY SUMMARY',
    title: 'Key',
    mainSentence: {
      line1: 'Real DOM changes happen inside the',
      line2: 'Mutation step of the Commit Phase.',
    },
    description: 'Render Phase marks. Commit Phase executes.',
    flowTitle: 'One-line flow',
    flow: [
      {
        title: 'Render Phase',
        description: 'Plan only / leave flags',
        tone: 'sky',
      },
      {
        title: 'Commit Phase - Mutation',
        description: 'Apply real DOM changes',
        tone: 'teal',
      },
      {
        title: 'Layout / Passive',
        description: 'Attach refs, run effects',
        tone: 'orange',
      },
    ],
  },
  quiz: {
    number: '7',
    eyebrow: 'MINI QUIZ',
    title: 'Mini quiz',
    question:
      'If a Placement flag was set during the Render Phase, has the DOM insertion already happened?',
    answer: 'No. The real insert only runs in the Commit Phase.',
    explanation:
      'A Placement flag is only a plan that says "this node should be inserted". The actual DOM insertion is done during the Mutation step of the Commit Phase.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'commitRoot',
    description:
      'Now that the role of the Commit Phase is clear, see how finishedWork actually enters the real apply pipeline.',
    cta: 'Go to the next page',
    href: '/commit-root',
  },
};

export const commitPhaseIntroContent: Record<Locale, CommitPhaseIntroContent> = {
  ko,
  en,
};
