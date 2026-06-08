import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { UseEffectEventHeroDiagram } from '../components/UseEffectEventHeroDiagram';
import type { UseEffectEventContent } from '../content';

type Props = { content: UseEffectEventContent['hero'] };

export const UseEffectEventHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/use-effect-event-design.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // separate event-like logic from the Effect body'}
      </span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-use-effect-event">
      <UseEffectEventHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
