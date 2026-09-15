import { cx } from '@berrypjh/react-ui';
import {
  Anchor,
  Box,
  CircleCheck,
  Code,
  File,
  Gauge,
  type LucideIcon,
  MousePointerClick,
  Network,
  Route,
  Sparkle,
} from 'lucide-react';

import { NumberedStepList, stepChip } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RoadmapContent, RoadmapRow } from '../content';

const rowIcon: Record<RoadmapRow['num'], LucideIcon> = {
  '1': Box,
  '2': Network,
  '3': Code,
  '4': CircleCheck,
  '5': Anchor,
  '6': MousePointerClick,
  '7': Gauge,
  '8': Sparkle,
};

type Props = { content: RoadmapContent['roadmap'] };

export const EightStepLearningRoadmap = ({ content }: Props) => {
  return (
    <section id="roadmap" aria-labelledby="heading-roadmap" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="roadmap"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList
        rowClassName="md:grid-cols-[auto_auto_1fr_minmax(180px,_240px)]"
        rows={content.rows.map((row) => {
          const Icon = rowIcon[row.num];
          const tone = toneTokens[row.tone].text;
          return {
            id: row.num,
            num: row.num,
            tone: row.tone,
            icon: <Icon className="h-[1.125rem] w-[1.125rem]" aria-hidden="true" />,
            title: row.title,
            description: row.description,
            extra: (
              <div className="col-span-full md:col-auto flex flex-col gap-1 mt-sm md:mt-0 md:border-l md:border-dashed md:border-[var(--term-border)] md:pl-md">
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold inline-flex items-center gap-1">
                  <File className="h-3 w-3" aria-hidden="true" />
                  {content.coreFilesLabel}
                </span>
                <ul className="flex flex-wrap gap-1">
                  {row.files.map((f) => (
                    <li key={f}>
                      <code
                        className={cx(
                          'inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-mono font-bold break-all',
                          stepChip,
                          tone,
                        )}
                      >
                        <File className="h-2.5 w-2.5 opacity-70" aria-hidden="true" />
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
