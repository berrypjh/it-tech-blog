import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { RecoveryModelOverviewContent } from '../content';
import {
  CompassIcon,
  HourglassIcon,
  PauseCircleIcon,
  ServerCrashIcon,
  ServerIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
} from '../icons';
import type { Domain } from '../tone';
import { domainAccent } from '../tone';

type Props = { content: RecoveryModelOverviewContent['hero'] };

const inputIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  rejected: TriangleAlertIcon,
  error: ServerCrashIcon,
  hydration: ServerIcon,
  server: ServerIcon,
  boundary: ShieldCheckIcon,
  recovery: ShieldCheckIcon,
  navy: PauseCircleIcon,
  completion: ShieldCheckIcon,
};

const outputIcon: Record<Domain, React.ComponentType<{ className?: string }>> = {
  pending: PauseCircleIcon,
  boundary: ShieldAlertIcon,
  hydration: ShieldCheckIcon,
  recovery: ShieldCheckIcon,
  rejected: TriangleAlertIcon,
  error: ShieldAlertIcon,
  server: ServerIcon,
  navy: ServerIcon,
  completion: ShieldCheckIcon,
};

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="suspense-error-hydration/recap.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // 5 inputs → Recovery Model → 4 outputs'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
      {/* LEFT title */}
      <div className="flex flex-col gap-md">
        <ul className="flex flex-wrap items-center gap-2">
          {content.badges.map((badge) => (
            <li
              key={badge.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                badge.tone === 'solid'
                  ? 'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500'
                  : 'border border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/50 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-1.5 w-1.5 rounded-full',
                  badge.tone === 'solid' ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                )}
              />
              {badge.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.16] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[42ch]">
          {content.description}
        </p>
      </div>

      {/* RIGHT diagram */}
      <div className="flex flex-col gap-3">
        {/* inputs */}
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {content.inputs.map((card) => {
            const accent = domainAccent[card.domain];
            const Icon = inputIcon[card.domain];
            return (
              <li key={card.title}>
                <article
                  className={cn(
                    'flex flex-col gap-1 h-full rounded-xl border-2 p-2.5',
                    accent.border,
                    accent.bg,
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                      accent.iconChip,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className={cn('text-[11px] font-mono font-bold break-keep', accent.text)}>
                    {card.title}
                  </span>
                  <span className="text-[10px] text-[var(--term-muted)] break-keep">
                    {card.caption}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>

        {/* connector down */}
        <div aria-hidden="true" className="grid grid-cols-5 px-md">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center">
              <span className="block h-4 w-px border-l border-dashed border-blue-400/60 dark:border-blue-500/60" />
            </div>
          ))}
        </div>

        {/* central recovery model */}
        <article
          className={cn(
            'flex flex-col items-center gap-2 rounded-2xl border-2 p-md sm:p-lg text-center',
            'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950',
            'text-white shadow-[0_4px_0_rgba(15,23,42,0.25)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/40 bg-white/10 text-blue-100"
          >
            <CompassIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold">{content.central.title}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full">
            {content.central.lines.map((line) => (
              <li
                key={line}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-mono font-bold text-blue-100 break-keep"
              >
                {line}
              </li>
            ))}
          </ul>
        </article>

        {/* connector down */}
        <div aria-hidden="true" className="grid grid-cols-4 px-md">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex justify-center">
              <span className="block h-4 w-px border-l border-dashed border-blue-400/60 dark:border-blue-500/60" />
            </div>
          ))}
        </div>

        {/* outputs */}
        <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {content.outputs.map((card) => {
            const accent = domainAccent[card.domain];
            const Icon = outputIcon[card.domain];
            return (
              <li key={card.title}>
                <article
                  className={cn(
                    'flex flex-col items-center gap-1 h-full rounded-xl border-2 p-2.5 text-center',
                    accent.border,
                    accent.bg,
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                      accent.iconChip,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className={cn('text-xsm font-bold break-keep', accent.text)}>
                    {card.title}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);
