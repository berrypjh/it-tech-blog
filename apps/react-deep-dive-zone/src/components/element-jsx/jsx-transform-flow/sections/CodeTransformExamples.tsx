'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ExampleLegend, JsxTransformFlowContent, TransformExample } from '../content';
import { ArrowRightIcon, InfoIcon, LayersIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['examples'] };

type Tab = 'jsx' | 'compiled';

export const CodeTransformExamples = ({ content }: Props) => {
  const [tab, setTab] = useState<Tab>('jsx');

  return (
    <section id="examples" aria-labelledby="heading-examples" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="examples"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<LayersIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* top controls */}
        <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between border-b border-dashed border-[var(--term-border)] p-md">
          <TabSwitch
            tab={tab}
            onChange={setTab}
            jsxLabel={content.tabJsxLabel}
            compiledLabel={content.tabCompiledLabel}
          />
          <ul className="flex flex-wrap gap-2">
            {content.legend.map((item) => (
              <LegendPill key={item.id} item={item} />
            ))}
          </ul>
        </div>

        {/* examples */}
        <ul className="flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
          {content.examples.map((example) => (
            <li key={example.id} className="p-md">
              <ExampleRow
                example={example}
                tab={tab}
                legend={content.legend}
                descriptionLabel={content.descriptionLabel}
                compiledLabel={content.compiledLabel}
                previewLabel={content.previewLabel}
                panelId={`example-panel-${example.id}`}
              />
            </li>
          ))}
        </ul>

        {/* bottom note */}
        <div
          className={cn(
            'flex items-start gap-sm border-t border-[var(--term-border)] px-md py-3',
            'bg-sky-50/70 dark:bg-sky-950/30',
          )}
        >
          <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5">
            <InfoIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm leading-relaxed text-sky-900 dark:text-sky-100 break-keep">
            {content.bottomNote}
          </p>
        </div>
      </div>
    </section>
  );
};

const TabSwitch = ({
  tab,
  onChange,
  jsxLabel,
  compiledLabel,
}: {
  tab: Tab;
  onChange: (next: Tab) => void;
  jsxLabel: string;
  compiledLabel: string;
}) => (
  <div
    role="group"
    aria-label="code emphasis"
    className="inline-flex items-center gap-1 rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-1"
  >
    <TabButton active={tab === 'jsx'} onClick={() => onChange('jsx')}>
      {jsxLabel}
    </TabButton>
    <TabButton active={tab === 'compiled'} onClick={() => onChange('compiled')}>
      {compiledLabel}
    </TabButton>
  </div>
);

const TabButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    aria-pressed={active}
    onClick={onClick}
    className={cn(
      'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xsm font-bold transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-surface)]',
      active
        ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
        : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
    )}
  >
    {children}
  </button>
);

const LegendPill = ({ item }: { item: ExampleLegend }) => {
  const t = toneTokens[item.tone];
  return (
    <li>
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
        )}
      >
        <span aria-hidden="true" className={cn('inline-block w-1.5 h-1.5 rounded-full', t.dot)} />
        <span className="tracking-normal normal-case font-mono">{item.label}</span>
        <span className="text-[var(--term-muted)] font-normal normal-case">·</span>
        <span className="font-normal normal-case tracking-tight">{item.description}</span>
      </span>
    </li>
  );
};

const ExampleRow = ({
  example,
  tab,
  legend,
  descriptionLabel,
  compiledLabel,
  previewLabel,
  panelId,
}: {
  example: TransformExample;
  tab: Tab;
  legend: ExampleLegend[];
  descriptionLabel: string;
  compiledLabel: string;
  previewLabel: string;
  panelId: string;
}) => {
  const matchedLegend = legend.find((l) => l.id === example.legendId);
  const tone = matchedLegend ? toneTokens[matchedLegend.tone] : null;
  return (
    <div
      id={panelId}
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.2fr)_minmax(0,_0.9fr)] gap-md items-stretch"
    >
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-xsm font-bold tracking-tight text-[var(--term-fg)]">{example.title}</h3>
        <CodePanel code={example.jsx} language="JSX" />
      </div>

      <div aria-hidden="true" className="hidden lg:flex items-center justify-center">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow-md">
          <ArrowRightIcon className="h-4 w-4" />
        </span>
      </div>

      <div className={cn('flex flex-col gap-2 min-w-0', tab === 'jsx' && 'opacity-60')}>
        <h4 className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
          {tab === 'jsx' ? previewLabel : compiledLabel}
        </h4>
        <CodePanel code={example.compiled} language="JS" />
      </div>

      <aside
        className={cn(
          'flex flex-col gap-2 rounded-2xl border p-md min-w-0',
          'bg-[var(--term-surface)]',
          tone ? tone.border : 'border-[var(--term-border)]',
        )}
      >
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            tone
              ? tone.chip
              : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]',
          )}
        >
          {descriptionLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {example.description}
        </p>
      </aside>
    </div>
  );
};
