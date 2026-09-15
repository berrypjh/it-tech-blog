import { cx } from '@berrypjh/react-ui';
import { Brain, Check, FolderOpen, type LucideIcon, Pencil, Pin, Route, X } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { ApproachItem, NotAllFilesContent } from '../content';

const itemIcon: Record<ApproachItem['id'], LucideIcon> = {
  'read-all': FolderOpen,
  'open-blindly': X,
  memorize: Brain,
  'define-question': Check,
  'find-entry': Pin,
  'follow-functions': Route,
  'redraw-flow': Pencil,
};

type Props = { content: NotAllFilesContent['approaches'] };

type Variant = 'wrong' | 'good';

/** 잘못된/좋은 접근을 구분하는 의미색. */
const accentText: Record<Variant, string> = {
  wrong: 'text-rose-600 dark:text-rose-300',
  good: 'text-teal-600 dark:text-teal-300',
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
  const accent = accentText[variant];
  const HeaderIcon = variant === 'wrong' ? X : Check;
  return (
    <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="flex items-center gap-sm pb-sm border-b border-dashed border-[var(--term-border)]">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shadow-[0_1px_0_var(--term-border)]',
            'bg-[var(--term-surface)] border border-[var(--term-border)]',
            accent,
          )}
        >
          <HeaderIcon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />
        </span>
        <h3 className={cx('text-md sm:text-lg font-bold tracking-tight', accent)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-sm">
        {items.map((item) => {
          const Icon = itemIcon[item.id];
          return (
            <li key={item.id}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-sm p-sm rounded-md border border-[var(--term-border)] bg-[var(--term-bg)] transition-all hover:-translate-y-0.5">
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0',
                    accent,
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
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
        icon={<X className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg items-stretch">
        <ApproachPanel variant="wrong" title={content.wrong.title} items={content.wrong.items} />
        <ApproachPanel variant="good" title={content.good.title} items={content.good.items} />
      </div>
    </section>
  );
};
