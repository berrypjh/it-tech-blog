import { cx } from '@berrypjh/react-ui';
import { FunctionSquare, Hash, Lightbulb, Split } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { BatchRow, SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['batching'] };

export const ValueVsUpdaterAction = ({ content }: Props) => (
  <section id="batching" aria-labelledby="heading-batching" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="batching"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <ContrastCard
      left={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<Hash className="h-3.5 w-3.5" aria-hidden="true" />}
            tone={toneTokens.amber.text}
          >
            {content.value.label}
          </StatusPill>
          <CodePreviewPanel code={content.value.code} showWindowDots={false} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.value.caption}
          </p>
          <ActionRows rows={content.value.rows} tone={toneTokens.amber.text} />
        </article>
      }
      right={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<FunctionSquare className="h-3.5 w-3.5" aria-hidden="true" />}
            tone={toneTokens.emerald.text}
          >
            {content.updater.label}
          </StatusPill>
          <CodePreviewPanel code={content.updater.code} showWindowDots={false} />
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.updater.caption}
          </p>
          <ActionRows rows={content.updater.rows} tone={toneTokens.emerald.text} />
        </article>
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const ActionRows = ({ rows, tone }: { rows: BatchRow[]; tone: string }) => (
  <ol className="flex flex-col gap-1.5">
    {rows.map((row) => (
      <li
        key={row.call}
        className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2"
      >
        <span className="font-mono text-[10px] text-[var(--term-dim)]">{row.call}</span>
        <code className="font-mono text-[11px] text-[var(--term-fg)] break-all">{row.action}</code>
        <code className={cx('font-mono text-[11px] font-bold', tone)}>{row.result}</code>
      </li>
    ))}
  </ol>
);
