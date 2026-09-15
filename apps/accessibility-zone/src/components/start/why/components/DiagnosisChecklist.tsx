'use client';

import { useId } from 'react';

import { cx } from '@berrypjh/react-ui';
import { Check, ClipboardCheck } from 'lucide-react';

import type { ChecklistItem, ChecklistStatus } from '../content';

type Props = {
  title: string;
  description: string;
  items: ChecklistItem[];
  checkedIds: Set<string>;
  onToggle: (id: string) => void;
  statusBadges: Record<ChecklistStatus, string>;
};

const effectiveStatus = (item: ChecklistItem, checked: boolean): ChecklistStatus => {
  if (checked) return 'done';
  if (item.status === 'progress') return 'progress';
  if (item.status === 'review') return 'review';
  return 'todo';
};

const badgeToneClass = (status: ChecklistStatus) =>
  status === 'done'
    ? 'bg-success-su100 text-text-success dark:bg-success-su900/40'
    : status === 'review'
      ? 'bg-warning-wa100 text-text-warning dark:bg-warning-wa900/40'
      : status === 'progress'
        ? 'bg-primary-pr100 text-text-primary dark:bg-primary-pr900/40'
        : 'bg-background-default text-text-light';

export const DiagnosisChecklist = ({
  title,
  description,
  items,
  checkedIds,
  onToggle,
  statusBadges,
}: Props) => {
  const groupId = useId();
  return (
    <div className="flex h-full flex-col gap-md">
      <header className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-md bg-success-su100 text-text-success dark:bg-success-su900/40">
          <ClipboardCheck className="h-4.5 w-4.5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-text-default sm:text-md">{title}</h3>
          <p className="text-[0.6875rem] text-text-light sm:text-xsm">{description}</p>
        </div>
      </header>

      <ul className="flex flex-col gap-2">
        {items.map((item) => {
          const id = `${groupId}-${item.id}`;
          const isChecked = checkedIds.has(item.id);
          const status = effectiveStatus(item, isChecked);
          return (
            <li key={item.id}>
              <label
                htmlFor={id}
                className={cx(
                  'flex cursor-pointer items-center gap-2 rounded-md border px-sm py-2.5 text-xsm transition-colors',
                  isChecked
                    ? 'border-stroke-success/40 bg-success-su100/30 text-text-default dark:bg-success-su900/30'
                    : 'border-stroke-default bg-background-surface text-text-default hover:border-stroke-primary',
                )}
              >
                <input
                  id={id}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggle(item.id)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={cx(
                    'flex h-4 w-4 shrink-0 items-center justify-center rounded-xs border transition-colors',
                    isChecked
                      ? 'border-stroke-success bg-background-success text-text-contrastText'
                      : 'border-stroke-default bg-background-surface',
                  )}
                >
                  {isChecked && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                <span className="flex-1">{item.label}</span>
                <span
                  className={cx(
                    'ml-auto inline-flex shrink-0 items-center rounded-rounded px-2 py-0.5 text-xxsm font-semiBold',
                    badgeToneClass(status),
                  )}
                >
                  {statusBadges[status]}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { effectiveStatus };
