import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FailableRenderHeroDiagram } from '../components/FailableRenderHeroDiagram';
import type { WhyFailableRenderContent } from '../content';

type Props = { content: WhyFailableRenderContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-reconciler/why-failable-render.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // suspend → throw → recover → retry'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]"
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

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-why-failable-render">
      <FailableRenderHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
