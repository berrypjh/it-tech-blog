import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { RoleKey } from './roleTone';

export type { RoleKey, ToneKey };

export type ConfusionCard = {
  number: string;
  title: string;
  body: string;
  before: string;
  after: string;
};

export type VersionCompareSide = {
  title: string;
  badge: string;
  bullets: string[];
  conclusion: string;
};

export type SourceCard = {
  id: 'blog' | 'releases' | 'changelog' | 'tag';
  name: string;
  role: string;
  body: string;
  useWhen: string;
  iconKey: 'megaphone' | 'newspaper' | 'listTree' | 'tag';
};

export type TermCase = {
  id: 'schedule-work' | 'expiration-time' | 'suspense-19';
  oldLabel: string;
  oldCode: string;
  modernLabel: string;
  modernCode: string;
  judgment: string;
};

export type VersionKey = 'react16' | 'react18' | 'react19';

export type VersionTab = {
  id: VersionKey;
  label: string;
  keywords: string[];
  readingPoint: string;
  modernView: string;
};

export type NoteField = {
  label: string;
  value: string;
  /** badge면 badge style로, code면 mono code chip로 */
  format: 'text' | 'badge' | 'code' | 'list';
  role?: RoleKey;
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type CorrectVersionDiffContent = {
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
    leftItems: string[];
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    connectorChips: string[];
    rightPanelTitle: string;
    rightItems: string[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** 강조 토큰 — "함수명이 최신 코드에 없을 때" */
    emphasize: string;
    badges: { text: string; tone?: 'old' | 'modern' | 'official' | 'tag' }[];
  };
  whyOld: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ConfusionCard[];
    bannerLines: [string, string];
  };
  versionTags: {
    eyebrow: string;
    title: string;
    intro: string;
    left: VersionCompareSide;
    right: VersionCompareSide;
    conclusion: string;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    roleLabel: string;
    useWhenLabel: string;
    cards: SourceCard[];
  };
  termCompare: {
    eyebrow: string;
    title: string;
    intro: string;
    judgmentLabel: string;
    oldLabel: string;
    modernLabel: string;
    cases: TermCase[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    tabs: VersionTab[];
    labels: {
      selected: string;
      keywords: string;
      readingPoint: string;
      modernView: string;
    };
  };
  noteTemplate: {
    eyebrow: string;
    title: string;
    intro: string;
    templateTitle: string;
    noteHeader: string;
    fields: NoteField[];
    highlightFieldLabel: string;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const correctVersionDiffContent: Record<Locale, CorrectVersionDiffContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 9/10단계',
      titleLines: ['릴리즈 노트와 버전 태그를 함께 읽어야', '오래된 강의를 교정할 수 있다'],
      accentTail: '오래된 강의를 교정할 수 있다',
      description: '무엇을 읽는가만큼, 어느 버전의 코드를 읽는가가 중요합니다.',
      supporting:
        '예전 강의에서 본 함수명이 최신 React 코드에 없다고 해서 그 자료가 곧바로 틀렸다는 뜻은 아닙니다. 그 자료가 설명하던 React의 시대와 지금 우리가 읽는 React의 버전이 다를 수 있습니다. 릴리즈 노트, CHANGELOG, 공식 블로그, GitHub tag를 함께 보면 과거 기준과 최신 기준을 분리해서 읽을 수 있습니다.',
      primaryCta: '버전 비교 보기',
      secondaryCta: '학습 노트 템플릿 보기',
      visualTitle: '오래된 설명을 최신 기준으로 보정합니다',
      leftPanelTitle: '오래된 강의 노트',
      leftItems: ['scheduleWork', 'expirationTime', 'legacy render', 'React 16.x 기준 설명'],
      leftCaption: '당시 기준으로는 맞는 설명이어도 현재 코드와 이름과 구조가 다를 수 있습니다.',
      connectorLabel: 'Version Check',
      connectorSub: '버전 확인',
      connectorChips: ['Release Notes', 'CHANGELOG', 'GitHub Tag', 'Official Blog'],
      rightPanelTitle: '최신 기준 학습 노트',
      rightItems: [
        'scheduleUpdateOnFiber',
        'lanes',
        'concurrent rendering',
        'React 19.x 기준 보정',
      ],
      rightCaption: '버전 기준을 분리하면 무엇이 유지되고 무엇이 바뀌었는지 보입니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['예전 강의에서 본 {emphasize},', '무엇이 바뀐 것인지 어떻게 판단할까?'],
      emphasize: '함수명이 최신 코드에 없을 때',
      badges: [
        { text: 'Release Notes', tone: 'official' },
        { text: 'CHANGELOG', tone: 'official' },
        { text: 'GitHub Tag', tone: 'tag' },
        { text: 'React 16', tone: 'old' },
        { text: 'React 19', tone: 'modern' },
      ],
    },
    whyOld: {
      eyebrow: 'why old lectures confuse',
      title: '왜 오래된 강의가 헷갈리는가?',
      intro:
        'React 내부 구현은 버전에 따라 함수명, 파일 경로, 자료구조가 달라집니다. 그래서 강의의 설명과 현재 코드가 다를 때는 먼저 버전 차이를 의심해야 합니다.',
      cards: [
        {
          number: '01',
          title: '함수명이 바뀐다',
          body: '과거 강의에서 등장한 함수명이 최신 코드에 없을 수 있습니다. 이때는 개념이 사라진 것인지, 이름과 경로가 바뀐 것인지 구분해야 합니다.',
          before: 'scheduleWork',
          after: 'scheduleUpdateOnFiber',
        },
        {
          number: '02',
          title: '파일 경로가 달라진다',
          body: 'React 내부 구조가 바뀌면서 관련 코드가 다른 파일이나 패키지로 이동할 수 있습니다. 검색 결과가 없더라도 개념 자체가 사라졌다고 단정하면 안 됩니다.',
          before: 'old path',
          after: 'new package boundary',
        },
        {
          number: '03',
          title: '개념은 남아도 구현 방식이 바뀐다',
          body: '업데이트를 root 방향으로 전파한다는 큰 개념은 남아도, 우선순위 표현이나 scheduling 방식은 달라질 수 있습니다.',
          before: 'expirationTime',
          after: 'lanes',
        },
      ],
      bannerLines: ['자료가 틀린 것이 아니라,', '기준 버전이 다를 수 있다.'],
    },
    versionTags: {
      eyebrow: 'why version tags matter',
      title: '버전 태그를 고정하지 않으면 생기는 문제',
      intro:
        'GitHub의 main 브랜치는 계속 바뀝니다. 학습 자료와 같은 코드 상태를 다시 확인하려면 가능한 한 tag 기준 링크를 남기는 것이 안전합니다.',
      left: {
        title: 'main 브랜치 링크',
        badge: 'moving target',
        bullets: [
          '나중에 내용이 바뀐다',
          '강의 시점과 다른 코드가 열릴 수 있다',
          '학습 노트 재현성이 낮다',
        ],
        conclusion:
          '현재 상태를 빠르게 보는 데는 좋지만, 강의 시점의 코드를 고정하기에는 불안정합니다.',
      },
      right: {
        title: 'v19.2.6 태그 링크',
        badge: 'fixed snapshot',
        bullets: [
          '같은 코드 상태를 계속 재확인 가능',
          '학습 노트의 기준점이 됨',
          '버전 비교가 쉬워짐',
        ],
        conclusion: '소스코드 독해 노트에는 branch보다 tag 기준을 남기는 것이 안전합니다.',
      },
      conclusion: '소스코드 독해 노트에는 branch보다 tag 기준을 남기는 것이 안전합니다.',
    },
    sources: {
      eyebrow: 'official sources',
      title: '자료별 역할 비교',
      intro:
        '공식 자료도 모두 같은 역할을 하지 않습니다. 어떤 질문을 해결하고 싶은지에 따라 확인해야 할 자료가 달라집니다.',
      roleLabel: '역할',
      useWhenLabel: '사용할 때',
      cards: [
        {
          id: 'blog',
          name: '공식 블로그',
          role: '변화의 의도',
          body: '새 기능이 왜 도입되었는지, 어떤 문제를 해결하려는지 확인할 때 유용합니다.',
          useWhen: '큰 변화의 배경을 이해할 때',
          iconKey: 'megaphone',
        },
        {
          id: 'releases',
          name: 'Releases',
          role: '최신 버전 상태',
          body: '어떤 버전이 릴리즈되었고, 해당 버전에 어떤 변경이 포함되었는지 확인할 때 사용합니다.',
          useWhen: '현재 기준 버전을 확인할 때',
          iconKey: 'newspaper',
        },
        {
          id: 'changelog',
          name: 'CHANGELOG',
          role: '누적 변경 기록',
          body: '버전 사이에 어떤 변경이 누적되었는지 추적할 때 유용합니다.',
          useWhen: '과거 설명과 현재 코드 사이의 변화 흐름을 볼 때',
          iconKey: 'listTree',
        },
        {
          id: 'tag',
          name: 'GitHub tag',
          role: '실제 코드 고정',
          body: '특정 버전의 실제 소스코드를 다시 열어 같은 상태로 확인할 때 필요합니다.',
          useWhen: '학습 노트의 코드 기준점을 남길 때',
          iconKey: 'tag',
        },
      ],
    },
    termCompare: {
      eyebrow: 'old terms vs modern code',
      title: '오래된 내부 용어와 최신 코드 비교',
      intro:
        '오래된 용어를 최신 코드의 어느 개념으로 읽어야 하는지 단순 치환이 아니라 흐름 기준으로 비교합니다.',
      judgmentLabel: '판단',
      oldLabel: '과거 강의',
      modernLabel: '최신 코드',
      cases: [
        {
          id: 'schedule-work',
          oldLabel: '과거 강의',
          oldCode: 'scheduleWork',
          modernLabel: '최신 코드',
          modernCode: 'scheduleUpdateOnFiber',
          judgment:
            '이름만 단순히 바뀐 것으로 보기보다, 업데이트가 Fiber에서 root scheduling 흐름으로 연결되는 전체 경로를 함께 봐야 합니다.',
        },
        {
          id: 'expiration-time',
          oldLabel: '과거 강의',
          oldCode: 'expirationTime',
          modernLabel: '최신 코드',
          modernCode: 'lanes',
          judgment:
            '우선순위와 만료 시간을 표현하던 방식이 lane 기반 모델로 바뀌었다고 읽어야 합니다.',
        },
        {
          id: 'suspense-19',
          oldLabel: '과거 Suspense 설명',
          oldCode: 'React 18 기준 Suspense 설명',
          modernLabel: '최신 기준',
          modernCode: 'React 19 use()와 함께 읽기',
          judgment:
            'Suspense는 fallback만 보는 것이 아니라 thenable tracking, use(), retry 흐름과 함께 읽어야 합니다.',
        },
      ],
    },
    timeline: {
      eyebrow: 'version timeline',
      title: '버전 비교 타임라인 인터랙션',
      intro:
        'React 내부 코드는 버전별로 읽는 기준이 달라집니다. 각 버전의 핵심 키워드를 비교하면서 지금 어떤 기준으로 읽어야 하는지 확인합니다.',
      listLabel: '버전 선택',
      labels: {
        selected: '선택 버전',
        keywords: '핵심 내부 키워드',
        readingPoint: '당시 읽기 포인트',
        modernView: '최신 대응 관점',
      },
      tabs: [
        {
          id: 'react16',
          label: 'React 16',
          keywords: ['Fiber', 'scheduleWork', 'expirationTime', 'legacy root'],
          readingPoint:
            'Fiber 아키텍처가 도입되면서 Stack Reconciler와 다른 렌더링 구조가 중심이 되었습니다.',
          modernView:
            'scheduleWork를 그대로 찾기보다 scheduleUpdateOnFiber, root scheduling, lanes 기반 update path로 보정해서 읽습니다.',
        },
        {
          id: 'react18',
          label: 'React 18',
          keywords: ['Concurrent features', 'automatic batching', 'transitions', 'Suspense SSR'],
          readingPoint:
            '동시성 기능과 transition, automatic batching이 공개 API와 내부 scheduling 이해의 핵심이 되었습니다.',
          modernView:
            'React 19에서도 transition과 concurrent rendering 관점은 유지되지만, Actions와 use() 흐름까지 함께 봐야 합니다.',
        },
        {
          id: 'react19',
          label: 'React 19',
          keywords: ['Actions', 'use()', 'ref as prop', 'Server Components'],
          readingPoint:
            'form actions, async transitions, use(), ref as prop, Server Components 경계가 더 중요해졌습니다.',
          modernView:
            '공개 API 변화뿐 아니라 Element 표현, update path, Suspense retry, 서버-클라이언트 경계를 함께 읽어야 합니다.',
        },
      ],
    },
    noteTemplate: {
      eyebrow: 'modern learning note template',
      title: '최신 학습 노트 작성 템플릿',
      intro:
        '오래된 강의를 최신 기준으로 읽을 때는 그냥 "틀림"이라고 표시하지 말고, 과거 기준과 최신 기준을 나누어 정리합니다.',
      templateTitle: 'Scheduler update path',
      noteHeader: 'learning-note.md',
      highlightFieldLabel: '보정 메모',
      fields: [
        { label: '주제', value: 'Scheduler update path', format: 'text' },
        { label: '영상/자료 기준', value: 'React 16.x', format: 'badge', role: 'old' },
        { label: '최신 기준', value: 'React 19.2.6', format: 'badge', role: 'modern' },
        {
          label: '같은 점',
          value: '업데이트를 root 방향으로 전파한다는 개념은 유지된다.',
          format: 'text',
        },
        {
          label: '달라진 점',
          value: '함수명, lane 기반 구조, scheduling 경로가 달라졌다.',
          format: 'text',
        },
        {
          label: '지금 읽을 코드',
          value: 'scheduleUpdateOnFiber, requestUpdateLane, root scheduling 관련 코드',
          format: 'list',
        },
        {
          label: '보정 메모',
          value:
            '과거 설명은 React 16 기준으로는 유효할 수 있지만, 최신 코드를 읽을 때는 lane과 root scheduler 관점으로 다시 정리한다.',
          format: 'text',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro:
        '이 페이지를 읽고 끝내지 말고, 오래된 React 내부 강의 하나를 직접 최신 기준으로 보정해봅니다.',
      items: [
        '오래된 React 내부 강의 하나를 고른다.',
        '사용된 함수명 하나를 최신 코드에서 검색한다.',
        '없으면 개념이 바뀐 것인지 이름만 바뀐 것인지 구분한다.',
        '최종적으로 "과거 기준 / 최신 기준" 메모를 만든다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '버전 확인 없는 소스코드 독해는 쉽게 어긋난다.',
          sub: '먼저 어느 버전의 코드를 보는지 명시하면 헷갈림이 줄어든다.',
          tone: 'amber',
        },
        {
          number: '02',
          text: '공식 블로그, Releases, CHANGELOG, tag는 서로 역할이 다르다.',
          sub: '의도 / 상태 / 누적 변경 / 고정 코드 — 각각 다른 질문에 답한다.',
          tone: 'violet',
        },
        {
          number: '03',
          text: '오래된 강의를 최신 기준으로 보정하는 능력도 독해 실력이다.',
          sub: '"틀린 자료"가 아니라 "다른 버전의 자료"로 본다.',
          tone: 'blue',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '내 말로 재구성하기',
      description: '이제 마지막이다. 읽은 내용을 내 말과 흐름도로 다시 만드는 단계로 가자.',
      cta: '다음 페이지로 이동',
      href: '/reconstruct-with-words-and-flow',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 9/10',
      titleLines: ['You need release notes and version tags together', 'to correct old lectures'],
      accentTail: 'to correct old lectures',
      description:
        'What you read matters — but which version of the code you read matters just as much.',
      supporting:
        'A function name from an old lecture missing in the latest React code does not automatically mean the material was wrong. The React era it described may simply differ from the React version you are reading now. Look at release notes, CHANGELOG, the official blog, and GitHub tags together — that lets you separate the old baseline from the modern one.',
      primaryCta: 'See the version comparison',
      secondaryCta: 'See the note template',
      visualTitle: 'Correct old explanations against the modern baseline',
      leftPanelTitle: 'Old lecture notes',
      leftItems: ['scheduleWork', 'expirationTime', 'legacy render', 'React 16.x baseline'],
      leftCaption:
        'Even if accurate for its time, the names and shapes may differ from current code.',
      connectorLabel: 'Version Check',
      connectorSub: 'Confirm version',
      connectorChips: ['Release Notes', 'CHANGELOG', 'GitHub Tag', 'Official Blog'],
      rightPanelTitle: 'Modern reading notes',
      rightItems: [
        'scheduleUpdateOnFiber',
        'lanes',
        'concurrent rendering',
        'React 19.x corrected baseline',
      ],
      rightCaption: 'Separate the version baseline and you can see what was kept and what changed.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'When a function name from an old lecture {emphasize},',
        'how do you decide what actually changed?',
      ],
      emphasize: 'is missing in current code',
      badges: [
        { text: 'Release Notes', tone: 'official' },
        { text: 'CHANGELOG', tone: 'official' },
        { text: 'GitHub Tag', tone: 'tag' },
        { text: 'React 16', tone: 'old' },
        { text: 'React 19', tone: 'modern' },
      ],
    },
    whyOld: {
      eyebrow: 'why old lectures confuse',
      title: 'Why do old lectures get confusing?',
      intro:
        "React internals shift across versions — function names, file paths, and data structures. When a lecture's explanation diverges from current code, suspect a version gap first.",
      cards: [
        {
          number: '01',
          title: 'Function names change',
          body: 'A function name from an older lecture may not exist in current code. Decide whether the concept is gone or only the name and path moved.',
          before: 'scheduleWork',
          after: 'scheduleUpdateOnFiber',
        },
        {
          number: '02',
          title: 'File paths shift',
          body: 'As internals restructure, related code may move to different files or packages. A missing search result does not mean the concept disappeared.',
          before: 'old path',
          after: 'new package boundary',
        },
        {
          number: '03',
          title: 'The concept stays, the implementation changes',
          body: 'The high-level idea of propagating updates up to root may remain, while priority representation or scheduling shape changes underneath.',
          before: 'expirationTime',
          after: 'lanes',
        },
      ],
      bannerLines: ['Materials are not wrong —', 'the baseline version may differ.'],
    },
    versionTags: {
      eyebrow: 'why version tags matter',
      title: 'What goes wrong without pinned version tags',
      intro:
        "GitHub's main branch keeps moving. To re-check the same code state as a piece of learning material, prefer tag-based links whenever you can.",
      left: {
        title: 'main branch link',
        badge: 'moving target',
        bullets: [
          'Content changes over time',
          "Can open code different from the lecture's moment",
          'Low reproducibility for notes',
        ],
        conclusion:
          'Great for a quick look at the current state — unstable for pinning code from the lecture era.',
      },
      right: {
        title: 'v19.2.6 tag link',
        badge: 'fixed snapshot',
        bullets: [
          'Reopen the same code state again and again',
          'Becomes the anchor for your learning note',
          'Easier to compare versions',
        ],
        conclusion: 'For source-reading notes, prefer tag-based links over branch links.',
      },
      conclusion: 'For source-reading notes, prefer tag-based links over branch links.',
    },
    sources: {
      eyebrow: 'official sources',
      title: 'Roles of official sources',
      intro:
        'Even official sources do not all play the same role. Which one you should check depends on the question you are trying to answer.',
      roleLabel: 'Role',
      useWhenLabel: 'Use when',
      cards: [
        {
          id: 'blog',
          name: 'Official blog',
          role: 'Intent of change',
          body: 'Useful when checking why a new feature was introduced and what problem it solves.',
          useWhen: 'Understanding the background behind a major change',
          iconKey: 'megaphone',
        },
        {
          id: 'releases',
          name: 'Releases',
          role: 'Current version state',
          body: 'Use when checking what version was released and what changes it includes.',
          useWhen: 'Confirming the current baseline version',
          iconKey: 'newspaper',
        },
        {
          id: 'changelog',
          name: 'CHANGELOG',
          role: 'Accumulated changes',
          body: 'Useful when tracking what changes accumulated between versions.',
          useWhen: 'Seeing the flow of change between an old explanation and current code',
          iconKey: 'listTree',
        },
        {
          id: 'tag',
          name: 'GitHub tag',
          role: 'Pinned source code',
          body: 'Required when you need to reopen the exact source of a specific version in the same state.',
          useWhen: 'Anchoring the code reference for a learning note',
          iconKey: 'tag',
        },
      ],
    },
    termCompare: {
      eyebrow: 'old terms vs modern code',
      title: 'Old internal terms vs modern code',
      intro:
        'Compare old terms with the modern concept they map to — by flow, not as a 1-to-1 rename.',
      judgmentLabel: 'Judgment',
      oldLabel: 'Old lecture',
      modernLabel: 'Modern code',
      cases: [
        {
          id: 'schedule-work',
          oldLabel: 'Old lecture',
          oldCode: 'scheduleWork',
          modernLabel: 'Modern code',
          modernCode: 'scheduleUpdateOnFiber',
          judgment:
            'Read it as the full path where updates flow from Fiber up to root scheduling — not as a simple rename.',
        },
        {
          id: 'expiration-time',
          oldLabel: 'Old lecture',
          oldCode: 'expirationTime',
          modernLabel: 'Modern code',
          modernCode: 'lanes',
          judgment: 'The way priority and expiration were expressed shifted to a lane-based model.',
        },
        {
          id: 'suspense-19',
          oldLabel: 'Old Suspense explanation',
          oldCode: 'React 18 Suspense baseline',
          modernLabel: 'Modern baseline',
          modernCode: 'React 19 read with use()',
          judgment:
            'Read Suspense together with thenable tracking, use(), and retry — not just fallback rendering.',
        },
      ],
    },
    timeline: {
      eyebrow: 'version timeline',
      title: 'Version-comparison timeline interaction',
      intro:
        "Reading React internals shifts baseline by version. Compare each version's keywords to confirm what baseline you should be reading by now.",
      listLabel: 'Pick a version',
      labels: {
        selected: 'Selected version',
        keywords: 'Key internal keywords',
        readingPoint: 'Reading point at the time',
        modernView: 'Modern correction view',
      },
      tabs: [
        {
          id: 'react16',
          label: 'React 16',
          keywords: ['Fiber', 'scheduleWork', 'expirationTime', 'legacy root'],
          readingPoint:
            'When Fiber landed, the rendering structure shifted away from the Stack Reconciler.',
          modernView:
            'Instead of searching for scheduleWork as-is, correct to scheduleUpdateOnFiber, root scheduling, and the lane-based update path.',
        },
        {
          id: 'react18',
          label: 'React 18',
          keywords: ['Concurrent features', 'automatic batching', 'transitions', 'Suspense SSR'],
          readingPoint:
            'Concurrent features, transitions, and automatic batching became central to understanding public APIs and internal scheduling.',
          modernView:
            'React 19 keeps the transition / concurrent rendering perspective but adds Actions and use() flow on top.',
        },
        {
          id: 'react19',
          label: 'React 19',
          keywords: ['Actions', 'use()', 'ref as prop', 'Server Components'],
          readingPoint:
            'form actions, async transitions, use(), ref as prop, and Server Component boundaries grew more important.',
          modernView:
            'Read public API changes together with Element shape, the update path, Suspense retry, and the server-client boundary.',
        },
      ],
    },
    noteTemplate: {
      eyebrow: 'modern learning note template',
      title: 'Modern learning-note template',
      intro:
        'When reading an old lecture against modern code, do not just mark it "wrong" — split the old baseline from the modern baseline and write them down.',
      templateTitle: 'Scheduler update path',
      noteHeader: 'learning-note.md',
      highlightFieldLabel: 'Correction note',
      fields: [
        { label: 'Topic', value: 'Scheduler update path', format: 'text' },
        { label: 'Source baseline', value: 'React 16.x', format: 'badge', role: 'old' },
        { label: 'Modern baseline', value: 'React 19.2.6', format: 'badge', role: 'modern' },
        {
          label: 'What is the same',
          value: 'The idea of propagating updates up toward the root is kept.',
          format: 'text',
        },
        {
          label: 'What changed',
          value: 'Function names, the lane-based shape, and the scheduling path differ.',
          format: 'text',
        },
        {
          label: 'Code to read now',
          value: 'scheduleUpdateOnFiber, requestUpdateLane, root scheduling related code',
          format: 'list',
        },
        {
          label: 'Correction note',
          value:
            'The old explanation can still be valid for React 16, but for current code, re-organize it through the lens of lanes and the root scheduler.',
          format: 'text',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro:
        "Don't stop at reading — pick an old React internals lecture and correct it against the modern baseline yourself.",
      items: [
        'Pick one old React internals lecture.',
        'Search for one function name from it in the current code.',
        'If missing, decide whether the concept changed or only the name did.',
        'Finally, write a "old baseline / modern baseline" note.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Source reading without a version check drifts easily.',
          sub: 'State up front which version you are reading and the confusion shrinks.',
          tone: 'amber',
        },
        {
          number: '02',
          text: 'Official blog, Releases, CHANGELOG, and tag each play a different role.',
          sub: 'Intent / state / accumulated change / pinned code — different questions.',
          tone: 'violet',
        },
        {
          number: '03',
          text: 'Correcting an old lecture against the modern baseline is itself a reading skill.',
          sub: "Read it as 'a different-version material,' not 'wrong material.'",
          tone: 'blue',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'Reconstruct it in your own words',
      description:
        'This is the last step. Rebuild what you read in your own words and a flow diagram.',
      cta: 'Go to the next page',
      href: '/reconstruct-with-words-and-flow',
    },
  },
};
