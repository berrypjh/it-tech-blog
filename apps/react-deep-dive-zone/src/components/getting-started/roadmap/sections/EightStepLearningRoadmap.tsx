import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { RoadmapContent } from '../content';
import { FileIcon, roadmapIconByName, RouteIcon } from '../icons';

type Props = { content: RoadmapContent['roadmap'] };

/** 중립 크롬 칩: surface + border. 색은 toneTokens[tone].text로만 입힌다. */
const chip = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

export const EightStepLearningRoadmap = ({ content }: Props) => {
  return (
    <section id="section-roadmap" aria-labelledby="heading-roadmap" className="space-y-lg">
      <SectionHeader
        id="roadmap"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      <ol className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] divide-y divide-[var(--term-border)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {content.rows.map((row) => {
          const tone = toneTokens[row.tone].text;
          const Icon = roadmapIconByName[row.icon];
          return (
            <li
              key={row.num}
              className={cn('group transition-colors hover:bg-[var(--term-surface)]')}
            >
              <div className="grid grid-cols-[auto_auto_1fr] md:grid-cols-[auto_auto_1fr_minmax(180px,_240px)] gap-sm md:gap-md items-center px-md sm:px-lg py-md sm:py-lg">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-md text-sm font-bold tabular-nums shadow-[0_1px_0_var(--term-border)] shrink-0',
                    chip,
                    tone,
                  )}
                >
                  {row.num}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
                    chip,
                    tone,
                  )}
                >
                  <Icon className="h-[1.125rem] w-[1.125rem]" />
                </span>

                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3
                    className={cn(
                      'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
                      tone,
                    )}
                  >
                    {row.title}
                  </h3>
                  <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                    {row.description}
                  </p>
                </div>

                <div className="col-span-full md:col-auto flex flex-col gap-1 mt-sm md:mt-0 md:border-l md:border-dashed md:border-[var(--term-border)] md:pl-md">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold inline-flex items-center gap-1">
                    <FileIcon className="h-3 w-3" />
                    {content.coreFilesLabel}
                  </span>
                  <ul className="flex flex-wrap gap-1">
                    {row.files.map((f) => (
                      <li key={f}>
                        <code
                          className={cn(
                            'inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold break-all',
                            chip,
                            tone,
                          )}
                        >
                          <FileIcon className="h-2.5 w-2.5 opacity-70" />
                          {f}
                        </code>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
