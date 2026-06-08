import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { PluginSystemHeroDiagram } from '../components/PluginSystemHeroDiagram';
import type { PluginEventSystemContent } from '../content';

type Props = { content: PluginEventSystemContent['hero'] };

export const PluginSystemHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-dom/events/plugin-event-system.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // native event → plugin extraction → SyntheticEvent → dispatchQueue'}
      </span>
    }
    gridColumns="lg:grid-cols-1"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>
      <HeroTitle>{content.title}</HeroTitle>
      <HeroDescription maxWidth="max-w-[80ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-plugin-event-system">
      <PluginSystemHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
