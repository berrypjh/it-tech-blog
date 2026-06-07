import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RoleStepsCard } from '../components/RoleStepsCard';
import type { RvrContent } from '../content';
import { ArrowRightIcon, CodeIcon, MapIcon } from '../icons';

type Props = { content: RvrContent['hero'] };

export const RvrHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-reconciler/src/ReactFiberHostConfig.ts"
      gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
      align="start"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
          <span className="block">{content.title.line3}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-violet-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-violet-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-violet-500 dark:hover:bg-violet-400 dark:text-slate-950',
            )}
          >
            <MapIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href={content.secondaryCtaHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <CodeIcon className="h-4 w-4" aria-hidden="true" />
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-compute-apply">
        <div
          className={cn(
            '@container relative rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] overflow-hidden',
          )}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(45,212,191,0.14),transparent_55%),radial-gradient(circle_at_75%_75%,rgba(167,139,250,0.14),transparent_55%)]"
          />
          <p className="sr-only">{content.a11yFlow}</p>

          {/* flow label */}
          <div className="relative flex items-center gap-sm mb-md">
            <span
              aria-hidden="true"
              className="flex-1 border-t border-dashed border-[var(--term-border)]"
            />
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono px-2 py-1 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)]">
              compute → apply
            </span>
            <span
              aria-hidden="true"
              className="flex-1 border-t border-dashed border-[var(--term-border)]"
            />
          </div>

          <div className="relative grid grid-cols-1 @lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-md">
            <RoleStepsCard
              title={content.calculation.title}
              subtitle={content.calculation.subtitle}
              steps={content.calculation.steps}
              footerLabel={content.calculation.footerLabel}
              iconName="cube"
              tone="teal"
            />

            {/* 가운데 점선 화살표 (lg: 가로, mobile: 세로) */}
            <div
              className="flex items-center justify-center text-[var(--term-accent)]"
              aria-hidden="true"
            >
              <span className="hidden @lg:inline-flex">
                <DashedArrow direction="horizontal" />
              </span>
              <span className="inline-flex @lg:hidden">
                <DashedArrow direction="vertical" />
              </span>
            </div>

            <RoleStepsCard
              title={content.reflection.title}
              subtitle={content.reflection.subtitle}
              steps={content.reflection.steps}
              footerLabel={content.reflection.footerLabel}
              iconName="monitor"
              tone="violet"
            />
          </div>
        </div>
      </HeroVisualColumn>
    </HeroSection>
  );
};

const DashedArrow = ({ direction }: { direction: 'horizontal' | 'vertical' }) => (
  <svg
    viewBox={direction === 'horizontal' ? '0 0 64 16' : '0 0 16 64'}
    className={direction === 'horizontal' ? 'w-8 h-4' : 'w-4 h-8'}
    aria-hidden="true"
  >
    {direction === 'horizontal' ? (
      <>
        <line
          x1="0"
          y1="8"
          x2="56"
          y2="8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path d="M 56 4 L 64 8 L 56 12 Z" fill="currentColor" />
      </>
    ) : (
      <>
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <path d="M 4 56 L 8 64 L 12 56 Z" fill="currentColor" />
      </>
    )}
  </svg>
);
