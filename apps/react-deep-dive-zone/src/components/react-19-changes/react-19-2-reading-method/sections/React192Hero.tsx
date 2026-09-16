import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { React192HeroDiagram } from '../components/React192HeroDiagram';
import type { React192ReadingMethodContent } from '../content';

type Props = { content: React192ReadingMethodContent['hero'] };

export const React192Hero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="CHANGELOG.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-react-19-2-reading-method">
      <React192HeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
