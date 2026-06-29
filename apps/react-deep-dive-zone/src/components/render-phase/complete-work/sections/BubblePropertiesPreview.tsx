import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent } from '../content';
import { ArrowRightIcon, ArrowUpIcon, CheckCircleIcon, ChevronDownIcon } from '../icons';

type Props = { content: CompleteWorkContent['bubble'] };

export const BubblePropertiesPreview = ({ content }: Props) => (
  <section id="bubble" aria-labelledby="heading-bubble" className="space-y-md">
    <SectionHeader
      id="bubble"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowUpIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
        {content.flow.map((node, idx) => {
          const t = toneTokens[node.tone];
          return (
            <Fragment key={node.title}>
              <article
                className={cn(
                  'flex h-full flex-col items-center justify-center gap-1 rounded-lg border p-md text-center',
                  'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
                  t.fill.bg,
                  t.fill.border,
                )}
              >
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold leading-tight break-keep',
                    t.fill.text,
                  )}
                >
                  {node.title}
                </h3>
                <p className="text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {node.subtitle}
                </p>
              </article>
              {idx < content.flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center text-[var(--term-accent)] py-1 lg:py-0"
                >
                  <ArrowRightIcon className="hidden lg:block h-5 w-5" />
                  <ChevronDownIcon className="lg:hidden h-5 w-5" />
                </span>
              )}
            </Fragment>
          );
        })}
      </div>

      <SectionNote icon={<CheckCircleIcon className="h-4 w-4" />} className="mt-md">
        {content.bottomNote}
      </SectionNote>
    </article>
  </section>
);
