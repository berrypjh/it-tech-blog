import { cx } from '@berrypjh/react-ui';
import {
  ArrowRight,
  Code2,
  Hammer,
  Inbox,
  type LucideIcon,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react';

import { GithubIcon } from '../../../shared/icon/GithubIcon';
import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CodeEntry, WhyReadNextSourceContent } from '../content';

type Props = { content: WhyReadNextSourceContent['codeEntry'] };

const flowIcons: Record<CodeEntry['flowIcon'], LucideIcon> = {
  request: Inbox,
  'server-render': ServerCog,
  client: MonitorSmartphone,
  build: Hammer,
};

const EntryCard = ({
  entry,
  questionLabel,
  conceptLabel,
}: {
  entry: CodeEntry;
  questionLabel: string;
  conceptLabel: string;
}) => {
  const t = toneTokens[entry.tone];
  const Icon = flowIcons[entry.flowIcon];

  return (
    <article
      className={cx(
        'group flex h-full flex-col gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg transition-all',
        'motion-safe:hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        'border-[var(--term-border)]',
      )}
    >
      {/* 영역 + 경로 */}
      <div className="flex items-start gap-sm">
        <span
          className={cx(
            'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border',
            t.chip,
          )}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex flex-col gap-1">
          <h3 className={cx('text-md font-bold tracking-tight', t.text)}>{entry.area}</h3>
          <code className="block rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-[10.5px] leading-snug text-[var(--term-fg)] [overflow-wrap:anywhere]">
            {entry.path}
          </code>
        </div>
      </div>

      {/* 볼 질문 */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {questionLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {entry.question}
        </p>
      </div>

      {/* 관련 개념 */}
      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-bold">
          {conceptLabel}
        </span>
        <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
          {entry.concepts}
        </p>
      </div>

      {/* GitHub 버튼 */}
      <a
        href={entry.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2.5 text-xsm font-bold text-[var(--term-fg)] transition-colors hover:border-[var(--term-accent)] hover:text-[var(--term-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]"
      >
        <GithubIcon className="h-4 w-4" />
        {entry.cta}
        <ArrowRight className="h-4 w-4 transition-transform motion-safe:group-hover:translate-x-0.5" />
      </a>
    </article>
  );
};

export const NextCodeEntryMap = ({ content }: Props) => {
  return (
    <section
      id="section-code-entry"
      aria-labelledby="heading-code-entry"
      className="space-y-lg rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg lg:p-xl"
    >
      <SectionHeader
        id="code-entry"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Code2 className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {content.entries.map((entry) => (
          <li key={entry.id} className="flex">
            <EntryCard
              entry={entry}
              questionLabel={content.questionLabel}
              conceptLabel={content.conceptLabel}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
