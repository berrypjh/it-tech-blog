import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { HooksSummaryHeroDiagram } from '../components/HooksSummaryHeroDiagram';
import type { HooksRecapContent } from '../content';

import { toneIconBox, toneNumber } from './_shared/tones';

type Props = { content: HooksRecapContent['hero'] };

export const HooksSummaryHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react/hooks/recap.md"
      promptSuffix={<span className="text-[var(--term-dim)]"> {'// final recap'}</span>}
      gridColumns="lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)]"
      align="center"
    >
      {/* Left: text + keywords */}
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block">{content.titleLine1}</span>
          <span className="block text-[var(--term-accent)]">{content.titleAccent}</span>
        </HeroTitle>
        <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

        <ul className="flex flex-wrap gap-1.5 mt-sm">
          {content.keywords.map((kw) => (
            <li key={kw.label}>
              <code
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold break-all',
                  'bg-white dark:bg-slate-950/40',
                  toneIconBox[kw.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('inline-block h-1.5 w-1.5 rounded-full', toneNumber[kw.tone])}
                />
                {kw.label}
              </code>
            </li>
          ))}
        </ul>
      </HeroTextColumn>

      {/* Right: full flow diagram */}
      <HeroVisualColumn id="hero-hooks-recap">
        <HooksSummaryHeroDiagram content={content} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
