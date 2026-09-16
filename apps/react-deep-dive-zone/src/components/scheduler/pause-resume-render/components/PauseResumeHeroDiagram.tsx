import { cx } from '@berrypjh/react-ui';
import { Hand, PauseCircle, PlayCircle } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { TerminalBadge } from '../../../shared/terminal';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { Frame, PauseResumeContent } from '../content';

type Props = { content: PauseResumeContent['hero'] };

/** Hero 핵심 비주얼: 프레임 두 개 사이에 브라우저 양보 구간이 끼어 있는 구조. */
export const PauseResumeHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;
  const [first, second] = content.frames;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <div className="flex items-center justify-between">
          <TerminalBadge dotClassName="bg-[var(--term-accent)]">
            {content.diagramBadge}
          </TerminalBadge>
          <span className="font-mono text-[10px] text-[var(--term-muted)]">
            {'//'} {content.diagramCaption}
          </span>
        </div>

        <FrameCard frame={first} icon={<PauseCircle className="h-4 w-4" />} />

        <DownArrow />

        <article className="flex items-center gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2.5 shadow-[0_2px_0_var(--term-border)]">
          <Hand className="h-3.5 w-3.5 shrink-0 text-[var(--term-accent)]" aria-hidden="true" />
          <span className="text-[11px] font-bold text-[var(--term-fg)] break-keep">
            {content.bridgeLabel}
          </span>
        </article>

        <DownArrow />

        <FrameCard frame={second} icon={<PlayCircle className="h-4 w-4" />} />
      </div>
    </HeroDiagramShell>
  );
};

const FrameCard = ({ frame, icon }: { frame: Frame; icon: React.ReactNode }) => {
  const t = toneTokens[frame.tone];
  return (
    <article
      className={cx(
        'rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="mb-2 flex items-center gap-sm border-b border-dashed border-[var(--term-border)] pb-2">
        <ToneIconBox tone={frame.tone} size="sm" className="h-7 w-7">
          {icon}
        </ToneIconBox>
        <code className={cx('font-mono text-[11px] font-bold', t.text)}>{frame.label}</code>
      </header>

      <ol className="flex flex-col gap-1">
        {frame.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-[var(--term-dim)]">{'>'}</span>
            <span className="text-[11px] text-[var(--term-fg)] break-keep">{item}</span>
          </li>
        ))}
      </ol>

      <p className="mt-2 border-t border-dashed border-[var(--term-border)] pt-2 font-mono text-[10px] text-[var(--term-muted)]">
        {frame.tail}
      </p>
    </article>
  );
};
