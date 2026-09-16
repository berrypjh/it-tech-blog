import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type ExpansionId = 'cache' | 'ppr' | 'batching' | 'tracks';

export type HeroAxis = {
  id: ExpansionId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type ExpansionCard = {
  id: ExpansionId;
  title: string;
  description: string;
  badge: string;
  tone: ToneKey;
};

export type RoutineStepId = 'intent' | 'scope' | 'pin' | 'trace' | 'place';

export type RoutineStep = {
  id: RoutineStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type VersionRow = {
  version: string;
  focus: string;
  watch: string;
};

export type React192ReadingMethodContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    axes: HeroAxis[];
  };
  expansions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ExpansionCard[];
    note: string;
  };
  resume: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    once: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    split: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  routine: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RoutineStep[];
    note: string;
  };
  versions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: VersionRow[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  finale: FinaleBannerContent;
};

const KO_CODE = `# CHANGELOG.md - 다음 버전을 읽을 때의 출발점

## 19.2.0

### React
- Added \`cacheSignal\`
- Added \`useEffectEvent\`
- Added \`<Activity />\`

### React DOM
- Added Partial Pre-rendering (\`prerender\` + \`resume\`)

## 19.1.0
...

# 버전 헤딩 → 패키지별 섹션 → 항목 순서로 적혀 있다.
# 항목 이름을 외우지 말고, 어느 패키지 섹션 아래에 있는지부터 본다.
# 그것이 이 챕터에서 쓴 여섯 축 중 어디인지를 알려 준다.`;

const EN_CODE = `# CHANGELOG.md - where reading the next version starts

## 19.2.0

### React
- Added \`cacheSignal\`
- Added \`useEffectEvent\`
- Added \`<Activity />\`

### React DOM
- Added Partial Pre-rendering (\`prerender\` + \`resume\`)

## 19.1.0
...

# The shape is: version heading, then a section per package, then entries.
# Do not memorize entry names; look at which package section they sit under.
# That tells you which of this chapter's six axes they belong to.`;

const CHANGELOG_HREF = 'https://github.com/facebook/react/blob/main/CHANGELOG.md';

const ko: React192ReadingMethodContent = {
  hero: {
    badge: 'React 19 변화 · 10/10단계',
    title: { line1: '다음 릴리스는 아무도', line2: '이렇게 정리해 주지 않는다' },
    description:
      '이 챕터의 진짜 결과물은 아홉 개의 기능 설명이 아니라, 새 기능을 여섯 축 위에 스스로 올리는 습관입니다.',
    diagramBadge: '19.2 axes',
    diagramCaption: 'what the last release actually widened',
    axes: [
      { id: 'cache', label: 'cacheSignal', caption: '캐시의 수명이 신호가 된다', tone: 'teal' },
      {
        id: 'ppr',
        label: 'Partial Pre-rendering',
        caption: '렌더를 멈췄다 이어서 한다',
        tone: 'emerald',
      },
      {
        id: 'batching',
        label: 'SSR Suspense batching',
        caption: 'reveal 타이밍을 모아 조율한다',
        tone: 'violet',
      },
      {
        id: 'tracks',
        label: 'Performance Tracks',
        caption: '내부 동작을 관측 가능하게 만든다',
        tone: 'indigo',
      },
    ],
  },
  expansions: {
    badge: '01',
    eyebrow: 'four expansions',
    title: '19.2가 넓힌 네 곳',
    description:
      '새 모델을 만들지 않았습니다. 19.0에서 세운 모델의 수명·타이밍·관측 가능성을 다듬었습니다.',
    cards: [
      {
        id: 'cache',
        title: '캐시에 수명이 생겼다',
        description:
          'cache된 작업이 언제 버려지는지를 AbortSignal로 알려 줍니다. 취소와 정리를 붙일 수 있습니다.',
        badge: 'cacheSignal',
        tone: 'teal',
      },
      {
        id: 'ppr',
        title: '렌더를 중간에 멈춰 둔다',
        description:
          '정적 shell을 먼저 만들어 두고, 남은 부분은 postponed state로 보관했다가 요청 때 이어서 합니다.',
        badge: 'prerender / resume',
        tone: 'emerald',
      },
      {
        id: 'batching',
        title: 'reveal 타이밍을 모은다',
        description:
          '여러 Suspense 경계가 거의 동시에 풀리면 짧게 묶어 한 번에 보여 줍니다. 깜빡임이 줄어듭니다.',
        badge: 'SSR batching',
        tone: 'violet',
      },
      {
        id: 'tracks',
        title: '내부가 보이기 시작했다',
        description:
          '컴포넌트 렌더와 Suspense reveal 같은 내부 이벤트를 브라우저 성능 패널에서 볼 수 있습니다.',
        badge: 'Performance Tracks',
        tone: 'indigo',
      },
    ],
    note: '네 가지 모두 앞 아홉 페이지의 축 위에 얹힙니다. 새 축이 아니라 기존 축이 한 칸 더 늘어난 것입니다.',
  },
  resume: {
    badge: '02',
    eyebrow: 'render in two parts',
    title: '서버 렌더를 한 번에 끝내지 않아도 된다면',
    description:
      'Partial Pre-rendering은 렌더를 나눌 수 있게 만든 것입니다. Suspense가 클라이언트에서 한 일을 서버 시간 축에서 합니다.',
    once: {
      title: '한 번에 끝내는 렌더',
      badge: '기존 SSR',
      description: '요청이 오면 그때부터 전부 렌더합니다. 느린 데이터 하나가 전체를 붙잡습니다.',
      bullets: [
        '정적인 부분도 매 요청마다 다시 만든다',
        '느린 데이터가 끝날 때까지 첫 바이트가 늦어진다',
        '캐시하려면 페이지 단위로 통째로 해야 한다',
        '정적과 동적을 한 페이지에 섞기 어렵다',
      ],
    },
    bridge: {
      headline: '렌더를 멈춘 지점을\n저장해 두었다가 잇는다',
      sub: 'postponed state가 있으면 같은 렌더를 처음부터 다시 하지 않아도 됩니다.',
    },
    split: {
      title: '나눠서 이어 하는 렌더',
      badge: 'PPR',
      description: '정적 shell은 미리 만들어 두고, 나머지는 요청 시점에 이어서 스트리밍합니다.',
      bullets: [
        'prerender가 shell과 postponed state를 함께 만든다',
        'shell은 CDN에 두고 즉시 응답할 수 있다',
        'resume이 저장된 지점부터 남은 트리를 이어 렌더한다',
        '같은 페이지 안에서 정적과 동적이 공존한다',
      ],
    },
    note: '이 모델은 13챕터의 Suspense와 같은 아이디어입니다. 다른 점은 멈춤과 재개가 서버 렌더 시간 축에서 일어난다는 것뿐입니다.',
  },
  routine: {
    badge: '03',
    eyebrow: 'do it yourself',
    title: '다음 릴리스를 스스로 읽는 다섯 칸',
    description:
      '이 챕터가 한 일을 그대로 반복하는 절차입니다. 순서를 지키면 기능 목록이 지도 위 위치로 바뀝니다.',
    steps: [
      {
        id: 'intent',
        num: '01',
        title: '왜 넣었는지부터 읽는다',
        description:
          '공식 블로그는 무엇이 추가됐는지보다 무엇이 불편했는지를 먼저 씁니다. 그 문장이 축을 알려 줍니다.',
        tone: 'blue',
      },
      {
        id: 'scope',
        num: '02',
        title: '어느 패키지가 움직였는지 본다',
        description:
          'CHANGELOG는 패키지별로 나뉘어 있습니다. react인지 react-dom인지가 이미 절반의 답입니다.',
        tone: 'cyan',
      },
      {
        id: 'pin',
        num: '03',
        title: '태그를 고정한다',
        description:
          '읽을 버전의 tag를 정해 두고 시작합니다. main을 그냥 읽으면 아직 안 나온 코드를 보게 됩니다.',
        tone: 'indigo',
      },
      {
        id: 'trace',
        num: '04',
        title: '바뀐 파일을 따라간다',
        description:
          '두 태그 사이 diff에서 파일 이름만 훑어도 충분합니다. 이 챕터가 쓴 파일들이 다시 등장합니다.',
        tone: 'teal',
      },
      {
        id: 'place',
        num: '05',
        title: '여섯 축 중 어디인지 적는다',
        description:
          '업데이트·렌더링·Element·DOM 자원·서버 경계·우선순위 중 하나에 놓습니다. 여기까지 해야 남습니다.',
        tone: 'emerald',
      },
    ],
    note: '05를 건너뛰면 다시 목록이 됩니다. 한 줄이라도 좋으니 "어느 축인가"를 적는 것이 이 챕터의 결론입니다.',
  },
  versions: {
    badge: '04',
    eyebrow: 'three versions',
    title: '세 버전이 각각 무엇을 다뤘나',
    description:
      '앞으로 릴리스 노트를 볼 때도 이 표의 마지막 열처럼 "무엇을 볼까"를 먼저 정합니다.',
    headers: ['버전', '다룬 층위', '무엇을 봐야 하나'],
    rows: [
      {
        version: '19.0',
        focus: '기본 모델과 표현의 정리',
        watch: '공개 API와 컴포넌트 모델 - 이 챕터 2~7페이지',
      },
      {
        version: '19.2',
        focus: '수명·타이밍·관측 가능성의 확장',
        watch: '서버 렌더와 우선순위 - 이 챕터 8~10페이지',
      },
      {
        version: '19.2.6',
        focus: '호환성과 안정성 수정',
        watch: '이 챕터가 코드를 읽은 기준 태그',
      },
    ],
    note: '패치 버전은 축을 움직이지 않습니다. 그래서 기준점으로 삼기에 좋습니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '다음 버전을 읽을 때 가장 먼저 열 파일',
    fileLabel: '파일',
    filePath: 'CHANGELOG.md',
    lookForLabel: '볼 것',
    lookFor: '## 19.2.0',
    whyLabel: '설명',
    why: '패키지별 섹션 구조가 그대로 축의 힌트입니다. 항목이 react 아래인지 react-dom 아래인지가 어느 축인지를 절반쯤 알려 줍니다.',
    code: KO_CODE,
    primaryCta: 'CHANGELOG.md 보기',
    primaryHref: CHANGELOG_HREF,
  },
  finale: {
    progressLabel: '14/14 챕터 완료',
    copyLine1: 'React 19의 변화를',
    copyLine2: '목록이 아니라 지도로 읽었습니다.',
    copyLine3: '여기까지가 모든 챕터입니다. 이제 스스로 소스를 읽어 보세요.',
    primaryCta: '처음부터 다시 깊게 읽기',
    primaryHref: '/why-source',
    secondaryCta: 'React 19 챕터 처음부터 다시 보기',
    secondaryHref: '/react-19-change-map',
  },
};

const en: React192ReadingMethodContent = {
  hero: {
    badge: 'React 19 Changes · 10/10',
    title: { line1: 'Nobody will lay out', line2: 'the next release like this' },
    description:
      'What this chapter really leaves you is not nine feature explanations but the habit of placing a new feature on six axes yourself.',
    diagramBadge: '19.2 axes',
    diagramCaption: 'what the last release actually widened',
    axes: [
      {
        id: 'cache',
        label: 'cacheSignal',
        caption: 'a cache lifetime becomes a signal',
        tone: 'teal',
      },
      {
        id: 'ppr',
        label: 'Partial Pre-rendering',
        caption: 'a render can pause and resume',
        tone: 'emerald',
      },
      {
        id: 'batching',
        label: 'SSR Suspense batching',
        caption: 'reveal timing is gathered up',
        tone: 'violet',
      },
      {
        id: 'tracks',
        label: 'Performance Tracks',
        caption: 'internal work became observable',
        tone: 'indigo',
      },
    ],
  },
  expansions: {
    badge: '01',
    eyebrow: 'four expansions',
    title: 'The four places 19.2 widened',
    description:
      'No new model was built. It sharpened the lifetime, timing and observability of the models 19.0 set up.',
    cards: [
      {
        id: 'cache',
        title: 'Caches gained a lifetime',
        description:
          'An AbortSignal tells you when cached work is discarded, so cancellation and cleanup can hook in.',
        badge: 'cacheSignal',
        tone: 'teal',
      },
      {
        id: 'ppr',
        title: 'A render can stop midway',
        description:
          'Build the static shell first and keep the rest as postponed state, resuming it on request.',
        badge: 'prerender / resume',
        tone: 'emerald',
      },
      {
        id: 'batching',
        title: 'Reveal timing is gathered',
        description:
          'Boundaries resolving at nearly the same time are shown together, which cuts flicker.',
        badge: 'SSR batching',
        tone: 'violet',
      },
      {
        id: 'tracks',
        title: 'The inside became visible',
        description:
          'Component renders and Suspense reveals show up in the browser performance panel.',
        badge: 'Performance Tracks',
        tone: 'indigo',
      },
    ],
    note: 'All four land on axes from the previous nine pages. Not new axes, just existing ones pushed a notch further.',
  },
  resume: {
    badge: '02',
    eyebrow: 'render in two parts',
    title: 'What if a server render need not finish in one go',
    description:
      'Partial Pre-rendering makes a render divisible. It does on the server timeline what Suspense did on the client.',
    once: {
      title: 'Rendering it all at once',
      badge: 'classic SSR',
      description:
        'Everything renders from the moment a request arrives, and one slow query holds up the whole page.',
      bullets: [
        'Even the static parts are rebuilt on every request',
        'Time to first byte waits on the slowest data',
        'Caching has to happen at whole-page granularity',
        'Mixing static and dynamic on one page is awkward',
      ],
    },
    bridge: {
      headline: 'Save where the render stopped\nand continue from there',
      sub: 'With postponed state, the same render never has to start over from the beginning.',
    },
    split: {
      title: 'Rendering in two parts',
      badge: 'PPR',
      description: 'The static shell is built ahead; the rest streams on from request time.',
      bullets: [
        'prerender produces the shell and the postponed state together',
        'The shell can sit on a CDN and answer immediately',
        'resume continues the remaining tree from the saved point',
        'Static and dynamic coexist inside one page',
      ],
    },
    note: 'This is the same idea as Suspense in chapter 13. The only difference is that the pause and resume happen on the server render timeline.',
  },
  routine: {
    badge: '03',
    eyebrow: 'do it yourself',
    title: 'Five slots for reading the next release yourself',
    description:
      'This is the procedure this chapter followed. Keep the order and a feature list turns into positions on a map.',
    steps: [
      {
        id: 'intent',
        num: '01',
        title: 'Start with why it was added',
        description:
          'The official blog says what was uncomfortable before it says what was added. That sentence names the axis.',
        tone: 'blue',
      },
      {
        id: 'scope',
        num: '02',
        title: 'See which package moved',
        description:
          'The changelog is split by package. Whether it is react or react-dom is already half the answer.',
        tone: 'cyan',
      },
      {
        id: 'pin',
        num: '03',
        title: 'Pin a tag',
        description:
          'Decide the version tag before reading. Reading main shows you code that has not shipped.',
        tone: 'indigo',
      },
      {
        id: 'trace',
        num: '04',
        title: 'Follow the changed files',
        description:
          'Skimming file names in the diff between two tags is enough. The files from this chapter reappear.',
        tone: 'teal',
      },
      {
        id: 'place',
        num: '05',
        title: 'Write down which of the six axes it is',
        description:
          'Update, render, Element, DOM resources, server boundary or priority. Only this step makes it stick.',
        tone: 'emerald',
      },
    ],
    note: 'Skip 05 and it becomes a list again. Writing down the axis, even in one line, is the conclusion of this chapter.',
  },
  versions: {
    badge: '04',
    eyebrow: 'three versions',
    title: 'What each of the three versions dealt with',
    description:
      'From now on, decide what to look at first, the way the last column of this table does.',
    headers: ['Version', 'Layer it touched', 'What to look at'],
    rows: [
      {
        version: '19.0',
        focus: 'Cleaning up the base models and shapes',
        watch: 'Public API and the component model - pages 2 to 7 here',
      },
      {
        version: '19.2',
        focus: 'Widening lifetime, timing and observability',
        watch: 'Server rendering and priority - pages 8 to 10 here',
      },
      {
        version: '19.2.6',
        focus: 'Compatibility and stability fixes',
        watch: 'The tag this chapter read the code from',
      },
    ],
    note: 'Patch versions do not move the axes, which is exactly what makes them good baselines.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'The first file to open for the next version',
    fileLabel: 'File',
    filePath: 'CHANGELOG.md',
    lookForLabel: 'Look for',
    lookFor: '## 19.2.0',
    whyLabel: 'Why',
    why: 'The per-package section structure is itself a hint about the axis. Whether an entry sits under react or react-dom answers half the question.',
    code: EN_CODE,
    primaryCta: 'View CHANGELOG.md',
    primaryHref: CHANGELOG_HREF,
  },
  finale: {
    progressLabel: 'Chapter 14 of 14 complete',
    copyLine1: 'You read the React 19 changes',
    copyLine2: 'as a map rather than a list.',
    copyLine3: 'That is every chapter. Now go read the source yourself.',
    primaryCta: 'Start over and read deeper',
    primaryHref: '/why-source',
    secondaryCta: 'Restart the React 19 chapter',
    secondaryHref: '/react-19-change-map',
  },
};

export const react192ReadingMethodContent: Record<Locale, React192ReadingMethodContent> = {
  ko,
  en,
};
