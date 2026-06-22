import { cn } from '@it-tech-blog/utils';

import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RepoBranchDiagram } from '../components/RepoBranchDiagram';
import type { SurroundingContent } from '../content';
import { PinIcon } from '../icons';

type Props = { content: SurroundingContent['hero'] };

export const SurroundingDirectoriesHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="ls"
      promptPath="facebook/react/"
      promptSuffix={
        <span className="text-[var(--term-muted)]"> # fixtures · scripts · compiler</span>
      }
      gridColumns="lg:grid-cols-[minmax(0,_1.05fr)_minmax(0,_0.95fr)]"
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

        <span
          className={cn(
            'mt-xs inline-flex w-fit max-w-full items-center gap-2 rounded-md',
            'border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-1.5 text-[10px]',
            'text-[var(--term-accent)]',
          )}
        >
          <PinIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="font-mono">{content.locationPill}</span>
        </span>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-branches">
        <RepoBranchDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
