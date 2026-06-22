import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { DispatchSetStateHeroDiagram } from '../components/DispatchSetStateHeroDiagram';
import type { DispatchSetStateEntryContent } from '../content';

type Props = { content: DispatchSetStateEntryContent['hero'] };

export const DispatchSetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="dispatchSetState"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberHooks.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
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

    <HeroVisualColumn id="hero-dispatch-set-state-entry" className="min-w-0">
      <DispatchSetStateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
