import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { CreateFiberFromTypeAndPropsContent, JsxToFiberCard } from '../content';
import { ArrowDownIcon, BracesIcon, TagIcon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['jsxCards'] };

const styleByKey = {
  div: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    text: 'text-emerald-700 dark:text-emerald-300',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    badge:
      'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    label: 'string',
  },
  function: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    text: 'text-sky-700 dark:text-sky-300',
    dot: 'bg-sky-500 dark:bg-sky-400',
    badge:
      'bg-sky-100 text-sky-800 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    label: 'function',
  },
  class: {
    border: 'border-cyan-300/80 dark:border-cyan-700/70',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500/70',
    text: 'text-cyan-700 dark:text-cyan-300',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    badge:
      'bg-cyan-100 text-cyan-800 border-cyan-300/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-700/70',
    label: 'class',
  },
  fragment: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400',
    badge:
      'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    label: 'symbol',
  },
} as const;

export const JsxToFiberTagCards = ({ content }: Props) => (
  <section id="jsx-cards" aria-labelledby="heading-jsx-cards" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="jsx-cards"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: JsxToFiberCard }) => {
  const s = styleByKey[card.id];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-sm rounded-2xl border-2 p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        s.border,
        s.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold',
            s.text,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', s.dot)} />
          {s.label}
        </span>
      </header>

      <pre
        className={cn(
          'overflow-x-auto rounded-lg border border-slate-800 bg-slate-950',
          'px-sm py-2 font-mono text-xsm leading-relaxed text-slate-100',
        )}
      >
        <code>{card.code}</code>
      </pre>

      <code className="font-mono text-[11px] leading-relaxed text-[var(--term-muted)] break-all">
        {card.typeLabel}
      </code>

      <div className="flex justify-center py-1" aria-hidden="true">
        <span
          className={cn(
            'inline-flex items-center justify-center w-7 h-7 rounded-full border',
            s.badge,
          )}
        >
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      <div
        className={cn(
          'inline-flex items-center justify-center gap-1.5 rounded-md border px-2 py-1.5',
          'font-mono text-xsm font-bold',
          s.badge,
        )}
      >
        <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {card.result}
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
