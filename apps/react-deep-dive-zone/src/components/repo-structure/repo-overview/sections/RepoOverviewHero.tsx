import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../start/_shared/HeroDescription';
import { HeroSection } from '../../../start/_shared/HeroSection';
import { HeroTextColumn } from '../../../start/_shared/HeroTextColumn';
import { HeroTitle } from '../../../start/_shared/HeroTitle';
import { HeroVisualColumn } from '../../../start/_shared/HeroVisualColumn';
import { TerminalBadge } from '../../../start/_shared/TerminalBadge';
import { HeroRepoVisual } from '../components/HeroRepoVisual';
import type { RepoOverviewContent } from '../content';
import { ExternalLinkIcon, GithubIcon, MapIcon } from '../icons';

type Props = { content: RepoOverviewContent['hero']; nextSectionId: string };

export const RepoOverviewHero = ({ content, nextSectionId }: Props) => {
  return (
    <HeroSection
      promptCommand="ls"
      promptPath="facebook/react"
      gridColumns="lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.lead}</span>
          <span className="block text-[var(--term-accent)]">{content.title.tail}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href={`#${nextSectionId}`}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
              'bg-sky-600 text-white text-xsm font-bold tracking-tight',
              'transition-colors hover:bg-sky-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
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

        <a
          href={content.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'mt-xs inline-flex w-fit max-w-full items-center gap-2 rounded-md',
            'border border-sky-200/80 bg-sky-50/80 px-3 py-1.5 text-[10px] text-sky-800',
            'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200',
            'hover:border-sky-400 transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          <GithubIcon className="h-3.5 w-3.5 shrink-0" />
          <span className="uppercase tracking-wider font-bold">{content.repoUrlLabel}</span>
          <span aria-hidden="true" className="text-sky-300 dark:text-sky-700">
            ·
          </span>
          <span className="truncate font-mono">{content.repoUrl}</span>
        </a>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-visual">
        <HeroRepoVisual content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
