import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RefAsPropHeroDiagram } from '../components/RefAsPropHeroDiagram';
import type { RefAsPropElementShapeContent } from '../content';

type Props = { content: RefAsPropElementShapeContent['hero'] };

export const RefAsPropHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/ref-as-prop-element-shape.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // forwardRef wrapper → props.ref direct'}</span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-ref-as-prop" className="w-full">
      <RefAsPropHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
