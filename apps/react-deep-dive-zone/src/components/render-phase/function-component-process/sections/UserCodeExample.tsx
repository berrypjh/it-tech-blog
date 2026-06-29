import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FunctionComponentContent } from '../content';
import { FileCodeIcon } from '../icons';

type Props = { content: FunctionComponentContent['userCode'] };

export const UserCodeExample = ({ content }: Props) => (
  <section id="user-code" aria-labelledby="heading-user-code" className="space-y-md">
    <SectionHeader
      id="user-code"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <div className="min-w-0">
        <CodePreviewPanel header={content.fileTab} badge="jsx" language="jsx" code={content.code} />
      </div>

      <ol className="flex flex-col gap-md">
        {content.callouts.map((callout, idx) => {
          const t = toneTokens[callout.tone];
          return (
            <li key={callout.title} className="flex">
              <article
                className={cn(
                  'flex w-full items-center gap-3 rounded-lg border p-md',
                  'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
                  t.border,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border font-mono font-bold text-xsm tabular-nums',
                    t.chip,
                  )}
                >
                  {idx + 1}
                </span>
                <span
                  className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.text)}
                >
                  {callout.title}
                </span>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
