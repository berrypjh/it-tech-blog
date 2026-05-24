import { cn } from '@it-tech-blog/utils';

import type { ListenerKind } from './content';
import {
  KeyboardIcon,
  MousePointerClickIcon,
  PointerIcon,
  SendIcon,
  SparklesIcon,
  TargetIcon,
  TextCursorInputIcon,
} from './icons';

type Props = {
  label: string;
  kind: ListenerKind;
  size?: 'sm' | 'md';
  showIcon?: boolean;
};

const kindStyle: Record<ListenerKind, string> = {
  mouse:
    'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  pointer:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  keyboard:
    'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  input:
    'border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  focus:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
  form: 'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  misc: 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
};

const kindIcon: Record<ListenerKind, React.ComponentType<{ className?: string }>> = {
  mouse: MousePointerClickIcon,
  pointer: PointerIcon,
  keyboard: KeyboardIcon,
  input: TextCursorInputIcon,
  focus: TargetIcon,
  form: SendIcon,
  misc: SparklesIcon,
};

export const ListenerPill = ({ label, kind, size = 'md', showIcon = true }: Props) => {
  const Icon = kindIcon[kind];
  return (
    <span
      className={cn(
        'group inline-flex items-center gap-1.5 rounded-full border font-mono font-medium transition-colors',
        'hover:brightness-105 hover:shadow-[0_1px_0_var(--term-border)]',
        size === 'sm' ? 'px-2.5 py-1 text-[10px]' : 'px-3 py-1.5 text-[11px] sm:text-xsm',
        kindStyle[kind],
      )}
    >
      {showIcon && <Icon aria-hidden="true" className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />}
      <span>{label}</span>
    </span>
  );
};
