import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FunctionComponentContent } from '../content';
import { ArrowRightIcon, BracesIcon, CheckCircleIcon, CodeIcon } from '../icons';

type Props = { content: FunctionComponentContent['nextChildren'] };

export const NextChildrenExplanation = ({ content }: Props) => {
  const t = toneTokens.violet;
  return (
    <section id="next-children" aria-labelledby="heading-next-children" className="space-y-md">
      <SectionHeader
        id="next-children"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BracesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-md lg:gap-3">
        {/* Left: JSX */}
        <div className="flex flex-col gap-2 min-w-0">
          <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </span>
          <CodePreviewPanel header="JSX" badge="jsx" language="jsx" code={content.leftCode} />
        </div>

        {/* Center arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2 py-2">
          <span className={cn('text-xxsm font-mono uppercase tracking-wider text-center', t.text)}>
            {content.arrowLabel}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </span>
        </div>

        {/* Right: nextChildren */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            t.border,
          )}
        >
          <header className="flex items-center gap-2">
            <ToneIconBox tone="violet" size="sm">
              <CodeIcon className="h-4 w-4" />
            </ToneIconBox>
            <code className={cn('font-mono text-sm sm:text-md font-bold leading-tight', t.text)}>
              {content.rightTitle}
            </code>
          </header>
          <p className={cn('text-xsm sm:text-sm leading-relaxed font-bold break-keep', t.text)}>
            {content.rightDescription}
          </p>
          <ul className="flex flex-col gap-1.5">
            {content.rightChecklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep"
              >
                <CheckCircleIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
