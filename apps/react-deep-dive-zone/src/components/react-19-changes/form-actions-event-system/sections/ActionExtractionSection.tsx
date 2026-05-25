import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, GitBranchIcon, SplitIcon } from '../icons';
import { pipelineTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['actionExtraction'] };

export const ActionExtractionSection = ({ content }: Props) => {
  const actionTone = pipelineTone.action;
  const pluginTone = pipelineTone.plugin;
  const transitionTone = pipelineTone.transition;

  return (
    <section aria-labelledby="action-extraction-heading" className="flex flex-col">
      <SectionHeader
        id="action-extraction-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-3 lg:gap-lg items-stretch">
        {/* LEFT: form-level action */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            actionTone.border,
            'bg-white dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                actionTone.iconChip,
              )}
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', actionTone.text)}>
              {content.left.title}
            </h3>
          </header>
          <CodePanel code={content.left.code} langBadge="TSX" />
          <div
            className={cn('flex items-center gap-2 rounded-lg border px-3 py-2', actionTone.chip)}
          >
            <span
              aria-hidden="true"
              className={cn('block h-1.5 w-1.5 rounded-full', actionTone.dot)}
            />
            <p className={cn('text-xsm font-bold break-keep', actionTone.text)}>
              {content.left.result}
            </p>
          </div>
        </article>

        {/* MIDDLE: button formAction wins */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            pluginTone.border,
            'bg-white dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                pluginTone.iconChip,
              )}
            >
              <SplitIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', pluginTone.text)}>
              {content.middle.title}
            </h3>
          </header>
          <CodePanel code={content.middle.code} langBadge="TSX" />
          <div
            className={cn('flex items-center gap-2 rounded-lg border px-3 py-2', pluginTone.chip)}
          >
            <span
              aria-hidden="true"
              className={cn('block h-1.5 w-1.5 rounded-full', pluginTone.dot)}
            />
            <p className={cn('text-xsm font-bold break-keep', pluginTone.text)}>
              {content.middle.result}
            </p>
          </div>
        </article>

        {/* RIGHT: decision flow */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
            'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <GitBranchIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.right.title}
            </h3>
          </header>

          {/* decision diamond-card */}
          <div
            className={cn(
              'rounded-xl border-2 px-3 py-3 text-center',
              'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
            )}
          >
            <p className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.right.decision}
            </p>
          </div>

          {/* Yes / No branches */}
          <div className="grid grid-cols-2 gap-2 items-start">
            <BranchCard
              label={content.right.yesLabel}
              body={content.right.yesBody}
              tone={pluginTone}
            />
            <BranchCard
              label={content.right.noLabel}
              body={content.right.noBody}
              tone={actionTone}
            />
          </div>

          {/* Arrow down */}
          <div aria-hidden="true" className="flex justify-center">
            <span
              className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-full border',
                transitionTone.iconChip,
              )}
            >
              <ArrowDownIcon className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Final */}
          <div
            className={cn(
              'rounded-xl border-2 px-3 py-2 text-center',
              transitionTone.borderStrong,
              transitionTone.bg,
            )}
          >
            <p className={cn('text-xsm font-bold break-keep', transitionTone.text)}>
              {content.right.final}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

const BranchCard = ({
  label,
  body,
  tone,
}: {
  label: string;
  body: string;
  tone: (typeof pipelineTone)[keyof typeof pipelineTone];
}) => (
  <div
    className={cn(
      'flex flex-col gap-1 rounded-lg border-2 p-3',
      tone.border,
      'bg-white dark:bg-[var(--term-bg)]',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex w-fit items-center gap-1 rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase',
        tone.chip,
      )}
    >
      {label}
    </span>
    <p className={cn('text-xsm font-bold break-keep leading-snug', tone.text)}>{body}</p>
  </div>
);
