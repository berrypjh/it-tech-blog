import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { TypeKeyReuseContent } from '../content';
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  BoxIcon,
  CheckCircleIcon,
  LightbulbIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: TypeKeyReuseContent['hero'] };

export const FiberReuseHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/type-key-reuse.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// fiber reuse decision'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

      <aside
        className={cn(
          'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-amber-100 text-amber-700 border border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.callout}
        </p>
      </aside>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroPreview diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroPreview = ({ diagram }: { diagram: TypeKeyReuseContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-teal-50/40 via-white to-rose-50/40',
      'dark:from-teal-950/20 dark:via-[var(--term-bg)] dark:to-rose-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// reuse vs replace'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        preview
      </span>
    </header>

    <h2 className="mb-md text-sm sm:text-md font-bold text-[var(--term-fg)] text-center break-keep">
      {diagram.title}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <ReusePanel data={diagram.reuse} />
      <ReplacePanel data={diagram.replace} />
    </div>
  </div>
);

type SideData = {
  header: string;
  result: string;
  previous: { label: string; details: string[] };
  next: { label: string; details: string[] };
  bottom: string;
};

const ReusePanel = ({ data }: { data: SideData }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-3 rounded-2xl border-2 p-md',
      'border-teal-300/80 bg-teal-50/60',
      'dark:border-teal-700/70 dark:bg-teal-950/30',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
        {data.header}
      </span>
      <div className="flex items-center gap-2">
        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-teal-600 dark:text-teal-300" />
        <span className="text-md sm:text-lg font-bold text-teal-800 dark:text-teal-100">
          {data.result}
        </span>
      </div>
    </header>

    <div className="flex flex-col items-stretch gap-1.5">
      <PreviewFiberCard label={data.previous.label} details={data.previous.details} kind="reuse" />
      <ArrowRightIcon
        aria-hidden="true"
        className="mx-auto h-4 w-4 text-teal-500/80 dark:text-teal-300/80 rotate-90"
      />
      <PreviewFiberCard label={data.next.label} details={data.next.details} kind="reuse" />
    </div>

    <p className="text-xsm sm:text-sm leading-snug text-teal-900 dark:text-teal-100 font-bold break-keep">
      {data.bottom}
    </p>
  </article>
);

const ReplacePanel = ({ data }: { data: SideData }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-3 rounded-2xl border-2 p-md',
      'border-rose-300/80 bg-rose-50/50',
      'dark:border-rose-700/70 dark:bg-rose-950/25',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono uppercase tracking-wider text-rose-700 dark:text-rose-300">
        {data.header}
      </span>
      <div className="flex items-center gap-2">
        <AlertTriangleIcon
          aria-hidden="true"
          className="h-5 w-5 text-rose-600 dark:text-rose-300"
        />
        <span className="text-md sm:text-lg font-bold text-rose-800 dark:text-rose-100">
          {data.result}
        </span>
      </div>
    </header>

    <div className="flex flex-col items-stretch gap-1.5">
      <PreviewFiberCard label={data.previous.label} details={data.previous.details} kind="prior" />
      <span
        aria-hidden="true"
        className="mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200"
      >
        <XCircleIcon className="h-4 w-4" />
      </span>
      <PreviewFiberCard label={data.next.label} details={data.next.details} kind="replace" />
    </div>

    <p className="text-xsm sm:text-sm leading-snug text-rose-900 dark:text-rose-100 font-bold break-keep">
      {data.bottom}
    </p>
  </article>
);

const PreviewFiberCard = ({
  label,
  details,
  kind,
}: {
  label: string;
  details: string[];
  kind: 'reuse' | 'prior' | 'replace';
}) => {
  const palette =
    kind === 'reuse'
      ? 'border-teal-300/80 bg-white text-teal-900 dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-100'
      : kind === 'prior'
        ? 'border-sky-300/80 bg-white text-sky-900 dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100'
        : 'border-rose-300/80 bg-white text-rose-900 dark:border-rose-700/70 dark:bg-slate-950/40 dark:text-rose-100';
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-xl border p-2',
        palette,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          kind === 'reuse'
            ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
            : kind === 'prior'
              ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
              : 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
        )}
      >
        <BoxIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-xsm font-bold leading-tight break-keep">{label}</span>
        <div className="flex flex-col">
          {details.map((d) => (
            <code
              key={d}
              className="font-mono text-[10px] leading-snug text-[var(--term-muted)] break-all"
            >
              {d}
            </code>
          ))}
        </div>
      </div>
    </article>
  );
};
