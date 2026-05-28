import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { UpdatePhaseContent, WhatChangedItem } from '../content';
import { ArrowDownIcon, CheckCircleIcon, LockIcon, PencilIcon, ReplaceIcon } from '../icons';

type Props = { content: UpdatePhaseContent['beforeAfter'] };

export const UpdateBeforeAfterSection = ({ content }: Props) => (
  <section
    id="before-after"
    aria-labelledby="heading-before-after"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="before-after"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ReplaceIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_minmax(0,_0.85fr)] gap-3 items-stretch">
      <BeforeAfterCard
        title={content.beforeTitle}
        dom={content.beforeDom}
        screen={content.beforeScreen}
        variant="before"
      />
      <MiddleFlow middle={content.middle} />
      <BeforeAfterCard
        title={content.afterTitle}
        dom={content.afterDom}
        screen={content.afterScreen}
        variant="after"
      />
      <WhatChangedCard title={content.whatChangedTitle} items={content.whatChangedItems} />
    </div>
  </section>
);

const BeforeAfterCard = ({
  title,
  dom,
  screen,
  variant,
}: {
  title: string;
  dom: string;
  screen: string;
  variant: 'before' | 'after';
}) => {
  const isAfter = variant === 'after';
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        isAfter
          ? 'border-sky-300/80 dark:border-sky-700/70'
          : 'border-slate-300/70 dark:border-slate-700/60',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <h3
          className={cn(
            'text-xsm sm:text-sm font-bold uppercase tracking-wider break-keep',
            isAfter ? 'text-sky-700 dark:text-sky-300' : 'text-slate-700 dark:text-slate-200',
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            isAfter
              ? 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200'
              : 'border-slate-200/80 bg-slate-50 text-slate-700 dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-200',
          )}
        >
          {isAfter ? 'after' : 'before'}
        </span>
      </header>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          DOM
        </span>
        <pre
          className={cn(
            'overflow-x-auto rounded-lg border p-sm text-[11px] sm:text-xsm leading-snug font-mono',
            isAfter
              ? 'border-sky-200/60 bg-sky-50/50 text-sky-900 dark:border-sky-800/50 dark:bg-sky-950/25 dark:text-sky-100'
              : 'border-slate-200/60 bg-slate-50/50 text-slate-900 dark:border-slate-700/50 dark:bg-slate-900/30 dark:text-slate-100',
          )}
        >
          <code>{dom}</code>
        </pre>
      </div>

      <div className="flex flex-col gap-1.5 mt-1">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          화면 / screen
        </span>
        <div
          className={cn(
            'flex items-center justify-center rounded-lg border px-3 py-3',
            isAfter
              ? 'border-sky-200/80 bg-sky-100/60 dark:border-sky-800/60 dark:bg-sky-950/40'
              : 'border-slate-200/80 bg-white dark:border-slate-700/60 dark:bg-slate-950/40',
          )}
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-bold',
              isAfter
                ? 'border-sky-400/80 bg-sky-500 text-white opacity-90 dark:border-sky-500/70 dark:bg-sky-600 dark:text-white'
                : 'border-slate-300 bg-white text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100',
            )}
          >
            {isAfter && <LockIcon aria-hidden="true" className="h-3.5 w-3.5" />}
            <span>{screen}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

const MiddleFlow = ({ middle }: { middle: UpdatePhaseContent['beforeAfter']['middle'] }) => (
  <div className="flex flex-col items-stretch justify-center gap-2 py-1 lg:py-0">
    <MiniStep
      title={middle.step1Title}
      note={middle.step1Note}
      icon={<PencilIcon className="h-3.5 w-3.5" />}
      tone="sky"
    />
    <ArrowDownIcon aria-hidden="true" className="h-4 w-4 mx-auto text-[var(--term-dim)]" />
    <MiniStep
      title={middle.step2Title}
      note={middle.step2Note}
      icon={<ReplaceIcon className="h-3.5 w-3.5" />}
      tone="blue"
    />
  </div>
);

const MiniStep = ({
  title,
  note,
  icon,
  tone,
}: {
  title: string;
  note: string;
  icon: React.ReactNode;
  tone: 'sky' | 'blue';
}) => {
  const t = commitToneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-0.5 rounded-xl border-2 px-sm py-1.5 text-center',
        t.borderStrong,
        t.bg,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-7 w-7 items-center justify-center rounded-md border',
          t.chipSolid,
        )}
      >
        {icon}
      </span>
      <span className={cn('text-xsm font-bold break-keep', t.textStrong)}>{title}</span>
      <span className="text-[10px] font-mono leading-snug text-[var(--term-muted)] break-keep">
        {note}
      </span>
    </article>
  );
};

const WhatChangedCard = ({ title, items }: { title: string; items: WhatChangedItem[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md',
      'border-teal-200/80 bg-teal-50/50',
      'dark:border-teal-800/70 dark:bg-teal-950/25',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <CheckCircleIcon className="h-4 w-4" />
      </span>
      <h3 className="text-sm font-bold text-teal-900 dark:text-teal-100 break-keep">{title}</h3>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        const t = commitToneTokens[item.tone];
        return (
          <li key={item.text} className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border',
                t.chipSolid,
              )}
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  </article>
);
