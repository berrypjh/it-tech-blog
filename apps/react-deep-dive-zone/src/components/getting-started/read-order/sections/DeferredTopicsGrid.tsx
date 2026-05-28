import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { DeferredCard, ReadOrderContent } from '../content';
import { deferredIconByName, EyeIcon, InfoIcon } from '../icons';

type Props = { content: ReadOrderContent['deferred'] };

type DeferredTone = DeferredCard['tone'];

const toneClasses: Record<DeferredTone, { iconBg: string; iconText: string; border: string }> = {
  rose: {
    iconBg: 'bg-rose-100 dark:bg-rose-950/60',
    iconText: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-200/70 dark:border-rose-800/60',
  },
  amber: {
    iconBg: 'bg-amber-100 dark:bg-amber-950/60',
    iconText: 'text-amber-600 dark:text-amber-300',
    border: 'border-amber-200/70 dark:border-amber-800/60',
  },
  sky: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/70 dark:border-sky-800/60',
  },
  violet: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/70 dark:border-violet-800/60',
  },
  slate: {
    iconBg: 'bg-slate-100 dark:bg-slate-800',
    iconText: 'text-slate-600 dark:text-slate-300',
    border: 'border-slate-200/70 dark:border-slate-700',
  },
};

export const DeferredTopicsGrid = ({ content }: Props) => {
  return (
    <section id="section-deferred" aria-labelledby="heading-deferred" className="space-y-lg">
      <SectionHeader
        id="deferred"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<EyeIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
        {content.cards.map((card) => {
          const t = toneClasses[card.tone];
          const Icon = deferredIconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <article
                className={cn(
                  'group flex flex-col items-center text-center w-full h-full gap-sm rounded-lg border bg-[var(--term-bg)]',
                  'p-md sm:p-lg transition-all',
                  'hover:-translate-y-0.5 hover:shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-full shadow-[0_1px_0_var(--term-border)]',
                    t.iconBg,
                    t.iconText,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                  {card.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h3>

                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                  {card.description.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--term-dim)] border border-dashed border-[var(--term-border)]"
                >
                  later
                </span>
              </article>
            </li>
          );
        })}
      </ul>

      {/* info strip */}
      <aside className="flex items-start sm:items-center gap-sm rounded-md border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 px-md py-sm shadow-[0_2px_0_var(--term-border)]">
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
        >
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm text-sky-900 dark:text-sky-100 leading-relaxed break-keep">
          {content.infoStrip}
        </p>
      </aside>
    </section>
  );
};
