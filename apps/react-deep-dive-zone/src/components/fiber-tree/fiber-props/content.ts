import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

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
  number: string;
  title: string;
  body: string;
  iconName: 'clock' | 'zap' | 'gitCompare';
  tone: ToneKey;
};

export type ContinueCase = {
  id: 'state' | 'context' | 'force-update';
  title: string;
  body: string;
  iconName: 'refresh' | 'share' | 'hammer';
  tone: ToneKey;
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
    badge: string;
    eyebrow: string;
    title: string;
    cards: ComparisonCard[];
  };
  scenario: {
    badge: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: MeaningStep[];
    casesLabel: string;
    cases: ContinueCase[];
    note: string;
  };
  checkpoint: {
    badge: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    cards: ReasonCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
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
    badge: 'Fiber 트리 · 5/10단계',
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
    badge: '01',
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
    badge: '02',
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
    badge: '03',
    eyebrow: '내부 의미',
    title: 'Fiber 내부에서 두 값의 의미',
    description:
      '지난 커밋의 입력과 이번 입력을 비교해, 이 Fiber의 작업을 건너뛸 수 있는지 판단하는 출발점으로 삼습니다.',
    steps: [
      {
        id: 'memo',
        number: '01',
        title: 'memoizedProps',
        body: '마지막으로 커밋된 렌더에서 사용한 입력입니다.',
        iconName: 'clock',
        tone: 'emerald',
      },
      {
        id: 'pending',
        number: '02',
        title: 'pendingProps',
        body: '이번 렌더 작업에 새로 들어온 입력입니다.',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'compare',
        number: '03',
        title: '둘을 비교',
        body: '두 props가 같은 참조(`===`)인지 확인해 다시 렌더링할지 판단합니다.',
        iconName: 'gitCompare',
        tone: 'violet',
      },
    ],
    casesLabel: 'props가 같아도 작업이 이어지는 경우',
    cases: [
      {
        id: 'state',
        title: 'state 업데이트',
        body: '이 Fiber에 `setState` 같은 업데이트가 예약돼 있으면 다시 렌더링합니다.',
        iconName: 'refresh',
        tone: 'amber',
      },
      {
        id: 'context',
        title: 'context 변경',
        body: '읽고 있는 context 값이 바뀌면 props가 같아도 다시 렌더링합니다.',
        iconName: 'share',
        tone: 'teal',
      },
      {
        id: 'force-update',
        title: 'forceUpdate',
        body: '클래스 컴포넌트의 `forceUpdate()`는 props 비교와 상관없이 다시 렌더링하게 합니다.',
        iconName: 'hammer',
        tone: 'indigo',
      },
    ],
    note: 'props가 같고 예약된 업데이트나 context 변경도 없을 때에만, React는 이 Fiber의 작업을 건너뜁니다(bailout).',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    info: {
      title: 'React 소스코드에서 직접 확인',
      filesLabel: '파일',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: '볼 것',
      lookFor: 'pendingProps, memoizedProps 주석',
      questionLabel: '학습 질문',
      question: 'React는 새 입력과 이전 입력을 어떤 필드로 구분할까?',
      buttonLabel: 'ReactInternalTypes.js 읽기',
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
    badge: '05',
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
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'memoizedState와 updateQueue',
    description:
      'props가 어떻게 기억되는지 봤다면, 이제 상태와 업데이트 요청이 Fiber 안에서 어디에 쌓이는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/fiber-state-and-queue',
  },
};

const en: FiberPropsContent = {
  hero: {
    badge: 'Fiber Tree · 5/10',
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
    badge: '01',
    eyebrow: 'COMPARE BOTH',
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
    badge: '02',
    eyebrow: 'SCENARIO',
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
    badge: '03',
    eyebrow: 'WHAT THEY MEAN',
    title: 'What the two values mean inside a Fiber',
    description:
      'Comparing the last committed input with this input is the starting point for deciding whether this Fiber’s work can be skipped.',
    steps: [
      {
        id: 'memo',
        number: '01',
        title: 'memoizedProps',
        body: 'The input used by the last committed render.',
        iconName: 'clock',
        tone: 'emerald',
      },
      {
        id: 'pending',
        number: '02',
        title: 'pendingProps',
        body: 'The new input that arrived for this render.',
        iconName: 'zap',
        tone: 'sky',
      },
      {
        id: 'compare',
        number: '03',
        title: 'Compare both',
        body: 'Checks whether the two props are the same reference (`===`) to decide whether to render again.',
        iconName: 'gitCompare',
        tone: 'violet',
      },
    ],
    casesLabel: 'Work that continues even when props are equal',
    cases: [
      {
        id: 'state',
        title: 'state update',
        body: 'If an update such as `setState` is scheduled on this Fiber, it renders again.',
        iconName: 'refresh',
        tone: 'amber',
      },
      {
        id: 'context',
        title: 'context change',
        body: 'If a context value it reads changes, it renders again even with equal props.',
        iconName: 'share',
        tone: 'teal',
      },
      {
        id: 'force-update',
        title: 'forceUpdate',
        body: 'A class component’s `forceUpdate()` renders again regardless of the props comparison.',
        iconName: 'hammer',
        tone: 'indigo',
      },
    ],
    note: 'Only when props are equal and no update or context change is scheduled does React skip this Fiber’s work (bailout).',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    info: {
      title: 'Verify in the React source',
      filesLabel: 'File',
      file: 'packages/react-reconciler/src/ReactInternalTypes.js',
      lookForLabel: 'Look for',
      lookFor: 'pendingProps, memoizedProps comments',
      questionLabel: 'Learning question',
      question: 'Which fields does React use to separate new input from prior input?',
      buttonLabel: 'Read ReactInternalTypes.js',
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
    badge: '05',
    eyebrow: 'WHY COMPARE',
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
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'memoizedState & updateQueue',
    description:
      'Now that you have seen how a Fiber remembers props, look at where state and update requests pile up inside the Fiber.',
    cta: 'Go to the next page',
    href: '/fiber-state-and-queue',
  },
};

export const fiberPropsContent: Record<Locale, FiberPropsContent> = { ko, en };
