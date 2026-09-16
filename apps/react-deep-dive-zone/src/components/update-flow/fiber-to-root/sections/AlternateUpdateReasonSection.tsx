import { cx } from '@berrypjh/react-ui';
import { ArrowLeftRight, Network, RefreshCw } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberToRootContent } from '../content';

type Props = { content: FiberToRootContent['alternate'] };

export const AlternateUpdateReasonSection = ({ content }: Props) => (
  <section id="alternate" aria-labelledby="heading-alternate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="alternate"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RefreshCw className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.2fr)] gap-md lg:gap-lg items-stretch">
      {/* 좌: 설명 */}
      <article className="flex flex-col gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="sky" size="sm">
          <RefreshCw className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>
      </article>

      {/* 우: current ↔ work-in-progress */}
      <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
          <TreeCard tone="sky" title={content.currentTitle} body={content.currentBody} />
          <MiddleConnector label={content.middleLabel} />
          <TreeCard tone="violet" title={content.wipTitle} body={content.wipBody} />
        </div>
      </article>
    </div>
  </section>
);

const TreeCard = ({ tone, title, body }: { tone: ToneKey; title: string; body: string }) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cx(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        t.border,
      )}
    >
      <ToneIconBox tone={tone} size="md">
        <Network className="h-5 w-5" aria-hidden="true" />
      </ToneIconBox>
      <h3 className={cx('text-sm sm:text-md font-bold font-mono leading-tight break-keep', t.text)}>
        {title}
      </h3>
      <code
        className={cx(
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
      <ArrowLeftRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden="true" />
    </span>
    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-fg)] text-center break-keep">
      {label}
    </span>
  </div>
);
