'use client';

import { useId, useRef, useState } from 'react';

import { useLang } from '@it-tech-blog/utils';

import { Button, TableScroll } from '@berrypjh/react-ui';

import { PracticeFrame } from '@/components/shared/PracticeFrame';

type Link = { id: string; name: string; labels: string; group: string };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '빈 채로 보내기를 눌러 브라우저 기본 검사를 보고, 모두 채워 다시 보내 보세요. 실제로 전송되지는 않습니다.',
    allRequired: '모든 항목은 필수입니다.',
    name: '이름',
    email: '이메일',
    topic: '문의 종류',
    topics: { shipping: '배송', returns: '교환 · 반품', other: '기타' },
    message: '문의 내용',
    submit: '문의 보내기',
    reset: '모두 지우기',
    inspect: '입력 칸의 연결 보기',
    linkHead: ['칸(name)', 'id', '연결된 label', '그룹(legend)'],
    linkCaption:
      '각 입력 칸의 연결 — label은 브라우저가 계산한 input.labels, 그룹은 가장 가까운 fieldset의 legend 글자',
    none: '없음',
    resultTitle: '보내지 않은 값 (서버가 없는 실습)',
    sent: '검사를 통과했습니다. 실제로 전송하지 않고 브라우저가 모은 값을 아래에 표시했습니다.',
    inspected: (n: number) => `입력 칸 ${n}개의 연결을 읽었습니다.`,
    cleared: '모든 항목을 지웠습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press send while empty to see the browser’s built-in check, then fill everything in and send again. Nothing is actually sent.',
    allRequired: 'All fields are required.',
    name: 'Name',
    email: 'Email',
    topic: 'Topic',
    topics: { shipping: 'Shipping', returns: 'Returns', other: 'Other' },
    message: 'Message',
    submit: 'Send inquiry',
    reset: 'Clear all',
    inspect: 'Show each field’s associations',
    linkHead: ['Field (name)', 'id', 'Associated label', 'Group (legend)'],
    linkCaption:
      'Each field’s associations — the label is the browser-computed input.labels; the group is the nearest fieldset’s legend text',
    none: 'none',
    resultTitle: 'Values not sent (an exercise without a server)',
    sent: 'Validation passed. Nothing was sent; the values the browser collected are shown below.',
    inspected: (n: number) => `Read the associations of ${n} fields.`,
    cleared: 'All fields cleared.',
  },
};

const fieldClass =
  'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm';

/** 폼 안 입력 칸마다 브라우저가 계산한 label과 그룹 이름을 읽는다. */
const readLinks = (form: HTMLFormElement): Link[] =>
  [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea')].map(
    (el) => ({
      id: el.id,
      name: el.type === 'radio' ? `${el.name} = ${el.value}` : el.name,
      labels: [...(el.labels ?? [])].map((l) => l.textContent?.trim()).join(', '),
      group: el.closest('fieldset')?.querySelector('legend')?.textContent?.trim() ?? '',
    }),
  );

/**
 * label · fieldset · legend를 갖춘 문의 폼. 검사는 브라우저 기본 검사(required · type)를 그대로 쓰고,
 * 제출은 서버가 없으므로 막은 뒤 FormData를 보여준다. id는 useId로 만든다.
 */
export const ContactFormDemo = () => {
  const c = useLang(content);
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [links, setLinks] = useState<Link[] | null>(null);
  const [sent, setSent] = useState<[string, string][] | null>(null);
  const [status, setStatus] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSent([...data.entries()].map(([key, value]) => [key, String(value)]));
    setStatus(c.sent);
  };

  const onReset = () => {
    setSent(null);
    setLinks(null);
    setStatus(c.cleared);
  };

  const inspect = () => {
    if (!formRef.current) return;
    const next = readLinks(formRef.current);
    setLinks(next);
    setStatus(c.inspected(next.length));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <form ref={formRef} onSubmit={onSubmit} onReset={onReset} className="flex flex-col gap-lg">
        <p className="text-xxsm text-text-light">{c.allRequired}</p>
        <div className="flex flex-col gap-xs text-xsm">
          <label htmlFor={`${id}-name`}>{c.name}</label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-xs text-xsm">
          <label htmlFor={`${id}-email`}>{c.email}</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </div>
        <fieldset className="flex flex-col gap-xs text-xsm">
          <legend className="mb-xs">{c.topic}</legend>
          {(Object.keys(c.topics) as (keyof typeof c.topics)[]).map((value) => (
            <label key={value} className="flex items-center gap-sm">
              <input type="radio" name="topic" value={value} required />
              {c.topics[value]}
            </label>
          ))}
        </fieldset>
        <div className="flex flex-col gap-xs text-xsm">
          <label htmlFor={`${id}-message`}>{c.message}</label>
          <textarea id={`${id}-message`} name="message" rows={3} required className={fieldClass} />
        </div>
        <div className="flex flex-wrap gap-sm">
          <Button type="submit" size="sm">
            {c.submit}
          </Button>
          <Button type="reset" variant="outlined" size="sm">
            {c.reset}
          </Button>
        </div>
      </form>

      {sent && (
        <div className="rounded-sm border border-stroke-light p-md text-xsm">
          <p className="mb-xs font-semiBold text-text-default">{c.resultTitle}</p>
          <dl className="grid gap-x-lg gap-y-2xs sm:grid-cols-[8rem_1fr]">
            {sent.map(([key, value]) => (
              <div key={key} className="contents">
                <dt className="font-mono text-text-primary">{key}</dt>
                <dd className="break-words text-text-light">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div>
        <Button type="button" variant="text" size="sm" onClick={inspect}>
          {c.inspect}
        </Button>
      </div>
      {links && (
        <TableScroll label={c.linkCaption}>
          <table className="w-full text-left text-xxsm">
            <caption className="mb-xs text-left text-text-light">{c.linkCaption}</caption>
            <thead>
              <tr>
                {c.linkHead.map((h) => (
                  <th key={h} scope="col" className="py-2xs pr-md font-semiBold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {links.map((link) => (
                <tr key={link.name} className="border-t border-stroke-light">
                  <td className="py-2xs pr-md font-mono">{link.name}</td>
                  <td className="py-2xs pr-md font-mono">{link.id || c.none}</td>
                  <td className="py-2xs pr-md">{link.labels || c.none}</td>
                  <td className="py-2xs pr-md">{link.group || c.none}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      )}

      <p role="status" className="sr-only">
        {status}
      </p>
    </PracticeFrame>
  );
};
