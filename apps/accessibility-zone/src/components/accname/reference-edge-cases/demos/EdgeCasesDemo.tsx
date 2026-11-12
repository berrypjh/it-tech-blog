'use client';

import { accname11, accname12 } from '@/components/shared/aria';

import { CaseExplorer, type NameCase } from '../../shared/CaseExplorer';

const step = {
  hidden: accname12('comp_hidden_not_referenced'),
  labelledby: accname12('comp_labelledby'),
  label: accname12('comp_label'),
  content: accname12('comp_name_from_content'),
  hidden11: accname11('step2A'),
  labelledby11: accname11('step2B'),
};

const buttonClass = 'rounded-sm border border-stroke-light px-md py-xs text-xsm';

/** 검사용 예제의 아이콘 버튼 안 장식 그림. */
const Icon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

type Text = {
  search: string;
  address: string;
  draft: string;
  date: string;
  room: string;
  book: string;
  change: string;
  ignored: string;
  booking: string;
};

const text: Record<'ko' | 'en', Text> = {
  ko: {
    search: '배송지 검색',
    address: '배송지',
    draft: '(임시)',
    date: '3월 12일',
    room: '객실 A',
    book: '예약',
    change: '변경',
    ignored: '따라가지 않는 글자',
    booking: '예약 변경',
  },
  en: {
    search: 'Search addresses',
    address: 'Search',
    draft: '(draft)',
    date: 'March 12',
    room: 'Room A',
    book: 'Book',
    change: 'Change',
    ignored: 'Text that is not followed',
    booking: 'Change booking',
  },
};

const casesOf = (t: Text, ko: boolean): NameCase[] => [
  {
    id: 'hidden-direct',
    label: ko ? '직접 참조된 숨김 대상 (03.1)' : 'Hidden target referenced directly (03.1)',
    code: `<span id="search-label" hidden>${t.search}</span>
<button type="button" aria-labelledby="search-label">
  <svg aria-hidden="true">…</svg>
</button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko ? 'search-label을 따라감' : 'Follow search-label',
      },
      {
        step: 'Hidden Not Referenced',
        href: step.hidden,
        result: ko
          ? 'span은 숨었지만 직접 참조된 노드 → 빈 문자열로 만들지 않음'
          : 'The span is hidden but directly referenced → not emptied',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.search}"` },
    ],
    expected: t.search,
    note: ko
      ? 'AccName 1.1의 2A도 직접 참조된 숨김 노드를 살리므로 두 판본의 결과가 같습니다.'
      : 'Step 2A of AccName 1.1 also keeps a directly referenced hidden node, so both editions agree.',
    specimen: (id) => (
      <>
        <span id={id('search-label')} hidden>
          {t.search}
        </span>
        <button
          type="button"
          tabIndex={-1}
          aria-labelledby={id('search-label')}
          className={buttonClass}
        >
          <Icon />
        </button>
      </>
    ),
  },
  {
    id: 'hidden-descendant',
    label: ko ? '보이는 참조 대상 안의 숨김 자손' : 'Hidden descendant inside a visible target',
    code: `<span id="addr">${t.address} <span hidden>${t.draft}</span>${ko ? '검색' : 'addresses'}</span>
<button type="button" aria-labelledby="addr"><svg aria-hidden="true">…</svg></button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko ? 'addr를 따라감 (보이는 노드)' : 'Follow addr (a visible node)',
      },
      {
        step: 'Hidden Not Referenced',
        href: step.hidden,
        result: ko
          ? `숨김 자손 "${t.draft}"은 직접 참조된 노드가 숨지 않았으므로 빈 문자열`
          : `The hidden descendant "${t.draft}" becomes empty because the directly referenced node is not hidden`,
      },
      { step: 'Name From Content', href: step.content, result: `"${t.search}"` },
    ],
    expected: t.search,
    specimen: (id) => (
      <>
        <span id={id('addr')} className="text-xsm">
          {t.address} <span hidden>{t.draft}</span>
          {ko ? '검색' : 'addresses'}
        </span>
        <button type="button" tabIndex={-1} aria-labelledby={id('addr')} className={buttonClass}>
          <Icon />
        </button>
      </>
    ),
  },
  {
    id: 'hidden-subtree',
    label: ko ? '숨김 대상 안의 자손' : 'Descendant inside a hidden target',
    code: `<div id="addr" hidden>${t.address} <span>${ko ? '검색' : 'addresses'}</span></div>
<button type="button" aria-labelledby="addr"><svg aria-hidden="true">…</svg></button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko ? 'addr를 따라감 (숨은 노드)' : 'Follow addr (a hidden node)',
      },
      {
        step: 'Hidden Not Referenced',
        href: step.hidden,
        result: ko
          ? '자손 span도 숨었지만, 직접 참조된 노드가 숨은 탐색이므로 포함'
          : 'The descendant span is hidden too, but it is in a traversal whose directly referenced node is hidden, so it is included',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.search}"` },
    ],
    expected: t.search,
    expected11: t.address,
    note: ko
      ? '판본 차이: AccName 1.1의 2A는 "직접 참조되지 않은 숨김 노드"를 빈 문자열로 만들어 자손 span이 빠집니다(1.1은 숨김을 요소에 대해 정의하므로, 글자 노드는 숨김으로 보지 않는 읽기). 1.2 초안은 이 경우 하위 전체를 포함하라고 고쳤습니다. 브라우저 결과는 이 사이트가 확인하지 않았으니, 관찰값에 엔진 · 버전을 함께 적습니다.'
      : 'Edition difference: step 2A of AccName 1.1 empties "hidden nodes not directly referenced," so the descendant span drops out (1.1 defines hidden for elements, read here as not making text nodes hidden). The 1.2 draft changed this to include the whole subtree. This site has not checked browser results, so record the engine and version with your observed value.',
    specimen: (id) => (
      <>
        <div id={id('addr')} hidden>
          {t.address} <span>{ko ? '검색' : 'addresses'}</span>
        </div>
        <button type="button" tabIndex={-1} aria-labelledby={id('addr')} className={buttonClass}>
          <Icon />
        </button>
      </>
    ),
  },
  {
    id: 'order',
    label: ko ? '여러 ID의 처리 순서' : 'Order of several IDs',
    code: `<span id="date">${t.date}</span>
<span id="room">${t.room}</span>
<button type="button" aria-labelledby="room date"><svg aria-hidden="true">…</svg></button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko
          ? 'DOM 순서가 아니라 속성에 적힌 순서(room → date)로 처리'
          : 'Process in the order written in the attribute (room → date), not DOM order',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.room}", "${t.date}"` },
      { step: 'LabelledBy', href: step.labelledby, result: `"${t.room} ${t.date}"` },
    ],
    expected: `${t.room} ${t.date}`,
    specimen: (id) => (
      <>
        <span id={id('date')} className="text-xsm">
          {t.date}
        </span>
        <span id={id('room')} className="text-xsm">
          {t.room}
        </span>
        <button
          type="button"
          tabIndex={-1}
          aria-labelledby={`${id('room')} ${id('date')}`}
          className={buttonClass}
        >
          <Icon />
        </button>
      </>
    ),
  },
  {
    id: 'missing-and-valid',
    label: ko ? '없는 ID와 있는 ID가 섞인 경우' : 'A missing ID mixed with a valid one',
    code: `<span id="room">${t.room}</span>
<button type="button" aria-labelledby="no-such-id room"><svg aria-hidden="true">…</svg></button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko
          ? '유효한 ID(room)가 하나 있으므로 이 단계를 적용'
          : 'One valid ID (room) exists, so this step applies',
      },
      {
        step: 'LabelledBy — For each IDREF',
        href: step.labelledby,
        result: ko
          ? '없는 ID가 가리키는 노드는 없음 → room만 계산'
          : 'The missing ID points to no node → only room is computed',
      },
    ],
    expected: t.room,
    note: ko
      ? '원문은 "적어도 하나의 유효한 ID"를 조건으로 두지만, 목록 안의 없는 ID를 어떻게 건너뛰는지는 따로 적지 않습니다. 위 결과는 그 해석입니다.'
      : 'The text requires "at least one valid IDREF" but does not spell out how a missing ID inside the list is skipped. The result above is that reading.',
    specimen: (id) => (
      <>
        <span id={id('room')} className="text-xsm">
          {t.room}
        </span>
        <button
          type="button"
          tabIndex={-1}
          aria-labelledby={`${id('no-such-id')} ${id('room')}`}
          className={buttonClass}
        >
          <Icon />
        </button>
      </>
    ),
  },
  {
    id: 'nested',
    label: ko ? '중첩 참조' : 'Nested reference',
    code: `<button type="button" id="a" aria-labelledby="b"><svg aria-hidden="true">…</svg></button>
<span id="b" aria-labelledby="c">${t.book}</span>
<span id="c">${t.ignored}</span>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko ? 'a에서 b를 따라감' : 'From a, follow b',
      },
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko
          ? 'b는 이미 진행 중인 참조 안이라 b의 aria-labelledby(c)는 따라가지 않음'
          : 'b is inside an ongoing reference, so b’s aria-labelledby (c) is not followed',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.book}"` },
    ],
    expected: t.book,
    note: ko
      ? '참조는 한 번만 따라갑니다. 두 판본 모두 같은 예를 원문에 싣고 있습니다.'
      : 'References are followed only once. Both editions carry the same example in the text.',
    specimen: (id) => (
      <>
        <button
          type="button"
          tabIndex={-1}
          id={id('a')}
          aria-labelledby={id('b')}
          className={buttonClass}
        >
          <Icon />
        </button>
        <span id={id('b')} aria-labelledby={id('c')} className="text-xsm">
          {t.book}
        </span>
        <span id={id('c')} className="text-xsm">
          {t.ignored}
        </span>
      </>
    ),
  },
  {
    id: 'cycle',
    label: ko ? '서로를 가리키는 순환 참조' : 'Circular reference',
    code: `<button type="button" id="a" aria-labelledby="b">${t.book}</button>
<button type="button" id="b" aria-labelledby="a">${t.change}</button>
<!-- ${ko ? '첫째 버튼(a)의 이름을 봅니다' : 'Look at the name of the first button (a)'} -->`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko ? 'a에서 b를 따라감' : 'From a, follow b',
      },
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko
          ? 'b의 aria-labelledby(a)는 진행 중인 참조라 따라가지 않음 — 순환하지 않음'
          : 'b’s aria-labelledby (a) is an ongoing reference, so it is not followed — no loop',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.change}"` },
    ],
    expected: t.change,
    specimen: (id) => (
      <>
        <button
          type="button"
          tabIndex={-1}
          id={id('a')}
          aria-labelledby={id('b')}
          className={buttonClass}
        >
          {t.book}
        </button>
        <button
          type="button"
          tabIndex={-1}
          id={id('b')}
          aria-labelledby={id('a')}
          className={buttonClass}
        >
          {t.change}
        </button>
      </>
    ),
  },
  {
    id: 'blank-label',
    label: ko ? '공백뿐인 aria-label' : 'Whitespace-only aria-label',
    code: `<button type="button" aria-label="   ">${t.booking}</button>`,
    path: [
      {
        step: 'AriaLabel',
        href: step.label,
        result: ko
          ? '앞뒤 공백을 지우면 빈 문자열 → 이 단계를 적용하지 않음'
          : 'Empty once trimmed → this step does not apply',
      },
      { step: 'Name From Content', href: step.content, result: `"${t.booking}"` },
    ],
    expected: t.booking,
    specimen: () => (
      <button type="button" tabIndex={-1} aria-label="   " className={buttonClass}>
        {t.booking}
      </button>
    ),
  },
  {
    id: 'empty-target',
    label: ko ? '유효하지만 빈 참조 대상' : 'Valid but empty target',
    code: `<span id="blank"></span>
<button type="button" aria-labelledby="blank" aria-label="${t.book}">${t.booking}</button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: ko
          ? 'blank는 있는 ID → 단계 적용, 결과는 빈 글자'
          : 'blank exists → the step applies, and the result is empty',
      },
      {
        step: 'LabelledBy — Return',
        href: step.labelledby,
        result: ko
          ? '"빈 문자열이 아니면 돌려준다" → 결과가 비었으므로 다음 단계로'
          : '"Return the accumulated text if it is not the empty string" → empty, so move on',
      },
      { step: 'AriaLabel', href: step.label, result: `"${t.book}"` },
      {
        step: 'AccName 1.1 — step 2B',
        href: step.labelledby11,
        result: ko
          ? '"Return the accumulated text" → 빈 이름으로 끝남'
          : '"Return the accumulated text" → stops with an empty name',
      },
    ],
    expected: t.book,
    expected11: '',
    note: ko
      ? `판본 차이: 1.1은 빈 이름으로 끝납니다. 1.2 초안은 결과가 비면 다음 단계로 가도록 바뀌었고(변경 기록 "Only use accumulated text that is not empty"), 이 사이트는 그 뜻으로 읽었습니다. 다만 단계 문장은 결과마다 앞에 공백 한 칸을 붙이라고 써서, 글자 그대로 읽으면 공백이 남아 여기서 끝난다고 볼 여지가 있습니다. 그 읽기는 여러 ID 사례에도 앞 공백을 남기므로 따르지 않았습니다. 엔진 결과는 관찰값으로 확인합니다.`
      : `Edition difference: 1.1 stops with an empty name. The 1.2 draft changed this to move on when the result is empty (change log: "Only use accumulated text that is not empty"), and this site reads it that way. The step text, however, says to add a space before each result, so a literal reading leaves a space and stops here. That reading would also leave a leading space in the several-IDs case, so this site does not follow it. Check engine results as observed values.`,
    specimen: (id) => (
      <>
        <span id={id('blank')} />
        <button
          type="button"
          tabIndex={-1}
          aria-labelledby={id('blank')}
          aria-label={t.book}
          className={buttonClass}
        >
          {t.booking}
        </button>
      </>
    ),
  },
];

/** 06.4 사례: 숨긴 참조 · 여러 ID · 없는 ID · 중첩 · 순환 · 빈 값. */
export const EdgeCasesDemo = () => (
  <CaseExplorer cases={{ ko: casesOf(text.ko, true), en: casesOf(text.en, false) }} />
);
