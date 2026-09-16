import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';
import type { ToneKey } from '../../shared/tones';

export type StageId = 'throw' | 'classify' | 'boundary' | 'fallback' | 'retry';

export type Stage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type ShapeStepId = 'interrupt' | 'mark' | 'climb' | 'capture' | 'recover';

export type ShapeStep = {
  id: ShapeStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type CaseId = 'pending' | 'rejected' | 'render-error' | 'mismatch';

export type RecoveryCase = {
  id: CaseId;
  title: string;
  thrown: string;
  boundary: string;
  tone: ToneKey;
};

export type FileRow = {
  file: string;
  owns: string;
  functions: string;
};

export type RecoveryModelOverviewContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: Stage[];
  };
  shape: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ShapeStep[];
    note: string;
  };
  cases: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: RecoveryCase[];
    note: string;
  };
  files: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: FileRow[];
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
  finale: FinaleBannerContent;
};

const RECAP_CODE = `// 1. 중단: 렌더 도중 무언가 던져진다
throw SuspenseException;          // use(promise)가 pending일 때
throw new Error('...');           // 컴포넌트가 실패했을 때
throw HydrationMismatchException; // DOM 짝이 맞지 않을 때

// 2. 분류: 던져진 것이 무엇인지 한 번 본다
workInProgressSuspendedReason =
  typeof thrownValue.then === 'function' ? SuspendedOnData : SuspendedOnError;

// 3. 탐색: 받아 줄 경계를 찾아 위로 올라간다
let workInProgress = returnFiber;
do {
  // Suspense인가, Error Boundary인가, HostRoot인가
  workInProgress = workInProgress.return;
} while (workInProgress !== null);

// 4. 표시: 경계에 플래그나 업데이트를 건다
suspenseBoundary.flags |= ShouldCapture;      // Suspense
enqueueCapturedUpdate(boundary, update);      // Error Boundary

// 5. 복구: 되감고 다시 렌더한다
workInProgress.flags = (flags & ~ShouldCapture) | DidCapture;`;

const REACT_FIBER_THROW_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const KO_CASES: RecoveryCase[] = [
  {
    id: 'pending',
    title: 'Promise가 pending',
    thrown: 'SuspenseException',
    boundary: 'Suspense',
    tone: 'violet',
  },
  {
    id: 'rejected',
    title: 'Promise가 rejected',
    thrown: 'reason (일반 값)',
    boundary: 'Error Boundary',
    tone: 'amber',
  },
  {
    id: 'render-error',
    title: '렌더 중 예외',
    thrown: 'Error 인스턴스',
    boundary: 'Error Boundary',
    tone: 'amber',
  },
  {
    id: 'mismatch',
    title: 'hydration 불일치',
    thrown: 'HydrationMismatchException',
    boundary: 'Suspense (ForceClientRender)',
    tone: 'cyan',
  },
];

const EN_CASES: RecoveryCase[] = [
  {
    id: 'pending',
    title: 'A pending Promise',
    thrown: 'SuspenseException',
    boundary: 'Suspense',
    tone: 'violet',
  },
  {
    id: 'rejected',
    title: 'A rejected Promise',
    thrown: 'reason (a plain value)',
    boundary: 'Error Boundary',
    tone: 'amber',
  },
  {
    id: 'render-error',
    title: 'An exception during render',
    thrown: 'An Error instance',
    boundary: 'Error Boundary',
    tone: 'amber',
  },
  {
    id: 'mismatch',
    title: 'A hydration mismatch',
    thrown: 'HydrationMismatchException',
    boundary: 'Suspense (ForceClientRender)',
    tone: 'cyan',
  },
];

const ko: RecoveryModelOverviewContent = {
  hero: {
    badge: 'Suspense/Error · 10/10단계',
    title: { line1: '대기도 실패도 불일치도', line2: '결국 같은 다섯 칸을 지난다' },
    description:
      '아홉 페이지에서 따로 본 세 갈래는 사실 하나의 모델이었습니다. 무엇을 던졌는지만 다르고 나머지 구조는 같습니다.',
    diagramBadge: 'one model',
    diagramCaption: 'throw → capture → recover',
    stages: [
      { id: 'throw', label: '중단', caption: '렌더 도중 무언가 던져진다', tone: 'sky' },
      { id: 'classify', label: '분류', caption: 'thenable인가 아닌가', tone: 'cyan' },
      { id: 'boundary', label: '탐색', caption: '받아 줄 경계를 찾아 상승', tone: 'indigo' },
      { id: 'fallback', label: '표시', caption: '경계에 플래그나 업데이트를 건다', tone: 'violet' },
      { id: 'retry', label: '복구', caption: '되감고 다시 렌더한다', tone: 'emerald' },
    ],
  },
  shape: {
    badge: '01',
    eyebrow: 'one shape',
    title: '세 갈래가 공유하는 다섯 칸',
    description:
      '원인이 무엇이든 React가 하는 일의 모양은 같습니다. 이 다섯 칸이 실패 가능한 렌더링 모델의 전부입니다.',
    steps: [
      {
        id: 'interrupt',
        num: '01',
        title: '렌더가 중단된다',
        description:
          'use의 sentinel이든 개발자의 Error든 hydration의 전용 예외든, 던져지는 순간 beginWork가 멈춥니다.',
        tone: 'sky',
      },
      {
        id: 'mark',
        num: '02',
        title: '던져진 값을 분류한다',
        description:
          'thenable인지 한 줄로 보고 suspendedReason을 정합니다. 이후 모든 분기가 이 값을 봅니다.',
        tone: 'cyan',
      },
      {
        id: 'climb',
        num: '03',
        title: '경계를 찾아 올라간다',
        description:
          'return 포인터를 타고 Suspense나 Error Boundary 자격을 가진 Fiber를 찾습니다. 없으면 root까지 갑니다.',
        tone: 'indigo',
      },
      {
        id: 'capture',
        num: '04',
        title: '경계에 표시를 남긴다',
        description:
          'Suspense면 ShouldCapture 플래그를, Error Boundary면 CaptureUpdate를 겁니다. 둘 다 재렌더의 입력입니다.',
        tone: 'violet',
      },
      {
        id: 'recover',
        num: '05',
        title: '되감고 다시 그린다',
        description:
          'unwindWork가 경계까지 정리한 뒤, 바뀐 플래그나 state로 그 서브트리를 다시 렌더합니다.',
        tone: 'emerald',
      },
    ],
    note: '03이 이 모델의 핵심입니다. 실패를 그 자리에서 처리하지 않고 경계까지 올려 보내기 때문에, 격리 범위를 개발자가 정할 수 있습니다.',
  },
  cases: {
    badge: '02',
    eyebrow: 'four cases',
    title: '무엇을 던졌고 누가 받았나',
    description:
      '챕터에서 본 네 가지 경우를 같은 표에 놓으면, 다른 것은 두 칸뿐이라는 점이 드러납니다.',
    items: KO_CASES,
    note: 'rejected Promise가 Error Boundary로 간다는 점을 놓치기 쉽습니다. use가 reason을 다시 던지므로 더 이상 thenable이 아닙니다.',
  },
  files: {
    badge: '03',
    eyebrow: 'file map',
    title: '다시 열 때 찾을 파일 넷',
    description:
      '이 챕터의 코드는 네 파일에 흩어져 있습니다. 어느 파일이 다섯 칸 중 어디를 담당하는지 알면 길을 잃지 않습니다.',
    headers: ['파일', '담당하는 칸', '핵심 함수'],
    rows: [
      {
        file: 'ReactFiberThenable.js',
        owns: '01 중단 (Suspense 쪽)',
        functions: 'trackUsedThenable, SuspenseException',
      },
      {
        file: 'ReactFiberWorkLoop.js',
        owns: '02 분류',
        functions: 'handleThrow, workInProgressSuspendedReason',
      },
      {
        file: 'ReactFiberThrow.js',
        owns: '03~04 탐색과 표시',
        functions: 'throwException, markSuspenseBoundaryShouldCapture, createClassErrorUpdate',
      },
      {
        file: 'ReactFiberHydrationContext.js',
        owns: '01 중단 (Hydration 쪽)',
        functions: 'tryToClaimNextHydratableInstance, throwOnHydrationMismatch',
      },
    ],
    note: '05의 되감기는 ReactFiberUnwindWork.js에 있습니다. 위 넷을 다 읽은 뒤에 열면 자연스럽게 이어집니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: '볼 것',
    lookFor: 'throwException, handleThrow, ShouldCapture, DidCapture, CaptureUpdate',
    whyLabel: '설명',
    why: '다섯 조각을 이어 붙이면 중단부터 복구까지가 한 화면에 들어옵니다. 챕터 전체의 축약본입니다.',
    code: RECAP_CODE,
    primaryCta: 'ReactFiberThrow.js 읽기',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  finale: {
    progressLabel: '13/15 챕터 완료',
    copyLine1: '렌더가 실패해도',
    copyLine2: '화면이 버티는 이유를 읽었습니다.',
    copyLine3: '다음은 React 19에서 달라진 지점입니다.',
    primaryCta: 'React 19에서 달라진 지점 읽기',
    primaryHref: '/react-19-change-map',
    secondaryCta: 'Suspense 챕터 처음부터 다시 보기',
    secondaryHref: '/why-failable-render',
  },
};

const RECAP_CODE_EN = `// 1. Interrupt: something is thrown mid-render
throw SuspenseException;          // use(promise) is pending
throw new Error('...');           // the component failed
throw HydrationMismatchException; // the DOM did not pair up

// 2. Classify: look once at what was thrown
workInProgressSuspendedReason =
  typeof thrownValue.then === 'function' ? SuspendedOnData : SuspendedOnError;

// 3. Search: climb upward for a boundary that will catch it
let workInProgress = returnFiber;
do {
  // a Suspense? an Error Boundary? the HostRoot?
  workInProgress = workInProgress.return;
} while (workInProgress !== null);

// 4. Mark: leave a flag or an update on the boundary
suspenseBoundary.flags |= ShouldCapture;      // Suspense
enqueueCapturedUpdate(boundary, update);      // Error Boundary

// 5. Recover: rewind and render again
workInProgress.flags = (flags & ~ShouldCapture) | DidCapture;`;

const en: RecoveryModelOverviewContent = {
  hero: {
    badge: 'Suspense/Error · 10/10',
    title: { line1: 'Waiting, failing and mismatching', line2: 'all walk the same five stops' },
    description:
      'The three branches seen separately across nine pages were one model all along. Only what gets thrown differs.',
    diagramBadge: 'one model',
    diagramCaption: 'throw → capture → recover',
    stages: [
      { id: 'throw', label: 'Interrupt', caption: 'something is thrown mid-render', tone: 'sky' },
      { id: 'classify', label: 'Classify', caption: 'thenable or not', tone: 'cyan' },
      {
        id: 'boundary',
        label: 'Search',
        caption: 'climb to a boundary that catches',
        tone: 'indigo',
      },
      { id: 'fallback', label: 'Mark', caption: 'leave a flag or an update on it', tone: 'violet' },
      { id: 'retry', label: 'Recover', caption: 'rewind and render again', tone: 'emerald' },
    ],
  },
  shape: {
    badge: '01',
    eyebrow: 'one shape',
    title: 'Five stops all three branches share',
    description:
      'Whatever the cause, the shape of what React does is identical. These five stops are the whole failable-render model.',
    steps: [
      {
        id: 'interrupt',
        num: '01',
        title: 'The render is interrupted',
        description:
          'A use sentinel, your Error, or a hydration exception — whichever is thrown, beginWork stops.',
        tone: 'sky',
      },
      {
        id: 'mark',
        num: '02',
        title: 'Classify the thrown value',
        description:
          'One thenable check sets suspendedReason, and every later branch reads that value.',
        tone: 'cyan',
      },
      {
        id: 'climb',
        num: '03',
        title: 'Climb toward a boundary',
        description:
          'Follow return pointers for a Fiber qualified as Suspense or Error Boundary; with none, reach the root.',
        tone: 'indigo',
      },
      {
        id: 'capture',
        num: '04',
        title: 'Leave a mark on the boundary',
        description:
          'A ShouldCapture flag for Suspense, a CaptureUpdate for an Error Boundary — both are inputs to the re-render.',
        tone: 'violet',
      },
      {
        id: 'recover',
        num: '05',
        title: 'Rewind and redraw',
        description:
          'unwindWork cleans up to the boundary, then that subtree renders again with the new flag or state.',
        tone: 'emerald',
      },
    ],
    note: 'Step 03 is the heart: failures are carried up to a boundary rather than handled in place, which is what lets you choose the isolation scope.',
  },
  cases: {
    badge: '02',
    eyebrow: 'four cases',
    title: 'What was thrown and who caught it',
    description:
      'Putting the four cases from this chapter in one table shows that only two columns ever differ.',
    items: EN_CASES,
    note: 'It is easy to miss that a rejected Promise goes to an Error Boundary: use re-throws the reason, which is no longer a thenable.',
  },
  files: {
    badge: '03',
    eyebrow: 'file map',
    title: 'Four files to find on reopening',
    description:
      'The code for this chapter is spread across four files. Knowing which owns which stop keeps you oriented.',
    headers: ['File', 'Stops it owns', 'Key functions'],
    rows: [
      {
        file: 'ReactFiberThenable.js',
        owns: '01, the Suspense side of interrupting',
        functions: 'trackUsedThenable, SuspenseException',
      },
      {
        file: 'ReactFiberWorkLoop.js',
        owns: '02, classification',
        functions: 'handleThrow, workInProgressSuspendedReason',
      },
      {
        file: 'ReactFiberThrow.js',
        owns: '03–04, searching and marking',
        functions: 'throwException, markSuspenseBoundaryShouldCapture, createClassErrorUpdate',
      },
      {
        file: 'ReactFiberHydrationContext.js',
        owns: '01, the hydration side of interrupting',
        functions: 'tryToClaimNextHydratableInstance, throwOnHydrationMismatch',
      },
    ],
    note: 'The rewind in step 05 lives in ReactFiberUnwindWork.js. Open it after these four and it reads naturally.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberThrow.js',
    lookForLabel: 'Look for',
    lookFor: 'throwException, handleThrow, ShouldCapture, DidCapture, CaptureUpdate',
    whyLabel: 'Why',
    why: 'Stitched together, these five fragments put interruption through recovery on one screen — the whole chapter, abridged.',
    code: RECAP_CODE_EN,
    primaryCta: 'Read ReactFiberThrow.js',
    primaryHref: REACT_FIBER_THROW_HREF,
  },
  finale: {
    progressLabel: 'Chapter 13 of 15 complete',
    copyLine1: 'You have read why the screen holds',
    copyLine2: 'even when a render fails.',
    copyLine3: 'Next comes what changed in React 19.',
    primaryCta: 'Read what changed in React 19',
    primaryHref: '/react-19-change-map',
    secondaryCta: 'Restart the Suspense chapter',
    secondaryHref: '/why-failable-render',
  },
};

export const recoveryModelOverviewContent: Record<Locale, RecoveryModelOverviewContent> = {
  ko,
  en,
};
