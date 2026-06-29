import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { MarkChangesHeroDiagram } from '../components/MarkChangesHeroDiagram';
import type { MarkChangesContent } from '../content';

type Props = { content: MarkChangesContent['hero'] };

export const MarkChangesHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/mark-changes.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// flags only'}</span>}
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-mark-changes" className="min-w-0">
      <MarkChangesHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
