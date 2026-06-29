import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { UpdateToRenderSummaryContent } from '../content';
import { BoxesIcon, CircleHelpIcon, nextChapterIconByName } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['nextChapter'] };

const violet = toneTokens.violet;
const sky = toneTokens.sky;

export const NextChapterPreviewSection = ({ content }: Props) => (
  <section id="section-next-chapter" aria-labelledby="heading-next-chapter" className="space-y-md">
    <SectionHeader
      id="next-chapter"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CircleHelpIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 예고 질문 */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          violet.border,
        )}
      >
        <ToneIconBox tone="violet" size="md">
          <CircleHelpIcon className="h-5 w-5" />
        </ToneIconBox>

        <p className="text-md sm:text-lg leading-relaxed text-[var(--term-fg)] break-keep font-bold whitespace-pre-line">
          {content.previewQuestion}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          {content.tags.map((tag) => (
            <li
              key={tag.label}
              className={cn(
                'rounded-md border px-2 py-0.5 text-[10px] font-mono',
                toneTokens[tag.tone].chip,
              )}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </article>

      {/* 우: 다음 개념 */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
          sky.border,
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h3 className={cn('text-md sm:text-lg font-bold leading-tight break-keep', sky.text)}>
            {content.rightTitle}
          </h3>
          <ToneIconBox tone="sky" size="md">
            <BoxesIcon className="h-5 w-5" />
          </ToneIconBox>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.rightItems.map((item) => {
            const Icon = nextChapterIconByName[item.icon];
            const t = toneTokens[item.tone];
            return (
              <li
                key={item.title}
                className={cn(
                  'flex flex-col gap-1 rounded-md border bg-[var(--term-bg)] p-3 shadow-[0_2px_0_var(--term-border)]',
                  t.border,
                )}
              >
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn('text-xsm sm:text-sm font-bold font-mono break-keep', t.text)}
                  >
                    {item.title}
                  </span>
                </header>
                <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
