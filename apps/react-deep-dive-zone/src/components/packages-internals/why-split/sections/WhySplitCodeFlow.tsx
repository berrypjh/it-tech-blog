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

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.95fr)_minmax(0,_1.05fr)] gap-md items-stretch">
        <div className="flex flex-col gap-2">
          <CodePreviewPanel code={content.code} language={content.codeCaption} />
          <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {'// '}사용자 코드 예시
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-sm content-start">
          {content.steps.map((step, index) => (
            <li key={step.id}>
              <FlowStepCard
                step={step}
                index={index + 1}
                isLast={index === content.steps.length - 1}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

type FlowStepCardProps = { step: FlowStep; index: number; isLast: boolean };

const FlowStepCard = ({ step, index, isLast }: FlowStepCardProps) => {
  const tone = toneTokens[step.tone];
  const Icon = architectureIcon[step.iconName];

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col gap-1.5 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums">
          step {String(index).padStart(2, '0')}
        </span>
      </header>
      <h3 className="text-sm font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {step.title}
      </h3>
      <p className={cn('text-[11px] uppercase tracking-wider font-mono font-bold', tone.text)}>
        → {step.pkg}
      </p>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
      {!isLast && (
        <span
          aria-hidden="true"
          className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-[var(--term-accent)] text-xl"
        >
          →
        </span>
      )}
    </article>
  );
};
