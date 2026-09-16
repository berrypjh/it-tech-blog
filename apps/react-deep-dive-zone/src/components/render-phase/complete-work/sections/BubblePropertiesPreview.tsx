import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import { ArrowRight, ArrowUp, ChevronDown, Lightbulb } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent } from '../content';

type Props = { content: CompleteWorkContent['bubble'] };

export const BubblePropertiesPreview = ({ content }: Props) => (
  <section id="bubble" aria-labelledby="heading-bubble" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="bubble"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowUp className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
        {content.flow.map((node, idx) => {
          const t = toneTokens[node.tone];
          return (
            <Fragment key={node.title}>
              <article
                className={cx(
                  'flex h-full flex-col items-center justify-center gap-1 rounded-lg border p-md text-center',
                  'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
                  t.fill.bg,
                  t.fill.border,
                )}
              >
                <h3
                  className={cx(
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
                  <ArrowRight className="hidden lg:block h-5 w-5" aria-hidden="true" />
                  <ChevronDown className="lg:hidden h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </Fragment>
          );
        })}
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />} className="mt-md">
        {content.note}
      </SectionNote>
    </article>
  </section>
);
