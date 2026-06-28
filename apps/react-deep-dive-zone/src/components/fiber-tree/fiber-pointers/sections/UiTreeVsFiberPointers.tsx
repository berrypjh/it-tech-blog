import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { ConnectionTable } from '../components/ConnectionTable';
import type { FiberTreePointersContent } from '../content';
import { ArrowLeftRightIcon, ListTreeIcon } from '../icons';

type Props = { content: FiberTreePointersContent['comparison'] };

export const UiTreeVsFiberPointers = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRightIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      {/* Left: normal UI tree (neutral) */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]"
          >
            <ListTreeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
        </header>
        <pre className="overflow-x-auto rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] p-sm font-mono text-xsm leading-[1.7] text-[var(--term-fg)]">
          {content.leftTree}
        </pre>
      </article>

      {/* Center: transform arrow */}
      <div className="flex items-center justify-center">
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
        >
          <ArrowLeftRightIcon className="h-5 w-5" />
        </span>
      </div>

      {/* Right: fiber pointer structure (emerald) */}
      <article
        className={cn(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <ToneIconBox tone="emerald" size="sm">
            <ListTreeIcon className="h-4 w-4" />
          </ToneIconBox>
          <h3 className="text-xsm sm:text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
            {content.rightTitle}
          </h3>
        </header>
        <ConnectionTable
          childSiblingRows={content.childSiblingRows}
          returnRows={content.returnRows}
        />
      </article>
    </div>
  </section>
);
