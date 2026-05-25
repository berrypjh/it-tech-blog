import { cn } from '@it-tech-blog/utils';

import type { SuspendErrorCard, SuspenseHydrationLinkContent } from '../content';
import { ArrowRightIcon, LoaderIcon, TriangleAlertIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['serverPaths'] };

const cardStyle: Record<
  SuspendErrorCard['kind'],
  {
    border: string;
    bg: string;
    iconChip: string;
    text: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  suspend: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-700 dark:text-violet-200',
    Icon: LoaderIcon,
  },
  error: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-200',
    Icon: TriangleAlertIcon,
  },
};

export const ServerSuspendErrorSection = ({ content }: Props) => (
  <section aria-labelledby="server-paths-heading" className="flex flex-col gap-md">
    <SectionHeader id="server-paths-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md md:grid-cols-2">
      {content.cards.map((card) => {
        const style = cardStyle[card.kind];
        const Icon = style.Icon;
        return (
          <article
            key={card.kind}
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
              style.border,
              style.bg,
              'shadow-[0_2px_0_var(--term-border)]',
              'transition-transform motion-safe:hover:-translate-y-0.5',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  style.iconChip,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <h3 className={cn('text-md font-bold break-keep', style.text)}>{card.title}</h3>
            </header>
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {card.description}
            </p>
            <ol className="mt-auto flex flex-wrap items-center gap-1.5">
              {card.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-lg border bg-white px-2.5 py-1.5',
                      'dark:bg-[var(--term-bg)]',
                      'text-[11px] font-mono font-bold break-keep',
                      style.border,
                      style.text,
                    )}
                  >
                    {step}
                  </span>
                  {i < card.flow.length - 1 && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className={cn('h-3.5 w-3.5 shrink-0', style.text)}
                    />
                  )}
                </li>
              ))}
            </ol>
          </article>
        );
      })}
    </div>
  </section>
);
