import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneBadge, ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberToRootContent } from '../content';
import { ArrowLeftRightIcon, NetworkIcon, RefreshIcon } from '../icons';

type Props = { content: FiberToRootContent['alternate'] };

const tags: { label: string; tone: ToneKey }[] = [
  { label: 'current', tone: 'sky' },
  { label: 'work-in-progress', tone: 'violet' },
  { label: 'alternate ↔', tone: 'emerald' },
];

export const AlternateUpdateReasonSection = ({ content }: Props) => (
  <section id="section-alternate" aria-labelledby="heading-alternate" className="space-y-md">
    <SectionHeader
      id="alternate"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <header className="flex items-center gap-sm">
          <ToneIconBox tone="sky" size="sm">
            <RefreshIcon className="h-[18px] w-[18px]" />
          </ToneIconBox>
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            mirror across alternate
          </span>
        </header>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag.label}
              className={cn(
                'rounded-md border px-2 py-0.5 text-[10px] font-mono',
                toneTokens[tag.tone].chip,
              )}
            >
              {tag.label}
            </li>
          ))}
        </ul>
      </article>

      {/* 우: current ↔ work-in-progress */}
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
          <TreeCard
            tone="sky"
            title={content.currentTitle}
            body={content.currentBody}
            badge="current"
          />
          <MiddleConnector label={content.middleLabel} />
          <TreeCard tone="violet" title={content.wipTitle} body={content.wipBody} badge="WIP" />
        </div>
      </article>
    </div>
  </section>
);

const TreeCard = ({
  tone,
  title,
  body,
  badge,
}: {
  tone: ToneKey;
  title: string;
  body: string;
  badge: string;
}) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <ToneIconBox tone={tone} size="md">
          <NetworkIcon className="h-5 w-5" />
        </ToneIconBox>
        <ToneBadge tone={tone}>{badge}</ToneBadge>
      </header>
      <h3 className={cn('text-sm sm:text-md font-bold font-mono leading-tight break-keep', t.text)}>
        {title}
      </h3>
      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border bg-[var(--term-surface)] px-2 py-1 font-mono text-[11px] font-bold',
          t.border,
          t.text,
        )}
      >
        {body}
      </code>
    </article>
  );
};

const MiddleConnector = ({ label }: { label: string }) => (
  <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
    <span
      aria-hidden="true"
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)] shadow-[0_2px_0_var(--term-border)]"
    >
      <ArrowLeftRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-fg)] text-center break-keep">
      {label}
    </span>
  </div>
);
