import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { HeroTopCard, SuspenseHydrationLinkContent } from '../content';
import { CloudIcon, DropletsIcon, PackageIcon, ShieldCheckIcon } from '../icons';

type Props = { content: SuspenseHydrationLinkContent['hero'] };

const cardStyle: Record<
  HeroTopCard['kind'],
  {
    border: string;
    iconChip: string;
    text: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  server: {
    border: 'border-blue-200/70 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    text: 'text-blue-700 dark:text-blue-200',
    Icon: CloudIcon,
  },
  hydration: {
    border: 'border-teal-200/70 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-200',
    Icon: DropletsIcon,
  },
  recovery: {
    border:
      'border-emerald-200/70 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    text: 'text-emerald-700 dark:text-emerald-200',
    Icon: ShieldCheckIcon,
  },
};

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/SuspenseHydration.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Server Render · Hydration · Client Recovery → Suspense Boundary'}
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
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      {/* diagram */}
      <div className="flex flex-col gap-3">
        {/* top 3 cards */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {content.topCards.map((card) => {
            const s = cardStyle[card.kind];
            const Icon = s.Icon;
            return (
              <li key={card.kind}>
                <article
                  className={cn(
                    'flex flex-col gap-2 h-full rounded-2xl border-2 p-md',
                    s.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      s.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className={cn('text-sm font-bold break-keep', s.text)}>{card.title}</h3>
                  <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                    {card.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>

        {/* connector */}
        <div aria-hidden="true" className="grid grid-cols-3 px-md">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex justify-center">
              <span className="block h-5 w-px border-l border-dashed border-violet-400/60 dark:border-violet-600/60" />
            </div>
          ))}
        </div>

        {/* Boundary card */}
        <article
          className={cn(
            'flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-md sm:p-lg text-center',
            'border-violet-400 bg-violet-50/40 dark:border-violet-500 dark:bg-violet-950/20',
            'shadow-[0_4px_0_rgba(139,92,246,0.18)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
          >
            <PackageIcon className="h-4 w-4" />
          </span>
          <code className="block rounded-lg bg-slate-950 px-3 py-2 text-xsm font-mono font-bold text-violet-200 break-all">
            {content.boundary.code}
          </code>
          <span className="text-[11px] font-bold text-violet-700 dark:text-violet-200 break-keep">
            {content.boundary.caption}
          </span>
        </article>
      </div>
    </HeroVisualColumn>
  </HeroShell>
);
