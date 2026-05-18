export type IntroLocale = 'ko' | 'en';

export type IntroContent = {
  hero: {
    title: string;
    lead: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationLabel: string;
    badges: {
      screenReader: string;
      keyboard: string;
      captions: string;
      contrast: string;
      fontSize: string;
    };
    browser: {
      url: string;
      heading: string;
      lines: string[];
      checkLabel: string;
    };
  };
  principles: {
    title: string;
    description: string;
    cardLabel: string;
    exampleLabel: string;
    exampleAction: string;
    cards: {
      id: string;
      title: string;
      body: string;
      example: string;
    }[];
  };
  comparison: {
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    cards: {
      id: string;
      title: string;
      before: { example: React.ReactNode | string; note: string };
      after: { example: React.ReactNode | string; note: string };
    }[];
  };
  handsOn: {
    title: string;
    description: string;
    mission1: {
      title: string;
      hint: string;
      tabLabel: string;
      steps: { label: string; type: 'button' | 'input' | 'select' | 'checkbox' }[];
      statusTemplate: string;
      checkboxLabel: string;
      selectLabel: string;
      inputPlaceholder: string;
    };
    mission2: {
      title: string;
      question: string;
      buttonLabel: string;
      options: string[];
      correctIndex: number;
      feedback: string;
    };
  };
  cta: {
    label: string;
    sub: string;
    aria: string;
  };
};

export const introContent: Record<IntroLocale, IntroContent> = {
  ko: {
    hero: {
      title: '웹접근성이란?',
      lead: '모든 사용자가 웹을 인식하고, 이해하고, 탐색하고, 사용할 수 있도록 만드는 것',
      description:
        '장애 유무, 환경, 사용하는 기기와 상관없이 모든 사람이 동등하게 정보와 기능을 이용할 수 있도록 웹을 설계하고 구현하는 것입니다. 접근성은 일부 사람을 위한 것이 아니라, 모두를 위한 기본 가치입니다.',
      primaryCta: '1분 요약 보기',
      secondaryCta: '직접 체험해보기',
      illustrationLabel: '다양한 사용자가 접근 가능한 웹페이지를 함께 이용하는 일러스트',
      badges: {
        screenReader: '스크린 리더',
        keyboard: '키보드 접근',
        captions: '자막/설명',
        contrast: '명도 대비',
        fontSize: '글자 크기',
      },
      browser: {
        url: 'a11y-lab.dev',
        heading: '접근성을 갖춘 페이지',
        lines: [
          '모든 사용자가 동등하게 정보에 접근합니다.',
          '키보드만으로도 모든 기능을 사용할 수 있습니다.',
          '이미지에는 대체 텍스트가 제공됩니다.',
        ],
        checkLabel: '검증 완료',
      },
    },
    principles: {
      title: '핵심 개념 4가지',
      description: '웹접근성은 다음 4가지 원칙을 기반으로 합니다. (WCAG의 POUR 원칙)',
      cardLabel: '원칙',
      exampleLabel: '예시',
      exampleAction: '예시 보기',
      cards: [
        {
          id: 'perceivable',
          title: '인식 가능',
          body: '사용자가 정보를 인식할 수 있도록 제공합니다.',
          example: '예: 대체 텍스트 제공, 명도 대비',
        },
        {
          id: 'operable',
          title: '운용 가능',
          body: '사용자가 다양한 방법으로 조작할 수 있도록 합니다.',
          example: '예: 키보드 조작 지원, 포커스 관리',
        },
        {
          id: 'understandable',
          title: '이해 가능',
          body: '사용자가 내용을 이해하고 예측할 수 있도록 합니다.',
          example: '예: 쉬운 문장, 일관된 내비게이션',
        },
        {
          id: 'robust',
          title: '견고함',
          body: '다양한 기술과 환경에서도 안정적으로 동작해야 합니다.',
          example: '예: 표준 준수, 보조기기 호환',
        },
      ],
    },
    comparison: {
      title: '접근성 없는 화면 vs 있는 화면',
      description: '작은 차이가 큰 사용성의 차이를 만듭니다.',
      beforeLabel: '개선 전',
      afterLabel: '개선 후',
      cards: [
        {
          id: 'label',
          title: 'label 없는 입력창 vs label 있는 입력창',
          before: { example: '이름을 입력하세요', note: '어떤 정보 입력창인지 읽기 어렵다.' },
          after: { example: '홍길동', note: '라벨을 통해 목적을 명확히 인식.' },
        },
        {
          id: 'button',
          title: 'div 버튼 vs button 요소',
          before: {
            example: '제출하기',
            note: '비표준 구조는 보조기기에서 버튼으로 인식되지 않을 수 있음.',
          },
          after: { example: '제출하기', note: 'button 요소로 정확히 인식.' },
        },
        {
          id: 'alt',
          title: 'alt 없는 이미지 vs alt가 있는 이미지',
          before: { example: '이미지', note: '이미지 목적을 이해하기 어렵다.' },
          after: {
            example: '푸른 하늘과 산이 있는 풍경 사진',
            note: 'alt 텍스트로 내용을 이해할 수 있음.',
          },
        },
        {
          id: 'focus',
          title: 'focus 표시 없는 버튼 vs focus ring이 명확한 버튼',
          before: { example: '다음 단계', note: '포커스 위치를 알기 어렵다.' },
          after: { example: '다음 단계', note: '포커스가 명확해 현재 위치를 인지.' },
        },
      ],
    },
    handsOn: {
      title: '직접 느껴보기',
      description: '작은 체험을 통해 접근성의 중요성을 직접 경험해보세요!',
      mission1: {
        title: '키보드 탐색 체험',
        hint: 'Tab 키를 눌러 요소들을 순서대로 탐색해보세요.',
        tabLabel: 'Tab',
        steps: [
          { label: '회원가입', type: 'button' },
          { label: '이메일 입력', type: 'input' },
          { label: '관심 분야 선택', type: 'select' },
          { label: '이용약관 동의', type: 'checkbox' },
        ],
        statusTemplate: '현재 {n}번 요소에 포커스가 있습니다.',
        checkboxLabel: '이용약관에 동의합니다',
        selectLabel: '프론트엔드',
        inputPlaceholder: 'you@example.com',
      },
      mission2: {
        title: '올바른 버튼 이름 고르기',
        question: '다음 버튼의 이름으로 가장 적절한 것은?',
        buttonLabel: '바로 담기',
        options: ['버튼', '클릭', '장바구니에 상품 담기'],
        correctIndex: 2,
        feedback: '정답입니다! 명확하고 구체적인 이름이 좋아요.',
      },
    },
    cta: {
      label: '다음: 왜 웹접근성이 중요한가?',
      sub: '다음 학습으로 이어집니다',
      aria: '다음 학습 단계: 왜 웹접근성이 중요한가? 페이지로 이동',
    },
  },
  en: {
    hero: {
      title: 'What is Web Accessibility?',
      lead: 'Making the web perceivable, understandable, navigable, and usable for everyone',
      description:
        'Designing and building the web so that everyone — regardless of ability, environment, or device — can access information and functionality equally. Accessibility is not for a subset of users; it is a baseline quality for all.',
      primaryCta: 'See 1-minute summary',
      secondaryCta: 'Try it yourself',
      illustrationLabel: 'Illustration of a diverse group of users sharing an accessible web page',
      badges: {
        screenReader: 'Screen reader',
        keyboard: 'Keyboard access',
        captions: 'Captions',
        contrast: 'Contrast',
        fontSize: 'Text size',
      },
      browser: {
        url: 'a11y-lab.dev',
        heading: 'An accessible page',
        lines: [
          'Everyone can reach the same information.',
          'Every feature works with the keyboard alone.',
          'Images include meaningful alt text.',
        ],
        checkLabel: 'Verified',
      },
    },
    principles: {
      title: 'Four Core Principles',
      description: 'Web accessibility rests on these four principles. (WCAG POUR principles)',
      cardLabel: 'Principle',
      exampleLabel: 'Example',
      exampleAction: 'View example',
      cards: [
        {
          id: 'perceivable',
          title: 'Perceivable',
          body: 'Information must be presented in ways users can perceive.',
          example: 'e.g. Alt text, color contrast',
        },
        {
          id: 'operable',
          title: 'Operable',
          body: 'Users must be able to operate the interface in many ways.',
          example: 'e.g. Keyboard support, focus management',
        },
        {
          id: 'understandable',
          title: 'Understandable',
          body: 'Content and operation must be understandable and predictable.',
          example: 'e.g. Plain language, consistent navigation',
        },
        {
          id: 'robust',
          title: 'Robust',
          body: 'Content must work reliably across technologies and assistive tools.',
          example: 'e.g. Standards compliance, AT compatibility',
        },
      ],
    },
    comparison: {
      title: 'Before vs After Accessibility',
      description: 'Small implementation choices create big usability differences.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      cards: [
        {
          id: 'label',
          title: 'Input without label vs with label',
          before: { example: 'Enter your name', note: 'Hard to tell what the field is for.' },
          after: { example: 'Jane Doe', note: 'The label makes purpose obvious.' },
        },
        {
          id: 'button',
          title: 'div button vs real button element',
          before: {
            example: 'Submit',
            note: 'Non-standard markup may not be recognized as a button by AT.',
          },
          after: { example: 'Submit', note: 'Recognized as a button via the button element.' },
        },
        {
          id: 'alt',
          title: 'Image without alt vs image with alt',
          before: { example: 'Image', note: 'The image purpose cannot be understood.' },
          after: {
            example: 'A photo of mountains under a clear blue sky',
            note: 'Alt text conveys the content.',
          },
        },
        {
          id: 'focus',
          title: 'Button without focus ring vs with clear focus ring',
          before: { example: 'Next step', note: 'Hard to tell where focus is.' },
          after: { example: 'Next step', note: 'Focus position is clearly visible.' },
        },
      ],
    },
    handsOn: {
      title: 'Try it yourself',
      description: 'Experience why accessibility matters through small interactive missions.',
      mission1: {
        title: 'Keyboard navigation',
        hint: 'Press Tab to move through the elements in order.',
        tabLabel: 'Tab',
        steps: [
          { label: 'Sign up', type: 'button' },
          { label: 'Email', type: 'input' },
          { label: 'Interests', type: 'select' },
          { label: 'Agree to terms', type: 'checkbox' },
        ],
        statusTemplate: 'Focus is currently on element {n}.',
        checkboxLabel: 'I agree to the terms',
        selectLabel: 'Frontend',
        inputPlaceholder: 'you@example.com',
      },
      mission2: {
        title: 'Pick the best button name',
        question: 'Which is the most appropriate name for this button?',
        buttonLabel: 'Add now',
        options: ['Button', 'Click', 'Add this product to the cart'],
        correctIndex: 2,
        feedback: 'Correct! Clear, specific names are best.',
      },
    },
    cta: {
      label: 'Next: Why does web accessibility matter?',
      sub: 'Continue to the next lesson',
      aria: 'Continue to the next lesson: Why does web accessibility matter?',
    },
  },
};
