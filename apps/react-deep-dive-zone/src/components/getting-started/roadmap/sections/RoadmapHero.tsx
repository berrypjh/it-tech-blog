import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ExplorationMapVisual } from '../components/ExplorationMapVisual';
import type { RoadmapContent } from '../content';

type Props = { content: RoadmapContent['hero'] };

export const RoadmapHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="ready" promptPath="--launch">
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
