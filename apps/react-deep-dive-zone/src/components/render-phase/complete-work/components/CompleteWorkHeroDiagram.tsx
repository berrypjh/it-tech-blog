import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent, LegendItem } from '../content';
import { ArrowDownIcon, ArrowUpIcon, CircleDashedIcon } from '../icons';

type Props = { content: CompleteWorkContent['hero']; className?: string };

const HERO_CODE = `completeUnitOfWork(unitOfWork) {
  completeWork(...);     // 현재 Fiber 마무리
  bubbleProperties(...); // flags를 부모로 버블업
}`;

const legendIconMap = {
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  dashed: CircleDashedIcon,
} as const;

/** 범례 tone(content)을 공유 ToneKey로 매핑. */
const legendToneMap: Record<LegendItem['tone'], ToneKey> = {
  teal: 'teal',
  violet: 'violet',
  sky: 'sky',
  amber: 'amber',
  indigo: 'indigo',
  rose: 'violet',
};

/** 단계별 강조 tone — 하강/완료/형제/부모/커밋 흐름에 맞춰 부여. */
const stepTones: ToneKey[] = ['teal', 'violet', 'indigo', 'violet', 'sky'];

/**
 * Hero 핵심 비주얼.
 * completeUnitOfWork: 현재 Fiber를 마치고 형제 또는 부모로 올라가며
 * 서브트리 정보를 버블업하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const CompleteWorkHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.legendTitle}: ${diagram.legend
    .map((l) => `${l.label} ${l.detail}`)
    .join(', ')}. ${diagram.stepsTitle}: ${diagram.steps
    .map((s) => `${s.title} ${s.description}`)
    .join(' → ')}`;

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

      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <Legend title={diagram.legendTitle} items={diagram.legend} />

        <CodePreviewPanel code={HERO_CODE} showWindowDots language="JS" size="md" />

        <DownArrow />

        <section className="flex flex-col gap-sm">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {diagram.stepsTitle}
          </span>
          <ol className="flex flex-col gap-sm">
            {diagram.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-sm">
                <StepRow
                  index={i + 1}
                  tone={stepTones[i] ?? 'sky'}
                  title={step.title}
                  description={step.description}
                />
                {i < diagram.steps.length - 1 && <DownArrow />}
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

const Legend = ({ title, items }: { title: string; items: LegendItem[] }) => (
  <section className="flex flex-col gap-sm rounded-xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {title}
    </span>
    <ul className="flex flex-col gap-sm">
      {items.map((item) => {
        const tone = legendToneMap[item.tone];
        const Icon = legendIconMap[item.iconName];
        return (
          <li key={item.label} className="flex items-center gap-sm">
            <ToneIconBox tone={tone} size="sm">
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </ToneIconBox>
            <div className="flex min-w-0 flex-col">
              <span
                className={cn('text-sm font-bold tracking-tight break-keep', toneTokens[tone].text)}
              >
                {item.label}
              </span>
              <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {item.detail}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

const StepRow = ({
  index,
  tone,
  title,
  description,
}: {
  index: number;
  tone: ToneKey;
  title: string;
  description: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <ToneIconBox tone={tone} size="sm">
        <span className="font-mono text-sm font-bold tabular-nums">{index}</span>
      </ToneIconBox>
      <div className="flex min-w-0 flex-col">
        <span className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{title}</span>
        <span className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {description}
        </span>
      </div>
    </article>
  );
};

const DownArrow = () => (
  <span
    aria-hidden="true"
    className="inline-flex items-center justify-center text-[var(--term-accent)] text-lg leading-none"
  >
    ↓
  </span>
);
