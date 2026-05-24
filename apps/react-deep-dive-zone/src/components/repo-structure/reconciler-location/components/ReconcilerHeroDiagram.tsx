import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import type { ReconcilerEntryContent } from '../content';
import { CheckCircleIcon, CuboidIcon, FiberCubeIcon, iconByName } from '../icons';

import { FiberNodeNetwork } from './FiberNodeNetwork';

type Props = { content: ReconcilerEntryContent['hero'] };

/**
 * Hero 우측 메인 비주얼.
 * React Element → react-reconciler → Renderer 흐름 + 하단 Fiber 노드 네트워크.
 */
export const ReconcilerHeroDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      {/* 옅은 글로우 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.16),transparent_60%)]"
      />

      <div className="relative flex flex-col gap-md">
        {/* 메인 3카드 흐름 */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_0.9fr)_auto_minmax(0,_1.1fr)_auto_minmax(0,_0.9fr)] gap-2 items-stretch">
          <ElementCard data={content.elementCard} />
          <FlowArrow />
          <ReconcilerCard data={content.reconcilerCard} />
          <FlowArrow />
          <RendererCard data={content.rendererCard} />
        </div>

        {/* Fiber 노드 네트워크 (중앙 아래) */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute left-1/2 -top-1 -translate-x-1/2 w-px h-3 border-l border-dashed border-violet-300 dark:border-violet-700"
          />
          <FiberNodeNetwork />
        </div>
      </div>
    </div>
  );
};

const FlowArrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center">
    <span className="hidden sm:inline-flex text-[var(--term-accent)] text-lg">→</span>
    <span className="inline-flex sm:hidden text-[var(--term-accent)] text-lg">↓</span>
  </div>
);

type ElementCardProps = { data: ReconcilerEntryContent['hero']['elementCard'] };

const ElementCard = ({ data }: ElementCardProps) => {
  const tone = toneTokens[data.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border p-3',
        'shadow-[0_2px_0_var(--term-border)]',
        'bg-blue-50/70 dark:bg-blue-950/30',
        tone.border,
      )}
    >
      <h3 className={cn('text-xsm font-bold font-mono tracking-tight', tone.text)}>{data.title}</h3>
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
  const tone = toneTokens[data.tone];
  return (
    <article
      className={cn(
        'relative flex flex-col gap-sm rounded-xl border p-md',
        'shadow-[0_4px_0_var(--term-border)]',
        'bg-violet-50/80 dark:bg-violet-950/40',
        tone.border,
        'ring-2 ring-violet-200/60 dark:ring-violet-800/50',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border',
            tone.chip,
          )}
        >
          <CuboidIcon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-sm font-bold font-mono tracking-tight', tone.text)}>
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
              className={cn('mt-0.5 h-3 w-3 shrink-0', tone.text)}
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
  const tone = toneTokens[data.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border p-3',
        'shadow-[0_2px_0_var(--term-border)]',
        'bg-emerald-50/70 dark:bg-emerald-950/30',
        tone.border,
      )}
    >
      <h3 className={cn('text-xsm font-bold font-mono tracking-tight', tone.text)}>{data.title}</h3>
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
              className={cn(
                'inline-flex items-center justify-center w-6 h-6 rounded border',
                tone.chip,
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          );
        })}
      </div>
    </article>
  );
};
