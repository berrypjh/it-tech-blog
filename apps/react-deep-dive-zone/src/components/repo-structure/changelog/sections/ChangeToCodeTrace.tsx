import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { Timeline } from '../../../shared/timeline';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { ChangelogContent } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: ChangelogContent['trace'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const ChangeToCodeTrace = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-trace" className="space-y-lg">
      <SectionHeader
        id="trace"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <Timeline
        entries={content.steps.map((step, idx) => {
          const toneKey = toneCycle[idx % toneCycle.length];
          const tone = toneTokens[toneKey];
          const Icon = iconByName[step.icon];
          return {
            id: step.id,
            tone: toneKey,
            body: (
              <div className="flex flex-col gap-sm">
                {/* step 배지 + 아이콘 박스 (step form) */}
                <header className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                      tone.chip,
                    )}
                  >
                    <span className="font-mono tabular-nums">step {step.number}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-11 h-11 rounded-2xl border',
                      tone.chip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                </header>

                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                    {step.title}
                  </h3>
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </div>
              </div>
            ),
          };
        })}
      />
    </section>
  );
};
