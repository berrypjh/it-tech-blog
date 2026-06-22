import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { RecoveryModelHeroDiagram } from '../components/RecoveryModelHeroDiagram';
import type { RecoveryModelOverviewContent } from '../content';

type Props = { content: RecoveryModelOverviewContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="suspense-error-hydration/recap.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // 5 inputs → Recovery Model → 4 outputs'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
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

      <HeroDescription maxWidth="max-w-[42ch]">{content.description}</HeroDescription>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-recovery-model">
      <RecoveryModelHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
