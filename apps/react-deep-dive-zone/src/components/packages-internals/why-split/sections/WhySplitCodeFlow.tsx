import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, WhySplitContent } from '../content';
import { architectureIcon, ArrowRightIcon } from '../icons';

type Props = { content: WhySplitContent['codeFlow'] };

export const WhySplitCodeFlow = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-code-flow" className="space-y-md">
      <SectionHeader
        id="code-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowRightIcon className="h-5 w-5" />}
      />

      {/* 상단: 사용자 코드 */}
      <CodePreviewPanel
        code={content.code}
        header={content.codeCaption}
        caption="사용자 코드 예시"
      />

      {/* 하단: 코드가 거치는 단계 (01 → N) */}
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.steps.map((step, index) => (
          <li key={step.id}>
            <FlowStepCard step={step} index={index + 1} />
          </li>
        ))}
      </ol>
    </section>
  );
};

type FlowStepCardProps = { step: FlowStep; index: number };

const FlowStepCard = ({ step, index }: FlowStepCardProps) => {
  const tone = toneTokens[step.tone];
  const Icon = architectureIcon[step.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-1.5 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)] border-[var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border',
            'text-[11px] font-bold font-mono tabular-nums',
            tone.chip,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <h3 className="min-w-0 text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {step.title}
        </h3>
      </header>
      <p className={cn('text-[11px] uppercase tracking-wider font-mono font-bold', tone.text)}>
        → {step.pkg}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};
