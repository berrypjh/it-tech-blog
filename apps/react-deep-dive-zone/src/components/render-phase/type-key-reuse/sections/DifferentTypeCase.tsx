import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { TypeKeyReuseContent } from '../content';
import { ArrowRightIcon, ChevronDownIcon, ComponentIcon, KeyIcon } from '../icons';

import { NextCard, PreviousCard, ResultCardView } from './case-cards';

type Props = { content: TypeKeyReuseContent['differentType'] };

export const DifferentTypeCase = ({ content }: Props) => {
  const items = [
    <PreviousCard key="prev" side={content.previous} />,
    <NextCard key="next" side={content.next} kind="replace" />,
    <ResultCardView key="result" result={content.result} />,
    <KeyTypeRoleCard key="role" role={content.roleCard} />,
  ];

  return (
    <section
      id="different-type"
      aria-labelledby="heading-different-type"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        id="different-type"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ComponentIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.1fr)] items-stretch gap-3">
        {items.map((node, idx) => (
          <Fragment key={idx}>
            <div className="min-w-0">{node}</div>
            {idx < items.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'flex shrink-0 items-center justify-center',
                  'xl:px-0.5 py-1 xl:py-0',
                  'text-violet-500/80 dark:text-violet-300/80',
                )}
              >
                <ArrowRightIcon className="hidden xl:block h-5 w-5" />
                <ChevronDownIcon className="xl:hidden h-5 w-5" />
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

const KeyTypeRoleCard = ({ role }: { role: TypeKeyReuseContent['differentType']['roleCard'] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'shadow-[0_1px_0_var(--term-border)]',
    )}
    aria-labelledby="key-type-role-title"
  >
    <h3
      id="key-type-role-title"
      className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep"
    >
      {role.title}
    </h3>
    <article
      className={cn(
        'flex items-start gap-2 rounded-xl border p-sm',
        'border-teal-300/80 bg-teal-50/40',
        'dark:border-teal-700/70 dark:bg-teal-950/20',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <KeyIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-xsm font-bold text-teal-800 dark:text-teal-100">
          {role.key.label}
        </code>
        <p className="text-[10px] sm:text-xsm leading-snug text-teal-900 dark:text-teal-100 break-keep">
          {role.key.description}
        </p>
      </div>
    </article>
    <article
      className={cn(
        'flex items-start gap-2 rounded-xl border p-sm',
        'border-violet-300/80 bg-violet-50/40',
        'dark:border-violet-700/70 dark:bg-violet-950/20',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg border',
          'bg-violet-100 text-violet-700 border-violet-200/80',
          'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
        )}
      >
        <ComponentIcon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <code className="font-mono text-xsm font-bold text-violet-800 dark:text-violet-100">
          {role.type.label}
        </code>
        <p className="text-[10px] sm:text-xsm leading-snug text-violet-900 dark:text-violet-100 break-keep">
          {role.type.description}
        </p>
        {role.type.detail && (
          <p className="text-[10px] leading-snug text-violet-700/80 dark:text-violet-300/80 break-keep">
            {role.type.detail}
          </p>
        )}
      </div>
    </article>
  </article>
);
