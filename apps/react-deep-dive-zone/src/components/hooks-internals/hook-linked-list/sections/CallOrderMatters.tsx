import { cx } from '@berrypjh/react-ui';
import { CheckCircle2, Lightbulb, ListOrdered, XCircle } from 'lucide-react';

import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { HookLinkedListContent, OrderRow } from '../content';

type Props = { content: HookLinkedListContent['order'] };

export const CallOrderMatters = ({ content }: Props) => (
  <section id="order" aria-labelledby="heading-order" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="order"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListOrdered className="h-5 w-5" aria-hidden="true" />}
    />

    <ContrastCard
      left={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
            tone={toneTokens.emerald.text}
          >
            {content.stable.label}
          </StatusPill>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.stable.caption}
          </p>
          <OrderRows rows={content.stable.rows} broken={false} />
        </article>
      }
      right={
        <article className="flex flex-col gap-sm p-md sm:p-lg">
          <StatusPill
            icon={<XCircle className="h-3.5 w-3.5" aria-hidden="true" />}
            tone="text-rose-600 dark:text-rose-300"
          >
            {content.broken.label}
          </StatusPill>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.broken.caption}
          </p>
          <OrderRows rows={content.broken.rows} broken />
        </article>
      }
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const OrderRows = ({ rows, broken }: { rows: OrderRow[]; broken: boolean }) => (
  <ol className="flex flex-col gap-1.5">
    {rows.map((row) => (
      <li
        key={row.order}
        className={cx(
          'grid grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)] items-center gap-sm rounded-md border px-sm py-2',
          broken
            ? 'border-rose-200/70 bg-rose-50/40 dark:border-rose-800/60 dark:bg-rose-950/20'
            : 'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span className="font-mono text-[10px] tabular-nums text-[var(--term-dim)]">
          #{row.order}
        </span>
        <code className="font-mono text-[11px] font-bold text-[var(--term-fg)] break-all">
          {row.hook}
        </code>
        <span className="text-[11px] text-[var(--term-muted)] break-keep">{row.slot}</span>
      </li>
    ))}
  </ol>
);
