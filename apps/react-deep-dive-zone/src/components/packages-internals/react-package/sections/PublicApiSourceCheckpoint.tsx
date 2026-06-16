import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubButton } from '../../../shared/GithubButton';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CheckpointItem, InternalFileCard, ReactPackageContent } from '../content';
import { InfoIcon, MapIcon, reactPackageIcon } from '../icons';
import { localTone } from '../tone';

type Props = { content: ReactPackageContent['sourceCheckpoint']; sectionId: string };

export const PublicApiSourceCheckpoint = ({ content, sectionId }: Props) => {
  const fileItem = content.items.find((item) => item.id === 'file');
  const viewItem = content.items.find((item) => item.id === 'view');
  const questionItem = content.items.find((item) => item.id === 'question');

  return (
    <section
      id={sectionId}
      aria-labelledby="heading-source-checkpoint"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionBadgeHeader
        id="source-checkpoint"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        descriptionFullWidth
        icon={<MapIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.34fr)_minmax(0,_0.66fr)] gap-md items-stretch">
        {/* 좌측 체크포인트 + 내부 파일 */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-xl border bg-[var(--term-bg)]',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
          )}
        >
          {fileItem && <CheckpointInfoRow item={fileItem} mono />}
          {viewItem && <CheckpointInfoRow item={viewItem} />}

          {/* 내부 구현 파일 */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)] font-mono">
              {content.filesLabel}
            </span>
            <ul className="flex flex-col gap-1.5">
              {content.files.map((file) => (
                <li key={file.id}>
                  <FileChip file={file} />
                </li>
              ))}
            </ul>
          </div>

          {questionItem && (
            <div
              className={cn(
                'mt-auto flex items-start gap-2 rounded-lg border p-3',
                'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
              )}
            >
              <InfoIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] uppercase tracking-wider font-bold">
                  {questionItem.label}
                </span>
                <p className="text-xsm leading-relaxed font-medium break-keep">
                  {questionItem.value}
                </p>
              </div>
            </div>
          )}
        </article>

        {/* 우측 코드 패널 + GitHub */}
        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.codeHref} label={content.codeCta} className="min-w-0" />
        </div>
      </div>

      {/* 하단 핵심 takeaway 배너 */}
      <div
        className={cn(
          'flex items-center justify-center gap-sm rounded-xl border px-md py-md text-center',
          'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          <InfoIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold tracking-tight break-keep">{content.emphasis}</p>
      </div>
    </section>
  );
};

const CheckpointInfoRow = ({ item, mono }: { item: CheckpointItem; mono?: boolean }) => {
  const Icon = reactPackageIcon[item.iconName];
  const tone = localTone(item.tone);
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
        {item.label}
      </span>
      <div className="flex items-center gap-2 text-xsm text-[var(--term-fg)] break-keep">
        <Icon className={cn('h-4 w-4 shrink-0', tone.text)} aria-hidden="true" />
        <span className={cn('min-w-0 break-all', mono && 'font-mono')}>{item.value}</span>
      </div>
    </div>
  );
};

const FileChip = ({ file }: { file: InternalFileCard }) => {
  const tone = localTone(file.tone);
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-lg border p-2',
        'bg-[var(--term-bg)] border-[var(--term-border)] transition-colors',
        tone.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md border font-mono text-[10px] font-bold',
          tone.chip,
        )}
      >
        {'<>'}
      </span>
      <div className="flex flex-col min-w-0">
        <h3 className={cn('text-xsm font-bold font-mono tracking-tight truncate', tone.text)}>
          {file.name}
        </h3>
        <p className="text-[10px] leading-snug text-[var(--term-muted)] truncate">
          {file.description}
        </p>
      </div>
    </article>
  );
};
