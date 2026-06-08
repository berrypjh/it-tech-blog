import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { StartWithQuestionHeroDiagram } from '../components/StartWithQuestionHeroDiagram';
import type { StartWithQuestionContent } from '../content';

type Props = { content: StartWithQuestionContent['hero'] };

export const HeroSection = ({ content }: Props) => (
  <HeroShell
    promptCommand="cat"
    promptPath="source-reading-checklist/start-with-question.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">{' // reframe file-first → question-first'}</span>
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
        <span className="block">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[52ch]">
        {content.supporting}
      </p>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-start-with-question">
      <StartWithQuestionHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroShell>
);
