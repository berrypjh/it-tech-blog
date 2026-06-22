import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
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
            'border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-1.5 text-[10px]',
            'text-[var(--term-muted)]',
            'hover:border-[var(--term-accent)] transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
          )}
        >
          <GithubIcon className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" />
          <span className="uppercase tracking-wider font-bold text-[var(--term-accent)]">
            {content.repoUrlLabel}
          </span>
          <span aria-hidden="true" className="text-[var(--term-dim)]">
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
