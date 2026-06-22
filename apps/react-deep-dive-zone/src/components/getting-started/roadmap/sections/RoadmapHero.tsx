import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ExplorationMapVisual } from '../components/ExplorationMapVisual';
import type { RoadmapContent } from '../content';

type Props = { content: RoadmapContent['hero'] };

export const RoadmapHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="ready" promptPath="--launch" align="center">
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

        <HeroDescription maxWidth="max-w-[58ch]" lines={content.description} />
      </HeroTextColumn>

      <HeroVisualColumn>
        <ExplorationMapVisual visual={content.visual} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
