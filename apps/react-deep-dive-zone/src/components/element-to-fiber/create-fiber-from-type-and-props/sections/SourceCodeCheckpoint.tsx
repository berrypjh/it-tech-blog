import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../react-elements/_shared/CodePanel';
import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { CreateFiberFromTypeAndPropsContent } from '../content';
import { Code2Icon, FileCodeIcon, HelpCircleIcon, LightbulbIcon, Settings2Icon } from '../icons';

type Props = { content: CreateFiberFromTypeAndPropsContent['checkpoint'] };

const annotationTone = {
  blue: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
  green:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  purple:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
} as const;

export const SourceCodeCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Code2Icon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.78fr)_minmax(0,_1.45fr)] gap-md items-stretch">
      {/* Left info card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <InfoItem icon={<FileCodeIcon className="h-4 w-4" />} label={content.fileLabel}>
          <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
            {content.filePath}
          </code>
        </InfoItem>

        <InfoItem icon={<Settings2Icon className="h-4 w-4" />} label={content.functionLabel}>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-md border px-2 py-0.5',
              'font-mono text-xsm font-bold',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
            )}
          >
            {content.functionName}()
          </code>
        </InfoItem>

        <InfoItem icon={<HelpCircleIcon className="h-4 w-4" />} label={content.questionLabel}>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.question}
          </p>
        </InfoItem>

        <details className="group rounded-xl border border-amber-200/80 bg-amber-50/60 dark:border-amber-800/60 dark:bg-amber-950/30">
          <summary
            className={cn(
              'flex items-center justify-between gap-sm cursor-pointer select-none list-none',
              'px-md py-3 rounded-xl',
              'font-mono text-xsm font-bold text-amber-800 dark:text-amber-200',
              'hover:bg-amber-100/60 dark:hover:bg-amber-950/50',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
            )}
          >
            <span className="inline-flex items-center gap-2">
              <LightbulbIcon className="h-4 w-4" aria-hidden="true" />
              {content.hintCta}
            </span>
            <span
              aria-hidden="true"
              className="text-amber-700/80 dark:text-amber-300/80 transition-transform group-open:rotate-90"
            >
              ›
            </span>
          </summary>
          <p className="px-md pb-md pt-1 text-xsm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
            {content.hint}
          </p>
        </details>
      </article>

      {/* Right: code panel + annotations */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-sm lg:gap-md items-stretch min-w-0">
        <div className="min-w-0">
          <CodePanel
            code={content.code}
            caption={content.codeTitle}
            language="JS"
            showWindowDots
            size="md"
          />
        </div>

        {/* Bracket annotations */}
        <ul
          className="flex lg:flex-col gap-2 lg:gap-3 lg:justify-between lg:py-2 flex-wrap"
          aria-label="코드 분기 영역 라벨"
        >
          {content.annotations.map((a) => (
            <li key={a.id}>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-md border px-2 py-1',
                  'font-mono text-[11px] font-bold tracking-tight',
                  annotationTone[a.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-block w-1 h-3 rounded-sm',
                    a.tone === 'blue' && 'bg-sky-500 dark:bg-sky-400',
                    a.tone === 'green' && 'bg-emerald-500 dark:bg-emerald-400',
                    a.tone === 'purple' && 'bg-violet-500 dark:bg-violet-400',
                  )}
                />
                {a.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const InfoItem = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-7 h-7 rounded-md',
          'bg-sky-100 text-sky-700',
          'dark:bg-sky-950/60 dark:text-sky-200',
        )}
      >
        {icon}
      </span>
      <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
        {label}
      </span>
    </div>
    <div className="pl-9">{children}</div>
  </div>
);
