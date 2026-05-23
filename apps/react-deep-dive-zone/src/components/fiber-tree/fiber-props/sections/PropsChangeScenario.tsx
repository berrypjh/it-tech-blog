import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../element-jsx/_shared/CodePanel';
import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberPropsContent } from '../content';
import { ArrowDownIcon, GitCompareIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberPropsContent['scenario'] };

export const PropsChangeScenario = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: previous → next flow */}
      <div className="flex flex-col gap-sm">
        <RenderCard label={content.previousLabel} code={content.previousCode} tone="emerald" />
        <ScenarioArrow />
        <RenderCard label={content.nextLabel} code={content.nextCode} tone="sky" />
      </div>

      {/* Right: current fiber internal state */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-3xl border-2 border-dashed p-md sm:p-lg',
          'border-slate-300/80 bg-slate-50/60 dark:border-slate-700/60 dark:bg-slate-900/40',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {`// ${content.stateLabel}`}
        </h3>
        <div className="flex flex-col gap-2 mt-1">
          <StateRow line={content.stateMemoized} kind="memoizedProps" />
          <StateRow line={content.statePending} kind="pendingProps" />
        </div>
      </article>
    </div>

    {/* Emphasis banner */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-300/80 bg-amber-50/70',
        'dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
        {content.bannerPrefix}
        <ValueBadge tone="emerald">{content.bannerOldValue}</ValueBadge>
        {content.bannerMid}
        <ValueBadge tone="sky">{content.bannerNewValue}</ValueBadge>
        {content.bannerSuffix}
      </p>
    </div>
  </section>
);

const RenderCard = ({
  label,
  code,
  tone,
}: {
  label: string;
  code: string;
  tone: 'emerald' | 'sky';
}) => {
  const t = {
    emerald:
      'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
    sky: 'border-sky-200/80 bg-sky-50/40 dark:border-sky-800/60 dark:bg-sky-950/20',
  }[tone];
  const labelColor = {
    emerald: 'text-emerald-800 dark:text-emerald-200',
    sky: 'text-sky-800 dark:text-sky-200',
  }[tone];
  return (
    <article className={cn('rounded-2xl border-2 p-md', t)}>
      <h3 className={cn('text-xsm font-bold tracking-tight mb-sm', labelColor)}>{label}</h3>
      <CodePanel code={code} caption="render.jsx" language="JSX" size="sm" />
    </article>
  );
};

const ScenarioArrow = () => (
  <div className="flex justify-center py-1" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
      <span className="hidden lg:inline">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
      <span className="lg:hidden">
        <ArrowDownIcon className="h-4 w-4" />
      </span>
    </span>
  </div>
);

const StateRow = ({ line, kind }: { line: string; kind: 'memoizedProps' | 'pendingProps' }) => {
  const colors = {
    memoizedProps:
      'text-emerald-800 dark:text-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-800/60',
    pendingProps:
      'text-sky-800 dark:text-sky-200 bg-sky-50/60 dark:bg-sky-950/30 border-sky-200/80 dark:border-sky-800/60',
  }[kind];
  return (
    <code
      className={cn(
        'block rounded-lg border px-3 py-2 font-mono text-xsm sm:text-sm font-bold break-all',
        colors,
      )}
    >
      {line}
    </code>
  );
};

const ValueBadge = ({ children, tone }: { children: React.ReactNode; tone: 'emerald' | 'sky' }) => {
  const colors = {
    emerald:
      'bg-emerald-100 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    sky: 'bg-sky-100 text-sky-800 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  }[tone];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-1.5 py-0 font-mono text-[12px] font-bold',
        colors,
      )}
    >
      {children}
    </span>
  );
};
