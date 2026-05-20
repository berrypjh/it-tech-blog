import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../_shared/HeroDescription';
import { HeroSection } from '../../_shared/HeroSection';
import { HeroTextColumn } from '../../_shared/HeroTextColumn';
import { HeroTitle } from '../../_shared/HeroTitle';
import { HeroVisualColumn } from '../../_shared/HeroVisualColumn';
import { TerminalBadge } from '../../_shared/TerminalBadge';
import { QuestionPathVisual } from '../components/QuestionPathVisual';
import type { HeroInsight, NotAllFilesContent } from '../content';
import { insightIconByName } from '../icons';

type Props = { content: NotAllFilesContent['hero'] };

type InsightTone = HeroInsight['tone'];

const insightToneClasses: Record<
  InsightTone,
  { bg: string; text: string; border: string; iconBg: string; iconText: string }
> = {
  sky: {
    bg: 'bg-sky-50/70 dark:bg-sky-950/40',
    text: 'text-sky-800 dark:text-sky-100',
    border: 'border-sky-200 dark:border-sky-800/70',
    iconBg: 'bg-sky-500 dark:bg-sky-400',
    iconText: 'text-white dark:text-slate-900',
  },
  teal: {
    bg: 'bg-teal-50/70 dark:bg-teal-950/40',
    text: 'text-teal-800 dark:text-teal-100',
    border: 'border-teal-200 dark:border-teal-800/70',
    iconBg: 'bg-teal-500 dark:bg-teal-400',
    iconText: 'text-white dark:text-slate-900',
  },
  violet: {
    bg: 'bg-violet-50/70 dark:bg-violet-950/40',
    text: 'text-violet-800 dark:text-violet-100',
    border: 'border-violet-200 dark:border-violet-800/70',
    iconBg: 'bg-violet-500 dark:bg-violet-400',
    iconText: 'text-white dark:text-slate-900',
  },
};

export const SelectiveReadingHero = ({ content }: Props) => {
  return (
    <HeroSection
      promptCommand="grep -r"
      promptPath="'question'"
      promptSuffix=" packages/"
      gridColumns="lg:grid-cols-[minmax(0,_1.04fr)_minmax(0,_0.96fr)]"
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

        {/* 3 insight pills — pale blue panel */}
        <div className="mt-sm rounded-lg border border-sky-200/70 dark:border-sky-800/60 bg-sky-50/60 dark:bg-sky-950/30 p-md shadow-[0_2px_0_var(--term-border)]">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-sm sm:gap-md">
            {content.insights.map((insight) => {
              const t = insightToneClasses[insight.tone];
              const Icon = insightIconByName[insight.icon];
              return (
                <li key={insight.id}>
                  <article
                    className={cn(
                      'flex items-start gap-sm rounded-md border bg-white dark:bg-slate-900 p-sm',
                      t.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full',
                        t.iconBg,
                        t.iconText,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className={cn('text-xsm font-bold tracking-tight', t.text)}>
                        {insight.title}
                      </span>
                      <span className="text-[10px] text-[var(--term-muted)] leading-tight">
                        {insight.description}
                      </span>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </HeroTextColumn>

      <HeroVisualColumn>
        <QuestionPathVisual visual={content.visual} />
      </HeroVisualColumn>
    </HeroSection>
  );
};
