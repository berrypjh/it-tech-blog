import { cn } from '@it-tech-blog/utils';

import { NumberedStepList, stepChip } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RoadmapContent } from '../content';
import { FileIcon, roadmapIconByName, RouteIcon } from '../icons';

type Props = { content: RoadmapContent['roadmap'] };

export const EightStepLearningRoadmap = ({ content }: Props) => {
  return (
    <section id="section-roadmap" aria-labelledby="heading-roadmap" className="space-y-lg">
      <SectionHeader
        id="roadmap"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      <NumberedStepList
        rowClassName="md:grid-cols-[auto_auto_1fr_minmax(180px,_240px)]"
        rows={content.rows.map((row) => {
          const Icon = roadmapIconByName[row.icon];
          const tone = toneTokens[row.tone].text;
          return {
            id: row.num,
            num: row.num,
            tone: row.tone,
            icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
            title: row.title,
            description: row.description,
            extra: (
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
                          stepChip,
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
            ),
          };
        })}
      />
    </section>
  );
};
