import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import { VerticalAlternateLink } from '../components/AlternateLink';
import type { AlternateFiberContent, FiberRole } from '../content';
import { HexagonIcon, LightbulbIcon, LinkIcon, MonitorIcon, WorkflowIcon } from '../icons';

type Props = { content: AlternateFiberContent['connection'] };

const roleTone: Record<FiberRole, ToneKey> = {
  current: 'emerald',
  workInProgress: 'violet',
};

export const AlternateConnectionDiagram = ({ content }: Props) => (
  <section id="connection" aria-labelledby="heading-connection" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="connection"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    {/* Central vertical diagram */}
    <article
      className={cn(
        'flex flex-col items-center justify-center gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <DiagramNode variant="current" label={content.currentLabel} />
      <VerticalAlternateLink label={content.centerLabel} />
      <DiagramNode variant="workInProgress" label={content.workLabel} />
    </article>

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
      <span className="font-bold">{content.infoTitle}</span> {content.infoDescription}
    </SectionNote>
  </section>
);

const DiagramNode = ({ variant, label }: { variant: FiberRole; label: string }) => {
  const tone = roleTone[variant];
  const t = toneTokens[tone];
  const isCurrent = variant === 'current';
  const Icon = isCurrent ? MonitorIcon : WorkflowIcon;
  return (
    <article
      className={cn(
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
        <span className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          {isCurrent ? 'current' : 'workInProgress'}
        </span>
        <code className={cn('font-mono text-sm sm:text-md font-extrabold tracking-tight', t.text)}>
          {label}
        </code>
      </div>
      <span
        aria-hidden="true"
        className={cn(
          'ml-auto inline-flex items-center justify-center w-9 h-9 rounded-full border',
          t.chip,
        )}
      >
        <HexagonIcon className="h-4 w-4" />
      </span>
    </article>
  );
};
