import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { BeforeMutationContent, MiniTimelineStep, WhyCard, WhyCardIcon } from '../content';
import { ArrowRightIcon, HelpCircleIcon, MapPinIcon, SaveIcon, TargetIcon } from '../icons';

type Props = { content: BeforeMutationContent['why'] };

const iconMap: Record<WhyCardIcon, typeof MapPinIcon> = {
  mapPin: MapPinIcon,
  save: SaveIcon,
  target: TargetIcon,
};

export const BeforeMutationNeedSection = ({ content }: Props) => (
  <section
    id="why-before-mutation"
    aria-labelledby="heading-why-before-mutation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="why-before-mutation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} />
        </li>
      ))}
    </ol>

    <MiniTimeline steps={content.miniTimeline} />
  </section>
);

const Card = ({ card, index }: { card: WhyCard; index: number }) => {
  const Icon = iconMap[card.iconName];
  const t = commitToneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums rounded-md border px-1.5 py-0.5',
            t.chipSolid,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <div className="flex flex-col gap-1">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
          {card.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-md border px-2 py-0.5',
            'text-[10px] font-mono lowercase tracking-wider',
            t.chip,
          )}
        >
          {card.subtitle}
        </span>
      </div>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const MiniTimeline = ({ steps }: { steps: MiniTimelineStep[] }) => (
  <article
    className={cn(
      'rounded-2xl border p-md',
      'border-[var(--term-border)] bg-slate-50/40 dark:bg-slate-900/30',
    )}
  >
    <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
      {steps.map((step, idx) => (
        <Fragment key={step.label}>
          <li className="flex-1 min-w-0">
            <MiniStep step={step} />
          </li>
          {idx < steps.length - 1 && (
            <li
              aria-hidden="true"
              className="flex md:items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-4 w-4 hidden md:inline-block" />
              <ArrowRightIcon className="h-4 w-4 rotate-90 md:hidden my-1" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  </article>
);

const MiniStep = ({ step }: { step: MiniTimelineStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-block h-2 w-2 rounded-full shrink-0',
          step.active
            ? cn(t.dot, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
            : 'bg-[var(--term-dim)]',
        )}
      />
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-xsm font-bold leading-tight break-keep',
            step.active ? t.textStrong : 'text-[var(--term-fg)]',
          )}
        >
          {step.label}
        </span>
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider leading-tight',
            step.active ? t.text : 'text-[var(--term-muted)]',
          )}
        >
          {step.description}
        </span>
      </div>
    </div>
  );
};
