import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/banner';

export type GroupTone = 'sky' | 'emerald' | 'violet' | 'amber' | 'rose' | 'teal';

export type FieldGroup = {
  id: 'identity' | 'connection' | 'input' | 'state-queue' | 'flags' | 'scheduling';
  title: string;
  fields: string[];
  description: string;
  tone: GroupTone;
  iconName: 'fingerprint' | 'network' | 'database' | 'list' | 'flag' | 'zap';
};

export type FlowStep = {
  id: string;
  number: string;
  title: string;
  body: string;
  tone: GroupTone | 'blue';
  iconName: 'cube' | 'pulse' | 'zap' | 'pencil' | 'flag' | 'shield';
};

export type PreviewItem = {
  id: string;
  title: string;
  body: string;
  iconName: 'send' | 'list' | 'compass' | 'arrowUp';
};

export type FiberCentralContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    emphasisInTitle: string;
    description: string;
    visualTitle: string;
    fiberLabel: string;
    fiberGroupFields: { id: FieldGroup['id']; rows: string[] }[];
  };
  summary: {
    number: string;
    eyebrow: string;
    title: string;
    cards: FieldGroup[];
  };
  flow: {
    number: string;
    eyebrow: string;
    title: string;
    steps: FlowStep[];
  };
  nextPreview: {
    number: string;
    eyebrow: string;
    title: string;
    question: { lines: string[]; emphasis: string };
    previewTitle: string;
    items: PreviewItem[];
  };
  finale: FinaleBannerContent;
};

const ko: FiberCentralContent = {
  hero: {
    badge: 'Fiber 트리 · 10/10단계',
    title: {
      line1: 'Fiber를 이해하면',
      line2: 'React 내부 렌더링의',
      line3: '절반이 보이기 시작합니다.',
    },
    emphasisInTitle: '절반이 보이기 시작합니다',
    description:
      'Fiber는 트리 노드이면서, 상태 저장소이고, 업데이트 기록이며, effect 표시판이고, 우선순위 컨테이너이고, 현재와 다음 화면을 잇는 연결점입니다.',
    visualTitle: 'Fiber 객체 전체 구조 요약',
    fiberLabel: 'Fiber',
    fiberGroupFields: [
      { id: 'identity', rows: ['tag', 'key', 'elementType', 'type', 'stateNode'] },
      { id: 'connection', rows: ['return', 'child', 'sibling', 'index'] },
      { id: 'input', rows: ['pendingProps', 'memoizedProps'] },
      { id: 'state-queue', rows: ['memoizedState', 'updateQueue'] },
      { id: 'flags', rows: ['flags', 'subtreeFlags', 'deletions'] },
      { id: 'scheduling', rows: ['lanes', 'childLanes', 'alternate'] },
    ],
  },
  summary: {
    number: '01',
    eyebrow: '최종 요약',
    title: '전체 구조 최종 요약',
    cards: [
      {
        id: 'identity',
        title: '정체성',
        fields: ['tag', 'key', 'elementType', 'type'],
        description: '이 Fiber가 누구인지 식별합니다.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'connection',
        title: '연결',
        fields: ['return', 'child', 'sibling'],
        description: 'Fiber 트리 구조를 연결합니다.',
        tone: 'emerald',
        iconName: 'network',
      },
      {
        id: 'input',
        title: '입력',
        fields: ['pendingProps', 'memoizedProps'],
        description: '새 입력과 이전 입력을 구분합니다.',
        tone: 'violet',
        iconName: 'database',
      },
      {
        id: 'state-queue',
        title: '상태와 큐',
        fields: ['memoizedState', 'updateQueue'],
        description: '현재 상태와 대기 중인 업데이트를 관리합니다.',
        tone: 'amber',
        iconName: 'list',
      },
      {
        id: 'flags',
        title: '변경 표시',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        description: '변경 효과와 삭제 정보를 표시합니다.',
        tone: 'rose',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        title: '스케줄링과 버전',
        fields: ['lanes', 'childLanes', 'alternate'],
        description: '우선순위 정보와 현재/다음 버전 연결을 관리합니다.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  flow: {
    number: '02',
    eyebrow: '렌더링 흐름 연결',
    title: '한 Fiber에서 전체 렌더링 흐름으로 연결',
    steps: [
      {
        id: 'fiber',
        number: '1',
        title: 'Fiber',
        body: 'React는 이 객체 하나로 트리 노드, 상태, 업데이트, effect, 우선순위, 버전 정보를 모두 담습니다.',
        tone: 'sky',
        iconName: 'cube',
      },
      {
        id: 'update',
        number: '2',
        title: '업데이트 발생',
        body: '사용자의 setState, props 변경, 이벤트 등이 발생합니다.',
        tone: 'emerald',
        iconName: 'pulse',
      },
      {
        id: 'lanes',
        number: '3',
        title: 'lanes 표시',
        body: 'Fiber의 우선순위가 lanes / childLanes에 기록됩니다.',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'render',
        number: '4',
        title: 'render phase에서 비교',
        body: '새 입력(pendingProps), update 등과 이전 결과를 비교하여 새 Fiber 트리를 계산합니다.',
        tone: 'amber',
        iconName: 'pencil',
      },
      {
        id: 'flags',
        number: '5',
        title: 'flags 기록',
        body: '변경이 필요한 부분에 flags / subtreeFlags / deletions를 남깁니다.',
        tone: 'rose',
        iconName: 'flag',
      },
      {
        id: 'commit',
        number: '6',
        title: 'commit phase에서 실제 반영',
        body: 'Commit 단계에서 기록된 effect를 실제 DOM/Host 환경에 반영합니다.',
        tone: 'blue',
        iconName: 'shield',
      },
    ],
  },
  nextPreview: {
    number: '04',
    eyebrow: '다음 챕터 예고',
    title: '다음 챕터 예고',
    question: {
      lines: [
        'Fiber 구조를 이해했다.',
        '그렇다면 사용자가 setState를 호출했을 때,',
        'React는 이 Fiber 트리 어디에 어떤 흔적을 남길까?',
      ],
      emphasis: 'setState',
    },
    previewTitle: '업데이트는 어떻게 시작되는가?',
    items: [
      {
        id: 'dispatchSetState',
        title: 'dispatchSetState',
        body: '사용자의 setState 호출 지점',
        iconName: 'send',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate',
        body: 'update 객체를 updateQueue에 연결',
        iconName: 'list',
      },
      {
        id: 'scheduleUpdateOnFiber',
        title: 'scheduleUpdateOnFiber',
        body: '해당 Fiber와 루트에 우선순위(lanes)를 표시',
        iconName: 'compass',
      },
      {
        id: 'rootBubble',
        title: 'root까지 올라가기',
        body: '상위 Fiber와 root까지 우선순위 전파',
        iconName: 'arrowUp',
      },
    ],
  },
  finale: {
    progressLabel: '6/15 챕터 완료',
    copyLine1: 'Fiber 트리가 렌더링의',
    copyLine2: '중심임을 이해했습니다.',
    copyLine3: '이제 업데이트의 시작으로.',
    primaryCta: '업데이트는 어떻게 시작되는가 읽기',
    primaryHref: '/state-update-start',
    secondaryCta: 'Fiber 트리 처음부터 다시 보기',
    secondaryHref: '/fiber-node-overview',
  },
};

const en: FiberCentralContent = {
  hero: {
    badge: 'Fiber Tree · 10/10',
    title: {
      line1: 'Once you understand Fiber,',
      line2: 'half of React’s internal',
      line3: 'rendering becomes visible.',
    },
    emphasisInTitle: 'becomes visible',
    description:
      'A Fiber is a tree node and a state store, an update log and an effect board, a priority container and the link between the current and the next screen.',
    visualTitle: 'Fiber object — whole-structure summary',
    fiberLabel: 'Fiber',
    fiberGroupFields: [
      { id: 'identity', rows: ['tag', 'key', 'elementType', 'type', 'stateNode'] },
      { id: 'connection', rows: ['return', 'child', 'sibling', 'index'] },
      { id: 'input', rows: ['pendingProps', 'memoizedProps'] },
      { id: 'state-queue', rows: ['memoizedState', 'updateQueue'] },
      { id: 'flags', rows: ['flags', 'subtreeFlags', 'deletions'] },
      { id: 'scheduling', rows: ['lanes', 'childLanes', 'alternate'] },
    ],
  },
  summary: {
    number: '01',
    eyebrow: 'FINAL SUMMARY',
    title: 'Whole-structure final summary',
    cards: [
      {
        id: 'identity',
        title: 'Identity',
        fields: ['tag', 'key', 'elementType', 'type'],
        description: 'Identifies what this Fiber represents.',
        tone: 'sky',
        iconName: 'fingerprint',
      },
      {
        id: 'connection',
        title: 'Connection',
        fields: ['return', 'child', 'sibling'],
        description: 'Connects the Fiber tree.',
        tone: 'emerald',
        iconName: 'network',
      },
      {
        id: 'input',
        title: 'Inputs',
        fields: ['pendingProps', 'memoizedProps'],
        description: 'Separates new input from prior input.',
        tone: 'violet',
        iconName: 'database',
      },
      {
        id: 'state-queue',
        title: 'State & queue',
        fields: ['memoizedState', 'updateQueue'],
        description: 'Manages current state and pending updates.',
        tone: 'amber',
        iconName: 'list',
      },
      {
        id: 'flags',
        title: 'Change flags',
        fields: ['flags', 'subtreeFlags', 'deletions'],
        description: 'Marks change effects and deletion info.',
        tone: 'rose',
        iconName: 'flag',
      },
      {
        id: 'scheduling',
        title: 'Scheduling & version',
        fields: ['lanes', 'childLanes', 'alternate'],
        description: 'Holds priority info and the current/next version link.',
        tone: 'teal',
        iconName: 'zap',
      },
    ],
  },
  flow: {
    number: '02',
    eyebrow: 'RENDERING FLOW',
    title: 'From one Fiber to the whole rendering flow',
    steps: [
      {
        id: 'fiber',
        number: '1',
        title: 'Fiber',
        body: 'React stores tree node, state, updates, effects, priority, and version info in this single object.',
        tone: 'sky',
        iconName: 'cube',
      },
      {
        id: 'update',
        number: '2',
        title: 'Update arrives',
        body: 'setState, prop changes, events, and so on produce an update.',
        tone: 'emerald',
        iconName: 'pulse',
      },
      {
        id: 'lanes',
        number: '3',
        title: 'Mark lanes',
        body: 'Priority for the Fiber is recorded into lanes / childLanes.',
        tone: 'violet',
        iconName: 'zap',
      },
      {
        id: 'render',
        number: '4',
        title: 'Compare during render phase',
        body: 'pendingProps and updates are compared with the previous result to compute a new Fiber tree.',
        tone: 'amber',
        iconName: 'pencil',
      },
      {
        id: 'flags',
        number: '5',
        title: 'Record flags',
        body: 'flags / subtreeFlags / deletions are written where changes are needed.',
        tone: 'rose',
        iconName: 'flag',
      },
      {
        id: 'commit',
        number: '6',
        title: 'Apply during commit phase',
        body: 'The commit phase applies recorded effects to the actual DOM/host environment.',
        tone: 'blue',
        iconName: 'shield',
      },
    ],
  },
  nextPreview: {
    number: '04',
    eyebrow: 'NEXT CHAPTER',
    title: 'Next chapter preview',
    question: {
      lines: [
        'You have understood the Fiber structure.',
        'When a user calls setState,',
        'where on the Fiber tree does React leave its mark?',
      ],
      emphasis: 'setState',
    },
    previewTitle: 'How does an update begin?',
    items: [
      {
        id: 'dispatchSetState',
        title: 'dispatchSetState',
        body: 'The entry point where setState is called.',
        iconName: 'send',
      },
      {
        id: 'enqueueUpdate',
        title: 'enqueueUpdate',
        body: 'Attaches the update object to updateQueue.',
        iconName: 'list',
      },
      {
        id: 'scheduleUpdateOnFiber',
        title: 'scheduleUpdateOnFiber',
        body: 'Marks priority (lanes) on the Fiber and the root.',
        iconName: 'compass',
      },
      {
        id: 'rootBubble',
        title: 'Bubble up to the root',
        body: 'Propagates priority up to ancestor Fibers and the root.',
        iconName: 'arrowUp',
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 6 of 15 complete',
    copyLine1: 'You see why the Fiber',
    copyLine2: 'tree is central to rendering.',
    copyLine3: 'Now how updates begin.',
    primaryCta: 'Read how updates begin',
    primaryHref: '/state-update-start',
    secondaryCta: 'Review the Fiber tree from the start',
    secondaryHref: '/fiber-node-overview',
  },
};

export const fiberCentralContent: Record<Locale, FiberCentralContent> = { ko, en };
