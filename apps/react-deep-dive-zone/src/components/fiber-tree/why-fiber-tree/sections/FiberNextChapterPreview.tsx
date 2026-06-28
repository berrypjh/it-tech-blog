import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberCentralContent, PreviewItem } from '../content';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CompassIcon,
  HelpCircleIcon,
  ListIcon,
  SendIcon,
} from '../icons';

type Props = { content: FiberCentralContent['nextPreview'] };

const iconMap = {
  send: SendIcon,
  list: ListIcon,
  compass: CompassIcon,
  arrowUp: ArrowUpIcon,
} as const;

export const FiberNextChapterPreview = ({ content }: Props) => (
  <section
    id="next-preview"
    aria-labelledby="heading-next-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="next-preview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      {/* Question */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ToneIconBox tone="violet">
          <HelpCircleIcon className="h-5 w-5" />
        </ToneIconBox>
        <span
          className={cn('text-[10px] uppercase tracking-wider font-mono', toneTokens.violet.text)}
        >
          next chapter
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.question.lines.map((line, i) => {
            const has = line.includes(content.question.emphasis);
            if (!has) {
              return (
                <span key={i} className="block">
                  {line}
                </span>
              );
            }
            const [before, after] = line.split(content.question.emphasis);
            return (
              <span key={i} className="block">
                {before}
                <code className={cn('font-mono font-bold', toneTokens.violet.text)}>
                  {content.question.emphasis}
                </code>
                {after}
              </span>
            );
          })}
        </p>
      </article>

      {/* Flow */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className={cn('text-xsm font-mono uppercase tracking-wider', toneTokens.violet.text)}>
          {`// ${content.previewTitle}`}
        </h3>
        <ol className="flex flex-col">
          {content.items.map((item, idx) => (
            <li key={item.id} className="flex flex-col">
              <PreviewCard item={item} />
              {idx < content.items.length - 1 && (
                <span className="flex justify-center py-1" aria-hidden="true">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--term-bg)] border border-[var(--term-border)] text-[var(--term-accent)]">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>
    </div>
  </section>
);

const PreviewCard = ({ item }: { item: PreviewItem }) => {
  const Icon = iconMap[item.iconName];
  return (
    <article
      className={cn(
        'flex items-start gap-sm rounded-xl border bg-[var(--term-bg)] p-sm',
        'border-[var(--term-border)]',
      )}
    >
      <ToneIconBox tone="violet" size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <div className="flex flex-col min-w-0">
        <code
          className={cn(
            'font-mono text-xsm font-bold tracking-tight break-all',
            toneTokens.violet.text,
          )}
        >
          {item.title}
        </code>
        <span className="text-[11.5px] leading-relaxed text-[var(--term-muted)] break-keep">
          {item.body}
        </span>
      </div>
    </article>
  );
};
