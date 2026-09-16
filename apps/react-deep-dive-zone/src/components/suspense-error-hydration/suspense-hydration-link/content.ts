import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type PhaseId = 'stream' | 'placeholder' | 'chunk' | 'hydrate';

export type Phase = {
  id: PhaseId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type RoleId = 'boundary' | 'streaming' | 'selective' | 'fallback';

export type Role = {
  id: RoleId;
  title: string;
  role: string;
  description: string;
  tone: ToneKey;
};

export type StreamStepId = 'shell' | 'comment' | 'resolve' | 'inject' | 'claim';

export type StreamStep = {
  id: StreamStepId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type PlacementRow = {
  placement: string;
  streaming: string;
  hydration: string;
};

export type SuspenseHydrationLinkContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    phases: Phase[];
  };
  roles: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Role[];
    note: string;
  };
  streaming: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: StreamStep[];
    note: string;
  };
  placement: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: PlacementRow[];
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

const DEHYDRATED_CODE = `// 서버는 미완성 경계를 주석 노드로 표시해 보낸다
// <!--$?--><template id="B:0"></template>로딩중<!--/$-->

const SUSPENSE_START_DATA = '$';
const SUSPENSE_PENDING_START_DATA = '$?';
const SUSPENSE_FALLBACK_START_DATA = '$!';

function isSuspenseInstancePending(instance: SuspenseInstance): boolean {
  return instance.data === SUSPENSE_PENDING_START_DATA;
}

// hydration 중 아직 안 온 경계를 만나면 dehydrated 상태로 둔다
function updateDehydratedSuspenseComponent(
  current, workInProgress, didSuspend, nextProps, suspenseInstance, renderLanes,
) {
  if (!didSuspend) {
    if (isSuspenseInstanceFallback(suspenseInstance)) {
      // 서버가 이미 포기한 경계: 클라이언트가 처음부터 그린다
      return retrySuspenseComponentWithoutHydrating(
        current, workInProgress, renderLanes, null,
      );
    }

    if (isSuspenseInstancePending(suspenseInstance)) {
      // 아직 스트리밍 중: 도착할 때까지 이 경계만 보류한다
      return retryDehydratedSuspenseBoundary.bind(null, current);
    }
  }

  // mismatch였다면 클라이언트 렌더를 강제한다
  if (workInProgress.flags & ForceClientRender) {
    return retrySuspenseComponentWithoutHydrating(
      current, workInProgress, renderLanes, capturedValue,
    );
  }
}`;

const SUSPENSE_COMPONENT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js';

const ko: SuspenseHydrationLinkContent = {
  hero: {
    badge: 'Suspense/Error · 9/10단계',
    title: {
      line1: 'Suspense 경계는 로딩 표시만이 아니다',
      line2: 'HTML을 쪼개는 단위이기도 하다',
    },
    description:
      '서버는 Suspense 경계를 기준으로 HTML을 나눠 보내고, 클라이언트는 같은 경계를 기준으로 hydration을 나눠 진행합니다.',
    diagramBadge: 'streaming ssr',
    diagramCaption: 'boundary = chunk unit',
    phases: [
      {
        id: 'stream',
        label: '셸 먼저 전송',
        caption: '경계 바깥의 완성된 HTML',
        tone: 'sky',
      },
      {
        id: 'placeholder',
        label: '<!--$?--> 자리 표시',
        caption: '미완성 경계는 주석으로 남겨 둔다',
        tone: 'violet',
      },
      {
        id: 'chunk',
        label: '준비되면 청크 도착',
        caption: '데이터가 풀린 경계부터 뒤이어 전송',
        tone: 'teal',
      },
      {
        id: 'hydrate',
        label: '경계 단위 hydration',
        caption: '도착한 것부터 차례로 살아난다',
        tone: 'emerald',
      },
    ],
  },
  roles: {
    badge: '01',
    eyebrow: 'four roles',
    title: '경계 하나가 맡는 네 가지 역할',
    description:
      '클라이언트에서는 로딩 UI 경계로만 보이지만, SSR이 붙으면 역할이 세 개 더 생깁니다.',
    items: [
      {
        id: 'boundary',
        title: '로딩 경계',
        role: '클라이언트',
        description:
          'suspend가 일어났을 때 fallback을 보여 줄 범위를 정합니다. 앞 페이지들에서 본 역할입니다.',
        tone: 'violet',
      },
      {
        id: 'streaming',
        title: 'HTML 청크 단위',
        role: 'SSR 스트리밍',
        description:
          '서버가 이 경계를 기준으로 HTML을 쪼갭니다. 느린 부분이 빠른 부분을 막지 않습니다.',
        tone: 'sky',
      },
      {
        id: 'selective',
        title: 'hydration 단위',
        role: '선택적 hydration',
        description: '경계마다 따로 hydrate됩니다. 사용자가 클릭한 쪽을 먼저 살릴 수도 있습니다.',
        tone: 'cyan',
      },
      {
        id: 'fallback',
        title: '복구 범위',
        role: 'mismatch 처리',
        description:
          '불일치가 나면 이 경계까지만 클라이언트 렌더로 되돌립니다. 앞 페이지의 blast radius입니다.',
        tone: 'emerald',
      },
    ],
    note: '네 역할이 같은 컴포넌트에 몰려 있어서, Suspense를 어디에 둘지가 로딩 UI를 넘어 성능 결정이 됩니다.',
  },
  streaming: {
    badge: '02',
    eyebrow: 'streaming',
    title: '미완성 HTML이 오가는 다섯 칸',
    description:
      '서버는 데이터를 기다리며 응답을 붙잡지 않습니다. 자리만 표시해 먼저 보내고, 나중에 내용을 채워 넣습니다.',
    steps: [
      {
        id: 'shell',
        num: '01',
        title: '셸을 먼저 흘려보낸다',
        description: 'Suspense 바깥의 완성된 부분을 즉시 스트리밍합니다.',
        tone: 'sky',
      },
      {
        id: 'comment',
        num: '02',
        title: '미완성 경계에 주석 표시',
        description: '<!--$?-->로 시작하는 주석 노드와 template 자리를 남깁니다.',
        tone: 'violet',
      },
      {
        id: 'resolve',
        num: '03',
        title: '데이터 도착',
        description: '서버에서 그 경계의 데이터가 준비되어 렌더가 끝납니다.',
        tone: 'teal',
      },
      {
        id: 'inject',
        num: '04',
        title: '뒤이어 청크 전송',
        description:
          '완성된 HTML과 작은 스크립트를 보내, 브라우저가 자리 표시를 실제 내용으로 바꾸게 합니다.',
        tone: 'indigo',
      },
      {
        id: 'claim',
        num: '05',
        title: '그 경계만 hydrate',
        description: '클라이언트는 도착한 경계를 감지해 그 서브트리의 hydration을 시작합니다.',
        tone: 'emerald',
      },
    ],
    note: '04의 스크립트는 React가 아니라 순수 DOM 조작입니다. 자바스크립트 번들이 아직 없어도 자리 교체는 일어납니다.',
  },
  placement: {
    badge: '03',
    eyebrow: 'placement',
    title: '경계를 어디 두느냐가 만드는 차이',
    description: '같은 페이지라도 Suspense 배치에 따라 첫 화면 속도와 복구 비용이 크게 달라집니다.',
    headers: ['배치', '스트리밍에 미치는 영향', 'hydration에 미치는 영향'],
    rows: [
      {
        placement: '느린 데이터 주변에 좁게',
        streaming: '셸이 즉시 나가고 느린 부분만 뒤따릅니다.',
        hydration: 'mismatch가 나도 그 작은 구역만 다시 그립니다.',
      },
      {
        placement: '페이지 전체를 감쌈',
        streaming: '전부 준비될 때까지 아무것도 못 보냅니다.',
        hydration: '불일치 하나에 페이지 전체가 클라이언트 렌더로 갑니다.',
      },
      {
        placement: '경계 없음',
        streaming: '스트리밍 자체가 성립하지 않습니다.',
        hydration: 'root까지 올라가 서버 HTML을 전부 버립니다.',
      },
      {
        placement: '과하게 잘게 쪼갬',
        streaming: '청크가 많아져 오버헤드가 늘어납니다.',
        hydration: '경계마다 fallback이 깜빡여 오히려 산만해집니다.',
      },
    ],
    note: '기준은 "이 부분이 늦게 와도 화면이 말이 되는가"입니다. 그 단위가 곧 Suspense 경계의 크기입니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: '볼 것',
    lookFor:
      'updateDehydratedSuspenseComponent, isSuspenseInstancePending, retrySuspenseComponentWithoutHydrating',
    whyLabel: '설명',
    why: '주석 노드의 데이터 문자열($, $?, $!)만으로 경계 상태를 구분한다는 점이 스트리밍 프로토콜의 전부입니다.',
    code: DEHYDRATED_CODE,
    primaryCta: 'ReactFiberBeginWork.js 읽기',
    primaryHref: SUSPENSE_COMPONENT_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '아홉 페이지를 하나의 모델로',
    description:
      '대기와 실패와 불일치가 사실은 같은 구조였습니다. 마지막 페이지에서 한 장으로 묶습니다.',
    cta: '다음 페이지로 이동',
    href: '/recovery-model-overview',
  },
};

const DEHYDRATED_CODE_EN = `// the server marks unfinished boundaries with comment nodes
// <!--$?--><template id="B:0"></template>Loading<!--/$-->

const SUSPENSE_START_DATA = '$';
const SUSPENSE_PENDING_START_DATA = '$?';
const SUSPENSE_FALLBACK_START_DATA = '$!';

function isSuspenseInstancePending(instance: SuspenseInstance): boolean {
  return instance.data === SUSPENSE_PENDING_START_DATA;
}

// meeting a boundary that has not arrived leaves it dehydrated
function updateDehydratedSuspenseComponent(
  current, workInProgress, didSuspend, nextProps, suspenseInstance, renderLanes,
) {
  if (!didSuspend) {
    if (isSuspenseInstanceFallback(suspenseInstance)) {
      // the server already gave up here: the client renders from scratch
      return retrySuspenseComponentWithoutHydrating(
        current, workInProgress, renderLanes, null,
      );
    }

    if (isSuspenseInstancePending(suspenseInstance)) {
      // still streaming: hold just this boundary until it arrives
      return retryDehydratedSuspenseBoundary.bind(null, current);
    }
  }

  // after a mismatch, force a client render
  if (workInProgress.flags & ForceClientRender) {
    return retrySuspenseComponentWithoutHydrating(
      current, workInProgress, renderLanes, capturedValue,
    );
  }
}`;

const en: SuspenseHydrationLinkContent = {
  hero: {
    badge: 'Suspense/Error · 9/10',
    title: {
      line1: 'A Suspense boundary is not only a spinner',
      line2: 'it is also where HTML splits',
    },
    description:
      'The server chunks its HTML along Suspense boundaries, and the client hydrates along exactly the same lines.',
    diagramBadge: 'streaming ssr',
    diagramCaption: 'boundary = chunk unit',
    phases: [
      {
        id: 'stream',
        label: 'Send the shell first',
        caption: 'the finished HTML outside the boundary',
        tone: 'sky',
      },
      {
        id: 'placeholder',
        label: 'Leave a <!--$?--> marker',
        caption: 'unfinished boundaries stay as comments',
        tone: 'violet',
      },
      {
        id: 'chunk',
        label: 'Chunks arrive when ready',
        caption: 'each resolved boundary follows behind',
        tone: 'teal',
      },
      {
        id: 'hydrate',
        label: 'Hydrate per boundary',
        caption: 'whatever arrived comes alive in turn',
        tone: 'emerald',
      },
    ],
  },
  roles: {
    badge: '01',
    eyebrow: 'four roles',
    title: 'Four jobs one boundary holds',
    description:
      'On the client it looks purely like a loading boundary. Add SSR and three more jobs appear.',
    items: [
      {
        id: 'boundary',
        title: 'Loading boundary',
        role: 'Client',
        description:
          'Defines the region that shows a fallback when a suspend happens — the role from earlier pages.',
        tone: 'violet',
      },
      {
        id: 'streaming',
        title: 'HTML chunk unit',
        role: 'SSR streaming',
        description:
          'The server splits HTML along this boundary, so slow parts do not block fast ones.',
        tone: 'sky',
      },
      {
        id: 'selective',
        title: 'Hydration unit',
        role: 'Selective hydration',
        description:
          'Each boundary hydrates independently, and a clicked region can even be prioritised.',
        tone: 'cyan',
      },
      {
        id: 'fallback',
        title: 'Recovery scope',
        role: 'Mismatch handling',
        description:
          'A mismatch rewinds to client rendering only up to this boundary — the blast radius from the previous page.',
        tone: 'emerald',
      },
    ],
    note: 'With four jobs in one component, where you place Suspense becomes a performance decision, not just a loading-UI one.',
  },
  streaming: {
    badge: '02',
    eyebrow: 'streaming',
    title: 'Five stops for unfinished HTML',
    description:
      'The server does not hold the response waiting for data. It sends a placeholder first and fills the content in later.',
    steps: [
      {
        id: 'shell',
        num: '01',
        title: 'Flush the shell first',
        description: 'Everything finished outside a Suspense streams immediately.',
        tone: 'sky',
      },
      {
        id: 'comment',
        num: '02',
        title: 'Mark unfinished boundaries',
        description: 'A comment node starting with <!--$?--> and a template slot are left behind.',
        tone: 'violet',
      },
      {
        id: 'resolve',
        num: '03',
        title: 'The data arrives',
        description: 'On the server, that boundary data resolves and its render completes.',
        tone: 'teal',
      },
      {
        id: 'inject',
        num: '04',
        title: 'Send the chunk after',
        description:
          'The finished HTML and a tiny script follow, telling the browser to swap the placeholder for the real content.',
        tone: 'indigo',
      },
      {
        id: 'claim',
        num: '05',
        title: 'Hydrate just that boundary',
        description: 'The client notices the arrival and starts hydrating that subtree.',
        tone: 'emerald',
      },
    ],
    note: 'The script in step 04 is plain DOM manipulation, not React — so the swap happens even before the bundle loads.',
  },
  placement: {
    badge: '03',
    eyebrow: 'placement',
    title: 'What boundary placement changes',
    description:
      'On the same page, where Suspense sits changes both first-paint speed and recovery cost dramatically.',
    headers: ['Placement', 'Effect on streaming', 'Effect on hydration'],
    rows: [
      {
        placement: 'Tight around slow data',
        streaming: 'The shell goes out at once and only the slow part follows.',
        hydration: 'A mismatch redraws only that small region.',
      },
      {
        placement: 'Wrapping the whole page',
        streaming: 'Nothing can be sent until everything is ready.',
        hydration: 'One mismatch sends the whole page to client rendering.',
      },
      {
        placement: 'No boundary at all',
        streaming: 'Streaming cannot happen in the first place.',
        hydration: 'It climbs to the root and discards all the server HTML.',
      },
      {
        placement: 'Split too finely',
        streaming: 'Many chunks add protocol overhead.',
        hydration: 'A fallback flickers per boundary, which reads as noise.',
      },
    ],
    note: 'The test is whether the screen still makes sense if this part arrives late. That unit is the size of your boundary.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: 'Look for',
    lookFor:
      'updateDehydratedSuspenseComponent, isSuspenseInstancePending, retrySuspenseComponentWithoutHydrating',
    whyLabel: 'Why',
    why: 'Boundary state being distinguished purely by a comment data string ($, $?, $!) is the whole streaming protocol.',
    code: DEHYDRATED_CODE_EN,
    primaryCta: 'Read ReactFiberBeginWork.js',
    primaryHref: SUSPENSE_COMPONENT_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Nine pages into one model',
    description:
      'Waiting, failing and mismatching turned out to share a structure. The last page ties them together.',
    cta: 'Go to the next page',
    href: '/recovery-model-overview',
  },
};

export const suspenseHydrationLinkContent: Record<Locale, SuspenseHydrationLinkContent> = {
  ko,
  en,
};
