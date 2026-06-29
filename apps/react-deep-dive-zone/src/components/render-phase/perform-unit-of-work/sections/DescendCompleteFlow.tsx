import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { DescendCompleteExplanation, PerformUnitContent } from '../content';
import {
  ChevronDownIcon,
  descendIconByName,
  HelpCircleIcon,
  RotateCwIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: PerformUnitContent['descendComplete'] };

const explainTone: Record<DescendCompleteExplanation['items'][number]['icon'], ToneKey> = {
  arrowDown: 'teal',
  arrowUp: 'violet',
  rotate: 'sky',
};

export const DescendCompleteFlow = ({ content }: Props) => (
  <section id="descend-complete" aria-labelledby="heading-descend-complete" className="space-y-md">
    <SectionHeader
      id="descend-complete"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.1fr)_minmax(0,_1fr)] gap-md lg:gap-lg">
      {/* Left: branch flowchart */}
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <div className="flex flex-col items-center gap-2">
          {content.flow.topSteps.map((step, idx) => (
            <div key={step} className="flex w-full flex-col items-center">
              <article
                className={cn(
                  'inline-flex w-full max-w-[420px] items-center justify-center rounded-lg border px-md py-2.5 shadow-[0_1px_0_var(--term-border)]',
                  toneTokens.sky.fill.bg,
                  toneTokens.sky.fill.border,
                )}
              >
                <span
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-tight text-center break-keep',
                    toneTokens.sky.fill.text,
                  )}
                >
                  {step}
                </span>
              </article>
              {idx < content.flow.topSteps.length - 1 && (
                <ChevronDownIcon
                  aria-hidden="true"
                  className="my-1 h-5 w-5 text-[var(--term-accent)]"
                />
              )}
            </div>
          ))}

          <ChevronDownIcon aria-hidden="true" className="my-1 h-5 w-5 text-[var(--term-accent)]" />

          <div className="relative flex h-24 w-[min(280px,100%)] items-center justify-center">
            <span
              aria-hidden="true"
              className={cn(
                'absolute inset-0 m-auto rotate-45 h-[80%] w-[80%] rounded-lg border',
                toneTokens.violet.fill.bg,
                toneTokens.violet.fill.border,
              )}
            />
            <div className="relative flex flex-col items-center justify-center gap-1 text-center">
              <HelpCircleIcon
                aria-hidden="true"
                className={cn('h-4 w-4', toneTokens.violet.text)}
              />
              <span
                className={cn(
                  'text-xsm sm:text-sm font-bold break-keep',
                  toneTokens.violet.fill.text,
                )}
              >
                {content.flow.decision}
              </span>
            </div>
          </div>

          <div className="mt-2 grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
            <SmallBranch
              tone="teal"
              labels={content.flow.yes.label}
              title={content.flow.yes.title}
              description={content.flow.yes.description}
            />
            <SmallBranch
              tone="violet"
              labels={content.flow.no.label}
              title={content.flow.no.title}
              description={content.flow.no.description}
            />
          </div>
        </div>
      </article>

      {/* Right: explanation */}
      <article
        aria-labelledby="heading-descend-explanation"
        className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]"
      >
        <header className="flex items-center gap-2">
          <ToneIconBox tone="sky" size="md">
            <RotateCwIcon className="h-5 w-5" />
          </ToneIconBox>
          <h3
            id="heading-descend-explanation"
            className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep"
          >
            {content.explanation.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.explanation.items.map((item, idx) => {
            const Icon = descendIconByName[item.icon];
            const t = toneTokens[explainTone[item.icon]];
            return (
              <li
                key={item.text}
                className="flex items-start gap-3 rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-sm sm:p-md transition-all hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border',
                    t.chip,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    step {idx + 1}
                  </span>
                  <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep">
                    {item.text}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);

const SmallBranch = ({
  tone,
  labels,
  title,
  description,
}: {
  tone: ToneKey;
  labels: string[];
  title: string;
  description: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-lg border p-sm sm:p-md shadow-[0_1px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex flex-wrap items-center gap-1.5">
        {labels.map((label, idx) => (
          <span
            key={`${label}-${idx}`}
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
              idx === 0
                ? cn(t.chip, 'font-bold')
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            {label}
          </span>
        ))}
      </header>
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}>
        {title}
      </h4>
      <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {description}
      </p>
    </article>
  );
};
