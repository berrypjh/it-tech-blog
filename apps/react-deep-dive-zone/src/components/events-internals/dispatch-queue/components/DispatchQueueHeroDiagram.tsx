import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CollectedListener, DispatchQueueOrderContent, TimelineEntry } from '../content';
import { DatabaseIcon, HourglassIcon, ListOrderedIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['hero']; className?: string };

/** content의 tone(rose 포함)을 공유 ToneKey로 매핑한다. rose는 가장 가까운 amber로 둔다. */
const toToneKey = (tone: 'violet' | 'teal' | 'rose'): ToneKey => (tone === 'rose' ? 'amber' : tone);

/**
 * Hero 핵심 비주얼.
 * 수집된 listener를 담은 dispatchQueue → phase 규칙이 적용된 실행 타임라인으로
 * 바뀌는 과정을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const DispatchQueueHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.queueTitle}(${diagram.eventLabel}) → ${diagram.timelineTitle} — ${diagram.timeline
    .map((t) => `${t.step} ${t.label}`)
    .join(', ')}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="teal" size="sm">
            <HourglassIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <h2 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </h2>
        </header>

        <QueueCard
          title={diagram.queueTitle}
          eventLabel={diagram.eventLabel}
          listenersLabel={diagram.listenersLabel}
          listeners={diagram.listeners}
        />

        <DownArrow />

        <TimelineCard title={diagram.timelineTitle} timeline={diagram.timeline} />
      </div>
    </div>
  );
};

const QueueCard = ({
  title,
  eventLabel,
  listenersLabel,
  listeners,
}: {
  title: string;
  eventLabel: string;
  listenersLabel: string;
  listeners: CollectedListener[];
}) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5',
      toneTokens.violet.borderHover,
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="violet" size="sm">
        <DatabaseIcon className="h-4 w-4" />
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight', toneTokens.violet.text)}>
        {title}
      </span>
    </header>
    <code className="block rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-[11px] text-[var(--term-muted)] break-all">
      {eventLabel}
    </code>
    <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
      {listenersLabel}
    </span>
    <ul className="flex flex-col gap-1">
      {listeners.map((entry) => (
        <ListenerChip key={entry.label} entry={entry} />
      ))}
    </ul>
  </article>
);

const ListenerChip = ({ entry }: { entry: CollectedListener }) => {
  const t = toneTokens[toToneKey(entry.tone)];
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-2 py-1',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <span className={cn('shrink-0 font-mono text-[10px] font-bold', t.text)}>#{entry.step}</span>
      <code className={cn('flex-1 break-all font-mono text-[11px] font-bold', t.text)}>
        {entry.label}
      </code>
      <code className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
        {entry.phase}
      </code>
    </li>
  );
};

const TimelineCard = ({ title, timeline }: { title: string; timeline: TimelineEntry[] }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5',
      toneTokens.teal.borderHover,
    )}
  >
    <header className="flex items-center gap-sm">
      <ToneIconBox tone="teal" size="sm">
        <ListOrderedIcon className="h-4 w-4" />
      </ToneIconBox>
      <span className="text-xsm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {title}
      </span>
    </header>
    <ol className="flex flex-col gap-1.5">
      {timeline.map((entry) => (
        <TimelineRow key={entry.label} entry={entry} />
      ))}
    </ol>
  </article>
);

const TimelineRow = ({ entry }: { entry: TimelineEntry }) => {
  const t = toneTokens[toToneKey(entry.tone)];
  return (
    <li
      className={cn(
        'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-2.5 py-1.5',
        'border-[var(--term-border)]',
        t.borderHover,
      )}
    >
      <span
        className={cn(
          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] font-bold',
          t.chip,
        )}
      >
        {entry.step}
      </span>
      <code className={cn('flex-1 break-all font-mono text-[11px] font-bold', t.text)}>
        {entry.label}
      </code>
      {entry.phase && (
        <code className="font-mono text-[9px] uppercase tracking-wider text-[var(--term-muted)]">
          {entry.phase}
        </code>
      )}
    </li>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
