import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementRefReact19Content } from '../content';
import { ArrowRightIcon, CodeIcon, FileTextIcon, LightbulbIcon, SettingsIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['checkpoint'] };

export const RefSourceCheckpoint = ({ content }: Props) => (
  <section aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-stretch">
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <InfoBlock
          icon={<FileTextIcon className="h-4 w-4" aria-hidden="true" />}
          label={content.fileLabel}
          value={content.filePath}
          mono
        />

        <div className="border-t border-dashed border-[var(--term-border)]" />

        <InfoBlock
          icon={<SettingsIcon className="h-4 w-4" aria-hidden="true" />}
          label={content.changeLabel}
          value={content.changePoint}
          highlight
        />

        <div className="border-t border-dashed border-[var(--term-border)]" />

        <div className="flex items-start gap-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-amber-300/80 bg-amber-100 text-amber-700 dark:border-amber-800/70 dark:bg-amber-950/60 dark:text-amber-200 shrink-0 mt-0.5"
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
              {content.ideaLabel}
            </span>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.coreIdea}
            </p>
          </div>
        </div>
      </article>

      <div className="min-w-0">
        <CodePreviewPanel
          code={content.code}
          language="JS"
          showWindowDots
          caption="ReactBaseClasses.js"
        />
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-sm justify-center pt-sm">
      <a
        href={content.primaryHref}
        className={cn(
          'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
          'bg-sky-600 text-white text-xsm font-bold tracking-tight',
          'transition-colors hover:bg-sky-700',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
          'dark:bg-sky-500 dark:hover:bg-sky-400 dark:text-slate-950',
        )}
      >
        {content.primaryCta}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
      <a
        href={content.secondaryHref}
        className={cn(
          'group inline-flex items-center justify-center gap-2 px-lg py-3 rounded-md',
          'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] text-xsm font-bold',
          'transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]',
        )}
      >
        {content.secondaryCta}
        <ArrowRightIcon
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  </section>
);

const InfoBlock = ({
  icon,
  label,
  value,
  mono,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  mono?: boolean;
  highlight?: boolean;
}) => (
  <div className="flex items-start gap-sm">
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200 shrink-0 mt-0.5"
    >
      {icon}
    </span>
    <div className="flex flex-col gap-1 min-w-0">
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
        {label}
      </span>
      {highlight ? (
        <span className="inline-flex w-fit items-center rounded-full border border-violet-300/80 bg-violet-50 px-2 py-0.5 text-xsm font-mono font-bold text-violet-700 dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200">
          {value}
        </span>
      ) : mono ? (
        <code className="font-mono text-xsm sm:text-sm tracking-tight text-[var(--term-fg)] break-all">
          {value}
        </code>
      ) : (
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {value}
        </p>
      )}
    </div>
  </div>
);
