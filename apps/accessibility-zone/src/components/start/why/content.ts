import type { Locale } from '@it-tech-blog/preferences';

export type ReasonTone = 'primary' | 'success' | 'secondary' | 'warning';

export type ReasonCard = {
  id: string;
  title: string;
  body: string;
  example: string;
  tone: ReasonTone;
};

export type SituationId =
  | 'one-hand'
  | 'silent'
  | 'sunlight'
  | 'no-mouse'
  | 'small-screen'
  | 'low-focus';

export type Situation = {
  id: SituationId;
  label: string;
  description: string;
};

export type ProblemStepTone = 'error' | 'warning' | 'amber' | 'success' | 'info';

export type ProblemStep = {
  index: number;
  title: string;
  description: string;
  badge: string;
  tone: ProblemStepTone;
};

export type ChecklistStatus = 'done' | 'review' | 'progress' | 'todo';

export type ChecklistItem = {
  id: string;
  label: string;
  initialChecked: boolean;
  status: ChecklistStatus;
};

export type ImportanceContent = {
  meta: {
    pageTitle: string;
  };
  hero: {
    badge: string;
    title: string;
    lead: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationLabel: string;
    floatingChips: {
      captions: string;
      keyboard: string;
      contrast: string;
      touch: string;
    };
    avatarLabels: {
      laptop: string;
      wheelchair: string;
      cane: string;
      phone: string;
    };
    browser: {
      url: string;
      headline: string;
      verifiedBadge: string;
    };
  };
  reasons: {
    title: string;
    description: string;
    cards: ReasonCard[];
    detailCta: string;
  };
  situation: {
    title: string;
    description: string;
    tabsLabel: string;
    activeBadge: string;
    situations: Situation[];
    beforeLabel: string;
    afterLabel: string;
    demos: {
      captions: {
        title: string;
        beforeNote: string;
        afterCaption: string;
        afterTime: string;
        helper: string;
      };
      contrast: {
        title: string;
        beforeHeading: string;
        beforeBody: string;
        beforeCta: string;
        afterHeading: string;
        afterBody: string;
        afterCta: string;
        helper: string;
      };
      touchTarget: {
        title: string;
        beforeButton: string;
        afterButton: string;
        targetHint: string;
        helper: string;
      };
    };
  };
  problem: {
    title: string;
    description: string;
    steps: ProblemStep[];
  };
  diagnosis: {
    title: string;
    description: string;
    items: ChecklistItem[];
    statusBadges: Record<ChecklistStatus, string>;
    scoreTitle: string;
    scoreUnit: string;
    scoreLevels: {
      excellent: string;
      good: string;
      fair: string;
      poor: string;
    };
    legendLabels: Record<ChecklistStatus, string>;
    legendUnit: string;
    disclaimer: string;
    a11yScoreTemplate: string;
  };
  summary: {
    title: string;
    bullets: string[];
  };
  insights: {
    title: string;
    items: string[];
  };
  cta: {
    main: string;
    sub: string;
    aria: string;
  };
};

export const importanceContent: Record<Locale, ImportanceContent> = {
  ko: {
    meta: {
      pageTitle: '왜 웹접근성이 중요한가? — A11y Lab',
    },
    hero: {
      badge: '학습 페이지',
      title: '왜 웹접근성이 중요한가?',
      lead: '접근성은 선택이 아니라 제품의 기본 완성도입니다',
      description:
        '모든 사람이 더 쉽고 편리하게 사용할 수 있는 경험은 제품의 품질과 신뢰를 높이고, 더 많은 기회를 만듭니다. 접근성은 포용, 신뢰, 성과로 이어지는 핵심 경쟁력입니다.',
      primaryCta: '중요한 이유 1분 요약',
      secondaryCta: '상황별 체험 시작',
      illustrationLabel:
        '브라우저 화면 주위에 다양한 사용자와 자막·키보드·명도비·터치 영역 기능 카드가 배치된 일러스트',
      floatingChips: {
        captions: '자막',
        keyboard: '키보드',
        contrast: '명도비',
        touch: '터치 영역',
      },
      avatarLabels: {
        laptop: '노트북을 사용하는 사용자',
        wheelchair: '휠체어를 사용하는 사용자',
        cane: '흰 지팡이를 사용하는 사용자',
        phone: '스마트폰을 사용하는 사용자',
      },
      browser: {
        url: 'a11y-lab.dev/why',
        headline: '접근성 검증 완료',
        verifiedBadge: '검증',
      },
    },
    reasons: {
      title: '웹접근성이 중요한 4가지 이유',
      description:
        '좋은 접근성은 사용자 경험을 높이고, 더 넓은 기회를 만들며, 제품의 완성도를 강화합니다.',
      detailCta: '자세히 보기',
      cards: [
        {
          id: 'ux',
          title: '사용자 경험',
          body: '더 쉽고 명확하고 편리하게 이용할 수 있는 환경을 만듭니다.',
          example: '사례: 읽기 쉬운 텍스트와 쉬운 탐색으로 만족도 향상',
          tone: 'primary',
        },
        {
          id: 'inclusion',
          title: '포용성',
          body: '다양한 환경과 조건에서도 더 많은 사람이 서비스를 이용할 수 있게 합니다.',
          example: '사례: 자막 제공과 키보드 사용 지원',
          tone: 'secondary',
        },
        {
          id: 'quality',
          title: '품질과 유지보수성',
          body: '의미 있는 구조와 일관성은 품질을 높이고 오류를 줄여 유지보수를 쉽게 합니다.',
          example: '사례: 명확한 라벨과 예측 가능한 레이아웃',
          tone: 'success',
        },
        {
          id: 'business',
          title: '비즈니스 / SEO / 정책 대응',
          body: '검색 노출, 사용자 신뢰, 법적·정책적 요구에 더 잘 대응할 수 있습니다.',
          example: '사례: 검색 가시성 향상과 정책·가이드라인 준비',
          tone: 'warning',
        },
      ],
    },
    situation: {
      title: '이런 상황에서도 사용할 수 있나요?',
      description: '사용자는 다양한 상황에서 접근성의 도움을 필요로 할 수 있습니다.',
      tabsLabel: '상황 선택',
      activeBadge: '선택됨',
      beforeLabel: '개선 전',
      afterLabel: '개선 후',
      situations: [
        {
          id: 'one-hand',
          label: '한 손 사용',
          description: '한 손으로만 기기를 잡고 조작해야 하는 상황',
        },
        {
          id: 'silent',
          label: '소리 없는 환경',
          description: '공공장소나 회의 중처럼 소리를 켤 수 없는 환경',
        },
        {
          id: 'sunlight',
          label: '밝은 야외',
          description: '햇빛이 강해 화면이 잘 보이지 않는 환경',
        },
        {
          id: 'no-mouse',
          label: '마우스 없는 사용',
          description: '키보드나 보조 기기만으로 화면을 조작하는 상황',
        },
        {
          id: 'small-screen',
          label: '작은 화면',
          description: '작은 모바일 기기에서 정보를 확인해야 하는 상황',
        },
        {
          id: 'low-focus',
          label: '집중력 저하 상태',
          description: '피곤하거나 멀티태스킹 중이라 집중하기 어려운 상황',
        },
      ],
      demos: {
        captions: {
          title: '자막 없는 영상 vs 자막 있는 영상',
          beforeNote: '음성 안내만 있어 무엇이 들리는지 알 수 없습니다.',
          afterCaption: '오늘은 접근성의 중요성에 대해 알아보겠습니다.',
          afterTime: '00:42',
          helper:
            '자막이 있으면 소리 없이도 내용을 이해할 수 있어 공공장소나 조용한 환경에서 더 쉽게 시청할 수 있어요.',
        },
        contrast: {
          title: '대비 낮은 화면 vs 대비 좋은 화면',
          beforeHeading: '안내 메시지',
          beforeBody: '이 텍스트는 대비가 낮아 읽기 어렵습니다.',
          beforeCta: '확인하기',
          afterHeading: '안내 메시지',
          afterBody: '이 텍스트는 대비가 좋아 읽기 쉽습니다.',
          afterCta: '확인하기',
          helper:
            '좋은 대비는 시력이 약한 사용자나 밝은 환경에서도 텍스트와 UI를 쉽게 인지할 수 있게 도와줍니다.',
        },
        touchTarget: {
          title: '작은 터치 영역 vs 충분한 클릭 영역',
          beforeButton: '다음',
          afterButton: '다음',
          targetHint: '권장 44×44',
          helper:
            '충분한 크기의 터치 영역은 손 떨림이 있거나 한 손으로 조작할 때 오작동을 줄여줍니다.',
        },
      },
    },
    problem: {
      title: '접근성이 부족하면 생기는 문제',
      description: '작은 장벽이 쌓이면 큰 문제로 이어집니다.',
      steps: [
        {
          index: 1,
          title: '정보 탐색 실패',
          description: '필요한 정보를 찾기 어렵거나 이해하지 못합니다.',
          badge: '시작점',
          tone: 'error',
        },
        {
          index: 2,
          title: '입력 실수 증가',
          description: '입력이 어렵거나 잘못되어 반복 실수가 발생합니다.',
          badge: '문제 확대',
          tone: 'warning',
        },
        {
          index: 3,
          title: '행동 중단',
          description: '목표를 달성하지 못하고 중간에 포기하게 됩니다.',
          badge: '사용 경험 악화',
          tone: 'amber',
        },
        {
          index: 4,
          title: '이탈 증가',
          description: '사용자가 서비스를 떠나면서 전환과 매출이 감소합니다.',
          badge: '비즈니스 영향',
          tone: 'success',
        },
        {
          index: 5,
          title: '신뢰 하락',
          description: '브랜드에 대한 신뢰가 떨어지고 부정적 인식이 확산됩니다.',
          badge: '장기적 손실',
          tone: 'info',
        },
      ],
    },
    diagnosis: {
      title: '자가 진단 체크리스트',
      description: '우리 서비스의 접근성 상태를 스스로 점검해 보세요.',
      items: [
        {
          id: 'keyboard',
          label: '키보드만으로 이용 가능한가?',
          initialChecked: true,
          status: 'done',
        },
        { id: 'label', label: '폼에 label이 있는가?', initialChecked: true, status: 'done' },
        { id: 'focus', label: 'focus가 보이는가?', initialChecked: false, status: 'review' },
        { id: 'contrast', label: '명도 대비가 충분한가?', initialChecked: true, status: 'done' },
        {
          id: 'alt',
          label: '이미지에 대체 텍스트(alt)가 있는가?',
          initialChecked: false,
          status: 'review',
        },
        {
          id: 'headings',
          label: '제목 구조(h1~h6)가 논리적인가?',
          initialChecked: false,
          status: 'progress',
        },
        {
          id: 'errors',
          label: '오류 메시지가 이해하기 쉬운가?',
          initialChecked: true,
          status: 'done',
        },
      ],
      statusBadges: {
        done: '완료',
        review: '점검 필요',
        progress: '진행 중',
        todo: '미완료',
      },
      scoreTitle: '현재 점수',
      scoreUnit: '점',
      scoreLevels: {
        excellent: '우수',
        good: '양호',
        fair: '보통',
        poor: '점검 필요',
      },
      legendLabels: {
        done: '완료',
        review: '점검 필요',
        progress: '진행 중',
        todo: '미완료',
      },
      legendUnit: '개',
      disclaimer: '※ 점수는 예시이며, 실제 진단 결과와 다를 수 있습니다.',
      a11yScoreTemplate: '현재 접근성 점수 {score}점',
    },
    summary: {
      title: '요약',
      bullets: [
        '접근성은 모두를 위한 더 나은 사용자 경험을 만듭니다.',
        '다양한 사용 환경과 사용자층을 포용하여 더 많은 기회를 만듭니다.',
        '품질과 유지보수성을 높여 개발 효율과 안정성을 향상시킵니다.',
        '비즈니스 성과, 검색 노출, 정책·법적 요구에 유리합니다.',
      ],
    },
    insights: {
      title: '핵심 인사이트 3줄',
      items: [
        '좋은 접근성은 좋은 제품의 기본입니다.',
        '작은 개선이 큰 사용자 가치를 만듭니다.',
        '오늘의 선택이 더 큰 성과와 신뢰로 돌아옵니다.',
      ],
    },
    cta: {
      main: '다음: 장애 유형과 사용자 환경',
      sub: '다음 학습으로 이어집니다',
      aria: '다음 학습 단계: 장애 유형과 사용자 환경 페이지로 이동',
    },
  },
  en: {
    meta: {
      pageTitle: 'Why does web accessibility matter? — A11y Lab',
    },
    hero: {
      badge: 'Learning page',
      title: 'Why does web accessibility matter?',
      lead: 'Accessibility is not a choice — it is part of a product’s baseline quality',
      description:
        'An experience everyone can use easily improves quality and trust, and opens up more opportunities. Accessibility links inclusion, trust, and outcomes into a single competitive advantage.',
      primaryCta: '1-minute summary',
      secondaryCta: 'Try the situations',
      illustrationLabel:
        'Illustration of a browser surrounded by diverse users with floating captions, keyboard, contrast, and touch-target chips',
      floatingChips: {
        captions: 'Captions',
        keyboard: 'Keyboard',
        contrast: 'Contrast',
        touch: 'Touch target',
      },
      avatarLabels: {
        laptop: 'Laptop user',
        wheelchair: 'Wheelchair user',
        cane: 'White-cane user',
        phone: 'Smartphone user',
      },
      browser: {
        url: 'a11y-lab.dev/why',
        headline: 'Accessibility check passed',
        verifiedBadge: 'Verified',
      },
    },
    reasons: {
      title: 'Four reasons web accessibility matters',
      description:
        'Good accessibility improves user experience, opens more opportunity, and reinforces product quality.',
      detailCta: 'Learn more',
      cards: [
        {
          id: 'ux',
          title: 'User experience',
          body: 'Creates an environment that is easier, clearer, and more convenient to use.',
          example: 'e.g. higher satisfaction through readable text and easy navigation',
          tone: 'primary',
        },
        {
          id: 'inclusion',
          title: 'Inclusion',
          body: 'Lets more people use the service across diverse environments and conditions.',
          example: 'e.g. captions and keyboard-only support',
          tone: 'secondary',
        },
        {
          id: 'quality',
          title: 'Quality & maintainability',
          body: 'Meaningful structure and consistency raise quality and reduce maintenance cost.',
          example: 'e.g. clear labels and predictable layouts',
          tone: 'success',
        },
        {
          id: 'business',
          title: 'Business / SEO / policy',
          body: 'Better aligned with search visibility, user trust, and legal/policy requirements.',
          example: 'e.g. improved discoverability and policy readiness',
          tone: 'warning',
        },
      ],
    },
    situation: {
      title: 'Can the service still be used in these situations?',
      description: 'Users may need accessibility help in many everyday situations.',
      tabsLabel: 'Choose a situation',
      activeBadge: 'Selected',
      beforeLabel: 'Before',
      afterLabel: 'After',
      situations: [
        {
          id: 'one-hand',
          label: 'One-handed use',
          description: 'Holding and operating the device with only one hand',
        },
        {
          id: 'silent',
          label: 'Silent environment',
          description: 'In public or in a meeting, where sound cannot be turned on',
        },
        {
          id: 'sunlight',
          label: 'Bright sunlight',
          description: 'Strong sunlight makes the screen hard to see',
        },
        {
          id: 'no-mouse',
          label: 'Without a mouse',
          description: 'Operating the screen with keyboard or assistive devices only',
        },
        {
          id: 'small-screen',
          label: 'Small screen',
          description: 'Checking information on a small mobile device',
        },
        {
          id: 'low-focus',
          label: 'Low focus state',
          description: 'Tired or multitasking, hard to concentrate',
        },
      ],
      demos: {
        captions: {
          title: 'Video without captions vs with captions',
          beforeNote: 'Only audio is provided, so it is unclear what is being said.',
          afterCaption: 'Today we will explore why accessibility matters.',
          afterTime: '00:42',
          helper:
            'Captions let people understand the content without sound, making it easier to watch in public or quiet places.',
        },
        contrast: {
          title: 'Low-contrast screen vs good-contrast screen',
          beforeHeading: 'Notice',
          beforeBody: 'This text is hard to read because the contrast is low.',
          beforeCta: 'Confirm',
          afterHeading: 'Notice',
          afterBody: 'This text is easy to read because the contrast is strong.',
          afterCta: 'Confirm',
          helper:
            'Good contrast helps users with low vision or bright environments perceive text and UI clearly.',
        },
        touchTarget: {
          title: 'Small touch target vs generous click area',
          beforeButton: 'Next',
          afterButton: 'Next',
          targetHint: 'Recommended 44×44',
          helper: 'Generous touch targets reduce mistakes for shaky hands or one-handed use.',
        },
      },
    },
    problem: {
      title: 'What happens when accessibility is lacking',
      description: 'Small barriers stack up into much bigger problems.',
      steps: [
        {
          index: 1,
          title: 'Information lookup fails',
          description: 'People cannot find or understand the information they need.',
          badge: 'Starting point',
          tone: 'error',
        },
        {
          index: 2,
          title: 'Input mistakes rise',
          description: 'Forms are hard to fill in, so mistakes pile up and repeat.',
          badge: 'Problem grows',
          tone: 'warning',
        },
        {
          index: 3,
          title: 'Action is abandoned',
          description: 'People give up before reaching their goal.',
          badge: 'Worse experience',
          tone: 'amber',
        },
        {
          index: 4,
          title: 'Drop-off increases',
          description: 'Users leave the service, and conversion and revenue fall.',
          badge: 'Business impact',
          tone: 'success',
        },
        {
          index: 5,
          title: 'Trust declines',
          description: 'Trust in the brand drops and negative perception spreads.',
          badge: 'Long-term loss',
          tone: 'info',
        },
      ],
    },
    diagnosis: {
      title: 'Self-diagnosis checklist',
      description: 'Quickly check your service’s accessibility state.',
      items: [
        {
          id: 'keyboard',
          label: 'Usable with keyboard only?',
          initialChecked: true,
          status: 'done',
        },
        { id: 'label', label: 'Forms have proper labels?', initialChecked: true, status: 'done' },
        { id: 'focus', label: 'Focus is visible?', initialChecked: false, status: 'review' },
        { id: 'contrast', label: 'Contrast is sufficient?', initialChecked: true, status: 'done' },
        {
          id: 'alt',
          label: 'Images have alt text?',
          initialChecked: false,
          status: 'review',
        },
        {
          id: 'headings',
          label: 'Heading structure (h1–h6) is logical?',
          initialChecked: false,
          status: 'progress',
        },
        {
          id: 'errors',
          label: 'Error messages are easy to understand?',
          initialChecked: true,
          status: 'done',
        },
      ],
      statusBadges: {
        done: 'Done',
        review: 'Review',
        progress: 'In progress',
        todo: 'Todo',
      },
      scoreTitle: 'Current score',
      scoreUnit: 'pt',
      scoreLevels: {
        excellent: 'Excellent',
        good: 'Good',
        fair: 'Fair',
        poor: 'Needs review',
      },
      legendLabels: {
        done: 'Done',
        review: 'Review',
        progress: 'In progress',
        todo: 'Todo',
      },
      legendUnit: 'items',
      disclaimer: '※ Score is illustrative and may differ from a real audit result.',
      a11yScoreTemplate: 'Current accessibility score: {score} points',
    },
    summary: {
      title: 'Summary',
      bullets: [
        'Accessibility creates a better user experience for everyone.',
        'It includes more users and contexts, opening up more opportunities.',
        'It improves quality and maintainability, raising engineering efficiency.',
        'It supports business outcomes, search visibility, and policy compliance.',
      ],
    },
    insights: {
      title: 'Three key insights',
      items: [
        'Good accessibility is the foundation of a good product.',
        'Small improvements create large user value.',
        'Today’s choices come back as bigger outcomes and trust.',
      ],
    },
    cta: {
      main: 'Next: Disability types & user contexts',
      sub: 'Continue to the next lesson',
      aria: 'Next lesson: Disability types & user contexts',
    },
  },
};
