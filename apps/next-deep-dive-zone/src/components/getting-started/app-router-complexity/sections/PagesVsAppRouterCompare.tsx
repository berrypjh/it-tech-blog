import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type {
  AppRouterComplexityContent,
  CompareCard as CompareCardType,
  ToneKey,
} from '../content';
import { CompareIcon } from '../icons';

type Props = { content: AppRouterComplexityContent['compare'] };

const Card = ({
  card,
  tone,
  variant,
}: {
  card: CompareCardType;
  tone: ToneKey;
  variant: 'pages' | 'app';
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
        variant === 'app'
          ? cn('border-cyan-300 dark:border-cyan-700/70', t.borderHover)
          : 'border-[var(--term-border)]',
      )}
    >
      <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', t.text)}>{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.summary}</p>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item) => (
          <li key={item}>
            <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2">
              <span
                aria-hidden="true"
                className={cn('inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
              />
              <span className="text-xsm font-medium text-[var(--term-fg)] break-keep">{item}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xsm font-bold',
            t.chip,
          )}
        >
          {card.pill}
        </span>
      </div>
    </article>
  );
};

export const PagesVsAppRouterCompare = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-lg">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CompareIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <Card card={content.pages} tone="indigo" variant="pages" />

        <div className="relative flex lg:flex-col items-center justify-center">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span className="relative inline-flex items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
            <ArrowGlyph />
          </span>
        </div>

        <Card card={content.app} tone="cyan" variant="app" />
      </div>

      {/* 전환 문구 */}
      <p className="text-center text-xsm text-[var(--term-muted)]">
        <code className="rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[11px] [overflow-wrap:anywhere]">
          {content.transition}
        </code>
      </p>
    </section>
  );
};

const ArrowGlyph = () => (
  <span aria-hidden="true" className="text-xsm font-bold leading-none">
    →
  </span>
);
