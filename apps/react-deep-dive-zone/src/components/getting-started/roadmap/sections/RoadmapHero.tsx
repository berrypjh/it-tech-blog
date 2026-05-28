import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { ExplorationMapVisual } from '../components/ExplorationMapVisual';
import type { RoadmapContent } from '../content';
import { heroSupportIconByName } from '../icons';
import { tones } from '../tones';

type Props = { content: RoadmapContent['hero'] };

export const RoadmapHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="ready" promptPath="--launch">
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

        {/* 4 supporting items panel */}
        <div className="mt-sm rounded-lg border border-sky-200/70 dark:border-sky-800/60 bg-sky-50/40 dark:bg-sky-950/30 p-md shadow-[0_2px_0_var(--term-border)]">
          <p className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold mb-sm">
            {content.supportTitle}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
            {content.supports.map((s) => {
              const t = tones[s.tone];
              const Icon = heroSupportIconByName[s.icon];
              return (
                <li key={s.id}>
                  <article
                    className={cn(
                      'flex items-start gap-sm rounded-md border bg-white dark:bg-slate-900 p-sm h-full',
                      t.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-md',
                        t.num,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <p className={cn('text-xsm font-bold leading-tight break-keep', t.text)}>
                        {s.title}
                      </p>
                      <p className="text-[10px] text-[var(--term-muted)] leading-tight break-keep">
                        {s.description}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn>
        <ExplorationMapVisual visual={content.visual} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
