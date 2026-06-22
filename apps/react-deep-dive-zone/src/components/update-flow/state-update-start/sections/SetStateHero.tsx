import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { SetStateHeroDiagram } from '../components/SetStateHeroDiagram';
import type { StateUpdateStartContent } from '../content';

type Props = { content: StateUpdateStartContent['hero'] };

export const SetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberHooks.js"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// dispatchSetState'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-state-update-start" className="min-w-0">
      <SetStateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
