import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type DispatchResponsibilityIcon = 'target' | 'box' | 'zap';

export type DispatchResponsibility = {
  number: string;
  title: string;
  code: string;
  body: string;
  tone: ToneKey;
  icon: DispatchResponsibilityIcon;
};

export type LaneFlowIcon = 'crosshair' | 'database' | 'server' | 'penTool';

export type LaneFlowStep = {
  number: string;
  title: string;
  body: string;
  tone: ToneKey;
  icon: LaneFlowIcon;
};

export type FunctionSplitIcon = 'workflow' | 'box';

export type FunctionSplitCard = {
  title: string;
  items: string[];
  tone: ToneKey;
  icon: FunctionSplitIcon;
  badge: string;
};

export type DispatchSetStateEntryContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    leftCard: { title: string; code: string };
    centerCard: { title: string; main: string; sub: string };
    rightCard: { title: string; code: string };
    bottomCallout: string;
  };
  compare: {
    eyebrow: string;
    title: string;
    leftCard: { title: string; code: string };
    rightCard: { title: string; code: string };
    sideNote: { title: string; body: string; tags: string[] };
  };
  responsibilities: {
    eyebrow: string;
    title: string;
    description: string;
    cards: DispatchResponsibility[];
  };
  checkpoint: {
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    functionLabel: string;
    functionName: string;
    learningQuestion: string;
    codeHeader: string;
    codeBadge: string;
    code: string;
    primaryHref: string;
    primaryCta: string;
  };
  laneReason: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: LaneFlowStep[];
  };
  splitReason: {
    eyebrow: string;
    title: string;
    description: string;
    leftCard: FunctionSplitCard;
    rightCard: FunctionSplitCard;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const checkpointCode = `function dispatchSetState(
  fiber,
  queue,
  action,
): void {
  const lane = requestUpdateLane(fiber);

  const didScheduleUpdate =
    dispatchSetStateInternal(
      fiber,
      queue,
      action,
      lane,
    );

  if (didScheduleUpdate) {
    startUpdateTimerByLane(
      lane,
      'setState()',
      fiber,
    );
  }
}`;

const githubHref =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js';

const ko: DispatchSetStateEntryContent = {
  hero: {
    badge: '업데이트 시작 · 3/10단계',
    title: {
      line1: 'setState의 내부 진입점은',
      line2: 'dispatchSetState입니다.',
    },
    description:
      '사용자가 상태 변경을 요청하면 React는 먼저 이 업데이트를 어떤 우선순위로 처리할지 lane을 고르고, 실제 update 생성과 queue 처리는 다음 함수로 넘깁니다.',
    leftCard: {
      title: '사용자 코드',
      code: 'setCount(count + 1)',
    },
    centerCard: {
      title: 'React 내부 진입점',
      main: 'dispatchSetState',
      sub: '(fiber, queue, action)',
    },
    rightCard: {
      title: '내부 처리 위임',
      code: 'dispatchSetStateInternal(..., lane)',
    },
    bottomCallout: '이 함수가 lane을 고르고, 실제 처리는 내부 함수로 위임합니다.',
  },
  compare: {
    eyebrow: '01 · 진입 흐름',
    title: 'setCount → dispatchSetState',
    leftCard: {
      title: '사용자가 호출하는 코드',
      code: 'setCount(count + 1);',
    },
    rightCard: {
      title: 'React 내부 진입 함수',
      code: 'dispatchSetState(\n  fiber,\n  queue,\n  action,\n);',
    },
    sideNote: {
      title: 'action의 의미',
      body: 'action은 setter에 전달한 값 또는 updater 함수다.',
      tags: ['value', 'updater fn'],
    },
  },
  responsibilities: {
    eyebrow: '02 · 진입점의 책임',
    title: 'dispatchSetState가 하는 3가지',
    description:
      'dispatchSetState 본체는 짧지만, 세 가지 책임을 분명히 가지고 있다. 각 책임이 다음 단계로 어떻게 이어지는지 확인합니다.',
    cards: [
      {
        number: '1',
        title: 'lane 선택',
        code: 'requestUpdateLane(fiber);',
        body: '이 업데이트가 어떤 우선순위(lane)에 속하는지 결정합니다.',
        tone: 'emerald',
        icon: 'target',
      },
      {
        number: '2',
        title: '내부 처리 위임',
        code: 'dispatchSetStateInternal(...);',
        body: '실제 update 생성, queue 연결, bailout 판단 등을 내부 함수로 위임합니다.',
        tone: 'sky',
        icon: 'box',
      },
      {
        number: '3',
        title: '실제 scheduling 여부 기록',
        code: 'didScheduleUpdate 체크',
        body: '내부 처리 결과에 따라 스케줄링을 시작할지 결정합니다.',
        tone: 'violet',
        icon: 'zap',
      },
    ],
  },
  checkpoint: {
    eyebrow: '03 · 코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    functionLabel: '함수',
    functionName: 'dispatchSetState',
    learningQuestion: 'dispatchSetState는 직접 update queue까지 처리할까?',
    codeHeader: 'ReactFiberHooks.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'GitHub에서 dispatchSetState 보기',
  },
  laneReason: {
    eyebrow: '04 · lane 우선 이유',
    title: 'lane 선택이 먼저 등장하는 이유',
    intro:
      'React는 update를 만들기 전에 이 업데이트가 어떤 우선순위에 속하는지 먼저 정합니다. 모든 이후 단계는 이 lane을 기준으로 진행됩니다.',
    steps: [
      {
        number: '1',
        title: 'lane',
        body: '우선순위 결정',
        tone: 'sky',
        icon: 'crosshair',
      },
      {
        number: '2',
        title: 'queue',
        body: '업데이트 흐름 준비',
        tone: 'cyan',
        icon: 'database',
      },
      {
        number: '3',
        title: 'Root scheduling',
        body: '루트 단위 스케줄링',
        tone: 'teal',
        icon: 'server',
      },
      {
        number: '4',
        title: 'render work 선택',
        body: '실제 렌더 작업 선택',
        tone: 'violet',
        icon: 'penTool',
      },
    ],
  },
  splitReason: {
    eyebrow: '05 · 역할 분리',
    title: 'dispatchSetState와 dispatchSetStateInternal 분리 이유',
    description:
      '외부 진입점은 lane을 고르는 일에만 집중하고, 내부 함수는 실제 update 객체 생성과 queue 처리에 집중합니다.',
    leftCard: {
      title: 'dispatchSetState',
      items: ['외부 진입점', 'lane 선택', '업데이트 흐름 시작'],
      tone: 'sky',
      icon: 'workflow',
      badge: '외부',
    },
    rightCard: {
      title: 'dispatchSetStateInternal',
      items: ['update 객체 생성', 'bailout 판단', 'queue 연결'],
      tone: 'violet',
      icon: 'box',
      badge: '내부',
    },
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'lane 선택과 update 객체 생성',
    description:
      '업데이트 진입점에서 lane이 선택된다는 점을 봤다면, 이제 React가 실제 update 객체를 어떻게 만드는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/lane-selection',
  },
};

const en: DispatchSetStateEntryContent = {
  hero: {
    badge: 'Update Flow · 3/10',
    title: {
      line1: 'The internal entry point of setState',
      line2: 'is dispatchSetState.',
    },
    description:
      'When the user requests a state change, React first picks the lane (priority) to use, then delegates the actual update creation and queue work to the next function.',
    leftCard: {
      title: 'User code',
      code: 'setCount(count + 1)',
    },
    centerCard: {
      title: 'Internal entry point',
      main: 'dispatchSetState',
      sub: '(fiber, queue, action)',
    },
    rightCard: {
      title: 'Delegate to internal',
      code: 'dispatchSetStateInternal(..., lane)',
    },
    bottomCallout: 'It picks the lane; real work is delegated to the internal function.',
  },
  compare: {
    eyebrow: '01 · ENTRY FLOW',
    title: 'setCount → dispatchSetState',
    leftCard: {
      title: 'What the user calls',
      code: 'setCount(count + 1);',
    },
    rightCard: {
      title: 'React internal entry',
      code: 'dispatchSetState(\n  fiber,\n  queue,\n  action,\n);',
    },
    sideNote: {
      title: 'About action',
      body: 'action is the value or updater function passed to the setter.',
      tags: ['value', 'updater fn'],
    },
  },
  responsibilities: {
    eyebrow: '02 · RESPONSIBILITIES',
    title: 'Three things dispatchSetState does',
    description:
      'The body of dispatchSetState is short but carries three clear responsibilities. Follow how each one feeds into the next stage.',
    cards: [
      {
        number: '1',
        title: 'Pick a lane',
        code: 'requestUpdateLane(fiber);',
        body: 'Decide which priority (lane) this update belongs to.',
        tone: 'emerald',
        icon: 'target',
      },
      {
        number: '2',
        title: 'Delegate to internal',
        code: 'dispatchSetStateInternal(...);',
        body: 'Forward update creation, queue connection, and bailout decisions to the internal function.',
        tone: 'sky',
        icon: 'box',
      },
      {
        number: '3',
        title: 'Record scheduling result',
        code: 'check didScheduleUpdate',
        body: 'Decide whether to kick off scheduling based on the internal result.',
        tone: 'violet',
        icon: 'zap',
      },
    ],
  },
  checkpoint: {
    eyebrow: '03 · CODE CHECKPOINT',
    title: 'Source checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHooks.js',
    functionLabel: 'Function',
    functionName: 'dispatchSetState',
    learningQuestion: 'Does dispatchSetState itself touch the update queue?',
    codeHeader: 'ReactFiberHooks.js',
    codeBadge: 'main',
    code: checkpointCode,
    primaryHref: githubHref,
    primaryCta: 'View dispatchSetState on GitHub',
  },
  laneReason: {
    eyebrow: '04 · WHY LANE FIRST',
    title: 'Why lane selection comes first',
    intro:
      'Before creating any update, React decides which priority bucket the update belongs to. Every later stage uses that lane as its anchor.',
    steps: [
      {
        number: '1',
        title: 'lane',
        body: 'decide priority',
        tone: 'sky',
        icon: 'crosshair',
      },
      {
        number: '2',
        title: 'queue',
        body: 'prepare update flow',
        tone: 'cyan',
        icon: 'database',
      },
      {
        number: '3',
        title: 'Root scheduling',
        body: 'schedule on the root',
        tone: 'teal',
        icon: 'server',
      },
      {
        number: '4',
        title: 'render work',
        body: 'pick render work',
        tone: 'violet',
        icon: 'penTool',
      },
    ],
  },
  splitReason: {
    eyebrow: '05 · SPLIT OF DUTIES',
    title: 'Why dispatchSetState and dispatchSetStateInternal are split',
    description:
      'The outer entry stays focused on picking a lane; the inner function focuses on building the update object and connecting the queue.',
    leftCard: {
      title: 'dispatchSetState',
      items: ['Outer entry', 'Picks the lane', 'Starts the update flow'],
      tone: 'sky',
      icon: 'workflow',
      badge: 'outer',
    },
    rightCard: {
      title: 'dispatchSetStateInternal',
      items: ['Builds the update object', 'Decides bailout', 'Connects to the queue'],
      tone: 'violet',
      icon: 'box',
      badge: 'inner',
    },
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'lane selection and update object creation',
    description:
      'Now that you have seen the lane chosen at the entry point, see how React actually builds the update object next.',
    cta: 'Go to the next page',
    href: '/lane-selection',
  },
};

export const dispatchSetStateEntryContent: Record<Locale, DispatchSetStateEntryContent> = {
  ko,
  en,
};
