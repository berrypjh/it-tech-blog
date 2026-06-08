import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ActionsHeroDiagram } from '../components/ActionsHeroDiagram';
import type { ActionsUpdateFlowContent } from '../content';

type Props = { content: ActionsUpdateFlowContent['hero'] };

export const ActionsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/actions-update-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // pending + error + form + optimistic → one declarative model'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)]"
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

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-actions" className="w-full">
      <ActionsHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
