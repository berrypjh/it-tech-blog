import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RoleStepsCard } from '../components/RoleStepsCard';
import type { RvrContent } from '../content';

type Props = { content: RvrContent['hero'] };

export const RvrHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="packages/react-reconciler/src/ReactFiberHostConfig.ts"
      gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
      align="center"
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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,var(--term-accent-soft),transparent_55%)] opacity-50"
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
              tone="sky"
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
