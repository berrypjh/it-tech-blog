import type { Locale } from '@it-tech-blog/preferences';

export type DisabilityTypeTone = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type DisabilityTypeCard = {
  id: 'vision' | 'hearing' | 'motor' | 'cognitive' | 'temporary' | 'situational';
  title: string;
  body: string;
  example: string;
  chips: string[];
  tone: DisabilityTypeTone;
};

export type SimulationModeId =
  | 'low-vision'
  | 'magnify-blur'
  | 'color-blind'
  | 'no-sound'
  | 'keyboard-only'
  | 'distraction';

export type SimulationMode = {
  id: SimulationModeId;
  label: string;
  difficulties: string[];
  improvements: string[];
};

export type BarrierCard = {
  id: 'sunlight' | 'subway' | 'noisy' | 'injury' | 'fatigue';
  title: string;
  body: string;
  pointLabel: string;
};

export type PrincipleCard = {
  id: 'color' | 'keyboard' | 'target' | 'predictable' | 'clarity';
  title: string;
  body: string;
};

export type DisabilitiesContent = {
  meta: {
    pageTitle: string;
  };
  hero: {
    title: string;
    leadLine1: string;
    leadLine2: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationLabel: string;
    floatingChips: {
      brightness: string;
      hearing: string;
      fontSize: string;
      keyboard: string;
    };
    avatarLabels: {
      phone: string;
      laptop: string;
      wheelchair: string;
      tablet: string;
    };
  };
  types: {
    title: string;
    cards: DisabilityTypeCard[];
  };
  simulator: {
    title: string;
    currentModeLabel: string;
    modesTitle: string;
    activeBadge: string;
    modes: SimulationMode[];
    preview: {
      brand: string;
      nav: string[];
      cartAria: string;
      heroLine1: string;
      heroLine2: string;
      heroSub: string;
      ctaPrimary: string;
      ctaSecondary: string;
      product: {
        bag: string;
        tumbler: string;
        plant: string;
      };
      featureCards: string[];
    };
    controls: {
      contrastLabel: string;
      contrastDecrease: string;
      contrastIncrease: string;
      fontSizeLabel: string;
      fontSizeDecrease: string;
      fontSizeIncrease: string;
      reset: string;
    };
    explanation: {
      difficultyTitle: string;
      improvementTitle: string;
      tipLabel: string;
      tipLine1: string;
      tipLine2: string;
    };
  };
  barriers: {
    title: string;
    cards: BarrierCard[];
  };
  principles: {
    title: string;
    cards: PrincipleCard[];
  };
  cta: {
    main: string;
    sub: string;
    aria: string;
  };
};

export const disabilitiesContent: Record<Locale, DisabilitiesContent> = {
  ko: {
    meta: {
      pageTitle: '장애 유형과 사용자 환경 — A11y Lab',
    },
    hero: {
      title: '장애 유형과 사용자 환경',
      leadLine1: '사람마다 웹을 인식하고 사용하는 방식은 다릅니다',
      leadLine2: '영구적 장애뿐 아니라 일시적, 상황적 제약도 함께 고려해야 합니다',
      primaryCta: '유형별 살펴보기',
      secondaryCta: '환경 시뮬레이션 체험',
      illustrationLabel:
        '다양한 사용자 4명이 서로 다른 환경에서 웹을 사용하는 일러스트. 햇빛, 귀, 글자 크기, 키보드 아이콘이 함께 떠 있다.',
      floatingChips: {
        brightness: '밝기',
        hearing: '청각',
        fontSize: 'Aa',
        keyboard: '키보드',
      },
      avatarLabels: {
        phone: '스마트폰을 사용하는 사용자',
        laptop: '노트북을 사용하는 사용자',
        wheelchair: '휠체어를 사용하는 사용자',
        tablet: '태블릿을 사용하는 사용자',
      },
    },
    types: {
      title: '6가지 장애/제약 유형',
      cards: [
        {
          id: 'vision',
          title: '시각',
          body: '화면의 내용을 보거나 구분하기 어려움',
          example: '예: 작은 글씨를 읽기 힘듦',
          chips: ['저시력', '실명', '색약'],
          tone: 'primary',
        },
        {
          id: 'hearing',
          title: '청각',
          body: '소리를 듣거나 이해하기 어려움',
          example: '예: 영상의 자막이 없음',
          chips: ['난청', '소리 구분 어려움'],
          tone: 'secondary',
        },
        {
          id: 'motor',
          title: '지체/운동',
          body: '손, 팔, 다리 등의 사용이 어렵거나 제한적',
          example: '예: 마우스 드래그가 어려움',
          chips: ['손떨림', '근력 약화'],
          tone: 'success',
        },
        {
          id: 'cognitive',
          title: '인지/학습',
          body: '이해, 기억, 집중 등에 어려움이 있을 수 있음',
          example: '예: 복잡한 절차를 이해하기 어려움',
          chips: ['주의력 저하', '읽기 어려움'],
          tone: 'warning',
        },
        {
          id: 'temporary',
          title: '일시적 제약',
          body: '일시적인 상태나 부상으로 인한 제약',
          example: '예: 손목 부상으로 입력 곤란',
          chips: ['부상', '피로', '질병'],
          tone: 'error',
        },
        {
          id: 'situational',
          title: '상황적 제약',
          body: '환경이나 상황에 따라 제약이 발생',
          example: '예: 밝은 햇빛, 소음, 이동 중',
          chips: ['소음', '이동 중', '야외'],
          tone: 'info',
        },
      ],
    },
    simulator: {
      title: '직접 경험해보기',
      currentModeLabel: '현재 모드',
      modesTitle: '모드 선택',
      activeBadge: '선택됨',
      modes: [
        {
          id: 'low-vision',
          label: '저시력 모드',
          difficulties: [
            '대비가 낮아 텍스트와 배경 구분이 어려움 (밝은 회색 텍스트)',
            '작은 글씨를 읽기 위해 더 많은 주의와 에너지 필요',
            '정보의 시각적 계층 파악이 어려움',
            '아이콘만으로 된 버튼의 의미를 파악하기 어려움',
          ],
          improvements: [
            '충분한 명도 대비 확보 (4.5:1 이상)',
            '텍스트 크기 조절 기능 제공',
            '중요 정보에 시각적 강조 사용',
            '아이콘에는 텍스트 라벨 함께 제공',
          ],
        },
        {
          id: 'magnify-blur',
          label: '확대/흐림 모드',
          difficulties: [
            '화면 일부만 보여서 전체 맥락을 잡기 어려움',
            '확대 시 가로 스크롤이 필요해 탐색이 번거로움',
            '경계가 흐려 작은 컨트롤을 정확히 짚기 어려움',
          ],
          improvements: [
            '확대해도 가로 스크롤 없이 보이도록 반응형 레이아웃',
            '주요 정보는 화면 상단/시야 안에 배치',
            '버튼·링크의 클릭 영역을 충분히 크게',
          ],
        },
        {
          id: 'color-blind',
          label: '색각 이상 시뮬레이션',
          difficulties: [
            '빨강/초록 등 특정 색 조합을 구분하기 어려움',
            '색만으로 표시된 상태(에러/성공)를 인지하지 못함',
            '차트·그래프 정보가 사라진 것처럼 보임',
          ],
          improvements: [
            '색상 외에 아이콘·패턴·텍스트로 상태 전달',
            '빨강/초록 조합 대신 대비가 큰 색 조합 사용',
            '범례에 색 외의 식별 기호 추가',
          ],
        },
        {
          id: 'no-sound',
          label: '소리 없음 모드',
          difficulties: [
            '오디오 안내나 효과음에 담긴 정보를 받지 못함',
            '영상의 대사·내레이션을 이해할 수 없음',
            '시스템 알림 사운드만으로는 상태 변화 인지 불가',
          ],
          improvements: [
            '모든 영상에 자막과 스크립트 제공',
            '음성 알림은 시각 알림으로도 함께 표시',
            '중요한 정보는 텍스트로도 전달',
          ],
        },
        {
          id: 'keyboard-only',
          label: '키보드 전용 모드',
          difficulties: [
            'Tab 순서가 시각 순서와 달라 길을 잃음',
            '포커스가 보이지 않아 현재 위치를 알 수 없음',
            '키보드로 닫을 수 없는 모달·메뉴가 막힘',
          ],
          improvements: [
            '논리적인 Tab 순서와 명확한 focus-visible 제공',
            '모든 기능을 키보드로 조작 가능하도록 보장',
            '모달은 ESC로 닫고 포커스를 복귀시킴',
          ],
        },
        {
          id: 'distraction',
          label: '집중 방해 환경 모드',
          difficulties: [
            '광고·팝업·자동재생으로 핵심 정보가 묻힘',
            '단계가 많고 복잡해 끝까지 따라가기 어려움',
            '에러 메시지가 늦거나 모호해 다시 시도해야 함',
          ],
          improvements: [
            '핵심 작업 흐름을 단순하고 짧게 유지',
            '자동재생·번쩍임을 줄이고 사용자 제어 제공',
            '에러는 가까운 곳에 명확한 안내로 표시',
          ],
        },
      ],
      preview: {
        brand: '그린라이프',
        nav: ['제품', '스토리', '고객센터'],
        cartAria: '장바구니',
        heroLine1: '지구를 위한',
        heroLine2: '작은 실천, 그린라이프',
        heroSub: '친환경 제품으로 더 나은 일상을 만들어보세요.',
        ctaPrimary: '제품 둘러보기',
        ctaSecondary: '자세히 보기',
        product: {
          bag: '에코백',
          tumbler: '텀블러',
          plant: '식물',
        },
        featureCards: ['친환경 소재', '탄소 중립 배송', '지속 가능한 포장'],
      },
      controls: {
        contrastLabel: '대비',
        contrastDecrease: '대비 줄이기',
        contrastIncrease: '대비 높이기',
        fontSizeLabel: '글자 크기',
        fontSizeDecrease: '글자 작게',
        fontSizeIncrease: '글자 크게',
        reset: '원래대로',
      },
      explanation: {
        difficultyTitle: '이 모드에서 겪는 어려움',
        improvementTitle: '개선 포인트',
        tipLabel: 'TIP',
        tipLine1: '화면의 대비/크기 조절로',
        tipLine2: '어려움을 직접 체험해보세요!',
      },
    },
    barriers: {
      title: '장애만이 아니라 환경 문제이기도 하다',
      cards: [
        {
          id: 'sunlight',
          title: '햇빛이 강한 곳에서\n화면 보기',
          body: '화면이 반사되어 잘 보이지 않고, 대비가 낮으면 내용을 구분하기 어렵습니다.',
          pointLabel: '접근성 포인트',
        },
        {
          id: 'subway',
          title: '지하철에서\n한 손 사용',
          body: '불안정한 자세로 정확한 터치나 입력이 어려워 실수가 쉽습니다.',
          pointLabel: '접근성 포인트',
        },
        {
          id: 'noisy',
          title: '시끄러운 장소에서\n영상 보기',
          body: '소리를 들을 수 없어 영상의 내용을 이해하기 어렵습니다.',
          pointLabel: '접근성 포인트',
        },
        {
          id: 'injury',
          title: '손목을 다친 상태',
          body: '마우스 조작이나 연속 입력이 어렵고, 작은 조작은 통증을 유발할 수 있습니다.',
          pointLabel: '접근성 포인트',
        },
        {
          id: 'fatigue',
          title: '피곤한 상태에서\n복잡한 폼 작성',
          body: '집중력이 떨어져 실수가 늘고, 복잡한 단계는 포기하게 만듭니다.',
          pointLabel: '접근성 포인트',
        },
      ],
    },
    principles: {
      title: '대응 원칙 요약',
      cards: [
        {
          id: 'color',
          title: '색상만으로\n전달하지 않기',
          body: '색상 외의 단서(텍스트, 아이콘, 패턴 등)를 함께 제공합니다.',
        },
        {
          id: 'keyboard',
          title: '키보드 사용\n가능하게 만들기',
          body: '모든 기능을 키보드로 이용할 수 있고, 포커스가 보여야 합니다.',
        },
        {
          id: 'target',
          title: '충분히 큰\n클릭 영역',
          body: '터치/마우스 실수를 줄이도록 충분한 크기의 조작 영역을 제공합니다.',
        },
        {
          id: 'predictable',
          title: '단순하고 예측 가능한\n흐름 제공',
          body: '일관된 구성과 단계로 사용자가 다음을 쉽게 예측하게 합니다.',
        },
        {
          id: 'clarity',
          title: '명확한 텍스트와\n구조',
          body: '쉬운 언어, 명확한 제목과 구조, 적절한 여백으로 가독성을 높입니다.',
        },
      ],
    },
    cta: {
      main: '다음: 보조 기술 이해하기',
      sub: '다음 학습으로 이어집니다',
      aria: '다음 학습 단계: 보조 기술 이해하기 페이지로 이동',
    },
  },
  en: {
    meta: {
      pageTitle: 'Disability types & user contexts — A11y Lab',
    },
    hero: {
      title: 'Disability types & user contexts',
      leadLine1: 'People perceive and operate the web in many different ways',
      leadLine2: 'Beyond permanent disabilities, temporary and situational limits matter too',
      primaryCta: 'See the types',
      secondaryCta: 'Try the simulation',
      illustrationLabel:
        'Illustration of four users in different environments using the web, with brightness, hearing, font-size, and keyboard icons floating around them.',
      floatingChips: {
        brightness: 'Bright',
        hearing: 'Hearing',
        fontSize: 'Aa',
        keyboard: 'Keys',
      },
      avatarLabels: {
        phone: 'Smartphone user',
        laptop: 'Laptop user',
        wheelchair: 'Wheelchair user',
        tablet: 'Tablet user',
      },
    },
    types: {
      title: 'Six disability and constraint types',
      cards: [
        {
          id: 'vision',
          title: 'Vision',
          body: 'Difficulty seeing or distinguishing on-screen content',
          example: 'e.g. small text is hard to read',
          chips: ['Low vision', 'Blind', 'Color blind'],
          tone: 'primary',
        },
        {
          id: 'hearing',
          title: 'Hearing',
          body: 'Difficulty hearing or understanding sound',
          example: 'e.g. videos without captions',
          chips: ['Hard of hearing', 'Sound discrimination'],
          tone: 'secondary',
        },
        {
          id: 'motor',
          title: 'Motor',
          body: 'Limited or difficult use of hands, arms, or legs',
          example: 'e.g. dragging with a mouse is hard',
          chips: ['Tremor', 'Weakness'],
          tone: 'success',
        },
        {
          id: 'cognitive',
          title: 'Cognitive',
          body: 'Differences in understanding, memory, or focus',
          example: 'e.g. complex flows are hard to follow',
          chips: ['Low attention', 'Reading difficulty'],
          tone: 'warning',
        },
        {
          id: 'temporary',
          title: 'Temporary',
          body: 'Short-term states or injuries that limit use',
          example: 'e.g. wrist injury makes typing hard',
          chips: ['Injury', 'Fatigue', 'Illness'],
          tone: 'error',
        },
        {
          id: 'situational',
          title: 'Situational',
          body: 'Constraints from environment or context',
          example: 'e.g. bright sun, noise, on the move',
          chips: ['Noise', 'On the move', 'Outdoors'],
          tone: 'info',
        },
      ],
    },
    simulator: {
      title: 'Try it for yourself',
      currentModeLabel: 'Current mode',
      modesTitle: 'Modes',
      activeBadge: 'Selected',
      modes: [
        {
          id: 'low-vision',
          label: 'Low vision',
          difficulties: [
            'Low contrast makes text hard to read (light gray text)',
            'Reading small text requires extra effort',
            'Hard to perceive visual hierarchy',
            'Icon-only buttons are hard to interpret',
          ],
          improvements: [
            'Ensure contrast ratio 4.5:1 or higher',
            'Provide text resizing',
            'Use visual emphasis for important info',
            'Pair icons with text labels',
          ],
        },
        {
          id: 'magnify-blur',
          label: 'Magnify / blur',
          difficulties: [
            'Only part of the screen is visible, losing context',
            'Magnified views require horizontal scrolling',
            'Soft edges make small controls hard to hit',
          ],
          improvements: [
            'Responsive layout that avoids horizontal scrolling at zoom',
            'Place key info high in the viewport',
            'Provide large click targets',
          ],
        },
        {
          id: 'color-blind',
          label: 'Color blindness',
          difficulties: [
            'Hard to distinguish red/green and similar pairs',
            'Color-only states (error/success) go unnoticed',
            'Charts lose meaning',
          ],
          improvements: [
            'Use icons, patterns, and text along with color',
            'Avoid red/green pairs; use high-contrast palettes',
            'Add non-color identifiers to legends',
          ],
        },
        {
          id: 'no-sound',
          label: 'No sound',
          difficulties: [
            'Audio cues and effects miss their target',
            'Spoken video content cannot be understood',
            'System notifications via sound only are missed',
          ],
          improvements: [
            'Provide captions and transcripts for video',
            'Pair audio alerts with visual alerts',
            'Communicate important info in text too',
          ],
        },
        {
          id: 'keyboard-only',
          label: 'Keyboard only',
          difficulties: [
            'Tab order differs from visual order',
            'Focus is invisible — users get lost',
            'Modals and menus cannot be closed by keyboard',
          ],
          improvements: [
            'Provide logical tab order and clear focus-visible',
            'Make every feature keyboard-operable',
            'Close modals with ESC and restore focus',
          ],
        },
        {
          id: 'distraction',
          label: 'Distraction',
          difficulties: [
            'Ads, popups, autoplay bury the main content',
            'Long, complex flows are hard to finish',
            'Late or vague errors force retries',
          ],
          improvements: [
            'Keep flows simple and short',
            'Reduce autoplay/flashing, give users control',
            'Show errors near the field with clear guidance',
          ],
        },
      ],
      preview: {
        brand: 'GreenLife',
        nav: ['Products', 'Story', 'Support'],
        cartAria: 'Cart',
        heroLine1: 'Small steps',
        heroLine2: 'for the planet, GreenLife',
        heroSub: 'Make a better everyday with sustainable products.',
        ctaPrimary: 'Browse products',
        ctaSecondary: 'Learn more',
        product: {
          bag: 'Eco bag',
          tumbler: 'Tumbler',
          plant: 'Plant',
        },
        featureCards: ['Eco materials', 'Carbon-neutral shipping', 'Sustainable packaging'],
      },
      controls: {
        contrastLabel: 'Contrast',
        contrastDecrease: 'Decrease contrast',
        contrastIncrease: 'Increase contrast',
        fontSizeLabel: 'Font size',
        fontSizeDecrease: 'Smaller text',
        fontSizeIncrease: 'Larger text',
        reset: 'Reset',
      },
      explanation: {
        difficultyTitle: 'Difficulties in this mode',
        improvementTitle: 'Improvements to apply',
        tipLabel: 'TIP',
        tipLine1: 'Adjust contrast and text size',
        tipLine2: 'to feel the difficulty firsthand.',
      },
    },
    barriers: {
      title: 'It is not only about disability — it is the environment too',
      cards: [
        {
          id: 'sunlight',
          title: 'Bright sunlight\non the screen',
          body: 'Glare hides content, and low contrast makes text hard to read.',
          pointLabel: 'Accessibility point',
        },
        {
          id: 'subway',
          title: 'One-handed use\non the subway',
          body: 'An unstable posture makes accurate touch and typing harder.',
          pointLabel: 'Accessibility point',
        },
        {
          id: 'noisy',
          title: 'Watching video\nin a noisy place',
          body: 'Without audio, the meaning of a video is hard to follow.',
          pointLabel: 'Accessibility point',
        },
        {
          id: 'injury',
          title: 'Injured wrist',
          body: 'Mouse or repeated typing is painful and slow.',
          pointLabel: 'Accessibility point',
        },
        {
          id: 'fatigue',
          title: 'Complex form\nwhile fatigued',
          body: 'Concentration drops, mistakes pile up, and long flows are abandoned.',
          pointLabel: 'Accessibility point',
        },
      ],
    },
    principles: {
      title: 'Response principles',
      cards: [
        {
          id: 'color',
          title: 'Do not rely on\ncolor alone',
          body: 'Pair color with text, icons, or patterns.',
        },
        {
          id: 'keyboard',
          title: 'Make it work\nwith the keyboard',
          body: 'Every feature must be reachable by keyboard and focus must be visible.',
        },
        {
          id: 'target',
          title: 'Generous\ntouch targets',
          body: 'Provide ample controls to reduce mistaps and misclicks.',
        },
        {
          id: 'predictable',
          title: 'Simple, predictable\nflows',
          body: 'Consistent structure helps users anticipate the next step.',
        },
        {
          id: 'clarity',
          title: 'Clear text\nand structure',
          body: 'Plain language, clear headings, and generous spacing improve readability.',
        },
      ],
    },
    cta: {
      main: 'Next: Understanding assistive technologies',
      sub: 'Continue to the next lesson',
      aria: 'Next lesson: Understanding assistive technologies',
    },
  },
};
