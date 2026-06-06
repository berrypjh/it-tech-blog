import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HeroRepoVisual } from '../components/HeroRepoVisual';
import type { RepoOverviewContent } from '../content';
import { GithubIcon } from '../icons';

type Props = { content: RepoOverviewContent['hero'] };

export const RepoOverviewHero = ({ content }: Props) => {
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
