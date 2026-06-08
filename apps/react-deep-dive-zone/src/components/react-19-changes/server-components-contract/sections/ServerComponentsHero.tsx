import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ServerComponentsHeroDiagram } from '../components/ServerComponentsHeroDiagram';
import type { ServerComponentsContractContent } from '../content';

type Props = { content: ServerComponentsContractContent['hero'] };

export const ServerComponentsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/server-components-contract.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {" // Server Component · Client Component · Server Function — 'use client' / 'use server'"}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_8fr)_minmax(0,_12fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[48ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-server-components" className="w-full">
      <ServerComponentsHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
