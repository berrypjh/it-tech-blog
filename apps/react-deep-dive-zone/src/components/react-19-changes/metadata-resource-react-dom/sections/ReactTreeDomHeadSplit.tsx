import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, AtomIcon, GlobeIcon, SparklesIcon } from '../icons';

import { DomMock } from './_DomMock';
import { SectionHeader } from './_SectionHeader';
import { TreeMock } from './_TreeMock';

type Props = { content: MetadataResourceContent['treeDomSplit'] };

export const ReactTreeDomHeadSplit = ({ content }: Props) => (
  <section aria-labelledby="tree-dom-split-heading" className="flex flex-col">
    <SectionHeader
      id="tree-dom-split-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_5fr)] lg:gap-md items-stretch">
      {/* LEFT: React Tree */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <AtomIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
        </header>
        <TreeMock tree={content.tree} ariaLabel={content.leftTitle} />
      </article>

      {/* CENTER: Hoisting arrow */}
      <div className="flex lg:flex-col items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-full border-2',
            'border-blue-300 bg-blue-50 text-blue-700',
            'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span className="hidden lg:inline-flex">
            <ArrowRightIcon className="h-5 w-5" />
          </span>
          <span className="inline-flex lg:hidden">
            <ArrowDownIcon className="h-5 w-5" />
          </span>
        </span>
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
            <SparklesIcon aria-hidden="true" className="h-3 w-3" />
            {content.centerLabel}
          </span>
          <span className="text-sm font-bold text-blue-700 dark:text-blue-200">
            {content.centerSubLabel}
          </span>
          <span className="mt-1 text-[10px] text-[var(--term-muted)] break-keep max-w-[160px]">
            {content.centerHint}
          </span>
        </div>
      </div>

      {/* RIGHT: DOM (final placement) */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/30 dark:border-teal-700/70 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <GlobeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.rightTitle}
          </h3>
        </header>
        <DomMock dom={content.dom} ariaLabel={content.rightTitle} />
      </article>
    </div>
  </section>
);
