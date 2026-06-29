import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { HeroDiagramShell } from '../../../shared/hero';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent, LegendItem } from '../content';
import { legendIconByName } from '../icons';

type Props = { content: CompleteWorkContent['hero'] };

const HERO_CODE = `completeUnitOfWork(unitOfWork) {
  completeWork(...);     // 현재 Fiber 마무리
  bubbleProperties(...); // flags를 부모로 버블업
}`;

/** 단계별 강조 tone — 하강/완료/형제/부모/커밋 흐름에 맞춰 부여. */
const stepTones: ToneKey[] = ['teal', 'violet', 'indigo', 'violet', 'sky'];

/**
 * Hero 핵심 비주얼.
 * completeUnitOfWork: 현재 Fiber를 마치고 형제 또는 부모로 올라가며
 * 서브트리 정보를 버블업하는 흐름을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const CompleteWorkHeroDiagram = ({ content }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.legendTitle}: ${diagram.legend
    .map((l) => `${l.label} ${l.detail}`)
    .join(', ')}. ${diagram.stepsTitle}: ${diagram.steps
    .map((s) => `${s.title} ${s.description}`)
    .join(' → ')}`;

  return (
    <HeroDiagramShell a11yLabel={a11y}>
      <div className="relative flex flex-col gap-sm" aria-hidden="true">
        <Legend title={diagram.legendTitle} items={diagram.legend} />

        <CodePreviewPanel code={HERO_CODE} showWindowDots language="JS" size="md" />

        <DownArrow />

        <section className="flex flex-col gap-sm">
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
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
    </HeroDiagramShell>
  );
};

const Legend = ({ title, items }: { title: string; items: LegendItem[] }) => (
  <section className="flex flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
    <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {title}
    </span>
    <ul className="flex flex-col gap-sm">
      {items.map((item) => {
        const Icon = legendIconByName[item.icon];
        return (
          <li key={item.label} className="flex items-center gap-sm">
            <ToneIconBox tone={item.tone} size="sm">
              <Icon className="h-[18px] w-[18px]" />
            </ToneIconBox>
            <div className="flex min-w-0 flex-col">
              <span
                className={cn(
                  'text-sm font-bold tracking-tight break-keep',
                  toneTokens[item.tone].text,
                )}
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
        'flex items-center gap-sm rounded-lg border bg-[var(--term-bg)] px-md py-2.5',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        t.border,
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
