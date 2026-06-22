import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { UseEffectHeroDiagram } from '../components/UseEffectHeroDiagram';
import type { UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['hero'] };

const KEYWORDS = new Set(['return']);

const renderCodeLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];,.=>])/);
  return (
    <div key={key} className="whitespace-pre">
      {tokens.map((tok, i) => {
        if (!tok) return null;
        if (KEYWORDS.has(tok))
          return (
            <span key={i} className="text-sky-300">
              {tok}
            </span>
          );
        if (tok === 'useEffect')
          return (
            <span key={i} className="text-violet-300">
              {tok}
            </span>
          );
        if (tok === 'console' || tok === 'log')
          return (
            <span key={i} className="text-teal-300">
              {tok}
            </span>
          );
        if (tok === 'count')
          return (
            <span key={i} className="text-amber-200">
              {tok}
            </span>
          );
        if (/^['"`].*['"`]$/.test(tok))
          return (
            <span key={i} className="text-emerald-300">
              {tok}
            </span>
          );
        return (
          <span key={i} className="text-slate-200">
            {tok}
          </span>
        );
      })}
    </div>
  );
};

export const UseEffectHero = ({ content }: Props) => {
  const lines = content.leftCode.split('\n');
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react/hooks/use-effect-internal.md"
      promptSuffix={
        <span className="text-[var(--term-dim)]"> {'// render → register, commit → run'}</span>
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
            <span className="ml-2 text-[10px] font-mono text-slate-500">useEffect</span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
            <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
          </pre>
        </div>
      </HeroTextColumn>

      {/* Right: render → register → commit → run flow */}
      <HeroVisualColumn id="hero-use-effect">
        <UseEffectHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
