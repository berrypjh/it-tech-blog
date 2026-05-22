import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../start/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ComparisonSideCard, ReactCreateElementContent } from '../content';
import { ArrowLeftRightIcon, GitCompareIcon, QuoteIcon } from '../icons';

type Props = { content: ReactCreateElementContent['compare'] };

export const JsxCreateElementComparison = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.85fr)_minmax(0,_1fr)] gap-md items-stretch">
      <SideCard card={content.leftCard} />

      <article
        className={cn(
          'relative flex flex-col gap-sm items-center justify-center rounded-3xl p-md text-center',
          'bg-gradient-to-br from-sky-50 via-violet-50 to-teal-50',
          'dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40',
          'border-2 border-dashed border-violet-300/70 dark:border-violet-700/60',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-violet-600 shadow-md dark:bg-slate-900/80 dark:text-violet-300"
        >
          <QuoteIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.centerQuote}
        </p>
        <span className="text-xxsm uppercase tracking-wider font-mono text-violet-700 dark:text-violet-300">
          {content.centerSub}
        </span>
      </article>

      <SideCard card={content.rightCard} />

      {/* horizontal arrows on lg */}
      <span
        aria-hidden="true"
        className="hidden lg:flex absolute left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300"
      >
        <ArrowLeftRightIcon className="h-4 w-4" />
      </span>
      <span
        aria-hidden="true"
        className="hidden lg:flex absolute left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300"
      >
        <ArrowLeftRightIcon className="h-4 w-4" />
      </span>
    </div>
  </section>
);

const SideCard = ({ card }: { card: ComparisonSideCard }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
        )}
      >
        {card.label}
      </span>
      <CodePanel code={card.code} language={card.id === 'jsx' ? 'JSX' : 'JS'} />
      <p className={cn('text-xsm leading-relaxed break-keep', t.text)}>{card.body}</p>
    </article>
  );
};
