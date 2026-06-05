import type { Locale } from '@it-tech-blog/preferences';

import type { PipelineKey } from './tone';

export type IconKey =
  | 'mouse-click'
  | 'globe'
  | 'atom'
  | 'puzzle'
  | 'filter'
  | 'target'
  | 'search'
  | 'workflow'
  | 'split'
  | 'database'
  | 'hourglass'
  | 'zap'
  | 'send'
  | 'route'
  | 'compass'
  | 'layers';

export type PipelineMiniStep = {
  pipeline: PipelineKey;
  title: string;
  caption: string;
};

export type SupportQuestion = {
  body: string;
  iconKey: IconKey;
};

export type SubmitEntryStep = {
  pipeline: PipelineKey;
  title: string;
  caption: string;
  iconKey: IconKey;
};

export type PluginRoleCard = {
  pipeline: PipelineKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type LinkButton = { label: string; href: string };

export type FormActionsEventSystemContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    subtitleLines: [string, string, string];
    heroCode: {
      fileName: string;
      langBadge: 'TSX';
      code: string;
    };
    pipeline: {
      title: string;
      steps: PipelineMiniStep[];
      footer: string;
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string, string, string];
    supportQuestions: SupportQuestion[];
  };
  userFormCode: {
    number: string;
    eyebrow: string;
    title: string;
    code: {
      fileName: string;
      langBadge: 'TSX';
      code: string;
    };
    mock: {
      title: string;
      label: string;
      placeholder: string;
      button: string;
      info: string;
    };
  };
  submitPipeline: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: SubmitEntryStep[];
  };
  pluginRole: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: PluginRoleCard[];
  };
  actionExtraction: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    left: {
      title: string;
      code: string;
      result: string;
    };
    middle: {
      title: string;
      code: string;
      result: string;
    };
    right: {
      title: string;
      decision: string;
      yesLabel: string;
      yesBody: string;
      noLabel: string;
      noBody: string;
      final: string;
    };
  };
  formData: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    inputTitle: string;
    inputCode: string;
    objectTitle: string;
    objectLines: string[];
    descriptionBody: string;
  };
  pendingState: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: string;
    useFormStatusTitle: string;
    useFormStatusBody: string;
    useFormStatusCode: string;
  };
  startHostTransition: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: { pipeline: PipelineKey; title: string; caption: string; iconKey: IconKey }[];
    info: string;
  };
  internalCode: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    panels: { title: string; langBadge: 'JS'; code: string; pipeline: PipelineKey }[];
    fileCard: {
      title: string;
      fileName: string;
      buttonLabel: string;
      href: string;
    };
  };
  interactor: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    leftTitle: string;
    leftLabel: string;
    leftPlaceholder: string;
    leftButton: string;
    leftDescription: string;
    steps: { pipeline: PipelineKey; title: string; caption: string; iconKey: IconKey }[];
    statusLabels: { idle: string; current: string; done: string };
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    checklist: string[];
    readingGuideTitle: string;
    readingGuide: { body: string; highlights: string[] }[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
    title: string;
    cards: {
      number: string;
      pipeline: PipelineKey;
      title: string;
      body: string;
      iconKey: IconKey;
    }[];
  };
  nextCTA: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    primary: LinkButton;
    secondary: LinkButton[];
  };
};

const ko: FormActionsEventSystemContent = {
  hero: {
    badge: 'React 19 변화 · 3/10단계',
    titleLines: ['Form Actions는', '이벤트 시스템과', '어떻게 연결되는가?'],
    subtitleLines: [
      '<form action={fn}>은 submit 이벤트를',
      'pending state와 transition 실행으로',
      '이어주는 내부 파이프라인입니다.',
    ],
    heroCode: {
      fileName: 'TodoForm.tsx',
      langBadge: 'TSX',
      code: `function TodoForm() {
  async function saveTodo(formData: FormData) {
    await createTodo(formData);
  }

  return (
    <form action={saveTodo}>
      <input name="title" />
      <button type="submit">저장</button>
    </form>
  );
}`,
    },
    pipeline: {
      title: 'React 내부 Action 파이프라인',
      steps: [
        { pipeline: 'submit', title: 'Submit Event', caption: '폼 제출 이벤트 감지' },
        { pipeline: 'plugin', title: 'Action', caption: 'FormActionEventPlugin' },
        { pipeline: 'pending', title: 'Pending', caption: 'pendingState 생성' },
        { pipeline: 'transition', title: 'Transition', caption: 'startHostTransition 실행' },
      ],
      footer: '<form action={fn}> → React 업데이트 모델까지 한 흐름',
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      '폼 제출이 발생했을 때,',
      'React는 어떻게 action 함수를 찾고',
      'pending 상태를 만들며',
      'transition으로 이어갈까?',
    ],
    supportQuestions: [
      { body: '어디서 submit 이벤트를 받아올까?', iconKey: 'mouse-click' },
      { body: '어떤 action을 실행할지 어떻게 결정할까?', iconKey: 'split' },
      { body: 'pending 상태를 왜 만들고, 어디로 전달할까?', iconKey: 'hourglass' },
      { body: '어떻게 transition으로 연결되어 실행될까?', iconKey: 'zap' },
    ],
  },
  userFormCode: {
    number: '03',
    eyebrow: 'User-facing form code',
    title: '사용자가 보는 form action 코드',
    code: {
      fileName: 'TodoForm.tsx',
      langBadge: 'TSX',
      code: `function TodoForm() {
  async function saveTodo(formData: FormData) {
    await createTodo(formData);
  }

  return (
    <form action={saveTodo}>
      <input name="title" placeholder="할 일을 입력하세요" />
      <button type="submit">저장</button>
    </form>
  );
}`,
    },
    mock: {
      title: '실제 렌더된 폼 UI',
      label: '할 일',
      placeholder: '할 일을 입력하세요',
      button: '저장',
      info: '이 폼을 submit하면 React 내부 Action 파이프라인이 시작됩니다.',
    },
  },
  submitPipeline: {
    number: '04',
    eyebrow: 'Submit Entry Pipeline',
    title: 'submit 이벤트가 들어오는 순간',
    description:
      '브라우저의 submit 이벤트가 React 이벤트 시스템 안의 plugin에 도달하기까지의 4단계.',
    steps: [
      {
        pipeline: 'submit',
        title: '사용자 클릭',
        caption: 'button submit',
        iconKey: 'mouse-click',
      },
      {
        pipeline: 'submit',
        title: 'native submit event',
        caption: '브라우저의 이벤트',
        iconKey: 'globe',
      },
      {
        pipeline: 'action',
        title: 'React event system',
        caption: '이벤트 위임',
        iconKey: 'atom',
      },
      {
        pipeline: 'plugin',
        title: 'FormActionEventPlugin',
        caption: 'React 내부 플러그인',
        iconKey: 'puzzle',
      },
    ],
  },
  pluginRole: {
    number: '05',
    eyebrow: 'Plugin Roles',
    title: 'FormActionEventPlugin의 역할',
    description: '하나의 plugin이 submit 흐름을 React action 흐름으로 바꾸는 4가지 작업.',
    cards: [
      {
        pipeline: 'submit',
        title: 'submit 이벤트만 감지',
        body: '필요한 이벤트는 수거하고 form submit만 처리합니다.',
        iconKey: 'filter',
      },
      {
        pipeline: 'action',
        title: 'form 요소 확인',
        body: '이벤트가 발생한 form 요소를 정확히 찾아냅니다.',
        iconKey: 'target',
      },
      {
        pipeline: 'plugin',
        title: 'action prop 추출',
        body: 'formAction 또는 button.formAction을 읽어 action 함수를 찾습니다.',
        iconKey: 'search',
      },
      {
        pipeline: 'transition',
        title: 'React action 흐름으로 변환',
        body: 'pendingState 생성과 transition 실행으로 이어지게 만듭니다.',
        iconKey: 'workflow',
      },
    ],
  },
  actionExtraction: {
    number: '06',
    eyebrow: 'Action / formAction',
    title: 'action / formAction 추출',
    description: '두 가지 선언 방식 중 어느 함수를 실제로 호출하는지 결정하는 흐름.',
    left: {
      title: '폼 실질 action',
      code: `<form action={saveTodo}>
  <button type="submit">저장</button>
</form>`,
      result: '폼의 action(saveTodo)이 실행',
    },
    middle: {
      title: '버튼별 formAction 우선',
      code: `<form action={saveTodo}>
  <button type="submit" formAction={saveDraft}>
    임시저장
  </button>
</form>`,
      result: '버튼의 formAction(saveDraft)이 실행',
    },
    right: {
      title: '실제 실행할 action 결정 흐름',
      decision: '버튼에 formAction이 있나?',
      yesLabel: 'Yes',
      yesBody: 'button.formAction 우선 실행',
      noLabel: 'No',
      noBody: 'form.action 실행',
      final: '결정된 action 함수 호출',
    },
  },
  formData: {
    number: '07',
    eyebrow: 'FormData',
    title: 'FormData 생성',
    description:
      '폼 안의 name/value 쌍이 표준 FormData 객체로 수집되어 action의 인자로 전달됩니다.',
    inputTitle: '폼 입력 예시',
    inputCode: `<input name="title" value="React 19" />
<input name="priority" value="high" />`,
    objectTitle: 'FormData',
    objectLines: ['{', '  title: "React 19",', '  priority: "high"', '}'],
    descriptionBody: '폼의 모든 name/value 쌍이 FormData로 수집되어 action에 전달됩니다.',
  },
  pendingState: {
    number: '08',
    eyebrow: 'pendingState',
    title: 'pendingState 생성',
    description:
      'pendingState는 현재 form action의 상태 스냅샷이며, 하위 컴포넌트가 useFormStatus로 읽을 값입니다.',
    code: `const pendingState = {
  pending: true,
  data: formData,
  method: form.method,
  action: action,
};`,
    useFormStatusTitle: 'useFormStatus와 연결',
    useFormStatusBody: '하위 컴포넌트에서 현재 form action의 진행 상태를 읽을 수 있게 됩니다.',
    useFormStatusCode: `const { pending } = useFormStatus();`,
  },
  startHostTransition: {
    number: '09',
    eyebrow: 'startHostTransition',
    title: 'startHostTransition 연결',
    description: 'pendingState가 준비된 순간 Action은 React의 Transition 스케줄링에 올라탑니다.',
    steps: [
      {
        pipeline: 'pending',
        title: 'pendingState 준비 완료',
        caption: 'pending, data, method, action 모두 준비된 상태',
        iconKey: 'hourglass',
      },
      {
        pipeline: 'plugin',
        title: 'startHostTransition(...) 호출',
        caption: 'React의 Transition 시스템을 통해 비동기 action 실행을 스케줄링',
        iconKey: 'zap',
      },
      {
        pipeline: 'transition',
        title: 'Transition 기반 action 실행',
        caption: 'action 함수 실행 → 결과 반영 → pending 해제 및 UI 업데이트',
        iconKey: 'workflow',
      },
    ],
    info: '이 지점에서 Actions는 React의 업데이트 모델에 올라선 상태가 됩니다.',
  },
  internalCode: {
    number: '10',
    eyebrow: 'React Internals',
    title: '실제 코드 미리보기 (React 내부)',
    description: 'FormActionEventPlugin의 실제 코드 흐름을 두 패널로 압축해 보여줍니다.',
    panels: [
      {
        title: 'submit 이벤트 필터링',
        langBadge: 'JS',
        pipeline: 'submit',
        code: `function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent) {
  if (domEventName !== "submit") {
    return;
  }

  // submit 이벤트가 아니면 이 플러그인은 아무것도 하지 않음
}`,
      },
      {
        title: 'pendingState 생성 및 Transition 실행',
        langBadge: 'JS',
        pipeline: 'transition',
        code: `const pendingState = {
  pending: true,
  data: formData,
  method: form.method,
  action,
};

startHostTransition(formInst, pendingState, action, formData);`,
      },
    ],
    fileCard: {
      title: '관련 파일',
      fileName: 'FormActionEventPlugin.js',
      buttonLabel: 'GitHub에서 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    },
  },
  interactor: {
    number: '11',
    eyebrow: 'Pipeline Interactor',
    title: 'Form Action 파이프라인 인터랙터',
    description:
      '왼쪽 폼을 submit하면 오른쪽 stepper가 단계별로 활성화됩니다. 버튼 한 번에 5단계가 모두 통과합니다.',
    leftTitle: '실행: 폼 제출 흐름 단계',
    leftLabel: '할 일',
    leftPlaceholder: '할 일을 입력하세요',
    leftButton: '저장',
    leftDescription: '버튼을 클릭하면 각 단계가 순서대로 활성화됩니다.',
    steps: [
      {
        pipeline: 'submit',
        title: 'submit 감지',
        caption: 'native submit event가 발생하고 React가 감지',
        iconKey: 'mouse-click',
      },
      {
        pipeline: 'plugin',
        title: 'action 추출',
        caption: 'form action 또는 button formAction을 추출',
        iconKey: 'search',
      },
      {
        pipeline: 'formData',
        title: 'FormData 생성',
        caption: '폼의 입력 값이 FormData로 변환',
        iconKey: 'database',
      },
      {
        pipeline: 'pending',
        title: 'pendingState 생성',
        caption: 'pending: true 상태 객체 생성',
        iconKey: 'hourglass',
      },
      {
        pipeline: 'transition',
        title: 'transition 실행',
        caption: 'startHostTransition으로 비동기 Action 실행',
        iconKey: 'zap',
      },
    ],
    statusLabels: { idle: '대기 중', current: '현재 단계', done: '완료' },
  },
  mission: {
    number: '12',
    eyebrow: 'Follow Along',
    title: '직접 따라가기 보기',
    description: '코드를 직접 열고, 함수 흐름을 손가락으로 짚어가며 따라가 보세요.',
    checklist: [
      'submit event에서 FormActionEventPlugin으로 들어가는 흐름을 찾는다.',
      '폼 action과 버튼 formAction이 어떻게 구분되는지 본다.',
      'pendingState 객체의 역할을 확인한다.',
      'startHostTransition이 왜 필요한지 한 줄로 적는다.',
      '한 줄 요약을 적는다.',
    ],
    readingGuideTitle: '읽기 가이드',
    readingGuide: [
      {
        body: 'ReactSource에서 [[FormActionEventPlugin.js]] 열기',
        highlights: ['FormActionEventPlugin.js'],
      },
      {
        body: '[[extractEvents]], [[createEventListenerWrapper]], [[extractFormAction]] 등 함수 흐름 확인',
        highlights: ['extractEvents', 'createEventListenerWrapper', 'extractFormAction'],
      },
      {
        body: '[[pendingState]]가 [[useFormStatus]]와 어떻게 연결되는지 확인',
        highlights: ['pendingState', 'useFormStatus'],
      },
      {
        body: '[[startHostTransition]]이 스케줄링 / 업데이트 우선순위에 어떤 영향을 주는지 확인',
        highlights: ['startHostTransition'],
      },
    ],
  },
  takeaways: {
    number: '13',
    eyebrow: 'Key Takeaways',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        pipeline: 'submit',
        title: 'Form Actions는 submit 이벤트에서 시작된다.',
        body: '브라우저의 submit 이벤트가 React 이벤트 시스템으로 들어온다.',
        iconKey: 'mouse-click',
      },
      {
        number: '02',
        pipeline: 'action',
        title: 'FormActionEventPlugin이 실행 준비를 담당한다.',
        body: 'action 추출, FormData 생성, pendingState 구성까지 처리한다.',
        iconKey: 'workflow',
      },
      {
        number: '03',
        pipeline: 'transition',
        title: 'pendingState와 transition이 React 19 action 흐름의 핵심이다.',
        body: 'useFormStatus와 연결되고, Transition을 통해 비동기 action이 실행된다.',
        iconKey: 'zap',
      },
    ],
  },
  nextCTA: {
    eyebrow: '다음 단계로',
    titleLines: ['다음:', 'use()는 Suspense / Error Boundary 흐름에 무엇을 추가했나?'],
    description:
      '다음 페이지에서는 use()가 Promise, Suspense, Error Boundary, thenable tracking과 어떻게 연결되는지 살펴봅니다.',
    primary: {
      label: '다음: use()는 Suspense / Error Boundary 흐름에 무엇을 추가했나?',
      href: '/use-suspense-error-model',
    },
    secondary: [
      { label: 'Form Actions 흐름 다시 보기', href: '#hero-heading' },
      { label: 'React 소스코드 열기', href: 'https://github.com/facebook/react' },
    ],
  },
};

const en: FormActionsEventSystemContent = {
  hero: {
    badge: 'React 19 Changes · 3/10',
    titleLines: ['How do Form Actions', 'connect to the', 'event system?'],
    subtitleLines: [
      '<form action={fn}> is the internal pipeline that',
      'turns a submit event into pending state',
      'and transition-scheduled action execution.',
    ],
    heroCode: {
      fileName: 'TodoForm.tsx',
      langBadge: 'TSX',
      code: `function TodoForm() {
  async function saveTodo(formData: FormData) {
    await createTodo(formData);
  }

  return (
    <form action={saveTodo}>
      <input name="title" />
      <button type="submit">Save</button>
    </form>
  );
}`,
    },
    pipeline: {
      title: "React's internal Action pipeline",
      steps: [
        { pipeline: 'submit', title: 'Submit Event', caption: 'Detect the form submit' },
        { pipeline: 'plugin', title: 'Action', caption: 'FormActionEventPlugin' },
        { pipeline: 'pending', title: 'Pending', caption: 'Build pendingState' },
        { pipeline: 'transition', title: 'Transition', caption: 'Run startHostTransition' },
      ],
      footer: '<form action={fn}> → React update model, in one flow',
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'When the form submits, how does React',
      'find the action function, build a pending',
      'state, and hand it off to a transition?',
      '',
    ],
    supportQuestions: [
      { body: 'Where is the submit event received?', iconKey: 'mouse-click' },
      { body: 'How is it decided which action runs?', iconKey: 'split' },
      { body: 'Why build a pending state, and where does it go?', iconKey: 'hourglass' },
      { body: 'How does it get wired into a transition?', iconKey: 'zap' },
    ],
  },
  userFormCode: {
    number: '03',
    eyebrow: 'User-facing form code',
    title: 'The form action code the user actually writes',
    code: {
      fileName: 'TodoForm.tsx',
      langBadge: 'TSX',
      code: `function TodoForm() {
  async function saveTodo(formData: FormData) {
    await createTodo(formData);
  }

  return (
    <form action={saveTodo}>
      <input name="title" placeholder="Enter a todo" />
      <button type="submit">Save</button>
    </form>
  );
}`,
    },
    mock: {
      title: 'Rendered form UI',
      label: 'Todo',
      placeholder: 'Enter a todo',
      button: 'Save',
      info: "Submitting this form kicks off React's internal Action pipeline.",
    },
  },
  submitPipeline: {
    number: '04',
    eyebrow: 'Submit Entry Pipeline',
    title: 'The moment the submit event enters React',
    description: 'Four steps from native browser submit to a React-internal plugin.',
    steps: [
      {
        pipeline: 'submit',
        title: 'User clicks',
        caption: 'button submit',
        iconKey: 'mouse-click',
      },
      {
        pipeline: 'submit',
        title: 'Native submit event',
        caption: 'Browser event fires',
        iconKey: 'globe',
      },
      {
        pipeline: 'action',
        title: 'React event system',
        caption: 'Delegated event handling',
        iconKey: 'atom',
      },
      {
        pipeline: 'plugin',
        title: 'FormActionEventPlugin',
        caption: 'React-internal plugin',
        iconKey: 'puzzle',
      },
    ],
  },
  pluginRole: {
    number: '05',
    eyebrow: 'Plugin Roles',
    title: "FormActionEventPlugin's responsibilities",
    description: 'Four jobs the plugin does to turn a submit into a React action flow.',
    cards: [
      {
        pipeline: 'submit',
        title: 'Only handle submit',
        body: 'Other events flow through; only form submits are picked up.',
        iconKey: 'filter',
      },
      {
        pipeline: 'action',
        title: 'Identify the form element',
        body: 'Finds the exact form element the event came from.',
        iconKey: 'target',
      },
      {
        pipeline: 'plugin',
        title: 'Extract action prop',
        body: 'Reads formAction or button.formAction to locate the action function.',
        iconKey: 'search',
      },
      {
        pipeline: 'transition',
        title: 'Hand off to action flow',
        body: 'Builds pendingState and kicks off the transition.',
        iconKey: 'workflow',
      },
    ],
  },
  actionExtraction: {
    number: '06',
    eyebrow: 'Action / formAction',
    title: 'Picking the action / formAction',
    description: 'How the plugin decides which function will actually run.',
    left: {
      title: 'Form-level action',
      code: `<form action={saveTodo}>
  <button type="submit">Save</button>
</form>`,
      result: "The form's action(saveTodo) runs",
    },
    middle: {
      title: 'Button formAction wins',
      code: `<form action={saveTodo}>
  <button type="submit" formAction={saveDraft}>
    Save draft
  </button>
</form>`,
      result: "The button's formAction(saveDraft) runs",
    },
    right: {
      title: 'Decision flow for which action runs',
      decision: 'Does the button have a formAction?',
      yesLabel: 'Yes',
      yesBody: 'Run button.formAction first',
      noLabel: 'No',
      noBody: 'Run form.action',
      final: 'Call the chosen action function',
    },
  },
  formData: {
    number: '07',
    eyebrow: 'FormData',
    title: 'Building FormData',
    description:
      'name/value pairs inside the form are collected into a standard FormData object and passed to the action.',
    inputTitle: 'Form input example',
    inputCode: `<input name="title" value="React 19" />
<input name="priority" value="high" />`,
    objectTitle: 'FormData',
    objectLines: ['{', '  title: "React 19",', '  priority: "high"', '}'],
    descriptionBody: 'All name/value pairs are collected into FormData and passed to the action.',
  },
  pendingState: {
    number: '08',
    eyebrow: 'pendingState',
    title: 'Constructing pendingState',
    description:
      'pendingState is a snapshot of the current form action — exactly what children read via useFormStatus.',
    code: `const pendingState = {
  pending: true,
  data: formData,
  method: form.method,
  action: action,
};`,
    useFormStatusTitle: 'Wired to useFormStatus',
    useFormStatusBody: "Children can read the current form action's progress.",
    useFormStatusCode: `const { pending } = useFormStatus();`,
  },
  startHostTransition: {
    number: '09',
    eyebrow: 'startHostTransition',
    title: 'Connecting startHostTransition',
    description: "Once pendingState is ready, the Action rides on React's transition scheduling.",
    steps: [
      {
        pipeline: 'pending',
        title: 'pendingState ready',
        caption: 'pending, data, method, action all set',
        iconKey: 'hourglass',
      },
      {
        pipeline: 'plugin',
        title: 'Call startHostTransition(...)',
        caption: "Schedules async action via React's Transition system",
        iconKey: 'zap',
      },
      {
        pipeline: 'transition',
        title: 'Transition-based action run',
        caption: 'Run action → apply result → clear pending → UI update',
        iconKey: 'workflow',
      },
    ],
    info: "At this point, Actions are riding on React's update model.",
  },
  internalCode: {
    number: '10',
    eyebrow: 'React Internals',
    title: 'Source-level preview (React internals)',
    description: "FormActionEventPlugin's real flow, compressed into two panels.",
    panels: [
      {
        title: 'Submit-event filter',
        langBadge: 'JS',
        pipeline: 'submit',
        code: `function extractEvents(dispatchQueue, domEventName, targetInst, nativeEvent) {
  if (domEventName !== "submit") {
    return;
  }

  // If it's not a submit event, this plugin does nothing.
}`,
      },
      {
        title: 'pendingState + Transition',
        langBadge: 'JS',
        pipeline: 'transition',
        code: `const pendingState = {
  pending: true,
  data: formData,
  method: form.method,
  action,
};

startHostTransition(formInst, pendingState, action, formData);`,
      },
    ],
    fileCard: {
      title: 'Related file',
      fileName: 'FormActionEventPlugin.js',
      buttonLabel: 'Open on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    },
  },
  interactor: {
    number: '11',
    eyebrow: 'Pipeline Interactor',
    title: 'Form Action pipeline interactor',
    description: 'Submitting the form on the left activates each step on the right in order.',
    leftTitle: 'Run: form submit stages',
    leftLabel: 'Todo',
    leftPlaceholder: 'Enter a todo',
    leftButton: 'Save',
    leftDescription: 'Click the button to walk through each stage in order.',
    steps: [
      {
        pipeline: 'submit',
        title: 'Detect submit',
        caption: 'Native submit event fires and React picks it up',
        iconKey: 'mouse-click',
      },
      {
        pipeline: 'plugin',
        title: 'Extract action',
        caption: 'Pull the form action or button formAction',
        iconKey: 'search',
      },
      {
        pipeline: 'formData',
        title: 'Build FormData',
        caption: 'Form inputs are turned into FormData',
        iconKey: 'database',
      },
      {
        pipeline: 'pending',
        title: 'Build pendingState',
        caption: 'pending: true state object',
        iconKey: 'hourglass',
      },
      {
        pipeline: 'transition',
        title: 'Run transition',
        caption: 'Async Action runs via startHostTransition',
        iconKey: 'zap',
      },
    ],
    statusLabels: { idle: 'Idle', current: 'Active step', done: 'Done' },
  },
  mission: {
    number: '12',
    eyebrow: 'Follow Along',
    title: 'Follow-along missions',
    description: 'Open the real code and walk through the function chain yourself.',
    checklist: [
      'Trace from submit event into FormActionEventPlugin.',
      'See how form action and button formAction are distinguished.',
      "Verify pendingState's role.",
      'Write one line about why startHostTransition is needed.',
      'Write a one-line summary of the whole flow.',
    ],
    readingGuideTitle: 'Reading guide',
    readingGuide: [
      {
        body: 'Open [[FormActionEventPlugin.js]] in the React source',
        highlights: ['FormActionEventPlugin.js'],
      },
      {
        body: 'Check the function flow: [[extractEvents]], [[createEventListenerWrapper]], [[extractFormAction]]',
        highlights: ['extractEvents', 'createEventListenerWrapper', 'extractFormAction'],
      },
      {
        body: 'See how [[pendingState]] is wired into [[useFormStatus]]',
        highlights: ['pendingState', 'useFormStatus'],
      },
      {
        body: 'See how [[startHostTransition]] affects scheduling and update priority',
        highlights: ['startHostTransition'],
      },
    ],
  },
  takeaways: {
    number: '13',
    eyebrow: 'Key Takeaways',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        pipeline: 'submit',
        title: 'Form Actions start at the submit event.',
        body: "The browser's submit event flows into React's event system.",
        iconKey: 'mouse-click',
      },
      {
        number: '02',
        pipeline: 'action',
        title: 'FormActionEventPlugin prepares the run.',
        body: 'Extracts the action, builds FormData, constructs pendingState.',
        iconKey: 'workflow',
      },
      {
        number: '03',
        pipeline: 'transition',
        title: 'pendingState + transition is the heart of React 19 Actions.',
        body: 'Wired into useFormStatus, then run async via Transition.',
        iconKey: 'zap',
      },
    ],
  },
  nextCTA: {
    eyebrow: 'Next step',
    titleLines: ['Next:', 'What did use() add to Suspense / Error Boundary?'],
    description:
      'Next we look at how use() connects Promise, Suspense, Error Boundary, and thenable tracking.',
    primary: {
      label: 'Next: What did use() add to Suspense / Error Boundary?',
      href: '/use-suspense-error-model',
    },
    secondary: [
      { label: 'Replay the Form Actions flow', href: '#hero-heading' },
      { label: 'Open the React source', href: 'https://github.com/facebook/react' },
    ],
  },
};

export const formActionsEventSystemContent: Record<Locale, FormActionsEventSystemContent> = {
  ko,
  en,
};
