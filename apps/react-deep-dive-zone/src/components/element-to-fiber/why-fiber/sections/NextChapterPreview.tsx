import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { MiniFiberTree } from '../components/MiniFiberTree';
import type { FiberWhyNeededContent } from '../content';
import { LightbulbIcon, NetworkIcon, SparklesIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['preview'] };

export const NextChapterPreview = ({ content }: Props) => (
  <section
    id="preview"
    aria-labelledby="heading-preview"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.question}</SectionNote>

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1.2fr)_minmax(0,_1fr)] gap-md items-center">
        <div className="flex flex-col gap-sm min-w-0">
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
              'text-[10px] font-bold uppercase tracking-wider font-mono',
              toneTokens.violet.chip,
            )}
          >
            <SparklesIcon className="h-3 w-3" aria-hidden="true" />
            {content.previewLabel}
          </span>
          <h3 className="text-md sm:text-lg font-extrabold tracking-tight text-[var(--term-fg)] break-keep">
            {content.previewTitle}
          </h3>
          <ul className="flex flex-wrap gap-1.5">
            {content.previewItems.map((item) => (
              <li key={item.id}>
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-1',
                    'font-mono text-[11px] font-bold',
                    toneTokens.violet.chip,
                  )}
                >
                  {item.label}
                </code>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center" aria-hidden="true">
          <MiniFiberTree />
        </div>
      </div>
    </article>
  </section>
);
