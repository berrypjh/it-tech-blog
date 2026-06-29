import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { CompleteWorkHeroDiagram } from '../components/CompleteWorkHeroDiagram';
import type { CompleteWorkContent } from '../content';

type Props = { content: CompleteWorkContent['hero'] };

export const CompleteWorkHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/complete-work.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// descend & ascend'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-complete-work" className="min-w-0">
      <CompleteWorkHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
