import { cn } from '@it-tech-blog/utils';

import {
  CheckCircle2,
  type LucideIcon,
  Monitor,
  Package,
  Smartphone,
  Star,
  Terminal,
} from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BenefitCard, RnContent } from '../content';

type Props = { content: RnContent['benefit'] };

const benefitIcon: Record<BenefitCard['id'], LucideIcon> = {
  web: Monitor,
  native: Smartphone,
  custom: Terminal,
};

export const BenefitSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-benefit" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="benefit"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Star className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center self-start w-9 h-9 rounded-md border',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]',
            )}
          >
            <Star className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="text-md sm:text-lg font-bold leading-snug break-keep text-[var(--term-fg)]">
            {content.quote}
          </p>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.quoteBody}
          </p>
        </article>

        <div
          className={cn(
            '@container relative flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg overflow-hidden',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(245,158,11,0.12),transparent_55%)]"
          />

          <div className="relative flex justify-center">
            <article
              className={cn(
                'inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md min-w-[14rem]',
                'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
                'shadow-[0_3px_0_var(--term-border)]',
              )}
            >
              <Package
                strokeWidth={1.6}
                aria-hidden="true"
                className="h-6 w-6 text-[var(--term-accent)]"
              />
              <span className="text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
                {content.centerLabel}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.centerSubtitle}
              </span>
            </article>
          </div>

          <span aria-hidden="true" className="relative hidden @lg:block">
            <BranchSvg />
          </span>

          <ul className="relative grid grid-cols-1 @lg:grid-cols-3 gap-lg">
            {content.cards.map((card) => (
              <li key={card.id} className="flex min-w-0">
                <BenefitCardView card={card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const BenefitCardView = ({ card }: { card: BenefitCard }) => {
  const Icon = benefitIcon[card.id];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={card.tone} size="md">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </ToneIconBox>
        <h3
          className={cn(
            'text-sm font-bold font-mono tracking-tight break-keep',
            toneTokens[card.tone].text,
          )}
        >
          {card.name}
        </h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {card.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
          >
            <span aria-hidden="true" className={cn('shrink-0 mt-0.5', toneTokens[card.tone].text)}>
              <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const BranchSvg = () => (
  <svg
    viewBox="0 0 600 32"
    className="w-full h-6 text-[var(--term-accent)]"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M 300 0 L 300 12 L 100 12 L 100 28"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M 300 0 L 300 12 L 300 28"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
    <path
      d="M 300 0 L 300 12 L 500 12 L 500 28"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="3 3"
      fill="none"
    />
  </svg>
);
