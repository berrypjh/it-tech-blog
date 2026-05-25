import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { RefAsPropElementShapeContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon } from '../icons';
import { pathTone } from '../tone';

import { CodePanel } from './_CodePanel';

type Props = { content: RefAsPropElementShapeContent['hero'] };

export const RefAsPropHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-19-changes/ref-as-prop-element-shape.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // forwardRef wrapper → props.ref direct'}
        </span>
      }
    />

    <div className="mt-md flex flex-col gap-md">
      {/* TOP: badges + title + subtitle */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[60ch]">
          {content.subtitleLines.join(' ')}
        </p>
      </div>

      {/* BEFORE/AFTER comparison */}
      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_11fr)_auto_minmax(0,_11fr)] lg:gap-md items-stretch">
        {/* React 18 (Before) */}
        <CodeColumn
          label={content.before.label}
          centerLabel={content.centerLabels.before}
          path="react18"
          code={content.before.code}
          fileName="MyInput.jsx · React 18"
          langBadge={content.before.langBadge}
        />

        {/* Arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
              'border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span className="hidden lg:inline-flex">
              <ArrowRightIcon className="h-5 w-5" />
            </span>
            <span className="inline-flex lg:hidden">
              <ArrowDownIcon className="h-5 w-5" />
            </span>
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
            ref as prop
          </span>
        </div>

        {/* React 19 (After) */}
        <CodeColumn
          label={content.after.label}
          centerLabel={content.centerLabels.after}
          path="react19"
          code={content.after.code}
          fileName="MyInput.jsx · React 19"
          langBadge={content.after.langBadge}
        />
      </div>
    </div>
  </section>
);

const CodeColumn = ({
  label,
  centerLabel,
  path,
  code,
  fileName,
  langBadge,
}: {
  label: string;
  centerLabel: string;
  path: 'react18' | 'react19';
  code: string;
  fileName: string;
  langBadge: 'JSX';
}) => {
  const tone = pathTone[path];
  const borderClass = path === 'react18' ? 'border-indigo-700/70' : 'border-emerald-700/70';

  return (
    <article className="flex flex-col gap-sm">
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
            tone.chip,
            'font-mono text-[10px] font-bold uppercase tracking-wider',
          )}
        >
          <span aria-hidden="true" className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)} />
          {label}
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-1.5 py-0.5',
            'border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
            'font-mono text-[10px] font-bold uppercase tracking-wider',
          )}
        >
          {centerLabel}
        </span>
      </header>
      <CodePanel code={code} fileName={fileName} langBadge={langBadge} toneBorder={borderClass} />
    </article>
  );
};
