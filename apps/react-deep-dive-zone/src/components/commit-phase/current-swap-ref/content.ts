import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type CommitTimelineItem = {
  key: string;
  label: string;
  subLabel?: string;
  tone: ToneKey;
  active?: boolean;
};

export type TransitionStep = {
  title: string;
  description: string;
  id: 'history' | 'check' | 'wand' | 'rocket';
  tone: ToneKey;
  emphasis?: boolean;
};

export type RefTimelineId = 'eye' | 'unlink' | 'replace' | 'link' | 'check';

export type RefTimelineStep = {
  title: string;
  description: string;
  id: RefTimelineId;
  tone: ToneKey;
};

export type RefValueStep = {
  label: string;
  tone: ToneKey;
};

export type CheckpointBlock = {
  filePath: string;
  code: string;
  primaryCta: string;
  primaryHref: string;
};

export type RiskItem = {
  text: string;
  tone: ToneKey;
};

export type LifecycleStep = {
  label: string;
  value: string;
  tone: ToneKey;
};

export type RootCurrentRefContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      leftTitle: string;
      leftSubtitle: string;
      centerLabel: string;
      centerFormula: string;
      rightTitle: string;
      rightSubtitle: string;
      timeline: CommitTimelineItem[];
    };
  };
  transition: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TransitionStep[];
    formula: string;
    formulaLabel: string;
    formulaCallout: string;
  };
  refTimeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RefTimelineStep[];
    refFlowLabel: string;
    refFlow: RefValueStep[];
    note: string;
  };
  inputRef: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeTitle: string;
    code: string;
    explanationTitle: string;
    explanation: string;
    domTitle: string;
    domCode: string;
    domLabel: string;
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
  risk: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    riskCard: {
      title: string;
      subtitle: string;
      items: RiskItem[];
      warning: string;
    };
    safeCard: {
      title: string;
      subtitle: string;
      items: RiskItem[];
      safeMessage: string;
    };
  };
  lifecycle: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: LifecycleStep[];
  };
  meaning: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeSubtitle: string;
    formula: string;
    afterTitle: string;
    afterSubtitle: string;
    note: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const timelineKo: CommitTimelineItem[] = [
  { key: 'before-mutation', label: 'Before Mutation', tone: 'violet' },
  { key: 'mutation', label: 'Mutation', tone: 'sky' },
  {
    key: 'current-swap',
    label: 'root.current 전환',
    subLabel: '새 트리 기준',
    tone: 'blue',
    active: true,
  },
  { key: 'layout', label: 'Layout', tone: 'cyan' },
  { key: 'passive', label: 'Passive Effects', tone: 'amber' },
];

const timelineEn: CommitTimelineItem[] = [
  { key: 'before-mutation', label: 'Before Mutation', tone: 'violet' },
  { key: 'mutation', label: 'Mutation', tone: 'sky' },
  {
    key: 'current-swap',
    label: 'root.current swap',
    subLabel: 'new tree becomes current',
    tone: 'blue',
    active: true,
  },
  { key: 'layout', label: 'Layout', tone: 'cyan' },
  { key: 'passive', label: 'Passive Effects', tone: 'amber' },
];

const transitionStepsKo: TransitionStep[] = [
  {
    title: '기존 current tree',
    description: '화면을 대표하던 이전 Fiber 트리',
    id: 'history',
    tone: 'violet',
  },
  {
    title: 'finishedWork 계산 완료',
    description: 'Render Phase가 끝나고 새 트리가 완성됨',
    id: 'check',
    tone: 'sky',
  },
  {
    title: 'Mutation Phase 실행',
    description: 'DOM 삽입 / 수정 / 삭제가 모두 완료됨',
    id: 'wand',
    tone: 'cyan',
  },
  {
    title: '새 tree가 current로 전환',
    description: '이제 이 트리가 새로운 화면의 기준이 됨',
    id: 'rocket',
    tone: 'teal',
    emphasis: true,
  },
];

const transitionStepsEn: TransitionStep[] = [
  {
    title: 'Existing current tree',
    description: 'The previous Fiber tree that represented the screen',
    id: 'history',
    tone: 'violet',
  },
  {
    title: 'finishedWork ready',
    description: 'Render Phase finished — new tree is complete',
    id: 'check',
    tone: 'sky',
  },
  {
    title: 'Run Mutation Phase',
    description: 'DOM insert / update / delete all done',
    id: 'wand',
    tone: 'cyan',
  },
  {
    title: 'New tree becomes current',
    description: 'This tree is now the basis for the screen',
    id: 'rocket',
    tone: 'teal',
    emphasis: true,
  },
];

const refTimelineKo: RefTimelineStep[] = [
  { title: '변경 전', description: '이전 트리 기준', id: 'eye', tone: 'violet' },
  { title: 'ref detach', description: 'null로 분리', id: 'unlink', tone: 'violet' },
  { title: 'DOM mutation', description: 'Mutation Phase', id: 'replace', tone: 'sky' },
  { title: 'ref attach', description: '새 DOM 연결', id: 'link', tone: 'teal' },
  { title: '변경 후', description: '새 트리 기준', id: 'check', tone: 'teal' },
];

const refTimelineEn: RefTimelineStep[] = [
  { title: 'Before', description: 'previous tree basis', id: 'eye', tone: 'violet' },
  { title: 'ref detach', description: 'set to null', id: 'unlink', tone: 'violet' },
  { title: 'DOM mutation', description: 'Mutation Phase', id: 'replace', tone: 'sky' },
  { title: 'ref attach', description: 'bind to new DOM', id: 'link', tone: 'teal' },
  { title: 'After', description: 'new tree basis', id: 'check', tone: 'teal' },
];

const refFlowKo: RefValueStep[] = [
  { label: 'ref.current <input#old />', tone: 'violet' },
  { label: 'ref.current null', tone: 'violet' },
  { label: '... DOM 변경 중 ...', tone: 'sky' },
  { label: 'ref.current <input#new />', tone: 'teal' },
];

const refFlowEn: RefValueStep[] = [
  { label: 'ref.current <input#old />', tone: 'violet' },
  { label: 'ref.current null', tone: 'violet' },
  { label: '... DOM mutating ...', tone: 'sky' },
  { label: 'ref.current <input#new />', tone: 'teal' },
];

const formCode = `function Form() {
  const inputRef = useRef(null);

  return <input ref={inputRef} />;
}`;

const detachCode = `function commitMutationEffectsOnFiber(finishedWork, root, lanes) {
  const current = finishedWork.alternate;
  const flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case HostComponent: {
      recursivelyTraverseMutationEffects(root, finishedWork, lanes);
      commitReconciliationEffects(finishedWork, lanes);
      if (flags & Ref) {
        if (current !== null) {
          safelyDetachRef(current, current.return);
        }
      }
      // ...
    }
  }
}`;

const swapCode = `commitMutationEffects(root, finishedWork, lanes);
// ...
// The work-in-progress tree is now the current tree. This must come after
// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
root.current = finishedWork;
// ...
commitLayoutEffects(finishedWork, root, lanes);`;

const attachCode = `function commitAttachRef(finishedWork) {
  const ref = finishedWork.ref;
  if (ref !== null) {
    const instanceToUse = getPublicInstance(finishedWork.stateNode);
    if (typeof ref === 'function') {
      finishedWork.refCleanup = ref(instanceToUse);
    } else {
      ref.current = instanceToUse;
    }
  }
}`;

const riskItemsKo: RiskItem[] = [
  { text: 'DOM mutation이 아직 끝나지 않았을 수 있음', tone: 'violet' },
  { text: 'ref는 아직 detach / attach 전 상태일 수 있음', tone: 'violet' },
  { text: 'ref.current가 null이거나 이전 값을 가리킬 수 있음', tone: 'violet' },
];

const riskItemsEn: RiskItem[] = [
  { text: 'DOM mutation may not be done yet', tone: 'violet' },
  { text: 'Refs may still be pre-detach / pre-attach', tone: 'violet' },
  { text: 'ref.current may be null or point to the old node', tone: 'violet' },
];

const safeItemsKo: RiskItem[] = [
  { text: '모든 DOM mutation이 끝난 상태', tone: 'teal' },
  { text: 'ref가 새 host instance와 정확히 연결됨', tone: 'teal' },
  { text: 'ref.current는 최신 DOM node를 가리킴', tone: 'teal' },
];

const safeItemsEn: RiskItem[] = [
  { text: 'All DOM mutations are done', tone: 'teal' },
  { text: 'Refs are bound to the new host instance', tone: 'teal' },
  { text: 'ref.current points to the latest DOM node', tone: 'teal' },
];

const lifecycleStepsKo: LifecycleStep[] = [
  { label: '이전 트리', value: 'ref.current <old />', tone: 'violet' },
  { label: 'Before Mutation', value: 'ref.current null', tone: 'violet' },
  { label: 'Mutation', value: '(host 변경 없음)', tone: 'sky' },
  { label: 'After Mutation / Layout 전', value: 'ref.current <new />', tone: 'teal' },
  { label: 'Layout / Effects', value: 'ref.current <new />', tone: 'teal' },
];

const lifecycleStepsEn: LifecycleStep[] = [
  { label: 'Previous tree', value: 'ref.current <old />', tone: 'violet' },
  { label: 'Before Mutation', value: 'ref.current null', tone: 'violet' },
  { label: 'Mutation', value: '(no ref change)', tone: 'sky' },
  { label: 'After Mutation / pre-Layout', value: 'ref.current <new />', tone: 'teal' },
  { label: 'Layout / Effects', value: 'ref.current <new />', tone: 'teal' },
];

const ko: RootCurrentRefContent = {
  hero: {
    badge: 'Commit Phase · 8/10단계',
    title: {
      line1: 'DOM 변경이 끝난 뒤,',
      line2: '새 Fiber 트리가',
      line3: 'current가 됩니다.',
    },
    description:
      'Commit Phase는 단순히 DOM을 바꾸는 것에서 끝나지 않습니다. React는 새 finished tree를 현재 화면의 기준 트리로 전환하고, refs도 새 host instance에 맞게 갱신합니다.',
    diagram: {
      leftTitle: '기존 current tree',
      leftSubtitle: '이전 화면 기준',
      centerLabel: 'DOM 변경 완료',
      centerFormula: 'root.current = finishedWork;',
      rightTitle: '새 finishedWork tree',
      rightSubtitle: '계산 완료된 새 결과',
      timeline: timelineKo,
    },
  },
  transition: {
    badge: '01',
    eyebrow: 'current 트리 전환',
    title: 'current tree 전환',
    description:
      'finishedWork가 완성되고 Mutation Phase가 끝나면, React는 root.current를 새 tree로 바꿉니다.',
    steps: transitionStepsKo,
    formula: 'root.current = finishedWork;',
    formulaLabel: '전환 한 줄',
    formulaCallout: '이 한 줄이 새 트리를 현재 화면의 기준으로 만듭니다.',
  },
  refTimeline: {
    badge: '02',
    eyebrow: 'ref 분리와 연결',
    title: 'refs는 언제 detach / attach 되는가?',
    description:
      'ref detach는 mutation 이전에, ref attach는 mutation 이후에 일어납니다. 그 사이에는 ref.current가 잠깐 null이 됩니다.',
    steps: refTimelineKo,
    refFlowLabel: 'ref.current 값 변화',
    refFlow: refFlowKo,
    note: 'ref detach는 mutation 이전에 발생하고, ref attach는 mutation 이후, After Mutation 단계에서 발생합니다.',
  },
  inputRef: {
    badge: '03',
    eyebrow: 'input ref 예시',
    title: 'input ref 예시',
    description:
      'useRef로 만든 ref가 새 host instance와 어떻게 연결되는지를 단순한 input 예시로 봅니다.',
    codeTitle: '코드',
    code: formCode,
    explanationTitle: '설명',
    explanation: '새 host instance가 commit되면 ref.current도 그 최신 DOM node를 가리키게 됩니다.',
    domTitle: 'DOM',
    domCode: '<input id="name" />',
    domLabel: 'inputRef.current',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitEffects.js',
    ],
    lookForLabel: '볼 것',
    lookFor: 'safelyDetachRef, root.current, commitAttachRef',
    whyLabel: '설명',
    why: 'ref는 Mutation 중에 분리되고, root.current 전환 뒤 Layout 중에 다시 연결됩니다.',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: detachCode,
        primaryCta: 'ReactFiberCommitWork.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: swapCode,
        primaryCta: 'ReactFiberWorkLoop.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitEffects.js',
        code: attachCode,
        primaryCta: 'ReactFiberCommitEffects.js 읽기',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitEffects.js',
      },
    ],
  },
  risk: {
    badge: '05',
    eyebrow: 'render 중 ref 위험',
    title: 'Render 중 ref 읽기가 위험한 이유',
    description:
      '같은 ref라도 언제 읽느냐에 따라 가리키는 값이 다릅니다. Render Phase와 Commit 이후는 안전성이 다릅니다.',
    riskCard: {
      title: 'Render Phase',
      subtitle: '계산 중',
      items: riskItemsKo,
      warning: '따라서 Render Phase에서 DOM ref를 의존하면 일관성이 보장되지 않습니다.',
    },
    safeCard: {
      title: 'Commit 이후',
      subtitle: 'Layout 이후 시점',
      items: safeItemsKo,
      safeMessage: '안전하게 ref를 읽고 사용할 수 있는 시점입니다.',
    },
  },
  lifecycle: {
    badge: '06',
    eyebrow: 'ref 생명주기',
    title: 'refs lifecycle 정리',
    description: '단계별로 ref.current 값이 어떻게 바뀌는지 한눈에 정리합니다.',
    steps: lifecycleStepsKo,
  },
  meaning: {
    badge: '07',
    eyebrow: '전환의 의미',
    title: 'root.current 전환의 의미',
    description: '단순한 변수 대입처럼 보이지만, 이 한 줄이 "현재 화면의 기준"을 바꿉니다.',
    beforeTitle: '전환 전',
    beforeSubtitle: '이전 트리가 화면 기준',
    formula: 'root.current = finishedWork;',
    afterTitle: '전환 후',
    afterSubtitle: '새 트리가 화면 기준',
    note: '다음 업데이트는 이 새 트리를 기준으로 시작됩니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Layout Phase',
    description:
      '현재 트리 전환과 ref 처리를 이해했다면, 이제 DOM이 바뀐 직후 실행되는 Layout Phase로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/layout-phase',
  },
};

const en: RootCurrentRefContent = {
  hero: {
    badge: 'Commit Phase · 8/10',
    title: {
      line1: 'Once DOM changes finish,',
      line2: 'the new Fiber tree',
      line3: 'becomes current.',
    },
    description:
      'The Commit Phase does not end with DOM changes. React swaps the new finished tree to become the basis of the current screen, and updates refs to match the new host instances.',
    diagram: {
      leftTitle: 'existing current tree',
      leftSubtitle: 'previous screen basis',
      centerLabel: 'DOM changes done',
      centerFormula: 'root.current = finishedWork;',
      rightTitle: 'new finishedWork tree',
      rightSubtitle: 'new computed result',
      timeline: timelineEn,
    },
  },
  transition: {
    badge: '01',
    eyebrow: 'CURRENT SWAP',
    title: 'current tree transition',
    description:
      'After finishedWork is built and the Mutation Phase ends, React swaps root.current to the new tree.',
    steps: transitionStepsEn,
    formula: 'root.current = finishedWork;',
    formulaLabel: 'The swap',
    formulaCallout: 'This one line makes the new tree the basis of the current screen.',
  },
  refTimeline: {
    badge: '02',
    eyebrow: 'DETACH & ATTACH',
    title: 'When do refs detach / attach?',
    description:
      'Ref detach happens before mutation; ref attach happens after. Between them, ref.current is briefly null.',
    steps: refTimelineEn,
    refFlowLabel: 'ref.current value flow',
    refFlow: refFlowEn,
    note: 'Ref detach happens before mutation, and ref attach happens after — in the After Mutation step.',
  },
  inputRef: {
    badge: '03',
    eyebrow: 'INPUT REF',
    title: 'input ref example',
    description: 'A simple input example showing how a useRef ref connects to a new host instance.',
    codeTitle: 'Code',
    code: formCode,
    explanationTitle: 'Explanation',
    explanation:
      'Once the new host instance is committed, ref.current also points to that latest DOM node.',
    domTitle: 'DOM',
    domCode: '<input id="name" />',
    domLabel: 'inputRef.current',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePaths: [
      'packages/react-reconciler/src/ReactFiberCommitWork.js',
      'packages/react-reconciler/src/ReactFiberWorkLoop.js',
      'packages/react-reconciler/src/ReactFiberCommitEffects.js',
    ],
    lookForLabel: 'Look for',
    lookFor: 'safelyDetachRef, root.current, commitAttachRef',
    whyLabel: 'Why',
    why: 'Refs are detached during Mutation and attached again during Layout, after the root.current swap.',
    blocks: [
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitWork.js',
        code: detachCode,
        primaryCta: 'Read ReactFiberCommitWork.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitWork.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
        code: swapCode,
        primaryCta: 'Read ReactFiberWorkLoop.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js',
      },
      {
        filePath: 'packages/react-reconciler/src/ReactFiberCommitEffects.js',
        code: attachCode,
        primaryCta: 'Read ReactFiberCommitEffects.js',
        primaryHref:
          'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitEffects.js',
      },
    ],
  },
  risk: {
    badge: '05',
    eyebrow: 'REF RISK',
    title: 'Why reading refs during Render is risky',
    description:
      'The same ref can point to different values depending on when you read it. Render Phase and post-Commit are different safety zones.',
    riskCard: {
      title: 'Render Phase',
      subtitle: 'computing',
      items: riskItemsEn,
      warning: 'So relying on a DOM ref during Render is not guaranteed to be consistent.',
    },
    safeCard: {
      title: 'After Commit',
      subtitle: 'after Layout',
      items: safeItemsEn,
      safeMessage: 'A safe point to read and use the ref.',
    },
  },
  lifecycle: {
    badge: '06',
    eyebrow: 'REF LIFECYCLE',
    title: 'refs lifecycle summary',
    description: 'How ref.current changes through each step, at a glance.',
    steps: lifecycleStepsEn,
  },
  meaning: {
    badge: '07',
    eyebrow: 'SWAP MEANING',
    title: 'What the root.current swap means',
    description:
      'It looks like a simple assignment, but this line changes the "basis of the screen".',
    beforeTitle: 'Before swap',
    beforeSubtitle: 'previous tree is the screen basis',
    formula: 'root.current = finishedWork;',
    afterTitle: 'After swap',
    afterSubtitle: 'new tree is the screen basis',
    note: 'The next update starts from this new tree.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Layout Phase',
    description:
      'Now that current-tree swap and ref handling are clear, the next stop is the Layout Phase that runs right after DOM changes.',
    cta: 'Go to the next page',
    href: '/layout-phase',
  },
};

export const rootCurrentRefContent: Record<Locale, RootCurrentRefContent> = { ko, en };
