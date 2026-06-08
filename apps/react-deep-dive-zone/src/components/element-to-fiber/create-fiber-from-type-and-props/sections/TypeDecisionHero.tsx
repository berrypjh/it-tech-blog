import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TypeDecisionHeroDiagram } from '../components/TypeDecisionHeroDiagram';
import type { CreateFiberFromTypeAndPropsContent } from '../content';

type Props = { content: CreateFiberFromTypeAndPropsContent['hero'] };

export const TypeDecisionHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # createFiberFromTypeAndProps</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-accent)]">{content.title.line1}</span>
        <span className="block">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <ul className="grid grid-cols-3 gap-2 pt-1">
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            string
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Host</code>
        </li>
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            function
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Fn / Class</code>
        </li>
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            symbol
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">
            Fragment / Mode
          </code>
        </li>
      </ul>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-type-decision">
      <TypeDecisionHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
