import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { AnnotatedCodePanel } from '../components/AnnotatedCodePanel';
import type { FiberStateNodeContent } from '../content';
import { ExternalLinkIcon, EyeIcon, FileCodeIcon, HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberStateNodeContent['checkpoint'] };

export const StateNodeCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.5fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-start">
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
            <span className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {content.info.file}
            </span>
          </InfoRow>
          <InfoRow icon={<EyeIcon className="h-4 w-4" />} label={content.info.lookForLabel}>
            <ul className="flex flex-col gap-0.5">
              {content.info.lookForLines.map((line) => (
                <li key={line} className="font-mono text-xsm text-[var(--term-fg)] break-all">
                  {line}
                </li>
              ))}
            </ul>
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

      <div className="min-w-0">
        <AnnotatedCodePanel
          code={content.code.content}
          fileName={content.code.fileName}
          language={content.code.language}
          annotations={content.code.annotations}
        />
      </div>
    </div>

    {/* Emphasis banner */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-sky-300/80 bg-sky-50/70',
        'dark:border-sky-800/60 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.banner}
      </p>
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
