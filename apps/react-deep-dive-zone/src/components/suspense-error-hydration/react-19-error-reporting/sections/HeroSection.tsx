import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
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
  <HeroShell
    promptCommand="cat"
    promptPath="react-dom/client/root-callbacks.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // onCaughtError · onUncaughtError · onRecoverableError'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      {/* 3 callback cards */}
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
    </HeroVisualColumn>
  </HeroShell>
);
