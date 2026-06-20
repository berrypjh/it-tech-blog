import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { AlternateHeroDiagram } from '../components/AlternateHeroDiagram';
import type { AlternateFiberContent } from '../content';

type Props = { content: AlternateFiberContent['hero'] };

export const AlternateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # createWorkInProgress</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">alternate</code>가 있을까?
        </span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-alternate-fiber">
      <AlternateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
