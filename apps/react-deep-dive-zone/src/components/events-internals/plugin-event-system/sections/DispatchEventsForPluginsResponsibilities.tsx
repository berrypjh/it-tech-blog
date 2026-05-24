import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxesIcon,
  ListIcon,
  PlayCircleIcon,
  PuzzleIcon,
  TargetIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneCard, toneIconBox, toneNumber } from '../styles';

type Props = { content: PluginEventSystemContent['responsibilities'] };

const stepIcons = [TargetIcon, BoxesIcon, PuzzleIcon, PlayCircleIcon];

export const DispatchEventsForPluginsResponsibilities = ({ content }: Props) => (
  <SectionFrame
    id="responsibilities"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<ListIcon className="h-5 w-5" />}
  >
    <ol
      className={cn(
        'grid items-stretch gap-2 sm:gap-3',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      )}
    >
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? TargetIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[step.tone],
            )}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                  'text-[11px] font-mono font-bold tabular-nums',
                  toneNumber[step.tone],
                )}
              >
                {i + 1}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            </div>

            <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
              {step.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
              {step.body}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border-2 border-dashed border-blue-300/70 bg-[var(--term-bg)] text-blue-500 dark:border-blue-700/60 dark:text-blue-300"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </SectionFrame>
);
