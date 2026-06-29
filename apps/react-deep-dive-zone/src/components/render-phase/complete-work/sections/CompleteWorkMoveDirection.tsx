import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent } from '../content';
import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CompleteWorkContent['direction'] };

export const CompleteWorkMoveDirection = ({ content }: Props) => (
  <section id="direction" aria-labelledby="heading-direction" className="space-y-md">
    <SectionHeader
      id="direction"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="flex flex-col items-center gap-2">
        {/* Top node */}
        <article
          className={cn(
            'inline-flex w-full max-w-[460px] flex-col items-center rounded-lg border px-md py-3 text-center',
            'shadow-[0_1px_0_var(--term-border)]',
            toneTokens.sky.fill.bg,
            toneTokens.sky.fill.border,
          )}
        >
          <h3
            className={cn('text-sm sm:text-md font-bold leading-tight', toneTokens.sky.fill.text)}
          >
            {content.topTitle}
          </h3>
          <code className={cn('font-mono text-xsm sm:text-sm', toneTokens.sky.text)}>
            {content.topSubtitle}
          </code>
        </article>

        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-[var(--term-accent)]" />

        {/* Decision diamond */}
        <div className="relative flex h-28 w-[min(360px,100%)] items-center justify-center">
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
            <span
              className={cn('text-sm sm:text-md font-bold break-keep', toneTokens.violet.fill.text)}
            >
              {content.decision}
            </span>
          </div>
        </div>

        {/* Branches */}
        <div className="mt-3 grid w-full grid-cols-1 md:grid-cols-2 gap-md">
          <BranchCard
            tone="teal"
            label={content.yes.label}
            title={content.yes.title}
            code={content.yes.code}
            kind="sibling"
          />
          <BranchCard
            tone="amber"
            label={content.no.label}
            title={content.no.title}
            code={content.no.code}
            kind="parent"
          />
        </div>

        <p className="mt-md max-w-[60ch] text-center text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.description}
        </p>
      </div>
    </article>
  </section>
);

type BranchProps = {
  tone: ToneKey;
  label: string;
  title: string;
  code: string;
  kind: 'sibling' | 'parent';
};

const BranchCard = ({ tone, label, title, code, kind }: BranchProps) => {
  const t = toneTokens[tone];
  const Arrow = kind === 'sibling' ? ArrowRightIcon : ArrowUpIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-lg border p-md',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider font-bold',
            t.chip,
          )}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Arrow className="h-4 w-4" />
        </span>
      </header>
      <h4 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
        {title}
      </h4>
      <code className="self-start inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
        {code}
      </code>
    </article>
  );
};
