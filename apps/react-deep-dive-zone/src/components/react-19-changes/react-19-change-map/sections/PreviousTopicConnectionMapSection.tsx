import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { ArrowRightIcon, CircleHelpIcon, SparklesIcon, TargetIcon } from '../icons';
import { layerTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['previousTopicMap'] };

export const PreviousTopicConnectionMapSection = ({ content }: Props) => (
  <section aria-labelledby="previous-topic-map-heading" className="flex flex-col">
    <SectionHeader
      id="previous-topic-map-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* column headings (desktop only) */}
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_4fr)_auto_minmax(0,_6fr)] lg:items-center lg:gap-3 lg:px-1 lg:mb-sm">
        <ColumnHead
          icon={<CircleHelpIcon className="h-3.5 w-3.5" />}
          label={content.headings.question}
        />
        <span aria-hidden="true" />
        <ColumnHead
          icon={<SparklesIcon className="h-3.5 w-3.5" />}
          label={content.headings.feature}
          align="center"
        />
        <span aria-hidden="true" />
        <ColumnHead
          icon={<TargetIcon className="h-3.5 w-3.5" />}
          label={content.headings.structure}
        />
      </div>

      <ul className="flex flex-col gap-2">
        {content.rows.map((row) => {
          const tone = layerTone[row.layer];
          return (
            <li
              key={row.question}
              className={cn(
                'grid grid-cols-1 gap-2 rounded-xl border-2 p-3',
                'border-slate-200 bg-slate-50/50',
                'dark:border-slate-700 dark:bg-slate-900/30',
                'lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_4fr)_auto_minmax(0,_6fr)] lg:items-center lg:gap-3 lg:bg-transparent lg:border-transparent lg:p-2',
                'lg:hover:bg-blue-50/30 lg:dark:hover:bg-blue-950/20 transition-colors',
              )}
            >
              {/* question */}
              <div
                className={cn(
                  'flex items-center gap-2 rounded-lg border bg-white px-3 py-2',
                  'border-slate-200 dark:border-slate-700 dark:bg-[var(--term-bg)]',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                >
                  <CircleHelpIcon className="h-3 w-3" />
                </span>
                <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                  {row.question}
                </span>
              </div>

              {/* arrow 1 (desktop only) */}
              <ArrowSpacer />

              {/* feature */}
              <div className="flex justify-start lg:justify-center">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5',
                    'bg-white dark:bg-[var(--term-bg)]',
                    tone.borderStrong,
                    tone.text,
                    'font-mono text-xxsm font-bold shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)}
                  />
                  {row.feature}
                </span>
              </div>

              {/* arrow 2 (desktop only) */}
              <ArrowSpacer />

              {/* structure */}
              <div
                className={cn(
                  'flex flex-col gap-1 rounded-lg border-2 px-3 py-2',
                  tone.border,
                  'bg-white dark:bg-[var(--term-bg)]',
                )}
              >
                {row.structureLines.map((line, idx) => (
                  <span
                    key={line}
                    className={cn(
                      'break-keep',
                      idx === 0
                        ? cn('text-xsm font-bold', tone.text)
                        : 'text-xxsm leading-relaxed text-[var(--term-muted)]',
                    )}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

const ColumnHead = ({
  icon,
  label,
  align,
}: {
  icon: React.ReactNode;
  label: string;
  align?: 'center';
}) => (
  <div
    className={cn(
      'flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]',
      align === 'center' && 'justify-center',
    )}
  >
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
    >
      {icon}
    </span>
    {label}
  </div>
);

const ArrowSpacer = () => (
  <span
    aria-hidden="true"
    className="hidden lg:flex items-center justify-center text-slate-400 dark:text-slate-600"
  >
    <ArrowRightIcon className="h-3.5 w-3.5" />
  </span>
);
