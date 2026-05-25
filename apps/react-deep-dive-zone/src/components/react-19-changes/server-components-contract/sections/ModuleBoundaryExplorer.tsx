'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ExplorerFile, ServerComponentsContractContent } from '../content';
import { CheckCircleIcon, ChevronRightIcon, FolderIcon, ShieldCheckIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['explorer'] };

const nodeColor: Record<
  ServerComponentsContractContent['explorer']['projectStructure'][number]['kind'],
  string
> = {
  server: 'text-blue-300',
  client: 'text-indigo-300',
  action: 'text-purple-300',
  'boundary-note': 'text-amber-300 italic',
};

const fileKindAccent: Record<
  ExplorerFile['kind'],
  {
    text: string;
    border: string;
    borderStrong: string;
    bg: string;
    chip: string;
    iconChip: string;
    dot: string;
    solidBg: string;
    label: string;
    short: string;
  }
> = {
  server: {
    text: 'text-blue-700 dark:text-blue-200',
    border: 'border-blue-200/80 dark:border-blue-800/70',
    borderStrong: 'border-blue-400/80 dark:border-blue-500/70',
    bg: 'bg-blue-50/40 dark:bg-blue-950/30',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    solidBg: 'bg-blue-600 dark:bg-blue-500',
    label: 'Server',
    short: 'S',
  },
  client: {
    text: 'text-indigo-700 dark:text-indigo-200',
    border: 'border-indigo-200/80 dark:border-indigo-800/70',
    borderStrong: 'border-indigo-400/80 dark:border-indigo-500/70',
    bg: 'bg-indigo-50/40 dark:bg-indigo-950/30',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    iconChip:
      'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    solidBg: 'bg-indigo-600 dark:bg-indigo-500',
    label: 'Client',
    short: 'C',
  },
  action: {
    text: 'text-purple-700 dark:text-purple-200',
    border: 'border-purple-200/80 dark:border-purple-800/70',
    borderStrong: 'border-purple-400/80 dark:border-purple-500/70',
    bg: 'bg-purple-50/40 dark:bg-purple-950/30',
    chip: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800/70',
    iconChip:
      'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800/70',
    dot: 'bg-purple-500 dark:bg-purple-400',
    solidBg: 'bg-purple-600 dark:bg-purple-500',
    label: 'Server Function',
    short: 'F',
  },
};

export const ModuleBoundaryExplorer = ({ content }: Props) => {
  const [activeKey, setActiveKey] = useState<string>(content.defaultFileKey);
  const current = content.files.find((f) => f.key === activeKey) ?? content.files[0];
  if (!current) return null;
  const accent = fileKindAccent[current.kind];

  return (
    <section aria-labelledby="explorer-heading" className="flex flex-col">
      <SectionHeader
        id="explorer-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 gap-md lg:grid-cols-4 lg:gap-md items-stretch">
          {/* COL 1: project structure */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md',
              'border-slate-700/80 bg-slate-950',
              'shadow-[0_2px_0_rgba(0,0,0,0.25)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300"
              >
                <FolderIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-200">
                {content.projectStructureTitle}
              </h3>
            </header>
            <pre
              role="img"
              aria-label={content.projectStructureTitle}
              className="font-mono text-[12px] leading-relaxed sm:text-[13px]"
            >
              <code className="block whitespace-pre">
                {content.projectStructure.map((node) => {
                  const indent = '  '.repeat(node.indent);
                  return (
                    <span key={node.label} className="block">
                      <span className="text-slate-600">{indent}</span>
                      <span className={cn('font-bold', nodeColor[node.kind])}>{node.label}</span>
                    </span>
                  );
                })}
              </code>
            </pre>
          </article>

          {/* COL 2: file selection */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md',
              'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.fileSelectionTitle}
              </span>
            </header>
            <div
              role="tablist"
              aria-label={content.fileSelectionTitle}
              className="flex flex-col gap-2"
            >
              {content.files.map((file) => {
                const isActive = file.key === activeKey;
                const fileTone = fileKindAccent[file.kind];
                return (
                  <button
                    key={file.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveKey(file.key)}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(
                            'text-white shadow-[0_3px_0_var(--term-border)]',
                            fileTone.solidBg,
                            'border-transparent',
                          )
                        : cn(
                            'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                            'border-slate-200 dark:border-slate-700',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-6 w-6 items-center justify-center rounded-md border font-mono text-[10px] font-bold',
                          isActive ? 'border-white/40 bg-white/10 text-white' : fileTone.iconChip,
                        )}
                      >
                        {fileTone.short}
                      </span>
                      <span className="font-mono text-xsm font-bold break-all">
                        {file.fileName}
                      </span>
                    </span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0 transition-transform',
                        isActive
                          ? 'translate-x-0.5'
                          : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </article>

          {/* COL 3: analysis result */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md',
              accent.borderStrong,
              accent.bg,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.analysisTitle}
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                  'font-mono text-[10px] font-bold',
                  accent.chip,
                )}
              >
                <span aria-hidden="true" className={cn('block h-1 w-1 rounded-full', accent.dot)} />
                {accent.label}
              </span>
            </header>

            <code className={cn('font-mono text-sm font-bold break-all', accent.text)}>
              {current.fileName}
            </code>

            <dl className="flex flex-col gap-1.5 mt-1">
              {(
                [
                  ['유형', current.analysis.type],
                  ['경계', current.analysis.boundary],
                  ['번들', current.analysis.bundle],
                  ['실행 위치', current.analysis.runtime],
                  ['특징', current.analysis.feature],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col rounded-lg border px-2.5 py-1.5 bg-white dark:bg-[var(--term-bg)] border-slate-200 dark:border-slate-700"
                >
                  <dt className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                    {label}
                  </dt>
                  <dd className="text-xsm font-bold text-[var(--term-fg)] break-keep">{value}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* COL 4: rule summary */}
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border-2 p-md',
              'border-blue-300/80 bg-blue-50/30 dark:border-blue-700/70 dark:bg-blue-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <ShieldCheckIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
                {content.ruleSummaryTitle}
              </h3>
            </header>
            <ul className="flex flex-col gap-1.5">
              {content.rules.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-300"
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
