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
  label: string;
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

export type StatePreserveSide = {
  header: string;
  subtitle: string;
  previous: { code: string; count: string };
  next: { code: string; count: string; note: string };
  bottom: string;
  resultLabel: string;
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
    badge: string;
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
  };
  differentKey: {
    badge: string;
    eyebrow: string;
    title: string;
    previous: CompareSide;
    next: CompareSide;
    result: ResultCard;
    stateBreak: StateBreakCard;
  };
  differentType: {
    badge: string;
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
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  statePreserve: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    previousLabel: string;
    nextLabel: string;
    reuse: StatePreserveSide;
    replace: StatePreserveSide;
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

const CODE_EN = `// Part of the internal logic comparing newChild with existing children

if (newChild.key === key) {
  // Same key: check type to decide whether to take the reuse path
  if (newChild.type === elementType) {
    // Same type → reuse the existing Fiber
    const existing = useFiber(oldFiber, pendingProps);
    existing.return = returnFiber;
    return existing;
  }

  // Different type: cannot reuse → replace path
  deleteRemainingChildren(returnFiber, oldFiber);
  break;
}

// Different key: move on to key-based matching in the second pass ...`;

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
    badge: '01',
    eyebrow: '같은 key/type',
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
      label: '결과',
      title: '재사용 가능성 높음',
      descriptions: ['같은 Fiber로 이어서 사용', '상태 보존 가능성 높음'],
      kind: 'reuse',
    },
  },
  differentKey: {
    badge: '02',
    eyebrow: '다른 key',
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
      label: '결과',
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
    badge: '03',
    eyebrow: '다른 type',
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
      label: '결과',
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
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    lookForLabel: '볼 것',
    lookFor: 'key, type, useFiber, deleteRemainingChildren',
    code: CODE,
    primaryCta: 'ReactChildFiber.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactChildFiber.js',
  },
  statePreserve: {
    badge: '05',
    eyebrow: '상태 보존',
    title: '상태 보존과 연결',
    description: '기존 Fiber를 재사용한다는 것은 그 위치의 상태를 이어갈 가능성과 연결됩니다.',
    previousLabel: '이전 렌더',
    nextLabel: '다음 렌더',
    reuse: {
      header: '같은 key + 같은 type',
      subtitle: '상태 보존 가능성',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="a" />', count: 'count: 3', note: '상태 유지' },
      bottom: '같은 Fiber를 이어서 사용',
      resultLabel: '재사용',
      kind: 'reuse',
    },
    replace: {
      header: 'key 변경 또는 type 변경',
      subtitle: '다른 인스턴스로 판단되어 초기화 가능성',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="b" />', count: 'count: 0', note: '새로 시작' },
      bottom: '새로운 Fiber로 시작',
      resultLabel: '교체',
      kind: 'replace',
    },
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
    badge: '01',
    eyebrow: 'SAME KEY & TYPE',
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
      label: 'result',
      title: 'High likelihood of reuse',
      descriptions: ['Continue using the same Fiber', 'Likely state preserved'],
      kind: 'reuse',
    },
  },
  differentKey: {
    badge: '02',
    eyebrow: 'DIFFERENT KEY',
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
      label: 'result',
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
    badge: '03',
    eyebrow: 'DIFFERENT TYPE',
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
      label: 'result',
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
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactChildFiber.js',
    lookForLabel: 'Look for',
    lookFor: 'key, type, useFiber, deleteRemainingChildren',
    code: CODE_EN,
    primaryCta: 'Read ReactChildFiber.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactChildFiber.js',
  },
  statePreserve: {
    badge: '05',
    eyebrow: 'STATE PRESERVATION',
    title: 'Connection to state preservation',
    description:
      "Reusing an existing Fiber is connected to the possibility of carrying over that position's state.",
    previousLabel: 'previous render',
    nextLabel: 'next render',
    reuse: {
      header: 'same key + same type',
      subtitle: 'state preservation likely',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="a" />', count: 'count: 3', note: 'state preserved' },
      bottom: 'Continue with the same Fiber',
      resultLabel: 'reuse',
      kind: 'reuse',
    },
    replace: {
      header: 'key changed or type changed',
      subtitle: 'treated as a different instance — likely reset',
      previous: { code: '<Item key="a" />', count: 'count: 3' },
      next: { code: '<Item key="b" />', count: 'count: 0', note: 'starts fresh' },
      bottom: 'Start with a new Fiber',
      resultLabel: 'replace',
      kind: 'replace',
    },
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
