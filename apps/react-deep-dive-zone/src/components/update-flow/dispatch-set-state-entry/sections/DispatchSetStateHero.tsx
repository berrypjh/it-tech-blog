import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { DispatchSetStateEntryContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  FileCodeIcon,
  GitBranchIcon,
  SparklesIcon,
  UserIcon,
} from '../icons';

type Props = { content: DispatchSetStateEntryContent['hero'] };

export const DispatchSetStateHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="dispatchSetState"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberHooks.js
      </span>
    }
    gridColumns="lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
        <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          setCount
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[var(--term-accent)]">
          dispatchSetState
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
          internal
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ content }: { content: DispatchSetStateEntryContent['hero'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-emerald-50/40 via-white to-violet-50/40',
      'dark:from-emerald-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* Three cards row */}
    <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.25fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
      <SideCard
        tone="emerald"
        title={content.leftCard.title}
        code={content.leftCard.code}
        icon={<UserIcon className="h-4 w-4" />}
      />
      <Connector />
      <CenterCard content={content.centerCard} />
      <Connector />
      <SideCard
        tone="violet"
        title={content.rightCard.title}
        code={content.rightCard.code}
        icon={<FileCodeIcon className="h-4 w-4" />}
      />
    </div>

    {/* Down arrow */}
    <div aria-hidden="true" className="my-3 flex justify-center text-[var(--term-dim)]">
      <span className="flex flex-col items-center gap-0.5">
        <span className="block h-3 w-px bg-[var(--term-border)]" />
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
    </div>

    {/* Bottom callout */}
    <div
      className={cn(
        'rounded-2xl border-2 border-dashed px-md py-3 text-center',
        'border-sky-300/70 bg-white/70',
        'dark:border-sky-800/70 dark:bg-slate-950/40',
      )}
    >
      <span className="inline-flex items-center gap-2 text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
        <SparklesIcon
          aria-hidden="true"
          className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300"
        />
        {content.bottomCallout}
      </span>
    </div>
  </div>
);

type SideCardProps = {
  tone: 'emerald' | 'violet';
  title: string;
  code: string;
  icon: React.ReactNode;
};

const sideToneClass = {
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    iconBox:
      'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    title: 'text-emerald-800 dark:text-emerald-100',
  },
  violet: {
    border: 'border-violet-200/80 dark:border-violet-800/70',
    iconBox:
      'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    title: 'text-violet-800 dark:text-violet-100',
  },
} as const;

const SideCard = ({ tone, title, code, icon }: SideCardProps) => {
  const t = sideToneClass[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
            t.iconBox,
          )}
        >
          {icon}
        </span>
        <span className={cn('text-xsm font-bold leading-tight break-keep', t.title)}>{title}</span>
      </header>

      <pre
        className={cn(
          'mt-auto overflow-x-auto rounded-lg border px-2.5 py-2 font-mono text-[11.5px] leading-[1.6]',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <code>{code}</code>
      </pre>
    </article>
  );
};

const CenterCard = ({
  content,
}: {
  content: DispatchSetStateEntryContent['hero']['centerCard'];
}) => (
  <article
    className={cn(
      'relative flex flex-col gap-2 rounded-3xl border-2 p-sm sm:p-md',
      'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-slate-100',
      'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.65)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-200"
      >
        <GitBranchIcon className="h-4 w-4" />
      </span>
      <span className="text-[10px] uppercase tracking-wider font-mono text-sky-200/80">
        {content.title}
      </span>
    </header>

    <span className="block h-px w-full bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />

    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-center">
      <span className="block text-sm sm:text-md font-mono font-bold text-white tracking-tight">
        {content.main}
      </span>
      <span className="block mt-1 text-[11px] font-mono text-sky-200/80">{content.sub}</span>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
      <span className="rounded-md border border-sky-300/30 bg-sky-300/10 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-sky-200">
        entry
      </span>
      <span className="rounded-md border border-emerald-300/30 bg-emerald-300/10 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-emerald-200">
        lane
      </span>
      <span className="rounded-md border border-amber-300/30 bg-amber-300/10 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider text-amber-200">
        delegate
      </span>
    </div>
  </article>
);

const Connector = () => (
  <div
    aria-hidden="true"
    className="hidden sm:flex flex-col items-center justify-center gap-1 px-1"
  >
    <span
      className={cn(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-300',
      )}
    >
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);
