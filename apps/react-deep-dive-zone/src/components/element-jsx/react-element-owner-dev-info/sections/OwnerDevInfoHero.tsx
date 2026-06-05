import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { ReactElementOwnerDevInfoContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BookOpenIcon,
  BugIcon,
  CodeIcon,
  LayersIcon,
  ScanSearchIcon,
} from '../icons';

type Props = { content: ReactElementOwnerDevInfoContent['hero'] };

export const OwnerDevInfoHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/src/jsx/ReactJSXElement.js"
    gridColumns="lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)]"
  >
    <HeroTextColumn>
      <TerminalBadge size="md" className="w-fit">
        {content.badge}
      </TerminalBadge>

      <HeroTitle>
        <span className="block">{content.title.line1}</span>
        <span className="block text-[var(--term-accent)]">{content.title.line2}</span>
      </HeroTitle>

      <HeroDescription maxWidth="max-w-[60ch]">{content.description}</HeroDescription>

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
          <ScanSearchIcon className="h-4 w-4" aria-hidden="true" />
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
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
          )}
        >
          <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
          {content.secondaryCta}
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn>
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <h2
            id="heading-hero-diagram"
            className="text-xsm font-bold tracking-tight text-[var(--term-fg)]"
          >
            {content.diagramTitle}
          </h2>
        </header>

        <DiagramCard
          label={content.baseLabel}
          fields={content.baseFields}
          variant="base"
          icon={<CodeIcon className="h-4 w-4" />}
        />

        <div className="flex justify-center" aria-hidden="true">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-violet-600 dark:text-violet-300">
            <ArrowDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        <DiagramCard
          label={content.devLabel}
          fields={content.devFields}
          variant="dev"
          icon={<BugIcon className="h-4 w-4" />}
        />

        <div
          className={cn(
            'rounded-xl px-md py-3 mt-2',
            'bg-slate-900 text-slate-100 dark:bg-slate-950',
            'shadow-[0_2px_8px_-4px_rgba(15,23,42,0.6)]',
          )}
        >
          <p className="text-xsm font-bold leading-relaxed text-sky-300 break-keep">
            {content.bottomNote}
          </p>
        </div>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);

const variantClass = {
  base: {
    border: 'border-sky-300/70 dark:border-sky-800/60',
    chip: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
    text: 'text-sky-700 dark:text-sky-200',
  },
  dev: {
    border: 'border-violet-300/70 dark:border-violet-800/60',
    chip: 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200',
    text: 'text-violet-700 dark:text-violet-200',
  },
} as const;

const DiagramCard = ({
  label,
  fields,
  variant,
  icon,
}: {
  label: string;
  fields: { id: string; label: string }[];
  variant: keyof typeof variantClass;
  icon: React.ReactNode;
}) => {
  const v = variantClass[variant];
  return (
    <article
      className={cn('flex flex-col gap-sm rounded-xl border p-md bg-[var(--term-bg)]', v.border)}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-lg border',
            v.chip,
          )}
        >
          {icon}
        </span>
        <h3 className={cn('font-mono text-xsm font-bold tracking-tight', v.text)}>{label}</h3>
      </header>
      <ul className="flex flex-wrap gap-1.5">
        {fields.map((field) => (
          <li key={field.id}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-mono font-bold tracking-tight',
                v.chip,
              )}
            >
              {field.label}
            </code>
          </li>
        ))}
      </ul>
    </article>
  );
};
