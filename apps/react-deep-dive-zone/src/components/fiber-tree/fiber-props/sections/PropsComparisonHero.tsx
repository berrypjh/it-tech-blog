import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { accentPhrase } from '../../../shared/text';
import { PropsComparisonHeroDiagram } from '../components/PropsComparisonHeroDiagram';
import type { FiberPropsContent } from '../content';

type Props = { content: FiberPropsContent['hero'] };

export const PropsComparisonHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactInternalTypes.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{accentPhrase(content.title.line2, content.emphasis)}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[62ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-fiber-props">
      <PropsComparisonHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
