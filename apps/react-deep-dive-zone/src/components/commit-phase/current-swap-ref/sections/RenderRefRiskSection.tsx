import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { RiskItem, RootCurrentRefContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: RootCurrentRefContent['risk'] };

export const RenderRefRiskSection = ({ content }: Props) => (
  <section
    id="render-ref-risk"
    aria-labelledby="heading-render-ref-risk"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="render-ref-risk"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ShieldAlertIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-3 items-stretch">
      <RiskCard
        title={content.riskCard.title}
        subtitle={content.riskCard.subtitle}
        items={content.riskCard.items}
        warning={content.riskCard.warning}
      />
      <Arrow />
      <SafeCard
        title={content.safeCard.title}
        subtitle={content.safeCard.subtitle}
        items={content.safeCard.items}
        safeMessage={content.safeCard.safeMessage}
      />
    </div>
  </section>
);

const Arrow = () => (
  <div
    aria-hidden="true"
    className="flex items-center justify-center text-blue-500 dark:text-blue-300 py-1 lg:py-0"
  >
    <span
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
        'border-blue-300/80 bg-gradient-to-br from-blue-100 to-teal-100',
        'dark:border-blue-700/70 dark:from-blue-950/70 dark:to-teal-950/60',
      )}
    >
      <span className="hidden lg:inline-block">
        <ArrowRightIcon className="h-6 w-6" />
      </span>
      <span className="lg:hidden">
        <ArrowDownIcon className="h-6 w-6" />
      </span>
    </span>
  </div>
);

const RiskCard = ({
  title,
  subtitle,
  items,
  warning,
}: {
  title: string;
  subtitle: string;
  items: RiskItem[];
  warning: string;
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-violet-300/80 bg-violet-50/50',
      'dark:border-violet-700/70 dark:bg-violet-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <ShieldAlertIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-sm sm:text-md font-bold text-violet-900 dark:text-violet-100">
          {title}
        </h3>
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
          {subtitle}
        </span>
      </div>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item.text}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
        >
          <XCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-violet-700 dark:text-violet-300"
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    <aside
      className={cn(
        'mt-auto flex items-start gap-sm rounded-xl border-2 p-sm',
        'border-rose-300/80 bg-rose-50/70 text-rose-900',
        'dark:border-rose-700/70 dark:bg-rose-950/30 dark:text-rose-100',
      )}
    >
      <ShieldAlertIcon
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-rose-700 dark:text-rose-300"
      />
      <p className="text-[11px] sm:text-xsm leading-snug font-bold break-keep">{warning}</p>
    </aside>
  </article>
);

const SafeCard = ({
  title,
  subtitle,
  items,
  safeMessage,
}: {
  title: string;
  subtitle: string;
  items: RiskItem[];
  safeMessage: string;
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-teal-300/80 bg-teal-50/50',
      'dark:border-teal-700/70 dark:bg-teal-950/25',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <ShieldCheckIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col">
        <h3 className="text-sm sm:text-md font-bold text-teal-900 dark:text-teal-100">{title}</h3>
        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
          {subtitle}
        </span>
      </div>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item.text}
          className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
        >
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-teal-700 dark:text-teal-300"
          />
          <span>{item.text}</span>
        </li>
      ))}
    </ul>

    <aside
      className={cn(
        'mt-auto flex items-start gap-sm rounded-xl border-2 p-sm',
        'border-emerald-300/80 bg-emerald-50/70 text-emerald-900',
        'dark:border-emerald-700/70 dark:bg-emerald-950/30 dark:text-emerald-100',
      )}
    >
      <ShieldCheckIcon
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-300"
      />
      <p className="text-[11px] sm:text-xsm leading-snug font-bold break-keep">{safeMessage}</p>
    </aside>
  </article>
);
