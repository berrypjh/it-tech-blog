import { cx } from '@berrypjh/react-ui';
import { ArrowRight, Gauge } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { TerminalBadge } from '../../../shared/terminal';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSelectionContent, PriorityGrade } from '../content';

type Props = { content: DispatchSelectionContent['hero'] };

/** Hero 핵심 비주얼: 이벤트 이름 묶음이 등급을 거쳐 dispatch wrapper로 갈라지는 표. */
export const DispatchSelectionHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.title.line1} ${content.title.line2} ${content.description}`;

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

        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-sm">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.eventLabel}
          </span>
          <span />
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.wrapperLabel}
          </span>
        </div>

        <ul className="flex flex-col gap-sm">
          {content.grades.map((grade) => (
            <li key={grade.id}>
              <GradeRow grade={grade} />
            </li>
          ))}
        </ul>
      </div>
    </HeroDiagramShell>
  );
};

const GradeRow = ({ grade }: { grade: PriorityGrade }) => {
  const t = toneTokens[grade.tone];
  return (
    <article
      className={cx(
        'grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-xl border-2 bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ul className="flex flex-wrap gap-1">
        {grade.events.slice(0, 3).map((name) => (
          <li key={name}>
            <code className="inline-block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--term-muted)]">
              {name}
            </code>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center gap-0.5">
        <Gauge className={cx('h-3.5 w-3.5', t.text)} />
        <code className={cx('font-mono text-[10px] font-bold uppercase tracking-wider', t.text)}>
          {grade.label}
        </code>
        <ArrowRight className="h-3 w-3 text-[var(--term-accent)]" />
      </div>

      <code className={cx('font-mono text-[10px] font-bold break-all', t.text)}>
        {grade.wrapper}
      </code>
    </article>
  );
};
