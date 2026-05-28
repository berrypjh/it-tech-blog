import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { DispatchSetStateContent } from '../content';
import { ArrowLeftRightIcon, ArrowRightIcon, BracesIcon, CodeIcon, SparklesIcon } from '../icons';

type Props = { content: DispatchSetStateContent['compare'] };

export const PublicApiInternalCompare = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      {/* Left card */}
      <CompareCard
        tone="sky"
        title={content.leftCard.title}
        code={content.leftCard.code}
        description={content.leftCard.description}
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
        tone="violet"
        title={content.rightCard.title}
        code={content.rightCard.code}
        description={content.rightCard.description}
        icon={<BracesIcon className="h-4 w-4" />}
      />
    </div>

    {/* Bottom callout */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 px-md py-3',
        'border-sky-200/80 bg-sky-50/70',
        'dark:border-sky-800/70 dark:bg-sky-950/40',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
          'bg-amber-100 text-amber-700 border border-amber-200/80',
          'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);

type CompareCardProps = {
  tone: 'sky' | 'violet';
  title: string;
  code: string;
  description: string;
  icon: React.ReactNode;
};

const toneClass = {
  sky: {
    border: 'border-sky-200/80 dark:border-sky-800/70',
    iconBox:
      'bg-sky-100 text-sky-700 border border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    title: 'text-sky-800 dark:text-sky-100',
    bg: 'bg-gradient-to-br from-white via-sky-50/30 to-white dark:from-[var(--term-bg)] dark:via-sky-950/20 dark:to-[var(--term-bg)]',
  },
  violet: {
    border: 'border-violet-200/80 dark:border-violet-800/70',
    iconBox:
      'bg-violet-100 text-violet-700 border border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    title: 'text-violet-800 dark:text-violet-100',
    bg: 'bg-gradient-to-br from-white via-violet-50/30 to-white dark:from-[var(--term-bg)] dark:via-violet-950/20 dark:to-[var(--term-bg)]',
  },
} as const;

const CompareCard = ({ tone, title, code, description, icon }: CompareCardProps) => {
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
          className={cn('inline-flex h-9 w-9 items-center justify-center rounded-xl', t.iconBox)}
        >
          {icon}
        </span>
        <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.title)}>
          {title}
        </h3>
      </header>

      <pre
        className={cn(
          'overflow-x-auto rounded-2xl border px-md py-3 font-mono text-xsm sm:text-sm leading-[1.7]',
          'border-slate-800 bg-slate-950 text-slate-100',
          'shadow-[0_8px_24px_-12px_rgba(2,6,23,0.55)]',
        )}
      >
        <code>{code}</code>
      </pre>

      <p className="text-xsm sm:text-sm text-[var(--term-fg)] leading-relaxed break-keep">
        {description}
      </p>
    </article>
  );
};
