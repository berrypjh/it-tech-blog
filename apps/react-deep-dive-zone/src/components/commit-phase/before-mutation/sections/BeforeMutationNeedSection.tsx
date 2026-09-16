import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, HelpCircle, type LucideIcon, MapPin, Save, Target } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BeforeMutationContent, MiniTimelineStep, WhyCardId } from '../content';

type Props = { content: BeforeMutationContent['why'] };

const iconMap: Record<WhyCardId, LucideIcon> = {
  mapPin: MapPin,
  save: Save,
  target: Target,
};

export const BeforeMutationNeedSection = ({ content }: Props) => (
  <section
    id="why-before-mutation"
    aria-labelledby="heading-why-before-mutation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="why-before-mutation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card, idx) => {
        const Icon = iconMap[card.id];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={idx + 1}
            badge={card.subtitle}
          >
            <h3
              className={cx(
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
              <ArrowRight className="h-4 w-4 hidden md:inline-block" aria-hidden="true" />
              <ArrowRight className="h-4 w-4 rotate-90 md:hidden my-1" aria-hidden="true" />
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
        className={cx(
          'inline-block h-2 w-2 rounded-full shrink-0',
          step.active ? cx(t.dot, 'ring-2 ring-[var(--term-border)]') : 'bg-[var(--term-dim)]',
        )}
      />
      <div className="flex flex-col min-w-0">
        <span
          className={cx(
            'text-xsm font-bold leading-tight break-keep',
            step.active ? t.text : 'text-[var(--term-fg)]',
          )}
        >
          {step.label}
        </span>
        <span
          className={cx(
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
