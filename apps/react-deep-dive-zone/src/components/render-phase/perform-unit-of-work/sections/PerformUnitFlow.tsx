import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PerformUnitContent } from '../content';
import { ChevronDownIcon, HelpCircleIcon, WorkflowIcon } from '../icons';

type Props = { content: PerformUnitContent['fullFlow'] };

export const PerformUnitFlow = ({ content }: Props) => (
  <section id="full-flow" aria-labelledby="heading-full-flow" className="space-y-md">
    <SectionHeader
      id="full-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// performUnitOfWork() — branching flow'}
        </span>
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
          full flow
        </span>
      </header>

      <div className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-2">
        {content.flow.steps.map((step, idx) => (
          <div key={step.title} className="flex w-full flex-col items-center">
            <CodeStep title={step.title} mono={step.mono} />
            {idx < content.flow.steps.length - 1 && (
              <ChevronDownIcon
                aria-hidden="true"
                className="my-1 h-5 w-5 text-[var(--term-accent)]"
              />
            )}
          </div>
        ))}

        <ChevronDownIcon aria-hidden="true" className="my-1 h-5 w-5 text-[var(--term-accent)]" />
        <Diamond title={content.flow.decision} />

        <div className="mt-3 grid w-full grid-cols-1 md:grid-cols-2 gap-md">
          <BranchPanel
            tone="teal"
            label={content.flow.yes.label}
            title={content.flow.yes.title}
            description={content.flow.yes.description}
          />
          <BranchPanel
            tone="violet"
            label={content.flow.no.label}
            title={content.flow.no.title}
            description={content.flow.no.description}
          />
        </div>
      </div>
    </article>
  </section>
);

const CodeStep = ({ title, mono }: { title: string; mono?: boolean }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'inline-flex w-full max-w-[640px] items-center justify-center rounded-lg border px-md py-3',
        'shadow-[0_1px_0_var(--term-border)]',
        t.fill.bg,
        t.fill.border,
      )}
    >
      <code
        className={cn(
          'text-xsm sm:text-sm font-bold break-all text-center',
          mono && 'font-mono',
          t.fill.text,
        )}
      >
        {title}
      </code>
    </article>
  );
};

const Diamond = ({ title }: { title: string }) => (
  <div className="relative flex h-28 sm:h-32 w-[min(360px,100%)] items-center justify-center">
    <span
      aria-hidden="true"
      className={cn(
        'absolute inset-0 m-auto rotate-45 h-[78%] w-[78%] rounded-lg border',
        'shadow-[0_1px_0_var(--term-border)]',
        toneTokens.violet.fill.bg,
        toneTokens.violet.fill.border,
      )}
    />
    <div className="relative flex flex-col items-center justify-center gap-1 text-center">
      <HelpCircleIcon aria-hidden="true" className={cn('h-5 w-5', toneTokens.violet.text)} />
      <span className={cn('text-sm sm:text-md font-bold break-keep', toneTokens.violet.fill.text)}>
        {title}
      </span>
    </div>
  </div>
);

const BranchPanel = ({
  tone,
  label,
  title,
  description,
}: {
  tone: ToneKey;
  label: string[];
  title: string;
  description: string[];
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        {label.map((line, idx) => (
          <span
            key={`${line}-${idx}`}
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
              idx === 0
                ? cn(t.chip, 'font-bold')
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            {line}
          </span>
        ))}
      </header>
      <code
        className={cn(
          'mt-1 inline-flex items-center self-start rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-xsm sm:text-sm font-bold break-all',
          t.text,
        )}
      >
        {title}
      </code>
      <ul className="mt-1 flex flex-col gap-0.5">
        {description.map((line) => (
          <li
            key={line}
            className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep"
          >
            {line}
          </li>
        ))}
      </ul>
    </article>
  );
};
