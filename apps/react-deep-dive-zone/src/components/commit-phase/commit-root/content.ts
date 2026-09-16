import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroFlowCardId = 'cpu' | 'gitMerge' | 'gate' | 'layers';

export type HeroFlowCard = {
  title: string;
  subtitle: string;
  description?: string;
  items?: string[];
  id: HeroFlowCardId;
  tone: ToneKey;
  isGate?: boolean;
};

export type RenderToCommitStepId = 'checkCircle' | 'gitMerge' | 'gate' | 'rocket';

export type RenderToCommitStep = {
  title: string;
  description: string;
  id: RenderToCommitStepId;
  tone: ToneKey;
  emphasis?: boolean;
};

export type PositionStepId = 'calendar' | 'cpu' | 'check' | 'gate' | 'list';

export type PositionStep = {
  title: string;
  description: string;
  id: PositionStepId;
  tone: ToneKey;
  emphasis?: boolean;
  subItems?: string[];
};

export type PreparationCardId = 'inbox' | 'flag' | 'workflow' | 'zap';

export type PreparationCard = {
  title: string;
  keyword: string;
  description: string;
  id: PreparationCardId;
  tone: ToneKey;
};

export type TimelineStep = {
  number: string;
  title: string;
  description: string;
  tone: ToneKey;
  isMutation?: boolean;
  isAsync?: boolean;
};

export type ModernStep = {
  label: string;
  tone: ToneKey;
};

export type CommitRootContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      eyebrow: string;
      flowLabel: string;
      cards: HeroFlowCard[];
      code: string;
    };
  };
  renderToCommit: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    gateBadge: string;
    steps: RenderToCommitStep[];
  };
  position: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    entryBadge: string;
    steps: PositionStep[];
  };
  preparation: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: PreparationCard[];
  };
  timeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    mutationBadge: string;
    asyncBadge: string;
    steps: TimelineStep[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  rootMeaning: {
    badge: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ModernStep[];
    note: string;
    relatedFileNote: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroCardsKo: HeroFlowCard[] = [
  {
    title: 'Render Phase',
    subtitle: '계산',
    description: '새 화면을 계산하고 Fiber tree를 완성',
    id: 'cpu',
    tone: 'sky',
  },
  {
    title: 'finishedWork',
    subtitle: '새로 계산된 Fiber 트리',
    description: 'Commit Phase로 넘겨질 완성 결과',
    id: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot',
    subtitle: '파이프라인 입구',
    description: '완성된 트리를 실제 반영 단계로 전달',
    id: 'gate',
    tone: 'teal',
    isGate: true,
  },
  {
    title: 'Commit Phase',
    subtitle: '실제 반영',
    items: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
    id: 'layers',
    tone: 'violet',
  },
];

const heroCardsEn: HeroFlowCard[] = [
  {
    title: 'Render Phase',
    subtitle: 'compute',
    description: 'Computes the next screen and builds the Fiber tree',
    id: 'cpu',
    tone: 'sky',
  },
  {
    title: 'finishedWork',
    subtitle: 'the new Fiber tree',
    description: 'The completed result handed off to the Commit Phase',
    id: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot',
    subtitle: 'pipeline entry',
    description: 'Hands the finished tree into the real apply pipeline',
    id: 'gate',
    tone: 'teal',
    isGate: true,
  },
  {
    title: 'Commit Phase',
    subtitle: 'apply for real',
    items: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
    id: 'layers',
    tone: 'violet',
  },
];

const renderToCommitStepsKo: RenderToCommitStep[] = [
  {
    title: 'Render Phase 완료',
    description: '모든 작업을 계산하고 트리를 완성',
    id: 'checkCircle',
    tone: 'sky',
  },
  {
    title: 'finishedWork 확보',
    description: '새로운 Fiber 트리, 완성된 결과 확보',
    id: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot(...)',
    description: '완성된 결과를 실제 반영 파이프라인으로 전달',
    id: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit Phase 시작',
    description: '실제 DOM, refs, effects 동기 반영',
    id: 'rocket',
    tone: 'violet',
  },
];

const renderToCommitStepsEn: RenderToCommitStep[] = [
  {
    title: 'Render Phase done',
    description: 'All work is computed and the tree is built',
    id: 'checkCircle',
    tone: 'sky',
  },
  {
    title: 'finishedWork ready',
    description: 'A new Fiber tree — the completed result',
    id: 'gitMerge',
    tone: 'blue',
  },
  {
    title: 'commitRoot(...)',
    description: 'Hands the completed result to the real apply pipeline',
    id: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit Phase begins',
    description: 'Synchronously applies DOM, refs, effects',
    id: 'rocket',
    tone: 'violet',
  },
];

const positionStepsKo: PositionStep[] = [
  {
    title: '업데이트 스케줄링',
    description: 'setState, props 변경, 이벤트 등으로 업데이트 요청',
    id: 'calendar',
    tone: 'sky',
  },
  {
    title: 'Render Phase (Reconciler)',
    description: 'Fiber 트리를 순회하며 변경 사항 계산',
    id: 'cpu',
    tone: 'blue',
  },
  {
    title: 'finishedWork 생성',
    description: '새로운 트리 완성, Root.current와 분리',
    id: 'check',
    tone: 'indigo',
  },
  {
    title: 'commitRoot',
    description: '완성된 트리를 기준으로 Commit Phase 시작',
    id: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit sub-phases',
    description: '순차적으로 실행되는 commit 내부 단계',
    id: 'list',
    tone: 'violet',
    subItems: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
  },
];

const positionStepsEn: PositionStep[] = [
  {
    title: 'Update scheduling',
    description: 'Update requests from setState, prop changes, events, ...',
    id: 'calendar',
    tone: 'sky',
  },
  {
    title: 'Render Phase (Reconciler)',
    description: 'Walks the Fiber tree and computes the diff',
    id: 'cpu',
    tone: 'blue',
  },
  {
    title: 'Build finishedWork',
    description: 'New tree is complete and split from Root.current',
    id: 'check',
    tone: 'indigo',
  },
  {
    title: 'commitRoot',
    description: 'Kicks off the Commit Phase from the finished tree',
    id: 'gate',
    tone: 'teal',
    emphasis: true,
  },
  {
    title: 'Commit sub-phases',
    description: 'Inner commit steps that run in sequence',
    id: 'list',
    tone: 'violet',
    subItems: ['Before Mutation', 'Mutation', 'Layout', 'Passive Effects'],
  },
];

const preparationCardsKo: PreparationCard[] = [
  {
    title: '완료된 트리 인수로 수신',
    keyword: 'finishedWork',
    description: '새로 계산된 Fiber 트리인 완성본을 인수로 받습니다.',
    id: 'inbox',
    tone: 'teal',
  },
  {
    title: '어떤 lane의 결과인지 확인',
    keyword: 'lanes',
    description: '우선순위와 어떤 업데이트 결과인지 파악합니다.',
    id: 'flag',
    tone: 'violet',
  },
  {
    title: 'mutation / layout 단계 진입 준비',
    keyword: 'pending effects state',
    description: '호스트 DOM, ref, flags 등을 기반으로 각 단계 진입을 준비합니다.',
    id: 'workflow',
    tone: 'amber',
  },
  {
    title: 'passive effects 예약 가능성 검토',
    keyword: 'passive effects',
    description: '후속 passive effect 실행 여부를 결정하고 예약을 준비합니다.',
    id: 'zap',
    tone: 'indigo',
  },
];

const preparationCardsEn: PreparationCard[] = [
  {
    title: 'Receive the finished tree as an argument',
    keyword: 'finishedWork',
    description: 'Takes the newly built Fiber tree as input.',
    id: 'inbox',
    tone: 'teal',
  },
  {
    title: 'Check which lane the work belongs to',
    keyword: 'lanes',
    description: 'Reads the priority and the kind of update being committed.',
    id: 'flag',
    tone: 'violet',
  },
  {
    title: 'Prepare to enter mutation / layout',
    keyword: 'pending effects state',
    description: 'Sets up entry into each sub-phase from host DOM, refs, flags.',
    id: 'workflow',
    tone: 'amber',
  },
  {
    title: 'Decide whether passive effects must be scheduled',
    keyword: 'passive effects',
    description: 'Decides whether follow-up passive effects need scheduling.',
    id: 'zap',
    tone: 'indigo',
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
    tone: 'amber',
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
    tone: 'amber',
    isAsync: true,
  },
];

const heroCode = 'commitRoot(root, finishedWork, lanes);';

const codeKo = `function commitRoot(
  root: FiberRoot,
  finishedWork: null | Fiber,
  lanes: Lanes,
  ...
): void {
  // 단계별 준비 작업 후 각 단계로 진입합니다.

  commitBeforeMutationEffects(root, finishedWork, lanes);
  commitMutationEffects(root, finishedWork, lanes);
  commitLayoutEffects(finishedWork, root, lanes);
  scheduleCallback(NormalSchedulerPriority, () => {
    flushPassiveEffects();
  });
}`;

const codeEn = `function commitRoot(
  root: FiberRoot,
  finishedWork: null | Fiber,
  lanes: Lanes,
  ...
): void {
  // Prepare per step, then enter each sub-phase.

  commitBeforeMutationEffects(root, finishedWork, lanes);
  commitMutationEffects(root, finishedWork, lanes);
  commitLayoutEffects(finishedWork, root, lanes);
  scheduleCallback(NormalSchedulerPriority, () => {
    flushPassiveEffects();
  });
}`;

const modernStepsKo: ModernStep[] = [
  { label: 'Before Mutation', tone: 'sky' },
  { label: 'Mutation', tone: 'teal' },
  { label: 'After Mutation', tone: 'cyan' },
  { label: 'Layout', tone: 'violet' },
  { label: 'Passive Effects', tone: 'amber' },
];

const modernStepsEn: ModernStep[] = [
  { label: 'Before Mutation', tone: 'sky' },
  { label: 'Mutation', tone: 'teal' },
  { label: 'After Mutation', tone: 'cyan' },
  { label: 'Layout', tone: 'violet' },
  { label: 'Passive Effects', tone: 'amber' },
];

const ko: CommitRootContent = {
  hero: {
    badge: 'Commit Phase · 2/10단계',
    title: {
      line1: 'finishedWork는',
      line2: 'commitRoot를 통해',
      line3: '실제 반영 단계로 들어갑니다.',
    },
    description:
      'Render Phase가 끝나면 React는 새로 계산된 Fiber 트리를 finishedWork로 확보하고, commitRoot가 그 결과를 실제 환경에 반영하는 파이프라인을 시작합니다.',
    diagram: {
      eyebrow: 'render → commit',
      flowLabel: 'Render Phase → finishedWork → commitRoot → Commit Phase',
      cards: heroCardsKo,
      code: heroCode,
    },
  },
  renderToCommit: {
    badge: '01',
    eyebrow: 'commit 진입',
    title: 'Render 종료 → Commit 시작',
    description:
      'Render Phase가 끝나는 순간 finishedWork가 확보되고, commitRoot가 그 결과를 Commit Phase로 넘깁니다.',
    gateBadge: '관문',
    steps: renderToCommitStepsKo,
  },
  position: {
    badge: '02',
    eyebrow: '진입점 위치',
    title: 'commitRoot의 위치 (전체 업데이트 흐름)',
    description:
      '업데이트 스케줄링부터 Commit sub-phases까지, commitRoot는 Render와 Commit 사이의 입구에 위치합니다.',
    entryBadge: '진입점',
    steps: positionStepsKo,
  },
  preparation: {
    badge: '03',
    eyebrow: '커밋 준비',
    title: 'commitRoot가 준비하는 것',
    description: 'commitRoot는 단순한 진입점이 아니라 다음 4가지 준비 작업을 수행합니다.',
    cards: preparationCardsKo,
  },
  timeline: {
    badge: '04',
    eyebrow: 'commit 타임라인',
    title: 'Commit Phase 타임라인 개요',
    description:
      'commitRoot가 여는 파이프라인의 큰 흐름입니다. Before Mutation부터 Passive Effects까지 5단계로 이어집니다.',
    mutationBadge: '실제 DOM 변경',
    asyncBadge: '비동기',
    steps: timelineStepsKo,
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'commitRoot, commitBeforeMutationEffects, commitMutationEffects, commitLayoutEffects',
    code: codeKo,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  rootMeaning: {
    badge: '06',
    eyebrow: 'root commit',
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
    badge: '07',
    eyebrow: '현대 정정',
    title: '최신 코드 보정',
    description: '현재 React main에서는 commit 파이프라인이 더 세분화되어 있습니다.',
    steps: modernStepsKo,
    note: '학습을 위해 기본 3~5단계의 큰 흐름을 먼저 이해하고, 더 세부적인 분리는 이 보정 카드로 확인하세요.',
    relatedFileNote: '관련 파일: ReactFiberWorkLoop.js, ReactFiberCommitWork.js',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Before Mutation Phase',
    description:
      'commitRoot는 전체 commit 파이프라인의 입구입니다. 이제 실제 DOM이 바뀌기 직전 단계인 Before Mutation부터 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/before-mutation',
  },
};

const en: CommitRootContent = {
  hero: {
    badge: 'Commit Phase · 2/10',
    title: {
      line1: 'finishedWork enters',
      line2: 'the real apply step',
      line3: 'through commitRoot.',
    },
    description:
      'When the Render Phase ends, React holds the new Fiber tree as finishedWork. commitRoot starts the pipeline that applies that result to the real environment.',
    diagram: {
      eyebrow: 'RENDER → COMMIT',
      flowLabel: 'Render Phase → finishedWork → commitRoot → Commit Phase',
      cards: heroCardsEn,
      code: heroCode,
    },
  },
  renderToCommit: {
    badge: '01',
    eyebrow: 'INTO COMMIT',
    title: 'Render done → Commit begins',
    description:
      'The moment the Render Phase ends, finishedWork is ready and commitRoot hands it to the Commit Phase.',
    gateBadge: 'gate',
    steps: renderToCommitStepsEn,
  },
  position: {
    badge: '02',
    eyebrow: 'ENTRY POINT',
    title: 'Where commitRoot sits (whole update flow)',
    description:
      'From update scheduling to commit sub-phases, commitRoot lives right at the entry between Render and Commit.',
    entryBadge: 'entry point',
    steps: positionStepsEn,
  },
  preparation: {
    badge: '03',
    eyebrow: 'PREPARATION',
    title: 'What commitRoot prepares',
    description: 'commitRoot is more than an entry point — it does these 4 preparation jobs.',
    cards: preparationCardsEn,
  },
  timeline: {
    badge: '04',
    eyebrow: 'TIMELINE',
    title: 'Commit Phase timeline overview',
    description:
      'The high-level flow of the pipeline commitRoot opens — from Before Mutation through Passive Effects.',
    mutationBadge: 'real DOM changes',
    asyncBadge: 'async',
    steps: timelineStepsEn,
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'commitRoot, commitBeforeMutationEffects, commitMutationEffects, commitLayoutEffects',
    code: codeEn,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
  },
  rootMeaning: {
    badge: '06',
    eyebrow: 'ROOT COMMIT',
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
    badge: '07',
    eyebrow: 'MODERN UPDATE',
    title: 'Modern code correction',
    description: 'The current React main splits the commit pipeline into more steps.',
    steps: modernStepsEn,
    note: 'First grasp the broad 3~5 step flow for learning, then look at this correction card for the more granular split.',
    relatedFileNote: 'Related files: ReactFiberWorkLoop.js, ReactFiberCommitWork.js',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Before Mutation Phase',
    description:
      'commitRoot is the entry to the whole commit pipeline. Up next is Before Mutation — the step right before the real DOM changes.',
    cta: 'Go to the next page',
    href: '/before-mutation',
  },
};

export const commitRootContent: Record<Locale, CommitRootContent> = { ko, en };
