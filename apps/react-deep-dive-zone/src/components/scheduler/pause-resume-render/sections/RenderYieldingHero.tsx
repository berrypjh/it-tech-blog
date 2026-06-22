import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RenderYieldingHeroDiagram } from '../components/RenderYieldingHeroDiagram';
import type { RenderYieldingContent } from '../content';

type Props = { content: RenderYieldingContent['hero'] };

export const RenderYieldingHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="scheduler/yielding-continuation.md"
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // workLoop -> yield -> continuation'}</span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
      </HeroTitle>

      <HeroDescription>{content.subtitle}</HeroDescription>

      <ol className="hidden lg:flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
        {content.mainFlow.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            <span>{step}</span>
            {i < content.mainFlow.length - 1 && <span aria-hidden="true">&rarr;</span>}
          </li>
        ))}
      </ol>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-pause-resume-render">
      <RenderYieldingHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
