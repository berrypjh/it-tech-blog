import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PhaseId = 'render' | 'commit' | 'passive';

export type HeroPhase = {
  id: PhaseId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type MythId = 'timing' | 'cleanup' | 'deps';

export type Myth = {
  id: MythId;
  badgeWrong: string;
  wrong: string;
  right: string;
  note: string;
  tone: ToneKey;
};

export type EffectStepId = 'call' | 'hook' | 'compare' | 'push' | 'flag' | 'run';

export type EffectStep = {
  id: EffectStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type EffectFieldId = 'tag' | 'create' | 'inst' | 'deps' | 'next';

export type EffectField = {
  id: EffectFieldId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type DepsSideId = 'same' | 'different';

export type DepsSide = {
  id: DepsSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type UseEffectInternalsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    callLabel: string;
    call: string;
    phases: HeroPhase[];
  };
  myths: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Myth[];
    note: string;
  };
  flow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: EffectStep[];
    note: string;
  };
  effectObject: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    fields: EffectField[];
    note: string;
  };
  deps: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [DepsSide, DepsSide];
    bridge: { headline: string; sub: string };
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

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

const PUSH_EFFECT_CODE = `function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  const hook = updateWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;

  if (currentHook !== null) {
    const prevEffect = currentHook.memoizedState;
    const inst = prevEffect.inst;

    if (nextDeps !== null && areHookInputsEqual(nextDeps, prevEffect.deps)) {
      hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, nextDeps);
      return;
    }
  }

  currentlyRenderingFiber.flags |= fiberFlags;
  hook.memoizedState = pushSimpleEffect(
    HookHasEffect | hookFlags,
    inst,
    create,
    nextDeps,
  );
}`;

const HERO_CALL_CODE = `useEffect(() => {
  console.log(count);
}, [count]);`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: UseEffectInternalsContent = {
  hero: {
    badge: 'Hooks 내부 · 7/10단계',
    title: { line1: 'useEffect가 렌더 중에 하는 일은', line2: '실행이 아니라 예약이다' },
    description:
      '렌더 중에는 Effect 객체 한 장을 만들어 Hook에 매달아 둘 뿐입니다. 콜백은 DOM이 커밋된 뒤 별도 단계에서 실행됩니다.',
    diagramBadge: 'effect timing',
    diagramCaption: 'register now, run later',
    callLabel: '우리가 쓰는 코드',
    call: HERO_CALL_CODE,
    phases: [
      {
        id: 'render',
        label: 'Render Phase',
        caption: 'Effect 객체 생성 · Hook에 연결 · flags 표시',
        tone: 'sky',
      },
      {
        id: 'commit',
        label: 'Commit Phase',
        caption: 'DOM 변경 반영. 아직 콜백은 실행 안 됨',
        tone: 'violet',
      },
      {
        id: 'passive',
        label: 'Passive Effects',
        caption: '커밋이 끝난 뒤 cleanup → create 순으로 실행',
        tone: 'emerald',
      },
    ],
  },
  myths: {
    badge: '01',
    eyebrow: 'myth vs reality',
    title: '자주 어긋나는 세 가지',
    description:
      'useEffect를 둘러싼 오해는 대부분 "언제 실행되는가"를 렌더 시점으로 잡는 데서 시작합니다.',
    items: [
      {
        id: 'timing',
        badgeWrong: '오해',
        wrong: '렌더가 끝나면 콜백이 바로 실행된다',
        right: '렌더 중에는 등록만 하고, 커밋 이후 별도 단계에서 실행된다',
        note: '그래서 effect 안에서 읽는 DOM은 이미 갱신된 DOM입니다.',
        tone: 'sky',
      },
      {
        id: 'cleanup',
        badgeWrong: '오해',
        wrong: 'cleanup은 컴포넌트가 사라질 때만 돈다',
        right: 'deps가 바뀔 때마다 이전 destroy를 먼저 부르고 새 create를 부른다',
        note: 'inst.destroy에 직전 반환값이 저장돼 있어 다음 실행 전에 쓰입니다.',
        tone: 'violet',
      },
      {
        id: 'deps',
        badgeWrong: '오해',
        wrong: 'deps가 같으면 Effect 객체도 만들지 않는다',
        right: '객체는 항상 만든다. 다만 HookHasEffect 플래그를 붙이지 않는다',
        note: '리스트를 유지해야 순서가 맞기 때문에 건너뛰는 것은 실행뿐입니다.',
        tone: 'emerald',
      },
    ],
    note: '세 오해 모두 "등록"과 "실행"을 한 시점으로 묶어 버린 데서 나옵니다.',
  },
  flow: {
    badge: '02',
    eyebrow: 'effect flow',
    title: '등록에서 실행까지 여섯 단계',
    description:
      '앞의 다섯 단계는 렌더 중에 끝나고, 마지막 하나만 커밋 이후로 넘어갑니다. 이 경계가 이 페이지의 전부입니다.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'useEffect 호출',
        description: '컴포넌트 본문에서 create 함수와 deps 배열을 넘깁니다.',
        tone: 'sky',
      },
      {
        id: 'hook',
        num: '02',
        title: 'Hook 확보',
        description: 'Hook linked list에서 이 순번의 Hook을 만들거나 이어받습니다.',
        tone: 'cyan',
      },
      {
        id: 'compare',
        num: '03',
        title: 'deps 비교',
        description: 'areHookInputsEqual이 이전 deps와 새 deps를 Object.is로 훑습니다.',
        tone: 'violet',
      },
      {
        id: 'push',
        num: '04',
        title: 'Effect 객체 생성',
        description: 'pushSimpleEffect가 Effect를 만들어 Hook과 updateQueue에 잇습니다.',
        tone: 'teal',
      },
      {
        id: 'flag',
        num: '05',
        title: 'flags 표시',
        description: '실행이 필요하면 Fiber에 Passive flag를, Effect에 HookHasEffect를 붙입니다.',
        tone: 'amber',
      },
      {
        id: 'run',
        num: '06',
        title: '커밋 이후 실행',
        description: 'flag가 붙은 Effect만 골라 cleanup → create 순으로 실행합니다.',
        tone: 'emerald',
      },
    ],
    note: '05에서 flag를 붙이지 않으면 06은 그 Effect를 그냥 지나칩니다. deps가 하는 일이 바로 이것입니다.',
  },
  effectObject: {
    badge: '03',
    eyebrow: 'effect object',
    title: 'Effect 객체가 담는 다섯 칸',
    description:
      'useState의 Hook이 값을 담았다면, useEffect의 Hook은 이 Effect 객체를 memoizedState에 담습니다.',
    codeHeader: 'Effect',
    code: EFFECT_TYPE_CODE,
    fields: [
      {
        id: 'tag',
        name: 'tag',
        role: '실행 조건 플래그',
        description: 'Passive인지 Layout인지, 이번에 실행할지(HookHasEffect)를 비트로 담습니다.',
        tone: 'amber',
      },
      {
        id: 'create',
        name: 'create',
        role: '우리가 넘긴 콜백',
        description: 'useEffect의 첫 인자 그대로입니다. 반환값이 cleanup이 됩니다.',
        tone: 'sky',
      },
      {
        id: 'inst',
        name: 'inst',
        role: 'cleanup 보관함',
        description: '직전 create가 돌려준 destroy를 렌더를 넘어 들고 있는 자리입니다.',
        tone: 'violet',
      },
      {
        id: 'deps',
        name: 'deps',
        role: '비교 대상 배열',
        description: '다음 렌더에서 이 배열과 새 배열을 비교합니다. 생략하면 null입니다.',
        tone: 'cyan',
      },
      {
        id: 'next',
        name: 'next',
        role: '다음 Effect 포인터',
        description: 'Fiber updateQueue에 매달린 Effect들의 원형 리스트를 잇습니다.',
        tone: 'emerald',
      },
    ],
    note: 'cleanup이 Effect가 아니라 inst에 들어 있다는 점이 중요합니다. Effect는 렌더마다 새로 만들어지기 때문입니다.',
  },
  deps: {
    badge: '04',
    eyebrow: 'deps',
    title: 'deps가 실제로 가르는 것',
    description:
      'deps 비교의 결과는 Effect를 만들지 말지가 아니라, 만든 Effect에 실행 플래그를 붙일지 말지입니다.',
    sides: [
      {
        id: 'same',
        title: 'deps가 같을 때',
        badge: 'skip',
        description: 'areHookInputsEqual이 true를 돌려준 경우입니다.',
        bullets: [
          'Effect 객체는 그대로 만들어 리스트에 잇는다',
          'HookHasEffect를 붙이지 않는다',
          'Fiber에 Passive flag도 켜지 않는다',
          '결과적으로 커밋 이후 이 Effect는 건너뛴다',
        ],
        tone: 'teal',
      },
      {
        id: 'different',
        title: 'deps가 다를 때',
        badge: 'run',
        description: '하나라도 Object.is 비교에서 어긋난 경우입니다.',
        bullets: [
          'HookHasEffect를 tag에 함께 넣는다',
          'Fiber에 Passive flag를 켠다',
          '커밋 후 inst.destroy를 먼저 실행한다',
          '그다음 create를 실행하고 반환값을 inst.destroy에 저장한다',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'areHookInputsEqual\n(prev, next)',
      sub: '길이가 다르거나 원소 하나라도 Object.is에서 어긋나면 false입니다. 얕은 비교라서 객체 리터럴은 매번 다릅니다.',
    },
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'updateEffectImpl, pushSimpleEffect, areHookInputsEqual, HookHasEffect',
    whyLabel: '설명',
    why: 'deps가 같은 분기에서도 pushSimpleEffect를 부른다는 점, 다만 HookHasEffect가 빠져 있다는 점이 핵심입니다.',
    code: PUSH_EFFECT_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '규칙이 관례가 아닌 이유',
    description:
      '지금까지 본 linked list와 순서 의존을 근거로, Rules of Hooks가 왜 강제인지 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/rules-of-hooks',
  },
};

const en: UseEffectInternalsContent = {
  hero: {
    badge: 'Hooks Internals · 7/10',
    title: { line1: 'During render useEffect does not run', line2: 'it only books the work' },
    description:
      'While rendering, React builds one Effect object and hangs it on the Hook. The callback runs later, in a separate pass after the DOM is committed.',
    diagramBadge: 'effect timing',
    diagramCaption: 'register now, run later',
    callLabel: 'the code we write',
    call: HERO_CALL_CODE,
    phases: [
      {
        id: 'render',
        label: 'Render Phase',
        caption: 'build the Effect, link the Hook, set flags',
        tone: 'sky',
      },
      {
        id: 'commit',
        label: 'Commit Phase',
        caption: 'DOM changes land. The callback still has not run',
        tone: 'violet',
      },
      {
        id: 'passive',
        label: 'Passive Effects',
        caption: 'after commit, cleanup runs and then create',
        tone: 'emerald',
      },
    ],
  },
  myths: {
    badge: '01',
    eyebrow: 'myth vs reality',
    title: 'Three assumptions that break',
    description:
      'Most confusion about useEffect starts by placing "when does it run" inside the render.',
    items: [
      {
        id: 'timing',
        badgeWrong: 'Myth',
        wrong: 'The callback runs as soon as the render finishes',
        right: 'Render only registers it; execution happens in a pass after commit',
        note: 'That is why the DOM you read inside an effect is already the updated DOM.',
        tone: 'sky',
      },
      {
        id: 'cleanup',
        badgeWrong: 'Myth',
        wrong: 'Cleanup only runs when the component unmounts',
        right: 'Whenever deps change, the previous destroy runs before the new create',
        note: 'inst.destroy holds the last returned function so it is available next time.',
        tone: 'violet',
      },
      {
        id: 'deps',
        badgeWrong: 'Myth',
        wrong: 'Matching deps means no Effect object is created',
        right: 'The object is always created — it simply gets no HookHasEffect flag',
        note: 'The list must stay intact for ordering, so only execution is skipped.',
        tone: 'emerald',
      },
    ],
    note: 'All three collapse "registering" and "running" into a single moment.',
  },
  flow: {
    badge: '02',
    eyebrow: 'effect flow',
    title: 'Six steps from registration to execution',
    description:
      'The first five finish during render and only the last one crosses into post-commit. That boundary is the whole page.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'useEffect is called',
        description: 'The component body passes a create function and a deps array.',
        tone: 'sky',
      },
      {
        id: 'hook',
        num: '02',
        title: 'Take the Hook',
        description: 'Create or inherit the Hook at this position in the linked list.',
        tone: 'cyan',
      },
      {
        id: 'compare',
        num: '03',
        title: 'Compare deps',
        description: 'areHookInputsEqual walks old and new deps with Object.is.',
        tone: 'violet',
      },
      {
        id: 'push',
        num: '04',
        title: 'Create the Effect object',
        description: 'pushSimpleEffect builds the Effect and links it to the Hook and updateQueue.',
        tone: 'teal',
      },
      {
        id: 'flag',
        num: '05',
        title: 'Set the flags',
        description: 'If it must run, set Passive on the Fiber and HookHasEffect on the Effect.',
        tone: 'amber',
      },
      {
        id: 'run',
        num: '06',
        title: 'Run after commit',
        description: 'Only flagged Effects are picked up, cleanup first and then create.',
        tone: 'emerald',
      },
    ],
    note: 'Without the flag from step 05, step 06 walks straight past that Effect. That is all deps really do.',
  },
  effectObject: {
    badge: '03',
    eyebrow: 'effect object',
    title: 'The five slots of an Effect',
    description:
      'Where a useState Hook stores a value, a useEffect Hook stores this Effect object in memoizedState.',
    codeHeader: 'Effect',
    code: EFFECT_TYPE_CODE,
    fields: [
      {
        id: 'tag',
        name: 'tag',
        role: 'Execution flags',
        description: 'Bits saying Passive or Layout, and whether to run this time (HookHasEffect).',
        tone: 'amber',
      },
      {
        id: 'create',
        name: 'create',
        role: 'The callback you passed',
        description: 'Exactly the first argument to useEffect. Its return value becomes cleanup.',
        tone: 'sky',
      },
      {
        id: 'inst',
        name: 'inst',
        role: 'Cleanup holder',
        description: 'The slot that carries the previous destroy function across renders.',
        tone: 'violet',
      },
      {
        id: 'deps',
        name: 'deps',
        role: 'Array to compare',
        description: 'Compared against the next array on the following render. null when omitted.',
        tone: 'cyan',
      },
      {
        id: 'next',
        name: 'next',
        role: 'Pointer to the next Effect',
        description: 'Links the circular list of Effects hanging on the Fiber updateQueue.',
        tone: 'emerald',
      },
    ],
    note: 'Cleanup living on inst rather than on the Effect matters, because a fresh Effect is built every render.',
  },
  deps: {
    badge: '04',
    eyebrow: 'deps',
    title: 'What deps actually decide',
    description:
      'The deps comparison does not decide whether an Effect is created. It decides whether the created Effect gets an execution flag.',
    sides: [
      {
        id: 'same',
        title: 'When deps match',
        badge: 'skip',
        description: 'areHookInputsEqual returned true.',
        bullets: [
          'The Effect object is still created and linked',
          'HookHasEffect is not added',
          'No Passive flag is set on the Fiber',
          'So the post-commit pass skips this Effect',
        ],
        tone: 'teal',
      },
      {
        id: 'different',
        title: 'When deps differ',
        badge: 'run',
        description: 'At least one element failed the Object.is comparison.',
        bullets: [
          'HookHasEffect joins the tag',
          'The Passive flag is set on the Fiber',
          'After commit, inst.destroy runs first',
          'Then create runs and its return goes back into inst.destroy',
        ],
        tone: 'violet',
      },
    ],
    bridge: {
      headline: 'areHookInputsEqual\n(prev, next)',
      sub: 'False when the lengths differ or any element fails Object.is. It is a shallow check, so an object literal differs every time.',
    },
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'updateEffectImpl, pushSimpleEffect, areHookInputsEqual, HookHasEffect',
    whyLabel: 'Why',
    why: 'Note that the matching-deps branch still calls pushSimpleEffect — it just leaves HookHasEffect out.',
    code: PUSH_EFFECT_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Why the rules are not a convention',
    description:
      'With the linked list and its order dependence in hand, we can say exactly why the Rules of Hooks are enforced.',
    cta: 'Go to the next page',
    href: '/rules-of-hooks',
  },
};

export const useEffectInternalsContent: Record<Locale, UseEffectInternalsContent> = { ko, en };
