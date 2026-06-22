import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { BenefitCard, RnContent } from '../content';
import { CheckCircleIcon, rnIcon, StarIcon } from '../icons';
import { ToneIconBox, toneText } from '../localTone';

type Props = { content: RnContent['benefit']; sectionId: string };

export const BenefitSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-benefit" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="benefit"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        {/* 좌측 인용 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            className="text-4xl font-bold text-sky-600 dark:text-sky-300 leading-none"
            aria-hidden="true"
          >
            “
          </span>
          <blockquote className="text-md sm:text-lg font-bold leading-snug break-keep">
            {content.quote}
          </blockquote>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.quoteBody}
          </p>
        </article>

        {/* 우측 다이어그램 + 3 카드 */}
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

          {/* center top */}
          <div className="relative flex justify-center">
            <article
              className={cn(
                'inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md min-w-[14rem]',
                'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
                'shadow-[0_3px_0_var(--term-border)]',
              )}
            >
              <CubeIcon className="h-6 w-6 text-[var(--term-accent)]" />
              <span className="text-md font-bold font-mono tracking-tight text-[var(--term-accent)]">
                {content.centerLabel}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.centerSubtitle}
              </span>
            </article>
          </div>

          {/* branch arrows */}
          <span aria-hidden="true" className="relative hidden @lg:block">
            <BranchSvg />
          </span>

          {/* 3 cards */}
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
  const Icon = rnIcon[card.iconName];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-sm rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] hover:border-[var(--term-accent)]',
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
            toneText(card.tone),
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
            <span aria-hidden="true" className={cn('shrink-0 mt-0.5', toneText(card.tone))}>
              <CheckCircleIcon className="h-3.5 w-3.5" />
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

const CubeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
