import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { HeroCallout, ReactElementObjectStructureContent } from '../content';
import { ArrowRightIcon, BookOpenIcon, ScanSearchIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['hero'] };

export const ElementObjectHero = ({ content }: Props) => (
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

    <HeroVisualColumn className="flex flex-col gap-md">
      <div
        className={cn(
          'flex flex-col gap-sm rounded-2xl border p-md',
          'border-[var(--term-border)] bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="inline-flex w-fit items-center rounded-full border border-sky-300/80 bg-sky-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200">
          {content.codeCardLabel}
        </span>
        <CodePreviewPanel code={content.code} language="JS" showWindowDots caption="ReactElement" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
        {content.callouts.map((callout) => (
          <li key={callout.id}>
            <CalloutPill callout={callout} />
          </li>
        ))}
      </ul>
    </HeroVisualColumn>
  </HeroSection>
);

const CalloutPill = ({ callout }: { callout: HeroCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border p-2.5 bg-[var(--term-bg)]',
        'shadow-[0_1px_0_var(--term-border)]',
        t.border,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-md border px-2 py-1 text-[11px] font-mono font-bold tracking-tight shrink-0',
          t.chip,
        )}
      >
        {callout.field}
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cn('text-xsm font-bold tracking-tight', t.text)}>{callout.label}</span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {callout.description}
        </p>
      </div>
    </article>
  );
};
