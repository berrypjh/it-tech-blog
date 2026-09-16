import { cx } from '@berrypjh/react-ui';
import { ArrowRight, CheckCircle2, ChevronDown, Workflow } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { MarkChangesContent, RenderCommitCard } from '../content';

type Props = { content: MarkChangesContent['renderCommit'] };

export const RenderVsCommit = ({ content }: Props) => (
  <section
    id="render-vs-commit"
    aria-labelledby="heading-render-vs-commit"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-vs-commit"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-md">
      <Card card={content.render} tone="teal" />
      <span aria-hidden="true" className="flex items-center justify-center py-2 lg:py-0">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
          <ArrowRight className="hidden lg:block h-5 w-5" aria-hidden="true" />
          <ChevronDown className="lg:hidden h-5 w-5" aria-hidden="true" />
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
      className={cx(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex flex-col gap-0.5">
        <h3
          id={`heading-${card.kind}-card`}
          className={cx('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}
        >
          {card.title}
        </h3>
        <span className={cx('text-xsm leading-snug break-keep', t.text)}>{card.subtitle}</span>
      </header>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item, idx) => (
          <li
            key={item}
            className={cx(
              'flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep',
              card.kind === 'render' && idx === card.items.length - 1 && 'font-bold',
            )}
          >
            <CheckCircle2 aria-hidden="true" className={cx('mt-0.5 h-4 w-4 shrink-0', t.text)} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div
        className={cx(
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
