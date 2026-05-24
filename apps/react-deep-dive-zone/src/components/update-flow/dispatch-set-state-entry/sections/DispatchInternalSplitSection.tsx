import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type {
  DispatchSetStateEntryContent,
  FunctionSplitCard as FunctionSplitCardType,
  FunctionSplitIconName,
} from '../content';
import { ArrowLeftRightIcon, BoxIcon, CheckCircleIcon, SplitIcon, WorkflowIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['splitReason'] };

const iconMap: Record<FunctionSplitIconName, typeof BoxIcon> = {
  workflow: WorkflowIcon,
  box: BoxIcon,
};

export const DispatchInternalSplitSection = ({ content }: Props) => (
  <section id="split" aria-labelledby="heading-split" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="split"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
      <SplitCard card={content.leftCard} />
      <Connector label={content.connectorLabel} />
      <SplitCard card={content.rightCard} />
    </div>
  </section>
);

const SplitCard = ({ card }: { card: FunctionSplitCardType }) => {
  const Icon = iconMap[card.iconName];
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              t.chip,
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <h3 className={cn('text-sm sm:text-md font-bold font-mono break-keep', t.text)}>
            {card.title}
          </h3>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {card.badge}
        </span>
      </header>

      <ul className="flex flex-col gap-2">
        {card.items.map((item) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-2 rounded-xl border px-3 py-2',
              'border-[var(--term-border)] bg-slate-50/50 dark:bg-slate-900/30',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                t.chip,
              )}
            >
              <CheckCircleIcon className="h-3 w-3" />
            </span>
            <span className="text-xsm sm:text-sm text-[var(--term-fg)] leading-snug break-keep">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

const Connector = ({ label }: { label: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed',
        'border-sky-300/80 bg-white text-sky-600',
        'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ArrowLeftRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] lg:rotate-0">
      {label}
    </span>
  </div>
);
