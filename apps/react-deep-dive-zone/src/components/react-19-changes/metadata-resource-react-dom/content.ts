import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'declare' | 'detect' | 'hoist' | 'dedupe';

export type HeroStage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type HoistStep = {
  id: StageId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ResourceId = 'title' | 'meta' | 'link' | 'script' | 'style';

export type ResourceCard = {
  id: ResourceId;
  tag: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type RuleRow = {
  tag: string;
  lands: string;
  rule: string;
};

export type MetadataResourceContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: HeroStage[];
  };
  before: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    outside: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    inside: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  resources: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ResourceCard[];
    note: string;
  };
  hoisting: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: HoistStep[];
    note: string;
  };
  rules: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: RuleRow[];
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const KO_CODE = `// packages/react-reconciler/src/ReactFiberBeginWork.js
case HostHoistable:
  if (supportsResources) {
    return updateHostHoistable(current, workInProgress, renderLanes);
  }
  // 리소스를 지원하지 않는 호스트에서는 평범한 HostComponent로 떨어진다

function updateHostHoistable(current, workInProgress, renderLanes) {
  markRef(current, workInProgress);

  const currentProps = current === null ? null : current.memoizedProps;
  const resource = (workInProgress.memoizedState = getResource(
    workInProgress.type,       // 'title' | 'meta' | 'link' | ...
    currentProps,
    workInProgress.pendingProps,
  ));

  // 자식을 만들지 않는다 - 이 Fiber는 문서의 한 자리를 가리킬 뿐이다
  return null;
}`;

const EN_CODE = `// packages/react-reconciler/src/ReactFiberBeginWork.js
case HostHoistable:
  if (supportsResources) {
    return updateHostHoistable(current, workInProgress, renderLanes);
  }
  // on a host without resource support this falls through to HostComponent

function updateHostHoistable(current, workInProgress, renderLanes) {
  markRef(current, workInProgress);

  const currentProps = current === null ? null : current.memoizedProps;
  const resource = (workInProgress.memoizedState = getResource(
    workInProgress.type,       // 'title' | 'meta' | 'link' | ...
    currentProps,
    workInProgress.pendingProps,
  ));

  // no children are created - this Fiber only points at a slot in the document
  return null;
}`;

const BEGIN_WORK_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js';

const ko: MetadataResourceContent = {
  hero: {
    badge: 'React 19 변화 · 6/10단계',
    title: { line1: '<title>을 컴포넌트 안에 쓰면', line2: 'Fiber의 종류부터 달라진다' },
    description:
      '단순히 head로 옮겨 주는 편의가 아닙니다. 문서 자원이 WorkTag를 하나 더 가지면서 조정 대상이 됐습니다.',
    diagramBadge: 'hoistable',
    diagramCaption: 'declared in the tree, placed in the head',
    stages: [
      { id: 'declare', label: '선언', caption: '컴포넌트 안에 그냥 쓴다', tone: 'cyan' },
      { id: 'detect', label: '판정', caption: 'HostHoistable로 분류된다', tone: 'indigo' },
      { id: 'hoist', label: '이동', caption: 'head의 제자리에 붙는다', tone: 'teal' },
      { id: 'dedupe', label: '정리', caption: '중복을 합치고 순서를 정한다', tone: 'emerald' },
    ],
  },
  before: {
    badge: '01',
    eyebrow: 'who owns the head',
    title: 'head는 원래 컴포넌트 모델 바깥에 있었다',
    description:
      '문제는 문법이 아니라 소유권이었습니다. head를 누가 관리하느냐가 React 19에서 바뀌었습니다.',
    outside: {
      title: '트리 밖에서 관리하던 시절',
      badge: 'React 18',
      description:
        'head는 React가 모르는 영역이라, 별도 라이브러리가 부수 효과로 밀어 넣어야 했습니다.',
      bullets: [
        '라우트가 바뀔 때마다 title을 직접 갈아 끼워야 했다',
        'meta 태그는 별도 라이브러리의 컨텍스트 안에서만 유효했다',
        '언제 head에 넣을지 타이밍을 직접 잡아 깜빡임과 중복이 생겼다',
        '서버와 클라이언트가 head를 따로 구성해 결과가 어긋나기 쉬웠다',
      ],
    },
    bridge: {
      headline: '문서 자원도\n트리의 일부로 본다',
      sub: '선언 위치와 배치 위치를 분리하면, head도 평범한 컴포넌트 문법으로 다룰 수 있습니다.',
    },
    inside: {
      title: '트리 안으로 들어온 뒤',
      badge: 'React 19',
      description: '컴포넌트 어디서든 선언하면 react-dom이 알아서 head의 제자리에 놓습니다.',
      bullets: [
        '<title>을 렌더하는 컴포넌트가 곧 그 페이지의 제목 주인이 된다',
        '조건부 렌더와 언마운트가 그대로 head에 반영된다',
        'SSR에서도 같은 코드가 같은 head를 만든다',
        'stylesheet는 precedence로 순서를 선언적으로 정한다',
      ],
    },
    note: '핵심은 "head에 넣어 준다"가 아니라 "head 자원이 Fiber의 수명 관리를 받는다"는 점입니다.',
  },
  resources: {
    badge: '02',
    eyebrow: 'five resources',
    title: '같아 보이지만 책임이 다른 다섯 태그',
    description: '전부 DOM 요소처럼 보이지만 react-dom은 각각을 다른 종류의 자원으로 다룹니다.',
    cards: [
      {
        id: 'title',
        tag: '<title>',
        title: '문서 제목',
        description: '문서에 하나만 있어야 하므로 가장 마지막에 렌더된 것이 이깁니다.',
        tone: 'indigo',
      },
      {
        id: 'meta',
        tag: '<meta>',
        title: '문서 메타데이터',
        description: '여러 개가 공존합니다. SEO·viewport·인코딩이 모두 여기에 들어옵니다.',
        tone: 'cyan',
      },
      {
        id: 'link',
        tag: '<link>',
        title: '외부 리소스 연결',
        description: 'stylesheet는 precedence로 순서를, preload는 로딩 우선순위를 선언합니다.',
        tone: 'teal',
      },
      {
        id: 'script',
        tag: '<script>',
        title: '스크립트 자원',
        description: 'async 스크립트는 같은 src면 한 번만 로드되도록 합쳐집니다.',
        tone: 'violet',
      },
      {
        id: 'style',
        tag: '<style>',
        title: '스타일 자원',
        description: 'href와 precedence를 주면 중복이 제거되고 순서가 보장됩니다.',
        tone: 'blue',
      },
    ],
    note: '메타데이터와 리소스는 구분해야 합니다. 앞의 둘은 정보고, 뒤의 셋은 로딩 순서와 중복 제거에 관여합니다.',
  },
  hoisting: {
    badge: '03',
    eyebrow: 'hoisting',
    title: '선언에서 배치까지 네 칸',
    description:
      '이 네 칸이 hoisting의 전부입니다. 중간에 부수 효과로 DOM을 만지는 구간이 없습니다.',
    steps: [
      {
        id: 'declare',
        num: '01',
        title: '트리 어디서든 선언한다',
        description:
          '깊은 컴포넌트 안이어도 상관없습니다. 위치가 아니라 선언 자체가 의미를 가집니다.',
        tone: 'cyan',
      },
      {
        id: 'detect',
        num: '02',
        title: 'HostHoistable로 분류한다',
        description:
          'type과 props를 보고 hoist 대상인지 판단합니다. 여기서 Fiber의 tag 자체가 달라집니다.',
        tone: 'indigo',
      },
      {
        id: 'hoist',
        num: '03',
        title: 'head의 제자리에 붙인다',
        description:
          '자식을 만들지 않고, 대신 문서의 한 자리를 가리키는 resource를 memoizedState에 담습니다.',
        tone: 'teal',
      },
      {
        id: 'dedupe',
        num: '04',
        title: '중복을 합치고 순서를 정한다',
        description:
          '같은 자원이 여러 번 선언되면 하나로 합치고, precedence가 있으면 그 순서를 지킵니다.',
        tone: 'emerald',
      },
    ],
    note: '02가 이 변화의 핵심입니다. 문서 자원이 별도 WorkTag를 가지면서 마운트·언마운트 규칙을 그대로 적용받습니다.',
  },
  rules: {
    badge: '04',
    eyebrow: 'placement rules',
    title: '무엇이 어디로 가고, 겹치면 어떻게 되는가',
    description: '같은 hoisting이라도 태그마다 규칙이 다릅니다. 실제로 헷갈리는 네 가지입니다.',
    headers: ['선언', '최종 위치', '겹쳤을 때'],
    rows: [
      {
        tag: '<title>',
        lands: 'head의 title 자리',
        rule: '문서에 하나만 남고 나중에 렌더된 것이 이긴다',
      },
      {
        tag: '<meta name="...">',
        lands: 'head 안',
        rule: '합치지 않는다. 선언한 만큼 그대로 들어간다',
      },
      {
        tag: '<link rel="stylesheet" precedence>',
        lands: 'head 안의 precedence 그룹',
        rule: '같은 href는 하나로 합치고 precedence 순서로 정렬한다',
      },
      {
        tag: '<script async src>',
        lands: 'head 안',
        rule: '같은 src는 한 번만 로드되도록 합친다',
      },
    ],
    note: 'precedence가 없는 stylesheet는 hoist되지 않습니다. 선언적 순서 보장을 원한다면 반드시 붙여야 합니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '문서 자원이 별도 Fiber가 되는 자리',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: '볼 것',
    lookFor: 'case HostHoistable:',
    whyLabel: '설명',
    why: '이 case가 있다는 사실 자체가 변화의 크기를 말해 줍니다. 편의 기능이라면 WorkTag를 새로 만들 이유가 없습니다.',
    code: KO_CODE,
    primaryCta: 'ReactFiberBeginWork.js 소스 보기',
    primaryHref: BEGIN_WORK_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'use client와 use server는 무엇을 나누는 선일까',
    description: 'DOM 자원 축을 마치고 서버 경계 축으로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/server-components-contract',
  },
};

const en: MetadataResourceContent = {
  hero: {
    badge: 'React 19 Changes · 6/10',
    title: { line1: 'Put <title> inside a component', line2: 'and the Fiber kind changes' },
    description:
      'This is not a convenience that moves tags to the head. Document resources gained a WorkTag and became something React reconciles.',
    diagramBadge: 'hoistable',
    diagramCaption: 'declared in the tree, placed in the head',
    stages: [
      { id: 'declare', label: 'declare', caption: 'write it inside a component', tone: 'cyan' },
      { id: 'detect', label: 'detect', caption: 'it is tagged HostHoistable', tone: 'indigo' },
      { id: 'hoist', label: 'hoist', caption: 'it lands in its head slot', tone: 'teal' },
      { id: 'dedupe', label: 'settle', caption: 'duplicates merge, order is set', tone: 'emerald' },
    ],
  },
  before: {
    badge: '01',
    eyebrow: 'who owns the head',
    title: 'The head used to live outside the component model',
    description: 'The problem was ownership, not syntax. React 19 changed who manages the head.',
    outside: {
      title: 'Managed outside the tree',
      badge: 'React 18',
      description:
        'The head was territory React did not know, so a library had to push into it as a side effect.',
      bullets: [
        'Every route change meant swapping the title by hand',
        'meta tags only worked inside a separate library context',
        'You timed the head insertion yourself, causing flashes and duplicates',
        'Server and client built the head separately and drifted apart',
      ],
    },
    bridge: {
      headline: 'Treat document resources\nas part of the tree',
      sub: 'Separate where it is declared from where it is placed and the head becomes ordinary component syntax.',
    },
    inside: {
      title: 'Once it moved into the tree',
      badge: 'React 19',
      description: 'Declare it anywhere and react-dom places it in the right head slot.',
      bullets: [
        'The component rendering <title> owns that page title',
        'Conditional rendering and unmount are reflected in the head as they happen',
        'The same code produces the same head during SSR',
        'A stylesheet declares its order through precedence',
      ],
    },
    note: 'The point is not that it lands in the head, but that head resources now follow Fiber lifetime rules.',
  },
  resources: {
    badge: '02',
    eyebrow: 'five resources',
    title: 'Five tags that look alike and behave differently',
    description:
      'They all look like DOM elements, but react-dom treats each as a different kind of resource.',
    cards: [
      {
        id: 'title',
        tag: '<title>',
        title: 'Document title',
        description: 'A document may have only one, so the last one rendered wins.',
        tone: 'indigo',
      },
      {
        id: 'meta',
        tag: '<meta>',
        title: 'Document metadata',
        description: 'Many can coexist. SEO, viewport and encoding all live here.',
        tone: 'cyan',
      },
      {
        id: 'link',
        tag: '<link>',
        title: 'External resource link',
        description: 'A stylesheet declares order via precedence; preload declares load priority.',
        tone: 'teal',
      },
      {
        id: 'script',
        tag: '<script>',
        title: 'Script resource',
        description: 'Async scripts with the same src are merged so they load only once.',
        tone: 'violet',
      },
      {
        id: 'style',
        tag: '<style>',
        title: 'Style resource',
        description: 'Given href and precedence, duplicates are removed and order is guaranteed.',
        tone: 'blue',
      },
    ],
    note: 'Metadata and resources are different things: the first two carry information, the last three affect load order and deduplication.',
  },
  hoisting: {
    badge: '03',
    eyebrow: 'hoisting',
    title: 'Four slots from declaration to placement',
    description:
      'These four are all of hoisting. Nothing touches the DOM as a side effect along the way.',
    steps: [
      {
        id: 'declare',
        num: '01',
        title: 'Declare it anywhere in the tree',
        description:
          'Deep inside a component is fine. The declaration carries the meaning, not the position.',
        tone: 'cyan',
      },
      {
        id: 'detect',
        num: '02',
        title: 'Classify it as HostHoistable',
        description:
          'type and props decide whether it hoists. The Fiber tag itself changes right here.',
        tone: 'indigo',
      },
      {
        id: 'hoist',
        num: '03',
        title: 'Attach it to its head slot',
        description:
          'No children are created; instead memoizedState holds a resource pointing at a document slot.',
        tone: 'teal',
      },
      {
        id: 'dedupe',
        num: '04',
        title: 'Merge duplicates and settle order',
        description:
          'The same resource declared twice merges into one, and precedence decides the order.',
        tone: 'emerald',
      },
    ],
    note: 'Step 02 is the heart of it. With their own WorkTag, document resources inherit the usual mount and unmount rules.',
  },
  rules: {
    badge: '04',
    eyebrow: 'placement rules',
    title: 'Where each one lands and what happens on a clash',
    description:
      'Hoisting rules differ per tag. These four are the ones that actually confuse people.',
    headers: ['Declaration', 'Final placement', 'On a clash'],
    rows: [
      {
        tag: '<title>',
        lands: 'The title slot in head',
        rule: 'Only one survives and the last render wins',
      },
      {
        tag: '<meta name="...">',
        lands: 'Inside head',
        rule: 'Not merged. As many as you declare go in',
      },
      {
        tag: '<link rel="stylesheet" precedence>',
        lands: 'A precedence group inside head',
        rule: 'Same href merges into one and sorts by precedence',
      },
      {
        tag: '<script async src>',
        lands: 'Inside head',
        rule: 'Same src is merged so it loads only once',
      },
    ],
    note: 'A stylesheet without precedence is not hoisted. Add it whenever you want declarative ordering.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'Where a document resource becomes its own Fiber',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: 'Look for',
    lookFor: 'case HostHoistable:',
    whyLabel: 'Why',
    why: 'The mere existence of this case shows the size of the change. A convenience feature would not need a new WorkTag.',
    code: EN_CODE,
    primaryCta: 'View ReactFiberBeginWork.js',
    primaryHref: BEGIN_WORK_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'What line do use client and use server actually draw',
    description: 'The DOM resource axis is done; the server boundary is next.',
    cta: 'Go to the next page',
    href: '/server-components-contract',
  },
};

export const metadataResourceContent: Record<Locale, MetadataResourceContent> = { ko, en };
