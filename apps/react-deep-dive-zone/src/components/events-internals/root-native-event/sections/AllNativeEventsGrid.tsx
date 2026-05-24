import { cn } from '@it-tech-blog/utils';

import type { RootNativeEventContent } from '../content';
import { CheckCircleIcon, ContainerIcon, NetworkIcon } from '../icons';
import { ListenerPill } from '../ListenerPill';
import { NumberedSectionHeader } from '../NumberedSectionHeader';

type Props = { content: RootNativeEventContent['allEvents'] };

export const AllNativeEventsGrid = ({ content }: Props) => (
  <section aria-labelledby="heading-all-events">
    <NumberedSectionHeader
      id="all-events"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-cyan-50/40',
        'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex flex-col items-center gap-2 mb-md">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
        >
          <ContainerIcon className="h-5 w-5" />
        </span>
        <code className="rounded-full border border-teal-300/80 bg-white px-3 py-1 font-mono text-xsm sm:text-sm font-bold text-teal-700 shadow-sm dark:bg-slate-950/40 dark:border-teal-700/60 dark:text-teal-200">
          {content.rootLabel}
        </code>
      </header>

      {/* Listener pill grid */}
      <ul className={cn('grid gap-2', 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5')}>
        {content.listeners.map((l) => (
          <li key={l.label} className="flex justify-center">
            <ListenerPill label={`${l.label} listener`} kind={l.kind} size="sm" />
          </li>
        ))}
      </ul>

      {/* Emphasis */}
      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-teal-300/80 bg-teal-50/70',
          'dark:border-teal-700/60 dark:bg-teal-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white shadow-[0_2px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
        >
          <CheckCircleIcon className="h-5 w-5" strokeWidth={2.4} />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-relaxed text-teal-900 dark:text-teal-100 break-keep">
          {content.emphasis}
        </p>
      </aside>
    </div>
  </section>
);
