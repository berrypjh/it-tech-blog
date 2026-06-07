import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { HeroDiagramItem, ReactElementTypeMeaningContent } from '../content';
import {
  ArrowRightIcon,
  BookOpenIcon,
  ScanSearchIcon,
  SparklesIcon,
  TagIcon,
  UserIcon,
} from '../icons';

type Props = { content: ReactElementTypeMeaningContent['hero'] };

const iconMap = {
  tag: TagIcon,
  user: UserIcon,
  sparkles: SparklesIcon,
} as const;

export const ElementTypeHero = ({ content }: Props) => (
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
        <span className="block">
          <span className="font-mono text-[var(--term-accent)]">type</span>
          <span>{content.title.line1.replace('type', '')}</span>
        </span>
        <span className="block">
          <span className="text-[var(--term-fg)]">{content.title.line2Accent}</span>
          <span>{content.title.line2After}</span>
        </span>
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
          '@container flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <h2
            id="heading-hero-diagram"
            className="text-xsm font-bold tracking-tight text-[var(--term-fg)]"
          >
            {content.diagramTitle}
          </h2>
          <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            diagram
          </span>
        </header>

        <ul className="grid grid-cols-1 @xl:grid-cols-3 gap-sm items-stretch">
          {content.diagramItems.map((item) => (
            <li key={item.id} className="flex min-w-0">
              <DiagramCard item={item} />
            </li>
          ))}
        </ul>

        {/* navy bottom note */}
        <div
          className={cn(
            'rounded-xl px-md py-3 mt-2',
            'bg-slate-900 text-slate-100 dark:bg-slate-950',
            'shadow-[0_2px_8px_-4px_rgba(15,23,42,0.6)]',
          )}
        >
          <p className="text-xsm font-bold tracking-tight text-sky-300">
            {content.bottomNoteTitle}
          </p>
          <p className="text-xsm leading-relaxed text-slate-300 break-keep">
            {content.bottomNoteBody}
          </p>
        </div>
      </article>
    </HeroVisualColumn>
  </HeroSection>
);

const DiagramCard = ({ item }: { item: HeroDiagramItem }) => {
  const t = toneTokens[item.tone];
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-2 rounded-xl border p-sm',
        'bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-9 h-9 rounded-lg border', t.chip)}
      >
        <Icon className="h-4 w-4" />
      </span>
      <code className={cn('font-mono text-xsm font-bold tracking-tight break-all', t.text)}>
        {item.value}
      </code>
      <p className="text-[11px] font-bold text-[var(--term-fg)] break-keep">{item.title}</p>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider',
          t.chip,
        )}
      >
        {item.category}
      </span>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};
