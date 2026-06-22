import {
  HeroDescription,
  HeroSection,
  HeroTextColumn,
  HeroTitle,
  HeroVisualColumn,
} from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { EventMappingHeroDiagram } from '../components/EventMappingHeroDiagram';
import type { OnClickClickContent } from '../content';

type Props = { content: OnClickClickContent['hero'] };

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
  if (tok === 'SaveButton' || tok === 'handleClick' || tok === 'console')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'log')
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'button')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const EventMappingHero = ({ content }: Props) => {
  const lines = content.codeCard.code.split('\n');

  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-dom/events/onclick-to-click.md"
      promptSuffix={
        <span className="text-[var(--term-dim)]">
          {' // click → onClick · focusin → onFocus · dblclick → onDoubleClick'}
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

        <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

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

      <HeroVisualColumn id="hero-onclick-to-click">
        <EventMappingHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
