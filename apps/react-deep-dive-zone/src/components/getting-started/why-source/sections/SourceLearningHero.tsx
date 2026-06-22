import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { FlowDiagram } from '../components/FlowDiagram';
import type { WhySourceContent } from '../content';

type Props = { content: WhySourceContent['hero'] };

export const SourceLearningHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-internals/why-read.md"
      gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.title.lead}</span>
          <span className="block text-[var(--term-accent)]">{content.title.accent}</span>
          <span className="block">{content.title.tail}</span>
        </HeroTitle>

        <HeroDescription>{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-flow">
        <FlowDiagram
          categories={content.flowCategories}
          stages={content.flowStages}
          loop={content.flowLoop}
        />
      </HeroVisualColumn>
    </HeroSection>
  );
};
