import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import type { AxisAccent, ThreePriorityAxesContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ClockIcon, LayersIcon, ZapIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['hero'] };

const axisIcon: Record<AxisAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: LayersIcon,
  violet: ClockIcon,
};

export const PriorityAxesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/priority-axes.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // event-priority → lane → scheduler-priority'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[40ch]">{content.subtitle}</HeroDescription>

      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
        <span>event &rarr; lane &rarr; scheduler</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn className="@container">
      {/* 3-card flow */}
      <ol className="grid grid-cols-1 @xl:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
        {content.axes.map((axis, i) => {
          const isLast = i === content.axes.length - 1;
          const Icon = axisIcon[axis.accent];
          return (
            <li
              key={axis.label}
              className={cn(
                'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                axisCardBorder[axis.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    axisIconBox[axis.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums',
                    axisNumberBadge[axis.accent],
                  )}
                >
                  {axis.number}
                </span>
              </header>

              <div className="flex flex-col gap-0.5">
                <p
                  className={cn(
                    'text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider',
                    axisTextStrong[axis.accent],
                  )}
                >
                  {axis.label}
                </p>
                <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {axis.title}
                </h3>
              </div>

              <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {axis.subtitle}
              </p>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden @xl:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="@xl:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </HeroVisualColumn>
  </HeroSection>
);
