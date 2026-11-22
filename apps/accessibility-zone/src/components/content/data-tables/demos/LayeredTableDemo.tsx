'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, TableScroll, TextField } from '@berrypjh/react-ui';

import { eventFacts } from '@/components/content/shared/event';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const TARGET = { day: 1, hall: 1, session: 2 };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '표에서 일요일 · B홀 · 3회차가 만나는 칸을 찾아 주제를 적고 확인을 누르세요. 그다음 의도한 결함을 켜고 연결 검증 값을 비교합니다.',
    defect: '의도한 결함: 헤더를 굵은 td로만 표시 (th · headers 없음)',
    caption: '워크숍 일정 (요일 · 홀 두 층 헤더, 교육 예시)',
    corner: '회차',
    field: '일요일 · B홀 · 3회차의 주제',
    check: '확인',
    right: (topic: string) => `맞습니다. 그 칸의 주제는 “${topic}”입니다.`,
    wrong: '표의 칸과 다릅니다. 요일 → 홀 → 회차 순서로 다시 찾아보세요.',
    empty: '주제를 적은 뒤 확인하세요.',
    observed: '페이지가 읽은 표 연결',
    targetHeaders: '그 칸의 headers가 가리키는 헤더',
    valid: 'headers가 모두 실제 th를 가리키는 칸',
    thCount: 'th 요소 수',
    none: '연결된 헤더 없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Find the cell where Sunday, Hall B, and Session 3 meet, write its topic, and press Check. Then turn on the intentional defect and compare the verification values.',
    defect: 'Intentional defect: headers shown only as bold td (no th or headers)',
    caption: 'Workshop schedule (two header layers: day and hall, teaching example)',
    corner: 'Session',
    field: 'Topic of Sunday, Hall B, Session 3',
    check: 'Check',
    right: (topic: string) => `Correct. That cell’s topic is “${topic}”.`,
    wrong: 'That differs from the cell. Find it again in the order day, hall, then session.',
    empty: 'Write a topic, then check.',
    observed: 'Table connections the page read',
    targetHeaders: 'Headers that cell’s headers point to',
    valid: 'Cells whose headers all point to real th',
    thCount: 'th elements',
    none: 'No connected headers',
  },
};

const squash = (text: string) => text.replace(/\s+/g, ' ').trim();

/** 두 층 헤더 일정표. 칸마다 headers로 요일 · 홀 · 회차 th를 잇고, 그 연결을 실제 DOM에서 검증한다. */
export const LayeredTableDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const e = eventFacts[locale];
  const prefix = useId().replace(/:/g, '');
  const table = useRef<HTMLTableElement>(null);
  const [defect, setDefect] = useState(false);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [read, setRead] = useState({ target: '', valid: 0, total: 0, th: 0 });

  const dayId = (d: number) => `${prefix}-day-${d}`;
  const hallId = (d: number, h: number) => `${prefix}-hall-${d}-${h}`;
  const sessionId = (s: number) => `${prefix}-session-${s}`;
  const cellId = (d: number, h: number, s: number) => `${prefix}-cell-${d}-${h}-${s}`;
  const Head = defect ? 'td' : 'th';
  const headStyle = 'border border-stroke-light p-sm font-bold';
  const targetId = cellId(TARGET.day, TARGET.hall, TARGET.session);

  useEffect(() => {
    const el = table.current;
    if (!el) return;
    const resolve = (cell: Element) =>
      (cell.getAttribute('headers') ?? '')
        .split(/\s+/)
        .filter(Boolean)
        .map((id) => el.ownerDocument.getElementById(id));
    const cells = [...el.querySelectorAll('tbody td')];
    const target = el.ownerDocument.getElementById(targetId);
    const targetHeaders = target ? resolve(target) : [];
    setRead({
      target:
        targetHeaders.every((h) => h?.tagName === 'TH') && targetHeaders.length
          ? targetHeaders.map((h) => squash(h?.textContent ?? '')).join(' · ')
          : '',
      valid: cells.filter((cell) => {
        const heads = resolve(cell);
        return heads.length === 3 && heads.every((h) => h?.tagName === 'TH');
      }).length,
      total: cells.length,
      th: el.querySelectorAll('th').length,
    });
  }, [defect, locale, targetId]);

  const check = () => {
    const expected = e.program[TARGET.day][TARGET.hall][TARGET.session];
    if (!squash(answer)) setResult(c.empty);
    else setResult(squash(answer) === expected ? c.right(expected) : c.wrong);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={defect} onChange={(ev) => setDefect(ev.target.checked)} />
        {c.defect}
      </label>
      <TableScroll label={c.caption} className="rounded-sm border border-stroke-light">
        <table ref={table} className="w-full min-w-[36rem] border-collapse text-xsm">
          <caption className="p-sm text-left font-semiBold text-text-default">{c.caption}</caption>
          <thead>
            <tr>
              <Head rowSpan={2} scope={defect ? undefined : 'col'} className={headStyle}>
                {c.corner}
              </Head>
              {e.days.map((day, d) => (
                <Head
                  key={day}
                  id={defect ? undefined : dayId(d)}
                  colSpan={2}
                  scope={defect ? undefined : 'colgroup'}
                  className={headStyle}
                >
                  {day}
                </Head>
              ))}
            </tr>
            <tr>
              {e.days.flatMap((day, d) =>
                e.halls.map((hall, h) => (
                  <Head
                    key={`${day}-${hall}`}
                    id={defect ? undefined : hallId(d, h)}
                    scope={defect ? undefined : 'col'}
                    className={headStyle}
                  >
                    {hall}
                  </Head>
                )),
              )}
            </tr>
          </thead>
          <tbody>
            {e.sessions.map((session, s) => (
              <tr key={session.label}>
                <Head
                  id={defect ? undefined : sessionId(s)}
                  scope={defect ? undefined : 'row'}
                  className={`${headStyle} text-left`}
                >
                  {`${session.label} ${session.time}`}
                </Head>
                {e.days.flatMap((day, d) =>
                  e.halls.map((hall, h) => (
                    <td
                      key={`${day}-${hall}`}
                      id={cellId(d, h, s)}
                      headers={defect ? undefined : `${dayId(d)} ${hallId(d, h)} ${sessionId(s)}`}
                      className="border border-stroke-light p-sm text-text-light"
                    >
                      {e.program[d][h][s]}
                    </td>
                  )),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </TableScroll>
      <div className="flex flex-wrap items-end gap-md">
        <TextField label={c.field} value={answer} onChange={(ev) => setAnswer(ev.target.value)} />
        <Button type="button" variant="outlined" size="sm" onClick={check}>
          {c.check}
        </Button>
      </div>
      <p role="status" className="text-xsm">
        {result}
      </p>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.targetHeaders, read.target || c.none],
          [c.valid, `${read.valid} / ${read.total}`],
          [c.thCount, read.th],
        ]}
      />
    </PracticeFrame>
  );
};
