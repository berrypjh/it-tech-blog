import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { RenderWithHooksHeroDiagram } from '../components/RenderWithHooksHeroDiagram';
import type { RenderWithHooksContent } from '../content';

type Props = { content: RenderWithHooksContent['hero'] };

export const RenderWithHooksHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/render-with-hooks.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// hook execution stage'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.86fr)_minmax(0,_1.14fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLine1}</span>
        <span className="block break-all text-[var(--term-accent)]">{content.titleAccent}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-render-with-hooks">
      <RenderWithHooksHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
