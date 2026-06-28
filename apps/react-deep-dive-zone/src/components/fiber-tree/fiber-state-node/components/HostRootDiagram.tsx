import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberStateNodeContent } from '../content';
import { ArrowDownIcon } from '../icons';

type Diagram = FiberStateNodeContent['hostRoot']['diagram'];
type Props = { diagram: Diagram };

type Field = { label: string; highlight?: boolean };

export const HostRootDiagram = ({ diagram }: Props) => (
  <div
    className={cn(
      'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ObjectCard
      tone="sky"
      title={diagram.leftTitle}
      subtitle={diagram.leftSubtitle}
      fields={diagram.leftFields.map((label) => ({ label, highlight: label === 'current' }))}
    />

    <Connector currentLabel={diagram.arrow1Label} stateNodeLabel={diagram.arrow2Label} />

    <ObjectCard
      tone="emerald"
      title={diagram.rightTitle}
      subtitle={diagram.rightSubtitle}
      fields={diagram.rightFields.map((f) => ({ label: f.label, highlight: f.isStateNode }))}
    />
  </div>
);

const ObjectCard = ({
  tone,
  title,
  subtitle,
  fields,
}: {
  tone: ToneKey;
  title: string;
  subtitle: string;
  fields: Field[];
}) => {
  const t = toneTokens[tone];
  return (
    <article className={cn('min-w-0 rounded-xl border-2 bg-[var(--term-bg)] p-md', t.border)}>
      <header className="mb-2 min-w-0">
        <h3 className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{title}</h3>
        <span className="block text-[10px] font-mono text-[var(--term-muted)] break-all">
          {subtitle}
        </span>
      </header>
      <ul className="flex flex-col gap-0.5">
        {fields.map((f, i) => (
          <li
            key={`${f.label}-${i}`}
            className={cn(
              'rounded-md px-2 py-1 text-[11.5px]',
              f.highlight ? cn('border font-bold', t.chip) : 'text-[var(--term-muted)]',
            )}
          >
            <code className="font-mono break-all">{f.label}</code>
          </li>
        ))}
      </ul>
    </article>
  );
};

/** 위 카드(FiberRoot)와 아래 카드(HostRoot Fiber)를 잇는 양방향 연결. current는 아래로, stateNode는 위로. */
const Connector = ({
  currentLabel,
  stateNodeLabel,
}: {
  currentLabel: string;
  stateNodeLabel: string;
}) => (
  <div className="flex items-stretch justify-center gap-lg" aria-hidden="true">
    <div className="flex flex-col items-center gap-1">
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono',
          toneTokens.sky.chip,
        )}
      >
        {currentLabel}
      </span>
      <ArrowDownIcon className={cn('h-4 w-4', toneTokens.sky.text)} />
    </div>

    <div className="flex flex-col items-center gap-1">
      <ArrowDownIcon className={cn('h-4 w-4 rotate-180', toneTokens.emerald.text)} />
      <span
        className={cn(
          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold font-mono',
          toneTokens.emerald.chip,
        )}
      >
        {stateNodeLabel}
      </span>
    </div>
  </div>
);
