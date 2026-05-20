import type { Locale } from '@it-tech-blog/preferences';

export type StageTone = 'blue' | 'teal' | 'lavender' | 'cyan' | 'mint' | 'coral';

export type StageId = 'element' | 'fiber' | 'update' | 'render' | 'commit' | 'effect';

export type StageEntry = {
  id: StageId;
  num: string;
  title: string;
  description: string;
  tone: StageTone;
};

export type SupportPoint = {
  id: 'flow' | 'intent' | 'connect';
  icon: 'route' | 'target' | 'link';
  title: string;
  description: string;
  tone: 'sky' | 'teal' | 'violet';
};

export type StageQuestionCard = {
  id: StageId;
  num: string;
  question: string[];
  stage: string;
  icon: 'cube' | 'network' | 'queue' | 'code' | 'check' | 'bolt';
  tags: string[];
  tone: StageTone;
};

export type MappingRow = {
  id: StageId;
  num: string;
  stage: string;
  files: string[];
  roleTitle: string;
  roleHint?: string;
  tone: StageTone;
};

export type ExampleFlowStep = {
  num: string;
  title: string;
  body: string[];
  tone: StageTone;
};

export type QuizOption = {
  key: 'A' | 'B' | 'C' | 'D';
  label: string;
};

export type QuizCard = {
  id: 'placement' | 'dispatch' | 'beginwork';
  question: string[];
  options: QuizOption[];
  answerKey: 'A' | 'B' | 'C' | 'D';
  answerStage: string;
  explanation: string;
};

export type HintCard = {
  id: StageId;
  stage: string;
  description: string;
  tone: StageTone;
};

export type WorksheetSlot =
  | { kind: 'given'; title: string; sub: string; tone: StageTone }
  | { kind: 'blank'; correctId: StageId; placeholder: string };

export type ReadingPerspectiveContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    points: SupportPoint[];
    rail: {
      railTitle: string;
      stages: StageEntry[];
    };
  };
  sixStages: {
    sectionNum: string;
    title: string;
    cards: StageQuestionCard[];
  };
  mapping: {
    sectionNum: string;
    title: string;
    headers: { stage: string; file: string; role: string };
    rows: MappingRow[];
  };
  example: {
    sectionNum: string;
    title: string;
    codeFile: string;
    code: string;
    steps: ExampleFlowStep[];
  };
  quiz: {
    sectionNum: string;
    title: string;
    answerPrefix: string;
    explainLabel: string;
    correctLabel: string;
    wrongLabel: string;
    cards: QuizCard[];
  };
  workshop: {
    sectionNum: string;
    title: string;
    tipLabel: string;
    tipBody: string;
    hintsTitle: string;
    slots: WorksheetSlot[];
    hints: HintCard[];
    arrows: string;
    successMessage: string;
    resetLabel: string;
  };
  nextStep: {
    sectionNum: string;
    title: string;
    eyebrow: string;
    nextTitle: string;
    description: string;
    cta: string;
    href: string;
  };
};

const appCode = `function App() {
  return <h1>Hello</h1>;
}`;

export const readingPerspectiveContent: Record<Locale, ReadingPerspectiveContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 7/8단계',
      title: ['파일보다 먼저,', '지금 어느 단계의 코드인지', '봐야 합니다.'],
      description: ['React 내부를 읽을 때는', '위치보다 흐름을 먼저 이해하는 것이 중요합니다.'],
      points: [
        {
          id: 'flow',
          icon: 'route',
          tone: 'sky',
          title: '흐름 먼저 보기',
          description: '현재 코드가 흐름의 어디인지 파악합니다.',
        },
        {
          id: 'intent',
          icon: 'target',
          tone: 'teal',
          title: '의도 파악하기',
          description: '왜 이 단계가 필요한지 함께 이해합니다.',
        },
        {
          id: 'connect',
          icon: 'link',
          tone: 'violet',
          title: '연결해서 읽기',
          description: '함수 흐름과 다음 단계의 관계를 봅니다.',
        },
      ],
      rail: {
        railTitle: 'internal pipeline',
        stages: [
          {
            id: 'element',
            num: '1',
            title: 'Element 생성',
            description: 'JSX가 객체로 표현되는 단계',
            tone: 'blue',
          },
          {
            id: 'fiber',
            num: '2',
            title: 'Fiber 생성',
            description: '작업 단위로 변환되는 단계',
            tone: 'teal',
          },
          {
            id: 'update',
            num: '3',
            title: 'Update 예약',
            description: '변경 요청이 기록되는 단계',
            tone: 'lavender',
          },
          {
            id: 'render',
            num: '4',
            title: 'Render Phase',
            description: '변경할 내용을 계산하는 단계',
            tone: 'cyan',
          },
          {
            id: 'commit',
            num: '5',
            title: 'Commit Phase',
            description: '실제 환경에 반영하는 단계',
            tone: 'mint',
          },
          {
            id: 'effect',
            num: '6',
            title: 'Effect 실행',
            description: '렌더 뒤 부수효과 처리 단계',
            tone: 'coral',
          },
        ],
      },
    },
    sixStages: {
      sectionNum: '02',
      title: 'React 내부의 6단계 흐름',
      cards: [
        {
          id: 'element',
          num: '1',
          question: ['무엇을 렌더링할지', '어떻게 표현하는가?'],
          stage: 'Element 생성',
          icon: 'cube',
          tags: ['JSX', 'Element'],
          tone: 'blue',
        },
        {
          id: 'fiber',
          num: '2',
          question: ['그 설명을 어떤', '작업 단위로 바꾸는가?'],
          stage: 'Fiber 생성',
          icon: 'network',
          tags: ['Fiber', 'Reconciler'],
          tone: 'teal',
        },
        {
          id: 'update',
          num: '3',
          question: ['변경 요청은 어디에', '기록되는가?'],
          stage: 'Update 예약',
          icon: 'queue',
          tags: ['Update Queue', 'Lane'],
          tone: 'lavender',
        },
        {
          id: 'render',
          num: '4',
          question: ['무엇을 바꿀지', '어떻게 계산하는가?'],
          stage: 'Render Phase',
          icon: 'code',
          tags: ['Render', 'Work Loop'],
          tone: 'cyan',
        },
        {
          id: 'commit',
          num: '5',
          question: ['실제 환경에는 언제', '반영되는가?'],
          stage: 'Commit Phase',
          icon: 'check',
          tags: ['Commit', 'Mutation'],
          tone: 'mint',
        },
        {
          id: 'effect',
          num: '6',
          question: ['렌더 뒤 부수효과는', '언제 처리되는가?'],
          stage: 'Effect 실행',
          icon: 'bolt',
          tags: ['Effect', 'Passive'],
          tone: 'coral',
        },
      ],
    },
    mapping: {
      sectionNum: '03',
      title: '단계별 대표 파일 매핑',
      headers: { stage: '단계', file: '대표 파일', role: '핵심 역할' },
      rows: [
        {
          id: 'element',
          num: '1',
          stage: 'Element 생성',
          files: ['ReactJSXElement.js'],
          roleTitle: 'JSX를 React Element 객체로 변환',
          roleHint: 'ReactElement, createElement',
          tone: 'blue',
        },
        {
          id: 'fiber',
          num: '2',
          stage: 'Fiber 생성',
          files: ['ReactFiber.js'],
          roleTitle: 'Element를 FiberNode로 변환',
          roleHint: 'createFiberFromElement 등',
          tone: 'teal',
        },
        {
          id: 'update',
          num: '3',
          stage: 'Update 예약',
          files: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
          roleTitle: 'setState 등 업데이트를 생성하고, root에 예약',
          roleHint: 'dispatchSetState, scheduleUpdateOnFiber',
          tone: 'lavender',
        },
        {
          id: 'render',
          num: '4',
          stage: 'Render Phase',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          roleTitle: '트리를 순회하며 변경할 내용을 계산',
          roleHint: 'beginWork, completeWork',
          tone: 'cyan',
        },
        {
          id: 'commit',
          num: '5',
          stage: 'Commit Phase',
          files: ['ReactFiberCommitWork.js'],
          roleTitle: 'DOM 갱신, 레이아웃 효과 실행 등 변경을 실제로 반영',
          tone: 'mint',
        },
        {
          id: 'effect',
          num: '6',
          stage: 'Effect 실행',
          files: ['ReactFiberHooks.js'],
          roleTitle: 'useEffect 등 표시된 효과를 비동기로 실행',
          roleHint: 'passive effect 관련 commit 로직',
          tone: 'coral',
        },
      ],
    },
    example: {
      sectionNum: '04',
      title: '예제 코드로 모든 단계를 따라보기',
      codeFile: 'App.js',
      code: appCode,
      steps: [
        { num: '1', title: 'JSX', body: ['<h1>Hello</h1>', 'JSX 문법'], tone: 'blue' },
        {
          num: '2',
          title: 'Element',
          body: ['ReactElement 객체', "{ type: 'h1', children: 'Hello' }"],
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Fiber',
          body: ['FiberNode 생성', '실제 작업 단위 생성'],
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Render 계산',
          body: ['beginWork / completeWork', '무엇을 변경할지 계산'],
          tone: 'cyan',
        },
        {
          num: '5',
          title: 'Commit',
          body: ['commitRoot', 'DOM에 h1 추가 및 화면 반영'],
          tone: 'mint',
        },
      ],
    },
    quiz: {
      sectionNum: '05',
      title: '현재 위치 판별 퀴즈',
      answerPrefix: '정답',
      explainLabel: '해설',
      correctLabel: '정답입니다',
      wrongLabel: '다시 한번 생각해보세요',
      cards: [
        {
          id: 'placement',
          question: ['fiber.flags에 Placement가 설정되어 있다.', '어느 단계에 가까운가?'],
          options: [
            { key: 'A', label: 'Render Phase' },
            { key: 'B', label: 'Commit Phase' },
            { key: 'C', label: 'Update 예약' },
            { key: 'D', label: 'Effect 실행' },
          ],
          answerKey: 'B',
          answerStage: 'Commit Phase',
          explanation:
            'Placement는 실제 DOM에 추가될 변경을 표시하는 플래그이며, commit 흐름에서 반영됩니다.',
        },
        {
          id: 'dispatch',
          question: ['dispatchSetState 후 update가 root에 예약된다.', '어느 단계인가?'],
          options: [
            { key: 'A', label: 'Element 생성' },
            { key: 'B', label: 'Fiber 생성' },
            { key: 'C', label: 'Update 예약' },
            { key: 'D', label: 'Render Phase' },
          ],
          answerKey: 'C',
          answerStage: 'Update 예약',
          explanation: '업데이트가 생성되고 root에 예약되는 시점입니다.',
        },
        {
          id: 'beginwork',
          question: ['beginWork가 호출되어 현재 Fiber의 자식 구성을 계산한다.', '어느 단계인가?'],
          options: [
            { key: 'A', label: 'Render Phase' },
            { key: 'B', label: 'Commit Phase' },
            { key: 'C', label: 'Effect 실행' },
            { key: 'D', label: 'Fiber 생성' },
          ],
          answerKey: 'A',
          answerStage: 'Render Phase',
          explanation: 'beginWork는 변경 사항 계산을 수행하는 render 흐름에 속합니다.',
        },
      ],
    },
    workshop: {
      sectionNum: '06',
      title: '직접 흐름도를 완성해보세요',
      tipLabel: 'TIP',
      tipBody: '아래 힌트를 클릭해 빈칸에 배치해보세요.',
      hintsTitle: '단계 힌트',
      arrows: '→',
      successMessage: '잘 했어요! 흐름이 완성되었습니다.',
      resetLabel: '초기화',
      slots: [
        { kind: 'given', title: 'JSX', sub: '<h1>Hello</h1>', tone: 'blue' },
        { kind: 'blank', correctId: 'element', placeholder: '______ 단계' },
        { kind: 'given', title: 'Fiber', sub: '작업 단위로 변환', tone: 'teal' },
        { kind: 'blank', correctId: 'render', placeholder: '______ 단계' },
        { kind: 'given', title: 'Commit Phase', sub: 'DOM에 반영', tone: 'mint' },
      ],
      hints: [
        { id: 'element', stage: 'Element 생성', description: 'JSX가 객체로 변환', tone: 'blue' },
        { id: 'update', stage: 'Update 예약', description: '변경 요청을 기록', tone: 'lavender' },
        { id: 'render', stage: 'Render Phase', description: '변경할 내용을 계산', tone: 'cyan' },
        { id: 'effect', stage: 'Effect 실행', description: '부수효과 처리', tone: 'coral' },
      ],
    },
    nextStep: {
      sectionNum: '07',
      title: '다음 단계로 이동하기',
      eyebrow: '학습 로드맵이 이어집니다',
      nextTitle: '다음: React 소스코드 탐구 로드맵',
      description: '단계별 학습 로드맵과 구체적인 학습 계획을 확인하세요.',
      cta: '다음 페이지로 이동',
      href: '/roadmap',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 7/8',
      title: ['Before the filename,', 'first ask which stage', 'this code belongs to.'],
      description: ['When reading React internals,', 'understand the flow before the location.'],
      points: [
        {
          id: 'flow',
          icon: 'route',
          tone: 'sky',
          title: 'Flow first',
          description: 'Locate which stage the current code is in.',
        },
        {
          id: 'intent',
          icon: 'target',
          tone: 'teal',
          title: 'Intent first',
          description: 'Understand why this stage exists.',
        },
        {
          id: 'connect',
          icon: 'link',
          tone: 'violet',
          title: 'Connect the reads',
          description: 'See how each function leads to the next stage.',
        },
      ],
      rail: {
        railTitle: 'internal pipeline',
        stages: [
          {
            id: 'element',
            num: '1',
            title: 'Element creation',
            description: 'JSX is represented as an object',
            tone: 'blue',
          },
          {
            id: 'fiber',
            num: '2',
            title: 'Fiber creation',
            description: 'Converted into work units',
            tone: 'teal',
          },
          {
            id: 'update',
            num: '3',
            title: 'Update scheduling',
            description: 'A change request gets recorded',
            tone: 'lavender',
          },
          {
            id: 'render',
            num: '4',
            title: 'Render Phase',
            description: 'Compute what to change',
            tone: 'cyan',
          },
          {
            id: 'commit',
            num: '5',
            title: 'Commit Phase',
            description: 'Apply changes to the environment',
            tone: 'mint',
          },
          {
            id: 'effect',
            num: '6',
            title: 'Effects',
            description: 'Run side effects after render',
            tone: 'coral',
          },
        ],
      },
    },
    sixStages: {
      sectionNum: '02',
      title: "React's six internal stages",
      cards: [
        {
          id: 'element',
          num: '1',
          question: ['How do we describe', 'what to render?'],
          stage: 'Element creation',
          icon: 'cube',
          tags: ['JSX', 'Element'],
          tone: 'blue',
        },
        {
          id: 'fiber',
          num: '2',
          question: ['How do we turn that description', 'into work units?'],
          stage: 'Fiber creation',
          icon: 'network',
          tags: ['Fiber', 'Reconciler'],
          tone: 'teal',
        },
        {
          id: 'update',
          num: '3',
          question: ['Where are change requests', 'recorded?'],
          stage: 'Update scheduling',
          icon: 'queue',
          tags: ['Update Queue', 'Lane'],
          tone: 'lavender',
        },
        {
          id: 'render',
          num: '4',
          question: ['How do we compute', 'what to change?'],
          stage: 'Render Phase',
          icon: 'code',
          tags: ['Render', 'Work Loop'],
          tone: 'cyan',
        },
        {
          id: 'commit',
          num: '5',
          question: ['When do changes hit', 'the real environment?'],
          stage: 'Commit Phase',
          icon: 'check',
          tags: ['Commit', 'Mutation'],
          tone: 'mint',
        },
        {
          id: 'effect',
          num: '6',
          question: ['When do post-render', 'side effects run?'],
          stage: 'Effects',
          icon: 'bolt',
          tags: ['Effect', 'Passive'],
          tone: 'coral',
        },
      ],
    },
    mapping: {
      sectionNum: '03',
      title: 'Representative files per stage',
      headers: { stage: 'Stage', file: 'Files', role: 'Core role' },
      rows: [
        {
          id: 'element',
          num: '1',
          stage: 'Element creation',
          files: ['ReactJSXElement.js'],
          roleTitle: 'Convert JSX into React Element objects',
          roleHint: 'ReactElement, createElement',
          tone: 'blue',
        },
        {
          id: 'fiber',
          num: '2',
          stage: 'Fiber creation',
          files: ['ReactFiber.js'],
          roleTitle: 'Convert Elements into FiberNodes',
          roleHint: 'createFiberFromElement, etc.',
          tone: 'teal',
        },
        {
          id: 'update',
          num: '3',
          stage: 'Update scheduling',
          files: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
          roleTitle: 'Create updates from setState and schedule on root',
          roleHint: 'dispatchSetState, scheduleUpdateOnFiber',
          tone: 'lavender',
        },
        {
          id: 'render',
          num: '4',
          stage: 'Render Phase',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          roleTitle: 'Walk the tree and compute changes',
          roleHint: 'beginWork, completeWork',
          tone: 'cyan',
        },
        {
          id: 'commit',
          num: '5',
          stage: 'Commit Phase',
          files: ['ReactFiberCommitWork.js'],
          roleTitle: 'Apply DOM updates and run layout effects',
          tone: 'mint',
        },
        {
          id: 'effect',
          num: '6',
          stage: 'Effects',
          files: ['ReactFiberHooks.js'],
          roleTitle: 'Run marked effects (useEffect, etc.) asynchronously',
          roleHint: 'Passive effect commit logic',
          tone: 'coral',
        },
      ],
    },
    example: {
      sectionNum: '04',
      title: 'Follow one example through every stage',
      codeFile: 'App.js',
      code: appCode,
      steps: [
        { num: '1', title: 'JSX', body: ['<h1>Hello</h1>', 'JSX syntax'], tone: 'blue' },
        {
          num: '2',
          title: 'Element',
          body: ['ReactElement object', "{ type: 'h1', children: 'Hello' }"],
          tone: 'teal',
        },
        {
          num: '3',
          title: 'Fiber',
          body: ['FiberNode created', 'Actual work unit'],
          tone: 'lavender',
        },
        {
          num: '4',
          title: 'Render compute',
          body: ['beginWork / completeWork', 'What to change is computed'],
          tone: 'cyan',
        },
        { num: '5', title: 'Commit', body: ['commitRoot', 'h1 appended to the DOM'], tone: 'mint' },
      ],
    },
    quiz: {
      sectionNum: '05',
      title: 'Stage recognition quiz',
      answerPrefix: 'Answer',
      explainLabel: 'Explanation',
      correctLabel: 'Correct',
      wrongLabel: 'Try again',
      cards: [
        {
          id: 'placement',
          question: ['fiber.flags has Placement set.', 'Which stage is closest?'],
          options: [
            { key: 'A', label: 'Render Phase' },
            { key: 'B', label: 'Commit Phase' },
            { key: 'C', label: 'Update scheduling' },
            { key: 'D', label: 'Effects' },
          ],
          answerKey: 'B',
          answerStage: 'Commit Phase',
          explanation:
            'Placement flags a change to be applied to the DOM — it lands during commit.',
        },
        {
          id: 'dispatch',
          question: [
            'After dispatchSetState, the update is scheduled on root.',
            'Which stage is this?',
          ],
          options: [
            { key: 'A', label: 'Element creation' },
            { key: 'B', label: 'Fiber creation' },
            { key: 'C', label: 'Update scheduling' },
            { key: 'D', label: 'Render Phase' },
          ],
          answerKey: 'C',
          answerStage: 'Update scheduling',
          explanation: 'The moment an update is created and scheduled on the root.',
        },
        {
          id: 'beginwork',
          question: [
            'beginWork runs and computes child layout for the current Fiber.',
            'Which stage is this?',
          ],
          options: [
            { key: 'A', label: 'Render Phase' },
            { key: 'B', label: 'Commit Phase' },
            { key: 'C', label: 'Effects' },
            { key: 'D', label: 'Fiber creation' },
          ],
          answerKey: 'A',
          answerStage: 'Render Phase',
          explanation: 'beginWork belongs to the render flow that computes changes.',
        },
      ],
    },
    workshop: {
      sectionNum: '06',
      title: 'Complete the flow yourself',
      tipLabel: 'TIP',
      tipBody: 'Click a hint below to drop it into a blank.',
      hintsTitle: 'Stage hints',
      arrows: '→',
      successMessage: 'Nice — the flow is complete.',
      resetLabel: 'Reset',
      slots: [
        { kind: 'given', title: 'JSX', sub: '<h1>Hello</h1>', tone: 'blue' },
        { kind: 'blank', correctId: 'element', placeholder: '______ stage' },
        { kind: 'given', title: 'Fiber', sub: 'Convert to work unit', tone: 'teal' },
        { kind: 'blank', correctId: 'render', placeholder: '______ stage' },
        { kind: 'given', title: 'Commit Phase', sub: 'Reflect into the DOM', tone: 'mint' },
      ],
      hints: [
        { id: 'element', stage: 'Element creation', description: 'JSX → object', tone: 'blue' },
        {
          id: 'update',
          stage: 'Update scheduling',
          description: 'Record a change request',
          tone: 'lavender',
        },
        {
          id: 'render',
          stage: 'Render Phase',
          description: 'Compute what to change',
          tone: 'cyan',
        },
        { id: 'effect', stage: 'Effects', description: 'Handle side effects', tone: 'coral' },
      ],
    },
    nextStep: {
      sectionNum: '07',
      title: 'Move on to the next page',
      eyebrow: 'The learning roadmap continues',
      nextTitle: 'Next: React source-code exploration roadmap',
      description: 'See the per-stage roadmap and a concrete study plan.',
      cta: 'Go to the next page',
      href: '/roadmap',
    },
  },
};
