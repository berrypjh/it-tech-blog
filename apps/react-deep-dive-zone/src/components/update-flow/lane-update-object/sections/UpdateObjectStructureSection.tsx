import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LaneUpdateObjectContent } from '../content';
import { BracesIcon, ListChecksIcon } from '../icons';

type Props = { content: LaneUpdateObjectContent['structure'] };

export const UpdateObjectStructureSection = ({ content }: Props) => (
  <section id="section-structure" aria-labelledby="heading-structure" className="space-y-md">
    <SectionHeader
      id="structure"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BracesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel header={content.codeHeader} badge="shape" code={content.code} />
      </div>

      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center gap-2">
          <ToneIconBox tone="sky" size="md">
            <ListChecksIcon className="h-5 w-5" />
          </ToneIconBox>
          <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.summaryTitle}
          </h3>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.summaryBody}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.summaryItems.map((item) => {
            const t = toneTokens[item.tone];
            return (
              <li
                key={item.key}
                className="flex items-start gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-3 py-2"
              >
                <span
                  className={cn(
                    'rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold',
                    t.chip,
                  )}
                >
                  {item.key}
                </span>
                <span className="text-xxsm sm:text-xsm text-[var(--term-muted)] leading-snug break-keep">
                  {item.body}
                </span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
