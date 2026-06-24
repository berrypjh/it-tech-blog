import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import type { TestCodeContent } from '../content';
import { CodeIcon, ExternalLinkIcon, FileCodeIcon, InfoIcon, LightbulbIcon } from '../icons';

type Props = { content: TestCodeContent['spotlight'] };

export const ReactCreateElementTestSpotlight = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-spotlight" className="space-y-md">
      <SectionHeader
        id="spotlight"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        <CheckpointInfoCard
          rows={[
            {
              label: content.leftFileTitle,
              value: <code className="font-mono break-all">{content.leftFile}</code>,
              icon: FileCodeIcon,
            },
            {
              label: content.leftCoreLabel,
              value: (
                <code className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {content.leftCore}
                </code>
              ),
              icon: CodeIcon,
            },
            {
              label: content.leftPointLabel,
              value: <span>{content.leftPoint}</span>,
              icon: InfoIcon,
            },
          ]}
          question={content.middleQuestion}
        />

        {/* 우측 코드 패널 + 포인트 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel
            header={content.codeHeader}
            badge={content.codeBadge}
            code={content.code}
            language="js"
          />

          <div
            className={cn(
              'flex items-start gap-sm rounded-lg border px-md py-md',
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-8 h-8 rounded-md border shrink-0',
                'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]',
              )}
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wider font-bold">
                {content.rightPointLabel}
              </span>
              <p className="text-xsm sm:text-sm leading-snug font-medium break-keep">
                {content.rightPoint}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <GithubButton href={content.primaryHref} label={content.primaryCta} />
            <a
              href={content.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
