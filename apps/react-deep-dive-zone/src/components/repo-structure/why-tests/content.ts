import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type { ToneKey };

export type IconName =
  | 'fileCode'
  | 'flask'
  | 'code'
  | 'shield'
  | 'target'
  | 'search'
  | 'refresh'
  | 'list'
  | 'check'
  | 'question';

export type ComparePoint = {
  text: string;
};

export type InsightCard = {
  id: 'input' | 'must' | 'edge' | 'compat';
  number: string;
  title: string;
  description: string;
  tone: ToneKey;
  icon: IconName;
};

export type FilePair = {
  id: 'create-element' | 'fiber-hooks' | 'dom-root';
  implementation: { name: string; description: string };
  test: { name: string; description: string };
};

export type ReadingStep = {
  number: string;
  title: string;
  description: string;
  tone: ToneKey;
  icon: IconName;
};

export type TestQuiz = {
  id: 'preserve-key' | 'spread-key';
  question: string;
  hint: string;
  accordionLabel: string;
  answer: string;
  answerDescription: string;
  tone: ToneKey;
};

export type TestCodeContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string; line4: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    repoUrl: string;
    implLabel: string;
    implCode: string;
    testLabel: string;
    testCode: string;
    badge1: string;
    badge2: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftItems: ComparePoint[];
    rightTitle: string;
    rightItems: ComparePoint[];
    quote: string;
  };
  insights: {
    eyebrow: string;
    title: string;
    cards: InsightCard[];
  };
  pairMap: {
    eyebrow: string;
    title: string;
    description: string;
    rows: FilePair[];
    banner: string;
    implementationLabel: string;
    testLabel: string;
  };
  spotlight: {
    eyebrow: string;
    title: string;
    leftLabel: string;
    leftFileTitle: string;
    leftFile: string;
    leftCoreLabel: string;
    leftCore: string;
    leftPointLabel: string;
    leftPoint: string;
    middleQuestion: string;
    middleCaption: string;
    rightLabel: string;
    rightFile: string;
    rightPointLabel: string;
    rightPoint: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    description: string;
    steps: ReadingStep[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    cards: TestQuiz[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    accentLine: { before: string; accent: string; after: string };
    primaryCta: string;
    secondaryCta: string;
    href: string;
    restartHref: string;
  };
};

const heroImplCode = `export function createElement(type, config, ...children) {
  const props = {};
  let key = null;

  if (config != null) {
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
  }

  return ReactElement(type, key, props);
}
`;

const heroTestCode = `it('should preserve key behavior', () => {
  const el = <div key="a" />;
  expect(el.key).toBe('a');
});

it('warns when key is spread', () => {
  // ...
});
`;

const spotlightCode = `it('should warn when key is spread', () => {
  const props = { key: 'a' };

  expect(() => createElement('div', props)).toErrorDev(
    'A props object containing a key ...'
  );
});
`;

export const testCodeContent: Record<Locale, TestCodeContent> = {
  ko: {
    hero: {
      badge: '01 · 시작하기',
      title: {
        line1: '구현 코드는 "어떻게"를',
        line2: '보여주고, 테스트 코드는',
        line3: '"무엇을 보장하는가"를',
        line4: '보여줍니다.',
      },
      description: 'React 내부를 깊게 읽고 싶다면, 테스트 파일도 함께 읽어야 합니다.',
      primaryCta: '구현과 테스트 함께 보기',
      secondaryCta: 'GitHub 테스트 열기',
      primaryHref: '#section-comparison',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/react/src/__tests__',
      implLabel: '구현 코드 (ReactJSXElement.js)',
      implCode: heroImplCode,
      testLabel: '테스트 코드 (ReactCreateElement-test.js)',
      testCode: heroTestCode,
      badge1: 'JS',
      badge2: 'JS',
    },
    comparison: {
      eyebrow: '02 · 구현만 보면 부족한 이유',
      title: '구현만 보면 부족한 이유',
      description: '같은 코드를 읽어도, 무엇을 읽느냐에 따라 보이는 것이 다릅니다.',
      leftTitle: '구현 코드만 읽으면',
      leftItems: [{ text: '흐름은 알 수 있다' }, { text: '의도는 불명확할 수 있다' }],
      rightTitle: '테스트까지 보면',
      rightItems: [{ text: '중요한 edge case가 보인다' }, { text: '보장하려는 동작이 선명해진다' }],
      quote: '테스트는 문서보다 더 구체적인 설계 메모가 되기도 합니다.',
    },
    insights: {
      eyebrow: '03 · 테스트가 알려주는 4가지',
      title: '테스트가 알려주는 4가지',
      cards: [
        {
          id: 'input',
          number: '1',
          title: '어떤 입력이\n중요한가',
          description: '다양한 입력 중 어떤 값들이 시스템의 핵심 검증 지점인지 알려줍니다.',
          tone: 'blue',
          icon: 'target',
        },
        {
          id: 'must',
          number: '2',
          title: '어떤 동작이\n깨지면 안 되는가',
          description: '반드시 지켜야 하는 동작과 그 한계를 명확히 보여줍니다.',
          tone: 'teal',
          icon: 'shield',
        },
        {
          id: 'edge',
          number: '3',
          title: '어떤 edge case를\n막는가',
          description: '예외 상황, 경계 조건을 통해 설계의 뒷면을 보여줍니다.',
          tone: 'violet',
          icon: 'search',
        },
        {
          id: 'compat',
          number: '4',
          title: '이전 동작과의\n호환성을 어디까지\n지키는가',
          description: '과거 버전과의 계약 범위를 테스트를 통해 드러냅니다.',
          tone: 'emerald',
          icon: 'refresh',
        },
      ],
    },
    pairMap: {
      eyebrow: '04 · 구현 파일 ↔ 테스트 파일 짝지어 보기',
      title: '구현 파일 ↔ 테스트 파일 짝지어 보기',
      description: '한 파일을 단독으로 읽지 말고, 짝이 되는 테스트 파일과 같이 읽으세요.',
      implementationLabel: '구현 파일',
      testLabel: '테스트 파일',
      rows: [
        {
          id: 'create-element',
          implementation: {
            name: 'ReactJSXElement.js',
            description: 'createElement 구현',
          },
          test: {
            name: 'ReactCreateElement-test.js',
            description: 'key / props / element shape 검증',
          },
        },
        {
          id: 'fiber-hooks',
          implementation: {
            name: 'ReactFiberHooks.js',
            description: 'Hook 핵심 동작 구현',
          },
          test: {
            name: 'ReactHooksWithNoopRenderer-test.js',
            description: 'Hooks 수명주기 / 스케줄링 검증',
          },
        },
        {
          id: 'dom-root',
          implementation: {
            name: 'ReactDOMRoot.js',
            description: 'Root 생성 / 업데이트 로직',
          },
          test: {
            name: 'ReactDOMRoot-test.js',
            description: '렌더링 / 마운트 / 경고 동작 검증',
          },
        },
      ],
      banner: '구현과 테스트를 함께 읽는 습관을 들이세요.',
    },
    spotlight: {
      eyebrow: '05 · 실제로 읽어보기: ReactCreateElement-test.js',
      title: '실제로 읽어보기: ReactCreateElement-test.js',
      leftLabel: '구현 파일',
      leftFileTitle: '파일',
      leftFile: 'ReactJSXElement.js',
      leftCoreLabel: '핵심 대상',
      leftCore: 'createElement',
      leftPointLabel: '포인트',
      leftPoint: 'key / props / element shape',
      middleQuestion: 'createElement는\nkey와 props를 어떤\n방식으로 보장할까?',
      middleCaption: '테스트가 이 질문의 답을 구체적으로 보여줍니다.',
      rightLabel: '테스트 파일',
      rightFile: 'ReactCreateElement-test.js',
      rightPointLabel: '포인트',
      rightPoint: 'key 처리, props 전달, 경고 동작',
      codeHeader: 'ReactCreateElement-test.js',
      codeBadge: 'main',
      code: spotlightCode,
      primaryCta: '구현 코드 열기',
      secondaryCta: '테스트 코드 열기',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react/src/__tests__',
    },
    steps: {
      eyebrow: '06 · 테스트 읽기 순서',
      title: '테스트 읽기 순서',
      description: '실전에서는 다음 네 단계를 따라가면 테스트 파일이 훨씬 잘 읽힙니다.',
      steps: [
        {
          number: '1',
          title: '테스트 이름을\n먼저 훑는다.',
          description: '어떤 동작을 검증하는지 힌트를 얻습니다.',
          tone: 'blue',
          icon: 'list',
        },
        {
          number: '2',
          title: '어떤 상황을\n보장하는지 추측한다.',
          description: '입력과 조건을 상상하며 맥락을 이해합니다.',
          tone: 'teal',
          icon: 'search',
        },
        {
          number: '3',
          title: '기대값을 읽는다.',
          description: '어떤 결과가 나와야 하는지, 정확한 계약을 확인합니다.',
          tone: 'violet',
          icon: 'check',
        },
        {
          number: '4',
          title: '구현 코드로 돌아가\n왜 그렇게 되는지\n확인한다.',
          description: '설계 의도와 구현 이유를 연결합니다.',
          tone: 'emerald',
          icon: 'code',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · 미니 분석 퀴즈',
      title: '미니 분석 퀴즈',
      cards: [
        {
          id: 'preserve-key',
          question:
            '"should preserve key behavior"라는\n테스트 이름을 보면 무엇을 확인하려는 걸까?',
          hint: '힌트: key, 유지, 동작',
          accordionLabel: '정답 보기',
          answer: '정답: key 처리 계약',
          answerDescription:
            'key가 입력으로 주어졌을 때, element에 올바르게 보존되는지 검증하려는 의도입니다.',
          tone: 'blue',
        },
        {
          id: 'spread-key',
          question: '"warns when key is spread"를 보면\n무엇을 의심해볼까?',
          hint: '힌트: 경고, spread, props',
          accordionLabel: '정답 보기',
          answer: '정답: key 전달 방식과 경고 조건',
          answerDescription:
            'key가 props 객체에 섞여 전달될 때, 경고가 발생하는지와 그 조건을 검증하는 의도입니다.',
          tone: 'teal',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: '구현과 테스트를 함께 읽는 방법을 익혔다면,',
      accentLine: {
        before: '이제 버전 맥락을 읽는 법, 즉 ',
        accent: 'CHANGELOG와 Releases',
        after: '를 구분해봅니다.',
      },
      primaryCta: '다음: CHANGELOG와 Releases',
      secondaryCta: '이전 페이지 다시 보기',
      href: '/changelog',
      restartHref: '/shared-role',
    },
  },
  en: {
    hero: {
      badge: '01 · getting started',
      title: {
        line1: 'Implementation code shows',
        line2: '"how"; test code shows',
        line3: '"what is guaranteed".',
        line4: '',
      },
      description:
        'If you want to read React internals deeply, you have to read the test files too.',
      primaryCta: 'See implementation + tests',
      secondaryCta: 'Open tests on GitHub',
      primaryHref: '#section-comparison',
      repoUrl: 'https://github.com/facebook/react/tree/main/packages/react/src/__tests__',
      implLabel: 'Implementation (ReactJSXElement.js)',
      implCode: heroImplCode,
      testLabel: 'Tests (ReactCreateElement-test.js)',
      testCode: heroTestCode,
      badge1: 'JS',
      badge2: 'JS',
    },
    comparison: {
      eyebrow: '02 · why implementation alone is not enough',
      title: 'Why implementation alone is not enough',
      description: 'The same code reveals different things depending on what you read.',
      leftTitle: 'If you read only implementation',
      leftItems: [{ text: 'You can follow the flow' }, { text: 'But the intent stays fuzzy' }],
      rightTitle: 'If you also read tests',
      rightItems: [
        { text: 'You see the important edge cases' },
        { text: 'You see what behaviour must hold' },
      ],
      quote: 'Tests can be more concrete design memos than documentation.',
    },
    insights: {
      eyebrow: '03 · four things tests reveal',
      title: 'Four things tests reveal',
      cards: [
        {
          id: 'input',
          number: '1',
          title: 'Which inputs\nmatter',
          description: 'Out of many possible inputs, tests highlight the critical ones.',
          tone: 'blue',
          icon: 'target',
        },
        {
          id: 'must',
          number: '2',
          title: 'Which behaviour\nmust not break',
          description: 'Tests make the must-hold behaviour and its limits explicit.',
          tone: 'teal',
          icon: 'shield',
        },
        {
          id: 'edge',
          number: '3',
          title: 'Which edge cases\nare guarded',
          description: 'Exception and boundary tests reveal the back side of the design.',
          tone: 'violet',
          icon: 'search',
        },
        {
          id: 'compat',
          number: '4',
          title: 'How far backwards\ncompatibility\ngoes',
          description: 'Tests expose the contract maintained with past versions.',
          tone: 'emerald',
          icon: 'refresh',
        },
      ],
    },
    pairMap: {
      eyebrow: '04 · pair implementation with tests',
      title: 'Pair implementation files with test files',
      description: 'Do not read implementation files alone — pair them with their test files.',
      implementationLabel: 'Implementation',
      testLabel: 'Test',
      rows: [
        {
          id: 'create-element',
          implementation: {
            name: 'ReactJSXElement.js',
            description: 'createElement implementation',
          },
          test: {
            name: 'ReactCreateElement-test.js',
            description: 'Validates key / props / element shape',
          },
        },
        {
          id: 'fiber-hooks',
          implementation: {
            name: 'ReactFiberHooks.js',
            description: 'Core Hook behaviour implementation',
          },
          test: {
            name: 'ReactHooksWithNoopRenderer-test.js',
            description: 'Validates Hooks lifecycle / scheduling',
          },
        },
        {
          id: 'dom-root',
          implementation: {
            name: 'ReactDOMRoot.js',
            description: 'Root creation / update logic',
          },
          test: {
            name: 'ReactDOMRoot-test.js',
            description: 'Validates render / mount / warning behaviour',
          },
        },
      ],
      banner: 'Build the habit of reading implementation and tests together.',
    },
    spotlight: {
      eyebrow: '05 · read one test file: ReactCreateElement-test.js',
      title: 'Read one test file: ReactCreateElement-test.js',
      leftLabel: 'Implementation',
      leftFileTitle: 'File',
      leftFile: 'ReactJSXElement.js',
      leftCoreLabel: 'Core target',
      leftCore: 'createElement',
      leftPointLabel: 'Focus',
      leftPoint: 'key / props / element shape',
      middleQuestion: 'How does createElement\nguarantee key and props?',
      middleCaption: 'The tests answer this question concretely.',
      rightLabel: 'Tests',
      rightFile: 'ReactCreateElement-test.js',
      rightPointLabel: 'Focus',
      rightPoint: 'Key handling, props passing, warning behaviour',
      codeHeader: 'ReactCreateElement-test.js',
      codeBadge: 'main',
      code: spotlightCode,
      primaryCta: 'Open the implementation',
      secondaryCta: 'Open the tests',
      primaryHref:
        'https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js',
      secondaryHref: 'https://github.com/facebook/react/tree/main/packages/react/src/__tests__',
    },
    steps: {
      eyebrow: '06 · how to read tests',
      title: 'How to read tests',
      description: 'Follow these four steps and the test file reads much more clearly.',
      steps: [
        {
          number: '1',
          title: 'Scan test names\nfirst.',
          description: 'Pick up hints about what behaviour the file validates.',
          tone: 'blue',
          icon: 'list',
        },
        {
          number: '2',
          title: 'Guess the\nsituation it guards.',
          description: 'Imagine inputs and conditions to build context.',
          tone: 'teal',
          icon: 'search',
        },
        {
          number: '3',
          title: 'Read the\nexpected value.',
          description: 'Confirm the exact contract — what result must hold.',
          tone: 'violet',
          icon: 'check',
        },
        {
          number: '4',
          title: 'Return to the\nimplementation to\nsee why.',
          description: 'Link design intent with the implementation reason.',
          tone: 'emerald',
          icon: 'code',
        },
      ],
    },
    quiz: {
      eyebrow: '07 · mini analysis quiz',
      title: 'Mini analysis quiz',
      cards: [
        {
          id: 'preserve-key',
          question: 'What is the test "should preserve key behavior"\nlikely checking?',
          hint: 'Hint: key, preserved, behaviour',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: the key handling contract',
          answerDescription:
            'It verifies that a given key input is correctly preserved on the element.',
          tone: 'blue',
        },
        {
          id: 'spread-key',
          question: 'What would you suspect when you see\n"warns when key is spread"?',
          hint: 'Hint: warning, spread, props',
          accordionLabel: 'Reveal the answer',
          answer: 'Answer: how key is passed and the warning condition',
          answerDescription:
            'It verifies that when key is mixed into props via spread, a warning is raised — and under what condition.',
          tone: 'teal',
        },
      ],
    },
    nextStep: {
      eyebrow: '08 · next step',
      title: 'With implementation + tests mastered,',
      accentLine: {
        before: 'next learn to read the version context — ',
        accent: 'CHANGELOG vs Releases',
        after: '.',
      },
      primaryCta: 'Next: CHANGELOG vs Releases',
      secondaryCta: 'Revisit the previous page',
      href: '/changelog',
      restartHref: '/shared-role',
    },
  },
};
