import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { StatePreserveSide, TypeKeyReuseContent } from '../content';
import { facetFor, type SemanticFacet } from '../facets';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  Link2OffIcon,
  LinkIcon,
  ShieldCheckIcon,
  Trash2Icon,
} from '../icons';

type Props = { content: TypeKeyReuseContent['statePreserve'] };

export const StatePreservationConnection = ({ content }: Props) => (
  <section
    id="state-preservation"
    aria-labelledby="heading-state-preservation"
    className="space-y-md"
  >
    <SectionHeader
      id="state-preservation"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.4fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      <article className="flex items-start gap-md rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        <ToneIconBox tone="teal" size="md">
          <LinkIcon className="h-5 w-5" />
        </ToneIconBox>
        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] font-bold break-keep">
          {content.description}
        </p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        <SideCard side={content.reuse} />
        <SideCard side={content.replace} />
      </div>
    </div>
  </section>
);

const SideCard = ({ side }: { side: StatePreserveSide }) => {
  const isReuse = side.kind === 'reuse';
  const t = facetFor(isReuse ? 'teal' : 'rose');
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-lg border p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className={cn('text-xxsm font-mono uppercase tracking-wider', t.text)}>
            {side.header}
          </span>
          <span className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
            {side.subtitle}
          </span>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          {isReuse ? <ShieldCheckIcon className="h-5 w-5" /> : <Trash2Icon className="h-5 w-5" />}
        </span>
      </header>

      <RenderCard
        label="이전 렌더"
        code={side.previous.code}
        count={side.previous.count}
        t={toneTokens.sky}
      />

      <div className="flex items-center justify-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center gap-1 text-xxsm font-mono uppercase tracking-wider',
            t.text,
          )}
        >
          {isReuse ? <CheckCircleIcon className="h-4 w-4" /> : <Link2OffIcon className="h-4 w-4" />}
          {isReuse ? '재사용' : '교체'}
          <ChevronDownIcon className="md:hidden h-4 w-4" />
          <ArrowRightIcon className="hidden md:block h-4 w-4 rotate-90" />
        </span>
      </div>

      <RenderCard
        label="다음 렌더"
        code={side.next.code}
        count={side.next.count}
        note={side.next.note}
        t={t}
      />

      <p className={cn('mt-auto text-xsm sm:text-sm leading-relaxed font-bold break-keep', t.text)}>
        {side.bottom}
      </p>
    </article>
  );
};

const RenderCard = ({
  label,
  code,
  count,
  note,
  t,
}: {
  label: string;
  code: string;
  count: string;
  note?: string;
  t: SemanticFacet;
}) => (
  <article
    className={cn(
      'flex flex-col gap-1 rounded-md border bg-[var(--term-bg)] p-sm sm:p-md',
      t.border,
    )}
  >
    <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
      {label}
    </span>
    <code className="font-mono text-xsm sm:text-sm font-bold break-all text-[var(--term-fg)]">
      {code}
    </code>
    <div className="flex flex-wrap items-baseline gap-2">
      <code className={cn('font-mono text-md sm:text-lg font-bold', t.text)}>{count}</code>
      {note && (
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {note}
        </span>
      )}
    </div>
  </article>
);
