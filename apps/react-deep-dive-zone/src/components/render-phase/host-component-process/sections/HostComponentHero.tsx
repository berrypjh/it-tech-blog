import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { HostComponentHeroDiagram } from '../components/HostComponentHeroDiagram';
import type { HostComponentContent } from '../content';

type Props = { content: HostComponentContent['hero'] };

export const HostComponentHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/host-component-process.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// host component flow'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-host-component-process" className="min-w-0">
      <HostComponentHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
