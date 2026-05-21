import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../start/_shared/HeroDescription';
import { HeroSection } from '../../../start/_shared/HeroSection';
import { HeroTextColumn } from '../../../start/_shared/HeroTextColumn';
import { HeroTitle } from '../../../start/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../start/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../start/_shared/TerminalBadge';
import { GithubIcon } from '../../repo-overview/icons';
import { HeroExplorationFlow } from '../components/HeroExplorationFlow';
import type { ExplorationContent } from '../content';
import { ExternalLinkIcon, MapIcon } from '../icons';

type Props = { content: ExplorationContent['hero'] };

export const ExplorationRoutineHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="repo-exploration-routine.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_0.58fr)]"
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

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-blue-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-blue-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-slate-950',
            )}
          >
            <MapIcon className="h-4 w-4" aria-hidden="true" />
            {content.primaryCta}
          </a>
          <a
            href={content.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
              'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <GithubIcon className="h-4 w-4" />
            {content.secondaryCta}
            <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-flow">
        <HeroExplorationFlow content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
