import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { ApproachItem, NotAllFilesContent } from '../content';
import { approachIconByName, CheckIcon, XIcon } from '../icons';

type Props = { content: NotAllFilesContent['approaches'] };

type Variant = 'wrong' | 'good';

const variantClasses: Record<
  Variant,
  {
    border: string;
    headerIconBg: string;
    headerIconText: string;
    headerText: string;
    rowAccent: string;
    numChip: string;
    rowHover: string;
  }
> = {
  wrong: {
    border: 'border-rose-200/80 dark:border-rose-800/60',
    headerIconBg: 'bg-rose-500 dark:bg-rose-400',
    headerIconText: 'text-white dark:text-slate-900',
    headerText: 'text-rose-700 dark:text-rose-200',
    rowAccent: 'text-rose-600 dark:text-rose-300',
    numChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    rowHover: 'group-hover:bg-rose-50/60 dark:group-hover:bg-rose-950/30',
  },
  good: {
    border: 'border-teal-200/80 dark:border-teal-800/60',
    headerIconBg: 'bg-teal-500 dark:bg-teal-400',
    headerIconText: 'text-white dark:text-slate-900',
    headerText: 'text-teal-700 dark:text-teal-200',
    rowAccent: 'text-teal-600 dark:text-teal-300',
    numChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    rowHover: 'group-hover:bg-teal-50/60 dark:group-hover:bg-teal-950/30',
  },
};

const ApproachPanel = ({
  variant,
  title,
  items,
}: {
  variant: Variant;
  title: string;
  items: ApproachItem[];
}) => {
  const t = variantClasses[variant];
  const HeaderIcon = variant === 'wrong' ? XIcon : CheckIcon;
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shadow-[0_1px_0_var(--term-border)]',
            t.headerIconBg,
            t.headerIconText,
          )}
        >
          <HeaderIcon className="h-[1.125rem] w-[1.125rem]" />
        </span>
        <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.headerText)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-sm">
        {items.map((item) => {
          const Icon = approachIconByName[item.icon];
          return (
            <li key={item.num} className="group">
              <div
                className={cn(
                  'grid grid-cols-[auto_auto_1fr] items-start gap-sm p-sm rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900 transition-colors',
                  t.rowHover,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-6 h-6 rounded-md border text-[10px] font-bold tabular-nums shrink-0',
                    t.numChip,
                  )}
                >
                  {item.num}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0',
                    t.rowAccent,
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export const WrongVsGoodApproach = ({ content }: Props) => {
  return (
    <section id="section-approaches" aria-labelledby="heading-approaches" className="space-y-lg">
      <SectionHeader
        id="approaches"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<XIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        <ApproachPanel variant="wrong" title={content.wrong.title} items={content.wrong.items} />
        <ApproachPanel variant="good" title={content.good.title} items={content.good.items} />
      </div>
    </section>
  );
};
