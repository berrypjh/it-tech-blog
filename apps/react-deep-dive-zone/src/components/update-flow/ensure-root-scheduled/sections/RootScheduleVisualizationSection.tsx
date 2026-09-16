import { cx } from '@berrypjh/react-ui';
import { ArrowRight, ListChecks, Network, Workflow } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent } from '../content';

type Props = { content: EnsureRootScheduledContent['visualization'] };

const sky = toneTokens.sky;

export const RootScheduleVisualizationSection = ({ content }: Props) => (
  <section
    id="visualization"
    aria-labelledby="heading-visualization"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="visualization"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 업데이트 있는 Root들 */}
      <article className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
          {content.leftTitle}
        </span>
        <ul className="flex flex-col gap-2">
          {content.leftRoots.map((root) => {
            const t = toneTokens[root.tone];
            return (
              <li
                key={root.id}
                className={cx(
                  'flex items-center gap-2 rounded-md border bg-[var(--term-bg)] px-3 py-2 shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                    t.chip,
                  )}
                >
                  <Network className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className={cx('text-xsm sm:text-sm font-bold font-mono', t.text)}>
                  {root.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cx('ml-auto block h-2 w-2 rounded-full', t.dot)}
                />
              </li>
            );
          })}
        </ul>
        <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
          {content.leftBody}
        </p>
      </article>

      {/* 중앙: register 커넥터 */}
      <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
        >
          <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden="true" />
        </span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-fg)]">
          {content.middleLabel}
        </span>
      </div>

      {/* 우: Root Schedule Queue */}
      <article
        className={cx(
          'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          sky.border,
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cx(
              'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
              sky.chip,
            )}
          >
            <ListChecks className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className={cx('text-xsm sm:text-sm font-bold', sky.text)}>
            {content.rightTitle}
          </span>
        </header>
        <code
          className={cx(
            'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
            sky.border,
            sky.text,
          )}
        >
          {content.rightQueue}
        </code>
        <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
          {content.rightBody}
        </p>
      </article>
    </div>
  </section>
);
