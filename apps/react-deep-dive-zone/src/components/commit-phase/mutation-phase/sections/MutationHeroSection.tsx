import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { commitToneTokens } from '../../_shared/tones';
import type { HeroFlagCard, HeroFlagIcon, HeroOpCard, MutationPhaseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LightbulbIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '../icons';

type Props = { content: MutationPhaseContent['hero'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

export const MutationHeroSection = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="reconciler/mutation-phase.md"
      suffix={<span className="text-[var(--term-dim)]"> {'// flags → host op'}</span>}
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.22fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.3rem] xl:text-[2.6rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-teal-600 via-sky-500 to-rose-500 bg-clip-text text-transparent',
              'dark:from-teal-300 dark:via-sky-300 dark:to-rose-300',
            )}
          >
            {content.title.line2}
          </span>
          <span className="block">{content.title.line3}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/60',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.insight}
          </p>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: MutationPhaseContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/55 via-white to-teal-50/55',
      'dark:from-sky-950/25 dark:via-[var(--term-bg)] dark:to-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] truncate">
        {`// ${diagram.arrowLabel}`}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
        flags → ops
      </span>
    </header>

    {/* Desktop: 3 columns */}
    <div className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <ColumnGroup title={diagram.leftTitle} cards={diagram.leftCards} variant="flag" />
      <CenterArrow label={diagram.arrowLabel} direction="right" />
      <ColumnGroup title={diagram.rightTitle} cards={diagram.rightCards} variant="op" />
    </div>

    {/* Mobile: vertical */}
    <div className="md:hidden flex flex-col">
      <ColumnGroup title={diagram.leftTitle} cards={diagram.leftCards} variant="flag" />
      <CenterArrow label={diagram.arrowLabel} direction="down" />
      <ColumnGroup title={diagram.rightTitle} cards={diagram.rightCards} variant="op" />
    </div>
  </div>
);

const ColumnGroup = ({
  title,
  cards,
  variant,
}: {
  title: string;
  cards: HeroFlagCard[] | HeroOpCard[];
  variant: 'flag' | 'op';
}) => (
  <div className="flex flex-col gap-2">
    <h3
      className={cn(
        'text-[11px] sm:text-xsm font-bold uppercase tracking-wider break-keep text-center',
        variant === 'flag' ? 'text-sky-700 dark:text-sky-300' : 'text-teal-700 dark:text-teal-300',
      )}
    >
      {title}
    </h3>
    <ul className="flex flex-col gap-2">
      {cards.map((card) => (
        <li key={card.title}>
          <FlagOrOpCard card={card} variant={variant} />
        </li>
      ))}
    </ul>
  </div>
);

const FlagOrOpCard = ({
  card,
  variant,
}: {
  card: HeroFlagCard | HeroOpCard;
  variant: 'flag' | 'op';
}) => {
  const Icon = iconMap[card.iconName];
  const t = commitToneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex items-center gap-2 rounded-xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col min-w-0">
        <span
          className={cn(
            'text-xsm font-bold leading-tight break-keep',
            variant === 'flag' ? cn('font-mono', t.text) : t.textStrong,
          )}
        >
          {card.title}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {card.subtitle}
        </span>
      </div>
    </article>
  );
};

const CenterArrow = ({ label, direction }: { label: string; direction: 'right' | 'down' }) => (
  <div
    className={cn(
      'flex items-center justify-center',
      direction === 'right' ? 'flex-col py-2' : 'flex-col py-2',
    )}
  >
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full border-2',
        'border-teal-300/80 bg-gradient-to-br from-teal-100 to-sky-100',
        'dark:border-teal-700/70 dark:from-teal-950/70 dark:to-sky-950/60',
        'shadow-[0_2px_0_var(--term-border)]',
        'ring-2 ring-teal-300/30 dark:ring-teal-500/20',
        direction === 'right' ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-10 w-10',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'text-teal-700 dark:text-teal-200',
          direction === 'right' ? 'rotate-0' : 'rotate-90',
        )}
      >
        {direction === 'right' ? (
          <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <ArrowDownIcon className="h-5 w-5" />
        )}
      </span>
    </div>
    <span className="mt-1 inline-flex items-center rounded-md border bg-white px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-teal-700 border-teal-200/80 dark:bg-slate-950 dark:text-teal-200 dark:border-teal-800/60">
      {label}
    </span>
  </div>
);
