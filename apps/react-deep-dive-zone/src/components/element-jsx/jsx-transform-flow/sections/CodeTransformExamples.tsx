'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ExampleLegend, JsxTransformFlowContent, TransformExample } from '../content';
import { ArrowDownIcon, InfoIcon, LayersIcon } from '../icons';
import { localTone } from '../localTone';

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

      {/* controls: 탭 전환 + 범례 */}
      <div className="flex flex-col gap-md md:flex-row md:items-center md:justify-between">
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

      {/* 예제 카드 그리드 */}
      <ul className="grid grid-cols-1 gap-md lg:grid-cols-2">
        {content.examples.map((example) => (
          <li key={example.id} className="flex">
            <ExampleCard
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

      {/* 하단 참고 노트 */}
      <div
        className={cn(
          'flex items-start gap-sm rounded-2xl border px-md py-3',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span aria-hidden="true" className="text-sky-600 dark:text-sky-300 shrink-0 mt-0.5">
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.bottomNote}
        </p>
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
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-xsm font-bold transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-surface)]',
      active
        ? 'bg-slate-900 text-slate-50 dark:bg-slate-700 dark:text-slate-50'
        : 'text-[var(--term-muted)] hover:text-[var(--term-fg)]',
    )}
  >
    {children}
  </button>
);

const LegendPill = ({ item }: { item: ExampleLegend }) => {
  const t = localTone(item.tone);
  return (
    <li>
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider font-mono',
          t.chip,
          t.text,
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

const ExampleCard = ({
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
  const tone = matchedLegend ? localTone(matchedLegend.tone) : null;
  return (
    <article
      id={panelId}
      className={cn(
        'flex flex-1 flex-col overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        'border-[var(--term-border)]',
        tone ? tone.borderHover : '',
      )}
    >
      {/* 카드 헤더: 제목 + 범례 토큰 */}
      <header className="flex items-center justify-between gap-sm border-b border-dashed border-[var(--term-border)] px-md py-3">
        <h3 className="flex items-center gap-2 text-xsm font-bold tracking-tight text-[var(--term-fg)]">
          <span
            aria-hidden="true"
            className={cn(
              'inline-block w-1.5 h-1.5 rounded-full',
              tone ? tone.dot : 'bg-[var(--term-accent)]',
            )}
          />
          {example.title}
        </h3>
        {matchedLegend ? (
          <span
            className={cn(
              'inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-bold font-mono',
              tone
                ? cn(tone.chip, tone.text)
                : 'border border-[var(--term-border)] text-[var(--term-muted)]',
            )}
          >
            {matchedLegend.label}
          </span>
        ) : null}
      </header>

      {/* 코드 비교: JSX ↓ 컴파일 결과 */}
      <div className="flex flex-col gap-2 p-md">
        <div>
          <PanelLabel active={tab === 'jsx'}>{previewLabel}</PanelLabel>
          <div className={cn('rounded-lg transition-all duration-200', emphasis(tab === 'jsx'))}>
            <CodePreviewPanel code={example.jsx} language="JSX" />
          </div>
        </div>

        <div aria-hidden="true" className="flex items-center justify-center py-0.5">
          <span
            className={cn(
              'inline-flex items-center justify-center w-7 h-7 rounded-full',
              'bg-[var(--term-surface)] border border-[var(--term-border)]',
              tone ? tone.text : 'text-[var(--term-accent)]',
            )}
          >
            <ArrowDownIcon className="h-4 w-4" />
          </span>
        </div>

        <div>
          <PanelLabel active={tab === 'compiled'}>{compiledLabel}</PanelLabel>
          <div
            className={cn('rounded-lg transition-all duration-200', emphasis(tab === 'compiled'))}
          >
            <CodePreviewPanel code={example.compiled} language="JS" />
          </div>
        </div>
      </div>

      {/* 설명 */}
      <div
        className={cn(
          'mt-auto flex flex-col gap-1.5 border-t px-md py-3',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          className={cn(
            'inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            tone ? tone.text : 'text-[var(--term-muted)]',
          )}
        >
          {descriptionLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {example.description}
        </p>
      </div>
    </article>
  );
};

/** 비활성 패널은 더 흐리게/축소, 활성 패널은 sky 링으로 강조한다. */
const emphasis = (active: boolean) =>
  active
    ? 'ring-2 ring-sky-400/60 ring-offset-2 ring-offset-[var(--term-bg)] dark:ring-sky-500/50'
    : 'opacity-40 saturate-50 scale-[0.98]';

const PanelLabel = ({ active, children }: { active: boolean; children: React.ReactNode }) => (
  <h4
    className={cn(
      'mb-1.5 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono transition-colors',
      active ? 'font-bold text-sky-600 dark:text-sky-300' : 'text-[var(--term-muted)]',
    )}
  >
    {active ? (
      <span
        aria-hidden="true"
        className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-sky-500"
      />
    ) : null}
    {children}
  </h4>
);
