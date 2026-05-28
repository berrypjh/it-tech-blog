import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { toneTokens } from '../../../shared/tones';
import type { FindPublicApiEntryContent, HeroLayer } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CableIcon,
  CpuIcon,
  DoorOpenIcon,
  FileCodeIcon,
  PlugIcon,
  SplitIcon,
} from '../icons';

type Props = { content: FindPublicApiEntryContent['hero'] };

const layerIcon = {
  user: DoorOpenIcon,
  public: PlugIcon,
  dispatcher: SplitIcon,
  internal: CpuIcon,
} as const;

export const HeroSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="source-reading-checklist/find-public-api-entry.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // public API → dispatcher → reconciler implementation'}
          </span>
        }
      />

      <div className="mt-md grid grid-cols-1 gap-lg lg:gap-xl lg:grid-cols-[minmax(0,_40fr)_minmax(0,_60fr)] items-stretch">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-md">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
              'border-blue-300 bg-blue-50 text-blue-700',
              'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              'text-[11px] font-mono font-bold uppercase tracking-wider',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-blue-500" />
            {content.badge}
          </span>

          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.5rem]',
              'font-bold leading-[1.16] tracking-tight text-[var(--term-fg)] break-keep',
            )}
          >
            <span className="block">{content.titleLines[0]}</span>
            <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
          </h1>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep max-w-[44ch]">
            {content.description}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
            {content.supporting}
          </p>

          <div className="mt-sm flex flex-col sm:flex-row gap-2">
            <a
              href="#section-use-state-entry"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'bg-blue-600 text-white hover:bg-blue-700',
                'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.primaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#section-resolve-dispatcher"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-3',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'hover:border-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300',
                'text-xsm font-bold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* RIGHT — 4-layer call graph */}
        <div
          className={cn(
            'relative rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
            'dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-lg',
                'border border-blue-300 bg-blue-100 text-blue-700',
                'dark:border-blue-700/70 dark:bg-blue-950/60 dark:text-blue-200',
              )}
            >
              <CableIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.visualTitle}
            </h3>
          </div>

          <ol className="flex flex-col gap-2">
            {content.layers.map((layer, i) => (
              <li key={layer.key}>
                <HeroLayerCard layer={layer} />
                {i < content.layers.length - 1 && <HeroConnector />}
              </li>
            ))}
          </ol>

          <p
            className={cn(
              'mt-md flex flex-wrap items-center gap-1.5 rounded-lg border px-3 py-2',
              'border-slate-200 bg-slate-50 text-slate-600',
              'dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300',
              'text-[10px] sm:text-[11px] font-mono',
            )}
          >
            <span aria-hidden="true" className="text-[var(--term-accent)] font-bold">
              flow
            </span>
            <span aria-hidden="true">·</span>
            <span>{content.flowSummary}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const HeroLayerCard = ({ layer }: { layer: HeroLayer }) => {
  const Icon = layerIcon[layer.key];
  const t = toneTokens[layer.tone];
  return (
    <article
      className={cn(
        'group flex flex-col gap-2 rounded-xl border-2 p-3 sm:p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
        'motion-safe:hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
              t.chip,
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className={cn('text-xsm font-bold break-keep tracking-tight', t.text)}>
            {layer.layerTitle}
          </span>
        </div>
        <span
          className={cn(
            'inline-flex shrink-0 items-center rounded-full border px-2 py-0.5',
            'bg-white dark:bg-[var(--term-bg)]',
            t.border,
            t.text,
            'text-[10px] font-mono font-bold uppercase tracking-wider',
          )}
        >
          {layer.label}
        </span>
      </div>

      {layer.file && (
        <code
          className={cn(
            'flex items-center gap-1.5 rounded-md border px-2 py-1 overflow-x-auto',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'font-mono text-[10.5px] text-[var(--term-fg)]',
          )}
        >
          <FileCodeIcon className={cn('h-3 w-3 shrink-0', t.text)} aria-hidden="true" />
          <span className="whitespace-nowrap">{layer.file}</span>
        </code>
      )}

      {layer.func && (
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-md border-2 px-2 py-1',
            t.border,
            t.chip,
            'font-mono text-[11px] font-bold',
          )}
        >
          {layer.func}
        </code>
      )}

      {layer.code && (
        <pre
          className={cn(
            'overflow-x-auto rounded-md border px-3 py-2',
            'border-slate-200 bg-slate-900 text-slate-100',
            'dark:border-slate-700',
            'font-mono text-[11px] leading-relaxed',
          )}
        >
          <code>{layer.code}</code>
        </pre>
      )}

      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {layer.caption}
      </p>
    </article>
  );
};

const HeroConnector = () => (
  <span aria-hidden="true" className="flex items-center justify-center py-1">
    <span
      className={cn(
        'inline-flex items-center justify-center h-5 w-5 rounded-full border',
        'border-cyan-300 bg-white text-cyan-600',
        'dark:border-cyan-700/70 dark:bg-[var(--term-bg)] dark:text-cyan-300',
      )}
    >
      <ArrowDownIcon className="h-3 w-3" />
    </span>
  </span>
);
