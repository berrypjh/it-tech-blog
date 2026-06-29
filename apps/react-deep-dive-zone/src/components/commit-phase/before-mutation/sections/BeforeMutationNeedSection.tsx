import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, MiniTimelineStep, WhyCardIcon } from '../content';
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
    <SectionHeader
      id="why-before-mutation"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card, idx) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={card.subtitle}
          >
            <h3
              className={cn(
                'text-md font-bold tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>

    <MiniTimeline steps={content.miniTimeline} />
  </section>
);

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
  const t = toneTokens[step.tone];
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
