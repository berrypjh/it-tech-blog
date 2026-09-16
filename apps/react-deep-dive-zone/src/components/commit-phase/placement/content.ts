import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type HeroStepKind = 'fiber' | 'parent' | 'insert';

export type HeroStep = {
  kind: HeroStepKind;
  title: string;
  caption: string;
  tone: ToneKey;
};

export type ReviewStepId = 'eye' | 'flag';

export type ReviewStep = {
  title: string;
  id: ReviewStepId;
  tone: ToneKey;
};

export type FlowStepId = 'flag' | 'target' | 'crosshair' | 'plus';

export type FlowStep = {
  title: string;
  description?: string;
  id: FlowStepId;
  tone: ToneKey;
};

export type DomStage = {
  label: string;
  code: string;
  note?: string;
  highlightNew?: boolean;
};

export type HostBullet = {
  label: string;
  value: string;
  tone: ToneKey;
};

export type PlacementContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      bottomLabel: string;
      steps: HeroStep[];
      code: string;
    };
  };
  review: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ReviewStep[];
    note: string;
  };
  commitFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    stepsTitle: string;
    steps: FlowStep[];
    domStagesTitle: string;
    domStages: DomStage[];
  };
  hostParent: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    newLabel: string;
    treeA11y: string[];
    parentLabel: { tag: string; value: string };
    siblingLabel: { tag: string; value: string };
    explanationTitle: string;
    explanation: { line1: string; line2: string; line3: string; line4: string };
    bullets: HostBullet[];
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
  example: {
    badge: string;
    eyebrow: string;
    title: string;
    beforeTitle: string;
    beforeCode: string;
    beforePreview: string[];
    centerLines: string[];
    afterTitle: string;
    afterCode: string;
    afterPreview: string[];
    previewLabel: string;
    newBadge: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const heroStepsKo: HeroStep[] = [
  {
    kind: 'fiber',
    title: '새 Fiber (Render 결과)',
    caption: 'Placement / 새 node',
    tone: 'violet',
  },
  { kind: 'parent', title: 'host parent 찾기', caption: '<ul> DOM', tone: 'sky' },
  {
    kind: 'insert',
    title: 'DOM에 삽입 (Commit)',
    caption: '<li>C</li> NEW',
    tone: 'teal',
  },
];

const heroStepsEn: HeroStep[] = [
  {
    kind: 'fiber',
    title: 'New Fiber (Render output)',
    caption: 'Placement / new node',
    tone: 'violet',
  },
  { kind: 'parent', title: 'Find host parent', caption: '<ul> DOM', tone: 'sky' },
  {
    kind: 'insert',
    title: 'Insert into DOM (Commit)',
    caption: '<li>C</li> NEW',
    tone: 'teal',
  },
];

const reviewStepsKo: ReviewStep[] = [
  {
    title: 'Render Phase에서 새 child가 필요하다고 판단',
    id: 'eye',
    tone: 'sky',
  },
  { title: 'Placement flag 기록', id: 'flag', tone: 'violet' },
];

const reviewStepsEn: ReviewStep[] = [
  { title: 'Render Phase decides a new child is needed', id: 'eye', tone: 'sky' },
  { title: 'Placement flag recorded', id: 'flag', tone: 'violet' },
];

const flowStepsKo: FlowStep[] = [
  { title: 'Placement flag 발견', id: 'flag', tone: 'violet' },
  {
    title: 'host parent 탐색',
    description: '어느 DOM 부모 아래에 들어갈까?',
    id: 'target',
    tone: 'sky',
  },
  {
    title: 'host sibling 탐색',
    description: '어떤 형제 앞 / 뒤에 들어갈까?',
    id: 'crosshair',
    tone: 'teal',
  },
  {
    title: 'insertBefore 또는 appendChild',
    description: '실제 DOM 삽입 수행',
    id: 'plus',
    tone: 'teal',
  },
];

const flowStepsEn: FlowStep[] = [
  { title: 'Find the Placement flag', id: 'flag', tone: 'violet' },
  {
    title: 'Look up host parent',
    description: 'Under which DOM parent?',
    id: 'target',
    tone: 'sky',
  },
  {
    title: 'Look up host sibling',
    description: 'Before / after which sibling?',
    id: 'crosshair',
    tone: 'teal',
  },
  {
    title: 'insertBefore or appendChild',
    description: 'Run the real DOM insert',
    id: 'plus',
    tone: 'teal',
  },
];

const beforeDomCode = `<ul>
  <li>A</li>
  <li>B</li>
</ul>`;

const afterDomCode = `<ul>
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>`;

const domStagesKo: DomStage[] = [
  { label: '초기 DOM', code: beforeDomCode },
  { label: '탐색 완료', code: beforeDomCode, note: '삽입 위치: B 뒤' },
  { label: '삽입 완료', code: afterDomCode, note: 'NEW', highlightNew: true },
];

const domStagesEn: DomStage[] = [
  { label: 'Initial DOM', code: beforeDomCode },
  { label: 'Position resolved', code: beforeDomCode, note: 'insert after B' },
  { label: 'Insert done', code: afterDomCode, note: 'NEW', highlightNew: true },
];

const hostBulletsKo: HostBullet[] = [
  { label: 'host parent', value: '<ul>', tone: 'sky' },
  { label: 'host sibling', value: '<li>B</li>', tone: 'teal' },
  { label: '결과', value: '<li>B</li> 뒤에 <li>C</li> 삽입', tone: 'violet' },
];

const hostBulletsEn: HostBullet[] = [
  { label: 'host parent', value: '<ul>', tone: 'sky' },
  { label: 'host sibling', value: '<li>B</li>', tone: 'teal' },
  { label: 'result', value: 'insert <li>C</li> after <li>B</li>', tone: 'violet' },
];

const heroCode = '<ul>\n  <li>A</li>\n  <li>B</li>\n  <li>C</li> NEW\n</ul>';

const placementCode = `function commitPlacement(finishedWork) {
  const parentFiber = getHostParentFiber(finishedWork);
  switch (parentFiber.tag) {
    case HostComponent: {
      const parent = parentFiber.stateNode;
      const before = getHostSibling(finishedWork);
      insertOrAppendPlacementNode(finishedWork, before, parent);
      break;
    }
    case HostRoot: {
      const parent = parentFiber.stateNode.containerInfo;
      const before = getHostSibling(finishedWork);
      insertOrAppendPlacementNodeIntoContainer(finishedWork, before, parent);
      break;
    }
    // ...
  }
}

function insertOrAppendPlacementNode(node, before, parent) {
  const tag = node.tag;
  const isHost = tag === HostComponent || tag === HostText;
  if (isHost) {
    const stateNode = node.stateNode;
    if (before) {
      insertBefore(parent, stateNode, before);
    } else {
      appendChild(parent, stateNode);
    }
  }
  // ...
}`;

const ko: PlacementContent = {
  hero: {
    badge: 'Commit Phase · 5/10단계',
    title: {
      line1: 'Placement flag는',
      line2: '실제 DOM 삽입으로',
      line3: '이어집니다.',
    },
    description:
      '새 Fiber가 생겼다고 곧바로 DOM에 나타나는 것은 아닙니다. Commit Phase가 와야 적절한 부모와 위치를 찾아 실제 host node가 삽입됩니다.',
    diagram: {
      title: '새 Fiber가 실제 DOM에 삽입되는 과정',
      bottomLabel: '정확한 위치에 삽입',
      steps: heroStepsKo,
      code: heroCode,
    },
  },
  review: {
    badge: '01',
    eyebrow: '플래그 복습',
    title: 'Placement flag가 생기는 순간 복습',
    description:
      'Render Phase에서 새 child가 생기는 그 순간을 다시 짚어봅니다. 이 단계의 결과물은 flag일 뿐, 실제 DOM 변경은 아직 일어나지 않았습니다.',
    steps: reviewStepsKo,
    note: '표시는 Render에서, 실제 삽입은 Commit에서.',
  },
  commitFlow: {
    badge: '02',
    eyebrow: '삽입 흐름',
    title: 'Commit 단계의 삽입 흐름',
    description:
      'Mutation 단계에서 Placement flag를 만난 React는 부모와 위치를 차례로 찾고, 실제 host operation을 실행합니다.',
    stepsTitle: 'Commit 삽입 흐름',
    steps: flowStepsKo,
    domStagesTitle: 'DOM 변화 흐름',
    domStages: domStagesKo,
  },
  hostParent: {
    badge: '03',
    eyebrow: 'host 부모와 형제',
    title: 'host parent / host sibling 탐색',
    description: 'Fiber tree를 따라 가장 가까운 host parent와 host sibling을 찾습니다.',
    newLabel: '새로 삽입',
    treeA11y: [
      'Main Fiber → List Fiber',
      'List Fiber → Item A, Item B, Item C (새로 삽입)',
      'host parent: <ul> DOM',
      'host sibling: <li>B</li>',
    ],
    parentLabel: { tag: 'host parent', value: '<ul> DOM' },
    siblingLabel: { tag: 'host sibling', value: '<li>B</li>' },
    explanationTitle: '위치 결정',
    explanation: {
      line1: 'React는 새 node를',
      line2: '어느 DOM 부모 아래,',
      line3: '어떤 형제 앞뒤에 놓을지',
      line4: '계산합니다.',
    },
    bullets: hostBulletsKo,
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    lookForLabel: '볼 것',
    lookFor: 'commitPlacement, getHostParentFiber, getHostSibling, insertOrAppendPlacementNode',
    whyLabel: '설명',
    why: 'getHostParentFiber로 부모를, getHostSibling으로 기준 형제를 찾은 뒤 insertBefore 또는 appendChild를 호출합니다.',
    code: placementCode,
    primaryCta: 'ReactFiberCommitHostEffects.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
  },
  example: {
    badge: '05',
    eyebrow: '쉬운 예시',
    title: '쉬운 리스트 추가 예시',
    beforeTitle: '이전 렌더 결과 (DOM)',
    beforeCode: beforeDomCode,
    beforePreview: ['A', 'B'],
    centerLines: ['C Fiber', '→ Placement', '→ Commit Phase 삽입'],
    afterTitle: '다음 렌더 결과 (DOM)',
    afterCode: afterDomCode,
    afterPreview: ['A', 'B', 'C'],
    previewLabel: '미리보기',
    newBadge: 'NEW',
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Update',
    description:
      '새 node 삽입을 이해했다면, 이제 이미 존재하는 DOM을 어떻게 갱신하는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/update-flag',
  },
};

const en: PlacementContent = {
  hero: {
    badge: 'Commit Phase · 5/10',
    title: {
      line1: 'Placement flags become',
      line2: 'real DOM',
      line3: 'insertions.',
    },
    description:
      'A new Fiber does not immediately appear in the DOM. The Commit Phase needs to find the right parent and position before the host node is actually inserted.',
    diagram: {
      title: 'How a new Fiber becomes a real DOM node',
      bottomLabel: 'inserted at the exact spot',
      steps: heroStepsEn,
      code: heroCode,
    },
  },
  review: {
    badge: '01',
    eyebrow: 'FLAG RECAP',
    title: 'Recap: when the Placement flag is set',
    description:
      'Recap the moment a new child appears in the Render Phase. The output here is only a flag — no DOM change has happened yet.',
    steps: reviewStepsEn,
    note: 'Marks come from Render. The real insert happens in Commit.',
  },
  commitFlow: {
    badge: '02',
    eyebrow: 'INSERTION FLOW',
    title: 'Commit-phase insertion flow',
    description:
      'When the Mutation step finds a Placement flag, React looks up the parent and position, then runs the real host operation.',
    stepsTitle: 'Commit insert flow',
    steps: flowStepsEn,
    domStagesTitle: 'DOM state along the way',
    domStages: domStagesEn,
  },
  hostParent: {
    badge: '03',
    eyebrow: 'PARENT & SIBLING',
    title: 'Finding host parent / host sibling',
    description: 'React walks the Fiber tree to find the nearest host parent and host sibling.',
    newLabel: 'new',
    treeA11y: [
      'Main Fiber → List Fiber',
      'List Fiber → Item A, Item B, Item C (new)',
      'host parent: <ul> DOM',
      'host sibling: <li>B</li>',
    ],
    parentLabel: { tag: 'host parent', value: '<ul> DOM' },
    siblingLabel: { tag: 'host sibling', value: '<li>B</li>' },
    explanationTitle: 'Decision',
    explanation: {
      line1: 'React decides',
      line2: 'under which DOM parent',
      line3: 'and next to which sibling',
      line4: 'the new node should go.',
    },
    bullets: hostBulletsEn,
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
    lookForLabel: 'Look for',
    lookFor: 'commitPlacement, getHostParentFiber, getHostSibling, insertOrAppendPlacementNode',
    whyLabel: 'Why',
    why: 'It finds the parent with getHostParentFiber and the anchor sibling with getHostSibling, then calls insertBefore or appendChild.',
    code: placementCode,
    primaryCta: 'Read ReactFiberCommitHostEffects.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberCommitHostEffects.js',
  },
  example: {
    badge: '05',
    eyebrow: 'EASY EXAMPLE',
    title: 'Easy list-add example',
    beforeTitle: 'previous render (DOM)',
    beforeCode: beforeDomCode,
    beforePreview: ['A', 'B'],
    centerLines: ['C Fiber', '→ Placement', '→ Commit Phase insert'],
    afterTitle: 'next render (DOM)',
    afterCode: afterDomCode,
    afterPreview: ['A', 'B', 'C'],
    previewLabel: 'preview',
    newBadge: 'NEW',
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Update',
    description:
      'Now that inserting a new node is clear, see how an existing DOM node gets updated.',
    cta: 'Go to the next page',
    href: '/update-flag',
  },
};

export const placementContent: Record<Locale, PlacementContent> = { ko, en };
