import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ComparisonSideCard, ReactCreateElementContent } from '../content';
import { ArrowLeftRightIcon, GitCompareIcon, QuoteIcon } from '../icons';
import { localTone } from '../localTone';

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
          'bg-[var(--term-surface)]',
          'border-2 border-dashed border-[var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)]"
        >
          <QuoteIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.centerQuote}
        </p>
        <span className="text-xxsm uppercase tracking-wider font-mono text-[var(--term-accent)]">
          {content.centerSub}
        </span>
      </article>

      <SideCard card={content.rightCard} />

      {/* horizontal arrows on lg */}
      <span
        aria-hidden="true"
        className="hidden lg:flex absolute left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
      >
        <ArrowLeftRightIcon className="h-4 w-4" />
      </span>
      <span
        aria-hidden="true"
        className="hidden lg:flex absolute left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]"
      >
        <ArrowLeftRightIcon className="h-4 w-4" />
      </span>
    </div>
  </section>
);

const SideCard = ({ card }: { card: ComparisonSideCard }) => {
  const t = localTone(card.tone);
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
          'inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
          t.text,
        )}
      >
        {card.label}
      </span>
      <CodePreviewPanel code={card.code} language={card.id === 'jsx' ? 'JSX' : 'JS'} />
      <p className={cn('text-xsm leading-relaxed break-keep', t.text)}>{card.body}</p>
    </article>
  );
};
