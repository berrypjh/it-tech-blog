import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { SetStateMemoryHeroDiagram } from '../components/SetStateMemoryHeroDiagram';
import type { DispatchSetStateContent } from '../content';

type Props = { content: DispatchSetStateContent['hero'] };

export const SetStateMemoryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberHooks.js"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// mountState'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-dispatch-set-state" className="min-w-0">
      <SetStateMemoryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
