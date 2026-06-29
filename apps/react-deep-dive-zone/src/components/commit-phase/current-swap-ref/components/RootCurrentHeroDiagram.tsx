import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitTimelineItem, RootCurrentRefContent } from '../content';
import { HistoryIcon, RocketIcon, TreeIcon } from '../icons';

type Props = { content: RootCurrentRefContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Commit 후 root.current 포인터가 기존 current tree에서 새 finishedWork tree로
 * 전환되는 흐름을, 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RootCurrentHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle} → ${diagram.centerLabel}: ${diagram.centerFormula} → ${diagram.rightTitle}`;

  return (
    <div
      className={cn(
        '@container relative w-full overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_55%)]"
      />
      <p className="sr-only">{a11y}</p>

      <div className="relative flex flex-col gap-sm">
        <header className="flex items-center gap-sm" aria-hidden="true">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {'// current → finishedWork swap'}
          </span>
          <span className="ml-auto shrink-0 rounded-md border border-[var(--term-border)] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            commit pipeline
          </span>
        </header>

        <TreeCard
          tone="violet"
          badge="previous"
          title={diagram.leftTitle}
          subtitle={diagram.leftSubtitle}
          icon={<HistoryIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />

        <DownArrow />

        <CodePreviewPanel
          code={diagram.centerFormula}
          caption={diagram.centerLabel}
          language="JS"
          size="md"
        />

        <DownArrow />

        <TreeCard
          tone="teal"
          badge="next"
          title={diagram.rightTitle}
          subtitle={diagram.rightSubtitle}
          icon={<RocketIcon className="h-[18px] w-[18px]" aria-hidden="true" />}
        />

        <Timeline items={diagram.timeline} />
      </div>
    </div>
  );
};

const TreeCard = ({
  tone,
  badge,
  title,
  subtitle,
  icon,
}: {
  tone: ToneKey;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="flex items-center gap-2">
          <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
          <span
            className={cn(
              'shrink-0 rounded-md border px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider',
              t.chip,
            )}
          >
            {badge}
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          <TreeIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
          {subtitle}
        </span>
      </div>
    </article>
  );
};

const Timeline = ({ items }: { items: CommitTimelineItem[] }) => (
  <ol
    className="flex flex-wrap items-stretch gap-1.5 border-t border-dashed border-[var(--term-border)] pt-sm"
    aria-hidden="true"
  >
    {items.map((item) => {
      const t = toneTokens[item.tone];
      return (
        <li
          key={item.key}
          className={cn(
            'flex flex-1 min-w-[110px] items-center gap-1.5 rounded-md border px-2 py-1.5',
            item.active ? cn(t.chip, t.border) : 'border-[var(--term-border)] bg-[var(--term-bg)]',
          )}
        >
          <span
            className={cn(
              'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
              item.active ? t.dot : 'bg-[var(--term-dim)]',
            )}
          />
          <span className="flex min-w-0 flex-col">
            <span
              className={cn(
                'text-[10px] font-bold leading-tight break-keep',
                item.active ? t.text : 'text-[var(--term-fg)]',
              )}
            >
              {item.label}
            </span>
            {item.subLabel && (
              <span className="text-[9px] leading-tight text-[var(--term-muted)] break-keep">
                {item.subLabel}
              </span>
            )}
          </span>
        </li>
      );
    })}
  </ol>
);

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
