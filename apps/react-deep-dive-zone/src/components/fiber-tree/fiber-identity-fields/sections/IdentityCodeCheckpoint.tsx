import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ToneKey } from '../../../shared/tones';
import type { FiberIdentityFieldsContent } from '../content';
import { ExternalLinkIcon, EyeIcon, FileCodeIcon, HelpCircleIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['checkpoint'] };

const annotationStyle: Record<ToneKey, string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  blue: 'border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  indigo:
    'border-indigo-300/80 bg-indigo-50 text-indigo-700 dark:border-indigo-700/70 dark:bg-indigo-950/40 dark:text-indigo-200',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
};

export const IdentityCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.56fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
      {/* Info card */}
      <article
        className={cn(
          'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {content.info.title}
        </h3>
        <dl className="mt-sm flex flex-col gap-sm">
          <InfoRow icon={<FileCodeIcon className="h-4 w-4" />} label={content.info.filesLabel}>
            <ul className="flex flex-col gap-0.5">
              {content.info.files.map((f) => (
                <li key={f} className="font-mono text-xsm text-[var(--term-fg)] break-all">
                  {f}
                </li>
              ))}
            </ul>
          </InfoRow>
          <InfoRow icon={<EyeIcon className="h-4 w-4" />} label={content.info.lookForLabel}>
            <span className="font-mono text-xsm text-[var(--term-fg)]">{content.info.lookFor}</span>
          </InfoRow>
          <InfoRow icon={<HelpCircleIcon className="h-4 w-4" />} label={content.info.questionLabel}>
            <span className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.info.question}
            </span>
          </InfoRow>
        </dl>
        <a
          href={content.info.buttonHref}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            'mt-md group inline-flex items-center gap-2 rounded-md px-3 py-2',
            'bg-sky-50 text-sky-700 text-xsm font-bold border border-sky-200/80',
            'transition-colors hover:bg-sky-100',
            'dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/70 dark:hover:bg-sky-950/70',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
          )}
        >
          {content.info.buttonLabel}
          <ExternalLinkIcon
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </article>

      {/* Code blocks */}
      <div className="flex flex-col gap-md min-w-0">
        {content.blocks.map((block) => (
          <div key={block.fileName} className="flex flex-col gap-1">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-sm">
              <CodePreviewPanel
                code={block.content}
                caption={block.fileName}
                language={block.language}
                size="sm"
              />
              <span
                aria-hidden="false"
                className={cn(
                  'inline-flex items-center sm:self-center rounded-full border px-3 py-1 text-[11px] font-bold tracking-tight whitespace-nowrap',
                  annotationStyle[block.annotationTone],
                )}
              >
                {block.annotationLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InfoRow = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-sm">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-8 h-8 rounded-lg border shrink-0',
        'border-sky-200/80 bg-sky-50 text-sky-700',
        'dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-200',
      )}
    >
      {icon}
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
        {label}
      </span>
      {children}
    </div>
  </div>
);
