import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type IconName =
  | 'fileText'
  | 'bookOpen'
  | 'fileClock'
  | 'tag'
  | 'history'
  | 'rotate'
  | 'gitPull'
  | 'package'
  | 'fileCode'
  | 'gitCommit'
  | 'box'
  | 'pencil'
  | 'shieldCheck';

export type ScenarioCard = {
  id: 'latest' | 'old' | 'reason';
  question: string;
  resultBadge: string;
  resultTone: ToneKey;
  flow: { label: string; sublabel?: string }[];
  tone: ToneKey;
  icon: IconName;
};

export type TimelineItem = {
  id: 'react16' | 'react17' | 'react18' | 'react19';
  version: string;
  description: string;
  tone: ToneKey;
};

export type TraceStep = {
  id: 'note' | 'pr' | 'package' | 'file';
  number: string;
  label: string;
  title: string;
  description: string;
  icon: IconName;
  tone: ToneKey;
};

export type ChangelogContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    version: string;
    versionBadge: string;
    releasesCard: {
      title: string;
      description: string;
      items: string[];
    };
    changelogCard: {
      title: string;
      description: string;
      items: string[];
    };
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    columnLabel: string;
    changelogLabel: string;
    releasesLabel: string;
    rows: { label: string; changelog: string; releases: string }[];
  };
  scenarios: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ScenarioCard[];
  };
  latest: {
    eyebrow: string;
    title: string;
    versionLabel: string;
    exampleBadge: string;
    version: string;
    versionBadge: string;
    meta: string;
    descriptionText: string;
    stats: { label: string; value: string; icon: IconName }[];
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    checklistTitle: string;
    checklistItems: string[];
    highlightsTitle: string;
    highlightsSubtitle: string;
    highlightsItems: { kind: string; text: string }[];
    linkText: string;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: TimelineItem[];
    banner: string;
  };
  trace: {
    eyebrow: string;
    title: string;
    description: string;
    steps: TraceStep[];
  };
  memo: {
    eyebrow: string;
    title: string;
    promptTitle: string;
    promptText: string;
    selectLabel: string;
    selectValue: string;
    selectOptions: string[];
    textareaLabel: string;
    textareaPlaceholder: string;
    textareaDefault: string;
    maxLength: number;
    tipTitle: string;
    tipText: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const changelogContent: Record<Locale, ChangelogContent> = {
  ko: {
    hero: {
      badge: '저장소 구조 · 9/10단계',
      title: {
        line1: 'React 내부 코드를 읽는다면,',
        line2: '그 코드가 어느 시점의 코드인지도',
        line3: '함께 봐야 합니다.',
      },
      description: '변경 기록을 모르면 오래된 강의와 최신 저장소를 섞어 읽게 됩니다.',
      version: 'v19.2.0',
      versionBadge: 'Latest',
      releasesCard: {
        title: 'Releases',
        description: '버전별 발표 노트',
        items: ['보안', '변경사항', '호환성'],
      },
      changelogCard: {
        title: 'CHANGELOG.md',
        description: '누적 변경 기록',
        items: ['19.x', '18.x', '17.x', '16.x'],
      },
    },
    comparison: {
      eyebrow: '01 · 역할 비교',
      title: 'CHANGELOG와 Releases 역할 비교',
      description: '두 자료의 차이를 한 표에 정리합니다.',
      columnLabel: '항목',
      changelogLabel: 'CHANGELOG',
      releasesLabel: 'Releases',
      rows: [
        {
          label: '목적',
          changelog: '누적 변경 기록을 통해 장기 흐름 파악',
          releases: '특정 버전의 변경을 명확히 확인',
        },
        {
          label: '시간 관점',
          changelog: '과거 → 현재까지 전체 흐름',
          releases: '버전 단위, 단일 릴리즈',
        },
        {
          label: '내용 성격',
          changelog: '여러 버전을 한 덩어리로 정리한 기록',
          releases: '해당 버전에서 바뀐 내용만 정리',
        },
        {
          label: '주요 사용 시점',
          changelog: '오래된 변화, 큰 흐름, 구조적 변화 이해할 때',
          releases: '최신 변경, 패치/마이너 이유, 업그레이드 영향 확인할 때',
        },
        {
          label: '파일 / 위치',
          changelog: '/CHANGELOG.md',
          releases: 'GitHub Releases (버전별 페이지)',
        },
      ],
    },
    scenarios: {
      eyebrow: '02 · 출처 선택',
      title: '이런 상황에는 무엇을 볼까?',
      description: '읽으려는 목적에 따라 어디를 먼저 볼지 정해보세요.',
      cards: [
        {
          id: 'latest',
          question: 'React 19 최신 패치에\n뭐가 바뀌었지?',
          resultBadge: '→ Releases',
          resultTone: 'violet',
          flow: [
            { label: 'Releases', sublabel: '(19.2.x)' },
            { label: 'Release note', sublabel: '핵심 변경 확인' },
            { label: '관련 PR / Issue' },
          ],
          tone: 'emerald',
          icon: 'tag',
        },
        {
          id: 'old',
          question: '오래된 React 16 시절\n변화는?',
          resultBadge: '→ CHANGELOG',
          resultTone: 'teal',
          flow: [
            { label: 'CHANGELOG.md', sublabel: '(16.x 섹션)' },
            { label: '흐름 파악', sublabel: '핵심 변화 이해' },
          ],
          tone: 'violet',
          icon: 'history',
        },
        {
          id: 'reason',
          question: '19.2.x 릴리즈가\n왜 나왔지?',
          resultBadge: '→ Releases + 관련 PR / 이슈',
          resultTone: 'blue',
          flow: [{ label: 'Releases' }, { label: 'PR / Issue' }, { label: '코드 변경 추적' }],
          tone: 'blue',
          icon: 'gitPull',
        },
      ],
    },
    latest: {
      eyebrow: '03 · 최신 릴리즈',
      title: '최신 릴리즈 확인 예시',
      versionLabel: '현재 버전 확인',
      exampleBadge: '예시',
      version: 'v19.2.0',
      versionBadge: 'Latest',
      meta: '게시일 · 경과 시간 표시',
      descriptionText: '개선, 버그 수정, 보안 수정이 포함된 최신 패치 릴리즈입니다.',
      stats: [
        { label: 'Commits', value: '1,284', icon: 'gitCommit' },
        { label: 'Packages', value: '5', icon: 'package' },
        { label: 'Assets', value: '12', icon: 'box' },
      ],
      primaryCta: 'Releases 페이지 열기',
      secondaryCta: 'v19.2.0 릴리즈 노트 열기',
      primaryHref: 'https://github.com/facebook/react/releases',
      secondaryHref: 'https://github.com/facebook/react/releases/tag/v19.2.0',
      checklistTitle: '릴리즈 노트에서 볼 것',
      checklistItems: [
        '보안 관련 변경',
        'Server Components 변경',
        '성능 개선',
        '호환성 영향',
        '폴리필 / 환경 요구사항 변경',
      ],
      highlightsTitle: 'v19.2.0',
      highlightsSubtitle: 'Release highlights',
      highlightsItems: [
        { kind: '보안', text: 'XSS 취약점 수정 (CVE-2024-XXXX)' },
        { kind: 'Server Components', text: 'use cache 개선 및 안정성 향상' },
        { kind: '성능', text: '렌더링 경로 최적화' },
        { kind: '호환성', text: 'Node.js 최소 버전 18.18 이상 권장' },
        { kind: '기타', text: '다양한 버그 수정' },
      ],
      linkText: '전체 변경사항 보기 →',
    },
    timeline: {
      eyebrow: '04 · 과거 흐름',
      title: '과거 흐름 확인 예시',
      description: '버전 사이의 큰 변화는 CHANGELOG를 따라가면 한눈에 들어옵니다.',
      items: [
        {
          id: 'react16',
          version: 'React 16 (2017)',
          description: 'Fiber 아키텍처 도입, 비동기 렌더링 기반 마련',
          tone: 'blue',
        },
        {
          id: 'react17',
          version: 'React 17 (2020)',
          description: '이벤트 위임 방식 변경, 점진적 업그레이드 지원',
          tone: 'indigo',
        },
        {
          id: 'react18',
          version: 'React 18 (2022)',
          description: '동시성 기능 도입, Suspense 개선, 자동 배치',
          tone: 'violet',
        },
        {
          id: 'react19',
          version: 'React 19 (2024)',
          description: 'Actions, 새 Hook, 성능/안정성 개선 지속',
          tone: 'teal',
        },
      ],
      banner: '장기적인 변화 흐름은 CHANGELOG 쪽이 더 보기 좋다.',
    },
    trace: {
      eyebrow: '05 · 변경점 추적',
      title: '변경점 → 코드 탐색 연결 흐름',
      description: '릴리즈 노트에서 시작해 실제 코드까지 내려가는 4단계 추적 루틴입니다.',
      steps: [
        {
          id: 'note',
          number: '1',
          label: 'Step 1',
          title: '릴리즈에서 변경점 확인',
          description: 'Releases 노트에서 핵심 변경사항 읽기',
          icon: 'fileText',
          tone: 'violet',
        },
        {
          id: 'pr',
          number: '2',
          label: 'Step 2',
          title: '관련 PR / Issue 찾기',
          description: 'Release note 링크 또는 키워드로 PR / Issue 이동',
          icon: 'gitPull',
          tone: 'indigo',
        },
        {
          id: 'package',
          number: '3',
          label: 'Step 3',
          title: '연관 패키지 위치 확인',
          description: '변경된 영역이 어느 패키지에 속하는지 파악',
          icon: 'package',
          tone: 'blue',
        },
        {
          id: 'file',
          number: '4',
          label: 'Step 4',
          title: '코드 변경 파일 열기',
          description: 'PR diff 또는 GitHub 파일에서 실제 코드 확인',
          icon: 'fileCode',
          tone: 'teal',
        },
      ],
    },
    memo: {
      eyebrow: '06 · 버전 메모',
      title: '버전 메모 남기기',
      promptTitle: 'Note',
      promptText: '이 코드 설명은\n어느 버전을 기준으로\n읽었는가?',
      selectLabel: '기준 버전 선택',
      selectValue: 'React 19.2.x',
      selectOptions: [
        'React 19.2.x',
        'React 19.1.x',
        'React 19.0.x',
        'React 18.3.x',
        'React 18.2.x',
        'React 17.0.x',
        'React 16.x',
      ],
      textareaLabel: '메모',
      textareaPlaceholder: '여기에 버전 관련 메모를 적어두세요.',
      textareaDefault:
        '이 강의는 18.2.0 기준이라 scheduleWork 관련 표현이 현재 코드와 다를 수 있음.',
      maxLength: 200,
      tipTitle: 'TIP',
      tipText: '버전 정보를 함께 남기면 나중에 다시 읽을 때 맥락을 잃지 않습니다.',
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '저장소 구조와 버전 맥락까지 읽을 수 있게 되었다면,',
      description: '마지막으로 전체 ' + '탐색 루틴' + '을 하나의 실전 순서로 정리합니다.',
      cta: '다음 페이지로 이동',
      href: '/exploration-order',
    },
  },
  en: {
    hero: {
      badge: 'Repo Structure · 9/10',
      title: {
        line1: 'When you read React internals,',
        line2: 'you also need to know which version',
        line3: 'the code belongs to.',
      },
      description:
        'Without change history, you mix old tutorials with the latest repo as if they were the same.',
      version: 'v19.2.0',
      versionBadge: 'Latest',
      releasesCard: {
        title: 'Releases',
        description: 'Per-version announcement notes',
        items: ['Security', 'Changes', 'Compatibility'],
      },
      changelogCard: {
        title: 'CHANGELOG.md',
        description: 'Accumulated change log',
        items: ['19.x', '18.x', '17.x', '16.x'],
      },
    },
    comparison: {
      eyebrow: '01 · ROLE COMPARISON',
      title: 'CHANGELOG vs Releases role comparison',
      description: 'A single table that summarises the difference between the two.',
      columnLabel: 'Aspect',
      changelogLabel: 'CHANGELOG',
      releasesLabel: 'Releases',
      rows: [
        {
          label: 'Purpose',
          changelog: 'Trace long-term flow through an accumulated change log',
          releases: 'Clearly check what changed in a specific version',
        },
        {
          label: 'Time view',
          changelog: 'Entire flow from past to present',
          releases: 'Per version, a single release',
        },
        {
          label: 'Content style',
          changelog: 'Multiple versions consolidated into one record',
          releases: 'Only what changed in that version',
        },
        {
          label: 'When to use',
          changelog: 'Older changes, large flows, structural shifts',
          releases: 'Recent changes, patch / minor reasons, upgrade impact',
        },
        {
          label: 'File / location',
          changelog: '/CHANGELOG.md',
          releases: 'GitHub Releases (per-version page)',
        },
      ],
    },
    scenarios: {
      eyebrow: '02 · PICK SOURCE',
      title: 'Which source do you read?',
      description: 'Different reading goals call for different starting points.',
      cards: [
        {
          id: 'latest',
          question: 'What changed in the\nlatest React 19 patch?',
          resultBadge: '→ Releases',
          resultTone: 'violet',
          flow: [
            { label: 'Releases', sublabel: '(19.2.x)' },
            { label: 'Release note', sublabel: 'core changes' },
            { label: 'Related PR / Issue' },
          ],
          tone: 'emerald',
          icon: 'tag',
        },
        {
          id: 'old',
          question: 'What was changing\nback in React 16?',
          resultBadge: '→ CHANGELOG',
          resultTone: 'teal',
          flow: [
            { label: 'CHANGELOG.md', sublabel: '(16.x section)' },
            { label: 'Trace the flow', sublabel: 'understand key changes' },
          ],
          tone: 'violet',
          icon: 'history',
        },
        {
          id: 'reason',
          question: 'Why did the\n19.2.x release happen?',
          resultBadge: '→ Releases + PR / Issue',
          resultTone: 'blue',
          flow: [{ label: 'Releases' }, { label: 'PR / Issue' }, { label: 'Trace code changes' }],
          tone: 'blue',
          icon: 'gitPull',
        },
      ],
    },
    latest: {
      eyebrow: '03 · LATEST RELEASE',
      title: 'Latest release example',
      versionLabel: 'Current version',
      exampleBadge: 'Example',
      version: 'v19.2.0',
      versionBadge: 'Latest',
      meta: 'Published date · time since release',
      descriptionText: 'A patch release including improvements, bug fixes and security fixes.',
      stats: [
        { label: 'Commits', value: '1,284', icon: 'gitCommit' },
        { label: 'Packages', value: '5', icon: 'package' },
        { label: 'Assets', value: '12', icon: 'box' },
      ],
      primaryCta: 'Open Releases page',
      secondaryCta: 'Open v19.2.0 release notes',
      primaryHref: 'https://github.com/facebook/react/releases',
      secondaryHref: 'https://github.com/facebook/react/releases/tag/v19.2.0',
      checklistTitle: 'What to look for in release notes',
      checklistItems: [
        'Security-related changes',
        'Server Components changes',
        'Performance improvements',
        'Compatibility impact',
        'Polyfill / environment requirement changes',
      ],
      highlightsTitle: 'v19.2.0',
      highlightsSubtitle: 'Release highlights',
      highlightsItems: [
        { kind: 'Security', text: 'XSS vulnerability fix (CVE-2024-XXXX)' },
        { kind: 'Server Components', text: 'use cache improvements + stability' },
        { kind: 'Performance', text: 'Render path optimisations' },
        { kind: 'Compatibility', text: 'Node.js >= 18.18 recommended' },
        { kind: 'Misc', text: 'Various bug fixes' },
      ],
      linkText: 'View all changes →',
    },
    timeline: {
      eyebrow: '04 · LONG-TERM FLOW',
      title: 'Past flow example',
      description: 'Big shifts between versions are easy to scan in CHANGELOG.',
      items: [
        {
          id: 'react16',
          version: 'React 16 (2017)',
          description: 'Fiber architecture introduced, async rendering groundwork',
          tone: 'blue',
        },
        {
          id: 'react17',
          version: 'React 17 (2020)',
          description: 'Event delegation change, gradual upgrade support',
          tone: 'indigo',
        },
        {
          id: 'react18',
          version: 'React 18 (2022)',
          description: 'Concurrent features, Suspense improvements, auto batching',
          tone: 'violet',
        },
        {
          id: 'react19',
          version: 'React 19 (2024)',
          description: 'Actions, new hooks, ongoing perf / stability work',
          tone: 'teal',
        },
      ],
      banner: 'CHANGELOG is the right place to read long-term change flow.',
    },
    trace: {
      eyebrow: '05 · TRACE CHANGES',
      title: 'From changes to code: a 4-step trace',
      description: 'Start from release notes and walk down to actual code in four steps.',
      steps: [
        {
          id: 'note',
          number: '1',
          label: 'Step 1',
          title: 'Check changes in the release',
          description: 'Read the core changes in the Releases note.',
          icon: 'fileText',
          tone: 'violet',
        },
        {
          id: 'pr',
          number: '2',
          label: 'Step 2',
          title: 'Find related PR / Issue',
          description: 'Use release note links or keywords to reach the PR / Issue.',
          icon: 'gitPull',
          tone: 'indigo',
        },
        {
          id: 'package',
          number: '3',
          label: 'Step 3',
          title: 'Locate the related package',
          description: 'Find which package the changed area belongs to.',
          icon: 'package',
          tone: 'blue',
        },
        {
          id: 'file',
          number: '4',
          label: 'Step 4',
          title: 'Open the changed code',
          description: 'Inspect the actual code in the PR diff or GitHub file.',
          icon: 'fileCode',
          tone: 'teal',
        },
      ],
    },
    memo: {
      eyebrow: '06 · VERSION MEMO',
      title: 'Leave a version memo',
      promptTitle: 'Note',
      promptText: 'Which version is this\ncode explanation based on?',
      selectLabel: 'Pick a baseline version',
      selectValue: 'React 19.2.x',
      selectOptions: [
        'React 19.2.x',
        'React 19.1.x',
        'React 19.0.x',
        'React 18.3.x',
        'React 18.2.x',
        'React 17.0.x',
        'React 16.x',
      ],
      textareaLabel: 'Memo',
      textareaPlaceholder: 'Write your version-related memo here.',
      textareaDefault:
        'This tutorial is based on 18.2.0, so scheduleWork wording may differ from the current code.',
      maxLength: 200,
      tipTitle: 'TIP',
      tipText: 'Recording the baseline version keeps the context intact when you revisit later.',
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: 'With repo structure and version context behind you,',
      description:
        'finally turn the full ' + 'exploration order' + ' into a single practical sequence.',
      cta: 'Go to the next page',
      href: '/exploration-order',
    },
  },
};
