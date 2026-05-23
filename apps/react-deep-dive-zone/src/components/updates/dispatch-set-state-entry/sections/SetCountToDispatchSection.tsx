import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { DispatchSetStateEntryContent } from '../content';
import { ArrowRightIcon, CodeIcon, FunctionSquareIcon, InfoIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['compare'] };

export const SetCountToDispatchSection = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_minmax(0,_0.7fr)] gap-md lg:gap-md items-stretch">
      {/* Left card */}
      <CompareCard
        tone="emerald"
        title={content.leftCard.title}
        code={content.leftCard.code}
        icon={<CodeIcon className="h-4 w-4" />}
      />

      {/* Center arrow */}
      <div className="flex lg:flex-col items-center justify-center gap-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center rounded-full border-2',
            'h-10 w-10 sm:h-12 sm:w-12',
            'border-sky-300/80 bg-white text-sky-600',
            'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
        </span>
      </div>

      {/* Right card */}
      <CompareCard
        tone="sky"
        title={content.rightCard.title}
        code={content.rightCard.code}
        icon={<FunctionSquareIcon className="h-4 w-4" />}
      />

      {/* Action side note */}
      <aside
        className={cn(
          'flex flex-col gap-sm rounded-3xl border-2 border-dashed p-md',
          'border-amber-300/70 bg-amber-50/40',
          'dark:border-amber-700/60 dark:bg-amber-950/20',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <InfoIcon className="h-4 w-4" />
          </span>
          <span className="text-xsm font-bold text-amber-800 dark:text-amber-100 break-keep">
            {content.sideNote.title}
          </span>
        </header>
        <p className="text-xxsm sm:text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
          {content.sideNote.body}
        </p>
        <ul className="flex flex-wrap gap-1.5 pt-1">
          <li className="rounded-md border border-amber-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-amber-800 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-100">
            value
          </li>
          <li className="rounded-md border border-amber-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-amber-800 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-100">
            updater fn
          </li>
        </ul>
      </aside>
    </div>
  </section>
);

type CompareCardProps = {
  tone: 'emerald' | 'sky';
  title: string;
  code: string;
  icon: React.ReactNode;
};

const toneClass = {
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    iconBox:
      'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
    bg: 'bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-[var(--term-bg)] dark:via-emerald-950/20 dark:to-[var(--term-bg)]',
  },
  sky: {
    border: 'border-sky-200/80 dark:border-sky-800/70',
    iconBox:
      'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    bg: 'bg-gradient-to-br from-white via-sky-50/30 to-white dark:from-[var(--term-bg)] dark:via-sky-950/20 dark:to-[var(--term-bg)]',
  },
} as const;

const CompareCard = ({ tone, title, code, icon }: CompareCardProps) => {
  const t = toneClass[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        t.border,
        t.bg,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.iconBox,
          )}
        >
          {icon}
        </span>
        <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.title)}>
          {title}
        </h3>
      </header>

      <pre
        className={cn(
          'mt-auto overflow-x-auto rounded-2xl border px-md py-3 font-mono text-xsm sm:text-sm leading-[1.7]',
          'border-slate-800 bg-slate-950 text-slate-100',
          'shadow-[0_8px_24px_-12px_rgba(2,6,23,0.55)]',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};
