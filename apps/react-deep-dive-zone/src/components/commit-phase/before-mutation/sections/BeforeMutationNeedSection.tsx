import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitToneKey } from '../../_shared/tones';
import type { BeforeMutationContent, MiniTimelineStep, WhyCard, WhyCardIcon } from '../content';
import { ArrowRightIcon, HelpCircleIcon, MapPinIcon, SaveIcon, TargetIcon } from '../icons';

type Props = { content: BeforeMutationContent['why'] };

const iconMap: Record<WhyCardIcon, typeof MapPinIcon> = {
  mapPin: MapPinIcon,
  save: SaveIcon,
  target: TargetIcon,
};

/** orange는 전역 토큰 밖이라 amber로 보정. 나머지는 전역 toneTokens. */
const toneOf = (tone: CommitToneKey) => toneTokens[tone === 'orange' ? 'amber' : (tone as ToneKey)];

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
  const t = toneOf(card.tone);
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)] motion-reduce:transform-none',
      )}
    >
      <div className="flex items-start justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xxsm font-bold tabular-nums text-[var(--term-muted)]">
          {String(index).padStart(2, '0')}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
        <span
          className={cn(
            'inline-flex items-center self-start gap-1 rounded-full border px-2 py-0.5',
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
  <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md">
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
  const t = toneOf(step.tone);
  return (
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-block h-2 w-2 rounded-full shrink-0',
          step.active ? cn(t.dot, 'ring-2 ring-[var(--term-border)]') : 'bg-[var(--term-dim)]',
        )}
      />
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-xsm font-bold leading-tight break-keep',
            step.active ? t.text : 'text-[var(--term-fg)]',
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
