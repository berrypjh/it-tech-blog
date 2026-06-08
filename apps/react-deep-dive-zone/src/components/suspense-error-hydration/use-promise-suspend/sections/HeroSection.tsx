import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { UsePromiseHeroDiagram } from '../components/UsePromiseHeroDiagram';
import type { UsePromiseSuspendContent } from '../content';

type Props = { content: UsePromiseSuspendContent['hero'] };

export const HeroSection = ({ content }: Props) => {
  return (
    <HeroShell
      promptCommand="cat"
      promptPath="react-reconciler/ReactFiberThenable.js"
      promptSuffix={
        <span className="text-[var(--term-dim)]">
          {' // use(Promise) → pending|fulfilled|rejected'}
        </span>
      }
      gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
      align="center"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block text-[var(--term-accent)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[40ch]">{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-use-promise">
        <UsePromiseHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroShell>
  );
};
