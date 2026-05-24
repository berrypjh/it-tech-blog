import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  CornerDownRightIcon,
  FormInputIcon,
  MousePointerIcon,
  PuzzleIcon,
  RocketIcon,
  ScrollIcon,
  SparklesIcon,
  TargetIcon,
  TypeIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneCard, toneIconBox } from '../styles';

type Props = { content: PluginEventSystemContent['extract'] };

const pluginIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  SimpleEventPlugin: MousePointerIcon,
  ChangeEventPlugin: FormInputIcon,
  SelectEventPlugin: TargetIcon,
  BeforeInputEventPlugin: TypeIcon,
  ScrollEndEventPlugin: ScrollIcon,
  FormActionEventPlugin: RocketIcon,
};

export const ExtractEventsFlow = ({ content }: Props) => (
  <SectionFrame
    id="extract"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<WorkflowIcon className="h-5 w-5" />}
  >
    {/* Center extractEvents card */}
    <div className="flex flex-col items-center gap-2">
      <article
        className={cn(
          'relative w-full max-w-[520px] rounded-2xl border-2 p-md sm:p-lg text-center',
          'border-violet-300/90 bg-gradient-to-br from-violet-50 to-blue-50/60',
          'dark:border-violet-600/80 dark:from-violet-950/40 dark:to-blue-950/30',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-center justify-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_3px_0_rgba(124,58,237,0.3)] dark:bg-violet-400 dark:text-slate-900"
          >
            <PuzzleIcon className="h-5 w-5" />
          </span>
          <code className="font-mono text-md sm:text-lg font-bold text-violet-700 dark:text-violet-200">
            {content.centerCard.title}
          </code>
        </div>
        <p className="mt-2 text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
          {content.centerCard.body}
        </p>
      </article>

      {/* Branching connector */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center text-violet-500 dark:text-violet-300"
      >
        <CornerDownRightIcon className="h-5 w-5 -rotate-12" />
      </div>
    </div>

    {/* Plugin grid */}
    <ul className={cn('mt-2 grid gap-2 sm:gap-3', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3')}>
      {content.plugins.map((plugin) => {
        const Icon = pluginIcons[plugin.name] ?? SparklesIcon;
        return (
          <li
            key={plugin.name}
            className={cn(
              'group flex items-start gap-3 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[plugin.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                toneIconBox[plugin.tone],
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold break-all',
                  toneAccent[plugin.tone],
                )}
              >
                {plugin.name}
              </code>
              <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {plugin.summary}
              </p>
            </div>
            <ZapIcon
              aria-hidden="true"
              className={cn('h-3.5 w-3.5 shrink-0 mt-1 opacity-50', toneAccent[plugin.tone])}
            />
          </li>
        );
      })}
    </ul>

    <p className="sr-only">
      {content.centerCard.title} → {content.plugins.map((p) => p.name).join(' / ')}
    </p>
  </SectionFrame>
);
