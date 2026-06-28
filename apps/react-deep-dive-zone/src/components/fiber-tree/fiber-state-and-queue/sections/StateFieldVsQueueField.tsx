import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { FiberStateAndQueueContent, FieldKind, RoleFlowCard } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ComponentIcon,
  DatabaseIcon,
  ListIcon,
} from '../icons';

type Props = { content: FiberStateAndQueueContent['roleFlow'] };

const iconMap = {
  database: DatabaseIcon,
  list: ListIcon,
  check: CheckCircleIcon,
} as const;

/** field 칩 색은 항상 필드 정체성을 따른다: memoizedState=emerald, updateQueue=violet. */
const fieldTone: Record<FieldKind, ToneKey> = {
  memoizedState: 'emerald',
  updateQueue: 'violet',
};

export const StateFieldVsQueueField = ({ content }: Props) => (
  <section id="roleflow" aria-labelledby="heading-roleflow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roleflow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ComponentIcon className="h-5 w-5" />}
    />

    <ol className="grid items-stretch gap-sm grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {content.cards.map((card, idx) => (
        <Fragment key={card.id}>
          <li className="flex min-w-0">
            <RoleCard card={card} />
          </li>
          {idx < content.cards.length - 1 && (
            <li className="flex items-center justify-center" aria-hidden="true">
              {/* 2 → 3 is dotted to indicate the time gap to "next render" */}
              <ConnectorArrow dotted={idx === 1} />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  </section>
);

const ConnectorArrow = ({ dotted }: { dotted: boolean }) => (
  <>
    <span className="hidden lg:inline-flex flex-col items-center gap-1">
      <span
        aria-hidden="true"
        className={cn(
          'block h-px w-10 border-t-2 border-[var(--term-border)]',
          dotted && 'border-dashed',
        )}
      />
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]">
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
      {dotted && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-accent)] whitespace-nowrap">
          next render
        </span>
      )}
    </span>
    <span className="lg:hidden inline-flex flex-col items-center gap-1 py-1">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-accent)]">
        <ArrowDownIcon className="h-3.5 w-3.5" />
      </span>
      {dotted && (
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-accent)]">
          next render
        </span>
      )}
    </span>
  </>
);

const RoleCard = ({ card }: { card: RoleFlowCard }) => {
  const t = toneTokens[card.tone];
  const ft = toneTokens[fieldTone[card.field]];
  const Icon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'flex flex-1 min-w-0 flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
        t.borderHover,
      )}
    >
      <ToneIconBox tone={card.tone}>
        <Icon className="h-5 w-5" />
      </ToneIconBox>
      <h3 className={cn('text-xsm sm:text-sm font-bold tracking-tight break-keep', t.text)}>
        {card.title}
      </h3>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[12.5px] font-bold',
          t.chip,
        )}
      >
        {card.valuePill}
      </span>
      <span
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[11.5px] font-bold',
          ft.chip,
        )}
      >
        {card.field}
      </span>
      <div className="flex flex-col gap-0.5 mt-auto">
        {card.descriptionLines.map((line, i) => (
          <p key={i} className="text-[11.5px] leading-relaxed text-[var(--term-muted)] break-keep">
            {line}
          </p>
        ))}
      </div>
    </article>
  );
};
