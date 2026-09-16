import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type ComparisonRow = {
  label: string;
  placement: string | string[];
  update: string | string[];
  emphasis?: boolean;
};

export type SummaryItem = {
  text: string;
  emphasis: string;
  tone: ToneKey;
};

export type WhatChangedItem = {
  text: string;
  tone: ToneKey;
};

export type DiffRow = {
  label: string;
  value: string;
};

export type UpdatePhaseContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      leftTitle: string;
      leftCode: string;
      leftPreview: string;
      centerTitle: string;
      centerSubtitle: string;
      branch1Title: string;
      branch1Detail: string;
      branch1Code: string;
      branch2Title: string;
      branch2Detail: string;
      branch2BeforeCode: string;
      branch2AfterCode: string;
    };
  };
  propsExample: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeCode: string;
    afterTitle: string;
    afterCode: string;
    note: string;
  };
  textExample: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    jsxTitle: string;
    jsxCode: string;
    stateTitle: string;
    stateFrom: string;
    stateTo: string;
    stateName: string;
    note: string;
  };
  compare: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { label: string; placement: string; update: string };
    rows: ComparisonRow[];
    quickSummaryTitle: string;
    quickSummary: SummaryItem[];
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
  beforeAfter: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    domLabel: string;
    screenLabel: string;
    beforeTitle: string;
    beforeDom: string;
    beforeScreen: string;
    middle: { step1Title: string; step1Note: string; step2Title: string; step2Note: string };
    afterTitle: string;
    afterDom: string;
    afterScreen: string;
    whatChangedTitle: string;
    whatChangedItems: WhatChangedItem[];
  };
  propsVsText: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    propsCard: {
      title: string;
      description: string;
      rows: DiffRow[];
    };
    textCard: {
      title: string;
      description: string;
      rows: DiffRow[];
    };
    pointTitle: string;
    pointText: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const compareRowsKo: ComparisonRow[] = [
  { label: '대상', placement: '새 host node', update: '기존 host node', emphasis: true },
  { label: '동작', placement: '삽입', update: '수정' },
  { label: '예시', placement: '새 <li> 추가', update: 'disabled, text 변경' },
  { label: '재사용 여부', placement: '새로 생성', update: '기존 node 재사용' },
  {
    label: '어디서 처리?',
    placement: ['Mutation Phase', 'host placement'],
    update: ['Mutation Phase', 'host update'],
  },
];

const compareRowsEn: ComparisonRow[] = [
  { label: 'Target', placement: 'new host node', update: 'existing host node', emphasis: true },
  { label: 'Action', placement: 'insert', update: 'mutate' },
  { label: 'Example', placement: 'add a new <li>', update: 'change disabled, text' },
  { label: 'Reuse?', placement: 'create new', update: 'reuse existing node' },
  {
    label: 'Where?',
    placement: ['Mutation Phase', 'host placement'],
    update: ['Mutation Phase', 'host update'],
  },
];

const quickSummaryKo: SummaryItem[] = [
  {
    text: '같은 type과 key로 유지된 Fiber → 기존 DOM 재사용',
    emphasis: 'reuse',
    tone: 'teal',
  },
  { text: 'props나 텍스트가 바뀌면 → Update flag', emphasis: 'flag', tone: 'sky' },
  {
    text: 'Commit Phase에서 setAttribute / setText 등으로 갱신',
    emphasis: 'apply',
    tone: 'violet',
  },
];

const quickSummaryEn: SummaryItem[] = [
  {
    text: 'Same type and key Fiber → reuse the existing DOM',
    emphasis: 'reuse',
    tone: 'teal',
  },
  { text: 'props or text changed → Update flag', emphasis: 'flag', tone: 'sky' },
  {
    text: 'Commit Phase applies via setAttribute / setText, etc.',
    emphasis: 'apply',
    tone: 'violet',
  },
];

const whatChangedKo: WhatChangedItem[] = [
  { text: '기존 <button> DOM node는 그대로', tone: 'teal' },
  { text: 'disabled 속성만 true로 변경', tone: 'sky' },
  { text: 'DOM 교체 없이 속성 업데이트 수행', tone: 'violet' },
];

const whatChangedEn: WhatChangedItem[] = [
  { text: 'The existing <button> DOM node is kept', tone: 'teal' },
  { text: 'Only disabled flips to true', tone: 'sky' },
  { text: 'Attributes update without DOM replacement', tone: 'violet' },
];

const hostEffectsCode = `export function commitHostTextUpdate(finishedWork, newText, oldText) {
  try {
    commitTextUpdate(finishedWork.stateNode, oldText, newText);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}

export function commitHostUpdate(finishedWork, newProps, oldProps) {
  try {
    commitUpdate(finishedWork.stateNode, finishedWork.type, oldProps, newProps, finishedWork);
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}`;

const ko: UpdatePhaseContent = {
  hero: {
    badge: 'Commit Phase · 6/10단계',
    title: {
      line1: '기존 DOM 노드는',
      line2: 'Update flag를 통해',
      line3: '갱신됩니다.',
    },
    description:
      '새로 만들 필요는 없지만 props나 텍스트가 달라졌다면, React는 기존 host instance를 새 결과에 맞게 수정합니다.',
    diagram: {
      leftTitle: '기존 DOM node (재사용)',
      leftCode: '<button>저장</button>',
      leftPreview: '저장',
      centerTitle: 'Update flag',
      centerSubtitle: '변경 필요 표시',
      branch1Title: 'props update',
      branch1Detail: 'disabled: false → true',
      branch1Code: '<button disabled>저장</button>',
      branch2Title: 'text update',
      branch2Detail: 'text: "1" → "2"',
      branch2BeforeCode: '<span>1</span>',
      branch2AfterCode: '<span>2</span>',
    },
  },
  propsExample: {
    badge: '01',
    eyebrow: 'props 변경 예시',
    title: 'props 변경 예시',
    description:
      'disabled 속성 하나가 바뀌었을 때, 새 버튼 노드가 만들어지지 않고 기존 노드의 속성만 갱신됩니다.',
    beforeTitle: 'Before',
    beforeCode: '<button disabled={false}>저장</button>',
    afterTitle: 'After',
    afterCode: '<button disabled={true}>저장</button>',
    note: '같은 버튼 노드를 유지하면서 disabled 속성만 갱신합니다.',
  },
  textExample: {
    badge: '02',
    eyebrow: '텍스트 변경 예시',
    title: 'text 변경 예시',
    description:
      'state가 바뀌면 텍스트 노드 자체를 새로 만드는 게 아니라, 기존 텍스트 노드의 값만 갱신합니다.',
    jsxTitle: 'JSX',
    jsxCode: '<h1>{count}</h1>',
    stateTitle: '상태 변화',
    stateFrom: '1',
    stateTo: '2',
    stateName: 'count',
    note: '텍스트 노드는 기존 host text를 새 값으로 갱신합니다.',
  },
  compare: {
    badge: '03',
    eyebrow: 'Placement vs Update',
    title: 'Placement와 Update 비교',
    description:
      'Placement는 새 host node를 삽입하는 작업이고, Update는 기존 host node를 수정하는 작업입니다.',
    columns: { label: '구분', placement: 'Placement', update: 'Update' },
    rows: compareRowsKo,
    quickSummaryTitle: '빠른 요약',
    quickSummary: quickSummaryKo,
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    lookForLabel: '볼 것',
    lookFor: 'commitHostUpdate, commitHostTextUpdate, commitUpdate, commitTextUpdate',
    whyLabel: '설명',
    why: 'element는 commitHostUpdate가 props를, HostText는 commitHostTextUpdate가 텍스트를 갱신합니다.',
    code: hostEffectsCode,
    primaryCta: 'ReactFiberCommitHostEffects.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
  },
  beforeAfter: {
    badge: '05',
    eyebrow: 'before와 after 시각화',
    title: '시각적 before / after 비교',
    description: 'Update flag가 host props 갱신으로 이어지는 순간을 비교합니다.',
    domLabel: 'DOM',
    screenLabel: '화면',
    beforeTitle: 'Before',
    beforeDom: '<button>저장</button>',
    beforeScreen: '저장',
    middle: {
      step1Title: 'Update flag',
      step1Note: '변경 필요 표시',
      step2Title: 'host props 갱신',
      step2Note: 'setAttribute / property diff',
    },
    afterTitle: 'After',
    afterDom: '<button disabled>저장</button>',
    afterScreen: '저장',
    whatChangedTitle: '무엇이 바뀌었나?',
    whatChangedItems: whatChangedKo,
  },
  propsVsText: {
    badge: '06',
    eyebrow: 'props vs 텍스트',
    title: 'props vs text update 차이',
    description: '같은 Update flag지만 element node와 text node는 다른 API로 갱신됩니다.',
    propsCard: {
      title: 'props update (commitHostUpdate)',
      description: 'element 노드의 속성 / 스타일 / 이벤트 등을 갱신',
      rows: [
        {
          label: '예시',
          value: 'button disabled, input value, style, className, data-*',
        },
        {
          label: '핵심 API',
          value: 'setAttribute, removeAttribute, property assignment 등',
        },
      ],
    },
    textCard: {
      title: 'text update (commitHostTextUpdate)',
      description: 'text 노드의 문자열 내용을 갱신',
      rows: [
        { label: '예시', value: '<span>1</span> → <span>2</span>' },
        { label: '핵심 API', value: 'node.nodeValue = newText' },
      ],
    },
    pointTitle: '포인트',
    pointText: '실제 DOM을 교체하지 않고, 필요한 부분만 최소 비용으로 갱신합니다.',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Deletion',
    description:
      '삽입과 수정까지 봤다면, 이제 가장 많은 cleanup을 동반하는 삭제 흐름을 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/deletion',
  },
};

const en: UpdatePhaseContent = {
  hero: {
    badge: 'Commit Phase · 6/10',
    title: {
      line1: 'Existing DOM nodes are',
      line2: 'updated through',
      line3: 'the Update flag.',
    },
    description:
      'No need to make a new one — when props or text changed, React mutates the existing host instance to match the new result.',
    diagram: {
      leftTitle: 'existing DOM node (reused)',
      leftCode: '<button>Save</button>',
      leftPreview: 'Save',
      centerTitle: 'Update flag',
      centerSubtitle: 'marks "needs change"',
      branch1Title: 'props update',
      branch1Detail: 'disabled: false → true',
      branch1Code: '<button disabled>Save</button>',
      branch2Title: 'text update',
      branch2Detail: 'text: "1" → "2"',
      branch2BeforeCode: '<span>1</span>',
      branch2AfterCode: '<span>2</span>',
    },
  },
  propsExample: {
    badge: '01',
    eyebrow: 'PROPS CHANGE',
    title: 'props change example',
    description:
      'When one disabled prop changes, no new button node is built — only the existing node’s attribute is updated.',
    beforeTitle: 'Before',
    beforeCode: '<button disabled={false}>Save</button>',
    afterTitle: 'After',
    afterCode: '<button disabled={true}>Save</button>',
    note: 'Keep the same button node, only update its disabled attribute.',
  },
  textExample: {
    badge: '02',
    eyebrow: 'TEXT CHANGE',
    title: 'text change example',
    description:
      'When state changes, React does not build a new text node — it just updates the value of the existing text node.',
    jsxTitle: 'JSX',
    jsxCode: '<h1>{count}</h1>',
    stateTitle: 'state change',
    stateFrom: '1',
    stateTo: '2',
    stateName: 'count',
    note: 'Text nodes are updated by writing the new value into the existing host text.',
  },
  compare: {
    badge: '03',
    eyebrow: 'PLACEMENT VS UPDATE',
    title: 'Placement vs Update',
    description: 'Placement inserts a new host node; Update mutates the existing one.',
    columns: { label: 'Aspect', placement: 'Placement', update: 'Update' },
    rows: compareRowsEn,
    quickSummaryTitle: 'quick summary',
    quickSummary: quickSummaryEn,
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    lookForLabel: 'Look for',
    lookFor: 'commitHostUpdate, commitHostTextUpdate, commitUpdate, commitTextUpdate',
    whyLabel: 'Why',
    why: 'commitHostUpdate updates element props, and commitHostTextUpdate updates HostText content.',
    code: hostEffectsCode,
    primaryCta: 'Read ReactFiberCommitHostEffects.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
  },
  beforeAfter: {
    badge: '05',
    eyebrow: 'BEFORE & AFTER',
    title: 'before / after visual',
    description: 'Watch the Update flag turn into a host props mutation.',
    domLabel: 'DOM',
    screenLabel: 'Screen',
    beforeTitle: 'Before',
    beforeDom: '<button>Save</button>',
    beforeScreen: 'Save',
    middle: {
      step1Title: 'Update flag',
      step1Note: 'mark "needs change"',
      step2Title: 'apply host props',
      step2Note: 'setAttribute / property diff',
    },
    afterTitle: 'After',
    afterDom: '<button disabled>Save</button>',
    afterScreen: 'Save',
    whatChangedTitle: 'what changed?',
    whatChangedItems: whatChangedEn,
  },
  propsVsText: {
    badge: '06',
    eyebrow: 'PROPS VS TEXT',
    title: 'props vs text update',
    description: 'Both carry the Update flag, but element and text nodes use different APIs.',
    propsCard: {
      title: 'props update (commitHostUpdate)',
      description: 'Update element-node props / style / events',
      rows: [
        {
          label: 'examples',
          value: 'button disabled, input value, style, className, data-*',
        },
        {
          label: 'core API',
          value: 'setAttribute, removeAttribute, property assignment, ...',
        },
      ],
    },
    textCard: {
      title: 'text update (commitHostTextUpdate)',
      description: 'Update the text content of a text node',
      rows: [
        { label: 'examples', value: '<span>1</span> → <span>2</span>' },
        { label: 'core API', value: 'node.nodeValue = newText' },
      ],
    },
    pointTitle: 'point',
    pointText: 'No DOM replacement — only the necessary part is updated, at minimal cost.',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Deletion',
    description:
      'Now that insert and mutate are clear, the next stop is the delete flow — the one with the most cleanup.',
    cta: 'Go to the next page',
    href: '/deletion',
  },
};

export const updatePhaseContent: Record<Locale, UpdatePhaseContent> = { ko, en };
