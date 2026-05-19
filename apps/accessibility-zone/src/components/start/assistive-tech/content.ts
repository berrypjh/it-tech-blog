import type { Locale } from '@it-tech-blog/preferences';

export type AssistiveTechTone = 'primary' | 'secondary' | 'success' | 'warning' | 'info';

export type AssistiveTechCard = {
  id: 'screen-reader' | 'keyboard' | 'magnification' | 'voice' | 'switch';
  number: string;
  title: string;
  body: string;
  userLabel: string;
  userBody: string;
  pointLabel: string;
  pointBody: string;
  tone: AssistiveTechTone;
};

export type ReadingItemType =
  | 'heading'
  | 'paragraph'
  | 'input'
  | 'button'
  | 'icon-button'
  | 'image';

export type ReadingItem = {
  index: number;
  type: ReadingItemType;
  time: string;
  primaryText: string;
  secondaryText?: string;
  logText: string;
};

export type ProblemCard = {
  id: 'icon-button' | 'no-label' | 'heading' | 'toast' | 'modal-focus';
  title: string;
  body: string;
  problem: string;
  solution: string;
};

export type TakeawayCard = {
  id: 'understanding' | 'structure' | 'experience';
  title: string;
  body: string;
};

export type KeyboardCard = {
  id: 'tab-order' | 'focus-ring' | 'skip-link' | 'focus-trap';
  number: string;
  title: string;
  body: string;
};

export type AssistiveTechContent = {
  meta: {
    pageTitle: string;
  };
  hero: {
    title: string;
    lead: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationLabel: string;
    floatingChips: {
      screenReader: string;
      keyboard: string;
      magnification: string;
      voice: string;
      switchInput: string;
    };
    avatarLabels: {
      waving: string;
      sunglassesLaptop: string;
      phone: string;
      wheelchairTablet: string;
    };
  };
  types: {
    title: string;
    cards: AssistiveTechCard[];
  };
  screenReader: {
    title: string;
    description: string;
    resetLabel: string;
    startLabel: string;
    stopLabel: string;
    browserUrl: string;
    logTitle: string;
    progressTemplate: string;
    items: ReadingItem[];
    helper: string;
    iconButtonLabel: string;
    imageCaption: string;
    inputLabel: string;
    inputPlaceholder: string;
  };
  comparisons: {
    title: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    cards: {
      id: 'label' | 'icon-button' | 'heading';
      title: string;
    }[];
    label: {
      beforeNote: string;
      beforeVisualLabel: string;
      beforePlaceholder: string;
      afterLabel: string;
      afterPlaceholder: string;
      afterNote: string;
    };
    iconButton: {
      beforeNote: string;
      afterLabel: string;
      afterNote: string;
    };
    heading: {
      beforeLines: string[];
      beforeNote: string;
      afterLines: string[];
      afterNote: string;
    };
  };
  keyboard: {
    title: string;
    description: string;
    cards: KeyboardCard[];
    tabOrder: {
      items: string[];
    };
    focusRing: {
      inputPlaceholder: string;
      searchLabel: string;
      cancelLabel: string;
    };
    skipLink: {
      linkLabel: string;
      items: string[];
    };
    focusTrap: {
      modalTitle: string;
      modalBody: string;
      cancelLabel: string;
      saveLabel: string;
      tabHint: string;
      shiftTabHint: string;
    };
  };
  problems: {
    title: string;
    cards: ProblemCard[];
    problemLabel: string;
    solutionLabel: string;
  };
  quiz: {
    title: string;
    description: string;
    progressLabel: string;
    accessibleName: {
      title: string;
      options: { id: string; code: string }[];
      correctId: string;
      feedback: string;
    };
    heading: {
      title: string;
      options: { id: string; text: string }[];
      correctId: string;
      feedback: string;
    };
    accessibleInput: {
      title: string;
      beforeNote: string;
      beforeVisualLabel: string;
      beforePlaceholder: string;
      afterLabel: string;
      afterPlaceholder: string;
      afterNote: string;
      feedback: string;
    };
    correctBadge: string;
    selectInstruction: string;
  };
  takeaways: {
    title: string;
    cards: TakeawayCard[];
    footer: string;
  };
  cta: {
    main: string;
    sub: string;
    aria: string;
  };
};

export const assistiveTechContent: Record<Locale, AssistiveTechContent> = {
  ko: {
    meta: {
      pageTitle: '보조 기술 이해하기 — A11y Lab',
    },
    hero: {
      title: '보조 기술 이해하기',
      lead: '사람들은 마우스와 화면만으로 웹을 사용하지 않습니다',
      description:
        '시각, 운동, 인지, 청각 등 다양한 이유로 많은 사용자들이 보조 기술을 사용해 웹을 인지하고, 탐색하고, 상호작용합니다. 모두가 동등하게 웹을 이용할 수 있도록, 보조 기술의 원리와 사용 경험을 이해해 봅시다.',
      primaryCta: '스크린 리더 체험',
      secondaryCta: '키보드 탐색 체험',
      illustrationLabel:
        '다양한 사용자 4명 주위에 스크린 리더, 키보드, 화면 확대, 음성 입력, 스위치 입력 카드가 떠 있는 일러스트',
      floatingChips: {
        screenReader: '스크린 리더',
        keyboard: '키보드',
        magnification: '화면 확대',
        voice: '음성 입력',
        switchInput: '스위치 입력',
      },
      avatarLabels: {
        waving: '손을 들어 인사하는 사용자',
        sunglassesLaptop: '선글라스를 착용하고 노트북을 쓰는 사용자',
        phone: '스마트폰을 사용하는 사용자',
        wheelchairTablet: '휠체어를 사용하며 태블릿을 보는 사용자',
      },
    },
    types: {
      title: '주요 보조 기술 5가지',
      cards: [
        {
          id: 'screen-reader',
          number: '1',
          title: '스크린 리더',
          body: '화면의 내용을 음성으로 읽어 주는 소프트웨어',
          userLabel: '누가 사용하는가',
          userBody: '시각장애 사용자',
          pointLabel: '웹에서 중요한 포인트',
          pointBody: '구조와 의미, 이름(대체), 상태를 정확히 전달',
          tone: 'primary',
        },
        {
          id: 'keyboard',
          number: '2',
          title: '키보드 탐색',
          body: '키보드만으로 웹을 탐색하고 조작하는 방식',
          userLabel: '누가 사용하는가',
          userBody: '이동장애 사용자, 마우스 사용이 어려운 모든 사용자',
          pointLabel: '웹에서 중요한 포인트',
          pointBody: '모든 기능이 키보드로 접근 가능, 명확한 포커스 순서',
          tone: 'secondary',
        },
        {
          id: 'magnification',
          number: '3',
          title: '화면 확대',
          body: '텍스트와 UI를 확대하여 더 크게 보는 도구',
          userLabel: '누가 사용하는가',
          userBody: '저시력 사용자',
          pointLabel: '웹에서 중요한 포인트',
          pointBody: '확대 시 정보 손실 없이 사용 가능해야 함',
          tone: 'warning',
        },
        {
          id: 'voice',
          number: '4',
          title: '음성 입력',
          body: '음성으로 입력하고 명령을 내리는 도구',
          userLabel: '누가 사용하는가',
          userBody: '운동장애 사용자, 손 사용이 일시적으로 어려운 사용자',
          pointLabel: '웹에서 중요한 포인트',
          pointBody: '명확한 이름의 입력 필드와 예측 가능한 인터페이스',
          tone: 'success',
        },
        {
          id: 'switch',
          number: '5',
          title: '스위치/대체 입력',
          body: '스위치나 대체 장치로 웹을 조작하는 방식',
          userLabel: '누가 사용하는가',
          userBody: '중증 운동장애 사용자',
          pointLabel: '웹에서 중요한 포인트',
          pointBody: '충분한 클릭 대상 크기, 시간 제한 없는 상호작용',
          tone: 'info',
        },
      ],
    },
    screenReader: {
      title: '스크린 리더 읽기 순서 체험',
      description: '오른쪽 로그를 보며 스크린 리더가 어떤 순서로 읽는지 확인해 보세요.',
      resetLabel: '다시 설정',
      startLabel: '읽기 시작',
      stopLabel: '일시 중지',
      browserUrl: 'https://demo-accessibility.com',
      logTitle: '스크린 리더 로그',
      progressTemplate: '현재: {current} / {total} 항목',
      iconButtonLabel: '관심 표시',
      imageCaption: '이미지 설명: 다양한 사람들이 함께하는 포용적인 디지털 환경',
      inputLabel: '이메일 주소',
      inputPlaceholder: '이메일을 입력하세요',
      items: [
        {
          index: 1,
          type: 'heading',
          time: '00:00',
          primaryText: '우리 서비스 소개',
          logText: '제목: 우리 서비스 소개 (레벨 1)',
        },
        {
          index: 2,
          type: 'paragraph',
          time: '00:01',
          primaryText:
            '누구나 동등하게 이용할 수 있는 웹을 만들기 위해 노력합니다. 다양한 보조 기술과 함께 잘 동작하도록 설계되었습니다.',
          logText: '문단: 누구나 동등하게 이용할 수 있는 웹을 만들기 위해...',
        },
        {
          index: 3,
          type: 'input',
          time: '00:03',
          primaryText: '이메일 주소',
          secondaryText: '이메일을 입력하세요',
          logText: '편집상자: 이메일 주소, 이메일을 입력하세요',
        },
        {
          index: 4,
          type: 'button',
          time: '00:05',
          primaryText: '서비스 시작하기',
          logText: '버튼: 서비스 시작하기',
        },
        {
          index: 5,
          type: 'button',
          time: '00:06',
          primaryText: '자세히 보기',
          logText: '버튼: 자세히 보기',
        },
        {
          index: 6,
          type: 'icon-button',
          time: '00:07',
          primaryText: '하트 아이콘 버튼',
          logText: '버튼: (이름 없음) 아이콘 버튼',
        },
        {
          index: 7,
          type: 'image',
          time: '00:08',
          primaryText: '이미지: 다양한 사람들이 함께하는 포용적인 디지털 환경',
          logText: '이미지: 다양한 사람들이 함께하는 포용적인 디지털 환경',
        },
      ],
      helper: '읽기 시작을 누르면 1번부터 순서대로 진행됩니다.',
    },
    comparisons: {
      title: '스크린 리더 비교 예시',
      description: '같은 의도라도 마크업에 따라 스크린 리더가 받는 정보가 달라집니다.',
      beforeLabel: '잘못된 예',
      afterLabel: '올바른 예',
      cards: [
        { id: 'label', title: '라벨 없는 input vs 올바른 input' },
        { id: 'icon-button', title: '이름 없는 아이콘 버튼 vs 올바른 버튼' },
        { id: 'heading', title: '잘못된 heading 구조 vs 적절한 heading 구조' },
      ],
      label: {
        beforeNote: '시각 텍스트와 입력 필드가 연결되지 않아 스크린 리더가 목적을 알 수 없음',
        beforeVisualLabel: '이메일',
        beforePlaceholder: '이메일을 입력하세요',
        afterLabel: '이메일 주소',
        afterPlaceholder: '이메일을 입력하세요',
        afterNote: 'label과 input이 연결되어 명확한 이름이 전달됨',
      },
      iconButton: {
        beforeNote: '스크린 리더가 "버튼"만 읽어 기능을 알 수 없음',
        afterLabel: '관심 상품 추가',
        afterNote: '아이콘 + 텍스트로 명확한 이름이 전달됨',
      },
      heading: {
        beforeLines: ['H1 제목', 'H3 소제목', 'H2 중간 제목'],
        beforeNote: '레벨이 어긋나 문서 구조를 파악하기 어려움',
        afterLines: ['H1 제목', 'H2 첫 번째 섹션', 'H3 세부 내용'],
        afterNote: '레벨이 논리적으로 이어져 구조가 분명함',
      },
    },
    keyboard: {
      title: '키보드 탐색 체험',
      description: 'Tab, Shift+Tab 키를 사용해 요소들을 탐색해 보세요.',
      cards: [
        {
          id: 'tab-order',
          number: '1',
          title: 'Tab 이동 순서',
          body: 'Tab 키로 이동할 때의 순서를 확인합니다.',
        },
        {
          id: 'focus-ring',
          number: '2',
          title: '포커스 링 확인',
          body: '현재 포커스가 있는 요소는 파란색 링으로 표시됩니다.',
        },
        {
          id: 'skip-link',
          number: '3',
          title: '본문 바로가기 (Skip Link)',
          body: 'Tab 키를 누르면 바로가기 링크가 나타나고, Enter로 본문으로 이동합니다.',
        },
        {
          id: 'focus-trap',
          number: '4',
          title: '모달 포커스 트랩',
          body: '모달이 열리면 포커스가 모달 내부에 머물러야 합니다.',
        },
      ],
      tabOrder: {
        items: ['메뉴', '검색 입력', '검색 버튼', '로그인', '더보기'],
      },
      focusRing: {
        inputPlaceholder: '검색어를 입력하세요',
        searchLabel: '검색',
        cancelLabel: '취소',
      },
      skipLink: {
        linkLabel: '본문 바로가기 →',
        items: ['사이트 소개', '기능', '고객 지원', '공지사항'],
      },
      focusTrap: {
        modalTitle: '알림 설정',
        modalBody: '이 알림을 저장하시겠습니까?',
        cancelLabel: '취소',
        saveLabel: '저장하기',
        tabHint: 'Tab: 다음 요소로 이동',
        shiftTabHint: 'Shift+Tab: 이전 요소로 이동',
      },
    },
    problems: {
      title: '이런 문제가 생긴다',
      problemLabel: '문제점',
      solutionLabel: '해결 포인트',
      cards: [
        {
          id: 'icon-button',
          title: '이름 없는 아이콘 버튼',
          body: '아이콘만 있는 버튼은 무슨 기능인지 알 수 없습니다.',
          problem: '스크린 리더가 "버튼"만 읽어 사용자가 기능을 알 수 없음',
          solution: '명확한 이름 (aria-label 또는 텍스트)을 제공',
        },
        {
          id: 'no-label',
          title: 'label 없는 input',
          body: '라벨이 없으면 입력 필드의 목적을 알 수 없습니다.',
          problem: '사용자가 어떤 정보를 입력해야 하는지 파악 어려움',
          solution: '<label> 요소나 aria-label로 명확한 이름 제공',
        },
        {
          id: 'heading',
          title: 'heading 구조가\n뒤죽박죽인 화면',
          body: '제목 레벨이 순서 없이 사용되면 구조를 이해하기 어렵습니다.',
          problem: '콘텐츠 구조 파악이 어렵고 탐색 효율이 떨어짐',
          solution: '논리적인 순서 (H1 → H2 → H3)대로 작성',
        },
        {
          id: 'toast',
          title: 'toast가 읽히지\n않는 경우',
          body: '중요한 알림이 나타나도 사용자에게 전달되지 않습니다.',
          problem: '자동으로 사라져서 인지 못하거나 스크린 리더가 읽지 못함',
          solution: 'aria-live 영역 사용으로 알림을 전달',
        },
        {
          id: 'modal-focus',
          title: 'modal 열렸는데\nfocus가 이동하지\n않는 경우',
          body: '모달 뒤 요소로 포커스가 이동해 사용자가 길을 잃습니다.',
          problem: '모달 내부가 아닌 곳으로 포커스 이동 가능',
          solution: '모달 오픈 시 포커스 이동 및 트랩 구현',
        },
      ],
    },
    quiz: {
      title: '짧은 실습 퀴즈',
      description: '각 문제에 가장 적절한 답을 선택해 보세요.',
      progressLabel: '진행률',
      correctBadge: '정답',
      selectInstruction: '보기를 선택하면 정답 여부가 표시됩니다.',
      accessibleName: {
        title:
          '아이콘만 있는 검색 버튼에 대해, 가장 직접적으로 accessible name을 제공한 예시를 선택하세요.',
        options: [
          { id: 'A', code: '<button><svg ... /></button>' },
          { id: 'B', code: '<button aria-label="검색"><svg ... /></button>' },
          { id: 'C', code: '<button title="검색"><svg ... /></button>' },
          {
            id: 'D',
            code: '<button><span aria-hidden="true">검색</span><svg ... /></button>',
          },
        ],
        correctId: 'B',
        feedback: '정답입니다! 스크린 리더가 명확히 "검색, 버튼"을 읽습니다.',
      },
      heading: {
        title: '적절한 heading 구조를 고르세요.',
        options: [
          { id: 'A', text: 'H1 → H3 → H2' },
          { id: 'B', text: 'H1 → H2 → H3' },
          { id: 'C', text: 'H2 → H1 → H3' },
          { id: 'D', text: 'H3 → H2 → H1' },
        ],
        correctId: 'B',
        feedback: '정답입니다! 논리적인 순서입니다.',
      },
      accessibleInput: {
        title: '접근 가능한 input을 고르세요.',
        beforeNote: '시각 텍스트는 있지만 input과 연결되지 않은 예시',
        beforeVisualLabel: '사용자명',
        beforePlaceholder: '사용자명을 입력하세요',
        afterLabel: '사용자명',
        afterPlaceholder: '사용자명을 입력하세요',
        afterNote: 'label과 input이 for/id로 연결된 예시',
        feedback: '정답입니다! label과 연결된 입력 필드입니다.',
      },
    },
    takeaways: {
      title: '핵심 정리',
      cards: [
        {
          id: 'understanding',
          title: '다양한 보조 기술 이해',
          body: '보조 기술은 사용자의 한계를 보완하여 웹을 동등하게 이용하게 합니다.',
        },
        {
          id: 'structure',
          title: '구조와 의미가 핵심',
          body: '올바른 이름, 구조, 상태 전달이 접근성의 기본입니다.',
        },
        {
          id: 'experience',
          title: '직접 체험하고 확인',
          body: '직접 사용해 보며 문제를 발견하고 개선하는 것이 중요합니다.',
        },
      ],
      footer: '다음 시간에는 웹 접근성의 기본 원칙과 WCAG 기준에 대해 학습합니다.',
    },
    cta: {
      main: '다음: 웹접근성 학습 로드맵',
      sub: '다음 학습으로 이어집니다',
      aria: '다음 학습 단계: 웹접근성 학습 로드맵 페이지로 이동',
    },
  },
  en: {
    meta: { pageTitle: 'Understanding assistive technology — A11y Lab' },
    hero: {
      title: 'Understanding assistive technology',
      lead: 'People do not use the web with just a mouse and a screen',
      description:
        'People with vision, motor, cognitive, or hearing differences rely on assistive technology to perceive, navigate, and interact with the web. Understanding how these tools work helps us build experiences that everyone can use.',
      primaryCta: 'Try the screen reader',
      secondaryCta: 'Try keyboard navigation',
      illustrationLabel:
        'Illustration of four diverse users with screen reader, keyboard, magnification, voice, and switch input cards floating around them.',
      floatingChips: {
        screenReader: 'Screen reader',
        keyboard: 'Keyboard',
        magnification: 'Magnification',
        voice: 'Voice input',
        switchInput: 'Switch input',
      },
      avatarLabels: {
        waving: 'User waving with one hand',
        sunglassesLaptop: 'User wearing sunglasses using a laptop',
        phone: 'User looking at a smartphone',
        wheelchairTablet: 'Wheelchair user with a tablet',
      },
    },
    types: {
      title: 'Five major assistive technologies',
      cards: [
        {
          id: 'screen-reader',
          number: '1',
          title: 'Screen reader',
          body: 'Software that reads on-screen content aloud',
          userLabel: 'Who uses it',
          userBody: 'Users who are blind or have low vision',
          pointLabel: 'Why it matters on the web',
          pointBody: 'Convey structure, meaning, names, and state accurately',
          tone: 'primary',
        },
        {
          id: 'keyboard',
          number: '2',
          title: 'Keyboard navigation',
          body: 'Operating the web entirely with the keyboard',
          userLabel: 'Who uses it',
          userBody: 'Users with mobility differences or those who cannot use a mouse',
          pointLabel: 'Why it matters on the web',
          pointBody: 'Every feature must be keyboard-reachable with a clear focus order',
          tone: 'secondary',
        },
        {
          id: 'magnification',
          number: '3',
          title: 'Magnification',
          body: 'Tools that enlarge text and UI for easier reading',
          userLabel: 'Who uses it',
          userBody: 'Users with low vision',
          pointLabel: 'Why it matters on the web',
          pointBody: 'Zoom must work without losing information',
          tone: 'warning',
        },
        {
          id: 'voice',
          number: '4',
          title: 'Voice input',
          body: 'Voice commands for typing and operation',
          userLabel: 'Who uses it',
          userBody: 'Users with motor differences or temporary limitations',
          pointLabel: 'Why it matters on the web',
          pointBody: 'Clearly named fields and predictable interfaces',
          tone: 'success',
        },
        {
          id: 'switch',
          number: '5',
          title: 'Switch / alternative input',
          body: 'Operating the web with switches or alternative devices',
          userLabel: 'Who uses it',
          userBody: 'Users with significant motor differences',
          pointLabel: 'Why it matters on the web',
          pointBody: 'Large hit areas and no time-limited interactions',
          tone: 'info',
        },
      ],
    },
    screenReader: {
      title: 'Screen reader reading order',
      description: 'Watch the log on the right to see the order in which a screen reader reads.',
      resetLabel: 'Reset',
      startLabel: 'Start reading',
      stopLabel: 'Pause',
      browserUrl: 'https://demo-accessibility.com',
      logTitle: 'Screen reader log',
      progressTemplate: 'Current: {current} / {total} items',
      iconButtonLabel: 'Favorite',
      imageCaption: 'Image description: a diverse group sharing an inclusive digital environment.',
      inputLabel: 'Email address',
      inputPlaceholder: 'Enter your email',
      items: [
        {
          index: 1,
          type: 'heading',
          time: '00:00',
          primaryText: 'About our service',
          logText: 'Heading: About our service (level 1)',
        },
        {
          index: 2,
          type: 'paragraph',
          time: '00:01',
          primaryText:
            'We work to build a web that everyone can use equally — designed to work with many assistive technologies.',
          logText: 'Paragraph: We work to build a web that everyone can use equally...',
        },
        {
          index: 3,
          type: 'input',
          time: '00:03',
          primaryText: 'Email address',
          secondaryText: 'Enter your email',
          logText: 'Edit box: Email address, Enter your email',
        },
        {
          index: 4,
          type: 'button',
          time: '00:05',
          primaryText: 'Get started',
          logText: 'Button: Get started',
        },
        {
          index: 5,
          type: 'button',
          time: '00:06',
          primaryText: 'Learn more',
          logText: 'Button: Learn more',
        },
        {
          index: 6,
          type: 'icon-button',
          time: '00:07',
          primaryText: 'Heart icon button',
          logText: 'Button: (no name) icon button',
        },
        {
          index: 7,
          type: 'image',
          time: '00:08',
          primaryText: 'Image: a diverse group sharing an inclusive digital environment',
          logText: 'Image: a diverse group sharing an inclusive digital environment',
        },
      ],
      helper: 'Pressing Start steps from item 1 in order.',
    },
    comparisons: {
      title: 'Screen reader comparisons',
      description: 'The same intent produces different screen reader output depending on markup.',
      beforeLabel: 'Incorrect',
      afterLabel: 'Correct',
      cards: [
        { id: 'label', title: 'Input without label vs with label' },
        { id: 'icon-button', title: 'Icon button without name vs with name' },
        { id: 'heading', title: 'Broken heading order vs valid heading order' },
      ],
      label: {
        beforeNote: 'Visual text and field are not associated, so the purpose is hidden from AT.',
        beforeVisualLabel: 'Email',
        beforePlaceholder: 'Enter your email',
        afterLabel: 'Email address',
        afterPlaceholder: 'Enter your email',
        afterNote: 'label is linked to input, so the name is announced.',
      },
      iconButton: {
        beforeNote: 'Screen readers announce only "button" — the function is hidden.',
        afterLabel: 'Add to favorites',
        afterNote: 'Icon paired with text exposes a clear name.',
      },
      heading: {
        beforeLines: ['H1 Title', 'H3 Subtitle', 'H2 Middle heading'],
        beforeNote: 'Skipping levels makes the structure hard to follow.',
        afterLines: ['H1 Title', 'H2 First section', 'H3 Details'],
        afterNote: 'Levels flow logically and structure becomes clear.',
      },
    },
    keyboard: {
      title: 'Try keyboard navigation',
      description: 'Use Tab and Shift+Tab to move between elements.',
      cards: [
        {
          id: 'tab-order',
          number: '1',
          title: 'Tab order',
          body: 'See the order Tab visits elements.',
        },
        {
          id: 'focus-ring',
          number: '2',
          title: 'Focus ring',
          body: 'The focused element shows a clear blue ring.',
        },
        {
          id: 'skip-link',
          number: '3',
          title: 'Skip link',
          body: 'Press Tab and the skip link appears; Enter jumps to the main content.',
        },
        {
          id: 'focus-trap',
          number: '4',
          title: 'Modal focus trap',
          body: 'When a modal opens, focus must stay inside it.',
        },
      ],
      tabOrder: {
        items: ['Menu', 'Search input', 'Search button', 'Sign in', 'More'],
      },
      focusRing: {
        inputPlaceholder: 'Enter a search term',
        searchLabel: 'Search',
        cancelLabel: 'Cancel',
      },
      skipLink: {
        linkLabel: 'Skip to content →',
        items: ['About', 'Features', 'Support', 'News'],
      },
      focusTrap: {
        modalTitle: 'Notification settings',
        modalBody: 'Save this notification?',
        cancelLabel: 'Cancel',
        saveLabel: 'Save',
        tabHint: 'Tab: next element',
        shiftTabHint: 'Shift+Tab: previous element',
      },
    },
    problems: {
      title: 'These problems happen',
      problemLabel: 'Problem',
      solutionLabel: 'How to fix it',
      cards: [
        {
          id: 'icon-button',
          title: 'Icon button without a name',
          body: 'Icon-only buttons hide their purpose.',
          problem: 'Screen readers announce just "button" — users cannot tell what it does.',
          solution: 'Provide an explicit name (aria-label or visible text).',
        },
        {
          id: 'no-label',
          title: 'Input without a label',
          body: 'Without a label, the purpose of the field is unclear.',
          problem: 'Users cannot tell what to enter.',
          solution: 'Use <label> or aria-label to provide a clear name.',
        },
        {
          id: 'heading',
          title: 'Broken heading\nstructure',
          body: 'Skipping heading levels makes the structure hard to grasp.',
          problem: 'Hard to scan content; navigation becomes inefficient.',
          solution: 'Use a logical order (H1 → H2 → H3).',
        },
        {
          id: 'toast',
          title: 'Toast not\nannounced',
          body: 'Important notices appear but never reach the user.',
          problem: 'Disappears quickly and is not announced.',
          solution: 'Use an aria-live region to announce notifications.',
        },
        {
          id: 'modal-focus',
          title: 'Modal opens but\nfocus does not move',
          body: 'Focus stays behind the modal and the user gets lost.',
          problem: 'Focus can leak outside the modal.',
          solution: 'Move focus on open and trap focus inside the modal.',
        },
      ],
    },
    quiz: {
      title: 'Quick practice quiz',
      description: 'Pick the most appropriate answer for each question.',
      progressLabel: 'Progress',
      correctBadge: 'Correct',
      selectInstruction: 'Select an option to see whether it is correct.',
      accessibleName: {
        title:
          'For an icon-only search button, pick the answer that provides an accessible name most directly.',
        options: [
          { id: 'A', code: '<button><svg ... /></button>' },
          { id: 'B', code: '<button aria-label="Search"><svg ... /></button>' },
          { id: 'C', code: '<button title="Search"><svg ... /></button>' },
          {
            id: 'D',
            code: '<button><span aria-hidden="true">Search</span><svg ... /></button>',
          },
        ],
        correctId: 'B',
        feedback: 'Correct! Screen readers announce "Search, button" clearly.',
      },
      heading: {
        title: 'Pick the appropriate heading order.',
        options: [
          { id: 'A', text: 'H1 → H3 → H2' },
          { id: 'B', text: 'H1 → H2 → H3' },
          { id: 'C', text: 'H2 → H1 → H3' },
          { id: 'D', text: 'H3 → H2 → H1' },
        ],
        correctId: 'B',
        feedback: 'Correct — that is a logical order.',
      },
      accessibleInput: {
        title: 'Pick the accessible input.',
        beforeNote: 'Visible text exists but is not linked to the input.',
        beforeVisualLabel: 'Username',
        beforePlaceholder: 'Enter your username',
        afterLabel: 'Username',
        afterPlaceholder: 'Enter your username',
        afterNote: 'A real <label for="..."> ties the visible label to the input.',
        feedback: 'Correct! The label is properly linked to the input.',
      },
    },
    takeaways: {
      title: 'Key takeaways',
      cards: [
        {
          id: 'understanding',
          title: 'Understand many assistive tools',
          body: 'Assistive technologies help users overcome barriers and use the web equally.',
        },
        {
          id: 'structure',
          title: 'Structure and meaning matter most',
          body: 'Correct names, structure, and state are the foundation of accessibility.',
        },
        {
          id: 'experience',
          title: 'Experience it yourself',
          body: 'Trying these tools reveals real problems and improvements.',
        },
      ],
      footer: 'Next, we will study the core accessibility principles and WCAG guidelines.',
    },
    cta: {
      main: 'Next: Accessibility learning roadmap',
      sub: 'Continue to the next lesson',
      aria: 'Next lesson: Accessibility learning roadmap',
    },
  },
};
