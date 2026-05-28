import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ToneKey } from '../../../shared/tones';
import type { FiberNodeOverviewContent, ReasonCard as ReasonCardType } from '../content';
import { FlagIcon, ListTreeIcon, RefreshIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['notJustNode'] };

const iconMap = {
  tree: ListTreeIcon,
  refresh: RefreshIcon,
  flag: FlagIcon,
  zap: ZapIcon,
} as const;

const iconWrap: Record<ToneKey, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
  amber:
    'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
};

const cardBorder: Record<ToneKey, string> = {
  sky: 'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'border-cyan-200/80 dark:border-cyan-800/60 hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  blue: 'border-blue-200/80 dark:border-blue-800/60 hover:border-blue-400/70 dark:hover:border-blue-500/60',
  teal: 'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
  indigo:
    'border-indigo-200/80 dark:border-indigo-800/60 hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
};

const titleColor: Record<ToneKey, string> = {
  sky: 'text-sky-800 dark:text-sky-100',
  cyan: 'text-cyan-800 dark:text-cyan-100',
  violet: 'text-violet-800 dark:text-violet-100',
  emerald: 'text-emerald-800 dark:text-emerald-100',
  blue: 'text-blue-800 dark:text-blue-100',
  teal: 'text-teal-800 dark:text-teal-100',
  indigo: 'text-indigo-800 dark:text-indigo-100',
  amber: 'text-amber-800 dark:text-amber-100',
};

export const FiberIsNotJustNode = ({ content }: Props) => (
  <section
    id="not-just-node"
    aria-labelledby="heading-not-just-node"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="not-just-node"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-center">
      {/* Left column (top-left + bottom-left cards) */}
      <div className="flex flex-col gap-md">
        <ReasonCard reason={content.reasons[0]} alignRight />
        <ReasonCard reason={content.reasons[2]} alignRight />
      </div>

      {/* Center message */}
      <div className="lg:order-none order-first">
        <CenterMessage message={content.centerMessage} />
      </div>

      {/* Right column (top-right + bottom-right cards) */}
      <div className="flex flex-col gap-md">
        <ReasonCard reason={content.reasons[1]} />
        <ReasonCard reason={content.reasons[3]} />
      </div>
    </div>
  </section>
);

const CenterMessage = ({
  message,
}: {
  message: FiberNodeOverviewContent['notJustNode']['centerMessage'];
}) => (
  <div
    className={cn(
      'mx-auto flex w-full max-w-[300px] aspect-square items-center justify-center',
      'rounded-full border-2 border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-cyan-50/80',
      'dark:border-sky-800/60 dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-cyan-950/40',
      'shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)]',
      'p-md text-center',
    )}
  >
    <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
      {message.lines.map((line, i) => {
        const hasEmphasis = line.includes(message.emphasis);
        if (hasEmphasis) {
          const [before, after] = line.split(message.emphasis);
          return (
            <span key={i} className="block">
              {before}
              <span className="text-sky-700 dark:text-sky-300">{message.emphasis}</span>
              {after}
            </span>
          );
        }
        return (
          <span key={i} className="block">
            {line}
          </span>
        );
      })}
    </p>
  </div>
);

const ReasonCard = ({ reason, alignRight }: { reason: ReasonCardType; alignRight?: boolean }) => {
  const Icon = iconMap[reason.iconName];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        cardBorder[reason.tone],
        alignRight && 'lg:items-end lg:text-right',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-10 h-10 rounded-lg border shrink-0',
          iconWrap[reason.tone],
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold tracking-tight break-keep',
          titleColor[reason.tone],
        )}
      >
        {reason.title}
      </h3>
      <p className="text-[12px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {reason.body}
      </p>
    </article>
  );
};
