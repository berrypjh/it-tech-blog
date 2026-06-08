import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { PropsComparisonHeroDiagram } from '../components/PropsComparisonHeroDiagram';
import type { FiberPropsContent } from '../content';

type Props = { content: FiberPropsContent['hero'] };

export const PropsComparisonHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
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

    <HeroVisualColumn id="hero-fiber-props">
      <PropsComparisonHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
