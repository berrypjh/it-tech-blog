import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../start/_shared/TerminalPrompt';
import { toneTokens } from '../../../start/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import type { HeroExplanationCard, JsxIsNotHtmlContent } from '../content';
import { ArrowRightIcon, BracesIcon, EyeIcon, FileTextIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['hero'] };

export const JsxHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react/jsx-is-not-html.md" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text column */}
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center min-w-[2.5rem] px-2 py-1',
              'rounded-md text-xsm font-bold tabular-nums tracking-wider',
              'bg-sky-600 text-white',
              'dark:bg-sky-500 dark:text-slate-950',
            )}
          >
            {content.badge}
          </span>
          <span className="text-xxsm uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {content.eyebrow}
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-3xl sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">
            <span className="bg-gradient-to-r from-sky-600 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-fuchsia-300">
              {content.title.line2}
            </span>
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[56ch] break-keep">
          {content.description}
        </p>

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
            <FileTextIcon className="h-4 w-4" aria-hidden="true" />
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
            {content.secondaryCta}
            <ArrowRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>

      {/* Right visual column */}
      <div className="order-first lg:order-none flex flex-col gap-md min-w-0">
        <CodePanel code={content.code} showWindowDots caption={content.codeCaption} size="md" />

        {/* connector lines: 코드창에서 두 카드로 내려가는 점선 + 보조 점 */}
        <div className="relative h-6" aria-hidden="true">
          <span className="absolute left-[18%] top-0 h-full w-px border-l border-dashed border-teal-400/70 dark:border-teal-400/60" />
          <span className="absolute left-[18%] -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-400/80" />
          <span className="absolute right-[18%] top-0 h-full w-px border-l border-dashed border-violet-400/70 dark:border-violet-400/60" />
          <span className="absolute right-[18%] -top-1 h-2 w-2 translate-x-1/2 rounded-full bg-violet-400/80" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          {content.explanationCards.map((card) => (
            <HeroExplanationView key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const HeroExplanationView = ({ card }: { card: HeroExplanationCard }) => {
  const t = toneTokens[card.tone];
  const Icon = card.iconName === 'eye' ? EyeIcon : BracesIcon;
  return (
    <article
      className={cn(
        'group flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-md border',
            t.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.label}
        </span>
      </div>
      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)]">{card.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{card.body}</p>
    </article>
  );
};
