import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import { toneTokens } from '../../../start/_shared/tones';
import { ReactClientCodePanel } from '../components/ReactClientCodePanel';
import type { InternalFileCard, ReactPackageContent } from '../content';
import { InfoIcon, MapIcon } from '../icons';

type Props = { content: ReactPackageContent['hub']; sectionId: string };

export const PublicApiHubSection = ({ content, sectionId }: Props) => {
  return (
    <section id={sectionId} aria-labelledby="heading-hub" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="hub"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.4fr)] gap-md items-stretch">
        {/* 좌측 파일 카드 + 강조 pill */}
        <div className="flex flex-col gap-md">
          <ul className="flex flex-col gap-sm">
            {content.files.map((file) => (
              <li key={file.id}>
                <FileCardView file={file} />
              </li>
            ))}
          </ul>

          {/* 강조 pill */}
          <aside
            className={cn(
              'flex items-start gap-sm rounded-xl border p-md',
              'border-sky-300/80 bg-sky-50 text-sky-900',
              'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md bg-sky-100 text-sky-700 border border-sky-300/80 dark:bg-sky-900/60 dark:border-sky-700/70 dark:text-sky-200"
            >
              <InfoIcon className="h-4 w-4" />
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed font-bold break-keep">
              {content.emphasis}
            </p>
          </aside>
        </div>

        {/* 우측 코드 패널 */}
        <ReactClientCodePanel
          caption={content.codeCaption}
          code={content.code}
          primaryLabel={content.codeButtons.primary}
          secondaryLabel={content.codeButtons.secondary}
        />
      </div>
    </section>
  );
};

const FileCardView = ({ file }: { file: InternalFileCard }) => {
  const tone = toneTokens[file.tone];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center shrink-0 w-9 h-9 rounded-md border font-mono text-[10px] font-bold',
          tone.chip,
        )}
      >
        {'<>'}
      </span>
      <div className="flex flex-col min-w-0">
        <h3 className={cn('text-sm font-bold font-mono tracking-tight truncate', tone.text)}>
          {file.name}
        </h3>
        <p className="text-xsm leading-snug text-[var(--term-muted)] break-keep">
          {file.description}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="ml-auto hidden lg:inline-flex items-center justify-center text-[var(--term-accent)] text-base"
      >
        →
      </span>
    </article>
  );
};
