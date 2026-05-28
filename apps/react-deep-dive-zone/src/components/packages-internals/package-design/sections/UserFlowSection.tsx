import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, PackageDesignContent } from '../content';
import { pdIcon } from '../icons';

type Props = { content: PackageDesignContent['userFlow'] };

export const UserFlowSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-user-flow" className="space-y-md">
      <SectionHeader
        id="user-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<pdIcon.workflow className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        <div className="flex flex-col gap-2">
          <CodePreviewPanel code={content.code} language={content.codeCaption} />
          <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            {'// '}사용자 코드 예시
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-sm content-start">
          {content.steps.map((step, index) => (
            <li key={step.id}>
              <FlowStepCard step={step} index={index + 1} />
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        <SideAxisCard
          title={content.sideScheduler.title}
          body={content.sideScheduler.description}
          tone="cyan"
        />
        <SideAxisCard
          title={content.sideShared.title}
          body={content.sideShared.description}
          tone="amber"
        />
      </div>
    </section>
  );
};

const FlowStepCard = ({ step, index }: { step: FlowStep; index: number }) => {
  const tone = toneTokens[step.tone];
  const Icon = pdIcon[step.iconName];

  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-1.5 rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <ToneIconBox tone={step.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono tabular-nums">
          {step.step} · {String(index).padStart(2, '0')}
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
    </article>
  );
};

const SideAxisCard = ({
  title,
  body,
  tone,
}: {
  title: string;
  body: string;
  tone: 'cyan' | 'amber';
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1 rounded-xl border-2 border-dashed p-md',
        t.border,
        t.chip,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <h3 className={cn('text-sm font-bold font-mono tracking-tight', t.text)}>{title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{body}</p>
    </article>
  );
};
