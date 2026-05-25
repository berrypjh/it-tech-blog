import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { React19ErrorReportingContent } from '../content';
import { RefreshCcwIcon, ShieldAlertIcon, ShieldCheckIcon } from '../icons';
import type { CallbackKind } from '../tone';
import { callbackAccent } from '../tone';

type Props = { content: React19ErrorReportingContent['hero'] };

const callbackIcon: Record<CallbackKind, React.ComponentType<{ className?: string }>> = {
  caught: ShieldCheckIcon,
  uncaught: ShieldAlertIcon,
  recoverable: RefreshCcwIcon,
};

export const HeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-dom/client/root-callbacks.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // onCaughtError · onUncaughtError · onRecoverableError'}
        </span>
      }
    />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
      {/* LEFT: title */}
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

      {/* RIGHT: 3 callback cards */}
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {content.callbacks.map((card) => {
          const accent = callbackAccent[card.kind];
          const Icon = callbackIcon[card.kind];
          return (
            <li key={card.kind}>
              <article
                className={cn(
                  'flex flex-col gap-2 h-full rounded-2xl border-2 p-md',
                  accent.border,
                  accent.bg,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-transform motion-safe:hover:-translate-y-0.5',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    accent.iconChip,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={cn('text-sm sm:text-md font-mono font-bold break-all', accent.text)}>
                  {card.name}
                </h3>
                <p className="text-xsm text-[var(--term-fg)] break-keep">{card.summary}</p>
                <span
                  className={cn(
                    'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
                    'text-[10px] font-mono font-bold uppercase tracking-wider',
                    accent.chip,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn('block h-1.5 w-1.5 rounded-full', accent.solidBg)}
                  />
                  {card.badge}
                </span>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
