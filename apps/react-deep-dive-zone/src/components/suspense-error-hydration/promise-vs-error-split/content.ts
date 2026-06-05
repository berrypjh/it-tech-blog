import type { Locale } from '@it-tech-blog/preferences';

import type { Path } from './tone';

export type ConceptCard = {
  icon: 'filter' | 'spinner' | 'shield' | 'branch';
  label: string;
  description: string;
};

export type StepCard = {
  number: string;
  title: string;
  description: string;
};

export type ResultCard = {
  badge: string;
  path: Path;
  title: string;
  body: string;
};

export type PathStep = { title: string; description: string };

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'green' | 'purple';
};

export type ClassifierResult = {
  path: Path;
  classification: string;
  nextRoute: string;
  description: string;
};

export type PromiseVsErrorSplitContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    promiseCode: {
      label: string;
      fileLabel: string;
      code: string;
      pill: string;
    };
    errorCode: {
      label: string;
      fileLabel: string;
      code: string;
      pill: string;
    };
    diagram: {
      rootLabel: string;
      diamondTitle: string;
      diamondSubtitle: string;
      yesLabel: string;
      yesTitle: string;
      yesSubtitle: string;
      noLabel: string;
      noTitle: string;
      noSubtitle: string;
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  twoFaces: {
    number: string;
    title: string;
    vs: string;
    promise: {
      code: string;
      label: string;
      checklist: string[];
    };
    error: {
      code: string;
      label: string;
      checklist: string[];
    };
  };
  tree: {
    number: string;
    title: string;
    rootTitle: string;
    rootSubtitle: string;
    thenableCondition: { code: string; label: string };
    thenableSteps: PathStep[];
    errorCondition: { code: string; label: string };
    errorSteps: PathStep[];
  };
  stepFlow: {
    number: string;
    title: string;
    steps: StepCard[];
    results: ResultCard[];
  };
  reasonSuspense: {
    number: string;
    title: string;
    description: string;
    leftLabel: string;
    leftSubLabel: string;
    rightLabel: string;
    rightSubLabel: string;
    pills: string[];
  };
  reasonError: {
    number: string;
    title: string;
    description: string;
    leftLabel: string;
    leftSubLabel: string;
    rightLabel: string;
    rightSubLabel: string;
    pills: string[];
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    code: string;
    explanationTitle: string;
    bullets: string[];
    button: { label: string; href: string };
  };
  classifier: {
    number: string;
    title: string;
    subtitle: string;
    selectorLabel: string;
    options: { path: Path; code: string; comment: string }[];
    resultLabel: string;
    classificationLabel: string;
    nextRouteLabel: string;
    descriptionLabel: string;
    results: Record<Path, ClassifierResult>;
    help: {
      title: string;
      items: string[];
    };
  };
  followAlong: {
    number: string;
    title: string;
    items: ChecklistItem[];
  };
  takeaways: {
    number: string;
    title: string;
    cards: TakeawayCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const THROW_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const CODE_THROW = `if (value !== null && typeof value === "object") {
  if (typeof value.then === "function") {
    const wakeable = value;
    // Suspense 처리 경로
  }
}

// 그 외는 regular error 경로`;

const CODE_THROW_EN = `if (value !== null && typeof value === "object") {
  if (typeof value.then === "function") {
    const wakeable = value;
    // Suspense path
  }
}

// otherwise regular error path`;

const ko: PromiseVsErrorSplitContent = {
  hero: {
    badge: 'Suspense/Error · 3/10단계',
    titleLines: ['React는 던져진 값을', '무조건 에러로 보지 않는다'],
    description: 'thenable이면 Suspense, 일반 Error이면 Error Boundary 경로로 다르게 처리합니다.',
    promiseCode: {
      label: 'Promise(thenable)를 던진 경우',
      fileLabel: 'load.ts',
      code: `// 대기 가능한 값: thenable
const promise = fetchData();

throw promise;`,
      pill: '대기 가능한 렌더링 → Suspense',
    },
    errorCode: {
      label: 'Error를 던진 경우',
      fileLabel: 'fail.ts',
      code: `// 일반 Error
throw new Error("failed");`,
      pill: '복구해야 할 실패 → Error Boundary',
    },
    diagram: {
      rootLabel: 'Thrown value',
      diamondTitle: 'thenable?',
      diamondSubtitle: '(value?.then)',
      yesLabel: 'YES',
      yesTitle: 'Suspense',
      yesSubtitle: '대기 후 재시도',
      noLabel: 'NO',
      noTitle: 'Error',
      noSubtitle: '복구 UI로 전환',
    },
  },
  question: {
    number: '02',
    title: '오늘 해결할 질문',
    question: '렌더링 중 throw된 값이 Promise인지 Error인지 React는 어떻게 판별할까?',
    concepts: [
      { icon: 'filter', label: '분류', description: '던져진 값의 종류를 구분하는 조건' },
      { icon: 'spinner', label: 'Suspense', description: '대기 가능한 호출의 복구 경로' },
      { icon: 'shield', label: 'Error Boundary', description: '복구 가능한 실패의 복구 경로' },
      { icon: 'branch', label: '복구 경로', description: '각 상황에 맞는 재시도/복구 전략' },
    ],
  },
  twoFaces: {
    number: '03',
    title: '렌더 중 throw의 두 얼굴',
    vs: 'VS',
    promise: {
      code: 'throw promise;',
      label: '대기 가능한 렌더링',
      checklist: [
        'thenable(대기 가능한 값)을 던진 경우',
        '지금은 준비되지 않았으므로 잠시 보류',
        'Suspense Boundary가 대체 UI를 보여줌',
      ],
    },
    error: {
      code: "throw new Error('failed');",
      label: '복구해야 할 실패',
      checklist: [
        '일반 Error를 던진 경우',
        '렌더링 실패로 간주하고 복구 필요',
        '가장 가까운 Error Boundary로 전달',
      ],
    },
  },
  tree: {
    number: '04',
    title: 'thenable path vs error path (개념 트리)',
    rootTitle: 'Thrown value',
    rootSubtitle: '렌더링 중 throw된 값',
    thenableCondition: {
      code: "typeof value?.then === 'function'",
      label: 'thenable(대기 가능한 값)',
    },
    thenableSteps: [
      { title: 'wakeable 처리', description: '구독 및 재시도 등록' },
      { title: 'Suspense 경로', description: '경계선 fallback 표시' },
      { title: '해결되면 재시도', description: '다시 렌더링 시도' },
    ],
    errorCondition: {
      code: '그 외 (thenable 아님)',
      label: '일반 Error 흐름',
    },
    errorSteps: [
      { title: 'regular error 처리', description: '실패로 표시' },
      { title: 'Error Boundary 탐색', description: '가장 가까운 경계 찾기' },
      { title: '복구 UI 렌더링', description: '자식 트리 대체' },
    ],
  },
  stepFlow: {
    number: '05',
    title: 'throwException 전체 분기 (수행 흐름)',
    steps: [
      {
        number: '1',
        title: 'throwException(...)',
        description: '컴포넌트 렌더 중 값을 만났을 때 진입',
      },
      {
        number: '2',
        title: 'value 검사',
        description: 'null/undefined/primitive/object 여부 확인',
      },
      {
        number: '3',
        title: 'thenable인가?',
        description: "typeof value?.then === 'function' 으로 판별",
      },
    ],
    results: [
      {
        badge: '4-1 yes (thenable)',
        path: 'thenable',
        title: 'wakeable 처리 후',
        body: 'Suspense 경로로 이동',
      },
      {
        badge: '4-2 no (not thenable)',
        path: 'error',
        title: 'regular error 처리 후',
        body: 'Error 경로로 이동',
      },
    ],
  },
  reasonSuspense: {
    number: '06',
    title: 'Promise가 Suspense로 가는 이유',
    description:
      'thenable은 아직 값이 준비되지 않았을 뿐, 결국 성공할 수도 있는 "대기 가능한 값"입니다. 그래서 React는 이를 실패로 보지 않고, 현재 렌더를 잠시 보류(suspend)합니다.',
    leftLabel: '데이터 로딩 컴포넌트',
    leftSubLabel: '값을 기다리는 중',
    rightLabel: 'Suspense fallback UI',
    rightSubLabel: '로딩 중...',
    pills: ['렌더 보류', 'fallback 표시', '해결 후 재시도'],
  },
  reasonError: {
    number: '07',
    title: 'Error가 Boundary로 가는 이유',
    description:
      '일반 Error는 복구가 필요한 실패입니다. React는 이를 실패로 분류하고, 가장 가까운 Error Boundary를 찾아 복구 UI를 렌더링합니다.',
    leftLabel: '실패한 컴포넌트',
    leftSubLabel: '렌더링 중 예외 발생',
    rightLabel: 'Error Boundary에서 복구',
    rightSubLabel: '문제가 발생했습니다 · 다시 시도',
    pills: ['실패 인식', '경계 탐색', '복구 UI 렌더링'],
  },
  code: {
    number: '08',
    title: '실제 코드 미리보기',
    fileLabel: 'ReactFiberThrow.js',
    code: CODE_THROW,
    explanationTitle: '코드 설명',
    bullets: [
      '값이 객체이고 then 함수가 있으면 thenable로 간주합니다.',
      'thenable이면 wakeable로 등록하고 Suspense 경로로 이동합니다.',
      '그 외 모든 경우는 regular error로 처리되어 Error Boundary 경로로 이동합니다.',
    ],
    button: { label: 'GitHub에서 코드 보기', href: THROW_URL },
  },
  classifier: {
    number: '09',
    title: '분류기 인터랙션',
    subtitle: '직접 확인해 보세요',
    selectorLabel: '던져지는 값 선택',
    options: [
      { path: 'thenable', code: 'throw promise;', comment: '// thenable(Promise)을 던짐' },
      {
        path: 'error',
        code: "throw new Error('failed');",
        comment: '// 일반 Error를 던짐',
      },
    ],
    resultLabel: '분류 결과',
    classificationLabel: '분류',
    nextRouteLabel: '다음 경로',
    descriptionLabel: '설명',
    results: {
      thenable: {
        path: 'thenable',
        classification: 'Wakeable (thenable)',
        nextRoute: 'Suspense Boundary',
        description: '대기 가능한 값으로 간주되어 현재 렌더를 보류하고 fallback을 표시합니다.',
      },
      error: {
        path: 'error',
        classification: 'Regular Error',
        nextRoute: 'Error Boundary',
        description: '복구해야 할 실패로 간주되어 가장 가까운 Error Boundary를 찾습니다.',
      },
    },
    help: {
      title: '어떻게 동작하나요?',
      items: [
        '던져진 값을 분석합니다.',
        'value?.then의 존재 여부를 확인합니다.',
        '결과에 따라 두 경로 중 하나로 분기합니다.',
        '직접 선택해 보며 결과를 확인해 보세요!',
      ],
    },
  },
  followAlong: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'ReactFiberThrow.js 열기',
        description: 'throwException 함수를 찾습니다.',
      },
      {
        title: 'throwException 찾기',
        description: '렌더 중 던져진 값이 어디로 들어오는지 확인합니다.',
      },
      {
        title: 'thenable 분기 확인',
        description: "typeof value.then === 'function' 조건을 찾습니다.",
      },
      {
        title: 'regular error 경로 확인',
        description: 'thenable이 아닌 값이 Error Boundary로 가는 흐름을 확인합니다.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'React는 던져진 값을 성격에 따라 분류한다.',
        body: 'thenable인지, 아닌지가 핵심 기준입니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'thenable은 Suspense로, Error는 Error Boundary로 간다.',
        body: '각 경로는 서로 다른 목적의 복구 전략입니다.',
        tone: 'green',
      },
      {
        number: '3',
        title: 'throwException은 복구 경로의 핵심 분기점이다.',
        body: '이 함수에서 두 세계가 갈라집니다.',
        tone: 'purple',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Suspense Boundary의 fallback과 retry',
    description: '이제 Suspense가 어떻게 fallback을 표시하고, 다시 시도하는지 알아보세요.',
    cta: '다음 페이지로 이동',
    href: '/suspense-fallback-retry',
  },
};

const en: PromiseVsErrorSplitContent = {
  hero: {
    badge: 'Suspense·Error · 3/10',
    titleLines: ['React does not treat every thrown value', 'as an error'],
    description:
      'A thenable is sent down the Suspense path; a regular Error is sent to the Error Boundary path.',
    promiseCode: {
      label: 'When a Promise (thenable) is thrown',
      fileLabel: 'load.ts',
      code: `// waitable value: thenable
const promise = fetchData();

throw promise;`,
      pill: 'Waitable rendering → Suspense',
    },
    errorCode: {
      label: 'When an Error is thrown',
      fileLabel: 'fail.ts',
      code: `// regular Error
throw new Error("failed");`,
      pill: 'Recoverable failure → Error Boundary',
    },
    diagram: {
      rootLabel: 'Thrown value',
      diamondTitle: 'thenable?',
      diamondSubtitle: '(value?.then)',
      yesLabel: 'YES',
      yesTitle: 'Suspense',
      yesSubtitle: 'wait and retry',
      noLabel: 'NO',
      noTitle: 'Error',
      noSubtitle: 'switch to recovery UI',
    },
  },
  question: {
    number: '02',
    title: "Today's question",
    question:
      'When a value is thrown during render, how does React tell whether it is a Promise or an Error?',
    concepts: [
      {
        icon: 'filter',
        label: 'Classify',
        description: 'Condition that separates the kind of thrown value',
      },
      { icon: 'spinner', label: 'Suspense', description: 'Recovery path for waitable calls' },
      {
        icon: 'shield',
        label: 'Error Boundary',
        description: 'Recovery path for recoverable failures',
      },
      {
        icon: 'branch',
        label: 'Recovery path',
        description: 'A retry / recovery strategy matched to the situation',
      },
    ],
  },
  twoFaces: {
    number: '03',
    title: 'The two faces of throw during render',
    vs: 'VS',
    promise: {
      code: 'throw promise;',
      label: 'Waitable rendering',
      checklist: [
        'A thenable (waitable value) is thrown',
        'It is not ready right now, so we pause',
        'A Suspense Boundary shows the fallback UI',
      ],
    },
    error: {
      code: "throw new Error('failed');",
      label: 'Recoverable failure',
      checklist: [
        'A regular Error is thrown',
        'Treated as a render failure that must be recovered',
        'Forwarded to the nearest Error Boundary',
      ],
    },
  },
  tree: {
    number: '04',
    title: 'thenable path vs error path (concept tree)',
    rootTitle: 'Thrown value',
    rootSubtitle: 'Value thrown during render',
    thenableCondition: {
      code: "typeof value?.then === 'function'",
      label: 'thenable (waitable value)',
    },
    thenableSteps: [
      { title: 'Process as wakeable', description: 'Subscribe and register for retry' },
      { title: 'Suspense path', description: 'Show fallback at the boundary' },
      { title: 'Retry on resolve', description: 'Try rendering again' },
    ],
    errorCondition: {
      code: 'otherwise (not thenable)',
      label: 'Regular Error flow',
    },
    errorSteps: [
      { title: 'Process as regular error', description: 'Mark as failure' },
      { title: 'Walk to the Error Boundary', description: 'Find the nearest boundary' },
      { title: 'Render recovery UI', description: 'Replace the child tree' },
    ],
  },
  stepFlow: {
    number: '05',
    title: 'throwException full split (execution flow)',
    steps: [
      {
        number: '1',
        title: 'throwException(...)',
        description: 'Entered when a value is encountered during render',
      },
      {
        number: '2',
        title: 'Inspect value',
        description: 'Check null / undefined / primitive / object',
      },
      {
        number: '3',
        title: 'Is it a thenable?',
        description: "Decided by typeof value?.then === 'function'",
      },
    ],
    results: [
      {
        badge: '4-1 yes (thenable)',
        path: 'thenable',
        title: 'Process as wakeable, then',
        body: 'Move down the Suspense path',
      },
      {
        badge: '4-2 no (not thenable)',
        path: 'error',
        title: 'Process as regular error, then',
        body: 'Move down the Error path',
      },
    ],
  },
  reasonSuspense: {
    number: '06',
    title: 'Why a Promise goes to Suspense',
    description:
      'A thenable is just "not ready yet" — it may still succeed. So React does not treat it as a failure, but pauses (suspends) the current render.',
    leftLabel: 'Data-loading component',
    leftSubLabel: 'Waiting for a value',
    rightLabel: 'Suspense fallback UI',
    rightSubLabel: 'Loading...',
    pills: ['Pause render', 'Show fallback', 'Retry on resolve'],
  },
  reasonError: {
    number: '07',
    title: 'Why an Error goes to a Boundary',
    description:
      'A regular Error is a failure that must be recovered. React classifies it as a failure and walks up to find the nearest Error Boundary to render the recovery UI.',
    leftLabel: 'Failed component',
    leftSubLabel: 'Exception thrown during render',
    rightLabel: 'Recovery in the Error Boundary',
    rightSubLabel: 'Something went wrong · Retry',
    pills: ['Detect failure', 'Walk the boundary', 'Render recovery UI'],
  },
  code: {
    number: '08',
    title: 'Source code preview',
    fileLabel: 'ReactFiberThrow.js',
    code: CODE_THROW_EN,
    explanationTitle: 'Code explanation',
    bullets: [
      'If the value is an object and has a then function, it is treated as a thenable.',
      'A thenable is registered as a wakeable and moved down the Suspense path.',
      'Anything else is treated as a regular error and moved down the Error Boundary path.',
    ],
    button: { label: 'View source on GitHub', href: THROW_URL },
  },
  classifier: {
    number: '09',
    title: 'Classifier interaction',
    subtitle: 'Try it yourself',
    selectorLabel: 'Pick the thrown value',
    options: [
      { path: 'thenable', code: 'throw promise;', comment: '// throw a thenable (Promise)' },
      {
        path: 'error',
        code: "throw new Error('failed');",
        comment: '// throw a regular Error',
      },
    ],
    resultLabel: 'Classification result',
    classificationLabel: 'Classification',
    nextRouteLabel: 'Next route',
    descriptionLabel: 'Description',
    results: {
      thenable: {
        path: 'thenable',
        classification: 'Wakeable (thenable)',
        nextRoute: 'Suspense Boundary',
        description:
          'Treated as a waitable value — the current render is paused and a fallback is shown.',
      },
      error: {
        path: 'error',
        classification: 'Regular Error',
        nextRoute: 'Error Boundary',
        description: 'Treated as a recoverable failure — the nearest Error Boundary is located.',
      },
    },
    help: {
      title: 'How does this work?',
      items: [
        'Analyze the thrown value.',
        'Check whether value?.then exists.',
        'Branch into one of the two routes by the result.',
        'Pick an option and see the result yourself!',
      ],
    },
  },
  followAlong: {
    number: '10',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Open ReactFiberThrow.js',
        description: 'Find the throwException function.',
      },
      {
        title: 'Find throwException',
        description: 'See where values thrown during render enter.',
      },
      {
        title: 'Check the thenable branch',
        description: "Find the typeof value.then === 'function' condition.",
      },
      {
        title: 'Check the regular error path',
        description: 'See how non-thenable values flow to the Error Boundary.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'React classifies thrown values by their nature.',
        body: 'Whether the value is a thenable or not is the key criterion.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'Thenables go to Suspense; Errors go to the Error Boundary.',
        body: 'Each path is a recovery strategy with a different purpose.',
        tone: 'green',
      },
      {
        number: '3',
        title: 'throwException is the heart of the recovery split.',
        body: 'Two worlds split off inside this single function.',
        tone: 'purple',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Suspense Boundary fallback and retry',
    description: 'Next, see how Suspense actually shows the fallback and retries.',
    cta: 'Go to the next page',
    href: '/suspense-fallback-retry',
  },
};

export const promiseVsErrorSplitContent: Record<Locale, PromiseVsErrorSplitContent> = { ko, en };
