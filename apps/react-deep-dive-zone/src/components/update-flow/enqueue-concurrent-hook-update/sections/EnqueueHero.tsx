import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { EnqueueHeroDiagram } from '../components/EnqueueHeroDiagram';
import type { EnqueueConcurrentHookUpdateContent } from '../content';

type Props = { content: EnqueueConcurrentHookUpdateContent['hero'] };

export const EnqueueHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="enqueueConcurrentHookUpdate"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberConcurrentUpdates.js
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
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-enqueue-concurrent" className="min-w-0">
      <EnqueueHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
