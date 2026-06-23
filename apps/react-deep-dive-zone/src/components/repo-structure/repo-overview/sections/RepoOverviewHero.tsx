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
      </HeroTextColumn>

      <HeroVisualColumn id="hero-visual">
        <HeroRepoVisual content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
