import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ActivityHeroDiagram } from '../components/ActivityHeroDiagram';
import type { ActivityHiddenUiContent } from '../content';

type Props = { content: ActivityHiddenUiContent['hero'] };

export const ActivityHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/activity-hidden-ui.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // Activity: hide UI, keep state, lower priority'}
      </span>
    }
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

      <HeroDescription maxWidth="max-w-[60ch]">{content.subtitleLines.join(' ')}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-activity">
      <ActivityHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
