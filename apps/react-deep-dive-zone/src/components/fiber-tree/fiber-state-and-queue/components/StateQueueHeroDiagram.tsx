import { cx } from '@berrypjh/react-ui';
import { Database, List } from 'lucide-react';

import { HeroDiagramShell } from '../../../shared/hero';
import { DownArrow } from '../../../shared/icon';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberStateAndQueueContent } from '../content';

import { fieldTone } from './fieldTone';

type Props = { content: FiberStateAndQueueContent['hero'] };

type FieldCard = FiberStateAndQueueContent['hero']['memoizedCard'];

/**
 * Hero 핵심 비주얼.
 * 하나의 Fiber 노드가 가진 필드 목록에서 memoizedState(현재 state)와
 * updateQueue(대기 중인 업데이트)가 각각 별도 카드로 갈라지는 흐름을
 * 위에서 아래로 잇는 컴팩트 stepper.
 */
export const StateQueueHeroDiagram = ({ content }: Props) => {
  const a11y = `${content.cardLabel} → ${content.memoizedCard.title} (${content.memoizedCard.subtitle}), ${content.updateQueueCard.title} (${content.updateQueueCard.subtitle})`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <FiberCard label={content.cardLabel} fields={content.fiberFields} />

        <DownArrow />

        <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <FieldCardView
            tone={fieldTone.memoizedState}
            card={content.memoizedCard}
            icon={<Database className="h-[18px] w-[18px]" aria-hidden="true" />}
          />
          <FieldCardView
            tone={fieldTone.updateQueue}
            card={content.updateQueueCard}
            icon={<List className="h-[18px] w-[18px]" aria-hidden="true" />}
          />
        </div>
      </div>
    </HeroDiagramShell>
  );
};

const FiberCard = ({
  label,
  fields,
}: {
  label: string;
  fields: FiberStateAndQueueContent['hero']['fiberFields'];
}) => (
  <article className="flex flex-col gap-2 rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    <header className="flex items-center justify-between gap-sm">
      <span className="font-mono text-sm font-bold tracking-tight text-[var(--term-fg)]">
        {label}
      </span>
      <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        object
      </span>
    </header>
    <ul className="flex flex-col gap-1">
      {fields.map((f, i) => {
        const tone = f.field ? toneTokens[fieldTone[f.field]] : null;
        return (
          <li
            key={`${f.label}-${i}`}
            className={cx(
              'rounded-md px-2 py-1 text-[12px] font-mono',
              tone ? cx('border font-bold', tone.chip) : 'text-[var(--term-muted)] opacity-80',
            )}
          >
            {f.label}
          </li>
        );
      })}
    </ul>
  </article>
);

const FieldCardView = ({
  tone,
  card,
  icon,
}: {
  tone: ToneKey;
  card: FieldCard;
  icon: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <code
          className={cx('min-w-0 truncate font-mono text-xsm font-bold tracking-tight', t.text)}
        >
          {card.title}
        </code>
      </header>
      <p className="text-[11.5px] font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.subtitle}
      </p>
      <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
