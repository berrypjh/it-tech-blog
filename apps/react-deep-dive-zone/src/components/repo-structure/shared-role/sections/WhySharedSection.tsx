import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import { ContrastCard, StatusPill } from '../../../shared/compare';
import { SectionHeader } from '../../../shared/section';
import type { SharedContent } from '../content';
import { CircleHelpIcon, iconByName, SparklesIcon } from '../icons';

type Props = { content: SharedContent['why'] };

export const WhySharedSection = ({ content }: Props) => {
  const AlertIcon = iconByName.triangleAlert;
  const FlagIcon = iconByName.folderCheck;

  return (
    <section aria-labelledby="heading-why" className="space-y-md">
      <SectionHeader
        id="why"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <ContrastCard
        left={
          <ListPanel
            icon={<AlertIcon className="h-3.5 w-3.5" aria-hidden="true" />}
            tone="text-rose-600 dark:text-rose-300"
            dotClass="bg-rose-400 dark:bg-rose-500"
            badge={content.problemBadge}
            copy={content.problemCopy}
            items={content.problemList}
          />
        }
        right={
          <ListPanel
            icon={<FlagIcon className="h-3.5 w-3.5" aria-hidden="true" />}
            tone="text-[var(--term-accent)]"
            dotClass="bg-[var(--term-accent)]"
            badge={content.solutionBadge}
            copy={content.solutionCopy}
            items={content.solutionList}
          />
        }
        footer={<ExamplePanel title={content.exampleTitle} tags={content.exampleTags} />}
      />
    </section>
  );
};

type ListPanelProps = {
  icon: ReactNode;
  /** 배지·강조의 의미색 텍스트 클래스. */
  tone: string;
  /** 불릿 점의 배경 색 클래스. */
  dotClass: string;
  badge: string;
  copy: string;
  items: string[];
};

const ListPanel = ({ icon, tone, dotClass, badge, copy, items }: ListPanelProps) => (
  <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
    <StatusPill icon={icon} tone={tone}>
      {badge}
    </StatusPill>

    <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
      {copy}
    </p>

    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-muted)] break-keep"
        >
          <span
            aria-hidden="true"
            className={cn('mt-1.5 inline-block w-1.5 h-1.5 rounded-full shrink-0', dotClass)}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);

type ExampleProps = { title: string; tags: string[] };

const ExamplePanel = ({ title, tags }: ExampleProps) => (
  <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl border-t border-dashed border-[var(--term-border)]">
    <StatusPill
      icon={<SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />}
      tone="text-[var(--term-accent)]"
    >
      {title}
    </StatusPill>

    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-md border px-2 py-1.5 text-xsm font-mono break-keep',
              'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-fg)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)] shrink-0"
            />
            {tag}
          </span>
        </li>
      ))}
    </ul>
  </article>
);
