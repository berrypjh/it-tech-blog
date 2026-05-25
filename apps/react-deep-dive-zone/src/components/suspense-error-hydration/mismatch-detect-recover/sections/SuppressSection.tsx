import { cn } from '@it-tech-blog/utils';

import type { MismatchDetectRecoverContent, SuppressCard } from '../content';
import { EyeOffIcon, InfoIcon, LifeBuoyIcon, ShieldCheckIcon, TriangleAlertIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['suppress'] };

const cardStyle: Record<
  SuppressCard['role'],
  {
    border: string;
    iconChip: string;
    text: string;
    Icon: React.ComponentType<{ className?: string }>;
  }
> = {
  recovery: {
    border: 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-200',
    Icon: LifeBuoyIcon,
  },
  server: {
    border: 'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    text: 'text-blue-700 dark:text-blue-200',
    Icon: ShieldCheckIcon,
  },
  client: {
    border: 'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-700 dark:text-violet-200',
    Icon: EyeOffIcon,
  },
  mismatch: {
    border: 'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/60 dark:bg-rose-950/20',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-200',
    Icon: TriangleAlertIcon,
  },
  suppress: {
    border: 'border-amber-200/80 bg-amber-50/40 dark:border-amber-800/60 dark:bg-amber-950/20',
    iconChip:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
    text: 'text-amber-700 dark:text-amber-200',
    Icon: TriangleAlertIcon,
  },
};

export const SuppressSection = ({ content }: Props) => (
  <section aria-labelledby="suppress-heading" className="flex flex-col gap-md">
    <SectionHeader id="suppress-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-stretch">
      {/* code */}
      <article
        className={cn(
          'flex flex-col gap-2 overflow-hidden rounded-2xl border-2',
          'border-amber-200/80 bg-white dark:border-amber-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2 px-md pt-md">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/60 dark:text-amber-200"
          >
            <EyeOffIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xsm font-bold text-amber-700 dark:text-amber-200 break-keep">
            suppressHydrationWarning
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock
            code={content.code.content}
            fileLabel={content.code.fileLabel}
            language="tsx"
          />
        </div>
      </article>

      {/* 4 cards */}
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {content.cards.map((card) => {
          const style = cardStyle[card.role];
          const Icon = style.Icon;
          return (
            <li key={card.title}>
              <article
                className={cn(
                  'flex flex-col gap-2 h-full rounded-2xl border-2 p-md',
                  style.border,
                  'transition-transform motion-safe:hover:-translate-y-0.5',
                )}
              >
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                      style.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className={cn('text-sm font-bold break-keep', style.text)}>{card.title}</h3>
                </header>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>

    <p
      className={cn(
        'rounded-2xl border p-3 text-xsm text-[var(--term-fg)] break-keep',
        'border-amber-200 bg-amber-50/40 dark:border-amber-800/60 dark:bg-amber-950/20',
      )}
    >
      <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-bold mr-1">
        <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
        note ·
      </span>
      {content.note}
    </p>
  </section>
);
