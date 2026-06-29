import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { PassiveEffectsHeroDiagram } from '../components/PassiveEffectsHeroDiagram';
import type { PassiveEffectsContent } from '../content';

type Props = { content: PassiveEffectsContent['hero'] };

export const PassiveEffectsHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/passive-effects.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// after paint, async'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
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

    <HeroVisualColumn id="hero-passive-effects" className="min-w-0">
      <PassiveEffectsHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
