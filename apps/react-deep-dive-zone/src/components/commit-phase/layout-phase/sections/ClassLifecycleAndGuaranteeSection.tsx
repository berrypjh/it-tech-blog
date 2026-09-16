import { Fragment } from 'react';

import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Component,
  Lightbulb,
  ListChecks,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { LayoutPhaseContent } from '../content';

type Props = {
  classLifecycle: LayoutPhaseContent['classLifecycle'];
  guarantee: LayoutPhaseContent['guarantee'];
};

export const ClassLifecycleAndGuaranteeSection = ({ classLifecycle, guarantee }: Props) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
    <ClassLifecycleCard content={classLifecycle} />
    <GuaranteeCard content={guarantee} />
  </div>
);

const ClassLifecycleCard = ({ content }: { content: LayoutPhaseContent['classLifecycle'] }) => (
  <section
    id="class-lifecycle"
    aria-labelledby="heading-class-lifecycle"
    className="space-y-md scroll-mt-xl flex flex-col h-full"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="class-lifecycle"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Component className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="flex flex-1 flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      {/* Flow */}
      <ol className="flex flex-col sm:flex-row sm:items-stretch gap-2">
        {content.flowSteps.map((step, idx) => (
          <Fragment key={step.label}>
            <li className="flex-1 min-w-0">
              <FlowPill label={step.label} tone={step.tone} />
            </li>
            {idx < content.flowSteps.length - 1 && (
              <li
                aria-hidden="true"
                className="flex sm:items-center justify-center text-[var(--term-dim)]"
              >
                <ArrowRight className="h-4 w-4 hidden sm:inline-block" aria-hidden="true" />
                <ArrowDown className="h-4 w-4 sm:hidden my-1" aria-hidden="true" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Lifecycle names */}
      <div
        className={cx(
          'flex flex-wrap gap-2 rounded-lg border p-sm',
          toneTokens.violet.border,
          'bg-[var(--term-surface)]',
        )}
      >
        <span
          className={cx(
            'text-[10px] font-mono uppercase tracking-wider font-bold w-full',
            toneTokens.violet.text,
          )}
        >
          {content.lifecycleLabel}
        </span>
        {content.lifecycleNames.map((name) => (
          <code
            key={name}
            className={cx(
              'inline-flex items-center rounded-md border px-2 py-1 text-[11px] font-mono font-bold',
              toneTokens.violet.chip,
            )}
          >
            {name}
          </code>
        ))}
      </div>
    </article>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);

const FlowPill = ({ label, tone }: { label: string; tone: ToneKey }) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex h-full flex-col items-center justify-center gap-1 rounded-lg border-2 p-sm sm:p-md text-center',
        t.fill.border,
        t.fill.bg,
      )}
    >
      <code className={cx('text-xsm sm:text-sm font-mono font-bold break-all', t.fill.text)}>
        {label}
      </code>
    </article>
  );
};

const GuaranteeCard = ({ content }: { content: LayoutPhaseContent['guarantee'] }) => {
  const t = toneTokens.teal;
  return (
    <section
      id="layout-guarantee"
      aria-labelledby="heading-layout-guarantee"
      className="space-y-md scroll-mt-xl flex flex-col h-full"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="layout-guarantee"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
      />

      <article
        className={cx(
          'flex flex-1 flex-col gap-sm rounded-lg border-2 p-md sm:p-lg',
          t.fill.border,
          t.fill.bg,
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ul className="flex flex-col gap-2">
          {content.items.map((item) => (
            <li
              key={item.text}
              className={cx(
                'flex items-start gap-2 rounded-md border bg-[var(--term-bg)] p-sm',
                t.border,
              )}
            >
              <span
                aria-hidden="true"
                className={cx(
                  'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
                  t.chip,
                )}
              >
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className={cx('text-xsm sm:text-sm leading-snug break-keep', t.fill.text)}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
