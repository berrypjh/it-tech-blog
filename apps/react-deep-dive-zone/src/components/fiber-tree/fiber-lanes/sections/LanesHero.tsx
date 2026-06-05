import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { LanesDiagram } from '../components/LanesDiagram';
import type { FiberLanesContent } from '../content';

type Props = { content: FiberLanesContent['hero'] };

export const LanesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberLane.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          {content.title.line1.split(content.emphasis).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-[var(--term-accent)]">{content.emphasis}</span>
              )}
            </span>
          ))}
        </span>
        <span className="block">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      <LanesDiagram
        cardLabel={content.cardLabel}
        fields={content.fields}
        stackTitle={content.stackTitle}
        items={content.items}
      />
    </HeroVisualColumn>
  </HeroSection>
);
