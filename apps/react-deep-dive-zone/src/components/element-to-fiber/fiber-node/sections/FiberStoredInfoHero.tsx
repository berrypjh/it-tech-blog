import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { FiberStoredInfoHeroDiagram } from '../components/FiberStoredInfoHeroDiagram';
import type { FiberStoredInformationContent } from '../content';

type Props = { content: FiberStoredInformationContent['hero'] };

export const FiberStoredInfoHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # FiberNode</span>}
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
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-fiber-stored-info">
      <FiberStoredInfoHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
