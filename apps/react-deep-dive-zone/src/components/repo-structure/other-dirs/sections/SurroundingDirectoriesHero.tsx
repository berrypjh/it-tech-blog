import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RepoBranchDiagram } from '../components/RepoBranchDiagram';
import type { SurroundingContent } from '../content';

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
      </HeroTextColumn>

      <HeroVisualColumn id="hero-branches">
        <RepoBranchDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
