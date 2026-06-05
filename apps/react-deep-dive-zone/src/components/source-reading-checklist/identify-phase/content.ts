import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { PhaseKey } from './phaseTone';

export type { PhaseKey, ToneKey };

export type HeroPhaseCard = {
  phase: PhaseKey;
  subtitle: string;
  functions: string[];
  question: string;
  iconKey: 'calendarClock' | 'workflow' | 'monitor';
};

export type WhyPhaseCard = {
  phase: PhaseKey;
  title: string;
  body: string;
  representativeQuestion: string;
};

export type RoleColumn = {
  phase: PhaseKey;
  question: string;
  does: string;
  doesNot: string;
  functions: string[];
};

export type FileGroupCard = {
  phase: PhaseKey;
  files: string[];
  functions: string[];
  readingPoint: string;
};

export type FlowBlock = {
  phase: PhaseKey;
  functions: string[];
  note: string;
};

export type QuizItem = {
  id: 'mark-root-updated' | 'complete-work' | 'commit-mutation';
  code: string;
  answer: PhaseKey;
  explanation: string;
};

export type CodeCard = {
  phase: PhaseKey;
  code: string;
  body: string;
  why: string;
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type PhaseDetectionContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    accentTail: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    mainFlow: string[];
    flowStart: string;
    phaseCards: HeroPhaseCard[];
    visualCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** 함수명 inline 강조 슬롯 */
    emphasizeFns: { sched: string; render: string; commit: string };
    badges: { label: string; phase?: PhaseKey }[];
  };
  whyPhase: {
    eyebrow: string;
    title: string;
    intro: string;
    questionLabel: string;
    cards: WhyPhaseCard[];
    bannerLines: [string, string];
  };
  roleComparison: {
    eyebrow: string;
    title: string;
    intro: string;
    questionLabel: string;
    doesLabel: string;
    doesNotLabel: string;
    functionsLabel: string;
    columns: RoleColumn[];
  };
  representativeFiles: {
    eyebrow: string;
    title: string;
    intro: string;
    filesLabel: string;
    functionsLabel: string;
    readingPointLabel: string;
    groups: FileGroupCard[];
  };
  updateFlow: {
    eyebrow: string;
    title: string;
    intro: string;
    flowStart: string;
    blocks: FlowBlock[];
  };
  quiz: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    items: QuizItem[];
    labels: {
      selectedCode: string;
      answer: string;
      explanation: string;
      categories: string;
    };
  };
  codePreview: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: CodeCard[];
    whyLabel: string;
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const phaseDetectionContent: Record<Locale, PhaseDetectionContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 5/10단계',
      titleLines: ['Render / Commit / Scheduling 중', '어디에 있는지 먼저 판별한다'],
      accentTail: '어디에 있는지 먼저 판별한다',
      description: "코드가 '무엇을 한다'보다 먼저, '언제 하는가'를 읽어야 합니다.",
      supporting:
        'React의 update 흐름은 하나로 이어지지만, 그 안에는 할 일을 예약하는 단계, 다음 트리를 계산하는 단계, 실제 환경에 반영하는 단계가 분리되어 있습니다. 같은 update 흐름 안에서도 어느 phase에 있는지에 따라 코드의 의미는 완전히 달라집니다.',
      primaryCta: 'Phase 비교 보기',
      secondaryCta: '판별 퀴즈 풀기',
      visualTitle: '같은 update 흐름도 phase에 따라 의미가 달라집니다',
      mainFlow: ['Scheduling', 'Render', 'Commit'],
      flowStart: 'setState',
      phaseCards: [
        {
          phase: 'scheduling',
          subtitle: '할 일을 정한다',
          functions: ['requestUpdateLane', 'scheduleUpdateOnFiber'],
          question: '무엇을 언제 처리할까?',
          iconKey: 'calendarClock',
        },
        {
          phase: 'render',
          subtitle: '다음 트리를 계산한다',
          functions: ['beginWork', 'completeWork'],
          question: '다음 결과를 어떻게 계산할까?',
          iconKey: 'workflow',
        },
        {
          phase: 'commit',
          subtitle: '실제 환경에 반영한다',
          functions: ['commitMutationEffects', 'commitLayoutEffects'],
          question: '계산 결과를 실제로 어떻게 반영할까?',
          iconKey: 'monitor',
        },
      ],
      visualCaption: '함수 이름만 보지 말고, 지금 어느 실행 단계에 있는지 먼저 확인합니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: [
        '{sched}와 {render},',
        '{commit}는',
        '왜 같은 업데이트 흐름 안에서도',
        '완전히 다른 역할일까?',
      ],
      emphasizeFns: {
        sched: 'scheduleUpdateOnFiber',
        render: 'beginWork',
        commit: 'commitMutationEffects',
      },
      badges: [
        { label: 'Scheduling', phase: 'scheduling' },
        { label: 'Render', phase: 'render' },
        { label: 'Commit', phase: 'commit' },
        { label: 'Phase 판별' },
      ],
    },
    whyPhase: {
      eyebrow: 'why phase matters',
      title: '왜 phase 구분이 중요한가?',
      intro:
        'React 내부 함수는 모두 "렌더링과 관련된 코드"처럼 보일 수 있습니다. 하지만 실제로는 서로 다른 질문에 답하는 단계로 나뉘어 있습니다.',
      questionLabel: '대표 질문',
      cards: [
        {
          phase: 'scheduling',
          title: '할 일을 정한다',
          body: '어떤 update가 발생했는지 표시하고, 어느 우선순위로 언제 처리할지 결정합니다.',
          representativeQuestion: '무엇을 언제 처리할까?',
        },
        {
          phase: 'render',
          title: '다음 트리를 계산한다',
          body: '현재 트리와 새로운 입력을 바탕으로 다음 Fiber tree와 변경 사항을 계산합니다.',
          representativeQuestion: '다음 결과를 어떻게 계산할까?',
        },
        {
          phase: 'commit',
          title: '실제 환경에 반영한다',
          body: 'render phase에서 계산된 변경 사항을 DOM이나 effect 실행 같은 실제 환경에 반영합니다.',
          representativeQuestion: '계산 결과를 실제로 어떻게 반영할까?',
        },
      ],
      bannerLines: ['같은 update 흐름도', 'phase에 따라 의미가 달라진다.'],
    },
    roleComparison: {
      eyebrow: 'role comparison',
      title: 'Scheduling / Render / Commit 역할 비교',
      intro:
        'phase를 구분하면 지금 보고 있는 코드가 예약인지, 계산인지, 반영인지 빠르게 판별할 수 있습니다.',
      questionLabel: '핵심 질문',
      doesLabel: '하는 일',
      doesNotLabel: '아직 하지 않는 일',
      functionsLabel: '대표 함수',
      columns: [
        {
          phase: 'scheduling',
          question: '무엇을 언제 처리할까?',
          does: 'update lane을 정하고 root에 pending work를 표시하며 작업 예약으로 이어집니다.',
          doesNot: '다음 UI 트리를 계산하지 않습니다. 실제 DOM도 바꾸지 않습니다.',
          functions: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
        },
        {
          phase: 'render',
          question: '다음 결과를 어떻게 계산할까?',
          does: 'Fiber tree를 순회하면서 다음 UI 결과와 변경 표시를 계산합니다.',
          doesNot: '실제 DOM에 반영하지 않습니다. layout effect도 실행하지 않습니다.',
          functions: ['beginWork', 'completeWork', 'performUnitOfWork', 'workLoopConcurrent'],
        },
        {
          phase: 'commit',
          question: '계산 결과를 실제로 어떻게 반영할까?',
          does: 'render phase에서 계산된 flags를 바탕으로 실제 DOM 변경, ref 처리, layout effect 실행 등을 수행합니다.',
          doesNot: '새로운 Fiber tree를 계산하지 않습니다.',
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'commitPassiveMountEffects'],
        },
      ],
    },
    representativeFiles: {
      eyebrow: 'files & functions',
      title: '대표 파일과 대표 함수',
      intro: '함수 하나를 보더라도, 어느 파일과 어느 phase에 있는지 함께 봐야 합니다.',
      filesLabel: '대표 파일',
      functionsLabel: '대표 함수',
      readingPointLabel: '읽기 포인트',
      groups: [
        {
          phase: 'scheduling',
          files: ['ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          functions: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
          readingPoint: 'update가 root에 표시되고 작업 예약으로 이어지는 지점을 확인합니다.',
        },
        {
          phase: 'render',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          functions: ['beginWork', 'completeWork', 'performUnitOfWork'],
          readingPoint: 'Fiber tree를 순회하며 다음 결과를 계산하는 흐름을 확인합니다.',
        },
        {
          phase: 'commit',
          files: ['ReactFiberCommitWork.js'],
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'commitPassiveMountEffects'],
          readingPoint: '계산된 변경 사항이 실제 환경에 반영되는 지점을 확인합니다.',
        },
      ],
    },
    updateFlow: {
      eyebrow: 'update flow by phase',
      title: '같은 update 흐름도 phase에 따라 의미가 달라진다',
      intro: 'setState 이후의 흐름을 하나로 보면 길지만, phase로 나누면 훨씬 읽기 쉬워집니다.',
      flowStart: 'setState',
      blocks: [
        {
          phase: 'scheduling',
          functions: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'markRootUpdated'],
          note: '상태 변경 요청이 작업 예약 정보로 바뀌는 구간입니다.',
        },
        {
          phase: 'render',
          functions: ['beginWork', 'completeWork', 'performUnitOfWork'],
          note: '예약된 작업을 바탕으로 다음 트리를 계산하는 구간입니다.',
        },
        {
          phase: 'commit',
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'DOM 반영', 'effect 실행'],
          note: '계산된 결과를 실제 DOM과 effect에 반영하는 구간입니다.',
        },
      ],
    },
    quiz: {
      eyebrow: 'phase detection quiz',
      title: 'Phase 판별 퀴즈',
      intro: '아래 함수나 코드 조각이 어느 phase에 더 가까운지 판별해봅니다.',
      listLabel: '코드 선택',
      labels: {
        selectedCode: '선택한 코드',
        answer: '정답',
        explanation: '왜 이 phase인가?',
        categories: '전체 phase',
      },
      items: [
        {
          id: 'mark-root-updated',
          code: 'markRootUpdated(root, lane);',
          answer: 'scheduling',
          explanation:
            'root에 update가 발생했다는 정보를 표시하는 단계입니다. 아직 다음 트리를 계산하거나 DOM을 바꾸는 단계가 아닙니다.',
        },
        {
          id: 'complete-work',
          code: 'completeWork(current, workInProgress, renderLanes);',
          answer: 'render',
          explanation:
            'workInProgress Fiber를 완성하며 다음 결과를 계산하는 render phase의 일부입니다. 아직 실제 DOM에 반영하는 commit 단계가 아닙니다.',
        },
        {
          id: 'commit-mutation',
          code: 'commitMutationEffects(root, finishedWork, committedLanes);',
          answer: 'commit',
          explanation:
            'render phase에서 계산된 mutation effect를 실제 환경에 반영하는 commit 단계입니다.',
        },
      ],
    },
    codePreview: {
      eyebrow: 'real code preview',
      title: '실제 코드 미리보기',
      intro: '짧은 코드 조각도 phase를 붙여 읽으면 의미가 선명해집니다.',
      whyLabel: '왜 이 phase인가?',
      cards: [
        {
          phase: 'scheduling',
          code: 'markRootUpdated(root, lane);\nensureRootIsScheduled(root);',
          body: 'root에 pending work를 표시하고 이후 작업 예약으로 이어집니다.',
          why: 'update 발생을 root에 알리고 처리할 시점만 정합니다.',
        },
        {
          phase: 'render',
          code: 'performUnitOfWork(unitOfWork);\ncompleteWork(current, workInProgress, renderLanes);',
          body: 'Fiber 단위 작업을 수행하고 다음 결과를 계산합니다.',
          why: '실제 DOM 변경 없이 다음 트리와 effect 표시만 계산합니다.',
        },
        {
          phase: 'commit',
          code: 'commitMutationEffects(root, finishedWork, committedLanes);\ncommitLayoutEffects(finishedWork, root, committedLanes);',
          body: '계산된 변경 사항을 실제 환경에 반영하고 layout effect를 실행합니다.',
          why: 'render에서 계산된 flags를 바탕으로 DOM과 effect를 실제로 처리합니다.',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, 대표 함수들을 직접 phase별로 분류해봅니다.',
      items: [
        '대표 함수 3개를 각각 Scheduling / Render / Commit으로 분류한다.',
        'scheduleUpdateOnFiber가 왜 render 코드가 아닌지 적는다.',
        'completeWork가 왜 commit이 아니라 render인지 설명한다.',
        'DOM이 실제로 바뀌는 지점을 commit 단계에서 찾는다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: 'React 코드 독해는 phase 판별이 핵심이다.',
          sub: '함수 이름이 같은 흐름 안에 있어도 어느 phase에 있는지가 책임을 결정한다.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Scheduling, Render, Commit은 서로 다른 질문에 답한다.',
          sub: '예약 / 계산 / 반영 — 책임 경계가 다르다.',
          tone: 'violet',
        },
        {
          number: '03',
          text: '같은 update 흐름도 각 phase에서 완전히 다른 역할을 한다.',
          sub: 'phase로 나눠 읽으면 setState부터 DOM 반영까지가 한 줄로 정리된다.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 단계',
      title: '업데이트 흐름은 한 줄 호출 경로로 복원한다',
      description: '단계를 구분했다면, 이제 흩어진 함수를 한 줄 호출 경로로 압축해야 합니다.',
      cta: '다음 페이지로 이동',
      href: '/compress-call-path',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 5/10',
      titleLines: ['Identify whether it is Render, Commit,', 'or Scheduling first'],
      accentTail: 'or Scheduling first',
      description: "Before 'what the code does,' read 'when it runs.'",
      supporting:
        "React's update flow is continuous, but inside it there are separate stages: scheduling work, computing the next tree, and committing changes to the real environment. The meaning of code in the same update flow changes completely depending on which phase it lives in.",
      primaryCta: 'Compare phases',
      secondaryCta: 'Try the detection quiz',
      visualTitle: 'Same update flow — the meaning shifts with the phase.',
      mainFlow: ['Scheduling', 'Render', 'Commit'],
      flowStart: 'setState',
      phaseCards: [
        {
          phase: 'scheduling',
          subtitle: 'Decide what to do.',
          functions: ['requestUpdateLane', 'scheduleUpdateOnFiber'],
          question: 'What to handle, and when?',
          iconKey: 'calendarClock',
        },
        {
          phase: 'render',
          subtitle: 'Compute the next tree.',
          functions: ['beginWork', 'completeWork'],
          question: 'How to compute the next result?',
          iconKey: 'workflow',
        },
        {
          phase: 'commit',
          subtitle: 'Apply to the real environment.',
          functions: ['commitMutationEffects', 'commitLayoutEffects'],
          question: 'How to apply the computed result for real?',
          iconKey: 'monitor',
        },
      ],
      visualCaption: 'Do not read function names alone — identify the execution phase first.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'Why are {sched}, {render},',
        'and {commit}',
        'such different roles inside the same update flow?',
      ],
      emphasizeFns: {
        sched: 'scheduleUpdateOnFiber',
        render: 'beginWork',
        commit: 'commitMutationEffects',
      },
      badges: [
        { label: 'Scheduling', phase: 'scheduling' },
        { label: 'Render', phase: 'render' },
        { label: 'Commit', phase: 'commit' },
        { label: 'Phase detection' },
      ],
    },
    whyPhase: {
      eyebrow: 'why phase matters',
      title: 'Why does the phase distinction matter?',
      intro:
        'Every React internal function can look like "render-related code." In reality, they answer different questions on different stages.',
      questionLabel: 'Representative question',
      cards: [
        {
          phase: 'scheduling',
          title: 'Decide what to do.',
          body: 'Mark what update happened, and decide at what priority and when to process it.',
          representativeQuestion: 'What to handle, and when?',
        },
        {
          phase: 'render',
          title: 'Compute the next tree.',
          body: 'Use the current tree and new input to compute the next Fiber tree and the changes.',
          representativeQuestion: 'How to compute the next result?',
        },
        {
          phase: 'commit',
          title: 'Apply to the real environment.',
          body: 'Apply the changes computed in render to the real environment — DOM, effects, refs.',
          representativeQuestion: 'How to apply the computed result for real?',
        },
      ],
      bannerLines: ['Same update flow,', 'different meaning per phase.'],
    },
    roleComparison: {
      eyebrow: 'role comparison',
      title: 'Scheduling / Render / Commit — role comparison',
      intro:
        'Identifying the phase lets you quickly judge whether the code you are reading is scheduling, computing, or applying.',
      questionLabel: 'Core question',
      doesLabel: 'Does',
      doesNotLabel: 'Does NOT do (yet)',
      functionsLabel: 'Key functions',
      columns: [
        {
          phase: 'scheduling',
          question: 'What to handle, and when?',
          does: 'Decides update lanes, marks pending work on the root, and leads into work scheduling.',
          doesNot: 'Does not compute the next UI tree. Does not touch the real DOM.',
          functions: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
        },
        {
          phase: 'render',
          question: 'How to compute the next result?',
          does: 'Walks the Fiber tree to compute the next UI result and change markers.',
          doesNot: 'Does not apply to the real DOM. Does not run layout effects.',
          functions: ['beginWork', 'completeWork', 'performUnitOfWork', 'workLoopConcurrent'],
        },
        {
          phase: 'commit',
          question: 'How to apply the computed result for real?',
          does: 'Uses flags computed in render to apply real DOM changes, handle refs, run layout effects, and so on.',
          doesNot: 'Does not compute a new Fiber tree.',
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'commitPassiveMountEffects'],
        },
      ],
    },
    representativeFiles: {
      eyebrow: 'files & functions',
      title: 'Key files and functions per phase',
      intro: 'Even for a single function, read it together with its file and its phase.',
      filesLabel: 'Key files',
      functionsLabel: 'Key functions',
      readingPointLabel: 'Reading point',
      groups: [
        {
          phase: 'scheduling',
          files: ['ReactFiberWorkLoop.js', 'ReactFiberRootScheduler.js'],
          functions: [
            'requestUpdateLane',
            'scheduleUpdateOnFiber',
            'markRootUpdated',
            'ensureRootIsScheduled',
          ],
          readingPoint:
            'See the moment an update gets marked on the root and flows into work scheduling.',
        },
        {
          phase: 'render',
          files: ['ReactFiberBeginWork.js', 'ReactFiberCompleteWork.js'],
          functions: ['beginWork', 'completeWork', 'performUnitOfWork'],
          readingPoint: 'Trace how the Fiber tree is walked to compute the next result.',
        },
        {
          phase: 'commit',
          files: ['ReactFiberCommitWork.js'],
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'commitPassiveMountEffects'],
          readingPoint: 'See where the computed changes get applied to the real environment.',
        },
      ],
    },
    updateFlow: {
      eyebrow: 'update flow by phase',
      title: 'Same update flow — meaning shifts with the phase',
      intro:
        'The flow after setState looks long when read as one chunk, but reads much easier when split by phase.',
      flowStart: 'setState',
      blocks: [
        {
          phase: 'scheduling',
          functions: ['requestUpdateLane', 'scheduleUpdateOnFiber', 'markRootUpdated'],
          note: 'State change requests turn into work-scheduling information.',
        },
        {
          phase: 'render',
          functions: ['beginWork', 'completeWork', 'performUnitOfWork'],
          note: 'Use the scheduled work to compute the next tree.',
        },
        {
          phase: 'commit',
          functions: ['commitMutationEffects', 'commitLayoutEffects', 'apply DOM', 'run effects'],
          note: 'Apply the computed result to the real DOM and effects.',
        },
      ],
    },
    quiz: {
      eyebrow: 'phase detection quiz',
      title: 'Phase detection quiz',
      intro: 'Decide which phase each function or snippet belongs to.',
      listLabel: 'Pick a snippet',
      labels: {
        selectedCode: 'Selected code',
        answer: 'Answer',
        explanation: 'Why this phase?',
        categories: 'All phases',
      },
      items: [
        {
          id: 'mark-root-updated',
          code: 'markRootUpdated(root, lane);',
          answer: 'scheduling',
          explanation:
            'Marks on the root that an update happened. Not yet computing the next tree or touching the DOM.',
        },
        {
          id: 'complete-work',
          code: 'completeWork(current, workInProgress, renderLanes);',
          answer: 'render',
          explanation:
            'Part of the render phase that completes the workInProgress Fiber and computes the next result. Not yet the commit phase that applies to the DOM.',
        },
        {
          id: 'commit-mutation',
          code: 'commitMutationEffects(root, finishedWork, committedLanes);',
          answer: 'commit',
          explanation:
            'The commit phase that applies the mutation effects computed in render to the real environment.',
        },
      ],
    },
    codePreview: {
      eyebrow: 'real code preview',
      title: 'Real code preview',
      intro: 'Even a short snippet reads sharper once you label its phase.',
      whyLabel: 'Why this phase?',
      cards: [
        {
          phase: 'scheduling',
          code: 'markRootUpdated(root, lane);\nensureRootIsScheduled(root);',
          body: 'Marks pending work on the root and leads into work scheduling.',
          why: 'Announces the update to the root and pins only when to process it.',
        },
        {
          phase: 'render',
          code: 'performUnitOfWork(unitOfWork);\ncompleteWork(current, workInProgress, renderLanes);',
          body: 'Performs Fiber-unit work and computes the next result.',
          why: 'Computes the next tree and effect markers without touching the real DOM.',
        },
        {
          phase: 'commit',
          code: 'commitMutationEffects(root, finishedWork, committedLanes);\ncommitLayoutEffects(finishedWork, root, committedLanes);',
          body: 'Applies computed changes to the real environment and runs layout effects.',
          why: 'Uses the flags computed in render to actually process the DOM and effects.',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro: 'Do not stop at reading — classify the key functions by phase yourself.',
      items: [
        'Classify the three key functions as Scheduling / Render / Commit.',
        'Write down why scheduleUpdateOnFiber is not render code.',
        'Explain why completeWork is render, not commit.',
        'Find the exact point where the DOM actually changes inside the commit phase.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: 'Phase detection is the core skill of reading React source.',
          sub: 'Inside the same flow, the phase determines what the function is responsible for.',
          tone: 'blue',
        },
        {
          number: '02',
          text: 'Scheduling, Render, and Commit answer different questions.',
          sub: 'Schedule / compute / apply — each owns a different boundary.',
          tone: 'violet',
        },
        {
          number: '03',
          text: 'The same update flow plays a completely different role in each phase.',
          sub: 'Split it by phase and setState → DOM apply collapses to a single line.',
          tone: 'emerald',
        },
      ],
    },
    nextStep: {
      eyebrow: 'Next step',
      title: 'Compress an update flow into a single call path',
      description:
        'Once you can split phases, the next step is to compress the scattered functions into a single call path.',
      cta: 'Go to the next page',
      href: '/compress-call-path',
    },
  },
};
