import { cn } from '@it-tech-blog/utils';

import type { ResponsibilityItem, ServerComponentsContractContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, HammerIcon, ShieldCheckIcon } from '../icons';
import { boundaryTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['frameworkBoundary'] };

export const FrameworkReactBoundarySection = ({ content }: Props) => (
  <section aria-labelledby="framework-boundary-heading" className="flex flex-col">
    <SectionHeader
      id="framework-boundary-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_5fr)] lg:gap-md items-stretch">
      {/* LEFT: React provides */}
      <ResponsibilityCard
        title={content.reactCardTitle}
        items={content.reactItems}
        accent="react"
        Icon={ShieldCheckIcon}
      />

      {/* CENTER: RSC hub */}
      <div className="flex lg:flex-col items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full border-2 border-dashed',
            'border-blue-400 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50',
            'dark:border-blue-600 dark:from-blue-950/40 dark:via-purple-950/40 dark:to-blue-950/40',
            'shadow-[0_4px_0_rgba(15,23,42,0.1)]',
          )}
        >
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-[10px] font-bold text-blue-700 dark:text-blue-200">
              {content.centerLabel}
            </span>
            <span className="text-[9px] font-mono text-[var(--term-muted)] break-keep">
              {content.centerSubLabel}
            </span>
          </div>
        </span>
        <span aria-hidden="true" className="hidden lg:flex flex-col items-center gap-1">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200">
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
        </span>
        <span
          aria-hidden="true"
          className="inline-flex lg:hidden items-center justify-center gap-1"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200">
            <ArrowDownIcon className="h-3 w-3" />
          </span>
        </span>
      </div>

      {/* RIGHT: Framework implements */}
      <ResponsibilityCard
        title={content.frameworkCardTitle}
        items={content.frameworkItems}
        accent="framework"
        Icon={HammerIcon}
      />
    </div>
  </section>
);

const ResponsibilityCard = ({
  title,
  items,
  accent,
  Icon,
}: {
  title: string;
  items: ResponsibilityItem[];
  accent: 'react' | 'framework';
  Icon: React.ComponentType<{ className?: string }>;
}) => {
  const tone = boundaryTone[accent];
  return (
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
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            tone.iconChip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <h3 className={cn('text-sm sm:text-md font-bold break-keep leading-snug', tone.text)}>
          {title}
        </h3>
      </header>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item.body}
            className={cn(
              'flex items-start gap-2 rounded-lg border px-3 py-2',
              'bg-white dark:bg-[var(--term-bg)]',
              tone.border,
            )}
          >
            <span
              aria-hidden="true"
              className={cn('mt-1.5 block h-1.5 w-1.5 rounded-full', tone.dot)}
            />
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
              {item.body}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
