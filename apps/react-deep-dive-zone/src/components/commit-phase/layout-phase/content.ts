import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type HeroPhaseIcon = 'database' | 'zap' | 'monitor' | 'clock';

export type HeroPhase = {
  key: string;
  title: string;
  subtitle: string;
  details: string[];
  iconName: HeroPhaseIcon;
  tone: CommitToneKey;
  active?: boolean;
};

export type WorkItemIcon = 'zap' | 'component' | 'link';

export type WorkItem = {
  title: string;
  description: string;
  pill: string;
  iconName: WorkItemIcon;
  tone: CommitToneKey;
};

export type TimingStep = {
  title: string;
  description: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type TooltipStep = {
  title: string;
  description: string;
  tone: CommitToneKey;
};

export type GuaranteeItem = { text: string };

export type PhaseStripItem = {
  label: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type CodePanel = {
  title: string;
  fileLabel: string;
  code: string;
};

export type LayoutPhaseContent = {
  hero: {
    pills: { label: string; tone: 'sky' | 'slate' }[];
    title: { line1: string; line2: string; line3: string; line4: string };
    description: string;
    insight: string;
    diagram: {
      title: string;
      phases: HeroPhase[];
    };
  };
  workItems: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    items: WorkItem[];
  };
  timing: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TimingStep[];
    bottomMessage: string;
  };
  tooltip: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TooltipStep[];
    beforeTitle: string;
    beforeContent: string;
    afterTitle: string;
    afterContent: string;
    bottomMessage: string;
  };
  classLifecycle: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    flowSteps: { label: string; tone: CommitToneKey }[];
    lifecycleNames: string[];
    note: string;
  };
  guarantee: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    items: GuaranteeItem[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePaths: string[];
      watchLabel: string;
      watchItems: string[];
      questionLabel: string;
      question: string;
    };
    phaseStrip: PhaseStripItem[];
    panels: CodePanel[];
    insight: string;
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    tip: string;
  };
  cta: {
    description: string;
    primaryLabel: string;
    primaryHref: string;
  };
};

const heroPhasesKo: HeroPhase[] = [
  {
    key: 'mutation',
    title: 'Mutation Phase',
    subtitle: 'DOM 변경',
    details: ['DOM 삽입 / 수정 / 삭제'],
    iconName: 'database',
    tone: 'sky',
  },
  {
    key: 'layout',
    title: 'Layout Phase',
    subtitle: 'paint 전',
    details: ['useLayoutEffect', 'class layout lifecycle', 'ref attach'],
    iconName: 'zap',
    tone: 'teal',
    active: true,
  },
  {
    key: 'paint',
    title: 'Browser Paint',
    subtitle: '화면 그리기',
    details: ['사용자에게 화면 표시'],
    iconName: 'monitor',
    tone: 'violet',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: 'paint 후',
    details: ['useEffect 실행'],
    iconName: 'clock',
    tone: 'blue',
  },
];

const heroPhasesEn: HeroPhase[] = [
  {
    key: 'mutation',
    title: 'Mutation Phase',
    subtitle: 'DOM changes',
    details: ['DOM insert / update / delete'],
    iconName: 'database',
    tone: 'sky',
  },
  {
    key: 'layout',
    title: 'Layout Phase',
    subtitle: 'before paint',
    details: ['useLayoutEffect', 'class layout lifecycle', 'ref attach'],
    iconName: 'zap',
    tone: 'teal',
    active: true,
  },
  {
    key: 'paint',
    title: 'Browser Paint',
    subtitle: 'render frame',
    details: ['show the screen to the user'],
    iconName: 'monitor',
    tone: 'violet',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: 'after paint',
    details: ['useEffect runs'],
    iconName: 'clock',
    tone: 'blue',
  },
];

const workItemsKo: WorkItem[] = [
  {
    title: 'useLayoutEffect',
    description: 'DOM이 변경된 직후 실행되며, 동기적으로 DOM을 읽고 보정할 수 있습니다.',
    pill: 'paint 전에 실행',
    iconName: 'zap',
    tone: 'teal',
  },
  {
    title: 'class layout lifecycle',
    description: 'componentDidMount / componentDidUpdate 등 layout 계열 lifecycle이 실행됩니다.',
    pill: 'paint 전에 실행',
    iconName: 'component',
    tone: 'violet',
  },
  {
    title: 'ref attach',
    description: '새 host instance에 ref를 연결하고 ref.current가 실제 DOM node로 갱신됩니다.',
    pill: 'paint 전에 실행',
    iconName: 'link',
    tone: 'cyan',
  },
];

const workItemsEn: WorkItem[] = [
  {
    title: 'useLayoutEffect',
    description: 'Runs right after DOM changes — you can read and adjust the DOM synchronously.',
    pill: 'before paint',
    iconName: 'zap',
    tone: 'teal',
  },
  {
    title: 'class layout lifecycle',
    description: 'Layout-tier lifecycles like componentDidMount / componentDidUpdate run here.',
    pill: 'before paint',
    iconName: 'component',
    tone: 'violet',
  },
  {
    title: 'ref attach',
    description:
      'Bind the ref to the new host instance — ref.current now points to the real DOM node.',
    pill: 'before paint',
    iconName: 'link',
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

const phaseStripKo: PhaseStripItem[] = [
  { label: 'Before Mutation', tone: 'violet' },
  { label: 'Mutation', tone: 'sky' },
  { label: 'Layout', tone: 'teal', active: true },
  { label: 'Passive Effects', tone: 'blue' },
];

const phaseStripEn: PhaseStripItem[] = [
  { label: 'Before Mutation', tone: 'violet' },
  { label: 'Mutation', tone: 'sky' },
  { label: 'Layout', tone: 'teal', active: true },
  { label: 'Passive Effects', tone: 'blue' },
];

const codePanel1Ko = `function commitRoot(root, finishedWork, lanes, ...) {
  commitBeforeMutationEffects(root, finishedWork);
  commitMutationEffects(root, finishedWork, lanes);

  // 여기부터 Layout Phase
  commitLayoutEffects(finishedWork, root, lanes);

  // 이후 Passive Effects
  schedulePassiveEffects(root, lanes);
}`;

const codePanel2Ko = `function commitLayoutEffectOnFiber(finishedWork, root, lanes) {
  const flags = finishedWork.flags;

  if (flags & Update) {
    if (isFunctionComponent(finishedWork.type)) {
      // useLayoutEffect / useInsertionEffect 식별
      commitHookLayoutEffects(finishedWork);
    } else {
      // class component의 layout lifecycle 호출
      commitClassLayoutLifecycles(finishedWork, root, lanes);
    }
  }
}`;

const codePanel1En = `function commitRoot(root, finishedWork, lanes, ...) {
  commitBeforeMutationEffects(root, finishedWork);
  commitMutationEffects(root, finishedWork, lanes);

  // Layout Phase starts here
  commitLayoutEffects(finishedWork, root, lanes);

  // Then Passive Effects
  schedulePassiveEffects(root, lanes);
}`;

const codePanel2En = `function commitLayoutEffectOnFiber(finishedWork, root, lanes) {
  const flags = finishedWork.flags;

  if (flags & Update) {
    if (isFunctionComponent(finishedWork.type)) {
      // useLayoutEffect / useInsertionEffect
      commitHookLayoutEffects(finishedWork);
    } else {
      // class component layout lifecycle
      commitClassLayoutLifecycles(finishedWork, root, lanes);
    }
  }
}`;

const ko: LayoutPhaseContent = {
  hero: {
    pills: [
      { label: 'React 내부 구조 읽기 시리즈', tone: 'sky' },
      { label: 'Chapter 28', tone: 'slate' },
    ],
    title: {
      line1: 'DOM이 바뀐 직후,',
      line2: '브라우저가 다시 그리기 전,',
      line3: 'React는 layout 작업을',
      line4: '실행합니다.',
    },
    description:
      '이 시점에는 변경된 DOM을 읽어야 하는 작업이 들어갑니다. 대표적으로 useLayoutEffect와 일부 class lifecycle이 여기에 연결됩니다.',
    insight: 'Layout Phase는 DOM mutation 이후, 브라우저 paint 전에 실행됩니다.',
    diagram: {
      title: 'Commit Phase의 시간 흐름 (핵심 구간)',
      phases: heroPhasesKo,
    },
  },
  workItems: {
    number: '1',
    eyebrow: 'layout-work-items',
    title: 'Layout Phase에서 처리되는 것들',
    description: 'DOM mutation 직후, paint 전에 일어나는 작업들입니다.',
    items: workItemsKo,
  },
  timing: {
    number: '2',
    eyebrow: 'use-layout-effect-timing',
    title: 'useLayoutEffect 시점',
    description:
      'DOM이 갱신된 직후이지만 화면이 그려지기 전, 그 사이에 useLayoutEffect가 들어갑니다.',
    steps: timingStepsKo,
    bottomMessage: 'paint 전에 DOM을 읽고 보정할 수 있습니다.',
  },
  tooltip: {
    number: '3',
    eyebrow: 'tooltip-measurement',
    title: 'Tooltip 측정 예시',
    description: 'Layout Phase가 가장 필요한 대표 사례 — Tooltip 위치 보정입니다.',
    steps: tooltipStepsKo,
    beforeTitle: '보정 전 (잘못된 위치)',
    beforeContent: '도움말 텍스트가 대상 아래로 어색하게 튀어나간 상태',
    afterTitle: '보정 후 (정확한 위치)',
    afterContent: '측정 결과를 반영해 적절한 위치로 정렬된 상태',
    bottomMessage: '브라우저가 그리기 전에 올바른 위치로 보정되어 깜빡임이 없습니다.',
  },
  classLifecycle: {
    number: '4',
    eyebrow: 'class-lifecycle',
    title: 'class lifecycle 연결',
    description: 'Class Component에서는 mutation 이후 layout 시점 lifecycle이 실행됩니다.',
    flowSteps: [
      { label: 'DOM mutation', tone: 'sky' },
      { label: 'class layout lifecycle', tone: 'violet' },
      { label: 'paint', tone: 'teal' },
    ],
    lifecycleNames: ['componentDidMount', 'componentDidUpdate'],
    note: 'componentDidMount / componentDidUpdate는 commit layout 시점에 동기적으로 호출됩니다.',
  },
  guarantee: {
    number: '5',
    eyebrow: 'layout-guarantee',
    title: 'Layout Phase에서 보장되는 것',
    description: '이 시점에 React가 안전하게 보장하는 4가지입니다.',
    items: guaranteeItemsKo,
  },
  checkpoint: {
    number: '6',
    eyebrow: 'code-checkpoint',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePaths: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
      watchLabel: '볼 것',
      watchItems: ['layout effects 진입 흐름', 'function / class 분기'],
      questionLabel: '학습 질문',
      question: 'DOM mutation 후, paint 전 실행되는 작업은 어디에 위치할까?',
    },
    phaseStrip: phaseStripKo,
    panels: [
      {
        title: 'ReactFiberWorkLoop.js (commitRoot 내부 일부)',
        fileLabel: 'ReactFiberWorkLoop.js',
        code: codePanel1Ko,
      },
      {
        title: 'ReactFiberCommitWork.js (commitLayoutEffects 내부)',
        fileLabel: 'ReactFiberCommitWork.js',
        code: codePanel2Ko,
      },
    ],
    insight: 'layout effects는 Mutation 이후, Browser Paint 이전에 동기적으로 실행됩니다.',
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question:
      '화면이 보이기 전에 DOM 크기를 읽고 즉시 위치를 보정해야 한다면 어느 effect가 적절할까?',
    answer: 'useLayoutEffect. DOM mutation 이후, paint 전에 동기적으로 실행되어 보정이 가능합니다.',
    tip: 'useEffect는 paint 이후 비동기로 실행되므로, 이미 한 번 화면이 그려진 뒤에 동작합니다. 깜빡임이 생길 수 있습니다.',
  },
  cta: {
    description:
      'Layout Phase까지 이해했다면, 마지막으로 commit 이후 이어지는 Passive Effects까지 정리해봅니다.',
    primaryLabel: '다음: Passive Effects',
    primaryHref: '/passive-effects',
  },
};

const en: LayoutPhaseContent = {
  hero: {
    pills: [
      { label: 'React Internals Reading Series', tone: 'sky' },
      { label: 'Chapter 28', tone: 'slate' },
    ],
    title: {
      line1: 'Right after the DOM changes,',
      line2: 'before the browser repaints,',
      line3: 'React runs',
      line4: 'layout work.',
    },
    description:
      'This is where DOM-reading work happens. Most notably useLayoutEffect and a subset of class lifecycles plug in here.',
    insight: 'Layout Phase runs after DOM mutation and before the browser paints.',
    diagram: {
      title: 'Time flow of the Commit Phase (key span)',
      phases: heroPhasesEn,
    },
  },
  workItems: {
    number: '1',
    eyebrow: 'layout-work-items',
    title: 'What gets handled in the Layout Phase',
    description: 'Work that happens right after DOM mutation, before paint.',
    items: workItemsEn,
  },
  timing: {
    number: '2',
    eyebrow: 'use-layout-effect-timing',
    title: 'When useLayoutEffect runs',
    description: 'Right after DOM updates but before paint — useLayoutEffect slots in between.',
    steps: timingStepsEn,
    bottomMessage: 'You can read and adjust the DOM before paint.',
  },
  tooltip: {
    number: '3',
    eyebrow: 'tooltip-measurement',
    title: 'Tooltip measurement example',
    description: 'The canonical case for the Layout Phase — Tooltip position correction.',
    steps: tooltipStepsEn,
    beforeTitle: 'Before fix (wrong position)',
    beforeContent: 'The help text awkwardly hangs below the target.',
    afterTitle: 'After fix (correct position)',
    afterContent: 'Aligned to the right spot using the measured rect.',
    bottomMessage: 'Adjusted before the browser paints — no flicker.',
  },
  classLifecycle: {
    number: '4',
    eyebrow: 'class-lifecycle',
    title: 'class lifecycle linkage',
    description: 'In Class Components, layout-tier lifecycles run after mutation.',
    flowSteps: [
      { label: 'DOM mutation', tone: 'sky' },
      { label: 'class layout lifecycle', tone: 'violet' },
      { label: 'paint', tone: 'teal' },
    ],
    lifecycleNames: ['componentDidMount', 'componentDidUpdate'],
    note: 'componentDidMount / componentDidUpdate are called synchronously at the commit-layout moment.',
  },
  guarantee: {
    number: '5',
    eyebrow: 'layout-guarantee',
    title: 'What the Layout Phase guarantees',
    description: 'Four guarantees React makes at this point.',
    items: guaranteeItemsEn,
  },
  checkpoint: {
    number: '6',
    eyebrow: 'code-checkpoint',
    title: 'Source code checkpoint',
    info: {
      fileLabel: 'Files',
      filePaths: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
      watchLabel: 'Watch',
      watchItems: ['Layout effects entry flow', 'function / class branching'],
      questionLabel: 'Learning question',
      question: 'Where does the work after DOM mutation but before paint sit?',
    },
    phaseStrip: phaseStripEn,
    panels: [
      {
        title: 'ReactFiberWorkLoop.js (excerpt of commitRoot)',
        fileLabel: 'ReactFiberWorkLoop.js',
        code: codePanel1En,
      },
      {
        title: 'ReactFiberCommitWork.js (inside commitLayoutEffects)',
        fileLabel: 'ReactFiberCommitWork.js',
        code: codePanel2En,
      },
    ],
    insight: 'Layout effects run synchronously after Mutation and before Browser Paint.',
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: 'Mini quiz',
    question:
      'If you must read DOM size and immediately fix position before the screen appears, which effect fits?',
    answer:
      'useLayoutEffect. It runs synchronously after DOM mutation and before paint, so the fix is possible.',
    tip: 'useEffect runs asynchronously after paint, which means the screen has already been drawn once — flicker can occur.',
  },
  cta: {
    description:
      'With the Layout Phase covered, lastly the Passive Effects that follow the commit.',
    primaryLabel: 'Next: Passive Effects',
    primaryHref: '/passive-effects',
  },
};

export const layoutPhaseContent: Record<Locale, LayoutPhaseContent> = { ko, en };
