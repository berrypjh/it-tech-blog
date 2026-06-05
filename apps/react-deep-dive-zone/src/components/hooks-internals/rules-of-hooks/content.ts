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

export type HookSlot = {
  index: string;
  hookName: string;
  caption?: string;
  status: 'ok' | 'missing' | 'shifted';
};

export type HeroRenderSide = {
  label: string;
  slots: HookSlot[];
  matchLabel: string;
  matchTone: 'ok' | 'broken';
};

export type CorrectHookCard = {
  index: string;
  hookName: string;
  detail: string;
  tone: Tone;
};

export type MatchingRow = {
  position: string;
  previous: string;
  next: string;
  resultLabel: string;
  resultDetail: string;
  resultKind: 'broken' | 'missing';
};

export type ToggleSide = {
  visibleValue: 'true' | 'false';
  slots: HookSlot[];
  matchLabel: string;
  matchResult: 'ok' | 'broken';
  warningLabel: string;
  warningKind: 'none' | 'detected';
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
  visual: 'order' | 'broken' | 'wrong-slot' | 'top-level';
};

export type RulesOfHooksContent = {
  hero: {
    badge: string;
    titleLine1: string;
    titleAccent: string;
    description: string;
    leftCode: string;
    diagramTitle: string;
    normalRender: HeroRenderSide;
    nextRender: HeroRenderSide;
    warning: string;
  };
  question: {
    eyebrow: string;
    title: string;
  };
  memorization: {
    eyebrow: string;
    title: string;
    left: {
      label: string;
      title: string;
      body: string;
      caption: string;
    };
    right: {
      label: string;
      title: string;
      body: string;
      caption: string;
    };
    vsBadge: string;
  };
  correctOrder: {
    eyebrow: string;
    title: string;
    code: string;
    mappingTitle: string;
    cards: CorrectHookCard[];
    successMessage: string;
  };
  wrongOrder: {
    eyebrow: string;
    title: string;
    code: string;
    firstRender: HeroRenderSide;
    nextRender: HeroRenderSide;
    warning: string;
  };
  matchingTable: {
    eyebrow: string;
    title: string;
    headers: { position: string; previous: string; next: string; result: string };
    rows: MatchingRow[];
    bannerWarning: string;
  };
  devWarning: {
    eyebrow: string;
    title: string;
    warningText: string;
    rightTitle: string;
    expectedTitle: string;
    expectedCaption: string;
    expectedSlots: HookSlot[];
    actualTitle: string;
    actualCaption: string;
    actualSlots: HookSlot[];
    mismatchLabel: string;
  };
  breakExperiment: {
    eyebrow: string;
    title: string;
    code: string;
    toggleLabel: string;
    trueLabel: string;
    falseLabel: string;
    trueState: ToggleSide;
    falseState: ToggleSide;
    matchLabel: string;
    warningLabel: string;
  };
  realCode: {
    eyebrow: string;
    title: string;
    code: string;
    explanationTitle: string;
    fileLabel: string;
    fileName: string;
    buttonLabel: string;
    buttonHref: string;
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
  cta: {
    label: string;
    href: string;
    description: string;
  };
};

const HERO_CODE = `function MyComponent({ visible }) {
  const [count, setCount] = useState(0);

  if (visible) {
    useEffect(() => {
      console.log("visible");
    }, [visible]);
  }

  const inputRef = useRef(null);
  return <div />;
}`;

const CORRECT_CODE = `function Profile() {
  const [count, setCount] = useState(0); // #1

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]); // #2

  const inputRef = useRef(null); // #3

  return <input ref={inputRef} />;
}`;

const WRONG_CODE = `function Profile({ visible }) {
  if (visible) {
    useEffect(() => {
      console.log("visible");
    }, [visible]); // 경우에 따라 #1일 수도
  }

  const [name, setName] = useState(""); // 경우에 따라 #1 또는 #2

  return <div>{name}</div>;
}`;

const WRONG_CODE_EN = `function Profile({ visible }) {
  if (visible) {
    useEffect(() => {
      console.log("visible");
    }, [visible]); // could be #1 in some renders
  }

  const [name, setName] = useState(""); // could be #1 or #2

  return <div>{name}</div>;
}`;

const DEV_WARNING_TEXT = `React has detected a change in the order of Hooks called by Profile.
This will lead to bugs and errors if not fixed.

   Previous render            Next render
   ------------------------------------------------------
1. useEffect                  useState
2. useState                   undefined
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`;

const REAL_CODE = `// ReactFiberHooks.js (DEV 모드 일부)
function updateHookTypesDev() {
  if (__DEV__) {
    if (hookTypesDev !== null) {
      hookTypesUpdateIndexDev++;

      if (hookTypesDev[hookTypesUpdateIndexDev] !== currentHookNameInDev) {
        warnOnHookMismatchInDev(currentHookNameInDev);
      }
    }
  }
}`;

const REAL_CODE_EN = `// ReactFiberHooks.js (part of DEV mode)
function updateHookTypesDev() {
  if (__DEV__) {
    if (hookTypesDev !== null) {
      hookTypesUpdateIndexDev++;

      if (hookTypesDev[hookTypesUpdateIndexDev] !== currentHookNameInDev) {
        warnOnHookMismatchInDev(currentHookNameInDev);
      }
    }
  }
}`;

const EXPERIMENT_CODE = `function Demo({ visible }) {
  if (visible) {
    useEffect(() => {
      console.log("effect run");
    }, [visible]);
  }

  const [name, setName] = useState("");

  return <div>{name}</div>;
}`;

const ko: RulesOfHooksContent = {
  hero: {
    badge: 'Hooks 내부 · 8/10단계',
    titleLine1: 'Rules of Hooks는',
    titleAccent: '예쁜 코드 규칙이 아니다',
    description:
      'React가 Hook을 이름이 아니라 호출 순서로 추적하기 때문에 반드시 지켜야 하는 실행 규칙입니다.',
    leftCode: HERO_CODE,
    diagramTitle: 'Hook은 호출 순서대로 연결 리스트에 저장된다',
    normalRender: {
      label: '첫 렌더 (visible = true)',
      slots: [
        { index: '#1', hookName: 'useState', status: 'ok' },
        { index: '#2', hookName: 'useEffect', status: 'ok' },
        { index: '#3', hookName: 'useRef', status: 'ok' },
      ],
      matchLabel: '정상 매칭',
      matchTone: 'ok',
    },
    nextRender: {
      label: '다음 렌더 (visible = false)',
      slots: [
        { index: '#1', hookName: 'useState', status: 'ok' },
        { index: '#2', hookName: 'useRef', caption: '기존: useEffect 자리', status: 'shifted' },
        { index: '#3', hookName: '없음', caption: '기존: useRef', status: 'missing' },
      ],
      matchLabel: '상태가 다른 위치에 연결되어 버린다',
      matchTone: 'broken',
    },
    warning: '순서가 바뀌면 매칭이 무너진다!',
  },
  question: {
    eyebrow: '오늘의 질문',
    title: '조건문 안에서 useEffect를 호출하면 왜 React가 상태를 제대로 기억하지 못할까?',
  },
  memorization: {
    eyebrow: 'memorization-vs-structure',
    title: '암기 vs 구조 이해',
    left: {
      label: '오해',
      title: '규칙을 암기하는 방식',
      body: '조건문 안에서 Hook 금지',
      caption: '추상적인 규칙만 외우면 "왜 그런지" 이해하기 어렵습니다.',
    },
    right: {
      label: '실제',
      title: '구조로 이해하는 방식',
      body: 'Hook #1, Hook #2, Hook #3 순서가 매번 동일하게 유지되어야 함',
      caption: 'React는 순서대로 연결된 linked list로 Hook을 추적합니다.',
    },
    vsBadge: 'VS',
  },
  correctOrder: {
    eyebrow: 'correct-hook-order',
    title: '올바른 Hook 순서 예제',
    code: CORRECT_CODE,
    mappingTitle: 'React 내부 Hook linked list 매핑',
    cards: [
      { index: '#1', hookName: 'useState', detail: 'state, queue, dispatch', tone: 'sky' },
      { index: '#2', hookName: 'useEffect', detail: 'effect 객체', tone: 'teal' },
      { index: '#3', hookName: 'useRef', detail: 'ref 객체', tone: 'violet' },
    ],
    successMessage: '순서가 유지되므로 상태가 정확히 매칭됩니다.',
  },
  wrongOrder: {
    eyebrow: 'wrong-hook-order',
    title: '잘못된 Hook 순서 예제 (조건부 Hook)',
    code: WRONG_CODE,
    firstRender: {
      label: '첫 렌더 (visible = true)',
      slots: [
        { index: '#1', hookName: 'useEffect', status: 'ok' },
        { index: '#2', hookName: 'useState', status: 'ok' },
      ],
      matchLabel: '이번 렌더 기준 정상',
      matchTone: 'ok',
    },
    nextRender: {
      label: '다음 렌더 (visible = false)',
      slots: [
        { index: '#1', hookName: 'useState', caption: '기존: useEffect 자리', status: 'shifted' },
        { index: '#2', hookName: '없음', caption: '기존: useState', status: 'missing' },
      ],
      matchLabel: '매칭 붕괴',
      matchTone: 'broken',
    },
    warning: '첫 번째 Hook으로 갑자기 다른 Hook이 되어 버립니다!',
  },
  matchingTable: {
    eyebrow: 'matching-comparison',
    title: 'Hook 매칭 변화 비교',
    headers: {
      position: '위치',
      previous: 'Previous Render (visible = true)',
      next: 'Next Render (visible = false)',
      result: '결과',
    },
    rows: [
      {
        position: '1번 위치',
        previous: 'useEffect',
        next: 'useState',
        resultLabel: '매칭 붕괴',
        resultDetail: '다른 Hook으로 변경',
        resultKind: 'broken',
      },
      {
        position: '2번 위치',
        previous: 'useState',
        next: '없음',
        resultLabel: '연결 끊김',
        resultDetail: 'Hook 사라짐',
        resultKind: 'missing',
      },
    ],
    bannerWarning:
      'React 입장에서는 첫 번째 Hook이 갑자기 다른 Hook이 되었고, 전체 연결이 깨졌다고 판단합니다.',
  },
  devWarning: {
    eyebrow: 'dev-warning-connection',
    title: '개발 모드에서 보이는 실제 경고 예시',
    warningText: DEV_WARNING_TEXT,
    rightTitle: 'React가 기대한 순서와 실제 호출 순서 비교',
    expectedTitle: 'React가 기대한 순서',
    expectedCaption: '이전 렌더',
    expectedSlots: [
      { index: '#1', hookName: 'useEffect', status: 'ok' },
      { index: '#2', hookName: 'useState', status: 'ok' },
    ],
    actualTitle: '현재 호출된 순서',
    actualCaption: '다음 렌더',
    actualSlots: [
      { index: '#1', hookName: 'useState', status: 'shifted' },
      { index: '#2', hookName: '없음', status: 'missing' },
    ],
    mismatchLabel: '불일치',
  },
  breakExperiment: {
    eyebrow: 'break-experiment',
    title: 'Hook 순서 깨기 실험',
    code: EXPERIMENT_CODE,
    toggleLabel: 'visible 값 변경',
    trueLabel: 'true',
    falseLabel: 'false',
    matchLabel: '매칭 결과',
    warningLabel: '예상 경고',
    trueState: {
      visibleValue: 'true',
      slots: [
        { index: '#1', hookName: 'useEffect', status: 'ok' },
        { index: '#2', hookName: 'useState', status: 'ok' },
      ],
      matchLabel: '순서 일치',
      matchResult: 'ok',
      warningLabel: '경고 없음',
      warningKind: 'none',
    },
    falseState: {
      visibleValue: 'false',
      slots: [
        { index: '#1', hookName: 'useState', status: 'shifted' },
        { index: '#2', hookName: '없음', status: 'missing' },
      ],
      matchLabel: '순서 불일치',
      matchResult: 'broken',
      warningLabel: 'Hook 순서 변경 감지됨',
      warningKind: 'detected',
    },
  },
  realCode: {
    eyebrow: 'real-code-check',
    title: '실제 코드 확인',
    code: REAL_CODE,
    explanationTitle:
      'React는 DEV 환경에서 Hook 호출 순서를 추적하고, 불일치가 발생하면 경고를 출력합니다.',
    fileLabel: '파일',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'GitHub에서 전체 코드 보기',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        number: '01',
        title: 'Rules of Hooks 공식 문서 확인',
        description: '공식 문서에서 "Only call Hooks at the top level" 규칙을 확인하세요.',
      },
      {
        number: '02',
        title: 'Hook type 추적 코드 확인',
        description: 'ReactFiberHooks.js에서 hookTypesDev, currentHookNameInDev 흐름을 찾아보세요.',
      },
      {
        number: '03',
        title: 'mismatch 경고 흐름 보기',
        description:
          'warnOnHookMismatchInDev 호출 흐름을 따라가며 어떤 상황에서 경고가 발생하는지 확인하세요.',
      },
      {
        number: '04',
        title: '조건부 Hook 예제 직접 비교',
        description: 'visible true/false 렌더에서 Hook 순서가 어떻게 달라지는지 직접 그려보세요.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: '핵심 정리',
    items: [
      {
        number: 1,
        title: 'Hook은 순서로 추적된다',
        description: '이름이 아니라 호출 순서로 linked list에 연결된다.',
        tone: 'sky',
        visual: 'order',
      },
      {
        number: 2,
        title: '순서가 바뀌면 매칭 붕괴',
        description: '첫 Hook이 다른 Hook으로 바뀌면 이전 상태를 잘못 읽게 된다.',
        tone: 'rose',
        visual: 'broken',
      },
      {
        number: 3,
        title: '상태가 잘못된 위치에 연결됨',
        description: '다른 Hook의 상태/Effect 정보가 엉뚱한 위치에 매칭될 수 있다.',
        tone: 'violet',
        visual: 'wrong-slot',
      },
      {
        number: 4,
        title: '반드시 상위 레벨에서 호출',
        description: '조건문, 반복문, 중첩 함수 안에서 Hook을 호출하면 안 된다.',
        tone: 'orange',
        visual: 'top-level',
      },
    ],
  },
  cta: {
    label: '다음: React 19 Hooks 확장 읽기',
    href: '/hooks-in-19',
    description:
      '기본 Hook 규칙과 내부 구조를 이해했다면, 이제 React 19에서 추가된 Hook들도 같은 내부 지형 위에서 읽어봅니다.',
  },
};

const en: RulesOfHooksContent = {
  hero: {
    badge: 'Hooks Internals · 8/10',
    titleLine1: 'Rules of Hooks are',
    titleAccent: 'not just nice-to-have style',
    description:
      'React tracks Hooks by call order — not by name. That is why these rules are an execution requirement, not a code-style preference.',
    leftCode: HERO_CODE,
    diagramTitle: 'Hooks are stored in a linked list — by call order',
    normalRender: {
      label: 'First render (visible = true)',
      slots: [
        { index: '#1', hookName: 'useState', status: 'ok' },
        { index: '#2', hookName: 'useEffect', status: 'ok' },
        { index: '#3', hookName: 'useRef', status: 'ok' },
      ],
      matchLabel: 'Matches correctly',
      matchTone: 'ok',
    },
    nextRender: {
      label: 'Next render (visible = false)',
      slots: [
        { index: '#1', hookName: 'useState', status: 'ok' },
        { index: '#2', hookName: 'useRef', caption: 'was: useEffect slot', status: 'shifted' },
        { index: '#3', hookName: 'missing', caption: 'was: useRef', status: 'missing' },
      ],
      matchLabel: 'State ends up wired to the wrong slot',
      matchTone: 'broken',
    },
    warning: 'Change the order and matching breaks!',
  },
  question: {
    eyebrow: "Today's question",
    title:
      'When useEffect is called inside an if, why does React fail to remember state correctly?',
  },
  memorization: {
    eyebrow: 'memorization-vs-structure',
    title: 'Memorization vs structure',
    left: {
      label: 'Misconception',
      title: 'Memorizing the rule',
      body: 'No Hooks inside conditionals',
      caption: 'Just memorizing an abstract rule makes it hard to understand "why".',
    },
    right: {
      label: 'Reality',
      title: 'Understanding the structure',
      body: 'Hook #1, Hook #2, Hook #3 must stay in the same order every render',
      caption: 'React tracks Hooks as a linked list in call order.',
    },
    vsBadge: 'VS',
  },
  correctOrder: {
    eyebrow: 'correct-hook-order',
    title: 'Correct Hook order example',
    code: CORRECT_CODE,
    mappingTitle: 'How React maps it to the Hook linked list',
    cards: [
      { index: '#1', hookName: 'useState', detail: 'state, queue, dispatch', tone: 'sky' },
      { index: '#2', hookName: 'useEffect', detail: 'effect object', tone: 'teal' },
      { index: '#3', hookName: 'useRef', detail: 'ref object', tone: 'violet' },
    ],
    successMessage: 'Order stays the same → state matches correctly.',
  },
  wrongOrder: {
    eyebrow: 'wrong-hook-order',
    title: 'Broken Hook order (conditional Hook)',
    code: WRONG_CODE_EN,
    firstRender: {
      label: 'First render (visible = true)',
      slots: [
        { index: '#1', hookName: 'useEffect', status: 'ok' },
        { index: '#2', hookName: 'useState', status: 'ok' },
      ],
      matchLabel: 'Looks fine — for this render',
      matchTone: 'ok',
    },
    nextRender: {
      label: 'Next render (visible = false)',
      slots: [
        { index: '#1', hookName: 'useState', caption: 'was: useEffect slot', status: 'shifted' },
        { index: '#2', hookName: 'missing', caption: 'was: useState', status: 'missing' },
      ],
      matchLabel: 'Matching broken',
      matchTone: 'broken',
    },
    warning: 'The first Hook silently turns into a completely different Hook!',
  },
  matchingTable: {
    eyebrow: 'matching-comparison',
    title: 'Hook matching diff',
    headers: {
      position: 'Position',
      previous: 'Previous render (visible = true)',
      next: 'Next render (visible = false)',
      result: 'Result',
    },
    rows: [
      {
        position: 'slot 1',
        previous: 'useEffect',
        next: 'useState',
        resultLabel: 'Matching broken',
        resultDetail: 'Changed to a different Hook',
        resultKind: 'broken',
      },
      {
        position: 'slot 2',
        previous: 'useState',
        next: 'missing',
        resultLabel: 'Link severed',
        resultDetail: 'Hook disappeared',
        resultKind: 'missing',
      },
    ],
    bannerWarning:
      'From React’s view: the first Hook suddenly became another Hook, so the entire chain is considered broken.',
  },
  devWarning: {
    eyebrow: 'dev-warning-connection',
    title: 'The actual warning in dev mode',
    warningText: DEV_WARNING_TEXT,
    rightTitle: 'Expected order vs actual call order',
    expectedTitle: 'React expected',
    expectedCaption: 'previous render',
    expectedSlots: [
      { index: '#1', hookName: 'useEffect', status: 'ok' },
      { index: '#2', hookName: 'useState', status: 'ok' },
    ],
    actualTitle: 'Actually called',
    actualCaption: 'next render',
    actualSlots: [
      { index: '#1', hookName: 'useState', status: 'shifted' },
      { index: '#2', hookName: 'undefined', status: 'missing' },
    ],
    mismatchLabel: 'Mismatch',
  },
  breakExperiment: {
    eyebrow: 'break-experiment',
    title: 'Hook order break experiment',
    code: EXPERIMENT_CODE,
    toggleLabel: 'Flip visible',
    trueLabel: 'true',
    falseLabel: 'false',
    matchLabel: 'Match result',
    warningLabel: 'Expected warning',
    trueState: {
      visibleValue: 'true',
      slots: [
        { index: '#1', hookName: 'useEffect', status: 'ok' },
        { index: '#2', hookName: 'useState', status: 'ok' },
      ],
      matchLabel: 'Order matches',
      matchResult: 'ok',
      warningLabel: 'No warning',
      warningKind: 'none',
    },
    falseState: {
      visibleValue: 'false',
      slots: [
        { index: '#1', hookName: 'useState', status: 'shifted' },
        { index: '#2', hookName: 'missing', status: 'missing' },
      ],
      matchLabel: 'Order mismatched',
      matchResult: 'broken',
      warningLabel: 'Hook order change detected',
      warningKind: 'detected',
    },
  },
  realCode: {
    eyebrow: 'real-code-check',
    title: 'See it in the source',
    code: REAL_CODE_EN,
    explanationTitle:
      'In DEV mode React tracks the order of Hook calls and warns when it does not match.',
    fileLabel: 'file',
    fileName: 'ReactFiberHooks.js',
    buttonLabel: 'View full code on GitHub',
    buttonHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
  },
  mission: {
    eyebrow: 'follow-mission',
    title: 'Follow it in the source',
    items: [
      {
        number: '01',
        title: 'Read the official Rules of Hooks',
        description: 'Confirm "Only call Hooks at the top level" in the docs.',
      },
      {
        number: '02',
        title: 'Find the Hook-type tracking code',
        description: 'Look for hookTypesDev and currentHookNameInDev in ReactFiberHooks.js.',
      },
      {
        number: '03',
        title: 'Trace the mismatch warning',
        description: 'Follow warnOnHookMismatchInDev — when exactly does it fire?',
      },
      {
        number: '04',
        title: 'Compare the conditional example yourself',
        description: 'Sketch the Hook order for visible=true vs visible=false.',
      },
    ],
  },
  summary: {
    eyebrow: 'key-takeaways',
    title: 'Key takeaways',
    items: [
      {
        number: 1,
        title: 'Hooks are tracked by order',
        description: 'They are linked into a list by call order — not by name.',
        tone: 'sky',
        visual: 'order',
      },
      {
        number: 2,
        title: 'Wrong order breaks matching',
        description: 'If the first Hook becomes another Hook, previous state is read incorrectly.',
        tone: 'rose',
        visual: 'broken',
      },
      {
        number: 3,
        title: 'State ends up in the wrong slot',
        description: 'Another Hook’s state/effect can land in an unintended position.',
        tone: 'violet',
        visual: 'wrong-slot',
      },
      {
        number: 4,
        title: 'Always call at the top level',
        description: 'Never call Hooks inside conditionals, loops, or nested functions.',
        tone: 'orange',
        visual: 'top-level',
      },
    ],
  },
  cta: {
    label: 'Next: reading React 19 Hooks',
    href: '/hooks-in-19',
    description:
      'Now that the rules and internals are clear, read the new React 19 Hooks against the same internal terrain.',
  },
};

export const rulesOfHooksContent: Record<Locale, RulesOfHooksContent> = { ko, en };
