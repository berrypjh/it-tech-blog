'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { Kbd } from '@/components/shared/Kbd';

import { lockerOptions } from '../../shared/lockerOptions';
import { ObservedPanel } from '../../shared/ObservedPanel';
import { createList, removeOption } from '../../shared/optionList';
import { type FocusStrategy, OptionListbox } from '../../shared/OptionListbox';
import { useActiveElement } from '../../shared/useActiveElement';

const strategies: FocusStrategy[] = ['roving', 'activedescendant'];

const content = {
  ko: {
    practice: '실습',
    instructions: (space: React.ReactNode) => (
      <>
        각 목록에 Tab으로 들어가 방향키 · Home · End로 움직이고 {space}로 고른 뒤 Tab으로 나가
        보세요. 그다음 선택 항목을 지우고 다시 들어갑니다.
      </>
    ),
    titles: { roving: 'Roving tabindex', activedescendant: 'aria-activedescendant' },
    listLabel: (title: string) => `수령 보관함 (${title})`,
    empty: '남은 보관함이 없습니다.',
    remove: '선택 항목 삭제',
    reset: '다시 채우기',
    observed: '지금 관찰한 값',
    active: 'document.activeElement',
    widgetActive: '활성 항목',
    selected: '선택값',
    stop: 'tabindex="0"인 항목',
    reference: 'aria-activedescendant',
    resolved: '참조 대상',
    found: '있음',
    missing: '없음',
    none: '(없음)',
  },
  en: {
    practice: 'Exercise',
    instructions: (space: React.ReactNode) => (
      <>
        Tab into each list, move with arrows, Home, and End, choose with {space}, and Tab out. Then
        remove the selected item and enter again.
      </>
    ),
    titles: { roving: 'Roving tabindex', activedescendant: 'aria-activedescendant' },
    listLabel: (title: string) => `Pickup locker (${title})`,
    empty: 'No lockers remain.',
    remove: 'Remove selected item',
    reset: 'Refill',
    observed: 'Observed now',
    active: 'document.activeElement',
    widgetActive: 'Active item',
    selected: 'Selection',
    stop: 'Item with tabindex="0"',
    reference: 'aria-activedescendant',
    resolved: 'Reference target',
    found: 'Found',
    missing: 'Missing',
    none: '(none)',
  },
};

/** 한 방식의 목록과 그 DOM 관찰 값. 삭제 버튼은 목록 밖의 네이티브 버튼이다. */
const StrategyCard = ({ strategy }: { strategy: FocusStrategy }) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const options = lockerOptions(locale);
  const [state, setState] = useState(() => createList(options));
  const [dom, setDom] = useState({ stop: '', reference: '', resolved: false });
  const [active, refresh] = useActiveElement();
  const rootRef = useRef<HTMLDivElement>(null);
  const title = c.titles[strategy];
  const labelOf = (id: string | null) =>
    state.options.find((option) => option.id === id)?.label ?? c.none;

  useEffect(() => {
    const root = rootRef.current;
    const list = root?.querySelector('[role="listbox"]');
    const reference = list?.getAttribute('aria-activedescendant') ?? '';
    setDom({
      stop: root?.querySelector('[role="option"][tabindex="0"]')?.textContent ?? '',
      reference,
      resolved: reference !== '' && document.getElementById(reference) !== null,
    });
    refresh();
  }, [state, refresh]);

  const remove = () => {
    if (state.selectedId) setState(removeOption(state, state.selectedId));
  };

  return (
    <div
      ref={rootRef}
      className="flex min-w-0 flex-col gap-md rounded-sm border border-stroke-light p-md"
    >
      <p className="text-xsm font-semiBold text-text-default">{title}</p>
      <OptionListbox
        strategy={strategy}
        label={c.listLabel(title)}
        emptyText={c.empty}
        state={state}
        onChange={setState}
      />
      <div className="flex flex-wrap gap-sm">
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-disabled={state.selectedId ? undefined : true}
          onClick={remove}
        >
          {c.remove}
        </Button>
        <Button
          type="button"
          variant="text"
          size="sm"
          onClick={() => setState(createList(options))}
        >
          {c.reset}
        </Button>
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, <code key="a">{active}</code>],
          [c.widgetActive, labelOf(state.activeId)],
          [c.selected, labelOf(state.selectedId)],
          strategy === 'roving'
            ? [c.stop, dom.stop || c.none]
            : [c.reference, <code key="a">{dom.reference || c.none}</code>],
          ...(strategy === 'roving'
            ? []
            : ([[c.resolved, dom.resolved ? c.found : c.missing]] as [string, string][])),
        ]}
      />
    </div>
  );
};

/** 같은 Listbox 상태 규칙을 Roving tabindex와 aria-activedescendant로 나란히 조작한다. */
export const CompositeDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions(<Kbd>Space</Kbd>)}>
      <div className="grid gap-md lg:grid-cols-2">
        {strategies.map((strategy) => (
          <StrategyCard key={`${locale}-${strategy}`} strategy={strategy} />
        ))}
      </div>
    </PracticeFrame>
  );
};
