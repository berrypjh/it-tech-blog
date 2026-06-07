import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { ReactCreateElementContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, AtomIcon, BookOpenIcon, GitCompareIcon } from '../icons';

type Props = { content: ReactCreateElementContent['hero'] };

export const CreateElementHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/src/jsx/ReactJSXElement.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.9fr)_minmax(0,_1.1fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block font-mono text-[var(--term-accent)]">{content.title.line2}</span>
        <span className="block">{content.title.line3}</span>
      </HeroTitle>

      <HeroDescription>{content.description}</HeroDescription>

      <div className="flex flex-col sm:flex-row gap-sm pt-xs">
        <a
          href={content.primaryHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
            'bg-sky-600 text-white text-xsm font-bold tracking-tight',
            'transition-colors hover:bg-sky-700',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
          )}
        >
          <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
          {content.primaryCta}
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
        <a
          href={content.secondaryHref}
          className={cn(
            'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
            'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
            'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          )}
        >
          <GitCompareIcon className="h-4 w-4" aria-hidden="true" />
          {content.secondaryCta}
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn className="@container flex flex-col gap-md">
      <div className="grid grid-cols-1 @lg:grid-cols-2 gap-md">
        <HeroCodeCard
          label={content.leftCardLabel}
          code={content.leftCode}
          accent="sky"
          language="JSX"
        />
        <HeroCodeCard
          label={content.rightCardLabel}
          code={content.rightCode}
          accent="violet"
          language="JS"
        />
      </div>

      {/* Converging connectors (가로 2열일 때만) */}
      <div className="relative h-8 hidden @lg:block" aria-hidden="true">
        <span className="absolute left-[20%] top-0 h-full w-px border-l border-dashed border-sky-400/70 dark:border-sky-400/60" />
        <span className="absolute right-[20%] top-0 h-full w-px border-l border-dashed border-violet-400/70 dark:border-violet-400/60" />
        <span className="absolute left-1/2 -bottom-1 inline-flex items-center justify-center w-7 h-7 -translate-x-1/2 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <article
        className={cn(
          'flex items-center gap-md rounded-2xl border-2 p-md',
          'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-teal-300/80 bg-teal-100 text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200 shrink-0"
        >
          <AtomIcon className="h-7 w-7" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="font-mono text-md font-bold tracking-tight text-teal-700 dark:text-teal-200">
            {content.resultTitle}
          </span>
          <p className="text-xsm leading-relaxed text-teal-900/90 dark:text-teal-100/80 break-keep">
            {content.resultBody}
          </p>
        </div>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);

const accentMap = {
  sky: {
    chip: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
    border: 'border-sky-300/70 dark:border-sky-800/60',
  },
  violet: {
    chip: 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200',
    border: 'border-violet-300/70 dark:border-violet-800/60',
  },
} as const;

const HeroCodeCard = ({
  label,
  code,
  accent,
  language,
}: {
  label: string;
  code: string;
  accent: keyof typeof accentMap;
  language: string;
}) => {
  const a = accentMap[accent];
  return (
    <article
      className={cn(
        'group flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        a.border,
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          a.chip,
        )}
      >
        {label}
      </span>
      <CodePreviewPanel code={code} language={language} />
    </article>
  );
};
