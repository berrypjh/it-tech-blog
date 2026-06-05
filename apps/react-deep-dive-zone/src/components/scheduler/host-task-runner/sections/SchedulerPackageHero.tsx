import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { SchedulerPackageContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, CheckCircleIcon, CpuIcon, PackageIcon } from '../icons';
import { pkgCardBorder, pkgIconBox, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['hero'] };

export const SchedulerPackageHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="scheduler/package-role.md"
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Root Scheduler is not scheduler package'}
      </span>
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
    </HeroTextColumn>

    <HeroVisualColumn>
      {/* diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch relative">
        {/* Root Scheduler card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            pkgCardBorder.blue,
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                pkgIconBox.blue,
              )}
            >
              <CpuIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <h2 className={cn('text-md sm:text-lg font-bold break-keep', pkgTextStrong.blue)}>
                {content.leftCard.title}
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.leftCard.subtitle}
              </span>
            </div>
          </header>

          <ul className="flex flex-col gap-2">
            {content.leftCard.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', pkgTextStrong.blue)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* center bridge */}
        <div className="flex flex-col items-center justify-center gap-2 self-center">
          <div aria-hidden="true" className="hidden lg:flex items-center">
            <span className="h-px w-4 bg-blue-400 dark:bg-blue-500" />
            <ArrowRightIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-2xl px-3 py-2 max-w-full',
              'bg-slate-950 text-white font-mono text-[11px] sm:text-xsm',
              'shadow-[0_2px_0_var(--term-border)] border border-slate-800',
            )}
          >
            <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <code className="text-cyan-300 break-all whitespace-pre-wrap">{content.bridge}</code>
          </span>
          <div aria-hidden="true" className="hidden lg:flex items-center">
            <ArrowRightIcon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
            <span className="h-px w-4 bg-teal-400 dark:bg-teal-500" />
          </div>
          <div className="lg:hidden flex justify-center text-[var(--term-muted)]">
            <ArrowDownIcon className="h-4 w-4" />
          </div>
        </div>

        {/* Scheduler Package card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            pkgCardBorder.teal,
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                pkgIconBox.teal,
              )}
            >
              <PackageIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <h2 className={cn('text-md sm:text-lg font-bold break-keep', pkgTextStrong.teal)}>
                {content.rightCard.title}
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.rightCard.subtitle}
              </span>
            </div>
          </header>

          <ul className="flex flex-col gap-2">
            {content.rightCard.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', pkgTextStrong.teal)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </HeroVisualColumn>
  </HeroSection>
);
