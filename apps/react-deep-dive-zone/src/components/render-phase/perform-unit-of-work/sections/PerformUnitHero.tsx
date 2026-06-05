import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { PerformUnitContent } from '../content';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  LightbulbIcon,
  SettingsIcon,
} from '../icons';

type Props = { content: PerformUnitContent['hero'] };

export const PerformUnitHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="reconciler/perform-unit-of-work.md"
    promptSuffix={<span className="text-[var(--term-dim)]"> {'// fiber-by-fiber'}</span>}
    gridColumns="lg:grid-cols-[minmax(0,_0.84fr)_minmax(0,_1.16fr)]"
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
      <HeroFlow diagram={content.diagram} />
    </HeroVisualColumn>
  </HeroSection>
);

const HeroFlow = ({ diagram }: { diagram: PerformUnitContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-violet-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-violet-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {'// fiber → beginWork → branch'}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        decision flow
      </span>
    </header>

    <div className="flex flex-col items-center gap-2">
      {/* Step 1 */}
      <BoxNode title={diagram.step1.title} icon={<BoxIcon className="h-4 w-4" />} tone="sky" />
      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 text-sky-500/80 dark:text-sky-300/80"
      />
      {/* Step 2 */}
      <BoxNode title={diagram.step2.title} icon={<SettingsIcon className="h-4 w-4" />} tone="sky" />
      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
      />
      {/* Decision diamond */}
      <Diamond title={diagram.decision.title} />

      {/* Branches */}
      <div className="mt-2 grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
        <BranchCard
          kind="yes"
          label={diagram.yes.label}
          title={diagram.yes.title}
          description={diagram.yes.description}
        />
        <BranchCard
          kind="no"
          label={diagram.no.label}
          title={diagram.no.title}
          description={diagram.no.description}
        />
      </div>
    </div>
  </div>
);

const BoxNode = ({
  title,
  icon,
  tone,
}: {
  title: string;
  icon: React.ReactNode;
  tone: 'sky' | 'violet';
}) => {
  const isSky = tone === 'sky';
  return (
    <article
      className={cn(
        'inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-2xl border-2 px-md py-2.5',
        isSky
          ? 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
          isSky
            ? 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60'
            : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        {icon}
      </span>
      <span
        className={cn(
          'text-xsm sm:text-sm font-bold leading-tight break-keep',
          isSky ? 'text-sky-800 dark:text-sky-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        {title}
      </span>
    </article>
  );
};

const Diamond = ({ title }: { title: string }) => (
  <div
    className={cn('relative flex items-center justify-center', 'h-24 w-[min(280px,100%)] sm:h-28')}
  >
    {/* rotated square as diamond */}
    <span
      aria-hidden="true"
      className={cn(
        'absolute inset-0 m-auto rotate-45',
        'h-[80%] w-[80%] rounded-xl border-2',
        'border-violet-300/80 bg-gradient-to-br from-sky-100 to-violet-100',
        'dark:border-violet-700/70 dark:from-sky-950/40 dark:to-violet-950/40',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    />
    <div className="relative flex flex-col items-center justify-center gap-1 text-center">
      <HelpCircleIcon aria-hidden="true" className="h-4 w-4 text-violet-700 dark:text-violet-200" />
      <span className="text-xsm sm:text-sm font-bold text-violet-900 dark:text-violet-100 break-keep">
        {title}
      </span>
    </div>
  </div>
);

const BranchCard = ({
  kind,
  label,
  title,
  description,
}: {
  kind: 'yes' | 'no';
  label: string;
  title: string;
  description: string;
}) => {
  const isYes = kind === 'yes';
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-2xl border-2 p-md',
        isYes
          ? 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/25'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/25',
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isYes
              ? 'border-teal-300/70 bg-white/70 text-teal-700 dark:bg-slate-950/60 dark:text-teal-200 dark:border-teal-700/60'
              : 'border-violet-300/70 bg-white/70 text-violet-700 dark:bg-slate-950/60 dark:text-violet-200 dark:border-violet-700/60',
          )}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
            isYes
              ? 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60'
              : 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          {isYes ? <ArrowDownIcon className="h-4 w-4" /> : <ArrowUpIcon className="h-4 w-4" />}
        </span>
      </header>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold leading-tight break-keep',
          isYes ? 'text-teal-800 dark:text-teal-100' : 'text-violet-800 dark:text-violet-100',
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          'text-[10px] sm:text-xsm leading-snug break-keep',
          isYes
            ? 'text-teal-900/80 dark:text-teal-100/80'
            : 'text-violet-900/80 dark:text-violet-100/80',
        )}
      >
        {description}
      </p>
    </article>
  );
};
