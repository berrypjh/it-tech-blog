import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { NextChapterItem, UpdateToRenderSummaryContent } from '../content';
import {
  BoxesIcon,
  CheckCircleIcon,
  CircleHelpIcon,
  LayersIcon,
  PenToolIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: UpdateToRenderSummaryContent['nextChapter'] };

const iconMap: Record<NextChapterItem['iconName'], typeof WorkflowIcon> = {
  workflow: WorkflowIcon,
  penTool: PenToolIcon,
  layers: LayersIcon,
  checkCircle: CheckCircleIcon,
};

export const NextChapterPreviewSection = ({ content }: Props) => (
  <section
    id="next-chapter"
    aria-labelledby="heading-next-chapter"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-chapter"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CircleHelpIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: question */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-violet-200/80 dark:border-violet-700/70',
          'bg-gradient-to-br from-violet-50/60 via-white to-fuchsia-50/30',
          'dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-fuchsia-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-14 w-14 items-center justify-center rounded-3xl',
            'bg-violet-100 text-violet-700 border border-violet-200/80',
            'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <CircleHelpIcon className="h-7 w-7" />
        </span>

        <p className="text-md sm:text-lg leading-relaxed text-violet-900 dark:text-violet-100 break-keep font-bold whitespace-pre-line">
          {content.previewQuestion}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          <li className="rounded-md border border-violet-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-violet-700 dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200">
            reconciler
          </li>
          <li className="rounded-md border border-sky-300/70 bg-white/70 px-2 py-0.5 text-[10px] font-mono text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200">
            render phase
          </li>
        </ul>
      </article>

      {/* Right: next concepts */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/25',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className="text-md sm:text-lg font-bold leading-tight text-sky-900 dark:text-sky-100 break-keep">
            {content.rightTitle}
          </h3>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl',
              'bg-sky-100 text-sky-700 border border-sky-200/80',
              'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
            )}
          >
            <BoxesIcon className="h-5 w-5" />
          </span>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.rightItems.map((item) => {
            const Icon = iconMap[item.iconName];
            const t = toneTokens[item.tone];
            return (
              <li
                key={item.title}
                className={cn(
                  'flex flex-col gap-1 rounded-xl border-2 bg-[var(--term-bg)] p-3',
                  t.border,
                  'shadow-[0_1px_0_var(--term-border)]',
                )}
              >
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn('text-xsm sm:text-sm font-bold font-mono break-keep', t.text)}
                  >
                    {item.title}
                  </span>
                </header>
                <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
