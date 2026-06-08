import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { InternalStackVisual } from '../components/InternalStackVisual';
import type { UsageVsInternalsContent } from '../content';

type Props = { content: UsageVsInternalsContent['hero'] };

export const UsageVsInternalsHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="open"
      promptPath="usage-vs-internals/Counter.js"
      gridColumns="lg:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)]"
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

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn>
        <InternalStackVisual layers={content.stackLayers} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
