import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'throw' | 'climb' | 'capture' | 'fallback';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type HookId = 'derived-state' | 'did-catch' | 'no-function';

export type BoundaryHook = {
  id: HookId;
  name: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type CaptureStepId = 'throw' | 'climb' | 'qualify' | 'enqueue' | 'rerender';

export type CaptureStep = {
  id: CaptureStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type CatchRow = {
  place: string;
  caught: string;
  why: string;
};

export type ErrorBoundaryRecoverContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  hooks: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: BoundaryHook[];
    note: string;
  };
  capture: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: CaptureStep[];
    note: string;
  };
  coverage: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: CatchRow[];
    note: string;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ERROR_CAPTURE_CODE = `// 1. 위로 올라가며 Error Boundary 자격을 확인한다
let workInProgress = returnFiber;
do {
  switch (workInProgress.tag) {
    case HostRoot: {
      workInProgress.flags |= ShouldCapture;
      const update = createRootErrorUpdate(root, wrapperError, lane);
      enqueueCapturedUpdate(workInProgress, update);
      return false;
    }
    case ClassComponent: {
      const ctor = workInProgress.type;
      const instance = workInProgress.stateNode;

      if (
        (workInProgress.flags & DidCapture) === NoFlags &&
        (typeof ctor.getDerivedStateFromError === 'function' ||
          (instance !== null &&
            typeof instance.componentDidCatch === 'function'))
      ) {
        workInProgress.flags |= ShouldCapture;
        const update = createClassErrorUpdate(lane);
        enqueueCapturedUpdate(workInProgress, update);
        return false;
      }
      break;
    }
  }
  workInProgress = workInProgress.return;
} while (workInProgress !== null);

// 2. captured update가 실행되면 state가 바뀌어 fallback이 렌더된다
function createClassErrorUpdate(lane) {
  const update = createUpdate(lane);
  update.tag = CaptureUpdate;
  return update;
}`;

const REACT_FIBER_THROW_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const ko: ErrorBoundaryRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 5/10단계',
    title: { line1: 'Error Boundary는 try/catch가 아니다', line2: '상태를 바꾸는 업데이트다' },
    description:
      '예외를 삼키는 것이 아니라, 경계 컴포넌트에 "에러 상태로 바뀌라"는 업데이트를 걸어 다시 렌더합니다.',
    diagramBadge: 'error path',
    diagramCaption: 'throw → climb → capture',
    stages: [
      {
        id: 'throw',
        label: 'throw new Error()',
        caption: '컴포넌트 렌더 도중 예외 발생',
        tone: 'sky',
      },
      {
        id: 'climb',
        label: 'return 포인터로 상승',
        caption: '자격 있는 경계를 찾을 때까지',
        tone: 'indigo',
      },
      {
        id: 'capture',
        label: 'captured update 등록',
        caption: '경계의 state를 에러 상태로',
        tone: 'amber',
      },
      {
        id: 'fallback',
        label: 'fallback 렌더',
        caption: '바뀐 state로 다시 렌더한 결과',
        tone: 'emerald',
      },
    ],
  },
  hooks: {
    badge: '01',
    eyebrow: 'what qualifies',
    title: '무엇이 경계 자격을 만드는가',
    description:
      '컴포넌트 이름이나 prop이 아니라, 두 메서드 중 하나를 가지고 있느냐가 기준입니다. 그래서 클래스 컴포넌트여야 합니다.',
    items: [
      {
        id: 'derived-state',
        name: 'getDerivedStateFromError',
        role: '렌더 단계',
        description:
          '에러를 받아 새 state를 돌려줍니다. 이 state로 fallback을 그리므로 순수해야 합니다.',
        tone: 'amber',
      },
      {
        id: 'did-catch',
        name: 'componentDidCatch',
        role: '커밋 단계',
        description: '에러와 스택 정보를 받습니다. 로깅 같은 부수 효과를 넣는 자리입니다.',
        tone: 'violet',
      },
      {
        id: 'no-function',
        name: '함수 컴포넌트는 불가',
        role: '아직 없음',
        description:
          '대응하는 Hook이 없어 직접 만들 수 없습니다. 라이브러리도 내부는 클래스로 구현합니다.',
        tone: 'sky',
      },
    ],
    note: '둘 중 하나만 있어도 경계로 인정됩니다. 보통은 fallback을 그리는 getDerivedStateFromError를 씁니다.',
  },
  capture: {
    badge: '02',
    eyebrow: 'capture flow',
    title: '예외가 fallback이 되기까지',
    description:
      'Suspense와 구조는 같습니다. 다만 경계에 거는 것이 fallback 전환 플래그가 아니라 state를 바꾸는 업데이트입니다.',
    steps: [
      {
        id: 'throw',
        num: '01',
        title: '렌더 도중 throw',
        description: '컴포넌트 함수 실행 중 예외가 나서 beginWork가 중단됩니다.',
        tone: 'sky',
      },
      {
        id: 'climb',
        num: '02',
        title: 'return으로 상승',
        description: '실패한 Fiber의 부모부터 루트 방향으로 하나씩 올라갑니다.',
        tone: 'indigo',
      },
      {
        id: 'qualify',
        num: '03',
        title: '자격 확인',
        description:
          'ClassComponent이면서 두 메서드 중 하나가 있고, 아직 DidCapture가 아닌 Fiber를 찾습니다.',
        tone: 'cyan',
      },
      {
        id: 'enqueue',
        num: '04',
        title: 'CaptureUpdate 등록',
        description:
          '그 경계의 updateQueue에 tag가 CaptureUpdate인 업데이트를 넣습니다. 일반 setState와 같은 통로입니다.',
        tone: 'amber',
      },
      {
        id: 'rerender',
        num: '05',
        title: '바뀐 state로 재렌더',
        description: 'getDerivedStateFromError가 돌려준 state가 반영되어 fallback이 그려집니다.',
        tone: 'emerald',
      },
    ],
    note: '04가 핵심입니다. 별도 메커니즘이 아니라 평소 쓰던 update queue를 그대로 씁니다. 그래서 fallback도 그냥 렌더 결과입니다.',
  },
  coverage: {
    badge: '03',
    eyebrow: 'coverage',
    title: '잡히는 에러와 잡히지 않는 에러',
    description:
      'Error Boundary는 렌더 트리를 타고 전파되는 예외만 잡습니다. 그 바깥에서 난 것은 그대로 브라우저로 갑니다.',
    headers: ['어디서 난 에러인가', '잡히나', '왜 그런가'],
    rows: [
      {
        place: '렌더 중 (컴포넌트 본문)',
        caught: '잡힌다',
        why: 'beginWork가 try로 감싸고 있어 던져진 값이 throwException으로 전달됩니다.',
      },
      {
        place: 'useEffect 콜백 안',
        caught: '잡힌다',
        why: 'React가 effect 실행도 감싸고 있어 해당 Fiber 기준으로 경계를 찾습니다.',
      },
      {
        place: '이벤트 핸들러 안',
        caught: '잡히지 않는다',
        why: '렌더 트리 바깥에서 실행됩니다. try/catch로 직접 처리해야 합니다.',
      },
      {
        place: 'setTimeout 콜백',
        caught: '잡히지 않는다',
        why: '호출 스택이 React와 분리되어 어느 Fiber의 일인지 알 수 없습니다.',
      },
      {
        place: '경계 자기 자신의 렌더',
        caught: '잡히지 않는다',
        why: '자기가 낸 에러는 자기가 못 잡습니다. 더 위의 경계로 올라갑니다.',
      },
    ],
    note: '세 번째 줄이 가장 흔한 오해입니다. 이벤트 핸들러의 에러는 Error Boundary에 닿지 않습니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: '볼 것',
    lookFor: 'createClassErrorUpdate, enqueueCapturedUpdate, CaptureUpdate, ShouldCapture',
    whyLabel: '설명',
    why: 'update.tag가 CaptureUpdate라는 점이, 에러 처리가 별도 시스템이 아니라 평범한 업데이트임을 보여 줍니다.',
    code: ERROR_CAPTURE_CODE,
    primaryCta: 'ReactFiberThrow.js 읽기',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'React 19가 바꾼 에러 보고',
    description:
      '잡힌 에러와 못 잡은 에러를 어디로 보낼지가 React 19에서 새 옵션으로 정리됐습니다.',
    cta: '다음 페이지로 이동',
    href: '/react-19-error-reporting',
  },
};

const ERROR_CAPTURE_CODE_EN = `// 1. climb upward checking for Error Boundary eligibility
let workInProgress = returnFiber;
do {
  switch (workInProgress.tag) {
    case HostRoot: {
      workInProgress.flags |= ShouldCapture;
      const update = createRootErrorUpdate(root, wrapperError, lane);
      enqueueCapturedUpdate(workInProgress, update);
      return false;
    }
    case ClassComponent: {
      const ctor = workInProgress.type;
      const instance = workInProgress.stateNode;

      if (
        (workInProgress.flags & DidCapture) === NoFlags &&
        (typeof ctor.getDerivedStateFromError === 'function' ||
          (instance !== null &&
            typeof instance.componentDidCatch === 'function'))
      ) {
        workInProgress.flags |= ShouldCapture;
        const update = createClassErrorUpdate(lane);
        enqueueCapturedUpdate(workInProgress, update);
        return false;
      }
      break;
    }
  }
  workInProgress = workInProgress.return;
} while (workInProgress !== null);

// 2. once the captured update runs, state changes and the fallback renders
function createClassErrorUpdate(lane) {
  const update = createUpdate(lane);
  update.tag = CaptureUpdate;
  return update;
}`;

const en: ErrorBoundaryRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 5/10',
    title: { line1: 'An Error Boundary is not a try/catch', line2: 'it is a state update' },
    description:
      'Rather than swallowing the exception, React queues an update on the boundary telling it to enter its error state, then re-renders.',
    diagramBadge: 'error path',
    diagramCaption: 'throw → climb → capture',
    stages: [
      {
        id: 'throw',
        label: 'throw new Error()',
        caption: 'an exception during component render',
        tone: 'sky',
      },
      {
        id: 'climb',
        label: 'Climb the return pointers',
        caption: 'until a qualified boundary is found',
        tone: 'indigo',
      },
      {
        id: 'capture',
        label: 'Queue a captured update',
        caption: 'move the boundary into its error state',
        tone: 'amber',
      },
      {
        id: 'fallback',
        label: 'Render the fallback',
        caption: 'the result of re-rendering with new state',
        tone: 'emerald',
      },
    ],
  },
  hooks: {
    badge: '01',
    eyebrow: 'what qualifies',
    title: 'What makes a component a boundary',
    description:
      'Not a name or a prop, but whether it owns one of two methods — which is why it has to be a class component.',
    items: [
      {
        id: 'derived-state',
        name: 'getDerivedStateFromError',
        role: 'Render phase',
        description:
          'Receives the error and returns new state. The fallback renders from it, so it must be pure.',
        tone: 'amber',
      },
      {
        id: 'did-catch',
        name: 'componentDidCatch',
        role: 'Commit phase',
        description:
          'Receives the error and stack info. This is where logging side effects belong.',
        tone: 'violet',
      },
      {
        id: 'no-function',
        name: 'Function components cannot',
        role: 'Not yet available',
        description:
          'There is no matching Hook, so you cannot write one. Libraries also implement it as a class inside.',
        tone: 'sky',
      },
    ],
    note: 'Either method alone qualifies. In practice getDerivedStateFromError is used, since it is what draws the fallback.',
  },
  capture: {
    badge: '02',
    eyebrow: 'capture flow',
    title: 'From exception to fallback',
    description:
      'The structure matches Suspense. The difference is what gets queued: a state-changing update rather than a fallback flag.',
    steps: [
      {
        id: 'throw',
        num: '01',
        title: 'A throw during render',
        description: 'An exception inside the component function aborts beginWork.',
        tone: 'sky',
      },
      {
        id: 'climb',
        num: '02',
        title: 'Climb through return',
        description: 'Starting at the failed Fiber parent, move up one level at a time.',
        tone: 'indigo',
      },
      {
        id: 'qualify',
        num: '03',
        title: 'Check eligibility',
        description:
          'Look for a ClassComponent with one of the two methods that is not already DidCapture.',
        tone: 'cyan',
      },
      {
        id: 'enqueue',
        num: '04',
        title: 'Queue a CaptureUpdate',
        description:
          'An update tagged CaptureUpdate goes into that boundary updateQueue — the same channel as setState.',
        tone: 'amber',
      },
      {
        id: 'rerender',
        num: '05',
        title: 'Re-render with new state',
        description:
          'The state returned by getDerivedStateFromError applies and the fallback draws.',
        tone: 'emerald',
      },
    ],
    note: 'Step 04 is the crux: no special mechanism, just the ordinary update queue — which is why the fallback is simply a render result.',
  },
  coverage: {
    badge: '03',
    eyebrow: 'coverage',
    title: 'Errors it catches and errors it does not',
    description:
      'An Error Boundary only catches exceptions that propagate through the render tree. Anything outside goes straight to the browser.',
    headers: ['Where the error happened', 'Caught', 'Why'],
    rows: [
      {
        place: 'During render (component body)',
        caught: 'Caught',
        why: 'beginWork wraps it in a try, so the thrown value reaches throwException.',
      },
      {
        place: 'Inside a useEffect callback',
        caught: 'Caught',
        why: 'React also wraps effect execution and looks for a boundary from that Fiber.',
      },
      {
        place: 'Inside an event handler',
        caught: 'Not caught',
        why: 'It runs outside the render tree, so you have to handle it with try/catch yourself.',
      },
      {
        place: 'Inside a setTimeout callback',
        caught: 'Not caught',
        why: 'The call stack is detached from React, so no Fiber can be attributed.',
      },
      {
        place: 'The boundary own render',
        caught: 'Not caught',
        why: 'A boundary cannot catch itself; the search moves to a boundary further up.',
      },
    ],
    note: 'The third row is the most common misconception: errors in event handlers never reach an Error Boundary.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: 'Look for',
    lookFor: 'createClassErrorUpdate, enqueueCapturedUpdate, CaptureUpdate, ShouldCapture',
    whyLabel: 'Why',
    why: 'update.tag being CaptureUpdate shows error handling is not a separate system but an ordinary update.',
    code: ERROR_CAPTURE_CODE_EN,
    primaryCta: 'Read ReactFiberThrow.js',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How React 19 changed error reporting',
    description:
      'Where caught and uncaught errors are sent was reorganised into new options in React 19.',
    cta: 'Go to the next page',
    href: '/react-19-error-reporting',
  },
};

export const errorBoundaryRecoverContent: Record<Locale, ErrorBoundaryRecoverContent> = { ko, en };
