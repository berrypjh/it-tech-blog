import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SetStateFlowHeroDiagram } from '../components/SetStateFlowHeroDiagram';
import type { SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['hero'] };

export const SetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/set-state-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// update → enqueue → schedule'}</span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
    align="center"
  >
    {/* Left: text + compact code */}
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.titleLine1}</span>
        <span className="block text-[var(--term-accent)]">{content.titleAccent}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

      {/* Compact code panel */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
        <div className="flex items-center gap-2 border-b border-slate-800 px-md py-1.5">
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono text-slate-500">setCount</span>
        </div>
        <pre className="overflow-x-auto px-md py-2.5 text-[12px] sm:text-xsm leading-[1.7] font-mono">
          <code>
            <span className="text-amber-200">setCount</span>
            <span className="text-slate-300">((</span>
            <span className="text-amber-200">c</span>
            <span className="text-slate-300">) =&gt; </span>
            <span className="text-amber-200">c</span>
            <span className="text-slate-300"> + </span>
            <span className="text-emerald-300">1</span>
            <span className="text-slate-300">);</span>
          </code>
        </pre>
      </div>
    </HeroTextColumn>

    {/* Right: setter flow stepper */}
    <HeroVisualColumn id="hero-set-state-flow">
      <SetStateFlowHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
