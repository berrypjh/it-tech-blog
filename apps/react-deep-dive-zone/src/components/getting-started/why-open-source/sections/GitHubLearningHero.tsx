import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { GitHubConnectedDiagram } from '../components/GitHubConnectedDiagram';
import type { WhyOpenSourceContent } from '../content';

type Props = { content: WhyOpenSourceContent['hero'] };

export const GitHubLearningHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="gh repo view" promptPath="facebook/react" align="center">
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn>
        <GitHubConnectedDiagram diagram={content.diagram} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
