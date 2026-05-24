import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../getting-started/_shared/HeroDescription';
import { HeroSection } from '../../../getting-started/_shared/HeroSection';
import { HeroTextColumn } from '../../../getting-started/_shared/HeroTextColumn';
import { HeroTitle } from '../../../getting-started/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../getting-started/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../getting-started/_shared/TerminalBadge';
import { GithubIcon } from '../../repo-overview/icons';
import { ReconcilerHeroDiagram } from '../components/ReconcilerHeroDiagram';
import type { ReconcilerEntryContent } from '../content';
import { ExternalLinkIcon, MapIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['hero'] };

export const ReconcilerHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-reconciler"
      gridColumns="lg:grid-cols-[minmax(0,_0.44fr)_minmax(0,_0.56fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
          <span className="block">{content.title.line4}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={content.primaryHref}
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

      <HeroVisualColumn id="hero-reconciler">
        <ReconcilerHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
