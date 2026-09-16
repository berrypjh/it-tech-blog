import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type InternalFlowStep = {
  title: string;
  description: string;
  tone: ToneKey;
  icon: 'fiber' | 'hooks' | 'jsx' | 'reconcile' | 'child';
};

export type HooksSidePoint = {
  text: string;
};

export type FunctionComponentContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string; line3: string };
    description: string;
    diagram: {
      title: string;
      codeStep: { title: string; code: string };
      hooksStep: { title: string; description: string };
      nextChildrenStep: { title: string; description: string; code: string };
      reconcileStep: { title: string; description: string };
    };
  };
  userCode: {
    badge: string;
    eyebrow: string;
    title: string;
    fileTab: string;
    code: string;
    callouts: { title: string; tone: ToneKey }[];
  };
  internalFlow: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: InternalFlowStep[];
  };
  renderWithHooks: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    fiberCard: {
      title: string;
      tagLabel: string;
      tagValue: string;
      badge: string;
      footer: string;
    };
  };
  nextChildren: {
    badge: string;
    eyebrow: string;
    title: string;
    leftTitle: string;
    leftHeader: string;
    leftCode: string;
    arrowLabel: string;
    rightTitle: string;
    rightDescription: string;
    rightChecklist: string[];
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  hooksLink: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    currentChapter: { label: string; title: string; description: string };
    nextChapter: { label: string; title: string; description: string };
    sidePointTitle: string;
    sidePoints: HooksSidePoint[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const USER_CODE = `function Profile() {
  return (
    <section>
      <Avatar />
      <Bio />
    </section>
  );
}`;

const JSX_TREE = `<section>
  <Avatar />
  <Bio />
</section>`;

const UPDATE_FUNCTION_CODE = `function updateFunctionComponent(current, workInProgress, Component, nextProps, renderLanes) {
  nextChildren = renderWithHooks(current, workInProgress, Component, nextProps, renderLanes);

  reconcileChildren(current, workInProgress, nextChildren, renderLanes);

  return workInProgress.child;
}`;

const ko: FunctionComponentContent = {
  hero: {
    badge: 'Render Phase · 5/10단계',
    title: {
      line1: '함수 컴포넌트는',
      line2: 'Render Phase에서',
      line3: '실제로 실행됩니다.',
    },
    description:
      'React는 컴포넌트를 호출해 새로운 JSX 결과를 얻고, 그 결과를 바탕으로 다음 자식 Fiber를 계산합니다.',
    diagram: {
      title: '함수 컴포넌트 처리 미리보기',
      codeStep: { title: 'Function Component 코드', code: USER_CODE },
      hooksStep: {
        title: 'renderWithHooks',
        description: '컴포넌트를 호출하고 Hook 호출 순서 관리',
      },
      nextChildrenStep: {
        title: 'nextChildren',
        description: '컴포넌트 실행 결과 (JSX 트리)',
        code: JSX_TREE,
      },
      reconcileStep: {
        title: 'reconcileChildren(...)',
        description: '새로운 자식에 맞춰 Fiber 트리 계산',
      },
    },
  },
  userCode: {
    badge: '01',
    eyebrow: '사용자 코드',
    title: '사용자 코드 예시',
    fileTab: 'Profile.js',
    code: USER_CODE,
    callouts: [
      { title: '함수 컴포넌트 정의', tone: 'sky' },
      { title: 'JSX 반환', tone: 'violet' },
      { title: '이 결과가 Fiber 계산의 출발점', tone: 'teal' },
    ],
  },
  internalFlow: {
    badge: '02',
    eyebrow: '내부 흐름',
    title: '내부 처리 흐름',
    description: 'FunctionComponent Fiber 하나가 처리되는 순서입니다.',
    steps: [
      {
        title: 'FunctionComponent Fiber',
        description: '예: Profile 컴포넌트 Fiber',
        tone: 'sky',
        icon: 'fiber',
      },
      {
        title: 'renderWithHooks(...)',
        description: '함수 컴포넌트를 호출하고 Hooks 처리',
        tone: 'teal',
        icon: 'hooks',
      },
      {
        title: 'nextChildren 생성',
        description: '컴포넌트 실행 결과 · JSX 트리',
        tone: 'violet',
        icon: 'jsx',
      },
      {
        title: 'reconcileChildren(...)',
        description: 'nextChildren을 바탕으로 자식 Fiber 계산',
        tone: 'indigo',
        icon: 'reconcile',
      },
      {
        title: 'child Fiber 반환',
        description: '다음으로 내려갈 첫 자식 Fiber',
        tone: 'sky',
        icon: 'child',
      },
    ],
  },
  renderWithHooks: {
    badge: '03',
    eyebrow: '컴포넌트 호출 입구',
    title: 'renderWithHooks의 역할',
    description:
      'renderWithHooks는 함수 컴포넌트를 실제로 호출하고, 동시에 Hook 호출 순서를 관리하는 입구입니다.',
    note: 'Hook의 상세 동작은 뒤의 "Hooks 내부 구조" 챕터에서 깊이 다룹니다.',
    fiberCard: {
      title: 'FunctionComponent Fiber',
      tagLabel: 'tag',
      tagValue: 'FunctionComponent',
      badge: 'Hooks',
      footer: 'props, state, lanes 등을 보유',
    },
  },
  nextChildren: {
    badge: '04',
    eyebrow: '새 자식 설명',
    title: 'nextChildren이 무엇인가?',
    leftTitle: '컴포넌트 실행 결과 (JSX)',
    leftHeader: 'JSX',
    leftCode: JSX_TREE,
    arrowLabel: '이 결과가',
    rightTitle: 'nextChildren',
    rightDescription: '이번 렌더가 새로 만든 자식 설명 · React Element 트리',
    rightChecklist: [
      'type, key, props를 가진 Element 객체들의 트리',
      '이를 기반으로 Fiber 자식들을 새로 계산',
      '실제 DOM이 아니라, 다음 Fiber 구조를 설명',
    ],
  },
  checkpoint: {
    badge: '05',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: '볼 것',
    lookFor: 'updateFunctionComponent, renderWithHooks, reconcileChildren',
    code: UPDATE_FUNCTION_CODE,
    primaryCta: 'ReactFiberBeginWork.js 읽기',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js',
  },
  hooksLink: {
    badge: '06',
    eyebrow: 'Hooks 연결',
    title: '뒤의 Hooks 내부 구조 챕터와 연결',
    description:
      '여기서 보이는 renderWithHooks는 dispatch, queue, lane과 연결된 Hooks 시스템의 핵심 함수입니다.',
    currentChapter: {
      label: '이 챕터',
      title: 'renderWithHooks',
      description: '컴포넌트 실행 + Hook 처리',
    },
    nextChapter: {
      label: '다음 챕터',
      title: 'Hooks 내부 구조',
      description: 'Dispatcher, Queue, Lane 등',
    },
    sidePointTitle: '핸드오프 포인트',
    sidePoints: [
      { text: 'Hook 호출 순서 관리' },
      { text: 'Hook state 저장 위치' },
      { text: 'update queue와의 연결' },
      { text: 'eager bailout, lane 연동' },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Host Component는 Render Phase에서 어떻게 처리되는가?',
    description:
      '함수 컴포넌트가 Render Phase에서 어떻게 다시 실행되는지 봤다면, 이제 DOM 요소를 표현하는 Host Component의 흐름을 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/host-component-process',
  },
};

const en: FunctionComponentContent = {
  hero: {
    badge: 'Render Phase · 5/10',
    title: {
      line1: 'Function components',
      line2: 'really run during',
      line3: 'the Render Phase.',
    },
    description:
      'React calls the component to obtain new JSX, then uses that result to compute the next child Fiber.',
    diagram: {
      title: 'Function component processing preview',
      codeStep: { title: 'Function Component code', code: USER_CODE },
      hooksStep: {
        title: 'renderWithHooks',
        description: 'Call the component, manage Hook call order',
      },
      nextChildrenStep: {
        title: 'nextChildren',
        description: 'Component output (JSX tree)',
        code: JSX_TREE,
      },
      reconcileStep: {
        title: 'reconcileChildren(...)',
        description: 'Compute the next Fiber children',
      },
    },
  },
  userCode: {
    badge: '01',
    eyebrow: 'USER CODE',
    title: 'User code example',
    fileTab: 'Profile.js',
    code: USER_CODE,
    callouts: [
      { title: 'function component definition', tone: 'sky' },
      { title: 'JSX return', tone: 'violet' },
      { title: 'this result is the Fiber-compute entry point', tone: 'teal' },
    ],
  },
  internalFlow: {
    badge: '02',
    eyebrow: 'INTERNAL FLOW',
    title: 'Internal processing flow',
    description: 'How a single FunctionComponent Fiber is processed.',
    steps: [
      {
        title: 'FunctionComponent Fiber',
        description: 'e.g. the Profile component Fiber',
        tone: 'sky',
        icon: 'fiber',
      },
      {
        title: 'renderWithHooks(...)',
        description: 'Call the function component and handle Hooks',
        tone: 'teal',
        icon: 'hooks',
      },
      {
        title: 'build nextChildren',
        description: 'Component output · JSX tree',
        tone: 'violet',
        icon: 'jsx',
      },
      {
        title: 'reconcileChildren(...)',
        description: 'Compute child Fibers from nextChildren',
        tone: 'indigo',
        icon: 'reconcile',
      },
      {
        title: 'return the child Fiber',
        description: 'The next child Fiber to descend into',
        tone: 'sky',
        icon: 'child',
      },
    ],
  },
  renderWithHooks: {
    badge: '03',
    eyebrow: 'COMPONENT CALL ENTRY',
    title: 'The role of renderWithHooks',
    description:
      'renderWithHooks calls the function component and is also the entry that manages the Hook call order.',
    note: 'Hook internals are covered in the upcoming "Hooks Internals" chapter.',
    fiberCard: {
      title: 'FunctionComponent Fiber',
      tagLabel: 'tag',
      tagValue: 'FunctionComponent',
      badge: 'Hooks',
      footer: 'holds props, state, lanes, ...',
    },
  },
  nextChildren: {
    badge: '04',
    eyebrow: 'NEXT CHILDREN',
    title: 'What is nextChildren?',
    leftTitle: 'Component output (JSX)',
    leftHeader: 'JSX',
    leftCode: JSX_TREE,
    arrowLabel: 'this becomes',
    rightTitle: 'nextChildren',
    rightDescription: 'The new children description from this render · a React Element tree',
    rightChecklist: [
      'A tree of Element objects with type / key / props',
      'Used to compute the next Fiber children',
      'Not real DOM — describes the next Fiber structure',
    ],
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-reconciler/src/ReactFiberBeginWork.js',
    lookForLabel: 'Look for',
    lookFor: 'updateFunctionComponent, renderWithHooks, reconcileChildren',
    code: UPDATE_FUNCTION_CODE,
    primaryCta: 'Read ReactFiberBeginWork.js',
    primaryHref:
      'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberBeginWork.js',
  },
  hooksLink: {
    badge: '06',
    eyebrow: 'HOOKS CHAPTER',
    title: 'Connection to the upcoming Hooks chapter',
    description:
      'The renderWithHooks shown here is the core function of the Hooks system, wired into dispatch, queue, and lanes.',
    currentChapter: {
      label: 'this chapter',
      title: 'renderWithHooks',
      description: 'component call + Hook handling',
    },
    nextChapter: {
      label: 'next chapter',
      title: 'Hooks Internals',
      description: 'Dispatcher, Queue, Lane, ...',
    },
    sidePointTitle: 'hand-off points',
    sidePoints: [
      { text: 'Hook call order management' },
      { text: 'where Hook state is stored' },
      { text: 'connection to the update queue' },
      { text: 'eager bailout & lane integration' },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How Host Components Are Processed in Render Phase',
    description:
      'Now that you see how function components re-run during the Render Phase, follow how Host Components — DOM elements — are processed.',
    cta: 'Go to the next page',
    href: '/host-component-process',
  },
};

export const functionComponentContent: Record<Locale, FunctionComponentContent> = { ko, en };
