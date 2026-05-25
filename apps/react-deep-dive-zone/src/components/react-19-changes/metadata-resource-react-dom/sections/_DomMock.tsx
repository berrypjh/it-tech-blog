import { cn } from '@it-tech-blog/utils';

import type { DomLine } from '../content';

type Props = {
  dom: DomLine[];
  ariaLabel?: string;
};

const zoneClass: Record<DomLine['zone'], string> = {
  html: 'text-slate-700 dark:text-slate-200',
  head: 'text-teal-700 dark:text-teal-200',
  body: 'text-slate-700 dark:text-slate-200',
};

const zoneBg: Record<DomLine['zone'], string> = {
  html: '',
  head: 'bg-teal-50/60 dark:bg-teal-950/30',
  body: 'bg-slate-50/40 dark:bg-slate-900/30',
};

/** DOM mock — head 영역은 teal tint, body 영역은 slate tint */
export const DomMock = ({ dom, ariaLabel }: Props) => (
  <div
    role="img"
    aria-label={ariaLabel}
    className={cn(
      'overflow-x-auto rounded-xl border-2',
      'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
    )}
  >
    <pre className="font-mono text-[12px] leading-relaxed sm:text-[13px]">
      <code className="block">
        {dom.map((line, i) => {
          const indent = '  '.repeat(line.indent);
          return (
            <span
              key={i}
              className={cn(
                'block px-3 py-0.5 whitespace-pre',
                zoneBg[line.zone],
                zoneClass[line.zone],
              )}
            >
              <span className="text-slate-400 dark:text-slate-600">{indent}</span>
              <span className="font-bold">{line.tag}</span>
            </span>
          );
        })}
      </code>
    </pre>
  </div>
);
