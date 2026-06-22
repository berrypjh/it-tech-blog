import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { PackageHubDiagram } from '../components/PackageHubDiagram';
import type { PackagesDirectoryContent } from '../content';

type Props = { content: PackagesDirectoryContent['hero'] };

export const PackagesHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="ls"
      promptPath="facebook/react/packages"
      gridColumns="lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)]"
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

      <HeroVisualColumn id="hero-hub">
        <PackageHubDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
