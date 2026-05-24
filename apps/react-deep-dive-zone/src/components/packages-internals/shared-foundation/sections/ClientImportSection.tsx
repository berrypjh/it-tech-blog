import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { ToneIconBox } from '../../../getting-started/_shared/ToneIconBox';
import { SharedCodePanel } from '../components/SharedCodePanel';
import type { SharedContent } from '../content';
import { ArrowRightIcon, CodeIcon, MapIcon, sharedIcon } from '../icons';

type Props = { content: SharedContent['clientImport'] };

export const ClientImportSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-client-import" className="space-y-md">
      <SectionHeader
        id="client-import"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.6fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        {/* 좌측 설명 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <ToneIconBox tone="violet" size="md">
              <sharedIcon.fileText className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className="text-md font-bold tracking-tight text-violet-700 dark:text-violet-300">
              {content.explanation.title}
            </h3>
          </header>

          <div className="flex flex-col gap-2">
            {content.explanation.lines.map((line) => (
              <p
                key={line}
                className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              className={cn(
                'group/btn inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-xsm font-bold',
                'bg-violet-500 text-white transition-colors hover:bg-violet-400',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                'dark:bg-violet-500 dark:hover:bg-violet-400 dark:text-slate-950',
              )}
            >
              <CodeIcon className="h-4 w-4" aria-hidden="true" />
              {content.buttons.primary}
              <ArrowRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={cn(
                'group/btn inline-flex items-center justify-center gap-2 rounded-md px-md py-2 text-xsm font-bold',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              <sharedIcon.star className="h-4 w-4" aria-hidden="true" />
              {content.buttons.secondary}
            </button>
          </div>
        </article>

        {/* 우측 코드 패널 + 콜아웃 */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_0.7fr)] gap-md items-stretch">
          <SharedCodePanel caption={content.codeCaption} code={content.code} />

          <article
            className={cn(
              'flex h-full flex-col gap-2 rounded-xl border p-md',
              'border-violet-300/80 bg-violet-50 text-violet-900',
              'dark:border-violet-800/70 dark:bg-violet-950/40 dark:text-violet-100',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-violet-700 dark:text-violet-300">
              CALLOUT
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed break-keep font-bold">
              {content.callout}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
