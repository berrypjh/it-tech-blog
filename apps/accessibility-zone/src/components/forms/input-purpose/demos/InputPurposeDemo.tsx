'use client';

import { useId, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, TableScroll } from '@berrypjh/react-ui';

import { Field } from '@/components/forms/shared/Field';

type Reading = {
  name: string;
  type: string;
  autocomplete: string;
  inputmode: string;
  required: boolean;
  description: string;
};

const content = {
  ko: {
    practice: '실습',
    instructions:
      '칸을 채우며 필수 표시와 형식 예시가 계속 보이는지 확인하고, 속성 읽기를 눌러 각 칸의 실제 속성을 보세요. 아무것도 전송하지 않습니다.',
    form: '행사 신청 (교육 예시)',
    required: '필수',
    optional: '선택',
    name: { label: '이름', hint: '신청 확인서에 표시할 이름입니다. 예: 김하늘' },
    email: { label: '이메일', hint: '확인 메일을 받을 주소입니다. 예: name@example.com' },
    tel: { label: '전화번호', hint: '당일 연락에만 씁니다. 예: 010-0000-0000' },
    seats: { label: '참가 인원', hint: '1부터 4 사이의 숫자입니다. 예: 2' },
    mode: '참석 방식',
    modes: { onsite: '현장 참석', online: '온라인 참석' },
    submit: '신청 내용 확인',
    read: '칸의 속성 읽기',
    caption: '입력 칸마다 브라우저 DOM에서 읽은 속성과 설명',
    head: ['칸(name)', 'type', 'autocomplete', 'inputmode', 'required', '연결된 설명'],
    none: '없음',
    yes: '예',
    no: '아니요',
    checked: '브라우저 기본 검사를 통과했습니다. 값은 전송하지 않았습니다.',
    readDone: (n: number) => `입력 칸 ${n}개의 속성을 읽었습니다.`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Fill in the fields and check that the required mark and format example stay visible, then press the read button to see each field’s actual attributes. Nothing is sent.',
    form: 'Event application (teaching example)',
    required: 'required',
    optional: 'optional',
    name: { label: 'Name', hint: 'The name shown on the confirmation. Example: Sky Kim' },
    email: { label: 'Email', hint: 'Where the confirmation is sent. Example: name@example.com' },
    tel: { label: 'Phone', hint: 'Used only for contact on the day. Example: 010-0000-0000' },
    seats: { label: 'Number of people', hint: 'A number from 1 to 4. Example: 2' },
    mode: 'Attendance',
    modes: { onsite: 'On site', online: 'Online' },
    submit: 'Check the application',
    read: 'Read field attributes',
    caption: 'Attributes and description read from the browser DOM for each field',
    head: ['Field (name)', 'type', 'autocomplete', 'inputmode', 'required', 'Linked description'],
    none: 'none',
    yes: 'yes',
    no: 'no',
    checked: 'The browser’s built-in check passed. No values were sent.',
    readDone: (n: number) => `Read the attributes of ${n} fields.`,
  },
};

/** 글자 입력 칸마다 실제 속성과 aria-describedby가 가리키는 글을 읽는다. */
const readFields = (form: HTMLFormElement): Reading[] =>
  [...form.querySelectorAll<HTMLInputElement>('input:not([type="radio"])')].map((el) => ({
    name: el.name,
    type: el.type,
    autocomplete: el.getAttribute('autocomplete') ?? '',
    inputmode: el.getAttribute('inputmode') ?? '',
    required: el.required,
    description: (el.getAttribute('aria-describedby') ?? '')
      .split(' ')
      .map((id) => document.getElementById(id)?.textContent ?? '')
      .join(' ')
      .trim(),
  }));

/**
 * type · autocomplete · inputmode와 도움말을 연결한 신청서. 검사는 브라우저 기본 검사를 그대로 쓰고,
 * 제출은 막은 뒤 결과만 알린다. 값은 어디에도 보내거나 저장하지 않는다.
 */
export const InputPurposeDemo = () => {
  const c = useLang(content);
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [readings, setReadings] = useState<Reading[] | null>(null);
  const [status, setStatus] = useState('');

  const read = () => {
    if (!formRef.current) return;
    const next = readFields(formRef.current);
    setReadings(next);
    setStatus(c.readDone(next.length));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <form
        ref={formRef}
        method="post"
        aria-label={c.form}
        className="flex flex-col gap-md"
        onSubmit={(e) => {
          e.preventDefault();
          setStatus(c.checked);
        }}
      >
        <Field
          id={`${id}-name`}
          name="name"
          label={c.name.label}
          requiredText={c.required}
          hint={c.name.hint}
          autoComplete="name"
          required
        />
        <Field
          id={`${id}-email`}
          name="email"
          type="email"
          label={c.email.label}
          requiredText={c.required}
          hint={c.email.hint}
          autoComplete="email"
          required
        />
        <Field
          id={`${id}-tel`}
          name="tel"
          type="tel"
          label={c.tel.label}
          requiredText={c.optional}
          hint={c.tel.hint}
          autoComplete="tel"
        />
        <Field
          id={`${id}-seats`}
          name="seats"
          label={c.seats.label}
          requiredText={c.required}
          hint={c.seats.hint}
          inputMode="numeric"
          pattern="[1-4]"
          required
        />
        <fieldset className="flex flex-col gap-xs text-xsm">
          <legend className="mb-xs">
            {c.mode} <span className="text-text-light">({c.required})</span>
          </legend>
          {(Object.keys(c.modes) as (keyof typeof c.modes)[]).map((value) => (
            <label key={value} className="flex items-center gap-sm">
              <input type="radio" name="mode" value={value} required />
              {c.modes[value]}
            </label>
          ))}
        </fieldset>
        <div className="flex flex-wrap gap-sm">
          <Button type="submit" size="sm">
            {c.submit}
          </Button>
          <Button type="button" variant="outlined" size="sm" onClick={read}>
            {c.read}
          </Button>
        </div>
      </form>

      {readings && (
        <TableScroll label={c.caption}>
          <table className="w-full text-left text-xxsm">
            <caption className="mb-xs text-left text-text-light">{c.caption}</caption>
            <thead>
              <tr>
                {c.head.map((h) => (
                  <th key={h} scope="col" className="py-2xs pr-md font-semiBold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {readings.map((r) => (
                <tr key={r.name} className="border-t border-stroke-light">
                  <th scope="row" className="py-2xs pr-md font-mono font-regular">
                    {r.name}
                  </th>
                  <td className="py-2xs pr-md font-mono">{r.type}</td>
                  <td className="py-2xs pr-md font-mono">{r.autocomplete || c.none}</td>
                  <td className="py-2xs pr-md font-mono">{r.inputmode || c.none}</td>
                  <td className="py-2xs pr-md">{r.required ? c.yes : c.no}</td>
                  <td className="py-2xs pr-md">{r.description || c.none}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      )}

      <p role="status" className="text-xsm">
        {status}
      </p>
    </PracticeFrame>
  );
};
