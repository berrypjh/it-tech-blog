import {
  HeroDescription,
  HeroSection as HeroShell,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { StripNoiseHeroDiagram } from '../components/StripNoiseHeroDiagram';
import type { StripFlagCommentNoiseContent } from '../content';

type Props = { content: StripFlagCommentNoiseContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="source-reading-checklist/strip-flag-comment-noise.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // label first → shrink the core runtime path'}
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)]"
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

      <HeroDescription>{content.description}</HeroDescription>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
        {content.supporting}
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-strip-flag-comment-noise">
      <StripNoiseHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
