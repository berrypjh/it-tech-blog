import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { BeforeMutationHeroDiagram } from '../components/BeforeMutationHeroDiagram';
import type { BeforeMutationContent } from '../content';

type Props = { content: BeforeMutationContent['hero'] };

export const BeforeMutationHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/before-mutation.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// read before mutate'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-before-mutation" className="min-w-0">
      <BeforeMutationHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
