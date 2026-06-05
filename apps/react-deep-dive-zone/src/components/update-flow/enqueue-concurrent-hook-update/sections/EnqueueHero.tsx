import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type {
  EnqueueConcurrentHookUpdateContent,
  FourElement,
  FourElementIconName,
} from '../content';
import {
  ArrowDownIcon,
  DatabaseIcon,
  FileTextIcon,
  FlagIcon,
  FunctionSquareIcon,
  SquareDashedIcon,
} from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['hero'] };

const iconMap: Record<FourElementIconName, typeof SquareDashedIcon> = {
  squareDashed: SquareDashedIcon,
  database: DatabaseIcon,
  fileText: FileTextIcon,
  flag: FlagIcon,
};

export const EnqueueHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="grep -n"
    promptPath="enqueueConcurrentHookUpdate"
    promptSuffix={
      <span className="text-[var(--term-dim)]">
        {' '}
        packages/react-reconciler/src/ReactFiberConcurrentUpdates.js
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
        <span className="block">{content.title.line2}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[58ch]">{content.description}</HeroDescription>

      <div className="flex flex-wrap items-center gap-2 pt-2 text-xxsm font-mono text-[var(--term-muted)]">
        <span className="rounded-md border border-sky-300/70 bg-sky-50/70 px-2 py-0.5 text-sky-700 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-200">
          fiber
        </span>
        <span className="rounded-md border border-emerald-300/70 bg-emerald-50/70 px-2 py-0.5 text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
          queue
        </span>
        <span className="rounded-md border border-violet-300/70 bg-violet-50/70 px-2 py-0.5 text-violet-700 dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200">
          update
        </span>
        <span className="rounded-md border border-amber-300/70 bg-amber-50/70 px-2 py-0.5 text-amber-700 dark:border-amber-700/60 dark:bg-amber-950/40 dark:text-amber-200">
          lane
        </span>
        <span className="text-[var(--term-dim)]">→</span>
        <span className="rounded-md border border-slate-800 bg-slate-950 px-2 py-0.5 text-slate-100">
          enqueue…
        </span>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn className="min-w-0">
      <HeroDiagram content={content} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroDiagram = ({ content }: { content: EnqueueConcurrentHookUpdateContent['hero'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/35 via-white to-amber-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-amber-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* 4 element cards */}
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {content.elements.map((el) => (
        <li key={el.id} className="flex">
          <ElementCard element={el} />
        </li>
      ))}
    </ul>

    {/* Converging dashed connectors */}
    <div aria-hidden="true" className="relative h-10 sm:h-12 mt-1">
      {/* dashed vertical lines from each card column toward center */}
      <svg
        viewBox="0 0 400 56"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <pattern id="dot" patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <g className="text-sky-300 dark:text-sky-700">
          <line x1="50" y1="0" x2="200" y2="48" stroke="currentColor" strokeDasharray="3 3" />
        </g>
        <g className="text-emerald-300 dark:text-emerald-700">
          <line x1="150" y1="0" x2="200" y2="48" stroke="currentColor" strokeDasharray="3 3" />
        </g>
        <g className="text-violet-300 dark:text-violet-700">
          <line x1="250" y1="0" x2="200" y2="48" stroke="currentColor" strokeDasharray="3 3" />
        </g>
        <g className="text-amber-300 dark:text-amber-700">
          <line x1="350" y1="0" x2="200" y2="48" stroke="currentColor" strokeDasharray="3 3" />
        </g>
        <g className="text-sky-400 dark:text-sky-500">
          <polygon points="195,42 205,42 200,52" fill="currentColor" />
        </g>
      </svg>
    </div>

    {/* Function card */}
    <div
      className={cn(
        'relative rounded-3xl border-2 p-md sm:p-lg overflow-hidden',
        'border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-slate-100',
        'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7)]',
      )}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-200"
        >
          <FunctionSquareIcon className="h-4 w-4" />
        </span>
        <span className="text-[10px] uppercase tracking-wider font-mono text-sky-200/80">
          dispatch · register · find root
        </span>
      </header>

      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 px-3 py-3 font-mono text-xsm sm:text-sm leading-[1.7] text-slate-100">
        <code>
          <span className="text-amber-300 font-bold">enqueueConcurrentHookUpdate</span>
          <span className="text-slate-400">(</span>
          <span className="text-sky-200">fiber</span>
          <span className="text-slate-400">,</span> <span className="text-emerald-200">queue</span>
          <span className="text-slate-400">,</span> <span className="text-violet-200">update</span>
          <span className="text-slate-400">,</span> <span className="text-amber-200">lane</span>
          <span className="text-slate-400">);</span>
        </code>
      </pre>

      <p className="mt-2 text-[10px] font-mono text-sky-200/80 break-keep">
        {content.functionCard.caption}
      </p>
    </div>
  </div>
);

const ElementCard = ({ element }: { element: FourElement }) => {
  const Icon = iconMap[element.iconName];
  const t = toneTokens[element.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-2xl border-2 bg-[var(--term-bg)] p-sm w-full',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-1.5">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', t.dot)} />
      </header>
      <span className={cn('font-mono text-sm font-bold', t.text)}>{element.title}</span>
      <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {element.question}
      </span>
      <span
        aria-hidden="true"
        className="mt-auto inline-flex justify-center text-[var(--term-dim)]"
      >
        <ArrowDownIcon className="h-3 w-3" />
      </span>
    </article>
  );
};
