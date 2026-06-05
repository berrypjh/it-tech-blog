import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { DualTreeDiagram } from '../components/DualTreeDiagram';
import type { CurrentWipAlternateContent } from '../content';

type Props = { content: CurrentWipAlternateContent['hero'] };

export const AlternateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">
          {content.title.line2.split(content.emphasis).map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && (
                <span className="text-[var(--term-accent)]">{content.emphasis}</span>
              )}
            </span>
          ))}
        </span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn>
      <DualTreeDiagram
        currentTitle={content.currentTitle}
        currentSubtitle={content.currentSubtitle}
        wipTitle={content.wipTitle}
        wipSubtitle={content.wipSubtitle}
        centerLabel={content.centerLabel}
        centerSubLabel={content.centerSubLabel}
        nodes={content.nodes}
      />
    </HeroVisualColumn>
  </HeroSection>
);
