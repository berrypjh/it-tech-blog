import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HooksEntryHeroDiagram } from '../components/HooksEntryHeroDiagram';
import type { HooksEntryFlowContent } from '../content';
import { CodeIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['hero'] };

const renderCounterCode = (code: string) => {
  const parts = code.match(
    /^(const)(\s+\[)([a-zA-Z]+)(,\s)([a-zA-Z]+)(\]\s=\s)(useState)(\()(\d+)(\);)$/,
  );
  if (!parts) return <span>{code}</span>;
  const [, k1, b1, n1, b2, n2, b3, fn, b4, num, b5] = parts;
  return (
    <>
      <span className="text-sky-400">{k1}</span>
      <span className="text-slate-300">{b1}</span>
      <span className="text-amber-200">{n1}</span>
      <span className="text-slate-300">{b2}</span>
      <span className="text-amber-200">{n2}</span>
      <span className="text-slate-300">{b3}</span>
      <span className="text-violet-300">{fn}</span>
      <span className="text-slate-300">{b4}</span>
      <span className="text-emerald-300">{num}</span>
      <span className="text-slate-300">{b5}</span>
    </>
  );
};

export const HooksEntryHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react/hooks/entry-flow.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]"> {'// public Hook → Dispatcher → impl'}</span>
    }
    align="center"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      {/* Left: code card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'transition-colors hover:border-[var(--term-accent)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
            {content.leftCard.title}
          </h3>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/50"
          >
            <CodeIcon className="h-3.5 w-3.5" />
          </span>
        </header>
        <div className={cn('rounded-xl border bg-slate-950 px-md py-md', 'border-slate-800')}>
          <div className="flex items-start gap-3 font-mono text-[12px] sm:text-[13px] leading-[1.7]">
            <span
              aria-hidden="true"
              className="select-none w-4 shrink-0 text-right text-slate-600 tabular-nums"
            >
              1
            </span>
            <code className="break-all text-slate-100">
              {renderCounterCode(content.leftCard.code)}
            </code>
          </div>
        </div>
      </article>
    </HeroTextColumn>

    <HeroVisualColumn id="hero-hooks-entry">
      <HooksEntryHeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);
