import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { StairLearningRoadmap } from '../components/StairLearningRoadmap';
import type { ReadOrderContent } from '../content';
import { supportPointIconByName } from '../icons';

type Props = { content: ReadOrderContent['hero'] };

export const ReadingOrderHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="tree --depth=8"
      promptPath="react/internals"
      gridColumns="lg:grid-cols-[minmax(0,_0.96fr)_minmax(0,_1.04fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.stepBadge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[58ch]" lines={content.description} />

        {/* 3 supporting points */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm mt-sm">
          {content.points.map((p) => {
            const Icon = supportPointIconByName[p.icon];
            return (
              <li key={p.id}>
                <article
                  className={cn(
                    'flex flex-col gap-1.5 rounded-md border border-teal-200/80 dark:border-teal-800/60 bg-teal-50/40 dark:bg-teal-950/30 p-sm h-full',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex w-fit items-center justify-center w-7 h-7 rounded-md bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-xsm font-bold text-[var(--term-fg)] leading-snug break-keep">
                    {p.title.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="text-[10px] text-[var(--term-muted)] leading-tight">
                    {p.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </HeroTextColumn>

      <HeroVisualColumn>
        <StairLearningRoadmap stair={content.stair} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
