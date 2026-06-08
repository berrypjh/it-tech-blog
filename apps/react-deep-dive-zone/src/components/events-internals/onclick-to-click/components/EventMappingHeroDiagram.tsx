import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { MappingPair, OnClickClickContent } from '../content';
import { BracesIcon, GlobeIcon, LinkIcon } from '../icons';

type Props = { content: OnClickClickContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * 브라우저 native event 이름 → React prop(handler) 이름으로 이어지는 내부 매핑을
 * native → ↓ → prop stepper로 보여주는 컴팩트 다이어그램.
 */
export const EventMappingHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.title}: ${diagram.rows
    .map((r) => `${r.native} → ${r.prop}`)
    .join(', ')}. ${diagram.helper.title} — ${diagram.helper.body}`;

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
            <BracesIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {diagram.title}
          </span>
        </header>

        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
            {diagram.columnLabels.native}
          </span>
          <span aria-hidden="true" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            {diagram.columnLabels.prop}
          </span>
        </div>

        <ol className="flex flex-col gap-sm">
          {diagram.rows.map((row) => (
            <li key={`${row.native}-${row.prop}`}>
              <MappingRow row={row} />
            </li>
          ))}
        </ol>

        <DownArrow />

        <HelperNote title={diagram.helper.title} body={diagram.helper.body} />
      </div>
    </div>
  );
};

const MappingRow = ({ row }: { row: MappingPair }) => (
  <article
    className={cn(
      'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      'transition-all hover:-translate-y-0.5',
      toneTokens.sky.borderHover,
    )}
  >
    <span className="flex min-w-0 items-center gap-2">
      <ToneIconBox tone="sky" size="sm">
        <GlobeIcon className="h-4 w-4" />
      </ToneIconBox>
      <code className={cn('min-w-0 truncate font-mono text-sm font-bold', toneTokens.sky.text)}>
        {row.native}
      </code>
    </span>
    <span className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none">
      →
    </span>
    <code className={cn('min-w-0 truncate font-mono text-sm font-bold', toneTokens.teal.text)}>
      {row.prop}
    </code>
  </article>
);

const HelperNote = ({ title, body }: { title: string; body: string }) => (
  <div
    className={cn(
      'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-md',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ToneIconBox tone="violet" size="sm">
      <LinkIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <div className="flex min-w-0 flex-col gap-1">
      <h3 className={cn('text-xsm font-bold tracking-tight', toneTokens.violet.text)}>{title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </div>
  </div>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
