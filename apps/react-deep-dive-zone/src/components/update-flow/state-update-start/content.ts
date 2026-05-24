import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../getting-started/_shared/tones';

export type HeroStepIconName = 'hand' | 'shield' | 'timer' | 'panels' | 'monitor';

export type HeroFlowStep = {
  id: string;
  title: string;
  description: string;
  tone: ToneKey;
  iconName: HeroStepIconName;
};

export type MisconceptionRow = {
  id: string;
  wrong: string;
  correct: string;
};

export type InternalFlowStepIconName =
  | 'mouse'
  | 'play'
  | 'code'
  | 'flag'
  | 'filePlus'
  | 'database'
  | 'calendar'
  | 'loader';

export type InternalFlowStep = {
  number: string;
  label: string;
  tone: ToneKey;
  iconName: InternalFlowStepIconName;
};

export type StateUpdateStartContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    callout: {
      title: string;
      lines: string[];
      emphasis: string;
    };
    flow: {
      heading: string;
      caption: string;
      steps: HeroFlowStep[];
    };
    reason: {
      title: string;
      body: string;
    };
  };
  visibleCode: {
    number: string;
    eyebrow: string;
    title: string;
    code: {
      fileName: string;
      language: string;
      content: string;
    };
    explain: {
      title: string;
      body: string;
      tag: string;
    };
  };
  misconception: {
    number: string;
    eyebrow: string;
    title: string;
    headerWrong: string;
    headerCorrect: string;
    rows: MisconceptionRow[];
  };
  internalFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: InternalFlowStep[];
    bottomNote: string;
  };
  snapshot: {
    number: string;
    eyebrow: string;
    title: string;
    topNote: string;
    leftCard: {
      title: string;
      subtitle: string;
      pill: string;
      action: string;
      callLine: string;
      callout: string;
      footnote: string;
    };
    middle: {
      label: string;
      sub: string;
    };
    rightCard: {
      title: string;
      subtitle: string;
      pill: string;
      action: string;
      callout: string;
      footnote: string;
    };
  };
  question: {
    number: string;
    eyebrow: string;
    title: string;
    questionLabel: string;
    answerLabel: string;
    question: string;
    answerTitle: string;
    answerBody: string;
    buttonText: string;
  };
  summary: {
    number: string;
    eyebrow: string;
    title: string;
    main: { lead: string; emphasis: string; tail: string };
    sub: string;
    flowLine: string[];
  };
  next: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

const counterCode = `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`;

const ko: StateUpdateStartContent = {
  hero: {
    badge: 'CHAPTER 25',
    title: {
      line1: 'setState를 호출해도',
      line2: 'DOM은 즉시 바뀌지 않습니다.',
    },
    description:
      'React는 먼저 이 컴포넌트에 업데이트 요청이 생겼다는 사실을 기록하고, 우선순위를 정하고, 렌더링을 예약한 뒤 실제 화면 반영으로 넘어갑니다.',
    callout: {
      title: '화면이 바뀌는 순간',
      lines: [
        '화면이 바뀌는 순간은 Commit Phase입니다.',
        'setState는 그보다 훨씬 이전에서 시작됩니다.',
      ],
      emphasis: 'Commit Phase',
    },
    flow: {
      heading: 'setState 이후 흐름',
      caption: '한 줄 호출 뒤에 일어나는 5단계',
      steps: [
        {
          id: 'setstate',
          title: 'setState',
          description: '또는 setCount 등',
          tone: 'sky',
          iconName: 'hand',
        },
        {
          id: 'request',
          title: '업데이트 요청',
          description: '이 컴포넌트에 업데이트가 생김',
          tone: 'cyan',
          iconName: 'shield',
        },
        {
          id: 'schedule',
          title: '스케줄링',
          description: '우선순위 결정 및 작업 예약',
          tone: 'emerald',
          iconName: 'timer',
        },
        {
          id: 'render',
          title: 'Render Phase',
          description: '변경 내용을 계산하고 비교',
          tone: 'violet',
          iconName: 'panels',
        },
        {
          id: 'commit',
          title: 'Commit Phase',
          description: '실제 DOM에 반영',
          tone: 'blue',
          iconName: 'monitor',
        },
      ],
    },
    reason: {
      title: '즉시 바뀌지 않는 이유',
      body: 'React는 효율적이고 일관된 UI 업데이트를 위해 여러 단계를 거칩니다.',
    },
  },
  visibleCode: {
    number: '01',
    eyebrow: '겉으로 보이는 코드',
    title: '사용자에게 보이는 코드',
    code: {
      fileName: 'Counter.js',
      language: 'JS',
      content: counterCode,
    },
    explain: {
      title: '겉으로 보이는 것은 단 한 줄',
      body: '사용자에게는 setCount 한 줄만 보이지만, React 내부에서는 긴 업데이트 준비 과정이 시작됩니다.',
      tag: 'setCount(count + 1)',
    },
  },
  misconception: {
    number: '02',
    eyebrow: '오해와 실제',
    title: '흔한 생각 vs 실제 React 흐름',
    headerWrong: '흔한 생각 (오해)',
    headerCorrect: '실제 React 흐름 (정확한 이해)',
    rows: [
      {
        id: 'row-1',
        wrong: 'setState가 DOM을 바로 바꾼다',
        correct: 'setState는 업데이트 요청을 시작한다',
      },
      {
        id: 'row-2',
        wrong: '값이 바뀌면 화면도 즉시 바뀐다',
        correct: '화면 반영은 Render와 Commit 이후다',
      },
      {
        id: 'row-3',
        wrong: 'setter가 값을 직접 덮어쓴다',
        correct: 'React는 update 객체와 queue를 사용한다',
      },
      {
        id: 'row-4',
        wrong: '여러 setState는 모두 즉시 처리된다',
        correct: '우선순위(lane)에 따라 순서대로 처리될 수 있다',
      },
    ],
  },
  internalFlow: {
    number: '03',
    eyebrow: '내부 흐름 미리보기',
    title: 'setState 이후 내부 흐름 미리보기',
    description:
      '이후 페이지에서 확대해서 볼 8단계를 한 번에 미리 봅니다. 각 단계는 별도의 페이지에서 코드로 다시 확인합니다.',
    steps: [
      { number: '1', label: '사용자 클릭', tone: 'sky', iconName: 'mouse' },
      { number: '2', label: 'setState 호출', tone: 'sky', iconName: 'play' },
      { number: '3', label: 'dispatchSetState 실행', tone: 'cyan', iconName: 'code' },
      { number: '4', label: 'lane(우선순위) 선택', tone: 'emerald', iconName: 'flag' },
      { number: '5', label: 'update 객체 생성', tone: 'teal', iconName: 'filePlus' },
      { number: '6', label: 'queue에 등록', tone: 'violet', iconName: 'database' },
      { number: '7', label: 'Root 스케줄링', tone: 'indigo', iconName: 'calendar' },
      { number: '8', label: 'Render Phase 준비', tone: 'blue', iconName: 'loader' },
    ],
    bottomNote: '이 챕터 이후 페이지에서 각 단계를 하나씩 코드로 확인합니다.',
  },
  snapshot: {
    number: '04',
    eyebrow: '렌더 스냅샷',
    title: 'State는 현재 렌더의 스냅샷처럼 보인다',
    topNote: '이벤트 핸들러 안의 count 값은 그 렌더 시점의 count를 본다.',
    leftCard: {
      title: '현재 렌더',
      subtitle: '(이벤트 발생 순간)',
      pill: 'count = 0',
      action: 'onClick 핸들러 실행',
      callLine: 'setCount(count + 1)',
      callout: '여기서의 count는 0 — 이 렌더의 스냅샷',
      footnote: '상태는 아직 변경되지 않음',
    },
    middle: {
      label: '업데이트 요청',
      sub: 'Queue에 등록',
    },
    rightCard: {
      title: '다음 렌더',
      subtitle: '(이후 처리 후)',
      pill: 'count = 1',
      action: '새 렌더가 일어나면\n그때 state가 반영됨',
      callout: '이후 화면이 갱신됨',
      footnote: '(Commit 이후)',
    },
  },
  question: {
    number: '05',
    eyebrow: '학습 질문',
    title: '학습 질문',
    questionLabel: '질문',
    answerLabel: '정답',
    question: 'setState가 호출되는 순간 React가 가장 먼저 해야 할 일은 무엇일까?',
    answerTitle: '어떤 Fiber에 업데이트가 생겼는지 기록할 준비를 하는 것이다.',
    answerBody:
      '업데이트 요청을 해당 Fiber와 연결하고, 우선순위(lane)를 정하고, queue에 등록하는 것이 가장 먼저 일어난다.',
    buttonText: '정답 접기',
  },
  summary: {
    number: '06',
    eyebrow: '핵심 요약',
    title: '핵심 요약',
    main: {
      lead: 'setState는 화면 반영 명령이 아니라,',
      emphasis: '업데이트 처리 흐름의 출발점',
      tail: '이다.',
    },
    sub: '요청 기록 → 우선순위 결정 → 스케줄링 → 계산(Render) → 반영(Commit) — 이 긴 여정의 첫 걸음이 바로 setState다.',
    flowLine: ['요청 기록', '우선순위 결정', '스케줄링', '계산(Render)', '반영(Commit)'],
  },
  next: {
    number: '07',
    eyebrow: '다음 단계로',
    title: '다음 단계로',
    description:
      'setState가 즉시 DOM을 바꾸는 함수가 아니라는 점을 이해했다면, 이제 그 setState 함수가 어떻게 Fiber와 queue를 기억하는지 살펴봅니다.',
    buttonLabel: '다음: setState 함수는 어떻게 Fiber와 queue를 기억하나?',
    buttonHref: '/dispatch-set-state',
  },
};

const en: StateUpdateStartContent = {
  hero: {
    badge: 'CHAPTER 25',
    title: {
      line1: 'Calling setState does not',
      line2: 'change the DOM immediately.',
    },
    description:
      'React first records that an update was requested on this component, decides its priority, schedules the render, and only then moves on to the actual screen update.',
    callout: {
      title: 'When the screen actually changes',
      lines: [
        'The screen changes during the Commit Phase.',
        'setState starts much earlier than that.',
      ],
      emphasis: 'Commit Phase',
    },
    flow: {
      heading: 'What happens after setState',
      caption: 'The five stages behind a single call',
      steps: [
        {
          id: 'setstate',
          title: 'setState',
          description: 'or setCount, etc.',
          tone: 'sky',
          iconName: 'hand',
        },
        {
          id: 'request',
          title: 'Update request',
          description: 'An update is queued for this component',
          tone: 'cyan',
          iconName: 'shield',
        },
        {
          id: 'schedule',
          title: 'Scheduling',
          description: 'Pick a priority and schedule the work',
          tone: 'emerald',
          iconName: 'timer',
        },
        {
          id: 'render',
          title: 'Render Phase',
          description: 'Compute and compare the changes',
          tone: 'violet',
          iconName: 'panels',
        },
        {
          id: 'commit',
          title: 'Commit Phase',
          description: 'Apply the result to the real DOM',
          tone: 'blue',
          iconName: 'monitor',
        },
      ],
    },
    reason: {
      title: 'Why it is not instant',
      body: 'React goes through several stages to keep UI updates efficient and consistent.',
    },
  },
  visibleCode: {
    number: '01',
    eyebrow: 'The visible code',
    title: 'The code the user actually writes',
    code: {
      fileName: 'Counter.js',
      language: 'JS',
      content: counterCode,
    },
    explain: {
      title: 'What you see is just one line',
      body: 'The user only sees the setCount line, but a long update-preparation flow starts inside React.',
      tag: 'setCount(count + 1)',
    },
  },
  misconception: {
    number: '02',
    eyebrow: 'Myth vs reality',
    title: 'Common belief vs the actual React flow',
    headerWrong: 'Common belief (myth)',
    headerCorrect: 'Actual React flow (correct)',
    rows: [
      {
        id: 'row-1',
        wrong: 'setState immediately mutates the DOM',
        correct: 'setState starts an update request',
      },
      {
        id: 'row-2',
        wrong: 'When the value changes, the screen changes too',
        correct: 'The screen reflects the change after Render and Commit',
      },
      {
        id: 'row-3',
        wrong: 'The setter overwrites the value directly',
        correct: 'React uses update objects and a queue',
      },
      {
        id: 'row-4',
        wrong: 'Multiple setStates all run instantly',
        correct: 'They may be processed in priority (lane) order',
      },
    ],
  },
  internalFlow: {
    number: '03',
    eyebrow: 'Internal flow preview',
    title: 'A preview of the internals after setState',
    description:
      'These are the eight stages that later pages will zoom into one by one with real source code.',
    steps: [
      { number: '1', label: 'User click', tone: 'sky', iconName: 'mouse' },
      { number: '2', label: 'setState called', tone: 'sky', iconName: 'play' },
      { number: '3', label: 'dispatchSetState runs', tone: 'cyan', iconName: 'code' },
      { number: '4', label: 'Pick a lane (priority)', tone: 'emerald', iconName: 'flag' },
      { number: '5', label: 'Create the update object', tone: 'teal', iconName: 'filePlus' },
      { number: '6', label: 'Enqueue on the queue', tone: 'violet', iconName: 'database' },
      { number: '7', label: 'Schedule on the root', tone: 'indigo', iconName: 'calendar' },
      { number: '8', label: 'Prepare the render phase', tone: 'blue', iconName: 'loader' },
    ],
    bottomNote: 'Each stage gets its own page later in this chapter, with the matching code.',
  },
  snapshot: {
    number: '04',
    eyebrow: 'Render snapshot',
    title: 'State looks like a snapshot of the current render',
    topNote: 'The count inside an event handler is the count from that render.',
    leftCard: {
      title: 'Current render',
      subtitle: '(moment the event fires)',
      pill: 'count = 0',
      action: 'onClick handler runs',
      callLine: 'setCount(count + 1)',
      callout: 'count here is 0 — a snapshot of this render',
      footnote: 'State has not changed yet',
    },
    middle: {
      label: 'Update request',
      sub: 'Enqueued in the queue',
    },
    rightCard: {
      title: 'Next render',
      subtitle: '(after processing)',
      pill: 'count = 1',
      action: 'When a new render happens,\nthe state is reflected',
      callout: 'The screen updates afterwards',
      footnote: '(after Commit)',
    },
  },
  question: {
    number: '05',
    eyebrow: 'Learning question',
    title: 'Learning question',
    questionLabel: 'Question',
    answerLabel: 'Answer',
    question: 'The instant setState is called, what is the very first thing React has to do?',
    answerTitle: 'Get ready to record which Fiber the update belongs to.',
    answerBody:
      'Link the update request to that Fiber, choose its priority (lane), and enqueue it — that all happens first.',
    buttonText: 'Hide answer',
  },
  summary: {
    number: '06',
    eyebrow: 'Key summary',
    title: 'Key summary',
    main: {
      lead: 'setState is not a "paint the screen" command —',
      emphasis: "it's where the update pipeline begins",
      tail: '.',
    },
    sub: 'Record → choose priority → schedule → compute (Render) → apply (Commit). setState is the first step of that long journey.',
    flowLine: ['Record', 'Pick priority', 'Schedule', 'Compute (Render)', 'Apply (Commit)'],
  },
  next: {
    number: '07',
    eyebrow: 'Next up',
    title: 'Up next',
    description:
      'Now that you know setState does not immediately change the DOM, look at how the setState function remembers its Fiber and queue.',
    buttonLabel: 'Next: How setState remembers its Fiber and queue',
    buttonHref: '/dispatch-set-state',
  },
};

export const stateUpdateStartContent: Record<Locale, StateUpdateStartContent> = { ko, en };
