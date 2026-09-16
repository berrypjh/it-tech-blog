import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type StageId = 'submit' | 'plugin' | 'formdata' | 'pending' | 'transition';

export type HeroStage = {
  id: StageId;
  label: string;
  caption: string;
  tone: ToneKey;
};

export type PipelineStep = {
  id: StageId;
  num: string;
  title: string;
  description: string;
  tone: ToneKey;
};

export type FieldId = 'pending' | 'data' | 'method' | 'action';

export type PendingField = {
  id: FieldId;
  title: string;
  description: string;
  value: string;
  tone: ToneKey;
};

export type DeclarationRow = {
  declaration: string;
  runs: string;
  note: string;
};

export type FormActionsEventSystemContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    stages: HeroStage[];
  };
  pipeline: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: PipelineStep[];
    note: string;
  };
  which: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    form: { title: string; badge: string; description: string; bullets: string[] };
    bridge: { headline: string; sub: string };
    button: { title: string; badge: string; description: string; bullets: string[] };
    note: string;
  };
  pendingState: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    fields: PendingField[];
    note: string;
  };
  declarations: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: DeclarationRow[];
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

const KO_CODE = `// packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js
function extractEvents(dispatchQueue, domEventName, maybeTargetInst, nativeEvent) {
  if (domEventName !== 'submit') return;          // 다른 이벤트는 건드리지 않는다

  const form = nativeEvent.target;
  const submitter = nativeEvent.submitter;
  let action = getFiberCurrentPropsFromNode(form).action;

  if (submitter) {
    const submitterProps = getFiberCurrentPropsFromNode(submitter);
    action = submitterProps.formAction ?? action;  // 버튼 쪽이 이긴다
  }
  if (typeof action !== 'function') return;        // 문자열이면 브라우저에 맡긴다

  nativeEvent.preventDefault();
  const formData = submitter ? new FormData(form, submitter) : new FormData(form);
  const pendingState = { pending: true, data: formData, method: form.method, action };

  startHostTransition(formInst, pendingState, action, formData);
}`;

const EN_CODE = `// packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js
function extractEvents(dispatchQueue, domEventName, maybeTargetInst, nativeEvent) {
  if (domEventName !== 'submit') return;          // leaves every other event alone

  const form = nativeEvent.target;
  const submitter = nativeEvent.submitter;
  let action = getFiberCurrentPropsFromNode(form).action;

  if (submitter) {
    const submitterProps = getFiberCurrentPropsFromNode(submitter);
    action = submitterProps.formAction ?? action;  // the button wins
  }
  if (typeof action !== 'function') return;        // a string is left to the browser

  nativeEvent.preventDefault();
  const formData = submitter ? new FormData(form, submitter) : new FormData(form);
  const pendingState = { pending: true, data: formData, method: form.method, action };

  startHostTransition(formInst, pendingState, action, formData);
}`;

const PLUGIN_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js';

const ko: FormActionsEventSystemContent = {
  hero: {
    badge: 'React 19 변화 · 3/10단계',
    title: {
      line1: 'form의 action은 문자열이 아니라',
      line2: '이벤트 플러그인 하나가 여는 문이다',
    },
    description:
      '앞 페이지의 Action이 어디서 시작되는지를 봅니다. 답은 이벤트 시스템에 플러그인 하나가 더 붙은 것입니다.',
    diagramBadge: 'submit pipeline',
    diagramCaption: 'native submit → startHostTransition',
    stages: [
      { id: 'submit', label: 'submit', caption: '브라우저가 native 이벤트를 쏜다', tone: 'cyan' },
      { id: 'plugin', label: 'plugin', caption: 'FormActionEventPlugin이 받는다', tone: 'cyan' },
      { id: 'formdata', label: 'FormData', caption: '입력값을 표준 객체로 모은다', tone: 'blue' },
      { id: 'pending', label: 'pendingState', caption: '제출 스냅샷을 만든다', tone: 'violet' },
      {
        id: 'transition',
        label: 'transition',
        caption: 'Action을 업데이트 모델에 올린다',
        tone: 'emerald',
      },
    ],
  },
  pipeline: {
    badge: '01',
    eyebrow: 'five stages',
    title: '제출 버튼에서 transition까지 다섯 칸',
    description:
      '이 다섯 칸은 전부 한 함수 안에 있습니다. 플러그인의 extractEvents가 순서대로 다 합니다.',
    steps: [
      {
        id: 'submit',
        num: '01',
        title: 'submit 이벤트만 걸러 낸다',
        description: '이벤트 위임으로 올라온 것 중 submit이 아니면 이 플러그인은 곧바로 빠집니다.',
        tone: 'cyan',
      },
      {
        id: 'plugin',
        num: '02',
        title: '실행할 함수를 고른다',
        description:
          'form의 action과 눌린 버튼의 formAction을 읽고, 함수가 아니면 브라우저에 넘깁니다.',
        tone: 'cyan',
      },
      {
        id: 'formdata',
        num: '03',
        title: 'FormData를 만든다',
        description:
          'preventDefault로 기본 제출을 막고, 폼의 name/value를 표준 FormData로 모읍니다.',
        tone: 'blue',
      },
      {
        id: 'pending',
        num: '04',
        title: 'pendingState를 만든다',
        description:
          'pending·data·method·action 네 칸짜리 스냅샷을 만듭니다. useFormStatus가 읽을 값입니다.',
        tone: 'violet',
      },
      {
        id: 'transition',
        num: '05',
        title: 'startHostTransition으로 넘긴다',
        description:
          '여기서부터는 폼이 아니라 업데이트입니다. 앞 페이지에서 본 Action 흐름과 합류합니다.',
        tone: 'emerald',
      },
    ],
    note: '세 번째 칸의 preventDefault가 경계입니다. 그 이후로 브라우저는 이 제출에 관여하지 않습니다.',
  },
  which: {
    badge: '02',
    eyebrow: 'who wins',
    title: '폼과 버튼이 둘 다 함수를 들고 있으면',
    description:
      'HTML의 formaction 속성이 form의 action을 덮는 규칙을 React가 그대로 따릅니다. 새 규칙이 아닙니다.',
    form: {
      title: 'form의 action',
      badge: '기본값',
      description: '폼 전체의 기본 제출 동작입니다. 버튼이 따로 말하지 않으면 이것이 실행됩니다.',
      bullets: [
        'form 요소의 props에서 action을 읽는다',
        '함수면 React가 가로채고, 문자열이면 브라우저가 처리한다',
        '폼 안의 모든 submit 버튼이 이 동작을 공유한다',
        'useActionState가 돌려준 formAction도 보통 여기에 꽂는다',
      ],
    },
    bridge: {
      headline: '눌린 버튼이 있으면\n버튼 쪽을 먼저 본다',
      sub: 'submitter의 formAction이 있으면 그것이 form의 action을 덮습니다. HTML 표준과 같은 순서입니다.',
    },
    button: {
      title: '버튼의 formAction',
      badge: '우선',
      description:
        '같은 폼에서 버튼마다 다른 동작이 필요할 때 씁니다. 임시저장과 제출 같은 경우입니다.',
      bullets: [
        'nativeEvent.submitter로 실제 눌린 버튼을 찾는다',
        '그 버튼의 props에서 formAction을 읽는다',
        '값이 있으면 form의 action 대신 이것을 실행한다',
        'FormData도 submitter를 넘겨 만들어 버튼의 name/value가 포함된다',
      ],
    },
    note: 'FormData를 만들 때 submitter를 같이 넘기는 점이 중요합니다. 어떤 버튼이 눌렸는지가 데이터에 남습니다.',
  },
  pendingState: {
    badge: '03',
    eyebrow: 'snapshot',
    title: 'pendingState가 담는 네 칸',
    description:
      '이 객체 하나가 제출의 전부입니다. 하위 컴포넌트는 useFormStatus로 이 네 칸을 그대로 읽습니다.',
    fields: [
      {
        id: 'pending',
        title: '진행 중인가',
        description: 'Action이 도는 동안 true입니다. 제출 버튼을 잠그는 데 가장 많이 씁니다.',
        value: 'pending: true',
        tone: 'blue',
      },
      {
        id: 'data',
        title: '무엇을 보냈나',
        description: '방금 만든 FormData입니다. 낙관적 UI에서 보낸 값을 미리 그릴 때 씁니다.',
        value: 'data: FormData',
        tone: 'cyan',
      },
      {
        id: 'method',
        title: '어떤 메서드인가',
        description: 'form의 method 속성입니다. 대개 post이며 그대로 스냅샷에 실립니다.',
        value: "method: 'post'",
        tone: 'indigo',
      },
      {
        id: 'action',
        title: '무엇을 실행하나',
        description: '앞 단계에서 고른 함수 자체입니다. 어떤 Action이 도는지 식별할 수 있습니다.',
        value: 'action: fn',
        tone: 'violet',
      },
    ],
    note: 'useFormStatus가 하위 컴포넌트에서만 동작하는 이유가 여기 있습니다. 이 스냅샷은 form Fiber에 붙어 context로 내려갑니다.',
  },
  declarations: {
    badge: '04',
    eyebrow: 'four shapes',
    title: '네 가지 선언이 각각 무엇을 실행하는가',
    description: '같은 action 속성이라도 값의 타입에 따라 주인이 달라집니다.',
    headers: ['선언', '실제로 실행되는 것', '비고'],
    rows: [
      {
        declaration: '<form action={fn}>',
        runs: 'React가 fn을 Action으로 실행',
        note: 'preventDefault가 걸리고 페이지는 이동하지 않는다',
      },
      {
        declaration: '<form action="/path">',
        runs: '브라우저의 기본 제출',
        note: '플러그인이 함수가 아님을 보고 그대로 빠진다',
      },
      {
        declaration: '<button formAction={fn}>',
        runs: '그 버튼을 눌렀을 때만 fn',
        note: 'form의 action보다 우선한다',
      },
      {
        declaration: '<form action={formAction}>',
        runs: 'useActionState가 감싼 Action',
        note: '결과가 state로 돌아오고 isPending이 함께 움직인다',
      },
    ],
    note: '두 번째 줄이 중요합니다. React 19에서도 문자열 action은 그대로 살아 있고, 점진적 향상이 깨지지 않습니다.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: '폼과 업데이트 모델이 만나는 한 파일',
    fileLabel: '파일',
    filePath: 'packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    lookForLabel: '볼 것',
    lookFor: 'startHostTransition(formInst, pendingState, action, formData)',
    whyLabel: '설명',
    why: '이 한 줄이 경계입니다. 왼쪽은 DOM 이벤트의 세계고 오른쪽부터는 앞 페이지에서 본 업데이트 모델입니다.',
    code: KO_CODE,
    primaryCta: 'FormActionEventPlugin.js 소스 보기',
    primaryHref: PLUGIN_HREF,
  },
  nextStep: {
    eyebrow: '다음 단계',
    title: 'use()는 렌더 도중 무엇을 읽을 수 있을까',
    description: '업데이트 축을 마치고 렌더링 축으로 넘어갑니다.',
    cta: '다음 페이지로 이동',
    href: '/use-suspense-error-model',
  },
};

const en: FormActionsEventSystemContent = {
  hero: {
    badge: 'React 19 Changes · 3/10',
    title: {
      line1: 'A form action is not a string.',
      line2: 'One event plugin opens the door.',
    },
    description:
      'This page asks where the Action from the previous page starts. The answer is one more plugin in the event system.',
    diagramBadge: 'submit pipeline',
    diagramCaption: 'native submit → startHostTransition',
    stages: [
      { id: 'submit', label: 'submit', caption: 'the browser fires a native event', tone: 'cyan' },
      { id: 'plugin', label: 'plugin', caption: 'FormActionEventPlugin receives it', tone: 'cyan' },
      {
        id: 'formdata',
        label: 'FormData',
        caption: 'inputs are gathered into a standard object',
        tone: 'blue',
      },
      {
        id: 'pending',
        label: 'pendingState',
        caption: 'a snapshot of the submit is built',
        tone: 'violet',
      },
      {
        id: 'transition',
        label: 'transition',
        caption: 'the Action joins the update model',
        tone: 'emerald',
      },
    ],
  },
  pipeline: {
    badge: '01',
    eyebrow: 'five stages',
    title: 'Five slots from the submit button to a transition',
    description: 'All five live inside one function. The plugin extractEvents does them in order.',
    steps: [
      {
        id: 'submit',
        num: '01',
        title: 'Filter for submit only',
        description:
          'Of everything delegation delivers, anything that is not submit makes the plugin bail immediately.',
        tone: 'cyan',
      },
      {
        id: 'plugin',
        num: '02',
        title: 'Pick the function to run',
        description:
          'Read the form action and the pressed button formAction; if it is not a function, hand it to the browser.',
        tone: 'cyan',
      },
      {
        id: 'formdata',
        num: '03',
        title: 'Build the FormData',
        description:
          'preventDefault stops the native submit, then the form name/value pairs are gathered into standard FormData.',
        tone: 'blue',
      },
      {
        id: 'pending',
        num: '04',
        title: 'Build the pendingState',
        description:
          'A four-field snapshot of pending, data, method and action. This is what useFormStatus reads.',
        tone: 'violet',
      },
      {
        id: 'transition',
        num: '05',
        title: 'Hand it to startHostTransition',
        description:
          'From here it is an update, not a form. It merges with the Action flow from the previous page.',
        tone: 'emerald',
      },
    ],
    note: 'The preventDefault in the third slot is the border. Past it, the browser has nothing more to do with this submit.',
  },
  which: {
    badge: '02',
    eyebrow: 'who wins',
    title: 'When the form and the button both hold a function',
    description:
      'React follows the HTML rule where a formaction attribute overrides the form action. Nothing new was invented.',
    form: {
      title: 'The form action',
      badge: 'default',
      description:
        'The default submit behavior of the whole form. It runs unless a button says otherwise.',
      bullets: [
        'Read from the action prop of the form element',
        'A function is intercepted by React; a string is left to the browser',
        'Every submit button inside the form shares this behavior',
        'The formAction returned by useActionState usually goes here too',
      ],
    },
    bridge: {
      headline: 'If a button was pressed,\nlook at the button first',
      sub: 'A formAction on the submitter overrides the form action, in the same order the HTML standard uses.',
    },
    button: {
      title: 'The button formAction',
      badge: 'wins',
      description:
        'Used when buttons in one form need different behavior, such as save draft versus submit.',
      bullets: [
        'nativeEvent.submitter identifies the button actually pressed',
        'formAction is read from that button props',
        'If present it runs instead of the form action',
        'FormData is built with the submitter, so its name/value is included',
      ],
    },
    note: 'Passing the submitter into FormData matters: which button was pressed stays visible in the data.',
  },
  pendingState: {
    badge: '03',
    eyebrow: 'snapshot',
    title: 'The four fields pendingState carries',
    description:
      'This one object is the whole submit. A child reads exactly these four fields through useFormStatus.',
    fields: [
      {
        id: 'pending',
        title: 'Is it in flight',
        description: 'True while the Action runs. Most often used to lock the submit button.',
        value: 'pending: true',
        tone: 'blue',
      },
      {
        id: 'data',
        title: 'What was sent',
        description:
          'The FormData just built. Useful for painting the submitted values optimistically.',
        value: 'data: FormData',
        tone: 'cyan',
      },
      {
        id: 'method',
        title: 'Which method',
        description: 'The form method attribute, usually post, copied straight into the snapshot.',
        value: "method: 'post'",
        tone: 'indigo',
      },
      {
        id: 'action',
        title: 'What runs',
        description:
          'The function chosen in the previous stage, so you can tell which Action runs.',
        value: 'action: fn',
        tone: 'violet',
      },
    ],
    note: 'This is why useFormStatus only works in a child: the snapshot is attached to the form Fiber and flows down as context.',
  },
  declarations: {
    badge: '04',
    eyebrow: 'four shapes',
    title: 'What each of the four declarations actually runs',
    description: 'For the same action attribute, the owner changes with the type of the value.',
    headers: ['Declaration', 'What actually runs', 'Note'],
    rows: [
      {
        declaration: '<form action={fn}>',
        runs: 'React runs fn as an Action',
        note: 'preventDefault applies and the page does not navigate',
      },
      {
        declaration: '<form action="/path">',
        runs: 'The native browser submit',
        note: 'The plugin sees a non-function and bails out',
      },
      {
        declaration: '<button formAction={fn}>',
        runs: 'fn, but only for that button',
        note: 'Takes precedence over the form action',
      },
      {
        declaration: '<form action={formAction}>',
        runs: 'The Action wrapped by useActionState',
        note: 'The result comes back as state and isPending moves with it',
      },
    ],
    note: 'The second row matters: string actions still work in React 19, so progressive enhancement is not broken.',
  },
  checkpoint: {
    badge: '05',
    eyebrow: 'code checkpoint',
    title: 'The one file where forms meet the update model',
    fileLabel: 'File',
    filePath: 'packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js',
    lookForLabel: 'Look for',
    lookFor: 'startHostTransition(formInst, pendingState, action, formData)',
    whyLabel: 'Why',
    why: 'That single line is the border. To its left is the DOM event world; to its right is the update model from the previous page.',
    code: EN_CODE,
    primaryCta: 'View FormActionEventPlugin.js',
    primaryHref: PLUGIN_HREF,
  },
  nextStep: {
    eyebrow: 'Next step',
    title: 'What can use() read during a render',
    description: 'The update axis is done; the render axis is next.',
    cta: 'Go to the next page',
    href: '/use-suspense-error-model',
  },
};

export const formActionsEventSystemContent: Record<Locale, FormActionsEventSystemContent> = {
  ko,
  en,
};
