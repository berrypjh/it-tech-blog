import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { PerformUnitContent } from '../content';
import { ArrowDownIcon, ArrowUpIcon, BoxIcon, HelpCircleIcon, SettingsIcon } from '../icons';

type Props = { content: PerformUnitContent['hero']; className?: string };

/**
 * Hero 핵심 비주얼.
 * Fiber 하나를 처리(beginWork)한 뒤, 자식이 있으면 아래로 내려가고
 * 없으면 complete 단계로 전환하는 work loop 한 스텝을 위에서 아래로 잇는 컴팩트 stepper.
 */
export const PerformUnitHeroDiagram = ({ content, className }: Props) => {
  const { diagram } = content;
  const a11y = `${diagram.step1.title} → ${diagram.step2.title} → ${diagram.decision.title} — ${diagram.yes.label}: ${diagram.yes.title} (${diagram.yes.description}), ${diagram.no.label}: ${diagram.no.title} (${diagram.no.description})`;

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
        <CodePreviewPanel
          code="performUnitOfWork(unitOfWork);"
          showWindowDots
          language="JS"
          size="md"
        />

        <DownArrow />

        <StepRow
          tone="sky"
          icon={<BoxIcon className="h-[18px] w-[18px]" />}
          title={diagram.step1.title}
        />

        <DownArrow />

        <StepRow
          tone="sky"
          icon={<SettingsIcon className="h-[18px] w-[18px]" />}
          title={diagram.step2.title}
        />

        <DownArrow />

        <DecisionRow title={diagram.decision.title} />

        <DownArrow />

        <div className="grid grid-cols-1 gap-sm @sm:grid-cols-2">
          <BranchCard
            tone="teal"
            icon={<ArrowDownIcon className="h-[18px] w-[18px]" />}
            label={diagram.yes.label}
            title={diagram.yes.title}
            description={diagram.yes.description}
          />
          <BranchCard
            tone="violet"
            icon={<ArrowUpIcon className="h-[18px] w-[18px]" />}
            label={diagram.no.label}
            title={diagram.no.title}
            description={diagram.no.description}
          />
        </div>
      </div>
    </div>
  );
};

const StepRow = ({
  tone,
  icon,
  title,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  title: string;
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
        {icon}
      </ToneIconBox>
      <span className={cn('font-mono text-sm font-bold tracking-tight break-keep', t.text)}>
        {title}
      </span>
    </article>
  );
};

const DecisionRow = ({ title }: { title: string }) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      toneTokens.indigo.borderHover,
    )}
  >
    <ToneIconBox tone="indigo" size="sm">
      <HelpCircleIcon className="h-[18px] w-[18px]" />
    </ToneIconBox>
    <span className={cn('text-sm font-bold tracking-tight break-keep', toneTokens.indigo.text)}>
      {title}
    </span>
  </article>
);

const BranchCard = ({
  tone,
  icon,
  label,
  title,
  description,
}: {
  tone: ToneKey;
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex min-w-0 flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span className="flex items-center gap-sm">
        <ToneIconBox tone={tone} size="sm">
          {icon}
        </ToneIconBox>
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            t.chip,
          )}
        >
          {label}
        </span>
      </span>
      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">{title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{description}</p>
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
