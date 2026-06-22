import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { VersionStackVisual } from '../components/VersionStackVisual';
import type { WhyReact19Content } from '../content';

type Props = { content: WhyReact19Content['hero'] };

export const React19Hero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-versions.history"
      gridColumns="lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription lines={content.description} />
      </HeroTextColumn>

      <HeroVisualColumn>
        <VersionStackVisual
          versions={content.visual.versions}
          axisTop={content.visual.axisTop}
          axisBottom={content.visual.axisBottom}
        />
      </HeroVisualColumn>
    </HeroSection>
  );
};
