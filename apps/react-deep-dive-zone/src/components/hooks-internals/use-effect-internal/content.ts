import type { Locale } from '@it-tech-blog/preferences';

export type Tone =
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'violet'
  | 'amber'
  | 'rose'
  | 'orange'
  | 'indigo';

export type HeroPhase = {
  number: number;
  title: string;
  subtitle: string;
  items: string[];
  tone: Tone;
  visual: 'clipboard' | 'play';
};

export type FlowStep = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'play' | 'search' | 'compare' | 'box' | 'flag' | 'commit';
};

export type FieldRow = {
  name: string;
  comment: string;
  description: string;
  tone: Tone;
};

export type DepsResult = {
  result: '같음' | '다름' | 'Same' | 'Different';
  body: string[];
  tone: 'teal' | 'violet';
  visual: 'skip' | 'play';
};

export type CommitStep = {
  number: number;
  fileOrFn: string;
  description: string;
  tone: Tone;
  visual: 'file' | 'process' | 'play';
};

export type ExperimentResult = {
  transition: string;
  resultLabel: string;
  result: 'run' | 'skip';
  body: string[];
};

export type MissionItem = {
  number: string;
  title: string;
  description: string;
};

export type SummaryItem = {
  number: number;
  title: string;
  description: string;
  tone: Tone;
  visual: 'block' | 'commit' | 'branch' | 'list';
};

export type UseEffectInternalsContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    leftCode: string;
    phases: HeroPhase[];
  };
  question: {
    eyebrow: string;
    title: string;
  };
  misconception: {
    eyebrow: string;
    title: string;
    misconception: {
      label: string;
      title: string;
      body: string[];
      caption: string;
    };
    reality: {
      label: string;
      title: string;
      body: string[];
      caption: string;
    };
    vsBadge: string;
  };
  effectFlow: {
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  effectObject: {
    eyebrow: string;
    title: string;
    code: string;
    fields: FieldRow[];
  };
  depsCompare: {
    eyebrow: string;
    title: string;
    decision: string;
    decisionDetail: string;
    same: DepsResult;
    different: DepsResult;
  };
  realCode: {
    eyebrow: string;
    title: string;
    code: string;
    explanationTitle: string;
    explanation: string;
    fileLabel: string;
    fileName: string;
    buttonLabel: string;
    buttonHref: string;
  };
  commitPath: {
    eyebrow: string;
    title: string;
    steps: CommitStep[];
    cleanupNote: string;
  };
  depsExperiment: {
    eyebrow: string;
    title: string;
    codeLabel: string;
    code: string;
    codeDescription: string;
    countFlowLabel: string;
    countFlow: string;
    results: ExperimentResult[];
    runLabel: string;
    skipLabel: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    items: MissionItem[];
  };
  summary: {
    eyebrow: string;
    title: string;
    items: SummaryItem[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const HERO_CODE = `useEffect(() => {
  console.log(count);
}, [count]);`;

const EFFECT_TYPE_CODE = `type Effect = {
  tag: HookFlags;
  create: () => (() => void) | void;
  inst: {
    destroy: (() => void) | void;
    resource?: any;
  };
  deps: Array<mixed> | null;
  next: Effect;
};`;

const REAL_CODE = `hook.memoizedState = pushSimpleEffect(
  HookHasEffect | hookFlags,
  inst,
  create,
  nextDeps,
);`;

const EXPERIMENT_CODE = `useEffect(() => {
  console.log("effect run");
  return () => console.log("cleanup");
}, [count]);`;

const ko: UseEffectInternalsContent = {
  hero: {
    badge: 'Hooks 내부 · 7/10단계',
    titleLine1: 'useEffect는',
    titleAccent: '렌더 중 실행되는 코드가 아니다',
    description:
      '렌더 중에는 나중에 실행할 Effect를 기록하고, 실제 실행은 Commit 이후의 Effect 처리 단계에서 일어납니다.',
    leftCode: HERO_CODE,
    phases: [
      {
        number: 1,
        title: 'Render Phase',
        subtitle: 'Effect 등록',
        items: ['useEffect 호출', 'Effect 객체 생성', 'Fiber에 연결', '실행하지 않음'],
        tone: 'sky',
        visual: 'clipboard',
      },
      {
        number: 2,
        title: 'Commit 이후',
        subtitle: 'Effect 실행',
        items: ['DOM 반영 완료 후', 'Passive Effect 실행', 'callback 실행', 'cleanup도 여기서'],
        tone: 'teal',
        visual: 'play',
      },
    ],
  },
  question: {
    eyebrow: '오늘의 질문',
    title: 'useEffect를 만나면 React는 지금 callback을 실행할까, 아니면 실행 예약만 할까?',
  },
  misconception: {
    eyebrow: 'misconception-vs-reality',
    title: '오해와 실제',
    misconception: {
      label: '오해',
      title: '컴포넌트 렌더 중 effect callback 즉시 실행',
      body: ['렌더가 끝나자마자 callback이 호출된다고 생각한다'],
      caption: '“렌더가 끝나면 바로 실행될 것”이라고 생각하기 쉽습니다.',
    },
    reality: {
      label: '실제',
      title: 'Render Phase에서 Effect 객체 등록 / Commit 이후 Passive Effect 실행',
      body: ['Render 중에는 등록만, 실행은 Commit 이후로 미뤄진다'],
      caption: '렌더와 실행은 철저히 분리되어 있습니다.',
    },
    vsBadge: 'VS',
  },
  effectFlow: {
    eyebrow: 'effect-full-flow',
    title: 'Effect 전체 흐름',
    steps: [
      {
        number: 1,
        title: 'useEffect 호출',
        description: '컴포넌트 함수 내부에서 useEffect를 호출한다.',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'Hook 조회',
        description: '현재 Fiber의 Hook linked list에서 useEffect Hook을 찾거나 생성한다.',
        tone: 'cyan',
        visual: 'search',
      },
      {
        number: 3,
        title: 'deps 비교',
        description: '이전 deps와 새 deps를 비교해 실행 여부를 판단한다.',
        tone: 'violet',
        visual: 'compare',
      },
      {
        number: 4,
        title: 'Effect 객체 생성',
        description: 'Effect 객체를 만들어 Hook의 memoizedState에 연결한다.',
        tone: 'teal',
        visual: 'box',
      },
      {
        number: 5,
        title: 'fiber.flags 표시',
        description: 'Passive 효과가 필요하면 Fiber에 관련 flag를 표시한다.',
        tone: 'indigo',
        visual: 'flag',
      },
      {
        number: 6,
        title: 'Commit 이후 Passive Effect 실행',
        description: '커밋 완료 후 별도 단계에서 callback을 실행한다.',
        tone: 'emerald',
        visual: 'commit',
      },
    ],
  },
  effectObject: {
    eyebrow: 'effect-object',
    title: 'Effect 객체 구조',
    code: EFFECT_TYPE_CODE,
    fields: [
      {
        name: 'tag',
        comment: 'HookFlags',
        description: 'HookHasEffect | Passive | PassiveStatic 등의 플래그 조합',
        tone: 'sky',
      },
      {
        name: 'create',
        comment: '() => (() => void) | void',
        description: '실제 실행할 callback 함수 — useEffect의 첫 번째 인자',
        tone: 'teal',
      },
      {
        name: 'inst',
        comment: '{ destroy, resource? }',
        description: 'cleanup 함수가 저장되는 객체 — destroy 필드 사용',
        tone: 'orange',
      },
      {
        name: 'deps',
        comment: 'Array<mixed> | null',
        description: '의존성 배열 — 다음 렌더 시 비교에 사용',
        tone: 'violet',
      },
      {
        name: 'next',
        comment: 'Effect',
        description: '다음 Effect를 가리키는 포인터 — 단일 연결 리스트',
        tone: 'amber',
      },
    ],
  },
  depsCompare: {
    eyebrow: 'deps-comparison',
    title: 'deps 비교 흐름',
    decision: 'areHookInputsEqual(prevDeps, nextDeps)',
    decisionDetail: '이전 deps와 새 deps를 자리별로 Object.is로 비교',
    same: {
      result: '같음',
      body: ['실행 생략', 'HookHasEffect 없음', '이번 Commit에서 callback이 호출되지 않음'],
      tone: 'teal',
      visual: 'skip',
    },
    different: {
      result: '다름',
      body: ['HookHasEffect 부여', 'Commit 이후 실행', 'create() 실행 + 이전 destroy 정리'],
      tone: 'violet',
      visual: 'play',
    },
  },
  realCode: {
    eyebrow: 'real-code',
    title: '실제 코드: Effect 객체 등록',
    code: REAL_CODE,
    explanationTitle: 'useEffect는 callback을 즉시 실행하지 않고, Effect 객체로 저장한다.',
    explanation: '이 객체는 이후 Commit 단계에서 실행됩니다.',
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  commitPath: {
    eyebrow: 'commit-path',
    title: 'Commit 이후 실행 경로',
    steps: [
      {
        number: 1,
        fileOrFn: 'ReactFiberHooks.js',
        description: 'Effect 등록 — pushSimpleEffect',
        tone: 'sky',
        visual: 'file',
      },
      {
        number: 2,
        fileOrFn: 'ReactFiberCommitEffects.js',
        description: 'commitHookPassiveMountEffects 또는 update 효과',
        tone: 'violet',
        visual: 'process',
      },
      {
        number: 3,
        fileOrFn: 'effect callback 실행 (create)',
        description: 'create() 호출 후, 이전 destroy로 cleanup 처리',
        tone: 'emerald',
        visual: 'play',
      },
    ],
    cleanupNote: 'cleanup은 이후 destroy 호출로 처리됩니다.',
  },
  depsExperiment: {
    eyebrow: 'deps-experiment',
    title: '의존성 배열(deps) 실험',
    codeLabel: '코드',
    code: EXPERIMENT_CODE,
    codeDescription: 'count가 바뀔 때만 effect가 실행된다.',
    countFlowLabel: 'count 값 변화',
    countFlow: '0 → 1 → 1 → 2',
    results: [
      {
        transition: '0 → 1',
        resultLabel: '실행',
        result: 'run',
        body: ['deps 다름', 'HookHasEffect 부여'],
      },
      {
        transition: '1 → 1',
        resultLabel: '생략',
        result: 'skip',
        body: ['deps 같음', 'HookHasEffect 없음'],
      },
      {
        transition: '1 → 2',
        resultLabel: '실행',
        result: 'run',
        body: ['deps 다름', 'HookHasEffect 부여'],
      },
    ],
    runLabel: '실행',
    skipLabel: '생략',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'mountEffect / updateEffect 찾기',
        description: 'ReactFiberHooks.js에서 mountEffect와 updateEffect 함수를 찾아보세요.',
      },
      {
        number: '02',
        title: 'deps 비교 로직 확인',
        description: 'areHookInputsEqual 함수가 어떻게 deps를 비교하는지 확인해보세요.',
      },
      {
        number: '03',
        title: 'Effect 객체 생성 확인',
        description: 'pushSimpleEffect가 Effect 객체를 만들고 Hook에 연결하는 과정을 살펴보세요.',
      },
      {
        number: '04',
        title: 'passive mount 실행 코드 보기',
        description:
          'ReactFiberCommitEffects.js에서 effect callback을 실행하는 코드를 확인해보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: '렌더 중 실행하지 않는다',
        description: 'useEffect는 렌더 중에 실행되지 않고 Effect 객체로 등록된다.',
        tone: 'sky',
        visual: 'block',
      },
      {
        number: 2,
        title: 'Commit 이후 실행된다',
        description: 'DOM 반영이 끝난 뒤 Passive Effect가 실행된다.',
        tone: 'teal',
        visual: 'commit',
      },
      {
        number: 3,
        title: 'deps로 실행 여부 결정',
        description: 'deps 비교 결과에 따라 실행 여부가 결정되고 필요한 때만 실행된다.',
        tone: 'violet',
        visual: 'branch',
      },
      {
        number: 4,
        title: '구조는 연결 리스트',
        description:
          'Effect 객체는 Hook의 memoizedState와 Effect list에 연결되어 순차적으로 관리된다.',
        tone: 'orange',
        visual: 'list',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Rules of Hooks의 이유 이해하기',
    description:
      'Hooks가 상태와 Effect를 어떻게 저장하는지 알았다면, 이제 왜 Hook을 조건문 안에서 부르면 안 되는지 내부 구조로 설명할 수 있습니다.',
    cta: '다음 페이지로 이동',
    href: '/rules-of-hooks',
  },
};

const HERO_CODE_EN = HERO_CODE;
const EXPERIMENT_CODE_EN = `useEffect(() => {
  console.log("effect run");
  return () => console.log("cleanup");
}, [count]);`;

const en: UseEffectInternalsContent = {
  hero: {
    badge: 'Hooks Internals · 7/10',
    titleLine1: 'useEffect is not',
    titleAccent: 'code that runs during render',
    description:
      'During render React records future Effects, but the actual execution happens after Commit, in the Effect processing phase.',
    leftCode: HERO_CODE_EN,
    phases: [
      {
        number: 1,
        title: 'Render Phase',
        subtitle: 'Register Effect',
        items: [
          'useEffect is called',
          'Build Effect object',
          'Attach to Fiber',
          'Does not run yet',
        ],
        tone: 'sky',
        visual: 'clipboard',
      },
      {
        number: 2,
        title: 'After Commit',
        subtitle: 'Run Effect',
        items: [
          'After DOM is reflected',
          'Run Passive Effect',
          'Call create()',
          'cleanup also happens here',
        ],
        tone: 'teal',
        visual: 'play',
      },
    ],
  },
  question: {
    eyebrow: "Today's question",
    title: 'When React meets useEffect, does it run the callback now — or only schedule it?',
  },
  misconception: {
    eyebrow: 'misconception-vs-reality',
    title: 'Misconception vs reality',
    misconception: {
      label: 'Misconception',
      title: 'Effect callback runs immediately during render',
      body: ['People assume the callback fires the moment render finishes'],
      caption: 'It feels natural to think “after render, the callback runs right away”.',
    },
    reality: {
      label: 'Reality',
      title: 'Register Effect during Render Phase / run Passive Effect after Commit',
      body: ['Render just registers — execution waits until after Commit'],
      caption: 'Render and execution are strictly separated.',
    },
    vsBadge: 'VS',
  },
  effectFlow: {
    eyebrow: 'effect-full-flow',
    title: 'Effect full flow',
    steps: [
      {
        number: 1,
        title: 'Call useEffect',
        description: 'Called inside the component function.',
        tone: 'sky',
        visual: 'play',
      },
      {
        number: 2,
        title: 'Find Hook',
        description: 'Locate or create the useEffect Hook in the current Fiber’s Hook list.',
        tone: 'cyan',
        visual: 'search',
      },
      {
        number: 3,
        title: 'Compare deps',
        description: 'Compare previous deps with new deps to decide execution.',
        tone: 'violet',
        visual: 'compare',
      },
      {
        number: 4,
        title: 'Build Effect object',
        description: 'Create the Effect object and link it to the Hook’s memoizedState.',
        tone: 'teal',
        visual: 'box',
      },
      {
        number: 5,
        title: 'Set fiber.flags',
        description: 'If a Passive effect is needed, set the relevant flag on the Fiber.',
        tone: 'indigo',
        visual: 'flag',
      },
      {
        number: 6,
        title: 'Run after Commit',
        description: 'After commit completes, the callback runs in a separate Passive Effect step.',
        tone: 'emerald',
        visual: 'commit',
      },
    ],
  },
  effectObject: {
    eyebrow: 'effect-object',
    title: 'Effect object structure',
    code: EFFECT_TYPE_CODE,
    fields: [
      {
        name: 'tag',
        comment: 'HookFlags',
        description: 'Flag combo like HookHasEffect | Passive | PassiveStatic',
        tone: 'sky',
      },
      {
        name: 'create',
        comment: '() => (() => void) | void',
        description: 'The actual user callback — first argument of useEffect',
        tone: 'teal',
      },
      {
        name: 'inst',
        comment: '{ destroy, resource? }',
        description: 'Holds the cleanup function in the destroy field',
        tone: 'orange',
      },
      {
        name: 'deps',
        comment: 'Array<mixed> | null',
        description: 'Dependency array — compared on the next render',
        tone: 'violet',
      },
      {
        name: 'next',
        comment: 'Effect',
        description: 'Pointer to the next Effect — singly linked list',
        tone: 'amber',
      },
    ],
  },
  depsCompare: {
    eyebrow: 'deps-comparison',
    title: 'deps comparison flow',
    decision: 'areHookInputsEqual(prevDeps, nextDeps)',
    decisionDetail: 'Compares previous and next deps element-by-element with Object.is',
    same: {
      result: 'Same',
      body: ['Skip execution', 'No HookHasEffect', 'callback does not run this Commit'],
      tone: 'teal',
      visual: 'skip',
    },
    different: {
      result: 'Different',
      body: ['Set HookHasEffect', 'Run after Commit', 'Run create() + cleanup previous destroy'],
      tone: 'violet',
      visual: 'play',
    },
  },
  realCode: {
    eyebrow: 'real-code',
    title: 'Real code: registering the Effect object',
    code: REAL_CODE,
    explanationTitle: 'useEffect does not run the callback right away — it stores it as an Effect.',
    explanation: 'That object runs later during the Commit phase.',
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  commitPath: {
    eyebrow: 'commit-path',
    title: 'Execution path after Commit',
    steps: [
      {
        number: 1,
        fileOrFn: 'ReactFiberHooks.js',
        description: 'Register Effect — pushSimpleEffect',
        tone: 'sky',
        visual: 'file',
      },
      {
        number: 2,
        fileOrFn: 'ReactFiberCommitEffects.js',
        description: 'commitHookPassiveMountEffects or update effect',
        tone: 'violet',
        visual: 'process',
      },
      {
        number: 3,
        fileOrFn: 'effect callback (create)',
        description: 'Run create(); cleanup runs via destroy afterwards',
        tone: 'emerald',
        visual: 'play',
      },
    ],
    cleanupNote: 'cleanup runs later via the destroy call.',
  },
  depsExperiment: {
    eyebrow: 'deps-experiment',
    title: 'Dependency array (deps) experiment',
    codeLabel: 'Code',
    code: EXPERIMENT_CODE_EN,
    codeDescription: 'The effect runs only when count changes.',
    countFlowLabel: 'count value changes',
    countFlow: '0 → 1 → 1 → 2',
    results: [
      {
        transition: '0 → 1',
        resultLabel: 'Run',
        result: 'run',
        body: ['deps differ', 'HookHasEffect set'],
      },
      {
        transition: '1 → 1',
        resultLabel: 'Skip',
        result: 'skip',
        body: ['deps equal', 'no HookHasEffect'],
      },
      {
        transition: '1 → 2',
        resultLabel: 'Run',
        result: 'run',
        body: ['deps differ', 'HookHasEffect set'],
      },
    ],
    runLabel: 'Run',
    skipLabel: 'Skip',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Find mountEffect / updateEffect',
        description: 'Locate mountEffect and updateEffect in ReactFiberHooks.js.',
      },
      {
        number: '02',
        title: 'Check the deps comparison logic',
        description: 'See how areHookInputsEqual compares the deps array.',
      },
      {
        number: '03',
        title: 'Read Effect creation',
        description: 'Walk through how pushSimpleEffect builds the Effect and links it.',
      },
      {
        number: '04',
        title: 'See passive mount execution',
        description: 'Open ReactFiberCommitEffects.js and read the callback execution.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'Not during render',
        description: 'useEffect does not execute during render — it is registered as an Effect.',
        tone: 'sky',
        visual: 'block',
      },
      {
        number: 2,
        title: 'After Commit',
        description: 'Passive Effects run after the DOM has been reflected.',
        tone: 'teal',
        visual: 'commit',
      },
      {
        number: 3,
        title: 'deps decide execution',
        description: 'The deps comparison decides whether to run or skip the callback.',
        tone: 'violet',
        visual: 'branch',
      },
      {
        number: 4,
        title: 'It is a linked list',
        description: 'Effect objects are linked through Hook.memoizedState and an Effect list.',
        tone: 'orange',
        visual: 'list',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'understanding why Rules of Hooks exist',
    description:
      'Now that you know how Hooks store state and Effects, you can explain — from internals — why Hooks must not be called inside conditionals.',
    cta: 'Go to the next page',
    href: '/rules-of-hooks',
  },
};

export const useEffectInternalsContent: Record<Locale, UseEffectInternalsContent> = { ko, en };
