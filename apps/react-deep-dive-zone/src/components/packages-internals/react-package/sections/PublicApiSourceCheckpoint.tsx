import { cn } from '@it-tech-blog/utils';

import { CheckpointInfoCard } from '../../../shared/checkpoint';
import { CodePreviewPanel, GithubButton } from '../../../shared/code';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { InternalFileCard, ReactPackageContent } from '../content';
import { InfoIcon, MapIcon, reactPackageIcon } from '../icons';

type Props = { content: ReactPackageContent['sourceCheckpoint'] };

export const PublicApiSourceCheckpoint = ({ content }: Props) => {
  const fileItem = content.items.find((item) => item.id === 'file');
  const viewItem = content.items.find((item) => item.id === 'view');
  const questionItem = content.items.find((item) => item.id === 'question');

  return (
    <section aria-labelledby="heading-source-checkpoint" className="space-y-md scroll-mt-2xl">
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
        <CheckpointInfoCard
          rows={[
            {
              label: fileItem?.label ?? '',
              value: <code className="font-mono break-all">{fileItem?.value}</code>,
              icon: reactPackageIcon['fileText'],
            },
            {
              label: viewItem?.label ?? '',
              value: (
                <code className="inline-block max-w-full break-all rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 text-xsm font-mono text-[var(--term-fg)]">
                  {viewItem?.value}
                </code>
              ),
              icon: reactPackageIcon['fileCode'],
            },
            {
              label: content.filesLabel,
              value: (
                <ul className="flex flex-col gap-1.5 mt-1">
                  {content.files.map((file) => (
                    <li key={file.id}>
                      <FileChip file={file} />
                    </li>
                  ))}
                </ul>
              ),
              icon: InfoIcon,
            },
          ]}
          question={questionItem?.value ?? ''}
        />

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <GithubButton href={content.codeHref} label={content.codeCta} className="min-w-0" />
        </div>
      </div>

      <SectionNote icon={<InfoIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
    </section>
  );
};

const FileChip = ({ file }: { file: InternalFileCard }) => {
  const tokens = toneTokens[file.tone];
  return (
    <article
      className={cn(
        'group flex items-center gap-sm rounded-lg border p-2',
        'bg-[var(--term-bg)] border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center shrink-0 w-7 h-7 rounded-md border font-mono text-[10px] font-bold',
          tokens.chip,
        )}
      >
        {'<>'}
      </span>
      <div className="flex flex-col min-w-0">
        <h3 className={cn('text-xsm font-bold font-mono tracking-tight truncate', tokens.text)}>
          {file.name}
        </h3>
        <p className="text-[10px] leading-snug text-[var(--term-muted)] truncate">
          {file.description}
        </p>
      </div>
    </article>
  );
};
