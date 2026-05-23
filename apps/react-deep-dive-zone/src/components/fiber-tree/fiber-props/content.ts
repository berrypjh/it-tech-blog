import type { Locale } from '@it-tech-blog/preferences';

export type PropsKind = 'pendingProps' | 'memoizedProps';

export type ComparisonCard = {
  kind: PropsKind;
  title: string;
  subtitle: string;
  items: string[];
};

export type ReasonCard = {
  id: string;
  title: string;
  body: string;
  example: string;
  iconName: 'scales' | 'gauge' | 'trending';
  tone: 'emerald' | 'sky' | 'violet';
};

export type MeaningStep = {
  id: 'memo' | 'pending' | 'compare';
  title: string;
  subtitle: string;
  main: string;
  iconName: 'clock' | 'zap' | 'gitCompare';
  tone: 'emerald' | 'sky' | 'violet';
};

export type FiberPropsContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    emphasis: string;
    description: string;
    vs: string;
    memoizedCard: {
      title: string;
      subtitle: string;
      badge: string;
      exampleLabel: string;
      example: string;
    };
    pendingCard: {
      title: string;
      subtitle: string;
      badge: string;
      exampleLabel: string;
      example: string;
    };
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ComparisonCard[];
  };
  scenario: {
    number: string;
    eyebrow: string;
    title: string;
    previousLabel: string;
    previousCode: string;
    nextLabel: string;
    nextCode: string;
    stateLabel: string;
    stateMemoized: string;
    statePending: string;
    bannerPrefix: string;
    bannerOldValue: string;
    bannerMid: string;
    bannerNewValue: string;
    bannerSuffix: string;
  };
  meaning: {
    number: string;
    eyebrow: string;
    title: string;
    steps: MeaningStep[];
    description: string;
    descriptionEmphasis: string;
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      title: string;
      filesLabel: string;
      file: string;
      lookForLabel: string;
      lookFor: string;
      questionLabel: string;
      question: string;
      buttonLabel: string;
      buttonHref: string;
    };
    code: {
      fileName: string;
      language: string;
      content: string;
    };
  };
  reasons: {
    number: string;
    eyebrow: string;
    title: string;
    cards: ReasonCard[];
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    explanationLabel: string;
    question: string;
    answer: string;
    explanationParts: { text: string; bold?: boolean }[];
  };
  next: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const checkpointCode = `export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;

  // 이번 작업에서 처리할 새 입력 (current input)
  pendingProps: any;

  // 지난 렌더 결과에 사용된 입력 (previously memoized input)
  memoizedProps: any;

  // ... 생략 ...
};`;

const checkpointCodeEn = `export type Fiber = {
  tag: WorkTag;
  key: null | string;
  elementType: any;
  type: any;
  stateNode: any;

  // current input — new props for this unit of work
  pendingProps: any;

  // previously memoized input — props used by the last commit
  memoizedProps: any;

  // ... omitted ...
};`;

const ko: FiberPropsContent = {
  hero: {
    badge: '1',
    title: {
      line1: 'Fiber는 props를',
      line2: '한 벌만 들고 있지 않습니다.',
    },
    emphasis: '한 벌만',
    description:
      '이번 렌더링에서 처리할 새 입력과, 지난 렌더링에서 사용했던 입력을 구분해서 저장합니다.',
    vs: 'VS',
    memoizedCard: {
      title: 'memoizedProps ← 이전 렌더',
      subtitle: '지난 렌더링에서 사용된 props',
      badge: '이전 결과의 기준',
      exampleLabel: '예시',
      example: '{ label: "저장", disabled: false }',
    },
    pendingCard: {
      title: 'pendingProps ← 이번 작업',
      subtitle: '이번 작업에서 새롭게 들어온 props',
      badge: '이번 작업의 입력',
      exampleLabel: '예시',
      example: '{ label: "전송", disabled: false }',
    },
  },
  comparison: {
    number: '02',
    eyebrow: '두 props 비교',
    title: 'pendingProps / memoizedProps 비교',
    cards: [
      {
        kind: 'pendingProps',
        title: 'pendingProps',
        subtitle: '이번 작업에서 새롭게 처리할 props',
        items: [
          '상위 컴포넌트로부터 새롭게 전달받은 값',
          '이번 렌더링에서 처리할 입력',
          '아직 커밋되지 않은 "작업 중 상태"',
        ],
      },
      {
        kind: 'memoizedProps',
        title: 'memoizedProps',
        subtitle: '지난 출력 생성에 사용된 props',
        items: [
          '마지막으로 커밋된 렌더에서 사용된 값',
          '이전 렌더 결과의 기준',
          '화면에 반영된 "확정 상태"',
        ],
      },
    ],
  },
  scenario: {
    number: '03',
    eyebrow: '시나리오',
    title: '예시 변화 시나리오',
    previousLabel: '이전 렌더 (커밋됨)',
    previousCode: '<Button label="저장" />',
    nextLabel: '다음 렌더 작업 (진행 중)',
    nextCode: '<Button label="전송" />',
    stateLabel: '현재 Fiber 내부 상태',
    stateMemoized: 'memoizedProps.label = "저장"',
    statePending: 'pendingProps.label = "전송"',
    bannerPrefix: '아직 커밋되지 않았기 때문에, 이전 값 ',
    bannerOldValue: '"저장"',
    bannerMid: '과 새 값 ',
    bannerNewValue: '"전송"',
    bannerSuffix: '이 동시에 존재합니다.',
  },
  meaning: {
    number: '04',
    eyebrow: '내부 의미',
    title: 'Fiber 내부에서 두 값의 의미',
    steps: [
      {
        id: 'memo',
        title: '이전 결과',
        subtitle: '마지막 커밋',
        main: 'memoizedProps',
        iconName: 'clock',
        tone: 'emerald',
      },
      {
        id: 'pending',
        title: '새 작업 입력',
        subtitle: '이번 렌더',
        main: 'pendingProps',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'compare',
        title: '둘을 비교',
        subtitle: '변경 필요성 판단',
        main: '비교 결과',
        iconName: 'gitCompare',
        tone: 'violet',
      },
    ],
    description:
      '두 값을 비교하여 변경이 있는지 판단하고, 변경이 있을 때만 렌더링/커밋으로 이어집니다.',
    descriptionEmphasis: '변경이 있을 때만',
  },
  checkpoint: {
    number: '05',
    eyebrow: '실제 코드와 연결',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: '볼 것',
      lookFor: 'pendingProps, memoizedProps 주석',
      questionLabel: '학습 질문',
      question: 'React는 새 입력과 이전 입력을 어떤 필드로 구분할까?',
      buttonLabel: 'GitHub 보기',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCode,
    },
  },
  reasons: {
    number: '06',
    eyebrow: '비교 이유',
    title: '왜 둘을 비교해야 하는가?',
    cards: [
      {
        id: 'detect-change',
        title: '변경 여부 판단',
        body: '이전 값과 새 값을 비교해 실제로 변경이 있는지 확인합니다.',
        example: 'label: "저장" ≠ label: "전송"',
        iconName: 'scales',
        tone: 'emerald',
      },
      {
        id: 'skip-work',
        title: '불필요한 작업 생략 가능성',
        body: '변경이 없다면 렌더링/커밋을 건너뛰어 성능을 최적화할 수 있습니다.',
        example: '변경 없음 → 작업 생략',
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'track-diff',
        title: '이전 렌더 결과와 현재 입력의 차이 추적',
        body: '두 값을 통해 "무엇이 바뀌었는지"를 정확히 추적하고 디버깅할 수 있습니다.',
        example: '이전: 저장 → 현재: 전송',
        iconName: 'trending',
        tone: 'violet',
      },
    ],
  },
  quiz: {
    number: '07',
    eyebrow: '판단 퀴즈',
    title: '미니 판단 퀴즈',
    questionLabel: '질문',
    answerLabel: '핵심 정답',
    explanationLabel: '해설',
    question: 'pendingProps와 memoizedProps가 같다면 무조건 아무 일도 하지 않는가?',
    answer: '항상 그런 것은 아니지만, 이전 입력과 새 입력을 비교하는 중요한 단서가 된다.',
    explanationParts: [
      { text: 'props가 같아도 ' },
      { text: 'state', bold: true },
      { text: '나 ' },
      { text: 'context', bold: true },
      { text: '의 변경, ' },
      { text: '강제 업데이트', bold: true },
      { text: ', 부모의 ' },
      { text: 'key 변경', bold: true },
      { text: ', ' },
      { text: 'Suspense/우선순위 변화', bold: true },
      {
        text: ' 등 다른 요인으로 작업이 계속될 수 있습니다. 하지만 props 비교는 변경 판단의 핵심 출발점이 됩니다.',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: '다음으로 넘어가기',
    title: '다음으로 넘어가기',
    description:
      'props가 어떻게 기억되는지 봤다면, 이제 상태와 업데이트 요청이 Fiber 안에서 어디에 쌓이는지 살펴봅니다.',
    buttonLabel: '다음: memoizedState와 updateQueue',
    buttonHref: '/fiber-state-and-queue',
  },
};

const en: FiberPropsContent = {
  hero: {
    badge: '1',
    title: {
      line1: 'A Fiber does not hold',
      line2: 'just one set of props.',
    },
    emphasis: 'just one set',
    description:
      'It stores the new input for the current render and the input used by the last render as two separate fields.',
    vs: 'VS',
    memoizedCard: {
      title: 'memoizedProps ← last render',
      subtitle: 'props used by the last render',
      badge: 'baseline of the previous result',
      exampleLabel: 'example',
      example: '{ label: "Save", disabled: false }',
    },
    pendingCard: {
      title: 'pendingProps ← current work',
      subtitle: 'props newly arrived for this work',
      badge: 'input for this work',
      exampleLabel: 'example',
      example: '{ label: "Send", disabled: false }',
    },
  },
  comparison: {
    number: '02',
    eyebrow: 'Compare both',
    title: 'pendingProps vs memoizedProps',
    cards: [
      {
        kind: 'pendingProps',
        title: 'pendingProps',
        subtitle: 'New props to process during this work',
        items: [
          'A value newly passed in by the parent component',
          'The input to process during this render',
          'A "work in progress" state — not yet committed',
        ],
      },
      {
        kind: 'memoizedProps',
        title: 'memoizedProps',
        subtitle: 'Props that produced the last output',
        items: [
          'The value used by the last committed render',
          'The baseline of the previous render result',
          'A "committed" state already shown on screen',
        ],
      },
    ],
  },
  scenario: {
    number: '03',
    eyebrow: 'A change scenario',
    title: 'A concrete change scenario',
    previousLabel: 'Previous render (committed)',
    previousCode: '<Button label="Save" />',
    nextLabel: 'Next render (in progress)',
    nextCode: '<Button label="Send" />',
    stateLabel: 'Current Fiber internal state',
    stateMemoized: 'memoizedProps.label = "Save"',
    statePending: 'pendingProps.label = "Send"',
    bannerPrefix: 'Because it has not been committed yet, the old value ',
    bannerOldValue: '"Save"',
    bannerMid: ' and the new value ',
    bannerNewValue: '"Send"',
    bannerSuffix: ' exist at the same time.',
  },
  meaning: {
    number: '04',
    eyebrow: 'What they mean',
    title: 'What the two values mean inside a Fiber',
    steps: [
      {
        id: 'memo',
        title: 'Previous result',
        subtitle: 'last commit',
        main: 'memoizedProps',
        iconName: 'clock',
        tone: 'emerald',
      },
      {
        id: 'pending',
        title: 'New work input',
        subtitle: 'this render',
        main: 'pendingProps',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'compare',
        title: 'Compare both',
        subtitle: 'decide if change is needed',
        main: 'comparison result',
        iconName: 'gitCompare',
        tone: 'violet',
      },
    ],
    description:
      'Comparing the two values decides whether anything changed — only then does render/commit follow.',
    descriptionEmphasis: 'only then',
  },
  checkpoint: {
    number: '05',
    eyebrow: 'Connect to real source',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: 'Look for',
      lookFor: 'pendingProps, memoizedProps comments',
      questionLabel: 'Learning question',
      question: 'Which fields does React use to separate new input from prior input?',
      buttonLabel: 'View on GitHub',
      buttonHref:
        'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactInternalTypes.js',
    },
    code: {
      fileName: 'ReactInternalTypes.js',
      language: 'TypeScript',
      content: checkpointCodeEn,
    },
  },
  reasons: {
    number: '06',
    eyebrow: 'Why compare',
    title: 'Why compare the two?',
    cards: [
      {
        id: 'detect-change',
        title: 'Detect whether anything changed',
        body: 'Compare the prior value with the new one to confirm a real change.',
        example: 'label: "Save" ≠ label: "Send"',
        iconName: 'scales',
        tone: 'emerald',
      },
      {
        id: 'skip-work',
        title: 'Skip work when nothing changed',
        body: 'When unchanged, render/commit can be skipped to save work.',
        example: 'no change → skip work',
        iconName: 'gauge',
        tone: 'sky',
      },
      {
        id: 'track-diff',
        title: 'Track the diff between old and new',
        body: 'Knowing both values lets you trace exactly what changed when debugging.',
        example: 'before: Save → after: Send',
        iconName: 'trending',
        tone: 'violet',
      },
    ],
  },
  quiz: {
    number: '07',
    eyebrow: 'Mini judgment quiz',
    title: 'Mini judgment quiz',
    questionLabel: 'Question',
    answerLabel: 'Core answer',
    explanationLabel: 'Explanation',
    question: 'If pendingProps and memoizedProps are equal, does nothing ever happen?',
    answer: 'Not always — but the comparison is still a key signal for deciding what changed.',
    explanationParts: [
      { text: 'Even if props are equal, ' },
      { text: 'state', bold: true },
      { text: ' or ' },
      { text: 'context', bold: true },
      { text: ' changes, ' },
      { text: 'forced updates', bold: true },
      { text: ', a parent ' },
      { text: 'key change', bold: true },
      { text: ', or ' },
      { text: 'Suspense / priority changes', bold: true },
      {
        text: ' can keep work going. Still, the props comparison is the key starting point for deciding change.',
      },
    ],
  },
  next: {
    number: '08',
    eyebrow: 'Up next',
    title: 'Up next',
    description:
      'Now that you have seen how a Fiber remembers props, look at where state and update requests pile up inside the Fiber.',
    buttonLabel: 'Next: memoizedState & updateQueue',
    buttonHref: '/fiber-state-and-queue',
  },
};

export const fiberPropsContent: Record<Locale, FiberPropsContent> = { ko, en };
