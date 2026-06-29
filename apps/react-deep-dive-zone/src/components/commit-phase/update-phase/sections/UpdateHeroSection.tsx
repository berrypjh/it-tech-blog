import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { UpdateHeroDiagram } from '../components/UpdateHeroDiagram';
import type { UpdatePhaseContent } from '../content';

type Props = { content: UpdatePhaseContent['hero'] };

export const UpdateHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/update.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// update flag → props/text'}</span>}
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
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-update-phase" className="min-w-0">
      <UpdateHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
