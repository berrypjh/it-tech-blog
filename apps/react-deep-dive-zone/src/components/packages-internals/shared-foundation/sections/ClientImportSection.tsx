import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SharedContent } from '../content';
import { MapIcon, sharedIcon } from '../icons';

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
            <ToneIconBox tone="violet" className="shrink-0">
              <sharedIcon.fileText className="h-5 w-5" aria-hidden="true" />
            </ToneIconBox>
            <h3 className={cn('text-md font-bold tracking-tight', toneTokens.violet.text)}>
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

          <GithubButton href={content.primaryHref} label={content.primaryCta} />
        </div>
      </div>
    </section>
  );
};
