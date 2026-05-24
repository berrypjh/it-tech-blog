import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type HeroFlowCardIcon = 'cpu' | 'gitMerge' | 'gate' | 'layers';

export type HeroFlowCard = {
  title: string;
  subtitle: string;
  description?: string;
  items?: string[];
  iconName: HeroFlowCardIcon;
  tone: CommitToneKey;
  isGate?: boolean;
};

export type RenderToCommitStepIcon = 'checkCircle' | 'gitMerge' | 'gate' | 'rocket';

export type RenderToCommitStep = {
  title: string;
  description: string;
  iconName: RenderToCommitStepIcon;
  tone: CommitToneKey;
  emphasis?: boolean;
};

export type PositionStepIcon = 'calendar' | 'cpu' | 'check' | 'gate' | 'list';

export type PositionStep = {
  title: string;
  description: string;
  iconName: PositionStepIcon;
  tone: CommitToneKey;
  emphasis?: boolean;
  subItems?: string[];
};

export type PreparationCardIcon = 'inbox' | 'flag' | 'workflow' | 'zap';

export type PreparationCard = {
  title: string;
  keyword: string;
  description: string;
  iconName: PreparationCardIcon;
  tone: CommitToneKey;
};

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
  tone: CommitToneKey;
  isMutation?: boolean;
  isAsync?: boolean;
};

export type PipelineFunction = {
  name: string;
  description: string;
  tone: CommitToneKey;
};

export type ModernStep = {
  label: string;
  tone: CommitToneKey;
};

export type CommitRootContent = {
  hero: {
    pills: { label: string; tone: 'sky' | 'slate' }[];
    title: { line1: string; line2: string; line3: string };
    description: string;
    insight: string;
    diagram: {
      eyebrow: string;
      flowLabel: string;
      cards: HeroFlowCard[];
    };
  };
  renderToCommit: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RenderToCommitStep[];
  };
  position: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PositionStep[];
  };
  preparation: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: PreparationCard[];
  };
  timeline: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    mutationBadge: string;
    asyncBadge: string;
    steps: TimelineStep[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      watchLabel: string;
      watchValue: string;
      questionLabel: string;
      question: string;
    };
    code: {
      title: string;
      code: string;
    };
    pipelineTitle: string;
    pipeline: PipelineFunction[];
  };
  rootMeaning: {
    number: string;
    eyebrow: string;
    title: string;
    description: { line1: string; line2: string; line3: string };
    leftCardTitle: string;
    leftCardLabel: string;
    centerCardTitle: string;
    centerCardBody: string;
    rightCardTitle: string;
    rightCardLabel: string;
    flowLabel: { left: string; center: string; right: string };
  };
  modern: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ModernStep[];
    bottomNote: string;
    relatedFileNote: string;
  };
  cta: {
    description: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

const heroCardsKo: HeroFlowCard[] = [
  {
    title: 'Render Phase',
    subtitle: '계산',
    description: '새 화면을 계산하고 Fiber tree를 완성',
    iconName: 'cpu',
    tone: 'sky',
  },
  {
    title: 'finishedWork',
    subtitle: '새로 계산된 Fiber 트리',
    description: 'Commit Phase로 넘겨질 완성 결과',
    iconName: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot',
    subtitle: '파이프라인 입구',
    description: '완성된 트리를 실제 반영 단계로 전달',
    iconName: 'gate',
    tone: 'teal',
    isGate: true,
  },
  {
    title: 'Commit Phase',
    subtitle: '실제 반영',
    items: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
    iconName: 'layers',
    tone: 'violet',
  },
];

const heroCardsEn: HeroFlowCard[] = [
  {
    title: 'Render Phase',
    subtitle: 'compute',
    description: 'Computes the next screen and builds the Fiber tree',
    iconName: 'cpu',
    tone: 'sky',
  },
  {
    title: 'finishedWork',
    subtitle: 'the new Fiber tree',
    description: 'The completed result handed off to the Commit Phase',
    iconName: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot',
    subtitle: 'pipeline entry',
    description: 'Hands the finished tree into the real apply pipeline',
    iconName: 'gate',
    tone: 'teal',
    isGate: true,
  },
  {
    title: 'Commit Phase',
    subtitle: 'apply for real',
    items: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
    iconName: 'layers',
    tone: 'violet',
  },
];

const renderToCommitStepsKo: RenderToCommitStep[] = [
  {
    title: 'Render Phase 완료',
    description: '모든 작업을 계산하고 트리를 완성',
    iconName: 'checkCircle',
    tone: 'sky',
  },
  {
    title: 'finishedWork 확보',
    description: '새로운 Fiber 트리, 완성된 결과 확보',
    iconName: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot(...)',
    description: '완성된 결과를 실제 반영 파이프라인으로 전달',
    iconName: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit Phase 시작',
    description: '실제 DOM, refs, effects 동기 반영',
    iconName: 'rocket',
    tone: 'violet',
  },
];

const renderToCommitStepsEn: RenderToCommitStep[] = [
  {
    title: 'Render Phase done',
    description: 'All work is computed and the tree is built',
    iconName: 'checkCircle',
    tone: 'sky',
  },
  {
    title: 'finishedWork ready',
    description: 'A new Fiber tree — the completed result',
    iconName: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot(...)',
    description: 'Hands the completed result to the real apply pipeline',
    iconName: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit Phase begins',
    description: 'Synchronously applies DOM, refs, effects',
    iconName: 'rocket',
    tone: 'violet',
  },
];

const positionStepsKo: PositionStep[] = [
  {
    title: '업데이트 스케줄링',
    description: 'setState, props 변경, 이벤트 등으로 업데이트 요청',
    iconName: 'calendar',
    tone: 'sky',
  },
  {
    title: 'Render Phase (Reconciler)',
    description: 'Fiber 트리를 순회하며 변경 사항 계산',
    iconName: 'cpu',
    tone: 'blue',
  },
  {
    title: 'finishedWork 생성',
    description: '새로운 트리 완성, Root.current와 분리',
    iconName: 'check',
    tone: 'indigo',
  },
  {
    title: 'commitRoot',
    description: '완성된 트리를 기준으로 Commit Phase 시작',
    iconName: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit sub-phases',
    description: '순차적으로 실행되는 commit 내부 단계',
    iconName: 'list',
    tone: 'violet',
    subItems: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
  },
];

const positionStepsEn: PositionStep[] = [
  {
    title: 'Update scheduling',
    description: 'Update requests from setState, prop changes, events, ...',
    iconName: 'calendar',
    tone: 'sky',
  },
  {
    title: 'Render Phase (Reconciler)',
    description: 'Walks the Fiber tree and computes the diff',
    iconName: 'cpu',
    tone: 'blue',
  },
  {
    title: 'Build finishedWork',
    description: 'New tree is complete and split from Root.current',
    iconName: 'check',
    tone: 'indigo',
  },
  {
    title: 'commitRoot',
    description: 'Kicks off the Commit Phase from the finished tree',
    iconName: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit sub-phases',
    description: 'Inner commit steps that run in sequence',
    iconName: 'list',
    tone: 'violet',
    subItems: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
  },
];

const preparationCardsKo: PreparationCard[] = [
  {
    title: '완료된 트리 인수로 수신',
    keyword: 'finishedWork',
    description: '새로 계산된 Fiber 트리인 완성본을 인수로 받습니다.',
    iconName: 'inbox',
    tone: 'teal',
  },
  {
    title: '어떤 lane의 결과인지 확인',
    keyword: 'lanes',
    description: '우선순위와 어떤 업데이트 결과인지 파악합니다.',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    title: 'mutation / layout 단계 진입 준비',
    keyword: 'pending effects state',
    description: '호스트 DOM, ref, flags 등을 기반으로 각 단계 진입을 준비합니다.',
    iconName: 'workflow',
    tone: 'orange',
  },
  {
    title: 'passive effects 예약 가능성 검토',
    keyword: 'passive effects',
    description: '후속 passive effect 실행 여부를 결정하고 예약을 준비합니다.',
    iconName: 'zap',
    tone: 'rose',
  },
];

const preparationCardsEn: PreparationCard[] = [
  {
    title: 'Receive the finished tree as an argument',
    keyword: 'finishedWork',
    description: 'Takes the newly built Fiber tree as input.',
    iconName: 'inbox',
    tone: 'teal',
  },
  {
    title: 'Check which lane the work belongs to',
    keyword: 'lanes',
    description: 'Reads the priority and the kind of update being committed.',
    iconName: 'flag',
    tone: 'violet',
  },
  {
    title: 'Prepare to enter mutation / layout',
    keyword: 'pending effects state',
    description: 'Sets up entry into each sub-phase from host DOM, refs, flags.',
    iconName: 'workflow',
    tone: 'orange',
  },
  {
    title: 'Decide whether passive effects must be scheduled',
    keyword: 'passive effects',
    description: 'Decides whether follow-up passive effects need scheduling.',
    iconName: 'zap',
    tone: 'rose',
  },
];

const timelineStepsKo: TimelineStep[] = [
  {
    number: '1',
    title: 'Before Mutation',
    description: 'DOM 변경 전 snapshot, ref 분리 등 사전 작업',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'Mutation',
    description: '실제 DOM 변경. Placement / Update / Deletion',
    tone: 'teal',
    isMutation: true,
  },
  {
    number: '3',
    title: 'root.current 전환 (After Mutation)',
    description: '새 트리를 current로 전환, 이후 ref 연결 및 layout 단계의 기준이 됨',
    tone: 'cyan',
  },
  {
    number: '4',
    title: 'Layout',
    description: 'layout effect 실행, ref attach 등 동기 작업',
    tone: 'violet',
  },
  {
    number: '5',
    title: 'Passive Effects',
    description: 'useEffect 관련 작업 예약 및 실행',
    tone: 'orange',
    isAsync: true,
  },
];

const timelineStepsEn: TimelineStep[] = [
  {
    number: '1',
    title: 'Before Mutation',
    description: 'Snapshots, ref detach and other pre-DOM work',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'Mutation',
    description: 'Real DOM changes — Placement / Update / Deletion',
    tone: 'teal',
    isMutation: true,
  },
  {
    number: '3',
    title: 'Swap root.current (After Mutation)',
    description: 'New tree becomes current — basis for ref attach and layout',
    tone: 'cyan',
  },
  {
    number: '4',
    title: 'Layout',
    description: 'Layout effects, ref attach and other synchronous work',
    tone: 'violet',
  },
  {
    number: '5',
    title: 'Passive Effects',
    description: 'Schedule and run useEffect-related work asynchronously',
    tone: 'orange',
    isAsync: true,
  },
];

const codeKo = `function commitRoot(
  root: FiberRoot,
  finishedWork: null | Fiber,
  lanes: Lanes,
  ...
): void {
  // 단계별 준비 작업 후 각 단계로 진입합니다.

  commitBeforeMutationEffects(root, finishedWork);
  commitMutationEffects(root, finishedWork, lanes);
  commitLayoutEffects(finishedWork, root, lanes);
  schedulePassiveEffects(root, lanes);
}`;

const codeEn = `function commitRoot(
  root: FiberRoot,
  finishedWork: null | Fiber,
  lanes: Lanes,
  ...
): void {
  // Prepare per step, then enter each sub-phase.

  commitBeforeMutationEffects(root, finishedWork);
  commitMutationEffects(root, finishedWork, lanes);
  commitLayoutEffects(finishedWork, root, lanes);
  schedulePassiveEffects(root, lanes);
}`;

const pipelineKo: PipelineFunction[] = [
  { name: 'commitBeforeMutationEffects', description: 'DOM 변경 전 준비', tone: 'sky' },
  { name: 'commitMutationEffects', description: '실제 DOM 변경', tone: 'teal' },
  { name: 'commitLayoutEffects', description: 'layout / ref attach', tone: 'violet' },
  { name: 'commitPassiveMountEffects', description: '비동기 passive 실행', tone: 'orange' },
  { name: 'commitPassiveUnmountEffects', description: '이전 passive 정리', tone: 'rose' },
];

const pipelineEn: PipelineFunction[] = [
  { name: 'commitBeforeMutationEffects', description: 'Prepare before DOM changes', tone: 'sky' },
  { name: 'commitMutationEffects', description: 'Real DOM mutations', tone: 'teal' },
  { name: 'commitLayoutEffects', description: 'Layout / ref attach', tone: 'violet' },
  { name: 'commitPassiveMountEffects', description: 'Run passive effects async', tone: 'orange' },
  { name: 'commitPassiveUnmountEffects', description: 'Tear down old passives', tone: 'rose' },
];

const modernStepsKo: ModernStep[] = [
  { label: 'Before Mutation', tone: 'sky' },
  { label: 'Mutation', tone: 'teal' },
  { label: 'After Mutation', tone: 'cyan' },
  { label: 'Layout', tone: 'violet' },
  { label: 'Passive Effects', tone: 'orange' },
];

const modernStepsEn: ModernStep[] = [
  { label: 'Before Mutation', tone: 'sky' },
  { label: 'Mutation', tone: 'teal' },
  { label: 'After Mutation', tone: 'cyan' },
  { label: 'Layout', tone: 'violet' },
  { label: 'Passive Effects', tone: 'orange' },
];

const ko: CommitRootContent = {
  hero: {
    pills: [
      { label: 'React 내부 구조 읽기 시리즈', tone: 'sky' },
      { label: 'Chapter 21', tone: 'slate' },
    ],
    title: {
      line1: 'finishedWork는',
      line2: 'commitRoot를 통해',
      line3: '실제 반영 단계로 들어갑니다.',
    },
    description:
      'Render Phase가 끝나면 React는 새로 계산된 Fiber 트리를 finishedWork로 확보하고, commitRoot가 그 결과를 실제 환경에 반영하는 파이프라인을 시작합니다.',
    insight: 'commitRoot는 Render와 Commit을 잇는 관문이자, 실제 DOM 반영 파이프라인의 입구입니다.',
    diagram: {
      eyebrow: 'render → commit',
      flowLabel: 'Render Phase → finishedWork → commitRoot → Commit Phase',
      cards: heroCardsKo,
    },
  },
  renderToCommit: {
    number: '1',
    eyebrow: 'render-to-commit',
    title: 'Render 종료 → Commit 시작',
    description:
      'Render Phase가 끝나는 순간 finishedWork가 확보되고, commitRoot가 그 결과를 Commit Phase로 넘깁니다.',
    steps: renderToCommitStepsKo,
  },
  position: {
    number: '2',
    eyebrow: 'commit-root-position',
    title: 'commitRoot의 위치 (전체 업데이트 흐름)',
    description:
      '업데이트 스케줄링부터 Commit sub-phases까지, commitRoot는 Render와 Commit 사이의 입구에 위치합니다.',
    steps: positionStepsKo,
  },
  preparation: {
    number: '3',
    eyebrow: 'commit-root-preparation',
    title: 'commitRoot가 준비하는 것',
    description: 'commitRoot는 단순한 진입점이 아니라 다음 4가지 준비 작업을 수행합니다.',
    cards: preparationCardsKo,
  },
  timeline: {
    number: '4',
    eyebrow: 'commit-timeline-overview',
    title: 'Commit Phase 타임라인 개요',
    description:
      'commitRoot가 여는 파이프라인의 큰 흐름입니다. Before Mutation부터 Passive Effects까지 5단계로 이어집니다.',
    mutationBadge: '실제 DOM 변경',
    asyncBadge: '비동기',
    steps: timelineStepsKo,
  },
  checkpoint: {
    number: '5',
    eyebrow: 'code-checkpoint',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      watchLabel: '볼 것',
      watchValue: 'commitRoot(...)',
      questionLabel: '학습 질문',
      question: 'Render Phase의 finishedWork는 어디에서 Commit Phase로 넘어갈까?',
    },
    code: {
      title: 'commitRoot의 시그니처 (React main 기준)',
      code: codeKo,
    },
    pipelineTitle: 'commit pipeline 함수',
    pipeline: pipelineKo,
  },
  rootMeaning: {
    number: '6',
    eyebrow: 'root-commit',
    title: 'Root 단위 Commit의 의미',
    description: {
      line1: 'Render Phase는 Fiber를 하나씩 계산하지만,',
      line2: 'Commit Phase는 완성된 결과 트리 전체를',
      line3: 'Root 기준으로 반영합니다.',
    },
    leftCardTitle: 'Fiber 단위 계산',
    leftCardLabel: 'Render Phase',
    centerCardTitle: 'Root Commit',
    centerCardBody: '여러 Fiber의 변경을 하나로 묶어 일관된 시점에 반영합니다.',
    rightCardTitle: '새 Fiber tree 반영',
    rightCardLabel: 'Commit 결과',
    flowLabel: { left: 'fiber-by-fiber', center: 'one shot', right: 'committed tree' },
  },
  modern: {
    number: '7',
    eyebrow: 'modern-correction',
    title: '최신 코드 보정',
    description: '현재 React main에서는 commit 파이프라인이 더 세분화되어 있습니다.',
    steps: modernStepsKo,
    bottomNote:
      '학습을 위해 기본 3~5단계의 큰 흐름을 먼저 이해하고, 더 세부적인 분리는 이 보정 카드로 확인하세요.',
    relatedFileNote: '관련 파일: ReactFiberWorkLoop.js, ReactFiberCommitWork.js',
  },
  cta: {
    description:
      'commitRoot는 전체 commit 파이프라인의 입구입니다. 이제 실제 DOM이 바뀌기 직전 단계인 Before Mutation부터 살펴봅니다.',
    primaryLabel: '다음: Before Mutation Phase',
    primaryHref: '/before-mutation',
  },
};

const en: CommitRootContent = {
  hero: {
    pills: [
      { label: 'React Internals Reading Series', tone: 'sky' },
      { label: 'Chapter 21', tone: 'slate' },
    ],
    title: {
      line1: 'finishedWork enters',
      line2: 'the real apply step',
      line3: 'through commitRoot.',
    },
    description:
      'When the Render Phase ends, React holds the new Fiber tree as finishedWork. commitRoot starts the pipeline that applies that result to the real environment.',
    insight:
      'commitRoot is the gateway between Render and Commit — the entry of the real DOM apply pipeline.',
    diagram: {
      eyebrow: 'render → commit',
      flowLabel: 'Render Phase → finishedWork → commitRoot → Commit Phase',
      cards: heroCardsEn,
    },
  },
  renderToCommit: {
    number: '1',
    eyebrow: 'render-to-commit',
    title: 'Render done → Commit begins',
    description:
      'The moment the Render Phase ends, finishedWork is ready and commitRoot hands it to the Commit Phase.',
    steps: renderToCommitStepsEn,
  },
  position: {
    number: '2',
    eyebrow: 'commit-root-position',
    title: 'Where commitRoot sits (whole update flow)',
    description:
      'From update scheduling to commit sub-phases, commitRoot lives right at the entry between Render and Commit.',
    steps: positionStepsEn,
  },
  preparation: {
    number: '3',
    eyebrow: 'commit-root-preparation',
    title: 'What commitRoot prepares',
    description: 'commitRoot is more than an entry point — it does these 4 preparation jobs.',
    cards: preparationCardsEn,
  },
  timeline: {
    number: '4',
    eyebrow: 'commit-timeline-overview',
    title: 'Commit Phase timeline overview',
    description:
      'The high-level flow of the pipeline commitRoot opens — from Before Mutation through Passive Effects.',
    mutationBadge: 'real DOM changes',
    asyncBadge: 'async',
    steps: timelineStepsEn,
  },
  checkpoint: {
    number: '5',
    eyebrow: 'code-checkpoint',
    title: 'Source code checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      watchLabel: 'What to read',
      watchValue: 'commitRoot(...)',
      questionLabel: 'Learning question',
      question:
        'Where does the finishedWork from the Render Phase cross over into the Commit Phase?',
    },
    code: {
      title: 'commitRoot signature (React main)',
      code: codeEn,
    },
    pipelineTitle: 'commit pipeline functions',
    pipeline: pipelineEn,
  },
  rootMeaning: {
    number: '6',
    eyebrow: 'root-commit',
    title: 'What Root-level commit means',
    description: {
      line1: 'The Render Phase computes Fibers one at a time,',
      line2: 'but the Commit Phase applies the whole finished tree',
      line3: 'in one shot at the Root.',
    },
    leftCardTitle: 'Fiber-by-fiber compute',
    leftCardLabel: 'Render Phase',
    centerCardTitle: 'Root Commit',
    centerCardBody: 'Many Fiber changes are bundled and applied at one consistent moment.',
    rightCardTitle: 'Apply the new Fiber tree',
    rightCardLabel: 'commit output',
    flowLabel: { left: 'fiber-by-fiber', center: 'one shot', right: 'committed tree' },
  },
  modern: {
    number: '7',
    eyebrow: 'modern-correction',
    title: 'Modern code correction',
    description: 'The current React main splits the commit pipeline into more steps.',
    steps: modernStepsEn,
    bottomNote:
      'First grasp the broad 3~5 step flow for learning, then look at this correction card for the more granular split.',
    relatedFileNote: 'Related files: ReactFiberWorkLoop.js, ReactFiberCommitWork.js',
  },
  cta: {
    description:
      'commitRoot is the entry to the whole commit pipeline. Up next is Before Mutation — the step right before the real DOM changes.',
    primaryLabel: 'Next: Before Mutation Phase',
    primaryHref: '/before-mutation',
  },
};

export const commitRootContent: Record<Locale, CommitRootContent> = { ko, en };
