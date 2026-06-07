'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { FieldCallout, ReactCreateElementContent } from '../content';
import { ArrowRightIcon, SparklesIcon, WandIcon } from '../icons';

type Props = { content: ReactCreateElementContent['transform'] };

type TabId = 'jsx' | 'create-element' | 'result';

export const CreateElementTransformCard = ({ content }: Props) => {
  const [tab, setTab] = useState<TabId>('jsx');

  return (
    <section id="transform" aria-labelledby="heading-transform" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="transform"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<WandIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* tabs */}
        <div className="flex items-center justify-between gap-md border-b border-dashed border-[var(--term-border)] px-md py-3">
          <div
            role="group"
            aria-label="transform highlight"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-1"
          >
            {content.tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={tab === t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xsm font-bold transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-surface)]',
                  tab === t.id
                    ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
            <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
            transform preview
          </span>
        </div>

        {/* flow */}
        <div className="p-md grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1.4fr)] gap-md items-stretch">
          <FlowStep
            active={tab === 'jsx'}
            label={content.jsxLabel}
            code={content.jsxCode}
            footer={content.jsxFooter}
            language="JSX"
            accent="sky"
          />
          <FlowArrow />
          <FlowStep
            active={tab === 'create-element'}
            label={content.expressionLabel}
            code={content.expressionCode}
            footer={content.expressionFooter}
            language="JS"
            accent="violet"
          />
          <FlowArrow />
          <FlowResult
            active={tab === 'result'}
            label={content.resultLabel}
            code={content.resultCode}
          />
        </div>

        {/* callouts */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md p-md border-t border-dashed border-[var(--term-border)]">
          {content.callouts.map((callout) => (
            <li key={callout.id} className="flex">
              <CalloutCard callout={callout} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const accentMap = {
  sky: {
    border: 'border-sky-300/70 dark:border-sky-800/60',
    chip: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
    text: 'text-sky-700 dark:text-sky-200',
  },
  violet: {
    border: 'border-violet-300/70 dark:border-violet-800/60',
    chip: 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200',
    text: 'text-violet-700 dark:text-violet-200',
  },
} as const;

const FlowStep = ({
  active,
  label,
  code,
  footer,
  language,
  accent,
}: {
  active: boolean;
  label: string;
  code: string;
  footer: string;
  language: string;
  accent: keyof typeof accentMap;
}) => {
  const a = accentMap[accent];
  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-2xl border p-md min-w-0',
        'bg-[var(--term-bg)]',
        a.border,
        active ? 'ring-2 ring-offset-2 ring-offset-[var(--term-bg)] ring-sky-400/60' : '',
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
          a.chip,
        )}
      >
        {label}
      </span>
      <CodePreviewPanel code={code} language={language} />
      <p className={cn('text-xsm leading-relaxed break-keep', a.text)}>{footer}</p>
    </article>
  );
};

const FlowArrow = () => (
  <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow-md">
      <ArrowRightIcon className="h-4 w-4" />
    </span>
  </div>
);

const FlowResult = ({ active, label, code }: { active: boolean; label: string; code: string }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border p-md min-w-0',
      'bg-[var(--term-bg)] border-teal-300/70 dark:border-teal-800/60',
      active ? 'ring-2 ring-offset-2 ring-offset-[var(--term-bg)] ring-teal-400/60' : '',
    )}
  >
    <span className="inline-flex w-fit items-center rounded-full border border-teal-300/80 bg-teal-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200">
      {label}
    </span>
    <CodePreviewPanel code={code} language="JS" />
  </article>
);

const CalloutCard = ({ callout }: { callout: FieldCallout }) => {
  const t = toneTokens[callout.tone];
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)]',
        t.border,
      )}
    >
      <span className={cn('font-mono text-xsm font-bold tracking-tight', t.text)}>
        {callout.field}
      </span>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {callout.description}
      </p>
    </article>
  );
};
