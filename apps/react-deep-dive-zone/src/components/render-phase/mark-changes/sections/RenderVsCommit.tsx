import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MarkChangesContent, RenderCommitCard } from '../content';
import { ArrowRightIcon, CheckCircleIcon, ChevronDownIcon, WorkflowIcon } from '../icons';

type Props = { content: MarkChangesContent['renderCommit'] };

export const RenderVsCommit = ({ content }: Props) => (
  <section id="render-vs-commit" aria-labelledby="heading-render-vs-commit" className="space-y-md">
    <SectionHeader
      id="render-vs-commit"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-md">
      <Card card={content.render} tone="teal" />
      <span aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
          <ArrowRightIcon className="hidden lg:block h-5 w-5" />
          <ChevronDownIcon className="lg:hidden h-5 w-5" />
        </span>
      </span>
      <Card card={content.commit} tone="violet" />
    </div>
  </section>
);

const Card = ({ card, tone }: { card: RenderCommitCard; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <article
      aria-labelledby={`heading-${card.kind}-card`}
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex flex-col gap-0.5">
        <h3
          id={`heading-${card.kind}-card`}
          className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}
        >
          {card.title}
        </h3>
        <span className={cn('text-xsm leading-snug break-keep', t.text)}>{card.subtitle}</span>
      </header>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item, idx) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep',
              card.kind === 'render' && idx === card.items.length - 1 && 'font-bold',
            )}
          >
            <CheckCircleIcon aria-hidden="true" className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-auto inline-flex w-full items-center justify-center rounded-lg border px-md py-2.5 text-xsm sm:text-sm font-bold tracking-tight break-keep',
          t.fill.bg,
          t.fill.border,
          t.fill.text,
        )}
      >
        {card.bottomLabel}
      </div>
    </article>
  );
};
