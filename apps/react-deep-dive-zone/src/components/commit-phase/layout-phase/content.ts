import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroPhaseId = 'database' | 'zap' | 'monitor' | 'clock';

export type HeroPhase = {
  key: string;
  title: string;
  subtitle: string;
  details: string[];
  id: HeroPhaseId;
  tone: ToneKey;
  active?: boolean;
};

export type WorkItemId = 'zap' | 'component' | 'link';

export type WorkItem = {
  title: string;
  description: string;
  pill: string;
  id: WorkItemId;
  tone: ToneKey;
};

export type TimingStep = {
  title: string;
  description: string;
  tone: ToneKey;
  active?: boolean;
};

export type TooltipStep = {
  title: string;
  description: string;
  tone: ToneKey;
};

export type GuaranteeItem = { text: string };

export type CheckpointBlock = {
  filePath: string;
  code: string;
  primaryCta: string;
  primaryHref: string;
};

export type LayoutPhaseContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      phases: HeroPhase[];
      code: string;
    };
  };
  workItems: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: WorkItem[];
  };
  timing: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TimingStep[];
    note: string;
  };
  tooltip: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TooltipStep[];
    beforeTitle: string;
    beforeContent: string;
    afterTitle: string;
    afterContent: string;
    mock: { target: string; tooltip: string; beforeHint: string; afterHint: string };
    note: string;
  };
  classLifecycle: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    flowSteps: { label: string; tone: ToneKey }[];
    lifecycleLabel: string;
    lifecycleNames: string[];
    note: string;
  };
  guarantee: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: GuaranteeItem[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePaths: string[];
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    blocks: CheckpointBlock[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroPhasesKo: HeroPhase[] = [
  {
    key: 'mutation',
    title: 'Mutation Phase',
    subtitle: 'DOM 변경',
    details: ['DOM 삽입 / 수정 / 삭제'],
    id: 'database',
    tone: 'sky',
  },
  {
    key: 'layout',
    title: 'Layout Phase',
    subtitle: 'paint 전',
    details: ['useLayoutEffect', 'class layout lifecycle', 'ref attach'],
    id: 'zap',
    tone: 'teal',
    active: true,
  },
  {
    key: 'paint',
    title: 'Browser Paint',
    subtitle: '화면 그리기',
    details: ['사용자에게 화면 표시'],
    id: 'monitor',
    tone: 'violet',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: 'paint 후',
    details: ['useEffect 실행'],
    id: 'clock',
    tone: 'blue',
  },
];

const heroPhasesEn: HeroPhase[] = [
  {
    key: 'mutation',
    title: 'Mutation Phase',
    subtitle: 'DOM changes',
    details: ['DOM insert / update / delete'],
    id: 'database',
    tone: 'sky',
  },
  {
    key: 'layout',
    title: 'Layout Phase',
    subtitle: 'before paint',
    details: ['useLayoutEffect', 'class layout lifecycle', 'ref attach'],
    id: 'zap',
    tone: 'teal',
    active: true,
  },
  {
    key: 'paint',
    title: 'Browser Paint',
    subtitle: 'render frame',
    details: ['show the screen to the user'],
    id: 'monitor',
    tone: 'violet',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: 'after paint',
    details: ['useEffect runs'],
    id: 'clock',
    tone: 'blue',
  },
];

const workItemsKo: WorkItem[] = [
  {
    title: 'useLayoutEffect',
    description: 'DOM이 변경된 직후 실행되며, 동기적으로 DOM을 읽고 보정할 수 있습니다.',
    pill: 'paint 전에 실행',
    id: 'zap',
    tone: 'teal',
  },
  {
    title: 'class layout lifecycle',
    description: 'componentDidMount / componentDidUpdate 등 layout 계열 lifecycle이 실행됩니다.',
    pill: 'paint 전에 실행',
    id: 'component',
    tone: 'violet',
  },
  {
    title: 'ref attach',
    description: '새 host instance에 ref를 연결하고 ref.current가 실제 DOM node로 갱신됩니다.',
    pill: 'paint 전에 실행',
    id: 'link',
    tone: 'cyan',
  },
];

const workItemsEn: WorkItem[] = [
  {
    title: 'useLayoutEffect',
    description: 'Runs right after DOM changes — you can read and adjust the DOM synchronously.',
    pill: 'before paint',
    id: 'zap',
    tone: 'teal',
  },
  {
    title: 'class layout lifecycle',
    description: 'Layout-tier lifecycles like componentDidMount / componentDidUpdate run here.',
    pill: 'before paint',
    id: 'component',
    tone: 'violet',
  },
  {
    title: 'ref attach',
    description:
      'Bind the ref to the new host instance — ref.current now points to the real DOM node.',
    pill: 'before paint',
    id: 'link',
    tone: 'cyan',
  },
];

const timingStepsKo: TimingStep[] = [
  { title: 'DOM mutation 완료', description: 'host tree 반영이 끝남', tone: 'sky' },
  {
    title: 'useLayoutEffect',
    description: 'DOM을 읽고 동기 보정 가능',
    tone: 'teal',
    active: true,
  },
  { title: '브라우저 paint', description: '최종 화면을 사용자에게 그리기', tone: 'violet' },
];

const timingStepsEn: TimingStep[] = [
  { title: 'DOM mutation done', description: 'host tree updates are complete', tone: 'sky' },
  {
    title: 'useLayoutEffect',
    description: 'read the DOM and adjust synchronously',
    tone: 'teal',
    active: true,
  },
  { title: 'Browser paint', description: 'show the final screen to the user', tone: 'violet' },
];

const tooltipStepsKo: TooltipStep[] = [
  { title: 'Tooltip을 렌더링한다', description: 'DOM에 Tooltip이 추가됨', tone: 'sky' },
  {
    title: '실제 height를 측정한다',
    description: 'getBoundingClientRect() 등으로 크기 / 위치 읽기',
    tone: 'teal',
  },
  {
    title: 'paint 전에 위치를 다시 계산한다',
    description: '화면이 보이기 전에 보정 완료',
    tone: 'violet',
  },
];

const tooltipStepsEn: TooltipStep[] = [
  { title: 'Render the Tooltip', description: 'Tooltip is added to the DOM', tone: 'sky' },
  {
    title: 'Measure its height',
    description: 'Use getBoundingClientRect() to read size / position',
    tone: 'teal',
  },
  {
    title: 'Recompute position before paint',
    description: 'Adjusted before the screen is shown',
    tone: 'violet',
  },
];

const guaranteeItemsKo: GuaranteeItem[] = [
  { text: 'DOM은 이미 변경되어 최신 상태입니다.' },
  { text: 'DOM을 읽어도 정확한 측정이 가능합니다.' },
  { text: '동기적으로 보정하여 사용자에게 깜빡임 없는 결과를 보여줄 수 있습니다.' },
  { text: 'ref가 연결되어 실제 DOM node에 접근할 수 있습니다.' },
];

const guaranteeItemsEn: GuaranteeItem[] = [
  { text: 'The DOM is already updated to the latest state.' },
  { text: 'You can read the DOM and get accurate measurements.' },
  { text: 'You can adjust synchronously and show a flicker-free result to the user.' },
  { text: 'Refs are bound, so you can access the real DOM node.' },
];

const codePanel1Ko = `function commitRoot(root, finishedWork, lanes, ...) {
  commitBeforeMutationEffects(root, finishedWork, lanes);
  commitMutationEffects(root, finishedWork, lanes);
  root.current = finishedWork;

  // 여기부터 Layout Phase
  commitLayoutEffects(finishedWork, root, lanes);

  // 이후 Passive Effects
  scheduleCallback(NormalSchedulerPriority, () => {
    flushPassiveEffects();
  });
}`;

const codePanel1En = `function commitRoot(root, finishedWork, lanes, ...) {
  commitBeforeMutationEffects(root, finishedWork, lanes);
  commitMutationEffects(root, finishedWork, lanes);
  root.current = finishedWork;

  // Layout Phase starts here
  commitLayoutEffects(finishedWork, root, lanes);

  // Then Passive Effects
  scheduleCallback(NormalSchedulerPriority, () => {
    flushPassiveEffects();
  });
}`;

const layoutEffectOnFiberCode = `function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork, committedLanes) {
  const flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case FunctionComponent:
    case ForwardRef:
    case SimpleMemoComponent: {
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork, committedLanes);
      if (flags & Update) {
        commitHookLayoutEffects(finishedWork, HookLayout | HookHasEffect);
      }
      break;
    }
    case ClassComponent: {
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork, committedLanes);
      if (flags & Update) {
        commitClassLayoutLifecycles(finishedWork, current);
      }
      if (flags & Ref) {
        safelyAttachRef(finishedWork, finishedWork.return);
      }
      break;
    }
    // ...
  }
}`;

const heroCode = 'commitLayoutEffects(finishedWork, root, lanes);';

const ko: LayoutPhaseContent = {
  hero: {
    badge: 'Commit Phase · 9/10단계',
    title: {
      line1: 'DOM이 바뀐 직후,',
      line2: '브라우저가 다시 그리기 전,',
      line3: 'React는 layout 작업을 실행합니다.',
    },
    description:
      '이 시점에는 변경된 DOM을 읽어야 하는 작업이 들어갑니다. 대표적으로 useLayoutEffect와 일부 class lifecycle이 여기에 연결됩니다.',
    diagram: {
      title: 'Commit Phase의 시간 흐름 (핵심 구간)',
      phases: heroPhasesKo,
      code: heroCode,
    },
  },
  workItems: {
    badge: '01',
    eyebrow: 'layout 작업 항목',
    title: 'Layout Phase에서 처리되는 것들',
    description: 'DOM mutation 직후, paint 전에 일어나는 작업들입니다.',
    items: workItemsKo,
  },
  timing: {
    badge: '02',
    eyebrow: '실행 시점',
    title: 'useLayoutEffect 시점',
    description:
      'DOM이 갱신된 직후이지만 화면이 그려지기 전, 그 사이에 useLayoutEffect가 들어갑니다.',
    steps: timingStepsKo,
    note: 'paint 전에 DOM을 읽고 보정할 수 있습니다.',
  },
  tooltip: {
    badge: '03',
    eyebrow: '툴팁 측정',
    title: 'Tooltip 측정 예시',
    description: 'Layout Phase가 가장 필요한 대표 사례 — Tooltip 위치 보정입니다.',
    steps: tooltipStepsKo,
    beforeTitle: '보정 전 (잘못된 위치)',
    beforeContent: '도움말 텍스트가 대상 아래로 어색하게 튀어나간 상태',
    afterTitle: '보정 후 (정확한 위치)',
    afterContent: '측정 결과를 반영해 적절한 위치로 정렬된 상태',
    mock: {
      target: '대상',
      tooltip: '도움말 텍스트',
      beforeHint: '대상에서 떨어진 위치',
      afterHint: '측정 후 보정된 위치',
    },
    note: '브라우저가 그리기 전에 올바른 위치로 보정되어 깜빡임이 없습니다.',
  },
  classLifecycle: {
    badge: '04',
    eyebrow: '클래스 생명주기',
    title: 'class lifecycle 연결',
    description: 'Class Component에서는 mutation 이후 layout 시점 lifecycle이 실행됩니다.',
    flowSteps: [
      { label: 'DOM mutation', tone: 'sky' },
      { label: 'class layout lifecycle', tone: 'violet' },
      { label: 'paint', tone: 'teal' },
    ],
    lifecycleLabel: 'lifecycle 이름',
    lifecycleNames: ['componentDidMount', 'componentDidUpdate'],
    note: 'componentDidMount / componentDidUpdate는 commit layout 시점에 동기적으로 호출됩니다.',
  },
  guarantee: {
    badge: '05',
    eyebrow: 'layout 보장',
    title: 'Layout Phase에서 보장되는 것',
    description: '이 시점에 React가 안전하게 보장하는 4가지입니다.',
    items: guaranteeItemsKo,
  },
  checkpoint: {
    badge: '06',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
    ],
    lookForLabel: '볼 것',
    lookFor:
      'commitLayoutEffects, commitLayoutEffectOnFiber, commitHookLayoutEffects, commitClassLayoutLifecycles',
    whyLabel: '설명',
    why: 'layout effects는 Mutation 이후, Browser Paint 이전에 동기적으로 실행됩니다.',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: codePanel1Ko,
        primaryCta: 'ReactFiberWorkLoop.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: layoutEffectOnFiberCode,
        primaryCta: 'ReactFiberCommitWork.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Passive Effects',
    description:
      'Layout Phase까지 이해했다면, 마지막으로 commit 이후 이어지는 Passive Effects까지 정리해봅니다.',
    cta: '다음 페이지로 이동',
    href: '/passive-effects',
  },
};

const en: LayoutPhaseContent = {
  hero: {
    badge: 'Commit Phase · 9/10',
    title: {
      line1: 'Right after the DOM changes,',
      line2: 'before the browser repaints,',
      line3: 'React runs layout work.',
    },
    description:
      'This is where DOM-reading work happens. Most notably useLayoutEffect and a subset of class lifecycles plug in here.',
    diagram: {
      title: 'Time flow of the Commit Phase (key span)',
      phases: heroPhasesEn,
      code: heroCode,
    },
  },
  workItems: {
    badge: '01',
    eyebrow: 'WORK ITEMS',
    title: 'What gets handled in the Layout Phase',
    description: 'Work that happens right after DOM mutation, before paint.',
    items: workItemsEn,
  },
  timing: {
    badge: '02',
    eyebrow: 'TIMING',
    title: 'When useLayoutEffect runs',
    description: 'Right after DOM updates but before paint — useLayoutEffect slots in between.',
    steps: timingStepsEn,
    note: 'You can read and adjust the DOM before paint.',
  },
  tooltip: {
    badge: '03',
    eyebrow: 'TOOLTIP MEASURE',
    title: 'Tooltip measurement example',
    description: 'The canonical case for the Layout Phase — Tooltip position correction.',
    steps: tooltipStepsEn,
    beforeTitle: 'Before fix (wrong position)',
    beforeContent: 'The help text awkwardly hangs below the target.',
    afterTitle: 'After fix (correct position)',
    afterContent: 'Aligned to the right spot using the measured rect.',
    mock: {
      target: 'target',
      tooltip: 'Help text',
      beforeHint: 'detached from the target',
      afterHint: 'corrected after measuring',
    },
    note: 'Adjusted before the browser paints — no flicker.',
  },
  classLifecycle: {
    badge: '04',
    eyebrow: 'CLASS LIFECYCLE',
    title: 'class lifecycle linkage',
    description: 'In Class Components, layout-tier lifecycles run after mutation.',
    flowSteps: [
      { label: 'DOM mutation', tone: 'sky' },
      { label: 'class layout lifecycle', tone: 'violet' },
      { label: 'paint', tone: 'teal' },
    ],
    lifecycleLabel: 'Lifecycle names',
    lifecycleNames: ['componentDidMount', 'componentDidUpdate'],
    note: 'componentDidMount / componentDidUpdate are called synchronously at the commit-layout moment.',
  },
  guarantee: {
    badge: '05',
    eyebrow: 'LAYOUT GUARANTEE',
    title: 'What the Layout Phase guarantees',
    description: 'Four guarantees React makes at this point.',
    items: guaranteeItemsEn,
  },
  checkpoint: {
    badge: '06',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
    ],
    lookForLabel: 'Look for',
    lookFor:
      'commitLayoutEffects, commitLayoutEffectOnFiber, commitHookLayoutEffects, commitClassLayoutLifecycles',
    whyLabel: 'Why',
    why: 'Layout effects run synchronously after Mutation and before Browser Paint.',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: codePanel1En,
        primaryCta: 'Read ReactFiberWorkLoop.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: layoutEffectOnFiberCode,
        primaryCta: 'Read ReactFiberCommitWork.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Passive Effects',
    description:
      'With the Layout Phase covered, lastly the Passive Effects that follow the commit.',
    cta: 'Go to the next page',
    href: '/passive-effects',
  },
};

export const layoutPhaseContent: Record<Locale, LayoutPhaseContent> = { ko, en };
