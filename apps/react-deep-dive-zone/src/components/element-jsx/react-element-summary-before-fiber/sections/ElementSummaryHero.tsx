import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ElementSummaryHeroDiagram } from '../components/ElementSummaryHeroDiagram';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { StarIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['hero'] };

export const ElementSummaryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/CHAPTER_WRAPUP.md"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" showDot={false} className="w-fit">
        <StarIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-fg)]">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-element-summary">
      <ElementSummaryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
