import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { StatePreserveSide, TypeKeyReuseContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  Link2OffIcon,
  LinkIcon,
  ShieldCheckIcon,
  Trash2Icon,
} from '../icons';

type Props = { content: TypeKeyReuseContent['statePreserve'] };

export const StatePreservationConnection = ({ content }: Props) => (
  <section
    id="state-preservation"
    aria-labelledby="heading-state-preservation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="state-preservation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left explanation */}
      <article
        className={cn(
          'flex items-start gap-md rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
            'bg-teal-100 text-teal-700 border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <LinkIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] font-bold break-keep">
          {content.description}
        </p>
      </article>

      {/* Right comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <SideCard side={content.reuse} />
        <SideCard side={content.replace} />
      </div>
    </div>
  </section>
);

const SideCard = ({ side }: { side: StatePreserveSide }) => {
  const isReuse = side.kind === 'reuse';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        isReuse
          ? 'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/20'
          : 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className={cn(
              'text-[10px] font-mono uppercase tracking-wider',
              isReuse ? 'text-teal-700 dark:text-teal-300' : 'text-rose-700 dark:text-rose-300',
            )}
          >
            {side.header}
          </span>
          <span
            className={cn(
              'text-sm sm:text-md font-bold leading-tight break-keep',
              isReuse ? 'text-teal-800 dark:text-teal-100' : 'text-rose-800 dark:text-rose-100',
            )}
          >
            {side.subtitle}
          </span>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            isReuse
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
          )}
        >
          {isReuse ? <ShieldCheckIcon className="h-5 w-5" /> : <Trash2Icon className="h-5 w-5" />}
        </span>
      </header>

      <RenderCard
        label="이전 렌더"
        code={side.previous.code}
        count={side.previous.count}
        kind="prev"
      />

      <div className="flex items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'hidden md:inline-flex h-7 w-7 items-center justify-center rounded-full',
            isReuse
              ? 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200'
              : 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
          )}
        >
          {isReuse ? <CheckCircleIcon className="h-4 w-4" /> : <Link2OffIcon className="h-4 w-4" />}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider',
            isReuse ? 'text-teal-700 dark:text-teal-300' : 'text-rose-700 dark:text-rose-300',
          )}
        >
          {isReuse ? '재사용' : '교체'}
          <ChevronDownIcon className="md:hidden h-4 w-4" />
          <ArrowRightIcon className="hidden md:block h-4 w-4 rotate-90" />
        </span>
      </div>

      <RenderCard
        label="다음 렌더"
        code={side.next.code}
        count={side.next.count}
        note={side.next.note}
        kind={isReuse ? 'reuse' : 'replace'}
      />

      <p
        className={cn(
          'mt-auto text-xsm sm:text-sm leading-relaxed font-bold break-keep',
          isReuse ? 'text-teal-900 dark:text-teal-100' : 'text-rose-900 dark:text-rose-100',
        )}
      >
        {side.bottom}
      </p>
    </article>
  );
};

const RenderCard = ({
  label,
  code,
  count,
  note,
  kind,
}: {
  label: string;
  code: string;
  count: string;
  note?: string;
  kind: 'prev' | 'reuse' | 'replace';
}) => {
  const palette =
    kind === 'prev'
      ? 'border-sky-300/80 bg-white text-sky-900 dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100'
      : kind === 'reuse'
        ? 'border-teal-300/80 bg-white text-teal-900 dark:border-teal-700/70 dark:bg-slate-950/40 dark:text-teal-100'
        : 'border-rose-300/80 bg-white text-rose-900 dark:border-rose-700/70 dark:bg-slate-950/40 dark:text-rose-100';
  const countPalette =
    kind === 'prev'
      ? 'text-sky-700 dark:text-sky-300'
      : kind === 'reuse'
        ? 'text-teal-700 dark:text-teal-300'
        : 'text-rose-700 dark:text-rose-300';
  return (
    <article className={cn('flex flex-col gap-1 rounded-xl border p-sm sm:p-md', palette)}>
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {label}
      </span>
      <code className="font-mono text-xsm sm:text-sm font-bold break-all">{code}</code>
      <div className="flex flex-wrap items-baseline gap-2">
        <code className={cn('font-mono text-md sm:text-lg font-bold', countPalette)}>{count}</code>
        {note && (
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {note}
          </span>
        )}
      </div>
    </article>
  );
};
