import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { ExampleCard, MarkChangesContent } from '../content';
import { ArrowDownIcon, FlagIcon, MoveIcon, SparklesIcon, Trash2Icon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: MarkChangesContent['examples'] };

const iconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  move: MoveIcon,
} as const;

export const ChangeExamples = ({ content }: Props) => (
  <section id="examples" aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="examples"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {content.cards.map((card) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card }: { card: ExampleCard }) => {
  const palette = tonePalette[card.tone];
  const Icon = iconMap[card.iconName];
  const beforeTokens = card.before.split(' ').filter(Boolean);
  const afterTokens = card.after.split(' ').filter(Boolean);
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
        palette.border,
        palette.bg,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            palette.chip,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            palette.chip,
          )}
        >
          {card.badgeLabel}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', palette.text)}>
        {card.title}
      </h3>

      {/* before / after mini diagram */}
      <div className="flex flex-col gap-2">
        <TokenRow label="before" tokens={beforeTokens} mark={null} />
        <ArrowDownIcon
          aria-hidden="true"
          className={cn(
            'mx-auto h-5 w-5',
            card.tone === 'teal'
              ? 'text-teal-500/80 dark:text-teal-300/80'
              : card.tone === 'rose'
                ? 'text-rose-500/80 dark:text-rose-300/80'
                : 'text-amber-500/80 dark:text-amber-300/80',
          )}
        />
        <TokenRow
          label="after"
          tokens={afterTokens}
          mark={card.iconName === 'flag' ? 'insert' : card.iconName === 'trash' ? 'delete' : 'move'}
          tone={card.tone}
        />
      </div>

      <p className="mt-auto text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};

const TokenRow = ({
  label,
  tokens,
  mark,
  tone,
}: {
  label: string;
  tokens: string[];
  mark: 'insert' | 'delete' | 'move' | null;
  tone?: 'teal' | 'rose' | 'amber' | 'sky' | 'violet' | 'indigo';
}) => (
  <div className="flex flex-col gap-1">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <div className="flex flex-wrap items-center gap-1">
      {tokens.map((tok, idx) => {
        const isLast = idx === tokens.length - 1;
        // For "after" rows, highlight last token for insert; the moving tokens for move; nothing else for delete
        let highlight = false;
        let isMoved = false;
        if (mark === 'insert') {
          highlight = isLast;
        } else if (mark === 'move') {
          // For A B C → B A C: tokens 0 and 1 moved
          isMoved = idx === 0 || idx === 1;
        }
        const t = tone ?? 'sky';
        return (
          <span
            key={`${tok}-${idx}`}
            className={cn(
              'inline-flex h-8 min-w-[2rem] items-center justify-center rounded-md border font-mono text-xsm font-bold',
              highlight
                ? t === 'teal'
                  ? 'border-teal-400/80 bg-teal-100 text-teal-800 dark:border-teal-600/70 dark:bg-teal-900/60 dark:text-teal-100'
                  : 'border-sky-400/80 bg-sky-100 text-sky-800 dark:border-sky-600/70 dark:bg-sky-900/60 dark:text-sky-100'
                : isMoved
                  ? 'border-amber-400/80 bg-amber-100 text-amber-800 dark:border-amber-600/70 dark:bg-amber-900/60 dark:text-amber-100'
                  : 'border-slate-300/80 bg-white text-slate-700 dark:border-slate-700/70 dark:bg-slate-950/40 dark:text-slate-200',
            )}
          >
            {tok}
          </span>
        );
      })}
    </div>
  </div>
);
