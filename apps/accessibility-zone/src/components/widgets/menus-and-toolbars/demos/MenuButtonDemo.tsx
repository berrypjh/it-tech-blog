'use client';

import { useEffect, useId, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { ChevronDown } from 'lucide-react';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';
import { moveIndex } from '@/components/widgets/shared/moveIndex';
import { controlClass } from '@/components/widgets/shared/styles';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '메뉴 버튼을 Enter로 열고 방향키로 옮긴 뒤, Escape로 닫아 보고 다시 열어 명령을 실행하세요. 문서는 가상의 자료이고 아무것도 바뀌지 않습니다.',
    trigger: '“행사 안내문” 작업',
    commands: ['복사', '이름 바꾸기', '삭제'],
    single: '명령을 하나만 두기',
    ran: (command: string) => `“${command}” 명령을 실행했습니다. (모형)`,
    after: '다음 메모',
    observed: '페이지가 읽은 DOM과 상태',
    expanded: '메뉴 버튼의 aria-expanded',
    items: 'DOM에 있는 menuitem',
    last: '마지막으로 실행한 명령',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Open the menu button with Enter, move with the arrow keys, close it with Escape, then open it again and run a command. The document is fictional and nothing changes.',
    trigger: 'Actions for “Event notice”',
    commands: ['Copy', 'Rename', 'Delete'],
    single: 'Keep only one command',
    ran: (command: string) => `Ran the “${command}” command. (model)`,
    after: 'Next note',
    observed: 'DOM and state the page read',
    expanded: 'aria-expanded of the menu button',
    items: 'menuitems in the DOM',
    last: 'Command run last',
    focus: 'document.activeElement',
    none: 'None',
  },
};

/**
 * 명령 메뉴 버튼. 열면 초점이 항목으로 가고, 위아래 화살표와 Home · End로 옮기며, 실행하거나 Escape를 누르면 닫고 버튼으로 돌아온다.
 * Tab은 가로채지 않는다. 메뉴를 닫고 초점을 버튼에 둔 채 브라우저의 기본 이동에 맡긴다.
 * 글자 키로 항목을 찾는 기능은 넣지 않았다.
 */
export const MenuButtonDemo = () => {
  const c = useLang(content);
  const id = useId();
  const [active] = useActiveElement();
  const [open, setOpen] = useState(false);
  const [single, setSingle] = useState(false);
  const [last, setLast] = useState('');
  const [focus, setFocus] = useState<{ target: string; tick: number } | null>(null);
  const [read, setRead] = useState({ expanded: '', items: '' });
  const commands = single ? c.commands.slice(0, 1) : c.commands;
  const triggerId = `${id}-trigger`;

  useEffect(() => {
    if (focus) document.getElementById(`${id}-${focus.target}`)?.focus();
  }, [id, focus]);

  useEffect(() => {
    setRead({
      expanded: document.getElementById(triggerId)?.getAttribute('aria-expanded') ?? '',
      items: [...document.querySelectorAll(`#${CSS.escape(`${id}-menu`)} [role="menuitem"]`)]
        .map((item) => item.textContent)
        .join(', '),
    });
  }, [id, triggerId, open, single]);

  const moveFocus = (target: string) =>
    setFocus((previous) => ({ target, tick: (previous?.tick ?? 0) + 1 }));

  const openAt = (index: number) => {
    setOpen(true);
    moveFocus(`item-${index}`);
  };

  const close = () => {
    setOpen(false);
    moveFocus('trigger');
  };

  const run = (command: string) => {
    setLast(command);
    close();
  };

  const onTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openAt(event.key === 'ArrowDown' ? 0 : commands.length - 1);
    }
  };

  const onItemKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'Tab') {
      document.getElementById(triggerId)?.focus();
      setOpen(false);
    } else {
      const next = moveIndex(event.key, index, commands.length, 'vertical');
      if (next === null) return;
      event.preventDefault();
      moveFocus(`item-${next}`);
    }
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input
          type="checkbox"
          checked={single}
          onChange={() => {
            setSingle(!single);
            setOpen(false);
          }}
        />
        {c.single}
      </label>

      <div
        className="relative flex flex-col items-start gap-sm text-xsm"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
        }}
      >
        <button
          type="button"
          id={triggerId}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? `${id}-menu` : undefined}
          onClick={() => (open ? close() : openAt(0))}
          onKeyDown={onTriggerKeyDown}
          className={controlClass}
        >
          {c.trigger}
          <ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />
        </button>
        {open && (
          <ul
            id={`${id}-menu`}
            role="menu"
            aria-labelledby={triggerId}
            className="flex flex-col gap-xs rounded-sm border border-stroke-default bg-background-surface p-xs"
          >
            {commands.map((command, index) => (
              <li key={command} role="none">
                <button
                  type="button"
                  id={`${id}-item-${index}`}
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() => run(command)}
                  onKeyDown={(event) => onItemKeyDown(event, index)}
                  className="w-full rounded-xs px-md py-xs text-left hover:bg-background-default"
                >
                  {command}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <label className="flex flex-col gap-xs text-xsm">
        {c.after}
        <input className="w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm" />
      </label>

      <p role="status" className="text-xsm">
        {last ? c.ran(last) : ''}
      </p>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.expanded, <code key="e">{read.expanded}</code>],
          [c.items, read.items || c.none],
          [c.last, last || c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
