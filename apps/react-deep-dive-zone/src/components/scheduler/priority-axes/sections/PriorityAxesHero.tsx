import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { PriorityAxesHeroDiagram } from '../components/PriorityAxesHeroDiagram';
import type { ThreePriorityAxesContent } from '../content';

type Props = { content: ThreePriorityAxesContent['hero'] };

export const PriorityAxesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-reconciler/priority-axes.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // event-priority → lane → scheduler-priority'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[40ch]">{content.subtitle}</HeroDescription>

      <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
        <span>event &rarr; lane &rarr; scheduler</span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-priority-axes">
      <PriorityAxesHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
