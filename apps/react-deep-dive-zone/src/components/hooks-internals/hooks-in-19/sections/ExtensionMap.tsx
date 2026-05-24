import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ApiHero, FoundationItem, React19HooksContent, Tone } from '../content';
import {
  ArrowDownIcon,
  AtomIcon,
  BoxIcon,
  GaugeIcon,
  LayersIcon,
  Link2Icon,
  MapIcon,
  MessageCircleIcon,
  SendIcon,
  SettingsIcon,
  ZapIcon,
} from '../icons';

type Props = { content: React19HooksContent['extensionMap'] };

const foundationIconMap = {
  dispatcher: SettingsIcon,
  'linked-list': Link2Icon,
  'update-queue': BoxIcon,
  suspense: AtomIcon,
  effect: ZapIcon,
} as const;

const apiIconMap = {
  use: AtomIcon,
  useActionState: SendIcon,
  useOptimistic: GaugeIcon,
  useEffectEvent: MessageCircleIcon,
} as const;

const toneCardBg: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/60 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/60 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/60 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/60 dark:bg-violet-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/60 dark:bg-amber-950/30',
  orange: 'border-orange-300/80 bg-orange-50/60 dark:border-orange-700/60 dark:bg-orange-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/60 dark:bg-rose-950/30',
  indigo: 'border-indigo-300/80 bg-indigo-50/60 dark:border-indigo-700/60 dark:bg-indigo-950/30',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
  orange:
    'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-200 border-orange-200/80 dark:border-orange-800/60',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200 border-rose-200/80 dark:border-rose-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

const toneText: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-200',
  cyan: 'text-cyan-700 dark:text-cyan-200',
  teal: 'text-teal-700 dark:text-teal-200',
  emerald: 'text-emerald-700 dark:text-emerald-200',
  violet: 'text-violet-700 dark:text-violet-200',
  amber: 'text-amber-800 dark:text-amber-200',
  orange: 'text-orange-700 dark:text-orange-200',
  rose: 'text-rose-700 dark:text-rose-200',
  indigo: 'text-indigo-700 dark:text-indigo-200',
};

const FoundationRow = ({ item }: { item: FoundationItem }) => {
  const Icon = foundationIconMap[item.key as keyof typeof foundationIconMap] ?? SettingsIcon;
  return (
    <li
      className={cn(
        'flex items-start gap-2.5 rounded-lg border bg-white p-2.5 dark:bg-slate-950/40',
        'border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
          toneIconBox[item.tone],
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code
          className={cn(
            'font-mono text-[11px] sm:text-xsm font-bold break-all',
            toneText[item.tone],
          )}
        >
          {item.title}
        </code>
        <span className="text-[10px] font-mono text-[var(--term-muted)] break-keep">
          {item.description}
        </span>
      </div>
    </li>
  );
};

const ApiOuterCard = ({ api }: { api: ApiHero }) => {
  const Icon = apiIconMap[api.key];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-2xl border-2 p-md transition-all',
        'shadow-[0_2px_0_var(--term-border)] motion-safe:hover:-translate-y-0.5',
        toneCardBg[api.tone],
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
            toneIconBox[api.tone],
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <code className={cn('font-mono text-sm font-bold break-all', toneText[api.tone])}>
          {api.title}
        </code>
      </header>
      <p className="text-[11px] sm:text-xsm font-mono text-[var(--term-muted)] break-keep">
        {api.shortDesc}
      </p>
    </article>
  );
};

export const ExtensionMap = ({ content }: Props) => (
  <section
    aria-labelledby="heading-extension-map"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="extension-map"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      {/* Top API cards (use, useActionState) */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.apiCards.slice(0, 2).map((api) => (
          <li key={api.key}>
            <ApiOuterCard api={api} />
          </li>
        ))}
      </ul>

      {/* Connection lines */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-2 text-[var(--term-muted)]"
      >
        <ArrowDownIcon className="h-4 w-4" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
          connects to
        </span>
        <ArrowDownIcon className="h-4 w-4" />
      </div>

      {/* Center foundation card */}
      <article
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-400/80 bg-blue-50/70 shadow-[0_3px_0_var(--term-border)]',
          'dark:border-blue-700/60 dark:bg-blue-950/30',
        )}
      >
        <header className="flex items-center gap-2 mb-md">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900"
          >
            <LayersIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-blue-800 dark:text-blue-100 break-keep">
            {content.centerTitle}
          </h3>
        </header>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {content.foundations.map((item) => (
            <FoundationRow key={item.key} item={item} />
          ))}
        </ul>
      </article>

      {/* Connection lines */}
      <div
        aria-hidden="true"
        className="flex items-center justify-center gap-2 text-[var(--term-muted)]"
      >
        <ArrowDownIcon className="h-4 w-4 rotate-180" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
          connects to
        </span>
        <ArrowDownIcon className="h-4 w-4 rotate-180" />
      </div>

      {/* Bottom API cards (useOptimistic, useEffectEvent) */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.apiCards.slice(2).map((api) => (
          <li key={api.key}>
            <ApiOuterCard api={api} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);
