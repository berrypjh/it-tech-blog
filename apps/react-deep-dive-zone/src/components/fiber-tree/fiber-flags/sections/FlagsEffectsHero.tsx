import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FlagsEffectsHeroDiagram } from '../components/FlagsEffectsHeroDiagram';
import type { FiberFlagsContent } from '../content';

type Props = { content: FiberFlagsContent['hero'] };

export const FlagsEffectsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberFlags.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block">
          {content.title.line3.split(content.emphasis).map((part, i, arr) => (
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

    <HeroVisualColumn id="hero-fiber-flags">
      <FlagsEffectsHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
