import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type BranchId = 'use-state' | 'use-reducer';

export type Branch = {
  id: BranchId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type ApiSideId = 'state' | 'reducer';

export type ApiSide = {
  id: ApiSideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type SharedRow = {
  category: string;
  useState: string;
  useReducer: string;
};

export type ChoiceId = 'simple' | 'complex';

export type Choice = {
  id: ChoiceId;
  question: string;
  result: string;
  detail: string;
  tone: ToneKey;
  resultTone: ToneKey;
};

export type UseReducerSharedContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    branches: [Branch, Branch];
    mergeLabel: string;
    mergeCaption: string;
  };
  apiShape: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [ApiSide, ApiSide];
    note: string;
  };
  sharedStructure: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: SharedRow[];
    note: string;
  };
  basicReducer: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    codeHeader: string;
    code: string;
    note: string;
  };
  choosing: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    choices: [Choice, Choice];
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const BASIC_REDUCER_CODE = `function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}`;

const UPDATE_STATE_CODE = `function updateState(initialState) {
  return updateReducer(basicStateReducer, initialState);
}

function updateReducer(reducer, initialArg, init) {
  const hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: UseReducerSharedContent = {
  hero: {
    badge: 'Hooks 내부 · 6/10단계',
    title: { line1: 'useState는 useReducer의', line2: '특별한 경우일 뿐이다' },
    description:
      '두 Hook은 닮은 것이 아니라 같은 함수를 부릅니다. useState는 reducer 자리에 basicStateReducer를 끼워 넣은 useReducer입니다.',
    diagramBadge: 'shared core',
    diagramCaption: 'two APIs, one function',
    branches: [
      {
        id: 'use-state',
        label: 'updateState(initialState)',
        caption: 'reducer를 우리가 주지 않는다',
        tone: 'sky',
      },
      {
        id: 'use-reducer',
        label: 'updateReducer(reducer, arg)',
        caption: 'reducer를 우리가 직접 준다',
        tone: 'teal',
      },
    ],
    mergeLabel: 'updateReducerImpl()',
    mergeCaption: '큐 순회와 상태 계산은 여기 한 곳에서',
  },
  apiShape: {
    badge: '01',
    eyebrow: 'api shape',
    title: '겉으로 다른 두 개의 손잡이',
    description:
      '사용자에게 보이는 차이는 인자와 action의 모양뿐입니다. 반환값이 [값, 함수] 쌍이라는 점은 똑같습니다.',
    sides: [
      {
        id: 'state',
        title: 'useState',
        badge: '값 중심',
        description: '초기값만 넘기고, 바꿀 때도 값 또는 updater를 넘깁니다.',
        bullets: [
          'useState(0)으로 초기값만 전달',
          'setCount(1) 또는 setCount(c => c + 1)',
          '상태 전이 규칙을 호출부마다 적는다',
        ],
        tone: 'sky',
      },
      {
        id: 'reducer',
        title: 'useReducer',
        badge: '규칙 중심',
        description: 'reducer 함수를 미리 넘기고, 바꿀 때는 action 객체를 보냅니다.',
        bullets: [
          'useReducer(reducer, 0)으로 규칙과 초기값 전달',
          "dispatch({ type: 'increment' })",
          '상태 전이 규칙이 reducer 한 곳에 모인다',
        ],
        tone: 'teal',
      },
    ],
    note: '둘 다 [현재 값, 업데이트를 거는 함수] 쌍을 돌려줍니다. 반환 모양이 같다는 것이 첫 번째 단서입니다.',
  },
  sharedStructure: {
    badge: '02',
    eyebrow: 'shared internals',
    title: '내부에서 겹치는 것과 갈리는 것',
    description:
      '앞 페이지들에서 본 Hook 객체, queue, dispatch, update가 두 Hook에 그대로 등장합니다. 갈리는 칸은 사실상 하나뿐입니다.',
    headers: ['구성 요소', 'useState', 'useReducer'],
    rows: [
      {
        category: 'Hook 객체',
        useState: 'memoizedState + queue를 가진 같은 구조',
        useReducer: '같음',
      },
      {
        category: 'UpdateQueue',
        useState: 'pending 원형 리스트',
        useReducer: '같음',
      },
      {
        category: 'dispatch',
        useState: 'dispatchSetState를 bind',
        useReducer: 'dispatchReducerAction을 bind',
      },
      {
        category: 'update.action',
        useState: '값 또는 updater 함수',
        useReducer: '{ type, payload } 같은 객체',
      },
      {
        category: 'reducer',
        useState: 'basicStateReducer가 자동으로 들어감',
        useReducer: '우리가 넘긴 함수가 들어감',
      },
      {
        category: '큐 처리 함수',
        useState: 'updateReducerImpl',
        useReducer: 'updateReducerImpl (동일)',
      },
    ],
    note: '여섯 줄 중 실제로 값이 다른 것은 action의 모양과 reducer가 무엇이냐, 두 가지뿐입니다.',
  },
  basicReducer: {
    badge: '03',
    eyebrow: 'basicStateReducer',
    title: 'useState가 몰래 쓰는 reducer',
    description:
      'React가 useState를 위해 끼워 넣는 reducer는 이 두 줄이 전부입니다. 값을 넘겼는지 함수를 넘겼는지만 구분합니다.',
    codeHeader: 'packages/react-reconciler/src/ReactFiberHooks.js',
    code: BASIC_REDUCER_CODE,
    note: '앞 페이지에서 본 "값 vs updater" 차이가 만들어지는 자리가 정확히 이 삼항 연산입니다.',
  },
  choosing: {
    badge: '04',
    eyebrow: 'when to use',
    title: '그러면 무엇을 고를까',
    description:
      '내부가 같다면 선택 기준은 성능이 아니라 코드가 읽히는 모양입니다. 상태 전이 규칙을 어디에 둘지의 문제입니다.',
    choices: [
      {
        id: 'simple',
        question: '값 하나를\n직접 바꾸면 되나?',
        result: 'useState',
        detail: '토글, 카운터, 입력값처럼 전이 규칙이 호출부에서 바로 읽히는 경우입니다.',
        tone: 'sky',
        resultTone: 'sky',
      },
      {
        id: 'complex',
        question: '여러 필드가\n함께 움직이나?',
        result: 'useReducer',
        detail: '전이 종류가 많고 이전 상태를 함께 봐야 할 때 규칙을 한곳에 모읍니다.',
        tone: 'teal',
        resultTone: 'teal',
      },
    ],
    note: '어느 쪽을 골라도 만들어지는 Hook 객체와 큐는 동일합니다. 성능 차이를 기대하고 고를 이유는 없습니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'updateState, updateReducer, updateReducerImpl',
    whyLabel: '설명',
    why: 'updateState의 본문이 updateReducer 호출 한 줄뿐이라는 점이 이 페이지의 주장을 그대로 증명합니다.',
    code: UPDATE_STATE_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '상태가 아닌 Hook, useEffect',
    description:
      '지금까지는 값을 저장하는 Hook이었습니다. 다음은 값 대신 실행할 일을 저장하는 Hook입니다.',
    cta: '다음 페이지로 이동',
    href: '/use-effect-internal',
  },
};

const en: UseReducerSharedContent = {
  hero: {
    badge: 'Hooks Internals · 6/10',
    title: { line1: 'useState is just', line2: 'a special case of useReducer' },
    description:
      'The two Hooks do not merely resemble each other — they call the same function. useState is useReducer with basicStateReducer slotted into the reducer position.',
    diagramBadge: 'shared core',
    diagramCaption: 'two APIs, one function',
    branches: [
      {
        id: 'use-state',
        label: 'updateState(initialState)',
        caption: 'you never supply a reducer',
        tone: 'sky',
      },
      {
        id: 'use-reducer',
        label: 'updateReducer(reducer, arg)',
        caption: 'you supply the reducer yourself',
        tone: 'teal',
      },
    ],
    mergeLabel: 'updateReducerImpl()',
    mergeCaption: 'queue walking and state math happen here',
  },
  apiShape: {
    badge: '01',
    eyebrow: 'api shape',
    title: 'Two handles that look different',
    description:
      'The only user-visible difference is the arguments and the shape of the action. Both hand back a [value, function] pair.',
    sides: [
      {
        id: 'state',
        title: 'useState',
        badge: 'value first',
        description: 'You pass an initial value and later pass a value or an updater.',
        bullets: [
          'useState(0) takes only an initial value',
          'setCount(1) or setCount(c => c + 1)',
          'Transition rules are written at each call site',
        ],
        tone: 'sky',
      },
      {
        id: 'reducer',
        title: 'useReducer',
        badge: 'rules first',
        description: 'You pass a reducer up front and later send action objects.',
        bullets: [
          'useReducer(reducer, 0) passes rules and initial value',
          "dispatch({ type: 'increment' })",
          'Transition rules gather in a single reducer',
        ],
        tone: 'teal',
      },
    ],
    note: 'Both return a [current value, function that queues an update] pair. The matching return shape is the first clue.',
  },
  sharedStructure: {
    badge: '02',
    eyebrow: 'shared internals',
    title: 'What overlaps and what forks',
    description:
      'The Hook object, queue, dispatch and update from earlier pages show up unchanged in both Hooks. Effectively one row differs.',
    headers: ['Piece', 'useState', 'useReducer'],
    rows: [
      {
        category: 'Hook object',
        useState: 'Same shape, with memoizedState and queue',
        useReducer: 'Identical',
      },
      {
        category: 'UpdateQueue',
        useState: 'Circular pending list',
        useReducer: 'Identical',
      },
      {
        category: 'dispatch',
        useState: 'dispatchSetState, bound',
        useReducer: 'dispatchReducerAction, bound',
      },
      {
        category: 'update.action',
        useState: 'A value or an updater function',
        useReducer: 'An object such as { type, payload }',
      },
      {
        category: 'reducer',
        useState: 'basicStateReducer is slotted in',
        useReducer: 'The function you passed is slotted in',
      },
      {
        category: 'Queue processor',
        useState: 'updateReducerImpl',
        useReducer: 'updateReducerImpl (the same one)',
      },
    ],
    note: 'Of six rows only two carry a real difference: the shape of the action and which reducer is used.',
  },
  basicReducer: {
    badge: '03',
    eyebrow: 'basicStateReducer',
    title: 'The reducer useState quietly uses',
    description:
      'The reducer React slots in for useState is these two lines. All it does is tell a value apart from a function.',
    codeHeader: 'packages/react-reconciler/src/ReactFiberHooks.js',
    code: BASIC_REDUCER_CODE,
    note: 'The "value vs updater" difference from the previous page is produced by exactly this ternary.',
  },
  choosing: {
    badge: '04',
    eyebrow: 'when to use',
    title: 'So which one do you pick',
    description:
      'If the internals match, the criterion is not performance but how the code reads. It is a question of where transition rules live.',
    choices: [
      {
        id: 'simple',
        question: 'Is one value\nchanged directly?',
        result: 'useState',
        detail: 'Toggles, counters and inputs, where the rule reads clearly at the call site.',
        tone: 'sky',
        resultTone: 'sky',
      },
      {
        id: 'complex',
        question: 'Do several fields\nmove together?',
        result: 'useReducer',
        detail:
          'Gather the rules in one place when transitions are many and depend on prior state.',
        tone: 'teal',
        resultTone: 'teal',
      },
    ],
    note: 'Either choice creates the same Hook object and the same queue. There is no performance reason to pick between them.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'updateState, updateReducer, updateReducerImpl',
    whyLabel: 'Why',
    why: 'The body of updateState being a single call to updateReducer is the claim of this page, proved in one line.',
    code: UPDATE_STATE_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'useEffect, a Hook that stores no value',
    description: 'Every Hook so far stored a value. The next one stores work to run instead.',
    cta: 'Go to the next page',
    href: '/use-effect-internal',
  },
};

export const useReducerSharedContent: Record<Locale, UseReducerSharedContent> = { ko, en };
