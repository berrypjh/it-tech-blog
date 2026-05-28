import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { LabelKey } from './labelTone';

export type { LabelKey, ToneKey };

/** Hero 우측 라벨링 결과 row */
export type HeroLabelRow = {
  label: LabelKey;
  /** chip 옆에 보여줄 코드 단편 */
  snippet: string;
};

export type BranchyCard = {
  id: 'dev' | 'feature-flag' | 'env' | 'legacy';
  title: string;
  body: string;
  label: LabelKey;
  iconKey: 'bug' | 'flag' | 'monitor' | 'gitBranch';
};

export type FlagCard = {
  name: string;
  /** 경로 성격 — default/experimental/legacy */
  kind: 'default' | 'experimental' | 'legacy';
  question: string;
};

export type TypeCard = {
  name: string;
  hint: string;
  question: string;
};

export type LabelingOption = {
  id: 'dev' | 'feature-flag' | 'type' | 'comment' | 'core';
  label: LabelKey;
  priority: 'first' | 'support' | 'later';
  reason: string;
  exampleCode: string;
};

export type TemplateStep = {
  number: string;
  title: string;
  body: string;
  label: LabelKey;
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type StripFlagCommentNoiseContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftCode: string;
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    rightPanelTitle: string;
    rightLabels: HeroLabelRow[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** "분기가 많아 보이고" 강조 */
    emphasize: string;
    badges: { text: string; label?: LabelKey }[];
  };
  whyBranchy: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: BranchyCard[];
    bannerLines: [string, string];
  };
  devBranch: {
    eyebrow: string;
    title: string;
    intro: string;
    code: string;
    mainPoint: string;
    cautionTitle: string;
    cautionBody: string;
  };
  featureFlag: {
    eyebrow: string;
    title: string;
    intro: string;
    mainPoint: string;
    flags: FlagCard[];
    questionsLabel: string;
    questions: string[];
    kindLabel: Record<FlagCard['kind'], string>;
    questionLabel: string;
  };
  flowType: {
    eyebrow: string;
    title: string;
    intro: string;
    mainPoint: string;
    types: TypeCard[];
    hintLabel: string;
    questionLabel: string;
    spotlightTitle: string;
    spotlightBody: string;
  };
  comment: {
    eyebrow: string;
    title: string;
    intro: string;
    code: string;
    interpretation: string;
    mainPoint: string;
    cautionTitle: string;
    cautionBody: string;
  };
  labelingInteraction: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    options: LabelingOption[];
    bucketLabel: string;
    buckets: Record<LabelingOption['priority'], string>;
    labels: {
      label: string;
      priority: string;
      reason: string;
      example: string;
    };
  };
  template: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: TemplateStep[];
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroLeftCode = `function someReactInternalFunction(value) {
  if (__DEV__) {
    warnAboutInvalidUsage(value);
  }

  if (enableSomeFeature) {
    return newFeaturePath(value);
  }

  // This path keeps legacy behavior stable.
  const typedValue: FiberRoot = normalize(value);

  return coreRuntimePath(typedValue);
}`;

const devCode = `if (__DEV__) {
  warnAboutInvalidHookAccess();
}`;

const commentCode = `// This is a fallback implementation
// used when the new path is disabled.
// It preserves the existing behavior
// for legacy roots.`;

export const stripFlagCommentNoiseContent: Record<Locale, StripFlagCommentNoiseContent> = {
  ko: {
    hero: {
      badge: 'React 소스코드 독해 루틴',
      titleLines: ['Feature Flag, 타입, 주석을 먼저 읽으면', '코드가 훨씬 짧아진다'],
      accentTail: '코드가 훨씬 짧아진다',
      description: '본문 로직부터 달려들기 전에 조건과 의도를 먼저 정리해야 합니다.',
      supporting:
        'React 내부 코드는 처음 보면 분기가 많아 복잡해 보입니다. 하지만 모든 줄이 같은 중요도를 갖는 것은 아닙니다. __DEV__ warning, feature flag, Flow 타입, 설계 주석을 먼저 분류하면 실제로 읽어야 할 핵심 runtime 경로가 훨씬 선명해집니다.',
      primaryCta: '읽기 우선순위 보기',
      secondaryCta: '라벨링 연습하기',
      visualTitle: '복잡해 보이는 코드를 읽기 가능한 경로로 줄입니다',
      leftPanelTitle: '처음 열었을 때',
      leftCode: heroLeftCode,
      leftCaption: '모든 줄을 같은 비중으로 읽으면 핵심 경로가 흐려집니다.',
      connectorLabel: 'Label first',
      connectorSub: '먼저 분류',
      rightPanelTitle: '라벨링 후 읽기',
      rightLabels: [
        { label: 'dev', snippet: 'warning' },
        { label: 'feature-flag', snippet: 'enableSomeFeature' },
        { label: 'comment', snippet: 'legacy behavior' },
        { label: 'type', snippet: 'FiberRoot' },
        { label: 'core', snippet: 'coreRuntimePath' },
      ],
      rightCaption: '라벨을 붙이면 먼저 읽을 경로와 나중에 볼 경로가 나뉩니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: [
        '왜 React 내부 코드는 이렇게 {emphasize},',
        '어디부터 읽어야 실제 핵심이 보일까?',
      ],
      emphasize: '분기가 많아 보이고',
      badges: [
        { text: '__DEV__', label: 'dev' },
        { text: 'Feature Flag', label: 'feature-flag' },
        { text: 'Flow Type', label: 'type' },
        { text: 'Comment', label: 'comment' },
        { text: 'Core Path', label: 'core' },
      ],
    },
    whyBranchy: {
      eyebrow: 'why branchy',
      title: '왜 React 코드는 분기가 많아 보이는가?',
      intro:
        'React는 여러 실행 환경, 개발 경고, 실험 기능, 레거시 호환성을 함께 다룹니다. 그래서 하나의 함수 안에도 여러 성격의 분기가 섞여 있을 수 있습니다.',
      cards: [
        {
          id: 'dev',
          title: 'DEV only warning',
          body: '개발 환경에서 잘못된 사용을 알려주기 위한 경고 코드입니다. 핵심 runtime 경로와 구분해서 읽어야 합니다.',
          label: 'dev',
          iconKey: 'bug',
        },
        {
          id: 'feature-flag',
          title: '실험 기능 feature flag',
          body: '새 기능, 실험 경로, 점진적 적용을 제어하는 조건입니다. 현재 읽는 버전에서 어떤 경로가 활성인지 확인해야 합니다.',
          label: 'feature-flag',
          iconKey: 'flag',
        },
        {
          id: 'env',
          title: '서버 / 클라이언트 분기',
          body: 'React는 서버 렌더링, 브라우저 DOM, hydration 등 다양한 환경을 다룹니다. 환경별 분기를 먼저 구분해야 흐름이 짧아집니다.',
          label: 'env',
          iconKey: 'monitor',
        },
        {
          id: 'legacy',
          title: '레거시 호환성 분기',
          body: '기존 동작을 깨지 않기 위한 호환성 경로입니다. 핵심 경로와 레거시 보호 경로를 분리해서 읽어야 합니다.',
          label: 'legacy',
          iconKey: 'gitBranch',
        },
      ],
      bannerLines: ['많은 분기는 핵심 경로가 아니라,', '조건과 환경을 설명하는 표식이다.'],
    },
    devBranch: {
      eyebrow: '__dev__ branches',
      title: '__DEV__ 분기 읽기',
      intro:
        '__DEV__ 분기는 개발 환경에서 경고와 디버깅 정보를 제공하기 위한 경우가 많습니다. 핵심 runtime 흐름을 찾을 때는 먼저 분리해서 표시합니다.',
      code: devCode,
      mainPoint: '개발 경고용 코드라면 핵심 runtime 흐름과 분리해서 본다.',
      cautionTitle: '분리한다 ≠ 무시한다',
      cautionBody:
        '분리해서 본다는 것은 무시한다는 뜻이 아닙니다. 먼저 정상 runtime 경로를 잡고, 이후 경고 조건이 어떤 잘못된 사용을 막는지 확인합니다.',
    },
    featureFlag: {
      eyebrow: 'feature flags',
      title: 'Feature Flag 읽기',
      intro:
        'feature flag는 React 내부에서 실험 기능, 점진적 전환, 레거시 경로를 제어하는 장치입니다.',
      mainPoint: '이 분기가 기본 경로인지, 실험 경로인지, 레거시 경로인지 먼저 구분한다.',
      kindLabel: {
        default: '기본',
        experimental: '실험',
        legacy: '레거시',
      },
      questionLabel: '읽기 질문',
      flags: [
        {
          name: 'enableSomeFeature',
          kind: 'experimental',
          question: '실험 경로. 켜졌을 때만 신경 쓴다.',
        },
        {
          name: 'disableLegacyMode',
          kind: 'legacy',
          question: '레거시 보호 경로. 끄면 무엇이 깨지는가?',
        },
        {
          name: 'enableAsyncActions',
          kind: 'default',
          question: '최신 버전 기본 경로. 우선 읽는다.',
        },
        {
          name: 'enableSuspenseCallback',
          kind: 'experimental',
          question: '실험 후크. 활성화된 버전에서만 본다.',
        },
      ],
      questionsLabel: '읽기 질문 리스트',
      questions: [
        '이 flag가 켜졌을 때와 꺼졌을 때 어느 경로가 실행되는가?',
        '지금 읽는 React 버전에서 이 flag의 기본값은 무엇인가?',
        '이 분기가 공개 API 동작을 바꾸는가, 내부 최적화만 바꾸는가?',
        '이 경로를 지금 단계에서 읽어야 하는가, 나중에 봐도 되는가?',
      ],
    },
    flowType: {
      eyebrow: 'flow types',
      title: 'Flow 타입으로 값의 모양 먼저 파악하기',
      intro:
        'React 내부 코드는 Flow 타입을 사용합니다. 본문 로직을 읽기 전에 타입을 보면 값의 구조와 기대 조건을 먼저 파악할 수 있습니다.',
      mainPoint: '타입을 보면 이 값이 어떤 구조를 기대하는지 먼저 보인다.',
      hintLabel: '타입이 알려주는 것',
      questionLabel: '연결되는 독해 질문',
      types: [
        {
          name: 'FiberRoot',
          hint: '단순 DOM container가 아니다 — 렌더링 상태도 함께 들고 있다.',
          question: 'root는 어떤 렌더링 상태를 들고 있는가?',
        },
        {
          name: 'Lane',
          hint: 'bitmask 형태의 우선순위 값.',
          question: '여러 lane을 어떻게 조합/판별하는가?',
        },
        {
          name: 'ThenableState',
          hint: 'pending / fulfilled / rejected를 추적하는 상태.',
          question: 'Promise 추적과 retry는 어디서 이어지는가?',
        },
        {
          name: 'UpdateQueue',
          hint: '아직 처리되지 않은 update가 쌓이는 자료구조.',
          question: '큐는 언제 비워지고 어떻게 합쳐지는가?',
        },
      ],
      spotlightTitle: '예시: FiberRoot',
      spotlightBody:
        'FiberRoot를 먼저 보면 root가 단순 DOM container가 아니라 pending lanes, callback node, finished work 같은 렌더링 상태를 함께 들고 있음을 알 수 있습니다.',
    },
    comment: {
      eyebrow: 'design comments',
      title: '주석에서 구현 의도 읽기',
      intro: '주석은 코드가 무엇을 하는지보다 왜 그렇게 구현되었는지 알려주는 경우가 많습니다.',
      code: commentCode,
      interpretation:
        '이 주석은 코드가 단순히 다른 경로라는 것보다, 새 경로가 꺼졌을 때 기존 동작을 보존하기 위한 fallback이라는 의도를 알려줍니다.',
      mainPoint: '주석은 "왜 이렇게 구현했는가"를 알려준다.',
      cautionTitle: '주석만 믿지 않는다',
      cautionBody: '주석만 단독으로 믿기보다 타입, 테스트, 실제 호출 경로와 함께 확인해야 합니다.',
    },
    labelingInteraction: {
      eyebrow: 'priority labeling',
      title: '읽기 우선순위 라벨링 인터랙션',
      intro:
        '복잡한 코드를 만나면 먼저 각 줄에 라벨을 붙입니다. 그러면 지금 바로 읽을 것과 나중에 확인할 것이 분리됩니다.',
      listLabel: '라벨 선택',
      bucketLabel: '우선순위 분류',
      buckets: {
        first: '먼저 읽을 것',
        support: '보조로 확인할 것',
        later: '나중에 볼 것',
      },
      labels: {
        label: '선택한 라벨',
        priority: '읽기 우선순위',
        reason: '왜 이렇게 분류하는가',
        example: '예시 코드',
      },
      options: [
        {
          id: 'core',
          label: 'core',
          priority: 'first',
          reason: '핵심 runtime 흐름은 가장 먼저 잡아야 다른 분기를 어떻게 분류할지 기준이 생긴다.',
          exampleCode: 'return coreRuntimePath(typedValue);',
        },
        {
          id: 'type',
          label: 'type',
          priority: 'first',
          reason: '값의 모양을 먼저 알면 본문 로직의 의미가 짧아진다.',
          exampleCode: 'const typedValue: FiberRoot = normalize(value);',
        },
        {
          id: 'comment',
          label: 'comment',
          priority: 'support',
          reason:
            '의도와 fallback 이유를 알려주지만 단독으로 신뢰하지 말고 타입·테스트와 함께 확인한다.',
          exampleCode: '// This path keeps legacy behavior stable.',
        },
        {
          id: 'feature-flag',
          label: 'feature-flag',
          priority: 'support',
          reason: '지금 읽는 버전에서 활성인지 비활성인지 판단해서 읽을지 말지를 정한다.',
          exampleCode: 'if (enableSomeFeature) { ... }',
        },
        {
          id: 'dev',
          label: 'dev',
          priority: 'later',
          reason: '개발 경고는 정상 경로를 잡은 뒤 어떤 잘못된 사용을 막는지 확인하는 보조 코드다.',
          exampleCode: 'if (__DEV__) { warnAboutInvalidUsage(value); }',
        },
      ],
    },
    template: {
      eyebrow: 'reading order template',
      title: '실제 독해 순서 템플릿',
      intro:
        '복잡한 React 내부 함수를 열었다면 아래 순서로 읽으면 핵심 경로를 더 빨리 찾을 수 있습니다.',
      steps: [
        {
          number: '1',
          title: '타입 시그니처',
          body: '함수 인자와 반환 타입을 보고 어떤 값을 다루는지 먼저 파악합니다.',
          label: 'type',
        },
        {
          number: '2',
          title: '상단 주석',
          body: '구현 의도나 설계상 예외를 설명하는 주석이 있는지 확인합니다.',
          label: 'comment',
        },
        {
          number: '3',
          title: 'DEV / feature flag 분기',
          body: '개발 경고, 실험 기능, 레거시 경로를 core path와 분리해서 표시합니다.',
          label: 'dev',
        },
        {
          number: '4',
          title: '정상 경로',
          body: '현재 주제와 직접 연결되는 기본 runtime 흐름을 먼저 따라갑니다.',
          label: 'core',
        },
        {
          number: '5',
          title: '예외 경로',
          body: '정상 경로를 이해한 뒤 예외 처리와 fallback 경로를 확인합니다.',
          label: 'legacy',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, 복잡해 보이는 함수 하나를 직접 짧게 만들어봅니다.',
      items: [
        '복잡해 보이는 함수 하나를 고른다.',
        '먼저 타입과 주석만 읽는다.',
        'DEV 분기와 feature flag 분기를 표시한다.',
        '실제 핵심 경로가 몇 줄로 줄어드는지 확인한다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '복잡한 코드는 본문부터 읽는 것이 느릴 수 있다.',
          sub: '먼저 라벨을 붙이면 같은 코드가 훨씬 짧게 읽힌다.',
          tone: 'amber',
        },
        {
          number: '02',
          text: '타입과 주석은 구현 의도를 압축해 준다.',
          sub: '값의 모양과 fallback 이유를 단 몇 줄로 보여준다.',
          tone: 'blue',
        },
        {
          number: '03',
          text: 'feature flag를 먼저 보면 읽어야 할 경로가 줄어든다.',
          sub: '비활성 경로는 일단 표시만 해두고 넘긴다.',
          tone: 'violet',
        },
      ],
    },
    nextCta: {
      eyebrow: '다음 단계',
      title: '릴리즈 노트와 버전 태그 함께 읽기',
      description:
        '읽기 속도는 높아졌다. 하지만 지금 보는 코드가 어느 버전 기준인지도 반드시 확인해야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/correct-version-diff',
    },
  },
  en: {
    hero: {
      badge: 'React source reading routine',
      titleLines: ['Read feature flags, types, comments first', 'and the code becomes far shorter'],
      accentTail: 'and the code becomes far shorter',
      description: 'Sort out the conditions and intent before diving into the body logic.',
      supporting:
        'React internals look branchy at first, but not every line carries equal weight. Classify __DEV__ warnings, feature flags, Flow types, and design comments first — and the core runtime path that actually matters becomes far sharper.',
      primaryCta: 'See the reading priority',
      secondaryCta: 'Try labeling practice',
      visualTitle: 'Shrink branchy-looking code into a readable path',
      leftPanelTitle: 'When you first open it',
      leftCode: heroLeftCode,
      leftCaption: 'Reading every line with equal weight blurs the core path.',
      connectorLabel: 'Label first',
      connectorSub: 'Classify first',
      rightPanelTitle: 'After labeling',
      rightLabels: [
        { label: 'dev', snippet: 'warning' },
        { label: 'feature-flag', snippet: 'enableSomeFeature' },
        { label: 'comment', snippet: 'legacy behavior' },
        { label: 'type', snippet: 'FiberRoot' },
        { label: 'core', snippet: 'coreRuntimePath' },
      ],
      rightCaption: 'Labels split the code into "read now" and "read later."',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'Why does React internals look so {emphasize},',
        'and where do you start reading to see the actual core?',
      ],
      emphasize: 'branchy',
      badges: [
        { text: '__DEV__', label: 'dev' },
        { text: 'Feature Flag', label: 'feature-flag' },
        { text: 'Flow Type', label: 'type' },
        { text: 'Comment', label: 'comment' },
        { text: 'Core Path', label: 'core' },
      ],
    },
    whyBranchy: {
      eyebrow: 'why branchy',
      title: 'Why does React code look so branchy?',
      intro:
        'React handles many runtime environments, dev warnings, experimental features, and legacy compatibility together. A single function can mix several different kinds of branches.',
      cards: [
        {
          id: 'dev',
          title: 'DEV-only warning',
          body: 'Warning code that flags invalid usage in dev. Read it separately from the core runtime path.',
          label: 'dev',
          iconKey: 'bug',
        },
        {
          id: 'feature-flag',
          title: 'Experimental feature flag',
          body: 'A condition controlling new features, experimental paths, and gradual rollout. Confirm which path is active in the version you are reading.',
          label: 'feature-flag',
          iconKey: 'flag',
        },
        {
          id: 'env',
          title: 'Server / client branch',
          body: 'React covers server rendering, browser DOM, hydration, and more. Separate environment branches first to shorten the flow.',
          label: 'env',
          iconKey: 'monitor',
        },
        {
          id: 'legacy',
          title: 'Legacy-compat branch',
          body: 'A compatibility path that avoids breaking existing behavior. Read it apart from the core path.',
          label: 'legacy',
          iconKey: 'gitBranch',
        },
      ],
      bannerLines: [
        'Many branches are not the core path —',
        'they are markers describing conditions and environments.',
      ],
    },
    devBranch: {
      eyebrow: '__dev__ branches',
      title: 'Reading __DEV__ branches',
      intro:
        '__DEV__ branches usually carry dev-only warnings and debug info. When finding the core runtime, mark them apart first.',
      code: devCode,
      mainPoint: 'If it is dev-warning code, read it apart from the core runtime flow.',
      cautionTitle: 'Apart ≠ ignored',
      cautionBody:
        'Apart does not mean ignored. First lock in the normal runtime path, then confirm what invalid usage the warning condition is preventing.',
    },
    featureFlag: {
      eyebrow: 'feature flags',
      title: 'Reading feature flags',
      intro:
        'Feature flags control experimental features, gradual rollouts, and legacy paths inside React.',
      mainPoint: 'Decide first whether this branch is the default, experimental, or legacy path.',
      kindLabel: {
        default: 'default',
        experimental: 'experimental',
        legacy: 'legacy',
      },
      questionLabel: 'Reading question',
      flags: [
        {
          name: 'enableSomeFeature',
          kind: 'experimental',
          question: 'Experimental. Only care about it when on.',
        },
        {
          name: 'disableLegacyMode',
          kind: 'legacy',
          question: 'Legacy guard. What breaks if you disable it?',
        },
        {
          name: 'enableAsyncActions',
          kind: 'default',
          question: 'Default on in the latest version. Read it first.',
        },
        {
          name: 'enableSuspenseCallback',
          kind: 'experimental',
          question: 'Experimental hook. Read only in versions where it is enabled.',
        },
      ],
      questionsLabel: 'Reading question checklist',
      questions: [
        'Which path runs when this flag is on vs off?',
        'In the React version you are reading, what is the default value?',
        'Does this branch change public API behavior, or only internal optimization?',
        'Should you read this path now, or can it wait?',
      ],
    },
    flowType: {
      eyebrow: 'flow types',
      title: 'Read Flow types to grasp value shape first',
      intro:
        "React internals use Flow types. Reading types before the body logic surfaces the value's structure and expected conditions first.",
      mainPoint: 'Types reveal what shape a value is expected to have — before any body logic.',
      hintLabel: 'What the type tells you',
      questionLabel: 'Connected reading question',
      types: [
        {
          name: 'FiberRoot',
          hint: 'Not a plain DOM container — carries rendering state too.',
          question: 'Which rendering state does the root hold?',
        },
        {
          name: 'Lane',
          hint: 'A bitmask-shaped priority value.',
          question: 'How are multiple lanes combined and matched?',
        },
        {
          name: 'ThenableState',
          hint: 'Tracks pending / fulfilled / rejected state.',
          question: 'Where does Promise tracking connect to retry?',
        },
        {
          name: 'UpdateQueue',
          hint: 'A data structure where unprocessed updates collect.',
          question: 'When is the queue drained, and how are updates merged?',
        },
      ],
      spotlightTitle: 'Example: FiberRoot',
      spotlightBody:
        'Reading FiberRoot first reveals that a root is not just a DOM container — it carries pending lanes, callback nodes, finished work, and other rendering state.',
    },
    comment: {
      eyebrow: 'design comments',
      title: 'Reading comments for design intent',
      intro: "Comments usually tell you 'why it is implemented this way' more than 'what it does.'",
      code: commentCode,
      interpretation:
        "This comment tells you it is not just a different path — it's a fallback that preserves the existing behavior when the new path is disabled.",
      mainPoint: "Comments tell you 'why it was implemented this way.'",
      cautionTitle: 'Do not trust comments alone',
      cautionBody:
        'Rather than trusting a comment alone, verify it together with types, tests, and the actual call path.',
    },
    labelingInteraction: {
      eyebrow: 'priority labeling',
      title: 'Reading-priority labeling interaction',
      intro:
        'When you encounter complex code, label each line first. That splits what to read now from what to check later.',
      listLabel: 'Pick a label',
      bucketLabel: 'Priority buckets',
      buckets: {
        first: 'Read first',
        support: 'Check as support',
        later: 'Read later',
      },
      labels: {
        label: 'Selected label',
        priority: 'Reading priority',
        reason: 'Why this priority',
        example: 'Example code',
      },
      options: [
        {
          id: 'core',
          label: 'core',
          priority: 'first',
          reason:
            'Lock in the core runtime first — it becomes the baseline you use to classify the other branches.',
          exampleCode: 'return coreRuntimePath(typedValue);',
        },
        {
          id: 'type',
          label: 'type',
          priority: 'first',
          reason: "Knowing the value's shape first shortens the meaning of the body logic.",
          exampleCode: 'const typedValue: FiberRoot = normalize(value);',
        },
        {
          id: 'comment',
          label: 'comment',
          priority: 'support',
          reason:
            'Reveals intent and fallback reasons — but never trust it alone; cross-check with types and tests.',
          exampleCode: '// This path keeps legacy behavior stable.',
        },
        {
          id: 'feature-flag',
          label: 'feature-flag',
          priority: 'support',
          reason:
            'Decide whether to read it based on whether the flag is on or off in your version.',
          exampleCode: 'if (enableSomeFeature) { ... }',
        },
        {
          id: 'dev',
          label: 'dev',
          priority: 'later',
          reason:
            'Dev warnings are support code — read after the normal path to see what invalid usage they prevent.',
          exampleCode: 'if (__DEV__) { warnAboutInvalidUsage(value); }',
        },
      ],
    },
    template: {
      eyebrow: 'reading order template',
      title: 'Practical reading-order template',
      intro:
        'When you open a complex React internal function, read it in the following order to find the core path faster.',
      steps: [
        {
          number: '1',
          title: 'Type signatures',
          body: 'Look at arg and return types first; understand what values you are handling.',
          label: 'type',
        },
        {
          number: '2',
          title: 'Top-of-file comments',
          body: 'Check whether there are comments explaining design intent or exceptions.',
          label: 'comment',
        },
        {
          number: '3',
          title: 'DEV / feature flag branches',
          body: 'Mark dev warnings, experiments, and legacy paths apart from the core path.',
          label: 'dev',
        },
        {
          number: '4',
          title: 'The normal path',
          body: 'Follow the base runtime flow that is directly connected to your topic first.',
          label: 'core',
        },
        {
          number: '5',
          title: 'Exception paths',
          body: 'Once the normal path is clear, check exception handling and fallbacks.',
          label: 'legacy',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro: "Don't stop at reading — shorten one branchy-looking function yourself.",
      items: [
        'Pick one function that looks complex.',
        'Read only the types and comments first.',
        'Mark the DEV branches and feature-flag branches.',
        'See how few lines the actual core path collapses to.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Reading body logic first can be slow for complex code.',
          sub: 'The same code reads far shorter once labels are applied.',
          tone: 'amber',
        },
        {
          number: '02',
          text: 'Types and comments compress implementation intent.',
          sub: 'Value shape and fallback reasons in just a few lines.',
          tone: 'blue',
        },
        {
          number: '03',
          text: 'Reading feature flags first shrinks the paths you must read.',
          sub: 'Inactive paths are marked and skipped for now.',
          tone: 'violet',
        },
      ],
    },
    nextCta: {
      eyebrow: 'Next step',
      title: 'Read release notes and version tags together',
      description:
        'Your reading speed is up. But you must also confirm which version the code in front of you is based on.',
      cta: 'Go to the next page',
      href: '/correct-version-diff',
    },
  },
};
