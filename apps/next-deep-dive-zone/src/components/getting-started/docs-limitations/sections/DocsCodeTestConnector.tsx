'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { LucideIcon } from 'lucide-react';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { ConnectorTopic, DocsLimitsContent } from '../content';
import {
  ActionTabIcon,
  CacheTabIcon,
  CodeIcon,
  ConnectorIcon,
  DocsIcon,
  QuestionIcon,
  TestIcon,
} from '../icons';

type Props = { content: DocsLimitsContent['connector'] };

const tabIcons: Record<ConnectorTopic['id'], LucideIcon> = {
  'server-actions': ActionTabIcon,
  cache: CacheTabIcon,
};

const StepCard = ({
  label,
  icon: Icon,
  tone,
  children,
}: {
  label: string;
  icon: LucideIcon;
  tone: ConnectorTopic['tone'];
  children: React.ReactNode;
}) => {
  const t = toneTokens[tone];
  return (
    <div className="flex h-full flex-col gap-sm rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md min-w-0">
      <div className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex h-7 w-7 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-xsm font-bold text-[var(--term-fg)]">{label}</span>
      </div>
      {children}
    </div>
  );
};

const Arrow = () => (
  <div aria-hidden="true" className="flex items-center justify-center text-[var(--term-dim)]">
    <span className="lg:hidden">↓</span>
    <span className="hidden lg:inline">→</span>
  </div>
);

const PathChips = ({ paths }: { paths: string[] }) => (
  <ul className="flex flex-col gap-1.5">
    {paths.map((p) => (
      <li key={p}>
        <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
          {p}
        </code>
      </li>
    ))}
  </ul>
);

export const DocsCodeTestConnector = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<ConnectorTopic['id']>(content.topics[0].id);
  const topic = content.topics.find((t) => t.id === selectedId) ?? content.topics[0];
  const tt = toneTokens[topic.tone];

  return (
    <section
      id="section-connector"
      aria-labelledby="heading-connector"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="connector"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ConnectorIcon className="h-5 w-5" />}
      />

      {/* 주제 탭 */}
      <ul className="flex flex-wrap gap-2" role="group" aria-label="connector topics">
        {content.topics.map((tp) => {
          const t = toneTokens[tp.tone];
          const Icon = tabIcons[tp.id];
          const isSelected = tp.id === topic.id;
          return (
            <li key={tp.id}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(tp.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xsm font-bold transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                  isSelected
                    ? cn(t.chip, 'ring-1 ring-inset')
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {tp.tab}
              </button>
            </li>
          );
        })}
      </ul>

      {/* 연결 패널: 문서 → 코드 → 테스트/질문 */}
      <div
        aria-live="polite"
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 items-stretch"
      >
        <StepCard label={content.labels.doc} icon={DocsIcon} tone={topic.tone}>
          <ul className="flex flex-wrap gap-1.5">
            {topic.docItems.map((d) => (
              <li key={d}>
                <code
                  className={cn(
                    'inline-block rounded border px-1.5 py-0.5 font-mono text-[10.5px] [overflow-wrap:anywhere]',
                    tt.chip,
                  )}
                >
                  {d}
                </code>
              </li>
            ))}
          </ul>
        </StepCard>

        <Arrow />

        <StepCard label={content.labels.code} icon={CodeIcon} tone={topic.tone}>
          <PathChips paths={topic.codePaths} />
        </StepCard>

        <Arrow />

        <StepCard label={content.labels.test} icon={TestIcon} tone={topic.tone}>
          {topic.testPaths.length > 0 && <PathChips paths={topic.testPaths} />}
          {topic.testNote && (
            <p className="text-[11px] italic text-[var(--term-muted)] break-keep">
              {topic.testNote}
            </p>
          )}
          <div className="mt-1 flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
              {content.labels.question}
            </span>
            <ul className="flex flex-col gap-1">
              {topic.questions.map((q) => (
                <li key={q} className="flex items-start gap-1.5">
                  <QuestionIcon
                    className={cn('mt-0.5 h-3 w-3 shrink-0', tt.text)}
                    aria-hidden="true"
                  />
                  <span className="text-[11px] leading-snug text-[var(--term-fg)] break-keep">
                    {q}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StepCard>
      </div>

      {/* 추가로 볼 파일 */}
      <div className="flex flex-col gap-1.5 rounded-md border border-dashed border-[var(--term-border)] bg-[var(--term-bg)] p-md">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {content.labels.extra}
        </span>
        <ul className="flex flex-wrap gap-1.5">
          {topic.extraFiles.map((f) => (
            <li key={f}>
              <code className="inline-block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-1.5 py-0.5 font-mono text-[10.5px] text-[var(--term-muted)] [overflow-wrap:anywhere]">
                {f}
              </code>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
