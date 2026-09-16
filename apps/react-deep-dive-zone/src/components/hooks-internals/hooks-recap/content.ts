import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type StageId = 'public' | 'render' | 'list' | 'store' | 'dispatch' | 'commit';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type FlowStepId =
  | 'call'
  | 'resolve'
  | 'render-with-hooks'
  | 'link'
  | 'store'
  | 'dispatch'
  | 'reprocess'
  | 'effects';

export type FlowStep = {
  id: FlowStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type StructureId = 'hook' | 'queue' | 'effect';

export type Structure = {
  id: StructureId;
  name: string;
  role: string;
  description: string;
  fields: string;
  tone: ToneKey;
};

export type FunctionRow = {
  name: string;
  when: string;
  does: string;
};

export type HooksRecapContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  fullFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FlowStep[];
    note: string;
  };
  structures: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Structure[];
    note: string;
  };
  functions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: FunctionRow[];
    note: string;
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
  finale: FinaleBannerContent;
};

const RECAP_CODE = `// 1. 진입: 공개 API는 Dispatcher로 넘길 뿐이다
export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

// 2. 무대: 렌더 전에 Fiber와 Dispatcher를 세팅한다
currentlyRenderingFiber = workInProgress;
ReactSharedInternals.H =
  current === null ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;

// 3. 저장: Hook은 순서대로 linked list에 매달린다
workInProgressHook = workInProgressHook.next = hook;

// 4. 예약: setState는 update를 큐에 걸고 렌더를 예약한다
enqueueConcurrentHookUpdate(fiber, queue, update, lane);
scheduleUpdateOnFiber(root, fiber, lane);`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: HooksRecapContent = {
  hero: {
    badge: 'Hooks 내부 · 10/10단계',
    title: { line1: '아홉 페이지의 구조를', line2: '한 장의 흐름으로' },
    description:
      '공개 API에서 시작해 Dispatcher, Hook linked list, UpdateQueue, Effect 실행까지. 챕터 전체를 하나의 경로로 다시 잇습니다.',
    diagramBadge: 'recap',
    diagramCaption: 'entry → store → commit',
    stages: [
      { id: 'public', label: '공개 API', caption: 'ReactHooks.js · 1페이지', tone: 'sky' },
      {
        id: 'render',
        label: 'renderWithHooks',
        caption: 'Dispatcher 선택 · 2페이지',
        tone: 'cyan',
      },
      {
        id: 'list',
        label: 'Hook linked list',
        caption: '순서 = 슬롯 · 3, 8페이지',
        tone: 'violet',
      },
      { id: 'store', label: 'Hook 객체', caption: '값과 queue · 4, 6페이지', tone: 'teal' },
      { id: 'dispatch', label: 'UpdateQueue', caption: 'update 적재 · 5페이지', tone: 'amber' },
      {
        id: 'commit',
        label: 'Passive Effects',
        caption: '커밋 이후 실행 · 7페이지',
        tone: 'emerald',
      },
    ],
  },
  fullFlow: {
    badge: '01',
    eyebrow: 'one flow',
    title: '호출 한 줄에서 화면까지 여덟 단계',
    description:
      '아홉 페이지에서 따로 본 함수들을 시간 순으로 한 줄에 세우면, 챕터 전체가 이 여덟 칸에 들어갑니다.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: '공개 Hook 호출',
        description: 'useState / useEffect는 react 패키지의 얇은 진입점입니다.',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '02',
        title: 'resolveDispatcher',
        description: '지금 렌더 상황에 맞는 Dispatcher를 찾아 호출을 넘깁니다.',
        tone: 'sky',
      },
      {
        id: 'render-with-hooks',
        num: '03',
        title: 'renderWithHooks가 무대를 세운다',
        description: 'currentlyRenderingFiber를 잡고 Hook 자리를 비운 뒤 컴포넌트를 부릅니다.',
        tone: 'cyan',
      },
      {
        id: 'link',
        num: '04',
        title: 'Hook이 순서대로 매달린다',
        description: 'memoizedState가 첫 Hook을, 그다음은 next가 이어 붙습니다.',
        tone: 'violet',
      },
      {
        id: 'store',
        num: '05',
        title: '값과 queue와 dispatch가 만들어진다',
        description: 'mountState가 상태, UpdateQueue, bind된 dispatch를 한 번에 준비합니다.',
        tone: 'teal',
      },
      {
        id: 'dispatch',
        num: '06',
        title: 'setState는 요청서만 남긴다',
        description: 'Update를 queue에 걸고 scheduleUpdateOnFiber로 렌더를 예약합니다.',
        tone: 'amber',
      },
      {
        id: 'reprocess',
        num: '07',
        title: '다음 렌더가 큐를 처리한다',
        description: 'updateReducerImpl이 리스트를 돌며 새 상태를 계산합니다.',
        tone: 'indigo',
      },
      {
        id: 'effects',
        num: '08',
        title: '커밋 이후 Effect가 실행된다',
        description: 'flag가 붙은 Effect만 cleanup → create 순으로 실행됩니다.',
        tone: 'emerald',
      },
    ],
    note: '여덟 칸 중 06까지는 기록이고, 실제로 무언가 실행되는 것은 07과 08뿐입니다.',
  },
  structures: {
    badge: '02',
    eyebrow: 'three structures',
    title: '기억해 둘 자료구조 셋',
    description:
      '이름을 외우기보다 각각이 무엇을 들고 있는지를 기억하면, 다음에 코드를 열었을 때 바로 붙습니다.',
    items: [
      {
        id: 'hook',
        name: 'Hook',
        role: '값을 들고 있는 칸',
        description: 'Fiber의 memoizedState에서 시작해 next로 이어지는 연결 리스트의 노드입니다.',
        fields: 'memoizedState · baseState · baseQueue · queue · next',
        tone: 'sky',
      },
      {
        id: 'queue',
        name: 'UpdateQueue',
        role: '변경 요청을 모으는 곳',
        description: 'dispatch가 만든 Update가 pending 원형 리스트에 쌓입니다.',
        fields: 'pending · lanes · dispatch · lastRenderedReducer · lastRenderedState',
        tone: 'violet',
      },
      {
        id: 'effect',
        name: 'Effect',
        role: '나중에 할 일을 적어 둔 것',
        description: 'Hook의 memoizedState에 들어가고, Fiber updateQueue에도 함께 매달립니다.',
        fields: 'tag · create · inst · deps · next',
        tone: 'emerald',
      },
    ],
    note: '셋 다 next 필드를 가집니다. React 내부 자료구조가 배열 대신 연결 리스트를 고르는 이유가 여기 보입니다.',
  },
  functions: {
    badge: '03',
    eyebrow: 'five functions',
    title: '다시 열 때 찾을 다섯 함수',
    description:
      'ReactFiberHooks.js는 길지만, 이 다섯 개만 짚으면 챕터에서 본 흐름을 그대로 되짚을 수 있습니다.',
    headers: ['함수', '언제 도는가', '하는 일'],
    rows: [
      {
        name: 'renderWithHooks',
        when: '함수 컴포넌트를 렌더할 때마다',
        does: 'Fiber를 잡고 Hook 자리를 비운 뒤 Dispatcher를 꽂고 컴포넌트를 호출합니다.',
      },
      {
        name: 'mountWorkInProgressHook',
        when: '첫 렌더에서 Hook을 부를 때마다',
        does: '빈 Hook 객체를 만들어 linked list 끝에 붙입니다.',
      },
      {
        name: 'mountStateImpl',
        when: '첫 렌더의 useState',
        does: '초기값을 넣고 UpdateQueue를 만들어 Hook에 연결합니다.',
      },
      {
        name: 'dispatchSetState',
        when: 'setState를 부를 때마다',
        does: 'Update를 만들어 큐에 걸고 렌더를 예약합니다.',
      },
      {
        name: 'updateReducerImpl',
        when: '재렌더의 useState / useReducer',
        does: '큐를 순회하며 새 상태를 계산합니다. 두 Hook이 공유합니다.',
      },
    ],
    note: 'useEffect 쪽은 updateEffectImpl 하나를 더 보면 됩니다. deps 비교와 flag 설정이 전부 거기 있습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'renderWithHooks, mountWorkInProgressHook, dispatchSetState, updateReducerImpl',
    whyLabel: '설명',
    why: '네 조각을 이어 붙이면 진입부터 예약까지가 한 화면에 들어옵니다. 챕터 전체의 축약본입니다.',
    code: RECAP_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  finale: {
    progressLabel: '10/15 챕터 완료',
    copyLine1: 'Hooks가 어디에 저장되고',
    copyLine2: '언제 실행되는지까지 읽었습니다.',
    copyLine3: '다음은 이벤트 시스템입니다.',
    primaryCta: '이벤트 시스템 내부 흐름 읽기',
    primaryHref: '/why-event-system',
    secondaryCta: 'Hooks 챕터 처음부터 다시 보기',
    secondaryHref: '/hooks-entry-point',
  },
};

const RECAP_CODE_EN = `// 1. Entry: the public API only hands off to the Dispatcher
export function useState(initialState) {
  const dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

// 2. Stage: set the Fiber and Dispatcher before rendering
currentlyRenderingFiber = workInProgress;
ReactSharedInternals.H =
  current === null ? HooksDispatcherOnMount : HooksDispatcherOnUpdate;

// 3. Storage: Hooks hang on the linked list in call order
workInProgressHook = workInProgressHook.next = hook;

// 4. Booking: setState queues an update and schedules a render
enqueueConcurrentHookUpdate(fiber, queue, update, lane);
scheduleUpdateOnFiber(root, fiber, lane);`;

const en: HooksRecapContent = {
  hero: {
    badge: 'Hooks Internals · 10/10',
    title: { line1: 'Nine pages of structure', line2: 'as a single flow' },
    description:
      'From the public API through the Dispatcher, the Hook linked list, the UpdateQueue and Effect execution — the chapter joined back into one path.',
    diagramBadge: 'recap',
    diagramCaption: 'entry → store → commit',
    stages: [
      { id: 'public', label: 'Public API', caption: 'ReactHooks.js · page 1', tone: 'sky' },
      {
        id: 'render',
        label: 'renderWithHooks',
        caption: 'picks the Dispatcher · page 2',
        tone: 'cyan',
      },
      {
        id: 'list',
        label: 'Hook linked list',
        caption: 'order is the slot · pages 3, 8',
        tone: 'violet',
      },
      { id: 'store', label: 'Hook object', caption: 'value and queue · pages 4, 6', tone: 'teal' },
      { id: 'dispatch', label: 'UpdateQueue', caption: 'updates pile up · page 5', tone: 'amber' },
      {
        id: 'commit',
        label: 'Passive Effects',
        caption: 'run after commit · page 7',
        tone: 'emerald',
      },
    ],
  },
  fullFlow: {
    badge: '01',
    eyebrow: 'one flow',
    title: 'Eight steps from one call to the screen',
    description:
      'Line the functions from all nine pages up in time order and the whole chapter fits in these eight slots.',
    steps: [
      {
        id: 'call',
        num: '01',
        title: 'A public Hook is called',
        description: 'useState and useEffect are thin entry points in the react package.',
        tone: 'sky',
      },
      {
        id: 'resolve',
        num: '02',
        title: 'resolveDispatcher',
        description: 'Finds the Dispatcher for the current render and hands the call over.',
        tone: 'sky',
      },
      {
        id: 'render-with-hooks',
        num: '03',
        title: 'renderWithHooks builds the stage',
        description:
          'Pins currentlyRenderingFiber, clears the Hook slots, then calls the component.',
        tone: 'cyan',
      },
      {
        id: 'link',
        num: '04',
        title: 'Hooks hang on in order',
        description: 'memoizedState holds the first Hook and next carries every one after it.',
        tone: 'violet',
      },
      {
        id: 'store',
        num: '05',
        title: 'Value, queue and dispatch are built',
        description:
          'mountState prepares the state, the UpdateQueue and the bound dispatch at once.',
        tone: 'teal',
      },
      {
        id: 'dispatch',
        num: '06',
        title: 'setState only files a request',
        description: 'It queues an Update and schedules a render through scheduleUpdateOnFiber.',
        tone: 'amber',
      },
      {
        id: 'reprocess',
        num: '07',
        title: 'The next render processes the queue',
        description: 'updateReducerImpl walks the list and computes the new state.',
        tone: 'indigo',
      },
      {
        id: 'effects',
        num: '08',
        title: 'Effects run after commit',
        description: 'Only flagged Effects run, cleanup first and then create.',
        tone: 'emerald',
      },
    ],
    note: 'Everything through step 06 is recording. Only 07 and 08 actually execute anything.',
  },
  structures: {
    badge: '02',
    eyebrow: 'three structures',
    title: 'Three structures worth remembering',
    description:
      'Rather than the names, remember what each one holds and the code will click the next time you open it.',
    items: [
      {
        id: 'hook',
        name: 'Hook',
        role: 'The slot that holds a value',
        description:
          'A node in the linked list that starts at the Fiber memoizedState and runs along next.',
        fields: 'memoizedState · baseState · baseQueue · queue · next',
        tone: 'sky',
      },
      {
        id: 'queue',
        name: 'UpdateQueue',
        role: 'Where change requests gather',
        description: 'Updates created by dispatch stack up on the circular pending list.',
        fields: 'pending · lanes · dispatch · lastRenderedReducer · lastRenderedState',
        tone: 'violet',
      },
      {
        id: 'effect',
        name: 'Effect',
        role: 'Work written down for later',
        description: 'Stored in the Hook memoizedState and also hung on the Fiber updateQueue.',
        fields: 'tag · create · inst · deps · next',
        tone: 'emerald',
      },
    ],
    note: 'All three carry a next field. That is where React internals prefer linked lists over arrays.',
  },
  functions: {
    badge: '03',
    eyebrow: 'five functions',
    title: 'Five functions to find on reopening',
    description:
      'ReactFiberHooks.js is long, but these five are enough to retrace the whole flow from this chapter.',
    headers: ['Function', 'When it runs', 'What it does'],
    rows: [
      {
        name: 'renderWithHooks',
        when: 'Every function component render',
        does: 'Pins the Fiber, clears the Hook slots, installs the Dispatcher and calls the component.',
      },
      {
        name: 'mountWorkInProgressHook',
        when: 'Every Hook call on the first render',
        does: 'Creates an empty Hook object and appends it to the linked list.',
      },
      {
        name: 'mountStateImpl',
        when: 'useState on the first render',
        does: 'Stores the initial value and builds the UpdateQueue onto the Hook.',
      },
      {
        name: 'dispatchSetState',
        when: 'Every setState call',
        does: 'Creates an Update, queues it and schedules a render.',
      },
      {
        name: 'updateReducerImpl',
        when: 'useState / useReducer on a re-render',
        does: 'Walks the queue to compute the new state. Both Hooks share it.',
      },
    ],
    note: 'For the effect side add updateEffectImpl — the deps comparison and flag setting all live there.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'renderWithHooks, mountWorkInProgressHook, dispatchSetState, updateReducerImpl',
    whyLabel: 'Why',
    why: 'Stitched together, these four fragments put entry through scheduling on one screen — the whole chapter, abridged.',
    code: RECAP_CODE_EN,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  finale: {
    progressLabel: 'Chapter 10 of 15 complete',
    copyLine1: 'You have read where Hooks are stored',
    copyLine2: 'and when they actually run.',
    copyLine3: 'Next comes the event system.',
    primaryCta: 'Read the event system internals',
    primaryHref: '/why-event-system',
    secondaryCta: 'Restart the Hooks chapter',
    secondaryHref: '/hooks-entry-point',
  },
};

export const hooksRecapContent: Record<Locale, HooksRecapContent> = { ko, en };
