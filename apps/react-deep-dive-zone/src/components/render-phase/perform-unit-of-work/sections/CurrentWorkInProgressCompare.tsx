import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CompareCard, PerformUnitContent } from '../content';
import { DatabaseIcon, GitBranchIcon, MonitorIcon } from '../icons';

type Props = { content: PerformUnitContent['compare'] };

export const CurrentWorkInProgressCompare = ({ content }: Props) => (
  <section id="current-wip" aria-labelledby="heading-current-wip" className="space-y-md">
    <SectionHeader
      id="current-wip"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
      <Card card={content.cards.left} />
      <Card card={content.cards.right} />

      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute z-10 hidden md:inline-flex items-center justify-center gap-1.5',
          'rounded-full border border-dashed bg-[var(--term-bg)] px-3 py-1',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
        )}
      >
        <GitBranchIcon aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-muted)]" />
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.relationLabel}
        </span>
      </span>
    </div>
  </section>
);

const Card = ({ card }: { card: CompareCard }) => {
  const isCurrent = card.kind === 'current';
  const tone: ToneKey = isCurrent ? 'teal' : 'violet';
  const t = toneTokens[tone];
  const Icon = isCurrent ? DatabaseIcon : MonitorIcon;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={tone} size="md">
          <Icon className="h-5 w-5" />
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {isCurrent ? 'previous' : 'in progress'}
        </span>
      </header>

      <div className="flex flex-col gap-1">
        <code
          className={cn(
            'self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-sm font-bold',
            t.text,
          )}
        >
          {card.title}
        </code>
        <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
          {card.subtitle}
        </span>
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <ul className="flex flex-col gap-1.5 flex-1">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full', t.dot)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};
