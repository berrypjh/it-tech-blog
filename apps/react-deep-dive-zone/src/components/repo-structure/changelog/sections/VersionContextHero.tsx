import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { VersionDocsDiagram } from '../components/VersionDocsDiagram';
import type { ChangelogContent } from '../content';

type Props = { content: ChangelogContent['hero'] };

export const VersionContextHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="CHANGELOG.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.45fr)_minmax(0,_0.55fr)]"
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

      <HeroVisualColumn id="hero-version">
        <VersionDocsDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
