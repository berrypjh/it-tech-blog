import { cx } from '@berrypjh/react-ui';
import { FileCode2, Layers, ScanSearch } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import type { PhaseDetectionContent } from '../content';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';

type Props = { content: PhaseDetectionContent['representativeFiles'] };

export const RepresentativeFilesSection = ({ content }: Props) => {
  return (
    <section
      id="section-representative-files"
      aria-labelledby="heading-representative-files"
      className="space-y-lg"
    >
      <SectionHeader
        id="representative-files"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<Layers className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.groups.map((group) => {
          const t = getPhaseClasses(group.phase);
          return (
            <li key={group.phase}>
              <article
                className={cx(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <header className="flex items-center gap-2">
                  <PhaseBadge phase={group.phase} size="lg" strong />
                </header>

                {/* Files */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.filesLabel}
                  </span>
                  <ul className="flex flex-col gap-1">
                    {group.files.map((file) => (
                      <li key={file}>
                        <code
                          className={cx(
                            'flex items-center gap-1.5 overflow-x-auto rounded-md border px-2 py-1.5',
                            t.border,
                            t.chip,
                            'font-mono text-[11px] font-bold',
                          )}
                        >
                          <FileCode2 className="h-3 w-3 shrink-0" aria-hidden="true" />
                          <span className="whitespace-nowrap">{file}</span>
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Functions */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {content.functionsLabel}
                  </span>
                  <ul className="flex flex-wrap gap-1">
                    {group.functions.map((fn) => (
                      <li key={fn}>
                        <code
                          className={cx(
                            'inline-flex items-center rounded-md border px-1.5 py-0.5',
                            'border-[var(--term-border)] bg-[var(--term-surface)]',
                            'font-mono text-[10.5px] text-[var(--term-fg)]',
                          )}
                        >
                          {fn}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Reading point */}
                <div className="mt-auto flex items-start gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
                  <ScanSearch
                    className={cx('h-3.5 w-3.5 shrink-0 mt-0.5', t.text)}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                      {content.readingPointLabel}
                    </span>
                    <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                      {group.readingPoint}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
