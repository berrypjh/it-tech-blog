import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { WorkLoopHeroDiagram } from '../components/WorkLoopHeroDiagram';
import type { WorkLoopContent } from '../content';

type Props = { content: WorkLoopContent['hero'] };

export const WorkLoopHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/work-loop.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// sync vs concurrent'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-work-loop" className="min-w-0">
      <WorkLoopHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
