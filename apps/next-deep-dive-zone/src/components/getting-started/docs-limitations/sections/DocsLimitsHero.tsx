import { cn } from '@it-tech-blog/utils';

import { HeroTitle } from '../../../shared/HeroTitle';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { CompareCard, DocsLimitsContent, ToneKey } from '../content';
import { ArrowRightIcon, CodeIcon, DocsIcon } from '../icons';

type Props = { content: DocsLimitsContent['hero'] };

const ctaBase =
  'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md text-xsm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] w-full sm:w-auto';

const titleTones = ['text-blue-600 dark:text-blue-300', 'text-cyan-600 dark:text-cyan-300'];

const Card = ({
  card,
  tone,
  icon: Icon,
}: {
  card: CompareCard;
  tone: ToneKey;
  icon: typeof DocsIcon;
}) => {
  const cls =
    tone === 'blue' ? 'text-blue-600 dark:text-blue-300' : 'text-cyan-600 dark:text-cyan-300';
  const chip =
    tone === 'blue'
      ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200'
      : 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-200';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <h2 className={cn('text-md sm:text-lg font-bold tracking-tight', cls)}>{card.title}</h2>
          <p className="text-[11px] text-[var(--term-muted)] break-keep">{card.summary}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {card.items.map((item) => (
          <li key={item}>
            <div className="flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-sm py-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-block h-1.5 w-1.5 rounded-full shrink-0',
                  tone === 'blue' ? 'bg-blue-500' : 'bg-cyan-500',
                )}
              />
              <span className="text-xsm font-medium text-[var(--term-fg)] break-keep">{item}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xsm font-bold',
            chip,
          )}
        >
          {card.pill}
        </span>
      </div>
    </article>
  );
};

export const DocsLimitsHero = ({ content }: Props) => {
  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt command="diff" path="docs.md source.code" />

      <div className="mt-lg flex flex-col gap-md">
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          {content.title.lines.map((line, i) => (
            <span key={i} className="block">
              <span className={titleTones[i] ?? 'text-[var(--term-accent)]'}>{line.accent}</span>
              {line.rest}
            </span>
          ))}
        </HeroTitle>

        <p className="rounded-md border-l-2 border-[var(--term-accent)] bg-[var(--term-surface)] px-md py-2 text-sm sm:text-md font-bold leading-snug text-cyan-700 dark:text-cyan-300 break-keep">
          {content.highlight.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[72ch]">
          {content.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-sm pt-xs">
          <a
            href="#section-connector"
            className={cn(
              ctaBase,
              'bg-[var(--term-accent)] text-[var(--term-bg)] hover:opacity-90',
            )}
          >
            {content.primaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
          <a
            href="#section-transformer"
            className={cn(
              ctaBase,
              'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
            )}
          >
            {content.secondaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* 비교 카드: 공식 문서 | → | 소스코드 */}
      <div className="mt-xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
        <Card card={content.docs} tone="blue" icon={DocsIcon} />

        <div className="relative flex lg:flex-col items-center justify-center gap-1">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
          />
          <span
            aria-hidden="true"
            className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
          />
          <span className="relative inline-flex items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 text-xsm font-bold text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
            →
          </span>
          <span className="relative hidden lg:block text-[9px] text-[var(--term-muted)] text-center max-w-[7rem] break-keep">
            {content.connectorNote}
          </span>
        </div>

        <Card card={content.code} tone="cyan" icon={CodeIcon} />
      </div>
    </section>
  );
};
