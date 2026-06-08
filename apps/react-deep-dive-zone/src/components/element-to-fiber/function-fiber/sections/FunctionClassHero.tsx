import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { FunctionClassHeroDiagram } from '../components/FunctionClassHeroDiagram';
import type { FunctionClassComponentFiberContent } from '../content';

type Props = { content: FunctionClassComponentFiberContent['hero'] };

export const FunctionClassHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react-reconciler/src/ReactFiber.js"
    promptSuffix={<span className="text-[var(--term-muted)]"> # shouldConstruct</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">
          <code className="font-mono text-[var(--term-accent)]">type</code>이 함수라고 해서
        </span>
        <span className="block">
          항상 <code className="font-mono text-[var(--term-accent)]">Function Component</code>는
          아닙니다.
        </span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <ul className="grid grid-cols-2 gap-2 pt-1">
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            아니오 → function
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Work Tag 0</code>
        </li>
        <li
          className={cn(
            'flex flex-col gap-0.5 rounded-lg border px-sm py-2 text-center',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
          )}
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
            예 → class
          </span>
          <code className="text-xsm font-mono font-bold text-[var(--term-fg)]">Work Tag 1</code>
        </li>
      </ul>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-function-class">
      <FunctionClassHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
