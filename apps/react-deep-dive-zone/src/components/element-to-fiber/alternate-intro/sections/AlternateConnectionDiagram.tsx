import { cx } from '@berrypjh/react-ui';
import { Hexagon, Lightbulb, Link, Monitor, Workflow } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import { VerticalAlternateLink } from '../components/AlternateLink';
import { roleTone } from '../components/FiberPairCard';
import type { AlternateFiberContent, FiberRole } from '../content';

type Props = { content: AlternateFiberContent['connection'] };

export const AlternateConnectionDiagram = ({ content }: Props) => (
  <section id="connection" aria-labelledby="heading-connection" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="connection"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Link className="h-5 w-5" aria-hidden="true" />}
    />

    {/* Central vertical diagram */}
    <article
      className={cx(
        'flex flex-col items-center justify-center gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <DiagramNode variant="current" label={content.currentLabel} />
      <VerticalAlternateLink label={content.centerLabel} />
      <DiagramNode variant="workInProgress" label={content.workLabel} />
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      <span className="font-bold">{content.infoTitle}</span> {content.infoDescription}
    </SectionNote>
  </section>
);

const DiagramNode = ({ variant, label }: { variant: FiberRole; label: string }) => {
  const tone = roleTone[variant];
  const t = toneTokens[tone];
  const isCurrent = variant === 'current';
  const Icon = isCurrent ? Monitor : Workflow;
  return (
    <article
      className={cx(
        'flex items-center gap-sm rounded-2xl border-2 p-md min-w-[240px]',
        'shadow-[0_2px_0_var(--term-border)]',
        t.fill.bg,
        t.fill.border,
      )}
    >
      <ToneIconBox tone={tone} size="md">
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <div className="flex flex-col">
        <span className={cx('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          {variant}
        </span>
        <code className={cx('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {label}
        </code>
      </div>
      <span
        aria-hidden="true"
        className={cx(
          'ml-auto inline-flex items-center justify-center w-9 h-9 rounded-full border',
          t.chip,
        )}
      >
        <Hexagon className="h-4 w-4" aria-hidden="true" />
      </span>
    </article>
  );
};
