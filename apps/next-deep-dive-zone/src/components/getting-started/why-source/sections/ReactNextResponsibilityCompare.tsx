import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { ToneKey, WhyReadNextSourceContent } from '../content';
import { LayersIcon, SparkIcon } from '../icons';

type Props = { content: WhyReadNextSourceContent['compare'] };

const Column = ({
  label,
  title,
  items,
  tone,
}: {
  label: string;
  title: string;
  items: string[];
  tone: ToneKey;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex flex-col gap-md min-w-0">
      <header className="flex flex-col gap-0.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
          {label}
        </span>
        <h3 className={cn('text-lg sm:text-xl font-bold tracking-tight', t.text)}>{title}</h3>
      </header>

      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item}>
            <div
              className={cn(
                'flex items-center gap-sm rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2 transition-colors',
                t.borderHover,
              )}
            >
              <span
                aria-hidden="true"
                className={cn('inline-block h-1.5 w-1.5 rounded-full shrink-0', t.dot)}
              />
              <span className="text-xsm sm:text-sm font-medium text-[var(--term-fg)] break-keep">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ReactNextResponsibilityCompare = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-lg">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <div className="relative rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-lg lg:gap-xl items-start">
          <Column
            label="layer.react"
            title={content.react.title}
            items={content.react.items}
            tone="indigo"
          />

          {/* 중앙 + 배지 (Next.js가 React 위에 더한다) */}
          <div className="relative flex lg:flex-col items-center justify-center lg:py-md">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-[var(--term-border)]"
            />
            <span
              aria-hidden="true"
              className="lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]"
            />
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--term-accent)] bg-[var(--term-bg)] text-lg font-bold text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]">
              +
            </span>
          </div>

          <Column
            label="layer.next"
            title={content.next.title}
            items={content.next.items}
            tone="cyan"
          />
        </div>

        {/* 하단 강조 배너 */}
        <div className="mt-lg rounded-md border border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-800/60 dark:bg-cyan-950/30 dark:text-cyan-100 p-md flex items-center gap-sm">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900 shrink-0"
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm font-medium leading-snug break-keep">
            {content.banner}
          </p>
        </div>
      </div>
    </section>
  );
};
