import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type SideId = 'server' | 'client';

export type RenderSide = {
  id: SideId;
  label: string;
  markup: string;
  tone: ToneKey;
};

export type CauseId = 'date' | 'random' | 'browser-only' | 'invalid-nesting';

export type Cause = {
  id: CauseId;
  title: string;
  example: string;
  description: string;
  tone: ToneKey;
};

export type RecoverStepId = 'claim-fail' | 'throw' | 'catch' | 'client-render' | 'report';

export type RecoverStep = {
  id: RecoverStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type ScopeRow = {
  scope: string;
  behavior: string;
  cost: string;
};

export type MismatchDetectRecoverContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    sides: [RenderSide, RenderSide];
    verdict: string;
  };
  causes: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Cause[];
    note: string;
  };
  recover: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: RecoverStep[];
    note: string;
  };
  scope: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: ScopeRow[];
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

const MISMATCH_CODE = `// 1. 짝이 맞지 않으면 예외를 던진다
function throwOnHydrationMismatch(fiber: Fiber) {
  const diff = describeDiff(fiber);
  const error = new Error(
    'Hydration failed because the server rendered HTML didn\\'t match the client.' + diff,
  );
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}

// 2. 잡히면 그 서브트리를 클라이언트 렌더로 돌린다
function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
  if (value === HydrationMismatchException) {
    // 가장 가까운 Suspense 경계를 찾아 클라이언트 렌더를 강제한다
    const suspenseBoundary = getSuspenseHandler();
    if (suspenseBoundary !== null) {
      suspenseBoundary.flags &= ~ForceClientRender;
      markSuspenseBoundaryShouldCapture(...);
    }
    return false;
  }
}

// 3. 모아 둔 에러는 커밋 후 onRecoverableError로 보고한다
function commitRootImpl(root, ...) {
  const recoverableErrors = root.recoverableErrors;
  if (recoverableErrors !== null) {
    for (let i = 0; i < recoverableErrors.length; i++) {
      const recoverableError = recoverableErrors[i];
      onRecoverableError(recoverableError.value, makeErrorInfo(...));
    }
  }
}`;

const HYDRATION_CONTEXT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHydrationContext.js';

const ko: MismatchDetectRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 8/10단계',
    title: { line1: '서버와 클라이언트가 어긋나면', line2: '그 구역만 다시 그린다' },
    description:
      'mismatch는 앱을 무너뜨리지 않습니다. 짝을 못 맞춘 지점부터 가장 가까운 경계까지를 클라이언트 렌더로 되돌립니다.',
    diagramBadge: 'mismatch',
    diagramCaption: 'server vs client',
    sides: [
      {
        id: 'server',
        label: '서버가 만든 HTML',
        markup: '<span>2026년 9월 16일</span>',
        tone: 'sky',
      },
      {
        id: 'client',
        label: '클라이언트가 기대한 것',
        markup: '<span>2026년 9월 17일</span>',
        tone: 'violet',
      },
    ],
    verdict: 'mismatch → 이 서브트리는 클라이언트가 다시 그린다',
  },
  causes: {
    badge: '01',
    eyebrow: 'why it happens',
    title: '어긋나는 네 가지 이유',
    description:
      '원인은 거의 항상 같습니다. 서버와 클라이언트가 서로 다른 값을 보고 렌더했기 때문입니다.',
    items: [
      {
        id: 'date',
        title: '시간에 의존',
        example: 'new Date().toLocaleString()',
        description:
          '서버가 그린 시각과 클라이언트가 그리는 시각이 다릅니다. 타임존까지 다르면 더 벌어집니다.',
        tone: 'amber',
      },
      {
        id: 'random',
        title: '난수나 uid',
        example: 'Math.random(), uuid()',
        description:
          '호출할 때마다 다른 값이 나옵니다. 서버와 클라이언트가 같은 값을 얻을 방법이 없습니다.',
        tone: 'violet',
      },
      {
        id: 'browser-only',
        title: '브라우저 전용 API',
        example: 'window.innerWidth, localStorage',
        description:
          '서버에는 없는 값이라 기본값으로 그렸다가, 클라이언트에서 실제 값으로 바뀝니다.',
        tone: 'cyan',
      },
      {
        id: 'invalid-nesting',
        title: '잘못된 HTML 중첩',
        example: '<p> 안의 <div>',
        description:
          '브라우저가 파싱하며 구조를 고쳐 버립니다. 서버가 보낸 문자열과 실제 DOM이 달라집니다.',
        tone: 'indigo',
      },
    ],
    note: '네 번째는 코드만 봐서는 안 보입니다. 개발자 도구의 Elements 탭과 페이지 소스 보기를 비교해야 찾을 수 있습니다.',
  },
  recover: {
    badge: '02',
    eyebrow: 'recovery',
    title: '감지에서 복구까지 다섯 칸',
    description:
      'mismatch도 앞서 본 throw 경로를 그대로 씁니다. 다만 던지는 것이 전용 sentinel이고, 잡은 뒤 하는 일이 다릅니다.',
    steps: [
      {
        id: 'claim-fail',
        num: '01',
        title: 'claim 실패',
        description: '가져가려던 DOM 노드가 없거나 타입이 달라 짝을 맞출 수 없습니다.',
        tone: 'sky',
      },
      {
        id: 'throw',
        num: '02',
        title: 'HydrationMismatchException',
        description: '에러 객체를 큐에 담아 두고 전용 sentinel을 던집니다.',
        tone: 'amber',
      },
      {
        id: 'catch',
        num: '03',
        title: '경계에서 잡기',
        description: '가장 가까운 Suspense 경계를 찾아 ForceClientRender 플래그를 세웁니다.',
        tone: 'indigo',
      },
      {
        id: 'client-render',
        num: '04',
        title: '그 구역만 클라이언트 렌더',
        description:
          'isHydrating을 끄고 서버 DOM을 버린 뒤, 그 서브트리를 createElement로 새로 만듭니다.',
        tone: 'violet',
      },
      {
        id: 'report',
        num: '05',
        title: 'onRecoverableError 호출',
        description: '커밋이 끝난 뒤 모아 둔 에러를 리포터로 보냅니다. 화면은 이미 정상입니다.',
        tone: 'emerald',
      },
    ],
    note: '05가 마지막인 것이 중요합니다. 복구가 먼저이고 보고는 나중이라, 사용자는 문제를 보지 못합니다.',
  },
  scope: {
    badge: '03',
    eyebrow: 'blast radius',
    title: '얼마나 넓게 다시 그리는가',
    description:
      '복구 범위는 가장 가까운 Suspense 경계까지입니다. 경계를 어디에 두었는지가 비용을 결정합니다.',
    headers: ['경계 배치', '다시 그리는 범위', '치르는 비용'],
    rows: [
      {
        scope: '문제 지점 근처에 Suspense',
        behavior: '그 작은 서브트리만',
        cost: '거의 없습니다. 서버 HTML의 대부분이 살아남습니다.',
      },
      {
        scope: '페이지 상단에 하나만',
        behavior: '페이지 대부분',
        cost: 'SSR의 이점이 사라집니다. 사실상 클라이언트 렌더입니다.',
      },
      {
        scope: 'Suspense가 아예 없음',
        behavior: 'root 전체',
        cost: '서버 HTML을 통째로 버리고 처음부터 다시 그립니다.',
      },
      {
        scope: 'suppressHydrationWarning 사용',
        behavior: '다시 그리지 않음',
        cost: '경고만 끕니다. 텍스트 차이 한 단계에만 쓰는 도피구입니다.',
      },
    ],
    note: 'suppressHydrationWarning은 해당 요소의 텍스트 차이만 무시합니다. 구조가 다르면 여전히 mismatch가 납니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberHydrationContext.js',
    lookForLabel: '볼 것',
    lookFor: 'throwOnHydrationMismatch, HydrationMismatchException, ForceClientRender',
    whyLabel: '설명',
    why: '에러를 queueHydrationError로 모아 두고 나중에 보고한다는 점이, 복구를 우선한다는 설계를 드러냅니다.',
    code: MISMATCH_CODE,
    primaryCta: 'ReactFiberHydrationContext.js 읽기',
    primaryHref: HYDRATION_CONTEXT_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Suspense와 hydration이 만나는 곳',
    description:
      '복구 범위를 정하는 것이 Suspense 경계였습니다. 두 개념이 어떻게 엮이는지 확인합니다.',
    cta: '다음 페이지로 이동',
    href: '/suspense-hydration-link',
  },
};

const MISMATCH_CODE_EN = `// 1. throw when the pairing fails
function throwOnHydrationMismatch(fiber: Fiber) {
  const diff = describeDiff(fiber);
  const error = new Error(
    'Hydration failed because the server rendered HTML didn\\'t match the client.' + diff,
  );
  queueHydrationError(createCapturedValueAtFiber(error, fiber));
  throw HydrationMismatchException;
}

// 2. once caught, turn that subtree over to client rendering
function throwException(root, returnFiber, sourceFiber, value, rootRenderLanes) {
  if (value === HydrationMismatchException) {
    // find the nearest Suspense boundary and force a client render
    const suspenseBoundary = getSuspenseHandler();
    if (suspenseBoundary !== null) {
      suspenseBoundary.flags &= ~ForceClientRender;
      markSuspenseBoundaryShouldCapture(...);
    }
    return false;
  }
}

// 3. report the collected errors after commit via onRecoverableError
function commitRootImpl(root, ...) {
  const recoverableErrors = root.recoverableErrors;
  if (recoverableErrors !== null) {
    for (let i = 0; i < recoverableErrors.length; i++) {
      const recoverableError = recoverableErrors[i];
      onRecoverableError(recoverableError.value, makeErrorInfo(...));
    }
  }
}`;

const en: MismatchDetectRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 8/10',
    title: { line1: 'When server and client disagree', line2: 'only that region is redrawn' },
    description:
      'A mismatch does not bring the app down. From the failed pairing up to the nearest boundary, React falls back to client rendering.',
    diagramBadge: 'mismatch',
    diagramCaption: 'server vs client',
    sides: [
      {
        id: 'server',
        label: 'What the server rendered',
        markup: '<span>September 16, 2026</span>',
        tone: 'sky',
      },
      {
        id: 'client',
        label: 'What the client expected',
        markup: '<span>September 17, 2026</span>',
        tone: 'violet',
      },
    ],
    verdict: 'mismatch → this subtree is redrawn by the client',
  },
  causes: {
    badge: '01',
    eyebrow: 'why it happens',
    title: 'Four reasons they disagree',
    description:
      'The cause is almost always the same: server and client rendered from different values.',
    items: [
      {
        id: 'date',
        title: 'Depending on time',
        example: 'new Date().toLocaleString()',
        description:
          'The moment the server rendered differs from the moment the client does — and timezones widen the gap.',
        tone: 'amber',
      },
      {
        id: 'random',
        title: 'Randomness or uids',
        example: 'Math.random(), uuid()',
        description:
          'Every call yields a different value, so there is no way for both sides to agree.',
        tone: 'violet',
      },
      {
        id: 'browser-only',
        title: 'Browser-only APIs',
        example: 'window.innerWidth, localStorage',
        description:
          'Absent on the server, so a default is rendered and then replaced by the real value on the client.',
        tone: 'cyan',
      },
      {
        id: 'invalid-nesting',
        title: 'Invalid HTML nesting',
        example: 'a <div> inside a <p>',
        description:
          'The browser rewrites the structure while parsing, so the sent markup and the real DOM differ.',
        tone: 'indigo',
      },
    ],
    note: 'The fourth is invisible in the code. You have to compare the Elements panel against view-source to find it.',
  },
  recover: {
    badge: '02',
    eyebrow: 'recovery',
    title: 'Five stops from detection to recovery',
    description:
      'A mismatch reuses the same throw path seen earlier. What differs is a dedicated sentinel and what happens after the catch.',
    steps: [
      {
        id: 'claim-fail',
        num: '01',
        title: 'The claim fails',
        description:
          'The DOM node to take is missing or of the wrong type, so pairing is impossible.',
        tone: 'sky',
      },
      {
        id: 'throw',
        num: '02',
        title: 'HydrationMismatchException',
        description: 'The error object is queued and a dedicated sentinel is thrown.',
        tone: 'amber',
      },
      {
        id: 'catch',
        num: '03',
        title: 'Caught at a boundary',
        description:
          'The nearest Suspense boundary is found and the ForceClientRender flag is set.',
        tone: 'indigo',
      },
      {
        id: 'client-render',
        num: '04',
        title: 'Client-render that region',
        description:
          'isHydrating turns off, the server DOM is dropped, and the subtree is rebuilt with createElement.',
        tone: 'violet',
      },
      {
        id: 'report',
        num: '05',
        title: 'Call onRecoverableError',
        description:
          'After commit, the queued errors go to the reporter. The screen is already correct.',
        tone: 'emerald',
      },
    ],
    note: 'That step 05 comes last matters: recovery happens first and reporting second, so the user never sees the problem.',
  },
  scope: {
    badge: '03',
    eyebrow: 'blast radius',
    title: 'How much gets redrawn',
    description:
      'Recovery reaches up to the nearest Suspense boundary, so where you placed boundaries decides the cost.',
    headers: ['Boundary placement', 'What gets redrawn', 'What it costs'],
    rows: [
      {
        scope: 'A Suspense near the problem',
        behavior: 'Only that small subtree',
        cost: 'Almost nothing. Most of the server HTML survives.',
      },
      {
        scope: 'A single one at the top of the page',
        behavior: 'Most of the page',
        cost: 'The SSR benefit is gone; it is effectively a client render.',
      },
      {
        scope: 'No Suspense at all',
        behavior: 'The whole root',
        cost: 'The entire server HTML is discarded and rebuilt from scratch.',
      },
      {
        scope: 'Using suppressHydrationWarning',
        behavior: 'Nothing is redrawn',
        cost: 'It only silences the warning — an escape hatch for one level of text difference.',
      },
    ],
    note: 'suppressHydrationWarning ignores only the text difference on that element. Structural differences still mismatch.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberHydrationContext.js',
    lookForLabel: 'Look for',
    lookFor: 'throwOnHydrationMismatch, HydrationMismatchException, ForceClientRender',
    whyLabel: 'Why',
    why: 'Queuing the error with queueHydrationError and reporting it later shows recovery is deliberately prioritised.',
    code: MISMATCH_CODE_EN,
    primaryCta: 'Read ReactFiberHydrationContext.js',
    primaryHref: HYDRATION_CONTEXT_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where Suspense and hydration meet',
    description:
      'A Suspense boundary is what bounded the recovery. Next we look at how the two concepts interlock.',
    cta: 'Go to the next page',
    href: '/suspense-hydration-link',
  },
};

export const mismatchDetectRecoverContent: Record<Locale, MismatchDetectRecoverContent> = {
  ko,
  en,
};
