import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ExampleCard, MarkChangesContent, Tone } from '../content';
import { ArrowDownIcon, FlagIcon, MoveIcon, SparklesIcon, Trash2Icon } from '../icons';

type Props = { content: MarkChangesContent['examples'] };

const iconMap = {
  flag: FlagIcon,
  trash: Trash2Icon,
  move: MoveIcon,
} as const;

/** rose는 의미색(삭제)이라 toneTokens에 없으니 그대로 유지한다. */
const roseTokens = {
  text: 'text-rose-700 dark:text-rose-200',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
};

const cardText = (tone: Tone) =>
  tone === 'rose' ? roseTokens.text : toneTokens[tone as ToneKey].text;
const cardChip = (tone: Tone) =>
  tone === 'rose' ? roseTokens.chip : toneTokens[tone as ToneKey].chip;

export const ChangeExamples = ({ content }: Props) => (
  <section id="examples" aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="examples"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card }: { card: ExampleCard }) => {
  const Icon = iconMap[card.iconName];
  const beforeTokens = card.before.split(' ').filter(Boolean);
  const afterTokens = card.after.split(' ').filter(Boolean);
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-3 rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            cardChip(card.tone),
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            cardChip(card.tone),
          )}
        >
          {card.badgeLabel}
        </span>
      </header>

      <h3 className={cn('text-md font-bold tracking-tight break-keep', cardText(card.tone))}>
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

      <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
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
  tone?: Tone;
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
