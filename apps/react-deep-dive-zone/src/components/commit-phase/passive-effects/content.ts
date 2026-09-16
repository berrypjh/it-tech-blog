import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type HeroPhaseId = 'eye' | 'pencil' | 'zap' | 'clock';

export type HeroPhase = {
  key: string;
  title: string;
  subtitle?: string;
  body: string[];
  id: HeroPhaseId;
  tone: ToneKey;
  active?: boolean;
  zone: 'sync' | 'async';
};

export type PositionStep = {
  title: string;
  body: string;
  tone: ToneKey;
  active?: boolean;
};

export type CompareRow = {
  hook: string;
  feel: string[];
  timing: { phase: string; sync: string; tone: ToneKey };
};

export type LifecycleListItem = string;

export type LifecycleCard = {
  title: string;
  subtitle?: string;
  pill: string;
  items: LifecycleListItem[];
  id: 'leaf' | 'trash';
  tone: ToneKey;
};

export type TimelineStep = {
  number: string;
  title: string;
  body: string;
  badge: string;
  tone: ToneKey;
  isAsync?: boolean;
};

export type SummaryItem = {
  text: string;
  id: 'check' | 'clock' | 'link' | 'star';
};

export type NextChapterCard = {
  title: string;
  subtitle: string;
};

export type PassiveEffectsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      phases: HeroPhase[];
      syncLabel: { title: string; subtitle: string };
      asyncLabel: { title: string; subtitle: string };
      code: string;
      codeCaption: string;
    };
  };
  position: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PositionStep[];
    callout: { line1: string; line2: string };
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: { hook: string; feel: string; timing: string };
    rows: CompareRow[];
    note: string;
  };
  lifecycle: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    mount: LifecycleCard;
    unmount: LifecycleCard;
    note: string;
  };
  example: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeTitle: string;
    code: string;
    flowLabel: string;
    flowSteps: { label: string; tone: ToneKey }[];
  };
  fullTimeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: TimelineStep[];
    summaryTitle: string;
    summaryItems: SummaryItem[];
  };
  nextChapter: {
    badge: string;
    eyebrow: string;
    title: string;
    intro: string;
    chapterTitle: string;
    cards: NextChapterCard[];
  };
  finale: FinaleBannerContent;
};

const heroPhasesKo: HeroPhase[] = [
  {
    key: 'before-mutation',
    title: 'Before Mutation',
    body: ['snapshot 읽기 / 준비'],
    id: 'eye',
    tone: 'violet',
    zone: 'sync',
  },
  {
    key: 'mutation',
    title: 'Mutation',
    body: ['DOM 변경', '삽입 / 수정 / 삭제'],
    id: 'pencil',
    tone: 'sky',
    zone: 'sync',
  },
  {
    key: 'layout',
    title: 'Layout',
    body: ['ref attach', 'useLayoutEffect'],
    id: 'zap',
    tone: 'blue',
    zone: 'sync',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: '후속 처리',
    body: ['useEffect 실행 / 정리', '비동기'],
    id: 'clock',
    tone: 'teal',
    active: true,
    zone: 'async',
  },
];

const heroPhasesEn: HeroPhase[] = [
  {
    key: 'before-mutation',
    title: 'Before Mutation',
    body: ['snapshot read / prep'],
    id: 'eye',
    tone: 'violet',
    zone: 'sync',
  },
  {
    key: 'mutation',
    title: 'Mutation',
    body: ['DOM changes', 'insert / update / delete'],
    id: 'pencil',
    tone: 'sky',
    zone: 'sync',
  },
  {
    key: 'layout',
    title: 'Layout',
    body: ['ref attach', 'useLayoutEffect'],
    id: 'zap',
    tone: 'blue',
    zone: 'sync',
  },
  {
    key: 'passive',
    title: 'Passive Effects',
    subtitle: 'follow-up',
    body: ['useEffect setup / cleanup', 'async'],
    id: 'clock',
    tone: 'teal',
    active: true,
    zone: 'async',
  },
];

const positionStepsKo: PositionStep[] = [
  { title: 'Before Mutation', body: 'snapshot / 준비', tone: 'violet' },
  { title: 'Mutation', body: 'Placement / Update / Deletion', tone: 'sky' },
  { title: 'Layout', body: 'refs attach / useLayoutEffect', tone: 'blue' },
  {
    title: 'Passive Effects',
    body: 'useEffect setup / cleanup',
    tone: 'teal',
    active: true,
  },
];

const positionStepsEn: PositionStep[] = [
  { title: 'Before Mutation', body: 'snapshot / prep', tone: 'violet' },
  { title: 'Mutation', body: 'Placement / Update / Deletion', tone: 'sky' },
  { title: 'Layout', body: 'refs attach / useLayoutEffect', tone: 'blue' },
  {
    title: 'Passive Effects',
    body: 'useEffect setup / cleanup',
    tone: 'teal',
    active: true,
  },
];

const compareRowsKo: CompareRow[] = [
  {
    hook: 'useLayoutEffect',
    feel: ['DOM mutation 후,', '브라우저가 그리기 전'],
    timing: { phase: 'Layout Phase', sync: '동기', tone: 'violet' },
  },
  {
    hook: 'useEffect',
    feel: ['Commit 이후,', '후속 passive 흐름'],
    timing: { phase: 'Passive Effects', sync: '비동기', tone: 'teal' },
  },
];

const compareRowsEn: CompareRow[] = [
  {
    hook: 'useLayoutEffect',
    feel: ['After DOM mutation,', 'before the browser paints'],
    timing: { phase: 'Layout Phase', sync: 'sync', tone: 'violet' },
  },
  {
    hook: 'useEffect',
    feel: ['After Commit,', 'in the passive follow-up'],
    timing: { phase: 'Passive Effects', sync: 'async', tone: 'teal' },
  },
];

const fullTimelineStepsKo: TimelineStep[] = [
  {
    number: '1',
    title: 'finishedWork',
    body: 'Render Phase가 끝나면 새 Fiber 트리(finishedWork)가 완성됩니다.',
    badge: '준비',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'commitRoot',
    body: 'commit 파이프라인의 시작점. 각 단계로 진입합니다.',
    badge: '진입',
    tone: 'sky',
  },
  {
    number: '3',
    title: 'Before Mutation',
    body: 'snapshot 읽기 / 준비. getSnapshotBeforeUpdate 등, mutation 전에 필요한 값 확보.',
    badge: '동기',
    tone: 'violet',
  },
  {
    number: '4',
    title: 'Mutation',
    body: 'DOM 변경. Placement / Update / Deletion 실행, 실제 host tree 조작.',
    badge: '동기',
    tone: 'sky',
  },
  {
    number: '5',
    title: 'current tree 전환',
    body: 'root.current = finishedWork. 새 트리가 이제 현재 화면의 기준이 됩니다.',
    badge: '동기',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'Layout',
    body: 'refs attach / useLayoutEffect / class layout lifecycle. DOM 읽기/보정이 필요한 작업을 paint 전에 실행.',
    badge: '동기',
    tone: 'blue',
  },
  {
    number: '7',
    title: 'Passive Effects',
    body: 'useEffect setup / cleanup. 브라우저 paint 이후 비동기적으로 실행.',
    badge: '비동기',
    tone: 'teal',
    isAsync: true,
  },
];

const fullTimelineStepsEn: TimelineStep[] = [
  {
    number: '1',
    title: 'finishedWork',
    body: 'After Render Phase, the new Fiber tree (finishedWork) is ready.',
    badge: 'prep',
    tone: 'sky',
  },
  {
    number: '2',
    title: 'commitRoot',
    body: 'Entry point of the commit pipeline — enters each sub-step.',
    badge: 'enter',
    tone: 'sky',
  },
  {
    number: '3',
    title: 'Before Mutation',
    body: 'snapshot reads / prep. getSnapshotBeforeUpdate and other pre-mutation values.',
    badge: 'sync',
    tone: 'violet',
  },
  {
    number: '4',
    title: 'Mutation',
    body: 'DOM changes — Placement / Update / Deletion, real host tree work.',
    badge: 'sync',
    tone: 'sky',
  },
  {
    number: '5',
    title: 'current tree swap',
    body: 'root.current = finishedWork. The new tree is now the basis of the screen.',
    badge: 'sync',
    tone: 'blue',
  },
  {
    number: '6',
    title: 'Layout',
    body: 'refs attach / useLayoutEffect / class layout lifecycle. DOM-reading work happens before paint.',
    badge: 'sync',
    tone: 'blue',
  },
  {
    number: '7',
    title: 'Passive Effects',
    body: 'useEffect setup / cleanup. Runs asynchronously after browser paint.',
    badge: 'async',
    tone: 'teal',
    isAsync: true,
  },
];

const summaryItemsKo: SummaryItem[] = [
  { text: '앞쪽은 동기적 Commit Phase (paint 전)', id: 'clock' },
  { text: 'Passive Effects는 비동기 후속 처리', id: 'check' },
  { text: 'DOM 변경 이후, ref와 effect가 순서대로 갱신', id: 'link' },
  { text: '이 순서가 React의 안정적인 업데이트를 보장', id: 'star' },
];

const summaryItemsEn: SummaryItem[] = [
  { text: 'The earlier part is the synchronous Commit Phase (before paint)', id: 'clock' },
  { text: 'Passive Effects is the asynchronous follow-up', id: 'check' },
  {
    text: 'After DOM changes, refs and effects are updated in order',
    id: 'link',
  },
  { text: 'This order guarantees stable React updates', id: 'star' },
];

const nextChapterCardsKo: NextChapterCard[] = [
  { title: 'renderWithHooks', subtitle: '호출 흐름' },
  { title: 'Hook linked list', subtitle: '연결 구조' },
  { title: 'memoizedState', subtitle: '상태 저장 방식' },
  { title: 'effect list', subtitle: '수집과 실행' },
];

const nextChapterCardsEn: NextChapterCard[] = [
  { title: 'renderWithHooks', subtitle: 'invocation flow' },
  { title: 'Hook linked list', subtitle: 'linked structure' },
  { title: 'memoizedState', subtitle: 'state storage' },
  { title: 'effect list', subtitle: 'collect and run' },
];

const heroCode = 'useEffect(() => {\n  // setup\n  return cleanup;\n}, [deps]);';

const exampleCode = `function Example({ id }) {
  useEffect(() => {
    const sub = api.subscribe(id); // setup

    return () => {
      sub.unsubscribe(); // cleanup
    };
  }, [id]);
}`;

const ko: PassiveEffectsContent = {
  hero: {
    badge: 'Commit Phase · 10/10단계',
    title: {
      line1: 'Commit이 끝났다고',
      line2: '모든 effect 처리가',
      line3: '끝난 것은 아닙니다.',
    },
    description:
      'DOM mutation과 layout effect가 지나간 뒤, React는 passive effects를 별도의 후속 흐름으로 처리합니다. 이 흐름이 useEffect 실행과 cleanup으로 이어집니다.',
    diagram: {
      title: 'Commit Phase 이후의 후속 처리 흐름',
      phases: heroPhasesKo,
      syncLabel: { title: '동기적 Commit Phase', subtitle: '브라우저 paint 전까지' },
      asyncLabel: { title: '비동기 후속 단계', subtitle: '브라우저 paint 이후' },
      code: heroCode,
      codeCaption: 'passive effect — paint 이후 비동기로 flush',
    },
  },
  position: {
    badge: '01',
    eyebrow: 'passive 위치',
    title: 'Passive Effects의 위치',
    description: 'Commit Phase의 마지막 단계로, paint 이후 후속 흐름에서 실행됩니다.',
    steps: positionStepsKo,
    callout: { line1: 'paint 이후,', line2: '비동기 처리' },
  },
  compare: {
    badge: '02',
    eyebrow: '이펙트 비교',
    title: 'useLayoutEffect vs useEffect 비교',
    description: '두 Hook은 비슷해 보이지만 실행 시점이 다릅니다.',
    headers: { hook: 'Hook', feel: '실행 감각', timing: '실행 시점' },
    rows: compareRowsKo,
    note: '화면에 영향을 주는 측정/보정은 useLayoutEffect, 데이터 구독/네트워크 요청 등은 useEffect가 일반적입니다.',
  },
  lifecycle: {
    badge: '03',
    eyebrow: 'passive 생명주기',
    title: 'passive mount / unmount 흐름',
    description: 'setup과 cleanup이 한 쌍을 이루며, cleanup이 먼저 실행됩니다.',
    mount: {
      title: 'mount',
      subtitle: '컴포넌트 추가',
      pill: 'passive effect setup',
      items: ['useEffect 콜백 실행', '구독 시작 / 요청 시작', 'cleanup 함수 반환'],
      id: 'leaf',
      tone: 'teal',
    },
    unmount: {
      title: 'unmount / deps change',
      pill: 'passive cleanup',
      items: ['이전 effect의 cleanup 실행', '구독 해제 / 요청 취소', '메모리 / 리소스 정리'],
      id: 'trash',
      tone: 'indigo',
    },
    note: 'React는 cleanup → setup 순서를 보장합니다.',
  },
  example: {
    badge: '04',
    eyebrow: 'passive 예시',
    title: 'passive effect 실행 예시',
    description: '실제 useEffect 코드에서 setup과 cleanup이 어떻게 나타나는지 봅니다.',
    codeTitle: 'useEffect 예시',
    code: exampleCode,
    flowLabel: '실행 흐름',
    flowSteps: [
      { label: 'Commit 완료', tone: 'sky' },
      { label: '브라우저 paint', tone: 'violet' },
      { label: 'passive effects flush', tone: 'teal' },
    ],
  },
  fullTimeline: {
    badge: '05',
    eyebrow: '전체 타임라인',
    title: 'Commit Phase 전체 타임라인 (한눈에 정리)',
    description: 'Commit Phase 챕터에서 다룬 모든 단계를 7-step으로 정리합니다.',
    steps: fullTimelineStepsKo,
    summaryTitle: '핵심 요약',
    summaryItems: summaryItemsKo,
  },
  nextChapter: {
    badge: '06',
    eyebrow: '다음 챕터',
    title: '다음 챕터 예고',
    intro:
      'Commit Phase까지 이해했다면, 이제 함수 컴포넌트 내부에서 상태와 effect가 어떤 Hook 자료구조로 관리되는지 살펴볼 준비가 되었습니다.',
    chapterTitle: '다음 챕터: Hooks 내부 구조',
    cards: nextChapterCardsKo,
  },
  finale: {
    progressLabel: '9/15 챕터 완료',
    copyLine1: 'Commit Phase와 DOM',
    copyLine2: '반영까지 끝냈습니다.',
    copyLine3: '이제 Hooks 내부 구조로.',
    primaryCta: 'Hooks 내부 구조 읽기',
    primaryHref: '/hooks-entry-point',
    secondaryCta: 'Commit Phase 처음부터 다시 보기',
    secondaryHref: '/commit-phase',
  },
};

const en: PassiveEffectsContent = {
  hero: {
    badge: 'Commit Phase · 10/10',
    title: {
      line1: 'Commit ending does not mean',
      line2: 'all effect work',
      line3: 'is done.',
    },
    description:
      'After DOM mutation and layout effects, React handles passive effects as a separate follow-up flow. This flow drives useEffect setup and cleanup.',
    diagram: {
      title: 'Follow-up flow after the Commit Phase',
      phases: heroPhasesEn,
      syncLabel: { title: 'Synchronous Commit Phase', subtitle: 'before browser paint' },
      asyncLabel: { title: 'Async follow-up step', subtitle: 'after browser paint' },
      code: heroCode,
      codeCaption: 'passive effect — flushed async after paint',
    },
  },
  position: {
    badge: '01',
    eyebrow: 'PASSIVE POSITION',
    title: 'Where Passive Effects sit',
    description: 'The last step of the Commit Phase — runs as a follow-up after paint.',
    steps: positionStepsEn,
    callout: { line1: 'after paint,', line2: 'async work' },
  },
  compare: {
    badge: '02',
    eyebrow: 'EFFECT COMPARE',
    title: 'useLayoutEffect vs useEffect',
    description: 'They look similar but run at different times.',
    headers: { hook: 'Hook', feel: 'how it feels', timing: 'when it runs' },
    rows: compareRowsEn,
    note: 'Measurement / fix-ups that affect the screen → useLayoutEffect; data subscriptions / network requests → useEffect.',
  },
  lifecycle: {
    badge: '03',
    eyebrow: 'PASSIVE LIFECYCLE',
    title: 'passive mount / unmount flow',
    description: 'Setup and cleanup are paired, and cleanup runs first.',
    mount: {
      title: 'mount',
      subtitle: 'component added',
      pill: 'passive effect setup',
      items: [
        'Run the useEffect callback',
        'Start subscriptions / requests',
        'Return the cleanup function',
      ],
      id: 'leaf',
      tone: 'teal',
    },
    unmount: {
      title: 'unmount / deps change',
      pill: 'passive cleanup',
      items: [
        'Run the previous effect’s cleanup',
        'Unsubscribe / cancel requests',
        'Release memory / resources',
      ],
      id: 'trash',
      tone: 'indigo',
    },
    note: 'React guarantees cleanup → setup order.',
  },
  example: {
    badge: '04',
    eyebrow: 'PASSIVE EXAMPLE',
    title: 'passive effect execution example',
    description: 'See how setup and cleanup appear in actual useEffect code.',
    codeTitle: 'useEffect example',
    code: exampleCode,
    flowLabel: 'Execution flow',
    flowSteps: [
      { label: 'Commit done', tone: 'sky' },
      { label: 'Browser paint', tone: 'violet' },
      { label: 'passive effects flush', tone: 'teal' },
    ],
  },
  fullTimeline: {
    badge: '05',
    eyebrow: 'FULL TIMELINE',
    title: 'Commit Phase full timeline (one summary)',
    description: 'A 7-step recap of every step covered in this Commit Phase chapter.',
    steps: fullTimelineStepsEn,
    summaryTitle: 'Key summary',
    summaryItems: summaryItemsEn,
  },
  nextChapter: {
    badge: '06',
    eyebrow: 'NEXT CHAPTER',
    title: 'Next chapter preview',
    intro:
      'Now that the Commit Phase is clear, you are ready to see how state and effects are managed inside function components as Hook data structures.',
    chapterTitle: 'Next chapter: Hooks Internals',
    cards: nextChapterCardsEn,
  },
  finale: {
    progressLabel: 'Chapter 9 of 15 complete',
    copyLine1: 'You finished the Commit',
    copyLine2: 'Phase and DOM updates.',
    copyLine3: 'Now into Hooks internals.',
    primaryCta: 'Read Hooks internals',
    primaryHref: '/hooks-entry-point',
    secondaryCta: 'Review the Commit Phase from the start',
    secondaryHref: '/commit-phase',
  },
};

export const passiveEffectsContent: Record<Locale, PassiveEffectsContent> = { ko, en };
