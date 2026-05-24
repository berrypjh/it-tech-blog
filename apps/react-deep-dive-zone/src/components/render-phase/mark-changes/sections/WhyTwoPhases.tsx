import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { MarkChangesContent, ReasonCard } from '../content';
import { ClockIcon, GaugeIcon, ShieldIcon, SparklesIcon, TargetIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: MarkChangesContent['whyTwoPhases'] };

const reasonIconMap = {
  shield: ShieldIcon,
  target: TargetIcon,
  clock: ClockIcon,
  gauge: GaugeIcon,
} as const;

export const WhyTwoPhases = ({ content }: Props) => (
  <section
    id="why-two-phases"
    aria-labelledby="heading-why-two-phases"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="why-two-phases"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {content.reasons.map((reason, idx) => (
        <li key={reason.title} className="flex h-full">
          <Card reason={reason} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ reason, index }: { reason: ReasonCard; index: number }) => {
  const palette = tonePalette[reason.tone];
  const Icon = reasonIconMap[reason.iconName];
  return (
    <article
      className={cn(
        'flex h-full w-full flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
        palette.border,
        palette.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            palette.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md border-2 px-2 text-xsm font-mono font-bold tabular-nums',
            palette.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', palette.text)}>
        {reason.title}
      </h3>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {reason.description}
      </p>
    </article>
  );
};
