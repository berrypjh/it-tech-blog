import { cn } from '@it-tech-blog/utils';

import type { TreeLine } from '../content';
import { domainTone } from '../tone';

import { iconRegistry } from './_iconRegistry';

type Props = {
  tree: TreeLine[];
  ariaLabel?: string;
};

/** React Tree mock — indent + colored icon + tag name */
export const TreeMock = ({ tree, ariaLabel }: Props) => (
  <pre
    role="img"
    aria-label={ariaLabel}
    className={cn(
      'overflow-x-auto rounded-xl border-2 px-3 py-3',
      'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
      'font-mono text-[12px] leading-relaxed sm:text-[13px]',
    )}
  >
    <code className="block whitespace-pre">
      {tree.map((line, i) => {
        const tone = line.domain ? domainTone[line.domain] : undefined;
        const Icon = line.iconKey ? iconRegistry[line.iconKey] : undefined;
        const indent = '  '.repeat(line.indent);
        return (
          <span key={i} className="block">
            <span className="text-slate-400 dark:text-slate-600">{indent}</span>
            {Icon && (
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center align-middle mr-1.5 h-4 w-4 rounded border',
                  tone?.iconChip ?? 'border-slate-200 bg-slate-100 text-slate-500',
                )}
              >
                <Icon className="h-2.5 w-2.5" />
              </span>
            )}
            <span className={cn('font-bold', tone?.text ?? 'text-[var(--term-fg)]')}>
              {line.tag}
            </span>
          </span>
        );
      })}
    </code>
  </pre>
);
