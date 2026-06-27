import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ComparisonSideCard, ReactCreateElementContent } from '../content';
import { GitCompareIcon, QuoteIcon } from '../icons';

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

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_0.85fr)_auto_minmax(0,_1fr)] items-stretch gap-md">
      <SideCard card={content.leftCard} />
      <FlowArrow />

      <article
        className={cn(
          'flex h-full flex-col gap-sm items-center justify-center rounded-3xl p-md text-center',
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

      <FlowArrow />
      <SideCard card={content.rightCard} />
    </div>
  </section>
);

const SideCard = ({ card }: { card: ComparisonSideCard }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
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
      <CodePreviewPanel code={card.code} language={card.id === 'jsx' ? 'JSX' : 'JS'} />
      <p className={cn('text-xsm leading-relaxed break-keep', t.text)}>{card.body}</p>
    </article>
  );
};

const FlowArrow = () => (
  <div className="flex items-center justify-center text-[var(--term-accent)]" aria-hidden="true">
    <span className="hidden lg:inline-flex text-xl">↔</span>
    <span className="inline-flex lg:hidden text-xl">↕</span>
  </div>
);
