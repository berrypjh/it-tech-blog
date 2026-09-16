import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type BranchId = 'thenable' | 'error';

export type Branch = {
  id: BranchId;
  label: string;
  outcome: string;
  tone: ToneKey;
};

export type SideId = 'suspense' | 'error';

export type Side = {
  id: SideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type ClimbStepId = 'mark' | 'classify' | 'find-boundary' | 'capture' | 'unwind';

export type ClimbStep = {
  id: ClimbStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type CaseRow = {
  thrown: string;
  branch: string;
  why: string;
};

export type PromiseVsErrorSplitContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    checkLabel: string;
    check: string;
    branches: [Branch, Branch];
  };
  split: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [Side, Side];
    bridge: { headline: string; sub: string };
  };
  climb: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ClimbStep[];
    note: string;
  };
  cases: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: CaseRow[];
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

const CLASSIFY_CODE = `// handleThrow: 던져진 값의 종류를 먼저 가른다
function handleThrow(root: FiberRoot, thrownValue: any): void {
  resetHooksAfterThrow();

  if (thrownValue === SuspenseException) {
    // use()가 던진 sentinel: 실제 thenable을 꺼내 온다
    thrownValue = getSuspendedThenable();
    workInProgressSuspendedReason =
      shouldRemainOnPreviousScreen() ? SuspendedOnData : SuspendedOnImmediate;
    return;
  }

  if (thrownValue === SuspenseActionException) {
    workInProgressSuspendedReason = SuspendedOnAction;
    return;
  }

  // 그 밖에는 진짜 에러로 본다
  workInProgressSuspendedReason =
    thrownValue !== null &&
    typeof thrownValue === 'object' &&
    typeof thrownValue.then === 'function'
      ? SuspendedOnDeprecatedThrowPromise
      : SuspendedOnError;
}`;

const REACT_FIBER_WORK_LOOP_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberWorkLoop.js';

const ko: PromiseVsErrorSplitContent = {
  hero: {
    badge: 'Suspense/Error · 3/10단계',
    title: { line1: '던져졌다고 다 에러는 아니다', line2: 'then이 있으면 기다림이다' },
    description:
      'React는 catch한 값을 두 갈래로 나눕니다. 판별 기준은 타입이 아니라 then 메서드가 있느냐 하나입니다.',
    diagramBadge: 'classify',
    diagramCaption: 'thenable or not',
    checkLabel: '판별 조건',
    check: "typeof value.then === 'function'",
    branches: [
      {
        id: 'thenable',
        label: 'YES — thenable',
        outcome: 'Suspense 경로 · 기다렸다 재시도',
        tone: 'violet',
      },
      {
        id: 'error',
        label: 'NO — 그 외 모든 값',
        outcome: 'Error 경로 · Error Boundary 탐색',
        tone: 'amber',
      },
    ],
  },
  split: {
    badge: '01',
    eyebrow: 'two meanings',
    title: '같은 throw, 다른 의미',
    description:
      '자바스크립트 문법은 하나지만 React는 그것을 두 가지 신호로 읽습니다. 하나는 "아직", 다른 하나는 "못 한다"입니다.',
    sides: [
      {
        id: 'suspense',
        title: 'thenable을 던졌다',
        badge: '아직 준비 안 됨',
        description: '실패가 아니라 미완성입니다. 값이 생기면 그대로 이어서 성공할 수 있습니다.',
        bullets: [
          '렌더를 버리지만 상태는 보존한다',
          'Promise가 settle되면 자동으로 다시 렌더한다',
          '사용자에게는 fallback을 보여 준다',
          '개발자가 아무것도 하지 않아도 복구된다',
        ],
        tone: 'violet',
      },
      {
        id: 'error',
        title: '그 외 값을 던졌다',
        badge: '진행 불가',
        description: '다시 해도 같은 결과입니다. 누군가 개입해야 벗어날 수 있습니다.',
        bullets: [
          '위로 올라가며 Error Boundary를 찾는다',
          '찾으면 그 경계에 captured update를 건다',
          '없으면 root까지 올라가 전체가 언마운트된다',
          '리셋은 개발자가 직접 트리거해야 한다',
        ],
        tone: 'amber',
      },
    ],
    bridge: {
      headline: '"아직"인가\n"못 한다"인가',
      sub: '재시도해서 달라질 여지가 있으면 Suspense, 없으면 Error입니다. 이 한 문장이 두 경로를 가릅니다.',
    },
  },
  climb: {
    badge: '02',
    eyebrow: 'throwException',
    title: '던져진 뒤 트리를 거슬러 오른다',
    description:
      'catch한 지점에서 바로 처리하지 않습니다. 실패한 Fiber를 표시해 두고 부모 방향으로 올라가며 받아 줄 경계를 찾습니다.',
    steps: [
      {
        id: 'mark',
        num: '01',
        title: '실패한 Fiber에 Incomplete',
        description: '이 Fiber는 정상적으로 끝나지 못했다고 flags에 표시합니다.',
        tone: 'sky',
      },
      {
        id: 'classify',
        num: '02',
        title: 'thenable 여부 판별',
        description: 'then 메서드가 있는지 한 줄로 확인해 두 경로 중 하나를 고릅니다.',
        tone: 'cyan',
      },
      {
        id: 'find-boundary',
        num: '03',
        title: '경계 탐색',
        description:
          'return 포인터를 타고 올라가며 Suspense 또는 Error Boundary 자격이 있는 Fiber를 찾습니다.',
        tone: 'indigo',
      },
      {
        id: 'capture',
        num: '04',
        title: 'captured update 등록',
        description: '찾은 경계에 "fallback을 보여 달라"는 업데이트를 큐에 겁니다.',
        tone: 'violet',
      },
      {
        id: 'unwind',
        num: '05',
        title: 'unwindWork로 되감기',
        description: '경계까지의 작업을 정리하고 그 지점부터 다시 completeWork를 진행합니다.',
        tone: 'emerald',
      },
    ],
    note: '03에서 아무것도 못 찾으면 root까지 올라갑니다. Suspense면 전체가 fallback이 되고, Error면 앱 전체가 언마운트됩니다.',
  },
  cases: {
    badge: '03',
    eyebrow: 'edge cases',
    title: '헷갈리기 쉬운 경우들',
    description: '판별이 then 하나로만 이뤄지기 때문에, 의도와 다르게 분류되는 경우가 생깁니다.',
    headers: ['무엇을 던졌나', '어느 경로로 가나', '왜 그런가'],
    rows: [
      {
        thrown: 'use(promise)의 pending',
        branch: 'Suspense',
        why: 'use가 SuspenseException sentinel을 던지고, React가 실제 thenable을 따로 꺼내 씁니다.',
      },
      {
        thrown: 'new Error(...)',
        branch: 'Error Boundary',
        why: 'then 메서드가 없으므로 곧바로 에러로 분류됩니다. 가장 흔한 경우입니다.',
      },
      {
        thrown: 'Promise를 직접 throw',
        branch: 'Suspense (비권장)',
        why: '예전 방식으로 여전히 동작하지만 SuspendedOnDeprecatedThrowPromise로 표시됩니다.',
      },
      {
        thrown: 'then을 가진 일반 객체',
        branch: 'Suspense',
        why: 'Promise가 아니어도 thenable이면 대기로 봅니다. 의도치 않은 대기의 원인이 됩니다.',
      },
      {
        thrown: '문자열이나 숫자',
        branch: 'Error Boundary',
        why: 'Error 인스턴스가 아니어도 상관없습니다. thenable이 아니면 전부 에러입니다.',
      },
    ],
    note: '네 번째 줄이 함정입니다. then이라는 이름의 필드를 가진 데이터 객체를 던지면 앱이 영원히 로딩 상태가 됩니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: '볼 것',
    lookFor: 'handleThrow, SuspenseException, SuspendedOnError, workInProgressSuspendedReason',
    whyLabel: '설명',
    why: '결과가 값이 아니라 workInProgressSuspendedReason이라는 모듈 변수에 남는다는 점이, 이후 흐름의 분기 기준이 됩니다.',
    code: CLASSIFY_CODE,
    primaryCta: 'ReactFiberWorkLoop.js 읽기',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Suspense 쪽으로 가면 무슨 일이 생기나',
    description:
      '두 갈래 중 먼저 Suspense를 따라갑니다. fallback이 보이고 다시 시도되기까지의 과정입니다.',
    cta: '다음 페이지로 이동',
    href: '/suspense-fallback-retry',
  },
};

const CLASSIFY_CODE_EN = `// handleThrow: sort the thrown value before anything else
function handleThrow(root: FiberRoot, thrownValue: any): void {
  resetHooksAfterThrow();

  if (thrownValue === SuspenseException) {
    // the sentinel thrown by use(): fetch the real thenable
    thrownValue = getSuspendedThenable();
    workInProgressSuspendedReason =
      shouldRemainOnPreviousScreen() ? SuspendedOnData : SuspendedOnImmediate;
    return;
  }

  if (thrownValue === SuspenseActionException) {
    workInProgressSuspendedReason = SuspendedOnAction;
    return;
  }

  // anything else counts as a real error
  workInProgressSuspendedReason =
    thrownValue !== null &&
    typeof thrownValue === 'object' &&
    typeof thrownValue.then === 'function'
      ? SuspendedOnDeprecatedThrowPromise
      : SuspendedOnError;
}`;

const en: PromiseVsErrorSplitContent = {
  hero: {
    badge: 'Suspense/Error · 3/10',
    title: { line1: 'Not everything thrown is an error', line2: 'a then method means waiting' },
    description:
      'React sorts caught values into two paths. The test is not the type but whether the value has a then method.',
    diagramBadge: 'classify',
    diagramCaption: 'thenable or not',
    checkLabel: 'the test',
    check: "typeof value.then === 'function'",
    branches: [
      {
        id: 'thenable',
        label: 'YES — a thenable',
        outcome: 'Suspense path · wait, then retry',
        tone: 'violet',
      },
      {
        id: 'error',
        label: 'NO — anything else',
        outcome: 'Error path · find an Error Boundary',
        tone: 'amber',
      },
    ],
  },
  split: {
    badge: '01',
    eyebrow: 'two meanings',
    title: 'Same throw, different meaning',
    description:
      'JavaScript offers one syntax, but React reads it as two signals: "not yet" and "cannot".',
    sides: [
      {
        id: 'suspense',
        title: 'A thenable was thrown',
        badge: 'not ready yet',
        description: 'This is incompleteness, not failure. With a value it could still succeed.',
        bullets: [
          'The render is discarded but state is preserved',
          'Once the Promise settles it re-renders automatically',
          'The user sees a fallback meanwhile',
          'It recovers without the developer doing anything',
        ],
        tone: 'violet',
      },
      {
        id: 'error',
        title: 'Something else was thrown',
        badge: 'cannot proceed',
        description: 'Retrying gives the same result. Someone has to intervene to get out of it.',
        bullets: [
          'It climbs upward looking for an Error Boundary',
          'When found, a captured update is queued on that boundary',
          'With none found it reaches the root and unmounts everything',
          'Resetting has to be triggered by the developer',
        ],
        tone: 'amber',
      },
    ],
    bridge: {
      headline: 'Is it "not yet"\nor "cannot"',
      sub: 'If retrying could change the outcome it is Suspense; otherwise it is an Error. That one sentence separates the paths.',
    },
  },
  climb: {
    badge: '02',
    eyebrow: 'throwException',
    title: 'After the throw, it climbs the tree',
    description:
      'Nothing is handled where it was caught. The failed Fiber is marked, and React climbs toward the parents looking for a boundary to catch it.',
    steps: [
      {
        id: 'mark',
        num: '01',
        title: 'Mark the failed Fiber Incomplete',
        description: 'Its flags record that this Fiber did not finish normally.',
        tone: 'sky',
      },
      {
        id: 'classify',
        num: '02',
        title: 'Check for a thenable',
        description: 'One line looking for a then method picks between the two paths.',
        tone: 'cyan',
      },
      {
        id: 'find-boundary',
        num: '03',
        title: 'Search for a boundary',
        description:
          'Follow return pointers upward looking for a Fiber qualified as a Suspense or Error Boundary.',
        tone: 'indigo',
      },
      {
        id: 'capture',
        num: '04',
        title: 'Queue a captured update',
        description: 'An update saying "show your fallback" is queued on the boundary found.',
        tone: 'violet',
      },
      {
        id: 'unwind',
        num: '05',
        title: 'Rewind with unwindWork',
        description: 'Work up to the boundary is cleaned up and completeWork resumes from there.',
        tone: 'emerald',
      },
    ],
    note: 'Finding nothing at step 03 means reaching the root: a Suspense turns the whole screen into a fallback, an Error unmounts the app.',
  },
  cases: {
    badge: '03',
    eyebrow: 'edge cases',
    title: 'The cases that trip people up',
    description:
      'Because the test is a single then check, values sometimes get sorted differently than intended.',
    headers: ['What was thrown', 'Which path', 'Why'],
    rows: [
      {
        thrown: 'A pending use(promise)',
        branch: 'Suspense',
        why: 'use throws a SuspenseException sentinel, and React fetches the real thenable separately.',
      },
      {
        thrown: 'new Error(...)',
        branch: 'Error Boundary',
        why: 'No then method, so it is classified as an error right away. The common case.',
      },
      {
        thrown: 'Throwing a Promise directly',
        branch: 'Suspense (discouraged)',
        why: 'The old style still works but is tagged SuspendedOnDeprecatedThrowPromise.',
      },
      {
        thrown: 'A plain object with a then',
        branch: 'Suspense',
        why: 'Any thenable counts as waiting, even without being a Promise — a source of accidental waits.',
      },
      {
        thrown: 'A string or a number',
        branch: 'Error Boundary',
        why: 'Being an Error instance is irrelevant. Anything not thenable is an error.',
      },
    ],
    note: 'The fourth row is the trap: throwing a data object that happens to have a then field leaves the app loading forever.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberWorkLoop.js',
    lookForLabel: 'Look for',
    lookFor: 'handleThrow, SuspenseException, SuspendedOnError, workInProgressSuspendedReason',
    whyLabel: 'Why',
    why: 'The result lands in the module variable workInProgressSuspendedReason rather than a return value, and everything downstream branches on it.',
    code: CLASSIFY_CODE_EN,
    primaryCta: 'Read ReactFiberWorkLoop.js',
    primaryHref: REACT_FIBER_WORK_LOOP_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What happens down the Suspense path',
    description:
      'We follow the Suspense branch first: showing a fallback and getting back to a retry.',
    cta: 'Go to the next page',
    href: '/suspense-fallback-retry',
  },
};

export const promiseVsErrorSplitContent: Record<Locale, PromiseVsErrorSplitContent> = { ko, en };
