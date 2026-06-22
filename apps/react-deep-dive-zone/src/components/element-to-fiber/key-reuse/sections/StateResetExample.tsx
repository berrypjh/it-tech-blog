import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ChatState, KeyFiberReuseContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  HistoryIcon,
  InfoIcon,
  MailIcon,
  MessageSquareIcon,
  RepeatIcon,
} from '../icons';

type Props = { content: KeyFiberReuseContent['stateExample'] };

export const StateResetExample = ({ content }: Props) => (
  <section
    id="state-example"
    aria-labelledby="heading-state-example"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="state-example"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RepeatIcon className="h-5 w-5" />}
    />

    {/* Top: code + explanation */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <article className="flex flex-col gap-2 min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
            'text-[10px] font-bold uppercase tracking-wider font-mono',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-700/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          JSX
        </span>
        <CodePreviewPanel
          code={content.code}
          caption="chat-route.jsx"
          language="JSX"
          showWindowDots
        />
      </article>

      <article
        className={cn(
          'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/60 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-11 h-11 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
          )}
        >
          <InfoIcon className="h-5 w-5" />
        </span>
        <p className="text-sm sm:text-md leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
          {content.explanation}
        </p>
      </article>
    </div>

    {/* Bottom: before → transition → after */}
    <div
      className={cn(
        'grid items-stretch min-w-0',
        'grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)]',
        'gap-md',
      )}
    >
      <ChatStateCard
        tone="emerald"
        label={content.beforeLabel}
        keyValue={content.beforeKey}
        title={content.beforeCardTitle}
        states={content.beforeStates}
      />

      <Transition lines={content.transitionLines} />

      <ChatStateCard
        tone="violet"
        label={content.afterLabel}
        keyValue={content.afterKey}
        title={content.afterCardTitle}
        states={content.afterStates}
      />
    </div>
  </section>
);

const toneTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    chip: 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
    text: 'text-emerald-700 dark:text-emerald-300',
    icon: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    chip: 'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
    text: 'text-violet-700 dark:text-violet-300',
    icon: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
  },
} as const;

const ChatStateCard = ({
  tone,
  label,
  keyValue,
  title,
  states,
}: {
  tone: 'emerald' | 'violet';
  label: string;
  keyValue: string;
  title: string;
  states: ChatState[];
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', t.text)}>
          {label}
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
            'font-mono text-[11px] font-bold',
            t.chip,
          )}
        >
          <MailIcon className="h-3 w-3" aria-hidden="true" />
          {keyValue}
        </span>
      </header>

      <div className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-xl shrink-0',
            t.icon,
          )}
        >
          <MessageSquareIcon className="h-5 w-5" />
        </span>
        <code
          className={cn(
            'font-mono text-sm sm:text-md font-extrabold tracking-tight break-keep',
            t.text,
          )}
        >
          {title}
        </code>
      </div>

      <ul className="flex flex-col gap-2">
        {states.map((state) => (
          <li
            key={state.label}
            className={cn(
              'flex items-center justify-between gap-sm rounded-lg border px-sm py-2',
              'border-[var(--term-border)] bg-[var(--term-surface)]',
            )}
          >
            <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
              {state.label}
            </span>
            <code
              className={cn(
                'font-mono text-xsm font-bold break-all text-right',
                state.dim ? 'text-[var(--term-muted)] italic' : 'text-[var(--term-fg)]',
              )}
            >
              {state.value}
            </code>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Transition = ({ lines }: { lines: string[] }) => (
  <div className="flex items-center justify-center" aria-hidden="true">
    <div className="flex flex-col items-center gap-2">
      <span
        className={cn(
          'inline-flex items-center justify-center rounded-full w-11 h-11',
          'bg-gradient-to-br from-violet-500 to-violet-600 text-white',
          'dark:from-violet-400 dark:to-violet-500 dark:text-slate-950',
          'shadow-[0_8px_22px_-8px_rgba(139,92,246,0.55)]',
        )}
      >
        <span className="contents">
          <ArrowDownIcon className="h-5 w-5 lg:hidden" />
          <ArrowRightIcon className="h-5 w-5 hidden lg:block" />
        </span>
      </span>
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
          'text-[10px] font-bold uppercase tracking-wider font-mono',
          'border-violet-300/70 bg-violet-50 text-violet-700',
          'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
        )}
      >
        <HistoryIcon className="h-3 w-3" aria-hidden="true" />
        {lines.join(' / ')}
      </span>
    </div>
  </div>
);
