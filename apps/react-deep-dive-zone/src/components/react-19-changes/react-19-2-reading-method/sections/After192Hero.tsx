import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { After192HeroDiagram } from '../components/After192HeroDiagram';
import type { After192Content } from '../content';

type Props = { content: After192Content['hero'] };

export const After192Hero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/react-19-2-reading-method.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // operation-model expansion across 4 axes'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[50ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-react-19-2-reading-method" className="w-full">
      <After192HeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
