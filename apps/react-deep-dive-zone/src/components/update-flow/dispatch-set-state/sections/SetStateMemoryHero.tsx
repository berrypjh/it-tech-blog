import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { DispatchSetStateContent } from '../content';
import {
  ArrowDownIcon,
  ArrowLeftRightIcon,
  CuboidIcon,
  FunctionSquareIcon,
  LayersIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: DispatchSetStateContent['hero'] };

export const SetStateMemoryHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="packages/react-reconciler/src/ReactFiberHooks.js"
      suffix={<span className="text-[var(--term-dim)]"> {'// mountState'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.title.line2}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
          <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
            Fiber
          </span>
          <span className="text-[var(--term-dim)]">+</span>
          <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
            Hook Queue
          </span>
          <span className="text-[var(--term-dim)]">→</span>
          <span className="rounded-md border border-sky-300/70 bg-sky-50/70 px-2 py-0.5 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200">
            setCount
          </span>
        </div>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram content={content} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ content }: { content: DispatchSetStateContent['hero'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/40',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-violet-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* Three-card row */}
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.2fr)_auto_minmax(0,_1fr)] gap-2 sm:gap-2 items-stretch">
      <SideCard
        tone="emerald"
        title={content.leftCard.title}
        subtitle={content.leftCard.subtitle}
        fields={content.leftCard.fields}
        icon={<CuboidIcon className="h-4 w-4" />}
      />

      {/* Left connector */}
      <Connector label={content.arrowLeftLabel} direction="right" />

      {/* Center card */}
      <CenterCard content={content.centerCard} />

      {/* Right connector */}
      <Connector label={content.arrowRightLabel} direction="left" />

      <SideCard
        tone="violet"
        title={content.rightCard.title}
        subtitle={content.rightCard.subtitle}
        fields={content.rightCard.fields}
        icon={<LayersIcon className="h-4 w-4" />}
      />
    </div>

    {/* Down arrow */}
    <div aria-hidden="true" className="my-3 flex justify-center text-[var(--term-dim)]">
      <span className="flex flex-col items-center gap-0.5">
        <span className="block h-3 w-px bg-[var(--term-border)]" />
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
    </div>

    {/* Bottom callout */}
    <div
      className={cn(
        'rounded-2xl border-2 border-dashed px-md py-3 text-center',
        'border-sky-300/70 bg-white/70',
        'dark:border-sky-800/70 dark:bg-slate-950/40',
      )}
    >
      <span className="inline-flex items-center gap-2 text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
        <SparklesIcon
          aria-hidden="true"
          className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300"
        />
        {content.bottomCallout}
      </span>
    </div>
  </div>
);

type SideCardProps = {
  tone: 'emerald' | 'violet';
  title: string;
  subtitle: string;
  fields: string[];
  icon: React.ReactNode;
};

const SideCard = ({ tone, title, subtitle, fields, icon }: SideCardProps) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
            t.chip,
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col min-w-0">
          <span className={cn('text-xsm font-bold leading-tight', t.text)}>{title}</span>
          <span className="text-[10px] text-[var(--term-muted)] leading-snug">{subtitle}</span>
        </div>
      </header>

      <ul
        className={cn(
          'rounded-lg border px-2.5 py-2 font-mono text-[10.5px] leading-[1.7] text-[var(--term-fg)]',
          'border-[var(--term-border)] bg-slate-50/60 dark:bg-slate-900/40',
        )}
      >
        {fields.map((f) => (
          <li key={f} className="truncate">
            <span className="text-[var(--term-dim)]">·</span>{' '}
            <span className={f === '…' || f === '...' ? 'text-[var(--term-dim)]' : ''}>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const CenterCard = ({ content }: { content: DispatchSetStateContent['hero']['centerCard'] }) => (
  <article
    className={cn(
      'relative flex flex-col gap-2 rounded-3xl border-2 p-sm sm:p-md',
      'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-slate-100',
      'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.65)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-200"
      >
        <FunctionSquareIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-bold leading-tight text-white font-mono">
          {content.title}
        </span>
        <span className="text-[10px] text-sky-200/80 leading-snug">{content.subtitle}</span>
      </div>
    </header>

    <span className="block h-px w-full bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

    <span className="text-[10px] uppercase tracking-wider text-sky-200/80 font-mono">
      {content.bodyTitle}
    </span>

    <ul className="flex flex-col gap-1.5">
      {content.items.map((item) => (
        <li
          key={item.marker}
          className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5"
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-300/20 text-amber-200 text-[11px] font-bold font-mono"
          >
            {item.marker}
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-xsm font-bold text-white leading-tight font-mono">
              {item.label}
            </span>
            <span className="text-[10px] text-sky-200/70 leading-snug">{item.sub}</span>
          </div>
        </li>
      ))}
    </ul>
  </article>
);

const Connector = ({ label, direction }: { label: string; direction: 'left' | 'right' }) => (
  <div
    aria-hidden="true"
    className="hidden sm:flex flex-col items-center justify-center gap-1 px-1"
  >
    {/* horizontal dashed line */}
    <span className="block h-px w-full bg-[length:6px_1px] bg-repeat-x [background-image:linear-gradient(to_right,var(--term-border)_50%,transparent_50%)]" />
    {/* arrow + label */}
    <div className="flex flex-col items-center gap-0.5">
      <span
        className={cn(
          'inline-flex h-6 w-6 items-center justify-center rounded-full border',
          'border-sky-200/80 bg-sky-50 text-sky-700',
          'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
        )}
      >
        <ArrowLeftRightIcon className={cn('h-3.5 w-3.5', direction === 'left' && 'rotate-180')} />
      </span>
      <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {label}
      </span>
    </div>
  </div>
);
