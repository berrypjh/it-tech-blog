'use client';

import { accname12, htmlAam } from '@/components/shared/aria';

import { CaseExplorer, type NameCase } from '../../shared/CaseExplorer';

const BUTTON_RULE = htmlAam('button-element-accessible-name-computation');

const step = {
  init: accname12('comp_init'),
  labelledby: accname12('comp_labelledby'),
  label: accname12('comp_label'),
  content: accname12('comp_name_from_content'),
};

const ko: NameCase[] = [
  {
    id: 'content',
    label: '내용만 있는 버튼',
    code: `<button type="button">예약 변경</button>`,
    path: [
      {
        step: 'Initialization',
        href: step.init,
        result: 'button 역할은 이름을 금지하지 않음 → 계속',
      },
      { step: 'LabelledBy', href: step.labelledby, result: 'aria-labelledby 없음 → 건너뜀' },
      { step: 'AriaLabel', href: step.label, result: 'aria-label 없음 → 건너뜀' },
      { step: 'HTML-AAM 4.1.4', href: BUTTON_RULE, result: '연결된 label 없음 → 건너뜀' },
      {
        step: 'Name From Content',
        href: step.content,
        result: 'button은 내용에서 이름을 허용 → "예약 변경"',
      },
    ],
    expected: '예약 변경',
    specimen: () => (
      <button
        type="button"
        tabIndex={-1}
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        예약 변경
      </button>
    ),
  },
  {
    id: 'aria-label',
    label: 'aria-label이 있는 버튼',
    code: `<button type="button" aria-label="예약 수정하기">예약 변경</button>`,
    path: [
      { step: 'LabelledBy', href: step.labelledby, result: 'aria-labelledby 없음 → 건너뜀' },
      {
        step: 'AriaLabel',
        href: step.label,
        result: '비어 있지 않은 aria-label → "예약 수정하기"를 돌려주고 끝남',
      },
      {
        step: 'Name From Content',
        href: step.content,
        result: '앞 단계가 끝냈으므로 보지 않음 — 화면의 "예약 변경"은 쓰이지 않음',
      },
    ],
    expected: '예약 수정하기',
    note: '보이는 글자가 이름에 들어 있지 않습니다. 이 어긋남은 06.6에서 Label in Name으로 판정합니다.',
    specimen: () => (
      <button
        type="button"
        tabIndex={-1}
        aria-label="예약 수정하기"
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        예약 변경
      </button>
    ),
  },
  {
    id: 'labelledby',
    label: '유효한 aria-labelledby',
    code: `<h3 id="room">객실 A</h3>
<button type="button" id="change" aria-labelledby="change room">예약 변경</button>`,
    path: [
      { step: 'LabelledBy', href: step.labelledby, result: '유효한 ID 두 개를 적힌 순서대로 처리' },
      {
        step: 'change → Name From Content',
        href: step.content,
        result: '이미 진행 중인 참조라 다시 따라가지 않고 내용 "예약 변경"',
      },
      {
        step: 'room → Name From Content',
        href: step.content,
        result: '참조된 요소의 내용 "객실 A"',
      },
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: '공백으로 이어 붙인 "예약 변경 객실 A"를 돌려주고 끝남',
      },
    ],
    expected: '예약 변경 객실 A',
    specimen: (id) => (
      <>
        <span id={id('room')} className="text-xsm font-semiBold">
          객실 A
        </span>
        <button
          type="button"
          tabIndex={-1}
          id={id('change')}
          aria-labelledby={`${id('change')} ${id('room')}`}
          className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
        >
          예약 변경
        </button>
      </>
    ),
  },
  {
    id: 'missing',
    label: '없는 ID를 가리키는 aria-labelledby',
    code: `<button type="button" aria-labelledby="no-such-id">예약 변경</button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: '유효한 ID가 하나도 없음 → 이 단계를 적용하지 않음',
      },
      { step: 'AriaLabel', href: step.label, result: 'aria-label 없음 → 건너뜀' },
      { step: 'Name From Content', href: step.content, result: '내용 "예약 변경"' },
    ],
    expected: '예약 변경',
    note: '이름은 나오지만, 작성자가 의도한 참조가 끊겼다는 신호입니다. 참조 대상을 고칩니다.',
    specimen: (id) => (
      <button
        type="button"
        tabIndex={-1}
        aria-labelledby={id('no-such-id')}
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        예약 변경
      </button>
    ),
  },
  {
    id: 'prohibited',
    label: '이름이 금지된 역할의 aria-label',
    code: `<div aria-label="예약 요약">객실 A · 3월 12일</div>`,
    path: [
      {
        step: 'Initialization',
        href: step.init,
        result: 'div의 역할 generic은 이름을 금지 → 빈 문자열을 돌려주고 끝남',
      },
    ],
    expected: '',
    expected11: '예약 요약',
    note: 'AccName 1.1에는 역할의 이름 금지를 검사하는 첫 단계가 없어 2C(aria-label)에서 끝납니다. 다만 WAI-ARIA 1.2는 generic 같은 역할에 aria-label을 쓰지 말라고 합니다(Name prohibited). 브라우저 결과는 이 사이트가 확인하지 않았습니다.',
    specimen: () => (
      <div aria-label="예약 요약" className="text-xsm">
        객실 A · 3월 12일
      </div>
    ),
  },
];

const en: NameCase[] = [
  {
    id: 'content',
    label: 'Button with content only',
    code: `<button type="button">Change booking</button>`,
    path: [
      {
        step: 'Initialization',
        href: step.init,
        result: 'The button role does not prohibit naming → continue',
      },
      { step: 'LabelledBy', href: step.labelledby, result: 'No aria-labelledby → skip' },
      { step: 'AriaLabel', href: step.label, result: 'No aria-label → skip' },
      { step: 'HTML-AAM 4.1.4', href: BUTTON_RULE, result: 'No connected label → skip' },
      {
        step: 'Name From Content',
        href: step.content,
        result: 'button allows name from content → "Change booking"',
      },
    ],
    expected: 'Change booking',
    specimen: () => (
      <button
        type="button"
        tabIndex={-1}
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        Change booking
      </button>
    ),
  },
  {
    id: 'aria-label',
    label: 'Button with aria-label',
    code: `<button type="button" aria-label="Edit reservation">Change booking</button>`,
    path: [
      { step: 'LabelledBy', href: step.labelledby, result: 'No aria-labelledby → skip' },
      {
        step: 'AriaLabel',
        href: step.label,
        result: 'Non-empty aria-label → return "Edit reservation" and stop',
      },
      {
        step: 'Name From Content',
        href: step.content,
        result:
          'Not reached because an earlier step finished — the visible "Change booking" is not used',
      },
    ],
    expected: 'Edit reservation',
    note: 'The visible text is not in the name. This mismatch is judged as Label in Name in 06.6.',
    specimen: () => (
      <button
        type="button"
        tabIndex={-1}
        aria-label="Edit reservation"
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        Change booking
      </button>
    ),
  },
  {
    id: 'labelledby',
    label: 'Valid aria-labelledby',
    code: `<h3 id="room">Room A</h3>
<button type="button" id="change" aria-labelledby="change room">Change booking</button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: 'Process the two valid IDs in the order written',
      },
      {
        step: 'change → Name From Content',
        href: step.content,
        result: 'Already in an ongoing reference, so not followed again; content "Change booking"',
      },
      {
        step: 'room → Name From Content',
        href: step.content,
        result: 'Content of the referenced element, "Room A"',
      },
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: 'Return "Change booking Room A", joined by a space, and stop',
      },
    ],
    expected: 'Change booking Room A',
    specimen: (id) => (
      <>
        <span id={id('room')} className="text-xsm font-semiBold">
          Room A
        </span>
        <button
          type="button"
          tabIndex={-1}
          id={id('change')}
          aria-labelledby={`${id('change')} ${id('room')}`}
          className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
        >
          Change booking
        </button>
      </>
    ),
  },
  {
    id: 'missing',
    label: 'aria-labelledby pointing to a missing ID',
    code: `<button type="button" aria-labelledby="no-such-id">Change booking</button>`,
    path: [
      {
        step: 'LabelledBy',
        href: step.labelledby,
        result: 'No valid ID at all → this step does not apply',
      },
      { step: 'AriaLabel', href: step.label, result: 'No aria-label → skip' },
      { step: 'Name From Content', href: step.content, result: 'Content "Change booking"' },
    ],
    expected: 'Change booking',
    note: 'A name still comes out, but it signals that the reference the author intended is broken. Fix the target.',
    specimen: (id) => (
      <button
        type="button"
        tabIndex={-1}
        aria-labelledby={id('no-such-id')}
        className="rounded-sm border border-stroke-light px-md py-xs text-xsm"
      >
        Change booking
      </button>
    ),
  },
  {
    id: 'prohibited',
    label: 'aria-label on a role that prohibits naming',
    code: `<div aria-label="Booking summary">Room A · March 12</div>`,
    path: [
      {
        step: 'Initialization',
        href: step.init,
        result: 'The div’s role, generic, prohibits naming → return the empty string and stop',
      },
    ],
    expected: '',
    expected11: 'Booking summary',
    note: 'AccName 1.1 has no first step that checks whether the role prohibits naming, so it stops at 2C (aria-label). WAI-ARIA 1.2, however, says not to use aria-label on roles such as generic (Name prohibited). This site has not checked browser results.',
    specimen: () => (
      <div aria-label="Booking summary" className="text-xsm">
        Room A · March 12
      </div>
    ),
  },
];

/** 06.3 사례: 같은 버튼의 내용 · aria-label · aria-labelledby와, 끊긴 참조 · 이름 금지 역할. */
export const SourceCasesDemo = () => <CaseExplorer cases={{ ko, en }} />;
