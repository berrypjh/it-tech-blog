import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { GithubIcon } from '../../../shared/GithubIcon';
import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneIconBox } from '../../../shared/ToneIconBox';
import type { CheckpointItem, ReconcilerContent } from '../content';
import { ArrowRightIcon, ExternalLinkIcon, reconcilerIcon } from '../icons';

type Props = { content: ReconcilerContent['checkpoint']; sectionId: string };

export const CheckpointSection = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-checkpoint"
      className="space-y-md scroll-mt-2xl"
    >
      <SectionHeader
        id="checkpoint"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckpointHeaderIcon />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)] gap-md items-start">
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border p-md sm:p-lg',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <ul className="flex flex-col divide-y divide-dashed divide-[var(--term-border)]">
            {content.items.map((item) => (
              <li key={item.id} className="py-3 first:pt-0 last:pb-0">
                <CheckpointRow item={item} />
              </li>
            ))}
          </ul>
        </article>

        <div className="flex flex-col gap-md min-w-0">
          <CodePreviewPanel header={content.codeCaption} badge="main" code={content.code} />

          <div className="flex flex-col sm:flex-row gap-2">
            {content.codeLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group inline-flex items-center justify-center gap-2 rounded-md px-md py-2.5 text-xsm font-bold min-w-0',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  i === 0
                    ? 'bg-[var(--term-accent)] text-[var(--term-bg)] transition-all hover:opacity-90'
                    : 'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)]',
                )}
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span className="font-mono">{link.label}</span>
                {i === 0 ? (
                  <ArrowRightIcon
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                ) : (
                  <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckpointRow = ({ item }: { item: CheckpointItem }) => {
  const Icon = reconcilerIcon[item.iconName];
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold font-mono">
        {item.label}
      </span>
      <div className="flex items-start gap-2">
        <ToneIconBox tone={item.tone} size="sm">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </ToneIconBox>
        <span className="min-w-0 flex-1 pt-1 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] font-mono break-all">
          {item.value}
        </span>
      </div>
    </div>
  );
};

const CheckpointHeaderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);
