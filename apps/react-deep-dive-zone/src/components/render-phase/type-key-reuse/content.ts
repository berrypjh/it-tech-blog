import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'sky' | 'teal' | 'violet' | 'rose' | 'amber';

export type CompareSide = {
  label: string;
  code: string;
  detail?: string;
};

export type ResultCard = {
  title: string;
  descriptions: string[];
  kind: 'reuse' | 'replace';
};

export type StateBreakCard = {
  title: string;
  previous: { key: string; count: string };
  next: { key: string; count: string; note: string };
};

export type KeyTypeRole = {
  label: string;
  description: string;
  detail?: string;
  tone: Tone;
};

export type CodeCallout = {
  number: number;
  body: string;
  tone: Tone;
};

export type StatePreserveSide = {
  header: string;
  subtitle: string;
  previous: { code: string; count: string };
  next: { code: string; count: string; note: string };
  bottom: string;
  kind: 'reuse' | 'replace';
};

export type TypeKeyReuseContent = {
  hero: {
    pills: { label: string; tone: 'sky' | 'slate' }[];
    title: { line1: string; line2: string; line3: string };
    description: string;
    callout: string;
    diagram: {
      title: string;
      reuse: {
        header: string;
        result: string;
        previous: { label: string; details: string[] };
        next: { label: string; details: string[] };
        bottom: string;
      };
      replace: {
        header: string;
        result: string;
        previous: { label: string; details: string[] };
        next: { label: string; details: string[] };
        bottom: string;
      };
    };
  };
  sameKeyType: {
    number: string;
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
  };
  differentKey: {
    number: string;
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
    stateBreak: StateBreakCard;
  };
  differentType: {
    number: string;
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
    roleCard: {
      title: string;
      key: KeyTypeRole;
      type: KeyTypeRole;
    };
  };
  code: {
    number: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    fileName: string;
    pointsLabel: string;
    points: string[];
    learningLabel: string;
    learningQuestion: string;
    panelTitle: string;
    panelSubtitle: string;
    codeLines: string;
    keyHighlightLines: number[];
    typeHighlightLines: number[];
    deleteHighlightLines: number[];
    callouts: CodeCallout[];
  };
  statePreserve: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    reuse: StatePreserveSide;
    replace: StatePreserveSide;
  };
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  cta: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const CODE = `// newChild와 existing children을 비교하는 내부 로직 일부

if (newChild.key === key) {
  // key가 같으면 type을 확인해서 재사용 경로로 갈지 결정
  if (newChild.type === elementType) {
    // 같은 type → 기존 Fiber 재사용 경로
    const existing = useFiber(oldFiber, pendingProps);
    existing.return = returnFiber;
    return existing;
  }

  // type이 다르면 재사용 불가 → 교체 경로
  deleteRemainingChildren(returnFiber, oldFiber);
  break;
}

// key가 다르면 두 번째 단계에서 key 기반 비교로 이동 ...`;

const ko: TypeKeyReuseContent = {
  hero: {
    pills: [
      { label: 'React 내부 구조 읽기 시리즈', tone: 'sky' },
      { label: 'Chapter 17', tone: 'slate' },
    ],
    title: {
      line1: 'React는 가능한 한',
      line2: '기존 Fiber를',
      line3: '재사용하려고 합니다.',
    },
    description:
      '같은 위치에서 key와 type이 맞는다면 기존 Fiber를 이어서 쓸 수 있습니다. 다르면 새 Fiber를 만들거나 기존 Fiber를 삭제 표시해야 합니다.',
    callout: 'React의 목표는 상태 보존과 최소 작업입니다. 그 판단 기준이 바로 key와 type입니다.',
    diagram: {
      title: 'Fiber 재사용 판단 미리보기',
      reuse: {
        header: 'same key + same type',
        result: '→ reuse',
        previous: { label: '이전 Fiber', details: ['key: "a"', 'type: Item'] },
        next: { label: '새 Element', details: ['key: "a"', 'type: Item'] },
        bottom: '기존 Fiber 재사용 · 상태 보존 가능성 높음',
      },
      replace: {
        header: 'different key or different type',
        result: '→ replace',
        previous: { label: '이전 Fiber', details: ['key: "a"', 'type: Item'] },
        next: { label: '새 Element', details: ['key: "b" 또는', 'type: 다른 값'] },
        bottom: '새 Fiber 생성 또는 기존 Fiber 삭제 표시',
      },
    },
  },
  sameKeyType: {
    number: '1',
    eyebrow: 'same-key-same-type',
    title: '같은 key / 같은 type 사례',
    previous: {
      label: '이전 (current)',
      code: '<Item key="a" />',
      detail: '기존 Fiber',
    },
    next: {
      label: '다음 (newChildren)',
      code: '<Item key="a" />',
      detail: '새 Element',
    },
    result: {
      title: '재사용 가능성 높음',
      descriptions: ['같은 Fiber로 이어서 사용', '상태 보존 가능성 높음'],
      kind: 'reuse',
    },
  },
  differentKey: {
    number: '2',
    eyebrow: 'different-key',
    title: 'key가 다를 때',
    previous: {
      label: '이전 (current)',
      code: '<Item key="a" />',
      detail: '기존 Fiber',
    },
    next: {
      label: '다음 (newChildren)',
      code: '<Item key="b" />',
      detail: '새 Element',
    },
    result: {
      title: '다른 대상으로 판단',
      descriptions: ['새 Fiber 생성 또는', '기존 Fiber 삭제 표시'],
      kind: 'replace',
    },
    stateBreak: {
      title: '상태 연결이 끊김',
      previous: { key: 'key="a"', count: 'count: 3' },
      next: { key: 'key="b"', count: 'count: 0', note: '새로 시작' },
    },
  },
  differentType: {
    number: '3',
    eyebrow: 'different-type',
    title: 'type이 다를 때 (key는 같아도)',
    previous: {
      label: '이전 (current)',
      code: '<Item key="a" />',
      detail: 'type: Item',
    },
    next: {
      label: '다음 (newChildren)',
      code: '<AnotherItem key="a" />',
      detail: 'type: AnotherItem',
    },
    result: {
      title: '같은 key지만 type이 다름',
      descriptions: ['동일한 Fiber로 이어가기 어려움', '새 Fiber 생성 또는 기존 Fiber 삭제 표시'],
      kind: 'replace',
    },
    roleCard: {
      title: 'key / type의 역할',
      key: {
        label: 'key',
        description: '형제 요소들 사이에서 어떤 대상을 가리키는지 식별',
        tone: 'teal',
      },
      type: {
        label: 'type',
        description: '같은 대상이 어떤 종류인지 식별',
        detail: '컴포넌트 / DOM 태그 구분',
        tone: 'violet',
      },
    },
  },
  code: {
    number: '4',
    eyebrow: 'source-checkpoint',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    fileName: 'ReactChildFiber.js',
    pointsLabel: '관련 포인트',
    points: ['key 비교', 'type 비교', '기존 Fiber 재사용 분기'],
    learningLabel: '학습 질문',
    learningQuestion: 'key와 type이 모두 맞을 때만 기존 Fiber를 이어서 사용할까?',
    panelTitle: 'ReactChildFiber.js',
    panelSubtitle: '코드 미리보기',
    codeLines: CODE,
    keyHighlightLines: [2],
    typeHighlightLines: [4, 5, 6, 7, 8],
    deleteHighlightLines: [11, 12],
    callouts: [
      { number: 1, body: 'key 비교 · 같으면 다음 단계로', tone: 'teal' },
      { number: 2, body: 'type 비교 · 같으면 기존 Fiber 재사용 (useFiber)', tone: 'violet' },
      {
        number: 3,
        body: '다르면 재사용 불가 · 기존 Fiber 삭제 표시 후 새로 생성',
        tone: 'rose',
      },
    ],
  },
  statePreserve: {
    number: '5',
    eyebrow: 'state-preservation',
    title: '상태 보존과 연결',
    description: '기존 Fiber를 재사용한다는 것은 그 위치의 상태를 이어갈 가능성과 연결됩니다.',
    reuse: {
      header: '같은 key + 같은 type',
      subtitle: '상태 보존 가능성',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="a" />', count: 'count: 3', note: '상태 유지' },
      bottom: '같은 Fiber를 이어서 사용',
      kind: 'reuse',
    },
    replace: {
      header: 'key 변경 또는 type 변경',
      subtitle: '다른 인스턴스로 판단되어 초기화 가능성',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="b" />', count: 'count: 0', note: '새로 시작' },
      bottom: '새로운 Fiber로 시작',
      kind: 'replace',
    },
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question: 'key는 같지만 type이 다르면 그대로 재사용될까?',
    answer: '보통은 아니다. React는 key와 type을 함께 비교해 같을 때만 기존 Fiber를 재사용한다.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: '다음 단계로',
    description:
      '재사용 판단이 끝났다면, React는 새로 배치해야 할 것과 삭제해야 할 것을 표시합니다.',
    buttonLabel: '다음: Placement / Deletion / 이동 표시는 언제 남는가?',
    buttonHref: '/mark-changes',
  },
};

const en: TypeKeyReuseContent = {
  hero: {
    pills: [
      { label: 'React Internals Reading Series', tone: 'sky' },
      { label: 'Chapter 17', tone: 'slate' },
    ],
    title: {
      line1: 'React tries to reuse',
      line2: 'existing Fibers',
      line3: 'whenever possible.',
    },
    description:
      'If both key and type match at the same position, the existing Fiber can continue. If they differ, React creates a new Fiber or marks the existing one for deletion.',
    callout:
      "React's goal is state preservation and minimal work — the decision is driven by key and type.",
    diagram: {
      title: 'Fiber reuse decision preview',
      reuse: {
        header: 'same key + same type',
        result: '→ reuse',
        previous: { label: 'prior Fiber', details: ['key: "a"', 'type: Item'] },
        next: { label: 'new Element', details: ['key: "a"', 'type: Item'] },
        bottom: 'Reuse existing Fiber · likely state preserved',
      },
      replace: {
        header: 'different key or different type',
        result: '→ replace',
        previous: { label: 'prior Fiber', details: ['key: "a"', 'type: Item'] },
        next: { label: 'new Element', details: ['key: "b" or', 'type: different'] },
        bottom: 'Create new Fiber or mark existing for deletion',
      },
    },
  },
  sameKeyType: {
    number: '1',
    eyebrow: 'same-key-same-type',
    title: 'Same key / same type case',
    previous: {
      label: 'previous (current)',
      code: '<Item key="a" />',
      detail: 'existing Fiber',
    },
    next: {
      label: 'next (newChildren)',
      code: '<Item key="a" />',
      detail: 'new Element',
    },
    result: {
      title: 'High likelihood of reuse',
      descriptions: ['Continue using the same Fiber', 'Likely state preserved'],
      kind: 'reuse',
    },
  },
  differentKey: {
    number: '2',
    eyebrow: 'different-key',
    title: 'When key differs',
    previous: {
      label: 'previous (current)',
      code: '<Item key="a" />',
      detail: 'existing Fiber',
    },
    next: {
      label: 'next (newChildren)',
      code: '<Item key="b" />',
      detail: 'new Element',
    },
    result: {
      title: 'Treated as different targets',
      descriptions: ['Create new Fiber or', 'mark existing Fiber for deletion'],
      kind: 'replace',
    },
    stateBreak: {
      title: 'State link is broken',
      previous: { key: 'key="a"', count: 'count: 3' },
      next: { key: 'key="b"', count: 'count: 0', note: 'starts fresh' },
    },
  },
  differentType: {
    number: '3',
    eyebrow: 'different-type',
    title: 'When type differs (even with same key)',
    previous: {
      label: 'previous (current)',
      code: '<Item key="a" />',
      detail: 'type: Item',
    },
    next: {
      label: 'next (newChildren)',
      code: '<AnotherItem key="a" />',
      detail: 'type: AnotherItem',
    },
    result: {
      title: 'Same key but different type',
      descriptions: [
        'Cannot continue with the same Fiber',
        'Create new Fiber or mark existing for deletion',
      ],
      kind: 'replace',
    },
    roleCard: {
      title: 'Role of key / type',
      key: {
        label: 'key',
        description: 'Among siblings, identifies which target this is',
        tone: 'teal',
      },
      type: {
        label: 'type',
        description: 'Identifies what kind the same target is',
        detail: 'Component / DOM tag distinction',
        tone: 'violet',
      },
    },
  },
  code: {
    number: '4',
    eyebrow: 'source-checkpoint',
    title: 'Source-code checkpoint',
    fileLabel: 'file',
    fileName: 'ReactChildFiber.js',
    pointsLabel: 'related points',
    points: ['key comparison', 'type comparison', 'fiber reuse branching'],
    learningLabel: 'learning question',
    learningQuestion:
      'Does React continue using the existing Fiber only when both key and type match?',
    panelTitle: 'ReactChildFiber.js',
    panelSubtitle: 'code preview',
    codeLines: CODE,
    keyHighlightLines: [2],
    typeHighlightLines: [4, 5, 6, 7, 8],
    deleteHighlightLines: [11, 12],
    callouts: [
      { number: 1, body: 'key check · if equal, proceed to the next step', tone: 'teal' },
      {
        number: 2,
        body: 'type check · if equal, reuse the existing Fiber via useFiber',
        tone: 'violet',
      },
      {
        number: 3,
        body: 'If different: not reusable — mark for deletion and create a new Fiber',
        tone: 'rose',
      },
    ],
  },
  statePreserve: {
    number: '5',
    eyebrow: 'state-preservation',
    title: 'Connection to state preservation',
    description:
      "Reusing an existing Fiber is connected to the possibility of carrying over that position's state.",
    reuse: {
      header: 'same key + same type',
      subtitle: 'state preservation likely',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="a" />', count: 'count: 3', note: 'state preserved' },
      bottom: 'Continue with the same Fiber',
      kind: 'reuse',
    },
    replace: {
      header: 'key changed or type changed',
      subtitle: 'treated as a different instance — likely reset',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="b" />', count: 'count: 0', note: 'starts fresh' },
      bottom: 'Start with a new Fiber',
      kind: 'replace',
    },
  },
  quiz: {
    number: '6',
    eyebrow: 'mini-quiz',
    title: 'Mini Quiz',
    question: 'If key matches but type differs, will the Fiber still be reused?',
    answer:
      'Usually not. React compares both key and type, and only reuses the existing Fiber when both match.',
  },
  cta: {
    number: '7',
    eyebrow: 'next-step',
    title: 'Next step',
    description:
      'Once reuse decisions are made, React marks what needs to be placed, deleted, or moved.',
    buttonLabel: 'Next: When Placement / Deletion / Move Marks Are Set',
    buttonHref: '/mark-changes',
  },
};

export const typeKeyReuseContent: Record<Locale, TypeKeyReuseContent> = { ko, en };
