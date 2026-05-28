import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type { ToneKey };

export type ListItemKey = 'a' | 'b' | 'c';

export type DiagramItem = {
  id: ListItemKey;
  label: string;
  keyText: string;
  tone: ToneKey;
};

export type RenderedItem = {
  id: string;
  title: string;
  idText: string;
  keyText: string;
  tone: ToneKey;
};

export type ElementCallout = {
  id: 'type' | 'key' | 'props';
  label: string;
  body: string;
  tone: ToneKey;
};

export type SeparationCard = {
  id: 'props' | 'key';
  title: string;
  short: string;
  body: string;
  checks: string[];
  iconName: 'document' | 'key';
  tone: ToneKey;
};

export type Misconception = {
  id: string;
  index: string;
  wrong: string;
  correct: string;
  bullets: string[];
  iconName: 'message' | 'shuffle';
  tone: ToneKey;
};

export type FiberFlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  iconName: 'key' | 'workflow' | 'recycle' | 'split';
  tone: ToneKey;
};

export type ReactElementKeySeparatedContent = {
  hero: {
    badge: string;
    eyebrow: string;
    title: { line1: string; line2: string };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
    diagramTitle: string;
    previousLabel: string;
    nextLabel: string;
    previousItems: DiagramItem[];
    nextItems: DiagramItem[];
    resultNote: string;
  };
  list: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    mainExplanation: string;
    supportExplanation: string;
    renderedTitle: string;
    items: RenderedItem[];
  };
  position: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    elementShape: string;
    callouts: ElementCallout[];
    emphasis: string;
  };
  separation: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SeparationCard[];
    centerBadge: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fileLabel: string;
    filePath: string;
    pointLabel: string;
    pointValue: string;
    questionLabel: string;
    question: string;
    code: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
  misconceptions: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    wrongLabel: string;
    correctLabel: string;
    cards: Misconception[];
  };
  fiber: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: FiberFlowStep[];
    emphasis: string;
  };
  next: {
    badge: string;
    eyebrow: string;
    title: string;
    line1: string;
    line2Before: string;
    line2Accent: string;
    line2After: string;
    primaryCta: string;
    secondaryCta: string;
    primaryHref: string;
    secondaryHref: string;
  };
};

const itemTones = { a: 'cyan', b: 'sky', c: 'violet' } as const;

const ko: ReactElementKeySeparatedContent = {
  hero: {
    badge: '01',
    eyebrow: 'key의 역할 이해하기',
    title: { line1: 'key는 왜 props와', line2: '따로 다뤄질까?' },
    description:
      'key는 컴포넌트가 직접 읽는 일반 입력값이라기보다, React가 형제 요소를 비교하고 추적하기 위해 관리하는 별도 식별자입니다.',
    primaryCta: 'key가 중요한 이유 보기',
    secondaryCta: 'Reconciliation 미리보기',
    primaryHref: '#position',
    secondaryHref: '#fiber',
    diagramTitle: '형제 요소를 key로 식별하고 추적한다',
    previousLabel: '이전 리스트',
    nextLabel: '다음 리스트 (순서 변경)',
    previousItems: [
      { id: 'a', label: 'A', keyText: 'key: a', tone: itemTones.a },
      { id: 'b', label: 'B', keyText: 'key: b', tone: itemTones.b },
      { id: 'c', label: 'C', keyText: 'key: c', tone: itemTones.c },
    ],
    nextItems: [
      { id: 'b', label: 'B', keyText: 'key: b', tone: itemTones.b },
      { id: 'a', label: 'A', keyText: 'key: a', tone: itemTones.a },
      { id: 'c', label: 'C', keyText: 'key: c', tone: itemTones.c },
    ],
    resultNote: '같은 key라면 이름으로 식별하고 상태를 유지한다.',
  },
  list: {
    badge: '02',
    eyebrow: '리스트 렌더링에서 key가 필요한 장면',
    title: '형제 목록 안에서 안정적으로 식별',
    description:
      '코드 한 줄로 만들어진 형제 Element들은 결국 key를 기준으로 React가 한 명씩 따라갑니다.',
    code: 'items.map((item) => <TodoItem key={item.id} item={item} />);',
    mainExplanation: 'React는 형제 목록 안에서 각 Element를 안정적으로 식별해야 합니다.',
    supportExplanation:
      'React는 key를 기준으로 형제 목록을 비교하여 재사용, 이동, 삽입, 삭제를 판단합니다.',
    renderedTitle: '렌더링되는 형제 Element 예시',
    items: [
      { id: '1', title: '할 일 1', idText: 'id: 101', keyText: 'key: 101', tone: 'cyan' },
      { id: '2', title: '할 일 2', idText: 'id: 102', keyText: 'key: 102', tone: 'sky' },
      { id: '3', title: '할 일 3', idText: 'id: 103', keyText: 'key: 103', tone: 'violet' },
      { id: '4', title: '할 일 4', idText: 'id: 104', keyText: 'key: 104', tone: 'teal' },
    ],
  },
  position: {
    badge: '03',
    eyebrow: 'Element 구조 안에서 key의 위치',
    title: 'props 안이 아닌, 별도의 필드',
    description: 'Element 객체를 펼쳐보면 key는 props와 같은 층에 따로 존재합니다.',
    elementShape: 'React Element\n├─ type: TodoItem\n├─ key: item.id\n└─ props: { item }',
    callouts: [
      {
        id: 'type',
        label: 'type',
        body: '이건 컴포넌트/태그를 렌더링할지',
        tone: 'sky',
      },
      {
        id: 'key',
        label: 'key',
        body: 'React가 형제 Element를 구분하기 위한 식별자',
        tone: 'violet',
      },
      {
        id: 'props',
        label: 'props',
        body: '컴포넌트로 전달되는 실제 입력값',
        tone: 'teal',
      },
    ],
    emphasis: 'key는 props 안으로 들어가지 않고 별도의 필드로 존재한다.',
  },
  separation: {
    badge: '04',
    eyebrow: 'key와 props의 분리',
    title: '두 값은 같은 곳에 두지 않습니다',
    description: 'props는 컴포넌트가 읽는 값, key는 React가 관리하는 식별자 — 역할이 다릅니다.',
    cards: [
      {
        id: 'props',
        title: 'props',
        short: '컴포넌트가 읽는 입력값',
        body: '컴포넌트 내부에서 접근 가능한 데이터입니다.',
        checks: [
          '컴포넌트 내부에서 접근 가능',
          '여러 값을 객체형태로 저장',
          '개발자가 의도적으로 전달',
        ],
        iconName: 'document',
        tone: 'sky',
      },
      {
        id: 'key',
        title: 'key',
        short: 'React가 형제 Element를 구분하기 위한 식별자',
        body: 'React 내부에서 비교와 추적을 위해 사용하는 값입니다.',
        checks: ['컴포넌트에서는 접근 불가', '재사용/이동/삭제 판단에 사용', 'React 내부에서 관리'],
        iconName: 'key',
        tone: 'violet',
      },
    ],
    centerBadge: '역할이\n다름',
  },
  checkpoint: {
    badge: '05',
    eyebrow: '실제 코드 체크포인트',
    title: 'React가 key를 props에서 떼어내는 순간',
    description:
      'hasValidKey로 확인하고, 문자열로 변환해 별도 필드에 저장합니다. key는 props에서 빠집니다.',
    fileLabel: '파일',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointLabel: '볼 포인트',
    pointValue: 'key 추출 로직',
    questionLabel: '학습 질문',
    question: '왜 React는 key를 props와 별도로 뽑아낼까?',
    code: "function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  // ...\n}\n\nlet keyValue = null;\n\nif (hasValidKey(config)) {\n  keyValue = '' + config.key;\n}\n\n// key는 props에서 제거되며\n// ReactElement 객체의 별도 필드로 저장된다.\n// ...",
    primaryCta: 'key 처리 코드 열기',
    secondaryCta: 'JSX key 경고 보기',
    primaryHref: '#misconceptions',
    secondaryHref: '#fiber',
  },
  misconceptions: {
    badge: '06',
    eyebrow: 'key 전달에서 자주 생기는 오해',
    title: '두 번 마주치는 함정',
    description: 'key를 처음 다룰 때 가장 흔히 생기는 오해 두 가지를 정확히 정리합니다.',
    wrongLabel: '오해',
    correctLabel: '정확히',
    cards: [
      {
        id: 'props-key',
        index: '01',
        wrong: 'props.key로 컴포넌트 내부에서 읽을 수 있다.',
        correct: 'key는 일반 props가 아니다.',
        bullets: [
          'key는 React 내부에서만 사용됩니다.',
          '컴포넌트 props에는 포함되지 않습니다.',
          'this.props.key, props.key는 undefined가 됩니다.',
        ],
        iconName: 'message',
        tone: 'violet',
      },
      {
        id: 'index-key',
        index: '02',
        wrong: 'index key는 언제나 안전하다.',
        correct: '목록이 재배열될 가능성이 있다면 문제가 생길 수 있다.',
        bullets: [
          '항목의 추가/삭제/순서 변경 시 잘못된 재사용과 상태 꼬임이 발생할 수 있습니다.',
          '가능한 경우 고유 id를 key로 사용해야 합니다.',
        ],
        iconName: 'shuffle',
        tone: 'amber',
      },
    ],
  },
  fiber: {
    badge: '07',
    eyebrow: '이후 Fiber 재사용과의 연결',
    title: 'key가 만들어내는 다음 결정들',
    description:
      'Element.key 값은 Reconciler가 형제를 비교할 때 그대로 입력이 되어, 어떤 Fiber를 재사용하고 어떤 노드를 다시 만들지 결정합니다.',
    steps: [
      {
        id: 'element-key',
        number: '01',
        title: 'Element.key',
        body: '각 Element의 식별자',
        iconName: 'key',
        tone: 'violet',
      },
      {
        id: 'reconciliation',
        number: '02',
        title: 'Child Reconciliation',
        body: '형제 목록 비교 알고리즘',
        iconName: 'workflow',
        tone: 'sky',
      },
      {
        id: 'reuse',
        number: '03',
        title: 'Fiber 재사용 판단',
        body: '같은 key면 재사용/이동',
        iconName: 'recycle',
        tone: 'teal',
      },
      {
        id: 'decision',
        number: '04',
        title: '삽입 / 이동 / 삭제 결정',
        body: '최종 DOM 변경 계획 수립',
        iconName: 'split',
        tone: 'amber',
      },
    ],
    emphasis: 'key가 같으면 상태를 유지하고, 다르면 새로운 Fiber가 만들어진다.',
  },
  next: {
    badge: '08',
    eyebrow: '다음 단계로 이동하기',
    title: '이제 ref로 시선을 옮깁니다',
    line1: 'key가 React 내부 비교를 위한 별도 값이라는 점을 알았다면,',
    line2Before: '이번에는 React 19에서 특히 중요해진 ',
    line2Accent: 'ref',
    line2After: '의 변화로 넘어갑니다.',
    primaryCta: '다음: ref는 React 19에서 어떻게 달라졌나?',
    secondaryCta: '이전 페이지 다시 보기',
    primaryHref: '/element-ref',
    secondaryHref: '/element-type',
  },
};

const en: ReactElementKeySeparatedContent = {
  hero: {
    badge: '01',
    eyebrow: 'Understanding the role of key',
    title: { line1: 'Why is key treated', line2: 'separately from props?' },
    description:
      'key is not really an ordinary input the component reads — it is a separate identifier React keeps for comparing and tracking sibling elements.',
    primaryCta: 'See why key matters',
    secondaryCta: 'Preview reconciliation',
    primaryHref: '#position',
    secondaryHref: '#fiber',
    diagramTitle: 'React tracks siblings by key',
    previousLabel: 'Previous list',
    nextLabel: 'Next list (reordered)',
    previousItems: [
      { id: 'a', label: 'A', keyText: 'key: a', tone: itemTones.a },
      { id: 'b', label: 'B', keyText: 'key: b', tone: itemTones.b },
      { id: 'c', label: 'C', keyText: 'key: c', tone: itemTones.c },
    ],
    nextItems: [
      { id: 'b', label: 'B', keyText: 'key: b', tone: itemTones.b },
      { id: 'a', label: 'A', keyText: 'key: a', tone: itemTones.a },
      { id: 'c', label: 'C', keyText: 'key: c', tone: itemTones.c },
    ],
    resultNote: 'Same key — same identity — keeps state.',
  },
  list: {
    badge: '02',
    eyebrow: 'Where key matters in list rendering',
    title: 'Stable identity across siblings',
    description: 'A single line builds a sibling list, and React follows each one by its key.',
    code: 'items.map((item) => <TodoItem key={item.id} item={item} />);',
    mainExplanation: 'React needs to identify each Element stably within a sibling list.',
    supportExplanation:
      'React uses key to compare sibling lists and decide reuse, move, insert, and delete.',
    renderedTitle: 'Rendered sibling Elements',
    items: [
      { id: '1', title: 'Todo 1', idText: 'id: 101', keyText: 'key: 101', tone: 'cyan' },
      { id: '2', title: 'Todo 2', idText: 'id: 102', keyText: 'key: 102', tone: 'sky' },
      { id: '3', title: 'Todo 3', idText: 'id: 103', keyText: 'key: 103', tone: 'violet' },
      { id: '4', title: 'Todo 4', idText: 'id: 104', keyText: 'key: 104', tone: 'teal' },
    ],
  },
  position: {
    badge: '03',
    eyebrow: 'Where key sits in the Element shape',
    title: 'A separate field, not inside props',
    description: 'When you open the Element object, key lives next to props — not inside it.',
    elementShape: 'React Element\n├─ type: TodoItem\n├─ key: item.id\n└─ props: { item }',
    callouts: [
      {
        id: 'type',
        label: 'type',
        body: 'What component or tag to render',
        tone: 'sky',
      },
      {
        id: 'key',
        label: 'key',
        body: "React's identifier for distinguishing sibling Elements",
        tone: 'violet',
      },
      {
        id: 'props',
        label: 'props',
        body: 'The actual input data passed to the component',
        tone: 'teal',
      },
    ],
    emphasis: 'key is not folded into props — it lives as its own field.',
  },
  separation: {
    badge: '04',
    eyebrow: 'Separating key and props',
    title: 'They are not stored in the same place',
    description:
      'props is data the component reads; key is the identifier React manages. The roles are different.',
    cards: [
      {
        id: 'props',
        title: 'props',
        short: 'Input the component reads',
        body: 'Data the component can access from inside.',
        checks: [
          'Accessible inside the component',
          'Holds multiple values as an object',
          'Passed deliberately by the developer',
        ],
        iconName: 'document',
        tone: 'sky',
      },
      {
        id: 'key',
        title: 'key',
        short: "React's sibling identifier",
        body: 'A value React uses internally for comparison and tracking.',
        checks: [
          'Not accessible from the component',
          'Drives reuse / move / delete decisions',
          'Managed inside React',
        ],
        iconName: 'key',
        tone: 'violet',
      },
    ],
    centerBadge: 'Different\nroles',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'Source code checkpoint',
    title: 'See React pull key out of props',
    description:
      'It checks with hasValidKey, coerces to string, and stores it as a separate field. key is removed from props.',
    fileLabel: 'File',
    filePath: 'packages/react/src/jsx/ReactJSXElement.js',
    pointLabel: 'Watch for',
    pointValue: 'key extraction logic',
    questionLabel: 'Learning question',
    question: 'Why does React pull key out, separate from props?',
    code: "function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {\n  // ...\n}\n\nlet keyValue = null;\n\nif (hasValidKey(config)) {\n  keyValue = '' + config.key;\n}\n\n// key is removed from props and stored as a\n// separate field on the ReactElement object.\n// ...",
    primaryCta: 'Open key handling source',
    secondaryCta: 'See JSX key warning',
    primaryHref: '#misconceptions',
    secondaryHref: '#fiber',
  },
  misconceptions: {
    badge: '06',
    eyebrow: 'Common misconceptions about key',
    title: 'Two pitfalls you only fall into once',
    description: 'The two most frequent mix-ups when first encountering key.',
    wrongLabel: 'Myth',
    correctLabel: 'Truth',
    cards: [
      {
        id: 'props-key',
        index: '01',
        wrong: 'You can read it as props.key inside the component.',
        correct: 'key is not an ordinary prop.',
        bullets: [
          'key is used only inside React.',
          'It is not included in component props.',
          'this.props.key and props.key are undefined.',
        ],
        iconName: 'message',
        tone: 'violet',
      },
      {
        id: 'index-key',
        index: '02',
        wrong: 'Using the index as a key is always safe.',
        correct: 'If the list can be reordered, this can cause problems.',
        bullets: [
          'Adding/removing/reordering items can cause wrong reuse and tangled state.',
          'When possible, use a stable unique id as the key.',
        ],
        iconName: 'shuffle',
        tone: 'amber',
      },
    ],
  },
  fiber: {
    badge: '07',
    eyebrow: 'Connection to Fiber reuse',
    title: 'Decisions that key drives downstream',
    description:
      'The Element.key value feeds directly into reconciliation, deciding which Fibers to reuse and which nodes to rebuild.',
    steps: [
      {
        id: 'element-key',
        number: '01',
        title: 'Element.key',
        body: "Each Element's identifier",
        iconName: 'key',
        tone: 'violet',
      },
      {
        id: 'reconciliation',
        number: '02',
        title: 'Child Reconciliation',
        body: 'The sibling-list diffing algorithm',
        iconName: 'workflow',
        tone: 'sky',
      },
      {
        id: 'reuse',
        number: '03',
        title: 'Fiber reuse decision',
        body: 'Same key → reuse or move',
        iconName: 'recycle',
        tone: 'teal',
      },
      {
        id: 'decision',
        number: '04',
        title: 'Insert / move / delete',
        body: 'The final DOM mutation plan',
        iconName: 'split',
        tone: 'amber',
      },
    ],
    emphasis: 'Same key keeps state; different key creates a new Fiber.',
  },
  next: {
    badge: '08',
    eyebrow: 'Continue to the next step',
    title: 'Next up: ref',
    line1: 'Now that you know key is a separate value for React-side comparison,',
    line2Before: 'next, look at how ',
    line2Accent: 'ref',
    line2After: ' changed in React 19.',
    primaryCta: 'Next: how did ref change in React 19?',
    secondaryCta: 'Revisit the previous page',
    primaryHref: '/element-ref',
    secondaryHref: '/element-type',
  },
};

export const reactElementKeySeparatedContent: Record<Locale, ReactElementKeySeparatedContent> = {
  ko,
  en,
};
