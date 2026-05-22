import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../_shared/CodePanel';
import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { CheckpointInfo, ReactCreateElementContent } from '../content';
import {
  ArrowRightIcon,
  CodeIcon,
  FileTextIcon,
  FunctionSquareIcon,
  HelpCircleIcon,
} from '../icons';

type Props = { content: ReactCreateElementContent['checkpoint'] };

const iconMap = {
  fileText: FileTextIcon,
  functionSquare: FunctionSquareIcon,
  helpCircle: HelpCircleIcon,
} as const;

export const CreateElementSourceCheckpoint = ({ content }: Props) => (
  <section id="checkpoint" aria-labelledby="heading-checkpoint" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checkpoint"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<CodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.8fr)_minmax(0,_1.2fr)] gap-md items-stretch">
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ul className="flex flex-col gap-md divide-y divide-dashed divide-[var(--term-border)]">
          {content.infos.map((info) => (
            <InfoRow key={info.id} info={info} />
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-sm pt-sm border-t border-dashed border-[var(--term-border)]">
          <a
            href={content.primaryHref}
            className={cn(
              'group inline-flex items-center justify-center gap-2 px-md py-2.5 rounded-md flex-1',
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
              'group inline-flex items-center justify-center gap-2 px-md py-2.5 rounded-md flex-1',
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
      </article>

      <div className="min-w-0">
        <CodePanel code={content.code} language="JS" showWindowDots caption="ReactJSXElement.js" />
      </div>
    </div>
  </section>
);

const InfoRow = ({ info }: { info: CheckpointInfo }) => {
  const Icon = iconMap[info.iconName];
  const monospaced = info.id === 'file' || info.id === 'function';
  return (
    <li className="flex items-start gap-md pt-md first:pt-0">
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
      >
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono">
          {info.label}
        </span>
        {monospaced ? (
          <code className="font-mono text-xsm sm:text-sm tracking-tight text-[var(--term-fg)] break-all">
            {info.value}
          </code>
        ) : (
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {info.value}
          </p>
        )}
      </div>
    </li>
  );
};
