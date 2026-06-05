import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { PluginEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxesIcon,
  LayersIcon,
  MousePointerClickIcon,
  PuzzleIcon,
} from '../icons';
import { toneCard, toneIconBox, toneNumber } from '../styles';

type Props = { content: PluginEventSystemContent['hero'] };

const stepIcons = [MousePointerClickIcon, PuzzleIcon, LayersIcon, BoxesIcon];

export const PluginSystemHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/plugin-event-system.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // native event → plugin extraction → SyntheticEvent → dispatchQueue'}
      </span>
    }
    gridColumns="lg:grid-cols-1"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>
      <HeroTitle>{content.title}</HeroTitle>
      <HeroDescription maxWidth="max-w-[80ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      <article
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* 4-step flow */}
        <ol
          className={cn(
            'grid items-stretch gap-2 sm:gap-3',
            'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {content.steps.map((step, i) => {
            const isLast = i === content.steps.length - 1;
            const Icon = stepIcons[i] ?? MousePointerClickIcon;
            return (
              <li
                key={step.title}
                className={cn(
                  'group relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-all',
                  'hover:-translate-y-0.5 motion-reduce:transform-none',
                  'shadow-[0_1px_0_var(--term-border)]',
                  toneCard[step.tone],
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                      'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_var(--term-border)]',
                      'transition-transform group-hover:scale-110 motion-reduce:transform-none',
                      toneNumber[step.tone],
                    )}
                  >
                    {i + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                      toneIconBox[step.tone],
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </div>

                <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep font-mono">
                  {step.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>

                {step.example && (
                  <code className="mt-auto inline-flex w-fit items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]/60 px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)] break-all">
                    {step.example}
                  </code>
                )}

                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden lg:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                    >
                      <ArrowDownIcon className="h-4 w-4" />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>

        <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);
