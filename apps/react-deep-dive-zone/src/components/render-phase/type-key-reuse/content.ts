import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

/** 카테고리색은 ToneKey. 'rose'는 교체/삭제(replace)를 뜻하는 의미색이라 toneTokens 밖에서 직접 쓴다. */
export type Tone = ToneKey | 'rose';

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
  tone: ToneKey;
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
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
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
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
  };
  differentKey: {
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
    stateBreak: StateBreakCard;
  };
  differentType: {
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
    eyebrow: string;
    title: string;
    fileLabel: string;
    fileName: string;
    pointsLabel: string;
    points: string[];
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    callouts: CodeCallout[];
  };
  statePreserve: {
    eyebrow: string;
    title: string;
    description: string;
    reuse: StatePreserveSide;
    replace: StatePreserveSide;
  };
  quiz: {
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
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
    badge: 'Render Phase · 8/10단계',
    title: {
      line1: 'React는 가능한 한',
      line2: '기존 Fiber를',
      line3: '재사용하려고 합니다.',
    },
    description:
      '같은 위치에서 key와 type이 맞는다면 기존 Fiber를 이어서 쓸 수 있습니다. 다르면 새 Fiber를 만들거나 기존 Fiber를 삭제 표시해야 합니다.',
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
    eyebrow: '01 · 같은 key/type',
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
    eyebrow: '02 · 다른 key',
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
    eyebrow: '03 · 다른 type',
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
    eyebrow: '04 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    fileName: 'ReactChildFiber.js',
    pointsLabel: '관련 포인트',
    points: ['key 비교', 'type 비교', '기존 Fiber 재사용 분기'],
    learningQuestion: 'key와 type이 모두 맞을 때만 기존 Fiber를 이어서 사용할까?',
    codeHeader: 'react-reconciler/src/ReactChildFiber.js',
    codeBadge: 'main',
    code: CODE,
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
    eyebrow: '05 · 상태 보존',
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
    eyebrow: '06 · 미니 퀴즈',
    title: '미니 퀴즈',
    question: 'key는 같지만 type이 다르면 그대로 재사용될까?',
    answer: '보통은 아니다. React는 key와 type을 함께 비교해 같을 때만 기존 Fiber를 재사용한다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Placement / Deletion / 이동 표시는 언제 남는가?',
    description:
      '재사용 판단이 끝났다면, React는 새로 배치해야 할 것과 삭제해야 할 것을 표시합니다.',
    cta: '다음 페이지로 이동',
    href: '/mark-changes',
  },
};

const en: TypeKeyReuseContent = {
  hero: {
    badge: 'Render Phase · 8/10',
    title: {
      line1: 'React tries to reuse',
      line2: 'existing Fibers',
      line3: 'whenever possible.',
    },
    description:
      'If both key and type match at the same position, the existing Fiber can continue. If they differ, React creates a new Fiber or marks the existing one for deletion.',
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
    eyebrow: '01 · SAME KEY & TYPE',
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
    eyebrow: '02 · DIFFERENT KEY',
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
    eyebrow: '03 · DIFFERENT TYPE',
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
    eyebrow: '04 · CODE CHECKPOINT',
    title: 'Source-code checkpoint',
    fileLabel: 'file',
    fileName: 'ReactChildFiber.js',
    pointsLabel: 'related points',
    points: ['key comparison', 'type comparison', 'fiber reuse branching'],
    learningQuestion:
      'Does React continue using the existing Fiber only when both key and type match?',
    codeHeader: 'react-reconciler/src/ReactChildFiber.js',
    codeBadge: 'main',
    code: CODE,
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
    eyebrow: '05 · STATE PRESERVATION',
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
    eyebrow: '06 · MINI QUIZ',
    title: 'Mini Quiz',
    question: 'If key matches but type differs, will the Fiber still be reused?',
    answer:
      'Usually not. React compares both key and type, and only reuses the existing Fiber when both match.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'When Placement / Deletion / Move Marks Are Set',
    description:
      'Once reuse decisions are made, React marks what needs to be placed, deleted, or moved.',
    cta: 'Go to the next page',
    href: '/mark-changes',
  },
};

export const typeKeyReuseContent: Record<Locale, TypeKeyReuseContent> = { ko, en };
