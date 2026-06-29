import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StateUpdateStartContent } from '../content';
import { CodeIcon, UserIcon } from '../icons';

type Props = { content: StateUpdateStartContent['visibleCode'] };

const sky = toneTokens.sky;

export const VisibleCodeSection = ({ content }: Props) => (
  <section id="section-visible-code" aria-labelledby="heading-visible-code" className="space-y-md">
    <SectionHeader
      id="visible-code"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.25fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel header={content.code.fileName} badge="main" code={content.code.content} />
      </div>

      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="sky" size="md">
          <UserIcon className="h-5 w-5" />
        </ToneIconBox>

        <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', sky.text)}>
          {content.explain.title}
        </h3>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.explain.body}
        </p>

        <span
          className={cn(
            'mt-auto inline-flex w-fit items-center gap-2 rounded-md border bg-[var(--term-surface)] px-3 py-1.5 text-xxsm font-mono',
            sky.border,
            sky.text,
          )}
        >
          <span aria-hidden="true" className={cn('h-1.5 w-1.5 rounded-full', sky.dot)} />
          {content.explain.tag}
        </span>
      </article>
    </div>
  </section>
);
