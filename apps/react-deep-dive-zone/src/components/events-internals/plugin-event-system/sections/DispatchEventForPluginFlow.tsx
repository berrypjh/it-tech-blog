import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  GitBranchIcon,
  PlayCircleIcon,
  TargetIcon,
  WorkflowIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneCard, toneIconBox } from '../styles';

type Props = { content: PluginEventSystemContent['dispatchRoute'] };

const stepIcons = [PlayCircleIcon, TargetIcon, GitBranchIcon];

export const DispatchEventForPluginFlow = ({ content }: Props) => (
  <SectionFrame
    id="dispatch-route"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<WorkflowIcon className="h-5 w-5" />}
  >
    <ol className={cn('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 lg:grid-cols-3')}>
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? TargetIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex items-center gap-3 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[step.tone],
              step.isCore && 'lg:scale-[1.02] shadow-[0_4px_0_var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                toneIconBox[step.tone],
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold leading-tight break-all',
                  toneAccent[step.tone],
                )}
              >
                {step.title}
              </code>
              <span className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                {step.body}
              </span>
            </div>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden absolute left-1/2 -bottom-2.5 -translate-x-1/2 text-[var(--term-muted)]"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </SectionFrame>
);
