import { cn } from '@it-tech-blog/utils';

import type { ReconcilerEntryContent } from '../content';
import { CheckCircleIcon, CuboidIcon, FiberCubeIcon, iconByName } from '../icons';

type Props = { content: ReconcilerEntryContent['hero'] };

/**
 * Hero 우측 메인 비주얼.
 * React Element → react-reconciler → Renderer 흐름.
 */
export const ReconcilerHeroDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        '@container relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      {/* 옅은 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,var(--term-surface),transparent_60%)]"
      />

      {/* 메인 3카드 흐름 */}
      <div className="relative grid grid-cols-1 @xl:grid-cols-[minmax(0,_0.9fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_0.9fr)] gap-2 items-stretch">
        <ElementCard data={content.elementCard} />
        <FlowArrow />
        <ReconcilerCard data={content.reconcilerCard} />
        <FlowArrow />
        <RendererCard data={content.rendererCard} />
      </div>
    </div>
  );
};

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <span className="hidden @xl:inline-flex text-[var(--term-accent)] text-lg">→</span>
    <span className="inline-flex @xl:hidden text-[var(--term-accent)] text-lg">↓</span>
  </div>
);

type ElementCardProps = { data: ReconcilerEntryContent['hero']['elementCard'] };

const ElementCard = ({ data }: ElementCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border p-3',
        'shadow-[0_2px_0_var(--term-border)]',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
      )}
    >
      <h3 className="text-xsm font-bold font-mono tracking-tight text-sky-600 dark:text-sky-300">
        {data.title}
      </h3>
      <pre
        className={cn(
          'rounded-md border bg-[var(--term-bg)] p-2 text-[10px] leading-snug font-mono',
          'border-[var(--term-border)] text-[var(--term-fg)] overflow-x-auto',
        )}
      >
        {data.code}
      </pre>
    </article>
  );
};

type ReconcilerCardProps = { data: ReconcilerEntryContent['hero']['reconcilerCard'] };

const ReconcilerCard = ({ data }: ReconcilerCardProps) => {
  return (
    <article
      className={cn(
        'relative flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_4px_0_var(--term-border)]',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
        'ring-2 ring-[var(--term-accent)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-8 h-8 rounded-md border bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]"
        >
          <CuboidIcon className="h-4 w-4" />
        </span>
        <h3 className="text-sm font-bold font-mono tracking-tight text-[var(--term-accent)]">
          {data.title}
        </h3>
      </header>
      <ul className="flex flex-col gap-1.5">
        {data.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-1.5 text-[11px] leading-snug text-[var(--term-fg)] break-keep"
          >
            <CheckCircleIcon
              className="mt-0.5 h-3 w-3 shrink-0 text-[var(--term-accent)]"
              aria-hidden="true"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

type RendererCardProps = { data: ReconcilerEntryContent['hero']['rendererCard'] };

const RendererCard = ({ data }: RendererCardProps) => {
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border p-3',
        'shadow-[0_2px_0_var(--term-border)]',
        'bg-[var(--term-surface)] border-[var(--term-border)]',
      )}
    >
      <h3 className="text-xsm font-bold font-mono tracking-tight text-violet-600 dark:text-violet-300">
        {data.title}
      </h3>
      <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {data.description}
      </p>
      <div className="flex items-center gap-1.5 pt-1">
        {data.envIcons.map(({ label, icon }) => {
          const Icon =
            icon === 'monitor'
              ? iconByName.monitor
              : icon === 'cube'
                ? FiberCubeIcon
                : iconByName.package;
          return (
            <span
              key={label}
              aria-label={label}
              title={label}
              className="inline-flex items-center justify-center w-6 h-6 rounded border bg-[var(--term-surface)] border-[var(--term-border)] text-violet-600 dark:text-violet-300"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          );
        })}
      </div>
    </article>
  );
};
