import { cx } from '@berrypjh/react-ui';
import {
  ArrowRight,
  Database,
  FileText,
  Flag,
  Lightbulb,
  type LucideIcon,
  Settings,
  SquareDashed,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type {
  EnqueueConcurrentHookUpdateContent,
  EnqueueMeaningIcon,
  EnqueueMeaningStep,
} from '../content';

const elementIconByName: Record<EnqueueMeaningIcon, LucideIcon> = {
  squareDashed: SquareDashed,
  database: Database,
  fileText: FileText,
  flag: Flag,
};

type Props = { content: EnqueueConcurrentHookUpdateContent['meaning'] };

const emerald = toneTokens.emerald;

export const EnqueueUpdateMeaningSection = ({ content }: Props) => (
  <section id="meaning" aria-labelledby="heading-meaning" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="meaning"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Settings className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="amber" size="sm">
          <Lightbulb className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.descriptionTitle}
        </h3>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.descriptionBody}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {content.tags.map((tag) => (
            <li
              key={tag.label}
              className={cx(
                'rounded-md border px-2 py-0.5 text-[10px] font-mono',
                toneTokens[tag.tone].chip,
              )}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </article>

      {/* 우: 가로 흐름 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ol className="flex flex-wrap items-center justify-center gap-2 sm:gap-1.5">
          {content.flow.map((step, idx) => (
            <li key={step.label} className="flex items-center gap-2 sm:gap-1.5">
              <SmallChip step={step} />
              {idx < content.flow.length - 1 && (
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-dim)]" />
              )}
            </li>
          ))}
          <li className="flex items-center gap-2 sm:gap-1.5">
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 text-[var(--term-dim)]" />
            <FinalCard label={content.finalLabel} body={content.finalBody} />
          </li>
        </ol>
      </article>
    </div>
  </section>
);

const SmallChip = ({ step }: { step: EnqueueMeaningStep }) => {
  const Icon = elementIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 font-mono',
        t.chip,
      )}
    >
      <Icon aria-hidden="true" className="h-3.5 w-3.5" />
      <span className={cx('text-xsm font-bold', t.text)}>{step.label}</span>
    </span>
  );
};

const FinalCard = ({ label, body }: { label: string; body: string }) => (
  <span
    className={cx(
      'inline-flex flex-col items-center gap-0.5 rounded-lg border px-3 py-2 max-w-[18ch]',
      emerald.border,
      emerald.fill.bg,
    )}
  >
    <span
      className={cx(
        'text-xsm sm:text-sm font-bold font-mono leading-tight text-center break-keep',
        emerald.fill.text,
      )}
    >
      {label}
    </span>
    <span className="text-[10px] leading-snug text-center text-[var(--term-muted)] break-keep">
      {body}
    </span>
  </span>
);
