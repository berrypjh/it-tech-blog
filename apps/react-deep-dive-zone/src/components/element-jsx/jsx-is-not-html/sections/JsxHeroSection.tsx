import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { toneTokens } from '../../../shared/tones';
import type { HeroExplanationCard, JsxIsNotHtmlContent } from '../content';
import { ArrowRightIcon, BracesIcon, EyeIcon, FileTextIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['hero'] };

export const JsxHeroSection = ({ content }: Props) => (
  <HeroSection
    promptCommand="cat"
    promptPath="packages/react/jsx-is-not-html.md"
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
    </HeroTextColumn>

    <HeroVisualColumn className="@container flex flex-col gap-md">
      <CodePanel code={content.code} showWindowDots caption={content.codeCaption} size="md" />

      {/* connector lines: 코드창에서 두 카드로 내려가는 점선 + 보조 점 (가로 2열일 때만) */}
      <div className="relative h-6 hidden @lg:block" aria-hidden="true">
        <span className="absolute left-[18%] top-0 h-full w-px border-l border-dashed border-teal-400/70 dark:border-teal-400/60" />
        <span className="absolute left-[18%] -top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-teal-400/80" />
        <span className="absolute right-[18%] top-0 h-full w-px border-l border-dashed border-violet-400/70 dark:border-violet-400/60" />
        <span className="absolute right-[18%] -top-1 h-2 w-2 translate-x-1/2 rounded-full bg-violet-400/80" />
      </div>

      <div className="grid grid-cols-1 @lg:grid-cols-2 gap-md">
        {content.explanationCards.map((card) => (
          <HeroExplanationView key={card.id} card={card} />
        ))}
      </div>
    </HeroVisualColumn>
  </HeroSection>
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
