import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FunctionComponentContent } from '../content';
import { ArrowRightIcon, LinkIcon, PlayCircleIcon } from '../icons';

type Props = { content: FunctionComponentContent['hooksLink'] };

export const HooksChapterConnection = ({ content }: Props) => (
  <section id="hooks-link" aria-labelledby="heading-hooks-link" className="space-y-md">
    <SectionHeader
      id="hooks-link"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.6fr)] gap-md lg:gap-lg items-stretch">
        {/* Chapter chain */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
          <ChapterCard
            tone="teal"
            label={content.currentChapter.label}
            title={content.currentChapter.title}
            description={content.currentChapter.description}
          />
          <span
            aria-hidden="true"
            className="flex items-center justify-center text-[var(--term-accent)] py-2"
          >
            <ArrowRightIcon className="h-5 w-5 sm:rotate-0 rotate-90" />
          </span>
          <ChapterCard
            tone="sky"
            label={content.nextChapter.label}
            title={content.nextChapter.title}
            description={content.nextChapter.description}
          />
        </div>

        {/* Side points */}
        <aside
          className={cn(
            'flex flex-col gap-md rounded-lg border p-md sm:p-lg',
            toneTokens.violet.border,
          )}
        >
          <header className="flex items-center gap-2">
            <ToneIconBox tone="violet" size="sm">
              <PlayCircleIcon className="h-4 w-4" />
            </ToneIconBox>
            <h3 className={cn('text-sm sm:text-md font-bold break-keep', toneTokens.violet.text)}>
              {content.sidePointTitle}
            </h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.sidePoints.map((point) => (
              <li
                key={point.text}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full',
                    toneTokens.violet.dot,
                  )}
                />
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  </section>
);

const ChapterCard = ({
  tone,
  label,
  title,
  description,
}: {
  tone: ToneKey;
  label: string;
  title: string;
  description: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-2 rounded-lg border p-md sm:p-lg',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-xxsm font-mono uppercase tracking-wider',
          t.chip,
        )}
      >
        {label}
      </span>
      <h4 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', t.text)}>
        {title}
      </h4>
      <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
        {description}
      </p>
    </article>
  );
};
