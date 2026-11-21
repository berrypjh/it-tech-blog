'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, TableScroll } from '@berrypjh/react-ui';

import { lockerOptions } from '../../shared/lockerOptions';
import { ObservedPanel } from '../../shared/ObservedPanel';
import { createList, removeOption } from '../../shared/optionList';
import { OptionListbox } from '../../shared/OptionListbox';
import { describeElement, useActiveElement } from '../../shared/useActiveElement';

type LogEntry = { id: number; key: string; focus: string; active: string; selected: string };

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 절차대로 키보드만으로 진행하세요. 처음에는 삭제 뒤 복구가 꺼진 의도한 결함 상태입니다. 찾은 뒤 복구를 켜면 목록이 처음 상태로 돌아갑니다.',
    recovery: '삭제 뒤 활성 항목 복구 (꺼짐이 의도한 결함)',
    start: '시작 지점',
    list: '수령 보관함',
    empty: '남은 보관함이 없습니다.',
    remove: '선택 항목 삭제',
    reset: '처음부터 다시',
    observed: '세 상태',
    focus: 'DOM 포커스',
    active: '활성 항목',
    selected: '선택값',
    stop: 'Tab 정지점 (tabindex="0")',
    none: '(없음)',
    missing: '(없음: Tab으로 목록에 닿지 않음)',
    logHeading: '최근 키 기록',
    head: ['키', 'DOM 포커스', '활성 항목', '선택값'],
    noLog: '아직 기록이 없습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Follow the steps above with the keyboard only. It starts in the intentional defect state, with recovery after removal off. Once you find it, turning recovery on resets the list.',
    recovery: 'Recover the active item after removal (off is the intentional defect)',
    start: 'Starting point',
    list: 'Pickup locker',
    empty: 'No lockers remain.',
    remove: 'Remove selected item',
    reset: 'Start over',
    observed: 'Three states',
    focus: 'DOM focus',
    active: 'Active item',
    selected: 'Selection',
    stop: 'Tab stop (tabindex="0")',
    none: '(none)',
    missing: '(none: Tab cannot reach the list)',
    logHeading: 'Recent keys',
    head: ['Key', 'DOM focus', 'Active item', 'Selection'],
    noLog: 'Nothing recorded yet.',
  },
};

const buttonClass =
  'w-fit rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold text-text-default aria-disabled:cursor-not-allowed aria-disabled:opacity-60';

/** 진입 · 이동 · 선택 · 이탈 · 삭제 · 재개 경로에서 세 상태를 나란히 보여 주고, 키를 뗄 때마다 기록한다. */
const PathCheck = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const options = lockerOptions(locale);
  const [recovery, setRecovery] = useState(false);
  const [state, setState] = useState(() => createList(options));
  const [log, setLog] = useState<LogEntry[]>([]);
  const [stop, setStop] = useState('');
  const [focus, refresh] = useActiveElement();
  const rootRef = useRef<HTMLDivElement>(null);
  const labelOf = (id: string | null) =>
    state.options.find((option) => option.id === id)?.label ?? c.none;

  useEffect(() => {
    setStop(rootRef.current?.querySelector('[role="option"][tabindex="0"]')?.textContent ?? '');
    refresh();
  }, [state, refresh]);

  const restart = () => {
    setState(createList(options));
    setLog([]);
  };

  const remove = () => {
    if (state.selectedId) setState(removeOption(state, state.selectedId, recovery));
  };

  const record = (event: React.KeyboardEvent) => {
    const { key, shiftKey } = event;
    const name = key === ' ' ? 'Space' : shiftKey && key === 'Tab' ? 'Shift+Tab' : key;
    setLog((prev) =>
      [
        {
          id: (prev[0]?.id ?? 0) + 1,
          key: name,
          focus: describeElement(document.activeElement),
          active: labelOf(state.activeId),
          selected: labelOf(state.selectedId),
        },
        ...prev,
      ].slice(0, 8),
    );
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input
          type="checkbox"
          checked={recovery}
          onChange={(e) => {
            setRecovery(e.target.checked);
            restart();
          }}
        />
        {c.recovery}
      </label>

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions -- 자식의 키를 기록만 하는 관찰용 상자 */}
      <div
        ref={rootRef}
        onKeyUp={record}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md"
      >
        <button type="button" className={buttonClass}>
          {c.start}
        </button>
        <OptionListbox
          strategy="roving"
          label={c.list}
          emptyText={c.empty}
          state={state}
          onChange={setState}
        />
        <div className="flex flex-wrap items-center gap-sm">
          <button
            type="button"
            aria-disabled={state.selectedId ? undefined : true}
            onClick={remove}
            className={buttonClass}
          >
            {c.remove}
          </button>
          <Button type="button" variant="text" size="sm" onClick={restart}>
            {c.reset}
          </Button>
        </div>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.focus, <code key="a">{focus}</code>],
          [c.active, labelOf(state.activeId)],
          [c.selected, labelOf(state.selectedId)],
          [c.stop, stop || (state.options.length > 0 ? c.missing : c.none)],
        ]}
      />

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm font-semiBold text-text-default">{c.logHeading}</p>
        {log.length === 0 ? (
          <p className="text-text-light">{c.noLog}</p>
        ) : (
          <TableScroll label={c.logHeading}>
            <table className="w-full text-left">
              <thead>
                <tr>
                  {c.head.map((heading) => (
                    <th key={heading} scope="col" className="py-xs pr-md font-semiBold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {log.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-xs pr-md">
                      <code>{entry.key}</code>
                    </td>
                    <td className="py-xs pr-md">
                      <code>{entry.focus}</code>
                    </td>
                    <td className="py-xs pr-md">{entry.active}</td>
                    <td className="py-xs pr-md">{entry.selected}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        )}
      </div>
    </PracticeFrame>
  );
};

/** 언어가 바뀌면 항목 이름이 달라지므로 상태를 새로 시작한다. */
export const PathCheckDemo = () => {
  const { locale } = useLocale();
  return <PathCheck key={locale} />;
};
