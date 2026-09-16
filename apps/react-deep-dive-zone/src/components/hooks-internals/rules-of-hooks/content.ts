import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SlotStatus = 'ok' | 'shifted' | 'missing';

export type HeroSlot = {
  id: string;
  index: string;
  expected: string;
  actual: string;
  status: SlotStatus;
};

export type MatchRow = {
  slot: string;
  before: string;
  after: string;
  result: string;
};

export type RuleId = 'top-level' | 'react-only';

export type Rule = {
  id: RuleId;
  title: string;
  statement: string;
  reason: string;
  tone: ToneKey;
};

export type RulesOfHooksContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    expectedLabel: string;
    actualLabel: string;
    slots: HeroSlot[];
  };
  breaking: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    correct: { label: string; caption: string; code: string };
    broken: { label: string; caption: string; code: string };
    note: string;
  };
  matching: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string, string];
    rows: MatchRow[];
    note: string;
  };
  rules: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: [Rule, Rule];
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

const CORRECT_CODE = `function Profile() {
  const [name, setName] = useState('');   // slot 1
  const inputRef = useRef(null);          // slot 2

  useEffect(() => {
    document.title = name;
  }, [name]);                             // slot 3

  return <input ref={inputRef} value={name} />;
}`;

const BROKEN_CODE = `function Profile({ visible }) {
  if (visible) {
    useEffect(() => {
      console.log('visible');
    }, [visible]);                        // visible일 때만 slot 1
  }

  const [name, setName] = useState('');   // slot 1 또는 slot 2

  return <div>{name}</div>;
}`;

const BROKEN_CODE_EN = `function Profile({ visible }) {
  if (visible) {
    useEffect(() => {
      console.log('visible');
    }, [visible]);                        // slot 1 only when visible
  }

  const [name, setName] = useState('');   // slot 1 or slot 2

  return <div>{name}</div>;
}`;

const DEV_CHECK_CODE = `function updateHookTypesDev() {
  const hookName = currentHookNameInDev;

  if (hookTypesDev !== null) {
    hookTypesUpdateIndexDev++;

    if (hookTypesDev[hookTypesUpdateIndexDev] !== hookName) {
      warnOnHookMismatchInDev(hookName);
    }
  }
}`;

const REACT_FIBER_HOOKS_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: RulesOfHooksContent = {
  hero: {
    badge: 'Hooks 내부 · 8/10단계',
    title: { line1: 'Rules of Hooks는 매너가 아니라', line2: '연결 리스트의 요구 조건이다' },
    description:
      'Hook은 이름 없이 순서로만 식별됩니다. 조건문이 호출 하나를 건너뛰면 그 뒤의 모든 Hook이 남의 자리 값을 읽습니다.',
    diagramBadge: 'slot mismatch',
    diagramCaption: 'expected vs actual',
    expectedLabel: '이전 렌더',
    actualLabel: '이번 렌더',
    slots: [
      { id: 's1', index: '#1', expected: 'useEffect', actual: 'useState', status: 'shifted' },
      { id: 's2', index: '#2', expected: 'useState', actual: 'useRef', status: 'shifted' },
      { id: 's3', index: '#3', expected: 'useRef', actual: '(없음)', status: 'missing' },
    ],
  },
  breaking: {
    badge: '01',
    eyebrow: 'where it breaks',
    title: '한 줄의 if가 만드는 일',
    description:
      '두 코드의 차이는 Hook을 조건문 안에 넣었는지 하나뿐입니다. 그런데 React가 보는 슬롯 번호는 렌더마다 달라집니다.',
    correct: {
      label: '최상위에서 호출',
      caption: 'visible 값과 무관하게 항상 같은 순서로 세 번 불립니다.',
      code: CORRECT_CODE,
    },
    broken: {
      label: '조건문 안에서 호출',
      caption: 'visible이 true일 때와 false일 때 호출 개수와 순서가 달라집니다.',
      code: BROKEN_CODE,
    },
    note: '문제는 useEffect가 실행될지 말지가 아니라, 뒤따르는 useState의 슬롯 번호가 흔들린다는 점입니다.',
  },
  matching: {
    badge: '02',
    eyebrow: 'slot diff',
    title: 'visible이 true에서 false로 바뀌면',
    description:
      '재렌더에서 React는 current Hook 리스트를 처음부터 순서대로 따라갑니다. 슬롯 번호로만 짝을 맞추기 때문에 아래처럼 어긋납니다.',
    headers: ['슬롯', '이전 렌더 (visible=true)', '이번 렌더 (visible=false)', '결과'],
    rows: [
      {
        slot: 'slot 1',
        before: 'useEffect',
        after: 'useState',
        result: '다른 종류의 Hook이 같은 자리를 차지',
      },
      {
        slot: 'slot 2',
        before: 'useState',
        after: '(호출 없음)',
        result: '이전 Hook이 짝을 잃고 리스트가 끊김',
      },
    ],
    note: 'useState는 이전 useEffect의 memoizedState, 즉 Effect 객체를 상태값으로 읽게 됩니다.',
  },
  rules: {
    badge: '03',
    eyebrow: 'two rules',
    title: '규칙 두 줄과 각각의 근거',
    description:
      '규칙 자체는 짧습니다. 중요한 것은 각 규칙이 지금까지 본 자료구조의 어느 부분을 지키는가입니다.',
    items: [
      {
        id: 'top-level',
        title: '최상위에서만 호출한다',
        statement: '조건문, 반복문, 중첩 함수 안에서 Hook을 부르지 않습니다.',
        reason:
          '호출 순서가 곧 슬롯 번호이기 때문입니다. 순서가 렌더마다 같아야 n번째 Hook이 n번째 값을 읽습니다.',
        tone: 'sky',
      },
      {
        id: 'react-only',
        title: 'React 함수 안에서만 호출한다',
        statement: '컴포넌트 또는 커스텀 Hook 안에서만 Hook을 부릅니다.',
        reason:
          'Hook은 currentlyRenderingFiber에 붙습니다. 렌더 바깥에서 부르면 붙일 Fiber가 없어 Dispatcher가 null입니다.',
        tone: 'teal',
      },
    ],
    note: '두 규칙 모두 "어디에 붙일지"와 "몇 번째인지"를 렌더마다 똑같이 만들기 위한 조건입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: '볼 것',
    lookFor: 'updateHookTypesDev, hookTypesDev, warnOnHookMismatchInDev',
    whyLabel: '설명',
    why: 'Hook 이름을 기록하는 배열이 __DEV__ 안에만 있다는 점을 보면, 런타임이 이름을 전혀 모른다는 사실이 확인됩니다.',
    code: DEV_CHECK_CODE,
    primaryCta: 'ReactFiberHooks.js 읽기',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'React 19가 더한 Hook들',
    description:
      '같은 linked list 위에 use, useActionState, useOptimistic이 어떻게 얹혔는지 읽습니다.',
    cta: '다음 페이지로 이동',
    href: '/hooks-in-19',
  },
};

const en: RulesOfHooksContent = {
  hero: {
    badge: 'Hooks Internals · 8/10',
    title: {
      line1: 'The Rules of Hooks are not etiquette',
      line2: 'the linked list requires them',
    },
    description:
      'A Hook has no name — only a position. Skip one call behind a condition and every Hook after it reads someone else’s slot.',
    diagramBadge: 'slot mismatch',
    diagramCaption: 'expected vs actual',
    expectedLabel: 'Previous render',
    actualLabel: 'This render',
    slots: [
      { id: 's1', index: '#1', expected: 'useEffect', actual: 'useState', status: 'shifted' },
      { id: 's2', index: '#2', expected: 'useState', actual: 'useRef', status: 'shifted' },
      { id: 's3', index: '#3', expected: 'useRef', actual: '(none)', status: 'missing' },
    ],
  },
  breaking: {
    badge: '01',
    eyebrow: 'where it breaks',
    title: 'What a single if actually does',
    description:
      'The only difference between these two is whether a Hook sits inside a condition. Yet the slot numbers React sees change between renders.',
    correct: {
      label: 'Called at the top level',
      caption: 'Three calls in the same order regardless of the value of visible.',
      code: CORRECT_CODE,
    },
    broken: {
      label: 'Called inside a condition',
      caption: 'The number and order of calls differ when visible flips.',
      code: BROKEN_CODE_EN,
    },
    note: 'The problem is not whether the effect runs — it is that the slot number of the useState after it moves.',
  },
  matching: {
    badge: '02',
    eyebrow: 'slot diff',
    title: 'When visible flips from true to false',
    description:
      'On a re-render React walks the current Hook list from the head. Pairing happens by slot number alone, so this is the result.',
    headers: ['Slot', 'Previous render (visible=true)', 'This render (visible=false)', 'Result'],
    rows: [
      {
        slot: 'slot 1',
        before: 'useEffect',
        after: 'useState',
        result: 'A different kind of Hook takes the same position',
      },
      {
        slot: 'slot 2',
        before: 'useState',
        after: '(no call)',
        result: 'The previous Hook loses its pair and the chain breaks',
      },
    ],
    note: 'useState ends up reading the previous useEffect memoizedState — an Effect object — as its state value.',
  },
  rules: {
    badge: '03',
    eyebrow: 'two rules',
    title: 'Two rules and what each one protects',
    description:
      'The rules themselves are short. What matters is which part of the data structure each one keeps intact.',
    items: [
      {
        id: 'top-level',
        title: 'Call only at the top level',
        statement: 'Never call a Hook inside a condition, a loop or a nested function.',
        reason:
          'Call order is the slot number. Only if the order repeats can the nth Hook read the nth value.',
        tone: 'sky',
      },
      {
        id: 'react-only',
        title: 'Call only from React functions',
        statement: 'Call Hooks from components or custom Hooks and nowhere else.',
        reason:
          'A Hook attaches to currentlyRenderingFiber. Outside a render there is no Fiber to attach to, so the Dispatcher is null.',
        tone: 'teal',
      },
    ],
    note: 'Both rules exist to keep "where it attaches" and "which position it is" identical on every render.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    lookForLabel: 'Look for',
    lookFor: 'updateHookTypesDev, hookTypesDev, warnOnHookMismatchInDev',
    whyLabel: 'Why',
    why: 'The array that records Hook names exists only inside __DEV__, which confirms the runtime never knows the names.',
    code: DEV_CHECK_CODE,
    primaryCta: 'Read ReactFiberHooks.js',
    primaryHref: REACT_FIBER_HOOKS_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'The Hooks React 19 added',
    description:
      'Next we read how use, useActionState and useOptimistic sit on top of the same linked list.',
    cta: 'Go to the next page',
    href: '/hooks-in-19',
  },
};

export const rulesOfHooksContent: Record<Locale, RulesOfHooksContent> = { ko, en };
