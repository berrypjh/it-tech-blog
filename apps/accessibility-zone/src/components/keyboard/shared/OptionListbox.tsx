'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { cx } from '@berrypjh/react-ui';
import { Check } from 'lucide-react';

import {
  findByCharacter,
  type ListMove,
  type ListState,
  moveActive,
  selectActive,
  settleOnEntry,
} from './optionList';

export type FocusStrategy = 'roving' | 'activedescendant';

const moves: Record<string, ListMove> = {
  ArrowDown: 'next',
  ArrowUp: 'previous',
  Home: 'first',
  End: 'last',
};

/**
 * APG Listbox의 단일 선택 목록. 상태는 부모가 갖고, 두 방식은 포커스를 표현하는 법만 다르다.
 * roving은 활성 항목에 DOM 포커스를 옮기고, activedescendant는 목록에 포커스를 두고 ID로 가리킨다.
 * 선택은 포커스를 따라가지 않고 Space나 클릭으로만 바뀐다.
 */
export const OptionListbox = ({
  strategy,
  label,
  emptyText,
  state,
  onChange,
}: {
  strategy: FocusStrategy;
  label: string;
  emptyText: string;
  state: ListState;
  onChange: (next: ListState) => void;
}) => {
  const baseId = useId();
  const [focused, setFocused] = useState(false);
  const moveDomFocus = useRef(false);
  const roving = strategy === 'roving';
  const domId = (id: string) => `${baseId}-${id}`;
  const activeDomId = state.activeId ? `${baseId}-${state.activeId}` : null;

  useEffect(() => {
    if (!focused || !activeDomId) return;
    const option = document.getElementById(activeDomId);
    if (!roving) option?.scrollIntoView({ block: 'nearest' });
    else if (moveDomFocus.current) option?.focus();
    moveDomFocus.current = false;
  }, [activeDomId, focused, roving]);

  const activate = (next: ListState) => {
    moveDomFocus.current = next.activeId !== state.activeId;
    onChange(next);
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.nativeEvent.isComposing) return;
    const move = moves[event.key];
    if (move && !event.shiftKey) {
      event.preventDefault();
      activate(moveActive(state, move));
    } else if (event.key === ' ') {
      event.preventDefault();
      onChange(selectActive(state));
    } else if (event.key.length === 1) {
      const match = findByCharacter(state, event.key);
      if (!match) return;
      event.preventDefault();
      activate({ ...state, activeId: match });
    }
  };

  const onFocus = (event: React.FocusEvent<HTMLDivElement>) => {
    setFocused(true);
    if (!roving) return;
    if (event.target === event.currentTarget) {
      if (activeDomId) document.getElementById(activeDomId)?.focus();
      return;
    }
    const id = (event.target as HTMLElement).dataset.optionId;
    if (id && id !== state.activeId) onChange({ ...state, activeId: id });
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (event.currentTarget.contains(event.relatedTarget) || !document.hasFocus()) return;
    setFocused(false);
    onChange(settleOnEntry(state));
  };

  const choose = (id: string) => {
    if (roving) document.getElementById(domId(id))?.focus();
    onChange({ ...state, activeId: id, selectedId: id });
  };

  if (state.options.length === 0) {
    return <p className="rounded-sm border border-stroke-light p-md text-xsm">{emptyText}</p>;
  }

  return (
    <div
      role="listbox"
      aria-label={label}
      aria-activedescendant={roving ? undefined : (activeDomId ?? undefined)}
      tabIndex={roving ? -1 : 0}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      style={{ height: '10rem' }}
      className="flex flex-col gap-xs overflow-y-auto rounded-sm border border-stroke-light p-sm text-xsm"
    >
      {state.options.map((option) => {
        const active = option.id === state.activeId;
        const selected = option.id === state.selectedId;
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events -- 키보드는 listbox가 처리한다
          <div
            key={option.id}
            id={domId(option.id)}
            data-option-id={option.id}
            role="option"
            aria-selected={selected}
            tabIndex={roving ? (active ? 0 : -1) : undefined}
            onClick={() => choose(option.id)}
            className={cx(
              'flex shrink-0 cursor-pointer items-center gap-sm rounded-xs px-sm py-xs',
              selected && 'bg-[var(--ds-background-selected)] font-semiBold',
              !roving &&
                active &&
                focused &&
                'outline outline-2 outline-offset-2 outline-[var(--ds-border-primary-color)]',
            )}
          >
            <Check
              className={cx('h-4 w-4 shrink-0', !selected && 'invisible')}
              aria-hidden="true"
            />
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
