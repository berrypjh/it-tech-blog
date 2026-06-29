import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DeletionContent, ModalFlowStep } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  FlagIcon,
  ListTreeIcon,
  SprayCanIcon,
  TrashIcon,
} from '../icons';

type Props = { content: DeletionContent['modal'] };

const flowIconMap: Record<ModalFlowStep['iconName'], typeof FlagIcon> = {
  tree: ListTreeIcon,
  flag: FlagIcon,
  broom: SprayCanIcon,
  trash: TrashIcon,
};

export const ModalDeletionExampleSection = ({ content }: Props) => (
  <section
    id="modal-deletion-example"
    aria-labelledby="heading-modal-deletion-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="modal-deletion-example"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListTreeIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Top: code + state */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <CodeTopCard title={content.codeTitle} value={content.codeContent} />
        <StateTopCard title={content.stateTitle} value={content.stateContent} />
      </div>

      {/* Middle: 4-step flow */}
      <ol className="mt-md grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
        {content.flow.map((step, idx) => (
          <Fragment key={step.title}>
            <li className="flex">
              <FlowCard step={step} />
            </li>
            {idx < content.flow.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center justify-center text-[var(--term-dim)] py-1 md:py-0"
              >
                <ArrowRightIcon className="h-4 w-4 hidden md:inline-block" />
                <ArrowDownIcon className="h-4 w-4 md:hidden" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Bottom: before/after browser mock */}
      <div className="mt-md grid grid-cols-1 md:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
        <BrowserMock title={content.beforeTitle} content={content.beforeContent} variant="before" />
        <div className="flex items-center justify-center text-[var(--term-dim)] py-1 md:py-0">
          <ArrowRightIcon className="h-6 w-6 hidden md:inline-block" />
          <ArrowDownIcon className="h-6 w-6 md:hidden" />
        </div>
        <BrowserMock title={content.afterTitle} content={content.afterContent} variant="after" />
      </div>
    </article>
  </section>
);

const CodeTopCard = ({ title, value }: { title: string; value: string }) => (
  <article className="flex h-full flex-col gap-2 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_1px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-2">
      <h3 className="text-xsm sm:text-sm font-bold uppercase tracking-wider text-[var(--term-fg)] break-keep">
        {title}
      </h3>
      <span className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        jsx
      </span>
    </header>
    <pre className="overflow-x-auto rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] p-sm text-xsm leading-snug font-mono text-[var(--term-fg)]">
      <code>{value}</code>
    </pre>
  </article>
);

const StateTopCard = ({ title, value }: { title: string; value: string }) => {
  const t = toneTokens.sky;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            t.text,
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          state
        </span>
      </header>
      <StateChange value={value} />
    </article>
  );
};

const StateChange = ({ value }: { value: string }) => {
  const [left, right] = value.includes('→') ? value.split('→').map((s) => s.trim()) : [value, ''];
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-3 rounded-md border p-sm',
        toneTokens.sky.fill.border,
        toneTokens.sky.fill.bg,
      )}
    >
      <StateBadge label={left} tone="teal" />
      <ArrowRightIcon aria-hidden="true" className={cn('h-5 w-5', toneTokens.sky.text)} />
      <StateBadge label={right} muted />
    </div>
  );
};

const StateBadge = ({ label, tone, muted }: { label: string; tone?: 'teal'; muted?: boolean }) =>
  muted || !tone ? (
    <span className="inline-flex items-center gap-1 rounded-md border-2 border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-1 text-xsm font-mono font-bold text-[var(--term-muted)]">
      {label}
    </span>
  ) : (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border-2 px-3 py-1 text-xsm font-mono font-bold',
        toneTokens[tone].fill.border,
        toneTokens[tone].fill.bg,
        toneTokens[tone].fill.text,
      )}
    >
      {label}
    </span>
  );

const FlowCard = ({ step }: { step: ModalFlowStep }) => {
  const Icon = flowIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" />
        </ToneIconBox>
        <h3 className={cn('text-xsm font-bold leading-tight break-keep', t.fill.text)}>
          {step.title}
        </h3>
      </header>
      {step.description && (
        <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      )}
      {step.treeItems && (
        <ul className="flex flex-col gap-0.5 mt-auto">
          {step.treeItems.map((item, idx) => (
            <li
              key={item}
              className="flex items-center gap-1 text-[10px] font-mono text-[var(--term-fg)]"
              style={{ paddingLeft: idx === 0 ? 0 : 10 }}
            >
              {idx > 0 && (
                <span
                  aria-hidden="true"
                  className={cn('inline-block h-2 w-2 border-l border-b shrink-0', t.border)}
                />
              )}
              <span className={cn('inline-block rounded border px-1.5 py-0.5', t.chip)}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const BrowserMock = ({
  title,
  content,
  variant,
}: {
  title: string;
  content: string;
  variant: 'before' | 'after';
}) => {
  const isBefore = variant === 'before';
  const t = toneTokens.teal;
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border-2 bg-[var(--term-bg)] p-md',
        isBefore ? 'border-[var(--term-border)]' : t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isBefore ? 'text-[var(--term-fg)]' : t.text,
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isBefore
              ? 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]'
              : t.chip,
          )}
        >
          {isBefore ? 'mock' : 'cleaned'}
        </span>
      </header>

      {/* Browser UI mockup (intentional UI mimicry) */}
      <div
        className={cn(
          'rounded-lg border bg-white dark:bg-slate-950 overflow-hidden',
          isBefore
            ? 'border-slate-300/70 dark:border-slate-700/60'
            : 'border-teal-300/80 dark:border-teal-700/70',
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/40 px-2 py-1.5">
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
            app://example
          </span>
        </div>
        {isBefore ? <ModalMockBody /> : <EmptyMockBody />}
      </div>

      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {content}
      </p>
    </article>
  );
};

// 실제 브라우저/모달 화면을 흉내 낸 UI 목업 (tones 토큰 예외).
const ModalMockBody = () => (
  <div className="relative h-32 sm:h-36 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
    <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60" />
    <div className="absolute inset-x-3 sm:inset-x-6 top-3 sm:top-4 bottom-3 sm:bottom-4 flex flex-col gap-1.5 rounded-lg border-2 border-violet-300/80 bg-white dark:bg-slate-950 dark:border-violet-700/70 p-2">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-800 dark:text-slate-100">Modal</span>
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-slate-300 text-[10px] text-slate-500 dark:border-slate-700 dark:text-slate-400"
        >
          ×
        </span>
      </div>
      <p className="text-[9px] leading-tight text-slate-600 dark:text-slate-400">
        modal content...
      </p>
      <div className="mt-auto flex justify-end">
        <span className="inline-flex items-center rounded-md border border-violet-300 bg-violet-100 px-2 py-0.5 text-[9px] font-bold text-violet-800 dark:border-violet-700 dark:bg-violet-950/60 dark:text-violet-100">
          close
        </span>
      </div>
    </div>
  </div>
);

const EmptyMockBody = () => (
  <div className="relative h-32 sm:h-36 bg-gradient-to-br from-white to-teal-50/30 dark:from-slate-950 dark:to-teal-950/20 flex items-center justify-center">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      empty
    </span>
  </div>
);
