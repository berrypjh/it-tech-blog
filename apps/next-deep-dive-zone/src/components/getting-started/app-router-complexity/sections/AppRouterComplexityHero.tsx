import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RuntimeFlowDiagram } from '../components/RuntimeFlowDiagram';
import type { AppRouterComplexityContent } from '../content';
import { ArrowRightIcon } from '../icons';

type Props = { content: AppRouterComplexityContent['hero'] };

const ctaBase =
  'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md text-xsm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] w-full sm:w-auto';

export const AppRouterComplexityHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="next-internals/app-router.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.86fr)_minmax(0,_1.14fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.lead}</span>
          <span className="block text-[var(--term-accent)]">{content.title.accent}</span>
        </HeroTitle>

        <p className="rounded-md border-l-2 border-[var(--term-accent)] bg-[var(--term-surface)] px-md py-2 text-sm sm:text-md font-bold leading-snug text-cyan-700 dark:text-cyan-300 break-keep">
          {content.highlight.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <HeroDescription lines={content.description} />

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href="#section-factors"
            className={cn(
              ctaBase,
              'bg-[var(--term-accent)] text-[var(--term-bg)] hover:opacity-90',
            )}
          >
            {content.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
          <a
            href="#section-segment-tree"
            className={cn(
              ctaBase,
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
            )}
          >
            {content.secondaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-flow">
        <RuntimeFlowDiagram content={content.diagram} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
