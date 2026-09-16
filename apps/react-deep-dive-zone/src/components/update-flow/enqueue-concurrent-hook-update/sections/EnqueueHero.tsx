import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { EnqueueHeroDiagram } from '../components/EnqueueHeroDiagram';
import type { EnqueueConcurrentHookUpdateContent } from '../content';

type Props = { content: EnqueueConcurrentHookUpdateContent['hero'] };

export const EnqueueHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberConcurrentUpdates.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-enqueue-concurrent-hook-update">
      <EnqueueHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
