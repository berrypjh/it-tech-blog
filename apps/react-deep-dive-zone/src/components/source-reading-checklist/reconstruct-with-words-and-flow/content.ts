import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';
import type { ToneKey } from '../../shared/tones';

import type { AspectKey } from './aspectTone';

export type { AspectKey, ToneKey };

export type ReasonCard = {
  number: string;
  title: string;
  body: string;
  helper: string;
};

export type FiveStep = {
  number: string;
  title: string;
  body: string;
  example: string;
};

export type FlowExample = {
  id: 'use-state' | 'suspense';
  title: string;
  flow: string[];
  explanation: string;
};

export type NoteField = {
  label: string;
  value: string;
  format: 'text' | 'badge' | 'code';
  /** badge면 톤 분류 */
  tone?: AspectKey;
};

export type BuilderStep = {
  id:
    | 'use-state'
    | 'resolve-dispatcher'
    | 'dispatcher-use-state'
    | 'react-fiber-hooks'
    | 'update-queue'
    | 'schedule-update-on-fiber';
  fn: string;
  /** 클릭 시 보여줄 step 설명 */
  description: string;
};

export type ChecklistItem = {
  id: string;
  text: string;
};

export type LoopStep = {
  id: 'question' | 'entry' | 'package' | 'value' | 'phase' | 'test' | 'version' | 'explain';
  label: string;
  /** 마지막 step만 highlight */
  highlight?: boolean;
};

export type ReconstructContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    supporting: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftItems: string[];
    leftCaption: string;
    connectorLabels: string[];
    rightPanelTitle: string;
    rightItems: string[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** "진짜 내 지식으로 남을까" 강조 */
    emphasize: string;
    badges: string[];
  };
  whyReconstruct: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ReasonCard[];
    bannerLines: [string, string];
  };
  oneSentence: {
    eyebrow: string;
    title: string;
    intro: string;
    noteHeader: string;
    templateTitle: string;
    topicLabel: string;
    topicValue: string;
    summaryLabel: string;
    summaryLines: string[];
    helperLabel: string;
    helperFlow: string[];
  };
  fiveStep: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: FiveStep[];
    flowLine: string[];
    flowLineLabel: string;
  };
  flowDiagram: {
    eyebrow: string;
    title: string;
    intro: string;
    examples: FlowExample[];
    explanationLabel: string;
    emphasis: string;
  };
  readingNote: {
    eyebrow: string;
    title: string;
    intro: string;
    noteHeader: string;
    noteTitle: string;
    fields: NoteField[];
    summaryLabel: string;
    summaryValue: string;
  };
  builder: {
    eyebrow: string;
    title: string;
    intro: string;
    poolLabel: string;
    boardLabel: string;
    explanationLabel: string;
    steps: BuilderStep[];
    /** id 순서 = 정답 흐름 */
    defaultOrder: BuilderStep['id'][];
    defaultExplanation: string;
    resetLabel: string;
    fillLabel: string;
    boardEmpty: string;
  };
  checklist: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ChecklistItem[];
    progressLabel: string;
    completeLabel: string;
  };
  courseLoop: {
    eyebrow: string;
    title: string;
    cardTitle: string;
    steps: LoopStep[];
    description: string;
  };
  finale: FinaleBannerContent;
};

export const reconstructContent: Record<Locale, ReconstructContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 10/10단계',
      titleLines: ['마지막은 흐름도를 직접 그리는 것:', '내 말로 재구성하기'],
      description:
        '끝까지 읽는 것이 목표가 아니라, 다른 사람에게 설명할 수 있을 만큼 구조를 다시 만드는 것이 목표입니다.',
      supporting:
        'React 소스코드를 많이 읽는 것만으로는 충분하지 않습니다. 함수 이름을 많이 봤더라도 그 흐름을 한 문장으로 말하지 못한다면 아직 내 지식이 되었다고 보기 어렵습니다. 마지막에는 반드시 읽은 내용을 압축하고, 연결하고, 내 말과 흐름도로 다시 구성해야 합니다.',
      visualTitle: '읽은 코드를 내 설명으로 바꾸는 과정',
      leftPanelTitle: '읽은 코드 조각',
      leftItems: [
        'useState',
        'resolveDispatcher',
        'ReactFiberHooks',
        'updateQueue',
        'scheduleUpdateOnFiber',
      ],
      leftCaption: '함수 이름을 많이 아는 것만으로는 전체 흐름이 남지 않습니다.',
      connectorLabels: ['압축', '연결', '재구성'],
      rightPanelTitle: '내 흐름도와 학습 노트',
      rightItems: ['한 문장 요약', '5단계 흐름', '직접 그린 다이어그램', '내 말로 설명'],
      rightCaption: '핵심 흐름을 다시 만들면 다음에 같은 코드를 훨씬 빠르게 읽을 수 있습니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['소스코드를 많이 읽은 뒤,', '어떻게 해야 {emphasize}?'],
      emphasize: '진짜 내 지식으로 남을까',
      badges: ['한 문장 요약', '5단계 흐름', '흐름도', '내 말로 설명', '최종 체크'],
    },
    whyReconstruct: {
      eyebrow: 'why reconstruction',
      title: '왜 재구성이 독해의 완료 조건인가?',
      intro:
        '코드를 많이 읽는 것과 그 구조를 설명할 수 있는 것은 다릅니다. 소스코드 독해는 읽기보다 재구성에서 완성됩니다.',
      cards: [
        {
          number: '01',
          title: '그냥 읽으면 금방 잊힌다',
          body: '함수 이름과 파일 경로는 기억나도 전체 흐름이 어떻게 이어졌는지는 쉽게 흐려집니다.',
          helper: '읽은 양보다 남은 구조가 중요합니다.',
        },
        {
          number: '02',
          title: '흐름으로 정리하면 기억된다',
          body: '입력, 내부 분류, 저장 구조, 다음 단계, 최종 결과로 나누면 복잡한 코드도 다시 꺼내기 쉬운 지식이 됩니다.',
          helper: '흐름은 복습 가능한 지도입니다.',
        },
        {
          number: '03',
          title: '자기 말로 설명하면 구조가 선명해진다',
          body: '남의 표현을 따라가는 것과 내가 직접 설명하는 것은 다릅니다. 내 말로 바꾸는 순간 빈틈이 드러납니다.',
          helper: '설명할 수 있어야 이해한 것입니다.',
        },
      ],
      bannerLines: ['읽었다는 느낌보다,', '설명할 수 있는 구조가 중요하다.'],
    },
    oneSentence: {
      eyebrow: 'one sentence summary',
      title: '한 문장 요약 템플릿',
      intro:
        '긴 독해가 끝나면 먼저 한 문장으로 줄입니다. 좋은 한 문장 요약은 세부 구현을 모두 담지 않아도 핵심 흐름을 잃지 않습니다.',
      noteHeader: 'one-sentence.md',
      templateTitle: 'setState scheduling',
      topicLabel: '주제',
      topicValue: 'setState scheduling',
      summaryLabel: '한 문장 요약',
      summaryLines: [
        '업데이트는 lane을 받고,',
        'root에 pending work로 표시된 뒤,',
        '렌더링 예약 흐름으로 넘어간다.',
      ],
      helperLabel: '한 문장 안에는 다음이 들어가면 좋습니다',
      helperFlow: ['입력', '핵심 내부 처리', '다음 단계'],
    },
    fiveStep: {
      eyebrow: 'five step flow',
      title: '5단계 흐름 요약 템플릿',
      intro:
        '한 문장으로 압축했다면, 이제 흐름을 5단계로 펼칩니다. 너무 길게 쓰지 말고 역할 단위로 나누는 것이 중요합니다.',
      flowLineLabel: '한 줄 흐름',
      flowLine: ['setState', 'lane 선택', 'root pending 표시', 'scheduling', 'render 시작'],
      steps: [
        {
          number: '1',
          title: '입력',
          body: '어떤 사용자 호출 또는 이벤트에서 시작되는가?',
          example: 'setState',
        },
        {
          number: '2',
          title: '내부 분류',
          body: 'React가 이 요청을 어떤 종류의 작업으로 분류하는가?',
          example: 'lane 선택',
        },
        {
          number: '3',
          title: '핵심 저장 구조',
          body: '요청이 어디에 기록되거나 연결되는가?',
          example: 'root pending 표시',
        },
        {
          number: '4',
          title: '다음 단계로 전환',
          body: '어떤 함수나 흐름으로 넘어가는가?',
          example: 'scheduling',
        },
        {
          number: '5',
          title: '최종 결과',
          body: '최종적으로 어떤 단계가 시작되거나 완료되는가?',
          example: 'render 시작',
        },
      ],
    },
    flowDiagram: {
      eyebrow: 'flow diagram examples',
      title: '흐름도 직접 그리기 예시',
      intro:
        '흐름도는 함수 이름을 예쁘게 나열하는 것이 아닙니다. 각 단계가 어떤 역할을 하는지 연결해 보는 것입니다.',
      explanationLabel: '설명',
      emphasis: '좋은 흐름도는 함수 이름보다 역할의 연결을 보여줍니다.',
      examples: [
        {
          id: 'use-state',
          title: 'useState 흐름',
          flow: ['useState', 'dispatcher', 'Hook implementation', 'updateQueue', 'scheduling'],
          explanation:
            'useState는 public API에서 dispatcher를 거쳐 실제 Hook 구현과 update queue 처리로 연결됩니다.',
        },
        {
          id: 'suspense',
          title: 'Suspense 흐름',
          flow: ['use(Promise)', 'thenable tracking', 'suspend', 'boundary capture', 'retry'],
          explanation:
            'Suspense는 Promise를 만났다는 사실에서 끝나지 않고, boundary가 포착하고 이후 retry 흐름으로 이어지는 과정까지 함께 봐야 합니다.',
        },
      ],
    },
    readingNote: {
      eyebrow: 'reading note sample',
      title: '실전 독해 노트 샘플',
      intro:
        '독해 노트는 단순한 코드 복사가 아니라 과거 기준, 최신 기준, 핵심 코드, 내 요약을 함께 남기는 구조가 좋습니다.',
      noteHeader: 'reading-note.md',
      noteTitle: 'ref as prop',
      fields: [
        { label: '과거 방식', value: 'forwardRef 필요', format: 'badge', tone: 'reading' },
        { label: 'React 19', value: 'props.ref 중심', format: 'badge', tone: 'compression' },
        { label: '핵심 코드', value: 'ReactJSXElement.js', format: 'code' },
      ],
      summaryLabel: '내 요약',
      summaryValue: 'ref는 함수 컴포넌트의 특수 우회 경로에서 더 직접적인 prop 모델로 이동했다.',
    },
    builder: {
      eyebrow: 'flow builder',
      title: 'My React Flow Builder',
      intro:
        '아래 카드들을 하나의 흐름으로 연결해 보세요. 목표는 정답 맞히기가 아니라 내가 어떤 순서로 이해했는지 드러내는 것입니다.',
      poolLabel: '카드 풀',
      boardLabel: '내가 만든 흐름',
      explanationLabel: '선택한 흐름 설명',
      resetLabel: '초기화',
      fillLabel: '기본 흐름 채우기',
      boardEmpty: '카드 풀에서 카드를 골라 순서대로 흐름을 만들어 보세요.',
      defaultExplanation:
        'public API에서 시작한 Hook 호출은 dispatcher를 거쳐 실제 Fiber Hooks 구현으로 이동하고, update queue와 scheduling 흐름으로 이어집니다.',
      defaultOrder: [
        'use-state',
        'resolve-dispatcher',
        'dispatcher-use-state',
        'react-fiber-hooks',
        'update-queue',
        'schedule-update-on-fiber',
      ],
      steps: [
        {
          id: 'use-state',
          fn: 'useState',
          description: 'public API. 사용자 코드에서 직접 호출하는 진입점입니다.',
        },
        {
          id: 'resolve-dispatcher',
          fn: 'resolveDispatcher',
          description: '현재 렌더링 상황에 맞는 Hook 구현 세트를 선택하는 다리 역할입니다.',
        },
        {
          id: 'dispatcher-use-state',
          fn: 'dispatcher.useState',
          description:
            'dispatcher가 위임한 실제 useState 호출 — 이 시점에서 내부 구현으로 내려갑니다.',
        },
        {
          id: 'react-fiber-hooks',
          fn: 'ReactFiberHooks',
          description: 'Hook의 자료구조와 update queue를 다루는 reconciler 내부 구현입니다.',
        },
        {
          id: 'update-queue',
          fn: 'updateQueue',
          description: '아직 처리되지 않은 업데이트가 쌓이는 자료구조입니다.',
        },
        {
          id: 'schedule-update-on-fiber',
          fn: 'scheduleUpdateOnFiber',
          description: '업데이트를 root scheduling 흐름에 연결해 다음 phase로 넘깁니다.',
        },
      ],
    },
    checklist: {
      eyebrow: 'final checklist',
      title: '최종 체크리스트',
      intro: 'React 소스코드를 읽고 나면 아래 질문에 답할 수 있어야 합니다.',
      progressLabel: '완료',
      completeLabel: '코스 완료',
      items: [
        { id: 'question', text: '나는 질문으로 시작했는가?' },
        { id: 'entry', text: 'public API 입구를 찾았는가?' },
        { id: 'package', text: '패키지 경계를 따라갔는가?' },
        { id: 'value', text: '값의 종류를 분류했는가?' },
        { id: 'phase', text: 'phase를 판별했는가?' },
        { id: 'compress', text: '흐름을 한 줄로 압축했는가?' },
        { id: 'test', text: '테스트와 주석을 확인했는가?' },
        { id: 'version', text: '버전 차이를 확인했는가?' },
        { id: 'explain', text: '내 말로 다시 설명했는가?' },
      ],
    },
    courseLoop: {
      eyebrow: 'full course reflection',
      title: '전체 코스 회고',
      cardTitle: 'React 소스코드 탐구 전체 루프',
      description:
        '이 루프를 반복할수록 React 저장소는 거대한 파일 더미가 아니라 질문을 따라 탐색할 수 있는 학습 지도가 됩니다.',
      steps: [
        { id: 'question', label: '질문' },
        { id: 'entry', label: '코드 입구' },
        { id: 'package', label: '패키지' },
        { id: 'value', label: '자료구조' },
        { id: 'phase', label: 'phase' },
        { id: 'test', label: '테스트' },
        { id: 'version', label: '버전' },
        { id: 'explain', label: '내 설명', highlight: true },
      ],
    },
    finale: {
      progressLabel: '15/15 챕터 완료',
      copyLine1: '모든 챕터를',
      copyLine2: '끝까지 완주했습니다.',
      copyLine3: '이제 스스로 소스를 읽어보세요.',
      primaryCta: '처음부터 다시 깊게 읽기',
      primaryHref: '/why-source',
      secondaryCta: '체크리스트 다시 보기',
      secondaryHref: '/start-with-question',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 10/10',
      titleLines: [
        'The final step is drawing the flow yourself:',
        'reconstruct it in your own words',
      ],
      description:
        'The goal is not to finish reading — it is to rebuild the structure well enough to explain it to someone else.',
      supporting:
        "Just reading a lot of React source code is not enough. Even after seeing many function names, if you can't state the flow in one sentence, it has not yet become your knowledge. At the end, you must compress, connect, and rebuild it in your own words and a flow diagram.",
      visualTitle: 'Turn the code you read into your own explanation',
      leftPanelTitle: 'Code fragments you read',
      leftItems: [
        'useState',
        'resolveDispatcher',
        'ReactFiberHooks',
        'updateQueue',
        'scheduleUpdateOnFiber',
      ],
      leftCaption: 'Knowing many function names alone does not leave a whole flow behind.',
      connectorLabels: ['Compress', 'Connect', 'Rebuild'],
      rightPanelTitle: 'Your flow diagram and learning notes',
      rightItems: [
        'One-sentence summary',
        'Five-step flow',
        'Diagram you drew yourself',
        'Explained in your own words',
      ],
      rightCaption: 'Rebuilding the core flow lets you re-read the same code far faster next time.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: ['After reading a lot of source code,', 'what does it take to {emphasize}?'],
      emphasize: 'make it actually yours',
      badges: ['One-sentence', 'Five-step flow', 'Flow diagram', 'In your words', 'Final check'],
    },
    whyReconstruct: {
      eyebrow: 'why reconstruction',
      title: 'Why reconstruction is the completion bar of reading',
      intro:
        'Reading a lot is not the same as being able to explain the structure. Source reading is completed at reconstruction, not at reading.',
      cards: [
        {
          number: '01',
          title: 'Pure reading fades fast',
          body: 'Function names and file paths may stick, but how the whole flow connects fades easily.',
          helper: 'What remains as structure matters more than what you read.',
        },
        {
          number: '02',
          title: 'A flow makes it memorable',
          body: 'Break it into input, internal classification, storage, next step, and final result — and complex code becomes knowledge you can recall.',
          helper: 'A flow is a map you can review.',
        },
        {
          number: '03',
          title: 'Explaining it yourself sharpens the structure',
          body: "Following someone else's words is different from explaining it yourself. Your gaps show up the moment you translate it into your own words.",
          helper: 'If you can explain it, you understood it.',
        },
      ],
      bannerLines: [
        'It is not the feeling of having read it —',
        'it is having a structure you can explain.',
      ],
    },
    oneSentence: {
      eyebrow: 'one sentence summary',
      title: 'One-sentence summary template',
      intro:
        'After a long read, first compress it into one sentence. A good one-sentence summary keeps the core flow without carrying every detail.',
      noteHeader: 'one-sentence.md',
      templateTitle: 'setState scheduling',
      topicLabel: 'Topic',
      topicValue: 'setState scheduling',
      summaryLabel: 'One-sentence summary',
      summaryLines: [
        'An update gets a lane,',
        'is marked on the root as pending work,',
        'and flows into render scheduling.',
      ],
      helperLabel: 'A good one-sentence summary tends to include',
      helperFlow: ['input', 'core internal handling', 'next step'],
    },
    fiveStep: {
      eyebrow: 'five step flow',
      title: 'Five-step flow template',
      intro:
        'Once you have a one-sentence summary, expand it into five steps. Keep it short — split by role, not by line count.',
      flowLineLabel: 'Single-line flow',
      flowLine: ['setState', 'pick a lane', 'mark root pending', 'scheduling', 'render starts'],
      steps: [
        {
          number: '1',
          title: 'Input',
          body: 'Which user call or event does this start from?',
          example: 'setState',
        },
        {
          number: '2',
          title: 'Internal classification',
          body: 'How does React classify this request as a kind of work?',
          example: 'pick a lane',
        },
        {
          number: '3',
          title: 'Core storage',
          body: 'Where is the request recorded or connected?',
          example: 'mark root pending',
        },
        {
          number: '4',
          title: 'Transition to next',
          body: 'Which function or flow does it hand off to?',
          example: 'scheduling',
        },
        {
          number: '5',
          title: 'Final result',
          body: 'Which step ultimately starts or completes?',
          example: 'render starts',
        },
      ],
    },
    flowDiagram: {
      eyebrow: 'flow diagram examples',
      title: 'Drawing flow diagrams yourself — examples',
      intro:
        'A flow diagram is not a pretty list of function names. It is the connection of roles each step plays.',
      explanationLabel: 'Explanation',
      emphasis: 'A good flow diagram shows connections of roles, not function names.',
      examples: [
        {
          id: 'use-state',
          title: 'useState flow',
          flow: ['useState', 'dispatcher', 'Hook implementation', 'updateQueue', 'scheduling'],
          explanation:
            'useState moves from public API through dispatcher into the real Hook implementation, then update queue handling.',
        },
        {
          id: 'suspense',
          title: 'Suspense flow',
          flow: ['use(Promise)', 'thenable tracking', 'suspend', 'boundary capture', 'retry'],
          explanation:
            'Suspense is not done once a Promise appears — it must be read all the way through boundary capture and the retry flow that follows.',
        },
      ],
    },
    readingNote: {
      eyebrow: 'reading note sample',
      title: 'Practical reading-note sample',
      intro:
        'A reading note is not a code copy — it works best as old baseline, modern baseline, key code, and your own summary together.',
      noteHeader: 'reading-note.md',
      noteTitle: 'ref as prop',
      fields: [
        { label: 'Old way', value: 'forwardRef required', format: 'badge', tone: 'reading' },
        { label: 'React 19', value: 'props.ref centered', format: 'badge', tone: 'compression' },
        { label: 'Key code', value: 'ReactJSXElement.js', format: 'code' },
      ],
      summaryLabel: 'My summary',
      summaryValue:
        'ref moved from a special detour for function components into a more direct prop model.',
    },
    builder: {
      eyebrow: 'flow builder',
      title: 'My React Flow Builder',
      intro:
        'Connect the cards below into a single flow. The goal is not to get the answer right — it is to surface the order you understand things in.',
      poolLabel: 'Card pool',
      boardLabel: 'My flow',
      explanationLabel: 'Selected flow explanation',
      resetLabel: 'Reset',
      fillLabel: 'Fill default flow',
      boardEmpty: 'Pick cards from the pool to build a flow in order.',
      defaultExplanation:
        'A Hook call starting in the public API goes through the dispatcher into the real Fiber Hooks implementation, then into update queue and scheduling.',
      defaultOrder: [
        'use-state',
        'resolve-dispatcher',
        'dispatcher-use-state',
        'react-fiber-hooks',
        'update-queue',
        'schedule-update-on-fiber',
      ],
      steps: [
        {
          id: 'use-state',
          fn: 'useState',
          description: 'public API — the entry called directly from user code.',
        },
        {
          id: 'resolve-dispatcher',
          fn: 'resolveDispatcher',
          description:
            'The bridge that picks the right Hook implementation set for the current render.',
        },
        {
          id: 'dispatcher-use-state',
          fn: 'dispatcher.useState',
          description:
            'The actual useState call delegated through the dispatcher — descent into the implementation.',
        },
        {
          id: 'react-fiber-hooks',
          fn: 'ReactFiberHooks',
          description:
            'The reconciler-side implementation handling Hook data structures and the update queue.',
        },
        {
          id: 'update-queue',
          fn: 'updateQueue',
          description: 'The data structure where unprocessed updates collect.',
        },
        {
          id: 'schedule-update-on-fiber',
          fn: 'scheduleUpdateOnFiber',
          description: 'Wires the update into root scheduling, handing off to the next phase.',
        },
      ],
    },
    checklist: {
      eyebrow: 'final checklist',
      title: 'Final checklist',
      intro: 'After reading React source code, you should be able to answer these questions.',
      progressLabel: 'done',
      completeLabel: 'Course completed',
      items: [
        { id: 'question', text: 'Did I start with a question?' },
        { id: 'entry', text: 'Did I find the public API entry?' },
        { id: 'package', text: 'Did I follow package boundaries?' },
        { id: 'value', text: 'Did I classify the kind of value?' },
        { id: 'phase', text: 'Did I identify the phase?' },
        { id: 'compress', text: 'Did I compress the flow into one line?' },
        { id: 'test', text: 'Did I check tests and comments?' },
        { id: 'version', text: 'Did I check the version difference?' },
        { id: 'explain', text: 'Did I re-explain it in my own words?' },
      ],
    },
    courseLoop: {
      eyebrow: 'full course reflection',
      title: 'Full-course reflection',
      cardTitle: 'React source-reading full loop',
      description:
        'The more you repeat this loop, the more the React repo turns from a giant pile of files into a learning map you can navigate by question.',
      steps: [
        { id: 'question', label: 'Question' },
        { id: 'entry', label: 'Code entry' },
        { id: 'package', label: 'Package' },
        { id: 'value', label: 'Data structure' },
        { id: 'phase', label: 'Phase' },
        { id: 'test', label: 'Test' },
        { id: 'version', label: 'Version' },
        { id: 'explain', label: 'Your explanation', highlight: true },
      ],
    },
    finale: {
      progressLabel: 'Chapter 15 of 15 complete',
      copyLine1: 'You completed',
      copyLine2: 'every chapter.',
      copyLine3: 'Now go read the source yourself.',
      primaryCta: 'Start over and read deeper',
      primaryHref: '/why-source',
      secondaryCta: 'Review the checklist',
      secondaryHref: '/start-with-question',
    },
  },
};
