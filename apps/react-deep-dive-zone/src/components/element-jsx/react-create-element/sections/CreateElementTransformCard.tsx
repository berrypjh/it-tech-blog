'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FieldCallout, ReactCreateElementContent } from '../content';
import { ArrowRightIcon, SparklesIcon, WandIcon } from '../icons';
import { localTone } from '../localTone';

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
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-surface)]',
                  tab === t.id
                    ? 'border border-transparent bg-slate-900 text-slate-50 dark:border-slate-600 dark:bg-slate-800'
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
            accent="b"
          />
          <FlowArrow />
          <FlowStep
            active={tab === 'create-element'}
            label={content.expressionLabel}
            code={content.expressionCode}
            footer={content.expressionFooter}
            language="JS"
            accent="c"
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

const accentText = {
  b: 'text-sky-600 dark:text-sky-300',
  c: 'text-violet-600 dark:text-violet-300',
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
  accent: keyof typeof accentText;
}) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border p-md min-w-0',
      'bg-[var(--term-bg)] border-[var(--term-border)]',
      active ? 'ring-2 ring-offset-2 ring-offset-[var(--term-bg)] ring-[var(--term-accent)]' : '',
    )}
  >
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
        accentText[accent],
      )}
    >
      {label}
    </span>
    <CodePreviewPanel code={code} language={language} />
    <p className={cn('text-xsm leading-relaxed break-keep', accentText[accent])}>{footer}</p>
  </article>
);

const FlowArrow = () => (
  <div className="hidden lg:flex items-center justify-center -mx-2" aria-hidden="true">
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </div>
);

const FlowResult = ({ active, label, code }: { active: boolean; label: string; code: string }) => (
  <article
    className={cn(
      'flex flex-col gap-2 rounded-2xl border p-md min-w-0',
      'bg-[var(--term-bg)] border-[var(--term-border)]',
      active ? 'ring-2 ring-offset-2 ring-offset-[var(--term-bg)] ring-[var(--term-accent)]' : '',
    )}
  >
    <span className="inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--term-accent)]">
      {label}
    </span>
    <CodePreviewPanel code={code} language="JS" />
  </article>
);

const CalloutCard = ({ callout }: { callout: FieldCallout }) => {
  const t = localTone(callout.tone);
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-1 rounded-xl border p-md',
        'bg-[var(--term-bg)] border-[var(--term-border)]',
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
