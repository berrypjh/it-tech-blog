import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { axisCardBorder, axisIconBox, axisTextStrong } from '../../_shared/axisAccent';
import type { ContextAccent, RequestUpdateLaneContent } from '../content';
import { ArrowDownIcon, ClockIcon, MousePointerClickIcon, RefreshIcon, ZapIcon } from '../icons';

type Props = { content: RequestUpdateLaneContent['hero'] };

const cardIcon: Record<ContextAccent, typeof ZapIcon> = {
  blue: MousePointerClickIcon,
  teal: ClockIcon,
  violet: RefreshIcon,
};

const connectorBorder: Record<ContextAccent, string> = {
  blue: 'border-blue-400 dark:border-blue-500',
  teal: 'border-teal-400 dark:border-teal-500',
  violet: 'border-violet-400 dark:border-violet-500',
};

export const RequestUpdateLaneHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/request-update-lane.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // setState -> context -> lane'}</span>
    }
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription>{content.subtitle}</HeroDescription>

      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
        <span>click / startTransition / render &rarr; lane</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn>
      {/* diagram */}
      <div className="@container flex flex-col gap-md">
        {/* code pill */}
        <div className="flex justify-center">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-4 py-2',
              'bg-slate-950 text-white font-mono text-xsm sm:text-sm',
              'shadow-[0_2px_0_var(--term-border)] border border-slate-800',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <code className="text-amber-200">setTab</code>
            <span className="text-slate-300">(</span>
            <code className="text-emerald-300">{`'detail'`}</code>
            <span className="text-slate-300">)</span>
          </span>
        </div>

        {/* dotted connector bridge */}
        <div
          aria-hidden="true"
          className="hidden @xl:flex items-center justify-center text-[var(--term-muted)]"
        >
          <span className="inline-block h-3 w-px border-l-2 border-dashed border-[var(--term-border)]" />
        </div>

        {/* 3 context cards */}
        <ol className="grid grid-cols-1 @xl:grid-cols-3 gap-3 sm:gap-4">
          {content.contextCards.map((c) => {
            const Icon = cardIcon[c.accent];
            return (
              <li
                key={c.key}
                className={cn(
                  'relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-colors',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  axisCardBorder[c.accent],
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                      axisIconBox[c.accent],
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      axisTextStrong[c.accent],
                    )}
                  >
                    context
                  </span>
                </header>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                    {c.label}
                  </h3>
                  <p className="text-[10px] font-mono text-[var(--term-muted)]">{c.subtitle}</p>
                </div>
                <ul className="mt-1 flex flex-col gap-0.5">
                  {c.descriptionLines.map((line, i) => (
                    <li
                      key={line}
                      className={cn(
                        'text-[11px] sm:text-xsm leading-snug break-keep',
                        i === c.descriptionLines.length - 1
                          ? axisTextStrong[c.accent] + ' font-bold'
                          : 'text-[var(--term-muted)]',
                      )}
                    >
                      {line}
                    </li>
                  ))}
                </ul>

                {/* connector up (from card top to pill) */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'hidden @xl:block absolute left-1/2 -translate-x-1/2 -top-3 h-3 w-px border-l-2 border-dashed',
                    connectorBorder[c.accent],
                  )}
                />
              </li>
            );
          })}
        </ol>

        <div
          aria-hidden="true"
          className="@xl:hidden flex items-center justify-center text-[var(--term-muted)]"
        >
          <ArrowDownIcon className="h-4 w-4" />
        </div>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
