import { cx } from '@berrypjh/react-ui';
import { ArrowDownToLine, ArrowUpToLine, Lightbulb, Split } from 'lucide-react';

import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AccumulateListenersContent, PhasePanel } from '../content';

type Props = { content: AccumulateListenersContent['phases'] };

export const CaptureVsBubble = ({ content }: Props) => (
  <section id="phases" aria-labelledby="heading-phases" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="phases"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <ContrastCard
      left={
        <Panel
          panel={content.capture}
          tone={toneTokens.violet.text}
          icon={<ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />}
        />
      }
      right={
        <Panel
          panel={content.bubble}
          tone={toneTokens.teal.text}
          icon={<ArrowUpToLine className="h-3.5 w-3.5" aria-hidden="true" />}
        />
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const Panel = ({
  panel,
  tone,
  icon,
}: {
  panel: PhasePanel;
  tone: string;
  icon: React.ReactNode;
}) => (
  <article className="flex flex-col gap-sm p-md sm:p-lg">
    <StatusPill icon={icon} tone={tone}>
      {panel.label}
    </StatusPill>

    <code className="w-fit rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm text-[var(--term-fg)]">
      {panel.propName}
    </code>

    <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{panel.caption}</p>

    <ol className="flex flex-col gap-1.5">
      {panel.order.map((label, i) => (
        <li
          key={label}
          className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2"
        >
          <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className={cx('text-[11px] font-bold break-keep', tone)}>{label}</span>
        </li>
      ))}
    </ol>
  </article>
);
