import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as SharedHeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { VerifyWithTestsHeroDiagram } from '../components/VerifyWithTestsHeroDiagram';
import type { TestAsDocContent } from '../content';

type Props = { content: TestAsDocContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <SharedHeroSection
    promptCommand="cat"
    promptPath="source-reading-checklist/verify-intent-with-tests.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // implementation → test → intent'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
        {content.supporting}
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-verify-intent-with-tests">
      <VerifyWithTestsHeroDiagram content={content} />
    </HeroVisualColumn>
  </SharedHeroSection>
);
