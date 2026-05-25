import { cn } from '@it-tech-blog/utils';

import type { RefAsPropElementShapeContent } from '../content';
import { CheckCircleIcon, ZapIcon } from '../icons';
import { pathTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: RefAsPropElementShapeContent['useImperative'] };

export const UseImperativeHandleSection = ({ content }: Props) => {
  const tone = pathTone.internals;

  return (
    <section aria-labelledby="use-imperative-heading" className="flex flex-col">
      <SectionHeader
        id="use-imperative-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
        {/* LEFT: code */}
        <div className="flex">
          <CodePanel
            code={content.code.code}
            fileName={content.code.fileName}
            langBadge={content.code.langBadge}
            toneBorder="border-purple-700/70"
          />
        </div>

        {/* RIGHT: imperative handle example + explanation */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            tone.border,
            'bg-white dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                tone.iconChip,
              )}
            >
              <ZapIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-bold break-keep', tone.text)}>
              {content.exampleTitle}
            </h3>
          </header>

          {/* example light code block */}
          <pre
            className={cn(
              'overflow-x-auto rounded-xl border-2 px-3 py-3',
              tone.border,
              tone.bg,
              'font-mono text-[12px] leading-relaxed sm:text-[13px]',
            )}
          >
            <code className={cn('block whitespace-pre', tone.text)}>{content.exampleCode}</code>
          </pre>

          <ul className="flex flex-col gap-1.5">
            {content.explanationPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', tone.text)}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
