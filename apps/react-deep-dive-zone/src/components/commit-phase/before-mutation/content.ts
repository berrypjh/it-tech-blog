import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type PhaseTimelineStep = {
  key: string;
  title: string;
  subtitle: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type WhyCardIcon = 'mapPin' | 'save' | 'target';

export type WhyCard = {
  title: string;
  subtitle: string;
  description: string;
  iconName: WhyCardIcon;
  tone: CommitToneKey;
};

export type MiniTimelineStep = {
  label: string;
  description: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type SnapshotFlowStep = {
  title: string;
  description?: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type ClassSnapshotStep = {
  title: string;
  description?: string;
  iconName: 'box' | 'function' | 'archive';
  tone: CommitToneKey;
};

export type PipelineFunction = {
  name: string;
  description: string;
  tone: CommitToneKey;
  active?: boolean;
};

export type ModernStep = {
  label: string;
  subLabel?: string;
  tone: CommitToneKey;
};

export type BeforeMutationContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    insight: string;
    diagram: {
      title: string;
      leftTitle: string;
      leftCode: string;
      centerLabel: string;
      rightTitle: string;
      rightCode: string;
      phaseTimeline: PhaseTimelineStep[];
    };
  };
  why: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: WhyCard[];
    miniTimeline: MiniTimelineStep[];
  };
  snapshot: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeCard: {
      title: string;
      items: { label: string; value: string }[];
    };
    flowSteps: SnapshotFlowStep[];
    afterCard: {
      title: string;
      items: { label: string; value: string }[];
    };
  };
  classSnapshot: {
    number: string;
    eyebrow: string;
    title: string;
    steps: ClassSnapshotStep[];
    description: string;
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
    code: {
      title: string;
      code: string;
    };
    snapshotCallout: {
      title: string;
      items: string[];
    };
    pipelineTitle: string;
    pipeline: PipelineFunction[];
  };
  rootPerspective: {
    number: string;
    eyebrow: string;
    title: string;
    description: { line1: string; line2: string };
    leftCardTitle: string;
    leftCardLabel: string;
    centerCardTitle: string;
    centerCardLabel: string;
    rightCardTitle: string;
    rightCardLabel: string;
  };
  modern: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ModernStep[];
    coreCallout: string;
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    tip: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroLeftCodeKo = `<div id="root">
  <header>Title</header>
  <ul>
    <li>A</li>
    <li>B</li>
    <li>C</li>
  </ul>
</div>`;

const heroRightCodeKo = `<div id="root">
  <header>Title</header>
  <ul>
    <li>B</li>
    <li>C</li>
    <li>D</li>
  </ul>
</div>`;

const phaseTimelineKo: PhaseTimelineStep[] = [
  {
    key: 'before',
    title: 'Before Mutation',
    subtitle: '읽기 / snapshot',
    tone: 'teal',
    active: true,
  },
  { key: 'mutation', title: 'Mutation', subtitle: 'DOM 변경', tone: 'sky' },
  { key: 'layout', title: 'Layout', subtitle: 'ref / layout effect', tone: 'violet' },
  { key: 'passive', title: 'Passive Effects', subtitle: 'useEffect', tone: 'orange' },
];

const phaseTimelineEn: PhaseTimelineStep[] = [
  {
    key: 'before',
    title: 'Before Mutation',
    subtitle: 'read / snapshot',
    tone: 'teal',
    active: true,
  },
  { key: 'mutation', title: 'Mutation', subtitle: 'DOM changes', tone: 'sky' },
  { key: 'layout', title: 'Layout', subtitle: 'ref / layout effect', tone: 'violet' },
  { key: 'passive', title: 'Passive Effects', subtitle: 'useEffect', tone: 'orange' },
];

const whyCardsKo: WhyCard[] = [
  {
    title: '변경 전 위치 기억',
    subtitle: '스크롤 / 레이아웃',
    description:
      'DOM이 바뀌면 스크롤 위치, 요소 위치가 즉시 달라질 수 있습니다. 변경 전에 읽어두어야 합니다.',
    iconName: 'mapPin',
    tone: 'teal',
  },
  {
    title: '변경 전 값을 보존',
    subtitle: 'snapshot',
    description:
      '이전 props/state에 기반한 로직이나 애니메이션에 쓸 값 등을 필요한 값만 안전하게 보존합니다.',
    iconName: 'save',
    tone: 'sky',
  },
  {
    title: 'mutation 이후 처리에 필요한 기준 확보',
    subtitle: 'layout 단계 기준',
    description: 'Layout 단계나 effect 실행 시 정확한 비교와 계산을 위한 기준을 미리 확보합니다.',
    iconName: 'target',
    tone: 'violet',
  },
];

const whyCardsEn: WhyCard[] = [
  {
    title: 'Remember positions before changes',
    subtitle: 'scroll / layout',
    description:
      'DOM mutations can immediately move scroll and element positions. They must be read beforehand.',
    iconName: 'mapPin',
    tone: 'teal',
  },
  {
    title: 'Preserve values before changes',
    subtitle: 'snapshot',
    description:
      'Safely keep values tied to the previous props/state — for logic or animation that still needs them.',
    iconName: 'save',
    tone: 'sky',
  },
  {
    title: 'Capture baselines for post-mutation work',
    subtitle: 'layout baseline',
    description:
      'Capture the baseline needed for accurate comparison and calculation in Layout effects.',
    iconName: 'target',
    tone: 'violet',
  },
];

const miniTimelineKo: MiniTimelineStep[] = [
  { label: 'Before Mutation', description: '읽기 단계', tone: 'teal', active: true },
  { label: 'Mutation', description: '쓰기 단계', tone: 'sky' },
  { label: 'Layout', description: '사용 단계', tone: 'violet' },
  { label: 'Passive', description: '비동기 단계', tone: 'orange' },
];

const miniTimelineEn: MiniTimelineStep[] = [
  { label: 'Before Mutation', description: 'read step', tone: 'teal', active: true },
  { label: 'Mutation', description: 'write step', tone: 'sky' },
  { label: 'Layout', description: 'use step', tone: 'violet' },
  { label: 'Passive', description: 'async step', tone: 'orange' },
];

const snapshotFlowStepsKo: SnapshotFlowStep[] = [
  { title: '현재 DOM 상태', tone: 'sky' },
  {
    title: 'Before Mutation에서 읽기',
    description: 'snapshot 확보',
    tone: 'teal',
    active: true,
  },
  { title: 'DOM 변경', description: 'Mutation', tone: 'orange' },
  {
    title: 'Layout 단계에서 활용 가능',
    description: 'ref / layout effect에서 사용',
    tone: 'violet',
  },
];

const snapshotFlowStepsEn: SnapshotFlowStep[] = [
  { title: 'Current DOM state', tone: 'sky' },
  {
    title: 'Read in Before Mutation',
    description: 'snapshot captured',
    tone: 'teal',
    active: true,
  },
  { title: 'DOM changes', description: 'Mutation', tone: 'orange' },
  { title: 'Usable in Layout step', description: 'used by ref / layout effect', tone: 'violet' },
];

const classSnapshotStepsKo: ClassSnapshotStep[] = [
  { title: 'Class Component', iconName: 'box', tone: 'sky' },
  {
    title: 'getSnapshotBeforeUpdate(prevProps, prevState)',
    iconName: 'function',
    tone: 'violet',
  },
  { title: 'mutation 직전의 값 보존', iconName: 'archive', tone: 'teal' },
];

const classSnapshotStepsEn: ClassSnapshotStep[] = [
  { title: 'Class Component', iconName: 'box', tone: 'sky' },
  {
    title: 'getSnapshotBeforeUpdate(prevProps, prevState)',
    iconName: 'function',
    tone: 'violet',
  },
  { title: 'Preserve values right before mutation', iconName: 'archive', tone: 'teal' },
];

const codeKo = `function commitBeforeMutationEffects(root: FiberRoot, firstChild: Fiber): void {
  // 변경 직전: Snapshot flag가 있는 컴포넌트를 찾아 처리
  nextEffect = firstChild;

  while (nextEffect !== null) {
    const effectTag = nextEffect.flags;

    if ((effectTag & Snapshot) !== NoFlags) {
      // ClassComponent의 getSnapshotBeforeUpdate 호출
      const instance = nextEffect.stateNode;

      if (instance !== null && typeof instance.getSnapshotBeforeUpdate === 'function') {
        const snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);

        instance.__reactInternalSnapshotBeforeUpdate = snapshot;
      }
    }

    nextEffect = nextEffect.nextEffect;
  }
}`;

const codeEn = `function commitBeforeMutationEffects(root: FiberRoot, firstChild: Fiber): void {
  // Right before mutation: find components carrying the Snapshot flag and process them
  nextEffect = firstChild;

  while (nextEffect !== null) {
    const effectTag = nextEffect.flags;

    if ((effectTag & Snapshot) !== NoFlags) {
      // Call getSnapshotBeforeUpdate on the ClassComponent
      const instance = nextEffect.stateNode;

      if (instance !== null && typeof instance.getSnapshotBeforeUpdate === 'function') {
        const snapshot = instance.getSnapshotBeforeUpdate(prevProps, prevState);

        instance.__reactInternalSnapshotBeforeUpdate = snapshot;
      }
    }

    nextEffect = nextEffect.nextEffect;
  }
}`;

const pipelineKo: PipelineFunction[] = [
  {
    name: 'commitBeforeMutationEffects',
    description: '읽기 / snapshot',
    tone: 'teal',
    active: true,
  },
  { name: 'commitMutationEffects', description: 'DOM 변경', tone: 'sky' },
  { name: 'commitLayoutEffects', description: 'ref / layout effect', tone: 'violet' },
  { name: 'commitPassiveMountEffects', description: 'passive effect 실행', tone: 'orange' },
  { name: 'commitPassiveUnmountEffects', description: 'passive cleanup 실행', tone: 'rose' },
];

const pipelineEn: PipelineFunction[] = [
  {
    name: 'commitBeforeMutationEffects',
    description: 'read / snapshot',
    tone: 'teal',
    active: true,
  },
  { name: 'commitMutationEffects', description: 'DOM mutations', tone: 'sky' },
  { name: 'commitLayoutEffects', description: 'ref / layout effect', tone: 'violet' },
  { name: 'commitPassiveMountEffects', description: 'run passive effect', tone: 'orange' },
  { name: 'commitPassiveUnmountEffects', description: 'run passive cleanup', tone: 'rose' },
];

const modernStepsKo: ModernStep[] = [
  { label: 'Snapshot 처리', subLabel: 'Class 컴포넌트 등', tone: 'teal' },
  { label: 'Host config 보정 / 준비', tone: 'sky' },
  { label: '기타 사전 준비', subLabel: 'before mutation', tone: 'violet' },
  { label: '다음 단계로 이동', subLabel: 'Mutation', tone: 'orange' },
];

const modernStepsEn: ModernStep[] = [
  { label: 'Snapshot handling', subLabel: 'Class components etc.', tone: 'teal' },
  { label: 'Host config prep / fixup', tone: 'sky' },
  { label: 'Other pre-mutation prep', subLabel: 'before mutation', tone: 'violet' },
  { label: 'Move to next phase', subLabel: 'Mutation', tone: 'orange' },
];

const ko: BeforeMutationContent = {
  hero: {
    badge: 'Commit Phase · 3/10단계',
    title: {
      line1: 'DOM이 바뀌기 직전,',
      line2: 'React는 먼저',
      line3: '현재 상태를 읽습니다.',
    },
    description:
      '어떤 정보는 변경이 일어난 뒤에는 정확히 얻을 수 없습니다. 그래서 React는 mutation 직전에 필요한 snapshot을 확보합니다.',
    insight:
      'Before Mutation Phase는 Commit Phase의 첫 번째 단계로, DOM 변경 이전의 "읽기 전용" 단계입니다.',
    diagram: {
      title: '현재 DOM 상태를 snapshot으로 캡처',
      leftTitle: '현재 DOM (변경 전)',
      leftCode: heroLeftCodeKo,
      centerLabel: 'snapshot 캡처',
      rightTitle: '변경 후 DOM (mutation 이후)',
      rightCode: heroRightCodeKo,
      phaseTimeline: phaseTimelineKo,
    },
  },
  why: {
    number: '1',
    eyebrow: 'why-before-mutation',
    title: '왜 Before Mutation이 필요한가?',
    description:
      'DOM이 바뀌고 나면 더 이상 정확히 알 수 없는 값이 있습니다. 그래서 React는 mutation 전에 미리 읽어둡니다.',
    cards: whyCardsKo,
    miniTimeline: miniTimelineKo,
  },
  snapshot: {
    number: '2',
    eyebrow: 'snapshot-concept',
    title: 'snapshot 개념을 직관화',
    description: 'Before와 After 사이에 snapshot이 끼어들어, 변경 전의 기준값을 확보합니다.',
    beforeCard: {
      title: 'Before (현재 DOM)',
      items: [
        { label: '스크롤', value: '120px' },
        { label: '리스트', value: 'A / B / C' },
        { label: '박스 위치', value: 'top 200px' },
      ],
    },
    flowSteps: snapshotFlowStepsKo,
    afterCard: {
      title: 'After (변경 후 DOM)',
      items: [
        { label: '스크롤', value: '120px → 160px' },
        { label: '리스트', value: 'B / C / D' },
        { label: '박스 위치', value: 'top 180px' },
      ],
    },
  },
  classSnapshot: {
    number: '3',
    eyebrow: 'class-snapshot',
    title: 'class component와 getSnapshotBeforeUpdate',
    steps: classSnapshotStepsKo,
    description:
      '함수 컴포넌트 중심으로 학습해도, commit phase 이해를 위해 class snapshot 흐름은 알아두면 좋습니다.',
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePaths: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
      watchLabel: '볼 것',
      watchItems: ['commitBeforeMutationEffects', 'Snapshot flag'],
      questionLabel: '학습 질문',
      question: 'DOM이 바뀌기 직전 React는 어떤 값을 읽어둘까?',
    },
    code: {
      title: 'commitBeforeMutationEffects 관련 흐름 (React main 기준)',
      code: codeKo,
    },
    snapshotCallout: {
      title: 'Snapshot flag가 설정되는 경우',
      items: ['ClassComponent', 'getSnapshotBeforeUpdate를 구현한 경우', 'flags & Snapshot !== 0'],
    },
    pipelineTitle: 'commit pipeline 함수',
    pipeline: pipelineKo,
  },
  rootPerspective: {
    number: '5',
    eyebrow: 'root-perspective',
    title: 'Root 단위 관점에서의 Before Mutation',
    description: {
      line1: 'React는 전체 트리의 각 Fiber를 순회하며 필요한 snapshot을 읽습니다.',
      line2: '이 결과는 한 개의 Root commit 사이클 안에서 사용됩니다.',
    },
    leftCardTitle: 'Fiber 트리',
    leftCardLabel: '이전 변경이 포함된 상태',
    centerCardTitle: 'Before Mutation Phase',
    centerCardLabel: '모든 Snapshot 읽기',
    rightCardTitle: '같은 Root의 Mutation으로 연결',
    rightCardLabel: 'mutation 진입 직전',
  },
  modern: {
    number: '6',
    eyebrow: 'modern-correction',
    title: '최신 코드 보정',
    description:
      '현재 React main에서는 before mutation 흐름이 기존 snapshot 처리뿐 아니라 여러 최신 commit 보정 로직과도 연결됩니다.',
    steps: modernStepsKo,
    coreCallout: '핵심: DOM이 바뀌기 직전 읽는 단계라는 점은 동일합니다.',
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question: 'getSnapshotBeforeUpdate는 DOM이 변경된 뒤 실행될까?',
    answer: '아니다. 변경 직전에 실행된다.',
    tip: '값을 읽을 "마지막 기회"가 Mutation 직전이라는 점을 기억하세요.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Mutation Phase',
    description:
      'DOM을 바꾸기 직전 필요한 값을 확보했다면, 이제 실제 host tree를 변경하는 Mutation Phase로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/mutation-phase',
  },
};

const en: BeforeMutationContent = {
  hero: {
    badge: 'Commit Phase · 3/10',
    title: {
      line1: 'Right before the DOM changes,',
      line2: 'React first reads',
      line3: 'the current state.',
    },
    description:
      'Some information cannot be accurately recovered after a change. So React captures the needed snapshot right before mutation.',
    insight:
      'Before Mutation Phase is the first step of the Commit Phase — a "read-only" step before the DOM changes.',
    diagram: {
      title: 'Capture the current DOM state as a snapshot',
      leftTitle: 'Current DOM (before change)',
      leftCode: heroLeftCodeKo,
      centerLabel: 'snapshot capture',
      rightTitle: 'DOM after change (post-mutation)',
      rightCode: heroRightCodeKo,
      phaseTimeline: phaseTimelineEn,
    },
  },
  why: {
    number: '1',
    eyebrow: 'why-before-mutation',
    title: 'Why is Before Mutation needed?',
    description:
      'Some values cannot be accurately known once the DOM changes. React reads them up-front.',
    cards: whyCardsEn,
    miniTimeline: miniTimelineEn,
  },
  snapshot: {
    number: '2',
    eyebrow: 'snapshot-concept',
    title: 'Visualizing the snapshot concept',
    description:
      'A snapshot slips in between Before and After to lock in the baseline values from before the change.',
    beforeCard: {
      title: 'Before (current DOM)',
      items: [
        { label: 'scroll', value: '120px' },
        { label: 'list', value: 'A / B / C' },
        { label: 'box position', value: 'top 200px' },
      ],
    },
    flowSteps: snapshotFlowStepsEn,
    afterCard: {
      title: 'After (DOM after change)',
      items: [
        { label: 'scroll', value: '120px → 160px' },
        { label: 'list', value: 'B / C / D' },
        { label: 'box position', value: 'top 180px' },
      ],
    },
  },
  classSnapshot: {
    number: '3',
    eyebrow: 'class-snapshot',
    title: 'Class components and getSnapshotBeforeUpdate',
    steps: classSnapshotStepsEn,
    description:
      'Even when you focus on function components, knowing the class snapshot flow helps understand the commit phase.',
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: 'Source code checkpoint',
    info: {
      fileLabel: 'Files',
      filePaths: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
      watchLabel: 'Watch',
      watchItems: ['commitBeforeMutationEffects', 'Snapshot flag'],
      questionLabel: 'Learning question',
      question: 'What does React read right before the DOM changes?',
    },
    code: {
      title: 'commitBeforeMutationEffects flow (React main)',
      code: codeEn,
    },
    snapshotCallout: {
      title: 'When the Snapshot flag is set',
      items: [
        'ClassComponent',
        'A getSnapshotBeforeUpdate is implemented',
        'flags & Snapshot !== 0',
      ],
    },
    pipelineTitle: 'commit pipeline functions',
    pipeline: pipelineEn,
  },
  rootPerspective: {
    number: '5',
    eyebrow: 'root-perspective',
    title: 'Before Mutation from a Root-level view',
    description: {
      line1: 'React walks the whole tree and reads the snapshots each Fiber needs.',
      line2: 'The result is used within a single Root commit cycle.',
    },
    leftCardTitle: 'Fiber tree',
    leftCardLabel: 'state holding pending changes',
    centerCardTitle: 'Before Mutation Phase',
    centerCardLabel: 'read all Snapshots',
    rightCardTitle: 'Hand off to the same Root Mutation',
    rightCardLabel: 'right before mutation',
  },
  modern: {
    number: '6',
    eyebrow: 'modern-correction',
    title: 'Modern code correction',
    description:
      'In current React main, the before-mutation flow connects with broader recent commit fix-up logic, not just snapshot handling.',
    steps: modernStepsEn,
    coreCallout: 'Key: it is still the step where React reads right before the DOM changes.',
  },
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: 'Mini quiz',
    question: 'Does getSnapshotBeforeUpdate run after the DOM changes?',
    answer: 'No. It runs right before the change.',
    tip: 'Remember — the "last chance" to read values is right before Mutation.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Mutation Phase',
    description:
      'With the values needed right before DOM changes captured, we now enter the Mutation Phase that changes the host tree.',
    cta: 'Go to the next page',
    href: '/mutation-phase',
  },
};

export const beforeMutationContent: Record<Locale, BeforeMutationContent> = { ko, en };
