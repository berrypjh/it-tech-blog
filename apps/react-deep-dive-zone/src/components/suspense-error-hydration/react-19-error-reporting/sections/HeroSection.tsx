import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ErrorReportingHeroDiagram } from '../components/ErrorReportingHeroDiagram';
import type { React19ErrorReportingContent } from '../content';

type Props = { content: React19ErrorReportingContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="react-dom/client/root-callbacks.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // onCaughtError · onUncaughtError · onRecoverableError'}
      </span>
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

    <HeroVisualColumn id="hero-error-reporting">
      <ErrorReportingHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
