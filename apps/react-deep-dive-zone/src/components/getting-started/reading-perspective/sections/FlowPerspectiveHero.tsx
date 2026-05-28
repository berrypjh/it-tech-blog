import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { SixStageVerticalRail } from '../components/SixStageVerticalRail';
import type { ReadingPerspectiveContent } from '../content';
import { supportPointIconByName } from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['hero'] };

const supportToneToStageTone: Record<'sky' | 'teal' | 'violet', 'blue' | 'teal' | 'lavender'> = {
  sky: 'blue',
  teal: 'teal',
  violet: 'lavender',
};

export const FlowPerspectiveHero = ({ content }: Props) => {
  return (
    <HeroSection promptCommand="stage" promptPath="--first">
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
            const t = stageTones[supportToneToStageTone[p.tone]];
            const Icon = supportPointIconByName[p.icon];
            return (
              <li key={p.id}>
                <article
                  className={cn(
                    'flex flex-col gap-1.5 rounded-md border bg-white dark:bg-slate-900 p-sm h-full',
                    t.border,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex w-fit items-center justify-center w-7 h-7 rounded-md',
                      t.num,
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <p className={cn('text-xsm font-bold leading-tight', t.text)}>{p.title}</p>
                  <p className="text-[10px] text-[var(--term-muted)] leading-snug break-keep">
                    {p.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </HeroTextColumn>

      <HeroVisualColumn>
        <SixStageVerticalRail rail={content.rail} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
