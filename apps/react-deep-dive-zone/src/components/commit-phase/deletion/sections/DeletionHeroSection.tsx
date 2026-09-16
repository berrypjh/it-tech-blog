import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { DeletionHeroDiagram } from '../components/DeletionHeroDiagram';
import type { DeletionContent } from '../content';

type Props = { content: DeletionContent['hero'] };

export const DeletionHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiberCommitWork.js"
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

    <HeroVisualColumn id="hero-deletion">
      <DeletionHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
