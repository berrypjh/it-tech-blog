import type { Locale } from '@it-tech-blog/preferences';

import type { CommitToneKey } from '../_shared/tones';

export type ComparisonRow = {
  label: string;
  placement: string | string[];
  update: string | string[];
  emphasis?: boolean;
};

export type SummaryItem = {
  text: string;
  emphasis: string;
  tone: CommitToneKey;
};

export type WhatChangedItem = {
  text: string;
  tone: CommitToneKey;
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
    insight: string;
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
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    beforeTitle: string;
    beforeCode: string;
    afterTitle: string;
    afterCode: string;
    bottomNote: string;
  };
  textExample: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    jsxTitle: string;
    jsxCode: string;
    stateTitle: string;
    stateFrom: string;
    stateTo: string;
    bottomNote: string;
  };
  compare: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { label: string; placement: string; update: string };
    rows: ComparisonRow[];
    quickSummaryTitle: string;
    quickSummary: SummaryItem[];
  };
  checkpoint: {
    number: string;
    eyebrow: string;
    title: string;
    info: {
      fileLabel: string;
      filePath: string;
      watchLabel: string;
      watchItems: string[];
      questionLabel: string;
      question: string;
    };
    functionsTitle: string;
    functions: { name: string; description: string; tone: CommitToneKey }[];
    code: {
      title: string;
      code: string;
    };
  };
  beforeAfter: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
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
    number: string;
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
  quiz: {
    number: string;
    eyebrow: string;
    title: string;
    question: string;
    answer: string;
    tip: string;
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

const codeKo = `// Update flag가 있는 Fiber 처리 예시
if (flags & Update) {
  if (isHostText) {
    commitHostTextUpdate(finishedWork);
  } else {
    commitHostUpdate(finishedWork, oldProps, newProps);
  }
}`;

const codeEn = `// Handling a Fiber that has the Update flag
if (flags & Update) {
  if (isHostText) {
    commitHostTextUpdate(finishedWork);
  } else {
    commitHostUpdate(finishedWork, oldProps, newProps);
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
    insight: 'Update flag는 "수정이 필요하다"는 표시이고, 실제 수정은 Commit Phase에서 실행됩니다.',
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
    number: '1',
    eyebrow: 'props-change-example',
    title: 'props 변경 예시',
    description:
      'disabled 속성 하나가 바뀌었을 때, 새 버튼 노드가 만들어지지 않고 기존 노드의 속성만 갱신됩니다.',
    beforeTitle: 'Before',
    beforeCode: '<button disabled={false}>저장</button>',
    afterTitle: 'After',
    afterCode: '<button disabled={true}>저장</button>',
    bottomNote: '같은 버튼 노드를 유지하면서 disabled 속성만 갱신합니다.',
  },
  textExample: {
    number: '2',
    eyebrow: 'text-change-example',
    title: 'text 변경 예시',
    description:
      'state가 바뀌면 텍스트 노드 자체를 새로 만드는 게 아니라, 기존 텍스트 노드의 값만 갱신합니다.',
    jsxTitle: 'JSX',
    jsxCode: '<h1>{count}</h1>',
    stateTitle: '상태 변화',
    stateFrom: '1',
    stateTo: '2',
    bottomNote: '텍스트 노드는 기존 host text를 새 값으로 갱신합니다.',
  },
  compare: {
    number: '3',
    eyebrow: 'placement-update-compare',
    title: 'Placement와 Update 비교',
    description:
      'Placement는 새 host node를 삽입하는 작업이고, Update는 기존 host node를 수정하는 작업입니다.',
    columns: { label: '구분', placement: 'Placement', update: 'Update' },
    rows: compareRowsKo,
    quickSummaryTitle: '빠른 요약',
    quickSummary: quickSummaryKo,
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: '실제 코드 체크포인트',
    info: {
      fileLabel: '파일',
      filePath: 'ReactFiberCommitHostEffects.js',
      watchLabel: '볼 것',
      watchItems: ['host update', 'text update'],
      questionLabel: '학습 질문',
      question: 'props update와 text update는 같은 방식으로 처리될까, 분리될까?',
    },
    functionsTitle: '핵심 함수',
    functions: [
      {
        name: 'commitHostUpdate(...)',
        description: 'DOM element의 props / 속성 / 스타일 등을 갱신',
        tone: 'sky',
      },
      {
        name: 'commitHostTextUpdate(...)',
        description: 'HostText node의 텍스트 내용을 갱신',
        tone: 'teal',
      },
    ],
    code: {
      title: '간단한 코드 예시 (흐름 이해용)',
      code: codeKo,
    },
  },
  beforeAfter: {
    number: '5',
    eyebrow: 'before-after-visual',
    title: '시각적 before / after 비교',
    description: 'Update flag가 host props 갱신으로 이어지는 순간을 비교합니다.',
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
    afterScreen: '저장 🔒',
    whatChangedTitle: '무엇이 바뀌었나?',
    whatChangedItems: whatChangedKo,
  },
  propsVsText: {
    number: '6',
    eyebrow: 'props-vs-text',
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
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: '미니 퀴즈',
    question: '기존 텍스트 노드의 내용이 바뀌면 Placement일까, Update일까?',
    answer: 'Update. 텍스트 노드는 기존 node를 유지하고 내용만 새 값으로 갱신합니다.',
    tip: 'type과 key가 같이 Fiber가 재사용된 경우에만 Update로 처리됩니다. 다른 type / key라면 삭제 및 작성이 필요할 수 있습니다.',
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
    insight:
      'The Update flag is just a mark saying "needs update". The actual mutation runs in the Commit Phase.',
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
    number: '1',
    eyebrow: 'props-change-example',
    title: 'props change example',
    description:
      'When one disabled prop changes, no new button node is built — only the existing node’s attribute is updated.',
    beforeTitle: 'Before',
    beforeCode: '<button disabled={false}>Save</button>',
    afterTitle: 'After',
    afterCode: '<button disabled={true}>Save</button>',
    bottomNote: 'Keep the same button node, only update its disabled attribute.',
  },
  textExample: {
    number: '2',
    eyebrow: 'text-change-example',
    title: 'text change example',
    description:
      'When state changes, React does not build a new text node — it just updates the value of the existing text node.',
    jsxTitle: 'JSX',
    jsxCode: '<h1>{count}</h1>',
    stateTitle: 'state change',
    stateFrom: '1',
    stateTo: '2',
    bottomNote: 'Text nodes are updated by writing the new value into the existing host text.',
  },
  compare: {
    number: '3',
    eyebrow: 'placement-update-compare',
    title: 'Placement vs Update',
    description: 'Placement inserts a new host node; Update mutates the existing one.',
    columns: { label: 'Aspect', placement: 'Placement', update: 'Update' },
    rows: compareRowsEn,
    quickSummaryTitle: 'quick summary',
    quickSummary: quickSummaryEn,
  },
  checkpoint: {
    number: '4',
    eyebrow: 'code-checkpoint',
    title: 'Source code checkpoint',
    info: {
      fileLabel: 'File',
      filePath: 'ReactFiberCommitHostEffects.js',
      watchLabel: 'Watch',
      watchItems: ['host update', 'text update'],
      questionLabel: 'Learning question',
      question: 'Are props update and text update handled the same way, or split?',
    },
    functionsTitle: 'Core functions',
    functions: [
      {
        name: 'commitHostUpdate(...)',
        description: 'Update props / attributes / style of a DOM element',
        tone: 'sky',
      },
      {
        name: 'commitHostTextUpdate(...)',
        description: 'Update the string content of a HostText node',
        tone: 'teal',
      },
    ],
    code: {
      title: 'simple code example (for understanding the flow)',
      code: codeEn,
    },
  },
  beforeAfter: {
    number: '5',
    eyebrow: 'before-after-visual',
    title: 'before / after visual',
    description: 'Watch the Update flag turn into a host props mutation.',
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
    afterScreen: 'Save 🔒',
    whatChangedTitle: 'what changed?',
    whatChangedItems: whatChangedEn,
  },
  propsVsText: {
    number: '6',
    eyebrow: 'props-vs-text',
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
  quiz: {
    number: '7',
    eyebrow: 'mini-quiz',
    title: 'mini quiz',
    question: 'When an existing text node’s content changes, is that Placement or Update?',
    answer: 'Update. The text node is kept and only its value is updated.',
    tip: 'Update applies when the same Fiber is reused with the same type / key. Different type / key may require delete + insert instead.',
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
