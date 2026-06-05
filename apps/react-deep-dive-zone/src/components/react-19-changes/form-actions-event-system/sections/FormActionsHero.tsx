import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { FormActionsEventSystemContent } from '../content';
import { ArrowRightIcon, WorkflowIcon } from '../icons';
import { pipelineTone } from '../tone';

import { CodePanel } from './_CodePanel';

type Props = { content: FormActionsEventSystemContent['hero'] };

export const FormActionsHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="react-19-changes/form-actions-event-system.md"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' // submit event → plugin → pendingState → transition'}
      </span>
    }
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
        <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        <span className="block text-[var(--term-accent)]">{content.titleLines[2]}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[46ch]">{content.subtitleLines.join(' ')}</HeroDescription>

      {/* hero code panel */}
      <CodePanel
        code={content.heroCode.code}
        fileName={content.heroCode.fileName}
        langBadge={content.heroCode.langBadge}
      />
    </HeroTextColumn>

    <HeroVisualColumn className="w-full">
      {/* pipeline card */}
      <article
        className={cn(
          'relative flex flex-col gap-sm overflow-hidden rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <WorkflowIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.pipeline.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.pipeline.steps.map((step, idx) => {
            const tone = pipelineTone[step.pipeline];
            const isLast = idx === content.pipeline.steps.length - 1;
            return (
              <li key={step.title}>
                <article
                  className={cn(
                    'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                    'bg-white dark:bg-[var(--term-bg)]',
                    tone.border,
                    'shadow-[0_1px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-lg border font-mono text-[10px] font-bold tabular-nums',
                      tone.iconChip,
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col">
                    <span className={cn('text-xsm font-bold break-keep', tone.text)}>
                      {step.title}
                    </span>
                    <span className="text-[10px] text-[var(--term-muted)] break-keep">
                      {step.caption}
                    </span>
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      isLast
                        ? 'opacity-0'
                        : cn('inline-flex items-center justify-center', tone.text),
                    )}
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </article>
                {!isLast && (
                  <div aria-hidden="true" className="flex justify-start pl-3">
                    <span
                      className={cn('block h-2 w-px border-l border-dashed', tone.borderStrong)}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <p className="mt-1 text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-200 break-keep">
          {content.pipeline.footer}
        </p>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);
