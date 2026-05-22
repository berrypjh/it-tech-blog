import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../react-elements/_shared/CodePanel';
import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { CompareCard, FunctionClassComponentFiberContent } from '../content';
import {
  ArrowDownIcon,
  ComponentIcon,
  GitForkIcon,
  HexagonIcon,
  SquareFunctionIcon,
} from '../icons';

type Props = { content: FunctionClassComponentFiberContent['compare'] };

const styleByKey = {
  function: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    text: 'text-emerald-700 dark:text-emerald-300',
    surface: 'bg-emerald-50/60 dark:bg-emerald-950/30',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    accent: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
  },
  class: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    text: 'text-violet-700 dark:text-violet-300',
    surface: 'bg-violet-50/60 dark:bg-violet-950/30',
    chip: 'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    accent: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
  },
} as const;

export const FunctionClassExampleComparison = ({ content }: Props) => (
  <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CompareCardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CompareCardView = ({ card }: { card: CompareCard }) => {
  const s = styleByKey[card.id];
  const Icon = card.id === 'function' ? SquareFunctionIcon : ComponentIcon;
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        s.border,
        s.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            s.accent,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono font-bold',
              s.chip,
            )}
          >
            {card.badge}
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold tracking-tight break-keep', s.text)}>
            {card.title}
          </h3>
        </div>
      </header>

      <CodePanel
        code={card.code}
        caption={card.id === 'function' ? 'function.jsx' : 'class.jsx'}
        language="JSX"
        showWindowDots
      />

      <div className="flex justify-center" aria-hidden="true">
        <span
          className={cn('inline-flex items-center justify-center w-8 h-8 rounded-full', s.accent)}
        >
          <ArrowDownIcon className="h-4 w-4" />
        </span>
      </div>

      <div className={cn('flex items-center gap-sm rounded-xl border-2 p-md', s.border, s.surface)}>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0',
            s.accent,
          )}
        >
          <HexagonIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-0.5 min-w-0">
          <code className={cn('font-mono text-sm font-extrabold', s.text)}>{card.resultTitle}</code>
          <code className="font-mono text-[11px] text-[var(--term-muted)] font-bold">
            {card.resultSubtitle}
          </code>
        </div>
      </div>
    </article>
  );
};
