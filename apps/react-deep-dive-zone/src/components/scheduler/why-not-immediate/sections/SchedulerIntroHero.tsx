import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SchedulerIntroHeroDiagram } from '../components/SchedulerIntroHeroDiagram';
import type { WhyNotImmediateContent } from '../content';

type Props = { content: WhyNotImmediateContent['hero'] };

const KEYWORDS = new Set(['function', 'const', 'return']);
const STRINGS = /^['"`].*['"`]$/;

const renderHeroToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'useState')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'SearchBox' || tok === 'setQuery' || tok === 'onChange')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'query' || tok === 'nextQuery')
    return (
      <span key={i} className="text-cyan-200">
        {tok}
      </span>
    );
  if (tok === 'target' || tok === 'value' || tok === 'e')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-slate-500 italic">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const SchedulerIntroHero = ({ content }: Props) => {
  const lines = content.codeCard.code.split('\n');

  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-reconciler/why-not-immediate.md"
      promptSuffix={
        <span className="text-[var(--term-dim)]">{' // update → lane → schedule → render'}</span>
      }
      gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
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

        <HeroDescription>{content.subtitle}</HeroDescription>

        {/* dark code card */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                {content.codeCard.fileLabel}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              jsx
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderHeroToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn id="hero-why-not-immediate">
        <SchedulerIntroHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
