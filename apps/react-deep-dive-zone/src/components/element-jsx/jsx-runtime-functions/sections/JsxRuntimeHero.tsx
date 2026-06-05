import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { JsxRuntimeFunctionsContent, RuntimeFunctionCard } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  AtomIcon,
  BookOpenIcon,
  BoxIcon,
  BracesIcon,
  CodeIcon,
  LayersIcon,
} from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['hero'] };

const iconMap = {
  box: BoxIcon,
  layers: LayersIcon,
  braces: BracesIcon,
} as const;

export const JsxRuntimeHero = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/jsx-runtime-functions.md"
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
          <CodeIcon className="h-4 w-4" aria-hidden="true" />
          {content.secondaryCta}
          <ArrowRightIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </HeroTextColumn>

    <HeroVisualColumn className="flex flex-col gap-md">
      <ul
        aria-label="JSX runtime 함수"
        className="grid grid-cols-1 sm:grid-cols-3 gap-md items-stretch"
      >
        {content.runtimeCards.map((card) => (
          <li key={card.id} className="flex">
            <RuntimeFnCard card={card} />
          </li>
        ))}
      </ul>

      {/* connector lines (dashed) */}
      <div className="relative h-7" aria-hidden="true">
        <span className="absolute left-[16%] top-0 h-full w-px border-l border-dashed border-sky-400/70 dark:border-sky-400/60" />
        <span className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-teal-400/70 dark:border-teal-400/60" />
        <span className="absolute right-[16%] top-0 h-full w-px border-l border-dashed border-violet-400/70 dark:border-violet-400/60" />
        <span className="absolute left-1/2 -bottom-1 inline-flex items-center justify-center w-6 h-6 -translate-x-1/2 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-sky-600 dark:text-sky-300">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <ResultCard title={content.resultTitle} body={content.resultBody} />
    </HeroVisualColumn>
  </HeroSection>
);

const RuntimeFnCard = ({ card }: { card: RuntimeFunctionCard }) => {
  const t = toneTokens[card.tone];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border p-md text-center',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mx-auto inline-flex items-center justify-center w-12 h-12 rounded-2xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className={cn('font-mono text-md font-bold tracking-tight', t.text)}>{card.name}</span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body1}</p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body2}</p>
    </article>
  );
};

const ResultCard = ({ title, body }: { title: string; body: string }) => (
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
        {title}
      </span>
      <p className="text-xsm leading-relaxed text-teal-900/90 dark:text-teal-100/80 break-keep">
        {body}
      </p>
    </div>
  </article>
);
