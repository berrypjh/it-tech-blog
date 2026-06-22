import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { GithubButton } from '../../../shared/code';
import { GithubIcon } from '../../../shared/GithubIcon';
import { SectionHeader } from '../../../shared/section';
import type { SharedContent } from '../content';
import { ExternalLinkIcon, MapIcon, sharedIcon } from '../icons';
import { accentText, neutralChrome } from '../localTone';

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

      {/* 부가 메모: 전체 너비 상단 밴드 */}
      <article
        className={cn(
          'flex flex-col gap-1.5 rounded-xl border p-md',
          'bg-[var(--term-bg)] border-[var(--term-border)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-bold font-mono text-[var(--term-muted)]">
          CALLOUT
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed break-keep text-[var(--term-fg)]">
          {content.callout}
        </p>
      </article>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-start">
        {/* 좌측 설명 카드 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-11 h-11 rounded-md shrink-0',
                neutralChrome,
                accentText.C,
              )}
            >
              <sharedIcon.fileText className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className={cn('text-md font-bold tracking-tight', accentText.C)}>
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
        </article>

        {/* 우측 코드 패널 + GitHub 링크 + 콜아웃 */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <div className="flex flex-col sm:flex-row gap-2">
            {content.codeLinks.map((link, i) =>
              i === 0 ? (
                <GithubButton
                  key={link.href}
                  href={link.href}
                  label={<span className="font-mono">{link.label}</span>}
                  className="min-w-0"
                />
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold min-w-0',
                    'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  )}
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span className="font-mono">{link.label}</span>
                  <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
