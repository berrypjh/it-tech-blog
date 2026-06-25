import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
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
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
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

          <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
            {content.rightPoint}
          </SectionNote>

          <div className="flex flex-col sm:flex-row gap-2">
            <GithubButton href={content.primaryHref} label={content.primaryCta} />
            <a
              href={content.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group/cta inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold',
                'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
                'transition-colors hover:bg-[var(--term-surface)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              {content.secondaryCta}
              <span className="sr-only">(새 창에서 열림)</span>
              <ExternalLinkIcon
                className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
