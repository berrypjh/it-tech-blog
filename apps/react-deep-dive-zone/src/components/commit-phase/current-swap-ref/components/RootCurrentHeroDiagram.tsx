import { cx } from '@berrypjh/react-ui';
import { History, Rocket, TreePine } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CommitTimelineItem, RootCurrentRefContent } from '../content';

type Props = { content: RootCurrentRefContent['hero'] };

/**
 * Hero 핵심 비주얼.
 * Commit 후 root.current 포인터가 기존 current tree에서 새 finishedWork tree로
 * 전환되는 흐름을, 위에서 아래로 잇는 컴팩트 stepper.
 */
export const RootCurrentHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.leftTitle} → ${diagram.centerLabel}: ${diagram.centerFormula} → ${diagram.rightTitle}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <TreeCard
          tone="violet"
          title={diagram.leftTitle}
          subtitle={diagram.leftSubtitle}
          icon={<History className="h-4 w-4" />}
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
          title={diagram.rightTitle}
          subtitle={diagram.rightSubtitle}
          icon={<Rocket className="h-4 w-4" />}
        />

        <Timeline items={diagram.timeline} />
      </div>
    </HeroDiagramShell>
  );
};

const TreeCard = ({
  tone,
  title,
  subtitle,
  icon,
}: {
  tone: ToneKey;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div
      className={cx(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        {icon}
      </ToneIconBox>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cx('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span className="flex items-center gap-1.5 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          <TreePine className="h-3.5 w-3.5 shrink-0" />
          {subtitle}
        </span>
      </div>
    </div>
  );
};

const Timeline = ({ items }: { items: CommitTimelineItem[] }) => (
  <ol className="flex flex-wrap items-stretch gap-1.5 border-t border-dashed border-[var(--term-border)] pt-sm">
    {items.map((item) => {
      const t = toneTokens[item.tone];
      return (
        <li
          key={item.key}
          className={cx(
            'flex flex-1 min-w-[110px] items-center gap-1.5 rounded-md border px-2 py-1.5',
            item.active ? cx(t.chip, t.border) : 'border-[var(--term-border)] bg-[var(--term-bg)]',
          )}
        >
          <span
            className={cx(
              'inline-block h-1.5 w-1.5 shrink-0 rounded-full',
              item.active ? t.dot : 'bg-[var(--term-dim)]',
            )}
          />
          <span className="flex min-w-0 flex-col">
            <span
              className={cx(
                'text-[10px] font-bold leading-tight break-keep',
                item.active ? t.text : 'text-[var(--term-fg)]',
              )}
            >
              {item.label}
            </span>
            {item.subLabel && (
              <span className="text-[10px] leading-tight text-[var(--term-muted)] break-keep">
                {item.subLabel}
              </span>
            )}
          </span>
        </li>
      );
    })}
  </ol>
);
