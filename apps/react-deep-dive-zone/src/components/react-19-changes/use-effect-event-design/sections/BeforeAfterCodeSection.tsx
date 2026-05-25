import { cn } from '@it-tech-blog/utils';

import type { ProblemListItem } from '../content';
import { CheckCircleIcon, XCircleIcon } from '../icons';
import { effectTone, type ToneKey } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  code: { fileName: string; langBadge: 'JSX'; code: string };
  cardTitle: string;
  items: ProblemListItem[];
  summary: string;
  /** problem (Before) or improvement (After) */
  variant: 'before' | 'after';
  slug: string;
};

export const BeforeAfterCodeSection = ({
  number,
  eyebrow,
  title,
  description,
  code,
  cardTitle,
  items,
  summary,
  variant,
  slug,
}: Props) => {
  const toneKey: ToneKey = variant === 'before' ? 'problem' : 'improvement';
  const tone = effectTone[toneKey];
  const Icon = variant === 'before' ? XCircleIcon : CheckCircleIcon;
  const headingId = `${slug}-heading`;
  const borderClass = variant === 'before' ? 'border-rose-700/70' : 'border-teal-700/70';

  return (
    <section aria-labelledby={headingId} className="flex flex-col">
      <SectionHeader
        id={headingId}
        number={number}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] lg:gap-lg items-stretch">
        {/* Code */}
        <div className="flex">
          <CodePanel
            code={code.code}
            fileName={code.fileName}
            langBadge={code.langBadge}
            toneBorder={borderClass}
          />
        </div>

        {/* Problem / Improvement card */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            tone.borderStrong,
            tone.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-xl border',
                tone.iconChip,
              )}
            >
              <Icon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', tone.text)}>{cardTitle}</h3>
          </header>

          <ul className="flex flex-col gap-1.5">
            {items.map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <Icon aria-hidden="true" className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'mt-auto rounded-xl border-2 px-3 py-2.5',
              tone.border,
              'bg-white dark:bg-[var(--term-bg)]',
            )}
          >
            <p className={cn('text-xsm font-bold leading-relaxed break-keep', tone.text)}>
              {summary}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
