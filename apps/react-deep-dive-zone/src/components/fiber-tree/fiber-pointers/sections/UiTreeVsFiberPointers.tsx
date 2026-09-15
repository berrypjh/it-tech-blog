import { cx } from '@berrypjh/react-ui';
import { ArrowLeftRight, ListTree } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { ConnectionTable } from '../components/ConnectionTable';
import type { FiberTreePointersContent } from '../content';

type Props = { content: FiberTreePointersContent['comparison'] };

export const UiTreeVsFiberPointers = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowLeftRight className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-md lg:gap-lg items-stretch">
      {/* Left: normal UI tree (neutral) */}
      <article
        className={cx(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]"
          >
            <ListTree className="h-4 w-4" aria-hidden="true" />
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
          <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      {/* Right: fiber pointer structure (emerald) */}
      <article
        className={cx(
          'rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm mb-sm">
          <ToneIconBox tone="emerald" size="sm">
            <ListTree className="h-4 w-4" aria-hidden="true" />
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
